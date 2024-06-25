! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "ce945bf0-ba22-41e8-858f-014ed97ace8d", e._sentryDebugIdIdentifier = "sentry-dbid-ce945bf0-ba22-41e8-858f-014ed97ace8d")
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
  [924, 304], {
    8304: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.c,
        IntlProvider: () => i.C_,
        createDevLocaleHook: () => c.c,
        createIntl: () => n.y,
        defineMessages: () => a.Os,
        englishLocale: () => u.u,
        getCookieValueByName: () => d.M,
        getLocale: () => r.c,
        localeCookieHandler: () => d.c,
        locales: () => u.c,
        splitLocale: () => b.c,
        useIntl: () => l.c,
        withIntl: () => i.eO
      });
      var t = s(3832),
        n = s(54188),
        a = s(45052),
        l = s(95688),
        i = s(11676),
        c = s(32748),
        r = s(48787),
        d = s(36320),
        u = s(41285),
        b = s(68068),
        m = s(71388),
        f = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (f[e] = () => m[e]);
      s.d(o, f)
    },
    11676: (e, o, s) => {
      "use strict";
      s.d(o, {
        C_: () => c,
        eO: () => r
      });
      var t = s(51664),
        n = s(83852),
        a = s(48787),
        l = s(68068),
        i = s(95240);
      const c = e => {
        let {
          locales: o,
          lang: s,
          children: a
        } = e;
        const c = (0, t.useMemo)((() => (0, l.c)(s)), [s]),
          r = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, c[1])), [s, o]);
        return (0, i.jsx)(n.c, {
          messages: r,
          locale: c[0],
          defaultLocale: "en",
          children: a
        }, c[0])
      };

      function r(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, a.c)();
          return (0, i.jsx)(c, {
            locales: o,
            lang: t,
            children: (0, i.jsx)(e, {
              ...s
            })
          })
        }
      }
    },
    71388: () => {},
    32748: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => l
      });
      var t = s(72908),
        n = s(51664),
        a = s(68068);
      const l = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.y_)(),
            s = (0, n.useMemo)((() => (0, a.c)(o)), [o]);
          return e?.[s[1]] ?? e.us
        }
      }
    },
    48787: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => l
      });
      var t = s(53592),
        n = s(36320),
        a = s(41285);
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
        })(e), i = a.u;
        let c = i;
        const r = `rockstarweb_lang.${o.cookieIdentifier}`,
          d = (0, n.M)(r);
        c = o.currentSite?.site === t.U.www ? a.c.find((e => e.subdomaincom === l)) || a.c.find((e => e.subdomaincom === s)) || i : a.c.find((e => e.iso === d)) || i;
        const [u, b] = (0, n.c)(r, c.iso);
        return [c, b]
      }
    },
    36320: (e, o, s) => {
      "use strict";
      s.d(o, {
        M: () => a,
        c: () => l
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
    41285: (e, o, s) => {
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
    68068: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/);
        return s = s?.toLowerCase(), "cn" === s && (s = "hans"), o && s || (o = "en", s = "us"), [o, s]
      }
      s.d(o, {
        c: () => t
      })
    }
  }
]);