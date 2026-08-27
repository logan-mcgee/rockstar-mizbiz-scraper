try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d36fe531-d436-481b-8fdd-c9125d5bf46a", e._sentryDebugIdIdentifier = "sentry-dbid-d36fe531-d436-481b-8fdd-c9125d5bf46a")
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
  [1125, 1177, 3506, 4809, 9793], {
    94931(e, t, r) {
      var o = r(93082),
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
    39793(e, t, r) {
      e.exports = r(94931)
    },
    93506(e, t, r) {
      r.r(t), r.d(t, {
        FormattedMessage: () => l,
        POSIXLocales: () => v,
        ReactIntlProviderForMocking: () => p.A,
        createDevLocaleHook: () => O,
        createIntl: () => f.E,
        defineMessages: () => u.YK,
        englishLocale: () => w,
        getCookieValueByName: () => b,
        getLocale: () => j,
        linkWithLocale: () => S,
        localeCookieHandler: () => y,
        locales: () => g,
        onLanguageChange: () => P,
        splitLocale: () => x,
        useIntl: () => s.A,
        withIntl: () => k
      });
      var o = r(51177),
        n = r(93082),
        a = r(40949),
        s = r(68925);

      function i(e) {
        var t = (0, s.A)(),
          r = t.formatMessage,
          o = t.textComponent,
          a = void 0 === o ? n.Fragment : o,
          i = e.id,
          c = e.description,
          l = e.defaultMessage,
          u = e.values,
          f = e.children,
          p = e.tagName,
          d = void 0 === p ? a : p,
          _ = r({
            id: i,
            description: c,
            defaultMessage: l
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof f ? f(Array.isArray(_) ? _ : [_]) : d ? n.createElement(d, null, _) : n.createElement(n.Fragment, null, _)
      }
      i.displayName = "FormattedMessage";
      var c = n.memo(i, function(e, t) {
        var r = e.values,
          n = (0, o.__rest)(e, ["values"]),
          s = t.values,
          i = (0, o.__rest)(t, ["values"]);
        return (0, a.bN)(s, r) && (0, a.bN)(n, i)
      });
      c.displayName = "MemoizedFormattedMessage";
      const l = c;
      var u = r(14376),
        f = r(32447),
        p = r(46344),
        d = r(39793),
        _ = r(68196);
      const m = (e, t) => {
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
        y = (e, t, r = !1) => {
          const o = b(e);
          return o && !r || m(e, t), [o, (n = e, e => {
            m(n, e)
          })];
          var n
        },
        h = [{
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
        w = h[0],
        v = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        g = h,
        j = () => {
          const {
            location: e
          } = window, t = (0, _.A)(), r = (e => {
            const t = g.map(e => e.subdomaincom),
              r = e.pathname.substring(1).split("/"),
              o = "detect-locals" === r[0] ? 1 : 0;
            return -1 !== t.indexOf(r[o]) ? r[o] : null
          })(e), o = (e => {
            const t = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return t?.split("=")[1]
          })(e), n = w;
          let a;
          const s = `rockstarweb_lang.${t.cookieIdentifier}`,
            i = b(s);
          a = t.currentSite?.site === _.C.www ? g.find(e => e.subdomaincom === o) || g.find(e => e.subdomaincom === r) || n : g.find(e => e.iso === i) || n;
          const [, c] = y(s, a.iso);
          return [a, c]
        };

      function k(e, t, r, o) {
        return a => {
          const s = (0, n.useMemo)(() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const r = t ?? j()[0].iso ?? "en-US",
                  o = function(e, t) {
                    return e[t] ?? {}
                  }(e, r);
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
          return (0, d.jsx)(p.A, {
            locale: s?.locale || "en-US",
            messages: {
              ...s?.messages
            },
            onError: o,
            children: s && (0, d.jsx)(e, {
              ...a
            })
          }, "intl-provider")
        }
      }

      function x(e) {
        let [t, r] = e.split(/[-_]/), o = r?.toLowerCase();
        return "cn" === o && (o = "hans"), t && r || (t = "en", o = "us"), [t, o]
      }
      const O = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: t
            }] = j(), [r, o] = x(t);
            return e?.[o] ?? e.us
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
        S = e => {
          const [t] = j(), {
            sites: r
          } = (0, _.A)();
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
              }] of Object.entries(E)) {
              if (!a.test(e.toLowerCase())) continue;
              const u = r[n];
              if (!u) continue;
              let f = "";
              "en" !== t.subdomaincom && i && (f = `/${t[c||"subdomaincom"]}`, "circoloco" === n && "/" === o.pathname && (f += "/"));
              const p = o.host.split(".");
              let d = "";
              return "www" !== n || l?.some(e => e.test(o.pathname)) ? ("www" !== n && (d += `https://${u}`, d += s ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`), {
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
          const o = (0, _.A)(),
            [, n] = j(),
            {
              subdomaincom: a,
              iso: s
            } = e,
            i = (e => {
              let t = location.pathname.replace(/^\/|\/$/g, "");
              const r = t.split("/");
              return g.map(e => e.subdomaincom).includes(r[0]) && (t = r.slice(1).join("/")), o.currentSite?.site === _.C.www ? "en" === e ? `${window.location.origin}/${t}${location.search}` : `${window.location.origin}/${e}/${t}${location.search}` : `${window.location.origin}/${t}${location.search}`
            })(a);
          t?.({
            event: "cta_other",
            link_url: i,
            text: a,
            element_placement: r?.toLowerCase()
          }), n(s), window.location.assign(i)
        }
    },
    68196(e, t, r) {
      var o = r(57202),
        n = r(50573);
      const a = [{
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
      }];
      r.d(t, ["A", 0, () => {
        let e;
        const {
          location: t
        } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = a.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === r && (e = {
          site: t,
          subDomain: o
        }, !0)) >= 0), i = a[s >= 0 ? s : 0], c = a.find(e => e.id === i.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, n.A)((0, o.A)({}, c, {
          currentSite: e
        }, i), "fallbackEnvironment")
      }, "C", 0, {
        www: "www",
        socialClub: "socialClub",
        support: "support",
        store: "store",
        circoloco: "circoloco",
        supportNew: "support"
      }])
    },
    50573(e, t, r) {
      r.d(t, {
        A: () => O
      });
      var o = r(20829),
        n = r(70278),
        a = r(73443);
      var s = r(99793);
      const i = function(e, t) {
        return t.length < 2 ? e : (0, s.A)(e, function(e, t, r) {
          var o = -1,
            n = e.length;
          t < 0 && (t = -t > n ? 0 : n + t), (r = r > n ? n : r) < 0 && (r += n), n = t > r ? 0 : r - t >>> 0, t >>>= 0;
          for (var a = Array(n); ++o < n;) a[o] = e[o + t];
          return a
        }(t, 0, -1))
      };
      var c = r(33018),
        l = Object.prototype.hasOwnProperty;
      const u = function(e, t) {
        var r = -1,
          o = (t = (0, a.A)(t, e)).length;
        if (!o) return !0;
        for (; ++r < o;) {
          var n = (0, c.A)(t[r]);
          if ("__proto__" === n && !l.call(e, "__proto__")) return !1;
          if (("constructor" === n || "prototype" === n) && r < o - 1) return !1
        }
        var s = i(e, t);
        return null == s || delete s[(0, c.A)(function(e) {
          var t = null == e ? 0 : e.length;
          return t ? e[t - 1] : void 0
        }(t))]
      };
      var f = r(57502),
        p = r(58634);
      const d = function(e) {
        return (0, p.A)(e) ? void 0 : e
      };
      var _ = r(68071),
        m = r(94508),
        b = r(48348),
        y = r(6700),
        h = m.A ? m.A.isConcatSpreadable : void 0;
      const w = function(e) {
          return (0, y.A)(e) || (0, b.A)(e) || !!(h && e && e[h])
        },
        v = function e(t, r, o, n, a) {
          var s = -1,
            i = t.length;
          for (o || (o = w), a || (a = []); ++s < i;) {
            var c = t[s];
            r > 0 && o(c) ? r > 1 ? e(c, r - 1, o, n, a) : (0, _.A)(a, c) : n || (a[a.length] = c)
          }
          return a
        },
        g = function(e) {
          return null != e && e.length ? v(e, 1) : []
        };
      var j = r(7352),
        k = r(91847);
      var x = r(47016);
      const O = (E = function(e, t) {
        var r = {};
        if (null == e) return r;
        var s = !1;
        t = (0, o.A)(t, function(t) {
          return t = (0, a.A)(t, e), s || (s = t.length > 1), t
        }), (0, f.A)(e, (0, x.A)(e), r), s && (r = (0, n.A)(r, 7, d));
        for (var i = t.length; i--;) u(r, t[i]);
        return r
      }, (0, k.A)((0, j.A)(E, void 0, g), E + ""));
      var E
    },
    51177(e, t, r) {
      r.r(t), r.d(t, {
        __addDisposableResource: () => D,
        __assign: () => a,
        __asyncDelegator: () => O,
        __asyncGenerator: () => x,
        __asyncValues: () => E,
        __await: () => k,
        __awaiter: () => _,
        __classPrivateFieldGet: () => T,
        __classPrivateFieldIn: () => L,
        __classPrivateFieldSet: () => C,
        __createBinding: () => b,
        __decorate: () => i,
        __disposeResources: () => N,
        __esDecorate: () => l,
        __exportStar: () => y,
        __extends: () => n,
        __generator: () => m,
        __importDefault: () => $,
        __importStar: () => A,
        __makeTemplateObject: () => S,
        __metadata: () => d,
        __param: () => c,
        __propKey: () => f,
        __read: () => w,
        __rest: () => s,
        __rewriteRelativeImportExtension: () => M,
        __runInitializers: () => u,
        __setFunctionName: () => p,
        __spread: () => v,
        __spreadArray: () => j,
        __spreadArrays: () => g,
        __values: () => h
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
          var _ = {};
          for (var m in o) _[m] = "access" === m ? {} : o[m];
          for (var m in o.access) _.access[m] = o.access[m];
          _.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(s(e || null))
          };
          var b = (0, r[d])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[l], _);
          if ("accessor" === c) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b) throw new TypeError("Object expected");
            (i = s(b.get)) && (f.get = i), (i = s(b.set)) && (f.set = i), (i = s(b.init)) && n.unshift(i)
          } else(i = s(b)) && ("field" === c ? n.unshift(i) : f[l] = i)
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
      var b = Object.create ? function(e, t, r, o) {
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

      function y(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r)
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

      function j(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, a = t.length; n < a; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }

      function k(e) {
        return this instanceof k ? (this.v = e, this) : new k(e)
      }

      function x(e, t, r) {
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
            (r = n[e](t)).value instanceof k ? Promise.resolve(r.value.v).then(c, l) : u(a[0][2], r)
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

      function O(e) {
        var t, r;
        return t = {}, o("next"), o("throw", function(e) {
          throw e
        }), o("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function o(o, n) {
          t[o] = e[o] ? function(t) {
            return (r = !r) ? {
              value: k(e[o](t)),
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

      function S(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var P = Object.create ? function(e, t) {
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

      function A(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = I(e), o = 0; o < r.length; o++) "default" !== r[o] && b(t, e, r[o]);
        return P(t, e), t
      }

      function $(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function T(e, t, r, o) {
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? o : "a" === r ? o.call(e) : o ? o.value : t.get(e)
      }

      function C(e, t, r, o, n) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === o ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
      }

      function L(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function D(e, t, r) {
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

      function N(e) {
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

      function M(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, o, n, a) {
          return r ? t ? ".jsx" : ".js" : !o || n && a ? o + n + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const F = {
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
        __awaiter: _,
        __generator: m,
        __createBinding: b,
        __exportStar: y,
        __values: h,
        __read: w,
        __spread: v,
        __spreadArrays: g,
        __spreadArray: j,
        __await: k,
        __asyncGenerator: x,
        __asyncDelegator: O,
        __asyncValues: E,
        __makeTemplateObject: S,
        __importStar: A,
        __importDefault: $,
        __classPrivateFieldGet: T,
        __classPrivateFieldSet: C,
        __classPrivateFieldIn: L,
        __addDisposableResource: D,
        __disposeResources: N,
        __rewriteRelativeImportExtension: M
      };
      r.d(t, ["default", 0, F])
    }
  }
]);