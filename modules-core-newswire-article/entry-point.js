var modules_core_newswire_article;
(() => {
  "use strict";
  var e, r, t, a, o = {
      1103: (e, r, t) => {
        var a = {
            "./NewswireArticle": () => Promise.all([t.e(30), t.e(254), t.e(976), t.e(985), t.e(430), t.e(510), t.e(757), t.e(631)]).then((() => () => t(6631))),
            "./NewswireTitle": () => Promise.all([t.e(976), t.e(985), t.e(281)]).then((() => () => t(281))),
            "./index": () => Promise.all([t.e(30), t.e(976), t.e(985), t.e(430), t.e(510), t.e(24)]).then((() => () => t(24))),
            "./components": () => Promise.all([t.e(30), t.e(976), t.e(985), t.e(430)]).then((() => () => t(9430))),
            "./types": () => Promise.all([t.e(30), t.e(254), t.e(976), t.e(985), t.e(430), t.e(510), t.e(757), t.e(403)]).then((() => () => t(7403))),
            "./tinaBlockTemplates": () => Promise.all([t.e(976), t.e(289)]).then((() => () => t(5289)))
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
      9525: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof components) return e();
          t.l(window.mfe.path("@rockstargames/components"), (t => {
            if ("undefined" != typeof components) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              n = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + o + ": " + n + ")", a.name = "ScriptExternalLoadError", a.type = o, a.request = n, r(a)
          }), "components")
        })).then((() => components))
      },
      5171: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof graph_client) return e();
          t.l(window.mfe.path("@rockstargames/graph-client"), (t => {
            if ("undefined" != typeof graph_client) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              n = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + o + ": " + n + ")", a.name = "ScriptExternalLoadError", a.type = o, a.request = n, r(a)
          }), "graph_client")
        })).then((() => graph_client))
      },
      7048: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_card) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-card"), (t => {
            if ("undefined" != typeof modules_core_card) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              n = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + o + ": " + n + ")", a.name = "ScriptExternalLoadError", a.type = o, a.request = n, r(a)
          }), "modules_core_card")
        })).then((() => modules_core_card))
      },
      7304: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_carousel) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-carousel"), (t => {
            if ("undefined" != typeof modules_core_carousel) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              n = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + o + ": " + n + ")", a.name = "ScriptExternalLoadError", a.type = o, a.request = n, r(a)
          }), "modules_core_carousel")
        })).then((() => modules_core_carousel))
      },
      3113: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_gif_viewer) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-gif-viewer"), (t => {
            if ("undefined" != typeof modules_core_gif_viewer) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              n = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + o + ": " + n + ")", a.name = "ScriptExternalLoadError", a.type = o, a.request = n, r(a)
          }), "modules_core_gif_viewer")
        })).then((() => modules_core_gif_viewer))
      },
      8546: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_group_of_items) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-group-of-items"), (t => {
            if ("undefined" != typeof modules_core_group_of_items) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              n = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + o + ": " + n + ")", a.name = "ScriptExternalLoadError", a.type = o, a.request = n, r(a)
          }), "modules_core_group_of_items")
        })).then((() => modules_core_group_of_items))
      },
      6993: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_videoplayer) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-videoplayer"), (t => {
            if ("undefined" != typeof modules_core_videoplayer) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              n = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + o + ": " + n + ")", a.name = "ScriptExternalLoadError", a.type = o, a.request = n, r(a)
          }), "modules_core_videoplayer")
        })).then((() => modules_core_videoplayer))
      },
      7958: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_sc_ugc_spotlight) return e();
          t.l(window.mfe.path("@rockstargames/modules-sc-ugc-spotlight"), (t => {
            if ("undefined" != typeof modules_sc_ugc_spotlight) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              n = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + o + ": " + n + ")", a.name = "ScriptExternalLoadError", a.type = o, a.request = n, r(a)
          }), "modules_sc_ugc_spotlight")
        })).then((() => modules_sc_ugc_spotlight))
      },
      1489: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof tina) return e();
          t.l(window.mfe.path("@rockstargames/tina"), (t => {
            if ("undefined" != typeof tina) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              n = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + o + ": " + n + ")", a.name = "ScriptExternalLoadError", a.type = o, a.request = n, r(a)
          }), "tina")
        })).then((() => tina))
      },
      8810: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof utils) return e();
          t.l(window.mfe.path("@rockstargames/utils"), (t => {
            if ("undefined" != typeof utils) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              n = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + o + ": " + n + ")", a.name = "ScriptExternalLoadError", a.type = o, a.request = n, r(a)
          }), "utils")
        })).then((() => utils))
      }
    },
    n = {};

  function i(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var t = n[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
  }
  i.m = o, i.c = n, i.n = e => {
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
    24: "9194425a5a7a3b5a4ae8",
    30: "6f580a2203d201680ff6",
    254: "d58d34cbf4f5a7fcae0f",
    281: "9eef49179202138e3b45",
    289: "628e23af8406f81c1a5f",
    403: "6ddbff2fa957795cde1c",
    430: "9224fb6dc62c0b92b6a7",
    510: "e5f7f84ff8a49be07dfa",
    627: "72321f06a3290464e99d",
    631: "1c4db645d347876493ff",
    757: "25605084718c4ad57769",
    976: "79c7ed297ec0a43fab12",
    985: "4f0db821867ad5dc6818"
  } [e] + ".js", i.miniCssF = e => "css/" + {
    281: "f9867025e4beeb9e4550",
    430: "04f773eb6fe88494918f",
    757: "8e3771b038731ecd1675"
  } [e] + ".css", i.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/modules-core-newswire-article:", i.l = (t, a, o, n) => {
    if (e[t]) e[t].push(a);
    else {
      var s, d;
      if (void 0 !== o)
        for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
          var f = l[u];
          if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == r + o) {
            s = f;
            break
          }
        }
      s || (d = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", r + o), s.src = t), e[t] = [a];
      var c = (r, a) => {
          s.onerror = s.onload = null, clearTimeout(p);
          var o = e[t];
          if (delete e[t], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((e => e(a))), r) return r(a)
        },
        p = setTimeout(c.bind(null, void 0, {
          type: "timeout",
          target: s
        }), 12e4);
      s.onerror = c.bind(null, s.onerror), s.onload = c.bind(null, s.onload), d && document.head.appendChild(s)
    }
  }, i.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), t = {
    289: [559, 2324, 3204, 3616, 6307, 6904],
    430: [420, 3657, 4224, 4859, 6947, 8356],
    510: [3750, 5551],
    631: [1968, 6077],
    976: [8976],
    985: [9542, 9929]
  }, a = {
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
      var o = a[e];
      if (!(t.indexOf(o) >= 0)) {
        if (t.push(o), o.p) return r.push(o.p);
        var n = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), i.m[e] = () => {
              throw r
            }, o.p = 0
          },
          s = (e, t, a, i, s, d) => {
            try {
              var l = e(t, a);
              if (!l || !l.then) return s(l, i, d);
              var u = l.then((e => s(e, i)), n);
              if (!d) return u;
              r.push(o.p = u)
            } catch (e) {
              n(e)
            }
          },
          d = (e, r, a) => s(r.get, o[1], t, 0, l, a),
          l = r => {
            o.p = 1, i.m[e] = e => {
              e.exports = r()
            }
          };
        s(i, o[2], 0, 0, ((e, r, t) => e ? s(i.I, o[0], 0, e, d, t) : n()), 1)
      }
    }))
  }, (() => {
    i.S = {};
    var e = {},
      r = {};
    i.I = (t, a) => {
      a || (a = []);
      var o = r[t];
      if (o || (o = r[t] = {}), !(a.indexOf(o) >= 0)) {
        if (a.push(o), e[t]) return e[t];
        i.o(i.S, t) || (i.S[t] = {});
        var n = i.S[t],
          s = "@rockstargames/modules-core-newswire-article",
          d = e => {
            var r = e => {
              return r = "Initialization of sharing external failed: " + e, "undefined" != typeof console && console.warn && console.warn(r);
              var r
            };
            try {
              var o = i(e);
              if (!o) return;
              var n = e => e && e.init && e.init(i.S[t], a);
              if (o.then) return l.push(o.then(n, r));
              var s = n(o);
              if (s && s.then) return l.push(s.catch(r))
            } catch (e) {
              r(e)
            }
          },
          l = [];
        return "default" === t && (((e, r, t, a) => {
          var o = n[e] = n[e] || {},
            d = o[r];
          (!d || !d.loaded && (1 != !d.eager ? a : s > d.from)) && (o[r] = {
            get: () => i.e(627).then((() => () => i(6627))),
            from: s,
            eager: !1
          })
        })("react", "18.2.0"), d(9525), d(1489), d(8810), d(5171), d(7048), d(3113), d(8546), d(6993), d(7304), d(7958)), l.length ? e[t] = Promise.all(l).then((() => e[t] = 1)) : e[t] = 1
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
          var o = t[0],
            n = o < 0;
          n && (o = -o - 1);
          for (var i = 0, s = 1, d = !0;; s++, i++) {
            var l, u, f = s < t.length ? (typeof t[s])[0] : "";
            if (i >= a.length || "o" == (u = (typeof(l = a[i]))[0])) return !d || ("u" == f ? s > o && !n : "" == f != n);
            if ("u" == u) {
              if (!d || "u" != f) return !1
            } else if (d)
              if (f == u)
                if (s <= o) {
                  if (l != t[s]) return !1
                } else {
                  if (n ? l > t[s] : l < t[s]) return !1;
                  l != t[s] && (d = !1)
                }
            else if ("s" != f && "n" != f) {
              if (n || s <= o) return !1;
              d = !1, s--
            } else {
              if (s <= o || u < f != n) return !1;
              d = !1
            } else "s" != f && "n" != f && (d = !1, s--)
          }
        }
        var c = [],
          p = c.pop.bind(c);
        for (i = 1; i < t.length; i++) {
          var m = t[i];
          c.push(1 == m ? p() | p() : 2 == m ? p() & p() : m ? r(m, a) : !p())
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
            var i = t[a],
              s = (typeof i)[0];
            if (n != s) return "o" == n && "n" == s || "s" == s || "u" == n;
            if ("o" != n && "u" != n && o != i) return o < i;
            a++
          }
        })(t, a) ? t : a), 0)) && n[a]
      },
      a = (e => function(r, t, a, o) {
        var n = i.I(r);
        return n && n.then ? n.then(e.bind(e, r, i.S[r], t, a, o)) : e(r, i.S[r], t, a, o)
      })(((e, r, a, o, n) => {
        var s = r && i.o(r, a) && t(r, a, o);
        return s ? (e => (e.loaded = 1, e.get()))(s) : n()
      })),
      o = {},
      n = {
        822: () => a("default", "react", [1, 18, 2, 0], (() => i.e(627).then((() => () => i(6627)))))
      },
      s = {
        985: [822]
      };
    i.f.consumes = (e, r) => {
      i.o(s, e) && s[e].forEach((e => {
        if (i.o(o, e)) return r.push(o[e]);
        var t = r => {
            o[e] = 0, i.m[e] = t => {
              delete i.c[e], t.exports = r()
            }
          },
          a = r => {
            delete o[e], i.m[e] = t => {
              throw delete i.c[e], r
            }
          };
        try {
          var s = n[e]();
          s.then ? r.push(o[e] = s.then(t).catch(a)) : t(s)
        } catch (e) {
          a(e)
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
          281: 1,
          430: 1,
          757: 1
        } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
          var a = i.miniCssF(e),
            o = i.p + a;
          if (((e, r) => {
              for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                var o = (i = t[a]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (o === e || o === r)) return i
              }
              var n = document.getElementsByTagName("style");
              for (a = 0; a < n.length; a++) {
                var i;
                if ((o = (i = n[a]).getAttribute("data-href")) === e || o === r) return i
              }
            })(a, o)) return r();
          ((e, r, t, a, o) => {
            var n = document.createElement("link");
            n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = t => {
              if (n.onerror = n.onload = null, "load" === t.type) a();
              else {
                var i = t && ("load" === t.type ? "missing" : t.type),
                  s = t && t.target && t.target.href || r,
                  d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = s, n.parentNode.removeChild(n), o(d)
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
      203: 0
    };
    i.f.j = (r, t) => {
      var a = i.o(e, r) ? e[r] : void 0;
      if (0 !== a)
        if (a) t.push(a[2]);
        else if (/^(510|757|976|985)$/.test(r)) e[r] = 0;
      else {
        var o = new Promise(((t, o) => a = e[r] = [t, o]));
        t.push(a[2] = o);
        var n = i.p + i.u(r),
          s = new Error;
        i.l(n, (t => {
          if (i.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
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
          l = 0;
        if (n.some((r => 0 !== e[r]))) {
          for (a in s) i.o(s, a) && (i.m[a] = s[a]);
          d && d(i)
        }
        for (r && r(t); l < n.length; l++) o = n[l], i.o(e, o) && e[o] && e[o][0](), e[o] = 0
      },
      t = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var s = i(1103);
  modules_core_newswire_article = s
})();