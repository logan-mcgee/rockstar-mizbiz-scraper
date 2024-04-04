/*! For license information please see 1d49cf83727420c0143eda5bb8cf37a2.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7b555a3c-b073-494f-be18-1bb299819bf4", e._sentryDebugIdIdentifier = "sentry-dbid-7b555a3c-b073-494f-be18-1bb299819bf4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/intl",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || []).push([
  [11], {
    76: (e, t, r) => {
      r.d(t, {
        AQ: () => s,
        Ub: () => c,
        Wq: () => h,
        oR: () => a,
        q2: () => l,
        yk: () => u
      });
      var n, o = r(672);
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(n || (n = {}));
      var i = function(e) {
          function t(r, n, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, o.ct)(t, e), t
        }(Error),
        a = function(e) {
          function t(t, r) {
            return e.call(this, n.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, o.ct)(t, e), t
        }(i),
        s = function(e) {
          function t(t, r) {
            return e.call(this, n.INVALID_CONFIG, t, r) || this
          }
          return (0, o.ct)(t, e), t
        }(i),
        u = function(e) {
          function t(t, r) {
            return e.call(this, n.MISSING_DATA, t, r) || this
          }
          return (0, o.ct)(t, e), t
        }(i),
        l = function(e) {
          function t(t, r, o) {
            var i = e.call(this, n.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), o) || this;
            return i.locale = r, i
          }
          return (0, o.ct)(t, e), t
        }(i),
        c = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, o.ct)(t, e), t
        }(l),
        h = function(e) {
          function t(t, r) {
            var o = e.call(this, n.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return o.descriptor = t, o
          }
          return (0, o.ct)(t, e), t
        }(i)
    },
    848: (e, t, r) => {
      r.d(t, {
        AH: () => h,
        OY: () => s,
        SI: () => u,
        Se: () => l,
        _u: () => f
      });
      var n = r(672),
        o = r(808),
        i = r(288),
        a = r(76);

      function s(e, t, r) {
        return void 0 === r && (r = {}), t.reduce((function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }), {})
      }
      var u = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function l() {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {}
        }
      }

      function c(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }

      function h(e) {
        void 0 === e && (e = {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {}
        });
        var t = Intl.RelativeTimeFormat,
          r = Intl.ListFormat,
          a = Intl.DisplayNames,
          s = (0, i.s)((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.DateTimeFormat).bind.apply(e, (0, n.Mt)([void 0], t, !1)))
          }), {
            cache: c(e.dateTime),
            strategy: i.A.variadic
          }),
          u = (0, i.s)((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.NumberFormat).bind.apply(e, (0, n.Mt)([void 0], t, !1)))
          }), {
            cache: c(e.number),
            strategy: i.A.variadic
          }),
          l = (0, i.s)((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.PluralRules).bind.apply(e, (0, n.Mt)([void 0], t, !1)))
          }), {
            cache: c(e.pluralRules),
            strategy: i.A.variadic
          });
        return {
          getDateTimeFormat: s,
          getNumberFormat: u,
          getMessageFormat: (0, i.s)((function(e, t, r, i) {
            return new o.W(e, t, r, (0, n.C3)({
              formatters: {
                getNumberFormat: u,
                getDateTimeFormat: s,
                getPluralRules: l
              }
            }, i || {}))
          }), {
            cache: c(e.message),
            strategy: i.A.variadic
          }),
          getRelativeTimeFormat: (0, i.s)((function() {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new(t.bind.apply(t, (0, n.Mt)([void 0], e, !1)))
          }), {
            cache: c(e.relativeTime),
            strategy: i.A.variadic
          }),
          getPluralRules: l,
          getListFormat: (0, i.s)((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(r.bind.apply(r, (0, n.Mt)([void 0], e, !1)))
          }), {
            cache: c(e.list),
            strategy: i.A.variadic
          }),
          getDisplayNames: (0, i.s)((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(a.bind.apply(a, (0, n.Mt)([void 0], e, !1)))
          }), {
            cache: c(e.displayNames),
            strategy: i.A.variadic
          })
        }
      }

      function f(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new a.oR("No ".concat(t, " format named: ").concat(r)))
      }
    },
    52: (e, t, r) => {
      r.d(t, {
        Os: () => h
      });
      var n, o, i = r(672),
        a = r(100),
        s = r(688);
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(n || (n = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(o || (o = {}));
      var u = function(e) {
        var t = (0, s.c)(),
          r = e.value,
          n = e.children,
          o = (0, i.sX)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function l(e) {
        var t = function(t) {
          var r = (0, s.c)(),
            n = t.value,
            o = t.children,
            a = (0, i.sX)(t, ["value", "children"]),
            u = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(u, a) : r.formatTimeToParts(u, a))
        };
        return t.displayName = o[e], t
      }

      function c(e) {
        var t = function(t) {
          var r = (0, s.c)(),
            n = t.value,
            o = t.children,
            u = (0, i.sX)(t, ["value", "children"]),
            l = r[e](n, u);
          if ("function" == typeof o) return o(l);
          var c = r.textComponent || a.Fragment;
          return a.createElement(c, null, l)
        };
        return t.displayName = n[e], t
      }

      function h(e) {
        return e
      }
      u.displayName = "FormattedNumberParts", u.displayName = "FormattedNumberParts", c("formatDate"), c("formatTime"), c("formatNumber"), c("formatList"), c("formatDisplayName"), l("formatDate"), l("formatTime")
    },
    188: (e, t, r) => {
      r.d(t, {
        y: () => k
      });
      var n = r(672),
        o = r(908),
        i = r(808),
        a = r(76),
        s = r(4);

      function u(e, t) {
        return Object.keys(e).reduce((function(r, o) {
          return r[o] = (0, n.C3)({
            timeZone: t
          }, e[o]), r
        }), {})
      }

      function l(e, t) {
        return Object.keys((0, n.C3)((0, n.C3)({}, e), t)).reduce((function(r, o) {
          return r[o] = (0, n.C3)((0, n.C3)({}, e[o] || {}), t[o] || {}), r
        }), {})
      }

      function c(e, t) {
        if (!t) return e;
        var r = i.W.formats;
        return (0, n.C3)((0, n.C3)((0, n.C3)({}, r), e), {
          date: l(u(r.date, t), u(e.date || {}, t)),
          time: l(u(r.time, t), u(e.time || {}, t))
        })
      }
      var h = function(e, t, r, i, u) {
          var l = e.locale,
            h = e.formats,
            f = e.messages,
            p = e.defaultLocale,
            m = e.defaultFormats,
            d = e.fallbackOnEmptyString,
            y = e.onError,
            g = e.timeZone,
            b = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var E = r.id,
            v = r.defaultMessage;
          (0, o.ON)(!!E, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var T = String(E),
            _ = f && Object.prototype.hasOwnProperty.call(f, T) && f[T];
          if (Array.isArray(_) && 1 === _.length && _[0].type === s._M.literal) return _[0].value;
          if (!i && _ && "string" == typeof _ && !b) return _.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (i = (0, n.C3)((0, n.C3)({}, b), i || {}), h = c(h, g), m = c(m, g), !_) {
            if (!1 === d && "" === _) return _;
            if ((!v || l && l.toLowerCase() !== p.toLowerCase()) && y(new a.Wq(r, l)), v) try {
              return t.getMessageFormat(v, p, m, u).format(i)
            } catch (e) {
              return y(new a.Ub('Error formatting default message for: "'.concat(T, '", rendering default message verbatim'), l, r, e)), "string" == typeof v ? v : T
            }
            return T
          }
          try {
            return t.getMessageFormat(_, l, h, (0, n.C3)({
              formatters: t
            }, u || {})).format(i)
          } catch (e) {
            y(new a.Ub('Error formatting message: "'.concat(T, '", using ').concat(v ? "default message" : "id", " as fallback."), l, r, e))
          }
          if (v) try {
            return t.getMessageFormat(v, p, m, u).format(i)
          } catch (e) {
            y(new a.Ub('Error formatting the default message for: "'.concat(T, '", rendering message verbatim'), l, r, e))
          }
          return "string" == typeof _ ? _ : "string" == typeof v ? v : T
        },
        f = r(848),
        p = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function m(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var a = r.format,
          s = a && (0, f._u)(o, "number", a, i) || {};
        return t(n, (0, f.OY)(r, p, s))
      }

      function d(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return m(e, t, n).format(r)
        } catch (t) {
          e.onError(new a.q2("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function y(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return m(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new a.q2("Error formatting number.", e.locale, t))
        }
        return []
      }
      var g = r(332),
        b = ["numeric", "style"];

      function E(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new g.cn('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', g.uI.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var a = r.format,
              s = !!a && (0, f._u)(o, "relative", a, i) || {};
            return t(n, (0, f.OY)(r, b, s))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new a.q2("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var v = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function T(e, t, r, o) {
        var i = e.locale,
          a = e.formats,
          s = e.onError,
          u = e.timeZone;
        void 0 === o && (o = {});
        var l = o.format,
          c = (0, n.C3)((0, n.C3)({}, u && {
            timeZone: u
          }), l && (0, f._u)(a, t, l, s)),
          h = (0, f.OY)(o, v, c);
        return "time" !== t || h.hour || h.minute || h.second || h.timeStyle || h.dateStyle || (h = (0, n.C3)((0, n.C3)({}, h), {
          hour: "numeric",
          minute: "numeric"
        })), r(i, h)
      }

      function _(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          u = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return T(e, "date", t, s).format(u)
        } catch (t) {
          e.onError(new a.q2("Error formatting date.", e.locale, t))
        }
        return String(u)
      }

      function S(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          u = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return T(e, "time", t, s).format(u)
        } catch (t) {
          e.onError(new a.q2("Error formatting time.", e.locale, t))
        }
        return String(u)
      }

      function A(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = r[2],
          u = void 0 === s ? {} : s,
          l = e.timeZone,
          c = e.locale,
          h = e.onError,
          p = (0, f.OY)(u, v, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, p).formatRange(o, i)
        } catch (t) {
          h(new a.q2("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function H(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          u = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return T(e, "date", t, s).formatToParts(u)
        } catch (t) {
          e.onError(new a.q2("Error formatting date.", e.locale, t))
        }
        return []
      }

      function C(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          u = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return T(e, "time", t, s).formatToParts(u)
        } catch (t) {
          e.onError(new a.q2("Error formatting time.", e.locale, t))
        }
        return []
      }
      var I = ["type"];

      function N(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new g.cn('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', g.uI.MISSING_INTL_API));
        var s = (0, f.OY)(n, I);
        try {
          return t(o, s).select(r)
        } catch (e) {
          i(new a.q2("Error formatting plural.", o, e))
        }
        return "other"
      }
      var P = ["type", "style"],
        B = Date.now();

      function L(e, t, r, n) {
        void 0 === n && (n = {});
        var o = R(e, t, r, n).reduce((function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function R(e, t, r, o) {
        var i = e.locale,
          s = e.onError;
        void 0 === o && (o = {}), Intl.ListFormat || s(new g.cn('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', g.uI.MISSING_INTL_API));
        var u = (0, f.OY)(o, P);
        try {
          var l = {},
            c = r.map((function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(B, "_").concat(e, "_").concat(B)
                }(t);
                return l[r] = e, r
              }
              return String(e)
            }));
          return t(i, u).formatToParts(c).map((function(e) {
            return "literal" === e.type ? e : (0, n.C3)((0, n.C3)({}, e), {
              value: l[e.value] || e.value
            })
          }))
        } catch (e) {
          s(new a.q2("Error formatting list.", i, e))
        }
        return r
      }
      var O = ["style", "type", "fallback", "languageDisplay"];

      function M(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new g.cn('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', g.uI.MISSING_INTL_API));
        var s = (0, f.OY)(n, O);
        try {
          return t(o, s).of(r)
        } catch (e) {
          i(new a.q2("Error formatting display name.", o, e))
        }
      }
      var w = r(100),
        D = r(992),
        F = r(876);

      function U(e) {
        return e ? Object.keys(e).reduce((function(t, r) {
          var n = e[r];
          return t[r] = (0, F.sT)(n) ? (0, D.Qp)(n) : n, t
        }), {}) : e
      }
      var G = function(e, t, r, o) {
          for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
          var s = U(o),
            u = h.apply(void 0, (0, n.Mt)([e, t, r, s], i, !1));
          return Array.isArray(u) ? w.Children.toArray(u) : u
        },
        k = function(e, t) {
          var r = e.defaultRichTextElements,
            o = (0, n.sX)(e, ["defaultRichTextElements"]),
            i = U(r),
            s = function(e, t) {
              var r = (0, f.AH)(t),
                o = (0, n.C3)((0, n.C3)({}, f.SI), e),
                i = o.locale,
                s = o.defaultLocale,
                u = o.onError;
              return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && u ? u(new a.yk('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && u && u(new a.yk('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (u && u(new a.AQ('"locale" was not configured, using "'.concat(s, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), o.locale = o.defaultLocale || "en"),
                function(e) {
                  var t;
                  e.onWarn && e.defaultRichTextElements && "string" == typeof((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
                }(o), (0, n.C3)((0, n.C3)({}, o), {
                  formatters: r,
                  formatNumber: d.bind(null, o, r.getNumberFormat),
                  formatNumberToParts: y.bind(null, o, r.getNumberFormat),
                  formatRelativeTime: E.bind(null, o, r.getRelativeTimeFormat),
                  formatDate: _.bind(null, o, r.getDateTimeFormat),
                  formatDateToParts: H.bind(null, o, r.getDateTimeFormat),
                  formatTime: S.bind(null, o, r.getDateTimeFormat),
                  formatDateTimeRange: A.bind(null, o, r.getDateTimeFormat),
                  formatTimeToParts: C.bind(null, o, r.getDateTimeFormat),
                  formatPlural: N.bind(null, o, r.getPluralRules),
                  formatMessage: h.bind(null, o, r),
                  $t: h.bind(null, o, r),
                  formatList: L.bind(null, o, r.getListFormat),
                  formatListToParts: R.bind(null, o, r.getListFormat),
                  formatDisplayName: M.bind(null, o, r.getDisplayNames)
                })
            }((0, n.C3)((0, n.C3)((0, n.C3)({}, D.SI), o), {
              defaultRichTextElements: i
            }), t),
            u = {
              locale: s.locale,
              timeZone: s.timeZone,
              fallbackOnEmptyString: s.fallbackOnEmptyString,
              formats: s.formats,
              defaultLocale: s.defaultLocale,
              defaultFormats: s.defaultFormats,
              messages: s.messages,
              onError: s.onError,
              defaultRichTextElements: i
            };
          return (0, n.C3)((0, n.C3)({}, s), {
            formatMessage: G.bind(null, u, s.formatters),
            $t: G.bind(null, u, s.formatters)
          })
        }
    },
    464: (e, t, r) => {
      r.d(t, {
        C_: () => i,
        es: () => a
      });
      var n = r(100);
      r(216);
      var o = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? n.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = n.createContext(null)),
        i = (o.Consumer, o.Provider),
        a = o
    },
    832: (e, t, r) => {
      r.d(t, {
        c: () => c
      });
      var n = r(672),
        o = r(100),
        i = r(688),
        a = r(992);

      function s(e, t) {
        var r = e.values,
          o = (0, n.sX)(e, ["values"]),
          i = t.values,
          s = (0, n.sX)(t, ["values"]);
        return (0, a.G)(i, r) && (0, a.G)(o, s)
      }

      function u(e) {
        var t = (0, i.c)(),
          r = t.formatMessage,
          n = t.textComponent,
          a = void 0 === n ? o.Fragment : n,
          s = e.id,
          u = e.description,
          l = e.defaultMessage,
          c = e.values,
          h = e.children,
          f = e.tagName,
          p = void 0 === f ? a : f,
          m = r({
            id: s,
            description: u,
            defaultMessage: l
          }, c, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof h ? h(Array.isArray(m) ? m : [m]) : p ? o.createElement(p, null, o.Children.toArray(m)) : o.createElement(o.Fragment, null, m)
      }
      u.displayName = "FormattedMessage";
      var l = o.memo(u, s);
      l.displayName = "MemoizedFormattedMessage";
      const c = l
    },
    852: (e, t, r) => {
      r.d(t, {
        c: () => c
      });
      var n = r(672),
        o = r(848),
        i = r(100),
        a = r(992),
        s = r(464),
        u = r(188);

      function l(e) {
        return {
          locale: e.locale,
          timeZone: e.timeZone,
          fallbackOnEmptyString: e.fallbackOnEmptyString,
          formats: e.formats,
          textComponent: e.textComponent,
          messages: e.messages,
          defaultLocale: e.defaultLocale,
          defaultFormats: e.defaultFormats,
          onError: e.onError,
          onWarn: e.onWarn,
          wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
          defaultRichTextElements: e.defaultRichTextElements
        }
      }
      const c = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cache = (0, o.Se)(), t.state = {
            cache: t.cache,
            intl: (0, u.y)(l(t.props), t.cache),
            prevConfig: l(t.props)
          }, t
        }
        return (0, n.ct)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = l(e);
          return (0, a.G)(r, o) ? null : {
            intl: (0, u.y)(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return (0, a.QB)(this.state.intl), i.createElement(s.C_, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = a.SI, t
      }(i.PureComponent)
    },
    688: (e, t, r) => {
      r.d(t, {
        c: () => a
      });
      var n = r(100),
        o = r(464),
        i = r(992);

      function a() {
        var e = n.useContext(o.es);
        return (0, i.QB)(e), e
      }
    },
    992: (e, t, r) => {
      r.d(t, {
        G: () => c,
        QB: () => s,
        Qp: () => l,
        SI: () => u
      });
      var n = r(672),
        o = r(100),
        i = r(908),
        a = r(848);

      function s(e) {
        (0, i.ON)(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }
      var u = (0, n.C3)((0, n.C3)({}, a.SI), {
        textComponent: o.Fragment
      });

      function l(e) {
        return function(t) {
          return e(o.Children.toArray(t))
        }
      }

      function c(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var r = Object.keys(e),
          n = Object.keys(t),
          o = r.length;
        if (n.length !== o) return !1;
        for (var i = 0; i < o; i++) {
          var a = r[i];
          if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
        }
        return !0
      }
    },
    908: (e, t, r) => {
      function n(e, t, r) {
        if (void 0 === r && (r = Error), !e) throw new r(t)
      }
      r.d(t, {
        ON: () => n
      })
    },
    288: (e, t, r) => {
      function n(e, t) {
        var r = t && t.cache ? t.cache : c,
          n = t && t.serializer ? t.serializer : u;
        return (t && t.strategy ? t.strategy : s)(e, {
          cache: r,
          serializer: n
        })
      }

      function o(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function i(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function a(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function s(e, t) {
        return a(e, this, 1 === e.length ? o : i, t.cache.create(), t.serializer)
      }
      r.d(t, {
        A: () => h,
        s: () => n
      });
      var u = function() {
        return JSON.stringify(arguments)
      };

      function l() {
        this.cache = Object.create(null)
      }
      l.prototype.get = function(e) {
        return this.cache[e]
      }, l.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var c = {
          create: function() {
            return new l
          }
        },
        h = {
          variadic: function(e, t) {
            return a(e, this, i, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return a(e, this, o, t.cache.create(), t.serializer)
          }
        }
    },
    4: (e, t, r) => {
      r.d(t, {
        _M: () => o,
        kd: () => u,
        Ml: () => c,
        iO: () => g,
        kl: () => s,
        Mp: () => l,
        fX: () => y,
        WC: () => p,
        EZ: () => m,
        uU: () => f,
        AX: () => d,
        ue: () => h,
        K0: () => ie
      });
      var n, o, i, a = r(672);

      function s(e) {
        return e.type === o.literal
      }

      function u(e) {
        return e.type === o.argument
      }

      function l(e) {
        return e.type === o.number
      }

      function c(e) {
        return e.type === o.date
      }

      function h(e) {
        return e.type === o.time
      }

      function f(e) {
        return e.type === o.select
      }

      function p(e) {
        return e.type === o.plural
      }

      function m(e) {
        return e.type === o.pound
      }

      function d(e) {
        return e.type === o.tag
      }

      function y(e) {
        return !(!e || "object" != typeof e || e.type !== i.number)
      }

      function g(e) {
        return !(!e || "object" != typeof e || e.type !== i.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(n || (n = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(o || (o = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(i || (i = {}));
      var b = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        E = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function v(e) {
        var t = {};
        return e.replace(E, (function(e) {
          var r = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === r ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = r < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        })), t
      }
      var T = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        _ = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        S = /^(@+)?(\+|#+)?[rs]?$/g,
        A = /(\*)(0+)|(#+)(0+)|(0+)/g,
        H = /^(0+)$/;

      function C(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(S, (function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        })), t
      }

      function I(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function N(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !H.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function P(e) {
        return I(e) || {}
      }

      function B(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var o = n[r];
          switch (o.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = o.options[0];
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              t.style = "unit", t.unit = o.options[0].replace(/^(.*?)-/, "");
              continue;
            case "compact-short":
            case "K":
              t.notation = "compact", t.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              t.notation = "compact", t.compactDisplay = "long";
              continue;
            case "scientific":
              t = (0, a.C3)((0, a.C3)((0, a.C3)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, a.C3)((0, a.C3)({}, e), P(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, a.C3)((0, a.C3)((0, a.C3)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, a.C3)((0, a.C3)({}, e), P(t))
              }), {}));
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              t.currencyDisplay = "code", t.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              t.currencyDisplay = "name", t.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(o.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              o.options[0].replace(A, (function(e, r, n, o, i, a) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (H.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (_.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(_, (function(e, r, n, o, i, a) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, a.C3)((0, a.C3)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, a.C3)((0, a.C3)({}, t), C(i)))
          } else if (S.test(o.stem)) t = (0, a.C3)((0, a.C3)({}, t), C(o.stem));
          else {
            var s = I(o.stem);
            s && (t = (0, a.C3)((0, a.C3)({}, t), s));
            var u = N(o.stem);
            u && (t = (0, a.C3)((0, a.C3)({}, t), u))
          }
        }
        return t
      }
      var L, R = {
        "001": ["H", "h"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["H", "h", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["H", "hB", "h", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["H", "h", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["H", "h", "hB", "hb"],
        CU: ["H", "h", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["H", "hB", "h", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["H", "h", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["H", "h", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["H", "h", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["H", "h", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["H", "hB", "h", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["H", "h", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["H", "h", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["H", "h", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "es-BO": ["H", "h", "hB", "hb"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-EC": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "es-PE": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"]
      };

      function O(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (R[r || ""] || R[n || ""] || R["".concat(n, "-001")] || R["001"])[0]
      }
      var M = new RegExp("^".concat(b.source, "*")),
        w = new RegExp("".concat(b.source, "*$"));

      function D(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var F = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        U = !!String.fromCodePoint,
        G = !!Object.fromEntries,
        k = !!String.prototype.codePointAt,
        j = !!String.prototype.trimStart,
        x = !!String.prototype.trimEnd,
        V = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        $ = !0;
      try {
        $ = "a" === (null === (L = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === L ? void 0 : L[0])
      } catch (e) {
        $ = !1
      }
      var X, Y = F ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Z = U ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        K = G ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        W = k ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        q = j ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(M, "")
        },
        z = x ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(w, "")
        };

      function Q(e, t) {
        return new RegExp(e, t)
      }
      if ($) {
        var J = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        X = function(e, t) {
          var r;
          return J.lastIndex = t, null !== (r = J.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else X = function(e, t) {
        for (var r = [];;) {
          var n = W(e, t);
          if (void 0 === n || re(n) || ne(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Z.apply(void 0, r)
      };
      var ee = function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        return e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var i = []; !this.isEOF();) {
            var a = this.char();
            if (123 === a) {
              if ((s = this.parseArgument(e, r)).err) return s;
              i.push(s.val)
            } else {
              if (125 === a && e > 0) break;
              if (35 !== a || "plural" !== t && "selectordinal" !== t) {
                if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(n.UNMATCHED_CLOSING_TAG, D(this.clonePosition(), this.clonePosition()))
                }
                if (60 === a && !this.ignoreTag && te(this.peek() || 0)) {
                  if ((s = this.parseTag(e, t)).err) return s;
                  i.push(s.val)
                } else {
                  var s;
                  if ((s = this.parseLiteral(e, t)).err) return s;
                  i.push(s.val)
                }
              } else {
                var u = this.clonePosition();
                this.bump(), i.push({
                  type: o.pound,
                  location: D(u, this.clonePosition())
                })
              }
            }
          }
          return {
            val: i,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var i = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: o.literal,
              value: "<".concat(i, "/>"),
              location: D(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var a = this.parseMessage(e + 1, t, !0);
            if (a.err) return a;
            var s = a.val,
              u = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !te(this.char())) return this.error(n.INVALID_TAG, D(u, this.clonePosition()));
              var l = this.clonePosition();
              return i !== this.parseTagName() ? this.error(n.UNMATCHED_CLOSING_TAG, D(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: o.tag,
                  value: i,
                  children: s,
                  location: D(r, this.clonePosition())
                },
                err: null
              } : this.error(n.INVALID_TAG, D(u, this.clonePosition())))
            }
            return this.error(n.UNCLOSED_TAG, D(r, this.clonePosition()))
          }
          return this.error(n.INVALID_TAG, D(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var i = this.tryParseQuote(t);
            if (i) n += i;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) n += a;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                n += s
              }
            }
          }
          var u = D(r, this.clonePosition());
          return {
            val: {
              type: o.literal,
              value: n,
              location: u
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (te(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return Z.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Z(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, D(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(n.EMPTY_ARGUMENT, D(r, this.clonePosition()));
          var i = this.parseIdentifierIfPossible().value;
          if (!i) return this.error(n.MALFORMED_ARGUMENT, D(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, D(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: o.argument,
                  value: i,
                  location: D(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, D(r, this.clonePosition())) : this.parseArgumentOptions(e, t, i, r);
            default:
              return this.error(n.MALFORMED_ARGUMENT, D(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = X(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: D(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, s) {
          var u, l = this.clonePosition(),
            c = this.parseIdentifierIfPossible().value,
            h = this.clonePosition();
          switch (c) {
            case "":
              return this.error(n.EXPECT_ARGUMENT_TYPE, D(l, h));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var f = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var p = this.clonePosition();
                if ((_ = this.parseSimpleArgStyleIfPossible()).err) return _;
                if (0 === (g = z(_.val)).length) return this.error(n.EXPECT_ARGUMENT_STYLE, D(this.clonePosition(), this.clonePosition()));
                f = {
                  style: g,
                  styleLocation: D(p, this.clonePosition())
                }
              }
              if ((S = this.tryParseArgumentClose(s)).err) return S;
              var m = D(s, this.clonePosition());
              if (f && Y(null == f ? void 0 : f.style, "::", 0)) {
                var d = q(f.style.slice(2));
                if ("number" === c) return (_ = this.parseNumberSkeletonFromString(d, f.styleLocation)).err ? _ : {
                  val: {
                    type: o.number,
                    value: r,
                    location: m,
                    style: _.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(n.EXPECT_DATE_TIME_SKELETON, m);
                var y = d;
                this.locale && (y = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        u = O(t);
                      for ("H" != u && "k" != u || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = u + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var g = {
                  type: i.dateTime,
                  pattern: y,
                  location: f.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? v(y) : {}
                };
                return {
                  val: {
                    type: "date" === c ? o.date : o.time,
                    value: r,
                    location: m,
                    style: g
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === c ? o.number : "date" === c ? o.date : o.time,
                  value: r,
                  location: m,
                  style: null !== (u = null == f ? void 0 : f.style) && void 0 !== u ? u : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var b = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS, D(b, (0, a.C3)({}, b)));
              this.bumpSpace();
              var E = this.parseIdentifierIfPossible(),
                T = 0;
              if ("select" !== c && "offset" === E.value) {
                if (!this.bumpIf(":")) return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, D(this.clonePosition(), this.clonePosition()));
                var _;
                if (this.bumpSpace(), (_ = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return _;
                this.bumpSpace(), E = this.parseIdentifierIfPossible(), T = _.val
              }
              var S, A = this.tryParsePluralOrSelectOptions(e, c, t, E);
              if (A.err) return A;
              if ((S = this.tryParseArgumentClose(s)).err) return S;
              var H = D(s, this.clonePosition());
              return "select" === c ? {
                val: {
                  type: o.select,
                  value: r,
                  options: K(A.val),
                  location: H
                },
                err: null
              } : {
                val: {
                  type: o.plural,
                  value: r,
                  options: K(A.val),
                  offset: T,
                  pluralType: "plural" === c ? "cardinal" : "ordinal",
                  location: H
                },
                err: null
              };
            default:
              return this.error(n.INVALID_ARGUMENT_TYPE, D(l, h))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, D(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, D(r, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var r = [];
          try {
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], r = 0, n = e.split(T).filter((function(e) {
                  return e.length > 0
                })); r < n.length; r++) {
                var o = n[r].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var i = o[0], a = o.slice(1), s = 0, u = a; s < u.length; s++)
                  if (0 === u[s].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: i,
                  options: a
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(n.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: i.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? B(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, o) {
          for (var i, a = !1, s = [], u = new Set, l = o.value, c = o.location;;) {
            if (0 === l.length) {
              var h = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var f = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR, n.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (f.err) return f;
              c = D(h, this.clonePosition()), l = this.message.slice(h.offset, this.offset())
            }
            if (u.has(l)) return this.error("select" === t ? n.DUPLICATE_SELECT_ARGUMENT_SELECTOR : n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (a = !0), this.bumpSpace();
            var p = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, D(this.clonePosition(), this.clonePosition()));
            var m = this.parseMessage(e + 1, t, r);
            if (m.err) return m;
            var d = this.tryParseArgumentClose(p);
            if (d.err) return d;
            s.push([l, {
              value: m.val,
              location: D(p, this.clonePosition())
            }]), u.add(l), this.bumpSpace(), l = (i = this.parseIdentifierIfPossible()).value, c = i.location
          }
          return 0 === s.length ? this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR : n.EXPECT_PLURAL_ARGUMENT_SELECTOR, D(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(n.MISSING_OTHER_CLAUSE, D(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            o = !0, i = 10 * i + (a - 48), this.bump()
          }
          var s = D(n, this.clonePosition());
          return o ? V(i *= r) ? {
            val: i,
            err: null
          } : this.error(t, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = W(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (Y(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && re(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function te(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function re(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function ne(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function oe(e) {
        e.forEach((function(e) {
          if (delete e.location, f(e) || p(e))
            for (var t in e.options) delete e.options[t].location, oe(e.options[t].value);
          else l(e) && y(e.style) || (c(e) || h(e)) && g(e.style) ? delete e.style.location : d(e) && oe(e.children)
        }))
      }

      function ie(e, t) {
        void 0 === t && (t = {}), t = (0, a.C3)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new ee(e, t).parse();
        if (r.err) {
          var o = SyntaxError(n[r.err.kind]);
          throw o.location = r.err.location, o.originalMessage = r.err.message, o
        }
        return (null == t ? void 0 : t.captureLocation) || oe(r.val), r.val
      }
    },
    216: (e, t, r) => {
      var n = r(400),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};

      function u(e) {
        return n.isMemo(e) ? a : s[e.$$typeof] || o
      }
      s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[n.Memo] = a;
      var l = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        h = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (m) {
            var o = p(r);
            o && o !== m && e(t, o, n)
          }
          var a = c(r);
          h && (a = a.concat(h(r)));
          for (var s = u(t), d = u(r), y = 0; y < a.length; ++y) {
            var g = a[y];
            if (!(i[g] || n && n[g] || d && d[g] || s && s[g])) {
              var b = f(r, g);
              try {
                l(t, g, b)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    808: (e, t, r) => {
      r.d(t, {
        W: () => u
      });
      var n = r(672),
        o = r(4),
        i = r(288),
        a = r(876);

      function s(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }
      var u = function() {
        function e(t, r, o, u) {
          var l, c, h, f = this;
          if (void 0 === r && (r = e.defaultLocale), this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = f.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce((function(e, t) {
                return e.length && t.type === a.eY.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return (0, a.qW)(f.ast, f.locales, f.formatters, f.formats, e, void 0, f.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = f.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0]
              }
            }, this.getAst = function() {
              return f.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var p = u || {},
              m = (p.formatters, (0, n.sX)(p, ["formatters"]));
            this.ast = e.__parse(t, (0, n.C3)((0, n.C3)({}, m), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (c = e.formats, (h = o) ? Object.keys(c).reduce((function(e, t) {
            var r, o;
            return e[t] = (r = c[t], (o = h[t]) ? (0, n.C3)((0, n.C3)((0, n.C3)({}, r || {}), o || {}), Object.keys(r).reduce((function(e, t) {
              return e[t] = (0, n.C3)((0, n.C3)({}, r[t]), o[t] || {}), e
            }), {})) : r), e
          }), (0, n.C3)({}, c)) : c), this.formatters = u && u.formatters || (void 0 === (l = this.formatterCache) && (l = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, i.s)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, n.Mt)([void 0], t, !1)))
            }), {
              cache: s(l.number),
              strategy: i.A.variadic
            }),
            getDateTimeFormat: (0, i.s)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, n.Mt)([void 0], t, !1)))
            }), {
              cache: s(l.dateTime),
              strategy: i.A.variadic
            }),
            getPluralRules: (0, i.s)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, n.Mt)([void 0], t, !1)))
            }), {
              cache: s(l.pluralRules),
              strategy: i.A.variadic
            })
          })
        }
        return Object.defineProperty(e, "defaultLocale", {
          get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
          },
          enumerable: !1,
          configurable: !0
        }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
          if (void 0 !== Intl.Locale) {
            var t = Intl.NumberFormat.supportedLocalesOf(e);
            return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
          }
        }, e.__parse = o.K0, e.formats = {
          number: {
            integer: {
              maximumFractionDigits: 0
            },
            currency: {
              style: "currency"
            },
            percent: {
              style: "percent"
            }
          },
          date: {
            short: {
              month: "numeric",
              day: "numeric",
              year: "2-digit"
            },
            medium: {
              month: "short",
              day: "numeric",
              year: "numeric"
            },
            long: {
              month: "long",
              day: "numeric",
              year: "numeric"
            },
            full: {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          time: {
            short: {
              hour: "numeric",
              minute: "numeric"
            },
            medium: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            },
            long: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            },
            full: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            }
          }
        }, e
      }()
    },
    332: (e, t, r) => {
      r.d(t, {
        MZ: () => u,
        c3: () => s,
        cn: () => i,
        uA: () => a,
        uI: () => n
      });
      var n, o = r(672);
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(n || (n = {}));
      var i = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, o.ct)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        a = function(e) {
          function t(t, r, o, i) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(o).join('", "'), '"'), n.INVALID_VALUE, i) || this
          }
          return (0, o.ct)(t, e), t
        }(i),
        s = function(e) {
          function t(t, r, o) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), n.INVALID_VALUE, o) || this
          }
          return (0, o.ct)(t, e), t
        }(i),
        u = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), n.MISSING_VALUE, r) || this
          }
          return (0, o.ct)(t, e), t
        }(i)
    },
    876: (e, t, r) => {
      r.d(t, {
        eY: () => n,
        qW: () => s,
        sT: () => a
      });
      var n, o = r(4),
        i = r(332);

      function a(e) {
        return "function" == typeof e
      }

      function s(e, t, r, u, l, c, h) {
        if (1 === e.length && (0, o.kl)(e[0])) return [{
          type: n.literal,
          value: e[0].value
        }];
        for (var f = [], p = 0, m = e; p < m.length; p++) {
          var d = m[p];
          if ((0, o.kl)(d)) f.push({
            type: n.literal,
            value: d.value
          });
          else if ((0, o.EZ)(d)) "number" == typeof c && f.push({
            type: n.literal,
            value: r.getNumberFormat(t).format(c)
          });
          else {
            var y = d.value;
            if (!l || !(y in l)) throw new i.MZ(y, h);
            var g = l[y];
            if ((0, o.kd)(d)) g && "string" != typeof g && "number" != typeof g || (g = "string" == typeof g || "number" == typeof g ? String(g) : ""), f.push({
              type: "string" == typeof g ? n.literal : n.object,
              value: g
            });
            else if ((0, o.Ml)(d)) {
              var b = "string" == typeof d.style ? u.date[d.style] : (0, o.iO)(d.style) ? d.style.parsedOptions : void 0;
              f.push({
                type: n.literal,
                value: r.getDateTimeFormat(t, b).format(g)
              })
            } else if ((0, o.ue)(d)) b = "string" == typeof d.style ? u.time[d.style] : (0, o.iO)(d.style) ? d.style.parsedOptions : u.time.medium, f.push({
              type: n.literal,
              value: r.getDateTimeFormat(t, b).format(g)
            });
            else if ((0, o.Mp)(d))(b = "string" == typeof d.style ? u.number[d.style] : (0, o.fX)(d.style) ? d.style.parsedOptions : void 0) && b.scale && (g *= b.scale || 1), f.push({
              type: n.literal,
              value: r.getNumberFormat(t, b).format(g)
            });
            else {
              if ((0, o.AX)(d)) {
                var E = d.children,
                  v = d.value,
                  T = l[v];
                if (!a(T)) throw new i.c3(v, "function", h);
                var _ = T(s(E, t, r, u, l, c).map((function(e) {
                  return e.value
                })));
                Array.isArray(_) || (_ = [_]), f.push.apply(f, _.map((function(e) {
                  return {
                    type: "string" == typeof e ? n.literal : n.object,
                    value: e
                  }
                })))
              }
              if ((0, o.uU)(d)) {
                if (!(S = d.options[g] || d.options.other)) throw new i.uA(d.value, g, Object.keys(d.options), h);
                f.push.apply(f, s(S.value, t, r, u, l))
              } else if ((0, o.WC)(d)) {
                var S;
                if (!(S = d.options["=".concat(g)])) {
                  if (!Intl.PluralRules) throw new i.cn('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', i.uI.MISSING_INTL_API, h);
                  var A = r.getPluralRules(t, {
                    type: d.pluralType
                  }).select(g - (d.offset || 0));
                  S = d.options[A] || d.options.other
                }
                if (!S) throw new i.uA(d.value, g, Object.keys(d.options), h);
                f.push.apply(f, s(S.value, t, r, u, l, g - (d.offset || 0)))
              }
            }
          }
        }
        return (H = f).length < 2 ? H : H.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === n.literal && t.type === n.literal ? r.value += t.value : e.push(t), e
        }), []);
        var H
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(n || (n = {}))
    },
    120: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        c = r ? Symbol.for("react.async_mode") : 60111,
        h = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        d = r ? Symbol.for("react.memo") : 60115,
        y = r ? Symbol.for("react.lazy") : 60116,
        g = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        E = r ? Symbol.for("react.responder") : 60118,
        v = r ? Symbol.for("react.scope") : 60119;

      function T(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case c:
                case h:
                case i:
                case s:
                case a:
                case p:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case l:
                    case f:
                    case y:
                    case d:
                    case u:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function _(e) {
        return T(e) === h
      }
      t.AsyncMode = c, t.ConcurrentMode = h, t.ContextConsumer = l, t.ContextProvider = u, t.Element = n, t.ForwardRef = f, t.Fragment = i, t.Lazy = y, t.Memo = d, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = p, t.isAsyncMode = function(e) {
        return _(e) || T(e) === c
      }, t.isConcurrentMode = _, t.isContextConsumer = function(e) {
        return T(e) === l
      }, t.isContextProvider = function(e) {
        return T(e) === u
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return T(e) === f
      }, t.isFragment = function(e) {
        return T(e) === i
      }, t.isLazy = function(e) {
        return T(e) === y
      }, t.isMemo = function(e) {
        return T(e) === d
      }, t.isPortal = function(e) {
        return T(e) === o
      }, t.isProfiler = function(e) {
        return T(e) === s
      }, t.isStrictMode = function(e) {
        return T(e) === a
      }, t.isSuspense = function(e) {
        return T(e) === p
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === h || e === s || e === a || e === p || e === m || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === d || e.$$typeof === u || e.$$typeof === l || e.$$typeof === f || e.$$typeof === b || e.$$typeof === E || e.$$typeof === v || e.$$typeof === g)
      }, t.typeOf = T
    },
    400: (e, t, r) => {
      e.exports = r(120)
    },
    576: (e, t, r) => {
      var n = r(100),
        o = Symbol.for("react.element"),
        i = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, r) {
        var n, u = {},
          l = null,
          c = null;
        for (n in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, n) && !s.hasOwnProperty(n) && (u[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === u[n] && (u[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: c,
          props: u,
          _owner: a.current
        }
      }
    },
    948: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        l = Symbol.for("react.forward_ref"),
        c = Symbol.for("react.suspense"),
        h = Symbol.for("react.memo"),
        f = Symbol.for("react.lazy"),
        p = Symbol.iterator,
        m = {
          isMounted: function() {
            return !1
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
        },
        d = Object.assign,
        y = {};

      function g(e, t, r) {
        this.props = e, this.context = t, this.refs = y, this.updater = r || m
      }

      function b() {}

      function E(e, t, r) {
        this.props = e, this.context = t, this.refs = y, this.updater = r || m
      }
      g.prototype.isReactComponent = {}, g.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
      }, g.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
      }, b.prototype = g.prototype;
      var v = E.prototype = new b;
      v.constructor = E, d(v, g.prototype), v.isPureReactComponent = !0;
      var T = Array.isArray,
        _ = Object.prototype.hasOwnProperty,
        S = {
          current: null
        },
        A = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function H(e, t, n) {
        var o, i = {},
          a = null,
          s = null;
        if (null != t)
          for (o in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t) _.call(t, o) && !A.hasOwnProperty(o) && (i[o] = t[o]);
        var u = arguments.length - 2;
        if (1 === u) i.children = n;
        else if (1 < u) {
          for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
          i.children = l
        }
        if (e && e.defaultProps)
          for (o in u = e.defaultProps) void 0 === i[o] && (i[o] = u[o]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: s,
          props: i,
          _owner: S.current
        }
      }

      function C(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }
      var I = /\/+/g;

      function N(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
          var t = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + e.replace(/[=:]/g, (function(e) {
            return t[e]
          }))
        }("" + e.key) : t.toString(36)
      }

      function P(e, t, o, i, a) {
        var s = typeof e;
        "undefined" !== s && "boolean" !== s || (e = null);
        var u = !1;
        if (null === e) u = !0;
        else switch (s) {
          case "string":
          case "number":
            u = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case r:
              case n:
                u = !0
            }
        }
        if (u) return a = a(u = e), e = "" === i ? "." + N(u, 0) : i, T(a) ? (o = "", null != e && (o = e.replace(I, "$&/") + "/"), P(a, t, o, "", (function(e) {
          return e
        }))) : null != a && (C(a) && (a = function(e, t) {
          return {
            $$typeof: r,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
          }
        }(a, o + (!a.key || u && u.key === a.key ? "" : ("" + a.key).replace(I, "$&/") + "/") + e)), t.push(a)), 1;
        if (u = 0, i = "" === i ? "." : i + ":", T(e))
          for (var l = 0; l < e.length; l++) {
            var c = i + N(s = e[l], l);
            u += P(s, t, o, c, a)
          } else if (c = function(e) {
              return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
            }(e), "function" == typeof c)
            for (e = c.call(e), l = 0; !(s = e.next()).done;) u += P(s = s.value, t, o, c = i + N(s, l++), a);
          else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return u
      }

      function B(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return P(e, n, "", "", (function(e) {
          return t.call(r, e, o++)
        })), n
      }

      function L(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then((function(t) {
            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
          }), (function(t) {
            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
          })), -1 === e._status && (e._status = 0, e._result = t)
        }
        if (1 === e._status) return e._result.default;
        throw e._result
      }
      var R = {
          current: null
        },
        O = {
          transition: null
        },
        M = {
          ReactCurrentDispatcher: R,
          ReactCurrentBatchConfig: O,
          ReactCurrentOwner: S
        };
      t.Children = {
        map: B,
        forEach: function(e, t, r) {
          B(e, (function() {
            t.apply(this, arguments)
          }), r)
        },
        count: function(e) {
          var t = 0;
          return B(e, (function() {
            t++
          })), t
        },
        toArray: function(e) {
          return B(e, (function(e) {
            return e
          })) || []
        },
        only: function(e) {
          if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e
        }
      }, t.Component = g, t.Fragment = o, t.Profiler = a, t.PureComponent = E, t.StrictMode = i, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.cloneElement = function(e, t, n) {
        if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o = d({}, e.props),
          i = e.key,
          a = e.ref,
          s = e._owner;
        if (null != t) {
          if (void 0 !== t.ref && (a = t.ref, s = S.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
          for (l in t) _.call(t, l) && !A.hasOwnProperty(l) && (o[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l])
        }
        var l = arguments.length - 2;
        if (1 === l) o.children = n;
        else if (1 < l) {
          u = Array(l);
          for (var c = 0; c < l; c++) u[c] = arguments[c + 2];
          o.children = u
        }
        return {
          $$typeof: r,
          type: e.type,
          key: i,
          ref: a,
          props: o,
          _owner: s
        }
      }, t.createContext = function(e) {
        return (e = {
          $$typeof: u,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }).Provider = {
          $$typeof: s,
          _context: e
        }, e.Consumer = e
      }, t.createElement = H, t.createFactory = function(e) {
        var t = H.bind(null, e);
        return t.type = e, t
      }, t.createRef = function() {
        return {
          current: null
        }
      }, t.forwardRef = function(e) {
        return {
          $$typeof: l,
          render: e
        }
      }, t.isValidElement = C, t.lazy = function(e) {
        return {
          $$typeof: f,
          _payload: {
            _status: -1,
            _result: e
          },
          _init: L
        }
      }, t.memo = function(e, t) {
        return {
          $$typeof: h,
          type: e,
          compare: void 0 === t ? null : t
        }
      }, t.startTransition = function(e) {
        var t = O.transition;
        O.transition = {};
        try {
          e()
        } finally {
          O.transition = t
        }
      }, t.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.")
      }, t.useCallback = function(e, t) {
        return R.current.useCallback(e, t)
      }, t.useContext = function(e) {
        return R.current.useContext(e)
      }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
        return R.current.useDeferredValue(e)
      }, t.useEffect = function(e, t) {
        return R.current.useEffect(e, t)
      }, t.useId = function() {
        return R.current.useId()
      }, t.useImperativeHandle = function(e, t, r) {
        return R.current.useImperativeHandle(e, t, r)
      }, t.useInsertionEffect = function(e, t) {
        return R.current.useInsertionEffect(e, t)
      }, t.useLayoutEffect = function(e, t) {
        return R.current.useLayoutEffect(e, t)
      }, t.useMemo = function(e, t) {
        return R.current.useMemo(e, t)
      }, t.useReducer = function(e, t, r) {
        return R.current.useReducer(e, t, r)
      }, t.useRef = function(e) {
        return R.current.useRef(e)
      }, t.useState = function(e) {
        return R.current.useState(e)
      }, t.useSyncExternalStore = function(e, t, r) {
        return R.current.useSyncExternalStore(e, t, r)
      }, t.useTransition = function() {
        return R.current.useTransition()
      }, t.version = "18.2.0"
    },
    100: (e, t, r) => {
      e.exports = r(948)
    },
    240: (e, t, r) => {
      e.exports = r(576)
    },
    672: (e, t, r) => {
      r.d(t, {
        C3: () => i,
        Mt: () => s,
        ct: () => o,
        sX: () => a
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, n(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var i = function() {
        return i = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, i.apply(this, arguments)
      };

      function a(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function s(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);
//# sourceMappingURL=1d49cf83727420c0143eda5bb8cf37a2.js.map