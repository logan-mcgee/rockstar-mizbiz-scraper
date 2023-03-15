var modules_core_card;
(() => {
  "use strict";
  var e, r, t, a, n = {
      1750: (e, r, t) => {
        var a = {
            "./bootstrap": () => t.e(470).then((() => () => t(3470))),
            "./components": () => Promise.all([t.e(345), t.e(822), t.e(559), t.e(589), t.e(585), t.e(859), t.e(238)]).then((() => () => t(3080))),
            "./modules": () => Promise.all([t.e(345), t.e(822), t.e(559), t.e(589), t.e(585), t.e(965)]).then((() => () => t(4585))),
            "./tina": () => Promise.all([t.e(559), t.e(483)]).then((() => () => t(6483)))
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
      },
      9676: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof components) return e();
          t.l(window.mfe.path("@rockstargames/components"), (t => {
            if ("undefined" != typeof components) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
          }), "components")
        })).then((() => components))
      },
      5171: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof graph_client) return e();
          t.l(window.mfe.path("@rockstargames/graph-client"), (t => {
            if ("undefined" != typeof graph_client) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
          }), "graph_client")
        })).then((() => graph_client))
      },
      8546: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_group_of_items) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-group-of-items"), (t => {
            if ("undefined" != typeof modules_core_group_of_items) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
          }), "modules_core_group_of_items")
        })).then((() => modules_core_group_of_items))
      },
      7426: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_sc_user) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-sc-user"), (t => {
            if ("undefined" != typeof modules_core_sc_user) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
          }), "modules_core_sc_user")
        })).then((() => modules_core_sc_user))
      },
      1489: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof tina) return e();
          t.l(window.mfe.path("@rockstargames/tina"), (t => {
            if ("undefined" != typeof tina) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
          }), "tina")
        })).then((() => tina))
      },
      8810: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof utils) return e();
          t.l(window.mfe.path("@rockstargames/utils"), (t => {
            if ("undefined" != typeof utils) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
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
    return n[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
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
    56: "27083d888a25e91dd62a",
    238: "440e6d5b44ff5a72df4a",
    279: "a792ae54d2325e16537c",
    345: "0564d2bf2816f5e4fcca",
    469: "9086bfe44d316bfbc209",
    470: "a844a20e91d81d1f4c19",
    483: "14b851c53e9d84344808",
    513: "d109f0e875d137594403",
    559: "aacfb54af22f34949eba",
    585: "4e312113a25bbc517646",
    589: "17d90f179233ff23ca44",
    627: "d16b34cead83d5c49beb",
    822: "b4f20ff94aaaddd4dab9",
    859: "f6be2ed7abdb97d429a5",
    965: "8eec0990de0fb3db4468"
  } [e] + ".js", i.miniCssF = e => "css/" + {
    56: "97dc42d9c237f610bcc2",
    238: "f05def772c2cb2d9ed31",
    279: "fbdbfc5801e3fd6f2d93",
    589: "5a9ef9a57ed7d86c51b2",
    965: "cbad46a5e730d24986e0"
  } [e] + ".css", i.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/modules-core-card:", i.l = (t, a, n, o) => {
    if (e[t]) e[t].push(a);
    else {
      var s, d;
      if (void 0 !== n)
        for (var f = document.getElementsByTagName("script"), u = 0; u < f.length; u++) {
          var l = f[u];
          if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == r + n) {
            s = l;
            break
          }
        }
      s || (d = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", r + n), s.src = t), e[t] = [a];
      var c = (r, a) => {
          s.onerror = s.onload = null, clearTimeout(p);
          var n = e[t];
          if (delete e[t], s.parentNode && s.parentNode.removeChild(s), n && n.forEach((e => e(a))), r) return r(a)
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
    238: [9929],
    483: [3616, 6307],
    559: [559],
    589: [420, 6711, 8008, 8976, 9542],
    859: [4859]
  }, a = {
    420: ["default", "./index", 8546],
    559: ["default", "./helpers/uploads", 1489],
    3616: ["default", "./properties", 1489],
    4859: ["default", "./index", 5171],
    6307: ["default", "./tinaBlockTemplates", 9676],
    6711: ["default", "./index", 7426],
    8008: ["default", "./providers", 9676],
    8976: ["default", "./index", 9676],
    9542: ["default", "./index", 1489],
    9929: ["default", "./index", 8810]
  }, i.f.remotes = (e, r) => {
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
          s = (e, t, a, i, s, d) => {
            try {
              var f = e(t, a);
              if (!f || !f.then) return s(f, i, d);
              var u = f.then((e => s(e, i)), o);
              if (!d) return u;
              r.push(n.p = u)
            } catch (e) {
              o(e)
            }
          },
          d = (e, r, a) => s(r.get, n[1], t, 0, f, a),
          f = r => {
            n.p = 1, i.m[e] = e => {
              e.exports = r()
            }
          };
        s(i, n[2], 0, 0, ((e, r, t) => e ? s(i.I, n[0], 0, e, d, t) : o()), 1)
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
          s = "@rockstargames/modules-core-card",
          d = (e, r, t, a) => {
            var n = o[e] = o[e] || {},
              i = n[r];
            (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (n[r] = {
              get: t,
              from: s,
              eager: !!a
            })
          },
          f = e => {
            var r = e => {
              return r = "Initialization of sharing external failed: " + e, "undefined" != typeof console && console.warn && console.warn(r);
              var r
            };
            try {
              var n = i(e);
              if (!n) return;
              var o = e => e && e.init && e.init(i.S[t], a);
              if (n.then) return u.push(n.then(o, r));
              var s = o(n);
              if (s && s.then) return u.push(s.catch(r))
            } catch (e) {
              r(e)
            }
          },
          u = [];
        return "default" === t && (d("react-dom", "18.2.0", (() => Promise.all([i.e(469), i.e(822)]).then((() => () => i(7469))))), d("react-router-dom", "6.8.2", (() => Promise.all([i.e(513), i.e(822)]).then((() => () => i(3513))))), d("react", "18.2.0", (() => i.e(627).then((() => () => i(6627))))), f(1489), f(9676), f(8546), f(7426), f(5171), f(8810)), u.length ? e[t] = Promise.all(u).then((() => e[t] = 1)) : e[t] = 1
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
          for (var i = 0, s = 1, d = !0;; s++, i++) {
            var f, u, l = s < t.length ? (typeof t[s])[0] : "";
            if (i >= a.length || "o" == (u = (typeof(f = a[i]))[0])) return !d || ("u" == l ? s > n && !o : "" == l != o);
            if ("u" == u) {
              if (!d || "u" != l) return !1
            } else if (d)
              if (l == u)
                if (s <= n) {
                  if (f != t[s]) return !1
                } else {
                  if (o ? f > t[s] : f < t[s]) return !1;
                  f != t[s] && (d = !1)
                }
            else if ("s" != l && "n" != l) {
              if (o || s <= n) return !1;
              d = !1, s--
            } else {
              if (s <= n || u < l != o) return !1;
              d = !1
            } else "s" != l && "n" != l && (d = !1, s--)
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
              s = (typeof i)[0];
            if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
            if ("o" != o && "u" != o && n != i) return n < i;
            a++
          }
        })(t, a) ? t : a), 0)) && o[a]
      },
      a = (e => function(r, t, a, n) {
        var o = i.I(r);
        return o && o.then ? o.then(e.bind(e, r, i.S[r], t, a, n)) : e(r, i.S[r], t, a, n)
      })(((e, r, a, n, o) => {
        var s = r && i.o(r, a) && t(r, a, n);
        return s ? (e => (e.loaded = 1, e.get()))(s) : o()
      })),
      n = {},
      o = {
        822: () => a("default", "react", [1, 18, 2, 0], (() => i.e(627).then((() => () => i(6627))))),
        6803: () => a("default", "react-router-dom", [1, 6, 8, 2], (() => i.e(513).then((() => () => i(3513))))),
        3468: () => a("default", "react-dom", [1, 18, 2, 0], (() => i.e(469).then((() => () => i(7469)))))
      },
      s = {
        279: [3468],
        589: [6803],
        822: [822]
      };
    i.f.consumes = (e, r) => {
      i.o(s, e) && s[e].forEach((e => {
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
          var s = o[e]();
          s.then ? r.push(n[e] = s.then(t).catch(a)) : t(s)
        } catch (e) {
          a(e)
        }
      }))
    }
  })(), (() => {
    if ("undefined" != typeof document) {
      var e = {
        878: 0
      };
      i.f.miniCss = (r, t) => {
        e[r] ? t.push(e[r]) : 0 !== e[r] && {
          56: 1,
          238: 1,
          279: 1,
          589: 1,
          965: 1
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
                  s = t && t.target && t.target.href || r,
                  d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = s, o.parentNode.removeChild(o), n(d)
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
      878: 0
    };
    i.f.j = (r, t) => {
      var a = i.o(e, r) ? e[r] : void 0;
      if (0 !== a)
        if (a) t.push(a[2]);
        else if (/^(5(59|6|89)|822|859|965)$/.test(r)) e[r] = 0;
      else {
        var n = new Promise(((t, n) => a = e[r] = [t, n]));
        t.push(a[2] = n);
        var o = i.p + i.u(r),
          s = new Error;
        i.l(o, (t => {
          if (i.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            s.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")", s.name = "ChunkLoadError", s.type = n, s.request = o, a[1](s)
          }
        }), "chunk-" + r, r)
      }
    };
    var r = (r, t) => {
        var a, n, o = t[0],
          s = t[1],
          d = t[2],
          f = 0;
        if (o.some((r => 0 !== e[r]))) {
          for (a in s) i.o(s, a) && (i.m[a] = s[a]);
          d && d(i)
        }
        for (r && r(t); f < o.length; f++) n = o[f], i.o(e, n) && e[n] && e[n][0](), e[n] = 0
      },
      t = self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var s = i(1750);
  modules_core_card = s
})();