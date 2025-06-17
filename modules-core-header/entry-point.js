! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3ea5c93f-8a37-4d94-a574-fd96ce325122", e._sentryDebugIdIdentifier = "sentry-dbid-3ea5c93f-8a37-4d94-a574-fd96ce325122")
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
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, r, t, f, c, o = {
            13218: (e, a, d) => {
              (0, d(77600).w)(1)
            },
            44857: (e, a, d) => {
              d(13218)
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
                  "./core": () => Promise.all([d.e(5475), d.e(7709), d.e(4005), d.e(1127), d.e(1222), d.e(4406), d.e(6497), d.e(4902), d.e(5966), d.e(3694), d.e(261), d.e(1788), d.e(5327), d.e(2918), d.e(904), d.e(3875), d.e(3613)]).then((() => () => d(33613))),
                  "./GlobalNavigationWrapper": () => Promise.all([d.e(4005), d.e(1127), d.e(1222), d.e(4406), d.e(4902), d.e(5966), d.e(3694), d.e(261), d.e(1788), d.e(5327), d.e(904), d.e(9963)]).then((() => () => d(19963))),
                  "./vanilla": () => Promise.all([d.e(5475), d.e(7709), d.e(4005), d.e(1127), d.e(8429), d.e(6497), d.e(5966), d.e(1788), d.e(5327), d.e(2918), d.e(3875), d.e(835)]).then((() => () => d(65014)))
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

        function n(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var d = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(d.exports, d, d.exports, n), d.loaded = !0, d.exports
        }
        return n.m = o, n.c = b, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          n.r(t);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, n.d(t, f), t
        }, n.d = (e, a) => {
          for (var d in a) n.o(a, d) && !n.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, d) => (n.f[d](e, a), a)), [])), n.u = e => "js/" + {
          131: "358e016a1fbac606b3377a5a15576559",
          147: "f1582d5b22a95e5471e9065560bc2604",
          266: "c6a2bf5ffb60c6fbf2987a59611e8110",
          278: "fb2c631a1e1cf0047f514c9c4dde1187",
          299: "0fab926f8f81810a5ba42a675d1076bd",
          314: "c58af0e9610bb51e7ccf8da0d2729951",
          491: "d7b284847d8777ba40daff78ba0b5f93",
          616: "d4d6d27c414e33b2529c9f62da3436c3",
          621: "3dd050e4ba292418eb1b50c66a736a81",
          656: "be0aea8ae83c081627e24c5a8820de4a",
          662: "a0b7f4c6ddb0c0fc983a96c5963880ce",
          822: "7b838bf3c7c4d2fbcf313f78ff6e3ee1",
          823: "c0c5b3764a2f8652dd1a63f9921a1ca0",
          824: "540e93c4a39ee17bc7c26060d1808507",
          835: "c8c6d44972cd1102ad785df8b78bbea0",
          838: "c4ca5a2b79ffb75fefefc107dfa6db9e",
          904: "c86e23b62c946b016b66a236a98d8655",
          907: "61a4f9d7e7ecfdb15ffd6a8eba522f3c",
          1029: "ba445df300946755e26ae1edbd3b1536",
          1054: "ac5489b7b75f450a87874f93011f6f60",
          1155: "feae1a4a7f19e2fd53619396347ca04d",
          1242: "3905b9f7898b427b03c5e9ced7fbc295",
          1280: "b1df8371d3a8e5d8b5980a5ae80242ee",
          1381: "f7b48642bc595aa54bd80ffc7e7186db",
          1822: "2bd93759fa7acaa71f9c4f9880351809",
          1868: "d370e9c31e51bdf4d989140f53615acd",
          2030: "15d1d4c02852cc446cf61d40c32ef7fc",
          2156: "c611193098d114b37154b2fc01b447f2",
          2171: "19645e214faba3adf772861b0e2d20d4",
          2221: "9a1b740d8a165784003442366acc9109",
          2243: "c52a98a34152d36ae00b4368835915c8",
          2327: "34228f3220eec6e0573f060ee83099e5",
          2347: "89e9d4c6852da4fc39c650bf52e947c9",
          2365: "fc2a42e333866bdacb93939e6d52cae4",
          2398: "e6442bed3fc526a4b34b42acd0365fd1",
          2466: "9ecd142a1f4aaf724bd3bd060961d0b6",
          2480: "97e5a7aa612c4356b5e6699360324128",
          2487: "ef32741295a4b7fdbc3bc3e041e88592",
          2522: "30cd4bea16e1e5ba8ee54450203f8476",
          2528: "0a78137533222883ae9914b2ae5f5558",
          2578: "3e87e3b53c2e85434c8eef128091cd32",
          2642: "e9f28a7d6ccef25dbe1c76776ec0236c",
          2678: "ef9cf5cee3643798c3694babc8d22f2c",
          2864: "4771c6f5b8844bcb0f47f70b878666bd",
          2911: "b491297dbfd6ff87a06d4821bde1a46b",
          2982: "c0bdb4a5feed2721957483f722f9a75d",
          2999: "d3095bd8d860d4d841586693183d997f",
          3002: "4f64f3441f33976adff1b38802cc50a1",
          3034: "05cad320ef4cfdff6fd12e1055a38532",
          3041: "678cd4e3c203c697aa82eacc2aa0bd1a",
          3135: "963626f58fae24e4d21ebb188fe42ca0",
          3197: "8975d0da472e2a17613e519a30340f49",
          3218: "1b7eed36da1d76398f0580d99d9c4007",
          3343: "64468c61344642cccec397d4430196e9",
          3370: "dc6b1aa28c9c892a80c74b881f871c04",
          3410: "53abec2ad119ad036b56ba748220c1b1",
          3473: "ff85b1887b8523d79fd5699fa94b7cac",
          3475: "82c1e538faa8968ee620a1fbaa0cc3ec",
          3486: "d0d1b923c97f6dc377510d410a07f076",
          3536: "b53434ddf84e2d1d421f759a3b0798d9",
          3586: "4046a4a0d614cbcf7dc2c94f2f7527a8",
          3613: "23e9a9e5c69d5a39144b7e3f384b96f6",
          3663: "e1d55773680d8819c293dbc276c5c06d",
          3672: "261218ecbb3baf2379a941dc7192a589",
          3697: "269b86d0202c20eee5ed8be155a890dd",
          3875: "e3ca43b5697ba7ef0b79e7d00921cb6c",
          3885: "a123f9e4452839e6913589fb6b16ab7d",
          3935: "50a1e6cd9fa32d3d10121ffd8f527fa1",
          3941: "d2782d1b92f079dd2a951fff73366014",
          3981: "3b3dc9f42b3c7572bb9a5a425a803f54",
          4005: "ada1ba73c4d4e83defad68ac05acb4ed",
          4011: "c359f3c191051b14612d627064b8052f",
          4105: "966626672ed3e990a2cd677670aff46f",
          4153: "9932ca95bd22b28ca293bc28fe7af4fc",
          4480: "cacd0ff76360201b372086e52e4189f7",
          4528: "09c02e0dcba4e9bdf52c1186673d4f03",
          4548: "4ffecf5ac65201dbd7506a98c48d031d",
          4621: "ca12deaf0278bb28fb2c7eaf775ca11b",
          4684: "2bb3f23783f884949f5f3d82d582aa1b",
          4700: "f0bf127d28c40018c11c8014599ab812",
          4710: "a2a4999d6c9e88b34037065adccf915a",
          4731: "2409b7ca22c81dddf545406022f3dbbc",
          4733: "0f3a590936266e5555e3e14ff680f147",
          4768: "5acc279d79f105fdc800b736e5c6b995",
          4799: "f8b54f4b8444f97d8f27c9b5cbe9c8ca",
          4851: "3e2557eee7643ed121f30c8f19c648bd",
          4861: "59e6f4605cbe8ae557f002bfa9cdc3c7",
          4913: "b8dc04fc68b7ebf662c7dde4678b0254",
          4981: "17d4ff5e185b4b59078a020859ab4411",
          5018: "37dc1a5f2d4777190c799c6057f3c94f",
          5233: "6c2d9d64de1b2144c67042650f7d1ca3",
          5259: "5c4ebf7c6faadc19c597f3e99fcf701a",
          5327: "1ce5d0d7b86ba882f82236a0b6729a23",
          5380: "e0bc07825195019834f74e441ec8333d",
          5422: "064c17570d1bcb6f8011acea158b460e",
          5475: "4e39c59134532aa91e04d5719dd417a7",
          5516: "431e9f3435d23576ea0fabfadae3549f",
          5530: "90a8bb57347fab5aad91c1dd63b618e4",
          5639: "e71b6d6c45a1496a50554e9132815327",
          5663: "42b8492fbd89420b5f237ef23e6c1cfe",
          5734: "6bfb316bcc0597fccc0a2e79d0981a13",
          5742: "5507afa368147acf7dfc12a399586636",
          5830: "ece6d51ec5a31caadcacf928430395c4",
          5832: "36a00b7ba8fda4e21878d9c1cb6a2390",
          5839: "62d80d389294f7cce6eb690e87169579",
          5854: "dbca25798a9a9b8b85429ac3ae293ae2",
          6260: "a73c3a3d89527799e9b0edf02cdf4320",
          6267: "fa53f7b0961bd6ca195dbef583066ff2",
          6280: "3dd95aca10baa5d2fd987bb91d79d403",
          6285: "1b5279fce066f4f1b5c90860b3fbb7f1",
          6296: "49ef7090e9fadf513fabc0c74ebbee87",
          6361: "a0df40a60d333ed01b71b575c2657f34",
          6367: "c470ad2997420892f9190314a60a79a0",
          6497: "12e54b95c220c4cf0a5bbed733adf932",
          6664: "13bfa4c73e6631b75e31ce86c91cb9e8",
          6879: "7bc0a0825a3a5af793af31c02efb6a05",
          6891: "f8384758c18eba467e1fb295209975b7",
          6997: "87aef5a913dfc3916af69a2a68736345",
          7010: "c61eaab24714fd0e3d74b21a1959d6f1",
          7073: "4b37c259a7485b7597d15c6bcd435d8c",
          7114: "87dbfd382962f15fd4d39ce19b71afea",
          7353: "90130481f69b29886639e1873f3e807e",
          7385: "e63ff664fa1a17e8919c510d44a07b5b",
          7436: "93545d2d4a51c3866d5c1bf6c006cc0a",
          7452: "2ec98d4daf781c9b6efd1ff3284191fd",
          7453: "de06aa5a8fdc8e1270218f02b25b5bcf",
          7485: "278f867985ab62d9ed0d4e59b8d31a40",
          7542: "fbf09ba05b1365941a6bdfca1d4a183e",
          7709: "3afdcea177db9e448155bde2e478dac0",
          7727: "fb040d7b0bbecfc7e3f2ddd26a4d5cc2",
          7885: "0ad48ef4ffbd1bd29b4063edad6d33cc",
          7893: "ea77517a62c365805f25ad0e970c9e95",
          7970: "4ba1d9e76e811690e0aa018086b978ba",
          8272: "e5695fe7f2f4b94c342473470379eeaf",
          8275: "93a50b9a6b8268616b87efbe2dc502a8",
          8376: "abd82c47c7cfecc32481b0d6c9abf3e4",
          8391: "a0bc563db21085480601a6ce4922f18a",
          8441: "1ccd026c4d37305929d1fa8c86f5b483",
          8457: "802515601193501feed64557fa184dc7",
          8557: "329d4c15c7f3c42cf2e4058c42fa879e",
          8591: "4c9175460d40d48e7a059c111ccd7ac3",
          8654: "98d7855d2fbd4c7abb13102eb82bdd1a",
          8728: "0456b3ee37d3a8b5d2bbdcbc6a598359",
          8755: "f2261ca72e415c203bc9f52ce245bf10",
          8880: "7c7888e3d81a0071729bf92bd6a6f576",
          8970: "42af40055b25e63c699e9fcd050f3a6a",
          9022: "e407c6e434fd00647c12a23eddbadb85",
          9028: "58a9217c4801268de8be0f921fbef98b",
          9126: "07ea911a49da002e59f485c8f13c3055",
          9377: "43ad08de9e563141c24560f7ad5fe69c",
          9583: "8655627d123d307307bff641eb72fb86",
          9615: "a238e40cb47d16c4adf66430361a3e2b",
          9649: "539ab622d362d3c63048a35c43909323",
          9704: "8a5235bc17d67a9e71334ef58f1fb771",
          9766: "ff5eed0ebb3604777459409317cf0757",
          9936: "216637891d74caded6f3142fd6417819",
          9963: "42054f6185d76c01a559984553c97880",
          9990: "8956da57bd9c4fc3e49ce1af164a5508"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          835: "94edb376d1a211556a5bb2b298f38183",
          904: "d4813d06a2601e163a91eedff981ae17",
          2487: "8b73c442ec2b588e00961f240409b9a1",
          3613: "0061f438b556547245127c45842c63a9",
          3875: "cc964df1c18a49208796013887093ade",
          4768: "aca35c45e370a35b907c2bfd1bbba13f",
          6296: "7ae27bde576a043156b0d31c0772466c",
          6854: "8b73c442ec2b588e00961f240409b9a1"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-header:", n.l = (e, a, d, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, o;
            if (void 0 !== d)
              for (var b = document.getElementsByTagName("script"), l = 0; l < b.length; l++) {
                var i = b[l];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + d) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, n.nc && c.setAttribute("nonce", n.nc), c.setAttribute("data-webpack", t + d), c.src = e), r[e] = [a];
            var s = (a, d) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, c = {}, n.f.remotes = (e, a) => {
          n.o(f, e) && f[e].forEach((e => {
            var d = n.R;
            d || (d = []);
            var r = c[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), n.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, d, f, c, o, b) => {
                  try {
                    var n = e(d, f);
                    if (!n || !n.then) return o(n, c, b);
                    var l = n.then((e => o(e, c)), t);
                    if (!b) return l;
                    a.push(r.p = l)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => f(a.get, r[1], d, 0, b, t),
                b = a => {
                  r.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(n, r[2], 0, 0, ((e, a, d) => e ? f(n.I, r[0], 0, e, o, d) : t()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              n.o(n.S, d) || (n.S[d] = {});
              var f = n.S[d],
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
                b = [];
              return "default" === d && (o("@foundry/icons", "4.1.4", (() => Promise.all([n.e(2480), n.e(4548), n.e(1127), n.e(126), n.e(2487)]).then((() => () => n(34548))))), o("@popperjs/core", "2.11.8", (() => n.e(8376).then((() => () => n(78376))))), o("@radix-ui/react-accordion", "1.2.8", (() => Promise.all([n.e(6260), n.e(1127), n.e(8429), n.e(1222), n.e(4406), n.e(5854)]).then((() => () => n(76260))))), o("@radix-ui/react-dialog", "1.1.11", (() => Promise.all([n.e(3981), n.e(3935), n.e(1127), n.e(8429), n.e(1222), n.e(4406), n.e(9690), n.e(4902), n.e(3473)]).then((() => () => n(53935))))), o("@radix-ui/react-id", "1.1.1", (() => Promise.all([n.e(1127), n.e(822)]).then((() => () => n(30822))))), o("@radix-ui/react-navigation-menu", "1.2.10", (() => Promise.all([n.e(3981), n.e(6367), n.e(1127), n.e(8429), n.e(1222), n.e(4406), n.e(3694), n.e(616)]).then((() => () => n(6367))))), o("@radix-ui/react-popover", "1.1.11", (() => Promise.all([n.e(3981), n.e(5839), n.e(1127), n.e(8429), n.e(1222), n.e(4406), n.e(9690), n.e(4902), n.e(1155)]).then((() => () => n(3536))))), o("@radix-ui/react-portal", "1.1.6", (() => Promise.all([n.e(1127), n.e(8429), n.e(1222), n.e(1029)]).then((() => () => n(61029))))), o("@radix-ui/react-slot", "1.2.0", (() => Promise.all([n.e(1127), n.e(3135)]).then((() => () => n(23135))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([n.e(1127), n.e(1222), n.e(306), n.e(7385)]).then((() => () => n(9766))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([n.e(1127), n.e(1222), n.e(2957), n.e(7885)]).then((() => () => n(87885))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([n.e(1127), n.e(1222), n.e(3117), n.e(2528)]).then((() => () => n(42528))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([n.e(1127), n.e(8429), n.e(1222), n.e(2999)]).then((() => () => n(62999))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(3218), n.e(1127), n.e(838)]).then((() => () => n(35671))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([n.e(3981), n.e(5475), n.e(5839), n.e(2480), n.e(4768), n.e(1127), n.e(8429), n.e(1222), n.e(4406), n.e(6497), n.e(9690), n.e(4902), n.e(5966), n.e(3694), n.e(261), n.e(1788), n.e(2918), n.e(6296), n.e(2982)]).then((() => () => n(88733))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(5475), n.e(7709), n.e(1127), n.e(6497), n.e(5966), n.e(2911)]).then((() => () => n(80763))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(5475), n.e(1127), n.e(6497), n.e(2327)]).then((() => () => n(79819))))), o("classnames", "2.5.1", (() => n.e(9704).then((() => () => n(89704))))), o("framer-motion", "7.10.3", (() => Promise.all([n.e(7485), n.e(1127)]).then((() => () => n(17485))))), o("gsap", "0.0.0", (() => n.e(8728).then((() => () => n(58728))))), o("lodash", "4.17.21", (() => n.e(4981).then((() => () => n(4981))))), o("react-dom", "18.3.1", (() => Promise.all([n.e(3663), n.e(1127)]).then((() => () => n(53663))))), o("react-dom", "19.1.0", (() => Promise.all([n.e(1127), n.e(5422)]).then((() => () => n(65422))))), o("react-dom", "19.1.0", (() => Promise.all([n.e(1127), n.e(8275)]).then((() => () => n(78275))))), o("react-dom", "19.1.0", (() => Promise.all([n.e(1127), n.e(9649)]).then((() => () => n(19649))))), o("react-dom", "19.1.0", (() => Promise.all([n.e(1127), n.e(621)]).then((() => () => n(90621))))), o("react-popper", "2.3.0", (() => Promise.all([n.e(1127), n.e(8429), n.e(3386), n.e(4733)]).then((() => () => n(84733))))), o("react-remove-scroll", "2.6.3", (() => Promise.all([n.e(8591), n.e(1127)]).then((() => () => n(28591))))), o("react-router-dom", "6.30.0", (() => Promise.all([n.e(4105), n.e(1127), n.e(2127)]).then((() => () => n(94105))))), o("react", "18.2.0", (() => n.e(2522).then((() => () => n(42522))))), o("react", "18.3.1", (() => n.e(8654).then((() => () => n(98654))))), o("spatial-navigation-polyfill", "1.3.1", (() => n.e(491).then((() => () => n(60491)))))), e[d] = b.length ? Promise.all(b).then((() => e[d] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
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
                c.push(0 === o ? "not(" + b() + ")" : 1 === o ? "(" + b() + " || " + b() + ")" : 2 === o ? c.pop() + " " + c.pop() : d(o))
              }
              return b();

              function b() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var t = a[0],
                  f = t < 0;
                f && (t = -t - 1);
                for (var c = 0, o = 1, b = !0;; o++, c++) {
                  var n, l, i = o < a.length ? (typeof a[o])[0] : "";
                  if (c >= d.length || "o" == (l = (typeof(n = d[c]))[0])) return !b || ("u" == i ? o > t && !f : "" == i != f);
                  if ("u" == l) {
                    if (!b || "u" != i) return !1
                  } else if (b)
                    if (i == l)
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
                    if (o <= t || l < i != f) return !1;
                    b = !1
                  } else "s" != i && "n" != i && (b = !1, o--)
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
            t = (e, a) => e && n.o(e, a),
            f = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            b = e => function(a, d, r, t, f) {
              var c = n.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, n.S[a], d, !1, t, f)) : e(a, n.S[a], d, r, t, f)
            },
            l = (e, a, d) => d ? d() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            i = b(((e, b, n, i, s, u) => {
              if (!t(b, n)) return l(e, n, u);
              var h = ((e, d, t, f) => {
                var o = f ? c(e[d]) : e[d];
                return (d = Object.keys(o).reduce(((e, d) => !r(t, d) || e && !a(e, d) ? e : d), 0)) && o[d]
              })(b, n, s, i);
              return h ? f(h) : u ? u() : void o(((e, a, r, t, f) => {
                var c = e[r];
                return "No satisfying version (" + d(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(b, e, n, s, i))
            })),
            s = b(((e, o, b, n, i, s) => {
              if (!t(o, b)) return l(e, b, s);
              var u, h = ((e, d, r) => {
                var t = r ? c(e[d]) : e[d];
                return Object.keys(t).reduce(((e, d) => !e || !t[e].loaded && a(e, d) ? d : e), 0)
              })(o, b, n);
              return r(i, h) || (u = ((e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + d(t) + ")")(o, b, h, i), "undefined" != typeof console && console.warn && console.warn(u)), f(o[b][h])
            })),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], (() => n.e(8654).then((() => () => n(98654))))),
              21222: () => i("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], (() => n.e(5516).then((() => () => n(23135))))),
              74406: () => i("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], (() => n.e(8441).then((() => () => n(30822))))),
              9623: () => i("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([n.e(4105), n.e(2127)]).then((() => () => n(94105))))),
              16188: () => i("default", "lodash", !1, [1, 4, 17, 21], (() => n.e(4981).then((() => () => n(4981))))),
              34902: () => i("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], (() => Promise.all([n.e(8429), n.e(3410)]).then((() => () => n(61029))))),
              95966: () => i("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([n.e(5475), n.e(6497)]).then((() => () => n(79819))))),
              63694: () => i("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([n.e(8429), n.e(5380)]).then((() => () => n(62999))))),
              24036: () => i("default", "classnames", !1, [1, 2, 5, 1], (() => n.e(9704).then((() => () => n(89704))))),
              24780: () => i("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], (() => Promise.all([n.e(3981), n.e(3935), n.e(8429), n.e(9690)]).then((() => () => n(53935))))),
              78618: () => i("default", "@foundry/icons", !1, [1, 4], (() => Promise.all([n.e(2480), n.e(4548), n.e(126), n.e(6854)]).then((() => () => n(34548))))),
              81788: () => i("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([n.e(3218), n.e(8457)]).then((() => () => n(35671))))),
              63582: () => i("default", "framer-motion", !1, [1, 7, 5, 1], (() => n.e(7485).then((() => () => n(17485))))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], (() => n.e(2522).then((() => () => n(42522))))),
              79952: () => i("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], (() => n.e(491).then((() => () => n(60491))))),
              2918: () => i("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([n.e(7709), n.e(7542)]).then((() => () => n(80763))))),
              9046: () => i("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], (() => Promise.all([n.e(3981), n.e(6367), n.e(8429)]).then((() => () => n(6367))))),
              42638: () => i("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], (() => Promise.all([n.e(3981), n.e(5839), n.e(8429), n.e(9690), n.e(3536)]).then((() => () => n(3536))))),
              61339: () => i("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], (() => Promise.all([n.e(6260), n.e(8429)]).then((() => () => n(76260))))),
              13581: () => i("default", "gsap", !1, [1, "workspace:^"], (() => n.e(8728).then((() => () => n(58728))))),
              20270: () => i("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([n.e(3981), n.e(5839), n.e(2480), n.e(4768), n.e(8429), n.e(1222), n.e(4406), n.e(9690), n.e(4902), n.e(3694), n.e(261), n.e(6296)]).then((() => () => n(88733))))),
              75971: () => i("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([n.e(8429), n.e(3386), n.e(7114)]).then((() => () => n(84733))))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => n.e(3663).then((() => () => n(53663))))),
              80126: () => i("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([n.e(1222), n.e(2957), n.e(266)]).then((() => () => n(87885))))),
              19690: () => i("default", "react-remove-scroll", !1, [1, 2, 5, 7], (() => n.e(8591).then((() => () => n(28591))))),
              30306: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => n.e(3041).then((() => () => n(65422))))),
              52957: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => n.e(656).then((() => () => n(78275))))),
              23117: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => n.e(2030).then((() => () => n(19649))))),
              75199: () => i("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([n.e(306), n.e(9766)]).then((() => () => n(9766))))),
              79630: () => i("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([n.e(3117), n.e(147)]).then((() => () => n(42528))))),
              43386: () => i("default", "@popperjs/core", !1, [1, 2, 11, 8], (() => n.e(8376).then((() => () => n(78376))))),
              22127: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => n.e(3002).then((() => () => n(90621)))))
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
              3117: [23117],
              3386: [43386],
              3694: [63694],
              3875: [13581, 20270, 75971],
              4406: [74406],
              4902: [34902],
              5327: [63582, 73579, 79952],
              5966: [95966],
              6296: [75199, 79630],
              6497: [9623, 16188],
              8429: [18429],
              9690: [19690]
            },
            m = {};
          n.f.consumes = (e, a) => {
            n.o(p, e) && p[e].forEach((e => {
              if (n.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var d = a => {
                  u[e] = 0, n.m[e] = d => {
                    delete n.c[e], d.exports = a()
                  }
                };
                m[e] = !0;
                var r = a => {
                  delete u[e], n.m[e] = d => {
                    throw delete n.c[e], a
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
            n.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                835: 1,
                904: 1,
                2487: 1,
                3613: 1,
                3875: 1,
                4768: 1,
                6296: 1,
                6854: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var r = n.miniCssF(e),
                  t = n.p + r;
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
                  f.rel = "stylesheet", f.type = "text/css", n.nc && (f.nonce = n.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) r();
                    else {
                      var c = d && d.type,
                        o = d && d.target && d.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, f.parentNode && f.parentNode.removeChild(f), t(b)
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
          n.f.j = (a, d) => {
            var r = n.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(127|222|26|788)|2(127|61|918|957)|3(06|117|386|694)|4406|4902|5966|6854|8429|9690)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((d, t) => r = e[a] = [d, t]));
              d.push(r[2] = t);
              var f = n.p + n.u(a),
                c = new Error;
              n.l(f, (d => {
                if (n.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
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
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) n.o(c, r) && (n.m[r] = c[r]);
                o && o(n)
              }
              for (a && a(d); b < f.length; b++) t = f[b], n.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), n.nc = void 0, n(44857), n(84823)
      })())
    }
  }
}));