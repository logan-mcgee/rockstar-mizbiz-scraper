try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4cc288d0-09e7-4a65-997c-dd371bbba1e0", e._sentryDebugIdIdentifier = "sentry-dbid-4cc288d0-09e7-4a65-997c-dd371bbba1e0")
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
      t.default = e.default || e, Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, d, c, f, n, o = {
            28419(e, a, t) {
              (0, t(17411).w)(1)
            },
            17411(e, a, t) {
              const r = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            93032(e, a, t) {
              t(28419)
            },
            77027(e, a, t) {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, c = r.length; d !== a && c >= 0;) "/" === r[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + f
              };
              Number.isInteger
            },
            58639(e, a, t) {
              "use strict";
              var r = {
                  "./bootstrap": () => Promise.all([t.e(547), t.e(5422), t.e(3004), t.e(9967), t.e(6266), t.e(1027), t.e(1127), t.e(181), t.e(3331), t.e(2909), t.e(8429), t.e(8793), t.e(2199), t.e(2323), t.e(4182), t.e(4708), t.e(1352), t.e(695), t.e(8437)]).then(() => () => t(58437)),
                  "./index": () => Promise.all([t.e(547), t.e(5422), t.e(3004), t.e(9967), t.e(6266), t.e(1027), t.e(1127), t.e(181), t.e(3331), t.e(2909), t.e(8429), t.e(8793), t.e(2199), t.e(2323), t.e(4182), t.e(4708), t.e(1352), t.e(695), t.e(9741)]).then(() => () => t(19741)),
                  "./site-routes/Bully": () => Promise.all([t.e(547), t.e(5422), t.e(3004), t.e(9967), t.e(6266), t.e(1027), t.e(1127), t.e(181), t.e(3331), t.e(2909), t.e(8429), t.e(8793), t.e(2199), t.e(2323), t.e(4182), t.e(4708), t.e(1352), t.e(695), t.e(6478), t.e(6019)]).then(() => () => t(86019)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(547), t.e(5422), t.e(3004), t.e(9967), t.e(6266), t.e(1027), t.e(1127), t.e(181), t.e(3331), t.e(2909), t.e(8429), t.e(8793), t.e(2199), t.e(2323), t.e(4182), t.e(4708), t.e(1352), t.e(695), t.e(6478), t.e(9171)]).then(() => () => t(99171)),
                  "./tina": () => Promise.all([t.e(547), t.e(5422), t.e(3004), t.e(9967), t.e(6266), t.e(1027), t.e(1127), t.e(181), t.e(3331), t.e(2909), t.e(8429), t.e(8793), t.e(2199), t.e(2323), t.e(4182), t.e(4708), t.e(1352), t.e(695), t.e(6478)]).then(() => () => t(66478))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => c
              })
            },
            25136(e) {
              "use strict";
              e.exports = t
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
          var d = Object.create(null);
          i.r(d);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, i.d(d, c), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, t) => (i.f[t](e, a), a), [])), i.u = e => "js/" + {
          68: "801d8a06827ea825cc1f493af0e61936",
          131: "a085803cd8e388253855f72b02fc4ece",
          173: "2921d164871217e654a873419c2a0051",
          278: "bcf378356b3cd6bf697a880dc76e5992",
          299: "0a6791d9034b73aaf871e73f76afc509",
          314: "d7e87eb8f09e3723cfd410fe4572b3b2",
          439: "b5b6fd14e9c06407b83965fa940b8f08",
          547: "818b40ac14cca768f7875bfb2aa0c838",
          662: "7af4968a6c52e19b23488ea3da38203a",
          695: "cf4bb17aed5509d83d75f29695949410",
          824: "5d43d9576c2157fda7d1706cb032a6aa",
          907: "f6618a1e118f42d5a9f103b519d518c2",
          1027: "e88a06d1edb0255b2d1c7fdc21b5fe89",
          1054: "e45c0723cab3ee0ca3f7ff247f856196",
          1098: "4199de7630a02f87c8fdf5576479a7e7",
          1242: "73586e7fd8354e5876601d98daa65bc1",
          1510: "10c5f9f3338ea2910e24045af89346a9",
          1673: "165cde962071dfccd95ad400ea26019e",
          1758: "040737343372c9d5516c10e18e85cbd5",
          1785: "567a3b5a12f2129e405e8c29c3a3771d",
          1795: "22bdbd238f53663492b946272a438822",
          1822: "16d77177c77f8ef4f4df79345df14fba",
          1837: "310a9229359bb9622927873b2475a888",
          1868: "13d0addcf2444820c2ef78afebd7393c",
          2156: "63be9d9e8331ba2b025c15d79587edb4",
          2169: "6ea484c5e683b30ff30c61d6a2182492",
          2171: "d5c50ebd5223872aa6465f2b689fae51",
          2209: "6f719388f389db52caea193e908e48d5",
          2221: "7f77a64ca433741d426869515dc29a6b",
          2234: "262c57725a0df76d61185ef13d4d184b",
          2243: "4a4c478af714600a31104c4ad8e9cf98",
          2295: "d4025ad1ccc26c79e9eb5d7eaa924f99",
          2306: "b99e54a98ea091aca6d2a49274056323",
          2323: "c9a006a595fd06a74f16c9217408828c",
          2346: "c79eed99743b4b9f9bd9978536da4500",
          2347: "8b11bf81eb38545076d984a2565b1cd5",
          2365: "5e59c3355621dc5fbd5a895338a1b79b",
          2368: "3169e865a2b95b1f7f3be4f153874b82",
          2398: "bd0a8b45f4eea1bed43591f9879569de",
          2466: "f303dea5a949ac352b559247ccbe734d",
          2642: "db5c34bdb79aefc101cf0eded3c3886b",
          2678: "32ca1379bb36a70786d8d09d8b010dce",
          2864: "2d591eebd41d5007edb04c5118101f5d",
          3004: "500a2e02ba3670223ada934cbf0befa6",
          3034: "dfe6e7b70a62284eb60585b0404c7027",
          3197: "4471c4b726591082beccd2573a3269c4",
          3343: "a39021e7a979eb171894b7115eb114e6",
          3370: "2a1b58b2557532fdf205898ce9cabd87",
          3475: "76fa8bb0b48ab5bf52f0c9f63c3f43f1",
          3486: "da030d0c566eb18ad2c2851b7e85dbad",
          3697: "1910d7be250ccd6b9e344665a2060620",
          3885: "77d115a0521f20b0ccd7929e47e9c168",
          3896: "191ee67c6020da36ca984c37c058dd32",
          3941: "666b448e5fcd363e5dc9003ed14abdb1",
          4011: "787a6fde2d00ed60420fca634ab44aa1",
          4218: "b2e5c231a7847898bb5c2ecddb383f92",
          4528: "3cff064a7704123d7c5ca221b1aae5b4",
          4550: "73fb80c36776906669a2174406ab7f5e",
          4578: "72a8774e73a1e7fca2ee905b9f7688b4",
          4621: "bebf419f4e7aaea915ce0a0a5381ab9d",
          4700: "b681c74c8cb710e273b3eb5c36fbae08",
          4708: "4d27f9d83209ea3dc694fa634df08a33",
          4710: "2c53118fa7cfd0bde04863856b7b4a76",
          4731: "267422a86eb3119bbfaf2184a5ee2ae9",
          4799: "48461f42776ebe28c11d0389b5232e55",
          4851: "cffd8372f140df67c44977b94a3001d9",
          4861: "2a04e17e6cc7e3bff1f964440f65a662",
          4913: "7b27f7b2350cbfba1ff48b9603d1a0dc",
          5018: "8c8b6caa4abe4fe79a1eea4e0083d2d0",
          5233: "9f4bc3cb0ee6ce9cdc2754158f1cc202",
          5259: "fd1440afc66d891e6bcab39c4770efb0",
          5265: "e9e56a7754442df2f05c3c80ef124abb",
          5389: "bde3e9ea6fa85b9fc85d153d40c28e53",
          5415: "c8e4c0aafa6888bf7314179fd9637a8c",
          5422: "064fccc2225a6e8b2f76fac6756612ba",
          5530: "053083f0bb0ec573a775fcb02cc0aeeb",
          5639: "ede5a4e6519abe277e449b6591cc3de5",
          5663: "7168aa6e8899c14a3f33ac2ffa806f21",
          5742: "f23f8f5b542544db17ce3176226e2955",
          5830: "9f273e67af07079e76c6af06393c2da9",
          5832: "674e9e4505bb7221f66572fe6840bb21",
          6019: "cca1502e47cbca444e374a4851c31ada",
          6266: "d27755d914c1b9c5aa371fd4c71e41de",
          6267: "3a6a31c1974501edd3905fdb8d818e9b",
          6280: "24590623724c03fa4788a0a3f4cfff85",
          6285: "bf96d75f15570411e127e732b3ac7b96",
          6327: "401c59a706b502dc9a726f9219098770",
          6361: "365822d006bbbb98abbd14f6c5ef545f",
          6471: "26b9740c15a4a5283ef781684475ac79",
          6478: "b8069a3736a619178e919066c70d3e46",
          6664: "117fed837e0d65621a8b5ef198d60977",
          6879: "59e345887b768d25e179c851f51682b5",
          6891: "43e1f8e6f5f046dda14245d66c592a10",
          6997: "e28585198a9c983e82e370b2882a92ad",
          7010: "76a9129a772e94d3ef9bdbfff45a24d9",
          7073: "6c631c8cbd511c16363533bcfcf677d7",
          7129: "f046c246e122f38ca6651850bafbe388",
          7283: "2fd31fafc73457b842e7da17d3526a26",
          7301: "19634cc5ff36138af09c64cd173ea8d5",
          7407: "6555ecbfa15b66b41641c5e5b224eb91",
          7436: "0e8e3049afc24ac9575b12c06ef6cc3f",
          7452: "a4ec74e397f9e973d0bf08b43e695f53",
          7453: "ca27fca340bbf32c560702064f7a9840",
          7465: "5aad277b1b9fbed9066a173fd5cb8e46",
          7808: "64eae60ac5c736f3e9b0277a0cd4934d",
          7920: "afa65f4703a24944c6834f75059dfacd",
          7970: "fe9052b7e42859c9071bc0a6ade35e66",
          8068: "82a50a0df6484da27a164e39518da139",
          8272: "9d00ea821a3615a3a5e136baec0c686f",
          8325: "aaa8b997853eed4f957e01772b9f3fa8",
          8391: "b12f02853331b8a9309dc3a9cee3ad34",
          8431: "dad7b43f8d277613295b20a41d9f7735",
          8437: "674f1a10a3bf583254036454f48e9dfa",
          8665: "66fc42aee2804ba68006d273e575b0a0",
          8708: "622bfb63d26e3bae095b9115e0a57790",
          8751: "550cdf3677f1122964a5b1f90833a438",
          8755: "201034a7670318c8173329043b4fe80a",
          8845: "5bcdf511e8e293ce62f24b569b09b280",
          8880: "de27bdd3ed97d00b2506d7eabf0eb194",
          8938: "36ddc109a364b0158731c0444d5d40bc",
          8970: "d57faaa3f32da0ab3dae20c657ce0402",
          9022: "e7c439c6bdfbe8f2c00e296db622d5dc",
          9028: "8223632c367dcd0a452a4db3e2d496dd",
          9126: "80af892ce8b6dfd1f27a24a05ffe8a04",
          9129: "dcf3bbbe01c1ad809a4c2fd895ad7d7a",
          9171: "19aa192ab7ec5027628d73fc0e009822",
          9377: "122f8517ae978869ee0b444f1c73a82d",
          9615: "fd033448c7e81cabbbbfb64fe96523b4",
          9741: "1a5b638fe9237a58c03dea8d4d7a0d31",
          9760: "697f16bcd22a63995794d9d745d23fb8",
          9936: "b1e2a5ddac3b282e211973ea9a430c7f",
          9967: "58334cfe2d25e6ae2378936eb42b3e1a",
          9987: "d8a391f29e4e2ed328a489d19d21edcc",
          9990: "09a75575548f703b27caace51191eb27"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          695: "3f4284e58534493394862d825deb8327",
          1027: "58390417ec4dcae2f411d66cea02a0d0",
          1510: "82b8e41eb90eae7db3adfb9fff54d045",
          1785: "01fd4a1b7dcafeb5ed7fca9004268171",
          4297: "d5fbf956683b6a3bd196cbced86d6be7",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          8437: "0c95627356de588eb25a2b02a7d32803",
          8665: "b3313fda99862d6d64bd2a829ae71ca3",
          9129: "82b8e41eb90eae7db3adfb9fff54d045",
          9171: "52e55b769351b6e3f1602fe5d2baacd1"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/sites-legacy:", i.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + t) {
                  f = s;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", c + t), f.src = e), d[e] = [a];
            var l = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach(e => e(t)), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          695: [31879],
          6478: [17523]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(f, e) && f[e].forEach(e => {
            var t = i.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, t, c, f, n, o) => {
                  try {
                    var b = e(t, c);
                    if (!b || !b.then) return n(b, f, o);
                    var i = b.then(e => n(e, f), d);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, a, d) => c(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, r[2], 0, 0, (e, a, t) => e ? c(i.I, r[0], 0, e, f, t) : d(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var c = i.S[t],
                f = "@rockstargames/sites-legacy",
                n = (e, a, t, r) => {
                  var d = c[e] = c[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : f > n.from)) && (d[a] = {
                    get: t,
                    from: f,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(5422), i.e(3004), i.e(1795), i.e(1127), i.e(1837)]).then(() => () => i(12841))), n("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([i.e(1127), i.e(181), i.e(3331), i.e(2909), i.e(2199), i.e(4182), i.e(4708), i.e(1785)]).then(() => () => i(21375))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(6266), i.e(1127), i.e(2909), i.e(2199), i.e(4182), i.e(1352), i.e(4297), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(547), i.e(7129), i.e(8068), i.e(1127), i.e(181), i.e(3331), i.e(2909), i.e(7301), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(547), i.e(5422), i.e(9967), i.e(2346), i.e(1127), i.e(3331), i.e(2909), i.e(8429), i.e(8793), i.e(2199), i.e(2323), i.e(1510)]).then(() => () => i(42195))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(547), i.e(5422), i.e(3004), i.e(7129), i.e(7808), i.e(1127), i.e(181), i.e(2909), i.e(7301), i.e(811), i.e(8751)]).then(() => () => i(28751))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("focus-trap-react", "10.3.1", () => Promise.all([i.e(1673), i.e(1127), i.e(8793)]).then(() => () => i(51673))), n("framer-motion", "12.38.0", () => Promise.all([i.e(7283), i.e(1127), i.e(2295)]).then(() => () => i(87283))), n("graphql", "16.13.2", () => i.e(7920).then(() => () => i(7920))), n("prop-types", "15.8.1", () => i.e(7465).then(() => () => i(97465))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(1127), i.e(6327)]).then(() => () => i(76327))), n("react-router-dom", "6.30.3", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return o.push(a.then(d, e));
                  var c = d(a);
                  if (c && c.then) return o.push(c.catch(e))
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
                for (var d = 1, c = 1; c < e.length; c++) d--, r += "u" == (typeof(n = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return r
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                f.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? f.pop() + " " + f.pop() : a(n))
              }
              return o();

              function o() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= r.length || "o" == (i = (typeof(b = r[f]))[0])) return !o || ("u" == s ? n > d && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (c ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, t, r) => {
              var d = r ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[t]) : a[t];
              return Object.keys(d).reduce((a, t) => !a || !d[a].loaded && ((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    c = (typeof d)[0];
                  if (r >= t.length) return "u" == c;
                  var f = t[r],
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && d != f) return d < f;
                  r++
                }
              })(a, t) ? t : a, 0)
            },
            d = (e, a, t) => t ? t() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            c = (e => function(a, t, r, d, c) {
              var f = i.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, i.S[a], t, !1, d, c)) : e(a, i.S[a], t, r, d, c)
            })((e, c, f, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(c, f)) return d(e, f, b);
              var s, l, u = r(c, f, n);
              return t(o, u) || (l = ((e, t, r, d) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(d) + ")")(c, f, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = c[f][u]).loaded = 1, s.get()
            }),
            f = {},
            n = {
              71127: () => c("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              10181: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              13331: () => c("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(547), i.e(5422), i.e(3004), i.e(7129), i.e(7808), i.e(181), i.e(7301), i.e(2209)]).then(() => () => i(28751))),
              42909: () => c("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(5422), i.e(3004), i.e(1795), i.e(4218)]).then(() => () => i(12841))),
              18429: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              28793: () => c("default", "prop-types", !1, [1, 15, 8, 1], () => i.e(7465).then(() => () => i(97465))),
              82199: () => c("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([i.e(547), i.e(7129), i.e(8068), i.e(181), i.e(3331), i.e(7301), i.e(2169)]).then(() => () => i(32169))),
              17301: () => c("default", "@rsgweb/tina", !1, [0], () => Promise.all([i.e(547), i.e(5422), i.e(9967), i.e(2346), i.e(3331), i.e(8429), i.e(8793), i.e(2323), i.e(9129)]).then(() => () => i(42195))),
              48586: () => c("default", "framer-motion", !1, [1, 12, 34, 5], () => i.e(7283).then(() => () => i(87283))),
              1556: () => c("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              21352: () => c("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              10475: () => c("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([i.e(4297), i.e(9987)]).then(() => () => i(32368))),
              97819: () => c("default", "@rsgweb/modules-core-hero", !1, [0], () => i.e(8665).then(() => () => i(21375))),
              99101: () => c("default", "focus-trap-react", !1, [1, 10, 2, 3], () => i.e(1673).then(() => () => i(51673))),
              811: () => c("default", "graphql", !1, [1, 16, 9, 0], () => i.e(7920).then(() => () => i(7920)))
            },
            o = {
              181: [10181],
              695: [10475, 97819, 99101],
              811: [811],
              1127: [71127],
              1352: [21352],
              2199: [82199],
              2209: [811],
              2909: [42909],
              3331: [13331],
              4182: [17301, 48586],
              4708: [1556],
              8429: [18429],
              8793: [28793]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var t = a => {
                  f[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete f[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(f[e] = d.then(t).catch(r)) : t(d)
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
                695: 1,
                1027: 1,
                1510: 1,
                1785: 1,
                4297: 1,
                6019: 1,
                8437: 1,
                8665: 1,
                9129: 1,
                9171: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = i.miniCssF(e),
                  d = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (f = t[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((d = (f = c[r]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var f = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), d(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, t)
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
              else if (/^(1(127|352|81)|8(11|429|793)|2199|2909|3331|4182|4297)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, r[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [c, f, n] = t,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) i.o(f, r) && (i.m[r] = f[r]);
                n && n(i)
              }
              for (a && a(t); o < c.length; o++) d = c[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
});