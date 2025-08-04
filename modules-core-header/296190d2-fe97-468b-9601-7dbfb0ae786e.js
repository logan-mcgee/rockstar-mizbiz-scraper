try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "296190d2-fe97-468b-9601-7dbfb0ae786e", e._sentryDebugIdIdentifier = "sentry-dbid-296190d2-fe97-468b-9601-7dbfb0ae786e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [954, 1154, 5716, 8573, 8773], {
    2562: (e, o, t) => {
      "use strict";
      t.d(o, {
        F: () => r
      });
      const r = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    5267: (e, o, t) => {
      var r = {
        "./de": [32265, 299],
        "./en": [55649, 5663],
        "./es": [50534, 5530],
        "./fr": [2414, 2466],
        "./it": [64083, 7073],
        "./ja": [4271, 4621],
        "./ko": [75648, 824],
        "./pl": [75270, 2398],
        "./pt": [60222, 9126],
        "./ru": [55475, 3697],
        "./zh": [90400, 1868]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 5267, e.exports = n
    },
    32779: (e, o, t) => {
      "use strict";
      t.d(o, {
        A: () => s,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        s = () => {
          let e;
          const {
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), r = n.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [r, n] = o;
            return n === t && (e = {
              site: r,
              subDomain: n
            }, !0)
          })) >= 0)), s = n[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    33019: (e, o, t) => {
      var r = {
        "./de": [17625, 6879],
        "./en": [82609, 2243],
        "./es": [1270, 278],
        "./fr": [5598, 9022],
        "./it": [88355, 2365],
        "./ja": [31647, 9377],
        "./ko": [42800, 9028],
        "./pl": [20438, 1242],
        "./pt": [35534, 7970],
        "./ru": [83779, 7453],
        "./zh": [28336, 8880]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 33019, e.exports = n
    },
    38525: (e, o, t) => {
      var r = {
        "./de": [32016, 9990],
        "./en": [23944, 1822],
        "./es": [91395, 2347],
        "./fr": [79767, 131],
        "./it": [15126, 8272],
        "./ja": [41134, 7436],
        "./ko": [48789, 2221],
        "./pl": [97635, 2171],
        "./pt": [80155, 8755],
        "./ru": [86570, 2864],
        "./zh": [65333, 3197]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 38525, e.exports = n
    },
    63514: (e, o, t) => {
      var r = {
        "./de": [47148, 4710],
        "./en": [98052, 3486],
        "./es": [21719, 4011],
        "./fr": [55803, 4851],
        "./it": [78842, 9936],
        "./ja": [32090, 2156],
        "./ko": [55529, 3885],
        "./pl": [93031, 6891],
        "./pt": [71039, 3475],
        "./ru": [30161, 4528],
        "./zh": [62049, 4861]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 63514, e.exports = n
    },
    67439: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => n.A,
        POSIXLocales: () => w,
        ReactIntlProviderForMocking: () => a.A,
        createDevLocaleHook: () => D,
        createIntl: () => s.E,
        defineMessages: () => r.YK,
        englishLocale: () => m,
        getCookieValueByName: () => p,
        getLocale: () => _,
        localeCookieHandler: () => f,
        locales: () => h,
        onLanguageChange: () => C,
        splitLocale: () => j,
        useIntl: () => i.A,
        withIntl: () => E
      });
      var r = t(66479),
        n = t(8855),
        s = t(31664),
        i = t(46644),
        a = t(44047),
        l = t(71127),
        u = t(32779),
        d = t(2562);
      const c = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${(0,d.F)()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        p = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            r = o.find((e => e.startsWith(t))),
            n = r?.substring(t.length, r.length);
          return n
        },
        f = function(e, o) {
          let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const r = p(e);
          return r && !t || c(e, o), [r, (n = e, e => {
            c(n, e)
          })];
          var n
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
              r = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[r]) ? t[r] : null
          })(e), r = (e => {
            const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return o?.split("=")[1]
          })(e), n = m;
          let s = n;
          const i = `rockstarweb_lang.${o.cookieIdentifier}`,
            a = p(i);
          s = o.currentSite?.site === u.C.www ? h.find((e => e.subdomaincom === r)) || h.find((e => e.subdomaincom === t)) || n : h.find((e => e.iso === a)) || n;
          const [l, d] = f(i, s.iso);
          return [s, d]
        };
      var k = t(47781);
      const g = () => "en-US";

      function y(e) {
        const o = e.split("-");
        return (0, k.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function v(e, o) {
        return e[o] ?? {}
      }
      var O = t(70954);

      function E(e, o, t, r) {
        return n => {
          const s = (0, l.useMemo)((() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? _()[0].iso ?? g(),
                  [, r] = [y(t), v(e, t)];
                var n;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (n = r, {
                    ...n
                  })
                }
              }(e, o)
            }(o, t)
          }), [t]);
          return (0, O.jsx)(a.A, {
            locale: s?.locale || g(),
            messages: {
              ...s?.messages
            },
            onError: r,
            children: s && (0, O.jsx)(e, {
              ...n
            })
          }, "intl-provider")
        }
      }

      function j(e) {
        let [o, t] = e.split(/[-_]/), r = t?.toLowerCase();
        return "cn" === r && (r = "hans"), o && t || (o = "en", r = "us"), [o, r]
      }
      const D = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = _(), [t, r] = j(o);
            return e?.[r] ?? e.us
          }
        },
        C = e => {
          let {
            selectedLocale: o,
            track: t,
            parent: r = ""
          } = e;
          const n = (0, u.A)(),
            [, s] = _(),
            {
              subdomaincom: i,
              iso: a
            } = o,
            l = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return h.map((e => e.subdomaincom)).includes(t[0]) && (o = t.slice(1).join("/")), n.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(i);
          t?.({
            event: "cta_other",
            link_url: l,
            text: i,
            element_placement: r?.toLowerCase()
          }), s(a), window.location.href = l
        }
    },
    70954: (e, o, t) => {
      "use strict";
      e.exports = t(92834)
    },
    92834: (e, o, t) => {
      "use strict";
      var r = t(71127),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, o, t) {
        var r, s = {},
          u = null,
          d = null;
        for (r in void 0 !== t && (u = "" + t), void 0 !== o.key && (u = "" + o.key), void 0 !== o.ref && (d = o.ref), o) i.call(o, r) && !l.hasOwnProperty(r) && (s[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === s[r] && (s[r] = o[r]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: d,
          props: s,
          _owner: a.current
        }
      }
      o.Fragment = s, o.jsx = u, o.jsxs = u
    },
    94375: (e, o, t) => {
      var r = {
        "./de": [88883, 5639],
        "./en": [81039, 6267],
        "./es": [39116, 5742],
        "./fr": [64632, 2678],
        "./it": [42685, 6997],
        "./ja": [89437, 6361],
        "./ko": [55130, 7452],
        "./pl": [26096, 2642],
        "./pt": [59464, 3034],
        "./ru": [98825, 3941],
        "./zh": [37030, 5832]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 94375, e.exports = n
    },
    94819: (e, o, t) => {
      var r = {
        "./de": [30821, 5259],
        "./en": [65021, 4799],
        "./es": [98042, 3370],
        "./fr": [74850, 7010],
        "./it": [24215, 4913],
        "./ja": [22379, 6285],
        "./ko": [46372, 6664],
        "./pl": [33194, 1054],
        "./pt": [96514, 662],
        "./ru": [1415, 5233],
        "./zh": [57900, 4700]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 94819, e.exports = n
    }
  }
]);