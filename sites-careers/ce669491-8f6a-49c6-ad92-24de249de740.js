try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ce669491-8f6a-49c6-ad92-24de249de740", e._sentryDebugIdIdentifier = "sentry-dbid-ce669491-8f6a-49c6-ad92-24de249de740")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [8240, 9975], {
    2295: (e, t, r) => {
      "use strict";
      e.exports = r(9245)
    },
    2841: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        FormattedMessage: () => n.A,
        POSIXLocales: () => y,
        ReactIntlProviderForMocking: () => i.A,
        createDevLocaleHook: () => E,
        createIntl: () => a.E,
        defineMessages: () => o.YK,
        englishLocale: () => m,
        getCookieValueByName: () => p,
        getLocale: () => h,
        linkWithLocale: () => P,
        localeCookieHandler: () => d,
        locales: () => _,
        onLanguageChange: () => S,
        splitLocale: () => k,
        useIntl: () => s.A,
        withIntl: () => j
      });
      var o = r(4944),
        n = r(2486),
        a = r(7497),
        s = r(597),
        i = r(9872),
        c = r(2295),
        l = r(2229),
        u = r(9867);
      const f = (e, t) => {
          if (!e || !t) return void console.log(`Couldn't set cookie (${e}) to value (${t})`);
          const r = window.location.hostname.split("."),
            o = r.slice(r.length - 2).join(".");
          document.cookie = `${e}=${t}; domain=${o}; path=/;`
        },
        p = e => {
          const t = document.cookie.split("; "),
            r = `${e}=`,
            o = t.find(e => e.startsWith(r)),
            n = o?.substring(r.length, o.length);
          return n
        },
        d = (e, t, r = !1) => {
          const o = p(e);
          return o && !r || f(e, t), [o, (n = e, e => {
            f(n, e)
          })];
          var n
        },
        b = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          store: "en"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          store: "de"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          store: "es"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          store: "es-419"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          store: "fr"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          store: "it"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          store: "ja"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          store: "ko"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          store: "pl"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          store: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          store: "ru"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          store: "zh-Hant"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          store: "zh-CN"
        }],
        m = b[0],
        y = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        _ = b,
        h = () => {
          const {
            location: e
          } = window, t = (0, u.A)(), r = (e => {
            const t = _.map(e => e.subdomaincom),
              r = e.pathname.substring(1).split("/"),
              o = "detect-locals" === r[0] ? 1 : 0;
            return -1 !== t.indexOf(r[o]) ? r[o] : null
          })(e), o = (e => {
            const t = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return t?.split("=")[1]
          })(e), n = m;
          let a = n;
          const s = `rockstarweb_lang.${t.cookieIdentifier}`,
            i = p(s);
          a = t.currentSite?.site === u.C.www ? _.find(e => e.subdomaincom === o) || _.find(e => e.subdomaincom === r) || n : _.find(e => e.iso === i) || n;
          const [, c] = d(s, a.iso);
          return [a, c]
        };
      var w = r(5422);
      const v = () => "en-US";

      function g(e) {
        const t = e.split("-");
        return (0, w.A)(t[1] ? t[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function O(e, t) {
        return e[t] ?? {}
      }

      function j(e, t, r, o) {
        return n => {
          const a = (0, l.useMemo)(() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const r = t ?? h()[0].iso ?? v(),
                  [, o] = [g(r), O(e, r)];
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
          return (0, c.jsx)(i.A, {
            locale: a?.locale || v(),
            messages: {
              ...a?.messages
            },
            onError: o,
            children: a && (0, c.jsx)(e, {
              ...n
            })
          }, "intl-provider")
        }
      }

      function k(e) {
        let [t, r] = e.split(/[-_]/), o = r?.toLowerCase();
        return "cn" === o && (o = "hans"), t && r || (t = "en", o = "us"), [t, o]
      }
      const E = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: t
            }] = h(), [r, o] = k(t);
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
        P = e => {
          const [t] = h(), {
            sites: r
          } = (0, u.A)();
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
                fieldName: c,
                externalPaths: l
              }] of Object.entries(x)) {
              if (!a.test(e.toLowerCase())) continue;
              const u = r[n];
              if (!u) continue;
              let f = "";
              "en" !== t.subdomaincom && i && (f = `/${t[c||"subdomaincom"]}`, "circoloco" === n && "/" === o.pathname && (f += "/"));
              const p = o.host.split(".");
              let d = "";
              return "www" !== n || l?.some(e => e.test(o.pathname)) ? (d += `https://${u}`, d += s ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`, {
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
        S = ({
          selectedLocale: e,
          track: t,
          parent: r = ""
        }) => {
          const o = (0, u.A)(),
            [, n] = h(),
            {
              subdomaincom: a,
              iso: s
            } = e,
            i = (e => {
              let t = location.pathname.replace(/^\/|\/$/g, "");
              const r = t.split("/");
              return _.map(e => e.subdomaincom).includes(r[0]) && (t = r.slice(1).join("/")), o.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${t}${location.search}` : `${window.location.origin}/${e}/${t}${location.search}` : `${window.location.origin}/${t}${location.search}`
            })(a);
          t?.({
            event: "cta_other",
            link_url: i,
            text: a,
            element_placement: r?.toLowerCase()
          }), n(s), window.location.href = i
        }
    },
    3019: (e, t, r) => {
      var o = {
        "./de": [2666, 6879],
        "./en": [9390, 2243],
        "./es": [8697, 278],
        "./fr": [7185, 9022],
        "./it": [1872, 2365],
        "./ja": [3476, 9377],
        "./ko": [1239, 9028],
        "./pl": [1645, 1242],
        "./pt": [3669, 7970],
        "./ru": [1520, 7453],
        "./zh": [3907, 8880]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 3019, e.exports = n
    },
    3514: (e, t, r) => {
      var o = {
        "./de": [1367, 4710],
        "./en": [579, 3486],
        "./es": [7304, 4011],
        "./fr": [2436, 4851],
        "./it": [665, 9936],
        "./ja": [9729, 2156],
        "./ko": [5414, 3885],
        "./pl": [4156, 6891],
        "./pt": [8391, 3475],
        "./ru": [8501, 4528],
        "./zh": [8282, 4861]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 3514, e.exports = n
    },
    4375: (e, t, r) => {
      var o = {
        "./de": [1464, 5639],
        "./en": [3872, 6267],
        "./es": [6507, 5742],
        "./fr": [31, 2678],
        "./it": [6625, 6997],
        "./ja": [3142, 6361],
        "./ko": [2189, 7452],
        "./pl": [6283, 2642],
        "./pt": [6515, 3034],
        "./ru": [7746, 3941],
        "./zh": [4333, 3451]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 4375, e.exports = n
    },
    4819: (e, t, r) => {
      var o = {
        "./de": [7894, 5259],
        "./en": [1658, 4799],
        "./es": [8637, 3370],
        "./fr": [3157, 7010],
        "./it": [9060, 4913],
        "./ja": [6688, 6285],
        "./ko": [4907, 6664],
        "./pl": [8097, 1054],
        "./pt": [8953, 662],
        "./ru": [7924, 5233],
        "./zh": [6975, 4700]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 4819, e.exports = n
    },
    7648: (e, t, r) => {
      var o = {
        "./de": [406, 299],
        "./en": [874, 5663],
        "./es": [4013, 5530],
        "./fr": [4965, 2466],
        "./it": [8596, 7073],
        "./ja": [4656, 4621],
        "./ko": [5451, 824],
        "./pl": [6273, 2398],
        "./pt": [6585, 9126],
        "./ru": [7284, 3697],
        "./zh": [1615, 1868]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 7648, e.exports = n
    },
    8322: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        __addDisposableResource: () => N,
        __assign: () => a,
        __asyncDelegator: () => E,
        __asyncGenerator: () => k,
        __asyncValues: () => x,
        __await: () => j,
        __awaiter: () => b,
        __classPrivateFieldGet: () => T,
        __classPrivateFieldIn: () => C,
        __classPrivateFieldSet: () => L,
        __createBinding: () => y,
        __decorate: () => i,
        __disposeResources: () => U,
        __esDecorate: () => l,
        __exportStar: () => _,
        __extends: () => n,
        __generator: () => m,
        __importDefault: () => D,
        __importStar: () => $,
        __makeTemplateObject: () => P,
        __metadata: () => d,
        __param: () => c,
        __propKey: () => f,
        __read: () => w,
        __rest: () => s,
        __rewriteRelativeImportExtension: () => A,
        __runInitializers: () => u,
        __setFunctionName: () => p,
        __spread: () => v,
        __spreadArray: () => O,
        __spreadArrays: () => g,
        __values: () => h,
        default: () => M
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

      function c(e, t) {
        return function(r, o) {
          t(r, o, e)
        }
      }

      function l(e, t, r, o, n, a) {
        function s(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var i, c = o.kind, l = "getter" === c ? "get" : "setter" === c ? "set" : "value", u = !t && e ? o.static ? e : e.prototype : null, f = t || (u ? Object.getOwnPropertyDescriptor(u, o.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
          var b = {};
          for (var m in o) b[m] = "access" === m ? {} : o[m];
          for (var m in o.access) b.access[m] = o.access[m];
          b.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(s(e || null))
          };
          var y = (0, r[d])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[l], b);
          if ("accessor" === c) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y) throw new TypeError("Object expected");
            (i = s(y.get)) && (f.get = i), (i = s(y.set)) && (f.set = i), (i = s(y.init)) && n.unshift(i)
          } else(i = s(y)) && ("field" === c ? n.unshift(i) : f[l] = i)
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

      function b(e, t, r, o) {
        return new(r || (r = Promise))(function(n, a) {
          function s(e) {
            try {
              c(o.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              c(o.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(s, i)
          }
          c((o = o.apply(e, t || [])).next())
        })
      }

      function m(e, t) {
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
          return function(c) {
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
            }([i, c])
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

      function _(e, t) {
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
            return Promise.resolve(t).then(e, l)
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
            (r = n[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(c, l) : u(a[0][2], r)
          } catch (e) {
            u(a[0][3], e)
          }
          var r
        }

        function c(e) {
          i("next", e)
        }

        function l(e) {
          i("throw", e)
        }

        function u(e, t) {
          e(t), a.shift(), a.length && i(a[0][0], a[0][1])
        }
      }

      function E(e) {
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

      function A(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, o, n, a) {
          return r ? t ? ".jsx" : ".js" : !o || n && a ? o + n + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const M = {
        __extends: n,
        __assign: a,
        __rest: s,
        __decorate: i,
        __param: c,
        __esDecorate: l,
        __runInitializers: u,
        __propKey: f,
        __setFunctionName: p,
        __metadata: d,
        __awaiter: b,
        __generator: m,
        __createBinding: y,
        __exportStar: _,
        __values: h,
        __read: w,
        __spread: v,
        __spreadArrays: g,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: k,
        __asyncDelegator: E,
        __asyncValues: x,
        __makeTemplateObject: P,
        __importStar: $,
        __importDefault: D,
        __classPrivateFieldGet: T,
        __classPrivateFieldSet: L,
        __classPrivateFieldIn: C,
        __addDisposableResource: N,
        __disposeResources: U,
        __rewriteRelativeImportExtension: A
      }
    },
    8525: (e, t, r) => {
      var o = {
        "./de": [5149, 9990],
        "./en": [8517, 1822],
        "./es": [3877, 2347],
        "./fr": [6170, 131],
        "./it": [5583, 8272],
        "./ja": [5571, 7436],
        "./ko": [8284, 2221],
        "./pl": [9682, 2171],
        "./pt": [2762, 8755],
        "./ru": [1007, 2864],
        "./zh": [8548, 3197]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 8525, e.exports = n
    },
    9245: (e, t, r) => {
      "use strict";
      var o = r(2229),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var o, a = {},
          l = null,
          u = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, o) && !c.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: u,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = l, t.jsxs = l
    },
    9867: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        n = [{
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
        a = () => {
          let e;
          const {
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = n.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === r && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), a = n[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    }
  }
]);