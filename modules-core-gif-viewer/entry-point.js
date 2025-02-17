! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7cf45131-29f2-41cd-adf0-82a0d37a44fc", e._sentryDebugIdIdentifier = "sentry-dbid-7cf45131-29f2-41cd-adf0-82a0d37a44fc")
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
                  "./tina": () => Promise.all([r.e(533), r.e(2229), r.e(5966), r.e(8831)]).then((() => () => r(7176))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(533), r.e(2229), r.e(5966), r.e(8831)]).then((() => () => r(7176)))
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
          131: "5ff93cf1a292945a8a8b6c12ea856981",
          278: "84c381488c267027be949cb976ed75aa",
          299: "ccab9961e728f4c48dffe26c38fb7f0b",
          314: "a20d0d4ac473aae7111dccee4af48db9",
          533: "bb4ad95a42cf39e62b39e28eec44c379",
          662: "18816183da2de8e403fd1e9f87d537e9",
          824: "7ffaaa90eefdb50d2d93733ed7351684",
          907: "cd21c78564fe855f5dc19c41a96afeae",
          1029: "2d14f257f8a90fbe00423e6c98772617",
          1054: "96b8774833c5aec48921c84cfe952641",
          1242: "8ea2d9a0c56cf83d686903ab40b3c014",
          1604: "6c172792b3761b8a2e92fcb2260a30ea",
          1822: "3df98d2d23184f5a3c060fcdab6afa15",
          1868: "1ad9aa194c971a4e6ef20bd56da9e01c",
          2156: "090aab721bc1d67a373a0726caf60bd7",
          2171: "9cbc93ba72e01c5fecd534f5d5ee6993",
          2221: "c5350e0346b23b394ae1340154f0d150",
          2229: "cff3f5dc411c8d6c15a451abde3cfbf7",
          2243: "7deb1567153c112dacaff9d5fdaaf85e",
          2347: "5d15732331b3849081b8d8bed94f2cd0",
          2365: "361e21f7514f30eb5dc85c86afb96879",
          2398: "c5da4db7bfc03a55b248c3919a964249",
          2466: "d59d0aea7c0cc9de4f9c7a6ff2e5b944",
          2642: "53404d50f72987e7115a8fc66d3d7d4f",
          2678: "0cb9471e07c5e5c3b7720d89f525f198",
          2782: "37e7a3ab4a76debc31c2927c64223dbf",
          2864: "087758ad55b83ba2ef1d4f4817e56677",
          3034: "a06cda11631a0db5727a256a2f7fedc5",
          3197: "3ff4fc4857553299c155b20fc2981252",
          3217: "3b256320df414ff8a924c3a13c2fc8fe",
          3343: "1d2f04731a1c1d621838f3ce27d152f7",
          3370: "e5a7f585d49cc069f06f90f6a989b05a",
          3475: "0bcde000523ccb805c0c324daa76b7bc",
          3486: "275db9fdb019528ae4a5ee1dfd0c22d6",
          3697: "80a8f6f8cc5513b0acc55d24fc90d89b",
          3885: "59c4cab917fe95a9c133372cea239caa",
          3941: "baefaaaae9de9843f5a354bcd5213ac2",
          4011: "4e47c14c2ed8831fadb0608a57333629",
          4197: "3690292cfd267dedfb352169043bda30",
          4528: "0d6859be75e4c69923815fba89257bc1",
          4621: "9999f44cbafafd9be9c80722cfcb35eb",
          4700: "84aa9ca0641c991e1f21418244c37ead",
          4710: "41c77af2f06735d266795618bb322393",
          4731: "3db3aa917ca3661d2ab3042993d9028b",
          4799: "21cd0d31e38d72d37732ee1d31f5178e",
          4851: "3d11275f2e8f058406e7f06b67db425b",
          4861: "a5cbb1fd4752746b4ead3d8ecc9fcc4a",
          4913: "37aed276d061718c795dcae4a39f8850",
          5018: "2d9d4bb4b3247a7e39cda15b1fbdb36f",
          5233: "9c029a062180d86be476401ea21190cd",
          5259: "eacd5bd9b9b888e9a974bed5c0b56537",
          5299: "9109bbe849490a9c5beb222885aeb42c",
          5530: "7d1d49b588e7ff5bd4951c7d778de832",
          5639: "bec03d48cc89bc9478ae6691ef3d50ab",
          5663: "07f9064d5638a85ee01803d9381cef53",
          5742: "bb0044ffdb82d5abee59d999c4daf456",
          5830: "bd3c4eedb093df8215e28a2a09871075",
          5832: "363699dec611898eabf0820404b56aff",
          5966: "2b81f21dff1e142b253ec9f05a3f3aa4",
          6267: "86fb43a553b2650e390daae6c8b10af0",
          6280: "79503f363d74e7b81da7368e510fb21c",
          6285: "7b8de372433f1ead335ab071a1ef6f46",
          6361: "66bdd42b0feb3cc7e7e75b1e1af177aa",
          6664: "513bc7ad9e2980efc8d89b422ef012aa",
          6832: "e9170cfecc27fcfad39bcbc375415292",
          6879: "13c5bbe7f435f96636f799349e513395",
          6891: "92094f0e7b96834dae3c831a4c726d18",
          6997: "1d1ec4fbdcf4e7f1ff867206164caf48",
          7010: "90584412f7603d1ba173a93f62d554f7",
          7073: "f4112829c63ebeaa28ed7e79cdc0f826",
          7436: "fb939de6a8ec2ab7f5a1dcf7b7b685dc",
          7452: "4b08974c99627ac608eb06214426b9fe",
          7453: "967d9f56b531449c6a95b7e78323f60c",
          7513: "1aaa500ef043b8c2561436c01efba774",
          7970: "2200feef237225c4074498cab96176b2",
          8272: "f249b71d3a71f3a59641e7e599bd2699",
          8312: "c25e60b9276b0da4ba936ac04df01c1e",
          8391: "68c08f1ae74e4294244c60e881989892",
          8755: "d819153f5cec33d861ad6ab347ac5964",
          8831: "f08262a022848588a6ad0e74dff34d9e",
          8880: "6f0ace5d7d46e78a363c4e4910fd3ec3",
          8970: "351dec1bf6e9f85ecdd17482fd310973",
          9022: "16b7a10caf7b771a0f05e85419cfcbc4",
          9028: "f8855041560271dd3a6a94a771e2555e",
          9126: "1c47ec01857f3312e7aa0d83ae1ee64d",
          9377: "138ffceaaf7d06a9b5184427d4f0c377",
          9615: "018cf5bd39dd05dfce8ca4db83b18a49",
          9623: "9049ba2e4f1a21e8bfc67b796637041c",
          9936: "d65336bb0b7d6f535d1c0ea9f4e61999",
          9990: "c65d7a91accb6d333b1ac4c456998b7f"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          4197: "0ef079019c8839661a10e47732755615",
          8312: "736d891058363b24027e39e460789d5f",
          8831: "b5328e2f95f5b178239a08711e5d52f6"
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
              return "default" === r && (n("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(2782), b.e(2229), b.e(9623), b.e(7513), b.e(1029)]).then((() => () => b(7513))))), n("react-router-dom", "6.17.0", (() => Promise.all([b.e(1604), b.e(2229)]).then((() => () => b(1604))))), n("react", "18.2.0", (() => b.e(3217).then((() => () => b(3217)))))), e[r] = o.length ? Promise.all(o).then((() => e[r] = 1)) : 1
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
              5966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([b.e(2782), b.e(9623), b.e(7513)]).then((() => () => b(7513))))),
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
                8831: 1
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