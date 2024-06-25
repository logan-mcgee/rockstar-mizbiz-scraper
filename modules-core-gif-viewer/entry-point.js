! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "0896bdb0-9eb6-42ff-86c7-41a7485076dd", e._sentryDebugIdIdentifier = "sentry-dbid-0896bdb0-9eb6-42ff-86c7-41a7485076dd")
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
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    a = {},
    n = {},
    o = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(r) {
        t[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        a[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        n[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        o[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, s, f, d = {
            54364: (e, r, t) => {
              (0, t(47284).G)(1)
            },
            47284: (e, r, t) => {
              const a = t(87984).Q;
              r.G = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            93824: (e, r, t) => {
              t(54364)
            },
            87984: (e, r, t) => {
              r.Q = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var a = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, n = 0, o = a.length; n !== r && o >= 0;) "/" === a[--o] && n++;
                if (n !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            91812: (e, r, t) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([t.e(664), t.e(52), t.e(880)]).then((() => () => t(61880))),
                  "./lazy": () => Promise.all([t.e(664), t.e(52), t.e(876)]).then((() => () => t(33876))),
                  "./tina": () => Promise.all([t.e(664), t.e(52), t.e(860), t.e(68)]).then((() => () => t(65068))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(664), t.e(52), t.e(860), t.e(68)]).then((() => () => t(65068)))
                },
                n = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                o = (e, r) => {
                  if (t.S) {
                    var a = "default",
                      n = t.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[a] = e, t.I(a, r)
                  }
                };
              t.d(r, {
                get: () => n,
                init: () => o
              })
            },
            33864: e => {
              "use strict";
              e.exports = t
            },
            81128: e => {
              "use strict";
              e.exports = a
            },
            88428: e => {
              "use strict";
              e.exports = n
            },
            9344: e => {
              "use strict";
              e.exports = o
            }
          },
          l = {};

        function c(e) {
          var r = l[e];
          if (void 0 !== r) return r.exports;
          var t = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(t.exports, t, t.exports, c), t.loaded = !0, t.exports
        }
        return c.m = d, c.c = l, c.y = r, c.amdO = {}, c.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return c.d(r, {
            a: r
          }), r
        }, c.d = (e, r) => {
          for (var t in r) c.o(r, t) && !c.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((r, t) => (c.f[t](e, r), r)), [])), c.u = e => "js/" + {
          52: "195850e36dc859a1f5d6c5969c811ef9",
          68: "5567194dcfd59fe8a2b7157ee1bc1dfa",
          100: "54260bad6e7e095521c506ffd1da9b60",
          168: "31029253802edba3e76c8c55b15a7fd1",
          240: "ace07faf4f0a8cb7b77e443bd56839b0",
          664: "66a21241c86332d766dd5a12e0f0d11c",
          668: "dd13b303ba23d3a03650dbf8bbadc03f",
          716: "1e029d4ece73b60dc5c2ac529337f9bd",
          818: "78c76bac249dec97c140410c57027ad0",
          860: "ef1922677416fef238b497746ebeb679",
          876: "e496f221d33a6e9e75e5a53525833705",
          880: "e1528082ddfdf8b2bf0ba7dd87dfe4b8",
          884: "183080ca6e418ac901feea4e2b84fd82"
        } [e] + ".js", c.miniCssF = e => "css/" + {
          716: "99df8002ac4dfabc31414fcbef9c06c7",
          876: "5754518f8676a553fd5fd46915d3a889",
          880: "fe210ed3f04fe64376cb80e4b64a13b3",
          884: "b2040bd4e885c0770126aaae6295982c"
        } [e] + ".css", c.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, i = "@rockstargames/modules-core-gif-viewer:", c.l = (r, t, a, n) => {
          if (e[r]) e[r].push(t);
          else {
            var o, s;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), d = 0; d < f.length; d++) {
                var l = f[d];
                if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == i + a) {
                  o = l;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, c.nc && o.setAttribute("nonce", c.nc), o.setAttribute("data-webpack", i + a), o.src = r), e[r] = [t];
            var u = (t, a) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[r];
                if (delete e[r], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), t) return t(a)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), s && document.head.appendChild(o)
          }
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          52: [33052],
          68: [32104, 89468],
          884: [1532, 1740, 3061, 28540, 42836, 45652, 45792, 73784, 95356]
        }, f = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          32104: ["default", "./ui", 88428],
          33052: ["default", "./index", 33864],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          89468: ["default", "./properties", 88428],
          95356: ["default", "./helpers", 88428]
        }, c.f.remotes = (e, r) => {
          c.o(s, e) && s[e].forEach((e => {
            var t = c.R;
            t || (t = []);
            var a = f[e];
            if (!(t.indexOf(a) >= 0)) {
              if (t.push(a), a.p) return r.push(a.p);
              var n = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), c.m[e] = () => {
                    throw r
                  }, a.p = 0
                },
                o = (e, t, o, i, s, f) => {
                  try {
                    var d = e(t, o);
                    if (!d || !d.then) return s(d, i, f);
                    var l = d.then((e => s(e, i)), n);
                    if (!f) return l;
                    r.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, r, n) => o(r.get, a[1], t, 0, s, n),
                s = r => {
                  a.p = 1, c.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(c, a[2], 0, 0, ((e, r, t) => e ? o(c.I, a[0], 0, e, i, t) : n()), 1)
            }
          }))
        }, (() => {
          c.S = {};
          var e = {},
            r = {};
          c.I = (t, a) => {
            a || (a = []);
            var n = r[t];
            if (n || (n = r[t] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[t]) return e[t];
              c.o(c.S, t) || (c.S[t] = {});
              var o = c.S[t],
                i = "@rockstargames/modules-core-gif-viewer",
                s = (e, r, t, a) => {
                  var n = o[e] = o[e] || {},
                    s = n[r];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (n[r] = {
                    get: t,
                    from: i,
                    eager: !!a
                  })
                },
                f = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var n = c(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(c.S[t], a);
                    if (n.then) return d.push(n.then(o, r));
                    var i = o(n);
                    if (i && i.then) return d.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                d = [];
              return "default" === t && (s("@rockstargames/components", "1.14.0", (() => Promise.all([c.e(716), c.e(664), c.e(52), c.e(884), c.e(860), c.e(240)]).then((() => () => c(33544))))), s("react-router-dom", "6.17.0", (() => Promise.all([c.e(168), c.e(668), c.e(664)]).then((() => () => c(69668))))), s("react-router-dom", "6.17.0", (() => Promise.all([c.e(168), c.e(818), c.e(664)]).then((() => () => c(64818))))), s("react", "18.2.0", (() => c.e(100).then((() => () => c(99480))))), f(33864), f(88428), f(81128), f(9344)), d.length ? e[t] = Promise.all(d).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          c.g.importScripts && (e = c.g.location + "");
          var r = c.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && !e;) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), c.p = e
        })(), (() => {
          var e = e => {
              var r = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = t[1] ? r(t[1]) : [];
              return t[2] && (a.length++, a.push.apply(a, r(t[2]))), t[3] && (a.push([]), a.push.apply(a, r(t[3]))), a
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var d, l, c = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= a.length || "o" == (l = (typeof(d = a[i]))[0])) return !f || ("u" == c ? s > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!f || "u" != c) return !1
                  } else if (f)
                    if (c == l)
                      if (s <= n) {
                        if (d != t[s]) return !1
                      } else {
                        if (o ? d > t[s] : d < t[s]) return !1;
                        d != t[s] && (f = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || s <= n) return !1;
                    f = !1, s--
                  } else {
                    if (s <= n || l < c != o) return !1;
                    f = !1
                  } else "s" != c && "n" != c && (f = !1, s--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
              }
              return !!p()
            },
            t = (t, a, n) => {
              var o = t[a];
              return (a = Object.keys(o).reduce(((t, a) => !r(n, a) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var a = 0;;) {
                  if (a >= r.length) return a < t.length && "u" != (typeof t[a])[0];
                  var n = r[a],
                    o = (typeof n)[0];
                  if (a >= t.length) return "u" == o;
                  var i = t[a],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(t, a) ? t : a), 0)) && o[a]
            },
            a = (e => function(r, t, a, n) {
              var o = c.I(r);
              return o && o.then ? o.then(e.bind(e, r, c.S[r], t, a, n)) : e(r, c.S[r], t, a, n)
            })(((e, r, a, n, o) => {
              var i = r && c.o(r, a) && t(r, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => c.e(100).then((() => () => c(99480))))),
              98584: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([c.e(168), c.e(818)]).then((() => () => c(64818))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([c.e(716), c.e(884)]).then((() => () => c(33544))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([c.e(168), c.e(668)]).then((() => () => c(69668)))))
            },
            i = {
              664: [51664],
              860: [9860],
              876: [98584],
              884: [57013]
            },
            s = {};
          c.f.consumes = (e, r) => {
            c.o(i, e) && i[e].forEach((e => {
              if (c.o(n, e)) return r.push(n[e]);
              if (!s[e]) {
                var t = r => {
                  n[e] = 0, c.m[e] = t => {
                    delete c.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var a = r => {
                  delete n[e], c.m[e] = t => {
                    throw delete c.c[e], r
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? r.push(n[e] = i.then(t).catch(a)) : t(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              344: 0
            };
            c.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                716: 1,
                876: 1,
                880: 1,
                884: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var a = c.miniCssF(e),
                  n = c.p + a;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                      var n = (i = t[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === r)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var i;
                      if ((n = (i = o[a]).getAttribute("data-href")) === e || n === r) return i
                    }
                  })(a, n)) return r();
                ((e, r, t, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = t => {
                    if (o.onerror = o.onload = null, "load" === t.type) a();
                    else {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.href || r,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, o.parentNode && o.parentNode.removeChild(o), n(f)
                    }
                  }, o.href = r, document.head.appendChild(o)
                })(e, n, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            344: 0
          };
          c.f.j = (r, t) => {
            var a = c.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^(52|664|860)$/.test(r)) e[r] = 0;
            else {
              var n = new Promise(((t, n) => a = e[r] = [t, n]));
              t.push(a[2] = n);
              var o = c.p + c.u(r),
                i = new Error;
              c.l(o, (t => {
                if (c.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var n = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }), "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var a, n, o = t[0],
                i = t[1],
                s = t[2],
                f = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (a in i) c.o(i, a) && (c.m[a] = i[a]);
                s && s(c)
              }
              for (r && r(t); f < o.length; f++) n = o[f], c.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), c.nc = void 0, c(93824), c(91812)
      })())
    }
  }
}));