! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "707b4b9e-7d95-47c3-bbc5-4eb019f7ae72", e._sentryDebugIdIdentifier = "sentry-dbid-707b4b9e-7d95-47c3-bbc5-4eb019f7ae72")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [584], {
    79584: (e, o, s) => {
      s.d(o, {
        FormattedMessage: () => t.c,
        defineMessages: () => n.Os,
        getLocale: () => p,
        locales: () => b,
        useIntl: () => a.c,
        withIntl: () => g
      });
      var n = s(45052),
        t = s(3832),
        a = s(95688),
        i = s(51664),
        l = s(82936),
        d = s(53592);
      const r = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${u()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        u = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        c = [{
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
        b = c,
        m = c[1],
        p = () => {
          const {
            location: e
          } = window, o = (0, d.c)(), s = (e => {
            const o = b.map((e => e.subdomaincom)),
              s = e.pathname.substring(1).split("/"),
              n = "detect-locals" === s[0] ? 1 : 0;
            return -1 !== o.indexOf(s[n]) ? s[n] : null
          })(e), n = (e => {
            const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return o?.split("=")[1]
          })(e), t = m, [a, i] = function(e, o) {
            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const n = document.cookie.split("; "),
              t = `${e}=`,
              a = n.find((e => e.startsWith(t))),
              i = a?.substring(t.length, a.length);
            return i && !s || r(e, o), [i, (l = e, e => {
              r(l, e)
            })];
            var l
          }(`rockstarweb_lang.${o.cookieIdentifier}`, s ?? void 0);
          let l = t;
          return l = o.currentSite?.site === d.U.www ? b.find((e => e.subdomaincom === n)) || b.find((e => e.subdomaincom === s)) || t : b.find((e => e.iso === a)) || t, [l, i]
        };
      var f = s(95240);
      const w = e => {
        let {
          locales: o,
          lang: s,
          children: n
        } = e;
        const t = (0, i.useMemo)((() => function(e) {
            let [o, s] = e.split(/[-_]/);
            return s = s?.toLowerCase(), "cn" === s && (s = "hans"), o && s || (o = "en", s = "us"), [o, s]
          }(s)), [s]),
          a = (0, i.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, t[1])), [s, o]);
        return (0, f.jsx)(l.c, {
          messages: a,
          locale: t[0],
          defaultLocale: "en",
          children: n
        }, t[0])
      };

      function g(e, o) {
        return s => {
          const [{
            iso: n
          }] = p();
          return (0, f.jsx)(w, {
            locales: o,
            lang: n,
            children: (0, f.jsx)(e, {
              ...s
            })
          })
        }
      }
      s(3061)
    },
    53592: (e, o, s) => {
      s.d(o, {
        U: () => n,
        c: () => a
      });
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        t = [{
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
            location: o
          } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), n = t.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [n, t] = o;
            return t === s && (e = {
              site: n,
              subDomain: t
            }, !0)
          })) >= 0)), a = t[n >= 0 ? n : 0];
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
//# sourceMappingURL=d5289fb3e65aec6275ffbabf1111e5bb.js.map