try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d0c105c3-152b-4fe7-a653-83b10a59b04e", e._sentryDebugIdIdentifier = "sentry-dbid-d0c105c3-152b-4fe7-a653-83b10a59b04e")
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
          131: "fc1e83cb5488c966ebba47c9cfede0a5",
          278: "60d842c9d196adea0d2baa3fcb759d52",
          299: "1df8f193ec0331a23f146650b4ef4277",
          314: "0e23161cfa2074394cd90e09bf6037fb",
          662: "f55e14a3c2308b16e6360402e044c6ae",
          792: "d01dea6d421935c87b9593bd38e4412a",
          824: "d26e6493ca767d16a1a1156a6b09c2e5",
          907: "b56b760233516a1ae83c50137a3003d7",
          1054: "81b6723840a009bf1bed6f9415e75680",
          1098: "7a96c9b4956150e8a8bd55495fcb8404",
          1242: "828ed604b64d4ca84092c7cda75e6cb8",
          1822: "357debe912ed0037651a75558e45cd1e",
          1868: "addc6f375d11af71dd799b1762d56240",
          2156: "bafe1c0894f6685d3362c39d30f368ac",
          2171: "0b12993147a5662662d3103d8a64252b",
          2221: "6a9197a470ac06a4d5a21aea9f55defe",
          2243: "a0d70fea1340930ce9e1a1e9e8e08788",
          2295: "ff41d5a7c1d73cb3cdaec0ed4876a81d",
          2347: "78cc3c93a715e6451b3d0a0a171b8a0f",
          2364: "91288c5942e7fb38ec76f02b378eecbd",
          2365: "3e3a09460a45eee5bcbd26e3d884fdc4",
          2398: "6535155936862530046f90dc8bc3834d",
          2466: "8636d9d08140a50033b822f2fcf2bd30",
          2642: "efd9a1330d605d99621cec9ca45c31c1",
          2678: "9884b6cd94e33f88d3149f32fed5a0cc",
          2864: "1f4a3eb9c20bd826477151c386658323",
          3034: "7d0094428d793f2ae64ff2759ade5aef",
          3197: "4ee9f75976bdb37bfdb36089ace308c0",
          3343: "f8de2a4d637a1eb83c2179be9b61832f",
          3370: "2a808387ff036cdf0fc0729bea80a9d5",
          3475: "c28e154473a8c3591a3579170654492b",
          3486: "5874e427e6f7036e94779a77b80c7be5",
          3697: "2e65062f1b6c108281188e9d6b72f714",
          3738: "c360bb75d54848434fc7f186e2a379c2",
          3885: "1e906c48e2503cdc517a26346cd3f623",
          3941: "8e78243bf01e4802e5c77f9e1d267df4",
          4011: "585dccfad95abbce4eabb612c8ba6290",
          4528: "079da8efda5a047948b385ab69faef55",
          4578: "22837f842da9085a309b3099bfe5d860",
          4621: "939cfa100a3dd5eb45e75c57cac7c62b",
          4700: "30d683bc395a40eda72c27ad8db931ed",
          4710: "8a7d0a855b505c1f05e0189e6113679e",
          4731: "b54e129add6f78af81868873a0adbe6e",
          4799: "e997c0ab3285e4a4834201c1b8161622",
          4851: "3aae88a78bc1bf4d510bbe25cf003928",
          4861: "fc5cb89305e34a0f6f7ea3a3740502e8",
          4913: "bfb1d3fdb8a79ff2193b4e2c5b325c5f",
          5018: "cda88854c17ae28f2ca0c4fbcacd281c",
          5233: "f697dc6b0726dc0813a785a2e006ea27",
          5259: "38d9cf28e9c818680d2637600c38b9dc",
          5389: "7a3a1176fc3584ac15ce8bd4624764c2",
          5530: "d5b539df4990ee0c769f04cea940d93e",
          5639: "eb089a350bf00f59b2662e0c56bd9a63",
          5663: "c37ebdebcf54ea0a0acb9b3266bde7e9",
          5742: "8b31b8d97e75202d8f074aacafbc1e6f",
          5830: "47f738c560a89f3b9166cb161da2de4e",
          5832: "7b728d0c495947ad05c433a847a47231",
          5932: "190a0d6a963bd91af58d6f68572502fe",
          6267: "8839a4866f779df7ac3bb5f6b5859ef8",
          6280: "b10f82c06afd41ccfd81888e5a46c879",
          6285: "3e3de877fa85ad695635f42eb5e09fe6",
          6361: "f416629477617b7a37dedc210a95f774",
          6664: "8fd224dbf2e7194731de9b462b8e19e0",
          6879: "2e77dd015cc4ad24eef7e773c8781fb8",
          6891: "1a5e80cc23249bcaa4e759e36140d546",
          6997: "883a0a46f669ad24ed661042aefbfa44",
          7010: "838f504067cf315509c0ce9cf81cd3fd",
          7073: "291671a3a0fd6c387ba46dfe6bc754b4",
          7282: "206d4fba68538d3456da8d98b2d97255",
          7436: "bbdf37ec12c972912298fedf01defe2f",
          7452: "e232366a5efc0d319ec3ed9a05dd7d65",
          7453: "fae9f7d76473474828ab0e2bdf405701",
          7970: "3477be78efe556686b6712f406d6531f",
          8272: "d09c2abf9f84d4d0d1b8fec609426875",
          8391: "37966367492d1a511ea175859831f599",
          8431: "86ffcf370ee41d57c30411d8d6e5be50",
          8755: "3e3c0671c52767a58c6c674c0c2f20af",
          8880: "72af4f6503d17f74186ae02c29f87f4f",
          8970: "502f61bae7a71d77e1551943f047e973",
          9022: "512b326dd5b830079eb6f4c50ffa4440",
          9028: "c5285d8f538aedffe5fbeae58bac96b7",
          9126: "dc02ffe035c2e00fef6b53996f30d5e7",
          9377: "30197cdf34accb759602f85361b7b7de",
          9615: "a7b6368ccd3769f2e6b4c140c65d5205",
          9741: "23acfc3d3e0f73538045cf8acd8337a1",
          9936: "fe0576d2a14b2697c5e011afabf7ae6a",
          9990: "28281303a34efa08129129e9fb66cd47"
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