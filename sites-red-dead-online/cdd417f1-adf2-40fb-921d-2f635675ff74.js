try {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new a.Error).stack;
  e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "cdd417f1-adf2-40fb-921d-2f635675ff74", a._sentryDebugIdIdentifier = "sentry-dbid-cdd417f1-adf2-40fb-921d-2f635675ff74")
} catch (a) {} {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[(new a.Error).stack] = Object.assign({}, a._sentryModuleMetadata[(new a.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [2398], {
    93122: () => {
      Intl.NumberFormat && "function" == typeof Intl.NumberFormat.__addLocaleData && Intl.NumberFormat.__addLocaleData({
        data: {
          currencies: {
            ADP: {
              displayName: {
                few: "pesety andorskie",
                many: "peset andorskich",
                other: "peseta andorska"
              },
              narrow: "ADP",
              symbol: "ADP"
            },
            AED: {
              displayName: {
                few: "dirhamy ZEA",
                many: "dirhamów ZEA",
                one: "dirham ZEA",
                other: "dirhama ZEA"
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
                few: "afgani afgańskie",
                many: "afgani afgańskich",
                one: "afgani afgańskie",
                other: "afgani afgańskiego"
              },
              narrow: "؋",
              symbol: "AFN"
            },
            ALL: {
              displayName: {
                few: "leki albańskie",
                many: "leków albańskich",
                one: "lek albański",
                other: "leka albańskiego"
              },
              narrow: "ALL",
              symbol: "ALL"
            },
            AMD: {
              displayName: {
                few: "dramy armeńskie",
                many: "dramów armeńskich",
                one: "dram armeński",
                other: "drama armeńskiego"
              },
              narrow: "֏",
              symbol: "AMD"
            },
            ANG: {
              displayName: {
                few: "guldeny antylskie",
                many: "guldenów antylskich",
                one: "gulden antylski",
                other: "guldena antylskiego"
              },
              narrow: "ANG",
              symbol: "ANG"
            },
            AOA: {
              displayName: {
                few: "kwanzy angolskie",
                many: "kwanz angolskich",
                one: "kwanza angolska",
                other: "kwanzy angolskiej"
              },
              narrow: "Kz",
              symbol: "AOA"
            },
            AOK: {
              displayName: {
                few: "kwanzy angolańskie (1977–1990)",
                many: "kwanz angolańskich (1977–1990)",
                other: "kwanza angolańska (1977–1990)"
              },
              narrow: "AOK",
              symbol: "AOK"
            },
            AON: {
              displayName: {
                few: "nowe kwanzy angolańskie (1990–2000)",
                many: "nowych kwanz angolańskich (1990–2000)",
                other: "nowa kwanza angolańska (1990–2000)"
              },
              narrow: "AON",
              symbol: "AON"
            },
            AOR: {
              displayName: {
                few: "kwanzy angolańskie Reajustado (1995–1999)",
                many: "kwanz angolańskich Reajustado (1995–1999)",
                other: "kwanza angolańska Reajustado (1995–1999)"
              },
              narrow: "AOR",
              symbol: "AOR"
            },
            ARA: {
              displayName: {
                other: "austral argentyński"
              },
              narrow: "ARA",
              symbol: "ARA"
            },
            ARP: {
              displayName: {
                other: "peso argentyńskie (1983–1985)"
              },
              narrow: "ARP",
              symbol: "ARP"
            },
            ARS: {
              displayName: {
                few: "pesos argentyńskie",
                many: "pesos argentyńskich",
                one: "peso argentyńskie",
                other: "peso argentyńskiego"
              },
              narrow: "$",
              symbol: "ARS"
            },
            ATS: {
              displayName: {
                other: "szyling austriacki"
              },
              narrow: "ATS",
              symbol: "ATS"
            },
            AUD: {
              displayName: {
                few: "dolary australijskie",
                many: "dolarów australijskich",
                one: "dolar australijski",
                other: "dolara australijskiego"
              },
              narrow: "$",
              symbol: "AUD"
            },
            AWG: {
              displayName: {
                few: "floriny arubańskie",
                many: "florinów arubańskich",
                one: "florin arubański",
                other: "florina arubańskiego"
              },
              narrow: "AWG",
              symbol: "AWG"
            },
            AZM: {
              displayName: {
                other: "manat azerbejdżański"
              },
              narrow: "AZM",
              symbol: "AZM"
            },
            AZN: {
              displayName: {
                few: "manaty azerskie",
                many: "manatów azerskich",
                one: "manat azerski",
                other: "manata azerskiego"
              },
              narrow: "₼",
              symbol: "AZN"
            },
            BAD: {
              displayName: {
                other: "dinar Bośni i Hercegowiny"
              },
              narrow: "BAD",
              symbol: "BAD"
            },
            BAM: {
              displayName: {
                few: "marki zamienne Bośni i Hercegowiny",
                many: "marek zamiennych Bośni i Hercegowiny",
                one: "marka zamienna Bośni i Hercegowiny",
                other: "marki zamiennej Bośni i Hercegowiny"
              },
              narrow: "KM",
              symbol: "BAM"
            },
            BBD: {
              displayName: {
                few: "dolary barbadoskie",
                many: "dolarów barbadoskich",
                one: "dolar barbadoski",
                other: "dolara barbadoskiego"
              },
              narrow: "$",
              symbol: "BBD"
            },
            BDT: {
              displayName: {
                few: "taka bengalskie",
                many: "taka bengalskich",
                one: "taka bengalska",
                other: "taka bengalskiej"
              },
              narrow: "৳",
              symbol: "BDT"
            },
            BEC: {
              displayName: {
                few: "franki belgijskie (wymienialne)",
                many: "franków belgijskich (wymienialnych)",
                one: "frank belgijski (wymienialny)",
                other: "frank belgijski (zamienny)"
              },
              narrow: "BEC",
              symbol: "BEC"
            },
            BEF: {
              displayName: {
                other: "frank belgijski"
              },
              narrow: "BEF",
              symbol: "BEF"
            },
            BEL: {
              displayName: {
                other: "frank belgijski (finansowy)"
              },
              narrow: "BEL",
              symbol: "BEL"
            },
            BGL: {
              displayName: {
                few: "lewy bułgarskie wymienne",
                many: "lewów bułgarskich wymiennych",
                one: "lew bułgarski wymienny",
                other: "lewa bułgarskiego wymiennego"
              },
              narrow: "BGL",
              symbol: "BGL"
            },
            BGM: {
              displayName: {
                few: "lewy bułgarskie socjalistyczne",
                many: "lewów bułgarskich socjalistycznych",
                one: "lew bułgarski socjalistyczny",
                other: "lewa bułgarskiego socjalistycznego"
              },
              narrow: "BGM",
              symbol: "BGM"
            },
            BGN: {
              displayName: {
                few: "lewy bułgarskie",
                many: "lewów bułgarskich",
                one: "lew bułgarski",
                other: "lewa bułgarskiego"
              },
              narrow: "BGN",
              symbol: "BGN"
            },
            BGO: {
              displayName: {
                few: "lewy bułgarskie (1879–1952)",
                many: "lewów bułgarskich (1879–1952)",
                one: "lew bułgarski (1879–1952)",
                other: "lewa bułgarskiego (1879–1952)"
              },
              narrow: "BGO",
              symbol: "BGO"
            },
            BHD: {
              displayName: {
                few: "dinary bahrańskie",
                many: "dinarów bahrańskich",
                one: "dinar bahrański",
                other: "dinara bahrańskiego"
              },
              narrow: "BHD",
              symbol: "BHD"
            },
            BIF: {
              displayName: {
                few: "franki burundyjskie",
                many: "franków burundyjskich",
                one: "frank burundyjski",
                other: "franka burundyjskiego"
              },
              narrow: "BIF",
              symbol: "BIF"
            },
            BMD: {
              displayName: {
                few: "dolary bermudzkie",
                many: "dolarów bermudzkich",
                one: "dolar bermudzki",
                other: "dolara bermudzkiego"
              },
              narrow: "$",
              symbol: "BMD"
            },
            BND: {
              displayName: {
                few: "dolary brunejskie",
                many: "dolarów brunejskich",
                one: "dolar brunejski",
                other: "dolara brunejskiego"
              },
              narrow: "$",
              symbol: "BND"
            },
            BOB: {
              displayName: {
                few: "boliviano boliwijskie",
                many: "boliviano boliwijskich",
                one: "boliviano boliwijskie",
                other: "boliviano boliwijskiego"
              },
              narrow: "Bs",
              symbol: "BOB"
            },
            BOP: {
              displayName: {
                other: "peso boliwijskie"
              },
              narrow: "BOP",
              symbol: "BOP"
            },
            BOV: {
              displayName: {
                other: "mvdol boliwijski"
              },
              narrow: "BOV",
              symbol: "BOV"
            },
            BRB: {
              displayName: {
                other: "cruzeiro novo brazylijskie (1967–1986)"
              },
              narrow: "BRB",
              symbol: "BRB"
            },
            BRC: {
              displayName: {
                other: "cruzado brazylijskie"
              },
              narrow: "BRC",
              symbol: "BRC"
            },
            BRE: {
              displayName: {
                other: "cruzeiro brazylijskie (1990–1993)"
              },
              narrow: "BRE",
              symbol: "BRE"
            },
            BRL: {
              displayName: {
                few: "reale brazylijskie",
                many: "reali brazylijskich",
                one: "real brazylijski",
                other: "reala brazylijskiego"
              },
              narrow: "R$",
              symbol: "R$"
            },
            BRN: {
              displayName: {
                other: "nowe cruzado brazylijskie"
              },
              narrow: "BRN",
              symbol: "BRN"
            },
            BRR: {
              displayName: {
                other: "cruzeiro brazylijskie"
              },
              narrow: "BRR",
              symbol: "BRR"
            },
            BSD: {
              displayName: {
                few: "dolary bahamskie",
                many: "dolarów bahamskich",
                one: "dolar bahamski",
                other: "dolara bahamskiego"
              },
              narrow: "$",
              symbol: "BSD"
            },
            BTN: {
              displayName: {
                few: "ngultrum bhutańskie",
                many: "ngultrum bhutańskich",
                one: "ngultrum bhutański",
                other: "ngultrum bhutańskiego"
              },
              narrow: "BTN",
              symbol: "BTN"
            },
            BUK: {
              displayName: {
                other: "kyat birmański"
              },
              narrow: "BUK",
              symbol: "BUK"
            },
            BWP: {
              displayName: {
                few: "pule botswańskie",
                many: "pul botswańskich",
                one: "pula botswańska",
                other: "puli botswańskiej"
              },
              narrow: "P",
              symbol: "BWP"
            },
            BYB: {
              displayName: {
                other: "rubel białoruski (1994–1999)"
              },
              narrow: "BYB",
              symbol: "BYB"
            },
            BYN: {
              displayName: {
                few: "ruble białoruskie",
                many: "rubli białoruskich",
                one: "rubel białoruski",
                other: "rubla białoruskiego"
              },
              narrow: "BYN",
              symbol: "BYN"
            },
            BYR: {
              displayName: {
                few: "ruble białoruskie (2000–2016)",
                many: "rubli białoruskich (2000–2016)",
                one: "rubel białoruski (2000–2016)",
                other: "rubla białoruskiego (2000–2016)"
              },
              narrow: "BYR",
              symbol: "BYR"
            },
            BZD: {
              displayName: {
                few: "dolary belizeńskie",
                many: "dolarów belizeńskich",
                one: "dolar belizeński",
                other: "dolara belizeńskiego"
              },
              narrow: "$",
              symbol: "BZD"
            },
            CAD: {
              displayName: {
                few: "dolary kanadyjskie",
                many: "dolarów kanadyjskich",
                one: "dolar kanadyjski",
                other: "dolara kanadyjskiego"
              },
              narrow: "$",
              symbol: "CAD"
            },
            CDF: {
              displayName: {
                few: "franki kongijskie",
                many: "franków kongijskich",
                one: "frank kongijski",
                other: "franka kongijskiego"
              },
              narrow: "CDF",
              symbol: "CDF"
            },
            CHF: {
              displayName: {
                few: "franki szwajcarskie",
                many: "franków szwajcarskich",
                one: "frank szwajcarski",
                other: "franka szwajcarskiego"
              },
              narrow: "CHF",
              symbol: "CHF"
            },
            CLP: {
              displayName: {
                few: "pesos chilijskie",
                many: "pesos chilijskich",
                one: "peso chilijskie",
                other: "peso chilijskiego"
              },
              narrow: "$",
              symbol: "CLP"
            },
            CNH: {
              displayName: {
                few: "juany chińskie (rynek zewnętrzny)",
                many: "juanów chińskich (rynek zewnętrzny)",
                one: "juan chiński (rynek zewnętrzny)",
                other: "juana chińskiego (rynek zewnętrzny)"
              },
              narrow: "CNH",
              symbol: "CNH"
            },
            CNY: {
              displayName: {
                few: "juany chińskie",
                many: "juanów chińskich",
                one: "juan chiński",
                other: "juana chińskiego"
              },
              narrow: "¥",
              symbol: "CNY"
            },
            COP: {
              displayName: {
                few: "pesos kolumbijskie",
                many: "pesos kolumbijskich",
                one: "peso kolumbijskie",
                other: "peso kolumbijskiego"
              },
              narrow: "$",
              symbol: "COP"
            },
            CRC: {
              displayName: {
                few: "colony kostarykańskie",
                many: "colonów kostarykańskich",
                one: "colon kostarykański",
                other: "colona kostarykańskiego"
              },
              narrow: "₡",
              symbol: "CRC"
            },
            CSD: {
              displayName: {
                other: "stary dinar serbski"
              },
              narrow: "CSD",
              symbol: "CSD"
            },
            CSK: {
              displayName: {
                few: "korony czechosłowackie",
                many: "koron czechosłowackich",
                other: "korona czechosłowacka"
              },
              narrow: "CSK",
              symbol: "CSK"
            },
            CUC: {
              displayName: {
                few: "pesos kubańskie wymienialne",
                many: "pesos kubańskich wymienialnych",
                one: "peso kubańskie wymienialne",
                other: "peso kubańskiego wymienialnego"
              },
              narrow: "$",
              symbol: "CUC"
            },
            CUP: {
              displayName: {
                few: "pesos kubańskie",
                many: "pesos kubańskich",
                one: "peso kubańskie",
                other: "peso kubańskiego"
              },
              narrow: "$",
              symbol: "CUP"
            },
            CVE: {
              displayName: {
                few: "escudo zielonoprzylądkowe",
                many: "escudo zielonoprzylądkowych",
                one: "escudo zielonoprzylądkowe",
                other: "escudo zielonoprzylądkowego"
              },
              narrow: "CVE",
              symbol: "CVE"
            },
            CYP: {
              displayName: {
                other: "funt cypryjski"
              },
              narrow: "CYP",
              symbol: "CYP"
            },
            CZK: {
              displayName: {
                few: "korony czeskie",
                many: "koron czeskich",
                one: "korona czeska",
                other: "korony czeskiej"
              },
              narrow: "Kč",
              symbol: "CZK"
            },
            DDM: {
              displayName: {
                other: "wschodnia marka wschodnioniemiecka"
              },
              narrow: "DDM",
              symbol: "DDM"
            },
            DEM: {
              displayName: {
                few: "marki niemieckie",
                many: "marek niemieckich",
                other: "marka niemiecka"
              },
              narrow: "DEM",
              symbol: "DEM"
            },
            DJF: {
              displayName: {
                few: "franki dżibutyjskie",
                many: "franków dżibutyjskich",
                one: "frank dżibutyjski",
                other: "franka dżibutyjskiego"
              },
              narrow: "DJF",
              symbol: "DJF"
            },
            DKK: {
              displayName: {
                few: "korony duńskie",
                many: "koron duńskich",
                one: "korona duńska",
                other: "korony duńskiej"
              },
              narrow: "kr",
              symbol: "DKK"
            },
            DOP: {
              displayName: {
                few: "pesos dominikańskie",
                many: "pesos dominikańskich",
                one: "peso dominikańskie",
                other: "peso dominikańskiego"
              },
              narrow: "$",
              symbol: "DOP"
            },
            DZD: {
              displayName: {
                few: "dinary algierskie",
                many: "dinarów algierskich",
                one: "dinar algierski",
                other: "dinara algierskiego"
              },
              narrow: "DZD",
              symbol: "DZD"
            },
            ECS: {
              displayName: {
                other: "sucre ekwadorski"
              },
              narrow: "ECS",
              symbol: "ECS"
            },
            EEK: {
              displayName: {
                few: "korony estońskie",
                many: "koron estońskich",
                other: "korona estońska"
              },
              narrow: "EEK",
              symbol: "EEK"
            },
            EGP: {
              displayName: {
                few: "funty egipskie",
                many: "funtów egipskich",
                one: "funt egipski",
                other: "funta egipskiego"
              },
              narrow: "E£",
              symbol: "EGP"
            },
            ERN: {
              displayName: {
                few: "nakfy erytrejskie",
                many: "nakf erytrejskich",
                one: "nakfa erytrejska",
                other: "nakfy erytrejskiej"
              },
              narrow: "ERN",
              symbol: "ERN"
            },
            ESA: {
              displayName: {
                other: "peseta hiszpańska (Konto A)"
              },
              narrow: "ESA",
              symbol: "ESA"
            },
            ESB: {
              displayName: {
                few: "pesety hiszpańskie (konto wymienialne)",
                many: "peset hiszpańskich (konto wymienialne)",
                one: "peseta hiszpańska (konto wymienialne)",
                other: "peseta hiszpańska (konto wymienne)"
              },
              narrow: "ESB",
              symbol: "ESB"
            },
            ESP: {
              displayName: {
                other: "peseta hiszpańska"
              },
              narrow: "₧",
              symbol: "ESP"
            },
            ETB: {
              displayName: {
                few: "birry etiopskie",
                many: "birrów etiopskich",
                one: "birr etiopski",
                other: "birra etiopskiego"
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
                other: "marka fińska"
              },
              narrow: "FIM",
              symbol: "FIM"
            },
            FJD: {
              displayName: {
                few: "dolary fidżyjskie",
                many: "dolarów fidżyjskich",
                one: "dolar fidżyjski",
                other: "dolara fidżyjskiego"
              },
              narrow: "$",
              symbol: "FJD"
            },
            FKP: {
              displayName: {
                few: "funty falklandzkie",
                many: "funtów falklandzkich",
                one: "funt falklandzki",
                other: "funta falklandzkiego"
              },
              narrow: "£",
              symbol: "FKP"
            },
            FRF: {
              displayName: {
                few: "franki francuskie",
                many: "franków francuskich",
                other: "frank francuski"
              },
              narrow: "FRF",
              symbol: "FRF"
            },
            GBP: {
              displayName: {
                few: "funty szterlingi",
                many: "funtów szterlingów",
                one: "funt szterling",
                other: "funta szterlinga"
              },
              narrow: "£",
              symbol: "GBP"
            },
            GEK: {
              displayName: {
                other: "kupon gruziński larit"
              },
              narrow: "GEK",
              symbol: "GEK"
            },
            GEL: {
              displayName: {
                few: "lari gruzińskie",
                many: "lari gruzińskich",
                one: "lari gruzińskie",
                other: "lari gruzińskiego"
              },
              narrow: "₾",
              symbol: "GEL"
            },
            GHC: {
              displayName: {
                other: "cedi ghańskie (1979–2007)"
              },
              narrow: "GHC",
              symbol: "GHC"
            },
            GHS: {
              displayName: {
                few: "cedi ghańskie",
                many: "cedi ghańskich",
                one: "cedi ghańskie",
                other: "cedi ghańskiego"
              },
              narrow: "GH₵",
              symbol: "GHS"
            },
            GIP: {
              displayName: {
                few: "funty gibraltarskie",
                many: "funtów gibraltarskich",
                one: "funt gibraltarski",
                other: "funta gibraltarskiego"
              },
              narrow: "£",
              symbol: "GIP"
            },
            GMD: {
              displayName: {
                few: "dalasi gambijskie",
                many: "dalasi gambijskich",
                one: "dalasi gambijskie",
                other: "dalasi gambijskiego"
              },
              narrow: "GMD",
              symbol: "GMD"
            },
            GNF: {
              displayName: {
                few: "franki gwinejskie",
                many: "franków gwinejskich",
                one: "frank gwinejski",
                other: "franka gwinejskiego"
              },
              narrow: "FG",
              symbol: "GNF"
            },
            GNS: {
              displayName: {
                other: "syli gwinejskie"
              },
              narrow: "GNS",
              symbol: "GNS"
            },
            GQE: {
              displayName: {
                other: "ekwele gwinejskie Gwinei Równikowej"
              },
              narrow: "GQE",
              symbol: "GQE"
            },
            GRD: {
              displayName: {
                other: "drachma grecka"
              },
              narrow: "GRD",
              symbol: "GRD"
            },
            GTQ: {
              displayName: {
                few: "quetzale gwatemalskie",
                many: "quetzali gwatemalskich",
                one: "quetzal gwatemalski",
                other: "quetzala gwatemalskiego"
              },
              narrow: "Q",
              symbol: "GTQ"
            },
            GWE: {
              displayName: {
                other: "escudo Gwinea Portugalska"
              },
              narrow: "GWE",
              symbol: "GWE"
            },
            GWP: {
              displayName: {
                other: "peso Guinea-Bissau"
              },
              narrow: "GWP",
              symbol: "GWP"
            },
            GYD: {
              displayName: {
                few: "dolary gujańskie",
                many: "dolarów gujańskich",
                one: "dolar gujański",
                other: "dolara gujańskiego"
              },
              narrow: "$",
              symbol: "GYD"
            },
            HKD: {
              displayName: {
                few: "dolary hongkońskie",
                many: "dolarów hongkońskich",
                one: "dolar hongkoński",
                other: "dolara hongkońskiego"
              },
              narrow: "$",
              symbol: "HKD"
            },
            HNL: {
              displayName: {
                few: "lempiry honduraskie",
                many: "lempir honduraskich",
                one: "lempira honduraska",
                other: "lempiry honduraskiej"
              },
              narrow: "L",
              symbol: "HNL"
            },
            HRD: {
              displayName: {
                other: "dinar chorwacki"
              },
              narrow: "HRD",
              symbol: "HRD"
            },
            HRK: {
              displayName: {
                few: "kuny chorwackie",
                many: "kun chorwackich",
                one: "kuna chorwacka",
                other: "kuny chorwackiej"
              },
              narrow: "kn",
              symbol: "HRK"
            },
            HTG: {
              displayName: {
                few: "gourde haitańskie",
                many: "gourde haitańskich",
                one: "gourde haitański",
                other: "gourde haitańskiego"
              },
              narrow: "HTG",
              symbol: "HTG"
            },
            HUF: {
              displayName: {
                few: "forinty węgierskie",
                many: "forintów węgierskich",
                one: "forint węgierski",
                other: "forinta węgierskiego"
              },
              narrow: "Ft",
              symbol: "HUF"
            },
            IDR: {
              displayName: {
                few: "rupie indonezyjskie",
                many: "rupii indonezyjskich",
                one: "rupia indonezyjska",
                other: "rupii indonezyjskiej"
              },
              narrow: "Rp",
              symbol: "IDR"
            },
            IEP: {
              displayName: {
                other: "funt irlandzki"
              },
              narrow: "IEP",
              symbol: "IEP"
            },
            ILP: {
              displayName: {
                other: "funt izraelski"
              },
              narrow: "ILP",
              symbol: "ILP"
            },
            ILS: {
              displayName: {
                few: "nowe szekle izraelskie",
                many: "nowych szekli izraelskich",
                one: "nowy szekel izraelski",
                other: "nowego szekla izraelskiego"
              },
              narrow: "₪",
              symbol: "ILS"
            },
            INR: {
              displayName: {
                few: "rupie indyjskie",
                many: "rupii indyjskich",
                one: "rupia indyjska",
                other: "rupii indyjskiej"
              },
              narrow: "₹",
              symbol: "INR"
            },
            IQD: {
              displayName: {
                few: "dinary irackie",
                many: "dinarów irackich",
                one: "dinar iracki",
                other: "dinara irackiego"
              },
              narrow: "IQD",
              symbol: "IQD"
            },
            IRR: {
              displayName: {
                few: "riale irańskie",
                many: "riali irańskich",
                one: "rial irański",
                other: "riala irańskiego"
              },
              narrow: "IRR",
              symbol: "IRR"
            },
            ISK: {
              displayName: {
                few: "korony islandzkie",
                many: "koron islandzkich",
                one: "korona islandzka",
                other: "korony islandzkiej"
              },
              narrow: "kr",
              symbol: "ISK"
            },
            ITL: {
              displayName: {
                other: "lir włoski"
              },
              narrow: "ITL",
              symbol: "ITL"
            },
            JMD: {
              displayName: {
                few: "dolary jamajskie",
                many: "dolarów jamajskich",
                one: "dolar jamajski",
                other: "dolara jamajskiego"
              },
              narrow: "$",
              symbol: "JMD"
            },
            JOD: {
              displayName: {
                few: "dinary jordańskie",
                many: "dinarów jordańskich",
                one: "dinar jordański",
                other: "dinara jordańskiego"
              },
              narrow: "JOD",
              symbol: "JOD"
            },
            JPY: {
              displayName: {
                few: "jeny japońskie",
                many: "jenów japońskich",
                one: "jen japoński",
                other: "jena japońskiego"
              },
              narrow: "¥",
              symbol: "JPY"
            },
            KES: {
              displayName: {
                few: "szylingi kenijskie",
                many: "szylingów kenijskich",
                one: "szyling kenijski",
                other: "szylinga kenijskiego"
              },
              narrow: "KES",
              symbol: "KES"
            },
            KGS: {
              displayName: {
                few: "somy kirgiskie",
                many: "somów kirgiskich",
                one: "som kirgiski",
                other: "soma kirgiskiego"
              },
              narrow: "⃀",
              symbol: "KGS"
            },
            KHR: {
              displayName: {
                few: "riele kambodżańskie",
                many: "rieli kambodżańskich",
                one: "riel kambodżański",
                other: "riela kambodżańskiego"
              },
              narrow: "៛",
              symbol: "KHR"
            },
            KMF: {
              displayName: {
                few: "franki komoryjskie",
                many: "franków komoryjskich",
                one: "frank komoryjski",
                other: "franka komoryjskiego"
              },
              narrow: "CF",
              symbol: "KMF"
            },
            KPW: {
              displayName: {
                few: "wony północnokoreańskie",
                many: "wonów północnokoreańskich",
                one: "won północnokoreański",
                other: "wona północnokoreańskiego"
              },
              narrow: "₩",
              symbol: "KPW"
            },
            KRW: {
              displayName: {
                few: "wony południowokoreańskie",
                many: "wonów południowokoreańskich",
                one: "won południowokoreański",
                other: "wona południowokoreańskiego"
              },
              narrow: "₩",
              symbol: "KRW"
            },
            KWD: {
              displayName: {
                few: "dinary kuwejckie",
                many: "dinarów kuwejckich",
                one: "dinar kuwejcki",
                other: "dinara kuwejckiego"
              },
              narrow: "KWD",
              symbol: "KWD"
            },
            KYD: {
              displayName: {
                few: "dolary kajmańskie",
                many: "dolarów kajmańskich",
                one: "dolar kajmański",
                other: "dolara kajmańskiego"
              },
              narrow: "$",
              symbol: "KYD"
            },
            KZT: {
              displayName: {
                few: "tenge kazachskie",
                many: "tenge kazachskich",
                one: "tenge kazachskie",
                other: "tenge kazachskiego"
              },
              narrow: "₸",
              symbol: "KZT"
            },
            LAK: {
              displayName: {
                few: "kipy laotańskie",
                many: "kipów laotańskich",
                one: "kip laotański",
                other: "kipa laotańskiego"
              },
              narrow: "₭",
              symbol: "LAK"
            },
            LBP: {
              displayName: {
                few: "funty libańskie",
                many: "funtów libańskich",
                one: "funt libański",
                other: "funta libańskiego"
              },
              narrow: "L£",
              symbol: "LBP"
            },
            LKR: {
              displayName: {
                few: "rupie lankijskie",
                many: "rupii lankijskich",
                one: "rupia lankijska",
                other: "rupii lankijskiej"
              },
              narrow: "Rs",
              symbol: "LKR"
            },
            LRD: {
              displayName: {
                few: "dolary liberyjskie",
                many: "dolarów liberyjskich",
                one: "dolar liberyjski",
                other: "dolara liberyjskiego"
              },
              narrow: "$",
              symbol: "LRD"
            },
            LSL: {
              displayName: {
                few: "loti sotyjskie",
                many: "loti sotyjskich",
                one: "loti sotyjskie",
                other: "loti sotyjskiego"
              },
              narrow: "LSL",
              symbol: "LSL"
            },
            LTL: {
              displayName: {
                few: "lity litewskie",
                many: "litów litewskich",
                one: "lit litewski",
                other: "lita litewskiego"
              },
              narrow: "Lt",
              symbol: "LTL"
            },
            LTT: {
              displayName: {
                other: "talon litewski"
              },
              narrow: "LTT",
              symbol: "LTT"
            },
            LUF: {
              displayName: {
                other: "frank luksemburski"
              },
              narrow: "LUF",
              symbol: "LUF"
            },
            LVL: {
              displayName: {
                few: "łaty łotewskie",
                many: "łatów łotewskich",
                one: "łat łotewski",
                other: "łata łotewskiego"
              },
              narrow: "Ls",
              symbol: "LVL"
            },
            LVR: {
              displayName: {
                other: "rubel łotewski"
              },
              narrow: "LVR",
              symbol: "LVR"
            },
            LYD: {
              displayName: {
                few: "dinary libijskie",
                many: "dinarów libijskich",
                one: "dinar libijski",
                other: "dinara libijskiego"
              },
              narrow: "LYD",
              symbol: "LYD"
            },
            MAD: {
              displayName: {
                few: "dirhamy marokańskie",
                many: "dirhamów marokańskich",
                one: "dirham marokański",
                other: "dirhama marokańskiego"
              },
              narrow: "MAD",
              symbol: "MAD"
            },
            MAF: {
              displayName: {
                few: "franki marokańskie",
                many: "franków marokańskich",
                other: "frank marokański"
              },
              narrow: "MAF",
              symbol: "MAF"
            },
            MDL: {
              displayName: {
                few: "leje mołdawskie",
                many: "lejów mołdawskich",
                one: "lej mołdawski",
                other: "leja mołdawskiego"
              },
              narrow: "MDL",
              symbol: "MDL"
            },
            MGA: {
              displayName: {
                few: "ariary malgaskie",
                many: "ariary malgaskich",
                one: "ariary malgaski",
                other: "ariary malgaskiego"
              },
              narrow: "Ar",
              symbol: "MGA"
            },
            MGF: {
              displayName: {
                other: "frank malgaski"
              },
              narrow: "MGF",
              symbol: "MGF"
            },
            MKD: {
              displayName: {
                few: "denary macedońskie",
                many: "denarów macedońskich",
                one: "denar macedoński",
                other: "denara macedońskiego"
              },
              narrow: "MKD",
              symbol: "MKD"
            },
            MLF: {
              displayName: {
                other: "frank malijski"
              },
              narrow: "MLF",
              symbol: "MLF"
            },
            MMK: {
              displayName: {
                few: "kiaty birmańskie",
                many: "kiatów birmańskich",
                one: "kiat birmański",
                other: "kiata birmańskiego"
              },
              narrow: "K",
              symbol: "MMK"
            },
            MNT: {
              displayName: {
                few: "tugriki mongolskie",
                many: "tugrików mongolskich",
                one: "tugrik mongolski",
                other: "tugrika mongolskiego"
              },
              narrow: "₮",
              symbol: "MNT"
            },
            MOP: {
              displayName: {
                other: "pataca Makau"
              },
              narrow: "MOP",
              symbol: "MOP"
            },
            MRO: {
              displayName: {
                few: "ouguiya mauretańskie (1973–2017)",
                many: "ouguiya mauretańskich (1973–2017)",
                one: "ouguiya mauretańska (1973–2017)",
                other: "ouguiya mauretańskiej (1973–2017)"
              },
              narrow: "MRO",
              symbol: "MRO"
            },
            MRU: {
              displayName: {
                few: "ugija mauretańskie",
                many: "ugija mauretańskich",
                one: "ugija mauretańska",
                other: "ugija mauretańskiej"
              },
              narrow: "MRU",
              symbol: "MRU"
            },
            MTL: {
              displayName: {
                other: "lira maltańska"
              },
              narrow: "MTL",
              symbol: "MTL"
            },
            MTP: {
              displayName: {
                other: "funt maltański"
              },
              narrow: "MTP",
              symbol: "MTP"
            },
            MUR: {
              displayName: {
                few: "rupie maurytyjskie",
                many: "rupii maurytyjskich",
                one: "rupia maurytyjska",
                other: "rupii maurytyjskiej"
              },
              narrow: "Rs",
              symbol: "MUR"
            },
            MVR: {
              displayName: {
                few: "rupie malediwskie",
                many: "rupii malediwskich",
                one: "rupia malediwska",
                other: "rupii malediwskiej"
              },
              narrow: "MVR",
              symbol: "MVR"
            },
            MWK: {
              displayName: {
                few: "kwachy malawijskie",
                many: "kwach malawijskich",
                one: "kwacha malawijska",
                other: "kwachy malawijskiej"
              },
              narrow: "MWK",
              symbol: "MWK"
            },
            MXN: {
              displayName: {
                few: "pesos meksykańskie",
                many: "pesos meksykańskich",
                one: "peso meksykańskie",
                other: "peso meksykańskiego"
              },
              narrow: "$",
              symbol: "MXN"
            },
            MXP: {
              displayName: {
                other: "peso srebrne meksykańskie (1861–1992)"
              },
              narrow: "MXP",
              symbol: "MXP"
            },
            MYR: {
              displayName: {
                few: "ringgity malezyjskie",
                many: "ringgitów malezyjskich",
                one: "ringgit malezyjski",
                other: "ringgita malezyjskiego"
              },
              narrow: "RM",
              symbol: "MYR"
            },
            MZE: {
              displayName: {
                other: "escudo mozambickie"
              },
              narrow: "MZE",
              symbol: "MZE"
            },
            MZM: {
              displayName: {
                other: "metical Mozambik"
              },
              narrow: "MZM",
              symbol: "MZM"
            },
            MZN: {
              displayName: {
                few: "meticale mozambickie",
                many: "meticali mozambickich",
                one: "metical mozambicki",
                other: "meticala mozambickiego"
              },
              narrow: "MZN",
              symbol: "MZN"
            },
            NAD: {
              displayName: {
                few: "dolary namibijskie",
                many: "dolarów namibijskich",
                one: "dolar namibijski",
                other: "dolara namibijskiego"
              },
              narrow: "$",
              symbol: "NAD"
            },
            NGN: {
              displayName: {
                few: "nairy nigeryjskie",
                many: "nair nigeryjskich",
                one: "naira nigeryjska",
                other: "nairy nigeryjskiej"
              },
              narrow: "₦",
              symbol: "NGN"
            },
            NIC: {
              displayName: {
                few: "cordoby nikaraguańskie (1988–1991)",
                many: "cordob nikaraguańskich (1988–1991)",
                one: "cordoba nikaraguańska (1988–1991)",
                other: "cordoby nikaraguańskiej (1988–1991)"
              },
              narrow: "NIC",
              symbol: "NIC"
            },
            NIO: {
              displayName: {
                few: "cordoby nikaraguańskie",
                many: "cordob nikaraguańskich",
                one: "cordoba nikaraguańska",
                other: "cordoby nikaraguańskiej"
              },
              narrow: "C$",
              symbol: "NIO"
            },
            NLG: {
              displayName: {
                other: "gulden holenderski"
              },
              narrow: "NLG",
              symbol: "NLG"
            },
            NOK: {
              displayName: {
                few: "korony norweskie",
                many: "koron norweskich",
                one: "korona norweska",
                other: "korony norweskiej"
              },
              narrow: "kr",
              symbol: "NOK"
            },
            NPR: {
              displayName: {
                few: "rupie nepalskie",
                many: "rupii nepalskich",
                one: "rupia nepalska",
                other: "rupii nepalskiej"
              },
              narrow: "Rs",
              symbol: "NPR"
            },
            NZD: {
              displayName: {
                few: "dolary nowozelandzkie",
                many: "dolarów nowozelandzkich",
                one: "dolar nowozelandzki",
                other: "dolara nowozelandzkiego"
              },
              narrow: "$",
              symbol: "NZD"
            },
            OMR: {
              displayName: {
                few: "riale omańskie",
                many: "riali omańskich",
                one: "rial omański",
                other: "riala omańskiego"
              },
              narrow: "OMR",
              symbol: "OMR"
            },
            PAB: {
              displayName: {
                few: "balboa panamskie",
                many: "balboa panamskich",
                one: "balboa panamski",
                other: "balboa panamskiego"
              },
              narrow: "PAB",
              symbol: "PAB"
            },
            PEI: {
              displayName: {
                other: "inti peruwiański"
              },
              narrow: "PEI",
              symbol: "PEI"
            },
            PEN: {
              displayName: {
                few: "sole peruwiańskie",
                many: "soli peruwiańskich",
                one: "sol peruwiański",
                other: "sola peruwiańskiego"
              },
              narrow: "PEN",
              symbol: "PEN"
            },
            PES: {
              displayName: {
                few: "sole peruwiańskie (1863–1965)",
                many: "soli peruwiańskich (1863–1965)",
                one: "sol peruwiański (1863–1965)",
                other: "sola peruwiańskiego (1863–1965)"
              },
              narrow: "PES",
              symbol: "PES"
            },
            PGK: {
              displayName: {
                few: "kina papuaskie",
                many: "kina papuaskich",
                one: "kina papuaska",
                other: "kina papuaskiej"
              },
              narrow: "PGK",
              symbol: "PGK"
            },
            PHP: {
              displayName: {
                few: "pesos filipińskie",
                many: "pesos filipińskich",
                one: "peso filipińskie",
                other: "peso filipińskiego"
              },
              narrow: "₱",
              symbol: "PHP"
            },
            PKR: {
              displayName: {
                few: "rupie pakistańskie",
                many: "rupii pakistańskich",
                one: "rupia pakistańska",
                other: "rupii pakistańskiej"
              },
              narrow: "Rs",
              symbol: "PKR"
            },
            PLN: {
              displayName: {
                few: "złote polskie",
                many: "złotych polskich",
                one: "złoty polski",
                other: "złotego polskiego"
              },
              narrow: "zł",
              symbol: "zł"
            },
            PLZ: {
              displayName: {
                few: "złote polskie (1950–1995)",
                many: "złotych polskich (1950–1995)",
                one: "złoty polski (1950–1995)",
                other: "złotego polskiego (1950–1995)"
              },
              narrow: "PLZ",
              symbol: "PLZ"
            },
            PTE: {
              displayName: {
                other: "escudo portugalskie"
              },
              narrow: "PTE",
              symbol: "PTE"
            },
            PYG: {
              displayName: {
                few: "guarani paragwajskie",
                many: "guarani paragwajskich",
                one: "guarani paragwajskie",
                other: "guarani paragwajskiego"
              },
              narrow: "₲",
              symbol: "PYG"
            },
            QAR: {
              displayName: {
                few: "riale katarskie",
                many: "riali katarskich",
                one: "rial katarski",
                other: "riala katarskiego"
              },
              narrow: "QAR",
              symbol: "QAR"
            },
            RHD: {
              displayName: {
                other: "dolar rodezyjski"
              },
              narrow: "RHD",
              symbol: "RHD"
            },
            ROL: {
              displayName: {
                few: "lei rumuńskie (1952–2006)",
                many: "lei rumuńskich (1952–2006)",
                one: "lej rumuński (1952–2006)",
                other: "leja rumuńskiego (1952–2006)"
              },
              narrow: "ROL",
              symbol: "ROL"
            },
            RON: {
              displayName: {
                few: "leje rumuńskie",
                many: "lejów rumuńskich",
                one: "lej rumuński",
                other: "leja rumuńskiego"
              },
              narrow: "lej",
              symbol: "RON"
            },
            RSD: {
              displayName: {
                few: "dinary serbskie",
                many: "dinarów serbskich",
                one: "dinar serbski",
                other: "dinara serbskiego"
              },
              narrow: "RSD",
              symbol: "RSD"
            },
            RUB: {
              displayName: {
                few: "ruble rosyjskie",
                many: "rubli rosyjskich",
                one: "rubel rosyjski",
                other: "rubla rosyjskiego"
              },
              narrow: "₽",
              symbol: "RUB"
            },
            RUR: {
              displayName: {
                few: "ruble rosyjskie (1991–1998)",
                many: "rubli rosyjskich (1991–1998)",
                one: "rubel rosyjski (1991–1998)",
                other: "rubla rosyjskiego (1991–1998)"
              },
              narrow: "RUR",
              symbol: "RUR"
            },
            RWF: {
              displayName: {
                few: "franki ruandyjskie",
                many: "franków ruandyjskich",
                one: "frank ruandyjski",
                other: "franka ruandyjskiego"
              },
              narrow: "RF",
              symbol: "RWF"
            },
            SAR: {
              displayName: {
                few: "riale saudyjskie",
                many: "riali saudyjskich",
                one: "rial saudyjski",
                other: "riala saudyjskiego"
              },
              narrow: "SAR",
              symbol: "SAR"
            },
            SBD: {
              displayName: {
                few: "dolary Wysp Salomona",
                many: "dolarów Wysp Salomona",
                one: "dolar Wysp Salomona",
                other: "dolara Wysp Salomona"
              },
              narrow: "$",
              symbol: "SBD"
            },
            SCR: {
              displayName: {
                few: "rupie seszelskie",
                many: "rupii seszelskich",
                one: "rupia seszelska",
                other: "rupii seszelskiej"
              },
              narrow: "SCR",
              symbol: "SCR"
            },
            SDD: {
              displayName: {
                other: "dinar sudański"
              },
              narrow: "SDD",
              symbol: "SDD"
            },
            SDG: {
              displayName: {
                few: "funty sudańskie",
                many: "funtów sudańskich",
                one: "funt sudański",
                other: "funta sudańskiego"
              },
              narrow: "SDG",
              symbol: "SDG"
            },
            SDP: {
              displayName: {
                few: "funty sudańskie (1957–1998)",
                many: "funtów sudańskich (1957–1998)",
                one: "funt sudański (1957–1998)",
                other: "funta sudańskiego (1957–1998)"
              },
              narrow: "SDP",
              symbol: "SDP"
            },
            SEK: {
              displayName: {
                few: "korony szwedzkie",
                many: "koron szwedzkich",
                one: "korona szwedzka",
                other: "korony szwedzkiej"
              },
              narrow: "kr",
              symbol: "SEK"
            },
            SGD: {
              displayName: {
                few: "dolary singapurskie",
                many: "dolarów singapurskich",
                one: "dolar singapurski",
                other: "dolara singapurskiego"
              },
              narrow: "$",
              symbol: "SGD"
            },
            SHP: {
              displayName: {
                few: "funty Świętej Heleny",
                many: "funtów Świętej Heleny",
                one: "funt Świętej Heleny",
                other: "funta Świętej Heleny"
              },
              narrow: "£",
              symbol: "SHP"
            },
            SIT: {
              displayName: {
                few: "tolary słoweńskie",
                many: "tolarów słoweńskich",
                other: "tolar słoweński"
              },
              narrow: "SIT",
              symbol: "SIT"
            },
            SKK: {
              displayName: {
                few: "korony słowackie",
                many: "koron słowackich",
                other: "korona słowacka"
              },
              narrow: "SKK",
              symbol: "SKK"
            },
            SLE: {
              displayName: {
                few: "leone sierraleońskie",
                many: "leone sierraleońskich",
                one: "leone sierraleoński",
                other: "leone sierraleońskiego"
              },
              narrow: "SLE",
              symbol: "SLE"
            },
            SLL: {
              displayName: {
                few: "leone sierraleońskie (1964—2022)",
                many: "leone sierraleońskich (1964—2022)",
                one: "leone sierraleoński (1964—2022)",
                other: "leone sierraleońskiego (1964—2022)"
              },
              narrow: "SLL",
              symbol: "SLL"
            },
            SOS: {
              displayName: {
                few: "szylingi somalijskie",
                many: "szylingów somalijskich",
                one: "szyling somalijski",
                other: "szylinga somalijskiego"
              },
              narrow: "SOS",
              symbol: "SOS"
            },
            SRD: {
              displayName: {
                few: "dolary surinamskie",
                many: "dolarów surinamskich",
                one: "dolar surinamski",
                other: "dolara surinamskiego"
              },
              narrow: "$",
              symbol: "SRD"
            },
            SRG: {
              displayName: {
                other: "gulden surinamski"
              },
              narrow: "SRG",
              symbol: "SRG"
            },
            SSP: {
              displayName: {
                few: "funty południowosudańskie",
                many: "funtów południowosudańskich",
                one: "funt południowosudański",
                other: "funta południowosudańskiego"
              },
              narrow: "£",
              symbol: "SSP"
            },
            STD: {
              displayName: {
                many: "dobr Wysp Świętego Tomasza i Książęcej (1977–2017)",
                one: "dobra Wysp Świętego Tomasza i Książęcej (1977–2017)",
                other: "dobry Wysp Świętego Tomasza i Książęcej (1977–2017)"
              },
              narrow: "STD",
              symbol: "STD"
            },
            STN: {
              displayName: {
                many: "dobr Wysp Świętego Tomasza i Książęcej",
                one: "dobra Wysp Świętego Tomasza i Książęcej",
                other: "dobry Wysp Świętego Tomasza i Książęcej"
              },
              narrow: "Db",
              symbol: "STN"
            },
            SUR: {
              displayName: {
                few: "ruble radzieckie",
                many: "rubli radzieckich",
                other: "rubel radziecki"
              },
              narrow: "SUR",
              symbol: "SUR"
            },
            SVC: {
              displayName: {
                other: "colon salwadorski"
              },
              narrow: "SVC",
              symbol: "SVC"
            },
            SYP: {
              displayName: {
                few: "funty syryjskie",
                many: "funtów syryjskich",
                one: "funt syryjski",
                other: "funta syryjskiego"
              },
              narrow: "£",
              symbol: "SYP"
            },
            SZL: {
              displayName: {
                one: "lilangeni Suazi",
                other: "emalangeni Suazi"
              },
              narrow: "SZL",
              symbol: "SZL"
            },
            THB: {
              displayName: {
                few: "bahty tajskie",
                many: "bahtów tajskich",
                one: "baht tajski",
                other: "bahta tajskiego"
              },
              narrow: "฿",
              symbol: "THB"
            },
            TJR: {
              displayName: {
                other: "rubel tadżycki"
              },
              narrow: "TJR",
              symbol: "TJR"
            },
            TJS: {
              displayName: {
                few: "somoni tadżyckie",
                many: "somoni tadżyckich",
                one: "somoni tadżyckie",
                other: "somoni tadżyckiego"
              },
              narrow: "TJS",
              symbol: "TJS"
            },
            TMM: {
              displayName: {
                few: "manaty turkmeńskie (1993–2009)",
                many: "manatów turkmeńskich (1993–2009)",
                one: "manat turkmeński (1993–2009)",
                other: "manata turkmeńskiego (1993–2009)"
              },
              narrow: "TMM",
              symbol: "TMM"
            },
            TMT: {
              displayName: {
                few: "manaty turkmeńskie",
                many: "manatów turkmeńskich",
                one: "manat turkmeński",
                other: "manata turkmeńskiego"
              },
              narrow: "TMT",
              symbol: "TMT"
            },
            TND: {
              displayName: {
                few: "dinary tunezyjskie",
                many: "dinarów tunezyjskich",
                one: "dinar tunezyjski",
                other: "dinara tunezyjskiego"
              },
              narrow: "TND",
              symbol: "TND"
            },
            TOP: {
              displayName: {
                few: "pa’anga tongijskie",
                many: "pa’anga tongijskich",
                one: "pa’anga tongijska",
                other: "pa’anga tongijskiej"
              },
              narrow: "T$",
              symbol: "TOP"
            },
            TPE: {
              displayName: {
                other: "escudo timorskie"
              },
              narrow: "TPE",
              symbol: "TPE"
            },
            TRL: {
              displayName: {
                few: "liry tureckie (1922–2005)",
                many: "lir tureckich (1922–2005)",
                one: "lira turecka (1922–2005)",
                other: "liry tureckiej (1922–2005)"
              },
              narrow: "TRL",
              symbol: "TRL"
            },
            TRY: {
              displayName: {
                few: "liry tureckie",
                many: "lir tureckich",
                one: "lira turecka",
                other: "liry tureckiej"
              },
              narrow: "₺",
              symbol: "TRY"
            },
            TTD: {
              displayName: {
                few: "dolary trynidadzkie",
                many: "dolarów trynidadzkich",
                one: "dolar trynidadzki",
                other: "dolara trynidadzkiego"
              },
              narrow: "$",
              symbol: "TTD"
            },
            TWD: {
              displayName: {
                few: "nowe dolary tajwańskie",
                many: "nowych dolarów tajwańskich",
                one: "nowy dolar tajwański",
                other: "nowego dolara tajwańskiego"
              },
              narrow: "NT$",
              symbol: "TWD"
            },
            TZS: {
              displayName: {
                few: "szylingi tanzańskie",
                many: "szylingów tanzańskich",
                one: "szyling tanzański",
                other: "szylinga tanzańskiego"
              },
              narrow: "TZS",
              symbol: "TZS"
            },
            UAH: {
              displayName: {
                few: "hrywny ukraińskie",
                many: "hrywien ukraińskich",
                one: "hrywna ukraińska",
                other: "hrywny ukraińskiej"
              },
              narrow: "₴",
              symbol: "UAH"
            },
            UAK: {
              displayName: {
                few: "karbowańce ukraińskie",
                many: "karbowańców ukraińskich",
                other: "karbowaniec ukraiński"
              },
              narrow: "UAK",
              symbol: "UAK"
            },
            UGS: {
              displayName: {
                other: "szyling ugandyjski (1966–1987)"
              },
              narrow: "UGS",
              symbol: "UGS"
            },
            UGX: {
              displayName: {
                few: "szylingi ugandyjskie",
                many: "szylingów ugandyjskich",
                one: "szyling ugandyjski",
                other: "szylinga ugandyjskiego"
              },
              narrow: "UGX",
              symbol: "UGX"
            },
            USD: {
              displayName: {
                few: "dolary amerykańskie",
                many: "dolarów amerykańskich",
                one: "dolar amerykański",
                other: "dolara amerykańskiego"
              },
              narrow: "$",
              symbol: "USD"
            },
            UYP: {
              displayName: {
                other: "peso urugwajskie (1975–1993)"
              },
              narrow: "UYP",
              symbol: "UYP"
            },
            UYU: {
              displayName: {
                few: "pesos urugwajskie",
                many: "pesos urugwajskich",
                one: "peso urugwajskie",
                other: "peso urugwajskiego"
              },
              narrow: "$",
              symbol: "UYU"
            },
            UZS: {
              displayName: {
                few: "somy uzbeckie",
                many: "somów uzbeckich",
                one: "som uzbecki",
                other: "soma uzbeckiego"
              },
              narrow: "UZS",
              symbol: "UZS"
            },
            VEB: {
              displayName: {
                few: "boliwary wenezuelskie (1871–2008)",
                many: "boliwarów wenezuelskich (1871–2008)",
                one: "boliwar wenezuelski (1871–2008)",
                other: "boliwary wenezuelskiego (1871–2008)"
              },
              narrow: "VEB",
              symbol: "VEB"
            },
            VEF: {
              displayName: {
                few: "boliwary wenezuelskie (2008–2018)",
                many: "boliwarów wenezuelskich (2008–2018)",
                one: "boliwar wenezuelski (2008–2018)",
                other: "boliwara wenezuelskiego (2008–2018)"
              },
              narrow: "Bs",
              symbol: "VEF"
            },
            VES: {
              displayName: {
                few: "boliwary wenezuelskie",
                many: "boliwarów wenezuelskich",
                one: "boliwar wenezuelski",
                other: "boliwara wenezuelskiego"
              },
              narrow: "VES",
              symbol: "VES"
            },
            VND: {
              displayName: {
                few: "dongi wietnamskie",
                many: "dongów wietnamskich",
                one: "dong wietnamski",
                other: "donga wietnamskiego"
              },
              narrow: "₫",
              symbol: "VND"
            },
            VUV: {
              displayName: {
                few: "vatu wanuackie",
                many: "vatu wanuackich",
                one: "vatu wanuackie",
                other: "vatu wanuackiego"
              },
              narrow: "VUV",
              symbol: "VUV"
            },
            WST: {
              displayName: {
                few: "tala samoańskie",
                many: "tala samoańskich",
                one: "tala samoańskie",
                other: "tala samoańskiego"
              },
              narrow: "WST",
              symbol: "WST"
            },
            XAF: {
              displayName: {
                few: "franki CFA BEAC",
                many: "franków CFA BEAC",
                one: "frank CFA BEAC",
                other: "franka CFA BEAC"
              },
              narrow: "FCFA",
              symbol: "FCFA"
            },
            XAG: {
              displayName: {
                other: "srebro"
              },
              narrow: "XAG",
              symbol: "XAG"
            },
            XAU: {
              displayName: {
                other: "złoto"
              },
              narrow: "XAU",
              symbol: "XAU"
            },
            XBC: {
              displayName: {
                other: "europejska jednostka rozrachunkowa (XBC)"
              },
              narrow: "XBC",
              symbol: "XBC"
            },
            XBD: {
              displayName: {
                other: "europejska jednostka rozrachunkowa (XBD)"
              },
              narrow: "XBD",
              symbol: "XBD"
            },
            XCD: {
              displayName: {
                few: "dolary wschodniokaraibskie",
                many: "dolarów wschodniokaraibskich",
                one: "dolar wschodniokaraibski",
                other: "dolara wschodniokaraibskiego"
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
                other: "specjalne prawa ciągnienia"
              },
              narrow: "XDR",
              symbol: "XDR"
            },
            XEU: {
              displayName: {
                other: "ECU"
              },
              narrow: "XEU",
              symbol: "XEU"
            },
            XFO: {
              displayName: {
                other: "frank złoty francuski"
              },
              narrow: "XFO",
              symbol: "XFO"
            },
            XFU: {
              displayName: {
                other: "UIC-frank francuski"
              },
              narrow: "XFU",
              symbol: "XFU"
            },
            XOF: {
              displayName: {
                few: "franki CFA",
                many: "franków CFA",
                one: "frank CFA",
                other: "franka CFA"
              },
              narrow: "F CFA",
              symbol: "F CFA"
            },
            XPD: {
              displayName: {
                other: "pallad"
              },
              narrow: "XPD",
              symbol: "XPD"
            },
            XPF: {
              displayName: {
                few: "franki CFP",
                many: "franków CFP",
                one: "frank CFP",
                other: "franka CFP"
              },
              narrow: "CFPF",
              symbol: "CFPF"
            },
            XPT: {
              displayName: {
                other: "platyna"
              },
              narrow: "XPT",
              symbol: "XPT"
            },
            XTS: {
              displayName: {
                other: "testowy kod waluty"
              },
              narrow: "XTS",
              symbol: "XTS"
            },
            XXX: {
              displayName: {
                other: "(nieznana waluta)"
              },
              narrow: "¤",
              symbol: "¤"
            },
            YDD: {
              displayName: {
                other: "dinar jemeński"
              },
              narrow: "YDD",
              symbol: "YDD"
            },
            YER: {
              displayName: {
                few: "riale jemeńskie",
                many: "riali jemeńskich",
                one: "rial jemeński",
                other: "riala jemeńskiego"
              },
              narrow: "YER",
              symbol: "YER"
            },
            YUM: {
              displayName: {
                other: "nowy dinar jugosławiański"
              },
              narrow: "YUM",
              symbol: "YUM"
            },
            YUN: {
              displayName: {
                other: "dinar jugosławiański wymienny"
              },
              narrow: "YUN",
              symbol: "YUN"
            },
            ZAL: {
              displayName: {
                other: "rand południowoafrykański (finansowy)"
              },
              narrow: "ZAL",
              symbol: "ZAL"
            },
            ZAR: {
              displayName: {
                few: "randy południowoafrykańskie",
                many: "randów południowoafrykańskich",
                one: "rand południowoafrykański",
                other: "randa południowoafrykańskiego"
              },
              narrow: "R",
              symbol: "ZAR"
            },
            ZMK: {
              displayName: {
                few: "kwacha zambijskie (1968–2012)",
                many: "kwacha zambijskich (1968–2012)",
                one: "kwacha zambijska (1968–2012)",
                other: "kwacha zambijskiej (1968–2012)"
              },
              narrow: "ZMK",
              symbol: "ZMK"
            },
            ZMW: {
              displayName: {
                few: "kwachy zambijskie",
                many: "kwach zambijskich",
                one: "kwacha zambijska",
                other: "kwachy zambijskiej"
              },
              narrow: "ZK",
              symbol: "ZMW"
            },
            ZRN: {
              displayName: {
                other: "nowy zair zairski"
              },
              narrow: "ZRN",
              symbol: "ZRN"
            },
            ZRZ: {
              displayName: {
                other: "zair zairski"
              },
              narrow: "ZRZ",
              symbol: "ZRZ"
            },
            ZWD: {
              displayName: {
                other: "dolar Zimbabwe (1980–2008)"
              },
              narrow: "ZWD",
              symbol: "ZWD"
            },
            ZWL: {
              displayName: {
                other: "dolar Zimbabwe (2009)"
              },
              narrow: "ZWL",
              symbol: "ZWL"
            },
            ZWR: {
              displayName: {
                other: "dolar Zimbabwe (2008)"
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
                    other: "0 tys'.' ¤"
                  },
                  1e4: {
                    other: "00 tys'.' ¤"
                  },
                  1e5: {
                    other: "000 tys'.' ¤"
                  },
                  1e6: {
                    other: "0 mln ¤"
                  },
                  1e7: {
                    other: "00 mln ¤"
                  },
                  1e8: {
                    other: "000 mln ¤"
                  },
                  1e9: {
                    other: "0 mld ¤"
                  },
                  1e10: {
                    other: "00 mld ¤"
                  },
                  1e11: {
                    other: "000 mld ¤"
                  },
                  1e12: {
                    other: "0 bln ¤"
                  },
                  1e13: {
                    other: "00 bln ¤"
                  },
                  1e14: {
                    other: "000 bln ¤"
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
                    few: "0 tysiące",
                    many: "0 tysięcy",
                    one: "0 tysiąc",
                    other: "0 tysiąca"
                  },
                  1e4: {
                    few: "00 tysiące",
                    many: "00 tysięcy",
                    one: "00 tysiąc",
                    other: "00 tysiąca"
                  },
                  1e5: {
                    few: "000 tysiące",
                    many: "000 tysięcy",
                    one: "000 tysiąc",
                    other: "000 tysiąca"
                  },
                  1e6: {
                    few: "0 miliony",
                    many: "0 milionów",
                    one: "0 milion",
                    other: "0 miliona"
                  },
                  1e7: {
                    few: "00 miliony",
                    many: "00 milionów",
                    one: "00 milion",
                    other: "00 miliona"
                  },
                  1e8: {
                    few: "000 miliony",
                    many: "000 milionów",
                    one: "000 milion",
                    other: "000 miliona"
                  },
                  1e9: {
                    few: "0 miliardy",
                    many: "0 miliardów",
                    one: "0 miliard",
                    other: "0 miliarda"
                  },
                  1e10: {
                    few: "00 miliardy",
                    many: "00 miliardów",
                    one: "00 miliard",
                    other: "00 miliarda"
                  },
                  1e11: {
                    few: "000 miliardy",
                    many: "000 miliardów",
                    one: "000 miliard",
                    other: "000 miliarda"
                  },
                  1e12: {
                    few: "0 biliony",
                    many: "0 bilionów",
                    one: "0 bilion",
                    other: "0 biliona"
                  },
                  1e13: {
                    few: "00 biliony",
                    many: "00 bilionów",
                    one: "00 bilion",
                    other: "00 biliona"
                  },
                  1e14: {
                    few: "000 biliony",
                    many: "000 bilionów",
                    one: "000 bilion",
                    other: "000 biliona"
                  }
                },
                short: {
                  1e3: {
                    other: "0 tys'.'"
                  },
                  1e4: {
                    other: "00 tys'.'"
                  },
                  1e5: {
                    other: "000 tys'.'"
                  },
                  1e6: {
                    other: "0 mln"
                  },
                  1e7: {
                    other: "00 mln"
                  },
                  1e8: {
                    other: "000 mln"
                  },
                  1e9: {
                    other: "0 mld"
                  },
                  1e10: {
                    other: "00 mld"
                  },
                  1e11: {
                    other: "000 mld"
                  },
                  1e12: {
                    other: "0 bln"
                  },
                  1e13: {
                    other: "00 bln"
                  },
                  1e14: {
                    other: "000 bln"
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
                group: " ",
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
                long: "{0} na {1}",
                narrow: "{0}/{1}",
                short: "{0}/{1}"
              }
            },
            simple: {
              acre: {
                long: {
                  few: "{0} akry",
                  many: "{0} akrów",
                  one: "{0} akr",
                  other: "{0} akra"
                },
                narrow: {
                  few: "{0} akry",
                  many: "{0} akrów",
                  one: "{0} akr",
                  other: "{0} akra"
                },
                perUnit: {},
                short: {
                  few: "{0} akry",
                  many: "{0} akrów",
                  one: "{0} akr",
                  other: "{0} akra"
                }
              },
              bit: {
                long: {
                  few: "{0} bity",
                  many: "{0} bitów",
                  one: "{0} bit",
                  other: "{0} bita"
                },
                narrow: {
                  other: "{0} b"
                },
                perUnit: {},
                short: {
                  other: "{0} b"
                }
              },
              byte: {
                long: {
                  few: "{0} bajty",
                  many: "{0} bajtów",
                  one: "{0} bajt",
                  other: "{0} bajta"
                },
                narrow: {
                  other: "{0} B"
                },
                perUnit: {},
                short: {
                  other: "{0} B"
                }
              },
              celsius: {
                long: {
                  few: "{0} stopnie Celsjusza",
                  many: "{0} stopni Celsjusza",
                  one: "{0} stopień Celsjusza",
                  other: "{0} stopnia Celsjusza"
                },
                narrow: {
                  other: "{0}°C"
                },
                perUnit: {},
                short: {
                  other: "{0} st. C"
                }
              },
              centimeter: {
                long: {
                  few: "{0} centymetry",
                  many: "{0} centymetrów",
                  one: "{0} centymetr",
                  other: "{0} centymetra"
                },
                narrow: {
                  other: "{0} cm"
                },
                perUnit: {
                  long: "{0} na centymetr",
                  narrow: "{0}/cm",
                  short: "{0}/cm"
                },
                short: {
                  other: "{0} cm"
                }
              },
              day: {
                long: {
                  few: "{0} dni",
                  many: "{0} dni",
                  one: "{0} dzień",
                  other: "{0} dnia"
                },
                narrow: {
                  other: "{0} d."
                },
                perUnit: {
                  long: "{0} na dobę",
                  narrow: "{0}/d.",
                  short: "{0}/dobę"
                },
                short: {
                  few: "{0} dni",
                  many: "{0} dni",
                  one: "{0} dzień",
                  other: "{0} dnia"
                }
              },
              degree: {
                long: {
                  few: "{0} stopnie",
                  many: "{0} stopni",
                  one: "{0} stopień",
                  other: "{0} stopnia"
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
                  few: "{0} stopnie Fahrenheita",
                  many: "{0} stopni Fahrenheita",
                  one: "{0} stopień Fahrenheita",
                  other: "{0} stopnia Fahrenheita"
                },
                narrow: {
                  other: "{0}°F"
                },
                perUnit: {},
                short: {
                  other: "{0}°F"
                }
              },
              "fluid-ounce": {
                long: {
                  few: "{0} uncje płynu amerykańskie",
                  many: "{0} uncji płynu amerykańskich",
                  one: "{0} uncja płynu amerykańska",
                  other: "{0} uncji płynu amerykańskiej"
                },
                narrow: {
                  other: "{0} fl oz am."
                },
                perUnit: {},
                short: {
                  other: "{0} fl oz am."
                }
              },
              foot: {
                long: {
                  many: "{0} stóp",
                  one: "{0} stopa",
                  other: "{0} stopy"
                },
                narrow: {
                  other: "{0} ft"
                },
                perUnit: {
                  long: "{0} na stopę",
                  narrow: "{0}/ft",
                  short: "{0}/ft"
                },
                short: {
                  other: "{0} ft"
                }
              },
              gallon: {
                long: {
                  few: "{0} galony amerykańskie",
                  many: "{0} galonów amerykańskich",
                  one: "{0} galon amerykański",
                  other: "{0} galona amerykańskiego"
                },
                narrow: {
                  other: "{0} gal am."
                },
                perUnit: {
                  long: "{0} na galon amerykański",
                  narrow: "{0}/gal am.",
                  short: "{0}/gal am."
                },
                short: {
                  other: "{0} gal am."
                }
              },
              gigabit: {
                long: {
                  few: "{0} gigabity",
                  many: "{0} gigabitów",
                  one: "{0} gigabit",
                  other: "{0} gigabita"
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
                  few: "{0} gigabajty",
                  many: "{0} gigabajtów",
                  one: "{0} gigabajt",
                  other: "{0} gigabajta"
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
                  few: "{0} gramy",
                  many: "{0} gramów",
                  one: "{0} gram",
                  other: "{0} grama"
                },
                narrow: {
                  other: "{0} g"
                },
                perUnit: {
                  long: "{0} na gram",
                  narrow: "{0}/g",
                  short: "{0}/g"
                },
                short: {
                  other: "{0} g"
                }
              },
              hectare: {
                long: {
                  few: "{0} hektary",
                  many: "{0} hektarów",
                  one: "{0} hektar",
                  other: "{0} hektara"
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
                  many: "{0} godzin",
                  one: "{0} godzina",
                  other: "{0} godziny"
                },
                narrow: {
                  other: "{0} h"
                },
                perUnit: {
                  long: "{0} na godzinę",
                  narrow: "{0}/h",
                  short: "{0}/godz."
                },
                short: {
                  other: "{0} godz."
                }
              },
              inch: {
                long: {
                  few: "{0} cale",
                  many: "{0} cali",
                  one: "{0} cal",
                  other: "{0} cala"
                },
                narrow: {
                  other: "{0}″"
                },
                perUnit: {
                  long: "{0} na cal",
                  narrow: "{0}/cal",
                  short: "{0}/cal"
                },
                short: {
                  few: "{0} cale",
                  many: "{0} cali",
                  one: "{0} cal",
                  other: "{0} cala"
                }
              },
              kilobit: {
                long: {
                  few: "{0} kilobity",
                  many: "{0} kilobitów",
                  one: "{0} kilobit",
                  other: "{0} kilobita"
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
                  few: "{0} kilobajty",
                  many: "{0} kilobajtów",
                  one: "{0} kilobajt",
                  other: "{0} kilobajta"
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
                  few: "{0} kilogramy",
                  many: "{0} kilogramów",
                  one: "{0} kilogram",
                  other: "{0} kilograma"
                },
                narrow: {
                  other: "{0} kg"
                },
                perUnit: {
                  long: "{0} na kilogram",
                  narrow: "{0}/kg",
                  short: "{0}/kg"
                },
                short: {
                  other: "{0} kg"
                }
              },
              kilometer: {
                long: {
                  few: "{0} kilometry",
                  many: "{0} kilometrów",
                  one: "{0} kilometr",
                  other: "{0} kilometra"
                },
                narrow: {
                  other: "{0} km"
                },
                perUnit: {
                  long: "{0} na kilometr",
                  narrow: "{0}/km",
                  short: "{0}/km"
                },
                short: {
                  other: "{0} km"
                }
              },
              "kilometer-per-hour": {
                long: {
                  few: "{0} kilometry na godzinę",
                  many: "{0} kilometrów na godzinę",
                  one: "{0} kilometr na godzinę",
                  other: "{0} kilometra na godzinę"
                },
                narrow: {
                  few: "{0} km/h",
                  many: "{0} km/h",
                  one: "{0} km/h",
                  other: "{0}km/h"
                },
                perUnit: {},
                short: {
                  other: "{0} km/godz."
                }
              },
              liter: {
                long: {
                  few: "{0} litry",
                  many: "{0} litrów",
                  one: "{0} litr",
                  other: "{0} litra"
                },
                narrow: {
                  other: "{0} l"
                },
                perUnit: {
                  long: "{0} na litr",
                  narrow: "{0}/l",
                  short: "{0}/l"
                },
                short: {
                  other: "{0} l"
                }
              },
              "liter-per-kilometer": {
                long: {
                  few: "{0} litry na kilometr",
                  many: "{0} litrów na kilometr",
                  one: "{0} litr na kilometr",
                  other: "{0} litra na kilometr"
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
                  few: "{0} megabity",
                  many: "{0} megabitów",
                  one: "{0} megabit",
                  other: "{0} megabita"
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
                  few: "{0} megabajty",
                  many: "{0} megabajtów",
                  one: "{0} megabajt",
                  other: "{0} megabajta"
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
                  few: "{0} metry",
                  many: "{0} metrów",
                  one: "{0} metr",
                  other: "{0} metra"
                },
                narrow: {
                  other: "{0} m"
                },
                perUnit: {
                  long: "{0} na metr",
                  narrow: "{0}/m",
                  short: "{0}/m"
                },
                short: {
                  other: "{0} m"
                }
              },
              "meter-per-second": {
                long: {
                  few: "{0} metry na sekundę",
                  many: "{0} metrów na sekundę",
                  one: "{0} metr na sekundę",
                  other: "{0} metra na sekundę"
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
                  few: "{0} mile",
                  many: "{0} mil",
                  one: "{0} mila",
                  other: "{0} mili"
                },
                narrow: {
                  few: "{0} mile",
                  many: "{0} mil",
                  one: "{0} mila",
                  other: "{0} mili"
                },
                perUnit: {},
                short: {
                  few: "{0} mile",
                  many: "{0} mil",
                  one: "{0} mila",
                  other: "{0} mili"
                }
              },
              "mile-per-gallon": {
                long: {
                  few: "{0} mile na galon",
                  many: "{0} mil na galon",
                  one: "{0} mila na galon",
                  other: "{0} mili na galon"
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
                  few: "{0} mile na godzinę",
                  many: "{0} mil na godzinę",
                  one: "{0} mila na godzinę",
                  other: "{0} mili na godzinę"
                },
                narrow: {
                  other: "{0} mph"
                },
                perUnit: {},
                short: {
                  few: "{0} mile/h",
                  many: "{0} mil/h",
                  one: "{0} mila/h",
                  other: "{0} mili/h"
                }
              },
              "mile-scandinavian": {
                long: {
                  few: "{0} mile skandynawskie",
                  many: "{0} mil skandynawskich",
                  one: "{0} mila skandynawska",
                  other: "{0} mili skandynawskiej"
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
                  few: "{0} mililitry",
                  many: "{0} mililitrów",
                  one: "{0} mililitr",
                  other: "{0} mililitra"
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
                  few: "{0} milimetry",
                  many: "{0} milimetrów",
                  one: "{0} milimetr",
                  other: "{0} milimetra"
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
                  many: "{0} milisekund",
                  one: "{0} milisekunda",
                  other: "{0} milisekundy"
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
                  many: "{0} minut",
                  one: "{0} minuta",
                  other: "{0} minuty"
                },
                narrow: {
                  other: "{0} min"
                },
                perUnit: {
                  long: "{0} na minutę",
                  narrow: "{0}/min",
                  short: "{0}/min"
                },
                short: {
                  other: "{0} min"
                }
              },
              month: {
                long: {
                  few: "{0} miesiące",
                  many: "{0} miesięcy",
                  one: "{0} miesiąc",
                  other: "{0} miesiąca"
                },
                narrow: {
                  few: "{0} m-ce",
                  many: "{0} m-cy",
                  one: "{0} m-c",
                  other: "{0} m-ca"
                },
                perUnit: {
                  long: "{0} na miesiąc",
                  narrow: "{0}/m-c",
                  short: "{0}/mies."
                },
                short: {
                  other: "{0} mies."
                }
              },
              ounce: {
                long: {
                  few: "{0} uncje",
                  one: "{0} uncja",
                  other: "{0} uncji"
                },
                narrow: {
                  other: "{0} oz"
                },
                perUnit: {
                  long: "{0} na uncję",
                  narrow: "{0}/oz",
                  short: "{0}/oz"
                },
                short: {
                  other: "{0} oz"
                }
              },
              percent: {
                long: {
                  other: "{0} procent"
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
                  few: "{0} petabajty",
                  many: "{0} petabajtów",
                  one: "{0} petabajt",
                  other: "{0} petabajta"
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
                  few: "{0} funty",
                  many: "{0} funtów",
                  one: "{0} funt",
                  other: "{0} funta"
                },
                narrow: {
                  few: "{0} funty",
                  many: "{0} funtów",
                  one: "{0} funt",
                  other: "{0} funta"
                },
                perUnit: {
                  long: "{0} na funt",
                  narrow: "{0}/funt",
                  short: "{0}/funt"
                },
                short: {
                  few: "{0} funty",
                  many: "{0} funtów",
                  one: "{0} funt",
                  other: "{0} funta"
                }
              },
              second: {
                long: {
                  many: "{0} sekund",
                  one: "{0} sekunda",
                  other: "{0} sekundy"
                },
                narrow: {
                  other: "{0} s"
                },
                perUnit: {
                  long: "{0} na sekundę",
                  narrow: "{0}/s",
                  short: "{0}/s"
                },
                short: {
                  other: "{0} sek."
                }
              },
              stone: {
                long: {
                  few: "{0} kamienie",
                  many: "{0} kamieni",
                  one: "{0} kamień",
                  other: "{0} kamienia"
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
                  few: "{0} terabity",
                  many: "{0} terabitów",
                  one: "{0} terabit",
                  other: "{0} terabita"
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
                  few: "{0} terabajty",
                  many: "{0} terabajtów",
                  one: "{0} terabajt",
                  other: "{0} terabajta"
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
                  few: "{0} tygodnie",
                  many: "{0} tygodni",
                  one: "{0} tydzień",
                  other: "{0} tygodnia"
                },
                narrow: {
                  other: "{0} t."
                },
                perUnit: {
                  long: "{0} na tydzień",
                  narrow: "{0}/t.",
                  short: "{0}/tydz."
                },
                short: {
                  one: "{0} tydz.",
                  other: "{0} tyg."
                }
              },
              yard: {
                long: {
                  few: "{0} jardy",
                  many: "{0} jardów",
                  one: "{0} jard",
                  other: "{0} jarda"
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
                  few: "{0} lata",
                  many: "{0} lat",
                  one: "{0} rok",
                  other: "{0} roku"
                },
                narrow: {
                  few: "{0} l.",
                  many: "{0} l.",
                  other: "{0} r."
                },
                perUnit: {
                  long: "{0} na rok",
                  narrow: "{0}/rok",
                  short: "{0}/rok"
                },
                short: {
                  few: "{0} lata",
                  many: "{0} lat",
                  one: "{0} rok",
                  other: "{0} roku"
                }
              }
            }
          }
        },
        locale: "pl"
      })
    }
  }
]);