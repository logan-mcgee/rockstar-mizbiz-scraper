try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7980350b-7843-454a-ae92-3d915a9d04a7", e._sentryDebugIdIdentifier = "sentry-dbid-7980350b-7843-454a-ae92-3d915a9d04a7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, f, c, o = {
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
            98478: (e, a, r) => {
              "use strict";
              var t = {
                  "./root": () => Promise.all([r.e(564), r.e(789), r.e(1127), r.e(9623), r.e(5966), r.e(6783), r.e(6192)]).then((() => () => r(13438)))
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
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, b.d(d, f), d
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          114: "d8af9d37cd1552229f96549332f44ce6",
          131: "9d951182be4e16e41fde21bd6c6d0439",
          278: "b64ce2a03b1931036d73e5c9fd5af74e",
          299: "f07bd745a85fe7e599907c37eb2c6884",
          314: "e5ab0aad54b0eb2af7fb3ce6ff3930d6",
          377: "f2e65d323fc39c1a849bd144ae4cda90",
          564: "31c8580a49f4b26cb9999b32995e47dc",
          662: "c00b1e857dce04f462914cfc083c6796",
          789: "b62457cd1769c348b3ef7ee7ecfd3f00",
          824: "74bdfd58ba088e0df65aa682c50710e3",
          842: "57a0226408586d628bfce92f2f546ff3",
          888: "87f94a2f633ace19831e1d1825dbcd26",
          907: "11e2174b2e6b4705c3865684b6c271a0",
          969: "0b7dd89a5a31da8ac4a8aeacd27b2874",
          1054: "2b25fcaac4ac694a92efcbbdd88a9710",
          1138: "8ab6cb1008311830446924e304229294",
          1242: "c216113e40bca05665009474be667a15",
          1379: "20ab9f403b5b3119772abe5f145a0e45",
          1503: "ad1478865ef5327b4dd5f352851c2635",
          1607: "000b774f6cea3846e103d458fa18b62e",
          1822: "5616e428b56c6872f03a2b34792e0238",
          1868: "e78044e2e1b22643d55faafad6b27e00",
          2156: "53a741d9faa9b9f074be009c8d0750fc",
          2171: "199c0fa1a019c7c93e50e182dde38222",
          2221: "8ee6b4c1a1b38831fc9f8f81f795a7bb",
          2243: "6bbe45e2d34eef3bc8eda1eafb36c700",
          2315: "1ff08a78e420652c4b8e8d8c7fbc24d7",
          2343: "ac7053bfd481dd6570664dfe6918a81b",
          2347: "9ee3253659f49155bbd1600b043a4fd2",
          2365: "df62b25d3f0fb623658200e5078538d4",
          2398: "483db85a1283f106a61336a0dc8cda57",
          2466: "a6fe1b7aa4a3876721c212b6a55f4811",
          2642: "ec8caac9112621f9fcb58fe76a56b2a5",
          2678: "ab11341d8c2d2811d1611c2ff27044de",
          2864: "cd002a6cc23abbae7b3e7a8e58f13e91",
          2941: "4c8799e03bd6dc29a6d366b09ed1917f",
          3034: "c0641b8af32a0121415a1454c4666b2f",
          3197: "97460e0a9f84e304eaee119a38546132",
          3304: "03fef4dfdb78ae21b920985aed8cd1e6",
          3343: "f60e9f185a68309a4719b0f9a5d2a9cd",
          3370: "1554955b7764f9ecc90109f293fb5fa9",
          3475: "d72bb672cda08a33230d638df3e12f79",
          3486: "951300f5042698dcd1364013ab7a365b",
          3622: "661b5376d36abc4d927cf98f7fed017d",
          3697: "7fafd3671b0e54f9ac96b4be114d37d3",
          3884: "d7def86174ce7f0b6a39d6f8bd176839",
          3885: "39afc4876b5f0e2f371db6c54fdd7fd7",
          3941: "2e14a0b11864ed0e0376781193786d30",
          4011: "dca13d83da8b4686dec5ecbc00b28c5f",
          4186: "afe99a234b469d602a53b8b6be8b6329",
          4220: "58c260ac1deaf2b50c7634ce4ff95db9",
          4375: "ae2073356d56a083aab72edaec87ba07",
          4528: "a2cb336fadde7d66a3b617c91d397465",
          4621: "d6434ffa1a0baad1c5c380253d4e17de",
          4700: "b95a03c55dea33190818ddfa885841c3",
          4710: "568d432b6483d8b0eefc1e4cbdee203e",
          4731: "58788bacea7f655a2f48c5c748054e6a",
          4799: "fab929969945cb2933e9c529924be34c",
          4851: "268ee73e8c1712142aaac53c05a31584",
          4861: "ba19efd403c234e78ff4257e166c50d6",
          4913: "029967c724617a66e27c106f1ebd061e",
          5018: "8366a25cfdbdf8c171886b4631482c53",
          5233: "2f3d1538e70299fa557d888a0ca07673",
          5247: "2cca2d1cb08ff25a04e48472630bcdb6",
          5259: "55d383049ca7fdf33406609a40afe89e",
          5530: "c5f2647cd19c56bdbfd1d1042139c676",
          5639: "164281e8f03a4a047da2fc53fc9e5769",
          5663: "b730bfc6215b409ccf22af673a5d2732",
          5742: "0c2136fcb20fec96d6142ddab3f9ab8d",
          5830: "963dc3667a33a359059d77f18182f730",
          5832: "df61b5832ae37abf966746fe8e0401fb",
          5959: "afb2bf4090eba744fda197556d2d8263",
          6019: "0349ae3f6353c81b4efca1c3f21be710",
          6192: "206b5b6e61170de53bc0d43037342d8d",
          6204: "92f956d886f5d7ef9430a5ab99170926",
          6267: "1e55fe049759b2f9519c3cf8c6411ae5",
          6280: "07a10858118500cb8d7df96c51efb04d",
          6285: "7376bbbc3678fb1fa16dbffd9af404b5",
          6361: "f47d9b8a9659a929ae6c630a70f70b8c",
          6664: "386ecaca28ec05862bbcfec19cf4707b",
          6756: "1b8e5072fbfcae159c44497c6b44c13b",
          6783: "c108364c5273ed1f179da11e5b30bfe7",
          6871: "d31b0d9f0ae43788f3eaf5e1b51a747a",
          6879: "33ffd564a91eec47fd5e453aa7ad1aaa",
          6891: "5153b6a782190c1c85f4a43a8fc2a903",
          6940: "874393eea5d95dfff32d0c7e10361402",
          6997: "5e00dbccccc386fed96f8538af4b67bb",
          7010: "705c38031e55f91defdacb67883b2eb2",
          7039: "fa48defa4d53ca18c4144abf8ae59287",
          7073: "c0c1fcaa58126568d9710d489744748f",
          7436: "4aa2ecc24eed0ad2db0ef72f63b64ca1",
          7452: "808b210b531f9e74cc138a6bd21b1fe5",
          7453: "c5b4939542503ed490bd95179d2e0387",
          7634: "2f2a4eb986a3f6c3810599340aa0bcc8",
          7858: "85dcd061ad1533bb00bfc1e676c6bed8",
          7970: "6243b5577ed86d995dcc38b948096207",
          8272: "f0d16bdbeb7346549385474dccec67ac",
          8391: "8c5788fa4583a35b5af52825a04aeeb3",
          8755: "e9f7fa363cead02e232a9f3d07f46396",
          8880: "918ea41b5058f40261357098cefb377b",
          8970: "aa5ab03df4e5b1f9a1507d1ca9de0fca",
          9022: "1257ad2e612e18602422d0da0fad1059",
          9028: "7727f8c9e25024722db29d411fb52d09",
          9126: "dc00578f508f3f4ea367562d35069374",
          9368: "fb4046846e4ceaf03d7d1cf061a40c5a",
          9377: "2de4d4d94ab89c31407a7489ac1ab79f",
          9474: "517ecca71905a7ca6900f9fc77fc7bfb",
          9482: "9d06671d599ff5f9513d780e04310ba2",
          9615: "cb1488644609d34048bbaf21816723ce",
          9642: "f897cbff2488bb65179218c142b7e1d9",
          9660: "824435d3eeec3638fc728d897606165d",
          9728: "44f966513abf999e611267e96c062519",
          9936: "4fb0b10f73bdc0cb59dccc6b53b49862",
          9990: "f06deae970cf38ccf246b325e13076b6"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          564: "5075b0c2b29453b760055a96fbaa9148",
          842: "519cb65eb44cd032a6c75cb79e545988",
          2988: "450cc2b1c47be1e723f0b0d53ea4743d",
          3304: "15de871a0a890def31d5a640eaca176a",
          6192: "1b6a05f8cdb2244907347e6834e933b8"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-footer:", b.l = (e, a, r, f) => {
          if (t[e]) t[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                var s = n[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  c = s;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, b.nc && c.setAttribute("nonce", b.nc), c.setAttribute("data-webpack", d + r), c.src = e), t[e] = [a];
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
            var t = c[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), b.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, o, n) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return o(b, c, n);
                    var i = b.then((e => o(e, c)), d);
                    if (!n) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                o = (e, a, d) => f(a.get, t[1], r, 0, n, d),
                n = a => {
                  t.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(b, t[2], 0, 0, ((e, a, r) => e ? f(b.I, t[0], 0, e, o, r) : d()), 1)
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
              var f = b.S[r],
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
                n = [];
              return "default" === r && (o("@foundry/react", "4.3.1", (() => Promise.all([b.e(7634), b.e(7858), b.e(564), b.e(789), b.e(842), b.e(1127), b.e(8429), b.e(8628)]).then((() => () => b(842))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(7858), b.e(2315), b.e(1127), b.e(1503)]).then((() => () => b(58718))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([b.e(2343), b.e(7634), b.e(789), b.e(9660), b.e(1127), b.e(1379), b.e(8429), b.e(9623), b.e(5966), b.e(3304), b.e(6783), b.e(2988)]).then((() => () => b(85302))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(2343), b.e(6204), b.e(1127), b.e(1379), b.e(9623), b.e(5966), b.e(9482)]).then((() => () => b(66871))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(2343), b.e(1127), b.e(1379), b.e(9623), b.e(5959)]).then((() => () => b(81635))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(6019), b.e(1127)]).then((() => () => b(66019))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(6756)]).then((() => () => b(96756))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(9728), b.e(1127), b.e(8429)]).then((() => () => b(49728))))), o("react", "18.3.1", (() => b.e(1138).then((() => () => b(11138)))))), e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
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
                  f = (typeof d)[0];
                if (t >= r.length) return "u" == f;
                var c = r[t],
                  o = (typeof c)[0];
                if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                if ("o" != f && "u" != f && d != c) return d < c;
                t++
              }
            },
            r = e => {
              var a = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, t += "u" == (typeof(o = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                c.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? c.pop() + " " + c.pop() : r(o))
              }
              return n();

              function n() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !n || ("u" == s ? o > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == i)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || i < s != f) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var p = a[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            d = (e, a) => e && b.o(e, a),
            f = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, r, t, d, f) {
              var c = b.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, b.S[a], r, !1, d, f)) : e(a, b.S[a], r, t, d, f)
            },
            i = (e, a, r) => r ? r() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = n(((e, n, b, s, l, u) => {
              if (!d(n, b)) return i(e, b, u);
              var p = ((e, r, d, f) => {
                var o = f ? c(e[r]) : e[r];
                return (r = Object.keys(o).reduce(((e, r) => !t(d, r) || e && !a(e, r) ? e : r), 0)) && o[r]
              })(n, b, l, s);
              return p ? f(p) : u ? u() : void o(((e, a, t, d, f) => {
                var c = e[t];
                return "No satisfying version (" + r(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(n, e, b, l, s))
            })),
            l = n(((e, o, n, b, s, l) => {
              if (!d(o, n)) return i(e, n, l);
              var u, p = ((e, r, t) => {
                var d = t ? c(e[r]) : e[r];
                return Object.keys(d).reduce(((e, r) => !e || !d[e].loaded && a(e, r) ? r : e), 0)
              })(o, n, b);
              return t(s, p) || (u = ((e, a, t, d) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + r(d) + ")")(o, n, p, s), "undefined" != typeof console && console.warn && console.warn(u)), f(o[n][p])
            })),
            u = {},
            p = {
              71127: () => l("default", "react", !1, [1, 18, 2, 0], (() => b.e(1138).then((() => () => b(11138))))),
              9623: () => s("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(9728), b.e(8429)]).then((() => () => b(49728))))),
              95966: () => s("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(2343), b.e(1379)]).then((() => () => b(81635))))),
              2918: () => s("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(2343), b.e(6204), b.e(1379), b.e(6871)]).then((() => () => b(66871))))),
              15636: () => s("default", "@foundry/react", !1, [1, 4, 3, 1], (() => Promise.all([b.e(7634), b.e(7858), b.e(564), b.e(842), b.e(8429), b.e(8628)]).then((() => () => b(842))))),
              81788: () => s("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(7858), b.e(2315), b.e(3884)]).then((() => () => b(58718))))),
              20270: () => s("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([b.e(2343), b.e(7634), b.e(9660), b.e(1379), b.e(8429), b.e(3304)]).then((() => () => b(85302))))),
              18429: () => l("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(6019).then((() => () => b(66019))))),
              78628: () => l("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(4375).then((() => () => b(96756)))))
            },
            h = {
              1127: [71127],
              5966: [95966],
              6192: [20270],
              6783: [2918, 15636, 81788],
              8429: [18429],
              8628: [78628],
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
                564: 1,
                842: 1,
                2988: 1,
                3304: 1,
                6192: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = b.miniCssF(e),
                  d = b.p + t;
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
                  f.rel = "stylesheet", f.type = "text/css", b.nc && (f.nonce = b.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), d(n)
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
          b.f.j = (a, r) => {
            var t = b.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1127|2988|5966|8429|8628|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = b.p + b.u(a),
                c = new Error;
              b.l(f, (r => {
                if (b.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
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
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) b.o(c, t) && (b.m[t] = c[t]);
                o && o(b)
              }
              for (a && a(r); n < f.length; n++) d = f[n], b.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(37389), b(98478)
      })())
    }
  }
}));