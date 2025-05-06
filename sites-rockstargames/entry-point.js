! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0bfa9839-0362-4313-b6b9-921e75dc7556", e._sentryDebugIdIdentifier = "sentry-dbid-0bfa9839-0362-4313-b6b9-921e75dc7556")
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
}, System.register(["@rockstargames/modules-core-header", "@rockstargames/modules-core-footer", "@rockstargames/sites-rockstar-tv", "@rockstargames/sites-gta-tv", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-gen9", "@rockstargames/modules-core-gif-viewer", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-careers", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-gta", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
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
              e.exports = h
            },
            25136: e => {
              "use strict";
              e.exports = p
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
          40: "0e35e4c45cc058cee0067cfb15a2ac28",
          131: "21e58bb0f34fd2360454476969182c79",
          188: "72533484d33921d68294b39246a4355b",
          220: "9e5cb3e52e8a4e7168426fb92313a2cf",
          278: "8a424e423490003ec17cfc5a7744e517",
          299: "8b0b898cf64cbbd80717927746bd22a4",
          314: "68d7c209543efd44154e20e950cb1214",
          350: "264f64915dcb7988a308c9a2d288ca88",
          561: "a3aa49e52790b83a719d0b94fd36a5f2",
          582: "86ab56c4f8b229d2be3bf36e806736d1",
          621: "3c2ff50ceca537325045663457ebe2de",
          633: "2e2c6675d358cec0681f1c7abfb8ec3b",
          662: "3020dae78585c614f049ce7483975ac6",
          721: "504dffb4808ffde08224d55e60157488",
          824: "25be62a0f9d83a9e69204158f4d87923",
          907: "a4e9b7b245cec779bbc17a9f63649f11",
          1054: "b9eedecec443497e204b3ddc8412297b",
          1144: "419a97d963e7ce27999f4ef9937c932f",
          1201: "c6bc3128cad21ca70d367c7d97e99661",
          1212: "1de81a71f3d0ed0f0f094372fa3c0885",
          1235: "711c8d31dfc1509a609434c93b61b17c",
          1242: "4c7efb1d477ce58b7a5696dd03418bc8",
          1299: "164f5c2ad035d26da1648f8e976fc321",
          1324: "1dbf3b8e6b7bbeff1a30bc8217859b24",
          1626: "1a821a20005818702c8126fb54dfe381",
          1667: "5b79db5f3eb77d99a8659c036d588876",
          1673: "d66d542c15608dd3e4201cb95488c8f6",
          1720: "b9f0f5735c7b2a92b16314fe56af06f9",
          1723: "8f6a1b38b1bd2bb44b17e08011345a55",
          1735: "159e375c1ac9a5e407059daf2bc8a529",
          1794: "a224406000466a75b16f6b9d6710a807",
          1822: "9d62a0a442c02bf3a6c1ddb4d90865ff",
          1868: "a4a616458979130fa7a699366c0fc508",
          1911: "f4d5cfd26f858d8aa1ef467ce6ebfcb3",
          1962: "a8a4630345e5ed20634987324f97e2ad",
          2024: "bc1485ab861a629bb2cb376a71986653",
          2156: "b5399ad5e1d4265443957a048f49b09d",
          2158: "0051d1cdf2ca66a42a66557ad29772b1",
          2171: "d08be7acb288fbc202d1b9247c51d5e4",
          2185: "e28c3b4c923fb3455bc1c5ee2c73e3ec",
          2202: "174b7d118efb629c5dd57288c39e57d7",
          2221: "f568544fa6fa0f88a9a5e271477ff30e",
          2229: "09cc5d89bb04255826f1ae50a462ddda",
          2234: "d1efea78084891c138598d11571207a7",
          2243: "e870bdc82b985637421e5d76fec92764",
          2246: "37e88c0db2fb9efb1c380e67aeb520ee",
          2347: "da990b997524009ee6dad5b5008d4679",
          2365: "93d76e2672cf824a0f821cc766cc00fb",
          2398: "0f6d1c1df9c057cbad4cf58849098090",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2466: "6b5466d0438627abb064fb112955717b",
          2642: "225562a7e84b291fb651d5258639b9cd",
          2678: "9b13f5ce4323762866b329249b4fb7cd",
          2681: "34389a1c3e00de9d0f1bcad149cc79fc",
          2718: "f835e81c4c9bf9bf441c6a8f0ef23156",
          2781: "151de35fee4166b7d75b6997d2f60be8",
          2817: "dc60b152bf9aeade0649f33015f3de6a",
          2824: "e1e70b33f0360091a4e6f3fcd8fd6fe5",
          2843: "a7c7e43fd4ecb6e57422f84b5ce23afc",
          2864: "5ac5deb3aa1d3568780d06661b9e774f",
          2973: "01b69540ffb90dd2d3c6b068f9ef462a",
          3002: "4c1160cc2cf83863c4cdf61c83144d6b",
          3034: "93207f0af67570e12fc2b35048befd9d",
          3035: "f9e31764a6c2fa357d56af7701f1bdf4",
          3037: "a072cefe1b7351b155074386b9e9b3bb",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3197: "1661191057dee85bee2f54de1ccbd68c",
          3213: "205fe2929653424fc55178dfd74464d8",
          3241: "262a0785823ef68f12280110097f5700",
          3274: "d8ce1d350699eef3dfbd54405770069a",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3343: "33242c83022cf9b27451fed3a7a1ffb8",
          3370: "46c39a52c5ec54a84ee3ae11b04bb428",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3447: "0ef0668bf3354045ef8d3ee65c03a3bc",
          3475: "e028c2f441585b2db950aef368e9496d",
          3486: "d9d6f8597a5596271e05810255ffc63a",
          3511: "211a8b932c4669a5eafd8c842133af68",
          3557: "92065b77e1fb6c7d4de5791210e17b88",
          3582: "3f8cb297853fd9748b24c4d26f2285ed",
          3697: "6c82a145381eb75bbb64e7992cfbbcad",
          3733: "2c1d3a194d4c182c7270147f79de51a2",
          3806: "163a8914c3c7cc735908068d659fd7ae",
          3855: "ae9e7f8a9fc8aeb04648d4a2fc71de18",
          3885: "04dccfd1c0ac0951963e522029e2df1e",
          3914: "938cdd7c86f53b5bf2deb37599eea22d",
          3941: "f909df51af7c7620578f24eb15b8b32f",
          4011: "cd8cda2a97c292d98cdb0409f2ce1a97",
          4054: "aa8ae664bb26a4de3cfe92557ec519cc",
          4116: "54a010381a25879b096e991980603ddf",
          4255: "f782321d093f44632692c19e6e752458",
          4281: "b01d57b5747950dab8b37eb5d0bd3d81",
          4459: "9bf2158e6a3864bb9b67b11e665f79d1",
          4505: "2ede75fb2aec1252c56101f76883dea9",
          4528: "a779326d3d1134b8d9484c51470e50b3",
          4621: "179fd584725a068b772744ab34927fac",
          4700: "aaecabb5461397870ed4c631903b4dd2",
          4710: "cc694258b6bfd2ee36f38b6f380c80f1",
          4731: "aef3a29ab587979bac935afa1791ea74",
          4783: "187b0393dfbddca1ec39cb2fbc4433d0",
          4799: "70e7f56c45d7280c58cfe4306d9c550c",
          4841: "2c09f28522de69c03fa6dc8e81ba4345",
          4851: "222cefb4577da7a2f549ed71c8db52ce",
          4853: "7e139007b68c46b106bb429ce0dba4c3",
          4861: "3fbb80acf5b57aac1d8ac31e422cdcf5",
          4913: "e4b00db4b6cfe6c60e5e7e75789c4fd5",
          4963: "9bd3735538c246a42cd2762199860553",
          4967: "0af31d6b6374b3033248dfa6b7be528e",
          5018: "2370ab5df06d68f9bd74b9c2b22283b4",
          5019: "843f2f44ae230f3167425ccad7c2d16b",
          5045: "d617fd77c6df01a583383a3ab82355b0",
          5075: "6115ce0712797ee3341390b852b59ec0",
          5142: "209bece6daf8edf3eedc5cddea5881bb",
          5162: "d5ef53c9c72e46835aed797856314a4e",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5233: "d65bda934dfcdc7668290ed0b9818cb1",
          5254: "84e4023386abbee9df9d42f5783ed178",
          5259: "d8e9478cc9a12e612c10ceea8cff6cba",
          5261: "79b62877f94cb1adab6bcbe8a2ece70b",
          5363: "b98d47901922a0825d51414303185b47",
          5388: "caa0d402dccefd7e0a476214316c68e7",
          5440: "4d6c8bc93f7ae7535c61be3fbf5d2c23",
          5442: "2f6d0924cde8802497287c194d844ccd",
          5447: "77830916f86fdc1fccce295182f171fe",
          5499: "f918791693bd065203598058b354234e",
          5530: "587bd3ce78fde8959538d933336a127e",
          5633: "7b1202e2f70b99fa24700790966dfe29",
          5639: "49f40e622ec5e9dcc28217b2ffe13ffa",
          5652: "3ebd8390460b6f91cb7b32852a9c20bd",
          5663: "7267bb36cbc1cdba95646ed33a7ba6d8",
          5672: "aa9604496b9023ca013551c63862849b",
          5742: "b6aaccc5df26ebb56016872a06c22444",
          5765: "ddfaedbaca74f28ebd8a4a7c8ae585ad",
          5794: "5eb9eeb2e967760dec3a4d7f991daa39",
          5830: "f21e50fb4d00c2e99d38f8d7a521b299",
          5832: "67ce36a66cba4daa752756a9bda2fe93",
          5833: "04d5f3a5099085ab01e57ab90aca1363",
          5881: "9f827b337c8f3998470e04bdbb0118ad",
          5918: "3796a727d268cb1b24736b92f996c50f",
          5966: "4b83c618f3ebfdee22c2cd5e3d2332f6",
          5981: "93bea2abc8f845c657fcb9b1964ef21d",
          6035: "5126cdb3f0680828c5ea094341c35892",
          6267: "32045450975f634958ab87271a7e9f3a",
          6274: "056a99ff608b63b1c145f0ae2ebba712",
          6280: "61c4ad9db46f03e6ff40681f3396dd31",
          6285: "42b8c179b3e42d244d16419db09cf8c6",
          6361: "c9b552b7674ad6f446d56be1d73958c2",
          6383: "83d856fea0ad1f40c17726f95901251c",
          6401: "609703d75bbab17562e8f5c8faf84497",
          6407: "6eb1d2b294c5974dc8c15aa98a4c2e6c",
          6536: "c0a8bd743c3a804559d78d7189a9a371",
          6612: "fbc462a131b10109eea191461e58c83a",
          6664: "9230496b8982b5569e267aa6f23f716d",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6840: "5cb9afdf563b44ce2f7ce34957ecead8",
          6879: "8940ac8f0c16900945ea0e932cbdfebc",
          6891: "9112a29703bc6c5f254515b7308dc2b4",
          6893: "a15f3d7617163d7142cfb809ab2aaaaa",
          6973: "0d4a7ad8f567d49ff8085142e100dda0",
          6997: "3bdcb50dc67616075b1dbb5d491e561b",
          7010: "14be94a04a6c4bd69e80fe842029df5a",
          7040: "4673be87b23721c6238e31c2d1017236",
          7057: "59e02f74be26d7ab504f6d5ef1b16afd",
          7073: "574de7ab4d726de63b96f30331d32dea",
          7145: "9b8d6e4bcb13053d136492e8d61a6e2d",
          7214: "3f30f8e69611c7ed484ce505e6007f7a",
          7269: "c49b1e8b51c73aecd66a7704130c33c3",
          7339: "668971985ee4c46026719d2fb3cc25bc",
          7344: "5fce2ec5e1bbf4d9ab4252dd92ac5045",
          7436: "ebdf06f39f40060514b561953d1e1002",
          7452: "9c920d475ccf839f30104d44a54772a3",
          7453: "0f1fae1f371d950bd5c8464ac06ec752",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7547: "2146e99e935488572c656d729190b30f",
          7575: "dd54815125fd3f5eab843155c7dbfe34",
          7587: "6238eaa05df5220ed33490913622c1d0",
          7642: "7771529c067b61e169ef0c4917d81f45",
          7744: "45cade9441587598fe42be126727951e",
          7851: "f99ce05d086da3cdc25c2360484d8e92",
          7970: "554b8d774702976299066cada61bed4e",
          8069: "bd495464eb14e617dbc2e1a8b65556a7",
          8272: "fd66caafac392cf933c9927bd0474379",
          8292: "5ab9eec76c2315b90f78b9536a9f23ff",
          8386: "ba8480ecf8f8d169078cba81b95e1360",
          8391: "c11371f9c10022d4bca2c6a3721729bd",
          8755: "64e968d1c46f60b544a4f50521cabefc",
          8764: "934b9002adca45a0b31a922e466cfd6f",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8786: "5487909d6cba8e5d6c22404034bc583c",
          8880: "cc4e5b2c8b92da109eb95fd24bea1f06",
          8970: "47498b8a335eb4d6bb826a604194df92",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9022: "1c2bd58e405b595140d9ae23c52ae223",
          9028: "6ea3238432ebea686770eda064f3b7cb",
          9081: "b6e01ae598f73c59cac4e0583e590fbe",
          9126: "b8a8fae7908cf06aeae0ecd276b8c5f4",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9214: "ee684cdd523d999e3faff62597016f5f",
          9235: "25f6b12276bd913cf7de470696fc0227",
          9323: "6de2707542048a120bc61be238e4552e",
          9339: "11d7b308bd3dd50fd542317d1386de5e",
          9377: "6f8171248f8bd74ec26d135842e4cc1c",
          9441: "285aab464e63b55f15dd4d7532982e46",
          9615: "0af72c662b663b788700e30bb5097040",
          9623: "e677c6c8770a217b9e503ab3ec900c20",
          9775: "a31e1f8f2f77f819d5fb649d711ceeda",
          9834: "a52af34ad424faf2df30376ae9751cf2",
          9873: "9b2ea9d7885ad4ce5e66688783615852",
          9936: "464da30609594fc3d7aee4e7d256c95c",
          9990: "96bc5dc6f0ee8cd2442e50632b1e37ed"
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