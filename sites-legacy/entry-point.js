try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ff43c8ba-00e0-4885-8257-d5731bf81a1d", e._sentryDebugIdIdentifier = "sentry-dbid-ff43c8ba-00e0-4885-8257-d5731bf81a1d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
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
                  "./bootstrap": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(4866), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(8437)]).then((() => () => t(58437))),
                  "./index": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(4866), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(9741)]).then((() => () => t(19741))),
                  "./site-routes/Bully": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(4866), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(392), t.e(6019)]).then((() => () => t(86019))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(4866), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(392), t.e(9171)]).then((() => () => t(99171))),
                  "./tina": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(4866), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(392)]).then((() => () => t(392)))
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
          68: "46957b70554453a92a377411458d2d1b",
          131: "a50caf7b7493806e7955020dd521ba0f",
          173: "442c3bf0f65c54648d7cf43136562774",
          275: "f0804a39789ef3ffb42f72064ac6b59e",
          278: "0d68ed1b65af90da177e84bb1c3bd11e",
          299: "a2bb790ed19cd83be6e8d629230f2b07",
          314: "5a3e6b977afda1d98c0a09cadd3ec1ea",
          392: "38cabef0768c16bee4a08f331da93da3",
          439: "18a2e46a40c107859a708c364fd6c763",
          601: "8bead2567dfcdab4a5cf1f3759b92ed4",
          662: "da2435857da6f6bfebd9e83fad37bbcf",
          824: "0518ff0b4b09c395d7c0305ed7c24ac7",
          907: "7f555db7e16b00dc8dc252a0aeedf544",
          1054: "f150ed7ff9ae83d448063e03aa84c5a1",
          1057: "087a3f7ae9d2464559f640b65785e2bc",
          1098: "fed9f82f8be1a35094eb5f7ba562630d",
          1242: "94f7add4fb778ae197a4debf29f9325c",
          1277: "7ece8e6ea4cb0d86458997aa85f0c059",
          1673: "6188660e5524c2321b6e114349be1a8d",
          1758: "117e3af79c4b0b84121515e7a112ce5e",
          1785: "5d2980bf2a979f2795062f1d7eae392d",
          1822: "1bfa7223917667306c1d5d2e0bfe5adc",
          1840: "0f3f4d536e717536623e3546e2e9ccf9",
          1868: "98388b419e1b542d3ea7c5fca855d7e2",
          1932: "e71b1b4146f30532c20f67d666c1d1f7",
          2148: "499c3a8152d25501bc56057dae4d1a67",
          2156: "54990768172d416908f4f6c48c1bb228",
          2169: "28e47886dc5700accb61d1f5d3eb958b",
          2171: "b1a942c974b6ba0e9245b5cb49053ac2",
          2221: "ec83a81de5877b696f3511d10f7b5114",
          2234: "d047694dbe6cbd92ce9b39c8af70c76d",
          2243: "29e6b817554fe69b04038b0416da6e25",
          2293: "f4a865003ed61926ff8c8752c98d0dfb",
          2306: "2b13ea982bac76c7d42bb1544ed180b0",
          2323: "674507b27144e5a0646926784257d142",
          2347: "2e473dcf642967699aae9112041b1ea6",
          2365: "711689f317b64255d97a17c102293f44",
          2368: "89fa5f59e8f47dcdeeb7999c72ad6cf3",
          2398: "7aace5998f634277efa7b7ea701be949",
          2466: "25c7ca4e512f2044fcb26d8da43dfc38",
          2642: "c13096621cf11e1c9ac8f11c8b353590",
          2678: "ccca8419f218f398f59235c378ad013e",
          2864: "a8cd6aed9d1c4f571cae4d8b3c03c5dc",
          3034: "4ae68402c24cdc73fcffbfa01dd20f2f",
          3197: "51816ff613b075bd50e861fbeee58e17",
          3343: "41db16d5e08779ba69164a63b59ad972",
          3370: "15a76150a5e0601fbfa0c1061304859d",
          3421: "997ad9dc0fe3c3c62560431c1b0381ec",
          3438: "88520cf8a516478cbdc5df58e3c25ff5",
          3475: "44e5a1f347c022d37f13dce04596ee46",
          3486: "25a7bab90966491f9f746724f5c709c1",
          3697: "fb8c3ce3d26a03f77f208765f8ac6d24",
          3885: "f6f284fef6f827e64865881182b65315",
          3896: "79587f314a40346ad3be60acd2159fbc",
          3941: "6ab0e4ca9079b0f04b5f888c780b3df8",
          4011: "345c175db8b9e8bcdbb98b6dccbe2a68",
          4528: "47e0cb1a0ca07472d7c798c7b784ecbb",
          4550: "a4c5e0634f515740d419a735a47bbb92",
          4578: "6169eb70815f363773aa0a8b1955eff2",
          4621: "18bd62ed6db43e96c77b20a4103d78bd",
          4700: "87717e3e0596de17380ba71c0bf697e9",
          4710: "07541abd58c691fa595f5129c28d9e18",
          4731: "655880f1b9233841e3023d59b1b86b4c",
          4799: "30aebf007f7383e6fa2c5289a18d55d0",
          4851: "1504cdb569f2d10c790d925521910fa2",
          4861: "d20c8ca4bdfb7c7364172e9379148ee6",
          4866: "934f2b4cb180529c88590deec4336d4e",
          4913: "6ae84c4f6d17ed250887420879e5c0d8",
          5018: "16c0683da5b8dc07a1b7de24b73ca4f8",
          5076: "bc6f9cb94bcf669bf65a042c50ea3888",
          5117: "f26eb0e40fbca1d3845e882a7e8e37ec",
          5233: "080ad58eb6d9d4d326b0e2083e6a471b",
          5259: "4d480e2172f2d634cf4ddfbcaa9c924e",
          5265: "39b0d99a29da7fed829cc2216f3c08c1",
          5389: "5b9ca66cab174c785291ee7eef1442a3",
          5415: "60d2f5d216d4a58dde083584c050156b",
          5530: "e7fdd232ccc4a90b3c5fe1064752a891",
          5559: "b878b35040b1a8d148f2209dc4692968",
          5639: "d711b39fe0c63f3dc2d5d6fc245fbc3d",
          5663: "948fb6105ebe437a255a6fe3ffd0472e",
          5742: "7a84bec6b11b6bf9a3d212f950a77c93",
          5802: "5d4dc9a56e0165c2c21496b5db303550",
          5830: "a174bb5e9da2f485a485f87a11e55a03",
          5832: "9d5f71deb88136bceca79f5356bcbddf",
          5859: "e9bd5056a0caaaf9b2557b75252b9b10",
          5912: "0a14c7985206e293d7467376d3f67609",
          5997: "0a6edcb105a12039d7dfa80c11960a1f",
          6019: "cf7e6c7587d7ca512e584dd4f80cd6fd",
          6267: "74659e491239744313062dbf2f61cf3b",
          6280: "24b58b53763bc5261d5b9b2003f0b79c",
          6285: "12182ee1016948d5f0f41e8da00c63f2",
          6321: "5db9903d06236ade2ebdc2ac5bae24ed",
          6327: "60b52249ccfab114af382f80f5dfd516",
          6361: "ba2bb8f77360dea4cfb91f3fd409518b",
          6471: "2a079bd572614cf6903f16484c243766",
          6664: "e1c91e5f9e3269a012db4d22d5b9cbc6",
          6703: "d9ec1c9a1cbd97078aff1cebbbe1c7d3",
          6879: "5981ea1182fb317652d77cdb6e419f09",
          6891: "5ac6a6c382802b705575ccb010ae94b9",
          6997: "b1a67a8283ec89dd15508ab006a45f53",
          7010: "5cf24af4d84a779def6d511d93714a95",
          7073: "e7278b8f7df8d0f02ec8824d865ff508",
          7407: "ce4999a7171103d75820c2a21d9f5743",
          7436: "86be69c3631fc8c0e03195e0c158a1e2",
          7452: "1b17d318b1c4caa975cab9159098f171",
          7453: "fe947c25a672ace8e260c72caebb834c",
          7465: "0759460ccb97f2312b37962761bad427",
          7970: "e2c3599cfaf2d2608dc29590cdd38aa2",
          8068: "540bb563d6a7e7b60921faef3b7119c1",
          8240: "2fa73924231467efb03cea27d95a43ae",
          8272: "1a33f2b3f8136b8302f816f44343b91b",
          8325: "20784f98709fa6fabfeb69173c804b09",
          8391: "bb7e50655b14a796b8c39911acf7dbb6",
          8431: "885aafe7ad0cb4809c3af339dddef868",
          8437: "4ec842ce44c761801a5db2d57ec408df",
          8659: "f1c1e794848e93f7bac7f80cfd11c209",
          8665: "ee472a3e48bf8e40aebfe22996e55986",
          8702: "748877c1b217babfa81d7ed2666e58c2",
          8708: "cd4ce6d337e84170db13f5fc6cc58a7c",
          8755: "2d821df5342d09bd157c5a947f223878",
          8845: "1131e1e0b7c69cc4028e345c5230a0e8",
          8880: "53c36ccc1bd28636f9aa337ff237a4ea",
          8938: "255c6163f5843579ea212322ed0150f6",
          8970: "0340fedc81f6326125d4af326370b311",
          9022: "c261df672bbfe1aa173b959c06532171",
          9028: "61d1957fe094cba7c15e975687143017",
          9126: "bbdec2d6f452c09e2d44f5d602325d47",
          9171: "3c152a9cd1b111b443aa4b8cef5a8f72",
          9377: "d0c1090ae28e09813d8a8a7ae33d9346",
          9587: "7d98a0317fc96c308ec697cee8774213",
          9615: "5e0543f6f862b7bcf9ffa9e023725d4c",
          9741: "a9c646955000647b47595608bace08f5",
          9760: "6163625bf273d0c6ac93710f16b54595",
          9936: "e267eab5ae5279595c068f5051a5c92f",
          9987: "94a2cc6fa1bb3ef9a66560d29dcae946",
          9990: "c70a7716e8e16ed670af9f05ef4079b8"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          275: "3fddd0403e01cb68cecd6b1afe3e451b",
          1057: "82b8e41eb90eae7db3adfb9fff54d045",
          1785: "e70ba27106c58a2902fdf3deb822d60f",
          3438: "82b8e41eb90eae7db3adfb9fff54d045",
          4866: "8aec1316abf6cadb8ae508f290a01a76",
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
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then((() => () => i(12841))))), n("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(1788), i.e(2918), i.e(2440), i.e(1277), i.e(1785)]).then((() => () => i(21375))))), n("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(1932), i.e(2229), i.e(1788), i.e(2918), i.e(2440), i.e(9458), i.e(9736), i.e(2368)]).then((() => () => i(32368))))), n("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(2229), i.e(9623), i.e(5966), i.e(2148), i.e(4550)]).then((() => () => i(32169))))), n("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(5076), i.e(5117), i.e(2229), i.e(5966), i.e(1788), i.e(4853), i.e(2918), i.e(2323), i.e(1057)]).then((() => () => i(99747))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(5076), i.e(2293), i.e(6703), i.e(5997), i.e(2229), i.e(9623), i.e(1788), i.e(2148), i.e(6565), i.e(8702)]).then((() => () => i(58702))))), n("clsx", "2.1.1", (() => i.e(439).then((() => () => i(10439))))), n("focus-trap-react", "10.3.1", (() => Promise.all([i.e(1673), i.e(2229), i.e(7145)]).then((() => () => i(51673))))), n("framer-motion", "10.18.0", (() => Promise.all([i.e(1840), i.e(2229)]).then((() => () => i(91840))))), n("framer-motion", "10.18.0", (() => Promise.all([i.e(5559), i.e(2229)]).then((() => () => i(65559))))), n("framer-motion", "7.10.3", (() => Promise.all([i.e(5912), i.e(2229)]).then((() => () => i(75912))))), n("graphql", "16.11.0", (() => i.e(601).then((() => () => i(30601))))), n("prop-types", "15.8.1", (() => i.e(7465).then((() => () => i(97465))))), n("react-dom", "18.3.1", (() => Promise.all([i.e(1098), i.e(2229)]).then((() => () => i(71098))))), n("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(3421)]).then((() => () => i(83421))))), n("react-intersection-observer", "9.16.0", (() => Promise.all([i.e(2229), i.e(6327)]).then((() => () => i(76327))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then((() => () => i(15389))))), n("react", "18.2.0", (() => i.e(8659).then((() => () => i(68659))))), n("react", "18.3.1", (() => i.e(8431).then((() => () => i(48431))))), (() => {
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
              2918: () => f("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(9623), i.e(5966), i.e(2148), i.e(2169)]).then((() => () => i(32169))))),
              16565: () => f("default", "graphql", !1, [1, 16, 9, 0], (() => i.e(601).then((() => () => i(30601))))),
              92440: () => f("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(5117), i.e(5966), i.e(4853), i.e(2323), i.e(3438)]).then((() => () => i(99747))))),
              4572: () => f("default", "clsx", !1, [1, 2, 1, 1], (() => i.e(439).then((() => () => i(10439))))),
              90660: () => f("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(5912).then((() => () => i(75912))))),
              61128: () => f("default", "react-intersection-observer", !1, [1, 9, 16, 0], (() => i.e(8708).then((() => () => i(76327))))),
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
              9458: [61128, 61913],
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
                4866: 1,
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
              else if (/^(2(229|440|918)|9(458|623|736)|1788|4853|5966|6565|7145)$/.test(a)) e[a] = 0;
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