try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f5412b32-5251-408e-9df6-07b23045a1e3", e._sentryDebugIdIdentifier = "sentry-dbid-f5412b32-5251-408e-9df6-07b23045a1e3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, System.register(["@rockstargames/modules-core-footer", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-header", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer", "@rockstargames/sites-careers", "@rockstargames/sites-gta-gen9", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-tv", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-rockstar-tv"], (function(e, a) {
  var d = {},
    c = {},
    t = {},
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
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
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
        c[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
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
        var e, p, m, g, y, v, w = {
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
              e.exports = c
            },
            39247: e => {
              "use strict";
              e.exports = t
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
                for (var c = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, f = c.length; t !== a && f >= 0;) "/" === c[--f] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var r = c.slice(0, f + 1);
                return d.protocol + "//" + d.host + r
              };
              Number.isInteger
            },
            74251: e => {
              "use strict";
              e.exports = h
            },
            77600: (e, a, d) => {
              const c = d(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = c(d.y.meta.url, e)
              }
            },
            94316: e => {
              "use strict";
              e.exports = s
            },
            95400: (e, a, d) => {
              "use strict";
              var c = {
                  "./bootstrap": () => d.e(7706).then((() => () => d(97706)))
                },
                t = (e, a) => (d.R = a, a = d.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                f = (e, a) => {
                  if (d.S) {
                    var c = "default",
                      t = d.S[c];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[c] = e, d.I(c, a)
                  }
                };
              d.d(a, {
                get: () => t,
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
          var c = Object.create(null);
          _.r(c);
          var t = {};
          e = e || [null, p({}), p([]), p(p)];
          for (var f = 2 & d && a;
            "object" == typeof f && !~e.indexOf(f); f = p(f)) Object.getOwnPropertyNames(f).forEach((e => t[e] = () => a[e]));
          return t.default = () => a, _.d(c, t), c
        }, _.d = (e, a) => {
          for (var d in a) _.o(a, d) && !_.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, _.f = {}, _.e = e => Promise.all(Object.keys(_.f).reduce(((a, d) => (_.f[d](e, a), a)), [])), _.u = e => "js/" + {
          131: "7d1510452f9ca4b87fbb4accb6a0e467",
          191: "eb60cd5f421695700d72f1847ee3ddc3",
          278: "72cbdd54173ffdf04945afdcfde3c71f",
          299: "e5d8424ea5d3ce9c40389af214e9f41a",
          314: "bc9f1b75fcbf0f4ec16cc786319edd01",
          449: "85fa54de5b5af4ac0f667e14df826a7c",
          489: "7a3df1da7e47b966c1f24ad946ce6834",
          540: "03c7fe5f2009a2d6e729f7afa00525fa",
          554: "24886231da97538ae3fd91cf446e1f19",
          583: "d77d731eaedd3831dddbeb3e1187ccb5",
          587: "7478f3128c9f3e31cb2ab1e571eb8019",
          621: "f62d73c28e291333507062be6f621ab7",
          656: "20b822bbf1aab47e4e113bfe3c1c26cd",
          662: "b1d46e0920ed6cab434b68f88a0c753a",
          823: "6bb0d14bb25015d52b3330f1dcda7ee7",
          824: "65303ef3f7ffe1e6454860e2fa30ccf5",
          838: "d371a6d55d8020948a0387c273de27da",
          907: "a1c1e3ab3f288aeb21d531a824c46e29",
          1054: "ad12c852310bd8298f3d3fd8eef271a9",
          1235: "9648ac21bea3e647f5db50baef99dbe0",
          1242: "1b012493c272bd7a317b0e259e62030e",
          1280: "2d61193e1a5be78d0bc3fcc15ea126ce",
          1314: "52f5cc6dea1198cd884896f65a8b7e82",
          1345: "1704d9e5e2144005d750e37ae348d4ba",
          1381: "6606d7f60d464244087ec55198cfac71",
          1478: "cd83b88b1f4f70f75ae85378826e1cb9",
          1513: "e50aea75495a6198288d3c06e60efe74",
          1515: "6bac27ffe312459f8292ea786eb9f6bd",
          1608: "660145cabc368dac6d610971af046084",
          1707: "f3e2a8032ec0a44ede96dca62806df85",
          1822: "6ed0416e846258789f6dc4ce48451533",
          1868: "9dfa9eb51b6fc14255f800ca8e74081d",
          2156: "ed7e520f2782d3b08a72980d4405b93b",
          2171: "e5f9233ded3fde7f5e3b1d0bf31ca731",
          2176: "934e5907ad8395e8e535425624b3bff2",
          2221: "a81a74fc42d40dd61263e42274078897",
          2243: "b2e3177b8668a087acf972ab2fe724bc",
          2347: "147078aa0d8e13cf4e804793869351b4",
          2365: "88d9b6e997b747e54bf8909cab3c6f57",
          2398: "5bef09d27f6d9743cd0d6f26ffe26bb2",
          2466: "c9e768aab127c876607467563523b4b2",
          2487: "432244ef04efb2338829ba3b9d1c7a41",
          2522: "4df020c522ad0fb55a3b4943090bcf37",
          2572: "53de2242070add0e89965b1733530815",
          2578: "04678fea34c99f1612bf9792abf1bc79",
          2642: "af9453563f5234b4ecbb063271978fe5",
          2678: "046915ffbf3b79c1900754426444a7e5",
          2782: "334090be70d986f78f82ae0b024f7bbc",
          2864: "21d6e8bfbcb231e5cb6037ce6a53cecd",
          2909: "55948083e4b9c57185cbf4dfb1cc2554",
          2975: "56950dd2ea62206b537932bd79a8339f",
          3002: "3ce560e25006d0360c6decea9ebca07f",
          3034: "f345954143a769d0e40c6fae0a7966c0",
          3041: "407a86f16a339f5d0a91878cc98e336e",
          3197: "8755df7f41fa08a26330095a92abc5a6",
          3218: "4fc302526cd43411bd9e0ef550f907b4",
          3252: "8e0440e37cf12f1489b40a18c7f53370",
          3299: "37d91e95ee0d3b234eafb9a7a8e415d4",
          3343: "5fe2b6c7483bdeb41deb4212437fdbd0",
          3370: "a613599e25a9fdf7349895d48e14fc6b",
          3397: "dbfd4e9822bfd86550ae5209f7934ff6",
          3409: "c9f7bc98d414ec0885cff6a71b13ba9a",
          3411: "b7687a8ccb76aeda49936e0a692d47f3",
          3461: "065e9ee2fc25fe4a4a61de511bd18de1",
          3475: "4bcdb6a4a63c031fc815303093197ab4",
          3486: "591c2332c49d056f78b6e1e2de9cec64",
          3514: "072928a79c8302f485460a11cb2aa281",
          3586: "62180e6f19e2e15f8ce13544a4c19d6f",
          3663: "79719ebafea260680f39fd03a9988337",
          3672: "ceed61b88f37c5f598d809fc6df61589",
          3697: "b4331ca167f5dc55832b8a3bbe54679c",
          3744: "4c70f2e3f522afdd6f0463b14453eb11",
          3885: "6ffeb557f638473fe4f665e8eec36fac",
          3941: "ad346132b9fbe9654b05b725852957a6",
          4011: "816fb16d966a1f67175250d8a2e8491d",
          4119: "ffa249e1c2a766c3290d0dc23b09d966",
          4153: "6324ddcd1028160e68f018e0336987b9",
          4281: "942a86a0efb9b74379f6922461a8984a",
          4309: "f381865a149ffb7fb254c475d07a986a",
          4332: "a8f5e0adb1cedc48c04ff2316525ce6a",
          4465: "0f4b3610810b0e9268759cec17aac768",
          4480: "e251715758256de23a3b2e889d725898",
          4495: "1775e44c27e84b92a0c707e1794e3f16",
          4528: "43e2d471aa5a1c2ce4b9689714517f6c",
          4546: "8d4cbae9f2ef025a3b3a56e5023828a5",
          4621: "8514bc11e3e382ed80fc3c18596c1cae",
          4650: "34db01985bc34a4912c22e2d5ac38967",
          4684: "65292466dec3f64352827ac4f7bcc270",
          4700: "0ccf68602b5635159757399cd57a3f1c",
          4710: "d16d9b6890f867e604f724143992e0a1",
          4731: "1f7908fc854d3a383f3b8abb79f594c5",
          4799: "b0b91f2cb899ca3b683e573143b0f3e6",
          4851: "972a840dee5937db239bd0928e52f772",
          4861: "eca82e5f6cda95fbf4272913ef55ac11",
          4913: "72edb0d31b2ae3f4a45172a7cf8fb603",
          5018: "3ae771966cc55c7f5022443712cd9f32",
          5074: "db64a6b9879a26d701579444f932fe0e",
          5233: "81feac8c2cca92582addedee536bcfa8",
          5259: "20a88a2b7dbca5a450ff21a094cadc36",
          5322: "b39979fd5b9977d2035d80f3d56f96a4",
          5395: "0d78dd863b7619bfba69e1f3267b7a8b",
          5422: "a41ac4900a3e83a0fc63099cff123778",
          5530: "1d1e932e1ce33897317a6943cf51c2fa",
          5639: "d9ba0d8dccd09bec9b226da8963242cb",
          5658: "529ff6e737de5bbc2704b3cc0b204a5c",
          5663: "c7effea4e38fa9c85e17340a65f60e4a",
          5734: "a93d7fce62def72166c90fbd03e0bde1",
          5742: "9fa45ebe6545eea926735a92798a1ef6",
          5790: "e87b3fb68ee3b41f54e1159b8a2a9c64",
          5830: "c53894709221312fcff060f75deba1dd",
          5832: "f29863ec61b5f159f6fc1a58e77c0dfa",
          5854: "765e54fd6b8f9c712621abd40b94d9e2",
          6038: "8dc3a39d5442677a2c6b532c68500162",
          6139: "0464f801a88b8eae9fa7ed286c99a5fb",
          6239: "647f2b36971ff240bd2216343804e593",
          6267: "0692b1d7e92c3e13226eb54a926b28f1",
          6274: "a8ab2b776df5ebc9bf3c450b46ee20f8",
          6280: "97d47e54bba94bf0020bb6f188bc52f6",
          6285: "d1799135ab7a429dbdf9483caa4fca7d",
          6361: "16470929664de9dae5c782449e578ce9",
          6566: "cac863ae0e97f5f0cdf90bdba09ec4a2",
          6664: "dcace92c88ad1b204df484deca7c07c7",
          6839: "ebbb260a63e2f49a3c962afd825c61b9",
          6879: "6a6ea9cd15a3f8cf60eb0fb16801b315",
          6891: "93744be7a8d0d8273238a53d07c87822",
          6997: "780bdfb93c26766c722eaa2f6dc149df",
          7010: "842f3515eb232944a6a72ffd2b896aa0",
          7048: "fcdec8ea45df309c8305a0711912549f",
          7073: "5fce989bc5c49c428ab16bb96e2d9216",
          7144: "4710caccc2e43cf980a89f2ca560d927",
          7242: "0853d36e7b9e5638006dadfe1c79e36c",
          7353: "72c11c9fead270bc0a135c05c248079f",
          7365: "34d69e1c6f70c61324c6dff2a2afd8c0",
          7436: "31ed23a279e98218804864cf42f3974e",
          7452: "39229d3f45a0aaa3a5117277f6aed5e9",
          7453: "e82ec9cfb9ee6ede5798986d38d2d53b",
          7485: "277563baac811f230a21876cda553d09",
          7542: "fd628e48f54780facca2d5e519611ff4",
          7706: "99174b9e61c9179debb2da047b753736",
          7709: "00dd71c5a9bc800f7b1496cb165bc2c0",
          7727: "cb73592bf3890d1b1803e9dedb3cb453",
          7743: "68c9793fb77e0bb06d064292d7eacd17",
          7893: "f49941c19958aa42710de5e2eb12fbd1",
          7970: "34550020028982597eb567d07e5469af",
          8072: "82163d18b3bae761edb38884e4518294",
          8076: "2a09c73b8c974d1b3d2302bd0b69d09b",
          8123: "cbff8d9cb03e063fa3f79a614809c581",
          8159: "12b010bec488c4a7afbe20e649bcb9e6",
          8272: "8689ab554f0c8ba595d8188b64177de5",
          8275: "50485c2bf9ab6863a0ab0d7b146e7421",
          8348: "3ae4515fcd02fd3f2e9a8027c7446a74",
          8381: "4d97a4cb80c93250c49f301a839a7661",
          8391: "22aeeb5c49000b069f0240e0ea53dc2f",
          8457: "26ab5f77eee3fe13da0be4fcff383108",
          8525: "d8ae0cdc72cfa7c5adb4de851b49ab83",
          8557: "33df23c47b44a5410ee3090747938648",
          8610: "6bae7ce8cfc76fa1932d2a1fec481dcf",
          8631: "2f463bed282cc9793465584550825220",
          8654: "8200b2050aa86cf99bf29d4a10b123ab",
          8755: "01985ffe03e476e5eedc1cce4f281aea",
          8841: "f3cc45c2c074c93242755254c09244f6",
          8880: "a5671e6cf5a03bcf25a0136f5b601e6b",
          8933: "62070c73a209035fab861342f705ddc5",
          8970: "9f2bfe093b0f7aff3b534cb7689effce",
          9022: "2358fe13bdcea8aeb5f27aa159bc6daa",
          9024: "bca503936141c68d8bdb6502e85db1ee",
          9028: "ed4d6852761c57abf98dfd8831dd3b58",
          9058: "7e4db55ff8050f7a1f2f91b4e510ddab",
          9126: "e1c67607c03eec981876d6fb7b8797df",
          9185: "0b80fd23eadf7ca29ff0dc99ca886a83",
          9281: "c04f75ba29d833b6fe83f5060b16cf90",
          9323: "003b5858521ea9d0585c7da0684f2df6",
          9377: "38d1b2d7d03b1af862d8a65f5dc86e19",
          9464: "55a38ffa24f87d42da1911489cfbaf07",
          9536: "c183bd14bd3a290ba4c3655e2c26a5ef",
          9583: "09e128297390fa3012dc15b7d0248f04",
          9615: "c8328468a07c6ddd28889d1201e5ab88",
          9649: "0c4b6fb93e45aa216704bbcb1a16f0dd",
          9746: "bae08a33570de25ebaa0a785d1ab85ef",
          9936: "10b4aa12c622607d0b124404f2d5ef8d",
          9990: "b880115eaff48c25f05e9032a2882426"
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
          4332: "8c54eafe63b721a4b746d728c7cc8b9e",
          4465: "5f09753f1fe897b2a2998c52a055a269",
          5269: "103081b3d23c2e415ff7fd2af7854845",
          5322: "487c3cc9f7c6da71dbe6cd7fcdc30712",
          5395: "ee522b6566d7cc1dad8eb5b91b1682eb",
          5534: "b4eb91207cb1c0d6f6ebe85799ef51f3",
          5658: "b13e6ddc90cb08675d51cf9fbd895475",
          5760: "6a9e1a41fbf5b4b2592198f759298318",
          6139: "6aaa4e1f68545c29c192b393969676c5",
          6566: "d2b0b3aa0ce1c4f69f91d09ff9df2189",
          6839: "e6dc1f510b0a4211c6e54bff1fd4c607",
          6854: "9a619201f06ab44ebffd1eedf4b66181",
          7365: "eee6e9f0ed632fce1325de4b9e936e9d",
          7650: "103081b3d23c2e415ff7fd2af7854845",
          8123: "1b78d4fe05a5f12236b67224cf939aae",
          8381: "9f736656b64d08c10be4436477e505d3",
          8405: "eba5ca2952033fb543111765a9b069a0",
          8610: "6c3702b945e23d2a4b564b2039410d2e",
          9024: "7acba850d92fd5d6eb886a603fe69082",
          9058: "3a0244366a6892f54e57fbd7ec3b8f04",
          9185: "8a12a1ca6c45759e55c6ac366bc2861b",
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
        }), e), _.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), m = {}, g = "@rockstargames/sites-rockstargames:", _.l = (e, a, d, c) => {
          if (m[e]) m[e].push(a);
          else {
            var t, f;
            if (void 0 !== d)
              for (var r = document.getElementsByTagName("script"), o = 0; o < r.length; o++) {
                var b = r[o];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == g + d) {
                  t = b;
                  break
                }
              }
            t || (f = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, _.nc && t.setAttribute("nonce", _.nc), t.setAttribute("data-webpack", g + d), t.src = e), m[e] = [a];
            var n = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(s);
                var c = m[e];
                if (delete m[e], t.parentNode && t.parentNode.removeChild(t), c && c.forEach((e => e(d))), a) return a(d)
              },
              s = setTimeout(n.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = n.bind(null, t.onerror), t.onload = n.bind(null, t.onload), f && document.head.appendChild(t)
          }
        }, _.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, _.nmd = e => (e.paths = [], e.children || (e.children = []), e), y = {
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
          _.o(y, e) && y[e].forEach((e => {
            var d = _.R;
            d || (d = []);
            var c = v[e];
            if (!(d.indexOf(c) >= 0)) {
              if (d.push(c), c.p) return a.push(c.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), _.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                f = (e, d, f, r, o, b) => {
                  try {
                    var n = e(d, f);
                    if (!n || !n.then) return o(n, r, b);
                    var s = n.then((e => o(e, r)), t);
                    if (!b) return s;
                    a.push(c.p = s)
                  } catch (e) {
                    t(e)
                  }
                },
                r = (e, a, t) => f(a.get, c[1], d, 0, o, t),
                o = a => {
                  c.p = 1, _.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(_, c[2], 0, 0, ((e, a, d) => e ? f(_.I, c[0], 0, e, r, d) : t()), 1)
            }
          }))
        }, (() => {
          _.S = {};
          var e = {},
            a = {};
          _.I = (d, c) => {
            c || (c = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(c.indexOf(t) >= 0)) {
              if (c.push(t), e[d]) return e[d];
              _.o(_.S, d) || (_.S[d] = {});
              var f = _.S[d],
                r = "@rockstargames/sites-rockstargames",
                o = (e, a, d, c) => {
                  var t = f[e] = f[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!c != !o.eager ? c : r > o.from)) && (t[a] = {
                    get: d,
                    from: r,
                    eager: !!c
                  })
                },
                b = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var t = _(e);
                    if (!t) return;
                    var f = e => e && e.init && e.init(_.S[d], c);
                    if (t.then) return n.push(t.then(f, a));
                    var r = f(t);
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
              for (var c = d.length - 1; c > -1 && (!e || !/^http(s?):/.test(e));) e = d[c--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), _.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                c = d[1] ? a(d[1]) : [];
              return d[2] && (c.length++, c.push.apply(c, a(d[2]))), d[3] && (c.push([]), c.push.apply(c, a(d[3]))), c
            },
            a = e => {
              var d = e[0],
                c = "";
              if (1 === e.length) return "*";
              if (d + .5) {
                c += 0 == d ? ">=" : -1 == d ? "<" : 1 == d ? "^" : 2 == d ? "~" : d > 0 ? "=" : "!=";
                for (var t = 1, f = 1; f < e.length; f++) t--, c += "u" == (typeof(o = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return c
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
            d = (a, c) => {
              if (0 in a) {
                c = e(c);
                var t = a[0],
                  f = t < 0;
                f && (t = -t - 1);
                for (var r = 0, o = 1, b = !0;; o++, r++) {
                  var n, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (r >= c.length || "o" == (s = (typeof(n = c[r]))[0])) return !b || ("u" == i ? o > t && !f : "" == i != f);
                  if ("u" == s) {
                    if (!b || "u" != i) return !1
                  } else if (b)
                    if (i == s)
                      if (o <= t) {
                        if (n != a[o]) return !1
                      } else {
                        if (f ? n > a[o] : n < a[o]) return !1;
                        n != a[o] && (b = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || o <= t) return !1;
                    b = !1, o--
                  } else {
                    if (o <= t || s < i != f) return !1;
                    b = !1
                  } else "s" != i && "n" != i && (b = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < a.length; r++) {
                var h = a[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, c) : !u())
              }
              return !!u()
            },
            c = (a, c, t, f) => {
              var r = f ? (e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}))(a[c]) : a[c];
              return (c = Object.keys(r).reduce(((a, c) => !d(t, c) || a && !((a, d) => {
                a = e(a), d = e(d);
                for (var c = 0;;) {
                  if (c >= a.length) return c < d.length && "u" != (typeof d[c])[0];
                  var t = a[c],
                    f = (typeof t)[0];
                  if (c >= d.length) return "u" == f;
                  var r = d[c],
                    o = (typeof r)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && t != r) return t < r;
                  c++
                }
              })(a, c) ? a : c), 0)) && r[c]
            },
            t = e => {
              throw new Error(e)
            },
            f = (e => function(a, d, c, t, f) {
              var r = _.I(a);
              return r && r.then && !c ? r.then(e.bind(e, a, _.S[a], d, !1, t, f)) : e(a, _.S[a], d, c, t, f)
            })(((e, d, f, r, o, b) => {
              if (!((e, a) => e && _.o(e, a))(d, f)) return ((e, a, d) => d ? d() : ((e, a) => t("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, b);
              var n, s = c(d, f, o, r);
              return s ? ((n = s).loaded = 1, n.get()) : b ? b() : void t(((e, d, c, t, f) => {
                var r = e[c];
                return "No satisfying version (" + a(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + c + " found in shared scope " + d + ".\nAvailable versions: " + Object.keys(r).map((e => e + " from " + r[e].from)).join(", ")
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
              87592: () => f("default", "@rockstar/sentry", !1, [1, 5, 1, 1], (() => _.e(583).then((() => () => _(50583))))),
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
              2782: [90, 55274, 63582, 87592, 95945],
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
                var c = a => {
                  delete r[e], _.m[e] = d => {
                    throw delete _.c[e], a
                  }
                };
                try {
                  var t = o[e]();
                  t.then ? a.push(r[e] = t.then(d).catch(c)) : d(t)
                } catch (e) {
                  c(e)
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
                4332: 1,
                4465: 1,
                5269: 1,
                5322: 1,
                5395: 1,
                5534: 1,
                5658: 1,
                5760: 1,
                6139: 1,
                6566: 1,
                6839: 1,
                6854: 1,
                7365: 1,
                7650: 1,
                8123: 1,
                8381: 1,
                8405: 1,
                8610: 1,
                9024: 1,
                9058: 1,
                9185: 1,
                9281: 1,
                9323: 1,
                9746: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var c = _.miniCssF(e),
                  t = _.p + c;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), c = 0; c < d.length; c++) {
                      var t = (r = d[c]).getAttribute("data-href") || r.getAttribute("href");
                      if ("stylesheet" === r.rel && (t === e || t === a)) return r
                    }
                    var f = document.getElementsByTagName("style");
                    for (c = 0; c < f.length; c++) {
                      var r;
                      if ((t = (r = f[c]).getAttribute("data-href")) === e || t === a) return r
                    }
                  })(c, t)) return a();
                ((e, a, d, c, t) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", _.nc && (f.nonce = _.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) c();
                    else {
                      var r = d && d.type,
                        o = d && d.target && d.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = r, b.request = o, f.parentNode && f.parentNode.removeChild(f), t(b)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, t, 0, a, d)
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
            var c = _.o(e, a) ? e[a] : void 0;
            if (0 !== c)
              if (c) d.push(c[2]);
              else if (/^(1(626|898|913)|2(229|405|973)|3(137|416|804)|4(283|853|977)|5(202|269|534|760|82|966)|6(662|766|854)|7(145|247|538|650)|8(405|618|778|987)|9147|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((d, t) => c = e[a] = [d, t]));
              d.push(c[2] = t);
              var f = _.p + _.u(a),
                r = new Error;
              _.l(f, (d => {
                if (_.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    f = d && d.target && d.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", r.name = "ChunkLoadError", r.type = t, r.request = f, c[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var c, t, f = d[0],
                r = d[1],
                o = d[2],
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (c in r) _.o(r, c) && (_.m[c] = r[c]);
                o && o(_)
              }
              for (a && a(d); b < f.length; b++) t = f[b], _.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), _.nc = void 0, _(44857), _(95400)
      })())
    }
  }
}));