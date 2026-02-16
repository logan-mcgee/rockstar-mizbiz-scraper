try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7b124082-b887-49fa-9f88-10c7ccc97e06", e._sentryDebugIdIdentifier = "sentry-dbid-7b124082-b887-49fa-9f88-10c7ccc97e06")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, r, t, c, f, o = {
            17411: (e, a, d) => {
              const r = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            28419: (e, a, d) => {
              (0, d(17411).w)(1)
            },
            42029: (e, a, d) => {
              "use strict";
              var r = {
                  "./core": () => Promise.all([d.e(8379), d.e(7921), d.e(1127), d.e(8429), d.e(1222), d.e(889), d.e(2372), d.e(3694), d.e(4572), d.e(1788), d.e(4836), d.e(1207), d.e(5966), d.e(1604)]).then(() => () => d(77264))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
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
            77027: (e, a, d) => {
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
            93032: (e, a, d) => {
              d(28419)
            }
          },
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var d = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(d.exports, d, d.exports, b), d.loaded = !0, d.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          b.r(t);
          var c = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = d(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, b.d(t, c), t
        }, b.d = (e, a) => {
          for (var d in a) b.o(a, d) && !b.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce((a, d) => (b.f[d](e, a), a), [])), b.u = e => "js/" + {
          61: "92a301867df5c7d13fb2dc52585f13b9",
          68: "91fd92faae045d879493c2ad31c8a5fd",
          131: "706be1613807f62d5e1cbb0092d26fa8",
          145: "5cb2c3f1c55600dae612dffd4f2dcabf",
          173: "2226e71c844073b68c1feaa77b33939f",
          278: "7ab3410a3f197e5c63830dff4003b41f",
          299: "204b8a75838c8f0a8f782c43f89401c6",
          314: "dbcb80cf8c1b626ccaa479216e967c38",
          395: "c76f9681821e89e620272d69bca6efcf",
          439: "8444a5578cef3ef8d45cea6d30f6ef7a",
          450: "91bfa76f25a6cdea824e58e1eaa6da49",
          662: "29acbef21847d09ed5ef6e8194d46c2e",
          710: "6d161a1eb7970d096d84f09c181253da",
          824: "d9049655c2a7fe38dc968efd1c39c281",
          887: "8f95b5d80744026f9a3267e696cb9f79",
          907: "b6b4874056e96a48e492d07669a84a6c",
          1054: "e2298a3837b9b316c70236d972e25eac",
          1098: "1b16f8b2c41663dd4a249127868a1f23",
          1242: "a9d0e02f0e493767e53bc3f852149d10",
          1436: "4542fe6d3bc95f1f466da59872e0ee70",
          1604: "d63f48ebcbeba43458e4b3d68ae653af",
          1758: "3b77a22428af4806863d82f18676a1ff",
          1822: "976731f4c7eee499559348df501ac587",
          1828: "0e365274f1b92605193a348431d6a417",
          1868: "6b096a53edab5959d0d6d71c95b313c2",
          2156: "7f286aa8abcf763412e2b58dd049a77b",
          2169: "1ae0eb4a0627ef0b765ceac7912162e0",
          2171: "535bb71669c6232dfb10ddfeab653782",
          2221: "73ac924f123d3b76ad41de56540f3f9c",
          2234: "df57b98f81b80a04dbb318655dff2519",
          2243: "1939ae168afcb6d0ed9b155f5b0085f3",
          2280: "404ad5f5e87de2d702cc15f968bdbc6d",
          2295: "70b6613ec442f34cb2acb8e52150f74c",
          2306: "847c48b996d649b17d6ce6a2f6d45072",
          2347: "3e5ac3e79da5a284acb468e3b6e3d5be",
          2365: "1afa18f2b1c6db5ba81d80e6bba79fc9",
          2398: "7aab575f2575ed965c13fdaf8efe79f2",
          2442: "141b775cc12aad8cd603e8dd380e3281",
          2466: "ddd9c211cc075d59c80aea87ed80d68f",
          2642: "09084fa961db343b12effd736cbcf9f5",
          2649: "ee431194a2c5c31699eef6159a721c73",
          2678: "4efa3654792e5511ed5170df28d4c17e",
          2776: "9dcd1897296d33667f4f36acf90cd44f",
          2864: "828c26d81d94382b8703368064f6a2d9",
          2865: "25a9e76572b944986edb83c137fc600a",
          3034: "47fc5d049c0e5a73fb4abeccdf72884a",
          3117: "a2f17e446a2754c6ea602e633a4fb313",
          3197: "21e115bb89733e236dc74af175da55ce",
          3343: "33ae6b1030885b5b1ea90d31e262436e",
          3370: "2e679f386e7207e7aafd60c69ea2b65b",
          3475: "58f288838b57e56e55f90d32cb612def",
          3486: "67db9a06cbd4e00a56a7fec74a038b18",
          3505: "4a380ad8d8292c60901a4665f460a1c3",
          3571: "d029ad550521cf35fffa0dabf254a9cc",
          3697: "55fd8e7c7311963101745c332ca93146",
          3745: "f5111ba86862dd4fc9a4db4045cc43ad",
          3885: "09c0425aa16ac0c1a730e586437104b6",
          3896: "01001f227b435de116d3e5b0246051f9",
          3941: "207bf6f1d0d71a84bc4391710e0e2eb5",
          4011: "8c78d6d27db3d0a9c8790397ec4f7005",
          4237: "5aa2c264ce508358e30f0b7f82e0e466",
          4528: "d194ccd708b93e3bf316aeeaba9f19c5",
          4578: "f3159bf192cf6cfbbae4e3914313bd68",
          4621: "b923885e661ea98188887fc44c3e42a9",
          4676: "974259c2852dc8ba585f6470de69b5b7",
          4700: "0098d7d4e1dcd7db1f4e2a145df14229",
          4710: "e5a8122fcdeae058bcab4e5ac12bab76",
          4731: "b5edc25b23d4a7bd0c74a502594b6191",
          4799: "0b97efd300337ae4c4bad8564c686116",
          4851: "e8e85065600fd2b1f19179bd61c1feea",
          4861: "37e3ddd1b2a2574b3f0b51455173e50e",
          4913: "567def8612b0b360f5c85830eb8b51eb",
          5018: "affce64de71f02ad571fc0292eed7acd",
          5021: "8a3cbed8f543a22a1a00dc05f6920826",
          5076: "ee738ac717fc53efbb6d083a154757dc",
          5233: "069975bc164f4a555b404377691fff7d",
          5246: "09222663eab3790cb2252416d9f41b7f",
          5259: "6c354aa1dab0892d7d6c815318c2ec84",
          5265: "7361e779896761953d917960526463d0",
          5389: "3ff9f9eb4485d601f801cb956d38be92",
          5415: "3afcac9dc1f247559680ecf780e323bb",
          5498: "5986201ab64abbb9fc27b8435c44d3e9",
          5515: "42c227d7f0e33d27e06bf7f774713bf1",
          5530: "dc590e30d83659e5800d41dcb5748d7c",
          5639: "2f279bf5881f3a1e4886022e4e6c7776",
          5656: "13ba92910b08a36bed0d53d46027eb02",
          5663: "b17e9c822173b6d8c5704c0b3153f111",
          5742: "fb34408680afbc08a73dc12e449ef54d",
          5830: "99cb179c21a04e144740715155fcb489",
          5832: "8517b90faa2cfd4ef23c8898e0f3a2e8",
          5859: "da90b4140ffe29c6349886a4d3500fb8",
          5886: "95f55a21c019d02b7574669818b8bfb5",
          5912: "8ec2f6051cb5b94df89bb49becebfce5",
          5941: "6edce0420ea207252f52969d8bca75b5",
          6088: "31ac3ffaaed2f3812f949fd46a56003e",
          6126: "89e3664ee998ce9c3fdc07ff6752db91",
          6267: "df95b2b1bd42c463e985d96d24ec4aff",
          6280: "472592f9db4ecf9dd27f70f0e827b254",
          6285: "a505eac60e66dc4b7899f74aff29ec4c",
          6361: "6c07990a5bf707563935b4f3c7096894",
          6471: "d306a1687693daa90a81f1ccd8acdddf",
          6491: "ae0493821fc78277acec2b41d1fe18ca",
          6664: "b2fb0987b24b5a03db3114124c134b9f",
          6707: "1ae1da103b84abcab6eebfef307a227d",
          6827: "7828f9a334c20cc5b76ee2ea4066e095",
          6879: "cc78e26a436c9c71a9d62789ade302cb",
          6891: "9bf2db30a3fc752795fedc3970cb8609",
          6997: "2543ea18e7f87dd792867f53b6dbe072",
          7010: "3ad880d6a58b6ebd3c95e7eb67dbf90c",
          7073: "308ebf62a7cbec1893144ac0b8d11917",
          7145: "994d644016439ce432bf5c3a72338f49",
          7407: "c36ef7857eeeaf1db9c6a4c72eb3e45f",
          7436: "5b57f8211e5d6eef86454c049a9c6233",
          7452: "1548c415536c45a3e95187ff6d214d3e",
          7453: "1d5fe73eac54580d47be5bb1efa12fdc",
          7780: "0d4f4126a37e67946043b7e63d24e090",
          7896: "5a15dbcacf40bb3b44629f613105e79b",
          7921: "ebaaa290618896342f8aeb0cffdbcfbb",
          7970: "91d6de84e456c3d3baccda033907f611",
          8068: "48b53e37f114fe7f4e7df3d8e4e67c49",
          8113: "c0cfb23b2b8e0436882754a3d40557e7",
          8240: "9b08369012e8830117f54b508d75bf9a",
          8272: "1ab2de9e9827b82fc6811d30369cf515",
          8325: "be2695646441388854d6bfdbfb984e81",
          8329: "8f6259ea9eb2372af341a18b32a338c6",
          8379: "7c9fbe32836d20cc521bc02cd4449e28",
          8391: "5f1be364843ec1cbaec2aa5430c27daa",
          8431: "bfc9e4a1fc59266c1c58d5d8f39e32c1",
          8659: "0b44021516623e18443e529207c47689",
          8755: "d2fdaa498fabdf4da6237ea978281e89",
          8845: "e2946ad6305273315abfeb963f5f56e1",
          8872: "e296f434996510ac05a3c793df679235",
          8880: "0f59172d94d6ef4f78a52b41722c3a1d",
          8938: "085716f2b87d11571faded6e37efde59",
          8970: "1e40aa20f14182e4469d6ae2c76984af",
          9022: "9dd95b28f471941afcd325e97de3bb15",
          9028: "72e4117e0528b0cb8aa5d49cd537e840",
          9055: "75f7104b4fae8b475831b26b71671e32",
          9126: "f60443a4a2a678d220227c66da02617d",
          9377: "779d716062e8f6e8fc99f4e19008ac47",
          9447: "6f8066a573b889724d9e1adc0bf1cf41",
          9511: "332eb36426e1d8e3e750658247a9df4a",
          9512: "f502e92fcbc259a8dd531fb8896d074b",
          9587: "ba77b01c4c5c1b35eff3f23a22827327",
          9615: "2b3a5cf03b1a4a58262cec130cc37a3f",
          9627: "c674d0870240ce881d725873bc63e3e2",
          9719: "c875b9cad87829b62e2d936fe9bf6508",
          9757: "c9b2a0c21ffec89468e0d629329b4d27",
          9760: "0db9bfd29e642bb2c2e406664e7b1b60",
          9936: "27330a55623e3bd40b2156a7de4aeee5",
          9990: "6a0d45cd9a098397005302bce3a455cc"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          1604: "8ecdc952947e841c784c976ff37ede69",
          1913: "ed8a18e4768c2cfb55476973c2d36ae0",
          6707: "968ae2db6a67e403cf448ff45ed20cf9",
          6827: "ed8a18e4768c2cfb55476973c2d36ae0",
          7921: "4492b9aad62acd15dadd7faab2e45258",
          8379: "1e4086942ee78c9a7c98998f1e91ef6b"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-header:", b.l = (e, a, d, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                var l = n[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + d) {
                  f = l;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", t + d), f.src = e), r[e] = [a];
            var s = (a, d) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach(e => e(d)), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach(e => {
            var d = b.R;
            d || (d = []);
            var r = f[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, d, c, f, o, n) => {
                  try {
                    var b = e(d, c);
                    if (!b || !b.then) return o(b, f, n);
                    var i = b.then(e => o(e, f), t);
                    if (!n) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => c(a.get, r[1], d, 0, n, t),
                n = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, r[2], 0, 0, (e, a, d) => e ? c(b.I, r[0], 0, e, o, d) : t(), 1)
            }
          })
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              b.o(b.S, d) || (b.S[d] = {});
              var c = b.S[d],
                f = "@rockstargames/modules-core-header",
                o = (e, a, d, r) => {
                  var t = c[e] = c[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : f > o.from)) && (t[a] = {
                    get: d,
                    from: f,
                    eager: !!r
                  })
                },
                n = [];
              switch (d) {
                case "default":
                  o("@foundry-int/utils", "5.13.1", () => Promise.all([b.e(2280), b.e(4572)]).then(() => () => b(2280))), o("@foundry/icons", "5.13.1", () => Promise.all([b.e(5021), b.e(1127), b.e(3694), b.e(4836), b.e(6827)]).then(() => () => b(45021))), o("@radix-ui/react-accordion", "1.2.12", () => Promise.all([b.e(1127), b.e(8429), b.e(1222), b.e(889), b.e(710)]).then(() => () => b(90710))), o("@radix-ui/react-dialog", "1.1.11", () => Promise.all([b.e(3571), b.e(1127), b.e(8429), b.e(889), b.e(9690), b.e(76), b.e(1208), b.e(2295)]).then(() => () => b(53571))), o("@radix-ui/react-dialog", "1.1.15", () => Promise.all([b.e(887), b.e(1127), b.e(8429), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(6491)]).then(() => () => b(96491))), o("@radix-ui/react-focus-scope", "1.1.4", () => Promise.all([b.e(1127), b.e(8429), b.e(76), b.e(5886)]).then(() => () => b(35886))), o("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([b.e(1127), b.e(8429), b.e(1222), b.e(5656)]).then(() => () => b(25656))), o("@radix-ui/react-id", "1.1.1", () => Promise.all([b.e(1127), b.e(6126)]).then(() => () => b(86126))), o("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([b.e(887), b.e(9511), b.e(1127), b.e(8429), b.e(1222), b.e(889), b.e(3694), b.e(4676)]).then(() => () => b(69511))), o("@radix-ui/react-popover", "1.1.15", () => Promise.all([b.e(887), b.e(7145), b.e(1127), b.e(8429), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(395)]).then(() => () => b(2776))), o("@radix-ui/react-portal", "1.1.6", () => Promise.all([b.e(1127), b.e(8429), b.e(76), b.e(5515)]).then(() => () => b(65515))), o("@radix-ui/react-portal", "1.1.9", () => Promise.all([b.e(1127), b.e(8429), b.e(1222), b.e(61)]).then(() => () => b(80061))), o("@radix-ui/react-slot", "1.2.0", () => Promise.all([b.e(1127), b.e(3117)]).then(() => () => b(13117))), o("@radix-ui/react-slot", "1.2.3", () => Promise.all([b.e(1127), b.e(9447)]).then(() => () => b(39447))), o("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([b.e(1127), b.e(2865)]).then(() => () => b(22865))), o("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([b.e(1127), b.e(8429), b.e(1222), b.e(9055)]).then(() => () => b(69055))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([b.e(9512), b.e(9587), b.e(1127), b.e(8240)]).then(() => () => b(12841))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([b.e(4237), b.e(8068), b.e(1127), b.e(6088), b.e(5966), b.e(8113)]).then(() => () => b(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([b.e(4237), b.e(450), b.e(1127), b.e(6088), b.e(1788), b.e(5941)]).then(() => () => b(89757))), o("clsx", "2.1.1", () => b.e(439).then(() => () => b(10439))), o("framer-motion", "7.10.3", () => Promise.all([b.e(5912), b.e(1127), b.e(2649)]).then(() => () => b(75912))), o("gsap", "3.12.5", () => b.e(9719).then(() => () => b(79719))), o("lodash", "4.17.21", () => b.e(5076).then(() => () => b(15076))), o("react-dom", "18.3.1", () => Promise.all([b.e(1098), b.e(1127)]).then(() => () => b(71098))), o("react-remove-scroll", "2.7.1", () => Promise.all([b.e(145), b.e(1127)]).then(() => () => b(80145))), o("react-router-dom", "6.30.1", () => Promise.all([b.e(5389), b.e(1127), b.e(8429)]).then(() => () => b(15389))), o("react", "18.2.0", () => b.e(8659).then(() => () => b(68659))), o("react", "18.3.1", () => b.e(8431).then(() => () => b(48431))), o("spatial-navigation-polyfill", "1.3.1", () => b.e(7780).then(() => () => b(17780)));
                  break;
                case "header":
                  o("@foundry/react", "5.13.1", () => Promise.all([b.e(887), b.e(7145), b.e(9512), b.e(6707), b.e(8379), b.e(1127), b.e(8429), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(3694), b.e(4572), b.e(4836), b.e(6741), b.e(1207)]).then(() => () => b(26707)))
              }
              return e[d] = n.length ? Promise.all(n).then(() => e[d] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = d[1] ? a(d[1]) : [];
              return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
            },
            a = (a, d) => {
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
            },
            d = e => {
              var a = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, r += "u" == (typeof(o = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return r
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : d(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, i, l = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= d.length || "o" == (i = (typeof(b = d[f]))[0])) return !n || ("u" == l ? o > t && !c : "" == l != c);
                  if ("u" == i) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == i)
                      if (o <= t) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (c || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || i < l != c) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, o--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, d) : !u())
              }
              return !!u()
            },
            t = (e, a) => e && b.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, d, r, t, c) {
              var f = b.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, b.S[a], d, !1, t, c)) : e(a, b.S[a], d, r, t, c)
            },
            i = (e, a, d) => d ? d() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = n((e, n, b, l, s, u) => {
              if (!t(n, b)) return i(e, b, u);
              var h = ((e, d, t, c) => {
                var o = c ? f(e[d]) : e[d];
                return (d = Object.keys(o).reduce((e, d) => !r(t, d) || e && !a(e, d) ? e : d, 0)) && o[d]
              })(n, b, s, l);
              return h ? c(h) : u ? u() : void o(((e, a, r, t, c) => {
                var f = e[r];
                return "No satisfying version (" + d(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
              })(n, e, b, s, l))
            }),
            s = n((e, o, n, b, l, s) => {
              if (!t(o, n)) return i(e, n, s);
              var u, h = ((e, d, r) => {
                var t = r ? f(e[d]) : e[d];
                return Object.keys(t).reduce((e, d) => !e || !t[e].loaded && a(e, d) ? d : e, 0)
              })(o, n, b);
              return r(l, h) || (u = ((e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + d(t) + ")")(o, n, h, l), "undefined" != typeof console && console.warn && console.warn(u)), c(o[n][h])
            }),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], () => b.e(8431).then(() => () => b(48431))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => b.e(1098).then(() => () => b(71098))),
              21222: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(1828).then(() => () => b(39447))),
              74406: () => l("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], () => b.e(3745).then(() => () => b(86126))),
              79158: () => l("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 1, 0], () => b.e(5246).then(() => () => b(22865))),
              34902: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => b.e(2442).then(() => () => b(80061))),
              86683: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => b.e(9627).then(() => () => b(25656))),
              63694: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => Promise.all([b.e(8429), b.e(1222), b.e(1436)]).then(() => () => b(69055))),
              4572: () => l("default", "clsx", !1, [1, 2, 1, 1], () => b.e(439).then(() => () => b(10439))),
              81788: () => l("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([b.e(9512), b.e(9587), b.e(5859)]).then(() => () => b(12841))),
              64836: () => l("default", "@foundry-int/utils", !1, [1, 5, 13, 1], () => Promise.all([b.e(2280), b.e(4572)]).then(() => () => b(2280))),
              24780: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => Promise.all([b.e(3571), b.e(9690), b.e(76), b.e(1208)]).then(() => () => b(53571))),
              90058: () => l("default", "@foundry/icons", !1, [1, 5, 13, 1], () => Promise.all([b.e(5021), b.e(1913)]).then(() => () => b(45021))),
              95966: () => l("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([b.e(4237), b.e(450), b.e(6088), b.e(1788), b.e(9757)]).then(() => () => b(89757))),
              2918: () => l("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([b.e(4237), b.e(8068), b.e(6088), b.e(2169)]).then(() => () => b(32169))),
              9046: () => l("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], () => Promise.all([b.e(887), b.e(9511)]).then(() => () => b(69511))),
              19292: () => l("header", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([b.e(887), b.e(7145), b.e(9512), b.e(6707), b.e(9690), b.e(6741)]).then(() => () => b(26707))),
              42638: () => l("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], () => Promise.all([b.e(887), b.e(7145), b.e(9690), b.e(2776)]).then(() => () => b(2776))),
              61339: () => l("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], () => b.e(8329).then(() => () => b(90710))),
              63582: () => l("default", "framer-motion", !1, [1, 7, 5, 1], () => b.e(5912).then(() => () => b(75912))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], () => b.e(8659).then(() => () => b(68659))),
              79952: () => l("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => b.e(7780).then(() => () => b(17780))),
              19690: () => l("default", "react-remove-scroll", !1, [1, 2, 5, 7], () => b.e(145).then(() => () => b(80145))),
              80076: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(5498).then(() => () => b(13117))),
              55856: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => b.e(7896).then(() => () => b(65515))),
              56041: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => b.e(3505).then(() => () => b(35886))),
              9623: () => l("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([b.e(5389), b.e(8429)]).then(() => () => b(15389))),
              16188: () => l("default", "lodash", !1, [1, 4, 17, 21], () => b.e(5076).then(() => () => b(15076))),
              6630: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => b.e(8872).then(() => () => b(96491))),
              42828: () => l("default", "gsap", !1, [4, 3, 12, 5], () => b.e(9719).then(() => () => b(79719)))
            },
            p = {
              76: [80076],
              889: [74406, 79158],
              1127: [71127],
              1207: [24780, 90058],
              1208: [55856, 56041],
              1222: [21222],
              1604: [2918, 9046, 19292, 42638, 61339, 63582, 73579, 79952],
              1788: [81788],
              2372: [34902, 86683],
              3694: [63694],
              4572: [4572],
              4836: [64836],
              5966: [95966],
              6088: [9623, 16188],
              6741: [6630, 42828],
              8429: [18429],
              9690: [19690]
            },
            m = {};
          b.f.consumes = (e, a) => {
            b.o(p, e) && p[e].forEach(e => {
              if (b.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var d = a => {
                  u[e] = 0, b.m[e] = d => {
                    delete b.c[e], d.exports = a()
                  }
                };
                m[e] = !0;
                var r = a => {
                  delete u[e], b.m[e] = d => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var t = h[e]();
                  t.then ? a.push(u[e] = t.then(d).catch(r)) : d(t)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            b.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                1604: 1,
                1913: 1,
                6707: 1,
                6827: 1,
                7921: 1,
                8379: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var r = b.miniCssF(e),
                  t = b.p + r;
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
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = d => {
                    if (c.onerror = c.onload = null, "load" === d.type) r();
                    else {
                      var f = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), t(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
            4295: 0
          };
          b.f.j = (a, d) => {
            var r = b.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(2(07|08|22)|127|788|913)|(23|45)72|(483|596|7)6|3694|6741|8429|889|9690)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((d, t) => r = e[a] = [d, t]);
              d.push(r[2] = t);
              var c = b.p + b.u(a),
                f = new Error;
              b.l(c, d => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, r[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [c, f, o] = d,
                n = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) b.o(f, r) && (b.m[r] = f[r]);
                o && o(b)
              }
              for (a && a(d); n < c.length; n++) t = c[n], b.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), b.nc = void 0, b(93032), b(42029)
      })())
    }
  }
});