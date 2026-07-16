try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "903c249a-512d-40f1-be53-9d3b9ca0dfb8", e._sentryDebugIdIdentifier = "sentry-dbid-903c249a-512d-40f1-be53-9d3b9ca0dfb8")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], function(e, t) {
  var a = {},
    r = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      a.default = e.default || e, Object.keys(e).forEach(function(t) {
        a[t] = e[t]
      })
    }, function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(t) {
        r[t] = e[t]
      })
    }],
    execute: function() {
      e((() => {
        var e = {
          64801(e, t, a) {
            (0, a(26745).w)(1)
          },
          26745(e, t, a) {
            const r = a(86029).y;
            t.w = function(e) {
              if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p = r(a.y.meta.url, e)
            }
          },
          4010(e, t, a) {
            a(64801)
          },
          86029(e, t, a) {
            t.y = function(e, t) {
              var a = document.createElement("a");
              a.href = e;
              for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, c = 0, n = r.length; c !== t && n >= 0;) "/" === r[--n] && c++;
              if (c !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + c + ") in the URL path " + e);
              var o = r.slice(0, n + 1);
              return a.protocol + "//" + a.host + o
            };
            Number.isInteger
          },
          57761(e, t, a) {
            "use strict";
            const r = {
                "./index": () => Promise.all([a.e(883), a.e(5756), a.e(516), a.e(2321), a.e(4940), a.e(3712), a.e(5519), a.e(6924), a.e(270), a.e(6982), a.e(5980), a.e(3951), a.e(3082), a.e(4017), a.e(283), a.e(3331), a.e(2909), a.e(9225), a.e(1270), a.e(7301), a.e(2199), a.e(8769), a.e(2285), a.e(4190), a.e(3631), a.e(6044)]).then(() => () => a(52860)),
                "./tina": () => a.e(5046).then(() => () => a(95046))
              },
              c = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), a.R = void 0, t),
              n = (e, t) => {
                if (!a.S) return;
                const r = "default",
                  c = a.S[r];
                if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return a.S[r] = e, a.I(r, t)
              };
            a.d(t, {
              get: () => c,
              init: () => n
            })
          },
          29441(e) {
            "use strict";
            e.exports = a
          },
          25136(e) {
            "use strict";
            e.exports = r
          }
        };
        const c = {};

        function n(t) {
          const a = c[t];
          if (void 0 !== a) return a.exports;
          const r = c[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
        }
        return n.m = e, n.c = c, n.y = t, n.amdO = {}, n.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return n.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          n.t = function(a, r) {
            if (1 & r && (a = this(a)), 8 & r) return a;
            if ("object" == typeof a && a) {
              if (4 & r && a.__esModule) return a;
              if (16 & r && "function" == typeof a.then) return a
            }
            const c = Object.create(null);
            n.r(c);
            const o = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var d = 2 & r && a;
              ("object" == typeof d || "function" == typeof d) && !~t.indexOf(d); d = e(d)) Object.getOwnPropertyNames(d).forEach(e => o[e] = () => a[e]);
            return o.default = () => a, n.d(c, o), c
          }
        })(), n.d = (e, t) => {
          if (Array.isArray(t))
            for (var a = 0; a < t.length;) {
              var r = t[a++],
                c = t[a++];
              n.o(e, r) ? 0 === c && a++ : 0 === c ? Object.defineProperty(e, r, {
                enumerable: !0,
                value: t[a++]
              }) : Object.defineProperty(e, r, {
                enumerable: !0,
                get: c
              })
            } else
              for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
              })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce((t, a) => (n.f[a](e, t), t), [])), n.u = e => "js/" + {
          6: "6efed2374c66ed987bf850705210680b",
          62: "da7638b1f2ab6f314cc402fdbf7de053",
          162: "3d23d18dd80bcc94e0b083e31d7d4bed",
          270: "b3814cfb3dbb48a7fd7668ae729a989f",
          325: "aaba0e0dcf536d07d40c098b4a400284",
          354: "9d88dd092f5b6659117ecd7a03ed3121",
          476: "b74b1253b8ca0cce9bd4aad591e6300f",
          516: "557b767c0288395eb66d4dfbc9217a05",
          739: "27fc7106b7ae9b44706fbcf411384422",
          761: "2648e4ff4ed1b23a2c0b9d1c364f6a7d",
          774: "30bb6057369bafa1877df9c93090b84b",
          883: "eac762d94e586ca385733f0e058364f9",
          1039: "203b8428c50fcce9de77b3cc90349fd5",
          1205: "31dfae2c7ab5fe5b5f228bfd7bf5eab2",
          1644: "03b1a5f69a801a8df6151c84c9c8b2f0",
          1709: "d2b6d42b73e7008de10d7f4322255dfc",
          1857: "f5c308b768a88480e1e411fc6831d8a2",
          1869: "09b9f2b67e87851422bd72d5f690c4b1",
          2210: "8a7c8b058ed96922ed10e5f683f11483",
          2321: "0ae9355ca22cce284b53fe5b5ca112dc",
          2381: "b1c2186ae204ff78fda7c7f46c158a06",
          2454: "e23d2e9a190c7253eb49ffa04fb259d2",
          2581: "6f6093caaa5bda0165d52e6cee5e7986",
          2983: "b47b21356e41faa22feef67c72628564",
          3264: "218638caa89e32b1ce75922a38ba8687",
          3431: "8dea16ac41ddf88ad018d54638a0d71a",
          3462: "d7bc67687f87b5f4f863fdb27dbf4ab5",
          3477: "6aa38d7b8052ff204914e5428f926ae3",
          3565: "116f4365c88229f9d40473c83d8afe3b",
          3712: "13c5025b52a60df6508197408457420e",
          3767: "3ee70e115aa23622cc513d8abfabc6b9",
          3939: "c96b6e0c292ad39741fba38ed734b950",
          3951: "8d46de7530ca48ecee70d39bd98ec49f",
          4016: "37027535ab3c88ec92ad34530e0e03b1",
          4190: "683e48a0662330bd52022a07e872ed4e",
          4281: "b3803b2749ce19d3e9bf7838a887de7e",
          4309: "8eddbfdee4bfc25c6cb1c4b2bfe9b6b9",
          4546: "09846d2181914f6b2f1fa146e972f601",
          4592: "0f99be28d2b182aa2a098dacd94bb1b1",
          4620: "5d24f924dcd91d0302258f51b6968500",
          4693: "ba94f921b4963d24c26adbf541591b3d",
          4865: "d31501fc5ec66095bfbb829c0cefb6bd",
          4921: "05246bf9b9ae84359e9583357a0fbe55",
          4940: "2c5cceb7c06faec1efca1f4ca7d4da92",
          5046: "0eb2b5b434ae11138a4d17cd67975be6",
          5133: "a28bf3f5b5e9c1c8d42a3d96eeb19d58",
          5505: "d9b878169cf05073e98d6cc4da38ab3f",
          5519: "b47965f616d7cd6ccf1e60ef03702717",
          5756: "68db086cfdd466b102a4233b85e24df8",
          5980: "1db724fe118804feccca53517e806989",
          6044: "2c276147fd1fe33ede990a6637a386bd",
          6277: "853b0bf1f708c0a4ac498c2b73d93d4d",
          6320: "3df3eab871bea9c17b9676a360e14a67",
          6543: "e135c9da5d38b6a2e4b715d3dacf70d0",
          6596: "71b3825dcc2dca15e6a25321abd4a8a9",
          6635: "17a2eb18a9284731246421a7fa37992c",
          6715: "7838c238ec09baec6ab12549a40b042c",
          6898: "fa829b8a6e7f2724a94d43019012174b",
          6918: "ea7a4df8b99f24e6b5b0505f2ae10ade",
          6924: "8905567c16482954fd267668f7c4e398",
          6932: "7855afd002f19274ed5fcc0eb73d7308",
          6935: "fccb013a5d91d9788eda61b766b639de",
          6982: "fc345252cc455ab70f93dc8f912076c7",
          6984: "e79c68ebc53de24b30d67da0c7852ab5",
          7215: "89c2d4d6efbb55d6fc956f2d9e7a774d",
          7465: "4613bd9e9e230e24bbbd8a59f8d045e0",
          7514: "11cfa034e1fc87e99b7ed059ccb2d040",
          7783: "4f4d5dc4cc097194a12022b58f341980",
          7877: "fef83186f7719c9f70ad42b354a7dc92",
          8095: "a02bfeaed891eb857d678442daf919e9",
          8169: "7f2b8a8b050e2a2cecd26befa82f2d48",
          8393: "c4de135edb4412fbd516e1154ea13815",
          8726: "6fa482e36ad9bbafc1af56e5ebea3b7f",
          8769: "381ff33baea63a005d7e5eb731772f0f",
          8936: "b4f43bd797630c0e8fe6ac512e2b97fe",
          9046: "4ea6f15f22a754e8ec3b6e0227eba011",
          9096: "3c708c358cd018c476669726af4017fe",
          9199: "061cb5a73a27a6b572cbee7515691cd9",
          9529: "589da5e5b39ae4df4f4fe02033d790cd",
          9538: "c2a9f2006562a53676c719d004066590",
          9860: "b88af3b627d1f543e5262bb3874788ce"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          270: "1509e6ded142f7912c73b4ffd9412a78",
          354: "7c575cc0a210038808b12a81bf37629b",
          1857: "c5961ff45ab2f26ffb7e50308f79c617",
          2983: "dead3008e80f5a63059891a647f61716",
          3631: "4790c1b9de793e76e3beb46ef6e70fdb",
          3951: "ba1b9439fa8ad4315b612d938fd84075",
          4190: "90181f5f503830695ace14869df4afa3",
          4281: "fc87901d26c616fb6163d1992b094cea",
          4865: "41c7d6822d60ff731131faba38922938",
          5661: "101537b924f4411033bd9d2d8536a01a",
          6044: "8736a7f62b0e61d1319b72a921f1148d",
          6064: "88a9b4d18fecd8b492423ffebbf2bb03",
          6635: "f39de8b0c76a56f0ce42b624f3f0a652",
          6935: "523b3cc66cb4b90364d07dbc1b75e73b",
          7609: "384cddac2173849afd90c4a73e287f5e",
          7659: "bfe4e4109fd9c58c236be27a4498cde6",
          8169: "384cddac2173849afd90c4a73e287f5e",
          8726: "ef81dd31a2acf40a379ebf06814ce854",
          8769: "915d373fd494468e9b0648f0fc1b6314"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-newswire-article:";
          n.l = (a, r, c, o) => {
            if (e[a]) return void e[a].push(r);
            let d, f;
            if (void 0 !== c) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const r = e[s];
                if (r.getAttribute("src") == a || r.getAttribute("data-webpack") == t + c) {
                  d = r;
                  break
                }
              }
            }
            d || (f = !0, d = document.createElement("script"), d.charset = "utf-8", n.nc && d.setAttribute("nonce", n.nc), d.setAttribute("data-webpack", t + c), d.src = a), e[a] = [r];
            const l = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(i);
                const c = e[a];
                if (delete e[a], d.parentNode?.removeChild(d), c?.forEach(e => e(r)), t) return t(r)
              },
              i = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), f && document.head.appendChild(d)
          }
        })(), n.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              3631: [31879],
              6044: [64064]
            },
            t = {
              31879: ["default", "./index", 25136],
              64064: ["default", "./index", 29441]
            };
          n.f.remotes = (a, r) => {
            n.o(e, a) && e[a].forEach(e => {
              let a = n.R;
              a || (a = []);
              const c = t[e];
              if (a.indexOf(c) >= 0) return;
              if (a.push(c), c.p) return r.push(c.p);
              const o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), n.m[e] = () => {
                    throw t
                  }, c.p = 0
                },
                d = (e, t, a, n, d, f) => {
                  try {
                    const s = e(t, a);
                    if (!s?.then) return d(s, n, f); {
                      const e = s.then(e => d(e, n), o);
                      if (!f) return e;
                      r.push(c.p = e)
                    }
                  } catch (e) {
                    o(e)
                  }
                },
                f = (e, t, r) => d(t.get, c[1], a, 0, s, r),
                s = t => {
                  c.p = 1, n.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(n, c[2], 0, 0, (e, t, a) => e ? d(n.I, c[0], 0, e, f, a) : o(), 1)
            })
          }
        })(), (() => {
          n.S = {};
          const e = {},
            t = {};
          n.I = (a, r) => {
            r || (r = []);
            let c = t[a];
            if (c || (c = t[a] = {}), r.indexOf(c) >= 0) return;
            if (r.push(c), e[a]) return e[a];
            n.o(n.S, a) || (n.S[a] = {});
            const o = n.S[a],
              d = "@rockstargames/modules-core-newswire-article",
              f = (e, t, a, r) => {
                const c = o[e] = o[e] || {},
                  n = c[t];
                (!n || !n.loaded && (!r != !n.eager ? r : d > n.from)) && (c[t] = {
                  get: a,
                  from: d,
                  eager: !!r
                })
              },
              s = e => {
                const t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  const c = n(e);
                  if (!c) return;
                  const o = e => e && e.init && e.init(n.S[a], r);
                  if (c.then) return l.push(c.then(o, t));
                  const d = o(c);
                  if (d?.then) return l.push(d.catch(t))
                } catch (e) {
                  t(e)
                }
              },
              l = [];
            return "default" === a && (f("@foundry/react", "6.3.0", () => Promise.all([n.e(883), n.e(761), n.e(5756), n.e(516), n.e(2321), n.e(4281), n.e(3712), n.e(2983), n.e(3082), n.e(4017), n.e(1270), n.e(354)]).then(() => () => n(82983))), f("@foundry/react", "6.3.0", () => Promise.all([n.e(883), n.e(761), n.e(5756), n.e(516), n.e(2321), n.e(4281), n.e(3712), n.e(5519), n.e(270), n.e(6935), n.e(3082), n.e(4017), n.e(1270), n.e(3431)]).then(() => () => n(26935))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([n.e(761), n.e(3082), n.e(283), n.e(5133)]).then(() => () => n(40842))), f("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([n.e(883), n.e(5756), n.e(516), n.e(2321), n.e(4940), n.e(5519), n.e(3082), n.e(4017), n.e(3331), n.e(1270), n.e(7301), n.e(8769), n.e(5661), n.e(1857)]).then(() => () => n(76277))), f("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([n.e(883), n.e(516), n.e(2321), n.e(4940), n.e(6924), n.e(6982), n.e(3082), n.e(4017), n.e(283), n.e(3331), n.e(2909), n.e(9225), n.e(1270), n.e(7301), n.e(2199), n.e(2285), n.e(6), n.e(4190), n.e(6635)]).then(() => () => n(46502))), f("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([n.e(883), n.e(5756), n.e(516), n.e(4940), n.e(5519), n.e(3082), n.e(4017), n.e(3331), n.e(1270), n.e(7301), n.e(8769), n.e(3631), n.e(4865)]).then(() => () => n(78726))), f("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([n.e(4940), n.e(6924), n.e(5980), n.e(3082), n.e(2909), n.e(7301), n.e(2199), n.e(2285), n.e(6064), n.e(8393)]).then(() => () => n(58393))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([n.e(2381), n.e(6918), n.e(3082), n.e(283), n.e(3331), n.e(2909), n.e(9225), n.e(6596), n.e(8095)]).then(() => () => n(58095))), f("@rsgweb/tina", "0.0.0", () => Promise.all([n.e(883), n.e(4309), n.e(325), n.e(3082), n.e(4017), n.e(283), n.e(3331), n.e(2909), n.e(2199), n.e(2454), n.e(739), n.e(8169)]).then(() => () => n(11215))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([n.e(2381), n.e(3565), n.e(3082), n.e(283), n.e(2909), n.e(9225), n.e(6596), n.e(2454), n.e(6715)]).then(() => () => n(19096))), f("clsx", "2.1.1", () => n.e(4921).then(() => () => n(4921))), f("dompurify", "2.5.9", () => n.e(62).then(() => () => n(50062))), f("lodash-es", "4.18.1", () => Promise.all([n.e(4309), n.e(5505)]).then(() => () => n(65505))), f("react-dom", "18.3.1", () => Promise.all([n.e(162), n.e(3082)]).then(() => () => n(30162))), f("react-intersection-observer", "9.16.0", () => Promise.all([n.e(3082), n.e(6320)]).then(() => () => n(26320))), f("react-jsx-parser", "2.4.1", () => Promise.all([n.e(6932), n.e(3082)]).then(() => () => n(76932))), f("react-router-dom", "6.30.4", () => Promise.all([n.e(9860), n.e(3082), n.e(4017)]).then(() => () => n(79860))), f("react", "18.3.1", () => n.e(2581).then(() => () => n(22581))), f("text-balancer", "1.0.5", () => n.e(4016).then(() => () => n(34016))), s(25136), s(29441)), l.length ? e[a] = Promise.all(l).then(() => e[a] = 1) : e[a] = 1
          }
        })(), (() => {
          let e;
          n.g.importScripts && (e = n.g.location + "");
          const t = n.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const a = t.getElementsByTagName("script");
            if (a.length) {
              let t = a.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = a[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
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
                for (var c = 1, n = 1; n < e.length; n++) c--, r += "u" == (typeof(d = e[n]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, d);
                return r
              }
              var o = [];
              for (n = 1; n < e.length; n++) {
                var d = e[n];
                o.push(0 === d ? "not(" + f() + ")" : 1 === d ? "(" + f() + " || " + f() + ")" : 2 === d ? o.pop() + " " + o.pop() : t(d))
              }
              return f();

              function f() {
                return o.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            a = (t, r) => {
              if (0 in t) {
                r = e(r);
                var c = t[0],
                  n = c < 0;
                n && (c = -c - 1);
                for (var o = 0, d = 1, f = !0;; d++, o++) {
                  var s, l, i = d < t.length ? (typeof t[d])[0] : "";
                  if (o >= r.length || "o" == (l = (typeof(s = r[o]))[0])) return !f || ("u" == i ? d > c && !n : "" == i != n);
                  if ("u" == l) {
                    if (!f || "u" != i) return !1
                  } else if (f)
                    if (i == l)
                      if (d <= c) {
                        if (s != t[d]) return !1
                      } else {
                        if (n ? s > t[d] : s < t[d]) return !1;
                        s != t[d] && (f = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (n || d <= c) return !1;
                    f = !1, d--
                  } else {
                    if (d <= c || l < i != n) return !1;
                    f = !1
                  } else "s" != i && "n" != i && (f = !1, d--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (o = 1; o < t.length; o++) {
                var h = t[o];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, r) : !u())
              }
              return !!u()
            };
          const r = (t, a, r) => {
              const c = r ? (e => Object.keys(e).reduce((t, a) => (e[a].eager && (t[a] = e[a]), t), {}))(t[a]) : t[a];
              return Object.keys(c).reduce((t, a) => !t || !c[t].loaded && ((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var c = t[r],
                    n = (typeof c)[0];
                  if (r >= a.length) return "u" == n;
                  var o = a[r],
                    d = (typeof o)[0];
                  if (n != d) return "o" == n && "n" == d || "s" == d || "u" == n;
                  if ("o" != n && "u" != n && c != o) return c < o;
                  r++
                }
              })(t, a) ? a : t, 0)
            },
            c = (e, t, a) => a ? a() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            o = (e => function(t, a, r, c, o) {
              const d = n.I(t);
              return d?.then && !r ? d.then(e.bind(e, t, n.S[t], a, !1, c, o)) : e(t, n.S[t], a, r, c, o)
            })((e, o, d, f, s, l) => {
              if (!((e, t) => e && n.o(e, t))(o, d)) return c(e, d, l);
              const i = r(o, d, f);
              return a(s, i) || (u = ((e, a, r, c) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + t(c) + ")")(o, d, i, s), "undefined" != typeof console && console.warn && console.warn(u)), (b = o[d][i]).loaded = 1, b.get();
              var b, u
            }),
            d = {},
            f = {
              93082: () => o("default", "react", !1, [0], () => n.e(2581).then(() => () => n(22581))),
              84017: () => o("default", "react-dom", !1, [1, 18, 2, 0], () => n.e(162).then(() => () => n(30162))),
              40283: () => o("default", "lodash-es", !1, [0], () => Promise.all([n.e(4309), n.e(5505)]).then(() => () => n(65505))),
              13331: () => o("default", "@rsgweb/utils", !1, [0], () => Promise.all([n.e(2381), n.e(3565), n.e(283), n.e(2909), n.e(9225), n.e(6596), n.e(2454), n.e(9096)]).then(() => () => n(19096))),
              42909: () => o("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([n.e(761), n.e(283), n.e(7514)]).then(() => () => n(40842))),
              99225: () => o("default", "react-router-dom", !1, [0], () => Promise.all([n.e(9860), n.e(4017)]).then(() => () => n(79860))),
              81270: () => o("default", "clsx", !1, [1, 2, 1, 1], () => n.e(4921).then(() => () => n(4921))),
              17301: () => o("default", "@rsgweb/tina", !1, [0], () => Promise.all([n.e(883), n.e(4309), n.e(325), n.e(4017), n.e(283), n.e(3331), n.e(2909), n.e(2199), n.e(2454), n.e(739), n.e(7609)]).then(() => () => n(11215))),
              82199: () => o("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([n.e(2381), n.e(6918), n.e(283), n.e(3331), n.e(9225), n.e(6596), n.e(476)]).then(() => () => n(58095))),
              42285: () => o("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => n.e(3939).then(() => () => n(26320))),
              83841: () => o("default", "@foundry/react", !1, [0], () => Promise.all([n.e(761), n.e(5756), n.e(4281), n.e(3712), n.e(2983)]).then(() => () => n(82983))),
              91681: () => o("default", "dompurify", !1, [1, 2, 5, 9], () => n.e(62).then(() => () => n(50062))),
              9360: () => o("default", "@foundry/react", !1, [0], () => Promise.all([n.e(761), n.e(4281), n.e(6935)]).then(() => () => n(26935))),
              10475: () => o("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([n.e(6064), n.e(774)]).then(() => () => n(58393))),
              35643: () => o("default", "@rsgweb/modules-core-carousel", !1, [0], () => Promise.all([n.e(5661), n.e(6277)]).then(() => () => n(76277))),
              59139: () => o("default", "@rsgweb/modules-core-engagement", !1, [0], () => Promise.all([n.e(6), n.e(7659)]).then(() => () => n(46502))),
              72527: () => o("default", "@rsgweb/modules-core-group-of-items", !1, [0], () => n.e(8726).then(() => () => n(78726))),
              87486: () => o("default", "text-balancer", !1, [1, 1, 0, 5], () => n.e(4016).then(() => () => n(34016))),
              92910: () => o("default", "react-jsx-parser", !1, [1, 2, 4, 1], () => n.e(6932).then(() => () => n(76932)))
            },
            s = {
              283: [40283],
              1270: [81270],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              3631: [91681],
              4017: [84017],
              4190: [83841],
              6044: [9360, 10475, 35643, 59139, 72527, 87486, 92910],
              7301: [17301],
              9225: [99225]
            },
            l = {};
          n.f.consumes = (e, t) => {
            n.o(s, e) && s[e].forEach(e => {
              if (n.o(d, e)) return t.push(d[e]);
              if (!l[e]) {
                const a = t => {
                  d[e] = 0, n.m[e] = a => {
                    delete n.c[e], a.exports = t()
                  }
                };
                l[e] = !0;
                const r = t => {
                  delete d[e], n.m[e] = a => {
                    throw delete n.c[e], t
                  }
                };
                try {
                  const c = f[e]();
                  c.then ? t.push(d[e] = c.then(a).catch(r)) : a(c)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            n.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
                270: 1,
                354: 1,
                1857: 1,
                2983: 1,
                3631: 1,
                3951: 1,
                4190: 1,
                4281: 1,
                4865: 1,
                5661: 1,
                6044: 1,
                6064: 1,
                6635: 1,
                6935: 1,
                7609: 1,
                7659: 1,
                8169: 1,
                8726: 1,
                8769: 1
              } [t] && a.push(e[t] = (e => new Promise((t, a) => {
                var r = n.miniCssF(e),
                  c = n.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var c = (o = a[r]).getAttribute("data-href") || o.getAttribute("href");
                      if ("stylesheet" === o.rel && (c === e || c === t)) return o
                    }
                    var n = document.getElementsByTagName("style");
                    for (r = 0; r < n.length; r++) {
                      var o;
                      if ((c = (o = n[r]).getAttribute("data-href")) === e || c === t) return o
                    }
                  })(r, c)) return t();
                ((e, t, a, r, c) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", n.nc && (o.nonce = n.nc), o.onerror = o.onload = a => {
                    if (o.onerror = o.onload = null, "load" === a.type) r();
                    else {
                      var n = a && a.type,
                        d = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = n, f.request = d, o.parentNode && o.parentNode.removeChild(o), c(f)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, c, 0, t, a)
              }))(t).then(() => {
                e[t] = 0
              }, a => {
                throw delete e[t], a
              }))
            }
          }
        })(), (() => {
          const e = {
            6947: 0
          };
          n.f.j = (t, a) => {
            let r = n.o(e, t) ? e[t] : void 0;
            if (0 !== r)
              if (r) a.push(r[2]);
              else if (/^(2(199|285|83|909)|3([36]31|082)|7(301|609|659)|1270|4017|5661|6064|9225)$/.test(t)) e[t] = 0;
            else {
              const c = new Promise((a, c) => r = e[t] = [a, c]);
              a.push(r[2] = c);
              const o = n.p + n.u(t),
                d = new Error,
                f = a => {
                  if (n.o(e, t) && (r = e[t], 0 !== r && (e[t] = void 0), r)) {
                    const e = a && ("load" === a.type ? "missing" : a.type),
                      c = a && a.target && a.target.src;
                    d.message = "Loading chunk " + t + " failed.\n(" + e + ": " + c + ")", d.name = "ChunkLoadError", d.type = e, d.request = c, r[1](d)
                  }
                };
              n.l(o, f, "chunk-" + t, t)
            }
          };
          const t = (t, a) => {
              let [r, c, o] = a;
              var d, f, s = 0;
              if (r.some(t => 0 !== e[t])) {
                for (d in c) n.o(c, d) && (n.m[d] = c[d]);
                o && o(n)
              }
              for (t && t(a); s < r.length; s++) f = r[s], n.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), n.nc = void 0, n(4010), n(57761)
      })())
    }
  }
});