! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "2d82c88b-5fc6-4cd3-b530-543a224637b8", e._sentryDebugIdIdentifier = "sentry-dbid-2d82c88b-5fc6-4cd3-b530-543a224637b8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [924, 240, 304], {
    99576: (e, o, s) => {
      "use strict";
      var t = s(51664),
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
          u = null;
        for (t in void 0 !== s && (c = "" + s), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) a.call(o, t) && !l.hasOwnProperty(t) && (r[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === r[t] && (r[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: u,
          props: r,
          _owner: i.current
        }
      }
      o.Fragment = r, o.jsx = c, o.jsxs = c
    },
    95240: (e, o, s) => {
      "use strict";
      e.exports = s(99576)
    },
    8304: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.c,
        IntlProvider: () => i.C_,
        createDevLocaleHook: () => l.c,
        createIntl: () => n.y,
        defineMessages: () => r.Os,
        englishLocale: () => d.u,
        getCookieValueByName: () => u.M,
        getLocale: () => c.c,
        localeCookieHandler: () => u.c,
        locales: () => d.c,
        splitLocale: () => b.c,
        useIntl: () => a.c,
        withIntl: () => i.eO
      });
      var t = s(3832),
        n = s(54188),
        r = s(45052),
        a = s(95688),
        i = s(11676),
        l = s(32748),
        c = s(48787),
        u = s(36320),
        d = s(41285),
        b = s(68068),
        p = s(71388),
        f = {};
      for (const e in p)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (f[e] = () => p[e]);
      s.d(o, f)
    },
    11676: (e, o, s) => {
      "use strict";
      s.d(o, {
        C_: () => l,
        eO: () => c
      });
      var t = s(51664),
        n = s(83852),
        r = s(48787),
        a = s(68068),
        i = s(95240);
      const l = e => {
        let {
          locales: o,
          lang: s,
          children: r
        } = e;
        const l = (0, t.useMemo)((() => (0, a.c)(s)), [s]),
          c = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, l[1])), [s, o]);
        return (0, i.jsx)(n.c, {
          messages: c,
          locale: l[0],
          defaultLocale: "en",
          children: r
        }, l[0])
      };

      function c(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, r.c)();
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
    71388: () => {},
    32748: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => a
      });
      var t = s(3061),
        n = s(51664),
        r = s(68068);
      const a = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.useLocale)(),
            s = (0, n.useMemo)((() => (0, r.c)(o)), [o]);
          return e?.[s[1]] ?? e.us
        }
      }
    },
    48787: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => a
      });
      var t = s(53592),
        n = s(36320),
        r = s(41285);
      const a = () => {
        const {
          location: e
        } = window, o = (0, t.c)(), s = (e => {
          const o = r.c.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), a = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = r.u;
        let l = i;
        const c = `rockstarweb_lang.${o.cookieIdentifier}`,
          u = (0, n.M)(c);
        l = o.currentSite?.site === t.U.www ? r.c.find((e => e.subdomaincom === a)) || r.c.find((e => e.subdomaincom === s)) || i : r.c.find((e => e.iso === u)) || i;
        const [d, b] = (0, n.c)(c, l.iso);
        return [l, b]
      }
    },
    36320: (e, o, s) => {
      "use strict";
      s.d(o, {
        M: () => r,
        c: () => a
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
    41285: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => n,
        u: () => r
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
        r = t[1]
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
    },
    53592: (e, o, s) => {
      "use strict";
      s.d(o, {
        U: () => t,
        c: () => r
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