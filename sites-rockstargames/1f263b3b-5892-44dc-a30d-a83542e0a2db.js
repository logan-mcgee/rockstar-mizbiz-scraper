try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "1f263b3b-5892-44dc-a30d-a83542e0a2db", t._sentryDebugIdIdentifier = "sentry-dbid-1f263b3b-5892-44dc-a30d-a83542e0a2db")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2497], {
    48790(t, e, r) {
      r.d(e, {
        Ho: () => c,
        OC: () => i,
        hr: () => l,
        pg: () => u,
        sb: () => m,
        uo: () => s
      });
      var n, a = r(51177);
      ! function(t) {
        t.FORMAT_ERROR = "FORMAT_ERROR", t.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", t.INVALID_CONFIG = "INVALID_CONFIG", t.MISSING_DATA = "MISSING_DATA", t.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(n || (n = {}));
      var o = function(t) {
          function e(r, n, a) {
            var o = this,
              i = a ? a instanceof Error ? a : new Error(String(a)) : void 0;
            return (o = t.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(i ? "\n".concat(i.message, "\n").concat(i.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, e), o
          }
          return (0, a.__extends)(e, t), e
        }(Error),
        i = function(t) {
          function e(e, r) {
            return t.call(this, n.UNSUPPORTED_FORMATTER, e, r) || this
          }
          return (0, a.__extends)(e, t), e
        }(o),
        s = function(t) {
          function e(e, r) {
            return t.call(this, n.INVALID_CONFIG, e, r) || this
          }
          return (0, a.__extends)(e, t), e
        }(o),
        l = function(t) {
          function e(e, r) {
            return t.call(this, n.MISSING_DATA, e, r) || this
          }
          return (0, a.__extends)(e, t), e
        }(o),
        u = function(t) {
          function e(e, r, a) {
            var o = t.call(this, n.FORMAT_ERROR, "".concat(e, "\nLocale: ").concat(r, "\n"), a) || this;
            return o.locale = r, o
          }
          return (0, a.__extends)(e, t), e
        }(o),
        c = function(t) {
          function e(e, r, n, a) {
            var o = t.call(this, "".concat(e, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, a) || this;
            return o.descriptor = n, o.locale = r, o
          }
          return (0, a.__extends)(e, t), e
        }(u),
        m = function(t) {
          function e(e, r) {
            var a = t.call(this, n.MISSING_TRANSLATION, 'Missing message: "'.concat(e.id, '" for locale "').concat(r, '", using ').concat(e.defaultMessage ? "default message (".concat("string" == typeof e.defaultMessage ? e.defaultMessage : e.defaultMessage.map(function(t) {
              var e;
              return null !== (e = t.value) && void 0 !== e ? e : JSON.stringify(t)
            }).join(), ")") : "id", " as fallback.")) || this;
            return a.descriptor = e, a
          }
          return (0, a.__extends)(e, t), e
        }(o)
    },
    98373(t, e, r) {
      r.d(e, {
        F3: () => d,
        GT: () => f,
        J9: () => l,
        JF: () => u,
        MT: () => c,
        V1: () => s
      });
      var n = r(51177),
        a = r(9909),
        o = r(95729),
        i = r(48790);

      function s(t, e, r) {
        if (void 0 === r && (r = Error), !t) throw new r(e)
      }

      function l(t, e, r) {
        return void 0 === r && (r = {}), e.reduce(function(e, n) {
          return n in t ? e[n] = t[n] : n in r && (e[n] = r[n]), e
        }, {})
      }
      var u = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(t) {},
        onWarn: function(t) {}
      };

      function c() {
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

      function m(t) {
        return {
          create: function() {
            return {
              get: function(e) {
                return t[e]
              },
              set: function(e, r) {
                t[e] = r
              }
            }
          }
        }
      }

      function f(t) {
        void 0 === t && (t = {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {}
        });
        var e = Intl.RelativeTimeFormat,
          r = Intl.ListFormat,
          i = Intl.DisplayNames,
          s = (0, a.B)(function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.DateTimeFormat).bind.apply(t, (0, n.__spreadArray)([void 0], e, !1)))
          }, {
            cache: m(t.dateTime),
            strategy: a.W.variadic
          }),
          l = (0, a.B)(function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.NumberFormat).bind.apply(t, (0, n.__spreadArray)([void 0], e, !1)))
          }, {
            cache: m(t.number),
            strategy: a.W.variadic
          }),
          u = (0, a.B)(function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.PluralRules).bind.apply(t, (0, n.__spreadArray)([void 0], e, !1)))
          }, {
            cache: m(t.pluralRules),
            strategy: a.W.variadic
          });
        return {
          getDateTimeFormat: s,
          getNumberFormat: l,
          getMessageFormat: (0, a.B)(function(t, e, r, a) {
            return new o.S(t, e, r, (0, n.__assign)({
              formatters: {
                getNumberFormat: l,
                getDateTimeFormat: s,
                getPluralRules: u
              }
            }, a || {}))
          }, {
            cache: m(t.message),
            strategy: a.W.variadic
          }),
          getRelativeTimeFormat: (0, a.B)(function() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new(e.bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
          }, {
            cache: m(t.relativeTime),
            strategy: a.W.variadic
          }),
          getPluralRules: u,
          getListFormat: (0, a.B)(function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new(r.bind.apply(r, (0, n.__spreadArray)([void 0], t, !1)))
          }, {
            cache: m(t.list),
            strategy: a.W.variadic
          }),
          getDisplayNames: (0, a.B)(function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new(i.bind.apply(i, (0, n.__spreadArray)([void 0], t, !1)))
          }, {
            cache: m(t.displayNames),
            strategy: a.W.variadic
          })
        }
      }

      function d(t, e, r, n) {
        var a, o = t && t[e];
        if (o && (a = o[r]), a) return a;
        n(new i.OC("No ".concat(e, " format named: ").concat(r)))
      }
    },
    57338(t, e, r) {
      r.d(e, {
        YK: () => m
      });
      var n, a, o = r(51177),
        i = r(93082),
        s = r(74775);
      ! function(t) {
        t.formatDate = "FormattedDate", t.formatTime = "FormattedTime", t.formatNumber = "FormattedNumber", t.formatList = "FormattedList", t.formatDisplayName = "FormattedDisplayName"
      }(n || (n = {})),
      function(t) {
        t.formatDate = "FormattedDateParts", t.formatTime = "FormattedTimeParts", t.formatNumber = "FormattedNumberParts", t.formatList = "FormattedListParts"
      }(a || (a = {}));
      var l = function(t) {
        var e = (0, s.A)(),
          r = t.value,
          n = t.children,
          a = (0, o.__rest)(t, ["value", "children"]);
        return n(e.formatNumberToParts(r, a))
      };

      function u(t) {
        var e = function(e) {
          var r = (0, s.A)(),
            n = e.value,
            a = e.children,
            i = (0, o.__rest)(e, ["value", "children"]),
            l = "string" == typeof n ? new Date(n || 0) : n;
          return a("formatDate" === t ? r.formatDateToParts(l, i) : r.formatTimeToParts(l, i))
        };
        return e.displayName = a[t], e
      }

      function c(t) {
        var e = function(e) {
          var r = (0, s.A)(),
            n = e.value,
            a = e.children,
            l = (0, o.__rest)(e, ["value", "children"]),
            u = r[t](n, l);
          if ("function" == typeof a) return a(u);
          var c = r.textComponent || i.Fragment;
          return i.createElement(c, null, u)
        };
        return e.displayName = n[t], e
      }

      function m(t) {
        return t
      }
      l.displayName = "FormattedNumberParts", l.displayName = "FormattedNumberParts", c("formatDate"), c("formatTime"), c("formatNumber"), c("formatList"), c("formatDisplayName"), u("formatDate"), u("formatTime")
    },
    73747(t, e, r) {
      r.d(e, {
        E: () => x
      });
      var n = r(51177),
        a = r(4888),
        o = r(95729),
        i = r(48790),
        s = r(98373);

      function l(t, e) {
        return Object.keys(t).reduce(function(r, a) {
          return r[a] = (0, n.__assign)({
            timeZone: e
          }, t[a]), r
        }, {})
      }

      function u(t, e) {
        return Object.keys((0, n.__assign)((0, n.__assign)({}, t), e)).reduce(function(r, a) {
          return r[a] = (0, n.__assign)((0, n.__assign)({}, t[a] || {}), e[a] || {}), r
        }, {})
      }

      function c(t, e) {
        if (!e) return t;
        var r = o.S.formats;
        return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, r), t), {
          date: u(l(r.date, e), l(t.date || {}, e)),
          time: u(l(r.time, e), l(t.time || {}, e))
        })
      }
      var m = function(t, e, r, o, l) {
          var u = t.locale,
            m = t.formats,
            f = t.messages,
            d = t.defaultLocale,
            g = t.defaultFormats,
            p = t.fallbackOnEmptyString,
            v = t.onError,
            y = t.timeZone,
            _ = t.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var h = r.id,
            b = r.defaultMessage;
          (0, s.V1)(!!h, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var T = String(h),
            E = f && Object.prototype.hasOwnProperty.call(f, T) && f[T];
          if (Array.isArray(E) && 1 === E.length && E[0].type === a.ZE.literal) return E[0].value;
          if (!o && E && "string" == typeof E && !_) return E.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (o = (0, n.__assign)((0, n.__assign)({}, _), o || {}), m = c(m, y), g = c(g, y), !E) {
            if (!1 === p && "" === E) return E;
            if ((!b || u && u.toLowerCase() !== d.toLowerCase()) && v(new i.sb(r, u)), b) try {
              return e.getMessageFormat(b, d, g, l).format(o)
            } catch (t) {
              return v(new i.Ho('Error formatting default message for: "'.concat(T, '", rendering default message verbatim'), u, r, t)), "string" == typeof b ? b : T
            }
            return T
          }
          try {
            return e.getMessageFormat(E, u, m, (0, n.__assign)({
              formatters: e
            }, l || {})).format(o)
          } catch (t) {
            v(new i.Ho('Error formatting message: "'.concat(T, '", using ').concat(b ? "default message" : "id", " as fallback."), u, r, t))
          }
          if (b) try {
            return e.getMessageFormat(b, d, g, l).format(o)
          } catch (t) {
            v(new i.Ho('Error formatting the default message for: "'.concat(T, '", rendering message verbatim'), u, r, t))
          }
          return "string" == typeof E ? E : "string" == typeof b ? b : T
        },
        f = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function d(t, e, r, a) {
        var o = t.locale,
          i = t.formats,
          l = t.onError,
          u = t.timeZone;
        void 0 === a && (a = {});
        var c = a.format,
          m = (0, n.__assign)((0, n.__assign)({}, u && {
            timeZone: u
          }), c && (0, s.F3)(i, e, c, l)),
          d = (0, s.J9)(a, f, m);
        return "time" !== e || d.hour || d.minute || d.second || d.timeStyle || d.dateStyle || (d = (0, n.__assign)((0, n.__assign)({}, d), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, d)
      }

      function g(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          l = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(t, "date", e, s).format(l)
        } catch (e) {
          t.onError(new i.pg("Error formatting date.", t.locale, e))
        }
        return String(l)
      }

      function p(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          l = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(t, "time", e, s).format(l)
        } catch (e) {
          t.onError(new i.pg("Error formatting time.", t.locale, e))
        }
        return String(l)
      }

      function v(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          s = r[2],
          l = void 0 === s ? {} : s,
          u = "string" == typeof a ? new Date(a || 0) : a,
          c = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return d(t, "dateTimeRange", e, l).formatRange(u, c)
        } catch (e) {
          t.onError(new i.pg("Error formatting date time range.", t.locale, e))
        }
        return String(u)
      }

      function y(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          l = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(t, "date", e, s).formatToParts(l)
        } catch (e) {
          t.onError(new i.pg("Error formatting date.", t.locale, e))
        }
        return []
      }

      function _(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          l = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(t, "time", e, s).formatToParts(l)
        } catch (e) {
          t.onError(new i.pg("Error formatting time.", t.locale, e))
        }
        return []
      }
      var h = r(22506),
        b = ["style", "type", "fallback", "languageDisplay"];

      function T(t, e, r, n) {
        var a = t.locale,
          o = t.onError;
        Intl.DisplayNames || o(new h.IF('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', h.O4.MISSING_INTL_API));
        var l = (0, s.J9)(n, b);
        try {
          return e(a, l).of(r)
        } catch (t) {
          o(new i.pg("Error formatting display name.", a, t))
        }
      }
      var E = ["type", "style"],
        F = Date.now();

      function w(t, e, r, n) {
        void 0 === n && (n = {});
        var a = I(t, e, r, n).reduce(function(t, e) {
          var r = e.value;
          return "string" != typeof r ? t.push(r) : "string" == typeof t[t.length - 1] ? t[t.length - 1] += r : t.push(r), t
        }, []);
        return 1 === a.length ? a[0] : 0 === a.length ? "" : a
      }

      function I(t, e, r, a) {
        var o = t.locale,
          l = t.onError;
        void 0 === a && (a = {}), Intl.ListFormat || l(new h.IF('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', h.O4.MISSING_INTL_API));
        var u = (0, s.J9)(a, E);
        try {
          var c = {},
            m = Array.from(r).map(function(t, e) {
              if ("object" == typeof t && null !== t) {
                var r = function(t) {
                  return "".concat(F, "_").concat(t, "_").concat(F)
                }(e);
                return c[r] = t, r
              }
              return String(t)
            });
          return e(o, u).formatToParts(m).map(function(t) {
            return "literal" === t.type ? t : (0, n.__assign)((0, n.__assign)({}, t), {
              value: c[t.value] || t.value
            })
          })
        } catch (t) {
          l(new i.pg("Error formatting list.", o, t))
        }
        return r
      }
      var N = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function D(t, e, r) {
        var n = t.locale,
          a = t.formats,
          o = t.onError;
        void 0 === r && (r = {});
        var i = r.format,
          l = i && (0, s.F3)(a, "number", i, o) || {};
        return e(n, (0, s.J9)(r, N, l))
      }

      function S(t, e, r, n) {
        void 0 === n && (n = {});
        try {
          return D(t, e, n).format(r)
        } catch (e) {
          t.onError(new i.pg("Error formatting number.", t.locale, e))
        }
        return String(r)
      }

      function R(t, e, r, n) {
        void 0 === n && (n = {});
        try {
          return D(t, e, n).formatToParts(r)
        } catch (e) {
          t.onError(new i.pg("Error formatting number.", t.locale, e))
        }
        return []
      }
      var A = ["type"];

      function O(t, e, r, n) {
        var a = t.locale,
          o = t.onError;
        void 0 === n && (n = {}), Intl.PluralRules || o(new h.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', h.O4.MISSING_INTL_API));
        var l = (0, s.J9)(n, A);
        try {
          return e(a, l).select(r)
        } catch (t) {
          o(new i.pg("Error formatting plural.", a, t))
        }
        return "other"
      }
      var M = ["numeric", "style"];

      function P(t, e, r, n, a) {
        void 0 === a && (a = {}), n || (n = "second"), Intl.RelativeTimeFormat || t.onError(new h.IF('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', h.O4.MISSING_INTL_API));
        try {
          return function(t, e, r) {
            var n = t.locale,
              a = t.formats,
              o = t.onError;
            void 0 === r && (r = {});
            var i = r.format,
              l = !!i && (0, s.F3)(a, "relative", i, o) || {};
            return e(n, (0, s.J9)(r, M, l))
          }(t, e, a).format(r, n)
        } catch (e) {
          t.onError(new i.pg("Error formatting relative time.", t.locale, e))
        }
        return String(r)
      }
      var L = r(78845),
        k = r(2603);

      function C(t) {
        return t ? Object.keys(t).reduce(function(e, r) {
          var n = t[r];
          return e[r] = (0, L.RK)(n) ? (0, k.yU)(n) : n, e
        }, {}) : t
      }
      var j = function(t, e, r, a) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var s = C(a),
            l = m.apply(void 0, (0, n.__spreadArray)([t, e, r, s], o, !1));
          return Array.isArray(l) ? (0, k.SP)(l) : l
        },
        x = function(t, e) {
          var r = t.defaultRichTextElements,
            a = (0, n.__rest)(t, ["defaultRichTextElements"]),
            o = C(r),
            l = function(t, e) {
              var r = (0, s.GT)(e),
                a = (0, n.__assign)((0, n.__assign)({}, s.JF), t),
                o = a.locale,
                l = a.defaultLocale,
                u = a.onError;
              return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && u ? u(new i.hr('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(l, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && u && u(new i.hr('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(l, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (u && u(new i.uo('"locale" was not configured, using "'.concat(l, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), a.locale = a.defaultLocale || "en"),
                function(t) {
                  var e;
                  t.onWarn && t.defaultRichTextElements && "string" == typeof((e = t.messages || {}) ? e[Object.keys(e)[0]] : void 0) && t.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
                }(a), (0, n.__assign)((0, n.__assign)({}, a), {
                  formatters: r,
                  formatNumber: S.bind(null, a, r.getNumberFormat),
                  formatNumberToParts: R.bind(null, a, r.getNumberFormat),
                  formatRelativeTime: P.bind(null, a, r.getRelativeTimeFormat),
                  formatDate: g.bind(null, a, r.getDateTimeFormat),
                  formatDateToParts: y.bind(null, a, r.getDateTimeFormat),
                  formatTime: p.bind(null, a, r.getDateTimeFormat),
                  formatDateTimeRange: v.bind(null, a, r.getDateTimeFormat),
                  formatTimeToParts: _.bind(null, a, r.getDateTimeFormat),
                  formatPlural: O.bind(null, a, r.getPluralRules),
                  formatMessage: m.bind(null, a, r),
                  $t: m.bind(null, a, r),
                  formatList: w.bind(null, a, r.getListFormat),
                  formatListToParts: I.bind(null, a, r.getListFormat),
                  formatDisplayName: T.bind(null, a, r.getDisplayNames)
                })
            }((0, n.__assign)((0, n.__assign)((0, n.__assign)({}, k.JF), a), {
              defaultRichTextElements: o
            }), e),
            u = {
              locale: l.locale,
              timeZone: l.timeZone,
              fallbackOnEmptyString: l.fallbackOnEmptyString,
              formats: l.formats,
              defaultLocale: l.defaultLocale,
              defaultFormats: l.defaultFormats,
              messages: l.messages,
              onError: l.onError,
              defaultRichTextElements: o
            };
          return (0, n.__assign)((0, n.__assign)({}, l), {
            formatMessage: j.bind(null, u, l.formatters),
            $t: j.bind(null, u, l.formatters)
          })
        }
    },
    21405(t, e, r) {
      r.d(e, {
        Kq: () => o,
        ob: () => i
      }), r(56848);
      var n = r(93082),
        a = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? n.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = n.createContext(null)),
        o = (a.Consumer, a.Provider),
        i = a
    },
    54422(t, e, r) {
      r.d(e, {
        A: () => m
      });
      var n = r(51177),
        a = r(98373),
        o = r(93082),
        i = r(2603),
        s = r(73747),
        l = r(21405);

      function u(t) {
        return {
          locale: t.locale,
          timeZone: t.timeZone,
          fallbackOnEmptyString: t.fallbackOnEmptyString,
          formats: t.formats,
          textComponent: t.textComponent,
          messages: t.messages,
          defaultLocale: t.defaultLocale,
          defaultFormats: t.defaultFormats,
          onError: t.onError,
          onWarn: t.onWarn,
          wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
          defaultRichTextElements: t.defaultRichTextElements
        }
      }
      var c = function(t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.cache = (0, a.MT)(), e.state = {
            cache: e.cache,
            intl: (0, s.E)(u(e.props), e.cache),
            prevConfig: u(e.props)
          }, e
        }
        return (0, n.__extends)(e, t), e.getDerivedStateFromProps = function(t, e) {
          var r = e.prevConfig,
            n = e.cache,
            a = u(t);
          return (0, i.bN)(r, a) ? null : {
            intl: (0, s.E)(a, n),
            prevConfig: a
          }
        }, e.prototype.render = function() {
          return (0, i.HM)(this.state.intl), o.createElement(l.Kq, {
            value: this.state.intl
          }, this.props.children)
        }, e.displayName = "IntlProvider", e.defaultProps = i.JF, e
      }(o.PureComponent);
      const m = c
    },
    74775(t, e, r) {
      r.d(e, {
        A: () => i
      });
      var n = r(93082),
        a = r(2603),
        o = r(21405);

      function i() {
        var t = n.useContext(o.ob);
        return (0, a.HM)(t), t
      }
    },
    2603(t, e, r) {
      r.d(e, {
        HM: () => i,
        JF: () => s,
        SP: () => u,
        bN: () => m,
        yU: () => c
      });
      var n = r(51177),
        a = r(93082),
        o = r(98373);

      function i(t) {
        ! function(t, e, r) {
          if (void 0 === r && (r = Error), !t) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(t)
      }
      var s = (0, n.__assign)((0, n.__assign)({}, o.JF), {
          textComponent: a.Fragment
        }),
        l = function(t, e) {
          return a.isValidElement(t) ? a.cloneElement(t, {
            key: e
          }) : t
        },
        u = function(t) {
          var e;
          return null !== (e = a.Children.map(t, l)) && void 0 !== e ? e : []
        };

      function c(t) {
        return function(e) {
          return t(u(e))
        }
      }

      function m(t, e) {
        if (t === e) return !0;
        if (!t || !e) return !1;
        var r = Object.keys(t),
          n = Object.keys(e),
          a = r.length;
        if (n.length !== a) return !1;
        for (var o = 0; o < a; o++) {
          var i = r[o];
          if (t[i] !== e[i] || !Object.prototype.hasOwnProperty.call(e, i)) return !1
        }
        return !0
      }
    }
  }
]);