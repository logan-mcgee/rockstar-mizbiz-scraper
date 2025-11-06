try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ad46e349-e5d8-4f55-a8ca-60d52db0c79f", e._sentryDebugIdIdentifier = "sentry-dbid-ad46e349-e5d8-4f55-a8ca-60d52db0c79f")
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
  [3343], {
    1988: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var n = t(64045);
      Object.defineProperty(Intl, "DisplayNames", {
        value: n.DisplayNames,
        enumerable: !1,
        writable: !0,
        configurable: !0
      })
    },
    56770: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.IsValidDateTimeFieldCode = function(e) {
        return t.indexOf(e) >= 0
      };
      var t = ["era", "year", "quarter", "month", "weekOfYear", "weekday", "day", "dayPeriod", "hour", "minute", "second", "timeZoneName"]
    },
    63790: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.CanonicalCodeForDisplayNames = function(e, a) {
        if ("language" === e) return (0, n.CanonicalizeLocaleList)([a])[0];
        if ("region" === e) {
          if (t = a, !r.test(t)) throw RangeError("invalid region");
          return a.toUpperCase()
        }
        var t, d;
        if ("script" === e) {
          if (d = a, !i.test(d)) throw RangeError("invalid script");
          return "".concat(a[0].toUpperCase()).concat(a.slice(1).toLowerCase())
        }
        if ("calendar" === e) {
          if (! function(e) {
              return o.test(e)
            }(a)) throw RangeError("invalid calendar");
          return a.toLowerCase()
        }
        if ("dateTimeField" === e) {
          if (!(0, l.IsValidDateTimeFieldCode)(a)) throw RangeError("invalid dateTimeField");
          return a
        }
        if ((0, n.invariant)("currency" === e, "invalid type"), !(0, n.IsWellFormedCurrencyCode)(a)) throw RangeError("invalid currency");
        return a.toUpperCase()
      };
      var n = t(62306),
        l = t(56770),
        r = /^([a-z]{2}|[0-9]{3})$/i,
        i = /^[a-z]{4}$/i,
        o = /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i
    },
    64045: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.DisplayNames = void 0;
      var n = t(78322),
        l = t(62306),
        r = t(63790),
        i = t(56770),
        o = t(74578),
        d = function() {
          function e(a, t) {
            if (void 0 === this.constructor) throw TypeError("Constructor Intl.DisplayNames requires 'new'");
            var n = (0, l.CanonicalizeLocaleList)(a);
            t = (0, l.GetOptionsObject)(t);
            var r = Object.create(null),
              i = e.localeData,
              d = (0, l.GetOption)(t, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            r.localeMatcher = d;
            var s = (0, o.ResolveLocale)(Array.from(e.availableLocales), n, r, [], e.localeData, e.getDefaultLocale),
              c = (0, l.GetOption)(t, "style", "string", ["narrow", "short", "long"], "long");
            u(this, "style", c);
            var f = (0, l.GetOption)(t, "type", "string", ["language", "region", "script", "currency", "calendar", "dateTimeField"], void 0);
            if (void 0 === f) throw TypeError('Intl.DisplayNames constructor requires "type" option');
            u(this, "type", f), u(this, "fallback", (0, l.GetOption)(t, "fallback", "string", ["code", "none"], "code")), u(this, "locale", s.locale);
            var p = s.dataLocale,
              y = i[p];
            (0, l.invariant)(!!y, "Missing locale data for ".concat(p)), u(this, "localeData", y), (0, l.invariant)(void 0 !== y, "locale data for ".concat(s.locale, " does not exist."));
            var g = y.types;
            (0, l.invariant)("object" == typeof g && null != g, "invalid types data");
            var b = g[f];
            (0, l.invariant)("object" == typeof b && null != b, "invalid typeFields data");
            var v = (0, l.GetOption)(t, "languageDisplay", "string", ["dialect", "standard"], "dialect");
            if ("language" === f) {
              u(this, "languageDisplay", v);
              var h = g[f][v];
              (0, l.invariant)("object" == typeof h && null != h, "invalid language typeFields data")
            }
            var _ = "language" === f ? g[f][v][c] : g[f][c];
            (0, l.invariant)("object" == typeof _ && null != _, "invalid styleFields data"), u(this, "fields", _)
          }
          return e.supportedLocalesOf = function(a, t) {
            return (0, l.SupportedLocales)(e.availableLocales, (0, l.CanonicalizeLocaleList)(a), t)
          }, e.__addLocaleData = function() {
            for (var a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
            for (var n = 0, l = a; n < l.length; n++) {
              var r = l[n],
                i = r.data,
                o = r.locale,
                d = new Intl.Locale(o).minimize().toString();
              e.localeData[o] = e.localeData[d] = i, e.availableLocales.add(d), e.availableLocales.add(o), e.__defaultLocale || (e.__defaultLocale = d)
            }
          }, e.prototype.of = function(e) {
            f(this, "of");
            var a = c(this, "type"),
              t = (0, l.ToString)(e);
            if (! function(e, a) {
                switch (e) {
                  case "language":
                    return /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-([a-z\d]{5,8}|\d[a-z\d]{3}))*$/i.test(a);
                  case "region":
                    return /^([a-z]{2}|\d{3})$/i.test(a);
                  case "script":
                    return /^[a-z]{4}$/i.test(a);
                  case "currency":
                    return (0, l.IsWellFormedCurrencyCode)(a);
                  case "calendar":
                    return /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i.test(a);
                  case "dateTimeField":
                    return (0, i.IsValidDateTimeFieldCode)(a)
                }
              }(a, t)) throw RangeError("invalid code for Intl.DisplayNames.prototype.of");
            var n, o = (0, l.getMultiInternalSlots)(s, this, "localeData", "style", "fallback"),
              d = o.localeData,
              u = o.style,
              p = o.fallback,
              y = (0, r.CanonicalCodeForDisplayNames)(a, t);
            if ("language" === a) n = function(e, a, t, n, l) {
              var r = a.types.language[e],
                i = r[t][n] || r.long[n];
              if (void 0 !== i) return i;
              var o = /-([a-z]{2}|\d{3})\b/i.exec(n);
              if (o) {
                var d = n.substring(0, o.index) + n.substring(o.index + o[0].length),
                  s = o[1],
                  c = r[t][d] || r.long[d];
                if (void 0 === c || !s) return c;
                var u = a.types.region,
                  f = u[t][s] || u.long[s];
                if (f || "code" === l) return a.patterns.locale.replace("{0}", c).replace("{1}", f || s)
              }
            }(c(this, "languageDisplay"), d, u, y, p);
            else {
              var g = d.types[a];
              n = g[u][y] || g.long[y]
            }
            return void 0 !== n ? n : "code" === p ? t : void 0
          }, e.prototype.resolvedOptions = function() {
            return f(this, "resolvedOptions"), n.__assign({}, (0, l.getMultiInternalSlots)(s, this, "locale", "style", "type", "fallback", "languageDisplay"))
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
        return (0, l.getInternalSlot)(s, e, a)
      }

      function u(e, a, t) {
        (0, l.setInternalSlot)(s, e, a, t)
      }

      function f(e, a) {
        if (!(e instanceof d)) throw TypeError("Method Intl.DisplayNames.prototype.".concat(a, " called on incompatible receiver"))
      }
    }
  }
]);