! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3b24ef60-68f2-4a67-886f-835734955441", e._sentryDebugIdIdentifier = "sentry-dbid-3b24ef60-68f2-4a67-886f-835734955441")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
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
        var e, r, f, d, n, o, c = {
            3218: (e, a, t) => {
              (0, t(7600).w)(1)
            },
            4857: (e, a, t) => {
              t(3218)
            },
            5136: e => {
              "use strict";
              e.exports = t
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(5156), t.e(6699), t.e(2229), t.e(6497), t.e(1124)]).then((() => () => t(862)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => d
              })
            },
            7600: (e, a, t) => {
              const r = t(7884).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            7884: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var n = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + n
              };
              Number.isInteger
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
          return c[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = c, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
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
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var n = 2 & t && a;
            "object" == typeof n && !~e.indexOf(n); n = r(n)) Object.getOwnPropertyNames(n).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          5: "7a8851c616784f23701ed8bbf0aaf2ad",
          131: "1c28966ad7edaf64501b32bbcb153ac5",
          278: "f3d5f9aa6e20765eb84bdbc214207c22",
          299: "0360f8345fb6c638251569649953936d",
          314: "298d6250d71ebaa4108e96cc74a738be",
          662: "6b264bf36af8b6eb2efbc83cde6e400c",
          824: "69dca367288d5f1ade929e41e416c4ce",
          838: "47b0def7046b7bbf0e87bddf08ef2531",
          907: "4f2da263ef305c0323f4e269efea3605",
          1054: "f94e298cb1565842cdb8c02bb9947261",
          1124: "541562d4927601a1cea68a1f1eff6c82",
          1242: "e9ff28f478c9986c4f5302b637a84572",
          1822: "b01c997e426e8c86b39358b492cedbee",
          1868: "7019e5281b23715e586ca2a95f2c6250",
          2156: "56ca25dd2515e72ca729059075793729",
          2171: "6f522918d928028cd73fe392956f5890",
          2221: "f60bc8323dd1a22fd04ab2bb17a72535",
          2243: "cc20af9ea5e5e5037f0c6c9c879e2017",
          2347: "d9522c4782c43ff43b1d0a887aecf573",
          2365: "96b491d900a58cbf549cf3e4ebcaa308",
          2398: "5832d95dd9f6fe33c8e454604e6cdf64",
          2466: "8f8a6c6cbedbe0fa8b7ce3f5b47cd46a",
          2522: "eae2f2c396728f976d9d449c97ccca42",
          2642: "2a1c5ac492143ffa9cdf9d6f95b199ab",
          2678: "6e0a03cbf90c1afdc44ebb93415a2018",
          2810: "bdcd7c2e05428b556f0a20b273236b25",
          2864: "3d7ec9398d067603f7f8951031e0c1c1",
          3034: "f3d1d648bdc6b49c208235fb6be8593b",
          3197: "14b69d26eef45ce37df603cb1d13c4a8",
          3218: "f8f8002b3e6eedfdad29ca42f46fdf7f",
          3343: "d6ef67d101eee709e9afa85a2cfcff86",
          3370: "7811ea51430d194473046e75848d5630",
          3475: "31b5b60f92ceb83100af24b2ff2d2b71",
          3486: "619b0b67d1d0a9171de33a940a749a95",
          3514: "47e4eb4bceff916cbc23f68134bed689",
          3697: "86638f93c3837937413a59669478311d",
          3885: "83990b3b2239ea84e3dac9faf1f73b7f",
          3941: "f6c9b8f9b4ae09e889848d4208d7d592",
          4011: "a5f30c5a9b2f298c050e814ae32c6471",
          4105: "2093bb54e5b93118606708f17d21a75a",
          4480: "097f28448cb9b3fd33aff7dcaf6aede0",
          4528: "2396c4f7c7e13645cc40cdfb63868e3d",
          4621: "0ff416d5b81914e3cd05657cca8c1b9e",
          4700: "e93e389c1bfcd63a8d926d18da944355",
          4710: "407b9a6b72e3399f0831fef82593a468",
          4731: "7669061d9259c170fc2480648f73f21b",
          4799: "f9752be912822aeacad3ebdce0c83604",
          4851: "d46040079bd344775a7a4e30cf85bf3b",
          4861: "b1ce7aafa21638d8738b5b18a209ba5a",
          4913: "29e3b58f362c99bff74c3e08ba9aac01",
          5018: "9311e581ad378813ca6f5f548d74c89c",
          5156: "77e19dae98ae466c84b0121aa52db971",
          5233: "2bfa780aafc513ba389692183eda9780",
          5259: "1dcae341aa9957863022af266f739b8b",
          5530: "78b1a89ca364bfac641f4e7636c2d9a0",
          5639: "7a2ca0cad6b6fbf8a70a8a2bc78d8d7a",
          5663: "83dd720a67464452b0eee95bc1d0c357",
          5742: "23fff5f22690ab43e4eb4bf9c600284e",
          5830: "7a3f1d51852841742f304829db163dac",
          5832: "2cc39e5e623c8dc862f07c71b282b02d",
          6267: "c74b0573a9bc9b8718ee5845c8930e0a",
          6280: "18e93e292df1940f328dc41a4845d1c4",
          6285: "47dd1cb7a3d50b7e3dc29f1d61beea29",
          6361: "73c7c933d426f5e8d599a6b81db47405",
          6497: "bced77270b6d7a826f401dfa8a0de14c",
          6664: "136ada28d8ff428a1aa358e47968636b",
          6699: "0970945096704c96663a2c048e4855d5",
          6879: "53ae53381ded6e5005690c8994821a46",
          6891: "77ecd61651340fde9d161ada170bbd75",
          6997: "b555a5cf7b9e948d5e74ef83e0ba192e",
          7010: "1ae29a235aff79fc2a5824fd5aad2587",
          7073: "3fd1d3c3f17899a04c069d309c9f1f6c",
          7353: "e43e99035c84494e65478236e9853ebf",
          7436: "50b80d367b6dcf22aba78bab09a44075",
          7452: "8a44cabc2aab181fdd8f3428add5f60b",
          7453: "9ebb4da45fdb294156c99e7dc11a9a6e",
          7485: "425d31f7cf83d3ca26db33df984cad5a",
          7970: "7e57c6727f7b8e215a757ad29108722c",
          8272: "e9393628ce5bd00aaa223fd3ca1704b3",
          8391: "efaa1c77dd6fc9db92582960f9936b24",
          8654: "7b577974779a995160698e62b0b1b383",
          8755: "353f4dbba523bf95381a5d21c890a886",
          8880: "b752566095548a5f516e6b7e1464008b",
          8970: "f7e4938bac2acd5f5e6e9b5a660929d3",
          9022: "9cff1c2459fd848cc0530d33601372fc",
          9028: "ab30bdcc266412129e899d025d367c51",
          9126: "f872c315e26beece08cd376b735aad0b",
          9377: "3dc4b511857278ff6c683207f1f218fe",
          9615: "329a3c25c796a436adead0400f9ef31d",
          9936: "7a1e2c7d18df9c3e52174e1d81b1936b",
          9990: "c7a55f824e38c481348466d973430711"
        } [e] + ".js", i.miniCssF = e => "css/6a5fe84429bbdc6b0429287f94356eea.css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-gta-trilogy:", i.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var n, o;
            if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), b = 0; b < c.length; b++) {
                var s = c[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  n = s;
                  break
                }
              }
            n || (o = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, i.nc && n.setAttribute("nonce", i.nc), n.setAttribute("data-webpack", d + t), n.src = e), f[e] = [a];
            var l = (a, t) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], n.parentNode && n.parentNode.removeChild(n), r && r.forEach((e => e(t))), a) return a(t)
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
          1124: [1879]
        }, o = {
          1879: ["default", "./index", 5136]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, n, o, c) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return o(b, n, c);
                    var i = b.then((e => o(e, n)), f);
                    if (!c) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                n = (e, a, f) => d(a.get, r[1], t, 0, c, f),
                c = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, r[2], 0, 0, ((e, a, t) => e ? d(i.I, r[0], 0, e, n, t) : f()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var d = i.S[t],
                n = "@rockstargames/sites-gta-trilogy",
                o = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : n > o.from)) && (f[a] = {
                    get: t,
                    from: n,
                    eager: !!r
                  })
                },
                c = [];
              return "default" === t && (o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(3218), i.e(2229), i.e(5)]).then((() => () => i(5671))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(5156), i.e(2229), i.e(6497)]).then((() => () => i(9819))))), o("framer-motion", "7.10.3", (() => Promise.all([i.e(7485), i.e(2229), i.e(3514)]).then((() => () => i(7485))))), o("react-router-dom", "6.30.0", (() => Promise.all([i.e(4105), i.e(2229)]).then((() => () => i(4105))))), o("react", "18.2.0", (() => i.e(2522).then((() => () => i(141))))), o("react", "18.3.1", (() => i.e(8654).then((() => () => i(8654))))), o("usehooks-ts", "2.16.0", (() => Promise.all([i.e(2810), i.e(2229)]).then((() => () => i(429))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(5136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return c.push(a.then(f, e));
                  var d = f(a);
                  if (d && d.then) return c.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), c.length ? e[t] = Promise.all(c).then((() => e[t] = 1)) : e[t] = 1
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
                for (var f = 1, d = 1; d < e.length; d++) f--, r += "u" == (typeof(o = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, o);
                return r
              }
              var n = [];
              for (d = 1; d < e.length; d++) {
                var o = e[d];
                n.push(0 === o ? "not(" + c() + ")" : 1 === o ? "(" + c() + " || " + c() + ")" : 2 === o ? n.pop() + " " + n.pop() : a(o))
              }
              return c();

              function c() {
                return n.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var n = 0, o = 1, c = !0;; o++, n++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (n >= r.length || "o" == (i = (typeof(b = r[n]))[0])) return !c || ("u" == s ? o > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!c || "u" != s) return !1
                  } else if (c)
                    if (s == i)
                      if (o <= f) {
                        if (b != a[o]) return !1
                      } else {
                        if (d ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (c = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || o <= f) return !1;
                    c = !1, o--
                  } else {
                    if (o <= f || i < s != d) return !1;
                    c = !1
                  } else "s" != s && "n" != s && (c = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (n = 1; n < a.length; n++) {
                var p = a[n];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, f, d) => {
              var n = d ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(n).reduce(((a, r) => !t(f, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    d = (typeof f)[0];
                  if (r >= t.length) return "u" == d;
                  var n = t[r],
                    o = (typeof n)[0];
                  if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
                  if ("o" != d && "u" != d && f != n) return f < n;
                  r++
                }
              })(a, r) ? a : r), 0)) && n[r]
            },
            f = e => {
              throw new Error(e)
            },
            d = (e => function(a, t, r, f, d) {
              var n = i.I(a);
              return n && n.then && !r ? n.then(e.bind(e, a, i.S[a], t, !1, f, d)) : e(a, i.S[a], t, r, f, d)
            })(((e, t, d, n, o, c) => {
              if (!((e, a) => e && i.o(e, a))(t, d)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, d, c);
              var b, s = r(t, d, o, n);
              return s ? ((b = s).loaded = 1, b.get()) : c ? c() : void f(((e, t, r, f, d) => {
                var n = e[r];
                return "No satisfying version (" + a(f) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(n).map((e => e + " from " + n[e].from)).join(", ")
              })(t, e, d, o, n))
            })),
            n = {},
            o = {
              2229: () => d("default", "react", !1, [1, 18, 2, 0], (() => i.e(8654).then((() => () => i(8654))))),
              9623: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], (() => i.e(4105).then((() => () => i(4105))))),
              1788: () => d("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(3218), i.e(838)]).then((() => () => i(5671))))),
              1913: () => d("default", "react", !1, [1, 18, 2, 0], (() => i.e(2522).then((() => () => i(141))))),
              3582: () => d("default", "framer-motion", !1, [1, 7, 5, 1], (() => i.e(7485).then((() => () => i(7485))))),
              5587: () => d("default", "usehooks-ts", !1, [1, 2, 7, 2], (() => i.e(2810).then((() => () => i(429))))),
              5966: () => d("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => () => i(9819)))
            },
            c = {
              1124: [1788, 1913, 3582, 5587, 5966],
              2229: [2229],
              6497: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(n, e)) return a.push(n[e]);
              if (!b[e]) {
                var t = a => {
                  n[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete n[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = o[e]();
                  f.then ? a.push(n[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1124: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = i.miniCssF(e),
                  f = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (n = t[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (f === e || f === a)) return n
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var n;
                      if ((f = (n = d[r]).getAttribute("data-href")) === e || f === a) return n
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var n = t && t.type,
                        o = t && t.target && t.target.href || a,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + o + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = n, c.request = o, d.parentNode && d.parentNode.removeChild(d), f(c)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            7060: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (2229 != a) {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var d = i.p + i.u(a),
                n = new Error;
              i.l(d, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", n.name = "ChunkLoadError", n.type = f, n.request = d, r[1](n)
                }
              }), "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, f, d = t[0],
                n = t[1],
                o = t[2],
                c = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in n) i.o(n, r) && (i.m[r] = n[r]);
                o && o(i)
              }
              for (a && a(t); c < d.length; c++) f = d[c], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i(4857), i(5819)
      })())
    }
  }
}));