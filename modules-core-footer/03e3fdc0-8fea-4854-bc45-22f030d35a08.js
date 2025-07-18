try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "03e3fdc0-8fea-4854-bc45-22f030d35a08", e._sentryDebugIdIdentifier = "sentry-dbid-03e3fdc0-8fea-4854-bc45-22f030d35a08")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [299], {
    45293: () => {
      Intl.NumberFormat && "function" == typeof Intl.NumberFormat.__addLocaleData && Intl.NumberFormat.__addLocaleData({
        data: {
          currencies: {
            ADP: {
              displayName: {
                one: "Andorranische Pesete",
                other: "Andorranische Peseten"
              },
              narrow: "ADP",
              symbol: "ADP"
            },
            AED: {
              displayName: {
                other: "VAE-Dirham"
              },
              narrow: "AED",
              symbol: "AED"
            },
            AFA: {
              displayName: {
                other: "Afghanische Afghani (1927–2002)"
              },
              narrow: "AFA",
              symbol: "AFA"
            },
            AFN: {
              displayName: {
                one: "Afghanischer Afghani",
                other: "Afghanische Afghani"
              },
              narrow: "؋",
              symbol: "AFN"
            },
            ALK: {
              displayName: {
                one: "Albanischer Lek (1946–1965)",
                other: "Albanische Lek (1946–1965)"
              },
              narrow: "ALK",
              symbol: "ALK"
            },
            ALL: {
              displayName: {
                one: "Albanischer Lek",
                other: "Albanische Lek"
              },
              narrow: "ALL",
              symbol: "ALL"
            },
            AMD: {
              displayName: {
                one: "Armenischer Dram",
                other: "Armenische Dram"
              },
              narrow: "֏",
              symbol: "AMD"
            },
            ANG: {
              displayName: {
                other: "Niederländische-Antillen-Gulden"
              },
              narrow: "ANG",
              symbol: "ANG"
            },
            AOA: {
              displayName: {
                one: "Angolanischer Kwanza",
                other: "Angolanische Kwanza"
              },
              narrow: "Kz",
              symbol: "AOA"
            },
            AOK: {
              displayName: {
                one: "Angolanischer Kwanza (1977–1990)",
                other: "Angolanische Kwanza (1977–1990)"
              },
              narrow: "AOK",
              symbol: "AOK"
            },
            AON: {
              displayName: {
                one: "Angolanischer Neuer Kwanza (1990–2000)",
                other: "Angolanische Neue Kwanza (1990–2000)"
              },
              narrow: "AON",
              symbol: "AON"
            },
            AOR: {
              displayName: {
                one: "Angolanischer Kwanza Reajustado (1995–1999)",
                other: "Angolanische Kwanza Reajustado (1995–1999)"
              },
              narrow: "AOR",
              symbol: "AOR"
            },
            ARA: {
              displayName: {
                one: "Argentinischer Austral",
                other: "Argentinische Austral"
              },
              narrow: "ARA",
              symbol: "ARA"
            },
            ARL: {
              displayName: {
                one: "Argentinischer Peso Ley (1970–1983)",
                other: "Argentinische Pesos Ley (1970–1983)"
              },
              narrow: "ARL",
              symbol: "ARL"
            },
            ARM: {
              displayName: {
                one: "Argentinischer Peso (1881–1970)",
                other: "Argentinische Pesos (1881–1970)"
              },
              narrow: "ARM",
              symbol: "ARM"
            },
            ARP: {
              displayName: {
                one: "Argentinischer Peso (1983–1985)",
                other: "Argentinische Peso (1983–1985)"
              },
              narrow: "ARP",
              symbol: "ARP"
            },
            ARS: {
              displayName: {
                one: "Argentinischer Peso",
                other: "Argentinische Pesos"
              },
              narrow: "$",
              symbol: "ARS"
            },
            ATS: {
              displayName: {
                one: "Österreichischer Schilling",
                other: "Österreichische Schilling"
              },
              narrow: "öS",
              symbol: "öS"
            },
            AUD: {
              displayName: {
                one: "Australischer Dollar",
                other: "Australische Dollar"
              },
              narrow: "$",
              symbol: "AU$"
            },
            AWG: {
              displayName: {
                other: "Aruba-Florin"
              },
              narrow: "AWG",
              symbol: "AWG"
            },
            AZM: {
              displayName: {
                other: "Aserbaidschan-Manat (1993–2006)"
              },
              narrow: "AZM",
              symbol: "AZM"
            },
            AZN: {
              displayName: {
                other: "Aserbaidschan-Manat"
              },
              narrow: "₼",
              symbol: "AZN"
            },
            BAD: {
              displayName: {
                other: "Bosnien und Herzegowina Dinar (1992–1994)"
              },
              narrow: "BAD",
              symbol: "BAD"
            },
            BAM: {
              displayName: {
                other: "Konvertible Mark Bosnien und Herzegowina"
              },
              narrow: "KM",
              symbol: "BAM"
            },
            BAN: {
              displayName: {
                one: "Bosnien und Herzegowina Neuer Dinar (1994–1997)",
                other: "Bosnien und Herzegowina Neue Dinar (1994–1997)"
              },
              narrow: "BAN",
              symbol: "BAN"
            },
            BBD: {
              displayName: {
                other: "Barbados-Dollar"
              },
              narrow: "$",
              symbol: "BBD"
            },
            BDT: {
              displayName: {
                other: "Bangladesch-Taka"
              },
              narrow: "৳",
              symbol: "BDT"
            },
            BEC: {
              displayName: {
                one: "Belgischer Franc (konvertibel)",
                other: "Belgische Franc (konvertibel)"
              },
              narrow: "BEC",
              symbol: "BEC"
            },
            BEF: {
              displayName: {
                one: "Belgischer Franc",
                other: "Belgische Franc"
              },
              narrow: "BEF",
              symbol: "BEF"
            },
            BEL: {
              displayName: {
                one: "Belgischer Finanz-Franc",
                other: "Belgische Finanz-Franc"
              },
              narrow: "BEL",
              symbol: "BEL"
            },
            BGL: {
              displayName: {
                other: "Bulgarische Lew (1962–1999)"
              },
              narrow: "BGL",
              symbol: "BGL"
            },
            BGM: {
              displayName: {
                one: "Bulgarischer Lew (1952–1962)",
                other: "Bulgarische Lew (1952–1962)"
              },
              narrow: "BGK",
              symbol: "BGK"
            },
            BGN: {
              displayName: {
                one: "Bulgarischer Lew",
                other: "Bulgarische Lew"
              },
              narrow: "BGN",
              symbol: "BGN"
            },
            BGO: {
              displayName: {
                one: "Bulgarischer Lew (1879–1952)",
                other: "Bulgarische Lew (1879–1952)"
              },
              narrow: "BGJ",
              symbol: "BGJ"
            },
            BHD: {
              displayName: {
                other: "Bahrain-Dinar"
              },
              narrow: "BHD",
              symbol: "BHD"
            },
            BIF: {
              displayName: {
                one: "Burundi-Franc",
                other: "Burundi-Francs"
              },
              narrow: "BIF",
              symbol: "BIF"
            },
            BMD: {
              displayName: {
                other: "Bermuda-Dollar"
              },
              narrow: "$",
              symbol: "BMD"
            },
            BND: {
              displayName: {
                other: "Brunei-Dollar"
              },
              narrow: "$",
              symbol: "BND"
            },
            BOB: {
              displayName: {
                one: "Bolivianischer Boliviano",
                other: "Bolivianische Bolivianos"
              },
              narrow: "Bs",
              symbol: "BOB"
            },
            BOL: {
              displayName: {
                one: "Bolivianischer Boliviano (1863–1963)",
                other: "Bolivianische Bolivianos (1863–1963)"
              },
              narrow: "BOL",
              symbol: "BOL"
            },
            BOP: {
              displayName: {
                one: "Bolivianischer Peso",
                other: "Bolivianische Peso"
              },
              narrow: "BOP",
              symbol: "BOP"
            },
            BOV: {
              displayName: {
                one: "Boliviansiche Mvdol",
                other: "Bolivianische Mvdol"
              },
              narrow: "BOV",
              symbol: "BOV"
            },
            BRB: {
              displayName: {
                one: "Brasilianischer Cruzeiro Novo (1967–1986)",
                other: "Brasilianische Cruzeiro Novo (1967–1986)"
              },
              narrow: "BRB",
              symbol: "BRB"
            },
            BRC: {
              displayName: {
                one: "Brasilianischer Cruzado (1986–1989)",
                other: "Brasilianische Cruzado (1986–1989)"
              },
              narrow: "BRC",
              symbol: "BRC"
            },
            BRE: {
              displayName: {
                one: "Brasilianischer Cruzeiro (1990–1993)",
                other: "Brasilianische Cruzeiro (1990–1993)"
              },
              narrow: "BRE",
              symbol: "BRE"
            },
            BRL: {
              displayName: {
                one: "Brasilianischer Real",
                other: "Brasilianische Real"
              },
              narrow: "R$",
              symbol: "R$"
            },
            BRN: {
              displayName: {
                one: "Brasilianischer Cruzado Novo (1989–1990)",
                other: "Brasilianische Cruzado Novo (1989–1990)"
              },
              narrow: "BRN",
              symbol: "BRN"
            },
            BRR: {
              displayName: {
                one: "Brasilianischer Cruzeiro (1993–1994)",
                other: "Brasilianische Cruzeiro (1993–1994)"
              },
              narrow: "BRR",
              symbol: "BRR"
            },
            BRZ: {
              displayName: {
                other: "Brasilianischer Cruzeiro (1942–1967)"
              },
              narrow: "BRZ",
              symbol: "BRZ"
            },
            BSD: {
              displayName: {
                other: "Bahamas-Dollar"
              },
              narrow: "$",
              symbol: "BSD"
            },
            BTN: {
              displayName: {
                other: "Bhutan-Ngultrum"
              },
              narrow: "BTN",
              symbol: "BTN"
            },
            BUK: {
              displayName: {
                one: "Birmanischer Kyat",
                other: "Birmanische Kyat"
              },
              narrow: "BUK",
              symbol: "BUK"
            },
            BWP: {
              displayName: {
                one: "Botswanischer Pula",
                other: "Botswanische Pula"
              },
              narrow: "P",
              symbol: "BWP"
            },
            BYB: {
              displayName: {
                other: "Belarus-Rubel (1994–1999)"
              },
              narrow: "BYB",
              symbol: "BYB"
            },
            BYN: {
              displayName: {
                one: "Weißrussischer Rubel",
                other: "Weißrussische Rubel"
              },
              narrow: "р.",
              symbol: "BYN"
            },
            BYR: {
              displayName: {
                one: "Weißrussischer Rubel (2000–2016)",
                other: "Weißrussische Rubel (2000–2016)"
              },
              narrow: "BYR",
              symbol: "BYR"
            },
            BZD: {
              displayName: {
                other: "Belize-Dollar"
              },
              narrow: "$",
              symbol: "BZD"
            },
            CAD: {
              displayName: {
                one: "Kanadischer Dollar",
                other: "Kanadische Dollar"
              },
              narrow: "$",
              symbol: "CA$"
            },
            CDF: {
              displayName: {
                one: "Kongo-Franc",
                other: "Kongo-Francs"
              },
              narrow: "CDF",
              symbol: "CDF"
            },
            CHE: {
              displayName: {
                other: "WIR-Euro"
              },
              narrow: "CHE",
              symbol: "CHE"
            },
            CHF: {
              displayName: {
                other: "Schweizer Franken"
              },
              narrow: "CHF",
              symbol: "CHF"
            },
            CHW: {
              displayName: {
                other: "WIR Franken"
              },
              narrow: "CHW",
              symbol: "CHW"
            },
            CLE: {
              displayName: {
                one: "Chilenischer Escudo",
                other: "Chilenische Escudo"
              },
              narrow: "CLE",
              symbol: "CLE"
            },
            CLF: {
              displayName: {
                other: "Chilenische Unidades de Fomento"
              },
              narrow: "CLF",
              symbol: "CLF"
            },
            CLP: {
              displayName: {
                one: "Chilenischer Peso",
                other: "Chilenische Pesos"
              },
              narrow: "$",
              symbol: "CLP"
            },
            CNH: {
              displayName: {
                other: "Renminbi-Yuan (Offshore)"
              },
              narrow: "CNH",
              symbol: "CNH"
            },
            CNX: {
              displayName: {
                other: "Dollar der Chinesischen Volksbank"
              },
              narrow: "CNX",
              symbol: "CNX"
            },
            CNY: {
              displayName: {
                one: "Chinesischer Yuan",
                other: "Renminbi Yuan"
              },
              narrow: "¥",
              symbol: "CN¥"
            },
            COP: {
              displayName: {
                one: "Kolumbianischer Peso",
                other: "Kolumbianische Pesos"
              },
              narrow: "$",
              symbol: "COP"
            },
            COU: {
              displayName: {
                one: "Kolumbianische Unidad de valor real",
                other: "Kolumbianische Unidades de valor real"
              },
              narrow: "COU",
              symbol: "COU"
            },
            CRC: {
              displayName: {
                other: "Costa-Rica-Colón"
              },
              narrow: "₡",
              symbol: "CRC"
            },
            CSD: {
              displayName: {
                one: "Serbischer Dinar (2002–2006)",
                other: "Serbische Dinar (2002–2006)"
              },
              narrow: "CSD",
              symbol: "CSD"
            },
            CSK: {
              displayName: {
                other: "Tschechoslowakische Kronen"
              },
              narrow: "CSK",
              symbol: "CSK"
            },
            CUC: {
              displayName: {
                one: "Kubanischer Peso (konvertibel)",
                other: "Kubanische Pesos (konvertibel)"
              },
              narrow: "Cub$",
              symbol: "CUC"
            },
            CUP: {
              displayName: {
                one: "Kubanischer Peso",
                other: "Kubanische Pesos"
              },
              narrow: "$",
              symbol: "CUP"
            },
            CVE: {
              displayName: {
                one: "Cabo-Verde-Escudo",
                other: "Cabo-Verde-Escudos"
              },
              narrow: "CVE",
              symbol: "CVE"
            },
            CYP: {
              displayName: {
                other: "Zypern Pfund"
              },
              narrow: "CYP",
              symbol: "CYP"
            },
            CZK: {
              displayName: {
                one: "Tschechische Krone",
                other: "Tschechische Kronen"
              },
              narrow: "Kč",
              symbol: "CZK"
            },
            DDM: {
              displayName: {
                other: "Mark der DDR"
              },
              narrow: "DDM",
              symbol: "DDM"
            },
            DEM: {
              displayName: {
                other: "Deutsche Mark"
              },
              narrow: "DM",
              symbol: "DM"
            },
            DJF: {
              displayName: {
                other: "Dschibuti-Franc"
              },
              narrow: "DJF",
              symbol: "DJF"
            },
            DKK: {
              displayName: {
                one: "Dänische Krone",
                other: "Dänische Kronen"
              },
              narrow: "kr",
              symbol: "DKK"
            },
            DOP: {
              displayName: {
                one: "Dominikanischer Peso",
                other: "Dominikanische Pesos"
              },
              narrow: "$",
              symbol: "DOP"
            },
            DZD: {
              displayName: {
                one: "Algerischer Dinar",
                other: "Algerische Dinar"
              },
              narrow: "DZD",
              symbol: "DZD"
            },
            ECS: {
              displayName: {
                one: "Ecuadorianischer Sucre",
                other: "Ecuadorianische Sucre"
              },
              narrow: "ECS",
              symbol: "ECS"
            },
            ECV: {
              displayName: {
                other: "Verrechnungseinheiten für Ecuador"
              },
              narrow: "ECV",
              symbol: "ECV"
            },
            EEK: {
              displayName: {
                one: "Estnische Krone",
                other: "Estnische Kronen"
              },
              narrow: "EEK",
              symbol: "EEK"
            },
            EGP: {
              displayName: {
                one: "Ägyptisches Pfund",
                other: "Ägyptische Pfund"
              },
              narrow: "E£",
              symbol: "EGP"
            },
            ERN: {
              displayName: {
                one: "Eritreischer Nakfa",
                other: "Eritreische Nakfa"
              },
              narrow: "ERN",
              symbol: "ERN"
            },
            ESA: {
              displayName: {
                one: "Spanische Peseta (A–Konten)",
                other: "Spanische Peseten (A–Konten)"
              },
              narrow: "ESA",
              symbol: "ESA"
            },
            ESB: {
              displayName: {
                one: "Spanische Peseta (konvertibel)",
                other: "Spanische Peseten (konvertibel)"
              },
              narrow: "ESB",
              symbol: "ESB"
            },
            ESP: {
              displayName: {
                one: "Spanische Peseta",
                other: "Spanische Peseten"
              },
              narrow: "₧",
              symbol: "ESP"
            },
            ETB: {
              displayName: {
                one: "Äthiopischer Birr",
                other: "Äthiopische Birr"
              },
              narrow: "ETB",
              symbol: "ETB"
            },
            EUR: {
              displayName: {
                other: "Euro"
              },
              narrow: "€",
              symbol: "€"
            },
            FIM: {
              displayName: {
                other: "Finnische Mark"
              },
              narrow: "FIM",
              symbol: "FIM"
            },
            FJD: {
              displayName: {
                other: "Fidschi-Dollar"
              },
              narrow: "$",
              symbol: "FJD"
            },
            FKP: {
              displayName: {
                other: "Falkland-Pfund"
              },
              narrow: "Fl£",
              symbol: "FKP"
            },
            FRF: {
              displayName: {
                one: "Französischer Franc",
                other: "Französische Franc"
              },
              narrow: "FRF",
              symbol: "FRF"
            },
            GBP: {
              displayName: {
                one: "Britisches Pfund",
                other: "Britische Pfund"
              },
              narrow: "£",
              symbol: "£"
            },
            GEK: {
              displayName: {
                one: "Georgischer Kupon Larit",
                other: "Georgische Kupon Larit"
              },
              narrow: "GEK",
              symbol: "GEK"
            },
            GEL: {
              displayName: {
                one: "Georgischer Lari",
                other: "Georgische Lari"
              },
              narrow: "₾",
              symbol: "GEL"
            },
            GHC: {
              displayName: {
                one: "Ghanaischer Cedi (1979–2007)",
                other: "Ghanaische Cedi (1979–2007)"
              },
              narrow: "GHC",
              symbol: "GHC"
            },
            GHS: {
              displayName: {
                one: "Ghanaischer Cedi",
                other: "Ghanaische Cedi"
              },
              narrow: "₵",
              symbol: "GHS"
            },
            GIP: {
              displayName: {
                other: "Gibraltar-Pfund"
              },
              narrow: "£",
              symbol: "GIP"
            },
            GMD: {
              displayName: {
                other: "Gambia-Dalasi"
              },
              narrow: "GMD",
              symbol: "GMD"
            },
            GNF: {
              displayName: {
                other: "Guinea-Franc"
              },
              narrow: "F.G.",
              symbol: "GNF"
            },
            GNS: {
              displayName: {
                one: "Guineischer Syli",
                other: "Guineische Syli"
              },
              narrow: "GNS",
              symbol: "GNS"
            },
            GQE: {
              displayName: {
                other: "Äquatorialguinea-Ekwele"
              },
              narrow: "GQE",
              symbol: "GQE"
            },
            GRD: {
              displayName: {
                one: "Griechische Drachme",
                other: "Griechische Drachmen"
              },
              narrow: "GRD",
              symbol: "GRD"
            },
            GTQ: {
              displayName: {
                one: "Guatemaltekischer Quetzal",
                other: "Guatemaltekische Quetzales"
              },
              narrow: "Q",
              symbol: "GTQ"
            },
            GWE: {
              displayName: {
                other: "Portugiesisch Guinea Escudo"
              },
              narrow: "GWE",
              symbol: "GWE"
            },
            GWP: {
              displayName: {
                one: "Guinea-Bissau Peso",
                other: "Guinea-Bissau Pesos"
              },
              narrow: "GWP",
              symbol: "GWP"
            },
            GYD: {
              displayName: {
                other: "Guyana-Dollar"
              },
              narrow: "$",
              symbol: "GYD"
            },
            HKD: {
              displayName: {
                other: "Hongkong-Dollar"
              },
              narrow: "$",
              symbol: "HK$"
            },
            HNL: {
              displayName: {
                other: "Honduras-Lempira"
              },
              narrow: "L",
              symbol: "HNL"
            },
            HRD: {
              displayName: {
                one: "Kroatischer Dinar",
                other: "Kroatische Dinar"
              },
              narrow: "HRD",
              symbol: "HRD"
            },
            HRK: {
              displayName: {
                one: "Kroatischer Kuna",
                other: "Kroatische Kuna"
              },
              narrow: "kn",
              symbol: "HRK"
            },
            HTG: {
              displayName: {
                one: "Haitianische Gourde",
                other: "Haitianische Gourdes"
              },
              narrow: "HTG",
              symbol: "HTG"
            },
            HUF: {
              displayName: {
                one: "Ungarischer Forint",
                other: "Ungarische Forint"
              },
              narrow: "Ft",
              symbol: "HUF"
            },
            IDR: {
              displayName: {
                other: "Indonesische Rupiah"
              },
              narrow: "Rp",
              symbol: "IDR"
            },
            IEP: {
              displayName: {
                one: "Irisches Pfund",
                other: "Irische Pfund"
              },
              narrow: "IEP",
              symbol: "IEP"
            },
            ILP: {
              displayName: {
                one: "Israelisches Pfund",
                other: "Israelische Pfund"
              },
              narrow: "ILP",
              symbol: "ILP"
            },
            ILR: {
              displayName: {
                one: "Israelischer Schekel (1980–1985)",
                other: "Israelische Schekel (1980–1985)"
              },
              narrow: "ILR",
              symbol: "ILR"
            },
            ILS: {
              displayName: {
                one: "Israelischer Neuer Schekel",
                other: "Israelische Neue Schekel"
              },
              narrow: "₪",
              symbol: "₪"
            },
            INR: {
              displayName: {
                one: "Indische Rupie",
                other: "Indische Rupien"
              },
              narrow: "₹",
              symbol: "₹"
            },
            IQD: {
              displayName: {
                one: "Irakischer Dinar",
                other: "Irakische Dinar"
              },
              narrow: "IQD",
              symbol: "IQD"
            },
            IRR: {
              displayName: {
                one: "Iranischer Rial",
                other: "Iranische Rial"
              },
              narrow: "IRR",
              symbol: "IRR"
            },
            ISJ: {
              displayName: {
                one: "Isländische Krone (1918–1981)",
                other: "Isländische Kronen (1918–1981)"
              },
              narrow: "ISJ",
              symbol: "ISJ"
            },
            ISK: {
              displayName: {
                one: "Isländische Krone",
                other: "Isländische Kronen"
              },
              narrow: "kr",
              symbol: "ISK"
            },
            ITL: {
              displayName: {
                one: "Italienische Lira",
                other: "Italienische Lire"
              },
              narrow: "ITL",
              symbol: "ITL"
            },
            JMD: {
              displayName: {
                other: "Jamaika-Dollar"
              },
              narrow: "$",
              symbol: "JMD"
            },
            JOD: {
              displayName: {
                one: "Jordanischer Dinar",
                other: "Jordanische Dinar"
              },
              narrow: "JOD",
              symbol: "JOD"
            },
            JPY: {
              displayName: {
                one: "Japanischer Yen",
                other: "Japanische Yen"
              },
              narrow: "¥",
              symbol: "¥"
            },
            KES: {
              displayName: {
                other: "Kenia-Schilling"
              },
              narrow: "KES",
              symbol: "KES"
            },
            KGS: {
              displayName: {
                one: "Kirgisischer Som",
                other: "Kirgisische Som"
              },
              narrow: "⃀",
              symbol: "KGS"
            },
            KHR: {
              displayName: {
                one: "Kambodschanischer Riel",
                other: "Kambodschanische Riel"
              },
              narrow: "៛",
              symbol: "KHR"
            },
            KMF: {
              displayName: {
                one: "Komoren-Franc",
                other: "Komoren-Francs"
              },
              narrow: "FC",
              symbol: "KMF"
            },
            KPW: {
              displayName: {
                one: "Nordkoreanischer Won",
                other: "Nordkoreanische Won"
              },
              narrow: "₩",
              symbol: "KPW"
            },
            KRH: {
              displayName: {
                other: "Südkoreanischer Hwan (1953–1962)"
              },
              narrow: "KRH",
              symbol: "KRH"
            },
            KRO: {
              displayName: {
                other: "Südkoreanischer Won (1945–1953)"
              },
              narrow: "KRO",
              symbol: "KRO"
            },
            KRW: {
              displayName: {
                one: "Südkoreanischer Won",
                other: "Südkoreanische Won"
              },
              narrow: "₩",
              symbol: "₩"
            },
            KWD: {
              displayName: {
                other: "Kuwait-Dinar"
              },
              narrow: "KWD",
              symbol: "KWD"
            },
            KYD: {
              displayName: {
                other: "Kaiman-Dollar"
              },
              narrow: "$",
              symbol: "KYD"
            },
            KZT: {
              displayName: {
                one: "Kasachischer Tenge",
                other: "Kasachische Tenge"
              },
              narrow: "₸",
              symbol: "KZT"
            },
            LAK: {
              displayName: {
                one: "Laotischer Kip",
                other: "Laotische Kip"
              },
              narrow: "₭",
              symbol: "LAK"
            },
            LBP: {
              displayName: {
                one: "Libanesisches Pfund",
                other: "Libanesische Pfund"
              },
              narrow: "L£",
              symbol: "LBP"
            },
            LKR: {
              displayName: {
                one: "Sri-Lanka-Rupie",
                other: "Sri-Lanka-Rupien"
              },
              narrow: "Rs",
              symbol: "LKR"
            },
            LRD: {
              displayName: {
                one: "Liberianischer Dollar",
                other: "Liberianische Dollar"
              },
              narrow: "$",
              symbol: "LRD"
            },
            LSL: {
              displayName: {
                other: "Loti"
              },
              narrow: "LSL",
              symbol: "LSL"
            },
            LTL: {
              displayName: {
                one: "Litauischer Litas",
                other: "Litauische Litas"
              },
              narrow: "Lt",
              symbol: "LTL"
            },
            LTT: {
              displayName: {
                other: "Litauische Talonas"
              },
              narrow: "LTT",
              symbol: "LTT"
            },
            LUC: {
              displayName: {
                other: "Luxemburgische Franc (konvertibel)"
              },
              narrow: "LUC",
              symbol: "LUC"
            },
            LUF: {
              displayName: {
                other: "Luxemburgische Franc"
              },
              narrow: "LUF",
              symbol: "LUF"
            },
            LUL: {
              displayName: {
                other: "Luxemburgische Finanz-Franc"
              },
              narrow: "LUL",
              symbol: "LUL"
            },
            LVL: {
              displayName: {
                one: "Lettischer Lats",
                other: "Lettische Lats"
              },
              narrow: "Ls",
              symbol: "LVL"
            },
            LVR: {
              displayName: {
                other: "Lettische Rubel"
              },
              narrow: "LVR",
              symbol: "LVR"
            },
            LYD: {
              displayName: {
                one: "Libyscher Dinar",
                other: "Libysche Dinar"
              },
              narrow: "LYD",
              symbol: "LYD"
            },
            MAD: {
              displayName: {
                one: "Marokkanischer Dirham",
                other: "Marokkanische Dirham"
              },
              narrow: "MAD",
              symbol: "MAD"
            },
            MAF: {
              displayName: {
                other: "Marokkanische Franc"
              },
              narrow: "MAF",
              symbol: "MAF"
            },
            MCF: {
              displayName: {
                one: "Monegassischer Franc",
                other: "Monegassische Franc"
              },
              narrow: "MCF",
              symbol: "MCF"
            },
            MDC: {
              displayName: {
                other: "Moldau-Cupon"
              },
              narrow: "MDC",
              symbol: "MDC"
            },
            MDL: {
              displayName: {
                other: "Moldau-Leu"
              },
              narrow: "MDL",
              symbol: "MDL"
            },
            MGA: {
              displayName: {
                other: "Madagaskar-Ariary"
              },
              narrow: "Ar",
              symbol: "MGA"
            },
            MGF: {
              displayName: {
                other: "Madagaskar-Franc"
              },
              narrow: "MGF",
              symbol: "MGF"
            },
            MKD: {
              displayName: {
                one: "Mazedonischer Denar",
                other: "Mazedonische Denari"
              },
              narrow: "MKD",
              symbol: "MKD"
            },
            MKN: {
              displayName: {
                one: "Mazedonischer Denar (1992–1993)",
                other: "Mazedonische Denar (1992–1993)"
              },
              narrow: "MKN",
              symbol: "MKN"
            },
            MLF: {
              displayName: {
                other: "Malische Franc"
              },
              narrow: "MLF",
              symbol: "MLF"
            },
            MMK: {
              displayName: {
                one: "Myanmarischer Kyat",
                other: "Myanmarische Kyat"
              },
              narrow: "K",
              symbol: "MMK"
            },
            MNT: {
              displayName: {
                one: "Mongolischer Tögrög",
                other: "Mongolische Tögrög"
              },
              narrow: "₮",
              symbol: "MNT"
            },
            MOP: {
              displayName: {
                other: "Macao-Pataca"
              },
              narrow: "MOP",
              symbol: "MOP"
            },
            MRO: {
              displayName: {
                one: "Mauretanischer Ouguiya (1973–2017)",
                other: "Mauretanische Ouguiya (1973–2017)"
              },
              narrow: "MRO",
              symbol: "MRO"
            },
            MRU: {
              displayName: {
                one: "Mauretanischer Ouguiya",
                other: "Mauretanische Ouguiya"
              },
              narrow: "MRU",
              symbol: "MRU"
            },
            MTL: {
              displayName: {
                other: "Maltesische Lira"
              },
              narrow: "MTL",
              symbol: "MTL"
            },
            MTP: {
              displayName: {
                other: "Maltesische Pfund"
              },
              narrow: "MTP",
              symbol: "MTP"
            },
            MUR: {
              displayName: {
                one: "Mauritius-Rupie",
                other: "Mauritius-Rupien"
              },
              narrow: "Rs",
              symbol: "MUR"
            },
            MVP: {
              displayName: {
                one: "Malediven-Rupie (alt)",
                other: "Malediven-Rupien (alt)"
              },
              narrow: "MVP",
              symbol: "MVP"
            },
            MVR: {
              displayName: {
                one: "Malediven-Rufiyaa",
                other: "Malediven-Rupien"
              },
              narrow: "MVR",
              symbol: "MVR"
            },
            MWK: {
              displayName: {
                other: "Malawi-Kwacha"
              },
              narrow: "MWK",
              symbol: "MWK"
            },
            MXN: {
              displayName: {
                one: "Mexikanischer Peso",
                other: "Mexikanische Pesos"
              },
              narrow: "$",
              symbol: "MX$"
            },
            MXP: {
              displayName: {
                one: "Mexikanische Silber-Peso (1861–1992)",
                other: "Mexikanische Silber-Pesos (1861–1992)"
              },
              narrow: "MXP",
              symbol: "MXP"
            },
            MXV: {
              displayName: {
                one: "Mexicanischer Unidad de Inversion (UDI)",
                other: "Mexikanische Unidad de Inversion (UDI)"
              },
              narrow: "MXV",
              symbol: "MXV"
            },
            MYR: {
              displayName: {
                one: "Malaysischer Ringgit",
                other: "Malaysische Ringgit"
              },
              narrow: "RM",
              symbol: "MYR"
            },
            MZE: {
              displayName: {
                other: "Mozambikanische Escudo"
              },
              narrow: "MZE",
              symbol: "MZE"
            },
            MZM: {
              displayName: {
                one: "Mosambikanischer Metical (1980–2006)",
                other: "Mosambikanische Meticais (1980–2006)"
              },
              narrow: "MZM",
              symbol: "MZM"
            },
            MZN: {
              displayName: {
                one: "Mosambikanischer Metical",
                other: "Mosambikanische Meticais"
              },
              narrow: "MZN",
              symbol: "MZN"
            },
            NAD: {
              displayName: {
                other: "Namibia-Dollar"
              },
              narrow: "$",
              symbol: "NAD"
            },
            NGN: {
              displayName: {
                one: "Nigerianischer Naira",
                other: "Nigerianische Naira"
              },
              narrow: "₦",
              symbol: "NGN"
            },
            NIC: {
              displayName: {
                one: "Nicaraguanischer Córdoba (1988–1991)",
                other: "Nicaraguanische Córdoba (1988–1991)"
              },
              narrow: "NIC",
              symbol: "NIC"
            },
            NIO: {
              displayName: {
                one: "Nicaragua-Córdoba",
                other: "Nicaragua-Córdobas"
              },
              narrow: "C$",
              symbol: "NIO"
            },
            NLG: {
              displayName: {
                one: "Niederländischer Gulden",
                other: "Niederländische Gulden"
              },
              narrow: "NLG",
              symbol: "NLG"
            },
            NOK: {
              displayName: {
                one: "Norwegische Krone",
                other: "Norwegische Kronen"
              },
              narrow: "kr",
              symbol: "NOK"
            },
            NPR: {
              displayName: {
                one: "Nepalesische Rupie",
                other: "Nepalesische Rupien"
              },
              narrow: "Rs",
              symbol: "NPR"
            },
            NZD: {
              displayName: {
                other: "Neuseeland-Dollar"
              },
              narrow: "$",
              symbol: "NZ$"
            },
            OMR: {
              displayName: {
                one: "Omanischer Rial",
                other: "Omanische Rials"
              },
              narrow: "OMR",
              symbol: "OMR"
            },
            PAB: {
              displayName: {
                one: "Panamaischer Balboa",
                other: "Panamaische Balboas"
              },
              narrow: "PAB",
              symbol: "PAB"
            },
            PEI: {
              displayName: {
                other: "Peruanische Inti"
              },
              narrow: "PEI",
              symbol: "PEI"
            },
            PEN: {
              displayName: {
                one: "Peruanischer Sol",
                other: "Peruanische Sol"
              },
              narrow: "PEN",
              symbol: "PEN"
            },
            PES: {
              displayName: {
                one: "Peruanischer Sol (1863–1965)",
                other: "Peruanische Sol (1863–1965)"
              },
              narrow: "PES",
              symbol: "PES"
            },
            PGK: {
              displayName: {
                other: "Papua-neuguineischer Kina"
              },
              narrow: "PGK",
              symbol: "PGK"
            },
            PHP: {
              displayName: {
                one: "Philippinischer Peso",
                other: "Philippinische Pesos"
              },
              narrow: "₱",
              symbol: "PHP"
            },
            PKR: {
              displayName: {
                one: "Pakistanische Rupie",
                other: "Pakistanische Rupien"
              },
              narrow: "Rs",
              symbol: "PKR"
            },
            PLN: {
              displayName: {
                one: "Polnischer Złoty",
                other: "Polnische Złoty"
              },
              narrow: "zł",
              symbol: "PLN"
            },
            PLZ: {
              displayName: {
                one: "Polnischer Zloty (1950–1995)",
                other: "Polnische Zloty (1950–1995)"
              },
              narrow: "PLZ",
              symbol: "PLZ"
            },
            PTE: {
              displayName: {
                other: "Portugiesische Escudo"
              },
              narrow: "PTE",
              symbol: "PTE"
            },
            PYG: {
              displayName: {
                one: "Paraguayischer Guaraní",
                other: "Paraguayische Guaraníes"
              },
              narrow: "₲",
              symbol: "PYG"
            },
            QAR: {
              displayName: {
                other: "Katar-Riyal"
              },
              narrow: "QAR",
              symbol: "QAR"
            },
            RHD: {
              displayName: {
                other: "Rhodesische Dollar"
              },
              narrow: "RHD",
              symbol: "RHD"
            },
            ROL: {
              displayName: {
                one: "Rumänischer Leu (1952–2006)",
                other: "Rumänische Leu (1952–2006)"
              },
              narrow: "ROL",
              symbol: "ROL"
            },
            RON: {
              displayName: {
                one: "Rumänischer Leu",
                other: "Rumänische Leu"
              },
              narrow: "L",
              symbol: "RON"
            },
            RSD: {
              displayName: {
                one: "Serbischer Dinar",
                other: "Serbische Dinaren"
              },
              narrow: "RSD",
              symbol: "RSD"
            },
            RUB: {
              displayName: {
                one: "Russischer Rubel",
                other: "Russische Rubel"
              },
              narrow: "₽",
              symbol: "RUB"
            },
            RUR: {
              displayName: {
                one: "Russischer Rubel (1991–1998)",
                other: "Russische Rubel (1991–1998)"
              },
              narrow: "р.",
              symbol: "RUR"
            },
            RWF: {
              displayName: {
                one: "Ruanda-Franc",
                other: "Ruanda-Francs"
              },
              narrow: "F.Rw",
              symbol: "RWF"
            },
            SAR: {
              displayName: {
                other: "Saudi-Rial"
              },
              narrow: "SAR",
              symbol: "SAR"
            },
            SBD: {
              displayName: {
                other: "Salomonen-Dollar"
              },
              narrow: "$",
              symbol: "SBD"
            },
            SCR: {
              displayName: {
                one: "Seychellen-Rupie",
                other: "Seychellen-Rupien"
              },
              narrow: "SCR",
              symbol: "SCR"
            },
            SDD: {
              displayName: {
                one: "Sudanesischer Dinar (1992–2007)",
                other: "Sudanesische Dinar (1992–2007)"
              },
              narrow: "SDD",
              symbol: "SDD"
            },
            SDG: {
              displayName: {
                one: "Sudanesisches Pfund",
                other: "Sudanesische Pfund"
              },
              narrow: "SDG",
              symbol: "SDG"
            },
            SDP: {
              displayName: {
                one: "Sudanesisches Pfund (1957–1998)",
                other: "Sudanesische Pfund (1957–1998)"
              },
              narrow: "SDP",
              symbol: "SDP"
            },
            SEK: {
              displayName: {
                one: "Schwedische Krone",
                other: "Schwedische Kronen"
              },
              narrow: "kr",
              symbol: "SEK"
            },
            SGD: {
              displayName: {
                other: "Singapur-Dollar"
              },
              narrow: "$",
              symbol: "SGD"
            },
            SHP: {
              displayName: {
                other: "St.-Helena-Pfund"
              },
              narrow: "£",
              symbol: "SHP"
            },
            SIT: {
              displayName: {
                one: "Slowenischer Tolar",
                other: "Slowenische Tolar"
              },
              narrow: "SIT",
              symbol: "SIT"
            },
            SKK: {
              displayName: {
                other: "Slowakische Kronen"
              },
              narrow: "SKK",
              symbol: "SKK"
            },
            SLE: {
              displayName: {
                one: "Sierra-leonischer Leone",
                other: "Sierra-leonische Leones"
              },
              narrow: "SLE",
              symbol: "SLE"
            },
            SLL: {
              displayName: {
                one: "Sierra-leonischer Leone (1964–2022)",
                other: "Sierra-leonische Leones (1964–2022)"
              },
              narrow: "SLL",
              symbol: "SLL"
            },
            SOS: {
              displayName: {
                other: "Somalia-Schilling"
              },
              narrow: "SOS",
              symbol: "SOS"
            },
            SRD: {
              displayName: {
                other: "Suriname-Dollar"
              },
              narrow: "$",
              symbol: "SRD"
            },
            SRG: {
              displayName: {
                other: "Suriname-Gulden"
              },
              narrow: "SRG",
              symbol: "SRG"
            },
            SSP: {
              displayName: {
                one: "Südsudanesisches Pfund",
                other: "Südsudanesische Pfund"
              },
              narrow: "£",
              symbol: "SSP"
            },
            STD: {
              displayName: {
                one: "São-toméischer Dobra (1977–2017)",
                other: "São-toméische Dobra (1977–2017)"
              },
              narrow: "STD",
              symbol: "STD"
            },
            STN: {
              displayName: {
                one: "São-toméischer Dobra",
                other: "São-toméische Dobras"
              },
              narrow: "Db",
              symbol: "STN"
            },
            SUR: {
              displayName: {
                other: "Sowjetische Rubel"
              },
              narrow: "SUR",
              symbol: "SUR"
            },
            SVC: {
              displayName: {
                other: "El Salvador-Colon"
              },
              narrow: "SVC",
              symbol: "SVC"
            },
            SYP: {
              displayName: {
                one: "Syrisches Pfund",
                other: "Syrische Pfund"
              },
              narrow: "SYP",
              symbol: "SYP"
            },
            SZL: {
              displayName: {
                one: "Swasiländischer Lilangeni",
                other: "Swasiländische Emalangeni"
              },
              narrow: "SZL",
              symbol: "SZL"
            },
            THB: {
              displayName: {
                one: "Thailändischer Baht",
                other: "Thailändische Baht"
              },
              narrow: "฿",
              symbol: "฿"
            },
            TJR: {
              displayName: {
                other: "Tadschikistan-Rubel"
              },
              narrow: "TJR",
              symbol: "TJR"
            },
            TJS: {
              displayName: {
                other: "Tadschikistan-Somoni"
              },
              narrow: "TJS",
              symbol: "TJS"
            },
            TMM: {
              displayName: {
                other: "Turkmenistan-Manat (1993–2009)"
              },
              narrow: "TMM",
              symbol: "TMM"
            },
            TMT: {
              displayName: {
                other: "Turkmenistan-Manat"
              },
              narrow: "TMT",
              symbol: "TMT"
            },
            TND: {
              displayName: {
                one: "Tunesischer Dinar",
                other: "Tunesische Dinar"
              },
              narrow: "TND",
              symbol: "TND"
            },
            TOP: {
              displayName: {
                one: "Tongaischer Paʻanga",
                other: "Tongaische Paʻanga"
              },
              narrow: "T$",
              symbol: "TOP"
            },
            TPE: {
              displayName: {
                other: "Timor-Escudo"
              },
              narrow: "TPE",
              symbol: "TPE"
            },
            TRL: {
              displayName: {
                other: "Türkische Lira (1922–2005)"
              },
              narrow: "TRL",
              symbol: "TRL"
            },
            TRY: {
              displayName: {
                other: "Türkische Lira"
              },
              narrow: "₺",
              symbol: "TRY"
            },
            TTD: {
              displayName: {
                other: "Trinidad-und-Tobago-Dollar"
              },
              narrow: "$",
              symbol: "TTD"
            },
            TWD: {
              displayName: {
                one: "Neuer Taiwan-Dollar",
                other: "Neue Taiwan-Dollar"
              },
              narrow: "NT$",
              symbol: "NT$"
            },
            TZS: {
              displayName: {
                other: "Tansania-Schilling"
              },
              narrow: "TZS",
              symbol: "TZS"
            },
            UAH: {
              displayName: {
                one: "Ukrainische Hrywnja",
                other: "Ukrainische Hrywen"
              },
              narrow: "₴",
              symbol: "UAH"
            },
            UAK: {
              displayName: {
                other: "Ukrainische Karbovanetz"
              },
              narrow: "UAK",
              symbol: "UAK"
            },
            UGS: {
              displayName: {
                other: "Uganda-Schilling (1966–1987)"
              },
              narrow: "UGS",
              symbol: "UGS"
            },
            UGX: {
              displayName: {
                other: "Uganda-Schilling"
              },
              narrow: "UGX",
              symbol: "UGX"
            },
            USD: {
              displayName: {
                other: "US-Dollar"
              },
              narrow: "$",
              symbol: "$"
            },
            USN: {
              displayName: {
                other: "US-Dollar (Nächster Tag)"
              },
              narrow: "USN",
              symbol: "USN"
            },
            USS: {
              displayName: {
                other: "US-Dollar (Gleicher Tag)"
              },
              narrow: "USS",
              symbol: "USS"
            },
            UYI: {
              displayName: {
                one: "Uruguayischer Peso (Indexierte Rechnungseinheiten)",
                other: "Uruguayische Pesos (Indexierte Rechnungseinheiten)"
              },
              narrow: "UYI",
              symbol: "UYI"
            },
            UYP: {
              displayName: {
                one: "Uruguayischer Peso (1975–1993)",
                other: "Uruguayische Pesos (1975–1993)"
              },
              narrow: "UYP",
              symbol: "UYP"
            },
            UYU: {
              displayName: {
                one: "Uruguayischer Peso",
                other: "Uruguayische Pesos"
              },
              narrow: "$",
              symbol: "UYU"
            },
            UZS: {
              displayName: {
                other: "Usbekistan-Sum"
              },
              narrow: "UZS",
              symbol: "UZS"
            },
            VEB: {
              displayName: {
                one: "Venezolanischer Bolívar (1871–2008)",
                other: "Venezolanische Bolívares (1871–2008)"
              },
              narrow: "VEB",
              symbol: "VEB"
            },
            VEF: {
              displayName: {
                one: "Venezolanischer Bolívar (2008–2018)",
                other: "Venezolanische Bolívares (2008–2018)"
              },
              narrow: "Bs",
              symbol: "VEF"
            },
            VES: {
              displayName: {
                one: "Venezolanischer Bolívar",
                other: "Venezolanische Bolívares"
              },
              narrow: "VES",
              symbol: "VES"
            },
            VND: {
              displayName: {
                one: "Vietnamesischer Dong",
                other: "Vietnamesische Dong"
              },
              narrow: "₫",
              symbol: "₫"
            },
            VNN: {
              displayName: {
                one: "Vietnamesischer Dong(1978–1985)",
                other: "Vietnamesische Dong(1978–1985)"
              },
              narrow: "VNN",
              symbol: "VNN"
            },
            VUV: {
              displayName: {
                other: "Vanuatu-Vatu"
              },
              narrow: "VUV",
              symbol: "VUV"
            },
            WST: {
              displayName: {
                one: "Samoanischer Tala",
                other: "Samoanische Tala"
              },
              narrow: "WST",
              symbol: "WST"
            },
            XAF: {
              displayName: {
                other: "CFA-Franc (BEAC)"
              },
              narrow: "FCFA",
              symbol: "FCFA"
            },
            XAG: {
              displayName: {
                one: "Unze Silber",
                other: "Unzen Silber"
              },
              narrow: "XAG",
              symbol: "XAG"
            },
            XAU: {
              displayName: {
                one: "Unze Gold",
                other: "Unzen Gold"
              },
              narrow: "XAU",
              symbol: "XAU"
            },
            XBA: {
              displayName: {
                other: "Europäische Rechnungseinheiten"
              },
              narrow: "XBA",
              symbol: "XBA"
            },
            XBB: {
              displayName: {
                other: "Europäische Währungseinheiten (XBB)"
              },
              narrow: "XBB",
              symbol: "XBB"
            },
            XBC: {
              displayName: {
                other: "Europäische Rechnungseinheiten (XBC)"
              },
              narrow: "XBC",
              symbol: "XBC"
            },
            XBD: {
              displayName: {
                other: "Europäische Rechnungseinheiten (XBD)"
              },
              narrow: "XBD",
              symbol: "XBD"
            },
            XCD: {
              displayName: {
                one: "Ostkaribischer Dollar",
                other: "Ostkaribische Dollar"
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
                other: "Sonderziehungsrechte"
              },
              narrow: "XDR",
              symbol: "XDR"
            },
            XEU: {
              displayName: {
                other: "Europäische Währungseinheiten (XEU)"
              },
              narrow: "XEU",
              symbol: "XEU"
            },
            XFO: {
              displayName: {
                other: "Französische Gold-Franc"
              },
              narrow: "XFO",
              symbol: "XFO"
            },
            XFU: {
              displayName: {
                other: "Französische UIC-Franc"
              },
              narrow: "XFU",
              symbol: "XFU"
            },
            XOF: {
              displayName: {
                one: "CFA-Franc (BCEAO)",
                other: "CFA-Francs (BCEAO)"
              },
              narrow: "F CFA",
              symbol: "F CFA"
            },
            XPD: {
              displayName: {
                one: "Unze Palladium",
                other: "Unzen Palladium"
              },
              narrow: "XPD",
              symbol: "XPD"
            },
            XPF: {
              displayName: {
                other: "CFP-Franc"
              },
              narrow: "CFPF",
              symbol: "CFPF"
            },
            XPT: {
              displayName: {
                one: "Unze Platin",
                other: "Unzen Platin"
              },
              narrow: "XPT",
              symbol: "XPT"
            },
            XRE: {
              displayName: {
                other: "RINET Funds"
              },
              narrow: "XRE",
              symbol: "XRE"
            },
            XSU: {
              displayName: {
                other: "SUCRE"
              },
              narrow: "XSU",
              symbol: "XSU"
            },
            XTS: {
              displayName: {
                other: "Testwährung"
              },
              narrow: "XTS",
              symbol: "XTS"
            },
            XUA: {
              displayName: {
                one: "Rechnungseinheit der AfEB",
                other: "Rechnungseinheiten der AfEB"
              },
              narrow: "XUA",
              symbol: "XUA"
            },
            XXX: {
              displayName: {
                other: "(unbekannte Währung)"
              },
              narrow: "XXX",
              symbol: "XXX"
            },
            YDD: {
              displayName: {
                other: "Jemen-Dinar"
              },
              narrow: "YDD",
              symbol: "YDD"
            },
            YER: {
              displayName: {
                other: "Jemen-Rial"
              },
              narrow: "YER",
              symbol: "YER"
            },
            YUD: {
              displayName: {
                one: "Jugoslawischer Dinar (1966–1990)",
                other: "Jugoslawische Dinar (1966–1990)"
              },
              narrow: "YUD",
              symbol: "YUD"
            },
            YUM: {
              displayName: {
                one: "Jugoslawischer Neuer Dinar (1994–2002)",
                other: "Jugoslawische Neue Dinar (1994–2002)"
              },
              narrow: "YUM",
              symbol: "YUM"
            },
            YUN: {
              displayName: {
                other: "Jugoslawische Dinar (konvertibel)"
              },
              narrow: "YUN",
              symbol: "YUN"
            },
            YUR: {
              displayName: {
                one: "Jugoslawischer reformierter Dinar (1992–1993)",
                other: "Jugoslawische reformierte Dinar (1992–1993)"
              },
              narrow: "YUR",
              symbol: "YUR"
            },
            ZAL: {
              displayName: {
                other: "Südafrikanischer Rand (Finanz)"
              },
              narrow: "ZAL",
              symbol: "ZAL"
            },
            ZAR: {
              displayName: {
                one: "Südafrikanischer Rand",
                other: "Südafrikanische Rand"
              },
              narrow: "R",
              symbol: "ZAR"
            },
            ZMK: {
              displayName: {
                other: "Kwacha (1968–2012)"
              },
              narrow: "ZMK",
              symbol: "ZMK"
            },
            ZMW: {
              displayName: {
                other: "Kwacha"
              },
              narrow: "K",
              symbol: "ZMW"
            },
            ZRN: {
              displayName: {
                one: "Zaire-Neuer Zaïre (1993–1998)",
                other: "Zaire-Neue Zaïre (1993–1998)"
              },
              narrow: "ZRN",
              symbol: "ZRN"
            },
            ZRZ: {
              displayName: {
                other: "Zaire-Zaïre (1971–1993)"
              },
              narrow: "ZRZ",
              symbol: "ZRZ"
            },
            ZWD: {
              displayName: {
                other: "Simbabwe-Dollar (1980–2008)"
              },
              narrow: "ZWD",
              symbol: "ZWD"
            },
            ZWL: {
              displayName: {
                other: "Simbabwe-Dollar (2009)"
              },
              narrow: "ZWL",
              symbol: "ZWL"
            },
            ZWR: {
              displayName: {
                other: "Simbabwe-Dollar (2008)"
              },
              narrow: "ZWR",
              symbol: "ZWR"
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
                    other: "0 Mio'.' ¤"
                  },
                  1e7: {
                    other: "00 Mio'.' ¤"
                  },
                  1e8: {
                    other: "000 Mio'.' ¤"
                  },
                  1e9: {
                    other: "0 Mrd'.' ¤"
                  },
                  1e10: {
                    other: "00 Mrd'.' ¤"
                  },
                  1e11: {
                    other: "000 Mrd'.' ¤"
                  },
                  1e12: {
                    other: "0 Bio'.' ¤"
                  },
                  1e13: {
                    other: "00 Bio'.' ¤"
                  },
                  1e14: {
                    other: "000 Bio'.' ¤"
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
                    other: "0 Tausend"
                  },
                  1e4: {
                    other: "00 Tausend"
                  },
                  1e5: {
                    other: "000 Tausend"
                  },
                  1e6: {
                    one: "0 Million",
                    other: "0 Millionen"
                  },
                  1e7: {
                    other: "00 Millionen"
                  },
                  1e8: {
                    other: "000 Millionen"
                  },
                  1e9: {
                    one: "0 Milliarde",
                    other: "0 Milliarden"
                  },
                  1e10: {
                    other: "00 Milliarden"
                  },
                  1e11: {
                    other: "000 Milliarden"
                  },
                  1e12: {
                    one: "0 Billion",
                    other: "0 Billionen"
                  },
                  1e13: {
                    other: "00 Billionen"
                  },
                  1e14: {
                    other: "000 Billionen"
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
                    other: "0 Mio'.'"
                  },
                  1e7: {
                    other: "00 Mio'.'"
                  },
                  1e8: {
                    other: "000 Mio'.'"
                  },
                  1e9: {
                    other: "0 Mrd'.'"
                  },
                  1e10: {
                    other: "00 Mrd'.'"
                  },
                  1e11: {
                    other: "000 Mrd'.'"
                  },
                  1e12: {
                    other: "0 Bio'.'"
                  },
                  1e13: {
                    other: "00 Bio'.'"
                  },
                  1e14: {
                    other: "000 Bio'.'"
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
                approximatelySign: "≈",
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
                superscriptingExponent: "·",
                timeSeparator: ":"
              }
            }
          },
          units: {
            compound: {
              per: {
                long: "{0} pro {1}",
                narrow: "{0}/{1}",
                short: "{0}/{1}"
              }
            },
            simple: {
              acre: {
                long: {
                  one: "{0} Acre",
                  other: "{0} Acres"
                },
                narrow: {
                  other: "{0} ac"
                },
                perUnit: {},
                short: {
                  other: "{0} ac"
                }
              },
              bit: {
                long: {
                  one: "{0} Bit",
                  other: "{0} Bit"
                },
                narrow: {
                  other: "{0} b"
                },
                perUnit: {},
                short: {
                  one: "{0} Bit",
                  other: "{0} Bit"
                }
              },
              byte: {
                long: {
                  one: "{0} Byte",
                  other: "{0} Byte"
                },
                narrow: {
                  other: "{0} B"
                },
                perUnit: {},
                short: {
                  one: "{0} Byte",
                  other: "{0} Byte"
                }
              },
              celsius: {
                long: {
                  other: "{0} Grad Celsius"
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
                  other: "{0} Zentimeter"
                },
                narrow: {
                  other: "{0} cm"
                },
                perUnit: {
                  long: "{0} pro Zentimeter",
                  narrow: "{0}/cm",
                  short: "{0}/cm"
                },
                short: {
                  other: "{0} cm"
                }
              },
              day: {
                long: {
                  one: "{0} Tag",
                  other: "{0} Tage"
                },
                narrow: {
                  other: "{0} T"
                },
                perUnit: {
                  long: "{0} pro Tag",
                  narrow: "{0}/T",
                  short: "{0}/T"
                },
                short: {
                  other: "{0} Tg."
                }
              },
              degree: {
                long: {
                  other: "{0} Grad"
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
                  other: "{0} Grad Fahrenheit"
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
                  one: "{0} Flüssigunze",
                  other: "{0} Flüssigunzen"
                },
                narrow: {
                  other: "{0} fl oz"
                },
                perUnit: {},
                short: {
                  other: "{0} fl oz"
                }
              },
              foot: {
                long: {
                  other: "{0} Fuß"
                },
                narrow: {
                  other: "{0} ft"
                },
                perUnit: {
                  long: "{0} pro Fuß",
                  narrow: "{0}/ft",
                  short: "{0}/ft"
                },
                short: {
                  other: "{0} ft"
                }
              },
              gallon: {
                long: {
                  one: "{0} Gallone",
                  other: "{0} Gallonen"
                },
                narrow: {
                  other: "{0} gal"
                },
                perUnit: {
                  long: "{0} pro Gallone",
                  narrow: "{0}/gal",
                  short: "{0}/gal"
                },
                short: {
                  other: "{0} gal"
                }
              },
              gigabit: {
                long: {
                  one: "{0} Gigabit",
                  other: "{0} Gigabit"
                },
                narrow: {
                  other: "{0} Gb"
                },
                perUnit: {},
                short: {
                  other: "{0} Gb"
                }
              },
              gigabyte: {
                long: {
                  one: "{0} Gigabyte",
                  other: "{0} Gigabyte"
                },
                narrow: {
                  other: "{0} GB"
                },
                perUnit: {},
                short: {
                  other: "{0} GB"
                }
              },
              gram: {
                long: {
                  other: "{0} Gramm"
                },
                narrow: {
                  other: "{0} g"
                },
                perUnit: {
                  long: "{0} pro Gramm",
                  narrow: "{0}/g",
                  short: "{0}/g"
                },
                short: {
                  other: "{0} g"
                }
              },
              hectare: {
                long: {
                  other: "{0} Hektar"
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
                  one: "{0} Stunde",
                  other: "{0} Stunden"
                },
                narrow: {
                  other: "{0} Std."
                },
                perUnit: {
                  long: "{0} pro Stunde",
                  narrow: "{0}/h",
                  short: "{0}/h"
                },
                short: {
                  other: "{0} Std."
                }
              },
              inch: {
                long: {
                  other: "{0} Zoll"
                },
                narrow: {
                  one: "{0} in",
                  other: "{0} in"
                },
                perUnit: {
                  long: "{0} pro Zoll",
                  narrow: "{0}/in",
                  short: "{0}/in"
                },
                short: {
                  one: "{0} in",
                  other: "{0} in"
                }
              },
              kilobit: {
                long: {
                  one: "{0} Kilobit",
                  other: "{0} Kilobit"
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
                  one: "{0} Kilobyte",
                  other: "{0} Kilobyte"
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
                  other: "{0} Kilogramm"
                },
                narrow: {
                  other: "{0} kg"
                },
                perUnit: {
                  long: "{0} pro Kilogramm",
                  narrow: "{0}/kg",
                  short: "{0}/kg"
                },
                short: {
                  other: "{0} kg"
                }
              },
              kilometer: {
                long: {
                  other: "{0} Kilometer"
                },
                narrow: {
                  other: "{0} km"
                },
                perUnit: {
                  long: "{0} pro Kilometer",
                  narrow: "{0}/km",
                  short: "{0}/km"
                },
                short: {
                  other: "{0} km"
                }
              },
              "kilometer-per-hour": {
                long: {
                  other: "{0} Kilometer pro Stunde"
                },
                narrow: {
                  other: "{0} km/h"
                },
                perUnit: {},
                short: {
                  other: "{0} km/h"
                }
              },
              liter: {
                long: {
                  other: "{0} Liter"
                },
                narrow: {
                  other: "{0} l"
                },
                perUnit: {
                  long: "{0} pro Liter",
                  narrow: "{0}/l",
                  short: "{0}/l"
                },
                short: {
                  other: "{0} l"
                }
              },
              "liter-per-kilometer": {
                long: {
                  other: "{0} Liter pro Kilometer"
                },
                narrow: {
                  other: "{0}l/km"
                },
                perUnit: {},
                short: {
                  other: "{0} l/km"
                }
              },
              megabit: {
                long: {
                  one: "{0} Megabit",
                  other: "{0} Megabit"
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
                  one: "{0} Megabyte",
                  other: "{0} Megabyte"
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
                  other: "{0} Meter"
                },
                narrow: {
                  other: "{0} m"
                },
                perUnit: {
                  long: "{0} pro Meter",
                  narrow: "{0}/m",
                  short: "{0}/m"
                },
                short: {
                  other: "{0} m"
                }
              },
              "meter-per-second": {
                long: {
                  other: "{0} Meter pro Sekunde"
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
                  one: "{0} Meile",
                  other: "{0} Meilen"
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
                  one: "{0} Meile pro Gallone",
                  other: "{0} Meilen pro Gallone"
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
                  one: "{0} Meile pro Stunde",
                  other: "{0} Meilen pro Stunde"
                },
                narrow: {
                  other: "{0} mi/h"
                },
                perUnit: {},
                short: {
                  other: "{0} mi/h"
                }
              },
              "mile-scandinavian": {
                long: {
                  one: "{0} skandinavische Meile",
                  other: "{0} skandinavische Meilen"
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
                  other: "{0} Milliliter"
                },
                narrow: {
                  other: "{0} ml"
                },
                perUnit: {},
                short: {
                  other: "{0} ml"
                }
              },
              millimeter: {
                long: {
                  other: "{0} Millimeter"
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
                  one: "{0} Millisekunde",
                  other: "{0} Millisekunden"
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
                  one: "{0} Minute",
                  other: "{0} Minuten"
                },
                narrow: {
                  other: "{0} Min."
                },
                perUnit: {
                  long: "{0} pro Minute",
                  narrow: "{0}/min",
                  short: "{0}/min"
                },
                short: {
                  other: "{0} Min."
                }
              },
              month: {
                long: {
                  one: "{0} Monat",
                  other: "{0} Monate"
                },
                narrow: {
                  other: "{0} M"
                },
                perUnit: {
                  long: "{0} pro Monat",
                  narrow: "{0}/M",
                  short: "{0}/M"
                },
                short: {
                  other: "{0} Mon."
                }
              },
              ounce: {
                long: {
                  one: "{0} Unze",
                  other: "{0} Unzen"
                },
                narrow: {
                  other: "{0} oz"
                },
                perUnit: {
                  long: "{0} pro Unze",
                  narrow: "{0}/oz",
                  short: "{0}/oz"
                },
                short: {
                  other: "{0} oz"
                }
              },
              percent: {
                long: {
                  other: "{0} Prozent"
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
                  other: "{0} Petabyte"
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
                  other: "{0} Pfund"
                },
                narrow: {
                  other: "{0} lb"
                },
                perUnit: {
                  long: "{0} pro Pfund",
                  narrow: "{0}/lb",
                  short: "{0}/lb"
                },
                short: {
                  other: "{0} lb"
                }
              },
              second: {
                long: {
                  one: "{0} Sekunde",
                  other: "{0} Sekunden"
                },
                narrow: {
                  other: "{0} Sek."
                },
                perUnit: {
                  long: "{0} pro Sekunde",
                  narrow: "{0}/s",
                  short: "{0}/s"
                },
                short: {
                  other: "{0} Sek."
                }
              },
              stone: {
                long: {
                  one: "{0} Stone",
                  other: "{0} Stones"
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
                  one: "{0} Terabit",
                  other: "{0} Terabit"
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
                  one: "{0} Terabyte",
                  other: "{0} Terabyte"
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
                  one: "{0} Woche",
                  other: "{0} Wochen"
                },
                narrow: {
                  other: "{0} W"
                },
                perUnit: {
                  long: "{0} pro Woche",
                  narrow: "{0}/W",
                  short: "{0}/W"
                },
                short: {
                  other: "{0} Wo."
                }
              },
              yard: {
                long: {
                  one: "{0} Yard",
                  other: "{0} Yards"
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
                  one: "{0} Jahr",
                  other: "{0} Jahre"
                },
                narrow: {
                  other: "{0} J"
                },
                perUnit: {
                  long: "{0} pro Jahr",
                  narrow: "{0}/J",
                  short: "{0}/J"
                },
                short: {
                  other: "{0} J"
                }
              }
            }
          }
        },
        locale: "de"
      })
    }
  }
]);