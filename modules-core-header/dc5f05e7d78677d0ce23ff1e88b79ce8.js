! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "6eaf77c3-2a5e-4644-a4e5-441c298052c9", e._sentryDebugIdIdentifier = "sentry-dbid-6eaf77c3-2a5e-4644-a4e5-441c298052c9")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "9e0f348dc2ade82ef557806d58f5a6f2792dae49",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "9e0f348dc2ade82ef557806d58f5a6f2792dae49"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [280, 660], {
    94660: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.c,
        IntlProvider: () => i.C_,
        createDevLocaleHook: () => r.c,
        createIntl: () => a.y,
        defineMessages: () => n.Os,
        englishLocale: () => u.u,
        getLocale: () => c.c,
        localeCookieHandler: () => d.c,
        locales: () => u.c,
        splitLocale: () => b.c,
        useIntl: () => l.c,
        withIntl: () => i.eO
      });
      var t = s(78640),
        a = s(59428),
        n = s(26656),
        l = s(85844),
        i = s(73583),
        r = s(31292),
        c = s(15448),
        d = s(98612),
        u = s(23916),
        b = s(69423),
        m = s(24932),
        f = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (f[e] = () => m[e]);
      s.d(o, f)
    },
    73583: (e, o, s) => {
      "use strict";
      s.d(o, {
        C_: () => r,
        eO: () => c
      });
      var t = s(88200),
        a = s(23483),
        n = s(15448),
        l = s(69423),
        i = s(63480);
      const r = e => {
        let {
          locales: o,
          lang: s,
          children: n
        } = e;
        const r = (0, t.useMemo)((() => (0, l.c)(s)), [s]),
          c = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, r[1])), [s, o]);
        return (0, i.jsx)(a.c, {
          messages: c,
          locale: r[0],
          defaultLocale: "en",
          children: n
        }, r[0])
      };

      function c(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, n.c)();
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
    24932: () => {},
    31292: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => l
      });
      var t = s(6464),
        a = s(88200),
        n = s(69423);
      const l = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.y_)(),
            s = (0, a.useMemo)((() => (0, n.c)(o)), [o]);
          return e?.[s[1]] ?? e.us
        }
      }
    },
    15448: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => l
      });
      var t = s(37019),
        a = s(98612),
        n = s(23916);
      const l = () => {
        const {
          location: e
        } = window, o = (0, t.c)(), s = (e => {
          const o = n.c.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), l = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = n.u, [r, c] = (0, a.c)(`rockstarweb_lang.${o.cookieIdentifier}`, s ?? void 0);
        let d = i;
        return d = o.currentSite?.site === t.U.www ? n.c.find((e => e.subdomaincom === l)) || n.c.find((e => e.subdomaincom === s)) || i : n.c.find((e => e.iso === r)) || i, [d, c]
      }
    },
    98612: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => n
      });
      const t = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${a()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        a = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        n = function(e, o) {
          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const a = document.cookie.split("; "),
            n = `${e}=`,
            l = a.find((e => e.startsWith(n))),
            i = l?.substring(n.length, l.length);
          return i && !s || t(e, o), [i, (r = e, e => {
            t(r, e)
          })];
          var r
        }
    },
    23916: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => a,
        u: () => n
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
        a = t,
        n = t[1]
    },
    69423: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/);
        return s = s.toLowerCase(), "cn" === s && (s = "hans"), [o, s]
      }
      s.d(o, {
        c: () => t
      })
    }
  }
]);
//# sourceMappingURL=dc5f05e7d78677d0ce23ff1e88b79ce8.js.map