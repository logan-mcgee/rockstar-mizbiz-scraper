/*! For license information please see 91505e1d1a4b54ba58b5.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [557], {
    6557: (t, e, r) => {
      "use strict";
      r.d(e, {
        $6: () => l,
        OV: () => a,
        Qe: () => h,
        X9: () => c,
        gb: () => u,
        wI: () => s
      });
      var n, i = r(625);
      ! function(t) {
        t.FORMAT_ERROR = "FORMAT_ERROR", t.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", t.INVALID_CONFIG = "INVALID_CONFIG", t.MISSING_DATA = "MISSING_DATA", t.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(n || (n = {}));
      var o = function(t) {
          function e(r, n, i) {
            var o = this,
              s = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
            return (o = t.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(s ? "\n".concat(s.message, "\n").concat(s.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, e), o
          }
          return (0, i.ZT)(e, t), e
        }(Error),
        s = function(t) {
          function e(e, r) {
            return t.call(this, n.UNSUPPORTED_FORMATTER, e, r) || this
          }
          return (0, i.ZT)(e, t), e
        }(o),
        a = function(t) {
          function e(e, r) {
            return t.call(this, n.INVALID_CONFIG, e, r) || this
          }
          return (0, i.ZT)(e, t), e
        }(o),
        u = function(t) {
          function e(e, r) {
            return t.call(this, n.MISSING_DATA, e, r) || this
          }
          return (0, i.ZT)(e, t), e
        }(o),
        h = function(t) {
          function e(e, r, i) {
            var o = t.call(this, n.FORMAT_ERROR, "".concat(e, "\nLocale: ").concat(r, "\n"), i) || this;
            return o.locale = r, o
          }
          return (0, i.ZT)(e, t), e
        }(o),
        c = function(t) {
          function e(e, r, n, i) {
            var o = t.call(this, "".concat(e, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, i) || this;
            return o.descriptor = n, o.locale = r, o
          }
          return (0, i.ZT)(e, t), e
        }(h),
        l = function(t) {
          function e(e, r) {
            var i = t.call(this, n.MISSING_TRANSLATION, 'Missing message: "'.concat(e.id, '" for locale "').concat(r, '", using ').concat(e.defaultMessage ? "default message (".concat("string" == typeof e.defaultMessage ? e.defaultMessage : e.defaultMessage.map((function(t) {
              var e;
              return null !== (e = t.value) && void 0 !== e ? e : JSON.stringify(t)
            })).join(), ")") : "id", " as fallback.")) || this;
            return i.descriptor = e, i
          }
          return (0, i.ZT)(e, t), e
        }(o)
    },
    7888: (t, e, r) => {
      "use strict";
      r.d(e, {
        L6: () => a,
        Sn: () => h,
        TB: () => f,
        Z0: () => u,
        ax: () => l
      });
      var n = r(625),
        i = r(6952),
        o = r(2292),
        s = r(6557);

      function a(t, e, r) {
        return void 0 === r && (r = {}), e.reduce((function(e, n) {
          return n in t ? e[n] = t[n] : n in r && (e[n] = r[n]), e
        }), {})
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

      function c(t) {
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

      function l(t) {
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
          s = Intl.DisplayNames,
          a = (0, o.H)((function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.DateTimeFormat).bind.apply(t, (0, n.ev)([void 0], e, !1)))
          }), {
            cache: c(t.dateTime),
            strategy: o.A.variadic
          }),
          u = (0, o.H)((function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.NumberFormat).bind.apply(t, (0, n.ev)([void 0], e, !1)))
          }), {
            cache: c(t.number),
            strategy: o.A.variadic
          }),
          h = (0, o.H)((function() {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new((t = Intl.PluralRules).bind.apply(t, (0, n.ev)([void 0], e, !1)))
          }), {
            cache: c(t.pluralRules),
            strategy: o.A.variadic
          });
        return {
          getDateTimeFormat: a,
          getNumberFormat: u,
          getMessageFormat: (0, o.H)((function(t, e, r, o) {
            return new i.C(t, e, r, (0, n.pi)({
              formatters: {
                getNumberFormat: u,
                getDateTimeFormat: a,
                getPluralRules: h
              }
            }, o || {}))
          }), {
            cache: c(t.message),
            strategy: o.A.variadic
          }),
          getRelativeTimeFormat: (0, o.H)((function() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new(e.bind.apply(e, (0, n.ev)([void 0], t, !1)))
          }), {
            cache: c(t.relativeTime),
            strategy: o.A.variadic
          }),
          getPluralRules: h,
          getListFormat: (0, o.H)((function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new(r.bind.apply(r, (0, n.ev)([void 0], t, !1)))
          }), {
            cache: c(t.list),
            strategy: o.A.variadic
          }),
          getDisplayNames: (0, o.H)((function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new(s.bind.apply(s, (0, n.ev)([void 0], t, !1)))
          }), {
            cache: c(t.displayNames),
            strategy: o.A.variadic
          })
        }
      }

      function f(t, e, r, n) {
        var i, o = t && t[e];
        if (o && (i = o[r]), i) return i;
        n(new s.wI("No ".concat(e, " format named: ").concat(r)))
      }
    },
    5217: (t, e, r) => {
      "use strict";
      r.d(e, {
        vU: () => l
      });
      var n, i, o = r(625),
        s = r(4932),
        a = r(1112);
      ! function(t) {
        t.formatDate = "FormattedDate", t.formatTime = "FormattedTime", t.formatNumber = "FormattedNumber", t.formatList = "FormattedList", t.formatDisplayName = "FormattedDisplayName"
      }(n || (n = {})),
      function(t) {
        t.formatDate = "FormattedDateParts", t.formatTime = "FormattedTimeParts", t.formatNumber = "FormattedNumberParts", t.formatList = "FormattedListParts"
      }(i || (i = {}));
      var u = function(t) {
        var e = (0, a.Z)(),
          r = t.value,
          n = t.children,
          i = (0, o._T)(t, ["value", "children"]);
        return n(e.formatNumberToParts(r, i))
      };

      function h(t) {
        var e = function(e) {
          var r = (0, a.Z)(),
            n = e.value,
            i = e.children,
            s = (0, o._T)(e, ["value", "children"]),
            u = "string" == typeof n ? new Date(n || 0) : n;
          return i("formatDate" === t ? r.formatDateToParts(u, s) : r.formatTimeToParts(u, s))
        };
        return e.displayName = i[t], e
      }

      function c(t) {
        var e = function(e) {
          var r = (0, a.Z)(),
            n = e.value,
            i = e.children,
            u = (0, o._T)(e, ["value", "children"]),
            h = r[t](n, u);
          if ("function" == typeof i) return i(h);
          var c = r.textComponent || s.Fragment;
          return s.createElement(c, null, h)
        };
        return e.displayName = n[t], e
      }

      function l(t) {
        return t
      }
      u.displayName = "FormattedNumberParts", u.displayName = "FormattedNumberParts", c("formatDate"), c("formatTime"), c("formatNumber"), c("formatList"), c("formatDisplayName"), h("formatDate"), h("formatTime")
    },
    4625: (t, e, r) => {
      "use strict";
      r.d(e, {
        _y: () => s,
        zt: () => o
      });
      var n = r(4932);
      r(4355);
      var i = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? n.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = n.createContext(null)),
        o = (i.Consumer, i.Provider),
        s = i
    },
    4484: (t, e, r) => {
      "use strict";
      r.d(e, {
        Z: () => X
      });
      var n = r(625),
        i = r(4932),
        o = r(4625),
        s = r(5685),
        a = r(2237),
        u = r(6952),
        h = r(6557),
        c = r(6084);

      function l(t, e) {
        return Object.keys(t).reduce((function(r, i) {
          return r[i] = (0, n.pi)({
            timeZone: e
          }, t[i]), r
        }), {})
      }

      function f(t, e) {
        return Object.keys((0, n.pi)((0, n.pi)({}, t), e)).reduce((function(r, i) {
          return r[i] = (0, n.pi)((0, n.pi)({}, t[i] || {}), e[i] || {}), r
        }), {})
      }

      function p(t, e) {
        if (!e) return t;
        var r = u.C.formats;
        return (0, n.pi)((0, n.pi)((0, n.pi)({}, r), t), {
          date: f(l(r.date, e), l(t.date || {}, e)),
          time: f(l(r.time, e), l(t.time || {}, e))
        })
      }
      var m = function(t, e, r, i, o) {
          var s = t.locale,
            u = t.formats,
            l = t.messages,
            f = t.defaultLocale,
            m = t.defaultFormats,
            d = t.fallbackOnEmptyString,
            g = t.onError,
            v = t.timeZone,
            y = t.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var E = r.id,
            T = r.defaultMessage;
          (0, a.kG)(!!E, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var b = String(E),
            _ = l && Object.prototype.hasOwnProperty.call(l, b) && l[b];
          if (Array.isArray(_) && 1 === _.length && _[0].type === c.wD.literal) return _[0].value;
          if (!i && _ && "string" == typeof _ && !y) return _.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (i = (0, n.pi)((0, n.pi)({}, y), i || {}), u = p(u, v), m = p(m, v), !_) {
            if (!1 === d && "" === _) return _;
            if ((!T || s && s.toLowerCase() !== f.toLowerCase()) && g(new h.$6(r, s)), T) try {
              return e.getMessageFormat(T, f, m, o).format(i)
            } catch (t) {
              return g(new h.X9('Error formatting default message for: "'.concat(b, '", rendering default message verbatim'), s, r, t)), "string" == typeof T ? T : b
            }
            return b
          }
          try {
            return e.getMessageFormat(_, s, u, (0, n.pi)({
              formatters: e
            }, o || {})).format(i)
          } catch (t) {
            g(new h.X9('Error formatting message: "'.concat(b, '", using ').concat(T ? "default message" : "id", " as fallback."), s, r, t))
          }
          if (T) try {
            return e.getMessageFormat(T, f, m, o).format(i)
          } catch (t) {
            g(new h.X9('Error formatting the default message for: "'.concat(b, '", rendering message verbatim'), s, r, t))
          }
          return "string" == typeof _ ? _ : "string" == typeof T ? T : b
        },
        d = r(7888),
        g = ["style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem"];

      function v(t, e, r) {
        var n = t.locale,
          i = t.formats,
          o = t.onError;
        void 0 === r && (r = {});
        var s = r.format,
          a = s && (0, d.TB)(i, "number", s, o) || {};
        return e(n, (0, d.L6)(r, g, a))
      }

      function y(t, e, r, n) {
        void 0 === n && (n = {});
        try {
          return v(t, e, n).format(r)
        } catch (e) {
          t.onError(new h.Qe("Error formatting number.", t.locale, e))
        }
        return String(r)
      }

      function E(t, e, r, n) {
        void 0 === n && (n = {});
        try {
          return v(t, e, n).formatToParts(r)
        } catch (e) {
          t.onError(new h.Qe("Error formatting number.", t.locale, e))
        }
        return []
      }
      var T = r(5282),
        b = ["numeric", "style"];

      function _(t, e, r, n, i) {
        void 0 === i && (i = {}), n || (n = "second"), Intl.RelativeTimeFormat || t.onError(new T.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', T.jK.MISSING_INTL_API));
        try {
          return function(t, e, r) {
            var n = t.locale,
              i = t.formats,
              o = t.onError;
            void 0 === r && (r = {});
            var s = r.format,
              a = !!s && (0, d.TB)(i, "relative", s, o) || {};
            return e(n, (0, d.L6)(r, b, a))
          }(t, e, i).format(r, n)
        } catch (e) {
          t.onError(new h.Qe("Error formatting relative time.", t.locale, e))
        }
        return String(r)
      }
      var A = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function S(t, e, r, i) {
        var o = t.locale,
          s = t.formats,
          a = t.onError,
          u = t.timeZone;
        void 0 === i && (i = {});
        var h = i.format,
          c = (0, n.pi)((0, n.pi)({}, u && {
            timeZone: u
          }), h && (0, d.TB)(s, e, h, a)),
          l = (0, d.L6)(i, A, c);
        return "time" !== e || l.hour || l.minute || l.second || l.timeStyle || l.dateStyle || (l = (0, n.pi)((0, n.pi)({}, l), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, l)
      }

      function I(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          a = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return S(t, "date", e, s).format(a)
        } catch (e) {
          t.onError(new h.Qe("Error formatting date.", t.locale, e))
        }
        return String(a)
      }

      function H(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          a = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return S(t, "time", e, s).format(a)
        } catch (e) {
          t.onError(new h.Qe("Error formatting time.", t.locale, e))
        }
        return String(a)
      }

      function P(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          s = r[2],
          a = void 0 === s ? {} : s,
          u = t.timeZone,
          c = t.locale,
          l = t.onError,
          f = (0, d.L6)(a, A, u ? {
            timeZone: u
          } : {});
        try {
          return e(c, f).formatRange(i, o)
        } catch (e) {
          l(new h.Qe("Error formatting date time range.", t.locale, e))
        }
        return String(i)
      }

      function N(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          a = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return S(t, "date", e, s).formatToParts(a)
        } catch (e) {
          t.onError(new h.Qe("Error formatting date.", t.locale, e))
        }
        return []
      }

      function B(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          s = void 0 === o ? {} : o,
          a = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return S(t, "time", e, s).formatToParts(a)
        } catch (e) {
          t.onError(new h.Qe("Error formatting time.", t.locale, e))
        }
        return []
      }
      var L = ["type"];

      function R(t, e, r, n) {
        var i = t.locale,
          o = t.onError;
        void 0 === n && (n = {}), Intl.PluralRules || o(new T.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', T.jK.MISSING_INTL_API));
        var s = (0, d.L6)(n, L);
        try {
          return e(i, s).select(r)
        } catch (t) {
          o(new h.Qe("Error formatting plural.", i, t))
        }
        return "other"
      }
      var C = ["type", "style"],
        O = Date.now();

      function w(t, e, r, n) {
        void 0 === n && (n = {});
        var i = D(t, e, r, n).reduce((function(t, e) {
          var r = e.value;
          return "string" != typeof r ? t.push(r) : "string" == typeof t[t.length - 1] ? t[t.length - 1] += r : t.push(r), t
        }), []);
        return 1 === i.length ? i[0] : 0 === i.length ? "" : i
      }

      function D(t, e, r, i) {
        var o = t.locale,
          s = t.onError;
        void 0 === i && (i = {}), Intl.ListFormat || s(new T.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', T.jK.MISSING_INTL_API));
        var a = (0, d.L6)(i, C);
        try {
          var u = {},
            c = r.map((function(t, e) {
              if ("object" == typeof t) {
                var r = function(t) {
                  return "".concat(O, "_").concat(t, "_").concat(O)
                }(e);
                return u[r] = t, r
              }
              return String(t)
            }));
          return e(o, a).formatToParts(c).map((function(t) {
            return "literal" === t.type ? t : (0, n.pi)((0, n.pi)({}, t), {
              value: u[t.value] || t.value
            })
          }))
        } catch (t) {
          s(new h.Qe("Error formatting list.", o, t))
        }
        return r
      }
      var M = ["style", "type", "fallback", "languageDisplay"];

      function F(t, e, r, n) {
        var i = t.locale,
          o = t.onError;
        Intl.DisplayNames || o(new T.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', T.jK.MISSING_INTL_API));
        var s = (0, d.L6)(n, M);
        try {
          return e(i, s).of(r)
        } catch (t) {
          o(new h.Qe("Error formatting display name.", i, t))
        }
      }
      var U = r(2834);

      function G(t) {
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

      function k(t) {
        return t ? Object.keys(t).reduce((function(e, r) {
          var n = t[r];
          return e[r] = (0, U.Gt)(n) ? (0, s.dt)(n) : n, e
        }), {}) : t
      }
      var x = function(t, e, r, o) {
          for (var s = [], a = 4; a < arguments.length; a++) s[a - 4] = arguments[a];
          var u = k(o),
            h = m.apply(void 0, (0, n.ev)([t, e, r, u], s, !1));
          return Array.isArray(h) ? i.Children.toArray(h) : h
        },
        j = function(t, e) {
          var r = t.defaultRichTextElements,
            i = (0, n._T)(t, ["defaultRichTextElements"]),
            o = k(r),
            a = function(t, e) {
              var r = (0, d.ax)(e),
                i = (0, n.pi)((0, n.pi)({}, d.Z0), t),
                o = i.locale,
                s = i.defaultLocale,
                a = i.onError;
              return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new h.gb('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new h.gb('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new h.OV('"locale" was not configured, using "'.concat(s, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), i.locale = i.defaultLocale || "en"),
                function(t) {
                  var e;
                  t.onWarn && t.defaultRichTextElements && "string" == typeof((e = t.messages || {}) ? e[Object.keys(e)[0]] : void 0) && t.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
                }(i), (0, n.pi)((0, n.pi)({}, i), {
                  formatters: r,
                  formatNumber: y.bind(null, i, r.getNumberFormat),
                  formatNumberToParts: E.bind(null, i, r.getNumberFormat),
                  formatRelativeTime: _.bind(null, i, r.getRelativeTimeFormat),
                  formatDate: I.bind(null, i, r.getDateTimeFormat),
                  formatDateToParts: N.bind(null, i, r.getDateTimeFormat),
                  formatTime: H.bind(null, i, r.getDateTimeFormat),
                  formatDateTimeRange: P.bind(null, i, r.getDateTimeFormat),
                  formatTimeToParts: B.bind(null, i, r.getDateTimeFormat),
                  formatPlural: R.bind(null, i, r.getPluralRules),
                  formatMessage: m.bind(null, i, r),
                  $t: m.bind(null, i, r),
                  formatList: w.bind(null, i, r.getListFormat),
                  formatListToParts: D.bind(null, i, r.getListFormat),
                  formatDisplayName: F.bind(null, i, r.getDisplayNames)
                })
            }((0, n.pi)((0, n.pi)((0, n.pi)({}, s.Z0), i), {
              defaultRichTextElements: o
            }), e),
            u = {
              locale: a.locale,
              timeZone: a.timeZone,
              fallbackOnEmptyString: a.fallbackOnEmptyString,
              formats: a.formats,
              defaultLocale: a.defaultLocale,
              defaultFormats: a.defaultFormats,
              messages: a.messages,
              onError: a.onError,
              defaultRichTextElements: o
            };
          return (0, n.pi)((0, n.pi)({}, a), {
            formatMessage: x.bind(null, u, a.formatters),
            $t: x.bind(null, u, a.formatters)
          })
        };
      const X = function(t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.cache = (0, d.Sn)(), e.state = {
            cache: e.cache,
            intl: j(G(e.props), e.cache),
            prevConfig: G(e.props)
          }, e
        }
        return (0, n.ZT)(e, t), e.getDerivedStateFromProps = function(t, e) {
          var r = e.prevConfig,
            n = e.cache,
            i = G(t);
          return (0, s.wU)(r, i) ? null : {
            intl: j(i, n),
            prevConfig: i
          }
        }, e.prototype.render = function() {
          return (0, s.lq)(this.state.intl), i.createElement(o.zt, {
            value: this.state.intl
          }, this.props.children)
        }, e.displayName = "IntlProvider", e.defaultProps = s.Z0, e
      }(i.PureComponent)
    },
    1112: (t, e, r) => {
      "use strict";
      r.d(e, {
        Z: () => s
      });
      var n = r(4932),
        i = r(4625),
        o = r(5685);

      function s() {
        var t = n.useContext(i._y);
        return (0, o.lq)(t), t
      }
    },
    5685: (t, e, r) => {
      "use strict";
      r.d(e, {
        Z0: () => u,
        dt: () => h,
        lq: () => a,
        wU: () => c
      });
      var n = r(625),
        i = r(4932),
        o = r(2237),
        s = r(7888);

      function a(t) {
        (0, o.kG)(t, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }
      var u = (0, n.pi)((0, n.pi)({}, s.Z0), {
        textComponent: i.Fragment
      });

      function h(t) {
        return function(e) {
          return t(i.Children.toArray(e))
        }
      }

      function c(t, e) {
        if (t === e) return !0;
        if (!t || !e) return !1;
        var r = Object.keys(t),
          n = Object.keys(e),
          i = r.length;
        if (n.length !== i) return !1;
        for (var o = 0; o < i; o++) {
          var s = r[o];
          if (t[s] !== e[s] || !Object.prototype.hasOwnProperty.call(e, s)) return !1
        }
        return !0
      }
    },
    2237: (t, e, r) => {
      "use strict";

      function n(t, e, r) {
        if (void 0 === r && (r = Error), !t) throw new r(e)
      }
      r.d(e, {
        kG: () => n
      })
    },
    2292: (t, e, r) => {
      "use strict";

      function n(t, e) {
        var r = e && e.cache ? e.cache : c,
          n = e && e.serializer ? e.serializer : u;
        return (e && e.strategy ? e.strategy : a)(t, {
          cache: r,
          serializer: n
        })
      }

      function i(t, e, r, n) {
        var i, o = null == (i = n) || "number" == typeof i || "boolean" == typeof i ? n : r(n),
          s = e.get(o);
        return void 0 === s && (s = t.call(this, n), e.set(o, s)), s
      }

      function o(t, e, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          i = r(n),
          o = e.get(i);
        return void 0 === o && (o = t.apply(this, n), e.set(i, o)), o
      }

      function s(t, e, r, n, i) {
        return r.bind(e, t, n, i)
      }

      function a(t, e) {
        return s(t, this, 1 === t.length ? i : o, e.cache.create(), e.serializer)
      }
      r.d(e, {
        A: () => l,
        H: () => n
      });
      var u = function() {
        return JSON.stringify(arguments)
      };

      function h() {
        this.cache = Object.create(null)
      }
      h.prototype.get = function(t) {
        return this.cache[t]
      }, h.prototype.set = function(t, e) {
        this.cache[t] = e
      };
      var c = {
          create: function() {
            return new h
          }
        },
        l = {
          variadic: function(t, e) {
            return s(t, this, o, e.cache.create(), e.serializer)
          },
          monadic: function(t, e) {
            return s(t, this, i, e.cache.create(), e.serializer)
          }
        }
    },
    6084: (t, e, r) => {
      "use strict";
      r.d(e, {
        wD: () => i,
        VG: () => u,
        rp: () => c,
        Ii: () => v,
        O4: () => a,
        uf: () => h,
        Wh: () => g,
        Jo: () => p,
        yx: () => m,
        Wi: () => f,
        HI: () => d,
        pe: () => l,
        Qc: () => ot
      });
      var n, i, o, s = r(625);

      function a(t) {
        return t.type === i.literal
      }

      function u(t) {
        return t.type === i.argument
      }

      function h(t) {
        return t.type === i.number
      }

      function c(t) {
        return t.type === i.date
      }

      function l(t) {
        return t.type === i.time
      }

      function f(t) {
        return t.type === i.select
      }

      function p(t) {
        return t.type === i.plural
      }

      function m(t) {
        return t.type === i.pound
      }

      function d(t) {
        return t.type === i.tag
      }

      function g(t) {
        return !(!t || "object" != typeof t || t.type !== o.number)
      }

      function v(t) {
        return !(!t || "object" != typeof t || t.type !== o.dateTime)
      }! function(t) {
        t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(n || (n = {})),
      function(t) {
        t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag"
      }(i || (i = {})),
      function(t) {
        t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime"
      }(o || (o = {}));
      var y = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        E = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function T(t) {
        var e = {};
        return t.replace(E, (function(t) {
          var r = t.length;
          switch (t[0]) {
            case "G":
              e.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              e.year = 2 === r ? "2-digit" : "numeric";
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
              e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              e.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              e.weekday = 4 === r ? "short" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              e.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              e.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              e.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              e.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              e.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              e.timeZoneName = r < 4 ? "short" : "long";
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
        })), e
      }
      var b = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        _ = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        A = /^(@+)?(\+|#+)?[rs]?$/g,
        S = /(\*)(0+)|(#+)(0+)|(0+)/g,
        I = /^(0+)$/;

      function H(t) {
        var e = {};
        return "r" === t[t.length - 1] ? e.roundingPriority = "morePrecision" : "s" === t[t.length - 1] && (e.roundingPriority = "lessPrecision"), t.replace(A, (function(t, r, n) {
          return "string" != typeof n ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : "+" === n ? e.minimumSignificantDigits = r.length : "#" === r[0] ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        })), e
      }

      function P(t) {
        switch (t) {
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

      function N(t) {
        var e;
        if ("E" === t[0] && "E" === t[1] ? (e = {
            notation: "engineering"
          }, t = t.slice(2)) : "E" === t[0] && (e = {
            notation: "scientific"
          }, t = t.slice(1)), e) {
          var r = t.slice(0, 2);
          if ("+!" === r ? (e.signDisplay = "always", t = t.slice(2)) : "+?" === r && (e.signDisplay = "exceptZero", t = t.slice(2)), !I.test(t)) throw new Error("Malformed concise eng/scientific notation");
          e.minimumIntegerDigits = t.length
        }
        return e
      }

      function B(t) {
        return P(t) || {}
      }

      function L(t) {
        for (var e = {}, r = 0, n = t; r < n.length; r++) {
          var i = n[r];
          switch (i.stem) {
            case "percent":
            case "%":
              e.style = "percent";
              continue;
            case "%x100":
              e.style = "percent", e.scale = 100;
              continue;
            case "currency":
              e.style = "currency", e.currency = i.options[0];
              continue;
            case "group-off":
            case ",_":
              e.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              e.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              e.style = "unit", e.unit = i.options[0].replace(/^(.*?)-/, "");
              continue;
            case "compact-short":
            case "K":
              e.notation = "compact", e.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              e.notation = "compact", e.compactDisplay = "long";
              continue;
            case "scientific":
              e = (0, s.pi)((0, s.pi)((0, s.pi)({}, e), {
                notation: "scientific"
              }), i.options.reduce((function(t, e) {
                return (0, s.pi)((0, s.pi)({}, t), B(e))
              }), {}));
              continue;
            case "engineering":
              e = (0, s.pi)((0, s.pi)((0, s.pi)({}, e), {
                notation: "engineering"
              }), i.options.reduce((function(t, e) {
                return (0, s.pi)((0, s.pi)({}, t), B(e))
              }), {}));
              continue;
            case "notation-simple":
              e.notation = "standard";
              continue;
            case "unit-width-narrow":
              e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              e.currencyDisplay = "code", e.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              e.currencyDisplay = "name", e.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              e.currencyDisplay = "symbol";
              continue;
            case "scale":
              e.scale = parseFloat(i.options[0]);
              continue;
            case "integer-width":
              if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              i.options[0].replace(S, (function(t, r, n, i, o, s) {
                if (r) e.minimumIntegerDigits = n.length;
                else {
                  if (i && o) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (I.test(i.stem)) e.minimumIntegerDigits = i.stem.length;
          else if (_.test(i.stem)) {
            if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            i.stem.replace(_, (function(t, r, n, i, o, s) {
              return "*" === n ? e.minimumFractionDigits = r.length : i && "#" === i[0] ? e.maximumFractionDigits = i.length : o && s ? (e.minimumFractionDigits = o.length, e.maximumFractionDigits = o.length + s.length) : (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length), ""
            }));
            var o = i.options[0];
            "w" === o ? e = (0, s.pi)((0, s.pi)({}, e), {
              trailingZeroDisplay: "stripIfInteger"
            }) : o && (e = (0, s.pi)((0, s.pi)({}, e), H(o)))
          } else if (A.test(i.stem)) e = (0, s.pi)((0, s.pi)({}, e), H(i.stem));
          else {
            var a = P(i.stem);
            a && (e = (0, s.pi)((0, s.pi)({}, e), a));
            var u = N(i.stem);
            u && (e = (0, s.pi)((0, s.pi)({}, e), u))
          }
        }
        return e
      }
      var R, C = {
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
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
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
        JP: ["H", "h", "K"],
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
        TL: ["H", "hB", "hb", "h"],
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
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
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

      function O(t) {
        var e = t.hourCycle;
        if (void 0 === e && t.hourCycles && t.hourCycles.length && (e = t.hourCycles[0]), e) switch (e) {
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
        var r, n = t.language;
        return "root" !== n && (r = t.maximize().region), (C[r || ""] || C[n || ""] || C["".concat(n, "-001")] || C["001"])[0]
      }
      var w = new RegExp("^".concat(y.source, "*")),
        D = new RegExp("".concat(y.source, "*$"));

      function M(t, e) {
        return {
          start: t,
          end: e
        }
      }
      var F = !!String.prototype.startsWith,
        U = !!String.fromCodePoint,
        G = !!Object.fromEntries,
        k = !!String.prototype.codePointAt,
        x = !!String.prototype.trimStart,
        j = !!String.prototype.trimEnd,
        X = Number.isSafeInteger ? Number.isSafeInteger : function(t) {
          return "number" == typeof t && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991
        },
        V = !0;
      try {
        V = "a" === (null === (R = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === R ? void 0 : R[0])
      } catch (t) {
        V = !1
      }
      var Z, Y = F ? function(t, e, r) {
          return t.startsWith(e, r)
        } : function(t, e, r) {
          return t.slice(r, r + e.length) === e
        },
        z = U ? String.fromCodePoint : function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          for (var r, n = "", i = t.length, o = 0; i > o;) {
            if ((r = t[o++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        K = G ? Object.fromEntries : function(t) {
          for (var e = {}, r = 0, n = t; r < n.length; r++) {
            var i = n[r],
              o = i[0],
              s = i[1];
            e[o] = s
          }
          return e
        },
        W = k ? function(t, e) {
          return t.codePointAt(e)
        } : function(t, e) {
          var r = t.length;
          if (!(e < 0 || e >= r)) {
            var n, i = t.charCodeAt(e);
            return i < 55296 || i > 56319 || e + 1 === r || (n = t.charCodeAt(e + 1)) < 56320 || n > 57343 ? i : n - 56320 + (i - 55296 << 10) + 65536
          }
        },
        $ = x ? function(t) {
          return t.trimStart()
        } : function(t) {
          return t.replace(w, "")
        },
        q = j ? function(t) {
          return t.trimEnd()
        } : function(t) {
          return t.replace(D, "")
        };

      function Q(t, e) {
        return new RegExp(t, e)
      }
      if (V) {
        var J = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Z = function(t, e) {
          var r;
          return J.lastIndex = e, null !== (r = J.exec(t)[1]) && void 0 !== r ? r : ""
        }
      } else Z = function(t, e) {
        for (var r = [];;) {
          var n = W(t, e);
          if (void 0 === n || rt(n) || nt(n)) break;
          r.push(n), e += n >= 65536 ? 2 : 1
        }
        return z.apply(void 0, r)
      };
      var tt = function() {
        function t(t, e) {
          void 0 === e && (e = {}), this.message = t, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!e.ignoreTag, this.locale = e.locale, this.requiresOtherClause = !!e.requiresOtherClause, this.shouldParseSkeletons = !!e.shouldParseSkeletons
        }
        return t.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, t.prototype.parseMessage = function(t, e, r) {
          for (var o = []; !this.isEOF();) {
            var s = this.char();
            if (123 === s) {
              if ((a = this.parseArgument(t, r)).err) return a;
              o.push(a.val)
            } else {
              if (125 === s && t > 0) break;
              if (35 !== s || "plural" !== e && "selectordinal" !== e) {
                if (60 === s && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(n.UNMATCHED_CLOSING_TAG, M(this.clonePosition(), this.clonePosition()))
                }
                if (60 === s && !this.ignoreTag && et(this.peek() || 0)) {
                  if ((a = this.parseTag(t, e)).err) return a;
                  o.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(t, e)).err) return a;
                  o.push(a.val)
                }
              } else {
                var u = this.clonePosition();
                this.bump(), o.push({
                  type: i.pound,
                  location: M(u, this.clonePosition())
                })
              }
            }
          }
          return {
            val: o,
            err: null
          }
        }, t.prototype.parseTag = function(t, e) {
          var r = this.clonePosition();
          this.bump();
          var o = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: i.literal,
              value: "<".concat(o, "/>"),
              location: M(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var s = this.parseMessage(t + 1, e, !0);
            if (s.err) return s;
            var a = s.val,
              u = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !et(this.char())) return this.error(n.INVALID_TAG, M(u, this.clonePosition()));
              var h = this.clonePosition();
              return o !== this.parseTagName() ? this.error(n.UNMATCHED_CLOSING_TAG, M(h, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: i.tag,
                  value: o,
                  children: a,
                  location: M(r, this.clonePosition())
                },
                err: null
              } : this.error(n.INVALID_TAG, M(u, this.clonePosition())))
            }
            return this.error(n.UNCLOSED_TAG, M(r, this.clonePosition()))
          }
          return this.error(n.INVALID_TAG, M(r, this.clonePosition()))
        }, t.prototype.parseTagName = function() {
          var t, e = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (t = this.char()) || 46 === t || t >= 48 && t <= 57 || 95 === t || t >= 97 && t <= 122 || t >= 65 && t <= 90 || 183 == t || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039);) this.bump();
          return this.message.slice(e, this.offset())
        }, t.prototype.parseLiteral = function(t, e) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(e);
            if (o) n += o;
            else {
              var s = this.tryParseUnquoted(t, e);
              if (s) n += s;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                n += a
              }
            }
          }
          var u = M(r, this.clonePosition());
          return {
            val: {
              type: i.literal,
              value: n,
              location: u
            },
            err: null
          }
        }, t.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (et(t = this.peek() || 0) || 47 === t) ? null : (this.bump(), "<");
          var t
        }, t.prototype.tryParseQuote = function(t) {
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
              if ("plural" === t || "selectordinal" === t) break;
              return null;
            default:
              return null
          }
          this.bump();
          var e = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              e.push(39), this.bump()
            } else e.push(r);
            this.bump()
          }
          return z.apply(void 0, e)
        }, t.prototype.tryParseUnquoted = function(t, e) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === e || "selectordinal" === e) || 125 === r && t > 0 ? null : (this.bump(), z(r))
        }, t.prototype.parseArgument = function(t, e) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, M(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(n.EMPTY_ARGUMENT, M(r, this.clonePosition()));
          var o = this.parseIdentifierIfPossible().value;
          if (!o) return this.error(n.MALFORMED_ARGUMENT, M(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, M(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: i.argument,
                  value: o,
                  location: M(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, M(r, this.clonePosition())) : this.parseArgumentOptions(t, e, o, r);
            default:
              return this.error(n.MALFORMED_ARGUMENT, M(r, this.clonePosition()))
          }
        }, t.prototype.parseIdentifierIfPossible = function() {
          var t = this.clonePosition(),
            e = this.offset(),
            r = Z(this.message, e),
            n = e + r.length;
          return this.bumpTo(n), {
            value: r,
            location: M(t, this.clonePosition())
          }
        }, t.prototype.parseArgumentOptions = function(t, e, r, a) {
          var u, h = this.clonePosition(),
            c = this.parseIdentifierIfPossible().value,
            l = this.clonePosition();
          switch (c) {
            case "":
              return this.error(n.EXPECT_ARGUMENT_TYPE, M(h, l));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var f = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var p = this.clonePosition();
                if ((_ = this.parseSimpleArgStyleIfPossible()).err) return _;
                if (0 === (v = q(_.val)).length) return this.error(n.EXPECT_ARGUMENT_STYLE, M(this.clonePosition(), this.clonePosition()));
                f = {
                  style: v,
                  styleLocation: M(p, this.clonePosition())
                }
              }
              if ((A = this.tryParseArgumentClose(a)).err) return A;
              var m = M(a, this.clonePosition());
              if (f && Y(null == f ? void 0 : f.style, "::", 0)) {
                var d = $(f.style.slice(2));
                if ("number" === c) return (_ = this.parseNumberSkeletonFromString(d, f.styleLocation)).err ? _ : {
                  val: {
                    type: i.number,
                    value: r,
                    location: m,
                    style: _.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(n.EXPECT_DATE_TIME_SKELETON, m);
                var g = d;
                this.locale && (g = function(t, e) {
                  for (var r = "", n = 0; n < t.length; n++) {
                    var i = t.charAt(n);
                    if ("j" === i) {
                      for (var o = 0; n + 1 < t.length && t.charAt(n + 1) === i;) o++, n++;
                      var s = 1 + (1 & o),
                        a = o < 2 ? 1 : 3 + (o >> 1),
                        u = O(e);
                      for ("H" != u && "k" != u || (a = 0); a-- > 0;) r += "a";
                      for (; s-- > 0;) r = u + r
                    } else r += "J" === i ? "H" : i
                  }
                  return r
                }(d, this.locale));
                var v = {
                  type: o.dateTime,
                  pattern: g,
                  location: f.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? T(g) : {}
                };
                return {
                  val: {
                    type: "date" === c ? i.date : i.time,
                    value: r,
                    location: m,
                    style: v
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === c ? i.number : "date" === c ? i.date : i.time,
                  value: r,
                  location: m,
                  style: null !== (u = null == f ? void 0 : f.style) && void 0 !== u ? u : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var y = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS, M(y, (0, s.pi)({}, y)));
              this.bumpSpace();
              var E = this.parseIdentifierIfPossible(),
                b = 0;
              if ("select" !== c && "offset" === E.value) {
                if (!this.bumpIf(":")) return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, M(this.clonePosition(), this.clonePosition()));
                var _;
                if (this.bumpSpace(), (_ = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return _;
                this.bumpSpace(), E = this.parseIdentifierIfPossible(), b = _.val
              }
              var A, S = this.tryParsePluralOrSelectOptions(t, c, e, E);
              if (S.err) return S;
              if ((A = this.tryParseArgumentClose(a)).err) return A;
              var I = M(a, this.clonePosition());
              return "select" === c ? {
                val: {
                  type: i.select,
                  value: r,
                  options: K(S.val),
                  location: I
                },
                err: null
              } : {
                val: {
                  type: i.plural,
                  value: r,
                  options: K(S.val),
                  offset: b,
                  pluralType: "plural" === c ? "cardinal" : "ordinal",
                  location: I
                },
                err: null
              };
            default:
              return this.error(n.INVALID_ARGUMENT_TYPE, M(h, l))
          }
        }, t.prototype.tryParseArgumentClose = function(t) {
          return this.isEOF() || 125 !== this.char() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, M(t, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, t.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var t = 0, e = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, M(r, this.clonePosition()));
              this.bump();
              break;
            case 123:
              t += 1, this.bump();
              break;
            case 125:
              if (!(t > 0)) return {
                val: this.message.slice(e.offset, this.offset()),
                err: null
              };
              t -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(e.offset, this.offset()),
            err: null
          }
        }, t.prototype.parseNumberSkeletonFromString = function(t, e) {
          var r = [];
          try {
            r = function(t) {
              if (0 === t.length) throw new Error("Number skeleton cannot be empty");
              for (var e = [], r = 0, n = t.split(b).filter((function(t) {
                  return t.length > 0
                })); r < n.length; r++) {
                var i = n[r].split("/");
                if (0 === i.length) throw new Error("Invalid number skeleton");
                for (var o = i[0], s = i.slice(1), a = 0, u = s; a < u.length; a++)
                  if (0 === u[a].length) throw new Error("Invalid number skeleton");
                e.push({
                  stem: o,
                  options: s
                })
              }
              return e
            }(t)
          } catch (t) {
            return this.error(n.INVALID_NUMBER_SKELETON, e)
          }
          return {
            val: {
              type: o.number,
              tokens: r,
              location: e,
              parsedOptions: this.shouldParseSkeletons ? L(r) : {}
            },
            err: null
          }
        }, t.prototype.tryParsePluralOrSelectOptions = function(t, e, r, i) {
          for (var o, s = !1, a = [], u = new Set, h = i.value, c = i.location;;) {
            if (0 === h.length) {
              var l = this.clonePosition();
              if ("select" === e || !this.bumpIf("=")) break;
              var f = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR, n.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (f.err) return f;
              c = M(l, this.clonePosition()), h = this.message.slice(l.offset, this.offset())
            }
            if (u.has(h)) return this.error("select" === e ? n.DUPLICATE_SELECT_ARGUMENT_SELECTOR : n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === h && (s = !0), this.bumpSpace();
            var p = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === e ? n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, M(this.clonePosition(), this.clonePosition()));
            var m = this.parseMessage(t + 1, e, r);
            if (m.err) return m;
            var d = this.tryParseArgumentClose(p);
            if (d.err) return d;
            a.push([h, {
              value: m.val,
              location: M(p, this.clonePosition())
            }]), u.add(h), this.bumpSpace(), h = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === e ? n.EXPECT_SELECT_ARGUMENT_SELECTOR : n.EXPECT_PLURAL_ARGUMENT_SELECTOR, M(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(n.MISSING_OTHER_CLAUSE, M(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, t.prototype.tryParseDecimalInteger = function(t, e) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var i = !1, o = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            i = !0, o = 10 * o + (s - 48), this.bump()
          }
          var a = M(n, this.clonePosition());
          return i ? X(o *= r) ? {
            val: o,
            err: null
          } : this.error(e, a) : this.error(t, a)
        }, t.prototype.offset = function() {
          return this.position.offset
        }, t.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, t.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, t.prototype.char = function() {
          var t = this.position.offset;
          if (t >= this.message.length) throw Error("out of bound");
          var e = W(this.message, t);
          if (void 0 === e) throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
          return e
        }, t.prototype.error = function(t, e) {
          return {
            val: null,
            err: {
              kind: t,
              message: this.message,
              location: e
            }
          }
        }, t.prototype.bump = function() {
          if (!this.isEOF()) {
            var t = this.char();
            10 === t ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2)
          }
        }, t.prototype.bumpIf = function(t) {
          if (Y(this.message, t, this.offset())) {
            for (var e = 0; e < t.length; e++) this.bump();
            return !0
          }
          return !1
        }, t.prototype.bumpUntil = function(t) {
          var e = this.offset(),
            r = this.message.indexOf(t, e);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, t.prototype.bumpTo = function(t) {
          if (this.offset() > t) throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (t = Math.min(t, this.message.length);;) {
            var e = this.offset();
            if (e === t) break;
            if (e > t) throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, t.prototype.bumpSpace = function() {
          for (; !this.isEOF() && rt(this.char());) this.bump()
        }, t.prototype.peek = function() {
          if (this.isEOF()) return null;
          var t = this.char(),
            e = this.offset(),
            r = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, t
      }();

      function et(t) {
        return t >= 97 && t <= 122 || t >= 65 && t <= 90
      }

      function rt(t) {
        return t >= 9 && t <= 13 || 32 === t || 133 === t || t >= 8206 && t <= 8207 || 8232 === t || 8233 === t
      }

      function nt(t) {
        return t >= 33 && t <= 35 || 36 === t || t >= 37 && t <= 39 || 40 === t || 41 === t || 42 === t || 43 === t || 44 === t || 45 === t || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || 91 === t || 92 === t || 93 === t || 94 === t || 96 === t || 123 === t || 124 === t || 125 === t || 126 === t || 161 === t || t >= 162 && t <= 165 || 166 === t || 167 === t || 169 === t || 171 === t || 172 === t || 174 === t || 176 === t || 177 === t || 182 === t || 187 === t || 191 === t || 215 === t || 247 === t || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || 8216 === t || 8217 === t || 8218 === t || t >= 8219 && t <= 8220 || 8221 === t || 8222 === t || 8223 === t || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || 8249 === t || 8250 === t || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || 8260 === t || 8261 === t || 8262 === t || t >= 8263 && t <= 8273 || 8274 === t || 8275 === t || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || 8608 === t || t >= 8609 && t <= 8610 || 8611 === t || t >= 8612 && t <= 8613 || 8614 === t || t >= 8615 && t <= 8621 || 8622 === t || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || 8658 === t || 8659 === t || 8660 === t || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || 8968 === t || 8969 === t || 8970 === t || 8971 === t || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || 9001 === t || 9002 === t || t >= 9003 && t <= 9083 || 9084 === t || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || 9655 === t || t >= 9656 && t <= 9664 || 9665 === t || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || 9839 === t || t >= 9840 && t <= 10087 || 10088 === t || 10089 === t || 10090 === t || 10091 === t || 10092 === t || 10093 === t || 10094 === t || 10095 === t || 10096 === t || 10097 === t || 10098 === t || 10099 === t || 10100 === t || 10101 === t || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || 10181 === t || 10182 === t || t >= 10183 && t <= 10213 || 10214 === t || 10215 === t || 10216 === t || 10217 === t || 10218 === t || 10219 === t || 10220 === t || 10221 === t || 10222 === t || 10223 === t || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || 10627 === t || 10628 === t || 10629 === t || 10630 === t || 10631 === t || 10632 === t || 10633 === t || 10634 === t || 10635 === t || 10636 === t || 10637 === t || 10638 === t || 10639 === t || 10640 === t || 10641 === t || 10642 === t || 10643 === t || 10644 === t || 10645 === t || 10646 === t || 10647 === t || 10648 === t || t >= 10649 && t <= 10711 || 10712 === t || 10713 === t || 10714 === t || 10715 === t || t >= 10716 && t <= 10747 || 10748 === t || 10749 === t || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || 11158 === t || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || 11778 === t || 11779 === t || 11780 === t || 11781 === t || t >= 11782 && t <= 11784 || 11785 === t || 11786 === t || 11787 === t || 11788 === t || 11789 === t || t >= 11790 && t <= 11798 || 11799 === t || t >= 11800 && t <= 11801 || 11802 === t || 11803 === t || 11804 === t || 11805 === t || t >= 11806 && t <= 11807 || 11808 === t || 11809 === t || 11810 === t || 11811 === t || 11812 === t || 11813 === t || 11814 === t || 11815 === t || 11816 === t || 11817 === t || t >= 11818 && t <= 11822 || 11823 === t || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || 11840 === t || 11841 === t || 11842 === t || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || 11858 === t || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || 12296 === t || 12297 === t || 12298 === t || 12299 === t || 12300 === t || 12301 === t || 12302 === t || 12303 === t || 12304 === t || 12305 === t || t >= 12306 && t <= 12307 || 12308 === t || 12309 === t || 12310 === t || 12311 === t || 12312 === t || 12313 === t || 12314 === t || 12315 === t || 12316 === t || 12317 === t || t >= 12318 && t <= 12319 || 12320 === t || 12336 === t || 64830 === t || 64831 === t || t >= 65093 && t <= 65094
      }

      function it(t) {
        t.forEach((function(t) {
          if (delete t.location, f(t) || p(t))
            for (var e in t.options) delete t.options[e].location, it(t.options[e].value);
          else h(t) && g(t.style) || (c(t) || l(t)) && v(t.style) ? delete t.style.location : d(t) && it(t.children)
        }))
      }

      function ot(t, e) {
        void 0 === e && (e = {}), e = (0, s.pi)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, e);
        var r = new tt(t, e).parse();
        if (r.err) {
          var i = SyntaxError(n[r.err.kind]);
          throw i.location = r.err.location, i.originalMessage = r.err.message, i
        }
        return (null == e ? void 0 : e.captureLocation) || it(r.val), r.val
      }
    },
    6716: (t, e, r) => {
      var n;
      ! function(i, o, s, a) {
        "use strict";
        var u, h = ["", "webkit", "Moz", "MS", "ms", "o"],
          c = o.createElement("div"),
          l = "function",
          f = Math.round,
          p = Math.abs,
          m = Date.now;

        function d(t, e, r) {
          return setTimeout(_(t, r), e)
        }

        function g(t, e, r) {
          return !!Array.isArray(t) && (v(t, r[e], r), !0)
        }

        function v(t, e, r) {
          var n;
          if (t)
            if (t.forEach) t.forEach(e, r);
            else if (t.length !== a)
            for (n = 0; n < t.length;) e.call(r, t[n], n, t), n++;
          else
            for (n in t) t.hasOwnProperty(n) && e.call(r, t[n], n, t)
        }

        function y(t, e, r) {
          var n = "DEPRECATED METHOD: " + e + "\n" + r + " AT \n";
          return function() {
            var e = new Error("get-stack-trace"),
              r = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              o = i.console && (i.console.warn || i.console.log);
            return o && o.call(i.console, n, r), t.apply(this, arguments)
          }
        }
        u = "function" != typeof Object.assign ? function(t) {
          if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
          for (var e = Object(t), r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            if (n !== a && null !== n)
              for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
          }
          return e
        } : Object.assign;
        var E = y((function(t, e, r) {
            for (var n = Object.keys(e), i = 0; i < n.length;)(!r || r && t[n[i]] === a) && (t[n[i]] = e[n[i]]), i++;
            return t
          }), "extend", "Use `assign`."),
          T = y((function(t, e) {
            return E(t, e, !0)
          }), "merge", "Use `assign`.");

        function b(t, e, r) {
          var n, i = e.prototype;
          (n = t.prototype = Object.create(i)).constructor = t, n._super = i, r && u(n, r)
        }

        function _(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function A(t, e) {
          return typeof t == l ? t.apply(e && e[0] || a, e) : t
        }

        function S(t, e) {
          return t === a ? e : t
        }

        function I(t, e, r) {
          v(B(e), (function(e) {
            t.addEventListener(e, r, !1)
          }))
        }

        function H(t, e, r) {
          v(B(e), (function(e) {
            t.removeEventListener(e, r, !1)
          }))
        }

        function P(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function N(t, e) {
          return t.indexOf(e) > -1
        }

        function B(t) {
          return t.trim().split(/\s+/g)
        }

        function L(t, e, r) {
          if (t.indexOf && !r) return t.indexOf(e);
          for (var n = 0; n < t.length;) {
            if (r && t[n][r] == e || !r && t[n] === e) return n;
            n++
          }
          return -1
        }

        function R(t) {
          return Array.prototype.slice.call(t, 0)
        }

        function C(t, e, r) {
          for (var n = [], i = [], o = 0; o < t.length;) {
            var s = e ? t[o][e] : t[o];
            L(i, s) < 0 && n.push(t[o]), i[o] = s, o++
          }
          return r && (n = e ? n.sort((function(t, r) {
            return t[e] > r[e]
          })) : n.sort()), n
        }

        function O(t, e) {
          for (var r, n, i = e[0].toUpperCase() + e.slice(1), o = 0; o < h.length;) {
            if ((n = (r = h[o]) ? r + i : e) in t) return n;
            o++
          }
          return a
        }
        var w = 1;

        function D(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || i
        }
        var M = "ontouchstart" in i,
          F = O(i, "PointerEvent") !== a,
          U = M && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          G = "touch",
          k = "mouse",
          x = 25,
          j = 1,
          X = 2,
          V = 4,
          Z = 8,
          Y = 1,
          z = 2,
          K = 4,
          W = 8,
          $ = 16,
          q = z | K,
          Q = W | $,
          J = q | Q,
          tt = ["x", "y"],
          et = ["clientX", "clientY"];

        function rt(t, e) {
          var r = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            A(t.options.enable, [t]) && r.handler(e)
          }, this.init()
        }

        function nt(t, e, r) {
          var n = r.pointers.length,
            i = r.changedPointers.length,
            o = e & j && n - i == 0,
            s = e & (V | Z) && n - i == 0;
          r.isFirst = !!o, r.isFinal = !!s, o && (t.session = {}), r.eventType = e,
            function(t, e) {
              var r = t.session,
                n = e.pointers,
                i = n.length;
              r.firstInput || (r.firstInput = it(e)), i > 1 && !r.firstMultiple ? r.firstMultiple = it(e) : 1 === i && (r.firstMultiple = !1);
              var o = r.firstInput,
                s = r.firstMultiple,
                u = s ? s.center : o.center,
                h = e.center = ot(n);
              e.timeStamp = m(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = ht(u, h), e.distance = ut(u, h),
                function(t, e) {
                  var r = e.center,
                    n = t.offsetDelta || {},
                    i = t.prevDelta || {},
                    o = t.prevInput || {};
                  e.eventType !== j && o.eventType !== V || (i = t.prevDelta = {
                    x: o.deltaX || 0,
                    y: o.deltaY || 0
                  }, n = t.offsetDelta = {
                    x: r.x,
                    y: r.y
                  }), e.deltaX = i.x + (r.x - n.x), e.deltaY = i.y + (r.y - n.y)
                }(r, e), e.offsetDirection = at(e.deltaX, e.deltaY);
              var c, l, f = st(e.deltaTime, e.deltaX, e.deltaY);
              e.overallVelocityX = f.x, e.overallVelocityY = f.y, e.overallVelocity = p(f.x) > p(f.y) ? f.x : f.y, e.scale = s ? (c = s.pointers, ut((l = n)[0], l[1], et) / ut(c[0], c[1], et)) : 1, e.rotation = s ? function(t, e) {
                  return ht(e[1], e[0], et) + ht(t[1], t[0], et)
                }(s.pointers, n) : 0, e.maxPointers = r.prevInput ? e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                  var r, n, i, o, s = t.lastInterval || e,
                    u = e.timeStamp - s.timeStamp;
                  if (e.eventType != Z && (u > x || s.velocity === a)) {
                    var h = e.deltaX - s.deltaX,
                      c = e.deltaY - s.deltaY,
                      l = st(u, h, c);
                    n = l.x, i = l.y, r = p(l.x) > p(l.y) ? l.x : l.y, o = at(h, c), t.lastInterval = e
                  } else r = s.velocity, n = s.velocityX, i = s.velocityY, o = s.direction;
                  e.velocity = r, e.velocityX = n, e.velocityY = i, e.direction = o
                }(r, e);
              var d = t.element;
              P(e.srcEvent.target, d) && (d = e.srcEvent.target), e.target = d
            }(t, r), t.emit("hammer.input", r), t.recognize(r), t.session.prevInput = r
        }

        function it(t) {
          for (var e = [], r = 0; r < t.pointers.length;) e[r] = {
            clientX: f(t.pointers[r].clientX),
            clientY: f(t.pointers[r].clientY)
          }, r++;
          return {
            timeStamp: m(),
            pointers: e,
            center: ot(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
          }
        }

        function ot(t) {
          var e = t.length;
          if (1 === e) return {
            x: f(t[0].clientX),
            y: f(t[0].clientY)
          };
          for (var r = 0, n = 0, i = 0; i < e;) r += t[i].clientX, n += t[i].clientY, i++;
          return {
            x: f(r / e),
            y: f(n / e)
          }
        }

        function st(t, e, r) {
          return {
            x: e / t || 0,
            y: r / t || 0
          }
        }

        function at(t, e) {
          return t === e ? Y : p(t) >= p(e) ? t < 0 ? z : K : e < 0 ? W : $
        }

        function ut(t, e, r) {
          r || (r = tt);
          var n = e[r[0]] - t[r[0]],
            i = e[r[1]] - t[r[1]];
          return Math.sqrt(n * n + i * i)
        }

        function ht(t, e, r) {
          r || (r = tt);
          var n = e[r[0]] - t[r[0]],
            i = e[r[1]] - t[r[1]];
          return 180 * Math.atan2(i, n) / Math.PI
        }
        rt.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && I(this.element, this.evEl, this.domHandler), this.evTarget && I(this.target, this.evTarget, this.domHandler), this.evWin && I(D(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && H(this.element, this.evEl, this.domHandler), this.evTarget && H(this.target, this.evTarget, this.domHandler), this.evWin && H(D(this.element), this.evWin, this.domHandler)
          }
        };
        var ct = {
            mousedown: j,
            mousemove: X,
            mouseup: V
          },
          lt = "mousedown",
          ft = "mousemove mouseup";

        function pt() {
          this.evEl = lt, this.evWin = ft, this.pressed = !1, rt.apply(this, arguments)
        }
        b(pt, rt, {
          handler: function(t) {
            var e = ct[t.type];
            e & j && 0 === t.button && (this.pressed = !0), e & X && 1 !== t.which && (e = V), this.pressed && (e & V && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: k,
              srcEvent: t
            }))
          }
        });
        var mt = {
            pointerdown: j,
            pointermove: X,
            pointerup: V,
            pointercancel: Z,
            pointerout: Z
          },
          dt = {
            2: G,
            3: "pen",
            4: k,
            5: "kinect"
          },
          gt = "pointerdown",
          vt = "pointermove pointerup pointercancel";

        function yt() {
          this.evEl = gt, this.evWin = vt, rt.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        i.MSPointerEvent && !i.PointerEvent && (gt = "MSPointerDown", vt = "MSPointerMove MSPointerUp MSPointerCancel"), b(yt, rt, {
          handler: function(t) {
            var e = this.store,
              r = !1,
              n = t.type.toLowerCase().replace("ms", ""),
              i = mt[n],
              o = dt[t.pointerType] || t.pointerType,
              s = o == G,
              a = L(e, t.pointerId, "pointerId");
            i & j && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : i & (V | Z) && (r = !0), a < 0 || (e[a] = t, this.callback(this.manager, i, {
              pointers: e,
              changedPointers: [t],
              pointerType: o,
              srcEvent: t
            }), r && e.splice(a, 1))
          }
        });
        var Et = {
          touchstart: j,
          touchmove: X,
          touchend: V,
          touchcancel: Z
        };

        function Tt() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, rt.apply(this, arguments)
        }

        function bt(t, e) {
          var r = R(t.touches),
            n = R(t.changedTouches);
          return e & (V | Z) && (r = C(r.concat(n), "identifier", !0)), [r, n]
        }
        b(Tt, rt, {
          handler: function(t) {
            var e = Et[t.type];
            if (e === j && (this.started = !0), this.started) {
              var r = bt.call(this, t, e);
              e & (V | Z) && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: r[0],
                changedPointers: r[1],
                pointerType: G,
                srcEvent: t
              })
            }
          }
        });
        var _t = {
            touchstart: j,
            touchmove: X,
            touchend: V,
            touchcancel: Z
          },
          At = "touchstart touchmove touchend touchcancel";

        function St() {
          this.evTarget = At, this.targetIds = {}, rt.apply(this, arguments)
        }

        function It(t, e) {
          var r = R(t.touches),
            n = this.targetIds;
          if (e & (j | X) && 1 === r.length) return n[r[0].identifier] = !0, [r, r];
          var i, o, s = R(t.changedTouches),
            a = [],
            u = this.target;
          if (o = r.filter((function(t) {
              return P(t.target, u)
            })), e === j)
            for (i = 0; i < o.length;) n[o[i].identifier] = !0, i++;
          for (i = 0; i < s.length;) n[s[i].identifier] && a.push(s[i]), e & (V | Z) && delete n[s[i].identifier], i++;
          return a.length ? [C(o.concat(a), "identifier", !0), a] : void 0
        }
        b(St, rt, {
          handler: function(t) {
            var e = _t[t.type],
              r = It.call(this, t, e);
            r && this.callback(this.manager, e, {
              pointers: r[0],
              changedPointers: r[1],
              pointerType: G,
              srcEvent: t
            })
          }
        });
        var Ht = 2500;

        function Pt() {
          rt.apply(this, arguments);
          var t = _(this.handler, this);
          this.touch = new St(this.manager, t), this.mouse = new pt(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function Nt(t, e) {
          t & j ? (this.primaryTouch = e.changedPointers[0].identifier, Bt.call(this, e)) : t & (V | Z) && Bt.call(this, e)
        }

        function Bt(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var r = {
              x: e.clientX,
              y: e.clientY
            };
            this.lastTouches.push(r);
            var n = this.lastTouches;
            setTimeout((function() {
              var t = n.indexOf(r);
              t > -1 && n.splice(t, 1)
            }), Ht)
          }
        }

        function Lt(t) {
          for (var e = t.srcEvent.clientX, r = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var i = this.lastTouches[n],
              o = Math.abs(e - i.x),
              s = Math.abs(r - i.y);
            if (o <= 25 && s <= 25) return !0
          }
          return !1
        }
        b(Pt, rt, {
          handler: function(t, e, r) {
            var n = r.pointerType == G,
              i = r.pointerType == k;
            if (!(i && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
              if (n) Nt.call(this, e, r);
              else if (i && Lt.call(this, r)) return;
              this.callback(t, e, r)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var Rt = O(c.style, "touchAction"),
          Ct = Rt !== a,
          Ot = "compute",
          wt = "auto",
          Dt = "manipulation",
          Mt = "none",
          Ft = "pan-x",
          Ut = "pan-y",
          Gt = function() {
            if (!Ct) return !1;
            var t = {},
              e = i.CSS && i.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(r) {
              t[r] = !e || i.CSS.supports("touch-action", r)
            })), t
          }();

        function kt(t, e) {
          this.manager = t, this.set(e)
        }
        kt.prototype = {
          set: function(t) {
            t == Ot && (t = this.compute()), Ct && this.manager.element.style && Gt[t] && (this.manager.element.style[Rt] = t), this.actions = t.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t = [];
            return v(this.manager.recognizers, (function(e) {
                A(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              })),
              function(t) {
                if (N(t, Mt)) return Mt;
                var e = N(t, Ft),
                  r = N(t, Ut);
                return e && r ? Mt : e || r ? e ? Ft : Ut : N(t, Dt) ? Dt : wt
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              r = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var n = this.actions,
                i = N(n, Mt) && !Gt[Mt],
                o = N(n, Ut) && !Gt[Ut],
                s = N(n, Ft) && !Gt[Ft];
              if (i) {
                var a = 1 === t.pointers.length,
                  u = t.distance < 2,
                  h = t.deltaTime < 250;
                if (a && u && h) return
              }
              if (!s || !o) return i || o && r & q || s && r & Q ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var xt = 1,
          jt = 2,
          Xt = 4,
          Vt = 8,
          Zt = Vt,
          Yt = 16,
          zt = 32;

        function Kt(t) {
          this.options = u({}, this.defaults, t || {}), this.id = w++, this.manager = null, this.options.enable = S(this.options.enable, !0), this.state = xt, this.simultaneous = {}, this.requireFail = []
        }

        function Wt(t) {
          return t & Yt ? "cancel" : t & Vt ? "end" : t & Xt ? "move" : t & jt ? "start" : ""
        }

        function $t(t) {
          return t == $ ? "down" : t == W ? "up" : t == z ? "left" : t == K ? "right" : ""
        }

        function qt(t, e) {
          var r = e.manager;
          return r ? r.get(t) : t
        }

        function Qt() {
          Kt.apply(this, arguments)
        }

        function Jt() {
          Qt.apply(this, arguments), this.pX = null, this.pY = null
        }

        function te() {
          Qt.apply(this, arguments)
        }

        function ee() {
          Kt.apply(this, arguments), this._timer = null, this._input = null
        }

        function re() {
          Qt.apply(this, arguments)
        }

        function ne() {
          Qt.apply(this, arguments)
        }

        function ie() {
          Kt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function oe(t, e) {
          return (e = e || {}).recognizers = S(e.recognizers, oe.defaults.preset), new se(t, e)
        }

        function se(t, e) {
          this.options = u({}, oe.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (F ? yt : U ? St : M ? Pt : pt))(this, nt), this.touchAction = new kt(this, this.options.touchAction), ae(this, !0), v(this.options.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
          }), this)
        }

        function ae(t, e) {
          var r, n = t.element;
          n.style && (v(t.options.cssProps, (function(i, o) {
            r = O(n.style, o), e ? (t.oldCssProps[r] = n.style[r], n.style[r] = i) : n.style[r] = t.oldCssProps[r] || ""
          })), e || (t.oldCssProps = {}))
        }
        Kt.prototype = {
          defaults: {},
          set: function(t) {
            return u(this.options, t), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(t) {
            if (g(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = qt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
          },
          dropRecognizeWith: function(t) {
            return g(t, "dropRecognizeWith", this) || (t = qt(t, this), delete this.simultaneous[t.id]), this
          },
          requireFailure: function(t) {
            if (g(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === L(e, t = qt(t, this)) && (e.push(t), t.requireFailure(this)), this
          },
          dropRequireFailure: function(t) {
            if (g(t, "dropRequireFailure", this)) return this;
            t = qt(t, this);
            var e = L(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0
          },
          canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
          },
          emit: function(t) {
            var e = this,
              r = this.state;

            function n(r) {
              e.manager.emit(r, t)
            }
            r < Vt && n(e.options.event + Wt(r)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), r >= Vt && n(e.options.event + Wt(r))
          },
          tryEmit: function(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = zt
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(this.requireFail[t].state & (zt | xt))) return !1;
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e = u({}, t);
            if (!A(this.options.enable, [this, e])) return this.reset(), void(this.state = zt);
            this.state & (Zt | Yt | zt) && (this.state = xt), this.state = this.process(e), this.state & (jt | Xt | Vt | Yt) && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, b(Qt, Kt, {
          defaults: {
            pointers: 1
          },
          attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
          },
          process: function(t) {
            var e = this.state,
              r = t.eventType,
              n = e & (jt | Xt),
              i = this.attrTest(t);
            return n && (r & Z || !i) ? e | Yt : n || i ? r & V ? e | Vt : e & jt ? e | Xt : jt : zt
          }
        }), b(Jt, Qt, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: J
          },
          getTouchAction: function() {
            var t = this.options.direction,
              e = [];
            return t & q && e.push(Ut), t & Q && e.push(Ft), e
          },
          directionTest: function(t) {
            var e = this.options,
              r = !0,
              n = t.distance,
              i = t.direction,
              o = t.deltaX,
              s = t.deltaY;
            return i & e.direction || (e.direction & q ? (i = 0 === o ? Y : o < 0 ? z : K, r = o != this.pX, n = Math.abs(t.deltaX)) : (i = 0 === s ? Y : s < 0 ? W : $, r = s != this.pY, n = Math.abs(t.deltaY))), t.direction = i, r && n > e.threshold && i & e.direction
          },
          attrTest: function(t) {
            return Qt.prototype.attrTest.call(this, t) && (this.state & jt || !(this.state & jt) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = $t(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), b(te, Qt, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Mt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & jt)
          },
          emit: function(t) {
            if (1 !== t.scale) {
              var e = t.scale < 1 ? "in" : "out";
              t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
          }
        }), b(ee, Kt, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [wt]
          },
          process: function(t) {
            var e = this.options,
              r = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              i = t.deltaTime > e.time;
            if (this._input = t, !n || !r || t.eventType & (V | Z) && !i) this.reset();
            else if (t.eventType & j) this.reset(), this._timer = d((function() {
              this.state = Zt, this.tryEmit()
            }), e.time, this);
            else if (t.eventType & V) return Zt;
            return zt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            this.state === Zt && (t && t.eventType & V ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = m(), this.manager.emit(this.options.event, this._input)))
          }
        }), b(re, Qt, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Mt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & jt)
          }
        }), b(ne, Qt, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: q | Q,
            pointers: 1
          },
          getTouchAction: function() {
            return Jt.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, r = this.options.direction;
            return r & (q | Q) ? e = t.overallVelocity : r & q ? e = t.overallVelocityX : r & Q && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && r & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && p(e) > this.options.velocity && t.eventType & V
          },
          emit: function(t) {
            var e = $t(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), b(ie, Kt, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
          },
          getTouchAction: function() {
            return [Dt]
          },
          process: function(t) {
            var e = this.options,
              r = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              i = t.deltaTime < e.time;
            if (this.reset(), t.eventType & j && 0 === this.count) return this.failTimeout();
            if (n && i && r) {
              if (t.eventType != V) return this.failTimeout();
              var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                s = !this.pCenter || ut(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, s && o ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = d((function() {
                this.state = Zt, this.tryEmit()
              }), e.interval, this), jt) : Zt
            }
            return zt
          },
          failTimeout: function() {
            return this._timer = d((function() {
              this.state = zt
            }), this.options.interval, this), zt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            this.state == Zt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), oe.VERSION = "2.0.7", oe.defaults = {
          domEvents: !1,
          touchAction: Ot,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [re, {
              enable: !1
            }],
            [te, {
                enable: !1
              },
              ["rotate"]
            ],
            [ne, {
              direction: q
            }],
            [Jt, {
                direction: q
              },
              ["swipe"]
            ],
            [ie],
            [ie, {
                event: "doubletap",
                taps: 2
              },
              ["tap"]
            ],
            [ee]
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, se.prototype = {
          set: function(t) {
            return u(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
          },
          stop: function(t) {
            this.session.stopped = t ? 2 : 1
          },
          recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
              var r;
              this.touchAction.preventDefaults(t);
              var n = this.recognizers,
                i = e.curRecognizer;
              (!i || i && i.state & Zt) && (i = e.curRecognizer = null);
              for (var o = 0; o < n.length;) r = n[o], 2 === e.stopped || i && r != i && !r.canRecognizeWith(i) ? r.reset() : r.recognize(t), !i && r.state & (jt | Xt | Vt) && (i = e.curRecognizer = r), o++
            }
          },
          get: function(t) {
            if (t instanceof Kt) return t;
            for (var e = this.recognizers, r = 0; r < e.length; r++)
              if (e[r].options.event == t) return e[r];
            return null
          },
          add: function(t) {
            if (g(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
          },
          remove: function(t) {
            if (g(t, "remove", this)) return this;
            if (t = this.get(t)) {
              var e = this.recognizers,
                r = L(e, t); - 1 !== r && (e.splice(r, 1), this.touchAction.update())
            }
            return this
          },
          on: function(t, e) {
            if (t !== a && e !== a) {
              var r = this.handlers;
              return v(B(t), (function(t) {
                r[t] = r[t] || [], r[t].push(e)
              })), this
            }
          },
          off: function(t, e) {
            if (t !== a) {
              var r = this.handlers;
              return v(B(t), (function(t) {
                e ? r[t] && r[t].splice(L(r[t], e), 1) : delete r[t]
              })), this
            }
          },
          emit: function(t, e) {
            this.options.domEvents && function(t, e) {
              var r = o.createEvent("Event");
              r.initEvent(t, !0, !0), r.gesture = e, e.target.dispatchEvent(r)
            }(t, e);
            var r = this.handlers[t] && this.handlers[t].slice();
            if (r && r.length) {
              e.type = t, e.preventDefault = function() {
                e.srcEvent.preventDefault()
              };
              for (var n = 0; n < r.length;) r[n](e), n++
            }
          },
          destroy: function() {
            this.element && ae(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, u(oe, {
          INPUT_START: j,
          INPUT_MOVE: X,
          INPUT_END: V,
          INPUT_CANCEL: Z,
          STATE_POSSIBLE: xt,
          STATE_BEGAN: jt,
          STATE_CHANGED: Xt,
          STATE_ENDED: Vt,
          STATE_RECOGNIZED: Zt,
          STATE_CANCELLED: Yt,
          STATE_FAILED: zt,
          DIRECTION_NONE: Y,
          DIRECTION_LEFT: z,
          DIRECTION_RIGHT: K,
          DIRECTION_UP: W,
          DIRECTION_DOWN: $,
          DIRECTION_HORIZONTAL: q,
          DIRECTION_VERTICAL: Q,
          DIRECTION_ALL: J,
          Manager: se,
          Input: rt,
          TouchAction: kt,
          TouchInput: St,
          MouseInput: pt,
          PointerEventInput: yt,
          TouchMouseInput: Pt,
          SingleTouchInput: Tt,
          Recognizer: Kt,
          AttrRecognizer: Qt,
          Tap: ie,
          Pan: Jt,
          Swipe: ne,
          Pinch: te,
          Rotate: re,
          Press: ee,
          on: I,
          off: H,
          each: v,
          merge: T,
          extend: E,
          assign: u,
          inherit: b,
          bindFn: _,
          prefixed: O
        }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = oe, (n = function() {
          return oe
        }.call(e, r, e, t)) === a || (t.exports = n)
      }(window, document)
    },
    4355: (t, e, r) => {
      "use strict";
      var n = r(4753),
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
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        a = {};

      function u(t) {
        return n.isMemo(t) ? s : a[t.$$typeof] || i
      }
      a[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[n.Memo] = s;
      var h = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      t.exports = function t(e, r, n) {
        if ("string" != typeof r) {
          if (m) {
            var i = p(r);
            i && i !== m && t(e, i, n)
          }
          var s = c(r);
          l && (s = s.concat(l(r)));
          for (var a = u(e), d = u(r), g = 0; g < s.length; ++g) {
            var v = s[g];
            if (!(o[v] || n && n[v] || d && d[v] || a && a[v])) {
              var y = f(r, v);
              try {
                h(e, v, y)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    6952: (t, e, r) => {
      "use strict";
      r.d(e, {
        C: () => u
      });
      var n = r(625),
        i = r(6084),
        o = r(2292),
        s = r(2834);

      function a(t) {
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
      var u = function() {
        function t(e, r, i, u) {
          void 0 === r && (r = t.defaultLocale);
          var h, c, l, f = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(t) {
              var e = f.formatToParts(t);
              if (1 === e.length) return e[0].value;
              var r = e.reduce((function(t, e) {
                return t.length && e.type === s.du.literal && "string" == typeof t[t.length - 1] ? t[t.length - 1] += e.value : t.push(e.value), t
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(t) {
              return (0, s.FK)(f.ast, f.locales, f.formatters, f.formats, t, void 0, f.message)
            }, this.resolvedOptions = function() {
              var t;
              return {
                locale: (null === (t = f.resolvedLocale) || void 0 === t ? void 0 : t.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0]
              }
            }, this.getAst = function() {
              return f.ast
            }, this.locales = r, this.resolvedLocale = t.resolveLocale(r), "string" == typeof e) {
            if (this.message = e, !t.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var p = u || {},
              m = (p.formatters, (0, n._T)(p, ["formatters"]));
            this.ast = t.__parse(e, (0, n.pi)((0, n.pi)({}, m), {
              locale: this.resolvedLocale
            }))
          } else this.ast = e;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (c = t.formats, (l = i) ? Object.keys(c).reduce((function(t, e) {
            var r, i;
            return t[e] = (r = c[e], (i = l[e]) ? (0, n.pi)((0, n.pi)((0, n.pi)({}, r || {}), i || {}), Object.keys(r).reduce((function(t, e) {
              return t[e] = (0, n.pi)((0, n.pi)({}, r[e]), i[e] || {}), t
            }), {})) : r), t
          }), (0, n.pi)({}, c)) : c), this.formatters = u && u.formatters || (void 0 === (h = this.formatterCache) && (h = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, o.H)((function() {
              for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
              return new((t = Intl.NumberFormat).bind.apply(t, (0, n.ev)([void 0], e, !1)))
            }), {
              cache: a(h.number),
              strategy: o.A.variadic
            }),
            getDateTimeFormat: (0, o.H)((function() {
              for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
              return new((t = Intl.DateTimeFormat).bind.apply(t, (0, n.ev)([void 0], e, !1)))
            }), {
              cache: a(h.dateTime),
              strategy: o.A.variadic
            }),
            getPluralRules: (0, o.H)((function() {
              for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
              return new((t = Intl.PluralRules).bind.apply(t, (0, n.ev)([void 0], e, !1)))
            }), {
              cache: a(h.pluralRules),
              strategy: o.A.variadic
            })
          })
        }
        return Object.defineProperty(t, "defaultLocale", {
          get: function() {
            return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), t.memoizedDefaultLocale
          },
          enumerable: !1,
          configurable: !0
        }), t.memoizedDefaultLocale = null, t.resolveLocale = function(t) {
          if (void 0 !== Intl.Locale) {
            var e = Intl.NumberFormat.supportedLocalesOf(t);
            return e.length > 0 ? new Intl.Locale(e[0]) : new Intl.Locale("string" == typeof t ? t : t[0])
          }
        }, t.__parse = i.Qc, t.formats = {
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
        }, t
      }()
    },
    5282: (t, e, r) => {
      "use strict";
      r.d(e, {
        C8: () => s,
        HR: () => u,
        YR: () => a,
        jK: () => n,
        u_: () => o
      });
      var n, i = r(625);
      ! function(t) {
        t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API"
      }(n || (n = {}));
      var o = function(t) {
          function e(e, r, n) {
            var i = t.call(this, e) || this;
            return i.code = r, i.originalMessage = n, i
          }
          return (0, i.ZT)(e, t), e.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, e
        }(Error),
        s = function(t) {
          function e(e, r, i, o) {
            return t.call(this, 'Invalid values for "'.concat(e, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), n.INVALID_VALUE, o) || this
          }
          return (0, i.ZT)(e, t), e
        }(o),
        a = function(t) {
          function e(e, r, i) {
            return t.call(this, 'Value for "'.concat(e, '" must be of type ').concat(r), n.INVALID_VALUE, i) || this
          }
          return (0, i.ZT)(e, t), e
        }(o),
        u = function(t) {
          function e(e, r) {
            return t.call(this, 'The intl string context variable "'.concat(e, '" was not provided to the string "').concat(r, '"'), n.MISSING_VALUE, r) || this
          }
          return (0, i.ZT)(e, t), e
        }(o)
    },
    2834: (t, e, r) => {
      "use strict";
      r.d(e, {
        FK: () => a,
        Gt: () => s,
        du: () => n
      });
      var n, i = r(6084),
        o = r(5282);

      function s(t) {
        return "function" == typeof t
      }

      function a(t, e, r, u, h, c, l) {
        if (1 === t.length && (0, i.O4)(t[0])) return [{
          type: n.literal,
          value: t[0].value
        }];
        for (var f = [], p = 0, m = t; p < m.length; p++) {
          var d = m[p];
          if ((0, i.O4)(d)) f.push({
            type: n.literal,
            value: d.value
          });
          else if ((0, i.yx)(d)) "number" == typeof c && f.push({
            type: n.literal,
            value: r.getNumberFormat(e).format(c)
          });
          else {
            var g = d.value;
            if (!h || !(g in h)) throw new o.HR(g, l);
            var v = h[g];
            if ((0, i.VG)(d)) v && "string" != typeof v && "number" != typeof v || (v = "string" == typeof v || "number" == typeof v ? String(v) : ""), f.push({
              type: "string" == typeof v ? n.literal : n.object,
              value: v
            });
            else if ((0, i.rp)(d)) {
              var y = "string" == typeof d.style ? u.date[d.style] : (0, i.Ii)(d.style) ? d.style.parsedOptions : void 0;
              f.push({
                type: n.literal,
                value: r.getDateTimeFormat(e, y).format(v)
              })
            } else if ((0, i.pe)(d)) y = "string" == typeof d.style ? u.time[d.style] : (0, i.Ii)(d.style) ? d.style.parsedOptions : u.time.medium, f.push({
              type: n.literal,
              value: r.getDateTimeFormat(e, y).format(v)
            });
            else if ((0, i.uf)(d))(y = "string" == typeof d.style ? u.number[d.style] : (0, i.Wh)(d.style) ? d.style.parsedOptions : void 0) && y.scale && (v *= y.scale || 1), f.push({
              type: n.literal,
              value: r.getNumberFormat(e, y).format(v)
            });
            else {
              if ((0, i.HI)(d)) {
                var E = d.children,
                  T = d.value,
                  b = h[T];
                if (!s(b)) throw new o.YR(T, "function", l);
                var _ = b(a(E, e, r, u, h, c).map((function(t) {
                  return t.value
                })));
                Array.isArray(_) || (_ = [_]), f.push.apply(f, _.map((function(t) {
                  return {
                    type: "string" == typeof t ? n.literal : n.object,
                    value: t
                  }
                })))
              }
              if ((0, i.Wi)(d)) {
                if (!(A = d.options[v] || d.options.other)) throw new o.C8(d.value, v, Object.keys(d.options), l);
                f.push.apply(f, a(A.value, e, r, u, h))
              } else if ((0, i.Jo)(d)) {
                var A;
                if (!(A = d.options["=".concat(v)])) {
                  if (!Intl.PluralRules) throw new o.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', o.jK.MISSING_INTL_API, l);
                  var S = r.getPluralRules(e, {
                    type: d.pluralType
                  }).select(v - (d.offset || 0));
                  A = d.options[S] || d.options.other
                }
                if (!A) throw new o.C8(d.value, v, Object.keys(d.options), l);
                f.push.apply(f, a(A.value, e, r, u, h, v - (d.offset || 0)))
              }
            }
          }
        }
        return (I = f).length < 2 ? I : I.reduce((function(t, e) {
          var r = t[t.length - 1];
          return r && r.type === n.literal && e.type === n.literal ? r.value += e.value : t.push(e), t
        }), []);
        var I
      }! function(t) {
        t[t.literal = 0] = "literal", t[t.object = 1] = "object"
      }(n || (n = {}))
    },
    7549: (t, e) => {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        a = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        h = r ? Symbol.for("react.context") : 60110,
        c = r ? Symbol.for("react.async_mode") : 60111,
        l = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        d = r ? Symbol.for("react.memo") : 60115,
        g = r ? Symbol.for("react.lazy") : 60116,
        v = r ? Symbol.for("react.block") : 60121,
        y = r ? Symbol.for("react.fundamental") : 60117,
        E = r ? Symbol.for("react.responder") : 60118,
        T = r ? Symbol.for("react.scope") : 60119;

      function b(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case n:
              switch (t = t.type) {
                case c:
                case l:
                case o:
                case a:
                case s:
                case p:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case h:
                    case f:
                    case g:
                    case d:
                    case u:
                      return t;
                    default:
                      return e
                  }
              }
            case i:
              return e
          }
        }
      }

      function _(t) {
        return b(t) === l
      }
      e.AsyncMode = c, e.ConcurrentMode = l, e.ContextConsumer = h, e.ContextProvider = u, e.Element = n, e.ForwardRef = f, e.Fragment = o, e.Lazy = g, e.Memo = d, e.Portal = i, e.Profiler = a, e.StrictMode = s, e.Suspense = p, e.isAsyncMode = function(t) {
        return _(t) || b(t) === c
      }, e.isConcurrentMode = _, e.isContextConsumer = function(t) {
        return b(t) === h
      }, e.isContextProvider = function(t) {
        return b(t) === u
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === n
      }, e.isForwardRef = function(t) {
        return b(t) === f
      }, e.isFragment = function(t) {
        return b(t) === o
      }, e.isLazy = function(t) {
        return b(t) === g
      }, e.isMemo = function(t) {
        return b(t) === d
      }, e.isPortal = function(t) {
        return b(t) === i
      }, e.isProfiler = function(t) {
        return b(t) === a
      }, e.isStrictMode = function(t) {
        return b(t) === s
      }, e.isSuspense = function(t) {
        return b(t) === p
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === o || t === l || t === a || t === s || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === h || t.$$typeof === f || t.$$typeof === y || t.$$typeof === E || t.$$typeof === T || t.$$typeof === v)
      }, e.typeOf = b
    },
    4753: (t, e, r) => {
      "use strict";
      t.exports = r(7549)
    },
    625: (t, e, r) => {
      "use strict";
      r.d(e, {
        ZT: () => i,
        _T: () => s,
        ev: () => a,
        pi: () => o
      });
      var n = function(t, e) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(t, e) {
          t.__proto__ = e
        } || function(t, e) {
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        }, n(t, e)
      };

      function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function r() {
          this.constructor = t
        }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
      }
      var o = function() {
        return o = Object.assign || function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++)
            for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t
        }, o.apply(this, arguments)
      };

      function s(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
        }
        return r
      }

      function a(t, e, r) {
        if (r || 2 === arguments.length)
          for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
        return t.concat(n || Array.prototype.slice.call(e))
      }
      Object.create, Object.create
    },
    8272: (t, e, r) => {
      "use strict";
      r.d(e, {
        Z: () => u
      });
      const n = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let i;
      const o = new Uint8Array(16);

      function s() {
        if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(o)
      }
      const a = [];
      for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1));
      const u = function(t, e, r) {
        if (n.randomUUID && !e && !t) return n.randomUUID();
        const i = (t = t || {}).random || (t.rng || s)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, e) {
          r = r || 0;
          for (let t = 0; t < 16; ++t) e[r + t] = i[t];
          return e
        }
        return function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (a[t[e + 0]] + a[t[e + 1]] + a[t[e + 2]] + a[t[e + 3]] + "-" + a[t[e + 4]] + a[t[e + 5]] + "-" + a[t[e + 6]] + a[t[e + 7]] + "-" + a[t[e + 8]] + a[t[e + 9]] + "-" + a[t[e + 10]] + a[t[e + 11]] + a[t[e + 12]] + a[t[e + 13]] + a[t[e + 14]] + a[t[e + 15]]).toLowerCase()
        }(i)
      }
    }
  }
]);
//# sourceMappingURL=91505e1d1a4b54ba58b5.js.map