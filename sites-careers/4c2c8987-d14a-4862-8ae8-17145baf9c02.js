try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new o.Error).stack;
  a && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[a] = "4c2c8987-d14a-4862-8ae8-17145baf9c02", o._sentryDebugIdIdentifier = "sentry-dbid-4c2c8987-d14a-4862-8ae8-17145baf9c02")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [5530], {
    6594: () => {
      Intl.NumberFormat && "function" == typeof Intl.NumberFormat.__addLocaleData && Intl.NumberFormat.__addLocaleData({
        data: {
          currencies: {
            ADP: {
              displayName: {
                one: "peseta andorrana",
                other: "pesetas andorranas"
              },
              narrow: "ADP",
              symbol: "ADP"
            },
            AED: {
              displayName: {
                one: "dírham de los Emiratos Árabes Unidos",
                other: "dírhams de los Emiratos Árabes Unidos"
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
                one: "afgani afgano",
                other: "afganis afganos"
              },
              narrow: "؋",
              symbol: "AFN"
            },
            ALL: {
              displayName: {
                one: "lek albanés",
                other: "leks albaneses"
              },
              narrow: "ALL",
              symbol: "ALL"
            },
            AMD: {
              displayName: {
                one: "dram armenio",
                other: "drams armenios"
              },
              narrow: "֏",
              symbol: "AMD"
            },
            ANG: {
              displayName: {
                one: "florín antillano",
                other: "florines antillanos"
              },
              narrow: "ANG",
              symbol: "ANG"
            },
            AOA: {
              displayName: {
                one: "kuanza angoleño",
                other: "kuanzas angoleños"
              },
              narrow: "Kz",
              symbol: "AOA"
            },
            AOK: {
              displayName: {
                other: "kwanza angoleño (1977–1990)"
              },
              narrow: "AOK",
              symbol: "AOK"
            },
            AON: {
              displayName: {
                other: "nuevo kwanza angoleño (1990–2000)"
              },
              narrow: "AON",
              symbol: "AON"
            },
            AOR: {
              displayName: {
                other: "kwanza reajustado angoleño (1995–1999)"
              },
              narrow: "AOR",
              symbol: "AOR"
            },
            ARA: {
              displayName: {
                one: "austral argentino",
                other: "australes argentinos"
              },
              narrow: "ARA",
              symbol: "ARA"
            },
            ARP: {
              displayName: {
                one: "peso argentino (ARP)",
                other: "pesos argentinos (ARP)"
              },
              narrow: "ARP",
              symbol: "ARP"
            },
            ARS: {
              displayName: {
                one: "peso argentino",
                other: "pesos argentinos"
              },
              narrow: "$",
              symbol: "ARS"
            },
            ATS: {
              displayName: {
                one: "chelín austriaco",
                other: "chelines austriacos"
              },
              narrow: "ATS",
              symbol: "ATS"
            },
            AUD: {
              displayName: {
                one: "dólar australiano",
                other: "dólares australianos"
              },
              narrow: "$",
              symbol: "AUD"
            },
            AWG: {
              displayName: {
                one: "florín arubeño",
                other: "florines arubeños"
              },
              narrow: "AWG",
              symbol: "AWG"
            },
            AZM: {
              displayName: {
                other: "manat azerí (1993–2006)"
              },
              narrow: "AZM",
              symbol: "AZM"
            },
            AZN: {
              displayName: {
                one: "manat azerbaiyano",
                other: "manats azerbaiyanos"
              },
              narrow: "₼",
              symbol: "AZN"
            },
            BAD: {
              displayName: {
                one: "dinar bosnio",
                other: "dinares bosnios"
              },
              narrow: "BAD",
              symbol: "BAD"
            },
            BAM: {
              displayName: {
                one: "marco convertible de Bosnia y Herzegovina",
                other: "marcos convertibles de Bosnia y Herzegovina"
              },
              narrow: "KM",
              symbol: "BAM"
            },
            BBD: {
              displayName: {
                one: "dólar barbadense",
                other: "dólares barbadenses"
              },
              narrow: "$",
              symbol: "BBD"
            },
            BDT: {
              displayName: {
                one: "taka bangladesí",
                other: "takas bangladesíes"
              },
              narrow: "৳",
              symbol: "BDT"
            },
            BEC: {
              displayName: {
                one: "franco belga (convertible)",
                other: "francos belgas (convertibles)"
              },
              narrow: "BEC",
              symbol: "BEC"
            },
            BEF: {
              displayName: {
                one: "franco belga",
                other: "francos belgas"
              },
              narrow: "BEF",
              symbol: "BEF"
            },
            BEL: {
              displayName: {
                one: "franco belga (financiero)",
                other: "francos belgas (financieros)"
              },
              narrow: "BEL",
              symbol: "BEL"
            },
            BGL: {
              displayName: {
                one: "lev fuerte búlgaro",
                other: "leva fuertes búlgaros"
              },
              narrow: "BGL",
              symbol: "BGL"
            },
            BGN: {
              displayName: {
                one: "leva búlgara",
                other: "levas búlgaras"
              },
              narrow: "BGN",
              symbol: "BGN"
            },
            BHD: {
              displayName: {
                one: "dinar bareiní",
                other: "dinares bareiníes"
              },
              narrow: "BHD",
              symbol: "BHD"
            },
            BIF: {
              displayName: {
                one: "franco burundés",
                other: "francos burundeses"
              },
              narrow: "BIF",
              symbol: "BIF"
            },
            BMD: {
              displayName: {
                one: "dólar bermudeño",
                other: "dólares bermudeños"
              },
              narrow: "$",
              symbol: "BMD"
            },
            BND: {
              displayName: {
                one: "dólar bruneano",
                other: "dólares bruneanos"
              },
              narrow: "$",
              symbol: "BND"
            },
            BOB: {
              displayName: {
                one: "boliviano",
                other: "bolivianos"
              },
              narrow: "Bs",
              symbol: "BOB"
            },
            BOP: {
              displayName: {
                one: "peso boliviano",
                other: "pesos bolivianos"
              },
              narrow: "BOP",
              symbol: "BOP"
            },
            BOV: {
              displayName: {
                one: "MVDOL boliviano",
                other: "MVDOL bolivianos"
              },
              narrow: "BOV",
              symbol: "BOV"
            },
            BRB: {
              displayName: {
                one: "nuevo cruzado brasileño (BRB)",
                other: "nuevos cruzados brasileños (BRB)"
              },
              narrow: "BRB",
              symbol: "BRB"
            },
            BRC: {
              displayName: {
                one: "cruzado brasileño",
                other: "cruzados brasileños"
              },
              narrow: "BRC",
              symbol: "BRC"
            },
            BRE: {
              displayName: {
                one: "cruceiro brasileño (BRE)",
                other: "cruceiros brasileños (BRE)"
              },
              narrow: "BRE",
              symbol: "BRE"
            },
            BRL: {
              displayName: {
                one: "real brasileño",
                other: "reales brasileños"
              },
              narrow: "R$",
              symbol: "BRL"
            },
            BRN: {
              displayName: {
                one: "nuevo cruzado brasileño",
                other: "nuevos cruzados brasileños"
              },
              narrow: "BRN",
              symbol: "BRN"
            },
            BRR: {
              displayName: {
                one: "cruceiro brasileño",
                other: "cruceiros brasileños"
              },
              narrow: "BRR",
              symbol: "BRR"
            },
            BSD: {
              displayName: {
                one: "dólar bahameño",
                other: "dólares bahameños"
              },
              narrow: "$",
              symbol: "BSD"
            },
            BTN: {
              displayName: {
                one: "gultrum butanés",
                other: "gultrums butaneses"
              },
              narrow: "BTN",
              symbol: "BTN"
            },
            BUK: {
              displayName: {
                one: "kyat birmano",
                other: "kyat birmanos"
              },
              narrow: "BUK",
              symbol: "BUK"
            },
            BWP: {
              displayName: {
                one: "pula botsuano",
                other: "pulas botsuanos"
              },
              narrow: "P",
              symbol: "BWP"
            },
            BYB: {
              displayName: {
                one: "nuevo rublo bielorruso",
                other: "nuevos rublos bielorrusos"
              },
              narrow: "BYB",
              symbol: "BYB"
            },
            BYN: {
              displayName: {
                one: "rublo bielorruso",
                other: "rublos bielorrusos"
              },
              narrow: "р.",
              symbol: "BYN"
            },
            BYR: {
              displayName: {
                one: "rublo bielorruso (2000–2016)",
                other: "rublos bielorrusos (2000–2016)"
              },
              narrow: "BYR",
              symbol: "BYR"
            },
            BZD: {
              displayName: {
                one: "dólar beliceño",
                other: "dólares beliceños"
              },
              narrow: "$",
              symbol: "BZD"
            },
            CAD: {
              displayName: {
                one: "dólar canadiense",
                other: "dólares canadienses"
              },
              narrow: "$",
              symbol: "CAD"
            },
            CDF: {
              displayName: {
                one: "franco congoleño",
                other: "francos congoleños"
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
                one: "franco suizo",
                other: "francos suizos"
              },
              narrow: "CHF",
              symbol: "CHF"
            },
            CHW: {
              displayName: {
                one: "franco WIR",
                other: "francos WIR"
              },
              narrow: "CHW",
              symbol: "CHW"
            },
            CLF: {
              displayName: {
                one: "unidad de fomento chilena",
                other: "unidades de fomento chilenas"
              },
              narrow: "CLF",
              symbol: "CLF"
            },
            CLP: {
              displayName: {
                one: "peso chileno",
                other: "pesos chilenos"
              },
              narrow: "$",
              symbol: "CLP"
            },
            CNH: {
              displayName: {
                one: "yuan chino (extracontinental)",
                other: "yuanes chinos (extracontinentales)"
              },
              narrow: "CNH",
              symbol: "CNH"
            },
            CNY: {
              displayName: {
                one: "yuan renminbi",
                other: "yuanes renminbi"
              },
              narrow: "¥",
              symbol: "CNY"
            },
            COP: {
              displayName: {
                one: "peso colombiano",
                other: "pesos colombianos"
              },
              narrow: "$",
              symbol: "COP"
            },
            COU: {
              displayName: {
                one: "unidad de valor real",
                other: "unidades de valor reales"
              },
              narrow: "COU",
              symbol: "COU"
            },
            CRC: {
              displayName: {
                one: "colón costarricense",
                other: "colones costarricenses"
              },
              narrow: "₡",
              symbol: "CRC"
            },
            CSD: {
              displayName: {
                one: "antiguo dinar serbio",
                other: "antiguos dinares serbios"
              },
              narrow: "CSD",
              symbol: "CSD"
            },
            CSK: {
              displayName: {
                one: "corona fuerte checoslovaca",
                other: "coronas fuertes checoslovacas"
              },
              narrow: "CSK",
              symbol: "CSK"
            },
            CUC: {
              displayName: {
                one: "peso cubano convertible",
                other: "pesos cubanos convertibles"
              },
              narrow: "$",
              symbol: "CUC"
            },
            CUP: {
              displayName: {
                one: "peso cubano",
                other: "pesos cubanos"
              },
              narrow: "$",
              symbol: "CUP"
            },
            CVE: {
              displayName: {
                one: "escudo de Cabo Verde",
                other: "escudos de Cabo Verde"
              },
              narrow: "CVE",
              symbol: "CVE"
            },
            CYP: {
              displayName: {
                one: "libra chipriota",
                other: "libras chipriotas"
              },
              narrow: "CYP",
              symbol: "CYP"
            },
            CZK: {
              displayName: {
                one: "corona checa",
                other: "coronas checas"
              },
              narrow: "Kč",
              symbol: "CZK"
            },
            DDM: {
              displayName: {
                one: "marco de la República Democrática Alemana",
                other: "marcos de la República Democrática Alemana"
              },
              narrow: "DDM",
              symbol: "DDM"
            },
            DEM: {
              displayName: {
                one: "marco alemán",
                other: "marcos alemanes"
              },
              narrow: "DEM",
              symbol: "DEM"
            },
            DJF: {
              displayName: {
                one: "franco yibutiano",
                other: "francos yibutianos"
              },
              narrow: "DJF",
              symbol: "DJF"
            },
            DKK: {
              displayName: {
                one: "corona danesa",
                other: "coronas danesas"
              },
              narrow: "kr",
              symbol: "DKK"
            },
            DOP: {
              displayName: {
                one: "peso dominicano",
                other: "pesos dominicanos"
              },
              narrow: "$",
              symbol: "DOP"
            },
            DZD: {
              displayName: {
                one: "dinar argelino",
                other: "dinares argelinos"
              },
              narrow: "DZD",
              symbol: "DZD"
            },
            ECS: {
              displayName: {
                one: "sucre ecuatoriano",
                other: "sucres ecuatorianos"
              },
              narrow: "ECS",
              symbol: "ECS"
            },
            ECV: {
              displayName: {
                one: "unidad de valor constante (UVC) ecuatoriana",
                other: "unidades de valor constante (UVC) ecuatorianas"
              },
              narrow: "ECV",
              symbol: "ECV"
            },
            EEK: {
              displayName: {
                one: "corona estonia",
                other: "coronas estonias"
              },
              narrow: "EEK",
              symbol: "EEK"
            },
            EGP: {
              displayName: {
                one: "libra egipcia",
                other: "libras egipcias"
              },
              narrow: "EGP",
              symbol: "EGP"
            },
            ERN: {
              displayName: {
                one: "nakfa eritreo",
                other: "nakfas eritreos"
              },
              narrow: "ERN",
              symbol: "ERN"
            },
            ESA: {
              displayName: {
                one: "peseta española (cuenta A)",
                other: "pesetas españolas (cuenta A)"
              },
              narrow: "ESA",
              symbol: "ESA"
            },
            ESB: {
              displayName: {
                one: "peseta española (cuenta convertible)",
                other: "pesetas españolas (cuenta convertible)"
              },
              narrow: "ESB",
              symbol: "ESB"
            },
            ESP: {
              displayName: {
                one: "peseta española",
                other: "pesetas españolas"
              },
              narrow: "₧",
              symbol: "₧"
            },
            ETB: {
              displayName: {
                one: "bir etíope",
                other: "bires etíopes"
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
                one: "marco finlandés",
                other: "marcos finlandeses"
              },
              narrow: "FIM",
              symbol: "FIM"
            },
            FJD: {
              displayName: {
                one: "dólar fiyiano",
                other: "dólares fiyianos"
              },
              narrow: "$",
              symbol: "FJD"
            },
            FKP: {
              displayName: {
                one: "libra malvinense",
                other: "libras malvinenses"
              },
              narrow: "£",
              symbol: "FKP"
            },
            FRF: {
              displayName: {
                one: "franco francés",
                other: "francos franceses"
              },
              narrow: "FRF",
              symbol: "FRF"
            },
            GBP: {
              displayName: {
                one: "libra esterlina",
                other: "libras esterlinas"
              },
              narrow: "£",
              symbol: "GBP"
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
                other: "laris georgianos"
              },
              narrow: "₾",
              symbol: "GEL"
            },
            GHC: {
              displayName: {
                other: "cedi ghanés (1979–2007)"
              },
              narrow: "GHC",
              symbol: "GHC"
            },
            GHS: {
              displayName: {
                one: "cedi ghanés",
                other: "cedis ghaneses"
              },
              narrow: "GH₵",
              symbol: "GHS"
            },
            GIP: {
              displayName: {
                one: "libra gibraltareña",
                other: "libras gibraltareñas"
              },
              narrow: "£",
              symbol: "GIP"
            },
            GMD: {
              displayName: {
                one: "dalasi gambiano",
                other: "dalasis gambianos"
              },
              narrow: "GMD",
              symbol: "GMD"
            },
            GNF: {
              displayName: {
                one: "franco guineano",
                other: "francos guineanos"
              },
              narrow: "FG",
              symbol: "GNF"
            },
            GNS: {
              displayName: {
                other: "syli guineano"
              },
              narrow: "GNS",
              symbol: "GNS"
            },
            GQE: {
              displayName: {
                one: "ekuele de Guinea Ecuatorial",
                other: "ekueles de Guinea Ecuatorial"
              },
              narrow: "GQE",
              symbol: "GQE"
            },
            GRD: {
              displayName: {
                one: "dracma griego",
                other: "dracmas griegos"
              },
              narrow: "GRD",
              symbol: "GRD"
            },
            GTQ: {
              displayName: {
                one: "quetzal guatemalteco",
                other: "quetzales guatemaltecos"
              },
              narrow: "Q",
              symbol: "GTQ"
            },
            GWE: {
              displayName: {
                other: "escudo de Guinea Portuguesa"
              },
              narrow: "GWE",
              symbol: "GWE"
            },
            GWP: {
              displayName: {
                other: "peso de Guinea-Bissáu"
              },
              narrow: "GWP",
              symbol: "GWP"
            },
            GYD: {
              displayName: {
                one: "dólar guyanés",
                other: "dólares guyaneses"
              },
              narrow: "$",
              symbol: "GYD"
            },
            HKD: {
              displayName: {
                one: "dólar hongkonés",
                other: "dólares hongkoneses"
              },
              narrow: "$",
              symbol: "HKD"
            },
            HNL: {
              displayName: {
                one: "lempira hondureño",
                other: "lempiras hondureños"
              },
              narrow: "L",
              symbol: "HNL"
            },
            HRD: {
              displayName: {
                one: "dinar croata",
                other: "dinares croatas"
              },
              narrow: "HRD",
              symbol: "HRD"
            },
            HRK: {
              displayName: {
                one: "kuna croata",
                other: "kunas croatas"
              },
              narrow: "kn",
              symbol: "HRK"
            },
            HTG: {
              displayName: {
                one: "gurde haitiano",
                other: "gurdes haitianos"
              },
              narrow: "HTG",
              symbol: "HTG"
            },
            HUF: {
              displayName: {
                one: "forinto húngaro",
                other: "forintos húngaros"
              },
              narrow: "Ft",
              symbol: "HUF"
            },
            IDR: {
              displayName: {
                one: "rupia indonesia",
                other: "rupias indonesias"
              },
              narrow: "Rp",
              symbol: "IDR"
            },
            IEP: {
              displayName: {
                one: "libra irlandesa",
                other: "libras irlandesas"
              },
              narrow: "IEP",
              symbol: "IEP"
            },
            ILP: {
              displayName: {
                one: "libra israelí",
                other: "libras israelíes"
              },
              narrow: "ILP",
              symbol: "ILP"
            },
            ILS: {
              displayName: {
                one: "nuevo séquel israelí",
                other: "nuevos séqueles israelíes"
              },
              narrow: "₪",
              symbol: "ILS"
            },
            INR: {
              displayName: {
                one: "rupia india",
                other: "rupias indias"
              },
              narrow: "₹",
              symbol: "INR"
            },
            IQD: {
              displayName: {
                one: "dinar iraquí",
                other: "dinares iraquíes"
              },
              narrow: "IQD",
              symbol: "IQD"
            },
            IRR: {
              displayName: {
                one: "rial iraní",
                other: "riales iraníes"
              },
              narrow: "IRR",
              symbol: "IRR"
            },
            ISK: {
              displayName: {
                one: "corona islandesa",
                other: "coronas islandesas"
              },
              narrow: "kr",
              symbol: "ISK"
            },
            ITL: {
              displayName: {
                one: "lira italiana",
                other: "liras italianas"
              },
              narrow: "ITL",
              symbol: "ITL"
            },
            JMD: {
              displayName: {
                one: "dólar jamaicano",
                other: "dólares jamaicanos"
              },
              narrow: "$",
              symbol: "JMD"
            },
            JOD: {
              displayName: {
                one: "dinar jordano",
                other: "dinares jordanos"
              },
              narrow: "JOD",
              symbol: "JOD"
            },
            JPY: {
              displayName: {
                one: "yen japonés",
                other: "yenes japoneses"
              },
              narrow: "¥",
              symbol: "JPY"
            },
            KES: {
              displayName: {
                one: "chelín keniano",
                other: "chelines kenianos"
              },
              narrow: "KES",
              symbol: "KES"
            },
            KGS: {
              displayName: {
                one: "som kirguís",
                other: "soms kirguises"
              },
              narrow: "⃀",
              symbol: "KGS"
            },
            KHR: {
              displayName: {
                one: "riel camboyano",
                other: "rieles camboyanos"
              },
              narrow: "៛",
              symbol: "KHR"
            },
            KMF: {
              displayName: {
                one: "franco comorense",
                other: "francos comorenses"
              },
              narrow: "CF",
              symbol: "KMF"
            },
            KPW: {
              displayName: {
                one: "won norcoreano",
                other: "wons norcoreanos"
              },
              narrow: "₩",
              symbol: "KPW"
            },
            KRW: {
              displayName: {
                one: "won surcoreano",
                other: "wons surcoreanos"
              },
              narrow: "₩",
              symbol: "KRW"
            },
            KWD: {
              displayName: {
                one: "dinar kuwaití",
                other: "dinares kuwaitíes"
              },
              narrow: "KWD",
              symbol: "KWD"
            },
            KYD: {
              displayName: {
                one: "dólar de las Islas Caimán",
                other: "dólares de las Islas Caimán"
              },
              narrow: "$",
              symbol: "KYD"
            },
            KZT: {
              displayName: {
                one: "tengue kazajo",
                other: "tengues kazajos"
              },
              narrow: "₸",
              symbol: "KZT"
            },
            LAK: {
              displayName: {
                one: "kip laosiano",
                other: "kips laosianos"
              },
              narrow: "₭",
              symbol: "LAK"
            },
            LBP: {
              displayName: {
                one: "libra libanesa",
                other: "libras libanesas"
              },
              narrow: "L£",
              symbol: "LBP"
            },
            LKR: {
              displayName: {
                one: "rupia esrilanquesa",
                other: "rupias esrilanquesas"
              },
              narrow: "Rs",
              symbol: "LKR"
            },
            LRD: {
              displayName: {
                one: "dólar liberiano",
                other: "dólares liberianos"
              },
              narrow: "$",
              symbol: "LRD"
            },
            LSL: {
              displayName: {
                one: "loti lesotense",
                other: "lotis lesotenses"
              },
              narrow: "LSL",
              symbol: "LSL"
            },
            LTL: {
              displayName: {
                one: "litas lituana",
                other: "litas lituanas"
              },
              narrow: "Lt",
              symbol: "LTL"
            },
            LTT: {
              displayName: {
                one: "talonas lituana",
                other: "talonas lituanas"
              },
              narrow: "LTT",
              symbol: "LTT"
            },
            LUC: {
              displayName: {
                one: "franco convertible luxemburgués",
                other: "francos convertibles luxemburgueses"
              },
              narrow: "LUC",
              symbol: "LUC"
            },
            LUF: {
              displayName: {
                one: "franco luxemburgués",
                other: "francos luxemburgueses"
              },
              narrow: "LUF",
              symbol: "LUF"
            },
            LUL: {
              displayName: {
                one: "franco financiero luxemburgués",
                other: "francos financieros luxemburgueses"
              },
              narrow: "LUL",
              symbol: "LUL"
            },
            LVL: {
              displayName: {
                one: "lats letón",
                other: "lats letónes"
              },
              narrow: "Ls",
              symbol: "LVL"
            },
            LVR: {
              displayName: {
                one: "rublo letón",
                other: "rublos letones"
              },
              narrow: "LVR",
              symbol: "LVR"
            },
            LYD: {
              displayName: {
                one: "dinar libio",
                other: "dinares libios"
              },
              narrow: "LYD",
              symbol: "LYD"
            },
            MAD: {
              displayName: {
                one: "dírham marroquí",
                other: "dírhams marroquíes"
              },
              narrow: "MAD",
              symbol: "MAD"
            },
            MAF: {
              displayName: {
                one: "franco marroquí",
                other: "francos marroquíes"
              },
              narrow: "MAF",
              symbol: "MAF"
            },
            MDL: {
              displayName: {
                one: "leu moldavo",
                other: "leus moldavos"
              },
              narrow: "MDL",
              symbol: "MDL"
            },
            MGA: {
              displayName: {
                one: "ariari malgache",
                other: "ariaris malgaches"
              },
              narrow: "Ar",
              symbol: "MGA"
            },
            MGF: {
              displayName: {
                other: "franco malgache"
              },
              narrow: "MGF",
              symbol: "MGF"
            },
            MKD: {
              displayName: {
                one: "dinar macedonio",
                other: "dinares macedonios"
              },
              narrow: "MKD",
              symbol: "MKD"
            },
            MLF: {
              displayName: {
                other: "franco malí"
              },
              narrow: "MLF",
              symbol: "MLF"
            },
            MMK: {
              displayName: {
                one: "kiat de Myanmar",
                other: "kiats de Myanmar"
              },
              narrow: "K",
              symbol: "MMK"
            },
            MNT: {
              displayName: {
                one: "tugrik mongol",
                other: "tugriks mongoles"
              },
              narrow: "₮",
              symbol: "MNT"
            },
            MOP: {
              displayName: {
                one: "pataca macaense",
                other: "patacas macaenses"
              },
              narrow: "MOP",
              symbol: "MOP"
            },
            MRO: {
              displayName: {
                one: "uguiya (1973–2017)",
                other: "uguiyas (1973–2017)"
              },
              narrow: "MRO",
              symbol: "MRO"
            },
            MRU: {
              displayName: {
                one: "uguiya mauritano",
                other: "uguiyas mauritanos"
              },
              narrow: "MRU",
              symbol: "MRU"
            },
            MTL: {
              displayName: {
                one: "lira maltesa",
                other: "liras maltesas"
              },
              narrow: "MTL",
              symbol: "MTL"
            },
            MTP: {
              displayName: {
                one: "libra maltesa",
                other: "libras maltesas"
              },
              narrow: "MTP",
              symbol: "MTP"
            },
            MUR: {
              displayName: {
                one: "rupia mauriciana",
                other: "rupias mauricianas"
              },
              narrow: "Rs",
              symbol: "MUR"
            },
            MVR: {
              displayName: {
                one: "rufiya maldiva",
                other: "rufiyas maldivas"
              },
              narrow: "MVR",
              symbol: "MVR"
            },
            MWK: {
              displayName: {
                one: "kuacha malauí",
                other: "kuachas malauíes"
              },
              narrow: "MWK",
              symbol: "MWK"
            },
            MXN: {
              displayName: {
                one: "peso mexicano",
                other: "pesos mexicanos"
              },
              narrow: "$",
              symbol: "MXN"
            },
            MXP: {
              displayName: {
                one: "peso de plata mexicano (MXP)",
                other: "pesos de plata mexicanos (MXP)"
              },
              narrow: "MXP",
              symbol: "MXP"
            },
            MXV: {
              displayName: {
                one: "unidad de inversión (UDI) mexicana",
                other: "unidades de inversión (UDI) mexicanas"
              },
              narrow: "MXV",
              symbol: "MXV"
            },
            MYR: {
              displayName: {
                one: "ringit malasio",
                other: "ringits malasios"
              },
              narrow: "RM",
              symbol: "MYR"
            },
            MZE: {
              displayName: {
                one: "escudo mozambiqueño",
                other: "escudos mozambiqueños"
              },
              narrow: "MZE",
              symbol: "MZE"
            },
            MZM: {
              displayName: {
                other: "antiguo metical mozambiqueño"
              },
              narrow: "MZM",
              symbol: "MZM"
            },
            MZN: {
              displayName: {
                one: "metical mozambiqueño",
                other: "meticales mozambiqueños"
              },
              narrow: "MZN",
              symbol: "MZN"
            },
            NAD: {
              displayName: {
                one: "dólar namibio",
                other: "dólares namibios"
              },
              narrow: "$",
              symbol: "NAD"
            },
            NGN: {
              displayName: {
                one: "naira nigeriano",
                other: "nairas nigerianos"
              },
              narrow: "₦",
              symbol: "NGN"
            },
            NIC: {
              displayName: {
                one: "córdoba nicaragüense (1988–1991)",
                other: "córdobas nicaragüenses (1988–1991)"
              },
              narrow: "NIC",
              symbol: "NIC"
            },
            NIO: {
              displayName: {
                one: "córdoba oro",
                other: "córdobas oro"
              },
              narrow: "C$",
              symbol: "NIO"
            },
            NLG: {
              displayName: {
                one: "florín neerlandés",
                other: "florines neerlandeses"
              },
              narrow: "NLG",
              symbol: "NLG"
            },
            NOK: {
              displayName: {
                one: "corona noruega",
                other: "coronas noruegas"
              },
              narrow: "kr",
              symbol: "NOK"
            },
            NPR: {
              displayName: {
                one: "rupia nepalí",
                other: "rupias nepalíes"
              },
              narrow: "Rs",
              symbol: "NPR"
            },
            NZD: {
              displayName: {
                one: "dólar neozelandés",
                other: "dólares neozelandeses"
              },
              narrow: "$",
              symbol: "NZD"
            },
            OMR: {
              displayName: {
                one: "rial omaní",
                other: "riales omaníes"
              },
              narrow: "OMR",
              symbol: "OMR"
            },
            PAB: {
              displayName: {
                one: "balboa panameño",
                other: "balboas panameños"
              },
              narrow: "PAB",
              symbol: "PAB"
            },
            PEI: {
              displayName: {
                one: "inti peruano",
                other: "intis peruanos"
              },
              narrow: "PEI",
              symbol: "PEI"
            },
            PEN: {
              displayName: {
                one: "sol peruano",
                other: "soles peruanos"
              },
              narrow: "PEN",
              symbol: "PEN"
            },
            PES: {
              displayName: {
                one: "sol peruano (1863–1965)",
                other: "soles peruanos (1863–1965)"
              },
              narrow: "PES",
              symbol: "PES"
            },
            PGK: {
              displayName: {
                one: "kina papú",
                other: "kinas papúes"
              },
              narrow: "PGK",
              symbol: "PGK"
            },
            PHP: {
              displayName: {
                one: "peso filipino",
                other: "pesos filipinos"
              },
              narrow: "₱",
              symbol: "PHP"
            },
            PKR: {
              displayName: {
                one: "rupia pakistaní",
                other: "rupias pakistaníes"
              },
              narrow: "Rs",
              symbol: "PKR"
            },
            PLN: {
              displayName: {
                one: "esloti polaco",
                other: "eslotis polacos"
              },
              narrow: "zł",
              symbol: "PLN"
            },
            PLZ: {
              displayName: {
                one: "zloty polaco (PLZ)",
                other: "zlotys polacos (PLZ)"
              },
              narrow: "PLZ",
              symbol: "PLZ"
            },
            PTE: {
              displayName: {
                one: "escudo portugués",
                other: "escudos portugueses"
              },
              narrow: "PTE",
              symbol: "PTE"
            },
            PYG: {
              displayName: {
                one: "guaraní paraguayo",
                other: "guaraníes paraguayos"
              },
              narrow: "₲",
              symbol: "PYG"
            },
            QAR: {
              displayName: {
                one: "rial catarí",
                other: "riales cataríes"
              },
              narrow: "QAR",
              symbol: "QAR"
            },
            RHD: {
              displayName: {
                other: "dólar rodesiano"
              },
              narrow: "RHD",
              symbol: "RHD"
            },
            ROL: {
              displayName: {
                one: "antiguo leu rumano",
                other: "antiguos lei rumanos"
              },
              narrow: "ROL",
              symbol: "ROL"
            },
            RON: {
              displayName: {
                one: "leu rumano",
                other: "leus rumanos"
              },
              narrow: "L",
              symbol: "RON"
            },
            RSD: {
              displayName: {
                one: "dinar serbio",
                other: "dinares serbios"
              },
              narrow: "RSD",
              symbol: "RSD"
            },
            RUB: {
              displayName: {
                one: "rublo ruso",
                other: "rublos rusos"
              },
              narrow: "₽",
              symbol: "RUB"
            },
            RUR: {
              displayName: {
                one: "rublo ruso (RUR)",
                other: "rublos rusos (RUR)"
              },
              narrow: "RUR",
              symbol: "RUR"
            },
            RWF: {
              displayName: {
                one: "franco ruandés",
                other: "francos ruandeses"
              },
              narrow: "RF",
              symbol: "RWF"
            },
            SAR: {
              displayName: {
                one: "rial saudí",
                other: "riales saudíes"
              },
              narrow: "SAR",
              symbol: "SAR"
            },
            SBD: {
              displayName: {
                one: "dólar salomonense",
                other: "dólares salomonenses"
              },
              narrow: "$",
              symbol: "SBD"
            },
            SCR: {
              displayName: {
                one: "rupia seychellense",
                other: "rupias seychellenses"
              },
              narrow: "SCR",
              symbol: "SCR"
            },
            SDD: {
              displayName: {
                one: "dinar sudanés",
                other: "dinares sudaneses"
              },
              narrow: "SDD",
              symbol: "SDD"
            },
            SDG: {
              displayName: {
                one: "libra sudanesa",
                other: "libras sudanesas"
              },
              narrow: "SDG",
              symbol: "SDG"
            },
            SDP: {
              displayName: {
                one: "libra sudanesa antigua",
                other: "libras sudanesas antiguas"
              },
              narrow: "SDP",
              symbol: "SDP"
            },
            SEK: {
              displayName: {
                one: "corona sueca",
                other: "coronas suecas"
              },
              narrow: "kr",
              symbol: "SEK"
            },
            SGD: {
              displayName: {
                one: "dólar singapurense",
                other: "dólares singapurenses"
              },
              narrow: "$",
              symbol: "SGD"
            },
            SHP: {
              displayName: {
                one: "libra de Santa Elena",
                other: "libras de Santa Elena"
              },
              narrow: "£",
              symbol: "SHP"
            },
            SIT: {
              displayName: {
                one: "tólar esloveno",
                other: "tólares eslovenos"
              },
              narrow: "SIT",
              symbol: "SIT"
            },
            SKK: {
              displayName: {
                one: "corona eslovaca",
                other: "coronas eslovacas"
              },
              narrow: "SKK",
              symbol: "SKK"
            },
            SLE: {
              displayName: {
                one: "leona sierraleonesa",
                other: "leonas sierraleonesas"
              },
              narrow: "SLE",
              symbol: "SLE"
            },
            SLL: {
              displayName: {
                one: "leona sierraleonesa (1964–2022)",
                other: "leonas sierraleonesas (1964–2022)"
              },
              narrow: "SLL",
              symbol: "SLL"
            },
            SOS: {
              displayName: {
                one: "chelín somalí",
                other: "chelines somalíes"
              },
              narrow: "SOS",
              symbol: "SOS"
            },
            SRD: {
              displayName: {
                one: "dólar surinamés",
                other: "dólares surinameses"
              },
              narrow: "$",
              symbol: "SRD"
            },
            SRG: {
              displayName: {
                other: "florín surinamés"
              },
              narrow: "SRG",
              symbol: "SRG"
            },
            SSP: {
              displayName: {
                one: "libra sursudanesa",
                other: "libras sursudanesas"
              },
              narrow: "£",
              symbol: "SSP"
            },
            STD: {
              displayName: {
                one: "dobra (1977–2017)",
                other: "dobras (1977–2017)"
              },
              narrow: "STD",
              symbol: "STD"
            },
            STN: {
              displayName: {
                one: "dobra santotomense",
                other: "dobras santotomenses"
              },
              narrow: "Db",
              symbol: "STN"
            },
            SUR: {
              displayName: {
                one: "rublo soviético",
                other: "rublos soviéticos"
              },
              narrow: "SUR",
              symbol: "SUR"
            },
            SVC: {
              displayName: {
                one: "colón salvadoreño",
                other: "colones salvadoreños"
              },
              narrow: "SVC",
              symbol: "SVC"
            },
            SYP: {
              displayName: {
                one: "libra siria",
                other: "libras sirias"
              },
              narrow: "£",
              symbol: "SYP"
            },
            SZL: {
              displayName: {
                one: "lilangeni esuatiní",
                other: "lilangenis esuatiníes"
              },
              narrow: "SZL",
              symbol: "SZL"
            },
            THB: {
              displayName: {
                one: "bat tailandés",
                other: "bats tailandeses"
              },
              narrow: "฿",
              symbol: "฿"
            },
            TJR: {
              displayName: {
                other: "rublo tayiko"
              },
              narrow: "TJR",
              symbol: "TJR"
            },
            TJS: {
              displayName: {
                one: "somoni tayiko",
                other: "somonis tayikos"
              },
              narrow: "TJS",
              symbol: "TJS"
            },
            TMM: {
              displayName: {
                one: "manat turcomano (1993–2009)",
                other: "manats turcomanos (1993–2009)"
              },
              narrow: "TMM",
              symbol: "TMM"
            },
            TMT: {
              displayName: {
                one: "manat turcomano",
                other: "manats turcomanos"
              },
              narrow: "TMT",
              symbol: "TMT"
            },
            TND: {
              displayName: {
                one: "dinar tunecino",
                other: "dinares tunecinos"
              },
              narrow: "TND",
              symbol: "TND"
            },
            TOP: {
              displayName: {
                one: "paanga tongano",
                other: "paangas tonganos"
              },
              narrow: "T$",
              symbol: "TOP"
            },
            TPE: {
              displayName: {
                other: "escudo timorense"
              },
              narrow: "TPE",
              symbol: "TPE"
            },
            TRL: {
              displayName: {
                one: "lira turca (1922–2005)",
                other: "liras turcas (1922–2005)"
              },
              narrow: "TRL",
              symbol: "TRL"
            },
            TRY: {
              displayName: {
                one: "lira turca",
                other: "liras turcas"
              },
              narrow: "₺",
              symbol: "TRY"
            },
            TTD: {
              displayName: {
                one: "dólar de Trinidad y Tobago",
                other: "dólares de Trinidad y Tobago"
              },
              narrow: "$",
              symbol: "TTD"
            },
            TWD: {
              displayName: {
                one: "nuevo dólar taiwanés",
                other: "nuevos dólares taiwaneses"
              },
              narrow: "NT$",
              symbol: "TWD"
            },
            TZS: {
              displayName: {
                one: "chelín tanzano",
                other: "chelines tanzanos"
              },
              narrow: "TZS",
              symbol: "TZS"
            },
            UAH: {
              displayName: {
                one: "grivna ucraniana",
                other: "grivnas ucranianas"
              },
              narrow: "₴",
              symbol: "UAH"
            },
            UAK: {
              displayName: {
                one: "karbovanet ucraniano",
                other: "karbovanets ucranianos"
              },
              narrow: "UAK",
              symbol: "UAK"
            },
            UGS: {
              displayName: {
                other: "chelín ugandés (1966–1987)"
              },
              narrow: "UGS",
              symbol: "UGS"
            },
            UGX: {
              displayName: {
                one: "chelín ugandés",
                other: "chelines ugandeses"
              },
              narrow: "UGX",
              symbol: "UGX"
            },
            USD: {
              displayName: {
                one: "dólar estadounidense",
                other: "dólares estadounidenses"
              },
              narrow: "$",
              symbol: "US$"
            },
            USN: {
              displayName: {
                one: "dólar estadounidense (día siguiente)",
                other: "dólares estadounidenses (día siguiente)"
              },
              narrow: "USN",
              symbol: "USN"
            },
            USS: {
              displayName: {
                one: "dólar estadounidense (mismo día)",
                other: "dólares estadounidenses (mismo día)"
              },
              narrow: "USS",
              symbol: "USS"
            },
            UYI: {
              displayName: {
                one: "peso uruguayo en unidades indexadas",
                other: "pesos uruguayos en unidades indexadas"
              },
              narrow: "UYI",
              symbol: "UYI"
            },
            UYP: {
              displayName: {
                one: "peso uruguayo (UYP)",
                other: "pesos uruguayos (UYP)"
              },
              narrow: "UYP",
              symbol: "UYP"
            },
            UYU: {
              displayName: {
                one: "peso uruguayo",
                other: "pesos uruguayos"
              },
              narrow: "$",
              symbol: "UYU"
            },
            UYW: {
              displayName: {
                one: "unidad previsional uruguayo",
                other: "unidades previsionales uruguayos"
              },
              narrow: "UYW",
              symbol: "UYW"
            },
            UZS: {
              displayName: {
                one: "sum uzbeko",
                other: "sums uzbekos"
              },
              narrow: "UZS",
              symbol: "UZS"
            },
            VEB: {
              displayName: {
                one: "bolívar venezolano (1871–2008)",
                other: "bolívares venezolanos (1871–2008)"
              },
              narrow: "VEB",
              symbol: "VEB"
            },
            VEF: {
              displayName: {
                one: "bolívar venezolano (2008–2018)",
                other: "bolívares venezolanos (2008–2018)"
              },
              narrow: "Bs",
              symbol: "VEF"
            },
            VES: {
              displayName: {
                one: "bolívar venezolano",
                other: "bolívares venezolanos"
              },
              narrow: "VES",
              symbol: "VES"
            },
            VND: {
              displayName: {
                one: "dong vietnamita",
                other: "dongs vietnamitas"
              },
              narrow: "₫",
              symbol: "₫"
            },
            VUV: {
              displayName: {
                one: "vatu vanuatense",
                other: "vatus vanuatenses"
              },
              narrow: "VUV",
              symbol: "VUV"
            },
            WST: {
              displayName: {
                one: "tala samoano",
                other: "talas samoanos"
              },
              narrow: "WST",
              symbol: "WST"
            },
            XAF: {
              displayName: {
                one: "franco CFA de África Central",
                other: "francos CFA de África Central"
              },
              narrow: "XAF",
              symbol: "XAF"
            },
            XAG: {
              displayName: {
                other: "plata"
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
                one: "unidad compuesta europea",
                other: "unidades compuestas europeas"
              },
              narrow: "XBA",
              symbol: "XBA"
            },
            XBB: {
              displayName: {
                one: "unidad monetaria europea",
                other: "unidades monetarias europeas"
              },
              narrow: "XBB",
              symbol: "XBB"
            },
            XBC: {
              displayName: {
                one: "unidad de cuenta europea (XBC)",
                other: "unidades de cuenta europeas (XBC)"
              },
              narrow: "XBC",
              symbol: "XBC"
            },
            XBD: {
              displayName: {
                one: "unidad de cuenta europea (XBD)",
                other: "unidades de cuenta europeas (XBD)"
              },
              narrow: "XBD",
              symbol: "XBD"
            },
            XCD: {
              displayName: {
                one: "dólar del Caribe Oriental",
                other: "dólares del Caribe Oriental"
              },
              narrow: "$",
              symbol: "XCD"
            },
            XCG: {
              displayName: {
                one: "florín caribeño",
                other: "florines caribeños"
              },
              narrow: "Cg.",
              symbol: "Cg."
            },
            XDR: {
              displayName: {
                other: "derechos especiales de giro"
              },
              narrow: "XDR",
              symbol: "XDR"
            },
            XEU: {
              displayName: {
                one: "unidad de moneda europea",
                other: "unidades de moneda europeas"
              },
              narrow: "XEU",
              symbol: "XEU"
            },
            XFO: {
              displayName: {
                one: "franco oro francés",
                other: "francos oro franceses"
              },
              narrow: "XFO",
              symbol: "XFO"
            },
            XFU: {
              displayName: {
                one: "franco UIC francés",
                other: "francos UIC franceses"
              },
              narrow: "XFU",
              symbol: "XFU"
            },
            XOF: {
              displayName: {
                one: "franco CFA de África Occidental",
                other: "francos CFA de África Occidental"
              },
              narrow: "XOF",
              symbol: "XOF"
            },
            XPD: {
              displayName: {
                other: "paladio"
              },
              narrow: "XPD",
              symbol: "XPD"
            },
            XPF: {
              displayName: {
                one: "franco CFP",
                other: "francos CFP"
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
                other: "fondos RINET"
              },
              narrow: "XRE",
              symbol: "XRE"
            },
            XTS: {
              displayName: {
                other: "código reservado para pruebas"
              },
              narrow: "XTS",
              symbol: "XTS"
            },
            XXX: {
              displayName: {
                other: "(moneda desconocida)"
              },
              narrow: "¤",
              symbol: "¤"
            },
            YDD: {
              displayName: {
                other: "dinar yemení"
              },
              narrow: "YDD",
              symbol: "YDD"
            },
            YER: {
              displayName: {
                one: "rial yemení",
                other: "riales yemeníes"
              },
              narrow: "YER",
              symbol: "YER"
            },
            YUD: {
              displayName: {
                other: "dinar fuerte yugoslavo"
              },
              narrow: "YUD",
              symbol: "YUD"
            },
            YUM: {
              displayName: {
                other: "super dinar yugoslavo"
              },
              narrow: "YUM",
              symbol: "YUM"
            },
            YUN: {
              displayName: {
                one: "dinar convertible yugoslavo",
                other: "dinares convertibles yugoslavos"
              },
              narrow: "YUN",
              symbol: "YUN"
            },
            ZAL: {
              displayName: {
                other: "rand sudafricano (financiero)"
              },
              narrow: "ZAL",
              symbol: "ZAL"
            },
            ZAR: {
              displayName: {
                one: "rand sudafricano",
                other: "rands sudafricanos"
              },
              narrow: "R",
              symbol: "ZAR"
            },
            ZMK: {
              displayName: {
                one: "kwacha zambiano (1968–2012)",
                other: "kwachas zambianos (1968–2012)"
              },
              narrow: "ZMK",
              symbol: "ZMK"
            },
            ZMW: {
              displayName: {
                one: "kuacha zambiano",
                other: "kuachas zambianos"
              },
              narrow: "ZK",
              symbol: "ZMW"
            },
            ZRN: {
              displayName: {
                other: "nuevo zaire zaireño"
              },
              narrow: "ZRN",
              symbol: "ZRN"
            },
            ZRZ: {
              displayName: {
                other: "zaire zaireño"
              },
              narrow: "ZRZ",
              symbol: "ZRZ"
            },
            ZWD: {
              displayName: {
                other: "dólar de Zimbabue"
              },
              narrow: "ZWD",
              symbol: "ZWD"
            },
            ZWL: {
              displayName: {
                other: "dólar zimbabuense"
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
                    other: "0 mil ¤"
                  },
                  1e4: {
                    other: "00 mil ¤"
                  },
                  1e5: {
                    other: "000 mil ¤"
                  },
                  1e6: {
                    other: "0 M¤"
                  },
                  1e7: {
                    other: "00 M¤"
                  },
                  1e8: {
                    other: "000 M¤"
                  },
                  1e9: {
                    other: "0000 M¤"
                  },
                  1e10: {
                    other: "00 mil M¤"
                  },
                  1e11: {
                    other: "000 mil M¤"
                  },
                  1e12: {
                    other: "0 B¤"
                  },
                  1e13: {
                    other: "00 B¤"
                  },
                  1e14: {
                    other: "000 B¤"
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
                    other: "0 mil"
                  },
                  1e4: {
                    other: "00 mil"
                  },
                  1e5: {
                    other: "000 mil"
                  },
                  1e6: {
                    one: "0 millón",
                    other: "0 millones"
                  },
                  1e7: {
                    other: "00 millones"
                  },
                  1e8: {
                    other: "000 millones"
                  },
                  1e9: {
                    other: "0 mil millones"
                  },
                  1e10: {
                    other: "00 mil millones"
                  },
                  1e11: {
                    other: "000 mil millones"
                  },
                  1e12: {
                    one: "0 billón",
                    other: "0 billones"
                  },
                  1e13: {
                    other: "00 billones"
                  },
                  1e14: {
                    other: "000 billones"
                  }
                },
                short: {
                  1e3: {
                    other: "0 mil"
                  },
                  1e4: {
                    other: "00 mil"
                  },
                  1e5: {
                    other: "000 mil"
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
                    other: "0000 M"
                  },
                  1e10: {
                    other: "00 mil M"
                  },
                  1e11: {
                    other: "000 mil M"
                  },
                  1e12: {
                    other: "0 B"
                  },
                  1e13: {
                    other: "00 B"
                  },
                  1e14: {
                    other: "000 B"
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
                long: "{0} por {1}",
                narrow: "{0}/{1}",
                short: "{0}/{1}"
              }
            },
            simple: {
              acre: {
                long: {
                  one: "{0} acre",
                  other: "{0} acres"
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
                  one: "{0} bit",
                  other: "{0} bits"
                },
                narrow: {
                  other: "{0}b"
                },
                perUnit: {},
                short: {
                  other: "{0} b"
                }
              },
              byte: {
                long: {
                  one: "{0} byte",
                  other: "{0} bytes"
                },
                narrow: {
                  other: "{0}B"
                },
                perUnit: {},
                short: {
                  other: "{0} B"
                }
              },
              celsius: {
                long: {
                  one: "{0} grado Celsius",
                  other: "{0} grados Celsius"
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
                  one: "{0} centímetro",
                  other: "{0} centímetros"
                },
                narrow: {
                  other: "{0}cm"
                },
                perUnit: {
                  long: "{0} por centímetro",
                  narrow: "{0}/cm",
                  short: "{0}/cm"
                },
                short: {
                  other: "{0} cm"
                }
              },
              day: {
                long: {
                  one: "{0} día",
                  other: "{0} días"
                },
                narrow: {
                  other: "{0}d"
                },
                perUnit: {
                  long: "{0} por día",
                  narrow: "{0}/d",
                  short: "{0}/d"
                },
                short: {
                  other: "{0} d"
                }
              },
              degree: {
                long: {
                  one: "{0} grado",
                  other: "{0} grados"
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
                  other: "{0} grados Fahrenheit"
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
                  one: "{0} onza líquida",
                  other: "{0} onzas líquidas"
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
                  one: "{0} pie",
                  other: "{0} pies"
                },
                narrow: {
                  other: "{0}ft"
                },
                perUnit: {
                  long: "{0} por pie",
                  narrow: "{0}/ft",
                  short: "{0}/ft"
                },
                short: {
                  other: "{0} ft"
                }
              },
              gallon: {
                long: {
                  one: "{0} galón",
                  other: "{0} galones"
                },
                narrow: {
                  other: "{0}gal"
                },
                perUnit: {
                  long: "{0} por galón",
                  narrow: "{0}/gal",
                  short: "{0}/gal"
                },
                short: {
                  other: "{0} gal"
                }
              },
              gigabit: {
                long: {
                  one: "{0} gigabit",
                  other: "{0} gigabits"
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
                  one: "{0} gigabyte",
                  other: "{0} gigabytes"
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
                  one: "{0} gramo",
                  other: "{0} gramos"
                },
                narrow: {
                  other: "{0}g"
                },
                perUnit: {
                  long: "{0} por gramo",
                  narrow: "{0}/g",
                  short: "{0}/g"
                },
                short: {
                  other: "{0} g"
                }
              },
              hectare: {
                long: {
                  one: "{0} hectárea",
                  other: "{0} hectáreas"
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
                  one: "{0} hora",
                  other: "{0} horas"
                },
                narrow: {
                  other: "{0}h"
                },
                perUnit: {
                  long: "{0} por hora",
                  narrow: "{0}/h",
                  short: "{0}/h"
                },
                short: {
                  other: "{0} h"
                }
              },
              inch: {
                long: {
                  one: "{0} pulgada",
                  other: "{0} pulgadas"
                },
                narrow: {
                  other: "{0}in"
                },
                perUnit: {
                  long: "{0} por pulgada",
                  narrow: "{0}/in",
                  short: "{0}/in"
                },
                short: {
                  other: "{0} in"
                }
              },
              kilobit: {
                long: {
                  one: "{0} kilobit",
                  other: "{0} kilobits"
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
                  one: "{0} kilobyte",
                  other: "{0} kilobytes"
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
                  one: "{0} kilogramo",
                  other: "{0} kilogramos"
                },
                narrow: {
                  other: "{0}kg"
                },
                perUnit: {
                  long: "{0} por kilogramo",
                  narrow: "{0}/kg",
                  short: "{0}/kg"
                },
                short: {
                  other: "{0} kg"
                }
              },
              kilometer: {
                long: {
                  one: "{0} kilómetro",
                  other: "{0} kilómetros"
                },
                narrow: {
                  other: "{0}km"
                },
                perUnit: {
                  long: "{0} por kilómetro",
                  narrow: "{0}/km",
                  short: "{0}/km"
                },
                short: {
                  other: "{0} km"
                }
              },
              "kilometer-per-hour": {
                long: {
                  one: "{0} kilómetro por hora",
                  other: "{0} kilómetros por hora"
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
                  other: "{0} litros"
                },
                narrow: {
                  other: "{0}l"
                },
                perUnit: {
                  long: "{0} por litro",
                  narrow: "{0}/l",
                  short: "{0}/l"
                },
                short: {
                  other: "{0} l"
                }
              },
              "liter-per-kilometer": {
                long: {
                  one: "{0} litro por kilómetro",
                  other: "{0} litros por kilómetro"
                },
                narrow: {
                  other: "{0}l/km"
                },
                perUnit: {},
                short: {
                  other: "{0} l/km"
                }
              },
              megabit: {
                long: {
                  one: "{0} megabit",
                  other: "{0} megabits"
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
                  one: "{0} megabyte",
                  other: "{0} megabytes"
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
                  other: "{0} metros"
                },
                narrow: {
                  other: "{0}m"
                },
                perUnit: {
                  long: "{0} por metro",
                  narrow: "{0}/m",
                  short: "{0}/m"
                },
                short: {
                  other: "{0} m"
                }
              },
              "meter-per-second": {
                long: {
                  one: "{0} metro por segundo",
                  other: "{0} metros por segundo"
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
                  one: "{0} milla",
                  other: "{0} millas"
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
                  one: "{0} milla por galón",
                  other: "{0} millas por galón"
                },
                narrow: {
                  other: "{0}mi/gal"
                },
                perUnit: {},
                short: {
                  other: "{0} mi/gal"
                }
              },
              "mile-per-hour": {
                long: {
                  one: "{0} milla por hora",
                  other: "{0} millas por hora"
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
                  one: "{0} milla escandinava",
                  other: "{0} millas escandinavas"
                },
                narrow: {
                  other: "{0}mi esc"
                },
                perUnit: {},
                short: {
                  other: "{0} mi esc."
                }
              },
              milliliter: {
                long: {
                  one: "{0} mililitro",
                  other: "{0} mililitros"
                },
                narrow: {
                  other: "{0} ml"
                },
                perUnit: {},
                short: {
                  other: "{0} ml"
                }
              },
              millimeter: {
                long: {
                  one: "{0} milímetro",
                  other: "{0} milímetros"
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
                  one: "{0} milisegundo",
                  other: "{0} milisegundos"
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
                  other: "{0} minutos"
                },
                narrow: {
                  other: "{0}min"
                },
                perUnit: {
                  long: "{0} por minuto",
                  narrow: "{0}/min",
                  short: "{0}/min"
                },
                short: {
                  other: "{0} min"
                }
              },
              month: {
                long: {
                  one: "{0} mes",
                  other: "{0} meses"
                },
                narrow: {
                  other: "{0}m"
                },
                perUnit: {
                  long: "{0} por mes",
                  narrow: "{0}/m",
                  short: "{0}/m."
                },
                short: {
                  other: "{0} m."
                }
              },
              ounce: {
                long: {
                  one: "{0} onza",
                  other: "{0} onzas"
                },
                narrow: {
                  other: "{0}oz"
                },
                perUnit: {
                  long: "{0} por onza",
                  narrow: "{0}/oz",
                  short: "{0}/oz"
                },
                short: {
                  other: "{0} oz"
                }
              },
              percent: {
                long: {
                  other: "{0} por ciento"
                },
                narrow: {
                  other: "{0}%"
                },
                perUnit: {},
                short: {
                  other: "{0} %"
                }
              },
              petabyte: {
                long: {
                  one: "{0} petabyte",
                  other: "{0} petabytes"
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
                  one: "{0} libra",
                  other: "{0} libras"
                },
                narrow: {
                  other: "{0}lb"
                },
                perUnit: {
                  long: "{0} por libra",
                  narrow: "{0}/lb",
                  short: "{0}/lb"
                },
                short: {
                  other: "{0} lb"
                }
              },
              second: {
                long: {
                  one: "{0} segundo",
                  other: "{0} segundos"
                },
                narrow: {
                  other: "{0}s"
                },
                perUnit: {
                  long: "{0} por segundo",
                  narrow: "{0}/s",
                  short: "{0}/s"
                },
                short: {
                  other: "{0} s"
                }
              },
              stone: {
                long: {
                  one: "{0} stone",
                  other: "{0} stones"
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
                  one: "{0} terabit",
                  other: "{0} terabits"
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
                  one: "{0} terabyte",
                  other: "{0} terabytes"
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
                  one: "{0} semana",
                  other: "{0} semanas"
                },
                narrow: {
                  other: "{0}sem"
                },
                perUnit: {
                  long: "{0} por semana",
                  narrow: "{0}/sem",
                  short: "{0}/sem."
                },
                short: {
                  other: "{0} sem."
                }
              },
              yard: {
                long: {
                  one: "{0} yarda",
                  other: "{0} yardas"
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
                  one: "{0} año",
                  other: "{0} años"
                },
                narrow: {
                  other: "{0}a"
                },
                perUnit: {
                  long: "{0} por año",
                  narrow: "{0}/a",
                  short: "{0}/a"
                },
                short: {
                  other: "{0} a"
                }
              }
            }
          }
        },
        locale: "es"
      })
    }
  }
]);