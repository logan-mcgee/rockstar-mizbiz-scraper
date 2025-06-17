! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b8f585f2-63cf-47f8-bfea-52dadcc69d25", e._sentryDebugIdIdentifier = "sentry-dbid-b8f585f2-63cf-47f8-bfea-52dadcc69d25")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-footer", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-header", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer", "@rockstargames/sites-careers", "@rockstargames/sites-gta-gen9", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-tv", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-rockstar-tv"], (function(e, a) {
  var d = {},
    t = {},
    c = {},
    f = {},
    r = {},
    o = {},
    b = {},
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
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(b, "__esModule", {
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
        o[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        b[a] = e[a]
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
        var e, p, m, y, g, v, w = {
            11955: e => {
              "use strict";
              e.exports = b
            },
            13218: (e, a, d) => {
              (0, d(77600).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            29441: e => {
              "use strict";
              e.exports = t
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
            44857: (e, a, d) => {
              d(13218)
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
            67884: (e, a, d) => {
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
            74251: e => {
              "use strict";
              e.exports = h
            },
            77600: (e, a, d) => {
              const t = d(67884).y;
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
                  "./bootstrap": () => d.e(7706).then((() => () => d(97706)))
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
              e.exports = o
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
          131: "34e6643d8b3a6bd705581fa99100b56e",
          191: "eb7120fec92a99f17db0ab387374e4ec",
          278: "eede745967166f9c694b8195c80ccfae",
          299: "791d9e1725beff68a3fc34a7671a39c3",
          314: "eff03d4d66f428d612bc691d3760b0a2",
          449: "bdd91733c87ac84ff3a33849af1f31a5",
          489: "b4110ed9d978ead544beece9eccb6085",
          540: "33d979d23861fb208a0dccf3ea2d3585",
          554: "a7a695cf619128f034dd8045573040e8",
          583: "bc392495749f48143d06c528f308136f",
          587: "c82c75f52e794eddb958b29327e139ac",
          621: "b19138b6e60b1345164653e86da85508",
          656: "fcb71e8d53f1f13db12b5a8a2cbd34e1",
          662: "7d4d490283ed95df42ab8e8ef7f968b9",
          823: "34a9b9ce5af9287ab2fe8aa35b0901c1",
          824: "47a862b06bc5db8de77ad83297243093",
          838: "55cb0c0ebe0b898cf5aabf5f333f6a52",
          907: "d5de9f642d5c25aedbc336c902ac45dc",
          1054: "eccc001027b22ed833b720cd3e9d1103",
          1235: "0bf46b447118ed45b181c67a7babcad6",
          1242: "5bf5c822eaf67229f9c8dbf9007fa356",
          1280: "003a6a7cbc864dc2684f8039755806bc",
          1314: "239d3d675365e4398ddd2c12994bd7ea",
          1345: "da57bf2c003d71b1b26121eed623282f",
          1381: "0b1b01deda6e5c17fa1e1cb40b203725",
          1478: "0fe71847bf1013ed381f3ae46b1a2a5d",
          1513: "d223ea02694f87ccb552f721f52a4bc5",
          1515: "fb4011ea4dcd1028536d7e48d2bf13cc",
          1707: "6570bfcd1ff1e21b0a2d5680f526045e",
          1822: "d087e984d8aa78c15109055cf9fdc93b",
          1868: "f1c2320d340570dee422723d5a3555c1",
          2156: "f1ed89e70c72e3a929288c7aa33cf9ef",
          2171: "ecd55a489b4c507df91f9d40db7d77a8",
          2176: "cda0ddc0bd0257acd22666851fb61404",
          2221: "1840432c6bfcfa1257aca620bf0e8a32",
          2243: "4b4c66dbb66a0f444756d4c970b417e8",
          2347: "dd716b1d8db9a19e2646784e6a535626",
          2365: "e3ede6607fdbb0f9be5a3c18feb4fda2",
          2398: "730a67dde9a35d7476fb1faa6f96c662",
          2466: "18c9200159c3e3db5c9150c57da3f8a6",
          2487: "2797db1f1ec46f25a941b7bb432484e3",
          2522: "d86727f7395b668ac1bab62ca7f0462d",
          2572: "c0cd1a34f9fee1c4fd02e4f38335466f",
          2578: "1ecc662d7e8529c84cf91803eaa2596a",
          2642: "736e40e21336b3dd527e4ebae3b8164d",
          2678: "a2263795a10a4c433d527f38766b3591",
          2782: "051137762544d33bc27d1a2493a4a196",
          2864: "47696b42124ef7fa69846be1586bd0a6",
          2909: "514bc0d7afc322d79eb230bc72c0a669",
          2975: "c632fa1940d3d18af7ad42c71be7228b",
          3002: "1f725787659cb486764dd47de13863c4",
          3034: "6d0b642050ec1467f171f02fdc7d2e7c",
          3041: "a10d01310003cc7ab4f28c1f4e6ace97",
          3197: "0391d6adac5be8aa1bfaa32c50abca07",
          3218: "016807d9c9a29b755ce2f4dc69dca3dd",
          3252: "1dcd40eb999bd6e4de658f24d585e3cd",
          3299: "f080d90b57b73cfd791520583909b69d",
          3343: "01c2f683f8ed1ad356c8b959186f2e7f",
          3370: "c3ab094f0cedf81b374a49026fbf3b4f",
          3397: "d10b47d83aca890761ff958f3b0cbae0",
          3409: "cf9985845273987c603007de120eac01",
          3411: "ae13ad762ce83f728eba8adeda5d1516",
          3461: "4fea4fa582a1a0933ba0ea3dc949b8d3",
          3475: "5599e26c232b5f9fd8aa2784952ba127",
          3486: "4f64edd9303052bf3ab29287c98cd80d",
          3514: "1ba0799f4483ab620f23188acdfd5787",
          3586: "aff07c4384d4e3188de58a2e17200952",
          3663: "c69569cccb4259373e4015bed332fd29",
          3672: "0cfb2b0b2f81f94561fb1640fb54b42f",
          3697: "f701a820cf4215bdf48ba1b99b225489",
          3744: "cea3beb504651d387270aa480c739ee3",
          3764: "9dd098ed51784659d400cbeb4210cfcb",
          3885: "c494295f426d38fa17283c233581558e",
          3941: "b439bfe42f9de68fc511d7d4a7c5cc28",
          4011: "0f39fef25a5d23a6776c7d08ed7fa5bb",
          4119: "86656279bbbe6dde33b155ff8ddb6489",
          4153: "c39707619520bd62e11fdbc682a606d1",
          4281: "5171992dd47e46728afd34244b044878",
          4309: "4dbaf33e0313ca9ac24332c1c5189b1a",
          4465: "f95132af41c52c76bd5df2c2e3d2d330",
          4480: "985d35e64a07e6b55e9bac00193cef4a",
          4495: "b3eac0a67305f544cd8f6c5fbca7e616",
          4528: "e8fdedc9164439caf5de6fe7899590dc",
          4546: "e8a1c22b3f1124cfe38ae2416c87783c",
          4621: "162d1416b6f1ce8b3935b5289539161f",
          4650: "050e46c7c1f9265110d527019d1541ae",
          4684: "e7b372acd7d271b34cb93c5c5660a116",
          4700: "58f638279b43050336c2723276723922",
          4710: "55965104fe1f69474807a562fa410392",
          4728: "81c058de509848fe8fea9cc7aa1e29e8",
          4731: "2da704c6c88c2b25e23f0996b6814b9e",
          4799: "3fc007cfc7b829a3de3cf00137ff831b",
          4851: "3794542094c60bbb8a35ce79cc56db22",
          4861: "f24079b70a528651f990674bacf79fd3",
          4913: "24ff70a020e2e3486255682ccdf40ce1",
          5018: "47c4be0f47d37986ebbd654fca1eef5a",
          5074: "b884cf3d0648e850432746960db1c079",
          5233: "4f5b0f08b4808963fb3ea554858ec987",
          5259: "c1e0328b69891facbdac3755fdb9f396",
          5322: "adf2fa7c1de9d9aafb18df1226726540",
          5395: "0267c68f3146052f987738183e4cfa6c",
          5422: "acd42e0717d1d14a32548b9bd095b90c",
          5530: "877b94f809cf0c8d573cacff42af7d33",
          5639: "b65d39cbb4b736b1efca738b1bb048dd",
          5658: "e0c5b77de889401d5cf071d079ced3f9",
          5663: "a59b1b671c08ee816b841c0e51dbe30a",
          5734: "150b601dbae88a632cdcb50a7a95b227",
          5742: "31b650ee26e7d300b95a6271b2abea33",
          5790: "0b30aa040cf64a23b60ceb8855dff1da",
          5830: "ff6ce005979e0dd9ce031b3e7e6eafe2",
          5832: "2f5b6bd1274566c1b2eee838cbb9f2e0",
          5854: "df8baf708d2d815c88f281b6cb8f118f",
          6038: "b040c06e0c797527c067ff7a71d6568b",
          6198: "bda6f62247889d7b09264e9711e0d130",
          6239: "3d3e0745ef42bde1f4e7e61b6977f245",
          6267: "dc63072b8bfe5b858829ea408155fd5f",
          6274: "e9424384cfffb81a494661b13f0b1c10",
          6280: "413e3c580a3444460a9d05735cf1eca6",
          6285: "5442b7e321870e6eb70cc4cdc7a37d2f",
          6361: "227f4928c954e85ae8cbbf3868ed745c",
          6566: "10264cfbc99704262393bed345a3ab0a",
          6664: "4a10098b2278f15c2e217fa54d7bab6e",
          6669: "20fb6b909cf016ffcfe15345506bf0dc",
          6839: "e65cbc27a19134650a6d9f98f65b5f17",
          6879: "a3a616a36532ea54686858cf845d14bd",
          6891: "18d2ac30facc6fbfd3d07489057f24b9",
          6969: "cafd42b0699e8dadaa7f6a7dadf9468d",
          6997: "5d658490256a43112558a8498d2df2d9",
          7010: "6d5b24ee5388904cd9ab1af108c327af",
          7048: "1609820c66445c7a6b3583106ded4679",
          7073: "35286f91f6508dfa02ed8456e7498f7e",
          7144: "e87f3ad85cee3b2e3757339ca8eac66f",
          7242: "fcd65fa507e1af2db5f2a3ded77e27b3",
          7353: "c486639c03f825bee2391440a511ac7a",
          7365: "5f6c208a5c923b9498d9672027944357",
          7436: "a65eb22a47b17d5f319ea573b1bd264d",
          7452: "dae6673a5f86b48c1ad9d438b2189ebc",
          7453: "07fc1c1411122d08eb40cdb770b87c4b",
          7485: "8bd7ed873668ca0cbe3bc8a70fa0165e",
          7542: "35543c7a5e96cc7f9cdcd4799e3bc350",
          7706: "6cce025c4962799fadfa0d7207afb8e7",
          7709: "1ac2297b2e1b51af7466656fb00a8a08",
          7727: "c0a7b35f0e336ce2e03207fca888b04c",
          7743: "f4ce9a21a4954d9649fa7c8302d94ec6",
          7796: "bab4b013f15037f1d438fffc9001381f",
          7893: "83a09f7898928132430113168b09471b",
          7970: "f20263d696e15cfd424b125760b2de46",
          8072: "9bd3f3043cd2cd98edbeda22a4e0520b",
          8076: "8cc238fa3617643be587a520cbc45530",
          8123: "a7331d1b6a539d95ed8ec164a883bbfd",
          8159: "688afae987d58d5829fa98cfab7fedd3",
          8272: "f2733f15855d2da661ad4d3c1d811cd2",
          8275: "8f225caa84b439c20ca454829041bbff",
          8348: "462e4ce7625a154c40daec346005db7c",
          8391: "139bce18ff6865fd8891493b223a4119",
          8457: "21506abf89f9d45d79592a4baa8609ff",
          8525: "9ebe68e6734ca6a857234bf8fc741399",
          8557: "2d0bcf990465cdf6b66ce8cb1e633c51",
          8631: "5de21b9d40bb831c62faa4b74a0451b2",
          8654: "d5a5785d4c3dd275857eb8767da5b8fc",
          8755: "16065f4d72c8a83b9cf2f5f4e3cb2103",
          8841: "21bc14f41d020100ffa871f71a252347",
          8880: "a2e927cf5d79da152021c1eac3e32f98",
          8933: "f833de9ff78119dd0e890861d11ee2cb",
          8970: "6258d063a8ad5b24ef90cfce5b53c2d7",
          9022: "a5d5f42fdc06c906a5e332e43d20785d",
          9024: "265f282c881ecd4f00e46ebcc75248a3",
          9028: "5f454f5057907dc26c662aa2ca3587f4",
          9058: "c7c7fecaae6a4292ea0f62bb73731ea0",
          9126: "47becfed8dbb600119d3e60ebfe586be",
          9281: "c39643a8e8e5b63c9b0bb8c4599a262c",
          9323: "53fd8c81be039666c805c3d1d68f99b3",
          9377: "0c3497488bb0fc964bd13749b64adf36",
          9464: "64f0ab97d075ce23c76a7d84f39b345a",
          9536: "72fe2165460c69e1b20c9fba437daded",
          9583: "a75cc0147bc2620d5260799b0a6e1610",
          9615: "8259621b4ec86572a9097e5062a4d1f7",
          9649: "d43c7a86a3fb5892402666c6342838eb",
          9746: "dc56cfb73886991fe23390ab37c0c6a7",
          9936: "15bc68a3e25497489f41f0586c746840",
          9990: "fdb6367875a77417d9ddfcd3d0eb98d8"
        } [e] + ".js", _.miniCssF = e => "css/" + {
          554: "071cc98fed939b12a1345c71ee2e5bcd",
          587: "44538e156e338ff9fc4b30e95df98d3a",
          1235: "f570a444f163b90870c40dab3f01333b",
          1515: "00da2e0e23a224264b47c1039da843d4",
          2176: "bbc3aa4f4a5918e71769d52dc4e1ae69",
          2487: "9a619201f06ab44ebffd1eedf4b66181",
          2782: "61ad271d6bc1b688f93acbc04956e2b7",
          3411: "615045abc585319694acddea25b967f4",
          3461: "4e3aebb3dcf768d430a9e319192cb178",
          3744: "a66604d9c40591515e417b1c2691f870",
          3764: "1ab73f172af7fce2af1136218fef2da8",
          4465: "5f09753f1fe897b2a2998c52a055a269",
          4728: "a0090a0a57b90a4b87c210475e8e0bdf",
          5269: "103081b3d23c2e415ff7fd2af7854845",
          5322: "487c3cc9f7c6da71dbe6cd7fcdc30712",
          5395: "ee522b6566d7cc1dad8eb5b91b1682eb",
          5534: "b4eb91207cb1c0d6f6ebe85799ef51f3",
          5658: "b13e6ddc90cb08675d51cf9fbd895475",
          5760: "6a9e1a41fbf5b4b2592198f759298318",
          6198: "418392c63e296e9fda08d39e6b510397",
          6566: "d2b0b3aa0ce1c4f69f91d09ff9df2189",
          6669: "699adf23986a3df7754bbfde9700a33d",
          6839: "e6dc1f510b0a4211c6e54bff1fd4c607",
          6854: "9a619201f06ab44ebffd1eedf4b66181",
          6969: "d4fb808058003fd92a27c47e9fff384b",
          7365: "eee6e9f0ed632fce1325de4b9e936e9d",
          7650: "103081b3d23c2e415ff7fd2af7854845",
          8123: "1b78d4fe05a5f12236b67224cf939aae",
          8405: "eba5ca2952033fb543111765a9b069a0",
          9024: "7acba850d92fd5d6eb886a603fe69082",
          9058: "3a0244366a6892f54e57fbd7ec3b8f04",
          9281: "33bdecb88e11029d504a45c07708efcf",
          9323: "39ff845de0d2fcb1bf3791c8cbf70db8",
          9746: "eee6e9f0ed632fce1325de4b9e936e9d"
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
        }), e), _.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), m = {}, y = "@rockstargames/sites-rockstargames:", _.l = (e, a, d, t) => {
          if (m[e]) m[e].push(a);
          else {
            var c, f;
            if (void 0 !== d)
              for (var r = document.getElementsByTagName("script"), o = 0; o < r.length; o++) {
                var b = r[o];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == y + d) {
                  c = b;
                  break
                }
              }
            c || (f = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, _.nc && c.setAttribute("nonce", _.nc), c.setAttribute("data-webpack", y + d), c.src = e), m[e] = [a];
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
        }, _.nmd = e => (e.paths = [], e.children || (e.children = []), e), g = {
          1626: [41626],
          2405: [12405],
          2782: [39848, 41263],
          3137: [53137],
          3416: [33416],
          5202: [35202],
          5395: [31879],
          6766: [36766],
          6839: [94057],
          7538: [47538],
          8778: [78778],
          8841: [9566],
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
          _.o(g, e) && g[e].forEach((e => {
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
                f = (e, d, f, r, o, b) => {
                  try {
                    var n = e(d, f);
                    if (!n || !n.then) return o(n, r, b);
                    var s = n.then((e => o(e, r)), c);
                    if (!b) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    c(e)
                  }
                },
                r = (e, a, c) => f(a.get, t[1], d, 0, o, c),
                o = a => {
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
                o = (e, a, d, t) => {
                  var c = f[e] = f[e] || {},
                    o = c[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : r > o.from)) && (c[a] = {
                    get: d,
                    from: r,
                    eager: !!t
                  })
                },
                b = e => {
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
              return "default" === d && (o("@foundry/icons", "4.1.4", (() => Promise.all([_.e(5790), _.e(3299), _.e(2229), _.e(4977), _.e(2487)]).then((() => () => _(23299))))), o("@foundry/react", "4.1.5", (() => Promise.all([_.e(2909), _.e(5790), _.e(9281), _.e(2176), _.e(2229), _.e(8618), _.e(4853), _.e(3804), _.e(5854)]).then((() => () => _(59281))))), o("@rockstar/sentry", "5.1.1", (() => Promise.all([_.e(583), _.e(2229), _.e(7144)]).then((() => () => _(50583))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([_.e(3218), _.e(2229), _.e(838)]).then((() => () => _(35671))))), o("@rsgweb/modules-core-screenshot-viewer", "0.0.0", (() => Promise.all([_.e(2229), _.e(9623), _.e(7365)]).then((() => () => _(67365))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([_.e(2909), _.e(8348), _.e(5074), _.e(7709), _.e(2229), _.e(9623), _.e(4309), _.e(5966), _.e(7542)]).then((() => () => _(80763))))), o("@rsgweb/router", "1.0.0", (() => Promise.all([_.e(2229), _.e(9623), _.e(8159)]).then((() => () => _(68159))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([_.e(5074), _.e(7743), _.e(2229), _.e(4853), _.e(5966), _.e(6274), _.e(6662), _.e(7650)]).then((() => () => _(16274))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([_.e(2909), _.e(8348), _.e(5074), _.e(2229), _.e(9623), _.e(4309)]).then((() => () => _(35553))))), o("dompurify", "2.5.8", (() => _.e(7048).then((() => () => _(17048))))), o("framer-motion", "7.10.3", (() => Promise.all([_.e(7485), _.e(2229), _.e(1707)]).then((() => () => _(17485))))), o("graphql", "16.11.0", (() => _.e(4546).then((() => () => _(24546))))), o("history", "4.10.1", (() => _.e(8072).then((() => () => _(28072))))), o("prop-types", "15.8.1", (() => _.e(1478).then((() => () => _(61478))))), o("react-adaptive-hooks", "0.0.8", (() => Promise.all([_.e(2229), _.e(8933)]).then((() => () => _(88933))))), o("react-device-detect", "2.2.3", (() => Promise.all([_.e(1345), _.e(2229)]).then((() => () => _(1345))))), o("react-dom", "18.3.1", (() => Promise.all([_.e(3663), _.e(2229)]).then((() => () => _(53663))))), o("react-dom", "19.1.0", (() => Promise.all([_.e(2229), _.e(5422)]).then((() => () => _(65422))))), o("react-dom", "19.1.0", (() => Promise.all([_.e(2229), _.e(8275)]).then((() => () => _(78275))))), o("react-dom", "19.1.0", (() => Promise.all([_.e(2229), _.e(9649)]).then((() => () => _(19649))))), o("react-dom", "19.1.0", (() => Promise.all([_.e(2229), _.e(621)]).then((() => () => _(90621))))), o("react-focus-lock", "2.13.6", (() => Promise.all([_.e(6038), _.e(2229), _.e(7145), _.e(3514)]).then((() => () => _(16038))))), o("react-intersection-observer", "9.16.0", (() => Promise.all([_.e(2229), _.e(191)]).then((() => () => _(40191))))), o("react-router-dom", "6.30.0", (() => Promise.all([_.e(7242), _.e(4650), _.e(2229), _.e(7247)]).then((() => () => _(54650))))), o("react-router", "6.30.0", (() => Promise.all([_.e(7242), _.e(8525), _.e(2229)]).then((() => () => _(48525))))), o("react", "18.2.0", (() => _.e(2522).then((() => () => _(42522))))), o("react", "18.3.1", (() => _.e(8654).then((() => () => _(98654))))), b(62137), b(39247), b(50644), b(40308), b(98674), b(40041), b(29441), b(11955), b(58678), b(94316), b(66819), b(74251), b(25136)), n.length ? e[d] = Promise.all(n).then((() => e[d] = 1)) : e[d] = 1
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
                for (var c = 1, f = 1; f < e.length; f++) c--, t += "u" == (typeof(o = e[f]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, o);
                return t
              }
              var r = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                r.push(0 === o ? "not(" + b() + ")" : 1 === o ? "(" + b() + " || " + b() + ")" : 2 === o ? r.pop() + " " + r.pop() : a(o))
              }
              return b();

              function b() {
                return r.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, t) => {
              if (0 in a) {
                t = e(t);
                var c = a[0],
                  f = c < 0;
                f && (c = -c - 1);
                for (var r = 0, o = 1, b = !0;; o++, r++) {
                  var n, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (r >= t.length || "o" == (s = (typeof(n = t[r]))[0])) return !b || ("u" == i ? o > c && !f : "" == i != f);
                  if ("u" == s) {
                    if (!b || "u" != i) return !1
                  } else if (b)
                    if (i == s)
                      if (o <= c) {
                        if (n != a[o]) return !1
                      } else {
                        if (f ? n > a[o] : n < a[o]) return !1;
                        n != a[o] && (b = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || o <= c) return !1;
                    b = !1, o--
                  } else {
                    if (o <= c || s < i != f) return !1;
                    b = !1
                  } else "s" != i && "n" != i && (b = !1, o--)
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
                    o = (typeof r)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
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
            })(((e, d, f, r, o, b) => {
              if (!((e, a) => e && _.o(e, a))(d, f)) return ((e, a, d) => d ? d() : ((e, a) => c("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, b);
              var n, s = t(d, f, o, r);
              return s ? ((n = s).loaded = 1, n.get()) : b ? b() : void c(((e, d, t, c, f) => {
                var r = e[t];
                return "No satisfying version (" + a(c) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + d + ".\nAvailable versions: " + Object.keys(r).map((e => e + " from " + r[e].from)).join(", ")
              })(d, e, f, o, r))
            })),
            r = {},
            o = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => _.e(8654).then((() => () => _(98654))))),
              34977: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => _.e(656).then((() => () => _(78275))))),
              78618: () => f("default", "@foundry/icons", !1, [1, 4], (() => Promise.all([_.e(3299), _.e(4977), _.e(6854)]).then((() => () => _(23299))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => _.e(3663).then((() => () => _(53663))))),
              33804: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => _.e(3041).then((() => () => _(65422))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([_.e(7242), _.e(4650), _.e(7247)]).then((() => () => _(54650))))),
              16565: () => f("default", "graphql", !1, [1, 16, 9, 0], (() => _.e(4546).then((() => () => _(24546))))),
              28897: () => f("default", "react-device-detect", !1, [1, 2, 2, 3], (() => _.e(1345).then((() => () => _(1345))))),
              94944: () => f("default", "react-adaptive-hooks", !1, [3, 0, 0, 8], (() => _.e(1314).then((() => () => _(88933))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([_.e(2909), _.e(8348), _.e(9623), _.e(4309)]).then((() => () => _(35553))))),
              2918: () => f("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([_.e(2909), _.e(8348), _.e(7709), _.e(9623), _.e(4309), _.e(1513)]).then((() => () => _(80763))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([_.e(3218), _.e(8457)]).then((() => () => _(35671))))),
              57145: () => f("default", "prop-types", !1, [1, 15, 8, 1], (() => _.e(1478).then((() => () => _(61478))))),
              23271: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => _.e(3002).then((() => () => _(90621))))),
              33213: () => f("default", "react-router", !1, [1, 6, 11, 2], (() => _.e(8525).then((() => () => _(48525))))),
              90: () => f("default", "history", !1, [1, 5, 3, 0], (() => _.e(8072).then((() => () => _(28072))))),
              55274: () => f("default", "@rsgweb/router", !1, [1, "workspace:^"], (() => _.e(3397).then((() => () => _(68159))))),
              63582: () => f("default", "framer-motion", !1, [1, 7, 5, 1], (() => _.e(7485).then((() => () => _(17485))))),
              95412: () => f("default", "@rockstar/sentry", !1, [1, 5, 0, 0], (() => _.e(583).then((() => () => _(50583))))),
              95945: () => f("default", "react-focus-lock", !1, [1, 2, 9, 6], (() => Promise.all([_.e(6038), _.e(7145)]).then((() => () => _(16038))))),
              66664: () => f("default", "react-intersection-observer", !1, [1, 9, 13, 1], (() => _.e(2572).then((() => () => _(40191))))),
              61898: () => f("default", "@foundry/react", !1, [1, 4, 1, 5], (() => Promise.all([_.e(9281), _.e(8618)]).then((() => () => _(59281))))),
              2973: () => f("default", "dompurify", !1, [1, 2, 4, 1], (() => _.e(7048).then((() => () => _(17048))))),
              92440: () => f("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([_.e(7743), _.e(6274), _.e(5269)]).then((() => () => _(16274))))),
              90582: () => f("default", "@rsgweb/modules-core-screenshot-viewer", !1, [1, "workspace:^"], (() => _.e(9746).then((() => () => _(67365))))),
              61913: () => f("default", "react", !1, [1, 18, 2, 0], (() => _.e(2522).then((() => () => _(42522)))))
            },
            b = {
              582: [90582],
              1898: [61898],
              1913: [61913],
              2229: [62229],
              2782: [90, 55274, 63582, 95412, 95945],
              2973: [2973],
              3804: [33804],
              4283: [66664],
              4309: [16565, 28897, 94944],
              4853: [44853],
              4977: [34977],
              5966: [95966],
              6662: [2918, 81788],
              6839: [92440],
              7145: [57145],
              7247: [23271, 33213],
              8618: [78618],
              9623: [9623]
            },
            n = {};
          _.f.consumes = (e, a) => {
            _.o(b, e) && b[e].forEach((e => {
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
                  var c = o[e]();
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
                554: 1,
                587: 1,
                1235: 1,
                1515: 1,
                2176: 1,
                2487: 1,
                2782: 1,
                3411: 1,
                3461: 1,
                3744: 1,
                3764: 1,
                4465: 1,
                4728: 1,
                5269: 1,
                5322: 1,
                5395: 1,
                5534: 1,
                5658: 1,
                5760: 1,
                6198: 1,
                6566: 1,
                6669: 1,
                6839: 1,
                6854: 1,
                6969: 1,
                7365: 1,
                7650: 1,
                8123: 1,
                8405: 1,
                9024: 1,
                9058: 1,
                9281: 1,
                9323: 1,
                9746: 1
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
                        o = d && d.target && d.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = r, b.request = o, f.parentNode && f.parentNode.removeChild(f), c(b)
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
              else if (/^(1(626|898|913)|2(229|405|973)|3(137|416|804)|4(283|853|977)|5(202|269|534|760|82|966)|6(662|766|854)|7(145|247|538|650)|8(405|618|778|987)|9147|9623)$/.test(a)) e[a] = 0;
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
                o = d[2],
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in r) _.o(r, t) && (_.m[t] = r[t]);
                o && o(_)
              }
              for (a && a(d); b < f.length; b++) c = f[b], _.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            d = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), _.nc = void 0, _(44857), _(95400)
      })())
    }
  }
}));