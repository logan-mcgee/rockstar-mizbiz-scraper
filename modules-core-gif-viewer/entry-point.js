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
          131: "33556ade9fab796d59a71fbee0a29e37",
          278: "ac5c0ee763ee9481960131ca8a213fb6",
          299: "614bfc487775b6af6dd42aa880c4530e",
          314: "2b109a551c81a0af177a5121af984a7c",
          662: "27e5194780b54d15f0981b4551f878e0",
          792: "3cbdcca6ec8ce0de07e877e2b6788332",
          824: "664c22284838b35d693c5298fca1af3f",
          907: "d774a0500fdf97e1f4225f09ca44efbc",
          933: "96d7210095278f25dda90707c5bfa815",
          1054: "e27c18d9606ad86cd264ac04f5dfcb6d",
          1098: "ab76a0efefd55aa7f1e37a0ca27946ec",
          1242: "ea79f185ff263fcb01fa489fab601437",
          1822: "c4ca810e5639d7ac5b94a9c3bca33170",
          1868: "f8cc11f005341359a76698d881a25be6",
          2156: "9b73ce5d448116fc5cbf6b1db5e74a71",
          2171: "48a2605f3681992df2a8f50a8a89a420",
          2221: "4f9f59671e9b2235825cd2fee05146a0",
          2243: "981a457bb6d87ecdf1e7403b09a9b15a",
          2295: "a0be6275a3213df835e10510dde2b603",
          2347: "50fe8a9a4427cd36e22165b806348d46",
          2364: "576b799f01259bfc9aeb53b5bf829c61",
          2365: "b44eba5ce631d31e871df9f0f89970ad",
          2398: "8dcd12b996e4217f3a940d89e401c16b",
          2466: "00439607f4dc9700f4e4532778c40555",
          2642: "1e7b14fb85f93f97a016e31e302b4e20",
          2678: "e57300ce8512a004100e818d1139da90",
          2864: "99191340b5565ac398a230d3d7361d02",
          3034: "57310d572960552fa35b009d7af0bab5",
          3197: "c2155c5baec2668b3afef887c8ab8a2e",
          3343: "e189ad53074c85247ed99e0edf35a19a",
          3370: "8e774e9a3180200ecfd0cccb2d5796a2",
          3475: "1968ae2f806c5ba7e477f3eee26c83ba",
          3486: "cf249879a235e70bea70ef4955951c82",
          3697: "3f52e8bfa7bfdcb7f1d76cfc4d1267d2",
          3738: "8d582d10a682f65e16ebddd0cd785a67",
          3885: "d19962effa3d4183f3a2e26a6d3a1daa",
          3941: "887f9ee3a1877dfb8c779d61e39888ce",
          4011: "6914b9246ee5b0b0d4284587249c6d95",
          4528: "5fb4daa70d64802a82644678226c6322",
          4578: "3149b6a1e3d865bb984b4a588b2e009c",
          4621: "7dbf1dbe2ddf902ec26f0a1b01366d26",
          4700: "1fe332092edc8f423160cc1843279ed4",
          4710: "1636e5a7856ffc8cdd5bbe6415d17e32",
          4731: "5f9505a6c7c4c9044041b182122ddbbf",
          4799: "68087d5f5aead622919cc6c4fb946cde",
          4851: "a6735e89d4b85316b2cf73ac6d8551e1",
          4861: "26f9d6d2dca246931167695a4f0bd258",
          4913: "ed37a0d9dd815f4957ec17b6a34aa03c",
          5018: "f0c6ad11ca834c1f9573df2de966be6f",
          5233: "d93e320d68466f2947fd30f7988c2d99",
          5259: "8d31da238c929d63158db77ce2065987",
          5389: "e6fc7776251a95e87f599fbdd940bc52",
          5530: "dcf77ca4f8ed3938d34182f9fe187e3b",
          5639: "75037583aae0cc322fad7ceff97333ec",
          5663: "549a07a00978894b3ef490c7f3b9434b",
          5742: "fa98c9140a7c12c7239449144b3bfbc1",
          5830: "a4a5fa1dd1c29119e2d83bb96943b6fd",
          5832: "cf03aef7039240930b90d38636b04447",
          5932: "82d29d5c727ad24ee5dd12c735e1221a",
          6267: "2fb58eb6232c0d34da817305b07337e0",
          6280: "3eb6e0d02f49f6d4bdd23c041813360e",
          6285: "ea941e06bf6bc8ea0f9568319c82f80e",
          6361: "5d021673b7b8ba8ce778275f341cd01b",
          6664: "3f38d1e76d2aaa8bc8ff1dbfc2516d9f",
          6879: "0775c64c10bfdff0a41ebc4c18c5be3f",
          6891: "7c2361088035245770323043961ef95a",
          6997: "ebe84d64bb445175b84e34e43853c6fd",
          7010: "a7ac0baa424ede6834ec68a42c8e2171",
          7073: "43c8436b6bb684aad421e4416cae72b5",
          7436: "253784fb252c7457f1a596ee6d85d348",
          7452: "da06d49fbb117ef78d83799b710a846a",
          7453: "19f5cb2ff31eaaf28f9780150892cbf7",
          7970: "86f851659bd71429694e75566996df9e",
          8272: "6bc13b3f4891a515adbef45152adf3a1",
          8391: "b30d37e882b3b1abd3511acfacf458ba",
          8431: "83ed5aef0f4d39d15894b1da9811cbdc",
          8755: "11901f98928e2599bbfe9dc806dd886f",
          8880: "325a79669e8b2214d96c534f81ce17f5",
          8970: "44b976bbfb6acbbccc9752c809aa5188",
          9022: "d43ef5003658c05858bfa5fc29d06f8c",
          9028: "5f636fbaf1671ca68132cb004092a148",
          9126: "31832aaa116cd6d11ed1ceb3a28e2fea",
          9377: "07cf5f7c79ecf65348dbe40838502f94",
          9615: "8086bdab0e1bff73ae92589471766167",
          9741: "5e7d02d2f7d59b61f9ab89c061e131fd",
          9936: "e3a5273f8886edd76c8f584abfbd8666",
          9990: "797780e43a5e19377d430d5b60d63177"
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