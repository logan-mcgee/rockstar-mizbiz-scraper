var modules_core_sc_user;
(() => {
  "use strict";
  var e, r, t, n, a = {
      512: (e, r, t) => {
        var n = {
            "./index": () => Promise.all([t.e(531), t.e(929), t.e(804), t.e(958)]).then((() => () => t(958))),
            "./providers": () => Promise.all([t.e(531), t.e(929), t.e(804), t.e(330)]).then((() => () => t(330))),
            "./graph/policies": () => Promise.all([t.e(562), t.e(929), t.e(570)]).then((() => () => t(487)))
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
      171: (e, r, t) => {
        var n = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof graph_client) return e();
          t.l(window.mfe.path("@rockstargames/graph-client"), (t => {
            if ("undefined" != typeof graph_client) return e();
            var a = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            n.message = "Loading script failed.\n(" + a + ": " + o + ")", n.name = "ScriptExternalLoadError", n.type = a, n.request = o, r(n)
          }), "graph_client")
        })).then((() => graph_client))
      },
      810: (e, r, t) => {
        var n = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof utils) return e();
          t.l(window.mfe.path("@rockstargames/utils"), (t => {
            if ("undefined" != typeof utils) return e();
            var a = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            n.message = "Loading script failed.\n(" + a + ": " + o + ")", n.name = "ScriptExternalLoadError", n.type = a, n.request = o, r(n)
          }), "utils")
        })).then((() => utils))
      }
    },
    o = {};

  function i(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var t = o[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return a[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
  }
  i.m = a, i.c = o, i.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return i.d(r, {
      a: r
    }), r
  }, i.d = (e, r) => {
    for (var t in r) i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: r[t]
    })
  }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((r, t) => (i.f[t](e, r), r)), [])), i.u = e => "js/" + {
    330: "3d920abfb5965cc3e535",
    531: "2f29ef523d1d9a4095f9",
    562: "67308f89fb295d4150ff",
    570: "1984a427637091ebccd6",
    769: "50200822ba36b01477d3",
    804: "f3c5c1c6532622ff5505",
    929: "b73f12c2b9f047694cc5",
    958: "276d95bdb852ae88913d"
  } [e] + ".js", i.miniCssF = e => "css/c6e27426b1ced03efa6f.css", i.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/modules-core-sc-user:", i.l = (t, n, a, o) => {
    if (e[t]) e[t].push(n);
    else {
      var s, l;
      if (void 0 !== a)
        for (var u = document.getElementsByTagName("script"), f = 0; f < u.length; f++) {
          var d = u[f];
          if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == r + a) {
            s = d;
            break
          }
        }
      s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", r + a), s.src = t), e[t] = [n];
      var c = (r, n) => {
          s.onerror = s.onload = null, clearTimeout(p);
          var a = e[t];
          if (delete e[t], s.parentNode && s.parentNode.removeChild(s), a && a.forEach((e => e(n))), r) return r(n)
        },
        p = setTimeout(c.bind(null, void 0, {
          type: "timeout",
          target: s
        }), 12e4);
      s.onerror = c.bind(null, s.onerror), s.onload = c.bind(null, s.onload), l && document.head.appendChild(s)
    }
  }, i.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), t = {
    804: [859],
    929: [929],
    958: [331]
  }, n = {
    331: ["default", "./gtm", 810],
    859: ["default", "./index", 171],
    929: ["default", "./index", 810]
  }, i.f.remotes = (e, r) => {
    i.o(t, e) && t[e].forEach((e => {
      var t = i.R;
      t || (t = []);
      var a = n[e];
      if (!(t.indexOf(a) >= 0)) {
        if (t.push(a), a.p) return r.push(a.p);
        var o = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), i.m[e] = () => {
              throw r
            }, a.p = 0
          },
          s = (e, t, n, i, s, l) => {
            try {
              var u = e(t, n);
              if (!u || !u.then) return s(u, i, l);
              var f = u.then((e => s(e, i)), o);
              if (!l) return f;
              r.push(a.p = f)
            } catch (e) {
              o(e)
            }
          },
          l = (e, r, n) => s(r.get, a[1], t, 0, u, n),
          u = r => {
            a.p = 1, i.m[e] = e => {
              e.exports = r()
            }
          };
        s(i, a[2], 0, 0, ((e, r, t) => e ? s(i.I, a[0], 0, e, l, t) : o()), 1)
      }
    }))
  }, (() => {
    i.S = {};
    var e = {},
      r = {};
    i.I = (t, n) => {
      n || (n = []);
      var a = r[t];
      if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
        if (n.push(a), e[t]) return e[t];
        i.o(i.S, t) || (i.S[t] = {});
        var o = i.S[t],
          s = "@rockstargames/modules-core-sc-user",
          l = e => {
            var r = e => {
              return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
              var r
            };
            try {
              var a = i(e);
              if (!a) return;
              var o = e => e && e.init && e.init(i.S[t], n);
              if (a.then) return u.push(a.then(o, r));
              var s = o(a);
              if (s && s.then) return u.push(s.catch(r))
            } catch (e) {
              r(e)
            }
          },
          u = [];
        return "default" === t && (((e, r, t, n) => {
          var a = o[e] = o[e] || {},
            l = a[r];
          (!l || !l.loaded && (1 != !l.eager ? n : s > l.from)) && (a[r] = {
            get: () => i.e(769).then((() => () => i(769))),
            from: s,
            eager: !1
          })
        })("react", "18.2.0"), l(810), l(171)), u.length ? e[t] = Promise.all(u).then((() => e[t] = 1)) : e[t] = 1
      }
    }
  })(), (() => {
    var e;
    i.g.importScripts && (e = i.g.location + "");
    var r = i.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      if (t.length)
        for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
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
          for (var i = 0, s = 1, l = !0;; s++, i++) {
            var u, f, d = s < t.length ? (typeof t[s])[0] : "";
            if (i >= n.length || "o" == (f = (typeof(u = n[i]))[0])) return !l || ("u" == d ? s > a && !o : "" == d != o);
            if ("u" == f) {
              if (!l || "u" != d) return !1
            } else if (l)
              if (d == f)
                if (s <= a) {
                  if (u != t[s]) return !1
                } else {
                  if (o ? u > t[s] : u < t[s]) return !1;
                  u != t[s] && (l = !1)
                }
            else if ("s" != d && "n" != d) {
              if (o || s <= a) return !1;
              l = !1, s--
            } else {
              if (s <= a || f < d != o) return !1;
              l = !1
            } else "s" != d && "n" != d && (l = !1, s--)
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
        var o = i.I(r);
        return o && o.then ? o.then(e.bind(e, r, i.S[r], t, n, a)) : e(r, i.S[r], t, n, a)
      })(((e, r, n, a, o) => {
        var s = r && i.o(r, n) && t(r, n, a);
        return s ? (e => (e.loaded = 1, e.get()))(s) : o()
      })),
      a = {},
      o = {
        822: () => n("default", "react", [1, 18, 2, 0], (() => i.e(769).then((() => () => i(769)))))
      },
      s = {
        804: [822]
      };
    i.f.consumes = (e, r) => {
      i.o(s, e) && s[e].forEach((e => {
        if (i.o(a, e)) return r.push(a[e]);
        var t = r => {
            a[e] = 0, i.m[e] = t => {
              delete i.c[e], t.exports = r()
            }
          },
          n = r => {
            delete a[e], i.m[e] = t => {
              throw delete i.c[e], r
            }
          };
        try {
          var s = o[e]();
          s.then ? r.push(a[e] = s.then(t).catch(n)) : t(s)
        } catch (e) {
          n(e)
        }
      }))
    }
  })(), (() => {
    if ("undefined" != typeof document) {
      var e = {
        654: 0
      };
      i.f.miniCss = (r, t) => {
        e[r] ? t.push(e[r]) : 0 !== e[r] && {
          958: 1
        } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
          var n = i.miniCssF(e),
            a = i.p + n;
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
                  l = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = s, o.parentNode.removeChild(o), a(l)
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
      654: 0
    };
    i.f.j = (r, t) => {
      var n = i.o(e, r) ? e[r] : void 0;
      if (0 !== n)
        if (n) t.push(n[2]);
        else if (/^(804|929)$/.test(r)) e[r] = 0;
      else {
        var a = new Promise(((t, a) => n = e[r] = [t, a]));
        t.push(n[2] = a);
        var o = i.p + i.u(r),
          s = new Error;
        i.l(o, (t => {
          if (i.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
            var a = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            s.message = "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")", s.name = "ChunkLoadError", s.type = a, s.request = o, n[1](s)
          }
        }), "chunk-" + r, r)
      }
    };
    var r = (r, t) => {
        var n, a, o = t[0],
          s = t[1],
          l = t[2],
          u = 0;
        if (o.some((r => 0 !== e[r]))) {
          for (n in s) i.o(s, n) && (i.m[n] = s[n]);
          l && l(i)
        }
        for (r && r(t); u < o.length; u++) a = o[u], i.o(e, a) && e[a] && e[a][0](), e[a] = 0
      },
      t = self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var s = i(512);
  modules_core_sc_user = s
})();