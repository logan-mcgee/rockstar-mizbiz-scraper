try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5e49e446-4735-439f-a893-a79b7477fa64", e._sentryDebugIdIdentifier = "sentry-dbid-5e49e446-4735-439f-a893-a79b7477fa64")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, d, f, n, o, c = {
            17411: (e, a, t) => {
              const r = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, t) => {
              (0, t(17411).w)(1)
            },
            77027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var n = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + n
              };
              Number.isInteger
            },
            85819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(6930), t.e(4656), t.e(1127), t.e(1021), t.e(1961)]).then(() => () => t(31961))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            },
            93032: (e, a, t) => {
              t(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = c, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var n = 2 & t && a;
            ("object" == typeof n || "function" == typeof n) && !~e.indexOf(n); n = r(n)) Object.getOwnPropertyNames(n).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, t) => (i.f[t](e, a), a), [])), i.u = e => "js/" + {
          131: "68675bae24b2d8b4db3d643a97e7f63d",
          278: "919a1491a485fec9ea0c8f4f908e7a66",
          299: "616a8497a79041b0949cbba2781f8cac",
          314: "32db25b5abef6b9adfa1aab0d3049b19",
          439: "5ac148450479d2261d96d425c95f2652",
          662: "6832302727b55a5fcddbe9d1e0b6cdd0",
          824: "e0fa69e74c1ba8c6d681cbc6d444ee14",
          907: "656c6f8ef8d829003536654a88902fd8",
          1021: "c5ac1acaeb9aae0d0af75402b73cd9de",
          1054: "9c067c74a8b5159df20f0ad6667aa82f",
          1098: "956d42d593a0a5cb3fd77f89aba327bb",
          1242: "694328794d128731c6c919c05399f7cb",
          1822: "30ace6ffd62a06abfdbe3bbb604ee3cd",
          1868: "0f6fa62fd38747a9351c1f407c0befe6",
          1961: "0a14ed4bb47d3a593c667041f247349e",
          2156: "381a73f9c42e37f4ee0ea93bb454eead",
          2171: "fd9deb79ae14bcb52ad56f0e4f83b085",
          2221: "26f44c85b3cb2220575e5029c1b2769c",
          2243: "3aec5d12baa2d442560a33f4cbb70faf",
          2295: "b1faa24d44a69df345ad5efc502af44f",
          2306: "5c49c5d658bafda4796ad683bee767cc",
          2347: "055b00d4487583c28d90b3fa307712dc",
          2365: "65f3d5dfd8979397422a32a0c146c9f8",
          2398: "2cd5980a921f769d46ff96d1b0c10a7f",
          2466: "6e8bf6fea7c7fcde1174afa0952044be",
          2562: "2920109888e1b297d74bb69519b3dc5b",
          2642: "dfa6ecd2b7305aa9ba627ab16bdbd4d1",
          2678: "10d0fa5e49d5536d68db3d18a505de36",
          2853: "2dee92a37d17caebd905dfca8109f555",
          2864: "807cfda43d97ada2ccc32027ec23fe70",
          3004: "3b4f8a16b18f829ac18be03f1d2e3281",
          3034: "c3087085aa8acba2f3c828c1d682c23e",
          3197: "5375e690f1b54c93ece286758925722f",
          3343: "138e1719fb59e63aa246d3d6974c68f8",
          3370: "b9ce75b5b87fd01431ad5cad2424a8c4",
          3475: "db89e780a8d2a8a0919905cf6bcf9713",
          3486: "0a1f07246205b53c2bd0c2b8bacca0b9",
          3697: "a7b4f8200d3fcd3929cf8b9510eb4aa9",
          3885: "f450108735fa715d40adc0b2a1336360",
          3941: "f8b8976575cfe96461aaafb555fce44b",
          4011: "79af65f61eb11f93f74bc967f31b744e",
          4057: "250e513bb264b3407c59637b27c28969",
          4528: "540d32b63c34212ce813fab4484ba559",
          4578: "83c10d8aa10893c79f3cc9ad88f6f7a9",
          4621: "ba6c4d90abe287e22aaca52cad88f59b",
          4656: "cd5c1f5e141fe3c7fd0a9b3a029edcf6",
          4700: "1ff1b91421e85368f59d293f813005ac",
          4710: "09b7d61a49b6d135aaf0d657fdd70b5c",
          4731: "f4179f8a12eea058f0f39d2d44390bf5",
          4799: "b2f9ca7fd3f1a23143b55ff1ae33083e",
          4851: "5e72d6db4b5bd7e514d73118e9a334ba",
          4861: "530f36b0fc2c48d2359a53dbc91ee887",
          4913: "7801dccc4d6db51dfdda8f0ce76648e1",
          5018: "8b1b0db6a05b33ce17c7c6ec7a03bbcc",
          5233: "13f99166c9560ab7c1a342a1b9abe346",
          5259: "750ee64fb02a592516a807467abe5a08",
          5288: "f15ac6de4549648d8451a894224cb61d",
          5389: "9e100a738d5880d69740a4154570a99b",
          5530: "90bbc19118f04616ce94e2247479b3fd",
          5639: "2d2abc730bb0a5224cae9825e76f9dcf",
          5663: "74ab20a6e079e5983a4b32fd35b6ff88",
          5742: "74f7a3da212b72c072ee2cffcc102118",
          5830: "1b84fd911c93c10164a81d6aa3c9f3af",
          5832: "bd764903d7e9434f8d8f66d4f390bb4a",
          6267: "807c8ca4b77c95623f9367221e6cb8e9",
          6280: "3817317680b20501d217aefc7dca4784",
          6285: "4431c18625d786f56befdcac9a02eb89",
          6361: "4244e4931f1f2d98a52aa43c943e519a",
          6664: "eaeef1a547033fc4711492ba844b0228",
          6879: "1d8fb0d5174d3aaf004633beb4aa16c6",
          6891: "639fce06c9a2cf4e2bab31d815b9f73a",
          6930: "eeb02fd2283458e00b148144460fc002",
          6997: "72d35db2e77b4f20831c073fc4a26dbe",
          7010: "a233b28807cc9c2df58bd85da59a9042",
          7073: "adaf80e6955f06c67fceb032b67288e5",
          7436: "a56717de766633f1bddc1fb768cc5dc1",
          7452: "7a34261b1812d93d8618ec912248c0d8",
          7453: "59ac383d46c77b765fed783b4c867712",
          7970: "b5e2e873d07f5cc9fe322ffad99266ce",
          8240: "9be4e6913b508bda5c3903c84691442c",
          8272: "bf556e6c28d09523306024af12cdcb21",
          8391: "a2fe836566527d0e57b69edb4f96f2f6",
          8431: "66dcf6ebc2ace84cd9b812d51fc0b9f8",
          8755: "43dce347317c28974891fc87957cbb37",
          8880: "e85f80a793792d66ffe81f6e03309c36",
          8970: "7fced1d3e9fdc26ec16642594c0c1fca",
          9022: "72814b195f69b488b94c03f7e513ec1d",
          9028: "1e9fa5961654f73beac63af9e74963f6",
          9126: "d9c966a7d84f70fe976b45c5497ad882",
          9377: "3c19ac4e129c48ebab7eb868443991a9",
          9587: "f9b1e39c2a62be8eefd1f2ca68911d52",
          9615: "664a6f1aeb0c5fbd85cabac870142c24",
          9936: "b54a1517cac555da8ca92ace42b2cc6d",
          9975: "69e44ec7575911dd0ce03059e449a0c6",
          9990: "590809ad5d4d6bb5a40e1ada41f2ebeb"
        } [e] + ".js", i.miniCssF = e => "css/776313306c01043409c4e8f3e8685821.css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-gta-trilogy:", i.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var n, o;
            if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), b = 0; b < c.length; b++) {
                var s = c[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + t) {
                  n = s;
                  break
                }
              }
            n || (o = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, i.nc && n.setAttribute("nonce", i.nc), n.setAttribute("data-webpack", f + t), n.src = e), d[e] = [a];
            var l = (a, t) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], n.parentNode && n.parentNode.removeChild(n), r && r.forEach(e => e(t)), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), o && document.head.appendChild(n)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          1961: [31879]
        }, o = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach(e => {
            var t = i.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, n, o, c) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return o(b, n, c);
                    var i = b.then(e => o(e, n), d);
                    if (!c) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                n = (e, a, d) => f(a.get, r[1], t, 0, c, d),
                c = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, r[2], 0, 0, (e, a, t) => e ? f(i.I, r[0], 0, e, n, t) : d(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var f = i.S[t],
                n = "@rockstargames/sites-gta-trilogy",
                o = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : n > o.from)) && (d[a] = {
                    get: t,
                    from: n,
                    eager: !!r
                  })
                },
                c = [];
              return "default" === t && (o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3004), i.e(9587), i.e(1127), i.e(9975)]).then(() => () => i(12841))), o("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(3004), i.e(4057), i.e(6930), i.e(1127), i.e(2853), i.e(1021)]).then(() => () => i(42853))), o("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), o("framer-motion", "12.35.0", () => Promise.all([i.e(5288), i.e(1127), i.e(2295)]).then(() => () => i(45288))), o("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), o("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), o("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), o("usehooks-ts", "2.16.0", () => Promise.all([i.e(2562), i.e(1127)]).then(() => () => i(92562))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return c.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return c.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), c.length ? e[t] = Promise.all(c).then(() => e[t] = 1) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
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
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(o = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return r
              }
              var n = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                n.push(0 === o ? "not(" + c() + ")" : 1 === o ? "(" + c() + " || " + c() + ")" : 2 === o ? n.pop() + " " + n.pop() : a(o))
              }
              return c();

              function c() {
                return n.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var n = 0, o = 1, c = !0;; o++, n++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (n >= r.length || "o" == (i = (typeof(b = r[n]))[0])) return !c || ("u" == s ? o > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!c || "u" != s) return !1
                  } else if (c)
                    if (s == i)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (c = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || o <= d) return !1;
                    c = !1, o--
                  } else {
                    if (o <= d || i < s != f) return !1;
                    c = !1
                  } else "s" != s && "n" != s && (c = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (n = 1; n < a.length; n++) {
                var h = a[n];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, t, r) => {
              var d = r ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[t]) : a[t];
              return Object.keys(d).reduce((a, t) => !a || !d[a].loaded && ((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    f = (typeof d)[0];
                  if (r >= t.length) return "u" == f;
                  var n = t[r],
                    o = (typeof n)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && d != n) return d < n;
                  r++
                }
              })(a, t) ? t : a, 0)
            },
            d = (e, a, t) => t ? t() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            f = (e => function(a, t, r, d, f) {
              var n = i.I(a);
              return n && n.then && !r ? n.then(e.bind(e, a, i.S[a], t, !1, d, f)) : e(a, i.S[a], t, r, d, f)
            })((e, f, n, o, c, b) => {
              if (!((e, a) => e && i.o(e, a))(f, n)) return d(e, n, b);
              var s, l, u = r(f, n, o);
              return t(c, u) || (l = ((e, t, r, d) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(d) + ")")(f, n, u, c), "undefined" != typeof console && console.warn && console.warn(l)), (s = f[n][u]).loaded = 1, s.get()
            }),
            n = {},
            o = {
              71127: () => f("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              10181: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              56990: () => f("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(9587), i.e(8240)]).then(() => () => i(12841))),
              1556: () => f("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              8513: () => f("default", "usehooks-ts", !1, [1, 2, 7, 2], () => i.e(2562).then(() => () => i(92562))),
              48586: () => f("default", "framer-motion", !1, [1, 12, 34, 5], () => i.e(5288).then(() => () => i(45288))),
              58136: () => f("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(4057), i.e(2853)]).then(() => () => i(42853))),
              18429: () => f("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098)))
            },
            c = {
              1021: [10181, 56990],
              1127: [71127],
              1961: [1556, 8513, 48586, 58136],
              8429: [18429]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach(e => {
              if (i.o(n, e)) return a.push(n[e]);
              if (!b[e]) {
                var t = a => {
                  n[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete n[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? a.push(n[e] = d.then(t).catch(r)) : t(d)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1961: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = i.miniCssF(e),
                  d = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (n = t[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (d === e || d === a)) return n
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var n;
                      if ((d = (n = f[r]).getAttribute("data-href")) === e || d === a) return n
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var n = t && t.type,
                        o = t && t.target && t.target.href || a,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + o + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = n, c.request = o, f.parentNode && f.parentNode.removeChild(f), d(c)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            7060: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(1127|8429)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var f = i.p + i.u(a),
                n = new Error;
              i.l(f, t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", n.name = "ChunkLoadError", n.type = d, n.request = f, r[1](n)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, n, o] = t,
                c = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in n) i.o(n, r) && (i.m[r] = n[r]);
                o && o(i)
              }
              for (a && a(t); c < f.length; c++) d = f[c], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i(93032), i(85819)
      })())
    }
  }
});