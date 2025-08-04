try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    i = (new e.Error).stack;
  i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "5d5c1b19-e62f-42d0-abf9-a5c2ca9ba57b", e._sentryDebugIdIdentifier = "sentry-dbid-5d5c1b19-e62f-42d0-abf9-a5c2ca9ba57b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9421], {
    30770: function(e, i, n) {
      var r;
      ! function(t, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          u = "object",
          d = "string",
          l = "major",
          c = "model",
          b = "name",
          w = "type",
          m = "vendor",
          f = "version",
          p = "architecture",
          g = "console",
          h = "mobile",
          v = "tablet",
          y = "smarttv",
          k = "wearable",
          x = "embedded",
          O = "Amazon",
          E = "Apple",
          S = "ASUS",
          C = "BlackBerry",
          P = "Browser",
          A = "Chrome",
          _ = "Firefox",
          T = "Google",
          M = "Huawei",
          I = "LG",
          V = "Microsoft",
          j = "Motorola",
          W = "Opera",
          N = "Samsung",
          F = "Sharp",
          U = "Sony",
          L = "Xiaomi",
          B = "Zebra",
          z = "Facebook",
          q = "Chromium OS",
          D = "Mac OS",
          R = " Browser",
          H = function(e) {
            for (var i = {}, n = 0; n < e.length; n++) i[e[n].toUpperCase()] = e[n];
            return i
          },
          G = function(e, i) {
            return typeof e === d && -1 !== Y(i).indexOf(Y(e))
          },
          Y = function(e) {
            return e.toLowerCase()
          },
          $ = function(e, i) {
            if (typeof e === d) return e = e.replace(/^\s\s*/, ""), typeof i === s ? e : e.substring(0, 500)
          },
          Z = function(e, i) {
            for (var n, r, t, s, d, l, c = 0; c < i.length && !d;) {
              var b = i[c],
                w = i[c + 1];
              for (n = r = 0; n < b.length && !d && b[n];)
                if (d = b[n++].exec(e))
                  for (t = 0; t < w.length; t++) l = d[++r], typeof(s = w[t]) === u && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
              c += 2
            }
          },
          X = function(e, i) {
            for (var n in i)
              if (typeof i[n] === u && i[n].length > 0) {
                for (var r = 0; r < i[n].length; r++)
                  if (G(i[n][r], e)) return "?" === n ? o : n
              } else if (G(i[n], e)) return "?" === n ? o : n;
            return i.hasOwnProperty("*") ? i["*"] : e
          },
          K = {
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
          Q = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [f, [b, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [f, [b, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [b, f],
              [/opios[\/ ]+([\w\.]+)/i],
              [f, [b, W + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [f, [b, W + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [f, [b, W]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [f, [b, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [f, [b, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [b, f],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [f, [b, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [f, [b, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [f, [b, "UC" + P]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [f, [b, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [f, [b, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [f, [b, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [f, [b, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [f, [b, "Smart Lenovo " + P]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1 Secure " + P], f
              ],
              [/\bfocus\/([\w\.]+)/i],
              [f, [b, _ + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [f, [b, W + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [f, [b, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [f, [b, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [f, [b, W + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [f, [b, "MIUI" + R]],
              [/fxios\/([\w\.-]+)/i],
              [f, [b, _]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [f, [b, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1Browser"], f
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1" + R], f
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [f, [b, N + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [f, [b, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [b, "Sogou Mobile"], f
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [b, f],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [b],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [f, b],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [b, z], f
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [b, f],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [f, [b, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [f, [b, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [f, [b, A + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [b, A + " WebView"], f
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [f, [b, "Android " + P]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [b, f],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [f, [b, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [f, b],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [b, [f, X, {
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
              [b, f],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [b, "Netscape"], f
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [b, f],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [f, [b, _ + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
              [b, [f, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [b, [f, /master.|lts./, ""]]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [
                [p, "amd64"]
              ],
              [/(ia32(?=;))/i],
              [
                [p, Y]
              ],
              [/((?:i[346]|x)86)[;\)]/i],
              [
                [p, "ia32"]
              ],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [
                [p, "arm64"]
              ],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [
                [p, "armhf"]
              ],
              [/windows (ce|mobile); ppc;/i],
              [
                [p, "arm"]
              ],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [
                [p, /ower/, "", Y]
              ],
              [/(sun4\w)[;\)]/i],
              [
                [p, "sparc"]
              ],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [
                [p, Y]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [c, [m, N],
                [w, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [c, [m, N],
                [w, h]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [c, [m, E],
                [w, h]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [c, [m, E],
                [w, v]
              ],
              [/(macintosh);/i],
              [c, [m, E]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [c, [m, F],
                [w, h]
              ],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [c, [m, "Honor"],
                [w, h]
              ],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [c, [m, M],
                [w, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [c, [m, M],
                [w, h]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
              [
                [c, /_/g, " "],
                [m, L],
                [w, h]
              ],
              [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [c, /_/g, " "],
                [m, L],
                [w, v]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [c, [m, "OPPO"],
                [w, h]
              ],
              [/\b(opd2\d{3}a?) bui/i],
              [c, [m, "OPPO"],
                [w, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [c, [m, "Vivo"],
                [w, h]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [c, [m, "Realme"],
                [w, h]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [c, [m, j],
                [w, h]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [c, [m, j],
                [w, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [c, [m, I],
                [w, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [c, [m, I],
                [w, h]
              ],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [c, [m, "Lenovo"],
                [w, v]
              ],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [c, /_/g, " "],
                [m, "Nokia"],
                [w, h]
              ],
              [/(pixel c)\b/i],
              [c, [m, T],
                [w, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [c, [m, T],
                [w, h]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [c, [m, U],
                [w, h]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [c, "Xperia Tablet"],
                [m, U],
                [w, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [c, [m, "OnePlus"],
                [w, h]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [c, [m, O],
                [w, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [c, /(.+)/g, "Fire Phone $1"],
                [m, O],
                [w, h]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [c, m, [w, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [c, [m, C],
                [w, h]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [c, [m, S],
                [w, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [c, [m, S],
                [w, h]
              ],
              [/(nexus 9)/i],
              [c, [m, "HTC"],
                [w, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [m, [c, /_/g, " "],
                [w, h]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [c, [m, "TCL"],
                [w, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [m, Y], c, [w, X, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [c, [m, "Acer"],
                [w, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [c, [m, "Meizu"],
                [w, h]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [c, [m, "Ulefone"],
                [w, h]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [c, [m, "Energizer"],
                [w, h]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [c, [m, "Cat"],
                [w, h]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [c, [m, "Smartfren"],
                [w, h]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [c, [m, "Nothing"],
                [w, h]
              ],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
              [m, c, [w, h]],
              [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [m, c, [w, v]],
              [/(surface duo)/i],
              [c, [m, V],
                [w, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [c, [m, "Fairphone"],
                [w, h]
              ],
              [/(u304aa)/i],
              [c, [m, "AT&T"],
                [w, h]
              ],
              [/\bsie-(\w*)/i],
              [c, [m, "Siemens"],
                [w, h]
              ],
              [/\b(rct\w+) b/i],
              [c, [m, "RCA"],
                [w, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [c, [m, "Dell"],
                [w, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [c, [m, "Verizon"],
                [w, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [c, [m, "Barnes & Noble"],
                [w, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [c, [m, "NuVision"],
                [w, v]
              ],
              [/\b(k88) b/i],
              [c, [m, "ZTE"],
                [w, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [c, [m, "ZTE"],
                [w, h]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [c, [m, "Swiss"],
                [w, h]
              ],
              [/\b(zur\d{3}) b/i],
              [c, [m, "Swiss"],
                [w, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [c, [m, "Zeki"],
                [w, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [m, "Dragon Touch"], c, [w, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [c, [m, "Insignia"],
                [w, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [c, [m, "NextBook"],
                [w, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [m, "Voice"], c, [w, h]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [m, "LvTel"], c, [w, h]
              ],
              [/\b(ph-1) /i],
              [c, [m, "Essential"],
                [w, h]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [c, [m, "Envizen"],
                [w, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [c, [m, "MachSpeed"],
                [w, v]
              ],
              [/\btu_(1491) b/i],
              [c, [m, "Rotor"],
                [w, v]
              ],
              [/(shield[\w ]+) b/i],
              [c, [m, "Nvidia"],
                [w, v]
              ],
              [/(sprint) (\w+)/i],
              [m, c, [w, h]],
              [/(kin\.[onetw]{3})/i],
              [
                [c, /\./g, " "],
                [m, V],
                [w, h]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [c, [m, B],
                [w, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [c, [m, B],
                [w, h]
              ],
              [/smart-tv.+(samsung)/i],
              [m, [w, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [c, /^/, "SmartTV"],
                [m, N],
                [w, y]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [m, I],
                [w, y]
              ],
              [/(apple) ?tv/i],
              [m, [c, E + " TV"],
                [w, y]
              ],
              [/crkey/i],
              [
                [c, A + "cast"],
                [m, T],
                [w, y]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [c, [m, O],
                [w, y]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [c, [m, F],
                [w, y]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [c, [m, U],
                [w, y]
              ],
              [/(mitv-\w{5}) bui/i],
              [c, [m, L],
                [w, y]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [m, c, [w, y]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [m, $],
                [c, $],
                [w, y]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [w, y]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [m, c, [w, g]],
              [/droid.+; (shield) bui/i],
              [c, [m, "Nvidia"],
                [w, g]
              ],
              [/(playstation [345portablevi]+)/i],
              [c, [m, U],
                [w, g]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [c, [m, V],
                [w, g]
              ],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [c, [m, N],
                [w, k]
              ],
              [/((pebble))app/i],
              [m, c, [w, k]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [c, [m, E],
                [w, k]
              ],
              [/droid.+; (glass) \d/i],
              [c, [m, T],
                [w, k]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [c, [m, B],
                [w, k]
              ],
              [/droid.+; (glass) \d/i],
              [c, [m, T],
                [w, k]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [m, c, [w, k]],
              [/; (quest( \d| pro)?)/i],
              [c, [m, z],
                [w, k]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [m, [w, x]],
              [/(aeobc)\b/i],
              [c, [m, O],
                [w, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [c, [w, h]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [c, [w, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [w, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [w, h]
              ],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [c, [m, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [f, [b, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [b, f],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [f, [b, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [b, f],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [f, b]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [b, f],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [b, [f, X, K]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [f, X, K],
                [b, "Windows"]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [f, /_/g, "."],
                [b, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [b, D],
                [f, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [f, b],
              [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
              [b, f],
              [/\(bb(10);/i],
              [f, [b, C]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [f, [b, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [f, [b, _ + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [f, [b, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [f, [b, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [f, [b, A + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [b, q], f
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [b, f],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [b, "Solaris"], f
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [b, f]
            ]
          },
          J = function(e, i) {
            if (typeof e === u && (i = e, e = o), !(this instanceof J)) return new J(e, i).getResult();
            var n = typeof t !== s && t.navigator ? t.navigator : o,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              g = n && n.userAgentData ? n.userAgentData : o,
              y = i ? function(e, i) {
                var n = {};
                for (var r in e) i[r] && i[r].length % 2 == 0 ? n[r] = i[r].concat(e[r]) : n[r] = e[r];
                return n
              }(Q, i) : Q,
              k = n && n.userAgent == r;
            return this.getBrowser = function() {
              var e, i = {};
              return i[b] = o, i[f] = o, Z.call(i, r, y.browser), i[l] = typeof(e = i[f]) === d ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, k && n && n.brave && typeof n.brave.isBrave == a && (i[b] = "Brave"), i
            }, this.getCPU = function() {
              var e = {};
              return e[p] = o, Z.call(e, r, y.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[m] = o, e[c] = o, e[w] = o, Z.call(e, r, y.device), k && !e[w] && g && g.mobile && (e[w] = h), k && "Macintosh" == e[c] && n && typeof n.standalone !== s && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[c] = "iPad", e[w] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[b] = o, e[f] = o, Z.call(e, r, y.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[b] = o, e[f] = o, Z.call(e, r, y.os), k && !e[b] && g && g.platform && "Unknown" != g.platform && (e[b] = g.platform.replace(/chrome os/i, q).replace(/macos/i, D)), e
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
              return r
            }, this.setUA = function(e) {
              return r = typeof e === d && e.length > 500 ? $(e, 500) : e, this
            }, this.setUA(r), this
          };
        J.VERSION = "1.0.40", J.BROWSER = H([b, f, l]), J.CPU = H([p]), J.DEVICE = H([c, m, w, g, h, y, v, k, x]), J.ENGINE = J.OS = H([b, f]), typeof i !== s ? (e.exports && (i = e.exports = J), i.UAParser = J) : n.amdO ? (r = function() {
          return J
        }.call(i, n, i, e)) === o || (e.exports = r) : typeof t !== s && (t.UAParser = J);
        var ee = typeof t !== s && (t.jQuery || t.Zepto);
        if (ee && !ee.ua) {
          var ie = new J;
          ee.ua = ie.getResult(), ee.ua.get = function() {
            return ie.getUA()
          }, ee.ua.set = function(e) {
            ie.setUA(e);
            var i = ie.getResult();
            for (var n in i) ee.ua[n] = i[n]
          }
        }
      }("object" == typeof window ? window : this)
    },
    89421: (e, i, n) => {
      "use strict";
      Object.defineProperty(i, "__esModule", {
        value: !0
      });
      var r, t = n(62229),
        o = (r = t) && "object" == typeof r && "default" in r ? r.default : r,
        a = n(30770),
        s = new a,
        u = s.getBrowser(),
        d = s.getCPU(),
        l = s.getDevice(),
        c = s.getEngine(),
        b = s.getOS(),
        w = s.getUA(),
        m = function(e) {
          return s.setUA(e)
        },
        f = function(e) {
          if (e) {
            var i = new a(e);
            return {
              UA: i,
              browser: i.getBrowser(),
              cpu: i.getCPU(),
              device: i.getDevice(),
              engine: i.getEngine(),
              os: i.getOS(),
              ua: i.getUA(),
              setUserAgent: function(e) {
                return i.setUA(e)
              }
            }
          }
          console.error("No userAgent string was provided")
        },
        p = Object.freeze({
          ClientUAInstance: s,
          browser: u,
          cpu: d,
          device: l,
          engine: c,
          os: b,
          ua: w,
          setUa: m,
          parseUserAgent: f
        });

      function g(e, i) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          i && (r = r.filter((function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function h(e) {
        return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, h(e)
      }

      function v(e, i) {
        for (var n = 0; n < i.length; n++) {
          var r = i[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function y(e, i, n) {
        return i in e ? Object.defineProperty(e, i, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[i] = n, e
      }

      function k() {
        return k = Object.assign || function(e) {
          for (var i = 1; i < arguments.length; i++) {
            var n = arguments[i];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, k.apply(this, arguments)
      }

      function x(e) {
        return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, x(e)
      }

      function O(e, i) {
        return O = Object.setPrototypeOf || function(e, i) {
          return e.__proto__ = i, e
        }, O(e, i)
      }

      function E(e, i) {
        if (null == e) return {};
        var n, r, t = function(e, i) {
          if (null == e) return {};
          var n, r, t = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) n = o[r], i.indexOf(n) >= 0 || (t[n] = e[n]);
          return t
        }(e, i);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], i.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n])
        }
        return t
      }

      function S(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function C(e, i) {
        (null == i || i > e.length) && (i = e.length);
        for (var n = 0, r = new Array(i); n < i; n++) r[n] = e[n];
        return r
      }
      var P = "mobile",
        A = "tablet",
        _ = "smarttv",
        T = "console",
        M = "wearable",
        I = "embedded",
        V = void 0,
        j = {
          Chrome: "Chrome",
          Firefox: "Firefox",
          Opera: "Opera",
          Yandex: "Yandex",
          Safari: "Safari",
          InternetExplorer: "Internet Explorer",
          Edge: "Edge",
          Chromium: "Chromium",
          Ie: "IE",
          MobileSafari: "Mobile Safari",
          EdgeChromium: "Edge Chromium",
          MIUI: "MIUI Browser",
          SamsungBrowser: "Samsung Browser"
        },
        W = {
          IOS: "iOS",
          Android: "Android",
          WindowsPhone: "Windows Phone",
          Windows: "Windows",
          MAC_OS: "Mac OS"
        },
        N = {
          isMobile: !1,
          isTablet: !1,
          isBrowser: !1,
          isSmartTV: !1,
          isConsole: !1,
          isWearable: !1
        },
        F = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        U = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        L = function(e) {
          var i = U();
          return i && i.platform && (-1 !== i.platform.indexOf(e) || "MacIntel" === i.platform && i.maxTouchPoints > 1 && !window.MSStream)
        },
        B = function(e) {
          return e.type === P
        },
        z = function(e) {
          return e.type === A
        },
        q = function(e) {
          var i = e.type;
          return i === P || i === A
        },
        D = function(e) {
          return e.type === _
        },
        R = function(e) {
          return e.type === V
        },
        H = function(e) {
          return e.type === M
        },
        G = function(e) {
          return e.type === T
        },
        Y = function(e) {
          return e.type === I
        },
        $ = function(e) {
          var i = e.vendor;
          return F(i)
        },
        Z = function(e) {
          var i = e.model;
          return F(i)
        },
        X = function(e) {
          var i = e.type;
          return F(i, "browser")
        },
        K = function(e) {
          return e.name === W.Android
        },
        Q = function(e) {
          return e.name === W.Windows
        },
        J = function(e) {
          return e.name === W.MAC_OS
        },
        ee = function(e) {
          return e.name === W.WindowsPhone
        },
        ie = function(e) {
          return e.name === W.IOS
        },
        ne = function(e) {
          var i = e.version;
          return F(i)
        },
        re = function(e) {
          var i = e.name;
          return F(i)
        },
        te = function(e) {
          return e.name === j.Chrome
        },
        oe = function(e) {
          return e.name === j.Firefox
        },
        ae = function(e) {
          return e.name === j.Chromium
        },
        se = function(e) {
          return e.name === j.Edge
        },
        ue = function(e) {
          return e.name === j.Yandex
        },
        de = function(e) {
          var i = e.name;
          return i === j.Safari || i === j.MobileSafari
        },
        le = function(e) {
          return e.name === j.MobileSafari
        },
        ce = function(e) {
          return e.name === j.Opera
        },
        be = function(e) {
          var i = e.name;
          return i === j.InternetExplorer || i === j.Ie
        },
        we = function(e) {
          return e.name === j.MIUI
        },
        me = function(e) {
          return e.name === j.SamsungBrowser
        },
        fe = function(e) {
          var i = e.version;
          return F(i)
        },
        pe = function(e) {
          var i = e.major;
          return F(i)
        },
        ge = function(e) {
          var i = e.name;
          return F(i)
        },
        he = function(e) {
          var i = e.name;
          return F(i)
        },
        ve = function(e) {
          var i = e.version;
          return F(i)
        },
        ye = function() {
          var e = U(),
            i = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof i && /electron/.test(i)
        },
        ke = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        xe = function() {
          var e = U();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        Oe = function() {
          return L("iPad")
        },
        Ee = function() {
          return L("iPhone")
        },
        Se = function() {
          return L("iPod")
        },
        Ce = function(e) {
          return F(e)
        };

      function Pe(e) {
        var i = e || p,
          n = i.device,
          r = i.browser,
          t = i.os,
          o = i.engine,
          a = i.ua;
        return {
          isSmartTV: D(n),
          isConsole: G(n),
          isWearable: H(n),
          isEmbedded: Y(n),
          isMobileSafari: le(r) || Oe(),
          isChromium: ae(r),
          isMobile: q(n) || Oe(),
          isMobileOnly: B(n),
          isTablet: z(n) || Oe(),
          isBrowser: R(n),
          isDesktop: R(n),
          isAndroid: K(t),
          isWinPhone: ee(t),
          isIOS: ie(t) || Oe(),
          isChrome: te(r),
          isFirefox: oe(r),
          isSafari: de(r),
          isOpera: ce(r),
          isIE: be(r),
          osVersion: ne(t),
          osName: re(t),
          fullBrowserVersion: fe(r),
          browserVersion: pe(r),
          browserName: ge(r),
          mobileVendor: $(n),
          mobileModel: Z(n),
          engineName: he(o),
          engineVersion: ve(o),
          getUA: Ce(a),
          isEdge: se(r) || ke(a),
          isYandex: ue(r),
          deviceType: X(n),
          isIOS13: xe(),
          isIPad13: Oe(),
          isIPhone13: Ee(),
          isIPod13: Se(),
          isElectron: ye(),
          isEdgeChromium: ke(a),
          isLegacyEdge: se(r) && !ke(a),
          isWindows: Q(t),
          isMacOs: J(t),
          isMIUI: we(r),
          isSamsungBrowser: me(r)
        }
      }
      var Ae = D(l),
        _e = G(l),
        Te = H(l),
        Me = Y(l),
        Ie = le(u) || Oe(),
        Ve = ae(u),
        je = q(l) || Oe(),
        We = B(l),
        Ne = z(l) || Oe(),
        Fe = R(l),
        Ue = R(l),
        Le = K(b),
        Be = ee(b),
        ze = ie(b) || Oe(),
        qe = te(u),
        De = oe(u),
        Re = de(u),
        He = ce(u),
        Ge = be(u),
        Ye = ne(b),
        $e = re(b),
        Ze = fe(u),
        Xe = pe(u),
        Ke = ge(u),
        Qe = $(l),
        Je = Z(l),
        ei = he(c),
        ii = ve(c),
        ni = Ce(w),
        ri = se(u) || ke(w),
        ti = ue(u),
        oi = X(l),
        ai = xe(),
        si = Oe(),
        ui = Ee(),
        di = Se(),
        li = ye(),
        ci = ke(w),
        bi = se(u) && !ke(w),
        wi = Q(b),
        mi = J(b),
        fi = we(u),
        pi = me(u);

      function gi(e) {
        var i = e || window.navigator.userAgent;
        return f(i)
      }
      i.AndroidView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = E(e, ["renderWithFragment", "children"]);
        return Le ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.BrowserTypes = j, i.BrowserView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = E(e, ["renderWithFragment", "children"]);
        return Fe ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.ConsoleView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = E(e, ["renderWithFragment", "children"]);
        return _e ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.CustomView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = (e.viewClassName, e.style, e.condition),
          a = E(e, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
        return r ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", a, n) : null
      }, i.IEView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = E(e, ["renderWithFragment", "children"]);
        return Ge ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.IOSView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = E(e, ["renderWithFragment", "children"]);
        return ze ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.MobileOnlyView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = (e.viewClassName, e.style, E(e, ["renderWithFragment", "children", "viewClassName", "style"]));
        return We ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.MobileView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = E(e, ["renderWithFragment", "children"]);
        return je ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.OsTypes = W, i.SmartTVView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = E(e, ["renderWithFragment", "children"]);
        return Ae ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.TabletView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = E(e, ["renderWithFragment", "children"]);
        return Ne ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.WearableView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = E(e, ["renderWithFragment", "children"]);
        return Te ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.WinPhoneView = function(e) {
        var i = e.renderWithFragment,
          n = e.children,
          r = E(e, ["renderWithFragment", "children"]);
        return Be ? i ? o.createElement(t.Fragment, null, n) : o.createElement("div", r, n) : null
      }, i.browserName = Ke, i.browserVersion = Xe, i.deviceDetect = function(e) {
        var i = e ? f(e) : p,
          n = i.device,
          r = i.browser,
          t = i.engine,
          o = i.os,
          a = i.ua,
          s = function(e) {
            switch (e) {
              case P:
                return {
                  isMobile: !0
                };
              case A:
                return {
                  isTablet: !0
                };
              case _:
                return {
                  isSmartTV: !0
                };
              case T:
                return {
                  isConsole: !0
                };
              case M:
                return {
                  isWearable: !0
                };
              case V:
                return {
                  isBrowser: !0
                };
              case I:
                return {
                  isEmbedded: !0
                };
              default:
                return N
            }
          }(n.type),
          u = s.isBrowser,
          d = s.isMobile,
          l = s.isTablet,
          c = s.isSmartTV,
          b = s.isConsole,
          w = s.isWearable,
          m = s.isEmbedded;
        return u ? function(e, i, n, r, t) {
          return {
            isBrowser: e,
            browserMajorVersion: F(i.major),
            browserFullVersion: F(i.version),
            browserName: F(i.name),
            engineName: F(n.name),
            engineVersion: F(n.version),
            osName: F(r.name),
            osVersion: F(r.version),
            userAgent: F(t)
          }
        }(u, r, t, o, a) : c ? function(e, i, n, r) {
          return {
            isSmartTV: e,
            engineName: F(i.name),
            engineVersion: F(i.version),
            osName: F(n.name),
            osVersion: F(n.version),
            userAgent: F(r)
          }
        }(c, t, o, a) : b ? function(e, i, n, r) {
          return {
            isConsole: e,
            engineName: F(i.name),
            engineVersion: F(i.version),
            osName: F(n.name),
            osVersion: F(n.version),
            userAgent: F(r)
          }
        }(b, t, o, a) : d || l ? function(e, i, n, r) {
          return function(e) {
            for (var i = 1; i < arguments.length; i++) {
              var n = null != arguments[i] ? arguments[i] : {};
              i % 2 ? g(Object(n), !0).forEach((function(i) {
                y(e, i, n[i])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(i) {
                Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
              }))
            }
            return e
          }({}, e, {
            vendor: F(i.vendor),
            model: F(i.model),
            os: F(n.name),
            osVersion: F(n.version),
            ua: F(r)
          })
        }(s, n, o, a) : w ? function(e, i, n, r) {
          return {
            isWearable: e,
            engineName: F(i.name),
            engineVersion: F(i.version),
            osName: F(n.name),
            osVersion: F(n.version),
            userAgent: F(r)
          }
        }(w, t, o, a) : m ? function(e, i, n, r, t) {
          return {
            isEmbedded: e,
            vendor: F(i.vendor),
            model: F(i.model),
            engineName: F(n.name),
            engineVersion: F(n.version),
            osName: F(r.name),
            osVersion: F(r.version),
            userAgent: F(t)
          }
        }(m, n, t, o, a) : void 0
      }, i.deviceType = oi, i.engineName = ei, i.engineVersion = ii, i.fullBrowserVersion = Ze, i.getSelectorsByUserAgent = function(e) {
        if (e && "string" == typeof e) {
          var i = f(e);
          return Pe({
            device: i.device,
            browser: i.browser,
            os: i.os,
            engine: i.engine,
            ua: i.ua
          })
        }
        console.error("No valid user agent string was provided")
      }, i.getUA = ni, i.isAndroid = Le, i.isBrowser = Fe, i.isChrome = qe, i.isChromium = Ve, i.isConsole = _e, i.isDesktop = Ue, i.isEdge = ri, i.isEdgeChromium = ci, i.isElectron = li, i.isEmbedded = Me, i.isFirefox = De, i.isIE = Ge, i.isIOS = ze, i.isIOS13 = ai, i.isIPad13 = si, i.isIPhone13 = ui, i.isIPod13 = di, i.isLegacyEdge = bi, i.isMIUI = fi, i.isMacOs = mi, i.isMobile = je, i.isMobileOnly = We, i.isMobileSafari = Ie, i.isOpera = He, i.isSafari = Re, i.isSamsungBrowser = pi, i.isSmartTV = Ae, i.isTablet = Ne, i.isWearable = Te, i.isWinPhone = Be, i.isWindows = wi, i.isYandex = ti, i.mobileModel = Je, i.mobileVendor = Qe, i.osName = $e, i.osVersion = Ye, i.parseUserAgent = f, i.setUserAgent = function(e) {
        return m(e)
      }, i.useDeviceData = gi, i.useDeviceSelectors = function(e) {
        var i = gi(e || window.navigator.userAgent);
        return [Pe(i), i]
      }, i.useMobileOrientation = function() {
        var e, i, n = (e = t.useState((function() {
            var e = window.innerWidth > window.innerHeight ? 90 : 0;
            return {
              isPortrait: 0 === e,
              isLandscape: 90 === e,
              orientation: 0 === e ? "portrait" : "landscape"
            }
          })), i = 2, function(e) {
            if (Array.isArray(e)) return e
          }(e) || function(e, i) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, t, o = [],
                a = !0,
                s = !1;
              try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !i || o.length !== i); a = !0);
              } catch (e) {
                s = !0, t = e
              } finally {
                try {
                  a || null == n.return || n.return()
                } finally {
                  if (s) throw t
                }
              }
              return o
            }
          }(e, i) || function(e, i) {
            if (e) {
              if ("string" == typeof e) return C(e, i);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(e, i) : void 0
            }
          }(e, i) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()),
          r = n[0],
          o = n[1],
          a = t.useCallback((function() {
            var e = window.innerWidth > window.innerHeight ? 90 : 0,
              i = {
                isPortrait: 0 === e,
                isLandscape: 90 === e,
                orientation: 0 === e ? "portrait" : "landscape"
              };
            r.orientation !== i.orientation && o(i)
          }), [r.orientation]);
        return t.useEffect((function() {
          return void 0 !== ("undefined" == typeof window ? "undefined" : h(window)) && je && (a(), window.addEventListener("load", a, !1), window.addEventListener("resize", a, !1)),
            function() {
              window.removeEventListener("resize", a, !1), window.removeEventListener("load", a, !1)
            }
        }), [a]), r
      }, i.withOrientationChange = function(e) {
        return function(i) {
          function n(e) {
            var i;
            return function(e, i) {
              if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (i = function(e, i) {
              if (i && ("object" == typeof i || "function" == typeof i)) return i;
              if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
              return S(e)
            }(this, x(n).call(this, e))).isEventListenerAdded = !1, i.handleOrientationChange = i.handleOrientationChange.bind(S(i)), i.onOrientationChange = i.onOrientationChange.bind(S(i)), i.onPageLoad = i.onPageLoad.bind(S(i)), i.state = {
              isLandscape: !1,
              isPortrait: !1
            }, i
          }
          var r, t;
          return function(e, i) {
            if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(i && i.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), i && O(e, i)
          }(n, i), r = n, (t = [{
            key: "handleOrientationChange",
            value: function() {
              this.isEventListenerAdded || (this.isEventListenerAdded = !0);
              var e = window.innerWidth > window.innerHeight ? 90 : 0;
              this.setState({
                isPortrait: 0 === e,
                isLandscape: 90 === e
              })
            }
          }, {
            key: "onOrientationChange",
            value: function() {
              this.handleOrientationChange()
            }
          }, {
            key: "onPageLoad",
            value: function() {
              this.handleOrientationChange()
            }
          }, {
            key: "componentDidMount",
            value: function() {
              void 0 !== ("undefined" == typeof window ? "undefined" : h(window)) && je && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(), window.addEventListener("load", this.onPageLoad, !1)), window.addEventListener("resize", this.onOrientationChange, !1))
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              window.removeEventListener("resize", this.onOrientationChange, !1)
            }
          }, {
            key: "render",
            value: function() {
              return o.createElement(e, k({}, this.props, {
                isLandscape: this.state.isLandscape,
                isPortrait: this.state.isPortrait
              }))
            }
          }]) && v(r.prototype, t), n
        }(o.Component)
      }
    }
  }
]);