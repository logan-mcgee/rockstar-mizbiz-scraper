try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2f7d801b-6630-4907-8de1-316f22b8eb3d", e._sentryDebugIdIdentifier = "sentry-dbid-2f7d801b-6630-4907-8de1-316f22b8eb3d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, t, f, c, d, n, o = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            58639: (e, a, r) => {
              "use strict";
              var t = {
                  "./bootstrap": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(9745), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(38), r.e(8437)]).then(() => () => r(58437)),
                  "./index": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(9745), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(38), r.e(9741)]).then(() => () => r(19741)),
                  "./site-routes/Bully": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(9745), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(38), r.e(392), r.e(6019)]).then(() => () => r(86019)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(9745), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(38), r.e(392), r.e(9171)]).then(() => () => r(99171)),
                  "./tina": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(9745), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(38), r.e(392)]).then(() => () => r(392))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => c
              })
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, c = t.length; f !== a && c >= 0;) "/" === t[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            93032: (e, a, r) => {
              r(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          i.r(f);
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var d = 2 & r && a;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = t(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, i.d(f, c), f
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          38: "a10af0c3e2085c0804f1424c4809c291",
          68: "e01a6ccdc4ae0734d65838a413b704e3",
          131: "0f577cd05840f6dc4721713a0f795f4f",
          173: "9028591161df088e936a0545cefdb0e6",
          278: "4659954dc1bebc8b1b980e98ec987a63",
          299: "88455e94ce3e8ef7406c2bb4b6228157",
          314: "0cbbee943c904982741b27cc6f5e9b38",
          392: "2793593f32a0c8448aaa39afa5d19cfb",
          439: "ac6c7027a303c6fab074979f607330be",
          601: "8f7eb770153a8b4d18b7de6868f13d7a",
          662: "362de25b84b97e87a4fa73211b7b5976",
          824: "3fa0a4fb6fc655faba22efb03603f5aa",
          907: "29eff668bbfa22b0f266cf808023270d",
          1054: "86f6f40a6ea6ba111b36f2002a8833ae",
          1057: "a2e9f91d3c85630d8c75c1e42fa03082",
          1098: "ed8c50b0c37bc105dadc2552b671afe2",
          1242: "b1df92c13640c0e5e83cd209770f8cdd",
          1277: "38c7fda764891e08ff75bfae59e6164e",
          1673: "ffa25b7632e6ed4ae11513f36950ba53",
          1758: "f55d6eb2974d12ea87b32c2a6c953acd",
          1785: "984272b45edfb8f02f5ef991ad36ff0f",
          1822: "29c9dd5cd522897ac935ad134b4302e2",
          1840: "fd1f21837c18470765109286088b57d8",
          1868: "3978174c140510462aab5d170df38219",
          2156: "79de0eb7b031409447f526f3f141cc53",
          2169: "7934d2afd516c50c4a8fd38c1f4f470d",
          2171: "c579957a1d7d4ccafc11b28c825890b9",
          2221: "791a7733932e583f3bc148c8b481dfb0",
          2234: "fabc5bddf95e28ca202aa434be343aff",
          2243: "5ea481878f8fa5dcd5aac3c824726419",
          2293: "6652d7726b52796bb1f350bde58d6c29",
          2306: "c9c1782cfc5152adb31bb6c15f2ab7d9",
          2323: "3fc8fd44075a17e2db20d86b3ff51cde",
          2347: "a15993069141c4996f97a624de9ee1f1",
          2365: "31b3690b777dd1a147437eb19faf8c99",
          2368: "75542eb976f1982fd67b5197e80a477c",
          2398: "be9748400564016c33d52e70f2a5a444",
          2466: "7dedeef5bf52c5c8baa0fe381c1c9b79",
          2642: "3678c7db8962472c8abc7bf557254f1b",
          2678: "71460aa35bea10b12c707a8344c799fc",
          2864: "31f9783b63693ff8a60a6ef93b18619e",
          3034: "19c0515f94d3325deb6f19cd00184c01",
          3197: "3594ea7b93c68d232a88b33f8f93f535",
          3343: "7aab50dbebdfc0a3cf740d65ee700332",
          3370: "6431017b0efb903ca270d57a2762c925",
          3438: "1a5d96fb587023732cb1811154b7f7ff",
          3475: "9b3c0d60d87974f33130f5383bd78562",
          3486: "e850d0f71f464086a29999894a76085c",
          3697: "78807b0e537c9bfe7a3db35891a06795",
          3885: "8a7e67eed47140ee4af0709f183d0e47",
          3896: "b5e796be614b0dd33763ea0df4e8fd15",
          3941: "569802158fbec272e0d28c7a7f302dd8",
          4011: "c5b05fc04630f157ff1fde1fc2bd6104",
          4528: "f93b5dda90057512c7dff037a6d84f80",
          4550: "0566faee0f55f46ae819d5f1fa62c865",
          4578: "a1605f71d237660ba612e718e4449736",
          4621: "d13b66dcb31dd05faf8c43b1fb239c03",
          4700: "b4d14f089a653f747acc032915c04c2d",
          4710: "a1bde098f6487fb0aa139e7993aad8a0",
          4731: "c15557948068974913d73762789da0c2",
          4799: "393efc8d7d8e8e0ae9c79bbb455659e4",
          4851: "cb9af908e166f23994e9be83fedd9cd6",
          4861: "51ea859948b14ab29d853ed703ec5c15",
          4913: "51db50afc422859dc3620f6a2f72b568",
          5018: "3009019144a5546a219f62b831c4dfc3",
          5076: "cd61d9cdc6685e69f089e25b9bf54028",
          5117: "7506a2fa9cb12724fd5f027390e6dc99",
          5233: "c051b138ef8e5db114f2c2e4f0a2bac4",
          5259: "6bb7594f304beea6e1f06035f3971b14",
          5265: "955ccaf6f52d1e8cd92ce1552bf47072",
          5389: "90eabaaf00324df617632c6ef4925fc2",
          5415: "7d1c825cda02a8e83c45273107565f3c",
          5530: "d42debb207f65b1069d89f9cf1ddb568",
          5559: "f5805bd68643c83630a178f3eeeabf0b",
          5639: "a172a8a2291eb497574b5808d465810f",
          5663: "a63ed5296baca86b0bdb89e5eaa1268f",
          5742: "33f4f8224c280d07caf60e6ff0236439",
          5830: "b6e39b5f4494c53cbf5d6342198d7ee9",
          5832: "f70cd0493d13232a526a1d09016fbb60",
          5859: "83eaf6e96843897971c4d350e3b5df44",
          5912: "e3d91eb14221d4b278898b22e5d23b26",
          5997: "0035f609fd104e8fe3085fe360d7b95b",
          6019: "d8f51d405af65a30127aeaf15bad581b",
          6088: "0e73246a1cd17a8e5e55eb61e3233da5",
          6266: "5e9bb69a4078e604dacbd10ef0f71a8e",
          6267: "eec3e5a1eedf983a49185e8762bd3a2f",
          6280: "120737b8daa5a7d9caa6ffd0fffafba3",
          6285: "c2215a0acee751064b648e1afb141ecb",
          6321: "8cd7e4ad136e231ea39dd9c5d620807b",
          6327: "f5b476699d944c8efd55100d6c3fa84f",
          6361: "e33920edd32b48668722a3cb7725ebd2",
          6471: "4715a304e2320c0c1a1d90ee377d9ae9",
          6664: "0f24ff0310f16eb543fba50195602bfd",
          6879: "7b1d182cac201a3557dad81d7120d9bc",
          6891: "3d8d3608b0e2a42d4699c2e74148ec5d",
          6997: "73d625af5018197e57580107fb5b725c",
          7010: "7dc9ce27890281b1a5c37a3a99aa5cc0",
          7073: "59ea7de1c71bac4304fd53ab40b1d78d",
          7180: "6b014fa4fd3377b9aa7bcaf8de3dd2d1",
          7407: "0f4d4434db57ea239a4f3aee9298d1cf",
          7436: "435a5783c2bafabff42e50e9ad5f387b",
          7452: "ebdea5649e91a6b1533a4ae2de2823c8",
          7453: "f9939c06b7a89015a0bb93790786ff33",
          7465: "4070aee96163ed0f11f95ff5fd923d06",
          7970: "10c8ad3261700af391ba95d76af5332f",
          8068: "90f078a08a73f07979c06a85cd4f742d",
          8240: "efe44b8788b4fb32df3ab8e8a1832b3f",
          8272: "2e62b47703cd2fd1a9dd26478673c9b6",
          8325: "7796c1474ede14401cde1796f96cac69",
          8391: "7c70ba4fad5f1ceded1afc8760deb4bd",
          8431: "8ebe14a07c88279d300517c9d1612ff8",
          8437: "c2f19c46e2d9193353ff6d987a115e39",
          8659: "012cccf2124aef894ae84341216373f4",
          8665: "e24718d8af905b3261366a0068a69b24",
          8702: "fa6fe7447a1a8d85f8e8ea8cbd3c718c",
          8708: "0412eee80c5ae4ae22ee8eb41bc0d972",
          8755: "53109edb0b7d03438a5361828e2c4dfd",
          8845: "6866c033b11e7cc02b9638c232dee34f",
          8880: "710bb8b7cff2cca46dedabeeedf5c0a9",
          8938: "d1149ce8f9cb8af2c736769893c24b58",
          8970: "03e6e326367c833cd86f51dc13966ee1",
          9022: "13f20245c7575aff9552eb6277a75b0f",
          9028: "74abc003f5f62bae2c8b0ba6967e05df",
          9126: "fe53b0f443b622f4c583fcf26e78689f",
          9171: "ed7e2c47907b13f43edce6590a8f356f",
          9377: "a14c101a35d5eed2dfcd3ddccf9b5478",
          9587: "7d09c8b18d835acaf0fa1b35bc43f235",
          9615: "1de20097adb609e04698d241651dce1c",
          9741: "442e2beda52fdef19cf07a1300c27a76",
          9745: "47ee1823615f7e50f2e9a04af42382cd",
          9760: "6116fea392e7b13aea640a60d489a2b2",
          9936: "e1e05ecec054a3146db441aa4e2d325e",
          9987: "6a229eacae6bec8abc42bd664688d7f1",
          9990: "3f80901f502902c9f9b5084d1c2d1d21"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          38: "8ed26b85cf8a64ec4ab10f5e0c2fdcec",
          1057: "e11267b2b9a024fdab4347cb9ada8f14",
          1785: "bde1c4e0b23cbfd27b8e58c3e9b9719f",
          3438: "e11267b2b9a024fdab4347cb9ada8f14",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          8437: "ece3a695297467904302d480ff424957",
          8665: "cd135931d3ddd0c8c915bde00523e2a1",
          9171: "52e55b769351b6e3f1602fe5d2baacd1",
          9736: "81bb14ac88f3a651365e4427a5b9bac9",
          9745: "0fb3f966f5a1c6f60f762b9c9e8bcbda"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/sites-legacy:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var d, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + r) {
                  d = s;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", c + r), d.src = e), f[e] = [a];
            var l = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var t = f[e];
                if (delete f[e], d.parentNode && d.parentNode.removeChild(d), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), n && document.head.appendChild(d)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          38: [31879],
          392: [17523]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(d, e) && d[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, d, n, o) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return n(b, d, o);
                    var i = b.then(e => n(e, d), f);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                d = (e, a, f) => c(a.get, t[1], r, 0, o, f),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, t[2], 0, 0, (e, a, r) => e ? c(i.I, t[0], 0, e, d, r) : f(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var c = i.S[r],
                d = "@rockstargames/sites-legacy",
                n = (e, a, r, t) => {
                  var f = c[e] = c[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : d > n.from)) && (f[a] = {
                    get: r,
                    from: d,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(1788), i.e(2918), i.e(2440), i.e(1277), i.e(1785)]).then(() => () => i(21375))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(6266), i.e(2229), i.e(1788), i.e(2918), i.e(2440), i.e(9458), i.e(9736), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(2229), i.e(9623), i.e(5966), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5076), i.e(5117), i.e(2229), i.e(5966), i.e(1788), i.e(8429), i.e(2918), i.e(2323), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(5076), i.e(2293), i.e(7180), i.e(5997), i.e(2229), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(8702)]).then(() => () => i(58702))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("focus-trap-react", "10.3.1", () => Promise.all([i.e(1673), i.e(2229), i.e(7145)]).then(() => () => i(51673))), n("framer-motion", "10.18.0", () => Promise.all([i.e(1840), i.e(2229)]).then(() => () => i(91840))), n("framer-motion", "10.18.0", () => Promise.all([i.e(5559), i.e(2229)]).then(() => () => i(65559))), n("framer-motion", "7.10.3", () => Promise.all([i.e(5912), i.e(2229)]).then(() => () => i(75912))), n("graphql", "16.11.0", () => i.e(601).then(() => () => i(30601))), n("prop-types", "15.8.1", () => i.e(7465).then(() => () => i(97465))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(8429)]).then(() => () => i(15389))), n("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return o.push(a.then(f, e));
                  var c = f(a);
                  if (c && c.then) return o.push(c.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[r] = Promise.all(o).then(() => e[r] = 1) : e[r] = 1
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
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = (a, r) => {
              a = e(a), r = e(r);
              for (var t = 0;;) {
                if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                var f = a[t],
                  c = (typeof f)[0];
                if (t >= r.length) return "u" == c;
                var d = r[t],
                  n = (typeof d)[0];
                if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                if ("o" != c && "u" != c && f != d) return f < d;
                t++
              }
            },
            r = e => {
              var a = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var f = 1, c = 1; c < e.length; c++) f--, t += "u" == (typeof(n = e[c]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return t
              }
              var d = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                d.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? d.pop() + " " + d.pop() : r(n))
              }
              return o();

              function o() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  c = f < 0;
                c && (f = -f - 1);
                for (var d = 0, n = 1, o = !0;; n++, d++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (d >= r.length || "o" == (i = (typeof(b = r[d]))[0])) return !o || ("u" == s ? n > f && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != a[n]) return !1
                      } else {
                        if (c ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (d = 1; d < a.length; d++) {
                var h = a[d];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            f = (e, a) => e && i.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            d = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}),
            n = e => {
              throw new Error(e)
            },
            o = e => function(a, r, t, f, c) {
              var d = i.I(a);
              return d && d.then && !t ? d.then(e.bind(e, a, i.S[a], r, !1, f, c)) : e(a, i.S[a], r, t, f, c)
            },
            b = (e, a, r) => r ? r() : ((e, a) => n("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = o((e, o, i, s, l, u) => {
              if (!f(o, i)) return b(e, i, u);
              var h = ((e, r, f, c) => {
                var n = c ? d(e[r]) : e[r];
                return (r = Object.keys(n).reduce((e, r) => !t(f, r) || e && !a(e, r) ? e : r, 0)) && n[r]
              })(o, i, l, s);
              return h ? c(h) : u ? u() : void n(((e, a, t, f, c) => {
                var d = e[t];
                return "No satisfying version (" + r(f) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(d).map(e => e + " from " + d[e].from).join(", ")
              })(o, e, i, l, s))
            }),
            l = o((e, n, o, i, s, l) => {
              if (!f(n, o)) return b(e, o, l);
              var u, h = ((e, r, t) => {
                var f = t ? d(e[r]) : e[r];
                return Object.keys(f).reduce((e, r) => !e || !f[e].loaded && a(e, r) ? r : e, 0)
              })(n, o, i);
              return t(s, h) || (u = ((e, a, t, f) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + r(f) + ")")(n, o, h, s), "undefined" != typeof console && console.warn && console.warn(u)), c(n[o][h])
            }),
            u = {},
            h = {
              62229: () => s("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              9623: () => s("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              95966: () => s("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(2293), i.e(7180), i.e(5997), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(6321)]).then(() => () => i(58702))),
              81788: () => s("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              18429: () => l("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              2918: () => s("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(9623), i.e(5966), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              16565: () => s("default", "graphql", !1, [1, 16, 9, 0], () => i.e(601).then(() => () => i(30601))),
              92440: () => s("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(5117), i.e(5966), i.e(8429), i.e(2323), i.e(3438)]).then(() => () => i(99747))),
              4572: () => s("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              90660: () => s("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(5912).then(() => () => i(75912))),
              61128: () => s("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              61913: () => s("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              57145: () => s("default", "prop-types", !1, [1, 15, 8, 1], () => i.e(7465).then(() => () => i(97465))),
              2765: () => s("default", "focus-trap-react", !1, [1, 10, 2, 3], () => i.e(1673).then(() => () => i(51673))),
              82849: () => s("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(5559).then(() => () => i(65559))),
              84590: () => s("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], () => i.e(8665).then(() => () => i(21375))),
              87330: () => s("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], () => Promise.all([i.e(9736), i.e(9987)]).then(() => () => i(32368))),
              87052: () => s("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(1840).then(() => () => i(91840)))
            },
            p = {
              38: [2765, 82849, 84590, 87330],
              1277: [4572, 90660],
              1788: [81788],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              5966: [95966],
              6565: [16565],
              7145: [57145],
              8429: [18429],
              9458: [61128, 61913],
              9623: [9623],
              9736: [87052]
            },
            m = {};
          i.f.consumes = (e, a) => {
            i.o(p, e) && p[e].forEach(e => {
              if (i.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var r = a => {
                  u[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                m[e] = !0;
                var t = a => {
                  delete u[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = h[e]();
                  f.then ? a.push(u[e] = f.then(r).catch(t)) : r(f)
                } catch (e) {
                  t(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                38: 1,
                1057: 1,
                1785: 1,
                3438: 1,
                6019: 1,
                8437: 1,
                8665: 1,
                9171: 1,
                9736: 1,
                9745: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  f = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var f = (d = r[t]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === a)) return d
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var d;
                      if ((f = (d = c[t]).getAttribute("data-href")) === e || f === a) return d
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var d = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = d, o.request = n, c.parentNode && c.parentNode.removeChild(c), f(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
            8106: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2(229|440|918)|9(458|623|736)|1788|5966|6565|7145|8429)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var c = i.p + i.u(a),
                d = new Error;
              i.l(c, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", d.name = "ChunkLoadError", d.type = f, d.request = c, t[1](d)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, [c, d, n] = r,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in d) i.o(d, t) && (i.m[t] = d[t]);
                n && n(i)
              }
              for (a && a(r); o < c.length; o++) f = c[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
});