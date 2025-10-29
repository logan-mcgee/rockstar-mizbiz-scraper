try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "52205636-1c8b-4f0d-9224-5c8d26fa55ea", e._sentryDebugIdIdentifier = "sentry-dbid-52205636-1c8b-4f0d-9224-5c8d26fa55ea")
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
        var e, r, d, c, f, n, o = {
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
                  "./bootstrap": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(2858), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(8437)]).then((() => () => t(58437))),
                  "./index": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(2858), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(9741)]).then((() => () => t(19741))),
                  "./site-routes/Bully": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(2858), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(392), t.e(6019)]).then((() => () => t(86019))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(2858), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(392), t.e(9171)]).then((() => () => t(99171))),
                  "./tina": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(2858), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(2148), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(392)]).then((() => () => t(392)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => c
              })
            },
            77027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, c = r.length; d !== a && c >= 0;) "/" === r[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + f
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
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(d, c), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          68: "98bfbf99ef12cb0bf3bf3538150d8eac",
          131: "666fce85e3c99b80625e32cfacf2b5af",
          173: "85a6c27def6ed052efce043d4f2b9e4e",
          275: "df0bbc3060c50f764e7a0bee90a252bf",
          278: "d4caf3478a27c2a38e444c5c73f8f880",
          299: "7941810afe66529cbd8f4a5ea4d75c83",
          314: "1ed31c2b25cb04864d676b2fa8567177",
          392: "d2acf1138bf38e42b3923731d67e9d4d",
          439: "8847b5587184069e738401d12a6d99b3",
          601: "c03dcbc990e27047bc16b766eac002b9",
          662: "538897315ce46d0437ca0bad568d92b6",
          824: "e66e6ccb5b8ffa711cbc847db735748d",
          907: "f8bd4d386ac2bd185f2b56c763dc91ed",
          1054: "984512d65e398dc24e310c723df1d212",
          1057: "078ad3f8b6604047541998631cba6a13",
          1098: "573590129c1713848d5f1acf829d5daf",
          1242: "bf47ddc642539fea6d7c2b859e6aac4e",
          1277: "abd24792fd03f73fe3e5a4a0b34faf2a",
          1673: "c2c7902a02012c19cf0c15c7a3a7818b",
          1758: "89fecae307f65e1ba127c5263956a973",
          1785: "011b4133e5b3e0bc0738b1f1968714c4",
          1822: "1cd1f991cd59133d8e4fdbb6e2316aaa",
          1840: "6253ca6e1920737d157746e280144a55",
          1868: "6beb1c9eb1639c26fc741398b6c4bfb0",
          1932: "05f88450998b2505bacf2a7186f57253",
          2148: "2aa7894ce4ffa228a7c2b6e0f6078c67",
          2156: "f80e6029adb7bbbc1f135b154c6bb349",
          2169: "d438160ae5de19641b34854a48a1bca0",
          2171: "2df24a30f78568cc54199ee636f189c9",
          2221: "a7444bf44b465673044a1ca6150f7ecb",
          2234: "4e68da1fab2b36c0acf5be4769668055",
          2243: "9bd526ec3eeabb3126821f43327419f8",
          2293: "79fef23b17bf68ef82597e5dc91151e5",
          2306: "8bd78eacba0c1f3a9d26afef9c821ad5",
          2323: "4ee35df62a3e5aa140dbe963815d88ef",
          2347: "27aeedad3605710b5dd6818f7937139b",
          2365: "e6efd577ef78fe4743fe51afb4b87be7",
          2368: "0f98f286037212d9d8b6022ef9aba258",
          2398: "da843547ab6f23de4a43f3b238445a04",
          2466: "ab8ffab6e0868f214376a9dc19e5a619",
          2642: "864d3d96be316981195f05180d033aec",
          2678: "595935bea5918405f124d39ce8d505df",
          2858: "e126afc0e8e52d44e83cd40412b9bdef",
          2864: "ce1b16afd5fcd6d37576d9d6a47d471c",
          3034: "6b4d6126a5d255006cb1db7a4f95ff4e",
          3197: "d2b28b683ab6741e13a1658ecf84fb3f",
          3343: "1f2586ca13ec7b9eaf619538dbfb2a6a",
          3370: "5267ea28a9a200d764b3a8f5c2d842bc",
          3421: "668a72d897fa1ceb81891b9a488b7f2d",
          3438: "96769ef17dad383cd8d011c3f84258e0",
          3475: "80bd3ca497f403e4ed23447fc03b0e44",
          3486: "3ef1e356032526b64a8c65d289900d1d",
          3697: "7df1d93d9617a10749befaaad90bebf8",
          3885: "7ad27d9c4c6079002ab844afbee718e8",
          3896: "1917f4d1b38141edc01de1a0b549a3d4",
          3941: "26fe2a7f939555e4791c81ee359da31e",
          4011: "25b68d203c28e0cfd9758881c5568125",
          4528: "702af3335ef5b427181dd1c8609d28d7",
          4550: "10484873a3d0ecbc62c85252f3ce287e",
          4578: "b252bbdf64fe05ed125b05bef993935f",
          4621: "cb5972e25977013aede939a602c44d09",
          4700: "01de30e2c872d05443ca53bb05d697ba",
          4710: "f44b43272eae86192a5290cbc3bd36da",
          4731: "fe6740dddd0c941a9f7a5921005959f6",
          4799: "29d3fc926a6de1024ff0b62e4ec87b2a",
          4851: "7e208de9999ed98958d1e71485934a51",
          4861: "d99e5265171f86492174f6b5d592ad02",
          4913: "3ae464ecf55dabf6ac4d1ba93a27b3a9",
          5018: "5969672a85750a7e42f32e228fc13d37",
          5076: "2233009b0c1d570d794f44c48e987c6f",
          5117: "617a951231e595822452197d9cf1b4d6",
          5233: "81a94fcaaf364edce53848cb69a56071",
          5259: "331a6fb626883070d9828ead38c0d76a",
          5265: "960a6c456a580678b00a9f0959f2ae9f",
          5389: "cc9073829be348cc1689b278e0465379",
          5415: "05f5484f1bc6c7e6afaf23b54c8c8f82",
          5530: "a6f85550d0523b9549bc8cfd2e5863e6",
          5559: "5158520c110957f967a5fe4250c2d7d6",
          5639: "b3963540d40a509a794fe1ba56128654",
          5663: "bd1e06991f7ff99598cd0c04060582a3",
          5742: "0315236d47cd667fb93f5891d800400a",
          5802: "762e6e1db9c923d72271be9fa84e711c",
          5830: "053239fe0190945e903f7c36d3800194",
          5832: "3b8c12d8afc370f3398fd1c89b2ccf26",
          5859: "40e416a2296a5f03f42ba746aca89297",
          5912: "b96733c225ca4eccb2b02ffef030acc7",
          5997: "2a3f7bcaf81b4cc672432eaa0fd480c3",
          6019: "953c506748e7f9d0c6cf27ec83beffa6",
          6267: "245b7208b97b5866213e83bec6cc1e0e",
          6280: "c0496cba47c0d0f2aa19edbd2127202c",
          6285: "227a31f7993c0b8b865bb549f34e9a89",
          6321: "30028b2f197b8d88df677a824a8d725c",
          6327: "db507051215fdabdf2370c3f6f2a50a3",
          6361: "d534c8d67588b58a64ec7811d265bb8e",
          6471: "20b15500303b4d001d41ad6ea5678754",
          6664: "5d12e8d634f62c6bd4fd9770a9b1f14c",
          6703: "d7bd0b1b05e7f4251d451ebf1bbbaac1",
          6879: "081a6a5508469bd2ae46285635f21f53",
          6891: "fa8cfeff126b215957b5258b7eb11d84",
          6997: "66bf566276c1ceb3617cdff0cd5c63f8",
          7010: "aaa76c946ddc148aac56a954d501e8f4",
          7073: "95b61dda0c6379d9ad332b0eeccd1f2d",
          7407: "31fc78a0561bd05364f483e3ae0aeb78",
          7436: "92607e77ef7eaf8ac47eb74b8089f842",
          7452: "543014d2e684aa55f09cfcfe7ae703c2",
          7453: "25c9e6a16d530b2a3bd10e69ea4af149",
          7465: "1ccc6db3a26a6377afa3daad12cb0019",
          7970: "d3d4b42a17b677128d306162ca5af8f4",
          8068: "5cccac385163a96a35cf4ec12b2b8c69",
          8240: "f7129d95960751f47c26f641d5983d14",
          8272: "47ff757eb9e2b86eefb25bf5ac9593c1",
          8325: "6f8e3bab1682e34809c51a0e88636cdf",
          8391: "e4c516cf57c80985f4071814ee70debc",
          8431: "5721ddeefde458d1ae04b817c92e4fd5",
          8437: "9185d0ca6d3795575bcd9f7615306289",
          8659: "ecc0dd2c51e411d0c5d5de5e581a41db",
          8665: "4a4c52ac1e186c85b24e719df9cb7799",
          8702: "d219cd535ed4603ce253781f1db72867",
          8708: "a889e256e011d69866bc4bb7b86c908c",
          8755: "c8a6fe8c7e830b76b9ec78bf379f0747",
          8845: "ec8ee770846a15222947cfda23718394",
          8880: "4c57229814df0514007e24b0e63ca708",
          8938: "53e6650eb55e7d7bc6c72964e5907c1a",
          8970: "093d09ded8cd79f1b43235a4a9b969e9",
          9022: "fa465bd291049acff533f870864b5abb",
          9028: "49d798115bdf23b8c12f640c3a31cece",
          9126: "9d4de80de139e8a15318ba57c17cc133",
          9171: "efa59fa3dc426046d02c55317e209fb3",
          9377: "2f7af871426e23624296e78167da9a9a",
          9587: "b0d4456399e2970a7ab512b518498d43",
          9615: "cb2fffb5e9a65ff8309bc9c7a8bbcaca",
          9741: "9f2d7cdeb012432bfbe5c4f4f788c029",
          9760: "b399a310e9b53bc3daf4b951dd1e08aa",
          9936: "b05f43846c6a69e29eaf399ce9e25274",
          9987: "c6e1d1f99268af08e3c7161c8b6ead28",
          9990: "19b4e0272f711af670e4588e1fc7d268"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          275: "059ec94d6d1bd3eaffb6e97955093832",
          1057: "82b8e41eb90eae7db3adfb9fff54d045",
          1785: "e70ba27106c58a2902fdf3deb822d60f",
          2858: "034aa60d21ecc02941abbd0806582044",
          3438: "82b8e41eb90eae7db3adfb9fff54d045",
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/sites-legacy:", i.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + t) {
                  f = s;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", c + t), f.src = e), d[e] = [a];
            var l = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          275: [31879],
          392: [17523]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(f, e) && f[e].forEach((e => {
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
                c = (e, t, c, f, n, o) => {
                  try {
                    var b = e(t, c);
                    if (!b || !b.then) return n(b, f, o);
                    var i = b.then((e => n(e, f)), d);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, a, d) => c(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, r[2], 0, 0, ((e, a, t) => e ? c(i.I, r[0], 0, e, f, t) : d()), 1)
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
              var c = i.S[t],
                f = "@rockstargames/sites-legacy",
                n = (e, a, t, r) => {
                  var d = c[e] = c[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : f > n.from)) && (d[a] = {
                    get: t,
                    from: f,
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
                  var c = d(a);
                  if (c && c.then) return o.push(c.catch(e))
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
                for (var d = 1, c = 1; c < e.length; c++) d--, r += "u" == (typeof(n = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return r
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
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= r.length || "o" == (i = (typeof(b = r[f]))[0])) return !o || ("u" == s ? n > d && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (c ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, d, c) => {
              var f = c ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(f).reduce(((a, r) => !t(d, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    c = (typeof d)[0];
                  if (r >= t.length) return "u" == c;
                  var f = t[r],
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && d != f) return d < f;
                  r++
                }
              })(a, r) ? a : r), 0)) && f[r]
            },
            d = e => {
              throw new Error(e)
            },
            c = (e => function(a, t, r, d, c) {
              var f = i.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, i.S[a], t, !1, d, c)) : e(a, i.S[a], t, r, d, c)
            })(((e, t, c, f, n, o) => {
              if (!((e, a) => e && i.o(e, a))(t, c)) return ((e, a, t) => t ? t() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, o);
              var b, s = r(t, c, n, f);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void d(((e, t, r, d, c) => {
                var f = e[r];
                return "No satisfying version (" + a(d) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(t, e, c, n, f))
            })),
            f = {},
            n = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8431).then((() => () => i(48431))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(5389), i.e(4853)]).then((() => () => i(15389))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(2293), i.e(6703), i.e(5997), i.e(9623), i.e(1788), i.e(2148), i.e(6565), i.e(6321)]).then((() => () => i(58702))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(9587), i.e(5859)]).then((() => () => i(12841))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(1098).then((() => () => i(71098))))),
              2918: () => c("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(9623), i.e(5966), i.e(2148), i.e(2169)]).then((() => () => i(32169))))),
              16565: () => c("default", "graphql", !1, [1, 16, 9, 0], (() => i.e(601).then((() => () => i(30601))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(5117), i.e(5966), i.e(4853), i.e(2323), i.e(3438)]).then((() => () => i(99747))))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], (() => i.e(439).then((() => () => i(10439))))),
              90660: () => c("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(5912).then((() => () => i(75912))))),
              61128: () => c("default", "react-intersection-observer", !1, [1, 9, 16, 0], (() => i.e(8708).then((() => () => i(76327))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8659).then((() => () => i(68659))))),
              57145: () => c("default", "prop-types", !1, [1, 15, 8, 1], (() => i.e(7465).then((() => () => i(97465))))),
              2765: () => c("default", "focus-trap-react", !1, [1, 10, 2, 3], (() => i.e(1673).then((() => () => i(51673))))),
              50430: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(5802).then((() => () => i(83421))))),
              82849: () => c("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(5559).then((() => () => i(65559))))),
              84590: () => c("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], (() => i.e(8665).then((() => () => i(21375))))),
              87330: () => c("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], (() => Promise.all([i.e(9736), i.e(9987)]).then((() => () => i(32368))))),
              87052: () => c("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(1840).then((() => () => i(91840)))))
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
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var t = a => {
                  f[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete f[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(f[e] = d.then(t).catch(r)) : t(d)
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
                2858: 1,
                3438: 1,
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
                      var d = (f = t[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((d = (f = c[r]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var f = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), d(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, r[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [c, f, n] = t,
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in f) i.o(f, r) && (i.m[r] = f[r]);
                n && n(i)
              }
              for (a && a(t); o < c.length; o++) d = c[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
}));