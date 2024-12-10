! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "a0ae58da-052e-4835-9699-d5c31edf4b42", e._sentryDebugIdIdentifier = "sentry-dbid-a0ae58da-052e-4835-9699-d5c31edf4b42")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [143, 524], {
    26516: (e, o, s) => {
      "use strict";
      var t = s(71403),
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

      function d(e, o, s) {
        var t, a = {},
          d = null,
          u = null;
        for (t in void 0 !== s && (d = "" + s), void 0 !== o.key && (d = "" + o.key), void 0 !== o.ref && (u = o.ref), o) r.call(o, t) && !l.hasOwnProperty(t) && (a[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === a[t] && (a[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: u,
          props: a,
          _owner: i.current
        }
      }
      o.Fragment = a, o.jsx = d, o.jsxs = d
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
        createIntl: () => n.E,
        defineMessages: () => a.YK,
        englishLocale: () => c.Vm,
        getCookieValueByName: () => u.h,
        getLocale: () => d.A,
        localeCookieHandler: () => u.A,
        locales: () => c.Ay,
        splitLocale: () => b.A,
        useIntl: () => r.A,
        withIntl: () => i.QY
      });
      var t = s(87047),
        n = s(74952),
        a = s(30452),
        r = s(708),
        i = s(80120),
        l = s(93480),
        d = s(61134),
        u = s(64677),
        c = s(29186),
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
        QY: () => d
      });
      var t = s(71403),
        n = s(43071),
        a = s(61134),
        r = s(95136),
        i = s(46632);
      const l = e => {
        let {
          locales: o,
          lang: s,
          children: a
        } = e;
        const [l, d] = (0, t.useMemo)((() => (0, r.A)(s)), [s]), u = (0, t.useMemo)((() => function(e, o) {
          return e?.[o] ?? {}
        }(o, d)), [s, o]);
        return (0, i.jsx)(n.A, {
          messages: u,
          locale: l,
          defaultLocale: "en",
          children: a
        })
      };

      function d(e, o) {
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
    31272: () => {},
    93480: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => a
      });
      var t = s(61134),
        n = s(95136);
      const a = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: o
          }] = (0, t.A)(), [s, a] = (0, n.A)(o);
          return e?.[a] ?? e.us
        }
      }
    },
    61134: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => r
      });
      const t = [{
        id: "prod",
        sites: {
          www: "www",
          socialClub: "socialclub",
          support: "support",
          store: "store"
        },
        cookieIdentifier: "prod"
      }];
      var n = s(64677),
        a = s(29186);
      const r = () => {
        const {
          location: e
        } = window, o = (() => {
          let e;
          const {
            location: o
          } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), n = t.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [t, n] = o;
            return n === s && (e = {
              site: t,
              subDomain: n
            }, !0)
          })) >= 0)), a = t[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        })(), s = (e => {
          const o = a.Ay.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), r = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = a.Vm;
        let l = i;
        const d = `rockstarweb_lang.${o.cookieIdentifier}`,
          u = (0, n.h)(d);
        l = "www" === o.currentSite?.site ? a.Ay.find((e => e.subdomaincom === r)) || a.Ay.find((e => e.subdomaincom === s)) || i : a.Ay.find((e => e.iso === u)) || i;
        const [c, b] = (0, n.A)(d, l.iso);
        return [l, b]
      }
    },
    64677: (e, o, s) => {
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
    29186: (e, o, s) => {
      "use strict";
      s.d(o, {
        Ay: () => r,
        FN: () => a,
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
        a = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
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
    }
  }
]);