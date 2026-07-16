try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "2e90bdda-88d9-408d-90d1-e94407d9d5d8", e._sentryDebugIdIdentifier = "sentry-dbid-2e90bdda-88d9-408d-90d1-e94407d9d5d8")
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
  [842, 1177, 4809, 7190, 8461], {
    94931(e, o, t) {
      var r = t(93082),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, t) {
        var r, a = {},
          c = null,
          u = null;
        for (r in void 0 !== t && (c = "" + t), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) s.call(o, r) && !l.hasOwnProperty(r) && (a[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === a[r] && (a[r] = o[r]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: u,
          props: a,
          _owner: i.current
        }
      }
      o.Fragment = a, o.jsx = c, o.jsxs = c
    },
    39793(e, o, t) {
      e.exports = t(94931)
    },
    40842(e, o, t) {
      t.r(o), t.d(o, {
        FormattedMessage: () => c,
        POSIXLocales: () => _,
        ReactIntlProviderForMocking: () => p.A,
        createDevLocaleHook: () => O,
        createIntl: () => d.E,
        defineMessages: () => u.YK,
        englishLocale: () => y,
        getCookieValueByName: () => h,
        getLocale: () => k,
        linkWithLocale: () => j,
        localeCookieHandler: () => w,
        locales: () => v,
        onLanguageChange: () => E,
        splitLocale: () => $,
        useIntl: () => s.A,
        withIntl: () => x
      });
      var r = t(51177),
        n = t(93082),
        a = t(40949),
        s = t(68925);

      function i(e) {
        var o = (0, s.A)(),
          t = o.formatMessage,
          r = o.textComponent,
          a = void 0 === r ? n.Fragment : r,
          i = e.id,
          l = e.description,
          c = e.defaultMessage,
          u = e.values,
          d = e.children,
          p = e.tagName,
          f = void 0 === p ? a : p,
          m = t({
            id: i,
            description: l,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof d ? d(Array.isArray(m) ? m : [m]) : f ? n.createElement(f, null, m) : n.createElement(n.Fragment, null, m)
      }
      i.displayName = "FormattedMessage";
      var l = n.memo(i, function(e, o) {
        var t = e.values,
          n = (0, r.Tt)(e, ["values"]),
          s = o.values,
          i = (0, r.Tt)(o, ["values"]);
        return (0, a.bN)(s, t) && (0, a.bN)(n, i)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l;
      var u = t(14376),
        d = t(32447),
        p = t(46344),
        f = t(39793),
        m = t(24834);
      const b = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            r = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${r}; path=/;`
        },
        h = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            r = o.find(e => e.startsWith(t)),
            n = r?.substring(t.length, r.length);
          return n
        },
        w = (e, o, t = !1) => {
          const r = h(e);
          return r && !t || b(e, o), [r, (n = e, e => {
            b(n, e)
          })];
          var n
        },
        g = [{
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
        y = g[0],
        _ = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        v = g,
        k = () => {
          const {
            location: e
          } = window, o = (0, m.A)(), t = (e => {
            const o = v.map(e => e.subdomaincom),
              t = e.pathname.substring(1).split("/"),
              r = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[r]) ? t[r] : null
          })(e), r = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), n = y;
          let a;
          const s = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = h(s);
          a = o.currentSite?.site === m.C.www ? v.find(e => e.subdomaincom === r) || v.find(e => e.subdomaincom === t) || n : v.find(e => e.iso === i) || n;
          const [, l] = w(s, a.iso);
          return [a, l]
        };

      function x(e, o, t, r) {
        return a => {
          const s = (0, n.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? k()[0].iso ?? "en-US",
                  r = function(e, o) {
                    return e[o] ?? {}
                  }(e, t);
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
          }, [t]);
          return (0, f.jsx)(p.A, {
            locale: s?.locale || "en-US",
            messages: {
              ...s?.messages
            },
            onError: r,
            children: s && (0, f.jsx)(e, {
              ...a
            })
          }, "intl-provider")
        }
      }

      function $(e) {
        let [o, t] = e.split(/[-_]/), r = t?.toLowerCase();
        return "cn" === r && (r = "hans"), o && t || (o = "en", r = "us"), [o, r]
      }
      const O = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = k(), [t, r] = $(o);
            return e?.[r] ?? e.us
          }
        },
        A = {
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
        j = e => {
          const [o] = k(), {
            sites: t
          } = (0, m.A)();
          let r;
          try {
            r = new URL(e)
          } catch {
            r = null
          }
          if (r)
            for (const [n, {
                regex: a,
                isSubdomain: s,
                isLocaleInUrl: i,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(A)) {
              if (!a.test(e.toLowerCase())) continue;
              const u = t[n];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && i && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === n && "/" === r.pathname && (d += "/"));
              const p = r.host.split(".");
              let f = "";
              return "www" !== n || c?.some(e => e.test(r.pathname)) ? ("www" !== n && (f += `https://${u}`, f += s ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`), {
                link: `${f}${d}${"/"===r.pathname?"":r.pathname}${r.search}${r.hash}`,
                isExternal: !0
              }) : {
                link: `${f}${"/"===r.pathname?"":r.pathname}${r.search}${r.hash}`,
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
        E = ({
          selectedLocale: e,
          track: o,
          parent: t = ""
        }) => {
          const r = (0, m.A)(),
            [, n] = k(),
            {
              subdomaincom: a,
              iso: s
            } = e,
            i = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return v.map(e => e.subdomaincom).includes(t[0]) && (o = t.slice(1).join("/")), r.currentSite?.site === m.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(a);
          o?.({
            event: "cta_other",
            link_url: i,
            text: a,
            element_placement: t?.toLowerCase()
          }), n(s), window.location.assign(i)
        }
    },
    24834(e, o, t) {
      var r = t(57202),
        n = t(50573);
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
      t.d(o, ["A", 0, () => {
        let e;
        const {
          location: o
        } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), s = a.findIndex(o => Object.entries(o.sites).findIndex(([o, r]) => r === t && (e = {
          site: o,
          subDomain: r
        }, !0)) >= 0), i = a[s >= 0 ? s : 0], l = a.find(e => e.id === i.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, n.A)((0, r.A)({}, l, {
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
    50573(e, o, t) {
      t.d(o, {
        A: () => O
      });
      var r = t(20829),
        n = t(70278),
        a = t(73443);
      var s = t(99793);
      const i = function(e, o) {
        return o.length < 2 ? e : (0, s.A)(e, function(e, o, t) {
          var r = -1,
            n = e.length;
          o < 0 && (o = -o > n ? 0 : n + o), (t = t > n ? n : t) < 0 && (t += n), n = o > t ? 0 : t - o >>> 0, o >>>= 0;
          for (var a = Array(n); ++r < n;) a[r] = e[r + o];
          return a
        }(o, 0, -1))
      };
      var l = t(33018),
        c = Object.prototype.hasOwnProperty;
      const u = function(e, o) {
        var t = -1,
          r = (o = (0, a.A)(o, e)).length;
        if (!r) return !0;
        for (; ++t < r;) {
          var n = (0, l.A)(o[t]);
          if ("__proto__" === n && !c.call(e, "__proto__")) return !1;
          if (("constructor" === n || "prototype" === n) && t < r - 1) return !1
        }
        var s = i(e, o);
        return null == s || delete s[(0, l.A)(function(e) {
          var o = null == e ? 0 : e.length;
          return o ? e[o - 1] : void 0
        }(o))]
      };
      var d = t(57502),
        p = t(58634);
      const f = function(e) {
        return (0, p.A)(e) ? void 0 : e
      };
      var m = t(68071),
        b = t(94508),
        h = t(48348),
        w = t(6700),
        g = b.A ? b.A.isConcatSpreadable : void 0;
      const y = function(e) {
          return (0, w.A)(e) || (0, h.A)(e) || !!(g && e && e[g])
        },
        _ = function e(o, t, r, n, a) {
          var s = -1,
            i = o.length;
          for (r || (r = y), a || (a = []); ++s < i;) {
            var l = o[s];
            t > 0 && r(l) ? t > 1 ? e(l, t - 1, r, n, a) : (0, m.A)(a, l) : n || (a[a.length] = l)
          }
          return a
        },
        v = function(e) {
          return null != e && e.length ? _(e, 1) : []
        };
      var k = t(7352),
        x = t(91847);
      var $ = t(47016);
      const O = (A = function(e, o) {
        var t = {};
        if (null == e) return t;
        var s = !1;
        o = (0, r.A)(o, function(o) {
          return o = (0, a.A)(o, e), s || (s = o.length > 1), o
        }), (0, d.A)(e, (0, $.A)(e), t), s && (t = (0, n.A)(t, 7, f));
        for (var i = o.length; i--;) u(t, o[i]);
        return t
      }, (0, x.A)((0, k.A)(A, void 0, v), A + ""));
      var A
    },
    51177(e, o, t) {
      t.d(o, {
        C6: () => n,
        Cl: () => a,
        Tt: () => s,
        YH: () => l,
        fX: () => d,
        gz: () => u,
        sH: () => i
      });
      var r = function(e, o) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, o) {
          e.__proto__ = o
        } || function(e, o) {
          for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
        }, r(e, o)
      };

      function n(e, o) {
        if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        r(e, o), e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var o, t = 1, r = arguments.length; t < r; t++)
            for (var n in o = arguments[t]) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
          return e
        }, a.apply(this, arguments)
      };

      function s(e, o) {
        var t = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (t[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) o.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (t[r[n]] = e[r[n]])
        }
        return t
      }

      function i(e, o, t, r) {
        return new(t || (t = Promise))(function(n, a) {
          function s(e) {
            try {
              l(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              l(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function l(e) {
            var o;
            e.done ? n(e.value) : (o = e.value, o instanceof t ? o : new t(function(e) {
              e(o)
            })).then(s, i)
          }
          l((r = r.apply(e, o || [])).next())
        })
      }

      function l(e, o) {
        var t, r, n, a = {
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
              if (t) throw new TypeError("Generator is already executing.");
              for (; s && (s = 0, i[0] && (a = 0)), a;) try {
                if (t = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                switch (r = 0, n && (i = [2 & i[0], n.value]), i[0]) {
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
                    a.label++, r = i[1], i = [0];
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
                i = o.call(e, a)
              } catch (e) {
                i = [6, e], r = 0
              } finally {
                t = n = 0
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

      function c(e, o) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var r, n, a = t.call(e),
          s = [];
        try {
          for (;
            (void 0 === o || o-- > 0) && !(r = a.next()).done;) s.push(r.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (t = a.return) && t.call(a)
          } finally {
            if (n) throw n.error
          }
        }
        return s
      }

      function u() {
        for (var e = [], o = 0; o < arguments.length; o++) e = e.concat(c(arguments[o]));
        return e
      }

      function d(e, o, t) {
        if (t || 2 === arguments.length)
          for (var r, n = 0, a = o.length; n < a; n++) !r && n in o || (r || (r = Array.prototype.slice.call(o, 0, n)), r[n] = o[n]);
        return e.concat(r || Array.prototype.slice.call(o))
      }
      Object.create, Object.create
    }
  }
]);