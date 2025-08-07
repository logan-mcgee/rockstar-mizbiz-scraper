try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f4026e64-90c3-4b20-9c7d-69d592ec20a3", e._sentryDebugIdIdentifier = "sentry-dbid-f4026e64-90c3-4b20-9c7d-69d592ec20a3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
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
          114: "a738d1fd3f372c70f46989a3940b0563",
          131: "1a90b1c793caf2db143a5263b36bce0c",
          278: "956b095f181de727349b23f7c812d4c1",
          287: "2e0ea4378931b8adf09231fd8a39d36e",
          299: "ad0768d98036b8126d3d5666f1132ef2",
          314: "3d19cef3aa12b5fe23527c194b2eccdd",
          340: "496c448eb837fac9ee3e3d53928da10e",
          377: "4cc9e03b89a8f07acd34520fc13a8c6e",
          614: "5631110065e0b2927116405f4cc7d5ec",
          662: "8bb64485fc68d241045681612c2cb61a",
          824: "38879edbf121725499a1e3931b59d44f",
          888: "c878aaee0c459f748efb6ffe47d11fc1",
          907: "eb00a4e3e3f5eba657ef4a9a88ce5b3d",
          916: "63befca6d8e439c522191879dc7f5e51",
          954: "3b574f1f7d8ec18cd1de4295f72c14ed",
          969: "7441c9168efbfda8140212b1f7e7f386",
          1054: "6dd010a843510418186d8237620123e2",
          1138: "64d93fde469490ecaaaa7d9e14316d22",
          1154: "d44a4584d9296cf563bf4f2c1914ef9a",
          1242: "89a0c8b9c52d1b6dda01365bbc9aa7aa",
          1607: "98f35d5b2921aeceb3c12fd090923ebd",
          1822: "cebf07ebcb1e0b40e3b82dd11cc242a7",
          1868: "0be06f9e6044317c9e44e598594e5aeb",
          2156: "3576efb797e1cae2f450ebf5427d620b",
          2171: "45a1ac4857b69610dc60d9514f37a461",
          2209: "19b6e1ea91b40280077a3232d7d044dc",
          2221: "e6edf9acf85dcdf506418a3752a9603b",
          2243: "22557ef7ab4b084043cb6c9f32b27553",
          2315: "106d8b71632cfe50783e4efddabe7cb8",
          2347: "335b8780d147985bffadf3b13a7be843",
          2365: "ff9b9bbd12a30972d71f568a24fa9efc",
          2398: "440bba864ffdcf124f85326f0d6b6faf",
          2466: "84032830c0649e9fb8a2e98a24e58d99",
          2642: "7ac5db9b69bd64aedb4bdfe3f67bfa0e",
          2678: "758edbb6f3276870c21d84534c902077",
          2793: "ae5feb35cab10d4ee8801ae6d84369d3",
          2864: "9ca86202dc7fd6a5143d3a03b1373190",
          2941: "e3205dccca9c11c5d9fc01aeb3ed9816",
          3012: "4838a02f49ec3ed0dea3434983f689b7",
          3034: "ebd616b147fa3320caa737c0832b05a7",
          3197: "3c971f9b8a44cf80b053d1210b560b11",
          3201: "fab6256fccfb446b667fef1acb3771a8",
          3258: "04cdf912764b2c0f29555043ee5bffe5",
          3343: "f91656a6156e349a207133a0f8d5f315",
          3370: "a72969cc6ab522bbde358cb7c921191c",
          3475: "618d4d41c890e2cdbd9b4c8b7e8aa710",
          3486: "ac70538f9244c25483f247f0834eab7f",
          3622: "c6b5d001ac0bdf40a32163faba020ae5",
          3697: "0848e8a412a0acbd8503b6ecbfaee876",
          3727: "c045da34d0ecac72a8eb6202cb88e88f",
          3885: "ef57831d9a5552a917274e97c33e3c24",
          3941: "8874b1cdea6addde67a444af3c0c6277",
          3972: "0b6c66237584b8d0670aa2141cf242d6",
          3996: "07d867e774ce6b9f1eb6e6cc5b0075be",
          4011: "f1996535a24cb0e38b7c4581dc6e9c53",
          4186: "4c1b50166743fa79b37b54c73e4fa06d",
          4220: "76cc37f45e160ba0c6368fba5101a100",
          4394: "a7fa998dea7620bb1585617167b8ad26",
          4528: "cff2b964e2d2ca59abd3fc80b299bbbe",
          4621: "873e4fe6437ec55c799ad8b891191895",
          4700: "46101a9ac10c35e937f65c9a5d765d8c",
          4710: "8d03b81822ef18174918a72627a83a98",
          4731: "91fd2ac0585ba9c9326e67d3db6d56fd",
          4799: "5f0026afff93f65c8ee1ca4ed99f5022",
          4851: "e25557424a5561a4ad98b8c49954410c",
          4861: "aaa001fe1b2c96b580d3359cc669fb2f",
          4913: "208a4295e8214e605b807cb355347e88",
          5018: "dd10f89ce3f2d0c5164688cce015c198",
          5174: "7a9efbb0ae823dd6c60c98045b8f0eb5",
          5233: "f7db64e65c228c0affe51168e23d259f",
          5247: "0073c86d67a38c0aad10bd8979d81ec2",
          5259: "65739b014de04f97d35c46e5deef7d34",
          5530: "4c1b262179fe88474672e43ebbf4798d",
          5639: "174b2bcf874070a7af0be0bb7cdb1010",
          5663: "a9d87401a9d5751588829b5d1de9527f",
          5742: "7ea5029500341b0f60f4e6b3a66c06a2",
          5830: "0dbab2306068c3463ed5dcbeb6e2837b",
          5832: "112f571cf77cf05693c4bd66f4dbd4df",
          6018: "9755ca4cf7298142e950f25fa14fc068",
          6019: "3fd601a2a071eb381091512ec9853f25",
          6267: "d2ae466821f7b090b890a69e57b0dbbc",
          6280: "b2c61ac73ad98d72923f4e02a702298d",
          6285: "8b9fb84240e6b264c3953e3a6fa4b0be",
          6361: "bb48db2b7cbd51607906d2ce3cbfd185",
          6489: "e68a1000ab3f7751cf9237bbf0b47a3c",
          6618: "35e979c66a55bd91440abbf58fd93da8",
          6664: "e89aa0cd99180ae17dec357038e07ccd",
          6879: "f0ddc1b320827a64515bf79731c585e4",
          6891: "697f1c5bada1fd5ea94ebb20c21cc63d",
          6913: "f36e3c0ed6dd52d6b142350cd93cbf76",
          6938: "e33b76311b19ba4571e4b33ee121fa6f",
          6940: "f2e6a7f57a2a25df96a119543481cd75",
          6997: "7f837ffee9dd479ea2ac2ca974ab7d30",
          7010: "88cea595e75554f2f2a070b45b26b9c8",
          7039: "bf124e7c420dd9fcbcdc38a1c5e97a7f",
          7073: "33a87aed84a0935af3fc3b64f4d7e1d9",
          7287: "7a6c5475b4cdd9e2ba604ffd026d1eb3",
          7330: "646078420a9c398b4c7c86e66dbbcef7",
          7436: "f3173ce76062ba6eaae0e1c4c0da544e",
          7452: "48c58752a5117348ba37ca5fd5634e6a",
          7453: "9094a9029ad3c342dde65bc281bec57b",
          7547: "245a8461754acd041416f9ee85febae6",
          7970: "2dee4853522247bdc616202c461585f2",
          8003: "fb6208bd54de0c90767ddfa4e39805a5",
          8161: "3b9cd7006934d71583544d81c7f9d440",
          8187: "3f7fe31292ce5750057c79bb78260ff3",
          8233: "874706702ddc763dbb0e826992bb47a4",
          8272: "cb254a642e29a655c09861acd3cfcba0",
          8391: "3597b32a27cbf0eb264220231d4fcefd",
          8597: "44168c2983c3dc2c54eee454bae9b296",
          8755: "c6452457ba5d8090d9eea11de13a72b0",
          8773: "5dab3e502076d42e9ed4ea4330591286",
          8870: "ce18deb321f751c47950cf76297fe2d1",
          8880: "b71afc6ca1b8728da86c19294c000151",
          8970: "22ab9fe8fa9aebbb99f057ca4ffd07ad",
          9022: "55ca480fa594fe936f15f09b983476b3",
          9028: "8f4c34798bd6926ce2566b7655dfa607",
          9126: "6c76d24f44f59eba9bbf04ea890c5b09",
          9368: "e740e4647f306b7bb063bc13f405d071",
          9377: "cf946bc35df66aa51026cdf4f111e030",
          9474: "f0b4ecb69d0fb615f9e119be1c185d93",
          9489: "cec414576cc3306e9c98b2f689a8fbae",
          9615: "f3f9c32f08ff423a60fea1f3a744445d",
          9642: "c19e4d7d647aa4653047021f400fce37",
          9705: "b1937dbba72287fa91f2936f9834b2c0",
          9728: "2c3b98a50a0075406ece230160658305",
          9928: "72f6e989677ded4f41f1430b68cce1ae",
          9936: "c4351115855e6f1ddff6d86f4d8ca1e4",
          9990: "3ce51b027eea2078926e462bf1af95f2"
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