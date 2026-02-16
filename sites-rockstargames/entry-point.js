try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0c741278-fb68-4014-83ab-ff7d2ea5cdea", e._sentryDebugIdIdentifier = "sentry-dbid-0c741278-fb68-4014-83ab-ff7d2ea5cdea")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-footer", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-header", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer", "@rockstargames/sites-careers", "@rockstargames/sites-gta-gen9", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-tv", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-rockstar-tv"], function(e, a) {
  var f = {},
    d = {},
    c = {},
    t = {},
    r = {},
    b = {},
    o = {},
    n = {},
    s = {},
    i = {},
    l = {},
    u = {},
    h = {};
  return Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(b, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(l, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "__esModule", {
    value: !0
  }), Object.defineProperty(h, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        f[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        d[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        c[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        b[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        o[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        n[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        s[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        i[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        l[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        u[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        h[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, p, m, g, y, v, w = {
            11955: e => {
              "use strict";
              e.exports = o
            },
            17411: (e, a, f) => {
              const d = f(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = d(f.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            28419: (e, a, f) => {
              (0, f(17411).w)(1)
            },
            29441: e => {
              "use strict";
              e.exports = d
            },
            39247: e => {
              "use strict";
              e.exports = c
            },
            40041: e => {
              "use strict";
              e.exports = l
            },
            40308: e => {
              "use strict";
              e.exports = i
            },
            50644: e => {
              "use strict";
              e.exports = u
            },
            58678: e => {
              "use strict";
              e.exports = n
            },
            62137: e => {
              "use strict";
              e.exports = f
            },
            66819: e => {
              "use strict";
              e.exports = t
            },
            74251: e => {
              "use strict";
              e.exports = h
            },
            77027: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var d = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, c = 0, t = d.length; c !== a && t >= 0;) "/" === d[--t] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var r = d.slice(0, t + 1);
                return f.protocol + "//" + f.host + r
              };
              Number.isInteger
            },
            93032: (e, a, f) => {
              f(28419)
            },
            94316: e => {
              "use strict";
              e.exports = s
            },
            95400: (e, a, f) => {
              "use strict";
              var d = {
                  "./bootstrap": () => f.e(8271).then(() => () => f(8271))
                },
                c = (e, a) => (f.R = a, a = f.o(d, e) ? d[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), f.R = void 0, a),
                t = (e, a) => {
                  if (f.S) {
                    var d = "default",
                      c = f.S[d];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[d] = e, f.I(d, a)
                  }
                };
              f.d(a, {
                get: () => c,
                init: () => t
              })
            },
            98674: e => {
              "use strict";
              e.exports = b
            }
          },
          k = {};

        function P(e) {
          var a = k[e];
          if (void 0 !== a) return a.exports;
          var f = k[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return w[e].call(f.exports, f, f.exports, P), f.loaded = !0, f.exports
        }
        return P.m = w, P.c = k, P.y = a, P.amdO = {}, P.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return P.d(a, {
            a
          }), a
        }, p = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          P.r(d);
          var c = {};
          e = e || [null, p({}), p([]), p(p)];
          for (var t = 2 & f && a;
            ("object" == typeof t || "function" == typeof t) && !~e.indexOf(t); t = p(t)) Object.getOwnPropertyNames(t).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, P.d(d, c), d
        }, P.d = (e, a) => {
          for (var f in a) P.o(a, f) && !P.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce((a, f) => (P.f[f](e, a), a), [])), P.u = e => "js/" + {
          68: "9a3e30309f959fbf1b827cc9ec8d524e",
          78: "207d23dfb95ade82a2658aefbadffd61",
          131: "3db1bbb24022e0a634a473afba8a5ede",
          137: "d3424a32abf3b10465d082743ca56ffe",
          158: "7b3993c9eab33b63f0e10b9613c231b1",
          173: "0c16dd7efdfe889604c8cb33cd223645",
          278: "1842f6ef47b488969432cbc292912553",
          299: "0cfe8db2516416024c2241795e47be15",
          314: "a0d52b06d20fcd5f0aa88dcfe0247e9d",
          426: "4dbef443906f069dcbf1dffc8d8f5bb7",
          439: "3e0ce44fa46fb5c9174a0d141cc919fb",
          557: "58c63eebc338893d0e9265bdb86735cc",
          586: "07d2cced20d004f28baee467047b0884",
          601: "99491c4eca73bb76ce7956a19817c8cb",
          662: "71ee56d9dc0d067e07b24e758be85245",
          793: "899640b131809c73217506a606781bab",
          824: "cc56847eef49cb3beb1d8731a052d666",
          842: "2b33fab28490e7f9aa0b1e17b73022e3",
          886: "2bc8b32819ff793ecaaf68c7ac3a4f8d",
          907: "7ed900419cf38867e7b8f16a13df5636",
          981: "53381cfed68a22957e9655d4cd4d3abb",
          1054: "63b15d2219feafbb8f2b849c117c92be",
          1098: "236986da40dc031522430cfcb456c961",
          1242: "afccebe0764879ef0287c014d2a0f89d",
          1328: "88bca989ebdc2be760d43b90fb8e2c81",
          1366: "8a1540f2d397b1f964c3d464e226790e",
          1420: "df71931d90b90601a2e6d10f152f09d0",
          1542: "f50737ed455c8b2a676c0aca9237064b",
          1568: "9887de07b2211b6b8c5b2e8af08d10f9",
          1586: "ee5c7792487611616fd2fea509633042",
          1622: "0f332e3520cb422a902e98d1b5d20094",
          1673: "b0e0c86a9e3aa07f6b559851aef2964a",
          1758: "9d2fab4c7ab94b65ba34b5698fe59957",
          1822: "a3ba86d9ed0b429c8e34d6f1159ef0aa",
          1868: "4c3720a1447c0d1815b395a47076969e",
          1987: "639c681a6ab740eedc868b96685b5550",
          2156: "57a53bb1f25d69b78ee2d160f2279f7e",
          2171: "5c4f1464bbdc66dca0264e6d22cb5a5d",
          2200: "251a1d6ee837e59047c144ab766e5a72",
          2221: "828b11684bc0c68c1a8383d4aab455ca",
          2234: "a9b8032a6f8d2e443ff0b40e8b3068d4",
          2243: "8ab20e6b9312b334f9a988b5e9401a47",
          2295: "1c5cb3eef820ccac81fb5d88bb78b577",
          2306: "8489d8375e9a7699e39af3556464be74",
          2320: "f99a21c3409cc4ec53ae0836040f8bb8",
          2327: "e9b290f51910064a45b3264536607447",
          2347: "a2bc5820b5f27316fdbb3b4f93f71697",
          2365: "aabb07299d7cb44d2b2cbfd80a89670a",
          2398: "082d07431539886623eae90747df01e3",
          2463: "5879b0653cf5459b39645ffcf6434198",
          2466: "2a990cf3c7dbc7d90e5fc376ecafbe4d",
          2642: "22c6d2b87790b8dd337eb4bc9fe6419e",
          2678: "161ec7de20975cf20df7e83b9acb685f",
          2864: "26fc664746b77f3d0887a6dfdb9cdbac",
          3034: "eb8d399c16cfb206a40b98f1faa9e091",
          3114: "5e97104c80a052a4ffb41edfd2ac8e44",
          3178: "fad1b6f5ea65d99d24173fc3a6514bd3",
          3197: "e6c85b28b4afd1629ce01b689d335b6d",
          3262: "3b90f95a09844735e9718fd64896753c",
          3343: "b0ef36d3a9bce3bc4d8b9d05a41fe3f4",
          3370: "64888807e03f8d27dde9b5f4a4f4b1cc",
          3475: "0c7354c9936d81f0f572a9e9e1edadb4",
          3486: "a87ad8dec109c39291de82f83b2926a1",
          3549: "fb95a6b0729db21361cd4c9ea280f28b",
          3697: "b53d5dd13e9868df62a15d98c55e5466",
          3736: "a288279935322bee15a308c7f331ab2e",
          3771: "aba7842b0a429a8ec34942cb4745b540",
          3885: "3bfb424c50e78834244e8fd3bfe807d9",
          3896: "b53f01d72f1b64f9ed541a57890a4586",
          3941: "e12bdd9f701572d5c04d2a9cfbed9184",
          4011: "34851f72ffab5f451981aae14c270e2a",
          4038: "e0a12bc5ccc2ba75b4cec80b62691d42",
          4070: "0f9d515e0c9c6eba4e6dc30cf82b5467",
          4324: "8bc7bab39607cfec3c5055f6ead04e26",
          4346: "625afa83f1420eadb46a20681f4cdbc0",
          4424: "f897e7324be31570a7c7146e3616b7e2",
          4528: "290286a5214404ef1e76d25517021abe",
          4578: "a725fa898238937d09a9db649f84a806",
          4621: "2b7cfd15f381895de21e6671c4ed9db6",
          4642: "2c14ee7fd3965389fb6071efa24d06e9",
          4681: "c15cfde8fbaf18143d225c8831068615",
          4700: "ddd98b0b28efd3e5b5c6559af1c92b30",
          4710: "f3883683308543f70b795f6b16c57f4b",
          4731: "1e56b1a562c288c8225b5d4cb582e0a6",
          4799: "bf3d1e78ab556a57da7726b17722ab3c",
          4826: "b5ef2a1968dc5aba5f7a9dc3822e92e2",
          4851: "9a3a65e9aac75dfe23c6d2e78245c17c",
          4861: "3dc09a905b98e13bc512bc475a2bdbf1",
          4913: "4767199cd652495ca7cbc9c854e4dc9a",
          5018: "16ba18ff8186e3ec2c44990cdaf36b60",
          5021: "58ae3cd6c2970d0cf6e36ccba27a9568",
          5059: "3e1d36252dc6897c0212752258954a30",
          5076: "7a4a28c3f1328ad1d91a65e5118049b2",
          5166: "7ef295317f5bc60d429a8352fb268d55",
          5221: "c640608b00a28122c4dd9f2acd8664e5",
          5233: "00bca97292ff377739316cd6ec64a915",
          5259: "d7f0366d8bf7a444e148851ca4433fdb",
          5265: "db42f9d15bfa7af5c18cdbf09bd36579",
          5367: "5156e6a3145501c85c2389a916fc289d",
          5415: "8410d055e97e562184ea1520119a1787",
          5530: "16c020433e12c4fd771b1959e237a0f1",
          5639: "1ccad93cba7083c040b79b7ca65f0f62",
          5653: "19b045f7abb5727e5fe882932c2fefe1",
          5663: "22c407cef7358e4ec84b9e1ddaddab89",
          5742: "0d18b05514bf157cb4db239c1c9c1af6",
          5770: "dac43de7e3ec4e9396c5a7bf99e61792",
          5830: "8468e5ab5d280bfecaa1f70a66ec0380",
          5832: "844f87a370a8eb7fab528160bef9677d",
          5859: "a06e0665a4432f767a2127ee529347b8",
          5872: "43fcb0370f81788d80a2b1a8585a5ed0",
          5912: "740bf1634f00b1dc83106a677df8ae75",
          6005: "051d86aaf1df7df5325c1284aa3a6f29",
          6058: "02fd7efc5091f866c1bdfa29bf22c508",
          6084: "b5913708cba13908c34efd6959c96091",
          6088: "2d2a4fa3b3dffa20c051b8ea62c8b69b",
          6267: "9ac2e8fbb61a51c094d8d32618c09bcf",
          6280: "06a3b716c09ea3c0a626d1855ffdabe0",
          6285: "b6973ac8589af1eed96693e07e18d446",
          6327: "84b9f066120544da523052c2ad1449fd",
          6361: "a481ece4ef2a9adc9378e8071bce696f",
          6471: "03612225530954cab2554b514e2208b2",
          6527: "b0311fef6f0cb3e1fc8a1069bfd5f89f",
          6637: "891be69501959e29c143fea3ce82123a",
          6664: "ed48bcad5d67b3dbf153b0f2973cd300",
          6827: "95335edf938b0df2a772ba8c16d57f12",
          6833: "9827abbb55e293febce2a5cec3ea2ad8",
          6879: "e192c71cf1c1c74aa1cc4db468c19068",
          6891: "4c484742622084f6a168f5f618eef7a9",
          6997: "e59eff333a03ddcea29c185b1db51f11",
          7010: "e2d6e32fff42a9ce99b40f39a054f469",
          7015: "827c6f8ebcf3b12caf9ffb53bc7bddd1",
          7071: "4c5713068dcc3719c3bedf8ecede3b58",
          7073: "c34b905117bb13c73977c5cb687c9514",
          7131: "4278e00b4adb134ba277b5b23ae49494",
          7160: "fd36c499953774f6cb2f67ee8f7812d4",
          7335: "f052e50a8509c801042c5efcaa2dd966",
          7387: "81aee283b3f644d59ca058a0dbe04b40",
          7407: "a385b5e6677a128b040d64c997c80292",
          7436: "64b967e83b52e9927aa3451dc9adf4bb",
          7452: "6adf354b117a32ec92c76ea1bd327279",
          7453: "b15f3695aff3f7a5a320c3d929fb19ee",
          7465: "3b2fcc61dba97e06bc33f0c9e875b164",
          7481: "712353b5756556de18252dad5c66213c",
          7547: "a52aee3a8ef2e7368f5fbe6c41e9d5e8",
          7731: "5ca9a7a50a330136664845d693133450",
          7785: "571d629bdd32091b1bbd8949d4c3a279",
          7942: "e715565e9a0abe5c444e574ad2828322",
          7970: "354e963d969e40574eafcaf706f6de06",
          7975: "5b13ceabb5c07de915c7c2e56bec130e",
          8045: "2a3204bf6582b68f725c927015bcbf95",
          8068: "559a219be8a4cef6a55c5def405257c8",
          8088: "1d7f33b7c28c70bc5c352e68002d72c1",
          8181: "ddb506c8ea3c842fe97b9c52ee131c1a",
          8240: "c7912078e511de3ba2c3b4ca793c772c",
          8271: "494ed04ef7b671e15f99f814be82c847",
          8272: "997b6edffa0426f72969edb14e2e51a5",
          8322: "26e133cb5e5eb5631ae7e36a003fbce3",
          8325: "ee50d0407e6fcab91a8f068b10da175b",
          8327: "5ea1340cf7e2f61f294c1e5056d107e1",
          8391: "b69f3e5682b2e2afaf8b9fefa7c65ca5",
          8431: "24fae7c446624f11932c81214499e4cf",
          8461: "2a144e5e72c3fc39a866a2671912d6ba",
          8572: "e50d50da0b9c4ef902a68c0926dfddce",
          8602: "c5ba39df5a0487f734a1b23048fb90af",
          8659: "c5a4a05c5f0a1adcdde6c353696604e6",
          8708: "cae01af6b857848cc73db80c54476378",
          8755: "54be4588ab2894b5582b4708efffdc76",
          8787: "11edcaf6fd6526e76015004f430976ba",
          8804: "a236f5dcf76968eaa3f1a9193a3c50d6",
          8813: "da0956862b969bc00d972d86b0ab41f3",
          8845: "9fd626ba9c52972de954c9043b0dbf24",
          8880: "3e4d34717aae43afa83150f8c1fe439b",
          8938: "3c375174bf9525a4f4f8eafb62f8de22",
          8970: "c7aa811d5a2d4e3f4a37de4883fa5338",
          9022: "d1e17fce9938d673237616cf3a499736",
          9028: "780a6be2bd3fa2c0e95adc23138d6d8b",
          9031: "608492a59272a57fe706230edffd4daa",
          9040: "df00d60557f282d8ed40d9d81cbda5e0",
          9126: "e05e4c426ff75de21e29c3f8597ed135",
          9142: "331aa56e7a2fa7caf24c31ff2a28d612",
          9205: "a85d08c59ff9b103a23d635f24188c21",
          9377: "d1ffecafeceb9c4500d87d0bd95d915d",
          9587: "36ecb6af828c2f7a87778b3793006f53",
          9615: "6a6474df903fee64ae7aa56dd2d27e6a",
          9760: "5f47680f20a34120cf7ea6a3cab634f7",
          9831: "e512998bbcbd83b8bb98117562bd9061",
          9928: "c3864d35d334f3d156e5988d4061b649",
          9936: "6200624060aea6b9f5639b8253f2a3a1",
          9958: "47b65067a454d04614cad3af75570c13",
          9990: "02f40988b3e3f3fbdc1d0e93fde53dac"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          78: "98eb663bc07978e569eadbca0de7074f",
          137: "21c4f008612d89c528d92bf594a933d1",
          158: "c7f47bd36196fd1a112a8eba7ca29ac1",
          586: "1d485830becfae7662b72d70a48af9b3",
          793: "39bfe3d5ad4aa976001eb29439aadd06",
          886: "75ab540d3ea60d8601d30cecb6a5dc33",
          1328: "c9c8ee2d57a74d5e672d9a0712778117",
          1335: "f618d5b7d1b624d141f88e7e4bbd4cd4",
          1542: "da408b1c54cc0c803d3f6624346d41ff",
          1568: "cd710bd8e62b5ad3aeb822401bd0fa46",
          1586: "eee6e9f0ed632fce1325de4b9e936e9d",
          2200: "3a0244366a6892f54e57fbd7ec3b8f04",
          2320: "2003abf5ced8ee69c6c9504ae8c8bad5",
          2327: "362ae0d0f3ddba29ed32a01313dd94d3",
          3178: "78856ee280c94335ad16449d28153790",
          3549: "487c3cc9f7c6da71dbe6cd7fcdc30712",
          3736: "eb1bb82ff0b0d1b1fb75133aaa3680eb",
          3771: "b13e6ddc90cb08675d51cf9fbd895475",
          4105: "27e6c362322ad20e839e035848dfadf8",
          4294: "c1eb0999629396bc2adecd5b07d203b7",
          4324: "1b78d4fe05a5f12236b67224cf939aae",
          4642: "e150f916ff680df2627edb07c80b73ec",
          6005: "5457f8e6ee075bbe606cb2bb7caf947e",
          6058: "e2866b83b93e2e2af3d65c19f6d7283b",
          6084: "bf8e28115bd36eecc1c3cf5d3c13f09d",
          6325: "b4eb91207cb1c0d6f6ebe85799ef51f3",
          6637: "f618d5b7d1b624d141f88e7e4bbd4cd4",
          6827: "c1eb0999629396bc2adecd5b07d203b7",
          6970: "bed4a8f21da719a5cdbc7d9e2090840c",
          7015: "f41212a8347979e7d4abd7afca83ce76",
          7131: "d1c5a7c85877957d958bd57a965400ac",
          7360: "c7f47bd36196fd1a112a8eba7ca29ac1",
          7547: "624400b830637be9c463ff7c40d0465d",
          7975: "0c536f62395235bc48d6a4f15185f1de",
          8327: "6e25ba50385095bc18b016cdcc58c913",
          8813: "071cc98fed939b12a1345c71ee2e5bcd",
          8835: "35714ce87122b38c21ca40707fb1f349",
          9031: "587d9ae7e4883230518faecd23e944e7",
          9040: "1e6f713f9caee580ec1ff22f700ba40d",
          9205: "eee6e9f0ed632fce1325de4b9e936e9d",
          9831: "9ec6334f593299bc202824bd217bce02"
        } [e] + ".css", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), m = {}, g = "@rockstargames/sites-rockstargames:", P.l = (e, a, f, d) => {
          if (m[e]) m[e].push(a);
          else {
            var c, t;
            if (void 0 !== f)
              for (var r = document.getElementsByTagName("script"), b = 0; b < r.length; b++) {
                var o = r[b];
                if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == g + f) {
                  c = o;
                  break
                }
              }
            c || (t = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, P.nc && c.setAttribute("nonce", P.nc), c.setAttribute("data-webpack", g + f), c.src = e), m[e] = [a];
            var n = (a, f) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var d = m[e];
                if (delete m[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach(e => e(f)), a) return a(f)
              },
              s = setTimeout(n.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = n.bind(null, c.onerror), c.onload = n.bind(null, c.onload), t && document.head.appendChild(c)
          }
        }, P.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, P.nmd = e => (e.paths = [], e.children || (e.children = []), e), y = {
          1626: [41626],
          1879: [31879],
          2405: [12405],
          3137: [53137],
          3416: [33416],
          3736: [94057],
          5202: [35202],
          6766: [36766],
          7015: [39848, 41263],
          7538: [47538],
          8088: [9566],
          8778: [78778],
          8987: [88987],
          9147: [29147]
        }, v = {
          9566: ["default", "./index", 66819],
          12405: ["default", "./index", 58678],
          29147: ["default", "./index", 50644],
          31879: ["default", "./index", 25136],
          33416: ["default", "./index", 40041],
          35202: ["default", "./site-routes/Bully", 40308],
          36766: ["default", "./index", 11955],
          39848: ["default", "./root", 62137],
          41263: ["default", "./core", 39247],
          41626: ["default", "./lazy", 29441],
          47538: ["default", "./site-routes/RedDeadRedemption", 40308],
          53137: ["default", "./index", 98674],
          78778: ["default", "./index", 74251],
          88987: ["default", "./index", 94316],
          94057: ["default", "./utils", 11955]
        }, P.f.remotes = (e, a) => {
          P.o(y, e) && y[e].forEach(e => {
            var f = P.R;
            f || (f = []);
            var d = v[e];
            if (!(f.indexOf(d) >= 0)) {
              if (f.push(d), d.p) return a.push(d.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), P.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                t = (e, f, t, r, b, o) => {
                  try {
                    var n = e(f, t);
                    if (!n || !n.then) return b(n, r, o);
                    var s = n.then(e => b(e, r), c);
                    if (!o) return s;
                    a.push(d.p = s)
                  } catch (e) {
                    c(e)
                  }
                },
                r = (e, a, c) => t(a.get, d[1], f, 0, b, c),
                b = a => {
                  d.p = 1, P.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(P, d[2], 0, 0, (e, a, f) => e ? t(P.I, d[0], 0, e, r, f) : c(), 1)
            }
          })
        }, (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (f, d) => {
            d || (d = []);
            var c = a[f];
            if (c || (c = a[f] = {}), !(d.indexOf(c) >= 0)) {
              if (d.push(c), e[f]) return e[f];
              P.o(P.S, f) || (P.S[f] = {});
              var t = P.S[f],
                r = "@rockstargames/sites-rockstargames",
                b = (e, a, f, d) => {
                  var c = t[e] = t[e] || {},
                    b = c[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : r > b.from)) && (c[a] = {
                    get: f,
                    from: r,
                    eager: !!d
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var c = P(e);
                    if (!c) return;
                    var t = e => e && e.init && e.init(P.S[f], d);
                    if (c.then) return n.push(c.then(t, a));
                    var r = t(c);
                    if (r && r.then) return n.push(r.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === f && (b("@apollo/client", "3.14.0", () => Promise.all([P.e(7387), P.e(9958), P.e(5872), P.e(2229), P.e(6565), P.e(8322)]).then(() => () => P(35872))), b("@foundry/icons", "5.13.1", () => Promise.all([P.e(6833), P.e(5021), P.e(2229), P.e(8429), P.e(4572), P.e(6827)]).then(() => () => P(45021))), b("@foundry/react", "5.13.1", () => Promise.all([P.e(6833), P.e(5653), P.e(557), P.e(78), P.e(7160), P.e(1568), P.e(2229), P.e(8429), P.e(4572), P.e(58), P.e(5166)]).then(() => () => P(70456))), b("@rockstar/sentry", "5.1.1", () => Promise.all([P.e(7942), P.e(2229)]).then(() => () => P(47942))), b("@rsgweb/contentful", "0.0.0", () => Promise.all([P.e(5076), P.e(7387), P.e(9958), P.e(9142), P.e(1987), P.e(2229), P.e(820), P.e(9311), P.e(1788), P.e(6565), P.e(4572), P.e(5966), P.e(7592), P.e(2463), P.e(158)]).then(() => () => P(72463))), b("@rsgweb/locale-tools", "1.0.0", () => Promise.all([P.e(9587), P.e(2229), P.e(8240)]).then(() => () => P(12841))), b("@rsgweb/modules-core-screenshot-viewer", "0.0.0", () => Promise.all([P.e(2229), P.e(9623), P.e(1586)]).then(() => () => P(41586))), b("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([P.e(5076), P.e(6833), P.e(5653), P.e(5059), P.e(557), P.e(6970), P.e(2229), P.e(820), P.e(9623), P.e(8429), P.e(9311), P.e(1788), P.e(6088), P.e(4572), P.e(5966), P.e(58), P.e(2918), P.e(3114), P.e(8327), P.e(4105)]).then(() => () => P(69622))), b("@rsgweb/modules-core-www-page", "0.0.0", () => Promise.all([P.e(4346), P.e(6833), P.e(5653), P.e(557), P.e(78), P.e(1420), P.e(7160), P.e(9142), P.e(6084), P.e(2229), P.e(820), P.e(1128), P.e(9623), P.e(8429), P.e(9311), P.e(1788), P.e(4572), P.e(5966), P.e(58), P.e(1913), P.e(2918), P.e(3114), P.e(2440), P.e(7592), P.e(1879), P.e(3582), P.e(9928), P.e(9040)]).then(() => () => P(88761))), b("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([P.e(5076), P.e(5059), P.e(8068), P.e(2229), P.e(9623), P.e(9311), P.e(6088), P.e(5966), P.e(8181), P.e(2295)]).then(() => () => P(42328))), b("@rsgweb/router", "1.0.0", () => Promise.all([P.e(2229), P.e(9623), P.e(842)]).then(() => () => P(90842))), b("@rsgweb/tina", "0.0.0", () => Promise.all([P.e(5076), P.e(8787), P.e(2229), P.e(8429), P.e(1788), P.e(5966), P.e(2918), P.e(1366), P.e(6637)]).then(() => () => P(61366))), b("@rsgweb/utils", "1.0.0", () => Promise.all([P.e(5076), P.e(7387), P.e(5059), P.e(8602), P.e(2229), P.e(9623), P.e(9311), P.e(1788), P.e(6088), P.e(6565), P.e(426)]).then(() => () => P(70426))), b("clsx", "2.1.1", () => P.e(439).then(() => () => P(10439))), b("dompurify", "2.5.8", () => P.e(7785).then(() => () => P(27785))), b("focus-trap-react", "10.3.1", () => Promise.all([P.e(1673), P.e(2229), P.e(7145)]).then(() => () => P(51673))), b("framer-motion", "7.10.3", () => Promise.all([P.e(5912), P.e(2229), P.e(5770)]).then(() => () => P(75912))), b("graphql", "16.11.0", () => P.e(601).then(() => () => P(30601))), b("history", "4.10.1", () => P.e(3262).then(() => () => P(63262))), b("prop-types", "15.8.1", () => P.e(7465).then(() => () => P(97465))), b("react-dom", "18.3.1", () => Promise.all([P.e(1098), P.e(2229)]).then(() => () => P(71098))), b("react-intersection-observer", "9.16.0", () => Promise.all([P.e(2229), P.e(6327)]).then(() => () => P(76327))), b("react-router-dom", "6.30.1", () => Promise.all([P.e(7335), P.e(6527), P.e(2229), P.e(8429), P.e(3213)]).then(() => () => P(46527))), b("react-router", "6.30.1", () => Promise.all([P.e(7335), P.e(8572), P.e(2229)]).then(() => () => P(18572))), b("react", "18.2.0", () => P.e(8659).then(() => () => P(68659))), b("react", "18.3.1", () => P.e(8431).then(() => () => P(48431))), o(25136), o(62137), o(39247), o(50644), o(40308), o(98674), o(40041), o(29441), o(11955), o(58678), o(94316), o(66819), o(74251)), n.length ? e[f] = Promise.all(n).then(() => e[f] = 1) : e[f] = 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var d = f.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = f[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = f[1] ? a(f[1]) : [];
              return f[2] && (d.length++, d.push.apply(d, a(f[2]))), f[3] && (d.push([]), d.push.apply(d, a(f[3]))), d
            },
            a = (a, f) => {
              a = e(a), f = e(f);
              for (var d = 0;;) {
                if (d >= a.length) return d < f.length && "u" != (typeof f[d])[0];
                var c = a[d],
                  t = (typeof c)[0];
                if (d >= f.length) return "u" == t;
                var r = f[d],
                  b = (typeof r)[0];
                if (t != b) return "o" == t && "n" == b || "s" == b || "u" == t;
                if ("o" != t && "u" != t && c != r) return c < r;
                d++
              }
            },
            f = e => {
              var a = e[0],
                d = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                d += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var c = 1, t = 1; t < e.length; t++) c--, d += "u" == (typeof(b = e[t]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, b);
                return d
              }
              var r = [];
              for (t = 1; t < e.length; t++) {
                var b = e[t];
                r.push(0 === b ? "not(" + o() + ")" : 1 === b ? "(" + o() + " || " + o() + ")" : 2 === b ? r.pop() + " " + r.pop() : f(b))
              }
              return o();

              function o() {
                return r.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, f) => {
              if (0 in a) {
                f = e(f);
                var c = a[0],
                  t = c < 0;
                t && (c = -c - 1);
                for (var r = 0, b = 1, o = !0;; b++, r++) {
                  var n, s, i = b < a.length ? (typeof a[b])[0] : "";
                  if (r >= f.length || "o" == (s = (typeof(n = f[r]))[0])) return !o || ("u" == i ? b > c && !t : "" == i != t);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (b <= c) {
                        if (n != a[b]) return !1
                      } else {
                        if (t ? n > a[b] : n < a[b]) return !1;
                        n != a[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (t || b <= c) return !1;
                    o = !1, b--
                  } else {
                    if (b <= c || s < i != t) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < a.length; r++) {
                var h = a[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, f) : !u())
              }
              return !!u()
            },
            c = (e, a) => e && P.o(e, a),
            t = e => (e.loaded = 1, e.get()),
            r = e => Object.keys(e).reduce((a, f) => (e[f].eager && (a[f] = e[f]), a), {}),
            b = e => {
              throw new Error(e)
            },
            o = e => function(a, f, d, c, t) {
              var r = P.I(a);
              return r && r.then && !d ? r.then(e.bind(e, a, P.S[a], f, !1, c, t)) : e(a, P.S[a], f, d, c, t)
            },
            n = (e, a, f) => f ? f() : ((e, a) => b("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = o((e, o, s, i, l, u) => {
              if (!c(o, s)) return n(e, s, u);
              var h = ((e, f, c, t) => {
                var b = t ? r(e[f]) : e[f];
                return (f = Object.keys(b).reduce((e, f) => !d(c, f) || e && !a(e, f) ? e : f, 0)) && b[f]
              })(o, s, l, i);
              return h ? t(h) : u ? u() : void b(((e, a, d, c, t) => {
                var r = e[d];
                return "No satisfying version (" + f(c) + ")" + (t ? " for eager consumption" : "") + " of shared module " + d + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(r).map(e => e + " from " + r[e].from).join(", ")
              })(o, e, s, l, i))
            }),
            i = o((e, b, o, s, i, l) => {
              if (!c(b, o)) return n(e, o, l);
              var u, h = ((e, f, d) => {
                var c = d ? r(e[f]) : e[f];
                return Object.keys(c).reduce((e, f) => !e || !c[e].loaded && a(e, f) ? f : e, 0)
              })(b, o, s);
              return d(i, h) || (u = ((e, a, d, c) => "Unsatisfied version " + d + " from " + (d && e[a][d].from) + " of shared singleton module " + a + " (required " + f(c) + ")")(b, o, h, i), "undefined" != typeof console && console.warn && console.warn(u)), t(b[o][h])
            }),
            l = {},
            u = {
              62229: () => s("default", "react", !1, [1, 18, 2, 0], () => P.e(8431).then(() => () => P(48431))),
              16565: () => s("default", "graphql", !1, [1, 16, 9, 0], () => P.e(601).then(() => () => P(30601))),
              18429: () => i("default", "react-dom", !1, [1, 18, 2, 0], () => P.e(1098).then(() => () => P(71098))),
              4572: () => s("default", "clsx", !1, [1, 2, 1, 1], () => P.e(439).then(() => () => P(10439))),
              90058: () => s("default", "@foundry/icons", !1, [1, 5, 13, 1], () => Promise.all([P.e(5021), P.e(4294)]).then(() => () => P(45021))),
              20820: () => s("default", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([P.e(6833), P.e(5653), P.e(557), P.e(78), P.e(7160), P.e(1568), P.e(8429), P.e(58)]).then(() => () => P(70456))),
              89311: () => s("default", "@apollo/client", !1, [1, 3, 13, 8], () => Promise.all([P.e(7387), P.e(9958), P.e(5872), P.e(6565)]).then(() => () => P(35872))),
              81788: () => s("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([P.e(9587), P.e(5859)]).then(() => () => P(12841))),
              95966: () => s("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([P.e(5076), P.e(7387), P.e(5059), P.e(8602), P.e(9623), P.e(9311), P.e(1788), P.e(6088), P.e(6565), P.e(8045)]).then(() => () => P(70426))),
              87592: () => s("default", "@rockstar/sentry", !1, [1, 5, 1, 1], () => P.e(7942).then(() => () => P(47942))),
              9623: () => s("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([P.e(7335), P.e(6527), P.e(8429), P.e(3213)]).then(() => () => P(46527))),
              2918: () => s("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([P.e(5076), P.e(5059), P.e(8068), P.e(9623), P.e(9311), P.e(6088), P.e(8181)]).then(() => () => P(42328))),
              2765: () => s("default", "focus-trap-react", !1, [1, 10, 2, 3], () => Promise.all([P.e(1673), P.e(7145)]).then(() => () => P(51673))),
              61128: () => s("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => P.e(8708).then(() => () => P(76327))),
              61913: () => s("default", "react", !1, [1, 18, 2, 0], () => P.e(8659).then(() => () => P(68659))),
              92440: () => s("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([P.e(5076), P.e(8787), P.e(1366), P.e(1335)]).then(() => () => P(61366))),
              63582: () => s("default", "framer-motion", !1, [1, 7, 5, 1], () => P.e(5912).then(() => () => P(75912))),
              82324: () => s("default", "@rsgweb/contentful", !1, [1, "workspace:^"], () => Promise.all([P.e(5076), P.e(7387), P.e(9958), P.e(1987), P.e(6565), P.e(2463), P.e(7360)]).then(() => () => P(72463))),
              57145: () => s("default", "prop-types", !1, [1, 15, 8, 1], () => P.e(7465).then(() => () => P(97465))),
              33213: () => s("default", "react-router", !1, [1, 6, 11, 2], () => P.e(8572).then(() => () => P(18572))),
              90: () => s("default", "history", !1, [1, 5, 3, 0], () => P.e(3262).then(() => () => P(63262))),
              20270: () => s("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], () => Promise.all([P.e(5653), P.e(6970), P.e(820), P.e(8327)]).then(() => () => P(69622))),
              55274: () => s("default", "@rsgweb/router", !1, [1, "workspace:^"], () => P.e(8461).then(() => () => P(90842))),
              6978: () => s("default", "@rsgweb/modules-core-www-page", !1, [1, "workspace:^"], () => Promise.all([P.e(4346), P.e(5653), P.e(1420), P.e(7160), P.e(9142), P.e(6084), P.e(820), P.e(1128), P.e(1913), P.e(2440), P.e(1879), P.e(7547)]).then(() => () => P(88761))),
              2973: () => s("default", "dompurify", !1, [1, 2, 4, 1], () => P.e(7785).then(() => () => P(27785))),
              90582: () => s("default", "@rsgweb/modules-core-screenshot-viewer", !1, [1, "workspace:^"], () => P.e(9205).then(() => () => P(41586)))
            },
            h = {
              58: [90058],
              582: [90582],
              820: [20820],
              1128: [61128],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              2973: [2973],
              3114: [2765],
              3213: [33213],
              3582: [63582],
              4572: [4572],
              5966: [95966],
              6565: [16565],
              6978: [6978],
              7015: [90, 20270, 55274],
              7145: [57145],
              7547: [82324],
              7592: [87592],
              8429: [18429],
              9311: [89311],
              9623: [9623],
              9928: [82324]
            },
            p = {};
          P.f.consumes = (e, a) => {
            P.o(h, e) && h[e].forEach(e => {
              if (P.o(l, e)) return a.push(l[e]);
              if (!p[e]) {
                var f = a => {
                  l[e] = 0, P.m[e] = f => {
                    delete P.c[e], f.exports = a()
                  }
                };
                p[e] = !0;
                var d = a => {
                  delete l[e], P.m[e] = f => {
                    throw delete P.c[e], a
                  }
                };
                try {
                  var c = u[e]();
                  c.then ? a.push(l[e] = c.then(f).catch(d)) : f(c)
                } catch (e) {
                  d(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              1149: 0
            };
            P.f.miniCss = (a, f) => {
              e[a] ? f.push(e[a]) : 0 !== e[a] && {
                78: 1,
                137: 1,
                158: 1,
                586: 1,
                793: 1,
                886: 1,
                1328: 1,
                1335: 1,
                1542: 1,
                1568: 1,
                1586: 1,
                2200: 1,
                2320: 1,
                2327: 1,
                3178: 1,
                3549: 1,
                3736: 1,
                3771: 1,
                4105: 1,
                4294: 1,
                4324: 1,
                4642: 1,
                6005: 1,
                6058: 1,
                6084: 1,
                6325: 1,
                6637: 1,
                6827: 1,
                6970: 1,
                7015: 1,
                7131: 1,
                7360: 1,
                7547: 1,
                7975: 1,
                8327: 1,
                8813: 1,
                8835: 1,
                9031: 1,
                9040: 1,
                9205: 1,
                9831: 1
              } [a] && f.push(e[a] = (e => new Promise((a, f) => {
                var d = P.miniCssF(e),
                  c = P.p + d;
                if (((e, a) => {
                    for (var f = document.getElementsByTagName("link"), d = 0; d < f.length; d++) {
                      var c = (r = f[d]).getAttribute("data-href") || r.getAttribute("href");
                      if ("stylesheet" === r.rel && (c === e || c === a)) return r
                    }
                    var t = document.getElementsByTagName("style");
                    for (d = 0; d < t.length; d++) {
                      var r;
                      if ((c = (r = t[d]).getAttribute("data-href")) === e || c === a) return r
                    }
                  })(d, c)) return a();
                ((e, a, f, d, c) => {
                  var t = document.createElement("link");
                  t.rel = "stylesheet", t.type = "text/css", P.nc && (t.nonce = P.nc), t.onerror = t.onload = f => {
                    if (t.onerror = t.onload = null, "load" === f.type) d();
                    else {
                      var r = f && f.type,
                        b = f && f.target && f.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + b + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = r, o.request = b, t.parentNode && t.parentNode.removeChild(t), c(o)
                    }
                  }, t.href = a, document.head.appendChild(t)
                })(e, c, 0, a, f)
              }))(a).then(() => {
                e[a] = 0
              }, f => {
                throw delete e[a], f
              }))
            }
          }
        })(), (() => {
          var e = {
            1149: 0
          };
          P.f.j = (a, f) => {
            var d = P.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) f.push(d[2]);
              else if (/^(1(128|335|626|788|879|913)|2(229|405|440|918|973)|3(137|213|416|582)|4(105|294|572)|5(202|8|82|966)|6(97[08]|325|565|766)|7(145|360|538|592)|8(20|429|778|835|987)|9(147|311|623))$/.test(a)) e[a] = 0;
            else {
              var c = new Promise((f, c) => d = e[a] = [f, c]);
              f.push(d[2] = c);
              var t = P.p + P.u(a),
                r = new Error;
              P.l(t, f => {
                if (P.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var c = f && ("load" === f.type ? "missing" : f.type),
                    t = f && f.target && f.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + c + ": " + t + ")", r.name = "ChunkLoadError", r.type = c, r.request = t, d[1](r)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var d, c, [t, r, b] = f,
                o = 0;
              if (t.some(a => 0 !== e[a])) {
                for (d in r) P.o(r, d) && (P.m[d] = r[d]);
                b && b(P)
              }
              for (a && a(f); o < t.length; o++) c = t[o], P.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            f = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), P.nc = void 0, P(93032), P(95400)
      })())
    }
  }
});