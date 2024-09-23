! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "0f796a66-e3bf-4142-8f52-eef83b2a5ff5", e._sentryDebugIdIdentifier = "sentry-dbid-0f796a66-e3bf-4142-8f52-eef83b2a5ff5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [143, 524], {
    4143: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.A,
        IntlProvider: () => i.Kq,
        POSIXLocales: () => c.FN,
        createDevLocaleHook: () => r.A,
        createIntl: () => n.E,
        defineMessages: () => a.YK,
        englishLocale: () => c.Vm,
        getCookieValueByName: () => u.h,
        getLocale: () => d.A,
        localeCookieHandler: () => u.A,
        locales: () => c.Ay,
        splitLocale: () => b.A,
        useIntl: () => l.A,
        withIntl: () => i.QY
      });
      var t = s(7047),
        n = s(4952),
        a = s(452),
        l = s(708),
        i = s(120),
        r = s(3480),
        d = s(175),
        u = s(4677),
        c = s(9186),
        b = s(5136),
        m = s(1272),
        f = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (f[e] = () => m[e]);
      s.d(o, f)
    },
    120: (e, o, s) => {
      "use strict";
      s.d(o, {
        Kq: () => r,
        QY: () => d
      });
      var t = s(1403),
        n = s(3071),
        a = s(175),
        l = s(5136),
        i = s(6632);
      const r = e => {
        let {
          locales: o,
          lang: s,
          children: a
        } = e;
        const r = (0, t.useMemo)((() => (0, l.A)(s)), [s]),
          d = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, r[1])), [s, o]);
        return (0, i.jsx)(n.A, {
          messages: d,
          locale: r[0],
          defaultLocale: "en",
          children: a
        }, r[0])
      };

      function d(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, a.A)();
          return (0, i.jsx)(r, {
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
        A: () => l
      });
      var t = s(5662),
        n = s(1403),
        a = s(5136);
      const l = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.Ym)(),
            s = (0, n.useMemo)((() => (0, a.A)(o)), [o]);
          return e?.[s[1]] ?? e.us
        }
      }
    },
    175: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => l
      });
      var t = s(3963),
        n = s(4677),
        a = s(9186);
      const l = () => {
        const {
          location: e
        } = window, o = (0, t.A)(), s = (e => {
          const o = a.Ay.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), l = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = a.Vm;
        let r = i;
        const d = `rockstarweb_lang.${o.cookieIdentifier}`,
          u = (0, n.h)(d);
        r = o.currentSite?.site === t.C.www ? a.Ay.find((e => e.subdomaincom === l)) || a.Ay.find((e => e.subdomaincom === s)) || i : a.Ay.find((e => e.iso === u)) || i;
        const [c, b] = (0, n.A)(d, r.iso);
        return [r, b]
      }
    },
    4677: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => l,
        h: () => a
      });
      const t = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${n()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        n = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        a = e => {
          const o = document.cookie.split("; "),
            s = `${e}=`,
            t = o.find((e => e.startsWith(s))),
            n = t?.substring(s.length, t.length);
          return n
        },
        l = function(e, o) {
          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = a(e);
          return n && !s || t(e, o), [n, (l = e, e => {
            t(l, e)
          })];
          var l
        }
    },
    9186: (e, o, s) => {
      "use strict";
      s.d(o, {
        Ay: () => l,
        FN: () => a,
        Vm: () => n
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
        n = t[1],
        a = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        l = t
    },
    5136: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/);
        return s = s?.toLowerCase(), "cn" === s && (s = "hans"), o && s || (o = "en", s = "us"), [o, s]
      }
      s.d(o, {
        A: () => t
      })
    }
  }
]);