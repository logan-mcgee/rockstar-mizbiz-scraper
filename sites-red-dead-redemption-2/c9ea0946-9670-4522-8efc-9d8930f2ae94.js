! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "c9ea0946-9670-4522-8efc-9d8930f2ae94", e._sentryDebugIdIdentifier = "sentry-dbid-c9ea0946-9670-4522-8efc-9d8930f2ae94")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
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
          c = null;
        for (t in void 0 !== s && (d = "" + s), void 0 !== o.key && (d = "" + o.key), void 0 !== o.ref && (c = o.ref), o) r.call(o, t) && !l.hasOwnProperty(t) && (a[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === a[t] && (a[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: c,
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
        createDevLocaleHook: () => l.A,
        createIntl: () => n.E,
        defineMessages: () => a.YK,
        englishLocale: () => u.V,
        getCookieValueByName: () => c.h,
        getLocale: () => d.A,
        localeCookieHandler: () => c.A,
        locales: () => u.A,
        splitLocale: () => f.A,
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
        c = s(64677),
        u = s(29186),
        f = s(95136),
        m = s(31272),
        p = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => m[e]);
      s.d(o, p)
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
        const l = (0, t.useMemo)((() => (0, r.A)(s)), [s]),
          d = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, l[1])), [s, o]);
        return (0, i.jsx)(n.A, {
          messages: d,
          locale: l[0],
          defaultLocale: "en",
          children: a
        }, l[0])
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
        A: () => r
      });
      var t = s(70396),
        n = s(71403),
        a = s(95136);
      const r = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.useLocale)(),
            s = (0, n.useMemo)((() => (0, a.A)(o)), [o]);
          return e?.[s[1]] ?? e.us
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
          const o = a.A.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), r = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = a.V;
        let l = i;
        const d = `rockstarweb_lang.${o.cookieIdentifier}`,
          c = (0, n.h)(d);
        l = "www" === o.currentSite?.site ? a.A.find((e => e.subdomaincom === r)) || a.A.find((e => e.subdomaincom === s)) || i : a.A.find((e => e.iso === c)) || i;
        const [u, f] = (0, n.A)(d, l.iso);
        return [l, f]
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
    95136: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/);
        return s = s?.toLowerCase(), "cn" === s && (s = "hans"), o && s || (o = "en", s = "us"), [o, s]
      }
      s.d(o, {
        A: () => t
      })
    }
  }
]);