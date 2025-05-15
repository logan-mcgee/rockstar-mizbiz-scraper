! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e3487839-f043-497f-864d-6bab29d38edc", e._sentryDebugIdIdentifier = "sentry-dbid-e3487839-f043-497f-864d-6bab29d38edc")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/remote-banner"], (function(e, a) {
  var d = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, t, f, c, o, n = {
            13218: (e, a, d) => {
              (0, d(77600).w)(1)
            },
            44857: (e, a, d) => {
              d(13218)
            },
            56199: e => {
              "use strict";
              e.exports = d
            },
            67884: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, f = r.length; t !== a && f >= 0;) "/" === r[--f] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return d.protocol + "//" + d.host + c
              };
              Number.isInteger
            },
            77600: (e, a, d) => {
              const r = d(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            84823: (e, a, d) => {
              "use strict";
              var r = {
                  "./core": () => Promise.all([d.e(5475), d.e(7709), d.e(4005), d.e(1127), d.e(1222), d.e(4406), d.e(6497), d.e(4902), d.e(5966), d.e(3694), d.e(261), d.e(1788), d.e(5327), d.e(2918), d.e(904), d.e(6352), d.e(3613)]).then((() => () => d(33613))),
                  "./GlobalNavigationWrapper": () => Promise.all([d.e(4005), d.e(1127), d.e(1222), d.e(4406), d.e(4902), d.e(5966), d.e(3694), d.e(261), d.e(1788), d.e(5327), d.e(904), d.e(9963)]).then((() => () => d(19963))),
                  "./vanilla": () => Promise.all([d.e(5475), d.e(7709), d.e(4005), d.e(1127), d.e(8429), d.e(6497), d.e(5966), d.e(1788), d.e(5327), d.e(2918), d.e(6352), d.e(835)]).then((() => () => d(65014)))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                f = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => f
              })
            }
          },
          b = {};

        function l(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var d = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return n[e].call(d.exports, d, d.exports, l), d.loaded = !0, d.exports
        }
        return l.m = n, l.c = b, l.y = a, l.amdO = {}, l.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return l.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          l.r(t);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & d && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, l.d(t, f), t
        }, l.d = (e, a) => {
          for (var d in a) l.o(a, d) && !l.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((a, d) => (l.f[d](e, a), a)), [])), l.u = e => "js/" + {
          131: "567838d0aa764f01acdeca10b948e375",
          266: "e92f9b189585370ed113a181bbd37fc4",
          278: "8d1b29e085aeb1a10ebc54e752c387c2",
          299: "031a6338d345be30ab9714de94d37783",
          314: "ef9931297899d485cc2e27fc473351a3",
          491: "d2f00dd4fe59e1bafb98cf6ad4003208",
          616: "e948bd1b95cea46e3f65304e18c78067",
          621: "4028c1a51f92c7409745050500cfeabf",
          656: "8bc96a2b4e51ec29a83d1325d4eea3a9",
          662: "f872a205951160857220932a08fa5808",
          822: "0efcb7d5785af7df21274b3a13e4bd9a",
          823: "c74b11358d9faebba28ab0f2120cb945",
          824: "7337f6b76b8acd103e8f9b7d882807da",
          835: "8f384ee53dd54d648012543fdc4ccbe9",
          838: "60f477ac8235100801fdb52d80fcb447",
          904: "cca0feafc5dc2a580ef9095a5db9ad8b",
          907: "0520769fe0b6cf8399271f0bcaf4f745",
          1029: "95ffe1d7dbdc50f0568b117ed70b5e92",
          1054: "ad1a7d350d1f182a473c239f25529a42",
          1155: "5acc3ada3a6f4c8e8a0988ea9cc4d32f",
          1242: "0c37ba30f128e404097c6c241ba930b5",
          1280: "db0386f695704600106ed85074320d93",
          1381: "7d011a210b1bd9813fc4285e384e3317",
          1822: "d124549338e5c189801ec5ac32d11aa3",
          1868: "5dc0fd59bdd677cbcda60b1fd608eddd",
          2156: "ec865ca9de58da1861b18ff62a4893bb",
          2171: "acd76e2a31bf3d4de3d5f4ce64119cd4",
          2221: "8a2e1e1167c9dfa16e95fa5a23c63c20",
          2243: "ed70af6f482cd347dd5db401bc36e66b",
          2327: "40a2ecd9a589a3d676167f5774abbdbf",
          2347: "8713e66064c97fe2a1dd298e058b013d",
          2365: "dbd713c39c380938678b6ebe5db4ef2a",
          2398: "26af3c0a4bb62ebb08207bcfcc8682ce",
          2466: "dd134af9eeefec7981a915605325b7f4",
          2480: "92aff960d1f641b049c14eefe63667ce",
          2487: "8ab07fa4267cae5e95a00542a698538c",
          2522: "6c797b346e057c97f2e6291e32c2d8fa",
          2578: "73b6dab9b3e02613b86874d275fd9569",
          2642: "d921bbf775f7a03a6e54c40a39c663b2",
          2678: "365abd1cebda3925d7c6cd55a6927746",
          2864: "3fb2f44ce7ab582e556ac23a62cd9215",
          2911: "dfc8d0051cdd1820c63f9b9686d993a9",
          2982: "4fe3780641728b28b7a926a665136ff4",
          2999: "64f51166a0970237101c77f05739708d",
          3002: "aadd8a8d5ffd609e8698c50666c1a3f5",
          3034: "b64701b69e36ff590e393f159a71d0f1",
          3041: "c639e14a004fb98a77098f53e4e1d558",
          3135: "0c967e0e7c4dac944af7c935cbf9ef3b",
          3197: "0314d2741e4a85e495c8bd4243b5a5c9",
          3218: "af3fd6d61115205ad1da15c3b12ea3dc",
          3343: "d09e669255d7dcf45dd1c91543c96ee6",
          3370: "5e088a3826f97c8c67610fafb6f26409",
          3410: "4d65c558e14d29b4eb245daba0165141",
          3449: "bc2043e7c0e7453157a8be2428caf363",
          3473: "3be22d3d32b286e754ffa9223eabf33d",
          3475: "a6e18a43c30e25eaae6f75b0e0e9e566",
          3486: "a9b4832810aea9bdc690d68373489aa7",
          3487: "c79322c37f3c4f8f153d87291edba3d7",
          3536: "76115565ed20a3a9dd18a231942b302f",
          3586: "d01aac84d2e625f09fad6e2125f5e31a",
          3613: "7dfb60dbde93e5fd5fad729f0cea82ac",
          3663: "48e37fbddf0724f5439a0ebc2dbdb0c8",
          3672: "9720713cba2a26bd7299b023a1a955fb",
          3697: "bceebdb133d7d271abaa13199762b019",
          3885: "b043a13a113add1f85c0dc37114c1e9a",
          3935: "30646176fc60b2bf08e196b007c4525f",
          3941: "c1b06fbb2c70ae3c2eea48d2f37aa4fd",
          3981: "e0b6ef17f886c6e0e84163fc159decee",
          4005: "6a6f8788d8484bccc62553270f0725d8",
          4011: "af420d5b11d6984b0859863fd052e24d",
          4105: "38014d2d2ae7cb658548f08630252fb7",
          4153: "6d127f54db9afd36325d4d0f97324217",
          4480: "81cc9eeaa79f3be1eede67ffeefe48d8",
          4528: "b31cf1b4dadfc4f59767222ed0a4c911",
          4548: "c6fbe6433b559e0039d01f0de0a0a0cf",
          4621: "214bfd154e50f274e155ff2fac767aec",
          4684: "c4cc4535410af29a6e21962f5dbc864c",
          4700: "43fcecdb56d66b8ccc55e707556c3fd7",
          4710: "83c8d64363be1b9fa80a87413870ee3d",
          4731: "358cefeaeb6f53a83412c204c8b56b59",
          4733: "6e0a648dc93257afe25c6b25b2e24d45",
          4799: "5e90e5479a6ee52e12574b20bc992816",
          4851: "44a045fa99633f38978daaa9be57235f",
          4861: "b0b4a7d8bf59a7e2056f313871e57f31",
          4913: "42dc5e829b56c720da257255ab19a31e",
          4981: "10faf5d5a2e5aed22301fed3bf7bba22",
          5018: "b7f432f8424fd76ae5fcf6c5d2c58ff6",
          5233: "974bcc6ba2750cfc404c1204d0e6ebe5",
          5259: "439e8eef088248b85149da3a1559380a",
          5327: "d51ab7096ce01725af3c249978bba8dd",
          5380: "2bc0406e2f69f53abe12010ca48be7ab",
          5422: "3435a74e7cec5d89ea4700e8d1add21b",
          5475: "e00ed42802ad0533a8398b6bcd2a33f6",
          5516: "36a265ef3085cc2573e9307547657710",
          5530: "485106a788f78f8c1606dd84bb640e12",
          5639: "90c5c25d2a6f91729512d27c2aac4d3d",
          5663: "4250c565ff7f996158784acceec48f0c",
          5734: "02b143350a825f51b924b0256e3d857c",
          5742: "098ad2498a498683e914fd692a5c79d2",
          5830: "575d37fc5c5689ffceac377eb9a677f9",
          5832: "a18830bd55f27c033edfdaa56941cadc",
          5839: "70d8702e09fcdc0224a89fd5a89db5aa",
          5854: "11bab91bd1a596b6b64e06e5fb4b6878",
          6260: "d0b9905fa2f5ea54f8c78543469913ec",
          6267: "2939b696739a1de733d70c5696d26d6c",
          6280: "d3431a32f04e065a2a094712bc3afe3d",
          6285: "f59441a64236a0579a8d7f640ab5179a",
          6352: "bad6059fc76a4fd5144132bf45347a42",
          6361: "cfb68ee94a9e1f1fdd0fa316ef8bbbc1",
          6367: "371ffd89de6e067f2e3c9b2dd73cc307",
          6497: "7817ed2e4023f2976a5dc82b7278be9e",
          6664: "8cc827e513b01d3b3de62ea3521066db",
          6879: "0ee7f36f48881a3ffbd757abd9e5451b",
          6891: "22612f7fabbe3b7349a090e8953519c7",
          6997: "75f03f9820f22277076e5df1dfbd57f3",
          7010: "eb4f2971ee7a8bccc7226988d0774c03",
          7073: "bab1f34ea8ed5df47999a44ec9415776",
          7114: "d58fe839c91c337072de02e7c3163e21",
          7353: "2e679f33902f5432c9f882d221f8da1a",
          7385: "d269ac52c61cfc7f48a9339d6088b550",
          7436: "a1c827617299e45c1e2ebcade3876866",
          7452: "ed931c44d91b250e6e877cbf4d912682",
          7453: "f94802e05613ca383af836b9cd7d02b6",
          7485: "c8ec2fb0c7025214146c9c40bc7d472b",
          7542: "cb629c0cb23ff054dfe520c735739eae",
          7709: "a157a0d61671349c4a497da5386b4e93",
          7727: "891d3f112f369ca3f56ac6e1dcda1b0d",
          7885: "25ef0ddbfff3b815fa6bca2486e6f1c8",
          7893: "f82124955fa51575e2cccccafd95c510",
          7970: "4d5977fc8f4f75c6cce22b5a970800a2",
          8272: "9dae143e747b3e3646f020070626ddab",
          8275: "30a12c5c173d2122ba84082a00501759",
          8376: "76af0e27c408002b4714c983df551198",
          8391: "a0bb03831bf20e662950ded39c71a1c6",
          8441: "921ca4a5ea35855e7ccefb7fbe313c85",
          8457: "7be85491792d9286864b7be28f6d7ccd",
          8557: "170574e34b58ff264f40585d1ed56b38",
          8591: "8ff5f59fe0fe1618f1f4d9489b3ce0fe",
          8654: "2bdc94c4f2b0c7d5bc411427583b7555",
          8728: "85d6159bedf3d90c2637a53e5cdb1e80",
          8755: "762e9becb4d4c1d9abd0bad351876458",
          8880: "5728abc62094835ab2068729248911b2",
          8970: "ebff0a1b2ab31103739d90565ad2f4de",
          9022: "1bfa2b09f2f28f50989e20cc9f1a5f65",
          9028: "dc9a95340f2491700823d5f291d04206",
          9126: "9cdbf87db4cb5dfc0a757ca0b4af9853",
          9377: "3d73d869757592a27b0de553a6fdd576",
          9583: "952d97a666300c603c1a75b048d4bb02",
          9615: "17dd0db7e101eca819294a5c44e0f2f4",
          9704: "1b208ceaabc9381a9ecdb038fce47b83",
          9766: "10ccc0efefa1ee0f81989821f6d01cb5",
          9936: "7c54c4aefbfe85c8d0517bbfafb1dacf",
          9963: "2550a8f257eaf651f3578587022933da",
          9990: "c1cb15b12873f5d75897b3a009857dec"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          835: "94edb376d1a211556a5bb2b298f38183",
          904: "d4813d06a2601e163a91eedff981ae17",
          2487: "fb7ee92c79ad6bd1520ca3bdab2f3628",
          3449: "b2b603d7bf4a560cca537d4ac5facce0",
          3487: "7ae27bde576a043156b0d31c0772466c",
          3613: "0061f438b556547245127c45842c63a9",
          6352: "1152b17652cc8e425b46e4a7d676ac76",
          6854: "fb7ee92c79ad6bd1520ca3bdab2f3628"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-header:", l.l = (e, a, d, r) => {
          if (t[e]) t[e].push(a);
          else {
            var c, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var i = n[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + d) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, l.nc && c.setAttribute("nonce", l.nc), c.setAttribute("data-webpack", f + d), c.src = e), t[e] = [a];
            var s = (a, d) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          6352: [50257]
        }, o = {
          50257: ["default", "./main", 56199]
        }, l.f.remotes = (e, a) => {
          l.o(c, e) && c[e].forEach((e => {
            var d = l.R;
            d || (d = []);
            var r = o[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), l.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, d, f, c, o, n) => {
                  try {
                    var b = e(d, f);
                    if (!b || !b.then) return o(b, c, n);
                    var l = b.then((e => o(e, c)), t);
                    if (!n) return l;
                    a.push(r.p = l)
                  } catch (e) {
                    t(e)
                  }
                },
                c = (e, a, t) => f(a.get, r[1], d, 0, n, t),
                n = a => {
                  r.p = 1, l.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(l, r[2], 0, 0, ((e, a, d) => e ? f(l.I, r[0], 0, e, c, d) : t()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            a = {};
          l.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              l.o(l.S, d) || (l.S[d] = {});
              var f = l.S[d],
                c = "@rockstargames/modules-core-header",
                o = (e, a, d, r) => {
                  var t = f[e] = f[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (t[a] = {
                    get: d,
                    from: c,
                    eager: !!r
                  })
                },
                n = [];
              return "default" === d && (o("@foundry/icons", "4.1.1", (() => Promise.all([l.e(2480), l.e(4548), l.e(1127), l.e(126), l.e(2487)]).then((() => () => l(34548))))), o("@popperjs/core", "2.11.8", (() => l.e(8376).then((() => () => l(78376))))), o("@radix-ui/react-accordion", "1.2.8", (() => Promise.all([l.e(6260), l.e(1127), l.e(8429), l.e(1222), l.e(4406), l.e(5854)]).then((() => () => l(76260))))), o("@radix-ui/react-dialog", "1.1.11", (() => Promise.all([l.e(3981), l.e(3935), l.e(1127), l.e(8429), l.e(1222), l.e(4406), l.e(9690), l.e(4902), l.e(3473)]).then((() => () => l(53935))))), o("@radix-ui/react-id", "1.1.1", (() => Promise.all([l.e(1127), l.e(822)]).then((() => () => l(30822))))), o("@radix-ui/react-navigation-menu", "1.2.10", (() => Promise.all([l.e(3981), l.e(6367), l.e(1127), l.e(8429), l.e(1222), l.e(4406), l.e(3694), l.e(616)]).then((() => () => l(6367))))), o("@radix-ui/react-popover", "1.1.11", (() => Promise.all([l.e(3981), l.e(5839), l.e(1127), l.e(8429), l.e(1222), l.e(4406), l.e(9690), l.e(4902), l.e(1155)]).then((() => () => l(3536))))), o("@radix-ui/react-portal", "1.1.6", (() => Promise.all([l.e(1127), l.e(8429), l.e(1222), l.e(1029)]).then((() => () => l(61029))))), o("@radix-ui/react-slot", "1.2.0", (() => Promise.all([l.e(1127), l.e(3135)]).then((() => () => l(23135))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([l.e(1127), l.e(1222), l.e(306), l.e(7385)]).then((() => () => l(9766))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([l.e(1127), l.e(1222), l.e(2957), l.e(7885)]).then((() => () => l(87885))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([l.e(1127), l.e(8429), l.e(1222), l.e(2999)]).then((() => () => l(62999))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(3218), l.e(1127), l.e(838)]).then((() => () => l(35671))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([l.e(3981), l.e(5475), l.e(5839), l.e(2480), l.e(3449), l.e(1127), l.e(8429), l.e(1222), l.e(4406), l.e(6497), l.e(9690), l.e(4902), l.e(5966), l.e(3694), l.e(261), l.e(1788), l.e(2918), l.e(3487), l.e(2982)]).then((() => () => l(88733))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([l.e(5475), l.e(7709), l.e(1127), l.e(6497), l.e(5966), l.e(2911)]).then((() => () => l(80763))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(5475), l.e(1127), l.e(6497), l.e(2327)]).then((() => () => l(79819))))), o("classnames", "2.5.1", (() => l.e(9704).then((() => () => l(89704))))), o("framer-motion", "7.10.3", (() => Promise.all([l.e(7485), l.e(1127)]).then((() => () => l(17485))))), o("gsap", "0.0.0", (() => l.e(8728).then((() => () => l(58728))))), o("lodash", "4.17.21", (() => l.e(4981).then((() => () => l(4981))))), o("react-dom", "18.3.1", (() => Promise.all([l.e(3663), l.e(1127)]).then((() => () => l(53663))))), o("react-dom", "19.1.0", (() => Promise.all([l.e(1127), l.e(5422)]).then((() => () => l(65422))))), o("react-dom", "19.1.0", (() => Promise.all([l.e(1127), l.e(8275)]).then((() => () => l(78275))))), o("react-dom", "19.1.0", (() => Promise.all([l.e(1127), l.e(621)]).then((() => () => l(90621))))), o("react-popper", "2.3.0", (() => Promise.all([l.e(1127), l.e(8429), l.e(3386), l.e(4733)]).then((() => () => l(84733))))), o("react-remove-scroll", "2.6.3", (() => Promise.all([l.e(8591), l.e(1127)]).then((() => () => l(28591))))), o("react-router-dom", "6.30.0", (() => Promise.all([l.e(4105), l.e(1127), l.e(2127)]).then((() => () => l(94105))))), o("react", "18.2.0", (() => l.e(2522).then((() => () => l(42522))))), o("react", "18.3.1", (() => l.e(8654).then((() => () => l(98654))))), o("spatial-navigation-polyfill", "1.3.1", (() => l.e(491).then((() => () => l(60491))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = l(56199);
                  if (!a) return;
                  var t = e => e && e.init && e.init(l.S[d], r);
                  if (a.then) return n.push(a.then(t, e));
                  var f = t(a);
                  if (f && f.then) return n.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), n.length ? e[d] = Promise.all(n).then((() => e[d] = 1)) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var a = l.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = d[1] ? a(d[1]) : [];
              return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
            },
            a = (a, d) => {
              a = e(a), d = e(d);
              for (var r = 0;;) {
                if (r >= a.length) return r < d.length && "u" != (typeof d[r])[0];
                var t = a[r],
                  f = (typeof t)[0];
                if (r >= d.length) return "u" == f;
                var c = d[r],
                  o = (typeof c)[0];
                if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                if ("o" != f && "u" != f && t != c) return t < c;
                r++
              }
            },
            d = e => {
              var a = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var t = 1, f = 1; f < e.length; f++) t--, r += "u" == (typeof(o = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return r
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                c.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? c.pop() + " " + c.pop() : d(o))
              }
              return n();

              function n() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var t = a[0],
                  f = t < 0;
                f && (t = -t - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, l, i = o < a.length ? (typeof a[o])[0] : "";
                  if (c >= d.length || "o" == (l = (typeof(b = d[c]))[0])) return !n || ("u" == i ? o > t && !f : "" == i != f);
                  if ("u" == l) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == l)
                      if (o <= t) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || l < i != f) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, d) : !u())
              }
              return !!u()
            },
            t = (e, a) => e && l.o(e, a),
            f = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, d, r, t, f) {
              var c = l.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, l.S[a], d, !1, t, f)) : e(a, l.S[a], d, r, t, f)
            },
            b = (e, a, d) => d ? d() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            i = n(((e, n, l, i, s, u) => {
              if (!t(n, l)) return b(e, l, u);
              var h = ((e, d, t, f) => {
                var o = f ? c(e[d]) : e[d];
                return (d = Object.keys(o).reduce(((e, d) => !r(t, d) || e && !a(e, d) ? e : d), 0)) && o[d]
              })(n, l, s, i);
              return h ? f(h) : u ? u() : void o(((e, a, r, t, f) => {
                var c = e[r];
                return "No satisfying version (" + d(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(n, e, l, s, i))
            })),
            s = n(((e, o, n, l, i, s) => {
              if (!t(o, n)) return b(e, n, s);
              var u, h = ((e, d, r) => {
                var t = r ? c(e[d]) : e[d];
                return Object.keys(t).reduce(((e, d) => !e || !t[e].loaded && a(e, d) ? d : e), 0)
              })(o, n, l);
              return r(i, h) || (u = ((e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + d(t) + ")")(o, n, h, i), "undefined" != typeof console && console.warn && console.warn(u)), f(o[n][h])
            })),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], (() => l.e(8654).then((() => () => l(98654))))),
              21222: () => i("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], (() => l.e(5516).then((() => () => l(23135))))),
              74406: () => i("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], (() => l.e(8441).then((() => () => l(30822))))),
              9623: () => i("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([l.e(4105), l.e(2127)]).then((() => () => l(94105))))),
              16188: () => i("default", "lodash", !1, [1, 4, 17, 21], (() => l.e(4981).then((() => () => l(4981))))),
              34902: () => i("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], (() => Promise.all([l.e(8429), l.e(3410)]).then((() => () => l(61029))))),
              95966: () => i("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([l.e(5475), l.e(6497)]).then((() => () => l(79819))))),
              63694: () => i("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([l.e(8429), l.e(5380)]).then((() => () => l(62999))))),
              24036: () => i("default", "classnames", !1, [1, 2, 5, 1], (() => l.e(9704).then((() => () => l(89704))))),
              24780: () => i("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], (() => Promise.all([l.e(3981), l.e(3935), l.e(8429), l.e(9690)]).then((() => () => l(53935))))),
              78618: () => i("default", "@foundry/icons", !1, [1, 4], (() => Promise.all([l.e(2480), l.e(4548), l.e(126), l.e(6854)]).then((() => () => l(34548))))),
              81788: () => i("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([l.e(3218), l.e(8457)]).then((() => () => l(35671))))),
              63582: () => i("default", "framer-motion", !1, [1, 7, 5, 1], (() => l.e(7485).then((() => () => l(17485))))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], (() => l.e(2522).then((() => () => l(42522))))),
              79952: () => i("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], (() => l.e(491).then((() => () => l(60491))))),
              2918: () => i("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([l.e(7709), l.e(7542)]).then((() => () => l(80763))))),
              9046: () => i("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], (() => Promise.all([l.e(3981), l.e(6367), l.e(8429)]).then((() => () => l(6367))))),
              42638: () => i("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], (() => Promise.all([l.e(3981), l.e(5839), l.e(8429), l.e(9690), l.e(3536)]).then((() => () => l(3536))))),
              61339: () => i("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], (() => Promise.all([l.e(6260), l.e(8429)]).then((() => () => l(76260))))),
              13581: () => i("default", "gsap", !1, [1, "workspace:^"], (() => l.e(8728).then((() => () => l(58728))))),
              20270: () => i("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([l.e(3981), l.e(5839), l.e(2480), l.e(3449), l.e(8429), l.e(1222), l.e(4406), l.e(9690), l.e(4902), l.e(3694), l.e(261), l.e(3487)]).then((() => () => l(88733))))),
              75971: () => i("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([l.e(8429), l.e(3386), l.e(7114)]).then((() => () => l(84733))))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => l.e(3663).then((() => () => l(53663))))),
              80126: () => i("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([l.e(1222), l.e(2957), l.e(266)]).then((() => () => l(87885))))),
              19690: () => i("default", "react-remove-scroll", !1, [1, 2, 5, 7], (() => l.e(8591).then((() => () => l(28591))))),
              30306: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => l.e(3041).then((() => () => l(65422))))),
              52957: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => l.e(656).then((() => () => l(78275))))),
              75199: () => i("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([l.e(306), l.e(9766)]).then((() => () => l(9766))))),
              43386: () => i("default", "@popperjs/core", !1, [1, 2, 11, 8], (() => l.e(8376).then((() => () => l(78376))))),
              22127: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => l.e(3002).then((() => () => l(90621)))))
            },
            p = {
              126: [80126],
              261: [24036, 24780, 78618],
              306: [30306],
              904: [9046, 42638, 61339],
              1127: [71127],
              1222: [21222],
              1788: [81788],
              2127: [22127],
              2918: [2918],
              2957: [52957],
              3386: [43386],
              3487: [75199],
              3694: [63694],
              4406: [74406],
              4902: [34902],
              5327: [63582, 73579, 79952],
              5966: [95966],
              6352: [13581, 20270, 75971],
              6497: [9623, 16188],
              8429: [18429],
              9690: [19690]
            },
            m = {};
          l.f.consumes = (e, a) => {
            l.o(p, e) && p[e].forEach((e => {
              if (l.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var d = a => {
                  u[e] = 0, l.m[e] = d => {
                    delete l.c[e], d.exports = a()
                  }
                };
                m[e] = !0;
                var r = a => {
                  delete u[e], l.m[e] = d => {
                    throw delete l.c[e], a
                  }
                };
                try {
                  var t = h[e]();
                  t.then ? a.push(u[e] = t.then(d).catch(r)) : d(t)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            l.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                835: 1,
                904: 1,
                2487: 1,
                3449: 1,
                3487: 1,
                3613: 1,
                6352: 1,
                6854: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var r = l.miniCssF(e),
                  t = l.p + r;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), r = 0; r < d.length; r++) {
                      var t = (c = d[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((t = (c = f[r]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", l.nc && (f.nonce = l.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) r();
                    else {
                      var c = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), t(n)
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
            4295: 0
          };
          l.f.j = (a, d) => {
            var r = l.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(127|222|26|788)|2(127|61|918|957)|3(06|386|694)|4406|4902|5966|6854|8429|9690)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((d, t) => r = e[a] = [d, t]));
              d.push(r[2] = t);
              var f = l.p + l.u(a),
                c = new Error;
              l.l(f, (d => {
                if (l.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    f = d && d.target && d.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", c.name = "ChunkLoadError", c.type = t, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, f = d[0],
                c = d[1],
                o = d[2],
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) l.o(c, r) && (l.m[r] = c[r]);
                o && o(l)
              }
              for (a && a(d); n < f.length; n++) t = f[n], l.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), l.nc = void 0, l(44857), l(84823)
      })())
    }
  }
}));