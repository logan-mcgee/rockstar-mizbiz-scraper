try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    i = (new e.Error).stack;
  i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "73bc7ae0-c5fc-48bb-886b-4befd7872104", e._sentryDebugIdIdentifier = "sentry-dbid-73bc7ae0-c5fc-48bb-886b-4befd7872104")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1375], {
    6988(e, i, r) {
      "use strict";
      (o = r(93082)) && "object" == typeof o && "default" in o && o.default;
      var o, t = r(97727),
        n = new t,
        a = n.getBrowser(),
        s = (n.getCPU(), n.getDevice()),
        b = n.getEngine(),
        d = n.getOS(),
        u = n.getUA();
      var c = "mobile",
        w = "tablet",
        l = "Chrome",
        p = "Firefox",
        f = "Opera",
        m = "Yandex",
        g = "Safari",
        h = "Internet Explorer",
        v = "Edge",
        k = "Chromium",
        y = "IE",
        x = "Mobile Safari",
        _ = "MIUI Browser",
        S = "Samsung Browser",
        A = "iOS",
        T = "Android",
        C = "Windows Phone",
        E = "Windows",
        O = "Mac OS",
        z = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        I = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        U = function(e) {
          var i = I();
          return i && i.platform && (-1 !== i.platform.indexOf(e) || "MacIntel" === i.platform && i.maxTouchPoints > 1 && !window.MSStream)
        },
        j = function(e) {
          return e.type === c
        },
        M = function(e) {
          return e.type === w
        },
        q = function(e) {
          var i = e.type;
          return i === c || i === w
        },
        N = function(e) {
          return "smarttv" === e.type
        },
        P = function(e) {
          return void 0 === e.type
        },
        R = function(e) {
          return "wearable" === e.type
        },
        B = function(e) {
          return "console" === e.type
        },
        D = function(e) {
          return "embedded" === e.type
        },
        L = function(e) {
          var i = e.vendor;
          return z(i)
        },
        V = function(e) {
          var i = e.model;
          return z(i)
        },
        $ = function(e) {
          var i = e.type;
          return z(i, "browser")
        },
        F = function(e) {
          return e.name === T
        },
        H = function(e) {
          return e.name === E
        },
        G = function(e) {
          return e.name === O
        },
        W = function(e) {
          return e.name === C
        },
        X = function(e) {
          return e.name === A
        },
        Z = function(e) {
          var i = e.version;
          return z(i)
        },
        Y = function(e) {
          var i = e.name;
          return z(i)
        },
        K = function(e) {
          return e.name === l
        },
        Q = function(e) {
          return e.name === p
        },
        J = function(e) {
          return e.name === k
        },
        ee = function(e) {
          return e.name === v
        },
        ie = function(e) {
          return e.name === m
        },
        re = function(e) {
          var i = e.name;
          return i === g || i === x
        },
        oe = function(e) {
          return e.name === x
        },
        te = function(e) {
          return e.name === f
        },
        ne = function(e) {
          var i = e.name;
          return i === h || i === y
        },
        ae = function(e) {
          return e.name === _
        },
        se = function(e) {
          return e.name === S
        },
        be = function(e) {
          var i = e.version;
          return z(i)
        },
        de = function(e) {
          var i = e.major;
          return z(i)
        },
        ue = function(e) {
          var i = e.name;
          return z(i)
        },
        ce = function(e) {
          var i = e.name;
          return z(i)
        },
        we = function(e) {
          var i = e.version;
          return z(i)
        },
        le = function() {
          var e = I(),
            i = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof i && /electron/.test(i)
        },
        pe = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        fe = function() {
          var e = I();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        me = function() {
          return U("iPad")
        },
        ge = function() {
          return U("iPhone")
        },
        he = function() {
          return U("iPod")
        },
        ve = function(e) {
          return z(e)
        };
      var ke = N(s),
        ye = (B(s), R(s)),
        xe = (D(s), oe(a) || me(), J(a), q(s) || me(), j(s), M(s) || me(), P(s), P(s), F(d), W(d), X(d) || me(), K(a), Q(a), re(a), te(a), ne(a)),
        _e = (Z(d), Y(d), be(a), de(a), ue(a)),
        Se = (L(s), V(s), ce(b), we(b), ve(u), ee(a) || pe(u), ie(a), $(s), fe(), me(), ge(), he(), le(), pe(u), ee(a) && !pe(u));
      H(d), G(d), ae(a), se(a);
      i.C0 = _e, i.lT = xe, i.n8 = Se, i.UX = ke, i.w = ye
    },
    97727(e, i, r) {
      var o;
      ! function(t, n) {
        "use strict";
        var a = "function",
          s = "undefined",
          b = "object",
          d = "string",
          u = "major",
          c = "model",
          w = "name",
          l = "type",
          p = "vendor",
          f = "version",
          m = "architecture",
          g = "console",
          h = "mobile",
          v = "tablet",
          k = "smarttv",
          y = "wearable",
          x = "embedded",
          _ = "Amazon",
          S = "Apple",
          A = "ASUS",
          T = "BlackBerry",
          C = "Browser",
          E = "Chrome",
          O = "Firefox",
          z = "Google",
          I = "Honor",
          U = "Huawei",
          j = "LG",
          M = "Microsoft",
          q = "Motorola",
          N = "Nvidia",
          P = "OnePlus",
          R = "Opera",
          B = "OPPO",
          D = "Samsung",
          L = "Sharp",
          V = "Sony",
          $ = "Xiaomi",
          F = "Zebra",
          H = "Facebook",
          G = "Chromium OS",
          W = "Mac OS",
          X = " Browser",
          Z = function(e) {
            for (var i = {}, r = 0; r < e.length; r++) i[e[r].toUpperCase()] = e[r];
            return i
          },
          Y = function(e, i) {
            return typeof e === d && -1 !== K(i).indexOf(K(e))
          },
          K = function(e) {
            return e.toLowerCase()
          },
          Q = function(e, i) {
            if (typeof e === d) return e = e.replace(/^\s\s*/, ""), typeof i === s ? e : e.substring(0, 500)
          },
          J = function(e, i) {
            for (var r, o, t, s, d, u, c = 0; c < i.length && !d;) {
              var w = i[c],
                l = i[c + 1];
              for (r = o = 0; r < w.length && !d && w[r];)
                if (d = w[r++].exec(e))
                  for (t = 0; t < l.length; t++) u = d[++o], typeof(s = l[t]) === b && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : n : this[s[0]] = u ? s[1].call(this, u, s[2]) : n : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : n) : this[s] = u || n;
              c += 2
            }
          },
          ee = function(e, i) {
            for (var r in i)
              if (typeof i[r] === b && i[r].length > 0) {
                for (var o = 0; o < i[r].length; o++)
                  if (Y(i[r][o], e)) return "?" === r ? n : r
              } else if (Y(i[r], e)) return "?" === r ? n : r;
            return i.hasOwnProperty("*") ? i["*"] : e
          },
          ie = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          },
          re = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [f, [w, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [f, [w, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [w, f],
              [/opios[\/ ]+([\w\.]+)/i],
              [f, [w, R + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [f, [w, R + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [f, [w, R]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [f, [w, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [f, [w, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [w, f],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [f, [w, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [f, [w, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [f, [w, "UC" + C]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [f, [w, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [f, [w, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [f, [w, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [f, [w, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [f, [w, "Smart Lenovo " + C]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [w, /(.+)/, "$1 Secure " + C], f
              ],
              [/\bfocus\/([\w\.]+)/i],
              [f, [w, O + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [f, [w, R + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [f, [w, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [f, [w, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [f, [w, R + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [f, [w, "MIUI" + X]],
              [/fxios\/([\w\.-]+)/i],
              [f, [w, O]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [f, [w, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [w, /(.+)/, "$1Browser"], f
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [w, /(.+)/, "$1" + X], f
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [f, [w, D + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [f, [w, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [w, "Sogou Mobile"], f
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [w, f],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [w],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [f, w],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [w, H], f
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [w, f],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [f, [w, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [f, [w, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [f, [w, E + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [w, E + " WebView"], f
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [f, [w, "Android " + C]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [w, f],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [f, [w, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [f, w],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [w, [f, ee, {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [w, f],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [w, "Netscape"], f
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [w, f],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [f, [w, O + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
              [w, [f, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [w, [f, /master.|lts./, ""]]
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [
                [m, "amd64"]
              ],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [
                [m, "ia32"]
              ],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [
                [m, "arm64"]
              ],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [
                [m, "armhf"]
              ],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [
                [m, "arm"]
              ],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [
                [m, /ower/, "", K]
              ],
              [/ sun4\w[;\)]/i],
              [
                [m, "sparc"]
              ],
              [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
              [
                [m, K]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [c, [p, D],
                [l, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [c, [p, D],
                [l, h]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [c, [p, S],
                [l, h]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [c, [p, S],
                [l, v]
              ],
              [/(macintosh);/i],
              [c, [p, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [c, [p, L],
                [l, h]
              ],
              [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
              [c, [p, I],
                [l, v]
              ],
              [/honor([-\w ]+)[;\)]/i],
              [c, [p, I],
                [l, h]
              ],
              [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
              [c, [p, U],
                [l, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [c, [p, U],
                [l, h]
              ],
              [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
              [
                [c, /_/g, " "],
                [p, $],
                [l, v]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
              [
                [c, /_/g, " "],
                [p, $],
                [l, h]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [c, [p, B],
                [l, h]
              ],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [c, [p, ee, {
                  OnePlus: ["304", "403", "203"],
                  "*": B
                }],
                [l, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [c, [p, "Vivo"],
                [l, h]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [c, [p, "Realme"],
                [l, h]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [c, [p, q],
                [l, h]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [c, [p, q],
                [l, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [c, [p, j],
                [l, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [c, [p, j],
                [l, h]
              ],
              [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
              [c, [p, "Lenovo"],
                [l, v]
              ],
              [/(nokia) (t[12][01])/i],
              [p, c, [l, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
              [
                [c, /_/g, " "],
                [l, h],
                [p, "Nokia"]
              ],
              [/(pixel (c|tablet))\b/i],
              [c, [p, z],
                [l, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [c, [p, z],
                [l, h]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [c, [p, V],
                [l, h]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [c, "Xperia Tablet"],
                [p, V],
                [l, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [c, [p, P],
                [l, h]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [c, [p, _],
                [l, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [c, /(.+)/g, "Fire Phone $1"],
                [p, _],
                [l, h]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [c, p, [l, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [c, [p, T],
                [l, h]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [c, [p, A],
                [l, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [c, [p, A],
                [l, h]
              ],
              [/(nexus 9)/i],
              [c, [p, "HTC"],
                [l, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [p, [c, /_/g, " "],
                [l, h]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [c, [p, "TCL"],
                [l, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [p, K], c, [l, ee, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [c, [p, "Acer"],
                [l, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [c, [p, "Meizu"],
                [l, h]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [c, [p, "Ulefone"],
                [l, h]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [c, [p, "Energizer"],
                [l, h]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [c, [p, "Cat"],
                [l, h]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [c, [p, "Smartfren"],
                [l, h]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [c, [p, "Nothing"],
                [l, h]
              ],
              [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
              [c, [p, "Archos"],
                [l, v]
              ],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [c, [p, "Archos"],
                [l, h]
              ],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [p, c, [l, v]],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
              [p, c, [l, h]],
              [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [p, c, [l, v]],
              [/(surface duo)/i],
              [c, [p, M],
                [l, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [c, [p, "Fairphone"],
                [l, h]
              ],
              [/(u304aa)/i],
              [c, [p, "AT&T"],
                [l, h]
              ],
              [/\bsie-(\w*)/i],
              [c, [p, "Siemens"],
                [l, h]
              ],
              [/\b(rct\w+) b/i],
              [c, [p, "RCA"],
                [l, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [c, [p, "Dell"],
                [l, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [c, [p, "Verizon"],
                [l, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [c, [p, "Barnes & Noble"],
                [l, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [c, [p, "NuVision"],
                [l, v]
              ],
              [/\b(k88) b/i],
              [c, [p, "ZTE"],
                [l, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [c, [p, "ZTE"],
                [l, h]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [c, [p, "Swiss"],
                [l, h]
              ],
              [/\b(zur\d{3}) b/i],
              [c, [p, "Swiss"],
                [l, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [c, [p, "Zeki"],
                [l, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [p, "Dragon Touch"], c, [l, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [c, [p, "Insignia"],
                [l, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [c, [p, "NextBook"],
                [l, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [p, "Voice"], c, [l, h]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [p, "LvTel"], c, [l, h]
              ],
              [/\b(ph-1) /i],
              [c, [p, "Essential"],
                [l, h]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [c, [p, "Envizen"],
                [l, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [c, [p, "MachSpeed"],
                [l, v]
              ],
              [/\btu_(1491) b/i],
              [c, [p, "Rotor"],
                [l, v]
              ],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [c, [p, N],
                [l, v]
              ],
              [/(sprint) (\w+)/i],
              [p, c, [l, h]],
              [/(kin\.[onetw]{3})/i],
              [
                [c, /\./g, " "],
                [p, M],
                [l, h]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [c, [p, F],
                [l, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [c, [p, F],
                [l, h]
              ],
              [/smart-tv.+(samsung)/i],
              [p, [l, k]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [c, /^/, "SmartTV"],
                [p, D],
                [l, k]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, j],
                [l, k]
              ],
              [/(apple) ?tv/i],
              [p, [c, S + " TV"],
                [l, k]
              ],
              [/crkey/i],
              [
                [c, E + "cast"],
                [p, z],
                [l, k]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [c, [p, _],
                [l, k]
              ],
              [/(shield \w+ tv)/i],
              [c, [p, N],
                [l, k]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [c, [p, L],
                [l, k]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [c, [p, V],
                [l, k]
              ],
              [/(mi(tv|box)-?\w+) bui/i],
              [c, [p, $],
                [l, k]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, c, [l, k]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [p, Q],
                [c, Q],
                [l, k]
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [c, [l, k]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [l, k]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, c, [l, g]],
              [/droid.+; (shield)( bui|\))/i],
              [c, [p, N],
                [l, g]
              ],
              [/(playstation \w+)/i],
              [c, [p, V],
                [l, g]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [c, [p, M],
                [l, g]
              ],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [c, [p, D],
                [l, y]
              ],
              [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
              [p, c, [l, y]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [c, [p, B],
                [l, y]
              ],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [c, [p, S],
                [l, y]
              ],
              [/(opwwe\d{3})/i],
              [c, [p, P],
                [l, y]
              ],
              [/(moto 360)/i],
              [c, [p, q],
                [l, y]
              ],
              [/(smartwatch 3)/i],
              [c, [p, V],
                [l, y]
              ],
              [/(g watch r)/i],
              [c, [p, j],
                [l, y]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [c, [p, F],
                [l, y]
              ],
              [/droid.+; (glass) \d/i],
              [c, [p, z],
                [l, y]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [p, c, [l, y]],
              [/; (quest( \d| pro)?)/i],
              [c, [p, H],
                [l, y]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [l, x]],
              [/(aeobc)\b/i],
              [c, [p, _],
                [l, x]
              ],
              [/(homepod).+mac os/i],
              [c, [p, S],
                [l, x]
              ],
              [/windows iot/i],
              [
                [l, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [c, [l, h]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [c, [l, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [l, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [l, h]
              ],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [c, [p, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [f, [w, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [w, f],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [f, [w, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [w, f],
              [/ladybird\//i],
              [
                [w, "LibWeb"]
              ],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [f, w]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [w, f],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [w, [f, ee, ie]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [f, ee, ie],
                [w, "Windows"]
              ],
              [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [f, /_/g, "."],
                [w, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [w, W],
                [f, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [f, w],
              [/(ubuntu) ([\w\.]+) like android/i],
              [
                [w, /(.+)/, "$1 Touch"], f
              ],
              [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
              [w, f],
              [/\(bb(10);/i],
              [f, [w, T]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [f, [w, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [f, [w, O + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [f, [w, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [f, [w, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [f, [w, E + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [w, G], f
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [w, f],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [w, "Solaris"], f
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [w, f]
            ]
          },
          oe = function(e, i) {
            if (typeof e === b && (i = e, e = n), !(this instanceof oe)) return new oe(e, i).getResult();
            var r = typeof t !== s && t.navigator ? t.navigator : n,
              o = e || (r && r.userAgent ? r.userAgent : ""),
              g = r && r.userAgentData ? r.userAgentData : n,
              k = i ? function(e, i) {
                var r = {};
                for (var o in e) i[o] && i[o].length % 2 == 0 ? r[o] = i[o].concat(e[o]) : r[o] = e[o];
                return r
              }(re, i) : re,
              y = r && r.userAgent == o;
            return this.getBrowser = function() {
              var e, i = {};
              return i[w] = n, i[f] = n, J.call(i, o, k.browser), i[u] = typeof(e = i[f]) === d ? e.replace(/[^\d\.]/g, "").split(".")[0] : n, y && r && r.brave && typeof r.brave.isBrave == a && (i[w] = "Brave"), i
            }, this.getCPU = function() {
              var e = {};
              return e[m] = n, J.call(e, o, k.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[p] = n, e[c] = n, e[l] = n, J.call(e, o, k.device), y && !e[l] && g && g.mobile && (e[l] = h), y && "Macintosh" == e[c] && r && typeof r.standalone !== s && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[c] = "iPad", e[l] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[w] = n, e[f] = n, J.call(e, o, k.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[w] = n, e[f] = n, J.call(e, o, k.os), y && !e[w] && g && g.platform && "Unknown" != g.platform && (e[w] = g.platform.replace(/chrome os/i, G).replace(/macos/i, W)), e
            }, this.getResult = function() {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              }
            }, this.getUA = function() {
              return o
            }, this.setUA = function(e) {
              return o = typeof e === d && e.length > 500 ? Q(e, 500) : e, this
            }, this.setUA(o), this
          };
        oe.VERSION = "1.0.41", oe.BROWSER = Z([w, f, u]), oe.CPU = Z([m]), oe.DEVICE = Z([c, p, l, g, h, k, v, y, x]), oe.ENGINE = oe.OS = Z([w, f]), typeof i !== s ? (e.exports && (i = e.exports = oe), i.UAParser = oe) : r.amdO ? (o = function() {
          return oe
        }.call(i, r, i, e)) === n || (e.exports = o) : typeof t !== s && (t.UAParser = oe);
        var te = typeof t !== s && (t.jQuery || t.Zepto);
        if (te && !te.ua) {
          var ne = new oe;
          te.ua = ne.getResult(), te.ua.get = function() {
            return ne.getUA()
          }, te.ua.set = function(e) {
            ne.setUA(e);
            var i = ne.getResult();
            for (var r in i) te.ua[r] = i[r]
          }
        }
      }("object" == typeof window ? window : this)
    },
    5942(e, i, r) {
      "use strict";
      const o = e => async (i, {
        outputFormat: r = "hex"
      } = {}) => {
        "string" == typeof i && (i = (new globalThis.TextEncoder).encode(i));
        const o = await globalThis.crypto.subtle.digest(e, i);
        return "hex" === r ? (e => {
          const i = new DataView(e);
          let r = "";
          for (let e = 0; e < i.byteLength; e += 4) r += i.getUint32(e).toString(16).padStart(8, "0");
          return r
        })(o) : o
      }, t = (o("SHA-1"), o("SHA-256"));
      o("SHA-384"), o("SHA-512"), r.d(i, ["sc", 0, t])
    },
    62885(e, i, r) {
      "use strict";

      function o(e) {
        for (var i = 1; i < arguments.length; i++) {
          var r = arguments[i];
          for (var o in r) "__proto__" !== o && (e[o] = r[o])
        }
        return e
      }
      r.d(i, {
        A: () => t
      });
      var t = function e(i, r) {
        function t(e, t, n) {
          if ("undefined" != typeof document) {
            "number" == typeof(n = o({}, r, n)).expires && (n.expires = new Date(Date.now() + 864e5 * n.expires)), n.expires && (n.expires = n.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var s in n) n[s] && (a += "; " + s, !0 !== n[s] && (a += "=" + n[s].split(";")[0]));
            return document.cookie = e + "=" + i.write(t, e) + a
          }
        }
        return Object.create({
          set: t,
          get: function(e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (var r = document.cookie ? document.cookie.split("; ") : [], o = {}, t = 0; t < r.length; t++) {
                var n = r[t].split("="),
                  a = n.slice(1).join("=");
                try {
                  var s = decodeURIComponent(n[0]);
                  if (s in o || (o[s] = i.read(a, s)), e === s) break
                } catch (e) {}
              }
              return e ? o[e] : o
            }
          },
          remove: function(e, i) {
            t(e, "", o({}, i, {
              expires: -1
            }))
          },
          withAttributes: function(i) {
            return e(this.converter, o({}, this.attributes, i))
          },
          withConverter: function(i) {
            return e(o({}, this.converter, i), this.attributes)
          }
        }, {
          attributes: {
            value: Object.freeze(r)
          },
          converter: {
            value: Object.freeze(i)
          }
        })
      }({
        read: function(e) {
          return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
          return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
      }, {
        path: "/"
      })
    },
    4242(e, i, r) {
      "use strict";
      r.d(i, {
        s: () => t
      });
      class o extends Error {}

      function t(e, i) {
        if ("string" != typeof e) throw new o("Invalid token specified: must be a string");
        i || (i = {});
        const r = !0 === i.header ? 0 : 1,
          t = e.split(".")[r];
        if ("string" != typeof t) throw new o(`Invalid token specified: missing part #${r+1}`);
        let n;
        try {
          n = function(e) {
            let i = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (i.length % 4) {
              case 0:
                break;
              case 2:
                i += "==";
                break;
              case 3:
                i += "=";
                break;
              default:
                throw new Error("base64 string is not of the correct length")
            }
            try {
              return function(e) {
                return decodeURIComponent(atob(e).replace(/(.)/g, (e, i) => {
                  let r = i.charCodeAt(0).toString(16).toUpperCase();
                  return r.length < 2 && (r = "0" + r), "%" + r
                }))
              }(i)
            } catch (e) {
              return atob(i)
            }
          }(t)
        } catch (e) {
          throw new o(`Invalid token specified: invalid base64 for part #${r+1} (${e.message})`)
        }
        try {
          return JSON.parse(n)
        } catch (e) {
          throw new o(`Invalid token specified: invalid json for part #${r+1} (${e.message})`)
        }
      }
      o.prototype.name = "InvalidTokenError"
    },
    82088(e, i, r) {
      "use strict";
      var o = r(30570),
        t = r(61105),
        n = r(48348),
        a = r(6700),
        s = r(99651),
        b = r(7269),
        d = r(61044),
        u = r(10312),
        c = Object.prototype.hasOwnProperty;
      r.d(i, ["A", 0, function(e) {
        if (null == e) return !0;
        if ((0, s.A)(e) && ((0, a.A)(e) || "string" == typeof e || "function" == typeof e.splice || (0, b.A)(e) || (0, u.A)(e) || (0, n.A)(e))) return !e.length;
        var i = (0, t.A)(e);
        if ("[object Map]" == i || "[object Set]" == i) return !e.size;
        if ((0, d.A)(e)) return !(0, o.A)(e).length;
        for (var r in e)
          if (c.call(e, r)) return !1;
        return !0
      }])
    }
  }
]);