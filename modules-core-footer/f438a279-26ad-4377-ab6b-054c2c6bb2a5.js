try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f438a279-26ad-4377-ab6b-054c2c6bb2a5", e._sentryDebugIdIdentifier = "sentry-dbid-f438a279-26ad-4377-ab6b-054c2c6bb2a5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [3343], {
    45915: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var l = t(63716);
      Object.defineProperty(Intl, "DisplayNames", {
        value: l.DisplayNames,
        enumerable: !1,
        writable: !0,
        configurable: !0
      })
    },
    54703: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.IsValidDateTimeFieldCode = function(e) {
        return t.indexOf(e) >= 0
      };
      var t = ["era", "year", "quarter", "month", "weekOfYear", "weekday", "day", "dayPeriod", "hour", "minute", "second", "timeZoneName"]
    },
    63199: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.CanonicalCodeForDisplayNames = function(e, a) {
        if ("language" === e) return (0, l.CanonicalizeLocaleList)([a])[0];
        if ("region" === e) {
          if (t = a, !r.test(t)) throw RangeError("invalid region");
          return a.toUpperCase()
        }
        var t, s;
        if ("script" === e) {
          if (s = a, !n.test(s)) throw RangeError("invalid script");
          return "".concat(a[0].toUpperCase()).concat(a.slice(1).toLowerCase())
        }
        if ("calendar" === e) {
          if (! function(e) {
              return i.test(e)
            }(a)) throw RangeError("invalid calendar");
          return a.toLowerCase()
        }
        if ("dateTimeField" === e) {
          if (!(0, o.IsValidDateTimeFieldCode)(a)) throw RangeError("invalid dateTimeField");
          return a
        }
        if ((0, l.invariant)("currency" === e, "invalid type"), !(0, l.IsWellFormedCurrencyCode)(a)) throw RangeError("invalid currency");
        return a.toUpperCase()
      };
      var l = t(20114),
        o = t(54703),
        r = /^([a-z]{2}|[0-9]{3})$/i,
        n = /^[a-z]{4}$/i,
        i = /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i
    },
    63716: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.DisplayNames = void 0;
      var l = t(91299),
        o = t(20114),
        r = t(63199),
        n = t(54703),
        i = t(39368),
        s = function() {
          function e(a, t) {
            if (void 0 === this.constructor) throw TypeError("Constructor Intl.DisplayNames requires 'new'");
            var l = (0, o.CanonicalizeLocaleList)(a);
            t = (0, o.GetOptionsObject)(t);
            var r = Object.create(null),
              n = e.localeData,
              s = (0, o.GetOption)(t, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            r.localeMatcher = s;
            var d = (0, i.ResolveLocale)(Array.from(e.availableLocales), l, r, [], e.localeData, e.getDefaultLocale),
              c = (0, o.GetOption)(t, "style", "string", ["narrow", "short", "long"], "long");
            u(this, "style", c);
            var f = (0, o.GetOption)(t, "type", "string", ["language", "region", "script", "currency", "calendar", "dateTimeField"], void 0);
            if (void 0 === f) throw TypeError('Intl.DisplayNames constructor requires "type" option');
            u(this, "type", f), u(this, "fallback", (0, o.GetOption)(t, "fallback", "string", ["code", "none"], "code")), u(this, "locale", d.locale);
            var p = d.dataLocale,
              y = n[p];
            (0, o.invariant)(!!y, "Missing locale data for ".concat(p)), u(this, "localeData", y), (0, o.invariant)(void 0 !== y, "locale data for ".concat(d.locale, " does not exist."));
            var g = y.types;
            (0, o.invariant)("object" == typeof g && null != g, "invalid types data");
            var b = g[f];
            (0, o.invariant)("object" == typeof b && null != b, "invalid typeFields data");
            var v = (0, o.GetOption)(t, "languageDisplay", "string", ["dialect", "standard"], "dialect");
            if ("language" === f) {
              u(this, "languageDisplay", v);
              var h = g[f][v];
              (0, o.invariant)("object" == typeof h && null != h, "invalid language typeFields data")
            }
            var m = "language" === f ? g[f][v][c] : g[f][c];
            (0, o.invariant)("object" == typeof m && null != m, "invalid styleFields data"), u(this, "fields", m)
          }
          return e.supportedLocalesOf = function(a, t) {
            return (0, o.SupportedLocales)(e.availableLocales, (0, o.CanonicalizeLocaleList)(a), t)
          }, e.__addLocaleData = function() {
            for (var a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
            for (var l = 0, o = a; l < o.length; l++) {
              var r = o[l],
                n = r.data,
                i = r.locale,
                s = new Intl.Locale(i).minimize().toString();
              e.localeData[i] = e.localeData[s] = n, e.availableLocales.add(s), e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = s)
            }
          }, e.prototype.of = function(e) {
            f(this, "of");
            var a = c(this, "type"),
              t = (0, o.ToString)(e);
            if (! function(e, a) {
                switch (e) {
                  case "language":
                    return /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-([a-z\d]{5,8}|\d[a-z\d]{3}))*$/i.test(a);
                  case "region":
                    return /^([a-z]{2}|\d{3})$/i.test(a);
                  case "script":
                    return /^[a-z]{4}$/i.test(a);
                  case "currency":
                    return (0, o.IsWellFormedCurrencyCode)(a);
                  case "calendar":
                    return /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i.test(a);
                  case "dateTimeField":
                    return (0, n.IsValidDateTimeFieldCode)(a)
                }
              }(a, t)) throw RangeError("invalid code for Intl.DisplayNames.prototype.of");
            var l, i = (0, o.getMultiInternalSlots)(d, this, "localeData", "style", "fallback"),
              s = i.localeData,
              u = i.style,
              p = i.fallback,
              y = (0, r.CanonicalCodeForDisplayNames)(a, t);
            if ("language" === a) l = function(e, a, t, l, o) {
              var r = a.types.language[e],
                n = r[t][l] || r.long[l];
              if (void 0 !== n) return n;
              var i = /-([a-z]{2}|\d{3})\b/i.exec(l);
              if (i) {
                var s = l.substring(0, i.index) + l.substring(i.index + i[0].length),
                  d = i[1],
                  c = r[t][s] || r.long[s];
                if (void 0 === c || !d) return c;
                var u = a.types.region,
                  f = u[t][d] || u.long[d];
                if (f || "code" === o) return a.patterns.locale.replace("{0}", c).replace("{1}", f || d)
              }
            }(c(this, "languageDisplay"), s, u, y, p);
            else {
              var g = s.types[a];
              l = g[u][y] || g.long[y]
            }
            return void 0 !== l ? l : "code" === p ? t : void 0
          }, e.prototype.resolvedOptions = function() {
            return f(this, "resolvedOptions"), l.__assign({}, (0, o.getMultiInternalSlots)(d, this, "locale", "style", "type", "fallback", "languageDisplay"))
          }, e.getDefaultLocale = function() {
            return e.__defaultLocale
          }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.polyfilled = !0, e
        }();
      a.DisplayNames = s;
      try {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(s.prototype, Symbol.toStringTag, {
          value: "Intl.DisplayNames",
          configurable: !0,
          enumerable: !1,
          writable: !1
        }), Object.defineProperty(s, "length", {
          value: 2,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
      var d = new WeakMap;

      function c(e, a) {
        return (0, o.getInternalSlot)(d, e, a)
      }

      function u(e, a, t) {
        (0, o.setInternalSlot)(d, e, a, t)
      }

      function f(e, a) {
        if (!(e instanceof s)) throw TypeError("Method Intl.DisplayNames.prototype.".concat(a, " called on incompatible receiver"))
      }
    }
  }
]);