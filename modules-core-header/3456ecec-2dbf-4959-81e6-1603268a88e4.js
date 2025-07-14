try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "3456ecec-2dbf-4959-81e6-1603268a88e4", e._sentryDebugIdIdentifier = "sentry-dbid-3456ecec-2dbf-4959-81e6-1603268a88e4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8457], {
    5267: (e, o, t) => {
      var n = {
        "./de": [45293, 299],
        "./en": [28085, 5663],
        "./es": [46594, 5530],
        "./fr": [43210, 2466],
        "./it": [53135, 7073],
        "./ja": [30115, 4621],
        "./ko": [48140, 824],
        "./pl": [93122, 2398],
        "./pt": [95626, 9126],
        "./ru": [48559, 3697],
        "./zh": [43572, 1868]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 5267, e.exports = r
    },
    33019: (e, o, t) => {
      var n = {
        "./de": [81261, 6879],
        "./en": [47157, 2243],
        "./es": [8194, 278],
        "./fr": [93034, 9022],
        "./it": [68271, 2365],
        "./ja": [66083, 9377],
        "./ko": [61324, 9028],
        "./pl": [29090, 1242],
        "./pt": [14698, 7970],
        "./ru": [63695, 7453],
        "./zh": [47188, 8880]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 33019, e.exports = r
    },
    35671: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => r.A,
        POSIXLocales: () => h,
        ReactIntlProviderForMocking: () => i.A,
        createDevLocaleHook: () => D,
        createIntl: () => s.E,
        defineMessages: () => n.YK,
        englishLocale: () => b,
        getCookieValueByName: () => p,
        getLocale: () => g,
        localeCookieHandler: () => m,
        locales: () => w,
        onLanguageChange: () => L,
        splitLocale: () => j,
        useIntl: () => a.A,
        withIntl: () => E
      });
      var n = t(9008),
        r = t(1075),
        s = t(6692),
        a = t(66920),
        i = t(45379),
        l = t(71127),
        d = t(40148),
        u = t(87171);
      const c = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${(0,u.F)()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        p = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            n = o.find((e => e.startsWith(t))),
            r = n?.substring(t.length, n.length);
          return r
        },
        m = function(e, o) {
          let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = p(e);
          return n && !t || c(e, o), [n, (r = e, e => {
            c(r, e)
          })];
          var r
        },
        f = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        b = f[0],
        h = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        w = f,
        g = () => {
          const {
            location: e
          } = window, o = (0, d.A)(), t = (e => {
            const o = w.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              n = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[n]) ? t[n] : null
          })(e), n = (e => {
            const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return o?.split("=")[1]
          })(e), r = b;
          let s = r;
          const a = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = p(a);
          s = o.currentSite?.site === d.C.www ? w.find((e => e.subdomaincom === n)) || w.find((e => e.subdomaincom === t)) || r : w.find((e => e.iso === i)) || r;
          const [l, u] = m(a, s.iso);
          return [s, u]
        };
      var k = t(56481);
      const _ = () => "en-US";

      function y(e) {
        const o = e.split("-");
        return (0, k.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function v(e, o) {
        return e[o] ?? {}
      }
      var O = t(25854);

      function E(e, o, t, n) {
        return r => {
          const s = (0, l.useMemo)((() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? g()[0].iso ?? _(),
                  [, n] = [y(t), v(e, t)];
                var r;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (r = n, {
                    ...r
                  })
                }
              }(e, o)
            }(o, t)
          }), [t]);
          return (0, O.jsx)(i.A, {
            locale: s?.locale || _(),
            messages: {
              ...s?.messages
            },
            onError: n,
            children: s && (0, O.jsx)(e, {
              ...r
            })
          }, "intl-provider")
        }
      }

      function j(e) {
        let [o, t] = e.split(/[-_]/), n = t?.toLowerCase();
        return "cn" === n && (n = "hans"), o && t || (o = "en", n = "us"), [o, n]
      }
      const D = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = g(), [t, n] = j(o);
            return e?.[n] ?? e.us
          }
        },
        L = e => {
          let {
            selectedLocale: o,
            track: t,
            parent: n = ""
          } = e;
          const r = (0, d.A)(),
            [, s] = g(),
            {
              subdomaincom: a,
              iso: i
            } = o,
            l = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return w.map((e => e.subdomaincom)).includes(t[0]) && (o = t.slice(1).join("/")), r.currentSite?.site === d.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(a);
          t?.({
            event: "cta_other",
            link_url: l,
            text: a,
            element_placement: n?.toLowerCase()
          }), s(i), window.location.href = l
        }
    },
    38525: (e, o, t) => {
      var n = {
        "./de": [99692, 9990],
        "./en": [58436, 1822],
        "./es": [57911, 2347],
        "./fr": [13691, 131],
        "./it": [79802, 8272],
        "./ja": [33050, 7436],
        "./ko": [8073, 2221],
        "./pl": [70695, 2171],
        "./pt": [71999, 8755],
        "./ru": [81790, 2864],
        "./zh": [42721, 3197]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 38525, e.exports = r
    },
    63514: (e, o, t) => {
      var n = {
        "./de": [76304, 4710],
        "./en": [53832, 3486],
        "./es": [44579, 4011],
        "./fr": [32951, 4851],
        "./it": [45014, 9936],
        "./ja": [85422, 2156],
        "./ko": [16373, 3885],
        "./pl": [41923, 6891],
        "./pt": [90267, 3475],
        "./ru": [82282, 4528],
        "./zh": [37749, 4861]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 63514, e.exports = r
    },
    87171: (e, o, t) => {
      "use strict";
      t.d(o, {
        F: () => n
      });
      const n = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    94375: (e, o, t) => {
      var n = {
        "./de": [67311, 5639],
        "./en": [2347, 6267],
        "./es": [97376, 5742],
        "./fr": [17084, 2678],
        "./it": [1121, 6997],
        "./ja": [71561, 6361],
        "./ko": [45982, 7452],
        "./pl": [53204, 2642],
        "./pt": [6396, 3034],
        "./ru": [66317, 3941],
        "./zh": [60754, 5832]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 94375, e.exports = r
    },
    94819: (e, o, t) => {
      var n = {
        "./de": [13577, 5259],
        "./en": [71137, 4799],
        "./es": [15494, 3370],
        "./fr": [52974, 7010],
        "./it": [86515, 4913],
        "./ja": [31535, 6285],
        "./ko": [26208, 6664],
        "./pl": [40230, 1054],
        "./pt": [99006, 662],
        "./ru": [40211, 5233],
        "./zh": [98432, 4700]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 94819, e.exports = r
    }
  }
]);