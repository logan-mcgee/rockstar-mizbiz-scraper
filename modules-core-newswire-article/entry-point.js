try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "59f36c65-7901-45ec-97ff-9f791894b72d", e._sentryDebugIdIdentifier = "sentry-dbid-59f36c65-7901-45ec-97ff-9f791894b72d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], function(e, a) {
  var d = {},
    r = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      d.default = e.default || e, Object.keys(e).forEach(function(a) {
        d[a] = e[a]
      })
    }, function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, t, f, c, n, o, b = {
            28419(e, a, d) {
              (0, d(17411).w)(1)
            },
            17411(e, a, d) {
              const r = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            93032(e, a, d) {
              d(28419)
            },
            77027(e, a, d) {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, f = r.length; t !== a && f >= 0;) "/" === r[--f] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return d.protocol + "//" + d.host + c
              };
              Number.isInteger
            },
            55974(e, a, d) {
              "use strict";
              var r = {
                  "./index": () => Promise.all([d.e(5422), d.e(3004), d.e(6341), d.e(1420), d.e(6219), d.e(357), d.e(5087), d.e(419), d.e(5137), d.e(623), d.e(62), d.e(1127), d.e(8429), d.e(3331), d.e(2909), d.e(336), d.e(181), d.e(1556), d.e(2199), d.e(6130), d.e(6069), d.e(9682), d.e(3226), d.e(1352), d.e(2358), d.e(4754), d.e(76), d.e(9593)]).then(() => () => d(49052)),
                  "./tinaBlockTemplates": () => Promise.all([d.e(5422), d.e(3004), d.e(6341), d.e(357), d.e(623), d.e(1127), d.e(8429), d.e(3331), d.e(2909), d.e(336), d.e(1556), d.e(6130), d.e(6069), d.e(3226), d.e(2358), d.e(5901)]).then(() => () => d(9949)),
                  "./types": () => Promise.all([d.e(5422), d.e(3004), d.e(6341), d.e(1420), d.e(6219), d.e(357), d.e(5087), d.e(419), d.e(5137), d.e(623), d.e(62), d.e(1127), d.e(8429), d.e(3331), d.e(2909), d.e(336), d.e(181), d.e(1556), d.e(2199), d.e(6130), d.e(6069), d.e(9682), d.e(3226), d.e(1352), d.e(2358), d.e(4754), d.e(76), d.e(9593)]).then(() => () => d(76808))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
                f = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => f
              })
            },
            29441(e) {
              "use strict";
              e.exports = d
            },
            25136(e) {
              "use strict";
              e.exports = r
            }
          },
          s = {};

        function l(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var d = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, l), d.loaded = !0, d.exports
        }
        return l.m = b, l.c = s, l.y = a, l.amdO = {}, l.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return l.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          l.r(r);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & d && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, l.d(r, f), r
        }, l.d = (e, a) => {
          for (var d in a) l.o(a, d) && !l.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce((a, d) => (l.f[d](e, a), a), [])), l.u = e => "js/" + {
          62: "481482cbf5f60962a3026c7a97743491",
          68: "7a437f518e9a2a54bd3d835442354a92",
          131: "a3c004e24b84c2e5e1e71432e41452c0",
          173: "986faa213dfdb16fd827664a822bc2a0",
          278: "8b63402e60929b7650f73c9a720199be",
          299: "c5f869d2082b48193e89c0538a3cf72e",
          314: "6d1696a2948d832af8c06a14ef6eecfc",
          357: "d89bf6c810c7e7651231f04794e8e416",
          419: "41081761b27157658e03b4762752ba65",
          439: "bc1e4805a6ac0155fde4f9cf59177200",
          623: "864bc2f5af7030e697410e9e41218f12",
          662: "a42fe230d236d53dffa805c8fa835d50",
          824: "773cada82c522ba0343979cf5dfd8cfd",
          884: "48dcde9bd1a1ec2e53cbba3c021f391c",
          907: "983bd2546c98cd73209c339e5e45fc10",
          1054: "fa0a6ce0ed50964484b17c3afa892fca",
          1078: "2edd2eb9c96da516f35beff573676711",
          1098: "811e62c79e386a46459acce8ae5229f2",
          1132: "aae8dfebfccb45f4608af20f6c101c32",
          1242: "838274365e52d91399ef5f608edcfa45",
          1420: "bb5cb0dabb3544dca05d4c2e2c542d54",
          1510: "d40dbfafbf7aeaee5d9d2a023ff1137c",
          1641: "51d7ec537df3d1509c4014703bed5886",
          1758: "e453fddc902baf2279454c9e350b0d44",
          1795: "c5fb23c98f63db53af218f4b62a0255a",
          1822: "d65438ff8d5f7cee410782f5f054ee99",
          1837: "bbf4e02976a0a55f4e41203b7044d6ea",
          1868: "74aa806e840f221ca6fcbc8da5a9eac6",
          2052: "c5501237b53776536b6ea83dcb6ffd2a",
          2156: "b8296e34ed2615e6ef9fff4ab63e255c",
          2169: "588d38dcc28872bb25bacdc3bf80d848",
          2171: "c9a5cf1216467c037d6e11d5b930935c",
          2221: "7288d185cecec976867fb3b65c691bd5",
          2234: "c990ae9e6b7b49becd7829a96796d3aa",
          2243: "8e0667a71c83a8f87c58ecde2e2673af",
          2306: "53b7b4f0eb1b65a8d33a932649f9f9be",
          2346: "b64545d9e866bf821be343d31271c77b",
          2347: "5cb0e78a74320a3955a06e3339d49600",
          2358: "65fd15c8f69f6302551f4cfdc4837dc9",
          2365: "d4b5258ed936c0aed9f87d63ec7d7b5d",
          2368: "d0b8a938c003d7a5151d08429fbfe22b",
          2398: "3ed30c7dc078febda605f835885b0e29",
          2466: "3cd3d307518e354f2f692afb3e495552",
          2642: "fede8c470ed28a5007c7d48e810d74ad",
          2678: "4dbf797e2c6ffa9ca71c9317b6ce7f5e",
          2864: "dd5f61bc0f059aeeb37308e9281eac7e",
          3004: "646feb2394f6f4d755032bd5dde27a5d",
          3034: "398e1d54084f5e1af5ac3cb54ea1b605",
          3197: "4dba76614becfd93cfa0a754002b7448",
          3343: "630b0c460ddecdce9c842badc50025c8",
          3370: "da942119cf5d8a89e889072a59ce5961",
          3387: "3d66debc821892fc7f87c300e1ae1932",
          3475: "dec2cc6cffa988aa68978d5a569dea9d",
          3486: "ff54977d899dfff9267abaea0195d6ce",
          3697: "f5e73ada257e50c155ef3e1bec96ad76",
          3885: "c75e4875e233a5f447716b6fea4d74ec",
          3896: "adba07074ff66abcf6abaf090ee7545e",
          3941: "e68f70abbb44af22f7f6dca7adfdb107",
          4011: "ebb1c13f84e76830f6f886283c190fb6",
          4218: "c674a2dec6e3194492464c6d393d2681",
          4528: "e10887ea7cb92de2558a7bfe9772665d",
          4550: "02b4893217ad028ba38dc8d323846759",
          4578: "9e14f45ab8bc045b10cbebee01a55779",
          4621: "056b961e801a2198b9a63d3147cf69ea",
          4700: "49525571e9069a016968a38309f7ee7b",
          4710: "272f4479041442c501b5113f35cefe18",
          4731: "cc3ffa7cb82c688315f41abc8981d660",
          4754: "c0922b3177a7fee9bfbc108899f44713",
          4799: "edb2eab6fb2bd665a2c36d84f4942f5f",
          4851: "3e95258a061de72193d8ed1690acd39f",
          4861: "a8cc709303123161226cf858a2582926",
          4913: "43c3b51b6be92677dca5f7898e35d38d",
          5018: "02c3a41205a783307b65803fda3df48d",
          5076: "4b6002de2fabe856322477a10eab6cb0",
          5087: "f08cd4e669f31876f20188e32ffc97f7",
          5137: "682c148005905f9f7aa5d97889e4587c",
          5233: "ea40bfc67364805fd79028af6214233b",
          5259: "275a2879eca8c36cef319a7b82c5d8b9",
          5265: "b995a15ff0821f4e3c7333c5e4bc9d08",
          5389: "9e968437a85d09beaddbb5155aa1d8ab",
          5400: "a7f5c783bf230043e96ff54699da17f7",
          5415: "b78d4bef6026ed207d34f2f94b3e693a",
          5422: "8cf5dc609cc438702c79545b66ff52f6",
          5530: "51fd71842d105b5b320f0f454e9c819d",
          5639: "8e85fc4ff1b72f70082ac6827e5d4e68",
          5663: "d81f341d383fa15fe06e8a87db35fb2f",
          5742: "d206cd254b08d3efa437b15a72791999",
          5830: "a83862ff0ff35904c0d8d2c6d18f903c",
          5832: "0cc904513792882e48c2e41f209480de",
          5901: "53bf58135f9f1cc0da0f69697ee740a1",
          6130: "dc15dffe7f7ba0ed139e0c271d1ed05f",
          6219: "73a066776f2f9f1e8cee021500e8ddcf",
          6267: "20ab88d14eb4e5245f165c2151c0f561",
          6280: "ad42a87598fd1962db760f2f360c333a",
          6285: "d05e8be90a70a2c2aed1713a31e35cc5",
          6315: "20016169bb85ae2f0e60cf0dcbbcae91",
          6327: "7dae428c5c6f287393884c718af520bf",
          6341: "cf72158e2483978d5a701706940bb929",
          6361: "440473592190e65bd9d11f5ecdde4264",
          6471: "2b00bb07cd284126da7215baad407ddd",
          6664: "f664aef8c10afbca8e3fa644d4c9ae6b",
          6879: "183022f1eb28415f01571d7b1053fddb",
          6891: "5266262144b88fb09469f3fc416b8a08",
          6997: "2c36f1d5033a8972f80a67fecd7acbce",
          7010: "159a4b666cbe488c19c5da0c286003f6",
          7073: "d7c588a4fbd29f9e8fe28d009ff02299",
          7129: "aa45160a64c54c65f64948e4936317c8",
          7301: "615b3e9545881313cd1ec68a8d75cc88",
          7407: "b68e518cf3b6d7364d7de410d4ffb3ca",
          7436: "b997fbda2d725d38f3f193d427e70f65",
          7452: "3f367d20ddbde641c13e25cf7076fe90",
          7453: "39e3208a1e15fbaac7a4774add92d4d2",
          7785: "e0549d3d42155adf2a295e5c743bb1fd",
          7918: "44293c52ab7666a6043aa57412fb4b53",
          7970: "7eee6e9be5d8ba4c46286f3fc919aa4e",
          8005: "f1ea6b5f1b0e30a5b707fa3dae0b0db8",
          8068: "74f647869d19db10f671b0f4d10a28c7",
          8272: "07813b0a9557cea78c4bf19844f7c7c0",
          8325: "927880787585659e59106617a60793c5",
          8328: "9d4fd30d37bd371b49b0f7ac2379804b",
          8391: "4fa56f23475d02383ed29c3162c4814f",
          8431: "0c804bfe88a799531ba19bfa7d6b3d95",
          8454: "3a18c297de58261851d22d1e3425b3c0",
          8708: "ed65a2c11234430d8c1204501d377136",
          8751: "6467ecd45a3dde875b5da6d5bb1d61c8",
          8755: "5bb475ba588dcad6c512eb08a564c850",
          8845: "50cf84f4698f9f8bc6129c4d0241c7c3",
          8880: "112e29d4b56198d733df9067dbbe806b",
          8938: "87e245b59cb65acbf52b0be9a277a66c",
          8970: "dc7ccb906e9f4a64fd7c021f909d1336",
          9022: "083ccb66a55c2e9ad325ee799bdf28e9",
          9028: "9d3fedbd584d47007641dd66a91180c4",
          9064: "e6bf7db78ca25adb7c6b19739356a04c",
          9126: "bacb9196f16997240897c6a1b2cf048a",
          9377: "449d52e13cdeb123ddf3dd62cf6be92b",
          9477: "c15b234b2b829ade9a97737073c7f094",
          9593: "915a025d291cbb989edfebaa1e025d87",
          9615: "67945634009d6a7c677e779c4d906abe",
          9673: "eeb0b78b7877035dc5c782a419bd449a",
          9760: "843d7d4df5cd30b24c591314a0afa75b",
          9936: "49d5783b358477f081c149feb582b2db",
          9990: "7608673048ed4abef6ea10e88ba851ae"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          62: "3cfea7daf907a8e24949e9cda747933c",
          76: "34cab69c02779739127f3b0ad51e5f64",
          419: "b4f3f49c91d820eb8c15e0b8d4df5a4d",
          884: "bbb248e51e525579be49d44d8e87fc5e",
          1078: "bbb248e51e525579be49d44d8e87fc5e",
          1510: "384cddac2173849afd90c4a73e287f5e",
          1641: "bfe4e4109fd9c58c236be27a4498cde6",
          2358: "e79a4105235290f9d2d864ea28c87921",
          3226: "3a4070d4c77506d8955255a1ccc7b2a6",
          3473: "bfe4e4109fd9c58c236be27a4498cde6",
          4297: "dd3dc51d96ce54cf1d6fc8fd4da5a62f",
          4754: "bee7e71bb03044211d6b687fb92a9805",
          5137: "6375eab2647ea5ee53b8db8ebc800a29",
          5901: "7c575cc0a210038808b12a81bf37629b",
          6069: "915d373fd494468e9b0648f0fc1b6314",
          6315: "7c575cc0a210038808b12a81bf37629b",
          7918: "384cddac2173849afd90c4a73e287f5e",
          8005: "7c575cc0a210038808b12a81bf37629b",
          8328: "ddeb5592433d9b70ac98c15b1a778ae4",
          8579: "101537b924f4411033bd9d2d8536a01a",
          9593: "2124aee5b0b74dd55b14fe7bf3310cb7"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), l.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/modules-core-newswire-article:", l.l = (e, a, d, r) => {
          if (f[e]) f[e].push(a);
          else {
            var t, n;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + d) {
                  t = s;
                  break
                }
              }
            t || (n = !0, (t = document.createElement("script")).charset = "utf-8", l.nc && t.setAttribute("nonce", l.nc), t.setAttribute("data-webpack", c + d), t.src = e), f[e] = [a];
            var i = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], t.parentNode && t.parentNode.removeChild(t), r && r.forEach(e => e(d)), a) return a(d)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = i.bind(null, t.onerror), t.onload = i.bind(null, t.onload), n && document.head.appendChild(t)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          2358: [64064],
          3226: [31879],
          5901: [11438, 17523, 44019, 83166]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, l.f.remotes = (e, a) => {
          l.o(n, e) && n[e].forEach(e => {
            var d = l.R;
            d || (d = []);
            var r = o[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), l.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, d, f, c, n, o) => {
                  try {
                    var b = e(d, f);
                    if (!b || !b.then) return n(b, c, o);
                    var s = b.then(e => n(e, c), t);
                    if (!o) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    t(e)
                  }
                },
                c = (e, a, t) => f(a.get, r[1], d, 0, n, t),
                n = a => {
                  r.p = 1, l.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(l, r[2], 0, 0, (e, a, d) => e ? f(l.I, r[0], 0, e, c, d) : t(), 1)
            }
          })
        }, (() => {
          l.S = {};
          var e = {},
            a = {};
          l.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              l.o(l.S, d) || (l.S[d] = {});
              var f = l.S[d],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, a, d, r) => {
                  var t = f[e] = f[e] || {},
                    n = t[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (t[a] = {
                    get: d,
                    from: c,
                    eager: !!r
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var t = l(e);
                    if (!t) return;
                    var f = e => e && e.init && e.init(l.S[d], r);
                    if (t.then) return b.push(t.then(f, a));
                    var c = f(t);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === d && (n("@foundry/react", "5.23.1", () => Promise.all([l.e(5422), l.e(3004), l.e(9673), l.e(6341), l.e(6219), l.e(419), l.e(8328), l.e(1127), l.e(8429), l.e(1556), l.e(6315)]).then(() => () => l(8328))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([l.e(5422), l.e(3004), l.e(1795), l.e(1127), l.e(1837)]).then(() => () => l(12841))), n("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([l.e(5422), l.e(3004), l.e(6341), l.e(1420), l.e(1127), l.e(8429), l.e(3331), l.e(1556), l.e(6069), l.e(8579), l.e(8005)]).then(() => () => l(89477))), n("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([l.e(5422), l.e(3004), l.e(6341), l.e(1420), l.e(5087), l.e(5137), l.e(1127), l.e(8429), l.e(3331), l.e(2909), l.e(181), l.e(1556), l.e(2199), l.e(9682), l.e(1352), l.e(2052), l.e(4754), l.e(1641)]).then(() => () => l(60044))), n("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([l.e(1420), l.e(6219), l.e(1127), l.e(8429), l.e(3331), l.e(1556), l.e(6069), l.e(9682), l.e(3226), l.e(76), l.e(1078)]).then(() => () => l(90884))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([l.e(1420), l.e(5087), l.e(1127), l.e(2909), l.e(2199), l.e(9682), l.e(1352), l.e(4297), l.e(9064)]).then(() => () => l(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([l.e(7129), l.e(8068), l.e(1127), l.e(3331), l.e(2909), l.e(336), l.e(181), l.e(7301), l.e(4550)]).then(() => () => l(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([l.e(5422), l.e(357), l.e(2346), l.e(1127), l.e(8429), l.e(3331), l.e(2909), l.e(336), l.e(2199), l.e(6130), l.e(7918)]).then(() => () => l(42195))), n("@rsgweb/utils", "0.0.0", () => Promise.all([l.e(5422), l.e(3004), l.e(7129), l.e(8454), l.e(1127), l.e(2909), l.e(336), l.e(181), l.e(7301), l.e(8751)]).then(() => () => l(28751))), n("clsx", "2.1.1", () => l.e(439).then(() => () => l(10439))), n("dompurify", "2.5.9", () => l.e(7785).then(() => () => l(27785))), n("lodash", "4.18.1", () => l.e(5076).then(() => () => l(15076))), n("react-dom", "18.3.1", () => Promise.all([l.e(1098), l.e(1127)]).then(() => () => l(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([l.e(1127), l.e(6327)]).then(() => () => l(76327))), n("react-jsx-parser", "2.4.1", () => Promise.all([l.e(3387), l.e(1127)]).then(() => () => l(43387))), n("react-router-dom", "6.30.3", () => Promise.all([l.e(5389), l.e(1127), l.e(8429)]).then(() => () => l(15389))), n("react", "18.3.1", () => l.e(8431).then(() => () => l(48431))), n("text-balancer", "1.0.5", () => l.e(5400).then(() => () => l(75400))), o(25136), o(29441)), b.length ? e[d] = Promise.all(b).then(() => e[d] = 1) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var a = l.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
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
                for (var t = 1, f = 1; f < e.length; f++) t--, r += "u" == (typeof(n = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, n);
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
            d = (a, r) => {
              if (0 in a) {
                r = e(r);
                var t = a[0],
                  f = t < 0;
                f && (t = -t - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, s, l = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (s = (typeof(b = r[c]))[0])) return !o || ("u" == l ? n > t && !f : "" == l != f);
                  if ("u" == s) {
                    if (!o || "u" != l) return !1
                  } else if (o)
                    if (l == s)
                      if (n <= t) {
                        if (b != a[n]) return !1
                      } else {
                        if (f ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (f || n <= t) return !1;
                    o = !1, n--
                  } else {
                    if (n <= t || s < l != f) return !1;
                    o = !1
                  } else "s" != l && "n" != l && (o = !1, n--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                i.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, r) : !u())
              }
              return !!u()
            },
            r = (a, d, r) => {
              var t = r ? (e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}))(a[d]) : a[d];
              return Object.keys(t).reduce((a, d) => !a || !t[a].loaded && ((a, d) => {
                a = e(a), d = e(d);
                for (var r = 0;;) {
                  if (r >= a.length) return r < d.length && "u" != (typeof d[r])[0];
                  var t = a[r],
                    f = (typeof t)[0];
                  if (r >= d.length) return "u" == f;
                  var c = d[r],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && t != c) return t < c;
                  r++
                }
              })(a, d) ? d : a, 0)
            },
            t = (e, a, d) => d ? d() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            f = (e => function(a, d, r, t, f) {
              var c = l.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, l.S[a], d, !1, t, f)) : e(a, l.S[a], d, r, t, f)
            })((e, f, c, n, o, b) => {
              if (!((e, a) => e && l.o(e, a))(f, c)) return t(e, c, b);
              var s, i, u = r(f, c, n);
              return d(o, u) || (i = ((e, d, r, t) => "Unsatisfied version " + r + " from " + (r && e[d][r].from) + " of shared singleton module " + d + " (required " + a(t) + ")")(f, c, u, o), "undefined" != typeof console && console.warn && console.warn(i)), (s = f[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              71127: () => f("default", "react", !1, [1, 18, 2, 0], () => l.e(8431).then(() => () => l(48431))),
              18429: () => f("default", "react-dom", !1, [1, 18, 2, 0], () => l.e(1098).then(() => () => l(71098))),
              13331: () => f("default", "@rsgweb/utils", !1, [0], () => Promise.all([l.e(5422), l.e(3004), l.e(7129), l.e(8454), l.e(2909), l.e(336), l.e(181), l.e(7301), l.e(1132)]).then(() => () => l(28751))),
              42909: () => f("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([l.e(5422), l.e(3004), l.e(1795), l.e(4218)]).then(() => () => l(12841))),
              10336: () => f("default", "lodash", !1, [1, 4, 17, 21], () => l.e(5076).then(() => () => l(15076))),
              10181: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([l.e(5389), l.e(8429)]).then(() => () => l(15389))),
              1556: () => f("default", "clsx", !1, [1, 2, 1, 1], () => l.e(439).then(() => () => l(10439))),
              82199: () => f("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([l.e(7129), l.e(8068), l.e(3331), l.e(336), l.e(181), l.e(7301), l.e(2169)]).then(() => () => l(32169))),
              17301: () => f("default", "@rsgweb/tina", !1, [0], () => Promise.all([l.e(5422), l.e(357), l.e(2346), l.e(8429), l.e(3331), l.e(2909), l.e(336), l.e(2199), l.e(6130), l.e(1510)]).then(() => () => l(42195))),
              48863: () => f("default", "dompurify", !1, [1, 2, 4, 1], () => l.e(7785).then(() => () => l(27785))),
              21352: () => f("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => l.e(8708).then(() => () => l(76327))),
              38882: () => f("default", "@foundry/react", !1, [4, 5, 23, 1], () => Promise.all([l.e(9673), l.e(6219), l.e(419), l.e(8328)]).then(() => () => l(8328))),
              10475: () => f("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([l.e(4297), l.e(2368)]).then(() => () => l(32368))),
              35643: () => f("default", "@rsgweb/modules-core-carousel", !1, [0], () => Promise.all([l.e(8579), l.e(9477)]).then(() => () => l(89477))),
              59139: () => f("default", "@rsgweb/modules-core-engagement", !1, [0], () => Promise.all([l.e(2052), l.e(3473)]).then(() => () => l(60044))),
              72527: () => f("default", "@rsgweb/modules-core-group-of-items", !1, [0], () => l.e(884).then(() => () => l(90884))),
              79518: () => f("default", "react-jsx-parser", !1, [1, 2, 2, 2], () => l.e(3387).then(() => () => l(43387))),
              87608: () => f("default", "text-balancer", !1, [1, 1, 0, 5], () => l.e(5400).then(() => () => l(75400)))
            },
            o = {
              181: [10181],
              336: [10336],
              1127: [71127],
              1352: [21352],
              1556: [1556],
              2199: [82199],
              2909: [42909],
              3226: [48863],
              3331: [13331],
              4754: [38882],
              8429: [18429],
              9593: [10475, 35643, 59139, 72527, 79518, 87608],
              9682: [17301]
            },
            b = {};
          l.f.consumes = (e, a) => {
            l.o(o, e) && o[e].forEach(e => {
              if (l.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var d = a => {
                  c[e] = 0, l.m[e] = d => {
                    delete l.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete c[e], l.m[e] = d => {
                    throw delete l.c[e], a
                  }
                };
                try {
                  var t = n[e]();
                  t.then ? a.push(c[e] = t.then(d).catch(r)) : d(t)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            l.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                62: 1,
                76: 1,
                419: 1,
                884: 1,
                1078: 1,
                1510: 1,
                1641: 1,
                2358: 1,
                3226: 1,
                3473: 1,
                4297: 1,
                4754: 1,
                5137: 1,
                5901: 1,
                6069: 1,
                6315: 1,
                7918: 1,
                8005: 1,
                8328: 1,
                8579: 1,
                9593: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var r = l.miniCssF(e),
                  t = l.p + r;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), r = 0; r < d.length; r++) {
                      var t = (c = d[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((t = (c = f[r]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", l.nc && (f.nonce = l.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) r();
                    else {
                      var c = d && d.type,
                        n = d && d.target && d.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), t(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, t, 0, a, d)
              }))(a).then(() => {
                e[a] = 0
              }, d => {
                throw delete e[a], d
              }))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          l.f.j = (a, d) => {
            var r = l.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(127|352|556|81)|3(226|331|36|473)|(219|290|606|842|857)9|4297|76|9682)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((d, t) => r = e[a] = [d, t]);
              d.push(r[2] = t);
              var f = l.p + l.u(a),
                c = new Error;
              l.l(f, d => {
                if (l.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    f = d && d.target && d.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", c.name = "ChunkLoadError", c.type = t, c.request = f, r[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [f, c, n] = d,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in c) l.o(c, r) && (l.m[r] = c[r]);
                n && n(l)
              }
              for (a && a(d); o < f.length; o++) t = f[o], l.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), l.nc = void 0, l(93032), l(55974)
      })())
    }
  }
});