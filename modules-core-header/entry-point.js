! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "96b5d52a-5aea-48d8-936a-de13adce028a", e._sentryDebugIdIdentifier = "sentry-dbid-96b5d52a-5aea-48d8-936a-de13adce028a")
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
          80: "17cf445b774d6ea39f779aae4b5951f4",
          100: "2e54507a6ca677cb294483e5420acf57",
          131: "7b7379ff157d3a58f185ca3c957bb56a",
          235: "7f2caadf74a47209381941515cf60f30",
          278: "d0192d28870efd2bfbb893886fcb82de",
          299: "aef774fada9c2ad90bfd05745fc25f25",
          314: "f35d603f219e47a1b37aad92bb07df1d",
          377: "802cbfc87d017f9159afbaa494fc160d",
          387: "f5fec8d003f82f2ce005ea44544348ba",
          553: "cc5e419294599cd39ff4da57df5e19e7",
          648: "43c5e15be4e1504b50a6714b10822744",
          662: "be09b4f2b1bdad077ffa1a48fea2417d",
          716: "bbe31332051cf31c3c8d9999dfd5d0e3",
          721: "530aed7b6fc27a8a5b808eebc497dcaa",
          786: "544a54578d33072aef31fda07b3b5f37",
          824: "d769a3e366287b57a020b903bfff9518",
          888: "056c07728dca9242ec73fcb2eaa78e9f",
          907: "2555be8eb136e4b16a5c6360afbea0d1",
          969: "5018df60a4a883e5744eaddc4c7a01fa",
          997: "690a26f0aa10b0b0873ca3788c50aa09",
          1054: "312b31b18ccee4988d28bb4ff6ef3d06",
          1134: "372f2b79ba5a038a1f9f2728b359e8eb",
          1222: "a311b7139afbc4b01de1be6651a2c016",
          1242: "940852a7c701c9401df756af60ac6b1f",
          1252: "4f2f194648efa84348d501f11e488a8f",
          1315: "d27a73385203f22253f8b34a3640721b",
          1365: "8cefc70bc92fb4eba87c3c1126e18b58",
          1474: "d94026e6a864933f6457f5f4d49b33c5",
          1550: "6777f089c1871ee0c5d3b57dfc917266",
          1607: "faadab47f63da95b80a61cb66a63f1d8",
          1673: "f308878be162069dcaf1cc04709e5f4f",
          1720: "d0ef300f19ea120e21c5bb4835bea4b5",
          1735: "1c33fe0b892bc6e501a63f58fcc1b9f1",
          1763: "0069f90307c3937c6a82800bc7211025",
          1788: "80b3bedd40be6b87b58529875d91cf8e",
          1822: "7d089cfde8d804111fe0e62e95185479",
          1868: "a5b47c4f13451c859e5e8ce6f3601821",
          1968: "50cb245d598814a61b96c7ec0d7b4a55",
          2024: "1fee543dd1ddafc48e96e428ee941ad0",
          2156: "92002e7e28524297b5019c41c108662d",
          2171: "b5d8eade358ad474f760d24dbde5e8b8",
          2221: "0c4a3249468480bc8cd5c9b75f8dd527",
          2229: "b378d04b4e35f05b2ff03797a33e8151",
          2243: "84143e2448cf1fb6da8487fac30931a1",
          2294: "ebd770e4b724af904b86f6d808592d8e",
          2347: "bc68ae67dc65b5dc69f846ffb3514de0",
          2365: "ac5db41b1cd15b8aa5752d2fab10dcc4",
          2398: "38d932d393623ce60b7e8ac27b10817a",
          2466: "d53294a0ba8894857641f102b6d5c207",
          2533: "0bfa9e18649069e99c9a5259e54dd9e2",
          2642: "0fcadb58f6dec5d74a23fff55a0752e1",
          2678: "5dacb08292853d644007949a3534e69e",
          2763: "e94099211aa527ab57a2ce63a8b74765",
          2768: "72840b3a09735cb5ae81f97333d620d2",
          2864: "163e2f64f3edbcc1bdb87d339e4070d5",
          2911: "f829683b379cffcc39ce71ab6ed0aac7",
          2918: "e7b339e12193081d6373cf262792b5ae",
          2934: "f5f01df446acc8cbb1c06ae039f0a0dc",
          2941: "924a0849f8cf5419ca0485d6df62eb6d",
          3009: "3edfc17141cceb5fd82ff7a7120376b5",
          3034: "5d0f5ebca46a406e60efbd03d92496ad",
          3197: "b38157ccd26184707ff2e63b458cb231",
          3315: "597deccbefb713311dc5584217cc7a86",
          3343: "ca5aec691703315557e047ca07338a3b",
          3370: "35ee1f3d8a6543eee6c811aa9e87def2",
          3379: "f3f8cc74c068d4af8222341a9e8dea56",
          3386: "982164ab7e15dbcbd9b334ed8a8251dd",
          3447: "4de1328aaeacab6bf2354c3c168ebb73",
          3475: "a99b4b23087a1e37114257ef48d8d539",
          3486: "7fe07d53097ca030f6826aa090311d75",
          3622: "1e94579994c1d91fd6138abd1225f741",
          3694: "5214625641369eabcb130c2a269415a1",
          3696: "bca8d66454d514ddb484d79b59b27261",
          3697: "8161cc59b89a73b9f43d05900a1021a6",
          3777: "d872d60d97cc855c2e7adfa068ad08fd",
          3820: "01fbc324a85c9a4286b2a26e0c0c16a8",
          3855: "db924c6cfb61555119e40fdf9caf7b01",
          3885: "3c541a56afe745749e6468f6ed8b5f1d",
          3941: "51682efe8cc5053a3d0ec1a9ebc138f2",
          4011: "a3efa60f537bd8b6f81803d34e276dab",
          4018: "c9769112684c6f9e1ef1e3fe56a72b47",
          4054: "1aca55beb1ea7db087fbcc73355b7e5c",
          4116: "e4ed2ce3087c6488ca6a535f5dd27d21",
          4144: "b3533568a734a87c54a4d23bd66799d2",
          4186: "60d93e07d9af6a182a0358ad200f929a",
          4220: "d0009b3ef22df69d7ded4f8347ef4adc",
          4255: "d3d99ae8eb9059b5e67966a07f21b99d",
          4262: "8ea8999f8e716a8da53519f6229a0d78",
          4337: "013329de7a8f07eb7b969d7d28ab01a2",
          4406: "7dbefc086a53ce0def313160625a0880",
          4528: "8412a0a1db1de7688714dcce67ea535b",
          4578: "1ee3df610f08b7930fdda9447cac7e6d",
          4621: "9c24ab35f300d933a4315977dd04df65",
          4687: "57f14470c0c508d0b1e3f7c9420622cd",
          4700: "48d13df219958dd45f171559ae427b42",
          4710: "47dd69e689017756a6c76f9614180502",
          4730: "247d553ac4ca5f26d8c45220e4ca5619",
          4731: "f39c5df45b0c1d74187f982500ba9532",
          4799: "3042a74a4bdcc8275f595f084ec065fd",
          4851: "cddb7222bde21eb215d7e54ea2fdafbc",
          4853: "18ffef5508dbbf483ae4c0a3acbb95fa",
          4861: "f7ecb4759ef6c8b3e1bfc21d44da4f4f",
          4873: "34d6e40c742679b6a0fe5a614b8a8c62",
          4879: "13e64360e1c500200a5d14de3d2a7b7d",
          4902: "161298f7ba551acf7f8db4a968107535",
          4913: "ecd1e9beaa4494f0cfe0add8e9413695",
          4914: "c9d8399c8213cac17d87c48b9f3d83cc",
          4999: "0421d727c9a2adc690b516aab9835c67",
          5018: "a4f388d01f1998255355fe67df7b635c",
          5144: "a92a43b0e58baa729bc5d0759e09ad3b",
          5187: "e60f6f2ec346d1052dad8df2652faf7c",
          5233: "6b6cc6a21dcc9b7877fb68d0b4eb2b68",
          5247: "9980e66ff53ad45ecd23edafe005b637",
          5254: "694dbdb739c83464a8ce82afb13581d6",
          5259: "d7d305eb88f8f42a7cee95d8222aa790",
          5313: "2424144fed4030a12b69480deb6a615c",
          5390: "6e6028e7cd405a3c20f5025f830139bd",
          5530: "56dffe6d86acb669182a050c3718fbaf",
          5589: "eb4741f3049d7739be4edf78c3c6a6dc",
          5633: "6421d7c9ad4030dc7cee593e86d96f6a",
          5639: "a5c4c129f85c085db9ad537e90d5f6e2",
          5663: "90bc0a7026cb31fc5e89e348988495ec",
          5741: "eea47236fec020b09bde3f94d94909fc",
          5742: "f04007a208e456ef33fdf7eb9d82109e",
          5783: "83f37eeaf393158df37c0efd63a325d6",
          5794: "9d50ae893f19e697327cf3ea538e0b2e",
          5795: "b600bba78d2af45dae03440e6cda6bf9",
          5830: "f73196972ef7fbc9a099b03763c9cd66",
          5832: "b45414104bd5a44a6199fdd9502df7da",
          5966: "caca9fd6857f55e2664fa56995b167e8",
          6057: "6e18d1618951f0aa48c1f981e74c9f5c",
          6141: "978d9c417352064d5e0383113fa5962c",
          6158: "3994d2b0b2fe7442aab872d449d2ba86",
          6236: "b2c47e32c099ab2be6869aedb295787e",
          6247: "3b01f920a08925552d5473b9d0ab065a",
          6267: "1e6089b8e58d9bccec7cade1bff53035",
          6280: "0ae6440c341a490e3b6db2c058131d54",
          6285: "c5a4b930d9ee9b0f187ffe1f031ffdb1",
          6349: "07f38aecdf92d3a8ec8fa69a9074af16",
          6361: "b195d1c954f5a5e2359bd67cc25880c8",
          6463: "d8ab4dda78bf65bf80e4fca4cc972769",
          6664: "d85a779af2ade0536312a16ee5a1eee5",
          6682: "6374345da43a1808597329057c73954c",
          6741: "d9ebaf9e3c3ee3ae5e60358867532798",
          6816: "2f28edacbfa7ae0d673ccf07496f06a0",
          6879: "de484f6cc9f71d78f0e9b97c812aaa8f",
          6889: "6c9b71a2d2b473f5ed82e3c2e7c72590",
          6891: "9a1f0ded425ad87f4be570e94706f7c6",
          6940: "4c9c3226d4b5149ce5205e39fbab245b",
          6997: "8643fb3158d47310c918a04fa27afc9c",
          7010: "d41c88f85c565b069c71ecb629ae068d",
          7026: "b964bd4d0c1e5a7101b3ec56f64f2c8f",
          7039: "86b24280967a08378665bd08ba6b9bbd",
          7073: "e25cb33beaa3cd99de9545f863b093d0",
          7195: "2ff996367f6828f94e1325b5eb967eb4",
          7344: "e2b3cec9adfbd0379495518f30de8c2c",
          7436: "036b54e7a59414e11b6b1e5143288acb",
          7452: "d3a8bec2a65b784f9841b882eb30d28d",
          7453: "73f52e8f64647e65849264970aea95c8",
          7492: "b08491fdd156bc90cc3517f385584bf5",
          7512: "fa8e5d29dd9d50dcedf5a9dc59d60d79",
          7555: "cb6d68842c8291c17a3e6a07c0228900",
          7568: "c739708b67b0f3f706f9fe28cdb3a0af",
          7683: "466d9689a42f5b6767b3d50d91a2924d",
          7780: "a1c4c13de15e1fba5cec314994cefc74",
          7868: "9486f85798b955d3f8cfd3813a1178d8",
          7970: "d023fc94ca0d10749f46ae500da4fa7c",
          8014: "27df7ffea034c8d7ae3c6983f21857f3",
          8122: "c60734a1b1789208ffca03d4da593ac1",
          8164: "5785084da7cbc0aa34b1e02734ea1602",
          8176: "e4366e118db89cee5dadf97b83b539b9",
          8272: "559f08a88fc6852930b3a4ec7c1a25c3",
          8391: "cb088c0d9bef8c4ab1455c7ac3f0800f",
          8438: "0e2d70158c4a74332373ce2a0257e88b",
          8522: "705bc2c5a73c2fb407a123a176db89b4",
          8628: "193fca2f54f08376c68b55609cb923c1",
          8691: "520c499a86f0c22bdeb374fd9bd16c74",
          8730: "542272a3d9ad6c2f292c78ea5c732a0d",
          8755: "7a9076a1853b233d7b031313ae12bee0",
          8784: "42f68280abef37251d99fc5da565f5b9",
          8844: "a7c6885d7bfc7406b8764be324de517b",
          8880: "cc90d119fbae9a5e613bd76d96a12b47",
          8881: "8af4488ef1e4546977b0883b7447f520",
          8970: "e4c2f5b25465795df162dd5eb628c634",
          9022: "79b3947b722dfbd9f695ab9ec276f241",
          9028: "2e4163ede0df1a041a1138ccc73e69af",
          9043: "b9f42d8a7e5e56ef6d3573845851d2ad",
          9093: "49bd070cb22978da7d779cf32214b6e5",
          9126: "496e2ee2750f260473b10c18cde6e643",
          9169: "64b34e0fbf986ef9fa93b38401137a18",
          9235: "301ee7f3038daf8bcafbdf998ddb2f6b",
          9377: "db8aeb60a18497be680aa83786017c57",
          9474: "9a85b12ef7de8c4924d1ed53679d16d9",
          9615: "444662f0e235f79d06bc39a9fbbedb6a",
          9642: "55191e0eb97f4f1f415429495b36c0fa",
          9690: "da9b08db957f2fd6cbd5c28cd026dd16",
          9913: "0b7b3dd756dcdaabea15183af512339f",
          9936: "41b7b37046fe9d6f05ef1665a27d6863",
          9950: "b96e959012d4a4d264c4f587f7d29ff1",
          9990: "5106d96f898b40a7711f1bdbe142a46e"
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