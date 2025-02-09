! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "2b1d4bf3-e844-4890-8011-a112311b4c89", e._sentryDebugIdIdentifier = "sentry-dbid-2b1d4bf3-e844-4890-8011-a112311b4c89")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [605], {
    89986: (e, s, o) => {
      "use strict";
      o.r(s), o.d(s, {
        FormattedMessage: () => t.A,
        IntlProvider: () => l.Kq,
        POSIXLocales: () => u.FN,
        createDevLocaleHook: () => r.A,
        createIntl: () => n.E,
        defineMessages: () => a.YK,
        englishLocale: () => u.Vm,
        getLocale: () => d.A,
        locales: () => u.Ay,
        splitLocale: () => c.A,
        useIntl: () => i.A,
        withIntl: () => l.QY
      });
      var t = o(43160),
        n = o(78924),
        a = o(95129),
        i = o(53075),
        l = o(90823),
        r = o(14685),
        d = o(45478),
        u = o(68203),
        c = o(91631),
        b = o(49995),
        f = {};
      for (const e in b)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (f[e] = () => b[e]);
      o.d(s, f)
    },
    90823: (e, s, o) => {
      "use strict";
      o.d(s, {
        Kq: () => r,
        QY: () => d
      });
      var t = o(62229),
        n = o(27042),
        a = o(45478),
        i = o(91631),
        l = o(98096);
      const r = e => {
        let {
          locales: s,
          lang: o,
          children: a
        } = e;
        const [r, d] = (0, t.useMemo)((() => (0, i.A)(o)), [o]), u = (0, t.useMemo)((() => function(e, s) {
          return e?.[s] ?? {}
        }(s, d)), [o, s]);
        return (0, l.jsx)(n.A, {
          messages: u,
          locale: r,
          defaultLocale: "en",
          children: a
        })
      };

      function d(e, s) {
        return o => {
          const [{
            iso: t
          }] = (0, a.A)();
          return (0, l.jsx)(r, {
            locales: s,
            lang: t,
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
        A: () => a
      });
      var t = o(45478),
        n = o(91631);
      const a = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: s
          }] = (0, t.A)(), [o, a] = (0, n.A)(s);
          return e?.[a] ?? e.us
        }
      }
    },
    45478: (e, s, o) => {
      "use strict";
      o.d(s, {
        A: () => i
      });
      var t = o(15138),
        n = o(21207),
        a = o(68203);
      const i = () => {
        const {
          location: e
        } = window, s = (0, t.A)(), o = (e => {
          const s = a.Ay.map((e => e.subdomaincom)),
            o = e.pathname.substring(1).split("/"),
            t = "detect-locals" === o[0] ? 1 : 0;
          return -1 !== s.indexOf(o[t]) ? o[t] : null
        })(e), i = (e => {
          const s = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return s?.split("=")[1]
        })(e), l = a.Vm;
        let r = l;
        const d = `rockstarweb_lang.${s.cookieIdentifier}`;
        if (s.currentSite?.site === t.C.www) r = a.Ay.find((e => e.subdomaincom === i)) || a.Ay.find((e => e.subdomaincom === o)) || l;
        else {
          const e = (0, n.Ap)(d);
          r = a.Ay.find((s => s.iso === e)) || l
        }
        return [r, (e => s => {
          (0, n.My)(e, s)
        })(d)]
      }
    },
    68203: (e, s, o) => {
      "use strict";
      o.d(s, {
        Ay: () => i,
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
        i = t
    },
    91631: (e, s, o) => {
      "use strict";

      function t(e) {
        const s = e.split(/[-_]/)[1];
        let o = e.split(/[-_]/)[0],
          t = s?.toLowerCase();
        return "cn" === t && (t = "hans"), o && s || (o = "en", t = "us"), [o, t]
      }
      o.d(s, {
        A: () => t
      })
    }
  }
]);