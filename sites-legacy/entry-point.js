try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c24d08c1-ee4e-443c-9191-997d24fa1cbf", e._sentryDebugIdIdentifier = "sentry-dbid-c24d08c1-ee4e-443c-9191-997d24fa1cbf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, f, d, c, n, o = {
            17411: (e, a, t) => {
              const r = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, t) => {
              (0, t(17411).w)(1)
            },
            58639: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => Promise.all([t.e(5076), t.e(2293), t.e(7180), t.e(5117), t.e(6266), t.e(7021), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(5114), t.e(8437)]).then(() => () => t(58437)),
                  "./index": () => Promise.all([t.e(5076), t.e(2293), t.e(7180), t.e(5117), t.e(6266), t.e(7021), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(5114), t.e(9741)]).then(() => () => t(19741)),
                  "./site-routes/Bully": () => Promise.all([t.e(5076), t.e(2293), t.e(7180), t.e(5117), t.e(6266), t.e(7021), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(5114), t.e(392), t.e(6019)]).then(() => () => t(86019)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(5076), t.e(2293), t.e(7180), t.e(5117), t.e(6266), t.e(7021), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(5114), t.e(392), t.e(9171)]).then(() => () => t(99171)),
                  "./tina": () => Promise.all([t.e(5076), t.e(2293), t.e(7180), t.e(5117), t.e(6266), t.e(7021), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(5114), t.e(392)]).then(() => () => t(392))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => d
              })
            },
            77027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            93032: (e, a, t) => {
              t(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
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
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, t) => (i.f[t](e, a), a), [])), i.u = e => "js/" + {
          68: "ae1fb1492d85d33d463d8226dca3662a",
          131: "a0866dc80cb264b54772ef5b732c2f56",
          173: "208729a817525f560b00047aa8afd50c",
          278: "8568471c7cfe6c3d9cd764f73d36089b",
          299: "a750a811950c0624b1f9cb43cf3248a9",
          314: "2993bf68c32ec4bdb4dbb03171eae62f",
          392: "19df1fd0aede56b6dcca1fee2f35d468",
          439: "6f400f1e49f4a43d2153162d72d0178b",
          601: "d97a9c6d0682a80bfdd24370bc40b4dd",
          662: "c7a1c8d89bd77db934b6d3aa84028a5a",
          824: "9ea642916b350aa48f47693a2d09382d",
          907: "2ed20e9e1249b14a18310e9f91e8d7ee",
          1054: "679dff8a70d8a771f45b3872f0eb86ad",
          1057: "1fe4178ae5ce30c475fd82666d479f3d",
          1098: "d18f8c9116dd24811b1cb3c3cfeb62c2",
          1242: "1fb26e42bd24f5763cbe58db32e7f9c2",
          1277: "6f649f7a96c3ac17031d47bb3523d86c",
          1673: "62d0d82709d84cf9b62cdbb8510cd525",
          1758: "4d1d8a91f88048a256480843508ef684",
          1785: "858048afcf5a3969e0e800edbd5b063b",
          1822: "70c30dc10468a2848fe3c9342b0a6cf5",
          1840: "c50282ec59cfe8a1a371ccdcc2556eff",
          1868: "01ccb69b597cc65223053cea36478dd8",
          2156: "132a5bb734725f432efa4a1d7dacd411",
          2169: "28340edb7f6bc5b3702003322d130c8f",
          2171: "a9266c5486e6ab91419a7a287122ed32",
          2221: "2213b02c71cb78dac13c09b8cfc9852e",
          2234: "b47213fa7559fc4d85c17c1a0c22dca5",
          2243: "3aa3644a6c749a33e72744b1fb5d5d6d",
          2293: "0fb2eddc8e3b770c08f59da559337233",
          2306: "14f01536c8c29fd83e600c43161c7b59",
          2323: "c8a0070f9502ddb1a14ba4602256d4fa",
          2347: "78c011f0a85a25bc3807d6920df466ad",
          2365: "1352a1df8fe58c8592448751697dba5c",
          2368: "e6a66b8b40b9ec2c03ec26f26711cfd9",
          2398: "46dfc85e13336cedf9e66774de16c84e",
          2466: "66843591e1d17db2c7ff679445ee68c1",
          2583: "a56601b99b85de44904f05ebceb03579",
          2642: "411f11534ad688716e08fcbdc78a0c1a",
          2678: "ed844a2a72879d7ecaf65c222142bf87",
          2864: "cb6c918d68fed80737a2e18a9ef50783",
          3034: "f5ce449a82638f3e38cf99f05e3ea7d5",
          3197: "3a579f26eb19aec518391130cf8ed84b",
          3343: "e8e62fead6f04281aafb4f6a701d48ba",
          3370: "3106f5a563648097d0f1b4901468142c",
          3438: "5da5d2bbe6682bb1ba2041bda666fee7",
          3475: "b0f7323d44569e6f5be630aa1855d5f1",
          3486: "cf776ab1a283a637d12079019f90b117",
          3697: "c566dd67fe55618793c9516e9240e2a5",
          3885: "5faa1876e27f5b631b966471b7946773",
          3896: "e0ebbc8d41d16f676f7a6674b58d5206",
          3941: "e8746df042a4b90ae2a290ab1fb8afda",
          4011: "199088721facae84275f33d5e4c2196a",
          4528: "5d580150a2a0c576af34e14feffb2ee9",
          4550: "ee89df9e798a438c3785939d2e03ca14",
          4578: "5b9c0ecffa0b6500e490d5845e96504a",
          4621: "47807335d48a82b23e0cca7ae3b44178",
          4700: "a69e77b82cf9ed380bd3a51eadac074b",
          4710: "265ba064a9e7e9e89055e721f12327d7",
          4731: "eb9391b650feffb33d80bc66e8922725",
          4799: "e50ebb6e7b799e743c871c53aa0e04d5",
          4851: "e51cd6684ec1ed32aaf6e447b2d61196",
          4861: "e61ee2d839ca0a4bba1eb628ce6d4417",
          4913: "5c431301cdf3d13dcb97b606e520cee3",
          4964: "4ef13c6f10be1e2b7ea28a412e8933c1",
          5018: "1708817941b5a34952e6017c75d69cfc",
          5076: "30ee9ba91cfb4ba56b3575c2ad112e29",
          5114: "ef71585d87964e65c8012051a40fe3a6",
          5117: "213c9a258f1962c2d0aa57c28d8afa32",
          5233: "47fa9f06e7e1ac1091cecdf239a42b40",
          5259: "009acdf84a8e32caeaf78d68f9018f17",
          5265: "9d3df9488fd4a84798aa83cd888a8050",
          5389: "8efa13f7d343cc59667d494659465576",
          5415: "a0182eca1b97665e2319b636582d737a",
          5530: "74667433799da6fe7d596bbc8467656c",
          5559: "b72f4e091449403d7e3d96b28465e081",
          5639: "5deef18fae2bbe512985a1cbe582bdd4",
          5663: "4944b1103c274432dbfec2585d98893a",
          5742: "f732bad1bf262d1e9763579c51e3f71f",
          5830: "4c1de3296f84096147002ba1cf0857d4",
          5832: "ff9fda347ee708697a5c5a886ad432fb",
          5859: "1d837631933d9dbc91b2a30cc7917484",
          5912: "c323af2d7a5f95ecc1f312d20b6a02fb",
          5997: "8d512224b837a2dcc2e7c6a40f013b45",
          6019: "b46774a4ad7af29f00972b5b01cd1aa4",
          6088: "2e6a1044924d508e2c3b557da4a5c8f5",
          6266: "428576b47558991fcefb10b4633226b1",
          6267: "e1a834c4611e51cb7969ce24dc526bfe",
          6280: "2ba97b76d3c0c83b6295fee495bba786",
          6285: "931b82d597993bfab626d1b7524309e4",
          6321: "8503dba3d5e2309630badae621ef6c0e",
          6327: "7e7c6ae8847328f13a1914eb0cff9e1e",
          6361: "9918ddc42186eef760cb57fd39653a69",
          6471: "8b046391f903c40e30b04094634fd7c0",
          6664: "4f542fa85882d83877bb20a2c44158f8",
          6879: "3ab4951d54f93a14cbdda8fcccaabc66",
          6891: "3906f496f78e3fd70f2f5efe4b6263fa",
          6997: "671a20838594fd08e91edbd87649fd31",
          7010: "21c3f4f4e02b40d639ca7fd7203a1c14",
          7021: "4f0486fed4eeba7085b4798702de330c",
          7073: "50629c72723c0fa32d754588513c97cf",
          7180: "1392d763b55f4fbdbb04f751970a8ec3",
          7407: "7e88e054fb6d93a7c891283e53ffead4",
          7436: "0041f3f0e54813cf220b1fb0c81cd1c6",
          7452: "a406e8668388d34da103d4ac9255fba2",
          7453: "7ead25d7668a1449da8ff4d977d3ba35",
          7465: "dc5b2af6b4f71927886899ed0f13813c",
          7970: "d78c26d93508eb0ccd7c9a5f2eca7826",
          8068: "6fb5ce2cd72a3ba498a6d2e866a54ece",
          8240: "e5bb3c7a264099df0fc2b95e0cfcc721",
          8272: "6503fb63d8f65fce164f6ae5c9c66b57",
          8325: "705d8ffd82b624a9aa2b8f859ccdf5ec",
          8391: "9bca7a2b86027138a4cd879ee52e8cc6",
          8431: "54e2b17bddd15bd359635f702aa65e6f",
          8437: "4de7183b3c39fc70ffa34b1d839f98a4",
          8659: "21be0cd51093a8a19edcb3d1ee910248",
          8665: "258b3ea30dca2ed70e69a8f818652b0a",
          8702: "170f981d05045f51f490c46c47fc8cde",
          8708: "344fa4b919265d368a243efc9d391234",
          8755: "89a9ee5af6a043ab4105d12eb9d1faf3",
          8845: "c1249032cb6a6b4e259818a57dfcfbc8",
          8880: "aa73ce447b8c2a401e59a067d9d9ad3f",
          8938: "df62ee337d15c84af67d37b15bea875d",
          8970: "16560a29fb125eed3bcec6ddb2bd3f10",
          9022: "5e3f51c676a1ea1a88255fc0b9d3c8d1",
          9028: "ce5be3019d9a12bb2cf46b3d2d298d2a",
          9126: "e6bbb2ebb13e6108b4389720c65ea889",
          9171: "cf7210a39cdf0024ecb5d3791633bb42",
          9377: "4d0acba47d10a4ebf642a5cefed3781c",
          9587: "1be56a187bbf1a03da58a947faeb4b2e",
          9615: "742bb363028e2d6a7d9c324f79fe651e",
          9741: "801ecbe2f02d88974588fe3c16b8a113",
          9760: "2b731e965208a7853bb8b83facbf3405",
          9936: "0f1cd2941a3cfb201e7d0dbf08649a6f",
          9987: "55f097e8e6ca1e1e7e07018e331ccf1a",
          9990: "30b7662f761aa92bb707019031149b00"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1057: "e11267b2b9a024fdab4347cb9ada8f14",
          1785: "bde1c4e0b23cbfd27b8e58c3e9b9719f",
          3438: "e11267b2b9a024fdab4347cb9ada8f14",
          5114: "c7821584e9b8f5e7d8d657e039c4640d",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          7021: "5d55dc4d53fe506b7afd60db683268bb",
          8437: "8711e961a261d74f8514e2dc9a33b1b2",
          8665: "cd135931d3ddd0c8c915bde00523e2a1",
          9171: "52e55b769351b6e3f1602fe5d2baacd1",
          9736: "81bb14ac88f3a651365e4427a5b9bac9"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-legacy:", i.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + t), c.src = e), f[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach(e => e(t)), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          392: [17523],
          5114: [31879]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
            var t = i.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, c, n, o) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then(e => n(e, c), f);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, r[1], t, 0, o, f),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, r[2], 0, 0, (e, a, t) => e ? d(i.I, r[0], 0, e, c, t) : f(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var d = i.S[t],
                c = "@rockstargames/sites-legacy",
                n = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (f[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(1788), i.e(2918), i.e(2440), i.e(1277), i.e(1785)]).then(() => () => i(21375))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(6266), i.e(2229), i.e(1788), i.e(2918), i.e(2440), i.e(9458), i.e(9736), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(2229), i.e(9623), i.e(5966), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5076), i.e(5117), i.e(2229), i.e(5966), i.e(1788), i.e(4853), i.e(2918), i.e(2323), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(5076), i.e(2293), i.e(7180), i.e(5997), i.e(2229), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(8702)]).then(() => () => i(58702))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("focus-trap-react", "10.3.1", () => Promise.all([i.e(1673), i.e(2229), i.e(7145)]).then(() => () => i(51673))), n("framer-motion", "10.18.0", () => Promise.all([i.e(1840), i.e(2229)]).then(() => () => i(91840))), n("framer-motion", "10.18.0", () => Promise.all([i.e(5559), i.e(2229)]).then(() => () => i(65559))), n("framer-motion", "7.10.3", () => Promise.all([i.e(5912), i.e(2229)]).then(() => () => i(75912))), n("graphql", "16.11.0", () => i.e(601).then(() => () => i(30601))), n("prop-types", "15.8.1", () => i.e(7465).then(() => () => i(97465))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), n("react-dom", "19.2.0", () => Promise.all([i.e(2229), i.e(2583)]).then(() => () => i(62583))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then(() => () => i(15389))), n("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return o.push(a.then(f, e));
                  var d = f(a);
                  if (d && d.then) return o.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then(() => e[t] = 1) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var f = 1, d = 1; d < e.length; d++) f--, r += "u" == (typeof(n = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return r
              }
              var c = [];
              for (d = 1; d < e.length; d++) {
                var n = e[d];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != a[n]) return !1
                      } else {
                        if (d ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, f, d) => {
              var c = d ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce((a, r) => !t(f, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    d = (typeof f)[0];
                  if (r >= t.length) return "u" == d;
                  var c = t[r],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  r++
                }
              })(a, r) ? a : r, 0)) && c[r]
            },
            f = e => {
              throw new Error(e)
            },
            d = (e => function(a, t, r, f, d) {
              var c = i.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, i.S[a], t, !1, f, d)) : e(a, i.S[a], t, r, f, d)
            })((e, t, d, c, n, o) => {
              if (!((e, a) => e && i.o(e, a))(t, d)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, d, o);
              var b, s = r(t, d, n, c);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void f(((e, t, r, f, d) => {
                var c = e[r];
                return "No satisfying version (" + a(f) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
              })(t, e, d, n, c))
            }),
            c = {},
            n = {
              62229: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              9623: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(4853)]).then(() => () => i(15389))),
              95966: () => d("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(2293), i.e(7180), i.e(5997), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(6321)]).then(() => () => i(58702))),
              81788: () => d("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              44853: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              2918: () => d("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(9623), i.e(5966), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              16565: () => d("default", "graphql", !1, [1, 16, 9, 0], () => i.e(601).then(() => () => i(30601))),
              92440: () => d("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(5117), i.e(5966), i.e(4853), i.e(2323), i.e(3438)]).then(() => () => i(99747))),
              4572: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              90660: () => d("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(5912).then(() => () => i(75912))),
              61128: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              61913: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              57145: () => d("default", "prop-types", !1, [1, 15, 8, 1], () => i.e(7465).then(() => () => i(97465))),
              2765: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], () => i.e(1673).then(() => () => i(51673))),
              82849: () => d("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(5559).then(() => () => i(65559))),
              84590: () => d("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], () => i.e(8665).then(() => () => i(21375))),
              87330: () => d("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], () => Promise.all([i.e(9736), i.e(9987)]).then(() => () => i(32368))),
              91082: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(4964).then(() => () => i(62583))),
              87052: () => d("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(1840).then(() => () => i(91840)))
            },
            o = {
              1277: [4572, 90660],
              1788: [81788],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4853: [44853],
              5114: [2765, 82849, 84590, 87330, 91082],
              5966: [95966],
              6565: [16565],
              7145: [57145],
              9458: [61128, 61913],
              9623: [9623],
              9736: [87052]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var t = a => {
                  c[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete c[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? a.push(c[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1057: 1,
                1785: 1,
                3438: 1,
                5114: 1,
                6019: 1,
                7021: 1,
                8437: 1,
                8665: 1,
                9171: 1,
                9736: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = i.miniCssF(e),
                  f = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var c;
                      if ((f = (c = d[r]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(2(229|440|918)|9(458|623|736)|1788|4853|5966|6565|7145)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((t, f) => r = e[a] = [t, f]);
              t.push(r[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, r[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, [d, c, n] = t,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                n && n(i)
              }
              for (a && a(t); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
});