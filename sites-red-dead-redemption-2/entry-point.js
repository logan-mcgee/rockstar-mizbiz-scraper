! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7992c938-6453-40ec-80e3-36b23d6a0612", e._sentryDebugIdIdentifier = "sentry-dbid-7992c938-6453-40ec-80e3-36b23d6a0612")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, f, d, c, n, o = {
            24075: (e, a, r) => {
              (0, r(47387).w)(1)
            },
            47387: (e, a, r) => {
              const t = r(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            45408: (e, a, r) => {
              r(24075)
            },
            13099: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, d = t.length; f !== a && d >= 0;) "/" === t[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(888), r.e(3316), r.e(2530), r.e(2229), r.e(6682), r.e(5966), r.e(1)]).then((() => () => r(70001)))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => d
              })
            },
            25136: e => {
              "use strict";
              e.exports = r
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
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          1: "8d246b599c14151fee3927171af3ce1c",
          131: "0f6a1b6ca54d84544c7bc380143a299d",
          278: "b34492592666a06fd9447d93efcbfd66",
          299: "18af6c45c937d776e235bca3c9cecf0d",
          314: "830aad552bfecff3aba939ffd1d6fe13",
          662: "af18f8e02c00004b6e8967b5dd8ebb24",
          721: "5e74e6a275726b2a7764b41caab2014e",
          824: "c028e73ac8a1efd6ba24a7d8aa2278a3",
          888: "876f10dbd806b59c0d0c8036e89d41eb",
          907: "f28ba1aba67218503143ec621e37bbd9",
          1054: "4ac6b6a5671953b48310828ad2623465",
          1242: "a100169b64866b4b1b7b35716e58c608",
          1360: "50b104e04a3aac8b8ddcface0fb0c740",
          1673: "bd7f302d5b1f8939b0d6fc5607091b8a",
          1822: "0e817e2fc92f1ffd7a232751f64cd256",
          1868: "d284bcbbb12c014cabbf0e7f2274a4a9",
          2024: "47b6ff2a2f3c4352dc7eed471b5603ce",
          2156: "4dfa21af295f2d95ac78a2fe5bd6822f",
          2171: "2ef44c95906742abda88504b434a6cb9",
          2221: "1ff78922a2d7998c24f7b4c81e186df9",
          2229: "d45eaf259078f289fb88c7f475cc9d12",
          2243: "5646417f5faffb33f645e09d64449e72",
          2347: "66785d8b99425a2b77ce0a4e313faad3",
          2365: "0c7dbbd0f0fcecaecbd26065d1b0d23e",
          2398: "754f7ad22cb1a7bf133f27a553e1376b",
          2466: "f86eed135bd4f26e5c1503cbab7bacfb",
          2530: "38fde7dee4896aad13aa36444a564b4c",
          2642: "35f8a0270bf190226be99bc9382db8a6",
          2678: "8e556fa937d86fb0fbcbed01f73190fd",
          2864: "29f1bec88fac4b382694dfb6127ad1e5",
          3034: "6d1e0a37c3f541ee28d593c6f207f05d",
          3197: "4085230a4e9cb394ba0a7b6307af1ccc",
          3316: "06739271fc9a979f333ced242a49f7a6",
          3343: "006109240b72f49bcb051be4a00c95a3",
          3370: "c42f2143102ca8603a742e41443fee20",
          3447: "7a061682e85e4791d4a2dcf3227e15a9",
          3475: "d41946bf86bfbf4f905fa55e4c602efd",
          3486: "03df2c410baaf063f9b24f6856e299a2",
          3697: "f4d18a85e4f9727c7f92798d124fd140",
          3885: "7935815c8b9a3da3faa4d547ea5fe752",
          3941: "8b6256be7d9d66ddc02fd8f07b78fe27",
          4011: "d2a800ddbefab7069f6d0f5dc9363dcf",
          4018: "1659eae5ee8b436e66c8208d96de0033",
          4054: "11920b6a67f734d7ec463bf11ad1395b",
          4528: "5826f28481ae3a3e8849aad01491e5b8",
          4621: "1be4d523f8fc24e5ded6e29be63904e7",
          4700: "301380d30364c98876ddd807da8cc0b7",
          4710: "7ec1c594d29dcd7dc63230c3a7375ce6",
          4731: "04a75b28beea457e7dbd1a9f1e7d748e",
          4799: "7350aaa0563cda2d8b37977462652762",
          4851: "139476e38ad7cb71723c741aa1f558fc",
          4861: "f04397b4f535427ba8449a1fafa6736e",
          4913: "5f96b07650b2c06dae35ae5a67c3322f",
          5018: "c1d7a9dc710f031adaa705f89e57a2ef",
          5233: "7d6892c8b88c134f086cf0d56349c471",
          5254: "7dbd9a61d2f32485a143dc8e8e7c8ba0",
          5259: "8d7e2a47d9315eff4ab7a076e55b8be3",
          5530: "d43b0be5edd4e00905e547f4fa9e43ed",
          5639: "967f14e24a662db84d7095f79add4210",
          5663: "785dca811f37464d363c88eeae2f35b7",
          5742: "414ebd7d09dbed1c316679bb1720ca2f",
          5830: "cbc335594c8ba6ce35fade81282c67bb",
          5832: "221f3976ece1a014fee581d54faacec8",
          5966: "a90aa86d7555e83c4fdac9d48e244c27",
          6267: "a922377e52581cd06992225fb53a3686",
          6280: "f8b88d53954714bcf8c72bd9a5bc277d",
          6285: "2a17be6ae881764836088595afd0c017",
          6361: "f0535550687640ce51e668712d0493af",
          6664: "59b6be35dbfde205c2b5222f967fbffd",
          6682: "239f815384a078a5292604d461565771",
          6879: "2594392d8451d5c0a3f64675ac1d2a14",
          6891: "85147e2283f12080df3905f9ef5de6a2",
          6997: "2ad41bcdf003a5cc77b9557d1d8a929e",
          7010: "9d9ae09931e5d572b9a3a85ac6cdaa9a",
          7073: "fbe25ee55152e209bdba34c81ccdecb8",
          7131: "977c23be4c359287a0e0651aa4c42c0b",
          7436: "cae5b567a0a7292620a93242743f3f46",
          7452: "ceb42ca406539fae13be698b15059526",
          7453: "ddbda66f3996a96bab4f9416fea7b461",
          7868: "596dc5733f5b7dcb88da748f49e07be4",
          7970: "da7bb41172991566e93bf3704cd53e20",
          8272: "a4846db2cbc4ce89532ebf8822bbb994",
          8391: "52c4ee23e47ea264cf9da3a28241cffe",
          8755: "90bbcba9f5964824d0fa328c5116158b",
          8880: "f9afedfcbef069da8388afb222d94b4a",
          8970: "99d7f84263cbff3b8d31ad52a4b05726",
          9022: "0de43419da373bc89d5150c66a4149f5",
          9028: "4f172ce8f971d7b68adfc3c60c1ff83b",
          9126: "56b499db9ec8252fbec519723306dd8d",
          9377: "697e928a38328012eec894d946167ce5",
          9512: "3850da8ad01217f0210193cc485951ac",
          9615: "ba4316a66c91cce3d08eff655a123ac2",
          9936: "1c1025e7e3cda2545f3f8828e9e8c9ef",
          9990: "909c1d1de68a755cb9570f463a626c38"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + r), c.src = e), f[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
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
          1: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
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
                d = (e, r, d, c, n, o) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), f);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, t[1], r, 0, o, f),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, t[2], 0, 0, ((e, a, r) => e ? d(i.I, t[0], 0, e, c, r) : f()), 1)
            }
          }))
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
              var d = i.S[r],
                c = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(85950))))), n("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([i.e(888), i.e(3316), i.e(1360), i.e(2229), i.e(6682), i.e(5966), i.e(7131)]).then((() => () => i(37131))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(888), i.e(2229), i.e(6682)]).then((() => () => i(17560))))), n("lodash", "4.17.21", (() => i.e(7868).then((() => () => i(17868))))), n("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(54018))))), n("react", "18.2.0", (() => i.e(3447).then((() => () => i(13447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var f = i(25136);
                  if (!f) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (f.then) return o.push(f.then(d, a));
                  var c = d(f);
                  if (c && c.then) return o.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[r] = Promise.all(o).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
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
                var f = r[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < r.length ? (typeof r[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != r[n]) return !1
                      } else {
                        if (d ? b > r[n] : b < r[n]) return !1;
                        b != r[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
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
            r = (r, t, f) => {
              var d = r[t];
              return (t = Object.keys(d).reduce(((r, t) => !a(f, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    d = (typeof f)[0];
                  if (t >= r.length) return "u" == d;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  t++
                }
              })(r, t) ? r : t), 0)) && d[t]
            },
            t = (e => function(a, r, t, f) {
              var d = i.I(a);
              return d && d.then ? d.then(e.bind(e, a, i.S[a], r, t, f)) : e(a, i.S[a], r, t, f)
            })(((e, a, t, f, d) => {
              var c = a && i.o(a, t) && r(a, t, f);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            f = {},
            d = {
              62229: () => t("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(13447))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(54018))))),
              16188: () => t("default", "lodash", [1, 4, 17, 21], (() => i.e(7868).then((() => () => i(17868))))),
              95966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => i(17560))),
              47224: () => t("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([i.e(1360), i.e(9512)]).then((() => () => i(37131))))),
              81788: () => t("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(2024), i.e(4054)]).then((() => () => i(85950)))))
            },
            c = {
              1: [47224, 81788],
              2229: [62229],
              5966: [95966],
              6682: [9623, 16188]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var r = a => {
                  f[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                n[e] = !0;
                var t = a => {
                  delete f[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = d[e]();
                  c.then ? a.push(f[e] = c.then(r).catch(t)) : r(c)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          i.b = document.baseURI || self.location.href;
          var e = {
            5082: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|5966)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((r, f) => t = e[a] = [r, f]));
              r.push(t[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, d = r[0],
                c = r[1],
                n = r[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(45408), i(85819)
      })())
    }
  }
}));