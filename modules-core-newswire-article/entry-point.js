var modules_core_newswire_article;
(() => {
  "use strict";
  var e, r, t, o, n = {
      3072: (e, r, t) => {
        var o = {
            "./NewswireArticle": () => Promise.all([t.e(678), t.e(919), t.e(976), t.e(767), t.e(757), t.e(425)]).then((() => () => t(425))),
            "./index": () => Promise.all([t.e(678), t.e(976), t.e(767)]).then((() => () => t(7767))),
            "./types": () => Promise.all([t.e(678), t.e(919), t.e(976), t.e(767), t.e(757), t.e(198)]).then((() => () => t(6198))),
            "./tinaBlockTemplates": () => Promise.all([t.e(976), t.e(458)]).then((() => () => t(1458)))
          },
          n = (e, r) => (t.R = r, r = t.o(o, e) ? o[e]() : Promise.resolve().then((() => {
            throw new Error('Module "' + e + '" does not exist in container.')
          })), t.R = void 0, r),
          a = (e, r) => {
            if (t.S) {
              var o = "default",
                n = t.S[o];
              if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return t.S[o] = e, t.I(o, r)
            }
          };
        t.d(r, {
          get: () => n,
          init: () => a
        })
      },
      9525: (e, r, t) => {
        var o = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof components) return e();
          t.l(window.mfe.path("@rockstargames/components"), (t => {
            if ("undefined" != typeof components) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            o.message = "Loading script failed.\n(" + n + ": " + a + ")", o.name = "ScriptExternalLoadError", o.type = n, o.request = a, r(o)
          }), "components")
        })).then((() => components))
      },
      5171: (e, r, t) => {
        var o = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof graph_client) return e();
          t.l(window.mfe.path("@rockstargames/graph-client"), (t => {
            if ("undefined" != typeof graph_client) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            o.message = "Loading script failed.\n(" + n + ": " + a + ")", o.name = "ScriptExternalLoadError", o.type = n, o.request = a, r(o)
          }), "graph_client")
        })).then((() => graph_client))
      },
      7048: (e, r, t) => {
        var o = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_card) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-card"), (t => {
            if ("undefined" != typeof modules_core_card) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            o.message = "Loading script failed.\n(" + n + ": " + a + ")", o.name = "ScriptExternalLoadError", o.type = n, o.request = a, r(o)
          }), "modules_core_card")
        })).then((() => modules_core_card))
      },
      7304: (e, r, t) => {
        var o = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_carousel) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-carousel"), (t => {
            if ("undefined" != typeof modules_core_carousel) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            o.message = "Loading script failed.\n(" + n + ": " + a + ")", o.name = "ScriptExternalLoadError", o.type = n, o.request = a, r(o)
          }), "modules_core_carousel")
        })).then((() => modules_core_carousel))
      },
      3113: (e, r, t) => {
        var o = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_gif_viewer) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-gif-viewer"), (t => {
            if ("undefined" != typeof modules_core_gif_viewer) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            o.message = "Loading script failed.\n(" + n + ": " + a + ")", o.name = "ScriptExternalLoadError", o.type = n, o.request = a, r(o)
          }), "modules_core_gif_viewer")
        })).then((() => modules_core_gif_viewer))
      },
      8546: (e, r, t) => {
        var o = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_group_of_items) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-group-of-items"), (t => {
            if ("undefined" != typeof modules_core_group_of_items) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            o.message = "Loading script failed.\n(" + n + ": " + a + ")", o.name = "ScriptExternalLoadError", o.type = n, o.request = a, r(o)
          }), "modules_core_group_of_items")
        })).then((() => modules_core_group_of_items))
      },
      6993: (e, r, t) => {
        var o = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_videoplayer) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-videoplayer"), (t => {
            if ("undefined" != typeof modules_core_videoplayer) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            o.message = "Loading script failed.\n(" + n + ": " + a + ")", o.name = "ScriptExternalLoadError", o.type = n, o.request = a, r(o)
          }), "modules_core_videoplayer")
        })).then((() => modules_core_videoplayer))
      },
      7958: (e, r, t) => {
        var o = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_sc_ugc_spotlight) return e();
          t.l(window.mfe.path("@rockstargames/modules-sc-ugc-spotlight"), (t => {
            if ("undefined" != typeof modules_sc_ugc_spotlight) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            o.message = "Loading script failed.\n(" + n + ": " + a + ")", o.name = "ScriptExternalLoadError", o.type = n, o.request = a, r(o)
          }), "modules_sc_ugc_spotlight")
        })).then((() => modules_sc_ugc_spotlight))
      },
      1489: (e, r, t) => {
        var o = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof tina) return e();
          t.l(window.mfe.path("@rockstargames/tina"), (t => {
            if ("undefined" != typeof tina) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            o.message = "Loading script failed.\n(" + n + ": " + a + ")", o.name = "ScriptExternalLoadError", o.type = n, o.request = a, r(o)
          }), "tina")
        })).then((() => tina))
      },
      8810: (e, r, t) => {
        var o = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof utils) return e();
          t.l(window.mfe.path("@rockstargames/utils"), (t => {
            if ("undefined" != typeof utils) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            o.message = "Loading script failed.\n(" + n + ": " + a + ")", o.name = "ScriptExternalLoadError", o.type = n, o.request = a, r(o)
          }), "utils")
        })).then((() => utils))
      }
    },
    a = {};

  function i(e) {
    var r = a[e];
    if (void 0 !== r) return r.exports;
    var t = a[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
  }
  i.m = n, i.c = a, i.n = e => {
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
    198: "c11a415d68eee63705d3",
    425: "b6e233253f022e67776c",
    458: "3ea5b3657b388c1c2e2d",
    661: "e6b67c477dc0059f7fb5",
    678: "a2d334edbf2164009360",
    757: "91ef73c49d63a48975f8",
    767: "995df2922b857d7d9de0",
    919: "4c9684fc59c2f6d5b9a4",
    976: "23e323ffd74593dda39b"
  } [e] + ".js", i.miniCssF = e => "css/" + {
    757: "bb5889ebd8f16a62e4a8",
    767: "49f263848a9a1b8fa857"
  } [e] + ".css", i.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/modules-core-newswire-article:", i.l = (t, o, n, a) => {
    if (e[t]) e[t].push(o);
    else {
      var s, d;
      if (void 0 !== n)
        for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
          var f = l[u];
          if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == r + n) {
            s = f;
            break
          }
        }
      s || (d = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", r + n), s.src = t), e[t] = [o];
      var p = (r, o) => {
          s.onerror = s.onload = null, clearTimeout(c);
          var n = e[t];
          if (delete e[t], s.parentNode && s.parentNode.removeChild(s), n && n.forEach((e => e(o))), r) return r(o)
        },
        c = setTimeout(p.bind(null, void 0, {
          type: "timeout",
          target: s
        }), 12e4);
      s.onerror = p.bind(null, s.onerror), s.onload = p.bind(null, s.onload), d && document.head.appendChild(s)
    }
  }, i.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), t = {
    425: [1968, 6077],
    458: [559, 2324, 3204, 3616, 6307, 6904],
    767: [420, 3657, 3750, 4224, 4859, 5551, 6947, 8356, 9542, 9929],
    976: [8976]
  }, o = {
    420: ["default", "./index", 8546],
    559: ["default", "./helpers/uploads", 1489],
    1968: ["default", "./providers", 8810],
    2324: ["default", "./helpers", 1489],
    3204: ["default", "./tinaBlockTemplates", 6993],
    3616: ["default", "./properties", 1489],
    3657: ["default", "./hooks", 8810],
    3750: ["default", "./index", 7304],
    4224: ["default", "./index", 6993],
    4859: ["default", "./index", 5171],
    5551: ["default", "./index", 7958],
    6077: ["default", "./operations/fragments/newswire-post.graphql", 5171],
    6307: ["default", "./tinaBlockTemplates", 9525],
    6904: ["default", "./tinaBlockTemplates", 3113],
    6947: ["default", "./components", 7048],
    8356: ["default", "./index", 3113],
    8976: ["default", "./index", 9525],
    9542: ["default", "./index", 1489],
    9929: ["default", "./index", 8810]
  }, i.f.remotes = (e, r) => {
    i.o(t, e) && t[e].forEach((e => {
      var t = i.R;
      t || (t = []);
      var n = o[e];
      if (!(t.indexOf(n) >= 0)) {
        if (t.push(n), n.p) return r.push(n.p);
        var a = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), i.m[e] = () => {
              throw r
            }, n.p = 0
          },
          s = (e, t, o, i, s, d) => {
            try {
              var l = e(t, o);
              if (!l || !l.then) return s(l, i, d);
              var u = l.then((e => s(e, i)), a);
              if (!d) return u;
              r.push(n.p = u)
            } catch (e) {
              a(e)
            }
          },
          d = (e, r, o) => s(r.get, n[1], t, 0, l, o),
          l = r => {
            n.p = 1, i.m[e] = e => {
              e.exports = r()
            }
          };
        s(i, n[2], 0, 0, ((e, r, t) => e ? s(i.I, n[0], 0, e, d, t) : a()), 1)
      }
    }))
  }, (() => {
    i.S = {};
    var e = {},
      r = {};
    i.I = (t, o) => {
      o || (o = []);
      var n = r[t];
      if (n || (n = r[t] = {}), !(o.indexOf(n) >= 0)) {
        if (o.push(n), e[t]) return e[t];
        i.o(i.S, t) || (i.S[t] = {});
        var a = i.S[t],
          s = "@rockstargames/modules-core-newswire-article",
          d = e => {
            var r = e => {
              return r = "Initialization of sharing external failed: " + e, "undefined" != typeof console && console.warn && console.warn(r);
              var r
            };
            try {
              var n = i(e);
              if (!n) return;
              var a = e => e && e.init && e.init(i.S[t], o);
              if (n.then) return l.push(n.then(a, r));
              var s = a(n);
              if (s && s.then) return l.push(s.catch(r))
            } catch (e) {
              r(e)
            }
          },
          l = [];
        return "default" === t && (((e, r, t, o) => {
          var n = a[e] = a[e] || {},
            d = n[r];
          (!d || !d.loaded && (1 != !d.eager ? o : s > d.from)) && (n[r] = {
            get: () => i.e(661).then((() => () => i(5661))),
            from: s,
            eager: !1
          })
        })("react", "18.2.0"), d(9525), d(5171), d(7048), d(7304), d(3113), d(8546), d(6993), d(7958), d(1489), d(8810)), l.length ? e[t] = Promise.all(l).then((() => e[t] = 1)) : e[t] = 1
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
          o = t[1] ? r(t[1]) : [];
        return t[2] && (o.length++, o.push.apply(o, r(t[2]))), t[3] && (o.push([]), o.push.apply(o, r(t[3]))), o
      },
      r = (t, o) => {
        if (0 in t) {
          o = e(o);
          var n = t[0],
            a = n < 0;
          a && (n = -n - 1);
          for (var i = 0, s = 1, d = !0;; s++, i++) {
            var l, u, f = s < t.length ? (typeof t[s])[0] : "";
            if (i >= o.length || "o" == (u = (typeof(l = o[i]))[0])) return !d || ("u" == f ? s > n && !a : "" == f != a);
            if ("u" == u) {
              if (!d || "u" != f) return !1
            } else if (d)
              if (f == u)
                if (s <= n) {
                  if (l != t[s]) return !1
                } else {
                  if (a ? l > t[s] : l < t[s]) return !1;
                  l != t[s] && (d = !1)
                }
            else if ("s" != f && "n" != f) {
              if (a || s <= n) return !1;
              d = !1, s--
            } else {
              if (s <= n || u < f != a) return !1;
              d = !1
            } else "s" != f && "n" != f && (d = !1, s--)
          }
        }
        var p = [],
          c = p.pop.bind(p);
        for (i = 1; i < t.length; i++) {
          var m = t[i];
          p.push(1 == m ? c() | c() : 2 == m ? c() & c() : m ? r(m, o) : !c())
        }
        return !!c()
      },
      t = (t, o, n) => {
        var a = t[o];
        return (o = Object.keys(a).reduce(((t, o) => !r(n, o) || t && !((r, t) => {
          r = e(r), t = e(t);
          for (var o = 0;;) {
            if (o >= r.length) return o < t.length && "u" != (typeof t[o])[0];
            var n = r[o],
              a = (typeof n)[0];
            if (o >= t.length) return "u" == a;
            var i = t[o],
              s = (typeof i)[0];
            if (a != s) return "o" == a && "n" == s || "s" == s || "u" == a;
            if ("o" != a && "u" != a && n != i) return n < i;
            o++
          }
        })(t, o) ? t : o), 0)) && a[o]
      },
      o = (e => function(r, t, o, n) {
        var a = i.I(r);
        return a && a.then ? a.then(e.bind(e, r, i.S[r], t, o, n)) : e(r, i.S[r], t, o, n)
      })(((e, r, o, n, a) => {
        var s = r && i.o(r, o) && t(r, o, n);
        return s ? (e => (e.loaded = 1, e.get()))(s) : a()
      })),
      n = {},
      a = {
        822: () => o("default", "react", [1, 18, 2, 0], (() => i.e(661).then((() => () => i(5661)))))
      },
      s = {
        767: [822]
      };
    i.f.consumes = (e, r) => {
      i.o(s, e) && s[e].forEach((e => {
        if (i.o(n, e)) return r.push(n[e]);
        var t = r => {
            n[e] = 0, i.m[e] = t => {
              delete i.c[e], t.exports = r()
            }
          },
          o = r => {
            delete n[e], i.m[e] = t => {
              throw delete i.c[e], r
            }
          };
        try {
          var s = a[e]();
          s.then ? r.push(n[e] = s.then(t).catch(o)) : t(s)
        } catch (e) {
          o(e)
        }
      }))
    }
  })(), (() => {
    if ("undefined" != typeof document) {
      var e = {
        203: 0
      };
      i.f.miniCss = (r, t) => {
        e[r] ? t.push(e[r]) : 0 !== e[r] && {
          757: 1,
          767: 1
        } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
          var o = i.miniCssF(e),
            n = i.p + o;
          if (((e, r) => {
              for (var t = document.getElementsByTagName("link"), o = 0; o < t.length; o++) {
                var n = (i = t[o]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (n === e || n === r)) return i
              }
              var a = document.getElementsByTagName("style");
              for (o = 0; o < a.length; o++) {
                var i;
                if ((n = (i = a[o]).getAttribute("data-href")) === e || n === r) return i
              }
            })(o, n)) return r();
          ((e, r, t, o, n) => {
            var a = document.createElement("link");
            a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = t => {
              if (a.onerror = a.onload = null, "load" === t.type) o();
              else {
                var i = t && ("load" === t.type ? "missing" : t.type),
                  s = t && t.target && t.target.href || r,
                  d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = s, a.parentNode.removeChild(a), n(d)
              }
            }, a.href = r, document.head.appendChild(a)
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
      203: 0
    };
    i.f.j = (r, t) => {
      var o = i.o(e, r) ? e[r] : void 0;
      if (0 !== o)
        if (o) t.push(o[2]);
        else if (/^(757|976)$/.test(r)) e[r] = 0;
      else {
        var n = new Promise(((t, n) => o = e[r] = [t, n]));
        t.push(o[2] = n);
        var a = i.p + i.u(r),
          s = new Error;
        i.l(a, (t => {
          if (i.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            s.message = "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")", s.name = "ChunkLoadError", s.type = n, s.request = a, o[1](s)
          }
        }), "chunk-" + r, r)
      }
    };
    var r = (r, t) => {
        var o, n, a = t[0],
          s = t[1],
          d = t[2],
          l = 0;
        if (a.some((r => 0 !== e[r]))) {
          for (o in s) i.o(s, o) && (i.m[o] = s[o]);
          d && d(i)
        }
        for (r && r(t); l < a.length; l++) n = a[l], i.o(e, n) && e[n] && e[n][0](), e[n] = 0
      },
      t = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var s = i(3072);
  modules_core_newswire_article = s
})();