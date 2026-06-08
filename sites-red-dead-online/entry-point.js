try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "38885716-d0bb-4bfa-9d6c-b9f5e4487206", e._sentryDebugIdIdentifier = "sentry-dbid-38885716-d0bb-4bfa-9d6c-b9f5e4487206")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer"], function(e, t) {
  var r = {},
    n = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(t) {
        r[t] = e[t]
      })
    }, function(e) {
      n.default = e.default || e, Object.keys(e).forEach(function(t) {
        n[t] = e[t]
      })
    }],
    execute: function() {
      e((() => {
        var e, a, o, i, d, f, s = {
            20154(e, t, r) {
              (0, r(89160).w)(1)
            },
            89160(e, t, r) {
              const n = r(51908).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            35649(e, t, r) {
              r(20154)
            },
            51908(e, t, r) {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, a = 0, o = n.length; a !== t && o >= 0;) "/" === n[--o] && a++;
                if (a !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            82021(e, t, r) {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(512), r.e(998), r.e(33), r.e(156), r.e(82), r.e(997), r.e(799), r.e(762)]).then(() => () => r(1762))
                },
                a = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      a = r.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => a,
                init: () => o
              })
            },
            66819(e) {
              "use strict";
              e.exports = r
            },
            25136(e) {
              "use strict";
              e.exports = n
            }
          },
          l = {};

        function c(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return s[e].call(r.exports, r, r.exports, c), r.loaded = !0, r.exports
        }
        return c.m = s, c.c = l, c.y = t, c.amdO = {}, c.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return c.d(t, {
            a: t
          }), t
        }, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, c.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var n = Object.create(null);
          c.r(n);
          var o = {};
          e = e || [null, a({}), a([]), a(a)];
          for (var i = 2 & r && t;
            ("object" == typeof i || "function" == typeof i) && !~e.indexOf(i); i = a(i)) Object.getOwnPropertyNames(i).forEach(e => o[e] = () => t[e]);
          return o.default = () => t, c.d(n, o), n
        }, c.d = (e, t) => {
          for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce((t, r) => (c.f[r](e, t), t), [])), c.u = e => "js/" + {
          33: "613947defccf846c6f2252192de7ac90",
          50: "285847d22d402efd0196e5a55066e3f3",
          70: "15094dd6014bb2815ccc01d7d455ef59",
          156: "01daa4c9eff06d45eb1a22990dea7e0e",
          162: "ecabff45a32f7f9de1866a53ed54b3d6",
          269: "08e3482eed14d36d93246af6e6dda325",
          280: "773c391ac5f2bf2bb00cfd036d58563f",
          331: "725958b6184787d1c50868a6204ccebf",
          512: "0b04f6b998fa0cf7b1b1abee53cd6353",
          514: "d2ba04f4f675741595eb5dba2d6ce894",
          581: "f1e11229181b22b000ce6ed516996652",
          602: "980c5ec0a902ec842e1110f5856bc471",
          669: "0d98467a5a506501306aba5dfe0c64dd",
          730: "69da95a085b7aed9781e2dc517cf09e6",
          762: "4b1368c901f08262c55e009c2be785e0",
          799: "e9e2b5ea17f201a5dee0c2fb371cb35e",
          921: "15dca48e0f3695f5bb843afbe655dac7",
          951: "ce4e222c5b4edf2be0c71b24bd06fd91",
          988: "09f6c22142500842ed5810785b283edd",
          997: "4139efa7e23e6c26ad98fc768966fafc",
          998: "89261ea0fc23b63598ac0c0cf8dd9fa9"
        } [e] + ".js", c.miniCssF = e => "css/" + {
          357: "0961088c4316372009a198cdb103bb8a",
          762: "ffe984b8049cf3864ee81546cfc1c952"
        } [e] + ".css", c.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o = {}, i = "@rockstargames/sites-red-dead-online:", c.l = (e, t, r, n) => {
          if (o[e]) o[e].push(t);
          else {
            var a, d;
            if (void 0 !== r)
              for (var f = document.getElementsByTagName("script"), s = 0; s < f.length; s++) {
                var l = f[s];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == i + r) {
                  a = l;
                  break
                }
              }
            a || (d = !0, (a = document.createElement("script")).charset = "utf-8", c.nc && a.setAttribute("nonce", c.nc), a.setAttribute("data-webpack", i + r), a.src = e), o[e] = [t];
            var u = (t, r) => {
                a.onerror = a.onload = null, clearTimeout(p);
                var n = o[e];
                if (delete o[e], a.parentNode && a.parentNode.removeChild(a), n && n.forEach(e => e(r)), t) return t(r)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = u.bind(null, a.onerror), a.onload = u.bind(null, a.onload), d && document.head.appendChild(a)
          }
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          762: [9566, 31879]
        }, f = {
          9566: ["default", "./index", 66819],
          31879: ["default", "./index", 25136]
        }, c.f.remotes = (e, t) => {
          c.o(d, e) && d[e].forEach(e => {
            var r = c.R;
            r || (r = []);
            var n = f[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), c.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                o = (e, r, o, i, d, f) => {
                  try {
                    var s = e(r, o);
                    if (!s || !s.then) return d(s, i, f);
                    var l = s.then(e => d(e, i), a);
                    if (!f) return l;
                    t.push(n.p = l)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, t, a) => o(t.get, n[1], r, 0, d, a),
                d = t => {
                  n.p = 1, c.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(c, n[2], 0, 0, (e, t, r) => e ? o(c.I, n[0], 0, e, i, r) : a(), 1)
            }
          })
        }, (() => {
          c.S = {};
          var e = {},
            t = {};
          c.I = (r, n) => {
            n || (n = []);
            var a = t[r];
            if (a || (a = t[r] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[r]) return e[r];
              c.o(c.S, r) || (c.S[r] = {});
              var o = c.S[r],
                i = "@rockstargames/sites-red-dead-online",
                d = (e, t, r, n) => {
                  var a = o[e] = o[e] || {},
                    d = a[t];
                  (!d || !d.loaded && (!n != !d.eager ? n : i > d.from)) && (a[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var a = c(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(c.S[r], n);
                    if (a.then) return s.push(a.then(o, t));
                    var i = o(a);
                    if (i && i.then) return s.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (d("@rsgweb/locale-tools", "0.0.0", () => Promise.all([c.e(512), c.e(70), c.e(82), c.e(280)]).then(() => () => c(76602))), d("@rsgweb/modules-core-feedback", "0.0.0", () => Promise.all([c.e(998), c.e(33), c.e(82), c.e(997), c.e(799), c.e(357), c.e(669)]).then(() => () => c(66669))), d("@rsgweb/utils", "0.0.0-development", () => Promise.all([c.e(512), c.e(998), c.e(988), c.e(82), c.e(997), c.e(730)]).then(() => () => c(46730))), d("clsx", "2.1.1", () => c.e(921).then(() => () => c(4921))), d("date-fns", "4.1.0", () => c.e(951).then(() => () => c(26951))), d("focus-trap-react", "10.3.1", () => Promise.all([c.e(514), c.e(82), c.e(653)]).then(() => () => c(44514))), d("prop-types", "15.8.1", () => c.e(331).then(() => () => c(60331))), d("react-dom", "18.3.1", () => Promise.all([c.e(162), c.e(82)]).then(() => () => c(30162))), d("react-router-dom", "6.30.3", () => Promise.all([c.e(269), c.e(82), c.e(17)]).then(() => () => c(74269))), d("react", "18.3.1", () => c.e(581).then(() => () => c(22581))), f(66819), f(25136)), s.length ? e[r] = Promise.all(s).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          c.g.importScripts && (e = c.g.location + "");
          var t = c.g.document;
          if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), c.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = e => {
              var r = e[0],
                n = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                n += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var a = 1, o = 1; o < e.length; o++) a--, n += "u" == (typeof(d = e[o]))[0] ? "-" : (a > 0 ? "." : "") + (a = 2, d);
                return n
              }
              var i = [];
              for (o = 1; o < e.length; o++) {
                var d = e[o];
                i.push(0 === d ? "not(" + f() + ")" : 1 === d ? "(" + f() + " || " + f() + ")" : 2 === d ? i.pop() + " " + i.pop() : t(d))
              }
              return f();

              function f() {
                return i.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var a = t[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, d = 1, f = !0;; d++, i++) {
                  var s, l, c = d < t.length ? (typeof t[d])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(s = n[i]))[0])) return !f || ("u" == c ? d > a && !o : "" == c != o);
                  if ("u" == l) {
                    if (!f || "u" != c) return !1
                  } else if (f)
                    if (c == l)
                      if (d <= a) {
                        if (s != t[d]) return !1
                      } else {
                        if (o ? s > t[d] : s < t[d]) return !1;
                        s != t[d] && (f = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || d <= a) return !1;
                    f = !1, d--
                  } else {
                    if (d <= a || l < c != o) return !1;
                    f = !1
                  } else "s" != c && "n" != c && (f = !1, d--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
              }
              return !!p()
            },
            n = (t, r, n) => {
              var a = n ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(a).reduce((t, r) => !t || !a[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var a = t[n],
                    o = (typeof a)[0];
                  if (n >= r.length) return "u" == o;
                  var i = r[n],
                    d = (typeof i)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(t, r) ? r : t, 0)
            },
            a = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            o = (e => function(t, r, n, a, o) {
              var i = c.I(t);
              return i && i.then && !n ? i.then(e.bind(e, t, c.S[t], r, !1, a, o)) : e(t, c.S[t], r, n, a, o)
            })((e, o, i, d, f, s) => {
              if (!((e, t) => e && c.o(e, t))(o, i)) return a(e, i, s);
              var l, u, p = n(o, i, d);
              return r(f, p) || (u = ((e, r, n, a) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(a) + ")")(o, i, p, f), "undefined" != typeof console && console.warn && console.warn(u)), (l = o[i][p]).loaded = 1, l.get()
            }),
            i = {},
            d = {
              93082: () => o("default", "react", !1, [0], () => c.e(581).then(() => () => c(22581))),
              36416: () => o("default", "react-router-dom", !1, [0], () => Promise.all([c.e(269), c.e(17)]).then(() => () => c(74269))),
              42909: () => o("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([c.e(512), c.e(70), c.e(602)]).then(() => () => c(76602))),
              1896: () => o("default", "date-fns", !1, [1, 4, 1, 0], () => c.e(951).then(() => () => c(26951))),
              13331: () => o("default", "@rsgweb/utils", !1, [0], () => Promise.all([c.e(512), c.e(988), c.e(730)]).then(() => () => c(46730))),
              56263: () => o("default", "@rsgweb/modules-core-feedback", !1, [0], () => Promise.all([c.e(357), c.e(50)]).then(() => () => c(66669))),
              79955: () => o("default", "focus-trap-react", !1, [1, 10, 3, 1], () => Promise.all([c.e(514), c.e(653)]).then(() => () => c(44514))),
              81270: () => o("default", "clsx", !1, [1, 2, 1, 1], () => c.e(921).then(() => () => c(4921))),
              89653: () => o("default", "prop-types", !1, [1, 15, 8, 1], () => c.e(331).then(() => () => c(60331))),
              84017: () => o("default", "react-dom", !1, [1, 18, 2, 0], () => c.e(162).then(() => () => c(30162)))
            },
            f = {
              17: [84017],
              82: [93082],
              653: [89653],
              762: [56263, 79955, 81270],
              799: [1896, 13331],
              997: [36416, 42909]
            },
            s = {};
          c.f.consumes = (e, t) => {
            c.o(f, e) && f[e].forEach(e => {
              if (c.o(i, e)) return t.push(i[e]);
              if (!s[e]) {
                var r = t => {
                  i[e] = 0, c.m[e] = r => {
                    delete c.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var n = t => {
                  delete i[e], c.m[e] = r => {
                    throw delete c.c[e], t
                  }
                };
                try {
                  var a = d[e]();
                  a.then ? t.push(i[e] = a.then(r).catch(n)) : r(a)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              129: 0
            };
            c.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                357: 1,
                762: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var n = c.miniCssF(e),
                  a = c.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var a = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === t) return i
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", c.nc && (o.nonce = c.nc), o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) n();
                    else {
                      var i = r && r.type,
                        d = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = d, o.parentNode && o.parentNode.removeChild(o), a(f)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, a, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          var e = {
            129: 0
          };
          c.f.j = (t, r) => {
            var n = c.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(17|357|653|82)$/.test(t)) e[t] = 0;
            else {
              var a = new Promise((r, a) => n = e[t] = [r, a]);
              r.push(n[2] = a);
              var o = c.p + c.u(t),
                i = new Error;
              c.l(o, r => {
                if (c.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, a, [o, i, d] = r,
                f = 0;
              if (o.some(t => 0 !== e[t])) {
                for (n in i) c.o(i, n) && (c.m[n] = i[n]);
                d && d(c)
              }
              for (t && t(r); f < o.length; f++) a = o[f], c.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), c(35649), c(82021)
      })())
    }
  }
});