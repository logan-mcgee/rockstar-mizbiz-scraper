try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new o.Error).stack;
  a && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[a] = "3e387310-eabf-4b27-80f1-104da25b0854", o._sentryDebugIdIdentifier = "sentry-dbid-3e387310-eabf-4b27-80f1-104da25b0854")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [7073], {
    53135: () => {
      Intl.NumberFormat && "function" == typeof Intl.NumberFormat.__addLocaleData && Intl.NumberFormat.__addLocaleData({
        data: {
          currencies: {
            ADP: {
              displayName: {
                other: "peseta andorrana"
              },
              narrow: "ADP",
              symbol: "ADP"
            },
            AED: {
              displayName: {
                other: "dirham degli EAU"
              },
              narrow: "AED",
              symbol: "AED"
            },
            AFA: {
              displayName: {
                other: "afgani (1927–2002)"
              },
              narrow: "AFA",
              symbol: "AFA"
            },
            AFN: {
              displayName: {
                other: "afghani"
              },
              narrow: "؋",
              symbol: "AFN"
            },
            ALL: {
              displayName: {
                one: "lek albanese",
                other: "lekë albanesi"
              },
              narrow: "ALL",
              symbol: "ALL"
            },
            AMD: {
              displayName: {
                one: "dram armeno",
                other: "dram armeni"
              },
              narrow: "֏",
              symbol: "AMD"
            },
            ANG: {
              displayName: {
                one: "fiorino delle Antille olandesi",
                other: "fiorini delle Antille olandesi"
              },
              narrow: "ANG",
              symbol: "ANG"
            },
            AOA: {
              displayName: {
                one: "kwanza angolano",
                other: "kwanzas angolani"
              },
              narrow: "Kz",
              symbol: "AOA"
            },
            AOK: {
              displayName: {
                other: "kwanza angolano (1977–1990)"
              },
              narrow: "AOK",
              symbol: "AOK"
            },
            AON: {
              displayName: {
                other: "nuovo kwanza angolano (1990–2000)"
              },
              narrow: "AON",
              symbol: "AON"
            },
            AOR: {
              displayName: {
                other: "kwanza reajustado angolano (1995–1999)"
              },
              narrow: "AOR",
              symbol: "AOR"
            },
            ARA: {
              displayName: {
                other: "austral argentino"
              },
              narrow: "ARA",
              symbol: "ARA"
            },
            ARP: {
              displayName: {
                other: "peso argentino (vecchio Cod.)"
              },
              narrow: "ARP",
              symbol: "ARP"
            },
            ARS: {
              displayName: {
                one: "peso argentino",
                other: "pesos argentini"
              },
              narrow: "$",
              symbol: "ARS"
            },
            ATS: {
              displayName: {
                other: "scellino austriaco"
              },
              narrow: "ATS",
              symbol: "ATS"
            },
            AUD: {
              displayName: {
                one: "dollaro australiano",
                other: "dollari australiani"
              },
              narrow: "$",
              symbol: "A$"
            },
            AWG: {
              displayName: {
                one: "fiorino di Aruba",
                other: "fiorini di Aruba"
              },
              narrow: "AWG",
              symbol: "AWG"
            },
            AZM: {
              displayName: {
                other: "manat azero (1993–2006)"
              },
              narrow: "AZM",
              symbol: "AZM"
            },
            AZN: {
              displayName: {
                one: "manat azero",
                other: "manat azeri"
              },
              narrow: "₼",
              symbol: "AZN"
            },
            BAD: {
              displayName: {
                other: "dinar Bosnia-Herzegovina"
              },
              narrow: "BAD",
              symbol: "BAD"
            },
            BAM: {
              displayName: {
                one: "marco convertibile della Bosnia-Herzegovina",
                other: "marchi convertibili della Bosnia-Herzegovina"
              },
              narrow: "KM",
              symbol: "BAM"
            },
            BBD: {
              displayName: {
                one: "dollaro di Barbados",
                other: "dollari di Barbados"
              },
              narrow: "$",
              symbol: "BBD"
            },
            BDT: {
              displayName: {
                one: "taka bengalese",
                other: "taka bengalesi"
              },
              narrow: "৳",
              symbol: "BDT"
            },
            BEC: {
              displayName: {
                other: "franco belga (convertibile)"
              },
              narrow: "BEC",
              symbol: "BEC"
            },
            BEF: {
              displayName: {
                other: "franco belga"
              },
              narrow: "BEF",
              symbol: "BEF"
            },
            BEL: {
              displayName: {
                other: "franco belga (finanziario)"
              },
              narrow: "BEL",
              symbol: "BEL"
            },
            BGL: {
              displayName: {
                one: "lev bulgaro (1962–1999)",
                other: "leva bulgari (1962–1999)"
              },
              narrow: "BGL",
              symbol: "BGL"
            },
            BGN: {
              displayName: {
                one: "lev bulgaro",
                other: "leva bulgari"
              },
              narrow: "BGN",
              symbol: "BGN"
            },
            BHD: {
              displayName: {
                one: "dinaro del Bahrein",
                other: "dinari del Bahrein"
              },
              narrow: "BHD",
              symbol: "BHD"
            },
            BIF: {
              displayName: {
                one: "franco del Burundi",
                other: "franchi del Burundi"
              },
              narrow: "BIF",
              symbol: "BIF"
            },
            BMD: {
              displayName: {
                one: "dollaro delle Bermuda",
                other: "dollari delle Bermuda"
              },
              narrow: "$",
              symbol: "BMD"
            },
            BND: {
              displayName: {
                one: "dollaro del Brunei",
                other: "dollari del Brunei"
              },
              narrow: "$",
              symbol: "BND"
            },
            BOB: {
              displayName: {
                one: "boliviano",
                other: "boliviani"
              },
              narrow: "Bs",
              symbol: "BOB"
            },
            BOP: {
              displayName: {
                other: "peso boliviano"
              },
              narrow: "BOP",
              symbol: "BOP"
            },
            BOV: {
              displayName: {
                other: "mvdol boliviano"
              },
              narrow: "BOV",
              symbol: "BOV"
            },
            BRB: {
              displayName: {
                other: "cruzeiro novo brasiliano (1967–1986)"
              },
              narrow: "BRB",
              symbol: "BRB"
            },
            BRC: {
              displayName: {
                other: "cruzado brasiliano"
              },
              narrow: "BRC",
              symbol: "BRC"
            },
            BRE: {
              displayName: {
                other: "cruzeiro brasiliano (1990–1993)"
              },
              narrow: "BRE",
              symbol: "BRE"
            },
            BRL: {
              displayName: {
                one: "real brasiliano",
                other: "real brasiliani"
              },
              narrow: "R$",
              symbol: "BRL"
            },
            BRN: {
              displayName: {
                other: "cruzado novo brasiliano"
              },
              narrow: "BRN",
              symbol: "BRN"
            },
            BRR: {
              displayName: {
                other: "cruzeiro brasiliano"
              },
              narrow: "BRR",
              symbol: "BRR"
            },
            BSD: {
              displayName: {
                one: "dollaro delle Bahamas",
                other: "dollari delle Bahamas"
              },
              narrow: "$",
              symbol: "BSD"
            },
            BTN: {
              displayName: {
                one: "ngultrum bhutanese",
                other: "ngultrum bhutanesi"
              },
              narrow: "BTN",
              symbol: "BTN"
            },
            BUK: {
              displayName: {
                other: "kyat birmano"
              },
              narrow: "BUK",
              symbol: "BUK"
            },
            BWP: {
              displayName: {
                other: "pula del Botswana"
              },
              narrow: "P",
              symbol: "BWP"
            },
            BYB: {
              displayName: {
                other: "nuovo rublo bielorusso (1994–1999)"
              },
              narrow: "BYB",
              symbol: "BYB"
            },
            BYN: {
              displayName: {
                one: "rublo bielorusso",
                other: "rubli bielorussi"
              },
              narrow: "Br",
              symbol: "BYN"
            },
            BYR: {
              displayName: {
                one: "rublo bielorusso (2000–2016)",
                other: "rubli bielorussi (2000–2016)"
              },
              narrow: "BYR",
              symbol: "BYR"
            },
            BZD: {
              displayName: {
                one: "dollaro del Belize",
                other: "dollari del Belize"
              },
              narrow: "$",
              symbol: "BZD"
            },
            CAD: {
              displayName: {
                one: "dollaro canadese",
                other: "dollari canadesi"
              },
              narrow: "$",
              symbol: "CA$"
            },
            CDF: {
              displayName: {
                one: "franco congolese",
                other: "franchi congolesi"
              },
              narrow: "CDF",
              symbol: "CDF"
            },
            CHF: {
              displayName: {
                one: "franco svizzero",
                other: "franchi svizzeri"
              },
              narrow: "CHF",
              symbol: "CHF"
            },
            CLF: {
              displayName: {
                other: "unidades de fomento chilene"
              },
              narrow: "CLF",
              symbol: "CLF"
            },
            CLP: {
              displayName: {
                one: "peso cileno",
                other: "pesos cileni"
              },
              narrow: "$",
              symbol: "CLP"
            },
            CNH: {
              displayName: {
                one: "renmimbi cinese offshore",
                other: "renmimbi cinesi offshore"
              },
              narrow: "CNH",
              symbol: "CNH"
            },
            CNY: {
              displayName: {
                one: "yuan cinese",
                other: "yuan cinesi"
              },
              narrow: "¥",
              symbol: "CN¥"
            },
            COP: {
              displayName: {
                one: "peso colombiano",
                other: "pesos colombiani"
              },
              narrow: "$",
              symbol: "COP"
            },
            CRC: {
              displayName: {
                one: "colón costaricano",
                other: "colón costaricani"
              },
              narrow: "₡",
              symbol: "CRC"
            },
            CSD: {
              displayName: {
                other: "antico dinaro serbo"
              },
              narrow: "CSD",
              symbol: "CSD"
            },
            CSK: {
              displayName: {
                other: "corona forte cecoslovacca"
              },
              narrow: "CSK",
              symbol: "CSK"
            },
            CUC: {
              displayName: {
                one: "peso cubano convertibile",
                other: "pesos cubani convertibili"
              },
              narrow: "$",
              symbol: "CUC"
            },
            CUP: {
              displayName: {
                one: "peso cubano",
                other: "pesos cubani"
              },
              narrow: "$",
              symbol: "CUP"
            },
            CVE: {
              displayName: {
                one: "escudo capoverdiano",
                other: "escudos capoverdiani"
              },
              narrow: "CVE",
              symbol: "CVE"
            },
            CYP: {
              displayName: {
                other: "sterlina cipriota"
              },
              narrow: "CYP",
              symbol: "CYP"
            },
            CZK: {
              displayName: {
                one: "corona ceca",
                other: "corone ceche"
              },
              narrow: "Kč",
              symbol: "CZK"
            },
            DDM: {
              displayName: {
                other: "ostmark della Germania Orientale"
              },
              narrow: "DDM",
              symbol: "DDM"
            },
            DEM: {
              displayName: {
                other: "marco tedesco"
              },
              narrow: "DEM",
              symbol: "DEM"
            },
            DJF: {
              displayName: {
                one: "franco di Gibuti",
                other: "franchi di Gibuti"
              },
              narrow: "DJF",
              symbol: "DJF"
            },
            DKK: {
              displayName: {
                one: "corona danese",
                other: "corone danesi"
              },
              narrow: "kr",
              symbol: "DKK"
            },
            DOP: {
              displayName: {
                one: "peso dominicano",
                other: "pesos dominicani"
              },
              narrow: "$",
              symbol: "DOP"
            },
            DZD: {
              displayName: {
                one: "dinaro algerino",
                other: "dinari algerini"
              },
              narrow: "DZD",
              symbol: "DZD"
            },
            ECS: {
              displayName: {
                other: "sucre dell’Ecuador"
              },
              narrow: "ECS",
              symbol: "ECS"
            },
            ECV: {
              displayName: {
                other: "unidad de valor constante (UVC) dell’Ecuador"
              },
              narrow: "ECV",
              symbol: "ECV"
            },
            EEK: {
              displayName: {
                other: "corona dell’Estonia"
              },
              narrow: "EEK",
              symbol: "EEK"
            },
            EGP: {
              displayName: {
                one: "sterlina egiziana",
                other: "sterline egiziane"
              },
              narrow: "£E",
              symbol: "EGP"
            },
            ERN: {
              displayName: {
                one: "nakfa eritreo",
                other: "nakfa eritrei"
              },
              narrow: "ERN",
              symbol: "ERN"
            },
            ESA: {
              displayName: {
                other: "peseta spagnola account"
              },
              narrow: "ESA",
              symbol: "ESA"
            },
            ESB: {
              displayName: {
                other: "peseta spagnola account convertibile"
              },
              narrow: "ESB",
              symbol: "ESB"
            },
            ESP: {
              displayName: {
                other: "peseta spagnola"
              },
              narrow: "₧",
              symbol: "ESP"
            },
            ETB: {
              displayName: {
                one: "birr etiope",
                other: "birr etiopi"
              },
              narrow: "ETB",
              symbol: "ETB"
            },
            EUR: {
              displayName: {
                other: "euro"
              },
              narrow: "€",
              symbol: "€"
            },
            FIM: {
              displayName: {
                other: "markka finlandese"
              },
              narrow: "FIM",
              symbol: "FIM"
            },
            FJD: {
              displayName: {
                one: "dollaro delle Figi",
                other: "dollari delle Figi"
              },
              narrow: "$",
              symbol: "FJD"
            },
            FKP: {
              displayName: {
                one: "sterlina delle Falkland",
                other: "sterline delle Falkland"
              },
              narrow: "£",
              symbol: "FKP"
            },
            FRF: {
              displayName: {
                other: "franco francese"
              },
              narrow: "FRF",
              symbol: "FRF"
            },
            GBP: {
              displayName: {
                one: "sterlina britannica",
                other: "sterline britanniche"
              },
              narrow: "£",
              symbol: "£"
            },
            GEK: {
              displayName: {
                other: "kupon larit georgiano"
              },
              narrow: "GEK",
              symbol: "GEK"
            },
            GEL: {
              displayName: {
                one: "lari georgiano",
                other: "lari georgiani"
              },
              narrow: "₾",
              symbol: "GEL"
            },
            GHC: {
              displayName: {
                other: "cedi del Ghana"
              },
              narrow: "GHC",
              symbol: "GHC"
            },
            GHS: {
              displayName: {
                one: "cedi ghanese",
                other: "cedi ghanesi"
              },
              narrow: "GH₵",
              symbol: "GHS"
            },
            GIP: {
              displayName: {
                one: "sterlina di Gibilterra",
                other: "sterline di Gibilterra"
              },
              narrow: "£",
              symbol: "GIP"
            },
            GMD: {
              displayName: {
                one: "dalasi gambiano",
                other: "dalasi gambiani"
              },
              narrow: "GMD",
              symbol: "GMD"
            },
            GNF: {
              displayName: {
                one: "franco della Guinea",
                other: "franchi della Guinea"
              },
              narrow: "FG",
              symbol: "GNF"
            },
            GNS: {
              displayName: {
                other: "syli della Guinea"
              },
              narrow: "GNS",
              symbol: "GNS"
            },
            GQE: {
              displayName: {
                other: "ekwele della Guinea Equatoriale"
              },
              narrow: "GQE",
              symbol: "GQE"
            },
            GRD: {
              displayName: {
                other: "dracma greca"
              },
              narrow: "GRD",
              symbol: "GRD"
            },
            GTQ: {
              displayName: {
                one: "quetzal guatemalteco",
                other: "quetzal guatemaltechi"
              },
              narrow: "Q",
              symbol: "GTQ"
            },
            GWE: {
              displayName: {
                other: "escudo della Guinea portoghese"
              },
              narrow: "GWE",
              symbol: "GWE"
            },
            GWP: {
              displayName: {
                other: "peso della Guinea-Bissau"
              },
              narrow: "GWP",
              symbol: "GWP"
            },
            GYD: {
              displayName: {
                one: "dollaro della Guyana",
                other: "dollari della Guyana"
              },
              narrow: "$",
              symbol: "GYD"
            },
            HKD: {
              displayName: {
                one: "dollaro di Hong Kong",
                other: "dollari di Hong Kong"
              },
              narrow: "$",
              symbol: "HKD"
            },
            HNL: {
              displayName: {
                one: "lempira honduregna",
                other: "lempire honduregne"
              },
              narrow: "L",
              symbol: "HNL"
            },
            HRD: {
              displayName: {
                other: "dinaro croato"
              },
              narrow: "HRD",
              symbol: "HRD"
            },
            HRK: {
              displayName: {
                one: "kuna croata",
                other: "kune croate"
              },
              narrow: "kn",
              symbol: "HRK"
            },
            HTG: {
              displayName: {
                one: "gourde haitiano",
                other: "gourde haitiani"
              },
              narrow: "HTG",
              symbol: "HTG"
            },
            HUF: {
              displayName: {
                one: "fiorino ungherese",
                other: "fiorini ungheresi"
              },
              narrow: "Ft",
              symbol: "HUF"
            },
            IDR: {
              displayName: {
                one: "rupia indonesiana",
                other: "rupie indonesiane"
              },
              narrow: "Rp",
              symbol: "IDR"
            },
            IEP: {
              displayName: {
                other: "sterlina irlandese"
              },
              narrow: "IEP",
              symbol: "IEP"
            },
            ILP: {
              displayName: {
                other: "sterlina israeliana"
              },
              narrow: "ILP",
              symbol: "ILP"
            },
            ILS: {
              displayName: {
                one: "nuovo siclo israeliano",
                other: "nuovi sicli israeliani"
              },
              narrow: "₪",
              symbol: "₪"
            },
            INR: {
              displayName: {
                one: "rupia indiana",
                other: "rupie indiane"
              },
              narrow: "₹",
              symbol: "INR"
            },
            IQD: {
              displayName: {
                one: "dinaro iracheno",
                other: "dinari iracheni"
              },
              narrow: "IQD",
              symbol: "IQD"
            },
            IRR: {
              displayName: {
                one: "rial iraniano",
                other: "rial iraniani"
              },
              narrow: "IRR",
              symbol: "IRR"
            },
            ISK: {
              displayName: {
                one: "corona islandese",
                other: "corone islandesi"
              },
              narrow: "kr",
              symbol: "ISK"
            },
            ITL: {
              displayName: {
                other: "lire italiane"
              },
              narrow: "ITL",
              symbol: "ITL"
            },
            JMD: {
              displayName: {
                one: "dollaro giamaicano",
                other: "dollari giamaicani"
              },
              narrow: "$",
              symbol: "JMD"
            },
            JOD: {
              displayName: {
                one: "dinaro giordano",
                other: "dinari giordani"
              },
              narrow: "JOD",
              symbol: "JOD"
            },
            JPY: {
              displayName: {
                one: "yen giapponese",
                other: "yen giapponesi"
              },
              narrow: "¥",
              symbol: "JPY"
            },
            KES: {
              displayName: {
                one: "scellino keniota",
                other: "scellini kenioti"
              },
              narrow: "KES",
              symbol: "KES"
            },
            KGS: {
              displayName: {
                one: "som kirghiso",
                other: "som kirghisi"
              },
              narrow: "⃀",
              symbol: "KGS"
            },
            KHR: {
              displayName: {
                one: "riel cambogiano",
                other: "riel cambogiani"
              },
              narrow: "៛",
              symbol: "KHR"
            },
            KMF: {
              displayName: {
                one: "franco comoriano",
                other: "franchi comoriani"
              },
              narrow: "CF",
              symbol: "KMF"
            },
            KPW: {
              displayName: {
                one: "won nordcoreano",
                other: "won nordcoreani"
              },
              narrow: "₩",
              symbol: "KPW"
            },
            KRW: {
              displayName: {
                one: "won sudcoreano",
                other: "won sudcoreani"
              },
              narrow: "₩",
              symbol: "KRW"
            },
            KWD: {
              displayName: {
                one: "dinaro kuwaitiano",
                other: "dinari kuwaitiani"
              },
              narrow: "KWD",
              symbol: "KWD"
            },
            KYD: {
              displayName: {
                one: "dollaro delle Isole Cayman",
                other: "dollari delle Isole Cayman"
              },
              narrow: "$",
              symbol: "KYD"
            },
            KZT: {
              displayName: {
                one: "tenge kazako",
                other: "tenge kazaki"
              },
              narrow: "₸",
              symbol: "KZT"
            },
            LAK: {
              displayName: {
                one: "kip laotiano",
                other: "kip laotiani"
              },
              narrow: "₭",
              symbol: "LAK"
            },
            LBP: {
              displayName: {
                one: "lira libanese",
                other: "lire libanesi"
              },
              narrow: "L£",
              symbol: "LBP"
            },
            LKR: {
              displayName: {
                one: "rupia di Sri Lanka",
                other: "rupie di Sri Lanka"
              },
              narrow: "Rs",
              symbol: "LKR"
            },
            LRD: {
              displayName: {
                one: "dollaro liberiano",
                other: "dollari liberiani"
              },
              narrow: "$",
              symbol: "LRD"
            },
            LSL: {
              displayName: {
                one: "loti del Lesotho",
                other: "maloti del Lesotho"
              },
              narrow: "LSL",
              symbol: "LSL"
            },
            LTL: {
              displayName: {
                one: "litas lituano",
                other: "litas lituani"
              },
              narrow: "Lt",
              symbol: "LTL"
            },
            LTT: {
              displayName: {
                other: "talonas lituani"
              },
              narrow: "LTT",
              symbol: "LTT"
            },
            LUC: {
              displayName: {
                other: "franco convertibile del Lussemburgo"
              },
              narrow: "LUC",
              symbol: "LUC"
            },
            LUF: {
              displayName: {
                other: "franco del Lussemburgo"
              },
              narrow: "LUF",
              symbol: "LUF"
            },
            LUL: {
              displayName: {
                other: "franco finanziario del Lussemburgo"
              },
              narrow: "LUL",
              symbol: "LUL"
            },
            LVL: {
              displayName: {
                one: "lats lettone",
                other: "lati lettoni"
              },
              narrow: "Ls",
              symbol: "LVL"
            },
            LVR: {
              displayName: {
                other: "rublo lettone"
              },
              narrow: "LVR",
              symbol: "LVR"
            },
            LYD: {
              displayName: {
                one: "dinaro libico",
                other: "dinari libici"
              },
              narrow: "LYD",
              symbol: "LYD"
            },
            MAD: {
              displayName: {
                one: "dirham marocchino",
                other: "dirham marocchini"
              },
              narrow: "MAD",
              symbol: "MAD"
            },
            MAF: {
              displayName: {
                other: "franco marocchino"
              },
              narrow: "MAF",
              symbol: "MAF"
            },
            MDL: {
              displayName: {
                one: "leu moldavo",
                other: "lei moldavi"
              },
              narrow: "MDL",
              symbol: "MDL"
            },
            MGA: {
              displayName: {
                one: "ariary malgascio",
                other: "ariary malgasci"
              },
              narrow: "Ar",
              symbol: "MGA"
            },
            MGF: {
              displayName: {
                other: "franco malgascio"
              },
              narrow: "MGF",
              symbol: "MGF"
            },
            MKD: {
              displayName: {
                one: "dinaro macedone",
                other: "dinari macedoni"
              },
              narrow: "MKD",
              symbol: "MKD"
            },
            MKN: {
              displayName: {
                one: "dinaro macedone (1992–1993)",
                other: "dinari macedoni (1992–1993)"
              },
              narrow: "MKN",
              symbol: "MKN"
            },
            MLF: {
              displayName: {
                other: "franco di Mali"
              },
              narrow: "MLF",
              symbol: "MLF"
            },
            MMK: {
              displayName: {
                other: "kyat di Myanmar"
              },
              narrow: "K",
              symbol: "MMK"
            },
            MNT: {
              displayName: {
                one: "tugrik mongolo",
                other: "tugrik mongoli"
              },
              narrow: "₮",
              symbol: "MNT"
            },
            MOP: {
              displayName: {
                one: "pataca di Macao",
                other: "patacas di Macao"
              },
              narrow: "MOP",
              symbol: "MOP"
            },
            MRO: {
              displayName: {
                other: "ouguiya della Mauritania (1973–2017)"
              },
              narrow: "MRO",
              symbol: "MRO"
            },
            MRU: {
              displayName: {
                other: "ouguiya della Mauritania"
              },
              narrow: "MRU",
              symbol: "MRU"
            },
            MTL: {
              displayName: {
                other: "lira maltese"
              },
              narrow: "MTL",
              symbol: "MTL"
            },
            MTP: {
              displayName: {
                other: "sterlina maltese"
              },
              narrow: "MTP",
              symbol: "MTP"
            },
            MUR: {
              displayName: {
                one: "rupia mauriziana",
                other: "rupie mauriziane"
              },
              narrow: "Rs",
              symbol: "MUR"
            },
            MVR: {
              displayName: {
                other: "rufiyaa delle Maldive"
              },
              narrow: "MVR",
              symbol: "MVR"
            },
            MWK: {
              displayName: {
                one: "kwacha malawiano",
                other: "kwacha malawiani"
              },
              narrow: "MWK",
              symbol: "MWK"
            },
            MXN: {
              displayName: {
                one: "peso messicano",
                other: "pesos messicani"
              },
              narrow: "$",
              symbol: "MXN"
            },
            MXP: {
              displayName: {
                other: "peso messicano d’argento (1861–1992)"
              },
              narrow: "MXP",
              symbol: "MXP"
            },
            MXV: {
              displayName: {
                other: "unidad de inversion (UDI) messicana"
              },
              narrow: "MXV",
              symbol: "MXV"
            },
            MYR: {
              displayName: {
                one: "ringgit malese",
                other: "ringgit malesi"
              },
              narrow: "RM",
              symbol: "MYR"
            },
            MZE: {
              displayName: {
                other: "escudo del Mozambico"
              },
              narrow: "MZE",
              symbol: "MZE"
            },
            MZN: {
              displayName: {
                one: "metical mozambicano",
                other: "metical mozambicani"
              },
              narrow: "MZN",
              symbol: "MZN"
            },
            NAD: {
              displayName: {
                one: "dollaro namibiano",
                other: "dollari namibiani"
              },
              narrow: "$",
              symbol: "NAD"
            },
            NGN: {
              displayName: {
                one: "naira nigeriana",
                other: "naire nigeriane"
              },
              narrow: "₦",
              symbol: "NGN"
            },
            NIC: {
              displayName: {
                other: "cordoba nicaraguense"
              },
              narrow: "NIC",
              symbol: "NIC"
            },
            NIO: {
              displayName: {
                one: "córdoba nicaraguense",
                other: "córdoba nicaraguensi"
              },
              narrow: "C$",
              symbol: "NIO"
            },
            NLG: {
              displayName: {
                other: "fiorino olandese"
              },
              narrow: "NLG",
              symbol: "NLG"
            },
            NOK: {
              displayName: {
                one: "corona norvegese",
                other: "corone norvegesi"
              },
              narrow: "NKr",
              symbol: "NOK"
            },
            NPR: {
              displayName: {
                one: "rupia nepalese",
                other: "rupie nepalesi"
              },
              narrow: "Rs",
              symbol: "NPR"
            },
            NZD: {
              displayName: {
                one: "dollaro neozelandese",
                other: "dollari neozelandesi"
              },
              narrow: "$",
              symbol: "NZ$"
            },
            OMR: {
              displayName: {
                one: "rial omanita",
                other: "rial omaniti"
              },
              narrow: "OMR",
              symbol: "OMR"
            },
            PAB: {
              displayName: {
                one: "balboa panamense",
                other: "balboa panamensi"
              },
              narrow: "PAB",
              symbol: "PAB"
            },
            PEI: {
              displayName: {
                other: "inti peruviano"
              },
              narrow: "PEI",
              symbol: "PEI"
            },
            PEN: {
              displayName: {
                one: "sol peruviano",
                other: "sol peruviani"
              },
              narrow: "PEN",
              symbol: "PEN"
            },
            PES: {
              displayName: {
                other: "sol peruviano (1863–1965)"
              },
              narrow: "PES",
              symbol: "PES"
            },
            PGK: {
              displayName: {
                one: "kina papuana",
                other: "kina papuane"
              },
              narrow: "PGK",
              symbol: "PGK"
            },
            PHP: {
              displayName: {
                one: "peso filippino",
                other: "pesos filippini"
              },
              narrow: "₱",
              symbol: "₱"
            },
            PKR: {
              displayName: {
                one: "rupia pakistana",
                other: "rupie pakistane"
              },
              narrow: "Rs",
              symbol: "PKR"
            },
            PLN: {
              displayName: {
                one: "zloty polacco",
                other: "zloty polacchi"
              },
              narrow: "zł",
              symbol: "PLN"
            },
            PLZ: {
              displayName: {
                one: "złoty polacco (1950–1995)",
                other: "złoty polacchi (1950–1995)"
              },
              narrow: "PLZ",
              symbol: "PLZ"
            },
            PTE: {
              displayName: {
                other: "escudo portoghese"
              },
              narrow: "PTE",
              symbol: "PTE"
            },
            PYG: {
              displayName: {
                one: "guaraní paraguayano",
                other: "guaraní paraguayani"
              },
              narrow: "₲",
              symbol: "PYG"
            },
            QAR: {
              displayName: {
                one: "rial qatariano",
                other: "rial qatariani"
              },
              narrow: "QAR",
              symbol: "QAR"
            },
            RHD: {
              displayName: {
                other: "dollaro della Rhodesia"
              },
              narrow: "RHD",
              symbol: "RHD"
            },
            ROL: {
              displayName: {
                other: "leu della Romania"
              },
              narrow: "ROL",
              symbol: "ROL"
            },
            RON: {
              displayName: {
                one: "leu rumeno",
                other: "lei rumeni"
              },
              narrow: "lei",
              symbol: "RON"
            },
            RSD: {
              displayName: {
                one: "dinaro serbo",
                other: "dinara serbi"
              },
              narrow: "RSD",
              symbol: "RSD"
            },
            RUB: {
              displayName: {
                one: "rublo russo",
                other: "rubli russi"
              },
              narrow: "₽",
              symbol: "RUB"
            },
            RUR: {
              displayName: {
                other: "rublo della CSI"
              },
              narrow: "RUR",
              symbol: "RUR"
            },
            RWF: {
              displayName: {
                one: "franco ruandese",
                other: "franchi ruandesi"
              },
              narrow: "RF",
              symbol: "RWF"
            },
            SAR: {
              displayName: {
                one: "riyal saudita",
                other: "riyal sauditi"
              },
              narrow: "SAR",
              symbol: "SAR"
            },
            SBD: {
              displayName: {
                one: "dollaro delle Isole Salomone",
                other: "dollari delle Isole Salomone"
              },
              narrow: "$",
              symbol: "SBD"
            },
            SCR: {
              displayName: {
                one: "rupia delle Seychelles",
                other: "rupie delle Seychelles"
              },
              narrow: "SCR",
              symbol: "SCR"
            },
            SDD: {
              displayName: {
                other: "dinaro sudanese"
              },
              narrow: "SDD",
              symbol: "SDD"
            },
            SDG: {
              displayName: {
                one: "sterlina sudanese",
                other: "sterline sudanesi"
              },
              narrow: "SDG",
              symbol: "SDG"
            },
            SEK: {
              displayName: {
                one: "corona svedese",
                other: "corone svedesi"
              },
              narrow: "kr",
              symbol: "SEK"
            },
            SGD: {
              displayName: {
                one: "dollaro di Singapore",
                other: "dollari di Singapore"
              },
              narrow: "$",
              symbol: "SGD"
            },
            SHP: {
              displayName: {
                one: "sterlina di Sant’Elena",
                other: "sterline di Sant’Elena"
              },
              narrow: "£",
              symbol: "SHP"
            },
            SIT: {
              displayName: {
                other: "tallero sloveno"
              },
              narrow: "SIT",
              symbol: "SIT"
            },
            SKK: {
              displayName: {
                other: "corona slovacca"
              },
              narrow: "SKK",
              symbol: "SKK"
            },
            SLE: {
              displayName: {
                one: "leone della Sierra Leone",
                other: "leoni della Sierra Leone"
              },
              narrow: "SLE",
              symbol: "SLE"
            },
            SLL: {
              displayName: {
                one: "leone della Sierra Leone (1964–2022)",
                other: "leoni della Sierra Leone (1964–2022)"
              },
              narrow: "SLL",
              symbol: "SLL"
            },
            SOS: {
              displayName: {
                one: "scellino somalo",
                other: "scellini somali"
              },
              narrow: "SOS",
              symbol: "SOS"
            },
            SRD: {
              displayName: {
                one: "dollaro del Suriname",
                other: "dollari del Suriname"
              },
              narrow: "$",
              symbol: "SRD"
            },
            SRG: {
              displayName: {
                other: "fiorino del Suriname"
              },
              narrow: "SRG",
              symbol: "SRG"
            },
            SSP: {
              displayName: {
                one: "sterlina sud-sudanese",
                other: "sterline sud-sudanesi"
              },
              narrow: "£",
              symbol: "SSP"
            },
            STD: {
              displayName: {
                other: "dobra di Sao Tomé e Principe (1977–2017)"
              },
              narrow: "STD",
              symbol: "STD"
            },
            STN: {
              displayName: {
                other: "dobra di Sao Tomé e Príncipe"
              },
              narrow: "Db",
              symbol: "STN"
            },
            SUR: {
              displayName: {
                other: "rublo sovietico"
              },
              narrow: "SUR",
              symbol: "SUR"
            },
            SVC: {
              displayName: {
                other: "colón salvadoregno"
              },
              narrow: "SVC",
              symbol: "SVC"
            },
            SYP: {
              displayName: {
                one: "lira siriana",
                other: "lire siriane"
              },
              narrow: "£",
              symbol: "SYP"
            },
            SZL: {
              displayName: {
                one: "lilangeni",
                other: "emalangeni"
              },
              narrow: "SZL",
              symbol: "SZL"
            },
            THB: {
              displayName: {
                one: "baht thailandese",
                other: "baht thailandesi"
              },
              narrow: "฿",
              symbol: "฿"
            },
            TJR: {
              displayName: {
                other: "rublo del Tajikistan"
              },
              narrow: "TJR",
              symbol: "TJR"
            },
            TJS: {
              displayName: {
                one: "somoni tagiko",
                other: "somoni tagiki"
              },
              narrow: "TJS",
              symbol: "TJS"
            },
            TMM: {
              displayName: {
                other: "manat turkmeno (1993–2009)"
              },
              narrow: "TMM",
              symbol: "TMM"
            },
            TMT: {
              displayName: {
                one: "manat turkmeno",
                other: "manat turkmeni"
              },
              narrow: "TMT",
              symbol: "TMT"
            },
            TND: {
              displayName: {
                one: "dinaro tunisino",
                other: "dinari tunisini"
              },
              narrow: "TND",
              symbol: "TND"
            },
            TOP: {
              displayName: {
                one: "paʻanga tongano",
                other: "paʻanga tongani"
              },
              narrow: "T$",
              symbol: "TOP"
            },
            TPE: {
              displayName: {
                other: "escudo di Timor"
              },
              narrow: "TPE",
              symbol: "TPE"
            },
            TRL: {
              displayName: {
                one: "lira turca (1922–2005)",
                other: "lire turche (1922–2005)"
              },
              narrow: "TRL",
              symbol: "TRL"
            },
            TRY: {
              displayName: {
                one: "lira turca",
                other: "lire turche"
              },
              narrow: "₺",
              symbol: "TRY"
            },
            TTD: {
              displayName: {
                one: "dollaro di Trinidad e Tobago",
                other: "dollari di Trinidad e Tobago"
              },
              narrow: "$",
              symbol: "TTD"
            },
            TWD: {
              displayName: {
                one: "nuovo dollaro taiwanese",
                other: "nuovi dollari taiwanesi"
              },
              narrow: "NT$",
              symbol: "TWD"
            },
            TZS: {
              displayName: {
                one: "scellino della Tanzania",
                other: "scellini della Tanzania"
              },
              narrow: "TZS",
              symbol: "TZS"
            },
            UAH: {
              displayName: {
                one: "grivnia ucraina",
                other: "grivnie ucraine"
              },
              narrow: "₴",
              symbol: "UAH"
            },
            UAK: {
              displayName: {
                other: "karbovanetz ucraino"
              },
              narrow: "UAK",
              symbol: "UAK"
            },
            UGS: {
              displayName: {
                other: "scellino ugandese (1966–1987)"
              },
              narrow: "UGS",
              symbol: "UGS"
            },
            UGX: {
              displayName: {
                one: "scellino ugandese",
                other: "scellini ugandesi"
              },
              narrow: "UGX",
              symbol: "UGX"
            },
            USD: {
              displayName: {
                one: "dollaro statunitense",
                other: "dollari statunitensi"
              },
              narrow: "$",
              symbol: "USD"
            },
            USN: {
              displayName: {
                other: "dollaro statunitense (next day)"
              },
              narrow: "USN",
              symbol: "USN"
            },
            USS: {
              displayName: {
                other: "dollaro statunitense (same day)"
              },
              narrow: "USS",
              symbol: "USS"
            },
            UYI: {
              displayName: {
                other: "peso uruguaiano in unità indicizzate"
              },
              narrow: "UYI",
              symbol: "UYI"
            },
            UYP: {
              displayName: {
                other: "peso uruguaiano (1975–1993)"
              },
              narrow: "UYP",
              symbol: "UYP"
            },
            UYU: {
              displayName: {
                one: "peso uruguayano",
                other: "pesos uruguayani"
              },
              narrow: "$",
              symbol: "UYU"
            },
            UZS: {
              displayName: {
                one: "sum uzbeco",
                other: "sum uzbechi"
              },
              narrow: "UZS",
              symbol: "UZS"
            },
            VEB: {
              displayName: {
                one: "bolivar venezuelano (1871–2008)",
                other: "bolivares venezuelani (1871–2008)"
              },
              narrow: "VEB",
              symbol: "VEB"
            },
            VEF: {
              displayName: {
                one: "bolívar venezuelano (2008–2018)",
                other: "bolívares venezuelani (2008–2018)"
              },
              narrow: "Bs",
              symbol: "VEF"
            },
            VES: {
              displayName: {
                one: "bolívar venezuelano",
                other: "bolívares venezuelani"
              },
              narrow: "VES",
              symbol: "VES"
            },
            VND: {
              displayName: {
                one: "dong vietnamita",
                other: "dong vietnamiti"
              },
              narrow: "₫",
              symbol: "VND"
            },
            VUV: {
              displayName: {
                other: "vatu di Vanuatu"
              },
              narrow: "VUV",
              symbol: "VUV"
            },
            WST: {
              displayName: {
                one: "tala samoano",
                other: "tala samoani"
              },
              narrow: "WST",
              symbol: "WST"
            },
            XAF: {
              displayName: {
                one: "franco CFA BEAC",
                other: "franchi CFA BEAC"
              },
              narrow: "FCFA",
              symbol: "FCFA"
            },
            XAG: {
              displayName: {
                other: "argento"
              },
              narrow: "XAG",
              symbol: "XAG"
            },
            XAU: {
              displayName: {
                other: "oro"
              },
              narrow: "XAU",
              symbol: "XAU"
            },
            XBA: {
              displayName: {
                other: "unità composita europea"
              },
              narrow: "XBA",
              symbol: "XBA"
            },
            XBB: {
              displayName: {
                other: "unità monetaria europea"
              },
              narrow: "XBB",
              symbol: "XBB"
            },
            XBC: {
              displayName: {
                other: "unità di acconto europea (XBC)"
              },
              narrow: "XBC",
              symbol: "XBC"
            },
            XBD: {
              displayName: {
                other: "unità di acconto europea (XBD)"
              },
              narrow: "XBD",
              symbol: "XBD"
            },
            XCD: {
              displayName: {
                one: "dollaro dei Caraibi orientali",
                other: "dollari dei Caraibi orientali"
              },
              narrow: "$",
              symbol: "EC$"
            },
            XCG: {
              displayName: {},
              narrow: "Cg.",
              symbol: "Cg."
            },
            XDR: {
              displayName: {
                other: "diritti speciali di incasso"
              },
              narrow: "XDR",
              symbol: "XDR"
            },
            XFO: {
              displayName: {
                other: "franco oro francese"
              },
              narrow: "XFO",
              symbol: "XFO"
            },
            XFU: {
              displayName: {
                other: "franco UIC francese"
              },
              narrow: "XFU",
              symbol: "XFU"
            },
            XOF: {
              displayName: {
                one: "franco CFA BCEAO",
                other: "franchi CFA BCEAO"
              },
              narrow: "F CFA",
              symbol: "F CFA"
            },
            XPD: {
              displayName: {
                other: "palladio"
              },
              narrow: "XPD",
              symbol: "XPD"
            },
            XPF: {
              displayName: {
                one: "franco CFP",
                other: "franchi CFP"
              },
              narrow: "CFPF",
              symbol: "CFPF"
            },
            XPT: {
              displayName: {
                other: "platino"
              },
              narrow: "XPT",
              symbol: "XPT"
            },
            XRE: {
              displayName: {
                other: "fondi RINET"
              },
              narrow: "XRE",
              symbol: "XRE"
            },
            XTS: {
              displayName: {
                other: "codice di verifica della valuta"
              },
              narrow: "XTS",
              symbol: "XTS"
            },
            XXX: {
              displayName: {
                one: "(valuta sconosciuta)",
                other: "(valute sconosciute)"
              },
              narrow: "¤",
              symbol: "¤"
            },
            YDD: {
              displayName: {
                other: "dinaro dello Yemen"
              },
              narrow: "YDD",
              symbol: "YDD"
            },
            YER: {
              displayName: {
                one: "rial yemenita",
                other: "rial yemeniti"
              },
              narrow: "YER",
              symbol: "YER"
            },
            YUD: {
              displayName: {
                other: "dinaro forte yugoslavo"
              },
              narrow: "YUD",
              symbol: "YUD"
            },
            YUM: {
              displayName: {
                other: "dinaro noviy yugoslavo"
              },
              narrow: "YUM",
              symbol: "YUM"
            },
            YUN: {
              displayName: {
                other: "dinaro convertibile yugoslavo"
              },
              narrow: "YUN",
              symbol: "YUN"
            },
            ZAL: {
              displayName: {
                other: "rand sudafricano (finanziario)"
              },
              narrow: "ZAL",
              symbol: "ZAL"
            },
            ZAR: {
              displayName: {
                one: "rand sudafricano",
                other: "rand sudafricani"
              },
              narrow: "R",
              symbol: "ZAR"
            },
            ZMK: {
              displayName: {
                one: "kwacha zambiano (1968–2012)",
                other: "kwacha zambiani (1968–2012)"
              },
              narrow: "ZMK",
              symbol: "ZMK"
            },
            ZMW: {
              displayName: {
                one: "kwacha zambiano",
                other: "kwacha zambiani"
              },
              narrow: "ZK",
              symbol: "ZMW"
            },
            ZRN: {
              displayName: {
                other: "nuovo zaire dello Zaire"
              },
              narrow: "ZRN",
              symbol: "ZRN"
            },
            ZRZ: {
              displayName: {
                other: "zaire dello Zaire"
              },
              narrow: "ZRZ",
              symbol: "ZRZ"
            },
            ZWD: {
              displayName: {
                other: "dollaro dello Zimbabwe"
              },
              narrow: "ZWD",
              symbol: "ZWD"
            },
            ZWL: {
              displayName: {
                other: "dollaro zimbabwiano (2009)"
              },
              narrow: "ZWL",
              symbol: "ZWL"
            }
          },
          nu: ["latn"],
          numbers: {
            currency: {
              latn: {
                accounting: "#,##0.00 ¤",
                currencySpacing: {
                  afterInsertBetween: " ",
                  beforeInsertBetween: " "
                },
                short: {
                  1e3: {
                    other: "0"
                  },
                  1e4: {
                    other: "0"
                  },
                  1e5: {
                    other: "0"
                  },
                  1e6: {
                    other: "0 Mln ¤"
                  },
                  1e7: {
                    other: "00 Mln ¤"
                  },
                  1e8: {
                    other: "000 Mln ¤"
                  },
                  1e9: {
                    other: "0 Mld ¤"
                  },
                  1e10: {
                    other: "00 Mld ¤"
                  },
                  1e11: {
                    other: "000 Mld ¤"
                  },
                  1e12: {
                    other: "0 Bln ¤"
                  },
                  1e13: {
                    other: "00 Bln ¤"
                  },
                  1e14: {
                    other: "000 Bln ¤"
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
                    one: "mille",
                    other: "0 mila"
                  },
                  1e4: {
                    other: "00 mila"
                  },
                  1e5: {
                    other: "000 mila"
                  },
                  1e6: {
                    one: "0 milione",
                    other: "0 milioni"
                  },
                  1e7: {
                    other: "00 milioni"
                  },
                  1e8: {
                    other: "000 milioni"
                  },
                  1e9: {
                    one: "0 miliardo",
                    other: "0 miliardi"
                  },
                  1e10: {
                    other: "00 miliardi"
                  },
                  1e11: {
                    other: "000 miliardi"
                  },
                  1e12: {
                    one: "0 mille miliardi",
                    other: "0 mila miliardi"
                  },
                  1e13: {
                    other: "00 mila miliardi"
                  },
                  1e14: {
                    other: "000 mila miliardi"
                  }
                },
                short: {
                  1e3: {
                    other: "0"
                  },
                  1e4: {
                    other: "0"
                  },
                  1e5: {
                    other: "0"
                  },
                  1e6: {
                    other: "0 Mln"
                  },
                  1e7: {
                    other: "00 Mln"
                  },
                  1e8: {
                    other: "000 Mln"
                  },
                  1e9: {
                    other: "0 Mld"
                  },
                  1e10: {
                    other: "00 Mld"
                  },
                  1e11: {
                    other: "000 Mld"
                  },
                  1e12: {
                    other: "0 Bln"
                  },
                  1e13: {
                    other: "00 Bln"
                  },
                  1e14: {
                    other: "000 Bln"
                  }
                },
                standard: "#,##0.###"
              }
            },
            nu: ["latn"],
            percent: {
              latn: "#,##0%"
            },
            symbols: {
              latn: {
                approximatelySign: "~",
                decimal: ",",
                exponential: "E",
                group: ".",
                infinity: "∞",
                list: ";",
                minusSign: "-",
                nan: "NaN",
                perMille: "‰",
                percentSign: "%",
                plusSign: "+",
                rangeSign: "-",
                superscriptingExponent: "×",
                timeSeparator: ":"
              }
            }
          },
          units: {
            compound: {
              per: {
                long: "{0} al {1}",
                narrow: "{0}/{1}",
                short: "{0}/{1}"
              }
            },
            simple: {
              acre: {
                long: {
                  one: "{0} acro",
                  other: "{0} acri"
                },
                narrow: {
                  other: "{0}ac"
                },
                perUnit: {},
                short: {
                  other: "{0} ac"
                }
              },
              bit: {
                long: {
                  other: "{0} bit"
                },
                narrow: {
                  other: "{0}bit"
                },
                perUnit: {},
                short: {
                  other: "{0} bit"
                }
              },
              byte: {
                long: {
                  other: "{0} byte"
                },
                narrow: {
                  other: "{0}B"
                },
                perUnit: {},
                short: {
                  other: "{0} byte"
                }
              },
              celsius: {
                long: {
                  one: "{0} grado Celsius",
                  other: "{0} gradi Celsius"
                },
                narrow: {
                  other: "{0}°C"
                },
                perUnit: {},
                short: {
                  other: "{0} °C"
                }
              },
              centimeter: {
                long: {
                  one: "{0} centimetro",
                  other: "{0} centimetri"
                },
                narrow: {
                  other: "{0}cm"
                },
                perUnit: {
                  long: "{0} per centimetro",
                  narrow: "{0}/cm",
                  short: "{0}/cm"
                },
                short: {
                  other: "{0} cm"
                }
              },
              day: {
                long: {
                  one: "{0} giorno",
                  other: "{0} giorni"
                },
                narrow: {
                  one: "{0}g",
                  other: "{0}gg"
                },
                perUnit: {
                  long: "{0} al giorno",
                  narrow: "{0}/g",
                  short: "{0}/giorno"
                },
                short: {
                  one: "{0} giorno",
                  other: "{0} giorni"
                }
              },
              degree: {
                long: {
                  one: "{0} grado",
                  other: "{0} gradi"
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
                  one: "{0} grado Fahrenheit",
                  other: "{0} gradi Fahrenheit"
                },
                narrow: {
                  other: "{0}°F"
                },
                perUnit: {},
                short: {
                  other: "{0} °F"
                }
              },
              "fluid-ounce": {
                long: {
                  one: "{0} oncia liquida",
                  other: "{0} once liquide"
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
                  one: "{0} piede",
                  other: "{0} piedi"
                },
                narrow: {
                  other: "{0}ft"
                },
                perUnit: {
                  long: "{0} per piede",
                  narrow: "{0}/ft",
                  short: "{0}/ft"
                },
                short: {
                  other: "{0} ft"
                }
              },
              gallon: {
                long: {
                  one: "{0} gallone",
                  other: "{0} galloni"
                },
                narrow: {
                  other: "{0}gal"
                },
                perUnit: {
                  long: "{0} per gallone",
                  narrow: "{0}/gal",
                  short: "{0}/gal"
                },
                short: {
                  other: "{0} gal"
                }
              },
              gigabit: {
                long: {
                  other: "{0} gigabit"
                },
                narrow: {
                  other: "{0}Gb"
                },
                perUnit: {},
                short: {
                  other: "{0} Gb"
                }
              },
              gigabyte: {
                long: {
                  other: "{0} gigabyte"
                },
                narrow: {
                  other: "{0}GB"
                },
                perUnit: {},
                short: {
                  other: "{0} GB"
                }
              },
              gram: {
                long: {
                  one: "{0} grammo",
                  other: "{0} grammi"
                },
                narrow: {
                  other: "{0}g"
                },
                perUnit: {
                  long: "{0} per grammo",
                  narrow: "{0}/g",
                  short: "{0}/g"
                },
                short: {
                  other: "{0} g"
                }
              },
              hectare: {
                long: {
                  one: "{0} ettaro",
                  other: "{0} ettari"
                },
                narrow: {
                  other: "{0}ha"
                },
                perUnit: {},
                short: {
                  other: "{0} ha"
                }
              },
              hour: {
                long: {
                  one: "{0} ora",
                  other: "{0} ore"
                },
                narrow: {
                  other: "{0}h"
                },
                perUnit: {
                  long: "{0} all’ora",
                  narrow: "{0}/h",
                  short: "{0}/h"
                },
                short: {
                  other: "{0} h"
                }
              },
              inch: {
                long: {
                  one: "{0} pollice",
                  other: "{0} pollici"
                },
                narrow: {
                  other: "{0}″"
                },
                perUnit: {
                  long: "{0} per pollice",
                  narrow: "{0}/in",
                  short: "{0}/in"
                },
                short: {
                  other: "{0} in"
                }
              },
              kilobit: {
                long: {
                  other: "{0} kilobit"
                },
                narrow: {
                  other: "{0}kb"
                },
                perUnit: {},
                short: {
                  other: "{0} kb"
                }
              },
              kilobyte: {
                long: {
                  other: "{0} kilobyte"
                },
                narrow: {
                  other: "{0}kB"
                },
                perUnit: {},
                short: {
                  other: "{0} kB"
                }
              },
              kilogram: {
                long: {
                  one: "{0} chilogrammo",
                  other: "{0} chilogrammi"
                },
                narrow: {
                  other: "{0}kg"
                },
                perUnit: {
                  long: "{0} per chilogrammo",
                  narrow: "{0}/kg",
                  short: "{0}/kg"
                },
                short: {
                  other: "{0} kg"
                }
              },
              kilometer: {
                long: {
                  one: "{0} chilometro",
                  other: "{0} chilometri"
                },
                narrow: {
                  other: "{0}km"
                },
                perUnit: {
                  long: "{0} per chilometro",
                  narrow: "{0}/km",
                  short: "{0}/km"
                },
                short: {
                  other: "{0} km"
                }
              },
              "kilometer-per-hour": {
                long: {
                  one: "{0} chilometro orario",
                  other: "{0} chilometri orari"
                },
                narrow: {
                  other: "{0}km/h"
                },
                perUnit: {},
                short: {
                  other: "{0} km/h"
                }
              },
              liter: {
                long: {
                  one: "{0} litro",
                  other: "{0} litri"
                },
                narrow: {
                  other: "{0}l"
                },
                perUnit: {
                  long: "{0} per litro",
                  narrow: "{0}/l",
                  short: "{0}/l"
                },
                short: {
                  other: "{0} l"
                }
              },
              "liter-per-kilometer": {
                long: {
                  one: "{0} litro per chilometro",
                  other: "{0} litri per chilometro"
                },
                narrow: {
                  other: "{0}L/km"
                },
                perUnit: {},
                short: {
                  other: "{0} L/km"
                }
              },
              megabit: {
                long: {
                  other: "{0} megabit"
                },
                narrow: {
                  other: "{0}Mb"
                },
                perUnit: {},
                short: {
                  other: "{0} Mb"
                }
              },
              megabyte: {
                long: {
                  other: "{0} megabyte"
                },
                narrow: {
                  other: "{0}MB"
                },
                perUnit: {},
                short: {
                  other: "{0} MB"
                }
              },
              meter: {
                long: {
                  one: "{0} metro",
                  other: "{0} metri"
                },
                narrow: {
                  other: "{0}m"
                },
                perUnit: {
                  long: "{0} per metro",
                  narrow: "{0}/m",
                  short: "{0}/m"
                },
                short: {
                  other: "{0} m"
                }
              },
              "meter-per-second": {
                long: {
                  one: "{0} metro al secondo",
                  other: "{0} metri al secondo"
                },
                narrow: {
                  other: "{0}m/s"
                },
                perUnit: {},
                short: {
                  other: "{0} m/s"
                }
              },
              mile: {
                long: {
                  one: "{0} miglio",
                  other: "{0} miglia"
                },
                narrow: {
                  other: "{0}mi"
                },
                perUnit: {},
                short: {
                  other: "{0} mi"
                }
              },
              "mile-per-gallon": {
                long: {
                  one: "{0} miglio per gallone",
                  other: "{0} miglia per gallone"
                },
                narrow: {
                  other: "{0}mpg"
                },
                perUnit: {},
                short: {
                  other: "{0} mpg"
                }
              },
              "mile-per-hour": {
                long: {
                  one: "{0} miglio all’ora",
                  other: "{0} miglia all’ora"
                },
                narrow: {
                  other: "{0}mi/h"
                },
                perUnit: {},
                short: {
                  other: "{0} mi/h"
                }
              },
              "mile-scandinavian": {
                long: {
                  one: "{0} miglio scandinavo",
                  other: "{0} miglia scandinave"
                },
                narrow: {
                  other: "{0}smi"
                },
                perUnit: {},
                short: {
                  other: "{0} smi"
                }
              },
              milliliter: {
                long: {
                  one: "{0} millilitro",
                  other: "{0} millilitri"
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
                  one: "{0} millimetro",
                  other: "{0} millimetri"
                },
                narrow: {
                  other: "{0}mm"
                },
                perUnit: {},
                short: {
                  other: "{0} mm"
                }
              },
              millisecond: {
                long: {
                  one: "{0} millisecondo",
                  other: "{0} millisecondi"
                },
                narrow: {
                  other: "{0}ms"
                },
                perUnit: {},
                short: {
                  other: "{0} ms"
                }
              },
              minute: {
                long: {
                  one: "{0} minuto",
                  other: "{0} minuti"
                },
                narrow: {
                  other: "{0}min"
                },
                perUnit: {
                  long: "{0} al minuto",
                  narrow: "{0}/min",
                  short: "{0}/min"
                },
                short: {
                  other: "{0} min"
                }
              },
              month: {
                long: {
                  one: "{0} mese",
                  other: "{0} mesi"
                },
                narrow: {
                  one: "{0} mese",
                  other: "{0} mesi"
                },
                perUnit: {
                  long: "{0} al mese",
                  narrow: "{0}/mese",
                  short: "{0}/mese"
                },
                short: {
                  one: "{0} mese",
                  other: "{0} mesi"
                }
              },
              ounce: {
                long: {
                  one: "{0} oncia",
                  other: "{0} once"
                },
                narrow: {
                  other: "{0}oz"
                },
                perUnit: {
                  long: "{0} per oncia",
                  narrow: "{0}/oz",
                  short: "{0}/oz"
                },
                short: {
                  other: "{0} oz"
                }
              },
              percent: {
                long: {
                  other: "{0} percento"
                },
                narrow: {
                  other: "{0}%"
                },
                perUnit: {},
                short: {
                  other: "{0}%"
                }
              },
              petabyte: {
                long: {
                  other: "{0} petabyte"
                },
                narrow: {
                  other: "{0}PB"
                },
                perUnit: {},
                short: {
                  other: "{0} PB"
                }
              },
              pound: {
                long: {
                  one: "{0} libbra",
                  other: "{0} libbre"
                },
                narrow: {
                  other: "{0}lb"
                },
                perUnit: {
                  long: "{0} per libbra",
                  narrow: "{0}/lb",
                  short: "{0}/lb"
                },
                short: {
                  other: "{0} lb"
                }
              },
              second: {
                long: {
                  one: "{0} secondo",
                  other: "{0} secondi"
                },
                narrow: {
                  other: "{0}s"
                },
                perUnit: {
                  long: "{0} al secondo",
                  narrow: "{0}/s",
                  short: "{0}/s"
                },
                short: {
                  other: "{0} s"
                }
              },
              stone: {
                long: {
                  other: "{0} stone"
                },
                narrow: {
                  other: "{0}st"
                },
                perUnit: {},
                short: {
                  other: "{0} st"
                }
              },
              terabit: {
                long: {
                  other: "{0} terabit"
                },
                narrow: {
                  other: "{0}Tb"
                },
                perUnit: {},
                short: {
                  other: "{0} Tb"
                }
              },
              terabyte: {
                long: {
                  other: "{0} terabyte"
                },
                narrow: {
                  other: "{0}TB"
                },
                perUnit: {},
                short: {
                  other: "{0} TB"
                }
              },
              week: {
                long: {
                  one: "{0} settimana",
                  other: "{0} settimane"
                },
                narrow: {
                  other: "{0}sett."
                },
                perUnit: {
                  long: "{0} alla settimana",
                  narrow: "{0}/sett.",
                  short: "{0}/settimana"
                },
                short: {
                  other: "{0} sett."
                }
              },
              yard: {
                long: {
                  one: "{0} iarda",
                  other: "{0} iarde"
                },
                narrow: {
                  other: "{0}yd"
                },
                perUnit: {},
                short: {
                  other: "{0} yd"
                }
              },
              year: {
                long: {
                  one: "{0} anno",
                  other: "{0} anni"
                },
                narrow: {
                  one: "{0}anno",
                  other: "{0}anni"
                },
                perUnit: {
                  long: "{0} all’anno",
                  narrow: "{0}/anno",
                  short: "{0}/anno"
                },
                short: {
                  one: "{0} anno",
                  other: "{0} anni"
                }
              }
            }
          }
        },
        locale: "it"
      })
    }
  }
]);