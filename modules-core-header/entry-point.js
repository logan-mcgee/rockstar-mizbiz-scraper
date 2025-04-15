! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2c3a6fd2-7263-40a7-acd8-756b2587efe6", e._sentryDebugIdIdentifier = "sentry-dbid-2c3a6fd2-7263-40a7-acd8-756b2587efe6")
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
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, c, r, f, t, b = {
            24075: (e, a, d) => {
              (0, d(47387).w)(1)
            },
            47387: (e, a, d) => {
              const c = d(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = c(d.y.meta.url, e)
              }
            },
            45408: (e, a, d) => {
              d(24075)
            },
            13099: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var c = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, r = 0, f = c.length; r !== a && f >= 0;) "/" === c[--f] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var t = c.slice(0, f + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            84823: (e, a, d) => {
              "use strict";
              var c = {
                  "./core": () => Promise.all([d.e(7555), d.e(1720), d.e(5313), d.e(2229), d.e(4853), d.e(1222), d.e(4406), d.e(6682), d.e(5966), d.e(7780), d.e(1788), d.e(7195), d.e(2918), d.e(4902), d.e(2911), d.e(7683), d.e(80)]).then((() => () => d(80))),
                  "./GlobalNavigationWrapper": () => Promise.all([d.e(5313), d.e(2229), d.e(4853), d.e(1222), d.e(4406), d.e(5966), d.e(7780), d.e(1788), d.e(7195), d.e(4902), d.e(2911), d.e(6889)]).then((() => () => d(46889))),
                  "./vanilla": () => Promise.all([d.e(7555), d.e(1720), d.e(5313), d.e(2229), d.e(4853), d.e(6682), d.e(5966), d.e(1788), d.e(7195), d.e(2918), d.e(7683), d.e(4879)]).then((() => () => d(24879)))
                },
                r = (e, a) => (d.R = a, a = d.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                f = (e, a) => {
                  if (d.S) {
                    var c = "default",
                      r = d.S[c];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[c] = e, d.I(c, a)
                  }
                };
              d.d(a, {
                get: () => r,
                init: () => f
              })
            }
          },
          o = {};

        function l(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var d = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, l), d.loaded = !0, d.exports
        }
        return l.m = b, l.c = o, l.y = a, l.amdO = {}, l.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return l.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(a, c) {
          if (1 & c && (a = this(a)), 8 & c) return a;
          if ("object" == typeof a && a) {
            if (4 & c && a.__esModule) return a;
            if (16 & c && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          l.r(r);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var t = 2 & c && a;
            "object" == typeof t && !~e.indexOf(t); t = d(t)) Object.getOwnPropertyNames(t).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, l.d(r, f), r
        }, l.d = (e, a) => {
          for (var d in a) l.o(a, d) && !l.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((a, d) => (l.f[d](e, a), a)), [])), l.u = e => "js/" + {
          25: "66223434dc3fd16697a99cf44c23a8e3",
          80: "b7be91e32253be91ff1873386151fed3",
          100: "ed80f6da1f32a727c3f4fb911e2e81e7",
          131: "cba0c353109feb1a5843d01d3c69cfac",
          235: "7f2caadf74a47209381941515cf60f30",
          278: "bb4016828f5d005e49b14a4d777fdcad",
          299: "5459ba9bf90b66fa5d666bc155bbb190",
          314: "703999dbd44eeffe68da0eec172a00ed",
          377: "82aa80ef6ba2416d91896a0a08a1ea95",
          387: "3d093af732d5b4685d6abf14a47dc698",
          553: "61b02b0bea43a51961efb5f8f632f4b9",
          648: "6f932a10eb8a799aa0c756271c3e0fbb",
          662: "08289e1ed65d5022d96eb1c3d75a097c",
          716: "23ab0666312434b30c106f0dbec34198",
          721: "7196aa43cd93db26b6dc4ac428608916",
          786: "544a54578d33072aef31fda07b3b5f37",
          824: "a6a31388e9ee952cfb174f79c5956839",
          888: "08fb986f0de3cb59476ad23f105d9cd2",
          907: "6ffffd08835f1e8ebc2be91e873cea9a",
          969: "01a90249d7dc5d92c710a5811d56fa14",
          997: "ca30b6b9453a151294223ff654536e18",
          1054: "b9725d3b54ad132c6d80a5304ca43e94",
          1134: "b2a64059e58bf929c7f67607b12033ef",
          1222: "a311b7139afbc4b01de1be6651a2c016",
          1242: "0c54747543724e7d30411fb512205932",
          1252: "4f2f194648efa84348d501f11e488a8f",
          1315: "3b9f398929aa7b6b79f1986328ea3a8d",
          1365: "1709e4fc3794876954086d81c749d2ee",
          1474: "4dd61218cebcca2b37f8323504137579",
          1550: "91647662bcfcc2136d6c385df5cd10d2",
          1607: "31a139390477f29bbe9ead69f08e4c05",
          1673: "343e0456c598a7fcae9b505d02711089",
          1720: "22ff6f12ed7398e4ff3e6d9f1b628903",
          1735: "79517c7d04b90ba4883bce9332f21126",
          1763: "c25ca36e02c5bf02eb0f198a48a9b5a0",
          1788: "80b3bedd40be6b87b58529875d91cf8e",
          1822: "5d192959e9f52df839fa7d1abf8d82ae",
          1868: "e4a7dade67b53e44d6541bae46963298",
          1968: "43bc41351bdef3ecee11c844ecd47811",
          2024: "6991ca2d726c4d7340e0d4307b680bf0",
          2156: "41c1be5ac0f5e1925a8cf58b9a019e82",
          2171: "057d771ec5a3790f1bb7baf9ae3096bd",
          2221: "6440171e2e2dc5c0030816337b457df5",
          2229: "b378d04b4e35f05b2ff03797a33e8151",
          2243: "4603e533b677d322ddc1e24920512f9f",
          2294: "eec3a817ae771d2c9695d349d2f1ce00",
          2347: "4930a5ac0443de520d000debfa043103",
          2365: "8ef96df08e7041a5fe0ac650fbdf5092",
          2398: "2ff65c3407e90eeb6a3a4e6dd3a8db87",
          2466: "a032cc5d962de3dc906337174e5b75c1",
          2533: "752fadc848e6e93163bec2eb9ddb0944",
          2642: "1478593ece778e5111c67868de473a37",
          2678: "592419e34cae627e526795b43f8af9e3",
          2763: "35d302d705765d986906c3e1c4f4611c",
          2768: "d641a274f842d91b1560a83cd492e7ac",
          2864: "8f1cc8bd49f1cd68617ffd22e157909f",
          2911: "dd95a59742b2cb4c86ff52444cbe5127",
          2918: "e7b339e12193081d6373cf262792b5ae",
          2934: "53ec85b89c09ea65a74fed390b8504f7",
          2941: "44f2567584188641b7a3b659562bd719",
          3009: "2cd4f169d761525ef91dd4c05c607fea",
          3034: "bfb64d5c4aa64cd6eaf632038e71edfc",
          3197: "7e73212913db726d828d330fe0c44a3f",
          3315: "bef2f8630402819eda50f700bd928673",
          3343: "97fbf534b7bd8091bc6fdf30bb5d2114",
          3370: "ee4e0fb4548f5d2001ead83b5f8d4da2",
          3379: "ac954284c1f09973819356de820e524e",
          3386: "982164ab7e15dbcbd9b334ed8a8251dd",
          3447: "03c54b8796bbc54d06810e6c37cb532a",
          3475: "a91d480a29c49fa33da6fb17232c6379",
          3486: "492eb694a60678920510e43f3b17f080",
          3622: "359062f4b150a1303ad17be7d504d364",
          3694: "5214625641369eabcb130c2a269415a1",
          3696: "6cb69c379b3d152a5cbff3f66882937a",
          3697: "d804e9dc564a503f5ee0397e877969e0",
          3777: "0ea24a135fc735365df5c1b3818deeb2",
          3820: "c692ddb5d2fc2d1260309b2db5cf7d05",
          3855: "f3d79ab8de988a5635f50ce3b546de20",
          3885: "24cb2669fdd9c35b7ff01bea8273e116",
          3941: "bebff21684f1aebe53d0bc85beeedeb6",
          4011: "f82fdfa180ebe36e6f776ae8b8cdacbf",
          4018: "be89376fb1e1f815c23d5aeb2d5a2324",
          4054: "0e83bfd37aec67f3dc07b75340f7457d",
          4116: "c1f73a18b804dfbfa91591bc1eb12541",
          4144: "4894d7ce71c2f10dd584e6b4c05e7813",
          4186: "35d8f344d9723952c692fb11e22fb430",
          4220: "36afec6483d7972e3ca123aea97d0bcb",
          4255: "51fd40c6a4e649f57724569d9bedd09c",
          4262: "636159a053ac7627059a2c935103ec8f",
          4337: "013329de7a8f07eb7b969d7d28ab01a2",
          4406: "7dbefc086a53ce0def313160625a0880",
          4528: "0feb339a903897b3af481c9e5a5c0dce",
          4578: "6465fd2d49aec811d190e9e821fdbb21",
          4621: "b28bf666cd3e37cecaa95f7d7e2bfcac",
          4687: "836bfcc98cc940bd052e246709a26ccd",
          4700: "09342a43c0b70dd4d56018097a764d0f",
          4710: "bdce1e3351ad0552c50159017323f76a",
          4730: "247d553ac4ca5f26d8c45220e4ca5619",
          4731: "f24da7bf87e4eccc739c32a4a1d7755d",
          4799: "ef509c2ea0a9d4a8df2c10e73ab14995",
          4851: "3ebbd0e9e9349830a708d4842e7abe5a",
          4853: "18ffef5508dbbf483ae4c0a3acbb95fa",
          4861: "4b10579abd34c058993cada5fe282c01",
          4873: "1511e68279e1561140f42d69e9b025ba",
          4879: "2d151c0223e48f40233041026eab86ed",
          4902: "161298f7ba551acf7f8db4a968107535",
          4913: "374339b6daaf50126b2fd9d04dd2dd70",
          4914: "cd5685cb2de3dae748c3678c9c59bba8",
          4999: "08a007b926170e28118a89485c1e20cc",
          5018: "e9c5c6bc81723940d0bf6918403b9ee6",
          5144: "f88409e484b2510c2531c22e03c21c67",
          5187: "ab38511c44df76b303296c38ad1fd14c",
          5233: "8c1ffb45e18e7cdbd8df1bb6f6cb1eac",
          5247: "d86be4c3dc64333171587bacc80d0640",
          5254: "c6294464a47700a487df9b8c0204ef22",
          5259: "b8343cf905575e168a60f3f6872761b5",
          5313: "09a8a1f68b33d6626bdc49a29e0ddbd6",
          5390: "56b436a765461b44f3c88f60ba6ad399",
          5530: "f09e91fa690bf1eeda2ad3dc1a8517f1",
          5589: "6e05c3494e4117292d4661cb6b3fe84e",
          5633: "39fe6e477974dbc074d9c3138ff32fe8",
          5639: "287f996ec56ad2724424986a7f60271a",
          5663: "abd98129bb0f7244875be933161fdb2b",
          5741: "d977512ea2880feb35318ec559d26673",
          5742: "e24baa278cb3ef5be22621dcb4f77c6a",
          5783: "4eab663c6785944be3d65630edb672b5",
          5794: "fd9b1f4df91f8dbff67a232e51c17108",
          5795: "cd91e68148a940874c79fbdda36346a3",
          5830: "badc533f0bb0e1303a8358c9d9326bcf",
          5832: "80e4730494cf7f67e0bd7d5ce837724a",
          5966: "caca9fd6857f55e2664fa56995b167e8",
          6057: "4cdface30253bddbc04d99a431f17c43",
          6141: "e3254038f5ce8868c5aed86eaefa25ed",
          6158: "b6eedaddd021cfc98d03654799f00c66",
          6236: "bb9b2ee9ba85b33adf80a010cea8e2ae",
          6247: "d4345a7426920be5d333cb2e6f44b171",
          6267: "98e49bdffe5a68d66ffd0dcd43a62f91",
          6280: "233518fc3421f3a7573497a6542df32c",
          6285: "908ce9946e1b18c7bd6863be62419780",
          6349: "4ec4a858dead4937320914d9501e81e6",
          6361: "f48c926fccb2cbb47e84f56de55a5f60",
          6463: "e90dd5149d5db1f4487b9a12f4625140",
          6664: "3d9fa79d18d8f97fab2a85bfc0d13700",
          6682: "eb117b006e6a48c87b91bd48d1822ce4",
          6741: "d9ebaf9e3c3ee3ae5e60358867532798",
          6816: "72daddeaa63c119000b3ff5eedcf6527",
          6879: "8aeb1ee8664bf1bd4f1a512dbf92e579",
          6889: "0f481f4cb44bd4a2aa5a44d032eb8c22",
          6891: "bfaec0979d88f7fdbe440134a17f1b06",
          6940: "68f5c5aee6ca752d2374221050debf36",
          6997: "3d057f6774aeb97c53adce9cc316e45c",
          7010: "c5327f438bb760a321fb18c0152e95d1",
          7026: "5fca5dfbfbe795826a7fbdf1a10021b2",
          7039: "ff493ec5d57daa72277441330e7f9f15",
          7073: "1b85af87336d58bf18715ed8abae03a4",
          7195: "828638304b6b84000ac7a444c4b0f448",
          7344: "65905062ab67e8faea23fff5a4a75f94",
          7436: "b7fb17f91ce91d533196b895f126e350",
          7452: "17da2f22adff9186379c7a1d1d444e73",
          7453: "99f6e44f56092cd7f75ff181f0cdbd01",
          7492: "b08491fdd156bc90cc3517f385584bf5",
          7512: "d21c1b9d9076d4212d65f813d0d461eb",
          7555: "22e13ec0b0769d58e29b091ba50620e4",
          7568: "93855595bb8a539fd5d816d7bb757871",
          7683: "6870d8eccfe719fa48c7652d988777a7",
          7780: "a1c4c13de15e1fba5cec314994cefc74",
          7868: "8c562c53263500dfea896e0c943d10d8",
          7970: "0e467297adca1926d04e06e018485a64",
          8014: "f72f7a903ee85ad4bbc74b64ee750a60",
          8122: "2efc157eb76e75e68aaffa54d665df2f",
          8164: "512033fdd27ea9d03900375829f5a3c8",
          8176: "42309b3d9584b1114a97518e4f8f6332",
          8272: "282cf0e602f6e6edf6f969a3f2ca849c",
          8391: "59781987d18bc68e49bd8a5bbfb34aad",
          8438: "d199a23eb016def39c88e79064b91e73",
          8522: "2f121b4e5883d3f9dcdfed75cbcb5bac",
          8628: "0278771d467dced91a7c37e396aace46",
          8691: "2698b2301f1a10ef2650f2ed6f0fc2c1",
          8730: "5df7f542d0a5a37ff5fc36d1a248b29c",
          8755: "cc11c7c9669578698e89da3998c4f95c",
          8784: "4a7c387832f47a7184c0a1b359d55e75",
          8844: "21b37602b0a0b9d91922570c6c61fc59",
          8880: "7cca1aa5d8f99c4d1e724ad42566636c",
          8881: "556fb792a196deb013765b3bcd9f9df8",
          8970: "58137e4bf38f1a24bba739e166595db4",
          9022: "a65fd51f92f61d9649ca9b26350bfc1e",
          9028: "557dc97dd8b58175ee34261dcdde9ee9",
          9043: "b9f42d8a7e5e56ef6d3573845851d2ad",
          9093: "9a97bb2cfb11d32c7616958938e91fa9",
          9126: "a926df6a07255e3b83d00dd355f47ce2",
          9169: "f8dca49864cb9e539e4056d54d03e2ab",
          9235: "42ffefaada9e815354f7baff52783fc5",
          9377: "eddd249f5c6ff10031b7e51b1d583a91",
          9474: "62fd671a0035f8b80f36256720e941ab",
          9615: "3fec75051f276c2a88a9fc7f43c2fe42",
          9642: "3ca8f701bbeb9187f9e49276d040fe88",
          9690: "da9b08db957f2fd6cbd5c28cd026dd16",
          9913: "5454088b125e55a034ef6e4e1d6c1f08",
          9936: "8ede056937f334b426974fa4174b7647",
          9950: "bdb4b73af989d718ed02773f9b3541bc",
          9990: "299f93c5ef4ef6f6ca10fb02e1af1ca3"
        } [e] + ".js", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, r = "@rockstargames/modules-core-header:", l.l = (e, a, d, f) => {
          if (c[e]) c[e].push(a);
          else {
            var t, b;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var n = o[i];
                if (n.getAttribute("src") == e || n.getAttribute("data-webpack") == r + d) {
                  t = n;
                  break
                }
              }
            t || (b = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, l.nc && t.setAttribute("nonce", l.nc), t.setAttribute("data-webpack", r + d), t.src = e), c[e] = [a];
            var s = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var r = c[e];
                if (delete c[e], t.parentNode && t.parentNode.removeChild(t), r && r.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = s.bind(null, t.onerror), t.onload = s.bind(null, t.onload), b && document.head.appendChild(t)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, t = {}, l.f.remotes = (e, a) => {
          l.o(f, e) && f[e].forEach((e => {
            var d = l.R;
            d || (d = []);
            var c = t[e];
            if (!(d.indexOf(c) >= 0)) {
              if (d.push(c), c.p) return a.push(c.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), l.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                f = (e, d, f, t, b, o) => {
                  try {
                    var l = e(d, f);
                    if (!l || !l.then) return b(l, t, o);
                    var i = l.then((e => b(e, t)), r);
                    if (!o) return i;
                    a.push(c.p = i)
                  } catch (e) {
                    r(e)
                  }
                },
                b = (e, a, r) => f(a.get, c[1], d, 0, o, r),
                o = a => {
                  c.p = 1, l.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(l, c[2], 0, 0, ((e, a, d) => e ? f(l.I, c[0], 0, e, b, d) : r()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            a = {};
          l.I = (d, c) => {
            c || (c = []);
            var r = a[d];
            if (r || (r = a[d] = {}), !(c.indexOf(r) >= 0)) {
              if (c.push(r), e[d]) return e[d];
              l.o(l.S, d) || (l.S[d] = {});
              var f = l.S[d],
                t = "@rockstargames/modules-core-header",
                b = (e, a, d, c) => {
                  var r = f[e] = f[e] || {},
                    b = r[a];
                  (!b || !b.loaded && (!c != !b.eager ? c : t > b.from)) && (r[a] = {
                    get: d,
                    from: t,
                    eager: !!c
                  })
                },
                o = [];
              return "default" === d && (b("@foundry/icons", "3.5.9", (() => Promise.all([l.e(4255), l.e(4262), l.e(2229), l.e(7492), l.e(1365)]).then((() => () => l(4262))))), b("@popperjs/core", "2.11.8", (() => l.e(8691).then((() => () => l(48691))))), b("@radix-ui/react-accordion", "1.2.2", (() => Promise.all([l.e(8784), l.e(2229), l.e(4853), l.e(4406), l.e(6741), l.e(1252), l.e(3855)]).then((() => () => l(48784))))), b("@radix-ui/react-dialog", "1.1.1", (() => Promise.all([l.e(4578), l.e(2229), l.e(4853), l.e(1222), l.e(4406), l.e(9690), l.e(4337), l.e(8881)]).then((() => () => l(24578))))), b("@radix-ui/react-dialog", "1.1.6", (() => Promise.all([l.e(4873), l.e(2229), l.e(4853), l.e(4406), l.e(786), l.e(4902), l.e(9043), l.e(6236)]).then((() => () => l(54873))))), b("@radix-ui/react-id", "1.1.0", (() => Promise.all([l.e(2229), l.e(5187)]).then((() => () => l(95187))))), b("@radix-ui/react-navigation-menu", "1.2.3", (() => Promise.all([l.e(648), l.e(2229), l.e(4853), l.e(4406), l.e(6741), l.e(1252), l.e(3694), l.e(9093)]).then((() => () => l(40648))))), b("@radix-ui/react-popover", "1.1.4", (() => Promise.all([l.e(1134), l.e(5589), l.e(2229), l.e(4853), l.e(4406), l.e(6741), l.e(235), l.e(1474)]).then((() => () => l(15589))))), b("@radix-ui/react-portal", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(5795)]).then((() => () => l(95795))))), b("@radix-ui/react-portal", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(3777)]).then((() => () => l(16158))))), b("@radix-ui/react-portal", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(9169)]).then((() => () => l(49169))))), b("@radix-ui/react-portal", "1.1.3", (() => Promise.all([l.e(2229), l.e(4853), l.e(6741), l.e(387)]).then((() => () => l(40387))))), b("@radix-ui/react-portal", "1.1.4", (() => Promise.all([l.e(2229), l.e(4853), l.e(4730), l.e(8844)]).then((() => () => l(28844))))), b("@radix-ui/react-slot", "1.0.2", (() => Promise.all([l.e(2229), l.e(8522)]).then((() => () => l(38522))))), b("@radix-ui/react-slot", "1.1.0", (() => Promise.all([l.e(2229), l.e(4116)]).then((() => () => l(11735))))), b("@radix-ui/react-slot", "1.1.1", (() => Promise.all([l.e(2229), l.e(1763)]).then((() => () => l(14144))))), b("@radix-ui/react-slot", "1.1.1", (() => Promise.all([l.e(2229), l.e(4914)]).then((() => () => l(12533))))), b("@radix-ui/react-slot", "1.1.1", (() => Promise.all([l.e(2229), l.e(5390)]).then((() => () => l(3009))))), b("@radix-ui/react-slot", "1.1.2", (() => Promise.all([l.e(2229), l.e(2294)]).then((() => () => l(62294))))), b("@radix-ui/react-slot", "1.1.2", (() => Promise.all([l.e(2229), l.e(553)]).then((() => () => l(40553))))), b("@radix-ui/react-slot", "1.1.2", (() => Promise.all([l.e(2229), l.e(8014)]).then((() => () => l(58014))))), b("@radix-ui/react-visually-hidden", "1.0.3", (() => Promise.all([l.e(2229), l.e(4853), l.e(25), l.e(7026)]).then((() => () => l(87026))))), b("@radix-ui/react-visually-hidden", "1.1.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(8164)]).then((() => () => l(5783))))), b("@radix-ui/react-visually-hidden", "1.1.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(8122)]).then((() => () => l(68122))))), b("@radix-ui/react-visually-hidden", "1.1.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(5144)]).then((() => () => l(2763))))), b("@radix-ui/react-visually-hidden", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(6741), l.e(6247)]).then((() => () => l(18628))))), b("@radix-ui/react-visually-hidden", "1.1.2", (() => Promise.all([l.e(2229), l.e(4853), l.e(786), l.e(1315)]).then((() => () => l(71315))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(2024), l.e(2229), l.e(1673)]).then((() => () => l(85950))))), b("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([l.e(7555), l.e(4255), l.e(1134), l.e(9950), l.e(2229), l.e(4853), l.e(1222), l.e(4406), l.e(6682), l.e(5966), l.e(7780), l.e(1788), l.e(9690), l.e(2918), l.e(25), l.e(1968), l.e(4999)]).then((() => () => l(35110))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([l.e(7555), l.e(1720), l.e(2229), l.e(6682), l.e(5966), l.e(4687)]).then((() => () => l(66369))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(7555), l.e(2229), l.e(6682), l.e(3820)]).then((() => () => l(48267))))), b("classnames", "2.5.1", (() => l.e(3315).then((() => () => l(53315))))), b("framer-motion", "7.10.3", (() => Promise.all([l.e(9235), l.e(2229)]).then((() => () => l(19235))))), b("gsap", "0.0.0", (() => l.e(3379).then((() => () => l(33379))))), b("lodash", "4.17.21", (() => l.e(7868).then((() => () => l(17868))))), b("react-dom", "18.2.0", (() => Promise.all([l.e(5794), l.e(2229)]).then((() => () => l(5794))))), b("react-popper", "2.3.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(3386), l.e(6349)]).then((() => () => l(76349))))), b("react-remove-scroll", "2.5.7", (() => Promise.all([l.e(100), l.e(2229)]).then((() => () => l(80100))))), b("react-remove-scroll", "2.6.2", (() => Promise.all([l.e(7512), l.e(2229)]).then((() => () => l(47512))))), b("react-remove-scroll", "2.6.2", (() => Promise.all([l.e(2229), l.e(6057)]).then((() => () => l(38438))))), b("react-remove-scroll", "2.6.3", (() => Promise.all([l.e(6816), l.e(2229)]).then((() => () => l(46816))))), b("react-router-dom", "6.17.0", (() => Promise.all([l.e(4018), l.e(2229)]).then((() => () => l(54018))))), b("react", "18.2.0", (() => l.e(3447).then((() => () => l(13447))))), b("spatial-navigation-polyfill", "1.3.1", (() => l.e(716).then((() => () => l(90716)))))), e[d] = o.length ? Promise.all(o).then((() => e[d] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var a = l.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var c = d.length - 1; c > -1 && (!e || !/^http(s?):/.test(e));) e = d[c--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                c = d[1] ? a(d[1]) : [];
              return d[2] && (c.length++, c.push.apply(c, a(d[2]))), d[3] && (c.push([]), c.push.apply(c, a(d[3]))), c
            },
            a = (d, c) => {
              if (0 in d) {
                c = e(c);
                var r = d[0],
                  f = r < 0;
                f && (r = -r - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var l, i, n = b < d.length ? (typeof d[b])[0] : "";
                  if (t >= c.length || "o" == (i = (typeof(l = c[t]))[0])) return !o || ("u" == n ? b > r && !f : "" == n != f);
                  if ("u" == i) {
                    if (!o || "u" != n) return !1
                  } else if (o)
                    if (n == i)
                      if (b <= r) {
                        if (l != d[b]) return !1
                      } else {
                        if (f ? l > d[b] : l < d[b]) return !1;
                        l != d[b] && (o = !1)
                      }
                  else if ("s" != n && "n" != n) {
                    if (f || b <= r) return !1;
                    o = !1, b--
                  } else {
                    if (b <= r || i < n != f) return !1;
                    o = !1
                  } else "s" != n && "n" != n && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (t = 1; t < d.length; t++) {
                var h = d[t];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, c) : !u())
              }
              return !!u()
            },
            d = (d, c, r) => {
              var f = d[c];
              return (c = Object.keys(f).reduce(((d, c) => !a(r, c) || d && !((a, d) => {
                a = e(a), d = e(d);
                for (var c = 0;;) {
                  if (c >= a.length) return c < d.length && "u" != (typeof d[c])[0];
                  var r = a[c],
                    f = (typeof r)[0];
                  if (c >= d.length) return "u" == f;
                  var t = d[c],
                    b = (typeof t)[0];
                  if (f != b) return "o" == f && "n" == b || "s" == b || "u" == f;
                  if ("o" != f && "u" != f && r != t) return r < t;
                  c++
                }
              })(d, c) ? d : c), 0)) && f[c]
            },
            c = (e => function(a, d, c, r) {
              var f = l.I(a);
              return f && f.then ? f.then(e.bind(e, a, l.S[a], d, c, r)) : e(a, l.S[a], d, c, r)
            })(((e, a, c, r, f) => {
              var t = a && l.o(a, c) && d(a, c, r);
              return t ? (e => (e.loaded = 1, e.get()))(t) : f()
            })),
            r = {},
            f = {
              62229: () => c("default", "react", [1, 18, 2, 0], (() => l.e(3447).then((() => () => l(13447))))),
              44853: () => c("default", "react-dom", [1, 18, 2, 0], (() => l.e(5794).then((() => () => l(5794))))),
              21222: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(1735).then((() => () => l(11735))))),
              74406: () => c("default", "@radix-ui/react-id", [1, 1, 1, 0], (() => l.e(7568).then((() => () => l(95187))))),
              9623: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(4018).then((() => () => l(54018))))),
              16188: () => c("default", "lodash", [1, 4, 17, 21], (() => l.e(7868).then((() => () => l(17868))))),
              95966: () => c("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([l.e(7555), l.e(6682)]).then((() => () => l(48267))))),
              24036: () => c("default", "classnames", [1, 2, 5, 1], (() => l.e(3315).then((() => () => l(53315))))),
              81409: () => c("default", "@foundry/icons", [1, 3], (() => Promise.all([l.e(4255), l.e(4262), l.e(7492)]).then((() => () => l(4262))))),
              81788: () => c("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([l.e(2024), l.e(4054)]).then((() => () => l(85950))))),
              63582: () => c("default", "framer-motion", [1, 7, 5, 1], (() => l.e(9235).then((() => () => l(19235))))),
              79952: () => c("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => l.e(716).then((() => () => l(90716))))),
              2918: () => c("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([l.e(1720), l.e(7344)]).then((() => () => l(66369))))),
              34902: () => c("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => Promise.all([l.e(4730), l.e(6463)]).then((() => () => l(28844))))),
              9046: () => c("default", "@radix-ui/react-navigation-menu", [1, 1, 2, 1], (() => Promise.all([l.e(648), l.e(6741), l.e(1252), l.e(3694)]).then((() => () => l(40648))))),
              18425: () => c("default", "@radix-ui/react-dialog", [1, 1, 1, 6], (() => Promise.all([l.e(4873), l.e(786), l.e(9043)]).then((() => () => l(54873))))),
              42638: () => c("default", "@radix-ui/react-popover", [1, 1, 1, 4], (() => Promise.all([l.e(1134), l.e(5589), l.e(6741), l.e(235)]).then((() => () => l(15589))))),
              61339: () => c("default", "@radix-ui/react-accordion", [1, 1, 2, 2], (() => Promise.all([l.e(8784), l.e(6741), l.e(1252)]).then((() => () => l(48784))))),
              71925: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => Promise.all([l.e(786), l.e(3696)]).then((() => () => l(71315))))),
              13581: () => c("default", "gsap", [1, "workspace:^"], (() => l.e(3379).then((() => () => l(33379))))),
              20270: () => c("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([l.e(4255), l.e(1134), l.e(9950), l.e(1222), l.e(4406), l.e(7780), l.e(9690), l.e(25), l.e(1968)]).then((() => () => l(35110))))),
              75971: () => c("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([l.e(3386), l.e(8730)]).then((() => () => l(76349))))),
              7492: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => Promise.all([l.e(4853), l.e(1222), l.e(5783)]).then((() => () => l(5783))))),
              16741: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(3009).then((() => () => l(3009))))),
              91252: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(4144).then((() => () => l(14144))))),
              19690: () => c("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(100).then((() => () => l(80100))))),
              14337: () => c("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(8176).then((() => () => l(95795))))),
              30786: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(5633).then((() => () => l(58014))))),
              5959: () => c("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(6816).then((() => () => l(46816))))),
              69101: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(2934).then((() => () => l(40553))))),
              63694: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(8628).then((() => () => l(18628))))),
              31393: () => c("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(2768).then((() => () => l(40387))))),
              38291: () => c("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(7512).then((() => () => l(47512))))),
              58857: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(2533).then((() => () => l(12533))))),
              34730: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(9913).then((() => () => l(62294))))),
              42406: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(6141).then((() => () => l(38522))))),
              35755: () => c("default", "@radix-ui/react-dialog", [1, 1, 1, 6], (() => Promise.all([l.e(4578), l.e(4337)]).then((() => () => l(24578))))),
              47773: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(2763).then((() => () => l(2763))))),
              52072: () => c("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(6158).then((() => () => l(16158))))),
              53648: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(5741).then((() => () => l(68122))))),
              56679: () => c("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(1550).then((() => () => l(49169))))),
              75199: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(997).then((() => () => l(87026))))),
              84269: () => c("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(8438).then((() => () => l(38438))))),
              43386: () => c("default", "@popperjs/core", [1, 2, 11, 8], (() => l.e(8691).then((() => () => l(48691)))))
            },
            t = {
              25: [42406],
              235: [31393, 38291, 58857],
              786: [30786],
              1222: [21222],
              1252: [91252],
              1788: [81788],
              1968: [35755, 47773, 52072, 53648, 56679, 75199, 84269],
              2229: [62229],
              2911: [9046, 18425, 42638, 61339, 71925],
              2918: [2918],
              3386: [43386],
              3694: [63694],
              4337: [14337],
              4406: [74406],
              4730: [34730],
              4853: [44853],
              4902: [34902],
              5966: [95966],
              6682: [9623, 16188],
              6741: [16741],
              7195: [63582, 79952],
              7492: [7492],
              7683: [13581, 20270, 75971],
              7780: [24036, 81409],
              9043: [5959, 69101],
              9690: [19690]
            },
            b = {};
          l.f.consumes = (e, a) => {
            l.o(t, e) && t[e].forEach((e => {
              if (l.o(r, e)) return a.push(r[e]);
              if (!b[e]) {
                var d = a => {
                  r[e] = 0, l.m[e] = d => {
                    delete l.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var c = a => {
                  delete r[e], l.m[e] = d => {
                    throw delete l.c[e], a
                  }
                };
                try {
                  var t = f[e]();
                  t.then ? a.push(r[e] = t.then(d).catch(c)) : d(t)
                } catch (e) {
                  c(e)
                }
              }
            }))
          }
        })(), (() => {
          l.b = document.baseURI || self.location.href;
          var e = {
            4295: 0
          };
          l.f.j = (a, d) => {
            var c = l.o(e, a) ? e[a] : void 0;
            if (0 !== c)
              if (c) d.push(c[2]);
              else if (/^(1(222|252|788)|2(229|35|5|918)|4(337|406|730|853|902)|7(492|780|86)|3386|3694|5966|6741|9043|9690)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise(((d, r) => c = e[a] = [d, r]));
              d.push(c[2] = r);
              var f = l.p + l.u(a),
                t = new Error;
              l.l(f, (d => {
                if (l.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var r = d && ("load" === d.type ? "missing" : d.type),
                    f = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + r + ": " + f + ")", t.name = "ChunkLoadError", t.type = r, t.request = f, c[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var c, r, f = d[0],
                t = d[1],
                b = d[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (c in t) l.o(t, c) && (l.m[c] = t[c]);
                b && b(l)
              }
              for (a && a(d); o < f.length; o++) r = f[o], l.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), l.nc = void 0, l(45408), l(84823)
      })())
    }
  }
}));