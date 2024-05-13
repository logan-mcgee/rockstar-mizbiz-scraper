! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0872d92a-77ec-464e-922c-40f5c3a569cc", e._sentryDebugIdIdentifier = "sentry-dbid-0872d92a-77ec-464e-922c-40f5c3a569cc")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    s = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, d, f, l = {
            54364: (e, t, r) => {
              (0, r(47284).G)(1)
            },
            47284: (e, t, r) => {
              const a = r(87984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            93824: (e, t, r) => {
              r(54364)
            },
            87984: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var s = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + s
              };
              Number.isInteger
            },
            47461: (e, t, r) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(664), r.e(792), r.e(128), r.e(108)]).then((() => () => r(29108)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            },
            33864: e => {
              "use strict";
              e.exports = r
            },
            81128: e => {
              "use strict";
              e.exports = a
            },
            14472: e => {
              "use strict";
              e.exports = o
            },
            88428: e => {
              "use strict";
              e.exports = n
            },
            9344: e => {
              "use strict";
              e.exports = s
            }
          },
          c = {};

        function u(e) {
          var t = c[e];
          if (void 0 !== t) return t.exports;
          var r = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, u), r.loaded = !0, r.exports
        }
        return u.m = l, u.c = c, u.y = t, u.amdO = {}, u.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return u.d(t, {
            a: t
          }), t
        }, u.d = (e, t) => {
          for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((t, r) => (u.f[r](e, t), t)), [])), u.u = e => "js/" + {
          61: "84da87f19fae4033e1b14e81559a7d6c",
          72: "7fb0167f659fde89a04a3abc9ada9706",
          88: "c9a91a241c11ab3a22942fdedc40bd1f",
          92: "552983a88b193940c0b8e11d0c578068",
          100: "fbf8586089d4be09b3cce8751ef87a6f",
          108: "a2744785e423c2c9418e303232a414bf",
          128: "946f861a2463ff15ed5fc25862bacb3d",
          240: "0add090f1fbf47a97228850b49a56dcd",
          288: "2ed1bb52b1828216437dabbde9fa2ed4",
          304: "ef44f8d6a5361270ae6003eb52b90d76",
          408: "aaec98709ea6027a73ae3a6bc07295be",
          452: "3c4a38c6d97e0ee014c2235c8080709f",
          516: "eecf7aae12014627204d60a7862c2a0a",
          520: "e45b576797671597e9b18c41dfaa3daf",
          664: "6b71c9f09c4ebbc9b2c7e075ed522379",
          676: "782b1db997d75d3ceece510df06606c6",
          784: "55e8997aa0e715421e262823fb98a8c4",
          792: "ba124523fb5ab61edbe4a8b1b3ab95da",
          832: "5f7ca54d88729fe38e27a015d7407c0d",
          836: "3b78745f7e302b0674b83a91dfcadabe",
          924: "8672a784ebf2add3162a9b4dc6f84783"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          108: "f591ef29a01f17332a4e20f415b692b1",
          452: "b7fd239e304dcd961f6015ac377a42dd",
          676: "19f10fcb6e65dfcb6ffe4c1ddd9967e8",
          832: "b7fd239e304dcd961f6015ac377a42dd"
        } [e] + ".css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, i = "@rockstargames/sites-red-dead-redemption-2:", u.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, s;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var l = d[f];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == i + a) {
                  n = l;
                  break
                }
              }
            n || (s = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, u.nc && n.setAttribute("nonce", u.nc), n.setAttribute("data-webpack", i + a), n.src = t), e[t] = [r];
            var c = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = c.bind(null, n.onerror), n.onload = c.bind(null, n.onload), s && document.head.appendChild(n)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          61: [3061],
          108: [67308, 84644],
          128: [33052],
          676: [1532, 1740, 28540, 45652, 73784, 95356],
          792: [45792],
          836: [42836]
        }, f = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          33052: ["default", "./index", 33864],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          67308: ["default", "./operations/fragments/video-fields.graphql", 33864],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          84644: ["default", "./index", 14472],
          95356: ["default", "./helpers", 88428]
        }, u.f.remotes = (e, t) => {
          u.o(d, e) && d[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, s, i, d) => {
                  try {
                    var f = e(r, n);
                    if (!f || !f.then) return i(f, s, d);
                    var l = f.then((e => i(e, s)), o);
                    if (!d) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, t, o) => n(t.get, a[1], r, 0, i, o),
                i = t => {
                  a.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(u, a[2], 0, 0, ((e, t, r) => e ? n(u.I, a[0], 0, e, s, r) : o()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            t = {};
          u.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              u.o(u.S, r) || (u.S[r] = {});
              var n = u.S[r],
                s = "@rockstargames/sites-red-dead-redemption-2",
                i = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    i = o[t];
                  (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (o[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                d = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = u(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(u.S[r], a);
                    if (o.then) return f.push(o.then(n, t));
                    var s = n(o);
                    if (s && s.then) return f.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (i("@rockstargames/components", "1.14.0", (() => Promise.all([u.e(92), u.e(520), u.e(664), u.e(836), u.e(792), u.e(676), u.e(128), u.e(240)]).then((() => () => u(77444))))), i("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(92), u.e(408), u.e(664), u.e(61), u.e(924)]).then((() => () => u(8304))))), i("@rockstargames/modules-core-agegate", "1.0.39", (() => Promise.all([u.e(516), u.e(664), u.e(836), u.e(792), u.e(452)]).then((() => () => u(24))))), i("lodash", "4.17.21", (() => u.e(784).then((() => () => u(79784))))), i("react-router-dom", "6.17.0", (() => Promise.all([u.e(88), u.e(72), u.e(664)]).then((() => () => u(84832))))), i("react-router-dom", "6.17.0", (() => Promise.all([u.e(88), u.e(288), u.e(664)]).then((() => () => u(40288))))), i("react", "18.2.0", (() => u.e(100).then((() => () => u(99480))))), d(9344), d(33864), d(14472), d(81128), d(88428)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var t = u.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
                var o = r[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var s = 0, i = 1, d = !0;; i++, s++) {
                  var f, l, c = i < r.length ? (typeof r[i])[0] : "";
                  if (s >= a.length || "o" == (l = (typeof(f = a[s]))[0])) return !d || ("u" == c ? i > o && !n : "" == c != n);
                  if ("u" == l) {
                    if (!d || "u" != c) return !1
                  } else if (d)
                    if (c == l)
                      if (i <= o) {
                        if (f != r[i]) return !1
                      } else {
                        if (n ? f > r[i] : f < r[i]) return !1;
                        f != r[i] && (d = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (n || i <= o) return !1;
                    d = !1, i--
                  } else {
                    if (i <= o || l < c != n) return !1;
                    d = !1
                  } else "s" != c && "n" != c && (d = !1, i--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (s = 1; s < r.length; s++) {
                var h = r[s];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
            },
            r = (r, a, o) => {
              var n = r[a];
              return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    n = (typeof o)[0];
                  if (a >= r.length) return "u" == n;
                  var s = r[a],
                    i = (typeof s)[0];
                  if (n != i) return "o" == n && "n" == i || "s" == i || "u" == n;
                  if ("o" != n && "u" != n && o != s) return o < s;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = u.I(t);
              return n && n.then ? n.then(e.bind(e, t, u.S[t], r, a, o)) : e(t, u.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var s = t && u.o(t, a) && r(t, a, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => u.e(100).then((() => () => u(99480))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([u.e(92), u.e(520), u.e(836), u.e(676)]).then((() => () => u(77444))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([u.e(92), u.e(408), u.e(61), u.e(304)]).then((() => () => u(8304))))),
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => u.e(784).then((() => () => u(79784))))),
              69844: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(88), u.e(288)]).then((() => () => u(40288))))),
              92372: () => a("default", "@rockstargames/modules-core-agegate", [1, "workspace:*"], (() => Promise.all([u.e(516), u.e(836), u.e(832)]).then((() => () => u(24))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(88), u.e(72)]).then((() => () => u(84832)))))
            },
            s = {
              108: [69844, 92372],
              128: [9860, 41272, 73660],
              664: [51664],
              676: [57013]
            },
            i = {};
          u.f.consumes = (e, t) => {
            u.o(s, e) && s[e].forEach((e => {
              if (u.o(o, e)) return t.push(o[e]);
              if (!i[e]) {
                var r = t => {
                  o[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete o[e], u.m[e] = r => {
                    throw delete u.c[e], t
                  }
                };
                try {
                  var s = n[e]();
                  s.then ? t.push(o[e] = s.then(r).catch(a)) : r(s)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              480: 0
            };
            u.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                108: 1,
                452: 1,
                676: 1,
                832: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = u.miniCssF(e),
                  o = u.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (s = r[a]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (o === e || o === t)) return s
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var s;
                      if ((o = (s = n[a]).getAttribute("data-href")) === e || o === t) return s
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var s = r && ("load" === r.type ? "missing" : r.type),
                        i = r && r.target && r.target.href || t,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      d.code = "CSS_CHUNK_LOAD_FAILED", d.type = s, d.request = i, n.parentNode && n.parentNode.removeChild(n), o(d)
                    }
                  }, n.href = t, document.head.appendChild(n)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            480: 0
          };
          u.f.j = (t, r) => {
            var a = u.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(128|61|664|792|836)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = u.p + u.u(t),
                s = new Error;
              u.l(n, (r => {
                if (u.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", s.name = "ChunkLoadError", s.type = o, s.request = n, a[1](s)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                s = r[1],
                i = r[2],
                d = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in s) u.o(s, a) && (u.m[a] = s[a]);
                i && i(u)
              }
              for (t && t(r); d < n.length; d++) o = n[d], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u(93824), u(47461)
      })())
    }
  }
}));