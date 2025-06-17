! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "866ee47f-e45c-4522-a6d2-6b22605ebce1", e._sentryDebugIdIdentifier = "sentry-dbid-866ee47f-e45c-4522-a6d2-6b22605ebce1")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [3343], {
    37056: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.DisplayNames = void 0;
      var l = t(23514),
        n = t(64480),
        r = t(45771),
        o = t(78939),
        i = t(27353),
        d = function() {
          function e(a, t) {
            if (void 0 === this.constructor) throw TypeError("Constructor Intl.DisplayNames requires 'new'");
            var l = (0, n.CanonicalizeLocaleList)(a);
            t = (0, n.GetOptionsObject)(t);
            var r = Object.create(null),
              o = e.localeData,
              d = (0, n.GetOption)(t, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            r.localeMatcher = d;
            var s = (0, i.ResolveLocale)(Array.from(e.availableLocales), l, r, [], e.localeData, e.getDefaultLocale),
              c = (0, n.GetOption)(t, "style", "string", ["narrow", "short", "long"], "long");
            u(this, "style", c);
            var f = (0, n.GetOption)(t, "type", "string", ["language", "region", "script", "currency", "calendar", "dateTimeField"], void 0);
            if (void 0 === f) throw TypeError('Intl.DisplayNames constructor requires "type" option');
            u(this, "type", f), u(this, "fallback", (0, n.GetOption)(t, "fallback", "string", ["code", "none"], "code")), u(this, "locale", s.locale);
            var p = s.dataLocale,
              y = o[p];
            (0, n.invariant)(!!y, "Missing locale data for ".concat(p)), u(this, "localeData", y), (0, n.invariant)(void 0 !== y, "locale data for ".concat(s.locale, " does not exist."));
            var g = y.types;
            (0, n.invariant)("object" == typeof g && null != g, "invalid types data");
            var b = g[f];
            (0, n.invariant)("object" == typeof b && null != b, "invalid typeFields data");
            var v = (0, n.GetOption)(t, "languageDisplay", "string", ["dialect", "standard"], "dialect");
            if ("language" === f) {
              u(this, "languageDisplay", v);
              var _ = g[f][v];
              (0, n.invariant)("object" == typeof _ && null != _, "invalid language typeFields data")
            }
            var h = "language" === f ? g[f][v][c] : g[f][c];
            (0, n.invariant)("object" == typeof h && null != h, "invalid styleFields data"), u(this, "fields", h)
          }
          return e.supportedLocalesOf = function(a, t) {
            return (0, n.SupportedLocales)(e.availableLocales, (0, n.CanonicalizeLocaleList)(a), t)
          }, e.__addLocaleData = function() {
            for (var a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
            for (var l = 0, n = a; l < n.length; l++) {
              var r = n[l],
                o = r.data,
                i = r.locale,
                d = new Intl.Locale(i).minimize().toString();
              e.localeData[i] = e.localeData[d] = o, e.availableLocales.add(d), e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = d)
            }
          }, e.prototype.of = function(e) {
            f(this, "of");
            var a = c(this, "type"),
              t = (0, n.ToString)(e);
            if (! function(e, a) {
                switch (e) {
                  case "language":
                    return /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-([a-z\d]{5,8}|\d[a-z\d]{3}))*$/i.test(a);
                  case "region":
                    return /^([a-z]{2}|\d{3})$/i.test(a);
                  case "script":
                    return /^[a-z]{4}$/i.test(a);
                  case "currency":
                    return (0, n.IsWellFormedCurrencyCode)(a);
                  case "calendar":
                    return /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i.test(a);
                  case "dateTimeField":
                    return (0, o.IsValidDateTimeFieldCode)(a)
                }
              }(a, t)) throw RangeError("invalid code for Intl.DisplayNames.prototype.of");
            var l, i = (0, n.getMultiInternalSlots)(s, this, "localeData", "style", "fallback"),
              d = i.localeData,
              u = i.style,
              p = i.fallback,
              y = (0, r.CanonicalCodeForDisplayNames)(a, t);
            if ("language" === a) l = function(e, a, t, l, n) {
              var r = a.types.language[e],
                o = r[t][l] || r.long[l];
              if (void 0 !== o) return o;
              var i = /-([a-z]{2}|\d{3})\b/i.exec(l);
              if (i) {
                var d = l.substring(0, i.index) + l.substring(i.index + i[0].length),
                  s = i[1],
                  c = r[t][d] || r.long[d];
                if (void 0 === c || !s) return c;
                var u = a.types.region,
                  f = u[t][s] || u.long[s];
                if (f || "code" === n) return a.patterns.locale.replace("{0}", c).replace("{1}", f || s)
              }
            }(c(this, "languageDisplay"), d, u, y, p);
            else {
              var g = d.types[a];
              l = g[u][y] || g.long[y]
            }
            return void 0 !== l ? l : "code" === p ? t : void 0
          }, e.prototype.resolvedOptions = function() {
            return f(this, "resolvedOptions"), l.__assign({}, (0, n.getMultiInternalSlots)(s, this, "locale", "style", "type", "fallback", "languageDisplay"))
          }, e.getDefaultLocale = function() {
            return e.__defaultLocale
          }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.polyfilled = !0, e
        }();
      a.DisplayNames = d;
      try {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(d.prototype, Symbol.toStringTag, {
          value: "Intl.DisplayNames",
          configurable: !0,
          enumerable: !1,
          writable: !1
        }), Object.defineProperty(d, "length", {
          value: 2,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
      var s = new WeakMap;

      function c(e, a) {
        return (0, n.getInternalSlot)(s, e, a)
      }

      function u(e, a, t) {
        (0, n.setInternalSlot)(s, e, a, t)
      }

      function f(e, a) {
        if (!(e instanceof d)) throw TypeError("Method Intl.DisplayNames.prototype.".concat(a, " called on incompatible receiver"))
      }
    },
    45771: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.CanonicalCodeForDisplayNames = function(e, a) {
        if ("language" === e) return (0, l.CanonicalizeLocaleList)([a])[0];
        if ("region" === e) {
          if (t = a, !r.test(t)) throw RangeError("invalid region");
          return a.toUpperCase()
        }
        var t, d;
        if ("script" === e) {
          if (d = a, !o.test(d)) throw RangeError("invalid script");
          return "".concat(a[0].toUpperCase()).concat(a.slice(1).toLowerCase())
        }
        if ("calendar" === e) {
          if (! function(e) {
              return i.test(e)
            }(a)) throw RangeError("invalid calendar");
          return a.toLowerCase()
        }
        if ("dateTimeField" === e) {
          if (!(0, n.IsValidDateTimeFieldCode)(a)) throw RangeError("invalid dateTimeField");
          return a
        }
        if ((0, l.invariant)("currency" === e, "invalid type"), !(0, l.IsWellFormedCurrencyCode)(a)) throw RangeError("invalid currency");
        return a.toUpperCase()
      };
      var l = t(64480),
        n = t(78939),
        r = /^([a-z]{2}|[0-9]{3})$/i,
        o = /^[a-z]{4}$/i,
        i = /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i
    },
    78939: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.IsValidDateTimeFieldCode = function(e) {
        return t.indexOf(e) >= 0
      };
      var t = ["era", "year", "quarter", "month", "weekOfYear", "weekday", "day", "dayPeriod", "hour", "minute", "second", "timeZoneName"]
    },
    89039: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var l = t(37056);
      Object.defineProperty(Intl, "DisplayNames", {
        value: l.DisplayNames,
        enumerable: !1,
        writable: !0,
        configurable: !0
      })
    }
  }
]);