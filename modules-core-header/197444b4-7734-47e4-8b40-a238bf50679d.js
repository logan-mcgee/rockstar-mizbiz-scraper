! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "197444b4-7734-47e4-8b40-a238bf50679d", e._sentryDebugIdIdentifier = "sentry-dbid-197444b4-7734-47e4-8b40-a238bf50679d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [240, 143], {
    6516: (e, t, o) => {
      "use strict";
      var n = o(1403),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, o) {
        var n, s = {},
          u = null,
          c = null;
        for (n in void 0 !== o && (u = "" + o), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, n) && !i.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: u,
          ref: c,
          props: s,
          _owner: l.current
        }
      }
      t.Fragment = s, t.jsx = u, t.jsxs = u
    },
    6632: (e, t, o) => {
      "use strict";
      e.exports = o(6516)
    },
    4143: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, {
        FormattedMessage: () => n.A,
        IntlProvider: () => l.Kq,
        POSIXLocales: () => d.FN,
        createDevLocaleHook: () => i.A,
        createIntl: () => r.E,
        defineMessages: () => s.YK,
        englishLocale: () => d.Vm,
        getCookieValueByName: () => c.h,
        getLocale: () => u.A,
        localeCookieHandler: () => c.A,
        locales: () => d.Ay,
        splitLocale: () => p.A,
        useIntl: () => a.A,
        withIntl: () => l.QY
      });
      var n = o(7047),
        r = o(4952),
        s = o(452),
        a = o(708),
        l = o(120),
        i = o(3480),
        u = o(175),
        c = o(4677),
        d = o(9186),
        p = o(5136),
        f = o(1272),
        b = {};
      for (const e in f)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (b[e] = () => f[e]);
      o.d(t, b)
    },
    120: (e, t, o) => {
      "use strict";
      o.d(t, {
        Kq: () => i,
        QY: () => u
      });
      var n = o(1403),
        r = o(3071),
        s = o(175),
        a = o(5136),
        l = o(6632);
      const i = e => {
        let {
          locales: t,
          lang: o,
          children: s
        } = e;
        const [i, u] = (0, n.useMemo)((() => (0, a.A)(o)), [o]), c = (0, n.useMemo)((() => function(e, t) {
          return e?.[t] ?? {}
        }(t, u)), [o, t]);
        return (0, l.jsx)(r.A, {
          messages: c,
          locale: i,
          defaultLocale: "en",
          children: s
        })
      };

      function u(e, t) {
        return o => {
          const [{
            iso: n
          }] = (0, s.A)();
          return (0, l.jsx)(i, {
            locales: t,
            lang: n,
            children: (0, l.jsx)(e, {
              ...o
            })
          })
        }
      }
    },
    1272: () => {},
    3480: (e, t, o) => {
      "use strict";
      o.d(t, {
        A: () => s
      });
      var n = o(175),
        r = o(5136);
      const s = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: t
          }] = (0, n.A)(), [o, s] = (0, r.A)(t);
          return e?.[s] ?? e.us
        }
      }
    },
    175: (e, t, o) => {
      "use strict";
      o.d(t, {
        A: () => a
      });
      var n = o(3963),
        r = o(4677),
        s = o(9186);
      const a = () => {
        const {
          location: e
        } = window, t = (0, n.A)(), o = (e => {
          const t = s.Ay.map((e => e.subdomaincom)),
            o = e.pathname.substring(1).split("/"),
            n = "detect-locals" === o[0] ? 1 : 0;
          return -1 !== t.indexOf(o[n]) ? o[n] : null
        })(e), a = (e => {
          const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return t?.split("=")[1]
        })(e), l = s.Vm;
        let i = l;
        const u = `rockstarweb_lang.${t.cookieIdentifier}`,
          c = (0, r.h)(u);
        i = t.currentSite?.site === n.C.www ? s.Ay.find((e => e.subdomaincom === a)) || s.Ay.find((e => e.subdomaincom === o)) || l : s.Ay.find((e => e.iso === c)) || l;
        const [d, p] = (0, r.A)(u, i.iso);
        return [i, p]
      }
    },
    4677: (e, t, o) => {
      "use strict";
      o.d(t, {
        A: () => a,
        h: () => s
      });
      const n = (e, t) => {
          e && t ? document.cookie = `${e}=${t}; domain=${r()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${t})`)
        },
        r = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        s = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find((e => e.startsWith(o))),
            r = n?.substring(o.length, n.length);
          return r
        },
        a = function(e, t) {
          let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const r = s(e);
          return r && !o || n(e, t), [r, (a = e, e => {
            n(a, e)
          })];
          var a
        }
    },
    9186: (e, t, o) => {
      "use strict";
      o.d(t, {
        Ay: () => a,
        FN: () => s,
        Vm: () => r
      });
      const n = [{
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
        r = n[1],
        s = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        a = n
    },
    5136: (e, t, o) => {
      "use strict";

      function n(e) {
        let [t, o] = e.split(/[-_]/), n = o?.toLowerCase();
        return "cn" === n && (n = "hans"), t && o || (t = "en", n = "us"), [t, n]
      }
      o.d(t, {
        A: () => n
      })
    },
    3963: (e, t, o) => {
      "use strict";
      o.d(t, {
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
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [n, r] = t;
            return r === o && (e = {
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
    226: (e, t, o) => {
      "use strict";
      o.d(t, {
        C6: () => r,
        Cl: () => s,
        Tt: () => a,
        YH: () => i,
        fX: () => u,
        sH: () => l
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }, n(e, t)
      };

      function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }
      var s = function() {
        return s = Object.assign || function(e) {
          for (var t, o = 1, n = arguments.length; o < n; o++)
            for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e
        }, s.apply(this, arguments)
      };

      function a(e, t) {
        var o = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]])
        }
        return o
      }

      function l(e, t, o, n) {
        return new(o || (o = Promise))((function(r, s) {
          function a(e) {
            try {
              i(n.next(e))
            } catch (e) {
              s(e)
            }
          }

          function l(e) {
            try {
              i(n.throw(e))
            } catch (e) {
              s(e)
            }
          }

          function i(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
              e(t)
            }))).then(a, l)
          }
          i((n = n.apply(e, t || [])).next())
        }))
      }

      function i(e, t) {
        var o, n, r, s, a = {
          label: 0,
          sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
          },
          trys: [],
          ops: []
        };
        return s = {
          next: l(0),
          throw: l(1),
          return: l(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
          return this
        }), s;

        function l(l) {
          return function(i) {
            return function(l) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; s && (s = 0, l[0] && (a = 0)), a;) try {
                if (o = 1, n && (r = 2 & l[0] ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
                switch (n = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                  case 0:
                  case 1:
                    r = l;
                    break;
                  case 4:
                    return a.label++, {
                      value: l[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = l[1], l = [0];
                    continue;
                  case 7:
                    l = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                      a.label = l[1];
                      break
                    }
                    if (6 === l[0] && a.label < r[1]) {
                      a.label = r[1], r = l;
                      break
                    }
                    if (r && a.label < r[2]) {
                      a.label = r[2], a.ops.push(l);
                      break
                    }
                    r[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                l = t.call(e, a)
              } catch (e) {
                l = [6, e], n = 0
              } finally {
                o = r = 0
              }
              if (5 & l[0]) throw l[1];
              return {
                value: l[0] ? l[1] : void 0,
                done: !0
              }
            }([l, i])
          }
        }
      }

      function u(e, t, o) {
        if (o || 2 === arguments.length)
          for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);