! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "68ff6897-0311-4fae-b77c-b940c64b080b", e._sentryDebugIdIdentifier = "sentry-dbid-68ff6897-0311-4fae-b77c-b940c64b080b")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var d = {},
    t = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
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
    }],
    execute: function() {
      e((() => {
        var e, r, c, f, o, n, b = {
            13218: (e, a, d) => {
              (0, d(77600).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            29441: e => {
              "use strict";
              e.exports = d
            },
            44857: (e, a, d) => {
              d(13218)
            },
            55974: (e, a, d) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([d.e(2909), d.e(1888), d.e(1281), d.e(3830), d.e(6186), d.e(2066), d.e(803), d.e(1250), d.e(7382), d.e(4571), d.e(2229), d.e(6188), d.e(6497), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(1913), d.e(839), d.e(3804), d.e(2440), d.e(820), d.e(4721), d.e(6919), d.e(3113)]).then((() => () => d(68265))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(6186), d.e(5182), d.e(2229), d.e(6188), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(839), d.e(820), d.e(1692)]).then((() => () => d(31692))),
                  "./types": () => Promise.all([d.e(2909), d.e(1888), d.e(1281), d.e(3830), d.e(6186), d.e(2066), d.e(803), d.e(1250), d.e(7382), d.e(4571), d.e(2229), d.e(6188), d.e(6497), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(1913), d.e(839), d.e(3804), d.e(2440), d.e(820), d.e(4721), d.e(6919), d.e(3113)]).then((() => () => d(90883)))
                },
                r = (e, a) => (d.R = a, a = d.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                c = (e, a) => {
                  if (d.S) {
                    var t = "default",
                      r = d.S[t];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[t] = e, d.I(t, a)
                  }
                };
              d.d(a, {
                get: () => r,
                init: () => c
              })
            },
            67884: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var t = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, r = 0, c = t.length; r !== a && c >= 0;) "/" === t[--c] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
                return d.protocol + "//" + d.host + f
              };
              Number.isInteger
            },
            77600: (e, a, d) => {
              const t = d(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = t(d.y.meta.url, e)
              }
            }
          },
          l = {};

        function s(e) {
          var a = l[e];
          if (void 0 !== a) return a.exports;
          var d = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, s), d.loaded = !0, d.exports
        }
        return s.m = b, s.c = l, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          s.r(t);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & d && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, s.d(t, c), t
        }, s.d = (e, a) => {
          for (var d in a) s.o(a, d) && !s.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, d) => (s.f[d](e, a), a)), [])), s.u = e => "js/" + {
          131: "57a885584ac7392d5183a4ed3e29f730",
          278: "f86b6dcc07069a4412834714df6de810",
          299: "ba73d002138416b2bf399e3a60d1def5",
          314: "6521ad53555cdf92005dbe3f789c93d3",
          621: "d5eac230025c5c2f847f18638e7380a2",
          656: "9deb1b712a0860d696652e00785df416",
          662: "adc70032d6f4b53aa1584c6223edf853",
          803: "44db2a255b0a0dbf60f38b90b04a8f5e",
          820: "0d71382d7e856aa8eb4c36c9bc19268d",
          823: "6b4e805f4e804150bbfcdf17d6019640",
          824: "3438e8b11733abaa31d31e124dd8260d",
          838: "35d4a730a29c954227de619a75211d17",
          907: "f667d9f687fb66c4f2ba4afeb4c7f8cb",
          1054: "c183ce26f35b3176f4e33241507ca8a8",
          1242: "a9993da5c2e6d1f40bd39b2fb39912bc",
          1250: "5e443dfe8935fb844077f5085d298e6f",
          1280: "80ff015563882bcc5a36a5c23e22cead",
          1281: "b5ec8320e4b2d97eb7152def921ae510",
          1381: "ebd965da3961bdc066e6ed6e2c56125b",
          1692: "bb53d912e98f203e3d259743741b7dbb",
          1822: "61963bf644afbe018064ab7bc01dc84c",
          1868: "e4ac34eadfee7bcfbb4eb2767e0d37a6",
          1888: "0cdf3a6468def6c20299fff59e615c7d",
          2066: "c567deeeaef5b90879953e0ff7664574",
          2156: "1b885746af6748f1b360030c015150c8",
          2171: "4bf799c8db8565f3ff47f0c3af941b79",
          2221: "a925c1b3ebb11d89b003f3939c23f384",
          2243: "a57ee4b122542eca065aa6079717dfb9",
          2347: "2f5824d63ad5727c1d2acb9f8804c8d5",
          2365: "9fb703b419c784cfa7f5d3b56423fa2e",
          2398: "a5208c1dd40eea5ee09a36f8648b60ac",
          2466: "ac00f3123ac9396e170af3ee07a1bb43",
          2522: "5f570ba59305925ba662f58c9215892b",
          2578: "63ed7ca9cb27b78175bc6eafe18b9622",
          2642: "417fba91a18941d151a5a2d897afda07",
          2678: "0323885ef18f4941e96ac75821acfd2b",
          2864: "49a10d7187dcbb372cc421d77fb5bccf",
          2909: "e8556843946545e1c87aaa2a46fb3c6a",
          3002: "76f0076e0e07d97487867f297054585c",
          3034: "39d7e800d39eaa3363db4df28fc600ad",
          3041: "48d253ebdbaf62fa0d3833df62a72497",
          3113: "a5da5a838888ac161771cca708b7e33c",
          3197: "8e40e7c148a32ff5f73c0982f89d94c6",
          3218: "b3c18ba9fc316365c9285af452a5c707",
          3343: "6814960bfeee24eb950e7b26e1dca558",
          3370: "59a9d136a7e0278f4f8b40156406dda6",
          3461: "4205e7cf791e3f97c281bad6096ca3ea",
          3475: "91ab444ef50018df5bc1eee488b20099",
          3486: "c7c1e5e9d174dfeecb0463744a366885",
          3516: "1feeb80370ff6b1ce7a45bfc22c6dfd6",
          3586: "7c304d4f16d9d50b8e33797d65c77388",
          3663: "44904f1b708e3ff00f4938be5ee6be91",
          3672: "9c97434d77cf1b38944550ac81a45491",
          3697: "ce923831b19fd1e0c0d8a3ed8e52414f",
          3830: "e91bdd33b797729d0a06d4cf8381ae34",
          3885: "f1b8a2bdff3e4598ccab1413b6bd1f87",
          3941: "5d4a59a2f2505cf614b8dc8725ce6aa1",
          4011: "b25f973a94fb47dce94514a17c0d233e",
          4105: "d13393c1dae27a98a901710f3c87cc98",
          4153: "726b486a60da9a317331827b23e61547",
          4251: "c35011baa4c670028d180a4601082ddf",
          4480: "4b765707d542dcec73737b13677ad61e",
          4528: "ed9354ae56fbbe24b35d415d39da769e",
          4571: "04a2da1db87756171a910d252de8abb7",
          4621: "9be4080bb156d7dae9847b50db160cee",
          4684: "435cbdccbbac2bb155d8ddcd150f8fa4",
          4700: "c8b1af8319218b2bbc7d280802082d5f",
          4710: "ecccd24c9f8c9e27e9abe45b492e535f",
          4721: "7598aa46989778f18d190a7636bc195a",
          4731: "41cea0f354dce1f2c4be0639dbeec7c0",
          4799: "108dce9840580367fc0582491c3c81a5",
          4851: "91e1308bfd834a964c0b424ab2d215cb",
          4861: "7504ff29dd33c99ba5b7bd8d8b1a524e",
          4913: "2cf882e1065da0d1269d347e6924dd22",
          4981: "e69dc1a3dfd4e2b6125438558ea6207e",
          5e3: "ad4b4f965e450b3ef55726577c650d8d",
          5018: "0567e91f4adb3075346d17c3467000c0",
          5182: "6f4a507df96745be7a15fa96431c8a91",
          5232: "32cdef76f2f456760dfcf0b81739270d",
          5233: "22523ec26805f146f931cab9b1c52174",
          5259: "71be886b462eb288138f0a94e8df6a39",
          5422: "279c77552748c6a7423012bfa926c926",
          5530: "ff5269bb7516ee30fa93ea567e83af6d",
          5639: "61bbd4530f6928af2d86d6151f1ab5a5",
          5663: "423c02567589d5b6e98ffabc77d1d58c",
          5734: "cf5b16788810afc73bee7471f1e52cd6",
          5742: "8d0c1507aba33f1688b3c4e4fe310eba",
          5830: "63932dc3d39ef7fac00b5e29f04ebf63",
          5832: "e5e18b7889c88a02adcaf301d588ff8a",
          5854: "1b46ed6e28a1eacd107e11b0e93220de",
          6083: "7f9650f19639433039487424d4fbbea3",
          6186: "daac077ccc6a630a99694fe2c3f5867c",
          6207: "cd5282a840f77c86ed0dedc64d9214f7",
          6267: "03fec1099a3a01c500b81dc923474122",
          6280: "9db3013969b2d66388dde9f8b4c37e45",
          6285: "92909d62af7abeb344b086ae2916844c",
          6361: "451212cea2c94a834e3e399084eadd00",
          6497: "86177ab7612ab729fb13e1537b2907b9",
          6664: "31511ee1a5b9594f7ad5f8e14c57658b",
          6681: "bbfc5f217393999e07f3838039920c25",
          6879: "3b0c672fe82a6e4dfac7f4291bd9fc75",
          6891: "7b7ba728945c91917b9042e6716759d4",
          6997: "2fa05ec832da61b4bd6fd3216ed9908c",
          7010: "de331809062b18f1b1479f1e67377115",
          7048: "97d62c0e96ecce468124a1bb28b96308",
          7073: "52c1f70105e720f1d57acda5c641b964",
          7353: "a6ce0cc33d630b61aa858b309dc7dac6",
          7382: "b87f3e0a1377f57a5ff80963a24c81b8",
          7436: "faad7ec4893e899460c1679e0fcddef2",
          7452: "760884293a43e5fe8c9cb2b12e831062",
          7453: "c42bafdd03306a91be4abfa6d2f0eed0",
          7727: "3805398581533f2a27840fa48f4952b0",
          7893: "42626301990d7bc9d92fb67018961ef5",
          7970: "312e903aff9c5835a3b7c6fcd6803110",
          8272: "963b3cf9d907e80d0447bf1864f1fb36",
          8275: "76e717c13110eb6d5436b9d81709f7be",
          8391: "f318901f77d21db85738e96a8613f265",
          8457: "f831cdc98f7fd1b42a252142c3b2944a",
          8464: "9793ff47e665b4d72b2ad514329bc38d",
          8557: "9a6e7427184f6b90e0a271230f0193c5",
          8654: "6f2ecee929a3f9191a9b270bef58ddf7",
          8755: "399cce159a298515798b54e0fe40effa",
          8880: "7ec6ec90bfecc89ccc4e37d19b8a7bb5",
          8906: "5a9894948b41dc4758adf4dee3b81b70",
          8970: "f5b12242f0c0587b371db4308ba51674",
          9022: "466e8ca0233d1d958e90cfd4bee44893",
          9028: "11576f51db55a2fdebf1f25f6e4ee90f",
          9062: "e52a35ca08ac474834b34104dd6df4f2",
          9126: "6ea7292100cf54481a757174da0e1869",
          9279: "70064343a82f9dbac90b257d07f41572",
          9377: "b0a183dc27b71a4ea13c912825810a9e",
          9583: "cce8e06ecb5511c7844d4906ae6119f2",
          9615: "ba33af65497079e85c13db2f7b313c66",
          9936: "0081c5261e67a7060cbed7df6a975d64",
          9990: "b8514e0e384168cf3a5261364a9b7427"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          820: "e79a4105235290f9d2d864ea28c87921",
          839: "3a4070d4c77506d8955255a1ccc7b2a6",
          3113: "0640cc4f9b65ca1fe67ce9d507c4be25",
          3149: "9997228c3a403f7217e4c92e428d0359",
          4251: "951c841dbb46609bf2cb1a16d777013d",
          4492: "2a25aaf73f30fa3834bdcc0018f08819",
          4571: "7d08ead9dd48419a2cb3d5906a426e37",
          4721: "f1212f2a94dd200b41d61bd732f9b140",
          5232: "32b480e5b467a8e833ad0b3b7a3c2b7d",
          6083: "214e2f94528af5f726d2150d0a4f2215",
          6919: "ea6994b8bffa7799c2b673f690549eda",
          7382: "136cc3f3aa219b97687bdb39e57010f8",
          7650: "384cddac2173849afd90c4a73e287f5e",
          8464: "214e2f94528af5f726d2150d0a4f2215",
          9279: "384cddac2173849afd90c4a73e287f5e",
          9810: "ac6c3d25628c6900ccf6742b6efb74bd"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, d, t) => {
          if (c[e]) c[e].push(a);
          else {
            var r, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var l = n[b];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == f + d) {
                  r = l;
                  break
                }
              }
            r || (o = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, s.nc && r.setAttribute("nonce", s.nc), r.setAttribute("data-webpack", f + d), r.src = e), c[e] = [a];
            var i = (a, d) => {
                r.onerror = r.onload = null, clearTimeout(u);
                var t = c[e];
                if (delete c[e], r.parentNode && r.parentNode.removeChild(r), t && t.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: r
              }), 12e4);
            r.onerror = i.bind(null, r.onerror), r.onload = i.bind(null, r.onload), o && document.head.appendChild(r)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          820: [64064],
          839: [31879],
          1692: [11438, 17523, 44019, 83166]
        }, n = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, s.f.remotes = (e, a) => {
          s.o(o, e) && o[e].forEach((e => {
            var d = s.R;
            d || (d = []);
            var t = n[e];
            if (!(d.indexOf(t) >= 0)) {
              if (d.push(t), t.p) return a.push(t.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), s.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, d, c, f, o, n) => {
                  try {
                    var b = e(d, c);
                    if (!b || !b.then) return o(b, f, n);
                    var l = b.then((e => o(e, f)), r);
                    if (!n) return l;
                    a.push(t.p = l)
                  } catch (e) {
                    r(e)
                  }
                },
                f = (e, a, r) => c(a.get, t[1], d, 0, o, r),
                o = a => {
                  t.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(s, t[2], 0, 0, ((e, a, d) => e ? c(s.I, t[0], 0, e, f, d) : r()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (d, t) => {
            t || (t = []);
            var r = a[d];
            if (r || (r = a[d] = {}), !(t.indexOf(r) >= 0)) {
              if (t.push(r), e[d]) return e[d];
              s.o(s.S, d) || (s.S[d] = {});
              var c = s.S[d],
                f = "@rockstargames/modules-core-newswire-article",
                o = (e, a, d, t) => {
                  var r = c[e] = c[e] || {},
                    o = r[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (r[a] = {
                    get: d,
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
                    var r = s(e);
                    if (!r) return;
                    var c = e => e && e.init && e.init(s.S[d], t);
                    if (r.then) return b.push(r.then(c, a));
                    var f = c(r);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === d && (o("@foundry/react", "4.1.2", (() => Promise.all([s.e(2909), s.e(803), s.e(4251), s.e(7382), s.e(2229), s.e(4853), s.e(3804), s.e(4977), s.e(6207)]).then((() => () => s(54251))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(3218), s.e(2229), s.e(838)]).then((() => () => s(35671))))), o("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([s.e(1281), s.e(2066), s.e(2229), s.e(5966), s.e(3149), s.e(1913), s.e(4492), s.e(6681)]).then((() => () => s(96681))))), o("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([s.e(2909), s.e(1888), s.e(1281), s.e(3830), s.e(2066), s.e(803), s.e(1250), s.e(2229), s.e(6188), s.e(6497), s.e(5966), s.e(1788), s.e(1913), s.e(3804), s.e(2440), s.e(5232), s.e(4721), s.e(9810)]).then((() => () => s(25128))))), o("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([s.e(1281), s.e(2229), s.e(5966), s.e(3149), s.e(1913), s.e(839), s.e(2440), s.e(6919), s.e(6083)]).then((() => () => s(6083))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(2909), s.e(1888), s.e(3830), s.e(6186), s.e(2229), s.e(6188), s.e(6497), s.e(5966), s.e(4853), s.e(1788), s.e(8906), s.e(3516), s.e(9279)]).then((() => () => s(63516))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(2909), s.e(1888), s.e(2229), s.e(6188), s.e(6497), s.e(5854)]).then((() => () => s(55247))))), o("dompurify", "2.5.8", (() => s.e(7048).then((() => () => s(17048))))), o("lodash", "4.17.21", (() => s.e(4981).then((() => () => s(4981))))), o("react-dom", "18.3.1", (() => Promise.all([s.e(3663), s.e(2229)]).then((() => () => s(53663))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(5422)]).then((() => () => s(65422))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(8275)]).then((() => () => s(78275))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(621)]).then((() => () => s(90621))))), o("react-jsx-parser", "2.4.0", (() => Promise.all([s.e(5e3), s.e(2229)]).then((() => () => s(65e3))))), o("react-router-dom", "6.30.0", (() => Promise.all([s.e(4105), s.e(2229), s.e(3271)]).then((() => () => s(94105))))), o("react", "18.2.0", (() => s.e(2522).then((() => () => s(42522))))), o("react", "18.3.1", (() => s.e(8654).then((() => () => s(98654))))), o("text-balancer", "1.0.5", (() => s.e(3461).then((() => () => s(3461))))), n(25136), n(29441)), b.length ? e[d] = Promise.all(b).then((() => e[d] = 1)) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var t = d.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = d[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
                for (var r = 1, c = 1; c < e.length; c++) r--, t += "u" == (typeof(o = e[c]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, o);
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
            d = (a, t) => {
              if (0 in a) {
                t = e(t);
                var r = a[0],
                  c = r < 0;
                c && (r = -r - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, l, s = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= t.length || "o" == (l = (typeof(b = t[f]))[0])) return !n || ("u" == s ? o > r && !c : "" == s != c);
                  if ("u" == l) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == l)
                      if (o <= r) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || o <= r) return !1;
                    n = !1, o--
                  } else {
                    if (o <= r || l < s != c) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                i.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, t) : !u())
              }
              return !!u()
            },
            t = (a, t, r, c) => {
              var f = c ? (e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(f).reduce(((a, t) => !d(r, t) || a && !((a, d) => {
                a = e(a), d = e(d);
                for (var t = 0;;) {
                  if (t >= a.length) return t < d.length && "u" != (typeof d[t])[0];
                  var r = a[t],
                    c = (typeof r)[0];
                  if (t >= d.length) return "u" == c;
                  var f = d[t],
                    o = (typeof f)[0];
                  if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                  if ("o" != c && "u" != c && r != f) return r < f;
                  t++
                }
              })(a, t) ? a : t), 0)) && f[t]
            },
            r = e => {
              throw new Error(e)
            },
            c = (e => function(a, d, t, r, c) {
              var f = s.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, s.S[a], d, !1, r, c)) : e(a, s.S[a], d, t, r, c)
            })(((e, d, c, f, o, n) => {
              if (!((e, a) => e && s.o(e, a))(d, c)) return ((e, a, d) => d ? d() : ((e, a) => r("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, n);
              var b, l = t(d, c, o, f);
              return l ? ((b = l).loaded = 1, b.get()) : n ? n() : void r(((e, d, t, r, c) => {
                var f = e[t];
                return "No satisfying version (" + a(r) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + d + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(d, e, c, o, f))
            })),
            f = {},
            o = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => s.e(8654).then((() => () => s(98654))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => s.e(4981).then((() => () => s(4981))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([s.e(4105), s.e(3271)]).then((() => () => s(94105))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([s.e(2909), s.e(1888), s.e(6188), s.e(6497)]).then((() => () => s(55247))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3663).then((() => () => s(53663))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([s.e(3218), s.e(8457)]).then((() => () => s(35671))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => s.e(2522).then((() => () => s(42522))))),
              2973: () => c("default", "dompurify", !1, [1, 2, 4, 1], (() => s.e(7048).then((() => () => s(17048))))),
              33804: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3041).then((() => () => s(65422))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([s.e(2909), s.e(1888), s.e(3830), s.e(6186), s.e(6188), s.e(6497), s.e(4853), s.e(1788), s.e(8906), s.e(3516), s.e(7650)]).then((() => () => s(63516))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], (() => s.e(8464).then((() => () => s(6083))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], (() => s.e(5232).then((() => () => s(25128))))),
              23608: () => c("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], (() => Promise.all([s.e(4492), s.e(9062)]).then((() => () => s(96681))))),
              57770: () => c("default", "react-jsx-parser", !1, [1, 2, 2, 2], (() => s.e(5e3).then((() => () => s(65e3))))),
              82522: () => c("default", "@foundry/react", !1, [1, 4], (() => Promise.all([s.e(4251), s.e(4977)]).then((() => () => s(54251))))),
              97384: () => c("default", "text-balancer", !1, [1, 1, 0, 5], (() => s.e(3461).then((() => () => s(3461))))),
              34977: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(656).then((() => () => s(78275))))),
              23271: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3002).then((() => () => s(90621)))))
            },
            n = {
              839: [2973],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              3113: [15310, 20206, 23608, 57770, 82522, 97384],
              3271: [23271],
              3804: [33804],
              4853: [44853],
              4977: [34977],
              5966: [95966],
              6188: [16188],
              6497: [9623]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(n, e) && n[e].forEach((e => {
              if (s.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var d = a => {
                  f[e] = 0, s.m[e] = d => {
                    delete s.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete f[e], s.m[e] = d => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var r = o[e]();
                  r.then ? a.push(f[e] = r.then(d).catch(t)) : d(r)
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
            s.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                820: 1,
                839: 1,
                3113: 1,
                3149: 1,
                4251: 1,
                4492: 1,
                4571: 1,
                4721: 1,
                5232: 1,
                6083: 1,
                6919: 1,
                7382: 1,
                7650: 1,
                8464: 1,
                9279: 1,
                9810: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var t = s.miniCssF(e),
                  r = s.p + t;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), t = 0; t < d.length; t++) {
                      var r = (f = d[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (r === e || r === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((r = (f = c[t]).getAttribute("data-href")) === e || r === a) return f
                    }
                  })(t, r)) return a();
                ((e, a, d, t, r) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", s.nc && (c.nonce = s.nc), c.onerror = c.onload = d => {
                    if (c.onerror = c.onload = null, "load" === d.type) t();
                    else {
                      var f = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), r(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, r, 0, a, d)
              })))(a).then((() => {
                e[a] = 0
              }), (d => {
                throw delete e[a], d
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          s.f.j = (a, d) => {
            var t = s.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) d.push(t[2]);
              else if (/^(3(149|271|804)|4(492|853|977)|(17|61)88|(222|691|83)9|(244|765|981)0|1913|5966)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise(((d, r) => t = e[a] = [d, r]));
              d.push(t[2] = r);
              var c = s.p + s.u(a),
                f = new Error;
              s.l(c, (d => {
                if (s.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var r = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + r + ": " + c + ")", f.name = "ChunkLoadError", f.type = r, f.request = c, t[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var t, r, c = d[0],
                f = d[1],
                o = d[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in f) s.o(f, t) && (s.m[t] = f[t]);
                o && o(s)
              }
              for (a && a(d); n < c.length; n++) r = c[n], s.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), s.nc = void 0, s(44857), s(55974)
      })())
    }
  }
}));