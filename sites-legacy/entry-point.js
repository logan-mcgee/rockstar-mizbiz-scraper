try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6a6c12e0-4778-4aba-8201-741d99cafc7a", e._sentryDebugIdIdentifier = "sentry-dbid-6a6c12e0-4778-4aba-8201-741d99cafc7a")
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
                  "./bootstrap": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(7021), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(8387), r.e(8437)]).then(() => () => r(58437)),
                  "./index": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(7021), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(8387), r.e(9741)]).then(() => () => r(19741)),
                  "./site-routes/Bully": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(7021), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(8387), r.e(392), r.e(6019)]).then(() => () => r(86019)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(7021), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(8387), r.e(392), r.e(9171)]).then(() => () => r(99171)),
                  "./tina": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(7021), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(8387), r.e(392)]).then(() => () => r(392))
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
          68: "93eee992b9eb8a1f9b45b5b50b61696e",
          131: "41bd13dc762424d68917426940a8f747",
          173: "32b6ff9383ed27c1f1ac03f44f7bf994",
          278: "4a399bfdce480812b0283ad23785fd93",
          299: "7e792666f65b7d27da538898307c4940",
          314: "a59d092fa8be9c6ac14daad52104df27",
          392: "d2ec40ce16e8c6867dd7d74fef8331cc",
          439: "36189399fc5e9d637c66cf082f0d82dc",
          601: "fdce1f0e8724518889fa17d08967e59c",
          662: "1d03a0173325a9fd04686ff292bd59a9",
          824: "06537e3e4b56eb14ae6008488a3bbf90",
          907: "5838d35be720058ae2114ce1d428559a",
          1054: "04271604f5ea435f88affb81c9493a31",
          1057: "6c43815403da207ed6740d80f35b4dee",
          1098: "62a8c323b5d7987141d465d350c1f1ca",
          1242: "05472c0a47044f55a7acbd7e6b1b68c3",
          1277: "474d5e43bda6346dcff896df71499500",
          1673: "c966c3cd73c33287cce243808335172c",
          1758: "84edc15b55df81d911b5343ad63b0fac",
          1785: "39150bddc6b9d725c9c23d9ec3dbb4d7",
          1822: "4dfbbfb2cd05d2642aa8efd4023519e6",
          1840: "5c7590adc5ff2addeb5b8d7390474f74",
          1868: "533a0e557cd8dba38346ae0abac843ce",
          2156: "f9fe8ea94de3b8917b529a8e5ae2ce68",
          2169: "1f744302b4b2557fd1805ec85761db69",
          2171: "10f43ab6b9c7df4fb0b9b8b648ce726f",
          2221: "faa0e104846de69c1d1840df9c170924",
          2234: "c98b9486a80f8897523992c4f392abe4",
          2243: "bfc6486332cbb2a8a7756fc65d362606",
          2293: "e02a7138224246b77db01150e8f4007d",
          2306: "dce336a54b333ab24e38da1cb53e6047",
          2323: "9ca89bacab0c0eb7ec5cf2195b205d15",
          2347: "2b472578b0a5409fb6be45b72bc2999e",
          2365: "b78b4b9224c2b417aea45c08e0813f26",
          2368: "2c15296c36a3255fa35e277466e1d958",
          2398: "5d8e75891ad76013c01c7bed3e5db4f0",
          2466: "8d7d922b62e741820b6c4906c727fb67",
          2642: "c433a97f25bb7e37ac7566a2e53a8872",
          2678: "fbb357c4782d9328c9c7a2cc7dbf6f5d",
          2864: "77e3c2636d6ff8faa3c8d8d1bfd158d3",
          3034: "0805ec9e8ca4e95fb20a84366d2bde38",
          3197: "d02da439cb53802be816238d41509a66",
          3343: "9c16df751d2c8243f280af0496f930ec",
          3370: "1ce69ec56f834ed11dfbb0aa9efd0244",
          3438: "3b865ec49eec40a89020a9965120cd00",
          3475: "f41c5664b4c1dca1916e1d96b0ad39bf",
          3486: "ca75cfbe4ed9dde880aefc19802b938c",
          3697: "27b1e15cc9743255cfbcdf9787d89776",
          3885: "dca21e8e736d5f2eef26c0719de5bd79",
          3896: "4787e321bd96a05e879b7d98162a18cb",
          3941: "89e9625cc8dd7df3c62f8abbfc16c19f",
          4011: "3dbecf2123848027e8e45588216a0112",
          4528: "d6ef0270d0436a564288f34d9985aded",
          4550: "c645e582075d59df98a3dba3e1d63c37",
          4578: "e24f8c756bb2e5980822efd4a40240dd",
          4621: "a7ffa4d81bdec43c350ff01fdbbcb48c",
          4700: "8504121ecadbacbb7381e338a509833f",
          4710: "00cbf174f82460f6f61beb4c9727a141",
          4731: "076fe0c5602f3b247084b6407aef7179",
          4799: "17a1cba3013330e99484cfb90b081968",
          4851: "8ce3968757c220f0fd924dc493a2b5c0",
          4861: "4ed3ee7bc47f3dc2e9c9f086e70f2b16",
          4913: "38b8e99cb0e3d10e383acd6655f7b8ca",
          5018: "53d942b17779b4cde8c0465ec2cb8215",
          5076: "4588cb7e5a572ce8ae90c9274c0f7928",
          5117: "8005ddbe1e856b8167e052f83eabbc36",
          5233: "c000150337dc6e74657fe685f5fc7aa4",
          5259: "2e20f24e85bef937e1ddcc3889caf044",
          5265: "c1baeb5009b6933b97aa0775dff42c3b",
          5389: "f8fa7c865e2cf2e1482b707ae0c77335",
          5415: "dbea03190d03ebe430a617c642c78347",
          5530: "d8426076383b4bcea75a079412db3c11",
          5559: "02273e679a0e5de1f2b3554575c1d5a7",
          5639: "148228ae241bddaa0bfd086c6b8b988d",
          5663: "002aecf8d082b8f62daef93e18b12cbc",
          5742: "4501723fe5e328d3a728fa091e9810df",
          5830: "0e2864cf48e265a0db15005f09bce9a4",
          5832: "3ccbcfe9b2341114100c081c54c6eae2",
          5859: "2fa329a9dd9112b489566ce8fe44598c",
          5912: "cf786fb44ebab4c90cf1620e6c70af6b",
          5997: "bf55ecd9972d998080411408dc2a7425",
          6019: "e5b5dac0d94cc6007eb192cf228ed541",
          6088: "32c390ef4cb78d4b66ce31f276e64ee5",
          6266: "88f8e44aea38f082ee3435704aff44b0",
          6267: "8c5aa7f60bfc22a2ea0e61b9efc528cf",
          6280: "62f9cb0aa989a8f7902b8ce028ab82dd",
          6285: "7aad6d043efb6abe9ecb1541fb790bfa",
          6321: "97e2ce8ae09f5bff067ec6dcc00191d8",
          6327: "517ca79003908d514a4212d841ee6698",
          6361: "7aadf9ab39fa5ab32b09700255d46870",
          6471: "e3ef4453c5dc4188fc1ee98c14e64054",
          6664: "1e12979ab5a5988da3d915b517783da2",
          6879: "3945aa16c6f7499df83529b09db7584f",
          6891: "458680b48e55e6724fe2060f90b6c98f",
          6997: "ebe1f021217e9b1d1a17fdd6c2f72c81",
          7010: "e6b85320294e1a17d49aa2fc23434f5e",
          7021: "cb08fe9bfb8117882c20037774805843",
          7073: "4d37c416e264fcac002ec8cb33ea70db",
          7180: "f9c06441536c0fdebd3433a6cdce2f8a",
          7407: "09b9b64fc612d00597d02488e1575700",
          7436: "c83532c73650b264044527f6bbc00775",
          7452: "9bad83d856b218f0a77feb407c6c7db7",
          7453: "f6eb0addadab5054e3c3033c7264c85a",
          7465: "61f32c94a6f5d95b62b1583313dacdf3",
          7970: "a4f2cd5551cb2a9229f8e2da4b9ba369",
          8068: "85ff013dd4c76a02ea087407fdae51d5",
          8240: "c40c569dd04959f2d94b0f5d9e594387",
          8272: "1f6ae6278f832d5d8b58d0e6b6117fd2",
          8325: "7f40c19f9cb161a06eadbe4b6ed777f6",
          8387: "59089736dcd2618c077d9479c823f26b",
          8391: "79e72a61d6f05eda4225653dce6a0001",
          8431: "1ee061656e4f8af8478b30fd902830cd",
          8437: "2fa3416276b839040c43579566b0877d",
          8659: "8e36ca66df00035a4b47025cda05d90a",
          8665: "6ea8875eac074ca6503dd90bb8073f2b",
          8702: "56d4901b5ca952750ca7943403ec14bc",
          8708: "d22928c1c1c29ff98437d691e7891170",
          8755: "476ecb2fa170c2bb8d38a395c85928d4",
          8845: "b624493d8f12b3aa138d429a84ac8803",
          8880: "f6259b95190bc3fbc066176c26ac9c39",
          8938: "a9edf762d7d04f46620f2f889e618604",
          8970: "8832bc64ae7afa103e9749ec6fb26318",
          9022: "4b69419a260d152860c69fe9ef5ba27b",
          9028: "b750c93abe5b9b9619e8a5021b807d3f",
          9126: "a367ecfec07923e8d97d2f28f1d6162a",
          9171: "1afc81c2eb222ec5e4cc9937f403b4ef",
          9377: "c3602a442d2d64c8ac05e80105c84c81",
          9587: "7ff5f812c5de79aeccd2ed5ab3d69f0c",
          9615: "839d5e49f4c4c7eea0420473d9f60b4a",
          9741: "43e47c1ed39efcd97c1454ff6f6f2c60",
          9760: "7b04314af689b4c729aecc5638efb922",
          9936: "f88a3f78a0fc785943233e84c85cb854",
          9987: "bf7d957a8e576b911a622020fbdcd4e4",
          9990: "d4e05b5821d2a4aa56a9aabc939975d5"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1057: "e11267b2b9a024fdab4347cb9ada8f14",
          1785: "bde1c4e0b23cbfd27b8e58c3e9b9719f",
          3438: "e11267b2b9a024fdab4347cb9ada8f14",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          7021: "5d55dc4d53fe506b7afd60db683268bb",
          8387: "c07cc73edea2826cfa456864a3538775",
          8437: "ece3a695297467904302d480ff424957",
          8665: "cd135931d3ddd0c8c915bde00523e2a1",
          9171: "52e55b769351b6e3f1602fe5d2baacd1",
          9736: "81bb14ac88f3a651365e4427a5b9bac9"
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
          392: [17523],
          8387: [31879]
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
              1277: [4572, 90660],
              1788: [81788],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              5966: [95966],
              6565: [16565],
              7145: [57145],
              8387: [2765, 82849, 84590, 87330],
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
                1057: 1,
                1785: 1,
                3438: 1,
                6019: 1,
                7021: 1,
                8387: 1,
                8437: 1,
                8665: 1,
                9171: 1,
                9736: 1
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