! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      o = (new e.Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "b9947d23-c2bf-419e-802d-3eac3dcae0c1", e._sentryDebugIdIdentifier = "sentry-dbid-b9947d23-c2bf-419e-802d-3eac3dcae0c1")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "1a2a4086bf51f6ab1b48a1034109163ec977b086",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "1a2a4086bf51f6ab1b48a1034109163ec977b086"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [838, 2327, 8457], {
    148: (e, o, t) => {
      "use strict";
      t.d(o, {
        A: () => s,
        C: () => n
      });
      const n = {
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
        s = () => {
          let e;
          const {
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), n = r.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [n, r] = o;
            return r === t && (e = {
              site: n,
              subDomain: r
            }, !0)
          })) >= 0)), s = r[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    1133: (e, o, t) => {
      var n = {
        "./de": [6304, 4710],
        "./en": [3832, 3486],
        "./es": [4579, 4011],
        "./fr": [2951, 4851],
        "./it": [5014, 9936],
        "./ja": [5422, 2156],
        "./ko": [6373, 3885],
        "./pl": [1923, 6891],
        "./pt": [267, 3475],
        "./ru": [2282, 4528],
        "./zh": [7749, 4861]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 1133, e.exports = r
    },
    1454: (e, o, t) => {
      "use strict";
      var n = t(2229),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, o, t) {
        var n, s = {},
          u = null,
          d = null;
        for (n in void 0 !== t && (u = "" + t), void 0 !== o.key && (u = "" + o.key), void 0 !== o.ref && (d = o.ref), o) a.call(o, n) && !l.hasOwnProperty(n) && (s[n] = o[n]);
        if (e && e.defaultProps)
          for (n in o = e.defaultProps) void 0 === s[n] && (s[n] = o[n]);
        return {
          $$typeof: r,
          type: e,
          key: u,
          ref: d,
          props: s,
          _owner: i.current
        }
      }
      o.Fragment = s, o.jsx = u, o.jsxs = u
    },
    3019: (e, o, t) => {
      var n = {
        "./de": [1261, 6879],
        "./en": [7157, 2243],
        "./es": [5813, 278],
        "./fr": [3034, 9022],
        "./it": [8271, 2365],
        "./ja": [6083, 9377],
        "./ko": [1324, 9028],
        "./pl": [9090, 1242],
        "./pt": [4698, 7970],
        "./ru": [3695, 7453],
        "./zh": [7188, 8880]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 3019, e.exports = r
    },
    4375: (e, o, t) => {
      var n = {
        "./de": [7311, 5639],
        "./en": [2347, 6267],
        "./es": [7376, 5742],
        "./fr": [7084, 2678],
        "./it": [1121, 6997],
        "./ja": [1561, 6361],
        "./ko": [5982, 7452],
        "./pl": [3204, 2642],
        "./pt": [6396, 3034],
        "./ru": [6317, 3941],
        "./zh": [754, 5832]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 4375, e.exports = r
    },
    4819: (e, o, t) => {
      var n = {
        "./de": [3577, 5259],
        "./en": [1137, 4799],
        "./es": [5494, 3370],
        "./fr": [2974, 7010],
        "./it": [6515, 4913],
        "./ja": [1535, 6285],
        "./ko": [6208, 6664],
        "./pl": [230, 1054],
        "./pt": [9006, 662],
        "./ru": [211, 5233],
        "./zh": [8432, 4700]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 4819, e.exports = r
    },
    5267: (e, o, t) => {
      var n = {
        "./de": [5293, 299],
        "./en": [8085, 5663],
        "./es": [6594, 5530],
        "./fr": [3210, 2466],
        "./it": [3135, 7073],
        "./ja": [115, 4621],
        "./ko": [8140, 824],
        "./pl": [3122, 2398],
        "./pt": [5626, 9126],
        "./ru": [8559, 3697],
        "./zh": [3572, 1868]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 5267, e.exports = r
    },
    5671: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => r.A,
        POSIXLocales: () => w,
        ReactIntlProviderForMocking: () => i.A,
        createDevLocaleHook: () => j,
        createIntl: () => s.E,
        defineMessages: () => n.YK,
        englishLocale: () => m,
        getCookieValueByName: () => p,
        getLocale: () => _,
        localeCookieHandler: () => f,
        locales: () => h,
        onLanguageChange: () => D,
        splitLocale: () => M,
        useIntl: () => a.A,
        withIntl: () => E
      });
      var n = t(9008),
        r = t(1075),
        s = t(6692),
        a = t(6920),
        i = t(5379),
        l = t(2229),
        u = t(148),
        d = t(7171);
      const c = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${(0,d.F)()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        p = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            n = o.find((e => e.startsWith(t))),
            r = n?.substring(t.length, n.length);
          return r
        },
        f = function(e, o) {
          let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = p(e);
          return n && !t || c(e, o), [n, (r = e, e => {
            c(r, e)
          })];
          var r
        },
        b = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
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
        m = b[0],
        w = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        h = b,
        _ = () => {
          const {
            location: e
          } = window, o = (0, u.A)(), t = (e => {
            const o = h.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              n = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[n]) ? t[n] : null
          })(e), n = (e => {
            const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return o?.split("=")[1]
          })(e), r = m;
          let s = r;
          const a = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = p(a);
          s = o.currentSite?.site === u.C.www ? h.find((e => e.subdomaincom === n)) || h.find((e => e.subdomaincom === t)) || r : h.find((e => e.iso === i)) || r;
          const [l, d] = f(a, s.iso);
          return [s, d]
        };
      var g = t(6481);
      const k = () => "en-US";

      function y(e) {
        const o = e.split("-");
        return (0, g.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function v(e, o) {
        return e[o] ?? {}
      }
      var O = t(5854);

      function E(e, o, t, n) {
        return r => {
          const s = (0, l.useMemo)((() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? _()[0].iso ?? k(),
                  [, n] = [y(t), v(e, t)];
                var r;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (r = n, {
                    ...r
                  })
                }
              }(e, o)
            }(o, t)
          }), [t]);
          return (0, O.jsx)(i.A, {
            locale: s?.locale || k(),
            messages: {
              ...s?.messages
            },
            onError: n,
            children: s && (0, O.jsx)(e, {
              ...r
            })
          }, "intl-provider")
        }
      }

      function M(e) {
        let [o, t] = e.split(/[-_]/), n = t?.toLowerCase();
        return "cn" === n && (n = "hans"), o && t || (o = "en", n = "us"), [o, n]
      }
      const j = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = _(), [t, n] = M(o);
            return e?.[n] ?? e.us
          }
        },
        D = e => {
          let {
            selectedLocale: o,
            track: t,
            parent: n = ""
          } = e;
          const r = (0, u.A)(),
            [s, a] = _(),
            {
              subdomaincom: i,
              iso: l
            } = o,
            d = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return h.map((e => e.subdomaincom)).includes(t[0]) && (o = t.slice(1).join("/")), r.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(i);
          t?.({
            event: "cta_other",
            link_url: d,
            text: i,
            element_placement: n
          }), a(l), window.location.href = d
        }
    },
    5854: (e, o, t) => {
      "use strict";
      e.exports = t(1454)
    },
    7171: (e, o, t) => {
      "use strict";
      t.d(o, {
        F: () => n
      });
      const n = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    8525: (e, o, t) => {
      var n = {
        "./de": [9692, 9990],
        "./en": [8436, 1822],
        "./es": [7911, 2347],
        "./fr": [3691, 131],
        "./it": [9802, 8272],
        "./ja": [3050, 7436],
        "./ko": [8073, 2221],
        "./pl": [695, 2171],
        "./pt": [1999, 8755],
        "./ru": [1790, 2864],
        "./zh": [2721, 3197]
      };

      function r(e) {
        if (!t.o(n, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = n[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(n), r.id = 8525, e.exports = r
    }
  }
]);