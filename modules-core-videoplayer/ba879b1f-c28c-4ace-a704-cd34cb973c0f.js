! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "ba879b1f-c28c-4ace-a704-cd34cb973c0f", e._sentryDebugIdIdentifier = "sentry-dbid-ba879b1f-c28c-4ace-a704-cd34cb973c0f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [524], {
    4143: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.A,
        IntlProvider: () => i.Kq,
        POSIXLocales: () => u.FN,
        createDevLocaleHook: () => r.A,
        createIntl: () => a.E,
        defineMessages: () => n.YK,
        englishLocale: () => u.Vm,
        getCookieValueByName: () => c.h,
        getLocale: () => d.A,
        localeCookieHandler: () => c.A,
        locales: () => u.Ay,
        splitLocale: () => b.A,
        useIntl: () => l.A,
        withIntl: () => i.QY
      });
      var t = s(7047),
        a = s(4952),
        n = s(452),
        l = s(708),
        i = s(120),
        r = s(3480),
        d = s(175),
        c = s(4677),
        u = s(9186),
        b = s(5136),
        m = s(1272),
        p = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => m[e]);
      s.d(o, p)
    },
    120: (e, o, s) => {
      "use strict";
      s.d(o, {
        Kq: () => r,
        QY: () => d
      });
      var t = s(1403),
        a = s(3071),
        n = s(175),
        l = s(5136),
        i = s(6632);
      const r = e => {
        let {
          locales: o,
          lang: s,
          children: n
        } = e;
        const r = (0, t.useMemo)((() => (0, l.A)(s)), [s]),
          d = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, r[1])), [s, o]);
        return (0, i.jsx)(a.A, {
          messages: d,
          locale: r[0],
          defaultLocale: "en",
          children: n
        }, r[0])
      };

      function d(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, n.A)();
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
      var t = s(396),
        a = s(1403),
        n = s(5136);
      const l = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.useLocale)(),
            s = (0, a.useMemo)((() => (0, n.A)(o)), [o]);
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
        let r = i;
        const d = `rockstarweb_lang.${o.cookieIdentifier}`,
          c = (0, a.h)(d);
        r = o.currentSite?.site === t.C.www ? n.Ay.find((e => e.subdomaincom === l)) || n.Ay.find((e => e.subdomaincom === s)) || i : n.Ay.find((e => e.iso === c)) || i;
        const [u, b] = (0, a.A)(d, r.iso);
        return [r, b]
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
        let [o, s] = e.split(/[-_]/);
        return s = s?.toLowerCase(), "cn" === s && (s = "hans"), o && s || (o = "en", s = "us"), [o, s]
      }
      s.d(o, {
        A: () => t
      })
    }
  }
]);