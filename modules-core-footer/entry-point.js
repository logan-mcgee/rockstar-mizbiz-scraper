! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e0d634ce-166d-4156-96bc-41248af657c2", e._sentryDebugIdIdentifier = "sentry-dbid-e0d634ce-166d-4156-96bc-41248af657c2")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, c, f, o = {
            13218: (e, a, r) => {
              (0, r(77600).w)(1)
            },
            44857: (e, a, r) => {
              r(13218)
            },
            67884: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, c = t.length; d !== a && c >= 0;) "/" === t[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
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
            98478: (e, a, r) => {
              "use strict";
              var t = {
                  "./root": () => Promise.all([r.e(2176), r.e(1780), r.e(1127), r.e(9623), r.e(306), r.e(5966), r.e(3149), r.e(7371)]).then((() => () => r(29896)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => c
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
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          b.r(d);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, b.d(d, c), d
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          131: "f0e4c72748ec3b5ba3b748014a3234bd",
          278: "310e555e810b1b81ed17b588c82090cb",
          299: "11f90800dfaf10d3019f7db4f52eba45",
          314: "0a2b809198c6f94ea34e34e65027ed7d",
          621: "f68730bcb895a1f910d797f4e05dbb94",
          656: "5c9015a358934fec2f7c6e1b02842204",
          662: "6c4d0309a70614130803542ecb63672f",
          823: "08c32c83dde5069425df1781b694c732",
          824: "a6367a1e270f705edeed8be06be0a000",
          838: "cb7695fd62588d2b00646768fe56324a",
          907: "1207096e50b0acfef2d94e24d5d101a8",
          1054: "533bf3cb57604f4a919e2c9db16c2678",
          1242: "9d43d5b2ee8bd0627b54e470d9f85e71",
          1280: "5ae57247e899a429650c3a8b6bb39f2a",
          1381: "8291a7d4c5f09c9f98f83e17ea18da15",
          1780: "5d358f175067cf04a079ef4a43566c5d",
          1822: "c5d1cdfc11bb91f9ade41de6a414060f",
          1868: "a7a13eaca3551ba6c61ce0c0e4f90fdc",
          2156: "7ba62fb28b237ba168cf5c6e7b1f668c",
          2171: "a91a820baa193212c926cb67557003fe",
          2176: "415a10d304f5941f9374a1076470c2c0",
          2221: "40e7bf92b135ab950e6cb66fb85b8f48",
          2243: "5b7c3401d0ed064cbcd4768232eb9e11",
          2347: "7cc4a87a886527369a20e3f66b728c21",
          2365: "5b5c8a33bdedd8a7f413115f76f86b29",
          2398: "36bc8a8753133cb0ffcef6ea6993ec86",
          2466: "ac0c0ef6c08c36e2348a9c9264b55bc5",
          2578: "4dfaed2198ccaaff8b4f9131ad346ccb",
          2642: "4945e536ccc3933e77c892d304144e0c",
          2678: "887e7c9b2f6e02e6202f519685a18886",
          2864: "be1cbb83f2a8e67d0b375e7be2e83880",
          3002: "5cdfcfe3d009ae1fab6f0aa0f0d50c8f",
          3034: "d1edbe409a1aa2aeac5794bd4ba859b4",
          3041: "3cd6a0c00177b6ea21a31ec994582b9d",
          3149: "e12939a81c36e8a10ce5ed563a13f8fa",
          3197: "ab32b3e30717ccb3d79116fa06e9ea91",
          3218: "883d01fb595582acd9c23c78a7567903",
          3310: "99b47f435e220ebec2a203a0a105522a",
          3343: "b8834aad9d4c89d5d168ec12a79d0d0b",
          3370: "ef4db012ae5730d05029d2c31fe5e5c0",
          3475: "4ee5c5210e28f9a4fa7b4b825cc1efda",
          3486: "7b674d27a87eedcaa91f4a10bd4d044d",
          3586: "953150cfcd162687561ab025e8386660",
          3663: "07090d7f94515d199042a19d327afb65",
          3672: "56503c16ac6c999b33598644c4b6336c",
          3697: "43e372a41410a60a77a127303205a29b",
          3885: "7a02c2461084311bcc0e02059cd839bf",
          3941: "4e258f9aa1561841e06bf9baa9bd4ebc",
          4011: "96dbca3f864850973d28a40f695db176",
          4105: "c5853c9939e37f9230e62132aaa0437a",
          4153: "684838298d59471b025bb1f6ac6df20c",
          4480: "2aa1b92f29c34eaee0ed9fadaed69009",
          4528: "d433c88a0cb4afb47d2b61c81197ca09",
          4621: "dc94e46f5f5683469f9c920180b6ea92",
          4684: "1c06bd26231a95a7d234def73c99320b",
          4700: "4358da8665d52ffd2b4fc3a9e0af37c7",
          4710: "12a63d5f142adc84566849b24a2a9ae7",
          4731: "50e9d7d24c489a94de74156ef00f8d2a",
          4799: "936de8749b33445ca8ea6afb42cb676f",
          4851: "3421d21d34807ef4dea1f4f196598173",
          4861: "7d0be2f7ee3aa568cb46742d6e3ecaf5",
          4913: "781b2c9477233bd911c490972cf29efa",
          5018: "3c7dce5b872cdde62f7a806fb215899e",
          5233: "a63bdbf9aa60379680a579b9612b6025",
          5259: "6efcfc3f3556f167262cdf56cc5697da",
          5422: "16484f09195bebb49b20cf4fa55a47fa",
          5530: "fe5a359439d8332f7fe95476aeeb2601",
          5639: "39ae718ab887e69b6f74df37249ed804",
          5663: "3700bba4ee5ba497cb0f2b3f5588eba9",
          5734: "455306eb9563ad001f01ab8678c8eef0",
          5742: "7e7d15270de3164f30e2a3cf2a928786",
          5830: "f44d245cd21ae87d1ca55a9fc534e92e",
          5832: "a2edf4efb3db341e1266c922e7a23205",
          6267: "2e78af62f763e091b55460ec369657c5",
          6280: "87f02ad2ebac9cf8a2b8d6185b5696b0",
          6285: "d42827133ab23ac66c1ed1f6f4272e04",
          6361: "846585263f20b5346be1f5e4249aa90b",
          6497: "467f71fd9ec90faa370984eadf361a05",
          6664: "6b9aeb6f7fe0db8a6176a10c7cca877d",
          6879: "9ac58c8bfea37736cce873ab7ecba164",
          6891: "bb022c11d42829dbce7a5fc5f1b478fd",
          6997: "6bb4a47ff7d11dedf062a2c12f38727c",
          7010: "3613d07de0ac76f44ba543a65885c361",
          7073: "4d4bd610edb229c93bdf87ea3acc1461",
          7353: "3fd9abc6cba61f6a803e1979fda642b6",
          7371: "1a7f085ca710773568e54de0969c5871",
          7436: "b6147a5f5a0b5e444c71e7f61dda6b68",
          7452: "f29a1ace1b58a1b8fe32d17b264dcf03",
          7453: "1c2505adf6534fc39205121b502b8140",
          7559: "ce27a5964572c65297abdb3b189081b4",
          7609: "36ead4bc4ec53392f76ea090ef46efa0",
          7709: "96cce4fb701f28b9a8fadb3d02cdc163",
          7727: "7fc336ae2e3398c657312396e6bc7496",
          7893: "e3770dff6ba991b4d63be7de227cab0e",
          7895: "61eefcc8c5db96283e40d74979244fc1",
          7926: "dc74f22e15867314e823c23a54acf747",
          7970: "625dcb1de271eb2ce78fea8283da1c85",
          8272: "3e0bebd07cbea2dea65442e4f854c83e",
          8275: "ec83deba0cdf9af26fe938b51ad7623c",
          8391: "4f43be6ce80322285c8794b4e9667245",
          8457: "745a534ffca49c70967496526c7e41b1",
          8557: "ff32aa868bbc84cdcf5f2f3454805d20",
          8654: "1b05cb92071bc3587f2e527aacaacb31",
          8755: "4c7bd6907e95afb19a79838e79851cc5",
          8880: "93d6a035a2a8cfa9f937e87b3518e20b",
          8965: "888bdea7d034369df04da73ef9e4f6c1",
          8970: "1847c3e29ab4f2981a55ac57ee04b223",
          8994: "c4c8bfd4d40d3d9c74d3252600df56fb",
          9022: "89bcd79219caa5afd6b17fcdba66f46f",
          9028: "2e30a3496e53a0012d8219160ca1c3b3",
          9090: "64481b003d44e3c2bffa13bbefb70b4e",
          9126: "1f33faab34f52002b8988d2a72b33abe",
          9377: "37fee75dee70d2bc13779ca5c361669e",
          9583: "34977f2336d4b1454ca366194bf4b80b",
          9615: "40b1b8db1dd5143a459736db55cb14cb",
          9649: "a93a82069ebc6275c6c13ed58fc20c6e",
          9936: "7d524cba404dc56ea7dbd618cefb3f9d",
          9990: "cbdf02b2075c5fb1086ecd859ad89b5b"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          749: "450cc2b1c47be1e723f0b0d53ea4743d",
          2176: "cea1a81b81d394e799ca4dbdb9603b59",
          3310: "814088dfc0f61abc3973bfb993a7505a",
          7371: "1b6a05f8cdb2244907347e6834e933b8",
          7926: "f1da5b48170e8eff07c31868b9c22f2e"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-footer:", b.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var f, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), l = 0; l < n.length; l++) {
                var s = n[l];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  f = s;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", d + r), f.src = e), t[e] = [a];
            var i = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var t = f[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), b.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, o, n) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return o(b, f, n);
                    var l = b.then((e => o(e, f)), d);
                    if (!n) return l;
                    a.push(t.p = l)
                  } catch (e) {
                    d(e)
                  }
                },
                o = (e, a, d) => c(a.get, t[1], r, 0, n, d),
                n = a => {
                  t.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, t[2], 0, 0, ((e, a, r) => e ? c(b.I, t[0], 0, e, o, r) : d()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var c = b.S[r],
                f = "@rockstargames/modules-core-footer",
                o = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                n = [];
              return "default" === r && (o("@foundry/react", "4.1.5", (() => Promise.all([b.e(7609), b.e(7559), b.e(2176), b.e(1780), b.e(7926), b.e(1127), b.e(2957), b.e(306), b.e(8429)]).then((() => () => b(22875))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(7559), b.e(3218), b.e(1127), b.e(838)]).then((() => () => b(35671))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([b.e(8994), b.e(7609), b.e(1780), b.e(1127), b.e(6497), b.e(9623), b.e(2957), b.e(5966), b.e(3310), b.e(3149), b.e(749)]).then((() => () => b(76261))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(8994), b.e(7709), b.e(1127), b.e(6497), b.e(9623), b.e(5966), b.e(9090)]).then((() => () => b(57895))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(8994), b.e(1127), b.e(6497), b.e(9623), b.e(8965)]).then((() => () => b(79819))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(3663), b.e(1127)]).then((() => () => b(53663))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(5422)]).then((() => () => b(65422))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(8275)]).then((() => () => b(78275))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(9649)]).then((() => () => b(19649))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(621)]).then((() => () => b(90621))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(4105), b.e(1127), b.e(2127)]).then((() => () => b(94105))))), o("react", "18.3.1", (() => b.e(8654).then((() => () => b(98654)))))), e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = (a, r) => {
              a = e(a), r = e(r);
              for (var t = 0;;) {
                if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                var d = a[t],
                  c = (typeof d)[0];
                if (t >= r.length) return "u" == c;
                var f = r[t],
                  o = (typeof f)[0];
                if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                if ("o" != c && "u" != c && d != f) return d < f;
                t++
              }
            },
            r = e => {
              var a = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(o = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : r(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, l, s = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= r.length || "o" == (l = (typeof(b = r[f]))[0])) return !n || ("u" == s ? o > d && !c : "" == s != c);
                  if ("u" == l) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == l)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || l < s != c) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (f = 1; f < a.length; f++) {
                var p = a[f];
                i.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            d = (e, a) => e && b.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, r, t, d, c) {
              var f = b.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, b.S[a], r, !1, d, c)) : e(a, b.S[a], r, t, d, c)
            },
            l = (e, a, r) => r ? r() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = n(((e, n, b, s, i, u) => {
              if (!d(n, b)) return l(e, b, u);
              var p = ((e, r, d, c) => {
                var o = c ? f(e[r]) : e[r];
                return (r = Object.keys(o).reduce(((e, r) => !t(d, r) || e && !a(e, r) ? e : r), 0)) && o[r]
              })(n, b, i, s);
              return p ? c(p) : u ? u() : void o(((e, a, t, d, c) => {
                var f = e[t];
                return "No satisfying version (" + r(d) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(n, e, b, i, s))
            })),
            i = n(((e, o, n, b, s, i) => {
              if (!d(o, n)) return l(e, n, i);
              var u, p = ((e, r, t) => {
                var d = t ? f(e[r]) : e[r];
                return Object.keys(d).reduce(((e, r) => !e || !d[e].loaded && a(e, r) ? r : e), 0)
              })(o, n, b);
              return t(s, p) || (u = ((e, a, t, d) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + r(d) + ")")(o, n, p, s), "undefined" != typeof console && console.warn && console.warn(u)), c(o[n][p])
            })),
            u = {},
            p = {
              71127: () => i("default", "react", !1, [1, 18, 2, 0], (() => b.e(8654).then((() => () => b(98654))))),
              9623: () => s("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(4105), b.e(2127)]).then((() => () => b(94105))))),
              30306: () => i("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3041).then((() => () => b(65422))))),
              95966: () => s("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(8994), b.e(6497)]).then((() => () => b(79819))))),
              2918: () => s("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(8994), b.e(7709), b.e(6497), b.e(7895)]).then((() => () => b(57895))))),
              61898: () => s("default", "@foundry/react", !1, [1, 4, 1, 5], (() => Promise.all([b.e(7609), b.e(7559), b.e(2176), b.e(7926), b.e(2957), b.e(306), b.e(8429)]).then((() => () => b(22875))))),
              81788: () => s("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(7559), b.e(3218), b.e(8457)]).then((() => () => b(35671))))),
              20270: () => s("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([b.e(8994), b.e(7609), b.e(6497), b.e(2957), b.e(3310)]).then((() => () => b(76261))))),
              52957: () => i("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(656).then((() => () => b(78275))))),
              18429: () => i("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3663).then((() => () => b(53663))))),
              22127: () => i("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3002).then((() => () => b(90621)))))
            },
            h = {
              306: [30306],
              1127: [71127],
              2127: [22127],
              2957: [52957],
              3149: [2918, 61898, 81788],
              5966: [95966],
              7371: [20270],
              8429: [18429],
              9623: [9623]
            },
            m = {};
          b.f.consumes = (e, a) => {
            b.o(h, e) && h[e].forEach((e => {
              if (b.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var r = a => {
                  u[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                m[e] = !0;
                var t = a => {
                  delete u[e], b.m[e] = r => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var d = p[e]();
                  d.then ? a.push(u[e] = d.then(r).catch(t)) : r(d)
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
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                749: 1,
                2176: 1,
                3310: 1,
                7371: 1,
                7926: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = b.miniCssF(e),
                  d = b.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((d = (f = c[t]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), d(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
          b.f.j = (a, r) => {
            var t = b.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(([12]12|295)7|306|5966|749|8429|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var c = b.p + b.u(a),
                f = new Error;
              b.l(c, (r => {
                if (b.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, c = r[0],
                f = r[1],
                o = r[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in f) b.o(f, t) && (b.m[t] = f[t]);
                o && o(b)
              }
              for (a && a(r); n < c.length; n++) d = c[n], b.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(44857), b(98478)
      })())
    }
  }
}));