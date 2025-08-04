try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "03c4b5de-1ba0-48c4-8929-38a56589d17f", e._sentryDebugIdIdentifier = "sentry-dbid-03c4b5de-1ba0-48c4-8929-38a56589d17f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [1154], {
    3019: (e, o, t) => {
      var n = {
        "./de": [7625, 6879],
        "./en": [2609, 2243],
        "./es": [1270, 278],
        "./fr": [5598, 9022],
        "./it": [8355, 2365],
        "./ja": [1647, 9377],
        "./ko": [2800, 9028],
        "./pl": [438, 1242],
        "./pt": [5534, 7970],
        "./ru": [3779, 7453],
        "./zh": [8336, 8880]
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
      r.keys = () => Object.keys(n), r.id = 3019, e.exports = r
    },
    3514: (e, o, t) => {
      var n = {
        "./de": [7148, 4710],
        "./en": [8052, 3486],
        "./es": [1719, 4011],
        "./fr": [5803, 4851],
        "./it": [8842, 9936],
        "./ja": [2090, 2156],
        "./ko": [5529, 3885],
        "./pl": [3031, 6891],
        "./pt": [1039, 3475],
        "./ru": [2542, 4528],
        "./zh": [2049, 4861]
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
      r.keys = () => Object.keys(n), r.id = 3514, e.exports = r
    },
    4375: (e, o, t) => {
      var n = {
        "./de": [8883, 5639],
        "./en": [3420, 6267],
        "./es": [9116, 5742],
        "./fr": [4632, 2678],
        "./it": [2685, 6997],
        "./ja": [9437, 6361],
        "./ko": [5130, 7452],
        "./pl": [6096, 2642],
        "./pt": [9464, 3034],
        "./ru": [8825, 3941],
        "./zh": [7030, 3451]
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
      r.keys = () => Object.keys(n), r.id = 4375, e.exports = r
    },
    4819: (e, o, t) => {
      var n = {
        "./de": [821, 5259],
        "./en": [5021, 4799],
        "./es": [8042, 3370],
        "./fr": [4850, 7010],
        "./it": [4215, 4913],
        "./ja": [2379, 6285],
        "./ko": [6372, 6664],
        "./pl": [3194, 1054],
        "./pt": [6514, 662],
        "./ru": [3796, 5233],
        "./zh": [7900, 4700]
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
      r.keys = () => Object.keys(n), r.id = 4819, e.exports = r
    },
    5267: (e, o, t) => {
      var n = {
        "./de": [2265, 299],
        "./en": [5649, 5663],
        "./es": [534, 5530],
        "./fr": [2414, 2466],
        "./it": [4083, 7073],
        "./ja": [4271, 4621],
        "./ko": [5648, 824],
        "./pl": [5270, 2398],
        "./pt": [4984, 9126],
        "./ru": [5475, 3697],
        "./zh": [400, 1868]
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
    7439: (e, o, t) => {
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
      var n = t(6479),
        r = t(8855),
        s = t(1664),
        a = t(6644),
        i = t(4047),
        l = t(2229),
        d = t(2779),
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
      var k = t(7781);
      const _ = () => "en-US";

      function y(e) {
        const o = e.split("-");
        return (0, k.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function v(e, o) {
        return e[o] ?? {}
      }
      var O = t(954);

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
    8525: (e, o, t) => {
      var n = {
        "./de": [2016, 9990],
        "./en": [3944, 1822],
        "./es": [1395, 2347],
        "./fr": [9767, 131],
        "./it": [5126, 8272],
        "./ja": [1134, 7436],
        "./ko": [8789, 2221],
        "./pl": [7635, 2171],
        "./pt": [155, 8755],
        "./ru": [6570, 2864],
        "./zh": [5333, 3197]
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
      r.keys = () => Object.keys(n), r.id = 8525, e.exports = r
    }
  }
]);