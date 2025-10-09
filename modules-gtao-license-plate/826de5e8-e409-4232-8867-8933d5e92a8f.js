try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "826de5e8-e409-4232-8867-8933d5e92a8f", e._sentryDebugIdIdentifier = "sentry-dbid-826de5e8-e409-4232-8867-8933d5e92a8f")
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
  [3343], {
    1988: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var l = t(64045);
      Object.defineProperty(Intl, "DisplayNames", {
        value: l.DisplayNames,
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
        if ("language" === e) return (0, l.CanonicalizeLocaleList)([a])[0];
        if ("region" === e) {
          if (t = a, !o.test(t)) throw RangeError("invalid region");
          return a.toUpperCase()
        }
        var t, s;
        if ("script" === e) {
          if (s = a, !r.test(s)) throw RangeError("invalid script");
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
      var l = t(62306),
        n = t(56770),
        o = /^([a-z]{2}|[0-9]{3})$/i,
        r = /^[a-z]{4}$/i,
        i = /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i
    },
    64045: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.DisplayNames = void 0;
      var l = t(78322),
        n = t(62306),
        o = t(63790),
        r = t(56770),
        i = t(74578),
        s = function() {
          function e(a, t) {
            if (void 0 === this.constructor) throw TypeError("Constructor Intl.DisplayNames requires 'new'");
            var l = (0, n.CanonicalizeLocaleList)(a);
            t = (0, n.GetOptionsObject)(t);
            var o = Object.create(null),
              r = e.localeData,
              s = (0, n.GetOption)(t, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            o.localeMatcher = s;
            var d = (0, i.ResolveLocale)(Array.from(e.availableLocales), l, o, [], e.localeData, e.getDefaultLocale),
              c = (0, n.GetOption)(t, "style", "string", ["narrow", "short", "long"], "long");
            u(this, "style", c);
            var f = (0, n.GetOption)(t, "type", "string", ["language", "region", "script", "currency", "calendar", "dateTimeField"], void 0);
            if (void 0 === f) throw TypeError('Intl.DisplayNames constructor requires "type" option');
            u(this, "type", f), u(this, "fallback", (0, n.GetOption)(t, "fallback", "string", ["code", "none"], "code")), u(this, "locale", d.locale);
            var p = d.dataLocale,
              g = r[p];
            (0, n.invariant)(!!g, "Missing locale data for ".concat(p)), u(this, "localeData", g), (0, n.invariant)(void 0 !== g, "locale data for ".concat(d.locale, " does not exist."));
            var y = g.types;
            (0, n.invariant)("object" == typeof y && null != y, "invalid types data");
            var v = y[f];
            (0, n.invariant)("object" == typeof v && null != v, "invalid typeFields data");
            var b = (0, n.GetOption)(t, "languageDisplay", "string", ["dialect", "standard"], "dialect");
            if ("language" === f) {
              u(this, "languageDisplay", b);
              var h = y[f][b];
              (0, n.invariant)("object" == typeof h && null != h, "invalid language typeFields data")
            }
            var m = "language" === f ? y[f][b][c] : y[f][c];
            (0, n.invariant)("object" == typeof m && null != m, "invalid styleFields data"), u(this, "fields", m)
          }
          return e.supportedLocalesOf = function(a, t) {
            return (0, n.SupportedLocales)(e.availableLocales, (0, n.CanonicalizeLocaleList)(a), t)
          }, e.__addLocaleData = function() {
            for (var a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
            for (var l = 0, n = a; l < n.length; l++) {
              var o = n[l],
                r = o.data,
                i = o.locale,
                s = new Intl.Locale(i).minimize().toString();
              e.localeData[i] = e.localeData[s] = r, e.availableLocales.add(s), e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = s)
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
                    return (0, r.IsValidDateTimeFieldCode)(a)
                }
              }(a, t)) throw RangeError("invalid code for Intl.DisplayNames.prototype.of");
            var l, i = (0, n.getMultiInternalSlots)(d, this, "localeData", "style", "fallback"),
              s = i.localeData,
              u = i.style,
              p = i.fallback,
              g = (0, o.CanonicalCodeForDisplayNames)(a, t);
            if ("language" === a) l = function(e, a, t, l, n) {
              var o = a.types.language[e],
                r = o[t][l] || o.long[l];
              if (void 0 !== r) return r;
              var i = /-([a-z]{2}|\d{3})\b/i.exec(l);
              if (i) {
                var s = l.substring(0, i.index) + l.substring(i.index + i[0].length),
                  d = i[1],
                  c = o[t][s] || o.long[s];
                if (void 0 === c || !d) return c;
                var u = a.types.region,
                  f = u[t][d] || u.long[d];
                if (f || "code" === n) return a.patterns.locale.replace("{0}", c).replace("{1}", f || d)
              }
            }(c(this, "languageDisplay"), s, u, g, p);
            else {
              var y = s.types[a];
              l = y[u][g] || y.long[g]
            }
            return void 0 !== l ? l : "code" === p ? t : void 0
          }, e.prototype.resolvedOptions = function() {
            return f(this, "resolvedOptions"), l.__assign({}, (0, n.getMultiInternalSlots)(d, this, "locale", "style", "type", "fallback", "languageDisplay"))
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
        return (0, n.getInternalSlot)(d, e, a)
      }

      function u(e, a, t) {
        (0, n.setInternalSlot)(d, e, a, t)
      }

      function f(e, a) {
        if (!(e instanceof s)) throw TypeError("Method Intl.DisplayNames.prototype.".concat(a, " called on incompatible receiver"))
      }
    }
  }
]);