try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5f4a7749-84bb-4dfa-a7a0-8b736f879ba6", e._sentryDebugIdIdentifier = "sentry-dbid-5f4a7749-84bb-4dfa-a7a0-8b736f879ba6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, d, f, c, n, o = {
            17411: (e, a, t) => {
              const r = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, t) => {
              (0, t(17411).w)(1)
            },
            58639: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(4668), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(8619), t.e(7145), t.e(275), t.e(8437)]).then((() => () => t(58437))),
                  "./index": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(4668), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(8619), t.e(7145), t.e(275), t.e(9741)]).then((() => () => t(19741))),
                  "./site-routes/Bully": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(4668), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(8619), t.e(7145), t.e(275), t.e(392), t.e(6019)]).then((() => () => t(86019))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(4668), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(8619), t.e(7145), t.e(275), t.e(392), t.e(9171)]).then((() => () => t(99171))),
                  "./tina": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(4668), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(8619), t.e(7145), t.e(275), t.e(392)]).then((() => () => t(392)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            },
            77027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            93032: (e, a, t) => {
              t(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          68: "1fb59290e0d98161eb09b62ea70c0e22",
          131: "b0d0520628fd57dfef5ce2769135054f",
          173: "19dbed6c1f8df9900353a4592fc8a872",
          275: "6b46ad85db400b4396651d31daa2ddf1",
          278: "e110a7b14ad14111d5c65ef170d58be6",
          299: "fba149a3c0bc5570b776b2446d01277c",
          314: "37c6bf1dedefc8f7734ee151cf608453",
          392: "8b024071eebb5c646428cb4059d4f440",
          439: "c97fb3939930f04ab69b75e4f0eac169",
          601: "4e9d7a73dc9c90ab5d870b80ade8235d",
          662: "fb26f8d9cae5b52c579f08adfe5ead02",
          824: "4ffe033c1ee5cce2341771e2ae53154a",
          907: "36c5a34cf75fff662b6910d7d0427126",
          1054: "3f6a899a8d6895aa074ae4ac790eb026",
          1057: "931954750138c74eb2e84c54e963d438",
          1098: "fa6b7bbf589ab2e2245f326151d2267d",
          1242: "f802cc7623a72db627e9c7981126242e",
          1277: "f2dfffc8a5116ddfa99bfcac2127b481",
          1673: "cc6f81d48b9ef3bf15b3b41f47a58f28",
          1758: "1de7b0ae4ca81fb5771256912b78b147",
          1785: "f48884f138add19e45cf3736799d1a56",
          1822: "5a7b544048ccfa740e29aa38b8d234a3",
          1840: "8db635983dc497eeef658cd2cc820811",
          1868: "0e9cf056fe8275f74d031c80f148d228",
          1932: "cdc1f5f536d97025c56eb1e0cdb0c636",
          2148: "28779d8711f03b8f2a1256c0548e2460",
          2156: "9226e229585697fd05e9aac3cd2bbded",
          2171: "3bfde8049c25fbf45ddd1369e155bde1",
          2221: "6c8b7d520148eef76c171e1857567684",
          2234: "e29ace0340ffdc686f7de3c3c0e276f1",
          2243: "ae32bbb76fc73750677b956755df1e24",
          2293: "8acf99c4ba44d8a9e9c6dfb3e35def43",
          2306: "1748a587e573cc9c4c77f68b06a89e5c",
          2323: "3f9e7d357ff1cd612c68a6057c942310",
          2347: "7c6025c90fade7fb8ba213083db6a4a4",
          2365: "43402487fc1edd9f57da48493c7bda8e",
          2368: "a15c54180ca41226226b724ab588bdda",
          2398: "5c1360f065228070f9f3d0c412e3ebd0",
          2466: "a8c92edb13c67ff4c2f38c9724a59b54",
          2642: "038e05a01d1a8780ada3214d5c7b6c36",
          2678: "0e1ce514b1d356fdc7e532a4c293f796",
          2864: "0a999f2ad1d967cacb9591dec9b82fef",
          3034: "4382a882597fddfeb17adc0db97f9ef7",
          3197: "8393a1bd9db87fd5fa2cbeb9bc692875",
          3343: "4affd04d2b683c6a451d1f710cfe7d6e",
          3370: "1fda1a50acdc98000f2e208a977d75a4",
          3421: "9a24e23608432ac02759acd057896b12",
          3438: "6c0ac7a3ff719d9e29e5a49d76f95967",
          3475: "eb3e769004c89bdf2a3101b385f1e39c",
          3486: "1e21b0cb04569edb8968b8dc57947899",
          3689: "49f3897918e1e811888ba0880d781933",
          3697: "b93bf254d719943f0c01a9b87c5cf2f9",
          3885: "56e2fb19a1a8f2d40201038c46b13360",
          3896: "3c00e345de29736d2125237a444294a9",
          3941: "4dd5f7d4995e6bf51907eea30223c8b0",
          4011: "612fb1e8e7e2e74e9bf3775d02889cf5",
          4528: "f759687076874e8be184306833a0a7e5",
          4578: "baaa1d1a5e420347a892a4aa73467174",
          4621: "799233f4d6fccaafad130d3b78fa03a5",
          4668: "e627a1472483bc18ab409a9aea1a7df4",
          4700: "9a76c57c7cbc71c93be9f455bac19e9d",
          4710: "7cd62d33094193db4d987c54bd794cb0",
          4731: "1b62ca1b8a6d71a6389c9b75c2d83a7c",
          4799: "67fca8dc6d6bc174d7aeb4bdb5958041",
          4851: "155ed7c263311886a14f9ff84e821029",
          4861: "c6bffea0ff7ff20d181c9a764507fa74",
          4913: "fedd59e2da86a655c16b857fc5d9cacb",
          5018: "923f55e3d0dc8e448a15ee343b2945cf",
          5076: "e2118cdbc16a349ea422b7f57b5a4e01",
          5117: "c7c39cb3599ed2e03acd5946ebc974a3",
          5233: "fca4c632a6888283a9601877cb708996",
          5259: "fffbd426ad394a956a380d5ef309d4b1",
          5265: "1ecfea813f0c2a473cb2143c3e340737",
          5389: "f4102dfc67c39063ed8eac239e180426",
          5415: "1cd96d41e753f7a867baa932c7f99d6b",
          5530: "dea5d95dfea529499f6f3273b4a2bd1d",
          5559: "4e1cef1a0c859fde34d847032dc5fbd7",
          5639: "b45430f30d9e5d20a8edd0b94a0bf6d6",
          5663: "f87454fb82cc6b68f9e77b2873f2cc8f",
          5742: "f44bc786a3ec92412902e87580280a13",
          5802: "8ec586a8c07e1ec05235fbd253178b48",
          5830: "b5e5c2ebcded5ca171ef679f98cd0c64",
          5832: "6c5063428c7918d7ff68f1108b56cafc",
          5859: "102da0af39de58008c65dc6024d31f2a",
          5912: "20a0c48a13127368f6c4fef9fb60699c",
          5997: "0ef67535d7d422fdb5330d3d3a06bc4d",
          6019: "8d635b25023a04bc756b1b2e9d6b3502",
          6070: "548b832a8d86123caa72099efb23bf85",
          6267: "5a8fcb0923bb685b760fe6e9bbe06ba6",
          6280: "5fdfc7fd364d99bb5e824fcd64687de0",
          6285: "014cc556e9967cd88cae354cdd3dd32c",
          6321: "319d4b53256fa1a3a674b7ceaf207967",
          6327: "26e8a7be079857fa7e4934fd48b14c2d",
          6361: "1d8c8c9011108bec4512b32d3979cc58",
          6471: "ab14ea60028b7a11fa502921910ce5ba",
          6664: "5f28420921248b376ac4a91c7ae3bb5c",
          6703: "dd244f168c625b31cea56bbe37582034",
          6879: "32a27341f17bb4818c95ec4d52d9e9a5",
          6891: "89a2993b474b6470cd6a4ec06c667c40",
          6997: "890389063775984133b071a20e15fc88",
          7010: "4790ade42c38483ab9926ec9f926b883",
          7073: "6ebde1803941e2ccf6763d29cee40f9b",
          7407: "9a91913f79f7d743e565e5ee6a632223",
          7436: "48655f4a7174a33d83906a791b2ac17e",
          7452: "7642a60f9014d1845cde9edd59fbfae5",
          7453: "cfede7234ac3cee17aa2e18504744692",
          7465: "c0b17ddea805c3415912038174d0be90",
          7970: "41735cd3666196c43ab36ce980d1b1c5",
          8068: "c135440b8f3249907949a90e37e58000",
          8240: "b1ff920fe7206922746b4deb6dca6d3d",
          8272: "ec1fb1ffb872e0c1552233c1f7d94f18",
          8325: "319f5884a18fa3020aa2ee1c41015d24",
          8391: "cddae284e77ac3d2feb69a353e2c67c3",
          8431: "f2b237ed472dbc21b8007e47e4672c7a",
          8437: "9a64e74bdd027e14582dc8fcd6f5ad29",
          8659: "e45cc2608f1c8eea279bdd21a99bcc44",
          8665: "541472193447569e7efe69f1b858a725",
          8702: "33df995f6dbf497262edb4f90b34ea1c",
          8708: "df1576d3567045dabbf92f4698e1af59",
          8755: "5101de3ced96646accc3acff854494e1",
          8845: "550fbe5a5567b4a25cc5d13061024d22",
          8880: "472e92b2d9fe901d1c0bc2d6ffeadec0",
          8938: "dbf45ebb17cb5fa7aea077a3f7872069",
          8970: "bea90bdb609c2a4aa6a3c8b5b3b4eb96",
          9022: "017924e574b74091a858fdf350304fc1",
          9028: "31dbbbc9cb9633be08d8c8b261015382",
          9126: "4d90c8f3e08434b0880302040bb26491",
          9171: "9207582fe4b2fb3bd6e8c7f5e96eedc5",
          9377: "c60f82d2f27b1f7e5ac83dc66e255340",
          9587: "5813bb6afb370abde6ac940251dda8f2",
          9615: "ad8811559e09c7a6eff34324155c8e8d",
          9741: "7b562674a1f40d52f1104bb6164cdfa5",
          9760: "acbe2461a81bae8dfaa445ae694b1899",
          9936: "c1edb5d4cdf3ebbf3a712ffded7252c1",
          9987: "6d0447ded841560b2058d9c1c0eeb1eb",
          9990: "8b9394c2aa96b106f8a492995cb88adb"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          275: "907b04215b44b81369cca44bc53fabb7",
          1057: "82b8e41eb90eae7db3adfb9fff54d045",
          1785: "e70ba27106c58a2902fdf3deb822d60f",
          3438: "82b8e41eb90eae7db3adfb9fff54d045",
          4668: "33a56c799a351a4396c68bec4fbc3b0b",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          8437: "abb4435dfd0de0b51cff7620fe1b72ab",
          8665: "62cb6bfb390050db6a71d81fb427a37d",
          9171: "52e55b769351b6e3f1602fe5d2baacd1",
          9736: "8591dc87aae69356ef4710fc935c5ecf"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-legacy:", i.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + t) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + t), c.src = e), d[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          275: [31879],
          392: [17523]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, c, n, o) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), d);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, r[2], 0, 0, ((e, a, t) => e ? f(i.I, r[0], 0, e, c, t) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var f = i.S[t],
                c = "@rockstargames/sites-legacy",
                n = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then((() => () => i(12841))))), n("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(1788), i.e(2918), i.e(2440), i.e(1277), i.e(1785)]).then((() => () => i(21375))))), n("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(1932), i.e(2229), i.e(1788), i.e(2918), i.e(2440), i.e(8619), i.e(9736), i.e(2368)]).then((() => () => i(32368))))), n("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(2229), i.e(9623), i.e(5966), i.e(2148), i.e(6070)]).then((() => () => i(76070))))), n("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(5076), i.e(5117), i.e(2229), i.e(5966), i.e(1788), i.e(4853), i.e(2918), i.e(2323), i.e(1057)]).then((() => () => i(99747))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(5076), i.e(2293), i.e(6703), i.e(5997), i.e(2229), i.e(9623), i.e(1788), i.e(2148), i.e(6565), i.e(8702)]).then((() => () => i(58702))))), n("clsx", "2.1.1", (() => i.e(439).then((() => () => i(10439))))), n("focus-trap-react", "10.3.1", (() => Promise.all([i.e(1673), i.e(2229), i.e(7145)]).then((() => () => i(51673))))), n("framer-motion", "10.18.0", (() => Promise.all([i.e(1840), i.e(2229)]).then((() => () => i(91840))))), n("framer-motion", "10.18.0", (() => Promise.all([i.e(5559), i.e(2229)]).then((() => () => i(65559))))), n("framer-motion", "7.10.3", (() => Promise.all([i.e(5912), i.e(2229)]).then((() => () => i(75912))))), n("graphql", "16.11.0", (() => i.e(601).then((() => () => i(30601))))), n("prop-types", "15.8.1", (() => i.e(7465).then((() => () => i(97465))))), n("react-dom", "18.3.1", (() => Promise.all([i.e(1098), i.e(2229)]).then((() => () => i(71098))))), n("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(3421)]).then((() => () => i(83421))))), n("react-intersection-observer", "9.16.0", (() => Promise.all([i.e(2229), i.e(6327)]).then((() => () => i(76327))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then((() => () => i(15389))))), n("react", "18.2.0", (() => i.e(8659).then((() => () => i(68659))))), n("react", "18.3.1", (() => i.e(8431).then((() => () => i(48431))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return o.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return o.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return r
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var n = e[f];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (f ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != f) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, d, f) => {
              var c = f ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce(((a, r) => !t(d, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    f = (typeof d)[0];
                  if (r >= t.length) return "u" == f;
                  var c = t[r],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  r++
                }
              })(a, r) ? a : r), 0)) && c[r]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, t, r, d, f) {
              var c = i.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, i.S[a], t, !1, d, f)) : e(a, i.S[a], t, r, d, f)
            })(((e, t, f, c, n, o) => {
              if (!((e, a) => e && i.o(e, a))(t, f)) return ((e, a, t) => t ? t() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var b, s = r(t, f, n, c);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void d(((e, t, r, d, f) => {
                var c = e[r];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(t, e, f, n, c))
            })),
            c = {},
            n = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(8431).then((() => () => i(48431))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(5389), i.e(4853)]).then((() => () => i(15389))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(2293), i.e(6703), i.e(5997), i.e(9623), i.e(1788), i.e(2148), i.e(6565), i.e(6321)]).then((() => () => i(58702))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(9587), i.e(5859)]).then((() => () => i(12841))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(1098).then((() => () => i(71098))))),
              2918: () => f("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(9623), i.e(5966), i.e(2148), i.e(3689)]).then((() => () => i(76070))))),
              16565: () => f("default", "graphql", !1, [1, 16, 9, 0], (() => i.e(601).then((() => () => i(30601))))),
              92440: () => f("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(5117), i.e(5966), i.e(4853), i.e(2323), i.e(3438)]).then((() => () => i(99747))))),
              4572: () => f("default", "clsx", !1, [1, 2, 1, 1], (() => i.e(439).then((() => () => i(10439))))),
              90660: () => f("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(5912).then((() => () => i(75912))))),
              55799: () => f("default", "react-intersection-observer", !1, [1, 9, 10, 3], (() => i.e(8708).then((() => () => i(76327))))),
              61913: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(8659).then((() => () => i(68659))))),
              57145: () => f("default", "prop-types", !1, [1, 15, 8, 1], (() => i.e(7465).then((() => () => i(97465))))),
              2765: () => f("default", "focus-trap-react", !1, [1, 10, 2, 3], (() => i.e(1673).then((() => () => i(51673))))),
              50430: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(5802).then((() => () => i(83421))))),
              82849: () => f("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(5559).then((() => () => i(65559))))),
              84590: () => f("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], (() => i.e(8665).then((() => () => i(21375))))),
              87330: () => f("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], (() => Promise.all([i.e(9736), i.e(9987)]).then((() => () => i(32368))))),
              87052: () => f("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(1840).then((() => () => i(91840)))))
            },
            o = {
              275: [2765, 50430, 82849, 84590, 87330],
              1277: [4572, 90660],
              1788: [81788],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4853: [44853],
              5966: [95966],
              6565: [16565],
              7145: [57145],
              8619: [55799, 61913],
              9623: [9623],
              9736: [87052]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var t = a => {
                  c[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete c[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(c[e] = d.then(t).catch(r)) : t(d)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                275: 1,
                1057: 1,
                1785: 1,
                3438: 1,
                4668: 1,
                6019: 1,
                8437: 1,
                8665: 1,
                9171: 1,
                9736: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = i.miniCssF(e),
                  d = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((d = (c = f[r]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(2(229|440|918)|1788|4853|5966|6565|7145|8619|9623|9736)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, c, n] = t,
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                n && n(i)
              }
              for (a && a(t); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
}));