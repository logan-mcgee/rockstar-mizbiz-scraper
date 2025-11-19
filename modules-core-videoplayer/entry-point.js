try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "578cfd03-058f-4e29-9f47-d826ca276106", e._sentryDebugIdIdentifier = "sentry-dbid-578cfd03-058f-4e29-9f47-d826ca276106")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, r, d, c, f, b, o, n, l, i, s, u, p, h, m, g, y, v, w, k = {
            3032: (e, a, t) => {
              t(8419)
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, c = r.length; d !== a && c >= 0;) "/" === r[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + f
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
            8157: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => t.e(8271).then(() => () => t(8271)),
                  "./index": () => Promise.all([t.e(5473), t.e(2229), t.e(9623), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(2828), t.e(2918), t.e(8517), t.e(1030)]).then(() => () => t(1030)),
                  "./tina": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then(() => () => t(7684)),
                  "./tinaBlockTemplates": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then(() => () => t(7684))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => c
              })
            },
            8419: (e, a, t) => {
              (0, t(7411).w)(1)
            }
          },
          _ = {};

        function P(e) {
          var a = _[e];
          if (void 0 !== a) return a.exports;
          var t = _[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(t.exports, t, t.exports, P), t.loaded = !0, t.exports
        }
        return P.m = k, P.c = _, P.y = a, P.amdO = {}, P.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return P.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          P.r(d);
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = t(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, P.d(d, c), d
        }, P.d = (e, a) => {
          for (var t in a) P.o(a, t) && !P.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce((a, t) => (P.f[t](e, a), a), [])), P.u = e => "js/" + {
          131: "512cec37a33f7d3f1000a7f0fe0e158a",
          278: "b12f88a1496faf784671322f5a55b5a1",
          299: "58fb44545e3cd76aa093f474cb54afd8",
          314: "c1761ed02cd693a57479ee2c9182a896",
          439: "7518764396b4a538e005a5b90500d5e4",
          601: "0943858e4423664cd36643eb626a5549",
          662: "7c7956889795695b84843e4e3f70dce5",
          824: "54797aa5ec66743d31cf664d8d3d59db",
          907: "1d535b6967260b824d74063ede597df3",
          1030: "2c266f22ea4e1a2f3874fd10c29e4d93",
          1054: "cf20e42091d5f10c2364cedeaa381702",
          1098: "e5af3eb25b3f06773a8dde3c7316dc09",
          1242: "b9fbc0d0f0c74749f711eef76f10f4e4",
          1254: "32a97d81930a966c96673712b261222a",
          1703: "199345fa683701bffb8f5e8497fee545",
          1773: "1a40c65d5c86e1b1fd31f06b6fe7022b",
          1822: "92a4f706d292d364e48c87636386f0ed",
          1868: "712f5db560c5cd11f549774531c20d25",
          2156: "d5fe727edda69e47ef28f649056538c8",
          2169: "fc844ba397ac30dcfb11da8584496801",
          2171: "d0f5e49e5fe72a36afbabbc60be6aaaa",
          2217: "5bf54a0ddb07aba96d228ec245903620",
          2221: "db3c4cfc3e94360cd9a5d5175507d871",
          2243: "e8f345f128412913f7f8f967a65266dd",
          2293: "06413dfccbc32e70724a729e5b45e76e",
          2306: "7902b04ba032ed6dc16c163a35e82ea5",
          2347: "4d423176463716e86e87f8740753423f",
          2365: "d081d536ec7709cd044eabecbd057b02",
          2398: "3b8e5764a6240ed33c5587d02ed1c98e",
          2466: "b5248b037b8bacd60d35a0b6d8cc921c",
          2635: "42632d24828353ee09cca0d6aa180280",
          2642: "dd0cdf3c677cb0b81fe401c95e7cfc63",
          2657: "abe031e875669aeeefc40eaf4425c2bd",
          2678: "7ecf8e23387f3b87bd5cca581f7317a9",
          2864: "76aae2a6874b4327a9c0adc5aef5c3dd",
          3034: "5025c2003af0edefdaa9d3e87103b9c1",
          3197: "d0c1a196430bb0e401cbadec245160ff",
          3343: "ca0eec5c74fd70ac50d2714e76fcf7ac",
          3370: "f2aeaa2b4995c759c509e9508a4839a3",
          3475: "afd9ac76def96397e71238a1dc8d78ba",
          3486: "812a20a0fa89c6b99d5c5b621091583d",
          3697: "d8e617f78446179ed0bdd2442cc29acb",
          3885: "ecb3ab9d7705f43c9045c86b1f55b2e8",
          3941: "52bb3aa6e967585e638a6d9329bcc1ca",
          4011: "29d50c690081071c11928ada5bbd066e",
          4154: "f34fb31e104b99ad594a073b0d2ed5cc",
          4528: "6fae43b19639cac31d930ddf436c485c",
          4550: "bd50cd8922469959e06e8b4f9f966cb6",
          4578: "5f8006c696339e36cf137f39796fc015",
          4598: "1803db5abcf30fc6cfba12aa3af9c4f8",
          4621: "51613c291b22086012ba2347a6bd7fd4",
          4700: "16b12e65ef6428c8e27bca497b8fcd9b",
          4710: "3aebdd70f7dcd8ee3e69520b98d13e1a",
          4731: "2bb1ec8b356f3833bd7f1edf40ecf794",
          4799: "bf12694ceb655e5ba1172130e1fa90b7",
          4851: "642a88cc54688a520172fe879cf0c8e2",
          4861: "1dcf1cb4fb7bf2f2b868450706e9279b",
          4913: "bef521497a05d168355bf9975d74a1fa",
          5016: "45c9eb9598f1f1174226536351c99e9e",
          5018: "6ff710e4cea59b80c4ada5f84d43837a",
          5055: "eaeefeab10ec2d05d646b44ab6b5ea36",
          5076: "7e71f7fdea224772ecb291402edc2571",
          5233: "7f3613315dfde25a27b55e7756eae767",
          5259: "36210e64685e364b62c8b28fe313e075",
          5389: "02944239afbe36157dcbc44d8020242d",
          5473: "aaf6c0c1bb7fc6272f6372e0741958a4",
          5530: "d69750a0ec7ffcce7c13389fbeae769f",
          5639: "81fbc5cff6d0123a32f81412b7f659f1",
          5663: "a754262ccf2008034da8e6a834fc418c",
          5742: "ba2802b6045aae9350a9184b8428601d",
          5830: "e2a23d42fbc72951ccc605715152cc94",
          5832: "6af629f3b7c0fa9c8a9a62dc9009f601",
          5859: "7fad5d1dee193a40c02a0bee9ae84fac",
          6088: "1964ab11cbdc6c1df9d2ff54d0765138",
          6267: "232e87373e4ad64de6f5af0abde28237",
          6280: "ed048bc0e4a9bd514d59da6d184a4da3",
          6285: "dd3baa77a19fb4a4099b5a9895827d83",
          6361: "940ce2314b276f170140e26d7d30eb28",
          6664: "f5c69535dc22d0c3d563fa507da732f3",
          6879: "9a0de175cd4c81b93afde4619b75b72a",
          6891: "1a4e9838b1ee17cedf7f32aa5e1d1cd3",
          6929: "32b7cfaceb1e43b833824cae30e38c1b",
          6997: "d87daf3253be562c3319ab7e4fe520a5",
          7010: "3b4c870e32a50385aaf151d9db3357cb",
          7073: "a4ddbc867b97d05f4723e419a8140165",
          7436: "8df28d196e292152e330981aee238be4",
          7452: "832b20bc4d09f3357078600bba1e0a70",
          7453: "4a172390e170f795793120cc6e92fd14",
          7684: "7f687c9692e24da93a73ac81af042524",
          7731: "772dc930afa513054435e5e412311ab5",
          7970: "95f7cff4025c41f184119aef3e1ea084",
          8240: "9dadfe0828a3147f20d96b0ad1b3073d",
          8271: "8bb2f392a86ce432123e8c26761e4ed0",
          8272: "8cad1c83f7e743dc3efa13e4315e68d4",
          8284: "e8864e33723d2b78f5994fce680041a5",
          8391: "99ace496b9029c1881c80da307952275",
          8431: "72312e5484b890cbb2ca6c4b6e88c5d4",
          8517: "e6d23c242d486833cfe7ae688d3277a2",
          8755: "01288223f2c2e2f2c34cf9e9c3401bc0",
          8880: "e0e29b3c2cb67cfd842181c4cc375f9b",
          8970: "b8496acc700aa25027c0f27e625a9702",
          9022: "ce09699e0dbbb424115274473f42edef",
          9028: "46083eb3764540a0d26f89acfaf2caf7",
          9126: "ca3f541ee94c97c9ddc5dc59a134ba25",
          9377: "7b5564cc478789f76590392a501b84bf",
          9587: "dea7870244a7222d67aee35ea54529ee",
          9615: "8e3a20d672266106f13cace8bddb9e99",
          9719: "f18936afba241287eed0e38a01f6fcdd",
          9757: "140c6133fee49ec71bd2c181e17e1a92",
          9813: "6a2ac5297d9a5c02421b9c87625557e0",
          9936: "193eee77f972bcfd76784218454a98f3",
          9990: "e831088d258424558eb9966d4c598ae1"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          1030: "68fe3923c1fdc0da6a68721717e87aa9",
          2217: "30c5db481d6b25a478ff5719bcbdf03e",
          4598: "30c5db481d6b25a478ff5719bcbdf03e",
          5055: "a126229ede95b503bfddbd53efcedae3",
          7684: "0f3056ce40472624d7ee487fbb173c0a",
          8517: "d6d5c261867e7172fa1bcdafedebbe10"
        } [e] + ".css", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/modules-core-videoplayer:", P.l = (e, a, t, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, b;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var l = o[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + t) {
                  f = l;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, P.nc && f.setAttribute("nonce", P.nc), f.setAttribute("data-webpack", d + t), f.src = e), r[e] = [a];
            var i = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(s);
                var d = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach(e => e(t)), a) return a(t)
              },
              s = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), b && document.head.appendChild(f)
          }
        }, P.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, P.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              P.o(P.S, t) || (P.S[t] = {});
              var c = P.S[t],
                f = "@rockstargames/modules-core-videoplayer",
                b = (e, a, t, r) => {
                  var d = c[e] = c[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!r != !b.eager ? r : f > b.from)) && (d[a] = {
                    get: t,
                    from: f,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (b("@gsap/react", "2.1.2", () => Promise.all([P.e(2229), P.e(2828), P.e(4154)]).then(() => () => P(4154))), b("@popperjs/core", "2.11.8", () => P.e(9813).then(() => () => P(9813))), b("@rsgweb/locale-tools", "1.0.0", () => Promise.all([P.e(9587), P.e(2229), P.e(8240)]).then(() => () => P(2841))), b("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([P.e(1703), P.e(2229), P.e(5966), P.e(2918), P.e(2217)]).then(() => () => P(2217))), b("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([P.e(2293), P.e(1254), P.e(2229), P.e(9623), P.e(6188), P.e(5966), P.e(6088), P.e(4550)]).then(() => () => P(2169))), b("@rsgweb/utils", "1.0.0", () => Promise.all([P.e(2293), P.e(8284), P.e(2229), P.e(9623), P.e(6188), P.e(1788), P.e(6088), P.e(6565), P.e(9757)]).then(() => () => P(9757))), b("clsx", "2.1.1", () => P.e(439).then(() => () => P(439))), b("graphql", "16.11.0", () => P.e(601).then(() => () => P(601))), b("gsap", "3.12.5", () => P.e(9719).then(() => () => P(9719))), b("hammerjs", "2.0.8", () => P.e(7731).then(() => () => P(7731))), b("lodash", "4.17.21", () => P.e(5076).then(() => () => P(5076))), b("react-dom", "18.3.1", () => Promise.all([P.e(1098), P.e(2229)]).then(() => () => P(1098))), b("react-popper", "2.3.0", () => Promise.all([P.e(2229), P.e(4853), P.e(9005), P.e(2635)]).then(() => () => P(2635))), b("react-router-dom", "6.30.1", () => Promise.all([P.e(5389), P.e(2229), P.e(4853)]).then(() => () => P(5389))), b("react", "18.3.1", () => P.e(8431).then(() => () => P(8431))), b("uuid", "9.0.1", () => P.e(2657).then(() => () => P(2657)))), e[t] = o.length ? Promise.all(o).then(() => e[t] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), c = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = t[1] ? a(t[1]) : [];
          return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
        }, f = (e, a) => {
          e = c(e), a = c(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t],
              d = (typeof r)[0];
            if (t >= a.length) return "u" == d;
            var f = a[t],
              b = (typeof f)[0];
            if (d != b) return "o" == d && "n" == b || "s" == b || "u" == d;
            if ("o" != d && "u" != d && r != f) return r < f;
            t++
          }
        }, b = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, d = 1; d < e.length; d++) r--, t += "u" == (typeof(f = e[d]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, f);
            return t
          }
          var c = [];
          for (d = 1; d < e.length; d++) {
            var f = e[d];
            c.push(0 === f ? "not(" + o() + ")" : 1 === f ? "(" + o() + " || " + o() + ")" : 2 === f ? c.pop() + " " + c.pop() : b(f))
          }
          return o();

          function o() {
            return c.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, o = (e, a) => {
          if (0 in e) {
            a = c(a);
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var d = 0, f = 1, b = !0;; f++, d++) {
              var n, l, i = f < e.length ? (typeof e[f])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(n = a[d]))[0])) return !b || ("u" == i ? f > t && !r : "" == i != r);
              if ("u" == l) {
                if (!b || "u" != i) return !1
              } else if (b)
                if (i == l)
                  if (f <= t) {
                    if (n != e[f]) return !1
                  } else {
                    if (r ? n > e[f] : n < e[f]) return !1;
                    n != e[f] && (b = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (r || f <= t) return !1;
                b = !1, f--
              } else {
                if (f <= t || l < i != r) return !1;
                b = !1
              } else "s" != i && "n" != i && (b = !1, f--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? o(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && P.o(e, a), l = e => (e.loaded = 1, e.get()), i = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}), s = (e, a, t, r) => {
          var d = r ? i(e[a]) : e[a];
          return (a = Object.keys(d).reduce((e, a) => !o(t, a) || e && !f(e, a) ? e : a, 0)) && d[a]
        }, u = (e, a, t, r, d) => {
          var c = e[t];
          return "No satisfying version (" + b(r) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
        }, p = e => {
          throw new Error(e)
        }, h = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), m = (e => function(a, t, r, d, c) {
          var f = P.I(a);
          return f && f.then && !r ? f.then(e.bind(e, a, P.S[a], t, !1, d, c)) : e(a, P.S[a], t, r, d, c)
        })((e, a, t, r, d, c) => {
          if (!n(a, t)) return h(e, t, c);
          var f = s(a, t, d, r);
          return f ? l(f) : c ? c() : void p(u(a, e, t, d, r))
        }), g = {}, y = {
          2229: () => m("default", "react", !1, [1, 18, 2, 0], () => P.e(8431).then(() => () => P(8431))),
          9623: () => m("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([P.e(5389), P.e(4853)]).then(() => () => P(5389))),
          6188: () => m("default", "lodash", !1, [1, 4, 17, 21], () => P.e(5076).then(() => () => P(5076))),
          5966: () => m("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([P.e(2293), P.e(8284), P.e(9623), P.e(6188), P.e(1788), P.e(6088), P.e(6929)]).then(() => () => P(9757))),
          1788: () => m("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([P.e(9587), P.e(5859)]).then(() => () => P(2841))),
          1569: () => m("default", "uuid", !1, [1, 9, 0, 0], () => P.e(2657).then(() => () => P(2657))),
          2828: () => m("default", "gsap", !1, [4, 3, 12, 5], () => P.e(9719).then(() => () => P(9719))),
          2918: () => m("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([P.e(2293), P.e(1254), P.e(9623), P.e(6188), P.e(6088), P.e(2169)]).then(() => () => P(2169))),
          4572: () => m("default", "clsx", !1, [1, 2, 1, 1], () => P.e(439).then(() => () => P(439))),
          4848: () => m("default", "hammerjs", !1, [1, 2, 0, 8], () => P.e(7731).then(() => () => P(7731))),
          5971: () => m("default", "react-popper", !1, [1, 2, 3, 0], () => Promise.all([P.e(4853), P.e(9005), P.e(5016)]).then(() => () => P(2635))),
          7224: () => m("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], () => Promise.all([P.e(1703), P.e(4598)]).then(() => () => P(2217))),
          7654: () => m("default", "@gsap/react", !1, [1, 2, 1, 0], () => P.e(1773).then(() => () => P(4154))),
          4853: () => m("default", "react-dom", !1, [1, 18, 2, 0], () => P.e(1098).then(() => () => P(1098))),
          6565: () => m("default", "graphql", !1, [1, 16, 9, 0], () => P.e(601).then(() => () => P(601))),
          9005: () => m("default", "@popperjs/core", !1, [1, 2, 11, 7], () => P.e(9813).then(() => () => P(9813)))
        }, v = {
          1569: [1569],
          1788: [1788],
          2229: [2229],
          2828: [2828],
          2918: [2918],
          4853: [4853],
          5966: [5966],
          6188: [6188],
          6565: [6565],
          6929: [6565],
          8517: [4572, 4848, 5971, 7224, 7654],
          9005: [9005],
          9623: [9623]
        }, w = {}, P.f.consumes = (e, a) => {
          P.o(v, e) && v[e].forEach(e => {
            if (P.o(g, e)) return a.push(g[e]);
            if (!w[e]) {
              var t = a => {
                g[e] = 0, P.m[e] = t => {
                  delete P.c[e], t.exports = a()
                }
              };
              w[e] = !0;
              var r = a => {
                delete g[e], P.m[e] = t => {
                  throw delete P.c[e], a
                }
              };
              try {
                var d = y[e]();
                d.then ? a.push(g[e] = d.then(t).catch(r)) : t(d)
              } catch (e) {
                r(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            P.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1030: 1,
                2217: 1,
                4598: 1,
                5055: 1,
                7684: 1,
                8517: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = P.miniCssF(e),
                  d = P.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (f = t[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((d = (f = c[r]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", P.nc && (c.nonce = P.nc), c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var f = t && t.type,
                        b = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + b + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = b, c.parentNode && c.parentNode.removeChild(c), d(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
            7614: 0
          };
          P.f.j = (a, t) => {
            var r = P.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(2(229|828|918)|(17|61)88|1569|4853|5966|6565|9005|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var c = P.p + P.u(a),
                f = new Error;
              P.l(c, t => {
                if (P.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, r[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [c, f, b] = t,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) P.o(f, r) && (P.m[r] = f[r]);
                b && b(P)
              }
              for (a && a(t); o < c.length; o++) d = c[o], P.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), P(3032), P(8157)
      })())
    }
  }
});