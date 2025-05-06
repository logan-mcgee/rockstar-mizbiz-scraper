! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "58e3fc28-a4ee-4719-8f05-af6d95101140", e._sentryDebugIdIdentifier = "sentry-dbid-58e3fc28-a4ee-4719-8f05-af6d95101140")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, f, d, c, r, t, b = {
            24075: (e, a, f) => {
              (0, f(47387).w)(1)
            },
            47387: (e, a, f) => {
              const d = f(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = d(f.y.meta.url, e)
              }
            },
            45408: (e, a, f) => {
              f(24075)
            },
            13099: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var d = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, c = 0, r = d.length; c !== a && r >= 0;) "/" === d[--r] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var t = d.slice(0, r + 1);
                return f.protocol + "//" + f.host + t
              };
              Number.isInteger
            },
            98478: (e, a, f) => {
              "use strict";
              var d = {
                  "./root": () => Promise.all([f.e(40), f.e(7454), f.e(2604), f.e(7168), f.e(5654), f.e(2229), f.e(9623), f.e(4853), f.e(5966), f.e(5311), f.e(1283)]).then((() => () => f(91283)))
                },
                c = (e, a) => (f.R = a, a = f.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                r = (e, a) => {
                  if (f.S) {
                    var d = "default",
                      c = f.S[d];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[d] = e, f.I(d, a)
                  }
                };
              f.d(a, {
                get: () => c,
                init: () => r
              })
            }
          },
          o = {};

        function n(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var f = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(f.exports, f, f.exports, n), f.loaded = !0, f.exports
        }
        return n.m = b, n.c = o, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var c = Object.create(null);
          n.r(c);
          var r = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var t = 2 & d && a;
            "object" == typeof t && !~e.indexOf(t); t = f(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, n.d(c, r), c
        }, n.d = (e, a) => {
          for (var f in a) n.o(a, f) && !n.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, f) => (n.f[f](e, a), a)), [])), n.u = e => "js/" + {
          40: "547465db9c04471b0f0899e035c5e242",
          131: "b37ade1b798a8a258f70b59bf4da0b34",
          278: "df76077c761acc25b9c647b9d696b29d",
          299: "6e7ca6160e84adcb23343a246d40bdd9",
          314: "abbc3050e070352d84a3a2d50a9e60b2",
          377: "265318016cf2f414d1083972c3b8f2cb",
          601: "eedbe7ba13c21895afe20c8b6d4a8d4f",
          662: "9221d7daf9321a239d4b79cd8b0708b7",
          721: "51f057e61e0304904f0bd1b332021197",
          824: "a0d6011874d4cea7d90391e66372dfd3",
          888: "d15f56b43716ceb89d478f5d1c38a646",
          907: "b7ad4c4cbe7cd7f0568fd9a06045036b",
          969: "cfdb535c7c92c89bab9bf7bc0dc6c05a",
          1054: "792752c9c869807189be90d85d916831",
          1242: "3ae2351521331f53f4e9eaf221ff9b0c",
          1283: "f275b14f13d1f31ed311218a60c2d432",
          1360: "b45274f2700a9639043fabb0b812f3ca",
          1506: "8b77f38fd0dfd15b90b7280ab8f5a617",
          1607: "be58f2ede3b05b07baddcbdc31a85c7e",
          1673: "df7417725a724b79de9cf99cb110933a",
          1720: "451b9ef2190106944b2aa836d3529c6b",
          1734: "7495847b67540d45f1adbe041ddd1a26",
          1796: "8ae484c38b5eb3138d42405863ab4a4a",
          1822: "6296eba9b6a43ea43d90bfcd4d339857",
          1868: "a6d669c85c475c66362fbcdfb87fc42d",
          2024: "994ad104c74b14b7f30ad2a6418cec31",
          2156: "dc962f5924ef6bd9280e0b63c97277a1",
          2171: "380ece6c6d16b583f1a35fc5a03639fd",
          2221: "2b53551593beba57a5c473957ffad7b5",
          2229: "5f7443664507c92cb2b814b672ce5625",
          2243: "f7cd2d3623d52eca91c9f7d5f2a7c568",
          2347: "5fa310cf5c132f132fc9f22f58942b8b",
          2365: "e0a83f144e2aee7327be22dfe52e8937",
          2398: "6a38c5a86d3e86b2dffdb485d3afb7aa",
          2466: "eb555ae58268a762ec05d20f88be948b",
          2604: "7d081e0d6d2084ab8f5b246fd17799cd",
          2642: "e5dba833536169774a571b75b4523ac4",
          2678: "3f8c6ea978b5429e86ac0cb30aa7893c",
          2772: "f8b725520d4c3bfd58111a348675f538",
          2864: "3af707063051f91388723c1824fabc98",
          2941: "60e27251696d907da4a910c19e5bf73d",
          3034: "ffd4fe15b6500a67fdf4242895904980",
          3095: "ff63c526ea16d4ae5a1fa441cdf9c381",
          3197: "2f8868758a2eb4ad2ac197a04ee77c5e",
          3321: "a340ad3caac9136b262829bac2aad531",
          3343: "d6810217a4bb4a2b8aa150165d1f1abb",
          3370: "7d2d070d12b4f0abb4709072ab18c9ef",
          3447: "bbd616a632579aa483f91deb7172b6d9",
          3475: "39d642037b4dbc218b40b87300d3c11b",
          3486: "199fb5a3b61239473924b337afcc549a",
          3622: "5fd8ac5ef490f4b61a0bb326c0dca624",
          3697: "d3c76b2fab5949bd89bdcf89128b3893",
          3807: "f85bcff39e4a0c2c59c08104d1d1780d",
          3885: "bd839ddef514c44fc68697fe4d4bae6e",
          3941: "361b55d42a00259d8ea915f329a4693d",
          3951: "f502b1a3b2acc548846abe1999659150",
          3980: "da5448260030d6ee53c5000dbc5e8714",
          4011: "b7b25c7ac193641e6ca223255bae189d",
          4018: "338a32a531c79bcbe1505183523c96ad",
          4054: "16a160c687b3246bb0383a5845addccc",
          4186: "4cd66134da4a70d1d2d5b367ca31da78",
          4220: "12f8b2dc8e6b9f794863b84cb18aefdf",
          4389: "61e42ec552ef2503a178e51939f384bc",
          4528: "3072851753ee6eb3600b96bd79ebce49",
          4621: "89f86cf98699dc7fd74b97c122d0413b",
          4700: "ca119b099d6b5b637c135688a254ff72",
          4710: "3e2ccba655cf20c091f1327d35707400",
          4731: "e211439eb1cce4068eddc288df4ce938",
          4799: "204eab7dfd9eeeac293144082544d9e8",
          4851: "23a951de21bb3c8bdb70009de8330d9e",
          4853: "94de6943d4918ad1b91858da04ba9a68",
          4861: "5769af3b11489f987ada9c11a48a86e4",
          4913: "e92b8e5110606cb179f061a253aacbb4",
          5018: "907fe67b37c0d8340fcd23ac8a945190",
          5233: "94bf20e1ceb20180a23d3bf14f6a5b4a",
          5247: "460b5f020fc9a9d01894bdd181686a10",
          5254: "58d175f7842065507fd573ee0acf9cfd",
          5259: "0003b01f1f664efc853b8c383069a17d",
          5311: "afa2355233937a35f7cb8b411ca78c6d",
          5416: "400714f1c831be540b445f2a2b8c235a",
          5530: "4f964def82df827d9bc7fe3e9cb3fe19",
          5639: "67546a0983679cabba1b2c62246f7adc",
          5654: "db6f3c5c05e16bf6985375083383ad82",
          5663: "4986b2f2830162ff9d560fb22c56df34",
          5742: "8cd6d980cffeaa3c58ddb6f9457d4d57",
          5794: "1f3fe2361ba53bbef794abc32a04e59a",
          5830: "3a8e5f2920631eb7bd4dbce975ae0b4c",
          5832: "8835d33f3303c1c3858be8386af93358",
          5966: "417e3fa80e840e939300c374387e21a7",
          6131: "31350eb160ee72cb8b9810e1a2bb3352",
          6267: "1491edf603dcf0f7a017217111e7d5ae",
          6280: "bee7c3a5b7b996bcddea9430b07b12ad",
          6285: "75336679ee58657d16e3c2b63504e9be",
          6361: "99ea0a4094b5333633cbbcf554a1a296",
          6638: "2580eb93e4e3575605f7c5fb03f79207",
          6664: "f3586f52a3733b44c2d2581f692697d6",
          6682: "c6d8032e8878838ba5cb22998887b2d5",
          6879: "b60356510447626baabd14c63f02a917",
          6891: "c2224f57408d9b83cb8d734609f8620c",
          6940: "747e788ba2e6adf179bf493527ce3550",
          6997: "7548a748621c3871e5c6882051c8a45a",
          7010: "621d611e18a1ee81f306577a30fcbb0c",
          7039: "caafb7ec0e91af7bbd71a5c11fd5b6a2",
          7073: "f817edfba1b1ae127d5d1320c599e73e",
          7168: "6c0dbce7d54365f5e2727e22911f74ab",
          7436: "0df0f4ccc0bedbba2033bd26f87739c6",
          7452: "84910d41eb64377286b0ddf3725fab7f",
          7453: "b6fd22ef003e3df1c6de100a1655aaa5",
          7454: "4c3da5a63fd4484de4a8cd0a7027b2e8",
          7599: "26fc1e04ed90d14293895be8fa534b9f",
          7740: "a766faeafcecad4f336a42e6d448a9fb",
          7911: "9104c44108c9e3236cf71707c5a40752",
          7970: "1858f69279a5a27689ec0c2372b82f8a",
          8179: "f9c48faecfefe1195a384b1ebdc9b619",
          8272: "aba8f32fed5b12bc930d3ea370dd511e",
          8391: "a34e18afcd69e5149584460fece047ad",
          8755: "9a93b014cfb4eeff1f07b3c7de651002",
          8880: "84d7c4d0e50ddcef21ffe9a04b9022e3",
          8885: "fba79bf9a81652f205ecbad2e0498da4",
          8961: "977a1ceff3c55af45171ad43d7fc9954",
          8970: "e938a053baeefd32749c1ee802af31b7",
          9022: "2792b26d64ee237159a6e8201beb39cd",
          9028: "6bfbb4606a9c87f907226a7d56b9b23d",
          9126: "7ba03320496661416ab8d3d7387ff969",
          9362: "3eac44cb1e3c8d78b16a91739c0fb7ed",
          9377: "95cbd25c1e37c6ed5dbb29d29c1a4de4",
          9474: "63af35a00c738be5eb038fb7fd53050d",
          9615: "9df90224b78a424911e4ec03b0930e16",
          9623: "f642de34a1ad70eccafbf9b8d4b75dc0",
          9642: "c47647641e67b45c1ded5d283b3b4b98",
          9686: "d6bd91440febecd956741def49f8e918",
          9757: "71b4d0611c1890df0630b9573587446b",
          9842: "a30a3366d12cf8f43861a8e551426df2",
          9936: "f1c64759d65c5be968be15f8503dbb85",
          9990: "1f0bfbad5c187a47d16e70dfeb98cbfd"
        } [e] + ".js", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/modules-core-footer:", n.l = (e, a, f, r) => {
          if (d[e]) d[e].push(a);
          else {
            var t, b;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var l = o[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == c + f) {
                  t = l;
                  break
                }
              }
            t || (b = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, n.nc && t.setAttribute("nonce", n.nc), t.setAttribute("data-webpack", c + f), t.src = e), d[e] = [a];
            var s = (a, f) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var c = d[e];
                if (delete d[e], t.parentNode && t.parentNode.removeChild(t), c && c.forEach((e => e(f))), a) return a(f)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = s.bind(null, t.onerror), t.onload = s.bind(null, t.onload), b && document.head.appendChild(t)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), r = {}, t = {}, n.f.remotes = (e, a) => {
          n.o(r, e) && r[e].forEach((e => {
            var f = n.R;
            f || (f = []);
            var d = t[e];
            if (!(f.indexOf(d) >= 0)) {
              if (f.push(d), d.p) return a.push(d.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), n.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                r = (e, f, r, t, b, o) => {
                  try {
                    var n = e(f, r);
                    if (!n || !n.then) return b(n, t, o);
                    var i = n.then((e => b(e, t)), c);
                    if (!o) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    c(e)
                  }
                },
                b = (e, a, c) => r(a.get, d[1], f, 0, o, c),
                o = a => {
                  d.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(n, d[2], 0, 0, ((e, a, f) => e ? r(n.I, d[0], 0, e, b, f) : c()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (f, d) => {
            d || (d = []);
            var c = a[f];
            if (c || (c = a[f] = {}), !(d.indexOf(c) >= 0)) {
              if (d.push(c), e[f]) return e[f];
              n.o(n.S, f) || (n.S[f] = {});
              var r = n.S[f],
                t = "@rockstargames/modules-core-footer",
                b = (e, a, f, d) => {
                  var c = r[e] = r[e] || {},
                    b = c[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : t > b.from)) && (c[a] = {
                    get: f,
                    from: t,
                    eager: !!d
                  })
                },
                o = [];
              return "default" === f && (b("@foundry/react-v4", "4.1.2", (() => Promise.all([n.e(8179), n.e(40), n.e(7454), n.e(8961), n.e(6131), n.e(2229), n.e(4853), n.e(6638)]).then((() => () => n(46131))))), b("@foundry/react", "1.28.2", (() => Promise.all([n.e(8179), n.e(40), n.e(7454), n.e(9842), n.e(2604), n.e(2229), n.e(4853)]).then((() => () => n(5143))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(2024), n.e(2229), n.e(1673)]).then((() => () => n(85950))))), b("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([n.e(601), n.e(7454), n.e(8961), n.e(1734), n.e(7168), n.e(2229), n.e(6682), n.e(9623), n.e(4853), n.e(5966), n.e(7911), n.e(5311)]).then((() => () => n(48999))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(601), n.e(1720), n.e(2229), n.e(6682), n.e(9623), n.e(5966), n.e(1796)]).then((() => () => n(2772))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(601), n.e(2229), n.e(6682), n.e(9623), n.e(7599)]).then((() => () => n(48267))))), b("react-dom", "18.2.0", (() => Promise.all([n.e(5794), n.e(2229)]).then((() => () => n(5794))))), b("react-router-dom", "6.17.0", (() => Promise.all([n.e(4018), n.e(2229)]).then((() => () => n(54018))))), b("react", "18.2.0", (() => n.e(3447).then((() => () => n(13447)))))), e[f] = o.length ? Promise.all(o).then((() => e[f] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var d = f.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = f[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = f[1] ? a(f[1]) : [];
              return f[2] && (d.length++, d.push.apply(d, a(f[2]))), f[3] && (d.push([]), d.push.apply(d, a(f[3]))), d
            },
            a = (f, d) => {
              if (0 in f) {
                d = e(d);
                var c = f[0],
                  r = c < 0;
                r && (c = -c - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var n, i, l = b < f.length ? (typeof f[b])[0] : "";
                  if (t >= d.length || "o" == (i = (typeof(n = d[t]))[0])) return !o || ("u" == l ? b > c && !r : "" == l != r);
                  if ("u" == i) {
                    if (!o || "u" != l) return !1
                  } else if (o)
                    if (l == i)
                      if (b <= c) {
                        if (n != f[b]) return !1
                      } else {
                        if (r ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (r || b <= c) return !1;
                    o = !1, b--
                  } else {
                    if (b <= c || i < l != r) return !1;
                    o = !1
                  } else "s" != l && "n" != l && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (t = 1; t < f.length; t++) {
                var p = f[t];
                s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, d) : !u())
              }
              return !!u()
            },
            f = (f, d, c) => {
              var r = f[d];
              return (d = Object.keys(r).reduce(((f, d) => !a(c, d) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var d = 0;;) {
                  if (d >= a.length) return d < f.length && "u" != (typeof f[d])[0];
                  var c = a[d],
                    r = (typeof c)[0];
                  if (d >= f.length) return "u" == r;
                  var t = f[d],
                    b = (typeof t)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && c != t) return c < t;
                  d++
                }
              })(f, d) ? f : d), 0)) && r[d]
            },
            d = (e => function(a, f, d, c) {
              var r = n.I(a);
              return r && r.then ? r.then(e.bind(e, a, n.S[a], f, d, c)) : e(a, n.S[a], f, d, c)
            })(((e, a, d, c, r) => {
              var t = a && n.o(a, d) && f(a, d, c);
              return t ? (e => (e.loaded = 1, e.get()))(t) : r()
            })),
            c = {},
            r = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => n.e(3447).then((() => () => n(13447))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(4018).then((() => () => n(54018))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => n.e(5794).then((() => () => n(5794))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(6682)]).then((() => () => n(48267))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(1720), n.e(6682), n.e(2772)]).then((() => () => n(2772))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(2024), n.e(4054)]).then((() => () => n(85950))))),
              20270: () => d("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(8961), n.e(1734), n.e(6682), n.e(7911)]).then((() => () => n(48999))))),
              96711: () => d("default", "@foundry/react", [1, 1], (() => Promise.all([n.e(8179), n.e(9842)]).then((() => () => n(5143))))),
              17675: () => d("default", "@foundry/react-v4", [4, "npm:@foundry/react@4", 1, 1], (() => Promise.all([n.e(8179), n.e(40), n.e(6131), n.e(3980)]).then((() => () => n(46131)))))
            },
            t = {
              1283: [20270, 96711],
              2229: [62229],
              4853: [44853],
              5311: [2918, 81788],
              5966: [95966],
              7911: [17675],
              9623: [9623]
            },
            b = {};
          n.f.consumes = (e, a) => {
            n.o(t, e) && t[e].forEach((e => {
              if (n.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var f = a => {
                  c[e] = 0, n.m[e] = f => {
                    delete n.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete c[e], n.m[e] = f => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var t = r[e]();
                  t.then ? a.push(c[e] = t.then(f).catch(d)) : f(t)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          n.b = document.baseURI || self.location.href;
          var e = {
            417: 0
          };
          n.f.j = (a, f) => {
            var d = n.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) f.push(d[2]);
              else if (/^(2229|4853|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((f, c) => d = e[a] = [f, c]));
              f.push(d[2] = c);
              var r = n.p + n.u(a),
                t = new Error;
              n.l(r, (f => {
                if (n.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var c = f && ("load" === f.type ? "missing" : f.type),
                    r = f && f.target && f.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + c + ": " + r + ")", t.name = "ChunkLoadError", t.type = c, t.request = r, d[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var d, c, r = f[0],
                t = f[1],
                b = f[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (d in t) n.o(t, d) && (n.m[d] = t[d]);
                b && b(n)
              }
              for (a && a(f); o < r.length; o++) c = r[o], n.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            f = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), n.nc = void 0, n(45408), n(98478)
      })())
    }
  }
}));