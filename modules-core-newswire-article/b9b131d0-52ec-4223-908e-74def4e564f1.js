! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "b9b131d0-52ec-4223-908e-74def4e564f1", e._sentryDebugIdIdentifier = "sentry-dbid-b9b131d0-52ec-4223-908e-74def4e564f1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [4143, 6632, 6524], {
    26516: (e, o, s) => {
      "use strict";
      var t = s(71403),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, s) {
        var t, r = {},
          c = null,
          d = null;
        for (t in void 0 !== s && (c = "" + s), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (d = o.ref), o) a.call(o, t) && !l.hasOwnProperty(t) && (r[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === r[t] && (r[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: i.current
        }
      }
      o.Fragment = r, o.jsx = c, o.jsxs = c
    },
    46632: (e, o, s) => {
      "use strict";
      e.exports = s(26516)
    },
    24143: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.A,
        IntlProvider: () => i.Kq,
        POSIXLocales: () => u.FN,
        createDevLocaleHook: () => l.A,
        createIntl: () => n.E,
        defineMessages: () => r.YK,
        englishLocale: () => u.Vm,
        getCookieValueByName: () => d.h,
        getLocale: () => c.A,
        localeCookieHandler: () => d.A,
        locales: () => u.Ay,
        splitLocale: () => b.A,
        useIntl: () => a.A,
        withIntl: () => i.QY
      });
      var t = s(87047),
        n = s(74952),
        r = s(30452),
        a = s(708),
        i = s(80120),
        l = s(93480),
        c = s(70175),
        d = s(64677),
        u = s(29186),
        b = s(95136),
        p = s(31272),
        m = {};
      for (const e in p)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (m[e] = () => p[e]);
      s.d(o, m)
    },
    80120: (e, o, s) => {
      "use strict";
      s.d(o, {
        Kq: () => l,
        QY: () => c
      });
      var t = s(71403),
        n = s(43071),
        r = s(70175),
        a = s(95136),
        i = s(46632);
      const l = e => {
        let {
          locales: o,
          lang: s,
          children: r
        } = e;
        const [l, c] = (0, t.useMemo)((() => (0, a.A)(s)), [s]), d = (0, t.useMemo)((() => function(e, o) {
          return e?.[o] ?? {}
        }(o, c)), [s, o]);
        return (0, i.jsx)(n.A, {
          messages: d,
          locale: l,
          defaultLocale: "en",
          children: r
        })
      };

      function c(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, r.A)();
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
    31272: () => {},
    93480: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => r
      });
      var t = s(70175),
        n = s(95136);
      const r = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: o
          }] = (0, t.A)(), [s, r] = (0, n.A)(o);
          return e?.[r] ?? e.us
        }
      }
    },
    70175: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => a
      });
      var t = s(13963),
        n = s(64677),
        r = s(29186);
      const a = () => {
        const {
          location: e
        } = window, o = (0, t.A)(), s = (e => {
          const o = r.Ay.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), a = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = r.Vm;
        let l = i;
        const c = `rockstarweb_lang.${o.cookieIdentifier}`,
          d = (0, n.h)(c);
        l = o.currentSite?.site === t.C.www ? r.Ay.find((e => e.subdomaincom === a)) || r.Ay.find((e => e.subdomaincom === s)) || i : r.Ay.find((e => e.iso === d)) || i;
        const [u, b] = (0, n.A)(c, l.iso);
        return [l, b]
      }
    },
    64677: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => a,
        h: () => r
      });
      const t = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${n()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        n = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        r = e => {
          const o = document.cookie.split("; "),
            s = `${e}=`,
            t = o.find((e => e.startsWith(s))),
            n = t?.substring(s.length, t.length);
          return n
        },
        a = function(e, o) {
          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = r(e);
          return n && !s || t(e, o), [n, (a = e, e => {
            t(a, e)
          })];
          var a
        }
    },
    29186: (e, o, s) => {
      "use strict";
      s.d(o, {
        Ay: () => a,
        FN: () => r,
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
        r = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        a = t
    },
    95136: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/), t = s?.toLowerCase();
        return "cn" === t && (t = "hans"), o && s || (o = "en", t = "us"), [o, t]
      }
      s.d(o, {
        A: () => t
      })
    },
    13963: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => r,
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
        r = () => {
          let e;
          const {
            location: o
          } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), t = n.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [t, n] = o;
            return n === s && (e = {
              site: t,
              subDomain: n
            }, !0)
          })) >= 0)), r = n[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    }
  }
]);