try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f4026e64-90c3-4b20-9c7d-69d592ec20a3", e._sentryDebugIdIdentifier = "sentry-dbid-f4026e64-90c3-4b20-9c7d-69d592ec20a3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
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
        var e, d, c, f, n, o, b = {
            9944: (e, a, r) => {
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
            21998: (e, a, r) => {
              (0, r(82788).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            29441: e => {
              "use strict";
              e.exports = r
            },
            37389: (e, a, r) => {
              r(21998)
            },
            55974: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(3972), r.e(8003), r.e(8597), r.e(7330), r.e(2209), r.e(4394), r.e(8233), r.e(916), r.e(3012), r.e(7287), r.e(2229), r.e(4853), r.e(6188), r.e(8161), r.e(5966), r.e(1788), r.e(3727), r.e(9379), r.e(1913), r.e(8934), r.e(2440), r.e(287), r.e(8187), r.e(7910), r.e(3258)]).then((() => () => r(53150))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(2209), r.e(6018), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(3727), r.e(9379), r.e(8934), r.e(287), r.e(2793)]).then((() => () => r(82793))),
                  "./types": () => Promise.all([r.e(3972), r.e(8003), r.e(8597), r.e(7330), r.e(2209), r.e(4394), r.e(8233), r.e(916), r.e(3012), r.e(7287), r.e(2229), r.e(4853), r.e(6188), r.e(8161), r.e(5966), r.e(1788), r.e(3727), r.e(9379), r.e(1913), r.e(8934), r.e(2440), r.e(287), r.e(8187), r.e(7910), r.e(3258)]).then((() => () => r(51219)))
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
            82788: (e, a, r) => {
              const t = r(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
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
            "object" == typeof f && !~e.indexOf(f); f = d(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(t, c), t
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          114: "02f73122d23c916fd7114ece4f7425c3",
          131: "3044dc76112629ce81762c378ee1e94b",
          278: "6c68ef99ed27892a48064e39b47c75f6",
          287: "2c20f3e8bf6a67b5e515c91693b2ee7e",
          299: "24de9078010e7e2127f0eb7f02a14ecd",
          314: "62d1c43d7c9cabe6ef8f44dc832f2bb8",
          340: "cba0c98facf2748a8a042e3220f6e209",
          377: "ebcb9c33ddfff427b41fb74330ce38c4",
          614: "359f005d60181ca135b7592596555b31",
          662: "5ffc47235f1833a7adf46ed895ec6320",
          824: "d6b7427cec281b16e24fbfaabdc185c0",
          888: "db1a5adcac23682f09990937772b9756",
          907: "c1cfadcc6dce9b08350267ca02fdb79b",
          916: "94344de32071ed8bc3695d0c97c209f2",
          954: "7a189bd10d5bd730aaf19e30744654b1",
          969: "8a9cf2a3c0411adfe79605c9b4e7fc31",
          1054: "46150de9eb2eae34849b5a06c600c05f",
          1138: "866dbd1a3668fef377d78dc40d6ff0c1",
          1154: "fbfe023fe687d3d14bfaee1f1458aa2a",
          1242: "e4cf27d0a8bbfb1dc2c9632c1433bd16",
          1607: "b9ed342c6bf3a37343a47663042bee03",
          1822: "3ec1f290e9bb08c379922b087180a93f",
          1868: "f0b3200bb3b54ac433c2ca61fd949858",
          2156: "6c111c41e1edc5403ccf2fd0f0ff760f",
          2171: "1d28429b2a6c6e08f40d05d17de6d17b",
          2209: "6453fc85b27fadd9ba882781c32f3fd7",
          2221: "2d7367d862a7935cc2dc8a4751e7ac93",
          2243: "d2a9417efacf3947f09b2b008f61dd96",
          2315: "8a7946ba55e533ca71fd01b65e65f1bf",
          2347: "36a6815f49128bb2891dcdd9d9bb9528",
          2365: "9948ca07690d98b6fb64782360f5c268",
          2398: "b34110f3384650cc4f9748f59aa09029",
          2466: "1bdce5fd998183f83e9f24be22e0484d",
          2642: "12444560f1d8384196ec5628dccd101c",
          2678: "d2e0b71c9eb0095f0bcc7b7c156ca3af",
          2793: "65640db3ff177d43c3acd18a8b69538d",
          2864: "c6c6eb6539d1e5c20f5f7cbdd1749241",
          2941: "5a215701366105da7fc879f0d10b6edf",
          3012: "87685e9fdb0cf8e1392f1e1175bd241e",
          3034: "9efb33c4fd75177f0573b2dbcdb80510",
          3197: "f89bcff1f9d610496a263e5153409556",
          3201: "dc41f66f3c4f3a29963ce8f7e3250d7e",
          3258: "4c1afd6457fef716f12875e67e829411",
          3343: "8051252f34fab2bcd0491117efb0cfc7",
          3370: "91386c1fad8afb532efc09037dbaeb5d",
          3475: "9fa045d25e6437371a91732734ee4cc9",
          3486: "ef62556532a4cd7a3280717b449ca3b9",
          3622: "f11baf3b96dcb5ac83af3fc796cfa0b9",
          3697: "6673331bb2f6f00e3d3cbbad7c90815b",
          3727: "0b1f84682e2764dd52c38499a2efb0c6",
          3885: "80d7c68be017cd49ce44027388c8f5bb",
          3941: "399373a85f57545ac886bbce1ae5894e",
          3972: "cfe331f4b800012dd28e9d8809f7b605",
          3996: "0c91d10e09c66f6518d80a68457e2f3b",
          4011: "ab1190cc6404050fd010823e0f672492",
          4186: "1878c6ad0a069f8c029858187716048d",
          4220: "f043117ea3fee14c3b5a28a90ad79fb5",
          4394: "2c44f4000bf2d9c2c3fed6ea0384e6c1",
          4528: "9125fc1550fdef0914cb49dc1db64f35",
          4621: "2e9b44987a7503121f6a9eafc935c387",
          4700: "6a43a8a3c90a29a70d081f3ad5242b3a",
          4710: "51bb99d619ae0596986798b266dbf202",
          4731: "039f3da08c843758c68c897f55701305",
          4799: "89328bfb29976190b1870bdfb0b85ecf",
          4851: "9993338e959ffaac730e3b71440e32ae",
          4861: "d5f34558392a2f4900c1dc0a7307a488",
          4913: "9de281f02f2dbdb58958b68307f8500b",
          5018: "a7eb638f1c0335ff77f3f42c04fb39c4",
          5174: "0078a0193a51486efb2c09851f0c7d1b",
          5233: "4a049961ea556737a2889a332a23a5e8",
          5247: "586328c050eed23b80e07d0199a56b93",
          5259: "722dfda8fac27900d5b7878b25131d99",
          5530: "2e194c678efc120c6faa8c218e781bab",
          5639: "f4dd3e07355cf0ebfbc857ce0975930d",
          5663: "217a24fc5d2777fbcce4c954797601f6",
          5742: "65cbac377c875f67b9b9168e2ef4e99f",
          5830: "852749ea836247967bce5ecc8ff7bdee",
          5832: "0983d69d9985ff618868206ead685039",
          6018: "9dce4de08a68c90a0a8cb8f323787975",
          6019: "90877fa9d47982140a3ec05f6e1eb47d",
          6267: "376d4d873d6adc909aa078612d06a8c1",
          6280: "34e109558068c32b0f9ce60821fea214",
          6285: "c2208b96baaf6785b3710cc6f112fdb5",
          6361: "6c84605aa18e02e4ed3226833f7e0c7e",
          6489: "b35b35a88d6d9c7ac6df268fa0998b32",
          6618: "5c7497a809e556466af77a0588909dd0",
          6664: "f5fe0e1bc4fa035a07416bc543cceb35",
          6879: "952af639be1b970f5cfb69276904c630",
          6891: "be56aa7fb824dc3e1af2f17c645270ec",
          6913: "0433e88adbfdaad7eae480120a3deea5",
          6938: "f7af30b08bc613fe455ab1ad0808c088",
          6940: "42350cc8369834286e1a787b9872ca34",
          6997: "caffc92d94f6261a5693fc1f90e29f5b",
          7010: "1753304c13958ed7eae2efe35570d4b1",
          7039: "05c9555c83c8437d63ceb3420a2358d5",
          7073: "5ab237ed958036ce1507e56eb4c78acc",
          7287: "090105dedd71bc2e1227c6b862240522",
          7330: "975d83a90bc23d5921e847b11ba71f5d",
          7436: "836a4cd6ae6cccfd2079c0133f38701b",
          7452: "b7a323bf20400541420f7227b078950c",
          7453: "0e92d516f314d78c13aefd043ee2dfd1",
          7547: "585f81331a74ced968b3c16819b554ef",
          7970: "82c35cb03a6884ba0faa42b3b4388b88",
          8003: "e9c7ed087a8547151e655565800ed157",
          8161: "b122be62eba32f84c5226b9d221d4ebe",
          8187: "956e7daf9cc542ea980d370d3910ece0",
          8233: "ed97e89d54f09810e6319726dcb3f01b",
          8272: "1858dcedf6a823dae264d50b9eec7c44",
          8391: "c73ad01fdf97496ce636bbb4dc95df19",
          8597: "9a9ebc6de073e5d9db6700946b433db8",
          8755: "ae0adf554775eacf9ba70f8c3f6cf1a5",
          8773: "e5e3b77b4f24cb3f5be99f9f275a54d7",
          8870: "c026d074c573777b75292f359f2bdcd6",
          8880: "df5dd4cc108bab3510b17839feb7edee",
          8970: "28df0bd483ac7cd68e004027b94ef54f",
          9022: "a56e3195bb01148bc8bd6f222d2ef808",
          9028: "91107ba4957ff9507c0fadf9f0efba6d",
          9126: "ae30bf828d6438c2d3819aec0e8d8734",
          9368: "b4141c0f6dc87fc1de948edb3036ca9d",
          9377: "b446a8a8ba0df87a0555cd86a6f9d946",
          9474: "a3abd98287debbda94c6551fb5f8714f",
          9489: "64dea3b38cb034ec35a4a8dac28fe1bd",
          9615: "719545fde923bef54c1b41f201f10acd",
          9642: "b0f688c81a129ecf91f12d3108eda033",
          9705: "b8990a544d1c8cabeaf5d3ad5f1d835f",
          9728: "ab713db7c2d291ce412e0ff2bfa3ab48",
          9928: "1744c1f753e22bb673a9d06f8df8cab9",
          9936: "06e94e85917f81d322b22cbceca751d8",
          9990: "b352cb699d1685b0b9b64fc5623d7fe4"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          287: "e79a4105235290f9d2d864ea28c87921",
          3012: "bbc3aa4f4a5918e71769d52dc4e1ae69",
          3258: "93300c24320d8e14c200528c99656b89",
          4221: "384cddac2173849afd90c4a73e287f5e",
          5174: "3c6fae78d6e30d8aa17204dace392cf5",
          5850: "ac6c3d25628c6900ccf6742b6efb74bd",
          6938: "384cddac2173849afd90c4a73e287f5e",
          7287: "7d08ead9dd48419a2cb3d5906a426e37",
          7547: "214e2f94528af5f726d2150d0a4f2215",
          7910: "ea6994b8bffa7799c2b673f690549eda",
          8187: "f1212f2a94dd200b41d61bd732f9b140",
          8934: "3a4070d4c77506d8955255a1ccc7b2a6",
          9379: "9997228c3a403f7217e4c92e428d0359",
          9457: "2a25aaf73f30fa3834bdcc0018f08819",
          9705: "32b480e5b467a8e833ad0b3b7a3c2b7d",
          9928: "214e2f94528af5f726d2150d0a4f2215"
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
            var d, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  d = s;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", f + r), d.src = e), c[e] = [a];
            var l = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var t = c[e];
                if (delete c[e], d.parentNode && d.parentNode.removeChild(d), t && t.forEach((e => e(r))), a) return a(r)
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
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          287: [64064],
          2793: [11438, 17523, 44019, 83166],
          8934: [31879]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = o[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, n, o) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return n(b, f, o);
                    var s = b.then((e => n(e, f)), d);
                    if (!o) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, a, d) => c(a.get, t[1], r, 0, n, d),
                n = a => {
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
                n = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : f > n.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                o = e => {
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
              return "default" === r && (n("@foundry/react", "4.1.5", (() => Promise.all([i.e(3972), i.e(8233), i.e(5174), i.e(3012), i.e(2229), i.e(4853), i.e(6913)]).then((() => () => i(15174))))), n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2315), i.e(2229), i.e(1154)]).then((() => () => i(67439))))), n("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([i.e(8597), i.e(4394), i.e(2229), i.e(5966), i.e(9379), i.e(1913), i.e(9457), i.e(8870)]).then((() => () => i(8870))))), n("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([i.e(3972), i.e(8003), i.e(8597), i.e(7330), i.e(4394), i.e(8233), i.e(916), i.e(2229), i.e(4853), i.e(6188), i.e(8161), i.e(5966), i.e(1788), i.e(1913), i.e(2440), i.e(9705), i.e(8187), i.e(5850)]).then((() => () => i(13317))))), n("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([i.e(8597), i.e(2229), i.e(5966), i.e(9379), i.e(1913), i.e(8934), i.e(2440), i.e(7910), i.e(9928)]).then((() => () => i(59928))))), n("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(3972), i.e(8003), i.e(7330), i.e(2209), i.e(2229), i.e(4853), i.e(6188), i.e(8161), i.e(5966), i.e(1788), i.e(3727), i.e(6618), i.e(6938)]).then((() => () => i(66618))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(3972), i.e(8003), i.e(2229), i.e(6188), i.e(8161), i.e(954)]).then((() => () => i(50101))))), n("dompurify", "2.5.8", (() => i.e(340).then((() => () => i(30340))))), n("lodash", "4.17.21", (() => i.e(9489).then((() => () => i(99489))))), n("react-dom", "18.3.1", (() => Promise.all([i.e(6019), i.e(2229)]).then((() => () => i(66019))))), n("react-jsx-parser", "2.4.0", (() => Promise.all([i.e(3996), i.e(2229)]).then((() => () => i(53996))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(9728), i.e(2229), i.e(4853)]).then((() => () => i(49728))))), n("react", "18.2.0", (() => i.e(614).then((() => () => i(20614))))), n("react", "18.3.1", (() => i.e(1138).then((() => () => i(11138))))), n("text-balancer", "1.0.5", (() => i.e(3201).then((() => () => i(23201))))), o(25136), o(29441)), b.length ? e[r] = Promise.all(b).then((() => e[r] = 1)) : e[r] = 1
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
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(n = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                f.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? f.pop() + " " + f.pop() : a(n))
              }
              return o();

              function o() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, s, i = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= t.length || "o" == (s = (typeof(b = t[f]))[0])) return !o || ("u" == i ? n > d && !c : "" == i != c);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (c ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || s < i != c) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var p = a[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? r(p, t) : !u())
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
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
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
            })(((e, r, c, f, n, o) => {
              if (!((e, a) => e && i.o(e, a))(r, c)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, o);
              var b, s = t(r, c, n, f);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void d(((e, r, t, d, c) => {
                var f = e[t];
                return "No satisfying version (" + a(d) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(r, e, c, n, f))
            })),
            f = {},
            n = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(1138).then((() => () => i(11138))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(6019).then((() => () => i(66019))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(9489).then((() => () => i(99489))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(9728), i.e(4853)]).then((() => () => i(49728))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(3972), i.e(8003), i.e(6188), i.e(8161)]).then((() => () => i(50101))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(2315), i.e(8773)]).then((() => () => i(67439))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(614).then((() => () => i(20614))))),
              2973: () => c("default", "dompurify", !1, [1, 2, 4, 1], (() => i.e(340).then((() => () => i(30340))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(3972), i.e(8003), i.e(7330), i.e(2209), i.e(4853), i.e(6188), i.e(8161), i.e(1788), i.e(3727), i.e(6618), i.e(4221)]).then((() => () => i(66618))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], (() => i.e(7547).then((() => () => i(59928))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], (() => i.e(9705).then((() => () => i(13317))))),
              42602: () => c("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], (() => Promise.all([i.e(9457), i.e(6489)]).then((() => () => i(8870))))),
              57770: () => c("default", "react-jsx-parser", !1, [1, 2, 2, 2], (() => i.e(3996).then((() => () => i(53996))))),
              61898: () => c("default", "@foundry/react", !1, [1, 4, 1, 5], (() => i.e(5174).then((() => () => i(15174))))),
              97384: () => c("default", "text-balancer", !1, [1, 1, 0, 5], (() => i.e(3201).then((() => () => i(23201)))))
            },
            o = {
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              3258: [15310, 20206, 42602, 57770, 61898, 97384],
              4853: [44853],
              5966: [95966],
              6188: [16188],
              8161: [9623],
              8934: [2973]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
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
                  var d = n[e]();
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
                287: 1,
                3012: 1,
                3258: 1,
                4221: 1,
                5174: 1,
                5850: 1,
                6938: 1,
                7287: 1,
                7547: 1,
                7910: 1,
                8187: 1,
                8934: 1,
                9379: 1,
                9457: 1,
                9705: 1,
                9928: 1
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
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), d(o)
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
              else if (/^((17|61)88|(244|585|791)0|1913|2229|4221|4853|5966|8934|9379|9457)$/.test(a)) e[a] = 0;
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
              var t, d, c = r[0],
                f = r[1],
                n = r[2],
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                n && n(i)
              }
              for (a && a(r); o < c.length; o++) d = c[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(37389), i(55974)
      })())
    }
  }
}));