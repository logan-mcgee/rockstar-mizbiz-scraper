try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1b2b807f-a28c-49fc-8d6a-3ad57c3e1b00", e._sentryDebugIdIdentifier = "sentry-dbid-1b2b807f-a28c-49fc-8d6a-3ad57c3e1b00")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "61ad12580c14ee5147480faf673e214137f57fe1",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "61ad12580c14ee5147480faf673e214137f57fe1"
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
        var e, t, d, f, c, n, o = {
            9944: (e, a, r) => {
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
            21998: (e, a, r) => {
              (0, r(82788).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            37389: (e, a, r) => {
              r(21998)
            },
            82788: (e, a, r) => {
              const t = r(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(1537), r.e(7330), r.e(5399), r.e(2229), r.e(8161), r.e(5966), r.e(5524)]).then((() => () => r(75524)))
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
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          114: "4b75e9ccdff850a53b3c218aa546e55e",
          131: "d0e3fd726ee18938edbbecf65036a818",
          278: "cb0e6e8cb51b045756504426e4733f7b",
          280: "85392c299529cacee2d3341eae7c9e95",
          299: "93d8ecc29af139475aaf185cb64b5f32",
          314: "001c679e2402a28bf7df01286d129eaa",
          662: "16189fc10e11abcc0bd7850752dc2cd6",
          824: "1ff4f511f69a7b2b0f548e94666d4f5d",
          907: "57ff8bb12007d25a23be4681069209f9",
          1054: "f15cf03598b3ad2b3aa1a49312f85603",
          1138: "0ead1263319c0d50df8be2e375a7aac3",
          1242: "cb08dae03690aa52ea59036efb55b990",
          1325: "a5884e735ac3b96a9c14e62b2df8a2a8",
          1503: "8478e7f5e3328eb6bb4c4839d3651701",
          1537: "794acb7c1438e65d7ad4c7001639b42d",
          1822: "4e40c6490146aa0c12908e50b57fe954",
          1868: "23aabb56d1ddf70902edc4ec2076f41e",
          2156: "fc2936e535d8db39dd8bc29b27b5eef0",
          2171: "c5723eb66b0db58646e7f8b38b168e6d",
          2221: "ac8cbff06793488498ca10e3a1bfb426",
          2243: "e4238b8b2091083f20eab46883c0f0e2",
          2315: "3d6192bf583d7694f4cde7b9de05ee71",
          2347: "9728d534da85194cfbd3c8cb241c760f",
          2365: "cc90cadfe3deb35b1e59d9b69dd54f01",
          2398: "55f1165f059e0c42ae16202e48ba5a40",
          2466: "e2317f049aa14d7737a417361ebc2783",
          2642: "ad7d9d1289fb5a805dc991918955a3d4",
          2678: "03019a5c888bb9ee5a3ec3f21a830186",
          2864: "fe4bbeb52cf5ff79bdbdc0441a6ece01",
          3034: "94ef4474a478dd63c008dd9822f40325",
          3197: "694983dfa8807c8586912527dd26755e",
          3343: "245b4b2637a94605fc9cd068d9c6dc07",
          3370: "594a4bb1487a190f503b8cb3de0f0617",
          3475: "7373a8146cd851e821dde6852a4c6cf2",
          3486: "611b1eb512637d079dabfb69d794124e",
          3697: "098a4326d7c71b70ff5254183c7db832",
          3885: "f85ae55a7151fc4eec751a7b00aa8414",
          3941: "b4623f1e071849ed27d86bf34ac1f5a9",
          4011: "8d4f2afa5ed0ba435fbfe8251fb9079a",
          4528: "f86a395b72ac1c19956c444efc63befa",
          4621: "f4077c8cac1008dc47e2198a09e2ef4d",
          4700: "7f5b64a2ccf86299f9a6f0a98bc671c5",
          4710: "84d9a790d16c4898453f327857e1aed2",
          4731: "12b14df2288c8c70274318f31624e7f8",
          4799: "00eb9ca84b9883e430da9bd3c06ad66a",
          4851: "2fd7d01b8c83765be567c6ab64079706",
          4861: "772a0b73664b48b202c8f2206b868ffb",
          4913: "df87f90cff01666b8975cc529a1498ea",
          5018: "89be401fb1fe198ab141666e55ed6ffc",
          5233: "ad8cd29609f8bcd48e2a3df4dbcc4155",
          5259: "a6d64cc427103576f6d981ec84d3d6fd",
          5399: "3846e405ab1a4a073f83641cf4e24994",
          5524: "1362b88e6ec5be775b66b0b3e43069ac",
          5530: "bfe5dadb0ca1f18add9841044af91936",
          5639: "f68e3278602ceebdff12cb1829b6d6a2",
          5663: "17eedcfe0a785732a9a9b77518d6241e",
          5742: "92186a6286a9dcc377dd1837169474f0",
          5830: "4442469ce085406e77dd03b4afe613da",
          5832: "8e1aadc78e850fcedaf16034abdef520",
          6019: "1e8a9d95deb2697c721ab209abfb29ea",
          6267: "872b5eae58e77c87b8c807ecc9cf2531",
          6280: "f44aeb7127a44e47b6a1dcc142eafa88",
          6285: "d877a8194788ecd09df25fa8e2d1b947",
          6361: "c311c2efca96c405b1bd86c9ef10e2c2",
          6664: "8397f7d35667c652ffd09e766190da24",
          6879: "7ba7d5531916d913c94952f13fdaebe4",
          6891: "8fb97617e309bac986fd6aeca1f4c737",
          6997: "ff61c3d702985c3ee8e8e783181bce5b",
          7010: "fe7211167f6ec7b3a589df0600933b4b",
          7073: "795495bdc2294d9262b5ab7143ecec8a",
          7330: "20b11896b311cded6b91914a2608da9e",
          7354: "8c9eac9228741ce2b3d4c9cddb9b15ac",
          7436: "3a34d90d188352d3ac7d6b47e764e8af",
          7452: "4ca8a881ec6e173e774eaa9c955fd7d7",
          7453: "1820d635c24f9dc667803a2da8c02868",
          7970: "c60d23dec569a36c132d5d0fd033d82a",
          8161: "10e64c4a62e2d24674c027f7765c24f7",
          8272: "a4076591edc3bbf0170b292e74e28db7",
          8391: "1a9da73dcca68953cf1db6959d35c178",
          8755: "00e06a020eb264edfa32ae3414154d9c",
          8880: "986c10dc608dce9fe33a1b9c24393e19",
          8970: "048e39a97f7da5d4e109201c3a21e312",
          9022: "5f527ec64759ef2f4838fef8e5d200b2",
          9028: "d7f5410cd9a874839c49f6db481d55ac",
          9126: "222515e4eec98e011f75adda7fc83e92",
          9368: "dea322e35531802b032a2bacca620476",
          9377: "e98e57ab892f4dcaa51435678b1cfda9",
          9489: "93595ca82a65520a42de8a291f7b087e",
          9615: "082186aa0b861547e7ecdbd36d50c05d",
          9625: "e94ab5b84bc89dfa6c7721409266e5db",
          9728: "cb13741129465ee54fa182811642eed4",
          9936: "5298636c793311f6cce68609c07df65a",
          9990: "0fd787bc42a7959959227848de7d7da2"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1325: "34b3f5465a92bac15ce2a811712ab3bf",
          5524: "f2d6d51f72e1e391f1819d2c36ff03c7",
          7354: "34b3f5465a92bac15ce2a811712ab3bf"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + r), c.src = e), d[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
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
          5524: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, n, o) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), d);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, t[2], 0, 0, ((e, a, r) => e ? f(i.I, t[0], 0, e, c, r) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var f = i.S[r],
                c = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2315), i.e(2229), i.e(9625)]).then((() => () => i(58718))))), n("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([i.e(1537), i.e(7330), i.e(280), i.e(2229), i.e(8161), i.e(5966), i.e(7354)]).then((() => () => i(27354))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(1537), i.e(2229), i.e(8161)]).then((() => () => i(82261))))), n("lodash", "4.17.21", (() => i.e(9489).then((() => () => i(99489))))), n("react-dom", "18.3.1", (() => Promise.all([i.e(6019), i.e(2229)]).then((() => () => i(66019))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(9728), i.e(2229), i.e(4853)]).then((() => () => i(49728))))), n("react", "18.3.1", (() => i.e(1138).then((() => () => i(11138))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return o.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return o.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[r] = Promise.all(o).then((() => e[r] = 1)) : e[r] = 1
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
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, t += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return t
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
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
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
                var p = a[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? r(p, t) : !u())
              }
              return !!u()
            },
            t = (a, t, d, f) => {
              var c = f ? (e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(c).reduce(((a, t) => !r(d, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    f = (typeof d)[0];
                  if (t >= r.length) return "u" == f;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  t++
                }
              })(a, t) ? a : t), 0)) && c[t]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, r, t, d, f) {
              var c = i.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, i.S[a], r, !1, d, f)) : e(a, i.S[a], r, t, d, f)
            })(((e, r, f, c, n, o) => {
              if (!((e, a) => e && i.o(e, a))(r, f)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var b, s = t(r, f, n, c);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void d(((e, r, t, d, f) => {
                var c = e[t];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(r, e, f, n, c))
            })),
            c = {},
            n = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(1138).then((() => () => i(11138))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(9728), i.e(4853)]).then((() => () => i(49728))))),
              16188: () => f("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(9489).then((() => () => i(99489))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => () => i(82261))),
              47224: () => f("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([i.e(280), i.e(1325)]).then((() => () => i(27354))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(2315), i.e(1503)]).then((() => () => i(58718))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(6019).then((() => () => i(66019)))))
            },
            o = {
              2229: [62229],
              4853: [44853],
              5524: [47224, 81788],
              5966: [95966],
              8161: [9623, 16188]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var r = a => {
                  c[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete c[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(c[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              5082: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1325: 1,
                5524: 1,
                7354: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
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
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
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
            5082: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|4853|5966)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
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
                n = r[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i(37389), i(85819)
      })())
    }
  }
}));