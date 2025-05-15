! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3ace2ab9-5c5e-4bcc-95e8-984be08395f7", e._sentryDebugIdIdentifier = "sentry-dbid-3ace2ab9-5c5e-4bcc-95e8-984be08395f7")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [3218], {
    1075: (e, t, r) => {
      r.d(t, {
        A: () => h
      });
      var n = r(23514),
        i = r(62229),
        o = r(65674),
        a = r(66920);

      function s(e, t) {
        var r = e.values,
          i = (0, n.__rest)(e, ["values"]),
          a = t.values,
          s = (0, n.__rest)(t, ["values"]);
        return (0, o.bN)(a, r) && (0, o.bN)(i, s)
      }

      function l(e) {
        var t = (0, a.A)(),
          r = t.formatMessage,
          n = t.textComponent,
          o = void 0 === n ? i.Fragment : n,
          s = e.id,
          l = e.description,
          u = e.defaultMessage,
          h = e.values,
          c = e.children,
          f = e.tagName,
          m = void 0 === f ? o : f,
          p = r({
            id: s,
            description: l,
            defaultMessage: u
          }, h, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof c ? c(Array.isArray(p) ? p : [p]) : m ? i.createElement(m, null, p) : i.createElement(i.Fragment, null, p)
      }
      l.displayName = "FormattedMessage";
      var u = i.memo(l, s);
      u.displayName = "MemoizedFormattedMessage";
      const h = u
    },
    6692: (e, t, r) => {
      r.d(t, {
        E: () => G
      });
      var n = r(23514),
        i = r(62244),
        o = r(56129),
        a = r(93815),
        s = r(43672);

      function l(e, t) {
        return Object.keys(e).reduce((function(r, i) {
          return r[i] = (0, n.__assign)({
            timeZone: t
          }, e[i]), r
        }), {})
      }

      function u(e, t) {
        return Object.keys((0, n.__assign)((0, n.__assign)({}, e), t)).reduce((function(r, i) {
          return r[i] = (0, n.__assign)((0, n.__assign)({}, e[i] || {}), t[i] || {}), r
        }), {})
      }

      function h(e, t) {
        if (!t) return e;
        var r = o.S.formats;
        return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, r), e), {
          date: u(l(r.date, t), l(e.date || {}, t)),
          time: u(l(r.time, t), l(e.time || {}, t))
        })
      }
      var c = function(e, t, r, o, l) {
          var u = e.locale,
            c = e.formats,
            f = e.messages,
            m = e.defaultLocale,
            p = e.defaultFormats,
            g = e.fallbackOnEmptyString,
            d = e.onError,
            y = e.timeZone,
            b = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var E = r.id,
            _ = r.defaultMessage;
          (0, s.V1)(!!E, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var v = String(E),
            T = f && Object.prototype.hasOwnProperty.call(f, v) && f[v];
          if (Array.isArray(T) && 1 === T.length && T[0].type === i.ZE.literal) return T[0].value;
          if (!o && T && "string" == typeof T && !b) return T.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (o = (0, n.__assign)((0, n.__assign)({}, b), o || {}), c = h(c, y), p = h(p, y), !T) {
            if (!1 === g && "" === T) return T;
            if ((!_ || u && u.toLowerCase() !== m.toLowerCase()) && d(new a.sb(r, u)), _) try {
              return t.getMessageFormat(_, m, p, l).format(o)
            } catch (e) {
              return d(new a.Ho('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), u, r, e)), "string" == typeof _ ? _ : v
            }
            return v
          }
          try {
            return t.getMessageFormat(T, u, c, (0, n.__assign)({
              formatters: t
            }, l || {})).format(o)
          } catch (e) {
            d(new a.Ho('Error formatting message: "'.concat(v, '", using ').concat(_ ? "default message" : "id", " as fallback."), u, r, e))
          }
          if (_) try {
            return t.getMessageFormat(_, m, p, l).format(o)
          } catch (e) {
            d(new a.Ho('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), u, r, e))
          }
          return "string" == typeof T ? T : "string" == typeof _ ? _ : v
        },
        f = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function m(e, t, r, i) {
        var o = e.locale,
          a = e.formats,
          l = e.onError,
          u = e.timeZone;
        void 0 === i && (i = {});
        var h = i.format,
          c = (0, n.__assign)((0, n.__assign)({}, u && {
            timeZone: u
          }), h && (0, s.F3)(a, t, h, l)),
          m = (0, s.J9)(i, f, c);
        return "time" !== t || m.hour || m.minute || m.second || m.timeStyle || m.dateStyle || (m = (0, n.__assign)((0, n.__assign)({}, m), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, m)
      }

      function p(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          l = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return m(e, "date", t, s).format(l)
        } catch (t) {
          e.onError(new a.pg("Error formatting date.", e.locale, t))
        }
        return String(l)
      }

      function g(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          l = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return m(e, "time", t, s).format(l)
        } catch (t) {
          e.onError(new a.pg("Error formatting time.", e.locale, t))
        }
        return String(l)
      }

      function d(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          s = r[2],
          l = void 0 === s ? {} : s,
          u = "string" == typeof i ? new Date(i || 0) : i,
          h = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return m(e, "dateTimeRange", t, l).formatRange(u, h)
        } catch (t) {
          e.onError(new a.pg("Error formatting date time range.", e.locale, t))
        }
        return String(u)
      }

      function y(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          l = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return m(e, "date", t, s).formatToParts(l)
        } catch (t) {
          e.onError(new a.pg("Error formatting date.", e.locale, t))
        }
        return []
      }

      function b(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          l = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return m(e, "time", t, s).formatToParts(l)
        } catch (t) {
          e.onError(new a.pg("Error formatting time.", e.locale, t))
        }
        return []
      }
      var E = r(67706),
        _ = ["style", "type", "fallback", "languageDisplay"];

      function v(e, t, r, n) {
        var i = e.locale,
          o = e.onError;
        Intl.DisplayNames || o(new E.IF('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', E.O4.MISSING_INTL_API));
        var l = (0, s.J9)(n, _);
        try {
          return t(i, l).of(r)
        } catch (e) {
          o(new a.pg("Error formatting display name.", i, e))
        }
      }
      var T = ["type", "style"],
        H = Date.now();

      function A(e, t, r, n) {
        void 0 === n && (n = {});
        var i = S(e, t, r, n).reduce((function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }), []);
        return 1 === i.length ? i[0] : 0 === i.length ? "" : i
      }

      function S(e, t, r, i) {
        var o = e.locale,
          l = e.onError;
        void 0 === i && (i = {}), Intl.ListFormat || l(new E.IF('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', E.O4.MISSING_INTL_API));
        var u = (0, s.J9)(i, T);
        try {
          var h = {},
            c = r.map((function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(H, "_").concat(e, "_").concat(H)
                }(t);
                return h[r] = e, r
              }
              return String(e)
            }));
          return t(o, u).formatToParts(c).map((function(e) {
            return "literal" === e.type ? e : (0, n.__assign)((0, n.__assign)({}, e), {
              value: h[e.value] || e.value
            })
          }))
        } catch (e) {
          l(new a.pg("Error formatting list.", o, e))
        }
        return r
      }
      var N = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function B(e, t, r) {
        var n = e.locale,
          i = e.formats,
          o = e.onError;
        void 0 === r && (r = {});
        var a = r.format,
          l = a && (0, s.F3)(i, "number", a, o) || {};
        return t(n, (0, s.J9)(r, N, l))
      }

      function P(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return B(e, t, n).format(r)
        } catch (t) {
          e.onError(new a.pg("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function I(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return B(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new a.pg("Error formatting number.", e.locale, t))
        }
        return []
      }
      var L = ["type"];

      function M(e, t, r, n) {
        var i = e.locale,
          o = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || o(new E.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', E.O4.MISSING_INTL_API));
        var l = (0, s.J9)(n, L);
        try {
          return t(i, l).select(r)
        } catch (e) {
          o(new a.pg("Error formatting plural.", i, e))
        }
        return "other"
      }
      var R = ["numeric", "style"];

      function C(e, t, r, n, i) {
        void 0 === i && (i = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new E.IF('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', E.O4.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              i = e.formats,
              o = e.onError;
            void 0 === r && (r = {});
            var a = r.format,
              l = !!a && (0, s.F3)(i, "relative", a, o) || {};
            return t(n, (0, s.J9)(r, R, l))
          }(e, t, i).format(r, n)
        } catch (t) {
          e.onError(new a.pg("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var w = r(67917),
        O = r(65674);

      function D(e) {
        return e ? Object.keys(e).reduce((function(t, r) {
          var n = e[r];
          return t[r] = (0, w.RK)(n) ? (0, O.yU)(n) : n, t
        }), {}) : e
      }
      var F = function(e, t, r, i) {
          for (var o = [], a = 4; a < arguments.length; a++) o[a - 4] = arguments[a];
          var s = D(i),
            l = c.apply(void 0, (0, n.__spreadArray)([e, t, r, s], o, !1));
          return Array.isArray(l) ? (0, O.SP)(l) : l
        },
        G = function(e, t) {
          var r = e.defaultRichTextElements,
            i = (0, n.__rest)(e, ["defaultRichTextElements"]),
            o = D(r),
            l = function(e, t) {
              var r = (0, s.GT)(t),
                i = (0, n.__assign)((0, n.__assign)({}, s.JF), e),
                o = i.locale,
                l = i.defaultLocale,
                u = i.onError;
              return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && u ? u(new a.hr('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(l, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && u && u(new a.hr('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(l, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (u && u(new a.uo('"locale" was not configured, using "'.concat(l, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), i.locale = i.defaultLocale || "en"),
                function(e) {
                  var t;
                  e.onWarn && e.defaultRichTextElements && "string" == typeof((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
                }(i), (0, n.__assign)((0, n.__assign)({}, i), {
                  formatters: r,
                  formatNumber: P.bind(null, i, r.getNumberFormat),
                  formatNumberToParts: I.bind(null, i, r.getNumberFormat),
                  formatRelativeTime: C.bind(null, i, r.getRelativeTimeFormat),
                  formatDate: p.bind(null, i, r.getDateTimeFormat),
                  formatDateToParts: y.bind(null, i, r.getDateTimeFormat),
                  formatTime: g.bind(null, i, r.getDateTimeFormat),
                  formatDateTimeRange: d.bind(null, i, r.getDateTimeFormat),
                  formatTimeToParts: b.bind(null, i, r.getDateTimeFormat),
                  formatPlural: M.bind(null, i, r.getPluralRules),
                  formatMessage: c.bind(null, i, r),
                  $t: c.bind(null, i, r),
                  formatList: A.bind(null, i, r.getListFormat),
                  formatListToParts: S.bind(null, i, r.getListFormat),
                  formatDisplayName: v.bind(null, i, r.getDisplayNames)
                })
            }((0, n.__assign)((0, n.__assign)((0, n.__assign)({}, O.JF), i), {
              defaultRichTextElements: o
            }), t),
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
            formatMessage: F.bind(null, u, l.formatters),
            $t: F.bind(null, u, l.formatters)
          })
        }
    },
    9008: (e, t, r) => {
      r.d(t, {
        YK: () => c
      });
      var n, i, o = r(23514),
        a = r(62229),
        s = r(66920);
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(n || (n = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(i || (i = {}));
      var l = function(e) {
        var t = (0, s.A)(),
          r = e.value,
          n = e.children,
          i = (0, o.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, i))
      };

      function u(e) {
        var t = function(t) {
          var r = (0, s.A)(),
            n = t.value,
            i = t.children,
            a = (0, o.__rest)(t, ["value", "children"]),
            l = "string" == typeof n ? new Date(n || 0) : n;
          return i("formatDate" === e ? r.formatDateToParts(l, a) : r.formatTimeToParts(l, a))
        };
        return t.displayName = i[e], t
      }

      function h(e) {
        var t = function(t) {
          var r = (0, s.A)(),
            n = t.value,
            i = t.children,
            l = (0, o.__rest)(t, ["value", "children"]),
            u = r[e](n, l);
          if ("function" == typeof i) return i(u);
          var h = r.textComponent || a.Fragment;
          return a.createElement(h, null, u)
        };
        return t.displayName = n[e], t
      }

      function c(e) {
        return e
      }
      l.displayName = "FormattedNumberParts", l.displayName = "FormattedNumberParts", h("formatDate"), h("formatTime"), h("formatNumber"), h("formatList"), h("formatDisplayName"), u("formatDate"), u("formatTime")
    },
    9862: (e, t, r) => {
      e.exports = r(52522)
    },
    18289: (e, t, r) => {
      function n(e, t) {
        var r = t && t.cache ? t.cache : h,
          n = t && t.serializer ? t.serializer : l;
        return (t && t.strategy ? t.strategy : s)(e, {
          cache: r,
          serializer: n
        })
      }

      function i(e, t, r, n) {
        var i, o = null == (i = n) || "number" == typeof i || "boolean" == typeof i ? n : r(n),
          a = t.get(o);
        return void 0 === a && (a = e.call(this, n), t.set(o, a)), a
      }

      function o(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          i = r(n),
          o = t.get(i);
        return void 0 === o && (o = e.apply(this, n), t.set(i, o)), o
      }

      function a(e, t, r, n, i) {
        return r.bind(t, e, n, i)
      }

      function s(e, t) {
        return a(e, this, 1 === e.length ? i : o, t.cache.create(), t.serializer)
      }
      r.d(t, {
        B: () => n,
        W: () => c
      });
      var l = function() {
          return JSON.stringify(arguments)
        },
        u = function() {
          function e() {
            this.cache = Object.create(null)
          }
          return e.prototype.get = function(e) {
            return this.cache[e]
          }, e.prototype.set = function(e, t) {
            this.cache[e] = t
          }, e
        }(),
        h = {
          create: function() {
            return new u
          }
        },
        c = {
          variadic: function(e, t) {
            return a(e, this, o, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return a(e, this, i, t.cache.create(), t.serializer)
          }
        }
    },
    43672: (e, t, r) => {
      r.d(t, {
        F3: () => m,
        GT: () => f,
        J9: () => l,
        JF: () => u,
        MT: () => h,
        V1: () => s
      });
      var n = r(23514),
        i = r(18289),
        o = r(56129),
        a = r(93815);

      function s(e, t, r) {
        if (void 0 === r && (r = Error), !e) throw new r(t)
      }

      function l(e, t, r) {
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

      function h() {
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

      function f(e) {
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
          s = (0, i.B)((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
          }), {
            cache: c(e.dateTime),
            strategy: i.W.variadic
          }),
          l = (0, i.B)((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
          }), {
            cache: c(e.number),
            strategy: i.W.variadic
          }),
          u = (0, i.B)((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
          }), {
            cache: c(e.pluralRules),
            strategy: i.W.variadic
          });
        return {
          getDateTimeFormat: s,
          getNumberFormat: l,
          getMessageFormat: (0, i.B)((function(e, t, r, i) {
            return new o.S(e, t, r, (0, n.__assign)({
              formatters: {
                getNumberFormat: l,
                getDateTimeFormat: s,
                getPluralRules: u
              }
            }, i || {}))
          }), {
            cache: c(e.message),
            strategy: i.W.variadic
          }),
          getRelativeTimeFormat: (0, i.B)((function() {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new(t.bind.apply(t, (0, n.__spreadArray)([void 0], e, !1)))
          }), {
            cache: c(e.relativeTime),
            strategy: i.W.variadic
          }),
          getPluralRules: u,
          getListFormat: (0, i.B)((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(r.bind.apply(r, (0, n.__spreadArray)([void 0], e, !1)))
          }), {
            cache: c(e.list),
            strategy: i.W.variadic
          }),
          getDisplayNames: (0, i.B)((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(a.bind.apply(a, (0, n.__spreadArray)([void 0], e, !1)))
          }), {
            cache: c(e.displayNames),
            strategy: i.W.variadic
          })
        }
      }

      function m(e, t, r, n) {
        var i, o = e && e[t];
        if (o && (i = o[r]), i) return i;
        n(new a.OC("No ".concat(t, " format named: ").concat(r)))
      }
    },
    45379: (e, t, r) => {
      r.d(t, {
        A: () => h
      });
      var n = r(23514),
        i = r(43672),
        o = r(62229),
        a = r(65674),
        s = r(6692),
        l = r(57160);

      function u(e) {
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
      const h = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cache = (0, i.MT)(), t.state = {
            cache: t.cache,
            intl: (0, s.E)(u(t.props), t.cache),
            prevConfig: u(t.props)
          }, t
        }
        return (0, n.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            i = u(e);
          return (0, a.bN)(r, i) ? null : {
            intl: (0, s.E)(i, n),
            prevConfig: i
          }
        }, t.prototype.render = function() {
          return (0, a.HM)(this.state.intl), o.createElement(l.Kq, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = a.JF, t
      }(o.PureComponent)
    },
    52522: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        h = r ? Symbol.for("react.async_mode") : 60111,
        c = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        m = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        g = r ? Symbol.for("react.memo") : 60115,
        d = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        E = r ? Symbol.for("react.responder") : 60118,
        _ = r ? Symbol.for("react.scope") : 60119;

      function v(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case h:
                case c:
                case o:
                case s:
                case a:
                case m:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case u:
                    case f:
                    case d:
                    case g:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case i:
              return t
          }
        }
      }

      function T(e) {
        return v(e) === c
      }
      t.AsyncMode = h, t.ConcurrentMode = c, t.ContextConsumer = u, t.ContextProvider = l, t.Element = n, t.ForwardRef = f, t.Fragment = o, t.Lazy = d, t.Memo = g, t.Portal = i, t.Profiler = s, t.StrictMode = a, t.Suspense = m, t.isAsyncMode = function(e) {
        return T(e) || v(e) === h
      }, t.isConcurrentMode = T, t.isContextConsumer = function(e) {
        return v(e) === u
      }, t.isContextProvider = function(e) {
        return v(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return v(e) === f
      }, t.isFragment = function(e) {
        return v(e) === o
      }, t.isLazy = function(e) {
        return v(e) === d
      }, t.isMemo = function(e) {
        return v(e) === g
      }, t.isPortal = function(e) {
        return v(e) === i
      }, t.isProfiler = function(e) {
        return v(e) === s
      }, t.isStrictMode = function(e) {
        return v(e) === a
      }, t.isSuspense = function(e) {
        return v(e) === m
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === o || e === c || e === s || e === a || e === m || e === p || "object" == typeof e && null !== e && (e.$$typeof === d || e.$$typeof === g || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || e.$$typeof === b || e.$$typeof === E || e.$$typeof === _ || e.$$typeof === y)
      }, t.typeOf = v
    },
    56129: (e, t, r) => {
      r.d(t, {
        S: () => l
      });
      var n = r(23514),
        i = r(18289),
        o = r(62244),
        a = r(67917);

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
      var l = function() {
        function e(t, r, o, l) {
          void 0 === r && (r = e.defaultLocale);
          var u, h, c, f = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = f.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce((function(e, t) {
                return e.length && t.type === a.TT.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return (0, a.hN)(f.ast, f.locales, f.formatters, f.formats, e, void 0, f.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = f.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0]
              }
            }, this.getAst = function() {
              return f.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var m = l || {},
              p = (m.formatters, (0, n.__rest)(m, ["formatters"]));
            this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, p), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (h = e.formats, (c = o) ? Object.keys(h).reduce((function(e, t) {
            var r, i;
            return e[t] = (r = h[t], (i = c[t]) ? (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, r || {}), i || {}), Object.keys(r).reduce((function(e, t) {
              return e[t] = (0, n.__assign)((0, n.__assign)({}, r[t]), i[t] || {}), e
            }), {})) : r), e
          }), (0, n.__assign)({}, h)) : h), this.formatters = l && l.formatters || (void 0 === (u = this.formatterCache) && (u = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, i.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
            }), {
              cache: s(u.number),
              strategy: i.W.variadic
            }),
            getDateTimeFormat: (0, i.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
            }), {
              cache: s(u.dateTime),
              strategy: i.W.variadic
            }),
            getPluralRules: (0, i.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
            }), {
              cache: s(u.pluralRules),
              strategy: i.W.variadic
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
    56481: (e, t, r) => {
      r.d(t, {
        A: () => a
      });
      const n = {
          getcanonicallocales: {
            should: () => Promise.all([r.e(7353), r.e(5830)]).then(r.bind(r, 43888)),
            polyfill: () => r.e(5018).then(r.bind(r, 4478))
          },
          locale: {
            should: () => Promise.all([r.e(7353), r.e(5830)]).then(r.bind(r, 14099)),
            polyfill: () => r.e(9615).then(r.bind(r, 79285))
          },
          listformat: {
            should: () => Promise.all([r.e(7353), r.e(5830)]).then(r.bind(r, 52916)),
            polyfill: () => Promise.all([r.e(7353), r.e(4480), r.e(8970)]).then(r.bind(r, 78204)),
            locale: e => r(63514)(`./${e}`)
          },
          displaynames: {
            should: () => Promise.all([r.e(7353), r.e(5830)]).then(r.bind(r, 11297)),
            polyfill: () => Promise.all([r.e(7353), r.e(4480), r.e(3343)]).then(r.bind(r, 89039)),
            locale: e => r(94375)(`./${e}`)
          },
          pluralrules: {
            should: () => Promise.all([r.e(7353), r.e(5830)]).then(r.bind(r, 54920)),
            polyfill: () => Promise.all([r.e(7353), r.e(4480), r.e(314)]).then(r.bind(r, 36288)),
            locale: e => r(38525)(`./${e}`)
          },
          numberformat: {
            should: () => Promise.all([r.e(7353), r.e(5830)]).then(r.bind(r, 34487)),
            polyfill: () => Promise.all([r.e(7353), r.e(4480), r.e(907)]).then(r.bind(r, 60345)),
            locale: e => r(5267)(`./${e}`)
          },
          relativetimeformat: {
            should: () => Promise.all([r.e(7353), r.e(5830)]).then(r.bind(r, 81463)),
            polyfill: () => Promise.all([r.e(7353), r.e(4480), r.e(8391)]).then(r.bind(r, 62137)),
            locale: e => r(33019)(`./${e}`)
          },
          datetimeformat: {
            should: () => Promise.all([r.e(7353), r.e(5830)]).then(r.bind(r, 78731)),
            polyfill: () => Promise.all([r.e(7353), r.e(4480), r.e(4731)]).then(r.bind(r, 32829)),
            locale: e => Promise.all([r.e(6280).then(r.t.bind(r, 21414, 23)), r(94819)(`./${e}`)])
          }
        },
        i = {
          getcanonicallocales: ["getcanonicallocales"],
          locale: ["getcanonicallocales", "locale"],
          pluralrules: ["getcanonicallocales", "locale", "pluralrules"],
          numberformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat"],
          relativetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "relativetimeformat"],
          datetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "datetimeformat"],
          displaynames: ["getcanonicallocales", "locale", "displaynames"],
          listformat: ["getcanonicallocales", "locale", "listformat"]
        },
        o = async (e, t, r) => {
          const {
            shouldPolyfill: n
          } = await e.should();
          return !!n(e.locale ? t : null) && (await e.polyfill(), e.locale && await e.locale(t), !0)
        }, a = async (e, t) => {
          if (!e) throw new Error("Please provide the desired locale");
          if (!t || !t.length) throw new Error(`Please provide the list of polyfills to load, supported ones are: ${Object.keys(i).join(", ")}`);
          const r = [];
          let a = 0;
          for (const s of t) {
            if (!s || !i[s]) throw new Error(`Unsupported polyfill: ${s}. Supported ones are: ${Object.keys(i).join(", ")}`);
            for (const t of i[s]) - 1 === r.indexOf(t) && (await o(n[t], e) && a++, r.push(t))
          }
          return a
        }
    },
    57160: (e, t, r) => {
      r.d(t, {
        Kq: () => o,
        ob: () => a
      }), r(67332);
      var n = r(62229),
        i = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? n.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = n.createContext(null)),
        o = (i.Consumer, i.Provider),
        a = i
    },
    62244: (e, t, r) => {
      r.d(t, {
        ZE: () => i,
        Im: () => u,
        tv: () => c,
        Tu: () => b,
        eW: () => l,
        oF: () => h,
        N1: () => y,
        N6: () => p,
        jA: () => g,
        Jp: () => m,
        xm: () => d,
        Qh: () => f,
        qg: () => ae
      });
      var n, i, o, a, s = r(23514);

      function l(e) {
        return e.type === i.literal
      }

      function u(e) {
        return e.type === i.argument
      }

      function h(e) {
        return e.type === i.number
      }

      function c(e) {
        return e.type === i.date
      }

      function f(e) {
        return e.type === i.time
      }

      function m(e) {
        return e.type === i.select
      }

      function p(e) {
        return e.type === i.plural
      }

      function g(e) {
        return e.type === i.pound
      }

      function d(e) {
        return e.type === i.tag
      }

      function y(e) {
        return !(!e || "object" != typeof e || e.type !== o.number)
      }

      function b(e) {
        return !(!e || "object" != typeof e || e.type !== o.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(n || (n = {})), (a = i || (i = {}))[a.literal = 0] = "literal", a[a.argument = 1] = "argument", a[a.number = 2] = "number", a[a.date = 3] = "date", a[a.time = 4] = "time", a[a.select = 5] = "select", a[a.plural = 6] = "plural", a[a.pound = 7] = "pound", a[a.tag = 8] = "tag",
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(o || (o = {}));
      var E = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        _ = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function v(e) {
        var t = {};
        return e.replace(_, (function(e) {
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
        H = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        A = /^(@+)?(\+|#+)?[rs]?$/g,
        S = /(\*)(0+)|(#+)(0+)|(0+)/g,
        N = /^(0+)$/;

      function B(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(A, (function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        })), t
      }

      function P(e) {
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

      function I(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !N.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function L(e) {
        return P(e) || {}
      }

      function M(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var i = n[r];
          switch (i.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = i.options[0];
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
              t.style = "unit", t.unit = i.options[0].replace(/^(.*?)-/, "");
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
              }), i.options.reduce((function(e, t) {
                return (0, s.__assign)((0, s.__assign)({}, e), L(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, s.__assign)((0, s.__assign)((0, s.__assign)({}, t), {
                notation: "engineering"
              }), i.options.reduce((function(e, t) {
                return (0, s.__assign)((0, s.__assign)({}, e), L(t))
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
              t.scale = parseFloat(i.options[0]);
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
              if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              i.options[0].replace(S, (function(e, r, n, i, o, a) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (i && o) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (N.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
          else if (H.test(i.stem)) {
            if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            i.stem.replace(H, (function(e, r, n, i, o, a) {
              return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && a ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var o = i.options[0];
            "w" === o ? t = (0, s.__assign)((0, s.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : o && (t = (0, s.__assign)((0, s.__assign)({}, t), B(o)))
          } else if (A.test(i.stem)) t = (0, s.__assign)((0, s.__assign)({}, t), B(i.stem));
          else {
            var a = P(i.stem);
            a && (t = (0, s.__assign)((0, s.__assign)({}, t), a));
            var l = I(i.stem);
            l && (t = (0, s.__assign)((0, s.__assign)({}, t), l))
          }
        }
        return t
      }
      var R, C = {
        "001": ["H", "h"],
        419: ["h", "H", "hB", "hb"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["h", "H", "hB", "hb"],
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
        BO: ["h", "H", "hB", "hb"],
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
        CL: ["h", "H", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["h", "H", "hB", "hb"],
        CU: ["h", "H", "hB", "hb"],
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
        EC: ["h", "H", "hB", "hb"],
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
        GT: ["h", "H", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["h", "H", "hB", "hb"],
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
        MX: ["h", "H", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["h", "H", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["h", "H", "hB", "hb"],
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
        PY: ["h", "H", "hB", "hb"],
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
        SV: ["h", "H", "hB", "hb"],
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
        UY: ["h", "H", "hB", "hb"],
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
        "en-HK": ["h", "hb", "H", "hB"],
        "en-IL": ["H", "h", "hb", "hB"],
        "en-MY": ["h", "hb", "H", "hB"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
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

      function w(e) {
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
        return "root" !== n && (r = e.maximize().region), (C[r || ""] || C[n || ""] || C["".concat(n, "-001")] || C["001"])[0]
      }
      var O = new RegExp("^".concat(E.source, "*")),
        D = new RegExp("".concat(E.source, "*$"));

      function F(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var G = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        U = !!String.fromCodePoint,
        k = !!Object.fromEntries,
        x = !!String.prototype.codePointAt,
        j = !!String.prototype.trimStart,
        V = !!String.prototype.trimEnd,
        $ = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        X = !0;
      try {
        X = "a" === (null === (R = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === R ? void 0 : R[0])
      } catch (e) {
        X = !1
      }
      var K, Z = G ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        W = U ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", i = e.length, o = 0; i > o;) {
            if ((r = e[o++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Y = k ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var i = n[r],
              o = i[0],
              a = i[1];
            t[o] = a
          }
          return t
        },
        J = x ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, i = e.charCodeAt(t);
            return i < 55296 || i > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? i : n - 56320 + (i - 55296 << 10) + 65536
          }
        },
        z = j ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(O, "")
        },
        q = V ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(D, "")
        };

      function Q(e, t) {
        return new RegExp(e, t)
      }
      if (X) {
        var ee = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        K = function(e, t) {
          var r;
          return ee.lastIndex = t, null !== (r = ee.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else K = function(e, t) {
        for (var r = [];;) {
          var n = J(e, t);
          if (void 0 === n || ne(n) || ie(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return W.apply(void 0, r)
      };
      var te = function() {
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
          for (var o = []; !this.isEOF();) {
            var a = this.char();
            if (123 === a) {
              if ((s = this.parseArgument(e, r)).err) return s;
              o.push(s.val)
            } else {
              if (125 === a && e > 0) break;
              if (35 !== a || "plural" !== t && "selectordinal" !== t) {
                if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(n.UNMATCHED_CLOSING_TAG, F(this.clonePosition(), this.clonePosition()))
                }
                if (60 === a && !this.ignoreTag && re(this.peek() || 0)) {
                  if ((s = this.parseTag(e, t)).err) return s;
                  o.push(s.val)
                } else {
                  var s;
                  if ((s = this.parseLiteral(e, t)).err) return s;
                  o.push(s.val)
                }
              } else {
                var l = this.clonePosition();
                this.bump(), o.push({
                  type: i.pound,
                  location: F(l, this.clonePosition())
                })
              }
            }
          }
          return {
            val: o,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var o = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: i.literal,
              value: "<".concat(o, "/>"),
              location: F(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var a = this.parseMessage(e + 1, t, !0);
            if (a.err) return a;
            var s = a.val,
              l = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !re(this.char())) return this.error(n.INVALID_TAG, F(l, this.clonePosition()));
              var u = this.clonePosition();
              return o !== this.parseTagName() ? this.error(n.UNMATCHED_CLOSING_TAG, F(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: i.tag,
                  value: o,
                  children: s,
                  location: F(r, this.clonePosition())
                },
                err: null
              } : this.error(n.INVALID_TAG, F(l, this.clonePosition())))
            }
            return this.error(n.UNCLOSED_TAG, F(r, this.clonePosition()))
          }
          return this.error(n.INVALID_TAG, F(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
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
          var l = F(r, this.clonePosition());
          return {
            val: {
              type: i.literal,
              value: n,
              location: l
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (re(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return W.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), W(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, F(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(n.EMPTY_ARGUMENT, F(r, this.clonePosition()));
          var o = this.parseIdentifierIfPossible().value;
          if (!o) return this.error(n.MALFORMED_ARGUMENT, F(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, F(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: i.argument,
                  value: o,
                  location: F(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, F(r, this.clonePosition())) : this.parseArgumentOptions(e, t, o, r);
            default:
              return this.error(n.MALFORMED_ARGUMENT, F(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = K(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: F(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, a) {
          var l, u = this.clonePosition(),
            h = this.parseIdentifierIfPossible().value,
            c = this.clonePosition();
          switch (h) {
            case "":
              return this.error(n.EXPECT_ARGUMENT_TYPE, F(u, c));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var f = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var m = this.clonePosition();
                if ((T = this.parseSimpleArgStyleIfPossible()).err) return T;
                if (0 === (y = q(T.val)).length) return this.error(n.EXPECT_ARGUMENT_STYLE, F(this.clonePosition(), this.clonePosition()));
                f = {
                  style: y,
                  styleLocation: F(m, this.clonePosition())
                }
              }
              if ((H = this.tryParseArgumentClose(a)).err) return H;
              var p = F(a, this.clonePosition());
              if (f && Z(null == f ? void 0 : f.style, "::", 0)) {
                var g = z(f.style.slice(2));
                if ("number" === h) return (T = this.parseNumberSkeletonFromString(g, f.styleLocation)).err ? T : {
                  val: {
                    type: i.number,
                    value: r,
                    location: p,
                    style: T.val
                  },
                  err: null
                };
                if (0 === g.length) return this.error(n.EXPECT_DATE_TIME_SKELETON, p);
                var d = g;
                this.locale && (d = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var i = e.charAt(n);
                    if ("j" === i) {
                      for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i;) o++, n++;
                      var a = 1 + (1 & o),
                        s = o < 2 ? 1 : 3 + (o >> 1),
                        l = w(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === i ? "H" : i
                  }
                  return r
                }(g, this.locale));
                var y = {
                  type: o.dateTime,
                  pattern: d,
                  location: f.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? v(d) : {}
                };
                return {
                  val: {
                    type: "date" === h ? i.date : i.time,
                    value: r,
                    location: p,
                    style: y
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === h ? i.number : "date" === h ? i.date : i.time,
                  value: r,
                  location: p,
                  style: null !== (l = null == f ? void 0 : f.style) && void 0 !== l ? l : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var b = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS, F(b, (0, s.__assign)({}, b)));
              this.bumpSpace();
              var E = this.parseIdentifierIfPossible(),
                _ = 0;
              if ("select" !== h && "offset" === E.value) {
                if (!this.bumpIf(":")) return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F(this.clonePosition(), this.clonePosition()));
                var T;
                if (this.bumpSpace(), (T = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return T;
                this.bumpSpace(), E = this.parseIdentifierIfPossible(), _ = T.val
              }
              var H, A = this.tryParsePluralOrSelectOptions(e, h, t, E);
              if (A.err) return A;
              if ((H = this.tryParseArgumentClose(a)).err) return H;
              var S = F(a, this.clonePosition());
              return "select" === h ? {
                val: {
                  type: i.select,
                  value: r,
                  options: Y(A.val),
                  location: S
                },
                err: null
              } : {
                val: {
                  type: i.plural,
                  value: r,
                  options: Y(A.val),
                  offset: _,
                  pluralType: "plural" === h ? "cardinal" : "ordinal",
                  location: S
                },
                err: null
              };
            default:
              return this.error(n.INVALID_ARGUMENT_TYPE, F(u, c))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, F(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, F(r, this.clonePosition()));
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
                var i = n[r].split("/");
                if (0 === i.length) throw new Error("Invalid number skeleton");
                for (var o = i[0], a = i.slice(1), s = 0, l = a; s < l.length; s++)
                  if (0 === l[s].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: o,
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
              type: o.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? M(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, i) {
          for (var o, a = !1, s = [], l = new Set, u = i.value, h = i.location;;) {
            if (0 === u.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var f = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR, n.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (f.err) return f;
              h = F(c, this.clonePosition()), u = this.message.slice(c.offset, this.offset())
            }
            if (l.has(u)) return this.error("select" === t ? n.DUPLICATE_SELECT_ARGUMENT_SELECTOR : n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, h);
            "other" === u && (a = !0), this.bumpSpace();
            var m = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, F(this.clonePosition(), this.clonePosition()));
            var p = this.parseMessage(e + 1, t, r);
            if (p.err) return p;
            var g = this.tryParseArgumentClose(m);
            if (g.err) return g;
            s.push([u, {
              value: p.val,
              location: F(m, this.clonePosition())
            }]), l.add(u), this.bumpSpace(), u = (o = this.parseIdentifierIfPossible()).value, h = o.location
          }
          return 0 === s.length ? this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR : n.EXPECT_PLURAL_ARGUMENT_SELECTOR, F(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(n.MISSING_OTHER_CLAUSE, F(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var i = !1, o = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            i = !0, o = 10 * o + (a - 48), this.bump()
          }
          var s = F(n, this.clonePosition());
          return i ? $(o *= r) ? {
            val: o,
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
          var t = J(this.message, e);
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
          if (Z(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && ne(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function re(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function ne(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function ie(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function oe(e) {
        e.forEach((function(e) {
          if (delete e.location, m(e) || p(e))
            for (var t in e.options) delete e.options[t].location, oe(e.options[t].value);
          else h(e) && y(e.style) || (c(e) || f(e)) && b(e.style) ? delete e.style.location : d(e) && oe(e.children)
        }))
      }

      function ae(e, t) {
        void 0 === t && (t = {}), t = (0, s.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new te(e, t).parse();
        if (r.err) {
          var i = SyntaxError(n[r.err.kind]);
          throw i.location = r.err.location, i.originalMessage = r.err.message, i
        }
        return (null == t ? void 0 : t.captureLocation) || oe(r.val), r.val
      }
    },
    65674: (e, t, r) => {
      r.d(t, {
        HM: () => a,
        JF: () => s,
        SP: () => h,
        bN: () => f,
        yU: () => c
      });
      var n = r(23514),
        i = r(62229),
        o = r(43672);

      function a(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      var s = (0, n.__assign)((0, n.__assign)({}, o.JF), {
          textComponent: i.Fragment
        }),
        l = {
          key: 42
        },
        u = function(e) {
          return i.isValidElement(e) ? i.createElement(i.Fragment, l, e) : e
        },
        h = function(e) {
          var t;
          return null !== (t = i.Children.map(e, u)) && void 0 !== t ? t : []
        };

      function c(e) {
        return function(t) {
          return e(i.Children.toArray(t))
        }
      }

      function f(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var r = Object.keys(e),
          n = Object.keys(t),
          i = r.length;
        if (n.length !== i) return !1;
        for (var o = 0; o < i; o++) {
          var a = r[o];
          if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
        }
        return !0
      }
    },
    66920: (e, t, r) => {
      r.d(t, {
        A: () => a
      });
      var n = r(62229),
        i = r(65674),
        o = r(57160);

      function a() {
        var e = n.useContext(o.ob);
        return (0, i.HM)(e), e
      }
    },
    67332: (e, t, r) => {
      var n = r(9862),
        i = {
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
        o = {
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

      function l(e) {
        return n.isMemo(e) ? a : s[e.$$typeof] || i
      }
      s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[n.Memo] = a;
      var u = Object.defineProperty,
        h = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        m = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (p) {
            var i = m(r);
            i && i !== p && e(t, i, n)
          }
          var a = h(r);
          c && (a = a.concat(c(r)));
          for (var s = l(t), g = l(r), d = 0; d < a.length; ++d) {
            var y = a[d];
            if (!(o[y] || n && n[y] || g && g[y] || s && s[y])) {
              var b = f(r, y);
              try {
                u(t, y, b)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    67706: (e, t, r) => {
      r.d(t, {
        $x: () => a,
        Ei: () => l,
        IF: () => o,
        O4: () => n,
        Zo: () => s
      });
      var n, i = r(23514);
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(n || (n = {}));
      var o = function(e) {
          function t(t, r, n) {
            var i = e.call(this, t) || this;
            return i.code = r, i.originalMessage = n, i
          }
          return (0, i.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        a = function(e) {
          function t(t, r, i, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), n.INVALID_VALUE, o) || this
          }
          return (0, i.__extends)(t, e), t
        }(o),
        s = function(e) {
          function t(t, r, i) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), n.INVALID_VALUE, i) || this
          }
          return (0, i.__extends)(t, e), t
        }(o),
        l = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), n.MISSING_VALUE, r) || this
          }
          return (0, i.__extends)(t, e), t
        }(o)
    },
    67917: (e, t, r) => {
      r.d(t, {
        RK: () => a,
        TT: () => n,
        hN: () => s
      });
      var n, i = r(62244),
        o = r(67706);

      function a(e) {
        return "function" == typeof e
      }

      function s(e, t, r, l, u, h, c) {
        if (1 === e.length && (0, i.eW)(e[0])) return [{
          type: n.literal,
          value: e[0].value
        }];
        for (var f = [], m = 0, p = e; m < p.length; m++) {
          var g = p[m];
          if ((0, i.eW)(g)) f.push({
            type: n.literal,
            value: g.value
          });
          else if ((0, i.jA)(g)) "number" == typeof h && f.push({
            type: n.literal,
            value: r.getNumberFormat(t).format(h)
          });
          else {
            var d = g.value;
            if (!u || !(d in u)) throw new o.Ei(d, c);
            var y = u[d];
            if ((0, i.Im)(g)) y && "string" != typeof y && "number" != typeof y || (y = "string" == typeof y || "number" == typeof y ? String(y) : ""), f.push({
              type: "string" == typeof y ? n.literal : n.object,
              value: y
            });
            else if ((0, i.tv)(g)) {
              var b = "string" == typeof g.style ? l.date[g.style] : (0, i.Tu)(g.style) ? g.style.parsedOptions : void 0;
              f.push({
                type: n.literal,
                value: r.getDateTimeFormat(t, b).format(y)
              })
            } else if ((0, i.Qh)(g)) b = "string" == typeof g.style ? l.time[g.style] : (0, i.Tu)(g.style) ? g.style.parsedOptions : l.time.medium, f.push({
              type: n.literal,
              value: r.getDateTimeFormat(t, b).format(y)
            });
            else if ((0, i.oF)(g))(b = "string" == typeof g.style ? l.number[g.style] : (0, i.N1)(g.style) ? g.style.parsedOptions : void 0) && b.scale && (y *= b.scale || 1), f.push({
              type: n.literal,
              value: r.getNumberFormat(t, b).format(y)
            });
            else {
              if ((0, i.xm)(g)) {
                var E = g.children,
                  _ = g.value,
                  v = u[_];
                if (!a(v)) throw new o.Zo(_, "function", c);
                var T = v(s(E, t, r, l, u, h).map((function(e) {
                  return e.value
                })));
                Array.isArray(T) || (T = [T]), f.push.apply(f, T.map((function(e) {
                  return {
                    type: "string" == typeof e ? n.literal : n.object,
                    value: e
                  }
                })))
              }
              if ((0, i.Jp)(g)) {
                if (!(H = g.options[y] || g.options.other)) throw new o.$x(g.value, y, Object.keys(g.options), c);
                f.push.apply(f, s(H.value, t, r, l, u))
              } else if ((0, i.N6)(g)) {
                var H;
                if (!(H = g.options["=".concat(y)])) {
                  if (!Intl.PluralRules) throw new o.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', o.O4.MISSING_INTL_API, c);
                  var A = r.getPluralRules(t, {
                    type: g.pluralType
                  }).select(y - (g.offset || 0));
                  H = g.options[A] || g.options.other
                }
                if (!H) throw new o.$x(g.value, y, Object.keys(g.options), c);
                f.push.apply(f, s(H.value, t, r, l, u, y - (g.offset || 0)))
              }
            }
          }
        }
        return (S = f).length < 2 ? S : S.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === n.literal && t.type === n.literal ? r.value += t.value : e.push(t), e
        }), []);
        var S
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(n || (n = {}))
    },
    93815: (e, t, r) => {
      r.d(t, {
        Ho: () => h,
        OC: () => a,
        hr: () => l,
        pg: () => u,
        sb: () => c,
        uo: () => s
      });
      var n, i = r(23514);
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(n || (n = {}));
      var o = function(e) {
          function t(r, n, i) {
            var o = this,
              a = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
            return (o = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, t), o
          }
          return (0, i.__extends)(t, e), t
        }(Error),
        a = function(e) {
          function t(t, r) {
            return e.call(this, n.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, i.__extends)(t, e), t
        }(o),
        s = function(e) {
          function t(t, r) {
            return e.call(this, n.INVALID_CONFIG, t, r) || this
          }
          return (0, i.__extends)(t, e), t
        }(o),
        l = function(e) {
          function t(t, r) {
            return e.call(this, n.MISSING_DATA, t, r) || this
          }
          return (0, i.__extends)(t, e), t
        }(o),
        u = function(e) {
          function t(t, r, i) {
            var o = e.call(this, n.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), i) || this;
            return o.locale = r, o
          }
          return (0, i.__extends)(t, e), t
        }(o),
        h = function(e) {
          function t(t, r, n, i) {
            var o = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, i) || this;
            return o.descriptor = n, o.locale = r, o
          }
          return (0, i.__extends)(t, e), t
        }(u),
        c = function(e) {
          function t(t, r) {
            var i = e.call(this, n.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return i.descriptor = t, i
          }
          return (0, i.__extends)(t, e), t
        }(o)
    }
  }
]);