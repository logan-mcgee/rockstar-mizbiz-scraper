try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0a4e6743-8e75-41fe-8651-2f79b3c8a3b8", e._sentryDebugIdIdentifier = "sentry-dbid-0a4e6743-8e75-41fe-8651-2f79b3c8a3b8")
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
    d = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        d[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, f, t, c, n, o, b = {
            17411: (e, a, r) => {
              const d = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = d(r.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = d
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
              var d = {
                  "./index": () => Promise.all([r.e(3004), r.e(7522), r.e(5117), r.e(4740), r.e(5087), r.e(5325), r.e(9712), r.e(3872), r.e(1127), r.e(8429), r.e(8136), r.e(6990), r.e(336), r.e(181), r.e(1556), r.e(1874), r.e(6130), r.e(6069), r.e(2030), r.e(3226), r.e(1352), r.e(2358), r.e(889), r.e(76), r.e(1125)]).then(() => () => r(28674)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(3004), r.e(3613), r.e(5117), r.e(4740), r.e(4060), r.e(1127), r.e(8429), r.e(8136), r.e(6990), r.e(336), r.e(1556), r.e(6130), r.e(6069), r.e(3226), r.e(2358), r.e(5901)]).then(() => () => r(9949)),
                  "./types": () => Promise.all([r.e(3004), r.e(7522), r.e(5117), r.e(4740), r.e(5087), r.e(5325), r.e(9712), r.e(3872), r.e(1127), r.e(8429), r.e(8136), r.e(6990), r.e(336), r.e(181), r.e(1556), r.e(1874), r.e(6130), r.e(6069), r.e(2030), r.e(3226), r.e(1352), r.e(2358), r.e(889), r.e(76), r.e(1125)]).then(() => () => r(76808))
                },
                f = (e, a) => (r.R = a, a = r.o(d, e) ? d[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                t = (e, a) => {
                  if (r.S) {
                    var d = "default",
                      f = r.S[d];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[d] = e, r.I(d, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => t
              })
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var d = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, t = d.length; f !== a && t >= 0;) "/" === d[--t] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = d.slice(0, t + 1);
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
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var t = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = f(c)) Object.getOwnPropertyNames(c).forEach(e => t[e] = () => a[e]);
          return t.default = () => a, i.d(d, t), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          68: "94f777b23a3fd8bbf96adcf55c45b4d6",
          131: "e72d81691c9d0cc04f1e3131e5d8c236",
          173: "4d2ea7f801ee98fe1f4bf127f105d299",
          278: "fab263c1a03516c8a822b559ab26c08d",
          299: "750b6f0f538d87b04dd50c28083079ce",
          314: "e9adfe8586f29225ddb8ed37804d7d99",
          386: "90d8417fc824337a84c237aa00d83c97",
          439: "45e6a027a3950700bbaab0cb65f75ddd",
          602: "d15d22eaac76186534f197b5772c9773",
          662: "f2626c3919958b3ad64365a472b7be54",
          824: "0e183417b0a3d022b93a75805df69b7d",
          884: "2c8bf120f364b2695f42c7a476e08618",
          889: "66aa39cf7251f69368c22734167463a0",
          907: "6560f3e87707ec5c9732daf71bad05a3",
          1054: "f59418e74afe9ba19004f2a44e06250e",
          1057: "b9b3c02085f3695873744af68b319aea",
          1098: "066acb354485e4d9d8fc98576cb5a83e",
          1125: "ff6d06da6d276deb752e01633df0bb02",
          1242: "3b799c40d027fc8720328291e32875a7",
          1758: "0cb1f76cc4491bd5a2f084599dd1170a",
          1822: "d97a9cf57e8903a1ea85c1e17750de8a",
          1868: "b3a5a74c5bfd6965afd8495437b73701",
          1871: "50cc1292370e5defaeb274e6d56bbb3b",
          2065: "5622dcb78818378211fd3429a3a72a96",
          2156: "5d00cf6796c3155d348ee9037c0754f8",
          2169: "2884e49fc4b752453f2380a15fd9e15b",
          2171: "a12664f92adb40129fb646a12f5a65ba",
          2221: "487c27eaee411a9f75188fa441ae86fe",
          2234: "5a82d3890975bedef8efc2724c4ac7a2",
          2243: "a58e3f08b82909b0f56c65757ed7e752",
          2306: "df4a1bb26eaa90882b0720c265ca7ad4",
          2347: "4d7422374cdd4661bf4bf3244b724abe",
          2358: "10afd34fd0622509bb19ca0ec2382002",
          2365: "0bf84997fe668c96c45631f54f6e5f96",
          2368: "a638889334fd24f223de96c72c4d57ca",
          2398: "d68b8a5eefb62b050897163f7ce55332",
          2424: "da14dba12b2d84ac54d811ee996c51d4",
          2466: "315f48f350859a8a5956b576dd54996d",
          2642: "92e908efd9a1fd16c018e167975a16ad",
          2678: "5dd5ee462a6b85cc15fa56c46d3f0a21",
          2787: "c5e839b2e1ff87f6e8a32a9762a21ff3",
          2864: "c9d3df4847ee0fd1a4211238f77639d2",
          3004: "5b4fc0c74d04b900ab46c5983fa87102",
          3034: "77f54ebd96b3a7a2b20074d3f98f2d41",
          3197: "8cbc1a29a1ca45ab309eeae1dd5e1992",
          3343: "bcc10b40f10b2ead2cbc34ffdcc07a3a",
          3370: "4103be3bb7024eaf9e21fca336bebcf6",
          3387: "12732f71bc081cae0e32c123171d0c5d",
          3438: "d49629dfdb1a755ef03066bab606ecdd",
          3475: "92fded2a6ec37404de848a9d7af5c2f1",
          3486: "0f0c63414ca30eaa02638ce25dabea25",
          3613: "61a8e98a2fcddd15cc87d2c1b08d8036",
          3697: "d2de28f1a95c7e68f23032860703e6d7",
          3872: "a89d09afe3bd69563eafb71fa7977273",
          3885: "a487fb1185df42ae8d16aebb036b3511",
          3896: "423bb41843a2a94913ff8009f9bb4c68",
          3941: "630f4219474af812d642c197241159fe",
          4011: "aecda1eec49cf4f2c09bb3b02bde202f",
          4057: "e2f994729c8f4220aa31955820ad67e4",
          4060: "9e3abee4181906d69b7b2588faf2b12f",
          4528: "6be9d372b7d619eca1aca49b59df3f23",
          4550: "2a8ffe114cd515cdafd888e2907d4552",
          4578: "4d8f22dfceade78d773226804a71066c",
          4621: "083dce5c76d5147e71b9370c9a25d4b2",
          4700: "d8cddbc2ef294aaa85d2016adacb3fc9",
          4710: "24339ad6529f14283f1dbe4d414097f9",
          4731: "40ed8398113011f8f9c21030303619f4",
          4740: "a087a9a9242e45678cbf8c1361a9293e",
          4799: "5a420972c23703f28808b003f5d4e993",
          4851: "be0723f1c5b64fcc0848a8c6630db184",
          4861: "3022f7427060f8b9960048acbaeacb13",
          4913: "ffebb68725ff9c8a05592695c99f23c3",
          5018: "38dca1951d712f0372b67a784464591c",
          5076: "4f894603119c74d09e6900abf79a2bbc",
          5085: "18be80e25dd8e3621e6ed06f1f6946cd",
          5087: "e08217dd96ab3016b843ea465a537090",
          5117: "cd09577d017687718a2e34173e61a7f3",
          5233: "f139814d4b25baa71532a25aefe7eb31",
          5259: "0e9f4c86a7b5dbfa22a23d1129106a9a",
          5265: "8ae929363350762e08fd88c76743e1f6",
          5325: "b194473b4ac5d4aabd175cf14e97eb6a",
          5389: "0cc9a9df3546479256ab54c6196f9e8b",
          5400: "84f377c737544cb01364aae6ec80aaee",
          5415: "bc58b5e69f19d75946f450cbf4e97b39",
          5493: "e3075213b4a0715f98795ce9ec401740",
          5530: "8ea4a1453836cf3d191db35f4a339141",
          5639: "c06fa1679f88f738b9744906bf63f8c7",
          5663: "e35b057be766125a775f6e40715324e6",
          5742: "c3c12fb4f3a9969bc163e3a9557cd032",
          5830: "65a248e2cc13095e10ce21a182abd745",
          5832: "ccb9ce62f665c45b1f0aebdad7732273",
          5859: "85b0ace257b2393f4378214e749cc97e",
          5901: "2a726b15bb15a11911b57bfaa18a52fd",
          6130: "914cb942cbd68ce7f80986bdfd0e4b25",
          6267: "271e2e054944ebfd9d4eb3c78d1c4f5d",
          6280: "800a8f1f377bc7e103a1e2873aac1925",
          6285: "30241c9e9794c88369926d7565fe3bca",
          6327: "da5bb0018e68d1f8598840f8933877f7",
          6361: "dbfb27ef9f501f0ac1a3ea6a44324e7a",
          6471: "0f08a836b1c7e8083821538c02c54086",
          6531: "31ef2e16d125b700b6e922d21b3d3d4c",
          6664: "9259bfca6ac1dae7e8d366a7aa8f5a4a",
          6783: "0e28c92a2dec0918708ead0ddefc4be6",
          6879: "6b3891440657a2330476003530e0b1e2",
          6891: "909bc1f24e499aa08daef248999963c9",
          6997: "4b1fbe100325af33d01f45a7d778afb4",
          7010: "ccee35187e47372cb83c1a150f392451",
          7073: "f1203d5b164d571b81215e316d7212e0",
          7407: "3f13e1fead0313ecd1be872827de7c60",
          7436: "8f17ecbbc48198fe9a2f0264f56766fb",
          7452: "236665809437f15395f2171f8a0c5754",
          7453: "a7febcbbc3d4c80a910b8f9944181f09",
          7522: "78581f8855e319c69c731fd27b54bc71",
          7785: "70a0b1e033fdd94295fb5d25d6b68d0b",
          7970: "12548e3416b3a638c2b180ae65ca7b7d",
          8068: "fd60503b19960b72ae2c63e506374dc6",
          8240: "fcf5861a240fa76a74ee886fba6ec9ed",
          8272: "ee85e5d55ef53c1392ab024a5b074501",
          8325: "9dd6bd6012619472ee674cee8618be78",
          8391: "5fcaac245e12548e2975917ad44f36db",
          8431: "239acbb6e1310edd4775a6fa125f0350",
          8503: "16c92102deadf5667baa5e74d2e4ed7c",
          8708: "5082767c57d86c99d97cda679980d08a",
          8755: "aa8867ddb8b717885bc5ec629094c1be",
          8845: "6b0493c673b06cae6efb969be20dbc80",
          8880: "ab4171d732a474de6e865a5ebb323829",
          8938: "3febc29c27213e23626d4f16c22ccbdb",
          8970: "d6faef3bce49978246bc30551a3cf2e2",
          9022: "434813806ad996b151aea768b579e11d",
          9028: "0906a43bc4608d5c65c29ca8a7015615",
          9126: "5b5be76d9b3d2d7e02aa20ff63608ad6",
          9164: "4cd77a0ea45147b3377e3bd68bdc387c",
          9377: "82f58f64b3e7cf820726e6ffdd5d2793",
          9477: "a791ed5c2bc0f98c74b31851a7fb1a16",
          9615: "d69b1833b9c68dce5c33eeb6586fefe0",
          9712: "2628e1a6dba1300ed54bafc8c12670a1",
          9760: "4a56592e87cb22a33c1024d38642b6f7",
          9923: "34f2cba780914248b21bab378ee12c5c",
          9936: "3acaa1487d78749fddada7c10aa0fcf4",
          9987: "f9e958b99af929ec32e1c6f589c598a2",
          9990: "aa8f66148b5dde4ab6281d73e4f7943b"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "34cab69c02779739127f3b0ad51e5f64",
          386: "992246d8865d1231ddc1cd276d544330",
          884: "214e2f94528af5f726d2150d0a4f2215",
          889: "bee7e71bb03044211d6b687fb92a9805",
          1057: "3af92259c369f40eec2a7d0f90f67d96",
          1125: "f111edb9e6a36ce2e9dc7a4727e1cee0",
          2358: "165fa99f963184aba806d81f713ae37c",
          3226: "3a4070d4c77506d8955255a1ccc7b2a6",
          3438: "3af92259c369f40eec2a7d0f90f67d96",
          3872: "ed78d69898cf7c75ad9f3c7f513105b2",
          4297: "15e4405e61879889fa95b861d8f64a87",
          5040: "c30f3c8a99525fcaf9c0832853c3f081",
          5325: "e15233c2a75a58ec0a041cda067d26aa",
          5901: "c1eb0999629396bc2adecd5b07d203b7",
          6069: "ff5d40a08af069c8bbed595ff7e87c9b",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8683: "ec396ec8a36762ae49c6722682ad4e04",
          9923: "64d7f9e177dae263f83a61669b860024"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, c = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, d) => {
          if (t[e]) t[e].push(a);
          else {
            var f, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + r) {
                  f = s;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", c + r), f.src = e), t[e] = [a];
            var l = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach(e => e(r)), a) return a(r)
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
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          2358: [64064],
          3226: [31879],
          5901: [11438, 17523, 44019, 83166]
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
            var d = o[e];
            if (!(r.indexOf(d) >= 0)) {
              if (r.push(d), d.p) return a.push(d.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), i.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                t = (e, r, t, c, n, o) => {
                  try {
                    var b = e(r, t);
                    if (!b || !b.then) return n(b, c, o);
                    var s = b.then(e => n(e, c), f);
                    if (!o) return s;
                    a.push(d.p = s)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => t(a.get, d[1], r, 0, n, f),
                n = a => {
                  d.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(i, d[2], 0, 0, (e, a, r) => e ? t(i.I, d[0], 0, e, c, r) : f(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, d) => {
            d || (d = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(d.indexOf(f) >= 0)) {
              if (d.push(f), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var t = i.S[r],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, a, r, d) => {
                  var f = t[e] = t[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!d != !n.eager ? d : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!d
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = i(e);
                    if (!f) return;
                    var t = e => e && e.init && e.init(i.S[r], d);
                    if (f.then) return b.push(f.then(t, a));
                    var c = t(f);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (n("@foundry/react", "5.19.0", () => Promise.all([i.e(3004), i.e(3613), i.e(602), i.e(2787), i.e(5325), i.e(386), i.e(1127), i.e(8429), i.e(1556), i.e(6531)]).then(() => () => i(10554))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3004), i.e(2787), i.e(5493), i.e(1127), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(3004), i.e(3613), i.e(7522), i.e(4740), i.e(1127), i.e(8429), i.e(8136), i.e(1556), i.e(6069), i.e(8683), i.e(1871)]).then(() => () => i(89477))), n("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(3004), i.e(3613), i.e(7522), i.e(5087), i.e(9712), i.e(1127), i.e(8429), i.e(8136), i.e(6990), i.e(181), i.e(1556), i.e(1874), i.e(2030), i.e(1352), i.e(2424), i.e(889), i.e(9923)]).then(() => () => i(89600))), n("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([i.e(7522), i.e(4740), i.e(1127), i.e(8136), i.e(1556), i.e(6069), i.e(2030), i.e(3226), i.e(76), i.e(884)]).then(() => () => i(90884))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(7522), i.e(5087), i.e(1127), i.e(6990), i.e(1874), i.e(2030), i.e(1352), i.e(4297), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(602), i.e(2065), i.e(8068), i.e(1127), i.e(8136), i.e(6990), i.e(336), i.e(181), i.e(5085), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5117), i.e(1127), i.e(8429), i.e(8136), i.e(6990), i.e(336), i.e(1874), i.e(6130), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(3004), i.e(602), i.e(2065), i.e(4057), i.e(1127), i.e(6990), i.e(336), i.e(181), i.e(5085), i.e(6783)]).then(() => () => i(66783))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("dompurify", "2.5.8", () => i.e(7785).then(() => () => i(27785))), n("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(1127), i.e(6327)]).then(() => () => i(76327))), n("react-jsx-parser", "2.4.1", () => Promise.all([i.e(3387), i.e(1127)]).then(() => () => i(43387))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), n("text-balancer", "1.0.5", () => i.e(5400).then(() => () => i(75400))), o(25136), o(29441)), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var d = r.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = r[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = r[1] ? a(r[1]) : [];
              return r[2] && (d.length++, d.push.apply(d, a(r[2]))), r[3] && (d.push([]), d.push.apply(d, a(r[3]))), d
            },
            a = e => {
              var r = e[0],
                d = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                d += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var f = 1, t = 1; t < e.length; t++) f--, d += "u" == (typeof(n = e[t]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return d
              }
              var c = [];
              for (t = 1; t < e.length; t++) {
                var n = e[t];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var f = a[0],
                  t = f < 0;
                t && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, s, i = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= d.length || "o" == (s = (typeof(b = d[c]))[0])) return !o || ("u" == i ? n > f && !t : "" == i != t);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (n <= f) {
                        if (b != a[n]) return !1
                      } else {
                        if (t ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (t || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || s < i != t) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, d) : !u())
              }
              return !!u()
            },
            d = (a, r, d) => {
              var f = d ? (e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}))(a[r]) : a[r];
              return Object.keys(f).reduce((a, r) => !a || !f[a].loaded && ((a, r) => {
                a = e(a), r = e(r);
                for (var d = 0;;) {
                  if (d >= a.length) return d < r.length && "u" != (typeof r[d])[0];
                  var f = a[d],
                    t = (typeof f)[0];
                  if (d >= r.length) return "u" == t;
                  var c = r[d],
                    n = (typeof c)[0];
                  if (t != n) return "o" == t && "n" == n || "s" == n || "u" == t;
                  if ("o" != t && "u" != t && f != c) return f < c;
                  d++
                }
              })(a, r) ? r : a, 0)
            },
            f = (e, a, r) => r ? r() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            t = (e => function(a, r, d, f, t) {
              var c = i.I(a);
              return c && c.then && !d ? c.then(e.bind(e, a, i.S[a], r, !1, f, t)) : e(a, i.S[a], r, d, f, t)
            })((e, t, c, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(t, c)) return f(e, c, b);
              var s, l, u = d(t, c, n);
              return r(o, u) || (l = ((e, r, d, f) => "Unsatisfied version " + d + " from " + (d && e[r][d].from) + " of shared singleton module " + r + " (required " + a(f) + ")")(t, c, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = t[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              71127: () => t("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              18429: () => t("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              58136: () => t("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(602), i.e(2065), i.e(4057), i.e(6990), i.e(336), i.e(181), i.e(5085), i.e(9164)]).then(() => () => i(66783))),
              56990: () => t("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(2787), i.e(5493), i.e(5859)]).then(() => () => i(12841))),
              10336: () => t("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              10181: () => t("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              1556: () => t("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              61874: () => t("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([i.e(602), i.e(2065), i.e(8068), i.e(8136), i.e(336), i.e(181), i.e(5085), i.e(2169)]).then(() => () => i(32169))),
              22030: () => t("default", "@rsgweb/tina", !1, [4, 0, 0, 0], () => Promise.all([i.e(5117), i.e(8429), i.e(8136), i.e(6990), i.e(336), i.e(1874), i.e(6130), i.e(3438)]).then(() => () => i(99747))),
              48863: () => t("default", "dompurify", !1, [1, 2, 4, 1], () => i.e(7785).then(() => () => i(27785))),
              21352: () => t("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              23529: () => t("default", "@foundry/react", !1, [2, 5, 19], () => Promise.all([i.e(3613), i.e(602), i.e(2787), i.e(5325), i.e(386)]).then(() => () => i(10554))),
              6900: () => t("default", "@rsgweb/modules-core-engagement", !1, [4, 0, 0, 0], () => Promise.all([i.e(3613), i.e(2424), i.e(5040)]).then(() => () => i(89600))),
              9596: () => t("default", "@rsgweb/modules-core-group-of-items", !1, [4, 0, 0, 0], () => i.e(8503).then(() => () => i(90884))),
              36444: () => t("default", "@rsgweb/modules-core-highlights", !1, [4, 0, 0, 0], () => Promise.all([i.e(4297), i.e(9987)]).then(() => () => i(32368))),
              39540: () => t("default", "@rsgweb/modules-core-carousel", !1, [4, 0, 0, 0], () => Promise.all([i.e(3613), i.e(8683), i.e(9477)]).then(() => () => i(89477))),
              79518: () => t("default", "react-jsx-parser", !1, [1, 2, 2, 2], () => i.e(3387).then(() => () => i(43387))),
              87608: () => t("default", "text-balancer", !1, [1, 1, 0, 5], () => i.e(5400).then(() => () => i(75400)))
            },
            o = {
              181: [10181],
              336: [10336],
              889: [23529],
              1125: [6900, 9596, 36444, 39540, 79518, 87608],
              1127: [71127],
              1352: [21352],
              1556: [1556],
              1874: [61874],
              2030: [22030],
              3226: [48863],
              6990: [56990],
              8136: [58136],
              8429: [18429]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var r = a => {
                  c[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete c[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? a.push(c[e] = f.then(r).catch(d)) : r(f)
                } catch (e) {
                  d(e)
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
                76: 1,
                386: 1,
                884: 1,
                889: 1,
                1057: 1,
                1125: 1,
                2358: 1,
                3226: 1,
                3438: 1,
                3872: 1,
                4297: 1,
                5040: 1,
                5325: 1,
                5901: 1,
                6069: 1,
                8503: 1,
                8683: 1,
                9923: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var d = i.miniCssF(e),
                  f = i.p + d;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), d = 0; d < r.length; d++) {
                      var f = (c = r[d]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var t = document.getElementsByTagName("style");
                    for (d = 0; d < t.length; d++) {
                      var c;
                      if ((f = (c = t[d]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(d, f)) return a();
                ((e, a, r, d, f) => {
                  var t = document.createElement("link");
                  t.rel = "stylesheet", t.type = "text/css", i.nc && (t.nonce = i.nc), t.onerror = t.onload = r => {
                    if (t.onerror = t.onload = null, "load" === r.type) d();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, t.parentNode && t.parentNode.removeChild(t), f(o)
                    }
                  }, t.href = a, document.head.appendChild(t)
                })(e, f, 0, a, r)
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
            var d = i.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) r.push(d[2]);
              else if (/^(1(127|352|556|81|874)|8(136|429|683)|(203|504|699)0|(322|33|7)6|4297|6069)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => d = e[a] = [r, f]);
              r.push(d[2] = f);
              var t = i.p + i.u(a),
                c = new Error;
              i.l(t, r => {
                if (i.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    t = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + t + ")", c.name = "ChunkLoadError", c.type = f, c.request = t, d[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var d, f, [t, c, n] = r,
                o = 0;
              if (t.some(a => 0 !== e[a])) {
                for (d in c) i.o(c, d) && (i.m[d] = c[d]);
                n && n(i)
              }
              for (a && a(r); o < t.length; o++) f = t[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
});