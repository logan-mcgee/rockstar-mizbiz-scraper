try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e7df68f1-9c0c-44f5-a599-2da6176299d8", t._sentryDebugIdIdentifier = "sentry-dbid-e7df68f1-9c0c-44f5-a599-2da6176299d8")
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
  [2497], {
    48790(t, e, r) {
      r.d(e, {
        Ho: () => c,
        OC: () => i,
        hr: () => s,
        pg: () => u,
        sb: () => f,
        uo: () => l
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
          return (0, a.C6)(e, t), e
        }(Error),
        i = function(t) {
          function e(e, r) {
            return t.call(this, n.UNSUPPORTED_FORMATTER, e, r) || this
          }
          return (0, a.C6)(e, t), e
        }(o),
        l = function(t) {
          function e(e, r) {
            return t.call(this, n.INVALID_CONFIG, e, r) || this
          }
          return (0, a.C6)(e, t), e
        }(o),
        s = function(t) {
          function e(e, r) {
            return t.call(this, n.MISSING_DATA, e, r) || this
          }
          return (0, a.C6)(e, t), e
        }(o),
        u = function(t) {
          function e(e, r, a) {
            var o = t.call(this, n.FORMAT_ERROR, "".concat(e, "\nLocale: ").concat(r, "\n"), a) || this;
            return o.locale = r, o
          }
          return (0, a.C6)(e, t), e
        }(o),
        c = function(t) {
          function e(e, r, n, a) {
            var o = t.call(this, "".concat(e, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, a) || this;
            return o.descriptor = n, o.locale = r, o
          }
          return (0, a.C6)(e, t), e
        }(u),
        f = function(t) {
          function e(e, r) {
            var a = t.call(this, n.MISSING_TRANSLATION, 'Missing message: "'.concat(e.id, '" for locale "').concat(r, '", using ').concat(e.defaultMessage ? "default message (".concat("string" == typeof e.defaultMessage ? e.defaultMessage : e.defaultMessage.map(function(t) {
              var e;
              return null !== (e = t.value) && void 0 !== e ? e : JSON.stringify(t)
            }).join(), ")") : "id", " as fallback.")) || this;
            return a.descriptor = e, a
          }
          return (0, a.C6)(e, t), e
        }(o)
    },
    98373(t, e, r) {
      r.d(e, {
        F3: () => d,
        GT: () => m,
        J9: () => s,
        JF: () => u,
        MT: () => c,
        V1: () => l
      });
      var n = r(51177),
        a = r(9909),
        o = r(95729),
        i = r(48790);

      function l(t, e, r) {
        if (void 0 === r && (r = Error), !t) throw new r(e)
      }

      function s(t, e, r) {
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
          l = (0, a.B)(function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.DateTimeFormat).bind.apply(t, (0, n.fX)([void 0], e, !1)))
          }, {
            cache: f(t.dateTime),
            strategy: a.W.variadic
          }),
          s = (0, a.B)(function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.NumberFormat).bind.apply(t, (0, n.fX)([void 0], e, !1)))
          }, {
            cache: f(t.number),
            strategy: a.W.variadic
          }),
          u = (0, a.B)(function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.PluralRules).bind.apply(t, (0, n.fX)([void 0], e, !1)))
          }, {
            cache: f(t.pluralRules),
            strategy: a.W.variadic
          });
        return {
          getDateTimeFormat: l,
          getNumberFormat: s,
          getMessageFormat: (0, a.B)(function(t, e, r, a) {
            return new o.S(t, e, r, (0, n.Cl)({
              formatters: {
                getNumberFormat: s,
                getDateTimeFormat: l,
                getPluralRules: u
              }
            }, a || {}))
          }, {
            cache: f(t.message),
            strategy: a.W.variadic
          }),
          getRelativeTimeFormat: (0, a.B)(function() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new(e.bind.apply(e, (0, n.fX)([void 0], t, !1)))
          }, {
            cache: f(t.relativeTime),
            strategy: a.W.variadic
          }),
          getPluralRules: u,
          getListFormat: (0, a.B)(function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new(r.bind.apply(r, (0, n.fX)([void 0], t, !1)))
          }, {
            cache: f(t.list),
            strategy: a.W.variadic
          }),
          getDisplayNames: (0, a.B)(function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new(i.bind.apply(i, (0, n.fX)([void 0], t, !1)))
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
    57338(t, e, r) {
      r.d(e, {
        YK: () => f
      });
      var n, a, o = r(51177),
        i = r(4637),
        l = r(74775);
      ! function(t) {
        t.formatDate = "FormattedDate", t.formatTime = "FormattedTime", t.formatNumber = "FormattedNumber", t.formatList = "FormattedList", t.formatDisplayName = "FormattedDisplayName"
      }(n || (n = {})),
      function(t) {
        t.formatDate = "FormattedDateParts", t.formatTime = "FormattedTimeParts", t.formatNumber = "FormattedNumberParts", t.formatList = "FormattedListParts"
      }(a || (a = {}));
      var s = function(t) {
        var e = (0, l.A)(),
          r = t.value,
          n = t.children,
          a = (0, o.Tt)(t, ["value", "children"]);
        return n(e.formatNumberToParts(r, a))
      };

      function u(t) {
        var e = function(e) {
          var r = (0, l.A)(),
            n = e.value,
            a = e.children,
            i = (0, o.Tt)(e, ["value", "children"]),
            s = "string" == typeof n ? new Date(n || 0) : n;
          return a("formatDate" === t ? r.formatDateToParts(s, i) : r.formatTimeToParts(s, i))
        };
        return e.displayName = a[t], e
      }

      function c(t) {
        var e = function(e) {
          var r = (0, l.A)(),
            n = e.value,
            a = e.children,
            s = (0, o.Tt)(e, ["value", "children"]),
            u = r[t](n, s);
          if ("function" == typeof a) return a(u);
          var c = r.textComponent || i.Fragment;
          return i.createElement(c, null, u)
        };
        return e.displayName = n[t], e
      }

      function f(t) {
        return t
      }
      s.displayName = "FormattedNumberParts", s.displayName = "FormattedNumberParts", c("formatDate"), c("formatTime"), c("formatNumber"), c("formatList"), c("formatDisplayName"), u("formatDate"), u("formatTime")
    },
    73747(t, e, r) {
      r.d(e, {
        E: () => x
      });
      var n = r(51177),
        a = r(4888),
        o = r(95729),
        i = r(48790),
        l = r(98373);

      function s(t, e) {
        return Object.keys(t).reduce(function(r, a) {
          return r[a] = (0, n.Cl)({
            timeZone: e
          }, t[a]), r
        }, {})
      }

      function u(t, e) {
        return Object.keys((0, n.Cl)((0, n.Cl)({}, t), e)).reduce(function(r, a) {
          return r[a] = (0, n.Cl)((0, n.Cl)({}, t[a] || {}), e[a] || {}), r
        }, {})
      }

      function c(t, e) {
        if (!e) return t;
        var r = o.S.formats;
        return (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, r), t), {
          date: u(s(r.date, e), s(t.date || {}, e)),
          time: u(s(r.time, e), s(t.time || {}, e))
        })
      }
      var f = function(t, e, r, o, s) {
          var u = t.locale,
            f = t.formats,
            m = t.messages,
            d = t.defaultLocale,
            g = t.defaultFormats,
            p = t.fallbackOnEmptyString,
            v = t.onError,
            y = t.timeZone,
            h = t.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var b = r.id,
            T = r.defaultMessage;
          (0, l.V1)(!!b, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var E = String(b),
            F = m && Object.prototype.hasOwnProperty.call(m, E) && m[E];
          if (Array.isArray(F) && 1 === F.length && F[0].type === a.ZE.literal) return F[0].value;
          if (!o && F && "string" == typeof F && !h) return F.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (o = (0, n.Cl)((0, n.Cl)({}, h), o || {}), f = c(f, y), g = c(g, y), !F) {
            if (!1 === p && "" === F) return F;
            if ((!T || u && u.toLowerCase() !== d.toLowerCase()) && v(new i.sb(r, u)), T) try {
              return e.getMessageFormat(T, d, g, s).format(o)
            } catch (t) {
              return v(new i.Ho('Error formatting default message for: "'.concat(E, '", rendering default message verbatim'), u, r, t)), "string" == typeof T ? T : E
            }
            return E
          }
          try {
            return e.getMessageFormat(F, u, f, (0, n.Cl)({
              formatters: e
            }, s || {})).format(o)
          } catch (t) {
            v(new i.Ho('Error formatting message: "'.concat(E, '", using ').concat(T ? "default message" : "id", " as fallback."), u, r, t))
          }
          if (T) try {
            return e.getMessageFormat(T, d, g, s).format(o)
          } catch (t) {
            v(new i.Ho('Error formatting the default message for: "'.concat(E, '", rendering message verbatim'), u, r, t))
          }
          return "string" == typeof F ? F : "string" == typeof T ? T : E
        },
        m = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function d(t, e, r, a) {
        var o = t.locale,
          i = t.formats,
          s = t.onError,
          u = t.timeZone;
        void 0 === a && (a = {});
        var c = a.format,
          f = (0, n.Cl)((0, n.Cl)({}, u && {
            timeZone: u
          }), c && (0, l.F3)(i, e, c, s)),
          d = (0, l.J9)(a, m, f);
        return "time" !== e || d.hour || d.minute || d.second || d.timeStyle || d.dateStyle || (d = (0, n.Cl)((0, n.Cl)({}, d), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, d)
      }

      function g(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(t, "date", e, l).format(s)
        } catch (e) {
          t.onError(new i.pg("Error formatting date.", t.locale, e))
        }
        return String(s)
      }

      function p(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(t, "time", e, l).format(s)
        } catch (e) {
          t.onError(new i.pg("Error formatting time.", t.locale, e))
        }
        return String(s)
      }

      function v(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = r[2],
          s = void 0 === l ? {} : l,
          u = "string" == typeof a ? new Date(a || 0) : a,
          c = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return d(t, "dateTimeRange", e, s).formatRange(u, c)
        } catch (e) {
          t.onError(new i.pg("Error formatting date time range.", t.locale, e))
        }
        return String(u)
      }

      function y(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(t, "date", e, l).formatToParts(s)
        } catch (e) {
          t.onError(new i.pg("Error formatting date.", t.locale, e))
        }
        return []
      }

      function h(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(t, "time", e, l).formatToParts(s)
        } catch (e) {
          t.onError(new i.pg("Error formatting time.", t.locale, e))
        }
        return []
      }
      var b = r(22506),
        T = ["style", "type", "fallback", "languageDisplay"];

      function E(t, e, r, n) {
        var a = t.locale,
          o = t.onError;
        Intl.DisplayNames || o(new b.IF('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', b.O4.MISSING_INTL_API));
        var s = (0, l.J9)(n, T);
        try {
          return e(a, s).of(r)
        } catch (t) {
          o(new i.pg("Error formatting display name.", a, t))
        }
      }
      var F = ["type", "style"],
        w = Date.now();

      function I(t, e, r, n) {
        void 0 === n && (n = {});
        var a = N(t, e, r, n).reduce(function(t, e) {
          var r = e.value;
          return "string" != typeof r ? t.push(r) : "string" == typeof t[t.length - 1] ? t[t.length - 1] += r : t.push(r), t
        }, []);
        return 1 === a.length ? a[0] : 0 === a.length ? "" : a
      }

      function N(t, e, r, a) {
        var o = t.locale,
          s = t.onError;
        void 0 === a && (a = {}), Intl.ListFormat || s(new b.IF('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', b.O4.MISSING_INTL_API));
        var u = (0, l.J9)(a, F);
        try {
          var c = {},
            f = Array.from(r).map(function(t, e) {
              if ("object" == typeof t && null !== t) {
                var r = function(t) {
                  return "".concat(w, "_").concat(t, "_").concat(w)
                }(e);
                return c[r] = t, r
              }
              return String(t)
            });
          return e(o, u).formatToParts(f).map(function(t) {
            return "literal" === t.type ? t : (0, n.Cl)((0, n.Cl)({}, t), {
              value: c[t.value] || t.value
            })
          })
        } catch (t) {
          s(new i.pg("Error formatting list.", o, t))
        }
        return r
      }
      var C = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function D(t, e, r) {
        var n = t.locale,
          a = t.formats,
          o = t.onError;
        void 0 === r && (r = {});
        var i = r.format,
          s = i && (0, l.F3)(a, "number", i, o) || {};
        return e(n, (0, l.J9)(r, C, s))
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

      function _(t, e, r, n) {
        void 0 === n && (n = {});
        try {
          return D(t, e, n).formatToParts(r)
        } catch (e) {
          t.onError(new i.pg("Error formatting number.", t.locale, e))
        }
        return []
      }
      var R = ["type"];

      function O(t, e, r, n) {
        var a = t.locale,
          o = t.onError;
        void 0 === n && (n = {}), Intl.PluralRules || o(new b.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', b.O4.MISSING_INTL_API));
        var s = (0, l.J9)(n, R);
        try {
          return e(a, s).select(r)
        } catch (t) {
          o(new i.pg("Error formatting plural.", a, t))
        }
        return "other"
      }
      var M = ["numeric", "style"];

      function P(t, e, r, n, a) {
        void 0 === a && (a = {}), n || (n = "second"), Intl.RelativeTimeFormat || t.onError(new b.IF('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', b.O4.MISSING_INTL_API));
        try {
          return function(t, e, r) {
            var n = t.locale,
              a = t.formats,
              o = t.onError;
            void 0 === r && (r = {});
            var i = r.format,
              s = !!i && (0, l.F3)(a, "relative", i, o) || {};
            return e(n, (0, l.J9)(r, M, s))
          }(t, e, a).format(r, n)
        } catch (e) {
          t.onError(new i.pg("Error formatting relative time.", t.locale, e))
        }
        return String(r)
      }
      var A = r(78845),
        L = r(2603);

      function k(t) {
        return t ? Object.keys(t).reduce(function(e, r) {
          var n = t[r];
          return e[r] = (0, A.RK)(n) ? (0, L.yU)(n) : n, e
        }, {}) : t
      }
      var j = function(t, e, r, a) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var l = k(a),
            s = f.apply(void 0, (0, n.fX)([t, e, r, l], o, !1));
          return Array.isArray(s) ? (0, L.SP)(s) : s
        },
        x = function(t, e) {
          var r = t.defaultRichTextElements,
            a = (0, n.Tt)(t, ["defaultRichTextElements"]),
            o = k(r),
            s = function(t, e) {
              var r = (0, l.GT)(e),
                a = (0, n.Cl)((0, n.Cl)({}, l.JF), t),
                o = a.locale,
                s = a.defaultLocale,
                u = a.onError;
              return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && u ? u(new i.hr('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && u && u(new i.hr('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (u && u(new i.uo('"locale" was not configured, using "'.concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), a.locale = a.defaultLocale || "en"),
                function(t) {
                  var e;
                  t.onWarn && t.defaultRichTextElements && "string" == typeof((e = t.messages || {}) ? e[Object.keys(e)[0]] : void 0) && t.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
                }(a), (0, n.Cl)((0, n.Cl)({}, a), {
                  formatters: r,
                  formatNumber: S.bind(null, a, r.getNumberFormat),
                  formatNumberToParts: _.bind(null, a, r.getNumberFormat),
                  formatRelativeTime: P.bind(null, a, r.getRelativeTimeFormat),
                  formatDate: g.bind(null, a, r.getDateTimeFormat),
                  formatDateToParts: y.bind(null, a, r.getDateTimeFormat),
                  formatTime: p.bind(null, a, r.getDateTimeFormat),
                  formatDateTimeRange: v.bind(null, a, r.getDateTimeFormat),
                  formatTimeToParts: h.bind(null, a, r.getDateTimeFormat),
                  formatPlural: O.bind(null, a, r.getPluralRules),
                  formatMessage: f.bind(null, a, r),
                  $t: f.bind(null, a, r),
                  formatList: I.bind(null, a, r.getListFormat),
                  formatListToParts: N.bind(null, a, r.getListFormat),
                  formatDisplayName: E.bind(null, a, r.getDisplayNames)
                })
            }((0, n.Cl)((0, n.Cl)((0, n.Cl)({}, L.JF), a), {
              defaultRichTextElements: o
            }), e),
            u = {
              locale: s.locale,
              timeZone: s.timeZone,
              fallbackOnEmptyString: s.fallbackOnEmptyString,
              formats: s.formats,
              defaultLocale: s.defaultLocale,
              defaultFormats: s.defaultFormats,
              messages: s.messages,
              onError: s.onError,
              defaultRichTextElements: o
            };
          return (0, n.Cl)((0, n.Cl)({}, s), {
            formatMessage: j.bind(null, u, s.formatters),
            $t: j.bind(null, u, s.formatters)
          })
        }
    },
    21405(t, e, r) {
      r.d(e, {
        Kq: () => o,
        ob: () => i
      }), r(56848);
      var n = r(4637),
        a = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? n.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = n.createContext(null)),
        o = (a.Consumer, a.Provider),
        i = a
    },
    54422(t, e, r) {
      r.d(e, {
        A: () => f
      });
      var n = r(51177),
        a = r(98373),
        o = r(4637),
        i = r(2603),
        l = r(73747),
        s = r(21405);

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
            intl: (0, l.E)(u(e.props), e.cache),
            prevConfig: u(e.props)
          }, e
        }
        return (0, n.C6)(e, t), e.getDerivedStateFromProps = function(t, e) {
          var r = e.prevConfig,
            n = e.cache,
            a = u(t);
          return (0, i.bN)(r, a) ? null : {
            intl: (0, l.E)(a, n),
            prevConfig: a
          }
        }, e.prototype.render = function() {
          return (0, i.HM)(this.state.intl), o.createElement(s.Kq, {
            value: this.state.intl
          }, this.props.children)
        }, e.displayName = "IntlProvider", e.defaultProps = i.JF, e
      }(o.PureComponent);
      const f = c
    },
    74775(t, e, r) {
      r.d(e, {
        A: () => i
      });
      var n = r(4637),
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
        JF: () => l,
        SP: () => u,
        bN: () => f,
        yU: () => c
      });
      var n = r(51177),
        a = r(4637),
        o = r(98373);

      function i(t) {
        ! function(t, e, r) {
          if (void 0 === r && (r = Error), !t) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(t)
      }
      var l = (0, n.Cl)((0, n.Cl)({}, o.JF), {
          textComponent: a.Fragment
        }),
        s = function(t, e) {
          return a.isValidElement(t) ? a.cloneElement(t, {
            key: e
          }) : t
        },
        u = function(t) {
          var e;
          return null !== (e = a.Children.map(t, s)) && void 0 !== e ? e : []
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