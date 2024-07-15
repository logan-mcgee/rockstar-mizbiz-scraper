! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "42c0d088-1c70-49f7-8a60-0c8b0762ad9b", e._sentryDebugIdIdentifier = "sentry-dbid-42c0d088-1c70-49f7-8a60-0c8b0762ad9b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    a = {},
    o = {},
    n = {},
    s = {},
    d = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
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
        o[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        n[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        s[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        d[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, f, c, l = {
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
                for (var a = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, n = a.length; o !== r && n >= 0;) "/" === a[--n] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var s = a.slice(0, n + 1);
                return t.protocol + "//" + t.host + s
              };
              Number.isInteger
            },
            87736: (e, r, t) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([t.e(664), t.e(612), t.e(200), t.e(824)]).then((() => () => t(64824)))
                },
                o = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                n = (e, r) => {
                  if (t.S) {
                    var a = "default",
                      o = t.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[a] = e, t.I(a, r)
                  }
                };
              t.d(r, {
                get: () => o,
                init: () => n
              })
            },
            33864: e => {
              "use strict";
              e.exports = t
            },
            25358: e => {
              "use strict";
              e.exports = a
            },
            81128: e => {
              "use strict";
              e.exports = o
            },
            14472: e => {
              "use strict";
              e.exports = n
            },
            88428: e => {
              "use strict";
              e.exports = s
            },
            9344: e => {
              "use strict";
              e.exports = d
            }
          },
          u = {};

        function p(e) {
          var r = u[e];
          if (void 0 !== r) return r.exports;
          var t = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(t.exports, t, t.exports, p), t.loaded = !0, t.exports
        }
        return p.m = l, p.c = u, p.y = r, p.amdO = {}, p.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return p.d(r, {
            a: r
          }), r
        }, p.d = (e, r) => {
          for (var t in r) p.o(r, t) && !p.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((r, t) => (p.f[t](e, r), r)), [])), p.u = e => "js/" + {
          61: "a8fd763b6e67c1fcdaa02a1a167ac77e",
          88: "8c76a29f382fa4b52712e80426ec2aab",
          100: "e0092c11bfd9259d4e2c35033e70cde9",
          150: "5bc8c11e37b35239db3bde22d8509c30",
          163: "4ec5dbeda2ca0eebb87de955c9195546",
          168: "50fcec221f09ad603be9dbb9183391b0",
          200: "548594dc8038b2b92a047b3809182a00",
          240: "1daf6546abd25ba8f29df4c3d343cd99",
          288: "b4d29f2b0635feeed5ec01ce4563192c",
          304: "d3602d87ffc9c75e701b605da70c1cbc",
          312: "9dca963cf2cc9feb8083d11a8f4ae4ec",
          408: "c46ec39c786cf1ec0bba249a5ca15d62",
          544: "2163dbd8a4118e2292f9a714bf9a0390",
          612: "26717203ab9fb0e68d37df781b95018c",
          664: "8f7679e65c8d4a010368fbe0f94285d7",
          772: "0ceeb8e5d526b1d3403b35a8a8d13ef2",
          784: "48fca109ff5353de09beb427aaf092bc",
          824: "6987d4df2ff2b2d2c45f9165602b0ada",
          828: "be90a4a05bb4c8b86d050756b69ffe66",
          832: "ba8186a9fea12c4fa9d1386030786d65",
          836: "40239866af47fde90a2f5000badbd47b",
          852: "d009a87642b3c2384c7bf4201959150e",
          924: "ecc2651f29458059b521ebf896996ffd",
          968: "9117ae58badaded1087801f0ffd7ba88"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          163: "883088bdc563779838a6137df3754da7",
          544: "883088bdc563779838a6137df3754da7",
          824: "8855acb3c4eb506efc5f4c18f4dd990b",
          852: "c4b39d260502bf2193fa3d83408c59f7"
        } [e] + ".css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, i = "@rockstargames/sites-red-dead-online:", p.l = (r, t, a, o) => {
          if (e[r]) e[r].push(t);
          else {
            var n, s;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var c = d[f];
                if (c.getAttribute("src") == r || c.getAttribute("data-webpack") == i + a) {
                  n = c;
                  break
                }
              }
            n || (s = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, p.nc && n.setAttribute("nonce", p.nc), n.setAttribute("data-webpack", i + a), n.src = r), e[r] = [t];
            var l = (t, a) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var o = e[r];
                if (delete e[r], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), t) return t(a)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), s && document.head.appendChild(n)
          }
        }, p.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, p.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          61: [3061],
          612: [33052, 45792],
          824: [1532, 53264, 84644, 91336],
          836: [42836],
          852: [1740, 28540, 45652, 73784, 95356]
        }, c = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          33052: ["default", "./index", 33864],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          53264: ["default", "./operations/fragments/video2-fields.graphql", 33864],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          84644: ["default", "./index", 14472],
          91336: ["default", "./NewswireArticle", 25358],
          95356: ["default", "./helpers", 88428]
        }, p.f.remotes = (e, r) => {
          p.o(f, e) && f[e].forEach((e => {
            var t = p.R;
            t || (t = []);
            var a = c[e];
            if (!(t.indexOf(a) >= 0)) {
              if (t.push(a), a.p) return r.push(a.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), p.m[e] = () => {
                    throw r
                  }, a.p = 0
                },
                n = (e, t, n, s, d, i) => {
                  try {
                    var f = e(t, n);
                    if (!f || !f.then) return d(f, s, i);
                    var c = f.then((e => d(e, s)), o);
                    if (!i) return c;
                    r.push(a.p = c)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, r, o) => n(r.get, a[1], t, 0, d, o),
                d = r => {
                  a.p = 1, p.m[e] = e => {
                    e.exports = r()
                  }
                };
              n(p, a[2], 0, 0, ((e, r, t) => e ? n(p.I, a[0], 0, e, s, t) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            r = {};
          p.I = (t, a) => {
            a || (a = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[t]) return e[t];
              p.o(p.S, t) || (p.S[t] = {});
              var n = p.S[t],
                s = "@rockstargames/sites-red-dead-online",
                d = (e, r, t, a) => {
                  var o = n[e] = n[e] || {},
                    d = o[r];
                  (!d || !d.loaded && (!a != !d.eager ? a : s > d.from)) && (o[r] = {
                    get: t,
                    from: s,
                    eager: !!a
                  })
                },
                i = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(p.S[t], a);
                    if (o.then) return f.push(o.then(n, r));
                    var s = n(o);
                    if (s && s.then) return f.push(s.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                f = [];
              return "default" === t && (d("@rockstargames/components", "1.14.0", (() => Promise.all([p.e(968), p.e(784), p.e(664), p.e(836), p.e(612), p.e(852), p.e(200), p.e(240)]).then((() => () => p(65596))))), d("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(408), p.e(664), p.e(61), p.e(924)]).then((() => () => p(8304))))), d("@rockstargames/modules-core-feedback", "1.0.48", (() => Promise.all([p.e(664), p.e(836), p.e(612), p.e(828), p.e(544)]).then((() => () => p(39544))))), d("hammerjs", "2.0.8", (() => p.e(772).then((() => () => p(65772))))), d("react-focus-lock", "2.9.6", (() => Promise.all([p.e(968), p.e(312), p.e(664)]).then((() => () => p(90312))))), d("react-router-dom", "6.17.0", (() => Promise.all([p.e(168), p.e(150), p.e(664)]).then((() => () => p(56150))))), d("react-router-dom", "6.17.0", (() => Promise.all([p.e(168), p.e(88), p.e(832), p.e(664)]).then((() => () => p(84832))))), d("react-router-dom", "6.17.0", (() => Promise.all([p.e(168), p.e(88), p.e(288), p.e(664)]).then((() => () => p(40288))))), d("react", "18.2.0", (() => p.e(100).then((() => () => p(99480))))), i(33864), i(9344), i(25358), i(14472), i(81128), i(88428)), f.length ? e[t] = Promise.all(f).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var r = p.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && !e;) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
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
                var o = t[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var s = 0, d = 1, i = !0;; d++, s++) {
                  var f, c, l = d < t.length ? (typeof t[d])[0] : "";
                  if (s >= a.length || "o" == (c = (typeof(f = a[s]))[0])) return !i || ("u" == l ? d > o && !n : "" == l != n);
                  if ("u" == c) {
                    if (!i || "u" != l) return !1
                  } else if (i)
                    if (l == c)
                      if (d <= o) {
                        if (f != t[d]) return !1
                      } else {
                        if (n ? f > t[d] : f < t[d]) return !1;
                        f != t[d] && (i = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || d <= o) return !1;
                    i = !1, d--
                  } else {
                    if (d <= o || c < l != n) return !1;
                    i = !1
                  } else "s" != l && "n" != l && (i = !1, d--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (s = 1; s < t.length; s++) {
                var h = t[s];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
              }
              return !!p()
            },
            t = (t, a, o) => {
              var n = t[a];
              return (a = Object.keys(n).reduce(((t, a) => !r(o, a) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var a = 0;;) {
                  if (a >= r.length) return a < t.length && "u" != (typeof t[a])[0];
                  var o = r[a],
                    n = (typeof o)[0];
                  if (a >= t.length) return "u" == n;
                  var s = t[a],
                    d = (typeof s)[0];
                  if (n != d) return "o" == n && "n" == d || "s" == d || "u" == n;
                  if ("o" != n && "u" != n && o != s) return o < s;
                  a++
                }
              })(t, a) ? t : a), 0)) && n[a]
            },
            a = (e => function(r, t, a, o) {
              var n = p.I(r);
              return n && n.then ? n.then(e.bind(e, r, p.S[r], t, a, o)) : e(r, p.S[r], t, a, o)
            })(((e, r, a, o, n) => {
              var s = r && p.o(r, a) && t(r, a, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => p.e(100).then((() => () => p(99480))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([p.e(968), p.e(784), p.e(836), p.e(852)]).then((() => () => p(65596))))),
              36960: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([p.e(968), p.e(312)]).then((() => () => p(90312))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([p.e(408), p.e(61), p.e(304)]).then((() => () => p(8304))))),
              97860: () => a("default", "hammerjs", [1, 2, 0, 8], (() => p.e(772).then((() => () => p(65772))))),
              3872: () => a("default", "@rockstargames/modules-core-feedback", [1, "workspace:*"], (() => Promise.all([p.e(836), p.e(828), p.e(163)]).then((() => () => p(39544))))),
              69844: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(168), p.e(88), p.e(288)]).then((() => () => p(40288))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(168), p.e(88), p.e(832)]).then((() => () => p(84832))))),
              8828: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(168), p.e(150)]).then((() => () => p(56150)))))
            },
            s = {
              200: [9860, 36960, 41272, 97860],
              664: [51664],
              824: [3872, 69844],
              828: [8828],
              852: [57013]
            },
            d = {};
          p.f.consumes = (e, r) => {
            p.o(s, e) && s[e].forEach((e => {
              if (p.o(o, e)) return r.push(o[e]);
              if (!d[e]) {
                var t = r => {
                  o[e] = 0, p.m[e] = t => {
                    delete p.c[e], t.exports = r()
                  }
                };
                d[e] = !0;
                var a = r => {
                  delete o[e], p.m[e] = t => {
                    throw delete p.c[e], r
                  }
                };
                try {
                  var s = n[e]();
                  s.then ? r.push(o[e] = s.then(t).catch(a)) : t(s)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              352: 0
            };
            p.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                163: 1,
                544: 1,
                824: 1,
                852: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var a = p.miniCssF(e),
                  o = p.p + a;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                      var o = (s = t[a]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (o === e || o === r)) return s
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var s;
                      if ((o = (s = n[a]).getAttribute("data-href")) === e || o === r) return s
                    }
                  })(a, o)) return r();
                ((e, r, t, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = t => {
                    if (n.onerror = n.onload = null, "load" === t.type) a();
                    else {
                      var s = t && ("load" === t.type ? "missing" : t.type),
                        d = t && t.target && t.target.href || r,
                        i = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      i.code = "CSS_CHUNK_LOAD_FAILED", i.type = s, i.request = d, n.parentNode && n.parentNode.removeChild(n), o(i)
                    }
                  }, n.href = r, document.head.appendChild(n)
                })(e, o, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            352: 0
          };
          p.f.j = (r, t) => {
            var a = p.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^(6(1|12|64)|200|828|836)$/.test(r)) e[r] = 0;
            else {
              var o = new Promise(((t, o) => a = e[r] = [t, o]));
              t.push(a[2] = o);
              var n = p.p + p.u(r),
                s = new Error;
              p.l(n, (t => {
                if (p.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    n = t && t.target && t.target.src;
                  s.message = "Loading chunk " + r + " failed.\n(" + o + ": " + n + ")", s.name = "ChunkLoadError", s.type = o, s.request = n, a[1](s)
                }
              }), "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var a, o, n = t[0],
                s = t[1],
                d = t[2],
                i = 0;
              if (n.some((r => 0 !== e[r]))) {
                for (a in s) p.o(s, a) && (p.m[a] = s[a]);
                d && d(p)
              }
              for (r && r(t); i < n.length; i++) o = n[i], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), p.nc = void 0, p(93824), p(87736)
      })())
    }
  }
}));