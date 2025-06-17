! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a444d5c6-32bc-4415-b3d8-ca287230f0fc", e._sentryDebugIdIdentifier = "sentry-dbid-a444d5c6-32bc-4415-b3d8-ca287230f0fc")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
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
        var e, t, d, f, n, o, c = {
            13218: (e, a, r) => {
              (0, r(77600).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            44857: (e, a, r) => {
              r(13218)
            },
            67884: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var n = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + n
              };
              Number.isInteger
            },
            77600: (e, a, r) => {
              const t = r(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(7722), r.e(3830), r.e(9320), r.e(2229), r.e(6497), r.e(5966), r.e(5426)]).then((() => () => r(55426)))
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
          return c[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = c, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
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
          for (var n = 2 & r && a;
            "object" == typeof n && !~e.indexOf(n); n = t(n)) Object.getOwnPropertyNames(n).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          5: "191f5ec28ed95665daa1a2f676422546",
          131: "fc86702e66d4e819aff6a3e9ea643c0e",
          278: "f6871f346294086c6f8f5dba71dc3251",
          299: "4c0eabb6c8aa0fdaf10fb26bfdbe32ae",
          314: "8313e7f0c9fccea9b705169a9dcb61b4",
          621: "9bee86c2f32301b6d19e4587b2b039b0",
          662: "391d8241b8b3058fb77ab57b6f8fc8ff",
          824: "9eec5721b7a950b940b7683c5d0d174a",
          838: "8134761b15dc1a3f6694c26712c8deb8",
          907: "3541872f2e52aa562c22f08c9810af98",
          964: "999593b7876aec4a334a85e2d246dcb2",
          1054: "9677429ee273efd58a111dda031e5b09",
          1242: "5e05b561bc66e9ff275c49270fc1fe75",
          1822: "10cb856aae47dabbac059a8c1c179730",
          1868: "607e123b2a5baef1b2cd476e1f2bdb2c",
          2156: "40231174fae937f0919755be2f7b7788",
          2171: "e709997f0c8ed02a6c974f5a7881642f",
          2221: "20545a7c26c750ef6c7fc3a3b23f334f",
          2243: "99f8522dbdf2b7078732294f39af6587",
          2347: "ef46dd195e1efc83c1c41859084c7745",
          2365: "7017bc7200994ffbaa43c7394318f32d",
          2398: "7b03202a9fa0db980cba41bacc4bdbbc",
          2466: "08fced398f862e892ed49e432f2df883",
          2592: "a9eaa3bd12622b7310643552740eace6",
          2642: "b3b38eb29ef6ae7a505de0ea576abadd",
          2678: "505337f907dff0b6c9e30995d7700e1d",
          2864: "598dcd13dacc088ae63e8bb9af87a7b1",
          3002: "5f4382f0006f877d7f67187ec51c655b",
          3034: "29e01d1c3bbe7be275726b8dafea4ffb",
          3197: "816e940463584cb451e2e436f88563f3",
          3218: "7e632cfc1da08dcfd64f4582566fba4d",
          3343: "a77f9afecfb9a9568ce32b0fd12ae582",
          3370: "a16e568830252780c23003a6c2533449",
          3475: "c4a0d3e35a7c3946c501f82038d97ae4",
          3486: "0452384c8af81dd6d4c962982152275d",
          3697: "8958176fa5babc026ceef2430274c715",
          3830: "b8a83a6b06f254a217488ae051ae141f",
          3885: "7a4dd87bbe184821d2c96b908faa2950",
          3941: "ece4720ed598788177766b1995ea8a36",
          4011: "a20458b76fd78031b3d9ca143d5e29a9",
          4105: "dd4e0b785ee9ccee6c5f52efccaec597",
          4480: "8f474d65d034c6990c5e36719f2903f6",
          4528: "006e1fcc16813e6d18c6a905c49cc0b1",
          4621: "7c77872e0ccc61eaabc1b0e0556948ff",
          4700: "1030a773c8202478f41f700a6c158285",
          4710: "e2118d9880f9f5ff977ff878c9dcdd9e",
          4731: "0b22c787125eacf2f83160fb15ce439f",
          4799: "1b830882382dcd4b9e2532e6ed633d6c",
          4851: "5518eade04b7caca1de6b9fe96137872",
          4861: "a450f7595272701ba6b31d30ef736db1",
          4913: "589c1e5c7c419f539761aecd99581df4",
          4981: "049bcf508e2606e089fdfabbde522c8f",
          5018: "489763c38c68705cea08103d4a82ca52",
          5233: "fcf435b9485cc9f27d14ed1858a9b178",
          5259: "7973a90d125f4b877ba4dd2b3567b08c",
          5426: "9a663bb1c98e525173c3900f91acb161",
          5530: "74a7be8901dd640622bdda6463ac767e",
          5639: "4ee6e32e1f9813420a4a42c944f49d1a",
          5663: "8cba646a710b2e8fcd4fa437bc20ba06",
          5742: "be8aa11d8122c5e91ae37715b5a4806c",
          5830: "220c337e806c2ad39282ae7f34a0d6c2",
          5832: "2433743298de0cb0e248ea04da5ac9ee",
          6267: "28592a5edc59a8b19dafd16f1fc9f421",
          6280: "213627b0b829bcf4922d808e8f6da732",
          6285: "1171cbb56e9705022d5677d28d0fe151",
          6361: "d9c2c205323eba17d85bc2e153cf6677",
          6497: "cfa2caa31c3f01d4e3629338a89f456b",
          6664: "644d2d3074a45f94653e52c4e2d2ae42",
          6879: "e999c9b5ba61c57b78ee5722cb566a9c",
          6891: "6c93ec63b2e6fd83ae9941e459a921bb",
          6997: "a3191fc56911db587828346d6c47e610",
          7010: "a47e884216c1c51eb7132c81a5c1dcb5",
          7073: "db1ea21ecc76cba040b258fdcb5c6283",
          7353: "9f689390589fd834b7bdbd740763951d",
          7436: "dd85d1229a1b05e2bb0d77e07ddfd54d",
          7452: "f898523d30ba28f216a70c63afb2d41f",
          7453: "b3b65c00b41ae6eafac54c16e7a023a0",
          7722: "4880c17565de1aa5a292b40f4d5c0847",
          7970: "6f26ee0e8c5291721e9755e09d7395b5",
          8272: "23d5c9cd8cd5a67f77c19c940adbddb5",
          8391: "191725ca85c2cf848cc1b7e3effe25e2",
          8583: "805c58fb68851bf891cb21652d48f5af",
          8654: "1606a409038bb89327cdf30cf6b5f107",
          8755: "4b61ba04ef1a41fa6182f6e7ac0eafdd",
          8880: "7f8adf103464d28b3cf5d214d3b126a7",
          8970: "9f0b0051edbd93a1da0f3e184e8fa1f9",
          9022: "71d8aea7a2d4199c0ba23f881b5049d1",
          9028: "869a511c84b0f2fde4668cf8408e1583",
          9126: "62ef9a21e3ff895e0cd1073cab8d0844",
          9320: "70827e0d777a167c8dc8febf2892a12a",
          9377: "09bf498675b62b3c68383f7bb6b3c032",
          9615: "ba3abee5e35f5b851b2fc116710a69ae",
          9936: "b9cfe8d128e6765f15f1f910d28a5a35",
          9990: "dcf347d596fbe4bfb841638dae21e712"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          964: "862399b32420b2fbc03810a979eab2e5",
          5426: "5b398003b12b7b4b1d769281f6b4a7ab",
          8583: "862399b32420b2fbc03810a979eab2e5"
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
            var n, o;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), b = 0; b < c.length; b++) {
                var s = c[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  n = s;
                  break
                }
              }
            n || (o = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, i.nc && n.setAttribute("nonce", i.nc), n.setAttribute("data-webpack", f + r), n.src = e), d[e] = [a];
            var l = (a, r) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], n.parentNode && n.parentNode.removeChild(n), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), o && document.head.appendChild(n)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          5426: [31879]
        }, o = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = o[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, n, o, c) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return o(b, n, c);
                    var i = b.then((e => o(e, n)), d);
                    if (!c) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                n = (e, a, d) => f(a.get, t[1], r, 0, c, d),
                c = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, t[2], 0, 0, ((e, a, r) => e ? f(i.I, t[0], 0, e, n, r) : d()), 1)
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
                n = "@rockstargames/sites-red-dead-redemption-2",
                o = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : n > o.from)) && (d[a] = {
                    get: r,
                    from: n,
                    eager: !!t
                  })
                },
                c = [];
              return "default" === r && (o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(3218), i.e(2229), i.e(5)]).then((() => () => i(35671))))), o("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([i.e(7722), i.e(3830), i.e(2592), i.e(2229), i.e(6497), i.e(5966), i.e(964)]).then((() => () => i(50964))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7722), i.e(2229), i.e(6497)]).then((() => () => i(35553))))), o("lodash", "4.17.21", (() => i.e(4981).then((() => () => i(4981))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(621)]).then((() => () => i(90621))))), o("react-router-dom", "6.30.0", (() => Promise.all([i.e(4105), i.e(2229), i.e(3271)]).then((() => () => i(94105))))), o("react", "18.3.1", (() => i.e(8654).then((() => () => i(98654))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return c.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return c.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
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
                for (var d = 1, f = 1; f < e.length; f++) d--, t += "u" == (typeof(o = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var n = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                n.push(0 === o ? "not(" + c() + ")" : 1 === o ? "(" + c() + " || " + c() + ")" : 2 === o ? n.pop() + " " + n.pop() : a(o))
              }
              return c();

              function c() {
                return n.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var n = 0, o = 1, c = !0;; o++, n++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (n >= t.length || "o" == (i = (typeof(b = t[n]))[0])) return !c || ("u" == s ? o > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!c || "u" != s) return !1
                  } else if (c)
                    if (s == i)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (c = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || o <= d) return !1;
                    c = !1, o--
                  } else {
                    if (o <= d || i < s != f) return !1;
                    c = !1
                  } else "s" != s && "n" != s && (c = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (n = 1; n < a.length; n++) {
                var p = a[n];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? r(p, t) : !u())
              }
              return !!u()
            },
            t = (a, t, d, f) => {
              var n = f ? (e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(n).reduce(((a, t) => !r(d, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    f = (typeof d)[0];
                  if (t >= r.length) return "u" == f;
                  var n = r[t],
                    o = (typeof n)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && d != n) return d < n;
                  t++
                }
              })(a, t) ? a : t), 0)) && n[t]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, r, t, d, f) {
              var n = i.I(a);
              return n && n.then && !t ? n.then(e.bind(e, a, i.S[a], r, !1, d, f)) : e(a, i.S[a], r, t, d, f)
            })(((e, r, f, n, o, c) => {
              if (!((e, a) => e && i.o(e, a))(r, f)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, c);
              var b, s = t(r, f, o, n);
              return s ? ((b = s).loaded = 1, b.get()) : c ? c() : void d(((e, r, t, d, f) => {
                var n = e[t];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(n).map((e => e + " from " + n[e].from)).join(", ")
              })(r, e, f, o, n))
            })),
            n = {},
            o = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(8654).then((() => () => i(98654))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(4105), i.e(3271)]).then((() => () => i(94105))))),
              16188: () => f("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(4981).then((() => () => i(4981))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => () => i(35553))),
              47224: () => f("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([i.e(2592), i.e(8583)]).then((() => () => i(50964))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(3218), i.e(838)]).then((() => () => i(35671))))),
              23271: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(3002).then((() => () => i(90621)))))
            },
            c = {
              2229: [62229],
              3271: [23271],
              5426: [47224, 81788],
              5966: [95966],
              6497: [9623, 16188]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(n, e)) return a.push(n[e]);
              if (!b[e]) {
                var r = a => {
                  n[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete n[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? a.push(n[e] = d.then(r).catch(t)) : r(d)
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
                964: 1,
                5426: 1,
                8583: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (n = r[t]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (d === e || d === a)) return n
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var n;
                      if ((d = (n = f[t]).getAttribute("data-href")) === e || d === a) return n
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var n = r && r.type,
                        o = r && r.target && r.target.href || a,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + o + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = n, c.request = o, f.parentNode && f.parentNode.removeChild(f), d(c)
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
              else if (/^(2229|3271|5966)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = i.p + i.u(a),
                n = new Error;
              i.l(f, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", n.name = "ChunkLoadError", n.type = d, n.request = f, t[1](n)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, f = r[0],
                n = r[1],
                o = r[2],
                c = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in n) i.o(n, t) && (i.m[t] = n[t]);
                o && o(i)
              }
              for (a && a(r); c < f.length; c++) d = f[c], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i(44857), i(85819)
      })())
    }
  }
}));