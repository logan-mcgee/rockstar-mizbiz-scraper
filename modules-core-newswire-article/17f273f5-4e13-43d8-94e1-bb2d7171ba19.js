! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "17f273f5-4e13-43d8-94e1-bb2d7171ba19", e._sentryDebugIdIdentifier = "sentry-dbid-17f273f5-4e13-43d8-94e1-bb2d7171ba19")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [236, 240], {
    31580: (e, t, o) => {
      var r = o(36056).Symbol;
      e.exports = r
    },
    95992: (e, t, o) => {
      var r = o(31580),
        s = o(78584),
        n = o(49176),
        a = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? s(e) : n(e)
      }
    },
    96096: (e, t, o) => {
      var r = o(57520),
        s = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(s, "") : e
      }
    },
    81044: (e, t, o) => {
      var r = "object" == typeof o.g && o.g && o.g.Object === Object && o.g;
      e.exports = r
    },
    78584: (e, t, o) => {
      var r = o(31580),
        s = Object.prototype,
        n = s.hasOwnProperty,
        a = s.toString,
        i = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        var t = n.call(e, i),
          o = e[i];
        try {
          e[i] = void 0;
          var r = !0
        } catch (e) {}
        var s = a.call(e);
        return r && (t ? e[i] = o : delete e[i]), s
      }
    },
    49176: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    36056: (e, t, o) => {
      var r = o(81044),
        s = "object" == typeof self && self && self.Object === Object && self,
        n = r || s || Function("return this")();
      e.exports = n
    },
    57520: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var o = e.length; o-- && t.test(e.charAt(o)););
        return o
      }
    },
    69760: (e, t, o) => {
      var r = o(89048),
        s = o(12721),
        n = o(80088),
        a = Math.max,
        i = Math.min;
      e.exports = function(e, t, o) {
        var c, u, d, l, f, m, p = 0,
          b = !1,
          g = !1,
          v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function w(t) {
          var o = c,
            r = u;
          return c = u = void 0, p = t, l = e.apply(r, o)
        }

        function _(e) {
          var o = e - m;
          return void 0 === m || o >= t || o < 0 || g && e - p >= d
        }

        function h() {
          var e = s();
          if (_(e)) return y(e);
          f = setTimeout(h, function(e) {
            var o = t - (e - m);
            return g ? i(o, d - (e - p)) : o
          }(e))
        }

        function y(e) {
          return f = void 0, v && c ? w(e) : (c = u = void 0, l)
        }

        function k() {
          var e = s(),
            o = _(e);
          if (c = arguments, u = this, m = e, o) {
            if (void 0 === f) return function(e) {
              return p = e, f = setTimeout(h, t), b ? w(e) : l
            }(m);
            if (g) return clearTimeout(f), f = setTimeout(h, t), w(m)
          }
          return void 0 === f && (f = setTimeout(h, t)), l
        }
        return t = n(t) || 0, r(o) && (b = !!o.leading, d = (g = "maxWait" in o) ? a(n(o.maxWait) || 0, t) : d, v = "trailing" in o ? !!o.trailing : v), k.cancel = function() {
          void 0 !== f && clearTimeout(f), p = 0, c = m = u = f = void 0
        }, k.flush = function() {
          return void 0 === f ? l : y(s())
        }, k
      }
    },
    89048: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    72316: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    99464: (e, t, o) => {
      var r = o(95992),
        s = o(72316);
      e.exports = function(e) {
        return "symbol" == typeof e || s(e) && "[object Symbol]" == r(e)
      }
    },
    12721: (e, t, o) => {
      var r = o(36056);
      e.exports = function() {
        return r.Date.now()
      }
    },
    80088: (e, t, o) => {
      var r = o(96096),
        s = o(89048),
        n = o(99464),
        a = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (n(e)) return NaN;
        if (s(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = s(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var o = i.test(e);
        return o || c.test(e) ? u(e.slice(2), o ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    99576: (e, t, o) => {
      "use strict";
      var r = o(51664),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, o) {
        var r, n = {},
          u = null,
          d = null;
        for (r in void 0 !== o && (u = "" + o), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (d = t.ref), t) a.call(t, r) && !c.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: u,
          ref: d,
          props: n,
          _owner: i.current
        }
      }
      t.Fragment = n, t.jsx = u, t.jsxs = u
    },
    95240: (e, t, o) => {
      "use strict";
      e.exports = o(99576)
    },
    79584: (e, t, o) => {
      "use strict";
      o.d(t, {
        FormattedMessage: () => s.c,
        defineMessages: () => r.Os,
        getLocale: () => b,
        locales: () => m,
        useIntl: () => n.c,
        withIntl: () => w
      });
      var r = o(45052),
        s = o(3832),
        n = o(95688),
        a = o(51664),
        i = o(82936),
        c = o(53592);
      const u = (e, t) => {
          e && t ? document.cookie = `${e}=${t}; domain=${d()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${t})`)
        },
        d = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        l = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            r = t.find((e => e.startsWith(o))),
            s = r?.substring(o.length, r.length);
          return s
        },
        f = [{
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
        m = f,
        p = f[1],
        b = () => {
          const {
            location: e
          } = window, t = (0, c.c)(), o = (e => {
            const t = m.map((e => e.subdomaincom)),
              o = e.pathname.substring(1).split("/"),
              r = "detect-locals" === o[0] ? 1 : 0;
            return -1 !== t.indexOf(o[r]) ? o[r] : null
          })(e), r = (e => {
            const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return t?.split("=")[1]
          })(e), s = p;
          let n = s;
          const a = `rockstarweb_lang.${t.cookieIdentifier}`,
            i = l(a);
          n = t.currentSite?.site === c.U.www ? m.find((e => e.subdomaincom === r)) || m.find((e => e.subdomaincom === o)) || s : m.find((e => e.iso === i)) || s;
          const [d, f] = function(e, t) {
            let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = l(e);
            return r && !o || u(e, t), [r, (s = e, e => {
              u(s, e)
            })];
            var s
          }(a, n.iso);
          return [n, f]
        };
      var g = o(95240);
      const v = e => {
        let {
          locales: t,
          lang: o,
          children: r
        } = e;
        const s = (0, a.useMemo)((() => function(e) {
            let [t, o] = e.split(/[-_]/);
            return o = o?.toLowerCase(), "cn" === o && (o = "hans"), t && o || (t = "en", o = "us"), [t, o]
          }(o)), [o]),
          n = (0, a.useMemo)((() => function(e, t) {
            return e?.[t] ?? {}
          }(t, s[1])), [o, t]);
        return (0, g.jsx)(i.c, {
          messages: n,
          locale: s[0],
          defaultLocale: "en",
          children: r
        }, s[0])
      };

      function w(e, t) {
        return o => {
          const [{
            iso: r
          }] = b();
          return (0, g.jsx)(v, {
            locales: t,
            lang: r,
            children: (0, g.jsx)(e, {
              ...o
            })
          })
        }
      }
      o(3061)
    },
    53592: (e, t, o) => {
      "use strict";
      o.d(t, {
        U: () => r,
        c: () => n
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        s = [{
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
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = s.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, s] = t;
            return s === o && (e = {
              site: r,
              subDomain: s
            }, !0)
          })) >= 0)), n = s[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    },
    56644: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    17104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    65388: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    39336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    15588: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    91232: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    23124: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    96201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    }
  }
]);