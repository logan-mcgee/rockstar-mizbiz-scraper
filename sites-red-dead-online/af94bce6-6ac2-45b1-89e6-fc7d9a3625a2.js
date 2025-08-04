try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "af94bce6-6ac2-45b1-89e6-fc7d9a3625a2", e._sentryDebugIdIdentifier = "sentry-dbid-af94bce6-6ac2-45b1-89e6-fc7d9a3625a2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [3343], {
    45915: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var n = t(63716);
      Object.defineProperty(Intl, "DisplayNames", {
        value: n.DisplayNames,
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
        if ("language" === e) return (0, n.CanonicalizeLocaleList)([a])[0];
        if ("region" === e) {
          if (t = a, !r.test(t)) throw RangeError("invalid region");
          return a.toUpperCase()
        }
        var t, s;
        if ("script" === e) {
          if (s = a, !i.test(s)) throw RangeError("invalid script");
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
      var n = t(20114),
        l = t(54703),
        r = /^([a-z]{2}|[0-9]{3})$/i,
        i = /^[a-z]{4}$/i,
        o = /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i
    },
    63716: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.DisplayNames = void 0;
      var n = t(91299),
        l = t(20114),
        r = t(63199),
        i = t(54703),
        o = t(39368),
        s = function() {
          function e(a, t) {
            if (void 0 === this.constructor) throw TypeError("Constructor Intl.DisplayNames requires 'new'");
            var n = (0, l.CanonicalizeLocaleList)(a);
            t = (0, l.GetOptionsObject)(t);
            var r = Object.create(null),
              i = e.localeData,
              s = (0, l.GetOption)(t, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            r.localeMatcher = s;
            var d = (0, o.ResolveLocale)(Array.from(e.availableLocales), n, r, [], e.localeData, e.getDefaultLocale),
              c = (0, l.GetOption)(t, "style", "string", ["narrow", "short", "long"], "long");
            u(this, "style", c);
            var f = (0, l.GetOption)(t, "type", "string", ["language", "region", "script", "currency", "calendar", "dateTimeField"], void 0);
            if (void 0 === f) throw TypeError('Intl.DisplayNames constructor requires "type" option');
            u(this, "type", f), u(this, "fallback", (0, l.GetOption)(t, "fallback", "string", ["code", "none"], "code")), u(this, "locale", d.locale);
            var p = d.dataLocale,
              y = i[p];
            (0, l.invariant)(!!y, "Missing locale data for ".concat(p)), u(this, "localeData", y), (0, l.invariant)(void 0 !== y, "locale data for ".concat(d.locale, " does not exist."));
            var g = y.types;
            (0, l.invariant)("object" == typeof g && null != g, "invalid types data");
            var v = g[f];
            (0, l.invariant)("object" == typeof v && null != v, "invalid typeFields data");
            var b = (0, l.GetOption)(t, "languageDisplay", "string", ["dialect", "standard"], "dialect");
            if ("language" === f) {
              u(this, "languageDisplay", b);
              var h = g[f][b];
              (0, l.invariant)("object" == typeof h && null != h, "invalid language typeFields data")
            }
            var _ = "language" === f ? g[f][b][c] : g[f][c];
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
                s = new Intl.Locale(o).minimize().toString();
              e.localeData[o] = e.localeData[s] = i, e.availableLocales.add(s), e.availableLocales.add(o), e.__defaultLocale || (e.__defaultLocale = s)
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
            var n, o = (0, l.getMultiInternalSlots)(d, this, "localeData", "style", "fallback"),
              s = o.localeData,
              u = o.style,
              p = o.fallback,
              y = (0, r.CanonicalCodeForDisplayNames)(a, t);
            if ("language" === a) n = function(e, a, t, n, l) {
              var r = a.types.language[e],
                i = r[t][n] || r.long[n];
              if (void 0 !== i) return i;
              var o = /-([a-z]{2}|\d{3})\b/i.exec(n);
              if (o) {
                var s = n.substring(0, o.index) + n.substring(o.index + o[0].length),
                  d = o[1],
                  c = r[t][s] || r.long[s];
                if (void 0 === c || !d) return c;
                var u = a.types.region,
                  f = u[t][d] || u.long[d];
                if (f || "code" === l) return a.patterns.locale.replace("{0}", c).replace("{1}", f || d)
              }
            }(c(this, "languageDisplay"), s, u, y, p);
            else {
              var g = s.types[a];
              n = g[u][y] || g.long[y]
            }
            return void 0 !== n ? n : "code" === p ? t : void 0
          }, e.prototype.resolvedOptions = function() {
            return f(this, "resolvedOptions"), n.__assign({}, (0, l.getMultiInternalSlots)(d, this, "locale", "style", "type", "fallback", "languageDisplay"))
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
        return (0, l.getInternalSlot)(d, e, a)
      }

      function u(e, a, t) {
        (0, l.setInternalSlot)(d, e, a, t)
      }

      function f(e, a) {
        if (!(e instanceof s)) throw TypeError("Method Intl.DisplayNames.prototype.".concat(a, " called on incompatible receiver"))
      }
    }
  }
]);