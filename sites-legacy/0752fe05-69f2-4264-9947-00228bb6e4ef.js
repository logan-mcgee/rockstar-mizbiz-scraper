try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "0752fe05-69f2-4264-9947-00228bb6e4ef", e._sentryDebugIdIdentifier = "sentry-dbid-0752fe05-69f2-4264-9947-00228bb6e4ef")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [2466], {
    43210: () => {
      Intl.NumberFormat && "function" == typeof Intl.NumberFormat.__addLocaleData && Intl.NumberFormat.__addLocaleData({
        data: {
          currencies: {
            ADP: {
              displayName: {
                one: "peseta andorrane",
                other: "pesetas andorranes"
              },
              narrow: "ADP",
              symbol: "ADP"
            },
            AED: {
              displayName: {
                one: "dirham des Émirats arabes unis",
                other: "dirhams des Émirats arabes unis"
              },
              narrow: "AED",
              symbol: "AED"
            },
            AFA: {
              displayName: {
                one: "afghani (1927–2002)",
                other: "afghanis (1927–2002)"
              },
              narrow: "AFA",
              symbol: "AFA"
            },
            AFN: {
              displayName: {
                one: "afghani afghan",
                other: "afghanis afghan"
              },
              narrow: "؋",
              symbol: "AFN"
            },
            ALK: {
              displayName: {
                one: "lek albanais (1947–1961)",
                other: "leks albanais (1947–1961)"
              },
              narrow: "ALK",
              symbol: "ALK"
            },
            ALL: {
              displayName: {
                one: "lek albanais",
                other: "leks albanais"
              },
              narrow: "ALL",
              symbol: "ALL"
            },
            AMD: {
              displayName: {
                one: "dram arménien",
                other: "drams arméniens"
              },
              narrow: "֏",
              symbol: "AMD"
            },
            ANG: {
              displayName: {
                one: "florin antillais",
                other: "florins antillais"
              },
              narrow: "ANG",
              symbol: "ANG"
            },
            AOA: {
              displayName: {
                one: "kwanza angolais",
                other: "kwanzas angolais"
              },
              narrow: "Kz",
              symbol: "AOA"
            },
            AOK: {
              displayName: {
                one: "kwanza angolais (1977–1990)",
                other: "kwanzas angolais (1977–1990)"
              },
              narrow: "AOK",
              symbol: "AOK"
            },
            AON: {
              displayName: {
                one: "nouveau kwanza angolais (1990–2000)",
                other: "nouveaux kwanzas angolais (1990–2000)"
              },
              narrow: "AON",
              symbol: "AON"
            },
            AOR: {
              displayName: {
                one: "kwanza angolais réajusté (1995–1999)",
                other: "kwanzas angolais réajustés (1995–1999)"
              },
              narrow: "AOR",
              symbol: "AOR"
            },
            ARA: {
              displayName: {
                one: "austral argentin",
                other: "australs argentins"
              },
              narrow: "ARA",
              symbol: "ARA"
            },
            ARP: {
              displayName: {
                one: "peso argentin (1983–1985)",
                other: "pesos argentins (1983–1985)"
              },
              narrow: "ARP",
              symbol: "ARP"
            },
            ARS: {
              displayName: {
                one: "peso argentin",
                other: "pesos argentins"
              },
              narrow: "$",
              symbol: "$AR"
            },
            ATS: {
              displayName: {
                one: "schilling autrichien",
                other: "schillings autrichiens"
              },
              narrow: "ATS",
              symbol: "ATS"
            },
            AUD: {
              displayName: {
                one: "dollar australien",
                other: "dollars australiens"
              },
              narrow: "$",
              symbol: "$AU"
            },
            AWG: {
              displayName: {
                one: "florin arubais",
                other: "florins arubais"
              },
              narrow: "AWG",
              symbol: "AWG"
            },
            AZM: {
              displayName: {
                one: "manat azéri (1993–2006)",
                other: "manats azéris (1993–2006)"
              },
              narrow: "AZM",
              symbol: "AZM"
            },
            AZN: {
              displayName: {
                one: "manat azéri",
                other: "manats azéris"
              },
              narrow: "₼",
              symbol: "AZN"
            },
            BAD: {
              displayName: {
                one: "dinar bosniaque",
                other: "dinars bosniaques"
              },
              narrow: "BAD",
              symbol: "BAD"
            },
            BAM: {
              displayName: {
                one: "mark convertible bosniaque",
                other: "marks convertibles bosniaques"
              },
              narrow: "KM",
              symbol: "BAM"
            },
            BBD: {
              displayName: {
                one: "dollar barbadien",
                other: "dollars barbadiens"
              },
              narrow: "$",
              symbol: "BBD"
            },
            BDT: {
              displayName: {
                one: "taka bangladeshi",
                other: "takas bangladeshis"
              },
              narrow: "৳",
              symbol: "BDT"
            },
            BEC: {
              displayName: {
                one: "franc belge (convertible)",
                other: "francs belges (convertibles)"
              },
              narrow: "BEC",
              symbol: "BEC"
            },
            BEF: {
              displayName: {
                one: "franc belge",
                other: "francs belges"
              },
              narrow: "FB",
              symbol: "FB"
            },
            BEL: {
              displayName: {
                one: "franc belge (financier)",
                other: "francs belges (financiers)"
              },
              narrow: "BEL",
              symbol: "BEL"
            },
            BGL: {
              displayName: {
                one: "lev bulgare (1962–1999)",
                other: "levs bulgares (1962–1999)"
              },
              narrow: "BGL",
              symbol: "BGL"
            },
            BGN: {
              displayName: {
                one: "lev bulgare",
                other: "levs bulgares"
              },
              narrow: "BGN",
              symbol: "BGN"
            },
            BHD: {
              displayName: {
                one: "dinar bahreïni",
                other: "dinars bahreïnis"
              },
              narrow: "BHD",
              symbol: "BHD"
            },
            BIF: {
              displayName: {
                one: "franc burundais",
                other: "francs burundais"
              },
              narrow: "BIF",
              symbol: "BIF"
            },
            BMD: {
              displayName: {
                one: "dollar bermudien",
                other: "dollars bermudiens"
              },
              narrow: "$",
              symbol: "$BM"
            },
            BND: {
              displayName: {
                one: "dollar brunéien",
                other: "dollars brunéiens"
              },
              narrow: "$",
              symbol: "$BN"
            },
            BOB: {
              displayName: {
                one: "boliviano bolivien",
                other: "bolivianos boliviens"
              },
              narrow: "Bs",
              symbol: "BOB"
            },
            BOP: {
              displayName: {
                one: "peso bolivien",
                other: "pesos boliviens"
              },
              narrow: "BOP",
              symbol: "BOP"
            },
            BOV: {
              displayName: {
                one: "mvdol bolivien",
                other: "mvdols boliviens"
              },
              narrow: "BOV",
              symbol: "BOV"
            },
            BRB: {
              displayName: {
                one: "nouveau cruzeiro brésilien (1967–1986)",
                other: "nouveaux cruzeiros brésiliens (1967–1986)"
              },
              narrow: "BRB",
              symbol: "BRB"
            },
            BRC: {
              displayName: {
                one: "cruzado brésilien (1986–1989)",
                other: "cruzados brésiliens (1986–1989)"
              },
              narrow: "BRC",
              symbol: "BRC"
            },
            BRE: {
              displayName: {
                one: "cruzeiro brésilien (1990–1993)",
                other: "cruzeiros brésiliens (1990–1993)"
              },
              narrow: "BRE",
              symbol: "BRE"
            },
            BRL: {
              displayName: {
                one: "réal brésilien",
                other: "réals brésiliens"
              },
              narrow: "R$",
              symbol: "R$"
            },
            BRN: {
              displayName: {
                one: "nouveau cruzado brésilien (1989–1990)",
                other: "nouveaux cruzados brésiliens (1989–1990)"
              },
              narrow: "BRN",
              symbol: "BRN"
            },
            BRR: {
              displayName: {
                one: "cruzeiro réal brésilien (1993–1994)",
                other: "cruzeiros réals brésiliens (1993–1994)"
              },
              narrow: "BRR",
              symbol: "BRR"
            },
            BSD: {
              displayName: {
                one: "dollar bahaméen",
                other: "dollars bahaméens"
              },
              narrow: "$",
              symbol: "BSD"
            },
            BTN: {
              displayName: {
                one: "ngultrum bouthanais",
                other: "ngultrums bouthanais"
              },
              narrow: "BTN",
              symbol: "BTN"
            },
            BUK: {
              displayName: {
                one: "kyat birman",
                other: "kyats birmans"
              },
              narrow: "BUK",
              symbol: "BUK"
            },
            BWP: {
              displayName: {
                one: "pula botswanais",
                other: "pulas botswanais"
              },
              narrow: "P",
              symbol: "BWP"
            },
            BYB: {
              displayName: {
                one: "nouveau rouble biélorusse (1994–1999)",
                other: "nouveaux roubles biélorusses (1994–1999)"
              },
              narrow: "BYB",
              symbol: "BYB"
            },
            BYN: {
              displayName: {
                one: "rouble biélorusse",
                other: "roubles biélorusses"
              },
              narrow: "р.",
              symbol: "BYN"
            },
            BYR: {
              displayName: {
                one: "rouble biélorusse (2000–2016)",
                other: "roubles biélorusses (2000–2016)"
              },
              narrow: "BYR",
              symbol: "BYR"
            },
            BZD: {
              displayName: {
                one: "dollar bélizéen",
                other: "dollars bélizéens"
              },
              narrow: "$",
              symbol: "$BZ"
            },
            CAD: {
              displayName: {
                one: "dollar canadien",
                other: "dollars canadiens"
              },
              narrow: "$",
              symbol: "$CA"
            },
            CDF: {
              displayName: {
                one: "franc congolais",
                other: "francs congolais"
              },
              narrow: "CDF",
              symbol: "CDF"
            },
            CHE: {
              displayName: {
                one: "euro WIR",
                other: "euros WIR"
              },
              narrow: "CHE",
              symbol: "CHE"
            },
            CHF: {
              displayName: {
                one: "franc suisse",
                other: "francs suisses"
              },
              narrow: "CHF",
              symbol: "CHF"
            },
            CHW: {
              displayName: {
                one: "franc WIR",
                other: "francs WIR"
              },
              narrow: "CHW",
              symbol: "CHW"
            },
            CLF: {
              displayName: {
                one: "unité d’investissement chilienne",
                other: "unités d’investissement chiliennes"
              },
              narrow: "CLF",
              symbol: "CLF"
            },
            CLP: {
              displayName: {
                one: "peso chilien",
                other: "pesos chiliens"
              },
              narrow: "$",
              symbol: "$CL"
            },
            CNH: {
              displayName: {
                one: "yuan chinois (zone extracôtière)",
                other: "yuans chinois (zone extracôtière)"
              },
              narrow: "CNH",
              symbol: "CNH"
            },
            CNY: {
              displayName: {
                one: "yuan renminbi chinois",
                other: "yuans renminbi chinois"
              },
              narrow: "¥",
              symbol: "CNY"
            },
            COP: {
              displayName: {
                one: "peso colombien",
                other: "pesos colombiens"
              },
              narrow: "$",
              symbol: "$CO"
            },
            COU: {
              displayName: {
                one: "unité de valeur réelle colombienne",
                other: "unités de valeur réelle colombiennes"
              },
              narrow: "COU",
              symbol: "COU"
            },
            CRC: {
              displayName: {
                one: "colón costaricain",
                other: "colóns costaricains"
              },
              narrow: "₡",
              symbol: "CRC"
            },
            CSD: {
              displayName: {
                one: "dinar serbo-monténégrin",
                other: "dinars serbo-monténégrins"
              },
              narrow: "CSD",
              symbol: "CSD"
            },
            CSK: {
              displayName: {
                one: "couronne forte tchécoslovaque",
                other: "couronnes fortes tchécoslovaques"
              },
              narrow: "CSK",
              symbol: "CSK"
            },
            CUC: {
              displayName: {
                one: "peso cubain convertible",
                other: "pesos cubains convertibles"
              },
              narrow: "$",
              symbol: "CUC"
            },
            CUP: {
              displayName: {
                one: "peso cubain",
                other: "pesos cubains"
              },
              narrow: "$",
              symbol: "CUP"
            },
            CVE: {
              displayName: {
                one: "escudo capverdien",
                other: "escudos capverdiens"
              },
              narrow: "CVE",
              symbol: "CVE"
            },
            CYP: {
              displayName: {
                one: "livre chypriote",
                other: "livres chypriotes"
              },
              narrow: "£CY",
              symbol: "£CY"
            },
            CZK: {
              displayName: {
                one: "couronne tchèque",
                other: "couronnes tchèques"
              },
              narrow: "Kč",
              symbol: "CZK"
            },
            DDM: {
              displayName: {
                one: "mark est-allemand",
                other: "marks est-allemands"
              },
              narrow: "DDM",
              symbol: "DDM"
            },
            DEM: {
              displayName: {
                one: "mark allemand",
                other: "marks allemands"
              },
              narrow: "DEM",
              symbol: "DEM"
            },
            DJF: {
              displayName: {
                one: "franc djiboutien",
                other: "francs djiboutiens"
              },
              narrow: "DJF",
              symbol: "DJF"
            },
            DKK: {
              displayName: {
                one: "couronne danoise",
                other: "couronnes danoises"
              },
              narrow: "kr",
              symbol: "DKK"
            },
            DOP: {
              displayName: {
                one: "peso dominicain",
                other: "pesos dominicains"
              },
              narrow: "$",
              symbol: "DOP"
            },
            DZD: {
              displayName: {
                one: "dinar algérien",
                other: "dinars algériens"
              },
              narrow: "DZD",
              symbol: "DZD"
            },
            ECS: {
              displayName: {
                one: "sucre équatorien",
                other: "sucres équatoriens"
              },
              narrow: "ECS",
              symbol: "ECS"
            },
            ECV: {
              displayName: {
                one: "unité de valeur constante équatorienne (UVC)",
                other: "unités de valeur constante équatoriennes (UVC)"
              },
              narrow: "ECV",
              symbol: "ECV"
            },
            EEK: {
              displayName: {
                one: "couronne estonienne",
                other: "couronnes estoniennes"
              },
              narrow: "EEK",
              symbol: "EEK"
            },
            EGP: {
              displayName: {
                one: "livre égyptienne",
                other: "livres égyptiennes"
              },
              narrow: "£E",
              symbol: "EGP"
            },
            ERN: {
              displayName: {
                one: "nafka érythréen",
                other: "nafkas érythréens"
              },
              narrow: "ERN",
              symbol: "ERN"
            },
            ESA: {
              displayName: {
                one: "peseta espagnole (compte A)",
                other: "pesetas espagnoles (compte A)"
              },
              narrow: "ESA",
              symbol: "ESA"
            },
            ESB: {
              displayName: {
                one: "peseta espagnole (compte convertible)",
                other: "pesetas espagnoles (compte convertible)"
              },
              narrow: "ESB",
              symbol: "ESB"
            },
            ESP: {
              displayName: {
                one: "peseta espagnole",
                other: "pesetas espagnoles"
              },
              narrow: "₧",
              symbol: "ESP"
            },
            ETB: {
              displayName: {
                one: "birr éthiopien",
                other: "birrs éthiopiens"
              },
              narrow: "ETB",
              symbol: "ETB"
            },
            EUR: {
              displayName: {
                one: "euro",
                other: "euros"
              },
              narrow: "€",
              symbol: "€"
            },
            FIM: {
              displayName: {
                one: "mark finlandais",
                other: "marks finlandais"
              },
              narrow: "FIM",
              symbol: "FIM"
            },
            FJD: {
              displayName: {
                one: "dollar fidjien",
                other: "dollars fidjiens"
              },
              narrow: "$",
              symbol: "$FJ"
            },
            FKP: {
              displayName: {
                one: "livre des îles Malouines",
                other: "livres des îles Malouines"
              },
              narrow: "£",
              symbol: "£FK"
            },
            FRF: {
              displayName: {
                one: "franc français",
                other: "francs français"
              },
              narrow: "F",
              symbol: "F"
            },
            GBP: {
              displayName: {
                one: "livre sterling",
                other: "livres sterling"
              },
              narrow: "£",
              symbol: "£GB"
            },
            GEK: {
              displayName: {
                one: "coupon de lari géorgien",
                other: "coupons de lari géorgiens"
              },
              narrow: "GEK",
              symbol: "GEK"
            },
            GEL: {
              displayName: {
                one: "lari géorgien",
                other: "lari géorgiens"
              },
              narrow: "₾",
              symbol: "GEL"
            },
            GHC: {
              displayName: {
                one: "cédi ghanéen (1967–2007)",
                other: "cédis ghanéens (1967–2007)"
              },
              narrow: "GHC",
              symbol: "GHC"
            },
            GHS: {
              displayName: {
                one: "cédi ghanéen",
                other: "cédis ghanéens"
              },
              narrow: "GH₵",
              symbol: "GHS"
            },
            GIP: {
              displayName: {
                one: "livre de Gibraltar",
                other: "livres de Gibraltar"
              },
              narrow: "£",
              symbol: "£GI"
            },
            GMD: {
              displayName: {
                one: "dalasi gambien",
                other: "dalasis gambiens"
              },
              narrow: "GMD",
              symbol: "GMD"
            },
            GNF: {
              displayName: {
                one: "franc guinéen",
                other: "francs guinéens"
              },
              narrow: "FG",
              symbol: "GNF"
            },
            GNS: {
              displayName: {
                one: "syli guinéen",
                other: "sylis guinéens"
              },
              narrow: "GNS",
              symbol: "GNS"
            },
            GQE: {
              displayName: {
                one: "ekwélé équatoguinéen",
                other: "ekwélés équatoguinéens"
              },
              narrow: "GQE",
              symbol: "GQE"
            },
            GRD: {
              displayName: {
                one: "drachme grecque",
                other: "drachmes grecques"
              },
              narrow: "GRD",
              symbol: "GRD"
            },
            GTQ: {
              displayName: {
                one: "quetzal guatémaltèque",
                other: "quetzals guatémaltèques"
              },
              narrow: "Q",
              symbol: "GTQ"
            },
            GWE: {
              displayName: {
                one: "escudo de Guinée portugaise",
                other: "escudos de Guinée portugaise"
              },
              narrow: "GWE",
              symbol: "GWE"
            },
            GWP: {
              displayName: {
                one: "peso bissau-guinéen",
                other: "pesos bissau-guinéens"
              },
              narrow: "GWP",
              symbol: "GWP"
            },
            GYD: {
              displayName: {
                one: "dollar du Guyana",
                other: "dollars du Guyana"
              },
              narrow: "$",
              symbol: "GYD"
            },
            HKD: {
              displayName: {
                one: "dollar de Hong Kong",
                other: "dollars de Hong Kong"
              },
              narrow: "$",
              symbol: "HKD"
            },
            HNL: {
              displayName: {
                one: "lempira hondurien",
                other: "lempiras honduriens"
              },
              narrow: "L",
              symbol: "HNL"
            },
            HRD: {
              displayName: {
                one: "dinar croate",
                other: "dinars croates"
              },
              narrow: "HRD",
              symbol: "HRD"
            },
            HRK: {
              displayName: {
                one: "kuna croate",
                other: "kunas croates"
              },
              narrow: "kn",
              symbol: "HRK"
            },
            HTG: {
              displayName: {
                one: "gourde haïtienne",
                other: "gourdes haïtiennes"
              },
              narrow: "HTG",
              symbol: "HTG"
            },
            HUF: {
              displayName: {
                one: "forint hongrois",
                other: "forints hongrois"
              },
              narrow: "Ft",
              symbol: "HUF"
            },
            IDR: {
              displayName: {
                one: "roupie indonésienne",
                other: "roupies indonésiennes"
              },
              narrow: "Rp",
              symbol: "IDR"
            },
            IEP: {
              displayName: {
                one: "livre irlandaise",
                other: "livres irlandaises"
              },
              narrow: "£IE",
              symbol: "£IE"
            },
            ILP: {
              displayName: {
                one: "livre israélienne",
                other: "livres israéliennes"
              },
              narrow: "£IL",
              symbol: "£IL"
            },
            ILS: {
              displayName: {
                one: "nouveau shekel israélien",
                other: "nouveaux shekels israéliens"
              },
              narrow: "₪",
              symbol: "₪"
            },
            INR: {
              displayName: {
                one: "roupie indienne",
                other: "roupies indiennes"
              },
              narrow: "₹",
              symbol: "₹"
            },
            IQD: {
              displayName: {
                one: "dinar irakien",
                other: "dinars irakiens"
              },
              narrow: "IQD",
              symbol: "IQD"
            },
            IRR: {
              displayName: {
                one: "riyal iranien",
                other: "riyals iraniens"
              },
              narrow: "IRR",
              symbol: "IRR"
            },
            ISK: {
              displayName: {
                one: "couronne islandaise",
                other: "couronnes islandaises"
              },
              narrow: "kr",
              symbol: "ISK"
            },
            ITL: {
              displayName: {
                one: "lire italienne",
                other: "lires italiennes"
              },
              narrow: "₤IT",
              symbol: "₤IT"
            },
            JMD: {
              displayName: {
                one: "dollar jamaïcain",
                other: "dollars jamaïcains"
              },
              narrow: "$",
              symbol: "JMD"
            },
            JOD: {
              displayName: {
                one: "dinar jordanien",
                other: "dinars jordaniens"
              },
              narrow: "JOD",
              symbol: "JOD"
            },
            JPY: {
              displayName: {
                one: "yen japonais",
                other: "yens japonais"
              },
              narrow: "¥",
              symbol: "JPY"
            },
            KES: {
              displayName: {
                one: "shilling kényan",
                other: "shillings kényans"
              },
              narrow: "KES",
              symbol: "KES"
            },
            KGS: {
              displayName: {
                one: "som kirghize",
                other: "soms kirghizes"
              },
              narrow: "⃀",
              symbol: "KGS"
            },
            KHR: {
              displayName: {
                one: "riel cambodgien",
                other: "riels cambodgiens"
              },
              narrow: "៛",
              symbol: "KHR"
            },
            KMF: {
              displayName: {
                one: "franc comorien",
                other: "francs comoriens"
              },
              narrow: "FC",
              symbol: "KMF"
            },
            KPW: {
              displayName: {
                one: "won nord-coréen",
                other: "wons nord-coréens"
              },
              narrow: "₩",
              symbol: "KPW"
            },
            KRW: {
              displayName: {
                one: "won sud-coréen",
                other: "wons sud-coréens"
              },
              narrow: "₩",
              symbol: "₩"
            },
            KWD: {
              displayName: {
                one: "dinar koweïtien",
                other: "dinar koweïtiens"
              },
              narrow: "KWD",
              symbol: "KWD"
            },
            KYD: {
              displayName: {
                one: "dollar des îles Caïmans",
                other: "dollars des îles Caïmans"
              },
              narrow: "$",
              symbol: "KYD"
            },
            KZT: {
              displayName: {
                one: "tenge kazakh",
                other: "tenges kazakhs"
              },
              narrow: "₸",
              symbol: "KZT"
            },
            LAK: {
              displayName: {
                one: "kip laotien",
                other: "kips laotiens"
              },
              narrow: "₭",
              symbol: "LAK"
            },
            LBP: {
              displayName: {
                one: "livre libanaise",
                other: "livres libanaises"
              },
              narrow: "£L",
              symbol: "£LB"
            },
            LKR: {
              displayName: {
                one: "roupie srilankaise",
                other: "roupies srilankaises"
              },
              narrow: "Rs",
              symbol: "LKR"
            },
            LRD: {
              displayName: {
                one: "dollar libérien",
                other: "dollars libériens"
              },
              narrow: "$",
              symbol: "LRD"
            },
            LSL: {
              displayName: {
                one: "loti lesothan",
                other: "maloti lesothans"
              },
              narrow: "LSL",
              symbol: "LSL"
            },
            LTL: {
              displayName: {
                one: "litas lituanien",
                other: "litas lituaniens"
              },
              narrow: "Lt",
              symbol: "LTL"
            },
            LTT: {
              displayName: {
                one: "talonas lituanien",
                other: "talonas lituaniens"
              },
              narrow: "LTT",
              symbol: "LTT"
            },
            LUC: {
              displayName: {
                one: "franc convertible luxembourgeois",
                other: "francs convertibles luxembourgeois"
              },
              narrow: "LUC",
              symbol: "LUC"
            },
            LUF: {
              displayName: {
                one: "franc luxembourgeois",
                other: "francs luxembourgeois"
              },
              narrow: "LUF",
              symbol: "LUF"
            },
            LUL: {
              displayName: {
                one: "franc financier luxembourgeois",
                other: "francs financiers luxembourgeois"
              },
              narrow: "LUL",
              symbol: "LUL"
            },
            LVL: {
              displayName: {
                one: "lats letton",
                other: "lats lettons"
              },
              narrow: "Ls",
              symbol: "LVL"
            },
            LVR: {
              displayName: {
                one: "rouble letton",
                other: "roubles lettons"
              },
              narrow: "LVR",
              symbol: "LVR"
            },
            LYD: {
              displayName: {
                one: "dinar libyen",
                other: "dinars libyens"
              },
              narrow: "LYD",
              symbol: "LYD"
            },
            MAD: {
              displayName: {
                one: "dirham marocain",
                other: "dirhams marocains"
              },
              narrow: "MAD",
              symbol: "MAD"
            },
            MAF: {
              displayName: {
                one: "franc marocain",
                other: "francs marocains"
              },
              narrow: "MAF",
              symbol: "MAF"
            },
            MDL: {
              displayName: {
                one: "leu moldave",
                other: "leus moldaves"
              },
              narrow: "MDL",
              symbol: "MDL"
            },
            MGA: {
              displayName: {
                one: "ariary malgache",
                other: "ariarys malgaches"
              },
              narrow: "Ar",
              symbol: "MGA"
            },
            MGF: {
              displayName: {
                one: "franc malgache",
                other: "francs malgaches"
              },
              narrow: "MGF",
              symbol: "MGF"
            },
            MKD: {
              displayName: {
                one: "denar macédonien",
                other: "denars macédoniens"
              },
              narrow: "MKD",
              symbol: "MKD"
            },
            MLF: {
              displayName: {
                one: "franc malien",
                other: "francs maliens"
              },
              narrow: "MLF",
              symbol: "MLF"
            },
            MMK: {
              displayName: {
                one: "kyat myanmarais",
                other: "kyats myanmarais"
              },
              narrow: "K",
              symbol: "MMK"
            },
            MNT: {
              displayName: {
                one: "tugrik mongol",
                other: "tugriks mongols"
              },
              narrow: "₮",
              symbol: "MNT"
            },
            MOP: {
              displayName: {
                one: "pataca macanaise",
                other: "patacas macanaises"
              },
              narrow: "MOP",
              symbol: "MOP"
            },
            MRO: {
              displayName: {
                one: "ouguiya mauritanien (1973–2017)",
                other: "ouguiyas mauritaniens (1973–2017)"
              },
              narrow: "MRO",
              symbol: "MRO"
            },
            MRU: {
              displayName: {
                one: "ouguiya mauritanien",
                other: "ouguiyas mauritaniens"
              },
              narrow: "MRU",
              symbol: "MRU"
            },
            MTL: {
              displayName: {
                one: "lire maltaise",
                other: "lires maltaises"
              },
              narrow: "MTL",
              symbol: "MTL"
            },
            MTP: {
              displayName: {
                one: "livre maltaise",
                other: "livres maltaises"
              },
              narrow: "£MT",
              symbol: "£MT"
            },
            MUR: {
              displayName: {
                one: "roupie mauricienne",
                other: "roupies mauriciennes"
              },
              narrow: "Rs",
              symbol: "MUR"
            },
            MVR: {
              displayName: {
                one: "rufiyaa maldivienne",
                other: "rufiyaas maldiviennes"
              },
              narrow: "MVR",
              symbol: "MVR"
            },
            MWK: {
              displayName: {
                one: "kwacha malawite",
                other: "kwachas malawites"
              },
              narrow: "MWK",
              symbol: "MWK"
            },
            MXN: {
              displayName: {
                one: "peso mexicain",
                other: "pesos mexicains"
              },
              narrow: "$",
              symbol: "$MX"
            },
            MXP: {
              displayName: {
                one: "peso d’argent mexicain (1861–1992)",
                other: "pesos d’argent mexicains (1861–1992)"
              },
              narrow: "MXP",
              symbol: "MXP"
            },
            MXV: {
              displayName: {
                one: "unité de conversion mexicaine (UDI)",
                other: "unités de conversion mexicaines (UDI)"
              },
              narrow: "MXV",
              symbol: "MXV"
            },
            MYR: {
              displayName: {
                one: "ringgit malais",
                other: "ringgits malais"
              },
              narrow: "RM",
              symbol: "MYR"
            },
            MZE: {
              displayName: {
                one: "escudo mozambicain",
                other: "escudos mozambicains"
              },
              narrow: "MZE",
              symbol: "MZE"
            },
            MZM: {
              displayName: {
                one: "metical mozambicain (1980–2006)",
                other: "meticais mozambicains (1980–2006)"
              },
              narrow: "MZM",
              symbol: "MZM"
            },
            MZN: {
              displayName: {
                one: "metical mozambicain",
                other: "meticais mozambicains"
              },
              narrow: "MZN",
              symbol: "MZN"
            },
            NAD: {
              displayName: {
                one: "dollar namibien",
                other: "dollars namibiens"
              },
              narrow: "$",
              symbol: "$NA"
            },
            NGN: {
              displayName: {
                one: "naira nigérian",
                other: "nairas nigérians"
              },
              narrow: "₦",
              symbol: "NGN"
            },
            NIC: {
              displayName: {
                one: "córdoba nicaraguayen (1912–1988)",
                other: "córdobas nicaraguayens (1912–1988)"
              },
              narrow: "NIC",
              symbol: "NIC"
            },
            NIO: {
              displayName: {
                one: "córdoba oro nicaraguayen",
                other: "córdobas oro nicaraguayens"
              },
              narrow: "$C",
              symbol: "NIO"
            },
            NLG: {
              displayName: {
                one: "florin néerlandais",
                other: "florins néerlandais"
              },
              narrow: "NLG",
              symbol: "NLG"
            },
            NOK: {
              displayName: {
                one: "couronne norvégienne",
                other: "couronnes norvégiennes"
              },
              narrow: "kr",
              symbol: "NOK"
            },
            NPR: {
              displayName: {
                one: "roupie népalaise",
                other: "roupies népalaises"
              },
              narrow: "Rs",
              symbol: "NPR"
            },
            NZD: {
              displayName: {
                one: "dollar néo-zélandais",
                other: "dollars néo-zélandais"
              },
              narrow: "$",
              symbol: "$NZ"
            },
            OMR: {
              displayName: {
                one: "riyal omanais",
                other: "riyals omanis"
              },
              narrow: "OMR",
              symbol: "OMR"
            },
            PAB: {
              displayName: {
                one: "balboa panaméen",
                other: "balboas panaméens"
              },
              narrow: "PAB",
              symbol: "PAB"
            },
            PEI: {
              displayName: {
                one: "inti péruvien",
                other: "intis péruviens"
              },
              narrow: "PEI",
              symbol: "PEI"
            },
            PEN: {
              displayName: {
                one: "sol péruvien",
                other: "sols péruviens"
              },
              narrow: "PEN",
              symbol: "PEN"
            },
            PES: {
              displayName: {
                one: "sol péruvien (1863–1985)",
                other: "sols péruviens (1863–1985)"
              },
              narrow: "PES",
              symbol: "PES"
            },
            PGK: {
              displayName: {
                one: "kina papouan-néo-guinéen",
                other: "kinas papouan-néo-guinéens"
              },
              narrow: "PGK",
              symbol: "PGK"
            },
            PHP: {
              displayName: {
                one: "peso philippin",
                other: "pesos philippins"
              },
              narrow: "₱",
              symbol: "PHP"
            },
            PKR: {
              displayName: {
                one: "roupie pakistanaise",
                other: "roupies pakistanaises"
              },
              narrow: "Rs",
              symbol: "PKR"
            },
            PLN: {
              displayName: {
                one: "zloty polonais",
                other: "zlotys polonais"
              },
              narrow: "zł",
              symbol: "PLN"
            },
            PLZ: {
              displayName: {
                one: "zloty polonais (1950–1995)",
                other: "zlotys polonais (1950–1995)"
              },
              narrow: "PLZ",
              symbol: "PLZ"
            },
            PTE: {
              displayName: {
                one: "escudo portugais",
                other: "escudos portugais"
              },
              narrow: "PTE",
              symbol: "PTE"
            },
            PYG: {
              displayName: {
                one: "guaraní paraguayen",
                other: "guaranís paraguayens"
              },
              narrow: "₲",
              symbol: "PYG"
            },
            QAR: {
              displayName: {
                one: "riyal qatari",
                other: "riyals qataris"
              },
              narrow: "QAR",
              symbol: "QAR"
            },
            RHD: {
              displayName: {
                one: "dollar rhodésien",
                other: "dollars rhodésiens"
              },
              narrow: "$RH",
              symbol: "$RH"
            },
            ROL: {
              displayName: {
                one: "leu roumain (1952–2005)",
                other: "lei roumains (1952–2005)"
              },
              narrow: "ROL",
              symbol: "ROL"
            },
            RON: {
              displayName: {
                one: "leu roumain",
                other: "lei roumains"
              },
              narrow: "L",
              symbol: "RON"
            },
            RSD: {
              displayName: {
                one: "dinar serbe",
                other: "dinars serbes"
              },
              narrow: "RSD",
              symbol: "RSD"
            },
            RUB: {
              displayName: {
                one: "rouble russe",
                other: "roubles russes"
              },
              narrow: "₽",
              symbol: "RUB"
            },
            RUR: {
              displayName: {
                one: "rouble russe (1991–1998)",
                other: "roubles russes (1991–1998)"
              },
              narrow: "RUR",
              symbol: "RUR"
            },
            RWF: {
              displayName: {
                one: "franc rwandais",
                other: "francs rwandais"
              },
              narrow: "FR",
              symbol: "RWF"
            },
            SAR: {
              displayName: {
                one: "riyal saoudien",
                other: "riyals saoudiens"
              },
              narrow: "SAR",
              symbol: "SAR"
            },
            SBD: {
              displayName: {
                one: "dollar des îles Salomon",
                other: "dollars des îles Salomon"
              },
              narrow: "$",
              symbol: "$SB"
            },
            SCR: {
              displayName: {
                one: "roupie des Seychelles",
                other: "roupies des Seychelles"
              },
              narrow: "SCR",
              symbol: "SCR"
            },
            SDD: {
              displayName: {
                one: "dinar soudanais (1992–2007)",
                other: "dinars soudanais (1992–2007)"
              },
              narrow: "SDD",
              symbol: "SDD"
            },
            SDG: {
              displayName: {
                one: "livre soudanaise",
                other: "livres soudanaises"
              },
              narrow: "SDG",
              symbol: "SDG"
            },
            SDP: {
              displayName: {
                one: "livre soudanaise (1956–2007)",
                other: "livres soudanaises (1956–2007)"
              },
              narrow: "SDP",
              symbol: "SDP"
            },
            SEK: {
              displayName: {
                one: "couronne suédoise",
                other: "couronnes suédoises"
              },
              narrow: "kr",
              symbol: "SEK"
            },
            SGD: {
              displayName: {
                one: "dollar de Singapour",
                other: "dollars de Singapour"
              },
              narrow: "$",
              symbol: "$SG"
            },
            SHP: {
              displayName: {
                one: "livre de Sainte-Hélène",
                other: "livres de Sainte-Hélène"
              },
              narrow: "£",
              symbol: "SHP"
            },
            SIT: {
              displayName: {
                one: "tolar slovène",
                other: "tolars slovènes"
              },
              narrow: "SIT",
              symbol: "SIT"
            },
            SKK: {
              displayName: {
                one: "couronne slovaque",
                other: "couronnes slovaques"
              },
              narrow: "SKK",
              symbol: "SKK"
            },
            SLE: {
              displayName: {
                one: "leone sierra-léonais",
                other: "leones sierra-léonais"
              },
              narrow: "SLE",
              symbol: "SLE"
            },
            SLL: {
              displayName: {
                one: "leone sierra-léonais (1964—2022)",
                other: "leones sierra-léonais (1964—2022)"
              },
              narrow: "SLL",
              symbol: "SLL"
            },
            SOS: {
              displayName: {
                one: "shilling somalien",
                other: "shillings somaliens"
              },
              narrow: "SOS",
              symbol: "SOS"
            },
            SRD: {
              displayName: {
                one: "dollar surinamais",
                other: "dollars surinamais"
              },
              narrow: "$",
              symbol: "$SR"
            },
            SRG: {
              displayName: {
                one: "florin surinamais",
                other: "florins surinamais"
              },
              narrow: "SRG",
              symbol: "SRG"
            },
            SSP: {
              displayName: {
                one: "livre sud-soudanaise",
                other: "livres sud-soudanaises"
              },
              narrow: "£",
              symbol: "SSP"
            },
            STD: {
              displayName: {
                one: "dobra santoméen (1977–2017)",
                other: "dobras santoméens (1977–2017)"
              },
              narrow: "STD",
              symbol: "STD"
            },
            STN: {
              displayName: {
                one: "dobra santoméen",
                other: "dobras santoméens"
              },
              narrow: "Db",
              symbol: "STN"
            },
            SUR: {
              displayName: {
                one: "rouble soviétique",
                other: "roubles soviétiques"
              },
              narrow: "SUR",
              symbol: "SUR"
            },
            SVC: {
              displayName: {
                one: "colón salvadorien",
                other: "colóns salvadoriens"
              },
              narrow: "SVC",
              symbol: "SVC"
            },
            SYP: {
              displayName: {
                one: "livre syrienne",
                other: "livres syriennes"
              },
              narrow: "£",
              symbol: "SYP"
            },
            SZL: {
              displayName: {
                one: "lilangeni swazi",
                other: "lilangenis swazis"
              },
              narrow: "SZL",
              symbol: "SZL"
            },
            THB: {
              displayName: {
                one: "baht thaïlandais",
                other: "bahts thaïlandais"
              },
              narrow: "฿",
              symbol: "THB"
            },
            TJR: {
              displayName: {
                one: "rouble tadjik",
                other: "roubles tadjiks"
              },
              narrow: "TJR",
              symbol: "TJR"
            },
            TJS: {
              displayName: {
                one: "somoni tadjik",
                other: "somonis tadjiks"
              },
              narrow: "TJS",
              symbol: "TJS"
            },
            TMM: {
              displayName: {
                one: "manat turkmène",
                other: "manats turkmènes"
              },
              narrow: "TMM",
              symbol: "TMM"
            },
            TMT: {
              displayName: {
                one: "nouveau manat turkmène",
                other: "nouveaux manats turkmènes"
              },
              narrow: "TMT",
              symbol: "TMT"
            },
            TND: {
              displayName: {
                one: "dinar tunisien",
                other: "dinars tunisiens"
              },
              narrow: "TND",
              symbol: "TND"
            },
            TOP: {
              displayName: {
                one: "pa’anga tongan",
                other: "pa’angas tongans"
              },
              narrow: "$T",
              symbol: "TOP"
            },
            TPE: {
              displayName: {
                one: "escudo timorais",
                other: "escudos timorais"
              },
              narrow: "TPE",
              symbol: "TPE"
            },
            TRL: {
              displayName: {
                one: "livre turque (1844–2005)",
                other: "livres turques (1844–2005)"
              },
              narrow: "TRL",
              symbol: "TRL"
            },
            TRY: {
              displayName: {
                one: "livre turque",
                other: "livres turques"
              },
              narrow: "₺",
              symbol: "TRY"
            },
            TTD: {
              displayName: {
                one: "dollar de Trinité-et-Tobago",
                other: "dollars de Trinité-et-Tobago"
              },
              narrow: "$",
              symbol: "$TT"
            },
            TWD: {
              displayName: {
                one: "nouveau dollar taïwanais",
                other: "nouveaux dollars taïwanais"
              },
              narrow: "NT$",
              symbol: "TWD"
            },
            TZS: {
              displayName: {
                one: "shilling tanzanien",
                other: "shillings tanzaniens"
              },
              narrow: "TZS",
              symbol: "TZS"
            },
            UAH: {
              displayName: {
                one: "hryvnia ukrainienne",
                other: "hryvnias ukrainiennes"
              },
              narrow: "₴",
              symbol: "UAH"
            },
            UAK: {
              displayName: {
                one: "karbovanets ukrainien (1992–1996)",
                other: "karbovanets ukrainiens (1992–1996)"
              },
              narrow: "UAK",
              symbol: "UAK"
            },
            UGS: {
              displayName: {
                one: "shilling ougandais (1966–1987)",
                other: "shillings ougandais (1966–1987)"
              },
              narrow: "UGS",
              symbol: "UGS"
            },
            UGX: {
              displayName: {
                one: "shilling ougandais",
                other: "shillings ougandais"
              },
              narrow: "UGX",
              symbol: "UGX"
            },
            USD: {
              displayName: {
                one: "dollar des États-Unis",
                other: "dollars des États-Unis"
              },
              narrow: "$",
              symbol: "$US"
            },
            USN: {
              displayName: {
                one: "dollar des États-Unis (jour suivant)",
                other: "dollars des États-Unis (jour suivant)"
              },
              narrow: "USN",
              symbol: "USN"
            },
            USS: {
              displayName: {
                one: "dollar des États-Unis (jour même)",
                other: "dollars des États-Unis (jour même)"
              },
              narrow: "USS",
              symbol: "USS"
            },
            UYI: {
              displayName: {
                one: "peso uruguayen (unités indexées)",
                other: "pesos uruguayen (unités indexées)"
              },
              narrow: "UYI",
              symbol: "UYI"
            },
            UYP: {
              displayName: {
                one: "peso uruguayen (1975–1993)",
                other: "pesos uruguayens (1975–1993)"
              },
              narrow: "UYP",
              symbol: "UYP"
            },
            UYU: {
              displayName: {
                one: "peso uruguayen",
                other: "pesos uruguayens"
              },
              narrow: "$",
              symbol: "$UY"
            },
            UZS: {
              displayName: {
                one: "sum ouzbek",
                other: "sums ouzbeks"
              },
              narrow: "UZS",
              symbol: "UZS"
            },
            VEB: {
              displayName: {
                other: "bolivar vénézuélien (1871–2008)"
              },
              narrow: "VEB",
              symbol: "VEB"
            },
            VEF: {
              displayName: {
                one: "bolivar vénézuélien (2008–2018)",
                other: "bolivars vénézuéliens (2008–2018)"
              },
              narrow: "Bs",
              symbol: "VEF"
            },
            VES: {
              displayName: {
                one: "bolivar vénézuélien",
                other: "bolivars vénézuéliens"
              },
              narrow: "VES",
              symbol: "VES"
            },
            VND: {
              displayName: {
                one: "dông vietnamien",
                other: "dôngs vietnamiens"
              },
              narrow: "₫",
              symbol: "₫"
            },
            VUV: {
              displayName: {
                one: "vatu vanuatuan",
                other: "vatus vanuatuans"
              },
              narrow: "VUV",
              symbol: "VUV"
            },
            WST: {
              displayName: {
                one: "tala samoan",
                other: "talas samoans"
              },
              narrow: "$WS",
              symbol: "$WS"
            },
            XAF: {
              displayName: {
                one: "franc CFA (BEAC)",
                other: "francs CFA (BEAC)"
              },
              narrow: "FCFA",
              symbol: "FCFA"
            },
            XAG: {
              displayName: {
                one: "once troy d’argent",
                other: "onces troy d’argent"
              },
              narrow: "XAG",
              symbol: "XAG"
            },
            XAU: {
              displayName: {
                one: "once troy d’or",
                other: "onces troy d’or"
              },
              narrow: "XAU",
              symbol: "XAU"
            },
            XBA: {
              displayName: {
                one: "unité composée européenne (EURCO)",
                other: "unités composées européennes (EURCO)"
              },
              narrow: "XBA",
              symbol: "XBA"
            },
            XBB: {
              displayName: {
                one: "unité monétaire européenne (UME–6)",
                other: "unités monétaires européennes (UME–6)"
              },
              narrow: "XBB",
              symbol: "XBB"
            },
            XBC: {
              displayName: {
                one: "unité de compte 9 européenne (UEC–9)",
                other: "unités de compte 9 européennes (UEC–9)"
              },
              narrow: "XBC",
              symbol: "XBC"
            },
            XBD: {
              displayName: {
                one: "unité de compte 17 européenne (UEC–17)",
                other: "unités de compte 17 européennes (UEC–17)"
              },
              narrow: "XBD",
              symbol: "XBD"
            },
            XCD: {
              displayName: {
                one: "dollar des Caraïbes orientales",
                other: "dollars des Caraïbes orientales"
              },
              narrow: "$",
              symbol: "XCD"
            },
            XCG: {
              displayName: {
                one: "florin caribéen",
                other: "florins caribéens"
              },
              narrow: "Cg.",
              symbol: "Cg."
            },
            XDR: {
              displayName: {
                one: "droit de tirage spécial",
                other: "droits de tirage spéciaux"
              },
              narrow: "XDR",
              symbol: "XDR"
            },
            XEU: {
              displayName: {
                other: "unité de compte européenne (ECU)"
              },
              narrow: "XEU",
              symbol: "XEU"
            },
            XFO: {
              displayName: {
                one: "franc or",
                other: "francs or"
              },
              narrow: "XFO",
              symbol: "XFO"
            },
            XFU: {
              displayName: {
                one: "franc UIC",
                other: "francs UIC"
              },
              narrow: "XFU",
              symbol: "XFU"
            },
            XOF: {
              displayName: {
                one: "franc CFA (BCEAO)",
                other: "francs CFA (BCEAO)"
              },
              narrow: "F CFA",
              symbol: "F CFA"
            },
            XPD: {
              displayName: {
                one: "once troy de palladium",
                other: "onces troy de palladium"
              },
              narrow: "XPD",
              symbol: "XPD"
            },
            XPF: {
              displayName: {
                one: "franc CFP",
                other: "francs CFP"
              },
              narrow: "FCFP",
              symbol: "FCFP"
            },
            XPT: {
              displayName: {
                one: "once troy de platine",
                other: "onces troy de platine"
              },
              narrow: "XPT",
              symbol: "XPT"
            },
            XRE: {
              displayName: {
                one: "unité de fonds RINET",
                other: "unités de fonds RINET"
              },
              narrow: "XRE",
              symbol: "XRE"
            },
            XTS: {
              displayName: {
                one: "(devise de test)",
                other: "(devises de test)"
              },
              narrow: "XTS",
              symbol: "XTS"
            },
            XXX: {
              displayName: {
                one: "devise inconnue",
                other: "devises inconnues"
              },
              narrow: "¤",
              symbol: "¤"
            },
            YDD: {
              displayName: {
                one: "dinar nord-yéménite",
                other: "dinars nord-yéménites"
              },
              narrow: "YDD",
              symbol: "YDD"
            },
            YER: {
              displayName: {
                one: "riyal yéménite",
                other: "riyals yéménites"
              },
              narrow: "YER",
              symbol: "YER"
            },
            YUD: {
              displayName: {
                one: "dinar fort yougoslave (1966–1989)",
                other: "dinars forts yougoslaves (1966–1989)"
              },
              narrow: "YUD",
              symbol: "YUD"
            },
            YUM: {
              displayName: {
                one: "nouveau dinar yougoslave (1994–2003)",
                other: "nouveaux dinars yougoslaves (1994–2003)"
              },
              narrow: "YUM",
              symbol: "YUM"
            },
            YUN: {
              displayName: {
                one: "dinar convertible yougoslave (1990–1992)",
                other: "dinars convertibles yougoslaves (1990–1992)"
              },
              narrow: "YUN",
              symbol: "YUN"
            },
            ZAL: {
              displayName: {
                one: "rand sud-africain (financier)",
                other: "rands sud-africains (financiers)"
              },
              narrow: "ZAL",
              symbol: "ZAL"
            },
            ZAR: {
              displayName: {
                one: "rand sud-africain",
                other: "rands sud-africains"
              },
              narrow: "R",
              symbol: "ZAR"
            },
            ZMK: {
              displayName: {
                one: "kwacha zambien (1968–2012)",
                other: "kwachas zambiens (1968–2012)"
              },
              narrow: "ZMK",
              symbol: "ZMK"
            },
            ZMW: {
              displayName: {
                one: "kwacha zambien",
                other: "kwachas zambiens"
              },
              narrow: "Kw",
              symbol: "ZMW"
            },
            ZRN: {
              displayName: {
                one: "nouveau zaïre zaïrien",
                other: "nouveaux zaïres zaïriens"
              },
              narrow: "ZRN",
              symbol: "ZRN"
            },
            ZRZ: {
              displayName: {
                one: "zaïre zaïrois",
                other: "zaïres zaïrois"
              },
              narrow: "ZRZ",
              symbol: "ZRZ"
            },
            ZWD: {
              displayName: {
                one: "dollar zimbabwéen",
                other: "dollars zimbabwéens"
              },
              narrow: "ZWD",
              symbol: "ZWD"
            },
            ZWL: {
              displayName: {
                one: "dollar zimbabwéen (2009)",
                other: "dollars zimbabwéens (2009)"
              },
              narrow: "ZWL",
              symbol: "ZWL"
            },
            ZWR: {
              displayName: {
                one: "dollar zimbabwéen (2008)",
                other: "dollars zimbabwéens (2008)"
              },
              narrow: "ZWR",
              symbol: "ZWR"
            }
          },
          nu: ["latn"],
          numbers: {
            currency: {
              latn: {
                accounting: "#,##0.00 ¤;(#,##0.00 ¤)",
                currencySpacing: {
                  afterInsertBetween: " ",
                  beforeInsertBetween: " "
                },
                short: {
                  1e3: {
                    other: "0 k ¤"
                  },
                  1e4: {
                    other: "00 k ¤"
                  },
                  1e5: {
                    other: "000 k ¤"
                  },
                  1e6: {
                    other: "0 M ¤"
                  },
                  1e7: {
                    other: "00 M ¤"
                  },
                  1e8: {
                    other: "000 M ¤"
                  },
                  1e9: {
                    other: "0 Md ¤"
                  },
                  1e10: {
                    other: "00 Md ¤"
                  },
                  1e11: {
                    other: "000 Md ¤"
                  },
                  1e12: {
                    other: "0 Bn ¤"
                  },
                  1e13: {
                    other: "00 Bn ¤"
                  },
                  1e14: {
                    other: "000 Bn ¤"
                  }
                },
                standard: "#,##0.00 ¤",
                unitPattern: "{0} {1}"
              }
            },
            decimal: {
              latn: {
                long: {
                  1e3: {
                    one: "0 millier",
                    other: "0 mille"
                  },
                  1e4: {
                    other: "00 mille"
                  },
                  1e5: {
                    other: "000 mille"
                  },
                  1e6: {
                    one: "0 million",
                    other: "0 millions"
                  },
                  1e7: {
                    one: "00 million",
                    other: "00 millions"
                  },
                  1e8: {
                    one: "000 million",
                    other: "000 millions"
                  },
                  1e9: {
                    one: "0 milliard",
                    other: "0 milliards"
                  },
                  1e10: {
                    one: "00 milliard",
                    other: "00 milliards"
                  },
                  1e11: {
                    one: "000 milliard",
                    other: "000 milliards"
                  },
                  1e12: {
                    one: "0 billion",
                    other: "0 billions"
                  },
                  1e13: {
                    one: "00 billion",
                    other: "00 billions"
                  },
                  1e14: {
                    one: "000 billion",
                    other: "000 billions"
                  }
                },
                short: {
                  1e3: {
                    other: "0 k"
                  },
                  1e4: {
                    other: "00 k"
                  },
                  1e5: {
                    other: "000 k"
                  },
                  1e6: {
                    other: "0 M"
                  },
                  1e7: {
                    other: "00 M"
                  },
                  1e8: {
                    other: "000 M"
                  },
                  1e9: {
                    other: "0 Md"
                  },
                  1e10: {
                    other: "00 Md"
                  },
                  1e11: {
                    other: "000 Md"
                  },
                  1e12: {
                    other: "0 Bn"
                  },
                  1e13: {
                    other: "00 Bn"
                  },
                  1e14: {
                    other: "000 Bn"
                  }
                },
                standard: "#,##0.###"
              }
            },
            nu: ["latn"],
            percent: {
              latn: "#,##0 %"
            },
            symbols: {
              latn: {
                approximatelySign: "≃",
                decimal: ",",
                exponential: "E",
                group: " ",
                infinity: "∞",
                list: ";",
                minusSign: "-",
                nan: "NaN",
                perMille: "‰",
                percentSign: "%",
                plusSign: "+",
                rangeSign: "–",
                superscriptingExponent: "×",
                timeSeparator: ":"
              }
            }
          },
          units: {
            compound: {
              per: {
                long: "{0} par {1}",
                narrow: "{0}/{1}",
                short: "{0}/{1}"
              }
            },
            simple: {
              acre: {
                long: {
                  one: "{0} acre anglo-saxonne",
                  other: "{0} acres anglo-saxonnes"
                },
                narrow: {
                  other: "{0}ac"
                },
                perUnit: {},
                short: {
                  other: "{0} ac"
                }
              },
              bit: {
                long: {
                  one: "{0} bit",
                  other: "{0} bits"
                },
                narrow: {
                  other: "{0}bit"
                },
                perUnit: {},
                short: {
                  other: "{0} bit"
                }
              },
              byte: {
                long: {
                  one: "{0} octet",
                  other: "{0} octets"
                },
                narrow: {
                  other: "{0}o"
                },
                perUnit: {},
                short: {
                  other: "{0} o"
                }
              },
              celsius: {
                long: {
                  one: "{0} degré Celsius",
                  other: "{0} degrés Celsius"
                },
                narrow: {
                  other: "{0}°C"
                },
                perUnit: {},
                short: {
                  other: "{0} °C"
                }
              },
              centimeter: {
                long: {
                  one: "{0} centimètre",
                  other: "{0} centimètres"
                },
                narrow: {
                  other: "{0}cm"
                },
                perUnit: {
                  long: "{0} par centimètre",
                  narrow: "{0}/cm",
                  short: "{0}/cm"
                },
                short: {
                  other: "{0} cm"
                }
              },
              day: {
                long: {
                  one: "{0} jour",
                  other: "{0} jours"
                },
                narrow: {
                  other: "{0}j"
                },
                perUnit: {
                  long: "{0} par jour",
                  narrow: "{0}/j",
                  short: "{0}/j"
                },
                short: {
                  other: "{0} j"
                }
              },
              degree: {
                long: {
                  one: "{0} degré",
                  other: "{0} degrés"
                },
                narrow: {
                  other: "{0}°"
                },
                perUnit: {},
                short: {
                  other: "{0}°"
                }
              },
              fahrenheit: {
                long: {
                  one: "{0} degré Fahrenheit",
                  other: "{0} degrés Fahrenheit"
                },
                narrow: {
                  other: "{0}°F"
                },
                perUnit: {},
                short: {
                  other: "{0} °F"
                }
              },
              "fluid-ounce": {
                long: {
                  one: "{0} once liquide",
                  other: "{0} onces liquides"
                },
                narrow: {
                  other: "{0}fl oz"
                },
                perUnit: {},
                short: {
                  other: "{0} fl oz"
                }
              },
              foot: {
                long: {
                  one: "{0} pied",
                  other: "{0} pieds"
                },
                narrow: {
                  other: "{0}′"
                },
                perUnit: {
                  long: "{0} par pied",
                  narrow: "{0}/pi",
                  short: "{0}/pi"
                },
                short: {
                  other: "{0} pi"
                }
              },
              gallon: {
                long: {
                  one: "{0} gallon",
                  other: "{0} gallons"
                },
                narrow: {
                  other: "{0}gal"
                },
                perUnit: {
                  long: "{0} par gallon",
                  narrow: "{0}/gal",
                  short: "{0}/gal"
                },
                short: {
                  other: "{0} gal"
                }
              },
              gigabit: {
                long: {
                  one: "{0} gigabit",
                  other: "{0} gigabits"
                },
                narrow: {
                  other: "{0}Gbit"
                },
                perUnit: {},
                short: {
                  other: "{0} Gbit"
                }
              },
              gigabyte: {
                long: {
                  one: "{0} gigaoctet",
                  other: "{0} gigaoctets"
                },
                narrow: {
                  other: "{0}Go"
                },
                perUnit: {},
                short: {
                  other: "{0} Go"
                }
              },
              gram: {
                long: {
                  one: "{0} gramme",
                  other: "{0} grammes"
                },
                narrow: {
                  other: "{0}g"
                },
                perUnit: {
                  long: "{0} par gramme",
                  narrow: "{0}/g",
                  short: "{0}/g"
                },
                short: {
                  other: "{0} g"
                }
              },
              hectare: {
                long: {
                  one: "{0} hectare",
                  other: "{0} hectares"
                },
                narrow: {
                  other: "{0}ha"
                },
                perUnit: {},
                short: {
                  other: "{0} ha"
                }
              },
              hour: {
                long: {
                  one: "{0} heure",
                  other: "{0} heures"
                },
                narrow: {
                  other: "{0}h"
                },
                perUnit: {
                  long: "{0} par heure",
                  narrow: "{0}/h",
                  short: "{0}/h"
                },
                short: {
                  other: "{0} h"
                }
              },
              inch: {
                long: {
                  one: "{0} pouce",
                  other: "{0} pouces"
                },
                narrow: {
                  other: "{0}″"
                },
                perUnit: {
                  long: "{0} par pouce",
                  narrow: "{0}/po",
                  short: "{0}/po"
                },
                short: {
                  other: "{0} po"
                }
              },
              kilobit: {
                long: {
                  one: "{0} kilobit",
                  other: "{0} kilobits"
                },
                narrow: {
                  other: "{0}kbit"
                },
                perUnit: {},
                short: {
                  other: "{0} kbit"
                }
              },
              kilobyte: {
                long: {
                  one: "{0} kilooctet",
                  other: "{0} kilooctets"
                },
                narrow: {
                  other: "{0}ko"
                },
                perUnit: {},
                short: {
                  other: "{0} ko"
                }
              },
              kilogram: {
                long: {
                  one: "{0} kilogramme",
                  other: "{0} kilogrammes"
                },
                narrow: {
                  other: "{0}kg"
                },
                perUnit: {
                  long: "{0} par kilogramme",
                  narrow: "{0}/kg",
                  short: "{0}/kg"
                },
                short: {
                  other: "{0} kg"
                }
              },
              kilometer: {
                long: {
                  one: "{0} kilomètre",
                  other: "{0} kilomètres"
                },
                narrow: {
                  other: "{0}km"
                },
                perUnit: {
                  long: "{0} par kilomètre",
                  narrow: "{0}/km",
                  short: "{0}/km"
                },
                short: {
                  other: "{0} km"
                }
              },
              "kilometer-per-hour": {
                long: {
                  one: "{0} kilomètre par heure",
                  other: "{0} kilomètres par heure"
                },
                narrow: {
                  other: "{0}km/h"
                },
                perUnit: {},
                short: {
                  other: "{0} km/h"
                }
              },
              liter: {
                long: {
                  one: "{0} litre",
                  other: "{0} litres"
                },
                narrow: {
                  other: "{0}l"
                },
                perUnit: {
                  long: "{0} par litre",
                  narrow: "{0}/l",
                  short: "{0}/l"
                },
                short: {
                  other: "{0} l"
                }
              },
              "liter-per-kilometer": {
                long: {
                  one: "{0} litre au kilomètre",
                  other: "{0} litres au kilomètre"
                },
                narrow: {
                  other: "{0}l/km"
                },
                perUnit: {},
                short: {
                  other: "{0} l/km"
                }
              },
              megabit: {
                long: {
                  one: "{0} mégabit",
                  other: "{0} mégabits"
                },
                narrow: {
                  other: "{0}Mbit"
                },
                perUnit: {},
                short: {
                  other: "{0} Mbit"
                }
              },
              megabyte: {
                long: {
                  one: "{0} mégaoctet",
                  other: "{0} mégaoctets"
                },
                narrow: {
                  other: "{0}Mo"
                },
                perUnit: {},
                short: {
                  other: "{0} Mo"
                }
              },
              meter: {
                long: {
                  one: "{0} mètre",
                  other: "{0} mètres"
                },
                narrow: {
                  other: "{0}m"
                },
                perUnit: {
                  long: "{0} par mètre",
                  narrow: "{0}/m",
                  short: "{0}/m"
                },
                short: {
                  other: "{0} m"
                }
              },
              "meter-per-second": {
                long: {
                  one: "{0} mètre par seconde",
                  other: "{0} mètres par seconde"
                },
                narrow: {
                  one: "{0} m/s",
                  other: "{0}m/s"
                },
                perUnit: {},
                short: {
                  other: "{0} m/s"
                }
              },
              mile: {
                long: {
                  one: "{0} mile",
                  other: "{0} miles"
                },
                narrow: {
                  other: "{0}mi"
                },
                perUnit: {},
                short: {
                  other: "{0} mi"
                }
              },
              "mile-per-gallon": {
                long: {
                  one: "{0} mile par gallon",
                  other: "{0} miles par gallon"
                },
                narrow: {
                  other: "{0}mi/gal"
                },
                perUnit: {},
                short: {
                  other: "{0} mi/gal"
                }
              },
              "mile-per-hour": {
                long: {
                  one: "{0} mile par heure",
                  other: "{0} miles par heure"
                },
                narrow: {
                  other: "{0} mi/h"
                },
                perUnit: {},
                short: {
                  other: "{0} mi/h"
                }
              },
              "mile-scandinavian": {
                long: {
                  one: "{0} mille scandinave",
                  other: "{0} milles scandinaves"
                },
                narrow: {
                  other: "{0} smi"
                },
                perUnit: {},
                short: {
                  other: "{0} smi"
                }
              },
              milliliter: {
                long: {
                  one: "{0} millilitre",
                  other: "{0} millilitres"
                },
                narrow: {
                  other: "{0}ml"
                },
                perUnit: {},
                short: {
                  other: "{0} ml"
                }
              },
              millimeter: {
                long: {
                  one: "{0} millimètre",
                  other: "{0} millimètres"
                },
                narrow: {
                  other: "{0}mm"
                },
                perUnit: {},
                short: {
                  other: "{0} mm"
                }
              },
              millisecond: {
                long: {
                  one: "{0} milliseconde",
                  other: "{0} millisecondes"
                },
                narrow: {
                  other: "{0}ms"
                },
                perUnit: {},
                short: {
                  other: "{0} ms"
                }
              },
              minute: {
                long: {
                  one: "{0} minute",
                  other: "{0} minutes"
                },
                narrow: {
                  other: "{0}min"
                },
                perUnit: {
                  long: "{0} par minute",
                  narrow: "{0}/min",
                  short: "{0}/min"
                },
                short: {
                  other: "{0} min"
                }
              },
              month: {
                long: {
                  other: "{0} mois"
                },
                narrow: {
                  other: "{0}m."
                },
                perUnit: {
                  long: "{0} par mois",
                  narrow: "{0}/m.",
                  short: "{0}/m."
                },
                short: {
                  other: "{0} m."
                }
              },
              ounce: {
                long: {
                  one: "{0} once",
                  other: "{0} onces"
                },
                narrow: {
                  other: "{0}oz"
                },
                perUnit: {
                  long: "{0} par once",
                  narrow: "{0}/oz",
                  short: "{0}/oz"
                },
                short: {
                  other: "{0} oz"
                }
              },
              percent: {
                long: {
                  other: "{0} pour cent"
                },
                narrow: {
                  other: "{0} %"
                },
                perUnit: {},
                short: {
                  other: "{0} %"
                }
              },
              petabyte: {
                long: {
                  one: "{0} pétaoctet",
                  other: "{0} pétaoctets"
                },
                narrow: {
                  other: "{0}Po"
                },
                perUnit: {},
                short: {
                  other: "{0} Po"
                }
              },
              pound: {
                long: {
                  one: "{0} livre",
                  other: "{0} livres"
                },
                narrow: {
                  other: "{0}lb"
                },
                perUnit: {
                  long: "{0} par livre",
                  narrow: "{0}/lb",
                  short: "{0}/lb"
                },
                short: {
                  other: "{0} lb"
                }
              },
              second: {
                long: {
                  one: "{0} seconde",
                  other: "{0} secondes"
                },
                narrow: {
                  other: "{0}s"
                },
                perUnit: {
                  long: "{0} par seconde",
                  narrow: "{0}/s",
                  short: "{0}/s"
                },
                short: {
                  other: "{0} s"
                }
              },
              stone: {
                long: {
                  one: "{0} stone",
                  other: "{0} stones"
                },
                narrow: {
                  other: "{0} st"
                },
                perUnit: {},
                short: {
                  other: "{0} st"
                }
              },
              terabit: {
                long: {
                  one: "{0} térabit",
                  other: "{0} térabits"
                },
                narrow: {
                  other: "{0}Tbit"
                },
                perUnit: {},
                short: {
                  one: "{0} Tbit",
                  other: "{0} Tbit"
                }
              },
              terabyte: {
                long: {
                  one: "{0} téraoctet",
                  other: "{0} téraoctets"
                },
                narrow: {
                  other: "{0}To"
                },
                perUnit: {},
                short: {
                  other: "{0} To"
                }
              },
              week: {
                long: {
                  one: "{0} semaine",
                  other: "{0} semaines"
                },
                narrow: {
                  other: "{0}sem."
                },
                perUnit: {
                  long: "{0} par semaine",
                  narrow: "{0}/sem.",
                  short: "{0}/sem."
                },
                short: {
                  other: "{0} sem."
                }
              },
              yard: {
                long: {
                  one: "{0} yard",
                  other: "{0} yards"
                },
                narrow: {
                  other: "{0}yd"
                },
                perUnit: {},
                short: {
                  other: "{0} yd"
                }
              },
              year: {
                long: {
                  one: "{0} an",
                  other: "{0} ans"
                },
                narrow: {
                  other: "{0}a"
                },
                perUnit: {
                  long: "{0} par an",
                  narrow: "{0}/a",
                  short: "{0}/an"
                },
                short: {
                  one: "{0} an",
                  other: "{0} ans"
                }
              }
            }
          }
        },
        locale: "fr"
      })
    }
  }
]);