try {
  let M = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new M.Error).stack;
  a && (M._sentryDebugIds = M._sentryDebugIds || {}, M._sentryDebugIds[a] = "1a329de6-29d5-4fa4-9faf-005e0181518e", M._sentryDebugIdIdentifier = "sentry-dbid-1a329de6-29d5-4fa4-9faf-005e0181518e")
} catch (M) {} {
  let M = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[(new M.Error).stack] = Object.assign({}, M._sentryModuleMetadata[(new M.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [1054], {
    40230: () => {
      Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
        data: {
          am: "AM",
          pm: "PM",
          weekday: {
            narrow: ["n", "p", "w", "ś", "c", "p", "s"],
            short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
            long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
          },
          era: {
            narrow: {
              BC: "p.n.e.",
              AD: "n.e."
            },
            short: {
              BC: "p.n.e.",
              AD: "n.e."
            },
            long: {
              BC: "przed naszą erą",
              AD: "naszej ery"
            }
          },
          month: {
            narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
            short: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
            long: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
          },
          timeZoneName: {
            "Asia/Kabul": {
              long: ["czas Afganistan", "czas Afganistan"]
            },
            "Africa/Maputo": {
              long: ["czas środkowoafrykański", "czas środkowoafrykański"]
            },
            "Africa/Bujumbura": {
              long: ["czas środkowoafrykański", "czas środkowoafrykański"]
            },
            "Africa/Gaborone": {
              long: ["czas środkowoafrykański", "czas środkowoafrykański"]
            },
            "Africa/Lubumbashi": {
              long: ["czas środkowoafrykański", "czas środkowoafrykański"]
            },
            "Africa/Blantyre": {
              long: ["czas środkowoafrykański", "czas środkowoafrykański"]
            },
            "Africa/Kigali": {
              long: ["czas środkowoafrykański", "czas środkowoafrykański"]
            },
            "Africa/Lusaka": {
              long: ["czas środkowoafrykański", "czas środkowoafrykański"]
            },
            "Africa/Harare": {
              long: ["czas środkowoafrykański", "czas środkowoafrykański"]
            },
            "Africa/Nairobi": {
              long: ["czas wschodnioafrykański", "czas wschodnioafrykański"]
            },
            "Africa/Djibouti": {
              long: ["czas wschodnioafrykański", "czas wschodnioafrykański"]
            },
            "Africa/Asmera": {
              long: ["czas wschodnioafrykański", "czas wschodnioafrykański"]
            },
            "Africa/Addis_Ababa": {
              long: ["czas wschodnioafrykański", "czas wschodnioafrykański"]
            },
            "Indian/Comoro": {
              long: ["czas wschodnioafrykański", "czas wschodnioafrykański"]
            },
            "Indian/Antananarivo": {
              long: ["czas wschodnioafrykański", "czas wschodnioafrykański"]
            },
            "Africa/Mogadishu": {
              long: ["czas wschodnioafrykański", "czas wschodnioafrykański"]
            },
            "Africa/Dar_es_Salaam": {
              long: ["czas wschodnioafrykański", "czas wschodnioafrykański"]
            },
            "Africa/Kampala": {
              long: ["czas wschodnioafrykański", "czas wschodnioafrykański"]
            },
            "Indian/Mayotte": {
              long: ["czas wschodnioafrykański", "czas wschodnioafrykański"]
            },
            "Africa/Johannesburg": {
              long: ["czas południowoafrykański", "czas południowoafrykański"]
            },
            "Africa/Maseru": {
              long: ["czas południowoafrykański", "czas południowoafrykański"]
            },
            "Africa/Mbabane": {
              long: ["czas południowoafrykański", "czas południowoafrykański"]
            },
            "Africa/Lagos": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Africa/Luanda": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Africa/Porto-Novo": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Africa/Kinshasa": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Africa/Bangui": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Africa/Brazzaville": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Africa/Douala": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Africa/Libreville": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Africa/Malabo": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Africa/Niamey": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Africa/Ndjamena": {
              long: ["czas zachodnioafrykański standardowy", "czas zachodnioafrykański letni"]
            },
            "Asia/Aqtobe": {
              long: ["czas Kazachstan Zachodni", "czas Kazachstan Zachodni"]
            },
            "America/Juneau": {
              long: ["Alaska (czas standardowy)", "Alaska (czas letni)"]
            },
            "Asia/Almaty": {
              long: ["czas Kazachstan Wschodni", "czas Kazachstan Wschodni"]
            },
            "America/Manaus": {
              long: ["czas amazoński standardowy", "czas amazoński letni"]
            },
            "America/Chicago": {
              long: ["czas środkowoamerykański standardowy", "czas środkowoamerykański letni"]
            },
            "America/Belize": {
              long: ["czas środkowoamerykański standardowy", "czas środkowoamerykański letni"]
            },
            "America/Winnipeg": {
              long: ["czas środkowoamerykański standardowy", "czas środkowoamerykański letni"]
            },
            "America/Costa_Rica": {
              long: ["czas środkowoamerykański standardowy", "czas środkowoamerykański letni"]
            },
            "America/Guatemala": {
              long: ["czas środkowoamerykański standardowy", "czas środkowoamerykański letni"]
            },
            "America/Tegucigalpa": {
              long: ["czas środkowoamerykański standardowy", "czas środkowoamerykański letni"]
            },
            "America/Mexico_City": {
              long: ["czas środkowoamerykański standardowy", "czas środkowoamerykański letni"]
            },
            "America/El_Salvador": {
              long: ["czas środkowoamerykański standardowy", "czas środkowoamerykański letni"]
            },
            "America/New_York": {
              long: ["czas wschodnioamerykański standardowy", "czas wschodnioamerykański letni"]
            },
            "America/Nassau": {
              long: ["czas wschodnioamerykański standardowy", "czas wschodnioamerykański letni"]
            },
            "America/Toronto": {
              long: ["czas wschodnioamerykański standardowy", "czas wschodnioamerykański letni"]
            },
            "America/Port-au-Prince": {
              long: ["czas wschodnioamerykański standardowy", "czas wschodnioamerykański letni"]
            },
            "America/Jamaica": {
              long: ["czas wschodnioamerykański standardowy", "czas wschodnioamerykański letni"]
            },
            "America/Cayman": {
              long: ["czas wschodnioamerykański standardowy", "czas wschodnioamerykański letni"]
            },
            "America/Panama": {
              long: ["czas wschodnioamerykański standardowy", "czas wschodnioamerykański letni"]
            },
            "America/Denver": {
              long: ["czas górski standardowy", "czas górski letni"]
            },
            "America/Edmonton": {
              long: ["czas górski standardowy", "czas górski letni"]
            },
            "America/Los_Angeles": {
              long: ["czas pacyficzny standardowy", "czas pacyficzny letni"]
            },
            "America/Vancouver": {
              long: ["czas pacyficzny standardowy", "czas pacyficzny letni"]
            },
            "America/Tijuana": {
              long: ["czas pacyficzny standardowy", "czas pacyficzny letni"]
            },
            "Asia/Anadyr": {
              long: ["czas standardowy Anadyr", "czas Anadyr letni"]
            },
            "Pacific/Apia": {
              long: ["Apia (czas standardowy)", "Apia (czas letni)"]
            },
            "Asia/Riyadh": {
              long: ["Półwysep Arabski (czas standardowy)", "Półwysep Arabski (czas letni)"]
            },
            "Asia/Bahrain": {
              long: ["Półwysep Arabski (czas standardowy)", "Półwysep Arabski (czas letni)"]
            },
            "Asia/Baghdad": {
              long: ["Półwysep Arabski (czas standardowy)", "Półwysep Arabski (czas letni)"]
            },
            "Asia/Kuwait": {
              long: ["Półwysep Arabski (czas standardowy)", "Półwysep Arabski (czas letni)"]
            },
            "Asia/Qatar": {
              long: ["Półwysep Arabski (czas standardowy)", "Półwysep Arabski (czas letni)"]
            },
            "Asia/Aden": {
              long: ["Półwysep Arabski (czas standardowy)", "Półwysep Arabski (czas letni)"]
            },
            "America/Buenos_Aires": {
              long: ["Argentyna (czas standardowy)", "Argentyna (czas letni)"]
            },
            "America/Argentina/San_Luis": {
              long: ["Argentyna Zachodnia (czas standardowy)", "Argentyna Zachodnia (czas letni)"]
            },
            "Asia/Ashgabat": {
              long: ["Turkmenistan (czas standardowy)", "Turkmenistan (czas letni)"]
            },
            "America/Halifax": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Antigua": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Anguilla": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Aruba": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Barbados": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "Atlantic/Bermuda": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Kralendijk": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Curacao": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Dominica": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Grenada": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Thule": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Guadeloupe": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/St_Kitts": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/St_Lucia": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Marigot": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Martinique": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Montserrat": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Puerto_Rico": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Lower_Princes": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Port_of_Spain": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/St_Vincent": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/Tortola": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "America/St_Thomas": {
              long: ["czas atlantycki standardowy", "czas atlantycki letni"]
            },
            "Australia/Adelaide": {
              long: ["czas środkowoaustralijski standardowy", "czas środkowoaustralijski letni"]
            },
            "Australia/Eucla": {
              long: ["czas środkowo-zachodnioaustralijski standardowy", "czas środkowo-zachodnioaustralijski letni"]
            },
            "Australia/Sydney": {
              long: ["czas wschodnioaustralijski standardowy", "czas wschodnioaustralijski letni"]
            },
            "Australia/Perth": {
              long: ["czas zachodnioaustralijski standardowy", "czas zachodnioaustralijski letni"]
            },
            "Atlantic/Azores": {
              long: ["Azory (czas standardowy)", "Azory (czas letni)"]
            },
            "Asia/Thimphu": {
              long: ["czas Bhutan", "czas Bhutan"]
            },
            "America/La_Paz": {
              long: ["czas Boliwia", "czas Boliwia"]
            },
            "Asia/Kuching": {
              long: ["czas Malezja", "czas Malezja"]
            },
            "America/Sao_Paulo": {
              long: ["Brasília (czas standardowy)", "Brasília (czas letni)"]
            },
            "Europe/London": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Asia/Brunei": {
              long: ["czas Brunei", "czas Brunei"]
            },
            "Atlantic/Cape_Verde": {
              long: ["Wyspy Zielonego Przylądka (czas standardowy)", "Wyspy Zielonego Przylądka (czas letni)"]
            },
            "Pacific/Chatham": {
              long: ["Chatham (czas standardowy)", "Chatham (czas letni)"]
            },
            "America/Santiago": {
              long: ["Chile (czas standardowy)", "Chile (czas letni)"]
            },
            "Asia/Shanghai": {
              long: ["Chiny (czas standardowy)", "Chiny (czas letni)"]
            },
            "Indian/Christmas": {
              long: ["czas Wyspa Bożego Narodzenia", "czas Wyspa Bożego Narodzenia"]
            },
            "Indian/Cocos": {
              long: ["czas Wyspy Kokosowe", "czas Wyspy Kokosowe"]
            },
            "America/Bogota": {
              long: ["Kolumbia (czas standardowy)", "Kolumbia (czas letni)"]
            },
            "Pacific/Rarotonga": {
              long: ["Wyspy Cooka (czas standardowy)", "Wyspy Cooka (czas letni)"]
            },
            "America/Havana": {
              long: ["Kuba (czas standardowy)", "Kuba (czas letni)"]
            },
            "Antarctica/Davis": {
              long: ["czas Davis", "czas Davis"]
            },
            "Antarctica/DumontDUrville": {
              long: ["czas Dumont-d’Urville", "czas Dumont-d’Urville"]
            },
            "Asia/Dushanbe": {
              long: ["czas Tadżykistan", "czas Tadżykistan"]
            },
            "America/Paramaribo": {
              long: ["czas Surinam", "czas Surinam"]
            },
            "Asia/Dili": {
              long: ["czas Timor Wschodni", "czas Timor Wschodni"]
            },
            "Pacific/Easter": {
              long: ["Wyspa Wielkanocna (czas standardowy)", "Wyspa Wielkanocna (czas letni)"]
            },
            "America/Guayaquil": {
              long: ["czas Ekwador", "czas Ekwador"]
            },
            "Europe/Paris": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Andorra": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Tirane": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Vienna": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Sarajevo": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Brussels": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Zurich": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Prague": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Berlin": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Copenhagen": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Madrid": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Gibraltar": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Zagreb": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Budapest": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Rome": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Vaduz": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Luxembourg": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Monaco": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Podgorica": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Skopje": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Malta": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Amsterdam": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Oslo": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Warsaw": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Belgrade": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Stockholm": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Ljubljana": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Arctic/Longyearbyen": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Bratislava": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/San_Marino": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Africa/Tunis": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Vatican": {
              long: ["czas środkowoeuropejski standardowy", "czas środkowoeuropejski letni"],
              short: ["CET", "CEST"]
            },
            "Europe/Bucharest": {
              long: ["czas wschodnioeuropejski standardowy", "czas wschodnioeuropejski letni"],
              short: ["EET", "EEST"]
            },
            "Europe/Mariehamn": {
              long: ["czas wschodnioeuropejski standardowy", "czas wschodnioeuropejski letni"],
              short: ["EET", "EEST"]
            },
            "Europe/Sofia": {
              long: ["czas wschodnioeuropejski standardowy", "czas wschodnioeuropejski letni"],
              short: ["EET", "EEST"]
            },
            "Asia/Nicosia": {
              long: ["czas wschodnioeuropejski standardowy", "czas wschodnioeuropejski letni"],
              short: ["EET", "EEST"]
            },
            "Africa/Cairo": {
              long: ["czas wschodnioeuropejski standardowy", "czas wschodnioeuropejski letni"],
              short: ["EET", "EEST"]
            },
            "Europe/Helsinki": {
              long: ["czas wschodnioeuropejski standardowy", "czas wschodnioeuropejski letni"],
              short: ["EET", "EEST"]
            },
            "Europe/Athens": {
              long: ["czas wschodnioeuropejski standardowy", "czas wschodnioeuropejski letni"],
              short: ["EET", "EEST"]
            },
            "Asia/Beirut": {
              long: ["czas wschodnioeuropejski standardowy", "czas wschodnioeuropejski letni"],
              short: ["EET", "EEST"]
            },
            "Europe/Minsk": {
              long: ["czas wschodnioeuropejski dalszy", "czas wschodnioeuropejski dalszy"]
            },
            "Europe/Kaliningrad": {
              long: ["czas wschodnioeuropejski dalszy", "czas wschodnioeuropejski dalszy"]
            },
            "Atlantic/Canary": {
              long: ["czas zachodnioeuropejski standardowy", "czas zachodnioeuropejski letni"],
              short: ["WET", "WEST"]
            },
            "Atlantic/Faeroe": {
              long: ["czas zachodnioeuropejski standardowy", "czas zachodnioeuropejski letni"],
              short: ["WET", "WEST"]
            },
            "Atlantic/Stanley": {
              long: ["Falklandy (czas standardowy)", "Falklandy (czas letni)"]
            },
            "Pacific/Fiji": {
              long: ["Fidżi (czas standardowy)", "Fidżi (czas letni)"]
            },
            "America/Cayenne": {
              long: ["czas Gujana Francuska", "czas Gujana Francuska"]
            },
            "Indian/Kerguelen": {
              long: ["czas Francuskie Terytoria Południowe i Antarktyczne", "czas Francuskie Terytoria Południowe i Antarktyczne"]
            },
            "Asia/Bishkek": {
              long: ["czas Kirgistan", "czas Kirgistan"]
            },
            "Pacific/Galapagos": {
              long: ["czas Galapagos", "czas Galapagos"]
            },
            "Pacific/Gambier": {
              long: ["czas Wyspy Gambiera", "czas Wyspy Gambiera"]
            },
            "Pacific/Tarawa": {
              long: ["czas Wyspy Gilberta", "czas Wyspy Gilberta"]
            },
            "Atlantic/Reykjavik": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Africa/Ouagadougou": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Africa/Abidjan": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Africa/Accra": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Africa/Banjul": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Africa/Conakry": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Africa/Bamako": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Africa/Nouakchott": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Atlantic/St_Helena": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Africa/Freetown": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Africa/Dakar": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "Africa/Lome": {
              long: ["czas uniwersalny", "czas uniwersalny"]
            },
            "America/Godthab": {
              long: ["Grenlandia Zachodnia (czas standardowy)", "Grenlandia Zachodnia (czas letni)"]
            },
            "America/Scoresbysund": {
              long: ["Grenlandia Wschodnia (czas standardowy)", "Grenlandia Wschodnia (czas letni)"]
            },
            "Asia/Dubai": {
              long: ["czas Zatoka Perska", "czas Zatoka Perska"]
            },
            "Asia/Muscat": {
              long: ["czas Zatoka Perska", "czas Zatoka Perska"]
            },
            "America/Guyana": {
              long: ["czas Gujana", "czas Gujana"]
            },
            "Pacific/Honolulu": {
              long: ["Hawaje-Aleuty (czas standardowy)", "Hawaje-Aleuty (czas letni)"]
            },
            "Asia/Hong_Kong": {
              long: ["Hongkong (czas standardowy)", "Hongkong (czas letni)"]
            },
            "Asia/Hovd": {
              long: ["Kobdo (czas standardowy)", "Kobdo (czas letni)"]
            },
            "Asia/Calcutta": {
              long: ["czas indyjski standardowy", "czas indyjski standardowy"]
            },
            "Indian/Chagos": {
              long: ["czas Ocean Indyjski", "czas Ocean Indyjski"]
            },
            "Asia/Bangkok": {
              long: ["czas indochiński", "czas indochiński"]
            },
            "Asia/Phnom_Penh": {
              long: ["czas indochiński", "czas indochiński"]
            },
            "Asia/Vientiane": {
              long: ["czas indochiński", "czas indochiński"]
            },
            "Asia/Makassar": {
              long: ["czas Indonezja Środkowa", "czas Indonezja Środkowa"]
            },
            "Asia/Jayapura": {
              long: ["czas Indonezja Wschodnia", "czas Indonezja Wschodnia"]
            },
            "Asia/Jakarta": {
              long: ["czas Indonezja Zachodnia", "czas Indonezja Zachodnia"]
            },
            "Asia/Tehran": {
              long: ["Iran (czas standardowy)", "Iran (czas letni)"]
            },
            "Asia/Irkutsk": {
              long: ["Irkuck (czas standardowy)", "Irkuck (czas letni)"]
            },
            "Asia/Jerusalem": {
              long: ["Izrael (czas standardowy)", "Izrael (czas letni)"]
            },
            "Asia/Tokyo": {
              long: ["Japonia (czas standardowy)", "Japonia (czas letni)"]
            },
            "Asia/Kamchatka": {
              long: ["czas standardowy Pietropawłowsk Kamczacki", "czas Pietropawłowsk Kamczacki letni"]
            },
            "Asia/Karachi": {
              long: ["Pakistan (czas standardowy)", "Pakistan (czas letni)"]
            },
            "Asia/Seoul": {
              long: ["Korea (czas standardowy)", "Korea (czas letni)"]
            },
            "Pacific/Kosrae": {
              long: ["czas Kosrae", "czas Kosrae"]
            },
            "Asia/Krasnoyarsk": {
              long: ["Krasnojarsk (czas standardowy)", "Krasnojarsk (czas letni)"]
            },
            "Europe/Samara": {
              long: ["czas standardowy Samara", "czas Samara letni"]
            },
            "Pacific/Kiritimati": {
              long: ["czas Line Islands", "czas Line Islands"]
            },
            "Australia/Lord_Howe": {
              long: ["Lord Howe (czas standardowy)", "Lord Howe (czas letni)"]
            },
            "Asia/Magadan": {
              long: ["Magadan (czas standardowy)", "Magadan (czas letni)"]
            },
            "Indian/Maldives": {
              long: ["czas Malediwy", "czas Malediwy"]
            },
            "Pacific/Marquesas": {
              long: ["czas Markizy", "czas Markizy"]
            },
            "Pacific/Majuro": {
              long: ["czas Wyspy Marshalla", "czas Wyspy Marshalla"]
            },
            "Indian/Mauritius": {
              long: ["Mauritius (czas standardowy)", "Mauritius (czas letni)"]
            },
            "Antarctica/Mawson": {
              long: ["czas Mawson", "czas Mawson"]
            },
            "America/Mazatlan": {
              long: ["Meksyk (czas pacyficzny standardowy)", "Meksyk (czas pacyficzny letni)"]
            },
            "Asia/Ulaanbaatar": {
              long: ["Ułan Bator (czas standardowy)", "Ułan Bator (czas letni)"]
            },
            "Europe/Moscow": {
              long: ["Moskwa (czas standardowy)", "Moskwa (czas letni)"]
            },
            "Asia/Rangoon": {
              long: ["czas Mjanma", "czas Mjanma"]
            },
            "Pacific/Nauru": {
              long: ["czas Nauru", "czas Nauru"]
            },
            "Asia/Katmandu": {
              long: ["czas Nepal", "czas Nepal"]
            },
            "Pacific/Noumea": {
              long: ["Nowa Kaledonia (czas standardowy)", "Nowa Kaledonia (czas letni)"]
            },
            "Pacific/Auckland": {
              long: ["Nowa Zelandia (czas standardowy)", "Nowa Zelandia (czas letni)"]
            },
            "Antarctica/McMurdo": {
              long: ["Nowa Zelandia (czas standardowy)", "Nowa Zelandia (czas letni)"]
            },
            "America/St_Johns": {
              long: ["Nowa Fundlandia (czas standardowy)", "Nowa Fundlandia (czas letni)"]
            },
            "Pacific/Niue": {
              long: ["czas Niue", "czas Niue"]
            },
            "Pacific/Norfolk": {
              long: ["Norfolk (czas standardowy)", "Norfolk (czas letni)"]
            },
            "America/Noronha": {
              long: ["Fernando de Noronha (czas standardowy)", "Fernando de Noronha (czas letni)"]
            },
            "Asia/Novosibirsk": {
              long: ["Nowosybirsk (czas standardowy)", "Nowosybirsk (czas letni)"]
            },
            "Asia/Omsk": {
              long: ["Omsk (czas standardowy)", "Omsk (czas letni)"]
            },
            "Pacific/Palau": {
              long: ["czas Palau", "czas Palau"]
            },
            "Pacific/Port_Moresby": {
              long: ["czas Papua-Nowa Gwinea", "czas Papua-Nowa Gwinea"]
            },
            "America/Asuncion": {
              long: ["Paragwaj (czas standardowy)", "Paragwaj (czas letni)"]
            },
            "America/Lima": {
              long: ["Peru (czas standardowy)", "Peru (czas letni)"]
            },
            "Asia/Manila": {
              long: ["Filipiny (czas standardowy)", "Filipiny (czas letni)"]
            },
            "Pacific/Enderbury": {
              long: ["czas Feniks", "czas Feniks"]
            },
            "America/Miquelon": {
              long: ["Saint-Pierre i Miquelon (czas standardowy)", "Saint-Pierre i Miquelon (czas letni)"]
            },
            "Pacific/Pitcairn": {
              long: ["czas Pitcairn", "czas Pitcairn"]
            },
            "Pacific/Ponape": {
              long: ["czas Pohnpei", "czas Pohnpei"]
            },
            "Asia/Pyongyang": {
              long: ["czas Pjongjang", "czas Pjongjang"]
            },
            "Indian/Reunion": {
              long: ["czas Reunion", "czas Reunion"]
            },
            "Antarctica/Rothera": {
              long: ["czas Rothera", "czas Rothera"]
            },
            "Asia/Sakhalin": {
              long: ["Sachalin (czas standardowy)", "Sachalin (czas letni)"]
            },
            "Pacific/Pago_Pago": {
              long: ["Samoa (czas standardowy)", "Samoa (czas letni)"]
            },
            "Indian/Mahe": {
              long: ["czas Seszele", "czas Seszele"]
            },
            "Asia/Singapore": {
              long: ["czas Singapur", "czas Singapur"]
            },
            "Pacific/Guadalcanal": {
              long: ["czas Wyspy Salomona", "czas Wyspy Salomona"]
            },
            "Atlantic/South_Georgia": {
              long: ["czas Georgia Południowa", "czas Georgia Południowa"]
            },
            "Asia/Yekaterinburg": {
              long: ["Jekaterynburg (czas standardowy)", "Jekaterynburg (czas letni)"]
            },
            "Antarctica/Syowa": {
              long: ["czas Syowa", "czas Syowa"]
            },
            "Pacific/Tahiti": {
              long: ["czas Tahiti", "czas Tahiti"]
            },
            "Asia/Taipei": {
              long: ["Tajpej (czas standardowy)", "Tajpej (czas letni)"]
            },
            "Asia/Tashkent": {
              long: ["Uzbekistan (czas standardowy)", "Uzbekistan (czas letni)"]
            },
            "Pacific/Fakaofo": {
              long: ["czas Tokelau", "czas Tokelau"]
            },
            "Pacific/Tongatapu": {
              long: ["Tonga (czas standardowy)", "Tonga (czas letni)"]
            },
            "Pacific/Truk": {
              long: ["czas Chuuk", "czas Chuuk"]
            },
            "Pacific/Funafuti": {
              long: ["czas Tuvalu", "czas Tuvalu"]
            },
            "America/Montevideo": {
              long: ["Urugwaj (czas standardowy)", "Urugwaj (czas letni)"]
            },
            "Pacific/Efate": {
              long: ["Vanuatu (czas standardowy)", "Vanuatu (czas letni)"]
            },
            "America/Caracas": {
              long: ["czas Wenezuela", "czas Wenezuela"]
            },
            "Asia/Vladivostok": {
              long: ["Władywostok (czas standardowy)", "Władywostok (czas letni)"]
            },
            "Europe/Volgograd": {
              long: ["Wołgograd (czas standardowy)", "Wołgograd (czas letni)"]
            },
            "Antarctica/Vostok": {
              long: ["czas Wostok", "czas Wostok"]
            },
            "Pacific/Wake": {
              long: ["czas Wake", "czas Wake"]
            },
            "Pacific/Wallis": {
              long: ["czas Wallis i Futuna", "czas Wallis i Futuna"]
            },
            "Asia/Yakutsk": {
              long: ["Jakuck (czas standardowy)", "Jakuck (czas letni)"]
            },
            "America/Whitehorse": {
              long: ["czas Jukon", "czas Jukon"]
            },
            UTC: {
              long: ["uniwersalny czas koordynowany", "uniwersalny czas koordynowany"],
              short: ["UTC", "UTC"]
            }
          },
          gmtFormat: "GMT{0}",
          hourFormat: "+HH:mm;-HH:mm",
          dateFormat: {
            full: "EEEE, d MMMM y",
            long: "d MMMM y",
            medium: "d MMM y",
            short: "d.MM.y"
          },
          timeFormat: {
            full: "HH:mm:ss zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
          },
          dateTimeFormat: {
            full: "{1} {0}",
            long: "{1} {0}",
            medium: "{1}, {0}",
            short: "{1}, {0}"
          },
          formats: {
            gregory: {
              Bh: "h B",
              Bhm: "h:mm B",
              Bhms: "h:mm:ss B",
              d: "d",
              E: "ccc",
              EBhm: "E h:mm B",
              EBhms: "E h:mm:ss B",
              Ed: "E, d",
              Ehm: "E, h:mm a",
              EHm: "E, HH:mm",
              Ehms: "E, h:mm:ss a",
              EHms: "E, HH:mm:ss",
              Gy: "y G",
              GyMd: "d.MM.y GGGGG",
              GyMMM: "MMM y G",
              GyMMMd: "d MMM y G",
              GyMMMEd: "E, d MMM y G",
              GyMMMM: "LLLL y G",
              GyMMMMd: "d MMMM y G",
              GyMMMMEd: "E, d MMMM y G",
              h: "h a",
              H: "HH",
              hm: "h:mm a",
              Hm: "HH:mm",
              hms: "h:mm:ss a",
              Hms: "HH:mm:ss",
              hmsv: "h:mm:ss a v",
              Hmsv: "HH:mm:ss v",
              hmv: "h:mm a v",
              Hmv: "HH:mm v",
              M: "L",
              Md: "d.MM",
              MEd: "E, d.MM",
              MMM: "LLL",
              MMMd: "d MMM",
              MMMEd: "E, d MMM",
              MMMMd: "d MMMM",
              MMMMEd: "E, d MMMM",
              ms: "mm:ss",
              y: "y",
              yM: "MM.y",
              yMd: "d.MM.y",
              yMEd: "E, d.MM.y",
              yMMM: "LLL y",
              yMMMd: "d MMM y",
              yMMMEd: "E, d MMM y",
              yMMMM: "LLLL y",
              yMMMMd: "d MMMM y",
              yMMMMEd: "E, d MMMM y",
              "EEEE, d MMMM y": "EEEE, d MMMM y",
              "d MMMM y": "d MMMM y",
              "d MMM y": "d MMM y",
              "d.MM.y": "d.MM.y",
              "HH:mm:ss zzzz": "HH:mm:ss zzzz",
              "HH:mm:ss z": "HH:mm:ss z",
              "HH:mm:ss": "HH:mm:ss",
              "HH:mm": "HH:mm",
              "EEEE, d MMMM y HH:mm:ss zzzz": "EEEE, d MMMM y HH:mm:ss zzzz",
              "d MMMM y HH:mm:ss zzzz": "d MMMM y HH:mm:ss zzzz",
              "d MMM y, HH:mm:ss zzzz": "d MMM y, HH:mm:ss zzzz",
              "d.MM.y, HH:mm:ss zzzz": "d.MM.y, HH:mm:ss zzzz",
              "d, HH:mm:ss zzzz": "d, HH:mm:ss zzzz",
              "E, HH:mm:ss zzzz": "ccc, HH:mm:ss zzzz",
              "Ed, HH:mm:ss zzzz": "E, d, HH:mm:ss zzzz",
              "Gy, HH:mm:ss zzzz": "y G, HH:mm:ss zzzz",
              "GyMd, HH:mm:ss zzzz": "d.MM.y GGGGG, HH:mm:ss zzzz",
              "GyMMM, HH:mm:ss zzzz": "MMM y G, HH:mm:ss zzzz",
              "GyMMMd, HH:mm:ss zzzz": "d MMM y G, HH:mm:ss zzzz",
              "GyMMMEd, HH:mm:ss zzzz": "E, d MMM y G, HH:mm:ss zzzz",
              "GyMMMM HH:mm:ss zzzz": "LLLL y G HH:mm:ss zzzz",
              "GyMMMMd HH:mm:ss zzzz": "d MMMM y G HH:mm:ss zzzz",
              "GyMMMMEd HH:mm:ss zzzz": "E, d MMMM y G HH:mm:ss zzzz",
              "M, HH:mm:ss zzzz": "L, HH:mm:ss zzzz",
              "Md, HH:mm:ss zzzz": "d.MM, HH:mm:ss zzzz",
              "MEd, HH:mm:ss zzzz": "E, d.MM, HH:mm:ss zzzz",
              "MMM, HH:mm:ss zzzz": "LLL, HH:mm:ss zzzz",
              "MMMd, HH:mm:ss zzzz": "d MMM, HH:mm:ss zzzz",
              "MMMEd, HH:mm:ss zzzz": "E, d MMM, HH:mm:ss zzzz",
              "MMMMd HH:mm:ss zzzz": "d MMMM HH:mm:ss zzzz",
              "MMMMEd HH:mm:ss zzzz": "E, d MMMM HH:mm:ss zzzz",
              "y, HH:mm:ss zzzz": "y, HH:mm:ss zzzz",
              "yM, HH:mm:ss zzzz": "MM.y, HH:mm:ss zzzz",
              "yMd, HH:mm:ss zzzz": "d.MM.y, HH:mm:ss zzzz",
              "yMEd, HH:mm:ss zzzz": "E, d.MM.y, HH:mm:ss zzzz",
              "yMMM, HH:mm:ss zzzz": "LLL y, HH:mm:ss zzzz",
              "yMMMd, HH:mm:ss zzzz": "d MMM y, HH:mm:ss zzzz",
              "yMMMEd, HH:mm:ss zzzz": "E, d MMM y, HH:mm:ss zzzz",
              "yMMMM HH:mm:ss zzzz": "LLLL y HH:mm:ss zzzz",
              "yMMMMd HH:mm:ss zzzz": "d MMMM y HH:mm:ss zzzz",
              "yMMMMEd HH:mm:ss zzzz": "E, d MMMM y HH:mm:ss zzzz",
              "EEEE, d MMMM y HH:mm:ss z": "EEEE, d MMMM y HH:mm:ss z",
              "d MMMM y HH:mm:ss z": "d MMMM y HH:mm:ss z",
              "d MMM y, HH:mm:ss z": "d MMM y, HH:mm:ss z",
              "d.MM.y, HH:mm:ss z": "d.MM.y, HH:mm:ss z",
              "d, HH:mm:ss z": "d, HH:mm:ss z",
              "E, HH:mm:ss z": "ccc, HH:mm:ss z",
              "Ed, HH:mm:ss z": "E, d, HH:mm:ss z",
              "Gy, HH:mm:ss z": "y G, HH:mm:ss z",
              "GyMd, HH:mm:ss z": "d.MM.y GGGGG, HH:mm:ss z",
              "GyMMM, HH:mm:ss z": "MMM y G, HH:mm:ss z",
              "GyMMMd, HH:mm:ss z": "d MMM y G, HH:mm:ss z",
              "GyMMMEd, HH:mm:ss z": "E, d MMM y G, HH:mm:ss z",
              "GyMMMM HH:mm:ss z": "LLLL y G HH:mm:ss z",
              "GyMMMMd HH:mm:ss z": "d MMMM y G HH:mm:ss z",
              "GyMMMMEd HH:mm:ss z": "E, d MMMM y G HH:mm:ss z",
              "M, HH:mm:ss z": "L, HH:mm:ss z",
              "Md, HH:mm:ss z": "d.MM, HH:mm:ss z",
              "MEd, HH:mm:ss z": "E, d.MM, HH:mm:ss z",
              "MMM, HH:mm:ss z": "LLL, HH:mm:ss z",
              "MMMd, HH:mm:ss z": "d MMM, HH:mm:ss z",
              "MMMEd, HH:mm:ss z": "E, d MMM, HH:mm:ss z",
              "MMMMd HH:mm:ss z": "d MMMM HH:mm:ss z",
              "MMMMEd HH:mm:ss z": "E, d MMMM HH:mm:ss z",
              "y, HH:mm:ss z": "y, HH:mm:ss z",
              "yM, HH:mm:ss z": "MM.y, HH:mm:ss z",
              "yMd, HH:mm:ss z": "d.MM.y, HH:mm:ss z",
              "yMEd, HH:mm:ss z": "E, d.MM.y, HH:mm:ss z",
              "yMMM, HH:mm:ss z": "LLL y, HH:mm:ss z",
              "yMMMd, HH:mm:ss z": "d MMM y, HH:mm:ss z",
              "yMMMEd, HH:mm:ss z": "E, d MMM y, HH:mm:ss z",
              "yMMMM HH:mm:ss z": "LLLL y HH:mm:ss z",
              "yMMMMd HH:mm:ss z": "d MMMM y HH:mm:ss z",
              "yMMMMEd HH:mm:ss z": "E, d MMMM y HH:mm:ss z",
              "EEEE, d MMMM y HH:mm:ss": "EEEE, d MMMM y HH:mm:ss",
              "d MMMM y HH:mm:ss": "d MMMM y HH:mm:ss",
              "d MMM y, HH:mm:ss": "d MMM y, HH:mm:ss",
              "d.MM.y, HH:mm:ss": "d.MM.y, HH:mm:ss",
              "d, HH:mm:ss": "d, HH:mm:ss",
              "E, HH:mm:ss": "ccc, HH:mm:ss",
              "Ed, HH:mm:ss": "E, d, HH:mm:ss",
              "Gy, HH:mm:ss": "y G, HH:mm:ss",
              "GyMd, HH:mm:ss": "d.MM.y GGGGG, HH:mm:ss",
              "GyMMM, HH:mm:ss": "MMM y G, HH:mm:ss",
              "GyMMMd, HH:mm:ss": "d MMM y G, HH:mm:ss",
              "GyMMMEd, HH:mm:ss": "E, d MMM y G, HH:mm:ss",
              "GyMMMM HH:mm:ss": "LLLL y G HH:mm:ss",
              "GyMMMMd HH:mm:ss": "d MMMM y G HH:mm:ss",
              "GyMMMMEd HH:mm:ss": "E, d MMMM y G HH:mm:ss",
              "M, HH:mm:ss": "L, HH:mm:ss",
              "Md, HH:mm:ss": "d.MM, HH:mm:ss",
              "MEd, HH:mm:ss": "E, d.MM, HH:mm:ss",
              "MMM, HH:mm:ss": "LLL, HH:mm:ss",
              "MMMd, HH:mm:ss": "d MMM, HH:mm:ss",
              "MMMEd, HH:mm:ss": "E, d MMM, HH:mm:ss",
              "MMMMd HH:mm:ss": "d MMMM HH:mm:ss",
              "MMMMEd HH:mm:ss": "E, d MMMM HH:mm:ss",
              "y, HH:mm:ss": "y, HH:mm:ss",
              "yM, HH:mm:ss": "MM.y, HH:mm:ss",
              "yMd, HH:mm:ss": "d.MM.y, HH:mm:ss",
              "yMEd, HH:mm:ss": "E, d.MM.y, HH:mm:ss",
              "yMMM, HH:mm:ss": "LLL y, HH:mm:ss",
              "yMMMd, HH:mm:ss": "d MMM y, HH:mm:ss",
              "yMMMEd, HH:mm:ss": "E, d MMM y, HH:mm:ss",
              "yMMMM HH:mm:ss": "LLLL y HH:mm:ss",
              "yMMMMd HH:mm:ss": "d MMMM y HH:mm:ss",
              "yMMMMEd HH:mm:ss": "E, d MMMM y HH:mm:ss",
              "EEEE, d MMMM y HH:mm": "EEEE, d MMMM y HH:mm",
              "d MMMM y HH:mm": "d MMMM y HH:mm",
              "d MMM y, HH:mm": "d MMM y, HH:mm",
              "d.MM.y, HH:mm": "d.MM.y, HH:mm",
              "d, HH:mm": "d, HH:mm",
              "E, HH:mm": "ccc, HH:mm",
              "Ed, HH:mm": "E, d, HH:mm",
              "Gy, HH:mm": "y G, HH:mm",
              "GyMd, HH:mm": "d.MM.y GGGGG, HH:mm",
              "GyMMM, HH:mm": "MMM y G, HH:mm",
              "GyMMMd, HH:mm": "d MMM y G, HH:mm",
              "GyMMMEd, HH:mm": "E, d MMM y G, HH:mm",
              "GyMMMM HH:mm": "LLLL y G HH:mm",
              "GyMMMMd HH:mm": "d MMMM y G HH:mm",
              "GyMMMMEd HH:mm": "E, d MMMM y G HH:mm",
              "M, HH:mm": "L, HH:mm",
              "Md, HH:mm": "d.MM, HH:mm",
              "MEd, HH:mm": "E, d.MM, HH:mm",
              "MMM, HH:mm": "LLL, HH:mm",
              "MMMd, HH:mm": "d MMM, HH:mm",
              "MMMEd, HH:mm": "E, d MMM, HH:mm",
              "MMMMd HH:mm": "d MMMM HH:mm",
              "MMMMEd HH:mm": "E, d MMMM HH:mm",
              "y, HH:mm": "y, HH:mm",
              "yM, HH:mm": "MM.y, HH:mm",
              "yMd, HH:mm": "d.MM.y, HH:mm",
              "yMEd, HH:mm": "E, d.MM.y, HH:mm",
              "yMMM, HH:mm": "LLL y, HH:mm",
              "yMMMd, HH:mm": "d MMM y, HH:mm",
              "yMMMEd, HH:mm": "E, d MMM y, HH:mm",
              "yMMMM HH:mm": "LLLL y HH:mm",
              "yMMMMd HH:mm": "d MMMM y HH:mm",
              "yMMMMEd HH:mm": "E, d MMMM y HH:mm",
              "EEEE, d MMMM y Bh": "EEEE, d MMMM y h B",
              "d MMMM y Bh": "d MMMM y h B",
              "d MMM y, Bh": "d MMM y, h B",
              "d.MM.y, Bh": "d.MM.y, h B",
              "d, Bh": "d, h B",
              "E, Bh": "ccc, h B",
              "Ed, Bh": "E, d, h B",
              "Gy, Bh": "y G, h B",
              "GyMd, Bh": "d.MM.y GGGGG, h B",
              "GyMMM, Bh": "MMM y G, h B",
              "GyMMMd, Bh": "d MMM y G, h B",
              "GyMMMEd, Bh": "E, d MMM y G, h B",
              "GyMMMM Bh": "LLLL y G h B",
              "GyMMMMd Bh": "d MMMM y G h B",
              "GyMMMMEd Bh": "E, d MMMM y G h B",
              "M, Bh": "L, h B",
              "Md, Bh": "d.MM, h B",
              "MEd, Bh": "E, d.MM, h B",
              "MMM, Bh": "LLL, h B",
              "MMMd, Bh": "d MMM, h B",
              "MMMEd, Bh": "E, d MMM, h B",
              "MMMMd Bh": "d MMMM h B",
              "MMMMEd Bh": "E, d MMMM h B",
              "y, Bh": "y, h B",
              "yM, Bh": "MM.y, h B",
              "yMd, Bh": "d.MM.y, h B",
              "yMEd, Bh": "E, d.MM.y, h B",
              "yMMM, Bh": "LLL y, h B",
              "yMMMd, Bh": "d MMM y, h B",
              "yMMMEd, Bh": "E, d MMM y, h B",
              "yMMMM Bh": "LLLL y h B",
              "yMMMMd Bh": "d MMMM y h B",
              "yMMMMEd Bh": "E, d MMMM y h B",
              "EEEE, d MMMM y Bhm": "EEEE, d MMMM y h:mm B",
              "d MMMM y Bhm": "d MMMM y h:mm B",
              "d MMM y, Bhm": "d MMM y, h:mm B",
              "d.MM.y, Bhm": "d.MM.y, h:mm B",
              "d, Bhm": "d, h:mm B",
              "E, Bhm": "ccc, h:mm B",
              "Ed, Bhm": "E, d, h:mm B",
              "Gy, Bhm": "y G, h:mm B",
              "GyMd, Bhm": "d.MM.y GGGGG, h:mm B",
              "GyMMM, Bhm": "MMM y G, h:mm B",
              "GyMMMd, Bhm": "d MMM y G, h:mm B",
              "GyMMMEd, Bhm": "E, d MMM y G, h:mm B",
              "GyMMMM Bhm": "LLLL y G h:mm B",
              "GyMMMMd Bhm": "d MMMM y G h:mm B",
              "GyMMMMEd Bhm": "E, d MMMM y G h:mm B",
              "M, Bhm": "L, h:mm B",
              "Md, Bhm": "d.MM, h:mm B",
              "MEd, Bhm": "E, d.MM, h:mm B",
              "MMM, Bhm": "LLL, h:mm B",
              "MMMd, Bhm": "d MMM, h:mm B",
              "MMMEd, Bhm": "E, d MMM, h:mm B",
              "MMMMd Bhm": "d MMMM h:mm B",
              "MMMMEd Bhm": "E, d MMMM h:mm B",
              "y, Bhm": "y, h:mm B",
              "yM, Bhm": "MM.y, h:mm B",
              "yMd, Bhm": "d.MM.y, h:mm B",
              "yMEd, Bhm": "E, d.MM.y, h:mm B",
              "yMMM, Bhm": "LLL y, h:mm B",
              "yMMMd, Bhm": "d MMM y, h:mm B",
              "yMMMEd, Bhm": "E, d MMM y, h:mm B",
              "yMMMM Bhm": "LLLL y h:mm B",
              "yMMMMd Bhm": "d MMMM y h:mm B",
              "yMMMMEd Bhm": "E, d MMMM y h:mm B",
              "EEEE, d MMMM y Bhms": "EEEE, d MMMM y h:mm:ss B",
              "d MMMM y Bhms": "d MMMM y h:mm:ss B",
              "d MMM y, Bhms": "d MMM y, h:mm:ss B",
              "d.MM.y, Bhms": "d.MM.y, h:mm:ss B",
              "d, Bhms": "d, h:mm:ss B",
              "E, Bhms": "ccc, h:mm:ss B",
              "Ed, Bhms": "E, d, h:mm:ss B",
              "Gy, Bhms": "y G, h:mm:ss B",
              "GyMd, Bhms": "d.MM.y GGGGG, h:mm:ss B",
              "GyMMM, Bhms": "MMM y G, h:mm:ss B",
              "GyMMMd, Bhms": "d MMM y G, h:mm:ss B",
              "GyMMMEd, Bhms": "E, d MMM y G, h:mm:ss B",
              "GyMMMM Bhms": "LLLL y G h:mm:ss B",
              "GyMMMMd Bhms": "d MMMM y G h:mm:ss B",
              "GyMMMMEd Bhms": "E, d MMMM y G h:mm:ss B",
              "M, Bhms": "L, h:mm:ss B",
              "Md, Bhms": "d.MM, h:mm:ss B",
              "MEd, Bhms": "E, d.MM, h:mm:ss B",
              "MMM, Bhms": "LLL, h:mm:ss B",
              "MMMd, Bhms": "d MMM, h:mm:ss B",
              "MMMEd, Bhms": "E, d MMM, h:mm:ss B",
              "MMMMd Bhms": "d MMMM h:mm:ss B",
              "MMMMEd Bhms": "E, d MMMM h:mm:ss B",
              "y, Bhms": "y, h:mm:ss B",
              "yM, Bhms": "MM.y, h:mm:ss B",
              "yMd, Bhms": "d.MM.y, h:mm:ss B",
              "yMEd, Bhms": "E, d.MM.y, h:mm:ss B",
              "yMMM, Bhms": "LLL y, h:mm:ss B",
              "yMMMd, Bhms": "d MMM y, h:mm:ss B",
              "yMMMEd, Bhms": "E, d MMM y, h:mm:ss B",
              "yMMMM Bhms": "LLLL y h:mm:ss B",
              "yMMMMd Bhms": "d MMMM y h:mm:ss B",
              "yMMMMEd Bhms": "E, d MMMM y h:mm:ss B",
              "EEEE, d MMMM y h": "EEEE, d MMMM y h a",
              "d MMMM y h": "d MMMM y h a",
              "d MMM y, h": "d MMM y, h a",
              "d.MM.y, h": "d.MM.y, h a",
              "d, h": "d, h a",
              "E, h": "ccc, h a",
              "Ed, h": "E, d, h a",
              "Gy, h": "y G, h a",
              "GyMd, h": "d.MM.y GGGGG, h a",
              "GyMMM, h": "MMM y G, h a",
              "GyMMMd, h": "d MMM y G, h a",
              "GyMMMEd, h": "E, d MMM y G, h a",
              "GyMMMM h": "LLLL y G h a",
              "GyMMMMd h": "d MMMM y G h a",
              "GyMMMMEd h": "E, d MMMM y G h a",
              "M, h": "L, h a",
              "Md, h": "d.MM, h a",
              "MEd, h": "E, d.MM, h a",
              "MMM, h": "LLL, h a",
              "MMMd, h": "d MMM, h a",
              "MMMEd, h": "E, d MMM, h a",
              "MMMMd h": "d MMMM h a",
              "MMMMEd h": "E, d MMMM h a",
              "y, h": "y, h a",
              "yM, h": "MM.y, h a",
              "yMd, h": "d.MM.y, h a",
              "yMEd, h": "E, d.MM.y, h a",
              "yMMM, h": "LLL y, h a",
              "yMMMd, h": "d MMM y, h a",
              "yMMMEd, h": "E, d MMM y, h a",
              "yMMMM h": "LLLL y h a",
              "yMMMMd h": "d MMMM y h a",
              "yMMMMEd h": "E, d MMMM y h a",
              "EEEE, d MMMM y H": "EEEE, d MMMM y HH",
              "d MMMM y H": "d MMMM y HH",
              "d MMM y, H": "d MMM y, HH",
              "d.MM.y, H": "d.MM.y, HH",
              "d, H": "d, HH",
              "E, H": "ccc, HH",
              "Ed, H": "E, d, HH",
              "Gy, H": "y G, HH",
              "GyMd, H": "d.MM.y GGGGG, HH",
              "GyMMM, H": "MMM y G, HH",
              "GyMMMd, H": "d MMM y G, HH",
              "GyMMMEd, H": "E, d MMM y G, HH",
              "GyMMMM H": "LLLL y G HH",
              "GyMMMMd H": "d MMMM y G HH",
              "GyMMMMEd H": "E, d MMMM y G HH",
              "M, H": "L, HH",
              "Md, H": "d.MM, HH",
              "MEd, H": "E, d.MM, HH",
              "MMM, H": "LLL, HH",
              "MMMd, H": "d MMM, HH",
              "MMMEd, H": "E, d MMM, HH",
              "MMMMd H": "d MMMM HH",
              "MMMMEd H": "E, d MMMM HH",
              "y, H": "y, HH",
              "yM, H": "MM.y, HH",
              "yMd, H": "d.MM.y, HH",
              "yMEd, H": "E, d.MM.y, HH",
              "yMMM, H": "LLL y, HH",
              "yMMMd, H": "d MMM y, HH",
              "yMMMEd, H": "E, d MMM y, HH",
              "yMMMM H": "LLLL y HH",
              "yMMMMd H": "d MMMM y HH",
              "yMMMMEd H": "E, d MMMM y HH",
              "EEEE, d MMMM y hm": "EEEE, d MMMM y h:mm a",
              "d MMMM y hm": "d MMMM y h:mm a",
              "d MMM y, hm": "d MMM y, h:mm a",
              "d.MM.y, hm": "d.MM.y, h:mm a",
              "d, hm": "d, h:mm a",
              "E, hm": "ccc, h:mm a",
              "Ed, hm": "E, d, h:mm a",
              "Gy, hm": "y G, h:mm a",
              "GyMd, hm": "d.MM.y GGGGG, h:mm a",
              "GyMMM, hm": "MMM y G, h:mm a",
              "GyMMMd, hm": "d MMM y G, h:mm a",
              "GyMMMEd, hm": "E, d MMM y G, h:mm a",
              "GyMMMM hm": "LLLL y G h:mm a",
              "GyMMMMd hm": "d MMMM y G h:mm a",
              "GyMMMMEd hm": "E, d MMMM y G h:mm a",
              "M, hm": "L, h:mm a",
              "Md, hm": "d.MM, h:mm a",
              "MEd, hm": "E, d.MM, h:mm a",
              "MMM, hm": "LLL, h:mm a",
              "MMMd, hm": "d MMM, h:mm a",
              "MMMEd, hm": "E, d MMM, h:mm a",
              "MMMMd hm": "d MMMM h:mm a",
              "MMMMEd hm": "E, d MMMM h:mm a",
              "y, hm": "y, h:mm a",
              "yM, hm": "MM.y, h:mm a",
              "yMd, hm": "d.MM.y, h:mm a",
              "yMEd, hm": "E, d.MM.y, h:mm a",
              "yMMM, hm": "LLL y, h:mm a",
              "yMMMd, hm": "d MMM y, h:mm a",
              "yMMMEd, hm": "E, d MMM y, h:mm a",
              "yMMMM hm": "LLLL y h:mm a",
              "yMMMMd hm": "d MMMM y h:mm a",
              "yMMMMEd hm": "E, d MMMM y h:mm a",
              "EEEE, d MMMM y Hm": "EEEE, d MMMM y HH:mm",
              "d MMMM y Hm": "d MMMM y HH:mm",
              "d MMM y, Hm": "d MMM y, HH:mm",
              "d.MM.y, Hm": "d.MM.y, HH:mm",
              "d, Hm": "d, HH:mm",
              "E, Hm": "ccc, HH:mm",
              "Ed, Hm": "E, d, HH:mm",
              "Gy, Hm": "y G, HH:mm",
              "GyMd, Hm": "d.MM.y GGGGG, HH:mm",
              "GyMMM, Hm": "MMM y G, HH:mm",
              "GyMMMd, Hm": "d MMM y G, HH:mm",
              "GyMMMEd, Hm": "E, d MMM y G, HH:mm",
              "GyMMMM Hm": "LLLL y G HH:mm",
              "GyMMMMd Hm": "d MMMM y G HH:mm",
              "GyMMMMEd Hm": "E, d MMMM y G HH:mm",
              "M, Hm": "L, HH:mm",
              "Md, Hm": "d.MM, HH:mm",
              "MEd, Hm": "E, d.MM, HH:mm",
              "MMM, Hm": "LLL, HH:mm",
              "MMMd, Hm": "d MMM, HH:mm",
              "MMMEd, Hm": "E, d MMM, HH:mm",
              "MMMMd Hm": "d MMMM HH:mm",
              "MMMMEd Hm": "E, d MMMM HH:mm",
              "y, Hm": "y, HH:mm",
              "yM, Hm": "MM.y, HH:mm",
              "yMd, Hm": "d.MM.y, HH:mm",
              "yMEd, Hm": "E, d.MM.y, HH:mm",
              "yMMM, Hm": "LLL y, HH:mm",
              "yMMMd, Hm": "d MMM y, HH:mm",
              "yMMMEd, Hm": "E, d MMM y, HH:mm",
              "yMMMM Hm": "LLLL y HH:mm",
              "yMMMMd Hm": "d MMMM y HH:mm",
              "yMMMMEd Hm": "E, d MMMM y HH:mm",
              "EEEE, d MMMM y hms": "EEEE, d MMMM y h:mm:ss a",
              "d MMMM y hms": "d MMMM y h:mm:ss a",
              "d MMM y, hms": "d MMM y, h:mm:ss a",
              "d.MM.y, hms": "d.MM.y, h:mm:ss a",
              "d, hms": "d, h:mm:ss a",
              "E, hms": "ccc, h:mm:ss a",
              "Ed, hms": "E, d, h:mm:ss a",
              "Gy, hms": "y G, h:mm:ss a",
              "GyMd, hms": "d.MM.y GGGGG, h:mm:ss a",
              "GyMMM, hms": "MMM y G, h:mm:ss a",
              "GyMMMd, hms": "d MMM y G, h:mm:ss a",
              "GyMMMEd, hms": "E, d MMM y G, h:mm:ss a",
              "GyMMMM hms": "LLLL y G h:mm:ss a",
              "GyMMMMd hms": "d MMMM y G h:mm:ss a",
              "GyMMMMEd hms": "E, d MMMM y G h:mm:ss a",
              "M, hms": "L, h:mm:ss a",
              "Md, hms": "d.MM, h:mm:ss a",
              "MEd, hms": "E, d.MM, h:mm:ss a",
              "MMM, hms": "LLL, h:mm:ss a",
              "MMMd, hms": "d MMM, h:mm:ss a",
              "MMMEd, hms": "E, d MMM, h:mm:ss a",
              "MMMMd hms": "d MMMM h:mm:ss a",
              "MMMMEd hms": "E, d MMMM h:mm:ss a",
              "y, hms": "y, h:mm:ss a",
              "yM, hms": "MM.y, h:mm:ss a",
              "yMd, hms": "d.MM.y, h:mm:ss a",
              "yMEd, hms": "E, d.MM.y, h:mm:ss a",
              "yMMM, hms": "LLL y, h:mm:ss a",
              "yMMMd, hms": "d MMM y, h:mm:ss a",
              "yMMMEd, hms": "E, d MMM y, h:mm:ss a",
              "yMMMM hms": "LLLL y h:mm:ss a",
              "yMMMMd hms": "d MMMM y h:mm:ss a",
              "yMMMMEd hms": "E, d MMMM y h:mm:ss a",
              "EEEE, d MMMM y Hms": "EEEE, d MMMM y HH:mm:ss",
              "d MMMM y Hms": "d MMMM y HH:mm:ss",
              "d MMM y, Hms": "d MMM y, HH:mm:ss",
              "d.MM.y, Hms": "d.MM.y, HH:mm:ss",
              "d, Hms": "d, HH:mm:ss",
              "E, Hms": "ccc, HH:mm:ss",
              "Ed, Hms": "E, d, HH:mm:ss",
              "Gy, Hms": "y G, HH:mm:ss",
              "GyMd, Hms": "d.MM.y GGGGG, HH:mm:ss",
              "GyMMM, Hms": "MMM y G, HH:mm:ss",
              "GyMMMd, Hms": "d MMM y G, HH:mm:ss",
              "GyMMMEd, Hms": "E, d MMM y G, HH:mm:ss",
              "GyMMMM Hms": "LLLL y G HH:mm:ss",
              "GyMMMMd Hms": "d MMMM y G HH:mm:ss",
              "GyMMMMEd Hms": "E, d MMMM y G HH:mm:ss",
              "M, Hms": "L, HH:mm:ss",
              "Md, Hms": "d.MM, HH:mm:ss",
              "MEd, Hms": "E, d.MM, HH:mm:ss",
              "MMM, Hms": "LLL, HH:mm:ss",
              "MMMd, Hms": "d MMM, HH:mm:ss",
              "MMMEd, Hms": "E, d MMM, HH:mm:ss",
              "MMMMd Hms": "d MMMM HH:mm:ss",
              "MMMMEd Hms": "E, d MMMM HH:mm:ss",
              "y, Hms": "y, HH:mm:ss",
              "yM, Hms": "MM.y, HH:mm:ss",
              "yMd, Hms": "d.MM.y, HH:mm:ss",
              "yMEd, Hms": "E, d.MM.y, HH:mm:ss",
              "yMMM, Hms": "LLL y, HH:mm:ss",
              "yMMMd, Hms": "d MMM y, HH:mm:ss",
              "yMMMEd, Hms": "E, d MMM y, HH:mm:ss",
              "yMMMM Hms": "LLLL y HH:mm:ss",
              "yMMMMd Hms": "d MMMM y HH:mm:ss",
              "yMMMMEd Hms": "E, d MMMM y HH:mm:ss",
              "EEEE, d MMMM y hmsv": "EEEE, d MMMM y h:mm:ss a v",
              "d MMMM y hmsv": "d MMMM y h:mm:ss a v",
              "d MMM y, hmsv": "d MMM y, h:mm:ss a v",
              "d.MM.y, hmsv": "d.MM.y, h:mm:ss a v",
              "d, hmsv": "d, h:mm:ss a v",
              "E, hmsv": "ccc, h:mm:ss a v",
              "Ed, hmsv": "E, d, h:mm:ss a v",
              "Gy, hmsv": "y G, h:mm:ss a v",
              "GyMd, hmsv": "d.MM.y GGGGG, h:mm:ss a v",
              "GyMMM, hmsv": "MMM y G, h:mm:ss a v",
              "GyMMMd, hmsv": "d MMM y G, h:mm:ss a v",
              "GyMMMEd, hmsv": "E, d MMM y G, h:mm:ss a v",
              "GyMMMM hmsv": "LLLL y G h:mm:ss a v",
              "GyMMMMd hmsv": "d MMMM y G h:mm:ss a v",
              "GyMMMMEd hmsv": "E, d MMMM y G h:mm:ss a v",
              "M, hmsv": "L, h:mm:ss a v",
              "Md, hmsv": "d.MM, h:mm:ss a v",
              "MEd, hmsv": "E, d.MM, h:mm:ss a v",
              "MMM, hmsv": "LLL, h:mm:ss a v",
              "MMMd, hmsv": "d MMM, h:mm:ss a v",
              "MMMEd, hmsv": "E, d MMM, h:mm:ss a v",
              "MMMMd hmsv": "d MMMM h:mm:ss a v",
              "MMMMEd hmsv": "E, d MMMM h:mm:ss a v",
              "y, hmsv": "y, h:mm:ss a v",
              "yM, hmsv": "MM.y, h:mm:ss a v",
              "yMd, hmsv": "d.MM.y, h:mm:ss a v",
              "yMEd, hmsv": "E, d.MM.y, h:mm:ss a v",
              "yMMM, hmsv": "LLL y, h:mm:ss a v",
              "yMMMd, hmsv": "d MMM y, h:mm:ss a v",
              "yMMMEd, hmsv": "E, d MMM y, h:mm:ss a v",
              "yMMMM hmsv": "LLLL y h:mm:ss a v",
              "yMMMMd hmsv": "d MMMM y h:mm:ss a v",
              "yMMMMEd hmsv": "E, d MMMM y h:mm:ss a v",
              "EEEE, d MMMM y Hmsv": "EEEE, d MMMM y HH:mm:ss v",
              "d MMMM y Hmsv": "d MMMM y HH:mm:ss v",
              "d MMM y, Hmsv": "d MMM y, HH:mm:ss v",
              "d.MM.y, Hmsv": "d.MM.y, HH:mm:ss v",
              "d, Hmsv": "d, HH:mm:ss v",
              "E, Hmsv": "ccc, HH:mm:ss v",
              "Ed, Hmsv": "E, d, HH:mm:ss v",
              "Gy, Hmsv": "y G, HH:mm:ss v",
              "GyMd, Hmsv": "d.MM.y GGGGG, HH:mm:ss v",
              "GyMMM, Hmsv": "MMM y G, HH:mm:ss v",
              "GyMMMd, Hmsv": "d MMM y G, HH:mm:ss v",
              "GyMMMEd, Hmsv": "E, d MMM y G, HH:mm:ss v",
              "GyMMMM Hmsv": "LLLL y G HH:mm:ss v",
              "GyMMMMd Hmsv": "d MMMM y G HH:mm:ss v",
              "GyMMMMEd Hmsv": "E, d MMMM y G HH:mm:ss v",
              "M, Hmsv": "L, HH:mm:ss v",
              "Md, Hmsv": "d.MM, HH:mm:ss v",
              "MEd, Hmsv": "E, d.MM, HH:mm:ss v",
              "MMM, Hmsv": "LLL, HH:mm:ss v",
              "MMMd, Hmsv": "d MMM, HH:mm:ss v",
              "MMMEd, Hmsv": "E, d MMM, HH:mm:ss v",
              "MMMMd Hmsv": "d MMMM HH:mm:ss v",
              "MMMMEd Hmsv": "E, d MMMM HH:mm:ss v",
              "y, Hmsv": "y, HH:mm:ss v",
              "yM, Hmsv": "MM.y, HH:mm:ss v",
              "yMd, Hmsv": "d.MM.y, HH:mm:ss v",
              "yMEd, Hmsv": "E, d.MM.y, HH:mm:ss v",
              "yMMM, Hmsv": "LLL y, HH:mm:ss v",
              "yMMMd, Hmsv": "d MMM y, HH:mm:ss v",
              "yMMMEd, Hmsv": "E, d MMM y, HH:mm:ss v",
              "yMMMM Hmsv": "LLLL y HH:mm:ss v",
              "yMMMMd Hmsv": "d MMMM y HH:mm:ss v",
              "yMMMMEd Hmsv": "E, d MMMM y HH:mm:ss v",
              "EEEE, d MMMM y hmv": "EEEE, d MMMM y h:mm a v",
              "d MMMM y hmv": "d MMMM y h:mm a v",
              "d MMM y, hmv": "d MMM y, h:mm a v",
              "d.MM.y, hmv": "d.MM.y, h:mm a v",
              "d, hmv": "d, h:mm a v",
              "E, hmv": "ccc, h:mm a v",
              "Ed, hmv": "E, d, h:mm a v",
              "Gy, hmv": "y G, h:mm a v",
              "GyMd, hmv": "d.MM.y GGGGG, h:mm a v",
              "GyMMM, hmv": "MMM y G, h:mm a v",
              "GyMMMd, hmv": "d MMM y G, h:mm a v",
              "GyMMMEd, hmv": "E, d MMM y G, h:mm a v",
              "GyMMMM hmv": "LLLL y G h:mm a v",
              "GyMMMMd hmv": "d MMMM y G h:mm a v",
              "GyMMMMEd hmv": "E, d MMMM y G h:mm a v",
              "M, hmv": "L, h:mm a v",
              "Md, hmv": "d.MM, h:mm a v",
              "MEd, hmv": "E, d.MM, h:mm a v",
              "MMM, hmv": "LLL, h:mm a v",
              "MMMd, hmv": "d MMM, h:mm a v",
              "MMMEd, hmv": "E, d MMM, h:mm a v",
              "MMMMd hmv": "d MMMM h:mm a v",
              "MMMMEd hmv": "E, d MMMM h:mm a v",
              "y, hmv": "y, h:mm a v",
              "yM, hmv": "MM.y, h:mm a v",
              "yMd, hmv": "d.MM.y, h:mm a v",
              "yMEd, hmv": "E, d.MM.y, h:mm a v",
              "yMMM, hmv": "LLL y, h:mm a v",
              "yMMMd, hmv": "d MMM y, h:mm a v",
              "yMMMEd, hmv": "E, d MMM y, h:mm a v",
              "yMMMM hmv": "LLLL y h:mm a v",
              "yMMMMd hmv": "d MMMM y h:mm a v",
              "yMMMMEd hmv": "E, d MMMM y h:mm a v",
              "EEEE, d MMMM y Hmv": "EEEE, d MMMM y HH:mm v",
              "d MMMM y Hmv": "d MMMM y HH:mm v",
              "d MMM y, Hmv": "d MMM y, HH:mm v",
              "d.MM.y, Hmv": "d.MM.y, HH:mm v",
              "d, Hmv": "d, HH:mm v",
              "E, Hmv": "ccc, HH:mm v",
              "Ed, Hmv": "E, d, HH:mm v",
              "Gy, Hmv": "y G, HH:mm v",
              "GyMd, Hmv": "d.MM.y GGGGG, HH:mm v",
              "GyMMM, Hmv": "MMM y G, HH:mm v",
              "GyMMMd, Hmv": "d MMM y G, HH:mm v",
              "GyMMMEd, Hmv": "E, d MMM y G, HH:mm v",
              "GyMMMM Hmv": "LLLL y G HH:mm v",
              "GyMMMMd Hmv": "d MMMM y G HH:mm v",
              "GyMMMMEd Hmv": "E, d MMMM y G HH:mm v",
              "M, Hmv": "L, HH:mm v",
              "Md, Hmv": "d.MM, HH:mm v",
              "MEd, Hmv": "E, d.MM, HH:mm v",
              "MMM, Hmv": "LLL, HH:mm v",
              "MMMd, Hmv": "d MMM, HH:mm v",
              "MMMEd, Hmv": "E, d MMM, HH:mm v",
              "MMMMd Hmv": "d MMMM HH:mm v",
              "MMMMEd Hmv": "E, d MMMM HH:mm v",
              "y, Hmv": "y, HH:mm v",
              "yM, Hmv": "MM.y, HH:mm v",
              "yMd, Hmv": "d.MM.y, HH:mm v",
              "yMEd, Hmv": "E, d.MM.y, HH:mm v",
              "yMMM, Hmv": "LLL y, HH:mm v",
              "yMMMd, Hmv": "d MMM y, HH:mm v",
              "yMMMEd, Hmv": "E, d MMM y, HH:mm v",
              "yMMMM Hmv": "LLLL y HH:mm v",
              "yMMMMd Hmv": "d MMMM y HH:mm v",
              "yMMMMEd Hmv": "E, d MMMM y HH:mm v",
              "EEEE, d MMMM y ms": "EEEE, d MMMM y mm:ss",
              "d MMMM y ms": "d MMMM y mm:ss",
              "d MMM y, ms": "d MMM y, mm:ss",
              "d.MM.y, ms": "d.MM.y, mm:ss",
              "d, ms": "d, mm:ss",
              "E, ms": "ccc, mm:ss",
              "Ed, ms": "E, d, mm:ss",
              "Gy, ms": "y G, mm:ss",
              "GyMd, ms": "d.MM.y GGGGG, mm:ss",
              "GyMMM, ms": "MMM y G, mm:ss",
              "GyMMMd, ms": "d MMM y G, mm:ss",
              "GyMMMEd, ms": "E, d MMM y G, mm:ss",
              "GyMMMM ms": "LLLL y G mm:ss",
              "GyMMMMd ms": "d MMMM y G mm:ss",
              "GyMMMMEd ms": "E, d MMMM y G mm:ss",
              "M, ms": "L, mm:ss",
              "Md, ms": "d.MM, mm:ss",
              "MEd, ms": "E, d.MM, mm:ss",
              "MMM, ms": "LLL, mm:ss",
              "MMMd, ms": "d MMM, mm:ss",
              "MMMEd, ms": "E, d MMM, mm:ss",
              "MMMMd ms": "d MMMM mm:ss",
              "MMMMEd ms": "E, d MMMM mm:ss",
              "y, ms": "y, mm:ss",
              "yM, ms": "MM.y, mm:ss",
              "yMd, ms": "d.MM.y, mm:ss",
              "yMEd, ms": "E, d.MM.y, mm:ss",
              "yMMM, ms": "LLL y, mm:ss",
              "yMMMd, ms": "d MMM y, mm:ss",
              "yMMMEd, ms": "E, d MMM y, mm:ss",
              "yMMMM ms": "LLLL y mm:ss",
              "yMMMMd ms": "d MMMM y mm:ss",
              "yMMMMEd ms": "E, d MMMM y mm:ss"
            }
          },
          intervalFormats: {
            intervalFormatFallback: "{0} – {1}",
            Bh: {
              B: "h B – h B",
              h: "h–h B"
            },
            Bhm: {
              B: "h:mm B – h:mm B",
              h: "h:mm–h:mm B",
              m: "h:mm–h:mm B"
            },
            d: {
              d: "d–d"
            },
            Gy: {
              G: "y G – y G",
              y: "y–y G"
            },
            GyM: {
              G: "M.y GGGGG – M.y GGGGG",
              M: "M.y – M.y GGGGG",
              y: "M.y – M.y GGGGG"
            },
            GyMd: {
              d: "d.M.y – d.M.y GGGGG",
              G: "d.M.y GGGGG – d.M.y GGGGG",
              M: "d.M.y – d.M.y GGGGG",
              y: "d.M.y – d.M.y GGGGG"
            },
            GyMEd: {
              d: "E, d.M.y – E, d.M.y GGGGG",
              G: "E, d.M.y GGGGG – E, d.M.y GGGGG",
              M: "E, d.M.y – E, d.M.y GGGGG",
              y: "E, d.M.y – E, d.M.y GGGGG"
            },
            GyMMM: {
              G: "MMM y G – MMM y G",
              M: "MMM – MMM y G",
              y: "MMM y – MMM y G"
            },
            GyMMMd: {
              d: "d–d MMM y G",
              G: "d MMM y G – d MMM y G",
              M: "d MMM – d MMM y G",
              y: "d MMM y – d MMM y G"
            },
            GyMMMEd: {
              d: "E, d MMM – E, d MMM y G",
              G: "E, d MMM y G – E, d MMM y G",
              M: "E, d MMM – E, d MMM y G",
              y: "E, d MMM y – E, d MMM y G"
            },
            h: {
              a: "h a–h a",
              h: "h–h a"
            },
            H: {
              H: "HH–HH"
            },
            hm: {
              a: "h:mm a–h:mm a",
              h: "h:mm–h:mm a",
              m: "h:mm–h:mm a"
            },
            Hm: {
              H: "HH:mm–HH:mm",
              m: "HH:mm–HH:mm"
            },
            hmv: {
              a: "h:mm a–h:mm a v",
              h: "h:mm–h:mm a v",
              m: "h:mm–h:mm a v"
            },
            Hmv: {
              H: "HH:mm–HH:mm v",
              m: "HH:mm–HH:mm v"
            },
            hv: {
              a: "h a – h a v",
              h: "h–h a v"
            },
            Hv: {
              H: "HH–HH v"
            },
            M: {
              M: "MM–MM"
            },
            Md: {
              d: "dd.MM–dd.MM",
              M: "dd.MM–dd.MM"
            },
            MEd: {
              d: "E, dd.MM–E, dd.MM",
              M: "E, dd.MM–E, dd.MM"
            },
            MMM: {
              M: "LLL–LLL"
            },
            MMMd: {
              d: "d–d MMM",
              M: "d MMM–d MMM"
            },
            MMMEd: {
              d: "E, d MMM–E, d MMM",
              M: "E, d MMM–E, d MMM"
            },
            MMMMd: {
              d: "d–d MMMM",
              M: "d MMMM – d MMMM"
            },
            MMMMEd: {
              d: "E, d MMMM – E, d MMMM",
              M: "E, d MMMM – E, d MMMM"
            },
            y: {
              y: "y–y"
            },
            yM: {
              M: "MM.y–MM.y",
              y: "MM.y–MM.y"
            },
            yMd: {
              d: "dd–dd.MM.y",
              M: "dd.MM–dd.MM.y",
              y: "dd.MM.y–dd.MM.y"
            },
            yMEd: {
              d: "E, dd.MM.y–E, dd.MM.y",
              M: "E, dd.MM.y–E, dd.MM.y",
              y: "E, dd.MM.y–E, dd.MM.y"
            },
            yMMM: {
              M: "LLL–LLL y",
              y: "LLL y–LLL y"
            },
            yMMMd: {
              d: "d–d MMM y",
              M: "d MMM–d MMM y",
              y: "d MMM y–d MMM y"
            },
            yMMMEd: {
              d: "E, d–E, d MMM y",
              M: "E, d MMM y–E, d MMM y",
              y: "E, d MMM y–E, d MMM y"
            },
            yMMMM: {
              M: "LLLL–LLLL y",
              y: "LLLL y–LLLL y"
            },
            yMMMMd: {
              d: "d–d MMMM y",
              M: "d MMMM – d MMMM y",
              y: "d MMMM y – d MMMM y"
            },
            yMMMMEd: {
              d: "E, d MMMM – E, d MMMM y",
              M: "E, d MMMM – E, d MMMM y",
              y: "E, d MMMM y – E, d MMMM y"
            }
          },
          hourCycle: "h23",
          nu: ["latn"],
          ca: ["gregory"],
          hc: ["h23", "h12"]
        },
        locale: "pl"
      })
    }
  }
]);