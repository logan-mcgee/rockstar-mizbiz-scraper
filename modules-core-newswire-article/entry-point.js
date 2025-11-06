try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2d587775-7fc9-44d9-b4d4-9b53bc8a5369", e._sentryDebugIdIdentifier = "sentry-dbid-2d587775-7fc9-44d9-b4d4-9b53bc8a5369")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {},
    t = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, d, c, f, o, n, b = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
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
              var t = {
                  "./index": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(5176), r.e(7545), r.e(6769), r.e(1302), r.e(4873), r.e(2389), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(4804), r.e(76), r.e(7577)]).then((() => () => r(28674))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(5117), r.e(8661), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(4572), r.e(6130), r.e(6069), r.e(6536), r.e(2358), r.e(3410)]).then((() => () => r(4984))),
                  "./types": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(5176), r.e(7545), r.e(6769), r.e(1302), r.e(4873), r.e(2389), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(4804), r.e(76), r.e(7577)]).then((() => () => r(76808)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => c
              })
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, c = t.length; d !== a && c >= 0;) "/" === t[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
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
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var c = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = d(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(t, c), t
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          68: "15c7772e4e507d4ca1dd0f4b2523caa9",
          131: "b59f11725e0093d9a2ce05fc33a7b3e0",
          173: "8bb1435d6677443a55f28c7046af7d11",
          278: "8edc19cef52a1c9d0189fba903a3c324",
          299: "6f2138d9e73b59243e7636a63d4c1693",
          314: "a0033d8d97eade338d16909ffc14bef3",
          439: "aa867cccdda2d495c5257999a819fbe9",
          602: "6031cab7b9ce55adb5e33f5fafa756da",
          662: "d862a9206a1f62fc5c43e0bf087493ea",
          824: "99705ba2bc0f58ee921660b7e72678ba",
          884: "36a08b1e6d71d483245aca26077e6eb9",
          907: "e8ffad25d3744cdf0aace424b50423e6",
          1054: "09eb50a7f1f703d8efef145309cb6295",
          1057: "126b333f58a1596ed5452582b6b8aad7",
          1098: "74359f520194451ef103a42aebf18085",
          1242: "90df781999390eba9890b77b2b376e2c",
          1302: "1dde83539ce4157f06577bd9df6ae959",
          1758: "193d3407d14413022a6fe4fc7d2a7914",
          1822: "9a2d6437c7c452ecae8866063b70899e",
          1858: "b963ab9fb2854ae4ce140020b9b8a2ae",
          1868: "b3c9e2f75359507cece6cf2ee902308f",
          1967: "24306fbca20f5eeee1a2dca9b1459f5e",
          2156: "49f34965d72a1fd8353ddb6f8af20100",
          2169: "4377c1539ff498ddeb82e63f0f8b7feb",
          2171: "457606d04ec2a49c760d35067709bdb8",
          2221: "b83c327de28fd6c8b43ca374a17453a8",
          2234: "aa645deb99459005c7640c8c45292a67",
          2243: "49792484ef0afc99025ef5b0d587f1c2",
          2306: "6e57ded28d07b657ed43a39c87cbc9a9",
          2347: "c406d7ffd963a89de572e322b0d03686",
          2358: "68a1006971ce6b08e947d7859ac33e18",
          2365: "f2bca07f66057c672020b14b483bd524",
          2389: "561ebd20f7544c96d8cb5feefedf3537",
          2398: "2977a2f4ffccc2ff66c2224bcc922069",
          2466: "07c317ab9a030fa1475d76dc1389c87c",
          2642: "0fa3d7d81935d4223ae183c5dd4b2c35",
          2678: "635bc527994e6f732602651dc94012d4",
          2864: "93b2e1898d425e12c3d17d2f7b5be328",
          3034: "08a4e6dcfa2f66f094d278d651d30287",
          3197: "412d22d9d73a4077d830dc43bfaafbbe",
          3318: "532619457362ed226de3be468b10135d",
          3343: "5543ed1e2268df95184bf762acc71b4b",
          3370: "ff4a55c779ffb877a2297d9dee279771",
          3387: "b1969c89f6332acee475002676c5d46a",
          3410: "f31cbf325ada4064aa3b3bdc8791733c",
          3421: "4d83e1002905e2badbf45556788794df",
          3438: "0efe44a06c922911256c90a73a51623a",
          3475: "8f48701763af0ea727e5334b89a5163e",
          3486: "7ea940dad79808a06fb54e69a0f6d0ec",
          3697: "87bd97b6caf7dcbb4032ddac773d9040",
          3885: "ebfddb950743bfbbb7415bcf4e9c3479",
          3896: "59c655f2ecbfa6b9e831677cc78be3c2",
          3941: "df79ed76909f4e07c0fd346e981b0d74",
          4011: "996ce38d49f0709229169690e63e5c48",
          4237: "5cbe49c77d7aa3015ae879a45fbac6e4",
          4488: "e6c17534898d93e048cdebd6fbc1bcee",
          4528: "7f170ddf002ad79a3e79a96f52a2d883",
          4550: "6743203a09363c62341694ce1fd43103",
          4578: "ef6572c64e7929cec86880e67536a06f",
          4621: "da9f1bf64363f547ba5e2e2ee3c881fe",
          4700: "7190395110e442715f7929b302255385",
          4710: "57647c9942973920d9553279edb6f990",
          4731: "c9a00eaf15b9a62bfa070f92135b1693",
          4799: "5a344f196d6dbce5568db243f828c732",
          4804: "1716afb6ac4eda1d3aac614ff69d684b",
          4851: "1b3cf6bcfb38705e727cd7c71d6e4978",
          4861: "8c678adfbf2b464ef6ca3d5777bacdcd",
          4873: "fe04126f98fc872c1613b4f1bf34381d",
          4913: "4d396e25868df5a80af90eb755b0b3d1",
          5018: "0219119c70f3fbe0de82f1a436b36ac7",
          5076: "1bc199c238a76c6b56fb89c02195d054",
          5117: "99daac6ddc90fecc039814b8ba1fd2cf",
          5176: "323ba29013252a8e587ebacc645d7a1b",
          5233: "2862ecc8115af25abe260f6412b20c57",
          5259: "63726e76af3ef1dd27edbdeede31ad33",
          5265: "250b7e0f8e8ce14225fcaa450694ade7",
          5389: "b3060afc016d2024f7aa1a3daf614f7e",
          5400: "53e83f43f45d47da34ab57d441402480",
          5415: "6b391ec34a4a3b9dfda157272708a7e0",
          5454: "54598b052ce3e0c6852842b384f02143",
          5488: "29cdc33bf601b33b692c7bbf8f65eb51",
          5530: "c129397d8f65a4c1be93287a1e2b92c4",
          5639: "f8acbb1508b088ae2c2a506a9cb4428f",
          5663: "042fc04b2cd02697d0577a1c0367412c",
          5742: "93a5aeb649b876f25aeebaafbb570e92",
          5802: "8db796779e9b0f3a718f6d04565e4e9f",
          5830: "05e08070af2265dceddf68f57ee601aa",
          5832: "03472325dc7c974b2d4a93cb0d4eb58d",
          5859: "2a56b797461a5219d03d249fe32387c8",
          6088: "f077e58eb26fc49539f22b517f2fe5bb",
          6130: "143da8c52e22a565a2fe4123fdd57c3d",
          6267: "6deeb761cc9108cf2c916847f88d34d8",
          6280: "f499b42d1cdb83d4e6786480f10993ec",
          6285: "a3b5f77a1c5980efd46739a4a8250689",
          6321: "ac3d1cf604eb477c48565e913bfbb5d7",
          6327: "4180ccc08b9d8790c347ad5b1afb2223",
          6361: "c9b974697e32cd89cc36fe2a6383fa2f",
          6471: "4e3cf9d2834b0a5823b438d31cf709f0",
          6664: "6d434a2d1f728c0941dacfec705ce5f5",
          6769: "4598fef55b8b410c6afddd795b3bd226",
          6879: "4fe64782cfe59bd4257a2ecaac87bae5",
          6891: "1e21c4dd6932ca40c097d7ed29d978ad",
          6997: "3158144d21543096d521fa159522c818",
          7010: "ef4467d18dabeb3551c38d3af63fc3b6",
          7073: "c48c042f36fec7bc191953247139eda9",
          7407: "9aa112a18e3c4785372b629c9fcc3b9c",
          7436: "b4239d19b8c51f3105c939cd86f05721",
          7452: "2ec0a42dd7463a62d53f90e4de6be099",
          7453: "da6c4a2fa0fe85680ce2dee42615eda1",
          7545: "0eb20642f3688c20d89131f6765cc72f",
          7577: "9b25babe3cb5c72724354a67f370735d",
          7785: "e31811209607711c010ef7758d53280d",
          7970: "5681dccb62e2492dc938164492517615",
          8068: "1a9f750906252d3f11c166ed6cde6108",
          8240: "38b3e549377eb908b2dca24022f210e8",
          8272: "b4f9d8fbc68e946627f0b478c9530b0b",
          8325: "426be322b8c89a8a05a4d74f9660268c",
          8391: "70999e7f4eb7c07e36768ea979c42444",
          8431: "092790a1875f46e9cd43a845bde9b1cd",
          8503: "968b4aa012d1ea0f6e2b9c10a568251d",
          8659: "4c29a528f0ac8fb6795aca250a0535b1",
          8661: "adf86aa285bac142e420f91a93987a3c",
          8702: "ec4e4e546c75757063b35f65d8744019",
          8708: "7daa8fc216658c76831dfbde00113dd6",
          8755: "e0d755fde56331a13c679a66bfa68dbb",
          8845: "b8e262fc4c47cc94fdacbe1efa590372",
          8880: "99c050d3c4846c49aa1a479f2fa5cba2",
          8938: "3c808c5bff8f251e4f3ed7c060b12db6",
          8970: "e809860c1b82f35dcac5e749bc1d7b97",
          9022: "8f833df535d827bfd83a89fbb160d4e3",
          9028: "19c68766f29ebd59ea69767bde84c1d5",
          9126: "2ec970472506631816d8f44af5914743",
          9377: "cbbe7d4c620b3e2871ccce528b0819c0",
          9407: "712fe8218f7c33dfe0f22535bcbca66d",
          9477: "edfeae958708392563d9e02e4d5710ab",
          9587: "2d35dff846e8865ddb6bd35c16fa1f7b",
          9615: "4c73cda119a781ec13f0db601ab27c37",
          9760: "b4b17b3afc6898ca2a9df569a05ce62b",
          9936: "3639deb00eeafa5c25afd5bd0f58fe89",
          9990: "3149cf1f882a369baacc891c63b83145"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "537c3654e32745a846faf8bafb6e84bd",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "384cddac2173849afd90c4a73e287f5e",
          2358: "e79a4105235290f9d2d864ea28c87921",
          2389: "cafc86906239d62ab739b07a7b7dd87d",
          3318: "742693da22ad7a392de104bbd4a4bce1",
          3438: "384cddac2173849afd90c4a73e287f5e",
          4804: "af3247b64b139b8a366ea805c8a1eb65",
          4883: "e345407a8ae77135cb5f6b56cec264b8",
          6069: "6a345130a21d6aba1c7f8052c5eb72c4",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          6740: "f9c77f0c92c32584fcabab2f8a06d7de",
          7577: "1a12cfd58c416d40708ecf48eaa5c16c",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8579: "2185f6eb10d4c7769c05f1a343298050"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, t) => {
          if (c[e]) c[e].push(a);
          else {
            var d, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var s = n[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  d = s;
                  break
                }
              }
            d || (o = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", f + r), d.src = e), c[e] = [a];
            var l = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var t = c[e];
                if (delete c[e], d.parentNode && d.parentNode.removeChild(d), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), o && document.head.appendChild(d)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          2358: [64064],
          3410: [11438, 17523, 44019, 83166],
          6536: [31879]
        }, n = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, a) => {
          i.o(o, e) && o[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, o, n) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return o(b, f, n);
                    var s = b.then((e => o(e, f)), d);
                    if (!n) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, a, d) => c(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, t[2], 0, 0, ((e, a, r) => e ? c(i.I, t[0], 0, e, f, r) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var c = i.S[r],
                f = "@rockstargames/modules-core-newswire-article",
                o = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                n = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var d = i(e);
                    if (!d) return;
                    var c = e => e && e.init && e.init(i.S[r], t);
                    if (d.then) return b.push(d.then(c, a));
                    var f = c(d);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (o("@foundry/react", "5.9.0", (() => Promise.all([i.e(602), i.e(5488), i.e(6769), i.e(1302), i.e(3318), i.e(2229), i.e(4853), i.e(4572), i.e(430), i.e(9407)]).then((() => () => i(43374))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then((() => () => i(12841))))), o("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([i.e(4488), i.e(7545), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(8579), i.e(9477)]).then((() => () => i(89477))))), o("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([i.e(5488), i.e(4488), i.e(7545), i.e(6769), i.e(4873), i.e(2229), i.e(4853), i.e(5966), i.e(1788), i.e(9623), i.e(4572), i.e(1913), i.e(2918), i.e(2440), i.e(1967), i.e(4804), i.e(6740)]).then((() => () => i(87579))))), o("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([i.e(4488), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then((() => () => i(90884))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(2229), i.e(6188), i.e(5966), i.e(9623), i.e(6088), i.e(4550)]).then((() => () => i(32169))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(5117), i.e(2229), i.e(4853), i.e(6188), i.e(5966), i.e(1788), i.e(6130), i.e(2918), i.e(1057)]).then((() => () => i(99747))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(602), i.e(4237), i.e(5176), i.e(5454), i.e(2229), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(8702)]).then((() => () => i(58702))))), o("clsx", "2.1.1", (() => i.e(439).then((() => () => i(10439))))), o("dompurify", "2.5.8", (() => i.e(7785).then((() => () => i(27785))))), o("lodash", "4.17.21", (() => i.e(5076).then((() => () => i(15076))))), o("react-dom", "18.3.1", (() => Promise.all([i.e(1098), i.e(2229)]).then((() => () => i(71098))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(3421)]).then((() => () => i(83421))))), o("react-intersection-observer", "9.16.0", (() => Promise.all([i.e(2229), i.e(6327)]).then((() => () => i(76327))))), o("react-jsx-parser", "2.4.0", (() => Promise.all([i.e(3387), i.e(2229)]).then((() => () => i(43387))))), o("react-router-dom", "6.30.0", (() => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then((() => () => i(15389))))), o("react", "18.2.0", (() => i.e(8659).then((() => () => i(68659))))), o("react", "18.3.1", (() => i.e(8431).then((() => () => i(48431))))), o("text-balancer", "1.0.5", (() => i.e(5400).then((() => () => i(75400))))), n(25136), n(29441)), b.length ? e[r] = Promise.all(b).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(o = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : a(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= t.length || "o" == (s = (typeof(b = t[f]))[0])) return !n || ("u" == i ? o > d && !c : "" == i != c);
                  if ("u" == s) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == s)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || s < i != c) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, t) : !u())
              }
              return !!u()
            },
            t = (a, t, d, c) => {
              var f = c ? (e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(f).reduce(((a, t) => !r(d, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    c = (typeof d)[0];
                  if (t >= r.length) return "u" == c;
                  var f = r[t],
                    o = (typeof f)[0];
                  if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                  if ("o" != c && "u" != c && d != f) return d < f;
                  t++
                }
              })(a, t) ? a : t), 0)) && f[t]
            },
            d = e => {
              throw new Error(e)
            },
            c = (e => function(a, r, t, d, c) {
              var f = i.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, i.S[a], r, !1, d, c)) : e(a, i.S[a], r, t, d, c)
            })(((e, r, c, f, o, n) => {
              if (!((e, a) => e && i.o(e, a))(r, c)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, n);
              var b, s = t(r, c, o, f);
              return s ? ((b = s).loaded = 1, b.get()) : n ? n() : void d(((e, r, t, d, c) => {
                var f = e[t];
                return "No satisfying version (" + a(d) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(r, e, c, o, f))
            })),
            f = {},
            o = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8431).then((() => () => i(48431))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(1098).then((() => () => i(71098))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(5076).then((() => () => i(15076))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(602), i.e(4237), i.e(5176), i.e(5454), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(6321)]).then((() => () => i(58702))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(9587), i.e(5859)]).then((() => () => i(12841))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(5389), i.e(4853)]).then((() => () => i(15389))))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], (() => i.e(439).then((() => () => i(10439))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8659).then((() => () => i(68659))))),
              2918: () => c("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(6188), i.e(9623), i.e(6088), i.e(2169)]).then((() => () => i(32169))))),
              2973: () => c("default", "dompurify", !1, [1, 2, 4, 1], (() => i.e(7785).then((() => () => i(27785))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(5117), i.e(4853), i.e(6188), i.e(1788), i.e(6130), i.e(2918), i.e(3438)]).then((() => () => i(99747))))),
              327: () => c("default", "@foundry/react", !1, [4, 5, 9, 0], (() => Promise.all([i.e(602), i.e(5488), i.e(1302), i.e(3318), i.e(430)]).then((() => () => i(43374))))),
              61128: () => c("default", "react-intersection-observer", !1, [1, 9, 16, 0], (() => i.e(8708).then((() => () => i(76327))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], (() => i.e(8503).then((() => () => i(90884))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], (() => Promise.all([i.e(5488), i.e(1967), i.e(4883)]).then((() => () => i(87579))))),
              42602: () => c("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], (() => Promise.all([i.e(8579), i.e(1858)]).then((() => () => i(89477))))),
              57770: () => c("default", "react-jsx-parser", !1, [1, 2, 2, 2], (() => i.e(3387).then((() => () => i(43387))))),
              97384: () => c("default", "text-balancer", !1, [1, 1, 0, 5], (() => i.e(5400).then((() => () => i(75400))))),
              50430: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(5802).then((() => () => i(83421)))))
            },
            n = {
              430: [50430],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4572: [4572],
              4804: [327, 61128],
              4853: [44853],
              5966: [95966],
              6188: [16188],
              6536: [2973],
              7577: [15310, 20206, 42602, 57770, 97384],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(n, e) && n[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var r = a => {
                  f[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete f[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? a.push(f[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                76: 1,
                884: 1,
                1057: 1,
                2358: 1,
                2389: 1,
                3318: 1,
                3438: 1,
                4804: 1,
                4883: 1,
                6069: 1,
                6536: 1,
                6740: 1,
                7577: 1,
                8503: 1,
                8579: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((d = (f = c[t]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), d(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2(229|440|918)|4(30|572|853|883)|6(069|188|536|740)|1788|1913|5966|76|8579|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [c, f, o] = r,
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                o && o(i)
              }
              for (a && a(r); n < c.length; n++) d = c[n], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
}));