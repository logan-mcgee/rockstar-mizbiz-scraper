try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new o.Error).stack;
  a && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[a] = "742e6d13-683d-4fee-8315-76945c174bdd", o._sentryDebugIdIdentifier = "sentry-dbid-742e6d13-683d-4fee-8315-76945c174bdd")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9126], {
    95626: () => {
      Intl.NumberFormat && "function" == typeof Intl.NumberFormat.__addLocaleData && Intl.NumberFormat.__addLocaleData({
        data: {
          currencies: {
            ADP: {
              displayName: {
                one: "Peseta de Andorra",
                other: "Pesetas de Andorra"
              },
              narrow: "ADP",
              symbol: "ADP"
            },
            AED: {
              displayName: {
                one: "Dirham dos EAU",
                other: "Dirhams dos EAU"
              },
              narrow: "AED",
              symbol: "AED"
            },
            AFA: {
              displayName: {
                one: "Afegane do Afeganistão (AFA)",
                other: "Afeganes do Afeganistão (AFA)"
              },
              narrow: "AFA",
              symbol: "AFA"
            },
            AFN: {
              displayName: {
                one: "Afegane afegão",
                other: "Afeganes afegãos"
              },
              narrow: "؋",
              symbol: "AFN"
            },
            ALK: {
              displayName: {
                one: "Lek Albanês (1946–1965)",
                other: "Leks Albaneses (1946–1965)"
              },
              narrow: "ALK",
              symbol: "ALK"
            },
            ALL: {
              displayName: {
                one: "Lek albanês",
                other: "Leks albaneses"
              },
              narrow: "ALL",
              symbol: "ALL"
            },
            AMD: {
              displayName: {
                one: "Dram armênio",
                other: "Drams armênios"
              },
              narrow: "֏",
              symbol: "AMD"
            },
            ANG: {
              displayName: {
                one: "Florim das Antilhas Holandesas",
                other: "Florins das Antilhas Holandesas"
              },
              narrow: "ANG",
              symbol: "ANG"
            },
            AOA: {
              displayName: {
                one: "Kwanza angolano",
                other: "Kwanzas angolanos"
              },
              narrow: "Kz",
              symbol: "AOA"
            },
            AOK: {
              displayName: {
                one: "Kwanza angolano (AOK)",
                other: "Kwanzas angolanos (AOK)"
              },
              narrow: "AOK",
              symbol: "AOK"
            },
            AON: {
              displayName: {
                one: "Novo kwanza angolano (AON)",
                other: "Novos kwanzas angolanos (AON)"
              },
              narrow: "AON",
              symbol: "AON"
            },
            AOR: {
              displayName: {
                one: "Kwanza angolano reajustado (AOR)",
                other: "Kwanzas angolanos reajustados (AOR)"
              },
              narrow: "AOR",
              symbol: "AOR"
            },
            ARA: {
              displayName: {
                one: "Austral argentino",
                other: "Austrais argentinos"
              },
              narrow: "ARA",
              symbol: "ARA"
            },
            ARL: {
              displayName: {
                one: "Peso lei argentino (1970–1983)",
                other: "Pesos lei argentinos (1970–1983)"
              },
              narrow: "ARL",
              symbol: "ARL"
            },
            ARM: {
              displayName: {
                one: "Peso argentino (1881–1970)",
                other: "Pesos argentinos (1881–1970)"
              },
              narrow: "ARM",
              symbol: "ARM"
            },
            ARP: {
              displayName: {
                one: "Peso argentino (1983–1985)",
                other: "Pesos argentinos (1983–1985)"
              },
              narrow: "ARP",
              symbol: "ARP"
            },
            ARS: {
              displayName: {
                one: "Peso argentino",
                other: "Pesos argentinos"
              },
              narrow: "$",
              symbol: "ARS"
            },
            ATS: {
              displayName: {
                one: "Schilling australiano",
                other: "Schillings australianos"
              },
              narrow: "ATS",
              symbol: "ATS"
            },
            AUD: {
              displayName: {
                one: "Dólar australiano",
                other: "Dólares australianos"
              },
              narrow: "$",
              symbol: "AU$"
            },
            AWG: {
              displayName: {
                one: "Florim arubano",
                other: "Florins arubanos"
              },
              narrow: "AWG",
              symbol: "AWG"
            },
            AZM: {
              displayName: {
                one: "Manat do Azeibaijão (1993–2006)",
                other: "Manats do Azeibaijão (1993–2006)"
              },
              narrow: "AZM",
              symbol: "AZM"
            },
            AZN: {
              displayName: {
                one: "Manat azeri",
                other: "Manats azeris"
              },
              narrow: "₼",
              symbol: "AZN"
            },
            BAD: {
              displayName: {
                one: "Dinar da Bósnia Herzegovina",
                other: "Dinares da Bósnia Herzegovina"
              },
              narrow: "BAD",
              symbol: "BAD"
            },
            BAM: {
              displayName: {
                one: "Marco conversível da Bósnia e Herzegovina",
                other: "Marcos conversíveis da Bósnia e Herzegovina"
              },
              narrow: "KM",
              symbol: "BAM"
            },
            BAN: {
              displayName: {
                one: "Novo dinar da Bósnia-Herzegovina",
                other: "Novos dinares da Bósnia-Herzegovina"
              },
              narrow: "BAN",
              symbol: "BAN"
            },
            BBD: {
              displayName: {
                one: "Dólar barbadense",
                other: "Dólares barbadenses"
              },
              narrow: "$",
              symbol: "BBD"
            },
            BDT: {
              displayName: {
                one: "Taka bengali",
                other: "Takas bengalis"
              },
              narrow: "৳",
              symbol: "BDT"
            },
            BEC: {
              displayName: {
                one: "Franco belga (conversível)",
                other: "Francos belgas (conversíveis)"
              },
              narrow: "BEC",
              symbol: "BEC"
            },
            BEF: {
              displayName: {
                one: "Franco belga",
                other: "Francos belgas"
              },
              narrow: "BEF",
              symbol: "BEF"
            },
            BEL: {
              displayName: {
                one: "Franco belga (financeiro)",
                other: "Francos belgas (financeiros)"
              },
              narrow: "BEL",
              symbol: "BEL"
            },
            BGL: {
              displayName: {
                one: "Lev forte búlgaro",
                other: "Levs fortes búlgaros"
              },
              narrow: "BGL",
              symbol: "BGL"
            },
            BGM: {
              displayName: {
                one: "Lev socialista búlgaro",
                other: "Levs socialistas búlgaros"
              },
              narrow: "BGM",
              symbol: "BGM"
            },
            BGN: {
              displayName: {
                one: "Lev búlgaro",
                other: "Levs búlgaros"
              },
              narrow: "BGN",
              symbol: "BGN"
            },
            BGO: {
              displayName: {
                one: "Lev búlgaro (1879–1952)",
                other: "Levs búlgaros (1879–1952)"
              },
              narrow: "BGO",
              symbol: "BGO"
            },
            BHD: {
              displayName: {
                one: "Dinar bareinita",
                other: "Dinares bareinitas"
              },
              narrow: "BHD",
              symbol: "BHD"
            },
            BIF: {
              displayName: {
                one: "Franco burundiano",
                other: "Francos burundianos"
              },
              narrow: "BIF",
              symbol: "BIF"
            },
            BMD: {
              displayName: {
                one: "Dólar bermudense",
                other: "Dólares bermudenses"
              },
              narrow: "$",
              symbol: "BMD"
            },
            BND: {
              displayName: {
                one: "Dólar bruneano",
                other: "Dólares bruneanos"
              },
              narrow: "$",
              symbol: "BND"
            },
            BOB: {
              displayName: {
                one: "Boliviano da Bolívia",
                other: "Bolivianos da Bolívia"
              },
              narrow: "Bs",
              symbol: "BOB"
            },
            BOL: {
              displayName: {
                one: "Boliviano (1863–1963)",
                other: "Bolivianos (1863–1963)"
              },
              narrow: "BOL",
              symbol: "BOL"
            },
            BOP: {
              displayName: {
                one: "Peso boliviano",
                other: "Pesos bolivianos"
              },
              narrow: "BOP",
              symbol: "BOP"
            },
            BOV: {
              displayName: {
                one: "Mvdol boliviano",
                other: "Mvdols bolivianos"
              },
              narrow: "BOV",
              symbol: "BOV"
            },
            BRB: {
              displayName: {
                one: "Cruzeiro novo brasileiro (BRB)",
                other: "Cruzeiros novos brasileiros (BRB)"
              },
              narrow: "BRB",
              symbol: "BRB"
            },
            BRC: {
              displayName: {
                one: "Cruzado brasileiro",
                other: "Cruzados brasileiros"
              },
              narrow: "BRC",
              symbol: "BRC"
            },
            BRE: {
              displayName: {
                one: "Cruzeiro brasileiro (BRE)",
                other: "Cruzeiros brasileiros (BRE)"
              },
              narrow: "BRE",
              symbol: "BRE"
            },
            BRL: {
              displayName: {
                one: "Real brasileiro",
                other: "Reais brasileiros"
              },
              narrow: "R$",
              symbol: "R$"
            },
            BRN: {
              displayName: {
                one: "Cruzado novo brasileiro",
                other: "Cruzados novos brasileiros"
              },
              narrow: "BRN",
              symbol: "BRN"
            },
            BRR: {
              displayName: {
                one: "Cruzeiro brasileiro",
                other: "Cruzeiros brasileiros"
              },
              narrow: "BRR",
              symbol: "BRR"
            },
            BRZ: {
              displayName: {
                one: "Cruzeiro brasileiro antigo",
                other: "Cruzeiros brasileiros antigos"
              },
              narrow: "BRZ",
              symbol: "BRZ"
            },
            BSD: {
              displayName: {
                one: "Dólar bahamense",
                other: "Dólares bahamenses"
              },
              narrow: "$",
              symbol: "BSD"
            },
            BTN: {
              displayName: {
                one: "Ngultrum butanês",
                other: "Ngultruns butaneses"
              },
              narrow: "BTN",
              symbol: "BTN"
            },
            BUK: {
              displayName: {
                one: "Kyat burmês",
                other: "Kyats burmeses"
              },
              narrow: "BUK",
              symbol: "BUK"
            },
            BWP: {
              displayName: {
                one: "Pula botsuanesa",
                other: "Pulas botsuanesas"
              },
              narrow: "P",
              symbol: "BWP"
            },
            BYB: {
              displayName: {
                one: "Novo rublo bielorusso (BYB)",
                other: "Novos rublos bielorussos (BYB)"
              },
              narrow: "BYB",
              symbol: "BYB"
            },
            BYN: {
              displayName: {
                one: "Rublo bielorrusso",
                other: "Rublos bielorrussos"
              },
              narrow: "р.",
              symbol: "BYN"
            },
            BYR: {
              displayName: {
                one: "Rublo bielorrusso (2000–2016)",
                other: "Rublos bielorrussos (2000–2016)"
              },
              narrow: "BYR",
              symbol: "BYR"
            },
            BZD: {
              displayName: {
                one: "Dólar belizenho",
                other: "Dólares belizenhos"
              },
              narrow: "$",
              symbol: "BZD"
            },
            CAD: {
              displayName: {
                one: "Dólar canadense",
                other: "Dólares canadenses"
              },
              narrow: "$",
              symbol: "CA$"
            },
            CDF: {
              displayName: {
                one: "Franco congolês",
                other: "Francos congoleses"
              },
              narrow: "CDF",
              symbol: "CDF"
            },
            CHE: {
              displayName: {
                one: "Euro WIR",
                other: "Euros WIR"
              },
              narrow: "CHE",
              symbol: "CHE"
            },
            CHF: {
              displayName: {
                one: "Franco suíço",
                other: "Francos suíços"
              },
              narrow: "CHF",
              symbol: "CHF"
            },
            CHW: {
              displayName: {
                one: "Franco WIR",
                other: "Francos WIR"
              },
              narrow: "CHW",
              symbol: "CHW"
            },
            CLE: {
              displayName: {
                one: "Escudo chileno",
                other: "Escudos chilenos"
              },
              narrow: "CLE",
              symbol: "CLE"
            },
            CLF: {
              displayName: {
                one: "Unidade de fomento chilena",
                other: "Unidades de fomento chilenas"
              },
              narrow: "CLF",
              symbol: "CLF"
            },
            CLP: {
              displayName: {
                one: "Peso chileno",
                other: "Pesos chilenos"
              },
              narrow: "$",
              symbol: "CLP"
            },
            CNH: {
              displayName: {
                one: "Yuan chinês (offshore)",
                other: "Yuans chineses (offshore)"
              },
              narrow: "CNH",
              symbol: "CNH"
            },
            CNX: {
              displayName: {
                one: "Dólar do Banco Popular da China",
                other: "Dólares do Banco Popular da China"
              },
              narrow: "CNX",
              symbol: "CNX"
            },
            CNY: {
              displayName: {
                one: "Yuan chinês",
                other: "Yuans chineses"
              },
              narrow: "¥",
              symbol: "CN¥"
            },
            COP: {
              displayName: {
                one: "Peso colombiano",
                other: "Pesos colombianos"
              },
              narrow: "$",
              symbol: "COP"
            },
            COU: {
              displayName: {
                one: "Unidade de valor real",
                other: "Unidades de valor real"
              },
              narrow: "COU",
              symbol: "COU"
            },
            CRC: {
              displayName: {
                one: "Colón costarriquenho",
                other: "Colóns costarriquenhos"
              },
              narrow: "₡",
              symbol: "CRC"
            },
            CSD: {
              displayName: {
                one: "Dinar antigo da Sérvia",
                other: "Dinares antigos da Sérvia"
              },
              narrow: "CSD",
              symbol: "CSD"
            },
            CSK: {
              displayName: {
                one: "Coroa forte tchecoslovaca",
                other: "Coroas fortes tchecoslovacas"
              },
              narrow: "CSK",
              symbol: "CSK"
            },
            CUC: {
              displayName: {
                one: "Peso cubano conversível",
                other: "Pesos cubanos conversíveis"
              },
              narrow: "$",
              symbol: "CUC"
            },
            CUP: {
              displayName: {
                one: "Peso cubano",
                other: "Pesos cubanos"
              },
              narrow: "$",
              symbol: "CUP"
            },
            CVE: {
              displayName: {
                one: "Escudo cabo-verdiano",
                other: "Escudos cabo-verdianos"
              },
              narrow: "CVE",
              symbol: "CVE"
            },
            CYP: {
              displayName: {
                one: "Libra cipriota",
                other: "Libras cipriotas"
              },
              narrow: "CYP",
              symbol: "CYP"
            },
            CZK: {
              displayName: {
                one: "Coroa tcheca",
                other: "Coroas tchecas"
              },
              narrow: "Kč",
              symbol: "CZK"
            },
            DDM: {
              displayName: {
                one: "Marco da Alemanha Oriental",
                other: "Marcos da Alemanha Oriental"
              },
              narrow: "DDM",
              symbol: "DDM"
            },
            DEM: {
              displayName: {
                one: "Marco alemão",
                other: "Marcos alemães"
              },
              narrow: "DEM",
              symbol: "DEM"
            },
            DJF: {
              displayName: {
                one: "Franco djiboutiano",
                other: "Francos djiboutianos"
              },
              narrow: "DJF",
              symbol: "DJF"
            },
            DKK: {
              displayName: {
                one: "Coroa dinamarquesa",
                other: "Coroas dinamarquesas"
              },
              narrow: "kr",
              symbol: "DKK"
            },
            DOP: {
              displayName: {
                one: "Peso dominicano",
                other: "Pesos dominicanos"
              },
              narrow: "$",
              symbol: "DOP"
            },
            DZD: {
              displayName: {
                one: "Dinar argelino",
                other: "Dinares argelinos"
              },
              narrow: "DZD",
              symbol: "DZD"
            },
            ECS: {
              displayName: {
                one: "Sucre equatoriano",
                other: "Sucres equatorianos"
              },
              narrow: "ECS",
              symbol: "ECS"
            },
            ECV: {
              displayName: {
                one: "Unidade de valor constante equatoriana (UVC)",
                other: "Unidades de valor constante equatorianas (UVC)"
              },
              narrow: "ECV",
              symbol: "ECV"
            },
            EEK: {
              displayName: {
                one: "Coroa estoniana",
                other: "Coroas estonianas"
              },
              narrow: "EEK",
              symbol: "EEK"
            },
            EGP: {
              displayName: {
                one: "Libra egípcia",
                other: "Libras egípcias"
              },
              narrow: "E£",
              symbol: "EGP"
            },
            ERN: {
              displayName: {
                one: "Nakfa da Eritreia",
                other: "Nakfas da Eritreia"
              },
              narrow: "ERN",
              symbol: "ERN"
            },
            ESA: {
              displayName: {
                one: "Peseta espanhola (conta A)",
                other: "Pesetas espanholas (conta A)"
              },
              narrow: "ESA",
              symbol: "ESA"
            },
            ESB: {
              displayName: {
                one: "Peseta espanhola (conta conversível)",
                other: "Pesetas espanholas (conta conversível)"
              },
              narrow: "ESB",
              symbol: "ESB"
            },
            ESP: {
              displayName: {
                one: "Peseta espanhola",
                other: "Pesetas espanholas"
              },
              narrow: "₧",
              symbol: "ESP"
            },
            ETB: {
              displayName: {
                one: "Birr etíope",
                other: "Birrs etíopes"
              },
              narrow: "ETB",
              symbol: "ETB"
            },
            EUR: {
              displayName: {
                one: "Euro",
                other: "Euros"
              },
              narrow: "€",
              symbol: "€"
            },
            FIM: {
              displayName: {
                one: "Marco finlandês",
                other: "Marcos finlandeses"
              },
              narrow: "FIM",
              symbol: "FIM"
            },
            FJD: {
              displayName: {
                one: "Dólar fijiano",
                other: "Dólares fijianos"
              },
              narrow: "$",
              symbol: "FJD"
            },
            FKP: {
              displayName: {
                one: "Libra malvinense",
                other: "Libras malvinenses"
              },
              narrow: "£",
              symbol: "FKP"
            },
            FRF: {
              displayName: {
                one: "Franco francês",
                other: "Francos franceses"
              },
              narrow: "FRF",
              symbol: "FRF"
            },
            GBP: {
              displayName: {
                one: "Libra esterlina",
                other: "Libras esterlinas"
              },
              narrow: "£",
              symbol: "£"
            },
            GEK: {
              displayName: {
                one: "Kupon larit da Geórgia",
                other: "Kupon larits da Geórgia"
              },
              narrow: "GEK",
              symbol: "GEK"
            },
            GEL: {
              displayName: {
                one: "Lari georgiano",
                other: "Laris georgianos"
              },
              narrow: "₾",
              symbol: "GEL"
            },
            GHC: {
              displayName: {
                one: "Cedi de Gana (1979–2007)",
                other: "Cedis de Gana (1979–2007)"
              },
              narrow: "GHC",
              symbol: "GHC"
            },
            GHS: {
              displayName: {
                one: "Cedi ganês",
                other: "Cedis ganeses"
              },
              narrow: "GH₵",
              symbol: "GHS"
            },
            GIP: {
              displayName: {
                one: "Libra de Gibraltar",
                other: "Libras de Gibraltar"
              },
              narrow: "£",
              symbol: "GIP"
            },
            GMD: {
              displayName: {
                one: "Dalasi gambiano",
                other: "Dalasis gambianos"
              },
              narrow: "GMD",
              symbol: "GMD"
            },
            GNF: {
              displayName: {
                one: "Franco guineano",
                other: "Francos guineanos"
              },
              narrow: "FG",
              symbol: "GNF"
            },
            GNS: {
              displayName: {
                one: "Syli guineano",
                other: "Sylis guineanos"
              },
              narrow: "GNS",
              symbol: "GNS"
            },
            GQE: {
              displayName: {
                one: "Ekwele da Guiné Equatorial",
                other: "Ekweles da Guiné Equatorial"
              },
              narrow: "GQE",
              symbol: "GQE"
            },
            GRD: {
              displayName: {
                one: "Dracma grego",
                other: "Dracmas gregos"
              },
              narrow: "GRD",
              symbol: "GRD"
            },
            GTQ: {
              displayName: {
                one: "Quetzal guatemalteco",
                other: "Quetzais guatemaltecos"
              },
              narrow: "Q",
              symbol: "GTQ"
            },
            GWE: {
              displayName: {
                one: "Escudo da Guiné Portuguesa",
                other: "Escudos da Guinéa Portuguesa"
              },
              narrow: "GWE",
              symbol: "GWE"
            },
            GWP: {
              displayName: {
                one: "Peso de Guiné-Bissau",
                other: "Pesos de Guiné-Bissau"
              },
              narrow: "GWP",
              symbol: "GWP"
            },
            GYD: {
              displayName: {
                one: "Dólar guianense",
                other: "Dólares guianenses"
              },
              narrow: "$",
              symbol: "GYD"
            },
            HKD: {
              displayName: {
                one: "Dólar de Hong Kong",
                other: "Dólares de Hong Kong"
              },
              narrow: "$",
              symbol: "HK$"
            },
            HNL: {
              displayName: {
                one: "Lempira hondurenha",
                other: "Lempiras hondurenhas"
              },
              narrow: "L",
              symbol: "HNL"
            },
            HRD: {
              displayName: {
                one: "Dinar croata",
                other: "Dinares croatas"
              },
              narrow: "HRD",
              symbol: "HRD"
            },
            HRK: {
              displayName: {
                one: "Kuna croata",
                other: "Kunas croatas"
              },
              narrow: "kn",
              symbol: "HRK"
            },
            HTG: {
              displayName: {
                one: "Gourde haitiano",
                other: "Gourdes haitianos"
              },
              narrow: "HTG",
              symbol: "HTG"
            },
            HUF: {
              displayName: {
                one: "Florim húngaro",
                other: "Florins húngaros"
              },
              narrow: "Ft",
              symbol: "HUF"
            },
            IDR: {
              displayName: {
                one: "Rupia indonésia",
                other: "Rupias indonésias"
              },
              narrow: "Rp",
              symbol: "IDR"
            },
            IEP: {
              displayName: {
                one: "Libra irlandesa",
                other: "Libras irlandesas"
              },
              narrow: "IEP",
              symbol: "IEP"
            },
            ILP: {
              displayName: {
                one: "Libra israelita",
                other: "Libras israelitas"
              },
              narrow: "ILP",
              symbol: "ILP"
            },
            ILR: {
              displayName: {
                one: "Sheqel antigo israelita",
                other: "Sheqels antigos israelitas"
              },
              narrow: "ILR",
              symbol: "ILR"
            },
            ILS: {
              displayName: {
                one: "Novo shekel israelense",
                other: "Novos shekels israelenses"
              },
              narrow: "₪",
              symbol: "₪"
            },
            INR: {
              displayName: {
                one: "Rupia indiana",
                other: "Rupias indianas"
              },
              narrow: "₹",
              symbol: "₹"
            },
            IQD: {
              displayName: {
                one: "Dinar iraquiano",
                other: "Dinares iraquianos"
              },
              narrow: "IQD",
              symbol: "IQD"
            },
            IRR: {
              displayName: {
                one: "Rial iraniano",
                other: "Riales iranianos"
              },
              narrow: "IRR",
              symbol: "IRR"
            },
            ISJ: {
              displayName: {
                one: "Coroa antiga islandesa",
                other: "Coroas antigas islandesas"
              },
              narrow: "ISJ",
              symbol: "ISJ"
            },
            ISK: {
              displayName: {
                one: "Coroa islandesa",
                other: "Coroas islandesas"
              },
              narrow: "kr",
              symbol: "ISK"
            },
            ITL: {
              displayName: {
                one: "Lira italiana",
                other: "Liras italianas"
              },
              narrow: "ITL",
              symbol: "ITL"
            },
            JMD: {
              displayName: {
                one: "Dólar jamaicano",
                other: "Dólares jamaicanos"
              },
              narrow: "$",
              symbol: "JMD"
            },
            JOD: {
              displayName: {
                one: "Dinar jordaniano",
                other: "Dinares jordanianos"
              },
              narrow: "JOD",
              symbol: "JOD"
            },
            JPY: {
              displayName: {
                one: "Iene japonês",
                other: "Ienes japoneses"
              },
              narrow: "¥",
              symbol: "JP¥"
            },
            KES: {
              displayName: {
                one: "Xelim queniano",
                other: "Xelins quenianos"
              },
              narrow: "KES",
              symbol: "KES"
            },
            KGS: {
              displayName: {
                one: "Som quirguiz",
                other: "Sons quirguizes"
              },
              narrow: "⃀",
              symbol: "KGS"
            },
            KHR: {
              displayName: {
                one: "Riel cambojano",
                other: "Rieles cambojanos"
              },
              narrow: "៛",
              symbol: "KHR"
            },
            KMF: {
              displayName: {
                one: "Franco comoriano",
                other: "Francos comorianos"
              },
              narrow: "CF",
              symbol: "KMF"
            },
            KPW: {
              displayName: {
                one: "Won norte-coreano",
                other: "Wons norte-coreanos"
              },
              narrow: "₩",
              symbol: "KPW"
            },
            KRH: {
              displayName: {
                one: "Hwan da Coreia do Sul",
                other: "Hwans da Coreia do Sul"
              },
              narrow: "KRH",
              symbol: "KRH"
            },
            KRO: {
              displayName: {
                one: "Won antigo da Coreia do Sul",
                other: "Wons antigos da Coreia do Sul"
              },
              narrow: "KRO",
              symbol: "KRO"
            },
            KRW: {
              displayName: {
                one: "Won sul-coreano",
                other: "Wons sul-coreanos"
              },
              narrow: "₩",
              symbol: "₩"
            },
            KWD: {
              displayName: {
                one: "Dinar kuwaitiano",
                other: "Dinares kuwaitianos"
              },
              narrow: "KWD",
              symbol: "KWD"
            },
            KYD: {
              displayName: {
                one: "Dólar das Ilhas Cayman",
                other: "Dólares das Ilhas Cayman"
              },
              narrow: "$",
              symbol: "KYD"
            },
            KZT: {
              displayName: {
                one: "Tenge cazaque",
                other: "Tenges cazaques"
              },
              narrow: "₸",
              symbol: "KZT"
            },
            LAK: {
              displayName: {
                one: "Kip laosiano",
                other: "Kips laosianos"
              },
              narrow: "₭",
              symbol: "LAK"
            },
            LBP: {
              displayName: {
                one: "Libra libanesa",
                other: "Libras libanesas"
              },
              narrow: "L£",
              symbol: "LBP"
            },
            LKR: {
              displayName: {
                one: "Rupia cingalesa",
                other: "Rupias cingalesas"
              },
              narrow: "Rs",
              symbol: "LKR"
            },
            LRD: {
              displayName: {
                one: "Dólar liberiano",
                other: "Dólares liberianos"
              },
              narrow: "$",
              symbol: "LRD"
            },
            LSL: {
              displayName: {
                one: "Loti lesotiano",
                other: "Lotis lesotianos"
              },
              narrow: "LSL",
              symbol: "LSL"
            },
            LTL: {
              displayName: {
                one: "Litas lituano",
                other: "Litai lituanos"
              },
              narrow: "Lt",
              symbol: "LTL"
            },
            LTT: {
              displayName: {
                one: "Talonas lituanas",
                other: "Talonases lituanas"
              },
              narrow: "LTT",
              symbol: "LTT"
            },
            LUC: {
              displayName: {
                one: "Franco conversível de Luxemburgo",
                other: "Francos conversíveis de Luxemburgo"
              },
              narrow: "LUC",
              symbol: "LUC"
            },
            LUF: {
              displayName: {
                one: "Franco de Luxemburgo",
                other: "Francos de Luxemburgo"
              },
              narrow: "LUF",
              symbol: "LUF"
            },
            LUL: {
              displayName: {
                one: "Franco financeiro de Luxemburgo",
                other: "Francos financeiros de Luxemburgo"
              },
              narrow: "LUL",
              symbol: "LUL"
            },
            LVL: {
              displayName: {
                one: "Lats letão",
                other: "Lati letões"
              },
              narrow: "Ls",
              symbol: "LVL"
            },
            LVR: {
              displayName: {
                one: "Rublo da Letônia",
                other: "Rublos da Letônia"
              },
              narrow: "LVR",
              symbol: "LVR"
            },
            LYD: {
              displayName: {
                one: "Dinar líbio",
                other: "Dinares líbios"
              },
              narrow: "LYD",
              symbol: "LYD"
            },
            MAD: {
              displayName: {
                one: "Dirham marroquino",
                other: "Dirhams marroquinos"
              },
              narrow: "MAD",
              symbol: "MAD"
            },
            MAF: {
              displayName: {
                one: "Franco marroquino",
                other: "Francos marroquinos"
              },
              narrow: "MAF",
              symbol: "MAF"
            },
            MCF: {
              displayName: {
                one: "Franco monegasco",
                other: "Francos monegascos"
              },
              narrow: "MCF",
              symbol: "MCF"
            },
            MDC: {
              displayName: {
                other: "Cupon moldávio"
              },
              narrow: "MDC",
              symbol: "MDC"
            },
            MDL: {
              displayName: {
                one: "Leu moldávio",
                other: "Leus moldávios"
              },
              narrow: "MDL",
              symbol: "MDL"
            },
            MGA: {
              displayName: {
                one: "Ariary malgaxe",
                other: "Ariarys malgaxes"
              },
              narrow: "Ar",
              symbol: "MGA"
            },
            MGF: {
              displayName: {
                one: "Franco de Madagascar",
                other: "Francos de Madagascar"
              },
              narrow: "MGF",
              symbol: "MGF"
            },
            MKD: {
              displayName: {
                one: "Dinar macedônio",
                other: "Dinares macedônios"
              },
              narrow: "MKD",
              symbol: "MKD"
            },
            MKN: {
              displayName: {
                one: "Dinar macedônio (1992–1993)",
                other: "Dinares macedônios (1992–1993)"
              },
              narrow: "MKN",
              symbol: "MKN"
            },
            MLF: {
              displayName: {
                one: "Franco de Mali",
                other: "Francos de Mali"
              },
              narrow: "MLF",
              symbol: "MLF"
            },
            MMK: {
              displayName: {
                one: "Quiate mianmarense",
                other: "Quiates mianmarenses"
              },
              narrow: "K",
              symbol: "MMK"
            },
            MNT: {
              displayName: {
                one: "Tugrik mongol",
                other: "Tugriks mongóis"
              },
              narrow: "₮",
              symbol: "MNT"
            },
            MOP: {
              displayName: {
                one: "Pataca macaense",
                other: "Patacas macaenses"
              },
              narrow: "MOP",
              symbol: "MOP"
            },
            MRO: {
              displayName: {
                one: "Ouguiya mauritana (1973–2017)",
                other: "Ouguiyas mauritanas (1973–2017)"
              },
              narrow: "MRO",
              symbol: "MRO"
            },
            MRU: {
              displayName: {
                one: "Ouguiya mauritana",
                other: "Ouguiyas mauritanas"
              },
              narrow: "MRU",
              symbol: "MRU"
            },
            MTL: {
              displayName: {
                one: "Lira Maltesa",
                other: "Liras maltesas"
              },
              narrow: "MTL",
              symbol: "MTL"
            },
            MTP: {
              displayName: {
                one: "Libra maltesa",
                other: "Libras maltesas"
              },
              narrow: "MTP",
              symbol: "MTP"
            },
            MUR: {
              displayName: {
                one: "Rupia mauriciana",
                other: "Rupias mauricianas"
              },
              narrow: "Rs",
              symbol: "MUR"
            },
            MVR: {
              displayName: {
                one: "Rupia maldivana",
                other: "Rupias maldivanas"
              },
              narrow: "MVR",
              symbol: "MVR"
            },
            MWK: {
              displayName: {
                one: "Kwacha malauiana",
                other: "Kwachas malauianas"
              },
              narrow: "MWK",
              symbol: "MWK"
            },
            MXN: {
              displayName: {
                one: "Peso mexicano",
                other: "Pesos mexicanos"
              },
              narrow: "$",
              symbol: "MX$"
            },
            MXP: {
              displayName: {
                one: "Peso de prata mexicano (1861–1992)",
                other: "Pesos de prata mexicanos (1861–1992)"
              },
              narrow: "MXP",
              symbol: "MXP"
            },
            MXV: {
              displayName: {
                one: "Unidade de investimento mexicana (UDI)",
                other: "Unidades de investimento mexicanas (UDI)"
              },
              narrow: "MXV",
              symbol: "MXV"
            },
            MYR: {
              displayName: {
                one: "Ringgit malaio",
                other: "Ringgits malaios"
              },
              narrow: "RM",
              symbol: "MYR"
            },
            MZE: {
              displayName: {
                one: "Escudo de Moçambique",
                other: "Escudos de Moçambique"
              },
              narrow: "MZE",
              symbol: "MZE"
            },
            MZM: {
              displayName: {
                one: "Metical antigo de Moçambique",
                other: "Meticales antigos de Moçambique"
              },
              narrow: "MZM",
              symbol: "MZM"
            },
            MZN: {
              displayName: {
                one: "Metical moçambicano",
                other: "Meticais moçambicanos"
              },
              narrow: "MZN",
              symbol: "MZN"
            },
            NAD: {
              displayName: {
                one: "Dólar namibiano",
                other: "Dólares namibianos"
              },
              narrow: "$",
              symbol: "NAD"
            },
            NGN: {
              displayName: {
                one: "Naira nigeriana",
                other: "Nairas nigerianas"
              },
              narrow: "₦",
              symbol: "NGN"
            },
            NIC: {
              displayName: {
                one: "Córdoba nicaraguense (1988–1991)",
                other: "Córdobas nicaraguense (1988–1991)"
              },
              narrow: "NIC",
              symbol: "NIC"
            },
            NIO: {
              displayName: {
                one: "Córdoba nicaraguense",
                other: "Córdobas nicaraguenses"
              },
              narrow: "C$",
              symbol: "NIO"
            },
            NLG: {
              displayName: {
                one: "Florim holandês",
                other: "Florins holandeses"
              },
              narrow: "NLG",
              symbol: "NLG"
            },
            NOK: {
              displayName: {
                one: "Coroa norueguesa",
                other: "Coroas norueguesas"
              },
              narrow: "kr",
              symbol: "NOK"
            },
            NPR: {
              displayName: {
                one: "Rupia nepalesa",
                other: "Rupias nepalesas"
              },
              narrow: "Rs",
              symbol: "NPR"
            },
            NZD: {
              displayName: {
                one: "Dólar neozelandês",
                other: "Dólares neozelandeses"
              },
              narrow: "$",
              symbol: "NZ$"
            },
            OMR: {
              displayName: {
                one: "Rial omanense",
                other: "Riales omanenses"
              },
              narrow: "OMR",
              symbol: "OMR"
            },
            PAB: {
              displayName: {
                one: "Balboa panamenho",
                other: "Balboas panamenhos"
              },
              narrow: "PAB",
              symbol: "PAB"
            },
            PEI: {
              displayName: {
                one: "Inti peruano",
                other: "Intis peruanos"
              },
              narrow: "PEI",
              symbol: "PEI"
            },
            PEN: {
              displayName: {
                one: "Novo sol peruano",
                other: "Novos sóis peruanos"
              },
              narrow: "PEN",
              symbol: "PEN"
            },
            PES: {
              displayName: {
                one: "Sol peruano (1863–1965)",
                other: "Sóis peruanos (1863–1965)"
              },
              narrow: "PES",
              symbol: "PES"
            },
            PGK: {
              displayName: {
                one: "Kina papuásia",
                other: "Kinas papuásias"
              },
              narrow: "PGK",
              symbol: "PGK"
            },
            PHP: {
              displayName: {
                one: "Peso filipino",
                other: "Pesos filipinos"
              },
              narrow: "₱",
              symbol: "PHP"
            },
            PKR: {
              displayName: {
                one: "Rupia paquistanesa",
                other: "Rupias paquistanesas"
              },
              narrow: "Rs",
              symbol: "PKR"
            },
            PLN: {
              displayName: {
                one: "Zloty polonês",
                other: "Zlotys poloneses"
              },
              narrow: "zł",
              symbol: "PLN"
            },
            PLZ: {
              displayName: {
                one: "Zloti polonês (1950–1995)",
                other: "Zlotis poloneses (1950–1995)"
              },
              narrow: "PLZ",
              symbol: "PLZ"
            },
            PTE: {
              displayName: {
                one: "Escudo português",
                other: "Escudos portugueses"
              },
              narrow: "Esc.",
              symbol: "Esc."
            },
            PYG: {
              displayName: {
                one: "Guarani paraguaio",
                other: "Guaranis paraguaios"
              },
              narrow: "₲",
              symbol: "PYG"
            },
            QAR: {
              displayName: {
                one: "Rial catariano",
                other: "Riales catarianos"
              },
              narrow: "QAR",
              symbol: "QAR"
            },
            RHD: {
              displayName: {
                one: "Dólar da Rodésia",
                other: "Dólares da Rodésia"
              },
              narrow: "RHD",
              symbol: "RHD"
            },
            ROL: {
              displayName: {
                one: "Leu antigo da Romênia",
                other: "Leus antigos da Romênia"
              },
              narrow: "ROL",
              symbol: "ROL"
            },
            RON: {
              displayName: {
                one: "Leu romeno",
                other: "Leus romenos"
              },
              narrow: "L",
              symbol: "RON"
            },
            RSD: {
              displayName: {
                one: "Dinar sérvio",
                other: "Dinares sérvios"
              },
              narrow: "RSD",
              symbol: "RSD"
            },
            RUB: {
              displayName: {
                one: "Rublo russo",
                other: "Rublos russos"
              },
              narrow: "₽",
              symbol: "RUB"
            },
            RUR: {
              displayName: {
                one: "Rublo russo (1991–1998)",
                other: "Rublos russos (1991–1998)"
              },
              narrow: "RUR",
              symbol: "RUR"
            },
            RWF: {
              displayName: {
                one: "Franco ruandês",
                other: "Francos ruandeses"
              },
              narrow: "RF",
              symbol: "RWF"
            },
            SAR: {
              displayName: {
                one: "Riyal saudita",
                other: "Riyales sauditas"
              },
              narrow: "SAR",
              symbol: "SAR"
            },
            SBD: {
              displayName: {
                one: "Dólar das Ilhas Salomão",
                other: "Dólares das Ilhas Salomão"
              },
              narrow: "$",
              symbol: "SBD"
            },
            SCR: {
              displayName: {
                one: "Rupia seichelense",
                other: "Rupias seichelenses"
              },
              narrow: "SCR",
              symbol: "SCR"
            },
            SDD: {
              displayName: {
                one: "Dinar antigo do Sudão",
                other: "Dinares antigos do Sudão"
              },
              narrow: "SDD",
              symbol: "SDD"
            },
            SDG: {
              displayName: {
                one: "Libra sudanesa",
                other: "Libras sudanesas"
              },
              narrow: "SDG",
              symbol: "SDG"
            },
            SDP: {
              displayName: {
                one: "Libra antiga sudanesa",
                other: "Libras antigas sudanesas"
              },
              narrow: "SDP",
              symbol: "SDP"
            },
            SEK: {
              displayName: {
                one: "Coroa sueca",
                other: "Coroas suecas"
              },
              narrow: "kr",
              symbol: "SEK"
            },
            SGD: {
              displayName: {
                one: "Dólar singapuriano",
                other: "Dólares singapurianos"
              },
              narrow: "$",
              symbol: "SGD"
            },
            SHP: {
              displayName: {
                one: "Libra de Santa Helena",
                other: "Libras de Santa Helena"
              },
              narrow: "£",
              symbol: "SHP"
            },
            SIT: {
              displayName: {
                one: "Tolar da Eslovênia",
                other: "Tolares da Eslovênia"
              },
              narrow: "SIT",
              symbol: "SIT"
            },
            SKK: {
              displayName: {
                one: "Coroa eslovaca",
                other: "Coroas eslovacas"
              },
              narrow: "SKK",
              symbol: "SKK"
            },
            SLE: {
              displayName: {
                one: "Leone de Serra Leoa",
                other: "Leones de Serra Leoa"
              },
              narrow: "SLE",
              symbol: "SLE"
            },
            SLL: {
              displayName: {
                one: "Leone de Serra Leoa (1964—2022)",
                other: "Leones de Serra Leoa (1964—2022)"
              },
              narrow: "SLL",
              symbol: "SLL"
            },
            SOS: {
              displayName: {
                one: "Xelim somali",
                other: "Xelins somalis"
              },
              narrow: "SOS",
              symbol: "SOS"
            },
            SRD: {
              displayName: {
                one: "Dólar surinamês",
                other: "Dólares surinameses"
              },
              narrow: "$",
              symbol: "SRD"
            },
            SRG: {
              displayName: {
                one: "Florim do Suriname",
                other: "Florins do Suriname"
              },
              narrow: "SRG",
              symbol: "SRG"
            },
            SSP: {
              displayName: {
                one: "Libra sul-sudanesa",
                other: "Libras sul-sudanesas"
              },
              narrow: "£",
              symbol: "SSP"
            },
            STD: {
              displayName: {
                one: "Dobra de São Tomé e Príncipe (1977–2017)",
                other: "Dobras de São Tomé e Príncipe (1977–2017)"
              },
              narrow: "STD",
              symbol: "STD"
            },
            STN: {
              displayName: {
                one: "Dobra de São Tomé e Príncipe",
                other: "Dobras de São Tomé e Príncipe"
              },
              narrow: "Db",
              symbol: "STN"
            },
            SUR: {
              displayName: {
                one: "Rublo soviético",
                other: "Rublos soviéticos"
              },
              narrow: "SUR",
              symbol: "SUR"
            },
            SVC: {
              displayName: {
                one: "Colon de El Salvador",
                other: "Colons de El Salvador"
              },
              narrow: "SVC",
              symbol: "SVC"
            },
            SYP: {
              displayName: {
                one: "Libra síria",
                other: "Libras sírias"
              },
              narrow: "S£",
              symbol: "SYP"
            },
            SZL: {
              displayName: {
                one: "Lilangeni suazi",
                other: "Lilangenis suazis"
              },
              narrow: "SZL",
              symbol: "SZL"
            },
            THB: {
              displayName: {
                one: "Baht tailandês",
                other: "Bahts tailandeses"
              },
              narrow: "฿",
              symbol: "฿"
            },
            TJR: {
              displayName: {
                one: "Rublo do Tajaquistão",
                other: "Rublos do Tajaquistão"
              },
              narrow: "TJR",
              symbol: "TJR"
            },
            TJS: {
              displayName: {
                one: "Somoni tadjique",
                other: "Somonis tadjiques"
              },
              narrow: "TJS",
              symbol: "TJS"
            },
            TMM: {
              displayName: {
                one: "Manat do Turcomenistão (1993–2009)",
                other: "Manats do Turcomenistão (1993–2009)"
              },
              narrow: "TMM",
              symbol: "TMM"
            },
            TMT: {
              displayName: {
                one: "Manat turcomeno",
                other: "Manats turcomenos"
              },
              narrow: "TMT",
              symbol: "TMT"
            },
            TND: {
              displayName: {
                one: "Dinar tunisiano",
                other: "Dinares tunisianos"
              },
              narrow: "TND",
              symbol: "TND"
            },
            TOP: {
              displayName: {
                one: "Paʻanga tonganesa",
                other: "Paʻangas tonganesas"
              },
              narrow: "T$",
              symbol: "TOP"
            },
            TPE: {
              displayName: {
                one: "Escudo do Timor",
                other: "Escudos do Timor"
              },
              narrow: "TPE",
              symbol: "TPE"
            },
            TRL: {
              displayName: {
                one: "Lira turca antiga",
                other: "Liras turcas antigas"
              },
              narrow: "TRL",
              symbol: "TRL"
            },
            TRY: {
              displayName: {
                one: "Lira turca",
                other: "Liras turcas"
              },
              narrow: "₺",
              symbol: "TRY"
            },
            TTD: {
              displayName: {
                one: "Dólar de Trinidad e Tobago",
                other: "Dólares de Trinidad e Tobago"
              },
              narrow: "$",
              symbol: "TTD"
            },
            TWD: {
              displayName: {
                one: "Novo dólar taiwanês",
                other: "Novos dólares taiwaneses"
              },
              narrow: "NT$",
              symbol: "NT$"
            },
            TZS: {
              displayName: {
                one: "Xelim tanzaniano",
                other: "Xelins tanzanianos"
              },
              narrow: "TZS",
              symbol: "TZS"
            },
            UAH: {
              displayName: {
                one: "Hryvnia ucraniano",
                other: "Hryvnias ucranianos"
              },
              narrow: "₴",
              symbol: "UAH"
            },
            UAK: {
              displayName: {
                one: "Karbovanetz da Ucrânia",
                other: "Karbovanetzs da Ucrânia"
              },
              narrow: "UAK",
              symbol: "UAK"
            },
            UGS: {
              displayName: {
                one: "Shilling de Uganda (1966–1987)",
                other: "Shillings de Uganda (1966–1987)"
              },
              narrow: "UGS",
              symbol: "UGS"
            },
            UGX: {
              displayName: {
                one: "Xelim ugandense",
                other: "Xelins ugandenses"
              },
              narrow: "UGX",
              symbol: "UGX"
            },
            USD: {
              displayName: {
                one: "Dólar americano",
                other: "Dólares americanos"
              },
              narrow: "$",
              symbol: "US$"
            },
            USN: {
              displayName: {
                one: "Dólar americano (dia seguinte)",
                other: "Dólares americanos (dia seguinte)"
              },
              narrow: "USN",
              symbol: "USN"
            },
            USS: {
              displayName: {
                one: "Dólar americano (mesmo dia)",
                other: "Dólares americanos (mesmo dia)"
              },
              narrow: "USS",
              symbol: "USS"
            },
            UYI: {
              displayName: {
                one: "Peso uruguaio em unidades indexadas",
                other: "Pesos uruguaios em unidades indexadas"
              },
              narrow: "UYI",
              symbol: "UYI"
            },
            UYP: {
              displayName: {
                one: "Peso uruguaio (1975–1993)",
                other: "Pesos uruguaios (1975–1993)"
              },
              narrow: "UYP",
              symbol: "UYP"
            },
            UYU: {
              displayName: {
                one: "Peso uruguaio",
                other: "Pesos uruguaios"
              },
              narrow: "$",
              symbol: "UYU"
            },
            UZS: {
              displayName: {
                one: "Som uzbeque",
                other: "Sons uzbeques"
              },
              narrow: "UZS",
              symbol: "UZS"
            },
            VEB: {
              displayName: {
                one: "Bolívar venezuelano (1871–2008)",
                other: "Bolívares venezuelanos (1871–2008)"
              },
              narrow: "VEB",
              symbol: "VEB"
            },
            VEF: {
              displayName: {
                one: "Bolívar venezuelano (2008–2018)",
                other: "Bolívares venezuelanos (2008–2018)"
              },
              narrow: "Bs",
              symbol: "VEF"
            },
            VES: {
              displayName: {
                one: "Bolívar venezuelano",
                other: "Bolívares venezuelanos"
              },
              narrow: "VES",
              symbol: "VES"
            },
            VND: {
              displayName: {
                one: "Dong vietnamita",
                other: "Dongs vietnamitas"
              },
              narrow: "₫",
              symbol: "₫"
            },
            VNN: {
              displayName: {
                other: "Dong vietnamita (1978–1985)"
              },
              narrow: "VNN",
              symbol: "VNN"
            },
            VUV: {
              displayName: {
                one: "Vatu de Vanuatu",
                other: "Vatus de Vanuatu"
              },
              narrow: "VUV",
              symbol: "VUV"
            },
            WST: {
              displayName: {
                one: "Tala samoano",
                other: "Talas samoanos"
              },
              narrow: "WST",
              symbol: "WST"
            },
            XAF: {
              displayName: {
                one: "Franco CFA de BEAC",
                other: "Francos CFA de BEAC"
              },
              narrow: "FCFA",
              symbol: "FCFA"
            },
            XAG: {
              displayName: {
                one: "Prata",
                other: "Pratas"
              },
              narrow: "XAG",
              symbol: "XAG"
            },
            XAU: {
              displayName: {
                one: "Ouro",
                other: "Ouros"
              },
              narrow: "XAU",
              symbol: "XAU"
            },
            XBA: {
              displayName: {
                one: "Unidade de composição europeia",
                other: "Unidades de composição europeias"
              },
              narrow: "XBA",
              symbol: "XBA"
            },
            XBB: {
              displayName: {
                one: "Unidade monetária europeia",
                other: "Unidades monetárias europeias"
              },
              narrow: "XBB",
              symbol: "XBB"
            },
            XBC: {
              displayName: {
                one: "Unidade europeia de conta (XBC)",
                other: "Unidades europeias de conta (XBC)"
              },
              narrow: "XBC",
              symbol: "XBC"
            },
            XBD: {
              displayName: {
                one: "Unidade europeia de conta (XBD)",
                other: "Unidades europeias de conta (XBD)"
              },
              narrow: "XBD",
              symbol: "XBD"
            },
            XCD: {
              displayName: {
                one: "Dólar do Caribe Oriental",
                other: "Dólares do Caribe Oriental"
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
                other: "Direitos de desenho especiais"
              },
              narrow: "XDR",
              symbol: "XDR"
            },
            XEU: {
              displayName: {
                one: "Unidade de moeda europeia",
                other: "Unidades de moedas europeias"
              },
              narrow: "XEU",
              symbol: "XEU"
            },
            XFO: {
              displayName: {
                one: "Franco de ouro francês",
                other: "Francos de ouro franceses"
              },
              narrow: "XFO",
              symbol: "XFO"
            },
            XFU: {
              displayName: {
                one: "Franco UIC francês",
                other: "Francos UIC franceses"
              },
              narrow: "XFU",
              symbol: "XFU"
            },
            XOF: {
              displayName: {
                one: "Franco CFA de BCEAO",
                other: "Francos CFA de BCEAO"
              },
              narrow: "F CFA",
              symbol: "F CFA"
            },
            XPD: {
              displayName: {
                one: "Paládio",
                other: "Paládios"
              },
              narrow: "XPD",
              symbol: "XPD"
            },
            XPF: {
              displayName: {
                one: "Franco CFP",
                other: "Francos CFP"
              },
              narrow: "CFPF",
              symbol: "CFPF"
            },
            XPT: {
              displayName: {
                one: "Platina",
                other: "Platinas"
              },
              narrow: "XPT",
              symbol: "XPT"
            },
            XRE: {
              displayName: {
                other: "Fundos RINET"
              },
              narrow: "XRE",
              symbol: "XRE"
            },
            XTS: {
              displayName: {
                one: "Código de moeda de teste",
                other: "Códigos de moeda de teste"
              },
              narrow: "XTS",
              symbol: "XTS"
            },
            XXX: {
              displayName: {
                one: "(unidade monetária desconhecida)",
                other: "(moedas desconhecidas)"
              },
              narrow: "¤",
              symbol: "¤"
            },
            YDD: {
              displayName: {
                one: "Dinar do Iêmen",
                other: "Dinares do Iêmen"
              },
              narrow: "YDD",
              symbol: "YDD"
            },
            YER: {
              displayName: {
                one: "Rial iemenita",
                other: "Riales iemenitas"
              },
              narrow: "YER",
              symbol: "YER"
            },
            YUD: {
              displayName: {
                one: "Dinar forte iugoslavo",
                other: "Dinares fortes iugoslavos"
              },
              narrow: "YUD",
              symbol: "YUD"
            },
            YUM: {
              displayName: {
                one: "Dinar noviy da Iugoslávia",
                other: "Dinares noviy da Iugoslávia"
              },
              narrow: "YUM",
              symbol: "YUM"
            },
            YUN: {
              displayName: {
                one: "Dinar conversível da Iugoslávia",
                other: "Dinares conversíveis da Iugoslávia"
              },
              narrow: "YUN",
              symbol: "YUN"
            },
            YUR: {
              displayName: {
                one: "Dinar iugoslavo reformado",
                other: "Dinares iugoslavos reformados"
              },
              narrow: "YUR",
              symbol: "YUR"
            },
            ZAL: {
              displayName: {
                one: "Rand da África do Sul (financeiro)",
                other: "Rands da África do Sul (financeiro)"
              },
              narrow: "ZAL",
              symbol: "ZAL"
            },
            ZAR: {
              displayName: {
                one: "Rand sul-africano",
                other: "Rands sul-africanos"
              },
              narrow: "R",
              symbol: "ZAR"
            },
            ZMK: {
              displayName: {
                one: "Kwacha da Zâmbia (1968–2012)",
                other: "Kwachas da Zâmbia (1968–2012)"
              },
              narrow: "ZMK",
              symbol: "ZMK"
            },
            ZMW: {
              displayName: {
                one: "Kwacha zambiano",
                other: "Kwachas zambianos"
              },
              narrow: "ZK",
              symbol: "ZMW"
            },
            ZRN: {
              displayName: {
                one: "Novo zaire do Zaire",
                other: "Novos zaires do Zaire"
              },
              narrow: "ZRN",
              symbol: "ZRN"
            },
            ZRZ: {
              displayName: {
                one: "Zaire do Zaire",
                other: "Zaires do Zaire"
              },
              narrow: "ZRZ",
              symbol: "ZRZ"
            },
            ZWD: {
              displayName: {
                one: "Dólar do Zimbábue",
                other: "Dólares do Zimbábue"
              },
              narrow: "ZWD",
              symbol: "ZWD"
            },
            ZWL: {
              displayName: {
                one: "Dólar do Zimbábue (2009)",
                other: "Dólares do Zimbábue (2009)"
              },
              narrow: "ZWL",
              symbol: "ZWL"
            },
            ZWR: {
              displayName: {
                one: "Dólar do Zimbábue (2008)",
                other: "Dólares do Zimbábue (2008)"
              },
              narrow: "ZWR",
              symbol: "ZWR"
            }
          },
          nu: ["latn"],
          numbers: {
            currency: {
              latn: {
                accounting: "¤ #,##0.00",
                currencySpacing: {
                  afterInsertBetween: " ",
                  beforeInsertBetween: " "
                },
                short: {
                  1e3: {
                    other: "¤ 0 mil"
                  },
                  1e4: {
                    other: "¤ 00 mil"
                  },
                  1e5: {
                    other: "¤ 000 mil"
                  },
                  1e6: {
                    other: "¤ 0 mi"
                  },
                  1e7: {
                    other: "¤ 00 mi"
                  },
                  1e8: {
                    other: "¤ 000 mi"
                  },
                  1e9: {
                    other: "¤ 0 bi"
                  },
                  1e10: {
                    other: "¤ 00 bi"
                  },
                  1e11: {
                    other: "¤ 000 bi"
                  },
                  1e12: {
                    other: "¤ 0 tri"
                  },
                  1e13: {
                    other: "¤ 00 tri"
                  },
                  1e14: {
                    other: "¤ 000 tri"
                  }
                },
                standard: "¤ #,##0.00",
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
                    one: "0 milhão",
                    other: "0 milhões"
                  },
                  1e7: {
                    one: "00 milhão",
                    other: "00 milhões"
                  },
                  1e8: {
                    one: "000 milhão",
                    other: "000 milhões"
                  },
                  1e9: {
                    one: "0 bilhão",
                    other: "0 bilhões"
                  },
                  1e10: {
                    one: "00 bilhão",
                    other: "00 bilhões"
                  },
                  1e11: {
                    one: "000 bilhão",
                    other: "000 bilhões"
                  },
                  1e12: {
                    one: "0 trilhão",
                    other: "0 trilhões"
                  },
                  1e13: {
                    one: "00 trilhão",
                    other: "00 trilhões"
                  },
                  1e14: {
                    one: "000 trilhão",
                    other: "000 trilhões"
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
                    other: "0 mi"
                  },
                  1e7: {
                    other: "00 mi"
                  },
                  1e8: {
                    other: "000 mi"
                  },
                  1e9: {
                    other: "0 bi"
                  },
                  1e10: {
                    other: "00 bi"
                  },
                  1e11: {
                    other: "000 bi"
                  },
                  1e12: {
                    other: "0 tri"
                  },
                  1e13: {
                    other: "00 tri"
                  },
                  1e14: {
                    other: "000 tri"
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
                rangeSign: "–",
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
                  one: "{0} acre",
                  other: "{0} acres"
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
                  one: "{0} bit",
                  other: "{0} bits"
                },
                perUnit: {},
                short: {
                  other: "{0} bits"
                }
              },
              byte: {
                long: {
                  one: "{0} byte",
                  other: "{0} bytes"
                },
                narrow: {
                  other: "{0} B"
                },
                perUnit: {},
                short: {
                  other: "{0} bytes"
                }
              },
              celsius: {
                long: {
                  one: "{0} grau Celsius",
                  other: "{0} graus Celsius"
                },
                narrow: {
                  other: "{0} °C"
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
                  other: "{0} cm"
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
                  one: "{0} dia",
                  other: "{0} dias"
                },
                narrow: {
                  one: "{0} dia",
                  other: "{0} dias"
                },
                perUnit: {
                  long: "{0} por dia",
                  narrow: "{0}/dia",
                  short: "{0}/dia"
                },
                short: {
                  one: "{0} dia",
                  other: "{0} dias"
                }
              },
              degree: {
                long: {
                  one: "{0} grau",
                  other: "{0} graus"
                },
                narrow: {
                  other: "{0} °"
                },
                perUnit: {},
                short: {
                  other: "{0} °"
                }
              },
              fahrenheit: {
                long: {
                  one: "{0} grau Fahrenheit",
                  other: "{0} graus Fahrenheit"
                },
                narrow: {
                  other: "{0} °F"
                },
                perUnit: {},
                short: {
                  other: "{0} °F"
                }
              },
              "fluid-ounce": {
                long: {
                  one: "{0} onça fluida",
                  other: "{0} onças fluidas"
                },
                narrow: {
                  other: "{0} fl. oz."
                },
                perUnit: {},
                short: {
                  other: "{0} fl oz"
                }
              },
              foot: {
                long: {
                  one: "{0} pé",
                  other: "{0} pés"
                },
                narrow: {
                  other: "{0}′"
                },
                perUnit: {
                  long: "{0} por pé",
                  narrow: "{0}/ft",
                  short: "{0}/ft"
                },
                short: {
                  other: "{0} ft"
                }
              },
              gallon: {
                long: {
                  one: "{0} galão",
                  other: "{0} galões"
                },
                narrow: {
                  other: "{0} gal"
                },
                perUnit: {
                  long: "{0} por galão",
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
                  other: "{0} Gb"
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
                  other: "{0} GB"
                },
                perUnit: {},
                short: {
                  other: "{0} GB"
                }
              },
              gram: {
                long: {
                  one: "{0} grama",
                  other: "{0} gramas"
                },
                narrow: {
                  other: "{0}g"
                },
                perUnit: {
                  long: "{0} por grama",
                  narrow: "{0}/g",
                  short: "{0}/g"
                },
                short: {
                  other: "{0} g"
                }
              },
              hectare: {
                long: {
                  one: "{0} hectare",
                  other: "{0} hectares"
                },
                narrow: {
                  other: "{0} ha"
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
                  other: "{0} h"
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
                  one: "{0} polegada",
                  other: "{0} polegadas"
                },
                narrow: {
                  other: "{0}″"
                },
                perUnit: {
                  long: "{0} por polegada",
                  narrow: "{0}/pol.",
                  short: "{0}/pol."
                },
                short: {
                  other: "{0} pol."
                }
              },
              kilobit: {
                long: {
                  one: "{0} kilobit",
                  other: "{0} kilobits"
                },
                narrow: {
                  other: "{0} kb"
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
                  other: "{0} kB"
                },
                perUnit: {},
                short: {
                  other: "{0} kB"
                }
              },
              kilogram: {
                long: {
                  one: "{0} quilograma",
                  other: "{0} quilogramas"
                },
                narrow: {
                  other: "{0}kg"
                },
                perUnit: {
                  long: "{0} por quilograma",
                  narrow: "{0}/kg",
                  short: "{0}/kg"
                },
                short: {
                  other: "{0} kg"
                }
              },
              kilometer: {
                long: {
                  one: "{0} quilômetro",
                  other: "{0} quilômetros"
                },
                narrow: {
                  other: "{0} km"
                },
                perUnit: {
                  long: "{0} por quilômetro",
                  narrow: "{0}/km",
                  short: "{0}/km"
                },
                short: {
                  other: "{0} km"
                }
              },
              "kilometer-per-hour": {
                long: {
                  one: "{0} quilômetro por hora",
                  other: "{0} quilômetros por hora"
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
                  one: "{0} litro por quilômetro",
                  other: "{0} litros por quilômetro"
                },
                narrow: {
                  other: "{0} l/km"
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
                  other: "{0} Mb"
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
                  other: "{0} MB"
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
                  other: "{0} m"
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
                  other: "{0} m/s"
                },
                perUnit: {},
                short: {
                  other: "{0} m/s"
                }
              },
              mile: {
                long: {
                  one: "{0} milha",
                  other: "{0} milhas"
                },
                narrow: {
                  other: "{0} mi"
                },
                perUnit: {},
                short: {
                  other: "{0} mi"
                }
              },
              "mile-per-gallon": {
                long: {
                  one: "{0} milha por galão",
                  other: "{0} milhas por galão"
                },
                narrow: {
                  other: "{0} mpg"
                },
                perUnit: {},
                short: {
                  other: "{0} mpg"
                }
              },
              "mile-per-hour": {
                long: {
                  one: "{0} milha por hora",
                  other: "{0} milhas por hora"
                },
                narrow: {
                  other: "{0} mph"
                },
                perUnit: {},
                short: {
                  other: "{0} mph"
                }
              },
              "mile-scandinavian": {
                long: {
                  one: "{0} milha escandinava",
                  other: "{0} milhas escandinavas"
                },
                narrow: {
                  other: "{0} smi"
                },
                perUnit: {},
                short: {
                  other: "{0} smi"
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
                  other: "{0} mm"
                },
                perUnit: {},
                short: {
                  other: "{0} mm"
                }
              },
              millisecond: {
                long: {
                  one: "{0} milissegundo",
                  other: "{0} milissegundos"
                },
                narrow: {
                  other: "{0} ms"
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
                  other: "{0} min"
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
                  one: "{0} mês",
                  other: "{0} meses"
                },
                narrow: {
                  one: "{0} mês",
                  other: "{0} meses"
                },
                perUnit: {
                  long: "{0} por mês",
                  narrow: "{0}/mês",
                  short: "{0}/mês"
                },
                short: {
                  one: "{0} mês",
                  other: "{0} meses"
                }
              },
              ounce: {
                long: {
                  one: "{0} onça",
                  other: "{0} onças"
                },
                narrow: {
                  other: "{0} oz"
                },
                perUnit: {
                  long: "{0} por onça",
                  narrow: "{0}/oz",
                  short: "{0}/oz"
                },
                short: {
                  other: "{0} oz"
                }
              },
              percent: {
                long: {
                  other: "{0} por cento"
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
                  one: "{0} petabyte",
                  other: "{0} petabytes"
                },
                narrow: {
                  other: "{0} PB"
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
                  other: "{0} lb"
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
                  other: "{0} s"
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
                  other: "{0} st"
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
                  other: "{0} Tb"
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
                  other: "{0} TB"
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
                  other: "{0} sem."
                },
                perUnit: {
                  long: "{0} por semana",
                  narrow: "{0}/sem.",
                  short: "{0}/sem."
                },
                short: {
                  other: "{0} sem."
                }
              },
              yard: {
                long: {
                  one: "{0} jarda",
                  other: "{0} jardas"
                },
                narrow: {
                  other: "{0} yd"
                },
                perUnit: {},
                short: {
                  other: "{0} yd"
                }
              },
              year: {
                long: {
                  one: "{0} ano",
                  other: "{0} anos"
                },
                narrow: {
                  one: "{0} ano",
                  other: "{0} anos"
                },
                perUnit: {
                  long: "{0} por ano",
                  narrow: "{0}/ano",
                  short: "{0}/ano"
                },
                short: {
                  one: "{0} ano",
                  other: "{0} anos"
                }
              }
            }
          }
        },
        locale: "pt"
      })
    }
  }
]);