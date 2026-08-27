try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b10226ea-14a1-425b-af09-1a07e7c23f85", e._sentryDebugIdIdentifier = "sentry-dbid-b10226ea-14a1-425b-af09-1a07e7c23f85")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e = {
          5946(e, t, a) {
            (0, a(9e3).w)(1)
          },
          9e3(e, t, a) {
            const r = a(1364).y;
            t.w = function(e) {
              if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p = r(a.y.meta.url, e)
            }
          },
          4769(e, t, a) {
            a(5946)
          },
          1364(e, t, a) {
            t.y = function(e, t) {
              var a = document.createElement("a");
              a.href = e;
              for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, n = 0, o = r.length; n !== t && o >= 0;) "/" === r[--o] && n++;
              if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
              var d = r.slice(0, o + 1);
              return a.protocol + "//" + a.host + d
            };
            Number.isInteger
          },
          8157(e, t, a) {
            "use strict";
            const r = {
                "./bootstrap": () => a.e(842).then(() => () => a(842)),
                "./index": () => Promise.all([a.e(6085), a.e(2977), a.e(6199), a.e(3082), a.e(283), a.e(4017), a.e(9225), a.e(1270), a.e(5812), a.e(2909), a.e(3331), a.e(7347), a.e(8912), a.e(2199), a.e(8618), a.e(7551)]).then(() => () => a(7551)),
                "./tina": () => a.e(6144).then(() => () => a(6144)),
                "./tinaBlockTemplates": () => a.e(6144).then(() => () => a(6144))
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
            const d = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var f = 2 & n && a;
              ("object" == typeof f || "function" == typeof f) && !~t.indexOf(f); f = e(f)) Object.getOwnPropertyNames(f).forEach(e => d[e] = () => a[e]);
            return d.default = () => a, r.d(o, d), o
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
          84: "3e78edada086e102d8adc49d3eda4157",
          162: "4167e2ff24136a0ec427e0cbb12bc09a",
          761: "7118a662d96728e70e543bfaec9e192a",
          842: "9faac9ed40cd17a76df8eba061ee384a",
          890: "794a1abc46052b075c00f7a72a6579ca",
          1125: "6b400ba7915221d0d706d838fb79b26a",
          1292: "bc7e626d4a937dd47c16ad9d7d8090f2",
          1519: "90ef5c21a4129d95b90c85cdc532ec11",
          1605: "ba82d9003d9b80a5c52f41400ed1c332",
          1731: "870f3f523fa7ecad4872b655e77abb05",
          2042: "0ffd4e5439ca8cb7fdec72b1fe175c0a",
          2272: "2c5043b63d5d39ebd39ecdd16a838320",
          2309: "8c3d141e622ac050f51f28973d1bb10b",
          2329: "703bfca4ee83063dbb5533b42714beda",
          2338: "baa4faee6f00d434cb2f17c7f4b57183",
          2346: "9d6ccc5aefe41fec37ccad798baf5b78",
          2581: "edf51280d3794550abf99b0992e7cb71",
          2977: "d4ac162fbd4f30af9d58b857b4ec3639",
          3019: "a8624c1d1179e2a60a3471652fe91be3",
          3195: "9e0fb95e376244795c7fe10ea25eba9d",
          3213: "04357c8acf8955be2ce177541957a1ed",
          3506: "f2bbebe25bf2a5b3aa8b4b58abba93d8",
          3529: "ce70ffb4fa4124527c0dc7a8241a93d0",
          3770: "527d90e6911e1dd794806226369ace27",
          4139: "8b597d81c87e6c4f72c5d2026e1b3949",
          4326: "3add2222750390f54b428bc9727059ee",
          4514: "929a8815923d7fd49f09f47dcecd13c3",
          4921: "53a6fd9c1fd808eefd85035e11b46d5c",
          4971: "79990b35125feabf0e0c3dbf9c669b55",
          5096: "d8aa9bb818bf490aef8664994076786f",
          5505: "9922d27aa92f38202e1e3da38e768fc0",
          5625: "68b49586bc7eb90f91fa602c0df74833",
          5660: "27bd76ea0863418c195d0c0b1a6c07fb",
          5855: "3009096f6cb61998c4b1f927890eef63",
          6038: "f3f64dfdbeb0ec0e576d0c2826557a24",
          6085: "2ccbbdeb988927b82c0cbbdc4b160496",
          6123: "bb621c32ace8e54afac210d9516a007b",
          6144: "5ad7a8ef83ccd1ff1c1436ace0d4a192",
          6199: "1121bb554e5f1018d377967495b27c7d",
          6295: "33fa489c48e163bb26076f432c990991",
          6825: "3bc588d54dc72f44e246037a25977a5c",
          6972: "e6d8305e6f42b7226ea712ab4297e923",
          7133: "16fb2cdafe95e626002a79fcbd704988",
          7212: "d280b3188def0745d7c1f6feae2c8ec0",
          7390: "8c11e6d0f8c7cfb1d1323ed7095c3941",
          7465: "d31c0e3da0eee3f52c5e21a3949a87ba",
          7508: "5d3edd6881c42c5eee796885a61e4eb5",
          7551: "d1b2d79f89dd116d54f20a8950735e24",
          7555: "6bad94db9dbc6b725e044ad700bf270c",
          8006: "0417ccee34012b52164e7075408e56e1",
          8504: "d3b2aed7806e9b29db88158b0a28ae05",
          8509: "6691493d3302409f05e22ea98a8ed754",
          8618: "4a50fd11862da00ce9d53c6279cefc62",
          8910: "80833edabac2b6481fd552418bce9387",
          9206: "97521096513e371436f7f28f7f0a0f49",
          9793: "57fd6b5c92d457ac2ba88e312ebc70fa",
          9860: "13c47607c17305b273bd8a912353c861",
          9912: "a5191105a92981a61695c343bb51a4a6"
        } [e] + ".js", r.miniCssF = e => "css/" + {
          920: "7b2828a98869d3e432c96cb946987be7",
          2338: "c842aad673e92ce03451526a4ed7c91b",
          5129: "7c575cc0a210038808b12a81bf37629b",
          7133: "406328548351cd78c867617d4aea619c",
          7551: "328aa29c86ed733077429df6156cde60",
          8539: "7b2828a98869d3e432c96cb946987be7",
          8618: "83f5c32d10162edfc7729852411cacfb",
          9912: "98d2f7207c07838416399fe63c3fcbc4"
        } [e] + ".css", r.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-videoplayer:";
          r.l = (a, n, o, d) => {
            if (e[a]) return void e[a].push(n);
            let f, c;
            if (void 0 !== o) {
              const e = document.getElementsByTagName("script");
              for (var l = 0; l < e.length; l++) {
                const r = e[l];
                if (r.getAttribute("src") == a || r.getAttribute("data-webpack") == t + o) {
                  f = r;
                  break
                }
              }
            }
            f || (c = !0, f = document.createElement("script"), f.charset = "utf-8", r.nc && f.setAttribute("nonce", r.nc), f.setAttribute("data-webpack", t + o), f.src = a), e[a] = [n];
            const s = (t, r) => {
                f.onerror = f.onload = null, clearTimeout(i);
                const n = e[a];
                if (delete e[a], f.parentNode?.removeChild(f), n?.forEach(e => e(r)), t) return t(r)
              },
              i = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), c && document.head.appendChild(f)
          }
        })(), r.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          r.S = {};
          const e = {},
            t = {};
          r.I = (a, n) => {
            n || (n = []);
            let o = t[a];
            if (o || (o = t[a] = {}), n.indexOf(o) >= 0) return;
            if (n.push(o), e[a]) return e[a];
            r.o(r.S, a) || (r.S[a] = {});
            const d = r.S[a],
              f = "@rockstargames/modules-core-videoplayer",
              c = (e, t, a, r) => {
                const n = d[e] = d[e] || {},
                  o = n[t];
                (!o || !o.loaded && (!r != !o.eager ? r : f > o.from)) && (n[t] = {
                  get: a,
                  from: f,
                  eager: !!r
                })
              },
              l = [];
            return "default" === a && (c("@floating-ui/react", "0.27.20", () => Promise.all([r.e(3213), r.e(6295), r.e(4139), r.e(3082), r.e(4017), r.e(9793)]).then(() => () => r(4139))), c("@foundry-int/utils", "6.6.1", () => Promise.all([r.e(7212), r.e(1270), r.e(8504)]).then(() => () => r(8504))), c("@foundry-int/utils", "6.6.1", () => Promise.all([r.e(7212), r.e(1270), r.e(8006)]).then(() => () => r(8006))), c("@foundry/react", "6.6.1", () => Promise.all([r.e(6085), r.e(2977), r.e(761), r.e(3213), r.e(84), r.e(7133), r.e(2338), r.e(3082), r.e(4017), r.e(1270), r.e(5812), r.e(7347), r.e(8912), r.e(2874), r.e(5129)]).then(() => () => r(2338))), c("@gsap/react", "2.1.2", () => Promise.all([r.e(3082), r.e(5812), r.e(9206)]).then(() => () => r(9206))), c("@rsgweb/locale-tools", "0.0.0", () => Promise.all([r.e(761), r.e(3082), r.e(283), r.e(3506)]).then(() => () => r(3506))), c("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([r.e(2977), r.e(84), r.e(3082), r.e(4017), r.e(1270), r.e(2909), r.e(3331), r.e(8912), r.e(2199), r.e(1292), r.e(920)]).then(() => () => r(1292))), c("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([r.e(1605), r.e(7508), r.e(3082), r.e(283), r.e(9225), r.e(2909), r.e(2272), r.e(3331), r.e(8509)]).then(() => () => r(8509))), c("@rsgweb/utils", "0.0.0-development", () => Promise.all([r.e(1605), r.e(5855), r.e(3082), r.e(283), r.e(9225), r.e(2909), r.e(2272), r.e(2054), r.e(8910)]).then(() => () => r(8910))), c("clsx", "2.1.1", () => r.e(4921).then(() => () => r(4921))), c("focus-trap-react", "10.3.1", () => Promise.all([r.e(6295), r.e(4514), r.e(3082)]).then(() => () => r(4514))), c("graphql", "16.14.2", () => r.e(1519).then(() => () => r(1519))), c("gsap", "3.12.5", () => r.e(3529).then(() => () => r(3529))), c("hammerjs", "2.0.8", () => r.e(6038).then(() => () => r(6038))), c("jotai", "2.20.2", () => Promise.all([r.e(3019), r.e(3082)]).then(() => () => r(3019))), c("lodash-es", "4.18.1", () => r.e(2042).then(() => () => r(2042))), c("react-dom", "18.3.1", () => Promise.all([r.e(162), r.e(3082)]).then(() => () => r(162))), c("react-router-dom", "6.30.4", () => Promise.all([r.e(9860), r.e(3082), r.e(4017)]).then(() => () => r(9860))), c("react", "18.3.1", () => r.e(2581).then(() => () => r(2581))), c("uuid", "9.0.1", () => r.e(3770).then(() => () => r(3770)))), e[a] = l.length ? Promise.all(l).then(() => e[a] = 1) : 1
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
            t = e => {
              var a = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var n = 1, o = 1; o < e.length; o++) n--, r += "u" == (typeof(f = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, f);
                return r
              }
              var d = [];
              for (o = 1; o < e.length; o++) {
                var f = e[o];
                d.push(0 === f ? "not(" + c() + ")" : 1 === f ? "(" + c() + " || " + c() + ")" : 2 === f ? d.pop() + " " + d.pop() : t(f))
              }
              return c();

              function c() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            a = (t, r) => {
              if (0 in t) {
                r = e(r);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var d = 0, f = 1, c = !0;; f++, d++) {
                  var l, s, i = f < t.length ? (typeof t[f])[0] : "";
                  if (d >= r.length || "o" == (s = (typeof(l = r[d]))[0])) return !c || ("u" == i ? f > n && !o : "" == i != o);
                  if ("u" == s) {
                    if (!c || "u" != i) return !1
                  } else if (c)
                    if (i == s)
                      if (f <= n) {
                        if (l != t[f]) return !1
                      } else {
                        if (o ? l > t[f] : l < t[f]) return !1;
                        l != t[f] && (c = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (o || f <= n) return !1;
                    c = !1, f--
                  } else {
                    if (f <= n || s < i != o) return !1;
                    c = !1
                  } else "s" != i && "n" != i && (c = !1, f--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (d = 1; d < t.length; d++) {
                var h = t[d];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, r) : !u())
              }
              return !!u()
            };
          const n = (t, a, r) => {
              const n = r ? (e => Object.keys(e).reduce((t, a) => (e[a].eager && (t[a] = e[a]), t), {}))(t[a]) : t[a];
              return Object.keys(n).reduce((t, a) => !t || !n[t].loaded && ((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var n = t[r],
                    o = (typeof n)[0];
                  if (r >= a.length) return "u" == o;
                  var d = a[r],
                    f = (typeof d)[0];
                  if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
                  if ("o" != o && "u" != o && n != d) return n < d;
                  r++
                }
              })(t, a) ? a : t, 0)
            },
            o = (e, t, a) => a ? a() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            d = (e => function(t, a, n, o, d) {
              const f = r.I(t);
              return f?.then && !n ? f.then(e.bind(e, t, r.S[t], a, !1, o, d)) : e(t, r.S[t], a, n, o, d)
            })((e, d, f, c, l, s) => {
              if (!((e, t) => e && r.o(e, t))(d, f)) return o(e, f, s);
              const i = n(d, f, c);
              return a(l, i) || (u = ((e, a, r, n) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + t(n) + ")")(d, f, i, l), "undefined" != typeof console && console.warn && console.warn(u)), (b = d[f][i]).loaded = 1, b.get();
              var b, u
            }),
            f = {},
            c = {
              3082: () => d("default", "react", !1, [0], () => r.e(2581).then(() => () => r(2581))),
              283: () => d("default", "lodash-es", !1, [0], () => r.e(2042).then(() => () => r(2042))),
              4017: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => r.e(162).then(() => () => r(162))),
              9225: () => d("default", "react-router-dom", !1, [0], () => Promise.all([r.e(9860), r.e(4017)]).then(() => () => r(9860))),
              1270: () => d("default", "clsx", !1, [1, 2, 1, 1], () => r.e(4921).then(() => () => r(4921))),
              3431: () => d("default", "gsap", !1, [0], () => r.e(3529).then(() => () => r(3529))),
              2909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([r.e(761), r.e(283), r.e(1125)]).then(() => () => r(3506))),
              3331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([r.e(1605), r.e(5855), r.e(283), r.e(9225), r.e(2272), r.e(7555)]).then(() => () => r(8910))),
              7347: () => d("default", "@gsap/react", !1, [0], () => r.e(6825).then(() => () => r(9206))),
              8912: () => d("default", "@foundry-int/utils", !1, [0], () => Promise.all([r.e(7212), r.e(5625)]).then(() => () => r(8006))),
              2199: () => d("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([r.e(1605), r.e(7508), r.e(283), r.e(9225), r.e(2272), r.e(890)]).then(() => () => r(8509))),
              1038: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], () => Promise.all([r.e(6295), r.e(4514)]).then(() => () => r(4514))),
              2341: () => d("default", "hammerjs", !1, [1, 2, 0, 8], () => r.e(6038).then(() => () => r(6038))),
              3816: () => d("default", "@floating-ui/react", !1, [2, 0, 27, 19], () => Promise.all([r.e(3213), r.e(6295), r.e(4139)]).then(() => () => r(4139))),
              4815: () => d("default", "uuid", !1, [1, 9, 0, 1], () => r.e(3770).then(() => () => r(3770))),
              7613: () => d("default", "@rsgweb/modules-core-agegate", !1, [0], () => Promise.all([r.e(84), r.e(1292), r.e(8539)]).then(() => () => r(1292))),
              9617: () => d("default", "jotai", !1, [0], () => r.e(3019).then(() => () => r(3019))),
              2874: () => d("default", "@foundry-int/utils", !1, [0], () => Promise.all([r.e(7212), r.e(6123)]).then(() => () => r(8504))),
              2552: () => d("default", "@foundry/react", !1, [0], () => Promise.all([r.e(6085), r.e(761), r.e(3213), r.e(7133), r.e(2338), r.e(5812), r.e(7347), r.e(2874)]).then(() => () => r(2338))),
              2054: () => d("default", "graphql", !1, [0], () => r.e(1519).then(() => () => r(1519)))
            },
            l = {
              283: [283],
              1270: [1270],
              1292: [2552],
              2054: [2054],
              2199: [2199],
              2874: [2874],
              2909: [2909],
              3082: [3082],
              3331: [3331],
              4017: [4017],
              5812: [3431],
              7347: [7347],
              7555: [2054],
              8618: [1038, 2341, 3816, 4815, 7613, 9617],
              8912: [8912],
              9225: [9225]
            },
            s = {};
          r.f.consumes = (e, t) => {
            r.o(l, e) && l[e].forEach(e => {
              if (r.o(f, e)) return t.push(f[e]);
              if (!s[e]) {
                const a = t => {
                  f[e] = 0, r.m[e] = a => {
                    delete r.c[e], a.exports = t()
                  }
                };
                s[e] = !0;
                const n = t => {
                  delete f[e], r.m[e] = a => {
                    throw delete r.c[e], t
                  }
                };
                try {
                  const r = c[e]();
                  r.then ? t.push(f[e] = r.then(a).catch(n)) : a(r)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            r.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
                920: 1,
                2338: 1,
                5129: 1,
                7133: 1,
                7551: 1,
                8539: 1,
                8618: 1,
                9912: 1
              } [t] && a.push(e[t] = (e => new Promise((t, a) => {
                var n = r.miniCssF(e),
                  o = r.p + n;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var n = (d = a[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (n === e || n === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (r = 0; r < o.length; r++) {
                      var d;
                      if ((n = (d = o[r]).getAttribute("data-href")) === e || n === t) return d
                    }
                  })(n, o)) return t();
                ((e, t, a, n, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", r.nc && (d.nonce = r.nc), d.onerror = d.onload = a => {
                    if (d.onerror = d.onload = null, "load" === a.type) n();
                    else {
                      var r = a && a.type,
                        f = a && a.target && a.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + f + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = r, c.request = f, d.parentNode && d.parentNode.removeChild(d), o(c)
                    }
                  }, d.href = t, document.head.appendChild(d)
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
            7614: 0
          };
          r.f.j = (t, a) => {
            let n = r.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) a.push(n[2]);
              else if (/^(2(054|199|83|874|909)|92(0|25)|(308|581|891)2|1270|3331|4017|5129|7347|8539)$/.test(t)) e[t] = 0;
            else {
              const o = new Promise((a, r) => n = e[t] = [a, r]);
              a.push(n[2] = o);
              const d = r.p + r.u(t),
                f = new Error,
                c = a => {
                  if (r.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = a && ("load" === a.type ? "missing" : a.type),
                      r = a && a.target && a.target.src;
                    f.message = "Loading chunk " + t + " failed.\n(" + e + ": " + r + ")", f.name = "ChunkLoadError", f.type = e, f.request = r, f.event = a, n[1](f)
                  }
                };
              r.l(d, c, "chunk-" + t, t)
            }
          };
          const t = (t, a) => {
              let [n, o, d] = a;
              var f, c, l = 0;
              if (n.some(t => 0 !== e[t])) {
                for (f in o) r.o(o, f) && (r.m[f] = o[f]);
                d && d(r)
              }
              for (t && t(a); l < n.length; l++) c = n[l], r.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), r.nc = void 0, r(4769), r(8157)
      })())
    }
  }
});