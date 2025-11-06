try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "29127eca-93bf-43fe-874b-994ed8c4d3fd", e._sentryDebugIdIdentifier = "sentry-dbid-29127eca-93bf-43fe-874b-994ed8c4d3fd")
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
        var e, r, t, f, d, c, n, o, b, i, s, l, u, p, h, m, g, y, v, w, _ = {
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
          131: "3b47f07f2941982f81179412affafff1",
          278: "b8c29995177be8c001105fed971b892b",
          299: "e1386ec929bd107d6ffed9c01759ecf4",
          314: "40a542953ea29f2e86284de6fab48c58",
          662: "e3d2f07f76aa21435f812b8d2a1ca43f",
          792: "79d3697b424fd7ec3ebf00fe8459137a",
          824: "d7f738b84931715dca951bdb97a8850c",
          907: "60515ce9b829f96acf77f15fb4fb8fd0",
          933: "d25772afcc43588e782843e4bffb0574",
          1054: "c5884fd40da35335e81e6624de68b7ad",
          1098: "2b393d48e19ecc86b71bb688d0468443",
          1242: "3992983532fa49882d201bb610e9e03d",
          1822: "f30ed10eaf6502b5341b72293915baff",
          1868: "79db6980956273e0d44cf8e29b017b6c",
          2156: "44e7b2be2daaa4c21f3b48978c59a127",
          2171: "6d118ced2ea8a4fa4af4b1b565db06d5",
          2221: "006530585502902883739ec442d75f08",
          2243: "748d9ec9bdd2e7eb54f209d596f96ef9",
          2295: "19137480f54c32c2a4cfc1cda6064f1d",
          2347: "501552004d9ae0ea694c5568d84510f5",
          2364: "d54519899a5237812913fbe54929cc3a",
          2365: "9461c87b4da10f6d0d6fc6fd4c1ee762",
          2398: "d43aa28f9465d910931cc74946cc81d8",
          2466: "673f097a51ec9334ae5abca32e170e11",
          2642: "3355040791a77cc2ed749ee91986310e",
          2678: "c164731ff5476302667a721632924065",
          2864: "0079f804035cfee61eeec41268eb55b8",
          3034: "d80e7d8326f8f1492524550f5a8ff674",
          3197: "e467ebdaec121c879f57b82c8456f243",
          3343: "dc17828e0dc5669007f3938993756be2",
          3370: "470b960831d705f1b1750399b30c2e20",
          3475: "70dfa0bbc629ff0949ef3d6aa79f79a7",
          3486: "8ef19e338977a766e22b7a08c16698ef",
          3697: "fa33ac9046c757ca0dea6a6080f62041",
          3738: "71fc6f65740b043d5ba1b1f032857a77",
          3885: "75624432f4be3419ec22190e8da23241",
          3941: "09d87985ac62ef876857f5a6553ff6b6",
          4011: "9035fc833d4beff41ec9efdcee53a7bf",
          4528: "61e28e67ed4d6230c1ee654e2d02094d",
          4578: "d2702c4ef806ad26ffef5c17203e7a42",
          4621: "6aa9ca8499787be31ce03614927eb4c4",
          4700: "8585323613111a353366c0ffe0be70ed",
          4710: "cde3f4ebf013511a99ec2c9be4a0bf59",
          4731: "281ddfc8ef201369c20184ba5fc3057e",
          4799: "ea26df738ea57ff45233c3c80b7d3e48",
          4851: "3c226b0d721bae1a08b3cd4a91de7424",
          4861: "5011eac08fe5c299b63d3a26000c320a",
          4913: "7b80cc8390e760a4176d66afcf07589f",
          5018: "5a60e91ac09812cddf58afc3a2d1548a",
          5233: "c3970d249987a7f317c16a25bc0a6eda",
          5259: "eb7e4b7f9e6f360c4f21f186da6bcfc5",
          5389: "126cec0a5de41628acd784df1adc8661",
          5530: "2664e99d87251287f6e17a1957a65ee2",
          5639: "fb26ae15868971342c94964bd605f9fd",
          5663: "4f8598163d5bdaa73c9c95f6408adaf0",
          5742: "c3d4e8cc116e09a7483c694a72babbce",
          5830: "59b8b83f9d8bc68861d9e5701d8bd724",
          5832: "eeb618932fe680af838d61493eab4a76",
          5932: "6cb527c1f75cc5229e8fb21378451fed",
          6267: "df9d1aa213d4f1add82c2a71b98f206e",
          6280: "0593c7750c5a37d7f8a679f9b63c8c12",
          6285: "c5098b2f1e8ad020a2c7d8e4c91b6daa",
          6361: "4e3215aa3ff74e67c1d134115171f3f3",
          6664: "7a7ee121a129b725e7027b4f6ae4ceb0",
          6879: "b570eff806b2f70f78df3a4dd51104d1",
          6891: "73d01464417cd04c604397132da44e07",
          6997: "f90bdad39fe3ab7b81c72301318e07af",
          7010: "9e3f2de49f3fb322b73e71263739ed29",
          7073: "9948368066f535d6fea952026f8f5d96",
          7436: "b529906cb02435254ce0f57b2105e15d",
          7452: "f621e7e06db191061eeab6eeda8398b0",
          7453: "3795f19c489771d0bb38e502586af0f4",
          7970: "d4435ed4b8e552cc419eeeb3fa493fc7",
          8272: "6fc500aaba62ffcf33a3faeb1d65f1ad",
          8391: "f39ce1e98d5515e0b55bbf1a648f282d",
          8431: "a4ac08f7682710256a8bed50c1d2049e",
          8755: "ecc2218195a5910713866d5fdeb46650",
          8880: "f0c69a8f0d14abc95c944ef81fa6f52f",
          8970: "1cbb79be99991203ba924fdb56d7fd37",
          9022: "1b6fa0787ea00d6ae04ea791d14dc96d",
          9028: "b360429e999610d145bd280d86d25a67",
          9126: "46a5fa8788e0f411cc73f02af0d591bd",
          9377: "d5cd5531ae073332fc6db1a894d208b2",
          9615: "0c2052ff09bf8d91eddba765ced3ffa7",
          9741: "d9eeff231aff28347a27a5ed5f9fef4f",
          9936: "fae34ea043380d930f3a49090b950a4e",
          9990: "47e1d53e37f96cd8727332f8f3399484"
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
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + r) {
                  c = i;
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
              return "default" === r && (n("@rsgweb/utils", "1.0.0", (() => Promise.all([E.e(3738), E.e(2229), E.e(9623), E.e(933), E.e(2295)]).then((() => () => E(5802))))), n("react-router-dom", "6.30.0", (() => Promise.all([E.e(1098), E.e(5389), E.e(2229)]).then((() => () => E(5389))))), n("react", "18.3.1", (() => E.e(8431).then((() => () => E(8431)))))), e[r] = o.length ? Promise.all(o).then((() => e[r] = 1)) : 1
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
              var b, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (f >= a.length || "o" == (i = (typeof(b = a[f]))[0])) return !n || ("u" == s ? c > r && !t : "" == s != t);
              if ("u" == i) {
                if (!n || "u" != s) return !1
              } else if (n)
                if (s == i)
                  if (c <= r) {
                    if (b != e[c]) return !1
                  } else {
                    if (t ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (n = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || c <= r) return !1;
                n = !1, c--
              } else {
                if (c <= r || i < s != t) return !1;
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
        }, b = (e, a) => e && E.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}), l = (e, a, r, t) => {
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
          if (!b(a, r)) return h(e, r, d);
          var c = l(a, r, f, t);
          return c ? i(c) : d ? d() : void p(u(a, e, r, f, t))
        })), g = {}, y = {
          2229: () => m("default", "react", !1, [1, 18, 2, 0], (() => E.e(8431).then((() => () => E(8431))))),
          5966: () => m("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([E.e(3738), E.e(9623), E.e(933)]).then((() => () => E(5802))))),
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