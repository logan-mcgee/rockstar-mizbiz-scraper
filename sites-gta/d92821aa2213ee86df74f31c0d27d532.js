! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "a22e2186-1515-42e6-a0bb-da53068e3dbd", e._sentryDebugIdIdentifier = "sentry-dbid-a22e2186-1515-42e6-a0bb-da53068e3dbd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [280], {
    4660: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.c,
        IntlProvider: () => l.C_,
        createDevLocaleHook: () => r.c,
        createIntl: () => a.y,
        defineMessages: () => n.Os,
        englishLocale: () => u.u,
        getLocale: () => d.c,
        localeCookieHandler: () => c.c,
        locales: () => u.c,
        splitLocale: () => b.c,
        useIntl: () => i.c,
        withIntl: () => l.eO
      });
      var t = s(8640),
        a = s(9428),
        n = s(6656),
        i = s(5844),
        l = s(3583),
        r = s(1292),
        d = s(3068),
        c = s(8612),
        u = s(3916),
        b = s(9423),
        m = s(4932),
        p = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => m[e]);
      s.d(o, p)
    },
    3583: (e, o, s) => {
      "use strict";
      s.d(o, {
        C_: () => r,
        eO: () => d
      });
      var t = s(8200),
        a = s(3483),
        n = s(3068),
        i = s(9423),
        l = s(3480);
      const r = e => {
        let {
          locales: o,
          lang: s,
          children: n
        } = e;
        const r = (0, t.useMemo)((() => (0, i.c)(s)), [s]),
          d = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, r[1])), [s, o]);
        return (0, l.jsx)(a.c, {
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
          }] = (0, n.c)();
          return (0, l.jsx)(r, {
            locales: o,
            lang: t,
            children: (0, l.jsx)(e, {
              ...s
            })
          })
        }
      }
    },
    4932: () => {},
    1292: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => i
      });
      var t = s(3061),
        a = s(8200),
        n = s(9423);
      const i = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.useLocale)(),
            s = (0, a.useMemo)((() => (0, n.c)(o)), [o]);
          return e?.[s[1]] ?? e.us
        }
      }
    },
    3068: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => i
      });
      var t = s(7019),
        a = s(8612),
        n = s(3916);
      const i = () => {
        const {
          location: e
        } = window, o = (0, t.c)(), s = (e => {
          const o = n.c.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), i = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), l = n.u, [r, d] = (0, a.c)(`rockstarweb_lang.${o.cookieIdentifier}`, s ?? void 0);
        let c = l;
        return c = o.currentSite?.site === t.U.www ? n.c.find((e => e.subdomaincom === i)) || n.c.find((e => e.subdomaincom === s)) || l : n.c.find((e => e.iso === r)) || l, [c, d]
      }
    },
    8612: (e, o, s) => {
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
            i = a.find((e => e.startsWith(n))),
            l = i?.substring(n.length, i.length);
          return l && !s || t(e, o), [l, (r = e, e => {
            t(r, e)
          })];
          var r
        }
    },
    3916: (e, o, s) => {
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
    9423: (e, o, s) => {
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
//# sourceMappingURL=d92821aa2213ee86df74f31c0d27d532.js.map