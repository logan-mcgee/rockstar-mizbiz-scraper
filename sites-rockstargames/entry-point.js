try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2d5de17d-af23-4955-820d-1b7e5d1afb28", e._sentryDebugIdIdentifier = "sentry-dbid-2d5de17d-af23-4955-820d-1b7e5d1afb28")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, System.register(["@rockstargames/modules-core-footer", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-header", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer", "@rockstargames/sites-careers", "@rockstargames/sites-gta-gen9", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-tv", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-rockstar-tv"], (function(e, a) {
  var d = {},
    t = {},
    c = {},
    f = {},
    r = {},
    b = {},
    o = {},
    n = {},
    s = {},
    i = {},
    l = {},
    u = {},
    h = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
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
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
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
    }],
    execute: function() {
      e((() => {
        var e, p, m, g, y, v, w = {
            9944: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var t = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, c = 0, f = t.length; c !== a && f >= 0;) "/" === t[--f] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var r = t.slice(0, f + 1);
                return d.protocol + "//" + d.host + r
              };
              Number.isInteger
            },
            11955: e => {
              "use strict";
              e.exports = o
            },
            21998: (e, a, d) => {
              (0, d(82788).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            29441: e => {
              "use strict";
              e.exports = t
            },
            37389: (e, a, d) => {
              d(21998)
            },
            39247: e => {
              "use strict";
              e.exports = c
            },
            40041: e => {
              "use strict";
              e.exports = l
            },
            40308: e => {
              "use strict";
              e.exports = i
            },
            50644: e => {
              "use strict";
              e.exports = u
            },
            58678: e => {
              "use strict";
              e.exports = n
            },
            62137: e => {
              "use strict";
              e.exports = d
            },
            66819: e => {
              "use strict";
              e.exports = f
            },
            74251: e => {
              "use strict";
              e.exports = h
            },
            82788: (e, a, d) => {
              const t = d(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = t(d.y.meta.url, e)
              }
            },
            94316: e => {
              "use strict";
              e.exports = s
            },
            95400: (e, a, d) => {
              "use strict";
              var t = {
                  "./bootstrap": () => d.e(9583).then((() => () => d(39583)))
                },
                c = (e, a) => (d.R = a, a = d.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                f = (e, a) => {
                  if (d.S) {
                    var t = "default",
                      c = d.S[t];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[t] = e, d.I(t, a)
                  }
                };
              d.d(a, {
                get: () => c,
                init: () => f
              })
            },
            98674: e => {
              "use strict";
              e.exports = b
            }
          },
          k = {};

        function _(e) {
          var a = k[e];
          if (void 0 !== a) return a.exports;
          var d = k[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return w[e].call(d.exports, d, d.exports, _), d.loaded = !0, d.exports
        }
        return _.m = w, _.c = k, _.y = a, _.amdO = {}, _.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return _.d(a, {
            a
          }), a
        }, p = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, _.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          _.r(t);
          var c = {};
          e = e || [null, p({}), p([]), p(p)];
          for (var f = 2 & d && a;
            "object" == typeof f && !~e.indexOf(f); f = p(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, _.d(t, c), t
        }, _.d = (e, a) => {
          for (var d in a) _.o(a, d) && !_.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, _.f = {}, _.e = e => Promise.all(Object.keys(_.f).reduce(((a, d) => (_.f[d](e, a), a)), [])), _.u = e => "js/" + {
          114: "59c4dbdbdd6a51fa0f5a0e25f5a2b310",
          131: "0210ec869d28cfe3a135090abd97bd13",
          278: "024605d785cbfeeb02b22577c970d1c0",
          299: "be66ccc7929693fed1ec1f6a6278f383",
          314: "29a4936008f48d468e7d6c20e6bcf535",
          340: "b483eaa41eac69a629dbf94d118e8681",
          377: "4c808f721b928c4a59f6639650f9f8f8",
          510: "7aaebe83235b4ba6bc7043aaeb353301",
          544: "7624688df00ede4253b7528fa9ef1389",
          609: "d7f71d014f78b012fde93d9b30bf4217",
          614: "5bfe9e7b233dbfa86052f469e15d96c3",
          650: "1834c5e42ee9b00cc2f37a8a0a4c0bdb",
          662: "a22df3425cd4f2c60e5388661fc257b0",
          686: "224217119fdcdce6fd777b7aef87fd43",
          824: "6aa1a00994abb83934f13946fdf24288",
          844: "60cd4af9af3f99f29caa612749cc3868",
          888: "2017c0a0c23905634cf7d7a5da8e4d3b",
          907: "33cd50331ec977261e327b7d7631222b",
          954: "30df126a426757e08796c1420b2e3ba6",
          967: "dafdfe61ad07992d855e2ef3729bd4ed",
          969: "64f333095a478934c92c4356f32df2cb",
          1045: "6ca4565d257463eb70193fdcc233ef11",
          1054: "3cc907029efe237352bb577e265958d2",
          1138: "b27e03b30a37717d24afeafdeb73646b",
          1154: "6efb76e2e82e63d7894a01f88fa2d936",
          1165: "7844d9a85bc111a691e0760f6217fd0a",
          1242: "4cc16e8c27b1f13ad6ea592b4c936fa6",
          1299: "4555bd819270ced18d360c31805488c6",
          1411: "c9d4effbe667b961deb6d11393f47d66",
          1493: "d752c5a29dfe0146ffa8a1cb5d5fdd99",
          1607: "a189391071b9582d0560a2aa9d4df043",
          1634: "d1ccb8fc9c04bac3822565622261aa03",
          1689: "98dd5a2ee6e666f7201970e016b7d195",
          1735: "a9a0daebb4c2df445bc8f76f41787ddd",
          1784: "4de466a2b150cc9bd3095fe131d6f9d0",
          1822: "96ec86fb3538566aeaa1692932d1230e",
          1868: "1584d733b87435e143b145d68873499d",
          2109: "6da3fbea0051fcedf697a8597a59bb28",
          2156: "d1826eb42ee0a5141052b42e725bec2f",
          2171: "38a47cecb2f1a538091f2dae1f5edbc0",
          2221: "5af3d2f162900ed60c11256b81f492e6",
          2243: "04fbb2bcc35a8398b5b525336d8b0cf1",
          2315: "3df57344c1ba211a614f16d9dad44ac6",
          2347: "371b2c6f46bc954baddfef32f2a8af2c",
          2365: "faea2052c008f6f9603572f39d5425cc",
          2398: "e69b4566586bfd1786c4e90b979954f2",
          2454: "890dda571bb413e3afb67e376a80dda0",
          2465: "adc7979996fe3cda3573b113c3299ee8",
          2466: "a774f887df0698af15dc9816ffcf3bcd",
          2554: "2504ca0a537af6eef4df9d5acab18bce",
          2558: "2181eff79436f93723fd63043169a67d",
          2642: "9a413f33c8d03bfee8cb6e9a4de2a400",
          2678: "4fe1f3ecd6d47430776bd754a5db3b11",
          2698: "11c836d866126a0c14d8eaaac693c6b1",
          2738: "cdad885b665958a3d8dbf5957b0d7dd4",
          2800: "870a6e6bafd151c63fa61f2e880dd9ea",
          2864: "f986d9bd5ae219853d9da290c01b7b2c",
          2941: "bfb7ce3a4fb1297a673bde96d270a96d",
          3034: "7d5f409cc26c5361c42edc8362b8821f",
          3094: "a6018d520ede8463895164cc2ae9d2e3",
          3144: "95ec03f7246c938f4ae3a8da48904e7e",
          3149: "88062fb418c0d1ea0ebf92fd9edf6d64",
          3197: "af71da5a1a5120cc21af897a0de10ccb",
          3343: "e698b4abf36793f511656d5015563423",
          3370: "0fae99e7733fe5de3035c31fb158fc5c",
          3404: "3e7a5def2905aab7dbbee50352dbeb2d",
          3475: "a18ef8a9b68f10a06b28222963f79727",
          3486: "fac0856468dd8ceec30894219bcfbac4",
          3546: "fbf20bd3c04005e2f338b204d892287c",
          3622: "62361a24b6e6966342d47a1ddd9003b3",
          3653: "0d30431dcdf559acc6e818e2015ed371",
          3684: "3a11a67d9632d4c71ac3f491ab974954",
          3697: "665b1ea74b576bcd9206ad3253ebf59e",
          3721: "b515b2762d10b6df8d609ca609b36cf9",
          3784: "f104dd73da13b917412bb628a57bdbc1",
          3885: "4c749e84d754861a01a8842a70b72683",
          3941: "141c5330d6fccc16e8dd1da6082cf5ff",
          3947: "7f4a4c2cd72689637b7a30123e7cf5f8",
          3963: "a96f558f1e0646dbd36fe56cc75d7536",
          3967: "da96bbf40e5905f461bd4e314886c18e",
          3972: "6d6c8c6ed35e034a1d6cce2914f9075d",
          4011: "da359aea04f0c0ba59fa694e45464338",
          4045: "ec988fd6b1d2392c739e6007b420d63c",
          4088: "14727d0eb8a49813caaf73b3d909dcc1",
          4105: "4216c61ba75a4b9968dc08d84f602102",
          4113: "f72ac3285a203b5392693399f2973dc2",
          4116: "ba311b6f8b7af819f13622b8b9a7263e",
          4186: "affd9fd5f6a8600a86160d89ae112a6b",
          4220: "22c3884930ae95885a7434f8cea7b479",
          4446: "31e220e48bcf2de90f48624626a8c058",
          4528: "cad3a106608fcce4d270fe8b65cebfa5",
          4621: "dc7324d5f48d0404a7e04e2b1b6e336a",
          4700: "b43a6581b02154ac7e4eb1eda4e41fdf",
          4710: "7c39895b26ff6d457cc46815b4fb4cbd",
          4731: "f100a3de19f89d188e7467c131fc063d",
          4799: "ca48a42224160638d3906bf93eaf0711",
          4831: "4a075fbf4c47c47b49b39177cec249e4",
          4851: "91c366f91f82e235d11fd69ad79eb6a5",
          4861: "faf7dae35c89ed64ce958d8da57901e2",
          4913: "76e25b8b4fb853b60a8e8d03eeff6b04",
          4979: "a4583b7e5d2dca24c4303c7496057109",
          4986: "feb1260cec866d7957023ee6130ad427",
          5018: "09bace2cdc2744c62852a3e1689af525",
          5233: "3ceeb30a2818ac302f8ef1e7200a858d",
          5247: "b0c0c0c4a0dae12b64c9bc105c575037",
          5259: "cce35d76ef3efb8e8af38f40f0e58f23",
          5342: "dd112d35db1d85fe61b724bf8cf9f3e5",
          5440: "9b4c83b64342ca16d22d00031465e05d",
          5530: "d804f39837d9602e6c53826850a4c27c",
          5639: "d17f8ed1ff1bb67961ac98a6441048ef",
          5663: "2edec666d80288003cc641b6de8817d6",
          5718: "f3adad6577dd8d11778ac91ebda7fc95",
          5742: "d7d60a98b68d083dbb25772ba6d50889",
          5830: "b6faf6e6f6256514b9411adb5f71ae10",
          5832: "c84ab1f0532ad583cba9bf1af1bf5821",
          5971: "d7a5d24e0ee0c3cbbe4d454fbdb50540",
          6019: "7b169473761b870b05070172e8444f29",
          6204: "6b6ac40c05f037c664fc72fa9dd05f7a",
          6267: "9687413d024d288c025b33810866cf7a",
          6280: "6a072a4854d183eee30d8d6692c1ca2e",
          6285: "f7b14151004f2d2746161bac0007b444",
          6361: "cf60295d6520cc8692cd15fefc7c6de0",
          6496: "f2891ecf417f858f47143f7f5af3ca49",
          6664: "6d1b47f3e2877eeec6121c473fcbd268",
          6879: "bee820dc419372161e9726f5cda89a38",
          6891: "3e3f81b69311ca7b592a8e18f4785e1c",
          6934: "6c49e6a6d59c867d46981991107ee9fd",
          6940: "6ee07d428de051b50e78c74bd02ddf90",
          6956: "f85a135b17b0acdfb87350a733826eb1",
          6997: "859b5c0d6d510facd764a2f82d9e0c50",
          7010: "105e3574f08c69364bf94c968213bdd0",
          7039: "d704e8a668e89b7f5aed98ba19a05368",
          7073: "223e48cec8c4403c488289d9e1bc0609",
          7157: "c5cb7f34daee1f7f84760904ff1db9c0",
          7185: "834a5bf514ee62926e976ea4dc6d05d9",
          7436: "11c8c8cd44e963e69cf923a9513de7e3",
          7452: "698c76432ebe865e4713640e241c4980",
          7453: "bcbd2893ee9dbec2f76fc8e3950dba4a",
          7575: "f7e49555a3732a9e86e9c464b32320a3",
          7710: "cfffafc2d96049451b2239766860e120",
          7728: "8da12dcd64632eeb3940cff1d7144db1",
          7734: "3359f82288f538051e2f016da587c9da",
          7845: "28e430b4a6d39be699d85c03aeb302dc",
          7970: "289cb85e1b28202f59b244b8c0d2a49c",
          8030: "e0eb419547c33b35645dd96d1f702b2e",
          8136: "d4734e79dfa3412b5762363caac51160",
          8272: "fb1a3b40600b2b25ac897b11bc34b9ca",
          8305: "182edaf316ab51fbda1f5e4925a2eece",
          8391: "398900e6c0c04a774b3438c632ca6e17",
          8395: "a409fefea48d3fb2f323dabad500eae1",
          8444: "da31c3a2a45b1a9167373514199f2609",
          8463: "90a52774dcab6f623e384f4c764f3cb9",
          8510: "e4fd07c4113ca81963b40278da06b6d3",
          8626: "b28032f0775ad1bb72362ef73c05e818",
          8755: "9edd9bff5fcea211f7b4cd8de127ddc2",
          8756: "32370f80f36584e7ce405a9ab3b1e106",
          8763: "cbb2f799e1e529ed90878a85366021ce",
          8773: "a36e23b94da3c5f412e50b2e1a434fe0",
          8841: "8ae08cae7fc161864ab00c9d8b599735",
          8880: "6e433e1a43aeeacd5814e320278fd695",
          8970: "049dcfb084485b2d231f7a59c98f53f7",
          9022: "d851d2eb15957c2cc8a2ce228927f8ce",
          9028: "78ba6895d5aa6434f10dacaf71bf582e",
          9126: "7e9c32fbfa30776ebb6544e34ac962e0",
          9368: "398e49c345871cab062976722ec97d99",
          9377: "6accf72b5043e81188d022b65148c98c",
          9421: "bcff85c3254cee54791096b773f5d1b9",
          9474: "8c1d3f162fc1311c051af7fed89a3281",
          9499: "5730115c952d4d3e14a45696c15512cc",
          9566: "4923acc087dfff3d468a3c9b16afc75c",
          9583: "8620c7b08c54e2c18fd822e0a337b39f",
          9615: "cfcb07088830a2742889c59e0138fbd1",
          9642: "5e4d9f9e6c21a9df05cd4792591c51ac",
          9697: "6c263115db802a3c52f90d5d38d83ac9",
          9829: "6e89427cadde45c3eaa906e54305846b",
          9936: "a0a34728e192f6ecd3fd8c3734f9e8ad",
          9990: "8e55eff69ab05c1a8dfc0c7f0b03f9ca"
        } [e] + ".js", _.miniCssF = e => "css/" + {
          544: "4e3aebb3dcf768d430a9e319192cb178",
          609: "6c3702b945e23d2a4b564b2039410d2e",
          650: "5f09753f1fe897b2a2998c52a055a269",
          967: "39ff845de0d2fcb1bf3791c8cbf70db8",
          1143: "b4eb91207cb1c0d6f6ebe85799ef51f3",
          1411: "42c929d2161785a09f0deac80ce59761",
          1493: "8a12a1ca6c45759e55c6ac366bc2861b",
          1634: "e808b40c03ac1b835518751bdc4066be",
          1689: "bbc3aa4f4a5918e71769d52dc4e1ae69",
          1735: "eee6e9f0ed632fce1325de4b9e936e9d",
          1784: "d2b0b3aa0ce1c4f69f91d09ff9df2189",
          2454: "33bdecb88e11029d504a45c07708efcf",
          2738: "f570a444f163b90870c40dab3f01333b",
          3144: "b13e6ddc90cb08675d51cf9fbd895475",
          3684: "9a619201f06ab44ebffd1eedf4b66181",
          3784: "1b78d4fe05a5f12236b67224cf939aae",
          3947: "7acba850d92fd5d6eb886a603fe69082",
          3967: "6aaa4e1f68545c29c192b393969676c5",
          4088: "00da2e0e23a224264b47c1039da843d4",
          4113: "8c54eafe63b721a4b746d728c7cc8b9e",
          4116: "eee6e9f0ed632fce1325de4b9e936e9d",
          4221: "103081b3d23c2e415ff7fd2af7854845",
          4986: "3a0244366a6892f54e57fbd7ec3b8f04",
          5342: "487c3cc9f7c6da71dbe6cd7fcdc30712",
          6175: "27e6c362322ad20e839e035848dfadf8",
          6602: "103081b3d23c2e415ff7fd2af7854845",
          7421: "9a619201f06ab44ebffd1eedf4b66181",
          7728: "ee522b6566d7cc1dad8eb5b91b1682eb",
          7734: "9f736656b64d08c10be4436477e505d3",
          8030: "44538e156e338ff9fc4b30e95df98d3a",
          8135: "eba5ca2952033fb543111765a9b069a0",
          8395: "615045abc585319694acddea25b967f4",
          8510: "071cc98fed939b12a1345c71ee2e5bcd",
          8763: "e6dc1f510b0a4211c6e54bff1fd4c607",
          9393: "6a9e1a41fbf5b4b2592198f759298318",
          9499: "a66604d9c40591515e417b1c2691f870"
        } [e] + ".css", _.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), _.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), _.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), m = {}, g = "@rockstargames/sites-rockstargames:", _.l = (e, a, d, t) => {
          if (m[e]) m[e].push(a);
          else {
            var c, f;
            if (void 0 !== d)
              for (var r = document.getElementsByTagName("script"), b = 0; b < r.length; b++) {
                var o = r[b];
                if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == g + d) {
                  c = o;
                  break
                }
              }
            c || (f = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, _.nc && c.setAttribute("nonce", _.nc), c.setAttribute("data-webpack", g + d), c.src = e), m[e] = [a];
            var n = (a, d) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var t = m[e];
                if (delete m[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(d))), a) return a(d)
              },
              s = setTimeout(n.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = n.bind(null, c.onerror), c.onload = n.bind(null, c.onload), f && document.head.appendChild(c)
          }
        }, _.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, _.nmd = e => (e.paths = [], e.children || (e.children = []), e), y = {
          1626: [41626],
          1634: [39848, 41263],
          2405: [12405],
          3137: [53137],
          3416: [33416],
          5202: [35202],
          6766: [36766],
          7538: [47538],
          7728: [31879],
          8136: [9566],
          8763: [94057],
          8778: [78778],
          8987: [88987],
          9147: [29147]
        }, v = {
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
          47538: ["default", "./site-routes/RedDeadRedemption", 40308],
          53137: ["default", "./index", 98674],
          78778: ["default", "./index", 74251],
          88987: ["default", "./index", 94316],
          94057: ["default", "./utils", 11955]
        }, _.f.remotes = (e, a) => {
          _.o(y, e) && y[e].forEach((e => {
            var d = _.R;
            d || (d = []);
            var t = v[e];
            if (!(d.indexOf(t) >= 0)) {
              if (d.push(t), t.p) return a.push(t.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), _.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, d, f, r, b, o) => {
                  try {
                    var n = e(d, f);
                    if (!n || !n.then) return b(n, r, o);
                    var s = n.then((e => b(e, r)), c);
                    if (!o) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    c(e)
                  }
                },
                r = (e, a, c) => f(a.get, t[1], d, 0, b, c),
                b = a => {
                  t.p = 1, _.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(_, t[2], 0, 0, ((e, a, d) => e ? f(_.I, t[0], 0, e, r, d) : c()), 1)
            }
          }))
        }, (() => {
          _.S = {};
          var e = {},
            a = {};
          _.I = (d, t) => {
            t || (t = []);
            var c = a[d];
            if (c || (c = a[d] = {}), !(t.indexOf(c) >= 0)) {
              if (t.push(c), e[d]) return e[d];
              _.o(_.S, d) || (_.S[d] = {});
              var f = _.S[d],
                r = "@rockstargames/sites-rockstargames",
                b = (e, a, d, t) => {
                  var c = f[e] = f[e] || {},
                    b = c[a];
                  (!b || !b.loaded && (!t != !b.eager ? t : r > b.from)) && (c[a] = {
                    get: d,
                    from: r,
                    eager: !!t
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var c = _(e);
                    if (!c) return;
                    var f = e => e && e.init && e.init(_.S[d], t);
                    if (c.then) return n.push(c.then(f, a));
                    var r = f(c);
                    if (r && r.then) return n.push(r.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === d && (b("@foundry/icons", "4.1.4", (() => Promise.all([_.e(4105), _.e(2109), _.e(2229), _.e(4853), _.e(3684)]).then((() => () => _(32109))))), b("@foundry/react", "4.1.5", (() => Promise.all([_.e(3972), _.e(4105), _.e(4446), _.e(1689), _.e(2454), _.e(2229), _.e(4853), _.e(8618), _.e(954)]).then((() => () => _(12454))))), b("@rockstar/sentry", "5.1.1", (() => Promise.all([_.e(4979), _.e(2229), _.e(3404)]).then((() => () => _(44979))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([_.e(2315), _.e(2229), _.e(1154)]).then((() => () => _(67439))))), b("@rsgweb/modules-core-screenshot-viewer", "0.0.0", (() => Promise.all([_.e(2229), _.e(9623), _.e(4116)]).then((() => () => _(64116))))), b("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([_.e(3972), _.e(6496), _.e(3149), _.e(4105), _.e(4446), _.e(2229), _.e(1898), _.e(9623), _.e(1045), _.e(5966), _.e(4281), _.e(8618), _.e(1411), _.e(8444), _.e(6175)]).then((() => () => _(94267))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([_.e(3972), _.e(6496), _.e(3149), _.e(6204), _.e(2229), _.e(9623), _.e(1045), _.e(5966), _.e(8305)]).then((() => () => _(70344))))), b("@rsgweb/router", "1.0.0", (() => Promise.all([_.e(2229), _.e(9623), _.e(1165)]).then((() => () => _(53546))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([_.e(3149), _.e(6956), _.e(2229), _.e(4853), _.e(5966), _.e(4281), _.e(7845), _.e(4221)]).then((() => () => _(47845))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([_.e(3972), _.e(6496), _.e(3149), _.e(2229), _.e(9623), _.e(1045)]).then((() => () => _(82261))))), b("dompurify", "2.5.8", (() => _.e(340).then((() => () => _(30340))))), b("framer-motion", "7.10.3", (() => Promise.all([_.e(3963), _.e(2229), _.e(7710)]).then((() => () => _(53963))))), b("graphql", "16.11.0", (() => _.e(5440).then((() => () => _(55440))))), b("history", "4.10.1", (() => _.e(2465).then((() => () => _(72465))))), b("prop-types", "15.8.1", (() => _.e(8626).then((() => () => _(18626))))), b("react-adaptive-hooks", "0.0.8", (() => Promise.all([_.e(2229), _.e(7185)]).then((() => () => _(27185))))), b("react-device-detect", "2.2.3", (() => Promise.all([_.e(9421), _.e(2229)]).then((() => () => _(89421))))), b("react-dom", "18.3.1", (() => Promise.all([_.e(6019), _.e(2229)]).then((() => () => _(66019))))), b("react-focus-lock", "2.13.6", (() => Promise.all([_.e(2800), _.e(2229), _.e(7145), _.e(1299)]).then((() => () => _(72800))))), b("react-intersection-observer", "9.16.0", (() => Promise.all([_.e(2229), _.e(844)]).then((() => () => _(40844))))), b("react-router-dom", "6.30.0", (() => Promise.all([_.e(510), _.e(2558), _.e(2229), _.e(4853), _.e(3213)]).then((() => () => _(32558))))), b("react-router", "6.30.0", (() => Promise.all([_.e(510), _.e(9697), _.e(2229)]).then((() => () => _(49697))))), b("react", "18.2.0", (() => _.e(614).then((() => () => _(20614))))), b("react", "18.3.1", (() => _.e(1138).then((() => () => _(11138))))), o(62137), o(39247), o(50644), o(40308), o(98674), o(40041), o(29441), o(11955), o(58678), o(94316), o(66819), o(74251), o(25136)), n.length ? e[d] = Promise.all(n).then((() => e[d] = 1)) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          _.g.importScripts && (e = _.g.location + "");
          var a = _.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var t = d.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = d[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), _.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = d[1] ? a(d[1]) : [];
              return d[2] && (t.length++, t.push.apply(t, a(d[2]))), d[3] && (t.push([]), t.push.apply(t, a(d[3]))), t
            },
            a = e => {
              var d = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (d + .5) {
                t += 0 == d ? ">=" : -1 == d ? "<" : 1 == d ? "^" : 2 == d ? "~" : d > 0 ? "=" : "!=";
                for (var c = 1, f = 1; f < e.length; f++) c--, t += "u" == (typeof(b = e[f]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, b);
                return t
              }
              var r = [];
              for (f = 1; f < e.length; f++) {
                var b = e[f];
                r.push(0 === b ? "not(" + o() + ")" : 1 === b ? "(" + o() + " || " + o() + ")" : 2 === b ? r.pop() + " " + r.pop() : a(b))
              }
              return o();

              function o() {
                return r.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, t) => {
              if (0 in a) {
                t = e(t);
                var c = a[0],
                  f = c < 0;
                f && (c = -c - 1);
                for (var r = 0, b = 1, o = !0;; b++, r++) {
                  var n, s, i = b < a.length ? (typeof a[b])[0] : "";
                  if (r >= t.length || "o" == (s = (typeof(n = t[r]))[0])) return !o || ("u" == i ? b > c && !f : "" == i != f);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (b <= c) {
                        if (n != a[b]) return !1
                      } else {
                        if (f ? n > a[b] : n < a[b]) return !1;
                        n != a[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || b <= c) return !1;
                    o = !1, b--
                  } else {
                    if (b <= c || s < i != f) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < a.length; r++) {
                var h = a[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, t) : !u())
              }
              return !!u()
            },
            t = (a, t, c, f) => {
              var r = f ? (e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(r).reduce(((a, t) => !d(c, t) || a && !((a, d) => {
                a = e(a), d = e(d);
                for (var t = 0;;) {
                  if (t >= a.length) return t < d.length && "u" != (typeof d[t])[0];
                  var c = a[t],
                    f = (typeof c)[0];
                  if (t >= d.length) return "u" == f;
                  var r = d[t],
                    b = (typeof r)[0];
                  if (f != b) return "o" == f && "n" == b || "s" == b || "u" == f;
                  if ("o" != f && "u" != f && c != r) return c < r;
                  t++
                }
              })(a, t) ? a : t), 0)) && r[t]
            },
            c = e => {
              throw new Error(e)
            },
            f = (e => function(a, d, t, c, f) {
              var r = _.I(a);
              return r && r.then && !t ? r.then(e.bind(e, a, _.S[a], d, !1, c, f)) : e(a, _.S[a], d, t, c, f)
            })(((e, d, f, r, b, o) => {
              if (!((e, a) => e && _.o(e, a))(d, f)) return ((e, a, d) => d ? d() : ((e, a) => c("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var n, s = t(d, f, b, r);
              return s ? ((n = s).loaded = 1, n.get()) : o ? o() : void c(((e, d, t, c, f) => {
                var r = e[t];
                return "No satisfying version (" + a(c) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + d + ".\nAvailable versions: " + Object.keys(r).map((e => e + " from " + r[e].from)).join(", ")
              })(d, e, f, b, r))
            })),
            r = {},
            b = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => _.e(1138).then((() => () => _(11138))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => _.e(6019).then((() => () => _(66019))))),
              78618: () => f("default", "@foundry/icons", !1, [1, 4], (() => Promise.all([_.e(2109), _.e(4853), _.e(7421)]).then((() => () => _(32109))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([_.e(510), _.e(2558), _.e(4853), _.e(3213)]).then((() => () => _(32558))))),
              61898: () => f("default", "@foundry/react", !1, [1, 4, 1, 5], (() => Promise.all([_.e(4446), _.e(1689), _.e(2454), _.e(4853)]).then((() => () => _(12454))))),
              16565: () => f("default", "graphql", !1, [1, 16, 9, 0], (() => _.e(5440).then((() => () => _(55440))))),
              28897: () => f("default", "react-device-detect", !1, [1, 2, 2, 3], (() => _.e(9421).then((() => () => _(89421))))),
              94944: () => f("default", "react-adaptive-hooks", !1, [3, 0, 0, 8], (() => _.e(9566).then((() => () => _(27185))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([_.e(3972), _.e(6496), _.e(9623), _.e(1045)]).then((() => () => _(82261))))),
              2918: () => f("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([_.e(3972), _.e(6496), _.e(6204), _.e(9623), _.e(1045), _.e(686)]).then((() => () => _(70344))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([_.e(2315), _.e(8773)]).then((() => () => _(67439))))),
              57145: () => f("default", "prop-types", !1, [1, 15, 8, 1], (() => _.e(8626).then((() => () => _(18626))))),
              33213: () => f("default", "react-router", !1, [1, 6, 11, 2], (() => _.e(9697).then((() => () => _(49697))))),
              90: () => f("default", "history", !1, [1, 5, 3, 0], (() => _.e(2465).then((() => () => _(72465))))),
              20270: () => f("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([_.e(4446), _.e(1898), _.e(1411)]).then((() => () => _(94267))))),
              55274: () => f("default", "@rsgweb/router", !1, [1, "workspace:^"], (() => _.e(3546).then((() => () => _(53546))))),
              63582: () => f("default", "framer-motion", !1, [1, 7, 5, 1], (() => _.e(3963).then((() => () => _(53963))))),
              87592: () => f("default", "@rockstar/sentry", !1, [1, 5, 1, 1], (() => _.e(4979).then((() => () => _(44979))))),
              95945: () => f("default", "react-focus-lock", !1, [1, 2, 9, 6], (() => Promise.all([_.e(2800), _.e(7145)]).then((() => () => _(72800))))),
              66664: () => f("default", "react-intersection-observer", !1, [1, 9, 13, 1], (() => _.e(8463).then((() => () => _(40844))))),
              2973: () => f("default", "dompurify", !1, [1, 2, 4, 1], (() => _.e(340).then((() => () => _(30340))))),
              92440: () => f("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([_.e(6956), _.e(7845), _.e(6602)]).then((() => () => _(47845))))),
              90582: () => f("default", "@rsgweb/modules-core-screenshot-viewer", !1, [1, "workspace:^"], (() => _.e(1735).then((() => () => _(64116))))),
              61913: () => f("default", "react", !1, [1, 18, 2, 0], (() => _.e(614).then((() => () => _(20614)))))
            },
            o = {
              582: [90582],
              1045: [16565, 28897, 94944],
              1634: [90, 20270, 55274, 63582, 87592, 95945],
              1898: [61898],
              1913: [61913],
              2229: [62229],
              2973: [2973],
              3213: [33213],
              4281: [2918, 81788],
              4283: [66664],
              4853: [44853],
              5966: [95966],
              7145: [57145],
              8618: [78618],
              8763: [92440],
              9623: [9623]
            },
            n = {};
          _.f.consumes = (e, a) => {
            _.o(o, e) && o[e].forEach((e => {
              if (_.o(r, e)) return a.push(r[e]);
              if (!n[e]) {
                var d = a => {
                  r[e] = 0, _.m[e] = d => {
                    delete _.c[e], d.exports = a()
                  }
                };
                n[e] = !0;
                var t = a => {
                  delete r[e], _.m[e] = d => {
                    throw delete _.c[e], a
                  }
                };
                try {
                  var c = b[e]();
                  c.then ? a.push(r[e] = c.then(d).catch(t)) : d(c)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              1149: 0
            };
            _.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                544: 1,
                609: 1,
                650: 1,
                967: 1,
                1143: 1,
                1411: 1,
                1493: 1,
                1634: 1,
                1689: 1,
                1735: 1,
                1784: 1,
                2454: 1,
                2738: 1,
                3144: 1,
                3684: 1,
                3784: 1,
                3947: 1,
                3967: 1,
                4088: 1,
                4113: 1,
                4116: 1,
                4221: 1,
                4986: 1,
                5342: 1,
                6175: 1,
                6602: 1,
                7421: 1,
                7728: 1,
                7734: 1,
                8030: 1,
                8135: 1,
                8395: 1,
                8510: 1,
                8763: 1,
                9393: 1,
                9499: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var t = _.miniCssF(e),
                  c = _.p + t;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), t = 0; t < d.length; t++) {
                      var c = (r = d[t]).getAttribute("data-href") || r.getAttribute("href");
                      if ("stylesheet" === r.rel && (c === e || c === a)) return r
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var r;
                      if ((c = (r = f[t]).getAttribute("data-href")) === e || c === a) return r
                    }
                  })(t, c)) return a();
                ((e, a, d, t, c) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", _.nc && (f.nonce = _.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) t();
                    else {
                      var r = d && d.type,
                        b = d && d.target && d.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + b + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = r, o.request = b, f.parentNode && f.parentNode.removeChild(f), c(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, c, 0, a, d)
              })))(a).then((() => {
                e[a] = 0
              }), (d => {
                throw delete e[a], d
              })))
            }
          }
        })(), (() => {
          var e = {
            1149: 0
          };
          _.f.j = (a, d) => {
            var t = _.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) d.push(t[2]);
              else if (/^(1(143|626|898|913)|2(229|405|973)|3(137|213|416)|4(2(21|81|83)|853)|5(202|82|966)|6(175|602|766)|7(145|421|538)|8(135|618|778|987)|9(147|393|623))$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((d, c) => t = e[a] = [d, c]));
              d.push(t[2] = c);
              var f = _.p + _.u(a),
                r = new Error;
              _.l(f, (d => {
                if (_.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var c = d && ("load" === d.type ? "missing" : d.type),
                    f = d && d.target && d.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + c + ": " + f + ")", r.name = "ChunkLoadError", r.type = c, r.request = f, t[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var t, c, f = d[0],
                r = d[1],
                b = d[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in r) _.o(r, t) && (_.m[t] = r[t]);
                b && b(_)
              }
              for (a && a(d); o < f.length; o++) c = f[o], _.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            d = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), _.nc = void 0, _(37389), _(95400)
      })())
    }
  }
}));