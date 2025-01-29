! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "03d129ff-03a5-438a-9804-32a0e03acde4", e._sentryDebugIdIdentifier = "sentry-dbid-03d129ff-03a5-438a-9804-32a0e03acde4")
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
        var e, n, a, o, i, s, d = {
            5144: (e, t, r) => {
              (0, r(3454).w)(1)
            },
            3454: (e, t, r) => {
              const n = r(8294).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            3787: (e, t, r) => {
              r(5144)
            },
            8294: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, a = 0, o = n.length; a !== t && o >= 0;) "/" === n[--o] && a++;
                if (a !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            5819: (e, t, r) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(819), r.e(263), r.e(229), r.e(680), r.e(319)]).then((() => () => r(2319)))
                },
                a = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      a = r.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => a,
                init: () => o
              })
            },
            5136: e => {
              "use strict";
              e.exports = r
            }
          },
          f = {};

        function l(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = d, l.c = f, l.y = t, l.amdO = {}, l.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return l.d(t, {
            a: t
          }), t
        }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var a = Object.create(null);
          l.r(a);
          var o = {};
          e = e || [null, n({}), n([]), n(n)];
          for (var i = 2 & r && t;
            "object" == typeof i && !~e.indexOf(i); i = n(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, l.d(a, o), a
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
          220: "ee171c25746acd9a9629546a92e48989",
          229: "ddaa7474eee5e5a35859911dfe416af3",
          263: "2dc8caf50e8fef73012bcbf35acbb1b7",
          282: "d128599a92c79bd6aa2b62b2b416be7a",
          319: "60e6ff1419110e6c70f16cee1f331bd3",
          508: "9fe824e68807f860f40f70a00f7a648a",
          637: "800f28e3cd1fc36cd3bef3ca59582f6e",
          680: "98de05e74cee0d7616450621609d9e4c",
          819: "ab795558ab2c17e0f34bd742664e9f8a",
          839: "7ec6c5219a49a0e58abd929d8e25ac59"
        } [e] + ".js", l.miniCssF = e => "css/7269734ea624ef7181b23ac67b218af9.css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, o = "@rockstargames/sites-rockstar-tv:", l.l = (e, t, r, n) => {
          if (a[e]) a[e].push(t);
          else {
            var i, s;
            if (void 0 !== r)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var u = d[f];
                if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == o + r) {
                  i = u;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", o + r), i.src = e), a[e] = [t];
            var c = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var n = a[e];
                if (delete a[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(r))), t) return t(r)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          319: [1879]
        }, s = {
          1879: ["default", "./index", 5136]
        }, l.f.remotes = (e, t) => {
          l.o(i, e) && i[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var n = s[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), l.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                o = (e, r, o, i, s, d) => {
                  try {
                    var f = e(r, o);
                    if (!f || !f.then) return s(f, i, d);
                    var l = f.then((e => s(e, i)), a);
                    if (!d) return l;
                    t.push(n.p = l)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, t, a) => o(t.get, n[1], r, 0, d, a),
                d = t => {
                  n.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, n[2], 0, 0, ((e, t, r) => e ? o(l.I, n[0], 0, e, i, r) : a()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, n) => {
            n || (n = []);
            var a = t[r];
            if (a || (a = t[r] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var o = l.S[r],
                i = "@rockstargames/sites-rockstar-tv",
                s = (e, t, r, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                d = [];
              return "default" === r && (s("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(637), l.e(819), l.e(229), l.e(680), l.e(220)]).then((() => () => l(839))))), s("react-router-dom", "6.17.0", (() => Promise.all([l.e(282), l.e(229)]).then((() => () => l(282))))), s("react", "18.2.0", (() => l.e(508).then((() => () => l(508))))), (e => {
                var t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var a = l(5136);
                  if (!a) return;
                  var o = e => e && e.init && e.init(l.S[r], n);
                  if (a.then) return d.push(a.then(o, t));
                  var i = o(a);
                  if (i && i.then) return d.push(i.catch(t))
                } catch (e) {
                  t(e)
                }
              })()), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var t = l.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = (r, n) => {
              if (0 in r) {
                n = e(n);
                var a = r[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, d = !0;; s++, i++) {
                  var f, l, u = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(f = n[i]))[0])) return !d || ("u" == u ? s > a && !o : "" == u != o);
                  if ("u" == l) {
                    if (!d || "u" != u) return !1
                  } else if (d)
                    if (u == l)
                      if (s <= a) {
                        if (f != r[s]) return !1
                      } else {
                        if (o ? f > r[s] : f < r[s]) return !1;
                        f != r[s] && (d = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (o || s <= a) return !1;
                    d = !1, s--
                  } else {
                    if (s <= a || l < u != o) return !1;
                    d = !1
                  } else "s" != u && "n" != u && (d = !1, s--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, n) : !p())
              }
              return !!p()
            },
            r = (r, n, a) => {
              var o = r[n];
              return (n = Object.keys(o).reduce(((r, n) => !t(a, n) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var a = t[n],
                    o = (typeof a)[0];
                  if (n >= r.length) return "u" == o;
                  var i = r[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(r, n) ? r : n), 0)) && o[n]
            },
            n = (e => function(t, r, n, a) {
              var o = l.I(t);
              return o && o.then ? o.then(e.bind(e, t, l.S[t], r, n, a)) : e(t, l.S[t], r, n, a)
            })(((e, t, n, a, o) => {
              var i = t && l.o(t, n) && r(t, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              2229: () => n("default", "react", [1, 18, 2, 0], (() => l.e(508).then((() => () => l(508))))),
              5966: () => n("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([l.e(637), l.e(839)]).then((() => () => l(839))))),
              9623: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(282).then((() => () => l(282)))))
            },
            i = {
              229: [2229],
              680: [5966, 9623]
            },
            s = {};
          l.f.consumes = (e, t) => {
            l.o(i, e) && i[e].forEach((e => {
              if (l.o(a, e)) return t.push(a[e]);
              if (!s[e]) {
                var r = t => {
                  a[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var n = t => {
                  delete a[e], l.m[e] = r => {
                    throw delete l.c[e], t
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? t.push(a[e] = i.then(r).catch(n)) : r(i)
                } catch (e) {
                  n(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              483: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                319: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = l.miniCssF(e),
                  a = l.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var a = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === t) return i
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) n();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = s, o.parentNode && o.parentNode.removeChild(o), a(d)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, a, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            483: 0
          };
          l.f.j = (t, r) => {
            var n = l.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(229|680)$/.test(t)) e[t] = 0;
            else {
              var a = new Promise(((r, a) => n = e[t] = [r, a]));
              r.push(n[2] = a);
              var o = l.p + l.u(t),
                i = new Error;
              l.l(o, (r => {
                if (l.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, a, o = r[0],
                i = r[1],
                s = r[2],
                d = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (n in i) l.o(i, n) && (l.m[n] = i[n]);
                s && s(l)
              }
              for (t && t(r); d < o.length; d++) a = o[d], l.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(3787), l(5819)
      })())
    }
  }
}));