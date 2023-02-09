var graphiql;
(() => {
  "use strict";
  var e, r, t, a, n, o, i = {
      3288: (e, r, t) => {
        var a = {
            "./index": () => Promise.all([t.e(457), t.e(79)]).then((() => () => t(2292)))
          },
          n = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then((() => {
            throw new Error('Module "' + e + '" does not exist in container.')
          })), t.R = void 0, r),
          o = (e, r) => {
            if (t.S) {
              var a = "default",
                n = t.S[a];
              if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return t.S[a] = e, t.I(a, r)
            }
          };
        t.d(r, {
          get: () => n,
          init: () => o
        })
      }
    },
    f = {};

  function c(e) {
    var r = f[e];
    if (void 0 !== r) return r.exports;
    var t = f[e] = {
      exports: {}
    };
    return i[e].call(t.exports, t, t.exports, c), t.exports
  }
  c.m = i, c.c = f, c.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return c.d(r, {
      a: r
    }), r
  }, c.d = (e, r) => {
    for (var t in r) c.o(r, t) && !c.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: r[t]
    })
  }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((r, t) => (c.f[t](e, r), r)), [])), c.u = e => "js/" + {
    79: "f67cbd610456552cd99e",
    92: "e6c5ed241e1f92829800",
    114: "8470749bdcc0cef0c9e7",
    129: "24156bedb1b9f7f9631c",
    141: "1ae1be448b14131021bb",
    157: "840eda694522e32a6f72",
    187: "0201e51d8e79ce4ff25c",
    197: "dc22163165ed7cd38717",
    203: "0fe1eac4cbb2c1007630",
    207: "1350239288ab242ba564",
    278: "fb083448e8cacaca76f4",
    357: "f2e975f453ecdf303663",
    390: "e46032e3186146fc6da0",
    435: "900977cbf3181b749b19",
    457: "8a547d6a276f5a167775",
    507: "ca7a47345498b9a172d6",
    569: "4b9c6d44fa9b4e591395",
    583: "eb3a788a7bd30293dd31",
    591: "39af25ce46d9a703d605",
    631: "d3431beb941420bc1217",
    664: "edafc4c213f86b84e894",
    681: "82c8c648292de8a492ba",
    703: "9c32b24f0a1a11205cb3",
    743: "abaf86669c0f3dc243d3",
    804: "a107b4f5fbbb98eca3ae",
    871: "13ac87612637774dc6f5",
    876: "414a29d703102435b636",
    899: "e16b45c72359b1823153",
    974: "4bc91aa2e227a00cfe92"
  } [e] + ".js", c.miniCssF = e => "css/03b9f9c8da3c0c7bde26.css", c.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/graphiql:", c.l = (t, a, n, o) => {
    if (e[t]) e[t].push(a);
    else {
      var i, f;
      if (void 0 !== n)
        for (var s = document.getElementsByTagName("script"), d = 0; d < s.length; d++) {
          var l = s[d];
          if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == r + n) {
            i = l;
            break
          }
        }
      i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc && i.setAttribute("nonce", c.nc), i.setAttribute("data-webpack", r + n), i.src = t), e[t] = [a];
      var u = (r, a) => {
          i.onerror = i.onload = null, clearTimeout(p);
          var n = e[t];
          if (delete e[t], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), r) return r(a)
        },
        p = setTimeout(u.bind(null, void 0, {
          type: "timeout",
          target: i
        }), 12e4);
      i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), f && document.head.appendChild(i)
    }
  }, c.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t = {}, a = {}, c.f.remotes = (e, r) => {
    c.o(t, e) && t[e].forEach((e => {
      var t = c.R;
      t || (t = []);
      var n = a[e];
      if (!(t.indexOf(n) >= 0)) {
        if (t.push(n), n.p) return r.push(n.p);
        var o = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), c.m[e] = () => {
              throw r
            }, n.p = 0
          },
          i = (e, t, a, i, f, c) => {
            try {
              var s = e(t, a);
              if (!s || !s.then) return f(s, i, c);
              var d = s.then((e => f(e, i)), o);
              if (!c) return d;
              r.push(n.p = d)
            } catch (e) {
              o(e)
            }
          },
          f = (e, r, a) => i(r.get, n[1], t, 0, s, a),
          s = r => {
            n.p = 1, c.m[e] = e => {
              e.exports = r()
            }
          };
        i(c, n[2], 0, 0, ((e, r, t) => e ? i(c.I, n[0], 0, e, f, t) : o()), 1)
      }
    }))
  }, (() => {
    c.S = {};
    var e = {},
      r = {};
    c.I = (t, a) => {
      a || (a = []);
      var n, o, i, f, s = r[t];
      if (s || (s = r[t] = {}), !(a.indexOf(s) >= 0)) {
        if (a.push(s), e[t]) return e[t];
        c.o(c.S, t) || (c.S[t] = {});
        var d = c.S[t],
          l = "@rockstargames/graphiql",
          u = [];
        return "default" === t && (n = "18.2.0", i = d.react = d.react || {}, (!(f = i[n]) || !f.loaded && (1 != !f.eager ? o : l > f.from)) && (i[n] = {
          get: () => c.e(435).then((() => () => c(9435))),
          from: l,
          eager: !1
        })), e[t] = u.length ? Promise.all(u).then((() => e[t] = 1)) : 1
      }
    }
  })(), (() => {
    var e;
    c.g.importScripts && (e = c.g.location + "");
    var r = c.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      t.length && (e = t[t.length - 1].src)
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), c.p = e
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
          var n = t[0],
            o = n < 0;
          o && (n = -n - 1);
          for (var i = 0, f = 1, c = !0;; f++, i++) {
            var s, d, l = f < t.length ? (typeof t[f])[0] : "";
            if (i >= a.length || "o" == (d = (typeof(s = a[i]))[0])) return !c || ("u" == l ? f > n && !o : "" == l != o);
            if ("u" == d) {
              if (!c || "u" != l) return !1
            } else if (c)
              if (l == d)
                if (f <= n) {
                  if (s != t[f]) return !1
                } else {
                  if (o ? s > t[f] : s < t[f]) return !1;
                  s != t[f] && (c = !1)
                }
            else if ("s" != l && "n" != l) {
              if (o || f <= n) return !1;
              c = !1, f--
            } else {
              if (f <= n || d < l != o) return !1;
              c = !1
            } else "s" != l && "n" != l && (c = !1, f--)
          }
        }
        var u = [],
          p = u.pop.bind(u);
        for (i = 1; i < t.length; i++) {
          var h = t[i];
          u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
        }
        return !!p()
      },
      t = (t, a, n) => {
        var o = t[a];
        return (a = Object.keys(o).reduce(((t, a) => !r(n, a) || t && !((r, t) => {
          r = e(r), t = e(t);
          for (var a = 0;;) {
            if (a >= r.length) return a < t.length && "u" != (typeof t[a])[0];
            var n = r[a],
              o = (typeof n)[0];
            if (a >= t.length) return "u" == o;
            var i = t[a],
              f = (typeof i)[0];
            if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
            if ("o" != o && "u" != o && n != i) return n < i;
            a++
          }
        })(t, a) ? t : a), 0)) && o[a]
      },
      a = (e => function(r, t, a, n) {
        var o = c.I(r);
        return o && o.then ? o.then(e.bind(e, r, c.S[r], t, a, n)) : e(r, c.S[r], t, a, n)
      })(((e, r, a, n, o) => {
        var i = r && c.o(r, a) && t(r, a, n);
        return i ? (e => (e.loaded = 1, e.get()))(i) : o()
      })),
      n = {},
      o = {
        822: () => a("default", "react", [1, 18, 2, 0], (() => c.e(435).then((() => () => c(9435)))))
      },
      i = {
        79: [822]
      };
    c.f.consumes = (e, r) => {
      c.o(i, e) && i[e].forEach((e => {
        if (c.o(n, e)) return r.push(n[e]);
        var t = r => {
            n[e] = 0, c.m[e] = t => {
              delete c.c[e], t.exports = r()
            }
          },
          a = r => {
            delete n[e], c.m[e] = t => {
              throw delete c.c[e], r
            }
          };
        try {
          var i = o[e]();
          i.then ? r.push(n[e] = i.then(t).catch(a)) : t(i)
        } catch (e) {
          a(e)
        }
      }))
    }
  })(), n = e => new Promise(((r, t) => {
    var a = c.miniCssF(e),
      n = c.p + a;
    if (((e, r) => {
        for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
          var n = (i = t[a]).getAttribute("data-href") || i.getAttribute("href");
          if ("stylesheet" === i.rel && (n === e || n === r)) return i
        }
        var o = document.getElementsByTagName("style");
        for (a = 0; a < o.length; a++) {
          var i;
          if ((n = (i = o[a]).getAttribute("data-href")) === e || n === r) return i
        }
      })(a, n)) return r();
    ((e, r, t, a) => {
      var n = document.createElement("link");
      n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = o => {
        if (n.onerror = n.onload = null, "load" === o.type) t();
        else {
          var i = o && ("load" === o.type ? "missing" : o.type),
            f = o && o.target && o.target.href || r,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
          c.code = "CSS_CHUNK_LOAD_FAILED", c.type = i, c.request = f, n.parentNode.removeChild(n), a(c)
        }
      }, n.href = r, document.head.appendChild(n)
    })(e, n, r, t)
  })), o = {
    794: 0
  }, c.f.miniCss = (e, r) => {
    o[e] ? r.push(o[e]) : 0 !== o[e] && {
      79: 1
    } [e] && r.push(o[e] = n(e).then((() => {
      o[e] = 0
    }), (r => {
      throw delete o[e], r
    })))
  }, (() => {
    var e = {
      794: 0
    };
    c.f.j = (r, t) => {
      var a = c.o(e, r) ? e[r] : void 0;
      if (0 !== a)
        if (a) t.push(a[2]);
        else {
          var n = new Promise(((t, n) => a = e[r] = [t, n]));
          t.push(a[2] = n);
          var o = c.p + c.u(r),
            i = new Error;
          c.l(o, (t => {
            if (c.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
            }
          }), "chunk-" + r, r)
        }
    };
    var r = (r, t) => {
        var a, n, o = t[0],
          i = t[1],
          f = t[2],
          s = 0;
        if (o.some((r => 0 !== e[r]))) {
          for (a in i) c.o(i, a) && (c.m[a] = i[a]);
          f && f(c)
        }
        for (r && r(t); s < o.length; s++) n = o[s], c.o(e, n) && e[n] && e[n][0](), e[n] = 0
      },
      t = self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })(), c.nc = void 0;
  var s = c(3288);
  graphiql = s
})();