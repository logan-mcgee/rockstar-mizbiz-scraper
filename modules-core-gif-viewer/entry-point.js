var modules_core_gif_viewer;
(() => {
  "use strict";
  var e, r, t, n, a, o, i = {
      215: (e, r, t) => {
        var n = {
            "./index": () => Promise.all([t.e(822), t.e(859), t.e(662)]).then((() => () => t(662))),
            "./lazy": () => Promise.all([t.e(822), t.e(859), t.e(328)]).then((() => () => t(328))),
            "./tinaBlockTemplates": () => Promise.all([t.e(822), t.e(859), t.e(44)]).then((() => () => t(44)))
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
      525: (e, r, t) => {
        var n = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof components) return e();
          t.l(window.mfe.path("@rockstargames/components"), (t => {
            if ("undefined" != typeof components) return e();
            var a = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            n.message = "Loading script failed.\n(" + a + ": " + o + ")", n.name = "ScriptExternalLoadError", n.type = a, n.request = o, r(n)
          }), "components")
        })).then((() => components))
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
      489: (e, r, t) => {
        var n = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof tina) return e();
          t.l(window.mfe.path("@rockstargames/tina"), (t => {
            if ("undefined" != typeof tina) return e();
            var a = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            n.message = "Loading script failed.\n(" + a + ": " + o + ")", n.name = "ScriptExternalLoadError", n.type = a, n.request = o, r(n)
          }), "tina")
        })).then((() => tina))
      }
    },
    s = {};

  function l(e) {
    var r = s[e];
    if (void 0 !== r) return r.exports;
    var t = s[e] = {
      exports: {}
    };
    return i[e](t, t.exports, l), t.exports
  }
  l.m = i, l.c = s, l.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return l.d(r, {
      a: r
    }), r
  }, l.d = (e, r) => {
    for (var t in r) l.o(r, t) && !l.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: r[t]
    })
  }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((r, t) => (l.f[t](e, r), r)), [])), l.u = e => "js/" + {
    30: "9431e8ea09b520017b9e",
    44: "f874e9a269f8f4a92378",
    328: "77128b4b4c1801e492cc",
    490: "161185ba0b85f8175c55",
    662: "8c8a91e9d15cddafb59e",
    822: "48ab1b915706f714fa27",
    859: "039a7857209d8a90c0e8"
  } [e] + ".js", l.miniCssF = e => "css/" + {
    328: "93926393d68a405975eb",
    662: "8534ddbf090f8f018cbf"
  } [e] + ".css", l.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/modules-core-gif-viewer:", l.l = (t, n, a, o) => {
    if (e[t]) e[t].push(n);
    else {
      var i, s;
      if (void 0 !== a)
        for (var f = document.getElementsByTagName("script"), u = 0; u < f.length; u++) {
          var d = f[u];
          if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == r + a) {
            i = d;
            break
          }
        }
      i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", r + a), i.src = t), e[t] = [n];
      var p = (r, n) => {
          i.onerror = i.onload = null, clearTimeout(c);
          var a = e[t];
          if (delete e[t], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(n))), r) return r(n)
        },
        c = setTimeout(p.bind(null, void 0, {
          type: "timeout",
          target: i
        }), 12e4);
      i.onerror = p.bind(null, i.onerror), i.onload = p.bind(null, i.onload), s && document.head.appendChild(i)
    }
  }, l.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t = {
    44: [374, 616, 976],
    859: [859]
  }, n = {
    374: ["default", "./ui", 489],
    616: ["default", "./properties", 489],
    859: ["default", "./index", 171],
    976: ["default", "./index", 525]
  }, l.f.remotes = (e, r) => {
    l.o(t, e) && t[e].forEach((e => {
      var t = l.R;
      t || (t = []);
      var a = n[e];
      if (!(t.indexOf(a) >= 0)) {
        if (t.push(a), a.p) return r.push(a.p);
        var o = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
              throw r
            }, a.p = 0
          },
          i = (e, t, n, i, s, l) => {
            try {
              var f = e(t, n);
              if (!f || !f.then) return s(f, i, l);
              var u = f.then((e => s(e, i)), o);
              if (!l) return u;
              r.push(a.p = u)
            } catch (e) {
              o(e)
            }
          },
          s = (e, r, n) => i(r.get, a[1], t, 0, f, n),
          f = r => {
            a.p = 1, l.m[e] = e => {
              e.exports = r()
            }
          };
        i(l, a[2], 0, 0, ((e, r, t) => e ? i(l.I, a[0], 0, e, s, t) : o()), 1)
      }
    }))
  }, (() => {
    l.S = {};
    var e = {},
      r = {};
    l.I = (t, n) => {
      n || (n = []);
      var a = r[t];
      if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
        if (n.push(a), e[t]) return e[t];
        l.o(l.S, t) || (l.S[t] = {});
        var o = l.S[t],
          i = "@rockstargames/modules-core-gif-viewer",
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
              return r = "Initialization of sharing external failed: " + e, "undefined" != typeof console && console.warn && console.warn(r);
              var r
            };
            try {
              var a = l(e);
              if (!a) return;
              var o = e => e && e.init && e.init(l.S[t], n);
              if (a.then) return u.push(a.then(o, r));
              var i = o(a);
              if (i && i.then) return u.push(i.catch(r))
            } catch (e) {
              r(e)
            }
          },
          u = [];
        return "default" === t && (s("react-router-dom", "6.4.3", (() => Promise.all([l.e(490), l.e(822)]).then((() => () => l(490))))), s("react", "18.2.0", (() => l.e(30).then((() => () => l(30))))), f(171), f(525), f(489)), u.length ? e[t] = Promise.all(u).then((() => e[t] = 1)) : e[t] = 1
      }
    }
  })(), (() => {
    var e;
    l.g.importScripts && (e = l.g.location + "");
    var r = l.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      t.length && (e = t[t.length - 1].src)
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
            var f, u, d = s < t.length ? (typeof t[s])[0] : "";
            if (i >= n.length || "o" == (u = (typeof(f = n[i]))[0])) return !l || ("u" == d ? s > a && !o : "" == d != o);
            if ("u" == u) {
              if (!l || "u" != d) return !1
            } else if (l)
              if (d == u)
                if (s <= a) {
                  if (f != t[s]) return !1
                } else {
                  if (o ? f > t[s] : f < t[s]) return !1;
                  f != t[s] && (l = !1)
                }
            else if ("s" != d && "n" != d) {
              if (o || s <= a) return !1;
              l = !1, s--
            } else {
              if (s <= a || u < d != o) return !1;
              l = !1
            } else "s" != d && "n" != d && (l = !1, s--)
          }
        }
        var p = [],
          c = p.pop.bind(p);
        for (i = 1; i < t.length; i++) {
          var h = t[i];
          p.push(1 == h ? c() | c() : 2 == h ? c() & c() : h ? r(h, n) : !c())
        }
        return !!c()
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
        var o = l.I(r);
        return o && o.then ? o.then(e.bind(e, r, l.S[r], t, n, a)) : e(r, l.S[r], t, n, a)
      })(((e, r, n, a, o) => {
        var i = r && l.o(r, n) && t(r, n, a);
        return i ? (e => (e.loaded = 1, e.get()))(i) : o()
      })),
      a = {},
      o = {
        822: () => n("default", "react", [1, 18, 2, 0], (() => l.e(30).then((() => () => l(30))))),
        364: () => n("default", "react-router-dom", [1, 6, 4, 1], (() => l.e(490).then((() => () => l(490)))))
      },
      i = {
        328: [364],
        822: [822]
      };
    l.f.consumes = (e, r) => {
      l.o(i, e) && i[e].forEach((e => {
        if (l.o(a, e)) return r.push(a[e]);
        var t = r => {
            a[e] = 0, l.m[e] = t => {
              delete l.c[e], t.exports = r()
            }
          },
          n = r => {
            delete a[e], l.m[e] = t => {
              throw delete l.c[e], r
            }
          };
        try {
          var i = o[e]();
          i.then ? r.push(a[e] = i.then(t).catch(n)) : t(i)
        } catch (e) {
          n(e)
        }
      }))
    }
  })(), a = e => new Promise(((r, t) => {
    var n = l.miniCssF(e),
      a = l.p + n;
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
    ((e, r, t, n) => {
      var a = document.createElement("link");
      a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = o => {
        if (a.onerror = a.onload = null, "load" === o.type) t();
        else {
          var i = o && ("load" === o.type ? "missing" : o.type),
            s = o && o.target && o.target.href || r,
            l = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
          l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = s, a.parentNode.removeChild(a), n(l)
        }
      }, a.href = r, document.head.appendChild(a)
    })(e, a, r, t)
  })), o = {
    370: 0
  }, l.f.miniCss = (e, r) => {
    o[e] ? r.push(o[e]) : 0 !== o[e] && {
      328: 1,
      662: 1
    } [e] && r.push(o[e] = a(e).then((() => {
      o[e] = 0
    }), (r => {
      throw delete o[e], r
    })))
  }, (() => {
    var e = {
      370: 0
    };
    l.f.j = (r, t) => {
      var n = l.o(e, r) ? e[r] : void 0;
      if (0 !== n)
        if (n) t.push(n[2]);
        else if (/^8(22|59)$/.test(r)) e[r] = 0;
      else {
        var a = new Promise(((t, a) => n = e[r] = [t, a]));
        t.push(n[2] = a);
        var o = l.p + l.u(r),
          i = new Error;
        l.l(o, (t => {
          if (l.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
            var a = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            i.message = "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
          }
        }), "chunk-" + r, r)
      }
    };
    var r = (r, t) => {
        var n, a, o = t[0],
          i = t[1],
          s = t[2],
          f = 0;
        if (o.some((r => 0 !== e[r]))) {
          for (n in i) l.o(i, n) && (l.m[n] = i[n]);
          s && s(l)
        }
        for (r && r(t); f < o.length; f++) a = o[f], l.o(e, a) && e[a] && e[a][0](), e[a] = 0
      },
      t = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var f = l(215);
  modules_core_gif_viewer = f
})();