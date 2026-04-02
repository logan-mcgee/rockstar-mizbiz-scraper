try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5e49e446-4735-439f-a893-a79b7477fa64", e._sentryDebugIdIdentifier = "sentry-dbid-5e49e446-4735-439f-a893-a79b7477fa64")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, d, f, n, o, c = {
            17411: (e, a, t) => {
              const r = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, t) => {
              (0, t(17411).w)(1)
            },
            77027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var n = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + n
              };
              Number.isInteger
            },
            85819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(6930), t.e(4656), t.e(1127), t.e(1021), t.e(1961)]).then(() => () => t(31961))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            },
            93032: (e, a, t) => {
              t(28419)
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
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var n = 2 & t && a;
            ("object" == typeof n || "function" == typeof n) && !~e.indexOf(n); n = r(n)) Object.getOwnPropertyNames(n).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, t) => (i.f[t](e, a), a), [])), i.u = e => "js/" + {
          131: "1038b23fabd80c9c68f419a85b309b81",
          278: "fc4b0a20ba09116d75911a1589a17d90",
          299: "2a709c5e4de9451cbd636dc55c1503ed",
          314: "f00800e8173909929815abb1a2184d25",
          439: "21e7828caf2c1bbcbba21d9164e90339",
          662: "36929569cbd4f60e654e6e301703c136",
          824: "666c98c10a2375739b9927f010a73698",
          907: "7bebc318858419b13921860bbc75367b",
          1021: "faf79c466f619b61d757fda90d9ac34b",
          1054: "1b5f8b63d2d33646142c88b820796b09",
          1098: "0ce220ae9bfbeed1907ec052f1d706d0",
          1242: "ae2be47a4ea6d1b1bef69b757b97ef02",
          1822: "19b173557d688ccc7554ad7c342b4bcb",
          1868: "f49017114e16c69ae0b79027394e005c",
          1961: "05a89c255fc6d9f15f6513712595150a",
          2156: "d05fb8e7c604df88b2f691e27929d405",
          2171: "44002bd797e361d198c374959a135b39",
          2221: "b4979ebce87d9cde46158dcb0c1e8dc0",
          2243: "81820ac570d7b563db3096d4de240a42",
          2295: "10df0180aedfba2e4b0f5402b4f9bce5",
          2306: "8c97ad064716cd987337763500f0a5c9",
          2347: "fc83e0d0d67428dfbd2681be5ed7146d",
          2365: "cd6869bcdecf41b03e58851b4b1ec44f",
          2398: "065d1f291653c0e1f4e3905681f82c4d",
          2466: "d102aca3ca987175fa112277cdda3251",
          2562: "461df1045946fdc029dcfb62664de4b9",
          2642: "029538a042a619049e7cd2566cf54590",
          2678: "4114c6c8190921d2c2738066e317c1e7",
          2853: "8d0479797502cefc43dbfdd3029fa92e",
          2864: "f36b8ac8c590a5c3a585c68a4177c751",
          3004: "c683fb133f2cf2289769643ec8783b17",
          3034: "f8bc5099cf08ffef48bf312734214630",
          3197: "7c87d78cc1eda9c3cc4f9137ccc208d2",
          3343: "d078e857bd60d6f48ad5f04d4ea7c02b",
          3370: "8d293d5de7bb4ad1ae56a1e888b5a856",
          3475: "dd26f77d9294b88ec52844f4b90e2529",
          3486: "3233bbb4f1c4096b7019c9043e59eff2",
          3697: "319b354b41d0905ed85b257bc7ef91bb",
          3885: "48e6ccd00e071a67ce28ef2bb6e5d104",
          3941: "5276ea8c1be034ec3f158aa23d5862d2",
          4011: "dc9c506d8f8ff15841d34d8e273f49fa",
          4057: "b0cec0ed7e7403e989adcceae6033aeb",
          4528: "c5510542c0d8bf58eb6369da0be3cba5",
          4578: "7a8463a9f8cb91a6665730aae575fe2e",
          4621: "3c7e13d5f917bdf30be54e5894a8a84c",
          4656: "cfceb232920770c4042161cae5993e6d",
          4700: "acb3224d3389403170f6229616845bda",
          4710: "5c6adad067a61c8c7d06f081d8ccbd16",
          4731: "10dd17c758b22e715bfdae1cef8ae130",
          4799: "a6e45da0760f8cb9db3ccf3f591d27b3",
          4851: "6c55d5b1164c4269caa69a3e6e5fb6e9",
          4861: "2d030792df632c7e35212818409057a6",
          4913: "b70b68e85245708a5b81466f2ccff403",
          5018: "c51f14444ea90b72787c05d98f3f0a63",
          5233: "c112e823aad7f49f7f4f0139a2e44dc8",
          5259: "38cf005cec9f32da17e2e299e7896373",
          5288: "a04b10c870e02c1c1a9affbd1b8ba289",
          5389: "2eee54c11dae2a590dad9299dde4beeb",
          5530: "cff9416a9441e92c3a2123e1675766f7",
          5639: "8bc6008d0f06235c1701cf4a3e486829",
          5663: "25dc3652409817488748b2cd150f2789",
          5742: "4c3f8e9a34df393fe3d0d4c9e7080c4e",
          5830: "5d1ff3e627c174739e955dc1fb4ae2ea",
          5832: "2b8e789df547b87983157a428cbbbce0",
          6267: "b2a393792ede0808e9f88630ead60052",
          6280: "4109ab89f799c4bffda72ebbc8be86cd",
          6285: "f3e62b2217600d07083be5f56ddd81e2",
          6361: "4564ccaf387dee6e2f149a81fd8959da",
          6664: "daaca8aec1113b768973491067779156",
          6879: "c2ffd6e8f229e7220d753d8a6f56dcbe",
          6891: "feaa76adaf504675324755fc7753f3a0",
          6930: "a3fd48b3fcf5d8e8dac6a88380d23225",
          6997: "dcf39461b454ef4c8f8573989dc0d5c1",
          7010: "005d2b748aeaf1db4c9bb6a5666be43f",
          7073: "dcf3a6098470ba2f5eeae3ef1f8e6fb4",
          7436: "20205cc1912b9dbeb25a7319e7936052",
          7452: "8c1045fd9599d5a998269e2f73a2fc59",
          7453: "c6a77e84b5cd8ea9ca3ac079bb3765e2",
          7970: "62bf9d3e7b17612bdd274fbd04f4eb01",
          8240: "7ec0868b0e11712e4c73024adac267ae",
          8272: "b85a0d63a06bee399493e65dffe54b78",
          8391: "9d573d37bcd10339a6718816ed3cc13e",
          8431: "84e15a7bd2e80b4cc3a05de1cfde50d5",
          8755: "ea0c906506ba04683b51742c0d4ae0c5",
          8880: "d3ed2deb181d5486dcbafd6b5a1805c4",
          8970: "4de1d6349ac962a00d6c8b7dedd7d22f",
          9022: "6bf9818c004aa9077ed0b8b98fc4d520",
          9028: "a6dffb8683d304042fc4b14fbe479fca",
          9126: "be0e38493b97d95655edd7df651cb7ab",
          9377: "252a06326f6382717c63137df5f331e3",
          9587: "d4af50ce384654c0ed7d78f6dc958600",
          9615: "1776c6d0251f2c5ecdb82dce94e3acba",
          9936: "27147c164a4b408a59f85693c1504c57",
          9975: "93d090971fa0368c99fdd84a8cb08760",
          9990: "53b09e04977f09043e15446343d370d8"
        } [e] + ".js", i.miniCssF = e => "css/776313306c01043409c4e8f3e8685821.css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-gta-trilogy:", i.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var n, o;
            if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), b = 0; b < c.length; b++) {
                var s = c[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + t) {
                  n = s;
                  break
                }
              }
            n || (o = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, i.nc && n.setAttribute("nonce", i.nc), n.setAttribute("data-webpack", f + t), n.src = e), d[e] = [a];
            var l = (a, t) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], n.parentNode && n.parentNode.removeChild(n), r && r.forEach(e => e(t)), a) return a(t)
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
          1961: [31879]
        }, o = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach(e => {
            var t = i.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, n, o, c) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return o(b, n, c);
                    var i = b.then(e => o(e, n), d);
                    if (!c) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                n = (e, a, d) => f(a.get, r[1], t, 0, c, d),
                c = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, r[2], 0, 0, (e, a, t) => e ? f(i.I, r[0], 0, e, n, t) : d(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var f = i.S[t],
                n = "@rockstargames/sites-gta-trilogy",
                o = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : n > o.from)) && (d[a] = {
                    get: t,
                    from: n,
                    eager: !!r
                  })
                },
                c = [];
              return "default" === t && (o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3004), i.e(9587), i.e(1127), i.e(9975)]).then(() => () => i(12841))), o("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(3004), i.e(4057), i.e(6930), i.e(1127), i.e(2853), i.e(1021)]).then(() => () => i(42853))), o("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), o("framer-motion", "12.35.0", () => Promise.all([i.e(5288), i.e(1127), i.e(2295)]).then(() => () => i(45288))), o("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), o("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), o("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), o("usehooks-ts", "2.16.0", () => Promise.all([i.e(2562), i.e(1127)]).then(() => () => i(92562))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return c.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return c.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), c.length ? e[t] = Promise.all(c).then(() => e[t] = 1) : e[t] = 1
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
              var a = e => e.split(".").map(e => +e == e ? +e : e),
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
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(o = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return r
              }
              var n = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
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
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var n = 0, o = 1, c = !0;; o++, n++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (n >= r.length || "o" == (i = (typeof(b = r[n]))[0])) return !c || ("u" == s ? o > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!c || "u" != s) return !1
                  } else if (c)
                    if (s == i)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (c = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || o <= d) return !1;
                    c = !1, o--
                  } else {
                    if (o <= d || i < s != f) return !1;
                    c = !1
                  } else "s" != s && "n" != s && (c = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (n = 1; n < a.length; n++) {
                var h = a[n];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, t, r) => {
              var d = r ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[t]) : a[t];
              return Object.keys(d).reduce((a, t) => !a || !d[a].loaded && ((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    f = (typeof d)[0];
                  if (r >= t.length) return "u" == f;
                  var n = t[r],
                    o = (typeof n)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && d != n) return d < n;
                  r++
                }
              })(a, t) ? t : a, 0)
            },
            d = (e, a, t) => t ? t() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            f = (e => function(a, t, r, d, f) {
              var n = i.I(a);
              return n && n.then && !r ? n.then(e.bind(e, a, i.S[a], t, !1, d, f)) : e(a, i.S[a], t, r, d, f)
            })((e, f, n, o, c, b) => {
              if (!((e, a) => e && i.o(e, a))(f, n)) return d(e, n, b);
              var s, l, u = r(f, n, o);
              return t(c, u) || (l = ((e, t, r, d) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(d) + ")")(f, n, u, c), "undefined" != typeof console && console.warn && console.warn(l)), (s = f[n][u]).loaded = 1, s.get()
            }),
            n = {},
            o = {
              71127: () => f("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              10181: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              56990: () => f("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(9587), i.e(8240)]).then(() => () => i(12841))),
              1556: () => f("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              8513: () => f("default", "usehooks-ts", !1, [1, 2, 7, 2], () => i.e(2562).then(() => () => i(92562))),
              48586: () => f("default", "framer-motion", !1, [1, 12, 34, 5], () => i.e(5288).then(() => () => i(45288))),
              58136: () => f("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(4057), i.e(2853)]).then(() => () => i(42853))),
              18429: () => f("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098)))
            },
            c = {
              1021: [10181, 56990],
              1127: [71127],
              1961: [1556, 8513, 48586, 58136],
              8429: [18429]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach(e => {
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
                  var d = o[e]();
                  d.then ? a.push(n[e] = d.then(t).catch(r)) : t(d)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1961: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = i.miniCssF(e),
                  d = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (n = t[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (d === e || d === a)) return n
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var n;
                      if ((d = (n = f[r]).getAttribute("data-href")) === e || d === a) return n
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var n = t && t.type,
                        o = t && t.target && t.target.href || a,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + o + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = n, c.request = o, f.parentNode && f.parentNode.removeChild(f), d(c)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
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
              else if (/^(1127|8429)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var f = i.p + i.u(a),
                n = new Error;
              i.l(f, t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", n.name = "ChunkLoadError", n.type = d, n.request = f, r[1](n)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, n, o] = t,
                c = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in n) i.o(n, r) && (i.m[r] = n[r]);
                o && o(i)
              }
              for (a && a(t); c < f.length; c++) d = f[c], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i(93032), i(85819)
      })())
    }
  }
});