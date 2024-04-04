! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "b2051fe0-bfec-4d61-8b21-da59a84818d1", e._sentryDebugIdIdentifier = "sentry-dbid-b2051fe0-bfec-4d61-8b21-da59a84818d1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [304], {
    8304: (e, s, o) => {
      "use strict";
      o.r(s), o.d(s, {
        FormattedMessage: () => t.c,
        IntlProvider: () => l.C_,
        createDevLocaleHook: () => r.c,
        createIntl: () => n.y,
        defineMessages: () => a.Os,
        englishLocale: () => u.u,
        getLocale: () => c.c,
        localeCookieHandler: () => d.c,
        locales: () => u.c,
        splitLocale: () => b.c,
        useIntl: () => i.c,
        withIntl: () => l.eO
      });
      var t = o(3832),
        n = o(54188),
        a = o(45052),
        i = o(95688),
        l = o(11676),
        r = o(32748),
        c = o(48787),
        d = o(36320),
        u = o(41285),
        b = o(68068),
        m = o(71388),
        p = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => m[e]);
      o.d(s, p)
    },
    11676: (e, s, o) => {
      "use strict";
      o.d(s, {
        C_: () => r,
        eO: () => c
      });
      var t = o(51664),
        n = o(83852),
        a = o(48787),
        i = o(68068),
        l = o(95240);
      const r = e => {
        let {
          locales: s,
          lang: o,
          children: a
        } = e;
        const r = (0, t.useMemo)((() => (0, i.c)(o)), [o]),
          c = (0, t.useMemo)((() => function(e, s) {
            return e?.[s] ?? {}
          }(s, r[1])), [o, s]);
        return (0, l.jsx)(n.c, {
          messages: c,
          locale: r[0],
          defaultLocale: "en",
          children: a
        }, r[0])
      };

      function c(e, s) {
        return o => {
          const [{
            iso: t
          }] = (0, a.c)();
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
    71388: () => {},
    32748: (e, s, o) => {
      "use strict";
      o.d(s, {
        c: () => i
      });
      var t = o(3061),
        n = o(51664),
        a = o(68068);
      const i = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const s = (0, t.useLocale)(),
            o = (0, n.useMemo)((() => (0, a.c)(s)), [s]);
          return e?.[o[1]] ?? e.us
        }
      }
    },
    48787: (e, s, o) => {
      "use strict";
      o.d(s, {
        c: () => i
      });
      var t = o(53592),
        n = o(36320),
        a = o(41285);
      const i = () => {
        const {
          location: e
        } = window, s = (0, t.c)(), o = (e => {
          const s = a.c.map((e => e.subdomaincom)),
            o = e.pathname.substring(1).split("/"),
            t = "detect-locals" === o[0] ? 1 : 0;
          return -1 !== s.indexOf(o[t]) ? o[t] : null
        })(e), i = (e => {
          const s = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return s?.split("=")[1]
        })(e), l = a.u, [r, c] = (0, n.c)(`rockstarweb_lang.${s.cookieIdentifier}`, o ?? void 0);
        let d = l;
        return d = s.currentSite?.site === t.U.www ? a.c.find((e => e.subdomaincom === i)) || a.c.find((e => e.subdomaincom === o)) || l : a.c.find((e => e.iso === r)) || l, [d, c]
      }
    },
    36320: (e, s, o) => {
      "use strict";
      o.d(s, {
        c: () => a
      });
      const t = (e, s) => {
          e && s ? document.cookie = `${e}=${s}; domain=${n()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${s})`)
        },
        n = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        a = function(e, s) {
          let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = document.cookie.split("; "),
            a = `${e}=`,
            i = n.find((e => e.startsWith(a))),
            l = i?.substring(a.length, i.length);
          return l && !o || t(e, s), [l, (r = e, e => {
            t(r, e)
          })];
          var r
        }
    },
    41285: (e, s, o) => {
      "use strict";
      o.d(s, {
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
    68068: (e, s, o) => {
      "use strict";

      function t(e) {
        let [s, o] = e.split(/[-_]/);
        return o = o?.toLowerCase(), "cn" === o && (o = "hans"), s && o || (s = "en", o = "us"), [s, o]
      }
      o.d(s, {
        c: () => t
      })
    },
    53592: (e, s, o) => {
      "use strict";
      o.d(s, {
        U: () => t,
        c: () => a
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: s
          } = window, o = s.hostname.substring(0, s.hostname.indexOf(".rockstargames.com")), t = n.findIndex((s => Object.entries(s.sites).findIndex((s => {
            let [t, n] = s;
            return n === o && (e = {
              site: t,
              subDomain: n
            }, !0)
          })) >= 0)), a = n[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    }
  }
]);
//# sourceMappingURL=5264deaa9da14a0311d0f05ba13ba0c6.js.map