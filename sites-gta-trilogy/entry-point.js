try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "63d261c7-e5ab-4ff2-8540-f847fffc34f2", e._sentryDebugIdIdentifier = "sentry-dbid-63d261c7-e5ab-4ff2-8540-f847fffc34f2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, f, c, n, d, o = {
            3032: (e, a, t) => {
              t(8419)
            },
            5136: e => {
              "use strict";
              e.exports = t
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(4910), t.e(7662), t.e(2229), t.e(7583), t.e(4711)]).then((() => () => t(9395)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => c
              })
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, c = r.length; f !== a && c >= 0;) "/" === r[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var n = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + n
              };
              Number.isInteger
            },
            7411: (e, a, t) => {
              const r = t(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            8419: (e, a, t) => {
              (0, t(7411).w)(1)
            }
          },
          i = {};

        function b(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, b), t.loaded = !0, t.exports
        }
        return b.m = o, b.c = i, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          b.r(f);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var n = 2 & t && a;
            ("object" == typeof n || "function" == typeof n) && !~e.indexOf(n); n = r(n)) Object.getOwnPropertyNames(n).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, b.d(f, c), f
        }, b.d = (e, a) => {
          for (var t in a) b.o(a, t) && !b.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, t) => (b.f[t](e, a), a)), [])), b.u = e => "js/" + {
          131: "9b6304bfb7e232991d5362a9bdb2225a",
          278: "3d552bde1af38a4a75c3906ee3f40fc9",
          299: "308bc35327b4f834232a33fb393e1ada",
          314: "a6d5e679d32751bf2b08e55545c9f0b6",
          439: "b5e0d4ceb40bfd9d529282ba7735ba78",
          450: "18d5b3cd0bde5835f75994f3256496a3",
          662: "7dd47f4d442cbff4e2f2397da5e5b241",
          824: "da9b5d3ff4ff81ef9fe88c3f8cd57260",
          907: "025430d30d3d162a8e3b79f3cc349ecb",
          1054: "c1ab5f9a30bf78d9701809fd77eb383e",
          1242: "12a1301a23e3685c3da89cb645fbbd9d",
          1822: "4f948969d139856e69b2f387392dcee0",
          1868: "7c3f1b69eaf9d9f8cdff4bafed185c1f",
          2156: "3e5909810b9ffc656f31041242092dcc",
          2171: "6fed924da241591df7ee462c9c77407b",
          2221: "c476cdee287436f976dc8b244607f013",
          2243: "470f2249dcb6c1f360004840fc09a70d",
          2306: "d3aad5d9d107daea45a0671ebb3e7bca",
          2347: "3212322cf35bce34f0135f37e69e3440",
          2365: "77a32c261d40402382fcfe832c7086e7",
          2398: "7870370377308f0732b115a421d76fe2",
          2466: "bc16e55f4f26ffc23cf5adecf5dda766",
          2562: "d187711421a1f4614ecd8c2b21ef1745",
          2642: "ba275ced398ef715195d52563fe9bf5a",
          2678: "63be135f8e51b1d913aa6ebc0e9f1ce7",
          2864: "adbe90b4047bffb6af0e6b79d85a6b23",
          3034: "23fa8970ba4982264e27919a83f18400",
          3197: "bfb2b3102f680ebd078296f30b0cddbe",
          3343: "c2240dff3c17f21c3bbfd1932c4b4957",
          3370: "3f791298e7f732560cf0893f23171463",
          3475: "c209e80d842d2da8831292fe261f2403",
          3486: "591af99b218fb4d730185ef91a54a946",
          3697: "457db10cf96a19dda06d68992ce7a1f2",
          3885: "d8b95684b2af9564beae3b420c0185fc",
          3941: "31eb4fa8bb7c5c3e02de4c5c3bddc1e4",
          4011: "41b3ed8c43de7d74a564771c7cca0614",
          4528: "a41acfe35b326257beb7b30eba2d0dab",
          4578: "094f76ce77aa2de6e9587389db85333b",
          4621: "cde46d5026f2de0fe8e4337b5d7697ef",
          4700: "d2e4b22655f0523c366f0011738e7ac5",
          4710: "9a3f6b2067b29f1a62739b23d955b79b",
          4711: "5525af3c291054571c0bc7fcf3018da5",
          4731: "0b53b4c4d84482a57f81b798ed4d2ef9",
          4799: "8003e853ca78165ca03e8aafda7910e3",
          4851: "01645d0e95fd76298609f1c4da942324",
          4861: "16096293d4dd110ccebe2ffbb0749b0b",
          4910: "fc2faedd675463265efaff7de2acaa92",
          4913: "28112f54c267f6c96746f977f17be104",
          5018: "8683c7df889c28dd090a4d6eafac8397",
          5233: "f782102ddc061c411104efe715cede07",
          5259: "2889e80dfdb5d9503d3a6ebf8c79681e",
          5389: "c2eb6eac7f2d6f87e94f4b1ffbc66b7d",
          5530: "661e07d34e7cb475a80591ba02dc21eb",
          5639: "c4e67079aa1a2a80491e8c8d2bead85c",
          5663: "b619033b6d306f15dc83fccdc5af1f56",
          5742: "8a8e29589aaa5f1bf92f45ea1b6144c4",
          5830: "1b193245bf065ff1808920ee5129a828",
          5832: "91a13d07140207dce8bb1a80fd89f5aa",
          5912: "495a90198ea71746c981ec87ab6284e4",
          6267: "c0b8b15a360684bc776ec1dcb1afe2a9",
          6280: "55e16191a01f414c9b70c5fb2d7271a5",
          6285: "dcd0261829bcea7548d0902644cf1b01",
          6361: "c5aa36cc7a56214289a520146cceec47",
          6664: "6fc29b925c68474007ce1612b893e862",
          6879: "d9152feb4f211f853e1a31b8334b7da7",
          6891: "b8add890ad5ec2cd907e17b1568d6d6c",
          6997: "2287cd1a067b0b396dbce980194e505e",
          7010: "18f83ca5929dc4bebb54edfb7d7be090",
          7073: "995879ba8ed773923e65b35e11730af0",
          7436: "66d5898bef8f981214cbbc10ce2e8f35",
          7452: "bfbabf1ad5c047c8bf689db9012f7d1d",
          7453: "67b977f5480b3a2c14086eda8626072e",
          7583: "396214228a3ff1a69bd9358bbe38fcbf",
          7662: "50ef50a9aca4019b16f2b7a3ad9840a1",
          7970: "93a09f54d3abf0c6ab617136ac64d8b0",
          8240: "1b4d560292bb8c16958d7c35c9bd9473",
          8272: "e38c3f54b72b830f7acb835ad829a0a8",
          8322: "c26de930d209790470c3e84c40ddfa80",
          8391: "00bdc2b5219cd80d1fe026f1f6dadde0",
          8431: "259361f9315daf7e86852f6b4f3785ae",
          8659: "f1d2f3879abcde67c218e9a0e2ce967e",
          8755: "ab77e86aab30f30d2fd1c4578f37a2c5",
          8880: "1d24dc8e8bbd9d7fcd30863d911fe2bf",
          8970: "37b7353ce72d67994bd88a2a17d6bf4b",
          9022: "efb6affcb1e2d731ce120fc7a25a4ee1",
          9028: "39f0d4d8583efbc295b538c5e8846053",
          9126: "0da0a88ee29a55ddb37bf65129c70c92",
          9377: "1252d6a46a2b2eb3b99752c41e5f5d67",
          9587: "39babd94e188cbbc9d8b5fb48df102e8",
          9615: "631b26f19af99cc2d1b571d2aafdcc54",
          9757: "3ce48f4f856f5f080387588e55c5f5dd",
          9936: "ba3fdcb57daf2cf50e8c00905f92a680",
          9975: "807ea2a9377302f4ab559b0d0fad951e",
          9990: "60b3083f74b748f30db1c566f6df4d54"
        } [e] + ".js", b.miniCssF = e => "css/e78c3ee290f204e2b3dd5bed2b3ce7fc.css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/sites-gta-trilogy:", b.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var n, d;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var s = o[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + t) {
                  n = s;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, b.nc && n.setAttribute("nonce", b.nc), n.setAttribute("data-webpack", c + t), n.src = e), f[e] = [a];
            var l = (a, t) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], n.parentNode && n.parentNode.removeChild(n), r && r.forEach((e => e(t))), a) return a(t)
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
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          4711: [1879]
        }, d = {
          1879: ["default", "./index", 5136]
        }, b.f.remotes = (e, a) => {
          b.o(n, e) && n[e].forEach((e => {
            var t = b.R;
            t || (t = []);
            var r = d[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, t, c, n, d, o) => {
                  try {
                    var i = e(t, c);
                    if (!i || !i.then) return d(i, n, o);
                    var b = i.then((e => d(e, n)), f);
                    if (!o) return b;
                    a.push(r.p = b)
                  } catch (e) {
                    f(e)
                  }
                },
                n = (e, a, f) => c(a.get, r[1], t, 0, o, f),
                o = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, r[2], 0, 0, ((e, a, t) => e ? c(b.I, r[0], 0, e, n, t) : f()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              b.o(b.S, t) || (b.S[t] = {});
              var c = b.S[t],
                n = "@rockstargames/sites-gta-trilogy",
                d = (e, a, t, r) => {
                  var f = c[e] = c[e] || {},
                    d = f[a];
                  (!d || !d.loaded && (!r != !d.eager ? r : n > d.from)) && (f[a] = {
                    get: t,
                    from: n,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (d("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(9587), b.e(2229), b.e(9975)]).then((() => () => b(2841))))), d("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(450), b.e(4910), b.e(2229), b.e(9757), b.e(7583)]).then((() => () => b(9757))))), d("clsx", "2.1.1", (() => b.e(439).then((() => () => b(439))))), d("framer-motion", "7.10.3", (() => Promise.all([b.e(5912), b.e(2229), b.e(8322)]).then((() => () => b(5912))))), d("react-router-dom", "6.30.0", (() => Promise.all([b.e(5389), b.e(2229)]).then((() => () => b(5389))))), d("react", "18.2.0", (() => b.e(8659).then((() => () => b(8659))))), d("react", "18.3.1", (() => b.e(8431).then((() => () => b(8431))))), d("usehooks-ts", "2.16.0", (() => Promise.all([b.e(2562), b.e(2229)]).then((() => () => b(2562))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = b(5136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(b.S[t], r);
                  if (a.then) return o.push(a.then(f, e));
                  var c = f(a);
                  if (c && c.then) return o.push(c.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var f = 1, c = 1; c < e.length; c++) f--, r += "u" == (typeof(d = e[c]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, d);
                return r
              }
              var n = [];
              for (c = 1; c < e.length; c++) {
                var d = e[c];
                n.push(0 === d ? "not(" + o() + ")" : 1 === d ? "(" + o() + " || " + o() + ")" : 2 === d ? n.pop() + " " + n.pop() : a(d))
              }
              return o();

              function o() {
                return n.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  c = f < 0;
                c && (f = -f - 1);
                for (var n = 0, d = 1, o = !0;; d++, n++) {
                  var i, b, s = d < a.length ? (typeof a[d])[0] : "";
                  if (n >= r.length || "o" == (b = (typeof(i = r[n]))[0])) return !o || ("u" == s ? d > f && !c : "" == s != c);
                  if ("u" == b) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == b)
                      if (d <= f) {
                        if (i != a[d]) return !1
                      } else {
                        if (c ? i > a[d] : i < a[d]) return !1;
                        i != a[d] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || d <= f) return !1;
                    o = !1, d--
                  } else {
                    if (d <= f || b < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, d--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (n = 1; n < a.length; n++) {
                var p = a[n];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, f, c) => {
              var n = c ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(n).reduce(((a, r) => !t(f, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    c = (typeof f)[0];
                  if (r >= t.length) return "u" == c;
                  var n = t[r],
                    d = (typeof n)[0];
                  if (c != d) return "o" == c && "n" == d || "s" == d || "u" == c;
                  if ("o" != c && "u" != c && f != n) return f < n;
                  r++
                }
              })(a, r) ? a : r), 0)) && n[r]
            },
            f = e => {
              throw new Error(e)
            },
            c = (e => function(a, t, r, f, c) {
              var n = b.I(a);
              return n && n.then && !r ? n.then(e.bind(e, a, b.S[a], t, !1, f, c)) : e(a, b.S[a], t, r, f, c)
            })(((e, t, c, n, d, o) => {
              if (!((e, a) => e && b.o(e, a))(t, c)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, o);
              var i, s = r(t, c, d, n);
              return s ? ((i = s).loaded = 1, i.get()) : o ? o() : void f(((e, t, r, f, c) => {
                var n = e[r];
                return "No satisfying version (" + a(f) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(n).map((e => e + " from " + n[e].from)).join(", ")
              })(t, e, c, d, n))
            })),
            n = {},
            d = {
              2229: () => c("default", "react", !1, [1, 18, 2, 0], (() => b.e(8431).then((() => () => b(8431))))),
              1788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(9587), b.e(8240)]).then((() => () => b(2841))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => b.e(5389).then((() => () => b(5389))))),
              1913: () => c("default", "react", !1, [1, 18, 2, 0], (() => b.e(8659).then((() => () => b(8659))))),
              3582: () => c("default", "framer-motion", !1, [1, 7, 5, 1], (() => b.e(5912).then((() => () => b(5912))))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], (() => b.e(439).then((() => () => b(439))))),
              5587: () => c("default", "usehooks-ts", !1, [1, 2, 7, 2], (() => b.e(2562).then((() => () => b(2562))))),
              5966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(450), b.e(9757)]).then((() => () => b(9757)))))
            },
            o = {
              2229: [2229],
              4711: [1913, 3582, 4572, 5587, 5966],
              7583: [1788, 9623]
            },
            i = {};
          b.f.consumes = (e, a) => {
            b.o(o, e) && o[e].forEach((e => {
              if (b.o(n, e)) return a.push(n[e]);
              if (!i[e]) {
                var t = a => {
                  n[e] = 0, b.m[e] = t => {
                    delete b.c[e], t.exports = a()
                  }
                };
                i[e] = !0;
                var r = a => {
                  delete n[e], b.m[e] = t => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var f = d[e]();
                  f.then ? a.push(n[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            b.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                4711: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = b.miniCssF(e),
                  f = b.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (n = t[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (f === e || f === a)) return n
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var n;
                      if ((f = (n = c[r]).getAttribute("data-href")) === e || f === a) return n
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var n = t && t.type,
                        d = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + d + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = n, o.request = d, c.parentNode && c.parentNode.removeChild(c), f(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, f, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            7060: 0
          };
          b.f.j = (a, t) => {
            var r = b.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (2229 != a) {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var c = b.p + b.u(a),
                n = new Error;
              b.l(c, (t => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", n.name = "ChunkLoadError", n.type = f, n.request = c, r[1](n)
                }
              }), "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, f, [c, n, d] = t,
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in n) b.o(n, r) && (b.m[r] = n[r]);
                d && d(b)
              }
              for (a && a(t); o < c.length; o++) f = c[o], b.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), b(3032), b(5819)
      })())
    }
  }
}));