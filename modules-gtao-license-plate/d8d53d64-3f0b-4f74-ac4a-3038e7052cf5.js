! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "d8d53d64-3f0b-4f74-ac4a-3038e7052cf5", e._sentryDebugIdIdentifier = "sentry-dbid-d8d53d64-3f0b-4f74-ac4a-3038e7052cf5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [524], {
    4143: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.A,
        IntlProvider: () => i.Kq,
        POSIXLocales: () => c.FN,
        createDevLocaleHook: () => d.A,
        createIntl: () => a.E,
        defineMessages: () => n.YK,
        englishLocale: () => c.Vm,
        getCookieValueByName: () => u.h,
        getLocale: () => r.A,
        localeCookieHandler: () => u.A,
        locales: () => c.Ay,
        splitLocale: () => b.A,
        useIntl: () => l.A,
        withIntl: () => i.QY
      });
      var t = s(7047),
        a = s(4952),
        n = s(452),
        l = s(708),
        i = s(120),
        d = s(3480),
        r = s(175),
        u = s(4677),
        c = s(9186),
        b = s(5136),
        m = s(1272),
        p = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => m[e]);
      s.d(o, p)
    },
    120: (e, o, s) => {
      "use strict";
      s.d(o, {
        Kq: () => d,
        QY: () => r
      });
      var t = s(1403),
        a = s(3071),
        n = s(175),
        l = s(5136),
        i = s(6632);
      const d = e => {
        let {
          locales: o,
          lang: s,
          children: n
        } = e;
        const [d, r] = (0, t.useMemo)((() => (0, l.A)(s)), [s]), u = (0, t.useMemo)((() => function(e, o) {
          return e?.[o] ?? {}
        }(o, r)), [s, o]);
        return (0, i.jsx)(a.A, {
          messages: u,
          locale: d,
          defaultLocale: "en",
          children: n
        })
      };

      function r(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, n.A)();
          return (0, i.jsx)(d, {
            locales: o,
            lang: t,
            children: (0, i.jsx)(e, {
              ...s
            })
          })
        }
      }
    },
    1272: () => {},
    3480: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => n
      });
      var t = s(175),
        a = s(5136);
      const n = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: o
          }] = (0, t.A)(), [s, n] = (0, a.A)(o);
          return e?.[n] ?? e.us
        }
      }
    },
    175: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => l
      });
      var t = s(3963),
        a = s(4677),
        n = s(9186);
      const l = () => {
        const {
          location: e
        } = window, o = (0, t.A)(), s = (e => {
          const o = n.Ay.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), l = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = n.Vm;
        let d = i;
        const r = `rockstarweb_lang.${o.cookieIdentifier}`,
          u = (0, a.h)(r);
        d = o.currentSite?.site === t.C.www ? n.Ay.find((e => e.subdomaincom === l)) || n.Ay.find((e => e.subdomaincom === s)) || i : n.Ay.find((e => e.iso === u)) || i;
        const [c, b] = (0, a.A)(r, d.iso);
        return [d, b]
      }
    },
    4677: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => l,
        h: () => n
      });
      const t = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${a()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        a = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        n = e => {
          const o = document.cookie.split("; "),
            s = `${e}=`,
            t = o.find((e => e.startsWith(s))),
            a = t?.substring(s.length, t.length);
          return a
        },
        l = function(e, o) {
          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const a = n(e);
          return a && !s || t(e, o), [a, (l = e, e => {
            t(l, e)
          })];
          var l
        }
    },
    9186: (e, o, s) => {
      "use strict";
      s.d(o, {
        Ay: () => l,
        FN: () => n,
        Vm: () => a
      });
      const t = [{
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
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
        a = t[1],
        n = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        l = t
    },
    5136: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/), t = s?.toLowerCase();
        return "cn" === t && (t = "hans"), o && s || (o = "en", t = "us"), [o, t]
      }
      s.d(o, {
        A: () => t
      })
    }
  }
]);