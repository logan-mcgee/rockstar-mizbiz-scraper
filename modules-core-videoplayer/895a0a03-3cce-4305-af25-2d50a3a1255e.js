try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "895a0a03-3cce-4305-af25-2d50a3a1255e", e._sentryDebugIdIdentifier = "sentry-dbid-895a0a03-3cce-4305-af25-2d50a3a1255e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [6265, 8646], {
    12011(e, o, t) {
      var r = {
        "./de": [95298, [5259]],
        "./en": [83862, [4799]],
        "./es": [82097, [3370]],
        "./fr": [33033, [7010]],
        "./it": [78088, [4913]],
        "./ja": [95228, [6285]],
        "./ko": [48543, [6664]],
        "./pl": [46629, [1054]],
        "./pt": [84605, [662]],
        "./ru": [24392, [5233]],
        "./zh": [54619, [4700]]
      };

      function s(e) {
        try {
          if (!t.o(r, e)) return Promise.resolve().then(() => {
            var o = new Error("Cannot find module '" + e + "'");
            throw o.code = "MODULE_NOT_FOUND", o
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var o = r[e],
          s = o[0];
        return t.e(o[1][0]).then(() => t.t(s, 23))
      }
      s.keys = () => Object.keys(r), s.id = 12011, e.exports = s
    },
    60375(e, o, t) {
      var r = {
        "./de": [59937, [5639]],
        "./en": [27753, [6267]],
        "./es": [71774, [5742]],
        "./fr": [84294, [2678]],
        "./it": [71035, [6997]],
        "./ja": [25047, [6361]],
        "./ko": [62264, [7452]],
        "./pl": [55790, [2642]],
        "./pt": [6006, [3034]],
        "./ru": [44139, [3941]],
        "./zh": [68504, [5832]]
      };

      function s(e) {
        try {
          if (!t.o(r, e)) return Promise.resolve().then(() => {
            var o = new Error("Cannot find module '" + e + "'");
            throw o.code = "MODULE_NOT_FOUND", o
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var o = r[e],
          s = o[0];
        return t.e(o[1][0]).then(() => t.t(s, 23))
      }
      s.keys = () => Object.keys(r), s.id = 60375, e.exports = s
    },
    42768(e, o, t) {
      var r = {
        "./de": [74655, [4710]],
        "./en": [67675, [3486]],
        "./es": [2160, [4011]],
        "./fr": [23276, [4851]],
        "./it": [66257, [9936]],
        "./ja": [43321, [2156]],
        "./ko": [18222, [3885]],
        "./pl": [90756, [6891]],
        "./pt": [27788, [3475]],
        "./ru": [10493, [4528]],
        "./zh": [66402, [4861]]
      };

      function s(e) {
        try {
          if (!t.o(r, e)) return Promise.resolve().then(() => {
            var o = new Error("Cannot find module '" + e + "'");
            throw o.code = "MODULE_NOT_FOUND", o
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var o = r[e],
          s = o[0];
        return t.e(o[1][0]).then(() => t.t(s, 23))
      }
      s.keys = () => Object.keys(r), s.id = 42768, e.exports = s
    },
    19051(e, o, t) {
      var r = {
        "./de": [80671, [299]],
        "./en": [73691, [5663]],
        "./es": [27408, [5530]],
        "./fr": [62924, [2466]],
        "./it": [22257, [7073]],
        "./ja": [84921, [4621]],
        "./ko": [66766, [824]],
        "./pl": [39300, [2398]],
        "./pt": [50156, [9126]],
        "./ru": [32861, [3697]],
        "./zh": [79874, [1868]]
      };

      function s(e) {
        try {
          if (!t.o(r, e)) return Promise.resolve().then(() => {
            var o = new Error("Cannot find module '" + e + "'");
            throw o.code = "MODULE_NOT_FOUND", o
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var o = r[e],
          s = o[0];
        return t.e(o[1][0]).then(() => t.t(s, 23))
      }
      s.keys = () => Object.keys(r), s.id = 19051, e.exports = s
    },
    9742(e, o, t) {
      var r = {
        "./de": [33380, [9990]],
        "./en": [11564, [1822]],
        "./es": [60431, [2347]],
        "./fr": [30899, [131]],
        "./it": [4354, [8272]],
        "./ja": [73954, [7436]],
        "./ko": [22817, [2221]],
        "./pl": [61551, [2171]],
        "./pt": [40951, [8755]],
        "./ru": [45526, [2864]],
        "./zh": [74969, [3197]]
      };

      function s(e) {
        try {
          if (!t.o(r, e)) return Promise.resolve().then(() => {
            var o = new Error("Cannot find module '" + e + "'");
            throw o.code = "MODULE_NOT_FOUND", o
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var o = r[e],
          s = o[0];
        return t.e(o[1][0]).then(() => t.t(s, 23))
      }
      s.keys = () => Object.keys(r), s.id = 9742, e.exports = s
    },
    94911(e, o, t) {
      var r = {
        "./de": [46095, [6879]],
        "./en": [4427, [2243]],
        "./es": [56928, [278]],
        "./fr": [19164, [9022]],
        "./it": [51777, [2365]],
        "./ja": [91465, [9377]],
        "./ko": [24766, [9028]],
        "./pl": [15636, [1242]],
        "./pt": [85180, [7970]],
        "./ru": [2573, [7453]],
        "./zh": [11410, [8880]]
      };

      function s(e) {
        try {
          if (!t.o(r, e)) return Promise.resolve().then(() => {
            var o = new Error("Cannot find module '" + e + "'");
            throw o.code = "MODULE_NOT_FOUND", o
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var o = r[e],
          s = o[0];
        return t.e(o[1][0]).then(() => t.t(s, 23))
      }
      s.keys = () => Object.keys(r), s.id = 94911, e.exports = s
    },
    94931(e, o, t) {
      "use strict";
      var r = t(93082),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, t) {
        var r, n = {},
          c = null,
          u = null;
        for (r in void 0 !== t && (c = "" + t), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) i.call(o, r) && !l.hasOwnProperty(r) && (n[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === n[r] && (n[r] = o[r]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: u,
          props: n,
          _owner: a.current
        }
      }
      o.Fragment = n, o.jsx = c, o.jsxs = c
    },
    39793(e, o, t) {
      "use strict";
      e.exports = t(94931)
    },
    76602(e, o, t) {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => s.A,
        POSIXLocales: () => w,
        ReactIntlProviderForMocking: () => a.A,
        createDevLocaleHook: () => $,
        createIntl: () => n.E,
        defineMessages: () => r.YK,
        englishLocale: () => h,
        getCookieValueByName: () => m,
        getLocale: () => k,
        linkWithLocale: () => O,
        localeCookieHandler: () => f,
        locales: () => _,
        onLanguageChange: () => j,
        splitLocale: () => x,
        useIntl: () => i.A,
        withIntl: () => v
      });
      var r = t(57338),
        s = t(13124),
        n = t(73747),
        i = t(74775),
        a = t(54422),
        l = t(39793),
        c = t(93082),
        u = t(90567),
        d = t(47279);
      const p = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            r = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${r}; path=/;`
        },
        m = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            r = o.find(e => e.startsWith(t)),
            s = r?.substring(t.length, r.length);
          return s
        },
        f = (e, o, t = !1) => {
          const r = m(e);
          return r && !t || p(e, o), [r, (s = e, e => {
            p(s, e)
          })];
          var s
        },
        b = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          store: "en",
          posix: "en_us"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          store: "de",
          posix: "de_de"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          store: "es",
          posix: "es_es"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          store: "es-419",
          posix: "es_mx"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          store: "fr",
          posix: "fr_fr"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          store: "it",
          posix: "it_it"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          store: "ja",
          posix: "ja_jp"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          store: "ko",
          posix: "ko_kr"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          store: "pl",
          posix: "pl_pl"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          store: "pt-BR",
          posix: "pt_br"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          store: "ru",
          posix: "ru_ru"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          store: "zh-Hant",
          posix: "zh_tw"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          store: "zh-CN",
          posix: "zh_hans"
        }],
        h = b[0],
        w = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        _ = b,
        k = () => {
          const {
            location: e
          } = window, o = (0, d.A)(), t = (e => {
            const o = _.map(e => e.subdomaincom),
              t = e.pathname.substring(1).split("/"),
              r = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[r]) ? t[r] : null
          })(e), r = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), s = h;
          let n;
          const i = `rockstarweb_lang.${o.cookieIdentifier}`,
            a = m(i);
          n = o.currentSite?.site === d.C.www ? _.find(e => e.subdomaincom === r) || _.find(e => e.subdomaincom === t) || s : _.find(e => e.iso === a) || s;
          const [, l] = f(i, n.iso);
          return [n, l]
        };

      function g(e) {
        const o = e.split("-");
        return (0, u.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function y(e, o) {
        return e[o] ?? {}
      }

      function v(e, o, t, r) {
        return s => {
          const n = (0, c.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? k()[0].iso ?? "en-US",
                  [, r] = [g(t), y(e, t)];
                var s;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (s = r, {
                    ...s
                  })
                }
              }(e, o)
            }(o, t)
          }, [t]);
          return (0, l.jsx)(a.A, {
            locale: n?.locale || "en-US",
            messages: {
              ...n?.messages
            },
            onError: r,
            children: n && (0, l.jsx)(e, {
              ...s
            })
          }, "intl-provider")
        }
      }

      function x(e) {
        let [o, t] = e.split(/[-_]/), r = t?.toLowerCase();
        return "cn" === r && (r = "hans"), o && t || (o = "en", r = "us"), [o, r]
      }
      const $ = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = k(), [t, r] = x(o);
            return e?.[r] ?? e.us
          }
        },
        E = {
          socialClub: {
            regex: /(\/\/)socialclub.rockstargames.com(.*?)$/,
            isSubdomain: !0,
            isLocaleInUrl: !1
          },
          store: {
            regex: /(\/\/)store.rockstargames.com(.*?)$/,
            isSubdomain: !0,
            isLocaleInUrl: !0,
            fieldName: "store"
          },
          supportNew: {
            regex: /(\/\/)support.rockstargames.com(.*?)$/,
            isSubdomain: !0,
            isLocaleInUrl: !1
          },
          circoloco: {
            regex: /(\/\/)(www\.)?circolocorecords.com(.*?)$/,
            isSubdomain: !1,
            isLocaleInUrl: !0,
            fieldName: "subdomaincom"
          },
          www: {
            regex: /(\/\/)(www\.)?rockstargames.com(.*?)$/,
            isSubdomain: !0,
            isLocaleInUrl: !0,
            fieldName: "subdomaincom",
            externalPaths: [/^\/VI($|\/)(.*?)/i]
          }
        },
        O = e => {
          const [o] = k(), {
            sites: t
          } = (0, d.A)();
          let r;
          try {
            r = new URL(e)
          } catch {
            r = null
          }
          if (r)
            for (const [s, {
                regex: n,
                isSubdomain: i,
                isLocaleInUrl: a,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(E)) {
              if (!n.test(e.toLowerCase())) continue;
              const u = t[s];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && a && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === s && "/" === r.pathname && (d += "/"));
              const p = r.host.split(".");
              let m = "";
              return "www" !== s || c?.some(e => e.test(r.pathname)) ? (m += `https://${u}`, m += i ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`, {
                link: `${m}${d}${"/"===r.pathname?"":r.pathname}${r.search}${r.hash}`,
                isExternal: !0
              }) : {
                link: `${m}${"/"===r.pathname?"":r.pathname}${r.search}${r.hash}`,
                isExternal: !1
              }
            }
          return /^http(s):\/\//.test(e) ? {
            link: e,
            isExternal: !0
          } : {
            link: e?.startsWith("/") ? e : `/${e}`,
            isExternal: !1
          }
        },
        j = ({
          selectedLocale: e,
          track: o,
          parent: t = ""
        }) => {
          const r = (0, d.A)(),
            [, s] = k(),
            {
              subdomaincom: n,
              iso: i
            } = e,
            a = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return _.map(e => e.subdomaincom).includes(t[0]) && (o = t.slice(1).join("/")), r.currentSite?.site === d.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(n);
          o?.({
            event: "cta_other",
            link_url: a,
            text: n,
            element_placement: t?.toLowerCase()
          }), s(i), window.location.assign(a)
        }
    },
    47279(e, o, t) {
      "use strict";
      t.d(o, {
        A: () => c,
        C: () => a
      });
      var r = t(54028),
        s = t.n(r),
        n = t(15963),
        i = t.n(n);
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        l = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        c = () => {
          let e;
          const {
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), r = l.findIndex(o => Object.entries(o.sites).findIndex(([o, r]) => r === t && (e = {
            site: o,
            subDomain: r
          }, !0)) >= 0), n = l[r >= 0 ? r : 0], a = l.find(e => e.id === n.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), i()(s()({}, a, {
            currentSite: e
          }, n), "fallbackEnvironment")
        }
    }
  }
]);