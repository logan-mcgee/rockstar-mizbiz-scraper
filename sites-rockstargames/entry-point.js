! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "24cf2c0e-1b9b-4676-88ad-2994265a06eb", e._sentryDebugIdIdentifier = "sentry-dbid-24cf2c0e-1b9b-4676-88ad-2994265a06eb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-header", "@rockstargames/modules-core-footer", "@rockstargames/sites-rockstar-tv", "@rockstargames/sites-gta-tv", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-gen9", "@rockstargames/modules-core-gif-viewer", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-careers", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-gta", "@rockstargames/modules-core-videoplayer", "@rockstargames/modules-core-newswire-article"], (function(e, a) {
  var c = {},
    f = {},
    d = {},
    t = {},
    r = {},
    b = {},
    o = {},
    n = {},
    s = {},
    i = {},
    l = {},
    u = {},
    h = {},
    p = {};
  return Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(b, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(l, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "__esModule", {
    value: !0
  }), Object.defineProperty(h, "__esModule", {
    value: !0
  }), Object.defineProperty(p, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        b[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        o[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        n[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        s[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        i[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        l[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        u[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        h[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        p[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, m, g, y, v, w, k = {
            24075: (e, a, c) => {
              (0, c(47387).w)(1)
            },
            47387: (e, a, c) => {
              const f = c(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !c.y.meta || !c.y.meta.url) throw console.error("__system_context__", c.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                c.p = f(c.y.meta.url, e)
              }
            },
            45408: (e, a, c) => {
              c(24075)
            },
            13099: (e, a, c) => {
              a.y = function(e, a) {
                var c = document.createElement("a");
                c.href = e;
                for (var f = "/" === c.pathname[0] ? c.pathname : "/" + c.pathname, d = 0, t = f.length; d !== a && t >= 0;) "/" === f[--t] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var r = f.slice(0, t + 1);
                return c.protocol + "//" + c.host + r
              };
              Number.isInteger
            },
            95400: (e, a, c) => {
              "use strict";
              var f = {
                  "./bootstrap": () => c.e(5672).then((() => () => c(45672)))
                },
                d = (e, a) => (c.R = a, a = c.o(f, e) ? f[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), c.R = void 0, a),
                t = (e, a) => {
                  if (c.S) {
                    var f = "default",
                      d = c.S[f];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return c.S[f] = e, c.I(f, a)
                  }
                };
              c.d(a, {
                get: () => d,
                init: () => t
              })
            },
            62137: e => {
              "use strict";
              e.exports = f
            },
            29441: e => {
              "use strict";
              e.exports = o
            },
            39247: e => {
              "use strict";
              e.exports = c
            },
            66819: e => {
              "use strict";
              e.exports = p
            },
            25136: e => {
              "use strict";
              e.exports = h
            },
            98674: e => {
              "use strict";
              e.exports = s
            },
            71127: e => {
              "use strict";
              e.exports = u
            },
            11955: e => {
              "use strict";
              e.exports = b
            },
            58678: e => {
              "use strict";
              e.exports = r
            },
            94316: e => {
              "use strict";
              e.exports = t
            },
            40308: e => {
              "use strict";
              e.exports = i
            },
            40041: e => {
              "use strict";
              e.exports = n
            },
            50644: e => {
              "use strict";
              e.exports = l
            },
            74251: e => {
              "use strict";
              e.exports = d
            }
          },
          _ = {};

        function P(e) {
          var a = _[e];
          if (void 0 !== a) return a.exports;
          var c = _[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(c.exports, c, c.exports, P), c.loaded = !0, c.exports
        }
        return P.m = k, P.c = _, P.y = a, P.amdO = {}, P.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return P.d(a, {
            a
          }), a
        }, m = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(a, c) {
          if (1 & c && (a = this(a)), 8 & c) return a;
          if ("object" == typeof a && a) {
            if (4 & c && a.__esModule) return a;
            if (16 & c && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          P.r(f);
          var d = {};
          e = e || [null, m({}), m([]), m(m)];
          for (var t = 2 & c && a;
            "object" == typeof t && !~e.indexOf(t); t = m(t)) Object.getOwnPropertyNames(t).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, P.d(f, d), f
        }, P.d = (e, a) => {
          for (var c in a) P.o(a, c) && !P.o(e, c) && Object.defineProperty(e, c, {
            enumerable: !0,
            get: a[c]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce(((a, c) => (P.f[c](e, a), a)), [])), P.u = e => "js/" + {
          40: "a9906b38ecd7f26cc65975679fd0e640",
          131: "b9d45d18198d55524549ff89a46f0771",
          188: "175b3492fe63bc7112d35f3491ec5b2e",
          220: "68042ccb1ae9b103ec6cdd3a407c3e36",
          278: "209e7c652958878f5c3de3da4ea84327",
          299: "c45310eea69a82b9134ced85173156ca",
          314: "aa266f4c9529864a4e37de158463edca",
          350: "b3098d4fd891cf8417f12e5da06fb5c3",
          561: "0c859656e08ea3d2f7454b3f8be1b48b",
          582: "86ab56c4f8b229d2be3bf36e806736d1",
          621: "a905406bdce0d88fd856e09069aeb876",
          633: "2e753ae8ca6ee1cfbd4178dee6d7336f",
          662: "da327c2e330b0d5ba2002b7e7f80ec0d",
          721: "f19b38de549f7db359952239388cfeac",
          824: "951022257158a56d2ed8d801a44d25f6",
          907: "4d6cdb3c2927ed4d0c16d2ead7f37d44",
          1054: "e8595f3acee3234c5049723b1bf1c729",
          1144: "dd7f4a7d1f966b6c7ba90a0beefba57b",
          1201: "feb3a479c5293f23b16a6bb493f88283",
          1212: "88d97369ea98399a3691bcdfbda069b3",
          1235: "2c5419b59306cc7d8f47372e8bc51192",
          1242: "10ff9dc9aeaf49ca7af13351771cd2b7",
          1299: "ad0dc26e64ccbb83a8d7dd1955a5da61",
          1324: "4d2c1fa58e4032d28c95faf02876fccf",
          1626: "1a821a20005818702c8126fb54dfe381",
          1667: "35d7fe2671c3d85c4b8353fa08bf5f5c",
          1673: "ff89c71a1e4220c9dfa1ee300fe4414b",
          1720: "c2f7e8daab9157cf575a740a78205dc8",
          1723: "33c1a879524032e698ec509ea244d81a",
          1735: "266f5a26c9b9ec356e5d6fb93d80ef7e",
          1794: "7f44485d7ba05864492f8f0cc37aedac",
          1822: "55cf93f366e511b7eebf929183371da2",
          1868: "b94181347e1255cd2f9ad31cc812baab",
          1911: "f4d5cfd26f858d8aa1ef467ce6ebfcb3",
          1962: "9e34a9cdd2e7f27c5cd62dcc2a960c53",
          2024: "b3f41927477eabfeeb81d60a2665122a",
          2156: "d543603e61719da53ab64a7b3a45d4f4",
          2158: "f6b1795ee7c8e6f63040b5ecfe92e67d",
          2171: "2a445e83a102051801b140d7991fb98c",
          2185: "dcbe55ed0431cd952dd6ab437aa199b4",
          2202: "1c0247a3a3b881f7f5c16adda5b6e272",
          2221: "7f72a719235b29040f6c8c79d0889b62",
          2229: "09cc5d89bb04255826f1ae50a462ddda",
          2234: "abf2cc37dc3c15e82730b1afd1378031",
          2243: "35c50c73ded392a72710c758abcd5061",
          2246: "794e3bec230e908bb67d463626857683",
          2347: "d8a42320e264e5b660a6c69206bf2cdb",
          2365: "1a2953c31dcd739e46df6bf4ade21408",
          2398: "4457cb56e159b5b4e608a173fb20e1a1",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2466: "9e78399853cdba89981b986ac75c2247",
          2642: "8c8aba19f8427158d45fb45a96d0146b",
          2678: "cce60e70b346c2f0842c535a8c21725d",
          2681: "ca123182ea679e65eb97ff7b29e76758",
          2718: "3d33aee66254308efdf21a1ee71ccf24",
          2781: "37cc0e675fbe927179eec6a2609f4dab",
          2817: "7009254b01546b605ac9c2f68e534139",
          2824: "c77eeec7c135879640b814b334a65d14",
          2843: "b7156a0389ab4001920e72f4c418253a",
          2864: "61a2a56dfc3d3d8542d827c7069e2881",
          2973: "01b69540ffb90dd2d3c6b068f9ef462a",
          3002: "a665e7c8d4990e1219386740bfb88330",
          3034: "23f56638dd380b2ae246505d1faa260a",
          3035: "655be4c1c44a63e258652d73865262dc",
          3037: "e2dae7b6c402ee48478f9ae4f28e0465",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3197: "fe451c6b5464cad9683c74174b6f1262",
          3213: "205fe2929653424fc55178dfd74464d8",
          3241: "f549dd20c688be6ae33a2bd650860071",
          3274: "77a24bbcd5b87e42815eb55bebca3267",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3343: "c8f1e97f593dc4e44fa52eb2c3a54ff5",
          3370: "02d6a852d1841c7783a4170133a2527e",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3447: "ecd5e55fb5a0f405d17887636db420ee",
          3475: "6da9ff9f08eac4e5323608ee098df2ff",
          3486: "4addd27b8b1878f533429895c2782598",
          3511: "825250ac005faac98b61c6ad17ab72ed",
          3557: "c3382a8537281f626a488fb1f788a944",
          3582: "38f88632ffc3578f584068a1bee1116e",
          3697: "ffdd3b0243e984d97792df3ff38db091",
          3733: "1e7489f6d0dc7b30294d190762e080c5",
          3806: "718737cf599681190fb1fc7e88b54bf8",
          3855: "9e09ed627d79a1877538ded79a78e72a",
          3885: "8b70f92e27d9964717f071d4450c7c12",
          3914: "7027c1487af97cfee4a2049c75cfe09e",
          3941: "d434c5e58788085c6675a41b3e19ec65",
          4011: "c11fcf713ad667fd99612275303e7bdc",
          4054: "ea5112f55521dc892959904fd8c6370c",
          4116: "6e8100477b60e2d8eca8322c64666d2a",
          4255: "1a5312daaa49d5053d698323cda677b4",
          4281: "b01d57b5747950dab8b37eb5d0bd3d81",
          4459: "9bf2158e6a3864bb9b67b11e665f79d1",
          4505: "964bf560c4b260fbe1070e4af2610153",
          4528: "fc816103f9fe62298a9603e428ce8599",
          4621: "730ad2f1824a9a11ad8305a7d29d663d",
          4700: "835dba24f5c264a7ad4c02396eee352a",
          4710: "7c876937c8e4f8694b8b320f3307d940",
          4731: "4efe9d270a9071d86551a3280c35ad34",
          4783: "64d3dde00b7eed2fbc8c30edc39335a6",
          4799: "520e0bf1821881ca9179ad4c841bba7f",
          4841: "833d776be674c4aa6f91fe4874c0323f",
          4851: "302b4f4ccfd96a6ba18693376decee02",
          4853: "7e139007b68c46b106bb429ce0dba4c3",
          4861: "cc8a7b6f000b68fd8b6a14d9c3d4bb37",
          4913: "81abe78bd36828685ca9594d4939e167",
          4963: "5fd1b80c581aa587a4bda789cf477279",
          4967: "e16c50c550815c095ce1d04c7eafa655",
          5018: "33ce5fa738e097b10279f50805b6ba15",
          5019: "9570af039922adc054fd4d59a07a7a58",
          5045: "da50742ed61b259856a115a09a578c55",
          5075: "ec0cf2feade4fb575ea0666cdf54b26a",
          5142: "ab19b3014896927b13b0af8b84e0b79e",
          5162: "2af53a97620a9a28ad0aa07a09ef0093",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5233: "403c4b360a109bfe90b7734f643412bb",
          5254: "18dbde681f25d5338b0107f4d61004d2",
          5259: "d99a31b199844fc32171b60010450e39",
          5261: "310366b8ce46db5671c371250224d77e",
          5363: "c6021bda1ba9349956c0a3247bc14bba",
          5388: "d4d670a5fbdd36cbcd7fd1863729e1a5",
          5440: "89d9b664225eff19a1c544b157824929",
          5442: "8232277c370cffa1ad9728e04798b7c2",
          5447: "87226dbbbd8febe1f879f0bae040c81b",
          5499: "84e0187d0faab8f8152dcd1cc91868c8",
          5530: "eb2a6e5cccb4a3dedcf4647852373c6e",
          5633: "5d3b92bc0ac3a844b4c156a363a9d72b",
          5639: "6cefa64477e6ba801ab347712ba900ab",
          5652: "be1e6f909c9f768ee49e48e9541ea0d0",
          5663: "0c9b08b9f05277921cb5fc564af66d43",
          5672: "32037cf75bd5a25dd5d54f05543c254a",
          5742: "ac91480d995e2819d216543f8f09ecd0",
          5765: "616ddd1296d445b62e6baecf95f64787",
          5794: "96ac85cb9875578ddd202036af910531",
          5830: "ab73ce29de2c8ed609ca6c820bb8ed2d",
          5832: "ea3bd8010971a86060458dca90fd6d79",
          5833: "71ed11fc843cbf573711fe25419129d5",
          5881: "8906e6ea982d29ad731bf006efd79454",
          5918: "990946eb9a52f9fc74444910856fdb12",
          5966: "4b83c618f3ebfdee22c2cd5e3d2332f6",
          5981: "ed6b3a8859679185c14ccd3ecaac3320",
          6035: "c59b278dc25df658f77796ff64aa0c82",
          6267: "6d03f12fb5f49324c55fbd14eba1b764",
          6274: "5043af8f1e551169dd8a3581424eb1c3",
          6280: "9708316c63906495557242dca4b4826f",
          6285: "83300a9b067cb825eb3136ff75f642d3",
          6361: "3ea241ed8cbbe6184b3ef7f480cb6ea5",
          6383: "b862690b5a5405292eb8001731cea336",
          6401: "86e15c8ca9ec01bbd3d9a7596fc7957d",
          6407: "0afb2b9e4e91d371987a6f94ec9197c3",
          6536: "48d36ce899bfa67065aedff038451023",
          6612: "ec6283fcf67159b7a4c1f8c587b3a61b",
          6664: "f60356850a5bf16dfff79eea2010b1dc",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6840: "fa28556dccbfa5e9a5c17f32ea623c40",
          6879: "e714be0d0326c64d4fa0630146750bd9",
          6891: "465f5b804207ae5f8a635562e4f8e269",
          6893: "c4558219f908f55c1ab4da44d0bdb081",
          6973: "9246313ca0b4d2cb7c8d31462f3244b7",
          6997: "adc1a52de5b0f258547754fa1ceda38d",
          7010: "499c34986b46ed9fb1c2dc42581476b9",
          7040: "27ae8d5d31e54b663a793290b94502f5",
          7057: "62fb36cbcd3a9cdae7c27f9ab9b6a564",
          7073: "ac7af3a4bfdc326718f277efa7d33000",
          7145: "9b8d6e4bcb13053d136492e8d61a6e2d",
          7214: "f364a6b9dff1c2b143327478e755bcea",
          7269: "e5ecfdb38c85819a4c529f512e0f76eb",
          7339: "c7412d20fd3004d37d2b3150675764e3",
          7344: "47bd8186618f00bb4b642165383d80ec",
          7436: "586017e1b3c553735f8614133e9c4a7f",
          7452: "a0502ea881f16fded1d91922dfea760d",
          7453: "e4b55c33ced27e56f4bea5f09fa63cbf",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7547: "22c0d98c6d3e1f3c159ef3eff775da62",
          7575: "c689abb6f323d054f1e7af86b6aa4329",
          7587: "521029a72d4b2943d4484234ba767a93",
          7642: "63e5b0bd31f6b77e937903adbb30e342",
          7744: "104ccfaa9281edbc6f3651e29de625e6",
          7851: "f99ce05d086da3cdc25c2360484d8e92",
          7970: "d1f5c26059057e0a6caec3de6ef183d9",
          8069: "ffa55044016f0b3580a9c861812e50d0",
          8272: "0ef656bc8afeebebbf0cce43e347c79a",
          8292: "9d606770f4877528a1d5ada277e9db7d",
          8386: "e0989f0f0b10658aaea600450fc84004",
          8391: "2b8a9dd6b1d06707a4e7ee2bb7179e8d",
          8755: "c7dd3779f397096cd48027e8bc9d618f",
          8764: "b7a959c972d759905fdafd33cda33205",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8786: "b9d6d97d17c01b3b5e2545a120614cfe",
          8880: "273ca4053f36cde695b6dc366ace7346",
          8970: "79803d78920d7b8a85df15030a1401b1",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9022: "8095af82bc63fbfa5346263ad3234687",
          9028: "2696d4051bd5b154c233b33c017409a6",
          9081: "ba1feb6b9f88a18a2f3261bc21d47fd4",
          9126: "b56f6d3d378ceb2c25b28b9cf80f7861",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9214: "a0af77a9419301f96702abe4a6135c88",
          9235: "64fc83ad009f7deac840d41853f7af77",
          9323: "23657f2c68b2f80bc6257c43ebcf0630",
          9339: "b6a59eb72145f18aa14858ffbe7e869f",
          9377: "3cba69b477af5be31d255178438da321",
          9441: "b4128637593e044528f803d5bb175e51",
          9615: "5a605d01a78e3e7a49ca81535ccf1252",
          9623: "e677c6c8770a217b9e503ab3ec900c20",
          9775: "0866f236cf81c6150fac42e696f9b6d5",
          9834: "264de06979bbbd73e718e932af810360",
          9873: "f5bcbfe2741dddb6750d6f52b6beac3c",
          9936: "fefc9056f461599d777d9d803b7a4196",
          9990: "b186c8d7a0823eda94a995b980c9c563"
        } [e] + ".js", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), g = {}, y = "@rockstargames/sites-rockstargames:", P.l = (e, a, c, f) => {
          if (g[e]) g[e].push(a);
          else {
            var d, t;
            if (void 0 !== c)
              for (var r = document.getElementsByTagName("script"), b = 0; b < r.length; b++) {
                var o = r[b];
                if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == y + c) {
                  d = o;
                  break
                }
              }
            d || (t = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, P.nc && d.setAttribute("nonce", P.nc), d.setAttribute("data-webpack", y + c), d.src = e), g[e] = [a];
            var n = (a, c) => {
                d.onerror = d.onload = null, clearTimeout(s);
                var f = g[e];
                if (delete g[e], d.parentNode && d.parentNode.removeChild(d), f && f.forEach((e => e(c))), a) return a(c)
              },
              s = setTimeout(n.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = n.bind(null, d.onerror), d.onload = n.bind(null, d.onload), t && document.head.appendChild(d)
          }
        }, P.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, P.nmd = e => (e.paths = [], e.children || (e.children = []), e), v = {
          40: [94057],
          1626: [41626],
          2185: [31879],
          2405: [12405],
          3137: [53137],
          3326: [43326],
          3416: [33416],
          3511: [9566],
          5202: [35202],
          5388: [39848, 41263],
          6766: [36766],
          7538: [47538],
          8778: [78778],
          8987: [88987],
          9147: [29147]
        }, w = {
          9566: ["default", "./index", 66819],
          12405: ["default", "./index", 58678],
          29147: ["default", "./index", 50644],
          31879: ["default", "./index", 25136],
          33416: ["default", "./index", 40041],
          35202: ["default", "./site-routes/Bully", 40308],
          36766: ["default", "./index", 11955],
          39848: ["default", "./root", 62137],
          41263: ["default", "./core", 39247],
          41626: ["default", "./lazy", 29441],
          43326: ["default", "./destination", 71127],
          47538: ["default", "./site-routes/RedDeadRedemption", 40308],
          53137: ["default", "./index", 98674],
          78778: ["default", "./index", 74251],
          88987: ["default", "./index", 94316],
          94057: ["default", "./utils", 11955]
        }, P.f.remotes = (e, a) => {
          P.o(v, e) && v[e].forEach((e => {
            var c = P.R;
            c || (c = []);
            var f = w[e];
            if (!(c.indexOf(f) >= 0)) {
              if (c.push(f), f.p) return a.push(f.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), P.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                t = (e, c, t, r, b, o) => {
                  try {
                    var n = e(c, t);
                    if (!n || !n.then) return b(n, r, o);
                    var s = n.then((e => b(e, r)), d);
                    if (!o) return s;
                    a.push(f.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                r = (e, a, d) => t(a.get, f[1], c, 0, b, d),
                b = a => {
                  f.p = 1, P.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(P, f[2], 0, 0, ((e, a, c) => e ? t(P.I, f[0], 0, e, r, c) : d()), 1)
            }
          }))
        }, (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (c, f) => {
            f || (f = []);
            var d = a[c];
            if (d || (d = a[c] = {}), !(f.indexOf(d) >= 0)) {
              if (f.push(d), e[c]) return e[c];
              P.o(P.S, c) || (P.S[c] = {});
              var t = P.S[c],
                r = "@rockstargames/sites-rockstargames",
                b = (e, a, c, f) => {
                  var d = t[e] = t[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!f != !b.eager ? f : r > b.from)) && (d[a] = {
                    get: c,
                    from: r,
                    eager: !!f
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var d = P(e);
                    if (!d) return;
                    var t = e => e && e.init && e.init(P.S[c], f);
                    if (d.then) return n.push(d.then(t, a));
                    var r = t(d);
                    if (r && r.then) return n.push(r.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === c && (b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(9441), P.e(5447), P.e(2229), P.e(4853), P.e(1735)]).then((() => () => P(15447))))), b("@foundry/icons", "4.0.2", (() => Promise.all([P.e(9441), P.e(5075), P.e(2229), P.e(4853), P.e(4116)]).then((() => () => P(55075))))), b("@foundry/react-v1", "1.28.2", (() => Promise.all([P.e(6035), P.e(9441), P.e(350), P.e(1720), P.e(2229), P.e(4853), P.e(1911), P.e(3855)]).then((() => () => P(20350))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([P.e(2024), P.e(2229), P.e(1673)]).then((() => () => P(85950))))), b("@rsgweb/modules-core-screenshot-viewer", "0.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(1201)]).then((() => () => P(71201))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([P.e(6035), P.e(3806), P.e(5442), P.e(9339), P.e(2229), P.e(9623), P.e(2246), P.e(5966), P.e(7344)]).then((() => () => P(66369))))), b("@rsgweb/router", "1.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(2781)]).then((() => () => P(42781))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([P.e(5442), P.e(8292), P.e(2229), P.e(4853), P.e(5966), P.e(9834), P.e(4281), P.e(4967)]).then((() => () => P(99834))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([P.e(6035), P.e(3806), P.e(5442), P.e(2229), P.e(9623), P.e(2246)]).then((() => () => P(17560))))), b("dompurify", "2.4.7", (() => P.e(561).then((() => () => P(20561))))), b("framer-motion", "7.10.3", (() => Promise.all([P.e(9235), P.e(2229), P.e(1299)]).then((() => () => P(19235))))), b("graphql", "16.10.0", (() => P.e(5440).then((() => () => P(55440))))), b("history", "4.10.1", (() => P.e(7642).then((() => () => P(7642))))), b("prop-types", "15.8.1", (() => P.e(2817).then((() => () => P(72817))))), b("react-adaptive-hooks", "0.0.8", (() => Promise.all([P.e(2229), P.e(3002)]).then((() => () => P(73002))))), b("react-device-detect", "2.2.3", (() => Promise.all([P.e(2158), P.e(2229)]).then((() => () => P(12158))))), b("react-dom", "18.2.0", (() => Promise.all([P.e(5794), P.e(2229)]).then((() => () => P(5794))))), b("react-focus-lock", "2.9.6", (() => Promise.all([P.e(9775), P.e(2229), P.e(7145), P.e(3035)]).then((() => () => P(19775))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([P.e(2229), P.e(6383)]).then((() => () => P(56383))))), b("react-intersection-observer", "9.13.1", (() => Promise.all([P.e(2229), P.e(5363)]).then((() => () => P(95363))))), b("react-router-dom", "6.17.0", (() => Promise.all([P.e(4255), P.e(6407), P.e(2229), P.e(3213)]).then((() => () => P(6407))))), b("react-router", "6.17.0", (() => Promise.all([P.e(4255), P.e(6612), P.e(2229)]).then((() => () => P(96612))))), b("react", "18.2.0", (() => P.e(3447).then((() => () => P(13447))))), o(62137), o(39247), o(71127), o(50644), o(40308), o(98674), o(40041), o(29441), o(11955), o(58678), o(94316), o(66819), o(74251), o(25136)), n.length ? e[c] = Promise.all(n).then((() => e[c] = 1)) : e[c] = 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var c = a.getElementsByTagName("script");
            if (c.length)
              for (var f = c.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = c[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                c = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = c[1] ? a(c[1]) : [];
              return c[2] && (f.length++, f.push.apply(f, a(c[2]))), c[3] && (f.push([]), f.push.apply(f, a(c[3]))), f
            },
            a = (c, f) => {
              if (0 in c) {
                f = e(f);
                var d = c[0],
                  t = d < 0;
                t && (d = -d - 1);
                for (var r = 0, b = 1, o = !0;; b++, r++) {
                  var n, s, i = b < c.length ? (typeof c[b])[0] : "";
                  if (r >= f.length || "o" == (s = (typeof(n = f[r]))[0])) return !o || ("u" == i ? b > d && !t : "" == i != t);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (b <= d) {
                        if (n != c[b]) return !1
                      } else {
                        if (t ? n > c[b] : n < c[b]) return !1;
                        n != c[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (t || b <= d) return !1;
                    o = !1, b--
                  } else {
                    if (b <= d || s < i != t) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < c.length; r++) {
                var h = c[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, f) : !u())
              }
              return !!u()
            },
            c = (c, f, d) => {
              var t = c[f];
              return (f = Object.keys(t).reduce(((c, f) => !a(d, f) || c && !((a, c) => {
                a = e(a), c = e(c);
                for (var f = 0;;) {
                  if (f >= a.length) return f < c.length && "u" != (typeof c[f])[0];
                  var d = a[f],
                    t = (typeof d)[0];
                  if (f >= c.length) return "u" == t;
                  var r = c[f],
                    b = (typeof r)[0];
                  if (t != b) return "o" == t && "n" == b || "s" == b || "u" == t;
                  if ("o" != t && "u" != t && d != r) return d < r;
                  f++
                }
              })(c, f) ? c : f), 0)) && t[f]
            },
            f = (e => function(a, c, f, d) {
              var t = P.I(a);
              return t && t.then ? t.then(e.bind(e, a, P.S[a], c, f, d)) : e(a, P.S[a], c, f, d)
            })(((e, a, f, d, t) => {
              var r = a && P.o(a, f) && c(a, f, d);
              return r ? (e => (e.loaded = 1, e.get()))(r) : t()
            })),
            d = {},
            t = {
              62229: () => f("default", "react", [1, 18, 2, 0], (() => P.e(3447).then((() => () => P(13447))))),
              44853: () => f("default", "react-dom", [1, 18, 2, 0], (() => P.e(5794).then((() => () => P(5794))))),
              22414: () => f("default", "@foundry/icons", [1, 3], (() => P.e(5075).then((() => () => P(55075))))),
              36550: () => f("default", "@foundry/icons", [1, 3], (() => P.e(5447).then((() => () => P(15447))))),
              9623: () => f("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([P.e(4255), P.e(6407), P.e(3213)]).then((() => () => P(6407))))),
              16565: () => f("default", "graphql", [1, 16, 9, 0], (() => P.e(5440).then((() => () => P(55440))))),
              28897: () => f("default", "react-device-detect", [1, 2, 2, 3], (() => P.e(2158).then((() => () => P(12158))))),
              94944: () => f("default", "react-adaptive-hooks", [3, 0, 0, 8], (() => P.e(621).then((() => () => P(73002))))),
              95966: () => f("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([P.e(6035), P.e(3806), P.e(9623), P.e(2246)]).then((() => () => P(17560))))),
              2918: () => f("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([P.e(6035), P.e(3806), P.e(9339), P.e(9623), P.e(2246), P.e(4963)]).then((() => () => P(66369))))),
              81788: () => f("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([P.e(2024), P.e(4054)]).then((() => () => P(85950))))),
              57145: () => f("default", "prop-types", [1, 15, 8, 1], (() => P.e(2817).then((() => () => P(72817))))),
              33213: () => f("default", "react-router", [1, 6, 11, 2], (() => P.e(6612).then((() => () => P(96612))))),
              90: () => f("default", "history", [1, 5, 3, 0], (() => P.e(5261).then((() => () => P(7642))))),
              55274: () => f("default", "@rsgweb/router", [1, "workspace:^"], (() => P.e(5162).then((() => () => P(42781))))),
              63582: () => f("default", "framer-motion", [1, 7, 5, 1], (() => P.e(9235).then((() => () => P(19235))))),
              95945: () => f("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([P.e(9775), P.e(7145)]).then((() => () => P(19775))))),
              87851: () => f("default", "react-intersection-observer", [1, 9, 13, 1], (() => P.e(8764).then((() => () => P(56383))))),
              56840: () => f("default", "@foundry/react-v1", [4, "npm:@foundry/react@1", 28, 2], (() => Promise.all([P.e(350), P.e(1911)]).then((() => () => P(20350))))),
              14463: () => f("default", "react-intersection-observer", [1, 9, 13, 1], (() => P.e(7744).then((() => () => P(95363))))),
              2973: () => f("default", "dompurify", [1, 2, 4, 1], (() => P.e(561).then((() => () => P(20561))))),
              92440: () => f("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([P.e(8292), P.e(9834)]).then((() => () => P(99834))))),
              90582: () => f("default", "@rsgweb/modules-core-screenshot-viewer", [1, "workspace:^"], (() => P.e(3582).then((() => () => P(71201)))))
            },
            r = {
              40: [92440],
              220: [14463],
              582: [90582],
              1911: [22414, 36550],
              2229: [62229],
              2246: [16565, 28897, 94944],
              2973: [2973],
              3213: [33213],
              4281: [2918, 81788],
              4459: [56840],
              4853: [44853],
              5388: [90, 55274, 63582, 95945],
              5966: [95966],
              7145: [57145],
              7851: [87851],
              9623: [9623]
            },
            b = {};
          P.f.consumes = (e, a) => {
            P.o(r, e) && r[e].forEach((e => {
              if (P.o(d, e)) return a.push(d[e]);
              if (!b[e]) {
                var c = a => {
                  d[e] = 0, P.m[e] = c => {
                    delete P.c[e], c.exports = a()
                  }
                };
                b[e] = !0;
                var f = a => {
                  delete d[e], P.m[e] = c => {
                    throw delete P.c[e], a
                  }
                };
                try {
                  var r = t[e]();
                  r.then ? a.push(d[e] = r.then(c).catch(f)) : c(r)
                } catch (e) {
                  f(e)
                }
              }
            }))
          }
        })(), (() => {
          P.b = document.baseURI || self.location.href;
          var e = {
            1149: 0
          };
          P.f.j = (a, c) => {
            var f = P.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) c.push(f[2]);
              else if (/^(2(229|405|973)|3(137|213|326|416)|4(281|459|853)|5(202|82|966)|7(145|538|851)|1626|1911|6766|8778|8987|9147|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((c, d) => f = e[a] = [c, d]));
              c.push(f[2] = d);
              var t = P.p + P.u(a),
                r = new Error;
              P.l(t, (c => {
                if (P.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var d = c && ("load" === c.type ? "missing" : c.type),
                    t = c && c.target && c.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + d + ": " + t + ")", r.name = "ChunkLoadError", r.type = d, r.request = t, f[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, c) => {
              var f, d, t = c[0],
                r = c[1],
                b = c[2],
                o = 0;
              if (t.some((a => 0 !== e[a]))) {
                for (f in r) P.o(r, f) && (P.m[f] = r[f]);
                b && b(P)
              }
              for (a && a(c); o < t.length; o++) d = t[o], P.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            c = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          c.forEach(a.bind(null, 0)), c.push = a.bind(null, c.push.bind(c))
        })(), P.nc = void 0, P(45408), P(95400)
      })())
    }
  }
}));