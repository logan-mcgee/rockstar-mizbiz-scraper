! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bd86191e-0634-4a1d-8b13-99df78f4bcba", e._sentryDebugIdIdentifier = "sentry-dbid-bd86191e-0634-4a1d-8b13-99df78f4bcba")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var f = {};
  return Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, c, t, r, d, b, o = {
            49293: (e, a, f) => {
              (0, f(31789).w)(1)
            },
            31789: (e, a, f) => {
              const c = f(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = c(f.y.meta.url, e)
              }
            },
            23358: (e, a, f) => {
              f(49293)
            },
            90569: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var c = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, t = 0, r = c.length; t !== a && r >= 0;) "/" === c[--r] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var d = c.slice(0, r + 1);
                return f.protocol + "//" + f.host + d
              };
              Number.isInteger
            },
            58639: (e, a, f) => {
              "use strict";
              var c = {
                  "./bootstrap": () => Promise.all([f.e(4282), f.e(8432), f.e(7512), f.e(7082), f.e(7093), f.e(9491), f.e(2229), f.e(9623), f.e(5966), f.e(3457), f.e(4281), f.e(3001), f.e(2440), f.e(9514), f.e(2738), f.e(7145), f.e(241), f.e(3298)]).then((() => () => f(13298))),
                  "./index": () => Promise.all([f.e(4282), f.e(8432), f.e(7512), f.e(7082), f.e(7093), f.e(2229), f.e(9623), f.e(5966), f.e(3457), f.e(4281), f.e(3001), f.e(2440), f.e(9514), f.e(2738), f.e(7145), f.e(241), f.e(8312)]).then((() => () => f(58312))),
                  "./site-routes/Bully": () => Promise.all([f.e(4282), f.e(8432), f.e(7512), f.e(7082), f.e(7093), f.e(2229), f.e(9623), f.e(5966), f.e(3457), f.e(4281), f.e(3001), f.e(2440), f.e(9514), f.e(2738), f.e(7145), f.e(241), f.e(7975), f.e(6208)]).then((() => () => f(96208))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([f.e(4282), f.e(8432), f.e(7512), f.e(7082), f.e(7093), f.e(2229), f.e(9623), f.e(5966), f.e(3457), f.e(4281), f.e(3001), f.e(2440), f.e(9514), f.e(2738), f.e(7145), f.e(241), f.e(7975), f.e(6128)]).then((() => () => f(16128))),
                  "./tina": () => Promise.all([f.e(4282), f.e(8432), f.e(7512), f.e(7082), f.e(7093), f.e(2229), f.e(9623), f.e(5966), f.e(3457), f.e(4281), f.e(3001), f.e(2440), f.e(9514), f.e(2738), f.e(7145), f.e(241), f.e(7975)]).then((() => () => f(17975)))
                },
                t = (e, a) => (f.R = a, a = f.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                r = (e, a) => {
                  if (f.S) {
                    var c = "default",
                      t = f.S[c];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[c] = e, f.I(c, a)
                  }
                };
              f.d(a, {
                get: () => t,
                init: () => r
              })
            },
            25136: e => {
              "use strict";
              e.exports = f
            }
          },
          n = {};

        function i(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var f = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(f.exports, f, f.exports, i), f.loaded = !0, f.exports
        }
        return i.m = o, i.c = n, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, c = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var r = {};
          e = e || [null, c({}), c([]), c(c)];
          for (var d = 2 & f && a;
            "object" == typeof d && !~e.indexOf(d); d = c(d)) Object.getOwnPropertyNames(d).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, i.d(t, r), t
        }, i.d = (e, a) => {
          for (var f in a) i.o(a, f) && !i.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, f) => (i.f[f](e, a), a)), [])), i.u = e => "js/" + {
          131: "5a1214657d123f098291dec2fce9b9f8",
          241: "0a5b1142e42108aec8cb5320b82ee3d6",
          278: "62ae2af931cf112b6d6939c13a0bbdc2",
          299: "1caad47eb0ab21af2b328194a4718b6d",
          314: "a4985764638c3419add1ab17eb342b74",
          662: "4c9ebb3e3e13b9880ccf58d4a2280c4d",
          707: "a76c1f328ede2c80e2fffa31f8dac32a",
          824: "d8a92e1a115a011284859b39cbea52eb",
          907: "0ec388269fc9bb894550ae6858ca373a",
          1029: "997bd248d05e205fd1ffdd51b8ec2772",
          1041: "900c37b6a584c586cebbee43bd8defd3",
          1054: "91f75eb50dd53ddea7189a1b1ea4551d",
          1095: "3018e6d72c0dee221ff927d1f71fbeaf",
          1242: "427bafa8570b192b8d4d610837da4323",
          1604: "b6116f54a47ab029095c02cd1564bfcb",
          1822: "0707f3952987acc975dfe39293e6b588",
          1868: "0106c646f7b7dfde49ac097485c1faac",
          2156: "87fe2e772a272d26c96cd23c37535130",
          2171: "aa7dccdfb0b7a97a11184bb911a5941f",
          2221: "7c524b8842e9b8b7d3d29b3df4e301de",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2243: "edc67f6ee0adf0bff0c568131a0f1272",
          2283: "287cc0f631ff43ecd4a4bb8ce4895e48",
          2347: "ba7032e935d49428862b0c54b5dd7ced",
          2365: "b0466f82519538cea9d47bec99616e11",
          2398: "d4aa6065f2a32027a9fa35c0238d0be1",
          2440: "c30750136d805475662f793509d9f4b5",
          2457: "36b7da020c9d1f4835b2f64aa7c887fc",
          2466: "695b3b1a8bab00c0b7fa78e7060d71fa",
          2642: "1fda50210f0cb850272e12a5167eefcb",
          2678: "57274264ba933ceb07c4324dc81ce235",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          2864: "c31a03b7fdaf8e27d6b0fdd02d0c7fb6",
          2907: "2ea733ed4e361931a6cfdf814c66f494",
          3001: "39a36f989a1ca4170f49675ba9b54bfc",
          3034: "027dcffcbeedae824a51a6307ffee730",
          3131: "3fc648ccbbee09753c5ec7c06e1af090",
          3197: "03a20d106ff6e60953012b07170903c4",
          3217: "8d7acfa1807f0ce098b4773d7c174855",
          3298: "88187250a8ac595c413afe618de24946",
          3343: "f40b778621a16121af8182af30ba5f89",
          3360: "14086e509a65c56d4fc46c9f262aff1c",
          3370: "04b0878900adb6142322f57555ac3453",
          3422: "6009e5c744e23f5757167140c29df3f6",
          3457: "ccbfe09ab6f1ac938a84410c8e0aa3a5",
          3475: "62d2aa18155756b3c40cd9584911ad93",
          3486: "c5db062fc4f89632586551c5723f1d7b",
          3697: "c74a26110303f0be7cfb3778f8dd2486",
          3759: "6774182ebfde93d50882ceee6ef2106b",
          3885: "23880aa21a52a25934d9644260d0e7f7",
          3941: "e39c477edd5b7df53151dcbb3ae1f916",
          3954: "5533abeed3f27e3688d7b26f25834c3d",
          4011: "194d22aec6906291e45e25b6bd005e08",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4282: "2ab51f8ba55b16e0b4506aaf3920108a",
          4528: "55cc467a57deac4e9fb4920bc0c74567",
          4561: "ebbf3a32982c8908890c28a0ae68d2f8",
          4621: "fb6cae41182905d0bc9b2b5f22fe6a30",
          4700: "0010c62b4af2110302313df0e886eb8e",
          4710: "cc2b4677d599ee447f72508738fdaf3e",
          4731: "5d36e82021d7765227b635946d5c0c2d",
          4799: "3ec525d65e3a3a44703a67af28bfeba2",
          4838: "b150e6657a8f42051fa5ae3fee437e01",
          4851: "7d46302dce8e94c05208331c8cdeb834",
          4861: "f00c1d5835e8e9b6bc1ac8bd59f6098d",
          4913: "a0e82022802b79bd08f4094462ac520d",
          5018: "e1ceafa54cabec9a0aeffe7dc372cfdc",
          5219: "15274dfc92c642c6990152cd082e07a8",
          5233: "b270b4db61886072b0dd323468180fd5",
          5259: "2d4f1d97ba9c9e82d0de0b56ea96118b",
          5309: "07d81e91a047600c42d13906c1ebabc9",
          5483: "42405aa25692120ba38f53ea1e6fa981",
          5530: "6c271193fadc95295adadc0fe01104ea",
          5563: "ebf94ed11f6a6c0e4644b7c3adac4b87",
          5639: "fee93a87737b7086511e481378acdbca",
          5663: "eb37c206fd8c96a38825db18f8ccbf77",
          5742: "1bf8e8bab8a674c8fc347c3b5664ea16",
          5830: "de78551043c727c85199f1e8ad739fa1",
          5832: "a4d6c8dfa5a72e8771a9266cd8bb7439",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6091: "5e79bc6dc1ac063ce9af4b9216f4ae4c",
          6128: "bb296316cb0237519fd5d01b8cb11280",
          6208: "1271f0c7d3a73dad3d156986eaf63c0f",
          6267: "b97e0d928ac406e962cf28761c06f539",
          6280: "a0c1655e5caa6c547f2667208c386d18",
          6285: "c086436f159353e4385dd0b3100d3860",
          6286: "ff5fb21b4179655adc12ba70ae588c90",
          6304: "1bfc25a466acf5417c77265461d79c19",
          6361: "3288716c3038fed0c3b2f41750c0db62",
          6521: "e37b73f04ba1ddb15bb2726c71c98f97",
          6664: "1af567693ee8a238578ad05de98f5efa",
          6723: "cd508bba02957851ab848e7d2f1986ed",
          6832: "52635a3a42a55a146d68d5240d03171a",
          6864: "165ef683ef0b281bc78eb927653a3141",
          6879: "769e6b99a74efadb8693f1ad7c39c4f0",
          6891: "f795542bb9f48c70eb342faceef07a98",
          6942: "e332f185e164e2767e3f71f00458097e",
          6997: "a26abaa809ef95d243fc2d830cb9cee5",
          7010: "91018d750ab061b62f9166cd957802f7",
          7070: "e843b1fcca2aa8a0401e8bc93cbf6460",
          7073: "8e6d3412213de5c66369d4af06e0085c",
          7082: "4fb2017bf437e831c13a7724710ceba0",
          7093: "4244a34ca0d06999a47d43773554d015",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7214: "481e5b0649920d3ff14f7897df069186",
          7360: "08e875f55fd25c98ff02cbd5fe33d7f7",
          7436: "26133f552be173188a40382ffbfc02b8",
          7452: "cf084e0828aa9eae0406c98f4a94a2fd",
          7453: "7c8d8faf34c89d6e0a54de30b10c7a73",
          7512: "d7aa36e8bb42fa6c0c67e35f80e97d3c",
          7600: "a49ed0bf970db98f1a5a320a0829c9d0",
          7944: "4d7d28e8a2cfac8cbaafca0db1c42ba3",
          7970: "9257ef45a419680ba60693b7fe581576",
          7975: "34cac2f62572aeada0308ed3726fbf09",
          8272: "4e01f78cdb38b3c54c9a5af6e0e7edc9",
          8312: "e570a173dcef180be83251606b92c8fd",
          8384: "0f99a99b6b5d30aae7509933c3181994",
          8391: "562abc2bbd5d37571de2aae10c5f0c24",
          8432: "61aa6f9c922a2c931b270532ab9af144",
          8688: "7471b0a6350a3882eb9fc1cd38e8b56e",
          8755: "88fdb0d0df484ec52be5ef4331dd019f",
          8880: "28758ff87aba3c817cc139f30d394244",
          8970: "9a028934828e2466e1ec3688788c8902",
          9022: "502a545bc4727a9f97c68cbc164d0977",
          9028: "3c2abd212befd193e4ee2728449c448d",
          9126: "a6dd49e53254ce69ed5a203669360fe1",
          9130: "507fc110f46aa9101a844465d834b66e",
          9157: "98aece63cfcb463c94ae19018140e216",
          9292: "a1bc17460dacddd02a0543bff0a3970f",
          9377: "2a634fd3afb4b1c9a500640a96347df4",
          9491: "3a0e2348b831ef1d4b584bf7d9ad0748",
          9514: "fc00161e6b3874cb77fd3c127e98ca94",
          9550: "d28a825de924373fde398441fa293280",
          9615: "12e1ff0321029baa40847d806ec028b6",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9931: "deef8cc6a294779b20a75d6aa98ec3c5",
          9936: "0051d25f01512d4c403715b37380e22d",
          9990: "126fddb8880cdad3adbb4e06a3270566"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          241: "0e8c3daf5bd134f711f7cce3e8132c42",
          2283: "3405c066acfb7fc31a1afb5aed7efd97",
          3298: "37ab6b245efbddb48787831524851730",
          5563: "82b8e41eb90eae7db3adfb9fff54d045",
          6128: "52e55b769351b6e3f1602fe5d2baacd1",
          6208: "52e55b769351b6e3f1602fe5d2baacd1",
          7093: "8e17920391e5641f9c622dc8dd7dc600",
          7214: "cba233c36516a197957118284f18a45c",
          7944: "82b8e41eb90eae7db3adfb9fff54d045",
          8384: "d96a84d212a40669fbfb32a4dfb0e786"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, r = "@rockstargames/sites-legacy:", i.l = (e, a, f, c) => {
          if (t[e]) t[e].push(a);
          else {
            var d, b;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var s = o[n];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == r + f) {
                  d = s;
                  break
                }
              }
            d || (b = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", r + f), d.src = e), t[e] = [a];
            var l = (a, f) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var c = t[e];
                if (delete t[e], d.parentNode && d.parentNode.removeChild(d), c && c.forEach((e => e(f))), a) return a(f)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), b && document.head.appendChild(d)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          241: [31879],
          7975: [17523]
        }, b = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(d, e) && d[e].forEach((e => {
            var f = i.R;
            f || (f = []);
            var c = b[e];
            if (!(f.indexOf(c) >= 0)) {
              if (f.push(c), c.p) return a.push(c.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), i.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                r = (e, f, r, d, b, o) => {
                  try {
                    var n = e(f, r);
                    if (!n || !n.then) return b(n, d, o);
                    var i = n.then((e => b(e, d)), t);
                    if (!o) return i;
                    a.push(c.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                d = (e, a, t) => r(a.get, c[1], f, 0, o, t),
                o = a => {
                  c.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(i, c[2], 0, 0, ((e, a, f) => e ? r(i.I, c[0], 0, e, d, f) : t()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (f, c) => {
            c || (c = []);
            var t = a[f];
            if (t || (t = a[f] = {}), !(c.indexOf(t) >= 0)) {
              if (c.push(t), e[f]) return e[f];
              i.o(i.S, f) || (i.S[f] = {});
              var r = i.S[f],
                d = "@rockstargames/sites-legacy",
                b = (e, a, f, c) => {
                  var t = r[e] = r[e] || {},
                    b = t[a];
                  (!b || !b.loaded && (!c != !b.eager ? c : d > b.from)) && (t[a] = {
                    get: f,
                    from: d,
                    eager: !!c
                  })
                },
                o = [];
              return "default" === f && (b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(5483), i.e(2229), i.e(5219)]).then((() => () => i(87768))))), b("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(9514), i.e(8384)]).then((() => () => i(48122))))), b("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(7082), i.e(2229), i.e(4281), i.e(2440), i.e(2738), i.e(2283), i.e(4561)]).then((() => () => i(14561))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(4282), i.e(8432), i.e(1095), i.e(2229), i.e(9623), i.e(5966), i.e(3457), i.e(3422)]).then((() => () => i(41041))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(4282), i.e(7512), i.e(2229), i.e(5966), i.e(4281), i.e(3001), i.e(5563)]).then((() => () => i(55834))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(4282), i.e(8432), i.e(2229), i.e(9623), i.e(3457), i.e(1029)]).then((() => () => i(93514))))), b("focus-trap-react", "10.2.3", (() => Promise.all([i.e(6091), i.e(2229), i.e(7145)]).then((() => () => i(96091))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(2907), i.e(2229)]).then((() => () => i(12907))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(8688), i.e(2229)]).then((() => () => i(78688))))), b("framer-motion", "7.10.3", (() => Promise.all([i.e(9931), i.e(2229)]).then((() => () => i(69931))))), b("graphql", "16.10.0", (() => i.e(6286).then((() => () => i(26286))))), b("prop-types", "15.8.1", (() => i.e(6723).then((() => () => i(76723))))), b("react-dom", "18.2.0", (() => Promise.all([i.e(7360), i.e(2229)]).then((() => () => i(57360))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([i.e(2229), i.e(2457)]).then((() => () => i(42457))))), b("react-router-dom", "6.17.0", (() => Promise.all([i.e(1604), i.e(2229)]).then((() => () => i(21604))))), b("react", "18.2.0", (() => i.e(3217).then((() => () => i(23217))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var t = i(25136);
                  if (!t) return;
                  var r = e => e && e.init && e.init(i.S[f], c);
                  if (t.then) return o.push(t.then(r, a));
                  var d = r(t);
                  if (d && d.then) return o.push(d.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[f] = Promise.all(o).then((() => e[f] = 1)) : e[f] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var c = f.length - 1; c > -1 && (!e || !/^http(s?):/.test(e));) e = f[c--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                c = f[1] ? a(f[1]) : [];
              return f[2] && (c.length++, c.push.apply(c, a(f[2]))), f[3] && (c.push([]), c.push.apply(c, a(f[3]))), c
            },
            a = (f, c) => {
              if (0 in f) {
                c = e(c);
                var t = f[0],
                  r = t < 0;
                r && (t = -t - 1);
                for (var d = 0, b = 1, o = !0;; b++, d++) {
                  var n, i, s = b < f.length ? (typeof f[b])[0] : "";
                  if (d >= c.length || "o" == (i = (typeof(n = c[d]))[0])) return !o || ("u" == s ? b > t && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= t) {
                        if (n != f[b]) return !1
                      } else {
                        if (r ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || b <= t) return !1;
                    o = !1, b--
                  } else {
                    if (b <= t || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (d = 1; d < f.length; d++) {
                var h = f[d];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, c) : !u())
              }
              return !!u()
            },
            f = (f, c, t) => {
              var r = f[c];
              return (c = Object.keys(r).reduce(((f, c) => !a(t, c) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var c = 0;;) {
                  if (c >= a.length) return c < f.length && "u" != (typeof f[c])[0];
                  var t = a[c],
                    r = (typeof t)[0];
                  if (c >= f.length) return "u" == r;
                  var d = f[c],
                    b = (typeof d)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && t != d) return t < d;
                  c++
                }
              })(f, c) ? f : c), 0)) && r[c]
            },
            c = (e => function(a, f, c, t) {
              var r = i.I(a);
              return r && r.then ? r.then(e.bind(e, a, i.S[a], f, c, t)) : e(a, i.S[a], f, c, t)
            })(((e, a, c, t, r) => {
              var d = a && i.o(a, c) && f(a, c, t);
              return d ? (e => (e.loaded = 1, e.get()))(d) : r()
            })),
            t = {},
            r = {
              62229: () => c("default", "react", [1, 18, 2, 0], (() => i.e(3217).then((() => () => i(23217))))),
              9623: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(1604).then((() => () => i(21604))))),
              95966: () => c("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(4282), i.e(8432), i.e(9623), i.e(3457)]).then((() => () => i(93514))))),
              16565: () => c("default", "graphql", [1, 16, 9, 0], (() => i.e(6286).then((() => () => i(26286))))),
              2918: () => c("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([i.e(4282), i.e(8432), i.e(1095), i.e(9623), i.e(5966), i.e(3457), i.e(1041)]).then((() => () => i(41041))))),
              81788: () => c("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(5483), i.e(7600)]).then((() => () => i(87768))))),
              44853: () => c("default", "react-dom", [1, 18, 2, 0], (() => i.e(7360).then((() => () => i(57360))))),
              92440: () => c("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([i.e(4282), i.e(7512), i.e(5966), i.e(3001), i.e(7944)]).then((() => () => i(55834))))),
              90660: () => c("default", "framer-motion", [1, 10, 12, 18], (() => i.e(9931).then((() => () => i(69931))))),
              22738: () => c("default", "react-intersection-observer", [1, 9, 10, 3], (() => i.e(4838).then((() => () => i(42457))))),
              57145: () => c("default", "prop-types", [1, 15, 8, 1], (() => i.e(6723).then((() => () => i(76723))))),
              2765: () => c("default", "focus-trap-react", [1, 10, 2, 3], (() => i.e(6091).then((() => () => i(96091))))),
              82849: () => c("default", "framer-motion", [1, 10, 12, 18], (() => i.e(8688).then((() => () => i(78688))))),
              84590: () => c("default", "@rsgweb/modules-core-hero", [1, "workspace:^"], (() => i.e(7214).then((() => () => i(48122))))),
              87330: () => c("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => Promise.all([i.e(2283), i.e(6942)]).then((() => () => i(14561))))),
              87052: () => c("default", "framer-motion", [1, 10, 12, 18], (() => i.e(2907).then((() => () => i(12907)))))
            },
            d = {
              241: [2765, 82849, 84590, 87330],
              2229: [62229],
              2283: [87052],
              2440: [92440],
              2738: [22738],
              3001: [44853],
              3457: [16565],
              4281: [2918, 81788],
              5966: [95966],
              7145: [57145],
              9514: [90660],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(d, e) && d[e].forEach((e => {
              if (i.o(t, e)) return a.push(t[e]);
              if (!b[e]) {
                var f = a => {
                  t[e] = 0, i.m[e] = f => {
                    delete i.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var c = a => {
                  delete t[e], i.m[e] = f => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = r[e]();
                  d.then ? a.push(t[e] = d.then(f).catch(c)) : f(d)
                } catch (e) {
                  c(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, f) => {
              e[a] ? f.push(e[a]) : 0 !== e[a] && {
                241: 1,
                2283: 1,
                3298: 1,
                5563: 1,
                6128: 1,
                6208: 1,
                7093: 1,
                7214: 1,
                7944: 1,
                8384: 1
              } [a] && f.push(e[a] = (e => new Promise(((a, f) => {
                var c = i.miniCssF(e),
                  t = i.p + c;
                if (((e, a) => {
                    for (var f = document.getElementsByTagName("link"), c = 0; c < f.length; c++) {
                      var t = (d = f[c]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (t === e || t === a)) return d
                    }
                    var r = document.getElementsByTagName("style");
                    for (c = 0; c < r.length; c++) {
                      var d;
                      if ((t = (d = r[c]).getAttribute("data-href")) === e || t === a) return d
                    }
                  })(c, t)) return a();
                ((e, a, f, c, t) => {
                  var r = document.createElement("link");
                  r.rel = "stylesheet", r.type = "text/css", r.onerror = r.onload = f => {
                    if (r.onerror = r.onload = null, "load" === f.type) c();
                    else {
                      var d = f && ("load" === f.type ? "missing" : f.type),
                        b = f && f.target && f.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = d, o.request = b, r.parentNode && r.parentNode.removeChild(r), t(o)
                    }
                  }, r.href = a, document.head.appendChild(r)
                })(e, t, 0, a, f)
              })))(a).then((() => {
                e[a] = 0
              }), (f => {
                throw delete e[a], f
              })))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          i.f.j = (a, f) => {
            var c = i.o(e, a) ? e[a] : void 0;
            if (0 !== c)
              if (c) f.push(c[2]);
              else if (/^(2(229|283|440|738)|4281|5966|7145|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((f, t) => c = e[a] = [f, t]));
              f.push(c[2] = t);
              var r = i.p + i.u(a),
                d = new Error;
              i.l(r, (f => {
                if (i.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var t = f && ("load" === f.type ? "missing" : f.type),
                    r = f && f.target && f.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + t + ": " + r + ")", d.name = "ChunkLoadError", d.type = t, d.request = r, c[1](d)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var c, t, r = f[0],
                d = f[1],
                b = f[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (c in d) i.o(d, c) && (i.m[c] = d[c]);
                b && b(i)
              }
              for (a && a(f); o < r.length; o++) t = r[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            f = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), i.nc = void 0, i(23358), i(58639)
      })())
    }
  }
}));