! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5ea36f21-9e33-4a73-aa08-d35511ff37f6", e._sentryDebugIdIdentifier = "sentry-dbid-5ea36f21-9e33-4a73-aa08-d35511ff37f6")
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
        var e, i, s, f, l = {
            4364: (e, r, t) => {
              (0, t(7284).G)(1)
            },
            7284: (e, r, t) => {
              const a = t(7984).Q;
              r.G = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            3824: (e, r, t) => {
              t(4364)
            },
            7984: (e, r, t) => {
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
            1812: (e, r, t) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([t.e(664), t.e(52), t.e(880)]).then((() => () => t(1880))),
                  "./lazy": () => Promise.all([t.e(664), t.e(52), t.e(876)]).then((() => () => t(3876))),
                  "./tina": () => Promise.all([t.e(664), t.e(52), t.e(860), t.e(68)]).then((() => () => t(5068))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(664), t.e(52), t.e(860), t.e(68)]).then((() => () => t(5068)))
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
            3864: e => {
              "use strict";
              e.exports = t
            },
            1128: e => {
              "use strict";
              e.exports = a
            },
            8428: e => {
              "use strict";
              e.exports = n
            },
            9344: e => {
              "use strict";
              e.exports = o
            }
          },
          d = {};

        function u(e) {
          var r = d[e];
          if (void 0 !== r) return r.exports;
          var t = d[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(t.exports, t, t.exports, u), t.loaded = !0, t.exports
        }
        return u.m = l, u.c = d, u.y = r, u.amdO = {}, u.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return u.d(r, {
            a: r
          }), r
        }, u.d = (e, r) => {
          for (var t in r) u.o(r, t) && !u.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((r, t) => (u.f[t](e, r), r)), [])), u.u = e => "js/" + {
          52: "195850e36dc859a1f5d6c5969c811ef9",
          68: "b3f4fd560afa76df3bae439f3d0c03e2",
          100: "43d801faaeec81c679e7c779d479390c",
          168: "7e8aa899960b4da5dfbd74d0f2336bbb",
          240: "4cde41182a46e660acd2b7c1c0840d3c",
          620: "fd147efbab8db276e1afee45e26efbfd",
          664: "66a21241c86332d766dd5a12e0f0d11c",
          668: "55de9759bb7b8fb1d4b5890c66abdde0",
          818: "8e8209b83ad731cf2eca1758213dbb8a",
          860: "ef1922677416fef238b497746ebeb679",
          876: "50c2204c44fb1fc1acb91c4100c807ee",
          880: "56de99c3748162c2b0fd26f2c652fd0d",
          988: "ff4ff9ea3dfdba70a380e2bc49447ff2"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          876: "5754518f8676a553fd5fd46915d3a889",
          880: "fe210ed3f04fe64376cb80e4b64a13b3",
          988: "334b6f114c4a61ad3830c3a1d5aa887f"
        } [e] + ".css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, i = "@rockstargames/modules-core-gif-viewer:", u.l = (r, t, a, n) => {
          if (e[r]) e[r].push(t);
          else {
            var o, s;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                var d = f[l];
                if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == i + a) {
                  o = d;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, u.nc && o.setAttribute("nonce", u.nc), o.setAttribute("data-webpack", i + a), o.src = r), e[r] = [t];
            var c = (t, a) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[r];
                if (delete e[r], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), t) return t(a)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = c.bind(null, o.onerror), o.onload = c.bind(null, o.onload), s && document.head.appendChild(o)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          52: [3052],
          68: [9468, 9724],
          988: [1532, 1740, 2836, 3061, 3784, 5356, 5652, 5792, 8540]
        }, f = {
          1532: ["default", "./operations/queries", 3864],
          1740: ["default", "./index", 8428],
          2836: ["default", "./index", 1128],
          3052: ["default", "./index", 3864],
          3061: ["default", "./hooks", 9344],
          3784: ["default", "./operations/fragments/newswire-post.graphql", 3864],
          5356: ["default", "./helpers", 8428],
          5652: ["default", "./helpers/uploads", 8428],
          5792: ["default", "./index", 9344],
          8540: ["default", "./operations/fragments/paging.graphql", 3864],
          9468: ["default", "./properties", 8428],
          9724: ["default", "./ui", 8428]
        }, u.f.remotes = (e, r) => {
          u.o(s, e) && s[e].forEach((e => {
            var t = u.R;
            t || (t = []);
            var a = f[e];
            if (!(t.indexOf(a) >= 0)) {
              if (t.push(a), a.p) return r.push(a.p);
              var n = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw r
                  }, a.p = 0
                },
                o = (e, t, o, i, s, f) => {
                  try {
                    var l = e(t, o);
                    if (!l || !l.then) return s(l, i, f);
                    var d = l.then((e => s(e, i)), n);
                    if (!f) return d;
                    r.push(a.p = d)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, r, n) => o(r.get, a[1], t, 0, s, n),
                s = r => {
                  a.p = 1, u.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(u, a[2], 0, 0, ((e, r, t) => e ? o(u.I, a[0], 0, e, i, t) : n()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            r = {};
          u.I = (t, a) => {
            a || (a = []);
            var n = r[t];
            if (n || (n = r[t] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[t]) return e[t];
              u.o(u.S, t) || (u.S[t] = {});
              var o = u.S[t],
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
                    var n = u(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(u.S[t], a);
                    if (n.then) return l.push(n.then(o, r));
                    var i = o(n);
                    if (i && i.then) return l.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                l = [];
              return "default" === t && (s("@rockstargames/components", "1.14.0", (() => Promise.all([u.e(620), u.e(664), u.e(52), u.e(988), u.e(860), u.e(240)]).then((() => () => u(232))))), s("react-router-dom", "6.17.0", (() => Promise.all([u.e(168), u.e(668), u.e(664)]).then((() => () => u(9668))))), s("react-router-dom", "6.17.0", (() => Promise.all([u.e(168), u.e(818), u.e(664)]).then((() => () => u(4818))))), s("react", "18.2.0", (() => u.e(100).then((() => () => u(9480))))), f(3864), f(8428), f(1128), f(9344)), l.length ? e[t] = Promise.all(l).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var r = u.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && !e;) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
                  var l, d, u = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= a.length || "o" == (d = (typeof(l = a[i]))[0])) return !f || ("u" == u ? s > n && !o : "" == u != o);
                  if ("u" == d) {
                    if (!f || "u" != u) return !1
                  } else if (f)
                    if (u == d)
                      if (s <= n) {
                        if (l != t[s]) return !1
                      } else {
                        if (o ? l > t[s] : l < t[s]) return !1;
                        l != t[s] && (f = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (o || s <= n) return !1;
                    f = !1, s--
                  } else {
                    if (s <= n || d < u != o) return !1;
                    f = !1
                  } else "s" != u && "n" != u && (f = !1, s--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
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
              var o = u.I(r);
              return o && o.then ? o.then(e.bind(e, r, u.S[r], t, a, n)) : e(r, u.S[r], t, a, n)
            })(((e, r, a, n, o) => {
              var i = r && u.o(r, a) && t(r, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              1664: () => a("default", "react", [1, 18, 2, 0], (() => u.e(100).then((() => () => u(9480))))),
              8584: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(168), u.e(818)]).then((() => () => u(4818))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([u.e(620), u.e(988)]).then((() => () => u(232))))),
              7013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(168), u.e(668)]).then((() => () => u(9668)))))
            },
            i = {
              664: [1664],
              860: [9860],
              876: [8584],
              988: [7013]
            },
            s = {};
          u.f.consumes = (e, r) => {
            u.o(i, e) && i[e].forEach((e => {
              if (u.o(n, e)) return r.push(n[e]);
              if (!s[e]) {
                var t = r => {
                  n[e] = 0, u.m[e] = t => {
                    delete u.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var a = r => {
                  delete n[e], u.m[e] = t => {
                    throw delete u.c[e], r
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
            u.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                876: 1,
                880: 1,
                988: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var a = u.miniCssF(e),
                  n = u.p + a;
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
          u.f.j = (r, t) => {
            var a = u.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^(52|664|860)$/.test(r)) e[r] = 0;
            else {
              var n = new Promise(((t, n) => a = e[r] = [t, n]));
              t.push(a[2] = n);
              var o = u.p + u.u(r),
                i = new Error;
              u.l(o, (t => {
                if (u.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
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
                for (a in i) u.o(i, a) && (u.m[a] = i[a]);
                s && s(u)
              }
              for (r && r(t); f < o.length; f++) n = o[f], u.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), u.nc = void 0, u(3824), u(1812)
      })())
    }
  }
}));