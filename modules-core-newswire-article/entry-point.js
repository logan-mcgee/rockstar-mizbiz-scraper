! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "01e24a5b-0750-452d-8d4e-da1d5aa91dc0", e._sentryDebugIdIdentifier = "sentry-dbid-01e24a5b-0750-452d-8d4e-da1d5aa91dc0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var c = {},
    d = {};
  return Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, t, r, b, n, o = {
            49293: (e, a, c) => {
              (0, c(31789).w)(1)
            },
            31789: (e, a, c) => {
              const d = c(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !c.y.meta || !c.y.meta.url) throw console.error("__system_context__", c.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                c.p = d(c.y.meta.url, e)
              }
            },
            23358: (e, a, c) => {
              c(49293)
            },
            90569: (e, a, c) => {
              a.y = function(e, a) {
                var c = document.createElement("a");
                c.href = e;
                for (var d = "/" === c.pathname[0] ? c.pathname : "/" + c.pathname, f = 0, t = d.length; f !== a && t >= 0;) "/" === d[--t] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var r = d.slice(0, t + 1);
                return c.protocol + "//" + c.host + r
              };
              Number.isInteger
            },
            55974: (e, a, c) => {
              "use strict";
              var d = {
                  "./index": () => Promise.all([c.e(1271), c.e(8743), c.e(9419), c.e(3190), c.e(7512), c.e(216), c.e(1956), c.e(3877), c.e(1897), c.e(9060), c.e(2229), c.e(6188), c.e(1597), c.e(4853), c.e(5966), c.e(1788), c.e(7024), c.e(4298), c.e(1947), c.e(2440), c.e(4943), c.e(6373), c.e(2507), c.e(2729)]).then((() => () => c(14743))),
                  "./tinaBlockTemplates": () => Promise.all([c.e(7512), c.e(1535), c.e(2229), c.e(6188), c.e(4853), c.e(5966), c.e(1788), c.e(7024), c.e(4298), c.e(1947), c.e(4943), c.e(1283)]).then((() => () => c(61283))),
                  "./types": () => Promise.all([c.e(1271), c.e(8743), c.e(9419), c.e(3190), c.e(7512), c.e(216), c.e(1956), c.e(3877), c.e(1897), c.e(9060), c.e(2229), c.e(6188), c.e(1597), c.e(4853), c.e(5966), c.e(1788), c.e(7024), c.e(4298), c.e(1947), c.e(2440), c.e(4943), c.e(6373), c.e(2507), c.e(2729)]).then((() => () => c(43193)))
                },
                f = (e, a) => (c.R = a, a = c.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), c.R = void 0, a),
                t = (e, a) => {
                  if (c.S) {
                    var d = "default",
                      f = c.S[d];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return c.S[d] = e, c.I(d, a)
                  }
                };
              c.d(a, {
                get: () => f,
                init: () => t
              })
            },
            29441: e => {
              "use strict";
              e.exports = c
            },
            25136: e => {
              "use strict";
              e.exports = d
            }
          },
          i = {};

        function s(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var c = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(c.exports, c, c.exports, s), c.loaded = !0, c.exports
        }
        return s.m = o, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, c) {
          if (1 & c && (a = this(a)), 8 & c) return a;
          if ("object" == typeof a && a) {
            if (4 & c && a.__esModule) return a;
            if (16 & c && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          s.r(d);
          var t = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var r = 2 & c && a;
            "object" == typeof r && !~e.indexOf(r); r = f(r)) Object.getOwnPropertyNames(r).forEach((e => t[e] = () => a[e]));
          return t.default = () => a, s.d(d, t), d
        }, s.d = (e, a) => {
          for (var c in a) s.o(a, c) && !s.o(e, c) && Object.defineProperty(e, c, {
            enumerable: !0,
            get: a[c]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, c) => (s.f[c](e, a), a)), [])), s.u = e => "js/" + {
          131: "dedebabf92fdd9d1ad59a9077262dca1",
          216: "548ddfe0acc1ee1b15cd88c6fa38baff",
          278: "67113501e73b80eff3261d831e40d833",
          299: "67f6fcc59381b60746ed67c17549be65",
          314: "c2ad8ccce4b6901d7c412ac3363ed1bd",
          662: "a7bcf7e222dbe0f24d18a3b8a1c788fb",
          707: "448777207b63cb9e6ef499827f92ac49",
          824: "8c935a0e2e321d826baf48dde0d3e2cd",
          907: "88f3d61e27640f4568ee6495021078c7",
          1029: "62f90ecfcfbeee617c6381901b873680",
          1054: "0103d8b5abc1de803fd5c297d1ba8bfc",
          1121: "187373c44716a4e515c15ed15454e146",
          1242: "88b65ff94e57752512dda5ca71979338",
          1271: "12261fe619102ead4d50bfe391ccd2f7",
          1283: "aa26605cb1a27cacf9a586551bac289d",
          1515: "23de11d1f94ad768daaa5847f978b08a",
          1535: "e6860378f8b58a9dde67c47ae33c203f",
          1597: "c114fb25158dfc2e3e63a55e7927f60d",
          1604: "211dba3e5d2201d3caa59ec30ee7cebf",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1822: "54b1c627acac57683f5d75a27722d141",
          1868: "ea4aa5f0cb5c685ea9673c265b14a999",
          1897: "f41f4070b78fb2d4511710e4631bfa95",
          1947: "0c1a85bd90cadc730bf8dc38e47d3f5e",
          1956: "29a4bf338a63be03ba5dde3097a03bd9",
          2156: "1045744263170e74304dc1f872e7f725",
          2171: "638c7a81bdeda67c5830459c32655c4e",
          2221: "dab9f81b5e2777237e76a9aee305754a",
          2229: "07b435f890979de431fa1d64b08dc445",
          2243: "6f391d9dedeef693f3ee40a0f0692f98",
          2347: "fa815d40ec639673a610e69a317d2d70",
          2365: "546874b875b1bf3631f2d8408d997bf1",
          2398: "f60cc96a14d7b51f499debd067fe0407",
          2440: "99b571f0fe412e698cb8b733555c103e",
          2466: "7e4dcc60e413d4fc7b09e5a69382d3e1",
          2507: "04ca5b800d4fc295e86b6ba8a649c791",
          2570: "28f2fda821b7221b1ccf1bfc19ec3ded",
          2642: "63863ed87b3cf750abbd715b85e675b2",
          2678: "d4731300254b87ae4deb7c0ce8e7d326",
          2729: "8d949500413078d704e40efc3d9f91e8",
          2864: "5fa5e61fc62592c5ce29a4720da3cd44",
          3034: "79efef30594f14723575e1bbd978b326",
          3131: "d94e5b37b3c2e320a8e339ba58ba2bbf",
          3190: "a2028c25895f6aec90173bcc63be76e6",
          3197: "ad31fa4667650c06326ac46a800b60ca",
          3217: "5fe31070c5211a60f963d156172715d0",
          3343: "0c5693a0a7651df04d591b9054a1007d",
          3360: "c5215381dfc8c1998019d8cb2f748391",
          3370: "dbcaaddbc338ab379667f426e9710547",
          3410: "c7122c3cebe9b8a5306d4777512903c5",
          3475: "9f1d2480ccd07080a6394022527ea6b6",
          3486: "ff4c0739cb5f4a91e851b6f6ddc82030",
          3502: "a954c14d2f436b7bb969cfe9682e8f27",
          3546: "2db6d0cd664bbc88292e3b52c42f71ce",
          3697: "3ad99b5fbc0f3d9b07c17d6f2f83aaad",
          3759: "781c9169bdd389fd80a3e6e179e63be7",
          3877: "fc9bbad3e22436c55e72c8acf2c5fbdc",
          3885: "31f088a8cb64ae28346fa95cecea8492",
          3941: "31c22beb1b589c2267aaef50c0d4482c",
          3954: "1b609e94b7db0c99cecf0520717e461a",
          4011: "5cc94a7a959872618542f7550f77bec1",
          4022: "b992fb308e4fe2dfdc067f7d5dfc085b",
          4282: "03cdf196789c004e12406f65d28ab09f",
          4298: "ad8553c2f69145d8ac5b26ae29140289",
          4528: "53fc7c02ae352cd8772a79633b242e9c",
          4621: "cc3cc55f43e6887574d42c01d9161c8f",
          4700: "605afa416c42a6f2fd39ff8fca12ab81",
          4710: "5daa19f98b8e99a2ec759275ac1c6d51",
          4731: "374655b053ade22d46055ee635d58453",
          4799: "98613cf719dd581a80362c8a893493fd",
          4851: "ba968b70dcfe08228337c8e0337c0bb1",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4861: "c2ad2398a79e46edb0deec031f2a66f2",
          4913: "4b45e71229eb550322a3189e1de6a4da",
          4943: "7efcbc3145e6f2919946e68693675a4e",
          5018: "2c219ba4829b580b214f3d4cf6683aee",
          5219: "1a43f4cf5b56e3f316a4a95f983bee24",
          5233: "9a70f7a6a6b12947f88225b9b08b71bf",
          5259: "2c62fcd1b01ec2b7ca4e2ddc3ccf2724",
          5260: "a953c8ce8cf4b77c63f1d7efb4616314",
          5309: "383fb3a88262b9f0656b976021df148d",
          5483: "7b9e2cf43f7f02ea12201e6a2f155188",
          5530: "d2380eb978906af0b63f7662284fa20a",
          5639: "ceb6272cdade2517e0464959c88fd00d",
          5663: "e7d79839481abc329656982f0e031754",
          5742: "ccec9532c7378bb50e84b9f2cdf43820",
          5830: "2b222e95e212b46f17c6ff3aa77c9b7f",
          5832: "2816a0d54b76abb554dc348154d369a3",
          5834: "fe18a9ba7a80ad3e621a760471399168",
          5909: "cd1bddb80b6444782354e68a532e25ff",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6175: "736cb8ff3d266c402a5bc4a36185eb26",
          6188: "de94ab264084d1f213f45bda8785848b",
          6267: "1edefd9b161af36342d7e017dffba0c8",
          6280: "170819ce89d46d2e90427b328b43e084",
          6285: "4065754f0a394cee4ab929602fb5c3c5",
          6304: "af2018bc155696e6ca6125b29ae4ac01",
          6361: "b6fc2f30f636460576a78f90708266f4",
          6373: "b2dc17dbffd28f6cc611b4c08fa4fdef",
          6480: "c65aec89c8f4f0f3293d16f93b59c5ad",
          6521: "1477d6c5238218ea2fa1425313d13278",
          6664: "9e86ed0857047aa972e1f79d1e226115",
          6832: "5ed33d57c65f39e7f37200cecd623114",
          6864: "a79f5b998703c6f63b1e9ee473fd915d",
          6879: "ee4e368927047e66d722b7530fb152e9",
          6891: "7c4e2a8de6fd96cec33772e22e901a78",
          6997: "75b77e773ad144b29ae0213b817f3e85",
          7010: "32fdd9a8a60bca0eb9ac92d33f48a4d4",
          7024: "7a219e2588cdb26007917c4e614d2e3d",
          7070: "c74b0b5d178f625746a948263c7e6355",
          7073: "076aacb65780365da2048eca04e13e80",
          7360: "b0c38b196672e46d7c9a5e1734541ce0",
          7436: "2a48980cbfc6ac7d498413354d048137",
          7452: "ffb4f8046aec1c585d208b63cbdf5b40",
          7453: "570bd56659e72d28fbe2ceb11657e203",
          7512: "af14db0121fce16496f1f266805301e7",
          7600: "dde3f32708ac475b9c7d45e6998070df",
          7970: "e42e84585ebbb7301a4acc1361f0a170",
          8272: "5979bb14af680150479ce5528b94c99b",
          8391: "a22eccb806330fa8f18a42c86f6e7ba4",
          8556: "eb9e206a08dc82adab35f6bc6834823d",
          8743: "ffcb2228c992ae422a27d1340f38229d",
          8755: "ab1463325ff6d2f337c0d436ee07bf4f",
          8880: "61aa52d365fda20967efe8e4153c68e9",
          8970: "4d5aeb47869936a0f1e1019cd0f83703",
          9022: "bd1b40f312e3187487c2eeed894d3343",
          9028: "4b31d371d54b45dbcc6a81da8a1b7bf2",
          9060: "ce8ad358af22588a6e03425bf4a344d4",
          9126: "70d87bc030205d18fe9ba15b71efa495",
          9130: "30c6b8c34d88aab066346acb87786c09",
          9157: "d3409f24c8f46795d1d89aabbc1be6ac",
          9292: "c25cc4e64e14609c0d85d75b5191ec1e",
          9339: "f0d318201c812cb6b2397724609024f1",
          9377: "d68d0084d85354467f5080032c69084c",
          9419: "8a8e90e2656f83d2c7ee23a01f4fa0c8",
          9550: "9e95ad474ffa701549b2f5577750daef",
          9615: "fb23625c19d91b314ff2281a89b272cb",
          9830: "21bb81f1f5690ad2f7d357b66930cc2a",
          9936: "ad3a99a02cf99dc89b665a60d8d78969",
          9990: "39abff255ac1609a037a1d68f54d0083"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          1897: "17aa9a721b88917c56aa79b8ce96cd2f",
          1947: "6cd6ed1f7ec476b645d80bafef5d1962",
          2507: "a4d0d05f2c595a76a83fc48160ec1820",
          2570: "384cddac2173849afd90c4a73e287f5e",
          2729: "8e09d2f119becb4ff324f880c5a5e72e",
          3546: "56b16f9b66562a2c85844d5af8cf65a2",
          4298: "99c2fd9adb621652406552432f4eb84c",
          4943: "72518ca966bc5c01f3e45685eb43a2c6",
          5260: "691d4f39e23bcff413a388e9a01eccf8",
          6175: "a183e3230fd27669a21ecdc8a082c2f7",
          6373: "d18aae952df3b002e2d2296d29237958",
          6480: "25c722cb525ac6c6280af22b8a0c5b31",
          8556: "a183e3230fd27669a21ecdc8a082c2f7",
          9060: "aafb24bf83c233b46de2828a5d0ecb5c",
          9339: "607f5820f99c58cf0dba2fcc42eeeb8d",
          9830: "384cddac2173849afd90c4a73e287f5e"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, r = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, c, d) => {
          if (t[e]) t[e].push(a);
          else {
            var f, b;
            if (void 0 !== c)
              for (var n = document.getElementsByTagName("script"), o = 0; o < n.length; o++) {
                var i = n[o];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == r + c) {
                  f = i;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, s.nc && f.setAttribute("nonce", s.nc), f.setAttribute("data-webpack", r + c), f.src = e), t[e] = [a];
            var l = (a, c) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach((e => e(c))), a) return a(c)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), b && document.head.appendChild(f)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), b = {
          1283: [11438, 17523, 44019, 83166],
          1947: [31879],
          4943: [64064]
        }, n = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, s.f.remotes = (e, a) => {
          s.o(b, e) && b[e].forEach((e => {
            var c = s.R;
            c || (c = []);
            var d = n[e];
            if (!(c.indexOf(d) >= 0)) {
              if (c.push(d), d.p) return a.push(d.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), s.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                t = (e, c, t, r, b, n) => {
                  try {
                    var o = e(c, t);
                    if (!o || !o.then) return b(o, r, n);
                    var i = o.then((e => b(e, r)), f);
                    if (!n) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                r = (e, a, f) => t(a.get, d[1], c, 0, b, f),
                b = a => {
                  d.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(s, d[2], 0, 0, ((e, a, c) => e ? t(s.I, d[0], 0, e, r, c) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (c, d) => {
            d || (d = []);
            var f = a[c];
            if (f || (f = a[c] = {}), !(d.indexOf(f) >= 0)) {
              if (d.push(f), e[c]) return e[c];
              s.o(s.S, c) || (s.S[c] = {});
              var t = s.S[c],
                r = "@rockstargames/modules-core-newswire-article",
                b = (e, a, c, d) => {
                  var f = t[e] = t[e] || {},
                    b = f[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : r > b.from)) && (f[a] = {
                    get: c,
                    from: r,
                    eager: !!d
                  })
                },
                n = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = s(e);
                    if (!f) return;
                    var t = e => e && e.init && e.init(s.S[c], d);
                    if (f.then) return o.push(f.then(t, a));
                    var r = t(f);
                    if (r && r.then) return o.push(r.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                o = [];
              return "default" === c && (b("@foundry/react", "1.25.4", (() => Promise.all([s.e(1271), s.e(1956), s.e(5260), s.e(1897), s.e(2229), s.e(4853), s.e(1029)]).then((() => () => s(65260))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(5483), s.e(2229), s.e(5219)]).then((() => () => s(87768))))), b("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([s.e(9419), s.e(216), s.e(2229), s.e(5966), s.e(4298), s.e(6480), s.e(1121)]).then((() => () => s(61121))))), b("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([s.e(1271), s.e(8743), s.e(9419), s.e(3190), s.e(216), s.e(1956), s.e(3877), s.e(2229), s.e(6188), s.e(1597), s.e(4853), s.e(5966), s.e(1788), s.e(2440), s.e(9339), s.e(6373), s.e(3546)]).then((() => () => s(23591))))), b("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([s.e(9419), s.e(2229), s.e(5966), s.e(4298), s.e(1947), s.e(2440), s.e(2507), s.e(6175)]).then((() => () => s(6175))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(1271), s.e(8743), s.e(3190), s.e(7512), s.e(2229), s.e(6188), s.e(1597), s.e(4853), s.e(5966), s.e(1788), s.e(7024), s.e(5834), s.e(2570)]).then((() => () => s(55834))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(1271), s.e(8743), s.e(2229), s.e(6188), s.e(1597), s.e(3410)]).then((() => () => s(93514))))), b("dompurify", "2.4.7", (() => s.e(1515).then((() => () => s(21515))))), b("lodash", "4.17.21", (() => s.e(4282).then((() => () => s(14282))))), b("react-dom", "18.2.0", (() => Promise.all([s.e(7360), s.e(2229)]).then((() => () => s(57360))))), b("react-jsx-parser", "2.2.2", (() => Promise.all([s.e(5909), s.e(2229)]).then((() => () => s(15909))))), b("react-router-dom", "6.17.0", (() => Promise.all([s.e(1604), s.e(2229)]).then((() => () => s(21604))))), b("react", "18.2.0", (() => s.e(3217).then((() => () => s(23217))))), b("text-balancer", "1.0.5", (() => s.e(4022).then((() => () => s(4022))))), n(25136), n(29441)), o.length ? e[c] = Promise.all(o).then((() => e[c] = 1)) : e[c] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var c = a.getElementsByTagName("script");
            if (c.length)
              for (var d = c.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = c[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                c = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = c[1] ? a(c[1]) : [];
              return c[2] && (d.length++, d.push.apply(d, a(c[2]))), c[3] && (d.push([]), d.push.apply(d, a(c[3]))), d
            },
            a = (c, d) => {
              if (0 in c) {
                d = e(d);
                var f = c[0],
                  t = f < 0;
                t && (f = -f - 1);
                for (var r = 0, b = 1, n = !0;; b++, r++) {
                  var o, i, s = b < c.length ? (typeof c[b])[0] : "";
                  if (r >= d.length || "o" == (i = (typeof(o = d[r]))[0])) return !n || ("u" == s ? b > f && !t : "" == s != t);
                  if ("u" == i) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == i)
                      if (b <= f) {
                        if (o != c[b]) return !1
                      } else {
                        if (t ? o > c[b] : o < c[b]) return !1;
                        o != c[b] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (t || b <= f) return !1;
                    n = !1, b--
                  } else {
                    if (b <= f || i < s != t) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < c.length; r++) {
                var h = c[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, d) : !u())
              }
              return !!u()
            },
            c = (c, d, f) => {
              var t = c[d];
              return (d = Object.keys(t).reduce(((c, d) => !a(f, d) || c && !((a, c) => {
                a = e(a), c = e(c);
                for (var d = 0;;) {
                  if (d >= a.length) return d < c.length && "u" != (typeof c[d])[0];
                  var f = a[d],
                    t = (typeof f)[0];
                  if (d >= c.length) return "u" == t;
                  var r = c[d],
                    b = (typeof r)[0];
                  if (t != b) return "o" == t && "n" == b || "s" == b || "u" == t;
                  if ("o" != t && "u" != t && f != r) return f < r;
                  d++
                }
              })(c, d) ? c : d), 0)) && t[d]
            },
            d = (e => function(a, c, d, f) {
              var t = s.I(a);
              return t && t.then ? t.then(e.bind(e, a, s.S[a], c, d, f)) : e(a, s.S[a], c, d, f)
            })(((e, a, d, f, t) => {
              var r = a && s.o(a, d) && c(a, d, f);
              return r ? (e => (e.loaded = 1, e.get()))(r) : t()
            })),
            f = {},
            t = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => s.e(3217).then((() => () => s(23217))))),
              16188: () => d("default", "lodash", [1, 4, 17, 21], (() => s.e(4282).then((() => () => s(14282))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(1604).then((() => () => s(21604))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => s.e(7360).then((() => () => s(57360))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([s.e(1271), s.e(8743), s.e(6188), s.e(1597)]).then((() => () => s(93514))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(5483), s.e(7600)]).then((() => () => s(87768))))),
              2973: () => d("default", "dompurify", [1, 2, 4, 1], (() => s.e(1515).then((() => () => s(21515))))),
              92440: () => d("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([s.e(1271), s.e(8743), s.e(3190), s.e(7512), s.e(6188), s.e(1597), s.e(4853), s.e(1788), s.e(7024), s.e(5834), s.e(9830)]).then((() => () => s(55834))))),
              15310: () => d("default", "@rsgweb/modules-core-group-of-items", [1, "workspace:^"], (() => s.e(8556).then((() => () => s(6175))))),
              20206: () => d("default", "@rsgweb/modules-core-engagement", [1, "workspace:^"], (() => s.e(9339).then((() => () => s(23591))))),
              23608: () => d("default", "@rsgweb/modules-core-carousel", [1, "workspace:^"], (() => Promise.all([s.e(6480), s.e(3502)]).then((() => () => s(61121))))),
              57770: () => d("default", "react-jsx-parser", [1, 2, 2, 2], (() => s.e(5909).then((() => () => s(15909))))),
              96711: () => d("default", "@foundry/react", [1, 1], (() => s.e(5260).then((() => () => s(65260))))),
              97384: () => d("default", "text-balancer", [1, 1, 0, 5], (() => s.e(4022).then((() => () => s(4022)))))
            },
            r = {
              1597: [9623],
              1788: [81788],
              1947: [2973],
              2229: [62229],
              2440: [92440],
              2729: [15310, 20206, 23608, 57770, 96711, 97384],
              4853: [44853],
              5966: [95966],
              6188: [16188]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(r, e) && r[e].forEach((e => {
              if (s.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var c = a => {
                  f[e] = 0, s.m[e] = c => {
                    delete s.c[e], c.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete f[e], s.m[e] = c => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var r = t[e]();
                  r.then ? a.push(f[e] = r.then(c).catch(d)) : c(r)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            s.f.miniCss = (a, c) => {
              e[a] ? c.push(e[a]) : 0 !== e[a] && {
                1897: 1,
                1947: 1,
                2507: 1,
                2570: 1,
                2729: 1,
                3546: 1,
                4298: 1,
                4943: 1,
                5260: 1,
                6175: 1,
                6373: 1,
                6480: 1,
                8556: 1,
                9060: 1,
                9339: 1,
                9830: 1
              } [a] && c.push(e[a] = (e => new Promise(((a, c) => {
                var d = s.miniCssF(e),
                  f = s.p + d;
                if (((e, a) => {
                    for (var c = document.getElementsByTagName("link"), d = 0; d < c.length; d++) {
                      var f = (r = c[d]).getAttribute("data-href") || r.getAttribute("href");
                      if ("stylesheet" === r.rel && (f === e || f === a)) return r
                    }
                    var t = document.getElementsByTagName("style");
                    for (d = 0; d < t.length; d++) {
                      var r;
                      if ((f = (r = t[d]).getAttribute("data-href")) === e || f === a) return r
                    }
                  })(d, f)) return a();
                ((e, a, c, d, f) => {
                  var t = document.createElement("link");
                  t.rel = "stylesheet", t.type = "text/css", t.onerror = t.onload = c => {
                    if (t.onerror = t.onload = null, "load" === c.type) d();
                    else {
                      var r = c && ("load" === c.type ? "missing" : c.type),
                        b = c && c.target && c.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      n.code = "CSS_CHUNK_LOAD_FAILED", n.type = r, n.request = b, t.parentNode && t.parentNode.removeChild(t), f(n)
                    }
                  }, t.href = a, document.head.appendChild(t)
                })(e, f, 0, a, c)
              })))(a).then((() => {
                e[a] = 0
              }), (c => {
                throw delete e[a], c
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          s.f.j = (a, c) => {
            var d = s.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) c.push(d[2]);
              else if (/^(2(229|440|507)|(178|429|618)8|1947|3546|4853|5966|6480|9830)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((c, f) => d = e[a] = [c, f]));
              c.push(d[2] = f);
              var t = s.p + s.u(a),
                r = new Error;
              s.l(t, (c => {
                if (s.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var f = c && ("load" === c.type ? "missing" : c.type),
                    t = c && c.target && c.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + f + ": " + t + ")", r.name = "ChunkLoadError", r.type = f, r.request = t, d[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, c) => {
              var d, f, t = c[0],
                r = c[1],
                b = c[2],
                n = 0;
              if (t.some((a => 0 !== e[a]))) {
                for (d in r) s.o(r, d) && (s.m[d] = r[d]);
                b && b(s)
              }
              for (a && a(c); n < t.length; n++) f = t[n], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            c = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          c.forEach(a.bind(null, 0)), c.push = a.bind(null, c.push.bind(c))
        })(), s.nc = void 0, s(23358), s(55974)
      })())
    }
  }
}));