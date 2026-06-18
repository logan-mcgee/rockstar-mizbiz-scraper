try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f603fa85-5fb2-4c1b-a351-9f35495852cb", e._sentryDebugIdIdentifier = "sentry-dbid-f603fa85-5fb2-4c1b-a351-9f35495852cb")
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
        var e, n, o, a, i, s, f = {
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
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, a = n.length; o !== t && a >= 0;) "/" === n[--a] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            5819(e, t, r) {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(330), r.e(82), r.e(416), r.e(291)]).then(() => () => r(3291))
                },
                o = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, t),
                a = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      o = r.S[n];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => a
              })
            },
            5136(e) {
              "use strict";
              e.exports = r
            }
          },
          l = {};

        function u(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            exports: {}
          };
          return f[e].call(r.exports, r, r.exports, u), r.exports
        }
        return u.m = f, u.c = l, u.y = t, u.amdO = {}, u.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return u.d(t, {
            a: t
          }), t
        }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, u.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var o = Object.create(null);
          u.r(o);
          var a = {};
          e = e || [null, n({}), n([]), n(n)];
          for (var i = 2 & r && t;
            ("object" == typeof i || "function" == typeof i) && !~e.indexOf(i); i = n(i)) Object.getOwnPropertyNames(i).forEach(e => a[e] = () => t[e]);
          return a.default = () => t, u.d(o, a), o
        }, u.d = (e, t) => {
          for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce((t, r) => (u.f[r](e, t), t), [])), u.u = e => "js/" + {
          162: "c5789ee4d047149c2dec9aca272de523",
          174: "555b76cd164aea7030633734653aa7ea",
          269: "e3cd47c23258560c3b5164b4de4a2e18",
          291: "2930455da6cdcb586386b5ef69a748ac",
          330: "89a4214a8d0e73351f2e00088fbf3769",
          402: "28cebbf713c712a68a84d844bf0de748",
          581: "29207990a98da56cd535888a72f5dfa2",
          679: "2402dabd2945842c1c3e0ac765ee2c61"
        } [e] + ".js", u.miniCssF = e => "css/3131b747dcc23c6bbe32886966efd955.css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o = {}, a = "@rockstargames/sites-gta-tv:", u.l = (e, t, r, n) => {
          if (o[e]) o[e].push(t);
          else {
            var i, s;
            if (void 0 !== r)
              for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                var d = f[l];
                if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == a + r) {
                  i = d;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", u.nc && i.setAttribute("nonce", u.nc), i.setAttribute("data-webpack", a + r), i.src = e), o[e] = [t];
            var c = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var n = o[e];
                if (delete o[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach(e => e(r)), t) return t(r)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          291: [1879]
        }, s = {
          1879: ["default", "./index", 5136]
        }, u.f.remotes = (e, t) => {
          u.o(i, e) && i[e].forEach(e => {
            var r = u.R;
            r || (r = []);
            var n = s[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), u.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                a = (e, r, a, i, s, f) => {
                  try {
                    var l = e(r, a);
                    if (!l || !l.then) return s(l, i, f);
                    var u = l.then(e => s(e, i), o);
                    if (!f) return u;
                    t.push(n.p = u)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, t, o) => a(t.get, n[1], r, 0, f, o),
                f = t => {
                  n.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(u, n[2], 0, 0, (e, t, r) => e ? a(u.I, n[0], 0, e, i, r) : o(), 1)
            }
          })
        }, (() => {
          u.S = {};
          var e = {},
            t = {};
          u.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              u.o(u.S, r) || (u.S[r] = {});
              var a = u.S[r],
                i = "@rockstargames/sites-gta-tv",
                s = (e, t, r, n) => {
                  var o = a[e] = a[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (o[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                f = [];
              return "default" === r && (s("@rsgweb/utils", "0.0.0-development", () => Promise.all([u.e(679), u.e(330), u.e(82), u.e(402), u.e(416), u.e(174)]).then(() => () => u(6402))), s("react-dom", "18.3.1", () => Promise.all([u.e(162), u.e(82)]).then(() => () => u(162))), s("react-router-dom", "6.30.3", () => Promise.all([u.e(269), u.e(82), u.e(17)]).then(() => () => u(6650))), s("react", "18.3.1", () => u.e(581).then(() => () => u(2581))), (() => {
                var e = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var t = u(5136);
                  if (!t) return;
                  var o = e => e && e.init && e.init(u.S[r], n);
                  if (t.then) return f.push(t.then(o, e));
                  var a = o(t);
                  if (a && a.then) return f.push(a.catch(e))
                } catch (t) {
                  e(t)
                }
              })()), f.length ? e[r] = Promise.all(f).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var t = u.g.document;
          if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
                for (var o = 1, a = 1; a < e.length; a++) o--, n += "u" == (typeof(s = e[a]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, s);
                return n
              }
              var i = [];
              for (a = 1; a < e.length; a++) {
                var s = e[a];
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
                var o = t[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var l, u, d = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (u = (typeof(l = n[i]))[0])) return !f || ("u" == d ? s > o && !a : "" == d != a);
                  if ("u" == u) {
                    if (!f || "u" != d) return !1
                  } else if (f)
                    if (d == u)
                      if (s <= o) {
                        if (l != t[s]) return !1
                      } else {
                        if (a ? l > t[s] : l < t[s]) return !1;
                        l != t[s] && (f = !1)
                      }
                  else if ("s" != d && "n" != d) {
                    if (a || s <= o) return !1;
                    f = !1, s--
                  } else {
                    if (s <= o || u < d != a) return !1;
                    f = !1
                  } else "s" != d && "n" != d && (f = !1, s--)
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
              var o = n ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(o).reduce((t, r) => !t || !o[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var o = t[n],
                    a = (typeof o)[0];
                  if (n >= r.length) return "u" == a;
                  var i = r[n],
                    s = (typeof i)[0];
                  if (a != s) return "o" == a && "n" == s || "s" == s || "u" == a;
                  if ("o" != a && "u" != a && o != i) return o < i;
                  n++
                }
              })(t, r) ? r : t, 0)
            },
            o = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            a = (e => function(t, r, n, o, a) {
              var i = u.I(t);
              return i && i.then && !n ? i.then(e.bind(e, t, u.S[t], r, !1, o, a)) : e(t, u.S[t], r, n, o, a)
            })((e, a, i, s, f, l) => {
              if (!((e, t) => e && u.o(e, t))(a, i)) return o(e, i, l);
              var d, c, p = n(a, i, s);
              return r(f, p) || (c = ((e, r, n, o) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(o) + ")")(a, i, p, f), "undefined" != typeof console && console.warn && console.warn(c)), (d = a[i][p]).loaded = 1, d.get()
            }),
            i = {},
            s = {
              3082: () => a("default", "react", !1, [0], () => u.e(581).then(() => () => u(2581))),
              6416: () => a("default", "react-router-dom", !1, [0], () => Promise.all([u.e(269), u.e(17)]).then(() => () => u(6650))),
              3331: () => a("default", "@rsgweb/utils", !1, [0], () => Promise.all([u.e(679), u.e(402)]).then(() => () => u(6402))),
              4017: () => a("default", "react-dom", !1, [1, 18, 2, 0], () => u.e(162).then(() => () => u(162)))
            },
            f = {
              17: [4017],
              82: [3082],
              291: [3331],
              416: [6416]
            },
            l = {};
          u.f.consumes = (e, t) => {
            u.o(f, e) && f[e].forEach(e => {
              if (u.o(i, e)) return t.push(i[e]);
              if (!l[e]) {
                var r = t => {
                  i[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                l[e] = !0;
                var n = t => {
                  delete i[e], u.m[e] = r => {
                    throw delete u.c[e], t
                  }
                };
                try {
                  var o = s[e]();
                  o.then ? t.push(i[e] = o.then(r).catch(n)) : r(o)
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
            u.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                291: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var n = u.miniCssF(e),
                  o = u.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var o = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (o === e || o === t)) return i
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var i;
                      if ((o = (i = a[n]).getAttribute("data-href")) === e || o === t) return i
                    }
                  })(n, o)) return t();
                ((e, t, r, n, o) => {
                  var a = document.createElement("link");
                  a.rel = "stylesheet", a.type = "text/css", u.nc && (a.nonce = u.nc), a.onerror = a.onload = r => {
                    if (a.onerror = a.onload = null, "load" === r.type) n();
                    else {
                      var i = r && r.type,
                        s = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ": " + s + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, a.parentNode && a.parentNode.removeChild(a), o(f)
                    }
                  }, a.href = t, document.head.appendChild(a)
                })(e, o, 0, t, r)
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
          u.f.j = (t, r) => {
            var n = u.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(17|416|82)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise((r, o) => n = e[t] = [r, o]);
              r.push(n[2] = o);
              var a = u.p + u.u(t),
                i = new Error;
              u.l(a, r => {
                if (u.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, o, [a, i, s] = r,
                f = 0;
              if (a.some(t => 0 !== e[t])) {
                for (n in i) u.o(i, n) && (u.m[n] = i[n]);
                s && s(u)
              }
              for (t && t(r); f < a.length; f++) o = a[f], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u(5649), u(5819)
      })())
    }
  }
});