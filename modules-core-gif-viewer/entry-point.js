try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "23a8312e-b2c3-4057-aac9-f2a16d085ae0", e._sentryDebugIdIdentifier = "sentry-dbid-23a8312e-b2c3-4057-aac9-f2a16d085ae0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, f, c, d, n, o, b, i, s, l, u, p, h, m, g, y, v, w, _ = {
            3032: (e, a, r) => {
              r(8419)
            },
            4848: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(2229), r.e(5966), r.e(9741)]).then(() => () => r(9741)),
                  "./lazy": () => Promise.all([r.e(2229), r.e(9623), r.e(5966), r.e(2364)]).then(() => () => r(2364)),
                  "./tina": () => Promise.all([r.e(1098), r.e(2229), r.e(5966), r.e(792)]).then(() => () => r(792)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(1098), r.e(2229), r.e(5966), r.e(792)]).then(() => () => r(792))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => c
              })
            },
            7027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, c = t.length; f !== a && c >= 0;) "/" === t[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            7411: (e, a, r) => {
              const t = r(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            8419: (e, a, r) => {
              (0, r(7411).w)(1)
            }
          },
          k = {};

        function E(e) {
          var a = k[e];
          if (void 0 !== a) return a.exports;
          var r = k[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return _[e].call(r.exports, r, r.exports, E), r.loaded = !0, r.exports
        }
        return E.m = _, E.c = k, E.y = a, E.amdO = {}, E.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return E.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, E.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          E.r(f);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & t && a;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, E.d(f, c), f
        }, E.d = (e, a) => {
          for (var r in a) E.o(a, r) && !E.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce((a, r) => (E.f[r](e, a), a), [])), E.u = e => "js/" + {
          131: "34271031788230120a353cc5a9de0c39",
          278: "0b66b134c3a8adfa9d8de32dac0602e3",
          299: "bef0a88ac013f4cc10faa4b02e284b8d",
          314: "11d86607e2989817935caaaede3f10c0",
          662: "17cc6e1e19fecea8bc35ce9f7afc1512",
          792: "b80a759117a8c051cedd4a6b3511db1d",
          824: "2dcfc1ed7bd34c4927edf241dd6cbefa",
          907: "bfe7f609b05602f1e68802583bf2db33",
          933: "cdd5f65c44160803ec13cbe9c3cac345",
          1054: "dccac39da85cf66730ef0328f6e281b8",
          1098: "4b07d4a4eb36c3319532b6bb5438d96a",
          1242: "fc0ee00fca35afad13ff15d741f2918e",
          1822: "0b12651f01cd7883a65a50d4c9dc6758",
          1868: "7791f09d162af45df7ffb80ed8e91338",
          2156: "98d09902e185e0107a557e1fe3689a35",
          2171: "01f939b32b4cf4aed2a0411109da46d7",
          2221: "df69dad68da7953c92962e18ecede2d1",
          2243: "653805df9ab555e8d0e9f9bcf8b028b1",
          2295: "097bdc1500a22b5cf5f31fee95b0941a",
          2347: "04593c15e9a29a6d55a990a86a746e6b",
          2364: "fcb8991e040cf8305c574036dc4fb34f",
          2365: "f2fe874724a54dd12d4d58cafcb53a7e",
          2398: "bb09842f9eaac9dcc2c2b1f21de93e03",
          2466: "6c136080cc96fe2611ce84d987bfc905",
          2642: "d9000be288343011cdc8b1a13a18920d",
          2678: "e23def178c3171e2ba7bedeb5bf6c6f5",
          2864: "0a90eb3b49509a75d24312866d18f6cc",
          3034: "08b4646c13671f42b652011085cc635a",
          3197: "fcfebca3b10f2b3b4f4cb2232b299e3c",
          3343: "0af8232fc873d6e15c80c93e99a79f74",
          3370: "9e94bc1cfcf4eb4f09a92a72590729eb",
          3475: "07dda32b828c7b1d3bc52e95fdde9906",
          3486: "d15924984c5919f50d08faa008d69057",
          3697: "64981e947124dac6c85eb5c420f3a861",
          3738: "826a61643156f5e1a6d6f36dafa32845",
          3885: "b50a5e57de946bbd6963bf36ce46f646",
          3941: "59d31e6571eec7cc4d840ce6e35fd47f",
          4011: "b4164cb8465d25883b37b7ef4390667e",
          4528: "c526399c768300f441c2f9917b15ffbf",
          4578: "ce06895f6d3dfd0dd94f4effb948e4a7",
          4621: "cf10803d14f66f886c717784239da7da",
          4700: "a1f35afec2ae13ade07a21d09ea953a4",
          4710: "a15116a027e9d9767aaa789f6c9daa86",
          4731: "64949871fad8e7fd09352979a185c465",
          4799: "e91d29efaea8cb3deeddd4caf53895c0",
          4851: "b19c108e2b2cc83a94078f091dea697a",
          4861: "1ed1c6d7a49e3a3b04002d6195fb458d",
          4913: "b4a49343323ef049bef6a1f5c79a56be",
          5018: "54e22e99a3e8c5b45a423610958a5652",
          5233: "44f51faa1c987ca4a3f63b01b4c18d8a",
          5259: "54181fda9651f563c0ec7bf5136b26c7",
          5389: "ce71250286dd05fa02a1390cffef50c7",
          5530: "f26e3e24827852edd857b5948f4eac22",
          5639: "30f88aee992e5e410f367be38b57acc4",
          5663: "bf228fca394710e26fffd90bbeb4c2b3",
          5742: "e46081b159d9882b96a637b81c350cab",
          5830: "d2c365f32292c6f287fef39f25786852",
          5832: "8c6de6acb219c50fa68b7a88f56b172e",
          5932: "578c45cb32d82c68cec5fe50d1510807",
          6267: "8c9d303b9b0cef0e6a5b84f4d620ee60",
          6280: "44c330261049ea3054e9e7d2e7174ae6",
          6285: "ea75974baa564d6f557b74add5112d51",
          6361: "d2278b6f82ad7f43e997ecea68117341",
          6664: "c8a551553b9172a89e954673fe09444f",
          6879: "18c1cd96a55cd47157220477332b7172",
          6891: "edc2c96cffba20f563246ad50e397a28",
          6997: "fc0a51a723eca0a6a43ea6223fc41010",
          7010: "184099afb9731e4f3fe3200cea88f6ab",
          7073: "0249d1fc702a4561a14c936cc347a054",
          7436: "80cb1a533fa930f69a3a51bb9fa6a0af",
          7452: "a0a50cb9d544b8d5604bbdd73de78ba2",
          7453: "d8f519a71e07d8d9561e10543884395e",
          7970: "202b356bfd6ed9cbb09906781c760722",
          8272: "f35e45d8c3531889790b7e6abf61c763",
          8391: "12b29bc3886d298948f087ebf2adcd48",
          8431: "831252b77c6444a573edad229d5646a9",
          8755: "e0f53afc7e568117e9773724040c9c06",
          8880: "3f705a65bdfb742a04504df45f6ae01b",
          8970: "5cd50feff3d0daa5a4307a36e2bda646",
          9022: "e956104f072ec253d57a161f95cc6cb3",
          9028: "6817e6367660b52389a75fa478eee4a3",
          9126: "f76bcb7dd46f686970bd52d931831693",
          9377: "db0d6da456a92ae555b477a90d8bfff5",
          9615: "ace84de04a3abf03f3488490ad796a49",
          9741: "1f96bd34d5d016d1e52872fec5394305",
          9936: "be9474829da4e5eb7424dde12a2dc49f",
          9990: "cc9f43a299b48aa320898c3729ca2255"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          792: "b11d8af9d5f0f47ad9c9716859e25471",
          2364: "debb098fe4eb10cc6ea2338c25eeda9f",
          9741: "7a398e1a54d4e611af2d855ec6db3b77"
        } [e] + ".css", E.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), E.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-gif-viewer:", E.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var d, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + r) {
                  d = i;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, E.nc && d.setAttribute("nonce", E.nc), d.setAttribute("data-webpack", f + r), d.src = e), t[e] = [a];
            var s = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(l);
                var f = t[e];
                if (delete t[e], d.parentNode && d.parentNode.removeChild(d), f && f.forEach(e => e(r)), a) return a(r)
              },
              l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = s.bind(null, d.onerror), d.onload = s.bind(null, d.onload), n && document.head.appendChild(d)
          }
        }, E.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, E.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          E.S = {};
          var e = {},
            a = {};
          E.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              E.o(E.S, r) || (E.S[r] = {});
              var c = E.S[r],
                d = "@rockstargames/modules-core-gif-viewer",
                n = (e, a, r, t) => {
                  var f = c[e] = c[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : d > n.from)) && (f[a] = {
                    get: r,
                    from: d,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/utils", "1.0.0", () => Promise.all([E.e(3738), E.e(2229), E.e(9623), E.e(933), E.e(2295)]).then(() => () => E(5802))), n("react-router-dom", "6.30.1", () => Promise.all([E.e(1098), E.e(5389), E.e(2229)]).then(() => () => E(5389))), n("react", "18.3.1", () => E.e(8431).then(() => () => E(8431)))), e[r] = o.length ? Promise.all(o).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          E.g.importScripts && (e = E.g.location + "");
          var a = E.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), E.p = e
        })(), c = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = r[1] ? a(r[1]) : [];
          return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
        }, d = (e, a) => {
          e = c(e), a = c(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var t = e[r],
              f = (typeof t)[0];
            if (r >= a.length) return "u" == f;
            var d = a[r],
              n = (typeof d)[0];
            if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
            if ("o" != f && "u" != f && t != d) return t < d;
            r++
          }
        }, n = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, f = 1; f < e.length; f++) t--, r += "u" == (typeof(d = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, d);
            return r
          }
          var c = [];
          for (f = 1; f < e.length; f++) {
            var d = e[f];
            c.push(0 === d ? "not(" + o() + ")" : 1 === d ? "(" + o() + " || " + o() + ")" : 2 === d ? c.pop() + " " + c.pop() : n(d))
          }
          return o();

          function o() {
            return c.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, o = (e, a) => {
          if (0 in e) {
            a = c(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var f = 0, d = 1, n = !0;; d++, f++) {
              var b, i, s = d < e.length ? (typeof e[d])[0] : "";
              if (f >= a.length || "o" == (i = (typeof(b = a[f]))[0])) return !n || ("u" == s ? d > r && !t : "" == s != t);
              if ("u" == i) {
                if (!n || "u" != s) return !1
              } else if (n)
                if (s == i)
                  if (d <= r) {
                    if (b != e[d]) return !1
                  } else {
                    if (t ? b > e[d] : b < e[d]) return !1;
                    b != e[d] && (n = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || d <= r) return !1;
                n = !1, d--
              } else {
                if (d <= r || i < s != t) return !1;
                n = !1
              } else "s" != s && "n" != s && (n = !1, d--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (f = 1; f < e.length; f++) {
            var p = e[f];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? o(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && E.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), l = (e, a, r, t) => {
          var f = t ? s(e[a]) : e[a];
          return (a = Object.keys(f).reduce((e, a) => !o(r, a) || e && !d(e, a) ? e : a, 0)) && f[a]
        }, u = (e, a, r, t, f) => {
          var c = e[r];
          return "No satisfying version (" + n(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
        }, p = e => {
          throw new Error(e)
        }, h = (e, a, r) => r ? r() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), m = (e => function(a, r, t, f, c) {
          var d = E.I(a);
          return d && d.then && !t ? d.then(e.bind(e, a, E.S[a], r, !1, f, c)) : e(a, E.S[a], r, t, f, c)
        })((e, a, r, t, f, c) => {
          if (!b(a, r)) return h(e, r, c);
          var d = l(a, r, f, t);
          return d ? i(d) : c ? c() : void p(u(a, e, r, f, t))
        }), g = {}, y = {
          2229: () => m("default", "react", !1, [1, 18, 2, 0], () => E.e(8431).then(() => () => E(8431))),
          5966: () => m("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([E.e(3738), E.e(9623), E.e(933)]).then(() => () => E(5802))),
          9623: () => m("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([E.e(1098), E.e(5389)]).then(() => () => E(5389)))
        }, v = {
          2229: [2229],
          5966: [5966],
          9623: [9623]
        }, w = {}, E.f.consumes = (e, a) => {
          E.o(v, e) && v[e].forEach(e => {
            if (E.o(g, e)) return a.push(g[e]);
            if (!w[e]) {
              var r = a => {
                g[e] = 0, E.m[e] = r => {
                  delete E.c[e], r.exports = a()
                }
              };
              w[e] = !0;
              var t = a => {
                delete g[e], E.m[e] = r => {
                  throw delete E.c[e], a
                }
              };
              try {
                var f = y[e]();
                f.then ? a.push(g[e] = f.then(r).catch(t)) : r(f)
              } catch (e) {
                t(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              9737: 0
            };
            E.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                792: 1,
                2364: 1,
                9741: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = E.miniCssF(e),
                  f = E.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var f = (d = r[t]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === a)) return d
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var d;
                      if ((f = (d = c[t]).getAttribute("data-href")) === e || f === a) return d
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", E.nc && (c.nonce = E.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var d = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = d, o.request = n, c.parentNode && c.parentNode.removeChild(c), f(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, f, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            9737: 0
          };
          E.f.j = (a, r) => {
            var t = E.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var c = E.p + E.u(a),
                d = new Error;
              E.l(c, r => {
                if (E.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", d.name = "ChunkLoadError", d.type = f, d.request = c, t[1](d)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, [c, d, n] = r,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in d) E.o(d, t) && (E.m[t] = d[t]);
                n && n(E)
              }
              for (a && a(r); o < c.length; o++) f = c[o], E.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), E(3032), E(4848)
      })())
    }
  }
});