! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "7e655480-5665-4ad4-92f4-8d5b9187db49", e._sentryDebugIdIdentifier = "sentry-dbid-7e655480-5665-4ad4-92f4-8d5b9187db49")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7605], {
    89986: (e, s, o) => {
      "use strict";
      o.r(s), o.d(s, {
        FormattedMessage: () => a.A,
        IntlProvider: () => l.Kq,
        POSIXLocales: () => u.FN,
        createDevLocaleHook: () => r.A,
        createIntl: () => t.E,
        defineMessages: () => n.YK,
        englishLocale: () => u.Vm,
        getLocale: () => d.A,
        locales: () => u.Ay,
        splitLocale: () => c.A,
        useIntl: () => i.A,
        withIntl: () => l.QY
      });
      var a = o(43160),
        t = o(78924),
        n = o(95129),
        i = o(53075),
        l = o(90823),
        r = o(14685),
        d = o(45478),
        u = o(68203),
        c = o(91631),
        b = o(49995),
        m = {};
      for (const e in b)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (m[e] = () => b[e]);
      o.d(s, m)
    },
    90823: (e, s, o) => {
      "use strict";
      o.d(s, {
        Kq: () => r,
        QY: () => d
      });
      var a = o(62229),
        t = o(27042),
        n = o(45478),
        i = o(91631),
        l = o(98096);
      const r = e => {
        let {
          locales: s,
          lang: o,
          children: n
        } = e;
        const [r, d] = (0, a.useMemo)((() => (0, i.A)(o)), [o]), u = (0, a.useMemo)((() => function(e, s) {
          return e?.[s] ?? {}
        }(s, d)), [o, s]);
        return (0, l.jsx)(t.A, {
          messages: u,
          locale: r,
          defaultLocale: "en",
          children: n
        })
      };

      function d(e, s) {
        return o => {
          const [{
            iso: a
          }] = (0, n.A)();
          return (0, l.jsx)(r, {
            locales: s,
            lang: a,
            children: (0, l.jsx)(e, {
              ...o
            })
          })
        }
      }
    },
    49995: () => {},
    14685: (e, s, o) => {
      "use strict";
      o.d(s, {
        A: () => n
      });
      var a = o(45478),
        t = o(91631);
      const n = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: s
          }] = (0, a.A)(), [o, n] = (0, t.A)(s);
          return e?.[n] ?? e.us
        }
      }
    },
    45478: (e, s, o) => {
      "use strict";
      o.d(s, {
        A: () => i
      });
      var a = o(15138),
        t = o(21207),
        n = o(68203);
      const i = () => {
        const {
          location: e
        } = window, s = (0, a.A)(), o = (e => {
          const s = n.Ay.map((e => e.subdomaincom)),
            o = e.pathname.substring(1).split("/"),
            a = "detect-locals" === o[0] ? 1 : 0;
          return -1 !== s.indexOf(o[a]) ? o[a] : null
        })(e), i = (e => {
          const s = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return s?.split("=")[1]
        })(e), l = n.Vm;
        let r = l;
        const d = `rockstarweb_lang.${s.cookieIdentifier}`;
        if (s.currentSite?.site === a.C.www) r = n.Ay.find((e => e.subdomaincom === i)) || n.Ay.find((e => e.subdomaincom === o)) || l;
        else {
          const e = (0, t.Ap)(d);
          r = n.Ay.find((s => s.iso === e)) || l
        }
        return [r, (e => s => {
          (0, t.My)(e, s)
        })(d)]
      }
    },
    68203: (e, s, o) => {
      "use strict";
      o.d(s, {
        Ay: () => i,
        FN: () => n,
        Vm: () => t
      });
      const a = [{
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
        t = a[1],
        n = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        i = a
    },
    91631: (e, s, o) => {
      "use strict";

      function a(e) {
        const s = e.split(/[-_]/)[1];
        let o = e.split(/[-_]/)[0],
          a = s?.toLowerCase();
        return "cn" === a && (a = "hans"), o && s || (o = "en", a = "us"), [o, a]
      }
      o.d(s, {
        A: () => a
      })
    }
  }
]);