try {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new a.Error).stack;
  o && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[o] = "48a5b873-bfb5-4f75-866c-a5bc7678ec28", a._sentryDebugIdIdentifier = "sentry-dbid-48a5b873-bfb5-4f75-866c-a5bc7678ec28")
} catch (a) {} {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[(new a.Error).stack] = Object.assign({}, a._sentryModuleMetadata[(new a.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5663], {
    28085: () => {
      Intl.NumberFormat && "function" == typeof Intl.NumberFormat.__addLocaleData && Intl.NumberFormat.__addLocaleData({
        data: {
          currencies: {
            ADP: {
              displayName: {
                one: "Andorran peseta",
                other: "Andorran pesetas"
              },
              narrow: "ADP",
              symbol: "ADP"
            },
            AED: {
              displayName: {
                one: "UAE dirham",
                other: "UAE dirhams"
              },
              narrow: "AED",
              symbol: "AED"
            },
            AFA: {
              displayName: {
                one: "Afghan afghani (1927–2002)",
                other: "Afghan afghanis (1927–2002)"
              },
              narrow: "AFA",
              symbol: "AFA"
            },
            AFN: {
              displayName: {
                one: "Afghan Afghani",
                other: "Afghan Afghanis"
              },
              narrow: "؋",
              symbol: "AFN"
            },
            ALK: {
              displayName: {
                one: "Albanian lek (1946–1965)",
                other: "Albanian lekë (1946–1965)"
              },
              narrow: "ALK",
              symbol: "ALK"
            },
            ALL: {
              displayName: {
                one: "Albanian lek",
                other: "Albanian lekë"
              },
              narrow: "ALL",
              symbol: "ALL"
            },
            AMD: {
              displayName: {
                one: "Armenian dram",
                other: "Armenian drams"
              },
              narrow: "֏",
              symbol: "AMD"
            },
            ANG: {
              displayName: {
                one: "Netherlands Antillean guilder",
                other: "Netherlands Antillean guilders"
              },
              narrow: "ANG",
              symbol: "ANG"
            },
            AOA: {
              displayName: {
                one: "Angolan kwanza",
                other: "Angolan kwanzas"
              },
              narrow: "Kz",
              symbol: "AOA"
            },
            AOK: {
              displayName: {
                one: "Angolan kwanza (1977–1991)",
                other: "Angolan kwanzas (1977–1991)"
              },
              narrow: "AOK",
              symbol: "AOK"
            },
            AON: {
              displayName: {
                one: "Angolan new kwanza (1990–2000)",
                other: "Angolan new kwanzas (1990–2000)"
              },
              narrow: "AON",
              symbol: "AON"
            },
            AOR: {
              displayName: {
                one: "Angolan readjusted kwanza (1995–1999)",
                other: "Angolan readjusted kwanzas (1995–1999)"
              },
              narrow: "AOR",
              symbol: "AOR"
            },
            ARA: {
              displayName: {
                one: "Argentine austral",
                other: "Argentine australs"
              },
              narrow: "ARA",
              symbol: "ARA"
            },
            ARL: {
              displayName: {
                one: "Argentine peso ley (1970–1983)",
                other: "Argentine pesos ley (1970–1983)"
              },
              narrow: "ARL",
              symbol: "ARL"
            },
            ARM: {
              displayName: {
                one: "Argentine peso (1881–1970)",
                other: "Argentine pesos (1881–1970)"
              },
              narrow: "ARM",
              symbol: "ARM"
            },
            ARP: {
              displayName: {
                one: "Argentine peso (1983–1985)",
                other: "Argentine pesos (1983–1985)"
              },
              narrow: "ARP",
              symbol: "ARP"
            },
            ARS: {
              displayName: {
                one: "Argentine peso",
                other: "Argentine pesos"
              },
              narrow: "$",
              symbol: "ARS"
            },
            ATS: {
              displayName: {
                one: "Austrian schilling",
                other: "Austrian schillings"
              },
              narrow: "ATS",
              symbol: "ATS"
            },
            AUD: {
              displayName: {
                one: "Australian dollar",
                other: "Australian dollars"
              },
              narrow: "$",
              symbol: "A$"
            },
            AWG: {
              displayName: {
                other: "Aruban florin"
              },
              narrow: "AWG",
              symbol: "AWG"
            },
            AZM: {
              displayName: {
                one: "Azerbaijani manat (1993–2006)",
                other: "Azerbaijani manats (1993–2006)"
              },
              narrow: "AZM",
              symbol: "AZM"
            },
            AZN: {
              displayName: {
                one: "Azerbaijani manat",
                other: "Azerbaijani manats"
              },
              narrow: "₼",
              symbol: "AZN"
            },
            BAD: {
              displayName: {
                one: "Bosnia-Herzegovina dinar (1992–1994)",
                other: "Bosnia-Herzegovina dinars (1992–1994)"
              },
              narrow: "BAD",
              symbol: "BAD"
            },
            BAM: {
              displayName: {
                one: "Bosnia-Herzegovina convertible mark",
                other: "Bosnia-Herzegovina convertible marks"
              },
              narrow: "KM",
              symbol: "BAM"
            },
            BAN: {
              displayName: {
                one: "Bosnia-Herzegovina new dinar (1994–1997)",
                other: "Bosnia-Herzegovina new dinars (1994–1997)"
              },
              narrow: "BAN",
              symbol: "BAN"
            },
            BBD: {
              displayName: {
                one: "Barbadian dollar",
                other: "Barbadian dollars"
              },
              narrow: "$",
              symbol: "BBD"
            },
            BDT: {
              displayName: {
                one: "Bangladeshi taka",
                other: "Bangladeshi takas"
              },
              narrow: "৳",
              symbol: "BDT"
            },
            BEC: {
              displayName: {
                one: "Belgian franc (convertible)",
                other: "Belgian francs (convertible)"
              },
              narrow: "BEC",
              symbol: "BEC"
            },
            BEF: {
              displayName: {
                one: "Belgian franc",
                other: "Belgian francs"
              },
              narrow: "BEF",
              symbol: "BEF"
            },
            BEL: {
              displayName: {
                one: "Belgian franc (financial)",
                other: "Belgian francs (financial)"
              },
              narrow: "BEL",
              symbol: "BEL"
            },
            BGL: {
              displayName: {
                one: "Bulgarian hard lev",
                other: "Bulgarian hard leva"
              },
              narrow: "BGL",
              symbol: "BGL"
            },
            BGM: {
              displayName: {
                one: "Bulgarian socialist lev",
                other: "Bulgarian socialist leva"
              },
              narrow: "BGM",
              symbol: "BGM"
            },
            BGN: {
              displayName: {
                one: "Bulgarian lev",
                other: "Bulgarian leva"
              },
              narrow: "BGN",
              symbol: "BGN"
            },
            BGO: {
              displayName: {
                one: "Bulgarian lev (1879–1952)",
                other: "Bulgarian leva (1879–1952)"
              },
              narrow: "BGO",
              symbol: "BGO"
            },
            BHD: {
              displayName: {
                one: "Bahraini dinar",
                other: "Bahraini dinars"
              },
              narrow: "BHD",
              symbol: "BHD"
            },
            BIF: {
              displayName: {
                one: "Burundian franc",
                other: "Burundian francs"
              },
              narrow: "BIF",
              symbol: "BIF"
            },
            BMD: {
              displayName: {
                one: "Bermudan dollar",
                other: "Bermudan dollars"
              },
              narrow: "$",
              symbol: "BMD"
            },
            BND: {
              displayName: {
                one: "Brunei dollar",
                other: "Brunei dollars"
              },
              narrow: "$",
              symbol: "BND"
            },
            BOB: {
              displayName: {
                one: "Bolivian boliviano",
                other: "Bolivian bolivianos"
              },
              narrow: "Bs",
              symbol: "BOB"
            },
            BOL: {
              displayName: {
                one: "Bolivian boliviano (1863–1963)",
                other: "Bolivian bolivianos (1863–1963)"
              },
              narrow: "BOL",
              symbol: "BOL"
            },
            BOP: {
              displayName: {
                one: "Bolivian peso",
                other: "Bolivian pesos"
              },
              narrow: "BOP",
              symbol: "BOP"
            },
            BOV: {
              displayName: {
                one: "Bolivian mvdol",
                other: "Bolivian mvdols"
              },
              narrow: "BOV",
              symbol: "BOV"
            },
            BRB: {
              displayName: {
                one: "Brazilian new cruzeiro (1967–1986)",
                other: "Brazilian new cruzeiros (1967–1986)"
              },
              narrow: "BRB",
              symbol: "BRB"
            },
            BRC: {
              displayName: {
                one: "Brazilian cruzado (1986–1989)",
                other: "Brazilian cruzados (1986–1989)"
              },
              narrow: "BRC",
              symbol: "BRC"
            },
            BRE: {
              displayName: {
                one: "Brazilian cruzeiro (1990–1993)",
                other: "Brazilian cruzeiros (1990–1993)"
              },
              narrow: "BRE",
              symbol: "BRE"
            },
            BRL: {
              displayName: {
                one: "Brazilian real",
                other: "Brazilian reals"
              },
              narrow: "R$",
              symbol: "R$"
            },
            BRN: {
              displayName: {
                one: "Brazilian new cruzado (1989–1990)",
                other: "Brazilian new cruzados (1989–1990)"
              },
              narrow: "BRN",
              symbol: "BRN"
            },
            BRR: {
              displayName: {
                one: "Brazilian cruzeiro (1993–1994)",
                other: "Brazilian cruzeiros (1993–1994)"
              },
              narrow: "BRR",
              symbol: "BRR"
            },
            BRZ: {
              displayName: {
                one: "Brazilian cruzeiro (1942–1967)",
                other: "Brazilian cruzeiros (1942–1967)"
              },
              narrow: "BRZ",
              symbol: "BRZ"
            },
            BSD: {
              displayName: {
                one: "Bahamian dollar",
                other: "Bahamian dollars"
              },
              narrow: "$",
              symbol: "BSD"
            },
            BTN: {
              displayName: {
                one: "Bhutanese ngultrum",
                other: "Bhutanese ngultrums"
              },
              narrow: "BTN",
              symbol: "BTN"
            },
            BUK: {
              displayName: {
                one: "Burmese kyat",
                other: "Burmese kyats"
              },
              narrow: "BUK",
              symbol: "BUK"
            },
            BWP: {
              displayName: {
                one: "Botswanan pula",
                other: "Botswanan pulas"
              },
              narrow: "P",
              symbol: "BWP"
            },
            BYB: {
              displayName: {
                one: "Belarusian ruble (1994–1999)",
                other: "Belarusian rubles (1994–1999)"
              },
              narrow: "BYB",
              symbol: "BYB"
            },
            BYN: {
              displayName: {
                one: "Belarusian ruble",
                other: "Belarusian rubles"
              },
              narrow: "BYN",
              symbol: "BYN"
            },
            BYR: {
              displayName: {
                one: "Belarusian ruble (2000–2016)",
                other: "Belarusian rubles (2000–2016)"
              },
              narrow: "BYR",
              symbol: "BYR"
            },
            BZD: {
              displayName: {
                one: "Belize dollar",
                other: "Belize dollars"
              },
              narrow: "$",
              symbol: "BZD"
            },
            CAD: {
              displayName: {
                one: "Canadian dollar",
                other: "Canadian dollars"
              },
              narrow: "$",
              symbol: "CA$"
            },
            CDF: {
              displayName: {
                one: "Congolese franc",
                other: "Congolese francs"
              },
              narrow: "CDF",
              symbol: "CDF"
            },
            CHE: {
              displayName: {
                one: "WIR euro",
                other: "WIR euros"
              },
              narrow: "CHE",
              symbol: "CHE"
            },
            CHF: {
              displayName: {
                one: "Swiss franc",
                other: "Swiss francs"
              },
              narrow: "CHF",
              symbol: "CHF"
            },
            CHW: {
              displayName: {
                one: "WIR franc",
                other: "WIR francs"
              },
              narrow: "CHW",
              symbol: "CHW"
            },
            CLE: {
              displayName: {
                one: "Chilean escudo",
                other: "Chilean escudos"
              },
              narrow: "CLE",
              symbol: "CLE"
            },
            CLF: {
              displayName: {
                one: "Chilean unit of account (UF)",
                other: "Chilean units of account (UF)"
              },
              narrow: "CLF",
              symbol: "CLF"
            },
            CLP: {
              displayName: {
                one: "Chilean peso",
                other: "Chilean pesos"
              },
              narrow: "$",
              symbol: "CLP"
            },
            CNH: {
              displayName: {
                other: "Chinese yuan (offshore)"
              },
              narrow: "CNH",
              symbol: "CNH"
            },
            CNX: {
              displayName: {
                one: "Chinese People’s Bank dollar",
                other: "Chinese People’s Bank dollars"
              },
              narrow: "CNX",
              symbol: "CNX"
            },
            CNY: {
              displayName: {
                other: "Chinese yuan"
              },
              narrow: "¥",
              symbol: "CN¥"
            },
            COP: {
              displayName: {
                one: "Colombian peso",
                other: "Colombian pesos"
              },
              narrow: "$",
              symbol: "COP"
            },
            COU: {
              displayName: {
                one: "Colombian real value unit",
                other: "Colombian real value units"
              },
              narrow: "COU",
              symbol: "COU"
            },
            CRC: {
              displayName: {
                one: "Costa Rican colón",
                other: "Costa Rican colóns"
              },
              narrow: "₡",
              symbol: "CRC"
            },
            CSD: {
              displayName: {
                one: "Serbian dinar (2002–2006)",
                other: "Serbian dinars (2002–2006)"
              },
              narrow: "CSD",
              symbol: "CSD"
            },
            CSK: {
              displayName: {
                one: "Czechoslovak hard koruna",
                other: "Czechoslovak hard korunas"
              },
              narrow: "CSK",
              symbol: "CSK"
            },
            CUC: {
              displayName: {
                one: "Cuban convertible peso",
                other: "Cuban convertible pesos"
              },
              narrow: "$",
              symbol: "CUC"
            },
            CUP: {
              displayName: {
                one: "Cuban peso",
                other: "Cuban pesos"
              },
              narrow: "$",
              symbol: "CUP"
            },
            CVE: {
              displayName: {
                one: "Cape Verdean escudo",
                other: "Cape Verdean escudos"
              },
              narrow: "CVE",
              symbol: "CVE"
            },
            CYP: {
              displayName: {
                one: "Cypriot pound",
                other: "Cypriot pounds"
              },
              narrow: "CYP",
              symbol: "CYP"
            },
            CZK: {
              displayName: {
                one: "Czech koruna",
                other: "Czech korunas"
              },
              narrow: "Kč",
              symbol: "CZK"
            },
            DDM: {
              displayName: {
                one: "East German mark",
                other: "East German marks"
              },
              narrow: "DDM",
              symbol: "DDM"
            },
            DEM: {
              displayName: {
                one: "German mark",
                other: "German marks"
              },
              narrow: "DEM",
              symbol: "DEM"
            },
            DJF: {
              displayName: {
                one: "Djiboutian franc",
                other: "Djiboutian francs"
              },
              narrow: "DJF",
              symbol: "DJF"
            },
            DKK: {
              displayName: {
                one: "Danish krone",
                other: "Danish kroner"
              },
              narrow: "kr",
              symbol: "DKK"
            },
            DOP: {
              displayName: {
                one: "Dominican peso",
                other: "Dominican pesos"
              },
              narrow: "$",
              symbol: "DOP"
            },
            DZD: {
              displayName: {
                one: "Algerian dinar",
                other: "Algerian dinars"
              },
              narrow: "DZD",
              symbol: "DZD"
            },
            ECS: {
              displayName: {
                one: "Ecuadorian sucre",
                other: "Ecuadorian sucres"
              },
              narrow: "ECS",
              symbol: "ECS"
            },
            ECV: {
              displayName: {
                one: "Ecuadorian unit of constant value",
                other: "Ecuadorian units of constant value"
              },
              narrow: "ECV",
              symbol: "ECV"
            },
            EEK: {
              displayName: {
                one: "Estonian kroon",
                other: "Estonian kroons"
              },
              narrow: "EEK",
              symbol: "EEK"
            },
            EGP: {
              displayName: {
                one: "Egyptian pound",
                other: "Egyptian pounds"
              },
              narrow: "E£",
              symbol: "EGP"
            },
            ERN: {
              displayName: {
                one: "Eritrean nakfa",
                other: "Eritrean nakfas"
              },
              narrow: "ERN",
              symbol: "ERN"
            },
            ESA: {
              displayName: {
                one: "Spanish peseta (A account)",
                other: "Spanish pesetas (A account)"
              },
              narrow: "ESA",
              symbol: "ESA"
            },
            ESB: {
              displayName: {
                one: "Spanish peseta (convertible account)",
                other: "Spanish pesetas (convertible account)"
              },
              narrow: "ESB",
              symbol: "ESB"
            },
            ESP: {
              displayName: {
                one: "Spanish peseta",
                other: "Spanish pesetas"
              },
              narrow: "₧",
              symbol: "ESP"
            },
            ETB: {
              displayName: {
                one: "Ethiopian birr",
                other: "Ethiopian birrs"
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
                one: "Finnish markka",
                other: "Finnish markkas"
              },
              narrow: "FIM",
              symbol: "FIM"
            },
            FJD: {
              displayName: {
                one: "Fijian dollar",
                other: "Fijian dollars"
              },
              narrow: "$",
              symbol: "FJD"
            },
            FKP: {
              displayName: {
                one: "Falkland Islands pound",
                other: "Falkland Islands pounds"
              },
              narrow: "£",
              symbol: "FKP"
            },
            FRF: {
              displayName: {
                one: "French franc",
                other: "French francs"
              },
              narrow: "FRF",
              symbol: "FRF"
            },
            GBP: {
              displayName: {
                one: "British pound",
                other: "British pounds"
              },
              narrow: "£",
              symbol: "£"
            },
            GEK: {
              displayName: {
                one: "Georgian kupon larit",
                other: "Georgian kupon larits"
              },
              narrow: "GEK",
              symbol: "GEK"
            },
            GEL: {
              displayName: {
                one: "Georgian lari",
                other: "Georgian laris"
              },
              narrow: "₾",
              symbol: "GEL"
            },
            GHC: {
              displayName: {
                one: "Ghanaian cedi (1979–2007)",
                other: "Ghanaian cedis (1979–2007)"
              },
              narrow: "GHC",
              symbol: "GHC"
            },
            GHS: {
              displayName: {
                one: "Ghanaian cedi",
                other: "Ghanaian cedis"
              },
              narrow: "GH₵",
              symbol: "GHS"
            },
            GIP: {
              displayName: {
                one: "Gibraltar pound",
                other: "Gibraltar pounds"
              },
              narrow: "£",
              symbol: "GIP"
            },
            GMD: {
              displayName: {
                one: "Gambian dalasi",
                other: "Gambian dalasis"
              },
              narrow: "GMD",
              symbol: "GMD"
            },
            GNF: {
              displayName: {
                one: "Guinean franc",
                other: "Guinean francs"
              },
              narrow: "FG",
              symbol: "GNF"
            },
            GNS: {
              displayName: {
                one: "Guinean syli",
                other: "Guinean sylis"
              },
              narrow: "GNS",
              symbol: "GNS"
            },
            GQE: {
              displayName: {
                other: "Equatorial Guinean ekwele"
              },
              narrow: "GQE",
              symbol: "GQE"
            },
            GRD: {
              displayName: {
                one: "Greek drachma",
                other: "Greek drachmas"
              },
              narrow: "GRD",
              symbol: "GRD"
            },
            GTQ: {
              displayName: {
                one: "Guatemalan quetzal",
                other: "Guatemalan quetzals"
              },
              narrow: "Q",
              symbol: "GTQ"
            },
            GWE: {
              displayName: {
                one: "Portuguese Guinea escudo",
                other: "Portuguese Guinea escudos"
              },
              narrow: "GWE",
              symbol: "GWE"
            },
            GWP: {
              displayName: {
                one: "Guinea-Bissau peso",
                other: "Guinea-Bissau pesos"
              },
              narrow: "GWP",
              symbol: "GWP"
            },
            GYD: {
              displayName: {
                one: "Guyanaese dollar",
                other: "Guyanaese dollars"
              },
              narrow: "$",
              symbol: "GYD"
            },
            HKD: {
              displayName: {
                one: "Hong Kong dollar",
                other: "Hong Kong dollars"
              },
              narrow: "$",
              symbol: "HK$"
            },
            HNL: {
              displayName: {
                one: "Honduran lempira",
                other: "Honduran lempiras"
              },
              narrow: "L",
              symbol: "HNL"
            },
            HRD: {
              displayName: {
                one: "Croatian dinar",
                other: "Croatian dinars"
              },
              narrow: "HRD",
              symbol: "HRD"
            },
            HRK: {
              displayName: {
                one: "Croatian kuna",
                other: "Croatian kunas"
              },
              narrow: "kn",
              symbol: "HRK"
            },
            HTG: {
              displayName: {
                one: "Haitian gourde",
                other: "Haitian gourdes"
              },
              narrow: "HTG",
              symbol: "HTG"
            },
            HUF: {
              displayName: {
                one: "Hungarian forint",
                other: "Hungarian forints"
              },
              narrow: "Ft",
              symbol: "HUF"
            },
            IDR: {
              displayName: {
                one: "Indonesian rupiah",
                other: "Indonesian rupiahs"
              },
              narrow: "Rp",
              symbol: "IDR"
            },
            IEP: {
              displayName: {
                one: "Irish pound",
                other: "Irish pounds"
              },
              narrow: "IEP",
              symbol: "IEP"
            },
            ILP: {
              displayName: {
                one: "Israeli pound",
                other: "Israeli pounds"
              },
              narrow: "ILP",
              symbol: "ILP"
            },
            ILR: {
              displayName: {
                one: "Israeli shekel (1980–1985)",
                other: "Israeli shekels (1980–1985)"
              },
              narrow: "ILR",
              symbol: "ILR"
            },
            ILS: {
              displayName: {
                one: "Israeli new shekel",
                other: "Israeli new shekels"
              },
              narrow: "₪",
              symbol: "₪"
            },
            INR: {
              displayName: {
                one: "Indian rupee",
                other: "Indian rupees"
              },
              narrow: "₹",
              symbol: "₹"
            },
            IQD: {
              displayName: {
                one: "Iraqi dinar",
                other: "Iraqi dinars"
              },
              narrow: "IQD",
              symbol: "IQD"
            },
            IRR: {
              displayName: {
                one: "Iranian rial",
                other: "Iranian rials"
              },
              narrow: "IRR",
              symbol: "IRR"
            },
            ISJ: {
              displayName: {
                one: "Icelandic króna (1918–1981)",
                other: "Icelandic krónur (1918–1981)"
              },
              narrow: "ISJ",
              symbol: "ISJ"
            },
            ISK: {
              displayName: {
                one: "Icelandic króna",
                other: "Icelandic krónur"
              },
              narrow: "kr",
              symbol: "ISK"
            },
            ITL: {
              displayName: {
                one: "Italian lira",
                other: "Italian liras"
              },
              narrow: "ITL",
              symbol: "ITL"
            },
            JMD: {
              displayName: {
                one: "Jamaican dollar",
                other: "Jamaican dollars"
              },
              narrow: "$",
              symbol: "JMD"
            },
            JOD: {
              displayName: {
                one: "Jordanian dinar",
                other: "Jordanian dinars"
              },
              narrow: "JOD",
              symbol: "JOD"
            },
            JPY: {
              displayName: {
                other: "Japanese yen"
              },
              narrow: "¥",
              symbol: "¥"
            },
            KES: {
              displayName: {
                one: "Kenyan shilling",
                other: "Kenyan shillings"
              },
              narrow: "KES",
              symbol: "KES"
            },
            KGS: {
              displayName: {
                one: "Kyrgystani som",
                other: "Kyrgystani soms"
              },
              narrow: "⃀",
              symbol: "KGS"
            },
            KHR: {
              displayName: {
                one: "Cambodian riel",
                other: "Cambodian riels"
              },
              narrow: "៛",
              symbol: "KHR"
            },
            KMF: {
              displayName: {
                one: "Comorian franc",
                other: "Comorian francs"
              },
              narrow: "CF",
              symbol: "KMF"
            },
            KPW: {
              displayName: {
                other: "North Korean won"
              },
              narrow: "₩",
              symbol: "KPW"
            },
            KRH: {
              displayName: {
                other: "South Korean hwan (1953–1962)"
              },
              narrow: "KRH",
              symbol: "KRH"
            },
            KRO: {
              displayName: {
                other: "South Korean won (1945–1953)"
              },
              narrow: "KRO",
              symbol: "KRO"
            },
            KRW: {
              displayName: {
                other: "South Korean won"
              },
              narrow: "₩",
              symbol: "₩"
            },
            KWD: {
              displayName: {
                one: "Kuwaiti dinar",
                other: "Kuwaiti dinars"
              },
              narrow: "KWD",
              symbol: "KWD"
            },
            KYD: {
              displayName: {
                one: "Cayman Islands dollar",
                other: "Cayman Islands dollars"
              },
              narrow: "$",
              symbol: "KYD"
            },
            KZT: {
              displayName: {
                one: "Kazakhstani tenge",
                other: "Kazakhstani tenges"
              },
              narrow: "₸",
              symbol: "KZT"
            },
            LAK: {
              displayName: {
                one: "Laotian kip",
                other: "Laotian kips"
              },
              narrow: "₭",
              symbol: "LAK"
            },
            LBP: {
              displayName: {
                one: "Lebanese pound",
                other: "Lebanese pounds"
              },
              narrow: "L£",
              symbol: "LBP"
            },
            LKR: {
              displayName: {
                one: "Sri Lankan rupee",
                other: "Sri Lankan rupees"
              },
              narrow: "Rs",
              symbol: "LKR"
            },
            LRD: {
              displayName: {
                one: "Liberian dollar",
                other: "Liberian dollars"
              },
              narrow: "$",
              symbol: "LRD"
            },
            LSL: {
              displayName: {
                one: "Lesotho loti",
                other: "Lesotho lotis"
              },
              narrow: "LSL",
              symbol: "LSL"
            },
            LTL: {
              displayName: {
                one: "Lithuanian litas",
                other: "Lithuanian litai"
              },
              narrow: "Lt",
              symbol: "LTL"
            },
            LTT: {
              displayName: {
                one: "Lithuanian talonas",
                other: "Lithuanian talonases"
              },
              narrow: "LTT",
              symbol: "LTT"
            },
            LUC: {
              displayName: {
                one: "Luxembourgian convertible franc",
                other: "Luxembourgian convertible francs"
              },
              narrow: "LUC",
              symbol: "LUC"
            },
            LUF: {
              displayName: {
                one: "Luxembourgian franc",
                other: "Luxembourgian francs"
              },
              narrow: "LUF",
              symbol: "LUF"
            },
            LUL: {
              displayName: {
                one: "Luxembourg financial franc",
                other: "Luxembourg financial francs"
              },
              narrow: "LUL",
              symbol: "LUL"
            },
            LVL: {
              displayName: {
                one: "Latvian lats",
                other: "Latvian lati"
              },
              narrow: "Ls",
              symbol: "LVL"
            },
            LVR: {
              displayName: {
                one: "Latvian ruble",
                other: "Latvian rubles"
              },
              narrow: "LVR",
              symbol: "LVR"
            },
            LYD: {
              displayName: {
                one: "Libyan dinar",
                other: "Libyan dinars"
              },
              narrow: "LYD",
              symbol: "LYD"
            },
            MAD: {
              displayName: {
                one: "Moroccan dirham",
                other: "Moroccan dirhams"
              },
              narrow: "MAD",
              symbol: "MAD"
            },
            MAF: {
              displayName: {
                one: "Moroccan franc",
                other: "Moroccan francs"
              },
              narrow: "MAF",
              symbol: "MAF"
            },
            MCF: {
              displayName: {
                one: "Monegasque franc",
                other: "Monegasque francs"
              },
              narrow: "MCF",
              symbol: "MCF"
            },
            MDC: {
              displayName: {
                other: "Moldovan cupon"
              },
              narrow: "MDC",
              symbol: "MDC"
            },
            MDL: {
              displayName: {
                one: "Moldovan leu",
                other: "Moldovan lei"
              },
              narrow: "MDL",
              symbol: "MDL"
            },
            MGA: {
              displayName: {
                one: "Malagasy ariary",
                other: "Malagasy ariaries"
              },
              narrow: "Ar",
              symbol: "MGA"
            },
            MGF: {
              displayName: {
                one: "Malagasy franc",
                other: "Malagasy francs"
              },
              narrow: "MGF",
              symbol: "MGF"
            },
            MKD: {
              displayName: {
                one: "Macedonian denar",
                other: "Macedonian denari"
              },
              narrow: "MKD",
              symbol: "MKD"
            },
            MKN: {
              displayName: {
                one: "Macedonian denar (1992–1993)",
                other: "Macedonian denari (1992–1993)"
              },
              narrow: "MKN",
              symbol: "MKN"
            },
            MLF: {
              displayName: {
                one: "Malian franc",
                other: "Malian francs"
              },
              narrow: "MLF",
              symbol: "MLF"
            },
            MMK: {
              displayName: {
                one: "Myanmar kyat",
                other: "Myanmar kyats"
              },
              narrow: "K",
              symbol: "MMK"
            },
            MNT: {
              displayName: {
                one: "Mongolian tugrik",
                other: "Mongolian tugriks"
              },
              narrow: "₮",
              symbol: "MNT"
            },
            MOP: {
              displayName: {
                one: "Macanese pataca",
                other: "Macanese patacas"
              },
              narrow: "MOP",
              symbol: "MOP"
            },
            MRO: {
              displayName: {
                one: "Mauritanian ouguiya (1973–2017)",
                other: "Mauritanian ouguiyas (1973–2017)"
              },
              narrow: "MRO",
              symbol: "MRO"
            },
            MRU: {
              displayName: {
                one: "Mauritanian ouguiya",
                other: "Mauritanian ouguiyas"
              },
              narrow: "MRU",
              symbol: "MRU"
            },
            MTL: {
              displayName: {
                other: "Maltese lira"
              },
              narrow: "MTL",
              symbol: "MTL"
            },
            MTP: {
              displayName: {
                one: "Maltese pound",
                other: "Maltese pounds"
              },
              narrow: "MTP",
              symbol: "MTP"
            },
            MUR: {
              displayName: {
                one: "Mauritian rupee",
                other: "Mauritian rupees"
              },
              narrow: "Rs",
              symbol: "MUR"
            },
            MVP: {
              displayName: {
                one: "Maldivian rupee (1947–1981)",
                other: "Maldivian rupees (1947–1981)"
              },
              narrow: "MVP",
              symbol: "MVP"
            },
            MVR: {
              displayName: {
                one: "Maldivian rufiyaa",
                other: "Maldivian rufiyaas"
              },
              narrow: "MVR",
              symbol: "MVR"
            },
            MWK: {
              displayName: {
                one: "Malawian kwacha",
                other: "Malawian kwachas"
              },
              narrow: "MWK",
              symbol: "MWK"
            },
            MXN: {
              displayName: {
                one: "Mexican peso",
                other: "Mexican pesos"
              },
              narrow: "$",
              symbol: "MX$"
            },
            MXP: {
              displayName: {
                one: "Mexican silver peso (1861–1992)",
                other: "Mexican silver pesos (1861–1992)"
              },
              narrow: "MXP",
              symbol: "MXP"
            },
            MXV: {
              displayName: {
                one: "Mexican investment unit",
                other: "Mexican investment units"
              },
              narrow: "MXV",
              symbol: "MXV"
            },
            MYR: {
              displayName: {
                one: "Malaysian ringgit",
                other: "Malaysian ringgits"
              },
              narrow: "RM",
              symbol: "MYR"
            },
            MZE: {
              displayName: {
                one: "Mozambican escudo",
                other: "Mozambican escudos"
              },
              narrow: "MZE",
              symbol: "MZE"
            },
            MZM: {
              displayName: {
                one: "Mozambican metical (1980–2006)",
                other: "Mozambican meticals (1980–2006)"
              },
              narrow: "MZM",
              symbol: "MZM"
            },
            MZN: {
              displayName: {
                one: "Mozambican metical",
                other: "Mozambican meticals"
              },
              narrow: "MZN",
              symbol: "MZN"
            },
            NAD: {
              displayName: {
                one: "Namibian dollar",
                other: "Namibian dollars"
              },
              narrow: "$",
              symbol: "NAD"
            },
            NGN: {
              displayName: {
                one: "Nigerian naira",
                other: "Nigerian nairas"
              },
              narrow: "₦",
              symbol: "NGN"
            },
            NIC: {
              displayName: {
                one: "Nicaraguan córdoba (1988–1991)",
                other: "Nicaraguan córdobas (1988–1991)"
              },
              narrow: "NIC",
              symbol: "NIC"
            },
            NIO: {
              displayName: {
                one: "Nicaraguan córdoba",
                other: "Nicaraguan córdobas"
              },
              narrow: "C$",
              symbol: "NIO"
            },
            NLG: {
              displayName: {
                one: "Dutch guilder",
                other: "Dutch guilders"
              },
              narrow: "NLG",
              symbol: "NLG"
            },
            NOK: {
              displayName: {
                one: "Norwegian krone",
                other: "Norwegian kroner"
              },
              narrow: "kr",
              symbol: "NOK"
            },
            NPR: {
              displayName: {
                one: "Nepalese rupee",
                other: "Nepalese rupees"
              },
              narrow: "Rs",
              symbol: "NPR"
            },
            NZD: {
              displayName: {
                one: "New Zealand dollar",
                other: "New Zealand dollars"
              },
              narrow: "$",
              symbol: "NZ$"
            },
            OMR: {
              displayName: {
                one: "Omani rial",
                other: "Omani rials"
              },
              narrow: "OMR",
              symbol: "OMR"
            },
            PAB: {
              displayName: {
                one: "Panamanian balboa",
                other: "Panamanian balboas"
              },
              narrow: "PAB",
              symbol: "PAB"
            },
            PEI: {
              displayName: {
                one: "Peruvian inti",
                other: "Peruvian intis"
              },
              narrow: "PEI",
              symbol: "PEI"
            },
            PEN: {
              displayName: {
                one: "Peruvian sol",
                other: "Peruvian soles"
              },
              narrow: "PEN",
              symbol: "PEN"
            },
            PES: {
              displayName: {
                one: "Peruvian sol (1863–1965)",
                other: "Peruvian soles (1863–1965)"
              },
              narrow: "PES",
              symbol: "PES"
            },
            PGK: {
              displayName: {
                other: "Papua New Guinean kina"
              },
              narrow: "PGK",
              symbol: "PGK"
            },
            PHP: {
              displayName: {
                one: "Philippine peso",
                other: "Philippine pesos"
              },
              narrow: "₱",
              symbol: "₱"
            },
            PKR: {
              displayName: {
                one: "Pakistani rupee",
                other: "Pakistani rupees"
              },
              narrow: "Rs",
              symbol: "PKR"
            },
            PLN: {
              displayName: {
                one: "Polish zloty",
                other: "Polish zlotys"
              },
              narrow: "zł",
              symbol: "PLN"
            },
            PLZ: {
              displayName: {
                one: "Polish zloty (PLZ)",
                other: "Polish zlotys (PLZ)"
              },
              narrow: "PLZ",
              symbol: "PLZ"
            },
            PTE: {
              displayName: {
                one: "Portuguese escudo",
                other: "Portuguese escudos"
              },
              narrow: "PTE",
              symbol: "PTE"
            },
            PYG: {
              displayName: {
                one: "Paraguayan guarani",
                other: "Paraguayan guaranis"
              },
              narrow: "₲",
              symbol: "PYG"
            },
            QAR: {
              displayName: {
                one: "Qatari riyal",
                other: "Qatari riyals"
              },
              narrow: "QAR",
              symbol: "QAR"
            },
            RHD: {
              displayName: {
                one: "Rhodesian dollar",
                other: "Rhodesian dollars"
              },
              narrow: "RHD",
              symbol: "RHD"
            },
            ROL: {
              displayName: {
                one: "Romanian leu (1952–2006)",
                other: "Romanian Lei (1952–2006)"
              },
              narrow: "ROL",
              symbol: "ROL"
            },
            RON: {
              displayName: {
                one: "Romanian leu",
                other: "Romanian lei"
              },
              narrow: "lei",
              symbol: "RON"
            },
            RSD: {
              displayName: {
                one: "Serbian dinar",
                other: "Serbian dinars"
              },
              narrow: "RSD",
              symbol: "RSD"
            },
            RUB: {
              displayName: {
                one: "Russian ruble",
                other: "Russian rubles"
              },
              narrow: "₽",
              symbol: "RUB"
            },
            RUR: {
              displayName: {
                one: "Russian ruble (1991–1998)",
                other: "Russian rubles (1991–1998)"
              },
              narrow: "RUR",
              symbol: "RUR"
            },
            RWF: {
              displayName: {
                one: "Rwandan franc",
                other: "Rwandan francs"
              },
              narrow: "RF",
              symbol: "RWF"
            },
            SAR: {
              displayName: {
                one: "Saudi riyal",
                other: "Saudi riyals"
              },
              narrow: "SAR",
              symbol: "SAR"
            },
            SBD: {
              displayName: {
                one: "Solomon Islands dollar",
                other: "Solomon Islands dollars"
              },
              narrow: "$",
              symbol: "SBD"
            },
            SCR: {
              displayName: {
                one: "Seychellois rupee",
                other: "Seychellois rupees"
              },
              narrow: "SCR",
              symbol: "SCR"
            },
            SDD: {
              displayName: {
                one: "Sudanese dinar (1992–2007)",
                other: "Sudanese dinars (1992–2007)"
              },
              narrow: "SDD",
              symbol: "SDD"
            },
            SDG: {
              displayName: {
                one: "Sudanese pound",
                other: "Sudanese pounds"
              },
              narrow: "SDG",
              symbol: "SDG"
            },
            SDP: {
              displayName: {
                one: "Sudanese pound (1957–1998)",
                other: "Sudanese pounds (1957–1998)"
              },
              narrow: "SDP",
              symbol: "SDP"
            },
            SEK: {
              displayName: {
                one: "Swedish krona",
                other: "Swedish kronor"
              },
              narrow: "kr",
              symbol: "SEK"
            },
            SGD: {
              displayName: {
                one: "Singapore dollar",
                other: "Singapore dollars"
              },
              narrow: "$",
              symbol: "SGD"
            },
            SHP: {
              displayName: {
                one: "St. Helena pound",
                other: "St. Helena pounds"
              },
              narrow: "£",
              symbol: "SHP"
            },
            SIT: {
              displayName: {
                one: "Slovenian tolar",
                other: "Slovenian tolars"
              },
              narrow: "SIT",
              symbol: "SIT"
            },
            SKK: {
              displayName: {
                one: "Slovak koruna",
                other: "Slovak korunas"
              },
              narrow: "SKK",
              symbol: "SKK"
            },
            SLE: {
              displayName: {
                one: "Sierra Leonean leone",
                other: "Sierra Leonean leones"
              },
              narrow: "SLE",
              symbol: "SLE"
            },
            SLL: {
              displayName: {
                one: "Sierra Leonean leone (1964—2022)",
                other: "Sierra Leonean leones (1964—2022)"
              },
              narrow: "SLL",
              symbol: "SLL"
            },
            SOS: {
              displayName: {
                one: "Somali shilling",
                other: "Somali shillings"
              },
              narrow: "SOS",
              symbol: "SOS"
            },
            SRD: {
              displayName: {
                one: "Surinamese dollar",
                other: "Surinamese dollars"
              },
              narrow: "$",
              symbol: "SRD"
            },
            SRG: {
              displayName: {
                one: "Surinamese guilder",
                other: "Surinamese guilders"
              },
              narrow: "SRG",
              symbol: "SRG"
            },
            SSP: {
              displayName: {
                one: "South Sudanese pound",
                other: "South Sudanese pounds"
              },
              narrow: "£",
              symbol: "SSP"
            },
            STD: {
              displayName: {
                one: "São Tomé & Príncipe dobra (1977–2017)",
                other: "São Tomé & Príncipe dobras (1977–2017)"
              },
              narrow: "STD",
              symbol: "STD"
            },
            STN: {
              displayName: {
                one: "São Tomé & Príncipe dobra",
                other: "São Tomé & Príncipe dobras"
              },
              narrow: "Db",
              symbol: "STN"
            },
            SUR: {
              displayName: {
                one: "Soviet rouble",
                other: "Soviet roubles"
              },
              narrow: "SUR",
              symbol: "SUR"
            },
            SVC: {
              displayName: {
                one: "Salvadoran colón",
                other: "Salvadoran colones"
              },
              narrow: "SVC",
              symbol: "SVC"
            },
            SYP: {
              displayName: {
                one: "Syrian pound",
                other: "Syrian pounds"
              },
              narrow: "£",
              symbol: "SYP"
            },
            SZL: {
              displayName: {
                one: "Swazi lilangeni",
                other: "Swazi emalangeni"
              },
              narrow: "SZL",
              symbol: "SZL"
            },
            THB: {
              displayName: {
                other: "Thai baht"
              },
              narrow: "฿",
              symbol: "THB"
            },
            TJR: {
              displayName: {
                one: "Tajikistani ruble",
                other: "Tajikistani rubles"
              },
              narrow: "TJR",
              symbol: "TJR"
            },
            TJS: {
              displayName: {
                one: "Tajikistani somoni",
                other: "Tajikistani somonis"
              },
              narrow: "TJS",
              symbol: "TJS"
            },
            TMM: {
              displayName: {
                other: "Turkmenistani manat (1993–2009)"
              },
              narrow: "TMM",
              symbol: "TMM"
            },
            TMT: {
              displayName: {
                other: "Turkmenistani manat"
              },
              narrow: "TMT",
              symbol: "TMT"
            },
            TND: {
              displayName: {
                one: "Tunisian dinar",
                other: "Tunisian dinars"
              },
              narrow: "TND",
              symbol: "TND"
            },
            TOP: {
              displayName: {
                other: "Tongan paʻanga"
              },
              narrow: "T$",
              symbol: "TOP"
            },
            TPE: {
              displayName: {
                one: "Timorese escudo",
                other: "Timorese escudos"
              },
              narrow: "TPE",
              symbol: "TPE"
            },
            TRL: {
              displayName: {
                one: "Turkish lira (1922–2005)",
                other: "Turkish Lira (1922–2005)"
              },
              narrow: "TRL",
              symbol: "TRL"
            },
            TRY: {
              displayName: {
                one: "Turkish lira",
                other: "Turkish Lira"
              },
              narrow: "₺",
              symbol: "TRY"
            },
            TTD: {
              displayName: {
                one: "Trinidad & Tobago dollar",
                other: "Trinidad & Tobago dollars"
              },
              narrow: "$",
              symbol: "TTD"
            },
            TWD: {
              displayName: {
                one: "New Taiwan dollar",
                other: "New Taiwan dollars"
              },
              narrow: "$",
              symbol: "NT$"
            },
            TZS: {
              displayName: {
                one: "Tanzanian shilling",
                other: "Tanzanian shillings"
              },
              narrow: "TZS",
              symbol: "TZS"
            },
            UAH: {
              displayName: {
                one: "Ukrainian hryvnia",
                other: "Ukrainian hryvnias"
              },
              narrow: "₴",
              symbol: "UAH"
            },
            UAK: {
              displayName: {
                one: "Ukrainian karbovanets",
                other: "Ukrainian karbovantsiv"
              },
              narrow: "UAK",
              symbol: "UAK"
            },
            UGS: {
              displayName: {
                one: "Ugandan shilling (1966–1987)",
                other: "Ugandan shillings (1966–1987)"
              },
              narrow: "UGS",
              symbol: "UGS"
            },
            UGX: {
              displayName: {
                one: "Ugandan shilling",
                other: "Ugandan shillings"
              },
              narrow: "UGX",
              symbol: "UGX"
            },
            USD: {
              displayName: {
                one: "US dollar",
                other: "US dollars"
              },
              narrow: "$",
              symbol: "$"
            },
            USN: {
              displayName: {
                one: "US dollar (next day)",
                other: "US dollars (next day)"
              },
              narrow: "USN",
              symbol: "USN"
            },
            USS: {
              displayName: {
                one: "US dollar (same day)",
                other: "US dollars (same day)"
              },
              narrow: "USS",
              symbol: "USS"
            },
            UYI: {
              displayName: {
                one: "Uruguayan peso (indexed units)",
                other: "Uruguayan pesos (indexed units)"
              },
              narrow: "UYI",
              symbol: "UYI"
            },
            UYP: {
              displayName: {
                one: "Uruguayan peso (1975–1993)",
                other: "Uruguayan pesos (1975–1993)"
              },
              narrow: "UYP",
              symbol: "UYP"
            },
            UYU: {
              displayName: {
                one: "Uruguayan peso",
                other: "Uruguayan pesos"
              },
              narrow: "$",
              symbol: "UYU"
            },
            UYW: {
              displayName: {
                one: "Uruguayan nominal wage index unit",
                other: "Uruguayan nominal wage index units"
              },
              narrow: "UYW",
              symbol: "UYW"
            },
            UZS: {
              displayName: {
                other: "Uzbekistani som"
              },
              narrow: "UZS",
              symbol: "UZS"
            },
            VEB: {
              displayName: {
                one: "Venezuelan bolívar (1871–2008)",
                other: "Venezuelan bolívars (1871–2008)"
              },
              narrow: "VEB",
              symbol: "VEB"
            },
            VED: {
              displayName: {
                one: "Bolívar Soberano",
                other: "Bolívar Soberanos"
              },
              narrow: "VED",
              symbol: "VED"
            },
            VEF: {
              displayName: {
                one: "Venezuelan bolívar (2008–2018)",
                other: "Venezuelan bolívars (2008–2018)"
              },
              narrow: "Bs",
              symbol: "VEF"
            },
            VES: {
              displayName: {
                one: "Venezuelan bolívar",
                other: "Venezuelan bolívars"
              },
              narrow: "VES",
              symbol: "VES"
            },
            VND: {
              displayName: {
                other: "Vietnamese dong"
              },
              narrow: "₫",
              symbol: "₫"
            },
            VNN: {
              displayName: {
                other: "Vietnamese dong (1978–1985)"
              },
              narrow: "VNN",
              symbol: "VNN"
            },
            VUV: {
              displayName: {
                one: "Vanuatu vatu",
                other: "Vanuatu vatus"
              },
              narrow: "VUV",
              symbol: "VUV"
            },
            WST: {
              displayName: {
                other: "Samoan tala"
              },
              narrow: "WST",
              symbol: "WST"
            },
            XAF: {
              displayName: {
                one: "Central African CFA franc",
                other: "Central African CFA francs"
              },
              narrow: "FCFA",
              symbol: "FCFA"
            },
            XAG: {
              displayName: {
                one: "troy ounce of silver",
                other: "troy ounces of silver"
              },
              narrow: "XAG",
              symbol: "XAG"
            },
            XAU: {
              displayName: {
                one: "troy ounce of gold",
                other: "troy ounces of gold"
              },
              narrow: "XAU",
              symbol: "XAU"
            },
            XBA: {
              displayName: {
                one: "European composite unit",
                other: "European composite units"
              },
              narrow: "XBA",
              symbol: "XBA"
            },
            XBB: {
              displayName: {
                one: "European monetary unit",
                other: "European monetary units"
              },
              narrow: "XBB",
              symbol: "XBB"
            },
            XBC: {
              displayName: {
                one: "European unit of account (XBC)",
                other: "European units of account (XBC)"
              },
              narrow: "XBC",
              symbol: "XBC"
            },
            XBD: {
              displayName: {
                one: "European unit of account (XBD)",
                other: "European units of account (XBD)"
              },
              narrow: "XBD",
              symbol: "XBD"
            },
            XCD: {
              displayName: {
                one: "East Caribbean dollar",
                other: "East Caribbean dollars"
              },
              narrow: "$",
              symbol: "EC$"
            },
            XCG: {
              displayName: {
                one: "Caribbean guilder",
                other: "Caribbean guilders"
              },
              narrow: "Cg.",
              symbol: "Cg."
            },
            XDR: {
              displayName: {
                other: "special drawing rights"
              },
              narrow: "XDR",
              symbol: "XDR"
            },
            XEU: {
              displayName: {
                one: "European currency unit",
                other: "European currency units"
              },
              narrow: "XEU",
              symbol: "XEU"
            },
            XFO: {
              displayName: {
                one: "French gold franc",
                other: "French gold francs"
              },
              narrow: "XFO",
              symbol: "XFO"
            },
            XFU: {
              displayName: {
                one: "French UIC-franc",
                other: "French UIC-francs"
              },
              narrow: "XFU",
              symbol: "XFU"
            },
            XOF: {
              displayName: {
                one: "West African CFA franc",
                other: "West African CFA francs"
              },
              narrow: "F CFA",
              symbol: "F CFA"
            },
            XPD: {
              displayName: {
                one: "troy ounce of palladium",
                other: "troy ounces of palladium"
              },
              narrow: "XPD",
              symbol: "XPD"
            },
            XPF: {
              displayName: {
                one: "CFP franc",
                other: "CFP francs"
              },
              narrow: "CFPF",
              symbol: "CFPF"
            },
            XPT: {
              displayName: {
                one: "troy ounce of platinum",
                other: "troy ounces of platinum"
              },
              narrow: "XPT",
              symbol: "XPT"
            },
            XRE: {
              displayName: {
                one: "RINET Funds unit",
                other: "RINET Funds units"
              },
              narrow: "XRE",
              symbol: "XRE"
            },
            XSU: {
              displayName: {
                one: "Sucre",
                other: "Sucres"
              },
              narrow: "XSU",
              symbol: "XSU"
            },
            XTS: {
              displayName: {
                one: "Testing Currency unit",
                other: "Testing Currency units"
              },
              narrow: "XTS",
              symbol: "XTS"
            },
            XUA: {
              displayName: {
                one: "ADB unit of account",
                other: "ADB units of account"
              },
              narrow: "XUA",
              symbol: "XUA"
            },
            XXX: {
              displayName: {
                one: "(unknown unit of currency)",
                other: "(unknown currency)"
              },
              narrow: "¤",
              symbol: "¤"
            },
            YDD: {
              displayName: {
                one: "Yemeni dinar",
                other: "Yemeni dinars"
              },
              narrow: "YDD",
              symbol: "YDD"
            },
            YER: {
              displayName: {
                one: "Yemeni rial",
                other: "Yemeni rials"
              },
              narrow: "YER",
              symbol: "YER"
            },
            YUD: {
              displayName: {
                one: "Yugoslavian hard dinar (1966–1990)",
                other: "Yugoslavian hard dinars (1966–1990)"
              },
              narrow: "YUD",
              symbol: "YUD"
            },
            YUM: {
              displayName: {
                one: "Yugoslavian new dinar (1994–2002)",
                other: "Yugoslavian new dinars (1994–2002)"
              },
              narrow: "YUM",
              symbol: "YUM"
            },
            YUN: {
              displayName: {
                one: "Yugoslavian convertible dinar (1990–1992)",
                other: "Yugoslavian convertible dinars (1990–1992)"
              },
              narrow: "YUN",
              symbol: "YUN"
            },
            YUR: {
              displayName: {
                one: "Yugoslavian reformed dinar (1992–1993)",
                other: "Yugoslavian reformed dinars (1992–1993)"
              },
              narrow: "YUR",
              symbol: "YUR"
            },
            ZAL: {
              displayName: {
                one: "South African rand (financial)",
                other: "South African rands (financial)"
              },
              narrow: "ZAL",
              symbol: "ZAL"
            },
            ZAR: {
              displayName: {
                other: "South African rand"
              },
              narrow: "R",
              symbol: "ZAR"
            },
            ZMK: {
              displayName: {
                one: "Zambian kwacha (1968–2012)",
                other: "Zambian kwachas (1968–2012)"
              },
              narrow: "ZMK",
              symbol: "ZMK"
            },
            ZMW: {
              displayName: {
                one: "Zambian kwacha",
                other: "Zambian kwachas"
              },
              narrow: "ZK",
              symbol: "ZMW"
            },
            ZRN: {
              displayName: {
                one: "Zairean new zaire (1993–1998)",
                other: "Zairean new zaires (1993–1998)"
              },
              narrow: "ZRN",
              symbol: "ZRN"
            },
            ZRZ: {
              displayName: {
                one: "Zairean zaire (1971–1993)",
                other: "Zairean zaires (1971–1993)"
              },
              narrow: "ZRZ",
              symbol: "ZRZ"
            },
            ZWD: {
              displayName: {
                one: "Zimbabwean dollar (1980–2008)",
                other: "Zimbabwean dollars (1980–2008)"
              },
              narrow: "ZWD",
              symbol: "ZWD"
            },
            ZWG: {
              displayName: {
                other: "Zimbabwean gold"
              },
              narrow: "ZWG",
              symbol: "ZWG"
            },
            ZWL: {
              displayName: {
                one: "Zimbabwean dollar (2009–2024)",
                other: "Zimbabwean dollars (2009–2024)"
              },
              narrow: "ZWL",
              symbol: "ZWL"
            },
            ZWR: {
              displayName: {
                one: "Zimbabwean dollar (2008)",
                other: "Zimbabwean dollars (2008)"
              },
              narrow: "ZWR",
              symbol: "ZWR"
            }
          },
          nu: ["latn"],
          numbers: {
            currency: {
              latn: {
                accounting: "¤#,##0.00;(¤#,##0.00)",
                currencySpacing: {
                  afterInsertBetween: " ",
                  beforeInsertBetween: " "
                },
                short: {
                  1e3: {
                    other: "¤0K"
                  },
                  1e4: {
                    other: "¤00K"
                  },
                  1e5: {
                    other: "¤000K"
                  },
                  1e6: {
                    other: "¤0M"
                  },
                  1e7: {
                    other: "¤00M"
                  },
                  1e8: {
                    other: "¤000M"
                  },
                  1e9: {
                    other: "¤0B"
                  },
                  1e10: {
                    other: "¤00B"
                  },
                  1e11: {
                    other: "¤000B"
                  },
                  1e12: {
                    other: "¤0T"
                  },
                  1e13: {
                    other: "¤00T"
                  },
                  1e14: {
                    other: "¤000T"
                  }
                },
                standard: "¤#,##0.00",
                unitPattern: "{0} {1}"
              }
            },
            decimal: {
              latn: {
                long: {
                  1e3: {
                    other: "0 thousand"
                  },
                  1e4: {
                    other: "00 thousand"
                  },
                  1e5: {
                    other: "000 thousand"
                  },
                  1e6: {
                    other: "0 million"
                  },
                  1e7: {
                    other: "00 million"
                  },
                  1e8: {
                    other: "000 million"
                  },
                  1e9: {
                    other: "0 billion"
                  },
                  1e10: {
                    other: "00 billion"
                  },
                  1e11: {
                    other: "000 billion"
                  },
                  1e12: {
                    other: "0 trillion"
                  },
                  1e13: {
                    other: "00 trillion"
                  },
                  1e14: {
                    other: "000 trillion"
                  }
                },
                short: {
                  1e3: {
                    other: "0K"
                  },
                  1e4: {
                    other: "00K"
                  },
                  1e5: {
                    other: "000K"
                  },
                  1e6: {
                    other: "0M"
                  },
                  1e7: {
                    other: "00M"
                  },
                  1e8: {
                    other: "000M"
                  },
                  1e9: {
                    other: "0B"
                  },
                  1e10: {
                    other: "00B"
                  },
                  1e11: {
                    other: "000B"
                  },
                  1e12: {
                    other: "0T"
                  },
                  1e13: {
                    other: "00T"
                  },
                  1e14: {
                    other: "000T"
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
                decimal: ".",
                exponential: "E",
                group: ",",
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
                long: "{0} per {1}",
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
                  other: "{0}bit"
                },
                perUnit: {},
                short: {
                  other: "{0} bit"
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
                  other: "{0} byte"
                }
              },
              celsius: {
                long: {
                  one: "{0} degree Celsius",
                  other: "{0} degrees Celsius"
                },
                narrow: {
                  other: "{0}°C"
                },
                perUnit: {},
                short: {
                  other: "{0}°C"
                }
              },
              centimeter: {
                long: {
                  one: "{0} centimeter",
                  other: "{0} centimeters"
                },
                narrow: {
                  other: "{0}cm"
                },
                perUnit: {
                  long: "{0} per centimeter",
                  narrow: "{0}/cm",
                  short: "{0}/cm"
                },
                short: {
                  other: "{0} cm"
                }
              },
              day: {
                long: {
                  one: "{0} day",
                  other: "{0} days"
                },
                narrow: {
                  other: "{0}d"
                },
                perUnit: {
                  long: "{0} per day",
                  narrow: "{0}/d",
                  short: "{0}/d"
                },
                short: {
                  one: "{0} day",
                  other: "{0} days"
                }
              },
              degree: {
                long: {
                  one: "{0} degree",
                  other: "{0} degrees"
                },
                narrow: {
                  other: "{0}°"
                },
                perUnit: {},
                short: {
                  other: "{0} deg"
                }
              },
              fahrenheit: {
                long: {
                  one: "{0} degree Fahrenheit",
                  other: "{0} degrees Fahrenheit"
                },
                narrow: {
                  other: "{0}°"
                },
                perUnit: {},
                short: {
                  other: "{0}°F"
                }
              },
              "fluid-ounce": {
                long: {
                  one: "{0} fluid ounce",
                  other: "{0} fluid ounces"
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
                  one: "{0} foot",
                  other: "{0} feet"
                },
                narrow: {
                  other: "{0}′"
                },
                perUnit: {
                  long: "{0} per foot",
                  narrow: "{0}/ft",
                  short: "{0}/ft"
                },
                short: {
                  other: "{0} ft"
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
                  long: "{0} per gallon",
                  narrow: "{0}/gal",
                  short: "{0}/gal US"
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
                  one: "{0} gram",
                  other: "{0} grams"
                },
                narrow: {
                  other: "{0}g"
                },
                perUnit: {
                  long: "{0} per gram",
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
                  other: "{0}ha"
                },
                perUnit: {},
                short: {
                  other: "{0} ha"
                }
              },
              hour: {
                long: {
                  one: "{0} hour",
                  other: "{0} hours"
                },
                narrow: {
                  other: "{0}h"
                },
                perUnit: {
                  long: "{0} per hour",
                  narrow: "{0}/h",
                  short: "{0}/h"
                },
                short: {
                  other: "{0} hr"
                }
              },
              inch: {
                long: {
                  one: "{0} inch",
                  other: "{0} inches"
                },
                narrow: {
                  other: "{0}″"
                },
                perUnit: {
                  long: "{0} per inch",
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
                  one: "{0} kilogram",
                  other: "{0} kilograms"
                },
                narrow: {
                  other: "{0}kg"
                },
                perUnit: {
                  long: "{0} per kilogram",
                  narrow: "{0}/kg",
                  short: "{0}/kg"
                },
                short: {
                  other: "{0} kg"
                }
              },
              kilometer: {
                long: {
                  one: "{0} kilometer",
                  other: "{0} kilometers"
                },
                narrow: {
                  other: "{0}km"
                },
                perUnit: {
                  long: "{0} per kilometer",
                  narrow: "{0}/km",
                  short: "{0}/km"
                },
                short: {
                  other: "{0} km"
                }
              },
              "kilometer-per-hour": {
                long: {
                  one: "{0} kilometer per hour",
                  other: "{0} kilometers per hour"
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
                  one: "{0} liter",
                  other: "{0} liters"
                },
                narrow: {
                  other: "{0}L"
                },
                perUnit: {
                  long: "{0} per liter",
                  narrow: "{0}/L",
                  short: "{0}/L"
                },
                short: {
                  other: "{0} L"
                }
              },
              "liter-per-kilometer": {
                long: {
                  one: "{0} liter per kilometer",
                  other: "{0} liters per kilometer"
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
                  one: "{0} meter",
                  other: "{0} meters"
                },
                narrow: {
                  other: "{0}m"
                },
                perUnit: {
                  long: "{0} per meter",
                  narrow: "{0}/m",
                  short: "{0}/m"
                },
                short: {
                  other: "{0} m"
                }
              },
              "meter-per-second": {
                long: {
                  one: "{0} meter per second",
                  other: "{0} meters per second"
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
                  one: "{0} mile",
                  other: "{0} miles"
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
                  one: "{0} mile per gallon",
                  other: "{0} miles per gallon"
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
                  one: "{0} mile per hour",
                  other: "{0} miles per hour"
                },
                narrow: {
                  other: "{0}mph"
                },
                perUnit: {},
                short: {
                  other: "{0} mph"
                }
              },
              "mile-scandinavian": {
                long: {
                  one: "{0} mile-scandinavian",
                  other: "{0} miles-scandinavian"
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
                  one: "{0} milliliter",
                  other: "{0} milliliters"
                },
                narrow: {
                  other: "{0}mL"
                },
                perUnit: {},
                short: {
                  other: "{0} mL"
                }
              },
              millimeter: {
                long: {
                  one: "{0} millimeter",
                  other: "{0} millimeters"
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
                  one: "{0} millisecond",
                  other: "{0} milliseconds"
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
                  one: "{0} minute",
                  other: "{0} minutes"
                },
                narrow: {
                  other: "{0}m"
                },
                perUnit: {
                  long: "{0} per minute",
                  narrow: "{0}/min",
                  short: "{0}/min"
                },
                short: {
                  other: "{0} min"
                }
              },
              month: {
                long: {
                  one: "{0} month",
                  other: "{0} months"
                },
                narrow: {
                  other: "{0}m"
                },
                perUnit: {
                  long: "{0} per month",
                  narrow: "{0}/m",
                  short: "{0}/m"
                },
                short: {
                  one: "{0} mth",
                  other: "{0} mths"
                }
              },
              ounce: {
                long: {
                  one: "{0} ounce",
                  other: "{0} ounces"
                },
                narrow: {
                  other: "{0}oz"
                },
                perUnit: {
                  long: "{0} per ounce",
                  narrow: "{0}/oz",
                  short: "{0}/oz"
                },
                short: {
                  other: "{0} oz"
                }
              },
              percent: {
                long: {
                  other: "{0} percent"
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
                  other: "{0}PB"
                },
                perUnit: {},
                short: {
                  other: "{0} PB"
                }
              },
              pound: {
                long: {
                  one: "{0} pound",
                  other: "{0} pounds"
                },
                narrow: {
                  other: "{0}#"
                },
                perUnit: {
                  long: "{0} per pound",
                  narrow: "{0}/lb",
                  short: "{0}/lb"
                },
                short: {
                  other: "{0} lb"
                }
              },
              second: {
                long: {
                  one: "{0} second",
                  other: "{0} seconds"
                },
                narrow: {
                  other: "{0}s"
                },
                perUnit: {
                  long: "{0} per second",
                  narrow: "{0}/s",
                  short: "{0}/s"
                },
                short: {
                  other: "{0} sec"
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
                  one: "{0} week",
                  other: "{0} weeks"
                },
                narrow: {
                  other: "{0}w"
                },
                perUnit: {
                  long: "{0} per week",
                  narrow: "{0}/w",
                  short: "{0}/w"
                },
                short: {
                  one: "{0} wk",
                  other: "{0} wks"
                }
              },
              yard: {
                long: {
                  one: "{0} yard",
                  other: "{0} yards"
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
                  one: "{0} year",
                  other: "{0} years"
                },
                narrow: {
                  other: "{0}y"
                },
                perUnit: {
                  long: "{0} per year",
                  narrow: "{0}/y",
                  short: "{0}/y"
                },
                short: {
                  one: "{0} yr",
                  other: "{0} yrs"
                }
              }
            }
          }
        },
        locale: "en"
      })
    }
  }
]);