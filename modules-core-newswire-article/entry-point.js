try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "87e19a42-ef8d-4dd3-ae3e-506f4f99de05", e._sentryDebugIdIdentifier = "sentry-dbid-87e19a42-ef8d-4dd3-ae3e-506f4f99de05")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], function(e, a) {
  var r = {},
    t = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, d, f, c, n, o, b = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            29441: e => {
              "use strict";
              e.exports = r
            },
            55974: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(6833), r.e(5117), r.e(8505), r.e(7642), r.e(5827), r.e(840), r.e(9116), r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(59), r.e(76), r.e(1125)]).then(() => () => r(28674)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(5117), r.e(8661), r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(4572), r.e(6130), r.e(6069), r.e(6536), r.e(2358), r.e(3410)]).then(() => () => r(4984)),
                  "./types": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(6833), r.e(5117), r.e(8505), r.e(7642), r.e(5827), r.e(840), r.e(9116), r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(59), r.e(76), r.e(1125)]).then(() => () => r(76808))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => f
              })
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            93032: (e, a, r) => {
              r(28419)
            }
          },
          s = {};

        function i(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = b, i.c = s, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, i.d(t, f), t
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          59: "cb59652fc5b172d7eee1aa85471b2657",
          68: "aef52f26a971b195b35c3bf1f123b8b1",
          131: "23f65ec4bb35d900255743067b9710e2",
          173: "3757453b2bccaef3c187bb97bdf24dc9",
          278: "9cb4ce3354b467a220302cea7d593ad7",
          299: "7688ebc0beaeb95d36ec76706d48dd08",
          314: "497859a718a5491393f8c30f1f039040",
          439: "17dae058e3e32bac0fb0263e6d15d1a2",
          602: "fad5aafc08b86256013ecc4504681937",
          662: "02ce5e3c481ce61515643a2b4c36442c",
          824: "9464a8e9b39698c54fd65462e2eb0bc2",
          840: "29fe2ff622bffdba47fd1dbe8355710b",
          884: "8b843eb51c1f410acaa3f8d3871176f7",
          907: "8bb15a558684298e9b52a7962ffffb69",
          1054: "621719cdf4148202f2555107735ae06e",
          1057: "4ffcb51bd331b9ea7036f7c2fa83f31c",
          1098: "27b3bc9dbf80288a0f4699029ac8de3e",
          1125: "b0cfd8c131b3044b177302853a7f8cde",
          1242: "b1808d9ce7a9d419cc41e13426dda3ae",
          1758: "feea2dd79a9c7d48c685b0335cf90b3a",
          1822: "ed2f66c7edee7b3f6d32f21996c6bb9a",
          1858: "1109dd7abc7b49c27ddd71e3812b2089",
          1868: "e5177bdfd5480c1abd9f95d88d995f45",
          2156: "6dffd66b6f8bd8f798f7f9a22386b814",
          2169: "59dfa1ad3636656f315f378180bd9b10",
          2171: "056ab3c6602c2d1b94899358a071b899",
          2221: "3137bc060cfa66a3bd265ad1610027ab",
          2234: "f9b9f4bd7cb077d17aac0d3ecda9939a",
          2243: "07839077ff317d32b309bf625e5ed850",
          2306: "372056d50ff377dfd768f8702bf48ef1",
          2347: "64256bd90944133ca2b28d1b4defd228",
          2358: "7e3571a0967e5a66a3d28230772eade1",
          2365: "06d41d2b433bbee22398a74b21c89c1d",
          2398: "285b2640f10af385fcc18b1f3eebdf99",
          2424: "e37f0705e25844ec33051b8744b29ca7",
          2466: "f80a29169cb93886596f758b2fd28e6e",
          2642: "f458695854a3e5d561dcd385d45bc26d",
          2678: "63fa837c5e37e6e5c220aed1aa962669",
          2864: "4cbe709def78950ee15cd35efeab36b7",
          3034: "693a463af604369dd4f12e101b17cf2e",
          3197: "2862ff30ca6f90c7b4649bbe47681b1c",
          3343: "1fe43a5979163d91c829f050ae103d32",
          3370: "b30393adc80fb464dccb81ca69ba6e22",
          3387: "248b7da14e04b046907ac2a3ad198d87",
          3410: "925d43ea6fc1b27bdb6ae423f9c589da",
          3438: "76b1dac90488544154cd5e09e2b83f0b",
          3475: "e5500d3085c5242f817e68d62e5bd266",
          3486: "050f06aa689a09fb6ee1b28263d12e09",
          3697: "34b7940394fb305ccd2f8e4b79f825c5",
          3866: "ce40571e70e3485edc679e8c32febd43",
          3885: "4943245ce9f6629e4045be4dd64ce3a8",
          3896: "e2f4be5cb26e51679608d66544767154",
          3941: "8ef00c7e4b5ea56f537e244a2f57289f",
          4011: "dc4ca5d1ff20d4da154b89427d59d3f0",
          4237: "b37696c88a6ef4858c43116bd9cd99fb",
          4488: "2965b5392607543e35c9578be6761caf",
          4528: "a765bb99613c25ee17d803dc9623a7b6",
          4550: "562540b5864af70bca06fef8b30d2dfc",
          4578: "14085cc89e58520db1bafb3fd4ba4d3a",
          4621: "7bfcc47df67b14187a72bf537aa65886",
          4700: "e774afe7b6bc62cc97cee98b6124c754",
          4710: "f2d96aa799fd62f6a94e69f4ae70ec6e",
          4731: "4481b3f9724c59825f60c69ac67da0a1",
          4779: "88facfb23a5c9a6fa8a11d740420ed60",
          4799: "a850472d66aabf8a271d31f76684b9d9",
          4851: "ef689519f6fcb02f0d63002533f5714f",
          4861: "60112b137331faa38a7244dbbddff64a",
          4913: "2bf58ac67bbefaa5c3bbc44eaeff3878",
          5018: "069fd965c4a2ec13d4cdfe88d24010bf",
          5021: "7b0ca0d10089728653679447eaf466c0",
          5076: "bceb99c2c678970e9ce0d71e9615bcee",
          5117: "3b7f10a2d255a98ea78b79f31884eec3",
          5233: "b6220169a771b0795b4c3aa67228c16a",
          5259: "e567fd61e5902dfdbeb455bb367faae8",
          5265: "e4821c1d9864e64f10283b3a0dca6a17",
          5389: "08e8d6906bd4bb4348d4698bd221dbba",
          5400: "0427e81d0692ff4e98dffc8a7d6eaeb8",
          5415: "946fbd047e00937ec322328ff5e56600",
          5454: "9c3791c63f34101700497693c5356009",
          5530: "26595ba261c527073f5be45b31ecc30a",
          5639: "6b3caf80c252471dfd28c968881d9afa",
          5663: "9e479c4d87e3dbfeebb6a77684bf1c68",
          5742: "7638a7f73c47cfeba02185cbbf993aa8",
          5827: "9c510b91cce6386d306d35163b055563",
          5830: "dcfc53dd9c472d427b18dff705f93d13",
          5832: "d8f4112990b73818d388e87f4069d5f6",
          5859: "aa5a5ab4887dc57294434a7be8deaa99",
          6088: "70cd6bbf1588dc84d39c37b05d63ce8a",
          6130: "e5470ec9a68fc4306ca79f773e167585",
          6267: "1d93d641a9bf7d3972395d1a80e5f7c1",
          6280: "70d383d505235dc98862536b93a4d027",
          6285: "88832dd38073954882f8c39f41779b43",
          6321: "4794de351a234387f9a9be71f3a61187",
          6327: "dec43d34e2192ebfcd9448b7f46d6e15",
          6361: "765c1d7e1fed5cca5b7d5f0b36294741",
          6471: "1078656d2cecc3aa5cc5a2168970b90b",
          6664: "752f7c1246553baf55becaab6a1b5037",
          6833: "d59409f1df0c4e4399fcb24900de844e",
          6879: "5ba0136a41a56415d45dccd31daa15e0",
          6891: "2df434feb7913c13f11c78616049f1e2",
          6997: "d5b85bc3baef4643f1771d08c954ee53",
          7010: "d9bddc6cab78bf31982db1959fb8849d",
          7073: "2988cf0a2c4377ce6a408d69a881f944",
          7407: "6e7071ecc2db0f5132125a1d01b5412f",
          7436: "d888614431faceba20259e484c461241",
          7452: "49e0e7a28aa5e843af67ae5f0b42f81b",
          7453: "ccecd6498b678eda65f1ad049ec87278",
          7642: "d4daa0b0bb48e56dafd8b5aa3bdb1bfd",
          7785: "6496a5e8cd7b15dbeb7baf68b99c6f18",
          7970: "4b3a46f59bf260606b0586f67ea00cb3",
          8068: "fd1ab2e77ebaf3cfa9fb2b86154030bb",
          8240: "02af9f142d440ecbc45c825ac36c68ac",
          8272: "4fd80b49187428f05328eedc22a7a349",
          8325: "d511dec33669a2c97b11628618027598",
          8391: "be8b6ed66e081e9ab0eef5608ea91064",
          8431: "9d0eabfb2250e58b7b9fb830c1d2bf33",
          8503: "c6431f36ce850201dbbd0b15d78be362",
          8505: "4d43e9eab9e80243142de3154d157201",
          8659: "617b0524e00cad82b0c0ca6cad6ed643",
          8661: "af5d94887d0f7390a386d9853168c1a3",
          8702: "9cc6660f8ef7dd82643b7a9c57711382",
          8708: "5c4251c23bf0786cfdf00f38b4b9a211",
          8755: "0ae2c5fa8d533732e81d3a5aa88904cc",
          8845: "a8cf0fa34152d96b8ffdd06477d72a93",
          8880: "fd968ec81c44119e4548eb45024607e5",
          8938: "c2e8b9f410f81f30d170ff6628cc302e",
          8970: "3f3dc6acdb6672ca8f20bd6a8b32a22e",
          9022: "cc09b3a9d6a9429a5b5f14629b249115",
          9028: "2cb94197d1b97787ce40deb010939deb",
          9116: "c1e4948635571740fbbdaee55f3c2d66",
          9126: "f100b5a345a8f07ef4cef9118d2d3cd4",
          9377: "5e0a289a15f291c501c40fdfd4e7118c",
          9477: "10b7a233e5e2b98a9a85d6bb40322a5e",
          9587: "88acb19db85c281bc6574ef6bf2b9593",
          9615: "d703312e2ee2c45e7d5130b064ac27f7",
          9760: "d6ff426b4242156f1a7edeb67a673094",
          9936: "8579debadc9fd167fed2167ebaaf8dd2",
          9990: "98ee2bfe4996218ff0b40a87973979dc"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          59: "78d5cc4c5783f428f329035572c896cf",
          76: "537c3654e32745a846faf8bafb6e84bd",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "3af92259c369f40eec2a7d0f90f67d96",
          1125: "e940e33b19a2dacd5a6405d8eea0e912",
          2358: "165fa99f963184aba806d81f713ae37c",
          3438: "3af92259c369f40eec2a7d0f90f67d96",
          3866: "a5afda78cd9e8ba3533ac0f2bf4f063b",
          5040: "c30f3c8a99525fcaf9c0832853c3f081",
          6069: "ff5d40a08af069c8bbed595ff7e87c9b",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          8427: "64d7f9e177dae263f83a61669b860024",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8683: "ec396ec8a36762ae49c6722682ad4e04",
          9116: "ed78d69898cf7c75ad9f3c7f513105b2"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var d, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + r) {
                  d = s;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", c + r), d.src = e), f[e] = [a];
            var l = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var t = f[e];
                if (delete f[e], d.parentNode && d.parentNode.removeChild(d), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), n && document.head.appendChild(d)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          2358: [64064],
          3410: [11438, 17523, 44019, 83166],
          6536: [31879]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var t = o[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, n, o) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return n(b, c, o);
                    var s = b.then(e => n(e, c), d);
                    if (!o) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, t[1], r, 0, n, d),
                n = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, t[2], 0, 0, (e, a, r) => e ? f(i.I, t[0], 0, e, c, r) : d(), 1)
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
              var f = i.S[r],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var d = i(e);
                    if (!d) return;
                    var f = e => e && e.init && e.init(i.S[r], t);
                    if (d.then) return b.push(d.then(f, a));
                    var c = f(d);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (n("@foundry/react", "5.13.1", () => Promise.all([i.e(602), i.e(5021), i.e(6833), i.e(7642), i.e(3866), i.e(2229), i.e(8429), i.e(4572), i.e(4779)]).then(() => () => i(74514))), n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(5021), i.e(4488), i.e(6833), i.e(5827), i.e(2229), i.e(8429), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(8683), i.e(9477)]).then(() => () => i(89477))), n("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(5021), i.e(4488), i.e(6833), i.e(5827), i.e(840), i.e(2229), i.e(8429), i.e(5966), i.e(1788), i.e(9623), i.e(4572), i.e(1913), i.e(2918), i.e(2440), i.e(2424), i.e(59), i.e(8427)]).then(() => () => i(89600))), n("@rsgweb/modules-core-group-of-items", "1.0.0", () => Promise.all([i.e(4488), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then(() => () => i(90884))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(2229), i.e(6188), i.e(5966), i.e(9623), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5117), i.e(2229), i.e(8429), i.e(6188), i.e(5966), i.e(1788), i.e(6130), i.e(2918), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(2229), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(8702)]).then(() => () => i(58702))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("dompurify", "2.5.8", () => i.e(7785).then(() => () => i(27785))), n("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), n("react-jsx-parser", "2.4.1", () => Promise.all([i.e(3387), i.e(2229)]).then(() => () => i(43387))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(8429)]).then(() => () => i(15389))), n("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), n("text-balancer", "1.0.5", () => i.e(5400).then(() => () => i(75400))), o(25136), o(29441)), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
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
                  f = (typeof d)[0];
                if (t >= r.length) return "u" == f;
                var c = r[t],
                  n = (typeof c)[0];
                if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                if ("o" != f && "u" != f && d != c) return d < c;
                t++
              }
            },
            r = e => {
              var a = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, t += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return t
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var n = e[f];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : r(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, s, i = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (s = (typeof(b = r[c]))[0])) return !o || ("u" == i ? n > d && !f : "" == i != f);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (f ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || s < i != f) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, n--)
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
            d = (e, a) => e && i.o(e, a),
            f = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}),
            n = e => {
              throw new Error(e)
            },
            o = e => function(a, r, t, d, f) {
              var c = i.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, i.S[a], r, !1, d, f)) : e(a, i.S[a], r, t, d, f)
            },
            b = (e, a, r) => r ? r() : ((e, a) => n("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = o((e, o, s, i, l, u) => {
              if (!d(o, s)) return b(e, s, u);
              var h = ((e, r, d, f) => {
                var n = f ? c(e[r]) : e[r];
                return (r = Object.keys(n).reduce((e, r) => !t(d, r) || e && !a(e, r) ? e : r, 0)) && n[r]
              })(o, s, l, i);
              return h ? f(h) : u ? u() : void n(((e, a, t, d, f) => {
                var c = e[t];
                return "No satisfying version (" + r(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
              })(o, e, s, l, i))
            }),
            l = o((e, n, o, s, i, l) => {
              if (!d(n, o)) return b(e, o, l);
              var u, h = ((e, r, t) => {
                var d = t ? c(e[r]) : e[r];
                return Object.keys(d).reduce((e, r) => !e || !d[e].loaded && a(e, r) ? r : e, 0)
              })(n, o, s);
              return t(i, h) || (u = ((e, a, t, d) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + r(d) + ")")(n, o, h, i), "undefined" != typeof console && console.warn && console.warn(u)), f(n[o][h])
            }),
            u = {},
            h = {
              62229: () => s("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              18429: () => l("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              16188: () => s("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              95966: () => s("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(6321)]).then(() => () => i(58702))),
              81788: () => s("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              9623: () => s("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              4572: () => s("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              61913: () => s("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              2918: () => s("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(6188), i.e(9623), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              2973: () => s("default", "dompurify", !1, [1, 2, 4, 1], () => i.e(7785).then(() => () => i(27785))),
              92440: () => s("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([i.e(5117), i.e(8429), i.e(6188), i.e(1788), i.e(6130), i.e(2918), i.e(3438)]).then(() => () => i(99747))),
              20820: () => s("default", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([i.e(602), i.e(5021), i.e(7642), i.e(3866)]).then(() => () => i(74514))),
              61128: () => s("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              15310: () => s("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], () => i.e(8503).then(() => () => i(90884))),
              20206: () => s("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], () => Promise.all([i.e(5021), i.e(2424), i.e(5040)]).then(() => () => i(89600))),
              42602: () => s("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], () => Promise.all([i.e(5021), i.e(8683), i.e(1858)]).then(() => () => i(89477))),
              57770: () => s("default", "react-jsx-parser", !1, [1, 2, 2, 2], () => i.e(3387).then(() => () => i(43387))),
              97384: () => s("default", "text-balancer", !1, [1, 1, 0, 5], () => i.e(5400).then(() => () => i(75400)))
            },
            p = {
              59: [20820, 61128],
              1125: [15310, 20206, 42602, 57770, 97384],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4572: [4572],
              5966: [95966],
              6188: [16188],
              6536: [2973],
              8429: [18429],
              9623: [9623]
            },
            m = {};
          i.f.consumes = (e, a) => {
            i.o(p, e) && p[e].forEach(e => {
              if (i.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var r = a => {
                  u[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                m[e] = !0;
                var t = a => {
                  delete u[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = h[e]();
                  d.then ? a.push(u[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                59: 1,
                76: 1,
                884: 1,
                1057: 1,
                1125: 1,
                2358: 1,
                3438: 1,
                3866: 1,
                5040: 1,
                6069: 1,
                6536: 1,
                8427: 1,
                8503: 1,
                8683: 1,
                9116: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var c;
                      if ((d = (c = f[t]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
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
            6947: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2(229|440|918)|6(069|188|536)|8(42[79]|683)|1788|1913|4572|5040|5966|76|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [f, c, n] = r,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
});