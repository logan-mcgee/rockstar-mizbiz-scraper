! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "5fb3d628-d260-4872-ace1-a9cc2eb9931c", e._sentryDebugIdIdentifier = "sentry-dbid-5fb3d628-d260-4872-ace1-a9cc2eb9931c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [660, 280], {
    94660: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.c,
        IntlProvider: () => i.C_,
        createDevLocaleHook: () => d.c,
        createIntl: () => n.y,
        defineMessages: () => a.Os,
        englishLocale: () => u.u,
        getLocale: () => r.c,
        localeCookieHandler: () => c.c,
        locales: () => u.c,
        splitLocale: () => b.c,
        useIntl: () => l.c,
        withIntl: () => i.eO
      });
      var t = s(78640),
        n = s(59428),
        a = s(26656),
        l = s(85844),
        i = s(73583),
        d = s(31292),
        r = s(15448),
        c = s(98612),
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
        C_: () => d,
        eO: () => r
      });
      var t = s(88200),
        n = s(23483),
        a = s(15448),
        l = s(69423),
        i = s(63480);
      const d = e => {
        let {
          locales: o,
          lang: s,
          children: a
        } = e;
        const d = (0, t.useMemo)((() => (0, l.c)(s)), [s]),
          r = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, d[1])), [s, o]);
        return (0, i.jsx)(n.c, {
          messages: r,
          locale: d[0],
          defaultLocale: "en",
          children: a
        }, d[0])
      };

      function r(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, a.c)();
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
    24932: () => {},
    31292: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => l
      });
      var t = s(6464),
        n = s(88200),
        a = s(69423);
      const l = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.y_)(),
            s = (0, n.useMemo)((() => (0, a.c)(o)), [o]);
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
        n = s(98612),
        a = s(23916);
      const l = () => {
        const {
          location: e
        } = window, o = (0, t.c)(), s = (e => {
          const o = a.c.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), l = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = a.u, [d, r] = (0, n.c)(`rockstarweb_lang.${o.cookieIdentifier}`, s ?? void 0);
        let c = i;
        return c = o.currentSite?.site === t.U.www ? a.c.find((e => e.subdomaincom === l)) || a.c.find((e => e.subdomaincom === s)) || i : a.c.find((e => e.iso === d)) || i, [c, r]
      }
    },
    98612: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => a
      });
      const t = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${n()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        n = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        a = function(e, o) {
          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = document.cookie.split("; "),
            a = `${e}=`,
            l = n.find((e => e.startsWith(a))),
            i = l?.substring(a.length, l.length);
          return i && !s || t(e, o), [i, (d = e, e => {
            t(d, e)
          })];
          var d
        }
    },
    23916: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => n,
        u: () => a
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
        n = t,
        a = t[1]
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
//# sourceMappingURL=b32eb9b218780d1da37b18a57e1e7464.js.map