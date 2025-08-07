try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "bdab203c-1889-464b-97a9-017ef2be25fc", t._sentryDebugIdIdentifier = "sentry-dbid-bdab203c-1889-464b-97a9-017ef2be25fc")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3996], {
    53996: (t, e, s) => {
      s.r(e), s.d(e, {
        default: () => xe
      });
      var i = s(62229),
        r = s.n(i),
        a = Object.create,
        n = Object.getPrototypeOf,
        o = Object.defineProperty,
        h = Object.getOwnPropertyNames,
        p = Object.prototype.hasOwnProperty,
        c = (t, e) => () => (e || t((e = {
          exports: {}
        }).exports, e), e.exports),
        l = c(((t, e) => {
          e.exports = {
            quot: '"',
            amp: "&",
            apos: "'",
            lt: "<",
            gt: ">",
            nbsp: " ",
            iexcl: "¡",
            cent: "¢",
            pound: "£",
            curren: "¤",
            yen: "¥",
            brvbar: "¦",
            sect: "§",
            uml: "¨",
            copy: "©",
            ordf: "ª",
            laquo: "«",
            not: "¬",
            shy: "­",
            reg: "®",
            macr: "¯",
            deg: "°",
            plusmn: "±",
            sup2: "²",
            sup3: "³",
            acute: "´",
            micro: "µ",
            para: "¶",
            middot: "·",
            cedil: "¸",
            sup1: "¹",
            ordm: "º",
            raquo: "»",
            frac14: "¼",
            frac12: "½",
            frac34: "¾",
            iquest: "¿",
            Agrave: "À",
            Aacute: "Á",
            Acirc: "Â",
            Atilde: "Ã",
            Auml: "Ä",
            Aring: "Å",
            AElig: "Æ",
            Ccedil: "Ç",
            Egrave: "È",
            Eacute: "É",
            Ecirc: "Ê",
            Euml: "Ë",
            Igrave: "Ì",
            Iacute: "Í",
            Icirc: "Î",
            Iuml: "Ï",
            ETH: "Ð",
            Ntilde: "Ñ",
            Ograve: "Ò",
            Oacute: "Ó",
            Ocirc: "Ô",
            Otilde: "Õ",
            Ouml: "Ö",
            times: "×",
            Oslash: "Ø",
            Ugrave: "Ù",
            Uacute: "Ú",
            Ucirc: "Û",
            Uuml: "Ü",
            Yacute: "Ý",
            THORN: "Þ",
            szlig: "ß",
            agrave: "à",
            aacute: "á",
            acirc: "â",
            atilde: "ã",
            auml: "ä",
            aring: "å",
            aelig: "æ",
            ccedil: "ç",
            egrave: "è",
            eacute: "é",
            ecirc: "ê",
            euml: "ë",
            igrave: "ì",
            iacute: "í",
            icirc: "î",
            iuml: "ï",
            eth: "ð",
            ntilde: "ñ",
            ograve: "ò",
            oacute: "ó",
            ocirc: "ô",
            otilde: "õ",
            ouml: "ö",
            divide: "÷",
            oslash: "ø",
            ugrave: "ù",
            uacute: "ú",
            ucirc: "û",
            uuml: "ü",
            yacute: "ý",
            thorn: "þ",
            yuml: "ÿ",
            OElig: "Œ",
            oelig: "œ",
            Scaron: "Š",
            scaron: "š",
            Yuml: "Ÿ",
            fnof: "ƒ",
            circ: "ˆ",
            tilde: "˜",
            Alpha: "Α",
            Beta: "Β",
            Gamma: "Γ",
            Delta: "Δ",
            Epsilon: "Ε",
            Zeta: "Ζ",
            Eta: "Η",
            Theta: "Θ",
            Iota: "Ι",
            Kappa: "Κ",
            Lambda: "Λ",
            Mu: "Μ",
            Nu: "Ν",
            Xi: "Ξ",
            Omicron: "Ο",
            Pi: "Π",
            Rho: "Ρ",
            Sigma: "Σ",
            Tau: "Τ",
            Upsilon: "Υ",
            Phi: "Φ",
            Chi: "Χ",
            Psi: "Ψ",
            Omega: "Ω",
            alpha: "α",
            beta: "β",
            gamma: "γ",
            delta: "δ",
            epsilon: "ε",
            zeta: "ζ",
            eta: "η",
            theta: "θ",
            iota: "ι",
            kappa: "κ",
            lambda: "λ",
            mu: "μ",
            nu: "ν",
            xi: "ξ",
            omicron: "ο",
            pi: "π",
            rho: "ρ",
            sigmaf: "ς",
            sigma: "σ",
            tau: "τ",
            upsilon: "υ",
            phi: "φ",
            chi: "χ",
            psi: "ψ",
            omega: "ω",
            thetasym: "ϑ",
            upsih: "ϒ",
            piv: "ϖ",
            ensp: " ",
            emsp: " ",
            thinsp: " ",
            zwnj: "‌",
            zwj: "‍",
            lrm: "‎",
            rlm: "‏",
            ndash: "–",
            mdash: "—",
            lsquo: "‘",
            rsquo: "’",
            sbquo: "‚",
            ldquo: "“",
            rdquo: "”",
            bdquo: "„",
            dagger: "†",
            Dagger: "‡",
            bull: "•",
            hellip: "…",
            permil: "‰",
            prime: "′",
            Prime: "″",
            lsaquo: "‹",
            rsaquo: "›",
            oline: "‾",
            frasl: "⁄",
            euro: "€",
            image: "ℑ",
            weierp: "℘",
            real: "ℜ",
            trade: "™",
            alefsym: "ℵ",
            larr: "←",
            uarr: "↑",
            rarr: "→",
            darr: "↓",
            harr: "↔",
            crarr: "↵",
            lArr: "⇐",
            uArr: "⇑",
            rArr: "⇒",
            dArr: "⇓",
            hArr: "⇔",
            forall: "∀",
            part: "∂",
            exist: "∃",
            empty: "∅",
            nabla: "∇",
            isin: "∈",
            notin: "∉",
            ni: "∋",
            prod: "∏",
            sum: "∑",
            minus: "−",
            lowast: "∗",
            radic: "√",
            prop: "∝",
            infin: "∞",
            ang: "∠",
            and: "∧",
            or: "∨",
            cap: "∩",
            cup: "∪",
            int: "∫",
            there4: "∴",
            sim: "∼",
            cong: "≅",
            asymp: "≈",
            ne: "≠",
            equiv: "≡",
            le: "≤",
            ge: "≥",
            sub: "⊂",
            sup: "⊃",
            nsub: "⊄",
            sube: "⊆",
            supe: "⊇",
            oplus: "⊕",
            otimes: "⊗",
            perp: "⊥",
            sdot: "⋅",
            lceil: "⌈",
            rceil: "⌉",
            lfloor: "⌊",
            rfloor: "⌋",
            lang: "〈",
            rang: "〉",
            loz: "◊",
            spades: "♠",
            clubs: "♣",
            hearts: "♥",
            diams: "♦"
          }
        })),
        u = c(((t, e) => {
          ! function(i, r) {
            "object" == typeof t && void 0 !== e ? r(t) : "function" == typeof define && s.amdO ? define(["exports"], r) : r((i = "undefined" != typeof globalThis ? globalThis : i || self).acorn = {})
          }(t, (function(t) {
            var e = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239],
              s = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191],
              i = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
              r = {
                3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                5: "class enum extends super const export import",
                6: "enum",
                strict: "implements interface let package private protected public static yield",
                strictBind: "eval arguments"
              },
              a = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
              n = {
                5: a,
                "5module": a + " export import",
                6: a + " const class extends export import super"
              },
              o = /^in(stanceof)?$/,
              h = new RegExp("[" + i + "]"),
              p = new RegExp("[" + i + "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･]");

            function c(t, e) {
              for (var s = 65536, i = 0; i < e.length; i += 2) {
                if ((s += e[i]) > t) return !1;
                if ((s += e[i + 1]) >= t) return !0
              }
              return !1
            }

            function l(t, e) {
              return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && h.test(String.fromCharCode(t)) : !1 !== e && c(t, s)))
            }

            function u(t, i) {
              return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && p.test(String.fromCharCode(t)) : !1 !== i && (c(t, s) || c(t, e)))))
            }
            var d = function(t, e) {
              void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop || null, this.updateContext = null
            };

            function f(t, e) {
              return new d(t, {
                beforeExpr: !0,
                binop: e
              })
            }
            var m = {
                beforeExpr: !0
              },
              x = {
                startsExpr: !0
              },
              g = {};

            function v(t, e) {
              return void 0 === e && (e = {}), e.keyword = t, g[t] = new d(t, e)
            }
            var y = {
                num: new d("num", x),
                regexp: new d("regexp", x),
                string: new d("string", x),
                name: new d("name", x),
                privateId: new d("privateId", x),
                eof: new d("eof"),
                bracketL: new d("[", {
                  beforeExpr: !0,
                  startsExpr: !0
                }),
                bracketR: new d("]"),
                braceL: new d("{", {
                  beforeExpr: !0,
                  startsExpr: !0
                }),
                braceR: new d("}"),
                parenL: new d("(", {
                  beforeExpr: !0,
                  startsExpr: !0
                }),
                parenR: new d(")"),
                comma: new d(",", m),
                semi: new d(";", m),
                colon: new d(":", m),
                dot: new d("."),
                question: new d("?", m),
                questionDot: new d("?."),
                arrow: new d("=>", m),
                template: new d("template"),
                invalidTemplate: new d("invalidTemplate"),
                ellipsis: new d("...", m),
                backQuote: new d("`", x),
                dollarBraceL: new d("${", {
                  beforeExpr: !0,
                  startsExpr: !0
                }),
                eq: new d("=", {
                  beforeExpr: !0,
                  isAssign: !0
                }),
                assign: new d("_=", {
                  beforeExpr: !0,
                  isAssign: !0
                }),
                incDec: new d("++/--", {
                  prefix: !0,
                  postfix: !0,
                  startsExpr: !0
                }),
                prefix: new d("!/~", {
                  beforeExpr: !0,
                  prefix: !0,
                  startsExpr: !0
                }),
                logicalOR: f("||", 1),
                logicalAND: f("&&", 2),
                bitwiseOR: f("|", 3),
                bitwiseXOR: f("^", 4),
                bitwiseAND: f("&", 5),
                equality: f("==/!=/===/!==", 6),
                relational: f("</>/<=/>=", 7),
                bitShift: f("<</>>/>>>", 8),
                plusMin: new d("+/-", {
                  beforeExpr: !0,
                  binop: 9,
                  prefix: !0,
                  startsExpr: !0
                }),
                modulo: f("%", 10),
                star: f("*", 10),
                slash: f("/", 10),
                starstar: new d("**", {
                  beforeExpr: !0
                }),
                coalesce: f("??", 1),
                _break: v("break"),
                _case: v("case", m),
                _catch: v("catch"),
                _continue: v("continue"),
                _debugger: v("debugger"),
                _default: v("default", m),
                _do: v("do", {
                  isLoop: !0,
                  beforeExpr: !0
                }),
                _else: v("else", m),
                _finally: v("finally"),
                _for: v("for", {
                  isLoop: !0
                }),
                _function: v("function", x),
                _if: v("if"),
                _return: v("return", m),
                _switch: v("switch"),
                _throw: v("throw", m),
                _try: v("try"),
                _var: v("var"),
                _const: v("const"),
                _while: v("while", {
                  isLoop: !0
                }),
                _with: v("with"),
                _new: v("new", {
                  beforeExpr: !0,
                  startsExpr: !0
                }),
                _this: v("this", x),
                _super: v("super", x),
                _class: v("class", x),
                _extends: v("extends", m),
                _export: v("export"),
                _import: v("import", x),
                _null: v("null", x),
                _true: v("true", x),
                _false: v("false", x),
                _in: v("in", {
                  beforeExpr: !0,
                  binop: 7
                }),
                _instanceof: v("instanceof", {
                  beforeExpr: !0,
                  binop: 7
                }),
                _typeof: v("typeof", {
                  beforeExpr: !0,
                  prefix: !0,
                  startsExpr: !0
                }),
                _void: v("void", {
                  beforeExpr: !0,
                  prefix: !0,
                  startsExpr: !0
                }),
                _delete: v("delete", {
                  beforeExpr: !0,
                  prefix: !0,
                  startsExpr: !0
                })
              },
              b = /\r\n?|\n|\u2028|\u2029/,
              k = new RegExp(b.source, "g");

            function _(t) {
              return 10 === t || 13 === t || 8232 === t || 8233 === t
            }

            function S(t, e, s) {
              void 0 === s && (s = t.length);
              for (var i = e; i < s; i++) {
                var r = t.charCodeAt(i);
                if (_(r)) return i < s - 1 && 13 === r && 10 === t.charCodeAt(i + 1) ? i + 2 : i + 1
              }
              return -1
            }
            var C = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
              E = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
              w = Object.prototype,
              A = w.hasOwnProperty,
              I = w.toString,
              P = Object.hasOwn || function(t, e) {
                return A.call(t, e)
              },
              N = Array.isArray || function(t) {
                return "[object Array]" === I.call(t)
              },
              T = Object.create(null);

            function V(t) {
              return T[t] || (T[t] = new RegExp("^(?:" + t.replace(/ /g, "|") + ")$"))
            }

            function L(t) {
              return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
            }
            var R = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
              O = function(t, e) {
                this.line = t, this.column = e
              };
            O.prototype.offset = function(t) {
              return new O(this.line, this.column + t)
            };
            var D = function(t, e, s) {
              this.start = e, this.end = s, null !== t.sourceFile && (this.source = t.sourceFile)
            };

            function M(t, e) {
              for (var s = 1, i = 0;;) {
                var r = S(t, i, e);
                if (r < 0) return new O(s, e - i);
                ++s, i = r
              }
            }
            var B = {
                ecmaVersion: null,
                sourceType: "script",
                onInsertedSemicolon: null,
                onTrailingComma: null,
                allowReserved: null,
                allowReturnOutsideFunction: !1,
                allowImportExportEverywhere: !1,
                allowAwaitOutsideFunction: null,
                allowSuperOutsideMethod: null,
                allowHashBang: !1,
                checkPrivateFields: !0,
                locations: !1,
                onToken: null,
                onComment: null,
                ranges: !1,
                program: null,
                sourceFile: null,
                directSourceFile: null,
                preserveParens: !1
              },
              F = !1;

            function j(t, e) {
              return 2 | (t ? 4 : 0) | (e ? 8 : 0)
            }
            var U = function(t, e, s) {
                this.options = t = function(t) {
                  var e = {};
                  for (var s in B) e[s] = t && P(t, s) ? t[s] : B[s];
                  if ("latest" === e.ecmaVersion ? e.ecmaVersion = 1e8 : null == e.ecmaVersion ? (!F && "object" == typeof console && console.warn && (F = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5), t && null != t.allowHashBang || (e.allowHashBang = e.ecmaVersion >= 14), N(e.onToken)) {
                    var i = e.onToken;
                    e.onToken = function(t) {
                      return i.push(t)
                    }
                  }
                  return N(e.onComment) && (e.onComment = function(t, e) {
                    return function(s, i, r, a, n, o) {
                      var h = {
                        type: s ? "Block" : "Line",
                        value: i,
                        start: r,
                        end: a
                      };
                      t.locations && (h.loc = new D(this, n, o)), t.ranges && (h.range = [r, a]), e.push(h)
                    }
                  }(e, e.onComment)), e
                }(t), this.sourceFile = t.sourceFile, this.keywords = V(n[t.ecmaVersion >= 6 ? 6 : "module" === t.sourceType ? "5module" : 5]);
                var i = "";
                !0 !== t.allowReserved && (i = r[t.ecmaVersion >= 6 ? 6 : 5 === t.ecmaVersion ? 5 : 3], "module" === t.sourceType && (i += " await")), this.reservedWords = V(i);
                var a = (i ? i + " " : "") + r.strict;
                this.reservedWordsStrict = V(a), this.reservedWordsStrictBind = V(a + " " + r.strictBind), this.input = String(e), this.containsEsc = !1, s ? (this.pos = s, this.lineStart = this.input.lastIndexOf("\n", s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(b).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = y.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === t.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null, this.privateNameStack = []
              },
              q = {
                inFunction: {
                  configurable: !0
                },
                inGenerator: {
                  configurable: !0
                },
                inAsync: {
                  configurable: !0
                },
                canAwait: {
                  configurable: !0
                },
                allowSuper: {
                  configurable: !0
                },
                allowDirectSuper: {
                  configurable: !0
                },
                treatFunctionsAsVar: {
                  configurable: !0
                },
                allowNewDotTarget: {
                  configurable: !0
                },
                inClassStaticBlock: {
                  configurable: !0
                }
              };
            U.prototype.parse = function() {
              var t = this.options.program || this.startNode();
              return this.nextToken(), this.parseTopLevel(t)
            }, q.inFunction.get = function() {
              return (2 & this.currentVarScope().flags) > 0
            }, q.inGenerator.get = function() {
              return (8 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit
            }, q.inAsync.get = function() {
              return (4 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit
            }, q.canAwait.get = function() {
              for (var t = this.scopeStack.length - 1; t >= 0; t--) {
                var e = this.scopeStack[t];
                if (e.inClassFieldInit || 256 & e.flags) return !1;
                if (2 & e.flags) return (4 & e.flags) > 0
              }
              return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction
            }, q.allowSuper.get = function() {
              var t = this.currentThisScope(),
                e = t.flags,
                s = t.inClassFieldInit;
              return (64 & e) > 0 || s || this.options.allowSuperOutsideMethod
            }, q.allowDirectSuper.get = function() {
              return (128 & this.currentThisScope().flags) > 0
            }, q.treatFunctionsAsVar.get = function() {
              return this.treatFunctionsAsVarInScope(this.currentScope())
            }, q.allowNewDotTarget.get = function() {
              var t = this.currentThisScope(),
                e = t.flags,
                s = t.inClassFieldInit;
              return (258 & e) > 0 || s
            }, q.inClassStaticBlock.get = function() {
              return (256 & this.currentVarScope().flags) > 0
            }, U.extend = function() {
              for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
              for (var s = this, i = 0; i < t.length; i++) s = t[i](s);
              return s
            }, U.parse = function(t, e) {
              return new this(e, t).parse()
            }, U.parseExpressionAt = function(t, e, s) {
              var i = new this(s, t, e);
              return i.nextToken(), i.parseExpression()
            }, U.tokenizer = function(t, e) {
              return new this(e, t)
            }, Object.defineProperties(U.prototype, q);
            var G = U.prototype,
              H = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
            G.strictDirective = function(t) {
              if (this.options.ecmaVersion < 5) return !1;
              for (;;) {
                E.lastIndex = t, t += E.exec(this.input)[0].length;
                var e = H.exec(this.input.slice(t));
                if (!e) return !1;
                if ("use strict" === (e[1] || e[2])) {
                  E.lastIndex = t + e[0].length;
                  var s = E.exec(this.input),
                    i = s.index + s[0].length,
                    r = this.input.charAt(i);
                  return ";" === r || "}" === r || b.test(s[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || "!" === r && "=" === this.input.charAt(i + 1))
                }
                t += e[0].length, E.lastIndex = t, t += E.exec(this.input)[0].length, ";" === this.input[t] && t++
              }
            }, G.eat = function(t) {
              return this.type === t && (this.next(), !0)
            }, G.isContextual = function(t) {
              return this.type === y.name && this.value === t && !this.containsEsc
            }, G.eatContextual = function(t) {
              return !!this.isContextual(t) && (this.next(), !0)
            }, G.expectContextual = function(t) {
              this.eatContextual(t) || this.unexpected()
            }, G.canInsertSemicolon = function() {
              return this.type === y.eof || this.type === y.braceR || b.test(this.input.slice(this.lastTokEnd, this.start))
            }, G.insertSemicolon = function() {
              if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
            }, G.semicolon = function() {
              this.eat(y.semi) || this.insertSemicolon() || this.unexpected()
            }, G.afterTrailingComma = function(t, e) {
              if (this.type === t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0
            }, G.expect = function(t) {
              this.eat(t) || this.unexpected()
            }, G.unexpected = function(t) {
              this.raise(null != t ? t : this.start, "Unexpected token")
            };
            var z = function() {
              this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
            };
            G.checkPatternErrors = function(t, e) {
              if (t) {
                t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
                var s = e ? t.parenthesizedAssign : t.parenthesizedBind;
                s > -1 && this.raiseRecoverable(s, e ? "Assigning to rvalue" : "Parenthesized pattern")
              }
            }, G.checkExpressionErrors = function(t, e) {
              if (!t) return !1;
              var s = t.shorthandAssign,
                i = t.doubleProto;
              if (!e) return s >= 0 || i >= 0;
              s >= 0 && this.raise(s, "Shorthand property assignments are valid only in destructuring patterns"), i >= 0 && this.raiseRecoverable(i, "Redefinition of __proto__ property")
            }, G.checkYieldAwaitInDefaultParams = function() {
              this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
            }, G.isSimpleAssignTarget = function(t) {
              return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type
            };
            var W = U.prototype;
            W.parseTopLevel = function(t) {
              var e = Object.create(null);
              for (t.body || (t.body = []); this.type !== y.eof;) {
                var s = this.parseStatement(null, !0, e);
                t.body.push(s)
              }
              if (this.inModule)
                for (var i = 0, r = Object.keys(this.undefinedExports); i < r.length; i += 1) {
                  var a = r[i];
                  this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined")
                }
              return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program")
            };
            var X = {
                kind: "loop"
              },
              K = {
                kind: "switch"
              };
            W.isLet = function(t) {
              if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
              E.lastIndex = this.pos;
              var e = E.exec(this.input),
                s = this.pos + e[0].length,
                i = this.input.charCodeAt(s);
              if (91 === i || 92 === i) return !0;
              if (t) return !1;
              if (123 === i || i > 55295 && i < 56320) return !0;
              if (l(i, !0)) {
                for (var r = s + 1; u(i = this.input.charCodeAt(r), !0);) ++r;
                if (92 === i || i > 55295 && i < 56320) return !0;
                var a = this.input.slice(s, r);
                if (!o.test(a)) return !0
              }
              return !1
            }, W.isAsyncFunction = function() {
              if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
              E.lastIndex = this.pos;
              var t, e = E.exec(this.input),
                s = this.pos + e[0].length;
              return !(b.test(this.input.slice(this.pos, s)) || "function" !== this.input.slice(s, s + 8) || s + 8 !== this.input.length && (u(t = this.input.charCodeAt(s + 8)) || t > 55295 && t < 56320))
            }, W.parseStatement = function(t, e, s) {
              var i, r = this.type,
                a = this.startNode();
              switch (this.isLet(t) && (r = y._var, i = "let"), r) {
                case y._break:
                case y._continue:
                  return this.parseBreakContinueStatement(a, r.keyword);
                case y._debugger:
                  return this.parseDebuggerStatement(a);
                case y._do:
                  return this.parseDoStatement(a);
                case y._for:
                  return this.parseForStatement(a);
                case y._function:
                  return t && (this.strict || "if" !== t && "label" !== t) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(a, !1, !t);
                case y._class:
                  return t && this.unexpected(), this.parseClass(a, !0);
                case y._if:
                  return this.parseIfStatement(a);
                case y._return:
                  return this.parseReturnStatement(a);
                case y._switch:
                  return this.parseSwitchStatement(a);
                case y._throw:
                  return this.parseThrowStatement(a);
                case y._try:
                  return this.parseTryStatement(a);
                case y._const:
                case y._var:
                  return i = i || this.value, t && "var" !== i && this.unexpected(), this.parseVarStatement(a, i);
                case y._while:
                  return this.parseWhileStatement(a);
                case y._with:
                  return this.parseWithStatement(a);
                case y.braceL:
                  return this.parseBlock(!0, a);
                case y.semi:
                  return this.parseEmptyStatement(a);
                case y._export:
                case y._import:
                  if (this.options.ecmaVersion > 10 && r === y._import) {
                    E.lastIndex = this.pos;
                    var n = E.exec(this.input),
                      o = this.pos + n[0].length,
                      h = this.input.charCodeAt(o);
                    if (40 === h || 46 === h) return this.parseExpressionStatement(a, this.parseExpression())
                  }
                  return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === y._import ? this.parseImport(a) : this.parseExport(a, s);
                default:
                  if (this.isAsyncFunction()) return t && this.unexpected(), this.next(), this.parseFunctionStatement(a, !0, !t);
                  var p = this.value,
                    c = this.parseExpression();
                  return r === y.name && "Identifier" === c.type && this.eat(y.colon) ? this.parseLabeledStatement(a, p, c, t) : this.parseExpressionStatement(a, c)
              }
            }, W.parseBreakContinueStatement = function(t, e) {
              var s = "break" === e;
              this.next(), this.eat(y.semi) || this.insertSemicolon() ? t.label = null : this.type !== y.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
              for (var i = 0; i < this.labels.length; ++i) {
                var r = this.labels[i];
                if (null == t.label || r.name === t.label.name) {
                  if (null != r.kind && (s || "loop" === r.kind)) break;
                  if (t.label && s) break
                }
              }
              return i === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, s ? "BreakStatement" : "ContinueStatement")
            }, W.parseDebuggerStatement = function(t) {
              return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement")
            }, W.parseDoStatement = function(t) {
              return this.next(), this.labels.push(X), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(y._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(y.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement")
            }, W.parseForStatement = function(t) {
              this.next();
              var e = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
              if (this.labels.push(X), this.enterScope(0), this.expect(y.parenL), this.type === y.semi) return e > -1 && this.unexpected(e), this.parseFor(t, null);
              var s = this.isLet();
              if (this.type === y._var || this.type === y._const || s) {
                var i = this.startNode(),
                  r = s ? "let" : this.value;
                return this.next(), this.parseVar(i, !0, r), this.finishNode(i, "VariableDeclaration"), (this.type === y._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === i.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === y._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.parseForIn(t, i)) : (e > -1 && this.unexpected(e), this.parseFor(t, i))
              }
              var a = this.isContextual("let"),
                n = !1,
                o = this.containsEsc,
                h = new z,
                p = this.start,
                c = e > -1 ? this.parseExprSubscripts(h, "await") : this.parseExpression(!0, h);
              return this.type === y._in || (n = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (e > -1 ? (this.type === y._in && this.unexpected(e), t.await = !0) : n && this.options.ecmaVersion >= 8 && (c.start !== p || o || "Identifier" !== c.type || "async" !== c.name ? this.options.ecmaVersion >= 9 && (t.await = !1) : this.unexpected()), a && n && this.raise(c.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(c, !1, h), this.checkLValPattern(c), this.parseForIn(t, c)) : (this.checkExpressionErrors(h, !0), e > -1 && this.unexpected(e), this.parseFor(t, c))
            }, W.parseFunctionStatement = function(t, e, s) {
              return this.next(), this.parseFunction(t, J | (s ? 0 : $), !1, e)
            }, W.parseIfStatement = function(t) {
              return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(y._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement")
            }, W.parseReturnStatement = function(t) {
              return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(y.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement")
            }, W.parseSwitchStatement = function(t) {
              var e;
              this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(y.braceL), this.labels.push(K), this.enterScope(0);
              for (var s = !1; this.type !== y.braceR;)
                if (this.type === y._case || this.type === y._default) {
                  var i = this.type === y._case;
                  e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), i ? e.test = this.parseExpression() : (s && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), s = !0, e.test = null), this.expect(y.colon)
                } else e || this.unexpected(), e.consequent.push(this.parseStatement(null));
              return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement")
            }, W.parseThrowStatement = function(t) {
              return this.next(), b.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement")
            };
            var Q = [];
            W.parseCatchClauseParam = function() {
              var t = this.parseBindingAtom(),
                e = "Identifier" === t.type;
              return this.enterScope(e ? 32 : 0), this.checkLValPattern(t, e ? 4 : 2), this.expect(y.parenR), t
            }, W.parseTryStatement = function(t) {
              if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === y._catch) {
                var e = this.startNode();
                this.next(), this.eat(y.parenL) ? e.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0)), e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause")
              }
              return t.finalizer = this.eat(y._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement")
            }, W.parseVarStatement = function(t, e, s) {
              return this.next(), this.parseVar(t, !1, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration")
            }, W.parseWhileStatement = function(t) {
              return this.next(), t.test = this.parseParenExpression(), this.labels.push(X), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement")
            }, W.parseWithStatement = function(t) {
              return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement")
            }, W.parseEmptyStatement = function(t) {
              return this.next(), this.finishNode(t, "EmptyStatement")
            }, W.parseLabeledStatement = function(t, e, s, i) {
              for (var r = 0, a = this.labels; r < a.length; r += 1) a[r].name === e && this.raise(s.start, "Label '" + e + "' is already declared");
              for (var n = this.type.isLoop ? "loop" : this.type === y._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
                var h = this.labels[o];
                if (h.statementStart !== t.start) break;
                h.statementStart = this.start, h.kind = n
              }
              return this.labels.push({
                name: e,
                kind: n,
                statementStart: this.start
              }), t.body = this.parseStatement(i ? -1 === i.indexOf("label") ? i + "label" : i : "label"), this.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement")
            }, W.parseExpressionStatement = function(t, e) {
              return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement")
            }, W.parseBlock = function(t, e, s) {
              for (void 0 === t && (t = !0), void 0 === e && (e = this.startNode()), e.body = [], this.expect(y.braceL), t && this.enterScope(0); this.type !== y.braceR;) {
                var i = this.parseStatement(null);
                e.body.push(i)
              }
              return s && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement")
            }, W.parseFor = function(t, e) {
              return t.init = e, this.expect(y.semi), t.test = this.type === y.semi ? null : this.parseExpression(), this.expect(y.semi), t.update = this.type === y.parenR ? null : this.parseExpression(), this.expect(y.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement")
            }, W.parseForIn = function(t, e) {
              var s = this.type === y._in;
              return this.next(), "VariableDeclaration" === e.type && null != e.declarations[0].init && (!s || this.options.ecmaVersion < 8 || this.strict || "var" !== e.kind || "Identifier" !== e.declarations[0].id.type) && this.raise(e.start, (s ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), t.left = e, t.right = s ? this.parseExpression() : this.parseMaybeAssign(), this.expect(y.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, s ? "ForInStatement" : "ForOfStatement")
            }, W.parseVar = function(t, e, s, i) {
              for (t.declarations = [], t.kind = s;;) {
                var r = this.startNode();
                if (this.parseVarId(r, s), this.eat(y.eq) ? r.init = this.parseMaybeAssign(e) : i || "const" !== s || this.type === y._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? i || "Identifier" === r.id.type || e && (this.type === y._in || this.isContextual("of")) ? r.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(y.comma)) break
              }
              return t
            }, W.parseVarId = function(t, e) {
              t.id = this.parseBindingAtom(), this.checkLValPattern(t.id, "var" === e ? 1 : 2, !1)
            };
            var J = 1,
              $ = 2;

            function Y(t, e) {
              var s = e.key.name,
                i = t[s],
                r = "true";
              return "MethodDefinition" !== e.type || "get" !== e.kind && "set" !== e.kind || (r = (e.static ? "s" : "i") + e.kind), "iget" === i && "iset" === r || "iset" === i && "iget" === r || "sget" === i && "sset" === r || "sset" === i && "sget" === r ? (t[s] = "true", !1) : !!i || (t[s] = r, !1)
            }

            function Z(t, e) {
              var s = t.computed,
                i = t.key;
              return !s && ("Identifier" === i.type && i.name === e || "Literal" === i.type && i.value === e)
            }
            W.parseFunction = function(t, e, s, i, r) {
              this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !i) && (this.type === y.star && e & $ && this.unexpected(), t.generator = this.eat(y.star)), this.options.ecmaVersion >= 8 && (t.async = !!i), e & J && (t.id = 4 & e && this.type !== y.name ? null : this.parseIdent(), !t.id || e & $ || this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
              var a = this.yieldPos,
                n = this.awaitPos,
                o = this.awaitIdentPos;
              return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(j(t.async, t.generator)), e & J || (t.id = this.type === y.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, s, !1, r), this.yieldPos = a, this.awaitPos = n, this.awaitIdentPos = o, this.finishNode(t, e & J ? "FunctionDeclaration" : "FunctionExpression")
            }, W.parseFunctionParams = function(t) {
              this.expect(y.parenL), t.params = this.parseBindingList(y.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
            }, W.parseClass = function(t, e) {
              this.next();
              var s = this.strict;
              this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
              var i = this.enterClassBody(),
                r = this.startNode(),
                a = !1;
              for (r.body = [], this.expect(y.braceL); this.type !== y.braceR;) {
                var n = this.parseClassElement(null !== t.superClass);
                n && (r.body.push(n), "MethodDefinition" === n.type && "constructor" === n.kind ? (a && this.raiseRecoverable(n.start, "Duplicate constructor in the same class"), a = !0) : n.key && "PrivateIdentifier" === n.key.type && Y(i, n) && this.raiseRecoverable(n.key.start, "Identifier '#" + n.key.name + "' has already been declared"))
              }
              return this.strict = s, this.next(), t.body = this.finishNode(r, "ClassBody"), this.exitClassBody(), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
            }, W.parseClassElement = function(t) {
              if (this.eat(y.semi)) return null;
              var e = this.options.ecmaVersion,
                s = this.startNode(),
                i = "",
                r = !1,
                a = !1,
                n = "method",
                o = !1;
              if (this.eatContextual("static")) {
                if (e >= 13 && this.eat(y.braceL)) return this.parseClassStaticBlock(s), s;
                this.isClassElementNameStart() || this.type === y.star ? o = !0 : i = "static"
              }
              if (s.static = o, !i && e >= 8 && this.eatContextual("async") && (!this.isClassElementNameStart() && this.type !== y.star || this.canInsertSemicolon() ? i = "async" : a = !0), !i && (e >= 9 || !a) && this.eat(y.star) && (r = !0), !i && !a && !r) {
                var h = this.value;
                (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? n = h : i = h)
              }
              if (i ? (s.computed = !1, s.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), s.key.name = i, this.finishNode(s.key, "Identifier")) : this.parseClassElementName(s), e < 13 || this.type === y.parenL || "method" !== n || r || a) {
                var p = !s.static && Z(s, "constructor"),
                  c = p && t;
                p && "method" !== n && this.raise(s.key.start, "Constructor can't have get/set modifier"), s.kind = p ? "constructor" : n, this.parseClassMethod(s, r, a, c)
              } else this.parseClassField(s);
              return s
            }, W.isClassElementNameStart = function() {
              return this.type === y.name || this.type === y.privateId || this.type === y.num || this.type === y.string || this.type === y.bracketL || this.type.keyword
            }, W.parseClassElementName = function(t) {
              this.type === y.privateId ? ("constructor" === this.value && this.raise(this.start, "Classes can't have an element named '#constructor'"), t.computed = !1, t.key = this.parsePrivateIdent()) : this.parsePropertyName(t)
            }, W.parseClassMethod = function(t, e, s, i) {
              var r = t.key;
              "constructor" === t.kind ? (e && this.raise(r.start, "Constructor can't be a generator"), s && this.raise(r.start, "Constructor can't be an async method")) : t.static && Z(t, "prototype") && this.raise(r.start, "Classes may not have a static property named prototype");
              var a = t.value = this.parseMethod(e, s, i);
              return "get" === t.kind && 0 !== a.params.length && this.raiseRecoverable(a.start, "getter should have no params"), "set" === t.kind && 1 !== a.params.length && this.raiseRecoverable(a.start, "setter should have exactly one param"), "set" === t.kind && "RestElement" === a.params[0].type && this.raiseRecoverable(a.params[0].start, "Setter cannot use rest params"), this.finishNode(t, "MethodDefinition")
            }, W.parseClassField = function(t) {
              if (Z(t, "constructor") ? this.raise(t.key.start, "Classes can't have a field named 'constructor'") : t.static && Z(t, "prototype") && this.raise(t.key.start, "Classes can't have a static field named 'prototype'"), this.eat(y.eq)) {
                var e = this.currentThisScope(),
                  s = e.inClassFieldInit;
                e.inClassFieldInit = !0, t.value = this.parseMaybeAssign(), e.inClassFieldInit = s
              } else t.value = null;
              return this.semicolon(), this.finishNode(t, "PropertyDefinition")
            }, W.parseClassStaticBlock = function(t) {
              t.body = [];
              var e = this.labels;
              for (this.labels = [], this.enterScope(320); this.type !== y.braceR;) {
                var s = this.parseStatement(null);
                t.body.push(s)
              }
              return this.next(), this.exitScope(), this.labels = e, this.finishNode(t, "StaticBlock")
            }, W.parseClassId = function(t, e) {
              this.type === y.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, 2, !1)) : (!0 === e && this.unexpected(), t.id = null)
            }, W.parseClassSuper = function(t) {
              t.superClass = this.eat(y._extends) ? this.parseExprSubscripts(null, !1) : null
            }, W.enterClassBody = function() {
              var t = {
                declared: Object.create(null),
                used: []
              };
              return this.privateNameStack.push(t), t.declared
            }, W.exitClassBody = function() {
              var t = this.privateNameStack.pop(),
                e = t.declared,
                s = t.used;
              if (this.options.checkPrivateFields)
                for (var i = this.privateNameStack.length, r = 0 === i ? null : this.privateNameStack[i - 1], a = 0; a < s.length; ++a) {
                  var n = s[a];
                  P(e, n.name) || (r ? r.used.push(n) : this.raiseRecoverable(n.start, "Private field '#" + n.name + "' must be declared in an enclosing class"))
                }
            }, W.parseExportAllDeclaration = function(t, e) {
              return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseModuleExportName(), this.checkExport(e, t.exported, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== y.string && this.unexpected(), t.source = this.parseExprAtom(), this.semicolon(), this.finishNode(t, "ExportAllDeclaration")
            }, W.parseExport = function(t, e) {
              if (this.next(), this.eat(y.star)) return this.parseExportAllDeclaration(t, e);
              if (this.eat(y._default)) return this.checkExport(e, "default", this.lastTokStart), t.declaration = this.parseExportDefaultDeclaration(), this.finishNode(t, "ExportDefaultDeclaration");
              if (this.shouldParseExportStatement()) t.declaration = this.parseExportDeclaration(t), "VariableDeclaration" === t.declaration.type ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id, t.declaration.id.start), t.specifiers = [], t.source = null;
              else {
                if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from")) this.type !== y.string && this.unexpected(), t.source = this.parseExprAtom();
                else {
                  for (var s = 0, i = t.specifiers; s < i.length; s += 1) {
                    var r = i[s];
                    this.checkUnreserved(r.local), this.checkLocalExport(r.local), "Literal" === r.local.type && this.raise(r.local.start, "A string literal cannot be used as an exported binding without `from`.")
                  }
                  t.source = null
                }
                this.semicolon()
              }
              return this.finishNode(t, "ExportNamedDeclaration")
            }, W.parseExportDeclaration = function(t) {
              return this.parseStatement(null)
            }, W.parseExportDefaultDeclaration = function() {
              var t;
              if (this.type === y._function || (t = this.isAsyncFunction())) {
                var e = this.startNode();
                return this.next(), t && this.next(), this.parseFunction(e, 4 | J, !1, t)
              }
              if (this.type === y._class) {
                var s = this.startNode();
                return this.parseClass(s, "nullableID")
              }
              var i = this.parseMaybeAssign();
              return this.semicolon(), i
            }, W.checkExport = function(t, e, s) {
              t && ("string" != typeof e && (e = "Identifier" === e.type ? e.name : e.value), P(t, e) && this.raiseRecoverable(s, "Duplicate export '" + e + "'"), t[e] = !0)
            }, W.checkPatternExport = function(t, e) {
              var s = e.type;
              if ("Identifier" === s) this.checkExport(t, e, e.start);
              else if ("ObjectPattern" === s)
                for (var i = 0, r = e.properties; i < r.length; i += 1) {
                  var a = r[i];
                  this.checkPatternExport(t, a)
                } else if ("ArrayPattern" === s)
                  for (var n = 0, o = e.elements; n < o.length; n += 1) {
                    var h = o[n];
                    h && this.checkPatternExport(t, h)
                  } else "Property" === s ? this.checkPatternExport(t, e.value) : "AssignmentPattern" === s ? this.checkPatternExport(t, e.left) : "RestElement" === s && this.checkPatternExport(t, e.argument)
            }, W.checkVariableExport = function(t, e) {
              if (t)
                for (var s = 0, i = e; s < i.length; s += 1) {
                  var r = i[s];
                  this.checkPatternExport(t, r.id)
                }
            }, W.shouldParseExportStatement = function() {
              return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
            }, W.parseExportSpecifier = function(t) {
              var e = this.startNode();
              return e.local = this.parseModuleExportName(), e.exported = this.eatContextual("as") ? this.parseModuleExportName() : e.local, this.checkExport(t, e.exported, e.exported.start), this.finishNode(e, "ExportSpecifier")
            }, W.parseExportSpecifiers = function(t) {
              var e = [],
                s = !0;
              for (this.expect(y.braceL); !this.eat(y.braceR);) {
                if (s) s = !1;
                else if (this.expect(y.comma), this.afterTrailingComma(y.braceR)) break;
                e.push(this.parseExportSpecifier(t))
              }
              return e
            }, W.parseImport = function(t) {
              return this.next(), this.type === y.string ? (t.specifiers = Q, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === y.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration")
            }, W.parseImportSpecifier = function() {
              var t = this.startNode();
              return t.imported = this.parseModuleExportName(), this.eatContextual("as") ? t.local = this.parseIdent() : (this.checkUnreserved(t.imported), t.local = t.imported), this.checkLValSimple(t.local, 2), this.finishNode(t, "ImportSpecifier")
            }, W.parseImportDefaultSpecifier = function() {
              var t = this.startNode();
              return t.local = this.parseIdent(), this.checkLValSimple(t.local, 2), this.finishNode(t, "ImportDefaultSpecifier")
            }, W.parseImportNamespaceSpecifier = function() {
              var t = this.startNode();
              return this.next(), this.expectContextual("as"), t.local = this.parseIdent(), this.checkLValSimple(t.local, 2), this.finishNode(t, "ImportNamespaceSpecifier")
            }, W.parseImportSpecifiers = function() {
              var t = [],
                e = !0;
              if (this.type === y.name && (t.push(this.parseImportDefaultSpecifier()), !this.eat(y.comma))) return t;
              if (this.type === y.star) return t.push(this.parseImportNamespaceSpecifier()), t;
              for (this.expect(y.braceL); !this.eat(y.braceR);) {
                if (e) e = !1;
                else if (this.expect(y.comma), this.afterTrailingComma(y.braceR)) break;
                t.push(this.parseImportSpecifier())
              }
              return t
            }, W.parseModuleExportName = function() {
              if (this.options.ecmaVersion >= 13 && this.type === y.string) {
                var t = this.parseLiteral(this.value);
                return R.test(t.value) && this.raise(t.start, "An export name cannot include a lone surrogate."), t
              }
              return this.parseIdent(!0)
            }, W.adaptDirectivePrologue = function(t) {
              for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) t[e].directive = t[e].expression.raw.slice(1, -1)
            }, W.isDirectiveCandidate = function(t) {
              return this.options.ecmaVersion >= 5 && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && ('"' === this.input[t.start] || "'" === this.input[t.start])
            };
            var tt = U.prototype;
            tt.toAssignable = function(t, e, s) {
              if (this.options.ecmaVersion >= 6 && t) switch (t.type) {
                case "Identifier":
                  this.inAsync && "await" === t.name && this.raise(t.start, "Cannot use 'await' as identifier inside an async function");
                  break;
                case "ObjectPattern":
                case "ArrayPattern":
                case "AssignmentPattern":
                case "RestElement":
                  break;
                case "ObjectExpression":
                  t.type = "ObjectPattern", s && this.checkPatternErrors(s, !0);
                  for (var i = 0, r = t.properties; i < r.length; i += 1) {
                    var a = r[i];
                    this.toAssignable(a, e), "RestElement" !== a.type || "ArrayPattern" !== a.argument.type && "ObjectPattern" !== a.argument.type || this.raise(a.argument.start, "Unexpected token")
                  }
                  break;
                case "Property":
                  "init" !== t.kind && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);
                  break;
                case "ArrayExpression":
                  t.type = "ArrayPattern", s && this.checkPatternErrors(s, !0), this.toAssignableList(t.elements, e);
                  break;
                case "SpreadElement":
                  t.type = "RestElement", this.toAssignable(t.argument, e), "AssignmentPattern" === t.argument.type && this.raise(t.argument.start, "Rest elements cannot have a default value");
                  break;
                case "AssignmentExpression":
                  "=" !== t.operator && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
                  break;
                case "ParenthesizedExpression":
                  this.toAssignable(t.expression, e, s);
                  break;
                case "ChainExpression":
                  this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                  break;
                case "MemberExpression":
                  if (!e) break;
                default:
                  this.raise(t.start, "Assigning to rvalue")
              } else s && this.checkPatternErrors(s, !0);
              return t
            }, tt.toAssignableList = function(t, e) {
              for (var s = t.length, i = 0; i < s; i++) {
                var r = t[i];
                r && this.toAssignable(r, e)
              }
              if (s) {
                var a = t[s - 1];
                6 === this.options.ecmaVersion && e && a && "RestElement" === a.type && "Identifier" !== a.argument.type && this.unexpected(a.argument.start)
              }
              return t
            }, tt.parseSpread = function(t) {
              var e = this.startNode();
              return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement")
            }, tt.parseRestBinding = function() {
              var t = this.startNode();
              return this.next(), 6 === this.options.ecmaVersion && this.type !== y.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement")
            }, tt.parseBindingAtom = function() {
              if (this.options.ecmaVersion >= 6) switch (this.type) {
                case y.bracketL:
                  var t = this.startNode();
                  return this.next(), t.elements = this.parseBindingList(y.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
                case y.braceL:
                  return this.parseObj(!0)
              }
              return this.parseIdent()
            }, tt.parseBindingList = function(t, e, s, i) {
              for (var r = [], a = !0; !this.eat(t);)
                if (a ? a = !1 : this.expect(y.comma), e && this.type === y.comma) r.push(null);
                else {
                  if (s && this.afterTrailingComma(t)) break;
                  if (this.type === y.ellipsis) {
                    var n = this.parseRestBinding();
                    this.parseBindingListItem(n), r.push(n), this.type === y.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(t);
                    break
                  }
                  r.push(this.parseAssignableListItem(i))
                } return r
            }, tt.parseAssignableListItem = function(t) {
              var e = this.parseMaybeDefault(this.start, this.startLoc);
              return this.parseBindingListItem(e), e
            }, tt.parseBindingListItem = function(t) {
              return t
            }, tt.parseMaybeDefault = function(t, e, s) {
              if (s = s || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(y.eq)) return s;
              var i = this.startNodeAt(t, e);
              return i.left = s, i.right = this.parseMaybeAssign(), this.finishNode(i, "AssignmentPattern")
            }, tt.checkLValSimple = function(t, e, s) {
              void 0 === e && (e = 0);
              var i = 0 !== e;
              switch (t.type) {
                case "Identifier":
                  this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (i ? "Binding " : "Assigning to ") + t.name + " in strict mode"), i && (2 === e && "let" === t.name && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), s && (P(s, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), s[t.name] = !0), 5 !== e && this.declareName(t.name, e, t.start));
                  break;
                case "ChainExpression":
                  this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                  break;
                case "MemberExpression":
                  i && this.raiseRecoverable(t.start, "Binding member expression");
                  break;
                case "ParenthesizedExpression":
                  return i && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, s);
                default:
                  this.raise(t.start, (i ? "Binding" : "Assigning to") + " rvalue")
              }
            }, tt.checkLValPattern = function(t, e, s) {
              switch (void 0 === e && (e = 0), t.type) {
                case "ObjectPattern":
                  for (var i = 0, r = t.properties; i < r.length; i += 1) {
                    var a = r[i];
                    this.checkLValInnerPattern(a, e, s)
                  }
                  break;
                case "ArrayPattern":
                  for (var n = 0, o = t.elements; n < o.length; n += 1) {
                    var h = o[n];
                    h && this.checkLValInnerPattern(h, e, s)
                  }
                  break;
                default:
                  this.checkLValSimple(t, e, s)
              }
            }, tt.checkLValInnerPattern = function(t, e, s) {
              switch (void 0 === e && (e = 0), t.type) {
                case "Property":
                  this.checkLValInnerPattern(t.value, e, s);
                  break;
                case "AssignmentPattern":
                  this.checkLValPattern(t.left, e, s);
                  break;
                case "RestElement":
                  this.checkLValPattern(t.argument, e, s);
                  break;
                default:
                  this.checkLValPattern(t, e, s)
              }
            };
            var et = function(t, e, s, i, r) {
                this.token = t, this.isExpr = !!e, this.preserveSpace = !!s, this.override = i, this.generator = !!r
              },
              st = {
                b_stat: new et("{", !1),
                b_expr: new et("{", !0),
                b_tmpl: new et("${", !1),
                p_stat: new et("(", !1),
                p_expr: new et("(", !0),
                q_tmpl: new et("`", !0, !0, (function(t) {
                  return t.tryReadTemplateToken()
                })),
                f_stat: new et("function", !1),
                f_expr: new et("function", !0),
                f_expr_gen: new et("function", !0, !1, null, !0),
                f_gen: new et("function", !1, !1, null, !0)
              },
              it = U.prototype;
            it.initialContext = function() {
              return [st.b_stat]
            }, it.curContext = function() {
              return this.context[this.context.length - 1]
            }, it.braceIsBlock = function(t) {
              var e = this.curContext();
              return e === st.f_expr || e === st.f_stat || (t !== y.colon || e !== st.b_stat && e !== st.b_expr ? t === y._return || t === y.name && this.exprAllowed ? b.test(this.input.slice(this.lastTokEnd, this.start)) : t === y._else || t === y.semi || t === y.eof || t === y.parenR || t === y.arrow || (t === y.braceL ? e === st.b_stat : t !== y._var && t !== y._const && t !== y.name && !this.exprAllowed) : !e.isExpr)
            }, it.inGeneratorContext = function() {
              for (var t = this.context.length - 1; t >= 1; t--) {
                var e = this.context[t];
                if ("function" === e.token) return e.generator
              }
              return !1
            }, it.updateContext = function(t) {
              var e, s = this.type;
              s.keyword && t === y.dot ? this.exprAllowed = !1 : (e = s.updateContext) ? e.call(this, t) : this.exprAllowed = s.beforeExpr
            }, it.overrideContext = function(t) {
              this.curContext() !== t && (this.context[this.context.length - 1] = t)
            }, y.parenR.updateContext = y.braceR.updateContext = function() {
              if (1 !== this.context.length) {
                var t = this.context.pop();
                t === st.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr
              } else this.exprAllowed = !0
            }, y.braceL.updateContext = function(t) {
              this.context.push(this.braceIsBlock(t) ? st.b_stat : st.b_expr), this.exprAllowed = !0
            }, y.dollarBraceL.updateContext = function() {
              this.context.push(st.b_tmpl), this.exprAllowed = !0
            }, y.parenL.updateContext = function(t) {
              var e = t === y._if || t === y._for || t === y._with || t === y._while;
              this.context.push(e ? st.p_stat : st.p_expr), this.exprAllowed = !0
            }, y.incDec.updateContext = function() {}, y._function.updateContext = y._class.updateContext = function(t) {
              !t.beforeExpr || t === y._else || t === y.semi && this.curContext() !== st.p_stat || t === y._return && b.test(this.input.slice(this.lastTokEnd, this.start)) || (t === y.colon || t === y.braceL) && this.curContext() === st.b_stat ? this.context.push(st.f_stat) : this.context.push(st.f_expr), this.exprAllowed = !1
            }, y.colon.updateContext = function() {
              "function" === this.curContext().token && this.context.pop(), this.exprAllowed = !0
            }, y.backQuote.updateContext = function() {
              this.curContext() === st.q_tmpl ? this.context.pop() : this.context.push(st.q_tmpl), this.exprAllowed = !1
            }, y.star.updateContext = function(t) {
              if (t === y._function) {
                var e = this.context.length - 1;
                this.context[e] === st.f_expr ? this.context[e] = st.f_expr_gen : this.context[e] = st.f_gen
              }
              this.exprAllowed = !0
            }, y.name.updateContext = function(t) {
              var e = !1;
              this.options.ecmaVersion >= 6 && t !== y.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e
            };
            var rt = U.prototype;

            function at(t) {
              return "Identifier" === t.type || "ParenthesizedExpression" === t.type && at(t.expression)
            }

            function nt(t) {
              return "MemberExpression" === t.type && "PrivateIdentifier" === t.property.type || "ChainExpression" === t.type && nt(t.expression) || "ParenthesizedExpression" === t.type && nt(t.expression)
            }
            rt.checkPropClash = function(t, e, s) {
              if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === t.type || this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
                var i, r = t.key;
                switch (r.type) {
                  case "Identifier":
                    i = r.name;
                    break;
                  case "Literal":
                    i = String(r.value);
                    break;
                  default:
                    return
                }
                var a = t.kind;
                if (this.options.ecmaVersion >= 6) "__proto__" === i && "init" === a && (e.proto && (s ? s.doubleProto < 0 && (s.doubleProto = r.start) : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), e.proto = !0);
                else {
                  var n = e[i = "$" + i];
                  n ? ("init" === a ? this.strict && n.init || n.get || n.set : n.init || n[a]) && this.raiseRecoverable(r.start, "Redefinition of property") : n = e[i] = {
                    init: !1,
                    get: !1,
                    set: !1
                  }, n[a] = !0
                }
              }
            }, rt.parseExpression = function(t, e) {
              var s = this.start,
                i = this.startLoc,
                r = this.parseMaybeAssign(t, e);
              if (this.type === y.comma) {
                var a = this.startNodeAt(s, i);
                for (a.expressions = [r]; this.eat(y.comma);) a.expressions.push(this.parseMaybeAssign(t, e));
                return this.finishNode(a, "SequenceExpression")
              }
              return r
            }, rt.parseMaybeAssign = function(t, e, s) {
              if (this.isContextual("yield")) {
                if (this.inGenerator) return this.parseYield(t);
                this.exprAllowed = !1
              }
              var i = !1,
                r = -1,
                a = -1,
                n = -1;
              e ? (r = e.parenthesizedAssign, a = e.trailingComma, n = e.doubleProto, e.parenthesizedAssign = e.trailingComma = -1) : (e = new z, i = !0);
              var o = this.start,
                h = this.startLoc;
              this.type !== y.parenL && this.type !== y.name || (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = "await" === t);
              var p = this.parseMaybeConditional(t, e);
              if (s && (p = s.call(this, p, o, h)), this.type.isAssign) {
                var c = this.startNodeAt(o, h);
                return c.operator = this.value, this.type === y.eq && (p = this.toAssignable(p, !1, e)), i || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= p.start && (e.shorthandAssign = -1), this.type === y.eq ? this.checkLValPattern(p) : this.checkLValSimple(p), c.left = p, this.next(), c.right = this.parseMaybeAssign(t), n > -1 && (e.doubleProto = n), this.finishNode(c, "AssignmentExpression")
              }
              return i && this.checkExpressionErrors(e, !0), r > -1 && (e.parenthesizedAssign = r), a > -1 && (e.trailingComma = a), p
            }, rt.parseMaybeConditional = function(t, e) {
              var s = this.start,
                i = this.startLoc,
                r = this.parseExprOps(t, e);
              if (this.checkExpressionErrors(e)) return r;
              if (this.eat(y.question)) {
                var a = this.startNodeAt(s, i);
                return a.test = r, a.consequent = this.parseMaybeAssign(), this.expect(y.colon), a.alternate = this.parseMaybeAssign(t), this.finishNode(a, "ConditionalExpression")
              }
              return r
            }, rt.parseExprOps = function(t, e) {
              var s = this.start,
                i = this.startLoc,
                r = this.parseMaybeUnary(e, !1, !1, t);
              return this.checkExpressionErrors(e) || r.start === s && "ArrowFunctionExpression" === r.type ? r : this.parseExprOp(r, s, i, -1, t)
            }, rt.parseExprOp = function(t, e, s, i, r) {
              var a = this.type.binop;
              if (null != a && (!r || this.type !== y._in) && a > i) {
                var n = this.type === y.logicalOR || this.type === y.logicalAND,
                  o = this.type === y.coalesce;
                o && (a = y.logicalAND.binop);
                var h = this.value;
                this.next();
                var p = this.start,
                  c = this.startLoc,
                  l = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, r), p, c, a, r),
                  u = this.buildBinary(e, s, t, l, h, n || o);
                return (n && this.type === y.coalesce || o && (this.type === y.logicalOR || this.type === y.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(u, e, s, i, r)
              }
              return t
            }, rt.buildBinary = function(t, e, s, i, r, a) {
              "PrivateIdentifier" === i.type && this.raise(i.start, "Private identifier can only be left side of binary expression");
              var n = this.startNodeAt(t, e);
              return n.left = s, n.operator = r, n.right = i, this.finishNode(n, a ? "LogicalExpression" : "BinaryExpression")
            }, rt.parseMaybeUnary = function(t, e, s, i) {
              var r, a = this.start,
                n = this.startLoc;
              if (this.isContextual("await") && this.canAwait) r = this.parseAwait(i), e = !0;
              else if (this.type.prefix) {
                var o = this.startNode(),
                  h = this.type === y.incDec;
                o.operator = this.value, o.prefix = !0, this.next(), o.argument = this.parseMaybeUnary(null, !0, h, i), this.checkExpressionErrors(t, !0), h ? this.checkLValSimple(o.argument) : this.strict && "delete" === o.operator && at(o.argument) ? this.raiseRecoverable(o.start, "Deleting local variable in strict mode") : "delete" === o.operator && nt(o.argument) ? this.raiseRecoverable(o.start, "Private fields can not be deleted") : e = !0, r = this.finishNode(o, h ? "UpdateExpression" : "UnaryExpression")
              } else if (e || this.type !== y.privateId) {
                if (r = this.parseExprSubscripts(t, i), this.checkExpressionErrors(t)) return r;
                for (; this.type.postfix && !this.canInsertSemicolon();) {
                  var p = this.startNodeAt(a, n);
                  p.operator = this.value, p.prefix = !1, p.argument = r, this.checkLValSimple(r), this.next(), r = this.finishNode(p, "UpdateExpression")
                }
              } else(i || 0 === this.privateNameStack.length) && this.options.checkPrivateFields && this.unexpected(), r = this.parsePrivateIdent(), this.type !== y._in && this.unexpected();
              return s || !this.eat(y.starstar) ? r : e ? void this.unexpected(this.lastTokStart) : this.buildBinary(a, n, r, this.parseMaybeUnary(null, !1, !1, i), "**", !1)
            }, rt.parseExprSubscripts = function(t, e) {
              var s = this.start,
                i = this.startLoc,
                r = this.parseExprAtom(t, e);
              if ("ArrowFunctionExpression" === r.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return r;
              var a = this.parseSubscripts(r, s, i, !1, e);
              return t && "MemberExpression" === a.type && (t.parenthesizedAssign >= a.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= a.start && (t.parenthesizedBind = -1), t.trailingComma >= a.start && (t.trailingComma = -1)), a
            }, rt.parseSubscripts = function(t, e, s, i, r) {
              for (var a = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start == 5 && this.potentialArrowAt === t.start, n = !1;;) {
                var o = this.parseSubscript(t, e, s, i, a, n, r);
                if (o.optional && (n = !0), o === t || "ArrowFunctionExpression" === o.type) {
                  if (n) {
                    var h = this.startNodeAt(e, s);
                    h.expression = o, o = this.finishNode(h, "ChainExpression")
                  }
                  return o
                }
                t = o
              }
            }, rt.shouldParseAsyncArrow = function() {
              return !this.canInsertSemicolon() && this.eat(y.arrow)
            }, rt.parseSubscriptAsyncArrow = function(t, e, s, i) {
              return this.parseArrowExpression(this.startNodeAt(t, e), s, !0, i)
            }, rt.parseSubscript = function(t, e, s, i, r, a, n) {
              var o = this.options.ecmaVersion >= 11,
                h = o && this.eat(y.questionDot);
              i && h && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
              var p = this.eat(y.bracketL);
              if (p || h && this.type !== y.parenL && this.type !== y.backQuote || this.eat(y.dot)) {
                var c = this.startNodeAt(e, s);
                c.object = t, p ? (c.property = this.parseExpression(), this.expect(y.bracketR)) : this.type === y.privateId && "Super" !== t.type ? c.property = this.parsePrivateIdent() : c.property = this.parseIdent("never" !== this.options.allowReserved), c.computed = !!p, o && (c.optional = h), t = this.finishNode(c, "MemberExpression")
              } else if (!i && this.eat(y.parenL)) {
                var l = new z,
                  u = this.yieldPos,
                  d = this.awaitPos,
                  f = this.awaitIdentPos;
                this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
                var m = this.parseExprList(y.parenR, this.options.ecmaVersion >= 8, !1, l);
                if (r && !h && this.shouldParseAsyncArrow()) return this.checkPatternErrors(l, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = u, this.awaitPos = d, this.awaitIdentPos = f, this.parseSubscriptAsyncArrow(e, s, m, n);
                this.checkExpressionErrors(l, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = d || this.awaitPos, this.awaitIdentPos = f || this.awaitIdentPos;
                var x = this.startNodeAt(e, s);
                x.callee = t, x.arguments = m, o && (x.optional = h), t = this.finishNode(x, "CallExpression")
              } else if (this.type === y.backQuote) {
                (h || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                var g = this.startNodeAt(e, s);
                g.tag = t, g.quasi = this.parseTemplate({
                  isTagged: !0
                }), t = this.finishNode(g, "TaggedTemplateExpression")
              }
              return t
            }, rt.parseExprAtom = function(t, e, s) {
              this.type === y.slash && this.readRegexp();
              var i, r = this.potentialArrowAt === this.start;
              switch (this.type) {
                case y._super:
                  return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), i = this.startNode(), this.next(), this.type !== y.parenL || this.allowDirectSuper || this.raise(i.start, "super() call outside constructor of a subclass"), this.type !== y.dot && this.type !== y.bracketL && this.type !== y.parenL && this.unexpected(), this.finishNode(i, "Super");
                case y._this:
                  return i = this.startNode(), this.next(), this.finishNode(i, "ThisExpression");
                case y.name:
                  var a = this.start,
                    n = this.startLoc,
                    o = this.containsEsc,
                    h = this.parseIdent(!1);
                  if (this.options.ecmaVersion >= 8 && !o && "async" === h.name && !this.canInsertSemicolon() && this.eat(y._function)) return this.overrideContext(st.f_expr), this.parseFunction(this.startNodeAt(a, n), 0, !1, !0, e);
                  if (r && !this.canInsertSemicolon()) {
                    if (this.eat(y.arrow)) return this.parseArrowExpression(this.startNodeAt(a, n), [h], !1, e);
                    if (this.options.ecmaVersion >= 8 && "async" === h.name && this.type === y.name && !o && (!this.potentialArrowInForAwait || "of" !== this.value || this.containsEsc)) return h = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(y.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(a, n), [h], !0, e)
                  }
                  return h;
                case y.regexp:
                  var p = this.value;
                  return (i = this.parseLiteral(p.value)).regex = {
                    pattern: p.pattern,
                    flags: p.flags
                  }, i;
                case y.num:
                case y.string:
                  return this.parseLiteral(this.value);
                case y._null:
                case y._true:
                case y._false:
                  return (i = this.startNode()).value = this.type === y._null ? null : this.type === y._true, i.raw = this.type.keyword, this.next(), this.finishNode(i, "Literal");
                case y.parenL:
                  var c = this.start,
                    l = this.parseParenAndDistinguishExpression(r, e);
                  return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(l) && (t.parenthesizedAssign = c), t.parenthesizedBind < 0 && (t.parenthesizedBind = c)), l;
                case y.bracketL:
                  return i = this.startNode(), this.next(), i.elements = this.parseExprList(y.bracketR, !0, !0, t), this.finishNode(i, "ArrayExpression");
                case y.braceL:
                  return this.overrideContext(st.b_expr), this.parseObj(!1, t);
                case y._function:
                  return i = this.startNode(), this.next(), this.parseFunction(i, 0);
                case y._class:
                  return this.parseClass(this.startNode(), !1);
                case y._new:
                  return this.parseNew();
                case y.backQuote:
                  return this.parseTemplate();
                case y._import:
                  return this.options.ecmaVersion >= 11 ? this.parseExprImport(s) : this.unexpected();
                default:
                  return this.parseExprAtomDefault()
              }
            }, rt.parseExprAtomDefault = function() {
              this.unexpected()
            }, rt.parseExprImport = function(t) {
              var e = this.startNode();
              if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === y.parenL && !t) return this.parseDynamicImport(e);
              if (this.type === y.dot) {
                var s = this.startNodeAt(e.start, e.loc && e.loc.start);
                return s.name = "import", e.meta = this.finishNode(s, "Identifier"), this.parseImportMeta(e)
              }
              this.unexpected()
            }, rt.parseDynamicImport = function(t) {
              if (this.next(), t.source = this.parseMaybeAssign(), !this.eat(y.parenR)) {
                var e = this.start;
                this.eat(y.comma) && this.eat(y.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e)
              }
              return this.finishNode(t, "ImportExpression")
            }, rt.parseImportMeta = function(t) {
              this.next();
              var e = this.containsEsc;
              return t.property = this.parseIdent(!0), "meta" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), "module" === this.options.sourceType || this.options.allowImportExportEverywhere || this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty")
            }, rt.parseLiteral = function(t) {
              var e = this.startNode();
              return e.value = t, e.raw = this.input.slice(this.start, this.end), 110 === e.raw.charCodeAt(e.raw.length - 1) && (e.bigint = e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal")
            }, rt.parseParenExpression = function() {
              this.expect(y.parenL);
              var t = this.parseExpression();
              return this.expect(y.parenR), t
            }, rt.shouldParseArrow = function(t) {
              return !this.canInsertSemicolon()
            }, rt.parseParenAndDistinguishExpression = function(t, e) {
              var s, i = this.start,
                r = this.startLoc,
                a = this.options.ecmaVersion >= 8;
              if (this.options.ecmaVersion >= 6) {
                this.next();
                var n, o = this.start,
                  h = this.startLoc,
                  p = [],
                  c = !0,
                  l = !1,
                  u = new z,
                  d = this.yieldPos,
                  f = this.awaitPos;
                for (this.yieldPos = 0, this.awaitPos = 0; this.type !== y.parenR;) {
                  if (c ? c = !1 : this.expect(y.comma), a && this.afterTrailingComma(y.parenR, !0)) {
                    l = !0;
                    break
                  }
                  if (this.type === y.ellipsis) {
                    n = this.start, p.push(this.parseParenItem(this.parseRestBinding())), this.type === y.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
                    break
                  }
                  p.push(this.parseMaybeAssign(!1, u, this.parseParenItem))
                }
                var m = this.lastTokEnd,
                  x = this.lastTokEndLoc;
                if (this.expect(y.parenR), t && this.shouldParseArrow(p) && this.eat(y.arrow)) return this.checkPatternErrors(u, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = d, this.awaitPos = f, this.parseParenArrowList(i, r, p, e);
                p.length && !l || this.unexpected(this.lastTokStart), n && this.unexpected(n), this.checkExpressionErrors(u, !0), this.yieldPos = d || this.yieldPos, this.awaitPos = f || this.awaitPos, p.length > 1 ? ((s = this.startNodeAt(o, h)).expressions = p, this.finishNodeAt(s, "SequenceExpression", m, x)) : s = p[0]
              } else s = this.parseParenExpression();
              if (this.options.preserveParens) {
                var g = this.startNodeAt(i, r);
                return g.expression = s, this.finishNode(g, "ParenthesizedExpression")
              }
              return s
            }, rt.parseParenItem = function(t) {
              return t
            }, rt.parseParenArrowList = function(t, e, s, i) {
              return this.parseArrowExpression(this.startNodeAt(t, e), s, !1, i)
            };
            var ot = [];
            rt.parseNew = function() {
              this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
              var t = this.startNode();
              if (this.next(), this.options.ecmaVersion >= 6 && this.type === y.dot) {
                var e = this.startNodeAt(t.start, t.loc && t.loc.start);
                e.name = "new", t.meta = this.finishNode(e, "Identifier"), this.next();
                var s = this.containsEsc;
                return t.property = this.parseIdent(!0), "target" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), s && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty")
              }
              var i = this.start,
                r = this.startLoc;
              return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), i, r, !0, !1), this.eat(y.parenL) ? t.arguments = this.parseExprList(y.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = ot, this.finishNode(t, "NewExpression")
            }, rt.parseTemplateElement = function(t) {
              var e = t.isTagged,
                s = this.startNode();
              return this.type === y.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), s.value = {
                raw: this.value.replace(/\r\n?/g, "\n"),
                cooked: null
              }) : s.value = {
                raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                cooked: this.value
              }, this.next(), s.tail = this.type === y.backQuote, this.finishNode(s, "TemplateElement")
            }, rt.parseTemplate = function(t) {
              void 0 === t && (t = {});
              var e = t.isTagged;
              void 0 === e && (e = !1);
              var s = this.startNode();
              this.next(), s.expressions = [];
              var i = this.parseTemplateElement({
                isTagged: e
              });
              for (s.quasis = [i]; !i.tail;) this.type === y.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(y.dollarBraceL), s.expressions.push(this.parseExpression()), this.expect(y.braceR), s.quasis.push(i = this.parseTemplateElement({
                isTagged: e
              }));
              return this.next(), this.finishNode(s, "TemplateLiteral")
            }, rt.isAsyncProp = function(t) {
              return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === y.name || this.type === y.num || this.type === y.string || this.type === y.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === y.star) && !b.test(this.input.slice(this.lastTokEnd, this.start))
            }, rt.parseObj = function(t, e) {
              var s = this.startNode(),
                i = !0,
                r = {};
              for (s.properties = [], this.next(); !this.eat(y.braceR);) {
                if (i) i = !1;
                else if (this.expect(y.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(y.braceR)) break;
                var a = this.parseProperty(t, e);
                t || this.checkPropClash(a, r, e), s.properties.push(a)
              }
              return this.finishNode(s, t ? "ObjectPattern" : "ObjectExpression")
            }, rt.parseProperty = function(t, e) {
              var s, i, r, a, n = this.startNode();
              if (this.options.ecmaVersion >= 9 && this.eat(y.ellipsis)) return t ? (n.argument = this.parseIdent(!1), this.type === y.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(n, "RestElement")) : (n.argument = this.parseMaybeAssign(!1, e), this.type === y.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(n, "SpreadElement"));
              this.options.ecmaVersion >= 6 && (n.method = !1, n.shorthand = !1, (t || e) && (r = this.start, a = this.startLoc), t || (s = this.eat(y.star)));
              var o = this.containsEsc;
              return this.parsePropertyName(n), !t && !o && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(n) ? (i = !0, s = this.options.ecmaVersion >= 9 && this.eat(y.star), this.parsePropertyName(n)) : i = !1, this.parsePropertyValue(n, t, s, i, r, a, e, o), this.finishNode(n, "Property")
            }, rt.parseGetterSetter = function(t) {
              t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);
              var e = "get" === t.kind ? 0 : 1;
              if (t.value.params.length !== e) {
                var s = t.value.start;
                "get" === t.kind ? this.raiseRecoverable(s, "getter should have no params") : this.raiseRecoverable(s, "setter should have exactly one param")
              } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
            }, rt.parsePropertyValue = function(t, e, s, i, r, a, n, o) {
              (s || i) && this.type === y.colon && this.unexpected(), this.eat(y.colon) ? (t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, n), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === y.parenL ? (e && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(s, i)) : e || o || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === y.comma || this.type === y.braceR || this.type === y.eq ? this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? ((s || i) && this.unexpected(), this.checkUnreserved(t.key), "await" !== t.key.name || this.awaitIdentPos || (this.awaitIdentPos = r), t.kind = "init", e ? t.value = this.parseMaybeDefault(r, a, this.copyNode(t.key)) : this.type === y.eq && n ? (n.shorthandAssign < 0 && (n.shorthandAssign = this.start), t.value = this.parseMaybeDefault(r, a, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.shorthand = !0) : this.unexpected() : ((s || i) && this.unexpected(), this.parseGetterSetter(t))
            }, rt.parsePropertyName = function(t) {
              if (this.options.ecmaVersion >= 6) {
                if (this.eat(y.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(y.bracketR), t.key;
                t.computed = !1
              }
              return t.key = this.type === y.num || this.type === y.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
            }, rt.initFunction = function(t) {
              t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1)
            }, rt.parseMethod = function(t, e, s) {
              var i = this.startNode(),
                r = this.yieldPos,
                a = this.awaitPos,
                n = this.awaitIdentPos;
              return this.initFunction(i), this.options.ecmaVersion >= 6 && (i.generator = t), this.options.ecmaVersion >= 8 && (i.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | j(e, i.generator) | (s ? 128 : 0)), this.expect(y.parenL), i.params = this.parseBindingList(y.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(i, !1, !0, !1), this.yieldPos = r, this.awaitPos = a, this.awaitIdentPos = n, this.finishNode(i, "FunctionExpression")
            }, rt.parseArrowExpression = function(t, e, s, i) {
              var r = this.yieldPos,
                a = this.awaitPos,
                n = this.awaitIdentPos;
              return this.enterScope(16 | j(s, !1)), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!s), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1, i), this.yieldPos = r, this.awaitPos = a, this.awaitIdentPos = n, this.finishNode(t, "ArrowFunctionExpression")
            }, rt.parseFunctionBody = function(t, e, s, i) {
              var r = e && this.type !== y.braceL,
                a = this.strict,
                n = !1;
              if (r) t.body = this.parseMaybeAssign(i), t.expression = !0, this.checkParams(t, !1);
              else {
                var o = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
                a && !o || (n = this.strictDirective(this.end)) && o && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                var h = this.labels;
                this.labels = [], n && (this.strict = !0), this.checkParams(t, !a && !n && !e && !s && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, 5), t.body = this.parseBlock(!1, void 0, n && !a), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = h
              }
              this.exitScope()
            }, rt.isSimpleParamList = function(t) {
              for (var e = 0, s = t; e < s.length; e += 1)
                if ("Identifier" !== s[e].type) return !1;
              return !0
            }, rt.checkParams = function(t, e) {
              for (var s = Object.create(null), i = 0, r = t.params; i < r.length; i += 1) {
                var a = r[i];
                this.checkLValInnerPattern(a, 1, e ? null : s)
              }
            }, rt.parseExprList = function(t, e, s, i) {
              for (var r = [], a = !0; !this.eat(t);) {
                if (a) a = !1;
                else if (this.expect(y.comma), e && this.afterTrailingComma(t)) break;
                var n = void 0;
                s && this.type === y.comma ? n = null : this.type === y.ellipsis ? (n = this.parseSpread(i), i && this.type === y.comma && i.trailingComma < 0 && (i.trailingComma = this.start)) : n = this.parseMaybeAssign(!1, i), r.push(n)
              }
              return r
            }, rt.checkUnreserved = function(t) {
              var e = t.start,
                s = t.end,
                i = t.name;
              this.inGenerator && "yield" === i && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === i && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && "arguments" === i && this.raiseRecoverable(e, "Cannot use 'arguments' in class field initializer"), !this.inClassStaticBlock || "arguments" !== i && "await" !== i || this.raise(e, "Cannot use " + i + " in class static initialization block"), this.keywords.test(i) && this.raise(e, "Unexpected keyword '" + i + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(e, s).indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(i) && (this.inAsync || "await" !== i || this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + i + "' is reserved"))
            }, rt.parseIdent = function(t) {
              var e = this.parseIdentNode();
              return this.next(!!t), this.finishNode(e, "Identifier"), t || (this.checkUnreserved(e), "await" !== e.name || this.awaitIdentPos || (this.awaitIdentPos = e.start)), e
            }, rt.parseIdentNode = function() {
              var t = this.startNode();
              return this.type === y.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, "class" !== t.name && "function" !== t.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop(), this.type = y.name) : this.unexpected(), t
            }, rt.parsePrivateIdent = function() {
              var t = this.startNode();
              return this.type === y.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (0 === this.privateNameStack.length ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t
            }, rt.parseYield = function(t) {
              this.yieldPos || (this.yieldPos = this.start);
              var e = this.startNode();
              return this.next(), this.type === y.semi || this.canInsertSemicolon() || this.type !== y.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(y.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression")
            }, rt.parseAwait = function(t) {
              this.awaitPos || (this.awaitPos = this.start);
              var e = this.startNode();
              return this.next(), e.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(e, "AwaitExpression")
            };
            var ht = U.prototype;
            ht.raise = function(t, e) {
              var s = M(this.input, t);
              e += " (" + s.line + ":" + s.column + ")";
              var i = new SyntaxError(e);
              throw i.pos = t, i.loc = s, i.raisedAt = this.pos, i
            }, ht.raiseRecoverable = ht.raise, ht.curPosition = function() {
              if (this.options.locations) return new O(this.curLine, this.pos - this.lineStart)
            };
            var pt = U.prototype,
              ct = function(t) {
                this.flags = t, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1
              };
            pt.enterScope = function(t) {
              this.scopeStack.push(new ct(t))
            }, pt.exitScope = function() {
              this.scopeStack.pop()
            }, pt.treatFunctionsAsVarInScope = function(t) {
              return 2 & t.flags || !this.inModule && 1 & t.flags
            }, pt.declareName = function(t, e, s) {
              var i = !1;
              if (2 === e) {
                var r = this.currentScope();
                i = r.lexical.indexOf(t) > -1 || r.functions.indexOf(t) > -1 || r.var.indexOf(t) > -1, r.lexical.push(t), this.inModule && 1 & r.flags && delete this.undefinedExports[t]
              } else if (4 === e) this.currentScope().lexical.push(t);
              else if (3 === e) {
                var a = this.currentScope();
                i = this.treatFunctionsAsVar ? a.lexical.indexOf(t) > -1 : a.lexical.indexOf(t) > -1 || a.var.indexOf(t) > -1, a.functions.push(t)
              } else
                for (var n = this.scopeStack.length - 1; n >= 0; --n) {
                  var o = this.scopeStack[n];
                  if (o.lexical.indexOf(t) > -1 && !(32 & o.flags && o.lexical[0] === t) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(t) > -1) {
                    i = !0;
                    break
                  }
                  if (o.var.push(t), this.inModule && 1 & o.flags && delete this.undefinedExports[t], 259 & o.flags) break
                }
              i && this.raiseRecoverable(s, "Identifier '" + t + "' has already been declared")
            }, pt.checkLocalExport = function(t) {
              -1 === this.scopeStack[0].lexical.indexOf(t.name) && -1 === this.scopeStack[0].var.indexOf(t.name) && (this.undefinedExports[t.name] = t)
            }, pt.currentScope = function() {
              return this.scopeStack[this.scopeStack.length - 1]
            }, pt.currentVarScope = function() {
              for (var t = this.scopeStack.length - 1;; t--) {
                var e = this.scopeStack[t];
                if (259 & e.flags) return e
              }
            }, pt.currentThisScope = function() {
              for (var t = this.scopeStack.length - 1;; t--) {
                var e = this.scopeStack[t];
                if (259 & e.flags && !(16 & e.flags)) return e
              }
            };
            var lt = function(t, e, s) {
                this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new D(t, s)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0])
              },
              ut = U.prototype;

            function dt(t, e, s, i) {
              return t.type = e, t.end = s, this.options.locations && (t.loc.end = i), this.options.ranges && (t.range[1] = s), t
            }
            ut.startNode = function() {
              return new lt(this, this.start, this.startLoc)
            }, ut.startNodeAt = function(t, e) {
              return new lt(this, t, e)
            }, ut.finishNode = function(t, e) {
              return dt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
            }, ut.finishNodeAt = function(t, e, s, i) {
              return dt.call(this, t, e, s, i)
            }, ut.copyNode = function(t) {
              var e = new lt(this, t.start, this.startLoc);
              for (var s in t) e[s] = t[s];
              return e
            };
            for (var ft, mt, xt = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", gt = xt + " Extended_Pictographic", vt = gt + " EBase EComp EMod EPres ExtPict", yt = {
                9: xt,
                10: gt,
                11: gt,
                12: vt,
                13: vt,
                14: vt
              }, bt = {
                9: "",
                10: "",
                11: "",
                12: "",
                13: "",
                14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
              }, kt = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", _t = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", St = _t + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Ct = St + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Et = Ct + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", wt = Et + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", At = {
                9: _t,
                10: St,
                11: Ct,
                12: Et,
                13: wt,
                14: wt + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz"
              }, It = {}, Pt = 0, Nt = [9, 10, 11, 12, 13, 14]; Pt < Nt.length; Pt += 1) mt = void 0, (mt = It[ft = Nt[Pt]] = {
              binary: V(yt[ft] + " " + kt),
              binaryOfStrings: V(bt[ft]),
              nonBinary: {
                General_Category: V(kt),
                Script: V(At[ft])
              }
            }).nonBinary.Script_Extensions = mt.nonBinary.Script, mt.nonBinary.gc = mt.nonBinary.General_Category, mt.nonBinary.sc = mt.nonBinary.Script, mt.nonBinary.scx = mt.nonBinary.Script_Extensions;
            var Tt = U.prototype,
              Vt = function(t, e) {
                this.parent = t, this.base = e || this
              };
            Vt.prototype.separatedFrom = function(t) {
              for (var e = this; e; e = e.parent)
                for (var s = t; s; s = s.parent)
                  if (e.base === s.base && e !== s) return !0;
              return !1
            }, Vt.prototype.sibling = function() {
              return new Vt(this.parent, this.base)
            };
            var Lt = function(t) {
              this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = It[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null
            };

            function Rt(t) {
              return 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || t >= 91 && t <= 94 || t >= 123 && t <= 125
            }

            function Ot(t) {
              return t >= 65 && t <= 90 || t >= 97 && t <= 122
            }

            function Dt(t) {
              return Ot(t) || 95 === t
            }

            function Mt(t) {
              return Dt(t) || Bt(t)
            }

            function Bt(t) {
              return t >= 48 && t <= 57
            }

            function Ft(t) {
              return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
            }

            function jt(t) {
              return t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : t - 48
            }

            function Ut(t) {
              return t >= 48 && t <= 55
            }
            Lt.prototype.reset = function(t, e, s) {
              var i = -1 !== s.indexOf("v"),
                r = -1 !== s.indexOf("u");
              this.start = 0 | t, this.source = e + "", this.flags = s, i && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = r && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = r && this.parser.options.ecmaVersion >= 9)
            }, Lt.prototype.raise = function(t) {
              this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t)
            }, Lt.prototype.at = function(t, e) {
              void 0 === e && (e = !1);
              var s = this.source,
                i = s.length;
              if (t >= i) return -1;
              var r = s.charCodeAt(t);
              if (!e && !this.switchU || r <= 55295 || r >= 57344 || t + 1 >= i) return r;
              var a = s.charCodeAt(t + 1);
              return a >= 56320 && a <= 57343 ? (r << 10) + a - 56613888 : r
            }, Lt.prototype.nextIndex = function(t, e) {
              void 0 === e && (e = !1);
              var s = this.source,
                i = s.length;
              if (t >= i) return i;
              var r, a = s.charCodeAt(t);
              return !e && !this.switchU || a <= 55295 || a >= 57344 || t + 1 >= i || (r = s.charCodeAt(t + 1)) < 56320 || r > 57343 ? t + 1 : t + 2
            }, Lt.prototype.current = function(t) {
              return void 0 === t && (t = !1), this.at(this.pos, t)
            }, Lt.prototype.lookahead = function(t) {
              return void 0 === t && (t = !1), this.at(this.nextIndex(this.pos, t), t)
            }, Lt.prototype.advance = function(t) {
              void 0 === t && (t = !1), this.pos = this.nextIndex(this.pos, t)
            }, Lt.prototype.eat = function(t, e) {
              return void 0 === e && (e = !1), this.current(e) === t && (this.advance(e), !0)
            }, Lt.prototype.eatChars = function(t, e) {
              void 0 === e && (e = !1);
              for (var s = this.pos, i = 0, r = t; i < r.length; i += 1) {
                var a = r[i],
                  n = this.at(s, e);
                if (-1 === n || n !== a) return !1;
                s = this.nextIndex(s, e)
              }
              return this.pos = s, !0
            }, Tt.validateRegExpFlags = function(t) {
              for (var e = t.validFlags, s = t.flags, i = !1, r = !1, a = 0; a < s.length; a++) {
                var n = s.charAt(a); - 1 === e.indexOf(n) && this.raise(t.start, "Invalid regular expression flag"), s.indexOf(n, a + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag"), "u" === n && (i = !0), "v" === n && (r = !0)
              }
              this.options.ecmaVersion >= 15 && i && r && this.raise(t.start, "Invalid regular expression flag")
            }, Tt.validateRegExpPattern = function(t) {
              this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && function(t) {
                for (var e in t) return !0;
                return !1
              }(t.groupNames) && (t.switchN = !0, this.regexp_pattern(t))
            }, Tt.regexp_pattern = function(t) {
              t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames = Object.create(null), t.backReferenceNames.length = 0, t.branchID = null, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(41) && t.raise("Unmatched ')'"), (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
              for (var e = 0, s = t.backReferenceNames; e < s.length; e += 1) {
                var i = s[e];
                t.groupNames[i] || t.raise("Invalid named capture referenced")
              }
            }, Tt.regexp_disjunction = function(t) {
              var e = this.options.ecmaVersion >= 16;
              for (e && (t.branchID = new Vt(t.branchID, null)), this.regexp_alternative(t); t.eat(124);) e && (t.branchID = t.branchID.sibling()), this.regexp_alternative(t);
              e && (t.branchID = t.branchID.parent), this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(123) && t.raise("Lone quantifier brackets")
            }, Tt.regexp_alternative = function(t) {
              for (; t.pos < t.source.length && this.regexp_eatTerm(t););
            }, Tt.regexp_eatTerm = function(t) {
              return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : !!(t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) && (this.regexp_eatQuantifier(t), !0)
            }, Tt.regexp_eatAssertion = function(t) {
              var e = t.pos;
              if (t.lastAssertionIsQuantifiable = !1, t.eat(94) || t.eat(36)) return !0;
              if (t.eat(92)) {
                if (t.eat(66) || t.eat(98)) return !0;
                t.pos = e
              }
              if (t.eat(40) && t.eat(63)) {
                var s = !1;
                if (this.options.ecmaVersion >= 9 && (s = t.eat(60)), t.eat(61) || t.eat(33)) return this.regexp_disjunction(t), t.eat(41) || t.raise("Unterminated group"), t.lastAssertionIsQuantifiable = !s, !0
              }
              return t.pos = e, !1
            }, Tt.regexp_eatQuantifier = function(t, e) {
              return void 0 === e && (e = !1), !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
            }, Tt.regexp_eatQuantifierPrefix = function(t, e) {
              return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e)
            }, Tt.regexp_eatBracedQuantifier = function(t, e) {
              var s = t.pos;
              if (t.eat(123)) {
                var i = 0,
                  r = -1;
                if (this.regexp_eatDecimalDigits(t) && (i = t.lastIntValue, t.eat(44) && this.regexp_eatDecimalDigits(t) && (r = t.lastIntValue), t.eat(125))) return -1 !== r && r < i && !e && t.raise("numbers out of order in {} quantifier"), !0;
                t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = s
              }
              return !1
            }, Tt.regexp_eatAtom = function(t) {
              return this.regexp_eatPatternCharacters(t) || t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t)
            }, Tt.regexp_eatReverseSolidusAtomEscape = function(t) {
              var e = t.pos;
              if (t.eat(92)) {
                if (this.regexp_eatAtomEscape(t)) return !0;
                t.pos = e
              }
              return !1
            }, Tt.regexp_eatUncapturingGroup = function(t) {
              var e = t.pos;
              if (t.eat(40)) {
                if (t.eat(63) && t.eat(58)) {
                  if (this.regexp_disjunction(t), t.eat(41)) return !0;
                  t.raise("Unterminated group")
                }
                t.pos = e
              }
              return !1
            }, Tt.regexp_eatCapturingGroup = function(t) {
              if (t.eat(40)) {
                if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : 63 === t.current() && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(41)) return t.numCapturingParens += 1, !0;
                t.raise("Unterminated group")
              }
              return !1
            }, Tt.regexp_eatExtendedAtom = function(t) {
              return t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t)
            }, Tt.regexp_eatInvalidBracedQuantifier = function(t) {
              return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1
            }, Tt.regexp_eatSyntaxCharacter = function(t) {
              var e = t.current();
              return !!Rt(e) && (t.lastIntValue = e, t.advance(), !0)
            }, Tt.regexp_eatPatternCharacters = function(t) {
              for (var e = t.pos, s = 0; - 1 !== (s = t.current()) && !Rt(s);) t.advance();
              return t.pos !== e
            }, Tt.regexp_eatExtendedPatternCharacter = function(t) {
              var e = t.current();
              return !(-1 === e || 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || 91 === e || 94 === e || 124 === e || (t.advance(), 0))
            }, Tt.regexp_groupSpecifier = function(t) {
              if (t.eat(63)) {
                this.regexp_eatGroupName(t) || t.raise("Invalid group");
                var e = this.options.ecmaVersion >= 16,
                  s = t.groupNames[t.lastStringValue];
                if (s)
                  if (e)
                    for (var i = 0, r = s; i < r.length; i += 1) r[i].separatedFrom(t.branchID) || t.raise("Duplicate capture group name");
                  else t.raise("Duplicate capture group name");
                e ? (s || (t.groupNames[t.lastStringValue] = [])).push(t.branchID) : t.groupNames[t.lastStringValue] = !0
              }
            }, Tt.regexp_eatGroupName = function(t) {
              if (t.lastStringValue = "", t.eat(60)) {
                if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
                t.raise("Invalid capture group name")
              }
              return !1
            }, Tt.regexp_eatRegExpIdentifierName = function(t) {
              if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
                for (t.lastStringValue += L(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t);) t.lastStringValue += L(t.lastIntValue);
                return !0
              }
              return !1
            }, Tt.regexp_eatRegExpIdentifierStart = function(t) {
              var e = t.pos,
                s = this.options.ecmaVersion >= 11,
                i = t.current(s);
              return t.advance(s), 92 === i && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (i = t.lastIntValue),
                function(t) {
                  return l(t, !0) || 36 === t || 95 === t
                }(i) ? (t.lastIntValue = i, !0) : (t.pos = e, !1)
            }, Tt.regexp_eatRegExpIdentifierPart = function(t) {
              var e = t.pos,
                s = this.options.ecmaVersion >= 11,
                i = t.current(s);
              return t.advance(s), 92 === i && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (i = t.lastIntValue),
                function(t) {
                  return u(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t
                }(i) ? (t.lastIntValue = i, !0) : (t.pos = e, !1)
            }, Tt.regexp_eatAtomEscape = function(t) {
              return !!(this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t)) || (t.switchU && (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1)
            }, Tt.regexp_eatBackReference = function(t) {
              var e = t.pos;
              if (this.regexp_eatDecimalEscape(t)) {
                var s = t.lastIntValue;
                if (t.switchU) return s > t.maxBackReference && (t.maxBackReference = s), !0;
                if (s <= t.numCapturingParens) return !0;
                t.pos = e
              }
              return !1
            }, Tt.regexp_eatKGroupName = function(t) {
              if (t.eat(107)) {
                if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue), !0;
                t.raise("Invalid named reference")
              }
              return !1
            }, Tt.regexp_eatCharacterEscape = function(t) {
              return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t)
            }, Tt.regexp_eatCControlLetter = function(t) {
              var e = t.pos;
              if (t.eat(99)) {
                if (this.regexp_eatControlLetter(t)) return !0;
                t.pos = e
              }
              return !1
            }, Tt.regexp_eatZero = function(t) {
              return 48 === t.current() && !Bt(t.lookahead()) && (t.lastIntValue = 0, t.advance(), !0)
            }, Tt.regexp_eatControlEscape = function(t) {
              var e = t.current();
              return 116 === e ? (t.lastIntValue = 9, t.advance(), !0) : 110 === e ? (t.lastIntValue = 10, t.advance(), !0) : 118 === e ? (t.lastIntValue = 11, t.advance(), !0) : 102 === e ? (t.lastIntValue = 12, t.advance(), !0) : 114 === e && (t.lastIntValue = 13, t.advance(), !0)
            }, Tt.regexp_eatControlLetter = function(t) {
              var e = t.current();
              return !!Ot(e) && (t.lastIntValue = e % 32, t.advance(), !0)
            }, Tt.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
              void 0 === e && (e = !1);
              var s, i = t.pos,
                r = e || t.switchU;
              if (t.eat(117)) {
                if (this.regexp_eatFixedHexDigits(t, 4)) {
                  var a = t.lastIntValue;
                  if (r && a >= 55296 && a <= 56319) {
                    var n = t.pos;
                    if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) {
                      var o = t.lastIntValue;
                      if (o >= 56320 && o <= 57343) return t.lastIntValue = 1024 * (a - 55296) + (o - 56320) + 65536, !0
                    }
                    t.pos = n, t.lastIntValue = a
                  }
                  return !0
                }
                if (r && t.eat(123) && this.regexp_eatHexDigits(t) && t.eat(125) && (s = t.lastIntValue) >= 0 && s <= 1114111) return !0;
                r && t.raise("Invalid unicode escape"), t.pos = i
              }
              return !1
            }, Tt.regexp_eatIdentityEscape = function(t) {
              if (t.switchU) return !!this.regexp_eatSyntaxCharacter(t) || !!t.eat(47) && (t.lastIntValue = 47, !0);
              var e = t.current();
              return !(99 === e || t.switchN && 107 === e || (t.lastIntValue = e, t.advance(), 0))
            }, Tt.regexp_eatDecimalEscape = function(t) {
              t.lastIntValue = 0;
              var e = t.current();
              if (e >= 49 && e <= 57) {
                do {
                  t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance()
                } while ((e = t.current()) >= 48 && e <= 57);
                return !0
              }
              return !1
            }, Tt.regexp_eatCharacterClassEscape = function(t) {
              var e = t.current();
              if (function(t) {
                  return 100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t
                }(e)) return t.lastIntValue = -1, t.advance(), 1;
              var s = !1;
              if (t.switchU && this.options.ecmaVersion >= 9 && ((s = 80 === e) || 112 === e)) {
                var i;
                if (t.lastIntValue = -1, t.advance(), t.eat(123) && (i = this.regexp_eatUnicodePropertyValueExpression(t)) && t.eat(125)) return s && 2 === i && t.raise("Invalid property name"), i;
                t.raise("Invalid property name")
              }
              return 0
            }, Tt.regexp_eatUnicodePropertyValueExpression = function(t) {
              var e = t.pos;
              if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
                var s = t.lastStringValue;
                if (this.regexp_eatUnicodePropertyValue(t)) {
                  var i = t.lastStringValue;
                  return this.regexp_validateUnicodePropertyNameAndValue(t, s, i), 1
                }
              }
              if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
                var r = t.lastStringValue;
                return this.regexp_validateUnicodePropertyNameOrValue(t, r)
              }
              return 0
            }, Tt.regexp_validateUnicodePropertyNameAndValue = function(t, e, s) {
              P(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(s) || t.raise("Invalid property value")
            }, Tt.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
              return t.unicodeProperties.binary.test(e) ? 1 : t.switchV && t.unicodeProperties.binaryOfStrings.test(e) ? 2 : void t.raise("Invalid property name")
            }, Tt.regexp_eatUnicodePropertyName = function(t) {
              var e = 0;
              for (t.lastStringValue = ""; Dt(e = t.current());) t.lastStringValue += L(e), t.advance();
              return "" !== t.lastStringValue
            }, Tt.regexp_eatUnicodePropertyValue = function(t) {
              var e = 0;
              for (t.lastStringValue = ""; Mt(e = t.current());) t.lastStringValue += L(e), t.advance();
              return "" !== t.lastStringValue
            }, Tt.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
              return this.regexp_eatUnicodePropertyValue(t)
            }, Tt.regexp_eatCharacterClass = function(t) {
              if (t.eat(91)) {
                var e = t.eat(94),
                  s = this.regexp_classContents(t);
                return t.eat(93) || t.raise("Unterminated character class"), e && 2 === s && t.raise("Negated character class may contain strings"), !0
              }
              return !1
            }, Tt.regexp_classContents = function(t) {
              return 93 === t.current() ? 1 : t.switchV ? this.regexp_classSetExpression(t) : (this.regexp_nonEmptyClassRanges(t), 1)
            }, Tt.regexp_nonEmptyClassRanges = function(t) {
              for (; this.regexp_eatClassAtom(t);) {
                var e = t.lastIntValue;
                if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                  var s = t.lastIntValue;
                  !t.switchU || -1 !== e && -1 !== s || t.raise("Invalid character class"), -1 !== e && -1 !== s && e > s && t.raise("Range out of order in character class")
                }
              }
            }, Tt.regexp_eatClassAtom = function(t) {
              var e = t.pos;
              if (t.eat(92)) {
                if (this.regexp_eatClassEscape(t)) return !0;
                if (t.switchU) {
                  var s = t.current();
                  (99 === s || Ut(s)) && t.raise("Invalid class escape"), t.raise("Invalid escape")
                }
                t.pos = e
              }
              var i = t.current();
              return 93 !== i && (t.lastIntValue = i, t.advance(), !0)
            }, Tt.regexp_eatClassEscape = function(t) {
              var e = t.pos;
              if (t.eat(98)) return t.lastIntValue = 8, !0;
              if (t.switchU && t.eat(45)) return t.lastIntValue = 45, !0;
              if (!t.switchU && t.eat(99)) {
                if (this.regexp_eatClassControlLetter(t)) return !0;
                t.pos = e
              }
              return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
            }, Tt.regexp_classSetExpression = function(t) {
              var e, s = 1;
              if (this.regexp_eatClassSetRange(t));
              else if (e = this.regexp_eatClassSetOperand(t)) {
                2 === e && (s = 2);
                for (var i = t.pos; t.eatChars([38, 38]);) 38 !== t.current() && (e = this.regexp_eatClassSetOperand(t)) ? 2 !== e && (s = 1) : t.raise("Invalid character in character class");
                if (i !== t.pos) return s;
                for (; t.eatChars([45, 45]);) this.regexp_eatClassSetOperand(t) || t.raise("Invalid character in character class");
                if (i !== t.pos) return s
              } else t.raise("Invalid character in character class");
              for (;;)
                if (!this.regexp_eatClassSetRange(t)) {
                  if (!(e = this.regexp_eatClassSetOperand(t))) return s;
                  2 === e && (s = 2)
                }
            }, Tt.regexp_eatClassSetRange = function(t) {
              var e = t.pos;
              if (this.regexp_eatClassSetCharacter(t)) {
                var s = t.lastIntValue;
                if (t.eat(45) && this.regexp_eatClassSetCharacter(t)) {
                  var i = t.lastIntValue;
                  return -1 !== s && -1 !== i && s > i && t.raise("Range out of order in character class"), !0
                }
                t.pos = e
              }
              return !1
            }, Tt.regexp_eatClassSetOperand = function(t) {
              return this.regexp_eatClassSetCharacter(t) ? 1 : this.regexp_eatClassStringDisjunction(t) || this.regexp_eatNestedClass(t)
            }, Tt.regexp_eatNestedClass = function(t) {
              var e = t.pos;
              if (t.eat(91)) {
                var s = t.eat(94),
                  i = this.regexp_classContents(t);
                if (t.eat(93)) return s && 2 === i && t.raise("Negated character class may contain strings"), i;
                t.pos = e
              }
              if (t.eat(92)) {
                var r = this.regexp_eatCharacterClassEscape(t);
                if (r) return r;
                t.pos = e
              }
              return null
            }, Tt.regexp_eatClassStringDisjunction = function(t) {
              var e = t.pos;
              if (t.eatChars([92, 113])) {
                if (t.eat(123)) {
                  var s = this.regexp_classStringDisjunctionContents(t);
                  if (t.eat(125)) return s
                } else t.raise("Invalid escape");
                t.pos = e
              }
              return null
            }, Tt.regexp_classStringDisjunctionContents = function(t) {
              for (var e = this.regexp_classString(t); t.eat(124);) 2 === this.regexp_classString(t) && (e = 2);
              return e
            }, Tt.regexp_classString = function(t) {
              for (var e = 0; this.regexp_eatClassSetCharacter(t);) e++;
              return 1 === e ? 1 : 2
            }, Tt.regexp_eatClassSetCharacter = function(t) {
              var e = t.pos;
              if (t.eat(92)) return !(!this.regexp_eatCharacterEscape(t) && !this.regexp_eatClassSetReservedPunctuator(t) && (t.eat(98) ? (t.lastIntValue = 8, 0) : (t.pos = e, 1)));
              var s = t.current();
              return !(s < 0 || s === t.lookahead() && function(t) {
                return 33 === t || t >= 35 && t <= 38 || t >= 42 && t <= 44 || 46 === t || t >= 58 && t <= 64 || 94 === t || 96 === t || 126 === t
              }(s) || function(t) {
                return 40 === t || 41 === t || 45 === t || 47 === t || t >= 91 && t <= 93 || t >= 123 && t <= 125
              }(s) || (t.advance(), t.lastIntValue = s, 0))
            }, Tt.regexp_eatClassSetReservedPunctuator = function(t) {
              var e = t.current();
              return !! function(t) {
                return 33 === t || 35 === t || 37 === t || 38 === t || 44 === t || 45 === t || t >= 58 && t <= 62 || 64 === t || 96 === t || 126 === t
              }(e) && (t.lastIntValue = e, t.advance(), !0)
            }, Tt.regexp_eatClassControlLetter = function(t) {
              var e = t.current();
              return !(!Bt(e) && 95 !== e || (t.lastIntValue = e % 32, t.advance(), 0))
            }, Tt.regexp_eatHexEscapeSequence = function(t) {
              var e = t.pos;
              if (t.eat(120)) {
                if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                t.switchU && t.raise("Invalid escape"), t.pos = e
              }
              return !1
            }, Tt.regexp_eatDecimalDigits = function(t) {
              var e = t.pos,
                s = 0;
              for (t.lastIntValue = 0; Bt(s = t.current());) t.lastIntValue = 10 * t.lastIntValue + (s - 48), t.advance();
              return t.pos !== e
            }, Tt.regexp_eatHexDigits = function(t) {
              var e = t.pos,
                s = 0;
              for (t.lastIntValue = 0; Ft(s = t.current());) t.lastIntValue = 16 * t.lastIntValue + jt(s), t.advance();
              return t.pos !== e
            }, Tt.regexp_eatLegacyOctalEscapeSequence = function(t) {
              if (this.regexp_eatOctalDigit(t)) {
                var e = t.lastIntValue;
                if (this.regexp_eatOctalDigit(t)) {
                  var s = t.lastIntValue;
                  e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = 64 * e + 8 * s + t.lastIntValue : t.lastIntValue = 8 * e + s
                } else t.lastIntValue = e;
                return !0
              }
              return !1
            }, Tt.regexp_eatOctalDigit = function(t) {
              var e = t.current();
              return Ut(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1)
            }, Tt.regexp_eatFixedHexDigits = function(t, e) {
              var s = t.pos;
              t.lastIntValue = 0;
              for (var i = 0; i < e; ++i) {
                var r = t.current();
                if (!Ft(r)) return t.pos = s, !1;
                t.lastIntValue = 16 * t.lastIntValue + jt(r), t.advance()
              }
              return !0
            };
            var qt = function(t) {
                this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new D(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end])
              },
              Gt = U.prototype;

            function Ht(t) {
              return "function" != typeof BigInt ? null : BigInt(t.replace(/_/g, ""))
            }
            Gt.next = function(t) {
              !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new qt(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
            }, Gt.getToken = function() {
              return this.next(), new qt(this)
            }, "undefined" != typeof Symbol && (Gt[Symbol.iterator] = function() {
              var t = this;
              return {
                next: function() {
                  var e = t.getToken();
                  return {
                    done: e.type === y.eof,
                    value: e
                  }
                }
              }
            }), Gt.nextToken = function() {
              var t = this.curContext();
              return t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(y.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos())
            }, Gt.readToken = function(t) {
              return l(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t)
            }, Gt.fullCharCodeAtPos = function() {
              var t = this.input.charCodeAt(this.pos);
              if (t <= 55295 || t >= 56320) return t;
              var e = this.input.charCodeAt(this.pos + 1);
              return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888
            }, Gt.skipBlockComment = function() {
              var t = this.options.onComment && this.curPosition(),
                e = this.pos,
                s = this.input.indexOf("*/", this.pos += 2);
              if (-1 === s && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations)
                for (var i = void 0, r = e;
                  (i = S(this.input, r, this.pos)) > -1;) ++this.curLine, r = this.lineStart = i;
              this.options.onComment && this.options.onComment(!0, this.input.slice(e + 2, s), e, this.pos, t, this.curPosition())
            }, Gt.skipLineComment = function(t) {
              for (var e = this.pos, s = this.options.onComment && this.curPosition(), i = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !_(i);) i = this.input.charCodeAt(++this.pos);
              this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, s, this.curPosition())
            }, Gt.skipSpace = function() {
              t: for (; this.pos < this.input.length;) {
                var t = this.input.charCodeAt(this.pos);
                switch (t) {
                  case 32:
                  case 160:
                    ++this.pos;
                    break;
                  case 13:
                    10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                  case 10:
                  case 8232:
                  case 8233:
                    ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
                    break;
                  case 47:
                    switch (this.input.charCodeAt(this.pos + 1)) {
                      case 42:
                        this.skipBlockComment();
                        break;
                      case 47:
                        this.skipLineComment(2);
                        break;
                      default:
                        break t
                    }
                    break;
                  default:
                    if (!(t > 8 && t < 14 || t >= 5760 && C.test(String.fromCharCode(t)))) break t;
                    ++this.pos
                }
              }
            }, Gt.finishToken = function(t, e) {
              this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
              var s = this.type;
              this.type = t, this.value = e, this.updateContext(s)
            }, Gt.readToken_dot = function() {
              var t = this.input.charCodeAt(this.pos + 1);
              if (t >= 48 && t <= 57) return this.readNumber(!0);
              var e = this.input.charCodeAt(this.pos + 2);
              return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(y.ellipsis)) : (++this.pos, this.finishToken(y.dot))
            }, Gt.readToken_slash = function() {
              var t = this.input.charCodeAt(this.pos + 1);
              return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(y.assign, 2) : this.finishOp(y.slash, 1)
            }, Gt.readToken_mult_modulo_exp = function(t) {
              var e = this.input.charCodeAt(this.pos + 1),
                s = 1,
                i = 42 === t ? y.star : y.modulo;
              return this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++s, i = y.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e ? this.finishOp(y.assign, s + 1) : this.finishOp(i, s)
            }, Gt.readToken_pipe_amp = function(t) {
              var e = this.input.charCodeAt(this.pos + 1);
              return e === t ? this.options.ecmaVersion >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(y.assign, 3) : this.finishOp(124 === t ? y.logicalOR : y.logicalAND, 2) : 61 === e ? this.finishOp(y.assign, 2) : this.finishOp(124 === t ? y.bitwiseOR : y.bitwiseAND, 1)
            }, Gt.readToken_caret = function() {
              return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(y.assign, 2) : this.finishOp(y.bitwiseXOR, 1)
            }, Gt.readToken_plus_min = function(t) {
              var e = this.input.charCodeAt(this.pos + 1);
              return e === t ? 45 !== e || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !b.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(y.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === e ? this.finishOp(y.assign, 2) : this.finishOp(y.plusMin, 1)
            }, Gt.readToken_lt_gt = function(t) {
              var e = this.input.charCodeAt(this.pos + 1),
                s = 1;
              return e === t ? (s = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + s) ? this.finishOp(y.assign, s + 1) : this.finishOp(y.bitShift, s)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (s = 2), this.finishOp(y.relational, s)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
            }, Gt.readToken_eq_excl = function(t) {
              var e = this.input.charCodeAt(this.pos + 1);
              return 61 === e ? this.finishOp(y.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(y.arrow)) : this.finishOp(61 === t ? y.eq : y.prefix, 1)
            }, Gt.readToken_question = function() {
              var t = this.options.ecmaVersion;
              if (t >= 11) {
                var e = this.input.charCodeAt(this.pos + 1);
                if (46 === e) {
                  var s = this.input.charCodeAt(this.pos + 2);
                  if (s < 48 || s > 57) return this.finishOp(y.questionDot, 2)
                }
                if (63 === e) return t >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(y.assign, 3) : this.finishOp(y.coalesce, 2)
              }
              return this.finishOp(y.question, 1)
            }, Gt.readToken_numberSign = function() {
              var t = 35;
              if (this.options.ecmaVersion >= 13 && (++this.pos, l(t = this.fullCharCodeAtPos(), !0) || 92 === t)) return this.finishToken(y.privateId, this.readWord1());
              this.raise(this.pos, "Unexpected character '" + L(t) + "'")
            }, Gt.getTokenFromCode = function(t) {
              switch (t) {
                case 46:
                  return this.readToken_dot();
                case 40:
                  return ++this.pos, this.finishToken(y.parenL);
                case 41:
                  return ++this.pos, this.finishToken(y.parenR);
                case 59:
                  return ++this.pos, this.finishToken(y.semi);
                case 44:
                  return ++this.pos, this.finishToken(y.comma);
                case 91:
                  return ++this.pos, this.finishToken(y.bracketL);
                case 93:
                  return ++this.pos, this.finishToken(y.bracketR);
                case 123:
                  return ++this.pos, this.finishToken(y.braceL);
                case 125:
                  return ++this.pos, this.finishToken(y.braceR);
                case 58:
                  return ++this.pos, this.finishToken(y.colon);
                case 96:
                  if (this.options.ecmaVersion < 6) break;
                  return ++this.pos, this.finishToken(y.backQuote);
                case 48:
                  var e = this.input.charCodeAt(this.pos + 1);
                  if (120 === e || 88 === e) return this.readRadixNumber(16);
                  if (this.options.ecmaVersion >= 6) {
                    if (111 === e || 79 === e) return this.readRadixNumber(8);
                    if (98 === e || 66 === e) return this.readRadixNumber(2)
                  }
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                  return this.readNumber(!1);
                case 34:
                case 39:
                  return this.readString(t);
                case 47:
                  return this.readToken_slash();
                case 37:
                case 42:
                  return this.readToken_mult_modulo_exp(t);
                case 124:
                case 38:
                  return this.readToken_pipe_amp(t);
                case 94:
                  return this.readToken_caret();
                case 43:
                case 45:
                  return this.readToken_plus_min(t);
                case 60:
                case 62:
                  return this.readToken_lt_gt(t);
                case 61:
                case 33:
                  return this.readToken_eq_excl(t);
                case 63:
                  return this.readToken_question();
                case 126:
                  return this.finishOp(y.prefix, 1);
                case 35:
                  return this.readToken_numberSign()
              }
              this.raise(this.pos, "Unexpected character '" + L(t) + "'")
            }, Gt.finishOp = function(t, e) {
              var s = this.input.slice(this.pos, this.pos + e);
              return this.pos += e, this.finishToken(t, s)
            }, Gt.readRegexp = function() {
              for (var t, e, s = this.pos;;) {
                this.pos >= this.input.length && this.raise(s, "Unterminated regular expression");
                var i = this.input.charAt(this.pos);
                if (b.test(i) && this.raise(s, "Unterminated regular expression"), t) t = !1;
                else {
                  if ("[" === i) e = !0;
                  else if ("]" === i && e) e = !1;
                  else if ("/" === i && !e) break;
                  t = "\\" === i
                }++this.pos
              }
              var r = this.input.slice(s, this.pos);
              ++this.pos;
              var a = this.pos,
                n = this.readWord1();
              this.containsEsc && this.unexpected(a);
              var o = this.regexpState || (this.regexpState = new Lt(this));
              o.reset(s, r, n), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
              var h = null;
              try {
                h = new RegExp(r, n)
              } catch (t) {}
              return this.finishToken(y.regexp, {
                pattern: r,
                flags: n,
                value: h
              })
            }, Gt.readInt = function(t, e, s) {
              for (var i = this.options.ecmaVersion >= 12 && void 0 === e, r = s && 48 === this.input.charCodeAt(this.pos), a = this.pos, n = 0, o = 0, h = 0, p = null == e ? 1 / 0 : e; h < p; ++h, ++this.pos) {
                var c = this.input.charCodeAt(this.pos),
                  l = void 0;
                if (i && 95 === c) r && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === h && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = c;
                else {
                  if ((l = c >= 97 ? c - 97 + 10 : c >= 65 ? c - 65 + 10 : c >= 48 && c <= 57 ? c - 48 : 1 / 0) >= t) break;
                  o = c, n = n * t + l
                }
              }
              return i && 95 === o && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === a || null != e && this.pos - a !== e ? null : n
            }, Gt.readRadixNumber = function(t) {
              var e = this.pos;
              this.pos += 2;
              var s = this.readInt(t);
              return null == s && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (s = Ht(this.input.slice(e, this.pos)), ++this.pos) : l(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(y.num, s)
            }, Gt.readNumber = function(t) {
              var e = this.pos;
              t || null !== this.readInt(10, void 0, !0) || this.raise(e, "Invalid number");
              var s = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
              s && this.strict && this.raise(e, "Invalid number");
              var i = this.input.charCodeAt(this.pos);
              if (!s && !t && this.options.ecmaVersion >= 11 && 110 === i) {
                var r = Ht(this.input.slice(e, this.pos));
                return ++this.pos, l(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(y.num, r)
              }
              s && /[89]/.test(this.input.slice(e, this.pos)) && (s = !1), 46 !== i || s || (++this.pos, this.readInt(10), i = this.input.charCodeAt(this.pos)), 69 !== i && 101 !== i || s || (43 !== (i = this.input.charCodeAt(++this.pos)) && 45 !== i || ++this.pos, null === this.readInt(10) && this.raise(e, "Invalid number")), l(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
              var a, n = (a = this.input.slice(e, this.pos), s ? parseInt(a, 8) : parseFloat(a.replace(/_/g, "")));
              return this.finishToken(y.num, n)
            }, Gt.readCodePoint = function() {
              var t;
              if (123 === this.input.charCodeAt(this.pos)) {
                this.options.ecmaVersion < 6 && this.unexpected();
                var e = ++this.pos;
                t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(e, "Code point out of bounds")
              } else t = this.readHexChar(4);
              return t
            }, Gt.readString = function(t) {
              for (var e = "", s = ++this.pos;;) {
                this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                var i = this.input.charCodeAt(this.pos);
                if (i === t) break;
                92 === i ? (e += this.input.slice(s, this.pos), e += this.readEscapedChar(!1), s = this.pos) : 8232 === i || 8233 === i ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (_(i) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
              }
              return e += this.input.slice(s, this.pos++), this.finishToken(y.string, e)
            };
            var zt = {};
            Gt.tryReadTemplateToken = function() {
              this.inTemplateElement = !0;
              try {
                this.readTmplToken()
              } catch (t) {
                if (t !== zt) throw t;
                this.readInvalidTemplateToken()
              }
              this.inTemplateElement = !1
            }, Gt.invalidStringToken = function(t, e) {
              if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw zt;
              this.raise(t, e)
            }, Gt.readTmplToken = function() {
              for (var t = "", e = this.pos;;) {
                this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                var s = this.input.charCodeAt(this.pos);
                if (96 === s || 36 === s && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== y.template && this.type !== y.invalidTemplate ? (t += this.input.slice(e, this.pos), this.finishToken(y.template, t)) : 36 === s ? (this.pos += 2, this.finishToken(y.dollarBraceL)) : (++this.pos, this.finishToken(y.backQuote));
                if (92 === s) t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
                else if (_(s)) {
                  switch (t += this.input.slice(e, this.pos), ++this.pos, s) {
                    case 13:
                      10 === this.input.charCodeAt(this.pos) && ++this.pos;
                    case 10:
                      t += "\n";
                      break;
                    default:
                      t += String.fromCharCode(s)
                  }
                  this.options.locations && (++this.curLine, this.lineStart = this.pos), e = this.pos
                } else ++this.pos
              }
            }, Gt.readInvalidTemplateToken = function() {
              for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
                case "\\":
                  ++this.pos;
                  break;
                case "$":
                  if ("{" !== this.input[this.pos + 1]) break;
                case "`":
                  return this.finishToken(y.invalidTemplate, this.input.slice(this.start, this.pos));
                case "\r":
                  "\n" === this.input[this.pos + 1] && ++this.pos;
                case "\n":
                case "\u2028":
                case "\u2029":
                  ++this.curLine, this.lineStart = this.pos + 1
              }
              this.raise(this.start, "Unterminated template")
            }, Gt.readEscapedChar = function(t) {
              var e = this.input.charCodeAt(++this.pos);
              switch (++this.pos, e) {
                case 110:
                  return "\n";
                case 114:
                  return "\r";
                case 120:
                  return String.fromCharCode(this.readHexChar(2));
                case 117:
                  return L(this.readCodePoint());
                case 116:
                  return "\t";
                case 98:
                  return "\b";
                case 118:
                  return "\v";
                case 102:
                  return "\f";
                case 13:
                  10 === this.input.charCodeAt(this.pos) && ++this.pos;
                case 10:
                  return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
                case 56:
                case 57:
                  if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), t) {
                    var s = this.pos - 1;
                    this.invalidStringToken(s, "Invalid escape sequence in template string")
                  }
                default:
                  if (e >= 48 && e <= 55) {
                    var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                      r = parseInt(i, 8);
                    return r > 255 && (i = i.slice(0, -1), r = parseInt(i, 8)), this.pos += i.length - 1, e = this.input.charCodeAt(this.pos), "0" === i && 56 !== e && 57 !== e || !this.strict && !t || this.invalidStringToken(this.pos - 1 - i.length, t ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(r)
                  }
                  return _(e) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(e)
              }
            }, Gt.readHexChar = function(t) {
              var e = this.pos,
                s = this.readInt(16, t);
              return null === s && this.invalidStringToken(e, "Bad character escape sequence"), s
            }, Gt.readWord1 = function() {
              this.containsEsc = !1;
              for (var t = "", e = !0, s = this.pos, i = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
                var r = this.fullCharCodeAtPos();
                if (u(r, i)) this.pos += r <= 65535 ? 1 : 2;
                else {
                  if (92 !== r) break;
                  this.containsEsc = !0, t += this.input.slice(s, this.pos);
                  var a = this.pos;
                  117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                  var n = this.readCodePoint();
                  (e ? l : u)(n, i) || this.invalidStringToken(a, "Invalid Unicode escape"), t += L(n), s = this.pos
                }
                e = !1
              }
              return t + this.input.slice(s, this.pos)
            }, Gt.readWord = function() {
              var t = this.readWord1(),
                e = y.name;
              return this.keywords.test(t) && (e = g[t]), this.finishToken(e, t)
            };
            var Wt = "8.12.1";
            U.acorn = {
              Parser: U,
              version: Wt,
              defaultOptions: B,
              Position: O,
              SourceLocation: D,
              getLineInfo: M,
              Node: lt,
              TokenType: d,
              tokTypes: y,
              keywordTypes: g,
              TokContext: et,
              tokContexts: st,
              isIdentifierChar: u,
              isIdentifierStart: l,
              Token: qt,
              isNewLine: _,
              lineBreak: b,
              lineBreakG: k,
              nonASCIIwhitespace: C
            }, t.Node = lt, t.Parser = U, t.Position = O, t.SourceLocation = D, t.TokContext = et, t.Token = qt, t.TokenType = d, t.defaultOptions = B, t.getLineInfo = M, t.isIdentifierChar = u, t.isIdentifierStart = l, t.isNewLine = _, t.keywordTypes = g, t.lineBreak = b, t.lineBreakG = k, t.nonASCIIwhitespace = C, t.parse = function(t, e) {
              return U.parse(t, e)
            }, t.parseExpressionAt = function(t, e, s) {
              return U.parseExpressionAt(t, e, s)
            }, t.tokContexts = st, t.tokTypes = y, t.tokenizer = function(t, e) {
              return U.tokenizer(t, e)
            }, t.version = Wt
          }))
        })),
        d = c(((t, e) => {
          var s = l(),
            i = /^[\da-fA-F]+$/,
            r = /^\d+$/,
            a = new WeakMap;

          function n(t) {
            t = t.Parser.acorn || t;
            let e = a.get(t);
            if (!e) {
              const s = t.tokTypes,
                i = t.TokContext,
                r = t.TokenType,
                n = new i("<tag", !1),
                o = new i("</tag", !1),
                h = new i("<tag>...</tag>", !0, !0),
                p = {
                  tc_oTag: n,
                  tc_cTag: o,
                  tc_expr: h
                },
                c = {
                  jsxName: new r("jsxName"),
                  jsxText: new r("jsxText", {
                    beforeExpr: !0
                  }),
                  jsxTagStart: new r("jsxTagStart", {
                    startsExpr: !0
                  }),
                  jsxTagEnd: new r("jsxTagEnd")
                };
              c.jsxTagStart.updateContext = function() {
                this.context.push(h), this.context.push(n), this.exprAllowed = !1
              }, c.jsxTagEnd.updateContext = function(t) {
                let e = this.context.pop();
                e === n && t === s.slash || e === o ? (this.context.pop(), this.exprAllowed = this.curContext() === h) : this.exprAllowed = !0
              }, e = {
                tokContexts: p,
                tokTypes: c
              }, a.set(t, e)
            }
            return e
          }

          function o(t) {
            return t ? "JSXIdentifier" === t.type ? t.name : "JSXNamespacedName" === t.type ? t.namespace.name + ":" + t.name.name : "JSXMemberExpression" === t.type ? o(t.object) + "." + o(t.property) : void 0 : t
          }
          e.exports = function(t) {
            return t = t || {},
              function(e) {
                return function(t, e) {
                  const a = e.acorn || u(),
                    h = n(a),
                    p = a.tokTypes,
                    c = h.tokTypes,
                    l = a.tokContexts,
                    d = h.tokContexts.tc_oTag,
                    f = h.tokContexts.tc_cTag,
                    m = h.tokContexts.tc_expr,
                    x = a.isNewLine,
                    g = a.isIdentifierStart,
                    v = a.isIdentifierChar;
                  return class extends e {
                    static get acornJsx() {
                      return h
                    }
                    jsx_readToken() {
                      let t = "",
                        e = this.pos;
                      for (;;) {
                        this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
                        let s = this.input.charCodeAt(this.pos);
                        switch (s) {
                          case 60:
                          case 123:
                            return this.pos === this.start ? 60 === s && this.exprAllowed ? (++this.pos, this.finishToken(c.jsxTagStart)) : this.getTokenFromCode(s) : (t += this.input.slice(e, this.pos), this.finishToken(c.jsxText, t));
                          case 38:
                            t += this.input.slice(e, this.pos), t += this.jsx_readEntity(), e = this.pos;
                            break;
                          case 62:
                          case 125:
                            this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (62 === s ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
                          default:
                            x(s) ? (t += this.input.slice(e, this.pos), t += this.jsx_readNewLine(!0), e = this.pos) : ++this.pos
                        }
                      }
                    }
                    jsx_readNewLine(t) {
                      let e, s = this.input.charCodeAt(this.pos);
                      return ++this.pos, 13 === s && 10 === this.input.charCodeAt(this.pos) ? (++this.pos, e = t ? "\n" : "\r\n") : e = String.fromCharCode(s), this.options.locations && (++this.curLine, this.lineStart = this.pos), e
                    }
                    jsx_readString(t) {
                      let e = "",
                        s = ++this.pos;
                      for (;;) {
                        this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                        let i = this.input.charCodeAt(this.pos);
                        if (i === t) break;
                        38 === i ? (e += this.input.slice(s, this.pos), e += this.jsx_readEntity(), s = this.pos) : x(i) ? (e += this.input.slice(s, this.pos), e += this.jsx_readNewLine(!1), s = this.pos) : ++this.pos
                      }
                      return e += this.input.slice(s, this.pos++), this.finishToken(p.string, e)
                    }
                    jsx_readEntity() {
                      let t, e = "",
                        a = 0,
                        n = this.input[this.pos];
                      "&" !== n && this.raise(this.pos, "Entity must start with an ampersand");
                      let o = ++this.pos;
                      for (; this.pos < this.input.length && a++ < 10;) {
                        if (n = this.input[this.pos++], ";" === n) {
                          "#" === e[0] ? "x" === e[1] ? (e = e.substr(2), i.test(e) && (t = String.fromCharCode(parseInt(e, 16)))) : (e = e.substr(1), r.test(e) && (t = String.fromCharCode(parseInt(e, 10)))) : t = s[e];
                          break
                        }
                        e += n
                      }
                      return t || (this.pos = o, "&")
                    }
                    jsx_readWord() {
                      let t, e = this.pos;
                      do {
                        t = this.input.charCodeAt(++this.pos)
                      } while (v(t) || 45 === t);
                      return this.finishToken(c.jsxName, this.input.slice(e, this.pos))
                    }
                    jsx_parseIdentifier() {
                      let t = this.startNode();
                      return this.type === c.jsxName ? t.name = this.value : this.type.keyword ? t.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(t, "JSXIdentifier")
                    }
                    jsx_parseNamespacedName() {
                      let e = this.start,
                        s = this.startLoc,
                        i = this.jsx_parseIdentifier();
                      if (!t.allowNamespaces || !this.eat(p.colon)) return i;
                      var r = this.startNodeAt(e, s);
                      return r.namespace = i, r.name = this.jsx_parseIdentifier(), this.finishNode(r, "JSXNamespacedName")
                    }
                    jsx_parseElementName() {
                      if (this.type === c.jsxTagEnd) return "";
                      let e = this.start,
                        s = this.startLoc,
                        i = this.jsx_parseNamespacedName();
                      for (this.type !== p.dot || "JSXNamespacedName" !== i.type || t.allowNamespacedObjects || this.unexpected(); this.eat(p.dot);) {
                        let t = this.startNodeAt(e, s);
                        t.object = i, t.property = this.jsx_parseIdentifier(), i = this.finishNode(t, "JSXMemberExpression")
                      }
                      return i
                    }
                    jsx_parseAttributeValue() {
                      switch (this.type) {
                        case p.braceL:
                          let t = this.jsx_parseExpressionContainer();
                          return "JSXEmptyExpression" === t.expression.type && this.raise(t.start, "JSX attributes must only be assigned a non-empty expression"), t;
                        case c.jsxTagStart:
                        case p.string:
                          return this.parseExprAtom();
                        default:
                          this.raise(this.start, "JSX value should be either an expression or a quoted JSX text")
                      }
                    }
                    jsx_parseEmptyExpression() {
                      let t = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
                      return this.finishNodeAt(t, "JSXEmptyExpression", this.start, this.startLoc)
                    }
                    jsx_parseExpressionContainer() {
                      let t = this.startNode();
                      return this.next(), t.expression = this.type === p.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(p.braceR), this.finishNode(t, "JSXExpressionContainer")
                    }
                    jsx_parseAttribute() {
                      let t = this.startNode();
                      return this.eat(p.braceL) ? (this.expect(p.ellipsis), t.argument = this.parseMaybeAssign(), this.expect(p.braceR), this.finishNode(t, "JSXSpreadAttribute")) : (t.name = this.jsx_parseNamespacedName(), t.value = this.eat(p.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(t, "JSXAttribute"))
                    }
                    jsx_parseOpeningElementAt(e, s) {
                      let i = this.startNodeAt(e, s);
                      i.attributes = [];
                      let r = this.jsx_parseElementName();
                      for (r && (i.name = r); this.type !== p.slash && this.type !== c.jsxTagEnd;) i.attributes.push(this.jsx_parseAttribute());
                      i.selfClosing = this.eat(p.slash), this.expect(c.jsxTagEnd);
                      return t.autoCloseVoidElements && r && ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"].includes(r.name) && (i.selfClosing = !0), this.finishNode(i, r ? "JSXOpeningElement" : "JSXOpeningFragment")
                    }
                    jsx_parseClosingElementAt(t, e) {
                      let s = this.startNodeAt(t, e),
                        i = this.jsx_parseElementName();
                      return i && (s.name = i), this.expect(c.jsxTagEnd), this.finishNode(s, i ? "JSXClosingElement" : "JSXClosingFragment")
                    }
                    jsx_parseElementAt(t, e) {
                      let s = this.startNodeAt(t, e),
                        i = [],
                        r = this.jsx_parseOpeningElementAt(t, e),
                        a = null;
                      if (!r.selfClosing) {
                        t: for (;;) switch (this.type) {
                          case c.jsxTagStart:
                            if (t = this.start, e = this.startLoc, this.next(), this.eat(p.slash)) {
                              a = this.jsx_parseClosingElementAt(t, e);
                              break t
                            }
                            i.push(this.jsx_parseElementAt(t, e));
                            break;
                          case c.jsxText:
                            i.push(this.parseExprAtom());
                            break;
                          case p.braceL:
                            i.push(this.jsx_parseExpressionContainer());
                            break;
                          default:
                            this.unexpected()
                        }
                        o(a.name) !== o(r.name) && this.raise(a.start, "Expected corresponding JSX closing tag for <" + o(r.name) + ">")
                      }
                      let n = r.name ? "Element" : "Fragment";
                      return s["opening" + n] = r, s["closing" + n] = a, s.children = i, this.type === p.relational && "<" === this.value && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(s, "JSX" + n)
                    }
                    jsx_parseText() {
                      let t = this.parseLiteral(this.value);
                      return t.type = "JSXText", t
                    }
                    jsx_parseElement() {
                      let t = this.start,
                        e = this.startLoc;
                      return this.next(), this.jsx_parseElementAt(t, e)
                    }
                    parseExprAtom(t) {
                      return this.type === c.jsxText ? this.jsx_parseText() : this.type === c.jsxTagStart ? this.jsx_parseElement() : super.parseExprAtom(t)
                    }
                    readToken(t) {
                      let e = this.curContext();
                      if (e === m) return this.jsx_readToken();
                      if (e === d || e === f) {
                        if (g(t)) return this.jsx_readWord();
                        if (62 == t) return ++this.pos, this.finishToken(c.jsxTagEnd);
                        if ((34 === t || 39 === t) && e == d) return this.jsx_readString(t)
                      }
                      return 60 === t && this.exprAllowed && 33 !== this.input.charCodeAt(this.pos + 1) ? (++this.pos, this.finishToken(c.jsxTagStart)) : super.readToken(t)
                    }
                    updateContext(t) {
                      if (this.type == p.braceL) {
                        var e = this.curContext();
                        e == d ? this.context.push(l.b_expr) : e == m ? this.context.push(l.b_tmpl) : super.updateContext(t), this.exprAllowed = !0
                      } else {
                        if (this.type !== p.slash || t !== c.jsxTagStart) return super.updateContext(t);
                        this.context.length -= 2, this.context.push(f), this.exprAllowed = !1
                      }
                    }
                  }
                }({
                  allowNamespaces: !1 !== t.allowNamespaces,
                  allowNamespacedObjects: !!t.allowNamespacedObjects,
                  autoCloseVoidElements: !!t.autoCloseVoidElements
                }, e)
              }
          }, Object.defineProperty(e.exports, "tokTypes", {
            get: function() {
              return n(u()).tokTypes
            },
            configurable: !0,
            enumerable: !0
          })
        })),
        f = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239],
        m = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191],
        x = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        g = {
          3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
          5: "class enum extends super const export import",
          6: "enum",
          strict: "implements interface let package private protected public static yield",
          strictBind: "eval arguments"
        },
        v = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
        y = {
          5: v,
          "5module": v + " export import",
          6: v + " const class extends export import super"
        },
        b = /^in(stanceof)?$/,
        k = new RegExp("[" + x + "]"),
        _ = new RegExp("[" + x + "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･]");

      function S(t, e) {
        for (var s = 65536, i = 0; i < e.length; i += 2) {
          if ((s += e[i]) > t) return !1;
          if ((s += e[i + 1]) >= t) return !0
        }
        return !1
      }

      function C(t, e) {
        return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && k.test(String.fromCharCode(t)) : !1 !== e && S(t, m)))
      }

      function E(t, e) {
        return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && _.test(String.fromCharCode(t)) : !1 !== e && (S(t, m) || S(t, f)))))
      }
      var w = function(t, e) {
        void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop || null, this.updateContext = null
      };

      function A(t, e) {
        return new w(t, {
          beforeExpr: !0,
          binop: e
        })
      }
      var I = {
          beforeExpr: !0
        },
        P = {
          startsExpr: !0
        },
        N = {};

      function T(t, e) {
        return void 0 === e && (e = {}), e.keyword = t, N[t] = new w(t, e)
      }
      var V = {
          num: new w("num", P),
          regexp: new w("regexp", P),
          string: new w("string", P),
          name: new w("name", P),
          privateId: new w("privateId", P),
          eof: new w("eof"),
          bracketL: new w("[", {
            beforeExpr: !0,
            startsExpr: !0
          }),
          bracketR: new w("]"),
          braceL: new w("{", {
            beforeExpr: !0,
            startsExpr: !0
          }),
          braceR: new w("}"),
          parenL: new w("(", {
            beforeExpr: !0,
            startsExpr: !0
          }),
          parenR: new w(")"),
          comma: new w(",", I),
          semi: new w(";", I),
          colon: new w(":", I),
          dot: new w("."),
          question: new w("?", I),
          questionDot: new w("?."),
          arrow: new w("=>", I),
          template: new w("template"),
          invalidTemplate: new w("invalidTemplate"),
          ellipsis: new w("...", I),
          backQuote: new w("`", P),
          dollarBraceL: new w("${", {
            beforeExpr: !0,
            startsExpr: !0
          }),
          eq: new w("=", {
            beforeExpr: !0,
            isAssign: !0
          }),
          assign: new w("_=", {
            beforeExpr: !0,
            isAssign: !0
          }),
          incDec: new w("++/--", {
            prefix: !0,
            postfix: !0,
            startsExpr: !0
          }),
          prefix: new w("!/~", {
            beforeExpr: !0,
            prefix: !0,
            startsExpr: !0
          }),
          logicalOR: A("||", 1),
          logicalAND: A("&&", 2),
          bitwiseOR: A("|", 3),
          bitwiseXOR: A("^", 4),
          bitwiseAND: A("&", 5),
          equality: A("==/!=/===/!==", 6),
          relational: A("</>/<=/>=", 7),
          bitShift: A("<</>>/>>>", 8),
          plusMin: new w("+/-", {
            beforeExpr: !0,
            binop: 9,
            prefix: !0,
            startsExpr: !0
          }),
          modulo: A("%", 10),
          star: A("*", 10),
          slash: A("/", 10),
          starstar: new w("**", {
            beforeExpr: !0
          }),
          coalesce: A("??", 1),
          _break: T("break"),
          _case: T("case", I),
          _catch: T("catch"),
          _continue: T("continue"),
          _debugger: T("debugger"),
          _default: T("default", I),
          _do: T("do", {
            isLoop: !0,
            beforeExpr: !0
          }),
          _else: T("else", I),
          _finally: T("finally"),
          _for: T("for", {
            isLoop: !0
          }),
          _function: T("function", P),
          _if: T("if"),
          _return: T("return", I),
          _switch: T("switch"),
          _throw: T("throw", I),
          _try: T("try"),
          _var: T("var"),
          _const: T("const"),
          _while: T("while", {
            isLoop: !0
          }),
          _with: T("with"),
          _new: T("new", {
            beforeExpr: !0,
            startsExpr: !0
          }),
          _this: T("this", P),
          _super: T("super", P),
          _class: T("class", P),
          _extends: T("extends", I),
          _export: T("export"),
          _import: T("import", P),
          _null: T("null", P),
          _true: T("true", P),
          _false: T("false", P),
          _in: T("in", {
            beforeExpr: !0,
            binop: 7
          }),
          _instanceof: T("instanceof", {
            beforeExpr: !0,
            binop: 7
          }),
          _typeof: T("typeof", {
            beforeExpr: !0,
            prefix: !0,
            startsExpr: !0
          }),
          _void: T("void", {
            beforeExpr: !0,
            prefix: !0,
            startsExpr: !0
          }),
          _delete: T("delete", {
            beforeExpr: !0,
            prefix: !0,
            startsExpr: !0
          })
        },
        L = /\r\n?|\n|\u2028|\u2029/,
        R = new RegExp(L.source, "g");

      function O(t) {
        return 10 === t || 13 === t || 8232 === t || 8233 === t
      }

      function D(t, e, s) {
        void 0 === s && (s = t.length);
        for (var i = e; i < s; i++) {
          var r = t.charCodeAt(i);
          if (O(r)) return i < s - 1 && 13 === r && 10 === t.charCodeAt(i + 1) ? i + 2 : i + 1
        }
        return -1
      }
      var M = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
        B = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
        F = Object.prototype,
        j = F.hasOwnProperty,
        U = F.toString,
        q = Object.hasOwn || function(t, e) {
          return j.call(t, e)
        },
        G = Array.isArray || function(t) {
          return "[object Array]" === U.call(t)
        },
        H = Object.create(null);

      function z(t) {
        return H[t] || (H[t] = new RegExp("^(?:" + t.replace(/ /g, "|") + ")$"))
      }

      function W(t) {
        return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
      }
      var X = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
        K = function(t, e) {
          this.line = t, this.column = e
        };
      K.prototype.offset = function(t) {
        return new K(this.line, this.column + t)
      };
      var Q = function(t, e, s) {
        this.start = e, this.end = s, null !== t.sourceFile && (this.source = t.sourceFile)
      };

      function J(t, e) {
        for (var s = 1, i = 0;;) {
          var r = D(t, i, e);
          if (r < 0) return new K(s, e - i);
          ++s, i = r
        }
      }
      var $ = {
          ecmaVersion: null,
          sourceType: "script",
          onInsertedSemicolon: null,
          onTrailingComma: null,
          allowReserved: null,
          allowReturnOutsideFunction: !1,
          allowImportExportEverywhere: !1,
          allowAwaitOutsideFunction: null,
          allowSuperOutsideMethod: null,
          allowHashBang: !1,
          checkPrivateFields: !0,
          locations: !1,
          onToken: null,
          onComment: null,
          ranges: !1,
          program: null,
          sourceFile: null,
          directSourceFile: null,
          preserveParens: !1
        },
        Y = !1;

      function Z(t, e) {
        return 2 | (t ? 4 : 0) | (e ? 8 : 0)
      }
      var tt = function(t, e, s) {
          this.options = t = function(t) {
            var e = {};
            for (var s in $) e[s] = t && q(t, s) ? t[s] : $[s];
            if ("latest" === e.ecmaVersion ? e.ecmaVersion = 1e8 : null == e.ecmaVersion ? (!Y && "object" == typeof console && console.warn && (Y = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5), t && null != t.allowHashBang || (e.allowHashBang = e.ecmaVersion >= 14), G(e.onToken)) {
              var i = e.onToken;
              e.onToken = function(t) {
                return i.push(t)
              }
            }
            return G(e.onComment) && (e.onComment = function(t, e) {
              return function(s, i, r, a, n, o) {
                var h = {
                  type: s ? "Block" : "Line",
                  value: i,
                  start: r,
                  end: a
                };
                t.locations && (h.loc = new Q(this, n, o)), t.ranges && (h.range = [r, a]), e.push(h)
              }
            }(e, e.onComment)), e
          }(t), this.sourceFile = t.sourceFile, this.keywords = z(y[t.ecmaVersion >= 6 ? 6 : "module" === t.sourceType ? "5module" : 5]);
          var i = "";
          !0 !== t.allowReserved && (i = g[t.ecmaVersion >= 6 ? 6 : 5 === t.ecmaVersion ? 5 : 3], "module" === t.sourceType && (i += " await")), this.reservedWords = z(i);
          var r = (i ? i + " " : "") + g.strict;
          this.reservedWordsStrict = z(r), this.reservedWordsStrictBind = z(r + " " + g.strictBind), this.input = String(e), this.containsEsc = !1, s ? (this.pos = s, this.lineStart = this.input.lastIndexOf("\n", s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(L).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = V.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === t.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null, this.privateNameStack = []
        },
        et = {
          inFunction: {
            configurable: !0
          },
          inGenerator: {
            configurable: !0
          },
          inAsync: {
            configurable: !0
          },
          canAwait: {
            configurable: !0
          },
          allowSuper: {
            configurable: !0
          },
          allowDirectSuper: {
            configurable: !0
          },
          treatFunctionsAsVar: {
            configurable: !0
          },
          allowNewDotTarget: {
            configurable: !0
          },
          inClassStaticBlock: {
            configurable: !0
          }
        };
      tt.prototype.parse = function() {
        var t = this.options.program || this.startNode();
        return this.nextToken(), this.parseTopLevel(t)
      }, et.inFunction.get = function() {
        return (2 & this.currentVarScope().flags) > 0
      }, et.inGenerator.get = function() {
        return (8 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit
      }, et.inAsync.get = function() {
        return (4 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit
      }, et.canAwait.get = function() {
        for (var t = this.scopeStack.length - 1; t >= 0; t--) {
          var e = this.scopeStack[t];
          if (e.inClassFieldInit || 256 & e.flags) return !1;
          if (2 & e.flags) return (4 & e.flags) > 0
        }
        return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction
      }, et.allowSuper.get = function() {
        var t = this.currentThisScope(),
          e = t.flags,
          s = t.inClassFieldInit;
        return (64 & e) > 0 || s || this.options.allowSuperOutsideMethod
      }, et.allowDirectSuper.get = function() {
        return (128 & this.currentThisScope().flags) > 0
      }, et.treatFunctionsAsVar.get = function() {
        return this.treatFunctionsAsVarInScope(this.currentScope())
      }, et.allowNewDotTarget.get = function() {
        var t = this.currentThisScope(),
          e = t.flags,
          s = t.inClassFieldInit;
        return (258 & e) > 0 || s
      }, et.inClassStaticBlock.get = function() {
        return (256 & this.currentVarScope().flags) > 0
      }, tt.extend = function() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        for (var s = this, i = 0; i < t.length; i++) s = t[i](s);
        return s
      }, tt.parse = function(t, e) {
        return new this(e, t).parse()
      }, tt.parseExpressionAt = function(t, e, s) {
        var i = new this(s, t, e);
        return i.nextToken(), i.parseExpression()
      }, tt.tokenizer = function(t, e) {
        return new this(e, t)
      }, Object.defineProperties(tt.prototype, et);
      var st = tt.prototype,
        it = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
      st.strictDirective = function(t) {
        if (this.options.ecmaVersion < 5) return !1;
        for (;;) {
          B.lastIndex = t, t += B.exec(this.input)[0].length;
          var e = it.exec(this.input.slice(t));
          if (!e) return !1;
          if ("use strict" === (e[1] || e[2])) {
            B.lastIndex = t + e[0].length;
            var s = B.exec(this.input),
              i = s.index + s[0].length,
              r = this.input.charAt(i);
            return ";" === r || "}" === r || L.test(s[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || "!" === r && "=" === this.input.charAt(i + 1))
          }
          t += e[0].length, B.lastIndex = t, t += B.exec(this.input)[0].length, ";" === this.input[t] && t++
        }
      }, st.eat = function(t) {
        return this.type === t && (this.next(), !0)
      }, st.isContextual = function(t) {
        return this.type === V.name && this.value === t && !this.containsEsc
      }, st.eatContextual = function(t) {
        return !!this.isContextual(t) && (this.next(), !0)
      }, st.expectContextual = function(t) {
        this.eatContextual(t) || this.unexpected()
      }, st.canInsertSemicolon = function() {
        return this.type === V.eof || this.type === V.braceR || L.test(this.input.slice(this.lastTokEnd, this.start))
      }, st.insertSemicolon = function() {
        if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
      }, st.semicolon = function() {
        this.eat(V.semi) || this.insertSemicolon() || this.unexpected()
      }, st.afterTrailingComma = function(t, e) {
        if (this.type === t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0
      }, st.expect = function(t) {
        this.eat(t) || this.unexpected()
      }, st.unexpected = function(t) {
        this.raise(null != t ? t : this.start, "Unexpected token")
      };
      var rt = function() {
        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
      };
      st.checkPatternErrors = function(t, e) {
        if (t) {
          t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
          var s = e ? t.parenthesizedAssign : t.parenthesizedBind;
          s > -1 && this.raiseRecoverable(s, e ? "Assigning to rvalue" : "Parenthesized pattern")
        }
      }, st.checkExpressionErrors = function(t, e) {
        if (!t) return !1;
        var s = t.shorthandAssign,
          i = t.doubleProto;
        if (!e) return s >= 0 || i >= 0;
        s >= 0 && this.raise(s, "Shorthand property assignments are valid only in destructuring patterns"), i >= 0 && this.raiseRecoverable(i, "Redefinition of __proto__ property")
      }, st.checkYieldAwaitInDefaultParams = function() {
        this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
      }, st.isSimpleAssignTarget = function(t) {
        return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type
      };
      var at = tt.prototype;
      at.parseTopLevel = function(t) {
        var e = Object.create(null);
        for (t.body || (t.body = []); this.type !== V.eof;) {
          var s = this.parseStatement(null, !0, e);
          t.body.push(s)
        }
        if (this.inModule)
          for (var i = 0, r = Object.keys(this.undefinedExports); i < r.length; i += 1) {
            var a = r[i];
            this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined")
          }
        return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program")
      };
      var nt = {
          kind: "loop"
        },
        ot = {
          kind: "switch"
        };
      at.isLet = function(t) {
        if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
        B.lastIndex = this.pos;
        var e = B.exec(this.input),
          s = this.pos + e[0].length,
          i = this.input.charCodeAt(s);
        if (91 === i || 92 === i) return !0;
        if (t) return !1;
        if (123 === i || i > 55295 && i < 56320) return !0;
        if (C(i, !0)) {
          for (var r = s + 1; E(i = this.input.charCodeAt(r), !0);) ++r;
          if (92 === i || i > 55295 && i < 56320) return !0;
          var a = this.input.slice(s, r);
          if (!b.test(a)) return !0
        }
        return !1
      }, at.isAsyncFunction = function() {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
        B.lastIndex = this.pos;
        var t, e = B.exec(this.input),
          s = this.pos + e[0].length;
        return !(L.test(this.input.slice(this.pos, s)) || "function" !== this.input.slice(s, s + 8) || s + 8 !== this.input.length && (E(t = this.input.charCodeAt(s + 8)) || t > 55295 && t < 56320))
      }, at.parseStatement = function(t, e, s) {
        var i, r = this.type,
          a = this.startNode();
        switch (this.isLet(t) && (r = V._var, i = "let"), r) {
          case V._break:
          case V._continue:
            return this.parseBreakContinueStatement(a, r.keyword);
          case V._debugger:
            return this.parseDebuggerStatement(a);
          case V._do:
            return this.parseDoStatement(a);
          case V._for:
            return this.parseForStatement(a);
          case V._function:
            return t && (this.strict || "if" !== t && "label" !== t) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(a, !1, !t);
          case V._class:
            return t && this.unexpected(), this.parseClass(a, !0);
          case V._if:
            return this.parseIfStatement(a);
          case V._return:
            return this.parseReturnStatement(a);
          case V._switch:
            return this.parseSwitchStatement(a);
          case V._throw:
            return this.parseThrowStatement(a);
          case V._try:
            return this.parseTryStatement(a);
          case V._const:
          case V._var:
            return i = i || this.value, t && "var" !== i && this.unexpected(), this.parseVarStatement(a, i);
          case V._while:
            return this.parseWhileStatement(a);
          case V._with:
            return this.parseWithStatement(a);
          case V.braceL:
            return this.parseBlock(!0, a);
          case V.semi:
            return this.parseEmptyStatement(a);
          case V._export:
          case V._import:
            if (this.options.ecmaVersion > 10 && r === V._import) {
              B.lastIndex = this.pos;
              var n = B.exec(this.input),
                o = this.pos + n[0].length,
                h = this.input.charCodeAt(o);
              if (40 === h || 46 === h) return this.parseExpressionStatement(a, this.parseExpression())
            }
            return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === V._import ? this.parseImport(a) : this.parseExport(a, s);
          default:
            if (this.isAsyncFunction()) return t && this.unexpected(), this.next(), this.parseFunctionStatement(a, !0, !t);
            var p = this.value,
              c = this.parseExpression();
            return r === V.name && "Identifier" === c.type && this.eat(V.colon) ? this.parseLabeledStatement(a, p, c, t) : this.parseExpressionStatement(a, c)
        }
      }, at.parseBreakContinueStatement = function(t, e) {
        var s = "break" === e;
        this.next(), this.eat(V.semi) || this.insertSemicolon() ? t.label = null : this.type !== V.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
        for (var i = 0; i < this.labels.length; ++i) {
          var r = this.labels[i];
          if (null == t.label || r.name === t.label.name) {
            if (null != r.kind && (s || "loop" === r.kind)) break;
            if (t.label && s) break
          }
        }
        return i === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, s ? "BreakStatement" : "ContinueStatement")
      }, at.parseDebuggerStatement = function(t) {
        return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement")
      }, at.parseDoStatement = function(t) {
        return this.next(), this.labels.push(nt), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(V._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(V.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement")
      }, at.parseForStatement = function(t) {
        this.next();
        var e = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
        if (this.labels.push(nt), this.enterScope(0), this.expect(V.parenL), this.type === V.semi) return e > -1 && this.unexpected(e), this.parseFor(t, null);
        var s = this.isLet();
        if (this.type === V._var || this.type === V._const || s) {
          var i = this.startNode(),
            r = s ? "let" : this.value;
          return this.next(), this.parseVar(i, !0, r), this.finishNode(i, "VariableDeclaration"), (this.type === V._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === i.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === V._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.parseForIn(t, i)) : (e > -1 && this.unexpected(e), this.parseFor(t, i))
        }
        var a = this.isContextual("let"),
          n = !1,
          o = this.containsEsc,
          h = new rt,
          p = this.start,
          c = e > -1 ? this.parseExprSubscripts(h, "await") : this.parseExpression(!0, h);
        return this.type === V._in || (n = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (e > -1 ? (this.type === V._in && this.unexpected(e), t.await = !0) : n && this.options.ecmaVersion >= 8 && (c.start !== p || o || "Identifier" !== c.type || "async" !== c.name ? this.options.ecmaVersion >= 9 && (t.await = !1) : this.unexpected()), a && n && this.raise(c.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(c, !1, h), this.checkLValPattern(c), this.parseForIn(t, c)) : (this.checkExpressionErrors(h, !0), e > -1 && this.unexpected(e), this.parseFor(t, c))
      }, at.parseFunctionStatement = function(t, e, s) {
        return this.next(), this.parseFunction(t, pt | (s ? 0 : ct), !1, e)
      }, at.parseIfStatement = function(t) {
        return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(V._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement")
      }, at.parseReturnStatement = function(t) {
        return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(V.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement")
      }, at.parseSwitchStatement = function(t) {
        var e;
        this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(V.braceL), this.labels.push(ot), this.enterScope(0);
        for (var s = !1; this.type !== V.braceR;)
          if (this.type === V._case || this.type === V._default) {
            var i = this.type === V._case;
            e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), i ? e.test = this.parseExpression() : (s && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), s = !0, e.test = null), this.expect(V.colon)
          } else e || this.unexpected(), e.consequent.push(this.parseStatement(null));
        return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement")
      }, at.parseThrowStatement = function(t) {
        return this.next(), L.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement")
      };
      var ht = [];
      at.parseCatchClauseParam = function() {
        var t = this.parseBindingAtom(),
          e = "Identifier" === t.type;
        return this.enterScope(e ? 32 : 0), this.checkLValPattern(t, e ? 4 : 2), this.expect(V.parenR), t
      }, at.parseTryStatement = function(t) {
        if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === V._catch) {
          var e = this.startNode();
          this.next(), this.eat(V.parenL) ? e.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0)), e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause")
        }
        return t.finalizer = this.eat(V._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement")
      }, at.parseVarStatement = function(t, e, s) {
        return this.next(), this.parseVar(t, !1, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration")
      }, at.parseWhileStatement = function(t) {
        return this.next(), t.test = this.parseParenExpression(), this.labels.push(nt), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement")
      }, at.parseWithStatement = function(t) {
        return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement")
      }, at.parseEmptyStatement = function(t) {
        return this.next(), this.finishNode(t, "EmptyStatement")
      }, at.parseLabeledStatement = function(t, e, s, i) {
        for (var r = 0, a = this.labels; r < a.length; r += 1) a[r].name === e && this.raise(s.start, "Label '" + e + "' is already declared");
        for (var n = this.type.isLoop ? "loop" : this.type === V._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
          var h = this.labels[o];
          if (h.statementStart !== t.start) break;
          h.statementStart = this.start, h.kind = n
        }
        return this.labels.push({
          name: e,
          kind: n,
          statementStart: this.start
        }), t.body = this.parseStatement(i ? -1 === i.indexOf("label") ? i + "label" : i : "label"), this.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement")
      }, at.parseExpressionStatement = function(t, e) {
        return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement")
      }, at.parseBlock = function(t, e, s) {
        for (void 0 === t && (t = !0), void 0 === e && (e = this.startNode()), e.body = [], this.expect(V.braceL), t && this.enterScope(0); this.type !== V.braceR;) {
          var i = this.parseStatement(null);
          e.body.push(i)
        }
        return s && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement")
      }, at.parseFor = function(t, e) {
        return t.init = e, this.expect(V.semi), t.test = this.type === V.semi ? null : this.parseExpression(), this.expect(V.semi), t.update = this.type === V.parenR ? null : this.parseExpression(), this.expect(V.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement")
      }, at.parseForIn = function(t, e) {
        var s = this.type === V._in;
        return this.next(), "VariableDeclaration" === e.type && null != e.declarations[0].init && (!s || this.options.ecmaVersion < 8 || this.strict || "var" !== e.kind || "Identifier" !== e.declarations[0].id.type) && this.raise(e.start, (s ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), t.left = e, t.right = s ? this.parseExpression() : this.parseMaybeAssign(), this.expect(V.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, s ? "ForInStatement" : "ForOfStatement")
      }, at.parseVar = function(t, e, s, i) {
        for (t.declarations = [], t.kind = s;;) {
          var r = this.startNode();
          if (this.parseVarId(r, s), this.eat(V.eq) ? r.init = this.parseMaybeAssign(e) : i || "const" !== s || this.type === V._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? i || "Identifier" === r.id.type || e && (this.type === V._in || this.isContextual("of")) ? r.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(V.comma)) break
        }
        return t
      }, at.parseVarId = function(t, e) {
        t.id = this.parseBindingAtom(), this.checkLValPattern(t.id, "var" === e ? 1 : 2, !1)
      };
      var pt = 1,
        ct = 2;

      function lt(t, e) {
        var s = e.key.name,
          i = t[s],
          r = "true";
        return "MethodDefinition" !== e.type || "get" !== e.kind && "set" !== e.kind || (r = (e.static ? "s" : "i") + e.kind), "iget" === i && "iset" === r || "iset" === i && "iget" === r || "sget" === i && "sset" === r || "sset" === i && "sget" === r ? (t[s] = "true", !1) : !!i || (t[s] = r, !1)
      }

      function ut(t, e) {
        var s = t.computed,
          i = t.key;
        return !s && ("Identifier" === i.type && i.name === e || "Literal" === i.type && i.value === e)
      }
      at.parseFunction = function(t, e, s, i, r) {
        this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !i) && (this.type === V.star && e & ct && this.unexpected(), t.generator = this.eat(V.star)), this.options.ecmaVersion >= 8 && (t.async = !!i), e & pt && (t.id = 4 & e && this.type !== V.name ? null : this.parseIdent(), !t.id || e & ct || this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
        var a = this.yieldPos,
          n = this.awaitPos,
          o = this.awaitIdentPos;
        return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Z(t.async, t.generator)), e & pt || (t.id = this.type === V.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, s, !1, r), this.yieldPos = a, this.awaitPos = n, this.awaitIdentPos = o, this.finishNode(t, e & pt ? "FunctionDeclaration" : "FunctionExpression")
      }, at.parseFunctionParams = function(t) {
        this.expect(V.parenL), t.params = this.parseBindingList(V.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
      }, at.parseClass = function(t, e) {
        this.next();
        var s = this.strict;
        this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
        var i = this.enterClassBody(),
          r = this.startNode(),
          a = !1;
        for (r.body = [], this.expect(V.braceL); this.type !== V.braceR;) {
          var n = this.parseClassElement(null !== t.superClass);
          n && (r.body.push(n), "MethodDefinition" === n.type && "constructor" === n.kind ? (a && this.raiseRecoverable(n.start, "Duplicate constructor in the same class"), a = !0) : n.key && "PrivateIdentifier" === n.key.type && lt(i, n) && this.raiseRecoverable(n.key.start, "Identifier '#" + n.key.name + "' has already been declared"))
        }
        return this.strict = s, this.next(), t.body = this.finishNode(r, "ClassBody"), this.exitClassBody(), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
      }, at.parseClassElement = function(t) {
        if (this.eat(V.semi)) return null;
        var e = this.options.ecmaVersion,
          s = this.startNode(),
          i = "",
          r = !1,
          a = !1,
          n = "method",
          o = !1;
        if (this.eatContextual("static")) {
          if (e >= 13 && this.eat(V.braceL)) return this.parseClassStaticBlock(s), s;
          this.isClassElementNameStart() || this.type === V.star ? o = !0 : i = "static"
        }
        if (s.static = o, !i && e >= 8 && this.eatContextual("async") && (!this.isClassElementNameStart() && this.type !== V.star || this.canInsertSemicolon() ? i = "async" : a = !0), !i && (e >= 9 || !a) && this.eat(V.star) && (r = !0), !i && !a && !r) {
          var h = this.value;
          (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? n = h : i = h)
        }
        if (i ? (s.computed = !1, s.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), s.key.name = i, this.finishNode(s.key, "Identifier")) : this.parseClassElementName(s), e < 13 || this.type === V.parenL || "method" !== n || r || a) {
          var p = !s.static && ut(s, "constructor"),
            c = p && t;
          p && "method" !== n && this.raise(s.key.start, "Constructor can't have get/set modifier"), s.kind = p ? "constructor" : n, this.parseClassMethod(s, r, a, c)
        } else this.parseClassField(s);
        return s
      }, at.isClassElementNameStart = function() {
        return this.type === V.name || this.type === V.privateId || this.type === V.num || this.type === V.string || this.type === V.bracketL || this.type.keyword
      }, at.parseClassElementName = function(t) {
        this.type === V.privateId ? ("constructor" === this.value && this.raise(this.start, "Classes can't have an element named '#constructor'"), t.computed = !1, t.key = this.parsePrivateIdent()) : this.parsePropertyName(t)
      }, at.parseClassMethod = function(t, e, s, i) {
        var r = t.key;
        "constructor" === t.kind ? (e && this.raise(r.start, "Constructor can't be a generator"), s && this.raise(r.start, "Constructor can't be an async method")) : t.static && ut(t, "prototype") && this.raise(r.start, "Classes may not have a static property named prototype");
        var a = t.value = this.parseMethod(e, s, i);
        return "get" === t.kind && 0 !== a.params.length && this.raiseRecoverable(a.start, "getter should have no params"), "set" === t.kind && 1 !== a.params.length && this.raiseRecoverable(a.start, "setter should have exactly one param"), "set" === t.kind && "RestElement" === a.params[0].type && this.raiseRecoverable(a.params[0].start, "Setter cannot use rest params"), this.finishNode(t, "MethodDefinition")
      }, at.parseClassField = function(t) {
        if (ut(t, "constructor") ? this.raise(t.key.start, "Classes can't have a field named 'constructor'") : t.static && ut(t, "prototype") && this.raise(t.key.start, "Classes can't have a static field named 'prototype'"), this.eat(V.eq)) {
          var e = this.currentThisScope(),
            s = e.inClassFieldInit;
          e.inClassFieldInit = !0, t.value = this.parseMaybeAssign(), e.inClassFieldInit = s
        } else t.value = null;
        return this.semicolon(), this.finishNode(t, "PropertyDefinition")
      }, at.parseClassStaticBlock = function(t) {
        t.body = [];
        var e = this.labels;
        for (this.labels = [], this.enterScope(320); this.type !== V.braceR;) {
          var s = this.parseStatement(null);
          t.body.push(s)
        }
        return this.next(), this.exitScope(), this.labels = e, this.finishNode(t, "StaticBlock")
      }, at.parseClassId = function(t, e) {
        this.type === V.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, 2, !1)) : (!0 === e && this.unexpected(), t.id = null)
      }, at.parseClassSuper = function(t) {
        t.superClass = this.eat(V._extends) ? this.parseExprSubscripts(null, !1) : null
      }, at.enterClassBody = function() {
        var t = {
          declared: Object.create(null),
          used: []
        };
        return this.privateNameStack.push(t), t.declared
      }, at.exitClassBody = function() {
        var t = this.privateNameStack.pop(),
          e = t.declared,
          s = t.used;
        if (this.options.checkPrivateFields)
          for (var i = this.privateNameStack.length, r = 0 === i ? null : this.privateNameStack[i - 1], a = 0; a < s.length; ++a) {
            var n = s[a];
            q(e, n.name) || (r ? r.used.push(n) : this.raiseRecoverable(n.start, "Private field '#" + n.name + "' must be declared in an enclosing class"))
          }
      }, at.parseExportAllDeclaration = function(t, e) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseModuleExportName(), this.checkExport(e, t.exported, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== V.string && this.unexpected(), t.source = this.parseExprAtom(), this.semicolon(), this.finishNode(t, "ExportAllDeclaration")
      }, at.parseExport = function(t, e) {
        if (this.next(), this.eat(V.star)) return this.parseExportAllDeclaration(t, e);
        if (this.eat(V._default)) return this.checkExport(e, "default", this.lastTokStart), t.declaration = this.parseExportDefaultDeclaration(), this.finishNode(t, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) t.declaration = this.parseExportDeclaration(t), "VariableDeclaration" === t.declaration.type ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id, t.declaration.id.start), t.specifiers = [], t.source = null;
        else {
          if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from")) this.type !== V.string && this.unexpected(), t.source = this.parseExprAtom();
          else {
            for (var s = 0, i = t.specifiers; s < i.length; s += 1) {
              var r = i[s];
              this.checkUnreserved(r.local), this.checkLocalExport(r.local), "Literal" === r.local.type && this.raise(r.local.start, "A string literal cannot be used as an exported binding without `from`.")
            }
            t.source = null
          }
          this.semicolon()
        }
        return this.finishNode(t, "ExportNamedDeclaration")
      }, at.parseExportDeclaration = function(t) {
        return this.parseStatement(null)
      }, at.parseExportDefaultDeclaration = function() {
        var t;
        if (this.type === V._function || (t = this.isAsyncFunction())) {
          var e = this.startNode();
          return this.next(), t && this.next(), this.parseFunction(e, 4 | pt, !1, t)
        }
        if (this.type === V._class) {
          var s = this.startNode();
          return this.parseClass(s, "nullableID")
        }
        var i = this.parseMaybeAssign();
        return this.semicolon(), i
      }, at.checkExport = function(t, e, s) {
        t && ("string" != typeof e && (e = "Identifier" === e.type ? e.name : e.value), q(t, e) && this.raiseRecoverable(s, "Duplicate export '" + e + "'"), t[e] = !0)
      }, at.checkPatternExport = function(t, e) {
        var s = e.type;
        if ("Identifier" === s) this.checkExport(t, e, e.start);
        else if ("ObjectPattern" === s)
          for (var i = 0, r = e.properties; i < r.length; i += 1) {
            var a = r[i];
            this.checkPatternExport(t, a)
          } else if ("ArrayPattern" === s)
            for (var n = 0, o = e.elements; n < o.length; n += 1) {
              var h = o[n];
              h && this.checkPatternExport(t, h)
            } else "Property" === s ? this.checkPatternExport(t, e.value) : "AssignmentPattern" === s ? this.checkPatternExport(t, e.left) : "RestElement" === s && this.checkPatternExport(t, e.argument)
      }, at.checkVariableExport = function(t, e) {
        if (t)
          for (var s = 0, i = e; s < i.length; s += 1) {
            var r = i[s];
            this.checkPatternExport(t, r.id)
          }
      }, at.shouldParseExportStatement = function() {
        return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
      }, at.parseExportSpecifier = function(t) {
        var e = this.startNode();
        return e.local = this.parseModuleExportName(), e.exported = this.eatContextual("as") ? this.parseModuleExportName() : e.local, this.checkExport(t, e.exported, e.exported.start), this.finishNode(e, "ExportSpecifier")
      }, at.parseExportSpecifiers = function(t) {
        var e = [],
          s = !0;
        for (this.expect(V.braceL); !this.eat(V.braceR);) {
          if (s) s = !1;
          else if (this.expect(V.comma), this.afterTrailingComma(V.braceR)) break;
          e.push(this.parseExportSpecifier(t))
        }
        return e
      }, at.parseImport = function(t) {
        return this.next(), this.type === V.string ? (t.specifiers = ht, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === V.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration")
      }, at.parseImportSpecifier = function() {
        var t = this.startNode();
        return t.imported = this.parseModuleExportName(), this.eatContextual("as") ? t.local = this.parseIdent() : (this.checkUnreserved(t.imported), t.local = t.imported), this.checkLValSimple(t.local, 2), this.finishNode(t, "ImportSpecifier")
      }, at.parseImportDefaultSpecifier = function() {
        var t = this.startNode();
        return t.local = this.parseIdent(), this.checkLValSimple(t.local, 2), this.finishNode(t, "ImportDefaultSpecifier")
      }, at.parseImportNamespaceSpecifier = function() {
        var t = this.startNode();
        return this.next(), this.expectContextual("as"), t.local = this.parseIdent(), this.checkLValSimple(t.local, 2), this.finishNode(t, "ImportNamespaceSpecifier")
      }, at.parseImportSpecifiers = function() {
        var t = [],
          e = !0;
        if (this.type === V.name && (t.push(this.parseImportDefaultSpecifier()), !this.eat(V.comma))) return t;
        if (this.type === V.star) return t.push(this.parseImportNamespaceSpecifier()), t;
        for (this.expect(V.braceL); !this.eat(V.braceR);) {
          if (e) e = !1;
          else if (this.expect(V.comma), this.afterTrailingComma(V.braceR)) break;
          t.push(this.parseImportSpecifier())
        }
        return t
      }, at.parseModuleExportName = function() {
        if (this.options.ecmaVersion >= 13 && this.type === V.string) {
          var t = this.parseLiteral(this.value);
          return X.test(t.value) && this.raise(t.start, "An export name cannot include a lone surrogate."), t
        }
        return this.parseIdent(!0)
      }, at.adaptDirectivePrologue = function(t) {
        for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) t[e].directive = t[e].expression.raw.slice(1, -1)
      }, at.isDirectiveCandidate = function(t) {
        return this.options.ecmaVersion >= 5 && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && ('"' === this.input[t.start] || "'" === this.input[t.start])
      };
      var dt = tt.prototype;
      dt.toAssignable = function(t, e, s) {
        if (this.options.ecmaVersion >= 6 && t) switch (t.type) {
          case "Identifier":
            this.inAsync && "await" === t.name && this.raise(t.start, "Cannot use 'await' as identifier inside an async function");
            break;
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            break;
          case "ObjectExpression":
            t.type = "ObjectPattern", s && this.checkPatternErrors(s, !0);
            for (var i = 0, r = t.properties; i < r.length; i += 1) {
              var a = r[i];
              this.toAssignable(a, e), "RestElement" !== a.type || "ArrayPattern" !== a.argument.type && "ObjectPattern" !== a.argument.type || this.raise(a.argument.start, "Unexpected token")
            }
            break;
          case "Property":
            "init" !== t.kind && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);
            break;
          case "ArrayExpression":
            t.type = "ArrayPattern", s && this.checkPatternErrors(s, !0), this.toAssignableList(t.elements, e);
            break;
          case "SpreadElement":
            t.type = "RestElement", this.toAssignable(t.argument, e), "AssignmentPattern" === t.argument.type && this.raise(t.argument.start, "Rest elements cannot have a default value");
            break;
          case "AssignmentExpression":
            "=" !== t.operator && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
            break;
          case "ParenthesizedExpression":
            this.toAssignable(t.expression, e, s);
            break;
          case "ChainExpression":
            this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
            break;
          case "MemberExpression":
            if (!e) break;
          default:
            this.raise(t.start, "Assigning to rvalue")
        } else s && this.checkPatternErrors(s, !0);
        return t
      }, dt.toAssignableList = function(t, e) {
        for (var s = t.length, i = 0; i < s; i++) {
          var r = t[i];
          r && this.toAssignable(r, e)
        }
        if (s) {
          var a = t[s - 1];
          6 === this.options.ecmaVersion && e && a && "RestElement" === a.type && "Identifier" !== a.argument.type && this.unexpected(a.argument.start)
        }
        return t
      }, dt.parseSpread = function(t) {
        var e = this.startNode();
        return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement")
      }, dt.parseRestBinding = function() {
        var t = this.startNode();
        return this.next(), 6 === this.options.ecmaVersion && this.type !== V.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement")
      }, dt.parseBindingAtom = function() {
        if (this.options.ecmaVersion >= 6) switch (this.type) {
          case V.bracketL:
            var t = this.startNode();
            return this.next(), t.elements = this.parseBindingList(V.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
          case V.braceL:
            return this.parseObj(!0)
        }
        return this.parseIdent()
      }, dt.parseBindingList = function(t, e, s, i) {
        for (var r = [], a = !0; !this.eat(t);)
          if (a ? a = !1 : this.expect(V.comma), e && this.type === V.comma) r.push(null);
          else {
            if (s && this.afterTrailingComma(t)) break;
            if (this.type === V.ellipsis) {
              var n = this.parseRestBinding();
              this.parseBindingListItem(n), r.push(n), this.type === V.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(t);
              break
            }
            r.push(this.parseAssignableListItem(i))
          } return r
      }, dt.parseAssignableListItem = function(t) {
        var e = this.parseMaybeDefault(this.start, this.startLoc);
        return this.parseBindingListItem(e), e
      }, dt.parseBindingListItem = function(t) {
        return t
      }, dt.parseMaybeDefault = function(t, e, s) {
        if (s = s || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(V.eq)) return s;
        var i = this.startNodeAt(t, e);
        return i.left = s, i.right = this.parseMaybeAssign(), this.finishNode(i, "AssignmentPattern")
      }, dt.checkLValSimple = function(t, e, s) {
        void 0 === e && (e = 0);
        var i = 0 !== e;
        switch (t.type) {
          case "Identifier":
            this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (i ? "Binding " : "Assigning to ") + t.name + " in strict mode"), i && (2 === e && "let" === t.name && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), s && (q(s, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), s[t.name] = !0), 5 !== e && this.declareName(t.name, e, t.start));
            break;
          case "ChainExpression":
            this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
            break;
          case "MemberExpression":
            i && this.raiseRecoverable(t.start, "Binding member expression");
            break;
          case "ParenthesizedExpression":
            return i && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, s);
          default:
            this.raise(t.start, (i ? "Binding" : "Assigning to") + " rvalue")
        }
      }, dt.checkLValPattern = function(t, e, s) {
        switch (void 0 === e && (e = 0), t.type) {
          case "ObjectPattern":
            for (var i = 0, r = t.properties; i < r.length; i += 1) {
              var a = r[i];
              this.checkLValInnerPattern(a, e, s)
            }
            break;
          case "ArrayPattern":
            for (var n = 0, o = t.elements; n < o.length; n += 1) {
              var h = o[n];
              h && this.checkLValInnerPattern(h, e, s)
            }
            break;
          default:
            this.checkLValSimple(t, e, s)
        }
      }, dt.checkLValInnerPattern = function(t, e, s) {
        switch (void 0 === e && (e = 0), t.type) {
          case "Property":
            this.checkLValInnerPattern(t.value, e, s);
            break;
          case "AssignmentPattern":
            this.checkLValPattern(t.left, e, s);
            break;
          case "RestElement":
            this.checkLValPattern(t.argument, e, s);
            break;
          default:
            this.checkLValPattern(t, e, s)
        }
      };
      var ft = function(t, e, s, i, r) {
          this.token = t, this.isExpr = !!e, this.preserveSpace = !!s, this.override = i, this.generator = !!r
        },
        mt = {
          b_stat: new ft("{", !1),
          b_expr: new ft("{", !0),
          b_tmpl: new ft("${", !1),
          p_stat: new ft("(", !1),
          p_expr: new ft("(", !0),
          q_tmpl: new ft("`", !0, !0, (function(t) {
            return t.tryReadTemplateToken()
          })),
          f_stat: new ft("function", !1),
          f_expr: new ft("function", !0),
          f_expr_gen: new ft("function", !0, !1, null, !0),
          f_gen: new ft("function", !1, !1, null, !0)
        },
        xt = tt.prototype;
      xt.initialContext = function() {
        return [mt.b_stat]
      }, xt.curContext = function() {
        return this.context[this.context.length - 1]
      }, xt.braceIsBlock = function(t) {
        var e = this.curContext();
        return e === mt.f_expr || e === mt.f_stat || (t !== V.colon || e !== mt.b_stat && e !== mt.b_expr ? t === V._return || t === V.name && this.exprAllowed ? L.test(this.input.slice(this.lastTokEnd, this.start)) : t === V._else || t === V.semi || t === V.eof || t === V.parenR || t === V.arrow || (t === V.braceL ? e === mt.b_stat : t !== V._var && t !== V._const && t !== V.name && !this.exprAllowed) : !e.isExpr)
      }, xt.inGeneratorContext = function() {
        for (var t = this.context.length - 1; t >= 1; t--) {
          var e = this.context[t];
          if ("function" === e.token) return e.generator
        }
        return !1
      }, xt.updateContext = function(t) {
        var e, s = this.type;
        s.keyword && t === V.dot ? this.exprAllowed = !1 : (e = s.updateContext) ? e.call(this, t) : this.exprAllowed = s.beforeExpr
      }, xt.overrideContext = function(t) {
        this.curContext() !== t && (this.context[this.context.length - 1] = t)
      }, V.parenR.updateContext = V.braceR.updateContext = function() {
        if (1 !== this.context.length) {
          var t = this.context.pop();
          t === mt.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr
        } else this.exprAllowed = !0
      }, V.braceL.updateContext = function(t) {
        this.context.push(this.braceIsBlock(t) ? mt.b_stat : mt.b_expr), this.exprAllowed = !0
      }, V.dollarBraceL.updateContext = function() {
        this.context.push(mt.b_tmpl), this.exprAllowed = !0
      }, V.parenL.updateContext = function(t) {
        var e = t === V._if || t === V._for || t === V._with || t === V._while;
        this.context.push(e ? mt.p_stat : mt.p_expr), this.exprAllowed = !0
      }, V.incDec.updateContext = function() {}, V._function.updateContext = V._class.updateContext = function(t) {
        !t.beforeExpr || t === V._else || t === V.semi && this.curContext() !== mt.p_stat || t === V._return && L.test(this.input.slice(this.lastTokEnd, this.start)) || (t === V.colon || t === V.braceL) && this.curContext() === mt.b_stat ? this.context.push(mt.f_stat) : this.context.push(mt.f_expr), this.exprAllowed = !1
      }, V.colon.updateContext = function() {
        "function" === this.curContext().token && this.context.pop(), this.exprAllowed = !0
      }, V.backQuote.updateContext = function() {
        this.curContext() === mt.q_tmpl ? this.context.pop() : this.context.push(mt.q_tmpl), this.exprAllowed = !1
      }, V.star.updateContext = function(t) {
        if (t === V._function) {
          var e = this.context.length - 1;
          this.context[e] === mt.f_expr ? this.context[e] = mt.f_expr_gen : this.context[e] = mt.f_gen
        }
        this.exprAllowed = !0
      }, V.name.updateContext = function(t) {
        var e = !1;
        this.options.ecmaVersion >= 6 && t !== V.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e
      };
      var gt = tt.prototype;

      function vt(t) {
        return "Identifier" === t.type || "ParenthesizedExpression" === t.type && vt(t.expression)
      }

      function yt(t) {
        return "MemberExpression" === t.type && "PrivateIdentifier" === t.property.type || "ChainExpression" === t.type && yt(t.expression) || "ParenthesizedExpression" === t.type && yt(t.expression)
      }
      gt.checkPropClash = function(t, e, s) {
        if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === t.type || this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
          var i, r = t.key;
          switch (r.type) {
            case "Identifier":
              i = r.name;
              break;
            case "Literal":
              i = String(r.value);
              break;
            default:
              return
          }
          var a = t.kind;
          if (this.options.ecmaVersion >= 6) "__proto__" === i && "init" === a && (e.proto && (s ? s.doubleProto < 0 && (s.doubleProto = r.start) : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), e.proto = !0);
          else {
            var n = e[i = "$" + i];
            n ? ("init" === a ? this.strict && n.init || n.get || n.set : n.init || n[a]) && this.raiseRecoverable(r.start, "Redefinition of property") : n = e[i] = {
              init: !1,
              get: !1,
              set: !1
            }, n[a] = !0
          }
        }
      }, gt.parseExpression = function(t, e) {
        var s = this.start,
          i = this.startLoc,
          r = this.parseMaybeAssign(t, e);
        if (this.type === V.comma) {
          var a = this.startNodeAt(s, i);
          for (a.expressions = [r]; this.eat(V.comma);) a.expressions.push(this.parseMaybeAssign(t, e));
          return this.finishNode(a, "SequenceExpression")
        }
        return r
      }, gt.parseMaybeAssign = function(t, e, s) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(t);
          this.exprAllowed = !1
        }
        var i = !1,
          r = -1,
          a = -1,
          n = -1;
        e ? (r = e.parenthesizedAssign, a = e.trailingComma, n = e.doubleProto, e.parenthesizedAssign = e.trailingComma = -1) : (e = new rt, i = !0);
        var o = this.start,
          h = this.startLoc;
        this.type !== V.parenL && this.type !== V.name || (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = "await" === t);
        var p = this.parseMaybeConditional(t, e);
        if (s && (p = s.call(this, p, o, h)), this.type.isAssign) {
          var c = this.startNodeAt(o, h);
          return c.operator = this.value, this.type === V.eq && (p = this.toAssignable(p, !1, e)), i || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= p.start && (e.shorthandAssign = -1), this.type === V.eq ? this.checkLValPattern(p) : this.checkLValSimple(p), c.left = p, this.next(), c.right = this.parseMaybeAssign(t), n > -1 && (e.doubleProto = n), this.finishNode(c, "AssignmentExpression")
        }
        return i && this.checkExpressionErrors(e, !0), r > -1 && (e.parenthesizedAssign = r), a > -1 && (e.trailingComma = a), p
      }, gt.parseMaybeConditional = function(t, e) {
        var s = this.start,
          i = this.startLoc,
          r = this.parseExprOps(t, e);
        if (this.checkExpressionErrors(e)) return r;
        if (this.eat(V.question)) {
          var a = this.startNodeAt(s, i);
          return a.test = r, a.consequent = this.parseMaybeAssign(), this.expect(V.colon), a.alternate = this.parseMaybeAssign(t), this.finishNode(a, "ConditionalExpression")
        }
        return r
      }, gt.parseExprOps = function(t, e) {
        var s = this.start,
          i = this.startLoc,
          r = this.parseMaybeUnary(e, !1, !1, t);
        return this.checkExpressionErrors(e) || r.start === s && "ArrowFunctionExpression" === r.type ? r : this.parseExprOp(r, s, i, -1, t)
      }, gt.parseExprOp = function(t, e, s, i, r) {
        var a = this.type.binop;
        if (null != a && (!r || this.type !== V._in) && a > i) {
          var n = this.type === V.logicalOR || this.type === V.logicalAND,
            o = this.type === V.coalesce;
          o && (a = V.logicalAND.binop);
          var h = this.value;
          this.next();
          var p = this.start,
            c = this.startLoc,
            l = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, r), p, c, a, r),
            u = this.buildBinary(e, s, t, l, h, n || o);
          return (n && this.type === V.coalesce || o && (this.type === V.logicalOR || this.type === V.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(u, e, s, i, r)
        }
        return t
      }, gt.buildBinary = function(t, e, s, i, r, a) {
        "PrivateIdentifier" === i.type && this.raise(i.start, "Private identifier can only be left side of binary expression");
        var n = this.startNodeAt(t, e);
        return n.left = s, n.operator = r, n.right = i, this.finishNode(n, a ? "LogicalExpression" : "BinaryExpression")
      }, gt.parseMaybeUnary = function(t, e, s, i) {
        var r, a = this.start,
          n = this.startLoc;
        if (this.isContextual("await") && this.canAwait) r = this.parseAwait(i), e = !0;
        else if (this.type.prefix) {
          var o = this.startNode(),
            h = this.type === V.incDec;
          o.operator = this.value, o.prefix = !0, this.next(), o.argument = this.parseMaybeUnary(null, !0, h, i), this.checkExpressionErrors(t, !0), h ? this.checkLValSimple(o.argument) : this.strict && "delete" === o.operator && vt(o.argument) ? this.raiseRecoverable(o.start, "Deleting local variable in strict mode") : "delete" === o.operator && yt(o.argument) ? this.raiseRecoverable(o.start, "Private fields can not be deleted") : e = !0, r = this.finishNode(o, h ? "UpdateExpression" : "UnaryExpression")
        } else if (e || this.type !== V.privateId) {
          if (r = this.parseExprSubscripts(t, i), this.checkExpressionErrors(t)) return r;
          for (; this.type.postfix && !this.canInsertSemicolon();) {
            var p = this.startNodeAt(a, n);
            p.operator = this.value, p.prefix = !1, p.argument = r, this.checkLValSimple(r), this.next(), r = this.finishNode(p, "UpdateExpression")
          }
        } else(i || 0 === this.privateNameStack.length) && this.options.checkPrivateFields && this.unexpected(), r = this.parsePrivateIdent(), this.type !== V._in && this.unexpected();
        return s || !this.eat(V.starstar) ? r : e ? void this.unexpected(this.lastTokStart) : this.buildBinary(a, n, r, this.parseMaybeUnary(null, !1, !1, i), "**", !1)
      }, gt.parseExprSubscripts = function(t, e) {
        var s = this.start,
          i = this.startLoc,
          r = this.parseExprAtom(t, e);
        if ("ArrowFunctionExpression" === r.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return r;
        var a = this.parseSubscripts(r, s, i, !1, e);
        return t && "MemberExpression" === a.type && (t.parenthesizedAssign >= a.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= a.start && (t.parenthesizedBind = -1), t.trailingComma >= a.start && (t.trailingComma = -1)), a
      }, gt.parseSubscripts = function(t, e, s, i, r) {
        for (var a = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start == 5 && this.potentialArrowAt === t.start, n = !1;;) {
          var o = this.parseSubscript(t, e, s, i, a, n, r);
          if (o.optional && (n = !0), o === t || "ArrowFunctionExpression" === o.type) {
            if (n) {
              var h = this.startNodeAt(e, s);
              h.expression = o, o = this.finishNode(h, "ChainExpression")
            }
            return o
          }
          t = o
        }
      }, gt.shouldParseAsyncArrow = function() {
        return !this.canInsertSemicolon() && this.eat(V.arrow)
      }, gt.parseSubscriptAsyncArrow = function(t, e, s, i) {
        return this.parseArrowExpression(this.startNodeAt(t, e), s, !0, i)
      }, gt.parseSubscript = function(t, e, s, i, r, a, n) {
        var o = this.options.ecmaVersion >= 11,
          h = o && this.eat(V.questionDot);
        i && h && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var p = this.eat(V.bracketL);
        if (p || h && this.type !== V.parenL && this.type !== V.backQuote || this.eat(V.dot)) {
          var c = this.startNodeAt(e, s);
          c.object = t, p ? (c.property = this.parseExpression(), this.expect(V.bracketR)) : this.type === V.privateId && "Super" !== t.type ? c.property = this.parsePrivateIdent() : c.property = this.parseIdent("never" !== this.options.allowReserved), c.computed = !!p, o && (c.optional = h), t = this.finishNode(c, "MemberExpression")
        } else if (!i && this.eat(V.parenL)) {
          var l = new rt,
            u = this.yieldPos,
            d = this.awaitPos,
            f = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var m = this.parseExprList(V.parenR, this.options.ecmaVersion >= 8, !1, l);
          if (r && !h && this.shouldParseAsyncArrow()) return this.checkPatternErrors(l, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = u, this.awaitPos = d, this.awaitIdentPos = f, this.parseSubscriptAsyncArrow(e, s, m, n);
          this.checkExpressionErrors(l, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = d || this.awaitPos, this.awaitIdentPos = f || this.awaitIdentPos;
          var x = this.startNodeAt(e, s);
          x.callee = t, x.arguments = m, o && (x.optional = h), t = this.finishNode(x, "CallExpression")
        } else if (this.type === V.backQuote) {
          (h || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var g = this.startNodeAt(e, s);
          g.tag = t, g.quasi = this.parseTemplate({
            isTagged: !0
          }), t = this.finishNode(g, "TaggedTemplateExpression")
        }
        return t
      }, gt.parseExprAtom = function(t, e, s) {
        this.type === V.slash && this.readRegexp();
        var i, r = this.potentialArrowAt === this.start;
        switch (this.type) {
          case V._super:
            return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), i = this.startNode(), this.next(), this.type !== V.parenL || this.allowDirectSuper || this.raise(i.start, "super() call outside constructor of a subclass"), this.type !== V.dot && this.type !== V.bracketL && this.type !== V.parenL && this.unexpected(), this.finishNode(i, "Super");
          case V._this:
            return i = this.startNode(), this.next(), this.finishNode(i, "ThisExpression");
          case V.name:
            var a = this.start,
              n = this.startLoc,
              o = this.containsEsc,
              h = this.parseIdent(!1);
            if (this.options.ecmaVersion >= 8 && !o && "async" === h.name && !this.canInsertSemicolon() && this.eat(V._function)) return this.overrideContext(mt.f_expr), this.parseFunction(this.startNodeAt(a, n), 0, !1, !0, e);
            if (r && !this.canInsertSemicolon()) {
              if (this.eat(V.arrow)) return this.parseArrowExpression(this.startNodeAt(a, n), [h], !1, e);
              if (this.options.ecmaVersion >= 8 && "async" === h.name && this.type === V.name && !o && (!this.potentialArrowInForAwait || "of" !== this.value || this.containsEsc)) return h = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(V.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(a, n), [h], !0, e)
            }
            return h;
          case V.regexp:
            var p = this.value;
            return (i = this.parseLiteral(p.value)).regex = {
              pattern: p.pattern,
              flags: p.flags
            }, i;
          case V.num:
          case V.string:
            return this.parseLiteral(this.value);
          case V._null:
          case V._true:
          case V._false:
            return (i = this.startNode()).value = this.type === V._null ? null : this.type === V._true, i.raw = this.type.keyword, this.next(), this.finishNode(i, "Literal");
          case V.parenL:
            var c = this.start,
              l = this.parseParenAndDistinguishExpression(r, e);
            return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(l) && (t.parenthesizedAssign = c), t.parenthesizedBind < 0 && (t.parenthesizedBind = c)), l;
          case V.bracketL:
            return i = this.startNode(), this.next(), i.elements = this.parseExprList(V.bracketR, !0, !0, t), this.finishNode(i, "ArrayExpression");
          case V.braceL:
            return this.overrideContext(mt.b_expr), this.parseObj(!1, t);
          case V._function:
            return i = this.startNode(), this.next(), this.parseFunction(i, 0);
          case V._class:
            return this.parseClass(this.startNode(), !1);
          case V._new:
            return this.parseNew();
          case V.backQuote:
            return this.parseTemplate();
          case V._import:
            return this.options.ecmaVersion >= 11 ? this.parseExprImport(s) : this.unexpected();
          default:
            return this.parseExprAtomDefault()
        }
      }, gt.parseExprAtomDefault = function() {
        this.unexpected()
      }, gt.parseExprImport = function(t) {
        var e = this.startNode();
        if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === V.parenL && !t) return this.parseDynamicImport(e);
        if (this.type === V.dot) {
          var s = this.startNodeAt(e.start, e.loc && e.loc.start);
          return s.name = "import", e.meta = this.finishNode(s, "Identifier"), this.parseImportMeta(e)
        }
        this.unexpected()
      }, gt.parseDynamicImport = function(t) {
        if (this.next(), t.source = this.parseMaybeAssign(), !this.eat(V.parenR)) {
          var e = this.start;
          this.eat(V.comma) && this.eat(V.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e)
        }
        return this.finishNode(t, "ImportExpression")
      }, gt.parseImportMeta = function(t) {
        this.next();
        var e = this.containsEsc;
        return t.property = this.parseIdent(!0), "meta" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), "module" === this.options.sourceType || this.options.allowImportExportEverywhere || this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty")
      }, gt.parseLiteral = function(t) {
        var e = this.startNode();
        return e.value = t, e.raw = this.input.slice(this.start, this.end), 110 === e.raw.charCodeAt(e.raw.length - 1) && (e.bigint = e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal")
      }, gt.parseParenExpression = function() {
        this.expect(V.parenL);
        var t = this.parseExpression();
        return this.expect(V.parenR), t
      }, gt.shouldParseArrow = function(t) {
        return !this.canInsertSemicolon()
      }, gt.parseParenAndDistinguishExpression = function(t, e) {
        var s, i = this.start,
          r = this.startLoc,
          a = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          this.next();
          var n, o = this.start,
            h = this.startLoc,
            p = [],
            c = !0,
            l = !1,
            u = new rt,
            d = this.yieldPos,
            f = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== V.parenR;) {
            if (c ? c = !1 : this.expect(V.comma), a && this.afterTrailingComma(V.parenR, !0)) {
              l = !0;
              break
            }
            if (this.type === V.ellipsis) {
              n = this.start, p.push(this.parseParenItem(this.parseRestBinding())), this.type === V.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
              break
            }
            p.push(this.parseMaybeAssign(!1, u, this.parseParenItem))
          }
          var m = this.lastTokEnd,
            x = this.lastTokEndLoc;
          if (this.expect(V.parenR), t && this.shouldParseArrow(p) && this.eat(V.arrow)) return this.checkPatternErrors(u, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = d, this.awaitPos = f, this.parseParenArrowList(i, r, p, e);
          p.length && !l || this.unexpected(this.lastTokStart), n && this.unexpected(n), this.checkExpressionErrors(u, !0), this.yieldPos = d || this.yieldPos, this.awaitPos = f || this.awaitPos, p.length > 1 ? ((s = this.startNodeAt(o, h)).expressions = p, this.finishNodeAt(s, "SequenceExpression", m, x)) : s = p[0]
        } else s = this.parseParenExpression();
        if (this.options.preserveParens) {
          var g = this.startNodeAt(i, r);
          return g.expression = s, this.finishNode(g, "ParenthesizedExpression")
        }
        return s
      }, gt.parseParenItem = function(t) {
        return t
      }, gt.parseParenArrowList = function(t, e, s, i) {
        return this.parseArrowExpression(this.startNodeAt(t, e), s, !1, i)
      };
      var bt = [];
      gt.parseNew = function() {
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var t = this.startNode();
        if (this.next(), this.options.ecmaVersion >= 6 && this.type === V.dot) {
          var e = this.startNodeAt(t.start, t.loc && t.loc.start);
          e.name = "new", t.meta = this.finishNode(e, "Identifier"), this.next();
          var s = this.containsEsc;
          return t.property = this.parseIdent(!0), "target" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), s && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty")
        }
        var i = this.start,
          r = this.startLoc;
        return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), i, r, !0, !1), this.eat(V.parenL) ? t.arguments = this.parseExprList(V.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = bt, this.finishNode(t, "NewExpression")
      }, gt.parseTemplateElement = function(t) {
        var e = t.isTagged,
          s = this.startNode();
        return this.type === V.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), s.value = {
          raw: this.value.replace(/\r\n?/g, "\n"),
          cooked: null
        }) : s.value = {
          raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
          cooked: this.value
        }, this.next(), s.tail = this.type === V.backQuote, this.finishNode(s, "TemplateElement")
      }, gt.parseTemplate = function(t) {
        void 0 === t && (t = {});
        var e = t.isTagged;
        void 0 === e && (e = !1);
        var s = this.startNode();
        this.next(), s.expressions = [];
        var i = this.parseTemplateElement({
          isTagged: e
        });
        for (s.quasis = [i]; !i.tail;) this.type === V.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(V.dollarBraceL), s.expressions.push(this.parseExpression()), this.expect(V.braceR), s.quasis.push(i = this.parseTemplateElement({
          isTagged: e
        }));
        return this.next(), this.finishNode(s, "TemplateLiteral")
      }, gt.isAsyncProp = function(t) {
        return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === V.name || this.type === V.num || this.type === V.string || this.type === V.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === V.star) && !L.test(this.input.slice(this.lastTokEnd, this.start))
      }, gt.parseObj = function(t, e) {
        var s = this.startNode(),
          i = !0,
          r = {};
        for (s.properties = [], this.next(); !this.eat(V.braceR);) {
          if (i) i = !1;
          else if (this.expect(V.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(V.braceR)) break;
          var a = this.parseProperty(t, e);
          t || this.checkPropClash(a, r, e), s.properties.push(a)
        }
        return this.finishNode(s, t ? "ObjectPattern" : "ObjectExpression")
      }, gt.parseProperty = function(t, e) {
        var s, i, r, a, n = this.startNode();
        if (this.options.ecmaVersion >= 9 && this.eat(V.ellipsis)) return t ? (n.argument = this.parseIdent(!1), this.type === V.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(n, "RestElement")) : (n.argument = this.parseMaybeAssign(!1, e), this.type === V.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(n, "SpreadElement"));
        this.options.ecmaVersion >= 6 && (n.method = !1, n.shorthand = !1, (t || e) && (r = this.start, a = this.startLoc), t || (s = this.eat(V.star)));
        var o = this.containsEsc;
        return this.parsePropertyName(n), !t && !o && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(n) ? (i = !0, s = this.options.ecmaVersion >= 9 && this.eat(V.star), this.parsePropertyName(n)) : i = !1, this.parsePropertyValue(n, t, s, i, r, a, e, o), this.finishNode(n, "Property")
      }, gt.parseGetterSetter = function(t) {
        t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);
        var e = "get" === t.kind ? 0 : 1;
        if (t.value.params.length !== e) {
          var s = t.value.start;
          "get" === t.kind ? this.raiseRecoverable(s, "getter should have no params") : this.raiseRecoverable(s, "setter should have exactly one param")
        } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
      }, gt.parsePropertyValue = function(t, e, s, i, r, a, n, o) {
        (s || i) && this.type === V.colon && this.unexpected(), this.eat(V.colon) ? (t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, n), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === V.parenL ? (e && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(s, i)) : e || o || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === V.comma || this.type === V.braceR || this.type === V.eq ? this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? ((s || i) && this.unexpected(), this.checkUnreserved(t.key), "await" !== t.key.name || this.awaitIdentPos || (this.awaitIdentPos = r), t.kind = "init", e ? t.value = this.parseMaybeDefault(r, a, this.copyNode(t.key)) : this.type === V.eq && n ? (n.shorthandAssign < 0 && (n.shorthandAssign = this.start), t.value = this.parseMaybeDefault(r, a, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.shorthand = !0) : this.unexpected() : ((s || i) && this.unexpected(), this.parseGetterSetter(t))
      }, gt.parsePropertyName = function(t) {
        if (this.options.ecmaVersion >= 6) {
          if (this.eat(V.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(V.bracketR), t.key;
          t.computed = !1
        }
        return t.key = this.type === V.num || this.type === V.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
      }, gt.initFunction = function(t) {
        t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1)
      }, gt.parseMethod = function(t, e, s) {
        var i = this.startNode(),
          r = this.yieldPos,
          a = this.awaitPos,
          n = this.awaitIdentPos;
        return this.initFunction(i), this.options.ecmaVersion >= 6 && (i.generator = t), this.options.ecmaVersion >= 8 && (i.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | Z(e, i.generator) | (s ? 128 : 0)), this.expect(V.parenL), i.params = this.parseBindingList(V.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(i, !1, !0, !1), this.yieldPos = r, this.awaitPos = a, this.awaitIdentPos = n, this.finishNode(i, "FunctionExpression")
      }, gt.parseArrowExpression = function(t, e, s, i) {
        var r = this.yieldPos,
          a = this.awaitPos,
          n = this.awaitIdentPos;
        return this.enterScope(16 | Z(s, !1)), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!s), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1, i), this.yieldPos = r, this.awaitPos = a, this.awaitIdentPos = n, this.finishNode(t, "ArrowFunctionExpression")
      }, gt.parseFunctionBody = function(t, e, s, i) {
        var r = e && this.type !== V.braceL,
          a = this.strict,
          n = !1;
        if (r) t.body = this.parseMaybeAssign(i), t.expression = !0, this.checkParams(t, !1);
        else {
          var o = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
          a && !o || (n = this.strictDirective(this.end)) && o && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
          var h = this.labels;
          this.labels = [], n && (this.strict = !0), this.checkParams(t, !a && !n && !e && !s && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, 5), t.body = this.parseBlock(!1, void 0, n && !a), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = h
        }
        this.exitScope()
      }, gt.isSimpleParamList = function(t) {
        for (var e = 0, s = t; e < s.length; e += 1)
          if ("Identifier" !== s[e].type) return !1;
        return !0
      }, gt.checkParams = function(t, e) {
        for (var s = Object.create(null), i = 0, r = t.params; i < r.length; i += 1) {
          var a = r[i];
          this.checkLValInnerPattern(a, 1, e ? null : s)
        }
      }, gt.parseExprList = function(t, e, s, i) {
        for (var r = [], a = !0; !this.eat(t);) {
          if (a) a = !1;
          else if (this.expect(V.comma), e && this.afterTrailingComma(t)) break;
          var n = void 0;
          s && this.type === V.comma ? n = null : this.type === V.ellipsis ? (n = this.parseSpread(i), i && this.type === V.comma && i.trailingComma < 0 && (i.trailingComma = this.start)) : n = this.parseMaybeAssign(!1, i), r.push(n)
        }
        return r
      }, gt.checkUnreserved = function(t) {
        var e = t.start,
          s = t.end,
          i = t.name;
        this.inGenerator && "yield" === i && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === i && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && "arguments" === i && this.raiseRecoverable(e, "Cannot use 'arguments' in class field initializer"), !this.inClassStaticBlock || "arguments" !== i && "await" !== i || this.raise(e, "Cannot use " + i + " in class static initialization block"), this.keywords.test(i) && this.raise(e, "Unexpected keyword '" + i + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(e, s).indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(i) && (this.inAsync || "await" !== i || this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + i + "' is reserved"))
      }, gt.parseIdent = function(t) {
        var e = this.parseIdentNode();
        return this.next(!!t), this.finishNode(e, "Identifier"), t || (this.checkUnreserved(e), "await" !== e.name || this.awaitIdentPos || (this.awaitIdentPos = e.start)), e
      }, gt.parseIdentNode = function() {
        var t = this.startNode();
        return this.type === V.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, "class" !== t.name && "function" !== t.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop(), this.type = V.name) : this.unexpected(), t
      }, gt.parsePrivateIdent = function() {
        var t = this.startNode();
        return this.type === V.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (0 === this.privateNameStack.length ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t
      }, gt.parseYield = function(t) {
        this.yieldPos || (this.yieldPos = this.start);
        var e = this.startNode();
        return this.next(), this.type === V.semi || this.canInsertSemicolon() || this.type !== V.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(V.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression")
      }, gt.parseAwait = function(t) {
        this.awaitPos || (this.awaitPos = this.start);
        var e = this.startNode();
        return this.next(), e.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(e, "AwaitExpression")
      };
      var kt = tt.prototype;
      kt.raise = function(t, e) {
        var s = J(this.input, t);
        e += " (" + s.line + ":" + s.column + ")";
        var i = new SyntaxError(e);
        throw i.pos = t, i.loc = s, i.raisedAt = this.pos, i
      }, kt.raiseRecoverable = kt.raise, kt.curPosition = function() {
        if (this.options.locations) return new K(this.curLine, this.pos - this.lineStart)
      };
      var _t = tt.prototype,
        St = function(t) {
          this.flags = t, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1
        };
      _t.enterScope = function(t) {
        this.scopeStack.push(new St(t))
      }, _t.exitScope = function() {
        this.scopeStack.pop()
      }, _t.treatFunctionsAsVarInScope = function(t) {
        return 2 & t.flags || !this.inModule && 1 & t.flags
      }, _t.declareName = function(t, e, s) {
        var i = !1;
        if (2 === e) {
          var r = this.currentScope();
          i = r.lexical.indexOf(t) > -1 || r.functions.indexOf(t) > -1 || r.var.indexOf(t) > -1, r.lexical.push(t), this.inModule && 1 & r.flags && delete this.undefinedExports[t]
        } else if (4 === e) this.currentScope().lexical.push(t);
        else if (3 === e) {
          var a = this.currentScope();
          i = this.treatFunctionsAsVar ? a.lexical.indexOf(t) > -1 : a.lexical.indexOf(t) > -1 || a.var.indexOf(t) > -1, a.functions.push(t)
        } else
          for (var n = this.scopeStack.length - 1; n >= 0; --n) {
            var o = this.scopeStack[n];
            if (o.lexical.indexOf(t) > -1 && !(32 & o.flags && o.lexical[0] === t) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(t) > -1) {
              i = !0;
              break
            }
            if (o.var.push(t), this.inModule && 1 & o.flags && delete this.undefinedExports[t], 259 & o.flags) break
          }
        i && this.raiseRecoverable(s, "Identifier '" + t + "' has already been declared")
      }, _t.checkLocalExport = function(t) {
        -1 === this.scopeStack[0].lexical.indexOf(t.name) && -1 === this.scopeStack[0].var.indexOf(t.name) && (this.undefinedExports[t.name] = t)
      }, _t.currentScope = function() {
        return this.scopeStack[this.scopeStack.length - 1]
      }, _t.currentVarScope = function() {
        for (var t = this.scopeStack.length - 1;; t--) {
          var e = this.scopeStack[t];
          if (259 & e.flags) return e
        }
      }, _t.currentThisScope = function() {
        for (var t = this.scopeStack.length - 1;; t--) {
          var e = this.scopeStack[t];
          if (259 & e.flags && !(16 & e.flags)) return e
        }
      };
      var Ct = function(t, e, s) {
          this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new Q(t, s)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0])
        },
        Et = tt.prototype;

      function wt(t, e, s, i) {
        return t.type = e, t.end = s, this.options.locations && (t.loc.end = i), this.options.ranges && (t.range[1] = s), t
      }
      Et.startNode = function() {
        return new Ct(this, this.start, this.startLoc)
      }, Et.startNodeAt = function(t, e) {
        return new Ct(this, t, e)
      }, Et.finishNode = function(t, e) {
        return wt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
      }, Et.finishNodeAt = function(t, e, s, i) {
        return wt.call(this, t, e, s, i)
      }, Et.copyNode = function(t) {
        var e = new Ct(this, t.start, this.startLoc);
        for (var s in t) e[s] = t[s];
        return e
      };
      var At, It, Pt, Nt, Tt = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
        Vt = Tt + " Extended_Pictographic",
        Lt = Vt + " EBase EComp EMod EPres ExtPict",
        Rt = {
          9: Tt,
          10: Vt,
          11: Vt,
          12: Lt,
          13: Lt,
          14: Lt
        },
        Ot = {
          9: "",
          10: "",
          11: "",
          12: "",
          13: "",
          14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
        },
        Dt = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
        Mt = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
        Bt = Mt + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
        Ft = Bt + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
        jt = Ft + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
        Ut = jt + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
        qt = {
          9: Mt,
          10: Bt,
          11: Ft,
          12: jt,
          13: Ut,
          14: Ut + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz"
        },
        Gt = {};
      for (At = 0, It = [9, 10, 11, 12, 13, 14]; At < It.length; At += 1) Nt = void 0, (Nt = Gt[Pt = It[At]] = {
        binary: z(Rt[Pt] + " " + Dt),
        binaryOfStrings: z(Ot[Pt]),
        nonBinary: {
          General_Category: z(Dt),
          Script: z(qt[Pt])
        }
      }).nonBinary.Script_Extensions = Nt.nonBinary.Script, Nt.nonBinary.gc = Nt.nonBinary.General_Category, Nt.nonBinary.sc = Nt.nonBinary.Script, Nt.nonBinary.scx = Nt.nonBinary.Script_Extensions;
      var Ht = tt.prototype,
        zt = function(t, e) {
          this.parent = t, this.base = e || this
        };
      zt.prototype.separatedFrom = function(t) {
        for (var e = this; e; e = e.parent)
          for (var s = t; s; s = s.parent)
            if (e.base === s.base && e !== s) return !0;
        return !1
      }, zt.prototype.sibling = function() {
        return new zt(this.parent, this.base)
      };
      var Wt = function(t) {
        this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Gt[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null
      };

      function Xt(t) {
        return 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || t >= 91 && t <= 94 || t >= 123 && t <= 125
      }

      function Kt(t) {
        return t >= 65 && t <= 90 || t >= 97 && t <= 122
      }

      function Qt(t) {
        return Kt(t) || 95 === t
      }

      function Jt(t) {
        return Qt(t) || $t(t)
      }

      function $t(t) {
        return t >= 48 && t <= 57
      }

      function Yt(t) {
        return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
      }

      function Zt(t) {
        return t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : t - 48
      }

      function te(t) {
        return t >= 48 && t <= 55
      }
      Wt.prototype.reset = function(t, e, s) {
        var i = -1 !== s.indexOf("v"),
          r = -1 !== s.indexOf("u");
        this.start = 0 | t, this.source = e + "", this.flags = s, i && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = r && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = r && this.parser.options.ecmaVersion >= 9)
      }, Wt.prototype.raise = function(t) {
        this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t)
      }, Wt.prototype.at = function(t, e) {
        void 0 === e && (e = !1);
        var s = this.source,
          i = s.length;
        if (t >= i) return -1;
        var r = s.charCodeAt(t);
        if (!e && !this.switchU || r <= 55295 || r >= 57344 || t + 1 >= i) return r;
        var a = s.charCodeAt(t + 1);
        return a >= 56320 && a <= 57343 ? (r << 10) + a - 56613888 : r
      }, Wt.prototype.nextIndex = function(t, e) {
        void 0 === e && (e = !1);
        var s = this.source,
          i = s.length;
        if (t >= i) return i;
        var r, a = s.charCodeAt(t);
        return !e && !this.switchU || a <= 55295 || a >= 57344 || t + 1 >= i || (r = s.charCodeAt(t + 1)) < 56320 || r > 57343 ? t + 1 : t + 2
      }, Wt.prototype.current = function(t) {
        return void 0 === t && (t = !1), this.at(this.pos, t)
      }, Wt.prototype.lookahead = function(t) {
        return void 0 === t && (t = !1), this.at(this.nextIndex(this.pos, t), t)
      }, Wt.prototype.advance = function(t) {
        void 0 === t && (t = !1), this.pos = this.nextIndex(this.pos, t)
      }, Wt.prototype.eat = function(t, e) {
        return void 0 === e && (e = !1), this.current(e) === t && (this.advance(e), !0)
      }, Wt.prototype.eatChars = function(t, e) {
        void 0 === e && (e = !1);
        for (var s = this.pos, i = 0, r = t; i < r.length; i += 1) {
          var a = r[i],
            n = this.at(s, e);
          if (-1 === n || n !== a) return !1;
          s = this.nextIndex(s, e)
        }
        return this.pos = s, !0
      }, Ht.validateRegExpFlags = function(t) {
        for (var e = t.validFlags, s = t.flags, i = !1, r = !1, a = 0; a < s.length; a++) {
          var n = s.charAt(a); - 1 === e.indexOf(n) && this.raise(t.start, "Invalid regular expression flag"), s.indexOf(n, a + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag"), "u" === n && (i = !0), "v" === n && (r = !0)
        }
        this.options.ecmaVersion >= 15 && i && r && this.raise(t.start, "Invalid regular expression flag")
      }, Ht.validateRegExpPattern = function(t) {
        this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && function(t) {
          for (var e in t) return !0;
          return !1
        }(t.groupNames) && (t.switchN = !0, this.regexp_pattern(t))
      }, Ht.regexp_pattern = function(t) {
        t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames = Object.create(null), t.backReferenceNames.length = 0, t.branchID = null, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(41) && t.raise("Unmatched ')'"), (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
        for (var e = 0, s = t.backReferenceNames; e < s.length; e += 1) {
          var i = s[e];
          t.groupNames[i] || t.raise("Invalid named capture referenced")
        }
      }, Ht.regexp_disjunction = function(t) {
        var e = this.options.ecmaVersion >= 16;
        for (e && (t.branchID = new zt(t.branchID, null)), this.regexp_alternative(t); t.eat(124);) e && (t.branchID = t.branchID.sibling()), this.regexp_alternative(t);
        e && (t.branchID = t.branchID.parent), this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(123) && t.raise("Lone quantifier brackets")
      }, Ht.regexp_alternative = function(t) {
        for (; t.pos < t.source.length && this.regexp_eatTerm(t););
      }, Ht.regexp_eatTerm = function(t) {
        return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : !!(t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) && (this.regexp_eatQuantifier(t), !0)
      }, Ht.regexp_eatAssertion = function(t) {
        var e = t.pos;
        if (t.lastAssertionIsQuantifiable = !1, t.eat(94) || t.eat(36)) return !0;
        if (t.eat(92)) {
          if (t.eat(66) || t.eat(98)) return !0;
          t.pos = e
        }
        if (t.eat(40) && t.eat(63)) {
          var s = !1;
          if (this.options.ecmaVersion >= 9 && (s = t.eat(60)), t.eat(61) || t.eat(33)) return this.regexp_disjunction(t), t.eat(41) || t.raise("Unterminated group"), t.lastAssertionIsQuantifiable = !s, !0
        }
        return t.pos = e, !1
      }, Ht.regexp_eatQuantifier = function(t, e) {
        return void 0 === e && (e = !1), !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
      }, Ht.regexp_eatQuantifierPrefix = function(t, e) {
        return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e)
      }, Ht.regexp_eatBracedQuantifier = function(t, e) {
        var s = t.pos;
        if (t.eat(123)) {
          var i = 0,
            r = -1;
          if (this.regexp_eatDecimalDigits(t) && (i = t.lastIntValue, t.eat(44) && this.regexp_eatDecimalDigits(t) && (r = t.lastIntValue), t.eat(125))) return -1 !== r && r < i && !e && t.raise("numbers out of order in {} quantifier"), !0;
          t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = s
        }
        return !1
      }, Ht.regexp_eatAtom = function(t) {
        return this.regexp_eatPatternCharacters(t) || t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t)
      }, Ht.regexp_eatReverseSolidusAtomEscape = function(t) {
        var e = t.pos;
        if (t.eat(92)) {
          if (this.regexp_eatAtomEscape(t)) return !0;
          t.pos = e
        }
        return !1
      }, Ht.regexp_eatUncapturingGroup = function(t) {
        var e = t.pos;
        if (t.eat(40)) {
          if (t.eat(63) && t.eat(58)) {
            if (this.regexp_disjunction(t), t.eat(41)) return !0;
            t.raise("Unterminated group")
          }
          t.pos = e
        }
        return !1
      }, Ht.regexp_eatCapturingGroup = function(t) {
        if (t.eat(40)) {
          if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : 63 === t.current() && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(41)) return t.numCapturingParens += 1, !0;
          t.raise("Unterminated group")
        }
        return !1
      }, Ht.regexp_eatExtendedAtom = function(t) {
        return t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t)
      }, Ht.regexp_eatInvalidBracedQuantifier = function(t) {
        return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1
      }, Ht.regexp_eatSyntaxCharacter = function(t) {
        var e = t.current();
        return !!Xt(e) && (t.lastIntValue = e, t.advance(), !0)
      }, Ht.regexp_eatPatternCharacters = function(t) {
        for (var e = t.pos, s = 0; - 1 !== (s = t.current()) && !Xt(s);) t.advance();
        return t.pos !== e
      }, Ht.regexp_eatExtendedPatternCharacter = function(t) {
        var e = t.current();
        return !(-1 === e || 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || 91 === e || 94 === e || 124 === e || (t.advance(), 0))
      }, Ht.regexp_groupSpecifier = function(t) {
        if (t.eat(63)) {
          this.regexp_eatGroupName(t) || t.raise("Invalid group");
          var e = this.options.ecmaVersion >= 16,
            s = t.groupNames[t.lastStringValue];
          if (s)
            if (e)
              for (var i = 0, r = s; i < r.length; i += 1) r[i].separatedFrom(t.branchID) || t.raise("Duplicate capture group name");
            else t.raise("Duplicate capture group name");
          e ? (s || (t.groupNames[t.lastStringValue] = [])).push(t.branchID) : t.groupNames[t.lastStringValue] = !0
        }
      }, Ht.regexp_eatGroupName = function(t) {
        if (t.lastStringValue = "", t.eat(60)) {
          if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
          t.raise("Invalid capture group name")
        }
        return !1
      }, Ht.regexp_eatRegExpIdentifierName = function(t) {
        if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
          for (t.lastStringValue += W(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t);) t.lastStringValue += W(t.lastIntValue);
          return !0
        }
        return !1
      }, Ht.regexp_eatRegExpIdentifierStart = function(t) {
        var e = t.pos,
          s = this.options.ecmaVersion >= 11,
          i = t.current(s);
        return t.advance(s), 92 === i && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (i = t.lastIntValue),
          function(t) {
            return C(t, !0) || 36 === t || 95 === t
          }(i) ? (t.lastIntValue = i, !0) : (t.pos = e, !1)
      }, Ht.regexp_eatRegExpIdentifierPart = function(t) {
        var e = t.pos,
          s = this.options.ecmaVersion >= 11,
          i = t.current(s);
        return t.advance(s), 92 === i && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (i = t.lastIntValue),
          function(t) {
            return E(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t
          }(i) ? (t.lastIntValue = i, !0) : (t.pos = e, !1)
      }, Ht.regexp_eatAtomEscape = function(t) {
        return !!(this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t)) || (t.switchU && (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1)
      }, Ht.regexp_eatBackReference = function(t) {
        var e = t.pos;
        if (this.regexp_eatDecimalEscape(t)) {
          var s = t.lastIntValue;
          if (t.switchU) return s > t.maxBackReference && (t.maxBackReference = s), !0;
          if (s <= t.numCapturingParens) return !0;
          t.pos = e
        }
        return !1
      }, Ht.regexp_eatKGroupName = function(t) {
        if (t.eat(107)) {
          if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue), !0;
          t.raise("Invalid named reference")
        }
        return !1
      }, Ht.regexp_eatCharacterEscape = function(t) {
        return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t)
      }, Ht.regexp_eatCControlLetter = function(t) {
        var e = t.pos;
        if (t.eat(99)) {
          if (this.regexp_eatControlLetter(t)) return !0;
          t.pos = e
        }
        return !1
      }, Ht.regexp_eatZero = function(t) {
        return 48 === t.current() && !$t(t.lookahead()) && (t.lastIntValue = 0, t.advance(), !0)
      }, Ht.regexp_eatControlEscape = function(t) {
        var e = t.current();
        return 116 === e ? (t.lastIntValue = 9, t.advance(), !0) : 110 === e ? (t.lastIntValue = 10, t.advance(), !0) : 118 === e ? (t.lastIntValue = 11, t.advance(), !0) : 102 === e ? (t.lastIntValue = 12, t.advance(), !0) : 114 === e && (t.lastIntValue = 13, t.advance(), !0)
      }, Ht.regexp_eatControlLetter = function(t) {
        var e = t.current();
        return !!Kt(e) && (t.lastIntValue = e % 32, t.advance(), !0)
      }, Ht.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
        void 0 === e && (e = !1);
        var s, i = t.pos,
          r = e || t.switchU;
        if (t.eat(117)) {
          if (this.regexp_eatFixedHexDigits(t, 4)) {
            var a = t.lastIntValue;
            if (r && a >= 55296 && a <= 56319) {
              var n = t.pos;
              if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) {
                var o = t.lastIntValue;
                if (o >= 56320 && o <= 57343) return t.lastIntValue = 1024 * (a - 55296) + (o - 56320) + 65536, !0
              }
              t.pos = n, t.lastIntValue = a
            }
            return !0
          }
          if (r && t.eat(123) && this.regexp_eatHexDigits(t) && t.eat(125) && (s = t.lastIntValue) >= 0 && s <= 1114111) return !0;
          r && t.raise("Invalid unicode escape"), t.pos = i
        }
        return !1
      }, Ht.regexp_eatIdentityEscape = function(t) {
        if (t.switchU) return !!this.regexp_eatSyntaxCharacter(t) || !!t.eat(47) && (t.lastIntValue = 47, !0);
        var e = t.current();
        return !(99 === e || t.switchN && 107 === e || (t.lastIntValue = e, t.advance(), 0))
      }, Ht.regexp_eatDecimalEscape = function(t) {
        t.lastIntValue = 0;
        var e = t.current();
        if (e >= 49 && e <= 57) {
          do {
            t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance()
          } while ((e = t.current()) >= 48 && e <= 57);
          return !0
        }
        return !1
      }, Ht.regexp_eatCharacterClassEscape = function(t) {
        var e = t.current();
        if (function(t) {
            return 100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t
          }(e)) return t.lastIntValue = -1, t.advance(), 1;
        var s = !1;
        if (t.switchU && this.options.ecmaVersion >= 9 && ((s = 80 === e) || 112 === e)) {
          var i;
          if (t.lastIntValue = -1, t.advance(), t.eat(123) && (i = this.regexp_eatUnicodePropertyValueExpression(t)) && t.eat(125)) return s && 2 === i && t.raise("Invalid property name"), i;
          t.raise("Invalid property name")
        }
        return 0
      }, Ht.regexp_eatUnicodePropertyValueExpression = function(t) {
        var e = t.pos;
        if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
          var s = t.lastStringValue;
          if (this.regexp_eatUnicodePropertyValue(t)) {
            var i = t.lastStringValue;
            return this.regexp_validateUnicodePropertyNameAndValue(t, s, i), 1
          }
        }
        if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
          var r = t.lastStringValue;
          return this.regexp_validateUnicodePropertyNameOrValue(t, r)
        }
        return 0
      }, Ht.regexp_validateUnicodePropertyNameAndValue = function(t, e, s) {
        q(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(s) || t.raise("Invalid property value")
      }, Ht.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
        return t.unicodeProperties.binary.test(e) ? 1 : t.switchV && t.unicodeProperties.binaryOfStrings.test(e) ? 2 : void t.raise("Invalid property name")
      }, Ht.regexp_eatUnicodePropertyName = function(t) {
        var e = 0;
        for (t.lastStringValue = ""; Qt(e = t.current());) t.lastStringValue += W(e), t.advance();
        return "" !== t.lastStringValue
      }, Ht.regexp_eatUnicodePropertyValue = function(t) {
        var e = 0;
        for (t.lastStringValue = ""; Jt(e = t.current());) t.lastStringValue += W(e), t.advance();
        return "" !== t.lastStringValue
      }, Ht.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
        return this.regexp_eatUnicodePropertyValue(t)
      }, Ht.regexp_eatCharacterClass = function(t) {
        if (t.eat(91)) {
          var e = t.eat(94),
            s = this.regexp_classContents(t);
          return t.eat(93) || t.raise("Unterminated character class"), e && 2 === s && t.raise("Negated character class may contain strings"), !0
        }
        return !1
      }, Ht.regexp_classContents = function(t) {
        return 93 === t.current() ? 1 : t.switchV ? this.regexp_classSetExpression(t) : (this.regexp_nonEmptyClassRanges(t), 1)
      }, Ht.regexp_nonEmptyClassRanges = function(t) {
        for (; this.regexp_eatClassAtom(t);) {
          var e = t.lastIntValue;
          if (t.eat(45) && this.regexp_eatClassAtom(t)) {
            var s = t.lastIntValue;
            !t.switchU || -1 !== e && -1 !== s || t.raise("Invalid character class"), -1 !== e && -1 !== s && e > s && t.raise("Range out of order in character class")
          }
        }
      }, Ht.regexp_eatClassAtom = function(t) {
        var e = t.pos;
        if (t.eat(92)) {
          if (this.regexp_eatClassEscape(t)) return !0;
          if (t.switchU) {
            var s = t.current();
            (99 === s || te(s)) && t.raise("Invalid class escape"), t.raise("Invalid escape")
          }
          t.pos = e
        }
        var i = t.current();
        return 93 !== i && (t.lastIntValue = i, t.advance(), !0)
      }, Ht.regexp_eatClassEscape = function(t) {
        var e = t.pos;
        if (t.eat(98)) return t.lastIntValue = 8, !0;
        if (t.switchU && t.eat(45)) return t.lastIntValue = 45, !0;
        if (!t.switchU && t.eat(99)) {
          if (this.regexp_eatClassControlLetter(t)) return !0;
          t.pos = e
        }
        return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
      }, Ht.regexp_classSetExpression = function(t) {
        var e, s = 1;
        if (this.regexp_eatClassSetRange(t));
        else if (e = this.regexp_eatClassSetOperand(t)) {
          2 === e && (s = 2);
          for (var i = t.pos; t.eatChars([38, 38]);) 38 !== t.current() && (e = this.regexp_eatClassSetOperand(t)) ? 2 !== e && (s = 1) : t.raise("Invalid character in character class");
          if (i !== t.pos) return s;
          for (; t.eatChars([45, 45]);) this.regexp_eatClassSetOperand(t) || t.raise("Invalid character in character class");
          if (i !== t.pos) return s
        } else t.raise("Invalid character in character class");
        for (;;)
          if (!this.regexp_eatClassSetRange(t)) {
            if (!(e = this.regexp_eatClassSetOperand(t))) return s;
            2 === e && (s = 2)
          }
      }, Ht.regexp_eatClassSetRange = function(t) {
        var e = t.pos;
        if (this.regexp_eatClassSetCharacter(t)) {
          var s = t.lastIntValue;
          if (t.eat(45) && this.regexp_eatClassSetCharacter(t)) {
            var i = t.lastIntValue;
            return -1 !== s && -1 !== i && s > i && t.raise("Range out of order in character class"), !0
          }
          t.pos = e
        }
        return !1
      }, Ht.regexp_eatClassSetOperand = function(t) {
        return this.regexp_eatClassSetCharacter(t) ? 1 : this.regexp_eatClassStringDisjunction(t) || this.regexp_eatNestedClass(t)
      }, Ht.regexp_eatNestedClass = function(t) {
        var e = t.pos;
        if (t.eat(91)) {
          var s = t.eat(94),
            i = this.regexp_classContents(t);
          if (t.eat(93)) return s && 2 === i && t.raise("Negated character class may contain strings"), i;
          t.pos = e
        }
        if (t.eat(92)) {
          var r = this.regexp_eatCharacterClassEscape(t);
          if (r) return r;
          t.pos = e
        }
        return null
      }, Ht.regexp_eatClassStringDisjunction = function(t) {
        var e = t.pos;
        if (t.eatChars([92, 113])) {
          if (t.eat(123)) {
            var s = this.regexp_classStringDisjunctionContents(t);
            if (t.eat(125)) return s
          } else t.raise("Invalid escape");
          t.pos = e
        }
        return null
      }, Ht.regexp_classStringDisjunctionContents = function(t) {
        for (var e = this.regexp_classString(t); t.eat(124);) 2 === this.regexp_classString(t) && (e = 2);
        return e
      }, Ht.regexp_classString = function(t) {
        for (var e = 0; this.regexp_eatClassSetCharacter(t);) e++;
        return 1 === e ? 1 : 2
      }, Ht.regexp_eatClassSetCharacter = function(t) {
        var e = t.pos;
        if (t.eat(92)) return !(!this.regexp_eatCharacterEscape(t) && !this.regexp_eatClassSetReservedPunctuator(t) && (t.eat(98) ? (t.lastIntValue = 8, 0) : (t.pos = e, 1)));
        var s = t.current();
        return !(s < 0 || s === t.lookahead() && function(t) {
          return 33 === t || t >= 35 && t <= 38 || t >= 42 && t <= 44 || 46 === t || t >= 58 && t <= 64 || 94 === t || 96 === t || 126 === t
        }(s) || function(t) {
          return 40 === t || 41 === t || 45 === t || 47 === t || t >= 91 && t <= 93 || t >= 123 && t <= 125
        }(s) || (t.advance(), t.lastIntValue = s, 0))
      }, Ht.regexp_eatClassSetReservedPunctuator = function(t) {
        var e = t.current();
        return !! function(t) {
          return 33 === t || 35 === t || 37 === t || 38 === t || 44 === t || 45 === t || t >= 58 && t <= 62 || 64 === t || 96 === t || 126 === t
        }(e) && (t.lastIntValue = e, t.advance(), !0)
      }, Ht.regexp_eatClassControlLetter = function(t) {
        var e = t.current();
        return !(!$t(e) && 95 !== e || (t.lastIntValue = e % 32, t.advance(), 0))
      }, Ht.regexp_eatHexEscapeSequence = function(t) {
        var e = t.pos;
        if (t.eat(120)) {
          if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
          t.switchU && t.raise("Invalid escape"), t.pos = e
        }
        return !1
      }, Ht.regexp_eatDecimalDigits = function(t) {
        var e = t.pos,
          s = 0;
        for (t.lastIntValue = 0; $t(s = t.current());) t.lastIntValue = 10 * t.lastIntValue + (s - 48), t.advance();
        return t.pos !== e
      }, Ht.regexp_eatHexDigits = function(t) {
        var e = t.pos,
          s = 0;
        for (t.lastIntValue = 0; Yt(s = t.current());) t.lastIntValue = 16 * t.lastIntValue + Zt(s), t.advance();
        return t.pos !== e
      }, Ht.regexp_eatLegacyOctalEscapeSequence = function(t) {
        if (this.regexp_eatOctalDigit(t)) {
          var e = t.lastIntValue;
          if (this.regexp_eatOctalDigit(t)) {
            var s = t.lastIntValue;
            e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = 64 * e + 8 * s + t.lastIntValue : t.lastIntValue = 8 * e + s
          } else t.lastIntValue = e;
          return !0
        }
        return !1
      }, Ht.regexp_eatOctalDigit = function(t) {
        var e = t.current();
        return te(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1)
      }, Ht.regexp_eatFixedHexDigits = function(t, e) {
        var s = t.pos;
        t.lastIntValue = 0;
        for (var i = 0; i < e; ++i) {
          var r = t.current();
          if (!Yt(r)) return t.pos = s, !1;
          t.lastIntValue = 16 * t.lastIntValue + Zt(r), t.advance()
        }
        return !0
      };
      var ee = function(t) {
          this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new Q(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end])
        },
        se = tt.prototype;

      function ie(t) {
        return "function" != typeof BigInt ? null : BigInt(t.replace(/_/g, ""))
      }
      se.next = function(t) {
        !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new ee(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
      }, se.getToken = function() {
        return this.next(), new ee(this)
      }, "undefined" != typeof Symbol && (se[Symbol.iterator] = function() {
        var t = this;
        return {
          next: function() {
            var e = t.getToken();
            return {
              done: e.type === V.eof,
              value: e
            }
          }
        }
      }), se.nextToken = function() {
        var t = this.curContext();
        return t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(V.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos())
      }, se.readToken = function(t) {
        return C(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t)
      }, se.fullCharCodeAtPos = function() {
        var t = this.input.charCodeAt(this.pos);
        if (t <= 55295 || t >= 56320) return t;
        var e = this.input.charCodeAt(this.pos + 1);
        return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888
      }, se.skipBlockComment = function() {
        var t = this.options.onComment && this.curPosition(),
          e = this.pos,
          s = this.input.indexOf("*/", this.pos += 2);
        if (-1 === s && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations)
          for (var i = void 0, r = e;
            (i = D(this.input, r, this.pos)) > -1;) ++this.curLine, r = this.lineStart = i;
        this.options.onComment && this.options.onComment(!0, this.input.slice(e + 2, s), e, this.pos, t, this.curPosition())
      }, se.skipLineComment = function(t) {
        for (var e = this.pos, s = this.options.onComment && this.curPosition(), i = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !O(i);) i = this.input.charCodeAt(++this.pos);
        this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, s, this.curPosition())
      }, se.skipSpace = function() {
        t: for (; this.pos < this.input.length;) {
          var t = this.input.charCodeAt(this.pos);
          switch (t) {
            case 32:
            case 160:
              ++this.pos;
              break;
            case 13:
              10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
            case 10:
            case 8232:
            case 8233:
              ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
              break;
            case 47:
              switch (this.input.charCodeAt(this.pos + 1)) {
                case 42:
                  this.skipBlockComment();
                  break;
                case 47:
                  this.skipLineComment(2);
                  break;
                default:
                  break t
              }
              break;
            default:
              if (!(t > 8 && t < 14 || t >= 5760 && M.test(String.fromCharCode(t)))) break t;
              ++this.pos
          }
        }
      }, se.finishToken = function(t, e) {
        this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var s = this.type;
        this.type = t, this.value = e, this.updateContext(s)
      }, se.readToken_dot = function() {
        var t = this.input.charCodeAt(this.pos + 1);
        if (t >= 48 && t <= 57) return this.readNumber(!0);
        var e = this.input.charCodeAt(this.pos + 2);
        return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(V.ellipsis)) : (++this.pos, this.finishToken(V.dot))
      }, se.readToken_slash = function() {
        var t = this.input.charCodeAt(this.pos + 1);
        return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(V.assign, 2) : this.finishOp(V.slash, 1)
      }, se.readToken_mult_modulo_exp = function(t) {
        var e = this.input.charCodeAt(this.pos + 1),
          s = 1,
          i = 42 === t ? V.star : V.modulo;
        return this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++s, i = V.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e ? this.finishOp(V.assign, s + 1) : this.finishOp(i, s)
      }, se.readToken_pipe_amp = function(t) {
        var e = this.input.charCodeAt(this.pos + 1);
        return e === t ? this.options.ecmaVersion >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(V.assign, 3) : this.finishOp(124 === t ? V.logicalOR : V.logicalAND, 2) : 61 === e ? this.finishOp(V.assign, 2) : this.finishOp(124 === t ? V.bitwiseOR : V.bitwiseAND, 1)
      }, se.readToken_caret = function() {
        return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(V.assign, 2) : this.finishOp(V.bitwiseXOR, 1)
      }, se.readToken_plus_min = function(t) {
        var e = this.input.charCodeAt(this.pos + 1);
        return e === t ? 45 !== e || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !L.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(V.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === e ? this.finishOp(V.assign, 2) : this.finishOp(V.plusMin, 1)
      }, se.readToken_lt_gt = function(t) {
        var e = this.input.charCodeAt(this.pos + 1),
          s = 1;
        return e === t ? (s = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + s) ? this.finishOp(V.assign, s + 1) : this.finishOp(V.bitShift, s)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (s = 2), this.finishOp(V.relational, s)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
      }, se.readToken_eq_excl = function(t) {
        var e = this.input.charCodeAt(this.pos + 1);
        return 61 === e ? this.finishOp(V.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(V.arrow)) : this.finishOp(61 === t ? V.eq : V.prefix, 1)
      }, se.readToken_question = function() {
        var t = this.options.ecmaVersion;
        if (t >= 11) {
          var e = this.input.charCodeAt(this.pos + 1);
          if (46 === e) {
            var s = this.input.charCodeAt(this.pos + 2);
            if (s < 48 || s > 57) return this.finishOp(V.questionDot, 2)
          }
          if (63 === e) return t >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(V.assign, 3) : this.finishOp(V.coalesce, 2)
        }
        return this.finishOp(V.question, 1)
      }, se.readToken_numberSign = function() {
        var t = 35;
        if (this.options.ecmaVersion >= 13 && (++this.pos, C(t = this.fullCharCodeAtPos(), !0) || 92 === t)) return this.finishToken(V.privateId, this.readWord1());
        this.raise(this.pos, "Unexpected character '" + W(t) + "'")
      }, se.getTokenFromCode = function(t) {
        switch (t) {
          case 46:
            return this.readToken_dot();
          case 40:
            return ++this.pos, this.finishToken(V.parenL);
          case 41:
            return ++this.pos, this.finishToken(V.parenR);
          case 59:
            return ++this.pos, this.finishToken(V.semi);
          case 44:
            return ++this.pos, this.finishToken(V.comma);
          case 91:
            return ++this.pos, this.finishToken(V.bracketL);
          case 93:
            return ++this.pos, this.finishToken(V.bracketR);
          case 123:
            return ++this.pos, this.finishToken(V.braceL);
          case 125:
            return ++this.pos, this.finishToken(V.braceR);
          case 58:
            return ++this.pos, this.finishToken(V.colon);
          case 96:
            if (this.options.ecmaVersion < 6) break;
            return ++this.pos, this.finishToken(V.backQuote);
          case 48:
            var e = this.input.charCodeAt(this.pos + 1);
            if (120 === e || 88 === e) return this.readRadixNumber(16);
            if (this.options.ecmaVersion >= 6) {
              if (111 === e || 79 === e) return this.readRadixNumber(8);
              if (98 === e || 66 === e) return this.readRadixNumber(2)
            }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return this.readNumber(!1);
          case 34:
          case 39:
            return this.readString(t);
          case 47:
            return this.readToken_slash();
          case 37:
          case 42:
            return this.readToken_mult_modulo_exp(t);
          case 124:
          case 38:
            return this.readToken_pipe_amp(t);
          case 94:
            return this.readToken_caret();
          case 43:
          case 45:
            return this.readToken_plus_min(t);
          case 60:
          case 62:
            return this.readToken_lt_gt(t);
          case 61:
          case 33:
            return this.readToken_eq_excl(t);
          case 63:
            return this.readToken_question();
          case 126:
            return this.finishOp(V.prefix, 1);
          case 35:
            return this.readToken_numberSign()
        }
        this.raise(this.pos, "Unexpected character '" + W(t) + "'")
      }, se.finishOp = function(t, e) {
        var s = this.input.slice(this.pos, this.pos + e);
        return this.pos += e, this.finishToken(t, s)
      }, se.readRegexp = function() {
        for (var t, e, s = this.pos;;) {
          this.pos >= this.input.length && this.raise(s, "Unterminated regular expression");
          var i = this.input.charAt(this.pos);
          if (L.test(i) && this.raise(s, "Unterminated regular expression"), t) t = !1;
          else {
            if ("[" === i) e = !0;
            else if ("]" === i && e) e = !1;
            else if ("/" === i && !e) break;
            t = "\\" === i
          }++this.pos
        }
        var r = this.input.slice(s, this.pos);
        ++this.pos;
        var a = this.pos,
          n = this.readWord1();
        this.containsEsc && this.unexpected(a);
        var o = this.regexpState || (this.regexpState = new Wt(this));
        o.reset(s, r, n), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
        var h = null;
        try {
          h = new RegExp(r, n)
        } catch (t) {}
        return this.finishToken(V.regexp, {
          pattern: r,
          flags: n,
          value: h
        })
      }, se.readInt = function(t, e, s) {
        for (var i = this.options.ecmaVersion >= 12 && void 0 === e, r = s && 48 === this.input.charCodeAt(this.pos), a = this.pos, n = 0, o = 0, h = 0, p = null == e ? 1 / 0 : e; h < p; ++h, ++this.pos) {
          var c = this.input.charCodeAt(this.pos),
            l = void 0;
          if (i && 95 === c) r && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === h && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = c;
          else {
            if ((l = c >= 97 ? c - 97 + 10 : c >= 65 ? c - 65 + 10 : c >= 48 && c <= 57 ? c - 48 : 1 / 0) >= t) break;
            o = c, n = n * t + l
          }
        }
        return i && 95 === o && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === a || null != e && this.pos - a !== e ? null : n
      }, se.readRadixNumber = function(t) {
        var e = this.pos;
        this.pos += 2;
        var s = this.readInt(t);
        return null == s && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (s = ie(this.input.slice(e, this.pos)), ++this.pos) : C(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(V.num, s)
      }, se.readNumber = function(t) {
        var e = this.pos;
        t || null !== this.readInt(10, void 0, !0) || this.raise(e, "Invalid number");
        var s = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
        s && this.strict && this.raise(e, "Invalid number");
        var i = this.input.charCodeAt(this.pos);
        if (!s && !t && this.options.ecmaVersion >= 11 && 110 === i) {
          var r = ie(this.input.slice(e, this.pos));
          return ++this.pos, C(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(V.num, r)
        }
        s && /[89]/.test(this.input.slice(e, this.pos)) && (s = !1), 46 !== i || s || (++this.pos, this.readInt(10), i = this.input.charCodeAt(this.pos)), 69 !== i && 101 !== i || s || (43 !== (i = this.input.charCodeAt(++this.pos)) && 45 !== i || ++this.pos, null === this.readInt(10) && this.raise(e, "Invalid number")), C(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
        var a, n = (a = this.input.slice(e, this.pos), s ? parseInt(a, 8) : parseFloat(a.replace(/_/g, "")));
        return this.finishToken(V.num, n)
      }, se.readCodePoint = function() {
        var t;
        if (123 === this.input.charCodeAt(this.pos)) {
          this.options.ecmaVersion < 6 && this.unexpected();
          var e = ++this.pos;
          t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(e, "Code point out of bounds")
        } else t = this.readHexChar(4);
        return t
      }, se.readString = function(t) {
        for (var e = "", s = ++this.pos;;) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
          var i = this.input.charCodeAt(this.pos);
          if (i === t) break;
          92 === i ? (e += this.input.slice(s, this.pos), e += this.readEscapedChar(!1), s = this.pos) : 8232 === i || 8233 === i ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (O(i) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
        }
        return e += this.input.slice(s, this.pos++), this.finishToken(V.string, e)
      };
      var re = {};
      se.tryReadTemplateToken = function() {
        this.inTemplateElement = !0;
        try {
          this.readTmplToken()
        } catch (t) {
          if (t !== re) throw t;
          this.readInvalidTemplateToken()
        }
        this.inTemplateElement = !1
      }, se.invalidStringToken = function(t, e) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw re;
        this.raise(t, e)
      }, se.readTmplToken = function() {
        for (var t = "", e = this.pos;;) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
          var s = this.input.charCodeAt(this.pos);
          if (96 === s || 36 === s && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== V.template && this.type !== V.invalidTemplate ? (t += this.input.slice(e, this.pos), this.finishToken(V.template, t)) : 36 === s ? (this.pos += 2, this.finishToken(V.dollarBraceL)) : (++this.pos, this.finishToken(V.backQuote));
          if (92 === s) t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
          else if (O(s)) {
            switch (t += this.input.slice(e, this.pos), ++this.pos, s) {
              case 13:
                10 === this.input.charCodeAt(this.pos) && ++this.pos;
              case 10:
                t += "\n";
                break;
              default:
                t += String.fromCharCode(s)
            }
            this.options.locations && (++this.curLine, this.lineStart = this.pos), e = this.pos
          } else ++this.pos
        }
      }, se.readInvalidTemplateToken = function() {
        for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
          case "\\":
            ++this.pos;
            break;
          case "$":
            if ("{" !== this.input[this.pos + 1]) break;
          case "`":
            return this.finishToken(V.invalidTemplate, this.input.slice(this.start, this.pos));
          case "\r":
            "\n" === this.input[this.pos + 1] && ++this.pos;
          case "\n":
          case "\u2028":
          case "\u2029":
            ++this.curLine, this.lineStart = this.pos + 1
        }
        this.raise(this.start, "Unterminated template")
      }, se.readEscapedChar = function(t) {
        var e = this.input.charCodeAt(++this.pos);
        switch (++this.pos, e) {
          case 110:
            return "\n";
          case 114:
            return "\r";
          case 120:
            return String.fromCharCode(this.readHexChar(2));
          case 117:
            return W(this.readCodePoint());
          case 116:
            return "\t";
          case 98:
            return "\b";
          case 118:
            return "\v";
          case 102:
            return "\f";
          case 13:
            10 === this.input.charCodeAt(this.pos) && ++this.pos;
          case 10:
            return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
          case 56:
          case 57:
            if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), t) {
              var s = this.pos - 1;
              this.invalidStringToken(s, "Invalid escape sequence in template string")
            }
          default:
            if (e >= 48 && e <= 55) {
              var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                r = parseInt(i, 8);
              return r > 255 && (i = i.slice(0, -1), r = parseInt(i, 8)), this.pos += i.length - 1, e = this.input.charCodeAt(this.pos), "0" === i && 56 !== e && 57 !== e || !this.strict && !t || this.invalidStringToken(this.pos - 1 - i.length, t ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(r)
            }
            return O(e) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(e)
        }
      }, se.readHexChar = function(t) {
        var e = this.pos,
          s = this.readInt(16, t);
        return null === s && this.invalidStringToken(e, "Bad character escape sequence"), s
      }, se.readWord1 = function() {
        this.containsEsc = !1;
        for (var t = "", e = !0, s = this.pos, i = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
          var r = this.fullCharCodeAtPos();
          if (E(r, i)) this.pos += r <= 65535 ? 1 : 2;
          else {
            if (92 !== r) break;
            this.containsEsc = !0, t += this.input.slice(s, this.pos);
            var a = this.pos;
            117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
            var n = this.readCodePoint();
            (e ? C : E)(n, i) || this.invalidStringToken(a, "Invalid Unicode escape"), t += W(n), s = this.pos
          }
          e = !1
        }
        return t + this.input.slice(s, this.pos)
      }, se.readWord = function() {
        var t = this.readWord1(),
          e = V.name;
        return this.keywords.test(t) && (e = N[t]), this.finishToken(e, t)
      }, tt.acorn = {
        Parser: tt,
        version: "8.12.1",
        defaultOptions: $,
        Position: K,
        SourceLocation: Q,
        getLineInfo: J,
        Node: Ct,
        TokenType: w,
        tokTypes: V,
        keywordTypes: N,
        TokContext: ft,
        tokContexts: mt,
        isIdentifierChar: E,
        isIdentifierStart: C,
        Token: ee,
        isNewLine: O,
        lineBreak: L,
        lineBreakG: R,
        nonASCIIwhitespace: M
      };
      var ae = ((t, e, s) => {
          s = null != t ? a(n(t)) : {};
          const i = o(s, "default", {
            value: t,
            enumerable: !0
          });
          for (let e of h(t)) p.call(i, e) || o(i, e, {
            get: () => t[e],
            enumerable: !0
          });
          return i
        })(d()),
        ne = {
          acceptcharset: "acceptCharset",
          accesskey: "accessKey",
          allowfullscreen: "allowFullScreen",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          charset: "charSet",
          class: "className",
          colspan: "colSpan",
          contenteditable: "contentEditable",
          crossorigin: "crossOrigin",
          datetime: "dateTime",
          enctype: "encType",
          for: "htmlFor",
          formaction: "formAction",
          formenctype: "formEncType",
          formmethod: "formMethod",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          hreflang: "hrefLang",
          httpequiv: "httpEquiv",
          inputmode: "inputMode",
          keyparams: "keyParams",
          keytype: "keyType",
          marginheight: "marginHeight",
          marginwidth: "marginWidth",
          maxlength: "maxLength",
          mediagroup: "mediaGroup",
          minlength: "minLength",
          novalidate: "noValidate",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rowspan: "rowSpan",
          spellcheck: "spellCheck",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          tabindex: "tabIndex",
          usemap: "useMap"
        },
        oe = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"],
        he = ["table", "tbody", "tfoot", "thead", "tr"];
      class pe extends Error {
        constructor(t = "Nullish value encountered") {
          super(t), this.name = "NullishShortCircuit"
        }
      }
      var ce = () => ((t = "", e = 16) => {
          const s = String(t);
          let i = 0;
          return s.split("").forEach((t => {
            i = (i << 5) - i + t.charCodeAt(0), i &= i
          })), Math.abs(i).toString(e)
        })(Math.random().toString()),
        le = t => t.replace(/([A-Z])([A-Z])/g, "$1 $2").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[^a-zA-Z\u00C0-\u00ff]/g, " ").toLowerCase().split(" ").filter((t => t)).map(((t, e) => e > 0 ? t[0].toUpperCase() + t.slice(1) : t)).join(""),
        ue = (t, e) => {
          const [s, ...i] = e;
          if (null != t && null != s) return 0 === i.length ? t[s] : ue(t[s], i)
        },
        de = (t, e) => ue(t, (t => null == t || "" === t ? [] : t.split("."))(e));

      function fe(t) {
        return Number.isNaN(t) ? "NaN" : t
      }
      class me extends r().Component {
        static displayName = "JsxParser";
        static defaultProps = {
          allowUnknownElements: !0,
          autoCloseVoidElements: !1,
          bindings: {},
          blacklistedAttrs: [/^on.+/i],
          blacklistedTags: ["script"],
          className: "",
          components: {},
          componentsOnly: !1,
          disableFragments: !1,
          disableKeyGeneration: !1,
          jsx: "",
          onError: () => {},
          showWarnings: !1,
          renderError: void 0,
          renderInWrapper: !0,
          renderUnrecognized: () => null
        };
        ParsedChildren = null;
        #t = t => {
          const e = tt.extend(ae.default({
              autoCloseVoidElements: this.props.autoCloseVoidElements
            })),
            s = `<root>${t}</root>`;
          let i = [];
          try {
            i = e.parse(s, {
              ecmaVersion: "latest"
            }), i = i.body[0].expression.children || []
          } catch (t) {
            return this.props.showWarnings && console.warn(t), this.props.onError && this.props.onError(t), this.props.renderError ? this.props.renderError({
              error: String(t)
            }) : null
          }
          return i.map((t => this.#e(t))).filter(Boolean)
        };
        #e = (t, e) => {
          switch (t.type) {
            case "JSXAttribute":
              return null === t.value || this.#e(t.value, e);
            case "JSXElement":
            case "JSXFragment":
              return this.#s(t, e);
            case "JSXExpressionContainer":
            case "ExpressionStatement":
              return this.#e(t.expression, e);
            case "JSXText":
              const s = this.props.disableKeyGeneration ? void 0 : ce();
              return this.props.disableFragments ? t.value : r().createElement(i.Fragment, {
                key: s
              }, t.value);
            case "ArrayExpression":
              return t.elements.map((t => this.#e(t, e)));
            case "BinaryExpression":
              const a = this.#e(t.left, e),
                n = this.#e(t.right, e);
              let o;
              switch (t.operator) {
                case "-":
                  o = a - n;
                  break;
                case "!=":
                  o = a != n;
                  break;
                case "!==":
                  o = a !== n;
                  break;
                case "*":
                  o = a * n;
                  break;
                case "**":
                  o = a ** n;
                  break;
                case "/":
                  o = a / n;
                  break;
                case "%":
                  o = a % n;
                  break;
                case "+":
                  o = a + n;
                  break;
                case "<":
                  o = a < n;
                  break;
                case "<=":
                  o = a <= n;
                  break;
                case "==":
                  o = a == n;
                  break;
                case "===":
                  o = a === n;
                  break;
                case ">":
                  o = a > n;
                  break;
                case ">=":
                  o = a >= n;
                  break;
                default:
                  return void this.props.onError(new Error(`Unsupported binary operator: ${t.operator}`))
              }
              return fe(o);
            case "CallExpression":
              const h = this.#e(t.callee, e);
              if (void 0 === h) {
                if (t.optional) throw new pe;
                return void this.props.onError(new Error(`The expression '${t.callee}' could not be resolved, resulting in an undefined return value.`))
              }
              return h(...t.arguments.map((t => this.#e(t, e))));
            case "ConditionalExpression":
              return this.#e(t.test, e) ? this.#e(t.consequent, e) : this.#e(t.alternate, e);
            case "Identifier":
              return "Infinity" === t.name ? 1 / 0 : "-Infinity" === t.name ? -1 / 0 : "NaN" === t.name ? NaN : e && t.name in e ? fe(e[t.name]) : fe((this.props.bindings || {})[t.name]);
            case "Literal":
              return t.value;
            case "LogicalExpression":
              const p = this.#e(t.left, e);
              return "||" === t.operator && p ? p : !!("&&" === t.operator && p || "||" === t.operator && !p) && this.#e(t.right, e);
            case "MemberExpression":
              return this.#i(t, e);
            case "ChainExpression":
              return this.#r(t, e);
            case "ObjectExpression":
              const c = {};
              return t.properties.forEach((t => {
                c[t.key.name || t.key.value] = this.#e(t.value, e)
              })), c;
            case "TemplateElement":
              return t.value.cooked;
            case "TemplateLiteral":
              return [...t.expressions, ...t.quasis].sort(((t, e) => t.start < e.start ? -1 : 1)).map((t => this.#e(t, e))).join("");
            case "UnaryExpression":
              const l = this.#e(t.argument, e);
              switch (t.operator) {
                case "+":
                  return +l;
                case "-":
                  return -l;
                case "!":
                  return !l
              }
              return;
            case "ArrowFunctionExpression":
              return (t.async || t.generator) && this.props.onError?.(new Error("Async and generator arrow functions are not supported.")), (...s) => {
                const i = {
                  ...e
                };
                return t.params.forEach(((t, e) => {
                  i[t.name] = s[e]
                })), this.#e(t.body, i)
              };
            default:
              return void this.props.onError(new Error(`The expression type '${t.type}' is not supported.`))
          }
        };
        #r = (t, e) => {
          try {
            return this.#e(t.expression, e)
          } catch (t) {
            if (t instanceof pe) return;
            throw t
          }
        };
        #i = (t, e) => {
          const s = this.#e(t.object, e);
          let i, r;
          if (t.computed) i = this.#e(t.property, e);
          else {
            if ("Identifier" !== t.property.type) return void this.props.onError(new Error("Only simple MemberExpressions are supported."));
            i = t.property.name
          }
          if (null == s && t.optional) throw new pe;
          try {
            r = s[i]
          } catch {
            return void this.props.onError(new Error(`The property '${i}' could not be resolved on the object '${s}'.`))
          }
          return "function" == typeof r ? r.bind(s) : r
        };
        #a = t => "JSXIdentifier" === t.type ? t.name : `${this.#a(t.object)}.${this.#a(t.property)}`;
        #s = (t, e) => {
          const {
            allowUnknownElements: s,
            components: a,
            componentsOnly: n,
            onError: o
          } = this.props, {
            children: h = []
          } = t, p = "JSXElement" === t.type ? t.openingElement : t.openingFragment, {
            attributes: c = []
          } = p, l = "JSXElement" === t.type ? this.#a(p.name) : "", u = (this.props.blacklistedAttrs || []).map((t => t instanceof RegExp ? t : new RegExp(t, "i"))), d = (this.props.blacklistedTags || []).map((t => t.trim().toLowerCase())).filter(Boolean);
          if (/^(html|head|body)$/i.test(l)) return h.map((t => this.#s(t, e)));
          const f = l.trim().toLowerCase();
          if (-1 !== d.indexOf(f)) return o(new Error(`The tag <${l}> is blacklisted, and will not be rendered.`)), null;
          if ("" !== l && !de(a, l)) {
            if (n) return o(new Error(`The component <${l}> is unrecognized, and will not be rendered.`)), this.props.renderUnrecognized(l);
            if (!s && document.createElement(l) instanceof HTMLUnknownElement) return o(new Error(`The tag <${l}> is unrecognized in this browser, and will not be rendered.`)), this.props.renderUnrecognized(l)
          }
          let m, x = "JSXElement" === t.type ? de(a, l) : i.Fragment;
          if (x || function(t) {
              return -1 === oe.indexOf(t.toLowerCase())
            }(l)) {
            if (m = h.map((t => this.#e(t, e))), l.includes(".")) {
              const t = l.split(".").reduce(((t, e) => t ? t[e] : a?.[e]), null);
              t && (x = t)
            }
            x || function(t) {
              return -1 !== he.indexOf(t.toLowerCase())
            }(l) || (m = m.filter((t => "string" != typeof t || !/^\s*$/.test(t))));
            const t = m.find((t => "function" == typeof t));
            0 === m.length ? m = void 0 : t ? m = t : 1 === m.length ? [m] = m : m.length > 1 && !this.props.disableKeyGeneration && (m = m.map(((t, e) => t?.type && !t?.key ? {
              ...t,
              key: t.key || e
            } : t)))
          }
          const g = {
            key: this.props.disableKeyGeneration ? void 0 : ce()
          };
          c.forEach((t => {
            if ("JSXAttribute" === t.type) {
              const s = t.name.name,
                i = ne[s] || s,
                r = this.#e(t, e);
              0 === u.filter((t => t.test(i))).length && (g[i] = r)
            } else if ("JSXSpreadAttribute" === t.type && "Identifier" === t.argument.type || "MemberExpression" === t.argument.type) {
              const s = this.#e(t.argument, e);
              "object" == typeof s && Object.keys(s).forEach((t => {
                const e = ne[t] || t;
                0 === u.filter((t => t.test(e))).length && (g[e] = s[t])
              }))
            }
          })), "string" == typeof g.style && (g.style = (t => {
            switch (typeof t) {
              case "string":
                return t.split(";").filter((t => t)).reduce(((t, e) => {
                  const s = e.slice(0, e.indexOf(":")).trim(),
                    i = e.slice(e.indexOf(":") + 1).trim();
                  return {
                    ...t,
                    [le(s)]: i
                  }
                }), {});
              case "object":
                return t;
              default:
                return
            }
          })(g.style));
          const v = l.toLowerCase();
          return "option" === v && (m = m.props.children), r().createElement(x || v, g, m)
        };
        render() {
          const t = (this.props.jsx || "").trim().replace(/<!DOCTYPE([^>]*)>/g, "");
          this.ParsedChildren = this.#t(t);
          const e = [...new Set(["jsx-parser", ...String(this.props.className).split(" ")])].filter(Boolean).join(" ");
          return this.props.renderInWrapper ? r().createElement("div", {
            className: e
          }, this.ParsedChildren) : this.ParsedChildren
        }
      }
      var xe = me
    }
  }
]);