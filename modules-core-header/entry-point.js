! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fd75aace-be1e-425f-87c4-9db54d41c54f", e._sentryDebugIdIdentifier = "sentry-dbid-fd75aace-be1e-425f-87c4-9db54d41c54f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, d, t, f, c, o = {
            49293: (e, a, r) => {
              (0, r(31789).w)(1)
            },
            31789: (e, a, r) => {
              const d = r(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = d(r.y.meta.url, e)
              }
            },
            23358: (e, a, r) => {
              r(49293)
            },
            90569: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var d = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, t = 0, f = d.length; t !== a && f >= 0;) "/" === d[--f] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = d.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            14197: (e, a, r) => {
              "use strict";
              var d = {
                  "./vanilla": () => Promise.all([r.e(3093), r.e(1095), r.e(5561), r.e(2229), r.e(4204), r.e(5966), r.e(1788), r.e(2542), r.e(4853), r.e(2918), r.e(2609), r.e(3696)]).then((() => () => r(43696))),
                  "./core": () => Promise.all([r.e(3093), r.e(1095), r.e(5561), r.e(2229), r.e(4204), r.e(5966), r.e(1788), r.e(2542), r.e(2918), r.e(2609), r.e(2319), r.e(5582)]).then((() => () => r(95582))),
                  "./GlobalNavigationWrapper": () => Promise.all([r.e(2229), r.e(1788), r.e(2542), r.e(2319), r.e(3692)]).then((() => () => r(94119)))
                },
                t = (e, a) => (r.R = a, a = r.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var d = "default",
                      t = r.S[d];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[d] = e, r.I(d, a)
                  }
                };
              r.d(a, {
                get: () => t,
                init: () => f
              })
            }
          },
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var r = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          b.r(t);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & d && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, b.d(t, f), t
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          131: "286d455fc513665061aeac681969ba55",
          228: "f618663e95dec83d71598c7a352984cb",
          278: "b3fd86899a0122f59d3db93d6be6be5e",
          299: "ac6f24716fe06eb5ff9e7b51472e7e29",
          314: "2c5a75d5dcfb1d720a066a17a0113b26",
          662: "1a6560f46e08cc164982eb75f3169bfc",
          824: "1cff685f03c8565628e7ebe01c3533be",
          907: "f2a5d0999fd0f56bf95183451387d942",
          1054: "14d774d7cd1ce967eb6f939394fef224",
          1095: "f3676f36ef5460d04bdc6ec6808cf482",
          1242: "45ed8ee10019411dff408065eb0a0681",
          1506: "6566f14750b7e2be3c7ed32f4edcec2d",
          1604: "3d887f5df664f4d4b616dc16d4642f99",
          1788: "80b3bedd40be6b87b58529875d91cf8e",
          1822: "a8c32985aa7005fdd94006bd52b74856",
          1868: "5f35202c269d4c465b4e7dc2074d02d6",
          2156: "773709b0a945ab0f60f4bef72ba210d1",
          2171: "327ea25eb26111aac05939754a6ffed5",
          2221: "268ed6ef6038ef2608f000134e007019",
          2229: "b378d04b4e35f05b2ff03797a33e8151",
          2243: "2dd975edf231f85e724206cd6f3f930c",
          2319: "53de04808b481adcfd7ef14ff2dfd928",
          2347: "25814af54c210cc77dc36d19c5cfd1fc",
          2365: "a4ec468eec85d2795fce80fe9dc48430",
          2398: "38308d1ced5e717fe3dfccea0008b3b9",
          2407: "8b308ac7a4dbc3d18b402de1c8b63223",
          2466: "0c2aba7f9a0d25a56a17ee242306efea",
          2542: "9e8fa390efac5492dfd6f0dead0ed6d5",
          2609: "06c8047b00efb4a95198c346255d8594",
          2642: "c667304db59d758a4a9aab8b24c98a4c",
          2678: "96aaed3f2a22e6aec1802930cd53919a",
          2864: "84a9107c9b5f31920dcc2e751975b0d2",
          2918: "e7b339e12193081d6373cf262792b5ae",
          3034: "a917febf08881677aedbd58b6cf6ae80",
          3093: "124e29fa8d895da4f11473b5932e115d",
          3197: "3521ca95b99c52b40c32828aa2cc9818",
          3217: "a0cbf43d88bb7e68eef65f8b7e297926",
          3343: "745ff21a3c39c034eb800ff2ff583c9a",
          3370: "87a6dbf32dd68d14bf722764fbf6b90a",
          3386: "982164ab7e15dbcbd9b334ed8a8251dd",
          3461: "f6297834e3dc9594a7fb35a4af8db2d8",
          3475: "0615946c864d6e77e0c4ccce5ba3958b",
          3486: "274be42aeab9b2db898d5263b9b11a1f",
          3692: "3945b7b2d2d417edae48636c17c2c51e",
          3696: "cbf5fa0f4ffab5878a29763687e274ce",
          3697: "884b3db46f173832044017c0093b6d0c",
          3885: "1f176dab888545ceb2a1187f11798fe6",
          3941: "4211161276ac47dcae5d9565e02e0379",
          4011: "f96a68f1af23611711bd4e5938414c18",
          4059: "0862425cfef7c33113058d4d1155f087",
          4165: "51ae2423a2f49a5eff9e056a3add93e7",
          4204: "83d558a9fccc061f9c305a05143d5f2b",
          4282: "c44313ced0469d8637b96d233075e878",
          4528: "0c240a146fa88db77fe340c6fed8d940",
          4621: "3eddd718501177cb1dcb120a451efe5d",
          4700: "5f358f524c34b0ddd17b7d4571288c91",
          4710: "29089e64c6a45d3a4e647bade7ca6779",
          4731: "7044cca4ba8d326a3faa87cc1b04fbe6",
          4799: "045e168ed7e9ea78765a4475ad312f7a",
          4851: "c7f45d6f40fee68d37044f3c44fa4017",
          4853: "18ffef5508dbbf483ae4c0a3acbb95fa",
          4861: "755cd9e54f1e6ee6411ed91814294527",
          4913: "29b48fcad5c93aed1ca35383a5f85c10",
          5018: "1bae733c94e8fb84b4809739cd5c3497",
          5127: "2abe6827a2bd26898f7e0bfda24d9998",
          5219: "c821ac73712fce30e84d6b63bbb3f62a",
          5233: "f041c9390d0dbdc1d91560e5e83c157d",
          5259: "52f03bedc0186d4522618007c1f1c7ed",
          5483: "7692ad05a1122690e929ea11b3649c4f",
          5530: "9a1aa616e90f0696133cfc8b8acfe280",
          5561: "c89392c47fbc4f2f889097bc4690079a",
          5582: "1692406ae3626cee9c42635c86003518",
          5639: "351214bba719e6ff4779ec735703ad41",
          5663: "1a54ac6d7bdb7b3334ecc8c89e85bb19",
          5742: "c116b1eefcf4ace03faceffccee46d7c",
          5830: "8a5f55107e83f7b38bf5cb437951295f",
          5832: "043b83bfffe8d913ae46a13260418612",
          5966: "caca9fd6857f55e2664fa56995b167e8",
          6267: "9c1bf8c258f1ebf6476fa8b8bda35a3e",
          6280: "cb77598f3943d6f9ee0579883b022ed3",
          6285: "cbb66e88eb305d7e07d7304e6480ac8f",
          6361: "9415fd38baa5753b744c662a1a93f281",
          6440: "15764bf59b4db854c2c5f5d6755c464c",
          6519: "5d1dd7f53bb93ca4dc7836d407e443fb",
          6546: "a7a31a527606a24b792676f113ff59fa",
          6664: "bbaace79a920a2d3b92b4429dbdda745",
          6832: "994c95266126b31605a4137f90269ce6",
          6879: "0be4af77c8bcf873b4ee62c1241d5c9d",
          6891: "26175d9ee02775d640616419844bc57d",
          6997: "0bccbda62063ff682d57a4941abeb718",
          7010: "efc528a6eacdc5c99f4ea1dcbbe30507",
          7073: "f49e49db7aaf3861c63c75eaf4ed10af",
          7360: "6520cf7cabfd130904d6be0997e2b8bd",
          7436: "4a02e6637a48a5ecf7b060c8e75a5aa6",
          7452: "be47512eb542c1d031c7f1fa8371e08e",
          7453: "cc4aa76d08d00b2c9f95ce9e7091a595",
          7600: "0939d8660a6a6389648166354186b974",
          7847: "fcf9ed4772bbdb4167cf78f1ad65f0a8",
          7970: "983ad42aa30847d53453ef76e96575c8",
          8272: "74eec06b4e45de2fc6741572ecedbca4",
          8391: "709b6b20341057335f692799055835fd",
          8755: "a37caa8fb7ec8a2282dd4da81e7ded3f",
          8880: "9e85b8f2b302b2f6efa112c4d0e5bdaf",
          8970: "c1c5cf167a845ade38b68e20f67602a2",
          9022: "dba53c61a9c634a15e598b03a11a3672",
          9028: "17d81d28f94786dd4d56139a54a33e00",
          9126: "98cb2c8358a7f8499f9e6035a292a06d",
          9377: "a5ea084c650be952ba8e08cc02ed4b49",
          9525: "79a3f47011c10f3d6f3efd47b4e05363",
          9550: "60933493b5ac56d6099ed33205d0853a",
          9615: "ea3146f0ef14779b9256a250cea231ed",
          9931: "0849ee1c47a80829dadfea44dd9c2720",
          9936: "534dbf2b645c0ba764e7706ef1ec0c3a",
          9990: "85b0cd076832185353dc52713e8ddacc"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          2609: "034a0a602334e4d9c47ecbe29a8dbd4a",
          9525: "87a04bde93c29ad09de4fa672be7cd55"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, t = "@rockstargames/modules-core-header:", b.l = (e, a, r, f) => {
          if (d[e]) d[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), l = 0; l < n.length; l++) {
                var i = n[l];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + r) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, b.nc && c.setAttribute("nonce", b.nc), c.setAttribute("data-webpack", t + r), c.src = e), d[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, c = {}, b.f.remotes = (e, a) => {
          b.o(f, e) && f[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var d = c[e];
            if (!(r.indexOf(d) >= 0)) {
              if (r.push(d), d.p) return a.push(d.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), b.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                f = (e, r, f, c, o, n) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return o(b, c, n);
                    var l = b.then((e => o(e, c)), t);
                    if (!n) return l;
                    a.push(d.p = l)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => f(a.get, d[1], r, 0, n, t),
                n = a => {
                  d.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(b, d[2], 0, 0, ((e, a, r) => e ? f(b.I, d[0], 0, e, o, r) : t()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, d) => {
            d || (d = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(d.indexOf(t) >= 0)) {
              if (d.push(t), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var f = b.S[r],
                c = "@rockstargames/modules-core-header",
                o = (e, a, r, d) => {
                  var t = f[e] = f[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!d != !o.eager ? d : c > o.from)) && (t[a] = {
                    get: r,
                    from: c,
                    eager: !!d
                  })
                },
                n = [];
              return "default" === r && (o("@popperjs/core", "2.11.8", (() => b.e(6519).then((() => () => b(66519))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(5483), b.e(2229), b.e(5219)]).then((() => () => b(87768))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([b.e(3093), b.e(2229), b.e(4204), b.e(5966), b.e(1788), b.e(2918), b.e(9525), b.e(5127)]).then((() => () => b(22457))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(3093), b.e(1095), b.e(2229), b.e(4204), b.e(5966), b.e(6546)]).then((() => () => b(7607))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(3093), b.e(2229), b.e(4204)]).then((() => () => b(24602))))), o("framer-motion", "7.10.3", (() => Promise.all([b.e(9931), b.e(2229), b.e(3461)]).then((() => () => b(69931))))), o("gsap", "0.0.0", (() => b.e(2407).then((() => () => b(12407))))), o("lodash", "4.17.21", (() => b.e(4282).then((() => () => b(14282))))), o("react-dom", "18.2.0", (() => Promise.all([b.e(7360), b.e(2229)]).then((() => () => b(57360))))), o("react-popper", "2.3.0", (() => Promise.all([b.e(2229), b.e(4853), b.e(3386), b.e(4059)]).then((() => () => b(44059))))), o("react-remove-scroll", "2.6.2", (() => Promise.all([b.e(2229), b.e(7847)]).then((() => () => b(30228))))), o("react-router-dom", "6.17.0", (() => Promise.all([b.e(1604), b.e(2229)]).then((() => () => b(21604))))), o("react", "18.2.0", (() => b.e(3217).then((() => () => b(23217))))), o("spatial-navigation-polyfill", "1.3.1", (() => b.e(1506).then((() => () => b(31506)))))), e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var d = r.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = r[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = r[1] ? a(r[1]) : [];
              return r[2] && (d.length++, d.push.apply(d, a(r[2]))), r[3] && (d.push([]), d.push.apply(d, a(r[3]))), d
            },
            a = (r, d) => {
              if (0 in r) {
                d = e(d);
                var t = r[0],
                  f = t < 0;
                f && (t = -t - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, l, i = o < r.length ? (typeof r[o])[0] : "";
                  if (c >= d.length || "o" == (l = (typeof(b = d[c]))[0])) return !n || ("u" == i ? o > t && !f : "" == i != f);
                  if ("u" == l) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == l)
                      if (o <= t) {
                        if (b != r[o]) return !1
                      } else {
                        if (f ? b > r[o] : b < r[o]) return !1;
                        b != r[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || l < i != f) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, d) : !u())
              }
              return !!u()
            },
            r = (r, d, t) => {
              var f = r[d];
              return (d = Object.keys(f).reduce(((r, d) => !a(t, d) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var d = 0;;) {
                  if (d >= a.length) return d < r.length && "u" != (typeof r[d])[0];
                  var t = a[d],
                    f = (typeof t)[0];
                  if (d >= r.length) return "u" == f;
                  var c = r[d],
                    o = (typeof c)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && t != c) return t < c;
                  d++
                }
              })(r, d) ? r : d), 0)) && f[d]
            },
            d = (e => function(a, r, d, t) {
              var f = b.I(a);
              return f && f.then ? f.then(e.bind(e, a, b.S[a], r, d, t)) : e(a, b.S[a], r, d, t)
            })(((e, a, d, t, f) => {
              var c = a && b.o(a, d) && r(a, d, t);
              return c ? (e => (e.loaded = 1, e.get()))(c) : f()
            })),
            t = {},
            f = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => b.e(3217).then((() => () => b(23217))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => b.e(1604).then((() => () => b(21604))))),
              16188: () => d("default", "lodash", [1, 4, 17, 21], (() => b.e(4282).then((() => () => b(14282))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => b(24602))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([b.e(5483), b.e(7600)]).then((() => () => b(87768))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => b.e(7360).then((() => () => b(57360))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([b.e(1095), b.e(4165)]).then((() => () => b(7607))))),
              13581: () => d("default", "gsap", [1, "workspace:^"], (() => b.e(2407).then((() => () => b(12407))))),
              20270: () => d("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => b.e(9525).then((() => () => b(22457))))),
              63582: () => d("default", "framer-motion", [1, 7, 5, 1], (() => b.e(9931).then((() => () => b(69931))))),
              75971: () => d("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([b.e(4853), b.e(3386), b.e(6440)]).then((() => () => b(44059))))),
              79952: () => d("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => b.e(1506).then((() => () => b(31506))))),
              84269: () => d("default", "react-remove-scroll", [1, 2, 5, 7], (() => b.e(228).then((() => () => b(30228))))),
              43386: () => d("default", "@popperjs/core", [1, 2, 11, 8], (() => b.e(6519).then((() => () => b(66519)))))
            },
            c = {
              1788: [81788],
              2229: [62229],
              2609: [13581, 20270, 63582, 75971, 79952],
              2918: [2918],
              3386: [43386],
              4204: [9623, 16188],
              4853: [44853],
              5966: [95966],
              9525: [84269]
            },
            o = {};
          b.f.consumes = (e, a) => {
            b.o(c, e) && c[e].forEach((e => {
              if (b.o(t, e)) return a.push(t[e]);
              if (!o[e]) {
                var r = a => {
                  t[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                o[e] = !0;
                var d = a => {
                  delete t[e], b.m[e] = r => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var c = f[e]();
                  c.then ? a.push(t[e] = c.then(r).catch(d)) : r(c)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                2609: 1,
                9525: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var d = b.miniCssF(e),
                  t = b.p + d;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), d = 0; d < r.length; d++) {
                      var t = (c = r[d]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (d = 0; d < f.length; d++) {
                      var c;
                      if ((t = (c = f[d]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(d, t)) return a();
                ((e, a, r, d, t) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) d();
                    else {
                      var c = r && ("load" === r.type ? "missing" : r.type),
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                      n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), t(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, t, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            4295: 0
          };
          b.f.j = (a, r) => {
            var d = b.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) r.push(d[2]);
              else if (/^(1788|2229|2918|3386|4853|5966)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((r, t) => d = e[a] = [r, t]));
              r.push(d[2] = t);
              var f = b.p + b.u(a),
                c = new Error;
              b.l(f, (r => {
                if (b.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", c.name = "ChunkLoadError", c.type = t, c.request = f, d[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var d, t, f = r[0],
                c = r[1],
                o = r[2],
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (d in c) b.o(c, d) && (b.m[d] = c[d]);
                o && o(b)
              }
              for (a && a(r); n < f.length; n++) t = f[n], b.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(23358), b(14197)
      })())
    }
  }
}));