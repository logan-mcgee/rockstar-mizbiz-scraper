var graphiql;
(() => {
  "use strict";
  var e, r, t, a, n = {
      3288: (e, r, t) => {
        var a = {
            "./index": () => Promise.all([t.e(209), t.e(577)]).then((() => () => t(6199)))
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
    o = {};

  function i(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var t = o[e] = {
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, i), t.exports
  }
  i.m = n, i.c = o, i.n = e => {
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
    43: "89df237e5cb5500a7bff",
    208: "fdc4b6cc2ccdf55b18cd",
    209: "d67a49922749ae73905e",
    230: "6141404f773cb24a9b38",
    237: "94bf54cb6ba3bd4b843a",
    260: "26bb833aaa59bfeabe8c",
    305: "c49ca6ec764fb8de243b",
    353: "4b8586a1e4a2e12b015d",
    382: "0d929474c594b11db670",
    417: "8801f4b7ee34576e3b3b",
    432: "b11dd0741a2e18bcd694",
    454: "63f8bba48703a69ebd6f",
    478: "82a47d62bae4dbe0f8aa",
    489: "a63883131a28c18f9618",
    491: "585606eddac38b2829b5",
    565: "5c51bdc6f40cccb45bad",
    574: "e82bacf430791a78a051",
    577: "a32c896727f752898ce1",
    627: "f134891419dcefcc4eef",
    722: "5b9bb36ff3d871ae1157",
    747: "58f67895ea8984a953ec",
    773: "b5b48a33b44161723fb8",
    782: "cd0cd9000cb2b96e34ac",
    786: "f8ef43d3d78fac4595f6",
    789: "324047a4743b64492223",
    992: "3e55ab65fc83e076519d",
    993: "9b34bbe75dba474a2842"
  } [e] + ".js", i.miniCssF = e => "css/f7c579f620dafd42db42.css", i.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/graphiql:", i.l = (t, a, n, o) => {
    if (e[t]) e[t].push(a);
    else {
      var f, s;
      if (void 0 !== n)
        for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
          var u = d[l];
          if (u.getAttribute("src") == t || u.getAttribute("data-webpack") == r + n) {
            f = u;
            break
          }
        }
      f || (s = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", r + n), f.src = t), e[t] = [a];
      var c = (r, a) => {
          f.onerror = f.onload = null, clearTimeout(p);
          var n = e[t];
          if (delete e[t], f.parentNode && f.parentNode.removeChild(f), n && n.forEach((e => e(a))), r) return r(a)
        },
        p = setTimeout(c.bind(null, void 0, {
          type: "timeout",
          target: f
        }), 12e4);
      f.onerror = c.bind(null, f.onerror), f.onload = c.bind(null, f.onload), s && document.head.appendChild(f)
    }
  }, i.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t = {}, a = {}, i.f.remotes = (e, r) => {
    i.o(t, e) && t[e].forEach((e => {
      var t = i.R;
      t || (t = []);
      var n = a[e];
      if (!(t.indexOf(n) >= 0)) {
        if (t.push(n), n.p) return r.push(n.p);
        var o = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), i.m[e] = () => {
              throw r
            }, n.p = 0
          },
          f = (e, t, a, i, f, s) => {
            try {
              var d = e(t, a);
              if (!d || !d.then) return f(d, i, s);
              var l = d.then((e => f(e, i)), o);
              if (!s) return l;
              r.push(n.p = l)
            } catch (e) {
              o(e)
            }
          },
          s = (e, r, a) => f(r.get, n[1], t, 0, d, a),
          d = r => {
            n.p = 1, i.m[e] = e => {
              e.exports = r()
            }
          };
        f(i, n[2], 0, 0, ((e, r, t) => e ? f(i.I, n[0], 0, e, s, t) : o()), 1)
      }
    }))
  }, (() => {
    i.S = {};
    var e = {},
      r = {};
    i.I = (t, a) => {
      a || (a = []);
      var n = r[t];
      if (n || (n = r[t] = {}), !(a.indexOf(n) >= 0)) {
        if (a.push(n), e[t]) return e[t];
        i.o(i.S, t) || (i.S[t] = {});
        var o = i.S[t],
          f = "@rockstargames/graphiql",
          s = [];
        return "default" === t && ((e, r, t, a) => {
          var n = o[e] = o[e] || {},
            s = n[r];
          (!s || !s.loaded && (1 != !s.eager ? a : f > s.from)) && (n[r] = {
            get: () => i.e(627).then((() => () => i(6627))),
            from: f,
            eager: !1
          })
        })("react", "18.2.0"), e[t] = s.length ? Promise.all(s).then((() => e[t] = 1)) : 1
      }
    }
  })(), (() => {
    var e;
    i.g.importScripts && (e = i.g.location + "");
    var r = i.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      t.length && (e = t[t.length - 1].src)
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
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
          for (var i = 0, f = 1, s = !0;; f++, i++) {
            var d, l, u = f < t.length ? (typeof t[f])[0] : "";
            if (i >= a.length || "o" == (l = (typeof(d = a[i]))[0])) return !s || ("u" == u ? f > n && !o : "" == u != o);
            if ("u" == l) {
              if (!s || "u" != u) return !1
            } else if (s)
              if (u == l)
                if (f <= n) {
                  if (d != t[f]) return !1
                } else {
                  if (o ? d > t[f] : d < t[f]) return !1;
                  d != t[f] && (s = !1)
                }
            else if ("s" != u && "n" != u) {
              if (o || f <= n) return !1;
              s = !1, f--
            } else {
              if (f <= n || l < u != o) return !1;
              s = !1
            } else "s" != u && "n" != u && (s = !1, f--)
          }
        }
        var c = [],
          p = c.pop.bind(c);
        for (i = 1; i < t.length; i++) {
          var h = t[i];
          c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
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
        var o = i.I(r);
        return o && o.then ? o.then(e.bind(e, r, i.S[r], t, a, n)) : e(r, i.S[r], t, a, n)
      })(((e, r, a, n, o) => {
        var f = r && i.o(r, a) && t(r, a, n);
        return f ? (e => (e.loaded = 1, e.get()))(f) : o()
      })),
      n = {},
      o = {
        822: () => a("default", "react", [1, 18, 2, 0], (() => i.e(627).then((() => () => i(6627)))))
      },
      f = {
        577: [822]
      };
    i.f.consumes = (e, r) => {
      i.o(f, e) && f[e].forEach((e => {
        if (i.o(n, e)) return r.push(n[e]);
        var t = r => {
            n[e] = 0, i.m[e] = t => {
              delete i.c[e], t.exports = r()
            }
          },
          a = r => {
            delete n[e], i.m[e] = t => {
              throw delete i.c[e], r
            }
          };
        try {
          var f = o[e]();
          f.then ? r.push(n[e] = f.then(t).catch(a)) : t(f)
        } catch (e) {
          a(e)
        }
      }))
    }
  })(), (() => {
    if ("undefined" != typeof document) {
      var e = {
        794: 0
      };
      i.f.miniCss = (r, t) => {
        e[r] ? t.push(e[r]) : 0 !== e[r] && {
          209: 1
        } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
          var a = i.miniCssF(e),
            n = i.p + a;
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
          ((e, r, t, a, n) => {
            var o = document.createElement("link");
            o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = t => {
              if (o.onerror = o.onload = null, "load" === t.type) a();
              else {
                var i = t && ("load" === t.type ? "missing" : t.type),
                  f = t && t.target && t.target.href || r,
                  s = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = f, o.parentNode.removeChild(o), n(s)
              }
            }, o.href = r, document.head.appendChild(o)
          })(e, n, 0, r, t)
        })))(r).then((() => {
          e[r] = 0
        }), (t => {
          throw delete e[r], t
        })))
      }
    }
  })(), (() => {
    var e = {
      794: 0
    };
    i.f.j = (r, t) => {
      var a = i.o(e, r) ? e[r] : void 0;
      if (0 !== a)
        if (a) t.push(a[2]);
        else {
          var n = new Promise(((t, n) => a = e[r] = [t, n]));
          t.push(a[2] = n);
          var o = i.p + i.u(r),
            f = new Error;
          i.l(o, (t => {
            if (i.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              f.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")", f.name = "ChunkLoadError", f.type = n, f.request = o, a[1](f)
            }
          }), "chunk-" + r, r)
        }
    };
    var r = (r, t) => {
        var a, n, o = t[0],
          f = t[1],
          s = t[2],
          d = 0;
        if (o.some((r => 0 !== e[r]))) {
          for (a in f) i.o(f, a) && (i.m[a] = f[a]);
          s && s(i)
        }
        for (r && r(t); d < o.length; d++) n = o[d], i.o(e, n) && e[n] && e[n][0](), e[n] = 0
      },
      t = self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })(), i.nc = void 0;
  var f = i(3288);
  graphiql = f
})();