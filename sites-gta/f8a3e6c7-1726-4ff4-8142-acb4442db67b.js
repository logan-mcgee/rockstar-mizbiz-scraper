! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f8a3e6c7-1726-4ff4-8142-acb4442db67b", e._sentryDebugIdIdentifier = "sentry-dbid-f8a3e6c7-1726-4ff4-8142-acb4442db67b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [143, 524], {
    6516: (e, o, s) => {
      "use strict";
      var t = s(1403),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, s) {
        var t, a = {},
          c = null,
          u = null;
        for (t in void 0 !== s && (c = "" + s), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) r.call(o, t) && !l.hasOwnProperty(t) && (a[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === a[t] && (a[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: u,
          props: a,
          _owner: i.current
        }
      }
      o.Fragment = a, o.jsx = c, o.jsxs = c
    },
    6632: (e, o, s) => {
      "use strict";
      e.exports = s(6516)
    },
    4143: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.A,
        IntlProvider: () => i.Kq,
        createDevLocaleHook: () => l.A,
        createIntl: () => n.E,
        defineMessages: () => a.YK,
        englishLocale: () => d.V,
        getCookieValueByName: () => u.h,
        getLocale: () => c.A,
        localeCookieHandler: () => u.A,
        locales: () => d.A,
        splitLocale: () => b.A,
        useIntl: () => r.A,
        withIntl: () => i.QY
      });
      var t = s(7047),
        n = s(4952),
        a = s(452),
        r = s(708),
        i = s(120),
        l = s(3480),
        c = s(175),
        u = s(4677),
        d = s(9186),
        b = s(5136),
        f = s(1272),
        p = {};
      for (const e in f)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => f[e]);
      s.d(o, p)
    },
    120: (e, o, s) => {
      "use strict";
      s.d(o, {
        Kq: () => l,
        QY: () => c
      });
      var t = s(1403),
        n = s(3071),
        a = s(175),
        r = s(5136),
        i = s(6632);
      const l = e => {
        let {
          locales: o,
          lang: s,
          children: a
        } = e;
        const l = (0, t.useMemo)((() => (0, r.A)(s)), [s]),
          c = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, l[1])), [s, o]);
        return (0, i.jsx)(n.A, {
          messages: c,
          locale: l[0],
          defaultLocale: "en",
          children: a
        }, l[0])
      };

      function c(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, a.A)();
          return (0, i.jsx)(l, {
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
        A: () => r
      });
      var t = s(396),
        n = s(1403),
        a = s(5136);
      const r = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.useLocale)(),
            s = (0, n.useMemo)((() => (0, a.A)(o)), [o]);
          return e?.[s[1]] ?? e.us
        }
      }
    },
    175: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => r
      });
      var t = s(3963),
        n = s(4677),
        a = s(9186);
      const r = () => {
        const {
          location: e
        } = window, o = (0, t.A)(), s = (e => {
          const o = a.A.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), r = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = a.V;
        let l = i;
        const c = `rockstarweb_lang.${o.cookieIdentifier}`,
          u = (0, n.h)(c);
        l = o.currentSite?.site === t.C.www ? a.A.find((e => e.subdomaincom === r)) || a.A.find((e => e.subdomaincom === s)) || i : a.A.find((e => e.iso === u)) || i;
        const [d, b] = (0, n.A)(c, l.iso);
        return [l, b]
      }
    },
    4677: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => r,
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
        r = function(e, o) {
          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = a(e);
          return n && !s || t(e, o), [n, (r = e, e => {
            t(r, e)
          })];
          var r
        }
    },
    9186: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => n,
        V: () => a
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
    5136: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/);
        return s = s?.toLowerCase(), "cn" === s && (s = "hans"), o && s || (o = "en", s = "us"), [o, s]
      }
      s.d(o, {
        A: () => t
      })
    },
    3963: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => a,
        C: () => t
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
            location: o
          } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), t = n.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [t, n] = o;
            return n === s && (e = {
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