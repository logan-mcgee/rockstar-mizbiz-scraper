! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fb0b0f76-a5f4-4767-b95f-321372738054", e._sentryDebugIdIdentifier = "sentry-dbid-fb0b0f76-a5f4-4767-b95f-321372738054")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, f, c, o = {
            49293: (e, a, r) => {
              (0, r(31789).w)(1)
            },
            31789: (e, a, r) => {
              const t = r(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            23358: (e, a, r) => {
              r(49293)
            },
            90569: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            98478: (e, a, r) => {
              "use strict";
              var t = {
                  "./root": () => Promise.all([r.e(2229), r.e(9623), r.e(5966), r.e(8776), r.e(1376)]).then((() => () => r(38113)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => f
              })
            }
          },
          b = {};

        function n(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
        }
        return n.m = o, n.c = b, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          n.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, n.d(d, f), d
        }, n.d = (e, a) => {
          for (var r in a) n.o(a, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, r) => (n.f[r](e, a), a)), [])), n.u = e => "js/" + {
          131: "367efff80913fd3ca0c59701a64d888b",
          278: "d52387439c3983e16ef0951a1c39d4c6",
          299: "35f03bb74097bd3a040d75c42718eda3",
          314: "49fce3d12c373e7b5b402659a4ed3cfd",
          662: "b20eb5b6927e19c754f46e0f49bff835",
          707: "f2da178a3d11843ada87d63f64b604a5",
          824: "c15db823388c26c0a717a7c5b6918dba",
          907: "69fce437522686357ff828d62d0412f8",
          1029: "dabb3ccea9a81ccb9990e1ccb4cbfe4d",
          1041: "55ebff7d564d65a0fc5b80271279a8ec",
          1054: "fb81d5bc03b721a19f9cd89faa88fc3c",
          1095: "1d1fdbac79691389dfd5f4b28c84cf51",
          1242: "ad094409ff6c709721269d2257a2b427",
          1271: "4809931a352ae20f1b618fc2e7824a60",
          1376: "b0b4da8b15b736ac6469afd24f5b9884",
          1604: "24fb08d7012236cba71af5651e0f9e47",
          1822: "200613e892fee06f2bb1e90307a5415c",
          1868: "69e34ca88512a17fbaede89baa015dd1",
          2156: "f042b19d664bab0a9e511f2e942bbc7d",
          2171: "bf27e2266adf7678e0ce339cb2876bd1",
          2221: "ff6c1dc121e2128cc2c6b1ff0899031f",
          2229: "5f7443664507c92cb2b814b672ce5625",
          2243: "4f2650c3a8e07abde11bd72b2c2d4f20",
          2347: "d86879c3d4ddcee0f586778a548ffe24",
          2365: "66c324aa4e76eb9204714261ebb92ebb",
          2398: "82465effe89127a5d8aac8ac45481fbe",
          2466: "2cb9595a050ee7eea3e8048f411dd519",
          2642: "208b8c9a7cae025d665687951445757b",
          2678: "6ced1bfc6bbcf81092df00509257b793",
          2864: "972f1aa9d9467b93de6d6284c7d543d9",
          3034: "6193493b8df95dc016e3267fcc87ebca",
          3131: "43c8a095fb930af21094fae342d22e3b",
          3138: "000c10214f9a2c0e8cb13e8e3f1c822d",
          3197: "4ca9621753f68884cc5eec0f5468c00b",
          3217: "39dc89cd45b1e842557838aa0966080b",
          3343: "546ec9632f892a154428bbc63d910d96",
          3360: "235466f413f017ab1c5ce7b0bb4f2dc7",
          3370: "2e5d1cba871bd9b10fb18ce3654e203f",
          3410: "ff722760577c67c441e9d79764b0a4d2",
          3422: "f132f67c5acfcdfeb554d596d44040c9",
          3475: "088cc2fe0057115e70c6616560623dcc",
          3486: "f905af108129ebeb145d35ef635cea25",
          3697: "c909f1af4c29abf1616092935f29ce49",
          3759: "538ced065d538e0e37cdf7a25da3e889",
          3885: "6bc5d3cee87aebf1f44b78547d5ffe43",
          3941: "0660796d7494e64b53e73ded8f9469d5",
          3954: "5c2e9e0425805b086999a78df9824e00",
          4011: "7ce1b3a862565b6e5ee432a36a4255da",
          4079: "215b528f36d7f1cad9be993807e00581",
          4108: "cc7d3fc0235d477a2b3efb76ec671655",
          4204: "f8ae4022746dab5b90f250ea69fec31e",
          4528: "6d9457fd3ebf51f4acf844e4278f5f02",
          4621: "afa2fe774116e8041a87212d3c090adb",
          4700: "883ed6482bea4dd7c39ba44f21562309",
          4710: "5a49e158afa0eb9d2b90bc9bbea73c32",
          4731: "c2ab55342dac97b78b883b3dd6ba3b2d",
          4799: "a0776e42384e3211658d9b50b5465b64",
          4851: "c922f715b234fe06bfca73981a6b9473",
          4853: "94de6943d4918ad1b91858da04ba9a68",
          4861: "f43c379891bf71c1cfb2399148004470",
          4913: "d6e9f834b032dfb086f3e8f295a3b226",
          5018: "0860a5771282924404f196ed3dcf9d13",
          5219: "e1ed41f8b11d4f5f1149c14baa3adb75",
          5233: "fffc6a55a3459aa9d2ba81a4d73bc8c4",
          5259: "e631db73edd99aa1722a20f534afee02",
          5309: "a871b471e2659a83b8eeb933c9a38683",
          5483: "c3eba3ee84c110680be2eb72ba568d3f",
          5530: "a7b8a949b2c3442907ea3ac12d441052",
          5639: "51100eb07eae8c2d16930b5f0a2d6e3e",
          5663: "df96e34bba9383275b9b9f3631016d81",
          5742: "4ebf2c0272cee7c90c3548d23851531d",
          5801: "daf28f2e700d30bfdcc693b72216421d",
          5830: "e6bd9ae0884a15496908d6720d88518b",
          5832: "c6c350c316ade6d1eba3a59edd9190bb",
          5966: "417e3fa80e840e939300c374387e21a7",
          6267: "7ea3dfa812f036d66bf3ef1d63dd845a",
          6280: "62e0c48fa6b282ca903e1c66a9543aea",
          6285: "d1a7078de19a28db80e691d7f2931645",
          6304: "aa239998a1b6a8ccd9a0324dd82b0d83",
          6361: "51bbb78f152581d89f01f40bb1862211",
          6521: "af9cd622b3a2fbceabdc30f69697192f",
          6629: "d3dd8a92ff4f13a5bc7d61f03cd7af46",
          6664: "d88d3f5669efff6a694ac619d177305c",
          6832: "9e4f75cc39b3095763b93dc7b9d1f2cd",
          6864: "1daa7a9994a5e1f51d60335499ab49f6",
          6879: "3ac06072fd96b17457660292ede16aa2",
          6891: "af69f453ff7e8511856f92e2623def64",
          6997: "51ba9c6da7f46a80aa9db58217348911",
          7010: "4d8a05999e325b81bc2317f8674165ce",
          7070: "f1f8d1dd893661b6eed6abc005e13c7b",
          7073: "d1f5e6e7ceffb1b701fec6d6c60b5b14",
          7360: "ea4e9c39026a318de4101a03992fd771",
          7436: "9d1f939d10ac84270a854017c2d3d028",
          7452: "f5aa404f3fa1f480ed6106d5237e9d56",
          7453: "6c9fc7c783e3899a0899bd486444fc06",
          7600: "1577e77054ba564afaea880d31e7fee9",
          7970: "1541a98c16c82bf41997cc94c0fcee8c",
          8272: "e106e04af9b4272ce49fc0306e539696",
          8391: "0840d8aa831e38ec671b24eea4106002",
          8755: "789760fce0e7799d6efd36fe8251572e",
          8776: "a1c45e25be8408ff4883cea5f33e1936",
          8880: "f9c402b50b8189d6a8927a5cdbcff64a",
          8970: "ae2aff76c13296df3f189f3cda6aaca7",
          9022: "ed1e2f75f15c156e46f0882b0ddef479",
          9028: "bec68a5288ef0e0bd7476b6ba8b84fc5",
          9126: "b265f785fd9edd831a58a078359503f7",
          9130: "93e0316b3dc71f84d95e4df32c28cf46",
          9157: "05b09ccb749296340caf0d96cad3733d",
          9292: "e754c10d275a806c9133538ff37cb6bc",
          9377: "83f0c8b4fe2e474358dba83769655951",
          9550: "812773704b7093729bc16aa12bc643e4",
          9615: "87c401dfb54750bc9057558ed42ba61f",
          9623: "f642de34a1ad70eccafbf9b8d4b75dc0",
          9869: "75ae2f627bd355b7bf8a18f21c2f35ec",
          9936: "263b675fcef332253785049f2d0c1ad4",
          9990: "cbc8eb63b7ba07d56dc5500f6256a1aa"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          1376: "dc88ee56dfb36b4fdb67fbecd00c60ee",
          3138: "ec7e88d4658f5c5ac90562e8a521b625",
          4079: "89bde774a61088133390b2ee5afaab81",
          6629: "591390d9a41e54c015d04906e4090ded"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-footer:", n.l = (e, a, r, f) => {
          if (t[e]) t[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var b = document.getElementsByTagName("script"), i = 0; i < b.length; i++) {
                var s = b[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  c = s;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, n.nc && c.setAttribute("nonce", n.nc), c.setAttribute("data-webpack", d + r), c.src = e), t[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, c = {}, n.f.remotes = (e, a) => {
          n.o(f, e) && f[e].forEach((e => {
            var r = n.R;
            r || (r = []);
            var t = c[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), n.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, o, b) => {
                  try {
                    var n = e(r, f);
                    if (!n || !n.then) return o(n, c, b);
                    var i = n.then((e => o(e, c)), d);
                    if (!b) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                o = (e, a, d) => f(a.get, t[1], r, 0, b, d),
                b = a => {
                  t.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(n, t[2], 0, 0, ((e, a, r) => e ? f(n.I, t[0], 0, e, o, r) : d()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              n.o(n.S, r) || (n.S[r] = {});
              var f = n.S[r],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : c > o.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                b = [];
              return "default" === r && (o("@foundry/react", "1.25.4", (() => Promise.all([n.e(1271), n.e(9869), n.e(3138), n.e(2229), n.e(4853), n.e(1029)]).then((() => () => n(66863))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(5483), n.e(2229), n.e(5219)]).then((() => () => n(87768))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([n.e(1271), n.e(4108), n.e(9869), n.e(5801), n.e(2229), n.e(4204), n.e(9623), n.e(4853), n.e(5966), n.e(4079), n.e(8776), n.e(6629)]).then((() => () => n(25922))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(1271), n.e(4108), n.e(1095), n.e(2229), n.e(4204), n.e(9623), n.e(5966), n.e(3422)]).then((() => () => n(41041))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(1271), n.e(4108), n.e(2229), n.e(4204), n.e(9623), n.e(3410)]).then((() => () => n(24602))))), o("react-dom", "18.2.0", (() => Promise.all([n.e(7360), n.e(2229)]).then((() => () => n(57360))))), o("react-router-dom", "6.17.0", (() => Promise.all([n.e(1604), n.e(2229)]).then((() => () => n(21604))))), o("react", "18.2.0", (() => n.e(3217).then((() => () => n(23217)))))), e[r] = b.length ? Promise.all(b).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = (r, t) => {
              if (0 in r) {
                t = e(t);
                var d = r[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, o = 1, b = !0;; o++, c++) {
                  var n, i, s = o < r.length ? (typeof r[o])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(n = t[c]))[0])) return !b || ("u" == s ? o > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!b || "u" != s) return !1
                  } else if (b)
                    if (s == i)
                      if (o <= d) {
                        if (n != r[o]) return !1
                      } else {
                        if (f ? n > r[o] : n < r[o]) return !1;
                        n != r[o] && (b = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || o <= d) return !1;
                    b = !1, o--
                  } else {
                    if (o <= d || i < s != f) return !1;
                    b = !1
                  } else "s" != s && "n" != s && (b = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, t) : !u())
              }
              return !!u()
            },
            r = (r, t, d) => {
              var f = r[t];
              return (t = Object.keys(f).reduce(((r, t) => !a(d, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    f = (typeof d)[0];
                  if (t >= r.length) return "u" == f;
                  var c = r[t],
                    o = (typeof c)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  t++
                }
              })(r, t) ? r : t), 0)) && f[t]
            },
            t = (e => function(a, r, t, d) {
              var f = n.I(a);
              return f && f.then ? f.then(e.bind(e, a, n.S[a], r, t, d)) : e(a, n.S[a], r, t, d)
            })(((e, a, t, d, f) => {
              var c = a && n.o(a, t) && r(a, t, d);
              return c ? (e => (e.loaded = 1, e.get()))(c) : f()
            })),
            d = {},
            f = {
              62229: () => t("default", "react", [1, 18, 2, 0], (() => n.e(3217).then((() => () => n(23217))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(1604).then((() => () => n(21604))))),
              95966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(1271), n.e(4108), n.e(4204)]).then((() => () => n(24602))))),
              2918: () => t("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(1271), n.e(4108), n.e(1095), n.e(4204), n.e(1041)]).then((() => () => n(41041))))),
              81788: () => t("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(5483), n.e(7600)]).then((() => () => n(87768))))),
              96711: () => t("default", "@foundry/react", [1, 1], (() => Promise.all([n.e(1271), n.e(9869), n.e(3138), n.e(4853)]).then((() => () => n(66863))))),
              20270: () => t("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([n.e(1271), n.e(4108), n.e(9869), n.e(5801), n.e(4204), n.e(4853), n.e(4079)]).then((() => () => n(25922))))),
              44853: () => t("default", "react-dom", [1, 18, 2, 0], (() => n.e(7360).then((() => () => n(57360)))))
            },
            c = {
              1376: [20270],
              2229: [62229],
              4853: [44853],
              5966: [95966],
              8776: [2918, 81788, 96711],
              9623: [9623]
            },
            o = {};
          n.f.consumes = (e, a) => {
            n.o(c, e) && c[e].forEach((e => {
              if (n.o(d, e)) return a.push(d[e]);
              if (!o[e]) {
                var r = a => {
                  d[e] = 0, n.m[e] = r => {
                    delete n.c[e], r.exports = a()
                  }
                };
                o[e] = !0;
                var t = a => {
                  delete d[e], n.m[e] = r => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var c = f[e]();
                  c.then ? a.push(d[e] = c.then(r).catch(t)) : r(c)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            n.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1376: 1,
                3138: 1,
                4079: 1,
                6629: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = n.miniCssF(e),
                  d = n.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var c;
                      if ((d = (c = f[t]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && ("load" === r.type ? "missing" : r.type),
                        o = r && r.target && r.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                      b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, f.parentNode && f.parentNode.removeChild(f), d(b)
                    }
                  }, f.href = a, document.head.appendChild(f)
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
            417: 0
          };
          n.f.j = (a, r) => {
            var t = n.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^((22|66)29|4853|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = n.p + n.u(a),
                c = new Error;
              n.l(f, (r => {
                if (n.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, f = r[0],
                c = r[1],
                o = r[2],
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) n.o(c, t) && (n.m[t] = c[t]);
                o && o(n)
              }
              for (a && a(r); b < f.length; b++) d = f[b], n.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), n.nc = void 0, n(23358), n(98478)
      })())
    }
  }
}));