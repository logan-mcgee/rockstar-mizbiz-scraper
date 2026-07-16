try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fc7c669d-add9-4a78-b68b-d6df222806cf", e._sentryDebugIdIdentifier = "sentry-dbid-fc7c669d-add9-4a78-b68b-d6df222806cf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e = {
          64801(e, t, r) {
            (0, r(26745).w)(1)
          },
          26745(e, t, r) {
            const a = r(86029).y;
            t.w = function(e) {
              if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p = a(r.y.meta.url, e)
            }
          },
          4010(e, t, r) {
            r(64801)
          },
          86029(e, t, r) {
            t.y = function(e, t) {
              var r = document.createElement("a");
              r.href = e;
              for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
              if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
              var c = a.slice(0, n + 1);
              return r.protocol + "//" + r.host + c
            };
            Number.isInteger
          },
          98478(e, t, r) {
            "use strict";
            const a = {
                "./root": () => Promise.all([r.e(4053), r.e(2145), r.e(31), r.e(4540), r.e(5756), r.e(8532), r.e(4637), r.e(4017), r.e(4378), r.e(8792), r.e(1400), r.e(4720)]).then(() => () => r(14720))
              },
              o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), r.R = void 0, t),
              n = (e, t) => {
                if (!r.S) return;
                const a = "default",
                  o = r.S[a];
                if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return r.S[a] = e, r.I(a, t)
              };
            r.d(t, {
              get: () => o,
              init: () => n
            })
          }
        };
        const r = {};

        function a(t) {
          const o = r[t];
          if (void 0 !== o) return o.exports;
          const n = r[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports
        }
        return a.m = e, a.c = r, a.y = t, a.amdO = {}, a.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return a.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          a.t = function(r, o) {
            if (1 & o && (r = this(r)), 8 & o) return r;
            if ("object" == typeof r && r) {
              if (4 & o && r.__esModule) return r;
              if (16 & o && "function" == typeof r.then) return r
            }
            const n = Object.create(null);
            a.r(n);
            const c = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var d = 2 & o && r;
              ("object" == typeof d || "function" == typeof d) && !~t.indexOf(d); d = e(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => r[e]);
            return c.default = () => r, a.d(n, c), n
          }
        })(), a.d = (e, t) => {
          if (Array.isArray(t))
            for (var r = 0; r < t.length;) {
              var o = t[r++],
                n = t[r++];
              a.o(e, o) ? 0 === n && r++ : 0 === n ? Object.defineProperty(e, o, {
                enumerable: !0,
                value: t[r++]
              }) : Object.defineProperty(e, o, {
                enumerable: !0,
                get: n
              })
            } else
              for (var o in t) a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
              })
        }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce((t, r) => (a.f[r](e, t), t), [])), a.u = e => "js/" + {
          31: "9192dfbea46125a7f010568ced38a0b3",
          162: "3bcf5d0e953ce63e96f299f31a61d3c9",
          312: "5d08cdc78d9875c87e17a6a30a29b79d",
          671: "383aff150b3aced2a77c503eb6f7103d",
          761: "5a1e6c3d51c5c4b51503aa666bd43a0b",
          842: "fc9185fcc3ea3dbc29988d5857a6c5d0",
          1039: "80cb86b85333dcf00580b076d34deb3a",
          1205: "875a701397651f7843d7dfa7d3e01199",
          1256: "78d7ab268723bd6e5409efdb17a13bc8",
          1644: "4903827c0c4eb7f98c41c45853be6051",
          1709: "1397f0a6bbc16f0d22e6749dbda17a55",
          1750: "fe5c63be4b209fd3414ecb8407d021a0",
          1869: "ecff2e33c6b00423957a938477912ee5",
          2145: "0baaf407f2fac425eb56ca3e8bd3c037",
          2210: "9a6a0033dead9a41d12fdd699cf2444f",
          2320: "a089b5ba657bbd67712c7ada21c11abf",
          2321: "d086fd00ded2d3d130f6dd6a6e23755f",
          2581: "16c8424f21c1be4c103d4573fa2a827f",
          2841: "90e1ca82eaa02d50b056afb4929e29c6",
          3264: "34db78e0b9596c470d12795d00db0297",
          3368: "96813c8136c9da754840410a78a71daa",
          3462: "24b8c8bfe9d94777ac3d933b918c621f",
          3477: "aa2b7ddc64dfeec4c4ca60110c72dc35",
          3767: "78f8ee7ac651b0865a0ee34864b38c82",
          3998: "2bb91fd2b6d08fd3d2090cd100d3c608",
          4053: "e2ce695536187c78809d2ca8af07c0be",
          4059: "d8beccef2a47ee5898baf4fac0ebc3cf",
          4540: "5ee84f54972ae01e216385aefadcada6",
          4546: "41eeda43f511122a1edf722f6eb40be7",
          4592: "d9991d1d422366a1da8fe7a79686fff4",
          4597: "a994113823c46709ef6b723230a10869",
          4620: "66ca3f3336051865720604c292178009",
          4693: "6cc31f2404c028dd161b1a663eb49356",
          4720: "c0a848c6056546aa23eb63b0497b1f4b",
          5756: "314bc278c37287a660c0079eb2aad340",
          5855: "bf425cc70430ca99e63da47085f81411",
          6543: "9f3e66acd0a4c134bc171158d37da982",
          6596: "3d9dfc8c4fcee4ecd4858b9d5ee6733e",
          6898: "723d96bd550658c13b5204371d27bf3a",
          6918: "6a3e9b1e9a8624755275ce6828a25602",
          6984: "08e11e19337d9661f2ab3297a4bd04e1",
          7212: "a5cc7344da45c2cca2c8db618a81b22f",
          7215: "2625934a26579d24126b6e62215bddde",
          7465: "1d2c83ae5e3e7de8517a3e79e8a7eec4",
          7783: "49afeb4321f1f9724de07f6ce6ceea52",
          7877: "7c1f03145f025d26c9afd15e4de394ec",
          7887: "7957353135e154e0224b768b40dba722",
          8095: "d8b91da31a48022392ccb32845538f50",
          8461: "8eba991bed8d9a32d4ea803ac3807dde",
          8508: "57f7837db26df01b360c4335ba04fd88",
          8532: "4920653fb6498e4f0442521c38186a9c",
          8792: "532bcfbd79c2c1a559c3b72b677db2f2",
          8936: "cd2cb2e2be9717b68897442fdaab9b7d",
          9046: "a09423935143dbdb9ce39e438a7277df",
          9199: "f503af5a607b065d766b4de6406686fc",
          9529: "9b51f87da6df5c91d26ff2ccac4c94a5",
          9538: "34b93e237bb0c129c03f2956d8edc48d",
          9802: "1135b173c386614747aea2e71d2c206b",
          9860: "2cca6ecdb3ae181f9c9a420c7be80515"
        } [e] + ".js", a.miniCssF = e => "css/" + {
          1256: "94ca34ab971f4ad5c492254565924da4",
          1750: "d2745e930c785d241cc9f63c62148327",
          2320: "a912401fa15a6cbfb0f6afc3426f953b",
          2347: "d2745e930c785d241cc9f63c62148327",
          3868: "d2745e930c785d241cc9f63c62148327",
          3998: "70827938d6b0bd3b6e0a5608de99801b",
          4720: "b772c2243e705ad0ad1c3c6240b9eecc",
          7887: "e5247d89bbc7309890763fc570859bbf",
          8508: "d2745e930c785d241cc9f63c62148327",
          8532: "4d4c8e70d63a124371425196b94f9781",
          8792: "887007833800bb12df315f4a1e2fb491"
        } [e] + ".css", a.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-footer:";
          a.l = (r, o, n, c) => {
            if (e[r]) return void e[r].push(o);
            let d, f;
            if (void 0 !== n) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const a = e[s];
                if (a.getAttribute("src") == r || a.getAttribute("data-webpack") == t + n) {
                  d = a;
                  break
                }
              }
            }
            d || (f = !0, d = document.createElement("script"), d.charset = "utf-8", a.nc && d.setAttribute("nonce", a.nc), d.setAttribute("data-webpack", t + n), d.src = r), e[r] = [o];
            const l = (t, a) => {
                d.onerror = d.onload = null, clearTimeout(i);
                const o = e[r];
                if (delete e[r], d.parentNode?.removeChild(d), o?.forEach(e => e(a)), t) return t(a)
              },
              i = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), f && document.head.appendChild(d)
          }
        })(), a.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          a.S = {};
          const e = {},
            t = {};
          a.I = (r, o) => {
            o || (o = []);
            let n = t[r];
            if (n || (n = t[r] = {}), o.indexOf(n) >= 0) return;
            if (o.push(n), e[r]) return e[r];
            a.o(a.S, r) || (a.S[r] = {});
            const c = a.S[r],
              d = "@rockstargames/modules-core-footer",
              f = (e, t, r, a) => {
                const o = c[e] = c[e] || {},
                  n = o[t];
                (!n || !n.loaded && (!a != !n.eager ? a : d > n.from)) && (o[t] = {
                  get: r,
                  from: d,
                  eager: !!a
                })
              },
              s = [];
            switch (r) {
              case "default":
                f("@foundry/icons", "6.3.0", () => Promise.all([a.e(4053), a.e(2321), a.e(4637), a.e(4017), a.e(1750)]).then(() => () => a(52321))), f("@foundry/icons", "6.3.0", () => Promise.all([a.e(4053), a.e(3368), a.e(4637), a.e(4017), a.e(8508)]).then(() => () => a(53368))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([a.e(761), a.e(2145), a.e(31), a.e(4637), a.e(842)]).then(() => () => a(40842))), f("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([a.e(4053), a.e(2145), a.e(671), a.e(312), a.e(31), a.e(4540), a.e(7212), a.e(4637), a.e(4017), a.e(6596), a.e(357), a.e(4378), a.e(3331), a.e(2320), a.e(8792), a.e(5855)]).then(() => () => a(32117))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([a.e(312), a.e(31), a.e(6918), a.e(4637), a.e(6596), a.e(4378), a.e(3331), a.e(4059)]).then(() => () => a(58095))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([a.e(2145), a.e(312), a.e(31), a.e(2841), a.e(4637), a.e(6596), a.e(4378), a.e(9802), a.e(4597)]).then(() => () => a(9802))), f("react-dom", "18.3.1", () => Promise.all([a.e(162), a.e(4637)]).then(() => () => a(30162))), f("react-router-dom", "6.30.4", () => Promise.all([a.e(9860), a.e(4637), a.e(4017)]).then(() => () => a(79860))), f("react", "18.3.1", () => a.e(2581).then(() => () => a(22581)));
                break;
              case "footer":
                f("@foundry/react", "6.3.0", () => Promise.all([a.e(761), a.e(4053), a.e(671), a.e(1256), a.e(4540), a.e(5756), a.e(7887), a.e(4637), a.e(4017), a.e(357)]).then(() => () => a(82983))), f("@foundry/react", "6.3.0", () => Promise.all([a.e(761), a.e(4053), a.e(671), a.e(1256), a.e(4540), a.e(5756), a.e(3998), a.e(8532), a.e(4637), a.e(4017), a.e(357), a.e(1400)]).then(() => () => a(63998)))
            }
            return e[r] = s.length ? Promise.all(s).then(() => e[r] = 1) : 1
          }
        })(), (() => {
          let e;
          a.g.importScripts && (e = a.g.location + "");
          const t = a.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const r = t.getElementsByTagName("script");
            if (r.length) {
              let t = r.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (t, r) => {
              t = e(t), r = e(r);
              for (var a = 0;;) {
                if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                var o = t[a],
                  n = (typeof o)[0];
                if (a >= r.length) return "u" == n;
                var c = r[a],
                  d = (typeof c)[0];
                if (n != d) return "o" == n && "n" == d || "s" == d || "u" == n;
                if ("o" != n && "u" != n && o != c) return o < c;
                a++
              }
            },
            r = e => {
              var t = e[0],
                a = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                a += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var o = 1, n = 1; n < e.length; n++) o--, a += "u" == (typeof(d = e[n]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, d);
                return a
              }
              var c = [];
              for (n = 1; n < e.length; n++) {
                var d = e[n];
                c.push(0 === d ? "not(" + f() + ")" : 1 === d ? "(" + f() + " || " + f() + ")" : 2 === d ? c.pop() + " " + c.pop() : r(d))
              }
              return f();

              function f() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            o = (t, r) => {
              if (0 in t) {
                r = e(r);
                var a = t[0],
                  n = a < 0;
                n && (a = -a - 1);
                for (var c = 0, d = 1, f = !0;; d++, c++) {
                  var s, l, i = d < t.length ? (typeof t[d])[0] : "";
                  if (c >= r.length || "o" == (l = (typeof(s = r[c]))[0])) return !f || ("u" == i ? d > a && !n : "" == i != n);
                  if ("u" == l) {
                    if (!f || "u" != i) return !1
                  } else if (f)
                    if (i == l)
                      if (d <= a) {
                        if (s != t[d]) return !1
                      } else {
                        if (n ? s > t[d] : s < t[d]) return !1;
                        s != t[d] && (f = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (n || d <= a) return !1;
                    f = !1, d--
                  } else {
                    if (d <= a || l < i != n) return !1;
                    f = !1
                  } else "s" != i && "n" != i && (f = !1, d--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (c = 1; c < t.length; c++) {
                var h = t[c];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? o(h, r) : !u())
              }
              return !!u()
            };
          const n = (e, t) => e && a.o(e, t),
            c = e => (e.loaded = 1, e.get()),
            d = e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}),
            f = e => function(t, r, o, n, c) {
              const d = a.I(t);
              return d?.then && !o ? d.then(e.bind(e, t, a.S[t], r, !1, n, c)) : e(t, a.S[t], r, o, n, c)
            },
            s = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            l = f((e, r, a, o, f) => n(r, a) ? c(((e, r, a) => {
              const o = a ? d(e[r]) : e[r];
              return (r = Object.keys(o).reduce((e, r) => !e || t(e, r) ? r : e, 0)) && o[r]
            })(r, a, o)) : s(e, a, f)),
            i = f((e, a, f, l, i, b) => {
              if (!n(a, f)) return s(e, f, b);
              const u = ((e, r, a) => {
                const o = a ? d(e[r]) : e[r];
                return Object.keys(o).reduce((e, r) => !e || !o[e].loaded && t(e, r) ? r : e, 0)
              })(a, f, l);
              return o(i, u) || (h = ((e, t, a, o) => "Unsatisfied version " + a + " from " + (a && e[t][a].from) + " of shared singleton module " + t + " (required " + r(o) + ")")(a, f, u, i), "undefined" != typeof console && console.warn && console.warn(h)), c(a[f][u]);
              var h
            }),
            b = {},
            u = {
              4637: () => i("default", "react", !1, [1, 18, 2, 0], () => a.e(2581).then(() => () => a(22581))),
              84017: () => i("default", "react-dom", !1, [1, 18, 2, 0], () => a.e(162).then(() => () => a(30162))),
              942: () => i("default", "react-router-dom", !1, [1, 6, 30, 4], () => Promise.all([a.e(9860), a.e(4017)]).then(() => () => a(79860))),
              42909: () => i("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([a.e(761), a.e(2145), a.e(8461)]).then(() => () => a(40842))),
              82199: () => i("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([a.e(312), a.e(6918), a.e(6596), a.e(3331), a.e(8095)]).then(() => () => a(58095))),
              11400: () => i("default", "@foundry/icons", !1, [0], () => Promise.all([a.e(3368), a.e(2347)]).then(() => () => a(53368))),
              29768: () => l("footer", "@foundry/react", !1, () => Promise.all([a.e(761), a.e(671), a.e(1256), a.e(3998), a.e(357)]).then(() => () => a(63998))),
              76923: () => i("default", "@rsgweb/modules-core-user-action-menu", !1, [0], () => Promise.all([a.e(671), a.e(312), a.e(7212), a.e(6596), a.e(357), a.e(3331), a.e(2320)]).then(() => () => a(32117))),
              20357: () => i("default", "@foundry/icons", !1, [0], () => Promise.all([a.e(2321), a.e(3868)]).then(() => () => a(52321))),
              13331: () => i("default", "@rsgweb/utils", !1, [0], () => Promise.all([a.e(2145), a.e(2841), a.e(9802)]).then(() => () => a(9802))),
              97083: () => l("footer", "@foundry/react", !1, () => Promise.all([a.e(761), a.e(1256), a.e(5756), a.e(7887)]).then(() => () => a(82983)))
            },
            h = {
              357: [20357],
              1400: [11400],
              2320: [97083],
              3331: [13331],
              4017: [84017],
              4378: [942, 42909],
              4637: [4637],
              4720: [29768, 76923],
              8792: [82199]
            },
            p = {};
          a.f.consumes = (e, t) => {
            a.o(h, e) && h[e].forEach(e => {
              if (a.o(b, e)) return t.push(b[e]);
              if (!p[e]) {
                const r = t => {
                  b[e] = 0, a.m[e] = r => {
                    delete a.c[e], r.exports = t()
                  }
                };
                p[e] = !0;
                const o = t => {
                  delete b[e], a.m[e] = r => {
                    throw delete a.c[e], t
                  }
                };
                try {
                  const a = u[e]();
                  a.then ? t.push(b[e] = a.then(r).catch(o)) : r(a)
                } catch (e) {
                  o(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            a.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                1256: 1,
                1750: 1,
                2320: 1,
                2347: 1,
                3868: 1,
                3998: 1,
                4720: 1,
                7887: 1,
                8508: 1,
                8532: 1,
                8792: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var o = a.miniCssF(e),
                  n = a.p + o;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === t)) return c
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var c;
                      if ((o = (c = n[a]).getAttribute("data-href")) === e || o === t) return c
                    }
                  })(o, n)) return t();
                ((e, t, r, o, n) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", a.nc && (c.nonce = a.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) o();
                    else {
                      var a = r && r.type,
                        d = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = a, f.request = d, c.parentNode && c.parentNode.removeChild(c), n(f)
                    }
                  }, c.href = t, document.head.appendChild(c)
                })(e, n, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          const e = {
            417: 0
          };
          a.f.j = (t, r) => {
            let o = a.o(e, t) ? e[t] : void 0;
            if (0 !== o)
              if (o) r.push(o[2]);
              else if (/^(3(331|57|868)|4(017|378|637)|1400|2347)$/.test(t)) e[t] = 0;
            else {
              const n = new Promise((r, a) => o = e[t] = [r, a]);
              r.push(o[2] = n);
              const c = a.p + a.u(t),
                d = new Error,
                f = r => {
                  if (a.o(e, t) && (o = e[t], 0 !== o && (e[t] = void 0), o)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      a = r && r.target && r.target.src;
                    d.message = "Loading chunk " + t + " failed.\n(" + e + ": " + a + ")", d.name = "ChunkLoadError", d.type = e, d.request = a, o[1](d)
                  }
                };
              a.l(c, f, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [o, n, c] = r;
              var d, f, s = 0;
              if (o.some(t => 0 !== e[t])) {
                for (d in n) a.o(n, d) && (a.m[d] = n[d]);
                c && c(a)
              }
              for (t && t(r); s < o.length; s++) f = o[s], a.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), a.nc = void 0, a(4010), a(98478)
      })())
    }
  }
});