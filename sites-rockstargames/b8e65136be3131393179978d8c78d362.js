/*! For license information please see b8e65136be3131393179978d8c78d362.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "ae34a555-e316-4295-ab15-e0e1cd144088", e._sentryDebugIdIdentifier = "sentry-dbid-ae34a555-e316-4295-ab15-e0e1cd144088")
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
  [64, 240, 860, 672, 304], {
    99576: (e, o, t) => {
      "use strict";
      var s = t(51664),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, t) {
        var s, n = {},
          c = null,
          u = null;
        for (s in void 0 !== t && (c = "" + t), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) a.call(o, s) && !l.hasOwnProperty(s) && (n[s] = o[s]);
        if (e && e.defaultProps)
          for (s in o = e.defaultProps) void 0 === n[s] && (n[s] = o[s]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: u,
          props: n,
          _owner: i.current
        }
      }
      o.Fragment = n, o.jsx = c, o.jsxs = c
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
        createIntl: () => r.y,
        defineMessages: () => n.Os,
        englishLocale: () => d.u,
        getLocale: () => c.c,
        localeCookieHandler: () => u.c,
        locales: () => d.c,
        splitLocale: () => p.c,
        useIntl: () => a.c,
        withIntl: () => i.eO
      });
      var s = t(3832),
        r = t(54188),
        n = t(45052),
        a = t(95688),
        i = t(11676),
        l = t(32748),
        c = t(48787),
        u = t(36320),
        d = t(41285),
        p = t(68068),
        f = t(71388),
        b = {};
      for (const e in f)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (b[e] = () => f[e]);
      t.d(o, b)
    },
    11676: (e, o, t) => {
      "use strict";
      t.d(o, {
        C_: () => l,
        eO: () => c
      });
      var s = t(51664),
        r = t(83852),
        n = t(48787),
        a = t(68068),
        i = t(95240);
      const l = e => {
        let {
          locales: o,
          lang: t,
          children: n
        } = e;
        const l = (0, s.useMemo)((() => (0, a.c)(t)), [t]),
          c = (0, s.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, l[1])), [t, o]);
        return (0, i.jsx)(r.c, {
          messages: c,
          locale: l[0],
          defaultLocale: "en",
          children: n
        }, l[0])
      };

      function c(e, o) {
        return t => {
          const [{
            iso: s
          }] = (0, n.c)();
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
        r = t(51664),
        n = t(68068);
      const a = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, s.useLocale)(),
            t = (0, r.useMemo)((() => (0, n.c)(o)), [o]);
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
        r = t(36320),
        n = t(41285);
      const a = () => {
        const {
          location: e
        } = window, o = (0, s.c)(), t = (e => {
          const o = n.c.map((e => e.subdomaincom)),
            t = e.pathname.substring(1).split("/"),
            s = "detect-locals" === t[0] ? 1 : 0;
          return -1 !== o.indexOf(t[s]) ? t[s] : null
        })(e), a = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), i = n.u, [l, c] = (0, r.c)(`rockstarweb_lang.${o.cookieIdentifier}`, t ?? void 0);
        let u = i;
        return u = o.currentSite?.site === s.U.www ? n.c.find((e => e.subdomaincom === a)) || n.c.find((e => e.subdomaincom === t)) || i : n.c.find((e => e.iso === l)) || i, [u, c]
      }
    },
    36320: (e, o, t) => {
      "use strict";
      t.d(o, {
        c: () => n
      });
      const s = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${r()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        r = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        n = function(e, o) {
          let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const r = document.cookie.split("; "),
            n = `${e}=`,
            a = r.find((e => e.startsWith(n))),
            i = a?.substring(n.length, a.length);
          return i && !t || s(e, o), [i, (l = e, e => {
            s(l, e)
          })];
          var l
        }
    },
    41285: (e, o, t) => {
      "use strict";
      t.d(o, {
        c: () => r,
        u: () => n
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
        r = s,
        n = s[1]
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
        c: () => n
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
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
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), s = r.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [s, r] = o;
            return r === t && (e = {
              site: s,
              subDomain: r
            }, !0)
          })) >= 0)), n = r[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    },
    87672: (e, o, t) => {
      "use strict";
      t.d(o, {
        C3: () => n,
        Mt: () => i,
        ct: () => r,
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

      function r(e, o) {
        if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        s(e, o), e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t)
      }
      var n = function() {
        return n = Object.assign || function(e) {
          for (var o, t = 1, s = arguments.length; t < s; t++)
            for (var r in o = arguments[t]) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
          return e
        }, n.apply(this, arguments)
      };

      function a(e, o) {
        var t = {};
        for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && o.indexOf(s) < 0 && (t[s] = e[s]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) o.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (t[s[r]] = e[s[r]])
        }
        return t
      }

      function i(e, o, t) {
        if (t || 2 === arguments.length)
          for (var s, r = 0, n = o.length; r < n; r++) !s && r in o || (s || (s = Array.prototype.slice.call(o, 0, r)), s[r] = o[r]);
        return e.concat(s || Array.prototype.slice.call(o))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);
//# sourceMappingURL=b8e65136be3131393179978d8c78d362.js.map