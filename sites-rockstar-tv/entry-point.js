! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "38d5f9e0-0810-41e0-897e-6b922856da9c", e._sentryDebugIdIdentifier = "sentry-dbid-38d5f9e0-0810-41e0-897e-6b922856da9c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, d, c, f, n, o = {
            9293: (e, a, t) => {
              (0, t(1789).w)(1)
            },
            1789: (e, a, t) => {
              const r = t(569).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            3358: (e, a, t) => {
              t(9293)
            },
            569: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, c = r.length; d !== a && c >= 0;) "/" === r[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + f
              };
              Number.isInteger
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(2598), t.e(2229), t.e(9623), t.e(3539)]).then((() => () => t(6992)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => c
              })
            },
            5136: e => {
              "use strict";
              e.exports = t
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
          return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
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
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(d, c), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          131: "fac6cd7181a7680bdc8f24f6795acc84",
          278: "5310a5d09585181a399f71c2aba35af8",
          299: "a8d643748f3b3b1fa11592b8f539391f",
          314: "b420dd1f8def3c6e11a71901201fb418",
          662: "2de4e1946bbba77b80b4cb5ba549c4be",
          824: "af867088bd7a3ffefd5f840865806997",
          907: "fd4ab651625c8b8da236a88c1cafee07",
          1054: "11871495cd13265322788c1a760412d4",
          1242: "40f3850890e9666f7da05837f5563596",
          1604: "80b50231be13ece085d1b4f20a7d5a6c",
          1822: "987d4abbe1bcff19c2a57ad04514c183",
          1830: "99073e4f752f8312ea8c54ca9b84b6d6",
          1868: "0a6b530b7937355bc8823c63813353ee",
          2156: "e0aaa15f98dfda50cc23f81bb6330adb",
          2171: "863453e0b3c38f3ff613547d787e04d0",
          2221: "91dcd87b1741775fa1dbe9b8242db926",
          2229: "ba433af05851c9476cd0989e1b4e45d7",
          2243: "41caf1dde0d9a9af8060877114c3b441",
          2347: "5d702ff5d971cf1d400e222d8c4ea00b",
          2365: "b7eb227b2872758304ef65b8be129518",
          2398: "f101f35af29abf84512aefb2a71640ce",
          2466: "5ff7837de45ae03acd7c74eaffa7b8d8",
          2598: "ec2f051ff4fb61f1cb6deea130fe0389",
          2642: "7c8d54a1efcc22e2989ba6262bb4cc0e",
          2678: "df8bec9f4ab4f3662ad332b051c440b1",
          2782: "851215dbb562fda12bb0f097e179508e",
          2864: "1831ecbce4a1dfe478d440eefa7c207e",
          3034: "3d7008e366ccbcc763ad2437757ff0cb",
          3197: "74aee296835b026ff48f8caa15c09998",
          3217: "10a27756cd98c148c044b8461c6b7195",
          3343: "77feb7377a92e32a2d70d85a329e39fb",
          3370: "e9597edc61bc31d93383b599da741d88",
          3475: "741e97b2b12cb1fe3f5a947e610a7f22",
          3486: "cbef13f44c755a815c413862ea21184d",
          3539: "20ba1581f3b265bdd44bbc468808d455",
          3697: "853314f853deda10a4efc39a2d0e4ef1",
          3885: "a40340a5d0679c06f50627a93339b966",
          3941: "d52ce8c262404819edea5fb459681e68",
          4011: "4e21f1d7650b1dc89280241f892e1e4e",
          4528: "f3ba5ea38a6003de89019b6a14b7e8f6",
          4621: "3088e029ddad81e4bdc1f65955789c50",
          4700: "6ed5482ae8ab04a4de16b0443d1b01ce",
          4710: "d52e7164a5727274fa94ff3eb20939da",
          4731: "9978a8f3af456d6e7f88d655364ecfba",
          4799: "3df1988fbf3e8b358d87a5b4a33aca75",
          4851: "89e230e0baadf32673cef138fbff8350",
          4861: "fc13794301be895dab0882db14fbdc34",
          4913: "f91dce78b93e241b89df48df40695aaf",
          5018: "395ea3be515c10c34b8b6cee5f3f343d",
          5233: "e5cc2747ed59a02c9ae2970f320166db",
          5259: "d57c2aac2372b11572dbda5fb2c4a688",
          5530: "9fa66e18649f7e33d31e4a8980583bfc",
          5639: "630fd3457a27833a30c5de1165b532ba",
          5663: "41ef352c8ef3f9a4933a5e13a5a4fb7f",
          5742: "95c03f6ed45feeb691cd9a417bf12fdd",
          5830: "4aa40409133f1b62832bfb90223adea2",
          5832: "24043922a0cd10b59114e0822443cc01",
          6267: "3adbf038c7f799e8647dad59ccc15e41",
          6280: "5dc52b9839a0c8c83f5037c881e5b0aa",
          6285: "9d908dc21a420df2f980a25677b5def8",
          6361: "a908cfb3124c5bbb0c1ad8feb47de3f2",
          6664: "b5d9bb850d666c33e35abe81ec414caa",
          6832: "2293f292b2228dbaede4bb505b0530ff",
          6879: "378e29d44defd8bc655bb24b58e2772c",
          6891: "38bc7696f3ee9e0935e3df16ce8664ef",
          6997: "829c2b44b5793d1fa6758e7cb7725df0",
          7010: "bf04779cbef836231827d1449b5318b7",
          7073: "ea74213be5d6b6f6dc727c93a8d23ce7",
          7436: "3cd33d4b4a7c337aa0b67182dce72491",
          7452: "9d58e323a5e2dcb0b0da2bdfa6df6a3a",
          7453: "5f5beee01df39a7bea2a145cf874b14d",
          7970: "634979435b0cdbd6a5d6205446e938ce",
          8272: "192d67645d10db9f433d05b711c8e84f",
          8391: "d720fe292d82ad8f82bea430210ff466",
          8755: "970d7823b1989d0181185361f778e214",
          8880: "3050ba64508a70cd53c9f3d64f594d0f",
          8970: "cf96cf93a61eaa71b368b3a7753ee763",
          9022: "c4a4a73f53db2a1db569f54a2edb3a63",
          9028: "5c276381ca768788380bd73f04953083",
          9126: "906ebaed5031364aaa3faee53da47bb5",
          9377: "6b98453b617bd923285b44103880cb6b",
          9449: "7337ca5fce8a2954213d2327396cfb2f",
          9550: "368e861b8bda80bfdadb5f4945de4665",
          9615: "7c3ed6918366288bcdb42c68459cb704",
          9623: "8e1462974114adaaae9f763ccc3452cf",
          9936: "43a6661288eaa74e58990e80316ef9ad",
          9990: "611e709caf28f85b0064fcb3dc168b47"
        } [e] + ".js", i.miniCssF = e => "css/7269734ea624ef7181b23ac67b218af9.css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/sites-rockstar-tv:", i.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + t) {
                  f = s;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", c + t), f.src = e), d[e] = [a];
            var l = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          3539: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, i.f.remotes = (e, a) => {
          i.o(f, e) && f[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, t, c, f, n, o) => {
                  try {
                    var b = e(t, c);
                    if (!b || !b.then) return n(b, f, o);
                    var i = b.then((e => n(e, f)), d);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, a, d) => c(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, r[2], 0, 0, ((e, a, t) => e ? c(i.I, r[0], 0, e, f, t) : d()), 1)
            }
          }))
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
              var c = i.S[t],
                f = "@rockstargames/sites-rockstar-tv",
                n = (e, a, t, r) => {
                  var d = c[e] = c[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : f > n.from)) && (d[a] = {
                    get: t,
                    from: f,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(2782), i.e(2229), i.e(9623), i.e(9449)]).then((() => () => i(9449))))), n("react-router-dom", "6.17.0", (() => Promise.all([i.e(1604), i.e(2229)]).then((() => () => i(1604))))), n("react", "18.2.0", (() => i.e(3217).then((() => () => i(3217))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var d = i(5136);
                  if (!d) return;
                  var c = e => e && e.init && e.init(i.S[t], r);
                  if (d.then) return o.push(d.then(c, a));
                  var f = c(d);
                  if (f && f.then) return o.push(f.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = (t, r) => {
              if (0 in t) {
                r = e(r);
                var d = t[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, i, s = n < t.length ? (typeof t[n])[0] : "";
                  if (f >= r.length || "o" == (i = (typeof(b = r[f]))[0])) return !o || ("u" == s ? n > d && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != t[n]) return !1
                      } else {
                        if (c ? b > t[n] : b < t[n]) return !1;
                        b != t[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < t.length; f++) {
                var p = t[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, r) : !u())
              }
              return !!u()
            },
            t = (t, r, d) => {
              var c = t[r];
              return (r = Object.keys(c).reduce(((t, r) => !a(d, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    c = (typeof d)[0];
                  if (r >= t.length) return "u" == c;
                  var f = t[r],
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && d != f) return d < f;
                  r++
                }
              })(t, r) ? t : r), 0)) && c[r]
            },
            r = (e => function(a, t, r, d) {
              var c = i.I(a);
              return c && c.then ? c.then(e.bind(e, a, i.S[a], t, r, d)) : e(a, i.S[a], t, r, d)
            })(((e, a, r, d, c) => {
              var f = a && i.o(a, r) && t(a, r, d);
              return f ? (e => (e.loaded = 1, e.get()))(f) : c()
            })),
            d = {},
            c = {
              2229: () => r("default", "react", [1, 18, 2, 0], (() => i.e(3217).then((() => () => i(3217))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(1604).then((() => () => i(1604))))),
              5966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(2782), i.e(1830)]).then((() => () => i(9449)))))
            },
            f = {
              2229: [2229],
              3539: [5966],
              9623: [9623]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(f, e) && f[e].forEach((e => {
              if (i.o(d, e)) return a.push(d[e]);
              if (!n[e]) {
                var t = a => {
                  d[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
                var r = a => {
                  delete d[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = c[e]();
                  f.then ? a.push(d[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              5483: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                3539: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = i.miniCssF(e),
                  d = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (f = t[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((d = (f = c[r]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var f = t && ("load" === t.type ? "missing" : t.type),
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), d(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            5483: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(2229|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, r[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, c = t[0],
                f = t[1],
                n = t[2],
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in f) i.o(f, r) && (i.m[r] = f[r]);
                n && n(i)
              }
              for (a && a(t); o < c.length; o++) d = c[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i(3358), i(5819)
      })())
    }
  }
}));