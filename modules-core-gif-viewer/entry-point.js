try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7d337d27-4cf1-4167-8b8f-cf64cee8034a", e._sentryDebugIdIdentifier = "sentry-dbid-7d337d27-4cf1-4167-8b8f-cf64cee8034a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, f, d, c, n, o, i, b, s, l, u, p, h, m, g, y, v, w, _ = {
            3032: (e, a, r) => {
              r(8419)
            },
            4848: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(2229), r.e(5966), r.e(9741)]).then((() => () => r(9741))),
                  "./lazy": () => Promise.all([r.e(2229), r.e(9623), r.e(5966), r.e(2364)]).then((() => () => r(2364))),
                  "./tina": () => Promise.all([r.e(1098), r.e(2229), r.e(5966), r.e(792)]).then((() => () => r(792))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(1098), r.e(2229), r.e(5966), r.e(792)]).then((() => () => r(792)))
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
            7027: (e, a, r) => {
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
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, E.d(f, d), f
        }, E.d = (e, a) => {
          for (var r in a) E.o(a, r) && !E.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce(((a, r) => (E.f[r](e, a), a)), [])), E.u = e => "js/" + {
          131: "5650de0a5ec2627faf3568c81100799d",
          278: "4e27df9b55f2b4a54c27bd3c9b8cc229",
          299: "741930faddd0e81d9d634927a820a16c",
          314: "c5a370e9af27f029fe59f6c01d794049",
          662: "759c5111d50903bd1c315f80bff35b2a",
          792: "46688da16d0665c9b7fff22503b4a67f",
          824: "a047a62144e764307043df35cf293f0b",
          907: "3a38fe7a2e943b6e3e6f0255d1bdd8b4",
          1054: "3319c6556bf81f1edf0a3c6190ef4b8d",
          1098: "f01b4359d47c2222fa1170af6a7dfd1a",
          1242: "30030a100a532c2560e555debe37716d",
          1822: "510f30d37dfa743b72ddb2b4cf940f33",
          1868: "0b5e5b69ab65007025da8bebd03c2427",
          2156: "898f4806246da64b90596259cfb2b800",
          2171: "e9a3f785df2bb4144e448bcd4727585c",
          2221: "818f3ab17ac8818151bffca1a946fe89",
          2243: "aa182208e83cccf423defa1ee68bde66",
          2295: "58d16508edfbceb24a7331887223486f",
          2347: "5260792e5c3758b3ec6f638702bb7d3b",
          2364: "edc832d0d06819d93c78ded96c5de89c",
          2365: "2d2ece4ec5035194f39b65d0317fe85a",
          2398: "2e0e9e954551ec1dc617dabbdfa50830",
          2466: "9a92dfa7c7a395e1953c9d45ff20ffdc",
          2642: "6527be37a92b4539074ae6ed517becae",
          2678: "9709dad0a3744b98c0003e949f1870ed",
          2864: "da35f9c245eb3c0a1b4fe9afe4fffeb9",
          3034: "d74e53dc1af41cb41753e93587a49a8d",
          3197: "178b1dfa37099f7eeab4df4f6243884a",
          3343: "066e4d55f0c4aa69e00703a1e7fc58ca",
          3370: "4ec8fd9f879453377c9e0b80c6a30185",
          3475: "7f44a9a5ccf8f46a108cd938be9a8956",
          3486: "b6777bd70f524e69f3dd236e68b901a3",
          3697: "2ec2dea9e7116a303e692a738459df15",
          3738: "f71cd127a1524dc347b835bf72ed0b37",
          3885: "18df8ce18c12f324b87bd0fcc0a1ba31",
          3941: "098bb3980915fcbae28d1c879dc3890f",
          4011: "ba7cc0d684f844a763eac19d689af9e9",
          4528: "4351db5fe239bcc6f52e57fcca242f6b",
          4578: "9d858fcb6e76783f381735e9f70a13cd",
          4621: "cdf8ec8fd97052a808cc7fe536a85760",
          4700: "efd1e578d99562d587b20b0035bbe002",
          4710: "e47e3e3d0a151c72d4c0e4ea0e225888",
          4731: "e16af473c96215c93bd6ac7bf0726b6a",
          4799: "a28d10829a4be5b605a78ae995bda3b2",
          4851: "7deb5a3a5ee34fb479752244a1fa37e6",
          4861: "8882cf666912426f8ebbb9de977fbc16",
          4913: "d7a5a639eae3fbb708626ab067a0d594",
          5018: "99cc0403bfba1c95e8ef2d27954204b2",
          5233: "e547287c8eb71f57b3fee76bb57863d6",
          5259: "12f1d6aec9a166b64b37d913011da04d",
          5389: "9f92cacd7de84ff9504a6c7e1f2cc4db",
          5530: "1f93aa022b7b4b166359fc25f45222d3",
          5639: "7ca8b3146cdfd3f24711cdb3fc41fdb6",
          5663: "c68f7c1b963787299a2d780e9a7e6bac",
          5742: "8a67eae72716b95052210e256eddcd7d",
          5830: "5cc3714cb99306bc91a0d90d181b16ba",
          5832: "68d83d3d0d90d7e5ad72937d5f31ba4e",
          5932: "dbae8f273034f5a46f2b823f77bda6d8",
          6267: "3f8e4e586e6471d5fd54137dff224656",
          6280: "5906c0e8a358ff60549dce95245ea614",
          6285: "ca74d4f90a8c1e8b994f60c3d9a8acc0",
          6361: "ea24c80cfdf5ad16f2fd4f1124b76321",
          6664: "ea37d2fc569c3cb8c28c0ddb2a76ff34",
          6879: "d6c9ec0231e4070c4e4cae4371e6a80f",
          6891: "6d1cfa029b0175aec753aa6e0cbb7a56",
          6997: "a984132131de222ad229b73f7d374fcc",
          7010: "5b6b873e25ea4c232f6d69052db101c9",
          7073: "cd1909ab36e39bc919107fce2dfbd3ef",
          7282: "32fbbe3d5f72108fdea41bf4121129c8",
          7436: "9f6be1457ae1d89c843c7cf6661cfca3",
          7452: "7f36d5d116d096470d8793f1e424cac5",
          7453: "b9d66dd46585c688cee1c3c9ca2565f5",
          7970: "7aa1e2a34e5a3e9ad5d8645a2d19b3c7",
          8272: "b45941d89b3664d35e1596a2f622fbfa",
          8391: "d6830b032fc2564c988663937098cb3a",
          8431: "da73825ab3dc51ac93ea48795508f9a4",
          8755: "07f7b8fa0f04fa8a0492f4308edefe0b",
          8880: "744cbebb77d6471f10d8d2d29bb2778e",
          8970: "86006aba6897ceaa3f1aba266038c057",
          9022: "8beb1f5fcd3f1d5d1bf2118dda42aa9e",
          9028: "188be9b01c3f0567b985b5e1085c8b85",
          9126: "42636bb3f9dfb0d5a469c0a21a8e4f7e",
          9377: "7ce6d539ada9f29aedd9286bf46131b1",
          9615: "32c50980060c777635a6958f9ffc1d64",
          9741: "16effbdc05e5e068c76128514fefd44e",
          9936: "5c39bcfec48b96f81c0f30eeeddc16a9",
          9990: "49e669ff452035e04b9a768025fa248b"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          792: "b5328e2f95f5b178239a08711e5d52f6",
          2364: "debb098fe4eb10cc6ea2338c25eeda9f",
          9741: "7a398e1a54d4e611af2d855ec6db3b77"
        } [e] + ".css", E.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), E.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-gif-viewer:", E.l = (e, a, r, d) => {
          if (t[e]) t[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var b = o[i];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == f + r) {
                  c = b;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, E.nc && c.setAttribute("nonce", E.nc), c.setAttribute("data-webpack", f + r), c.src = e), t[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var f = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach((e => e(r))), a) return a(r)
              },
              l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), n && document.head.appendChild(c)
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
              var d = E.S[r],
                c = "@rockstargames/modules-core-gif-viewer",
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
              return "default" === r && (n("@rsgweb/utils", "1.0.0", (() => Promise.all([E.e(3738), E.e(2229), E.e(9623), E.e(7282), E.e(2295)]).then((() => () => E(8881))))), n("react-router-dom", "6.30.0", (() => Promise.all([E.e(1098), E.e(5389), E.e(2229)]).then((() => () => E(5389))))), n("react", "18.3.1", (() => E.e(8431).then((() => () => E(8431)))))), e[r] = o.length ? Promise.all(o).then((() => e[r] = 1)) : 1
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
        })(), d = e => {
          var a = e => e.split(".").map((e => +e == e ? +e : e)),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = r[1] ? a(r[1]) : [];
          return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
        }, c = (e, a) => {
          e = d(e), a = d(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var t = e[r],
              f = (typeof t)[0];
            if (r >= a.length) return "u" == f;
            var c = a[r],
              n = (typeof c)[0];
            if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
            if ("o" != f && "u" != f && t != c) return t < c;
            r++
          }
        }, n = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, f = 1; f < e.length; f++) t--, r += "u" == (typeof(c = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, c);
            return r
          }
          var d = [];
          for (f = 1; f < e.length; f++) {
            var c = e[f];
            d.push(0 === c ? "not(" + o() + ")" : 1 === c ? "(" + o() + " || " + o() + ")" : 2 === c ? d.pop() + " " + d.pop() : n(c))
          }
          return o();

          function o() {
            return d.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, o = (e, a) => {
          if (0 in e) {
            a = d(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var f = 0, c = 1, n = !0;; c++, f++) {
              var i, b, s = c < e.length ? (typeof e[c])[0] : "";
              if (f >= a.length || "o" == (b = (typeof(i = a[f]))[0])) return !n || ("u" == s ? c > r && !t : "" == s != t);
              if ("u" == b) {
                if (!n || "u" != s) return !1
              } else if (n)
                if (s == b)
                  if (c <= r) {
                    if (i != e[c]) return !1
                  } else {
                    if (t ? i > e[c] : i < e[c]) return !1;
                    i != e[c] && (n = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || c <= r) return !1;
                n = !1, c--
              } else {
                if (c <= r || b < s != t) return !1;
                n = !1
              } else "s" != s && "n" != s && (n = !1, c--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (f = 1; f < e.length; f++) {
            var p = e[f];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? o(p, a) : !u())
          }
          return !!u()
        }, i = (e, a) => e && E.o(e, a), b = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}), l = (e, a, r, t) => {
          var f = t ? s(e[a]) : e[a];
          return (a = Object.keys(f).reduce(((e, a) => !o(r, a) || e && !c(e, a) ? e : a), 0)) && f[a]
        }, u = (e, a, r, t, f) => {
          var d = e[r];
          return "No satisfying version (" + n(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(d).map((e => e + " from " + d[e].from)).join(", ")
        }, p = e => {
          throw new Error(e)
        }, h = (e, a, r) => r ? r() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), m = (e => function(a, r, t, f, d) {
          var c = E.I(a);
          return c && c.then && !t ? c.then(e.bind(e, a, E.S[a], r, !1, f, d)) : e(a, E.S[a], r, t, f, d)
        })(((e, a, r, t, f, d) => {
          if (!i(a, r)) return h(e, r, d);
          var c = l(a, r, f, t);
          return c ? b(c) : d ? d() : void p(u(a, e, r, f, t))
        })), g = {}, y = {
          2229: () => m("default", "react", !1, [1, 18, 2, 0], (() => E.e(8431).then((() => () => E(8431))))),
          5966: () => m("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([E.e(3738), E.e(9623), E.e(7282)]).then((() => () => E(8881))))),
          9623: () => m("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([E.e(1098), E.e(5389)]).then((() => () => E(5389)))))
        }, v = {
          2229: [2229],
          5966: [5966],
          9623: [9623]
        }, w = {}, E.f.consumes = (e, a) => {
          E.o(v, e) && v[e].forEach((e => {
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
          }))
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
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = E.miniCssF(e),
                  f = E.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var f = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var c;
                      if ((f = (c = d[t]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", E.nc && (d.nonce = E.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
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
              var f = new Promise(((r, f) => t = e[a] = [r, f]));
              r.push(t[2] = f);
              var d = E.p + E.u(a),
                c = new Error;
              E.l(d, (r => {
                if (E.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, [d, c, n] = r,
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (t in c) E.o(c, t) && (E.m[t] = c[t]);
                n && n(E)
              }
              for (a && a(r); o < d.length; o++) f = d[o], E.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), E(3032), E(4848)
      })())
    }
  }
}));