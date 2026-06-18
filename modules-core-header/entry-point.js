try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f8094a3e-00c0-4a9d-961d-5f0bd70020c7", e._sentryDebugIdIdentifier = "sentry-dbid-f8094a3e-00c0-4a9d-961d-5f0bd70020c7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, c, f, o = {
            20154(e, a, r) {
              (0, r(89160).w)(1)
            },
            89160(e, a, r) {
              const t = r(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            35649(e, a, r) {
              r(20154)
            },
            51908(e, a, r) {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, c = t.length; d !== a && c >= 0;) "/" === t[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
              };
              Number.isInteger
            },
            72892(e, a, r) {
              "use strict";
              var t = {
                  "./core": () => Promise.all([r.e(2145), r.e(3400), r.e(31), r.e(4086), r.e(4637), r.e(1270), r.e(2909), r.e(3517), r.e(3331), r.e(6629)]).then(() => () => r(80917))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => c
              })
            }
          },
          n = {};

        function i(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var r = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = n, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, i.d(d, c), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          31: "ad93a3b938f820353fe224dc744521a3",
          162: "d72723f6c56023cdeedddeacd914ea1c",
          229: "2bf8b9ba3f993d44790bfb047a4b86ab",
          595: "6b731d884ad981962e23e1ced43e0e0d",
          597: "c391f4708aea71bf5345ab83c78d451b",
          622: "c9ee5bfbb3d2d099b3b53dd6eb1746cf",
          784: "c720bb027d78856c99a5471e2ef36cd8",
          799: "a378bbd9732ab31ee4a88222a5b0b628",
          818: "ad2d8006e914c7cd455cb2934095b60e",
          1010: "9ba7ef8ed613863a41cc90b109742313",
          1282: "326e6a994bdca063e5e42bf823914db8",
          1338: "8955590d1e2996a0765cd5182ff2b4c5",
          1378: "87083b614cdd39a8ac3adc436efeaa86",
          1421: "940301b0b19eed9f0a92b4b8fcee4dfb",
          1495: "c7469108e6cf0dbdd24d1763fc836de9",
          1631: "5c254f9c1fbe6a0b05fef0c74957fab4",
          1924: "da60e77de91e1357230746a6914d782b",
          2052: "6c32fbc475e5e501b1139e019717edfa",
          2080: "47a5c6a16a0e142d6869aeaaf625fb2c",
          2145: "aac3b4fb8a609f1c44badf59d27b0bb9",
          2174: "78714c40e90644d291bc418da22a2264",
          2463: "a11b28dfe47834a61c6cccd24832648e",
          2497: "0ee07e1d86d898e11c4f024e1c6f5a3f",
          2575: "1179b268b51b73f2de9e74040b5fe386",
          2581: "61c7e5ce9f309458258b94d2203d2cf0",
          2760: "51994eea54d76df17126a4887fe3cab7",
          2823: "eb54e5b5a1f0f63e0cf47b9d7a92b424",
          2837: "d0a2ddacf938e695aae567c1dabc65d2",
          2968: "d2179d57b396843c2e339d95b168ac08",
          2976: "baec5e0961266d9f2b6ecb49d33e1a44",
          2978: "fbca5fca001e30e8b06b3079cb215fac",
          3135: "cca35935456928cd928fed2b2c37f897",
          3180: "17e1094476a55d5ed04df6b7e1ef2a46",
          3400: "284cf600e9a7849fc0718d329469465d",
          3529: "49f7a5f5b2ed162c14efe3fc30585ae2",
          3541: "99e2284c6072fe8f9acfee5ac60cd2f9",
          3776: "46a1cb4de8dbe31ec38f254c1de25ef6",
          3802: "40b52d043b71cd1d5974e02b1ddc3b82",
          3866: "fce3b946c676762c0c4b9c195ee90315",
          3876: "dc9c22cd42d1add67729543c0bdfb0ac",
          3889: "a48909866daf4951cc0e37da2c754757",
          3896: "5301094f22798da261688f08ffd6b4fa",
          4086: "385f0c055d0b9c798a2d3eb3c7c76af9",
          4144: "ff325e7d9425b14c945a8aec9575f381",
          4235: "8db0e16667a9d930e573b4479b259633",
          4446: "5391e3a03c6a8f635d33c40133f7ae5d",
          4459: "196eccdef8ff70a153d68eeb7557b062",
          4555: "f80602372b4e4f84ba4a409f3c60e96c",
          4572: "096e5d444acdc1cca04d42692f033749",
          4712: "88f5220769de5d02e9f908805432e787",
          4756: "8930104e52787d95d446f7f2d9c3711d",
          4844: "721d95aecab345894dd135aafb28527f",
          4921: "2fafc04b5a5c20236ee99faa80fe6445",
          4956: "2eac75f32ef27267029b3611a6f1c906",
          4974: "fa75cb01a285e55f11382fc8d0b1453c",
          5038: "b9079a27d8cddcf09544ad8989bbe25c",
          5047: "d3a3683d8711e1492e0f00a872e08c69",
          5204: "806be414b6b718af8545d29132503574",
          5389: "78fcea732598d85485005ef06249eb0c",
          5860: "71f799b1bd91d761aa778fd028a2cf4b",
          5922: "02539bed8043068c8e1eb623818703b3",
          5997: "d18c2f9cd86da84a1f5392ec332c173c",
          6109: "9903ad9b19338cccf88e841785079eec",
          6233: "f587b79a218075b0225aaa67f530822b",
          6260: "e521f6775f339d322d815896ea5b11c3",
          6378: "d81c57d13572aec9a79baec1df70d310",
          6406: "a7ba0807d92afb64f1999ed7e27bb59f",
          6501: "87aacd9030b1f513e461d5c160f384ee",
          6583: "6afb7ca344ba2fd0135b55c1837b90e0",
          6629: "5690b8ae5aa0d9abc1d0786a81287dfa",
          6659: "f5c4340c501e45013ffececac6765850",
          6663: "90848fdf3982b2072520615549b56c36",
          6809: "bd0b17ddaba137de51ad602217f2ca29",
          6883: "aa1b8e4c6437e7025db4eea812647409",
          6936: "df7139497eda37ecead96b4fc9a30683",
          7047: "1fdc1b043495a7f9c8389047f2a9f22a",
          7147: "4a91acdabb309423e9edce865b135001",
          7160: "f28f136459b1146eb65afd06817c4988",
          7428: "d8757a242b45ee9b9d4fc5e1df9b5485",
          8295: "07fece52d3e19cc049ed824a992b2c0d",
          8403: "81620977245dd7e7e2064157bfd04680",
          8518: "9fd5c4cb35acc71776e3a61d4111a813",
          8614: "f2c27973c17e19ce7b34824e35ced6dc",
          8637: "93addffc8465274ba626e7617fa93793",
          8819: "2813695723909001263f0f61cbe747b6",
          8915: "d9db0351fc313025d0b1b5b7857aab8d",
          8957: "23dd8acbf5105e09772863c2cb1effd5",
          9067: "e219847c94a22739f9f0106ea2eeae03",
          9190: "33c8c21f7d0fa681840eab35adc8bfc2",
          9264: "3224366a3b51bd7b972464f5ace928d8",
          9447: "ba64172f66dbaf817eb1d3a2ebb77ec3",
          9793: "21a55ce401958068f006792bee19a862",
          9947: "415fa76f8ad277ce4c3123c5c2cbf4ca"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1282: "9edce3b1de44493c629386b51a3ed3de",
          2713: "a918c070930a0014e79e0865fe7f82e9",
          2968: "418522d0d12f72d80b558f9733dd6579",
          3400: "e9b0ca5c9fbce7a4ca9e364bfe93b5f9",
          4827: "a918c070930a0014e79e0865fe7f82e9",
          5094: "a918c070930a0014e79e0865fe7f82e9",
          6629: "6cf2cfa51258f7bbc33f7ef4120df583",
          7208: "a918c070930a0014e79e0865fe7f82e9",
          7725: "9605e4661b50b9d4fc907ee456d15b70",
          8518: "07b9e06ab02239d83522449d9cad2a65",
          8637: "9605e4661b50b9d4fc907ee456d15b70"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-header:", i.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var f, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), l = 0; l < n.length; l++) {
                var b = n[l];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == d + r) {
                  f = b;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", d + r), f.src = e), t[e] = [a];
            var s = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var t = f[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, o, n) => {
                  try {
                    var i = e(r, c);
                    if (!i || !i.then) return o(i, f, n);
                    var l = i.then(e => o(e, f), d);
                    if (!n) return l;
                    a.push(t.p = l)
                  } catch (e) {
                    d(e)
                  }
                },
                o = (e, a, d) => c(a.get, t[1], r, 0, n, d),
                n = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, t[2], 0, 0, (e, a, r) => e ? c(i.I, t[0], 0, e, o, r) : d(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var c = i.S[r],
                f = "@rockstargames/modules-core-header",
                o = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                n = [];
              switch (r) {
                case "default":
                  o("@foundry-int/utils", "6.1.0", () => Promise.all([i.e(3866), i.e(1270)]).then(() => () => i(93866))), o("@foundry/icons", "6.1.0", () => Promise.all([i.e(2760), i.e(4637), i.e(3570), i.e(8637)]).then(() => () => i(32760))), o("@radix-ui/react-accordion", "1.2.12", () => Promise.all([i.e(1010), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(9793)]).then(() => () => i(81010))), o("@radix-ui/react-dialog", "1.1.15", () => Promise.all([i.e(5860), i.e(8819), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(1172), i.e(2174)]).then(() => () => i(88819))), o("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([i.e(4637), i.e(4017), i.e(9394), i.e(3876)]).then(() => () => i(83876))), o("@radix-ui/react-focus-scope", "1.1.8", () => Promise.all([i.e(4637), i.e(4017), i.e(7937), i.e(4956)]).then(() => () => i(4956))), o("@radix-ui/react-id", "1.1.1", () => Promise.all([i.e(4637), i.e(6883)]).then(() => () => i(96883))), o("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([i.e(5860), i.e(9067), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(4293), i.e(4555)]).then(() => () => i(79067))), o("@radix-ui/react-popover", "1.1.15", () => Promise.all([i.e(5860), i.e(8295), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(1172), i.e(1421)]).then(() => () => i(41421))), o("@radix-ui/react-portal", "1.1.10", () => Promise.all([i.e(4637), i.e(4017), i.e(7937), i.e(9190)]).then(() => () => i(29190))), o("@radix-ui/react-portal", "1.1.9", () => Promise.all([i.e(4637), i.e(4017), i.e(9394), i.e(5204)]).then(() => () => i(2823))), o("@radix-ui/react-slot", "1.2.3", () => Promise.all([i.e(4637), i.e(2976)]).then(() => () => i(2976))), o("@radix-ui/react-slot", "1.2.4", () => Promise.all([i.e(4637), i.e(8957)]).then(() => () => i(38957))), o("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([i.e(4637), i.e(2463)]).then(() => () => i(12463))), o("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([i.e(4637), i.e(4017), i.e(9394), i.e(5047)]).then(() => () => i(45047))), o("@radix-ui/react-visually-hidden", "1.2.4", () => Promise.all([i.e(4637), i.e(4017), i.e(7937), i.e(5922)]).then(() => () => i(3541))), o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(2080), i.e(2145), i.e(2497), i.e(31), i.e(4637), i.e(8403)]).then(() => () => i(68403))), o("@rsgweb/modules-core-global-navigation", "0.0.0-development", () => Promise.all([i.e(2080), i.e(6260), i.e(2968), i.e(3400), i.e(3135), i.e(4637), i.e(4017), i.e(7793), i.e(7937), i.e(3570), i.e(9164), i.e(1270), i.e(1282), i.e(3517)]).then(() => () => i(11282))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(7147), i.e(31), i.e(6583), i.e(4637), i.e(5997), i.e(2909), i.e(3331), i.e(799)]).then(() => () => i(90799))), o("@rsgweb/utils", "0.0.0-development", () => Promise.all([i.e(2145), i.e(7147), i.e(31), i.e(1378), i.e(4637), i.e(5997), i.e(2909), i.e(597)]).then(() => () => i(60597))), o("@vanilla-extract/recipes", "0.5.7", () => Promise.all([i.e(6260), i.e(8614)]).then(() => () => i(78614))), o("clsx", "2.1.1", () => i.e(4921).then(() => () => i(4921))), o("framer-motion", "12.38.0", () => Promise.all([i.e(6663), i.e(4637), i.e(6936)]).then(() => () => i(36663))), o("gsap", "3.12.5", () => i.e(3529).then(() => () => i(93529))), o("react-dom", "18.3.1", () => Promise.all([i.e(162), i.e(4637)]).then(() => () => i(30162))), o("react-remove-scroll", "2.7.2", () => Promise.all([i.e(1924), i.e(4637)]).then(() => () => i(31924))), o("react", "18.3.1", () => i.e(2581).then(() => () => i(22581))), o("spatial-navigation-polyfill", "1.3.1", () => i.e(4446).then(() => () => i(54446)));
                  break;
                case "header":
                  o("@foundry/react", "6.1.0", () => Promise.all([i.e(5860), i.e(2080), i.e(6260), i.e(8295), i.e(2968), i.e(8518), i.e(3400), i.e(3135), i.e(3776), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(7937), i.e(1172), i.e(3570), i.e(4293), i.e(9164), i.e(1270), i.e(5812), i.e(7208)]).then(() => () => i(73776))), o("@foundry/react", "6.1.0", () => Promise.all([i.e(5860), i.e(2080), i.e(6260), i.e(8295), i.e(2968), i.e(8518), i.e(3400), i.e(2497), i.e(1631), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(7937), i.e(1172), i.e(3570), i.e(4293), i.e(9164), i.e(1270), i.e(5812), i.e(2713)]).then(() => () => i(91631)))
              }
              return e[r] = n.length ? Promise.all(n).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = (a, r) => {
              a = e(a), r = e(r);
              for (var t = 0;;) {
                if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                var d = a[t],
                  c = (typeof d)[0];
                if (t >= r.length) return "u" == c;
                var f = r[t],
                  o = (typeof f)[0];
                if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                if ("o" != c && "u" != c && d != f) return d < f;
                t++
              }
            },
            r = e => {
              var a = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(o = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : r(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var i, l, b = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= r.length || "o" == (l = (typeof(i = r[f]))[0])) return !n || ("u" == b ? o > d && !c : "" == b != c);
                  if ("u" == l) {
                    if (!n || "u" != b) return !1
                  } else if (n)
                    if (b == l)
                      if (o <= d) {
                        if (i != a[o]) return !1
                      } else {
                        if (c ? i > a[o] : i < a[o]) return !1;
                        i != a[o] && (n = !1)
                      }
                  else if ("s" != b && "n" != b) {
                    if (c || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || l < b != c) return !1;
                    n = !1
                  } else "s" != b && "n" != b && (n = !1, o--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            d = (e, a) => e && i.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}),
            o = e => function(a, r, t, d, c) {
              var f = i.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, i.S[a], r, !1, d, c)) : e(a, i.S[a], r, t, d, c)
            },
            n = (e, a, r) => r ? r() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = o((e, r, t, o, i) => d(r, t) ? c(((e, r, t) => {
              var d = t ? f(e[r]) : e[r];
              return (r = Object.keys(d).reduce((e, r) => !e || a(e, r) ? r : e, 0)) && d[r]
            })(r, t, o)) : n(e, t, i)),
            b = o((e, o, i, l, b, s) => {
              if (!d(o, i)) return n(e, i, s);
              var u, h = ((e, r, t) => {
                var d = t ? f(e[r]) : e[r];
                return Object.keys(d).reduce((e, r) => !e || !d[e].loaded && a(e, r) ? r : e, 0)
              })(o, i, l);
              return t(b, h) || (u = ((e, a, t, d) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + r(d) + ")")(o, i, h, b), "undefined" != typeof console && console.warn && console.warn(u)), c(o[i][h])
            }),
            s = {},
            u = {
              4637: () => b("default", "react", !1, [1, 18, 2, 0], () => i.e(2581).then(() => () => i(22581))),
              81270: () => b("default", "clsx", !1, [1, 2, 1, 1], () => i.e(4921).then(() => () => i(4921))),
              42909: () => b("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(2080), i.e(2145), i.e(2497), i.e(784)]).then(() => () => i(68403))),
              13517: () => b("default", "framer-motion", !1, [1, 12, 38, 0], () => i.e(6663).then(() => () => i(36663))),
              13331: () => b("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(2145), i.e(7147), i.e(1378), i.e(5997), i.e(2978)]).then(() => () => i(60597))),
              8723: () => l("header", "@foundry/react", !1, () => Promise.all([i.e(5860), i.e(2080), i.e(6260), i.e(8295), i.e(2968), i.e(8518), i.e(2497), i.e(1631), i.e(4017), i.e(9394), i.e(7793), i.e(7937), i.e(1172), i.e(3570), i.e(4293), i.e(9164), i.e(5812), i.e(5094)]).then(() => () => i(91631))),
              37116: () => b("default", "@rsgweb/modules-core-global-navigation", !1, [0], () => Promise.all([i.e(2080), i.e(6260), i.e(2968), i.e(3135), i.e(4017), i.e(7793), i.e(7937), i.e(3570), i.e(9164), i.e(1282)]).then(() => () => i(11282))),
              82199: () => b("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([i.e(7147), i.e(6583), i.e(5997), i.e(3180)]).then(() => () => i(90799))),
              19563: () => b("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => Promise.all([i.e(4017), i.e(7937), i.e(3541)]).then(() => () => i(3541))),
              59236: () => b("default", "@foundry-int/utils", !1, [0], () => Promise.all([i.e(3866), i.e(1270)]).then(() => () => i(93866))),
              84017: () => b("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(162).then(() => () => i(30162))),
              19394: () => b("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => i.e(595).then(() => () => i(2976))),
              20640: () => b("default", "@radix-ui/react-id", !1, [1, 1, 1, 1], () => i.e(9264).then(() => () => i(96883))),
              80692: () => b("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 2, 2], () => i.e(4844).then(() => () => i(12463))),
              27351: () => b("default", "react-remove-scroll", !1, [1, 2, 7, 2], () => i.e(1924).then(() => () => i(31924))),
              45108: () => b("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => i.e(1495).then(() => () => i(83876))),
              73463: () => b("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => i.e(2823).then(() => () => i(2823))),
              27937: () => b("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => i.e(1338).then(() => () => i(38957))),
              84293: () => b("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => i.e(7428).then(() => () => i(45047))),
              39646: () => b("default", "@vanilla-extract/recipes", !1, [2, 0, 5, 7], () => i.e(6233).then(() => () => i(78614))),
              46929: () => b("default", "@radix-ui/react-popover", !1, [1, 1, 1, 15], () => Promise.all([i.e(5860), i.e(8295), i.e(9394), i.e(1172), i.e(3802)]).then(() => () => i(41421))),
              66760: () => b("default", "@foundry/icons", !1, [0], () => Promise.all([i.e(2760), i.e(7725)]).then(() => () => i(32760))),
              80676: () => b("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 15], () => Promise.all([i.e(5860), i.e(8819), i.e(9394), i.e(1172)]).then(() => () => i(88819))),
              33920: () => b("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 14], () => Promise.all([i.e(5860), i.e(9067), i.e(9394), i.e(4293)]).then(() => () => i(79067))),
              34364: () => b("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => i.e(6809).then(() => () => i(29190))),
              39080: () => b("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => i.e(2575).then(() => () => i(4956))),
              47584: () => l("header", "@foundry/react", !1, () => Promise.all([i.e(5860), i.e(8295), i.e(8518), i.e(3776), i.e(9394), i.e(1172), i.e(4293), i.e(5812), i.e(4827)]).then(() => () => i(73776))),
              58754: () => b("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 12], () => Promise.all([i.e(1010), i.e(9394)]).then(() => () => i(81010))),
              59066: () => b("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => i.e(4446).then(() => () => i(54446))),
              35812: () => b("default", "gsap", !1, [0], () => i.e(3529).then(() => () => i(93529)))
            },
            h = {
              1172: [27351, 45108, 73463],
              1270: [81270],
              1282: [33920, 34364, 39080, 47584, 58754, 59066],
              2909: [42909],
              3331: [13331],
              3517: [13517],
              3570: [19563, 59236],
              4017: [84017],
              4293: [84293],
              4637: [4637],
              5812: [35812],
              6629: [8723, 37116, 82199],
              7793: [20640, 80692],
              7937: [27937],
              9164: [39646, 46929, 66760, 80676],
              9394: [19394]
            },
            p = {};
          i.f.consumes = (e, a) => {
            i.o(h, e) && h[e].forEach(e => {
              if (i.o(s, e)) return a.push(s[e]);
              if (!p[e]) {
                var r = a => {
                  s[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                p[e] = !0;
                var t = a => {
                  delete s[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = u[e]();
                  d.then ? a.push(s[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1282: 1,
                2713: 1,
                2968: 1,
                3400: 1,
                4827: 1,
                5094: 1,
                6629: 1,
                7208: 1,
                7725: 1,
                8518: 1,
                8637: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((d = (f = c[t]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), d(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            4295: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(3(331|517|570)|4((01|63|82)7|293)|7(208|725|793|937)|(509|916|939)4|1172|1270|2713|2909|5812)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [c, f, o] = r,
                n = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                o && o(i)
              }
              for (a && a(r); n < c.length; n++) d = c[n], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(35649), i(72892)
      })())
    }
  }
});