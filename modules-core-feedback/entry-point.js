! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "25536215-8b32-41c7-985b-5c6dd777ffd3", e._sentryDebugIdIdentifier = "sentry-dbid-25536215-8b32-41c7-985b-5c6dd777ffd3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-feedback",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    n = {},
    a = {},
    o = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
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
        n[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        a[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        o[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, s, f, d = {
            4364: (e, r, t) => {
              (0, t(7284).G)(1)
            },
            7284: (e, r, t) => {
              const n = t(7984).Q;
              r.G = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            3824: (e, r, t) => {
              t(4364)
            },
            7984: (e, r, t) => {
              r.Q = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, a = 0, o = n.length; a !== r && o >= 0;) "/" === n[--o] && a++;
                if (a !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            7461: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(156), t.e(556)]).then((() => () => t(5556)))
                },
                a = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                o = (e, r) => {
                  if (t.S) {
                    var n = "default",
                      a = t.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[n] = e, t.I(n, r)
                  }
                };
              t.d(r, {
                get: () => a,
                init: () => o
              })
            },
            3864: e => {
              "use strict";
              e.exports = t
            },
            1128: e => {
              "use strict";
              e.exports = n
            },
            8428: e => {
              "use strict";
              e.exports = a
            },
            9344: e => {
              "use strict";
              e.exports = o
            }
          },
          l = {};

        function u(e) {
          var r = l[e];
          if (void 0 !== r) return r.exports;
          var t = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(t.exports, t, t.exports, u), t.loaded = !0, t.exports
        }
        return u.m = d, u.c = l, u.y = r, u.amdO = {}, u.n = e => {
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
          100: "e7fdec9c5e7f51df0d929983a3f9ce09",
          156: "4de7ab4ffcddf8aa218b73c010bba802",
          240: "64e070416b923a8945b4779fcf0e3615",
          500: "b52cd6bcd4405117eca13d8b9207f4b8",
          556: "040628ace1036597a4d137b5a0044210",
          644: "5a8751bda78762837e6999d2f77d2102"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          556: "c6608d21ed6b0af8099c2202aa1690d5",
          644: "0695b84ce9d56c36a7f3b6c40595bc56"
        } [e] + ".css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, i = "@rockstargames/modules-core-feedback:", u.l = (r, t, n, a) => {
          if (e[r]) e[r].push(t);
          else {
            var o, s;
            if (void 0 !== n)
              for (var f = document.getElementsByTagName("script"), d = 0; d < f.length; d++) {
                var l = f[d];
                if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == i + n) {
                  o = l;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, u.nc && o.setAttribute("nonce", u.nc), o.setAttribute("data-webpack", i + n), o.src = r), e[r] = [t];
            var c = (t, n) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var a = e[r];
                if (delete e[r], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e => e(n))), t) return t(n)
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
          156: [2836, 3052, 5792],
          644: [1532, 1740, 3061, 3784, 5356, 5652, 8540]
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
          8540: ["default", "./operations/fragments/paging.graphql", 3864]
        }, u.f.remotes = (e, r) => {
          u.o(s, e) && s[e].forEach((e => {
            var t = u.R;
            t || (t = []);
            var n = f[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), u.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                o = (e, t, o, i, s, f) => {
                  try {
                    var d = e(t, o);
                    if (!d || !d.then) return s(d, i, f);
                    var l = d.then((e => s(e, i)), a);
                    if (!f) return l;
                    r.push(n.p = l)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, r, a) => o(r.get, n[1], t, 0, s, a),
                s = r => {
                  n.p = 1, u.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(u, n[2], 0, 0, ((e, r, t) => e ? o(u.I, n[0], 0, e, i, t) : a()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            r = {};
          u.I = (t, n) => {
            n || (n = []);
            var a = r[t];
            if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[t]) return e[t];
              u.o(u.S, t) || (u.S[t] = {});
              var o = u.S[t],
                i = "@rockstargames/modules-core-feedback",
                s = (e, r, t, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[r];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[r] = {
                    get: t,
                    from: i,
                    eager: !!n
                  })
                },
                f = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var a = u(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(u.S[t], n);
                    if (a.then) return d.push(a.then(o, r));
                    var i = o(a);
                    if (i && i.then) return d.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                d = [];
              return "default" === t && (s("@rockstargames/components", "1.14.0", (() => Promise.all([u.e(500), u.e(644), u.e(156), u.e(240)]).then((() => () => u(7212))))), s("react", "18.2.0", (() => u.e(100).then((() => () => u(7100))))), f(3864), f(1128), f(9344), f(8428)), d.length ? e[t] = Promise.all(d).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var r = u.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
        })(), (() => {
          var e = e => {
              var r = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = t[1] ? r(t[1]) : [];
              return t[2] && (n.length++, n.push.apply(n, r(t[2]))), t[3] && (n.push([]), n.push.apply(n, r(t[3]))), n
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var a = t[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var d, l, u = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(d = n[i]))[0])) return !f || ("u" == u ? s > a && !o : "" == u != o);
                  if ("u" == l) {
                    if (!f || "u" != u) return !1
                  } else if (f)
                    if (u == l)
                      if (s <= a) {
                        if (d != t[s]) return !1
                      } else {
                        if (o ? d > t[s] : d < t[s]) return !1;
                        d != t[s] && (f = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (o || s <= a) return !1;
                    f = !1, s--
                  } else {
                    if (s <= a || l < u != o) return !1;
                    f = !1
                  } else "s" != u && "n" != u && (f = !1, s--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
              }
              return !!p()
            },
            t = (t, n, a) => {
              var o = t[n];
              return (n = Object.keys(o).reduce(((t, n) => !r(a, n) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var n = 0;;) {
                  if (n >= r.length) return n < t.length && "u" != (typeof t[n])[0];
                  var a = r[n],
                    o = (typeof a)[0];
                  if (n >= t.length) return "u" == o;
                  var i = t[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(t, n) ? t : n), 0)) && o[n]
            },
            n = (e => function(r, t, n, a) {
              var o = u.I(r);
              return o && o.then ? o.then(e.bind(e, r, u.S[r], t, n, a)) : e(r, u.S[r], t, n, a)
            })(((e, r, n, a, o) => {
              var i = r && u.o(r, n) && t(r, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              1664: () => n("default", "react", [1, 18, 2, 0], (() => u.e(100).then((() => () => u(7100))))),
              9860: () => n("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([u.e(500), u.e(644)]).then((() => () => u(7212)))))
            },
            i = {
              156: [1664, 9860]
            },
            s = {};
          u.f.consumes = (e, r) => {
            u.o(i, e) && i[e].forEach((e => {
              if (u.o(a, e)) return r.push(a[e]);
              if (!s[e]) {
                var t = r => {
                  a[e] = 0, u.m[e] = t => {
                    delete u.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var n = r => {
                  delete a[e], u.m[e] = t => {
                    throw delete u.c[e], r
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? r.push(a[e] = i.then(t).catch(n)) : t(i)
                } catch (e) {
                  n(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              832: 0
            };
            u.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                556: 1,
                644: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = u.miniCssF(e),
                  a = u.p + n;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                      var a = (i = t[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === r)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === r) return i
                    }
                  })(n, a)) return r();
                ((e, r, t, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = t => {
                    if (o.onerror = o.onload = null, "load" === t.type) n();
                    else {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.href || r,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, o.parentNode && o.parentNode.removeChild(o), a(f)
                    }
                  }, o.href = r, document.head.appendChild(o)
                })(e, a, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            832: 0
          };
          u.f.j = (r, t) => {
            var n = u.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (156 != r) {
              var a = new Promise(((t, a) => n = e[r] = [t, a]));
              t.push(n[2] = a);
              var o = u.p + u.u(r),
                i = new Error;
              u.l(o, (t => {
                if (u.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var a = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + r, r)
            } else e[r] = 0
          };
          var r = (r, t) => {
              var n, a, o = t[0],
                i = t[1],
                s = t[2],
                f = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (n in i) u.o(i, n) && (u.m[n] = i[n]);
                s && s(u)
              }
              for (r && r(t); f < o.length; f++) a = o[f], u.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_feedback = self.webpackChunk_rockstargames_modules_core_feedback || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), u(3824), u(7461)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map