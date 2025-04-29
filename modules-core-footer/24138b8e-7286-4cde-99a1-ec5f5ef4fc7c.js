! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "24138b8e-7286-4cde-99a1-ec5f5ef4fc7c", e._sentryDebugIdIdentifier = "sentry-dbid-24138b8e-7286-4cde-99a1-ec5f5ef4fc7c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8179], {
    1691: (e, t, n) => {
      n.d(t, {
        E: () => A
      });
      var r = n(91299),
        o = n(13599),
        i = n(92849),
        s = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function a(e, t, n) {
        var r = e.locale,
          i = e.formats,
          a = e.onError;
        void 0 === n && (n = {});
        var l = n.format,
          c = l && (0, o.F3)(i, "number", l, a) || {};
        return t(r, (0, o.J9)(n, s, c))
      }

      function l(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return a(e, t, r).format(n)
        } catch (t) {
          e.onError(new i.pg("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function c(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return a(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new i.pg("Error formatting number.", e.locale, t))
        }
        return []
      }
      var u = n(47965),
        d = ["numeric", "style"];

      function f(e, t, n, r, s) {
        void 0 === s && (s = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new u.IF('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', u.O4.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              i = e.formats,
              s = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              l = !!a && (0, o.F3)(i, "relative", a, s) || {};
            return t(r, (0, o.J9)(n, d, l))
          }(e, t, s).format(n, r)
        } catch (t) {
          e.onError(new i.pg("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var h = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function p(e, t, n, i) {
        var s = e.locale,
          a = e.formats,
          l = e.onError,
          c = e.timeZone;
        void 0 === i && (i = {});
        var u = i.format,
          d = (0, r.__assign)((0, r.__assign)({}, c && {
            timeZone: c
          }), u && (0, o.F3)(a, t, u, l)),
          f = (0, o.J9)(i, h, d);
        return "time" !== t || f.hour || f.minute || f.second || f.timeStyle || f.dateStyle || (f = (0, r.__assign)((0, r.__assign)({}, f), {
          hour: "numeric",
          minute: "numeric"
        })), n(s, f)
      }

      function v(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          s = n[1],
          a = void 0 === s ? {} : s,
          l = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return p(e, "date", t, a).format(l)
        } catch (t) {
          e.onError(new i.pg("Error formatting date.", e.locale, t))
        }
        return String(l)
      }

      function m(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          s = n[1],
          a = void 0 === s ? {} : s,
          l = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return p(e, "time", t, a).format(l)
        } catch (t) {
          e.onError(new i.pg("Error formatting time.", e.locale, t))
        }
        return String(l)
      }

      function g(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var s = n[0],
          a = n[1],
          l = n[2],
          c = void 0 === l ? {} : l,
          u = e.timeZone,
          d = e.locale,
          f = e.onError,
          p = (0, o.J9)(c, h, u ? {
            timeZone: u
          } : {});
        try {
          return t(d, p).formatRange(s, a)
        } catch (t) {
          f(new i.pg("Error formatting date time range.", e.locale, t))
        }
        return String(s)
      }

      function y(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          s = n[1],
          a = void 0 === s ? {} : s,
          l = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return p(e, "date", t, a).formatToParts(l)
        } catch (t) {
          e.onError(new i.pg("Error formatting date.", e.locale, t))
        }
        return []
      }

      function b(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          s = n[1],
          a = void 0 === s ? {} : s,
          l = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return p(e, "time", t, a).formatToParts(l)
        } catch (t) {
          e.onError(new i.pg("Error formatting time.", e.locale, t))
        }
        return []
      }
      var E = ["type"];

      function w(e, t, n, r) {
        var s = e.locale,
          a = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || a(new u.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', u.O4.MISSING_INTL_API));
        var l = (0, o.J9)(r, E);
        try {
          return t(s, l).select(n)
        } catch (e) {
          a(new i.pg("Error formatting plural.", s, e))
        }
        return "other"
      }
      var T = n(7943),
        _ = ["type", "style"],
        P = Date.now();

      function S(e, t, n, r) {
        void 0 === r && (r = {});
        var o = C(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function C(e, t, n, s) {
        var a = e.locale,
          l = e.onError;
        void 0 === s && (s = {}), Intl.ListFormat || l(new u.IF('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', u.O4.MISSING_INTL_API));
        var c = (0, o.J9)(s, _);
        try {
          var d = {},
            f = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(P, "_").concat(e, "_").concat(P)
                }(t);
                return d[n] = e, n
              }
              return String(e)
            }));
          return t(a, c).formatToParts(f).map((function(e) {
            return "literal" === e.type ? e : (0, r.__assign)((0, r.__assign)({}, e), {
              value: d[e.value] || e.value
            })
          }))
        } catch (e) {
          l(new i.pg("Error formatting list.", a, e))
        }
        return n
      }
      var L = ["style", "type", "fallback", "languageDisplay"];

      function x(e, t, n, r) {
        var s = e.locale,
          a = e.onError;
        Intl.DisplayNames || a(new u.IF('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', u.O4.MISSING_INTL_API));
        var l = (0, o.J9)(r, L);
        try {
          return t(s, l).of(n)
        } catch (e) {
          a(new i.pg("Error formatting display name.", s, e))
        }
      }

      function A(e, t) {
        var n = (0, o.GT)(t),
          s = (0, r.__assign)((0, r.__assign)({}, o.JF), e),
          a = s.locale,
          u = s.defaultLocale,
          d = s.onError;
        return a ? !Intl.NumberFormat.supportedLocalesOf(a).length && d ? d(new i.hr('Missing locale data for locale: "'.concat(a, '" in Intl.NumberFormat. Using default locale: "').concat(u, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(a).length && d && d(new i.hr('Missing locale data for locale: "'.concat(a, '" in Intl.DateTimeFormat. Using default locale: "').concat(u, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (d && d(new i.uo('"locale" was not configured, using "'.concat(u, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), s.locale = s.defaultLocale || "en"),
          function(e) {
            var t;
            e.onWarn && e.defaultRichTextElements && "string" == typeof((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(s), (0, r.__assign)((0, r.__assign)({}, s), {
            formatters: n,
            formatNumber: l.bind(null, s, n.getNumberFormat),
            formatNumberToParts: c.bind(null, s, n.getNumberFormat),
            formatRelativeTime: f.bind(null, s, n.getRelativeTimeFormat),
            formatDate: v.bind(null, s, n.getDateTimeFormat),
            formatDateToParts: y.bind(null, s, n.getDateTimeFormat),
            formatTime: m.bind(null, s, n.getDateTimeFormat),
            formatDateTimeRange: g.bind(null, s, n.getDateTimeFormat),
            formatTimeToParts: b.bind(null, s, n.getDateTimeFormat),
            formatPlural: w.bind(null, s, n.getPluralRules),
            formatMessage: T.h.bind(null, s, n),
            $t: T.h.bind(null, s, n),
            formatList: S.bind(null, s, n.getListFormat),
            formatListToParts: C.bind(null, s, n.getListFormat),
            formatDisplayName: x.bind(null, s, n.getDisplayNames)
          })
      }
    },
    92849: (e, t, n) => {
      n.d(t, {
        Ho: () => u,
        OC: () => s,
        hr: () => l,
        pg: () => c,
        sb: () => d,
        uo: () => a
      });
      var r, o = n(91299);
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(r || (r = {}));
      var i = function(e) {
          function t(n, r, o) {
            var i = this,
              s = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(s ? "\n".concat(s.message, "\n").concat(s.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, o.__extends)(t, e), t
        }(Error),
        s = function(e) {
          function t(t, n) {
            return e.call(this, r.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, o.__extends)(t, e), t
        }(i),
        a = function(e) {
          function t(t, n) {
            return e.call(this, r.INVALID_CONFIG, t, n) || this
          }
          return (0, o.__extends)(t, e), t
        }(i),
        l = function(e) {
          function t(t, n) {
            return e.call(this, r.MISSING_DATA, t, n) || this
          }
          return (0, o.__extends)(t, e), t
        }(i),
        c = function(e) {
          function t(t, n, o) {
            var i = e.call(this, r.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), o) || this;
            return i.locale = n, i
          }
          return (0, o.__extends)(t, e), t
        }(i),
        u = function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return i.descriptor = r, i.locale = n, i
          }
          return (0, o.__extends)(t, e), t
        }(c),
        d = function(e) {
          function t(t, n) {
            var o = e.call(this, r.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return o.descriptor = t, o
          }
          return (0, o.__extends)(t, e), t
        }(i)
    },
    7943: (e, t, n) => {
      n.d(t, {
        h: () => J
      });
      var r, o, i, s, a = n(91299),
        l = n(44129),
        c = n(92849);
      (s = r || (r = {}))[s.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", s[s.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", s[s.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", s[s.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", s[s.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", s[s.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", s[s.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", s[s.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", s[s.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", s[s.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", s[s.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", s[s.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", s[s.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", s[s.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", s[s.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", s[s.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", s[s.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", s[s.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", s[s.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", s[s.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", s[s.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", s[s.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", s[s.INVALID_TAG = 23] = "INVALID_TAG", s[s.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", s[s.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", s[s.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(o || (o = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(i || (i = {}));
      var u = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        d = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function f(e) {
        var t = {};
        return e.replace(d, (function(e) {
          var n = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === n ? "2-digit" : "numeric";
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
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][n - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "e":
              if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "c":
              if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][n - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][n - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = n < 4 ? "short" : "long";
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
      var h = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        p = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        v = /^(@+)?(\+|#+)?[rs]?$/g,
        m = /(\*)(0+)|(#+)(0+)|(0+)/g,
        g = /^(0+)$/;

      function y(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(v, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function b(e) {
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

      function E(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !g.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function w(e) {
        return b(e) || {}
      }

      function T(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var o = r[n];
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
              t = (0, a.__assign)((0, a.__assign)((0, a.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, a.__assign)((0, a.__assign)({}, e), w(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, a.__assign)((0, a.__assign)((0, a.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, a.__assign)((0, a.__assign)({}, e), w(t))
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
              o.options[0].replace(m, (function(e, n, r, o, i, s) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (g.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (p.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(p, (function(e, n, r, o, i, s) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && s ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + s.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, a.__assign)((0, a.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, a.__assign)((0, a.__assign)({}, t), y(i)))
          } else if (v.test(o.stem)) t = (0, a.__assign)((0, a.__assign)({}, t), y(o.stem));
          else {
            var s = b(o.stem);
            s && (t = (0, a.__assign)((0, a.__assign)({}, t), s));
            var l = E(o.stem);
            l && (t = (0, a.__assign)((0, a.__assign)({}, t), l))
          }
        }
        return t
      }
      var _, P = {
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

      function S(e) {
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
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (P[n || ""] || P[r || ""] || P["".concat(r, "-001")] || P["001"])[0]
      }
      var C = new RegExp("^".concat(u.source, "*")),
        L = new RegExp("".concat(u.source, "*$"));

      function x(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var A = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        M = !!String.fromCodePoint,
        O = !!Object.fromEntries,
        k = !!String.prototype.codePointAt,
        I = !!String.prototype.trimStart,
        R = !!String.prototype.trimEnd,
        H = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        N = !0;
      try {
        N = "a" === (null === (_ = G("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === _ ? void 0 : _[0])
      } catch (e) {
        N = !1
      }
      var D, B = A ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        F = M ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        U = O ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        j = k ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        K = I ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(C, "")
        },
        V = R ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(L, "")
        };

      function G(e, t) {
        return new RegExp(e, t)
      }
      if (N) {
        var W = G("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        D = function(e, t) {
          var n;
          return W.lastIndex = t, null !== (n = W.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else D = function(e, t) {
        for (var n = [];;) {
          var r = j(e, t);
          if (void 0 === r || z(r) || $(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return F.apply(void 0, n)
      };

      function X(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function z(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function $(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Y(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, a.__assign)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function q(e, t) {
        return Object.keys((0, a.__assign)((0, a.__assign)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, a.__assign)((0, a.__assign)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function Z(e, t) {
        if (!t) return e;
        var n = l.S.formats;
        return (0, a.__assign)((0, a.__assign)((0, a.__assign)({}, n), e), {
          date: q(Y(n.date, t), Y(e.date || {}, t)),
          time: q(Y(n.time, t), Y(e.time || {}, t))
        })
      }! function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var i = []; !this.isEOF();) {
            var s = this.char();
            if (123 === s) {
              if ((a = this.parseArgument(e, n)).err) return a;
              i.push(a.val)
            } else {
              if (125 === s && e > 0) break;
              if (35 !== s || "plural" !== t && "selectordinal" !== t) {
                if (60 === s && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(r.UNMATCHED_CLOSING_TAG, x(this.clonePosition(), this.clonePosition()))
                }
                if (60 === s && !this.ignoreTag && X(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  i.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  i.push(a.val)
                }
              } else {
                var l = this.clonePosition();
                this.bump(), i.push({
                  type: o.pound,
                  location: x(l, this.clonePosition())
                })
              }
            }
          }
          return {
            val: i,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var i = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: o.literal,
              value: "<".concat(i, "/>"),
              location: x(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var s = this.parseMessage(e + 1, t, !0);
            if (s.err) return s;
            var a = s.val,
              l = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !X(this.char())) return this.error(r.INVALID_TAG, x(l, this.clonePosition()));
              var c = this.clonePosition();
              return i !== this.parseTagName() ? this.error(r.UNMATCHED_CLOSING_TAG, x(c, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: o.tag,
                  value: i,
                  children: a,
                  location: x(n, this.clonePosition())
                },
                err: null
              } : this.error(r.INVALID_TAG, x(l, this.clonePosition())))
            }
            return this.error(r.UNCLOSED_TAG, x(n, this.clonePosition()))
          }
          return this.error(r.INVALID_TAG, x(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var i = this.tryParseQuote(t);
            if (i) r += i;
            else {
              var s = this.tryParseUnquoted(e, t);
              if (s) r += s;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                r += a
              }
            }
          }
          var l = x(n, this.clonePosition());
          return {
            val: {
              type: o.literal,
              value: r,
              location: l
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (X(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return F.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), F(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, x(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(r.EMPTY_ARGUMENT, x(n, this.clonePosition()));
          var i = this.parseIdentifierIfPossible().value;
          if (!i) return this.error(r.MALFORMED_ARGUMENT, x(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, x(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: o.argument,
                  value: i,
                  location: x(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, x(n, this.clonePosition())) : this.parseArgumentOptions(e, t, i, n);
            default:
              return this.error(r.MALFORMED_ARGUMENT, x(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = D(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: x(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, s) {
          var l, c = this.clonePosition(),
            u = this.parseIdentifierIfPossible().value,
            d = this.clonePosition();
          switch (u) {
            case "":
              return this.error(r.EXPECT_ARGUMENT_TYPE, x(c, d));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var h = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var p = this.clonePosition();
                if ((T = this.parseSimpleArgStyleIfPossible()).err) return T;
                if (0 === (y = V(T.val)).length) return this.error(r.EXPECT_ARGUMENT_STYLE, x(this.clonePosition(), this.clonePosition()));
                h = {
                  style: y,
                  styleLocation: x(p, this.clonePosition())
                }
              }
              if ((_ = this.tryParseArgumentClose(s)).err) return _;
              var v = x(s, this.clonePosition());
              if (h && B(null == h ? void 0 : h.style, "::", 0)) {
                var m = K(h.style.slice(2));
                if ("number" === u) return (T = this.parseNumberSkeletonFromString(m, h.styleLocation)).err ? T : {
                  val: {
                    type: o.number,
                    value: n,
                    location: v,
                    style: T.val
                  },
                  err: null
                };
                if (0 === m.length) return this.error(r.EXPECT_DATE_TIME_SKELETON, v);
                var g = m;
                this.locale && (g = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = S(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) n += "a";
                      for (; s-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(m, this.locale));
                var y = {
                  type: i.dateTime,
                  pattern: g,
                  location: h.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? f(g) : {}
                };
                return {
                  val: {
                    type: "date" === u ? o.date : o.time,
                    value: n,
                    location: v,
                    style: y
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === u ? o.number : "date" === u ? o.date : o.time,
                  value: n,
                  location: v,
                  style: null !== (l = null == h ? void 0 : h.style) && void 0 !== l ? l : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var b = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(r.EXPECT_SELECT_ARGUMENT_OPTIONS, x(b, (0, a.__assign)({}, b)));
              this.bumpSpace();
              var E = this.parseIdentifierIfPossible(),
                w = 0;
              if ("select" !== u && "offset" === E.value) {
                if (!this.bumpIf(":")) return this.error(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, x(this.clonePosition(), this.clonePosition()));
                var T;
                if (this.bumpSpace(), (T = this.tryParseDecimalInteger(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return T;
                this.bumpSpace(), E = this.parseIdentifierIfPossible(), w = T.val
              }
              var _, P = this.tryParsePluralOrSelectOptions(e, u, t, E);
              if (P.err) return P;
              if ((_ = this.tryParseArgumentClose(s)).err) return _;
              var C = x(s, this.clonePosition());
              return "select" === u ? {
                val: {
                  type: o.select,
                  value: n,
                  options: U(P.val),
                  location: C
                },
                err: null
              } : {
                val: {
                  type: o.plural,
                  value: n,
                  options: U(P.val),
                  offset: w,
                  pluralType: "plural" === u ? "cardinal" : "ordinal",
                  location: C
                },
                err: null
              };
            default:
              return this.error(r.INVALID_ARGUMENT_TYPE, x(c, d))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, x(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, x(n, this.clonePosition()));
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
          var n = [];
          try {
            n = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], n = 0, r = e.split(h).filter((function(e) {
                  return e.length > 0
                })); n < r.length; n++) {
                var o = r[n].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var i = o[0], s = o.slice(1), a = 0, l = s; a < l.length; a++)
                  if (0 === l[a].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: i,
                  options: s
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(r.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: i.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? T(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, o) {
          for (var i, s = !1, a = [], l = new Set, c = o.value, u = o.location;;) {
            if (0 === c.length) {
              var d = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var f = this.tryParseDecimalInteger(r.EXPECT_PLURAL_ARGUMENT_SELECTOR, r.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (f.err) return f;
              u = x(d, this.clonePosition()), c = this.message.slice(d.offset, this.offset())
            }
            if (l.has(c)) return this.error("select" === t ? r.DUPLICATE_SELECT_ARGUMENT_SELECTOR : r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === c && (s = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, x(this.clonePosition(), this.clonePosition()));
            var p = this.parseMessage(e + 1, t, n);
            if (p.err) return p;
            var v = this.tryParseArgumentClose(h);
            if (v.err) return v;
            a.push([c, {
              value: p.val,
              location: x(h, this.clonePosition())
            }]), l.add(c), this.bumpSpace(), c = (i = this.parseIdentifierIfPossible()).value, u = i.location
          }
          return 0 === a.length ? this.error("select" === t ? r.EXPECT_SELECT_ARGUMENT_SELECTOR : r.EXPECT_PLURAL_ARGUMENT_SELECTOR, x(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(r.MISSING_OTHER_CLAUSE, x(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            o = !0, i = 10 * i + (s - 48), this.bump()
          }
          var a = x(r, this.clonePosition());
          return o ? H(i *= n) ? {
            val: i,
            err: null
          } : this.error(t, a) : this.error(e, a)
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
          var t = j(this.message, e);
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
          if (B(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && z(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }
      }();
      var J = function(e, t, n, r, i) {
        var s = e.locale,
          l = e.formats,
          u = e.messages,
          d = e.defaultLocale,
          f = e.defaultFormats,
          h = e.fallbackOnEmptyString,
          p = e.onError,
          v = e.timeZone,
          m = e.defaultRichTextElements;
        void 0 === n && (n = {
          id: ""
        });
        var g = n.id,
          y = n.defaultMessage;
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
        }(!!g);
        var b = String(g),
          E = u && Object.prototype.hasOwnProperty.call(u, b) && u[b];
        if (Array.isArray(E) && 1 === E.length && E[0].type === o.literal) return E[0].value;
        if (!r && E && "string" == typeof E && !m) return E.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (r = (0, a.__assign)((0, a.__assign)({}, m), r || {}), l = Z(l, v), f = Z(f, v), !E) {
          if (!1 === h && "" === E) return E;
          if ((!y || s && s.toLowerCase() !== d.toLowerCase()) && p(new c.sb(n, s)), y) try {
            return t.getMessageFormat(y, d, f, i).format(r)
          } catch (e) {
            return p(new c.Ho('Error formatting default message for: "'.concat(b, '", rendering default message verbatim'), s, n, e)), "string" == typeof y ? y : b
          }
          return b
        }
        try {
          return t.getMessageFormat(E, s, l, (0, a.__assign)({
            formatters: t
          }, i || {})).format(r)
        } catch (e) {
          p(new c.Ho('Error formatting message: "'.concat(b, '", using ').concat(y ? "default message" : "id", " as fallback."), s, n, e))
        }
        if (y) try {
          return t.getMessageFormat(y, d, f, i).format(r)
        } catch (e) {
          p(new c.Ho('Error formatting the default message for: "'.concat(b, '", rendering message verbatim'), s, n, e))
        }
        return "string" == typeof E ? E : "string" == typeof y ? y : b
      }
    },
    13599: (e, t, n) => {
      n.d(t, {
        JF: () => m,
        GT: () => b,
        MT: () => g,
        J9: () => v,
        F3: () => E
      });
      var r = n(91299),
        o = n(44129);

      function i(e, t) {
        var n = t && t.cache ? t.cache : f,
          r = t && t.serializer ? t.serializer : u;
        return (t && t.strategy ? t.strategy : c)(e, {
          cache: n,
          serializer: r
        })
      }

      function s(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, r), t.set(i, s)), s
      }

      function a(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function l(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function c(e, t) {
        return l(e, this, 1 === e.length ? s : a, t.cache.create(), t.serializer)
      }
      var u = function() {
        return JSON.stringify(arguments)
      };

      function d() {
        this.cache = Object.create(null)
      }
      d.prototype.get = function(e) {
        return this.cache[e]
      }, d.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var f = {
          create: function() {
            return new d
          }
        },
        h = {
          variadic: function(e, t) {
            return l(e, this, a, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return l(e, this, s, t.cache.create(), t.serializer)
          }
        },
        p = n(92849);

      function v(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var m = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function g() {
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

      function y(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }

      function b(e) {
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
          n = Intl.ListFormat,
          s = Intl.DisplayNames,
          a = i((function() {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new((e = Intl.DateTimeFormat).bind.apply(e, (0, r.__spreadArray)([void 0], t, !1)))
          }), {
            cache: y(e.dateTime),
            strategy: h.variadic
          }),
          l = i((function() {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new((e = Intl.NumberFormat).bind.apply(e, (0, r.__spreadArray)([void 0], t, !1)))
          }), {
            cache: y(e.number),
            strategy: h.variadic
          }),
          c = i((function() {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new((e = Intl.PluralRules).bind.apply(e, (0, r.__spreadArray)([void 0], t, !1)))
          }), {
            cache: y(e.pluralRules),
            strategy: h.variadic
          });
        return {
          getDateTimeFormat: a,
          getNumberFormat: l,
          getMessageFormat: i((function(e, t, n, i) {
            return new o.S(e, t, n, (0, r.__assign)({
              formatters: {
                getNumberFormat: l,
                getDateTimeFormat: a,
                getPluralRules: c
              }
            }, i || {}))
          }), {
            cache: y(e.message),
            strategy: h.variadic
          }),
          getRelativeTimeFormat: i((function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return new(t.bind.apply(t, (0, r.__spreadArray)([void 0], e, !1)))
          }), {
            cache: y(e.relativeTime),
            strategy: h.variadic
          }),
          getPluralRules: c,
          getListFormat: i((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(n.bind.apply(n, (0, r.__spreadArray)([void 0], e, !1)))
          }), {
            cache: y(e.list),
            strategy: h.variadic
          }),
          getDisplayNames: i((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(s.bind.apply(s, (0, r.__spreadArray)([void 0], e, !1)))
          }), {
            cache: y(e.displayNames),
            strategy: h.variadic
          })
        }
      }

      function E(e, t, n, r) {
        var o, i = e && e[t];
        if (i && (o = i[n]), o) return o;
        r(new p.OC("No ".concat(t, " format named: ").concat(n)))
      }
    },
    77535: (e, t, n) => {
      n.d(t, {
        C: () => q,
        E: () => Y,
        S: () => D,
        _: () => l,
        a: () => s,
        b: () => E,
        c: () => L,
        d: () => f,
        e: () => J,
        f: () => te,
        h: () => Q,
        i: () => m,
        m: () => ee,
        p: () => p,
        r: () => Z,
        s: () => ne,
        t: () => v,
        w: () => re
      });
      const r = {
        toVector: (e, t) => (void 0 === e && (e = t), Array.isArray(e) ? e : [e, e]),
        add: (e, t) => [e[0] + t[0], e[1] + t[1]],
        sub: (e, t) => [e[0] - t[0], e[1] - t[1]],
        addTo(e, t) {
          e[0] += t[0], e[1] += t[1]
        },
        subTo(e, t) {
          e[0] -= t[0], e[1] -= t[1]
        }
      };

      function o(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function i(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -o(t - e, n - t, r) + t : e > n ? +o(e - n, n - t, r) + n : e
      }

      function s(e, t, n) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(Object(n), !0).forEach((function(t) {
            s(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      const c = {
        pointer: {
          start: "down",
          change: "move",
          end: "up"
        },
        mouse: {
          start: "down",
          change: "move",
          end: "up"
        },
        touch: {
          start: "start",
          change: "move",
          end: "end"
        },
        gesture: {
          start: "start",
          change: "change",
          end: "end"
        }
      };

      function u(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const d = ["enter", "leave"];

      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const r = c[e],
          o = r && r[t] || t;
        return "on" + u(e) + u(o) + (function() {
          let e = arguments.length > 1 ? arguments[1] : void 0;
          return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !d.includes(e)
        }(n, o) ? "Capture" : "")
      }
      const h = ["gotpointercapture", "lostpointercapture"];

      function p(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = h.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function v(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        const n = c[e];
        return e + (n && n[t] || t)
      }

      function m(e) {
        return "touches" in e
      }

      function g(e) {
        return m(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function y(e) {
        return m(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function b(e, t) {
        try {
          const n = t.clientX - e.clientX,
            r = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            i = (t.clientY + e.clientY) / 2,
            s = Math.hypot(n, r);
          return {
            angle: -180 * Math.atan2(n, r) / Math.PI,
            distance: s,
            origin: [o, i]
          }
        } catch (e) {}
        return null
      }

      function E(e) {
        return function(e) {
          return Array.from(e.touches).filter((t => {
            var n, r;
            return t.target === e.currentTarget || (null === (n = e.currentTarget) || void 0 === n || null === (r = n.contains) || void 0 === r ? void 0 : r.call(n, t.target))
          }))
        }(e).map((e => e.identifier))
      }

      function w(e, t) {
        const [n, r] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return b(n, r)
      }

      function T(e) {
        const t = y(e);
        return m(e) ? t.identifier : t.pointerId
      }

      function _(e) {
        const t = y(e);
        return [t.clientX, t.clientY]
      }

      function P(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function S(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return e(...n)
        }
        return e
      }

      function C() {}

      function L() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? C : 1 === t.length ? t[0] : function() {
          let e;
          for (const n of t) e = n.apply(this, arguments) || e;
          return e
        }
      }

      function x(e, t) {
        return Object.assign({}, t, e || {})
      }
      class A {
        constructor(e, t, n) {
          this.ctrl = e, this.args = t, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
        }
        get state() {
          return this.ctrl.state[this.key]
        }
        set state(e) {
          this.ctrl.state[this.key] = e
        }
        get shared() {
          return this.ctrl.state.shared
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key]
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key]
        }
        get config() {
          return this.ctrl.config[this.key]
        }
        get sharedConfig() {
          return this.ctrl.config.shared
        }
        get handler() {
          return this.ctrl.handlers[this.key]
        }
        reset() {
          const {
            state: e,
            shared: t,
            ingKey: n,
            args: r
          } = this;
          t[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], e.args = r, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
        }
        start(e) {
          const t = this.state,
            n = this.config;
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? S(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
        }
        computeValues(e) {
          const t = this.state;
          t._values = e, t.values = this.config.transform(e)
        }
        computeInitial() {
          const e = this.state;
          e._initial = e._values, e.initial = e.values
        }
        compute(e) {
          const {
            state: t,
            config: n,
            shared: o
          } = this;
          t.args = this.args;
          let s = 0;
          if (e && (t.event = e, n.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, o.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, o.locked = !!document.pointerLockElement, Object.assign(o, function(e) {
              const t = {};
              if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
                const {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                } = e;
                Object.assign(t, {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                })
              }
              return t
            }(e)), o.down = o.pressed = o.buttons % 2 == 1 || o.touches > 0, s = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            r.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [a, l] = t._movement, [c, u] = n.threshold, {
            _step: d,
            values: f
          } = t;
          if (n.hasCustomTransform ? (!1 === d[0] && (d[0] = Math.abs(a) >= c && f[0]), !1 === d[1] && (d[1] = Math.abs(l) >= u && f[1])) : (!1 === d[0] && (d[0] = Math.abs(a) >= c && Math.sign(a) * c), !1 === d[1] && (d[1] = Math.abs(l) >= u && Math.sign(l) * u)), t.intentional = !1 !== d[0] || !1 !== d[1], !t.intentional) return;
          const h = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = f;
            h[0] = !1 !== d[0] ? e - d[0] : 0, h[1] = !1 !== d[1] ? t - d[1] : 0
          } else h[0] = !1 !== d[0] ? a - d[0] : 0, h[1] = !1 !== d[1] ? l - d[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(h);
          const p = t.offset,
            v = t._active && !t._blocked || t.active;
          v && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = o[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = S(n.bounds, t)), this.setup && this.setup()), t.movement = h, this.computeOffset()));
          const [m, g] = t.offset, [
            [y, b],
            [E, w]
          ] = t._bounds;
          t.overflow = [m < y ? -1 : m > b ? 1 : 0, g < E ? -1 : g > w ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const T = t._active && n.rubberband || [0, 0];
          if (t.offset = function(e, t, n) {
              let [r, o] = t, [s, a] = n;
              const [
                [l, c],
                [u, d]
              ] = e;
              return [i(r, l, c, s), i(o, u, d, a)]
            }(t._bounds, t.offset, T), t.delta = r.sub(t.offset, p), this.computeMovement(), v && (!t.last || s > 32)) {
            t.delta = r.sub(t.offset, p);
            const e = t.delta.map(Math.abs);
            r.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && s > 0 && (t.velocity = [e[0] / s, e[1] / s], t.timeDelta = s)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(l(l(l({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class M extends A {
        constructor() {
          super(...arguments), s(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = r.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = r.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[g(e)] : n.axisThreshold;
            t.axis = function(e, t) {
              let [n, r] = e;
              const o = Math.abs(n),
                i = Math.abs(r);
              return o > i && o > t ? "x" : i > o && i > t ? "y" : void 0
            }(t._movement, r)
          }
          t._blocked = (n.lockDirection || !!n.axis) && !t.axis || !!n.axis && n.axis !== t.axis
        }
        restrictToAxis(e) {
          if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
            case "x":
              e[1] = 0;
              break;
            case "y":
              e[0] = 0
          }
        }
      }
      const O = e => e,
        k = {
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          eventOptions: (e, t, n) => l(l({}, n.shared.eventOptions), e),
          preventDefault() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          },
          triggerAllEvents() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          },
          rubberband() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return r.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? r.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || O
          },
          threshold: e => r.toVector(e, 0)
        },
        I = l(l({}, k), {}, {
          axis(e, t, n) {
            let {
              axis: r
            } = n;
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          },
          bounds() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ("function" == typeof e) return t => I.bounds(e(t));
            if ("current" in e) return () => e.current;
            if ("function" == typeof HTMLElement && e instanceof HTMLElement) return e;
            const {
              left: t = -1 / 0,
              right: n = 1 / 0,
              top: r = -1 / 0,
              bottom: o = 1 / 0
            } = e;
            return [
              [t, n],
              [r, o]
            ]
          }
        }),
        R = {
          ArrowRight: function(e) {
            return [e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), 0]
          },
          ArrowLeft: function(e) {
            return [-1 * e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), 0]
          },
          ArrowUp: function(e) {
            return [0, -1 * e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)]
          },
          ArrowDown: function(e) {
            return [0, e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)]
          }
        },
        H = "undefined" != typeof window && window.document && window.document.createElement;

      function N() {
        return H && "ontouchstart" in window
      }
      const D = {
          isBrowser: H,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: N(),
          touchscreen: N() || H && window.navigator.maxTouchPoints > 1,
          pointer: H && "onpointerdown" in window,
          pointerLock: H && "exitPointerLock" in window.document
        },
        B = .5,
        F = 50,
        U = 250,
        j = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        K = l(l({}, I), {}, {
          device(e, t, n) {
            let {
              pointer: {
                touch: r = !1,
                lock: o = !1,
                mouse: i = !1
              } = {}
            } = n;
            return this.pointerLock = o && D.pointerLock, D.touch && r ? "touch" : this.pointerLock ? "mouse" : D.pointer && !i ? "pointer" : D.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, n) {
            let {
              preventScroll: r
            } = n;
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, D.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
          },
          pointerCapture(e, t, n) {
            let {
              pointer: {
                capture: r = !0,
                buttons: o = 1,
                keys: i = !0
              } = {}
            } = n;
            return this.pointerButtons = o, this.keys = i, !this.pointerLock && "pointer" === this.device && r
          },
          threshold(e, t, n) {
            let {
              filterTaps: o = !1,
              tapsThreshold: i = 3,
              axis: s
            } = n;
            const a = r.toVector(e, o ? i : s ? 1 : 0);
            return this.filterTaps = o, this.tapsThreshold = i, a
          },
          swipe() {
            let {
              velocity: e = B,
              distance: t = F,
              duration: n = U
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform(r.toVector(e)),
              distance: this.transform(r.toVector(t)),
              duration: n
            }
          },
          delay() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            switch (e) {
              case !0:
                return 180;
              case !1:
                return 0;
              default:
                return e
            }
          },
          axisThreshold: e => e ? l(l({}, j), e) : j,
          keyboardDisplacement() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
          }
        });

      function V(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, s] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && s < 0 || n > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const G = l(l({}, k), {}, {
          device(e, t, n) {
            let {
              shared: r,
              pointer: {
                touch: o = !1
              } = {}
            } = n;
            if (r.target && !D.touch && D.gesture) return "gesture";
            if (D.touch && o) return "touch";
            if (D.touchscreen) {
              if (D.pointer) return "pointer";
              if (D.touch) return "touch"
            }
          },
          bounds(e, t, n) {
            let {
              scaleBounds: r = {},
              angleBounds: o = {}
            } = n;
            const i = e => {
                const t = x(S(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              s = e => {
                const t = x(S(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof o ? [i(), s()] : e => [i(e), s(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, r.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        W = l(l({}, I), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        X = I,
        z = I,
        $ = l(l({}, I), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        Y = new Map,
        q = new Map;

      function Z(e) {
        Y.set(e.key, e.engine), q.set(e.key, e.resolver)
      }
      const J = {
          key: "drag",
          engine: class extends M {
            constructor() {
              super(...arguments), s(this, "ingKey", "dragging")
            }
            reset() {
              super.reset();
              const e = this.state;
              e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this)
            }
            setup() {
              const e = this.state;
              if (e._bounds instanceof HTMLElement) {
                const t = e._bounds.getBoundingClientRect(),
                  n = e.currentTarget.getBoundingClientRect(),
                  r = {
                    left: t.left - n.left + e.offset[0],
                    right: t.right - n.right + e.offset[0],
                    top: t.top - n.top + e.offset[1],
                    bottom: t.bottom - n.bottom + e.offset[1]
                  };
                e._bounds = I.bounds(r)
              }
            }
            cancel() {
              const e = this.state;
              e.canceled || (e.canceled = !0, e._active = !1, setTimeout((() => {
                this.compute(), this.emit()
              }), 0))
            }
            setActive() {
              this.state._active = this.state._pointerActive || this.state._keyboardActive
            }
            clean() {
              this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
            }
            pointerDown(e) {
              const t = this.config,
                n = this.state;
              if (null != e.buttons && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)) return;
              const r = this.ctrl.setEventIds(e);
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = T(e), n._pointerActive = !0, this.computeValues(_(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== g(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const o = T(e);
              if (void 0 !== t._pointerId && o !== t._pointerId) return;
              const i = _(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = r.sub(i, t._values), this.computeValues(i)), r.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = T(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= n.tapsThreshold && i <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
              else {
                const [e, r] = t._delta, [o, i] = t._movement, [s, a] = n.swipe.velocity, [l, c] = n.swipe.distance, u = n.swipe.duration;
                if (t.elapsedTime < u) {
                  const n = Math.abs(e / t.timeDelta),
                    u = Math.abs(r / t.timeDelta);
                  n > s && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > a && Math.abs(i) > c && (t.swipe[1] = Math.sign(r))
                }
              }
              this.emit()
            }
            pointerClick(e) {
              !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }
            setupPointer(e) {
              const t = this.config,
                n = t.device;
              t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)))
            }
            pointerClean() {
              this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
            }
            preventScroll(e) {
              this.state._preventScroll && e.cancelable && e.preventDefault()
            }
            setupScrollPrevention(e) {
              this.state._preventScroll = !1,
                function(e) {
                  "persist" in e && "function" == typeof e.persist && e.persist()
                }(e);
              const t = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                passive: !1
              });
              this.eventStore.add(this.sharedConfig.window, "touch", "end", t), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", t), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e)
            }
            setupDelayTrigger(e) {
              this.state._delayed = !0, this.timeoutStore.add("dragDelay", (() => {
                this.state._step = [0, 0], this.startPointerDrag(e)
              }), this.config.delay)
            }
            keyDown(e) {
              const t = R[e.key];
              if (t) {
                const n = this.state,
                  o = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, o), n._keyboardActive = !0, r.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in R && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: K
        },
        Q = {
          key: "hover",
          engine: class extends M {
            constructor() {
              super(...arguments), s(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(_(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = _(e);
              t._movement = t._delta = r.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: $
        },
        ee = {
          key: "move",
          engine: class extends M {
            constructor() {
              super(...arguments), s(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(_(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = _(e),
                n = this.state;
              n._delta = r.sub(t, n._values), r.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: W
        },
        te = {
          key: "pinch",
          engine: class extends A {
            constructor() {
              super(...arguments), s(this, "ingKey", "pinching"), s(this, "aliasKey", "da")
            }
            init() {
              this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = new Map
            }
            reset() {
              super.reset();
              const e = this.state;
              e._touchIds = [], e.canceled = !1, e.cancel = this.cancel.bind(this), e.turns = 0
            }
            computeOffset() {
              const {
                type: e,
                movement: t,
                lastOffset: n
              } = this.state;
              this.state.offset = "wheel" === e ? r.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
            }
            computeMovement() {
              const {
                offset: e,
                lastOffset: t
              } = this.state;
              this.state.movement = [e[0] / t[0], e[1] - t[1]]
            }
            axisIntent() {
              const e = this.state,
                [t, n] = e._movement;
              if (!e.axis) {
                const r = 30 * Math.abs(t) - Math.abs(n);
                r < 0 ? e.axis = "angle" : r > 0 && (e.axis = "scale")
              }
            }
            restrictToAxis(e) {
              this.config.lockDirection && ("scale" === this.state.axis ? e[1] = 0 : "angle" === this.state.axis && (e[0] = 0))
            }
            cancel() {
              const e = this.state;
              e.canceled || setTimeout((() => {
                e.canceled = !0, e._active = !1, this.compute(), this.emit()
              }), 0)
            }
            touchStart(e) {
              this.ctrl.setEventIds(e);
              const t = this.state,
                n = this.ctrl.touchIds;
              if (t._active && t._touchIds.every((e => n.has(e)))) return;
              if (n.size < 2) return;
              this.start(e), t._touchIds = Array.from(n).slice(0, 2);
              const r = w(e, t._touchIds);
              r && this.pinchStart(e, r)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const t = this.state,
                n = t._pointerEvents,
                r = this.ctrl.pointerIds;
              if (t._active && Array.from(n.keys()).every((e => r.has(e)))) return;
              if (n.size < 2 && n.set(e.pointerId, e), t._pointerEvents.size < 2) return;
              this.start(e);
              const o = b(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = w(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = b(...Array.from(t.values()));
              n && this.pinchMove(e, n)
            }
            pinchMove(e, t) {
              const n = this.state,
                r = n._values[1],
                o = t.angle - r;
              let i = 0;
              Math.abs(o) > 270 && (i += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * i]), n.origin = t.origin, n.turns = i, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit()
            }
            touchEnd(e) {
              this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some((e => !this.ctrl.touchIds.has(e))) && (this.state._active = !1, this.compute(e), this.emit())
            }
            pointerEnd(e) {
              const t = this.state;
              this.ctrl.setEventIds(e);
              try {
                e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              t._pointerEvents.has(e.pointerId) && t._pointerEvents.delete(e.pointerId), t._active && t._pointerEvents.size < 2 && (t._active = !1, this.compute(e), this.emit())
            }
            gestureStart(e) {
              e.cancelable && e.preventDefault();
              const t = this.state;
              t._active || (this.start(e), this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY], this.compute(e), this.emit())
            }
            gestureMove(e) {
              if (e.cancelable && e.preventDefault(), !this.state._active) return;
              const t = this.state;
              this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY];
              const n = t._movement;
              t._movement = [e.scale - 1, e.rotation], t._delta = r.sub(t._movement, n), this.compute(e), this.emit()
            }
            gestureEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            wheel(e) {
              const t = this.config.modifierKey;
              t && !(Array.isArray(t) ? t.find((t => e[t])) : e[t]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)))
            }
            wheelStart(e) {
              this.start(e), this.wheelChange(e)
            }
            wheelChange(e) {
              "uv" in e || e.cancelable && e.preventDefault();
              const t = this.state;
              t._delta = [-P(e)[1] / 100 * t.offset[0], 0], r.addTo(t._movement, t._delta), V(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              t && (e(t, "start", this[t + "Start"].bind(this)), e(t, "change", this[t + "Move"].bind(this)), e(t, "end", this[t + "End"].bind(this)), e(t, "cancel", this[t + "End"].bind(this)), e("lostPointerCapture", "", this[t + "End"].bind(this))), this.config.pinchOnWheel && e("wheel", "", this.wheel.bind(this), {
                passive: !1
              })
            }
          },
          resolver: G
        },
        ne = {
          key: "scroll",
          engine: class extends M {
            constructor() {
              super(...arguments), s(this, "ingKey", "scrolling")
            }
            scroll(e) {
              this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(e) {
              e.cancelable && e.preventDefault();
              const t = this.state,
                n = function(e) {
                  var t, n;
                  const {
                    scrollX: r,
                    scrollY: o,
                    scrollLeft: i,
                    scrollTop: s
                  } = e.currentTarget;
                  return [null !== (t = null != r ? r : i) && void 0 !== t ? t : 0, null !== (n = null != o ? o : s) && void 0 !== n ? n : 0]
                }(e);
              t._delta = r.sub(n, t._values), r.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: X
        },
        re = {
          key: "wheel",
          engine: class extends M {
            constructor() {
              super(...arguments), s(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = P(e), r.addTo(t._movement, t._delta), V(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: z
        }
    },
    20138: (e, t, n) => {
      n.d(t, {
        t: () => p,
        x: () => c
      });
      var r = n(77535);
      const o = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          window() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.S.isBrowser ? window : void 0
          },
          eventOptions() {
            let {
              passive: e = !0,
              capture: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              passive: e,
              capture: t
            }
          },
          transform: e => e
        },
        i = ["target", "eventOptions", "window", "enabled", "transform"];

      function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = s(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class a {
        constructor(e, t) {
          (0, r.a)(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, o, i) {
          const s = this._listeners,
            a = (0, r.t)(t, n),
            l = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {},
            c = (0, r._)((0, r._)({}, l), i);
          e.addEventListener(a, o, c);
          const u = () => {
            e.removeEventListener(a, o, c), s.delete(u)
          };
          return s.add(u), u
        }
        clean() {
          this._listeners.forEach((e => e())), this._listeners.clear()
        }
      }
      class l {
        constructor() {
          (0, r.a)(this, "_timeouts", new Map)
        }
        add(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 140;
          this.remove(e);
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
          this._timeouts.set(e, window.setTimeout(t, n, ...o))
        }
        remove(e) {
          const t = this._timeouts.get(e);
          t && window.clearTimeout(t)
        }
        clean() {
          this._timeouts.forEach((e => {
            window.clearTimeout(e)
          })), this._timeouts.clear()
        }
      }
      class c {
        constructor(e) {
          var t, n;
          (0, r.a)(this, "gestures", new Set), (0, r.a)(this, "_targetEventStore", new a(this)), (0, r.a)(this, "gestureEventStores", {}), (0, r.a)(this, "gestureTimeoutStores", {}), (0, r.a)(this, "handlers", {}), (0, r.a)(this, "config", {}), (0, r.a)(this, "pointerIds", new Set), (0, r.a)(this, "touchIds", new Set), (0, r.a)(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && u(t, "drag"), n.wheel && u(t, "wheel"), n.scroll && u(t, "scroll"), n.move && u(t, "move"), n.pinch && u(t, "pinch"), n.hover && u(t, "hover")
        }
        setEventIds(e) {
          return (0, r.i)(e) ? (this.touchIds = new Set((0, r.b)(e)), this.touchIds) : "pointerId" in e ? ("pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(e, t) {
          this.handlers = e, this.nativeHandlers = t
        }
        applyConfig(e, t) {
          this.config = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const a = e,
              {
                target: l,
                eventOptions: c,
                window: u,
                enabled: d,
                transform: f
              } = a,
              h = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
              }(a, i);
            if (n.shared = s({
                target: l,
                eventOptions: c,
                window: u,
                enabled: d,
                transform: f
              }, o), t) {
              const e = r.C.get(t);
              n[t] = s((0, r._)({
                shared: n.shared
              }, h), e)
            } else
              for (const e in h) {
                const t = r.C.get(e);
                t && (n[e] = s((0, r._)({
                  shared: n.shared
                }, h[e]), t))
              }
            return n
          }(e, t, this.config)
        }
        clean() {
          this._targetEventStore.clean();
          for (const e of this.gestures) this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean()
        }
        effect() {
          return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
        }
        bind() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const o = this.config.shared,
            i = {};
          let s;
          if (!o.target || (s = o.target(), s)) {
            if (o.enabled) {
              for (const e of this.gestures) {
                const n = this.config[e],
                  o = d(i, n.eventOptions, !!s);
                n.enabled && new(r.E.get(e))(this, t, e).bind(o)
              }
              const e = d(i, o.eventOptions, !!s);
              for (const n in this.nativeHandlers) e(n, "", (e => this.nativeHandlers[n]((0, r._)((0, r._)({}, this.state.shared), {}, {
                event: e,
                args: t
              }))), void 0, !0)
            }
            for (const e in i) i[e] = (0, r.c)(...i[e]);
            if (!s) return i;
            for (const e in i) {
              const {
                device: t,
                capture: n,
                passive: o
              } = (0, r.p)(e);
              this._targetEventStore.add(s, t, "", i[e], {
                capture: n,
                passive: o
              })
            }
          }
        }
      }

      function u(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new a(e, t), e.gestureTimeoutStores[t] = new l
      }
      const d = (e, t, n) => function(o, i, s) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          var c, u;
          const d = null !== (c = a.capture) && void 0 !== c ? c : t.capture,
            f = null !== (u = a.passive) && void 0 !== u ? u : t.passive;
          let h = l ? o : (0, r.d)(o, i, d);
          n && f && (h += "Passive"), e[h] = e[h] || [], e[h].push(s)
        },
        f = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function h(e, t, n, o, i, s) {
        if (!e.has(n)) return;
        if (!r.E.has(o)) return;
        const a = n + "Start",
          l = n + "End";
        i[o] = e => {
          let r;
          return e.first && a in t && t[a](e), n in t && (r = t[n](e)), e.last && l in t && t[l](e), r
        }, s[o] = s[o] || {}
      }

      function p(e, t) {
        const [n, r, o] = function(e) {
          const t = {},
            n = {},
            r = new Set;
          for (let o in e) f.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
          return [n, t, r]
        }(e), i = {};
        return h(o, n, "onDrag", "drag", i, t), h(o, n, "onWheel", "wheel", i, t), h(o, n, "onScroll", "scroll", i, t), h(o, n, "onPinch", "pinch", i, t), h(o, n, "onMove", "move", i, t), h(o, n, "onHover", "hover", i, t), {
          handlers: i,
          config: t,
          nativeHandlers: r
        }
      }
    },
    91270: (e, t, n) => {
      n.d(t, {
        Eq: () => l
      });
      var r = new WeakMap,
        o = new WeakMap,
        i = {},
        s = 0,
        a = function(e) {
          return e && (e.host || a(e.parentNode))
        },
        l = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var l = Array.from(Array.isArray(e) ? e : [e]),
            c = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return c ? (l.push.apply(l, Array.from(c.querySelectorAll("[aria-live]"))), function(e, t, n, l) {
            var c = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = a(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            i[n] || (i[n] = new WeakMap);
            var u = i[n],
              d = [],
              f = new Set,
              h = new Set(c),
              p = function(e) {
                e && !f.has(e) && (f.add(e), p(e.parentNode))
              };
            c.forEach(p);
            var v = function(e) {
              e && !h.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (f.has(e)) v(e);
                else {
                  var t = e.getAttribute(l),
                    i = null !== t && "false" !== t,
                    s = (r.get(e) || 0) + 1,
                    a = (u.get(e) || 0) + 1;
                  r.set(e, s), u.set(e, a), d.push(e), 1 === s && i && o.set(e, !0), 1 === a && e.setAttribute(n, "true"), i || e.setAttribute(l, "true")
                }
              }))
            };
            return v(t), f.clear(), s++,
              function() {
                d.forEach((function(e) {
                  var t = r.get(e) - 1,
                    i = u.get(e) - 1;
                  r.set(e, t), u.set(e, i), t || (o.has(e) || e.removeAttribute(l), o.delete(e)), i || e.removeAttribute(n)
                })), --s || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
              }
          }(l, c, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    62607: (e, t, n) => {
      var r = n(95463),
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
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        a = {};

      function l(e) {
        return r.isMemo(e) ? s : a[e.$$typeof] || o
      }
      a[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[r.Memo] = s;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (p) {
            var o = h(n);
            o && o !== p && e(t, o, r)
          }
          var s = u(n);
          d && (s = s.concat(d(n)));
          for (var a = l(t), v = l(n), m = 0; m < s.length; ++m) {
            var g = s[m];
            if (!(i[g] || r && r[g] || v && v[g] || a && a[g])) {
              var y = f(n, g);
              try {
                c(t, g, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    85075: (e, t) => {
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        s = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        v = n ? Symbol.for("react.memo") : 60115,
        m = n ? Symbol.for("react.lazy") : 60116,
        g = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        E = n ? Symbol.for("react.scope") : 60119;

      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case u:
                case d:
                case i:
                case a:
                case s:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case f:
                    case m:
                    case v:
                    case l:
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

      function T(e) {
        return w(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = f, t.Fragment = i, t.Lazy = m, t.Memo = v, t.Portal = o, t.Profiler = a, t.StrictMode = s, t.Suspense = h, t.isAsyncMode = function(e) {
        return T(e) || w(e) === u
      }, t.isConcurrentMode = T, t.isContextConsumer = function(e) {
        return w(e) === c
      }, t.isContextProvider = function(e) {
        return w(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return w(e) === f
      }, t.isFragment = function(e) {
        return w(e) === i
      }, t.isLazy = function(e) {
        return w(e) === m
      }, t.isMemo = function(e) {
        return w(e) === v
      }, t.isPortal = function(e) {
        return w(e) === o
      }, t.isProfiler = function(e) {
        return w(e) === a
      }, t.isStrictMode = function(e) {
        return w(e) === s
      }, t.isSuspense = function(e) {
        return w(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === a || e === s || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === v || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === E || e.$$typeof === g)
      }, t.typeOf = w
    },
    95463: (e, t, n) => {
      e.exports = n(85075)
    },
    44129: (e, t, n) => {
      n.d(t, {
        S: () => m
      });
      var r = n(91299),
        o = n(35394);

      function i(e, t) {
        var n = t && t.cache ? t.cache : f,
          r = t && t.serializer ? t.serializer : u;
        return (t && t.strategy ? t.strategy : c)(e, {
          cache: n,
          serializer: r
        })
      }

      function s(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, r), t.set(i, s)), s
      }

      function a(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function l(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function c(e, t) {
        return l(e, this, 1 === e.length ? s : a, t.cache.create(), t.serializer)
      }
      var u = function() {
        return JSON.stringify(arguments)
      };

      function d() {
        this.cache = Object.create(null)
      }
      d.prototype.get = function(e) {
        return this.cache[e]
      }, d.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var f = {
          create: function() {
            return new d
          }
        },
        h = {
          variadic: function(e, t) {
            return l(e, this, a, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return l(e, this, s, t.cache.create(), t.serializer)
          }
        },
        p = n(76824);

      function v(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }
      var m = function() {
        function e(t, n, o, s) {
          var a, l, c, u = this;
          if (void 0 === n && (n = e.defaultLocale), this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = u.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var n = t.reduce((function(e, t) {
                return e.length && t.type === p.TT.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return (0, p.hN)(u.ast, u.locales, u.formatters, u.formats, e, void 0, u.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = u.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(u.locales)[0]
              }
            }, this.getAst = function() {
              return u.ast
            }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var d = s || {},
              f = (d.formatters, (0, r.__rest)(d, ["formatters"]));
            this.ast = e.__parse(t, (0, r.__assign)((0, r.__assign)({}, f), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (l = e.formats, (c = o) ? Object.keys(l).reduce((function(e, t) {
            var n, o;
            return e[t] = (n = l[t], (o = c[t]) ? (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, n || {}), o || {}), Object.keys(n).reduce((function(e, t) {
              return e[t] = (0, r.__assign)((0, r.__assign)({}, n[t]), o[t] || {}), e
            }), {})) : n), e
          }), (0, r.__assign)({}, l)) : l), this.formatters = s && s.formatters || (void 0 === (a = this.formatterCache) && (a = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: i((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, r.__spreadArray)([void 0], t, !1)))
            }), {
              cache: v(a.number),
              strategy: h.variadic
            }),
            getDateTimeFormat: i((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, r.__spreadArray)([void 0], t, !1)))
            }), {
              cache: v(a.dateTime),
              strategy: h.variadic
            }),
            getPluralRules: i((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, r.__spreadArray)([void 0], t, !1)))
            }), {
              cache: v(a.pluralRules),
              strategy: h.variadic
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
        }, e.__parse = o.qg, e.formats = {
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
    47965: (e, t, n) => {
      n.d(t, {
        $x: () => s,
        Ei: () => l,
        IF: () => i,
        O4: () => r,
        Zo: () => a
      });
      var r, o = n(91299);
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(r || (r = {}));
      var i = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, o.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        s = function(e) {
          function t(t, n, o, i) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(o).join('", "'), '"'), r.INVALID_VALUE, i) || this
          }
          return (0, o.__extends)(t, e), t
        }(i),
        a = function(e) {
          function t(t, n, o) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), r.INVALID_VALUE, o) || this
          }
          return (0, o.__extends)(t, e), t
        }(i),
        l = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), r.MISSING_VALUE, n) || this
          }
          return (0, o.__extends)(t, e), t
        }(i)
    },
    76824: (e, t, n) => {
      n.d(t, {
        RK: () => s,
        TT: () => r,
        hN: () => a
      });
      var r, o = n(35394),
        i = n(47965);

      function s(e) {
        return "function" == typeof e
      }

      function a(e, t, n, l, c, u, d) {
        if (1 === e.length && (0, o.eW)(e[0])) return [{
          type: r.literal,
          value: e[0].value
        }];
        for (var f = [], h = 0, p = e; h < p.length; h++) {
          var v = p[h];
          if ((0, o.eW)(v)) f.push({
            type: r.literal,
            value: v.value
          });
          else if ((0, o.jA)(v)) "number" == typeof u && f.push({
            type: r.literal,
            value: n.getNumberFormat(t).format(u)
          });
          else {
            var m = v.value;
            if (!c || !(m in c)) throw new i.Ei(m, d);
            var g = c[m];
            if ((0, o.Im)(v)) g && "string" != typeof g && "number" != typeof g || (g = "string" == typeof g || "number" == typeof g ? String(g) : ""), f.push({
              type: "string" == typeof g ? r.literal : r.object,
              value: g
            });
            else if ((0, o.tv)(v)) {
              var y = "string" == typeof v.style ? l.date[v.style] : (0, o.Tu)(v.style) ? v.style.parsedOptions : void 0;
              f.push({
                type: r.literal,
                value: n.getDateTimeFormat(t, y).format(g)
              })
            } else if ((0, o.Qh)(v)) y = "string" == typeof v.style ? l.time[v.style] : (0, o.Tu)(v.style) ? v.style.parsedOptions : l.time.medium, f.push({
              type: r.literal,
              value: n.getDateTimeFormat(t, y).format(g)
            });
            else if ((0, o.oF)(v))(y = "string" == typeof v.style ? l.number[v.style] : (0, o.N1)(v.style) ? v.style.parsedOptions : void 0) && y.scale && (g *= y.scale || 1), f.push({
              type: r.literal,
              value: n.getNumberFormat(t, y).format(g)
            });
            else {
              if ((0, o.xm)(v)) {
                var b = v.children,
                  E = v.value,
                  w = c[E];
                if (!s(w)) throw new i.Zo(E, "function", d);
                var T = w(a(b, t, n, l, c, u).map((function(e) {
                  return e.value
                })));
                Array.isArray(T) || (T = [T]), f.push.apply(f, T.map((function(e) {
                  return {
                    type: "string" == typeof e ? r.literal : r.object,
                    value: e
                  }
                })))
              }
              if ((0, o.Jp)(v)) {
                if (!(_ = v.options[g] || v.options.other)) throw new i.$x(v.value, g, Object.keys(v.options), d);
                f.push.apply(f, a(_.value, t, n, l, c))
              } else if ((0, o.N6)(v)) {
                var _;
                if (!(_ = v.options["=".concat(g)])) {
                  if (!Intl.PluralRules) throw new i.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', i.O4.MISSING_INTL_API, d);
                  var P = n.getPluralRules(t, {
                    type: v.pluralType
                  }).select(g - (v.offset || 0));
                  _ = v.options[P] || v.options.other
                }
                if (!_) throw new i.$x(v.value, g, Object.keys(v.options), d);
                f.push.apply(f, a(_.value, t, n, l, c, g - (v.offset || 0)))
              }
            }
          }
        }
        return (S = f).length < 2 ? S : S.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === r.literal && t.type === r.literal ? n.value += t.value : e.push(t), e
        }), []);
        var S
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(r || (r = {}))
    },
    35394: (e, t, n) => {
      n.d(t, {
        Im: () => l,
        tv: () => u,
        Tu: () => g,
        eW: () => a,
        oF: () => c,
        N1: () => m,
        N6: () => h,
        jA: () => p,
        Jp: () => f,
        xm: () => v,
        Qh: () => d,
        qg: () => ie
      });
      var r, o, i, s = n(91299);

      function a(e) {
        return e.type === o.literal
      }

      function l(e) {
        return e.type === o.argument
      }

      function c(e) {
        return e.type === o.number
      }

      function u(e) {
        return e.type === o.date
      }

      function d(e) {
        return e.type === o.time
      }

      function f(e) {
        return e.type === o.select
      }

      function h(e) {
        return e.type === o.plural
      }

      function p(e) {
        return e.type === o.pound
      }

      function v(e) {
        return e.type === o.tag
      }

      function m(e) {
        return !(!e || "object" != typeof e || e.type !== i.number)
      }

      function g(e) {
        return !(!e || "object" != typeof e || e.type !== i.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(r || (r = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(o || (o = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(i || (i = {}));
      var y = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        b = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function E(e) {
        var t = {};
        return e.replace(b, (function(e) {
          var n = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === n ? "2-digit" : "numeric";
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
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][n - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "e":
              if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "c":
              if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][n - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][n - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = n < 4 ? "short" : "long";
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
      var w = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        T = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        _ = /^(@+)?(\+|#+)?[rs]?$/g,
        P = /(\*)(0+)|(#+)(0+)|(0+)/g,
        S = /^(0+)$/;

      function C(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(_, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function L(e) {
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

      function x(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !S.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function A(e) {
        return L(e) || {}
      }

      function M(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var o = r[n];
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
              t = (0, s.__assign)((0, s.__assign)((0, s.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, s.__assign)((0, s.__assign)({}, e), A(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, s.__assign)((0, s.__assign)((0, s.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, s.__assign)((0, s.__assign)({}, e), A(t))
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
              o.options[0].replace(P, (function(e, n, r, o, i, s) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (S.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (T.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(T, (function(e, n, r, o, i, s) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && s ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + s.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, s.__assign)((0, s.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, s.__assign)((0, s.__assign)({}, t), C(i)))
          } else if (_.test(o.stem)) t = (0, s.__assign)((0, s.__assign)({}, t), C(o.stem));
          else {
            var a = L(o.stem);
            a && (t = (0, s.__assign)((0, s.__assign)({}, t), a));
            var l = x(o.stem);
            l && (t = (0, s.__assign)((0, s.__assign)({}, t), l))
          }
        }
        return t
      }
      var O, k = {
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

      function I(e) {
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
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (k[n || ""] || k[r || ""] || k["".concat(r, "-001")] || k["001"])[0]
      }
      var R = new RegExp("^".concat(y.source, "*")),
        H = new RegExp("".concat(y.source, "*$"));

      function N(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var D = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        B = !!String.fromCodePoint,
        F = !!Object.fromEntries,
        U = !!String.prototype.codePointAt,
        j = !!String.prototype.trimStart,
        K = !!String.prototype.trimEnd,
        V = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        G = !0;
      try {
        G = "a" === (null === (O = J("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === O ? void 0 : O[0])
      } catch (e) {
        G = !1
      }
      var W, X = D ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        z = B ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        $ = F ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        Y = U ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        q = j ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(R, "")
        },
        Z = K ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(H, "")
        };

      function J(e, t) {
        return new RegExp(e, t)
      }
      if (G) {
        var Q = J("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        W = function(e, t) {
          var n;
          return Q.lastIndex = t, null !== (n = Q.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else W = function(e, t) {
        for (var n = [];;) {
          var r = Y(e, t);
          if (void 0 === r || ne(r) || re(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return z.apply(void 0, n)
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
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var i = []; !this.isEOF();) {
            var s = this.char();
            if (123 === s) {
              if ((a = this.parseArgument(e, n)).err) return a;
              i.push(a.val)
            } else {
              if (125 === s && e > 0) break;
              if (35 !== s || "plural" !== t && "selectordinal" !== t) {
                if (60 === s && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(r.UNMATCHED_CLOSING_TAG, N(this.clonePosition(), this.clonePosition()))
                }
                if (60 === s && !this.ignoreTag && te(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  i.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  i.push(a.val)
                }
              } else {
                var l = this.clonePosition();
                this.bump(), i.push({
                  type: o.pound,
                  location: N(l, this.clonePosition())
                })
              }
            }
          }
          return {
            val: i,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var i = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: o.literal,
              value: "<".concat(i, "/>"),
              location: N(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var s = this.parseMessage(e + 1, t, !0);
            if (s.err) return s;
            var a = s.val,
              l = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !te(this.char())) return this.error(r.INVALID_TAG, N(l, this.clonePosition()));
              var c = this.clonePosition();
              return i !== this.parseTagName() ? this.error(r.UNMATCHED_CLOSING_TAG, N(c, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: o.tag,
                  value: i,
                  children: a,
                  location: N(n, this.clonePosition())
                },
                err: null
              } : this.error(r.INVALID_TAG, N(l, this.clonePosition())))
            }
            return this.error(r.UNCLOSED_TAG, N(n, this.clonePosition()))
          }
          return this.error(r.INVALID_TAG, N(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var i = this.tryParseQuote(t);
            if (i) r += i;
            else {
              var s = this.tryParseUnquoted(e, t);
              if (s) r += s;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                r += a
              }
            }
          }
          var l = N(n, this.clonePosition());
          return {
            val: {
              type: o.literal,
              value: r,
              location: l
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
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return z.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), z(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, N(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(r.EMPTY_ARGUMENT, N(n, this.clonePosition()));
          var i = this.parseIdentifierIfPossible().value;
          if (!i) return this.error(r.MALFORMED_ARGUMENT, N(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, N(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: o.argument,
                  value: i,
                  location: N(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, N(n, this.clonePosition())) : this.parseArgumentOptions(e, t, i, n);
            default:
              return this.error(r.MALFORMED_ARGUMENT, N(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = W(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: N(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, a) {
          var l, c = this.clonePosition(),
            u = this.parseIdentifierIfPossible().value,
            d = this.clonePosition();
          switch (u) {
            case "":
              return this.error(r.EXPECT_ARGUMENT_TYPE, N(c, d));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var f = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var h = this.clonePosition();
                if ((T = this.parseSimpleArgStyleIfPossible()).err) return T;
                if (0 === (g = Z(T.val)).length) return this.error(r.EXPECT_ARGUMENT_STYLE, N(this.clonePosition(), this.clonePosition()));
                f = {
                  style: g,
                  styleLocation: N(h, this.clonePosition())
                }
              }
              if ((_ = this.tryParseArgumentClose(a)).err) return _;
              var p = N(a, this.clonePosition());
              if (f && X(null == f ? void 0 : f.style, "::", 0)) {
                var v = q(f.style.slice(2));
                if ("number" === u) return (T = this.parseNumberSkeletonFromString(v, f.styleLocation)).err ? T : {
                  val: {
                    type: o.number,
                    value: n,
                    location: p,
                    style: T.val
                  },
                  err: null
                };
                if (0 === v.length) return this.error(r.EXPECT_DATE_TIME_SKELETON, p);
                var m = v;
                this.locale && (m = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = I(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) n += "a";
                      for (; s-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(v, this.locale));
                var g = {
                  type: i.dateTime,
                  pattern: m,
                  location: f.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? E(m) : {}
                };
                return {
                  val: {
                    type: "date" === u ? o.date : o.time,
                    value: n,
                    location: p,
                    style: g
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === u ? o.number : "date" === u ? o.date : o.time,
                  value: n,
                  location: p,
                  style: null !== (l = null == f ? void 0 : f.style) && void 0 !== l ? l : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var y = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(r.EXPECT_SELECT_ARGUMENT_OPTIONS, N(y, (0, s.__assign)({}, y)));
              this.bumpSpace();
              var b = this.parseIdentifierIfPossible(),
                w = 0;
              if ("select" !== u && "offset" === b.value) {
                if (!this.bumpIf(":")) return this.error(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, N(this.clonePosition(), this.clonePosition()));
                var T;
                if (this.bumpSpace(), (T = this.tryParseDecimalInteger(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return T;
                this.bumpSpace(), b = this.parseIdentifierIfPossible(), w = T.val
              }
              var _, P = this.tryParsePluralOrSelectOptions(e, u, t, b);
              if (P.err) return P;
              if ((_ = this.tryParseArgumentClose(a)).err) return _;
              var S = N(a, this.clonePosition());
              return "select" === u ? {
                val: {
                  type: o.select,
                  value: n,
                  options: $(P.val),
                  location: S
                },
                err: null
              } : {
                val: {
                  type: o.plural,
                  value: n,
                  options: $(P.val),
                  offset: w,
                  pluralType: "plural" === u ? "cardinal" : "ordinal",
                  location: S
                },
                err: null
              };
            default:
              return this.error(r.INVALID_ARGUMENT_TYPE, N(c, d))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, N(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, N(n, this.clonePosition()));
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
          var n = [];
          try {
            n = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], n = 0, r = e.split(w).filter((function(e) {
                  return e.length > 0
                })); n < r.length; n++) {
                var o = r[n].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var i = o[0], s = o.slice(1), a = 0, l = s; a < l.length; a++)
                  if (0 === l[a].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: i,
                  options: s
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(r.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: i.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? M(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, o) {
          for (var i, s = !1, a = [], l = new Set, c = o.value, u = o.location;;) {
            if (0 === c.length) {
              var d = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var f = this.tryParseDecimalInteger(r.EXPECT_PLURAL_ARGUMENT_SELECTOR, r.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (f.err) return f;
              u = N(d, this.clonePosition()), c = this.message.slice(d.offset, this.offset())
            }
            if (l.has(c)) return this.error("select" === t ? r.DUPLICATE_SELECT_ARGUMENT_SELECTOR : r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === c && (s = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, N(this.clonePosition(), this.clonePosition()));
            var p = this.parseMessage(e + 1, t, n);
            if (p.err) return p;
            var v = this.tryParseArgumentClose(h);
            if (v.err) return v;
            a.push([c, {
              value: p.val,
              location: N(h, this.clonePosition())
            }]), l.add(c), this.bumpSpace(), c = (i = this.parseIdentifierIfPossible()).value, u = i.location
          }
          return 0 === a.length ? this.error("select" === t ? r.EXPECT_SELECT_ARGUMENT_SELECTOR : r.EXPECT_PLURAL_ARGUMENT_SELECTOR, N(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(r.MISSING_OTHER_CLAUSE, N(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            o = !0, i = 10 * i + (s - 48), this.bump()
          }
          var a = N(r, this.clonePosition());
          return o ? V(i *= n) ? {
            val: i,
            err: null
          } : this.error(t, a) : this.error(e, a)
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
          var t = Y(this.message, e);
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
          if (X(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && ne(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function te(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function ne(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function re(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function oe(e) {
        e.forEach((function(e) {
          if (delete e.location, f(e) || h(e))
            for (var t in e.options) delete e.options[t].location, oe(e.options[t].value);
          else c(e) && m(e.style) || (u(e) || d(e)) && g(e.style) ? delete e.style.location : v(e) && oe(e.children)
        }))
      }

      function ie(e, t) {
        void 0 === t && (t = {}), t = (0, s.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new ee(e, t).parse();
        if (n.err) {
          var o = SyntaxError(r[n.err.kind]);
          throw o.location = n.err.location, o.originalMessage = n.err.message, o
        }
        return (null == t ? void 0 : t.captureLocation) || oe(n.val), n.val
      }
    },
    46688: (e, t, n) => {
      n.d(t, {
        Hb: () => _,
        vC: () => C
      });
      var r = n(62229),
        o = n(73855);

      function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, i.apply(this, arguments)
      }
      var s = ["shift", "alt", "meta", "mod", "ctrl"],
        a = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl"
        };

      function l(e) {
        return (a[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function c(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function u(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return l(e)
        }));
        return i({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !s.includes(e)
          })),
          description: n
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && h([l(e.key), l(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && p([l(e.key), l(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        d.clear()
      }));
      var d = new Set;

      function f(e) {
        return Array.isArray(e)
      }

      function h(e) {
        var t = Array.isArray(e) ? e : [e];
        d.has("meta") && d.forEach((function(e) {
          return ! function(e) {
            return s.includes(e)
          }(e) && d.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return d.add(e.toLowerCase())
        }))
      }

      function p(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? d.clear() : t.forEach((function(e) {
          return d.delete(e.toLowerCase())
        }))
      }

      function v(e, t) {
        var n = e.target;
        void 0 === t && (t = !1);
        var r = n && n.tagName;
        return f(t) ? Boolean(r && t && t.some((function(e) {
          return e.toLowerCase() === r.toLowerCase()
        }))) : Boolean(r && t && !0 === t)
      }
      var m = function(e, t, n) {
          void 0 === n && (n = !1);
          var r, o, i = t.alt,
            s = t.meta,
            a = t.mod,
            c = t.shift,
            u = t.ctrl,
            h = t.keys,
            p = e.key,
            v = e.code,
            m = e.ctrlKey,
            g = e.metaKey,
            y = e.shiftKey,
            b = e.altKey,
            E = l(v),
            w = p.toLowerCase();
          if (!(null != h && h.includes(E) || null != h && h.includes(w) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(E))) return !1;
          if (!n) {
            if (i === !b && "alt" !== w) return !1;
            if (c === !y && "shift" !== w) return !1;
            if (a) {
              if (!g && !m) return !1
            } else {
              if (s === !g && "meta" !== w && "os" !== w) return !1;
              if (u === !m && "ctrl" !== w && "control" !== w) return !1
            }
          }
          return !(!h || 1 !== h.length || !h.includes(w) && !h.includes(E)) || (h ? (void 0 === o && (o = ","), (f(r = h) ? r : r.split(o)).every((function(e) {
            return d.has(e.trim().toLowerCase())
          }))) : !h)
        },
        g = (0, r.createContext)(void 0),
        y = function() {
          return (0, r.useContext)(g)
        };

      function b(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, o.jsx)(g.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function E(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && E(e[r], t[r])
        }), !0) : e === t
      }
      var w = (0, r.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        T = function() {
          return (0, r.useContext)(w)
        },
        _ = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            i = e.children,
            s = (0, r.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            a = s[0],
            l = s[1],
            c = (0, r.useState)([]),
            u = c[0],
            d = c[1],
            f = (0, r.useCallback)((function(e) {
              l((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            h = (0, r.useCallback)((function(e) {
              l((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            p = (0, r.useCallback)((function(e) {
              l((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            v = (0, r.useCallback)((function(e) {
              d((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            m = (0, r.useCallback)((function(e) {
              d((function(t) {
                return t.filter((function(t) {
                  return !E(t, e)
                }))
              }))
            }), []);
          return (0, o.jsx)(w.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: u,
              enableScope: f,
              disableScope: h,
              toggleScope: p
            },
            children: (0, o.jsx)(b, {
              addHotkey: v,
              removeHotkey: m,
              children: i
            })
          })
        },
        P = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        S = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;

      function C(e, t, n, o) {
        var i = (0, r.useRef)(null),
          s = (0, r.useRef)(!1),
          a = n instanceof Array ? o instanceof Array ? void 0 : o : n,
          d = f(e) ? e.join(null == a ? void 0 : a.splitKey) : e,
          g = n instanceof Array ? n : o instanceof Array ? o : void 0,
          b = (0, r.useCallback)(t, null != g ? g : []),
          w = (0, r.useRef)(b);
        w.current = g ? b : t;
        var _ = function(e) {
            var t = (0, r.useRef)(void 0);
            return E(t.current, e) || (t.current = e), t.current
          }(a),
          C = T().enabledScopes,
          L = y();
        return S((function() {
          if (!1 !== (null == _ ? void 0 : _.enabled) && (e = C, t = null == _ ? void 0 : _.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !v(e, ["input", "textarea", "select"]) || v(e, null == _ ? void 0 : _.enableOnFormTags)) {
                  if (null !== i.current) {
                    var r = i.current.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i.current && !i.current.contains(r.activeElement)) return void P(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != _ && _.enableOnContentEditable) && c(d, null == _ ? void 0 : _.splitKey).forEach((function(n) {
                    var r, o = u(n, null == _ ? void 0 : _.combinationKey);
                    if (m(e, o, null == _ ? void 0 : _.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != _ && null != _.ignoreEventWhen && _.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == _ ? void 0 : _.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == _ ? void 0 : _.enabled)) return void P(e);
                      w.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (h(l(e.code)), (void 0 === (null == _ ? void 0 : _.keydown) && !0 !== (null == _ ? void 0 : _.keyup) || null != _ && _.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (p(l(e.code)), s.current = !1, null != _ && _.keyup && n(e, !0))
              },
              f = i.current || (null == a ? void 0 : a.document) || document;
            return f.addEventListener("keyup", o), f.addEventListener("keydown", r), L && c(d, null == _ ? void 0 : _.splitKey).forEach((function(e) {
                return L.addHotkey(u(e, null == _ ? void 0 : _.combinationKey, null == _ ? void 0 : _.description))
              })),
              function() {
                f.removeEventListener("keyup", o), f.removeEventListener("keydown", r), L && c(d, null == _ ? void 0 : _.splitKey).forEach((function(e) {
                  return L.removeHotkey(u(e, null == _ ? void 0 : _.combinationKey, null == _ ? void 0 : _.description))
                }))
              }
          }
        }), [d, _, C]), i
      }
    },
    55752: (e, t, n) => {
      n.d(t, {
        A: () => I
      });
      var r = n(91299),
        o = n(62229),
        i = "right-scroll-bar-position",
        s = "width-before-scroll-bar";
      var a = (0, n(2788).f)(),
        l = function() {},
        c = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            i = o.useState({
              onScrollCapture: l,
              onWheelCapture: l,
              onTouchMoveCapture: l
            }),
            s = i[0],
            c = i[1],
            u = e.forwardProps,
            d = e.children,
            f = e.className,
            h = e.removeScrollBar,
            p = e.enabled,
            v = e.shards,
            m = e.sideCar,
            g = e.noIsolation,
            y = e.inert,
            b = e.allowPinchZoom,
            E = e.as,
            w = void 0 === E ? "div" : E,
            T = e.gapMode,
            _ = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            P = m,
            S = function(e, t) {
              return n = t || null, r = function(t) {
                return e.forEach((function(e) {
                  return function(e, t) {
                    return "function" == typeof e ? e(t) : e && (e.current = t), e
                  }(e, t)
                }))
              }, (i = (0, o.useState)((function() {
                return {
                  value: n,
                  callback: r,
                  facade: {
                    get current() {
                      return i.value
                    },
                    set current(e) {
                      var t = i.value;
                      t !== e && (i.value = e, i.callback(e, t))
                    }
                  }
                }
              }))[0]).callback = r, i.facade;
              var n, r, i
            }([n, t]),
            C = (0, r.__assign)((0, r.__assign)({}, _), s);
          return o.createElement(o.Fragment, null, p && o.createElement(P, {
            sideCar: a,
            removeScrollBar: h,
            shards: v,
            noIsolation: g,
            inert: y,
            setCallbacks: c,
            allowPinchZoom: !!b,
            lockRef: n,
            gapMode: T
          }), u ? o.cloneElement(o.Children.only(d), (0, r.__assign)((0, r.__assign)({}, C), {
            ref: S
          })) : o.createElement(w, (0, r.__assign)({}, C, {
            className: f,
            ref: S
          }), d))
        }));
      c.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, c.classNames = {
        fullWidth: s,
        zeroRight: i
      };
      var u = n(91116),
        d = n(33758),
        f = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        h = function(e) {
          return parseInt(e || "", 10) || 0
        },
        p = (0, d.T0)(),
        v = function(e, t, n, r) {
          var o = e.left,
            a = e.top,
            l = e.right,
            c = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(c, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(i, " {\n    right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(s, " {\n    margin-right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(s, " .").concat(s, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(c, "px;\n  }\n")
        },
        m = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            i = void 0 === r ? "margin" : r,
            s = o.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return f;
                var t = function(e) {
                    var t = window.getComputedStyle(document.body),
                      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = t["padding" === e ? "paddingTop" : "marginTop"],
                      o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [h(n), h(r), h(o)]
                  }(e),
                  n = document.documentElement.clientWidth,
                  r = window.innerWidth;
                return {
                  left: t[0],
                  top: t[1],
                  right: t[2],
                  gap: Math.max(0, r - n + t[2] - t[0])
                }
              }(i)
            }), [i]);
          return o.createElement(p, {
            styles: v(s, !t, i, n ? "" : "!important")
          })
        },
        g = !1;
      if ("undefined" != typeof window) try {
        var y = Object.defineProperty({}, "passive", {
          get: function() {
            return g = !0, !0
          }
        });
        window.addEventListener("test", y, y), window.removeEventListener("test", y, y)
      } catch (e) {
        g = !1
      }
      var b = !!g && {
          passive: !1
        },
        E = function(e, t) {
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        w = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), T(e, r)) {
              var o = _(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        T = function(e, t) {
          return "v" === e ? function(e) {
            return E(e, "overflowY")
          }(t) : function(e) {
            return E(e, "overflowX")
          }(t)
        },
        _ = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        P = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        S = function(e) {
          return [e.deltaX, e.deltaY]
        },
        C = function(e) {
          return e && "current" in e ? e.current : e
        },
        L = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        x = 0,
        A = [];

      function M(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const O = (0, u.m)(a, (function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          i = o.useRef(),
          s = o.useState(x++)[0],
          a = o.useState(d.T0)[0],
          l = o.useRef(e);
        o.useEffect((function() {
          l.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(s));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(C), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(s))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(s)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(s))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var c = o.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length) return !l.current.allowPinchZoom;
            var r, o = P(e),
              s = n.current,
              a = "deltaX" in e ? e.deltaX : s[0] - o[0],
              c = "deltaY" in e ? e.deltaY : s[1] - o[1],
              u = e.target,
              d = Math.abs(a) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === u.type) return !1;
            var f = w(d, u);
            if (!f) return !0;
            if (f ? r = d : (r = "v" === d ? "h" : "v", f = w(d, u)), !f) return !1;
            if (!i.current && "changedTouches" in e && (a || c) && (i.current = r), !r) return !0;
            var h = i.current || r;
            return function(e, t, n, r, o) {
              var i = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                s = i * r,
                a = n.target,
                l = t.contains(a),
                c = !1,
                u = s > 0,
                d = 0,
                f = 0;
              do {
                var h = _(e, a),
                  p = h[0],
                  v = h[1] - h[2] - i * p;
                (p || v) && T(e, a) && (d += v, f += p), a = a instanceof ShadowRoot ? a.host : a.parentNode
              } while (!l && a !== document.body || l && (t.contains(a) || t === a));
              return (u && (Math.abs(d) < 1 || !1) || !u && (Math.abs(f) < 1 || !1)) && (c = !0), c
            }(h, t, e, "h" === h ? a : c)
          }), []),
          u = o.useCallback((function(e) {
            var n = e;
            if (A.length && A[A.length - 1] === a) {
              var r = "deltaY" in n ? S(n) : P(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var i = (l.current.shards || []).map(C).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (i.length > 0 ? c(n, i[0]) : !l.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          f = o.useCallback((function(e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: M(r)
            };
            t.current.push(i), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== i
              }))
            }), 1)
          }), []),
          h = o.useCallback((function(e) {
            n.current = P(e), i.current = void 0
          }), []),
          p = o.useCallback((function(t) {
            f(t.type, S(t), t.target, c(t, e.lockRef.current))
          }), []),
          v = o.useCallback((function(t) {
            f(t.type, P(t), t.target, c(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return A.push(a), e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: v
            }), document.addEventListener("wheel", u, b), document.addEventListener("touchmove", u, b), document.addEventListener("touchstart", h, b),
            function() {
              A = A.filter((function(e) {
                return e !== a
              })), document.removeEventListener("wheel", u, b), document.removeEventListener("touchmove", u, b), document.removeEventListener("touchstart", h, b)
            }
        }), []);
        var g = e.removeScrollBar,
          y = e.inert;
        return o.createElement(o.Fragment, null, y ? o.createElement(a, {
          styles: L(s)
        }) : null, g ? o.createElement(m, {
          gapMode: e.gapMode
        }) : null)
      }));
      var k = o.forwardRef((function(e, t) {
        return o.createElement(c, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: O
        }))
      }));
      k.classNames = c.classNames;
      const I = k
    },
    18001: (e, t, n) => {
      n.d(t, {
        BN: () => h,
        ER: () => p,
        Ej: () => v,
        UE: () => a,
        UU: () => l,
        cY: () => f,
        jD: () => d,
        rD: () => i
      });
      var r = n(90969);

      function o(e, t, n) {
        let {
          reference: o,
          floating: i
        } = e;
        const s = (0, r.TV)(t),
          a = (0, r.Dz)(t),
          l = (0, r.sq)(a),
          c = (0, r.C0)(t),
          u = "y" === s,
          d = o.x + o.width / 2 - i.width / 2,
          f = o.y + o.height / 2 - i.height / 2,
          h = o[l] / 2 - i[l] / 2;
        let p;
        switch (c) {
          case "top":
            p = {
              x: d,
              y: o.y - i.height
            };
            break;
          case "bottom":
            p = {
              x: d,
              y: o.y + o.height
            };
            break;
          case "right":
            p = {
              x: o.x + o.width,
              y: f
            };
            break;
          case "left":
            p = {
              x: o.x - i.width,
              y: f
            };
            break;
          default:
            p = {
              x: o.x,
              y: o.y
            }
        }
        switch ((0, r.Sg)(t)) {
          case "start":
            p[a] -= h * (n && u ? -1 : 1);
            break;
          case "end":
            p[a] += h * (n && u ? -1 : 1)
        }
        return p
      }
      const i = async (e, t, n) => {
        const {
          placement: r = "bottom",
          strategy: i = "absolute",
          middleware: s = [],
          platform: a
        } = n, l = s.filter(Boolean), c = await (null == a.isRTL ? void 0 : a.isRTL(t));
        let u = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: i
          }),
          {
            x: d,
            y: f
          } = o(u, r, c),
          h = r,
          p = {},
          v = 0;
        for (let n = 0; n < l.length; n++) {
          const {
            name: s,
            fn: m
          } = l[n], {
            x: g,
            y,
            data: b,
            reset: E
          } = await m({
            x: d,
            y: f,
            initialPlacement: r,
            placement: h,
            strategy: i,
            middlewareData: p,
            rects: u,
            platform: a,
            elements: {
              reference: e,
              floating: t
            }
          });
          d = null != g ? g : d, f = null != y ? y : f, p = {
            ...p,
            [s]: {
              ...p[s],
              ...b
            }
          }, E && v <= 50 && (v++, "object" == typeof E && (E.placement && (h = E.placement), E.rects && (u = !0 === E.rects ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: i
          }) : E.rects), ({
            x: d,
            y: f
          } = o(u, h, c))), n = -1)
        }
        return {
          x: d,
          y: f,
          placement: h,
          strategy: i,
          middlewareData: p
        }
      };
      async function s(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: o,
          y: i,
          platform: s,
          rects: a,
          elements: l,
          strategy: c
        } = e, {
          boundary: u = "clippingAncestors",
          rootBoundary: d = "viewport",
          elementContext: f = "floating",
          altBoundary: h = !1,
          padding: p = 0
        } = (0, r._3)(t, e), v = (0, r.nI)(p), m = l[h ? "floating" === f ? "reference" : "floating" : f], g = (0, r.B1)(await s.getClippingRect({
          element: null == (n = await (null == s.isElement ? void 0 : s.isElement(m))) || n ? m : m.contextElement || await (null == s.getDocumentElement ? void 0 : s.getDocumentElement(l.floating)),
          boundary: u,
          rootBoundary: d,
          strategy: c
        })), y = "floating" === f ? {
          ...a.floating,
          x: o,
          y: i
        } : a.reference, b = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(l.floating)), E = await (null == s.isElement ? void 0 : s.isElement(b)) && await (null == s.getScale ? void 0 : s.getScale(b)) || {
          x: 1,
          y: 1
        }, w = (0, r.B1)(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: y,
          offsetParent: b,
          strategy: c
        }) : y);
        return {
          top: (g.top - w.top + v.top) / E.y,
          bottom: (w.bottom - g.bottom + v.bottom) / E.y,
          left: (g.left - w.left + v.left) / E.x,
          right: (w.right - g.right + v.right) / E.x
        }
      }
      const a = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: o,
              placement: i,
              rects: s,
              platform: a,
              elements: l,
              middlewareData: c
            } = t, {
              element: u,
              padding: d = 0
            } = (0, r._3)(e, t) || {};
            if (null == u) return {};
            const f = (0, r.nI)(d),
              h = {
                x: n,
                y: o
              },
              p = (0, r.Dz)(i),
              v = (0, r.sq)(p),
              m = await a.getDimensions(u),
              g = "y" === p,
              y = g ? "top" : "left",
              b = g ? "bottom" : "right",
              E = g ? "clientHeight" : "clientWidth",
              w = s.reference[v] + s.reference[p] - h[p] - s.floating[v],
              T = h[p] - s.reference[p],
              _ = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(u));
            let P = _ ? _[E] : 0;
            P && await (null == a.isElement ? void 0 : a.isElement(_)) || (P = l.floating[E] || s.floating[v]);
            const S = w / 2 - T / 2,
              C = P / 2 - m[v] / 2 - 1,
              L = (0, r.jk)(f[y], C),
              x = (0, r.jk)(f[b], C),
              A = L,
              M = P - m[v] - x,
              O = P / 2 - m[v] / 2 + S,
              k = (0, r.qE)(A, O, M),
              I = !c.arrow && null != (0, r.Sg)(i) && O != k && s.reference[v] / 2 - (O < A ? L : x) - m[v] / 2 < 0,
              R = I ? O < A ? O - A : O - M : 0;
            return {
              [p]: h[p] + R,
              data: {
                [p]: k,
                centerOffset: O - k - R,
                ...I && {
                  alignmentOffset: R
                }
              },
              reset: I
            }
          }
        }),
        l = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, o;
              const {
                placement: i,
                middlewareData: a,
                rects: l,
                initialPlacement: c,
                platform: u,
                elements: d
              } = t, {
                mainAxis: f = !0,
                crossAxis: h = !0,
                fallbackPlacements: p,
                fallbackStrategy: v = "bestFit",
                fallbackAxisSideDirection: m = "none",
                flipAlignment: g = !0,
                ...y
              } = (0, r._3)(e, t);
              if (null != (n = a.arrow) && n.alignmentOffset) return {};
              const b = (0, r.C0)(i),
                E = (0, r.C0)(c) === c,
                w = await (null == u.isRTL ? void 0 : u.isRTL(d.floating)),
                T = p || (E || !g ? [(0, r.bV)(c)] : (0, r.WJ)(c));
              p || "none" === m || T.push(...(0, r.lP)(c, g, m, w));
              const _ = [c, ...T],
                P = await s(t, y),
                S = [];
              let C = (null == (o = a.flip) ? void 0 : o.overflows) || [];
              if (f && S.push(P[b]), h) {
                const e = (0, r.w7)(i, l, w);
                S.push(P[e[0]], P[e[1]])
              }
              if (C = [...C, {
                  placement: i,
                  overflows: S
                }], !S.every((e => e <= 0))) {
                var L, x;
                const e = ((null == (L = a.flip) ? void 0 : L.index) || 0) + 1,
                  t = _[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: C
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (x = C.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : x.placement;
                if (!n) switch (v) {
                  case "bestFit": {
                    var A;
                    const e = null == (A = C.map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : A[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = c
                }
                if (i !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        };

      function c(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function u(e) {
        return r.r_.some((t => e[t] >= 0))
      }
      const d = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: o = "referenceHidden",
                ...i
              } = (0, r._3)(e, t);
              switch (o) {
                case "referenceHidden": {
                  const e = c(await s(t, {
                    ...i,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: u(e)
                    }
                  }
                }
                case "escaped": {
                  const e = c(await s(t, {
                    ...i,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: u(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        f = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              const {
                x: n,
                y: o
              } = t, i = await async function(e, t) {
                const {
                  placement: n,
                  platform: o,
                  elements: i
                } = e, s = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), a = (0, r.C0)(n), l = (0, r.Sg)(n), c = "y" === (0, r.TV)(n), u = ["left", "top"].includes(a) ? -1 : 1, d = s && c ? -1 : 1, f = (0, r._3)(t, e);
                let {
                  mainAxis: h,
                  crossAxis: p,
                  alignmentAxis: v
                } = "number" == typeof f ? {
                  mainAxis: f,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  alignmentAxis: null,
                  ...f
                };
                return l && "number" == typeof v && (p = "end" === l ? -1 * v : v), c ? {
                  x: p * d,
                  y: h * u
                } : {
                  x: h * u,
                  y: p * d
                }
              }(t, e);
              return {
                x: n + i.x,
                y: o + i.y,
                data: i
              }
            }
          }
        },
        h = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: n,
                y: o,
                placement: i
              } = t, {
                mainAxis: a = !0,
                crossAxis: l = !1,
                limiter: c = {
                  fn: e => {
                    let {
                      x: t,
                      y: n
                    } = e;
                    return {
                      x: t,
                      y: n
                    }
                  }
                },
                ...u
              } = (0, r._3)(e, t), d = {
                x: n,
                y: o
              }, f = await s(t, u), h = (0, r.TV)((0, r.C0)(i)), p = (0, r.PG)(h);
              let v = d[p],
                m = d[h];
              if (a) {
                const e = "y" === p ? "bottom" : "right",
                  t = v + f["y" === p ? "top" : "left"],
                  n = v - f[e];
                v = (0, r.qE)(t, v, n)
              }
              if (l) {
                const e = "y" === h ? "bottom" : "right",
                  t = m + f["y" === h ? "top" : "left"],
                  n = m - f[e];
                m = (0, r.qE)(t, m, n)
              }
              const g = c.fn({
                ...t,
                [p]: v,
                [h]: m
              });
              return {
                ...g,
                data: {
                  x: g.x - n,
                  y: g.y - o
                }
              }
            }
          }
        },
        p = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: o,
                placement: i,
                rects: s,
                middlewareData: a
              } = t, {
                offset: l = 0,
                mainAxis: c = !0,
                crossAxis: u = !0
              } = (0, r._3)(e, t), d = {
                x: n,
                y: o
              }, f = (0, r.TV)(i), h = (0, r.PG)(f);
              let p = d[h],
                v = d[f];
              const m = (0, r._3)(l, t),
                g = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...m
                };
              if (c) {
                const e = "y" === h ? "height" : "width",
                  t = s.reference[h] - s.floating[e] + g.mainAxis,
                  n = s.reference[h] + s.reference[e] - g.mainAxis;
                p < t ? p = t : p > n && (p = n)
              }
              if (u) {
                var y, b;
                const e = "y" === h ? "width" : "height",
                  t = ["top", "left"].includes((0, r.C0)(i)),
                  n = s.reference[f] - s.floating[e] + (t && (null == (y = a.offset) ? void 0 : y[f]) || 0) + (t ? 0 : g.crossAxis),
                  o = s.reference[f] + s.reference[e] + (t ? 0 : (null == (b = a.offset) ? void 0 : b[f]) || 0) - (t ? g.crossAxis : 0);
                v < n ? v = n : v > o && (v = o)
              }
              return {
                [h]: p,
                [f]: v
              }
            }
          }
        },
        v = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              const {
                placement: n,
                rects: o,
                platform: i,
                elements: a
              } = t, {
                apply: l = (() => {}),
                ...c
              } = (0, r._3)(e, t), u = await s(t, c), d = (0, r.C0)(n), f = (0, r.Sg)(n), h = "y" === (0, r.TV)(n), {
                width: p,
                height: v
              } = o.floating;
              let m, g;
              "top" === d || "bottom" === d ? (m = d, g = f === (await (null == i.isRTL ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = d, m = "end" === f ? "top" : "bottom");
              const y = v - u[m],
                b = p - u[g],
                E = !t.middlewareData.shift;
              let w = y,
                T = b;
              if (h) {
                const e = p - u.left - u.right;
                T = f || E ? (0, r.jk)(b, e) : e
              } else {
                const e = v - u.top - u.bottom;
                w = f || E ? (0, r.jk)(y, e) : e
              }
              if (E && !f) {
                const e = (0, r.T9)(u.left, 0),
                  t = (0, r.T9)(u.right, 0),
                  n = (0, r.T9)(u.top, 0),
                  o = (0, r.T9)(u.bottom, 0);
                h ? T = p - 2 * (0 !== e || 0 !== t ? e + t : (0, r.T9)(u.left, u.right)) : w = v - 2 * (0 !== n || 0 !== o ? n + o : (0, r.T9)(u.top, u.bottom))
              }
              await l({
                ...t,
                availableWidth: T,
                availableHeight: w
              });
              const _ = await i.getDimensions(a.floating);
              return p !== _.width || v !== _.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        }
    },
    77102: (e, t, n) => {
      n.d(t, {
        ll: () => H,
        rD: () => N
      });
      var r = n(90969),
        o = n(18001);

      function i(e) {
        return l(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function s(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function a(e) {
        var t;
        return null == (t = (l(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function l(e) {
        return e instanceof Node || e instanceof s(e).Node
      }

      function c(e) {
        return e instanceof Element || e instanceof s(e).Element
      }

      function u(e) {
        return e instanceof HTMLElement || e instanceof s(e).HTMLElement
      }

      function d(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof s(e).ShadowRoot)
      }

      function f(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = g(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }

      function h(e) {
        return ["table", "td", "th"].includes(i(e))
      }

      function p(e) {
        const t = v(),
          n = g(e);
        return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }

      function v() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function m(e) {
        return ["html", "body", "#document"].includes(i(e))
      }

      function g(e) {
        return s(e).getComputedStyle(e)
      }

      function y(e) {
        return c(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        }
      }

      function b(e) {
        if ("html" === i(e)) return e;
        const t = e.assignedSlot || e.parentNode || d(e) && e.host || a(e);
        return d(t) ? t.host : t
      }

      function E(e) {
        const t = b(e);
        return m(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : u(t) && f(t) ? t : E(t)
      }

      function w(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = E(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = s(o);
        return i ? t.concat(a, a.visualViewport || [], f(o) ? o : [], a.frameElement && n ? w(a.frameElement) : []) : t.concat(o, w(o, [], n))
      }

      function T(e) {
        const t = g(e);
        let n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0;
        const i = u(e),
          s = i ? e.offsetWidth : n,
          a = i ? e.offsetHeight : o,
          l = (0, r.LI)(n) !== s || (0, r.LI)(o) !== a;
        return l && (n = s, o = a), {
          width: n,
          height: o,
          $: l
        }
      }

      function _(e) {
        return c(e) ? e : e.contextElement
      }

      function P(e) {
        const t = _(e);
        if (!u(t)) return (0, r.Jx)(1);
        const n = t.getBoundingClientRect(),
          {
            width: o,
            height: i,
            $: s
          } = T(t);
        let a = (s ? (0, r.LI)(n.width) : n.width) / o,
          l = (s ? (0, r.LI)(n.height) : n.height) / i;
        return a && Number.isFinite(a) || (a = 1), l && Number.isFinite(l) || (l = 1), {
          x: a,
          y: l
        }
      }
      const S = (0, r.Jx)(0);

      function C(e) {
        const t = s(e);
        return v() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : S
      }

      function L(e, t, n, o) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const i = e.getBoundingClientRect(),
          a = _(e);
        let l = (0, r.Jx)(1);
        t && (o ? c(o) && (l = P(o)) : l = P(e));
        const u = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== s(e)) && t
        }(a, n, o) ? C(a) : (0, r.Jx)(0);
        let d = (i.left + u.x) / l.x,
          f = (i.top + u.y) / l.y,
          h = i.width / l.x,
          p = i.height / l.y;
        if (a) {
          const e = s(a),
            t = o && c(o) ? s(o) : o;
          let n = e.frameElement;
          for (; n && o && t !== e;) {
            const e = P(n),
              t = n.getBoundingClientRect(),
              r = g(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            d *= e.x, f *= e.y, h *= e.x, p *= e.y, d += o, f += i, n = s(n).frameElement
          }
        }
        return (0, r.B1)({
          width: h,
          height: p,
          x: d,
          y: f
        })
      }

      function x(e) {
        return L(a(e)).left + y(e).scrollLeft
      }

      function A(e, t, n) {
        let o;
        if ("viewport" === t) o = function(e, t) {
          const n = s(e),
            r = a(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            l = r.clientHeight,
            c = 0,
            u = 0;
          if (o) {
            i = o.width, l = o.height;
            const e = v();
            (!e || e && "fixed" === t) && (c = o.offsetLeft, u = o.offsetTop)
          }
          return {
            width: i,
            height: l,
            x: c,
            y: u
          }
        }(e, n);
        else if ("document" === t) o = function(e) {
          const t = a(e),
            n = y(e),
            o = e.ownerDocument.body,
            i = (0, r.T9)(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
            s = (0, r.T9)(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
          let l = -n.scrollLeft + x(e);
          const c = -n.scrollTop;
          return "rtl" === g(o).direction && (l += (0, r.T9)(t.clientWidth, o.clientWidth) - i), {
            width: i,
            height: s,
            x: l,
            y: c
          }
        }(a(e));
        else if (c(t)) o = function(e, t) {
          const n = L(e, !0, "fixed" === t),
            o = n.top + e.clientTop,
            i = n.left + e.clientLeft,
            s = u(e) ? P(e) : (0, r.Jx)(1);
          return {
            width: e.clientWidth * s.x,
            height: e.clientHeight * s.y,
            x: i * s.x,
            y: o * s.y
          }
        }(t, n);
        else {
          const n = C(e);
          o = {
            ...t,
            x: t.x - n.x,
            y: t.y - n.y
          }
        }
        return (0, r.B1)(o)
      }

      function M(e, t) {
        const n = b(e);
        return !(n === t || !c(n) || m(n)) && ("fixed" === g(n).position || M(n, t))
      }

      function O(e, t, n) {
        const o = u(t),
          s = a(t),
          l = "fixed" === n,
          c = L(e, !0, l, t);
        let d = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const h = (0, r.Jx)(0);
        if (o || !o && !l)
          if (("body" !== i(t) || f(s)) && (d = y(t)), o) {
            const e = L(t, !0, l, t);
            h.x = e.x + t.clientLeft, h.y = e.y + t.clientTop
          } else s && (h.x = x(s));
        return {
          x: c.left + d.scrollLeft - h.x,
          y: c.top + d.scrollTop - h.y,
          width: c.width,
          height: c.height
        }
      }

      function k(e, t) {
        return u(e) && "fixed" !== g(e).position ? t ? t(e) : e.offsetParent : null
      }

      function I(e, t) {
        const n = s(e);
        if (!u(e)) return n;
        let r = k(e, t);
        for (; r && h(r) && "static" === g(r).position;) r = k(r, t);
        return r && ("html" === i(r) || "body" === i(r) && "static" === g(r).position && !p(r)) ? n : r || function(e) {
          let t = b(e);
          for (; u(t) && !m(t);) {
            if (p(t)) return t;
            t = b(t)
          }
          return null
        }(e) || n
      }
      const R = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            rect: t,
            offsetParent: n,
            strategy: o
          } = e;
          const s = u(n),
            l = a(n);
          if (n === l) return t;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            d = (0, r.Jx)(1);
          const h = (0, r.Jx)(0);
          if ((s || !s && "fixed" !== o) && (("body" !== i(n) || f(l)) && (c = y(n)), u(n))) {
            const e = L(n);
            d = P(n), h.x = e.x + n.clientLeft, h.y = e.y + n.clientTop
          }
          return {
            width: t.width * d.x,
            height: t.height * d.y,
            x: t.x * d.x - c.scrollLeft * d.x + h.x,
            y: t.y * d.y - c.scrollTop * d.y + h.y
          }
        },
        getDocumentElement: a,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: o,
            strategy: s
          } = e;
          const a = [..."clippingAncestors" === n ? function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = w(e, [], !1).filter((e => c(e) && "body" !== i(e))),
                o = null;
              const s = "fixed" === g(e).position;
              let a = s ? b(e) : e;
              for (; c(a) && !m(a);) {
                const t = g(a),
                  n = p(a);
                n || "fixed" !== t.position || (o = null), (s ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || f(a) && !n && M(e, a)) ? r = r.filter((e => e !== a)) : o = t, a = b(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), o],
            l = a[0],
            u = a.reduce(((e, n) => {
              const o = A(t, n, s);
              return e.top = (0, r.T9)(o.top, e.top), e.right = (0, r.jk)(o.right, e.right), e.bottom = (0, r.jk)(o.bottom, e.bottom), e.left = (0, r.T9)(o.left, e.left), e
            }), A(t, l, s));
          return {
            width: u.right - u.left,
            height: u.bottom - u.top,
            x: u.left,
            y: u.top
          }
        },
        getOffsetParent: I,
        getElementRects: async function(e) {
          let {
            reference: t,
            floating: n,
            strategy: r
          } = e;
          const o = this.getOffsetParent || I,
            i = this.getDimensions;
          return {
            reference: O(t, await o(n), r),
            floating: {
              x: 0,
              y: 0,
              ...await i(n)
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          return T(e)
        },
        getScale: P,
        isElement: c,
        isRTL: function(e) {
          return "rtl" === g(e).direction
        }
      };

      function H(e, t, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: i = !0,
          ancestorResize: s = !0,
          elementResize: l = "function" == typeof ResizeObserver,
          layoutShift: c = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = _(e), f = i || s ? [...d ? w(d) : [], ...w(t)] : [];
        f.forEach((e => {
          i && e.addEventListener("scroll", n, {
            passive: !0
          }), s && e.addEventListener("resize", n)
        }));
        const h = d && c ? function(e, t) {
          let n, o = null;
          const i = a(e);

          function s() {
            clearTimeout(n), o && o.disconnect(), o = null
          }
          return function a(l, c) {
            void 0 === l && (l = !1), void 0 === c && (c = 1), s();
            const {
              left: u,
              top: d,
              width: f,
              height: h
            } = e.getBoundingClientRect();
            if (l || t(), !f || !h) return;
            const p = {
              rootMargin: -(0, r.RI)(d) + "px " + -(0, r.RI)(i.clientWidth - (u + f)) + "px " + -(0, r.RI)(i.clientHeight - (d + h)) + "px " + -(0, r.RI)(u) + "px",
              threshold: (0, r.T9)(0, (0, r.jk)(1, c)) || 1
            };
            let v = !0;

            function m(e) {
              const t = e[0].intersectionRatio;
              if (t !== c) {
                if (!v) return a();
                t ? a(!1, t) : n = setTimeout((() => {
                  a(!1, 1e-7)
                }), 100)
              }
              v = !1
            }
            try {
              o = new IntersectionObserver(m, {
                ...p,
                root: i.ownerDocument
              })
            } catch (e) {
              o = new IntersectionObserver(m, p)
            }
            o.observe(e)
          }(!0), s
        }(d, n) : null;
        let p, v = -1,
          m = null;
        l && (m = new ResizeObserver((e => {
          let [r] = e;
          r && r.target === d && m && (m.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame((() => {
            m && m.observe(t)
          }))), n()
        })), d && !u && m.observe(d), m.observe(t));
        let g = u ? L(e) : null;
        return u && function t() {
          const r = L(e);
          !g || r.x === g.x && r.y === g.y && r.width === g.width && r.height === g.height || n(), g = r, p = requestAnimationFrame(t)
        }(), n(), () => {
          f.forEach((e => {
            i && e.removeEventListener("scroll", n), s && e.removeEventListener("resize", n)
          })), h && h(), m && m.disconnect(), m = null, u && cancelAnimationFrame(p)
        }
      }
      const N = (e, t, n) => {
        const r = new Map,
          i = {
            platform: R,
            ...n
          },
          s = {
            ...i.platform,
            _c: r
          };
        return (0, o.rD)(e, t, {
          ...i,
          platform: s
        })
      }
    },
    4519: (e, t, n) => {
      n.d(t, {
        UE: () => a,
        we: () => h
      });
      var r = n(18001),
        o = n(77102),
        i = n(62229),
        s = n(44853);
      const a = e => ({
        name: "arrow",
        options: e,
        fn(t) {
          const {
            element: n,
            padding: o
          } = "function" == typeof e ? e(t) : e;
          return n && (i = n, {}.hasOwnProperty.call(i, "current")) ? null != n.current ? (0, r.UE)({
            element: n.current,
            padding: o
          }).fn(t) : {} : n ? (0, r.UE)({
            element: n,
            padding: o
          }).fn(t) : {};
          var i
        }
      });
      var l = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;

      function c(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; 0 != r--;)
              if (!c(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || c(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function u(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function d(e, t) {
        const n = u(e);
        return Math.round(t * n) / n
      }

      function f(e) {
        const t = i.useRef(e);
        return l((() => {
          t.current = e
        })), t
      }

      function h(e) {
        void 0 === e && (e = {});
        const {
          placement: t = "bottom",
          strategy: n = "absolute",
          middleware: r = [],
          platform: a,
          elements: {
            reference: h,
            floating: p
          } = {},
          transform: v = !0,
          whileElementsMounted: m,
          open: g
        } = e, [y, b] = i.useState({
          x: 0,
          y: 0,
          strategy: n,
          placement: t,
          middlewareData: {},
          isPositioned: !1
        }), [E, w] = i.useState(r);
        c(E, r) || w(r);
        const [T, _] = i.useState(null), [P, S] = i.useState(null), C = i.useCallback((e => {
          e != M.current && (M.current = e, _(e))
        }), [_]), L = i.useCallback((e => {
          e !== O.current && (O.current = e, S(e))
        }), [S]), x = h || T, A = p || P, M = i.useRef(null), O = i.useRef(null), k = i.useRef(y), I = f(m), R = f(a), H = i.useCallback((() => {
          if (!M.current || !O.current) return;
          const e = {
            placement: t,
            strategy: n,
            middleware: E
          };
          R.current && (e.platform = R.current), (0, o.rD)(M.current, O.current, e).then((e => {
            const t = {
              ...e,
              isPositioned: !0
            };
            N.current && !c(k.current, t) && (k.current = t, s.flushSync((() => {
              b(t)
            })))
          }))
        }), [E, t, n, R]);
        l((() => {
          !1 === g && k.current.isPositioned && (k.current.isPositioned = !1, b((e => ({
            ...e,
            isPositioned: !1
          }))))
        }), [g]);
        const N = i.useRef(!1);
        l((() => (N.current = !0, () => {
          N.current = !1
        })), []), l((() => {
          if (x && (M.current = x), A && (O.current = A), x && A) {
            if (I.current) return I.current(x, A, H);
            H()
          }
        }), [x, A, H, I]);
        const D = i.useMemo((() => ({
            reference: M,
            floating: O,
            setReference: C,
            setFloating: L
          })), [C, L]),
          B = i.useMemo((() => ({
            reference: x,
            floating: A
          })), [x, A]),
          F = i.useMemo((() => {
            const e = {
              position: n,
              left: 0,
              top: 0
            };
            if (!B.floating) return e;
            const t = d(B.floating, y.x),
              r = d(B.floating, y.y);
            return v ? {
              ...e,
              transform: "translate(" + t + "px, " + r + "px)",
              ...u(B.floating) >= 1.5 && {
                willChange: "transform"
              }
            } : {
              position: n,
              left: t,
              top: r
            }
          }), [n, v, B.floating, y.x, y.y]);
        return i.useMemo((() => ({
          ...y,
          update: H,
          refs: D,
          elements: B,
          floatingStyles: F
        })), [y, H, D, B, F])
      }
    },
    90969: (e, t, n) => {
      n.d(t, {
        B1: () => S,
        C0: () => h,
        Dz: () => y,
        Jx: () => l,
        LI: () => s,
        PG: () => v,
        RI: () => a,
        Sg: () => p,
        T9: () => i,
        TV: () => g,
        WJ: () => E,
        _3: () => f,
        bV: () => _,
        jk: () => o,
        lP: () => T,
        nI: () => P,
        qE: () => d,
        r_: () => r,
        sq: () => m,
        w7: () => b
      });
      const r = ["top", "right", "bottom", "left"],
        o = Math.min,
        i = Math.max,
        s = Math.round,
        a = Math.floor,
        l = e => ({
          x: e,
          y: e
        }),
        c = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        u = {
          start: "end",
          end: "start"
        };

      function d(e, t, n) {
        return i(e, o(t, n))
      }

      function f(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function h(e) {
        return e.split("-")[0]
      }

      function p(e) {
        return e.split("-")[1]
      }

      function v(e) {
        return "x" === e ? "y" : "x"
      }

      function m(e) {
        return "y" === e ? "height" : "width"
      }

      function g(e) {
        return ["top", "bottom"].includes(h(e)) ? "y" : "x"
      }

      function y(e) {
        return v(g(e))
      }

      function b(e, t, n) {
        void 0 === n && (n = !1);
        const r = p(e),
          o = y(e),
          i = m(o);
        let s = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
        return t.reference[i] > t.floating[i] && (s = _(s)), [s, _(s)]
      }

      function E(e) {
        const t = _(e);
        return [w(e), t, w(t)]
      }

      function w(e) {
        return e.replace(/start|end/g, (e => u[e]))
      }

      function T(e, t, n, r) {
        const o = p(e);
        let i = function(e, t, n) {
          const r = ["left", "right"],
            o = ["right", "left"],
            i = ["top", "bottom"],
            s = ["bottom", "top"];
          switch (e) {
            case "top":
            case "bottom":
              return n ? t ? o : r : t ? r : o;
            case "left":
            case "right":
              return t ? i : s;
            default:
              return []
          }
        }(h(e), "start" === n, r);
        return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(w)))), i
      }

      function _(e) {
        return e.replace(/left|right|bottom|top/g, (e => c[e]))
      }

      function P(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function S(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height
        }
      }
    },
    72213: (e, t, n) => {
      function r(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }
      n.d(t, {
        q: () => r
      })
    },
    59219: (e, t, n) => {
      n.d(t, {
        jH: () => i
      });
      var r = n(62229),
        o = (n(73855), r.createContext(void 0));

      function i(e) {
        const t = r.useContext(o);
        return e || t || "ltr"
      }
    },
    95187: (e, t, n) => {
      var r;
      n.d(t, {
        B: () => l
      });
      var o = n(62229),
        i = n(92600),
        s = (r || (r = n.t(o, 2)))["useId".toString()] || (() => {}),
        a = 0;

      function l(e) {
        const [t, n] = o.useState(s());
        return (0, i.N)((() => {
          e || n((e => e ?? String(a++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
    },
    94767: (e, t, n) => {
      n.d(t, {
        Mz: () => D,
        i3: () => F,
        UC: () => B,
        bL: () => N,
        Bk: () => E
      });
      var r = n(62229),
        o = n(4519),
        i = n(77102),
        s = n(18001),
        a = (n(44853), n(11735)),
        l = n(73855),
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = r.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, i = r ? a.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(i, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        u = r.forwardRef(((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, l.jsx)(c.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, l.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }));
      u.displayName = "Arrow";
      var d = u;

      function f(...e) {
        return r.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function h(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${t.scopeName}`]: o
            })), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var p = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = r.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, i = r ? a.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(i, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        v = n(26727),
        m = n(92600),
        g = n(27977),
        y = "Popper",
        [b, E] = function(e, t = []) {
          let n = [];
          const o = () => {
            const t = n.map((e => r.createContext(e)));
            return function(n) {
              const o = n?.[e] || t;
              return r.useMemo((() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: o
                }
              })), [n, o])
            }
          };
          return o.scopeName = e, [function(t, o) {
            const i = r.createContext(o),
              s = n.length;

            function a(t) {
              const {
                scope: n,
                children: o,
                ...a
              } = t, c = n?.[e][s] || i, u = r.useMemo((() => a), Object.values(a));
              return (0, l.jsx)(c.Provider, {
                value: u,
                children: o
              })
            }
            return n = [...n, o], a.displayName = t + "Provider", [a, function(n, a) {
              const l = a?.[e][s] || i,
                c = r.useContext(l);
              if (c) return c;
              if (void 0 !== o) return o;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, h(o, ...t)]
        }(y),
        [w, T] = b(y),
        _ = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [o, i] = r.useState(null);
          return (0, l.jsx)(w, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n
          })
        };
      _.displayName = y;
      var P = "PopperAnchor",
        S = r.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = e, s = T(P, n), a = r.useRef(null), c = f(t, a);
          return r.useEffect((() => {
            s.onAnchorChange(o?.current || a.current)
          })), o ? null : (0, l.jsx)(p.div, {
            ...i,
            ref: c
          })
        }));
      S.displayName = P;
      var C = "PopperContent",
        [L, x] = b(C),
        A = r.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            side: a = "bottom",
            sideOffset: c = 0,
            align: u = "center",
            alignOffset: d = 0,
            arrowPadding: h = 0,
            avoidCollisions: y = !0,
            collisionBoundary: b = [],
            collisionPadding: E = 0,
            sticky: w = "partial",
            hideWhenDetached: _ = !1,
            updatePositionStrategy: P = "optimized",
            onPlaced: S,
            ...x
          } = e, A = T(C, n), [M, O] = r.useState(null), k = f(t, (e => O(e))), [N, D] = r.useState(null), B = (0, g.X)(N), F = B?.width ?? 0, U = B?.height ?? 0, j = a + ("center" !== u ? "-" + u : ""), K = "number" == typeof E ? E : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...E
          }, V = Array.isArray(b) ? b : [b], G = V.length > 0, W = {
            padding: K,
            boundary: V.filter(I),
            altBoundary: G
          }, {
            refs: X,
            floatingStyles: z,
            placement: $,
            isPositioned: Y,
            middlewareData: q
          } = (0, o.we)({
            strategy: "fixed",
            placement: j,
            whileElementsMounted: (...e) => (0, i.ll)(...e, {
              animationFrame: "always" === P
            }),
            elements: {
              reference: A.anchor
            },
            middleware: [(0, s.cY)({
              mainAxis: c + U,
              alignmentAxis: d
            }), y && (0, s.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === w ? (0, s.ER)() : void 0,
              ...W
            }), y && (0, s.UU)({
              ...W
            }), (0, s.Ej)({
              ...W,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: i
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${n}px`), s.setProperty("--radix-popper-available-height", `${r}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), N && (0, o.UE)({
              element: N,
              padding: h
            }), R({
              arrowWidth: F,
              arrowHeight: U
            }), _ && (0, s.jD)({
              strategy: "referenceHidden",
              ...W
            })]
          }), [Z, J] = H($), Q = (0, v.c)(S);
          (0, m.N)((() => {
            Y && Q?.()
          }), [Y, Q]);
          const ee = q.arrow?.x,
            te = q.arrow?.y,
            ne = 0 !== q.arrow?.centerOffset,
            [re, oe] = r.useState();
          return (0, m.N)((() => {
            M && oe(window.getComputedStyle(M).zIndex)
          }), [M]), (0, l.jsx)("div", {
            ref: X.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...z,
              transform: Y ? z.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: re,
              "--radix-popper-transform-origin": [q.transformOrigin?.x, q.transformOrigin?.y].join(" "),
              ...q.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, l.jsx)(L, {
              scope: n,
              placedSide: Z,
              onArrowChange: D,
              arrowX: ee,
              arrowY: te,
              shouldHideArrow: ne,
              children: (0, l.jsx)(p.div, {
                "data-side": Z,
                "data-align": J,
                ...x,
                ref: k,
                style: {
                  ...x.style,
                  animation: Y ? void 0 : "none"
                }
              })
            })
          })
        }));
      A.displayName = C;
      var M = "PopperArrow",
        O = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        k = r.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = x(M, n), i = O[o.placedSide];
          return (0, l.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, l.jsx)(d, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function I(e) {
        return null !== e
      }
      k.displayName = M;
      var R = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, c] = H(n), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], d = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let h = "",
            p = "";
          return "bottom" === l ? (h = i ? u : `${d}px`, p = -a + "px") : "top" === l ? (h = i ? u : `${d}px`, p = `${r.floating.height+a}px`) : "right" === l ? (h = -a + "px", p = i ? u : `${f}px`) : "left" === l && (h = `${r.floating.width+a}px`, p = i ? u : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function H(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var N = _,
        D = S,
        B = A,
        F = k
    },
    19654: (e, t, n) => {
      n.d(t, {
        bL: () => J,
        Ze: () => ee,
        zi: () => te,
        LM: () => Q
      });
      var r = n(62229);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let n = !1;
          const r = e.map((e => {
            const r = o(e, t);
            return n || "function" != typeof r || (n = !0), r
          }));
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function s(...e) {
        return r.useCallback(i(...e), e)
      }
      n(44853);
      var a = n(73855);

      function l(e) {
        const t = r.forwardRef(((e, t) => {
          const {
            children: n,
            ...o
          } = e;
          if (r.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              s = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    i(...e), o(...e)
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(o, n.props);
            return n.type !== r.Fragment && (s.ref = t ? i(t, e) : e), r.cloneElement(n, s)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        }));
        return t.displayName = `${e}.SlotClone`, t
      }
      var c = Symbol("radix.slottable");

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
      var d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = function(e) {
              const t = l(e),
                n = r.forwardRef(((e, n) => {
                  const {
                    children: o,
                    ...i
                  } = e, s = r.Children.toArray(o), l = s.find(u);
                  if (l) {
                    const e = l.props.children,
                      o = s.map((t => t === l ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t));
                    return (0, a.jsx)(t, {
                      ...i,
                      ref: n,
                      children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
                    })
                  }
                  return (0, a.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o
                  })
                }));
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, {
                ...i,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }), {}),
        f = globalThis?.document ? r.useLayoutEffect : () => {},
        h = e => {
          const {
            present: t,
            children: n
          } = e, o = function(e) {
            const [t, n] = r.useState(), o = r.useRef({}), i = r.useRef(e), s = r.useRef("none"), a = e ? "mounted" : "unmounted", [l, c] = function(e, t) {
              return r.useReducer(((e, n) => t[e][n] ?? e), e)
            }(a, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
            return r.useEffect((() => {
              const e = p(o.current);
              s.current = "mounted" === l ? e : "none"
            }), [l]), f((() => {
              const t = o.current,
                n = i.current;
              if (n !== e) {
                const r = s.current,
                  o = p(t);
                c(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }), [e, c]), f((() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  r = r => {
                    const s = p(o.current).includes(r.animationName);
                    if (r.target === t && s && (c("ANIMATION_END"), !i.current)) {
                      const r = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout((() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                      }))
                    }
                  },
                  a = e => {
                    e.target === t && (s.current = p(o.current))
                  };
                return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
                }
              }
              c("ANIMATION_END")
            }), [t, c]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: r.useCallback((e => {
                e && (o.current = getComputedStyle(e)), n(e)
              }), [])
            }
          }(t), i = "function" == typeof n ? n({
            present: o.isPresent
          }) : r.Children.only(n), a = s(o.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(i));
          return "function" == typeof n || o.isPresent ? r.cloneElement(i, {
            ref: a
          }) : null
        };

      function p(e) {
        return e?.animationName || "none"
      }

      function v(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${t.scopeName}`]: o
            })), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function m(e) {
        const t = r.useRef(e);
        return r.useEffect((() => {
          t.current = e
        })), r.useMemo((() => (...e) => t.current?.(...e)), [])
      }
      h.displayName = "Presence";
      var g = r.createContext(void 0);

      function y(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var b = "ScrollArea",
        [E, w] = function(e, t = []) {
          let n = [];
          const o = () => {
            const t = n.map((e => r.createContext(e)));
            return function(n) {
              const o = n?.[e] || t;
              return r.useMemo((() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: o
                }
              })), [n, o])
            }
          };
          return o.scopeName = e, [function(t, o) {
            const i = r.createContext(o),
              s = n.length;
            n = [...n, o];
            const l = t => {
              const {
                scope: n,
                children: o,
                ...l
              } = t, c = n?.[e]?.[s] || i, u = r.useMemo((() => l), Object.values(l));
              return (0, a.jsx)(c.Provider, {
                value: u,
                children: o
              })
            };
            return l.displayName = t + "Provider", [l, function(n, a) {
              const l = a?.[e]?.[s] || i,
                c = r.useContext(l);
              if (c) return c;
              if (void 0 !== o) return o;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, v(o, ...t)]
        }(b),
        [T, _] = E(b),
        P = r.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: o = "hover",
            dir: i,
            scrollHideDelay: l = 600,
            ...c
          } = e, [u, f] = r.useState(null), [h, p] = r.useState(null), [v, m] = r.useState(null), [y, b] = r.useState(null), [E, w] = r.useState(null), [_, P] = r.useState(0), [S, C] = r.useState(0), [L, x] = r.useState(!1), [A, M] = r.useState(!1), O = s(t, (e => f(e))), k = function(e) {
            const t = r.useContext(g);
            return e || t || "ltr"
          }(i);
          return (0, a.jsx)(T, {
            scope: n,
            type: o,
            dir: k,
            scrollHideDelay: l,
            scrollArea: u,
            viewport: h,
            onViewportChange: p,
            content: v,
            onContentChange: m,
            scrollbarX: y,
            onScrollbarXChange: b,
            scrollbarXEnabled: L,
            onScrollbarXEnabledChange: x,
            scrollbarY: E,
            onScrollbarYChange: w,
            scrollbarYEnabled: A,
            onScrollbarYEnabledChange: M,
            onCornerWidthChange: P,
            onCornerHeightChange: C,
            children: (0, a.jsx)(d.div, {
              dir: k,
              ...c,
              ref: O,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": _ + "px",
                "--radix-scroll-area-corner-height": S + "px",
                ...e.style
              }
            })
          })
        }));
      P.displayName = b;
      var S = "ScrollAreaViewport",
        C = r.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: o,
            nonce: i,
            ...l
          } = e, c = _(S, n), u = s(t, r.useRef(null), c.onViewportChange);
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: i
            }), (0, a.jsx)(d.div, {
              "data-radix-scroll-area-viewport": "",
              ...l,
              ref: u,
              style: {
                overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, a.jsx)("div", {
                ref: c.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: o
              })
            })]
          })
        }));
      C.displayName = S;
      var L = "ScrollAreaScrollbar",
        x = r.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, i = _(L, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: l
          } = i, c = "horizontal" === e.orientation;
          return r.useEffect((() => (c ? s(!0) : l(!0), () => {
            c ? s(!1) : l(!1)
          })), [c, s, l]), "hover" === i.type ? (0, a.jsx)(A, {
            ...o,
            ref: t,
            forceMount: n
          }) : "scroll" === i.type ? (0, a.jsx)(M, {
            ...o,
            ref: t,
            forceMount: n
          }) : "auto" === i.type ? (0, a.jsx)(O, {
            ...o,
            ref: t,
            forceMount: n
          }) : "always" === i.type ? (0, a.jsx)(k, {
            ...o,
            ref: t
          }) : null
        }));
      x.displayName = L;
      var A = r.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, i = _(L, e.__scopeScrollArea), [s, l] = r.useState(!1);
          return r.useEffect((() => {
            const e = i.scrollArea;
            let t = 0;
            if (e) {
              const n = () => {
                  window.clearTimeout(t), l(!0)
                },
                r = () => {
                  t = window.setTimeout((() => l(!1)), i.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r)
              }
            }
          }), [i.scrollArea, i.scrollHideDelay]), (0, a.jsx)(h, {
            present: n || s,
            children: (0, a.jsx)(O, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        M = r.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, i = _(L, e.__scopeScrollArea), s = "horizontal" === e.orientation, l = q((() => u("SCROLL_END")), 100), [c, u] = ("hidden", d = {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          }, r.useReducer(((e, t) => d[e][t] ?? e), "hidden"));
          var d;
          return r.useEffect((() => {
            if ("idle" === c) {
              const e = window.setTimeout((() => u("HIDE")), i.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [c, i.scrollHideDelay, u]), r.useEffect((() => {
            const e = i.viewport,
              t = s ? "scrollLeft" : "scrollTop";
            if (e) {
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (u("SCROLL"), l()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }), [i.viewport, s, u, l]), (0, a.jsx)(h, {
            present: n || "hidden" !== c,
            children: (0, a.jsx)(k, {
              "data-state": "hidden" === c ? "hidden" : "visible",
              ...o,
              ref: t,
              onPointerEnter: y(e.onPointerEnter, (() => u("POINTER_ENTER"))),
              onPointerLeave: y(e.onPointerLeave, (() => u("POINTER_LEAVE")))
            })
          })
        })),
        O = r.forwardRef(((e, t) => {
          const n = _(L, e.__scopeScrollArea),
            {
              forceMount: o,
              ...i
            } = e,
            [s, l] = r.useState(!1),
            c = "horizontal" === e.orientation,
            u = q((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                l(c ? e : t)
              }
            }), 10);
          return Z(n.viewport, u), Z(n.content, u), (0, a.jsx)(h, {
            present: o || s,
            children: (0, a.jsx)(k, {
              "data-state": s ? "visible" : "hidden",
              ...i,
              ref: t
            })
          })
        })),
        k = r.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...o
          } = e, i = _(L, e.__scopeScrollArea), s = r.useRef(null), l = r.useRef(0), [c, u] = r.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = G(c.viewport, c.content), f = {
            ...o,
            sizes: c,
            onSizesChange: u,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => s.current = e,
            onThumbPointerUp: () => l.current = 0,
            onThumbPointerDown: e => l.current = e
          };

          function h(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = W(n),
                i = t || o / 2,
                s = o - i,
                a = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - s,
                c = n.content - n.viewport;
              return z([a, l], "ltr" === r ? [0, c] : [-1 * c, 0])(e)
            }(e, l.current, c, t)
          }
          return "horizontal" === n ? (0, a.jsx)(I, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (i.viewport && s.current) {
                const e = X(i.viewport.scrollLeft, c, i.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              i.viewport && (i.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              i.viewport && (i.viewport.scrollLeft = h(e, i.dir))
            }
          }) : "vertical" === n ? (0, a.jsx)(R, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (i.viewport && s.current) {
                const e = X(i.viewport.scrollTop, c);
                s.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              i.viewport && (i.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              i.viewport && (i.viewport.scrollTop = h(e))
            }
          }) : null
        })),
        I = r.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: o,
            ...i
          } = e, l = _(L, e.__scopeScrollArea), [c, u] = r.useState(), d = r.useRef(null), f = s(t, d, l.onScrollbarXChange);
          return r.useEffect((() => {
            d.current && u(getComputedStyle(d.current))
          }), [d]), (0, a.jsx)(D, {
            "data-orientation": "horizontal",
            ...i,
            ref: f,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === l.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === l.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": W(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (l.viewport) {
                const r = l.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), $(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && l.viewport && c && o({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: V(c.paddingLeft),
                  paddingEnd: V(c.paddingRight)
                }
              })
            }
          })
        })),
        R = r.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: o,
            ...i
          } = e, l = _(L, e.__scopeScrollArea), [c, u] = r.useState(), d = r.useRef(null), f = s(t, d, l.onScrollbarYChange);
          return r.useEffect((() => {
            d.current && u(getComputedStyle(d.current))
          }), [d]), (0, a.jsx)(D, {
            "data-orientation": "vertical",
            ...i,
            ref: f,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === l.dir ? 0 : void 0,
              left: "rtl" === l.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": W(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (l.viewport) {
                const r = l.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), $(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && l.viewport && c && o({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: V(c.paddingTop),
                  paddingEnd: V(c.paddingBottom)
                }
              })
            }
          })
        })),
        [H, N] = E(L),
        D = r.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: o,
            hasThumb: i,
            onThumbChange: l,
            onThumbPointerUp: c,
            onThumbPointerDown: u,
            onThumbPositionChange: f,
            onDragScroll: h,
            onWheelScroll: p,
            onResize: v,
            ...g
          } = e, b = _(L, n), [E, w] = r.useState(null), T = s(t, (e => w(e))), P = r.useRef(null), S = r.useRef(""), C = b.viewport, x = o.content - o.viewport, A = m(p), M = m(f), O = q(v, 10);

          function k(e) {
            if (P.current) {
              const t = e.clientX - P.current.left,
                n = e.clientY - P.current.top;
              h({
                x: t,
                y: n
              })
            }
          }
          return r.useEffect((() => {
            const e = e => {
              const t = e.target,
                n = E?.contains(t);
              n && A(e, x)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [C, E, x, A]), r.useEffect(M, [o, M]), Z(E, O), Z(b.content, O), (0, a.jsx)(H, {
            scope: n,
            scrollbar: E,
            hasThumb: i,
            onThumbChange: m(l),
            onThumbPointerUp: m(c),
            onThumbPositionChange: M,
            onThumbPointerDown: m(u),
            children: (0, a.jsx)(d.div, {
              ...g,
              ref: T,
              style: {
                position: "absolute",
                ...g.style
              },
              onPointerDown: y(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), P.current = E.getBoundingClientRect(), S.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", b.viewport && (b.viewport.style.scrollBehavior = "auto"), k(e))
              })),
              onPointerMove: y(e.onPointerMove, k),
              onPointerUp: y(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = S.current, b.viewport && (b.viewport.style.scrollBehavior = ""), P.current = null
              }))
            })
          })
        })),
        B = "ScrollAreaThumb",
        F = r.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = N(B, e.__scopeScrollArea);
          return (0, a.jsx)(h, {
            present: n || o.hasThumb,
            children: (0, a.jsx)(U, {
              ref: t,
              ...r
            })
          })
        })),
        U = r.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: o,
            ...i
          } = e, l = _(B, n), c = N(B, n), {
            onThumbPositionChange: u
          } = c, f = s(t, (e => c.onThumbChange(e))), h = r.useRef(void 0), p = q((() => {
            h.current && (h.current(), h.current = void 0)
          }), 100);
          return r.useEffect((() => {
            const e = l.viewport;
            if (e) {
              const t = () => {
                if (p(), !h.current) {
                  const t = Y(e, u);
                  h.current = t, u()
                }
              };
              return u(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [l.viewport, p, u]), (0, a.jsx)(d.div, {
            "data-state": c.hasThumb ? "visible" : "hidden",
            ...i,
            ref: f,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...o
            },
            onPointerDownCapture: y(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              c.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: y(e.onPointerUp, c.onThumbPointerUp)
          })
        }));
      F.displayName = B;
      var j = "ScrollAreaCorner";
      r.forwardRef(((e, t) => {
        const n = _(j, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, a.jsx)(K, {
          ...e,
          ref: t
        }) : null
      })).displayName = j;
      var K = r.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...o
        } = e, i = _(j, n), [s, l] = r.useState(0), [c, u] = r.useState(0), f = Boolean(s && c);
        return Z(i.scrollbarX, (() => {
          const e = i.scrollbarX?.offsetHeight || 0;
          i.onCornerHeightChange(e), u(e)
        })), Z(i.scrollbarY, (() => {
          const e = i.scrollbarY?.offsetWidth || 0;
          i.onCornerWidthChange(e), l(e)
        })), f ? (0, a.jsx)(d.div, {
          ...o,
          ref: t,
          style: {
            width: s,
            height: c,
            position: "absolute",
            right: "ltr" === i.dir ? 0 : void 0,
            left: "rtl" === i.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function V(e) {
        return e ? parseInt(e, 10) : 0
      }

      function G(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function W(e) {
        const t = G(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function X(e, t, n = "ltr") {
        const r = W(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - r,
          l = function(e, [t, n]) {
            return Math.min(n, Math.max(t, e))
          }(e, "ltr" === n ? [0, s] : [-1 * s, 0]);
        return z([0, s], [0, a])(l)
      }

      function z(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function $(e, t) {
        return e > 0 && e < t
      }
      var Y = (e, t = (() => {})) => {
        let n = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          r = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = n.left !== i.left,
            a = n.top !== i.top;
          (s || a) && t(), n = i, r = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(r)
      };

      function q(e, t) {
        const n = m(e),
          o = r.useRef(0);
        return r.useEffect((() => () => window.clearTimeout(o.current)), []), r.useCallback((() => {
          window.clearTimeout(o.current), o.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function Z(e, t) {
        const n = m(t);
        f((() => {
          let t = 0;
          if (e) {
            const r = new ResizeObserver((() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            }));
            return r.observe(e), () => {
              window.cancelAnimationFrame(t), r.unobserve(e)
            }
          }
        }), [e, n])
      }
      var J = P,
        Q = C,
        ee = x,
        te = F
    },
    29898: (e, t, n) => {
      n.d(t, {
        UC: () => Ue,
        q7: () => Ke,
        ZL: () => Fe,
        bL: () => De,
        l9: () => Be,
        LM: () => je
      });
      var r = n(62229),
        o = n(44853),
        i = n(72213);

      function s(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var a = n(73855);

      function l(e, t = []) {
        let n = [];
        const o = () => {
          const t = n.map((e => r.createContext(e)));
          return function(n) {
            const o = n?.[e] || t;
            return r.useMemo((() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: o
              }
            })), [n, o])
          }
        };
        return o.scopeName = e, [function(t, o) {
          const i = r.createContext(o),
            s = n.length;

          function l(t) {
            const {
              scope: n,
              children: o,
              ...l
            } = t, c = n?.[e][s] || i, u = r.useMemo((() => l), Object.values(l));
            return (0, a.jsx)(c.Provider, {
              value: u,
              children: o
            })
          }
          return n = [...n, o], l.displayName = t + "Provider", [l, function(n, a) {
            const l = a?.[e][s] || i,
              c = r.useContext(l);
            if (c) return c;
            if (void 0 !== o) return o;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, c(o, ...t)]
      }

      function c(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${t.scopeName}`]: o
            })), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function u(...e) {
        return r.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var d, f = n(11735),
        h = n(59219),
        p = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = r.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, i = r ? f.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        v = n(26727),
        m = n(62865),
        g = "dismissableLayer.update",
        y = r.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        b = r.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: i,
            onFocusOutside: l,
            onInteractOutside: c,
            onDismiss: f,
            ...h
          } = e, b = r.useContext(y), [T, _] = r.useState(null), P = T?.ownerDocument ?? globalThis?.document, [, S] = r.useState({}), C = u(t, (e => _(e))), L = Array.from(b.layers), [x] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1), A = L.indexOf(x), M = T ? L.indexOf(T) : -1, O = b.layersWithOutsidePointerEventsDisabled.size > 0, k = M >= A, I = function(e, t = globalThis?.document) {
            const n = (0, v.c)(e),
              o = r.useRef(!1),
              i = r.useRef((() => {}));
            return r.useEffect((() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let r = function() {
                      w("dismissableLayer.pointerDownOutside", n, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", i.current);
                  o.current = !1
                },
                r = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(r), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => o.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...b.branches].some((e => e.contains(t)));
            k && !n && (i?.(e), c?.(e), e.defaultPrevented || f?.())
          }), P), R = function(e, t = globalThis?.document) {
            const n = (0, v.c)(e),
              o = r.useRef(!1);
            return r.useEffect((() => {
              const e = e => {
                e.target && !o.current && w("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, n]), {
              onFocusCapture: () => o.current = !0,
              onBlurCapture: () => o.current = !1
            }
          }((e => {
            const t = e.target;
            [...b.branches].some((e => e.contains(t))) || (l?.(e), c?.(e), e.defaultPrevented || f?.())
          }), P);
          return (0, m.U)((e => {
            M === b.layers.size - 1 && (o?.(e), !e.defaultPrevented && f && (e.preventDefault(), f()))
          }), P), r.useEffect((() => {
            if (T) return n && (0 === b.layersWithOutsidePointerEventsDisabled.size && (d = P.body.style.pointerEvents, P.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(T)), b.layers.add(T), E(), () => {
              n && 1 === b.layersWithOutsidePointerEventsDisabled.size && (P.body.style.pointerEvents = d)
            }
          }), [T, P, n, b]), r.useEffect((() => () => {
            T && (b.layers.delete(T), b.layersWithOutsidePointerEventsDisabled.delete(T), E())
          }), [T, b]), r.useEffect((() => {
            const e = () => S({});
            return document.addEventListener(g, e), () => document.removeEventListener(g, e)
          }), []), (0, a.jsx)(p.div, {
            ...h,
            ref: C,
            style: {
              pointerEvents: O ? k ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: s(e.onFocusCapture, R.onFocusCapture),
            onBlurCapture: s(e.onBlurCapture, R.onBlurCapture),
            onPointerDownCapture: s(e.onPointerDownCapture, I.onPointerDownCapture)
          })
        }));

      function E() {
        const e = new CustomEvent(g);
        document.dispatchEvent(e)
      }

      function w(e, t, n, {
        discrete: r
      }) {
        const i = n.originalEvent.target,
          s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && i.addEventListener(e, t, {
          once: !0
        }), r ? function(e, t) {
          e && o.flushSync((() => e.dispatchEvent(t)))
        }(i, s) : i.dispatchEvent(s)
      }
      b.displayName = "DismissableLayer", r.forwardRef(((e, t) => {
        const n = r.useContext(y),
          o = r.useRef(null),
          i = u(t, o);
        return r.useEffect((() => {
          const e = o.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, a.jsx)(p.div, {
          ...e,
          ref: i
        })
      })).displayName = "DismissableLayerBranch";
      var T = 0;

      function _() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var P = "focusScope.autoFocusOnMount",
        S = "focusScope.autoFocusOnUnmount",
        C = {
          bubbles: !1,
          cancelable: !0
        },
        L = r.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: i,
            onUnmountAutoFocus: s,
            ...l
          } = e, [c, d] = r.useState(null), f = (0, v.c)(i), h = (0, v.c)(s), m = r.useRef(null), g = u(t, (e => d(e))), y = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect((() => {
            if (o) {
              let e = function(e) {
                  if (y.paused || !c) return;
                  const t = e.target;
                  c.contains(t) ? m.current = t : O(m.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (y.paused || !c) return;
                  const t = e.relatedTarget;
                  null !== t && (c.contains(t) || O(m.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && O(c)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return c && r.observe(c, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [o, c, y.paused]), r.useEffect((() => {
            if (c) {
              k.add(y);
              const e = document.activeElement;
              if (!c.contains(e)) {
                const t = new CustomEvent(P, C);
                c.addEventListener(P, f), c.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (O(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(x(c).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && O(c))
              }
              return () => {
                c.removeEventListener(P, f), setTimeout((() => {
                  const t = new CustomEvent(S, C);
                  c.addEventListener(S, h), c.dispatchEvent(t), t.defaultPrevented || O(e ?? document.body, {
                    select: !0
                  }), c.removeEventListener(S, h), k.remove(y)
                }), 0)
              }
            }
          }), [c, f, h, y]);
          const b = r.useCallback((e => {
            if (!n && !o) return;
            if (y.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, i] = function(e) {
                  const t = x(e);
                  return [A(t, e), A(t.reverse(), e)]
                }(t);
              o && i ? e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && O(i, {
                select: !0
              })) : (e.preventDefault(), n && O(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }), [n, o, y.paused]);
          return (0, a.jsx)(p.div, {
            tabIndex: -1,
            ...l,
            ref: g,
            onKeyDown: b
          })
        }));

      function x(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function A(e, t) {
        for (const n of e)
          if (!M(n, {
              upTo: t
            })) return n
      }

      function M(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function O(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      L.displayName = "FocusScope";
      var k = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = I(e, t), e.unshift(t)
          },
          remove(t) {
            e = I(e, t), e[0]?.resume()
          }
        }
      }();

      function I(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var R = n(95187),
        H = n(94767),
        N = n(92600),
        D = r.forwardRef(((e, t) => {
          const {
            container: n,
            ...i
          } = e, [s, l] = r.useState(!1);
          (0, N.N)((() => l(!0)), []);
          const c = n || s && globalThis?.document?.body;
          return c ? o.createPortal((0, a.jsx)(p.div, {
            ...i,
            ref: t
          }), c) : null
        }));
      D.displayName = "Portal";
      var B = n(48087),
        F = n(15485),
        U = r.forwardRef(((e, t) => (0, a.jsx)(p.span, {
          ...e,
          ref: t,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
          }
        })));
      U.displayName = "VisuallyHidden";
      var j = n(91270),
        K = n(55752),
        V = [" ", "Enter", "ArrowUp", "ArrowDown"],
        G = [" ", "Enter"],
        W = "Select",
        [X, z, $] = function(e) {
          const t = e + "CollectionProvider",
            [n, o] = l(t),
            [i, s] = n(t, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            c = e => {
              const {
                scope: t,
                children: n
              } = e, o = r.useRef(null), s = r.useRef(new Map).current;
              return (0, a.jsx)(i, {
                scope: t,
                itemMap: s,
                collectionRef: o,
                children: n
              })
            };
          c.displayName = t;
          const d = e + "CollectionSlot",
            h = r.forwardRef(((e, t) => {
              const {
                scope: n,
                children: r
              } = e, o = u(t, s(d, n).collectionRef);
              return (0, a.jsx)(f.DX, {
                ref: o,
                children: r
              })
            }));
          h.displayName = d;
          const p = e + "CollectionItemSlot",
            v = "data-radix-collection-item",
            m = r.forwardRef(((e, t) => {
              const {
                scope: n,
                children: o,
                ...i
              } = e, l = r.useRef(null), c = u(t, l), d = s(p, n);
              return r.useEffect((() => (d.itemMap.set(l, {
                ref: l,
                ...i
              }), () => {
                d.itemMap.delete(l)
              }))), (0, a.jsx)(f.DX, {
                [v]: "",
                ref: c,
                children: o
              })
            }));
          return m.displayName = p, [{
            Provider: c,
            Slot: h,
            ItemSlot: m
          }, function(t) {
            const n = s(e + "CollectionConsumer", t);
            return r.useCallback((() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${v}]`));
              return Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)))
            }), [n.collectionRef, n.itemMap])
          }, o]
        }(W),
        [Y, q] = l(W, [$, H.Bk]),
        Z = (0, H.Bk)(),
        [J, Q] = Y(W),
        [ee, te] = Y(W),
        ne = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: o,
            defaultOpen: i,
            onOpenChange: s,
            value: l,
            defaultValue: c,
            onValueChange: u,
            dir: d,
            name: f,
            autoComplete: p,
            disabled: v,
            required: m
          } = e, g = Z(t), [y, b] = r.useState(null), [E, w] = r.useState(null), [T, _] = r.useState(!1), P = (0, h.jH)(d), [S = !1, C] = (0, B.i)({
            prop: o,
            defaultProp: i,
            onChange: s
          }), [L, x] = (0, B.i)({
            prop: l,
            defaultProp: c,
            onChange: u
          }), A = r.useRef(null), M = !y || Boolean(y.closest("form")), [O, k] = r.useState(new Set), I = Array.from(O).map((e => e.props.value)).join(";");
          return (0, a.jsx)(H.bL, {
            ...g,
            children: (0, a.jsxs)(J, {
              required: m,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: E,
              onValueNodeChange: w,
              valueNodeHasChildren: T,
              onValueNodeHasChildrenChange: _,
              contentId: (0, R.B)(),
              value: L,
              onValueChange: x,
              open: S,
              onOpenChange: C,
              dir: P,
              triggerPointerDownPosRef: A,
              disabled: v,
              children: [(0, a.jsx)(X.Provider, {
                scope: t,
                children: (0, a.jsx)(ee, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: r.useCallback((e => {
                    k((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: r.useCallback((e => {
                    k((t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    }))
                  }), []),
                  children: n
                })
              }), M ? (0, a.jsxs)(Re, {
                "aria-hidden": !0,
                required: m,
                tabIndex: -1,
                name: f,
                autoComplete: p,
                value: L,
                onChange: e => x(e.target.value),
                disabled: v,
                children: [void 0 === L ? (0, a.jsx)("option", {
                  value: ""
                }) : null, Array.from(O)]
              }, I) : null]
            })
          })
        };
      ne.displayName = W;
      var re = "SelectTrigger",
        oe = r.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, i = Z(n), l = Q(re, n), c = l.disabled || r, d = u(t, l.onTriggerChange), f = z(n), [h, v, m] = He((e => {
            const t = f().filter((e => !e.disabled)),
              n = t.find((e => e.value === l.value)),
              r = Ne(t, e, n);
            void 0 !== r && l.onValueChange(r.value)
          })), g = () => {
            c || (l.onOpenChange(!0), m())
          };
          return (0, a.jsx)(H.Mz, {
            asChild: !0,
            ...i,
            children: (0, a.jsx)(p.button, {
              type: "button",
              role: "combobox",
              "aria-controls": l.contentId,
              "aria-expanded": l.open,
              "aria-required": l.required,
              "aria-autocomplete": "none",
              dir: l.dir,
              "data-state": l.open ? "open" : "closed",
              disabled: c,
              "data-disabled": c ? "" : void 0,
              "data-placeholder": Ie(l.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: s(o.onClick, (e => {
                e.currentTarget.focus()
              })),
              onPointerDown: s(o.onPointerDown, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (g(), l.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY)
                }, e.preventDefault())
              })),
              onKeyDown: s(o.onKeyDown, (e => {
                const t = "" !== h.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || v(e.key), t && " " === e.key || V.includes(e.key) && (g(), e.preventDefault())
              }))
            })
          })
        }));
      oe.displayName = re;
      var ie = "SelectValue";
      r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          className: r,
          style: o,
          children: i,
          placeholder: s = "",
          ...l
        } = e, c = Q(ie, n), {
          onValueNodeHasChildrenChange: d
        } = c, f = void 0 !== i, h = u(t, c.onValueNodeChange);
        return (0, N.N)((() => {
          d(f)
        }), [d, f]), (0, a.jsx)(p.span, {
          ...l,
          ref: h,
          style: {
            pointerEvents: "none"
          },
          children: Ie(c.value) ? (0, a.jsx)(a.Fragment, {
            children: s
          }) : i
        })
      })).displayName = ie, r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, a.jsx)(p.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      })).displayName = "SelectIcon";
      var se = e => (0, a.jsx)(D, {
        asChild: !0,
        ...e
      });
      se.displayName = "SelectPortal";
      var ae = "SelectContent",
        le = r.forwardRef(((e, t) => {
          const n = Q(ae, e.__scopeSelect),
            [i, s] = r.useState();
          if ((0, N.N)((() => {
              s(new DocumentFragment)
            }), []), !n.open) {
            const t = i;
            return t ? o.createPortal((0, a.jsx)(ue, {
              scope: e.__scopeSelect,
              children: (0, a.jsx)(X.Slot, {
                scope: e.__scopeSelect,
                children: (0, a.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, a.jsx)(fe, {
            ...e,
            ref: t
          })
        }));
      le.displayName = ae;
      var ce = 10,
        [ue, de] = Y(ae),
        fe = r.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            position: o = "item-aligned",
            onCloseAutoFocus: i,
            onEscapeKeyDown: l,
            onPointerDownOutside: c,
            side: d,
            sideOffset: h,
            align: p,
            alignOffset: v,
            arrowPadding: m,
            collisionBoundary: g,
            collisionPadding: y,
            sticky: E,
            hideWhenDetached: w,
            avoidCollisions: P,
            ...S
          } = e, C = Q(ae, n), [x, A] = r.useState(null), [M, O] = r.useState(null), k = u(t, (e => A(e))), [I, R] = r.useState(null), [H, N] = r.useState(null), D = z(n), [B, F] = r.useState(!1), U = r.useRef(!1);
          r.useEffect((() => {
            if (x) return (0, j.Eq)(x)
          }), [x]), r.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? _()), document.body.insertAdjacentElement("beforeend", e[1] ?? _()), T++, () => {
              1 === T && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), T--
            }
          }), []);
          const V = r.useCallback((e => {
              const [t, ...n] = D().map((e => e.ref.current)), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && M && (M.scrollTop = 0), n === r && M && (M.scrollTop = M.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }), [D, M]),
            G = r.useCallback((() => V([I, x])), [V, I, x]);
          r.useEffect((() => {
            B && G()
          }), [B, G]);
          const {
            onOpenChange: W,
            triggerPointerDownPosRef: X
          } = C;
          r.useEffect((() => {
            if (x) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (X.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (X.current?.y ?? 0))
                  }
                },
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : x.contains(n.target) || W(!1), document.removeEventListener("pointermove", t), X.current = null
                };
              return null !== X.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }), [x, W, X]), r.useEffect((() => {
            const e = () => W(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [W]);
          const [$, Y] = He((e => {
            const t = D().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = Ne(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), q = r.useCallback(((e, t, n) => {
            const r = !U.current && !n;
            (void 0 !== C.value && C.value === t || r) && (R(e), r && (U.current = !0))
          }), [C.value]), Z = r.useCallback((() => x?.focus()), [x]), J = r.useCallback(((e, t, n) => {
            const r = !U.current && !n;
            (void 0 !== C.value && C.value === t || r) && N(e)
          }), [C.value]), ee = "popper" === o ? pe : he, te = ee === pe ? {
            side: d,
            sideOffset: h,
            align: p,
            alignOffset: v,
            arrowPadding: m,
            collisionBoundary: g,
            collisionPadding: y,
            sticky: E,
            hideWhenDetached: w,
            avoidCollisions: P
          } : {};
          return (0, a.jsx)(ue, {
            scope: n,
            content: x,
            viewport: M,
            onViewportChange: O,
            itemRefCallback: q,
            selectedItem: I,
            onItemLeave: Z,
            itemTextRefCallback: J,
            focusSelectedItem: G,
            selectedItemText: H,
            position: o,
            isPositioned: B,
            searchRef: $,
            children: (0, a.jsx)(K.A, {
              as: f.DX,
              allowPinchZoom: !0,
              children: (0, a.jsx)(L, {
                asChild: !0,
                trapped: C.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: s(i, (e => {
                  C.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, a.jsx)(b, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: l,
                  onPointerDownOutside: c,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => C.onOpenChange(!1),
                  children: (0, a.jsx)(ee, {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...S,
                    ...te,
                    onPlaced: () => F(!0),
                    ref: k,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...S.style
                    },
                    onKeyDown: s(S.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || Y(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        let t = D().filter((e => !e.disabled)).map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1)
                        }
                        setTimeout((() => V(t))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      fe.displayName = "SelectContentImpl";
      var he = r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: o,
          ...s
        } = e, l = Q(ae, n), c = de(ae, n), [d, f] = r.useState(null), [h, v] = r.useState(null), m = u(t, (e => v(e))), g = z(n), y = r.useRef(!1), b = r.useRef(!0), {
          viewport: E,
          selectedItem: w,
          selectedItemText: T,
          focusSelectedItem: _
        } = c, P = r.useCallback((() => {
          if (l.trigger && l.valueNode && d && h && E && w && T) {
            const e = l.trigger.getBoundingClientRect(),
              t = h.getBoundingClientRect(),
              n = l.valueNode.getBoundingClientRect(),
              r = T.getBoundingClientRect();
            if ("rtl" !== l.dir) {
              const o = r.left - t.left,
                s = n.left - o,
                a = e.left - s,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - ce,
                f = (0, i.q)(s, [ce, u - c]);
              d.style.minWidth = l + "px", d.style.left = f + "px"
            } else {
              const o = t.right - r.right,
                s = window.innerWidth - n.right - o,
                a = window.innerWidth - e.right - s,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - ce,
                f = (0, i.q)(s, [ce, u - c]);
              d.style.minWidth = l + "px", d.style.right = f + "px"
            }
            const s = g(),
              a = window.innerHeight - 2 * ce,
              c = E.scrollHeight,
              u = window.getComputedStyle(h),
              f = parseInt(u.borderTopWidth, 10),
              p = parseInt(u.paddingTop, 10),
              v = parseInt(u.borderBottomWidth, 10),
              m = f + p + c + parseInt(u.paddingBottom, 10) + v,
              b = Math.min(5 * w.offsetHeight, m),
              _ = window.getComputedStyle(E),
              P = parseInt(_.paddingTop, 10),
              S = parseInt(_.paddingBottom, 10),
              C = e.top + e.height / 2 - ce,
              L = a - C,
              x = w.offsetHeight / 2,
              A = f + p + (w.offsetTop + x),
              M = m - A;
            if (A <= C) {
              const e = w === s[s.length - 1].ref.current;
              d.style.bottom = "0px";
              const t = h.clientHeight - E.offsetTop - E.offsetHeight,
                n = A + Math.max(L, x + (e ? S : 0) + t + v);
              d.style.height = n + "px"
            } else {
              const e = w === s[0].ref.current;
              d.style.top = "0px";
              const t = Math.max(C, f + E.offsetTop + (e ? P : 0) + x) + M;
              d.style.height = t + "px", E.scrollTop = A - C + E.offsetTop
            }
            d.style.margin = `${ce}px 0`, d.style.minHeight = b + "px", d.style.maxHeight = a + "px", o?.(), requestAnimationFrame((() => y.current = !0))
          }
        }), [g, l.trigger, l.valueNode, d, h, E, w, T, l.dir, o]);
        (0, N.N)((() => P()), [P]);
        const [S, C] = r.useState();
        (0, N.N)((() => {
          h && C(window.getComputedStyle(h).zIndex)
        }), [h]);
        const L = r.useCallback((e => {
          e && !0 === b.current && (P(), _?.(), b.current = !1)
        }), [P, _]);
        return (0, a.jsx)(ve, {
          scope: n,
          contentWrapper: d,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: L,
          children: (0, a.jsx)("div", {
            ref: f,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: S
            },
            children: (0, a.jsx)(p.div, {
              ...s,
              ref: m,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...s.style
              }
            })
          })
        })
      }));
      he.displayName = "SelectItemAlignedPosition";
      var pe = r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = ce,
          ...i
        } = e, s = Z(n);
        return (0, a.jsx)(H.UC, {
          ...s,
          ...i,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }));
      pe.displayName = "SelectPopperPosition";
      var [ve, me] = Y(ae, {}), ge = "SelectViewport", ye = r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: o,
          ...i
        } = e, l = de(ge, n), c = me(ge, n), d = u(t, l.onViewportChange), f = r.useRef(0);
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, a.jsx)(X.Slot, {
            scope: n,
            children: (0, a.jsx)(p.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...i,
              ref: d,
              style: {
                position: "relative",
                flex: 1,
                overflow: "auto",
                ...i.style
              },
              onScroll: s(i.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = c;
                if (r?.current && n) {
                  const e = Math.abs(f.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * ce,
                      o = parseFloat(n.style.minHeight),
                      i = parseFloat(n.style.height),
                      s = Math.max(o, i);
                    if (s < r) {
                      const o = s + e,
                        i = Math.min(r, o),
                        a = o - i;
                      n.style.height = i + "px", "0px" === n.style.bottom && (t.scrollTop = a > 0 ? a : 0, n.style.justifyContent = "flex-end")
                    }
                  }
                }
                f.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      ye.displayName = ge;
      var be = "SelectGroup",
        [Ee, we] = Y(be);
      r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = (0, R.B)();
        return (0, a.jsx)(Ee, {
          scope: n,
          id: o,
          children: (0, a.jsx)(p.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = be;
      var Te = "SelectLabel";
      r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = we(Te, n);
        return (0, a.jsx)(p.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = Te;
      var _e = "SelectItem",
        [Pe, Se] = Y(_e),
        Ce = r.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: o,
            disabled: i = !1,
            textValue: l,
            ...c
          } = e, d = Q(_e, n), f = de(_e, n), h = d.value === o, [v, m] = r.useState(l ?? ""), [g, y] = r.useState(!1), b = u(t, (e => f.itemRefCallback?.(e, o, i))), E = (0, R.B)(), w = () => {
            i || (d.onValueChange(o), d.onOpenChange(!1))
          };
          if ("" === o) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, a.jsx)(Pe, {
            scope: n,
            value: o,
            disabled: i,
            textId: E,
            isSelected: h,
            onItemTextChange: r.useCallback((e => {
              m((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, a.jsx)(X.ItemSlot, {
              scope: n,
              value: o,
              disabled: i,
              textValue: v,
              children: (0, a.jsx)(p.div, {
                role: "option",
                "aria-labelledby": E,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": h && g,
                "data-state": h ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...c,
                ref: b,
                onFocus: s(c.onFocus, (() => y(!0))),
                onBlur: s(c.onBlur, (() => y(!1))),
                onPointerUp: s(c.onPointerUp, w),
                onPointerMove: s(c.onPointerMove, (e => {
                  i ? f.onItemLeave?.() : e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: s(c.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && f.onItemLeave?.()
                })),
                onKeyDown: s(c.onKeyDown, (e => {
                  "" !== f.searchRef?.current && " " === e.key || (G.includes(e.key) && w(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      Ce.displayName = _e;
      var Le = "SelectItemText";
      r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          className: i,
          style: s,
          ...l
        } = e, c = Q(Le, n), d = de(Le, n), f = Se(Le, n), h = te(Le, n), [v, m] = r.useState(null), g = u(t, (e => m(e)), f.onItemTextChange, (e => d.itemTextRefCallback?.(e, f.value, f.disabled))), y = v?.textContent, b = r.useMemo((() => (0, a.jsx)("option", {
          value: f.value,
          disabled: f.disabled,
          children: y
        }, f.value)), [f.disabled, f.value, y]), {
          onNativeOptionAdd: E,
          onNativeOptionRemove: w
        } = h;
        return (0, N.N)((() => (E(b), () => w(b))), [E, w, b]), (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(p.span, {
            id: f.textId,
            ...l,
            ref: g
          }), f.isSelected && c.valueNode && !c.valueNodeHasChildren ? o.createPortal(l.children, c.valueNode) : null]
        })
      })).displayName = Le;
      var xe = "SelectItemIndicator";
      r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return Se(xe, n).isSelected ? (0, a.jsx)(p.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = xe;
      var Ae = "SelectScrollUpButton";
      r.forwardRef(((e, t) => {
        const n = de(Ae, e.__scopeSelect),
          o = me(Ae, e.__scopeSelect),
          [i, s] = r.useState(!1),
          l = u(t, o.onScrollButtonChange);
        return (0, N.N)((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), i ? (0, a.jsx)(Oe, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      })).displayName = Ae;
      var Me = "SelectScrollDownButton";
      r.forwardRef(((e, t) => {
        const n = de(Me, e.__scopeSelect),
          o = me(Me, e.__scopeSelect),
          [i, s] = r.useState(!1),
          l = u(t, o.onScrollButtonChange);
        return (0, N.N)((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              s(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), i ? (0, a.jsx)(Oe, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      })).displayName = Me;
      var Oe = r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: o,
          ...i
        } = e, l = de("SelectScrollButton", n), c = r.useRef(null), u = z(n), d = r.useCallback((() => {
          null !== c.current && (window.clearInterval(c.current), c.current = null)
        }), []);
        return r.useEffect((() => () => d()), [d]), (0, N.N)((() => {
          const e = u().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [u]), (0, a.jsx)(p.div, {
          "aria-hidden": !0,
          ...i,
          ref: t,
          style: {
            flexShrink: 0,
            ...i.style
          },
          onPointerDown: s(i.onPointerDown, (() => {
            null === c.current && (c.current = window.setInterval(o, 50))
          })),
          onPointerMove: s(i.onPointerMove, (() => {
            l.onItemLeave?.(), null === c.current && (c.current = window.setInterval(o, 50))
          })),
          onPointerLeave: s(i.onPointerLeave, (() => {
            d()
          }))
        })
      }));
      r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, a.jsx)(p.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var ke = "SelectArrow";

      function Ie(e) {
        return "" === e || void 0 === e
      }
      r.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Z(n), i = Q(ke, n), s = de(ke, n);
        return i.open && "popper" === s.position ? (0, a.jsx)(H.i3, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = ke;
      var Re = r.forwardRef(((e, t) => {
        const {
          value: n,
          ...o
        } = e, i = r.useRef(null), s = u(t, i), l = (0, F.Z)(n);
        return r.useEffect((() => {
          const e = i.current,
            t = window.HTMLSelectElement.prototype,
            r = Object.getOwnPropertyDescriptor(t, "value").set;
          if (l !== n && r) {
            const t = new Event("change", {
              bubbles: !0
            });
            r.call(e, n), e.dispatchEvent(t)
          }
        }), [l, n]), (0, a.jsx)(U, {
          asChild: !0,
          children: (0, a.jsx)("select", {
            ...o,
            ref: s,
            defaultValue: n
          })
        })
      }));

      function He(e) {
        const t = (0, v.c)(e),
          n = r.useRef(""),
          o = r.useRef(0),
          i = r.useCallback((e => {
            const r = n.current + e;
            t(r),
              function e(t) {
                n.current = t, window.clearTimeout(o.current), "" !== t && (o.current = window.setTimeout((() => e("")), 1e3))
              }(r)
          }), [t]),
          s = r.useCallback((() => {
            n.current = "", window.clearTimeout(o.current)
          }), []);
        return r.useEffect((() => () => window.clearTimeout(o.current)), []), [n, i, s]
      }

      function Ne(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map(((e, t) => s[(a + t) % s.length])));
        var s, a;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      Re.displayName = "BubbleSelect";
      var De = ne,
        Be = oe,
        Fe = se,
        Ue = le,
        je = ye,
        Ke = Ce
    },
    57829: (e, t, n) => {
      n.d(t, {
        Q6: () => W,
        bL: () => V,
        zi: () => X,
        CC: () => G
      });
      var r = n(62229),
        o = n(72213);

      function i(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function s(...e) {
        return r.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var a = n(73855);

      function l(e, t = []) {
        let n = [];
        const o = () => {
          const t = n.map((e => r.createContext(e)));
          return function(n) {
            const o = n?.[e] || t;
            return r.useMemo((() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: o
              }
            })), [n, o])
          }
        };
        return o.scopeName = e, [function(t, o) {
          const i = r.createContext(o),
            s = n.length;

          function l(t) {
            const {
              scope: n,
              children: o,
              ...l
            } = t, c = n?.[e][s] || i, u = r.useMemo((() => l), Object.values(l));
            return (0, a.jsx)(c.Provider, {
              value: u,
              children: o
            })
          }
          return n = [...n, o], l.displayName = t + "Provider", [l, function(n, a) {
            const l = a?.[e][s] || i,
              c = r.useContext(l);
            if (c) return c;
            if (void 0 !== o) return o;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, c(o, ...t)]
      }

      function c(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${t.scopeName}`]: o
            })), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var u = n(48087),
        d = n(59219),
        f = n(15485),
        h = n(27977),
        p = (n(44853), n(11735)),
        v = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = r.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, i = r ? p.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        m = ["PageUp", "PageDown"],
        g = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        y = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        b = "Slider",
        [E, w, T] = function(e) {
          const t = e + "CollectionProvider",
            [n, o] = l(t),
            [i, c] = n(t, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            u = e => {
              const {
                scope: t,
                children: n
              } = e, o = r.useRef(null), s = r.useRef(new Map).current;
              return (0, a.jsx)(i, {
                scope: t,
                itemMap: s,
                collectionRef: o,
                children: n
              })
            };
          u.displayName = t;
          const d = e + "CollectionSlot",
            f = r.forwardRef(((e, t) => {
              const {
                scope: n,
                children: r
              } = e, o = s(t, c(d, n).collectionRef);
              return (0, a.jsx)(p.DX, {
                ref: o,
                children: r
              })
            }));
          f.displayName = d;
          const h = e + "CollectionItemSlot",
            v = "data-radix-collection-item",
            m = r.forwardRef(((e, t) => {
              const {
                scope: n,
                children: o,
                ...i
              } = e, l = r.useRef(null), u = s(t, l), d = c(h, n);
              return r.useEffect((() => (d.itemMap.set(l, {
                ref: l,
                ...i
              }), () => {
                d.itemMap.delete(l)
              }))), (0, a.jsx)(p.DX, {
                [v]: "",
                ref: u,
                children: o
              })
            }));
          return m.displayName = h, [{
            Provider: u,
            Slot: f,
            ItemSlot: m
          }, function(t) {
            const n = c(e + "CollectionConsumer", t);
            return r.useCallback((() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${v}]`));
              return Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)))
            }), [n.collectionRef, n.itemMap])
          }, o]
        }(b),
        [_, P] = l(b, [T]),
        [S, C] = _(b),
        L = r.forwardRef(((e, t) => {
          const {
            name: n,
            min: s = 0,
            max: l = 100,
            step: c = 1,
            orientation: d = "horizontal",
            disabled: f = !1,
            minStepsBetweenThumbs: h = 0,
            defaultValue: p = [s],
            value: v,
            onValueChange: y = (() => {}),
            onValueCommit: b = (() => {}),
            inverted: w = !1,
            ...T
          } = e, _ = r.useRef(new Set), P = r.useRef(0), C = "horizontal" === d ? M : O, [L = [], x] = (0, u.i)({
            prop: v,
            defaultProp: p,
            onChange: e => {
              const t = [..._.current];
              t[P.current]?.focus(), y(e)
            }
          }), A = r.useRef(L);

          function k(e, t, {
            commit: n
          } = {
            commit: !1
          }) {
            const r = function(e) {
                return (String(e).split(".")[1] || "").length
              }(c),
              i = function(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
              }(Math.round((e - s) / c) * c + s, r),
              a = (0, o.q)(i, [s, l]);
            x(((e = []) => {
              const r = function(e = [], t, n) {
                const r = [...e];
                return r[n] = t, r.sort(((e, t) => e - t))
              }(e, a, t);
              if (function(e, t) {
                  if (t > 0) {
                    const n = function(e) {
                      return e.slice(0, -1).map(((t, n) => e[n + 1] - t))
                    }(e);
                    return Math.min(...n) >= t
                  }
                  return !0
                }(r, h * c)) {
                P.current = r.indexOf(a);
                const t = String(r) !== String(e);
                return t && n && b(r), t ? r : e
              }
              return e
            }))
          }
          return (0, a.jsx)(S, {
            scope: e.__scopeSlider,
            name: n,
            disabled: f,
            min: s,
            max: l,
            valueIndexToChangeRef: P,
            thumbs: _.current,
            values: L,
            orientation: d,
            children: (0, a.jsx)(E.Provider, {
              scope: e.__scopeSlider,
              children: (0, a.jsx)(E.Slot, {
                scope: e.__scopeSlider,
                children: (0, a.jsx)(C, {
                  "aria-disabled": f,
                  "data-disabled": f ? "" : void 0,
                  ...T,
                  ref: t,
                  onPointerDown: i(T.onPointerDown, (() => {
                    f || (A.current = L)
                  })),
                  min: s,
                  max: l,
                  inverted: w,
                  onSlideStart: f ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const n = e.map((e => Math.abs(e - t))),
                        r = Math.min(...n);
                      return n.indexOf(r)
                    }(L, e);
                    k(e, t)
                  },
                  onSlideMove: f ? void 0 : function(e) {
                    k(e, P.current)
                  },
                  onSlideEnd: f ? void 0 : function() {
                    const e = A.current[P.current];
                    L[P.current] !== e && b(L)
                  },
                  onHomeKeyDown: () => !f && k(s, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !f && k(l, L.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!f) {
                      const n = m.includes(e.key) || e.shiftKey && g.includes(e.key) ? 10 : 1,
                        r = P.current;
                      k(L[r] + c * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      L.displayName = b;
      var [x, A] = _(b, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), M = r.forwardRef(((e, t) => {
        const {
          min: n,
          max: o,
          dir: i,
          inverted: l,
          onSlideStart: c,
          onSlideMove: u,
          onSlideEnd: f,
          onStepKeyDown: h,
          ...p
        } = e, [v, m] = r.useState(null), g = s(t, (e => m(e))), b = r.useRef(), E = (0, d.jH)(i), w = "ltr" === E, T = w && !l || !w && l;

        function _(e) {
          const t = b.current || v.getBoundingClientRect(),
            r = K([0, t.width], T ? [n, o] : [o, n]);
          return b.current = t, r(e - t.left)
        }
        return (0, a.jsx)(x, {
          scope: e.__scopeSlider,
          startEdge: T ? "left" : "right",
          endEdge: T ? "right" : "left",
          direction: T ? 1 : -1,
          size: "width",
          children: (0, a.jsx)(k, {
            dir: E,
            "data-orientation": "horizontal",
            ...p,
            ref: g,
            style: {
              ...p.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = _(e.clientX);
              c?.(t)
            },
            onSlideMove: e => {
              const t = _(e.clientX);
              u?.(t)
            },
            onSlideEnd: () => {
              b.current = void 0, f?.()
            },
            onStepKeyDown: e => {
              const t = y[T ? "from-left" : "from-right"].includes(e.key);
              h?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), O = r.forwardRef(((e, t) => {
        const {
          min: n,
          max: o,
          inverted: i,
          onSlideStart: l,
          onSlideMove: c,
          onSlideEnd: u,
          onStepKeyDown: d,
          ...f
        } = e, h = r.useRef(null), p = s(t, h), v = r.useRef(), m = !i;

        function g(e) {
          const t = v.current || h.current.getBoundingClientRect(),
            r = K([0, t.height], m ? [o, n] : [n, o]);
          return v.current = t, r(e - t.top)
        }
        return (0, a.jsx)(x, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, a.jsx)(k, {
            "data-orientation": "vertical",
            ...f,
            ref: p,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = g(e.clientY);
              l?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientY);
              c?.(t)
            },
            onSlideEnd: () => {
              v.current = void 0, u?.()
            },
            onStepKeyDown: e => {
              const t = y[m ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), k = r.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: l,
          onEndKeyDown: c,
          onStepKeyDown: u,
          ...d
        } = e, f = C(b, n);
        return (0, a.jsx)(v.span, {
          ...d,
          ref: t,
          onKeyDown: i(e.onKeyDown, (e => {
            "Home" === e.key ? (l(e), e.preventDefault()) : "End" === e.key ? (c(e), e.preventDefault()) : m.concat(g).includes(e.key) && (u(e), e.preventDefault())
          })),
          onPointerDown: i(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), f.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: i(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: i(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
          }))
        })
      })), I = "SliderTrack", R = r.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = C(I, n);
        return (0, a.jsx)(v.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      R.displayName = I;
      var H = "SliderRange",
        N = r.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...o
          } = e, i = C(H, n), l = A(H, n), c = s(t, r.useRef(null)), u = i.values.length, d = i.values.map((e => j(e, i.min, i.max))), f = u > 1 ? Math.min(...d) : 0, h = 100 - Math.max(...d);
          return (0, a.jsx)(v.span, {
            "data-orientation": i.orientation,
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: c,
            style: {
              ...e.style,
              [l.startEdge]: f + "%",
              [l.endEdge]: h + "%"
            }
          })
        }));
      N.displayName = H;
      var D = "SliderThumb",
        B = r.forwardRef(((e, t) => {
          const n = w(e.__scopeSlider),
            [o, i] = r.useState(null),
            l = s(t, (e => i(e))),
            c = r.useMemo((() => o ? n().findIndex((e => e.ref.current === o)) : -1), [n, o]);
          return (0, a.jsx)(F, {
            ...e,
            ref: l,
            index: c
          })
        })),
        F = r.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: o,
            name: l,
            ...c
          } = e, u = C(D, n), d = A(D, n), [f, p] = r.useState(null), m = s(t, (e => p(e))), g = !f || Boolean(f.closest("form")), y = (0, h.X)(f), b = u.values[o], w = void 0 === b ? 0 : j(b, u.min, u.max), T = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(o, u.values.length), _ = y?.[d.size], P = _ ? function(e, t, n) {
            const r = e / 2;
            return (r - K([0, 50], [0, r])(t) * n) * n
          }(_, w, d.direction) : 0;
          return r.useEffect((() => {
            if (f) return u.thumbs.add(f), () => {
              u.thumbs.delete(f)
            }
          }), [f, u.thumbs]), (0, a.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [d.startEdge]: `calc(${w}% + ${P}px)`
            },
            children: [(0, a.jsx)(E.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, a.jsx)(v.span, {
                role: "slider",
                "aria-label": e["aria-label"] || T,
                "aria-valuemin": u.min,
                "aria-valuenow": b,
                "aria-valuemax": u.max,
                "aria-orientation": u.orientation,
                "data-orientation": u.orientation,
                "data-disabled": u.disabled ? "" : void 0,
                tabIndex: u.disabled ? void 0 : 0,
                ...c,
                ref: m,
                style: void 0 === b ? {
                  display: "none"
                } : e.style,
                onFocus: i(e.onFocus, (() => {
                  u.valueIndexToChangeRef.current = o
                }))
              })
            }), g && (0, a.jsx)(U, {
              name: l ?? (u.name ? u.name + (u.values.length > 1 ? "[]" : "") : void 0),
              value: b
            }, o)]
          })
        }));
      B.displayName = D;
      var U = e => {
        const {
          value: t,
          ...n
        } = e, o = r.useRef(null), i = (0, f.Z)(t);
        return r.useEffect((() => {
          const e = o.current,
            n = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (i !== t && r) {
            const n = new Event("input", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }), [i, t]), (0, a.jsx)("input", {
          style: {
            display: "none"
          },
          ...n,
          ref: o,
          defaultValue: t
        })
      };

      function j(e, t, n) {
        const r = 100 / (n - t) * (e - t);
        return (0, o.q)(r, [0, 100])
      }

      function K(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      var V = L,
        G = R,
        W = N,
        X = B
    },
    94466: (e, t, n) => {
      n.d(t, {
        i3: () => se,
        UC: () => ie,
        ZL: () => oe,
        Kq: () => te,
        bL: () => ne,
        l9: () => re
      });
      var r = n(62229);

      function o(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function i(...e) {
        return r.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var s = n(73855);

      function a(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${t.scopeName}`]: o
            })), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var l, c = n(44853),
        u = n(11735),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = r.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, i = r ? u.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(i, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        f = n(26727),
        h = n(62865),
        p = "dismissableLayer.update",
        v = r.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        m = r.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: c,
            onFocusOutside: u,
            onInteractOutside: m,
            onDismiss: b,
            ...E
          } = e, w = r.useContext(v), [T, _] = r.useState(null), P = T?.ownerDocument ?? globalThis?.document, [, S] = r.useState({}), C = i(t, (e => _(e))), L = Array.from(w.layers), [x] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1), A = L.indexOf(x), M = T ? L.indexOf(T) : -1, O = w.layersWithOutsidePointerEventsDisabled.size > 0, k = M >= A, I = function(e, t = globalThis?.document) {
            const n = (0, f.c)(e),
              o = r.useRef(!1),
              i = r.useRef((() => {}));
            return r.useEffect((() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let r = function() {
                      y("dismissableLayer.pointerDownOutside", n, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", i.current);
                  o.current = !1
                },
                r = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(r), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => o.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...w.branches].some((e => e.contains(t)));
            k && !n && (c?.(e), m?.(e), e.defaultPrevented || b?.())
          }), P), R = function(e, t = globalThis?.document) {
            const n = (0, f.c)(e),
              o = r.useRef(!1);
            return r.useEffect((() => {
              const e = e => {
                e.target && !o.current && y("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, n]), {
              onFocusCapture: () => o.current = !0,
              onBlurCapture: () => o.current = !1
            }
          }((e => {
            const t = e.target;
            [...w.branches].some((e => e.contains(t))) || (u?.(e), m?.(e), e.defaultPrevented || b?.())
          }), P);
          return (0, h.U)((e => {
            M === w.layers.size - 1 && (a?.(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
          }), P), r.useEffect((() => {
            if (T) return n && (0 === w.layersWithOutsidePointerEventsDisabled.size && (l = P.body.style.pointerEvents, P.body.style.pointerEvents = "none"), w.layersWithOutsidePointerEventsDisabled.add(T)), w.layers.add(T), g(), () => {
              n && 1 === w.layersWithOutsidePointerEventsDisabled.size && (P.body.style.pointerEvents = l)
            }
          }), [T, P, n, w]), r.useEffect((() => () => {
            T && (w.layers.delete(T), w.layersWithOutsidePointerEventsDisabled.delete(T), g())
          }), [T, w]), r.useEffect((() => {
            const e = () => S({});
            return document.addEventListener(p, e), () => document.removeEventListener(p, e)
          }), []), (0, s.jsx)(d.div, {
            ...E,
            ref: C,
            style: {
              pointerEvents: O ? k ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: o(e.onFocusCapture, R.onFocusCapture),
            onBlurCapture: o(e.onBlurCapture, R.onBlurCapture),
            onPointerDownCapture: o(e.onPointerDownCapture, I.onPointerDownCapture)
          })
        }));

      function g() {
        const e = new CustomEvent(p);
        document.dispatchEvent(e)
      }

      function y(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? function(e, t) {
          e && c.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      m.displayName = "DismissableLayer", r.forwardRef(((e, t) => {
        const n = r.useContext(v),
          o = r.useRef(null),
          a = i(t, o);
        return r.useEffect((() => {
          const e = o.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, s.jsx)(d.div, {
          ...e,
          ref: a
        })
      })).displayName = "DismissableLayerBranch";
      var b = n(95187),
        E = n(94767),
        w = n(92600),
        T = r.forwardRef(((e, t) => {
          const {
            container: n,
            ...o
          } = e, [i, a] = r.useState(!1);
          (0, w.N)((() => a(!0)), []);
          const l = n || i && globalThis?.document?.body;
          return l ? c.createPortal((0, s.jsx)(d.div, {
            ...o,
            ref: t
          }), l) : null
        }));
      T.displayName = "Portal";
      var _ = e => {
        const {
          present: t,
          children: n
        } = e, o = function(e) {
          const [t, n] = r.useState(), o = r.useRef({}), i = r.useRef(e), s = r.useRef("none"), a = e ? "mounted" : "unmounted", [l, u] = function(e, t) {
            return r.useReducer(((e, n) => t[e][n] ?? e), e)
          }(a, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted"
            },
            unmounted: {
              MOUNT: "mounted"
            }
          });
          return r.useEffect((() => {
            const e = P(o.current);
            s.current = "mounted" === l ? e : "none"
          }), [l]), (0, w.N)((() => {
            const t = o.current,
              n = i.current;
            if (n !== e) {
              const r = s.current,
                o = P(t);
              u(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
            }
          }), [e, u]), (0, w.N)((() => {
            if (t) {
              const e = e => {
                  const n = P(o.current).includes(e.animationName);
                  e.target === t && n && c.flushSync((() => u("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (s.current = P(o.current))
                };
              return t.addEventListener("animationstart", n), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
              }
            }
            u("ANIMATION_END")
          }), [t, u]), {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: r.useCallback((e => {
              e && (o.current = getComputedStyle(e)), n(e)
            }), [])
          }
        }(t), s = "function" == typeof n ? n({
          present: o.isPresent
        }) : r.Children.only(n), a = i(o.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(s));
        return "function" == typeof n || o.isPresent ? r.cloneElement(s, {
          ref: a
        }) : null
      };

      function P(e) {
        return e?.animationName || "none"
      }
      _.displayName = "Presence";
      var S = n(48087),
        C = r.forwardRef(((e, t) => (0, s.jsx)(d.span, {
          ...e,
          ref: t,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
          }
        })));
      C.displayName = "VisuallyHidden";
      var L = C,
        [x, A] = function(e, t = []) {
          let n = [];
          const o = () => {
            const t = n.map((e => r.createContext(e)));
            return function(n) {
              const o = n?.[e] || t;
              return r.useMemo((() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: o
                }
              })), [n, o])
            }
          };
          return o.scopeName = e, [function(t, o) {
            const i = r.createContext(o),
              a = n.length;

            function l(t) {
              const {
                scope: n,
                children: o,
                ...l
              } = t, c = n?.[e][a] || i, u = r.useMemo((() => l), Object.values(l));
              return (0, s.jsx)(c.Provider, {
                value: u,
                children: o
              })
            }
            return n = [...n, o], l.displayName = t + "Provider", [l, function(n, s) {
              const l = s?.[e][a] || i,
                c = r.useContext(l);
              if (c) return c;
              if (void 0 !== o) return o;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, a(o, ...t)]
        }("Tooltip", [E.Bk]),
        M = (0, E.Bk)(),
        O = "TooltipProvider",
        k = 700,
        I = "tooltip.open",
        [R, H] = x(O),
        N = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = k,
            skipDelayDuration: o = 300,
            disableHoverableContent: i = !1,
            children: a
          } = e, [l, c] = r.useState(!0), u = r.useRef(!1), d = r.useRef(0);
          return r.useEffect((() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }), []), (0, s.jsx)(R, {
            scope: t,
            isOpenDelayed: l,
            delayDuration: n,
            onOpen: r.useCallback((() => {
              window.clearTimeout(d.current), c(!1)
            }), []),
            onClose: r.useCallback((() => {
              window.clearTimeout(d.current), d.current = window.setTimeout((() => c(!0)), o)
            }), [o]),
            isPointerInTransitRef: u,
            onPointerInTransitChange: r.useCallback((e => {
              u.current = e
            }), []),
            disableHoverableContent: i,
            children: a
          })
        };
      N.displayName = O;
      var D = "Tooltip",
        [B, F] = x(D),
        U = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: o,
            defaultOpen: i = !1,
            onOpenChange: a,
            disableHoverableContent: l,
            delayDuration: c
          } = e, u = H(D, e.__scopeTooltip), d = M(t), [f, h] = r.useState(null), p = (0, b.B)(), v = r.useRef(0), m = l ?? u.disableHoverableContent, g = c ?? u.delayDuration, y = r.useRef(!1), [w = !1, T] = (0, S.i)({
            prop: o,
            defaultProp: i,
            onChange: e => {
              e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(I))) : u.onClose(), a?.(e)
            }
          }), _ = r.useMemo((() => w ? y.current ? "delayed-open" : "instant-open" : "closed"), [w]), P = r.useCallback((() => {
            window.clearTimeout(v.current), y.current = !1, T(!0)
          }), [T]), C = r.useCallback((() => {
            window.clearTimeout(v.current), T(!1)
          }), [T]), L = r.useCallback((() => {
            window.clearTimeout(v.current), v.current = window.setTimeout((() => {
              y.current = !0, T(!0)
            }), g)
          }), [g, T]);
          return r.useEffect((() => () => window.clearTimeout(v.current)), []), (0, s.jsx)(E.bL, {
            ...d,
            children: (0, s.jsx)(B, {
              scope: t,
              contentId: p,
              open: w,
              stateAttribute: _,
              trigger: f,
              onTriggerChange: h,
              onTriggerEnter: r.useCallback((() => {
                u.isOpenDelayed ? L() : P()
              }), [u.isOpenDelayed, L, P]),
              onTriggerLeave: r.useCallback((() => {
                m ? C() : window.clearTimeout(v.current)
              }), [C, m]),
              onOpen: P,
              onClose: C,
              disableHoverableContent: m,
              children: n
            })
          })
        };
      U.displayName = D;
      var j = "TooltipTrigger",
        K = r.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...a
          } = e, l = F(j, n), c = H(j, n), u = M(n), f = i(t, r.useRef(null), l.onTriggerChange), h = r.useRef(!1), p = r.useRef(!1), v = r.useCallback((() => h.current = !1), []);
          return r.useEffect((() => () => document.removeEventListener("pointerup", v)), [v]), (0, s.jsx)(E.Mz, {
            asChild: !0,
            ...u,
            children: (0, s.jsx)(d.button, {
              "aria-describedby": l.open ? l.contentId : void 0,
              "data-state": l.stateAttribute,
              ...a,
              ref: f,
              onPointerMove: o(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (p.current || c.isPointerInTransitRef.current || (l.onTriggerEnter(), p.current = !0))
              })),
              onPointerLeave: o(e.onPointerLeave, (() => {
                l.onTriggerLeave(), p.current = !1
              })),
              onPointerDown: o(e.onPointerDown, (() => {
                h.current = !0, document.addEventListener("pointerup", v, {
                  once: !0
                })
              })),
              onFocus: o(e.onFocus, (() => {
                h.current || l.onOpen()
              })),
              onBlur: o(e.onBlur, l.onClose),
              onClick: o(e.onClick, l.onClose)
            })
          })
        }));
      K.displayName = j;
      var V = "TooltipPortal",
        [G, W] = x(V, {
          forceMount: void 0
        }),
        X = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = F(V, t);
          return (0, s.jsx)(G, {
            scope: t,
            forceMount: n,
            children: (0, s.jsx)(_, {
              present: n || i.open,
              children: (0, s.jsx)(T, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      X.displayName = V;
      var z = "TooltipContent",
        $ = r.forwardRef(((e, t) => {
          const n = W(z, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = F(z, e.__scopeTooltip);
          return (0, s.jsx)(_, {
            present: r || a.open,
            children: a.disableHoverableContent ? (0, s.jsx)(J, {
              side: o,
              ...i,
              ref: t
            }) : (0, s.jsx)(Y, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        Y = r.forwardRef(((e, t) => {
          const n = F(z, e.__scopeTooltip),
            o = H(z, e.__scopeTooltip),
            a = r.useRef(null),
            l = i(t, a),
            [c, u] = r.useState(null),
            {
              trigger: d,
              onClose: f
            } = n,
            h = a.current,
            {
              onPointerInTransitChange: p
            } = o,
            v = r.useCallback((() => {
              u(null), p(!1)
            }), [p]),
            m = r.useCallback(((e, t) => {
              const n = e.currentTarget,
                r = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, n = 5) {
                  const r = [];
                  switch (t) {
                    case "top":
                      r.push({
                        x: e.x - n,
                        y: e.y + n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "bottom":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y - n
                      });
                      break;
                    case "left":
                      r.push({
                        x: e.x + n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "right":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x - n,
                        y: e.y + n
                      })
                  }
                  return r
                }(r, function(e, t) {
                  const n = Math.abs(t.top - e.y),
                    r = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(n, r, o, i)) {
                    case i:
                      return "left";
                    case o:
                      return "right";
                    case n:
                      return "top";
                    case r:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(r, n.getBoundingClientRect())),
                i = function(e) {
                  const t = e.slice();
                  return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            n = t[t.length - 2];
                          if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                          t.pop()
                        }
                        t.push(r)
                      }
                      t.pop();
                      const n = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const r = e[t];
                        for (; n.length >= 2;) {
                          const e = n[n.length - 1],
                            t = n[n.length - 2];
                          if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                          n.pop()
                        }
                        n.push(r)
                      }
                      return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: n,
                    bottom: r,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: n,
                    y: t
                  }, {
                    x: n,
                    y: r
                  }, {
                    x: o,
                    y: r
                  }]
                }(t.getBoundingClientRect())]);
              u(i), p(!0)
            }), [p]);
          return r.useEffect((() => () => v()), [v]), r.useEffect((() => {
            if (d && h) {
              const e = e => m(e, h),
                t = e => m(e, d);
              return d.addEventListener("pointerleave", e), h.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), h.removeEventListener("pointerleave", t)
              }
            }
          }), [d, h, m, v]), r.useEffect((() => {
            if (c) {
              const e = e => {
                const t = e.target,
                  n = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = d?.contains(t) || h?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: n,
                      y: r
                    } = e;
                    let o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const s = t[e].x,
                        a = t[e].y,
                        l = t[i].x,
                        c = t[i].y;
                      a > r != c > r && n < (l - s) * (r - a) / (c - a) + s && (o = !o)
                    }
                    return o
                  }(n, c);
                r ? v() : o && (v(), f())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [d, h, c, f, v]), (0, s.jsx)(J, {
            ...e,
            ref: l
          })
        })),
        [q, Z] = x(D, {
          isInside: !1
        }),
        J = r.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: o,
            "aria-label": i,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            ...c
          } = e, d = F(z, n), f = M(n), {
            onClose: h
          } = d;
          return r.useEffect((() => (document.addEventListener(I, h), () => document.removeEventListener(I, h))), [h]), r.useEffect((() => {
            if (d.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(d.trigger) && h()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [d.trigger, h]), (0, s.jsx)(m, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: h,
            children: (0, s.jsxs)(E.UC, {
              "data-state": d.stateAttribute,
              ...f,
              ...c,
              ref: t,
              style: {
                ...c.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, s.jsx)(u.xV, {
                children: o
              }), (0, s.jsx)(q, {
                scope: n,
                isInside: !0,
                children: (0, s.jsx)(L, {
                  id: d.contentId,
                  role: "tooltip",
                  children: i || o
                })
              })]
            })
          })
        }));
      $.displayName = z;
      var Q = "TooltipArrow",
        ee = r.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = M(n);
          return Z(Q, n).isInside ? null : (0, s.jsx)(E.i3, {
            ...o,
            ...r,
            ref: t
          })
        }));
      ee.displayName = Q;
      var te = N,
        ne = U,
        re = K,
        oe = X,
        ie = $,
        se = ee
    },
    26727: (e, t, n) => {
      n.d(t, {
        c: () => o
      });
      var r = n(62229);

      function o(e) {
        const t = r.useRef(e);
        return r.useEffect((() => {
          t.current = e
        })), r.useMemo((() => (...e) => t.current?.(...e)), [])
      }
    },
    48087: (e, t, n) => {
      n.d(t, {
        i: () => i
      });
      var r = n(62229),
        o = n(26727);

      function i({
        prop: e,
        defaultProp: t,
        onChange: n = (() => {})
      }) {
        const [i, s] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = r.useState(e),
            [i] = n,
            s = r.useRef(i),
            a = (0, o.c)(t);
          return r.useEffect((() => {
            s.current !== i && (a(i), s.current = i)
          }), [i, s, a]), n
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, l = a ? e : i, c = (0, o.c)(n);
        return [l, r.useCallback((t => {
          if (a) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && c(n)
          } else s(t)
        }), [a, e, s, c])]
      }
    },
    62865: (e, t, n) => {
      n.d(t, {
        U: () => i
      });
      var r = n(62229),
        o = n(26727);

      function i(e, t = globalThis?.document) {
        const n = (0, o.c)(e);
        r.useEffect((() => {
          const e = e => {
            "Escape" === e.key && n(e)
          };
          return t.addEventListener("keydown", e, {
            capture: !0
          }), () => t.removeEventListener("keydown", e, {
            capture: !0
          })
        }), [n, t])
      }
    },
    92600: (e, t, n) => {
      n.d(t, {
        N: () => o
      });
      var r = n(62229),
        o = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {}
    },
    15485: (e, t, n) => {
      n.d(t, {
        Z: () => o
      });
      var r = n(62229);

      function o(e) {
        const t = r.useRef({
          value: e,
          previous: e
        });
        return r.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
    },
    27977: (e, t, n) => {
      n.d(t, {
        X: () => i
      });
      var r = n(62229),
        o = n(92600);

      function i(e) {
        const [t, n] = r.useState(void 0);
        return (0, o.N)((() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver((t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const r = t[0];
              let o, i;
              if ("borderBoxSize" in r) {
                const e = r.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, i = t.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              n({
                width: o,
                height: i
              })
            }));
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }), [e]), t
      }
    },
    91472: (e, t, n) => {
      n.d(t, {
        I: () => l
      });
      var r = n(39891),
        o = n(78345),
        i = n(79623),
        s = n(25421),
        a = n(15043);

      function l(e, t) {
        let {
          isCurrent: n,
          isDisabled: l,
          "aria-current": c,
          elementType: u = "a",
          ...d
        } = e, {
          linkProps: f
        } = function(e, t) {
          let {
            elementType: n = "a",
            onPress: l,
            onPressStart: c,
            onPressEnd: u,
            onClick: d,
            isDisabled: f,
            ...h
          } = e, p = {};
          "a" !== n && (p = {
            role: "link",
            tabIndex: f ? void 0 : 0
          });
          let {
            focusableProps: v
          } = (0, s.W)(e, t), {
            pressProps: m,
            isPressed: g
          } = (0, a.d)({
            onPress: l,
            onPressStart: c,
            onPressEnd: u,
            isDisabled: f,
            ref: t
          }), y = (0, r.$)(h, {
            labelable: !0
          }), b = (0, o.v)(v, m), E = (0, i.rd)(), w = (0, i._h)(e);
          return {
            isPressed: g,
            linkProps: (0, o.v)(y, w, {
              ...b,
              ...p,
              "aria-disabled": f || void 0,
              "aria-current": e["aria-current"],
              onClick: t => {
                var n;
                null === (n = m.onClick) || void 0 === n || n.call(m, t), d && (d(t), console.warn("onClick is deprecated, please use onPress")), !E.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && (0, i.sU)(t.currentTarget, t) && e.href && (t.preventDefault(), E.open(t.currentTarget, t, e.href, e.routerOptions))
              }
            })
          }
        }({
          isDisabled: l || n,
          elementType: u,
          ...d
        }, t), h = {};
        return /^h[1-6]$/.test(u) || (h = f), n && (h["aria-current"] = c || "page", h.tabIndex = e.autoFocus ? -1 : void 0), {
          itemProps: {
            "aria-disabled": l,
            ...h
          }
        }
      }
    },
    60308: (e, t, n) => {
      function r(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      n.d(t, {
        s: () => ye
      });
      var o = n(62229);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let i = new Map;

      function s(e, t) {
        if (e === t) return e;
        let n = i.get(e);
        if (n) return n(t), t;
        let r = i.get(t);
        return r ? (r(e), e) : t
      }
      var a = n(5060);

      function l(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let o = e[n];
          for (let e in o) {
            let n = t[e],
              i = o[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = r(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = s(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, a.A)(n, i)
          }
        }
        return t
      }
      const c = new Set(["id"]),
        u = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        d = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        f = /^(data-.*)$/;
      const h = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        p = e => e && "window" in e && e.window === e ? e : h(e).defaultView || window;
      let v = new Map,
        m = new Set;

      function g() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = v.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), v.delete(n.target)), 0 === v.size)) {
            for (let e of m) e();
            m.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = v.get(n.target);
          r || (r = new Set, v.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function y(e) {
        requestAnimationFrame((() => {
          0 === v.size ? e() : m.add(e)
        }))
      }

      function b(e) {
        if (function() {
            if (null == E) {
              E = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return E = !0, !0
                  }
                })
              } catch (e) {}
            }
            return E
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? g() : document.addEventListener("DOMContentLoaded", g));
      let E = null;

      function w(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function T(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function _() {
        return T(/^Mac/i)
      }

      function P() {
        return T(/^iPad/i) || _() && navigator.maxTouchPoints > 1
      }

      function S() {
        return T(/^iPhone/i) || P()
      }

      function C() {
        return w(/Android/i)
      }

      function L(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (C() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let x = null,
        A = new Set,
        M = new Map,
        O = !1,
        k = !1;

      function I(e, t) {
        for (let n of A) n(e, t)
      }

      function R(e) {
        O = !0,
          function(e) {
            return !(e.metaKey || !_() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (x = "keyboard", I("keyboard", e))
      }

      function H(e) {
        x = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (O = !0, I("pointer", e))
      }

      function N(e) {
        L(e) && (O = !0, x = "virtual")
      }

      function D(e) {
        e.target !== window && e.target !== document && (O || k || (x = "virtual", I("virtual", e)), O = !1, k = !1)
      }

      function B() {
        O = !1, k = !0
      }

      function F(e) {
        if ("undefined" == typeof window || M.get(p(e))) return;
        const t = p(e),
          n = h(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          O = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", R, !0), n.addEventListener("keyup", R, !0), n.addEventListener("click", N, !0), t.addEventListener("focus", D, !0), t.addEventListener("blur", B, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", H, !0), n.addEventListener("pointermove", H, !0), n.addEventListener("pointerup", H, !0)) : (n.addEventListener("mousedown", H, !0), n.addEventListener("mousemove", H, !0), n.addEventListener("mouseup", H, !0)), t.addEventListener("beforeunload", (() => {
          U(e)
        }), {
          once: !0
        }), M.set(t, {
          focus: r
        })
      }
      const U = (e, t) => {
        const n = p(e),
          r = h(e);
        t && r.removeEventListener("DOMContentLoaded", t), M.has(n) && (n.HTMLElement.prototype.focus = M.get(n).focus, r.removeEventListener("keydown", R, !0), r.removeEventListener("keyup", R, !0), r.removeEventListener("click", N, !0), n.removeEventListener("focus", D, !0), n.removeEventListener("blur", B, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", H, !0), r.removeEventListener("pointermove", H, !0), r.removeEventListener("pointerup", H, !0)) : (r.removeEventListener("mousedown", H, !0), r.removeEventListener("mousemove", H, !0), r.removeEventListener("mouseup", H, !0)), M.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = h(e);
        let n;
        "loading" !== t.readyState ? F(e) : (n = () => {
          F(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      const j = "undefined" != typeof document ? o.useLayoutEffect : () => {};

      function K(e, t) {
        j((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }

      function V(e) {
        const t = (0, o.useRef)(null);
        return j((() => {
          t.current = e
        }), [e]), (0, o.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      class G {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(e, t) {
          this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
        }
      }

      function W(e) {
        let {
          isDisabled: t,
          onFocus: n,
          onBlur: r,
          onFocusChange: i
        } = e;
        const s = (0, o.useCallback)((e => {
            if (e.target === e.currentTarget) return r && r(e), i && i(!1), !0
          }), [r, i]),
          a = function(e) {
            let t = (0, o.useRef)({
              isFocused: !1,
              observer: null
            });
            j((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let n = V((t => {
              null == e || e(t)
            }));
            return (0, o.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    t.current.isFocused = !1, r.disabled && n(new G("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                r.addEventListener("focusout", o, {
                  once: !0
                }), t.current.observer = new MutationObserver((() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) || void 0 === e || e.disconnect();
                    let n = r === document.activeElement ? null : document.activeElement;
                    r.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: n
                    })), r.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: n
                    }))
                  }
                })), t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [n])
          }(s),
          l = (0, o.useCallback)((e => {
            const t = h(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), i && i(!0), a(e))
          }), [i, n, a]);
        return {
          focusProps: {
            onFocus: !t && (n || i || r) ? l : void 0,
            onBlur: t || !r && !i ? void 0 : s
          }
        }
      }

      function X(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              t = !1
            }
          };
          e(r), t && n.stopPropagation()
        }
      }
      let z = o.createContext(null);

      function $(e, t) {
        let {
          focusProps: n
        } = W(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: X(e.onKeyDown),
              onKeyUp: X(e.onKeyUp)
            }
          }
        }(e), i = l(n, r), s = function(e) {
          let t = (0, o.useContext)(z) || {};
          K(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : s, c = (0, o.useRef)(e.autoFocus);
        return (0, o.useEffect)((() => {
          c.current && t.current && function(e) {
            const t = h(e);
            if ("virtual" === x) {
              let n = t.activeElement;
              y((() => {
                t.activeElement === n && e.isConnected && b(e)
              }))
            } else b(e)
          }(t.current), c.current = !1
        }), [t]), {
          focusableProps: l({
            ...i,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let Y = "default",
        q = "",
        Z = new WeakMap;

      function J(e) {
        if (S()) {
          if ("default" === Y) {
            const t = h(e);
            q = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          Y = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (Z.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function Q(e) {
        if (S()) {
          if ("disabled" !== Y) return;
          Y = "restoring", setTimeout((() => {
            y((() => {
              if ("restoring" === Y) {
                const t = h(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = q || ""), q = "", Y = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Z.has(e)) {
          let t = Z.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Z.delete(e)
        }
      }
      const ee = o.createContext({
        register: () => {}
      });
      ee.displayName = "PressResponderContext";
      var te = n(72621),
        ne = n(82776),
        re = n(81359);

      function oe(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        w(/Firefox/i) && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (_() ? i = !0 : s = !0);
        let c = w(/AppleWebKit/i) && !w(/Chrome/i) && _() && !P() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        oe.isOpening = n, b(e), e.dispatchEvent(c), oe.isOpening = !1
      }
      oe.isOpening = !1;
      var ie = new WeakMap;
      class se {
        continuePropagation() {
          (0, re._)(this, ie, !1)
        }
        get shouldStopPropagation() {
          return (0, te._)(this, ie)
        }
        constructor(e, t, n) {
          (0, ne._)(this, ie, {
            writable: !0,
            value: void 0
          }), (0, re._)(this, ie, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
        }
      }
      const ae = Symbol("linkClicked");

      function le(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: i,
          onPressEnd: s,
          onPressUp: a,
          isDisabled: c,
          isPressed: u,
          preventFocusOnPress: d,
          shouldCancelOnPointerExit: f,
          allowTextSelectionOnPress: v,
          ref: m,
          ...g
        } = function(e) {
          let t = (0, o.useContext)(ee);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = l(r, e), n()
          }
          return K(t, e.ref), e
        }(e), [y, E] = (0, o.useState)(!1), w = (0, o.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          ignoreClickAfterPress: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null
        }), {
          addGlobalListener: T,
          removeAllGlobalListeners: P
        } = function() {
          let e = (0, o.useRef)(new Map),
            t = (0, o.useCallback)(((t, n, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: i,
                options: o
              }), t.addEventListener(n, r, o)
            }), []),
            n = (0, o.useCallback)(((t, n, r, o) => {
              var i;
              let s = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, s, o), e.current.delete(r)
            }), []),
            r = (0, o.useCallback)((() => {
              e.current.forEach(((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              }))
            }), [n]);
          return (0, o.useEffect)((() => r), [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), S = V(((e, t) => {
          let r = w.current;
          if (c || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, i) {
            let n = new se("pressstart", t, e);
            i(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, E(!0), o
        })), x = V(((e, r, o = !0) => {
          let i = w.current;
          if (!i.didFirePressStart) return !1;
          i.ignoreClickAfterPress = !0, i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let a = !0;
          if (s) {
            let t = new se("pressend", r, e);
            s(t), a = t.shouldStopPropagation
          }
          if (n && n(!1), E(!1), t && o && !c) {
            let n = new se("press", r, e);
            t(n), a && (a = n.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, a
        })), A = V(((e, t) => {
          let n = w.current;
          if (c) return !1;
          if (a) {
            n.isTriggeringEvent = !0;
            let r = new se("pressup", t, e);
            return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), M = V((e => {
          let t = w.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && x(fe(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, P(), v || Q(t.target))
        })), O = V((e => {
          f && M(e)
        })), k = (0, o.useMemo)((() => {
          let e = w.current,
            t = {
              onKeyDown(t) {
                if (ue(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var o;
                  ve(t.target, t.key) && t.preventDefault();
                  let i = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, i = S(t, "keyboard");
                    let o = t.currentTarget,
                      s = t => {
                        ue(t, o) && !t.repeat && o.contains(t.target) && e.target && A(fe(e.target, t), "keyboard")
                      };
                    T(h(t.currentTarget), "keyup", r(s, n), !0)
                  }
                  i && t.stopPropagation(), t.metaKey && _() && (null === (o = e.metaKeyEvents) || void 0 === o || o.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !oe.isOpening) {
                  let n = !0;
                  if (c && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || L(t.nativeEvent))) {
                    c || d || b(t.currentTarget);
                    let e = S(t, "virtual"),
                      r = A(t, "virtual"),
                      o = x(t, "virtual");
                    n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && ue(t, e.target)) {
                var r;
                ve(t.target, t.key) && t.preventDefault();
                let n = t.target;
                x(fe(e.target, t), "keyboard", e.target.contains(n)), P(), "Enter" !== t.key && ce(e.target) && e.target.contains(n) && !t[ae] && (t[ae] = !0, oe(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
              if (i = t.nativeEvent, !C() && 0 === i.width && 0 === i.height || 1 === i.width && 1 === i.height && 0 === i.pressure && 0 === i.detail && "mouse" === i.pointerType) return void(e.pointerType = "virtual");
              var i;
              pe(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, c || d || b(t.currentTarget), v || J(e.target), s = S(t, e.pointerType), T(h(t.currentTarget), "pointermove", n, !1), T(h(t.currentTarget), "pointerup", r, !1), T(h(t.currentTarget), "pointercancel", o, !1)), s && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (pe(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && he(t, t.currentTarget) && A(t, e.pointerType || t.pointerType)
            };
            let n = t => {
                t.pointerId === e.activePointerId && (e.target && he(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, S(fe(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, x(fe(e.target, t), e.pointerType, !1), O(t)))
              },
              r = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (he(t, e.target) && null != e.pointerType ? x(fe(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && x(fe(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, P(), v || Q(e.target))
              },
              o = e => {
                M(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && M(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (pe(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = L(t.nativeEvent) ? "virtual" : "mouse", c || d || b(t.currentTarget), S(t, e.pointerType) && t.stopPropagation(), T(h(t.currentTarget), "mouseup", n, !1)))
            }, t.onMouseEnter = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, n = S(t, e.pointerType)), n && t.stopPropagation()
            }, t.onMouseLeave = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, n = x(t, e.pointerType, !1), O(t)), n && t.stopPropagation()
            }, t.onMouseUp = t => {
              t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || A(t, e.pointerType || "mouse"))
            };
            let n = t => {
              0 === t.button && (e.isPressed = !1, P(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && he(t, e.target) && null != e.pointerType ? x(fe(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && x(fe(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", c || d || b(t.currentTarget), v || J(e.target), S(t, e.pointerType) && t.stopPropagation(), T(p(t.currentTarget), "scroll", r, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = de(t.nativeEvent, e.activePointerId),
                r = !0;
              n && he(n, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = S(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = x(t, e.pointerType, !1), O(t)), r && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = de(t.nativeEvent, e.activePointerId),
                r = !0;
              n && he(n, t.currentTarget) && null != e.pointerType ? (A(t, e.pointerType), r = x(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = x(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !v && Q(e.target), P()
            }, t.onTouchCancel = t => {
              t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && M(t))
            };
            let r = t => {
              e.isPressed && t.target.contains(e.target) && M({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && M(e)
            }
          }
          return t
        }), [T, c, d, P, v, M, O, x, S, A]);
        return (0, o.useEffect)((() => () => {
          var e;
          v || Q(null !== (e = w.current.target) && void 0 !== e ? e : void 0)
        }), [v]), {
          isPressed: u || y,
          pressProps: l(g, k)
        }
      }

      function ce(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function ue(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof p(o).HTMLInputElement && !ge(o, n) || o instanceof p(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && ce(o)) && "Enter" !== n)
      }

      function de(e, t) {
        const n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r.identifier === t) return r
        }
        return null
      }

      function fe(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey
        }
      }

      function he(e, t) {
        let n = t.getBoundingClientRect(),
          r = function(e) {
            let t = 0,
              n = 0;
            return void 0 !== e.width ? t = e.width / 2 : void 0 !== e.radiusX && (t = e.radiusX), void 0 !== e.height ? n = e.height / 2 : void 0 !== e.radiusY && (n = e.radiusY), {
              top: e.clientY - n,
              right: e.clientX + t,
              bottom: e.clientY + n,
              left: e.clientX - t
            }
          }(e);
        return i = r, !((o = n).left > i.right || i.left > o.right || o.top > i.bottom || i.top > o.bottom);
        var o, i
      }

      function pe(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function ve(e, t) {
        return e instanceof HTMLInputElement ? !ge(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !ce(e)
      }
      const me = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function ge(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : me.has(e.type)
      }

      function ye(e, t) {
        let n, {
          elementType: r = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: s,
          onPressEnd: a,
          onPressUp: h,
          onPressChange: p,
          preventFocusOnPress: v,
          allowFocusWhenDisabled: m,
          onClick: g,
          href: y,
          target: b,
          rel: E,
          type: w = "button"
        } = e;
        n = "button" === r ? {
          type: w,
          disabled: o
        } : {
          role: "button",
          tabIndex: o ? void 0 : 0,
          href: "a" === r && o ? void 0 : y,
          target: "a" === r ? b : void 0,
          type: "input" === r ? w : void 0,
          disabled: "input" === r ? o : void 0,
          "aria-disabled": o && "input" !== r ? o : void 0,
          rel: "a" === r ? E : void 0
        };
        let {
          pressProps: T,
          isPressed: _
        } = le({
          onPressStart: s,
          onPressEnd: a,
          onPressChange: p,
          onPress: i,
          onPressUp: h,
          isDisabled: o,
          preventFocusOnPress: v,
          ref: t
        }), {
          focusableProps: P
        } = $(e, t);
        m && (P.tabIndex = o ? -1 : P.tabIndex);
        let S = l(P, T, function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            propNames: o
          } = t, i = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (c.has(t) || n && u.has(t) || r && d.has(t) || (null == o ? void 0 : o.has(t)) || f.test(t)) && (i[t] = e[t]);
          return i
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: _,
          buttonProps: l(n, S, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            onClick: e => {
              g && (g(e), console.warn("onClick is deprecated, please use onPress"))
            }
          })
        }
      }
    },
    99880: (e, t, n) => {
      n.d(t, {
        v: () => d
      });
      var r = n(62229),
        o = n(52436),
        i = n(37784),
        s = n(78345),
        a = n(39891),
        l = n(15751),
        c = n(25421),
        u = n(15043);

      function d(e, t, n) {
        let d = (0, i.KZ)({
            ...e,
            value: t.isSelected
          }),
          {
            isInvalid: f,
            validationErrors: h,
            validationDetails: p
          } = d.displayValidation,
          {
            labelProps: v,
            inputProps: m,
            isSelected: g,
            isPressed: y,
            isDisabled: b,
            isReadOnly: E
          } = function(e, t, n) {
            let {
              isDisabled: r = !1,
              isReadOnly: o = !1,
              value: i,
              name: d,
              children: f,
              "aria-label": h,
              "aria-labelledby": p,
              validationState: v = "valid",
              isInvalid: m
            } = e;
            null != f || null != h || null != p || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
            let {
              pressProps: g,
              isPressed: y
            } = (0, u.d)({
              isDisabled: r
            }), {
              pressProps: b,
              isPressed: E
            } = (0, u.d)({
              isDisabled: r || o,
              onPress() {
                t.toggle()
              }
            }), {
              focusableProps: w
            } = (0, c.W)(e, n), T = (0, s.v)(g, w), _ = (0, a.$)(e, {
              labelable: !0
            });
            return (0, l.F)(n, t.isSelected, t.setSelected), {
              labelProps: (0, s.v)(b, {
                onClick: e => e.preventDefault()
              }),
              inputProps: (0, s.v)(_, {
                "aria-invalid": m || "invalid" === v || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": o || void 0,
                onChange: e => {
                  e.stopPropagation(), t.setSelected(e.target.checked)
                },
                disabled: r,
                ...null == i ? {} : {
                  value: i
                },
                name: d,
                type: "checkbox",
                ...T
              }),
              isSelected: t.isSelected,
              isPressed: y || E,
              isDisabled: r,
              isReadOnly: o,
              isInvalid: m || "invalid" === v
            }
          }({
            ...e,
            isInvalid: f
          }, t, n);
        (0, o.X)(e, d, n);
        let {
          isIndeterminate: w,
          isRequired: T,
          validationBehavior: _ = "aria"
        } = e;
        return (0, r.useEffect)((() => {
          n.current && (n.current.indeterminate = !!w)
        })), {
          labelProps: v,
          inputProps: {
            ...m,
            checked: g,
            "aria-required": T && "aria" === _ || void 0,
            required: T && "native" === _
          },
          isSelected: g,
          isPressed: y,
          isDisabled: b,
          isReadOnly: E,
          isInvalid: f,
          validationErrors: h,
          validationDetails: p
        }
      }
    },
    25421: (e, t, n) => {
      n.d(t, {
        W: () => h
      });
      var r = n(47444),
        o = n(77425),
        i = n(97724),
        s = n(59194);
      var a = n(116),
        l = n(78345),
        c = n(62229),
        u = n(54270);

      function d(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              t = !1
            }
          };
          e(r), t && n.stopPropagation()
        }
      }
      let f = c.createContext(null);

      function h(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: o,
            onFocusChange: i
          } = e;
          const s = (0, c.useCallback)((e => {
              if (e.target === e.currentTarget) return o && o(e), i && i(!1), !0
            }), [o, i]),
            a = (0, u.y)(s),
            l = (0, c.useCallback)((e => {
              const t = (0, r.T)(e.target);
              e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), i && i(!0), a(e))
            }), [i, n, a]);
          return {
            focusProps: {
              onFocus: !t && (n || i || o) ? l : void 0,
              onBlur: t || !o && !i ? void 0 : s
            }
          }
        }(e), {
          keyboardProps: h
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: d(e.onKeyDown),
              onKeyUp: d(e.onKeyUp)
            }
          }
        }(e), p = (0, l.v)(n, h), v = function(e) {
          let t = (0, c.useContext)(f) || {};
          (0, a.w)(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), m = e.isDisabled ? {} : v, g = (0, c.useRef)(e.autoFocus);
        return (0, c.useEffect)((() => {
          g.current && t.current && function(e) {
            const t = (0, r.T)(e);
            if ("virtual" === (0, s.ME)()) {
              let n = t.activeElement;
              (0, o.v)((() => {
                t.activeElement === n && e.isConnected && (0, i.e)(e)
              }))
            } else(0, i.e)(e)
          }(t.current), g.current = !1
        }), [t]), {
          focusableProps: (0, l.v)({
            ...p,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, m)
        }
      }
    },
    52436: (e, t, n) => {
      n.d(t, {
        X: () => a
      });
      var r = n(59194),
        o = n(62229),
        i = n(31985),
        s = n(85753);

      function a(e, t, n) {
        let {
          validationBehavior: a,
          focus: c
        } = e;
        (0, i.N)((() => {
          if ("native" === a && (null == n ? void 0 : n.current)) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: l(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let u = (0, s.J)((() => {
            t.resetValidation()
          })),
          d = (0, s.J)((e => {
            var o;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == n || null === (o = n.current) || void 0 === o ? void 0 : o.form;
            var s;
            !e.defaultPrevented && n && i && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let n = e.elements[t];
                if (!n.validity.valid) return n
              }
              return null
            }(i) === n.current && (c ? c() : null === (s = n.current) || void 0 === s || s.focus(), (0, r.Cl)("keyboard")), e.preventDefault()
          })),
          f = (0, s.J)((() => {
            t.commitValidation()
          }));
        (0, o.useEffect)((() => {
          let e = null == n ? void 0 : n.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", d), e.addEventListener("change", f), null == t || t.addEventListener("reset", u), () => {
            e.removeEventListener("invalid", d), e.removeEventListener("change", f), null == t || t.removeEventListener("reset", u)
          }
        }), [n, d, f, u, a])
      }

      function l(e) {
        let t = e.validity;
        return {
          badInput: t.badInput,
          customError: t.customError,
          patternMismatch: t.patternMismatch,
          rangeOverflow: t.rangeOverflow,
          rangeUnderflow: t.rangeUnderflow,
          stepMismatch: t.stepMismatch,
          tooLong: t.tooLong,
          tooShort: t.tooShort,
          typeMismatch: t.typeMismatch,
          valueMissing: t.valueMissing,
          valid: t.valid
        }
      }
    },
    59194: (e, t, n) => {
      n.d(t, {
        Cl: () => E,
        ME: () => b
      });
      var r = n(35362),
        o = n(23908),
        i = n(47444);
      n(62229);
      let s = null,
        a = new Set,
        l = new Map,
        c = !1,
        u = !1;

      function d(e, t) {
        for (let n of a) n(e, t)
      }

      function f(e) {
        c = !0,
          function(e) {
            return !(e.metaKey || !(0, r.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (s = "keyboard", d("keyboard", e))
      }

      function h(e) {
        s = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (c = !0, d("pointer", e))
      }

      function p(e) {
        (0, o.Y)(e) && (c = !0, s = "virtual")
      }

      function v(e) {
        e.target !== window && e.target !== document && (c || u || (s = "virtual", d("virtual", e)), c = !1, u = !1)
      }

      function m() {
        c = !1, u = !0
      }

      function g(e) {
        if ("undefined" == typeof window || l.get((0, i.m)(e))) return;
        const t = (0, i.m)(e),
          n = (0, i.T)(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          c = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", f, !0), n.addEventListener("keyup", f, !0), n.addEventListener("click", p, !0), t.addEventListener("focus", v, !0), t.addEventListener("blur", m, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", h, !0), n.addEventListener("pointermove", h, !0), n.addEventListener("pointerup", h, !0)) : (n.addEventListener("mousedown", h, !0), n.addEventListener("mousemove", h, !0), n.addEventListener("mouseup", h, !0)), t.addEventListener("beforeunload", (() => {
          y(e)
        }), {
          once: !0
        }), l.set(t, {
          focus: r
        })
      }
      const y = (e, t) => {
        const n = (0, i.m)(e),
          r = (0, i.T)(e);
        t && r.removeEventListener("DOMContentLoaded", t), l.has(n) && (n.HTMLElement.prototype.focus = l.get(n).focus, r.removeEventListener("keydown", f, !0), r.removeEventListener("keyup", f, !0), r.removeEventListener("click", p, !0), n.removeEventListener("focus", v, !0), n.removeEventListener("blur", m, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", h, !0), r.removeEventListener("pointermove", h, !0), r.removeEventListener("pointerup", h, !0)) : (r.removeEventListener("mousedown", h, !0), r.removeEventListener("mousemove", h, !0), r.removeEventListener("mouseup", h, !0)), l.delete(n))
      };

      function b() {
        return s
      }

      function E(e) {
        s = e, d(e, null)
      }
      "undefined" != typeof document && function(e) {
        const t = (0, i.T)(e);
        let n;
        "loading" !== t.readyState ? g(e) : (n = () => {
          g(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"])
    },
    15043: (e, t, n) => {
      n.d(t, {
        d: () => C
      });
      var r = n(35362),
        o = n(47444),
        i = n(77425);
      let s = "default",
        a = "",
        l = new WeakMap;

      function c(e) {
        if ((0, r.un)()) {
          if ("default" === s) {
            const t = (0, o.T)(e);
            a = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          s = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (l.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function u(e) {
        if ((0, r.un)()) {
          if ("disabled" !== s) return;
          s = "restoring", setTimeout((() => {
            (0, i.v)((() => {
              if ("restoring" === s) {
                const t = (0, o.T)(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = a || ""), a = "", s = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
          let t = l.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), l.delete(e)
        }
      }
      var d = n(62229);
      const f = d.createContext({
        register: () => {}
      });
      f.displayName = "PressResponderContext";
      var h = n(72621),
        p = n(82776),
        v = n(81359),
        m = n(78345),
        g = n(116);
      var y = n(85753),
        b = n(71734),
        E = n(79623),
        w = n(23908),
        T = n(97724),
        _ = new WeakMap;
      class P {
        continuePropagation() {
          (0, v._)(this, _, !1)
        }
        get shouldStopPropagation() {
          return (0, h._)(this, _)
        }
        constructor(e, t, n, r) {
          var o;
          (0, p._)(this, _, {
            writable: !0,
            value: void 0
          }), (0, v._)(this, _, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, c = 0,
            u = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, u = n.clientY), s && (null != l && null != u ? (a = l - s.left, c = u - s.top) : (a = s.width / 2, c = s.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = c
        }
      }
      const S = Symbol("linkClicked");

      function C(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: i,
          onPressEnd: s,
          onPressUp: a,
          isDisabled: l,
          isPressed: h,
          preventFocusOnPress: p,
          shouldCancelOnPointerExit: v,
          allowTextSelectionOnPress: _,
          ref: C,
          ...N
        } = function(e) {
          let t = (0, d.useContext)(f);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = (0, m.v)(r, e), n()
          }
          return (0, g.w)(t, e.ref), e
        }(e), [D, B] = (0, d.useState)(!1), F = (0, d.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          ignoreClickAfterPress: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null
        }), {
          addGlobalListener: U,
          removeAllGlobalListeners: j
        } = function() {
          let e = (0, d.useRef)(new Map),
            t = (0, d.useCallback)(((t, n, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: i,
                options: o
              }), t.addEventListener(n, r, o)
            }), []),
            n = (0, d.useCallback)(((t, n, r, o) => {
              var i;
              let s = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, s, o), e.current.delete(r)
            }), []),
            r = (0, d.useCallback)((() => {
              e.current.forEach(((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              }))
            }), [n]);
          return (0, d.useEffect)((() => r), [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), K = (0, y.J)(((e, t) => {
          let r = F.current;
          if (l || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, i) {
            let n = new P("pressstart", t, e);
            i(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, B(!0), o
        })), V = (0, y.J)(((e, r, o = !0) => {
          let i = F.current;
          if (!i.didFirePressStart) return !1;
          i.ignoreClickAfterPress = !0, i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let a = !0;
          if (s) {
            let t = new P("pressend", r, e);
            s(t), a = t.shouldStopPropagation
          }
          if (n && n(!1), B(!1), t && o && !l) {
            let n = new P("press", r, e);
            t(n), a && (a = n.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, a
        })), G = (0, y.J)(((e, t) => {
          let n = F.current;
          if (l) return !1;
          if (a) {
            n.isTriggeringEvent = !0;
            let r = new P("pressup", t, e);
            return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), W = (0, y.J)((e => {
          let t = F.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && V(O(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, j(), _ || u(t.target))
        })), X = (0, y.J)((e => {
          v && W(e)
        })), z = (0, d.useMemo)((() => {
          let e = F.current,
            t = {
              onKeyDown(t) {
                if (x(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var i;
                  H(t.target, t.key) && t.preventDefault();
                  let s = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, s = K(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        x(t, r) && !t.repeat && r.contains(t.target) && e.target && G(O(e.target, t), "keyboard")
                      };
                    U((0, o.T)(t.currentTarget), "keyup", (0, b.c)(i, n), !0)
                  }
                  s && t.stopPropagation(), t.metaKey && (0, r.cX)() && (null === (i = e.metaKeyEvents) || void 0 === i || i.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !E.Fe.isOpening) {
                  let n = !0;
                  if (l && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, w.Y)(t.nativeEvent))) {
                    l || p || (0, T.e)(t.currentTarget);
                    let e = K(t, "virtual"),
                      r = G(t, "virtual"),
                      o = V(t, "virtual");
                    n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && x(t, e.target)) {
                var r;
                H(t.target, t.key) && t.preventDefault();
                let n = t.target;
                V(O(e.target, t), "keyboard", e.target.contains(n)), j(), "Enter" !== t.key && L(e.target) && e.target.contains(n) && !t[S] && (t[S] = !0, (0, E.Fe)(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
              if ((0, w.P)(t.nativeEvent)) return void(e.pointerType = "virtual");
              I(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let i = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, l || p || (0, T.e)(t.currentTarget), _ || c(e.target), i = K(t, e.pointerType), U((0, o.T)(t.currentTarget), "pointermove", n, !1), U((0, o.T)(t.currentTarget), "pointerup", r, !1), U((0, o.T)(t.currentTarget), "pointercancel", s, !1)), i && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (I(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && k(t, t.currentTarget) && G(t, e.pointerType || t.pointerType)
            };
            let n = t => {
                t.pointerId === e.activePointerId && (e.target && k(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, K(O(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, V(O(e.target, t), e.pointerType, !1), X(t)))
              },
              r = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (k(t, e.target) && null != e.pointerType ? V(O(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && V(O(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, j(), _ || u(e.target), "ontouchend" in e.target && "mouse" !== t.pointerType && U(e.target, "touchend", i, {
                  once: !0
                }))
              },
              i = e => {
                R(e.currentTarget) && e.preventDefault()
              },
              s = e => {
                W(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && W(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (I(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = (0, w.Y)(t.nativeEvent) ? "virtual" : "mouse", l || p || (0, T.e)(t.currentTarget), K(t, e.pointerType) && t.stopPropagation(), U((0, o.T)(t.currentTarget), "mouseup", n, !1)))
            }, t.onMouseEnter = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, n = K(t, e.pointerType)), n && t.stopPropagation()
            }, t.onMouseLeave = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, n = V(t, e.pointerType, !1), X(t)), n && t.stopPropagation()
            }, t.onMouseUp = t => {
              t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || G(t, e.pointerType || "mouse"))
            };
            let n = t => {
              0 === t.button && (e.isPressed = !1, j(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && k(t, e.target) && null != e.pointerType ? V(O(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && V(O(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", l || p || (0, T.e)(t.currentTarget), _ || c(e.target), K(M(e.target, t), e.pointerType) && t.stopPropagation(), U((0, o.m)(t.currentTarget), "scroll", r, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = A(t.nativeEvent, e.activePointerId),
                r = !0;
              n && k(n, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = K(M(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = V(M(e.target, t), e.pointerType, !1), X(M(e.target, t))), r && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = A(t.nativeEvent, e.activePointerId),
                r = !0;
              n && k(n, t.currentTarget) && null != e.pointerType ? (G(M(e.target, t), e.pointerType), r = V(M(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = V(M(e.target, t), e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !_ && u(e.target), j()
            }, t.onTouchCancel = t => {
              t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && W(M(e.target, t)))
            };
            let r = t => {
              e.isPressed && t.target.contains(e.target) && W({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && W(e)
            }
          }
          return t
        }), [U, l, p, j, _, W, X, V, K, G]);
        return (0, d.useEffect)((() => () => {
          var e;
          _ || u(null !== (e = F.current.target) && void 0 !== e ? e : void 0)
        }), [_]), {
          isPressed: h || D,
          pressProps: (0, m.v)(N, z)
        }
      }

      function L(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function x(e, t) {
        const {
          key: n,
          code: r
        } = e, i = t, s = i.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || i instanceof(0, o.m)(i).HTMLInputElement && !D(i, n) || i instanceof(0, o.m)(i).HTMLTextAreaElement || i.isContentEditable || ("link" === s || !s && L(i)) && "Enter" !== n)
      }

      function A(e, t) {
        const n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r.identifier === t) return r
        }
        return null
      }

      function M(e, t) {
        let n = 0,
          r = 0;
        return t.targetTouches && 1 === t.targetTouches.length && (n = t.targetTouches[0].clientX, r = t.targetTouches[0].clientY), {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function O(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function k(e, t) {
        let n = t.getBoundingClientRect(),
          r = function(e) {
            let t = 0,
              n = 0;
            return void 0 !== e.width ? t = e.width / 2 : void 0 !== e.radiusX && (t = e.radiusX), void 0 !== e.height ? n = e.height / 2 : void 0 !== e.radiusY && (n = e.radiusY), {
              top: e.clientY - n,
              right: e.clientX + t,
              bottom: e.clientY + n,
              left: e.clientX - t
            }
          }(e);
        return i = r, !((o = n).left > i.right || i.left > o.right || o.top > i.bottom || i.top > o.bottom);
        var o, i
      }

      function I(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function R(e) {
        return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : L(e)))
      }

      function H(e, t) {
        return e instanceof HTMLInputElement ? !D(e, t) : R(e)
      }
      const N = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function D(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : N.has(e.type)
      }
    },
    54270: (e, t, n) => {
      n.d(t, {
        y: () => a
      });
      var r = n(62229),
        o = n(31985),
        i = n(85753);
      class s {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(e, t) {
          this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
        }
      }

      function a(e) {
        let t = (0, r.useRef)({
          isFocused: !1,
          observer: null
        });
        (0, o.N)((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let n = (0, i.J)((t => {
          null == e || e(t)
        }));
        return (0, r.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                t.current.isFocused = !1, r.disabled && n(new s("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            r.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver((() => {
              if (t.current.isFocused && r.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let n = r === document.activeElement ? null : document.activeElement;
                r.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: n
                })), r.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: n
                }))
              }
            })), t.current.observer.observe(r, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [n])
      }
    },
    3431: (e, t, n) => {
      n.d(t, {
        M: () => s
      });
      var r = n(45665);

      function o(e, t) {
        let {
          id: n,
          "aria-label": o,
          "aria-labelledby": i
        } = e;
        if (n = (0, r.Bi)(n), i && o) {
          let e = new Set([n, ...i.trim().split(/\s+/)]);
          i = [...e].join(" ")
        } else i && (i = i.trim().split(/\s+/).join(" "));
        return o || i || !t || (o = t), {
          id: n,
          "aria-label": o,
          "aria-labelledby": i
        }
      }
      var i = n(78345);

      function s(e) {
        let {
          description: t,
          errorMessage: n,
          isInvalid: s,
          validationState: a
        } = e, {
          labelProps: l,
          fieldProps: c
        } = function(e) {
          let {
            id: t,
            label: n,
            "aria-labelledby": i,
            "aria-label": s,
            labelElementType: a = "label"
          } = e;
          t = (0, r.Bi)(t);
          let l = (0, r.Bi)(),
            c = {};
          return n ? (i = i ? `${l} ${i}` : l, c = {
            id: l,
            htmlFor: "label" === a ? t : void 0
          }) : i || s || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: c,
            fieldProps: o({
              id: t,
              "aria-label": s,
              "aria-labelledby": i
            })
          }
        }(e), u = (0, r.X1)([Boolean(t), Boolean(n), s, a]), d = (0, r.X1)([Boolean(t), Boolean(n), s, a]);
        return c = (0, i.v)(c, {
          "aria-describedby": [u, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: l,
          fieldProps: c,
          descriptionProps: {
            id: u
          },
          errorMessageProps: {
            id: d
          }
        }
      }
    },
    25993: (e, t, n) => {
      n.d(t, {
        i: () => Oe
      });
      const r = new Set(["id"]),
        o = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        i = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        s = /^(data-.*)$/;

      function a(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      var l = n(62229);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let c, u = new Map;

      function d(e, t) {
        if (e === t) return e;
        let n = u.get(e);
        if (n) return n.forEach((e => e.current = t)), t;
        let r = u.get(t);
        return r ? (r.forEach((t => t.current = e)), e) : t
      }
      "undefined" != typeof FinalizationRegistry && (c = new FinalizationRegistry((e => {
        u.delete(e)
      })));
      var f = n(5060);

      function h(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = d(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, f.A)(n, o)
          }
        }
        return t
      }

      function p(e) {
        if (function() {
            if (null == v) {
              v = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return v = !0, !0
                  }
                })
              } catch {}
            }
            return v
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      let v = null;

      function m(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function g(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function y(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const b = y((function() {
          return g(/^Mac/i)
        })),
        E = y((function() {
          return g(/^iPhone/i)
        })),
        w = y((function() {
          return g(/^iPad/i) || b() && navigator.maxTouchPoints > 1
        })),
        T = y((function() {
          return E() || w()
        })),
        _ = (y((function() {
          return b() || T()
        })), y((function() {
          return m(/AppleWebKit/i) && !P()
        }))),
        P = y((function() {
          return m(/Chrome/i)
        })),
        S = y((function() {
          return m(/Android/i)
        })),
        C = y((function() {
          return m(/Firefox/i)
        })),
        L = (0, l.createContext)({
          isNative: !0,
          open: function(e, t) {
            ! function(e, t) {
              if (e instanceof HTMLAnchorElement) t(e);
              else if (e.hasAttribute("data-href")) {
                let n = document.createElement("a");
                n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
              }
            }(e, (e => A(e, t)))
          },
          useHref: e => e
        });

      function x() {
        return (0, l.useContext)(L)
      }

      function A(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        C() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (b() ? i = !0 : s = !0);
        let c = _() && b() && !w() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        A.isOpening = n, p(e), e.dispatchEvent(c), A.isOpening = !1
      }

      function M(e) {
        var t;
        const n = x().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      A.isOpening = !1;
      const O = "undefined" != typeof document ? l.useLayoutEffect : () => {};

      function k(e) {
        const t = (0, l.useRef)(null);
        return O((() => {
          t.current = e
        }), [e]), (0, l.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      const I = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        R = I.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      I.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), I.join(':not([hidden]):not([tabindex="-1"]),');
      const H = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        N = e => e && "window" in e && e.window === e ? e : H(e).defaultView || window;

      function D(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }

      function B(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }
      let F = !1;

      function U(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (S() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let j = null,
        K = new Set,
        V = new Map,
        G = !1,
        W = !1;

      function X(e, t) {
        for (let n of K) n(e, t)
      }

      function z(e) {
        G = !0,
          function(e) {
            return !(e.metaKey || !b() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (j = "keyboard", X("keyboard", e))
      }

      function $(e) {
        j = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (G = !0, X("pointer", e))
      }

      function Y(e) {
        U(e) && (G = !0, j = "virtual")
      }

      function q(e) {
        e.target !== window && e.target !== document && !F && e.isTrusted && (G || W || (j = "virtual", X("virtual", e)), G = !1, W = !1)
      }

      function Z() {
        F || (G = !1, W = !0)
      }

      function J(e) {
        if ("undefined" == typeof window || V.get(N(e))) return;
        const t = N(e),
          n = H(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          G = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", z, !0), n.addEventListener("keyup", z, !0), n.addEventListener("click", Y, !0), t.addEventListener("focus", q, !0), t.addEventListener("blur", Z, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", $, !0), n.addEventListener("pointermove", $, !0), n.addEventListener("pointerup", $, !0)), t.addEventListener("beforeunload", (() => {
          Q(e)
        }), {
          once: !0
        }), V.set(t, {
          focus: r
        })
      }
      const Q = (e, t) => {
        const n = N(e),
          r = H(e);
        t && r.removeEventListener("DOMContentLoaded", t), V.has(n) && (n.HTMLElement.prototype.focus = V.get(n).focus, r.removeEventListener("keydown", z, !0), r.removeEventListener("keyup", z, !0), r.removeEventListener("click", Y, !0), n.removeEventListener("focus", q, !0), n.removeEventListener("blur", Z, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", $, !0), r.removeEventListener("pointermove", $, !0), r.removeEventListener("pointerup", $, !0)), V.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = H(e);
        let n;
        "loading" !== t.readyState ? J(e) : (n = () => {
          J(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      var ee = n(75463);

      function te(e, t) {
        if (!(0, ee.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let n = t;
        for (; null !== n;) {
          if (n === e) return !0;
          n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : D(n) ? n.host : n.parentNode
        }
        return !1
      }
      const ne = (e = document) => {
        var t;
        if (!(0, ee.Nf)()) return e.activeElement;
        let n = e.activeElement;
        for (; n && "shadowRoot" in n && (null === (t = n.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) n = n.shadowRoot.activeElement;
        return n
      };

      function re(e) {
        return (0, ee.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }
      let oe = new Map,
        ie = new Set;

      function se() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = oe.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), oe.delete(n.target)), 0 === oe.size)) {
            for (let e of ie) e();
            ie.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = oe.get(n.target);
          r || (r = new Set, oe.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function ae(e) {
        requestAnimationFrame((() => {
          0 === oe.size ? e() : ie.add(e)
        }))
      }

      function le(e) {
        let {
          isDisabled: t,
          onFocus: n,
          onBlur: r,
          onFocusChange: o
        } = e;
        const i = (0, l.useCallback)((e => {
            if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
          }), [r, o]),
          s = function(e) {
            let t = (0, l.useRef)({
              isFocused: !1,
              observer: null
            });
            O((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let n = k((t => {
              null == e || e(t)
            }));
            return (0, l.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    if (t.current.isFocused = !1, r.disabled) {
                      let t = B(e);
                      n(t)
                    }
                    t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                r.addEventListener("focusout", o, {
                  once: !0
                }), t.current.observer = new MutationObserver((() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) || void 0 === e || e.disconnect();
                    let n = r === document.activeElement ? null : document.activeElement;
                    r.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: n
                    })), r.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: n
                    }))
                  }
                })), t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [n])
          }(i),
          a = (0, l.useCallback)((e => {
            const t = H(e.target),
              r = t ? ne(t) : ne();
            e.target === e.currentTarget && r === re(e.nativeEvent) && (n && n(e), o && o(!0), s(e))
          }), [o, n, s]);
        return {
          focusProps: {
            onFocus: !t && (n || o || r) ? a : void 0,
            onBlur: t || !r && !o ? void 0 : i
          }
        }
      }

      function ce(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(r), t && n.stopPropagation()
        }
      }

      function ue(e, t) {
        O((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? se() : document.addEventListener("DOMContentLoaded", se));
      let de = l.createContext(null);

      function fe(e, t) {
        let {
          focusProps: n
        } = le(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: ce(e.onKeyDown),
              onKeyUp: ce(e.onKeyUp)
            }
          }
        }(e), o = h(n, r), i = function(e) {
          let t = (0, l.useContext)(de) || {};
          ue(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), s = e.isDisabled ? {} : i, a = (0, l.useRef)(e.autoFocus);
        (0, l.useEffect)((() => {
          a.current && t.current && function(e) {
            const t = H(e),
              n = ne(t);
            if ("virtual" === j) {
              let r = n;
              ae((() => {
                ne(t) === r && e.isConnected && p(e)
              }))
            } else p(e)
          }(t.current), a.current = !1
        }), [t]);
        let c = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (c = void 0), {
          focusableProps: h({
            ...o,
            tabIndex: c
          }, s)
        }
      }
      let he = "default",
        pe = "",
        ve = new WeakMap;

      function me(e) {
        if (T()) {
          if ("disabled" !== he) return;
          he = "restoring", setTimeout((() => {
            ae((() => {
              if ("restoring" === he) {
                const t = H(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = pe || ""), pe = "", he = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ve.has(e)) {
          let t = ve.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), ve.delete(e)
        }
      }
      const ge = l.createContext({
        register: () => {}
      });
      ge.displayName = "PressResponderContext";
      var ye = n(72621),
        be = n(82776),
        Ee = n(81359);
      n(44853);
      var we = new WeakMap;
      class Te {
        continuePropagation() {
          (0, Ee._)(this, we, !1)
        }
        get shouldStopPropagation() {
          return (0, ye._)(this, we)
        }
        constructor(e, t, n, r) {
          var o;
          (0, be._)(this, we, {
            writable: !0,
            value: void 0
          }), (0, Ee._)(this, we, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, c = 0,
            u = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, u = n.clientY), s && (null != l && null != u ? (a = l - s.left, c = u - s.top) : (a = s.width / 2, c = s.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = c
        }
      }
      const _e = Symbol("linkClicked");

      function Pe(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          onClick: s,
          isDisabled: c,
          isPressed: u,
          preventFocusOnPress: d,
          shouldCancelOnPointerExit: f,
          allowTextSelectionOnPress: v,
          ref: m,
          ...g
        } = function(e) {
          let t = (0, l.useContext)(ge);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = h(r, e), n()
          }
          return ue(t, e.ref), e
        }(e), [y, E] = (0, l.useState)(!1), w = (0, l.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null,
          disposables: []
        }), {
          addGlobalListener: _,
          removeAllGlobalListeners: P
        } = function() {
          let e = (0, l.useRef)(new Map),
            t = (0, l.useCallback)(((t, n, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: i,
                options: o
              }), t.addEventListener(n, i, o)
            }), []),
            n = (0, l.useCallback)(((t, n, r, o) => {
              var i;
              let s = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, s, o), e.current.delete(r)
            }), []),
            r = (0, l.useCallback)((() => {
              e.current.forEach(((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              }))
            }), [n]);
          return (0, l.useEffect)((() => r), [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), C = k(((e, t) => {
          let o = w.current;
          if (c || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Te("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, E(!0), i
        })), L = k(((e, r, i = !0) => {
          let s = w.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let a = !0;
          if (o) {
            let t = new Te("pressend", r, e);
            o(t), a = t.shouldStopPropagation
          }
          if (n && n(!1), E(!1), t && i && !c) {
            let n = new Te("press", r, e);
            t(n), a && (a = n.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, a
        })), x = k(((e, t) => {
          let n = w.current;
          if (c) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Te("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), M = k((e => {
          let t = w.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && L(Le(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, P(), v || me(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), O = k((e => {
          f && M(e)
        })), I = k((e => {
          null == s || s(e)
        })), D = k(((e, t) => {
          if (s) {
            let n = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(n, t), s(B(n))
          }
        })), j = (0, l.useMemo)((() => {
          let e = w.current,
            t = {
              onKeyDown(t) {
                if (Ce(t.nativeEvent, t.currentTarget) && te(t.currentTarget, re(t.nativeEvent))) {
                  var r;
                  xe(re(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = C(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        Ce(t, r) && !t.repeat && te(r, re(t)) && e.target && x(Le(e.target, t), "keyboard")
                      };
                    _(H(t.currentTarget), "keyup", a(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && b() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || te(t.currentTarget, re(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !A.isOpening) {
                  let n = !0;
                  if (c && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !U(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      n = L(Le(t.currentTarget, t), r, !0), e.isOverTarget = !1, I(t), M(t)
                    }
                  } else {
                    let e = C(t, "virtual"),
                      r = x(t, "virtual"),
                      o = L(t, "virtual");
                    I(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && Ce(t, e.target)) {
                var r;
                xe(re(t), t.key) && t.preventDefault();
                let n = re(t),
                  o = te(e.target, re(t));
                L(Le(e.target, t), "keyboard", o), o && D(t, e.target), P(), "Enter" !== t.key && Se(e.target) && te(e.target, n) && !t[_e] && (t[_e] = !0, A(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !te(t.currentTarget, re(t.nativeEvent))) return;
              if (o = t.nativeEvent, !S() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, v || function(e) {
                  if (T()) {
                    if ("default" === he) {
                      const t = H(e);
                      pe = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    he = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    ve.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = C(t, e.pointerType);
                let o = re(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), _(H(t.currentTarget), "pointerup", n, !1), _(H(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (te(t.currentTarget, re(t.nativeEvent)) && 0 === t.button) {
                if (d) {
                  let n = function(e) {
                    for (; e && !e.matches(R);) e = e.parentElement;
                    let t = N(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    F = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, p(n), l()))
                      },
                      s = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, p(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), F = !1, r = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              te(t.currentTarget, re(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && x(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, C(Le(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, L(Le(e.target, t), e.pointerType, !1), O(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (te(e.target, re(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? M(t) : (p(e.target), e.target.click()))
                      }), 80);
                    _(t.currentTarget, "click", (() => n = !0), !0), e.disposables.push((() => clearTimeout(r)))
                  } else M(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                M(e)
              };
            t.onDragStart = e => {
              te(e.currentTarget, re(e.nativeEvent)) && M(e)
            }
          }
          return t
        }), [_, c, d, P, v, M, O, L, C, x, I, D]);
        return (0, l.useEffect)((() => {
          let e = null == m ? void 0 : m.current;
          e && e instanceof N(e).Element && "auto" === N(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [m]), (0, l.useEffect)((() => {
          let e = w.current;
          return () => {
            var t;
            v || me(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [v]), {
          isPressed: u || y,
          pressProps: h(g, j)
        }
      }

      function Se(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Ce(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof N(o).HTMLInputElement && !Me(o, n) || o instanceof N(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Se(o)) && "Enter" !== n)
      }

      function Le(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function xe(e, t) {
        return e instanceof HTMLInputElement ? !Me(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Se(e)))
        }(e)
      }
      const Ae = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Me(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Ae.has(e.type)
      }

      function Oe(e, t) {
        let {
          elementType: n = "a",
          onPress: a,
          onPressStart: l,
          onPressEnd: c,
          onClick: u,
          isDisabled: d,
          ...f
        } = e, p = {};
        "a" !== n && (p = {
          role: "link",
          tabIndex: d ? void 0 : 0
        });
        let {
          focusableProps: v
        } = fe(e, t), {
          pressProps: m,
          isPressed: g
        } = Pe({
          onPress: a,
          onPressStart: l,
          onPressEnd: c,
          onClick: u,
          isDisabled: d,
          ref: t
        }), y = function(e, t = {}) {
          let {
            labelable: n,
            isLink: a,
            propNames: l
          } = t, c = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || n && o.has(t) || a && i.has(t) || (null == l ? void 0 : l.has(t)) || s.test(t)) && (c[t] = e[t]);
          return c
        }(f, {
          labelable: !0
        }), b = h(v, m), E = x();
        return {
          isPressed: g,
          linkProps: h(y, M(e), {
            ...b,
            ...p,
            "aria-disabled": d || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var n;
              null === (n = m.onClick) || void 0 === n || n.call(m, t), !E.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && function(e, t) {
                let n = e.getAttribute("target");
                return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
              }(t.currentTarget, t) && e.href && (t.preventDefault(), E.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }
    },
    67267: (e, t, n) => {
      n.d(t, {
        z: () => u
      });
      var r = n(50060),
        o = n(78345),
        i = n(39891),
        s = n(15751),
        a = n(25421),
        l = n(52436),
        c = n(15043);

      function u(e, t, n) {
        let {
          value: u,
          children: d,
          "aria-label": f,
          "aria-labelledby": h
        } = e;
        const p = e.isDisabled || t.isDisabled;
        null != d || null != f || null != h || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
        let v = t.selectedValue === u,
          {
            pressProps: m,
            isPressed: g
          } = (0, c.d)({
            isDisabled: p
          }),
          {
            pressProps: y,
            isPressed: b
          } = (0, c.d)({
            isDisabled: p,
            onPress() {
              t.setSelectedValue(u)
            }
          }),
          {
            focusableProps: E
          } = (0, a.W)((0, o.v)(e, {
            onFocus: () => t.setLastFocusedValue(u)
          }), n),
          w = (0, o.v)(m, E),
          T = (0, i.$)(e, {
            labelable: !0
          }),
          _ = -1;
        null != t.selectedValue ? t.selectedValue === u && (_ = 0) : t.lastFocusedValue !== u && null != t.lastFocusedValue || (_ = 0), p && (_ = void 0);
        let {
          name: P,
          descriptionId: S,
          errorMessageId: C,
          validationBehavior: L
        } = r.V.get(t);
        return (0, s.F)(n, t.selectedValue, t.setSelectedValue), (0, l.X)({
          validationBehavior: L
        }, t, n), {
          labelProps: (0, o.v)(y, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, o.v)(T, {
            ...w,
            type: "radio",
            name: P,
            tabIndex: _,
            disabled: p,
            required: t.isRequired && "native" === L,
            checked: v,
            value: u,
            onChange: e => {
              e.stopPropagation(), t.setSelectedValue(u)
            },
            "aria-describedby": [e["aria-describedby"], t.isInvalid ? C : null, S].filter(Boolean).join(" ") || void 0
          }),
          isDisabled: p,
          isSelected: v,
          isPressed: g || b
        }
      }
    },
    25672: (e, t, n) => {
      n.d(t, {
        m: () => M
      });
      var r = n(50060),
        o = n(39891),
        i = n(45665),
        s = n(78345),
        a = n(47444);

      function l(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = (0, a.m)(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: r
          } = e.style, o = "none" !== n && "hidden" !== r && "collapse" !== r;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            o = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || l(e.parentElement, e))
      }
      var c = n(62229);
      const u = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        d = u.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      u.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const f = u.join(':not([hidden]):not([tabindex="-1"]),');

      function h(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function p(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? f : d,
          o = (0, a.T)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !e.matches(r) || !l(e) || n && !h(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (o.currentNode = t.from), o
      }
      class v {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new m({
            scopeRef: e
          });
          r.addChild(o), o.parent = r, this.fastMap.set(e, o), n && (o.nodeToRestore = n)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let n = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && h(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new v;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new m({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class m {
        addChild(e) {
          this.children.add(e), e.parent = this
        }
        removeChild(e) {
          this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
          this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
      }
      new v;
      var g = n(3431),
        y = n(54270);
      const b = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        E = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function w(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return b.has(t.script)
        }
        let t = e.split("-")[0];
        return E.has(t)
      }
      var T = n(87791);
      const _ = Symbol.for("react-aria.i18n.locale");

      function P() {
        let e = "undefined" != typeof window && window[_] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch (t) {
          e = "en-US"
        }
        return {
          locale: e,
          direction: w(e) ? "rtl" : "ltr"
        }
      }
      let S = P(),
        C = new Set;

      function L() {
        S = P();
        for (let e of C) e(S)
      }
      const x = c.createContext(null);

      function A() {
        let e = function() {
          let e = (0, T.wR)(),
            [t, n] = (0, c.useState)(S);
          return (0, c.useEffect)((() => (0 === C.size && window.addEventListener("languagechange", L), C.add(n), () => {
            C.delete(n), 0 === C.size && window.removeEventListener("languagechange", L)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, c.useContext)(x) || e
      }

      function M(e, t) {
        let {
          name: n,
          isReadOnly: a,
          isRequired: l,
          isDisabled: u,
          orientation: d = "vertical",
          validationBehavior: f = "aria"
        } = e, {
          direction: h
        } = A(), {
          isInvalid: v,
          validationErrors: m,
          validationDetails: b
        } = t.displayValidation, {
          labelProps: E,
          fieldProps: w,
          descriptionProps: T,
          errorMessageProps: _
        } = (0, g.M)({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || m
        }), P = (0, o.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: S
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, i = (0, c.useRef)({
            isFocusWithin: !1
          }), s = (0, c.useCallback)((e => {
            i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, n && n(e), o && o(!1))
          }), [n, o, i]), a = (0, y.y)(s), l = (0, c.useCallback)((e => {
            i.current.isFocusWithin || document.activeElement !== e.target || (r && r(e), o && o(!0), i.current.isFocusWithin = !0, a(e))
          }), [r, o, a]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: l,
              onBlur: s
            }
          }
        }({
          onBlurWithin(n) {
            var r;
            null === (r = e.onBlur) || void 0 === r || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), C = (0, i.Bi)(n);
        return r.V.set(t, {
          name: C,
          descriptionId: T.id,
          errorMessageId: _.id,
          validationBehavior: f
        }), {
          radioGroupProps: (0, s.v)(P, {
            role: "radiogroup",
            onKeyDown: e => {
              let n;
              switch (e.key) {
                case "ArrowRight":
                  n = "rtl" === h && "vertical" !== d ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  n = "rtl" === h && "vertical" !== d ? "next" : "prev";
                  break;
                case "ArrowDown":
                  n = "next";
                  break;
                case "ArrowUp":
                  n = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let r, o = p(e.currentTarget, {
                from: e.target
              });
              "next" === n ? (r = o.nextNode(), r || (o.currentNode = e.currentTarget, r = o.firstChild())) : (r = o.previousNode(), r || (o.currentNode = e.currentTarget, r = o.lastChild())), r && (r.focus(), t.setSelectedValue(r.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": a || void 0,
            "aria-required": l || void 0,
            "aria-disabled": u || void 0,
            "aria-orientation": d,
            ...w,
            ...S
          }),
          labelProps: E,
          descriptionProps: T,
          errorMessageProps: _,
          isInvalid: v,
          validationErrors: m,
          validationDetails: b
        }
      }
    },
    50060: (e, t, n) => {
      n.d(t, {
        V: () => r
      });
      const r = new WeakMap
    },
    87791: (e, t, n) => {
      n.d(t, {
        Cc: () => c,
        wR: () => h
      });
      var r = n(62229);
      const o = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        i = r.createContext(o),
        s = r.createContext(!1);
      let a = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        l = new WeakMap;
      const c = "function" == typeof r.useId ? function(e) {
        let t = r.useId(),
          [n] = (0, r.useState)(h());
        return e || `${n?"react-aria":`react-aria${o.prefix}`}-${t}`
      } : function(e) {
        let t = (0, r.useContext)(i);
        t !== o || a || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let n = function(e = !1) {
            let t = (0, r.useContext)(i),
              n = (0, r.useRef)(null);
            if (null === n.current && !e) {
              var o, s;
              let e = null === (s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === s || null === (o = s.ReactCurrentOwner) || void 0 === o ? void 0 : o.current;
              if (e) {
                let n = l.get(e);
                null == n ? l.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, l.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          s = `react-aria${t.prefix}`;
        return e || `${s}-${n}`
      };

      function u() {
        return !1
      }

      function d() {
        return !0
      }

      function f(e) {
        return () => {}
      }

      function h() {
        return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(f, u, d) : (0, r.useContext)(s)
      }
    },
    21465: (e, t, n) => {
      function r(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      n.d(t, {
        K: () => Ae
      });
      var o = n(62229);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let i, s = new Map;

      function a(e, t) {
        if (e === t) return e;
        let n = s.get(e);
        if (n) return n.forEach((e => e.current = t)), t;
        let r = s.get(t);
        return r ? (r.forEach((t => t.current = e)), e) : t
      }
      "undefined" != typeof FinalizationRegistry && (i = new FinalizationRegistry((e => {
        s.delete(e)
      })));
      var l = n(5060);

      function c(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let o = e[n];
          for (let e in o) {
            let n = t[e],
              i = o[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = r(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = a(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, l.A)(n, i)
          }
        }
        return t
      }
      const u = new Set(["id"]),
        d = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        f = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        h = /^(data-.*)$/;
      const p = "undefined" != typeof document ? o.useLayoutEffect : () => {};

      function v(e) {
        const t = (0, o.useRef)(null);
        return p((() => {
          t.current = e
        }), [e]), (0, o.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      const m = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        g = m.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      m.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), m.join(':not([hidden]):not([tabindex="-1"]),');
      const y = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        b = e => e && "window" in e && e.window === e ? e : y(e).defaultView || window;

      function E(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }

      function w(e) {
        if (function() {
            if (null == T) {
              T = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return T = !0, !0
                  }
                })
              } catch {}
            }
            return T
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      let T = null;

      function _(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }
      let P = !1;

      function S(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function C(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function L(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const x = L((function() {
          return C(/^Mac/i)
        })),
        A = L((function() {
          return C(/^iPhone/i)
        })),
        M = L((function() {
          return C(/^iPad/i) || x() && navigator.maxTouchPoints > 1
        })),
        O = L((function() {
          return A() || M()
        })),
        k = (L((function() {
          return x() || O()
        })), L((function() {
          return S(/AppleWebKit/i) && !I()
        }))),
        I = L((function() {
          return S(/Chrome/i)
        })),
        R = L((function() {
          return S(/Android/i)
        })),
        H = L((function() {
          return S(/Firefox/i)
        }));
      let N = new Map,
        D = new Set;

      function B() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = N.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), N.delete(n.target)), 0 === N.size)) {
            for (let e of D) e();
            D.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = N.get(n.target);
          r || (r = new Set, N.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function F(e) {
        requestAnimationFrame((() => {
          0 === N.size ? e() : D.add(e)
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? B() : document.addEventListener("DOMContentLoaded", B));
      let U = "default",
        j = "",
        K = new WeakMap;

      function V(e) {
        if (O()) {
          if ("disabled" !== U) return;
          U = "restoring", setTimeout((() => {
            F((() => {
              if ("restoring" === U) {
                const t = y(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = j || ""), j = "", U = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && K.has(e)) {
          let t = K.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), K.delete(e)
        }
      }
      const G = o.createContext({
        register: () => {}
      });
      G.displayName = "PressResponderContext";
      var W = n(72621),
        X = n(82776),
        z = n(81359);

      function $(e, t) {
        p((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      var Y = n(75463);

      function q(e, t) {
        if (!(0, Y.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let n = t;
        for (; null !== n;) {
          if (n === e) return !0;
          n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : E(n) ? n.host : n.parentNode
        }
        return !1
      }
      const Z = (e = document) => {
        var t;
        if (!(0, Y.Nf)()) return e.activeElement;
        let n = e.activeElement;
        for (; n && "shadowRoot" in n && (null === (t = n.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) n = n.shadowRoot.activeElement;
        return n
      };

      function J(e) {
        return (0, Y.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }

      function Q(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        H() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (x() ? i = !0 : s = !0);
        let c = k() && x() && !M() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        Q.isOpening = n, w(e), e.dispatchEvent(c), Q.isOpening = !1
      }

      function ee(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (R() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      Q.isOpening = !1, n(44853);
      var te = new WeakMap;
      class ne {
        continuePropagation() {
          (0, z._)(this, te, !1)
        }
        get shouldStopPropagation() {
          return (0, W._)(this, te)
        }
        constructor(e, t, n, r) {
          var o;
          (0, X._)(this, te, {
            writable: !0,
            value: void 0
          }), (0, z._)(this, te, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, c = 0,
            u = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, u = n.clientY), s && (null != l && null != u ? (a = l - s.left, c = u - s.top) : (a = s.width / 2, c = s.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = c
        }
      }
      const re = Symbol("linkClicked");

      function oe(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: i,
          onPressEnd: s,
          onPressUp: a,
          onClick: l,
          isDisabled: u,
          isPressed: d,
          preventFocusOnPress: f,
          shouldCancelOnPointerExit: h,
          allowTextSelectionOnPress: p,
          ref: m,
          ...E
        } = function(e) {
          let t = (0, o.useContext)(G);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = c(r, e), n()
          }
          return $(t, e.ref), e
        }(e), [T, S] = (0, o.useState)(!1), C = (0, o.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null,
          disposables: []
        }), {
          addGlobalListener: L,
          removeAllGlobalListeners: A
        } = function() {
          let e = (0, o.useRef)(new Map),
            t = (0, o.useCallback)(((t, n, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: i,
                options: o
              }), t.addEventListener(n, i, o)
            }), []),
            n = (0, o.useCallback)(((t, n, r, o) => {
              var i;
              let s = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, s, o), e.current.delete(r)
            }), []),
            r = (0, o.useCallback)((() => {
              e.current.forEach(((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              }))
            }), [n]);
          return (0, o.useEffect)((() => r), [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), M = v(((e, t) => {
          let r = C.current;
          if (u || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, i) {
            let n = new ne("pressstart", t, e);
            i(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, S(!0), o
        })), k = v(((e, r, o = !0) => {
          let i = C.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let a = !0;
          if (s) {
            let t = new ne("pressend", r, e);
            s(t), a = t.shouldStopPropagation
          }
          if (n && n(!1), S(!1), t && o && !u) {
            let n = new ne("press", r, e);
            t(n), a && (a = n.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, a
        })), I = v(((e, t) => {
          let n = C.current;
          if (u) return !1;
          if (a) {
            n.isTriggeringEvent = !0;
            let r = new ne("pressup", t, e);
            return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), H = v((e => {
          let t = C.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && k(ae(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, A(), p || V(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), N = v((e => {
          h && H(e)
        })), D = v((e => {
          null == l || l(e)
        })), B = v(((e, t) => {
          if (l) {
            let n = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(n, t), l(_(n))
          }
        })), F = (0, o.useMemo)((() => {
          let e = C.current,
            t = {
              onKeyDown(t) {
                if (se(t.nativeEvent, t.currentTarget) && q(t.currentTarget, J(t.nativeEvent))) {
                  var o;
                  le(J(t.nativeEvent), t.key) && t.preventDefault();
                  let i = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", i = M(t, "keyboard");
                    let o = t.currentTarget,
                      s = t => {
                        se(t, o) && !t.repeat && q(o, J(t)) && e.target && I(ae(e.target, t), "keyboard")
                      };
                    L(y(t.currentTarget), "keyup", r(s, n), !0)
                  }
                  i && t.stopPropagation(), t.metaKey && x() && (null === (o = e.metaKeyEvents) || void 0 === o || o.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || q(t.currentTarget, J(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Q.isOpening) {
                  let n = !0;
                  if (u && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !ee(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      n = k(ae(t.currentTarget, t), r, !0), e.isOverTarget = !1, D(t), H(t)
                    }
                  } else {
                    let e = M(t, "virtual"),
                      r = I(t, "virtual"),
                      o = k(t, "virtual");
                    D(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && se(t, e.target)) {
                var r;
                le(J(t), t.key) && t.preventDefault();
                let n = J(t),
                  o = q(e.target, J(t));
                k(ae(e.target, t), "keyboard", o), o && B(t, e.target), A(), "Enter" !== t.key && ie(e.target) && q(e.target, n) && !t[re] && (t[re] = !0, Q(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !q(t.currentTarget, J(t.nativeEvent))) return;
              if (o = t.nativeEvent, !R() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, p || function(e) {
                  if (O()) {
                    if ("default" === U) {
                      const t = y(e);
                      j = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    U = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    K.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = M(t, e.pointerType);
                let o = J(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), L(y(t.currentTarget), "pointerup", n, !1), L(y(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (q(t.currentTarget, J(t.nativeEvent)) && 0 === t.button) {
                if (f) {
                  let n = function(e) {
                    for (; e && !e.matches(g);) e = e.parentElement;
                    let t = b(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    P = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, w(n), l()))
                      },
                      s = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, w(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), P = !1, r = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              q(t.currentTarget, J(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && I(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, M(ae(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, k(ae(e.target, t), e.pointerType, !1), N(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (q(e.target, J(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? H(t) : (w(e.target), e.target.click()))
                      }), 80);
                    L(t.currentTarget, "click", (() => n = !0), !0), e.disposables.push((() => clearTimeout(r)))
                  } else H(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                H(e)
              };
            t.onDragStart = e => {
              q(e.currentTarget, J(e.nativeEvent)) && H(e)
            }
          }
          return t
        }), [L, u, f, A, p, H, N, k, M, I, D, B]);
        return (0, o.useEffect)((() => {
          let e = null == m ? void 0 : m.current;
          e && e instanceof b(e).Element && "auto" === b(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [m]), (0, o.useEffect)((() => {
          let e = C.current;
          return () => {
            var t;
            p || V(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [p]), {
          isPressed: d || T,
          pressProps: c(E, F)
        }
      }

      function ie(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function se(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof b(o).HTMLInputElement && !ue(o, n) || o instanceof b(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && ie(o)) && "Enter" !== n)
      }

      function ae(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function le(e, t) {
        return e instanceof HTMLInputElement ? !ue(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : ie(e)))
        }(e)
      }
      const ce = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function ue(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : ce.has(e.type)
      }
      let de = null,
        fe = new Set,
        he = new Map,
        pe = !1,
        ve = !1;

      function me(e, t) {
        for (let n of fe) n(e, t)
      }

      function ge(e) {
        pe = !0,
          function(e) {
            return !(e.metaKey || !x() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (de = "keyboard", me("keyboard", e))
      }

      function ye(e) {
        de = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (pe = !0, me("pointer", e))
      }

      function be(e) {
        ee(e) && (pe = !0, de = "virtual")
      }

      function Ee(e) {
        e.target !== window && e.target !== document && !P && e.isTrusted && (pe || ve || (de = "virtual", me("virtual", e)), pe = !1, ve = !1)
      }

      function we() {
        P || (pe = !1, ve = !0)
      }

      function Te(e) {
        if ("undefined" == typeof window || he.get(b(e))) return;
        const t = b(e),
          n = y(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          pe = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", ge, !0), n.addEventListener("keyup", ge, !0), n.addEventListener("click", be, !0), t.addEventListener("focus", Ee, !0), t.addEventListener("blur", we, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", ye, !0), n.addEventListener("pointermove", ye, !0), n.addEventListener("pointerup", ye, !0)), t.addEventListener("beforeunload", (() => {
          _e(e)
        }), {
          once: !0
        }), he.set(t, {
          focus: r
        })
      }
      const _e = (e, t) => {
        const n = b(e),
          r = y(e);
        t && r.removeEventListener("DOMContentLoaded", t), he.has(n) && (n.HTMLElement.prototype.focus = he.get(n).focus, r.removeEventListener("keydown", ge, !0), r.removeEventListener("keyup", ge, !0), r.removeEventListener("click", be, !0), n.removeEventListener("focus", Ee, !0), n.removeEventListener("blur", we, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", ye, !0), r.removeEventListener("pointermove", ye, !0), r.removeEventListener("pointerup", ye, !0)), he.delete(n))
      };

      function Pe(e) {
        let {
          isDisabled: t,
          onFocus: n,
          onBlur: r,
          onFocusChange: i
        } = e;
        const s = (0, o.useCallback)((e => {
            if (e.target === e.currentTarget) return r && r(e), i && i(!1), !0
          }), [r, i]),
          a = function(e) {
            let t = (0, o.useRef)({
              isFocused: !1,
              observer: null
            });
            p((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let n = v((t => {
              null == e || e(t)
            }));
            return (0, o.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    if (t.current.isFocused = !1, r.disabled) {
                      let t = _(e);
                      n(t)
                    }
                    t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                r.addEventListener("focusout", o, {
                  once: !0
                }), t.current.observer = new MutationObserver((() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) || void 0 === e || e.disconnect();
                    let n = r === document.activeElement ? null : document.activeElement;
                    r.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: n
                    })), r.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: n
                    }))
                  }
                })), t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [n])
          }(s),
          l = (0, o.useCallback)((e => {
            const t = y(e.target),
              r = t ? Z(t) : Z();
            e.target === e.currentTarget && r === J(e.nativeEvent) && (n && n(e), i && i(!0), a(e))
          }), [i, n, a]);
        return {
          focusProps: {
            onFocus: !t && (n || i || r) ? l : void 0,
            onBlur: t || !r && !i ? void 0 : s
          }
        }
      }

      function Se(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(r), t && n.stopPropagation()
        }
      }
      "undefined" != typeof document && function(e) {
        const t = y(e);
        let n;
        "loading" !== t.readyState ? Te(e) : (n = () => {
          Te(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let Ce = o.createContext(null);

      function Le(e, t) {
        let {
          focusProps: n
        } = Pe(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Se(e.onKeyDown),
              onKeyUp: Se(e.onKeyUp)
            }
          }
        }(e), i = c(n, r), s = function(e) {
          let t = (0, o.useContext)(Ce) || {};
          $(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : s, l = (0, o.useRef)(e.autoFocus);
        (0, o.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = y(e),
              n = Z(t);
            if ("virtual" === de) {
              let r = n;
              F((() => {
                Z(t) === r && e.isConnected && w(e)
              }))
            } else w(e)
          }(t.current), l.current = !1
        }), [t]);
        let u = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (u = void 0), {
          focusableProps: c({
            ...i,
            tabIndex: u
          }, a)
        }
      }

      function xe(e, t, n) {
        let {
          isDisabled: r = !1,
          isReadOnly: i = !1,
          value: s,
          name: a,
          children: l,
          "aria-label": p,
          "aria-labelledby": m,
          validationState: g = "valid",
          isInvalid: y
        } = e, {
          pressProps: b,
          isPressed: E
        } = oe({
          isDisabled: r
        }), {
          pressProps: w,
          isPressed: T
        } = oe({
          onPress() {
            var e;
            t.toggle(), null === (e = n.current) || void 0 === e || e.focus()
          },
          isDisabled: r || i
        }), {
          focusableProps: _
        } = Le(e, n), P = c(b, _), S = function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            propNames: o
          } = t, i = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (u.has(t) || n && d.has(t) || r && f.has(t) || (null == o ? void 0 : o.has(t)) || h.test(t)) && (i[t] = e[t]);
          return i
        }(e, {
          labelable: !0
        });
        return function(e, t, n) {
          let r = (0, o.useRef)(t),
            i = v((() => {
              n && n(r.current)
            }));
          (0, o.useEffect)((() => {
            var t;
            let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
            return null == n || n.addEventListener("reset", i), () => {
              null == n || n.removeEventListener("reset", i)
            }
          }), [e, i])
        }(n, t.isSelected, t.setSelected), {
          labelProps: c(w, {
            onClick: e => e.preventDefault()
          }),
          inputProps: c(S, {
            "aria-invalid": y || "invalid" === g || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": i || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: r,
            ...null == s ? {} : {
              value: s
            },
            name: a,
            type: "checkbox",
            ...P
          }),
          isSelected: t.isSelected,
          isPressed: E || T,
          isDisabled: r,
          isReadOnly: i,
          isInvalid: y || "invalid" === g
        }
      }

      function Ae(e, t, n) {
        let {
          labelProps: r,
          inputProps: o,
          isSelected: i,
          isPressed: s,
          isDisabled: a,
          isReadOnly: l
        } = xe(e, t, n);
        return {
          labelProps: r,
          inputProps: {
            ...o,
            role: "switch",
            checked: i
          },
          isSelected: i,
          isPressed: s,
          isDisabled: a,
          isReadOnly: l
        }
      }
    },
    42579: (e, t, n) => {
      n.d(t, {
        v: () => h
      });
      var r = n(62229),
        o = n(39891),
        i = n(15751),
        s = n(47444),
        a = n(78345),
        l = n(48436),
        c = n(3431),
        u = n(25421),
        d = n(52436),
        f = n(37784);

      function h(e, t) {
        let {
          inputElementType: n = "input",
          isDisabled: h = !1,
          isRequired: p = !1,
          isReadOnly: v = !1,
          type: m = "text",
          validationBehavior: g = "aria"
        } = e, [y, b] = (0, l.P)(e.value, e.defaultValue || "", e.onChange), {
          focusableProps: E
        } = (0, u.W)(e, t), w = (0, f.KZ)({
          ...e,
          value: y
        }), {
          isInvalid: T,
          validationErrors: _,
          validationDetails: P
        } = w.displayValidation, {
          labelProps: S,
          fieldProps: C,
          descriptionProps: L,
          errorMessageProps: x
        } = (0, c.M)({
          ...e,
          isInvalid: T,
          errorMessage: e.errorMessage || _
        }), A = (0, o.$)(e, {
          labelable: !0
        });
        const M = {
          type: m,
          pattern: e.pattern
        };
        return (0, i.F)(t, y, b), (0, d.X)(e, w, t), (0, r.useEffect)((() => {
          if (t.current instanceof(0, s.m)(t.current).HTMLTextAreaElement) {
            let e = t.current;
            Object.defineProperty(e, "defaultValue", {
              get: () => e.value,
              set: () => {},
              configurable: !0
            })
          }
        }), [t]), {
          labelProps: S,
          inputProps: (0, a.v)(A, "input" === n ? M : void 0, {
            disabled: h,
            readOnly: v,
            required: p && "native" === g,
            "aria-required": p && "aria" === g || void 0,
            "aria-invalid": T || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-activedescendant": e["aria-activedescendant"],
            "aria-autocomplete": e["aria-autocomplete"],
            "aria-haspopup": e["aria-haspopup"],
            value: y,
            onChange: e => b(e.target.value),
            autoComplete: e.autoComplete,
            autoCapitalize: e.autoCapitalize,
            maxLength: e.maxLength,
            minLength: e.minLength,
            name: e.name,
            placeholder: e.placeholder,
            inputMode: e.inputMode,
            onCopy: e.onCopy,
            onCut: e.onCut,
            onPaste: e.onPaste,
            onCompositionEnd: e.onCompositionEnd,
            onCompositionStart: e.onCompositionStart,
            onCompositionUpdate: e.onCompositionUpdate,
            onSelect: e.onSelect,
            onBeforeInput: e.onBeforeInput,
            onInput: e.onInput,
            ...E,
            ...C
          }),
          descriptionProps: L,
          errorMessageProps: x,
          isInvalid: T,
          validationErrors: _,
          validationDetails: P
        }
      }
    },
    71734: (e, t, n) => {
      function r(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      n.d(t, {
        c: () => r
      })
    },
    47444: (e, t, n) => {
      n.d(t, {
        T: () => r,
        m: () => o
      });
      const r = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        o = e => e && "window" in e && e.window === e ? e : r(e).defaultView || window
    },
    39891: (e, t, n) => {
      n.d(t, {
        $: () => a
      });
      const r = new Set(["id"]),
        o = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        i = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        s = /^(data-.*)$/;

      function a(e, t = {}) {
        let {
          labelable: n,
          isLink: a,
          propNames: l
        } = t, c = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || n && o.has(t) || a && i.has(t) || (null == l ? void 0 : l.has(t)) || s.test(t)) && (c[t] = e[t]);
        return c
      }
    },
    97724: (e, t, n) => {
      function r(e) {
        if (function() {
            if (null == o) {
              o = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return o = !0, !0
                  }
                })
              } catch (e) {}
            }
            return o
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      n.d(t, {
        e: () => r
      });
      let o = null
    },
    23908: (e, t, n) => {
      n.d(t, {
        P: () => i,
        Y: () => o
      });
      var r = n(35362);

      function o(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || ((0, r.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function i(e) {
        return !(0, r.m0)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
      }
    },
    78345: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(71734),
        o = n(45665),
        i = n(5060);

      function s(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let s = e[n];
          for (let e in s) {
            let n = t[e],
              a = s[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = (0, r.c)(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = (0, o.Tw)(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, i.A)(n, a)
          }
        }
        return t
      }
    },
    79623: (e, t, n) => {
      n.d(t, {
        Fe: () => c,
        _h: () => u,
        rd: () => a,
        sU: () => l
      });
      var r = n(97724),
        o = n(35362),
        i = n(62229);
      const s = (0, i.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, (e => c(e, t)))
        },
        useHref: e => e
      });

      function a() {
        return (0, i.useContext)(s)
      }

      function l(e, t) {
        let n = e.getAttribute("target");
        return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
      }

      function c(e, t, n = !0) {
        var i, s;
        let {
          metaKey: a,
          ctrlKey: l,
          altKey: u,
          shiftKey: d
        } = t;
        (0, o.gm)() && (null === (s = window.event) || void 0 === s || null === (i = s.type) || void 0 === i ? void 0 : i.startsWith("key")) && "_blank" === e.target && ((0, o.cX)() ? a = !0 : l = !0);
        let f = (0, o.Tc)() && (0, o.cX)() && !(0, o.bh)() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: l,
          altKey: u,
          shiftKey: d
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: l,
          altKey: u,
          shiftKey: d,
          bubbles: !0,
          cancelable: !0
        });
        c.isOpening = n, (0, r.e)(e), e.dispatchEvent(f), c.isOpening = !1
      }

      function u(e) {
        var t;
        const n = a().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      c.isOpening = !1
    },
    35362: (e, t, n) => {
      function r(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function o(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function i(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      n.d(t, {
        Tc: () => u,
        bh: () => l,
        cX: () => s,
        gm: () => h,
        m0: () => f,
        un: () => c
      });
      const s = i((function() {
          return o(/^Mac/i)
        })),
        a = i((function() {
          return o(/^iPhone/i)
        })),
        l = i((function() {
          return o(/^iPad/i) || s() && navigator.maxTouchPoints > 1
        })),
        c = i((function() {
          return a() || l()
        })),
        u = (i((function() {
          return s() || c()
        })), i((function() {
          return r(/AppleWebKit/i) && !d()
        }))),
        d = i((function() {
          return r(/Chrome/i)
        })),
        f = i((function() {
          return r(/Android/i)
        })),
        h = i((function() {
          return r(/Firefox/i)
        }))
    },
    77425: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      let r = new Map,
        o = new Set;

      function i() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let i = r.get(n.target);
          if (i && (i.delete(n.propertyName), 0 === i.size && (n.target.removeEventListener("transitioncancel", t), r.delete(n.target)), 0 === r.size)) {
            for (let e of o) e();
            o.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let o = r.get(n.target);
          o || (o = new Set, r.set(n.target, o), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), o.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function s(e) {
        requestAnimationFrame((() => {
          0 === r.size ? e() : o.add(e)
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? i() : document.addEventListener("DOMContentLoaded", i))
    },
    85753: (e, t, n) => {
      n.d(t, {
        J: () => i
      });
      var r = n(31985),
        o = n(62229);

      function i(e) {
        const t = (0, o.useRef)(null);
        return (0, r.N)((() => {
          t.current = e
        }), [e]), (0, o.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
    },
    15751: (e, t, n) => {
      n.d(t, {
        F: () => i
      });
      var r = n(85753),
        o = n(62229);

      function i(e, t, n) {
        let i = (0, o.useRef)(t),
          s = (0, r.J)((() => {
            n && n(i.current)
          }));
        (0, o.useEffect)((() => {
          var t;
          let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == n || n.addEventListener("reset", s), () => {
            null == n || n.removeEventListener("reset", s)
          }
        }), [e, s])
      }
    },
    45665: (e, t, n) => {
      n.d(t, {
        Tw: () => u,
        Bi: () => c,
        X1: () => d
      });
      var r = n(31985),
        o = n(85753),
        i = n(62229);
      var s = n(87791);
      let a = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        l = new Map;

      function c(e) {
        let [t, n] = (0, i.useState)(e), o = (0, i.useRef)(null), c = (0, s.Cc)(t), u = (0, i.useCallback)((e => {
          o.current = e
        }), []);
        return a && (l.has(c) && !l.get(c).includes(u) ? l.set(c, [...l.get(c), u]) : l.set(c, [u])), (0, r.N)((() => {
          let e = c;
          return () => {
            l.delete(e)
          }
        }), [c]), (0, i.useEffect)((() => {
          let e = o.current;
          e && (o.current = null, n(e))
        })), c
      }

      function u(e, t) {
        if (e === t) return e;
        let n = l.get(e);
        if (n) return n.forEach((e => e(t))), t;
        let r = l.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function d(e = []) {
        let t = c(),
          [n, s] = function(e) {
            let [t, n] = (0, i.useState)(e), s = (0, i.useRef)(null), a = (0, o.J)((() => {
              if (!s.current) return;
              let e = s.current.next();
              e.done ? s.current = null : t === e.value ? a() : n(e.value)
            }));
            (0, r.N)((() => {
              s.current && a()
            }));
            let l = (0, o.J)((e => {
              s.current = e(t), a()
            }));
            return [t, l]
          }(t),
          a = (0, i.useCallback)((() => {
            s((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, s]);
        return (0, r.N)(a, [t, a, ...e]), n
      }
    },
    31985: (e, t, n) => {
      n.d(t, {
        N: () => o
      });
      var r = n(62229);
      const o = "undefined" != typeof document ? r.useLayoutEffect : () => {}
    },
    116: (e, t, n) => {
      n.d(t, {
        w: () => o
      });
      var r = n(31985);

      function o(e, t) {
        (0, r.N)((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
    },
    78085: (e, t, n) => {
      n.d(t, {
        $s: () => h,
        Ao: () => s,
        De: () => E,
        SJ: () => m,
        nm: () => l,
        pS: () => d,
        rf: () => u,
        uX: () => a
      });
      var r = n(41453),
        o = n(62229),
        i = Symbol.for("Animated:node"),
        s = e => e && e[i],
        a = (e, t) => (0, r.OX)(e, i, t),
        l = e => e && e[i] && e[i].getPayload(),
        c = class {
          constructor() {
            a(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        u = class extends c {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, r.is.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new u(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return r.is.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, r.is.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        d = class extends u {
          constructor(e) {
            super(0), this._string = null, this._toString = (0, r.kx)({
              output: [e, e]
            })
          }
          static create(e) {
            return new d(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (r.is.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = (0, r.kx)({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        f = {
          dependencies: null
        },
        h = class extends c {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return (0, r.FI)(this.source, ((n, o) => {
              var s;
              (s = n) && s[i] === s ? t[o] = n.getValue(e) : (0, r.at)(n) ? t[o] = (0, r.oq)(n) : e || (t[o] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && (0, r.__)(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return (0, r.FI)(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            f.dependencies && (0, r.at)(e) && f.dependencies.add(e);
            const t = l(e);
            t && (0, r.__)(t, (e => this.add(e)))
          }
        },
        p = class extends h {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new p(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(v)), !0)
          }
        };

      function v(e) {
        return ((0, r.$7)(e) ? d : u).create(e)
      }

      function m(e) {
        const t = s(e);
        return t ? t.constructor : r.is.arr(e) ? p : (0, r.$7)(e) ? d : u
      }
      var g = (e, t) => {
          const n = !r.is.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, o.forwardRef)(((i, s) => {
            const a = (0, o.useRef)(null),
              l = n && (0, o.useCallback)((e => {
                a.current = function(e, t) {
                  return e && (r.is.fun(e) ? e(t) : e.current = t), t
                }(s, e)
              }), [s]),
              [c, u] = function(e, t) {
                const n = new Set;
                return f.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new h(e), f.dependencies = null, [e, n]
              }(i, t),
              d = (0, r.CH)(),
              p = () => {
                const e = a.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, c.getValue(!0))) && d()
              },
              v = new y(p, u),
              m = (0, o.useRef)();
            (0, r.Es)((() => (m.current = v, (0, r.__)(u, (e => (0, r.Ec)(e, v))), () => {
              m.current && ((0, r.__)(m.current.deps, (e => (0, r.DV)(e, m.current))), r.er.cancel(m.current.update))
            }))), (0, o.useEffect)(p, []), (0, r.H5)((() => () => {
              const e = m.current;
              (0, r.__)(e.deps, (t => (0, r.DV)(t, e)))
            }));
            const g = t.getComponentProps(c.getValue());
            return o.createElement(e, {
              ...g,
              ref: l
            })
          }))
        },
        y = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && r.er.write(this.update)
          }
        },
        b = Symbol.for("AnimatedComponent"),
        E = (e, {
          applyAnimatedValues: t = (() => !1),
          createAnimatedStyle: n = (e => new h(e)),
          getComponentProps: o = (e => e)
        } = {}) => {
          const i = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: o
            },
            s = e => {
              const t = w(e) || "Anonymous";
              return (e = r.is.str(e) ? s[e] || (s[e] = g(e, i)) : e[b] || (e[b] = g(e, i))).displayName = `Animated(${t})`, e
            };
          return (0, r.FI)(e, ((t, n) => {
            r.is.arr(e) && (n = w(t)), s[n] = s(t)
          })), {
            animated: s
          }
        },
        w = e => r.is.str(e) ? e : e && r.is.str(e.displayName) ? e.displayName : r.is.fun(e) && e.name || null
    },
    94549: (e, t, n) => {
      n.d(t, {
        $W: () => w,
        RV: () => r.RV,
        U2: () => ge,
        n$: () => E,
        pn: () => ye,
        zh: () => ve
      });
      var r = n(41453),
        o = n(62229),
        i = n(78085);

      function s(e, ...t) {
        return r.is.fun(e) ? e(...t) : e
      }
      var a = (e, t) => !0 === e || !!(t && e && (r.is.fun(e) ? e(t) : (0, r.$r)(e).includes(t))),
        l = (e, t) => r.is.obj(e) ? t && e[t] : e,
        c = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        u = e => e,
        d = (e, t = u) => {
          let n = f;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const o = {};
          for (const i of n) {
            const n = t(e[i], i);
            r.is.und(n) || (o[i] = n)
          }
          return o
        },
        f = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        h = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1
        };

      function p(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if ((0, r.FI)(e, ((e, r) => {
              h[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return (0, r.FI)(e, ((e, r) => r in t || (n[r] = e))), n
        }
        return {
          ...e
        }
      }

      function v(e) {
        return e = (0, r.oq)(e), r.is.arr(e) ? e.map(v) : (0, r.$7)(e) ? r.RV.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function m(e) {
        for (const t in e) return !0;
        return !1
      }

      function g(e) {
        return r.is.fun(e) || r.is.arr(e) && r.is.obj(e[0])
      }

      function y(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function b(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }

      function E(e, t, n = 1e3) {
        (0, r.Es)((() => {
          if (t) {
            let o = 0;
            (0, r.__)(e, ((e, i) => {
              const a = e.current;
              if (a.length) {
                let l = n * t[i];
                isNaN(l) ? l = o : o = l, (0, r.__)(a, (e => {
                  (0, r.__)(e.queue, (e => {
                    const t = e.delay;
                    e.delay = e => l + s(t || 0, e)
                  }))
                })), e.start()
              }
            }))
          } else {
            let t = Promise.resolve();
            (0, r.__)(e, (e => {
              const n = e.current;
              if (n.length) {
                const o = n.map((e => {
                  const t = e.queue;
                  return e.queue = [], t
                }));
                t = t.then((() => ((0, r.__)(n, ((e, t) => (0, r.__)(o[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
              }
            }))
          }
        }))
      }
      var w = {
          default: {
            tension: 170,
            friction: 26
          },
          gentle: {
            tension: 120,
            friction: 14
          },
          wobbly: {
            tension: 180,
            friction: 12
          },
          stiff: {
            tension: 210,
            friction: 20
          },
          slow: {
            tension: 280,
            friction: 60
          },
          molasses: {
            tension: 280,
            friction: 120
          }
        },
        T = {
          ...w.default,
          mass: 1,
          damping: 1,
          easing: r.le.linear,
          clamp: !1
        },
        _ = class {
          constructor() {
            this.velocity = 0, Object.assign(this, T)
          }
        };

      function P(e, t) {
        if (r.is.und(t.decay)) {
          const n = !r.is.und(t.tension) || !r.is.und(t.friction);
          !n && r.is.und(t.frequency) && r.is.und(t.damping) && r.is.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var S = [],
        C = class {
          constructor() {
            this.changed = !1, this.values = S, this.toValues = null, this.fromValues = S, this.config = new _, this.immediate = !1
          }
        };

      function L(e, {
        key: t,
        props: n,
        defaultProps: o,
        state: i,
        actions: l
      }) {
        return new Promise(((c, u) => {
          let d, f, h = a(n.cancel ?? o?.cancel, t);
          if (h) m();
          else {
            r.is.und(n.pause) || (i.paused = a(n.pause, t));
            let e = o?.pause;
            !0 !== e && (e = i.paused || a(e, t)), d = s(n.delay || 0, t), e ? (i.resumeQueue.add(v), l.pause()) : (l.resume(), v())
          }

          function p() {
            i.resumeQueue.add(v), i.timeouts.delete(f), f.cancel(), d = f.time - r.er.now()
          }

          function v() {
            d > 0 && !r.RV.skipAnimation ? (i.delayed = !0, f = r.er.setTimeout(m, d), i.pauseQueue.add(p), i.timeouts.add(f)) : m()
          }

          function m() {
            i.delayed && (i.delayed = !1), i.pauseQueue.delete(p), i.timeouts.delete(f), e <= (i.cancelId || 0) && (h = !0);
            try {
              l.start({
                ...n,
                callId: e,
                cancel: h
              }, c)
            } catch (e) {
              u(e)
            }
          }
        }))
      }
      var x = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? O(e.get()) : t.every((e => e.noop)) ? A(e.get()) : M(e.get(), t.every((e => e.finished))),
        A = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        M = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        O = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function k(e, t, n, o) {
        const {
          callId: i,
          parentId: s,
          onRest: a
        } = t, {
          asyncTo: l,
          promise: c
        } = n;
        return s || e !== l || t.reset ? n.promise = (async () => {
          n.asyncId = i, n.asyncTo = e;
          const u = d(t, ((e, t) => "onRest" === t ? void 0 : e));
          let f, h;
          const p = new Promise(((e, t) => (f = e, h = t))),
            v = e => {
              const t = i <= (n.cancelId || 0) && O(o) || i !== n.asyncId && M(o, !1);
              if (t) throw e.result = t, h(e), e
            },
            m = (e, t) => {
              const s = new R,
                a = new H;
              return (async () => {
                if (r.RV.skipAnimation) throw I(n), a.result = M(o, !1), h(a), a;
                v(s);
                const l = r.is.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                l.parentId = i, (0, r.FI)(u, ((e, t) => {
                  r.is.und(l[t]) && (l[t] = e)
                }));
                const c = await o.start(l);
                return v(s), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), c
              })()
            };
          let g;
          if (r.RV.skipAnimation) return I(n), M(o, !1);
          try {
            let t;
            t = r.is.arr(e) ? (async e => {
              for (const t of e) await m(t)
            })(e) : Promise.resolve(e(m, o.stop.bind(o))), await Promise.all([t.then(f), p]), g = M(o.get(), !0, !1)
          } catch (e) {
            if (e instanceof R) g = e.result;
            else {
              if (!(e instanceof H)) throw e;
              g = e.result
            }
          } finally {
            i == n.asyncId && (n.asyncId = s, n.asyncTo = s ? l : void 0, n.promise = s ? c : void 0)
          }
          return r.is.fun(a) && r.er.batchedUpdates((() => {
            a(g, o, o.item)
          })), g
        })() : c
      }

      function I(e, t) {
        (0, r.bX)(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var R = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        H = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        N = e => e instanceof B,
        D = 1,
        B = class extends r.aq {
          constructor() {
            super(...arguments), this.id = D++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = (0, i.Ao)(this);
            return e && e.getValue()
          }
          to(...e) {
            return r.RV.to(this, e)
          }
          interpolate(...e) {
            return (0, r.ZJ)(), r.RV.to(this, e)
          }
          toJSON() {
            return this.get()
          }
          observerAdded(e) {
            1 == e && this._attach()
          }
          observerRemoved(e) {
            0 == e && this._detach()
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            (0, r.MI)(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || r.WU.sort(this), (0, r.MI)(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        F = Symbol.for("SpringPhase"),
        U = e => (1 & e[F]) > 0,
        j = e => (2 & e[F]) > 0,
        K = e => (4 & e[F]) > 0,
        V = (e, t) => t ? e[F] |= 3 : e[F] &= -3,
        G = (e, t) => t ? e[F] |= 4 : e[F] &= -5,
        W = class extends B {
          constructor(e, t) {
            if (super(), this.animation = new C, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !r.is.und(e) || !r.is.und(t)) {
              const n = r.is.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              r.is.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(j(this) || this._state.asyncTo) || K(this)
          }
          get goal() {
            return (0, r.oq)(this.animation.to)
          }
          get velocity() {
            const e = (0, i.Ao)(this);
            return e instanceof i.rf ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return U(this)
          }
          get isAnimating() {
            return j(this)
          }
          get isPaused() {
            return K(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              n = !1;
            const o = this.animation;
            let {
              toValues: s
            } = o;
            const {
              config: a
            } = o, l = (0, i.nm)(o.to);
            !l && (0, r.at)(o.to) && (s = (0, r.$r)((0, r.oq)(o.to))), o.values.forEach(((c, u) => {
              if (c.done) return;
              const d = c.constructor == i.pS ? 1 : l ? l[u].lastPosition : s[u];
              let f = o.immediate,
                h = d;
              if (!f) {
                if (h = c.lastPosition, a.tension <= 0) return void(c.done = !0);
                let t = c.elapsedTime += e;
                const n = o.fromValues[u],
                  i = null != c.v0 ? c.v0 : c.v0 = r.is.arr(a.velocity) ? a.velocity[u] : a.velocity;
                let s;
                const l = a.precision || (n == d ? .005 : Math.min(1, .001 * Math.abs(d - n)));
                if (r.is.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      r = Math.exp(-(1 - e) * t);
                    h = n + i / (1 - e) * (1 - r), f = Math.abs(c.lastPosition - h) <= l, s = i * r
                  } else {
                    s = null == c.lastVelocity ? i : c.lastVelocity;
                    const t = a.restVelocity || l / 10,
                      o = a.clamp ? 0 : a.bounce,
                      u = !r.is.und(o),
                      p = n == d ? c.v0 > 0 : n < d;
                    let v, m = !1;
                    const g = 1,
                      y = Math.ceil(e / g);
                    for (let e = 0; e < y && (v = Math.abs(s) > t, v || (f = Math.abs(d - h) <= l, !f)); ++e) u && (m = h == d || h > d == p, m && (s = -s * o, h = d)), s += (1e-6 * -a.tension * (h - d) + .001 * -a.friction * s) / a.mass * g, h += s * g
                  }
                else {
                  let r = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, c.durationProgress > 0 && (c.elapsedTime = a.duration * c.durationProgress, t = c.elapsedTime += e)), r = (a.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, c.durationProgress = r), h = n + a.easing(r) * (d - n), s = (h - c.lastPosition) / e, f = 1 == r
                }
                c.lastVelocity = s, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), f = !0)
              }
              l && !l[u].done && (f = !1), f ? c.done = !0 : t = !1, c.setValue(h, a.round) && (n = !0)
            }));
            const c = (0, i.Ao)(this),
              u = c.getValue();
            if (t) {
              const e = (0, r.oq)(o.to);
              u === e && !n || a.decay ? n && a.decay && this._onChange(u) : (c.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(u)
          }
          set(e) {
            return r.er.batchedUpdates((() => {
              this._stop(), this._focus(e), this._set(e)
            })), this
          }
          pause() {
            this._update({
              pause: !0
            })
          }
          resume() {
            this._update({
              pause: !1
            })
          }
          finish() {
            if (j(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              r.er.batchedUpdates((() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let n;
            return r.is.und(e) ? (n = this.queue || [], this.queue = []) : n = [r.is.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => x(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), I(this._state, e && this._lastCallId), r.er.batchedUpdates((() => this._stop(t, e))), this
          }
          reset() {
            this._update({
              reset: !0
            })
          }
          eventObserved(e) {
            "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
          }
          _prepareNode(e) {
            const t = this.key || "";
            let {
              to: n,
              from: o
            } = e;
            n = r.is.obj(n) ? n[t] : n, (null == n || g(n)) && (n = void 0), o = r.is.obj(o) ? o[t] : o, null == o && (o = void 0);
            const s = {
              to: n,
              from: o
            };
            return U(this) || (e.reverse && ([n, o] = [o, n]), o = (0, r.oq)(o), r.is.und(o) ? (0, i.Ao)(this) || this._set(n) : this._set(o)), s
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: o
            } = this;
            e.default && Object.assign(o, d(e, ((e, t) => /^on/.test(t) ? l(e, n) : e))), J(this, e, "onProps"), Q(this, "onProps", e, this);
            const i = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const s = this._state;
            return L(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: o,
              state: s,
              actions: {
                pause: () => {
                  K(this) || (G(this, !0), (0, r.Wd)(s.pauseQueue), Q(this, "onPause", M(this, X(this, this.animation.to)), this))
                },
                resume: () => {
                  K(this) && (G(this, !1), j(this) && this._resume(), (0, r.Wd)(s.resumeQueue), Q(this, "onResume", M(this, X(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, i)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = z(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(O(this));
            const o = !r.is.und(e.to),
              l = !r.is.und(e.from);
            if (o || l) {
              if (!(t.callId > this._lastToId)) return n(O(this));
              this._lastToId = t.callId
            }
            const {
              key: c,
              defaultProps: u,
              animation: d
            } = this, {
              to: f,
              from: h
            } = d;
            let {
              to: p = f,
              from: m = h
            } = e;
            !l || o || t.default && !r.is.und(p) || (p = m), t.reverse && ([p, m] = [m, p]);
            const y = !(0, r.n4)(m, h);
            y && (d.from = m), m = (0, r.oq)(m);
            const b = !(0, r.n4)(p, f);
            b && this._focus(p);
            const E = g(t.to),
              {
                config: w
              } = d,
              {
                decay: _,
                velocity: S
              } = w;
            (o || l) && (w.velocity = 0), t.config && !E && function(e, t, n) {
              n && (P(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), P(e, t), Object.assign(e, t);
              for (const t in T) null == e[t] && (e[t] = T[t]);
              let {
                frequency: o,
                damping: i
              } = e;
              const {
                mass: s
              } = e;
              r.is.und(o) || (o < .01 && (o = .01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * s, e.friction = 4 * Math.PI * i * s / o)
            }(w, s(t.config, c), t.config !== u.config ? s(u.config, c) : void 0);
            let C = (0, i.Ao)(this);
            if (!C || r.is.und(p)) return n(M(this, !0));
            const L = r.is.und(t.reset) ? l && !t.default : !r.is.und(m) && a(t.reset, c),
              x = L ? m : this.get(),
              I = v(p),
              R = r.is.num(I) || r.is.arr(I) || (0, r.$7)(I),
              H = !E && (!R || a(u.immediate || t.immediate, c));
            if (b) {
              const e = (0, i.SJ)(p);
              if (e !== C.constructor) {
                if (!H) throw Error(`Cannot animate between ${C.constructor.name} and ${e.name}, as the "to" prop suggests`);
                C = this._set(I)
              }
            }
            const N = C.constructor;
            let D = (0, r.at)(p),
              B = !1;
            if (!D) {
              const e = L || !U(this) && y;
              (b || e) && (B = (0, r.n4)(v(x), I), D = !B), ((0, r.n4)(d.immediate, H) || H) && (0, r.n4)(w.decay, _) && (0, r.n4)(w.velocity, S) || (D = !0)
            }
            if (B && j(this) && (d.changed && !L ? D = !0 : D || this._stop(f)), !E && ((D || (0, r.at)(f)) && (d.values = C.getPayload(), d.toValues = (0, r.at)(p) ? null : N == i.pS ? [1] : (0, r.$r)(I)), d.immediate != H && (d.immediate = H, H || L || this._set(f)), D)) {
              const {
                onRest: e
              } = d;
              (0, r.__)(Z, (e => J(this, t, e)));
              const o = M(this, X(this, f));
              (0, r.Wd)(this._pendingCalls, o), this._pendingCalls.add(n), d.changed && r.er.batchedUpdates((() => {
                d.changed = !L, e?.(o, this), L ? s(u.onRest, o) : d.onStart?.(o, this)
              }))
            }
            L && this._set(x), E ? n(k(t.to, t, this._state, this)) : D ? this._start() : j(this) && !b ? this._pendingCalls.add(n) : n(A(x))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && ((0, r.Wg)(this) && this._detach(), t.to = e, (0, r.Wg)(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            (0, r.at)(t) && ((0, r.Ec)(t, this), N(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            (0, r.at)(e) && (0, r.DV)(e, this)
          }
          _set(e, t = !0) {
            const n = (0, r.oq)(e);
            if (!r.is.und(n)) {
              const e = (0, i.Ao)(this);
              if (!e || !(0, r.n4)(n, e.getValue())) {
                const o = (0, i.SJ)(n);
                e && e.constructor == o ? e.setValue(n) : (0, i.uX)(this, o.create(n)), e && r.er.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return (0, i.Ao)(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Q(this, "onStart", M(this, X(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), s(this.animation.onChange, e, this)), s(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            (0, i.Ao)(this).reset((0, r.oq)(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), j(this) || (V(this, !0), K(this) || this._resume())
          }
          _resume() {
            r.RV.skipAnimation ? this.finish() : r.WU.start(this)
          }
          _stop(e, t) {
            if (j(this)) {
              V(this, !1);
              const n = this.animation;
              (0, r.__)(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), (0, r.MI)(this, {
                type: "idle",
                parent: this
              });
              const o = t ? O(this.get()) : M(this.get(), X(this, e ?? n.to));
              (0, r.Wd)(this._pendingCalls, o), n.changed && (n.changed = !1, Q(this, "onRest", o, this))
            }
          }
        };

      function X(e, t) {
        const n = v(t),
          o = v(e.get());
        return (0, r.n4)(o, n)
      }

      function z(e, t = e.loop, n = e.to) {
        const r = s(t);
        if (r) {
          const o = !0 !== r && p(r),
            i = (o || e).reverse,
            s = !o || o.reset;
          return $({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || g(n) ? n : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function $(e) {
        const {
          to: t,
          from: n
        } = e = p(e), o = new Set;
        return r.is.obj(t) && q(t, o), r.is.obj(n) && q(n, o), e.keys = o.size ? Array.from(o) : null, e
      }

      function Y(e) {
        const t = $(e);
        return r.is.und(t.default) && (t.default = d(t)), t
      }

      function q(e, t) {
        (0, r.FI)(e, ((e, n) => null != e && t.add(n)))
      }
      var Z = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function J(e, t, n) {
        e.animation[n] = t[n] !== c(t, n) ? l(t[n], e.key) : void 0
      }

      function Q(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var ee = ["onStart", "onChange", "onRest"],
        te = 1,
        ne = class {
          constructor(e, t) {
            this.id = te++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._events = {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
              default: !0,
              ...e
            })
          }
          get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each(((t, n) => e[n] = t.get())), e
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              r.is.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push($(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = (0, r.$r)(e).map($) : this.queue = [], this._flush ? this._flush(this, t) : (ce(this, t), re(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              (0, r.__)((0, r.$r)(t), (t => n[t].stop(!!e)))
            } else I(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (r.is.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              (0, r.__)((0, r.$r)(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (r.is.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              (0, r.__)((0, r.$r)(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            (0, r.FI)(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, o = this._active.size > 0, i = this._changed.size > 0;
            (o && !this._started || i && !this._started) && (this._started = !0, (0, r.bX)(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const s = !o && this._started,
              a = i || s && n.size ? this.get() : null;
            i && t.size && (0, r.bX)(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), s && (this._started = !1, (0, r.bX)(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            r.er.onFrame(this._onFrame)
          }
        };

      function re(e, t) {
        return Promise.all(t.map((t => oe(e, t)))).then((t => x(e, t)))
      }
      async function oe(e, t, n) {
        const {
          keys: o,
          to: i,
          from: s,
          loop: a,
          onRest: l,
          onResolve: u
        } = t, d = r.is.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === i && (t.to = null), !1 === s && (t.from = null);
        const f = r.is.arr(i) || r.is.fun(i) ? i : void 0;
        f ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : (0, r.__)(ee, (n => {
          const o = t[n];
          if (r.is.fun(o)) {
            const r = e._events[n];
            t[n] = ({
              finished: e,
              cancelled: t
            }) => {
              const n = r.get(o);
              n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : r.set(o, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, d && (d[n] = t[n])
          }
        }));
        const h = e._state;
        t.pause === !h.paused ? (h.paused = t.pause, (0, r.Wd)(t.pause ? h.pauseQueue : h.resumeQueue)) : h.paused && (t.pause = !0);
        const p = (o || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          v = !0 === t.cancel || !0 === c(t, "cancel");
        (f || v && h.asyncId) && p.push(L(++e._lastAsyncId, {
          props: t,
          state: h,
          actions: {
            pause: r.lQ,
            resume: r.lQ,
            start(t, n) {
              v ? (I(h, e._lastAsyncId), n(O(e))) : (t.onRest = l, n(k(f, t, h, e)))
            }
          }
        })), h.paused && await new Promise((e => {
          h.resumeQueue.add(e)
        }));
        const m = x(e, await Promise.all(p));
        if (a && m.finished && (!n || !m.noop)) {
          const n = z(t, a, i);
          if (n) return ce(e, [n]), oe(e, n, !0)
        }
        return u && r.er.batchedUpdates((() => u(m, e, e.item))), m
      }

      function ie(e, t) {
        const n = {
          ...e.springs
        };
        return t && (0, r.__)((0, r.$r)(t), (e => {
          r.is.und(e.keys) && (e = $(e)), r.is.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), le(n, e, (e => ae(e)))
        })), se(e, n), n
      }

      function se(e, t) {
        (0, r.FI)(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, (0, r.Ec)(t, e))
        }))
      }

      function ae(e, t) {
        const n = new W;
        return n.key = e, t && (0, r.Ec)(n, t), n
      }

      function le(e, t, n) {
        t.keys && (0, r.__)(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function ce(e, t) {
        (0, r.__)(t, (t => {
          le(e.springs, t, (t => ae(t, e)))
        }))
      }
      var ue, de, fe = ({
          children: e,
          ...t
        }) => {
          const n = (0, o.useContext)(he),
            i = t.pause || !!n.pause,
            s = t.immediate || !!n.immediate;
          t = (0, r.MA)((() => ({
            pause: i,
            immediate: s
          })), [i, s]);
          const {
            Provider: a
          } = he;
          return o.createElement(a, {
            value: t
          }, e)
        },
        he = (ue = fe, de = {}, Object.assign(ue, o.createContext(de)), ue.Provider._context = ue, ue.Consumer._context = ue, ue);
      fe.Provider = he.Provider, fe.Consumer = he.Consumer;
      var pe = () => {
        const e = [],
          t = function(t) {
            (0, r.HX)();
            const o = [];
            return (0, r.__)(e, ((e, i) => {
              if (r.is.und(t)) o.push(e.start());
              else {
                const r = n(t, e, i);
                r && o.push(e.start(r))
              }
            })), o
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const n = e.indexOf(t);
          ~n && e.splice(n, 1)
        }, t.pause = function() {
          return (0, r.__)(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return (0, r.__)(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          (0, r.__)(e, ((e, n) => {
            const o = r.is.fun(t) ? t(n, e) : t;
            o && e.set(o)
          }))
        }, t.start = function(t) {
          const n = [];
          return (0, r.__)(e, ((e, o) => {
            if (r.is.und(t)) n.push(e.start());
            else {
              const r = this._getProps(t, e, o);
              r && n.push(e.start(r))
            }
          })), n
        }, t.stop = function() {
          return (0, r.__)(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return (0, r.__)(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return r.is.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function ve(e, t) {
        const n = r.is.fun(e),
          [
            [i], s
          ] = function(e, t, n) {
            const i = r.is.fun(t) && t;
            i && !n && (n = []);
            const s = (0, o.useMemo)((() => i || 3 == arguments.length ? pe() : void 0), []),
              a = (0, o.useRef)(0),
              l = (0, r.CH)(),
              c = (0, o.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = ie(e, t);
                  return a.current > 0 && !c.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? re(e, t) : new Promise((r => {
                    se(e, n), c.queue.push((() => {
                      r(re(e, t))
                    })), l()
                  }))
                }
              })), []),
              u = (0, o.useRef)([...c.ctrls]),
              d = [],
              f = (0, r.NQ)(e) || 0;

            function h(e, n) {
              for (let r = e; r < n; r++) {
                const e = u.current[r] || (u.current[r] = new ne(null, c.flush)),
                  n = i ? i(r, e) : t[r];
                n && (d[r] = Y(n))
              }
            }(0, o.useMemo)((() => {
              (0, r.__)(u.current.slice(e, f), (e => {
                y(e, s), e.stop(!0)
              })), u.current.length = e, h(f, e)
            }), [e]), (0, o.useMemo)((() => {
              h(0, Math.min(f, e))
            }), n);
            const p = u.current.map(((e, t) => ie(e, d[t]))),
              v = (0, o.useContext)(fe),
              g = (0, r.NQ)(v),
              E = v !== g && m(v);
            (0, r.Es)((() => {
              a.current++, c.ctrls = u.current;
              const {
                queue: e
              } = c;
              e.length && (c.queue = [], (0, r.__)(e, (e => e()))), (0, r.__)(u.current, ((e, t) => {
                s?.add(e), E && e.start({
                  default: v
                });
                const n = d[t];
                n && (b(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), (0, r.H5)((() => () => {
              (0, r.__)(c.ctrls, (e => e.stop(!0)))
            }));
            const w = p.map((e => ({
              ...e
            })));
            return s ? [w, s] : w
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [i, s] : i
      }
      var me = () => pe(),
        ge = () => (0, o.useState)(me)[0];

      function ye(e, t, n) {
        const i = r.is.fun(t) && t,
          {
            reset: a,
            sort: l,
            trail: c = 0,
            expires: u = !0,
            exitBeforeEnter: f = !1,
            onDestroyed: h,
            ref: v,
            config: g
          } = i ? i() : t,
          E = (0, o.useMemo)((() => i || 3 == arguments.length ? pe() : void 0), []),
          w = (0, r.$r)(e),
          T = [],
          _ = (0, o.useRef)(null),
          P = a ? null : _.current;
        (0, r.Es)((() => {
          _.current = T
        })), (0, r.H5)((() => ((0, r.__)(T, (e => {
          E?.add(e.ctrl), e.ctrl.ref = E
        })), () => {
          (0, r.__)(_.current, (e => {
            e.expired && clearTimeout(e.expirationId), y(e.ctrl, E), e.ctrl.stop(!0)
          }))
        })));
        const S = function(e, {
            key: t,
            keys: n = t
          }, o) {
            if (null === n) {
              const t = new Set;
              return e.map((e => {
                const n = o && o.find((n => n.item === e && "leave" !== n.phase && !t.has(n)));
                return n ? (t.add(n), n.key) : be++
              }))
            }
            return r.is.und(n) ? e : r.is.fun(n) ? e.map(n) : (0, r.$r)(n)
          }(w, i ? i() : t, P),
          C = a && _.current || [];
        (0, r.Es)((() => (0, r.__)(C, (({
          ctrl: e,
          item: t,
          key: n
        }) => {
          y(e, E), s(h, t, n)
        }))));
        const L = [];
        if (P && (0, r.__)(P, ((e, t) => {
            e.expired ? (clearTimeout(e.expirationId), C.push(e)) : ~(t = L[t] = S.indexOf(e.key)) && (T[t] = e)
          })), (0, r.__)(w, ((e, t) => {
            T[t] || (T[t] = {
              key: S[t],
              item: e,
              phase: "mount",
              ctrl: new ne
            }, T[t].ctrl.item = e)
          })), L.length) {
          let e = -1;
          const {
            leave: n
          } = i ? i() : t;
          (0, r.__)(L, ((t, r) => {
            const o = P[r];
            ~t ? (e = T.indexOf(o), T[e] = {
              ...o,
              item: w[t]
            }) : n && T.splice(++e, 0, o)
          }))
        }
        r.is.fun(l) && T.sort(((e, t) => l(e.item, t.item)));
        let x = -c;
        const A = (0, r.CH)(),
          M = d(t),
          O = new Map,
          k = (0, o.useRef)(new Map),
          I = (0, o.useRef)(!1);
        (0, r.__)(T, ((e, n) => {
          const o = e.key,
            a = e.phase,
            l = i ? i() : t;
          let d, h;
          const m = s(l.delay || 0, o);
          if ("mount" == a) d = l.enter, h = "enter";
          else {
            const e = S.indexOf(o) < 0;
            if ("leave" != a)
              if (e) d = l.leave, h = "leave";
              else {
                if (!(d = l.update)) return;
                h = "update"
              }
            else {
              if (e) return;
              d = l.enter, h = "enter"
            }
          }
          if (d = s(d, e.item, n), d = r.is.obj(d) ? p(d) : {
              to: d
            }, !d.config) {
            const t = g || M.config;
            d.config = s(t, e.item, n, h)
          }
          x += c;
          const y = {
            ...M,
            delay: m + x,
            ref: v,
            immediate: l.immediate,
            reset: !1,
            ...d
          };
          if ("enter" == h && r.is.und(y.from)) {
            const o = i ? i() : t,
              a = r.is.und(o.initial) || P ? o.from : o.initial;
            y.from = s(a, e.item, n)
          }
          const {
            onResolve: b
          } = y;
          y.onResolve = e => {
            s(b, e);
            const t = _.current,
              n = t.find((e => e.key === o));
            if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
              const e = t.every((e => e.ctrl.idle));
              if ("leave" == n.phase) {
                const t = s(u, n.item);
                if (!1 !== t) {
                  const r = !0 === t ? 0 : t;
                  if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(A, r)))
                }
              }
              e && t.some((e => e.expired)) && (k.current.delete(n), f && (I.current = !0), A())
            }
          };
          const E = ie(e.ctrl, y);
          "leave" === h && f ? k.current.set(e, {
            phase: h,
            springs: E,
            payload: y
          }) : O.set(e, {
            phase: h,
            springs: E,
            payload: y
          })
        }));
        const R = (0, o.useContext)(fe),
          H = (0, r.NQ)(R),
          N = R !== H && m(R);
        (0, r.Es)((() => {
          N && (0, r.__)(T, (e => {
            e.ctrl.start({
              default: R
            })
          }))
        }), [R]), (0, r.__)(O, ((e, t) => {
          if (k.current.size) {
            const e = T.findIndex((e => e.key === t.key));
            T.splice(e, 1)
          }
        })), (0, r.Es)((() => {
          (0, r.__)(k.current.size ? k.current : O, (({
            phase: e,
            payload: t
          }, n) => {
            const {
              ctrl: r
            } = n;
            n.phase = e, E?.add(r), N && "enter" == e && r.start({
              default: R
            }), t && (b(r, t.ref), !r.ref && !E || I.current ? (r.start(t), I.current && (I.current = !1)) : r.update(t))
          }))
        }), a ? void 0 : n);
        const D = e => o.createElement(o.Fragment, null, T.map(((t, n) => {
          const {
            springs: i
          } = O.get(t) || t.ctrl, s = e({
            ...i
          }, t.item, t, n);
          return s && s.type ? o.createElement(s.type, {
            ...s.props,
            key: r.is.str(t.key) || r.is.num(t.key) ? t.key : t.ctrl.id,
            ref: s.ref
          }) : s
        })));
        return E ? [D, E] : D
      }
      var be = 1,
        Ee = class extends B {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = (0, r.kx)(...t);
            const n = this._get(),
              o = (0, i.SJ)(n);
            (0, i.uX)(this, o.create(n))
          }
          advance(e) {
            const t = this._get(),
              n = this.get();
            (0, r.n4)(t, n) || ((0, i.Ao)(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Te(this._active) && _e(this)
          }
          _get() {
            const e = r.is.arr(this.source) ? this.source.map(r.oq) : (0, r.$r)((0, r.oq)(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Te(this._active) && (this.idle = !1, (0, r.__)((0, i.nm)(this), (e => {
              e.done = !1
            })), r.RV.skipAnimation ? (r.er.batchedUpdates((() => this.advance())), _e(this)) : r.WU.start(this))
          }
          _attach() {
            let e = 1;
            (0, r.__)((0, r.$r)(this.source), (t => {
              (0, r.at)(t) && (0, r.Ec)(t, this), N(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            (0, r.__)((0, r.$r)(this.source), (e => {
              (0, r.at)(e) && (0, r.DV)(e, this)
            })), this._active.clear(), _e(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = (0, r.$r)(this.source).reduce(((e, t) => Math.max(e, (N(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function we(e) {
        return !1 !== e.idle
      }

      function Te(e) {
        return !e.size || Array.from(e).every(we)
      }

      function _e(e) {
        e.idle || (e.idle = !0, (0, r.__)((0, i.nm)(e), (e => {
          e.done = !0
        })), (0, r.MI)(e, {
          type: "idle",
          parent: e
        }))
      }
      r.RV.assign({
        createStringInterpolator: r.Rs,
        to: (e, t) => new Ee(e, t)
      }), r.WU.advance
    },
    41453: (e, t, n) => {
      n.d(t, {
        aq: () => xe,
        RV: () => _,
        Ec: () => Me,
        MI: () => Le,
        Tj: () => Y,
        kx: () => pe,
        Rs: () => Ke,
        OX: () => S,
        HX: () => $e,
        ZJ: () => Xe,
        __: () => x,
        FI: () => A,
        le: () => we,
        bX: () => O,
        Wd: () => R,
        WU: () => G,
        Wg: () => Ce,
        oq: () => Se,
        at: () => Pe,
        is: () => C,
        $7: () => Ye,
        n4: () => L,
        lQ: () => P,
        er: () => o,
        DV: () => Oe,
        $r: () => M,
        CH: () => Je,
        Es: () => qe,
        MA: () => Qe,
        H5: () => et,
        NQ: () => nt
      });
      var r = b(),
        o = e => v(e, r),
        i = b();
      o.write = e => v(e, i);
      var s = b();
      o.onStart = e => v(e, s);
      var a = b();
      o.onFrame = e => v(e, a);
      var l = b();
      o.onFinish = e => v(e, l);
      var c = [];
      o.setTimeout = (e, t) => {
        const n = o.now() + t,
          r = () => {
            const e = c.findIndex((e => e.cancel == r));
            ~e && c.splice(e, 1), h -= ~e ? 1 : 0
          },
          i = {
            time: n,
            handler: e,
            cancel: r
          };
        return c.splice(u(n), 0, i), h += 1, m(), i
      };
      var u = e => ~(~c.findIndex((t => t.time > e)) || ~c.length);
      o.cancel = e => {
        s.delete(e), a.delete(e), l.delete(e), r.delete(e), i.delete(e)
      }, o.sync = e => {
        p = !0, o.batchedUpdates(e), p = !1
      }, o.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, o.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          s.delete(n), t = null
        }, r
      };
      var d = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      o.use = e => d = e, o.now = "undefined" != typeof performance ? () => performance.now() : Date.now, o.batchedUpdates = e => e(), o.catch = console.error, o.frameLoop = "always", o.advance = () => {
        "demand" !== o.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : y()
      };
      var f = -1,
        h = 0,
        p = !1;

      function v(e, t) {
        p ? (t.delete(e), e(0)) : (t.add(e), m())
      }

      function m() {
        f < 0 && (f = 0, "demand" !== o.frameLoop && d(g))
      }

      function g() {
        ~f && (d(g), o.batchedUpdates(y))
      }

      function y() {
        const e = f;
        f = o.now();
        const t = u(f);
        t && (E(c.splice(0, t), (e => e.handler())), h -= t), h ? (s.flush(), r.flush(e ? Math.min(64, f - e) : 16.667), a.flush(), i.flush(), l.flush()) : f = -1
      }

      function b() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            h += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (h -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, h -= t.size, E(t, (t => t(n) && e.add(t))), h += e.size, t = e)
          }
        }
      }

      function E(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            o.catch(e)
          }
        }))
      }
      var w = n(62229),
        T = Object.defineProperty,
        _ = {};

      function P() {}((e, t) => {
        for (var n in t) T(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(_, {
        assign: () => F,
        colors: () => N,
        createStringInterpolator: () => k,
        skipAnimation: () => D,
        to: () => I,
        willAdvance: () => B
      });
      var S = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        C = {
          arr: Array.isArray,
          obj: e => !!e && "Object" === e.constructor.name,
          fun: e => "function" == typeof e,
          str: e => "string" == typeof e,
          num: e => "number" == typeof e,
          und: e => void 0 === e
        };

      function L(e, t) {
        if (C.arr(e)) {
          if (!C.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var x = (e, t) => e.forEach(t);

      function A(e, t, n) {
        if (C.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var M = e => C.und(e) ? [] : C.arr(e) ? e : [e];

      function O(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), x(n, t)
        }
      }
      var k, I, R = (e, ...t) => O(e, (e => e(...t))),
        H = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        N = null,
        D = !1,
        B = P,
        F = e => {
          e.to && (I = e.to), e.now && (o.now = e.now), void 0 !== e.colors && (N = e.colors), null != e.skipAnimation && (D = e.skipAnimation), e.createStringInterpolator && (k = e.createStringInterpolator), e.requestAnimationFrame && o.use(e.requestAnimationFrame), e.batchedUpdates && (o.batchedUpdates = e.batchedUpdates), e.willAdvance && (B = e.willAdvance), e.frameLoop && (o.frameLoop = e.frameLoop)
        },
        U = new Set,
        j = [],
        K = [],
        V = 0,
        G = {
          get idle() {
            return !U.size && !j.length
          },
          start(e) {
            V > e.priority ? (U.add(e), o.onStart(W)) : (X(e), o($))
          },
          advance: $,
          sort(e) {
            if (V) o.onFrame((() => G.sort(e)));
            else {
              const t = j.indexOf(e);
              ~t && (j.splice(t, 1), z(e))
            }
          },
          clear() {
            j = [], U.clear()
          }
        };

      function W() {
        U.forEach(X), U.clear(), o($)
      }

      function X(e) {
        j.includes(e) || z(e)
      }

      function z(e) {
        j.splice(function(t, n) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(j), 0, e)
      }

      function $(e) {
        const t = K;
        for (let n = 0; n < j.length; n++) {
          const r = j[n];
          V = r.priority, r.idle || (B(r), r.advance(e), r.idle || t.push(r))
        }
        return V = 0, (K = j).length = 0, (j = t).length > 0
      }
      var Y = {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199
        },
        q = "[-+]?\\d*\\.?\\d+",
        Z = q + "%";

      function J(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Q = new RegExp("rgb" + J(q, q, q)),
        ee = new RegExp("rgba" + J(q, q, q, q)),
        te = new RegExp("hsl" + J(q, Z, Z)),
        ne = new RegExp("hsla" + J(q, Z, Z, q)),
        re = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        oe = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ie = /^#([0-9a-fA-F]{6})$/,
        se = /^#([0-9a-fA-F]{8})$/;

      function ae(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function le(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = ae(o, r, e + 1 / 3),
          s = ae(o, r, e),
          a = ae(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function ce(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ue(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function de(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function fe(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function he(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ie.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : N && void 0 !== N[e] ? N[e] : (t = Q.exec(e)) ? (ce(t[1]) << 24 | ce(t[2]) << 16 | ce(t[3]) << 8 | 255) >>> 0 : (t = ee.exec(e)) ? (ce(t[1]) << 24 | ce(t[2]) << 16 | ce(t[3]) << 8 | de(t[4])) >>> 0 : (t = re.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = se.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = oe.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = te.exec(e)) ? (255 | le(ue(t[1]), fe(t[2]), fe(t[3]))) >>> 0 : (t = ne.exec(e)) ? (le(ue(t[1]), fe(t[2]), fe(t[3])) | de(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var pe = (e, t, n) => {
          if (C.fun(e)) return e;
          if (C.arr(e)) return pe({
            range: e,
            output: t,
            extrapolate: n
          });
          if (C.str(e.output[0])) return k(e);
          const r = e,
            o = r.output,
            i = r.range || [0, 1],
            s = r.extrapolateLeft || r.extrapolate || "extend",
            a = r.extrapolateRight || r.extrapolate || "extend",
            l = r.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, i);
            return function(e, t, n, r, o, i, s, a, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === s) return c;
                "clamp" === s && (c = t)
              }
              if (c > n) {
                if ("identity" === a) return c;
                "clamp" === a && (c = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = i(c), r === -1 / 0 ? c = -c : o === 1 / 0 ? c += r : c = c * (o - r) + r, c)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, s, a, r.map)
          }
        },
        ve = 1.70158,
        me = 1.525 * ve,
        ge = ve + 1,
        ye = 2 * Math.PI / 3,
        be = 2 * Math.PI / 4.5,
        Ee = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        we = {
          linear: e => e,
          easeInQuad: e => e * e,
          easeOutQuad: e => 1 - (1 - e) * (1 - e),
          easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: e => e * e * e,
          easeOutCubic: e => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: e => e * e * e * e,
          easeOutQuart: e => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: e => e * e * e * e * e,
          easeOutQuint: e => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
          easeOutSine: e => Math.sin(e * Math.PI / 2),
          easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
          easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
          easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: e => ge * e * e * e - ve * e * e,
          easeOutBack: e => 1 + ge * Math.pow(e - 1, 3) + ve * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - me) / 2 : (Math.pow(2 * e - 2, 2) * ((me + 1) * (2 * e - 2) + me) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ye),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ye) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * be) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * be) / 2 + 1,
          easeInBounce: e => 1 - Ee(1 - e),
          easeOutBounce: Ee,
          easeInOutBounce: e => e < .5 ? (1 - Ee(1 - 2 * e)) / 2 : (1 + Ee(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return o = ("end" === t ? Math.floor(r) : Math.ceil(r)) / e, Math.min(Math.max(o, 0), 1);
            var o
          }
        },
        Te = Symbol.for("FluidValue.get"),
        _e = Symbol.for("FluidValue.observers"),
        Pe = e => Boolean(e && e[Te]),
        Se = e => e && e[Te] ? e[Te]() : e,
        Ce = e => e[_e] || null;

      function Le(e, t) {
        const n = e[_e];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var xe = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Ae(this, e)
          }
        },
        Ae = (e, t) => Ie(e, Te, t);

      function Me(e, t) {
        if (e[Te]) {
          let n = e[_e];
          n || Ie(e, _e, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Oe(e, t) {
        const n = e[_e];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[_e] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var ke, Ie = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Re = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        He = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Ne = new RegExp(`(${Re.source})(%|[a-z]+)`, "i"),
        De = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Be = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Fe = e => {
          const [t, n] = Ue(e);
          if (!t || H()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && Be.test(n) ? Fe(n) : n || e
        },
        Ue = e => {
          const t = Be.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        je = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        Ke = e => {
          ke || (ke = N ? new RegExp(`(${Object.keys(N).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Se(e).replace(Be, Fe).replace(He, he).replace(ke, he))),
            n = t.map((e => e.match(Re).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => pe({
              ...e,
              output: t
            })));
          return e => {
            const n = !Ne.test(t[0]) && t.find((e => Ne.test(e)))?.replace(Re, "");
            let o = 0;
            return t[0].replace(Re, (() => `${r[o++](e)}${n||""}`)).replace(De, je)
          }
        },
        Ve = "react-spring: ",
        Ge = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Ve}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        We = Ge(console.warn);

      function Xe() {
        We(`${Ve}The "interpolate" function is deprecated in v9 (use "to" instead)`)
      }
      var ze = Ge(console.warn);

      function $e() {
        ze(`${Ve}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)
      }

      function Ye(e) {
        return C.str(e) && ("#" == e[0] || /\d/.test(e) || !H() && Be.test(e) || e in (N || {}))
      }
      var qe = H() ? w.useEffect : w.useLayoutEffect,
        Ze = () => {
          const e = (0, w.useRef)(!1);
          return qe((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function Je() {
        const e = (0, w.useState)()[1],
          t = Ze();
        return () => {
          t.current && e(Math.random())
        }
      }

      function Qe(e, t) {
        const [n] = (0, w.useState)((() => ({
          inputs: t,
          result: e()
        }))), r = (0, w.useRef)(), o = r.current;
        let i = o;
        return i ? Boolean(t && i.inputs && function(e, t) {
          if (e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }(t, i.inputs)) || (i = {
          inputs: t,
          result: e()
        }) : i = n, (0, w.useEffect)((() => {
          r.current = i, o == n && (n.inputs = n.result = void 0)
        }), [i]), i.result
      }
      var et = e => (0, w.useEffect)(e, tt),
        tt = [];

      function nt(e) {
        const t = (0, w.useRef)();
        return (0, w.useEffect)((() => {
          t.current = e
        })), t.current
      }
    },
    75463: (e, t, n) => {
      n.d(t, {
        Nf: () => o
      });
      let r = !1;

      function o() {
        return r
      }
    },
    37784: (e, t, n) => {
      n.d(t, {
        KZ: () => c
      });
      var r = n(62229);
      const o = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        i = {
          ...o,
          customError: !0,
          valid: !1
        },
        s = {
          isInvalid: !1,
          validationDetails: o,
          validationErrors: []
        },
        a = (0, r.createContext)({}),
        l = "__formValidationState" + Date.now();

      function c(e) {
        if (e[l]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[l];
          return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: n,
            name: o,
            value: l,
            builtinValidation: c,
            validate: h,
            validationBehavior: p = "aria"
          } = e;
          n && (t || (t = "invalid" === n));
          let v = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: i
            } : null,
            m = (0, r.useMemo)((() => d(function(e, t) {
              if ("function" == typeof e) {
                let n = e(t);
                if (n && "boolean" != typeof n) return u(n)
              }
              return []
            }(h, l))), [h, l]);
          (null == c ? void 0 : c.validationDetails.valid) && (c = null);
          let g = (0, r.useContext)(a),
            y = (0, r.useMemo)((() => o ? Array.isArray(o) ? o.flatMap((e => u(g[e]))) : u(g[o]) : []), [g, o]),
            [b, E] = (0, r.useState)(g),
            [w, T] = (0, r.useState)(!1);
          g !== b && (E(g), T(!1));
          let _ = (0, r.useMemo)((() => d(w ? [] : y)), [w, y]),
            P = (0, r.useRef)(s),
            [S, C] = (0, r.useState)(s),
            L = (0, r.useRef)(s),
            [x, A] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
            if (!x) return;
            A(!1);
            let e = m || c || P.current;
            f(e, L.current) || (L.current = e, C(e))
          })), {
            realtimeValidation: v || _ || m || c || s,
            displayValidation: "native" === p ? v || _ || S : v || _ || m || c || S,
            updateValidation(e) {
              "aria" !== p || f(S, e) ? P.current = e : C(e)
            },
            resetValidation() {
              let e = s;
              f(e, L.current) || (L.current = e, C(e)), "native" === p && A(!1), T(!0)
            },
            commitValidation() {
              "native" === p && A(!0), T(!0)
            }
          }
        }(e)
      }

      function u(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function d(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: i
        } : null
      }

      function f(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }
    },
    43042: (e, t, n) => {
      n.d(t, {
        Z: () => l
      });
      var r = n(37784),
        o = n(48436),
        i = n(62229);
      let s = Math.round(1e10 * Math.random()),
        a = 0;

      function l(e) {
        let t = (0, i.useMemo)((() => e.name || `radio-group-${s}-${++a}`), [e.name]);
        var n;
        let [l, c] = (0, o.P)(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [u, d] = (0, i.useState)(null), f = (0, r.KZ)({
          ...e,
          value: l
        }), h = f.displayValidation.isInvalid;
        return {
          ...f,
          name: t,
          selectedValue: l,
          setSelectedValue: t => {
            e.isReadOnly || e.isDisabled || (c(t), f.commitValidation())
          },
          lastFocusedValue: u,
          setLastFocusedValue: d,
          isDisabled: e.isDisabled || !1,
          isReadOnly: e.isReadOnly || !1,
          isRequired: e.isRequired || !1,
          validationState: e.validationState || (h ? "invalid" : null),
          isInvalid: h
        }
      }
    },
    40562: (e, t, n) => {
      n.d(t, {
        H: () => o
      });
      var r = n(62229);

      function o(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, o] = function(e, t, n) {
          let [o, i] = (0, r.useState)(e || t), s = (0, r.useRef)(void 0 !== e), a = void 0 !== e;
          (0, r.useEffect)((() => {
            s.current, s.current = a
          }), [a]);
          let l = a ? e : o,
            c = (0, r.useCallback)(((e, ...t) => {
              let r = (e, ...t) => {
                n && (Object.is(l, e) || n(e, ...t)), a || (l = e)
              };
              "function" == typeof e ? i(((n, ...o) => {
                let i = e(a ? l : n, ...o);
                return r(i, ...t), a ? n : i
              })) : (a || i(e), r(e, ...t))
            }), [a, l, n]);
          return [l, c]
        }(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: n,
          setSelected: function(e) {
            t || o(e)
          },
          toggle: function() {
            t || o(!n)
          }
        }
      }
    },
    48436: (e, t, n) => {
      n.d(t, {
        P: () => o
      });
      var r = n(62229);

      function o(e, t, n) {
        let [o, i] = (0, r.useState)(e || t), s = (0, r.useRef)(void 0 !== e), a = void 0 !== e;
        (0, r.useEffect)((() => {
          let e = s.current;
          e !== a && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`), s.current = a
        }), [a]);
        let l = a ? e : o,
          c = (0, r.useCallback)(((e, ...t) => {
            let r = (e, ...t) => {
              n && (Object.is(l, e) || n(e, ...t)), a || (l = e)
            };
            "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), i(((n, ...o) => {
              let i = e(a ? l : n, ...o);
              return r(i, ...t), a ? n : i
            }))) : (a || i(e), r(e, ...t))
          }), [a, l, n]);
        return [l, c]
      }
    },
    5460: (e, t, n) => {
      n.d(t, {
        A: () => F
      });
      var r = n(62229);

      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function i(e, t, n) {
        return t = l(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, c() ? Reflect.construct(t, n || [], l(e).constructor) : t.apply(e, n))
      }

      function s(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
              }
            }(e)) || t) {
            n && (e = n);
            var r = 0,
              i = function() {};
            return {
              s: i,
              n: function() {
                return r >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[r++]
                }
              },
              e: function(e) {
                throw e
              },
              f: i
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, a = !0,
          l = !1;
        return {
          s: function() {
            n = n.call(e)
          },
          n: function() {
            var e = n.next();
            return a = e.done, e
          },
          e: function(e) {
            l = !0, s = e
          },
          f: function() {
            try {
              a || null == n.return || n.return()
            } finally {
              if (l) throw s
            }
          }
        }
      }

      function a(e, t, n) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function l(e) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, l(e)
      }

      function c() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (c = function() {
          return !!e
        })()
      }

      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(n), !0).forEach((function(t) {
            a(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function f(e, t) {
        return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, f(e, t)
      }

      function h(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = r,
          l = "",
          c = s(e);
        try {
          for (c.s(); !(n = c.n()).done;) {
            var u, d = n.value,
              f = !Object.prototype.hasOwnProperty.call(o, d) && (null === (u = o[a[0]]) || void 0 === u ? void 0 : u.test(d));
            (i && d === a[0] || f) && (a = a.slice(1), l += d)
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        return l
      }

      function p(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          l = 0,
          c = "",
          u = s(r);
        try {
          for (u.s(); !(n = u.n()).done;) {
            var d = n.value;
            if (!a && void 0 === e[l]) break;
            Object.prototype.hasOwnProperty.call(o, d) && void 0 !== e[l] ? c += e[l++] : c += d
          }
        } catch (e) {
          u.e(e)
        } finally {
          u.f()
        }
        if (i && !a) {
          for (var f = r.length - 1; f >= 0 && c[f] === r[f]; f--);
          c = c.slice(0, f + 1)
        }
        return c
      }

      function v(e, t) {
        for (var n = t.mask, r = t.replacement, o = [], i = 0; i < n.length; i++) {
          var s, a = null !== (s = e[i]) && void 0 !== s ? s : n[i],
            l = Object.prototype.hasOwnProperty.call(r, a) ? "replacement" : void 0 !== e[i] && e[i] !== n[i] ? "input" : "mask";
          o.push({
            type: l,
            value: a,
            index: i
          })
        }
        return o
      }

      function m(e) {
        return e.length > 0 ? a({}, e, /./) : {}
      }

      function g(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(r, o), c = i.slice(r, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && a && (u += c[d])
        }
        return u
      }

      function y(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? m(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return p(h(e, {
          replacementChars: n.replace(i, ""),
          replacement: o,
          separate: !1
        }), {
          mask: n,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var b = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function E(e) {
        return b.includes(e) ? "\\".concat(e) : e
      }

      function w(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function T(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function _(e, t, n) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function P(e) {
        return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, P(e)
      }

      function S() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (S = function() {
          return !!e
        })()
      }

      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? C(Object(n), !0).forEach((function(t) {
            _(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function x(e, t) {
        return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, x(e, t)
      }

      function A(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return A = function(e) {
          if (null === e || ! function(e) {
              try {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
              } catch (t) {
                return "function" == typeof e
              }
            }(e)) return e;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
          }

          function n() {
            return function(e, t, n) {
              if (S()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && x(o, n.prototype), o
            }(e, arguments, P(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), x(n, e)
        }, A(e)
      }
      var M, O = function(e) {
          function t(e) {
            var n;
            return w(this, t), (n = function(e, t, n) {
              return t = P(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, S() ? Reflect.construct(t, n || [], P(e).constructor) : t.apply(e, n))
            }(this, t, [e])).name = "SyntheticChangeError", n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && x(e, t)
          }(t, e), T(t)
        }(A(Error)),
        k = ["options"],
        I = ["text", "email", "tel", "search", "url"],
        R = T((function e(t) {
          var n = t.init,
            r = t.tracking;
          w(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (I.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = i.initialValue,
                a = void 0 === s ? "" : s,
                l = i.controlled,
                c = void 0 !== l && l,
                u = n({
                  initialValue: e.value || a,
                  controlled: c
                }),
                d = u.value,
                f = u.options,
                h = {
                  value: d,
                  options: f,
                  fallbackOptions: f
                },
                p = {
                  id: -1,
                  cachedId: -1
                },
                v = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                m = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", L(L({}, m), {}, {
                set: function(t) {
                  var n;
                  v.value = t, null == m || null === (n = m.set) || void 0 === n || n.call(e, t)
                }
              })), e.value = d;
              var g = function() {
                  var t = function() {
                    var n, r;
                    v.selectionStart = null !== (n = e.selectionStart) && void 0 !== n ? n : 0, v.selectionEnd = null !== (r = e.selectionEnd) && void 0 !== r ? r : 0, p.id = window.setTimeout(t)
                  };
                  p.id = window.setTimeout(t)
                },
                y = function() {
                  window.clearTimeout(p.id), p.id = -1, p.cachedId = -1
                },
                b = function(t) {
                  try {
                    var n, o;
                    if (p.cachedId === p.id) throw new O("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new O("The selection attributes have not been initialized.");
                    var l, c = v.value;
                    if (void 0 === t.inputType && (v.selectionStart = 0, v.selectionEnd = c.length), s > v.selectionStart ? l = "insert" : s <= v.selectionStart && s < v.selectionEnd ? l = "deleteBackward" : s === v.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new O("Input type detection error.");
                    var u = "",
                      d = v.selectionStart,
                      f = v.selectionEnd;
                    if ("insert" === l) u = i.slice(v.selectionStart, s);
                    else {
                      var m = c.length - i.length;
                      d = s, f = s + m
                    }
                    h.value !== c ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var g = h.options,
                      y = r({
                        inputType: l,
                        previousValue: c,
                        previousOptions: g,
                        value: i,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: s,
                        selectionEnd: a
                      }),
                      b = y.options,
                      E = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                          if (null == e) return {};
                          var n = {};
                          for (var r in e)
                            if ({}.hasOwnProperty.call(e, r)) {
                              if (t.includes(r)) continue;
                              n[r] = e[r]
                            } return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                      }(y, k);
                    e.value = E.value, e.setSelectionRange(E.selectionStart, E.selectionEnd), h.value = E.value, h.options = b, v.selectionStart = E.selectionStart, v.selectionEnd = E.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, c)
                  } catch (n) {
                    if (e.value = v.value, e.setSelectionRange(v.selectionStart, v.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== n.name) throw n
                  }
                };
              document.activeElement === e && g(), e.addEventListener("focus", g), e.addEventListener("blur", y), e.addEventListener("input", b), o.set(e, {
                onFocus: g,
                onBlur: y,
                onInput: b
              })
            }
          }, this.unregister = function(e) {
            var t = o.get(e);
            void 0 !== t && (e.removeEventListener("focus", t.onFocus), e.removeEventListener("blur", t.onBlur), e.removeEventListener("input", t.onInput), o.delete(e))
          }
        }));
      M = R, Object.defineProperty(M.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var H, N = ["track", "modify"];

      function D(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? m(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var B = function(e) {
        function t() {
          var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t), (e = i(this, t, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = D(n),
                i = o.mask,
                s = o.replacement,
                a = o.separate,
                l = o.showMask;
              return {
                value: t = r || t ? t : l ? i : "",
                options: {
                  mask: i,
                  replacement: s,
                  separate: a
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                r = e.previousValue,
                o = e.previousOptions,
                i = e.addedValue,
                s = e.changeStart,
                a = e.changeEnd,
                l = D(n),
                c = l.track,
                u = l.modify,
                f = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                      if ({}.hasOwnProperty.call(e, r)) {
                        if (t.includes(r)) continue;
                        n[r] = e[r]
                      } return n
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                  }
                  return o
                }(l, N),
                y = f.mask,
                b = f.replacement,
                E = f.showMask,
                w = f.separate,
                T = d(d({}, "insert" === t ? {
                  inputType: t,
                  data: i
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: r,
                  selectionStart: s,
                  selectionEnd: a
                }),
                _ = null == c ? void 0 : c(T);
              if (!1 === _) throw new O("Custom tracking stop.");
              null === _ ? i = "" : !0 !== _ && void 0 !== _ && (i = _);
              var P = null == u ? void 0 : u(T);
              void 0 !== (null == P ? void 0 : P.mask) && (y = P.mask), void 0 !== (null == P ? void 0 : P.replacement) && (b = "string" == typeof(null == P ? void 0 : P.replacement) ? m(null == P ? void 0 : P.replacement) : P.replacement), void 0 !== (null == P ? void 0 : P.showMask) && (E = P.showMask), void 0 !== (null == P ? void 0 : P.separate) && (w = P.separate);
              var S = g(r, d({
                  end: s
                }, o)),
                C = g(r, d({
                  start: a
                }, o)),
                L = RegExp("[^".concat(Object.keys(b).join(""), "]"), "g"),
                x = y.replace(L, "");
              if (S && (S = h(S, {
                  replacementChars: x,
                  replacement: b,
                  separate: w
                }), x = x.slice(S.length)), i && (i = h(i, {
                  replacementChars: x,
                  replacement: b,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new O("The character does not match the key value of the `replacement` object.");
              if (w) {
                var A = y.slice(s, a).replace(L, ""),
                  M = A.length - i.length;
                M < 0 ? C = C.slice(-M) : M > 0 && (C = A.slice(-M) + C)
              }
              C && (C = h(C, {
                replacementChars: x,
                replacement: b,
                separate: w
              }));
              var k = p(S + i + C, {
                  mask: y,
                  replacement: b,
                  separate: w,
                  showMask: E
                }),
                I = function(e) {
                  var t, n, r, o = e.inputType,
                    i = e.value,
                    s = e.addedValue,
                    a = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = v(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    })),
                    d = null === (t = u[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (n = u[a.length - 1]) || void 0 === n ? void 0 : n.index,
                    h = null === (r = u[a.length + s.length]) || void 0 === r ? void 0 : r.index;
                  if ("insert" === o) {
                    if (void 0 !== d) return d + 1;
                    if (void 0 !== h) return h;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteForward" === o) {
                    if (void 0 !== h) return h;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteBackward" === o) {
                    if (void 0 !== f) return f + 1;
                    if (void 0 !== h) return h
                  }
                  var p = i.split("").findIndex((function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  }));
                  return -1 !== p ? p : i.length
                }({
                  inputType: t,
                  value: k,
                  addedValue: i,
                  beforeChangeValue: S,
                  mask: y,
                  replacement: b,
                  separate: w
                });
              return {
                value: k,
                selectionStart: I,
                selectionEnd: I,
                options: {
                  mask: y,
                  replacement: b,
                  separate: w
                }
              }
            }
          }])).format = function(e) {
            return y(e, D(n))
          }, e.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? m(r) : r;
              return v(y(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, D(n))
          }, e.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? m(r) : r,
                i = g(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return h(i, {
                replacementChars: n.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, D(n))
          }, e.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? m(r) : r, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < n.length; l++) {
                var c = n[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(s ? "(?!".concat(E(c), ")") : "", "(").concat(o[c].source, ")") : E(c), l === n.length - 1 && (i && (a += ")?".repeat(n.length)), a += "$")
              }
              return a
            }(e, D(n))
          }, e
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && f(e, t)
          }(t, R),
          function(e, t, n) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(t)
      }();

      function F() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.mask,
          n = e.replacement,
          o = e.showMask,
          i = e.separate,
          s = e.track,
          a = e.modify,
          l = (0, r.useRef)(null),
          c = (0, r.useRef)({
            mask: t,
            replacement: n,
            showMask: o,
            separate: i,
            track: s,
            modify: a
          });
        return c.current.mask = t, c.current.replacement = n, c.current.showMask = o, c.current.separate = i, c.current.track = s, c.current.modify = a, (0, r.useMemo)((function() {
          return function(e, t) {
            return new Proxy(e, {
              set: function(n, r, o) {
                return "current" === r && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), n[r] = o, !0)
              }
            })
          }(l, new B(c.current))
        }), [])
      }
      H = B, Object.defineProperty(H.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      })
    },
    11586: (e, t, n) => {
      function r(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }
      n.d(t, {
        _: () => r
      })
    },
    72621: (e, t, n) => {
      n.d(t, {
        _: () => o
      });
      var r = n(11586);

      function o(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, (0, r._)(e, t, "get"))
      }
    },
    82776: (e, t, n) => {
      function r(e, t, n) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, n)
      }
      n.d(t, {
        _: () => r
      })
    },
    81359: (e, t, n) => {
      n.d(t, {
        _: () => o
      });
      var r = n(11586);

      function o(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, (0, r._)(e, t, "set"), n), n
      }
    },
    5312: (e, t, n) => {
      function r() {
        let e, t = [];
        const n = ["select", "slideFocus"];

        function r() {
          const {
            slideRegistry: n
          } = e.internalEngine(), r = n[e.selectedScrollSnap()];
          return r ? r.map((e => t[e])).reduce(((e, t) => Math.max(e, t)), 0) : null
        }

        function o() {
          null !== r() && (e.containerNode().style.height = `${r()}px`)
        }
        return {
          name: "autoHeight",
          options: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          init: function(r) {
            e = r;
            const {
              options: {
                axis: i
              },
              slideRects: s
            } = e.internalEngine();
            "y" !== i && (t = s.map((e => e.height)), n.forEach((t => e.on(t, o))), o())
          },
          destroy: function() {
            n.forEach((t => e.off(t, o)));
            const t = e.containerNode();
            t.style.height = "", t.getAttribute("style") || t.removeAttribute("style")
          }
        }
      }
      n.d(t, {
        A: () => r
      }), r.globalOptions = void 0
    },
    18308: (e, t, n) => {
      n.d(t, {
        A: () => a
      });
      const r = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function o(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function i(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function s(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function a() {
        let e, t, n, l, c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          u = [],
          d = [];
        const f = ["select"],
          h = ["pointerDown", "pointerUp"],
          p = ["slidesInView"],
          v = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function m(e, t) {
          ("pointerDown" === t ? s : i)(n, v.dragging)
        }

        function g() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 2 ? arguments[2] : void 0;
          const n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((e => l[e])),
            r = e.map((e => l[e]));
          return n.forEach((e => i(e, t))), r.forEach((e => s(e, t))), e
        }

        function y() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          u = g(n, u, v.snapped)
        }

        function b() {
          const e = t.slidesInView();
          d = g(e, d, v.inView)
        }
        return {
          name: "classNames",
          options: c,
          init: function(i, u) {
            t = i;
            const {
              mergeOptions: d,
              optionsAtMedia: g
            } = u, E = d(r, a.globalOptions), w = d(E, c);
            e = g(w), n = t.rootNode(), l = t.slideNodes();
            const {
              watchDrag: T,
              loop: _
            } = t.internalEngine().options, P = !!T;
            e.loop && _ && (v.loop = o(e.loop), s(n, v.loop)), e.draggable && P && (v.draggable = o(e.draggable), s(n, v.draggable)), e.dragging && (v.dragging = o(e.dragging), h.forEach((e => t.on(e, m)))), e.snapped && (v.snapped = o(e.snapped), f.forEach((e => t.on(e, y))), y()), e.inView && (v.inView = o(e.inView), p.forEach((e => t.on(e, b))), b())
          },
          destroy: function() {
            h.forEach((e => t.off(e, m))), f.forEach((e => t.off(e, y))), p.forEach((e => t.off(e, b))), i(n, v.loop), i(n, v.draggable), i(n, v.dragging), g([], u, v.snapped), g([], d, v.inView), Object.keys(v).forEach((e => {
              v[e] = []
            }))
          }
        }
      }
      a.globalOptions = void 0
    },
    51909: (e, t, n) => {
      n.d(t, {
        A: () => B
      });
      var r = n(62229);

      function o(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function i(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every((n => {
          const r = e[n],
            s = t[n];
          return "function" == typeof r ? `${r}` == `${s}` : o(r) && o(s) ? i(r, s) : r === s
        })))
      }

      function s(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function a(e) {
        return "number" == typeof e
      }

      function l(e) {
        return "string" == typeof e
      }

      function c(e) {
        return "boolean" == typeof e
      }

      function u(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function d(e) {
        return Math.abs(e)
      }

      function f(e) {
        return Math.sign(e)
      }

      function h(e, t) {
        return d(e - t)
      }

      function p(e) {
        return b(e).map(Number)
      }

      function v(e) {
        return e[m(e)]
      }

      function m(e) {
        return Math.max(0, e.length - 1)
      }

      function g(e, t) {
        return t === m(e)
      }

      function y(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Array.from(Array(e), ((e, n) => t + n))
      }

      function b(e) {
        return Object.keys(e)
      }

      function E(e, t) {
        return [e, t].reduce(((e, t) => (b(t).forEach((n => {
          const r = e[n],
            o = t[n],
            i = u(r) && u(o);
          e[n] = i ? E(r, o) : o
        })), e)), {})
      }

      function w(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function T() {
        let e = [];
        const t = {
          add: function(n, r, o) {
            let i, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
              passive: !0
            };
            if ("addEventListener" in n) n.addEventListener(r, o, s), i = () => n.removeEventListener(r, o, s);
            else {
              const e = n;
              e.addListener(o), i = () => e.removeListener(o)
            }
            return e.push(i), t
          },
          clear: function() {
            e = e.filter((e => e()))
          }
        };
        return t
      }

      function _() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const n = d(e - t);

        function r(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function i(e) {
          return r(e) || o(e)
        }
        return {
          length: n,
          max: t,
          min: e,
          constrain: function(n) {
            return i(n) ? r(n) ? e : t : n
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function(e) {
            return n ? e - n * Math.ceil((e - t) / n) : e
          }
        }
      }

      function P(e, t, n) {
        const {
          constrain: r
        } = _(0, e), o = e + 1;
        let i = s(t);

        function s(e) {
          return n ? d((o + e) % o) : r(e)
        }

        function a() {
          return i
        }

        function l() {
          return P(e, a(), n)
        }
        const c = {
          get: a,
          set: function(e) {
            return i = s(e), c
          },
          add: function(e) {
            return l().set(a() + e)
          },
          clone: l
        };
        return c
      }

      function S(e, t, n, r, o, i, s, a, l, u, p, v, m, g, y, b, E, P, S) {
        const {
          cross: C,
          direction: L
        } = e, x = ["INPUT", "SELECT", "TEXTAREA"], A = {
          passive: !1
        }, M = T(), O = T(), k = _(50, 225).constrain(g.measure(20)), I = {
          mouse: 300,
          touch: 400
        }, R = {
          mouse: 500,
          touch: 600
        }, H = y ? 43 : 25;
        let N = !1,
          D = 0,
          B = 0,
          F = !1,
          U = !1,
          j = !1,
          K = !1;

        function V(e) {
          if (!w(e, r) && e.touches.length >= 2) return G(e);
          const t = i.readPoint(e),
            n = i.readPoint(e, C),
            s = h(t, D),
            l = h(n, B);
          if (!U && !K) {
            if (!e.cancelable) return G(e);
            if (U = s > l, !U) return G(e)
          }
          const c = i.pointerMove(e);
          s > b && (j = !0), u.useFriction(.3).useDuration(.75), a.start(), o.add(L(c)), e.preventDefault()
        }

        function G(e) {
          const t = p.byDistance(0, !1).index !== v.get(),
            n = i.pointerUp(e) * (y ? R : I)[K ? "mouse" : "touch"],
            r = function(e, t) {
              const n = v.add(-1 * f(e)),
                r = p.byDistance(e, !y).distance;
              return y || d(e) < k ? r : E && t ? .5 * r : p.byIndex(n.get(), 0).distance
            }(L(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (d(e) <= d(t)) return 0;
              const n = h(d(e), d(t));
              return d(n / e)
            }(n, r),
            s = H - 10 * o,
            a = P + o / 50;
          U = !1, F = !1, O.clear(), u.useDuration(s).useFriction(a), l.distance(r, !y), K = !1, m.emit("pointerUp")
        }

        function W(e) {
          j && (e.stopPropagation(), e.preventDefault(), j = !1)
        }
        return {
          init: function(e) {
            if (!S) return;

            function a(a) {
              (c(S) || S(e, a)) && function(e) {
                const a = w(e, r);
                K = a, j = y && a && !e.buttons && N, N = h(o.get(), s.get()) >= 2, a && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return x.includes(t)
                }(e.target) || (F = !0, i.pointerDown(e), u.useFriction(0).useDuration(0), o.set(s), function() {
                  const e = K ? n : t;
                  O.add(e, "touchmove", V, A).add(e, "touchend", G).add(e, "mousemove", V, A).add(e, "mouseup", G)
                }(), D = i.readPoint(e), B = i.readPoint(e, C), m.emit("pointerDown"))
              }(a)
            }
            const l = t;
            M.add(l, "dragstart", (e => e.preventDefault()), A).add(l, "touchmove", (() => {}), A).add(l, "touchend", (() => {})).add(l, "touchstart", a).add(l, "mousedown", a).add(l, "touchcancel", G).add(l, "contextmenu", G).add(l, "click", W, !0)
          },
          destroy: function() {
            M.clear(), O.clear()
          },
          pointerDown: function() {
            return F
          }
        }
      }

      function C(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function i(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (w(n, t) ? n : n.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return n = e, r = e, i(e)
          },
          pointerMove: function(e) {
            const t = i(e) - i(r),
              s = o(e) - o(n) > 170;
            return r = e, s && (n = e), t
          },
          pointerUp: function(e) {
            if (!n || !r) return 0;
            const t = i(r) - i(n),
              s = o(e) - o(n),
              a = o(e) - o(r) > 170,
              l = t / s;
            return s && !a && d(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function L(e, t, n, r, o, i, s) {
        const a = [e].concat(r);
        let l, u, f = [],
          h = !1;

        function p(e) {
          return o.measureSize(s.measure(e))
        }
        return {
          init: function(o) {
            i && (u = p(e), f = r.map(p), l = new ResizeObserver((n => {
              (c(i) || i(o, n)) && function(n) {
                for (const i of n) {
                  if (h) return;
                  const n = i.target === e,
                    s = r.indexOf(i.target),
                    a = n ? u : f[s];
                  if (d(p(n ? e : r[s]) - a) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(n)
            })), n.requestAnimationFrame((() => {
              a.forEach((e => l.observe(e)))
            })))
          },
          destroy: function() {
            h = !0, l && l.disconnect()
          }
        }
      }

      function x(e, t, n, r, o) {
        const i = o.measure(10),
          s = o.measure(50),
          a = _(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = d(e[l] - t.get()),
              f = n.get() - t.get(),
              h = a.constrain(u / s);
            n.subtract(f * h), !o && d(f) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function A(e, t, n, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: s,
            reachedMax: a
          } = _(o, i);
        return {
          loop: function(t) {
            if (! function(e) {
                return 1 === e ? a(n.get()) : -1 === e && s(n.get())
              }(t)) return;
            const o = e * (-1 * t);
            r.forEach((e => e.add(o)))
          }
        }
      }

      function M(e) {
        let t = e;

        function n(e) {
          return a(e) ? e : e.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(e) {
            t = n(e)
          },
          add: function(e) {
            t += n(e)
          },
          subtract: function(e) {
            t -= n(e)
          }
        }
      }

      function O(e, t) {
        const n = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          r = t.style;
        let o = null,
          i = !1;
        return {
          clear: function() {
            i || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (i) return;
            const s = (a = e.direction(t), Math.round(100 * a) / 100);
            var a;
            s !== o && (r.transform = n(s), o = s)
          },
          toggleActive: function(e) {
            i = !e
          }
        }
      }

      function k(e, t, n, r, o, i, s, a, l) {
        const c = p(o),
          u = p(o).reverse(),
          d = function() {
            const e = s[0];
            return v(h(u, e), n, !1)
          }().concat(function() {
            const e = t - s[0] - 1;
            return v(h(c, e), -n, !0)
          }());

        function f(e, t) {
          return e.reduce(((e, t) => e - o[t]), t)
        }

        function h(e, t) {
          return e.reduce(((e, n) => f(e, t) > 0 ? e.concat([n]) : e), [])
        }

        function v(o, s, c) {
          const u = function(e) {
            return i.map(((n, o) => ({
              start: n - r[o] + .5 + e,
              end: n + t - .5 + e
            })))
          }(s);
          return o.map((t => {
            const r = c ? 0 : -n,
              o = c ? n : 0,
              i = c ? "end" : "start",
              s = u[t][i];
            return {
              index: t,
              loopPoint: s,
              slideLocation: M(-1),
              translate: O(e, l[t]),
              target: () => a.get() > s ? r : o
            }
          }))
        }
        return {
          canLoop: function() {
            return d.every((e => {
              let {
                index: n
              } = e;
              return f(c.filter((e => e !== n)), t) <= .1
            }))
          },
          clear: function() {
            d.forEach((e => e.translate.clear()))
          },
          loop: function() {
            d.forEach((e => {
              const {
                target: t,
                translate: n,
                slideLocation: r
              } = e, o = t();
              o !== r.get() && (n.to(o), r.set(o))
            }))
          },
          loopPoints: d
        }
      }

      function I(e, t, n) {
        let r, o = !1;
        return {
          init: function(i) {
            n && (r = new MutationObserver((e => {
              o || (c(n) || n(i, e)) && function(e) {
                for (const n of e)
                  if ("childList" === n.type) {
                    i.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            })), r.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            r && r.disconnect(), o = !0
          }
        }
      }

      function R(e, t, n, r, o, i, s) {
        const {
          align: u,
          axis: E,
          direction: w,
          startIndex: R,
          loop: H,
          duration: N,
          dragFree: D,
          dragThreshold: B,
          inViewThreshold: F,
          slidesToScroll: U,
          skipSnaps: j,
          containScroll: K,
          watchResize: V,
          watchSlides: G,
          watchDrag: W,
          watchFocus: X
        } = i, z = {
          measure: function(e) {
            const {
              offsetTop: t,
              offsetLeft: n,
              offsetWidth: r,
              offsetHeight: o
            } = e;
            return {
              top: t,
              right: n + r,
              bottom: t + o,
              left: n,
              width: r,
              height: o
            }
          }
        }, $ = z.measure(t), Y = n.map(z.measure), q = function(e, t) {
          const n = "rtl" === t,
            r = "y" === e,
            o = !r && n ? -1 : 1;
          return {
            scroll: r ? "y" : "x",
            cross: r ? "x" : "y",
            startEdge: r ? "top" : n ? "right" : "left",
            endEdge: r ? "bottom" : n ? "left" : "right",
            measureSize: function(e) {
              const {
                height: t,
                width: n
              } = e;
              return r ? t : n
            },
            direction: function(e) {
              return e * o
            }
          }
        }(E, w), Z = q.measureSize($), J = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(Z), Q = function(e, t) {
          const n = {
            start: function() {
              return 0
            },
            center: function(e) {
              return r(e) / 2
            },
            end: r
          };

          function r(e) {
            return t - e
          }
          return {
            measure: function(r, o) {
              return l(e) ? n[e](r) : e(t, r, o)
            }
          }
        }(u, Z), ee = !H && !!K, te = H || !!K, {
          slideSizes: ne,
          slideSizesWithGaps: re,
          startGap: oe,
          endGap: ie
        } = function(e, t, n, r, o, i) {
          const {
            measureSize: s,
            startEdge: a,
            endEdge: l
          } = e, c = n[0] && o, u = function() {
            if (!c) return 0;
            const e = n[0];
            return d(t[a] - e[a])
          }(), f = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(v(r));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), h = n.map(s), p = n.map(((e, t, n) => {
            const r = !t,
              o = g(n, t);
            return r ? h[t] + u : o ? h[t] + f : n[t + 1][a] - e[a]
          })).map(d);
          return {
            slideSizes: h,
            slideSizesWithGaps: p,
            startGap: u,
            endGap: f
          }
        }(q, $, Y, n, te, o), se = function(e, t, n, r, o, i, s, l, c) {
          const {
            startEdge: u,
            endEdge: f,
            direction: h
          } = e, g = a(n);
          return {
            groupSlides: function(e) {
              return g ? function(e, t) {
                return p(e).filter((e => e % t == 0)).map((n => e.slice(n, n + t)))
              }(e, n) : function(e) {
                return e.length ? p(e).reduce(((n, a, p) => {
                  const g = v(n) || 0,
                    y = 0 === g,
                    b = a === m(e),
                    E = o[u] - i[g][u],
                    w = o[u] - i[a][f],
                    T = !r && y ? h(s) : 0,
                    _ = d(w - (!r && b ? h(l) : 0) - (E + T));
                  return p && _ > t + c && n.push(a), b && n.push(e.length), n
                }), []).map(((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          }
        }(q, Z, U, H, $, Y, oe, ie, 2), {
          snaps: ae,
          snapsAligned: le
        } = function(e, t, n, r, o) {
          const {
            startEdge: i,
            endEdge: s
          } = e, {
            groupSlides: a
          } = o, l = a(r).map((e => v(e)[s] - e[0][i])).map(d).map(t.measure), c = r.map((e => n[i] - e[i])).map((e => -d(e))), u = a(c).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: c,
            snapsAligned: u
          }
        }(q, Q, $, Y, se), ce = -v(ae) + v(re), {
          snapsContained: ue,
          scrollContainLimit: de
        } = function(e, t, n, r, o) {
          const i = _(-t + e, 0),
            s = n.map(((e, t) => {
              const {
                min: r,
                max: o
              } = i, s = i.constrain(e), a = !t, c = g(n, t);
              return a ? o : c || l(r, s) ? r : l(o, s) ? o : s
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = s[0],
                t = v(s);
              return _(s.lastIndexOf(e), s.indexOf(t) + 1)
            }();

          function l(e, t) {
            return h(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [i.max];
              if ("keepSnaps" === r) return s;
              const {
                min: n,
                max: o
              } = a;
              return s.slice(n, o)
            }(),
            scrollContainLimit: a
          }
        }(Z, ce, le, K), fe = ee ? ue : le, {
          limit: he
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: _(n ? r - e : v(t), r)
          }
        }(ce, fe, H), pe = P(m(fe), R, H), ve = pe.clone(), me = p(n), ge = function(e, t, n, r) {
          const o = T(),
            i = 1e3 / 60;
          let s = null,
            a = 0,
            l = 0;

          function c(e) {
            if (!l) return;
            s || (s = e, n(), n());
            const o = e - s;
            for (s = e, a += o; a >= i;) n(), a -= i;
            r(a / i), l && (l = t.requestAnimationFrame(c))
          }

          function u() {
            t.cancelAnimationFrame(l), s = null, a = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", (() => {
                e.hidden && (s = null, a = 0)
              }))
            },
            destroy: function() {
              u(), o.clear()
            },
            start: function() {
              l || (l = t.requestAnimationFrame(c))
            },
            stop: u,
            update: n,
            render: r
          }
        }(r, o, (() => (e => {
          let {
            dragHandler: t,
            scrollBody: n,
            scrollBounds: r,
            options: {
              loop: o
            }
          } = e;
          o || r.constrain(t.pointerDown()), n.seek()
        })(Oe)), (e => ((e, t) => {
          let {
            scrollBody: n,
            translate: r,
            location: o,
            offsetLocation: i,
            previousLocation: s,
            scrollLooper: a,
            slideLooper: l,
            dragHandler: c,
            animation: u,
            eventHandler: d,
            scrollBounds: f,
            options: {
              loop: h
            }
          } = e;
          const p = n.settled(),
            v = !f.shouldConstrain(),
            m = h ? p : p && v,
            g = m && !c.pointerDown();
          g && u.stop();
          const y = o.get() * t + s.get() * (1 - t);
          i.set(y), h && (a.loop(n.direction()), l.loop()), r.to(i.get()), g && d.emit("settle"), m || d.emit("scroll")
        })(Oe, e))), ye = fe[pe.get()], be = M(ye), Ee = M(ye), we = M(ye), Te = M(ye), _e = function(e, t, n, r, o, i) {
          let s = 0,
            a = 0,
            l = o,
            c = .68,
            u = e.get(),
            h = 0;

          function p(e) {
            return l = e, m
          }

          function v(e) {
            return c = e, m
          }
          const m = {
            direction: function() {
              return a
            },
            duration: function() {
              return l
            },
            velocity: function() {
              return s
            },
            seek: function() {
              const t = r.get() - e.get();
              let o = 0;
              return l ? (n.set(e), s += t / l, s *= c, u += s, e.add(s), o = u - h) : (s = 0, n.set(r), e.set(r), o = t), a = f(o), h = u, m
            },
            settled: function() {
              return d(r.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return v(.68)
            },
            useBaseDuration: function() {
              return p(o)
            },
            useFriction: v,
            useDuration: p
          };
          return m
        }(be, we, Ee, Te, N), Pe = function(e, t, n, r, o) {
          const {
            reachedAny: i,
            removeOffset: s,
            constrain: a
          } = r;

          function l(e) {
            return e.concat().sort(((e, t) => d(e) - d(t)))[0]
          }

          function c(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return l(o);
            const i = o.filter((e => f(e) === r));
            return i.length ? l(i) : v(o) - n
          }
          return {
            byDistance: function(n, r) {
              const l = o.get() + n,
                {
                  index: u,
                  distance: f
                } = function(n) {
                  const r = e ? s(n) : a(n),
                    o = t.map(((e, t) => ({
                      diff: c(e - r, 0),
                      index: t
                    }))).sort(((e, t) => d(e.diff) - d(t.diff))),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: r
                  }
                }(l),
                h = !e && i(l);
              return !r || h ? {
                index: u,
                distance: n
              } : {
                index: u,
                distance: n + c(t[u] - f, 0)
              }
            },
            byIndex: function(e, n) {
              return {
                index: e,
                distance: c(t[e] - o.get(), n)
              }
            },
            shortcut: c
          }
        }(H, fe, ce, he, Te), Se = function(e, t, n, r, o, i, s) {
          function a(o) {
            const a = o.distance,
              l = o.index !== t.get();
            i.add(a), a && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (n.set(t.get()), t.set(o.index), s.emit("select"))
          }
          return {
            distance: function(e, t) {
              a(o.byDistance(e, t))
            },
            index: function(e, n) {
              const r = t.clone().set(e);
              a(o.byIndex(r.get(), n))
            }
          }
        }(ge, pe, ve, _e, Pe, Te, s), Ce = function(e) {
          const {
            max: t,
            length: n
          } = e;
          return {
            get: function(e) {
              return n ? (e - t) / -n : 0
            }
          }
        }(he), Le = T(), xe = function(e, t, n, r) {
          const o = {};
          let i, s = null,
            a = null,
            l = !1;
          const c = {
            init: function() {
              i = new IntersectionObserver((e => {
                l || (e.forEach((e => {
                  const n = t.indexOf(e.target);
                  o[n] = e
                })), s = null, a = null, n.emit("slidesInView"))
              }), {
                root: e.parentElement,
                threshold: r
              }), t.forEach((e => i.observe(e)))
            },
            destroy: function() {
              i && i.disconnect(), l = !0
            },
            get: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              if (e && s) return s;
              if (!e && a) return a;
              const t = function(e) {
                return b(o).reduce(((t, n) => {
                  const r = parseInt(n),
                    {
                      isIntersecting: i
                    } = o[r];
                  return (e && i || !e && !i) && t.push(r), t
                }), [])
              }(e);
              return e && (s = t), e || (a = t), t
            }
          };
          return c
        }(t, n, s, F), {
          slideRegistry: Ae
        } = function(e, t, n, r, o, i) {
          const {
            groupSlides: s
          } = o, {
            min: a,
            max: l
          } = r;
          return {
            slideRegistry: function() {
              const r = s(i),
                o = !e || "keepSnaps" === t;
              return 1 === n.length ? [i] : o ? r : r.slice(a, l).map(((e, t, n) => {
                const r = !t,
                  o = g(n, t);
                return r ? y(v(n[0]) + 1) : o ? y(m(i) - v(n)[0] + 1, v(n)[0]) : e
              }))
            }()
          }
        }(ee, K, fe, de, se, me), Me = function(e, t, n, r, o, i, s, l) {
          const u = {
            passive: !0,
            capture: !0
          };
          let d = 0;

          function f(e) {
            "Tab" === e.code && (d = (new Date).getTime())
          }
          return {
            init: function(h) {
              l && (i.add(document, "keydown", f, !1), t.forEach(((t, f) => {
                i.add(t, "focus", (t => {
                  (c(l) || l(h, t)) && function(t) {
                    if ((new Date).getTime() - d > 10) return;
                    s.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = n.findIndex((e => e.includes(t)));
                    a(i) && (o.useDuration(0), r.index(i, 0), s.emit("slideFocus"))
                  }(f)
                }), u)
              })))
            }
          }
        }(e, n, Ae, Se, _e, Le, s, X), Oe = {
          ownerDocument: r,
          ownerWindow: o,
          eventHandler: s,
          containerRect: $,
          slideRects: Y,
          animation: ge,
          axis: q,
          dragHandler: S(q, e, r, o, Te, C(q, o), be, ge, Se, _e, Pe, pe, s, J, D, B, j, .68, W),
          eventStore: Le,
          percentOfView: J,
          index: pe,
          indexPrevious: ve,
          limit: he,
          location: be,
          offsetLocation: we,
          previousLocation: Ee,
          options: i,
          resizeHandler: L(t, s, o, n, q, V, z),
          scrollBody: _e,
          scrollBounds: x(he, we, Te, _e, J),
          scrollLooper: A(ce, he, we, [be, we, Ee, Te]),
          scrollProgress: Ce,
          scrollSnapList: fe.map(Ce.get),
          scrollSnaps: fe,
          scrollTarget: Pe,
          scrollTo: Se,
          slideLooper: k(q, Z, ce, ne, re, ae, fe, we, n),
          slideFocus: Me,
          slidesHandler: I(t, s, G),
          slidesInView: xe,
          slideIndexes: me,
          slideRegistry: Ae,
          slidesToScroll: se,
          target: Te,
          translate: O(q, t)
        };
        return Oe
      }
      const H = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
      };

      function N(e) {
        function t(e, t) {
          return E(e, t || {})
        }
        return {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = b(r).filter((t => e.matchMedia(t).matches)).map((e => r[e])).reduce(((e, n) => t(e, n)), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => b(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        }
      }

      function D(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = N(o),
          s = function(e) {
            let t = [];
            return {
              init: function(n, r) {
                return t = r.filter((t => {
                  let {
                    options: n
                  } = t;
                  return !1 !== e.optionsAtMedia(n).active
                })), t.forEach((t => t.init(n, e))), r.reduce(((e, t) => Object.assign(e, {
                  [t.name]: t
                })), {})
              },
              destroy: function() {
                t = t.filter((e => e.destroy()))
              }
            }
          }(i),
          a = T(),
          c = function() {
            let e, t = {};

            function n(e) {
              return t[e] || []
            }
            const r = {
              init: function(t) {
                e = t
              },
              emit: function(t) {
                return n(t).forEach((n => n(e, t))), r
              },
              off: function(e, o) {
                return t[e] = n(e).filter((e => e !== o)), r
              },
              on: function(e, o) {
                return t[e] = n(e).concat([o]), r
              },
              clear: function() {
                t = {}
              }
            };
            return r
          }(),
          {
            mergeOptions: u,
            optionsAtMedia: d,
            optionsMediaQueries: f
          } = i,
          {
            on: h,
            off: p,
            emit: v
          } = c,
          m = x;
        let g, y, b, E, w = !1,
          _ = u(H, D.globalOptions),
          P = u(_),
          S = [];

        function C(t) {
          const n = R(e, b, E, r, o, t, c);
          return t.loop && !n.slideLooper.canLoop() ? C(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function L(t, n) {
          w || (_ = u(_, t), P = d(_), S = n || S, function() {
            const {
              container: t,
              slides: n
            } = P, r = l(t) ? e.querySelector(t) : t;
            b = r || e.children[0];
            const o = l(n) ? b.querySelectorAll(n) : n;
            E = [].slice.call(o || b.children)
          }(), g = C(P), f([_, ...S.map((e => {
            let {
              options: t
            } = e;
            return t
          }))]).forEach((e => a.add(e, "change", x))), P.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(k), g.eventHandler.init(k), g.resizeHandler.init(k), g.slidesHandler.init(k), g.options.loop && g.slideLooper.loop(), b.offsetParent && E.length && g.dragHandler.init(k), y = s.init(k, S)))
        }

        function x(e, t) {
          const n = O();
          A(), L(u({
            startIndex: n
          }, e), t), c.emit("reInit")
        }

        function A() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), s.destroy(), a.clear()
        }

        function M(e, t, n) {
          P.active && !w && (g.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : P.duration), g.scrollTo.index(e, n || 0))
        }

        function O() {
          return g.index.get()
        }
        const k = {
          canScrollNext: function() {
            return g.index.add(1).get() !== O()
          },
          canScrollPrev: function() {
            return g.index.add(-1).get() !== O()
          },
          containerNode: function() {
            return b
          },
          internalEngine: function() {
            return g
          },
          destroy: function() {
            w || (w = !0, a.clear(), A(), c.emit("destroy"), c.clear())
          },
          off: p,
          on: h,
          emit: v,
          plugins: function() {
            return y
          },
          previousScrollSnap: function() {
            return g.indexPrevious.get()
          },
          reInit: m,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            M(g.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            M(g.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return g.scrollProgress.get(g.offsetLocation.get())
          },
          scrollSnapList: function() {
            return g.scrollSnapList
          },
          scrollTo: M,
          selectedScrollSnap: O,
          slideNodes: function() {
            return E
          },
          slidesInView: function() {
            return g.slidesInView.get()
          },
          slidesNotInView: function() {
            return g.slidesInView.get(!1)
          }
        };
        return L(t, n), setTimeout((() => c.emit("init")), 0), k
      }

      function B() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const n = (0, r.useRef)(e),
          o = (0, r.useRef)(t),
          [a, l] = (0, r.useState)(),
          [c, u] = (0, r.useState)(),
          d = (0, r.useCallback)((() => {
            a && a.reInit(n.current, o.current)
          }), [a]);
        return (0, r.useEffect)((() => {
          i(n.current, e) || (n.current = e, d())
        }), [e, d]), (0, r.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = s(e),
              r = s(t);
            return n.every(((e, t) => i(e, r[t])))
          })(o.current, t) || (o.current = t, d())
        }), [t, d]), (0, r.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && c) {
            D.globalOptions = B.globalOptions;
            const e = D(c, n.current, o.current);
            return l(e), () => e.destroy()
          }
          l(void 0)
        }), [c, l]), [u, a]
      }
      D.globalOptions = void 0, B.globalOptions = void 0
    }
  }
]);