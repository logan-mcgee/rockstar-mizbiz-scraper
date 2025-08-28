try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "26abb3b1-1b56-4c3c-a954-2f24dfcfeb7e", e._sentryDebugIdIdentifier = "sentry-dbid-26abb3b1-1b56-4c3c-a954-2f24dfcfeb7e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {},
    d = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, c, f, n, o, b = {
            9944: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var d = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, t = 0, c = d.length; t !== a && c >= 0;) "/" === d[--c] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var f = d.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
              };
              Number.isInteger
            },
            21998: (e, a, r) => {
              (0, r(82788).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = d
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
              var d = {
                  "./index": () => Promise.all([r.e(3972), r.e(8003), r.e(4918), r.e(7330), r.e(2209), r.e(4394), r.e(6904), r.e(8107), r.e(2765), r.e(1946), r.e(2229), r.e(4853), r.e(6188), r.e(8161), r.e(5966), r.e(1788), r.e(3727), r.e(9379), r.e(1913), r.e(8934), r.e(2440), r.e(287), r.e(8187), r.e(7910), r.e(3258)]).then((() => () => r(53150))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(2209), r.e(6018), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(3727), r.e(9379), r.e(8934), r.e(287), r.e(2793)]).then((() => () => r(82793))),
                  "./types": () => Promise.all([r.e(3972), r.e(8003), r.e(4918), r.e(7330), r.e(2209), r.e(4394), r.e(6904), r.e(8107), r.e(2765), r.e(1946), r.e(2229), r.e(4853), r.e(6188), r.e(8161), r.e(5966), r.e(1788), r.e(3727), r.e(9379), r.e(1913), r.e(8934), r.e(2440), r.e(287), r.e(8187), r.e(7910), r.e(3258)]).then((() => () => r(51219)))
                },
                t = (e, a) => (r.R = a, a = r.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var d = "default",
                      t = r.S[d];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[d] = e, r.I(d, a)
                  }
                };
              r.d(a, {
                get: () => t,
                init: () => c
              })
            },
            82788: (e, a, r) => {
              const d = r(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = d(r.y.meta.url, e)
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
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var f = 2 & r && a;
            "object" == typeof f && !~e.indexOf(f); f = t(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(d, c), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          114: "f1d2748943fbfab710ad2bc778c86b58",
          131: "0b9704e80ca071c29998bf7b9eeaeecf",
          278: "96338f265b73cc68dcbcd9bc87235dbe",
          287: "4c4eb527801bccb384f9e30e622a2423",
          299: "b21d6aa6e12764ba4cfa6c9bc4791da3",
          314: "7822c6c2faca9ca5a4d8c4c71e361f97",
          340: "bcc220c1ac13e49b7b6446565eec25cf",
          377: "bfc2c18faabfed4dc6db92dac5f91031",
          614: "8974b9e65ae06c578fdbdf6c4c3a1070",
          662: "aaecd721be14ec37aba581cef74103eb",
          824: "551a45bd56e055ec2b58b54a385981e2",
          888: "a0dd0f262e208df66a787603c3df4e8f",
          907: "fa99453403bbe31799dcf4118cfa3017",
          954: "f575eb5fe81c21f7f4d6de69315a988c",
          969: "4971e829705ff19d65f85ae59f1420d2",
          1054: "40f7a03c467ec21a5436dd906d8f4ae8",
          1138: "0fe751ce54ac3edbe83f593d4f26dc58",
          1242: "8244043a14de2f6573417db9165c6b04",
          1503: "d0edc4220bfa156ff5defabb661d1aa8",
          1607: "b3433a76205942a7a0a275cd79e1d7dd",
          1822: "1fbe25551021a3b8602c1ed858708761",
          1868: "79ef46c756bb3ef4fc82ccca28a75731",
          1946: "216dd6b18c5f879b654d3651fced6b60",
          2156: "5548c106074b91a71b5dcc0557f0a9b3",
          2171: "c260c2c9b8c4eba74c224fa94b4c6c0e",
          2209: "97b6234546898568939660ec99c39207",
          2221: "6880377e6c7b54db999a6766771f6229",
          2243: "885a607ae59f95e0793c57041c1d370f",
          2315: "447f2526dfb280c9a98b59a6a4de836d",
          2347: "209150565afa6a3932119574cc41dfdb",
          2365: "8c36a0d6212f6dfbacb55a78a17680f6",
          2398: "b109a32a4a32df3dedd9e4c1f1b9701a",
          2466: "1c581c63e500b3d663b8d5eb013fcca1",
          2642: "91c4b649beb39b91c2ec3bf5e41111d8",
          2656: "1982dda985d9d3dd4e961bed31860735",
          2678: "83fe7a14fa75a6b4b11d5a795d3cfae2",
          2765: "165bdb7d13cfade6b925f1c77357e4dc",
          2793: "a011a150db6a5e313df779b5c390ab12",
          2864: "b78c1907330a3dad1a2b9463e36a15e1",
          2941: "d3b0b55634fc40f618b7c6a92b7731f2",
          3034: "8b629ef8226599f04df536bba40a3c61",
          3197: "59fbec9787ea5320fd6e9878814ed1d1",
          3201: "806421c843a2c8c10c264dbb04fe5e2b",
          3258: "197511736a6e89afc6115a8578e673f1",
          3343: "e70d6df7204b6f5114f372d59f6f5432",
          3370: "8abde9ecd25aeb129b176bb632826468",
          3475: "1a08bfd674c3df7b34319acd95c7e6b7",
          3486: "568942db8c3430fab417f33fd03d5d88",
          3622: "92dd30b3d784294d7df1b87275147fd9",
          3697: "9a125c542cd474b336c105150b9bb74c",
          3727: "29f50b5c7f8dedabb9e68407b66109e2",
          3884: "481fe2624834205107d010321e435d95",
          3885: "e46b4462a2a2753bfea21de07b1d2b22",
          3941: "b13b07ea42f0c0b52514c39ad402c863",
          3972: "762f03a2841da3b60bf420b2d10c5c90",
          3996: "f80a2c555172aa0b7920f169fc7b794d",
          4011: "1437080b923b97e62875c2df6ced5715",
          4186: "ab9e5fe87ce85775037c36a8130496e0",
          4220: "fa500fdbf6faae9330b2b2c4bfeb910c",
          4375: "1a5033fe46a07f7391816e7c2970e05a",
          4394: "6d3a0899b3d73ed44a4f89e6ef79cf4b",
          4528: "c12e5b7acbb5d84a8f34034cd58d119e",
          4621: "08d4e9123a7ec0c7434b7b4b5953ae4f",
          4700: "00d11409efb71d901a8b2c1a54c8cd30",
          4710: "8d8f2a356483f03c9bebab4b77949129",
          4731: "69fdd56b6c469adf4431fcc3cdede339",
          4799: "0fb02529e1f32fcce0074bf1e655d2e9",
          4851: "0276431d86257e28e4fb26cb356faa2d",
          4861: "50bb54c0dd5d91c001b0ef6fb93214a0",
          4913: "338fe6dadf48052166eb2c856e7e0fcb",
          4918: "10b164805c49386ea080a908130c4a3d",
          5018: "62e95bd0f41556c761cea2d975c02d9c",
          5233: "4fe36b5473a48c268c7111b396958951",
          5247: "58ee134f116e277cf72bed0109ef6296",
          5259: "02394228d39090ea03862b343ac30589",
          5530: "070542aba39e5708c080bdfe51e6871f",
          5639: "dd489ea326106a35ad6461c5b1a647d2",
          5663: "457b0e06bf15ab37d5658feaf05f4728",
          5742: "ae2d9005d3862537244b5c77226cbea0",
          5830: "7a9885a1b7325c3254c6e932e6dd3cb1",
          5832: "b0b40ac64a1f8839a44af923b95d4bc8",
          6018: "8a6bda7afabe1588cce0808202e55431",
          6019: "8b2f14b9f6c23ec411b5c42a91082502",
          6267: "5a8b484420152c202d4773eb2b28c228",
          6280: "d5f9c1077513026137711f097146cc72",
          6285: "3752dd1febafbcf8ec7ce266b0088403",
          6361: "b236f70798aec6e8272a590a9772437c",
          6489: "0ff5140c0e987b64328558bb057f64a3",
          6618: "ec1c50d2a93cd621bc092530685739e3",
          6664: "e9683719a224a0300f1cdb41c4f7bbc3",
          6756: "1833b6b6f90d32ef1e428b5e6047bd29",
          6879: "2cb2344f002564936bf9862f3c1e09eb",
          6891: "a599b3eb4139c0e4900918e703705d3e",
          6904: "cf533fafcf044ea3178d05e3aacba4a8",
          6913: "dd42a41fe843dc4026fefa3a799954a4",
          6938: "b6be56f6e5c2172f8825cabe1233e3db",
          6940: "36bbdf697b78ebccd555dd0fdd05f719",
          6997: "f93a4a2223dd67a86edb633c288c98ef",
          7010: "3ffc60a17be7befc19ab23ec3035c683",
          7039: "6d88d4cf6421e5bf5050756ec7214b59",
          7073: "e9d84f2d7a3dab2a56788372a20ad5d9",
          7330: "88789c6b4e1eba10ea301fc0fb7c6934",
          7436: "ea3e78d837252dfd8ea748a7d8ae2f7b",
          7452: "ec7e2a0600a699900c8db709f2b4b8c0",
          7453: "8ecac7c7e0bfb9dda3ec2e2ee7f5e93e",
          7547: "ad9b645a5ad79319eee90d1957aff43b",
          7970: "413a25f4c3752c60bfc6f0f86452195f",
          8003: "5f8ef1276e08fed5484714308beb015e",
          8107: "4e5243218d5b9a619f245454e9993eb6",
          8161: "2642c85941d5b43fbf198254c1c04121",
          8187: "c023e4321741b68e22cd2162a8b6a099",
          8272: "71f9caf8a2fce2afcdbccaf9b4a2c815",
          8391: "2331bd1720aa2185acbd75dc1577a632",
          8755: "b3eb585afec6b9f5aae1ce7895278131",
          8870: "9fb8f76239352ab44fdaa7c806807b94",
          8880: "017e81d3334b79c17b8b05d59777ba56",
          8970: "8f0f25b89d2dda64150de5968a98ec78",
          9022: "2caac4f0e29ad7d05a25cc54f0783030",
          9028: "fc47b007633cd0cbef4e5585d6ee1eea",
          9126: "33aed98d5c41ac6cac840cbbda2082e1",
          9368: "0fe911e81e3143604cb6b0cbdcd3ecb8",
          9377: "8a216674506d3985f794cfe8a19e650c",
          9474: "7edd5c8a9ecd4df1ce202b8bf98eeab8",
          9489: "44ed5a35c03ad8638136dc655fbb0f7b",
          9615: "52b2950861de087fd0736bd7e47a9079",
          9642: "6cf6ea29f390cd07f3588250bdbb07bb",
          9705: "fb96d9170f79107ac8b83f5af72c4908",
          9728: "bfea4a1f48c00781bcad6946685b5c35",
          9928: "1f423c73b7591a095ac1fb5b93127840",
          9936: "5dbc879ee02c6a11c9135399d6c47254",
          9990: "0f98a3b2cd20dbf574b93102b3dd3dd3"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          287: "e79a4105235290f9d2d864ea28c87921",
          1946: "7d08ead9dd48419a2cb3d5906a426e37",
          2656: "a524f193028424dd5a7e23498d8d17a4",
          3258: "ba0b4d47997a545ed32b01b1df98388b",
          4221: "384cddac2173849afd90c4a73e287f5e",
          5850: "ac6c3d25628c6900ccf6742b6efb74bd",
          6938: "384cddac2173849afd90c4a73e287f5e",
          7547: "214e2f94528af5f726d2150d0a4f2215",
          7910: "ea6994b8bffa7799c2b673f690549eda",
          8187: "d1d8e33b806f8bf0f93545de92761473",
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, d) => {
          if (c[e]) c[e].push(a);
          else {
            var t, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  t = s;
                  break
                }
              }
            t || (n = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, i.nc && t.setAttribute("nonce", i.nc), t.setAttribute("data-webpack", f + r), t.src = e), c[e] = [a];
            var l = (a, r) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var d = c[e];
                if (delete c[e], t.parentNode && t.parentNode.removeChild(t), d && d.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = l.bind(null, t.onerror), t.onload = l.bind(null, t.onload), n && document.head.appendChild(t)
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
            var d = o[e];
            if (!(r.indexOf(d) >= 0)) {
              if (r.push(d), d.p) return a.push(d.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), i.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                c = (e, r, c, f, n, o) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return n(b, f, o);
                    var s = b.then((e => n(e, f)), t);
                    if (!o) return s;
                    a.push(d.p = s)
                  } catch (e) {
                    t(e)
                  }
                },
                f = (e, a, t) => c(a.get, d[1], r, 0, n, t),
                n = a => {
                  d.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, d[2], 0, 0, ((e, a, r) => e ? c(i.I, d[0], 0, e, f, r) : t()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, d) => {
            d || (d = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(d.indexOf(t) >= 0)) {
              if (d.push(t), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var c = i.S[r],
                f = "@rockstargames/modules-core-newswire-article",
                n = (e, a, r, d) => {
                  var t = c[e] = c[e] || {},
                    n = t[a];
                  (!n || !n.loaded && (!d != !n.eager ? d : f > n.from)) && (t[a] = {
                    get: r,
                    from: f,
                    eager: !!d
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var t = i(e);
                    if (!t) return;
                    var c = e => e && e.init && e.init(i.S[r], d);
                    if (t.then) return b.push(t.then(c, a));
                    var f = c(t);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (n("@foundry/react", "4.3.1", (() => Promise.all([i.e(3972), i.e(6904), i.e(2656), i.e(2765), i.e(2229), i.e(4853), i.e(430), i.e(6913)]).then((() => () => i(72656))))), n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2315), i.e(2229), i.e(1503)]).then((() => () => i(58718))))), n("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([i.e(4918), i.e(4394), i.e(2229), i.e(5966), i.e(9379), i.e(1913), i.e(9457), i.e(8870)]).then((() => () => i(8870))))), n("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([i.e(3972), i.e(8003), i.e(4918), i.e(7330), i.e(4394), i.e(6904), i.e(8107), i.e(2229), i.e(6188), i.e(8161), i.e(5966), i.e(1788), i.e(1913), i.e(2440), i.e(9705), i.e(8187), i.e(5850)]).then((() => () => i(13317))))), n("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([i.e(4918), i.e(2229), i.e(5966), i.e(9379), i.e(1913), i.e(8934), i.e(2440), i.e(7910), i.e(9928)]).then((() => () => i(59928))))), n("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(3972), i.e(8003), i.e(7330), i.e(2209), i.e(2229), i.e(4853), i.e(6188), i.e(8161), i.e(5966), i.e(1788), i.e(3727), i.e(6618), i.e(6938)]).then((() => () => i(66618))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(3972), i.e(8003), i.e(2229), i.e(6188), i.e(8161), i.e(954)]).then((() => () => i(50101))))), n("dompurify", "2.5.8", (() => i.e(340).then((() => () => i(30340))))), n("lodash", "4.17.21", (() => i.e(9489).then((() => () => i(99489))))), n("react-dom", "18.3.1", (() => Promise.all([i.e(6019), i.e(2229)]).then((() => () => i(66019))))), n("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(6756)]).then((() => () => i(96756))))), n("react-jsx-parser", "2.4.0", (() => Promise.all([i.e(3996), i.e(2229)]).then((() => () => i(53996))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(9728), i.e(2229), i.e(4853)]).then((() => () => i(49728))))), n("react", "18.2.0", (() => i.e(614).then((() => () => i(20614))))), n("react", "18.3.1", (() => i.e(1138).then((() => () => i(11138))))), n("text-balancer", "1.0.5", (() => i.e(3201).then((() => () => i(23201))))), o(25136), o(29441)), b.length ? e[r] = Promise.all(b).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var d = r.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = r[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = r[1] ? a(r[1]) : [];
              return r[2] && (d.length++, d.push.apply(d, a(r[2]))), r[3] && (d.push([]), d.push.apply(d, a(r[3]))), d
            },
            a = e => {
              var r = e[0],
                d = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                d += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, d += "u" == (typeof(n = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, n);
                return d
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
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, s, i = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= d.length || "o" == (s = (typeof(b = d[f]))[0])) return !o || ("u" == i ? n > t && !c : "" == i != c);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (n <= t) {
                        if (b != a[n]) return !1
                      } else {
                        if (c ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || n <= t) return !1;
                    o = !1, n--
                  } else {
                    if (n <= t || s < i != c) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, d) : !u())
              }
              return !!u()
            },
            d = (a, d, t, c) => {
              var f = c ? (e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}))(a[d]) : a[d];
              return (d = Object.keys(f).reduce(((a, d) => !r(t, d) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var d = 0;;) {
                  if (d >= a.length) return d < r.length && "u" != (typeof r[d])[0];
                  var t = a[d],
                    c = (typeof t)[0];
                  if (d >= r.length) return "u" == c;
                  var f = r[d],
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && t != f) return t < f;
                  d++
                }
              })(a, d) ? a : d), 0)) && f[d]
            },
            t = e => {
              throw new Error(e)
            },
            c = (e => function(a, r, d, t, c) {
              var f = i.I(a);
              return f && f.then && !d ? f.then(e.bind(e, a, i.S[a], r, !1, t, c)) : e(a, i.S[a], r, d, t, c)
            })(((e, r, c, f, n, o) => {
              if (!((e, a) => e && i.o(e, a))(r, c)) return ((e, a, r) => r ? r() : ((e, a) => t("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, o);
              var b, s = d(r, c, n, f);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void t(((e, r, d, t, c) => {
                var f = e[d];
                return "No satisfying version (" + a(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + d + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(r, e, c, n, f))
            })),
            f = {},
            n = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(1138).then((() => () => i(11138))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(6019).then((() => () => i(66019))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(9489).then((() => () => i(99489))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(9728), i.e(4853)]).then((() => () => i(49728))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(3972), i.e(8003), i.e(6188), i.e(8161)]).then((() => () => i(50101))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(2315), i.e(3884)]).then((() => () => i(58718))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(614).then((() => () => i(20614))))),
              2973: () => c("default", "dompurify", !1, [1, 2, 4, 1], (() => i.e(340).then((() => () => i(30340))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(3972), i.e(8003), i.e(7330), i.e(2209), i.e(4853), i.e(6188), i.e(8161), i.e(1788), i.e(3727), i.e(6618), i.e(4221)]).then((() => () => i(66618))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], (() => i.e(7547).then((() => () => i(59928))))),
              15636: () => c("default", "@foundry/react", !1, [1, 4, 3, 1], (() => Promise.all([i.e(2656), i.e(430)]).then((() => () => i(72656))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], (() => i.e(9705).then((() => () => i(13317))))),
              42602: () => c("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], (() => Promise.all([i.e(9457), i.e(6489)]).then((() => () => i(8870))))),
              57770: () => c("default", "react-jsx-parser", !1, [1, 2, 2, 2], (() => i.e(3996).then((() => () => i(53996))))),
              97384: () => c("default", "text-balancer", !1, [1, 1, 0, 5], (() => i.e(3201).then((() => () => i(23201))))),
              50430: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(4375).then((() => () => i(96756)))))
            },
            o = {
              430: [50430],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              3258: [15310, 15636, 20206, 42602, 57770, 97384],
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
                var d = a => {
                  delete f[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var t = n[e]();
                  t.then ? a.push(f[e] = t.then(r).catch(d)) : r(t)
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
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                287: 1,
                1946: 1,
                2656: 1,
                3258: 1,
                4221: 1,
                5850: 1,
                6938: 1,
                7547: 1,
                7910: 1,
                8187: 1,
                8934: 1,
                9379: 1,
                9457: 1,
                9705: 1,
                9928: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var d = i.miniCssF(e),
                  t = i.p + d;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), d = 0; d < r.length; d++) {
                      var t = (f = r[d]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (t === e || t === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (d = 0; d < c.length; d++) {
                      var f;
                      if ((t = (f = c[d]).getAttribute("data-href")) === e || t === a) return f
                    }
                  })(d, t)) return a();
                ((e, a, r, d, t) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) d();
                    else {
                      var f = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), t(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, t, 0, a, r)
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
            var d = i.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) r.push(d[2]);
              else if (/^(4(221|30|853)|(17|61)88|(244|585|791)0|1913|2229|5966|8934|9379|9457)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((r, t) => d = e[a] = [r, t]));
              r.push(d[2] = t);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, (r => {
                if (i.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, d[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var d, t, c = r[0],
                f = r[1],
                n = r[2],
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (d in f) i.o(f, d) && (i.m[d] = f[d]);
                n && n(i)
              }
              for (a && a(r); o < c.length; o++) t = c[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(37389), i(55974)
      })())
    }
  }
}));