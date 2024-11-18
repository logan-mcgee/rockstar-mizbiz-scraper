! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "122ac3fa-f977-4f42-b738-1ef731abe92a", e._sentryDebugIdIdentifier = "sentry-dbid-122ac3fa-f977-4f42-b738-1ef731abe92a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [4143, 6524], {
    26516: (e, o, s) => {
      "use strict";
      var t = s(71403),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, o, s) {
        var t, n = {},
          u = null,
          d = null;
        for (t in void 0 !== s && (u = "" + s), void 0 !== o.key && (u = "" + o.key), void 0 !== o.ref && (d = o.ref), o) r.call(o, t) && !l.hasOwnProperty(t) && (n[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === n[t] && (n[t] = o[t]);
        return {
          $$typeof: a,
          type: e,
          key: u,
          ref: d,
          props: n,
          _owner: i.current
        }
      }
      o.Fragment = n, o.jsx = u, o.jsxs = u
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
        POSIXLocales: () => c.FN,
        createDevLocaleHook: () => l.A,
        createIntl: () => a.E,
        defineMessages: () => n.YK,
        englishLocale: () => c.Vm,
        getCookieValueByName: () => d.h,
        getLocale: () => u.A,
        localeCookieHandler: () => d.A,
        locales: () => c.Ay,
        splitLocale: () => f.A,
        useIntl: () => r.A,
        withIntl: () => i.QY
      });
      var t = s(87047),
        a = s(74952),
        n = s(30452),
        r = s(708),
        i = s(80120),
        l = s(93480),
        u = s(70175),
        d = s(64677),
        c = s(29186),
        f = s(95136),
        b = s(31272),
        p = {};
      for (const e in b)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => b[e]);
      s.d(o, p)
    },
    80120: (e, o, s) => {
      "use strict";
      s.d(o, {
        Kq: () => l,
        QY: () => u
      });
      var t = s(71403),
        a = s(43071),
        n = s(70175),
        r = s(95136),
        i = s(46632);
      const l = e => {
        let {
          locales: o,
          lang: s,
          children: n
        } = e;
        const [l, u] = (0, t.useMemo)((() => (0, r.A)(s)), [s]), d = (0, t.useMemo)((() => function(e, o) {
          return e?.[o] ?? {}
        }(o, u)), [s, o]);
        return (0, i.jsx)(a.A, {
          messages: d,
          locale: l,
          defaultLocale: "en",
          children: n
        })
      };

      function u(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, n.A)();
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
        A: () => n
      });
      var t = s(70175),
        a = s(95136);
      const n = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: o
          }] = (0, t.A)(), [s, n] = (0, a.A)(o);
          return e?.[n] ?? e.us
        }
      }
    },
    70175: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => r
      });
      var t = s(13963),
        a = s(64677),
        n = s(29186);
      const r = () => {
        const {
          location: e
        } = window, o = (0, t.A)(), s = (e => {
          const o = n.Ay.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), r = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = n.Vm;
        let l = i;
        const u = `rockstarweb_lang.${o.cookieIdentifier}`,
          d = (0, a.h)(u);
        l = o.currentSite?.site === t.C.www ? n.Ay.find((e => e.subdomaincom === r)) || n.Ay.find((e => e.subdomaincom === s)) || i : n.Ay.find((e => e.iso === d)) || i;
        const [c, f] = (0, a.A)(u, l.iso);
        return [l, f]
      }
    },
    64677: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => r,
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
        r = function(e, o) {
          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const a = n(e);
          return a && !s || t(e, o), [a, (r = e, e => {
            t(r, e)
          })];
          var r
        }
    },
    29186: (e, o, s) => {
      "use strict";
      s.d(o, {
        Ay: () => r,
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
        r = t
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
        A: () => n,
        C: () => t
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        a = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        n = () => {
          let e;
          const {
            location: o
          } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), t = a.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [t, a] = o;
            return a === s && (e = {
              site: t,
              subDomain: a
            }, !0)
          })) >= 0)), n = a[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    }
  }
]);