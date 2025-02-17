! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cc7bda02-9454-48a6-91fe-d7933fc6c9d3", e._sentryDebugIdIdentifier = "sentry-dbid-cc7bda02-9454-48a6-91fe-d7933fc6c9d3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, c, t, r, d, f, b = {
            49293: (e, a, c) => {
              (0, c(31789).w)(1)
            },
            31789: (e, a, c) => {
              const t = c(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !c.y.meta || !c.y.meta.url) throw console.error("__system_context__", c.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                c.p = t(c.y.meta.url, e)
              }
            },
            23358: (e, a, c) => {
              c(49293)
            },
            90569: (e, a, c) => {
              a.y = function(e, a) {
                var c = document.createElement("a");
                c.href = e;
                for (var t = "/" === c.pathname[0] ? c.pathname : "/" + c.pathname, r = 0, d = t.length; r !== a && d >= 0;) "/" === t[--d] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var f = t.slice(0, d + 1);
                return c.protocol + "//" + c.host + f
              };
              Number.isInteger
            },
            58157: (e, a, c) => {
              "use strict";
              var t = {
                  "./bootstrap": () => c.e(7902).then((() => () => c(37902))),
                  "./index": () => Promise.all([c.e(6996), c.e(2229), c.e(9623), c.e(6188), c.e(5966), c.e(9010), c.e(3581), c.e(2918), c.e(3906), c.e(1552)]).then((() => () => c(41552))),
                  "./tina": () => Promise.all([c.e(2229), c.e(6188), c.e(5966), c.e(4853), c.e(9010), c.e(1877)]).then((() => () => c(91877))),
                  "./tinaBlockTemplates": () => Promise.all([c.e(2229), c.e(6188), c.e(5966), c.e(4853), c.e(9010), c.e(1877)]).then((() => () => c(91877)))
                },
                r = (e, a) => (c.R = a, a = c.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), c.R = void 0, a),
                d = (e, a) => {
                  if (c.S) {
                    var t = "default",
                      r = c.S[t];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return c.S[t] = e, c.I(t, a)
                  }
                };
              c.d(a, {
                get: () => r,
                init: () => d
              })
            }
          },
          o = {};

        function n(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var c = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(c.exports, c, c.exports, n), c.loaded = !0, c.exports
        }
        return n.m = b, n.c = o, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, c = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          n.r(r);
          var d = {};
          e = e || [null, c({}), c([]), c(c)];
          for (var f = 2 & t && a;
            "object" == typeof f && !~e.indexOf(f); f = c(f)) Object.getOwnPropertyNames(f).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, n.d(r, d), r
        }, n.d = (e, a) => {
          for (var c in a) n.o(a, c) && !n.o(e, c) && Object.defineProperty(e, c, {
            enumerable: !0,
            get: a[c]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, c) => (n.f[c](e, a), a)), [])), n.u = e => "js/" + {
          131: "eab751e465fb68e271633cd2f85a2c90",
          278: "b3121d9dfd3540f8d74a00c0f354c403",
          299: "3bd3d8b58373e4c109c0101c13648e42",
          314: "d60068c2af523de0702be36e4851c6cb",
          662: "47e3612491fa5e67bd4c97bb7c78d63d",
          824: "5f56820edf1cc5c06df6456eff53d819",
          907: "980dfb43e25bd84cc198d2c9340ecc52",
          1029: "18651c5993c5aa62cf1b1ce25d9694ca",
          1054: "2c7f8afbb97e6232233e0fbb27cd4eca",
          1242: "dbb5598becbe1820a402636fee20ce6f",
          1552: "a3f4db622167d42536f5f4bb19edff0c",
          1604: "492513c346a609f2350611040f20b0a0",
          1822: "84037d28e21bb8886ef8c56672ee0a6e",
          1868: "fdbfde213a13a66d80ccf27211822249",
          1877: "32f21a61d453c14d19ee39d23ad1db2b",
          2156: "8ab56924a96b33dfe49ad07fccab99c2",
          2171: "a3dcc6db168dc24329acd41ee8b58488",
          2221: "063a627ad03a5f1372cd4fa943a98b62",
          2229: "694e45c1bdc83f48f126dc7ace434947",
          2243: "0e0ed0fa602ee6c15241fc7b485d2195",
          2347: "e87fe8668df395fb9419fffaa78cfbd6",
          2365: "4ae594919a5f4e8770ba08982fbbd209",
          2398: "1aed26a802b3ec8709c5b2e03d16e514",
          2407: "0423223b42b0de9d30823e89279c0b32",
          2466: "9e9aa3f4f9916956bf670a8141259e31",
          2642: "d3a3de0bcdd10d7bdf3bc405f8544087",
          2670: "dd46ef3cea28c96093ce7f0f19406188",
          2678: "bad75b8ac2cfd294b38a3654ac64490d",
          2864: "5cf8de6b3a42a3273888830b97a82ac5",
          2918: "c48f222def00e0dc340c684a29fdcc11",
          3034: "71f4d4b3826a83ed79e7a171dc5113ae",
          3197: "b09018629e5305f39cab0e2682c22a36",
          3217: "6af1a2a257a8d12778c1359bc912d0b2",
          3343: "4ac8830eb5d0b9fbb64b01df865c18ba",
          3370: "29cd2e99ee4485bc3e1fd4fc9c6dfe62",
          3475: "c3ce857a14954cb64d522e8a0487edd4",
          3486: "606b60a61f0aa69b974e0ede12a364a2",
          3581: "4038d09d8a5a6cab7676fb396cfb6c60",
          3697: "6e5bc82ba3c3f897fcf063dc829a42d9",
          3811: "cf4de18405213c5942a4bb122159d4e2",
          3885: "d66ea3c504821159c2e1cd8f85f2df89",
          3906: "8d916b3dc87bf31140513ecd0b620f52",
          3941: "ebecf06679527213cd565149ae602a0f",
          4011: "94a51d96e8b9688f30e052605630c424",
          4059: "f470a17cbb6438fceea8243c5ab0ee8f",
          4282: "f714de3d2e2408d0acc1d6700b15df1d",
          4528: "fff39733d59a00e79e0bc7e0a53d74a8",
          4621: "0ea8c46335abccf71241a872b9ce8344",
          4700: "3e87933f0541da585c63e7e1e8ec9bd7",
          4710: "82823ad0ace811b8f84dbab42dc173ca",
          4731: "a0c5b3e9d124a697715267763bc7590e",
          4799: "62ceb091212809ad9333b6459beea721",
          4851: "7254b051d4cf5d109fae5425a8e9b7cd",
          4853: "24fd39970cceb3912231faa6d0c8f8c0",
          4861: "b498af253b86616d20fbcebdd9c2cbd7",
          4913: "05e201e7f89692f2b557ae9f8145fdf1",
          5018: "8707939e9750eec1e8cbd963815ea787",
          5219: "3e39c549c2ac3c67104a961258254ab1",
          5233: "3aa091020c829fae9a44681a1da2f954",
          5259: "45f2547c3e52e20d55d98d26955582ca",
          5271: "cb52281a34de9f90f70a30d8e6274d71",
          5409: "6cbeb40057bdf3d4b1d6fc2e368d9e85",
          5483: "d53087f00247b6a67235d75381425090",
          5507: "b20ece6e343df8ffaf96ca3497dda427",
          5530: "0b749d4d9a7918f184dad6aa5d43ef0c",
          5639: "103799b8b10de219d071613cd5ba3c09",
          5663: "856f817457b177eabfd86ef39f31e823",
          5742: "9095480630de05d81df37fc5279e6e45",
          5808: "ffc0ff9f00cf6910b4b8c7042b71208c",
          5828: "7e5b00ffef566ba138fe088eaed91626",
          5830: "6eb56d949e03834e5513a08f8f46e39c",
          5832: "967233d60d9cf2c43d6bd6ed24f511f5",
          5966: "b291de7cefd353995511032eb1a82a4e",
          6188: "fbc5b6848dcceb32ea5990c581a10150",
          6265: "9dfe0e809d63a29ae9832107384403f5",
          6267: "fd94e20f08ce7beab30d17ddb3c167c6",
          6280: "9ef05b4d1734ed6e141b95db05ca25d0",
          6285: "08989f721d6a4ea5daa0f838ab533a3d",
          6286: "8bb4d3c40c270c08c304bf091b93a495",
          6361: "e16d098fba2697805c875209d0874288",
          6440: "9c418fbb0667f07d29017b9d52609a67",
          6519: "927cf7f0215b17a12c3c8b0fb785e8d8",
          6664: "40ec2cf2c3acb74924f3387a930ce501",
          6695: "b5fbbcbb10a161c4bcf5607d0a508cbb",
          6832: "2f5a6d06b070cc31afc0d9fcc7c6cd2a",
          6879: "91841ded63a55a1ab7e21103ec68479b",
          6891: "d6c2249035493cd97c253345536a5e57",
          6996: "7b2533dd06cfa5bbe1bf7346de5472fa",
          6997: "e251a31a848a59a769e75a66b3635a43",
          7010: "57a48726e52e40d88f474891857f9a54",
          7073: "e98a7841968a6a8aa6175bfd4e8fd814",
          7360: "f962d3b3f1424434e2d1937192c4788a",
          7436: "16f65c8402582eb42bf7839bdf34426d",
          7452: "0b784afa8e2a3841391717e4da47b15c",
          7453: "9c8d7e1afaf337c7eba233888bea363c",
          7600: "6ac253e9b498cd884b6aa1159fcd0517",
          7652: "d7b87e8e7fa147aa268b684d348e03c1",
          7888: "8e43baa60bf3bb796fae9c288572a2a1",
          7902: "d82b4e1643ed0f6396d925538680c69d",
          7970: "b12c02b1aac2ce41b5567b3ec337ed87",
          8272: "23bfb82db511d25e1d262af465a93ea0",
          8329: "1b4569a9e73a9e7ae0a03bd98ee8cb44",
          8391: "4ddb27b4411775bb30b918e46ede533b",
          8646: "abfdd0f483ecba7dc4a0b3260d3fd4ec",
          8755: "3dc3e1632fe6dddd9bad6339509bc33f",
          8880: "2ea5e0b7aadeaa627864b6e799f08fdf",
          8970: "c7f447398bb4d5b482c8030e5283a881",
          9005: "72e4c9af03011a4a7af11b5ed527171c",
          9010: "4b5be9bcd3964cf1e944111149aa580e",
          9022: "ebf7bae5eaeddf2a7d9a6e599284dcc3",
          9028: "d5e52de1aa64b8881df8025344448be4",
          9126: "b9d50ad0b0914386e5553d40358fca79",
          9377: "5f0986d5494b4b5f05ffb102ff6f2fac",
          9491: "3548e23b86a0d769f84682265bc90197",
          9550: "608c6a3d13b914d38c226c0688673371",
          9615: "78767a986c696311b953d4ac5830c2a5",
          9623: "fb134a5684b6756100e88f7db34936fc",
          9936: "8413049a861949cc608a07176dae7802",
          9990: "3c51fb1f1d81d819cb0bbf7fcaf4e2a0"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          1552: "0046b5682c8fe97c8afdbca1931f1243",
          1877: "e1ecfbd5d60b0822f094e505eee8adf4",
          3811: "a126229ede95b503bfddbd53efcedae3",
          3906: "63056a052c2f8918123bb085e38869b2",
          6265: "c93a94af96ec28203142bf5e00fef0f7",
          8646: "c93a94af96ec28203142bf5e00fef0f7"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, r = "@rockstargames/modules-core-videoplayer:", n.l = (e, a, c, d) => {
          if (t[e]) t[e].push(a);
          else {
            var f, b;
            if (void 0 !== c)
              for (var o = document.getElementsByTagName("script"), l = 0; l < o.length; l++) {
                var i = o[l];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == r + c) {
                  f = i;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, n.nc && f.setAttribute("nonce", n.nc), f.setAttribute("data-webpack", r + c), f.src = e), t[e] = [a];
            var s = (a, c) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var r = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach((e => e(c))), a) return a(c)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), b && document.head.appendChild(f)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {}, f = {}, n.f.remotes = (e, a) => {
          n.o(d, e) && d[e].forEach((e => {
            var c = n.R;
            c || (c = []);
            var t = f[e];
            if (!(c.indexOf(t) >= 0)) {
              if (c.push(t), t.p) return a.push(t.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), n.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, c, d, f, b, o) => {
                  try {
                    var n = e(c, d);
                    if (!n || !n.then) return b(n, f, o);
                    var l = n.then((e => b(e, f)), r);
                    if (!o) return l;
                    a.push(t.p = l)
                  } catch (e) {
                    r(e)
                  }
                },
                b = (e, a, r) => d(a.get, t[1], c, 0, o, r),
                o = a => {
                  t.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(n, t[2], 0, 0, ((e, a, c) => e ? d(n.I, t[0], 0, e, b, c) : r()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (c, t) => {
            t || (t = []);
            var r = a[c];
            if (r || (r = a[c] = {}), !(t.indexOf(r) >= 0)) {
              if (t.push(r), e[c]) return e[c];
              n.o(n.S, c) || (n.S[c] = {});
              var d = n.S[c],
                f = "@rockstargames/modules-core-videoplayer",
                b = (e, a, c, t) => {
                  var r = d[e] = d[e] || {},
                    b = r[a];
                  (!b || !b.loaded && (!t != !b.eager ? t : f > b.from)) && (r[a] = {
                    get: c,
                    from: f,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === c && (b("@gsap/react", "2.1.0", (() => Promise.all([n.e(2229), n.e(3581), n.e(7888)]).then((() => () => n(87888))))), b("@popperjs/core", "2.11.8", (() => n.e(6519).then((() => () => n(66519))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(5483), n.e(2229), n.e(5219)]).then((() => () => n(87768))))), b("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([n.e(6695), n.e(2229), n.e(5966), n.e(2918), n.e(6265)]).then((() => () => n(6265))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(5828), n.e(8329), n.e(2229), n.e(9623), n.e(6188), n.e(5966), n.e(5808), n.e(7652)]).then((() => () => n(97652))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(5828), n.e(2229), n.e(9623), n.e(6188), n.e(5808), n.e(1029)]).then((() => () => n(24602))))), b("graphql", "16.10.0", (() => n.e(6286).then((() => () => n(26286))))), b("gsap", "0.0.0", (() => n.e(2407).then((() => () => n(12407))))), b("hammerjs", "2.0.8", (() => n.e(5409).then((() => () => n(15409))))), b("lodash", "4.17.21", (() => n.e(4282).then((() => () => n(14282))))), b("react-dom", "18.2.0", (() => Promise.all([n.e(7360), n.e(2229)]).then((() => () => n(57360))))), b("react-popper", "2.3.0", (() => Promise.all([n.e(2229), n.e(4853), n.e(9005), n.e(4059)]).then((() => () => n(44059))))), b("react-router-dom", "6.17.0", (() => Promise.all([n.e(1604), n.e(2229)]).then((() => () => n(21604))))), b("react", "18.2.0", (() => n.e(3217).then((() => () => n(23217))))), b("uuid", "9.0.1", (() => n.e(2670).then((() => () => n(32670)))))), e[c] = o.length ? Promise.all(o).then((() => e[c] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var c = a.getElementsByTagName("script");
            if (c.length)
              for (var t = c.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = c[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                c = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = c[1] ? a(c[1]) : [];
              return c[2] && (t.length++, t.push.apply(t, a(c[2]))), c[3] && (t.push([]), t.push.apply(t, a(c[3]))), t
            },
            a = (c, t) => {
              if (0 in c) {
                t = e(t);
                var r = c[0],
                  d = r < 0;
                d && (r = -r - 1);
                for (var f = 0, b = 1, o = !0;; b++, f++) {
                  var n, l, i = b < c.length ? (typeof c[b])[0] : "";
                  if (f >= t.length || "o" == (l = (typeof(n = t[f]))[0])) return !o || ("u" == i ? b > r && !d : "" == i != d);
                  if ("u" == l) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == l)
                      if (b <= r) {
                        if (n != c[b]) return !1
                      } else {
                        if (d ? n > c[b] : n < c[b]) return !1;
                        n != c[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (d || b <= r) return !1;
                    o = !1, b--
                  } else {
                    if (b <= r || l < i != d) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (f = 1; f < c.length; f++) {
                var p = c[f];
                s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, t) : !u())
              }
              return !!u()
            },
            c = (c, t, r) => {
              var d = c[t];
              return (t = Object.keys(d).reduce(((c, t) => !a(r, t) || c && !((a, c) => {
                a = e(a), c = e(c);
                for (var t = 0;;) {
                  if (t >= a.length) return t < c.length && "u" != (typeof c[t])[0];
                  var r = a[t],
                    d = (typeof r)[0];
                  if (t >= c.length) return "u" == d;
                  var f = c[t],
                    b = (typeof f)[0];
                  if (d != b) return "o" == d && "n" == b || "s" == b || "u" == d;
                  if ("o" != d && "u" != d && r != f) return r < f;
                  t++
                }
              })(c, t) ? c : t), 0)) && d[t]
            },
            t = (e => function(a, c, t, r) {
              var d = n.I(a);
              return d && d.then ? d.then(e.bind(e, a, n.S[a], c, t, r)) : e(a, n.S[a], c, t, r)
            })(((e, a, t, r, d) => {
              var f = a && n.o(a, t) && c(a, t, r);
              return f ? (e => (e.loaded = 1, e.get()))(f) : d()
            })),
            r = {},
            d = {
              62229: () => t("default", "react", [1, 18, 2, 0], (() => n.e(3217).then((() => () => n(23217))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(1604).then((() => () => n(21604))))),
              16188: () => t("default", "lodash", [1, 4, 17, 21], (() => n.e(4282).then((() => () => n(14282))))),
              95966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(5828), n.e(9623), n.e(6188), n.e(5808)]).then((() => () => n(24602))))),
              81569: () => t("default", "uuid", [1, 9, 0, 0], (() => n.e(2670).then((() => () => n(32670))))),
              81788: () => t("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(5483), n.e(7600)]).then((() => () => n(87768))))),
              13581: () => t("default", "gsap", [1, "workspace:^"], (() => n.e(2407).then((() => () => n(12407))))),
              2918: () => t("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(5828), n.e(8329), n.e(9623), n.e(6188), n.e(5808), n.e(5271)]).then((() => () => n(97652))))),
              4848: () => t("default", "hammerjs", [1, 2, 0, 8], (() => n.e(5409).then((() => () => n(15409))))),
              27654: () => t("default", "@gsap/react", [1, 2, 1, 0], (() => n.e(5507).then((() => () => n(87888))))),
              47224: () => t("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([n.e(6695), n.e(8646)]).then((() => () => n(6265))))),
              75971: () => t("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([n.e(4853), n.e(9005), n.e(6440)]).then((() => () => n(44059))))),
              44853: () => t("default", "react-dom", [1, 18, 2, 0], (() => n.e(7360).then((() => () => n(57360))))),
              16565: () => t("default", "graphql", [1, 16, 9, 0], (() => n.e(6286).then((() => () => n(26286))))),
              9005: () => t("default", "@popperjs/core", [1, 2, 11, 7], (() => n.e(6519).then((() => () => n(66519)))))
            },
            f = {
              2229: [62229],
              2918: [2918],
              3581: [13581],
              3906: [4848, 27654, 47224, 75971],
              4853: [44853],
              5808: [16565],
              5966: [95966],
              6188: [16188],
              9005: [9005],
              9010: [81569, 81788],
              9623: [9623]
            },
            b = {};
          n.f.consumes = (e, a) => {
            n.o(f, e) && f[e].forEach((e => {
              if (n.o(r, e)) return a.push(r[e]);
              if (!b[e]) {
                var c = a => {
                  r[e] = 0, n.m[e] = c => {
                    delete n.c[e], c.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete r[e], n.m[e] = c => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var f = d[e]();
                  f.then ? a.push(r[e] = f.then(c).catch(t)) : c(f)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            n.f.miniCss = (a, c) => {
              e[a] ? c.push(e[a]) : 0 !== e[a] && {
                1552: 1,
                1877: 1,
                3811: 1,
                3906: 1,
                6265: 1,
                8646: 1
              } [a] && c.push(e[a] = (e => new Promise(((a, c) => {
                var t = n.miniCssF(e),
                  r = n.p + t;
                if (((e, a) => {
                    for (var c = document.getElementsByTagName("link"), t = 0; t < c.length; t++) {
                      var r = (f = c[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (r === e || r === a)) return f
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var f;
                      if ((r = (f = d[t]).getAttribute("data-href")) === e || r === a) return f
                    }
                  })(t, r)) return a();
                ((e, a, c, t, r) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = c => {
                    if (d.onerror = d.onload = null, "load" === c.type) t();
                    else {
                      var f = c && ("load" === c.type ? "missing" : c.type),
                        b = c && c.target && c.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = b, d.parentNode && d.parentNode.removeChild(d), r(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, r, 0, a, c)
              })))(a).then((() => {
                e[a] = 0
              }), (c => {
                throw delete e[a], c
              })))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          n.f.j = (a, c) => {
            var t = n.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) c.push(t[2]);
              else if (/^(9(005|010|623)|2229|2918|3581|4853|5966|6188)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise(((c, r) => t = e[a] = [c, r]));
              c.push(t[2] = r);
              var d = n.p + n.u(a),
                f = new Error;
              n.l(d, (c => {
                if (n.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var r = c && ("load" === c.type ? "missing" : c.type),
                    d = c && c.target && c.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + r + ": " + d + ")", f.name = "ChunkLoadError", f.type = r, f.request = d, t[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, c) => {
              var t, r, d = c[0],
                f = c[1],
                b = c[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (t in f) n.o(f, t) && (n.m[t] = f[t]);
                b && b(n)
              }
              for (a && a(c); o < d.length; o++) r = d[o], n.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            c = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          c.forEach(a.bind(null, 0)), c.push = a.bind(null, c.push.bind(c))
        })(), n(23358), n(58157)
      })())
    }
  }
}));