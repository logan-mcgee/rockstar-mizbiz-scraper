try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "04a94a1a-75a3-438c-b047-179e986c7d64", e._sentryDebugIdIdentifier = "sentry-dbid-04a94a1a-75a3-438c-b047-179e986c7d64")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [784, 1177, 8403], {
    12011(e, t, r) {
      var o = {
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

      function n(e) {
        try {
          if (!r.o(o, e)) return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var t = o[e],
          n = t[0];
        return r.e(t[1][0]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 12011, e.exports = n
    },
    60375(e, t, r) {
      var o = {
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

      function n(e) {
        try {
          if (!r.o(o, e)) return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var t = o[e],
          n = t[0];
        return r.e(t[1][0]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 60375, e.exports = n
    },
    42768(e, t, r) {
      var o = {
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

      function n(e) {
        try {
          if (!r.o(o, e)) return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var t = o[e],
          n = t[0];
        return r.e(t[1][0]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 42768, e.exports = n
    },
    19051(e, t, r) {
      var o = {
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

      function n(e) {
        try {
          if (!r.o(o, e)) return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var t = o[e],
          n = t[0];
        return r.e(t[1][0]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 19051, e.exports = n
    },
    9742(e, t, r) {
      var o = {
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

      function n(e) {
        try {
          if (!r.o(o, e)) return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var t = o[e],
          n = t[0];
        return r.e(t[1][0]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 9742, e.exports = n
    },
    94911(e, t, r) {
      var o = {
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

      function n(e) {
        try {
          if (!r.o(o, e)) return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          })
        } catch (e) {
          return Promise.reject(e)
        }
        var t = o[e],
          n = t[0];
        return r.e(t[1][0]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 94911, e.exports = n
    },
    90567(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => s
      });
      const o = {
          getcanonicallocales: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 98458)),
            polyfill: () => r.e(5018).then(r.bind(r, 5364))
          },
          locale: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 88182)),
            polyfill: () => r.e(9615).then(r.bind(r, 13234))
          },
          listformat: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 48785)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(8970)]).then(r.bind(r, 94495)),
            locale: e => r(42768)(`./${e}`)
          },
          displaynames: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 48771)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(3343)]).then(r.bind(r, 99653)),
            locale: e => r(60375)(`./${e}`)
          },
          pluralrules: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 86528)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(314)]).then(r.bind(r, 71816)),
            locale: e => r(9742)(`./${e}`)
          },
          numberformat: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 56689)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(907)]).then(r.bind(r, 35327)),
            locale: e => r(19051)(`./${e}`)
          },
          relativetimeformat: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 53025)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(8391)]).then(r.bind(r, 27215)),
            locale: e => r(94911)(`./${e}`)
          },
          datetimeformat: {
            should: () => Promise.all([r.e(8679), r.e(5830)]).then(r.bind(r, 91790)),
            polyfill: () => Promise.all([r.e(8679), r.e(951), r.e(4731)]).then(r.bind(r, 10778)),
            locale: e => Promise.all([r.e(6280).then(r.t.bind(r, 11609, 23)), r(12011)(`./${e}`)])
          }
        },
        n = {
          getcanonicallocales: ["getcanonicallocales"],
          locale: ["getcanonicallocales", "locale"],
          pluralrules: ["getcanonicallocales", "locale", "pluralrules"],
          numberformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat"],
          relativetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "relativetimeformat"],
          datetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "datetimeformat"],
          displaynames: ["getcanonicallocales", "locale", "displaynames"],
          listformat: ["getcanonicallocales", "locale", "listformat"]
        },
        a = async (e, t, r) => {
          const {
            shouldPolyfill: o
          } = await e.should();
          return !!o(e.locale ? t : null) && (await e.polyfill(), e.locale && await e.locale(t), !0)
        }, s = async (e, t) => {
          if (!e) throw new Error("Please provide the desired locale");
          if (!t || !t.length) throw new Error(`Please provide the list of polyfills to load, supported ones are: ${Object.keys(n).join(", ")}`);
          const r = [];
          let s = 0;
          for (const i of t) {
            if (!i || !n[i]) throw new Error(`Unsupported polyfill: ${i}. Supported ones are: ${Object.keys(n).join(", ")}`);
            for (const t of n[i]) - 1 === r.indexOf(t) && (await a(o[t], e) && s++, r.push(t))
          }
          return s
        }
    },
    94931(e, t, r) {
      "use strict";
      var o = r(93082),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, r) {
        var o, a = {},
          c = null,
          u = null;
        for (o in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, o) && !l.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: u,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = c, t.jsxs = c
    },
    39793(e, t, r) {
      "use strict";
      e.exports = r(94931)
    },
    68403(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        FormattedMessage: () => c,
        POSIXLocales: () => g,
        ReactIntlProviderForMocking: () => d.A,
        createDevLocaleHook: () => S,
        createIntl: () => f.E,
        defineMessages: () => u.YK,
        englishLocale: () => v,
        getCookieValueByName: () => b,
        getLocale: () => j,
        linkWithLocale: () => I,
        localeCookieHandler: () => _,
        locales: () => O,
        onLanguageChange: () => T,
        splitLocale: () => E,
        useIntl: () => s.A,
        withIntl: () => x
      });
      var o = r(51177),
        n = r(93082),
        a = r(2603),
        s = r(74775);

      function i(e) {
        var t = (0, s.A)(),
          r = t.formatMessage,
          o = t.textComponent,
          a = void 0 === o ? n.Fragment : o,
          i = e.id,
          l = e.description,
          c = e.defaultMessage,
          u = e.values,
          f = e.children,
          d = e.tagName,
          p = void 0 === d ? a : d,
          m = r({
            id: i,
            description: l,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof f ? f(Array.isArray(m) ? m : [m]) : p ? n.createElement(p, null, m) : n.createElement(n.Fragment, null, m)
      }
      i.displayName = "FormattedMessage";
      var l = n.memo(i, function(e, t) {
        var r = e.values,
          n = (0, o.__rest)(e, ["values"]),
          s = t.values,
          i = (0, o.__rest)(t, ["values"]);
        return (0, a.bN)(s, r) && (0, a.bN)(n, i)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l;
      var u = r(57338),
        f = r(73747),
        d = r(54422),
        p = r(39793),
        m = r(90567),
        h = r(47279);
      const y = (e, t) => {
          if (!e || !t) return void console.log(`Couldn't set cookie (${e}) to value (${t})`);
          const r = window.location.hostname.split("."),
            o = r.slice(r.length - 2).join(".");
          document.cookie = `${e}=${t}; domain=${o}; path=/;`
        },
        b = e => {
          const t = document.cookie.split("; "),
            r = `${e}=`,
            o = t.find(e => e.startsWith(r)),
            n = o?.substring(r.length, o.length);
          return n
        },
        _ = (e, t, r = !1) => {
          const o = b(e);
          return o && !r || y(e, t), [o, (n = e, e => {
            y(n, e)
          })];
          var n
        },
        w = [{
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
        v = w[0],
        g = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        O = w,
        j = () => {
          const {
            location: e
          } = window, t = (0, h.A)(), r = (e => {
            const t = O.map(e => e.subdomaincom),
              r = e.pathname.substring(1).split("/"),
              o = "detect-locals" === r[0] ? 1 : 0;
            return -1 !== t.indexOf(r[o]) ? r[o] : null
          })(e), o = (e => {
            const t = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return t?.split("=")[1]
          })(e), n = v;
          let a;
          const s = `rockstarweb_lang.${t.cookieIdentifier}`,
            i = b(s);
          a = t.currentSite?.site === h.C.www ? O.find(e => e.subdomaincom === o) || O.find(e => e.subdomaincom === r) || n : O.find(e => e.iso === i) || n;
          const [, l] = _(s, a.iso);
          return [a, l]
        };

      function k(e) {
        const t = e.split("-");
        return (0, m.A)(t[1] ? t[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function P(e, t) {
        return e[t] ?? {}
      }

      function x(e, t, r, o) {
        return a => {
          const s = (0, n.useMemo)(() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const r = t ?? j()[0].iso ?? "en-US",
                  [, o] = [k(r), P(e, r)];
                var n;
                return {
                  rsLocale: r,
                  locale: r,
                  messages: (n = o, {
                    ...n
                  })
                }
              }(e, t)
            }(t, r)
          }, [r]);
          return (0, p.jsx)(d.A, {
            locale: s?.locale || "en-US",
            messages: {
              ...s?.messages
            },
            onError: o,
            children: s && (0, p.jsx)(e, {
              ...a
            })
          }, "intl-provider")
        }
      }

      function E(e) {
        let [t, r] = e.split(/[-_]/), o = r?.toLowerCase();
        return "cn" === o && (o = "hans"), t && r || (t = "en", o = "us"), [t, o]
      }
      const S = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: t
            }] = j(), [r, o] = E(t);
            return e?.[o] ?? e.us
          }
        },
        $ = {
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
        I = e => {
          const [t] = j(), {
            sites: r
          } = (0, h.A)();
          let o;
          try {
            o = new URL(e)
          } catch {
            o = null
          }
          if (o)
            for (const [n, {
                regex: a,
                isSubdomain: s,
                isLocaleInUrl: i,
                fieldName: l,
                externalPaths: c
              }] of Object.entries($)) {
              if (!a.test(e.toLowerCase())) continue;
              const u = r[n];
              if (!u) continue;
              let f = "";
              "en" !== t.subdomaincom && i && (f = `/${t[l||"subdomaincom"]}`, "circoloco" === n && "/" === o.pathname && (f += "/"));
              const d = o.host.split(".");
              let p = "";
              return "www" !== n || c?.some(e => e.test(o.pathname)) ? (p += `https://${u}`, p += s ? `.${d.at(-2)}.${d.at(-1)}` : `.${d.at(-1)}`, {
                link: `${p}${f}${"/"===o.pathname?"":o.pathname}${o.search}${o.hash}`,
                isExternal: !0
              }) : {
                link: `${p}${"/"===o.pathname?"":o.pathname}${o.search}${o.hash}`,
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
        T = ({
          selectedLocale: e,
          track: t,
          parent: r = ""
        }) => {
          const o = (0, h.A)(),
            [, n] = j(),
            {
              subdomaincom: a,
              iso: s
            } = e,
            i = (e => {
              let t = location.pathname.replace(/^\/|\/$/g, "");
              const r = t.split("/");
              return O.map(e => e.subdomaincom).includes(r[0]) && (t = r.slice(1).join("/")), o.currentSite?.site === h.C.www ? "en" === e ? `${window.location.origin}/${t}${location.search}` : `${window.location.origin}/${e}/${t}${location.search}` : `${window.location.origin}/${t}${location.search}`
            })(a);
          t?.({
            event: "cta_other",
            link_url: i,
            text: a,
            element_placement: r?.toLowerCase()
          }), n(s), window.location.assign(i)
        }
    },
    47279(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => c,
        C: () => i
      });
      var o = r(54028),
        n = r.n(o),
        a = r(15963),
        s = r.n(a);
      const i = {
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
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = l.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === r && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), a = l[o >= 0 ? o : 0], i = l.find(e => e.id === a.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), s()(n()({}, i, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    },
    51177(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        __addDisposableResource: () => L,
        __assign: () => a,
        __asyncDelegator: () => P,
        __asyncGenerator: () => k,
        __asyncValues: () => x,
        __await: () => j,
        __awaiter: () => m,
        __classPrivateFieldGet: () => D,
        __classPrivateFieldIn: () => C,
        __classPrivateFieldSet: () => N,
        __createBinding: () => y,
        __decorate: () => i,
        __disposeResources: () => U,
        __esDecorate: () => c,
        __exportStar: () => b,
        __extends: () => n,
        __generator: () => h,
        __importDefault: () => T,
        __importStar: () => I,
        __makeTemplateObject: () => E,
        __metadata: () => p,
        __param: () => l,
        __propKey: () => f,
        __read: () => w,
        __rest: () => s,
        __rewriteRelativeImportExtension: () => R,
        __runInitializers: () => u,
        __setFunctionName: () => d,
        __spread: () => v,
        __spreadArray: () => O,
        __spreadArrays: () => g,
        __values: () => _,
        default: () => A
      });
      var o = function(e, t) {
        return o = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, o(e, t)
      };

      function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, a.apply(this, arguments)
      };

      function s(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
        }
        return r
      }

      function i(e, t, r, o) {
        var n, a = arguments.length,
          s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, o);
        else
          for (var i = e.length - 1; i >= 0; i--)(n = e[i]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, r, s) : n(t, r)) || s);
        return a > 3 && s && Object.defineProperty(t, r, s), s
      }

      function l(e, t) {
        return function(r, o) {
          t(r, o, e)
        }
      }

      function c(e, t, r, o, n, a) {
        function s(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var i, l = o.kind, c = "getter" === l ? "get" : "setter" === l ? "set" : "value", u = !t && e ? o.static ? e : e.prototype : null, f = t || (u ? Object.getOwnPropertyDescriptor(u, o.name) : {}), d = !1, p = r.length - 1; p >= 0; p--) {
          var m = {};
          for (var h in o) m[h] = "access" === h ? {} : o[h];
          for (var h in o.access) m.access[h] = o.access[h];
          m.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(s(e || null))
          };
          var y = (0, r[p])("accessor" === l ? {
            get: f.get,
            set: f.set
          } : f[c], m);
          if ("accessor" === l) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y) throw new TypeError("Object expected");
            (i = s(y.get)) && (f.get = i), (i = s(y.set)) && (f.set = i), (i = s(y.init)) && n.unshift(i)
          } else(i = s(y)) && ("field" === l ? n.unshift(i) : f[c] = i)
        }
        u && Object.defineProperty(u, o.name, f), d = !0
      }

      function u(e, t, r) {
        for (var o = arguments.length > 2, n = 0; n < t.length; n++) r = o ? t[n].call(e, r) : t[n].call(e);
        return o ? r : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function d(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function m(e, t, r, o) {
        return new(r || (r = Promise))(function(n, a) {
          function s(e) {
            try {
              l(o.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              l(o.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function l(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(s, i)
          }
          l((o = o.apply(e, t || [])).next())
        })
      }

      function h(e, t) {
        var r, o, n, a = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1]
            },
            trys: [],
            ops: []
          },
          s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return s.next = i(0), s.throw = i(1), s.return = i(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
          return this
        }), s;

        function i(i) {
          return function(l) {
            return function(i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; s && (s = 0, i[0] && (a = 0)), a;) try {
                if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                  case 0:
                  case 1:
                    n = i;
                    break;
                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    a.label++, o = i[1], i = [0];
                    continue;
                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                      a.label = i[1];
                      break
                    }
                    if (6 === i[0] && a.label < n[1]) {
                      a.label = n[1], n = i;
                      break
                    }
                    if (n && a.label < n[2]) {
                      a.label = n[2], a.ops.push(i);
                      break
                    }
                    n[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                i = t.call(e, a)
              } catch (e) {
                i = [6, e], o = 0
              } finally {
                r = n = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, l])
          }
        }
      }
      var y = Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r);
        var n = Object.getOwnPropertyDescriptor(t, r);
        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, o, n)
      } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
      };

      function b(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || y(t, e, r)
      }

      function _(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          o = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && o >= e.length && (e = void 0), {
              value: e && e[o++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function w(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var o, n, a = r.call(e),
          s = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(o = a.next()).done;) s.push(o.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a)
          } finally {
            if (n) throw n.error
          }
        }
        return s
      }

      function v() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
        return e
      }

      function g() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var o = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], s = 0, i = a.length; s < i; s++, n++) o[n] = a[s];
        return o
      }

      function O(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, a = t.length; n < a; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }

      function j(e) {
        return this instanceof j ? (this.v = e, this) : new j(e)
      }

      function k(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o, n = r.apply(e, t || []),
          a = [];
        return o = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, c)
          }
        }), o[Symbol.asyncIterator] = function() {
          return this
        }, o;

        function s(e, t) {
          n[e] && (o[e] = function(t) {
            return new Promise(function(r, o) {
              a.push([e, t, r, o]) > 1 || i(e, t)
            })
          }, t && (o[e] = t(o[e])))
        }

        function i(e, t) {
          try {
            (r = n[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(l, c) : u(a[0][2], r)
          } catch (e) {
            u(a[0][3], e)
          }
          var r
        }

        function l(e) {
          i("next", e)
        }

        function c(e) {
          i("throw", e)
        }

        function u(e, t) {
          e(t), a.shift(), a.length && i(a[0][0], a[0][1])
        }
      }

      function P(e) {
        var t, r;
        return t = {}, o("next"), o("throw", function(e) {
          throw e
        }), o("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function o(o, n) {
          t[o] = e[o] ? function(t) {
            return (r = !r) ? {
              value: j(e[o](t)),
              done: !1
            } : n ? n(t) : t
          } : n
        }
      }

      function x(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = _(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function o(r) {
          t[r] = e[r] && function(t) {
            return new Promise(function(o, n) {
              ! function(e, t, r, o) {
                Promise.resolve(o).then(function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }, t)
              }(o, n, (t = e[r](t)).done, t.value)
            })
          }
        }
      }

      function E(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var S = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        $ = function(e) {
          return $ = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, $(e)
        };

      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = $(e), o = 0; o < r.length; o++) "default" !== r[o] && y(t, e, r[o]);
        return S(t, e), t
      }

      function T(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function D(e, t, r, o) {
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? o : "a" === r ? o.call(e) : o ? o.value : t.get(e)
      }

      function N(e, t, r, o, n) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === o ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
      }

      function C(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function L(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var o, n;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            o = t[Symbol.asyncDispose]
          }
          if (void 0 === o) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            o = t[Symbol.dispose], r && (n = o)
          }
          if ("function" != typeof o) throw new TypeError("Object not disposable.");
          n && (o = function() {
            try {
              n.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: o,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var M = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var o = new Error(r);
        return o.name = "SuppressedError", o.error = e, o.suppressed = t, o
      };

      function U(e) {
        function t(t) {
          e.error = e.hasError ? new M(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, o = 0;
        return function n() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === o) return o = 0, e.stack.push(r), Promise.resolve().then(n);
            if (r.dispose) {
              var a = r.dispose.call(r.value);
              if (r.async) return o |= 2, Promise.resolve(a).then(n, function(e) {
                return t(e), n()
              })
            } else o |= 1
          } catch (e) {
            t(e)
          }
          if (1 === o) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function R(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, o, n, a) {
          return r ? t ? ".jsx" : ".js" : !o || n && a ? o + n + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const A = {
        __extends: n,
        __assign: a,
        __rest: s,
        __decorate: i,
        __param: l,
        __esDecorate: c,
        __runInitializers: u,
        __propKey: f,
        __setFunctionName: d,
        __metadata: p,
        __awaiter: m,
        __generator: h,
        __createBinding: y,
        __exportStar: b,
        __values: _,
        __read: w,
        __spread: v,
        __spreadArrays: g,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: k,
        __asyncDelegator: P,
        __asyncValues: x,
        __makeTemplateObject: E,
        __importStar: I,
        __importDefault: T,
        __classPrivateFieldGet: D,
        __classPrivateFieldSet: N,
        __classPrivateFieldIn: C,
        __addDisposableResource: L,
        __disposeResources: U,
        __rewriteRelativeImportExtension: R
      }
    }
  }
]);