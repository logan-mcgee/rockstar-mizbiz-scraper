try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cd2dd215-2130-42d7-99be-0f55971d28cb", e._sentryDebugIdIdentifier = "sentry-dbid-cd2dd215-2130-42d7-99be-0f55971d28cb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [2884, 8646], {
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
    94931(e, t, r) {
      "use strict";
      var o = r(93082),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var o, s = {},
          l = null,
          u = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, o) && !c.hasOwnProperty(o) && (s[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === s[o] && (s[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: u,
          props: s,
          _owner: a.current
        }
      }
      t.Fragment = s, t.jsx = l, t.jsxs = l
    },
    39793(e, t, r) {
      "use strict";
      e.exports = r(94931)
    },
    76602(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        FormattedMessage: () => n.A,
        POSIXLocales: () => b,
        ReactIntlProviderForMocking: () => a.A,
        createDevLocaleHook: () => k,
        createIntl: () => s.E,
        defineMessages: () => o.YK,
        englishLocale: () => y,
        getCookieValueByName: () => d,
        getLocale: () => w,
        linkWithLocale: () => E,
        localeCookieHandler: () => _,
        locales: () => h,
        onLanguageChange: () => P,
        splitLocale: () => j,
        useIntl: () => i.A,
        withIntl: () => O
      });
      var o = r(57338),
        n = r(13124),
        s = r(73747),
        i = r(74775),
        a = r(54422),
        c = r(39793),
        l = r(93082),
        u = r(90567),
        f = r(47279);
      const p = (e, t) => {
          if (!e || !t) return void console.log(`Couldn't set cookie (${e}) to value (${t})`);
          const r = window.location.hostname.split("."),
            o = r.slice(r.length - 2).join(".");
          document.cookie = `${e}=${t}; domain=${o}; path=/;`
        },
        d = e => {
          const t = document.cookie.split("; "),
            r = `${e}=`,
            o = t.find(e => e.startsWith(r)),
            n = o?.substring(r.length, o.length);
          return n
        },
        _ = (e, t, r = !1) => {
          const o = d(e);
          return o && !r || p(e, t), [o, (n = e, e => {
            p(n, e)
          })];
          var n
        },
        m = [{
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
        y = m[0],
        b = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        h = m,
        w = () => {
          const {
            location: e
          } = window, t = (0, f.A)(), r = (e => {
            const t = h.map(e => e.subdomaincom),
              r = e.pathname.substring(1).split("/"),
              o = "detect-locals" === r[0] ? 1 : 0;
            return -1 !== t.indexOf(r[o]) ? r[o] : null
          })(e), o = (e => {
            const t = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return t?.split("=")[1]
          })(e), n = y;
          let s;
          const i = `rockstarweb_lang.${t.cookieIdentifier}`,
            a = d(i);
          s = t.currentSite?.site === f.C.www ? h.find(e => e.subdomaincom === o) || h.find(e => e.subdomaincom === r) || n : h.find(e => e.iso === a) || n;
          const [, c] = _(i, s.iso);
          return [s, c]
        };

      function v(e) {
        const t = e.split("-");
        return (0, u.A)(t[1] ? t[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function g(e, t) {
        return e[t] ?? {}
      }

      function O(e, t, r, o) {
        return n => {
          const s = (0, l.useMemo)(() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const r = t ?? w()[0].iso ?? "en-US",
                  [, o] = [v(r), g(e, r)];
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
          return (0, c.jsx)(a.A, {
            locale: s?.locale || "en-US",
            messages: {
              ...s?.messages
            },
            onError: o,
            children: s && (0, c.jsx)(e, {
              ...n
            })
          }, "intl-provider")
        }
      }

      function j(e) {
        let [t, r] = e.split(/[-_]/), o = r?.toLowerCase();
        return "cn" === o && (o = "hans"), t && r || (t = "en", o = "us"), [t, o]
      }
      const k = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: t
            }] = w(), [r, o] = j(t);
            return e?.[o] ?? e.us
          }
        },
        x = {
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
        E = e => {
          const [t] = w(), {
            sites: r
          } = (0, f.A)();
          let o;
          try {
            o = new URL(e)
          } catch {
            o = null
          }
          if (o)
            for (const [n, {
                regex: s,
                isSubdomain: i,
                isLocaleInUrl: a,
                fieldName: c,
                externalPaths: l
              }] of Object.entries(x)) {
              if (!s.test(e.toLowerCase())) continue;
              const u = r[n];
              if (!u) continue;
              let f = "";
              "en" !== t.subdomaincom && a && (f = `/${t[c||"subdomaincom"]}`, "circoloco" === n && "/" === o.pathname && (f += "/"));
              const p = o.host.split(".");
              let d = "";
              return "www" !== n || l?.some(e => e.test(o.pathname)) ? (d += `https://${u}`, d += i ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`, {
                link: `${d}${f}${"/"===o.pathname?"":o.pathname}${o.search}${o.hash}`,
                isExternal: !0
              }) : {
                link: `${d}${"/"===o.pathname?"":o.pathname}${o.search}${o.hash}`,
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
        P = ({
          selectedLocale: e,
          track: t,
          parent: r = ""
        }) => {
          const o = (0, f.A)(),
            [, n] = w(),
            {
              subdomaincom: s,
              iso: i
            } = e,
            a = (e => {
              let t = location.pathname.replace(/^\/|\/$/g, "");
              const r = t.split("/");
              return h.map(e => e.subdomaincom).includes(r[0]) && (t = r.slice(1).join("/")), o.currentSite?.site === f.C.www ? "en" === e ? `${window.location.origin}/${t}${location.search}` : `${window.location.origin}/${e}/${t}${location.search}` : `${window.location.origin}/${t}${location.search}`
            })(s);
          t?.({
            event: "cta_other",
            link_url: a,
            text: s,
            element_placement: r?.toLowerCase()
          }), n(i), window.location.assign(a)
        }
    },
    47279(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => l,
        C: () => a
      });
      var o = r(54028),
        n = r.n(o),
        s = r(15963),
        i = r.n(s);
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        c = [{
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
        l = () => {
          let e;
          const {
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = c.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === r && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), s = c[o >= 0 ? o : 0], a = c.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), i()(n()({}, a, {
            currentSite: e
          }, s), "fallbackEnvironment")
        }
    },
    51177(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        __addDisposableResource: () => N,
        __assign: () => s,
        __asyncDelegator: () => x,
        __asyncGenerator: () => k,
        __asyncValues: () => E,
        __await: () => j,
        __awaiter: () => _,
        __classPrivateFieldGet: () => T,
        __classPrivateFieldIn: () => C,
        __classPrivateFieldSet: () => L,
        __createBinding: () => y,
        __decorate: () => a,
        __disposeResources: () => U,
        __esDecorate: () => l,
        __exportStar: () => b,
        __extends: () => n,
        __generator: () => m,
        __importDefault: () => D,
        __importStar: () => $,
        __makeTemplateObject: () => P,
        __metadata: () => d,
        __param: () => c,
        __propKey: () => f,
        __read: () => w,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => z,
        __runInitializers: () => u,
        __setFunctionName: () => p,
        __spread: () => v,
        __spreadArray: () => O,
        __spreadArrays: () => g,
        __values: () => h,
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
      var s = function() {
        return s = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, s.apply(this, arguments)
      };

      function i(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
        }
        return r
      }

      function a(e, t, r, o) {
        var n, s = arguments.length,
          i = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o);
        else
          for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (i = (s < 3 ? n(i) : s > 3 ? n(t, r, i) : n(t, r)) || i);
        return s > 3 && i && Object.defineProperty(t, r, i), i
      }

      function c(e, t) {
        return function(r, o) {
          t(r, o, e)
        }
      }

      function l(e, t, r, o, n, s) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var a, c = o.kind, l = "getter" === c ? "get" : "setter" === c ? "set" : "value", u = !t && e ? o.static ? e : e.prototype : null, f = t || (u ? Object.getOwnPropertyDescriptor(u, o.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
          var _ = {};
          for (var m in o) _[m] = "access" === m ? {} : o[m];
          for (var m in o.access) _.access[m] = o.access[m];
          _.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            s.push(i(e || null))
          };
          var y = (0, r[d])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[l], _);
          if ("accessor" === c) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y) throw new TypeError("Object expected");
            (a = i(y.get)) && (f.get = a), (a = i(y.set)) && (f.set = a), (a = i(y.init)) && n.unshift(a)
          } else(a = i(y)) && ("field" === c ? n.unshift(a) : f[l] = a)
        }
        u && Object.defineProperty(u, o.name, f), p = !0
      }

      function u(e, t, r) {
        for (var o = arguments.length > 2, n = 0; n < t.length; n++) r = o ? t[n].call(e, r) : t[n].call(e);
        return o ? r : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function p(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function d(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function _(e, t, r, o) {
        return new(r || (r = Promise))(function(n, s) {
          function i(e) {
            try {
              c(o.next(e))
            } catch (e) {
              s(e)
            }
          }

          function a(e) {
            try {
              c(o.throw(e))
            } catch (e) {
              s(e)
            }
          }

          function c(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(i, a)
          }
          c((o = o.apply(e, t || [])).next())
        })
      }

      function m(e, t) {
        var r, o, n, s = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = a(0), i.throw = a(1), i.return = a(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function a(a) {
          return function(c) {
            return function(a) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, a[0] && (s = 0)), s;) try {
                if (r = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
                switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                  case 0:
                  case 1:
                    n = a;
                    break;
                  case 4:
                    return s.label++, {
                      value: a[1],
                      done: !1
                    };
                  case 5:
                    s.label++, o = a[1], a = [0];
                    continue;
                  case 7:
                    a = s.ops.pop(), s.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                      s = 0;
                      continue
                    }
                    if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                      s.label = a[1];
                      break
                    }
                    if (6 === a[0] && s.label < n[1]) {
                      s.label = n[1], n = a;
                      break
                    }
                    if (n && s.label < n[2]) {
                      s.label = n[2], s.ops.push(a);
                      break
                    }
                    n[2] && s.ops.pop(), s.trys.pop();
                    continue
                }
                a = t.call(e, s)
              } catch (e) {
                a = [6, e], o = 0
              } finally {
                r = n = 0
              }
              if (5 & a[0]) throw a[1];
              return {
                value: a[0] ? a[1] : void 0,
                done: !0
              }
            }([a, c])
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

      function h(e) {
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
        var o, n, s = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(o = s.next()).done;) i.push(o.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            o && !o.done && (r = s.return) && r.call(s)
          } finally {
            if (n) throw n.error
          }
        }
        return i
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
          for (var s = arguments[t], i = 0, a = s.length; i < a; i++, n++) o[n] = s[i];
        return o
      }

      function O(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, s = t.length; n < s; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }

      function j(e) {
        return this instanceof j ? (this.v = e, this) : new j(e)
      }

      function k(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o, n = r.apply(e, t || []),
          s = [];
        return o = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, l)
          }
        }), o[Symbol.asyncIterator] = function() {
          return this
        }, o;

        function i(e, t) {
          n[e] && (o[e] = function(t) {
            return new Promise(function(r, o) {
              s.push([e, t, r, o]) > 1 || a(e, t)
            })
          }, t && (o[e] = t(o[e])))
        }

        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(c, l) : u(s[0][2], r)
          } catch (e) {
            u(s[0][3], e)
          }
          var r
        }

        function c(e) {
          a("next", e)
        }

        function l(e) {
          a("throw", e)
        }

        function u(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1])
        }
      }

      function x(e) {
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

      function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = h(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
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

      function P(e, t) {
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
        I = function(e) {
          return I = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, I(e)
        };

      function $(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = I(e), o = 0; o < r.length; o++) "default" !== r[o] && y(t, e, r[o]);
        return S(t, e), t
      }

      function D(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function T(e, t, r, o) {
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? o : "a" === r ? o.call(e) : o ? o.value : t.get(e)
      }

      function L(e, t, r, o, n) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === o ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
      }

      function C(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function N(e, t, r) {
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
      var R = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var o = new Error(r);
        return o.name = "SuppressedError", o.error = e, o.suppressed = t, o
      };

      function U(e) {
        function t(t) {
          e.error = e.hasError ? new R(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, o = 0;
        return function n() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === o) return o = 0, e.stack.push(r), Promise.resolve().then(n);
            if (r.dispose) {
              var s = r.dispose.call(r.value);
              if (r.async) return o |= 2, Promise.resolve(s).then(n, function(e) {
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

      function z(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, o, n, s) {
          return r ? t ? ".jsx" : ".js" : !o || n && s ? o + n + "." + s.toLowerCase() + "js" : e
        }) : e
      }
      const A = {
        __extends: n,
        __assign: s,
        __rest: i,
        __decorate: a,
        __param: c,
        __esDecorate: l,
        __runInitializers: u,
        __propKey: f,
        __setFunctionName: p,
        __metadata: d,
        __awaiter: _,
        __generator: m,
        __createBinding: y,
        __exportStar: b,
        __values: h,
        __read: w,
        __spread: v,
        __spreadArrays: g,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: k,
        __asyncDelegator: x,
        __asyncValues: E,
        __makeTemplateObject: P,
        __importStar: $,
        __importDefault: D,
        __classPrivateFieldGet: T,
        __classPrivateFieldSet: L,
        __classPrivateFieldIn: C,
        __addDisposableResource: N,
        __disposeResources: U,
        __rewriteRelativeImportExtension: z
      }
    }
  }
]);