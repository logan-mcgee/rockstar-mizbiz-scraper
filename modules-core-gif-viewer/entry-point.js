try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3d74f5b4-1fde-4b5e-a9ad-226257f97133", e._sentryDebugIdIdentifier = "sentry-dbid-3d74f5b4-1fde-4b5e-a9ad-226257f97133")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
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
          131: "1859615d284ef160bebe335b20ad88f3",
          278: "f6f03467fca91a568e52edc53a087b81",
          299: "4538e616746420345ecf31e8071e74be",
          314: "8963c84c7dc57d9ae88ca3ed8c92570c",
          662: "c3399c0d18eaede2c28d2ce6c5ab4b1f",
          792: "85501c2c0f7ca94f7c26174840a0b9fb",
          824: "2edc5384f680d37e5a8bae626311f9b8",
          907: "aa508539977699fe029a6ece8f0d5725",
          1054: "bb91b8cf3b8b8011dfe6dcc226122ef5",
          1098: "f185215733d3ae31a6a2e90ac76bc930",
          1242: "2eb2bc30a5f6209d41e64f087a195090",
          1822: "99e46cde7bf55ec0d2e591747e2cc85e",
          1868: "4bd937e3f94918d2f4304177bbc3e32a",
          2156: "47bfaed36a581d790666221ddae9d79b",
          2171: "a3f08a22e46d5f53cccb954bab7eaac3",
          2221: "c1bafc1373bb99cb9499ad958d94ea80",
          2243: "760cfdf3bb1626e0527d00d7c4b03a17",
          2295: "631a8febc597f762f8bc32c489beb22f",
          2347: "98db3e8f9d1ca6f96b168a5221d46db4",
          2364: "f4a9c625e16b26cd6ca23371c03b7f06",
          2365: "6c33dca3f39f84114ff989b37404ad8d",
          2398: "745a0c5af9061cbc304fc063f1128427",
          2466: "1fc0ebc940d3367697f3d1074f51b158",
          2642: "ec35c514685f40515bcfea1be18d10f5",
          2678: "b60180c8d48d5b5b9223925c9c8261fc",
          2864: "c4766b9d4d0716f76f7c7c3c256073ba",
          3034: "9192cabc726aefcb68341d11fc90bcc0",
          3197: "d98d6598c5a07220703502394c7f1ef2",
          3343: "e677da3b959683473ba904041cea1c4a",
          3370: "91ff81033190b8cea084ceea335c9fef",
          3475: "1300efc85874db2e341c53f97e3a4d8c",
          3486: "4b72bbfb8cb3e445604e2028101a701d",
          3697: "5bdfec4982ba80f34d1e641ec8291416",
          3738: "231fae98be96dc7f4b0b77f8c66dec49",
          3885: "831496ac5c89df51db6d140c5b029b4f",
          3941: "371f528c2b4ffdf3c26954a74ff70266",
          4011: "8ce91ac976d5feb7bd6d1bbed5f16c82",
          4528: "4df2c2587dbf40173971801f04bbaeeb",
          4578: "cf15734605217c01303b0ebdbbd847f0",
          4621: "89323c425930bbfb7854bfc174e0eb20",
          4700: "a2517fab4144eea952cebfcfa086d6f1",
          4710: "3b674144f6656d788ead9197c49b619f",
          4731: "1aa96a8da7e90af8e19801d1cd1eaaef",
          4799: "262f240f5283ec8e12d2191df6f95d8b",
          4851: "c6698efac37837aa87f66558338c18e1",
          4861: "c3c99fa412332fe801a733606163c545",
          4913: "2dc71662b5a67538e933ff7236b9003f",
          5018: "24290550cda5a46fec2ec04bb852fcf1",
          5233: "0be28e128d3f9903818a86524d5503f2",
          5259: "27d1d703c18439f1dc3ff9663ad13ba2",
          5389: "de5b1a373906442708f78122591ec8d8",
          5530: "700161746b6709cde79cdfaef516b294",
          5639: "1fe8790b90346ee6c114159bda6cad97",
          5663: "ac16dbb84b1c9e1f049ce47df5c33e2b",
          5742: "10bf867e0773fba2bfa18c749bb08178",
          5830: "944945b1e84164f6354f6bb32d684ae1",
          5832: "00f402edae494a01dddf44654c17b2f0",
          5932: "5d6f28b5815935233ac43e0375261fc6",
          6267: "01b97e3c6c991c2bf986be13df1070d8",
          6280: "69ee51079822d60062d01d688fb74dc7",
          6285: "5a6f1ee30dc62d7ecb3a5e376cb6a41f",
          6361: "fb90eef972298f24e37180a572435560",
          6664: "a10be132a823523e6be46acf8010e970",
          6879: "b7f271ff0668052c383ecaf9cad3df74",
          6891: "a64424a052d6db12d497314fb972f111",
          6997: "712f5eaa00e5a4fee9933b8ebf935a82",
          7010: "614a53b9a433f1a35517459e9adc4cc0",
          7073: "3d1de947290bf7b707a427ddfa44248d",
          7282: "f88d4a280c5b6af354e56120c493a40c",
          7436: "d6634dabc364fd15e33c6a2fad4d2892",
          7452: "87d140e732913e1a078b5cf60f1e38aa",
          7453: "67a1a32161101248acea14f132c3259c",
          7970: "b4896f3ef94a7cacfeead659e03b0d76",
          8272: "e7c750e78dfd94e11e23f98e421af08e",
          8391: "0e335c64e9028fbe42798b13ba636389",
          8431: "be55b4ef475f528b564c258850c9addf",
          8755: "d3eca06ece04be50c414b933c7e7b276",
          8880: "0b3701396297c90995114a9285526552",
          8970: "42f137ff9638cac1c6d401f9df3aa6b1",
          9022: "cbc61bbc898cdb27d777a835820a96c7",
          9028: "cda29a71ed2a9877146d1625653d6d7a",
          9126: "e453e435940ad2fcd44a6b84984fad5b",
          9377: "80f09a703fbe8aaa5bfe3a808ebe309e",
          9615: "51afc688ba9c37b7b4dcb3875ece29ab",
          9741: "d938e65f92d89d81c1e48975d6aed65d",
          9936: "c781fc37547c34afbfad806814a7cfa6",
          9990: "7d132322c3681041f8257170ff9ff835"
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