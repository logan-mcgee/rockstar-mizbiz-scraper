try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e89afe29-4433-452f-93aa-79705931b64e", e._sentryDebugIdIdentifier = "sentry-dbid-e89afe29-4433-452f-93aa-79705931b64e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [8970], {
    5109: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = a(3514),
        l = a(4480),
        r = a(7353);

      function o(e, t) {
        if (!(e instanceof c)) throw new TypeError("Method Intl.ListFormat.prototype.".concat(t, " called on incompatible receiver ").concat(String(e)))
      }

      function i(e) {
        if (void 0 === e) return [];
        for (var t = [], a = 0, n = e; a < n.length; a++) {
          var l = n[a];
          if ("string" != typeof l) throw new TypeError("array list[".concat(e.indexOf(l), "] is not type String"));
          t.push(l)
        }
        return t
      }

      function s(e, t, a) {
        var n = a.length;
        if (0 === n) return [];
        if (2 === n) return _((0, l.getInternalSlot)(e, t, "templatePair"), {
          0: {
            type: "element",
            value: a[0]
          },
          1: {
            type: "element",
            value: a[1]
          }
        });
        for (var r = {
            type: "element",
            value: a[n - 1]
          }, o = n - 2; o >= 0;) r = _(0 === o ? (0, l.getInternalSlot)(e, t, "templateStart") : o < n - 2 ? (0, l.getInternalSlot)(e, t, "templateMiddle") : (0, l.getInternalSlot)(e, t, "templateEnd"), {
          0: {
            type: "element",
            value: a[o]
          },
          1: r
        }), o--;
        return r
      }

      function _(e, t) {
        for (var a = [], n = 0, r = (0, l.PartitionPattern)(e); n < r.length; n++) {
          var o = r[n],
            i = o.type;
          if ((0, l.isLiteralPart)(o)) a.push({
            type: "literal",
            value: o.value
          });
          else {
            (0, l.invariant)(i in t, "".concat(i, " is missing from placables"));
            var s = t[i];
            Array.isArray(s) ? a.push.apply(a, s) : a.push(s)
          }
        }
        return a
      }
      var c = function() {
        function e(t, a) {
          if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.ListFormat must be called with 'new'");
          (0, l.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "initializedListFormat", !0);
          var n = (0, l.CanonicalizeLocaleList)(t),
            o = Object.create(null),
            i = (0, l.GetOptionsObject)(a),
            s = (0, l.GetOption)(i, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
          o.localeMatcher = s;
          var _ = e.localeData,
            c = (0, r.ResolveLocale)(e.availableLocales, n, o, e.relevantExtensionKeys, _, e.getDefaultLocale);
          (0, l.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "locale", c.locale);
          var f = (0, l.GetOption)(i, "type", "string", ["conjunction", "disjunction", "unit"], "conjunction");
          (0, l.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "type", f);
          var d = (0, l.GetOption)(i, "style", "string", ["long", "short", "narrow"], "long");
          (0, l.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "style", d);
          var u = c.dataLocale,
            p = _[u];
          (0, l.invariant)(!!p, "Missing locale data for ".concat(u));
          var y = p[f][d];
          (0, l.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templatePair", y.pair), (0, l.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateStart", y.start), (0, l.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateMiddle", y.middle), (0, l.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateEnd", y.end)
        }
        return e.prototype.format = function(t) {
          o(this, "format");
          var a = "",
            n = s(e.__INTERNAL_SLOT_MAP__, this, i(t));
          if (!Array.isArray(n)) return n.value;
          for (var l = 0, r = n; l < r.length; l++) a += r[l].value;
          return a
        }, e.prototype.formatToParts = function(t) {
          o(this, "format");
          var a = s(e.__INTERNAL_SLOT_MAP__, this, i(t));
          if (!Array.isArray(a)) return [a];
          for (var l = [], r = 0, _ = a; r < _.length; r++) {
            var c = _[r];
            l.push(n.__assign({}, c))
          }
          return l
        }, e.prototype.resolvedOptions = function() {
          return o(this, "resolvedOptions"), {
            locale: (0, l.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "locale"),
            type: (0, l.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "type"),
            style: (0, l.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "style")
          }
        }, e.supportedLocalesOf = function(t, a) {
          return (0, l.SupportedLocales)(e.availableLocales, (0, l.CanonicalizeLocaleList)(t), a)
        }, e.__addLocaleData = function() {
          for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
          for (var n = 0, l = t; n < l.length; n++) {
            var r = l[n],
              o = r.data,
              i = r.locale,
              s = new Intl.Locale(i).minimize().toString();
            e.localeData[i] = e.localeData[s] = o, e.availableLocales.add(s), e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = s)
          }
        }, e.getDefaultLocale = function() {
          return e.__defaultLocale
        }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = [], e.polyfilled = !0, e.__INTERNAL_SLOT_MAP__ = new WeakMap, e
      }();
      t.default = c;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(c.prototype, Symbol.toStringTag, {
          value: "Intl.ListFormat",
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(c.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(c.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    8204: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = a(3514).__importDefault(a(5109));
      Object.defineProperty(Intl, "ListFormat", {
        value: n.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    }
  }
]);