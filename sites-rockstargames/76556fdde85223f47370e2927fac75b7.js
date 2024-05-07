! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "4ddf8885-78b5-49ef-8d4d-46f760f265b7", e._sentryDebugIdIdentifier = "sentry-dbid-4ddf8885-78b5-49ef-8d4d-46f760f265b7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [64, 240, 860, 672, 304], {
    99576: (e, o, t) => {
      "use strict";
      var s = t(51664),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, t) {
        var s, r = {},
          c = null,
          u = null;
        for (s in void 0 !== t && (c = "" + t), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) a.call(o, s) && !l.hasOwnProperty(s) && (r[s] = o[s]);
        if (e && e.defaultProps)
          for (s in o = e.defaultProps) void 0 === r[s] && (r[s] = o[s]);
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
    95240: (e, o, t) => {
      "use strict";
      e.exports = t(99576)
    },
    8304: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => s.c,
        IntlProvider: () => i.C_,
        createDevLocaleHook: () => l.c,
        createIntl: () => n.y,
        defineMessages: () => r.Os,
        englishLocale: () => d.u,
        getCookieValueByName: () => u.M,
        getLocale: () => c.c,
        localeCookieHandler: () => u.c,
        locales: () => d.c,
        splitLocale: () => p.c,
        useIntl: () => a.c,
        withIntl: () => i.eO
      });
      var s = t(3832),
        n = t(54188),
        r = t(45052),
        a = t(95688),
        i = t(11676),
        l = t(32748),
        c = t(48787),
        u = t(36320),
        d = t(41285),
        p = t(68068),
        f = t(71388),
        b = {};
      for (const e in f)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (b[e] = () => f[e]);
      t.d(o, b)
    },
    11676: (e, o, t) => {
      "use strict";
      t.d(o, {
        C_: () => l,
        eO: () => c
      });
      var s = t(51664),
        n = t(83852),
        r = t(48787),
        a = t(68068),
        i = t(95240);
      const l = e => {
        let {
          locales: o,
          lang: t,
          children: r
        } = e;
        const l = (0, s.useMemo)((() => (0, a.c)(t)), [t]),
          c = (0, s.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, l[1])), [t, o]);
        return (0, i.jsx)(n.c, {
          messages: c,
          locale: l[0],
          defaultLocale: "en",
          children: r
        }, l[0])
      };

      function c(e, o) {
        return t => {
          const [{
            iso: s
          }] = (0, r.c)();
          return (0, i.jsx)(l, {
            locales: o,
            lang: s,
            children: (0, i.jsx)(e, {
              ...t
            })
          })
        }
      }
    },
    71388: () => {},
    32748: (e, o, t) => {
      "use strict";
      t.d(o, {
        c: () => a
      });
      var s = t(3061),
        n = t(51664),
        r = t(68068);
      const a = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, s.useLocale)(),
            t = (0, n.useMemo)((() => (0, r.c)(o)), [o]);
          return e?.[t[1]] ?? e.us
        }
      }
    },
    48787: (e, o, t) => {
      "use strict";
      t.d(o, {
        c: () => a
      });
      var s = t(53592),
        n = t(36320),
        r = t(41285);
      const a = () => {
        const {
          location: e
        } = window, o = (0, s.c)(), t = (e => {
          const o = r.c.map((e => e.subdomaincom)),
            t = e.pathname.substring(1).split("/"),
            s = "detect-locals" === t[0] ? 1 : 0;
          return -1 !== o.indexOf(t[s]) ? t[s] : null
        })(e), a = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = r.u;
        let l = i;
        const c = `rockstarweb_lang.${o.cookieIdentifier}`,
          u = (0, n.M)(c);
        l = o.currentSite?.site === s.U.www ? r.c.find((e => e.subdomaincom === a)) || r.c.find((e => e.subdomaincom === t)) || i : r.c.find((e => e.iso === u)) || i;
        const [d, p] = (0, n.c)(c, l.iso);
        return [l, p]
      }
    },
    36320: (e, o, t) => {
      "use strict";
      t.d(o, {
        M: () => r,
        c: () => a
      });
      const s = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${n()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        n = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        r = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            s = o.find((e => e.startsWith(t))),
            n = s?.substring(t.length, s.length);
          return n
        },
        a = function(e, o) {
          let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = r(e);
          return n && !t || s(e, o), [n, (a = e, e => {
            s(a, e)
          })];
          var a
        }
    },
    41285: (e, o, t) => {
      "use strict";
      t.d(o, {
        c: () => n,
        u: () => r
      });
      const s = [{
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
        n = s,
        r = s[1]
    },
    68068: (e, o, t) => {
      "use strict";

      function s(e) {
        let [o, t] = e.split(/[-_]/);
        return t = t?.toLowerCase(), "cn" === t && (t = "hans"), o && t || (o = "en", t = "us"), [o, t]
      }
      t.d(o, {
        c: () => s
      })
    },
    53592: (e, o, t) => {
      "use strict";
      t.d(o, {
        U: () => s,
        c: () => r
      });
      const s = {
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
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), s = n.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [s, n] = o;
            return n === t && (e = {
              site: s,
              subDomain: n
            }, !0)
          })) >= 0)), r = n[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    87672: (e, o, t) => {
      "use strict";
      t.d(o, {
        C3: () => r,
        Mt: () => i,
        ct: () => n,
        sX: () => a
      });
      var s = function(e, o) {
        return s = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, o) {
          e.__proto__ = o
        } || function(e, o) {
          for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
        }, s(e, o)
      };

      function n(e, o) {
        if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        s(e, o), e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t)
      }
      var r = function() {
        return r = Object.assign || function(e) {
          for (var o, t = 1, s = arguments.length; t < s; t++)
            for (var n in o = arguments[t]) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
          return e
        }, r.apply(this, arguments)
      };

      function a(e, o) {
        var t = {};
        for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && o.indexOf(s) < 0 && (t[s] = e[s]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) o.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (t[s[n]] = e[s[n]])
        }
        return t
      }

      function i(e, o, t) {
        if (t || 2 === arguments.length)
          for (var s, n = 0, r = o.length; n < r; n++) !s && n in o || (s || (s = Array.prototype.slice.call(o, 0, n)), s[n] = o[n]);
        return e.concat(s || Array.prototype.slice.call(o))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);