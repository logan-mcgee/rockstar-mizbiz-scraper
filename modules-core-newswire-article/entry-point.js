try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "08e0da51-a2af-4765-8da2-32eec3e1c3cb", e._sentryDebugIdIdentifier = "sentry-dbid-08e0da51-a2af-4765-8da2-32eec3e1c3cb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var d = {},
    r = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, c, f, o, n, b = {
            13218: (e, a, d) => {
              (0, d(77600).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = r
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
              var r = {
                  "./index": () => Promise.all([d.e(2909), d.e(1888), d.e(1281), d.e(3830), d.e(6186), d.e(2066), d.e(803), d.e(1250), d.e(7382), d.e(4571), d.e(2229), d.e(6188), d.e(6497), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(1913), d.e(839), d.e(3804), d.e(2440), d.e(820), d.e(4721), d.e(6919), d.e(5670)]).then((() => () => d(16462))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(6186), d.e(5182), d.e(2229), d.e(6188), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(839), d.e(820), d.e(1692)]).then((() => () => d(31692))),
                  "./types": () => Promise.all([d.e(2909), d.e(1888), d.e(1281), d.e(3830), d.e(6186), d.e(2066), d.e(803), d.e(1250), d.e(7382), d.e(4571), d.e(2229), d.e(6188), d.e(6497), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(1913), d.e(839), d.e(3804), d.e(2440), d.e(820), d.e(4721), d.e(6919), d.e(5670)]).then((() => () => d(90883)))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                c = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => c
              })
            },
            67884: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, c = r.length; t !== a && c >= 0;) "/" === r[--c] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return d.protocol + "//" + d.host + f
              };
              Number.isInteger
            },
            77600: (e, a, d) => {
              const r = d(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            }
          },
          s = {};

        function i(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var d = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, i), d.loaded = !0, d.exports
        }
        return i.m = b, i.c = s, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          i.r(r);
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var f = 2 & d && a;
            "object" == typeof f && !~e.indexOf(f); f = t(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(r, c), r
        }, i.d = (e, a) => {
          for (var d in a) i.o(a, d) && !i.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, d) => (i.f[d](e, a), a)), [])), i.u = e => "js/" + {
          131: "83e88632ec619b02ca67d31331216c41",
          278: "7ff7cb8412250d80ea385a68419d6a08",
          299: "1cddfc16776f6705eba2ab8531fb9903",
          314: "b261cbdffaeda4d51837646b6cc023cf",
          621: "65093a0554a3f43de0cb9e76478c62a9",
          656: "245c6cb43ef3a77057e473dcae7592de",
          662: "06b929c25406568e0c15a710c21ad06b",
          803: "6080e7b0dce7729499582d0ba8c286a4",
          820: "910221f33f1d56d3013953269df6af70",
          823: "9637eef2002e57afaf713acb5c2aff2f",
          824: "d7fe77589bd0558ea00d379afbd2a2d7",
          838: "cabe286df096b7b71c8d5e3b8b5970cd",
          907: "8fcd36c4ac38911276f71fc401d8c88a",
          1054: "756af84430f566aed647b0a1485a5ca3",
          1242: "1c1872d9841c7b454f4587f0f0e2b6ad",
          1250: "054beb65258172555c15007af1041a24",
          1280: "4ea538a3c85a610e07778c63ff3623fe",
          1281: "3ad1fc51d30872d27936d65b0a20152f",
          1381: "9c2ac445e83061ca04a67df3e1350335",
          1692: "ab2a9107c28bac082ab7f28325149382",
          1822: "e770f37e8de80bc98aaa8f46de5bcfa1",
          1868: "803a940bfdbc048f470fd3640f25c857",
          1888: "792b350afb610d1b5e14e91fb3db1ff9",
          2066: "cb5c7ab85a3bd5f7704b68409a2a5c30",
          2156: "84a2a77fc003cf22ae564e9185134214",
          2171: "37c5568143b881ac9280efa72e93eb97",
          2221: "c38ba763f62fb547c230a54a9ee0a257",
          2243: "ce26a17978dd55839d18f753bb3f8f39",
          2347: "5a6114f7ba7b511964a6436148c7f2b1",
          2365: "3fb524f35208c6acb43c7705d9561957",
          2398: "7cdd459a87f227bbc2706c67cecf2f6f",
          2466: "e5538d24e70e619dbd7511a05819a01c",
          2522: "ef01117e964f68cd488f27afcbaa6fea",
          2578: "d9bacd2618a95aac22b72e56950d63cb",
          2642: "27e216ab8bb977464d3a3190961b8847",
          2678: "4eee85cf977d2658f6484ded1f273c1f",
          2864: "eb3378a9574d95ca38fa6ac52bbbae2b",
          2909: "2c8eb89d6e795ab539392c7ce6e8086c",
          3002: "288c71906984f2c9e32e6d0b9d6124a4",
          3034: "fdee0d33867bb73d671ad4d23c2a0729",
          3041: "85bfaf33c0eb3d59247e5f8ba3492952",
          3197: "5f6a19e97b87e553ad8baa98446e3706",
          3218: "e27ff6253206e3ee23fc23f7189388e1",
          3343: "f685501496b20098753460948972c314",
          3370: "564b127fc1c0f3c9c50938d32cd98f43",
          3461: "b83d54a79ac7b19c19aa8930214abe8f",
          3475: "3415537af8b825aadc8b9b2e12e927f5",
          3486: "37dc801194beeb229ca059c2e53716fb",
          3516: "7a4d1a5d4825534deff37779f053b077",
          3586: "5b247b4b76e3eb5393a3ed2e91a3c4a7",
          3663: "8bdcc84d61b16b5db87908d013394204",
          3672: "9300e19e85db9278e23bac41ab9814e6",
          3697: "2cbe029e4afa70baf9d9e74542d3e77f",
          3830: "0e62d0f50bbd11136a8441d591328722",
          3885: "0b4a5201954506d96e3b55d7fa4250a9",
          3941: "00bff85f141a9af814c48a714278b204",
          4011: "9ce769798ae28d0c55e7b2c606371f53",
          4105: "eb1e372f1027bfbb812948bdbded7bd8",
          4153: "085729a650cd3502977d8cf0fa206edd",
          4480: "ab2c3f81cc33167a6a74131d5152b312",
          4528: "08c28d7cf748746a8b12db7667135cca",
          4571: "993f49564720a5393b665099b2141590",
          4621: "4497ab83ac9a515d1792dd029f8d4640",
          4684: "dc2c0858dce90bd0981fda4025947a9e",
          4700: "296768e2486de0c9e2a539784da05e75",
          4710: "e14920159806b995f139ca197d4980ac",
          4721: "1cfa5ed0ceb21441e463653545fcc2ca",
          4731: "b269cce6da96d4e12aa8425a3f59add8",
          4799: "d9bf8bda64795eca6fe9e655eff914ff",
          4851: "98f5119239a9eac8170e9c0ef62de9b7",
          4861: "44828eb1d8fd1b43f34f334e08cb40a8",
          4913: "7d63d58477b8a75cf83e59b4ccd2242d",
          4981: "ee9f3a4db4004fe8d8317b361e531d1d",
          5e3: "8747312e6cdec9fff88fda8157c88b6e",
          5018: "3cab6608a65996e47a7bb5081ac95d2b",
          5182: "a463bae7e80e282cd8460704bbb6f89d",
          5232: "66bca929eec7421a5e95d3312f8f5a5a",
          5233: "c7c463e16169643e423df053bd1e5a52",
          5259: "ce5fdab9ca00e1b5ab175c6ec213a14a",
          5422: "91eef924c18e437bf1e6dd779adff4f6",
          5530: "a4b117181e9583a507c547a613e23332",
          5639: "3bd31236f2291d32b35e07b89f7983f0",
          5663: "5e49f66b1885e55a4971a57af783134d",
          5670: "14c95e96083c45d0f7bbb95366ec4423",
          5734: "b278b306496971a4af152bac8f48103c",
          5742: "66a5b602833d508427ee0e3abb53df53",
          5830: "040658c296f6d9149ce559040189c2e5",
          5832: "2163f748de2ae40ab134c2b483a4abb9",
          5854: "568984df5ff15ab7bd121e43d9ca139c",
          6083: "e3e0bf14d9c75bc0b9342a969a71661d",
          6186: "83d4db78a8125b8fb5733989a80433e1",
          6207: "718b89d50338cbf9d7a77fb87b0ff627",
          6267: "2eb74e642b784496f17dac44176ca502",
          6280: "3162efef027a1596a5c72393dba818dd",
          6285: "4b7709a70d041df69c75752937a76002",
          6361: "5957827310fecf45a1c3251aee3f4847",
          6497: "8b580225137570742117734f06839ec3",
          6664: "301f354ef72c8aa7ac7f64e5f36a2227",
          6681: "c302d11a61457f6dff7435584b3be923",
          6879: "c914a53df6a094b87daed21bce855b40",
          6891: "4ff6848856fbe09a5ae5ef406caadafc",
          6997: "8845da72c06b949ad4d79bf14c1329af",
          7010: "a42e238ab0574dc96763b3b88e25b592",
          7048: "dca448359b29882982a46a98b9491167",
          7073: "c2eec8f8d88c3afd139b6b3803ac1f02",
          7353: "a92091d1ad0b28b7487506bdf445c1cb",
          7382: "90ecc969db6757aefc72c17b6b56461e",
          7436: "ba9798fe844085430a7b4e228a3f3492",
          7452: "41c35e59f9af951dcef63fe101b73459",
          7453: "fa68a8e1085dee0f805eab305f416b92",
          7727: "25698089001ea29fa55207e0a7ab14e4",
          7893: "e7bea57b0f3f367b9ee757f4d29427c2",
          7970: "301916a85d418e4aefcaf227d35e1bd8",
          8272: "1d5cf38819079589bd8e123ab7ac0e3f",
          8275: "bd750b1782b9a5918777af78ce0c72b1",
          8391: "3172c8be1bb5561c90c9ee439b3ec1f0",
          8457: "fea87ea1ee32a2170561afbfa46a8ce2",
          8464: "0836aa623978103582d795ec58763857",
          8522: "4eb26d7c24c038c015fb5aba6ba95570",
          8557: "388dc308d1d59f443010891581cca36d",
          8654: "f479cbbb7702b2a20342d905e55c21b6",
          8755: "a2d5fe3b45db7e0dd86d9b3896dea1d6",
          8880: "e880826dc28e97943264e4d8ccbc3664",
          8906: "72d2e91000a9c2bb64f641d4e1d92307",
          8970: "da563911bc6b97c647896f6fa868a989",
          9022: "6a3d24c135ea6d9ed13fd52d2a5654ef",
          9028: "0e5f9fb7429170e51ca648434d9d73d0",
          9062: "d91c2f6772ddc8ecf835b5508ee0c880",
          9126: "6d6a8dbd0c5fe4c90f672829a3405cf5",
          9279: "3ac7accda51e6149370f15a10a351434",
          9377: "0fe335bb253259b17ef01747dcce03cd",
          9583: "19801d89d0741bf6eeaf6998398a2dcf",
          9615: "234d2cb3e39b1537398760b8ece8e45f",
          9649: "d0989c62e85a4d7c5042ac6d2b55989b",
          9936: "73166db51602a377d406b1cdc5ad3106",
          9990: "9d0fff964902bbaf53d4c183e885b984"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          820: "e79a4105235290f9d2d864ea28c87921",
          839: "3a4070d4c77506d8955255a1ccc7b2a6",
          3149: "9997228c3a403f7217e4c92e428d0359",
          4492: "2a25aaf73f30fa3834bdcc0018f08819",
          4571: "7d08ead9dd48419a2cb3d5906a426e37",
          4721: "f1212f2a94dd200b41d61bd732f9b140",
          5232: "32b480e5b467a8e833ad0b3b7a3c2b7d",
          5670: "93300c24320d8e14c200528c99656b89",
          6083: "214e2f94528af5f726d2150d0a4f2215",
          6919: "ea6994b8bffa7799c2b673f690549eda",
          7382: "bbc3aa4f4a5918e71769d52dc4e1ae69",
          7650: "384cddac2173849afd90c4a73e287f5e",
          8464: "214e2f94528af5f726d2150d0a4f2215",
          8522: "3c6fae78d6e30d8aa17204dace392cf5",
          9279: "384cddac2173849afd90c4a73e287f5e",
          9810: "ac6c3d25628c6900ccf6742b6efb74bd"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, d, r) => {
          if (c[e]) c[e].push(a);
          else {
            var t, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var s = n[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + d) {
                  t = s;
                  break
                }
              }
            t || (o = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, i.nc && t.setAttribute("nonce", i.nc), t.setAttribute("data-webpack", f + d), t.src = e), c[e] = [a];
            var l = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var r = c[e];
                if (delete c[e], t.parentNode && t.parentNode.removeChild(t), r && r.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = l.bind(null, t.onerror), t.onload = l.bind(null, t.onload), o && document.head.appendChild(t)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
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
        }, i.f.remotes = (e, a) => {
          i.o(o, e) && o[e].forEach((e => {
            var d = i.R;
            d || (d = []);
            var r = n[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, d, c, f, o, n) => {
                  try {
                    var b = e(d, c);
                    if (!b || !b.then) return o(b, f, n);
                    var s = b.then((e => o(e, f)), t);
                    if (!n) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    t(e)
                  }
                },
                f = (e, a, t) => c(a.get, r[1], d, 0, o, t),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, r[2], 0, 0, ((e, a, d) => e ? c(i.I, r[0], 0, e, f, d) : t()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              i.o(i.S, d) || (i.S[d] = {});
              var c = i.S[d],
                f = "@rockstargames/modules-core-newswire-article",
                o = (e, a, d, r) => {
                  var t = c[e] = c[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : f > o.from)) && (t[a] = {
                    get: d,
                    from: f,
                    eager: !!r
                  })
                },
                n = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var t = i(e);
                    if (!t) return;
                    var c = e => e && e.init && e.init(i.S[d], r);
                    if (t.then) return b.push(t.then(c, a));
                    var f = c(t);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === d && (o("@foundry/react", "4.1.5", (() => Promise.all([i.e(2909), i.e(803), i.e(8522), i.e(7382), i.e(2229), i.e(4853), i.e(3804), i.e(4977), i.e(6207)]).then((() => () => i(78522))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(3218), i.e(2229), i.e(838)]).then((() => () => i(35671))))), o("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([i.e(1281), i.e(2066), i.e(2229), i.e(5966), i.e(3149), i.e(1913), i.e(4492), i.e(6681)]).then((() => () => i(96681))))), o("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([i.e(2909), i.e(1888), i.e(1281), i.e(3830), i.e(2066), i.e(803), i.e(1250), i.e(2229), i.e(6188), i.e(6497), i.e(5966), i.e(1788), i.e(1913), i.e(3804), i.e(2440), i.e(5232), i.e(4721), i.e(9810)]).then((() => () => i(25128))))), o("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([i.e(1281), i.e(2229), i.e(5966), i.e(3149), i.e(1913), i.e(839), i.e(2440), i.e(6919), i.e(6083)]).then((() => () => i(6083))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(2909), i.e(1888), i.e(3830), i.e(6186), i.e(2229), i.e(6188), i.e(6497), i.e(5966), i.e(4853), i.e(1788), i.e(8906), i.e(3516), i.e(9279)]).then((() => () => i(63516))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(2909), i.e(1888), i.e(2229), i.e(6188), i.e(6497), i.e(5854)]).then((() => () => i(55247))))), o("dompurify", "2.5.8", (() => i.e(7048).then((() => () => i(17048))))), o("lodash", "4.17.21", (() => i.e(4981).then((() => () => i(4981))))), o("react-dom", "18.3.1", (() => Promise.all([i.e(3663), i.e(2229)]).then((() => () => i(53663))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(5422)]).then((() => () => i(65422))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(8275)]).then((() => () => i(78275))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(9649)]).then((() => () => i(19649))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(621)]).then((() => () => i(90621))))), o("react-jsx-parser", "2.4.0", (() => Promise.all([i.e(5e3), i.e(2229)]).then((() => () => i(65e3))))), o("react-router-dom", "6.30.0", (() => Promise.all([i.e(4105), i.e(2229), i.e(3271)]).then((() => () => i(94105))))), o("react", "18.2.0", (() => i.e(2522).then((() => () => i(42522))))), o("react", "18.3.1", (() => i.e(8654).then((() => () => i(98654))))), o("text-balancer", "1.0.5", (() => i.e(3461).then((() => () => i(3461))))), n(25136), n(29441)), b.length ? e[d] = Promise.all(b).then((() => e[d] = 1)) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = d[1] ? a(d[1]) : [];
              return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
            },
            a = e => {
              var d = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (d + .5) {
                r += 0 == d ? ">=" : -1 == d ? "<" : 1 == d ? "^" : 2 == d ? "~" : d > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, r += "u" == (typeof(o = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return r
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
            d = (a, r) => {
              if (0 in a) {
                r = e(r);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= r.length || "o" == (s = (typeof(b = r[f]))[0])) return !n || ("u" == i ? o > t && !c : "" == i != c);
                  if ("u" == s) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == s)
                      if (o <= t) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || s < i != c) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, t, c) => {
              var f = c ? (e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(f).reduce(((a, r) => !d(t, r) || a && !((a, d) => {
                a = e(a), d = e(d);
                for (var r = 0;;) {
                  if (r >= a.length) return r < d.length && "u" != (typeof d[r])[0];
                  var t = a[r],
                    c = (typeof t)[0];
                  if (r >= d.length) return "u" == c;
                  var f = d[r],
                    o = (typeof f)[0];
                  if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                  if ("o" != c && "u" != c && t != f) return t < f;
                  r++
                }
              })(a, r) ? a : r), 0)) && f[r]
            },
            t = e => {
              throw new Error(e)
            },
            c = (e => function(a, d, r, t, c) {
              var f = i.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, i.S[a], d, !1, t, c)) : e(a, i.S[a], d, r, t, c)
            })(((e, d, c, f, o, n) => {
              if (!((e, a) => e && i.o(e, a))(d, c)) return ((e, a, d) => d ? d() : ((e, a) => t("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, n);
              var b, s = r(d, c, o, f);
              return s ? ((b = s).loaded = 1, b.get()) : n ? n() : void t(((e, d, r, t, c) => {
                var f = e[r];
                return "No satisfying version (" + a(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + d + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(d, e, c, o, f))
            })),
            f = {},
            o = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8654).then((() => () => i(98654))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(4981).then((() => () => i(4981))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(4105), i.e(3271)]).then((() => () => i(94105))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(2909), i.e(1888), i.e(6188), i.e(6497)]).then((() => () => i(55247))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(3663).then((() => () => i(53663))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(3218), i.e(8457)]).then((() => () => i(35671))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(2522).then((() => () => i(42522))))),
              2973: () => c("default", "dompurify", !1, [1, 2, 4, 1], (() => i.e(7048).then((() => () => i(17048))))),
              33804: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(3041).then((() => () => i(65422))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(2909), i.e(1888), i.e(3830), i.e(6186), i.e(6188), i.e(6497), i.e(4853), i.e(1788), i.e(8906), i.e(3516), i.e(7650)]).then((() => () => i(63516))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], (() => i.e(8464).then((() => () => i(6083))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], (() => i.e(5232).then((() => () => i(25128))))),
              23608: () => c("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], (() => Promise.all([i.e(4492), i.e(9062)]).then((() => () => i(96681))))),
              57770: () => c("default", "react-jsx-parser", !1, [1, 2, 2, 2], (() => i.e(5e3).then((() => () => i(65e3))))),
              61898: () => c("default", "@foundry/react", !1, [1, 4, 1, 5], (() => Promise.all([i.e(8522), i.e(4977)]).then((() => () => i(78522))))),
              97384: () => c("default", "text-balancer", !1, [1, 1, 0, 5], (() => i.e(3461).then((() => () => i(3461))))),
              34977: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(656).then((() => () => i(78275))))),
              23271: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(3002).then((() => () => i(90621)))))
            },
            n = {
              839: [2973],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              3271: [23271],
              3804: [33804],
              4853: [44853],
              4977: [34977],
              5670: [15310, 20206, 23608, 57770, 61898, 97384],
              5966: [95966],
              6188: [16188],
              6497: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(n, e) && n[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var d = a => {
                  f[e] = 0, i.m[e] = d => {
                    delete i.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete f[e], i.m[e] = d => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var t = o[e]();
                  t.then ? a.push(f[e] = t.then(d).catch(r)) : d(t)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            i.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                820: 1,
                839: 1,
                3149: 1,
                4492: 1,
                4571: 1,
                4721: 1,
                5232: 1,
                5670: 1,
                6083: 1,
                6919: 1,
                7382: 1,
                7650: 1,
                8464: 1,
                8522: 1,
                9279: 1,
                9810: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var r = i.miniCssF(e),
                  t = i.p + r;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), r = 0; r < d.length; r++) {
                      var t = (f = d[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (t === e || t === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((t = (f = c[r]).getAttribute("data-href")) === e || t === a) return f
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = d => {
                    if (c.onerror = c.onload = null, "load" === d.type) r();
                    else {
                      var f = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), t(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
            6947: 0
          };
          i.f.j = (a, d) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(3(149|271|804)|4(492|853|977)|(17|61)88|(222|691|83)9|(244|765|981)0|1913|5966)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((d, t) => r = e[a] = [d, t]));
              d.push(r[2] = t);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, (d => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, r[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, c = d[0],
                f = d[1],
                o = d[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in f) i.o(f, r) && (i.m[r] = f[r]);
                o && o(i)
              }
              for (a && a(d); n < c.length; n++) t = c[n], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), i.nc = void 0, i(44857), i(55974)
      })())
    }
  }
}));