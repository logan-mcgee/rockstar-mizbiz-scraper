try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "6494dfce-3c88-4600-9f4a-80a57e057961", t._sentryDebugIdIdentifier = "sentry-dbid-6494dfce-3c88-4600-9f4a-80a57e057961")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3135], {
    41936(t, e, r) {
      r.d(e, {
        Ho: () => c,
        OC: () => i,
        hr: () => l,
        pg: () => u,
        sb: () => f,
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
        f = function(t) {
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
    87707(t, e, r) {
      r.d(e, {
        F3: () => d,
        GT: () => m,
        J9: () => l,
        JF: () => u,
        MT: () => c,
        V1: () => s
      });
      var n = r(51177),
        a = r(9909),
        o = r(95729),
        i = r(41936);

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

      function f(t) {
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

      function m(t) {
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
            cache: f(t.dateTime),
            strategy: a.W.variadic
          }),
          l = (0, a.B)(function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.NumberFormat).bind.apply(t, (0, n.__spreadArray)([void 0], e, !1)))
          }, {
            cache: f(t.number),
            strategy: a.W.variadic
          }),
          u = (0, a.B)(function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.PluralRules).bind.apply(t, (0, n.__spreadArray)([void 0], e, !1)))
          }, {
            cache: f(t.pluralRules),
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
            cache: f(t.message),
            strategy: a.W.variadic
          }),
          getRelativeTimeFormat: (0, a.B)(function() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new(e.bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
          }, {
            cache: f(t.relativeTime),
            strategy: a.W.variadic
          }),
          getPluralRules: u,
          getListFormat: (0, a.B)(function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new(r.bind.apply(r, (0, n.__spreadArray)([void 0], t, !1)))
          }, {
            cache: f(t.list),
            strategy: a.W.variadic
          }),
          getDisplayNames: (0, a.B)(function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new(i.bind.apply(i, (0, n.__spreadArray)([void 0], t, !1)))
          }, {
            cache: f(t.displayNames),
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
    14376(t, e, r) {
      r.d(e, {
        YK: () => f
      });
      var n, a, o = r(51177),
        i = r(4637),
        s = r(68925);
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

      function f(t) {
        return t
      }
      l.displayName = "FormattedNumberParts", l.displayName = "FormattedNumberParts", c("formatDate"), c("formatTime"), c("formatNumber"), c("formatList"), c("formatDisplayName"), u("formatDate"), u("formatTime")
    },
    11119(t, e, r) {
      r.d(e, {
        Kq: () => o,
        ob: () => i
      }), r(56848);
      var n = r(4637),
        a = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? n.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = n.createContext(null)),
        o = (a.Consumer, a.Provider),
        i = a
    },
    30212(t, e, r) {
      r.d(e, {
        A: () => U
      });
      var n = r(51177),
        a = r(87707),
        o = r(4637),
        i = r(40949),
        s = r(4888),
        l = r(95729),
        u = r(41936);

      function c(t, e) {
        return Object.keys(t).reduce(function(r, a) {
          return r[a] = (0, n.__assign)({
            timeZone: e
          }, t[a]), r
        }, {})
      }

      function f(t, e) {
        return Object.keys((0, n.__assign)((0, n.__assign)({}, t), e)).reduce(function(r, a) {
          return r[a] = (0, n.__assign)((0, n.__assign)({}, t[a] || {}), e[a] || {}), r
        }, {})
      }

      function m(t, e) {
        if (!e) return t;
        var r = l.S.formats;
        return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, r), t), {
          date: f(c(r.date, e), c(t.date || {}, e)),
          time: f(c(r.time, e), c(t.time || {}, e))
        })
      }
      var d = function(t, e, r, o, i) {
          var l = t.locale,
            c = t.formats,
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
          (0, a.V1)(!!h, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var T = String(h),
            E = f && Object.prototype.hasOwnProperty.call(f, T) && f[T];
          if (Array.isArray(E) && 1 === E.length && E[0].type === s.ZE.literal) return E[0].value;
          if (!o && E && "string" == typeof E && !_) return E.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (o = (0, n.__assign)((0, n.__assign)({}, _), o || {}), c = m(c, y), g = m(g, y), !E) {
            if (!1 === p && "" === E) return E;
            if ((!b || l && l.toLowerCase() !== d.toLowerCase()) && v(new u.sb(r, l)), b) try {
              return e.getMessageFormat(b, d, g, i).format(o)
            } catch (t) {
              return v(new u.Ho('Error formatting default message for: "'.concat(T, '", rendering default message verbatim'), l, r, t)), "string" == typeof b ? b : T
            }
            return T
          }
          try {
            return e.getMessageFormat(E, l, c, (0, n.__assign)({
              formatters: e
            }, i || {})).format(o)
          } catch (t) {
            v(new u.Ho('Error formatting message: "'.concat(T, '", using ').concat(b ? "default message" : "id", " as fallback."), l, r, t))
          }
          if (b) try {
            return e.getMessageFormat(b, d, g, i).format(o)
          } catch (t) {
            v(new u.Ho('Error formatting the default message for: "'.concat(T, '", rendering message verbatim'), l, r, t))
          }
          return "string" == typeof E ? E : "string" == typeof b ? b : T
        },
        g = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function p(t, e, r, o) {
        var i = t.locale,
          s = t.formats,
          l = t.onError,
          u = t.timeZone;
        void 0 === o && (o = {});
        var c = o.format,
          f = (0, n.__assign)((0, n.__assign)({}, u && {
            timeZone: u
          }), c && (0, a.F3)(s, e, c, l)),
          m = (0, a.J9)(o, g, f);
        return "time" !== e || m.hour || m.minute || m.second || m.timeStyle || m.dateStyle || (m = (0, n.__assign)((0, n.__assign)({}, m), {
          hour: "numeric",
          minute: "numeric"
        })), r(i, m)
      }

      function v(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          i = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return p(t, "date", e, i).format(s)
        } catch (e) {
          t.onError(new u.pg("Error formatting date.", t.locale, e))
        }
        return String(s)
      }

      function y(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          i = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return p(t, "time", e, i).format(s)
        } catch (e) {
          t.onError(new u.pg("Error formatting time.", t.locale, e))
        }
        return String(s)
      }

      function _(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          i = r[2],
          s = void 0 === i ? {} : i,
          l = "string" == typeof a ? new Date(a || 0) : a,
          c = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return p(t, "dateTimeRange", e, s).formatRange(l, c)
        } catch (e) {
          t.onError(new u.pg("Error formatting date time range.", t.locale, e))
        }
        return String(l)
      }

      function h(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          i = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return p(t, "date", e, i).formatToParts(s)
        } catch (e) {
          t.onError(new u.pg("Error formatting date.", t.locale, e))
        }
        return []
      }

      function b(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          i = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return p(t, "time", e, i).formatToParts(s)
        } catch (e) {
          t.onError(new u.pg("Error formatting time.", t.locale, e))
        }
        return []
      }
      var T = r(22506),
        E = ["style", "type", "fallback", "languageDisplay"];

      function F(t, e, r, n) {
        var o = t.locale,
          i = t.onError;
        Intl.DisplayNames || i(new T.IF('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', T.O4.MISSING_INTL_API));
        var s = (0, a.J9)(n, E);
        try {
          return e(o, s).of(r)
        } catch (t) {
          i(new u.pg("Error formatting display name.", o, t))
        }
      }
      var w = ["type", "style"],
        I = Date.now();

      function N(t, e, r, n) {
        void 0 === n && (n = {});
        var a = D(t, e, r, n).reduce(function(t, e) {
          var r = e.value;
          return "string" != typeof r ? t.push(r) : "string" == typeof t[t.length - 1] ? t[t.length - 1] += r : t.push(r), t
        }, []);
        return 1 === a.length ? a[0] : 0 === a.length ? "" : a
      }

      function D(t, e, r, o) {
        var i = t.locale,
          s = t.onError;
        void 0 === o && (o = {}), Intl.ListFormat || s(new T.IF('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', T.O4.MISSING_INTL_API));
        var l = (0, a.J9)(o, w);
        try {
          var c = {},
            f = Array.from(r).map(function(t, e) {
              if ("object" == typeof t && null !== t) {
                var r = function(t) {
                  return "".concat(I, "_").concat(t, "_").concat(I)
                }(e);
                return c[r] = t, r
              }
              return String(t)
            });
          return e(i, l).formatToParts(f).map(function(t) {
            return "literal" === t.type ? t : (0, n.__assign)((0, n.__assign)({}, t), {
              value: c[t.value] || t.value
            })
          })
        } catch (t) {
          s(new u.pg("Error formatting list.", i, t))
        }
        return r
      }
      var S = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function R(t, e, r) {
        var n = t.locale,
          o = t.formats,
          i = t.onError;
        void 0 === r && (r = {});
        var s = r.format,
          l = s && (0, a.F3)(o, "number", s, i) || {};
        return e(n, (0, a.J9)(r, S, l))
      }

      function A(t, e, r, n) {
        void 0 === n && (n = {});
        try {
          return R(t, e, n).format(r)
        } catch (e) {
          t.onError(new u.pg("Error formatting number.", t.locale, e))
        }
        return String(r)
      }

      function O(t, e, r, n) {
        void 0 === n && (n = {});
        try {
          return R(t, e, n).formatToParts(r)
        } catch (e) {
          t.onError(new u.pg("Error formatting number.", t.locale, e))
        }
        return []
      }
      var M = ["type"];

      function P(t, e, r, n) {
        var o = t.locale,
          i = t.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new T.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', T.O4.MISSING_INTL_API));
        var s = (0, a.J9)(n, M);
        try {
          return e(o, s).select(r)
        } catch (t) {
          i(new u.pg("Error formatting plural.", o, t))
        }
        return "other"
      }
      var L = ["numeric", "style"];

      function k(t, e, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || t.onError(new T.IF('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', T.O4.MISSING_INTL_API));
        try {
          return function(t, e, r) {
            var n = t.locale,
              o = t.formats,
              i = t.onError;
            void 0 === r && (r = {});
            var s = r.format,
              l = !!s && (0, a.F3)(o, "relative", s, i) || {};
            return e(n, (0, a.J9)(r, L, l))
          }(t, e, o).format(r, n)
        } catch (e) {
          t.onError(new u.pg("Error formatting relative time.", t.locale, e))
        }
        return String(r)
      }
      var C = r(78845);

      function j(t) {
        return t ? Object.keys(t).reduce(function(e, r) {
          var n = t[r];
          return e[r] = (0, C.RK)(n) ? (0, i.yU)(n) : n, e
        }, {}) : t
      }
      var x = function(t, e, r, a) {
          for (var o = [], s = 4; s < arguments.length; s++) o[s - 4] = arguments[s];
          var l = j(a),
            u = d.apply(void 0, (0, n.__spreadArray)([t, e, r, l], o, !1));
          return Array.isArray(u) ? (0, i.SP)(u) : u
        },
        G = function(t, e) {
          var r = t.defaultRichTextElements,
            o = (0, n.__rest)(t, ["defaultRichTextElements"]),
            s = j(r),
            l = function(t, e) {
              var r = (0, a.GT)(e),
                o = (0, n.__assign)((0, n.__assign)({}, a.JF), t),
                i = o.locale,
                s = o.defaultLocale,
                l = o.onError;
              return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && l ? l(new u.hr('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && l && l(new u.hr('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new u.uo('"locale" was not configured, using "'.concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), o.locale = o.defaultLocale || "en"),
                function(t) {
                  var e;
                  t.onWarn && t.defaultRichTextElements && "string" == typeof((e = t.messages || {}) ? e[Object.keys(e)[0]] : void 0) && t.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
                }(o), (0, n.__assign)((0, n.__assign)({}, o), {
                  formatters: r,
                  formatNumber: A.bind(null, o, r.getNumberFormat),
                  formatNumberToParts: O.bind(null, o, r.getNumberFormat),
                  formatRelativeTime: k.bind(null, o, r.getRelativeTimeFormat),
                  formatDate: v.bind(null, o, r.getDateTimeFormat),
                  formatDateToParts: h.bind(null, o, r.getDateTimeFormat),
                  formatTime: y.bind(null, o, r.getDateTimeFormat),
                  formatDateTimeRange: _.bind(null, o, r.getDateTimeFormat),
                  formatTimeToParts: b.bind(null, o, r.getDateTimeFormat),
                  formatPlural: P.bind(null, o, r.getPluralRules),
                  formatMessage: d.bind(null, o, r),
                  $t: d.bind(null, o, r),
                  formatList: N.bind(null, o, r.getListFormat),
                  formatListToParts: D.bind(null, o, r.getListFormat),
                  formatDisplayName: F.bind(null, o, r.getDisplayNames)
                })
            }((0, n.__assign)((0, n.__assign)((0, n.__assign)({}, i.JF), o), {
              defaultRichTextElements: s
            }), e),
            c = {
              locale: l.locale,
              timeZone: l.timeZone,
              fallbackOnEmptyString: l.fallbackOnEmptyString,
              formats: l.formats,
              defaultLocale: l.defaultLocale,
              defaultFormats: l.defaultFormats,
              messages: l.messages,
              onError: l.onError,
              defaultRichTextElements: s
            };
          return (0, n.__assign)((0, n.__assign)({}, l), {
            formatMessage: x.bind(null, c, l.formatters),
            $t: x.bind(null, c, l.formatters)
          })
        },
        J = r(11119);

      function Z(t) {
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
      var W = function(t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.cache = (0, a.MT)(), e.state = {
            cache: e.cache,
            intl: G(Z(e.props), e.cache),
            prevConfig: Z(e.props)
          }, e
        }
        return (0, n.__extends)(e, t), e.getDerivedStateFromProps = function(t, e) {
          var r = e.prevConfig,
            n = e.cache,
            a = Z(t);
          return (0, i.bN)(r, a) ? null : {
            intl: G(a, n),
            prevConfig: a
          }
        }, e.prototype.render = function() {
          return (0, i.HM)(this.state.intl), o.createElement(J.Kq, {
            value: this.state.intl
          }, this.props.children)
        }, e.displayName = "IntlProvider", e.defaultProps = i.JF, e
      }(o.PureComponent);
      const U = W
    },
    68925(t, e, r) {
      r.d(e, {
        A: () => i
      });
      var n = r(4637),
        a = r(40949),
        o = r(11119);

      function i() {
        var t = n.useContext(o.ob);
        return (0, a.HM)(t), t
      }
    },
    40949(t, e, r) {
      r.d(e, {
        HM: () => i,
        JF: () => s,
        SP: () => u,
        bN: () => f,
        yU: () => c
      });
      var n = r(51177),
        a = r(4637),
        o = r(87707);

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

      function f(t, e) {
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