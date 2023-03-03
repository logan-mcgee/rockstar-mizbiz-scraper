var graph_client;
(() => {
  "use strict";
  var e, r, t, n, a, o, i = {
      6463: (e, r, t) => {
        var n = {
            "./bootstrap": () => t.e(386).then((() => () => t(7386))),
            "./index": () => Promise.all([t.e(947), t.e(282), t.e(450), t.e(736), t.e(343)]).then((() => () => t(3343))),
            "./operations/fragments/": () => t.e(152).then((() => () => t(4152))),
            "./operations/fragments/newswire-post.graphql": () => t.e(709).then((() => () => t(6709))),
            "./operations/fragments/paging.graphql": () => t.e(218).then((() => () => t(7218))),
            "./operations/fragments/video-fields.graphql": () => t.e(913).then((() => () => t(5913))),
            "./operations/queries": () => t.e(535).then((() => () => t(2535))),
            "./providers": () => Promise.all([t.e(947), t.e(282), t.e(736), t.e(140)]).then((() => () => t(2140))),
            "./reactive": () => Promise.all([t.e(947), t.e(736), t.e(276)]).then((() => () => t(9276)))
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
    140: "4b3804ab77aa5b317f14",
    152: "edcab391c80243d4494b",
    218: "87e462493ff34a8ec82b",
    276: "53b47865c1451a3ae04a",
    282: "43641274a51329fc965e",
    343: "fcc9069e6018776f278e",
    386: "eec702da19072b558589",
    450: "526fc68bec421b362cfa",
    463: "5665c73c2548012291e7",
    503: "7daee8489eff9028e00e",
    535: "da1a1ef9328bd5501672",
    661: "75a8b379162807118928",
    709: "129f72a70aab2b82e3ed",
    736: "ef36f1f2ad8d919c69a9",
    913: "f23d084d893746065aa4",
    947: "43514003dd193a8aafc4"
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
        for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
          var u = l[c];
          if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == n + a) {
            i = u;
            break
          }
        }
      i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", n + a), i.src = e), t[e] = [r];
      var p = (r, n) => {
          i.onerror = i.onload = null, clearTimeout(d);
          var a = t[e];
          if (delete t[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(n))), r) return r(n)
        },
        d = setTimeout(p.bind(null, void 0, {
          type: "timeout",
          target: i
        }), 12e4);
      i.onerror = p.bind(null, i.onerror), i.onload = p.bind(null, i.onload), f && document.head.appendChild(i)
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
              var l = e(t, o);
              if (!l || !l.then) return f(l, i, s);
              var c = l.then((e => f(e, i)), a);
              if (!s) return c;
              r.push(n.p = c)
            } catch (e) {
              a(e)
            }
          },
          f = (e, r, a) => i(r.get, n[1], t, 0, l, a),
          l = r => {
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
            get: () => s.e(661).then((() => () => s(5661))),
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
      t.length && (e = t[t.length - 1].src)
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
            var l, c, u = f < t.length ? (typeof t[f])[0] : "";
            if (i >= n.length || "o" == (c = (typeof(l = n[i]))[0])) return !s || ("u" == u ? f > a && !o : "" == u != o);
            if ("u" == c) {
              if (!s || "u" != u) return !1
            } else if (s)
              if (u == c)
                if (f <= a) {
                  if (l != t[f]) return !1
                } else {
                  if (o ? l > t[f] : l < t[f]) return !1;
                  l != t[f] && (s = !1)
                }
            else if ("s" != u && "n" != u) {
              if (o || f <= a) return !1;
              s = !1, f--
            } else {
              if (f <= a || c < u != o) return !1;
              s = !1
            } else "s" != u && "n" != u && (s = !1, f--)
          }
        }
        var p = [],
          d = p.pop.bind(p);
        for (i = 1; i < t.length; i++) {
          var h = t[i];
          p.push(1 == h ? d() | d() : 2 == h ? d() & d() : h ? r(h, n) : !d())
        }
        return !!d()
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
        4736: () => n("default", "react", [2, 18, 2, 0], (() => s.e(661).then((() => () => s(5661)))))
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
          l = 0;
        if (o.some((r => 0 !== e[r]))) {
          for (n in i) s.o(i, n) && (s.m[n] = i[n]);
          f && f(s)
        }
        for (r && r(t); l < o.length; l++) a = o[l], s.o(e, a) && e[a] && e[a][0](), e[a] = 0
      },
      t = self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var l = s(6463);
  graph_client = l
})();