try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "366825a5-53b2-4621-b64e-c3eb1f6b1036", o._sentryDebugIdIdentifier = "sentry-dbid-366825a5-53b2-4621-b64e-c3eb1f6b1036")
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
  [3697], {
    48559: () => {
      Intl.NumberFormat && "function" == typeof Intl.NumberFormat.__addLocaleData && Intl.NumberFormat.__addLocaleData({
        data: {
          currencies: {
            ADP: {
              displayName: {
                few: "андоррские песеты",
                one: "андоррская песета",
                other: "андоррских песет"
              },
              narrow: "ADP",
              symbol: "ADP"
            },
            AED: {
              displayName: {
                many: "дирхамов ОАЭ",
                one: "дирхам ОАЭ",
                other: "дирхама ОАЭ"
              },
              narrow: "AED",
              symbol: "AED"
            },
            AFA: {
              displayName: {
                other: "Афгани (1927–2002)"
              },
              narrow: "AFA",
              symbol: "AFA"
            },
            AFN: {
              displayName: {
                other: "афгани"
              },
              narrow: "؋",
              symbol: "AFN"
            },
            ALL: {
              displayName: {
                few: "албанских лека",
                many: "албанских леков",
                one: "албанский лек",
                other: "албанского лека"
              },
              narrow: "ALL",
              symbol: "ALL"
            },
            AMD: {
              displayName: {
                few: "армянских драма",
                many: "армянских драмов",
                one: "армянский драм",
                other: "армянского драма"
              },
              narrow: "֏",
              symbol: "AMD"
            },
            ANG: {
              displayName: {
                few: "нидерландских антильских гульдена",
                many: "нидерландских антильских гульденов",
                one: "нидерландский антильский гульден",
                other: "нидерландского антильского гульдена"
              },
              narrow: "ANG",
              symbol: "ANG"
            },
            AOA: {
              displayName: {
                few: "ангольские кванзы",
                many: "ангольских кванз",
                one: "ангольская кванза",
                other: "ангольской кванзы"
              },
              narrow: "Kz",
              symbol: "AOA"
            },
            AOK: {
              displayName: {
                few: "ангольские кванзы (1977–1991)",
                other: "ангольских кванз (1977–1991)"
              },
              narrow: "AOK",
              symbol: "AOK"
            },
            AON: {
              displayName: {
                other: "Ангольская новая кванза (1990–2000)"
              },
              narrow: "AON",
              symbol: "AON"
            },
            AOR: {
              displayName: {
                few: "ангольские кванзы реюстадо (1995–1999)",
                other: "ангольских кванз реюстадо (1995–1999)"
              },
              narrow: "AOR",
              symbol: "AOR"
            },
            ARA: {
              displayName: {
                other: "Аргентинский аустрал"
              },
              narrow: "ARA",
              symbol: "ARA"
            },
            ARP: {
              displayName: {
                other: "Аргентинское песо (1983–1985)"
              },
              narrow: "ARP",
              symbol: "ARP"
            },
            ARS: {
              displayName: {
                few: "аргентинских песо",
                many: "аргентинских песо",
                one: "аргентинский песо",
                other: "аргентинского песо"
              },
              narrow: "$",
              symbol: "ARS"
            },
            ATS: {
              displayName: {
                other: "Австрийский шиллинг"
              },
              narrow: "ATS",
              symbol: "ATS"
            },
            AUD: {
              displayName: {
                few: "австралийских доллара",
                many: "австралийских долларов",
                one: "австралийский доллар",
                other: "австралийского доллара"
              },
              narrow: "$",
              symbol: "A$"
            },
            AWG: {
              displayName: {
                few: "арубанских флорина",
                many: "арубанских флоринов",
                one: "арубанский флорин",
                other: "арубанского флорина"
              },
              narrow: "AWG",
              symbol: "AWG"
            },
            AZM: {
              displayName: {
                other: "Старый азербайджанский манат"
              },
              narrow: "AZM",
              symbol: "AZM"
            },
            AZN: {
              displayName: {
                few: "азербайджанских маната",
                many: "азербайджанских манатов",
                one: "азербайджанский манат",
                other: "азербайджанского маната"
              },
              narrow: "₼",
              symbol: "AZN"
            },
            BAD: {
              displayName: {
                other: "Динар Боснии и Герцеговины"
              },
              narrow: "BAD",
              symbol: "BAD"
            },
            BAM: {
              displayName: {
                few: "конвертируемые марки Боснии и Герцеговины",
                many: "конвертируемых марок Боснии и Герцеговины",
                one: "конвертируемая марка Боснии и Герцеговины",
                other: "конвертируемой марки Боснии и Герцеговины"
              },
              narrow: "KM",
              symbol: "BAM"
            },
            BBD: {
              displayName: {
                few: "барбадосских доллара",
                many: "барбадосских долларов",
                one: "барбадосский доллар",
                other: "барбадосского доллара"
              },
              narrow: "$",
              symbol: "BBD"
            },
            BDT: {
              displayName: {
                few: "бангладешские таки",
                many: "бангладешских так",
                one: "бангладешская така",
                other: "бангладешской таки"
              },
              narrow: "৳",
              symbol: "BDT"
            },
            BEC: {
              displayName: {
                other: "Бельгийский франк (конвертируемый)"
              },
              narrow: "BEC",
              symbol: "BEC"
            },
            BEF: {
              displayName: {
                other: "Бельгийский франк"
              },
              narrow: "BEF",
              symbol: "BEF"
            },
            BEL: {
              displayName: {
                other: "Бельгийский франк (финансовый)"
              },
              narrow: "BEL",
              symbol: "BEL"
            },
            BGL: {
              displayName: {
                other: "Лев"
              },
              narrow: "BGL",
              symbol: "BGL"
            },
            BGN: {
              displayName: {
                few: "болгарских лева",
                many: "болгарских левов",
                one: "болгарский лев",
                other: "болгарского лева"
              },
              narrow: "BGN",
              symbol: "BGN"
            },
            BHD: {
              displayName: {
                few: "бахрейнских динара",
                many: "бахрейнских динаров",
                one: "бахрейнский динар",
                other: "бахрейнского динара"
              },
              narrow: "BHD",
              symbol: "BHD"
            },
            BIF: {
              displayName: {
                few: "бурундийских франка",
                many: "бурундийских франков",
                one: "бурундийский франк",
                other: "бурундийского франка"
              },
              narrow: "BIF",
              symbol: "BIF"
            },
            BMD: {
              displayName: {
                few: "бермудских доллара",
                many: "бермудских долларов",
                one: "бермудский доллар",
                other: "бермудского доллара"
              },
              narrow: "$",
              symbol: "BMD"
            },
            BND: {
              displayName: {
                few: "брунейских доллара",
                many: "брунейских долларов",
                one: "брунейский доллар",
                other: "брунейского доллара"
              },
              narrow: "$",
              symbol: "BND"
            },
            BOB: {
              displayName: {
                few: "боливийских боливиано",
                many: "боливийских боливиано",
                one: "боливийский боливиано",
                other: "боливийского боливиано"
              },
              narrow: "Bs",
              symbol: "BOB"
            },
            BOP: {
              displayName: {
                other: "Боливийское песо"
              },
              narrow: "BOP",
              symbol: "BOP"
            },
            BOV: {
              displayName: {
                other: "Боливийский мвдол"
              },
              narrow: "BOV",
              symbol: "BOV"
            },
            BRB: {
              displayName: {
                other: "Бразильский новый крузейро (1967–1986)"
              },
              narrow: "BRB",
              symbol: "BRB"
            },
            BRC: {
              displayName: {
                other: "Бразильское крузадо"
              },
              narrow: "BRC",
              symbol: "BRC"
            },
            BRE: {
              displayName: {
                other: "Бразильский крузейро (1990–1993)"
              },
              narrow: "BRE",
              symbol: "BRE"
            },
            BRL: {
              displayName: {
                few: "бразильских реала",
                many: "бразильских реалов",
                one: "бразильский реал",
                other: "бразильского реала"
              },
              narrow: "R$",
              symbol: "R$"
            },
            BRN: {
              displayName: {
                other: "Бразильское новое крузадо"
              },
              narrow: "BRN",
              symbol: "BRN"
            },
            BRR: {
              displayName: {
                other: "Бразильский крузейро"
              },
              narrow: "BRR",
              symbol: "BRR"
            },
            BSD: {
              displayName: {
                few: "багамских доллара",
                many: "багамских долларов",
                one: "багамский доллар",
                other: "багамского доллара"
              },
              narrow: "$",
              symbol: "BSD"
            },
            BTN: {
              displayName: {
                few: "бутанских нгултрума",
                many: "бутанских нгултрумов",
                one: "бутанский нгултрум",
                other: "бутанского нгултрума"
              },
              narrow: "BTN",
              symbol: "BTN"
            },
            BUK: {
              displayName: {
                other: "Джа"
              },
              narrow: "BUK",
              symbol: "BUK"
            },
            BWP: {
              displayName: {
                few: "ботсванские пулы",
                many: "ботсванских пул",
                one: "ботсванская пула",
                other: "ботсванской пулы"
              },
              narrow: "P",
              symbol: "BWP"
            },
            BYB: {
              displayName: {
                other: "Белорусский рубль (1994–1999)"
              },
              narrow: "BYB",
              symbol: "BYB"
            },
            BYN: {
              displayName: {
                few: "белорусских рубля",
                many: "белорусских рублей",
                one: "белорусский рубль",
                other: "белорусского рубля"
              },
              narrow: "р.",
              symbol: "BYN"
            },
            BYR: {
              displayName: {
                few: "белорусских рубля (2000–2016)",
                many: "белорусских рублей (2000–2016)",
                one: "белорусский рубль (2000–2016)",
                other: "белорусского рубля (2000–2016)"
              },
              narrow: "BYR",
              symbol: "BYR"
            },
            BZD: {
              displayName: {
                few: "белизских доллара",
                many: "белизских долларов",
                one: "белизский доллар",
                other: "белизского доллара"
              },
              narrow: "$",
              symbol: "BZD"
            },
            CAD: {
              displayName: {
                few: "канадских доллара",
                many: "канадских долларов",
                one: "канадский доллар",
                other: "канадского доллара"
              },
              narrow: "$",
              symbol: "CA$"
            },
            CDF: {
              displayName: {
                few: "конголезских франка",
                many: "конголезских франков",
                one: "конголезский франк",
                other: "конголезского франка"
              },
              narrow: "CDF",
              symbol: "CDF"
            },
            CHE: {
              displayName: {
                other: "WIR евро"
              },
              narrow: "CHE",
              symbol: "CHE"
            },
            CHF: {
              displayName: {
                few: "швейцарских франка",
                many: "швейцарских франков",
                one: "швейцарский франк",
                other: "швейцарского франка"
              },
              narrow: "CHF",
              symbol: "CHF"
            },
            CHW: {
              displayName: {
                other: "WIR франк"
              },
              narrow: "CHW",
              symbol: "CHW"
            },
            CLF: {
              displayName: {
                other: "Условная расчетная единица Чили"
              },
              narrow: "CLF",
              symbol: "CLF"
            },
            CLP: {
              displayName: {
                few: "чилийских песо",
                many: "чилийских песо",
                one: "чилийский песо",
                other: "чилийского песо"
              },
              narrow: "$",
              symbol: "CLP"
            },
            CNH: {
              displayName: {
                few: "китайских офшорных юаня",
                many: "китайских офшорных юаней",
                one: "китайский офшорный юань",
                other: "китайского офшорного юаня"
              },
              narrow: "CNH",
              symbol: "CNH"
            },
            CNY: {
              displayName: {
                few: "китайских юаня",
                many: "китайских юаней",
                one: "китайский юань",
                other: "китайского юаня"
              },
              narrow: "¥",
              symbol: "CN¥"
            },
            COP: {
              displayName: {
                few: "колумбийских песо",
                many: "колумбийских песо",
                one: "колумбийский песо",
                other: "колумбийского песо"
              },
              narrow: "$",
              symbol: "COP"
            },
            COU: {
              displayName: {
                other: "Единица реальной стоимости Колумбии"
              },
              narrow: "COU",
              symbol: "COU"
            },
            CRC: {
              displayName: {
                few: "костариканских колона",
                many: "костариканских колонов",
                one: "костариканский колон",
                other: "костариканского колона"
              },
              narrow: "₡",
              symbol: "CRC"
            },
            CSD: {
              displayName: {
                other: "Старый Сербский динар"
              },
              narrow: "CSD",
              symbol: "CSD"
            },
            CSK: {
              displayName: {
                other: "Чехословацкая твердая крона"
              },
              narrow: "CSK",
              symbol: "CSK"
            },
            CUC: {
              displayName: {
                few: "кубинских конвертируемых песо",
                many: "кубинских конвертируемых песо",
                one: "кубинский конвертируемый песо",
                other: "кубинского конвертируемого песо"
              },
              narrow: "$",
              symbol: "CUC"
            },
            CUP: {
              displayName: {
                few: "кубинских песо",
                many: "кубинских песо",
                one: "кубинский песо",
                other: "кубинского песо"
              },
              narrow: "$",
              symbol: "CUP"
            },
            CVE: {
              displayName: {
                other: "эскудо Кабо-Верде"
              },
              narrow: "CVE",
              symbol: "CVE"
            },
            CYP: {
              displayName: {
                other: "Кипрский фунт"
              },
              narrow: "CYP",
              symbol: "CYP"
            },
            CZK: {
              displayName: {
                few: "чешские кроны",
                many: "чешских крон",
                one: "чешская крона",
                other: "чешской кроны"
              },
              narrow: "Kč",
              symbol: "CZK"
            },
            DDM: {
              displayName: {
                other: "Восточногерманская марка"
              },
              narrow: "DDM",
              symbol: "DDM"
            },
            DEM: {
              displayName: {
                other: "Немецкая марка"
              },
              narrow: "DEM",
              symbol: "DEM"
            },
            DJF: {
              displayName: {
                many: "франков Джибути",
                one: "франк Джибути",
                other: "франка Джибути"
              },
              narrow: "DJF",
              symbol: "DJF"
            },
            DKK: {
              displayName: {
                few: "датские кроны",
                many: "датских крон",
                one: "датская крона",
                other: "датской кроны"
              },
              narrow: "kr",
              symbol: "DKK"
            },
            DOP: {
              displayName: {
                few: "доминиканских песо",
                many: "доминиканских песо",
                one: "доминиканский песо",
                other: "доминиканского песо"
              },
              narrow: "$",
              symbol: "DOP"
            },
            DZD: {
              displayName: {
                few: "алжирских динара",
                many: "алжирских динаров",
                one: "алжирский динар",
                other: "алжирского динара"
              },
              narrow: "DZD",
              symbol: "DZD"
            },
            ECS: {
              displayName: {
                other: "Эквадорский сукре"
              },
              narrow: "ECS",
              symbol: "ECS"
            },
            ECV: {
              displayName: {
                other: "Постоянная единица стоимости Эквадора"
              },
              narrow: "ECV",
              symbol: "ECV"
            },
            EEK: {
              displayName: {
                other: "Эстонская крона"
              },
              narrow: "EEK",
              symbol: "EEK"
            },
            EGP: {
              displayName: {
                few: "египетских фунта",
                many: "египетских фунтов",
                one: "египетский фунт",
                other: "египетского фунта"
              },
              narrow: "E£",
              symbol: "EGP"
            },
            ERN: {
              displayName: {
                few: "эритрейские накфы",
                many: "эритрейских накф",
                one: "эритрейская накфа",
                other: "эритрейской накфы"
              },
              narrow: "ERN",
              symbol: "ERN"
            },
            ESA: {
              displayName: {
                other: "Испанская песета (А)"
              },
              narrow: "ESA",
              symbol: "ESA"
            },
            ESB: {
              displayName: {
                other: "Испанская песета (конвертируемая)"
              },
              narrow: "ESB",
              symbol: "ESB"
            },
            ESP: {
              displayName: {
                other: "Испанская песета"
              },
              narrow: "₧",
              symbol: "ESP"
            },
            ETB: {
              displayName: {
                few: "эфиопских быра",
                many: "эфиопских быров",
                one: "эфиопский быр",
                other: "эфиопского быра"
              },
              narrow: "ETB",
              symbol: "ETB"
            },
            EUR: {
              displayName: {
                other: "евро"
              },
              narrow: "€",
              symbol: "€"
            },
            FIM: {
              displayName: {
                other: "Финская марка"
              },
              narrow: "FIM",
              symbol: "FIM"
            },
            FJD: {
              displayName: {
                many: "долларов Фиджи",
                one: "доллар Фиджи",
                other: "доллара Фиджи"
              },
              narrow: "$",
              symbol: "FJD"
            },
            FKP: {
              displayName: {
                many: "фунтов Фолклендских островов",
                one: "фунт Фолклендских островов",
                other: "фунта Фолклендских островов"
              },
              narrow: "£",
              symbol: "FKP"
            },
            FRF: {
              displayName: {
                other: "Французский франк"
              },
              narrow: "FRF",
              symbol: "FRF"
            },
            GBP: {
              displayName: {
                few: "британских фунта стерлингов",
                many: "британских фунтов стерлингов",
                one: "британский фунт стерлингов",
                other: "британского фунта стерлингов"
              },
              narrow: "£",
              symbol: "£"
            },
            GEK: {
              displayName: {
                other: "Грузинский купон"
              },
              narrow: "GEK",
              symbol: "GEK"
            },
            GEL: {
              displayName: {
                few: "грузинских лари",
                many: "грузинских лари",
                one: "грузинский лари",
                other: "грузинского лари"
              },
              narrow: "ლ",
              symbol: "GEL"
            },
            GHC: {
              displayName: {
                other: "Ганский седи (1979–2007)"
              },
              narrow: "GHC",
              symbol: "GHC"
            },
            GHS: {
              displayName: {
                few: "ганских седи",
                many: "ганских седи",
                one: "ганский седи",
                other: "ганского седи"
              },
              narrow: "GH₵",
              symbol: "GHS"
            },
            GIP: {
              displayName: {
                few: "гибралтарских фунта",
                many: "гибралтарских фунтов",
                one: "гибралтарский фунт",
                other: "гибралтарского фунта"
              },
              narrow: "£",
              symbol: "GIP"
            },
            GMD: {
              displayName: {
                few: "гамбийских даласи",
                many: "гамбийских даласи",
                one: "гамбийский даласи",
                other: "гамбийского даласи"
              },
              narrow: "GMD",
              symbol: "GMD"
            },
            GNF: {
              displayName: {
                few: "гвинейских франка",
                many: "гвинейских франков",
                one: "гвинейский франк",
                other: "гвинейского франка"
              },
              narrow: "FG",
              symbol: "GNF"
            },
            GNS: {
              displayName: {
                other: "Гвинейская сили"
              },
              narrow: "GNS",
              symbol: "GNS"
            },
            GQE: {
              displayName: {
                other: "Эквеле экваториальной Гвинеи"
              },
              narrow: "GQE",
              symbol: "GQE"
            },
            GRD: {
              displayName: {
                other: "Греческая драхма"
              },
              narrow: "GRD",
              symbol: "GRD"
            },
            GTQ: {
              displayName: {
                few: "гватемальских кетсаля",
                many: "гватемальских кетсалей",
                one: "гватемальский кетсаль",
                other: "гватемальского кетсаля"
              },
              narrow: "Q",
              symbol: "GTQ"
            },
            GWE: {
              displayName: {
                other: "Эскудо Португальской Гвинеи"
              },
              narrow: "GWE",
              symbol: "GWE"
            },
            GWP: {
              displayName: {
                other: "Песо Гвинеи-Бисау"
              },
              narrow: "GWP",
              symbol: "GWP"
            },
            GYD: {
              displayName: {
                few: "гайанских доллара",
                many: "гайанских долларов",
                one: "гайанский доллар",
                other: "гайанского доллара"
              },
              narrow: "$",
              symbol: "GYD"
            },
            HKD: {
              displayName: {
                few: "гонконгских доллара",
                many: "гонконгских долларов",
                one: "гонконгский доллар",
                other: "гонконгского доллара"
              },
              narrow: "$",
              symbol: "HK$"
            },
            HNL: {
              displayName: {
                few: "гондурасские лемпиры",
                many: "гондурасских лемпир",
                one: "гондурасская лемпира",
                other: "гондурасской лемпиры"
              },
              narrow: "L",
              symbol: "HNL"
            },
            HRD: {
              displayName: {
                other: "Хорватский динар"
              },
              narrow: "HRD",
              symbol: "HRD"
            },
            HRK: {
              displayName: {
                few: "хорватские куны",
                many: "хорватских кун",
                one: "хорватская куна",
                other: "хорватской куны"
              },
              narrow: "kn",
              symbol: "HRK"
            },
            HTG: {
              displayName: {
                few: "гаитянских гурда",
                many: "гаитянских гурдов",
                one: "гаитянский гурд",
                other: "гаитянского гурда"
              },
              narrow: "HTG",
              symbol: "HTG"
            },
            HUF: {
              displayName: {
                few: "венгерских форинта",
                many: "венгерских форинтов",
                one: "венгерский форинт",
                other: "венгерского форинта"
              },
              narrow: "Ft",
              symbol: "HUF"
            },
            IDR: {
              displayName: {
                few: "индонезийские рупии",
                many: "индонезийских рупий",
                one: "индонезийская рупия",
                other: "индонезийской рупии"
              },
              narrow: "Rp",
              symbol: "IDR"
            },
            IEP: {
              displayName: {
                other: "Ирландский фунт"
              },
              narrow: "IEP",
              symbol: "IEP"
            },
            ILP: {
              displayName: {
                other: "Израильский фунт"
              },
              narrow: "ILP",
              symbol: "ILP"
            },
            ILS: {
              displayName: {
                few: "новых израильских шекеля",
                many: "новых израильских шекелей",
                one: "новый израильский шекель",
                other: "нового израильского шекеля"
              },
              narrow: "₪",
              symbol: "₪"
            },
            INR: {
              displayName: {
                few: "индийские рупии",
                many: "индийских рупий",
                one: "индийская рупия",
                other: "индийской рупии"
              },
              narrow: "₹",
              symbol: "₹"
            },
            IQD: {
              displayName: {
                few: "иракских динара",
                many: "иракских динаров",
                one: "иракский динар",
                other: "иракского динара"
              },
              narrow: "IQD",
              symbol: "IQD"
            },
            IRR: {
              displayName: {
                few: "иранских риала",
                many: "иранских риалов",
                one: "иранский риал",
                other: "иранского риала"
              },
              narrow: "IRR",
              symbol: "IRR"
            },
            ISK: {
              displayName: {
                few: "исландские кроны",
                many: "исландских крон",
                one: "исландская крона",
                other: "исландской кроны"
              },
              narrow: "kr",
              symbol: "ISK"
            },
            ITL: {
              displayName: {
                other: "Итальянская лира"
              },
              narrow: "ITL",
              symbol: "ITL"
            },
            JMD: {
              displayName: {
                few: "ямайских доллара",
                many: "ямайских долларов",
                one: "ямайский доллар",
                other: "ямайского доллара"
              },
              narrow: "$",
              symbol: "JMD"
            },
            JOD: {
              displayName: {
                few: "иорданских динара",
                many: "иорданских динаров",
                one: "иорданский динар",
                other: "иорданского динара"
              },
              narrow: "JOD",
              symbol: "JOD"
            },
            JPY: {
              displayName: {
                few: "японские иены",
                many: "японских иен",
                one: "японская иена",
                other: "японской иены"
              },
              narrow: "¥",
              symbol: "¥"
            },
            KES: {
              displayName: {
                few: "кенийских шиллинга",
                many: "кенийских шиллингов",
                one: "кенийский шиллинг",
                other: "кенийского шиллинга"
              },
              narrow: "KES",
              symbol: "KES"
            },
            KGS: {
              displayName: {
                few: "киргизских сома",
                many: "киргизских сомов",
                one: "киргизский сом",
                other: "киргизского сома"
              },
              narrow: "⃀",
              symbol: "KGS"
            },
            KHR: {
              displayName: {
                few: "камбоджийских риеля",
                many: "камбоджийских риелей",
                one: "камбоджийский риель",
                other: "камбоджийского риеля"
              },
              narrow: "៛",
              symbol: "KHR"
            },
            KMF: {
              displayName: {
                few: "коморских франка",
                many: "коморских франков",
                one: "коморский франк",
                other: "коморского франка"
              },
              narrow: "CF",
              symbol: "KMF"
            },
            KPW: {
              displayName: {
                few: "северокорейские воны",
                many: "северокорейских вон",
                one: "северокорейская вона",
                other: "северокорейской воны"
              },
              narrow: "₩",
              symbol: "KPW"
            },
            KRW: {
              displayName: {
                few: "южнокорейские воны",
                many: "южнокорейских вон",
                one: "южнокорейская вона",
                other: "южнокорейской воны"
              },
              narrow: "₩",
              symbol: "₩"
            },
            KWD: {
              displayName: {
                few: "кувейтских динара",
                many: "кувейтских динаров",
                one: "кувейтский динар",
                other: "кувейтского динара"
              },
              narrow: "KWD",
              symbol: "KWD"
            },
            KYD: {
              displayName: {
                many: "долларов Островов Кайман",
                one: "доллар Островов Кайман",
                other: "доллара Островов Кайман"
              },
              narrow: "$",
              symbol: "KYD"
            },
            KZT: {
              displayName: {
                few: "казахских тенге",
                many: "казахских тенге",
                one: "казахский тенге",
                other: "казахского тенге"
              },
              narrow: "₸",
              symbol: "KZT"
            },
            LAK: {
              displayName: {
                few: "лаосских кипа",
                many: "лаосских кипов",
                one: "лаосский кип",
                other: "лаосского кипа"
              },
              narrow: "₭",
              symbol: "LAK"
            },
            LBP: {
              displayName: {
                few: "ливанских фунта",
                many: "ливанских фунтов",
                one: "ливанский фунт",
                other: "ливанского фунта"
              },
              narrow: "L£",
              symbol: "LBP"
            },
            LKR: {
              displayName: {
                few: "шри-ланкийские рупии",
                many: "шри-ланкийских рупий",
                one: "шри-ланкийская рупия",
                other: "шри-ланкийской рупии"
              },
              narrow: "Rs",
              symbol: "LKR"
            },
            LRD: {
              displayName: {
                few: "либерийских доллара",
                many: "либерийских долларов",
                one: "либерийский доллар",
                other: "либерийского доллара"
              },
              narrow: "$",
              symbol: "LRD"
            },
            LSL: {
              displayName: {
                other: "лоти"
              },
              narrow: "LSL",
              symbol: "LSL"
            },
            LTL: {
              displayName: {
                few: "литовских лита",
                many: "литовских литов",
                one: "литовский лит",
                other: "литовского лита"
              },
              narrow: "Lt",
              symbol: "LTL"
            },
            LTT: {
              displayName: {
                other: "Литовский талон"
              },
              narrow: "LTT",
              symbol: "LTT"
            },
            LUC: {
              displayName: {
                other: "Конвертируемый франк Люксембурга"
              },
              narrow: "LUC",
              symbol: "LUC"
            },
            LUF: {
              displayName: {
                other: "Люксембургский франк"
              },
              narrow: "LUF",
              symbol: "LUF"
            },
            LUL: {
              displayName: {
                other: "Финансовый франк Люксембурга"
              },
              narrow: "LUL",
              symbol: "LUL"
            },
            LVL: {
              displayName: {
                few: "латвийских лата",
                many: "латвийских латов",
                one: "латвийский лат",
                other: "латвийского лата"
              },
              narrow: "Ls",
              symbol: "LVL"
            },
            LVR: {
              displayName: {
                other: "Латвийский рубль"
              },
              narrow: "LVR",
              symbol: "LVR"
            },
            LYD: {
              displayName: {
                few: "ливийских динара",
                many: "ливийских динаров",
                one: "ливийский динар",
                other: "ливийского динара"
              },
              narrow: "LYD",
              symbol: "LYD"
            },
            MAD: {
              displayName: {
                few: "марокканских дирхама",
                many: "марокканских дирхамов",
                one: "марокканский дирхам",
                other: "марокканского дирхама"
              },
              narrow: "MAD",
              symbol: "MAD"
            },
            MAF: {
              displayName: {
                other: "Марокканский франк"
              },
              narrow: "MAF",
              symbol: "MAF"
            },
            MDL: {
              displayName: {
                few: "молдавских лея",
                many: "молдавских леев",
                one: "молдавский лей",
                other: "молдавского лея"
              },
              narrow: "MDL",
              symbol: "MDL"
            },
            MGA: {
              displayName: {
                few: "малагасийских ариари",
                many: "малагасийских ариари",
                one: "малагасийский ариари",
                other: "малагасийского ариари"
              },
              narrow: "Ar",
              symbol: "MGA"
            },
            MGF: {
              displayName: {
                other: "Малагасийский франк"
              },
              narrow: "MGF",
              symbol: "MGF"
            },
            MKD: {
              displayName: {
                few: "македонских денара",
                many: "македонских денаров",
                one: "македонский денар",
                other: "македонского денара"
              },
              narrow: "MKD",
              symbol: "MKD"
            },
            MLF: {
              displayName: {
                other: "Малийский франк"
              },
              narrow: "MLF",
              symbol: "MLF"
            },
            MMK: {
              displayName: {
                few: "мьянманских кьята",
                many: "мьянманских кьятов",
                one: "мьянманский кьят",
                other: "мьянманского кьята"
              },
              narrow: "K",
              symbol: "MMK"
            },
            MNT: {
              displayName: {
                few: "монгольских тугрика",
                many: "монгольских тугриков",
                one: "монгольский тугрик",
                other: "монгольского тугрика"
              },
              narrow: "₮",
              symbol: "MNT"
            },
            MOP: {
              displayName: {
                many: "патак Макао",
                one: "патака Макао",
                other: "патаки Макао"
              },
              narrow: "MOP",
              symbol: "MOP"
            },
            MRO: {
              displayName: {
                few: "мавританские угии (1973–2017)",
                many: "мавританских угий (1973–2017)",
                one: "мавританская угия (1973–2017)",
                other: "мавританской угии (1973–2017)"
              },
              narrow: "MRO",
              symbol: "MRO"
            },
            MRU: {
              displayName: {
                few: "мавританские угии",
                many: "мавританских угий",
                one: "мавританская угия",
                other: "мавританской угии"
              },
              narrow: "MRU",
              symbol: "MRU"
            },
            MTL: {
              displayName: {
                other: "Мальтийская лира"
              },
              narrow: "MTL",
              symbol: "MTL"
            },
            MTP: {
              displayName: {
                other: "Мальтийский фунт"
              },
              narrow: "MTP",
              symbol: "MTP"
            },
            MUR: {
              displayName: {
                few: "маврикийские рупии",
                many: "маврикийских рупий",
                one: "маврикийская рупия",
                other: "маврикийской рупии"
              },
              narrow: "Rs",
              symbol: "MUR"
            },
            MVR: {
              displayName: {
                few: "мальдивские руфии",
                many: "мальдивских руфий",
                one: "мальдивская руфия",
                other: "мальдивской руфии"
              },
              narrow: "MVR",
              symbol: "MVR"
            },
            MWK: {
              displayName: {
                few: "малавийские квачи",
                many: "малавийских квач",
                one: "малавийская квача",
                other: "малавийской квачи"
              },
              narrow: "MWK",
              symbol: "MWK"
            },
            MXN: {
              displayName: {
                few: "мексиканских песо",
                many: "мексиканских песо",
                one: "мексиканский песо",
                other: "мексиканского песо"
              },
              narrow: "$",
              symbol: "MX$"
            },
            MXP: {
              displayName: {
                other: "Мексиканское серебряное песо (1861–1992)"
              },
              narrow: "MXP",
              symbol: "MXP"
            },
            MXV: {
              displayName: {
                other: "Мексиканская пересчетная единица (UDI)"
              },
              narrow: "MXV",
              symbol: "MXV"
            },
            MYR: {
              displayName: {
                few: "малайзийских ринггита",
                many: "малайзийских ринггитов",
                one: "малайзийский ринггит",
                other: "малайзийского ринггита"
              },
              narrow: "RM",
              symbol: "MYR"
            },
            MZE: {
              displayName: {
                other: "Мозамбикское эскудо"
              },
              narrow: "MZE",
              symbol: "MZE"
            },
            MZM: {
              displayName: {
                other: "Старый мозамбикский метикал"
              },
              narrow: "MZM",
              symbol: "MZM"
            },
            MZN: {
              displayName: {
                few: "мозамбикских метикала",
                many: "мозамбикских метикалов",
                one: "мозамбикский метикал",
                other: "мозамбикского метикала"
              },
              narrow: "MZN",
              symbol: "MZN"
            },
            NAD: {
              displayName: {
                many: "долларов Намибии",
                one: "доллар Намибии",
                other: "доллара Намибии"
              },
              narrow: "$",
              symbol: "NAD"
            },
            NGN: {
              displayName: {
                few: "нигерийские найры",
                many: "нигерийских найр",
                one: "нигерийская найра",
                other: "нигерийской найры"
              },
              narrow: "₦",
              symbol: "NGN"
            },
            NIC: {
              displayName: {
                other: "Никарагуанская кордоба (1988–1991)"
              },
              narrow: "NIC",
              symbol: "NIC"
            },
            NIO: {
              displayName: {
                few: "никарагуанские кордобы",
                many: "никарагуанских кордоб",
                one: "никарагуанская кордоба",
                other: "никарагуанской кордобы"
              },
              narrow: "C$",
              symbol: "NIO"
            },
            NLG: {
              displayName: {
                other: "Нидерландский гульден"
              },
              narrow: "NLG",
              symbol: "NLG"
            },
            NOK: {
              displayName: {
                few: "норвежские кроны",
                many: "норвежских крон",
                one: "норвежская крона",
                other: "норвежской кроны"
              },
              narrow: "kr",
              symbol: "NOK"
            },
            NPR: {
              displayName: {
                few: "непальские рупии",
                many: "непальских рупий",
                one: "непальская рупия",
                other: "непальской рупии"
              },
              narrow: "Rs",
              symbol: "NPR"
            },
            NZD: {
              displayName: {
                few: "новозеландских доллара",
                many: "новозеландских долларов",
                one: "новозеландский доллар",
                other: "новозеландского доллара"
              },
              narrow: "$",
              symbol: "NZ$"
            },
            OMR: {
              displayName: {
                few: "оманских риала",
                many: "оманских риалов",
                one: "оманский риал",
                other: "оманского риала"
              },
              narrow: "OMR",
              symbol: "OMR"
            },
            PAB: {
              displayName: {
                few: "панамских бальбоа",
                many: "панамских бальбоа",
                one: "панамский бальбоа",
                other: "панамского бальбоа"
              },
              narrow: "PAB",
              symbol: "PAB"
            },
            PEI: {
              displayName: {
                other: "Перуанское инти"
              },
              narrow: "PEI",
              symbol: "PEI"
            },
            PEN: {
              displayName: {
                few: "перуанских соля",
                many: "перуанских солей",
                one: "перуанский соль",
                other: "перуанского соля"
              },
              narrow: "PEN",
              symbol: "PEN"
            },
            PES: {
              displayName: {
                few: "перуанских соля (1863–1965)",
                many: "перуанских солей (1863–1965)",
                one: "перуанский соль (1863–1965)",
                other: "перуанского соля (1863–1965)"
              },
              narrow: "PES",
              symbol: "PES"
            },
            PGK: {
              displayName: {
                many: "кин Папуа – Новой Гвинеи",
                one: "кина Папуа – Новой Гвинеи",
                other: "кины Папуа – Новой Гвинеи"
              },
              narrow: "PGK",
              symbol: "PGK"
            },
            PHP: {
              displayName: {
                few: "филиппинских песо",
                many: "филиппинских песо",
                one: "филиппинский песо",
                other: "филиппинского песо"
              },
              narrow: "₱",
              symbol: "PHP"
            },
            PKR: {
              displayName: {
                few: "пакистанские рупии",
                many: "пакистанских рупий",
                one: "пакистанская рупия",
                other: "пакистанской рупии"
              },
              narrow: "Rs",
              symbol: "PKR"
            },
            PLN: {
              displayName: {
                few: "польских злотых",
                many: "польских злотых",
                one: "польский злотый",
                other: "польского злотого"
              },
              narrow: "zł",
              symbol: "PLN"
            },
            PLZ: {
              displayName: {
                other: "Злотый"
              },
              narrow: "PLZ",
              symbol: "PLZ"
            },
            PTE: {
              displayName: {
                other: "Португальское эскудо"
              },
              narrow: "PTE",
              symbol: "PTE"
            },
            PYG: {
              displayName: {
                few: "парагвайских гуарани",
                many: "парагвайских гуарани",
                one: "парагвайский гуарани",
                other: "парагвайского гуарани"
              },
              narrow: "₲",
              symbol: "PYG"
            },
            QAR: {
              displayName: {
                few: "катарских риала",
                many: "катарских риалов",
                one: "катарский риал",
                other: "катарского риала"
              },
              narrow: "QAR",
              symbol: "QAR"
            },
            RHD: {
              displayName: {
                other: "Родезийский доллар"
              },
              narrow: "RHD",
              symbol: "RHD"
            },
            ROL: {
              displayName: {
                other: "Старый Румынский лей"
              },
              narrow: "ROL",
              symbol: "ROL"
            },
            RON: {
              displayName: {
                few: "румынских лея",
                many: "румынских леев",
                one: "румынский лей",
                other: "румынского лея"
              },
              narrow: "L",
              symbol: "RON"
            },
            RSD: {
              displayName: {
                few: "сербских динара",
                many: "сербских динаров",
                one: "сербский динар",
                other: "сербского динара"
              },
              narrow: "RSD",
              symbol: "RSD"
            },
            RUB: {
              displayName: {
                few: "российских рубля",
                many: "российских рублей",
                one: "российский рубль",
                other: "российского рубля"
              },
              narrow: "₽",
              symbol: "₽"
            },
            RUR: {
              displayName: {
                other: "Российский рубль (1991–1998)"
              },
              narrow: "р.",
              symbol: "р."
            },
            RWF: {
              displayName: {
                many: "франков Руанды",
                one: "франк Руанды",
                other: "франка Руанды"
              },
              narrow: "RF",
              symbol: "RWF"
            },
            SAR: {
              displayName: {
                few: "саудовских рияла",
                many: "саудовских риялов",
                one: "саудовский риял",
                other: "саудовского рияла"
              },
              narrow: "SAR",
              symbol: "SAR"
            },
            SBD: {
              displayName: {
                many: "долларов Соломоновых Островов",
                one: "доллар Соломоновых Островов",
                other: "доллара Соломоновых Островов"
              },
              narrow: "$",
              symbol: "SBD"
            },
            SCR: {
              displayName: {
                few: "сейшельские рупии",
                many: "сейшельских рупий",
                one: "сейшельская рупия",
                other: "сейшельской рупии"
              },
              narrow: "SCR",
              symbol: "SCR"
            },
            SDD: {
              displayName: {
                other: "Суданский динар"
              },
              narrow: "SDD",
              symbol: "SDD"
            },
            SDG: {
              displayName: {
                few: "суданских фунта",
                many: "суданских фунтов",
                one: "суданский фунт",
                other: "суданского фунта"
              },
              narrow: "SDG",
              symbol: "SDG"
            },
            SDP: {
              displayName: {
                other: "Старый суданский фунт"
              },
              narrow: "SDP",
              symbol: "SDP"
            },
            SEK: {
              displayName: {
                few: "шведские кроны",
                many: "шведских крон",
                one: "шведская крона",
                other: "шведской кроны"
              },
              narrow: "kr",
              symbol: "SEK"
            },
            SGD: {
              displayName: {
                few: "сингапурских доллара",
                many: "сингапурских долларов",
                one: "сингапурский доллар",
                other: "сингапурского доллара"
              },
              narrow: "$",
              symbol: "SGD"
            },
            SHP: {
              displayName: {
                many: "фунтов острова Святой Елены",
                one: "фунт острова Святой Елены",
                other: "фунта острова Святой Елены"
              },
              narrow: "£",
              symbol: "SHP"
            },
            SIT: {
              displayName: {
                other: "Словенский толар"
              },
              narrow: "SIT",
              symbol: "SIT"
            },
            SKK: {
              displayName: {
                other: "Словацкая крона"
              },
              narrow: "SKK",
              symbol: "SKK"
            },
            SLE: {
              displayName: {
                other: "леоне"
              },
              narrow: "SLE",
              symbol: "SLE"
            },
            SLL: {
              displayName: {
                other: "леоне (1964—2022)"
              },
              narrow: "SLL",
              symbol: "SLL"
            },
            SOS: {
              displayName: {
                few: "сомалийских шиллинга",
                many: "сомалийских шиллингов",
                one: "сомалийский шиллинг",
                other: "сомалийского шиллинга"
              },
              narrow: "SOS",
              symbol: "SOS"
            },
            SRD: {
              displayName: {
                few: "суринамских доллара",
                many: "суринамских долларов",
                one: "суринамский доллар",
                other: "суринамского доллара"
              },
              narrow: "$",
              symbol: "SRD"
            },
            SRG: {
              displayName: {
                other: "Суринамский гульден"
              },
              narrow: "SRG",
              symbol: "SRG"
            },
            SSP: {
              displayName: {
                few: "южносуданских фунта",
                many: "южносуданских фунтов",
                one: "южносуданский фунт",
                other: "южносуданского фунта"
              },
              narrow: "£",
              symbol: "SSP"
            },
            STD: {
              displayName: {
                many: "добр Сан-Томе и Принсипи (1977–2017)",
                one: "добра Сан-Томе и Принсипи (1977–2017)",
                other: "добры Сан-Томе и Принсипи (1977–2017)"
              },
              narrow: "STD",
              symbol: "STD"
            },
            STN: {
              displayName: {
                many: "добр Сан-Томе и Принсипи",
                one: "добра Сан-Томе и Принсипи",
                other: "добры Сан-Томе и Принсипи"
              },
              narrow: "Db",
              symbol: "STN"
            },
            SUR: {
              displayName: {
                other: "Рубль СССР"
              },
              narrow: "SUR",
              symbol: "SUR"
            },
            SVC: {
              displayName: {
                other: "Сальвадорский колон"
              },
              narrow: "SVC",
              symbol: "SVC"
            },
            SYP: {
              displayName: {
                few: "сирийских фунта",
                many: "сирийских фунтов",
                one: "сирийский фунт",
                other: "сирийского фунта"
              },
              narrow: "£",
              symbol: "SYP"
            },
            SZL: {
              displayName: {
                few: "свазилендских лилангени",
                many: "свазилендских лилангени",
                one: "свазилендский лилангени",
                other: "свазилендского лилангени"
              },
              narrow: "SZL",
              symbol: "SZL"
            },
            THB: {
              displayName: {
                few: "таиландских бата",
                many: "таиландских батов",
                one: "таиландский бат",
                other: "таиландского бата"
              },
              narrow: "฿",
              symbol: "฿"
            },
            TJR: {
              displayName: {
                other: "Таджикский рубль"
              },
              narrow: "TJR",
              symbol: "TJR"
            },
            TJS: {
              displayName: {
                few: "таджикских сомони",
                many: "таджикских сомони",
                one: "таджикский сомони",
                other: "таджикского сомони"
              },
              narrow: "TJS",
              symbol: "TJS"
            },
            TMM: {
              displayName: {
                other: "Туркменский манат"
              },
              narrow: "TMM",
              symbol: "TMM"
            },
            TMT: {
              displayName: {
                few: "новых туркменских маната",
                many: "новых туркменских манатов",
                one: "новый туркменский манат",
                other: "нового туркменского маната"
              },
              narrow: "ТМТ",
              symbol: "ТМТ"
            },
            TND: {
              displayName: {
                few: "тунисских динара",
                many: "тунисских динаров",
                one: "тунисский динар",
                other: "тунисского динара"
              },
              narrow: "TND",
              symbol: "TND"
            },
            TOP: {
              displayName: {
                few: "тонганские паанги",
                many: "тонганских паанг",
                one: "тонганская паанга",
                other: "тонганской паанги"
              },
              narrow: "T$",
              symbol: "TOP"
            },
            TPE: {
              displayName: {
                other: "Тиморское эскудо"
              },
              narrow: "TPE",
              symbol: "TPE"
            },
            TRL: {
              displayName: {
                few: "турецкие лиры (1922–2005)",
                many: "турецких лир (1922–2005)",
                one: "турецкая лира (1922–2005)",
                other: "турецкой лиры (1922–2005)"
              },
              narrow: "TRL",
              symbol: "TRL"
            },
            TRY: {
              displayName: {
                few: "турецкие лиры",
                many: "турецких лир",
                one: "турецкая лира",
                other: "турецкой лиры"
              },
              narrow: "₺",
              symbol: "TRY"
            },
            TTD: {
              displayName: {
                many: "долларов Тринидада и Тобаго",
                one: "доллар Тринидада и Тобаго",
                other: "доллара Тринидада и Тобаго"
              },
              narrow: "$",
              symbol: "TTD"
            },
            TWD: {
              displayName: {
                few: "новых тайваньских доллара",
                many: "новых тайваньских долларов",
                one: "новый тайваньский доллар",
                other: "нового тайваньского доллара"
              },
              narrow: "NT$",
              symbol: "NT$"
            },
            TZS: {
              displayName: {
                few: "танзанийских шиллинга",
                many: "танзанийских шиллингов",
                one: "танзанийский шиллинг",
                other: "танзанийского шиллинга"
              },
              narrow: "TZS",
              symbol: "TZS"
            },
            UAH: {
              displayName: {
                few: "украинские гривны",
                many: "украинских гривен",
                one: "украинская гривна",
                other: "украинской гривны"
              },
              narrow: "₴",
              symbol: "₴"
            },
            UAK: {
              displayName: {
                other: "Карбованец (украинский)"
              },
              narrow: "UAK",
              symbol: "UAK"
            },
            UGS: {
              displayName: {
                other: "Старый угандийский шиллинг"
              },
              narrow: "UGS",
              symbol: "UGS"
            },
            UGX: {
              displayName: {
                few: "угандийских шиллинга",
                many: "угандийских шиллингов",
                one: "угандийский шиллинг",
                other: "угандийского шиллинга"
              },
              narrow: "UGX",
              symbol: "UGX"
            },
            USD: {
              displayName: {
                many: "долларов США",
                one: "доллар США",
                other: "доллара США"
              },
              narrow: "$",
              symbol: "$"
            },
            USN: {
              displayName: {
                other: "Доллар США следующего дня"
              },
              narrow: "USN",
              symbol: "USN"
            },
            USS: {
              displayName: {
                other: "Доллар США текущего дня"
              },
              narrow: "USS",
              symbol: "USS"
            },
            UYI: {
              displayName: {
                other: "Уругвайский песо (индекс инфляции)"
              },
              narrow: "UYI",
              symbol: "UYI"
            },
            UYP: {
              displayName: {
                other: "Уругвайское старое песо (1975–1993)"
              },
              narrow: "UYP",
              symbol: "UYP"
            },
            UYU: {
              displayName: {
                few: "уругвайских песо",
                many: "уругвайских песо",
                one: "уругвайский песо",
                other: "уругвайского песо"
              },
              narrow: "$",
              symbol: "UYU"
            },
            UZS: {
              displayName: {
                few: "узбекских сума",
                many: "узбекских сумов",
                one: "узбекский сум",
                other: "узбекского сума"
              },
              narrow: "UZS",
              symbol: "UZS"
            },
            VEB: {
              displayName: {
                other: "Венесуэльский боливар (1871–2008)"
              },
              narrow: "VEB",
              symbol: "VEB"
            },
            VEF: {
              displayName: {
                few: "венесуэльских боливара (2008–2018)",
                many: "венесуэльских боливаров (2008–2018)",
                one: "венесуэльский боливар (2008–2018)",
                other: "венесуэльского боливара (2008–2018)"
              },
              narrow: "Bs",
              symbol: "VEF"
            },
            VES: {
              displayName: {
                few: "венесуэльских боливара",
                many: "венесуэльских боливаров",
                one: "венесуэльский боливар",
                other: "венесуэльского боливара"
              },
              narrow: "VES",
              symbol: "VES"
            },
            VND: {
              displayName: {
                few: "вьетнамских донга",
                many: "вьетнамских донгов",
                one: "вьетнамский донг",
                other: "вьетнамского донга"
              },
              narrow: "₫",
              symbol: "₫"
            },
            VUV: {
              displayName: {
                other: "вату Вануату"
              },
              narrow: "VUV",
              symbol: "VUV"
            },
            WST: {
              displayName: {
                few: "самоанские талы",
                many: "самоанских тал",
                one: "самоанская тала",
                other: "самоанской талы"
              },
              narrow: "WST",
              symbol: "WST"
            },
            XAF: {
              displayName: {
                many: "франков КФА ВЕАС",
                one: "франк КФА ВЕАС",
                other: "франка КФА ВЕАС"
              },
              narrow: "FCFA",
              symbol: "FCFA"
            },
            XAG: {
              displayName: {
                other: "Серебро"
              },
              narrow: "XAG",
              symbol: "XAG"
            },
            XAU: {
              displayName: {
                other: "Золото"
              },
              narrow: "XAU",
              symbol: "XAU"
            },
            XBA: {
              displayName: {
                other: "Европейская составная единица"
              },
              narrow: "XBA",
              symbol: "XBA"
            },
            XBB: {
              displayName: {
                other: "Европейская денежная единица"
              },
              narrow: "XBB",
              symbol: "XBB"
            },
            XBC: {
              displayName: {
                other: "расчетная единица европейского валютного соглашения (XBC)"
              },
              narrow: "XBC",
              symbol: "XBC"
            },
            XBD: {
              displayName: {
                other: "расчетная единица европейского валютного соглашения (XBD)"
              },
              narrow: "XBD",
              symbol: "XBD"
            },
            XCD: {
              displayName: {
                few: "восточно-карибских доллара",
                many: "восточно-карибских долларов",
                one: "восточно-карибский доллар",
                other: "восточно-карибского доллара"
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
                other: "СДР (специальные права заимствования)"
              },
              narrow: "XDR",
              symbol: "XDR"
            },
            XEU: {
              displayName: {
                other: "ЭКЮ (единица европейской валюты)"
              },
              narrow: "XEU",
              symbol: "XEU"
            },
            XFO: {
              displayName: {
                other: "Французский золотой франк"
              },
              narrow: "XFO",
              symbol: "XFO"
            },
            XFU: {
              displayName: {
                other: "Французский UIC-франк"
              },
              narrow: "XFU",
              symbol: "XFU"
            },
            XOF: {
              displayName: {
                many: "франков КФА ВСЕАО",
                one: "франк КФА ВСЕАО",
                other: "франка КФА ВСЕАО"
              },
              narrow: "F CFA",
              symbol: "F CFA"
            },
            XPD: {
              displayName: {
                other: "Палладий"
              },
              narrow: "XPD",
              symbol: "XPD"
            },
            XPF: {
              displayName: {
                few: "французских тихоокеанских франка",
                many: "французских тихоокеанских франков",
                one: "французский тихоокеанский франк",
                other: "французского тихоокеанского франка"
              },
              narrow: "CFPF",
              symbol: "CFPF"
            },
            XPT: {
              displayName: {
                other: "Платина"
              },
              narrow: "XPT",
              symbol: "XPT"
            },
            XRE: {
              displayName: {
                other: "единица RINET-фондов"
              },
              narrow: "XRE",
              symbol: "XRE"
            },
            XTS: {
              displayName: {
                other: "тестовый валютный код"
              },
              narrow: "XTS",
              symbol: "XTS"
            },
            XXX: {
              displayName: {
                many: "единиц неизвестной валюты",
                one: "единица неизвестной валюты",
                other: "единицы неизвестной валюты"
              },
              narrow: "XXXX",
              symbol: "XXXX"
            },
            YDD: {
              displayName: {
                other: "Йеменский динар"
              },
              narrow: "YDD",
              symbol: "YDD"
            },
            YER: {
              displayName: {
                few: "йеменских риала",
                many: "йеменских риалов",
                one: "йеменский риал",
                other: "йеменского риала"
              },
              narrow: "YER",
              symbol: "YER"
            },
            YUD: {
              displayName: {
                other: "Югославский твердый динар"
              },
              narrow: "YUD",
              symbol: "YUD"
            },
            YUM: {
              displayName: {
                other: "Югославский новый динар"
              },
              narrow: "YUM",
              symbol: "YUM"
            },
            YUN: {
              displayName: {
                other: "Югославский динар"
              },
              narrow: "YUN",
              symbol: "YUN"
            },
            ZAL: {
              displayName: {
                other: "Южноафриканский рэнд (финансовый)"
              },
              narrow: "ZAL",
              symbol: "ZAL"
            },
            ZAR: {
              displayName: {
                few: "южноафриканских рэнда",
                many: "южноафриканских рэндов",
                one: "южноафриканский рэнд",
                other: "южноафриканского рэнда"
              },
              narrow: "R",
              symbol: "ZAR"
            },
            ZMK: {
              displayName: {
                few: "замбийские квачи (1968–2012)",
                many: "замбийских квач (1968–2012)",
                one: "замбийская квача (1968–2012)",
                other: "замбийской квачи (1968–2012)"
              },
              narrow: "ZMK",
              symbol: "ZMK"
            },
            ZMW: {
              displayName: {
                few: "замбийские квачи",
                many: "замбийских квач",
                one: "замбийская квача",
                other: "замбийской квачи"
              },
              narrow: "ZK",
              symbol: "ZMW"
            },
            ZRN: {
              displayName: {
                other: "Новый заир"
              },
              narrow: "ZRN",
              symbol: "ZRN"
            },
            ZRZ: {
              displayName: {
                other: "Заир"
              },
              narrow: "ZRZ",
              symbol: "ZRZ"
            },
            ZWD: {
              displayName: {
                other: "Доллар Зимбабве"
              },
              narrow: "ZWD",
              symbol: "ZWD"
            },
            ZWL: {
              displayName: {
                other: "Доллар Зимбабве (2009)"
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
                    other: "0 тыс'.' ¤"
                  },
                  1e4: {
                    other: "00 тыс'.' ¤"
                  },
                  1e5: {
                    other: "000 тыс'.' ¤"
                  },
                  1e6: {
                    other: "0 млн ¤"
                  },
                  1e7: {
                    other: "00 млн ¤"
                  },
                  1e8: {
                    other: "000 млн ¤"
                  },
                  1e9: {
                    other: "0 млрд ¤"
                  },
                  1e10: {
                    other: "00 млрд ¤"
                  },
                  1e11: {
                    other: "000 млрд ¤"
                  },
                  1e12: {
                    other: "0 трлн ¤"
                  },
                  1e13: {
                    other: "00 трлн ¤"
                  },
                  1e14: {
                    other: "000 трлн ¤"
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
                    many: "0 тысяч",
                    one: "0 тысяча",
                    other: "0 тысячи"
                  },
                  1e4: {
                    many: "00 тысяч",
                    one: "00 тысяча",
                    other: "00 тысячи"
                  },
                  1e5: {
                    many: "000 тысяч",
                    one: "000 тысяча",
                    other: "000 тысячи"
                  },
                  1e6: {
                    many: "0 миллионов",
                    one: "0 миллион",
                    other: "0 миллиона"
                  },
                  1e7: {
                    many: "00 миллионов",
                    one: "00 миллион",
                    other: "00 миллиона"
                  },
                  1e8: {
                    many: "000 миллионов",
                    one: "000 миллион",
                    other: "000 миллиона"
                  },
                  1e9: {
                    many: "0 миллиардов",
                    one: "0 миллиард",
                    other: "0 миллиарда"
                  },
                  1e10: {
                    many: "00 миллиардов",
                    one: "00 миллиард",
                    other: "00 миллиарда"
                  },
                  1e11: {
                    many: "000 миллиардов",
                    one: "000 миллиард",
                    other: "000 миллиарда"
                  },
                  1e12: {
                    many: "0 триллионов",
                    one: "0 триллион",
                    other: "0 триллиона"
                  },
                  1e13: {
                    many: "00 триллионов",
                    one: "00 триллион",
                    other: "00 триллиона"
                  },
                  1e14: {
                    many: "000 триллионов",
                    one: "000 триллион",
                    other: "000 триллиона"
                  }
                },
                short: {
                  1e3: {
                    other: "0 тыс'.'"
                  },
                  1e4: {
                    other: "00 тыс'.'"
                  },
                  1e5: {
                    other: "000 тыс'.'"
                  },
                  1e6: {
                    other: "0 млн"
                  },
                  1e7: {
                    other: "00 млн"
                  },
                  1e8: {
                    other: "000 млн"
                  },
                  1e9: {
                    other: "0 млрд"
                  },
                  1e10: {
                    other: "00 млрд"
                  },
                  1e11: {
                    other: "000 млрд"
                  },
                  1e12: {
                    other: "0 трлн"
                  },
                  1e13: {
                    other: "00 трлн"
                  },
                  1e14: {
                    other: "000 трлн"
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
                group: " ",
                infinity: "∞",
                list: ";",
                minusSign: "-",
                nan: "не число",
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
                long: "{0}/{1}",
                narrow: "{0}/{1}",
                short: "{0}/{1}"
              }
            },
            simple: {
              acre: {
                long: {
                  many: "{0} акров",
                  one: "{0} акр",
                  other: "{0} акра"
                },
                narrow: {
                  one: "{0} акр",
                  other: "{0} акр."
                },
                perUnit: {},
                short: {
                  one: "{0} акр",
                  other: "{0} акр."
                }
              },
              bit: {
                long: {
                  many: "{0} бит",
                  one: "{0} бит",
                  other: "{0} бита"
                },
                narrow: {
                  many: "{0} бит",
                  one: "{0} бит",
                  other: "{0} бита"
                },
                perUnit: {},
                short: {
                  many: "{0} бит",
                  one: "{0} бит",
                  other: "{0} бита"
                }
              },
              byte: {
                long: {
                  many: "{0} байт",
                  one: "{0} байт",
                  other: "{0} байта"
                },
                narrow: {
                  other: "{0} Б"
                },
                perUnit: {},
                short: {
                  other: "{0} Б"
                }
              },
              celsius: {
                long: {
                  many: "{0} градусов Цельсия",
                  one: "{0} градус Цельсия",
                  other: "{0} градуса Цельсия"
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
                  many: "{0} сантиметров",
                  one: "{0} сантиметр",
                  other: "{0} сантиметра"
                },
                narrow: {
                  other: "{0} см"
                },
                perUnit: {
                  long: "{0} на сантиметр",
                  narrow: "{0}/см",
                  short: "{0}/см"
                },
                short: {
                  other: "{0} см"
                }
              },
              day: {
                long: {
                  many: "{0} дней",
                  one: "{0} день",
                  other: "{0} дня"
                },
                narrow: {
                  other: "{0} д."
                },
                perUnit: {
                  long: "{0} в день",
                  narrow: "{0}/д.",
                  short: "{0}/д"
                },
                short: {
                  other: "{0} дн."
                }
              },
              degree: {
                long: {
                  many: "{0} градусов",
                  one: "{0} градус",
                  other: "{0} градуса"
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
                  many: "{0} градусов Фаренгейта",
                  one: "{0} градус Фаренгейта",
                  other: "{0} градуса Фаренгейта"
                },
                narrow: {
                  few: "{0} °F",
                  other: "{0}°F"
                },
                perUnit: {},
                short: {
                  other: "{0} °F"
                }
              },
              "fluid-ounce": {
                long: {
                  few: "{0} амер. жидкие унции",
                  many: "{0} амер. жидких унций",
                  one: "{0} амер. жидкая унция",
                  other: "{0} амер. жидкой унции"
                },
                narrow: {
                  other: "{0} ам. жидк. унц."
                },
                perUnit: {},
                short: {
                  other: "{0} ам. жидк. унц."
                }
              },
              foot: {
                long: {
                  many: "{0} футов",
                  one: "{0} фут",
                  other: "{0} фута"
                },
                narrow: {
                  other: "{0} фт"
                },
                perUnit: {
                  long: "{0} на фут",
                  narrow: "{0}/фт",
                  short: "{0}/фт"
                },
                short: {
                  other: "{0} фт"
                }
              },
              gallon: {
                long: {
                  many: "{0} амер. галлонов",
                  one: "{0} амер. галлон",
                  other: "{0} амер. галлона"
                },
                narrow: {
                  other: "{0} ам. гал."
                },
                perUnit: {
                  long: "{0} на амер. галлон",
                  narrow: "{0}/ам. гал",
                  short: "{0}/ам. гал"
                },
                short: {
                  other: "{0} ам. гал."
                }
              },
              gigabit: {
                long: {
                  many: "{0} гигабит",
                  one: "{0} гигабит",
                  other: "{0} гигабита"
                },
                narrow: {
                  other: "{0} Гбит"
                },
                perUnit: {},
                short: {
                  other: "{0} Гбит"
                }
              },
              gigabyte: {
                long: {
                  many: "{0} гигабайт",
                  one: "{0} гигабайт",
                  other: "{0} гигабайта"
                },
                narrow: {
                  other: "{0} ГБ"
                },
                perUnit: {},
                short: {
                  other: "{0} ГБ"
                }
              },
              gram: {
                long: {
                  many: "{0} грамм",
                  one: "{0} грамм",
                  other: "{0} грамма"
                },
                narrow: {
                  other: "{0} г"
                },
                perUnit: {
                  long: "{0} на грамм",
                  narrow: "{0}/г",
                  short: "{0}/г"
                },
                short: {
                  other: "{0} г"
                }
              },
              hectare: {
                long: {
                  many: "{0} гектаров",
                  one: "{0} гектар",
                  other: "{0} гектара"
                },
                narrow: {
                  other: "{0} га"
                },
                perUnit: {},
                short: {
                  other: "{0} га"
                }
              },
              hour: {
                long: {
                  many: "{0} часов",
                  one: "{0} час",
                  other: "{0} часа"
                },
                narrow: {
                  other: "{0} ч"
                },
                perUnit: {
                  long: "{0} в час",
                  narrow: "{0}/ч",
                  short: "{0}/ч"
                },
                short: {
                  other: "{0} ч"
                }
              },
              inch: {
                long: {
                  many: "{0} дюймов",
                  one: "{0} дюйм",
                  other: "{0} дюйма"
                },
                narrow: {
                  other: "{0} дюйм."
                },
                perUnit: {
                  long: "{0} на дюйм",
                  narrow: "{0}/дюйм",
                  short: "{0}/дюйм"
                },
                short: {
                  one: "{0} дюйм",
                  other: "{0} дюйм."
                }
              },
              kilobit: {
                long: {
                  many: "{0} килобит",
                  one: "{0} килобит",
                  other: "{0} килобита"
                },
                narrow: {
                  other: "{0} кбит"
                },
                perUnit: {},
                short: {
                  other: "{0} кбит"
                }
              },
              kilobyte: {
                long: {
                  many: "{0} килобайт",
                  one: "{0} килобайт",
                  other: "{0} килобайта"
                },
                narrow: {
                  other: "{0} кБ"
                },
                perUnit: {},
                short: {
                  other: "{0} кБ"
                }
              },
              kilogram: {
                long: {
                  many: "{0} килограмм",
                  one: "{0} килограмм",
                  other: "{0} килограмма"
                },
                narrow: {
                  other: "{0} кг"
                },
                perUnit: {
                  long: "{0} на килограмм",
                  narrow: "{0}/кг",
                  short: "{0}/кг"
                },
                short: {
                  other: "{0} кг"
                }
              },
              kilometer: {
                long: {
                  many: "{0} километров",
                  one: "{0} километр",
                  other: "{0} километра"
                },
                narrow: {
                  other: "{0} км"
                },
                perUnit: {
                  long: "{0} на километр",
                  narrow: "{0}/км",
                  short: "{0}/км"
                },
                short: {
                  other: "{0} км"
                }
              },
              "kilometer-per-hour": {
                long: {
                  many: "{0} километров в час",
                  one: "{0} километр в час",
                  other: "{0} километра в час"
                },
                narrow: {
                  other: "{0} км/ч"
                },
                perUnit: {},
                short: {
                  other: "{0} км/ч"
                }
              },
              liter: {
                long: {
                  many: "{0} литров",
                  one: "{0} литр",
                  other: "{0} литра"
                },
                narrow: {
                  other: "{0} л"
                },
                perUnit: {
                  long: "{0} на литр",
                  narrow: "{0}/л",
                  short: "{0}/л"
                },
                short: {
                  other: "{0} л"
                }
              },
              "liter-per-kilometer": {
                long: {
                  many: "{0} литров на километр",
                  one: "{0} литр на километр",
                  other: "{0} литра на километр"
                },
                narrow: {
                  other: "{0} л/км"
                },
                perUnit: {},
                short: {
                  other: "{0} л/км"
                }
              },
              megabit: {
                long: {
                  many: "{0} мегабит",
                  one: "{0} мегабит",
                  other: "{0} мегабита"
                },
                narrow: {
                  other: "{0} Мбит"
                },
                perUnit: {},
                short: {
                  other: "{0} Мбит"
                }
              },
              megabyte: {
                long: {
                  many: "{0} мегабайт",
                  one: "{0} мегабайт",
                  other: "{0} мегабайта"
                },
                narrow: {
                  other: "{0} МБ"
                },
                perUnit: {},
                short: {
                  other: "{0} МБ"
                }
              },
              meter: {
                long: {
                  many: "{0} метров",
                  one: "{0} метр",
                  other: "{0} метра"
                },
                narrow: {
                  other: "{0} м"
                },
                perUnit: {
                  long: "{0} на метр",
                  narrow: "{0}/м",
                  short: "{0}/м"
                },
                short: {
                  other: "{0} м"
                }
              },
              "meter-per-second": {
                long: {
                  many: "{0} метров в секунду",
                  one: "{0} метр в секунду",
                  other: "{0} метра в секунду"
                },
                narrow: {
                  other: "{0} м/с"
                },
                perUnit: {},
                short: {
                  other: "{0} м/с"
                }
              },
              mile: {
                long: {
                  many: "{0} миль",
                  one: "{0} миля",
                  other: "{0} мили"
                },
                narrow: {
                  other: "{0} ми"
                },
                perUnit: {},
                short: {
                  other: "{0} ми"
                }
              },
              "mile-per-gallon": {
                long: {
                  many: "{0} миль на амер. галлон",
                  one: "{0} миля на амер. галлон",
                  other: "{0} мили на амер. галлон"
                },
                narrow: {
                  other: "{0} ми/ам. гал"
                },
                perUnit: {},
                short: {
                  other: "{0} ми/ам. гал"
                }
              },
              "mile-per-hour": {
                long: {
                  many: "{0} миль в час",
                  one: "{0} миля в час",
                  other: "{0} мили в час"
                },
                narrow: {
                  other: "{0} ми/ч"
                },
                perUnit: {},
                short: {
                  other: "{0} ми/ч"
                }
              },
              "mile-scandinavian": {
                long: {
                  few: "{0} скандинавские мили",
                  many: "{0} скандинавских миль",
                  one: "{0} скандинавская миля",
                  other: "{0} скандинавской мили"
                },
                narrow: {
                  other: "{0} ск. ми"
                },
                perUnit: {},
                short: {
                  other: "{0} ск. ми"
                }
              },
              milliliter: {
                long: {
                  many: "{0} миллилитров",
                  one: "{0} миллилитр",
                  other: "{0} миллилитра"
                },
                narrow: {
                  other: "{0} мл"
                },
                perUnit: {},
                short: {
                  other: "{0} мл"
                }
              },
              millimeter: {
                long: {
                  many: "{0} миллиметров",
                  one: "{0} миллиметр",
                  other: "{0} миллиметра"
                },
                narrow: {
                  other: "{0} мм"
                },
                perUnit: {},
                short: {
                  other: "{0} мм"
                }
              },
              millisecond: {
                long: {
                  many: "{0} миллисекунд",
                  one: "{0} миллисекунда",
                  other: "{0} миллисекунды"
                },
                narrow: {
                  other: "{0} мс"
                },
                perUnit: {},
                short: {
                  other: "{0} мс"
                }
              },
              minute: {
                long: {
                  many: "{0} минут",
                  one: "{0} минута",
                  other: "{0} минуты"
                },
                narrow: {
                  other: "{0} мин"
                },
                perUnit: {
                  long: "{0} в минуту",
                  narrow: "{0}/мин",
                  short: "{0}/мин"
                },
                short: {
                  other: "{0} мин"
                }
              },
              month: {
                long: {
                  many: "{0} месяцев",
                  one: "{0} месяц",
                  other: "{0} месяца"
                },
                narrow: {
                  other: "{0} м."
                },
                perUnit: {
                  long: "{0} в месяц",
                  narrow: "{0}/м.",
                  short: "{0}/мес"
                },
                short: {
                  other: "{0} мес."
                }
              },
              ounce: {
                long: {
                  many: "{0} унций",
                  one: "{0} унция",
                  other: "{0} унции"
                },
                narrow: {
                  other: "{0} унц."
                },
                perUnit: {
                  long: "{0} на унцию",
                  narrow: "{0}/унц",
                  short: "{0}/унц"
                },
                short: {
                  other: "{0} унц."
                }
              },
              percent: {
                long: {
                  many: "{0} процентов",
                  one: "{0} процент",
                  other: "{0} процента"
                },
                narrow: {
                  other: "{0}%"
                },
                perUnit: {},
                short: {
                  other: "{0} %"
                }
              },
              petabyte: {
                long: {
                  many: "{0} петабайт",
                  one: "{0} петабайт",
                  other: "{0} петабайта"
                },
                narrow: {
                  other: "{0} ПБ"
                },
                perUnit: {},
                short: {
                  other: "{0} ПБ"
                }
              },
              pound: {
                long: {
                  many: "{0} фунтов",
                  one: "{0} фунт",
                  other: "{0} фунта"
                },
                narrow: {
                  other: "{0} фнт"
                },
                perUnit: {
                  long: "{0} на фунт",
                  narrow: "{0}/фнт",
                  short: "{0}/фнт"
                },
                short: {
                  other: "{0} фнт"
                }
              },
              second: {
                long: {
                  many: "{0} секунд",
                  one: "{0} секунда",
                  other: "{0} секунды"
                },
                narrow: {
                  other: "{0} с"
                },
                perUnit: {
                  long: "{0} в секунду",
                  narrow: "{0}/c",
                  short: "{0}/c"
                },
                short: {
                  other: "{0} с"
                }
              },
              stone: {
                long: {
                  many: "{0} стоунов",
                  one: "{0} стоун",
                  other: "{0} стоуна"
                },
                narrow: {
                  other: "{0} стн"
                },
                perUnit: {},
                short: {
                  many: "{0} стоунов",
                  one: "{0} стоун",
                  other: "{0} стоуна"
                }
              },
              terabit: {
                long: {
                  many: "{0} терабит",
                  one: "{0} терабит",
                  other: "{0} терабита"
                },
                narrow: {
                  other: "{0} Тбит"
                },
                perUnit: {},
                short: {
                  other: "{0} Тбит"
                }
              },
              terabyte: {
                long: {
                  many: "{0} терабайт",
                  one: "{0} терабайт",
                  other: "{0} терабайта"
                },
                narrow: {
                  other: "{0} ТБ"
                },
                perUnit: {},
                short: {
                  other: "{0} ТБ"
                }
              },
              week: {
                long: {
                  many: "{0} недель",
                  one: "{0} неделя",
                  other: "{0} недели"
                },
                narrow: {
                  other: "{0} н."
                },
                perUnit: {
                  long: "{0} в неделю",
                  narrow: "{0}/н.",
                  short: "{0}/нед"
                },
                short: {
                  other: "{0} нед."
                }
              },
              yard: {
                long: {
                  many: "{0} ярдов",
                  one: "{0} ярд",
                  other: "{0} ярда"
                },
                narrow: {
                  one: "{0} ярд",
                  other: "{0} ярд."
                },
                perUnit: {},
                short: {
                  one: "{0} ярд",
                  other: "{0} ярд."
                }
              },
              year: {
                long: {
                  many: "{0} лет",
                  one: "{0} год",
                  other: "{0} года"
                },
                narrow: {
                  many: "{0} л.",
                  other: "{0} г."
                },
                perUnit: {
                  long: "{0} в год",
                  narrow: "{0}/г.",
                  short: "{0}/г"
                },
                short: {
                  many: "{0} л.",
                  other: "{0} г."
                }
              }
            }
          }
        },
        locale: "ru"
      })
    }
  }
]);