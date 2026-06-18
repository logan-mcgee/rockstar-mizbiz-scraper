try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6f235a09-387b-4ed7-aacf-1eabec47b8f1", e._sentryDebugIdIdentifier = "sentry-dbid-6f235a09-387b-4ed7-aacf-1eabec47b8f1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [959], {
    73747(e, t, r) {
      r.d(t, {
        E: () => A
      });
      var n = r(51177),
        a = r(4888),
        o = r(95729),
        i = r(48790),
        l = r(98373);

      function s(e, t) {
        return Object.keys(e).reduce(function(r, a) {
          return r[a] = (0, n.Cl)({
            timeZone: t
          }, e[a]), r
        }, {})
      }

      function u(e, t) {
        return Object.keys((0, n.Cl)((0, n.Cl)({}, e), t)).reduce(function(r, a) {
          return r[a] = (0, n.Cl)((0, n.Cl)({}, e[a] || {}), t[a] || {}), r
        }, {})
      }

      function f(e, t) {
        if (!t) return e;
        var r = o.S.formats;
        return (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, r), e), {
          date: u(s(r.date, t), s(e.date || {}, t)),
          time: u(s(r.time, t), s(e.time || {}, t))
        })
      }
      var m = function(e, t, r, o, s) {
          var u = e.locale,
            m = e.formats,
            c = e.messages,
            d = e.defaultLocale,
            g = e.defaultFormats,
            p = e.fallbackOnEmptyString,
            y = e.onError,
            v = e.timeZone,
            h = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var b = r.id,
            E = r.defaultMessage;
          (0, l.V1)(!!b, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var w = String(b),
            T = c && Object.prototype.hasOwnProperty.call(c, w) && c[w];
          if (Array.isArray(T) && 1 === T.length && T[0].type === a.ZE.literal) return T[0].value;
          if (!o && T && "string" == typeof T && !h) return T.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (o = (0, n.Cl)((0, n.Cl)({}, h), o || {}), m = f(m, v), g = f(g, v), !T) {
            if (!1 === p && "" === T) return T;
            if ((!E || u && u.toLowerCase() !== d.toLowerCase()) && y(new i.sb(r, u)), E) try {
              return t.getMessageFormat(E, d, g, s).format(o)
            } catch (e) {
              return y(new i.Ho('Error formatting default message for: "'.concat(w, '", rendering default message verbatim'), u, r, e)), "string" == typeof E ? E : w
            }
            return w
          }
          try {
            return t.getMessageFormat(T, u, m, (0, n.Cl)({
              formatters: t
            }, s || {})).format(o)
          } catch (e) {
            y(new i.Ho('Error formatting message: "'.concat(w, '", using ').concat(E ? "default message" : "id", " as fallback."), u, r, e))
          }
          if (E) try {
            return t.getMessageFormat(E, d, g, s).format(o)
          } catch (e) {
            y(new i.Ho('Error formatting the default message for: "'.concat(w, '", rendering message verbatim'), u, r, e))
          }
          return "string" == typeof T ? T : "string" == typeof E ? E : w
        },
        c = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function d(e, t, r, a) {
        var o = e.locale,
          i = e.formats,
          s = e.onError,
          u = e.timeZone;
        void 0 === a && (a = {});
        var f = a.format,
          m = (0, n.Cl)((0, n.Cl)({}, u && {
            timeZone: u
          }), f && (0, l.F3)(i, t, f, s)),
          d = (0, l.J9)(a, c, m);
        return "time" !== t || d.hour || d.minute || d.second || d.timeStyle || d.dateStyle || (d = (0, n.Cl)((0, n.Cl)({}, d), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, d)
      }

      function g(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(e, "date", t, l).format(s)
        } catch (t) {
          e.onError(new i.pg("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function p(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(e, "time", t, l).format(s)
        } catch (t) {
          e.onError(new i.pg("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function y(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = r[2],
          s = void 0 === l ? {} : l,
          u = "string" == typeof a ? new Date(a || 0) : a,
          f = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return d(e, "dateTimeRange", t, s).formatRange(u, f)
        } catch (t) {
          e.onError(new i.pg("Error formatting date time range.", e.locale, t))
        }
        return String(u)
      }

      function v(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(e, "date", t, l).formatToParts(s)
        } catch (t) {
          e.onError(new i.pg("Error formatting date.", e.locale, t))
        }
        return []
      }

      function h(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          s = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return d(e, "time", t, l).formatToParts(s)
        } catch (t) {
          e.onError(new i.pg("Error formatting time.", e.locale, t))
        }
        return []
      }
      var b = r(22506),
        E = ["style", "type", "fallback", "languageDisplay"];

      function w(e, t, r, n) {
        var a = e.locale,
          o = e.onError;
        Intl.DisplayNames || o(new b.IF('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', b.O4.MISSING_INTL_API));
        var s = (0, l.J9)(n, E);
        try {
          return t(a, s).of(r)
        } catch (e) {
          o(new i.pg("Error formatting display name.", a, e))
        }
      }
      var T = ["type", "style"],
        F = Date.now();

      function C(e, t, r, n) {
        void 0 === n && (n = {});
        var a = I(e, t, r, n).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === a.length ? a[0] : 0 === a.length ? "" : a
      }

      function I(e, t, r, a) {
        var o = e.locale,
          s = e.onError;
        void 0 === a && (a = {}), Intl.ListFormat || s(new b.IF('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', b.O4.MISSING_INTL_API));
        var u = (0, l.J9)(a, T);
        try {
          var f = {},
            m = Array.from(r).map(function(e, t) {
              if ("object" == typeof e && null !== e) {
                var r = function(e) {
                  return "".concat(F, "_").concat(e, "_").concat(F)
                }(t);
                return f[r] = e, r
              }
              return String(e)
            });
          return t(o, u).formatToParts(m).map(function(e) {
            return "literal" === e.type ? e : (0, n.Cl)((0, n.Cl)({}, e), {
              value: f[e.value] || e.value
            })
          })
        } catch (e) {
          s(new i.pg("Error formatting list.", o, e))
        }
        return r
      }
      var D = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function S(e, t, r) {
        var n = e.locale,
          a = e.formats,
          o = e.onError;
        void 0 === r && (r = {});
        var i = r.format,
          s = i && (0, l.F3)(a, "number", i, o) || {};
        return t(n, (0, l.J9)(r, D, s))
      }

      function M(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return S(e, t, n).format(r)
        } catch (t) {
          e.onError(new i.pg("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function _(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return S(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new i.pg("Error formatting number.", e.locale, t))
        }
        return []
      }
      var k = ["type"];

      function N(e, t, r, n) {
        var a = e.locale,
          o = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || o(new b.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', b.O4.MISSING_INTL_API));
        var s = (0, l.J9)(n, k);
        try {
          return t(a, s).select(r)
        } catch (e) {
          o(new i.pg("Error formatting plural.", a, e))
        }
        return "other"
      }
      var R = ["numeric", "style"];

      function j(e, t, r, n, a) {
        void 0 === a && (a = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new b.IF('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', b.O4.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              a = e.formats,
              o = e.onError;
            void 0 === r && (r = {});
            var i = r.format,
              s = !!i && (0, l.F3)(a, "relative", i, o) || {};
            return t(n, (0, l.J9)(r, R, s))
          }(e, t, a).format(r, n)
        } catch (t) {
          e.onError(new i.pg("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var P = r(78845),
        L = r(2603);

      function O(e) {
        return e ? Object.keys(e).reduce(function(t, r) {
          var n = e[r];
          return t[r] = (0, P.RK)(n) ? (0, L.yU)(n) : n, t
        }, {}) : e
      }
      var x = function(e, t, r, a) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var l = O(a),
            s = m.apply(void 0, (0, n.fX)([e, t, r, l], o, !1));
          return Array.isArray(s) ? (0, L.SP)(s) : s
        },
        A = function(e, t) {
          var r = e.defaultRichTextElements,
            a = (0, n.Tt)(e, ["defaultRichTextElements"]),
            o = O(r),
            s = function(e, t) {
              var r = (0, l.GT)(t),
                a = (0, n.Cl)((0, n.Cl)({}, l.JF), e),
                o = a.locale,
                s = a.defaultLocale,
                u = a.onError;
              return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && u ? u(new i.hr('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && u && u(new i.hr('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (u && u(new i.uo('"locale" was not configured, using "'.concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), a.locale = a.defaultLocale || "en"),
                function(e) {
                  var t;
                  e.onWarn && e.defaultRichTextElements && "string" == typeof((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
                }(a), (0, n.Cl)((0, n.Cl)({}, a), {
                  formatters: r,
                  formatNumber: M.bind(null, a, r.getNumberFormat),
                  formatNumberToParts: _.bind(null, a, r.getNumberFormat),
                  formatRelativeTime: j.bind(null, a, r.getRelativeTimeFormat),
                  formatDate: g.bind(null, a, r.getDateTimeFormat),
                  formatDateToParts: v.bind(null, a, r.getDateTimeFormat),
                  formatTime: p.bind(null, a, r.getDateTimeFormat),
                  formatDateTimeRange: y.bind(null, a, r.getDateTimeFormat),
                  formatTimeToParts: h.bind(null, a, r.getDateTimeFormat),
                  formatPlural: N.bind(null, a, r.getPluralRules),
                  formatMessage: m.bind(null, a, r),
                  $t: m.bind(null, a, r),
                  formatList: C.bind(null, a, r.getListFormat),
                  formatListToParts: I.bind(null, a, r.getListFormat),
                  formatDisplayName: w.bind(null, a, r.getDisplayNames)
                })
            }((0, n.Cl)((0, n.Cl)((0, n.Cl)({}, L.JF), a), {
              defaultRichTextElements: o
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
              defaultRichTextElements: o
            };
          return (0, n.Cl)((0, n.Cl)({}, s), {
            formatMessage: x.bind(null, u, s.formatters),
            $t: x.bind(null, u, s.formatters)
          })
        }
    },
    13124(e, t, r) {
      r.d(t, {
        A: () => u
      });
      var n = r(51177),
        a = r(93082),
        o = r(2603),
        i = r(74775);

      function l(e) {
        var t = (0, i.A)(),
          r = t.formatMessage,
          n = t.textComponent,
          o = void 0 === n ? a.Fragment : n,
          l = e.id,
          s = e.description,
          u = e.defaultMessage,
          f = e.values,
          m = e.children,
          c = e.tagName,
          d = void 0 === c ? o : c,
          g = r({
            id: l,
            description: s,
            defaultMessage: u
          }, f, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof m ? m(Array.isArray(g) ? g : [g]) : d ? a.createElement(d, null, g) : a.createElement(a.Fragment, null, g)
      }
      l.displayName = "FormattedMessage";
      var s = a.memo(l, function(e, t) {
        var r = e.values,
          a = (0, n.Tt)(e, ["values"]),
          i = t.values,
          l = (0, n.Tt)(t, ["values"]);
        return (0, o.bN)(i, r) && (0, o.bN)(a, l)
      });
      s.displayName = "MemoizedFormattedMessage";
      const u = s
    },
    54422(e, t, r) {
      r.d(t, {
        A: () => m
      });
      var n = r(51177),
        a = r(98373),
        o = r(93082),
        i = r(2603),
        l = r(73747),
        s = r(21405);

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
      var f = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cache = (0, a.MT)(), t.state = {
            cache: t.cache,
            intl: (0, l.E)(u(t.props), t.cache),
            prevConfig: u(t.props)
          }, t
        }
        return (0, n.C6)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            a = u(e);
          return (0, i.bN)(r, a) ? null : {
            intl: (0, l.E)(a, n),
            prevConfig: a
          }
        }, t.prototype.render = function() {
          return (0, i.HM)(this.state.intl), o.createElement(s.Kq, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = i.JF, t
      }(o.PureComponent);
      const m = f
    }
  }
]);