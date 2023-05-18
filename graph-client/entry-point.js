var graph_client;
(() => {
  "use strict";
  var e, r, t, n, a, o, i = {
      8489: (e, r, t) => {
        var n = {
            "./bootstrap": () => t.e(215).then((() => () => t(9215))),
            "./index": () => Promise.all([t.e(525), t.e(57), t.e(736), t.e(543)]).then((() => () => t(7543))),
            "./operations/fragments/": () => t.e(824).then((() => () => t(9824))),
            "./operations/fragments/newswire-post.graphql": () => t.e(499).then((() => () => t(3499))),
            "./operations/fragments/paging.graphql": () => t.e(612).then((() => () => t(1612))),
            "./operations/fragments/video-fields.graphql": () => t.e(410).then((() => () => t(1410))),
            "./operations/queries": () => t.e(25).then((() => () => t(5025))),
            "./reactive": () => Promise.all([t.e(525), t.e(736), t.e(280)]).then((() => () => t(280)))
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
      }
    },
    f = {};

  function s(e) {
    var r = f[e];
    if (void 0 !== r) return r.exports;
    var t = f[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return i[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
  }
  s.m = i, s.c = f, s.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return s.d(r, {
      a: r
    }), r
  }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(t, n) {
    if (1 & n && (t = this(t)), 8 & n) return t;
    if ("object" == typeof t && t) {
      if (4 & n && t.__esModule) return t;
      if (16 & n && "function" == typeof t.then) return t
    }
    var a = Object.create(null);
    s.r(a);
    var o = {};
    e = e || [null, r({}), r([]), r(r)];
    for (var i = 2 & n && t;
      "object" == typeof i && !~e.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => t[e]));
    return o.default = () => t, s.d(a, o), a
  }, s.d = (e, r) => {
    for (var t in r) s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: r[t]
    })
  }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((r, t) => (s.f[t](e, r), r)), [])), s.u = e => "js/" + {
    25: "98c026e8dd033579cb45",
    57: "7e9d927ec9b40a2872e1",
    215: "f76b3e56869273321cc6",
    224: "121a076d9b5574833711",
    280: "a8ac233a8a91ddebb84d",
    410: "0499abfea735d288e9e0",
    499: "c8d1a625c2c83de86b8f",
    525: "957aff2398a6aea97e7f",
    543: "18e8de3fd78fcaf666c8",
    612: "4a58662d2b1489314478",
    724: "5acacfd788e48ebd3e6c",
    736: "b6bdbd90c96efe9128c2",
    769: "8180942ff1762685b6a7",
    824: "5df58c3ff0cbf606f3bf"
  } [e] + ".js", s.miniCssF = e => {}, s.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t = {}, n = "@rockstargames/graph-client:", s.l = (e, r, a, o) => {
    if (t[e]) t[e].push(r);
    else {
      var i, f;
      if (void 0 !== a)
        for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
          var u = c[l];
          if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == n + a) {
            i = u;
            break
          }
        }
      i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", n + a), i.src = e), t[e] = [r];
      var d = (r, n) => {
          i.onerror = i.onload = null, clearTimeout(p);
          var a = t[e];
          if (delete t[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(n))), r) return r(n)
        },
        p = setTimeout(d.bind(null, void 0, {
          type: "timeout",
          target: i
        }), 12e4);
      i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), f && document.head.appendChild(i)
    }
  }, s.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), a = {}, o = {}, s.f.remotes = (e, r) => {
    s.o(a, e) && a[e].forEach((e => {
      var t = s.R;
      t || (t = []);
      var n = o[e];
      if (!(t.indexOf(n) >= 0)) {
        if (t.push(n), n.p) return r.push(n.p);
        var a = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), s.m[e] = () => {
              throw r
            }, n.p = 0
          },
          i = (e, t, o, i, f, s) => {
            try {
              var c = e(t, o);
              if (!c || !c.then) return f(c, i, s);
              var l = c.then((e => f(e, i)), a);
              if (!s) return l;
              r.push(n.p = l)
            } catch (e) {
              a(e)
            }
          },
          f = (e, r, a) => i(r.get, n[1], t, 0, c, a),
          c = r => {
            n.p = 1, s.m[e] = e => {
              e.exports = r()
            }
          };
        i(s, n[2], 0, 0, ((e, r, t) => e ? i(s.I, n[0], 0, e, f, t) : a()), 1)
      }
    }))
  }, (() => {
    s.S = {};
    var e = {},
      r = {};
    s.I = (t, n) => {
      n || (n = []);
      var a = r[t];
      if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
        if (n.push(a), e[t]) return e[t];
        s.o(s.S, t) || (s.S[t] = {});
        var o = s.S[t],
          i = "@rockstargames/graph-client",
          f = [];
        return "default" === t && ((e, r, t, n) => {
          var a = o[e] = o[e] || {},
            f = a[r];
          (!f || !f.loaded && (1 != !f.eager ? n : i > f.from)) && (a[r] = {
            get: () => s.e(769).then((() => () => s(1769))),
            from: i,
            eager: !1
          })
        })("react", "18.2.0"), e[t] = f.length ? Promise.all(f).then((() => e[t] = 1)) : 1
      }
    }
  })(), (() => {
    var e;
    s.g.importScripts && (e = s.g.location + "");
    var r = s.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      if (t.length)
        for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
          for (var i = 0, f = 1, s = !0;; f++, i++) {
            var c, l, u = f < t.length ? (typeof t[f])[0] : "";
            if (i >= n.length || "o" == (l = (typeof(c = n[i]))[0])) return !s || ("u" == u ? f > a && !o : "" == u != o);
            if ("u" == l) {
              if (!s || "u" != u) return !1
            } else if (s)
              if (u == l)
                if (f <= a) {
                  if (c != t[f]) return !1
                } else {
                  if (o ? c > t[f] : c < t[f]) return !1;
                  c != t[f] && (s = !1)
                }
            else if ("s" != u && "n" != u) {
              if (o || f <= a) return !1;
              s = !1, f--
            } else {
              if (f <= a || l < u != o) return !1;
              s = !1
            } else "s" != u && "n" != u && (s = !1, f--)
          }
        }
        var d = [],
          p = d.pop.bind(d);
        for (i = 1; i < t.length; i++) {
          var h = t[i];
          d.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
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
              f = (typeof i)[0];
            if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
            if ("o" != o && "u" != o && a != i) return a < i;
            n++
          }
        })(t, n) ? t : n), 0)) && o[n]
      },
      n = (e => function(r, t, n, a) {
        var o = s.I(r);
        return o && o.then ? o.then(e.bind(e, r, s.S[r], t, n, a)) : e(r, s.S[r], t, n, a)
      })(((e, r, n, a, o) => {
        var i = r && s.o(r, n) && t(r, n, a);
        return i ? (e => (e.loaded = 1, e.get()))(i) : o()
      })),
      a = {},
      o = {
        4736: () => n("default", "react", [2, 18, 2, 0], (() => s.e(769).then((() => () => s(1769)))))
      },
      i = {
        736: [4736]
      };
    s.f.consumes = (e, r) => {
      s.o(i, e) && i[e].forEach((e => {
        if (s.o(a, e)) return r.push(a[e]);
        var t = r => {
            a[e] = 0, s.m[e] = t => {
              delete s.c[e], t.exports = r()
            }
          },
          n = r => {
            delete a[e], s.m[e] = t => {
              throw delete s.c[e], r
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
  })(), (() => {
    var e = {
      546: 0
    };
    s.f.j = (r, t) => {
      var n = s.o(e, r) ? e[r] : void 0;
      if (0 !== n)
        if (n) t.push(n[2]);
        else if (736 != r) {
        var a = new Promise(((t, a) => n = e[r] = [t, a]));
        t.push(n[2] = a);
        var o = s.p + s.u(r),
          i = new Error;
        s.l(o, (t => {
          if (s.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
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
          f = t[2],
          c = 0;
        if (o.some((r => 0 !== e[r]))) {
          for (n in i) s.o(i, n) && (s.m[n] = i[n]);
          f && f(s)
        }
        for (r && r(t); c < o.length; c++) a = o[c], s.o(e, a) && e[a] && e[a][0](), e[a] = 0
      },
      t = self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var c = s(8489);
  graph_client = c
})();