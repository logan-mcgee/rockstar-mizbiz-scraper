! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "973c70c7-defb-4397-8f75-1670edcd52a2", e._sentryDebugIdIdentifier = "sentry-dbid-973c70c7-defb-4397-8f75-1670edcd52a2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, f, d, c, n = {
            9293: (e, a, r) => {
              (0, r(1789).w)(1)
            },
            1789: (e, a, r) => {
              const t = r(569).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            3358: (e, a, r) => {
              r(9293)
            },
            569: (e, a, r) => {
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
            4848: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(2229), r.e(5966), r.e(8312)]).then((() => () => r(8312))),
                  "./lazy": () => Promise.all([r.e(2229), r.e(9623), r.e(5966), r.e(4197)]).then((() => () => r(4197))),
                  "./tina": () => Promise.all([r.e(533), r.e(2229), r.e(5966), r.e(9803)]).then((() => () => r(7904))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(533), r.e(2229), r.e(5966), r.e(9803)]).then((() => () => r(7904)))
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
            }
          },
          o = {};

        function b(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var r = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return n[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = n, b.c = o, b.y = a, b.amdO = {}, b.n = e => {
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
          var f = Object.create(null);
          b.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, b.d(f, d), f
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          131: "c5fdb8eb672e74530917435a093beac9",
          278: "7445acfd4b568bcba7b7656cbbb537d3",
          299: "7a02b90dbee6958ce2122205572131ea",
          314: "effdb7108f3faefba50d29eacf4ffa12",
          533: "9960d8bfc1adba4946e94c5f3de39b84",
          662: "b262cfd1478245243e7dd3c8d1164071",
          824: "d750abf7fb3ae51745005402e6c818b2",
          907: "f58e13ad59f542e4f03ba3463503c62c",
          1029: "ad0b2259111568e2a8f7a596db62e81f",
          1054: "4ba84f36e36f06e13e233ce21d3be4ae",
          1242: "ac9b538a13d3c103ea29c000491f7483",
          1604: "86cdb6e8e8776939547928bfe4489f06",
          1822: "27f0ea7618422397dbd526bebc5caac6",
          1868: "af56cc071ea0e927af6f6ce22e10cfe7",
          2156: "a18e45d0a6711ad99c3a939cd217fc04",
          2171: "52aa79cad03f3775cd62e141aea178e4",
          2221: "6b08957696a98675fda9110a1420a98b",
          2229: "cff3f5dc411c8d6c15a451abde3cfbf7",
          2243: "c522bdc4ee2b4fba7508943a35e2cb78",
          2347: "fd77f617465250a930685b1a9e62e5c6",
          2365: "323cd183a05d21776cb20fb064a15d67",
          2398: "37c3d1caf5550ece1f1bf0f61b116755",
          2466: "44934a73fa1c4ce744c80c44684bfaf6",
          2642: "f359eb9e14d6d6cdfcca03c4db6bd956",
          2678: "97a0965b581512e478f3c94ca3092bb9",
          2782: "c69fdbb8a3f5c42b28fad9b40b4ff431",
          2864: "1b1dae632644edd8862444dd2e50cc5c",
          3034: "4b01e5e76931448a990ac1bc3a8675ae",
          3125: "5f969efb3b489b272e7fae683cef8341",
          3197: "d628738ce1da2fa88a8c3ec6c687e0e1",
          3217: "35745b5d88750a238369625a1d14e681",
          3343: "d3709fe16071faebc589aa17c9ce0181",
          3370: "3762c79cfa9be2552919f538457f2918",
          3475: "04bb4e5ce883d5e5fbf955eea6e63433",
          3486: "08a827a8eafa2e0e948c912500638615",
          3697: "64d44738a2d5cf1cb0c5eb6f53e8b187",
          3885: "ff831aecb69c9924535bb99b89ca8bc4",
          3941: "a9c417a3e6ca87c921bbac031212dd69",
          4011: "f6ce500a058b28954c9f5843b4df4268",
          4197: "ebbf3b3f663fe354b4b3aca826ff184b",
          4528: "74ba7d4742f75a6825f309f465d34208",
          4621: "04d087c9159610e40ec2c3e2de49e5be",
          4700: "70576de49ed6cced0850471155502606",
          4710: "3f96620bda339762ca0a25d0c215570d",
          4731: "4a7c36bba3ff1121ea281e9f5835fd70",
          4799: "79150dd462a6216040026b8ba47821cd",
          4851: "be2e758f2801ac68491fb23e73f7e674",
          4861: "0573897c7a80e816e1aac62b283b64fd",
          4913: "0a61cd3166aebc4e8d0f7db7615f1cfe",
          5018: "9b5fb70407bbb2bf60e74a576a0ab66e",
          5233: "544591d4396dd319474fcd87d3bdb1bc",
          5259: "bf7161893d6231e41c19b751c0381046",
          5299: "d19561ed4075728378269285eca2ef83",
          5530: "099225a03a55e724896d4c20b03a4c78",
          5639: "f8ad813e774ee696ebfe01f6e952387c",
          5663: "6e61d22c19a35903ff4286bca03c7deb",
          5742: "f3b3cfb403fbcb43b33c57a56be0e02a",
          5830: "b8e7ab99899f9953bc25d97ab7fb66db",
          5832: "570083578bb8cb843bdcbd0f67361def",
          5966: "2b81f21dff1e142b253ec9f05a3f3aa4",
          6267: "e72fb91d5818aa247756a304bee3fa99",
          6280: "4e0b8b7e9c8f934fdc9d4b81d6787c68",
          6285: "729fa13968eb3bc0555232a8f63073c8",
          6361: "0855b87b7841673bc76728e0f3ed46c0",
          6664: "7c98799c947d5f23f381dd67a3790603",
          6832: "a5cfc37667aad50bbf6faae298a2af7c",
          6879: "2873694b293298165b5e613cfff5800f",
          6891: "40c9df7207c50abf5d5428c713eb7c28",
          6997: "2f737d67a8956aefb57f94fda7bfce4a",
          7010: "5cef7def149500b8521142f93e35ca96",
          7073: "9938c6b0c50978319937c520475cb5f4",
          7436: "e3083c1263dfcc978df0f4bd88109f3b",
          7452: "cbe0b8a8301ac4f689bd76c44e61a3a3",
          7453: "5f57abe32f0ab30d5dc3be4f9e2d0484",
          7970: "bc3b9ab7dab8f7cfda21c0d47a9e5504",
          8272: "c8954b378b71f045f7fac7630768635a",
          8312: "c7fd3f79ee3e3587bbc7e2a0ad2dbd98",
          8391: "9d1303823b7ab9dc9929de614afc544e",
          8755: "906300e003dcc15e600c8bad78c74244",
          8880: "2810c2e839fe17883cffc95c830a1e8d",
          8970: "cc77b1b4b185f678b42c179042db180a",
          9022: "bc76d6850d8fbe169d6ccf211535871a",
          9028: "b17950797f7b213ffb69cc034593677c",
          9126: "33993eb95c457f4b38b011305ae914bd",
          9377: "663cab4acfaa1e91f414a6655f87689c",
          9615: "402613e72f6a097e6a883d04b43aa476",
          9623: "9049ba2e4f1a21e8bfc67b796637041c",
          9803: "c8cec55b749bad128650c0f85cbe6bfc",
          9936: "f92a6577a2f7c1dc0d55825fd884a189",
          9990: "7254849d7601a5615d1ef76b6aa56e54"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          4197: "0ef079019c8839661a10e47732755615",
          8312: "736d891058363b24027e39e460789d5f",
          9803: "b5328e2f95f5b178239a08711e5d52f6"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-gif-viewer:", b.l = (e, a, r, d) => {
          if (t[e]) t[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var s = o[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, b.nc && c.setAttribute("nonce", b.nc), c.setAttribute("data-webpack", f + r), c.src = e), t[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var f = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {}, c = {}, b.f.remotes = (e, a) => {
          b.o(d, e) && d[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var t = c[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), b.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, r, d, c, n, o) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), f);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                n = (e, a, f) => d(a.get, t[1], r, 0, o, f),
                o = a => {
                  t.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(b, t[2], 0, 0, ((e, a, r) => e ? d(b.I, t[0], 0, e, n, r) : f()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var d = b.S[r],
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
              return "default" === r && (n("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(2782), b.e(2229), b.e(9623), b.e(3125), b.e(1029)]).then((() => () => b(3125))))), n("react-router-dom", "6.17.0", (() => Promise.all([b.e(1604), b.e(2229)]).then((() => () => b(1604))))), n("react", "18.2.0", (() => b.e(3217).then((() => () => b(3217)))))), e[r] = o.length ? Promise.all(o).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = (r, t) => {
              if (0 in r) {
                t = e(t);
                var f = r[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < r.length ? (typeof r[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != r[n]) return !1
                      } else {
                        if (d ? b > r[n] : b < r[n]) return !1;
                        b != r[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, t) : !u())
              }
              return !!u()
            },
            r = (r, t, f) => {
              var d = r[t];
              return (t = Object.keys(d).reduce(((r, t) => !a(f, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    d = (typeof f)[0];
                  if (t >= r.length) return "u" == d;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  t++
                }
              })(r, t) ? r : t), 0)) && d[t]
            },
            t = (e => function(a, r, t, f) {
              var d = b.I(a);
              return d && d.then ? d.then(e.bind(e, a, b.S[a], r, t, f)) : e(a, b.S[a], r, t, f)
            })(((e, a, t, f, d) => {
              var c = a && b.o(a, t) && r(a, t, f);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            f = {},
            d = {
              2229: () => t("default", "react", [1, 18, 2, 0], (() => b.e(3217).then((() => () => b(3217))))),
              5966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([b.e(2782), b.e(9623), b.e(3125)]).then((() => () => b(3125))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => b.e(1604).then((() => () => b(1604)))))
            },
            c = {
              2229: [2229],
              5966: [5966],
              9623: [9623]
            },
            n = {};
          b.f.consumes = (e, a) => {
            b.o(c, e) && c[e].forEach((e => {
              if (b.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var r = a => {
                  f[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                n[e] = !0;
                var t = a => {
                  delete f[e], b.m[e] = r => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var c = d[e]();
                  c.then ? a.push(f[e] = c.then(r).catch(t)) : r(c)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              9737: 0
            };
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                4197: 1,
                8312: 1,
                9803: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = b.miniCssF(e),
                  f = b.p + t;
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
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var c = r && ("load" === r.type ? "missing" : r.type),
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
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
          b.f.j = (a, r) => {
            var t = b.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((r, f) => t = e[a] = [r, f]));
              r.push(t[2] = f);
              var d = b.p + b.u(a),
                c = new Error;
              b.l(d, (r => {
                if (b.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, d = r[0],
                c = r[1],
                n = r[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (t in c) b.o(c, t) && (b.m[t] = c[t]);
                n && n(b)
              }
              for (a && a(r); o < d.length; o++) f = d[o], b.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b(3358), b(4848)
      })())
    }
  }
}));