! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cd18ddc7-68dd-4b53-8d3f-bea3042b7f5f", e._sentryDebugIdIdentifier = "sentry-dbid-cd18ddc7-68dd-4b53-8d3f-bea3042b7f5f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, t) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, a, n, o, i, d, s = {
            5144: (e, t, r) => {
              (0, r(3454).w)(1)
            },
            3454: (e, t, r) => {
              const a = r(8294).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            3787: (e, t, r) => {
              r(5144)
            },
            8294: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            5819: (e, t, r) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(819), r.e(637), r.e(136), r.e(229), r.e(113), r.e(649)]).then((() => () => r(4649)))
                },
                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      n = r.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => n,
                init: () => o
              })
            },
            5136: e => {
              "use strict";
              e.exports = r
            }
          },
          l = {};

        function f(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return s[e].call(r.exports, r, r.exports, f), r.loaded = !0, r.exports
        }
        return f.m = s, f.c = l, f.y = t, f.amdO = {}, f.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return f.d(t, {
            a: t
          }), t
        }, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, f.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var n = Object.create(null);
          f.r(n);
          var o = {};
          e = e || [null, a({}), a([]), a(a)];
          for (var i = 2 & r && t;
            "object" == typeof i && !~e.indexOf(i); i = a(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, f.d(n, o), n
        }, f.d = (e, t) => {
          for (var r in t) f.o(t, r) && !f.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce(((t, r) => (f.f[r](e, t), t)), [])), f.u = e => "js/" + {
          113: "e189a04983a24482bf1e1c702fc78c10",
          136: "fb01ca64a03026c53643a7420616354d",
          229: "d241059286208f62e0dc92c22ed340d4",
          282: "aa3d61080a7ddbc2096a359033eb3cf9",
          322: "268fd2d11ab67704251f9b6b22dd8430",
          385: "3289795167d3d99a99577ce2c629063b",
          508: "24631b2ca1f97a9d63475c25f1be7209",
          605: "dadb153a36ca5ab3fadac5c4a2fe24eb",
          637: "0bcd60b1b4c91adc062d04f032529892",
          649: "adeecc7e27d185587c6b89deb317c515",
          767: "805b89a48b1d8d40f204a528b9aea997",
          819: "858a7e05ff5a634f8f46b1fd0ea35e0c",
          927: "ee85bacbbadd7978b133c54c2ab50aa3",
          986: "d4cdbda360a9644148ef0d040e632ff0"
        } [e] + ".js", f.miniCssF = e => "css/0dca5a2e94bfc1a1e76bbd09c45c386a.css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, o = "@rockstargames/sites-gta-trilogy:", f.l = (e, t, r, a) => {
          if (n[e]) n[e].push(t);
          else {
            var i, d;
            if (void 0 !== r)
              for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
                var c = s[l];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == o + r) {
                  i = c;
                  break
                }
              }
            i || (d = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, f.nc && i.setAttribute("nonce", f.nc), i.setAttribute("data-webpack", o + r), i.src = e), n[e] = [t];
            var u = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var a = n[e];
                if (delete n[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(r))), t) return t(r)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), d && document.head.appendChild(i)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          649: [1879]
        }, d = {
          1879: ["default", "./index", 5136]
        }, f.f.remotes = (e, t) => {
          f.o(i, e) && i[e].forEach((e => {
            var r = f.R;
            r || (r = []);
            var a = d[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), f.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, d, s) => {
                  try {
                    var l = e(r, o);
                    if (!l || !l.then) return d(l, i, s);
                    var f = l.then((e => d(e, i)), n);
                    if (!s) return f;
                    t.push(a.p = f)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, f.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(f, a[2], 0, 0, ((e, t, r) => e ? o(f.I, a[0], 0, e, i, r) : n()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            t = {};
          f.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              f.o(f.S, r) || (f.S[r] = {});
              var o = f.S[r],
                i = "@rockstargames/sites-gta-trilogy",
                d = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    d = n[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : i > d.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                s = [];
              return "default" === r && (d("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([f.e(819), f.e(927), f.e(229), f.e(986)]).then((() => () => f(9986))))), d("@rsgweb/utils", "1.0.0", (() => Promise.all([f.e(819), f.e(637), f.e(229), f.e(113)]).then((() => () => f(3012))))), d("framer-motion", "7.10.3", (() => Promise.all([f.e(385), f.e(229), f.e(322)]).then((() => () => f(8385))))), d("react-router-dom", "6.17.0", (() => Promise.all([f.e(282), f.e(229)]).then((() => () => f(282))))), d("react", "18.2.0", (() => f.e(508).then((() => () => f(508))))), d("usehooks-ts", "2.9.1", (() => Promise.all([f.e(767), f.e(229)]).then((() => () => f(3767))))), (e => {
                var t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var n = f(5136);
                  if (!n) return;
                  var o = e => e && e.init && e.init(f.S[r], a);
                  if (n.then) return s.push(n.then(o, t));
                  var i = o(n);
                  if (i && i.then) return s.push(i.catch(t))
                } catch (e) {
                  t(e)
                }
              })()), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          f.g.importScripts && (e = f.g.location + "");
          var t = f.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), f.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (r, a) => {
              if (0 in r) {
                a = e(a);
                var n = r[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var i = 0, d = 1, s = !0;; d++, i++) {
                  var l, f, c = d < r.length ? (typeof r[d])[0] : "";
                  if (i >= a.length || "o" == (f = (typeof(l = a[i]))[0])) return !s || ("u" == c ? d > n && !o : "" == c != o);
                  if ("u" == f) {
                    if (!s || "u" != c) return !1
                  } else if (s)
                    if (c == f)
                      if (d <= n) {
                        if (l != r[d]) return !1
                      } else {
                        if (o ? l > r[d] : l < r[d]) return !1;
                        l != r[d] && (s = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || d <= n) return !1;
                    s = !1, d--
                  } else {
                    if (d <= n || f < c != o) return !1;
                    s = !1
                  } else "s" != c && "n" != c && (s = !1, d--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
            },
            r = (r, a, n) => {
              var o = r[a];
              return (a = Object.keys(o).reduce(((r, a) => !t(n, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var i = r[a],
                    d = (typeof i)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = f.I(t);
              return o && o.then ? o.then(e.bind(e, t, f.S[t], r, a, n)) : e(t, f.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && f.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              2229: () => a("default", "react", [1, 18, 2, 0], (() => f.e(508).then((() => () => f(508))))),
              5966: () => a("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => f(3012))),
              9623: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => f.e(282).then((() => () => f(282))))),
              236: () => a("default", "usehooks-ts", [1, 2, 7, 2], (() => f.e(767).then((() => () => f(3767))))),
              1788: () => a("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([f.e(927), f.e(605)]).then((() => () => f(9986))))),
              3582: () => a("default", "framer-motion", [1, 7, 5, 1], (() => f.e(385).then((() => () => f(8385)))))
            },
            i = {
              113: [5966, 9623],
              229: [2229],
              649: [236, 1788, 3582]
            },
            d = {};
          f.f.consumes = (e, t) => {
            f.o(i, e) && i[e].forEach((e => {
              if (f.o(n, e)) return t.push(n[e]);
              if (!d[e]) {
                var r = t => {
                  n[e] = 0, f.m[e] = r => {
                    delete f.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete n[e], f.m[e] = r => {
                    throw delete f.c[e], t
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? t.push(n[e] = i.then(r).catch(a)) : r(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              60: 0
            };
            f.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                649: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = f.miniCssF(e),
                  n = f.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var i;
                      if ((n = (i = o[a]).getAttribute("data-href")) === e || n === t) return i
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = d, o.parentNode && o.parentNode.removeChild(o), n(s)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, n, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            60: 0
          };
          f.f.j = (t, r) => {
            var a = f.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (229 != t) {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = f.p + f.u(t),
                i = new Error;
              f.l(o, (r => {
                if (f.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }), "chunk-" + t, t)
            } else e[t] = 0
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                i = r[1],
                d = r[2],
                s = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) f.o(i, a) && (f.m[a] = i[a]);
                d && d(f)
              }
              for (t && t(r); s < o.length; s++) n = o[s], f.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), f(3787), f(5819)
      })())
    }
  }
}));