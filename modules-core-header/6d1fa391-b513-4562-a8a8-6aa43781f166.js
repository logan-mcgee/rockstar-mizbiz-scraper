try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "6d1fa391-b513-4562-a8a8-6aa43781f166", e._sentryDebugIdIdentifier = "sentry-dbid-6d1fa391-b513-4562-a8a8-6aa43781f166")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "23734b3e70371e18a05f141b62211d2d95128dc9",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "23734b3e70371e18a05f141b62211d2d95128dc9"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8773], {
    2562: (e, o, t) => {
      "use strict";
      t.d(o, {
        F: () => n
      });
      const n = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    5267: (e, o, t) => {
      var n = {
        "./de": [32265, 299],
        "./en": [55649, 5663],
        "./es": [50534, 5530],
        "./fr": [2414, 2466],
        "./it": [64083, 7073],
        "./ja": [4271, 4621],
        "./ko": [75648, 824],
        "./pl": [75270, 2398],
        "./pt": [60222, 9126],
        "./ru": [55475, 3697],
        "./zh": [90400, 1868]
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
        "./de": [17625, 6879],
        "./en": [82609, 2243],
        "./es": [1270, 278],
        "./fr": [5598, 9022],
        "./it": [88355, 2365],
        "./ja": [31647, 9377],
        "./ko": [42800, 9028],
        "./pl": [20438, 1242],
        "./pt": [35534, 7970],
        "./ru": [83779, 7453],
        "./zh": [28336, 8880]
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
    38525: (e, o, t) => {
      var n = {
        "./de": [32016, 9990],
        "./en": [23944, 1822],
        "./es": [91395, 2347],
        "./fr": [79767, 131],
        "./it": [15126, 8272],
        "./ja": [41134, 7436],
        "./ko": [48789, 2221],
        "./pl": [97635, 2171],
        "./pt": [80155, 8755],
        "./ru": [86570, 2864],
        "./zh": [65333, 3197]
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
        "./de": [47148, 4710],
        "./en": [98052, 3486],
        "./es": [21719, 4011],
        "./fr": [55803, 4851],
        "./it": [78842, 9936],
        "./ja": [32090, 2156],
        "./ko": [55529, 3885],
        "./pl": [93031, 6891],
        "./pt": [71039, 3475],
        "./ru": [30161, 4528],
        "./zh": [62049, 4861]
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
    67439: (e, o, t) => {
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
        localeCookieHandler: () => f,
        locales: () => w,
        onLanguageChange: () => L,
        splitLocale: () => j,
        useIntl: () => a.A,
        withIntl: () => E
      });
      var n = t(66479),
        r = t(8855),
        s = t(31664),
        a = t(46644),
        i = t(44047),
        l = t(71127),
        d = t(32779),
        u = t(2562);
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
        f = function(e, o) {
          let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = p(e);
          return n && !t || c(e, o), [n, (r = e, e => {
            c(r, e)
          })];
          var r
        },
        m = [{
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
        b = m[0],
        h = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        w = m,
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
          const [l, u] = f(a, s.iso);
          return [s, u]
        };
      var k = t(47781);
      const _ = () => "en-US";

      function y(e) {
        const o = e.split("-");
        return (0, k.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function v(e, o) {
        return e[o] ?? {}
      }
      var O = t(70954);

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
    94375: (e, o, t) => {
      var n = {
        "./de": [88883, 5639],
        "./en": [81039, 6267],
        "./es": [39116, 5742],
        "./fr": [64632, 2678],
        "./it": [42685, 6997],
        "./ja": [89437, 6361],
        "./ko": [55130, 7452],
        "./pl": [26096, 2642],
        "./pt": [59464, 3034],
        "./ru": [98825, 3941],
        "./zh": [37030, 5832]
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
        "./de": [30821, 5259],
        "./en": [65021, 4799],
        "./es": [98042, 3370],
        "./fr": [74850, 7010],
        "./it": [24215, 4913],
        "./ja": [22379, 6285],
        "./ko": [46372, 6664],
        "./pl": [33194, 1054],
        "./pt": [96514, 662],
        "./ru": [1415, 5233],
        "./zh": [57900, 4700]
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