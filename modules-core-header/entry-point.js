try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "13a25807-03bc-40db-92d5-0ce01920717d", e._sentryDebugIdIdentifier = "sentry-dbid-13a25807-03bc-40db-92d5-0ce01920717d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e = {
          89863(e, t, a) {
            (0, a(35039).w)(1)
          },
          35039(e, t, a) {
            const r = a(20103).y;
            t.w = function(e) {
              if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p = r(a.y.meta.url, e)
            }
          },
          87732(e, t, a) {
            a(89863)
          },
          20103(e, t, a) {
            t.y = function(e, t) {
              var a = document.createElement("a");
              a.href = e;
              for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, n = 0, o = r.length; n !== t && o >= 0;) "/" === r[--o] && n++;
              if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
              var c = r.slice(0, o + 1);
              return a.protocol + "//" + a.host + c
            };
            Number.isInteger
          },
          72892(e, t, a) {
            "use strict";
            const r = {
                "./core": () => Promise.all([a.e(2145), a.e(9167), a.e(8203), a.e(2813), a.e(4637), a.e(1270), a.e(2909), a.e(4287), a.e(3331), a.e(3680)]).then(() => () => a(42760))
              },
              n = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), a.R = void 0, t),
              o = (e, t) => {
                if (!a.S) return;
                const r = "default",
                  n = a.S[r];
                if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return a.S[r] = e, a.I(r, t)
              };
            a.d(t, {
              get: () => n,
              init: () => o
            })
          }
        };
        const a = {};

        function r(t) {
          const n = a[t];
          if (void 0 !== n) return n.exports;
          const o = a[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
        }
        return r.m = e, r.c = a, r.y = t, r.amdO = {}, r.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return r.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          r.t = function(a, n) {
            if (1 & n && (a = this(a)), 8 & n) return a;
            if ("object" == typeof a && a) {
              if (4 & n && a.__esModule) return a;
              if (16 & n && "function" == typeof a.then) return a
            }
            const o = Object.create(null);
            r.r(o);
            const c = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var d = 2 & n && a;
              ("object" == typeof d || "function" == typeof d) && !~t.indexOf(d); d = e(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => a[e]);
            return c.default = () => a, r.d(o, c), o
          }
        })(), r.d = (e, t) => {
          if (Array.isArray(t))
            for (var a = 0; a < t.length;) {
              var n = t[a++],
                o = t[a++];
              r.o(e, n) ? 0 === o && a++ : 0 === o ? Object.defineProperty(e, n, {
                enumerable: !0,
                value: t[a++]
              }) : Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
              })
            } else
              for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
              })
        }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), [])), r.u = e => "js/" + {
          4: "7eb1bf3782052d398c8b5748264e6e32",
          162: "446d889173556321fafbcdae95419ec2",
          195: "af10605f77e5646842153d0ab7ff30a7",
          247: "1160f0a70a2c748d842b8a01569f56d7",
          323: "2718536cc62a87e229a5ca3178630c09",
          519: "a5624f9c5982c3c30b28f9da188f3762",
          699: "714572ea038ff9fe1444801cb71c888e",
          700: "aebedccf0f21a110a3d00cee3b64ea9f",
          761: "dd394178558ecf64b05896c416dce143",
          896: "79c40647b0c1ee8e3dd514a4408527b4",
          1158: "a83c5551c87fb6b1fa7a8ec490709bed",
          1692: "4b78a0a01adfca70ac5b49bff09dfa44",
          1777: "101ea38bd40af7d629880e3ec2bb31b3",
          1827: "b77c966f3516195a85a084ddb537e35c",
          1915: "42cb834b4c2d84a3fa749e0faa4d2166",
          2145: "531c898cb5f1a87a60dfb5d33bd4d09a",
          2174: "298db60c0c9bcf9c8f6caf04f270d67d",
          2581: "d8bc651445d8c3a2e354431112b2870f",
          2637: "ecb8a0418d88fd68c86b357af419a131",
          2662: "a043781dbd5435c25f8c3dc9f972ad1c",
          2705: "7d58e7d1588404eb95e105d8b54e7384",
          2813: "ee59216cdd2ebcb5f97c0a00b33c6ee9",
          2841: "a3c046540d3cc53e88dfbe460dc1ea7c",
          3080: "6bdd59d11c9dcbfbdfc67cfc74d6ac3b",
          3296: "d59e95e111359d8beb2d2060fec915bd",
          3529: "fcef67cd2c64186be92bb83eba0e94ab",
          3619: "120f24c5900101cfda85ebeb69bc867e",
          3680: "7dfdcdb4a9fa76f9fed91c7f5fd87735",
          3767: "095cc1e6e3cc6bff271b257120bdc195",
          4114: "977fc30ae1cfb745c882b51afb6531eb",
          4296: "f3d7f2abb5439b1df1254a5b657289f0",
          4355: "6760b29d55992081313b57499d743a70",
          4446: "131eb064e1614ec7af9c95fb53736adb",
          4555: "1bc480c73253fb248bad01f9cdee6343",
          4791: "ecf8b50ecf1e9febe06a589f2bd5d299",
          4823: "7be0043da0c0b8ad7dc45e88b445d89c",
          4921: "f4dfa84d59e373044f8423d1b14ede26",
          5018: "007ea57082d082b2d1b009ff022ac281",
          5140: "67a45f2e27ea0f6b2d864c966628666c",
          5296: "4aa40fa950e2eabdf66524b1f96807ec",
          5887: "c8c2f877dce6870f780e47d51416c6db",
          6128: "36c633e8497294d34831e0bc9a0d192b",
          6148: "5933d8f19b3e3fbb8003fdcaa854fdfa",
          6382: "5b8e30c3fb7ffea058272f09d5ccb51f",
          6383: "60980464af67388843639513239b49bd",
          6736: "bea9404e74e5f89919d50110d51948c5",
          6739: "2cc36597755679a49d18404c5e95474f",
          6755: "649cf938ec2e14dce861c4c62dfcd978",
          6918: "a0980f498647344bbb098a5805011cd0",
          6994: "eb1b814e557fd8fdfe7ae9e5b690628c",
          7129: "aa60110544c300ecfbbb3391ff38dbb9",
          7172: "aef51339fd4c7e33af076bc5c1a3475b",
          7377: "2050cf167be85e9dbf717546d0973c24",
          7421: "7da482a6d0ae309dd9103275cf9bb9f2",
          7489: "baa4a9835bd36f816d8d2a3960a84ff3",
          8203: "72475ff24e130f75b40565c0b1b9b513",
          8268: "ca059d465d1b2a45155a84ea285a6f9e",
          8777: "72e975916f63334575a9a8496ed09a90",
          8840: "b44433edb41fb5588a2ab40e0b2658b1",
          8921: "784db714b36317192b94181d03ed189b",
          9017: "700ff073f9616e059f0565f79fa4cb1b",
          9022: "03a61a27bee115fe670b90d7acef1e1f",
          9136: "1f292c63f9c18e32648dae1df90f765e",
          9167: "9d9d0f3e87737714e08a8e9f31f5d987",
          9510: "3f8d3c87fbb9e3e2cc4f86628641e5aa",
          9629: "7c872470b58bb38480d05c704e83b768",
          9758: "9e87fb5e042e00bb46f7c6da8442a543",
          9793: "20c3b794576487b1fd27c067c244d3e1",
          9802: "95af07606f56746158da87e09597e536"
        } [e] + ".js", r.miniCssF = e => "css/" + {
          3080: "60b4a384ad1da4123eed3cda02035b00",
          3680: "6cf2cfa51258f7bbc33f7ef4120df583",
          6128: "9605e4661b50b9d4fc907ee456d15b70",
          7256: "60b4a384ad1da4123eed3cda02035b00",
          7489: "31f1d8b3f9cb952d08d65a7c6149a663",
          8144: "9605e4661b50b9d4fc907ee456d15b70",
          8203: "eda7209165962e3eebd3ea435c000fbe",
          8840: "418522d0d12f72d80b558f9733dd6579"
        } [e] + ".css", r.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-header:";
          r.l = (a, n, o, c) => {
            if (e[a]) return void e[a].push(n);
            let d, f;
            if (void 0 !== o) {
              const e = document.getElementsByTagName("script");
              for (var i = 0; i < e.length; i++) {
                const r = e[i];
                if (r.getAttribute("src") == a || r.getAttribute("data-webpack") == t + o) {
                  d = r;
                  break
                }
              }
            }
            d || (f = !0, d = document.createElement("script"), d.charset = "utf-8", r.nc && d.setAttribute("nonce", r.nc), d.setAttribute("data-webpack", t + o), d.src = a), e[a] = [n];
            const l = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(s);
                const n = e[a];
                if (delete e[a], d.parentNode?.removeChild(d), n?.forEach(e => e(r)), t) return t(r)
              },
              s = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), f && document.head.appendChild(d)
          }
        })(), r.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {},
            t = {};
          r.f.remotes = (a, n) => {
            r.o(e, a) && e[a].forEach(e => {
              let a = r.R;
              a || (a = []);
              const o = t[e];
              if (a.indexOf(o) >= 0) return;
              if (a.push(o), o.p) return n.push(o.p);
              const c = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), r.m[e] = () => {
                    throw t
                  }, o.p = 0
                },
                d = (e, t, a, r, d, f) => {
                  try {
                    const i = e(t, a);
                    if (!i?.then) return d(i, r, f); {
                      const e = i.then(e => d(e, r), c);
                      if (!f) return e;
                      n.push(o.p = e)
                    }
                  } catch (e) {
                    c(e)
                  }
                },
                f = (e, t, r) => d(t.get, o[1], a, 0, i, r),
                i = t => {
                  o.p = 1, r.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(r, o[2], 0, 0, (e, t, a) => e ? d(r.I, o[0], 0, e, f, a) : c(), 1)
            })
          }
        })(), (() => {
          r.S = {};
          const e = {},
            t = {};
          r.I = (a, n) => {
            n || (n = []);
            let o = t[a];
            if (o || (o = t[a] = {}), n.indexOf(o) >= 0) return;
            if (n.push(o), e[a]) return e[a];
            r.o(r.S, a) || (r.S[a] = {});
            const c = r.S[a],
              d = "@rockstargames/modules-core-header",
              f = (e, t, a, r) => {
                const n = c[e] = c[e] || {},
                  o = n[t];
                (!o || !o.loaded && (!r != !o.eager ? r : d > o.from)) && (n[t] = {
                  get: a,
                  from: d,
                  eager: !!r
                })
              },
              i = [];
            switch (a) {
              case "default":
                f("@foundry-int/utils", "6.4.0", () => Promise.all([r.e(4114), r.e(1270)]).then(() => () => r(34114))), f("@foundry/icons", "6.4.0", () => Promise.all([r.e(1827), r.e(4637), r.e(1479), r.e(548), r.e(6128)]).then(() => () => r(21827))), f("@radix-ui/react-accordion", "1.2.16", () => Promise.all([r.e(4637), r.e(5170), r.e(2043), r.e(9802)]).then(() => () => r(69802))), f("@radix-ui/react-dialog", "1.1.19", () => Promise.all([r.e(6382), r.e(4637), r.e(5170), r.e(2043), r.e(3710), r.e(9113), r.e(1158)]).then(() => () => r(1158))), f("@radix-ui/react-focus-scope", "1.1.12", () => Promise.all([r.e(4637), r.e(5170), r.e(4355)]).then(() => () => r(64355))), f("@radix-ui/react-id", "1.1.2", () => Promise.all([r.e(4637), r.e(4296)]).then(() => () => r(94296))), f("@radix-ui/react-navigation-menu", "1.2.18", () => Promise.all([r.e(6382), r.e(1692), r.e(4637), r.e(5170), r.e(2043), r.e(1479), r.e(9793)]).then(() => () => r(61692))), f("@radix-ui/react-popover", "1.1.19", () => Promise.all([r.e(6382), r.e(896), r.e(4637), r.e(5170), r.e(2043), r.e(3710), r.e(9113), r.e(6148)]).then(() => () => r(56148))), f("@radix-ui/react-portal", "1.1.13", () => Promise.all([r.e(4637), r.e(5170), r.e(5887)]).then(() => () => r(18268))), f("@radix-ui/react-slot", "1.3.0", () => Promise.all([r.e(4637), r.e(7172)]).then(() => () => r(17172))), f("@radix-ui/react-use-controllable-state", "1.2.3", () => Promise.all([r.e(4637), r.e(6755)]).then(() => () => r(66755))), f("@radix-ui/react-visually-hidden", "1.2.7", () => Promise.all([r.e(4637), r.e(5170), r.e(5018)]).then(() => () => r(32637))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([r.e(2145), r.e(761), r.e(9167), r.e(4637), r.e(7377)]).then(() => () => r(77377))), f("@rsgweb/modules-core-global-navigation", "0.0.0-development", () => Promise.all([r.e(4823), r.e(8840), r.e(8203), r.e(2705), r.e(4637), r.e(5170), r.e(2043), r.e(3710), r.e(1479), r.e(548), r.e(6978), r.e(1270), r.e(4287), r.e(7256), r.e(699)]).then(() => () => r(50699))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([r.e(1777), r.e(9167), r.e(6918), r.e(4637), r.e(195), r.e(2909), r.e(323), r.e(3331)]).then(() => () => r(323))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([r.e(2145), r.e(1777), r.e(9167), r.e(2841), r.e(4637), r.e(195), r.e(2909), r.e(519)]).then(() => () => r(40519))), f("@vanilla-extract/recipes", "0.5.7", () => Promise.all([r.e(4823), r.e(7129)]).then(() => () => r(47129))), f("clsx", "2.1.1", () => r.e(4921).then(() => () => r(4921))), f("framer-motion", "12.42.2", () => Promise.all([r.e(6739), r.e(4637), r.e(2174)]).then(() => () => r(36739))), f("gsap", "3.12.5", () => r.e(3529).then(() => () => r(93529))), f("react-dom", "18.3.1", () => Promise.all([r.e(162), r.e(4637)]).then(() => () => r(30162))), f("react-remove-scroll", "2.7.2", () => Promise.all([r.e(3296), r.e(4637)]).then(() => () => r(33296))), f("react", "18.3.1", () => r.e(2581).then(() => () => r(22581))), f("spatial-navigation-polyfill", "1.3.1", () => r.e(4446).then(() => () => r(54446)));
                break;
              case "header":
                f("@foundry/react", "6.4.0", () => Promise.all([r.e(6382), r.e(4823), r.e(8840), r.e(761), r.e(896), r.e(8203), r.e(7489), r.e(4637), r.e(5170), r.e(2043), r.e(3710), r.e(9113), r.e(1479), r.e(548), r.e(6978), r.e(1270), r.e(5812), r.e(4555)]).then(() => () => r(47489)))
            }
            return e[a] = i.length ? Promise.all(i).then(() => e[a] = 1) : 1
          }
        })(), (() => {
          let e;
          r.g.importScripts && (e = r.g.location + "");
          const t = r.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const a = t.getElementsByTagName("script");
            if (a.length) {
              let t = a.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = a[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                a = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = a[1] ? t(a[1]) : [];
              return a[2] && (r.length++, r.push.apply(r, t(a[2]))), a[3] && (r.push([]), r.push.apply(r, t(a[3]))), r
            },
            t = (t, a) => {
              t = e(t), a = e(a);
              for (var r = 0;;) {
                if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                var n = t[r],
                  o = (typeof n)[0];
                if (r >= a.length) return "u" == o;
                var c = a[r],
                  d = (typeof c)[0];
                if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                if ("o" != o && "u" != o && n != c) return n < c;
                r++
              }
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var n = 1, o = 1; o < e.length; o++) n--, r += "u" == (typeof(d = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, d);
                return r
              }
              var c = [];
              for (o = 1; o < e.length; o++) {
                var d = e[o];
                c.push(0 === d ? "not(" + f() + ")" : 1 === d ? "(" + f() + " || " + f() + ")" : 2 === d ? c.pop() + " " + c.pop() : a(d))
              }
              return f();

              function f() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            n = (t, a) => {
              if (0 in t) {
                a = e(a);
                var r = t[0],
                  o = r < 0;
                o && (r = -r - 1);
                for (var c = 0, d = 1, f = !0;; d++, c++) {
                  var i, l, s = d < t.length ? (typeof t[d])[0] : "";
                  if (c >= a.length || "o" == (l = (typeof(i = a[c]))[0])) return !f || ("u" == s ? d > r && !o : "" == s != o);
                  if ("u" == l) {
                    if (!f || "u" != s) return !1
                  } else if (f)
                    if (s == l)
                      if (d <= r) {
                        if (i != t[d]) return !1
                      } else {
                        if (o ? i > t[d] : i < t[d]) return !1;
                        i != t[d] && (f = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (o || d <= r) return !1;
                    f = !1, d--
                  } else {
                    if (d <= r || l < s != o) return !1;
                    f = !1
                  } else "s" != s && "n" != s && (f = !1, d--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (c = 1; c < t.length; c++) {
                var h = t[c];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? n(h, a) : !b())
              }
              return !!b()
            };
          const o = (e, t) => e && r.o(e, t),
            c = e => (e.loaded = 1, e.get()),
            d = e => Object.keys(e).reduce((t, a) => (e[a].eager && (t[a] = e[a]), t), {}),
            f = e => function(t, a, n, o, c) {
              const d = r.I(t);
              return d?.then && !n ? d.then(e.bind(e, t, r.S[t], a, !1, o, c)) : e(t, r.S[t], a, n, o, c)
            },
            i = (e, t, a) => a ? a() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            l = f((e, a, r, n, f) => o(a, r) ? c(((e, a, r) => {
              const n = r ? d(e[a]) : e[a];
              return (a = Object.keys(n).reduce((e, a) => !e || t(e, a) ? a : e, 0)) && n[a]
            })(a, r, n)) : i(e, r, f)),
            s = f((e, r, f, l, s, u) => {
              if (!o(r, f)) return i(e, f, u);
              const b = ((e, a, r) => {
                const n = r ? d(e[a]) : e[a];
                return Object.keys(n).reduce((e, a) => !e || !n[e].loaded && t(e, a) ? a : e, 0)
              })(r, f, l);
              return n(s, b) || (h = ((e, t, r, n) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(n) + ")")(r, f, b, s), "undefined" != typeof console && console.warn && console.warn(h)), c(r[f][b]);
              var h
            }),
            u = {},
            b = {
              4637: () => s("default", "react", !1, [1, 18, 2, 0], () => r.e(2581).then(() => () => r(22581))),
              81270: () => s("default", "clsx", !1, [1, 2, 1, 1], () => r.e(4921).then(() => () => r(4921))),
              42909: () => s("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([r.e(2145), r.e(761), r.e(9758)]).then(() => () => r(77377))),
              1612: () => l("header", "@foundry/react", !1, () => Promise.all([r.e(6382), r.e(4823), r.e(8840), r.e(761), r.e(896), r.e(7489), r.e(5170), r.e(2043), r.e(3710), r.e(9113), r.e(1479), r.e(548), r.e(6978), r.e(5812)]).then(() => () => r(47489))),
              45266: () => s("default", "framer-motion", !1, [1, 12, 38, 0], () => r.e(6739).then(() => () => r(36739))),
              13331: () => s("default", "@rsgweb/utils", !1, [0], () => Promise.all([r.e(2145), r.e(1777), r.e(2841), r.e(195), r.e(519)]).then(() => () => r(40519))),
              37116: () => s("default", "@rsgweb/modules-core-global-navigation", !1, [0], () => Promise.all([r.e(4823), r.e(8840), r.e(2705), r.e(5170), r.e(2043), r.e(3710), r.e(1479), r.e(548), r.e(6978), r.e(3080)]).then(() => () => r(50699))),
              82199: () => s("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([r.e(1777), r.e(6918), r.e(195), r.e(323)]).then(() => () => r(323))),
              91479: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => Promise.all([r.e(5170), r.e(2637)]).then(() => () => r(32637))),
              50548: () => s("default", "@foundry-int/utils", !1, [0], () => Promise.all([r.e(4114), r.e(1270)]).then(() => () => r(34114))),
              50486: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => r.e(4791).then(() => () => r(17172))),
              84017: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => r.e(162).then(() => () => r(30162))),
              82449: () => s("default", "@radix-ui/react-id", !1, [1, 1, 1, 1], () => r.e(1915).then(() => () => r(94296))),
              92939: () => s("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 2, 2], () => r.e(9136).then(() => () => r(66755))),
              64190: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => r.e(8268).then(() => () => r(18268))),
              95745: () => s("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => r.e(6736).then(() => () => r(64355))),
              59113: () => s("default", "react-remove-scroll", !1, [1, 2, 7, 2], () => r.e(3296).then(() => () => r(33296))),
              1249: () => s("default", "@vanilla-extract/recipes", !1, [2, 0, 5, 7], () => r.e(9510).then(() => () => r(47129))),
              6195: () => s("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 15], () => Promise.all([r.e(6382), r.e(9113), r.e(8777)]).then(() => () => r(1158))),
              14046: () => s("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 12], () => r.e(7421).then(() => () => r(69802))),
              36616: () => s("default", "@foundry/icons", !1, [0], () => Promise.all([r.e(1827), r.e(8144)]).then(() => () => r(21827))),
              51858: () => s("default", "@radix-ui/react-popover", !1, [1, 1, 1, 15], () => Promise.all([r.e(6382), r.e(896), r.e(9113), r.e(3767)]).then(() => () => r(56148))),
              50245: () => s("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 14], () => Promise.all([r.e(6382), r.e(1692)]).then(() => () => r(61692))),
              59066: () => s("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => r.e(4446).then(() => () => r(54446))),
              35812: () => s("default", "gsap", !1, [0], () => r.e(3529).then(() => () => r(93529)))
            },
            h = {
              548: [50548],
              1270: [81270],
              1479: [91479],
              2043: [82449, 92939],
              2909: [42909],
              3080: [50245, 59066],
              3331: [13331],
              3680: [37116, 82199],
              3710: [64190, 95745],
              4287: [1612, 45266],
              4637: [4637],
              5170: [50486, 84017],
              5812: [35812],
              6978: [1249, 6195, 14046, 36616, 51858],
              7256: [50245, 59066],
              9113: [59113]
            },
            p = {};
          r.f.consumes = (e, t) => {
            r.o(h, e) && h[e].forEach(e => {
              if (r.o(u, e)) return t.push(u[e]);
              if (!p[e]) {
                const a = t => {
                  u[e] = 0, r.m[e] = a => {
                    delete r.c[e], a.exports = t()
                  }
                };
                p[e] = !0;
                const n = t => {
                  delete u[e], r.m[e] = a => {
                    throw delete r.c[e], t
                  }
                };
                try {
                  const r = b[e]();
                  r.then ? t.push(u[e] = r.then(a).catch(n)) : a(r)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            r.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
                3080: 1,
                3680: 1,
                6128: 1,
                7256: 1,
                7489: 1,
                8144: 1,
                8203: 1,
                8840: 1
              } [t] && a.push(e[t] = (e => new Promise((t, a) => {
                var n = r.miniCssF(e),
                  o = r.p + n;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var n = (c = a[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (n === e || n === t)) return c
                    }
                    var o = document.getElementsByTagName("style");
                    for (r = 0; r < o.length; r++) {
                      var c;
                      if ((n = (c = o[r]).getAttribute("data-href")) === e || n === t) return c
                    }
                  })(n, o)) return t();
                ((e, t, a, n, o) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", r.nc && (c.nonce = r.nc), c.onerror = c.onload = a => {
                    if (c.onerror = c.onload = null, "load" === a.type) n();
                    else {
                      var r = a && a.type,
                        d = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = r, f.request = d, c.parentNode && c.parentNode.removeChild(c), o(f)
                    }
                  }, c.href = t, document.head.appendChild(c)
                })(e, o, 0, t, a)
              }))(t).then(() => {
                e[t] = 0
              }, a => {
                throw delete e[t], a
              }))
            }
          }
        })(), (() => {
          const e = {
            4295: 0
          };
          r.f.j = (t, a) => {
            let n = r.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) a.push(n[2]);
              else if (/^(5(170|48|812)|1270|1479|2043|2909|3331|3710|4287|4637|6978|7256|8144|9113)$/.test(t)) e[t] = 0;
            else {
              const o = new Promise((a, r) => n = e[t] = [a, r]);
              a.push(n[2] = o);
              const c = r.p + r.u(t),
                d = new Error,
                f = a => {
                  if (r.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = a && ("load" === a.type ? "missing" : a.type),
                      r = a && a.target && a.target.src;
                    d.message = "Loading chunk " + t + " failed.\n(" + e + ": " + r + ")", d.name = "ChunkLoadError", d.type = e, d.request = r, n[1](d)
                  }
                };
              r.l(c, f, "chunk-" + t, t)
            }
          };
          const t = (t, a) => {
              let [n, o, c] = a;
              var d, f, i = 0;
              if (n.some(t => 0 !== e[t])) {
                for (d in o) r.o(o, d) && (r.m[d] = o[d]);
                c && c(r)
              }
              for (t && t(a); i < n.length; i++) f = n[i], r.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), r.nc = void 0, r(87732), r(72892)
      })())
    }
  }
});