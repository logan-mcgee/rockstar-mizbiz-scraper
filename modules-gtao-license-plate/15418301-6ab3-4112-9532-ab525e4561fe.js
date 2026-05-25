try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "15418301-6ab3-4112-9532-ab525e4561fe", e._sentryDebugIdIdentifier = "sentry-dbid-15418301-6ab3-4112-9532-ab525e4561fe")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [4917], {
    90567(e, t, r) {
      r.d(t, {
        A: () => l
      });
      const a = {
          getcanonicallocales: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 98458)),
            polyfill: () => r.e(5018).then(r.bind(r, 5364))
          },
          locale: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 88182)),
            polyfill: () => r.e(9615).then(r.bind(r, 13234))
          },
          listformat: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 48785)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(8970)]).then(r.bind(r, 94495)),
            locale: e => r(42768)(`./${e}`)
          },
          displaynames: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 48771)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(3343)]).then(r.bind(r, 99653)),
            locale: e => r(60375)(`./${e}`)
          },
          pluralrules: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 86528)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(314)]).then(r.bind(r, 71816)),
            locale: e => r(9742)(`./${e}`)
          },
          numberformat: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 56689)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(907)]).then(r.bind(r, 35327)),
            locale: e => r(19051)(`./${e}`)
          },
          relativetimeformat: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 53025)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(8391)]).then(r.bind(r, 27215)),
            locale: e => r(94911)(`./${e}`)
          },
          datetimeformat: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 91790)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(4731)]).then(r.bind(r, 10778)),
            locale: e => Promise.all([r.e(6280).then(r.t.bind(r, 11609, 23)), r(12011)(`./${e}`)])
          }
        },
        n = {
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
            shouldPolyfill: a
          } = await e.should();
          return !!a(e.locale ? t : null) && (await e.polyfill(), e.locale && await e.locale(t), !0)
        }, l = async (e, t) => {
          if (!e) throw new Error("Please provide the desired locale");
          if (!t || !t.length) throw new Error(`Please provide the list of polyfills to load, supported ones are: ${Object.keys(n).join(", ")}`);
          const r = [];
          let l = 0;
          for (const i of t) {
            if (!i || !n[i]) throw new Error(`Unsupported polyfill: ${i}. Supported ones are: ${Object.keys(n).join(", ")}`);
            for (const t of n[i]) - 1 === r.indexOf(t) && (await o(a[t], e) && l++, r.push(t))
          }
          return l
        }
    },
    73747(e, t, r) {
      r.d(t, {
        E: () => C
      });
      var a = r(51177),
        n = r(4888),
        o = r(95729),
        l = r(48790),
        i = r(98373);

      function s(e, t) {
        return Object.keys(e).reduce(function(r, n) {
          return r[n] = (0, a.__assign)({
            timeZone: t
          }, e[n]), r
        }, {})
      }

      function u(e, t) {
        return Object.keys((0, a.__assign)((0, a.__assign)({}, e), t)).reduce(function(r, n) {
          return r[n] = (0, a.__assign)((0, a.__assign)({}, e[n] || {}), t[n] || {}), r
        }, {})
      }

      function m(e, t) {
        if (!t) return e;
        var r = o.S.formats;
        return (0, a.__assign)((0, a.__assign)((0, a.__assign)({}, r), e), {
          date: u(s(r.date, t), s(e.date || {}, t)),
          time: u(s(r.time, t), s(e.time || {}, t))
        })
      }
      var c = function(e, t, r, o, s) {
          var u = e.locale,
            c = e.formats,
            f = e.messages,
            d = e.defaultLocale,
            g = e.defaultFormats,
            p = e.fallbackOnEmptyString,
            y = e.onError,
            h = e.timeZone,
            b = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var v = r.id,
            _ = r.defaultMessage;
          (0, i.V1)(!!v, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var w = String(v),
            E = f && Object.prototype.hasOwnProperty.call(f, w) && f[w];
          if (Array.isArray(E) && 1 === E.length && E[0].type === n.ZE.literal) return E[0].value;
          if (!o && E && "string" == typeof E && !b) return E.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (o = (0, a.__assign)((0, a.__assign)({}, b), o || {}), c = m(c, h), g = m(g, h), !E) {
            if (!1 === p && "" === E) return E;
            if ((!_ || u && u.toLowerCase() !== d.toLowerCase()) && y(new l.sb(r, u)), _) try {
              return t.getMessageFormat(_, d, g, s).format(o)
            } catch (e) {
              return y(new l.Ho('Error formatting default message for: "'.concat(w, '", rendering default message verbatim'), u, r, e)), "string" == typeof _ ? _ : w
            }
            return w
          }
          try {
            return t.getMessageFormat(E, u, c, (0, a.__assign)({
              formatters: t
            }, s || {})).format(o)
          } catch (e) {
            y(new l.Ho('Error formatting message: "'.concat(w, '", using ').concat(_ ? "default message" : "id", " as fallback."), u, r, e))
          }
          if (_) try {
            return t.getMessageFormat(_, d, g, s).format(o)
          } catch (e) {
            y(new l.Ho('Error formatting the default message for: "'.concat(w, '", rendering message verbatim'), u, r, e))
          }
          return "string" == typeof E ? E : "string" == typeof _ ? _ : w
        },
        f = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function d(e, t, r, n) {
        var o = e.locale,
          l = e.formats,
          s = e.onError,
          u = e.timeZone;
        void 0 === n && (n = {});
        var m = n.format,
          c = (0, a.__assign)((0, a.__assign)({}, u && {
            timeZone: u
          }), m && (0, i.F3)(l, t, m, s)),
          d = (0, i.J9)(n, f, c);
        return "time" !== t || d.hour || d.minute || d.second || d.timeStyle || d.dateStyle || (d = (0, a.__assign)((0, a.__assign)({}, d), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, d)
      }

      function g(e, t) {
        for (var r = [], a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
        var n = r[0],
          o = r[1],
          i = void 0 === o ? {} : o,
          s = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return d(e, "date", t, i).format(s)
        } catch (t) {
          e.onError(new l.pg("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function p(e, t) {
        for (var r = [], a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
        var n = r[0],
          o = r[1],
          i = void 0 === o ? {} : o,
          s = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return d(e, "time", t, i).format(s)
        } catch (t) {
          e.onError(new l.pg("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function y(e, t) {
        for (var r = [], a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
        var n = r[0],
          o = r[1],
          i = r[2],
          s = void 0 === i ? {} : i,
          u = "string" == typeof n ? new Date(n || 0) : n,
          m = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return d(e, "dateTimeRange", t, s).formatRange(u, m)
        } catch (t) {
          e.onError(new l.pg("Error formatting date time range.", e.locale, t))
        }
        return String(u)
      }

      function h(e, t) {
        for (var r = [], a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
        var n = r[0],
          o = r[1],
          i = void 0 === o ? {} : o,
          s = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return d(e, "date", t, i).formatToParts(s)
        } catch (t) {
          e.onError(new l.pg("Error formatting date.", e.locale, t))
        }
        return []
      }

      function b(e, t) {
        for (var r = [], a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
        var n = r[0],
          o = r[1],
          i = void 0 === o ? {} : o,
          s = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return d(e, "time", t, i).formatToParts(s)
        } catch (t) {
          e.onError(new l.pg("Error formatting time.", e.locale, t))
        }
        return []
      }
      var v = r(22506),
        _ = ["style", "type", "fallback", "languageDisplay"];

      function w(e, t, r, a) {
        var n = e.locale,
          o = e.onError;
        Intl.DisplayNames || o(new v.IF('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', v.O4.MISSING_INTL_API));
        var s = (0, i.J9)(a, _);
        try {
          return t(n, s).of(r)
        } catch (e) {
          o(new l.pg("Error formatting display name.", n, e))
        }
      }
      var E = ["type", "style"],
        T = Date.now();

      function F(e, t, r, a) {
        void 0 === a && (a = {});
        var n = I(e, t, r, a).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === n.length ? n[0] : 0 === n.length ? "" : n
      }

      function I(e, t, r, n) {
        var o = e.locale,
          s = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || s(new v.IF('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', v.O4.MISSING_INTL_API));
        var u = (0, i.J9)(n, E);
        try {
          var m = {},
            c = Array.from(r).map(function(e, t) {
              if ("object" == typeof e && null !== e) {
                var r = function(e) {
                  return "".concat(T, "_").concat(e, "_").concat(T)
                }(t);
                return m[r] = e, r
              }
              return String(e)
            });
          return t(o, u).formatToParts(c).map(function(e) {
            return "literal" === e.type ? e : (0, a.__assign)((0, a.__assign)({}, e), {
              value: m[e.value] || e.value
            })
          })
        } catch (e) {
          s(new l.pg("Error formatting list.", o, e))
        }
        return r
      }
      var P = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function D(e, t, r) {
        var a = e.locale,
          n = e.formats,
          o = e.onError;
        void 0 === r && (r = {});
        var l = r.format,
          s = l && (0, i.F3)(n, "number", l, o) || {};
        return t(a, (0, i.J9)(r, P, s))
      }

      function S(e, t, r, a) {
        void 0 === a && (a = {});
        try {
          return D(e, t, a).format(r)
        } catch (t) {
          e.onError(new l.pg("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function k(e, t, r, a) {
        void 0 === a && (a = {});
        try {
          return D(e, t, a).formatToParts(r)
        } catch (t) {
          e.onError(new l.pg("Error formatting number.", e.locale, t))
        }
        return []
      }
      var M = ["type"];

      function j(e, t, r, a) {
        var n = e.locale,
          o = e.onError;
        void 0 === a && (a = {}), Intl.PluralRules || o(new v.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', v.O4.MISSING_INTL_API));
        var s = (0, i.J9)(a, M);
        try {
          return t(n, s).select(r)
        } catch (e) {
          o(new l.pg("Error formatting plural.", n, e))
        }
        return "other"
      }
      var N = ["numeric", "style"];

      function R(e, t, r, a, n) {
        void 0 === n && (n = {}), a || (a = "second"), Intl.RelativeTimeFormat || e.onError(new v.IF('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', v.O4.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var a = e.locale,
              n = e.formats,
              o = e.onError;
            void 0 === r && (r = {});
            var l = r.format,
              s = !!l && (0, i.F3)(n, "relative", l, o) || {};
            return t(a, (0, i.J9)(r, N, s))
          }(e, t, n).format(r, a)
        } catch (t) {
          e.onError(new l.pg("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var L = r(78845),
        O = r(2603);

      function x(e) {
        return e ? Object.keys(e).reduce(function(t, r) {
          var a = e[r];
          return t[r] = (0, L.RK)(a) ? (0, O.yU)(a) : a, t
        }, {}) : e
      }
      var A = function(e, t, r, n) {
          for (var o = [], l = 4; l < arguments.length; l++) o[l - 4] = arguments[l];
          var i = x(n),
            s = c.apply(void 0, (0, a.__spreadArray)([e, t, r, i], o, !1));
          return Array.isArray(s) ? (0, O.SP)(s) : s
        },
        C = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, a.__rest)(e, ["defaultRichTextElements"]),
            o = x(r),
            s = function(e, t) {
              var r = (0, i.GT)(t),
                n = (0, a.__assign)((0, a.__assign)({}, i.JF), e),
                o = n.locale,
                s = n.defaultLocale,
                u = n.onError;
              return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && u ? u(new l.hr('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && u && u(new l.hr('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (u && u(new l.uo('"locale" was not configured, using "'.concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
                function(e) {
                  var t;
                  e.onWarn && e.defaultRichTextElements && "string" == typeof((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
                }(n), (0, a.__assign)((0, a.__assign)({}, n), {
                  formatters: r,
                  formatNumber: S.bind(null, n, r.getNumberFormat),
                  formatNumberToParts: k.bind(null, n, r.getNumberFormat),
                  formatRelativeTime: R.bind(null, n, r.getRelativeTimeFormat),
                  formatDate: g.bind(null, n, r.getDateTimeFormat),
                  formatDateToParts: h.bind(null, n, r.getDateTimeFormat),
                  formatTime: p.bind(null, n, r.getDateTimeFormat),
                  formatDateTimeRange: y.bind(null, n, r.getDateTimeFormat),
                  formatTimeToParts: b.bind(null, n, r.getDateTimeFormat),
                  formatPlural: j.bind(null, n, r.getPluralRules),
                  formatMessage: c.bind(null, n, r),
                  $t: c.bind(null, n, r),
                  formatList: F.bind(null, n, r.getListFormat),
                  formatListToParts: I.bind(null, n, r.getListFormat),
                  formatDisplayName: w.bind(null, n, r.getDisplayNames)
                })
            }((0, a.__assign)((0, a.__assign)((0, a.__assign)({}, O.JF), n), {
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
          return (0, a.__assign)((0, a.__assign)({}, s), {
            formatMessage: A.bind(null, u, s.formatters),
            $t: A.bind(null, u, s.formatters)
          })
        }
    },
    13124(e, t, r) {
      r.d(t, {
        A: () => u
      });
      var a = r(51177),
        n = r(93082),
        o = r(2603),
        l = r(74775);

      function i(e) {
        var t = (0, l.A)(),
          r = t.formatMessage,
          a = t.textComponent,
          o = void 0 === a ? n.Fragment : a,
          i = e.id,
          s = e.description,
          u = e.defaultMessage,
          m = e.values,
          c = e.children,
          f = e.tagName,
          d = void 0 === f ? o : f,
          g = r({
            id: i,
            description: s,
            defaultMessage: u
          }, m, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof c ? c(Array.isArray(g) ? g : [g]) : d ? n.createElement(d, null, g) : n.createElement(n.Fragment, null, g)
      }
      i.displayName = "FormattedMessage";
      var s = n.memo(i, function(e, t) {
        var r = e.values,
          n = (0, a.__rest)(e, ["values"]),
          l = t.values,
          i = (0, a.__rest)(t, ["values"]);
        return (0, o.bN)(l, r) && (0, o.bN)(n, i)
      });
      s.displayName = "MemoizedFormattedMessage";
      const u = s
    },
    54422(e, t, r) {
      r.d(t, {
        A: () => c
      });
      var a = r(51177),
        n = r(98373),
        o = r(93082),
        l = r(2603),
        i = r(73747),
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
      var m = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cache = (0, n.MT)(), t.state = {
            cache: t.cache,
            intl: (0, i.E)(u(t.props), t.cache),
            prevConfig: u(t.props)
          }, t
        }
        return (0, a.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            a = t.cache,
            n = u(e);
          return (0, l.bN)(r, n) ? null : {
            intl: (0, i.E)(n, a),
            prevConfig: n
          }
        }, t.prototype.render = function() {
          return (0, l.HM)(this.state.intl), o.createElement(s.Kq, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = l.JF, t
      }(o.PureComponent);
      const c = m
    }
  }
]);