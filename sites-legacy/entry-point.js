! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "79b3c819-eed7-4d2f-86c0-9faaf24cd450", e._sentryDebugIdIdentifier = "sentry-dbid-79b3c819-eed7-4d2f-86c0-9faaf24cd450")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    d = {},
    s = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, c, f, i, l = {
            54364: (e, t, r) => {
              (0, r(47284).G)(1)
            },
            47284: (e, t, r) => {
              const a = r(87984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            93824: (e, t, r) => {
              r(54364)
            },
            87984: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            15392: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(72), r.e(792), r.e(664), r.e(616), r.e(504), r.e(768), r.e(420), r.e(188), r.e(669), r.e(784)]).then((() => () => r(18784))),
                  "./index": () => Promise.all([r.e(664), r.e(616), r.e(504), r.e(768), r.e(420), r.e(188), r.e(776)]).then((() => () => r(61880))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(72), r.e(179), r.e(664), r.e(616), r.e(504), r.e(768), r.e(420), r.e(188), r.e(683), r.e(669), r.e(460), r.e(900)]).then((() => () => r(44900))),
                  "./tina": () => Promise.all([r.e(179), r.e(664), r.e(616), r.e(504), r.e(768), r.e(420), r.e(188), r.e(683), r.e(460)]).then((() => () => r(6460)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            },
            33864: e => {
              "use strict";
              e.exports = r
            },
            50800: e => {
              "use strict";
              e.exports = a
            },
            81128: e => {
              "use strict";
              e.exports = o
            },
            14472: e => {
              "use strict";
              e.exports = n
            },
            88428: e => {
              "use strict";
              e.exports = d
            },
            9344: e => {
              "use strict";
              e.exports = s
            }
          },
          u = {};

        function b(e) {
          var t = u[e];
          if (void 0 !== t) return t.exports;
          var r = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = l, b.c = u, b.y = t, b.amdO = {}, b.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return b.d(t, {
            a: t
          }), t
        }, b.d = (e, t) => {
          for (var r in t) b.o(t, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((t, r) => (b.f[r](e, t), t)), [])), b.u = e => "js/" + {
          61: "976253e4590827333659b85f0efb1b36",
          72: "3a4144d5ea3bbdbf4a27caf05de2442c",
          88: "c0935465303e2ebb25da197645f69ea7",
          100: "452f8e08c866bfd054c0847490c907f8",
          132: "871bd212e7d8a80b603d396a8296d92b",
          164: "dd6e9f3dbeacbd56aae01db4af16ed20",
          179: "faa87c34466cd8165411d5acaeb6ed66",
          188: "8dfcccd9012e2e1f32069b32c5fcf9d3",
          196: "2ae1762dadb56c4c63378b8d0f93bc11",
          204: "7c7daf5aaba00da7a310472f2d9ad686",
          216: "3745382258467dd42f594a379776767f",
          240: "6e6fcc9ed63a7b19b452d0318cba966c",
          248: "fd646de1530a09ffb9500747788b3f16",
          283: "c9391a528ac1cfda4a2593fd600418ba",
          303: "4855edb6868b0c82a2ede87eca0e3a16",
          304: "3f7cb5f84974d5702cd7218dd9577132",
          396: "efb5bae56c7c94c8e973cdd4b490f721",
          408: "b7c15fecf92f67704b0ff74dffb4c5ac",
          420: "cd026fda85a14f743a3b9de99ba64752",
          460: "8025dde6e07d7639296d6f4e01caa228",
          504: "e4107237d22c08486c2e35f8d0bb1f0e",
          512: "117487449e102eb2770c032ac0d1c5ed",
          538: "c642b58552bb7e426d85b24b2ae8cac7",
          560: "27de68c8312d0bfbdf77a493d544029a",
          616: "52188da5968b992e78e31160c4f1b6ee",
          664: "613d91ad5b83c915e18ccff483da75c5",
          669: "bf5d53b0206e126ceca02bf843acaa96",
          672: "30d48bc0278d81e9cca184402f8ab45b",
          683: "73d4af498fd5cac327c16a9f314acbdd",
          696: "bd742331638b66095ff0b17dc51873b2",
          716: "3a8dfc1fc9f026fa7bc1d7816c0eb667",
          768: "c581c085f81439f1a80cf27ce711ed00",
          776: "a89d1a6866e4a2cfb1466d14ac3d38b7",
          784: "69347b521bee4e193d03d23caa01dd0c",
          792: "eb19c33066a2c7770ac10028ab8f4b38",
          832: "d0feefb98ab884d9b2598a5732d0dde2",
          860: "9ca2f6196572dc57f2047d9974b5aa12",
          868: "7ac35be122e7e511ad1eff98c6c4ab54",
          900: "78bb0f063ac789fb49ca59cb741a5be0",
          904: "bc7a8792ba974b5ad9f2e3effa3db308",
          924: "e90ed81e5790eed032be800a0ddacf41",
          952: "c885dc484200c0fca41062f38b8e554c"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          188: "664eee436a702d730d64c31b174d2527",
          196: "76156a803795dff462c82f33c661683b",
          216: "68508675b7e334e1383022c069939523",
          538: "95f2b7f4dbdcbec5e2eba43c02a19ae6",
          683: "1809f9391a083c02a6fb72dfbc67c511",
          784: "d8468fd0ff99344b11bf1ee3122e080b",
          868: "95f2b7f4dbdcbec5e2eba43c02a19ae6",
          900: "9b62ba6cd27fc773575ceed2f4bdf654"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, c = "@rockstargames/sites-legacy:", b.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, d;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), f = 0; f < s.length; f++) {
                var i = s[f];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == c + a) {
                  n = i;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, b.nc && n.setAttribute("nonce", b.nc), n.setAttribute("data-webpack", c + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), d && document.head.appendChild(n)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          61: [3061],
          188: [55120, 84644],
          216: [1532, 28540, 73784, 95356],
          420: [45792],
          460: [32104, 65988, 84344, 89468],
          504: [42836, 1740],
          683: [45652],
          768: [33052],
          784: [42708, 75016, 77715]
        }, i = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          32104: ["default", "./ui", 88428],
          33052: ["default", "./index", 33864],
          42708: ["default", "./providers", 81128],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          55120: ["default", "./messages", 50800],
          65988: ["default", "./functions", 9344],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          75016: ["default", "./index", 50800],
          77715: ["default", "./providers", 9344],
          84344: ["default", "./tina", 14472],
          84644: ["default", "./index", 14472],
          89468: ["default", "./properties", 88428],
          95356: ["default", "./helpers", 88428]
        }, b.f.remotes = (e, t) => {
          b.o(f, e) && f[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), b.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, s, c) => {
                  try {
                    var f = e(r, n);
                    if (!f || !f.then) return s(f, d, c);
                    var i = f.then((e => s(e, d)), o);
                    if (!c) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, s, o),
                s = t => {
                  a.p = 1, b.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(b, a[2], 0, 0, ((e, t, r) => e ? n(b.I, a[0], 0, e, d, r) : o()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            t = {};
          b.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var n = b.S[r],
                d = "@rockstargames/sites-legacy",
                s = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : d > s.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                c = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = b(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(b.S[r], a);
                    if (o.then) return f.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return f.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (s("@rockstargames/components", "1.14.0", (() => Promise.all([b.e(560), b.e(72), b.e(179), b.e(303), b.e(664), b.e(616), b.e(504), b.e(768), b.e(420), b.e(683), b.e(669), b.e(216), b.e(204)]).then((() => () => b(1076))))), s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([b.e(408), b.e(664), b.e(61), b.e(924)]).then((() => () => b(8304))))), s("@rockstargames/modules-core-hero", "0.1.2", (() => Promise.all([b.e(664), b.e(504), b.e(420), b.e(538), b.e(248)]).then((() => () => b(33700))))), s("@rockstargames/modules-core-highlights", "0.0.2", (() => Promise.all([b.e(560), b.e(664), b.e(616), b.e(504), b.e(196), b.e(860)]).then((() => () => b(92240))))), s("framer-motion", "10.16.4", (() => Promise.all([b.e(696), b.e(664)]).then((() => () => b(11696))))), s("framer-motion", "10.16.4", (() => Promise.all([b.e(164), b.e(664)]).then((() => () => b(22784))))), s("framer-motion", "7.10.3", (() => Promise.all([b.e(904), b.e(396), b.e(664)]).then((() => () => b(93372))))), s("framer-motion", "7.10.3", (() => Promise.all([b.e(904), b.e(952), b.e(664), b.e(672)]).then((() => () => b(35952))))), s("react-dom", "18.2.0", (() => Promise.all([b.e(716), b.e(664)]).then((() => () => b(63716))))), s("react-intersection-observer", "9.5.2", (() => Promise.all([b.e(664), b.e(512)]).then((() => () => b(41512))))), s("react-router-dom", "6.17.0", (() => Promise.all([b.e(88), b.e(832), b.e(664)]).then((() => () => b(84832))))), s("react-router-dom", "6.17.0", (() => Promise.all([b.e(88), b.e(283), b.e(664)]).then((() => () => b(93664))))), s("react", "18.2.0", (() => b.e(100).then((() => () => b(99480))))), c(81128), c(88428), c(33864), c(9344), c(50800), c(14472)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var t = b.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (r, a) => {
              if (0 in r) {
                a = e(a);
                var o = r[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var d = 0, s = 1, c = !0;; s++, d++) {
                  var f, i, l = s < r.length ? (typeof r[s])[0] : "";
                  if (d >= a.length || "o" == (i = (typeof(f = a[d]))[0])) return !c || ("u" == l ? s > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == i)
                      if (s <= o) {
                        if (f != r[s]) return !1
                      } else {
                        if (n ? f > r[s] : f < r[s]) return !1;
                        f != r[s] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || s <= o) return !1;
                    c = !1, s--
                  } else {
                    if (s <= o || i < l != n) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, s--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var h = r[d];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? t(h, a) : !b())
              }
              return !!b()
            },
            r = (r, a, o) => {
              var n = r[a];
              return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    n = (typeof o)[0];
                  if (a >= r.length) return "u" == n;
                  var d = r[a],
                    s = (typeof d)[0];
                  if (n != s) return "o" == n && "n" == s || "s" == s || "u" == n;
                  if ("o" != n && "u" != n && o != d) return o < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = b.I(t);
              return n && n.then ? n.then(e.bind(e, t, b.S[t], r, a, o)) : e(t, b.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var d = t && b.o(t, a) && r(t, a, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => b.e(100).then((() => () => b(99480))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([b.e(408), b.e(61), b.e(304)]).then((() => () => b(8304))))),
              60380: () => a("default", "react-intersection-observer", [1, 9, 5, 2], (() => b.e(132).then((() => () => b(41512))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => b.e(716).then((() => () => b(63716))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([b.e(560), b.e(72), b.e(179), b.e(303), b.e(616), b.e(768), b.e(683), b.e(669), b.e(216)]).then((() => () => b(1076))))),
              13196: () => a("default", "@rockstargames/modules-core-highlights", [1, "workspace:*"], (() => Promise.all([b.e(560), b.e(196), b.e(240)]).then((() => () => b(92240))))),
              54600: () => a("default", "@rockstargames/modules-core-hero", [1, "workspace:*"], (() => b.e(868).then((() => () => b(33700))))),
              82708: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(88), b.e(283)]).then((() => () => b(93664))))),
              83252: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(164).then((() => () => b(22784))))),
              22560: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([b.e(904), b.e(952)]).then((() => () => b(35952))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(88), b.e(832)]).then((() => () => b(84832))))),
              37148: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([b.e(904), b.e(396)]).then((() => () => b(93372))))),
              13112: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(696).then((() => () => b(11696)))))
            },
            d = {
              188: [13196, 54600, 82708, 83252],
              196: [13112],
              420: [9860],
              538: [37148],
              616: [41272, 60380],
              664: [51664],
              669: [22560, 57013],
              768: [77364],
              868: [37148]
            },
            s = {};
          b.f.consumes = (e, t) => {
            b.o(d, e) && d[e].forEach((e => {
              if (b.o(o, e)) return t.push(o[e]);
              if (!s[e]) {
                var r = t => {
                  o[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete o[e], b.m[e] = r => {
                    throw delete b.c[e], t
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? t.push(o[e] = d.then(r).catch(a)) : r(d)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              744: 0
            };
            b.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                188: 1,
                196: 1,
                216: 1,
                538: 1,
                683: 1,
                784: 1,
                868: 1,
                900: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = b.miniCssF(e),
                  o = b.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var d;
                      if ((o = (d = n[a]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var d = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = s, n.parentNode && n.parentNode.removeChild(n), o(c)
                    }
                  }, n.href = t, document.head.appendChild(n)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            744: 0
          };
          b.f.j = (t, r) => {
            var a = b.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(6(1|16|64|69|83)|196|420|504|538|768)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = b.p + b.u(t),
                d = new Error;
              b.l(n, (r => {
                if (b.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, a[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                d = r[1],
                s = r[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) b.o(d, a) && (b.m[a] = d[a]);
                s && s(b)
              }
              for (t && t(r); c < n.length; c++) o = n[c], b.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), b(93824), b(15392)
      })())
    }
  }
}));