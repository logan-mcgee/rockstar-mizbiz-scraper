try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c7d88c8d-db59-46ef-a555-4f72029fe809", e._sentryDebugIdIdentifier = "sentry-dbid-c7d88c8d-db59-46ef-a555-4f72029fe809")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, t) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(t) {
        r[t] = e[t]
      })
    }],
    execute: function() {
      e((() => {
        var e, n, a, o, i, s, f = {
            154(e, t, r) {
              (0, r(9160).w)(1)
            },
            9160(e, t, r) {
              const n = r(1908).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            5649(e, t, r) {
              r(154)
            },
            1908(e, t, r) {
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
            5819(e, t, r) {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(330), r.e(82), r.e(416), r.e(291)]).then(() => () => r(3291))
                },
                a = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, t),
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
            5136(e) {
              "use strict";
              e.exports = r
            }
          },
          l = {};

        function d(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            exports: {}
          };
          return f[e].call(r.exports, r, r.exports, d), r.exports
        }
        return d.m = f, d.c = l, d.y = t, d.amdO = {}, d.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return d.d(t, {
            a: t
          }), t
        }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, d.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var a = Object.create(null);
          d.r(a);
          var o = {};
          e = e || [null, n({}), n([]), n(n)];
          for (var i = 2 & r && t;
            ("object" == typeof i || "function" == typeof i) && !~e.indexOf(i); i = n(i)) Object.getOwnPropertyNames(i).forEach(e => o[e] = () => t[e]);
          return o.default = () => t, d.d(a, o), a
        }, d.d = (e, t) => {
          for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce((t, r) => (d.f[r](e, t), t), [])), d.u = e => "js/" + {
          162: "7ed67b7e11690861a0fe010c66b01a13",
          174: "e35d296e3f215d8a259616fe6e6bf58c",
          269: "83baaedf9dcbda509cc054aba24c1624",
          291: "a90192747f96d3e87246f2d1a64e1d6e",
          330: "e9a820c580b3e3cf9920fde99802e0bd",
          581: "ba54594cf73899763ea644f360ed664f",
          584: "df1fd9ee72a6cc415814582b3a7370ee",
          679: "a7728a1f99ed67399169a22e02ca73b8"
        } [e] + ".js", d.miniCssF = e => "css/3131b747dcc23c6bbe32886966efd955.css", d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, o = "@rockstargames/sites-gta-tv:", d.l = (e, t, r, n) => {
          if (a[e]) a[e].push(t);
          else {
            var i, s;
            if (void 0 !== r)
              for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                var u = f[l];
                if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == o + r) {
                  i = u;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", d.nc && i.setAttribute("nonce", d.nc), i.setAttribute("data-webpack", o + r), i.src = e), a[e] = [t];
            var c = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var n = a[e];
                if (delete a[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach(e => e(r)), t) return t(r)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, d.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          291: [1879]
        }, s = {
          1879: ["default", "./index", 5136]
        }, d.f.remotes = (e, t) => {
          d.o(i, e) && i[e].forEach(e => {
            var r = d.R;
            r || (r = []);
            var n = s[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), d.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                o = (e, r, o, i, s, f) => {
                  try {
                    var l = e(r, o);
                    if (!l || !l.then) return s(l, i, f);
                    var d = l.then(e => s(e, i), a);
                    if (!f) return d;
                    t.push(n.p = d)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, t, a) => o(t.get, n[1], r, 0, f, a),
                f = t => {
                  n.p = 1, d.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(d, n[2], 0, 0, (e, t, r) => e ? o(d.I, n[0], 0, e, i, r) : a(), 1)
            }
          })
        }, (() => {
          d.S = {};
          var e = {},
            t = {};
          d.I = (r, n) => {
            n || (n = []);
            var a = t[r];
            if (a || (a = t[r] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[r]) return e[r];
              d.o(d.S, r) || (d.S[r] = {});
              var o = d.S[r],
                i = "@rockstargames/sites-gta-tv",
                s = (e, t, r, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                f = [];
              return "default" === r && (s("@rsgweb/utils", "0.0.0-development", () => Promise.all([d.e(679), d.e(330), d.e(82), d.e(584), d.e(416), d.e(174)]).then(() => () => d(4584))), s("react-dom", "18.3.1", () => Promise.all([d.e(162), d.e(82)]).then(() => () => d(162))), s("react-router-dom", "6.30.3", () => Promise.all([d.e(269), d.e(82), d.e(17)]).then(() => () => d(6650))), s("react", "18.3.1", () => d.e(581).then(() => () => d(2581))), (() => {
                var e = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var t = d(5136);
                  if (!t) return;
                  var a = e => e && e.init && e.init(d.S[r], n);
                  if (t.then) return f.push(t.then(a, e));
                  var o = a(t);
                  if (o && o.then) return f.push(o.catch(e))
                } catch (t) {
                  e(t)
                }
              })()), f.length ? e[r] = Promise.all(f).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var t = d.g.document;
          if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = e => {
              var r = e[0],
                n = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                n += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var a = 1, o = 1; o < e.length; o++) a--, n += "u" == (typeof(s = e[o]))[0] ? "-" : (a > 0 ? "." : "") + (a = 2, s);
                return n
              }
              var i = [];
              for (o = 1; o < e.length; o++) {
                var s = e[o];
                i.push(0 === s ? "not(" + f() + ")" : 1 === s ? "(" + f() + " || " + f() + ")" : 2 === s ? i.pop() + " " + i.pop() : t(s))
              }
              return f();

              function f() {
                return i.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var a = t[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var l, d, u = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (d = (typeof(l = n[i]))[0])) return !f || ("u" == u ? s > a && !o : "" == u != o);
                  if ("u" == d) {
                    if (!f || "u" != u) return !1
                  } else if (f)
                    if (u == d)
                      if (s <= a) {
                        if (l != t[s]) return !1
                      } else {
                        if (o ? l > t[s] : l < t[s]) return !1;
                        l != t[s] && (f = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (o || s <= a) return !1;
                    f = !1, s--
                  } else {
                    if (s <= a || d < u != o) return !1;
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
            n = (t, r, n) => {
              var a = n ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(a).reduce((t, r) => !t || !a[t].loaded && ((t, r) => {
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
              })(t, r) ? r : t, 0)
            },
            a = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            o = (e => function(t, r, n, a, o) {
              var i = d.I(t);
              return i && i.then && !n ? i.then(e.bind(e, t, d.S[t], r, !1, a, o)) : e(t, d.S[t], r, n, a, o)
            })((e, o, i, s, f, l) => {
              if (!((e, t) => e && d.o(e, t))(o, i)) return a(e, i, l);
              var u, c, p = n(o, i, s);
              return r(f, p) || (c = ((e, r, n, a) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(a) + ")")(o, i, p, f), "undefined" != typeof console && console.warn && console.warn(c)), (u = o[i][p]).loaded = 1, u.get()
            }),
            i = {},
            s = {
              3082: () => o("default", "react", !1, [0], () => d.e(581).then(() => () => d(2581))),
              6416: () => o("default", "react-router-dom", !1, [0], () => Promise.all([d.e(269), d.e(17)]).then(() => () => d(6650))),
              3331: () => o("default", "@rsgweb/utils", !1, [0], () => Promise.all([d.e(679), d.e(584)]).then(() => () => d(4584))),
              4017: () => o("default", "react-dom", !1, [1, 18, 2, 0], () => d.e(162).then(() => () => d(162)))
            },
            f = {
              17: [4017],
              82: [3082],
              291: [3331],
              416: [6416]
            },
            l = {};
          d.f.consumes = (e, t) => {
            d.o(f, e) && f[e].forEach(e => {
              if (d.o(i, e)) return t.push(i[e]);
              if (!l[e]) {
                var r = t => {
                  i[e] = 0, d.m[e] = r => {
                    delete d.c[e], r.exports = t()
                  }
                };
                l[e] = !0;
                var n = t => {
                  delete i[e], d.m[e] = r => {
                    throw delete d.c[e], t
                  }
                };
                try {
                  var a = s[e]();
                  a.then ? t.push(i[e] = a.then(r).catch(n)) : r(a)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              970: 0
            };
            d.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                291: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var n = d.miniCssF(e),
                  a = d.p + n;
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
                  o.rel = "stylesheet", o.type = "text/css", d.nc && (o.nonce = d.nc), o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) n();
                    else {
                      var i = r && r.type,
                        s = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ": " + s + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, o.parentNode && o.parentNode.removeChild(o), a(f)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, a, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          var e = {
            970: 0
          };
          d.f.j = (t, r) => {
            var n = d.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(17|416|82)$/.test(t)) e[t] = 0;
            else {
              var a = new Promise((r, a) => n = e[t] = [r, a]);
              r.push(n[2] = a);
              var o = d.p + d.u(t),
                i = new Error;
              d.l(o, r => {
                if (d.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, a, [o, i, s] = r,
                f = 0;
              if (o.some(t => 0 !== e[t])) {
                for (n in i) d.o(i, n) && (d.m[n] = i[n]);
                s && s(d)
              }
              for (t && t(r); f < o.length; f++) a = o[f], d.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), d(5649), d(5819)
      })())
    }
  }
});