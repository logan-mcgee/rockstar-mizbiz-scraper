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
          131: "46569005e1c47e93ae2319d4ac55c460",
          278: "c75e172c2f74e13ca792e362a469e9e0",
          299: "754bff00b93866c8296eb28bc1b0fe14",
          314: "eee25639f688233f0141a7d403cb9231",
          533: "3d97c14323a4f0825b3c2897d7eeda7a",
          662: "fb649297cf1441484fcc0037734b9686",
          824: "ac9ba41762206bc85f9f0bacbd4ddb15",
          907: "73d8926f420c6d0cb7cdc17285752c30",
          1029: "3c47de2df2fe1d035b9a61289a830988",
          1054: "c52f4a24189fb48d4741558eefc2568a",
          1242: "e6d13017561cb5a8dd1df47e3092f3cc",
          1604: "ecfe2186c75110851f7a0936ea57e4a7",
          1822: "b6061653367a279ebe8342258c55887c",
          1868: "7f8b05fea3e239812f7e185d83f776b5",
          2156: "0b6d7fe10f93e32c3a4eead219206fd1",
          2171: "6c004484bd63ba51ab2e8f315e7d102b",
          2221: "a375fe9a99c07c84f1217e5143a303d5",
          2229: "cff3f5dc411c8d6c15a451abde3cfbf7",
          2243: "51abed88b2aece078ef25787f041c220",
          2347: "d46e81e84e246b7aeccbfd3f4a5de91c",
          2365: "6a3f34f719890e0434d1f3cd34eecd7b",
          2398: "6f1fc84c688e7706cbb486312a2ed319",
          2466: "064ffeacbef011884fcbccc42c05d3e6",
          2642: "919118d23ad055bbb0209fb9beb57c42",
          2678: "9b0e33a76d8a319975ef464bf9329b1f",
          2782: "388466027392c559cfa4bdf8d11448a4",
          2864: "224a5156c49b4b36973a5fe4798d4439",
          3034: "335f477a230b08c8a7191837c95eb50c",
          3125: "5c5fae6787ca4afb020db3bdbca3c26c",
          3197: "726106425ff65c6d70e16dec1c7d6f09",
          3217: "d4527011709e37621274685dc1cb44cd",
          3343: "fb65f3ebc02bdf3599e0066aa0172c6f",
          3370: "f72af0009b3df97725e293b7eb9ed486",
          3475: "b95ea48387dce5a1be186453b8fcb21a",
          3486: "da852c33dc195c588a0953abfe773733",
          3697: "348cb907900692486ca9daed5eeaca81",
          3885: "bc5e62dfbd0ca447f2a4b3d5b867cd8a",
          3941: "e676ed36cd278966bc0cae388a5d456b",
          4011: "cb3a99fb37a53312d58796a0211368e2",
          4197: "e4f6e8632193b138c8ccfee121b71f1c",
          4528: "779f0969993b08a9238290f8287de8a4",
          4621: "761db6e755dbced168f642cedae6cfdd",
          4700: "9fc3b3f649606eb52ad4b82913181c89",
          4710: "00fa86dd569f625b35ed7092d4ed3989",
          4731: "1dc114c1899bdebe1b6964b8eb8dad0b",
          4799: "2567ea884b99a06433e85981c3dd686b",
          4851: "79ab9b9373bf566128b291bb6daf6d4d",
          4861: "e376a6f397eb22406d8b7e9c10d1a978",
          4913: "37dc68208aa269e1fa614917a2480ae4",
          5018: "659a527117c293f9b811155977baab9f",
          5233: "344f8d20a66d0063f326bc5bf8ecab6b",
          5259: "ff5d4b2bae840a3c547d5b758d001835",
          5299: "73e7097ce29f9dd31dcf7d20e4a8bdd2",
          5530: "f98d1c715a577bb54627189804787017",
          5639: "b2defeed532b2d1d6107e1a52094e95c",
          5663: "47fb60a4aa63146519018819d9a64c53",
          5742: "1de41df06ff02d765220275763c8ef2b",
          5830: "54dafe3d7def8dd859d5d3f1116ab4bf",
          5832: "e60481b9c63164190a083ab052e59776",
          5966: "2b81f21dff1e142b253ec9f05a3f3aa4",
          6267: "752e7a361965b39bd3a5a2b7282d9e44",
          6280: "b9d3c6df5105f56bc527cdf72141e69e",
          6285: "16e798b1d875070ac383e382e4e390c9",
          6361: "006ed91eec5ecf20dc3b92902c22da3b",
          6664: "6a69b954d8f953c85801594f4018b2f3",
          6832: "311a687efcd6e36394ebd924129c8dc3",
          6879: "db0ef87e5261f72f01a1d080319c7fde",
          6891: "008974a94a54744c7c106ee3853f0c0f",
          6997: "e731b91ede6e48f2d58902218efa32ef",
          7010: "7562ce775a34059c96f156bb298a3096",
          7073: "2cc914961b9682f941306eadfc18fd83",
          7436: "9a8e1491b3af7f4c66a2acc2f9d55867",
          7452: "e923b9fee1413c30b8d026df2feba596",
          7453: "f538ddbc993d0c4391935c8b3a51ec12",
          7970: "66e8fe764a884e9905054e71d15bfadb",
          8272: "6d9c697dc800f5ad8360d4a14634fba5",
          8312: "f4115735aeec494f5ddf070a970ea874",
          8391: "4aaa5f5fc8442a12938581bba719c1d2",
          8755: "1369badf1ec2d44a5aa2520c482990cc",
          8880: "8cbeca7561accf0d21949d095b92b09d",
          8970: "380658de1bef04e3707d614de6f423ac",
          9022: "3dd768a3a6c1822264440822dec211e5",
          9028: "b0f2c450c1e8b9c5b6a737f24f33ee19",
          9126: "675e3710c47bc469b74e0d5763a771d4",
          9377: "c41d0b488c9d9365a3bc875f6d503399",
          9615: "aa9ef1e1bcbe096a09caca60e462cf2e",
          9623: "9049ba2e4f1a21e8bfc67b796637041c",
          9803: "1921661dcc8ea13d1c1f7570f2d6f619",
          9936: "f3cdf698b3acfef3ce31356fd3721c51",
          9990: "e1e8e24ac47d8b882d6ac3d22346ea7e"
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