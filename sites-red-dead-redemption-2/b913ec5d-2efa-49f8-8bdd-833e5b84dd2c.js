try {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    M = (new a.Error).stack;
  M && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[M] = "b913ec5d-2efa-49f8-8bdd-833e5b84dd2c", a._sentryDebugIdIdentifier = "sentry-dbid-b913ec5d-2efa-49f8-8bdd-833e5b84dd2c")
} catch (a) {} {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[(new a.Error).stack] = Object.assign({}, a._sentryModuleMetadata[(new a.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [4913], {
    86515: () => {
      Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
        data: {
          am: "AM",
          pm: "PM",
          weekday: {
            narrow: ["D", "L", "M", "M", "G", "V", "S"],
            short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
            long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
          },
          era: {
            narrow: {
              BC: "aC",
              AD: "dC"
            },
            short: {
              BC: "a.C.",
              AD: "d.C."
            },
            long: {
              BC: "avanti Cristo",
              AD: "dopo Cristo"
            }
          },
          month: {
            narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
            short: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
            long: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
          },
          timeZoneName: {
            "Asia/Kabul": {
              long: ["Ora dell’Afghanistan", "Ora dell’Afghanistan"]
            },
            "Africa/Maputo": {
              long: ["Ora dell’Africa centrale", "Ora dell’Africa centrale"]
            },
            "Africa/Bujumbura": {
              long: ["Ora dell’Africa centrale", "Ora dell’Africa centrale"]
            },
            "Africa/Gaborone": {
              long: ["Ora dell’Africa centrale", "Ora dell’Africa centrale"]
            },
            "Africa/Lubumbashi": {
              long: ["Ora dell’Africa centrale", "Ora dell’Africa centrale"]
            },
            "Africa/Blantyre": {
              long: ["Ora dell’Africa centrale", "Ora dell’Africa centrale"]
            },
            "Africa/Kigali": {
              long: ["Ora dell’Africa centrale", "Ora dell’Africa centrale"]
            },
            "Africa/Lusaka": {
              long: ["Ora dell’Africa centrale", "Ora dell’Africa centrale"]
            },
            "Africa/Harare": {
              long: ["Ora dell’Africa centrale", "Ora dell’Africa centrale"]
            },
            "Africa/Nairobi": {
              long: ["Ora dell’Africa orientale", "Ora dell’Africa orientale"]
            },
            "Africa/Djibouti": {
              long: ["Ora dell’Africa orientale", "Ora dell’Africa orientale"]
            },
            "Africa/Asmera": {
              long: ["Ora dell’Africa orientale", "Ora dell’Africa orientale"]
            },
            "Africa/Addis_Ababa": {
              long: ["Ora dell’Africa orientale", "Ora dell’Africa orientale"]
            },
            "Indian/Comoro": {
              long: ["Ora dell’Africa orientale", "Ora dell’Africa orientale"]
            },
            "Indian/Antananarivo": {
              long: ["Ora dell’Africa orientale", "Ora dell’Africa orientale"]
            },
            "Africa/Mogadishu": {
              long: ["Ora dell’Africa orientale", "Ora dell’Africa orientale"]
            },
            "Africa/Dar_es_Salaam": {
              long: ["Ora dell’Africa orientale", "Ora dell’Africa orientale"]
            },
            "Africa/Kampala": {
              long: ["Ora dell’Africa orientale", "Ora dell’Africa orientale"]
            },
            "Indian/Mayotte": {
              long: ["Ora dell’Africa orientale", "Ora dell’Africa orientale"]
            },
            "Africa/Johannesburg": {
              long: ["Ora dell’Africa meridionale", "Ora dell’Africa meridionale"]
            },
            "Africa/Maseru": {
              long: ["Ora dell’Africa meridionale", "Ora dell’Africa meridionale"]
            },
            "Africa/Mbabane": {
              long: ["Ora dell’Africa meridionale", "Ora dell’Africa meridionale"]
            },
            "Africa/Lagos": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Africa/Luanda": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Africa/Porto-Novo": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Africa/Kinshasa": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Africa/Bangui": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Africa/Brazzaville": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Africa/Douala": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Africa/Libreville": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Africa/Malabo": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Africa/Niamey": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Africa/Ndjamena": {
              long: ["Ora standard dell’Africa occidentale", "Ora legale dell’Africa occidentale"]
            },
            "Asia/Aqtobe": {
              long: ["Ora del Kazakistan occidentale", "Ora del Kazakistan occidentale"]
            },
            "America/Juneau": {
              long: ["Ora standard dell’Alaska", "Ora legale dell’Alaska"]
            },
            "Asia/Almaty": {
              long: ["Ora del Kazakistan orientale", "Ora del Kazakistan orientale"]
            },
            "America/Manaus": {
              long: ["Ora standard dell’Amazzonia", "Ora legale dell’Amazzonia"]
            },
            "America/Chicago": {
              long: ["Ora standard centrale USA", "Ora legale centrale USA"]
            },
            "America/Belize": {
              long: ["Ora standard centrale USA", "Ora legale centrale USA"]
            },
            "America/Winnipeg": {
              long: ["Ora standard centrale USA", "Ora legale centrale USA"]
            },
            "America/Costa_Rica": {
              long: ["Ora standard centrale USA", "Ora legale centrale USA"]
            },
            "America/Guatemala": {
              long: ["Ora standard centrale USA", "Ora legale centrale USA"]
            },
            "America/Tegucigalpa": {
              long: ["Ora standard centrale USA", "Ora legale centrale USA"]
            },
            "America/Mexico_City": {
              long: ["Ora standard centrale USA", "Ora legale centrale USA"]
            },
            "America/El_Salvador": {
              long: ["Ora standard centrale USA", "Ora legale centrale USA"]
            },
            "America/New_York": {
              long: ["Ora standard orientale USA", "Ora legale orientale USA"]
            },
            "America/Nassau": {
              long: ["Ora standard orientale USA", "Ora legale orientale USA"]
            },
            "America/Toronto": {
              long: ["Ora standard orientale USA", "Ora legale orientale USA"]
            },
            "America/Port-au-Prince": {
              long: ["Ora standard orientale USA", "Ora legale orientale USA"]
            },
            "America/Jamaica": {
              long: ["Ora standard orientale USA", "Ora legale orientale USA"]
            },
            "America/Cayman": {
              long: ["Ora standard orientale USA", "Ora legale orientale USA"]
            },
            "America/Panama": {
              long: ["Ora standard orientale USA", "Ora legale orientale USA"]
            },
            "America/Denver": {
              long: ["Ora standard Montagne Rocciose USA", "Ora legale Montagne Rocciose USA"]
            },
            "America/Edmonton": {
              long: ["Ora standard Montagne Rocciose USA", "Ora legale Montagne Rocciose USA"]
            },
            "America/Los_Angeles": {
              long: ["Ora standard del Pacifico USA", "Ora legale del Pacifico USA"]
            },
            "America/Vancouver": {
              long: ["Ora standard del Pacifico USA", "Ora legale del Pacifico USA"]
            },
            "America/Tijuana": {
              long: ["Ora standard del Pacifico USA", "Ora legale del Pacifico USA"]
            },
            "Asia/Anadyr": {
              long: ["Ora standard di Anadyr", "Ora legale di Anadyr"]
            },
            "Pacific/Apia": {
              long: ["Ora standard di Apia", "Ora legale di Apia"]
            },
            "Asia/Riyadh": {
              long: ["Ora standard araba", "Ora legale araba"]
            },
            "Asia/Bahrain": {
              long: ["Ora standard araba", "Ora legale araba"]
            },
            "Asia/Baghdad": {
              long: ["Ora standard araba", "Ora legale araba"]
            },
            "Asia/Kuwait": {
              long: ["Ora standard araba", "Ora legale araba"]
            },
            "Asia/Qatar": {
              long: ["Ora standard araba", "Ora legale araba"]
            },
            "Asia/Aden": {
              long: ["Ora standard araba", "Ora legale araba"]
            },
            "America/Buenos_Aires": {
              long: ["Ora standard dell’Argentina", "Ora legale dell’Argentina"]
            },
            "America/Argentina/San_Luis": {
              long: ["Ora standard dell’Argentina occidentale", "Ora legale dell’Argentina occidentale"]
            },
            "Asia/Ashgabat": {
              long: ["Ora standard del Turkmenistan", "Ora legale del Turkmenistan"]
            },
            "America/Halifax": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Antigua": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Anguilla": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Aruba": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Barbados": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "Atlantic/Bermuda": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Kralendijk": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Curacao": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Dominica": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Grenada": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Thule": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Guadeloupe": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/St_Kitts": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/St_Lucia": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Marigot": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Martinique": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Montserrat": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Puerto_Rico": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Lower_Princes": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Port_of_Spain": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/St_Vincent": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/Tortola": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "America/St_Thomas": {
              long: ["Ora standard dell’Atlantico", "Ora legale dell’Atlantico"]
            },
            "Australia/Adelaide": {
              long: ["Ora standard dell’Australia centrale", "Ora legale dell’Australia centrale"]
            },
            "Australia/Eucla": {
              long: ["Ora standard dell’Australia centroccidentale", "Ora legale dell’Australia centroccidentale"]
            },
            "Australia/Sydney": {
              long: ["Ora standard dell’Australia orientale", "Ora legale dell’Australia orientale"]
            },
            "Australia/Perth": {
              long: ["Ora standard dell’Australia occidentale", "Ora legale dell’Australia occidentale"]
            },
            "Atlantic/Azores": {
              long: ["Ora standard delle Azzorre", "Ora legale delle Azzorre"]
            },
            "Asia/Thimphu": {
              long: ["Ora del Bhutan", "Ora del Bhutan"]
            },
            "America/La_Paz": {
              long: ["Ora della Bolivia", "Ora della Bolivia"]
            },
            "Asia/Kuching": {
              long: ["Ora della Malesia", "Ora della Malesia"]
            },
            "America/Sao_Paulo": {
              long: ["Ora standard di Brasilia", "Ora legale di Brasilia"]
            },
            "Europe/London": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Asia/Brunei": {
              long: ["Ora del Brunei Darussalam", "Ora del Brunei Darussalam"]
            },
            "Atlantic/Cape_Verde": {
              long: ["Ora standard di Capo Verde", "Ora legale di Capo Verde"]
            },
            "Pacific/Chatham": {
              long: ["Ora standard delle Chatham", "Ora legale delle Chatham"]
            },
            "America/Santiago": {
              long: ["Ora standard del Cile", "Ora legale del Cile"]
            },
            "Asia/Shanghai": {
              long: ["Ora standard della Cina", "Ora legale della Cina"]
            },
            "Indian/Christmas": {
              long: ["Ora dell’Isola Christmas", "Ora dell’Isola Christmas"]
            },
            "Indian/Cocos": {
              long: ["Ora delle Isole Cocos", "Ora delle Isole Cocos"]
            },
            "America/Bogota": {
              long: ["Ora standard della Colombia", "Ora legale della Colombia"]
            },
            "Pacific/Rarotonga": {
              long: ["Ora standard delle isole Cook", "Ora legale media delle isole Cook"]
            },
            "America/Havana": {
              long: ["Ora standard di Cuba", "Ora legale di Cuba"]
            },
            "Antarctica/Davis": {
              long: ["Ora di Davis", "Ora di Davis"]
            },
            "Antarctica/DumontDUrville": {
              long: ["Ora di Dumont-d’Urville", "Ora di Dumont-d’Urville"]
            },
            "Asia/Dushanbe": {
              long: ["Ora del Tagikistan", "Ora del Tagikistan"]
            },
            "America/Paramaribo": {
              long: ["Ora del Suriname", "Ora del Suriname"]
            },
            "Asia/Dili": {
              long: ["Ora di Timor Est", "Ora di Timor Est"]
            },
            "Pacific/Easter": {
              long: ["Ora standard dell’Isola di Pasqua", "Ora legale dell’Isola di Pasqua"]
            },
            "America/Guayaquil": {
              long: ["Ora dell’Ecuador", "Ora dell’Ecuador"]
            },
            "Europe/Paris": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Andorra": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Tirane": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Vienna": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Sarajevo": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Brussels": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Zurich": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Prague": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Berlin": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Copenhagen": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Madrid": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Gibraltar": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Zagreb": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Budapest": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Rome": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Vaduz": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Luxembourg": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Monaco": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Podgorica": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Skopje": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Malta": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Amsterdam": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Oslo": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Warsaw": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Belgrade": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Stockholm": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Ljubljana": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Arctic/Longyearbyen": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Bratislava": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/San_Marino": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Africa/Tunis": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Vatican": {
              long: ["Ora standard dell’Europa centrale", "Ora legale dell’Europa centrale"],
              short: ["CET", "CEST"]
            },
            "Europe/Bucharest": {
              long: ["Ora standard dell’Europa orientale", "Ora legale dell’Europa orientale"],
              short: ["EET", "EEST"]
            },
            "Europe/Mariehamn": {
              long: ["Ora standard dell’Europa orientale", "Ora legale dell’Europa orientale"],
              short: ["EET", "EEST"]
            },
            "Europe/Sofia": {
              long: ["Ora standard dell’Europa orientale", "Ora legale dell’Europa orientale"],
              short: ["EET", "EEST"]
            },
            "Asia/Nicosia": {
              long: ["Ora standard dell’Europa orientale", "Ora legale dell’Europa orientale"],
              short: ["EET", "EEST"]
            },
            "Africa/Cairo": {
              long: ["Ora standard dell’Europa orientale", "Ora legale dell’Europa orientale"],
              short: ["EET", "EEST"]
            },
            "Europe/Helsinki": {
              long: ["Ora standard dell’Europa orientale", "Ora legale dell’Europa orientale"],
              short: ["EET", "EEST"]
            },
            "Europe/Athens": {
              long: ["Ora standard dell’Europa orientale", "Ora legale dell’Europa orientale"],
              short: ["EET", "EEST"]
            },
            "Asia/Beirut": {
              long: ["Ora standard dell’Europa orientale", "Ora legale dell’Europa orientale"],
              short: ["EET", "EEST"]
            },
            "Europe/Minsk": {
              long: ["Ora dell’Europa orientale (Kaliningrad)", "Ora dell’Europa orientale (Kaliningrad)"]
            },
            "Europe/Kaliningrad": {
              long: ["Ora dell’Europa orientale (Kaliningrad)", "Ora dell’Europa orientale (Kaliningrad)"]
            },
            "Atlantic/Canary": {
              long: ["Ora standard dell’Europa occidentale", "Ora legale dell’Europa occidentale"],
              short: ["WET", "WEST"]
            },
            "Atlantic/Faeroe": {
              long: ["Ora standard dell’Europa occidentale", "Ora legale dell’Europa occidentale"],
              short: ["WET", "WEST"]
            },
            "Atlantic/Stanley": {
              long: ["Ora standard delle Isole Falkland", "Ora legale delle Isole Falkland"]
            },
            "Pacific/Fiji": {
              long: ["Ora standard delle Figi", "Ora legale delle Figi"]
            },
            "America/Cayenne": {
              long: ["Ora della Guiana francese", "Ora della Guiana francese"]
            },
            "Indian/Kerguelen": {
              long: ["Ora delle Terre australi e antartiche francesi", "Ora delle Terre australi e antartiche francesi"]
            },
            "Asia/Bishkek": {
              long: ["Ora del Kirghizistan", "Ora del Kirghizistan"]
            },
            "Pacific/Galapagos": {
              long: ["Ora delle Galapagos", "Ora delle Galapagos"]
            },
            "Pacific/Gambier": {
              long: ["Ora di Gambier", "Ora di Gambier"]
            },
            "Pacific/Tarawa": {
              long: ["Ora delle isole Gilbert", "Ora delle isole Gilbert"]
            },
            "Atlantic/Reykjavik": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Africa/Ouagadougou": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Africa/Abidjan": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Africa/Accra": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Africa/Banjul": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Africa/Conakry": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Africa/Bamako": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Africa/Nouakchott": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Atlantic/St_Helena": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Africa/Freetown": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Africa/Dakar": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "Africa/Lome": {
              long: ["Ora del meridiano di Greenwich", "Ora del meridiano di Greenwich"]
            },
            "America/Godthab": {
              long: ["Ora standard della Groenlandia occidentale", "Ora legale della Groenlandia occidentale"]
            },
            "America/Scoresbysund": {
              long: ["Ora standard della Groenlandia orientale", "Ora legale della Groenlandia orientale"]
            },
            "Asia/Dubai": {
              long: ["Ora del Golfo", "Ora del Golfo"]
            },
            "Asia/Muscat": {
              long: ["Ora del Golfo", "Ora del Golfo"]
            },
            "America/Guyana": {
              long: ["Ora della Guyana", "Ora della Guyana"]
            },
            "Pacific/Honolulu": {
              long: ["Ora standard delle Isole Hawaii-Aleutine", "Ora legale delle Isole Hawaii-Aleutine"]
            },
            "Asia/Hong_Kong": {
              long: ["Ora standard di Hong Kong", "Ora legale di Hong Kong"]
            },
            "Asia/Hovd": {
              long: ["Ora standard di Hovd", "Ora legale di Hovd"]
            },
            "Asia/Calcutta": {
              long: ["Ora standard dell’India", "Ora standard dell’India"]
            },
            "Indian/Chagos": {
              long: ["Ora dell’Oceano Indiano", "Ora dell’Oceano Indiano"]
            },
            "Asia/Bangkok": {
              long: ["Ora dell’Indocina", "Ora dell’Indocina"]
            },
            "Asia/Phnom_Penh": {
              long: ["Ora dell’Indocina", "Ora dell’Indocina"]
            },
            "Asia/Vientiane": {
              long: ["Ora dell’Indocina", "Ora dell’Indocina"]
            },
            "Asia/Makassar": {
              long: ["Ora dell’Indonesia centrale", "Ora dell’Indonesia centrale"]
            },
            "Asia/Jayapura": {
              long: ["Ora dell’Indonesia orientale", "Ora dell’Indonesia orientale"]
            },
            "Asia/Jakarta": {
              long: ["Ora dell’Indonesia occidentale", "Ora dell’Indonesia occidentale"]
            },
            "Asia/Tehran": {
              long: ["Ora standard dell’Iran", "Ora legale dell’Iran"]
            },
            "Asia/Irkutsk": {
              long: ["Ora standard di Irkutsk", "Ora legale di Irkutsk"]
            },
            "Asia/Jerusalem": {
              long: ["Ora standard di Israele", "Ora legale di Israele"]
            },
            "Asia/Tokyo": {
              long: ["Ora standard del Giappone", "Ora legale del Giappone"]
            },
            "Asia/Kamchatka": {
              long: ["Ora standard di Petropavlovsk-Kamchatski", "Ora legale di Petropavlovsk-Kamchatski"]
            },
            "Asia/Karachi": {
              long: ["Ora standard del Pakistan", "Ora legale del Pakistan"]
            },
            "Asia/Seoul": {
              long: ["Ora standard coreana", "Ora legale coreana"]
            },
            "Pacific/Kosrae": {
              long: ["Ora del Kosrae", "Ora del Kosrae"]
            },
            "Asia/Krasnoyarsk": {
              long: ["Ora standard di Krasnoyarsk", "Ora legale di Krasnoyarsk"]
            },
            "Europe/Samara": {
              long: ["Ora standard di Samara", "Ora legale di Samara"]
            },
            "Pacific/Kiritimati": {
              long: ["Ora delle Sporadi equatoriali", "Ora delle Sporadi equatoriali"]
            },
            "Australia/Lord_Howe": {
              long: ["Ora standard di Lord Howe", "Ora legale di Lord Howe"]
            },
            "Asia/Macau": {
              long: ["Ora standard di Macao", "Ora legale di Macao"]
            },
            "Asia/Magadan": {
              long: ["Ora standard di Magadan", "Ora legale di Magadan"]
            },
            "Indian/Maldives": {
              long: ["Ora delle Maldive", "Ora delle Maldive"]
            },
            "Pacific/Marquesas": {
              long: ["Ora delle Marchesi", "Ora delle Marchesi"]
            },
            "Pacific/Majuro": {
              long: ["Ora delle Isole Marshall", "Ora delle Isole Marshall"]
            },
            "Indian/Mauritius": {
              long: ["Ora standard delle Mauritius", "Ora legale delle Mauritius"]
            },
            "Antarctica/Mawson": {
              long: ["Ora di Mawson", "Ora di Mawson"]
            },
            "America/Mazatlan": {
              long: ["Ora standard del Pacifico (Messico)", "Ora legale del Pacifico (Messico)"]
            },
            "Asia/Ulaanbaatar": {
              long: ["Ora standard di Ulan Bator", "Ora legale di Ulan Bator"]
            },
            "Europe/Moscow": {
              long: ["Ora standard di Mosca", "Ora legale di Mosca"]
            },
            "Asia/Rangoon": {
              long: ["Ora della Birmania", "Ora della Birmania"]
            },
            "Pacific/Nauru": {
              long: ["Ora di Nauru", "Ora di Nauru"]
            },
            "Asia/Katmandu": {
              long: ["Ora del Nepal", "Ora del Nepal"]
            },
            "Pacific/Noumea": {
              long: ["Ora standard della Nuova Caledonia", "Ora legale della Nuova Caledonia"]
            },
            "Pacific/Auckland": {
              long: ["Ora standard della Nuova Zelanda", "Ora legale della Nuova Zelanda"]
            },
            "Antarctica/McMurdo": {
              long: ["Ora standard della Nuova Zelanda", "Ora legale della Nuova Zelanda"]
            },
            "America/St_Johns": {
              long: ["Ora standard di Terranova", "Ora legale di Terranova"]
            },
            "Pacific/Niue": {
              long: ["Ora di Niue", "Ora di Niue"]
            },
            "Pacific/Norfolk": {
              long: ["Ora standard delle Isole Norfolk", "Ora legale delle Isole Norfolk"]
            },
            "America/Noronha": {
              long: ["Ora standard di Fernando de Noronha", "Ora legale di Fernando de Noronha"]
            },
            "Asia/Novosibirsk": {
              long: ["Ora standard di Novosibirsk", "Ora legale di Novosibirsk"]
            },
            "Asia/Omsk": {
              long: ["Ora standard di Omsk", "Ora legale di Omsk"]
            },
            "Pacific/Palau": {
              long: ["Ora di Palau", "Ora di Palau"]
            },
            "Pacific/Port_Moresby": {
              long: ["Ora della Papua Nuova Guinea", "Ora della Papua Nuova Guinea"]
            },
            "America/Asuncion": {
              long: ["Ora standard del Paraguay", "Ora legale del Paraguay"]
            },
            "America/Lima": {
              long: ["Ora standard del Perù", "Ora legale del Perù"]
            },
            "Asia/Manila": {
              long: ["Ora standard delle Filippine", "Ora legale delle Filippine"]
            },
            "Pacific/Enderbury": {
              long: ["Ora delle Isole della Fenice", "Ora delle Isole della Fenice"]
            },
            "America/Miquelon": {
              long: ["Ora standard di Saint-Pierre e Miquelon", "Ora legale di Saint-Pierre e Miquelon"]
            },
            "Pacific/Pitcairn": {
              long: ["Ora delle Pitcairn", "Ora delle Pitcairn"]
            },
            "Pacific/Ponape": {
              long: ["Ora di Pohnpei", "Ora di Pohnpei"]
            },
            "Asia/Pyongyang": {
              long: ["Ora di Pyongyang", "Ora di Pyongyang"]
            },
            "Indian/Reunion": {
              long: ["Ora di Riunione", "Ora di Riunione"]
            },
            "Antarctica/Rothera": {
              long: ["Ora di Rothera", "Ora di Rothera"]
            },
            "Asia/Sakhalin": {
              long: ["Ora standard di Sakhalin", "Ora legale di Sakhalin"]
            },
            "Pacific/Pago_Pago": {
              long: ["Ora standard di Samoa", "Ora legale di Samoa"]
            },
            "Indian/Mahe": {
              long: ["Ora delle Seychelles", "Ora delle Seychelles"]
            },
            "Asia/Singapore": {
              long: ["Ora di Singapore", "Ora di Singapore"]
            },
            "Pacific/Guadalcanal": {
              long: ["Ora delle Isole Salomone", "Ora delle Isole Salomone"]
            },
            "Atlantic/South_Georgia": {
              long: ["Ora della Georgia del Sud", "Ora della Georgia del Sud"]
            },
            "Asia/Yekaterinburg": {
              long: ["Ora standard di Ekaterinburg", "Ora legale di Ekaterinburg"]
            },
            "Antarctica/Syowa": {
              long: ["Ora di Syowa", "Ora di Syowa"]
            },
            "Pacific/Tahiti": {
              long: ["Ora di Tahiti", "Ora di Tahiti"]
            },
            "Asia/Taipei": {
              long: ["Ora standard di Taipei", "Ora legale di Taipei"]
            },
            "Asia/Tashkent": {
              long: ["Ora standard dell’Uzbekistan", "Ora legale dell’Uzbekistan"]
            },
            "Pacific/Fakaofo": {
              long: ["Ora di Tokelau", "Ora di Tokelau"]
            },
            "Pacific/Tongatapu": {
              long: ["Ora standard di Tonga", "Ora legale di Tonga"]
            },
            "Pacific/Truk": {
              long: ["Ora del Chuuk", "Ora del Chuuk"]
            },
            "Pacific/Funafuti": {
              long: ["Ora di Tuvalu", "Ora di Tuvalu"]
            },
            "America/Montevideo": {
              long: ["Ora standard dell’Uruguay", "Ora legale dell’Uruguay"]
            },
            "Pacific/Efate": {
              long: ["Ora standard del Vanuatu", "Ora legale del Vanuatu"]
            },
            "America/Caracas": {
              long: ["Ora del Venezuela", "Ora del Venezuela"]
            },
            "Asia/Vladivostok": {
              long: ["Ora standard di Vladivostok", "Ora legale di Vladivostok"]
            },
            "Europe/Volgograd": {
              long: ["Ora standard di Volgograd", "Ora legale di Volgograd"]
            },
            "Antarctica/Vostok": {
              long: ["Ora di Vostok", "Ora di Vostok"]
            },
            "Pacific/Wake": {
              long: ["Ora dell’Isola di Wake", "Ora dell’Isola di Wake"]
            },
            "Pacific/Wallis": {
              long: ["Ora di Wallis e Futuna", "Ora di Wallis e Futuna"]
            },
            "Asia/Yakutsk": {
              long: ["Ora standard di Yakutsk", "Ora legale di Yakutsk"]
            },
            "America/Whitehorse": {
              long: ["Ora dello Yukon", "Ora dello Yukon"]
            },
            UTC: {
              long: ["Tempo coordinato universale", "Tempo coordinato universale"],
              short: ["UTC", "UTC"]
            }
          },
          gmtFormat: "GMT{0}",
          hourFormat: "+HH:mm;-HH:mm",
          dateFormat: {
            full: "EEEE d MMMM y",
            long: "d MMMM y",
            medium: "d MMM y",
            short: "dd/MM/yy"
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
              Ed: "E d",
              Ehm: "E h:mm a",
              EHm: "E HH:mm",
              Ehms: "E h:mm:ss a",
              EHms: "E HH:mm:ss",
              Gy: "y G",
              GyMd: "dd/MM/y GGGGG",
              GyMMM: "MMM y G",
              GyMMMd: "d MMM y G",
              GyMMMEd: "E d MMM y G",
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
              Md: "dd/MM",
              MEd: "E dd/MM",
              MMM: "LLL",
              MMMd: "d MMM",
              MMMEd: "E d MMM",
              MMMMd: "d MMMM",
              ms: "mm:ss",
              y: "y",
              yM: "MM/y",
              yMd: "dd/MM/y",
              yMEd: "E dd/MM/y",
              yMMM: "MMM y",
              yMMMd: "d MMM y",
              yMMMEd: "E d MMM y",
              yMMMM: "MMMM y",
              "EEEE d MMMM y": "EEEE d MMMM y",
              "d MMMM y": "d MMMM y",
              "d MMM y": "d MMM y",
              "dd/MM/yy": "dd/MM/yy",
              "HH:mm:ss zzzz": "HH:mm:ss zzzz",
              "HH:mm:ss z": "HH:mm:ss z",
              "HH:mm:ss": "HH:mm:ss",
              "HH:mm": "HH:mm",
              "EEEE d MMMM y HH:mm:ss zzzz": "EEEE d MMMM y HH:mm:ss zzzz",
              "d MMMM y HH:mm:ss zzzz": "d MMMM y HH:mm:ss zzzz",
              "d MMM y, HH:mm:ss zzzz": "d MMM y, HH:mm:ss zzzz",
              "dd/MM/yy, HH:mm:ss zzzz": "dd/MM/yy, HH:mm:ss zzzz",
              "d, HH:mm:ss zzzz": "d, HH:mm:ss zzzz",
              "E, HH:mm:ss zzzz": "ccc, HH:mm:ss zzzz",
              "Ed, HH:mm:ss zzzz": "E d, HH:mm:ss zzzz",
              "Gy, HH:mm:ss zzzz": "y G, HH:mm:ss zzzz",
              "GyMd, HH:mm:ss zzzz": "dd/MM/y GGGGG, HH:mm:ss zzzz",
              "GyMMM, HH:mm:ss zzzz": "MMM y G, HH:mm:ss zzzz",
              "GyMMMd, HH:mm:ss zzzz": "d MMM y G, HH:mm:ss zzzz",
              "GyMMMEd, HH:mm:ss zzzz": "E d MMM y G, HH:mm:ss zzzz",
              "M, HH:mm:ss zzzz": "L, HH:mm:ss zzzz",
              "Md, HH:mm:ss zzzz": "dd/MM, HH:mm:ss zzzz",
              "MEd, HH:mm:ss zzzz": "E dd/MM, HH:mm:ss zzzz",
              "MMM, HH:mm:ss zzzz": "LLL, HH:mm:ss zzzz",
              "MMMd, HH:mm:ss zzzz": "d MMM, HH:mm:ss zzzz",
              "MMMEd, HH:mm:ss zzzz": "E d MMM, HH:mm:ss zzzz",
              "MMMMd HH:mm:ss zzzz": "d MMMM HH:mm:ss zzzz",
              "y, HH:mm:ss zzzz": "y, HH:mm:ss zzzz",
              "yM, HH:mm:ss zzzz": "MM/y, HH:mm:ss zzzz",
              "yMd, HH:mm:ss zzzz": "dd/MM/y, HH:mm:ss zzzz",
              "yMEd, HH:mm:ss zzzz": "E dd/MM/y, HH:mm:ss zzzz",
              "yMMM, HH:mm:ss zzzz": "MMM y, HH:mm:ss zzzz",
              "yMMMd, HH:mm:ss zzzz": "d MMM y, HH:mm:ss zzzz",
              "yMMMEd, HH:mm:ss zzzz": "E d MMM y, HH:mm:ss zzzz",
              "yMMMM HH:mm:ss zzzz": "MMMM y HH:mm:ss zzzz",
              "EEEE d MMMM y HH:mm:ss z": "EEEE d MMMM y HH:mm:ss z",
              "d MMMM y HH:mm:ss z": "d MMMM y HH:mm:ss z",
              "d MMM y, HH:mm:ss z": "d MMM y, HH:mm:ss z",
              "dd/MM/yy, HH:mm:ss z": "dd/MM/yy, HH:mm:ss z",
              "d, HH:mm:ss z": "d, HH:mm:ss z",
              "E, HH:mm:ss z": "ccc, HH:mm:ss z",
              "Ed, HH:mm:ss z": "E d, HH:mm:ss z",
              "Gy, HH:mm:ss z": "y G, HH:mm:ss z",
              "GyMd, HH:mm:ss z": "dd/MM/y GGGGG, HH:mm:ss z",
              "GyMMM, HH:mm:ss z": "MMM y G, HH:mm:ss z",
              "GyMMMd, HH:mm:ss z": "d MMM y G, HH:mm:ss z",
              "GyMMMEd, HH:mm:ss z": "E d MMM y G, HH:mm:ss z",
              "M, HH:mm:ss z": "L, HH:mm:ss z",
              "Md, HH:mm:ss z": "dd/MM, HH:mm:ss z",
              "MEd, HH:mm:ss z": "E dd/MM, HH:mm:ss z",
              "MMM, HH:mm:ss z": "LLL, HH:mm:ss z",
              "MMMd, HH:mm:ss z": "d MMM, HH:mm:ss z",
              "MMMEd, HH:mm:ss z": "E d MMM, HH:mm:ss z",
              "MMMMd HH:mm:ss z": "d MMMM HH:mm:ss z",
              "y, HH:mm:ss z": "y, HH:mm:ss z",
              "yM, HH:mm:ss z": "MM/y, HH:mm:ss z",
              "yMd, HH:mm:ss z": "dd/MM/y, HH:mm:ss z",
              "yMEd, HH:mm:ss z": "E dd/MM/y, HH:mm:ss z",
              "yMMM, HH:mm:ss z": "MMM y, HH:mm:ss z",
              "yMMMd, HH:mm:ss z": "d MMM y, HH:mm:ss z",
              "yMMMEd, HH:mm:ss z": "E d MMM y, HH:mm:ss z",
              "yMMMM HH:mm:ss z": "MMMM y HH:mm:ss z",
              "EEEE d MMMM y HH:mm:ss": "EEEE d MMMM y HH:mm:ss",
              "d MMMM y HH:mm:ss": "d MMMM y HH:mm:ss",
              "d MMM y, HH:mm:ss": "d MMM y, HH:mm:ss",
              "dd/MM/yy, HH:mm:ss": "dd/MM/yy, HH:mm:ss",
              "d, HH:mm:ss": "d, HH:mm:ss",
              "E, HH:mm:ss": "ccc, HH:mm:ss",
              "Ed, HH:mm:ss": "E d, HH:mm:ss",
              "Gy, HH:mm:ss": "y G, HH:mm:ss",
              "GyMd, HH:mm:ss": "dd/MM/y GGGGG, HH:mm:ss",
              "GyMMM, HH:mm:ss": "MMM y G, HH:mm:ss",
              "GyMMMd, HH:mm:ss": "d MMM y G, HH:mm:ss",
              "GyMMMEd, HH:mm:ss": "E d MMM y G, HH:mm:ss",
              "M, HH:mm:ss": "L, HH:mm:ss",
              "Md, HH:mm:ss": "dd/MM, HH:mm:ss",
              "MEd, HH:mm:ss": "E dd/MM, HH:mm:ss",
              "MMM, HH:mm:ss": "LLL, HH:mm:ss",
              "MMMd, HH:mm:ss": "d MMM, HH:mm:ss",
              "MMMEd, HH:mm:ss": "E d MMM, HH:mm:ss",
              "MMMMd HH:mm:ss": "d MMMM HH:mm:ss",
              "y, HH:mm:ss": "y, HH:mm:ss",
              "yM, HH:mm:ss": "MM/y, HH:mm:ss",
              "yMd, HH:mm:ss": "dd/MM/y, HH:mm:ss",
              "yMEd, HH:mm:ss": "E dd/MM/y, HH:mm:ss",
              "yMMM, HH:mm:ss": "MMM y, HH:mm:ss",
              "yMMMd, HH:mm:ss": "d MMM y, HH:mm:ss",
              "yMMMEd, HH:mm:ss": "E d MMM y, HH:mm:ss",
              "yMMMM HH:mm:ss": "MMMM y HH:mm:ss",
              "EEEE d MMMM y HH:mm": "EEEE d MMMM y HH:mm",
              "d MMMM y HH:mm": "d MMMM y HH:mm",
              "d MMM y, HH:mm": "d MMM y, HH:mm",
              "dd/MM/yy, HH:mm": "dd/MM/yy, HH:mm",
              "d, HH:mm": "d, HH:mm",
              "E, HH:mm": "ccc, HH:mm",
              "Ed, HH:mm": "E d, HH:mm",
              "Gy, HH:mm": "y G, HH:mm",
              "GyMd, HH:mm": "dd/MM/y GGGGG, HH:mm",
              "GyMMM, HH:mm": "MMM y G, HH:mm",
              "GyMMMd, HH:mm": "d MMM y G, HH:mm",
              "GyMMMEd, HH:mm": "E d MMM y G, HH:mm",
              "M, HH:mm": "L, HH:mm",
              "Md, HH:mm": "dd/MM, HH:mm",
              "MEd, HH:mm": "E dd/MM, HH:mm",
              "MMM, HH:mm": "LLL, HH:mm",
              "MMMd, HH:mm": "d MMM, HH:mm",
              "MMMEd, HH:mm": "E d MMM, HH:mm",
              "MMMMd HH:mm": "d MMMM HH:mm",
              "y, HH:mm": "y, HH:mm",
              "yM, HH:mm": "MM/y, HH:mm",
              "yMd, HH:mm": "dd/MM/y, HH:mm",
              "yMEd, HH:mm": "E dd/MM/y, HH:mm",
              "yMMM, HH:mm": "MMM y, HH:mm",
              "yMMMd, HH:mm": "d MMM y, HH:mm",
              "yMMMEd, HH:mm": "E d MMM y, HH:mm",
              "yMMMM HH:mm": "MMMM y HH:mm",
              "EEEE d MMMM y Bh": "EEEE d MMMM y h B",
              "d MMMM y Bh": "d MMMM y h B",
              "d MMM y, Bh": "d MMM y, h B",
              "dd/MM/yy, Bh": "dd/MM/yy, h B",
              "d, Bh": "d, h B",
              "E, Bh": "ccc, h B",
              "Ed, Bh": "E d, h B",
              "Gy, Bh": "y G, h B",
              "GyMd, Bh": "dd/MM/y GGGGG, h B",
              "GyMMM, Bh": "MMM y G, h B",
              "GyMMMd, Bh": "d MMM y G, h B",
              "GyMMMEd, Bh": "E d MMM y G, h B",
              "M, Bh": "L, h B",
              "Md, Bh": "dd/MM, h B",
              "MEd, Bh": "E dd/MM, h B",
              "MMM, Bh": "LLL, h B",
              "MMMd, Bh": "d MMM, h B",
              "MMMEd, Bh": "E d MMM, h B",
              "MMMMd Bh": "d MMMM h B",
              "y, Bh": "y, h B",
              "yM, Bh": "MM/y, h B",
              "yMd, Bh": "dd/MM/y, h B",
              "yMEd, Bh": "E dd/MM/y, h B",
              "yMMM, Bh": "MMM y, h B",
              "yMMMd, Bh": "d MMM y, h B",
              "yMMMEd, Bh": "E d MMM y, h B",
              "yMMMM Bh": "MMMM y h B",
              "EEEE d MMMM y Bhm": "EEEE d MMMM y h:mm B",
              "d MMMM y Bhm": "d MMMM y h:mm B",
              "d MMM y, Bhm": "d MMM y, h:mm B",
              "dd/MM/yy, Bhm": "dd/MM/yy, h:mm B",
              "d, Bhm": "d, h:mm B",
              "E, Bhm": "ccc, h:mm B",
              "Ed, Bhm": "E d, h:mm B",
              "Gy, Bhm": "y G, h:mm B",
              "GyMd, Bhm": "dd/MM/y GGGGG, h:mm B",
              "GyMMM, Bhm": "MMM y G, h:mm B",
              "GyMMMd, Bhm": "d MMM y G, h:mm B",
              "GyMMMEd, Bhm": "E d MMM y G, h:mm B",
              "M, Bhm": "L, h:mm B",
              "Md, Bhm": "dd/MM, h:mm B",
              "MEd, Bhm": "E dd/MM, h:mm B",
              "MMM, Bhm": "LLL, h:mm B",
              "MMMd, Bhm": "d MMM, h:mm B",
              "MMMEd, Bhm": "E d MMM, h:mm B",
              "MMMMd Bhm": "d MMMM h:mm B",
              "y, Bhm": "y, h:mm B",
              "yM, Bhm": "MM/y, h:mm B",
              "yMd, Bhm": "dd/MM/y, h:mm B",
              "yMEd, Bhm": "E dd/MM/y, h:mm B",
              "yMMM, Bhm": "MMM y, h:mm B",
              "yMMMd, Bhm": "d MMM y, h:mm B",
              "yMMMEd, Bhm": "E d MMM y, h:mm B",
              "yMMMM Bhm": "MMMM y h:mm B",
              "EEEE d MMMM y Bhms": "EEEE d MMMM y h:mm:ss B",
              "d MMMM y Bhms": "d MMMM y h:mm:ss B",
              "d MMM y, Bhms": "d MMM y, h:mm:ss B",
              "dd/MM/yy, Bhms": "dd/MM/yy, h:mm:ss B",
              "d, Bhms": "d, h:mm:ss B",
              "E, Bhms": "ccc, h:mm:ss B",
              "Ed, Bhms": "E d, h:mm:ss B",
              "Gy, Bhms": "y G, h:mm:ss B",
              "GyMd, Bhms": "dd/MM/y GGGGG, h:mm:ss B",
              "GyMMM, Bhms": "MMM y G, h:mm:ss B",
              "GyMMMd, Bhms": "d MMM y G, h:mm:ss B",
              "GyMMMEd, Bhms": "E d MMM y G, h:mm:ss B",
              "M, Bhms": "L, h:mm:ss B",
              "Md, Bhms": "dd/MM, h:mm:ss B",
              "MEd, Bhms": "E dd/MM, h:mm:ss B",
              "MMM, Bhms": "LLL, h:mm:ss B",
              "MMMd, Bhms": "d MMM, h:mm:ss B",
              "MMMEd, Bhms": "E d MMM, h:mm:ss B",
              "MMMMd Bhms": "d MMMM h:mm:ss B",
              "y, Bhms": "y, h:mm:ss B",
              "yM, Bhms": "MM/y, h:mm:ss B",
              "yMd, Bhms": "dd/MM/y, h:mm:ss B",
              "yMEd, Bhms": "E dd/MM/y, h:mm:ss B",
              "yMMM, Bhms": "MMM y, h:mm:ss B",
              "yMMMd, Bhms": "d MMM y, h:mm:ss B",
              "yMMMEd, Bhms": "E d MMM y, h:mm:ss B",
              "yMMMM Bhms": "MMMM y h:mm:ss B",
              "EEEE d MMMM y h": "EEEE d MMMM y h a",
              "d MMMM y h": "d MMMM y h a",
              "d MMM y, h": "d MMM y, h a",
              "dd/MM/yy, h": "dd/MM/yy, h a",
              "d, h": "d, h a",
              "E, h": "ccc, h a",
              "Ed, h": "E d, h a",
              "Gy, h": "y G, h a",
              "GyMd, h": "dd/MM/y GGGGG, h a",
              "GyMMM, h": "MMM y G, h a",
              "GyMMMd, h": "d MMM y G, h a",
              "GyMMMEd, h": "E d MMM y G, h a",
              "M, h": "L, h a",
              "Md, h": "dd/MM, h a",
              "MEd, h": "E dd/MM, h a",
              "MMM, h": "LLL, h a",
              "MMMd, h": "d MMM, h a",
              "MMMEd, h": "E d MMM, h a",
              "MMMMd h": "d MMMM h a",
              "y, h": "y, h a",
              "yM, h": "MM/y, h a",
              "yMd, h": "dd/MM/y, h a",
              "yMEd, h": "E dd/MM/y, h a",
              "yMMM, h": "MMM y, h a",
              "yMMMd, h": "d MMM y, h a",
              "yMMMEd, h": "E d MMM y, h a",
              "yMMMM h": "MMMM y h a",
              "EEEE d MMMM y H": "EEEE d MMMM y HH",
              "d MMMM y H": "d MMMM y HH",
              "d MMM y, H": "d MMM y, HH",
              "dd/MM/yy, H": "dd/MM/yy, HH",
              "d, H": "d, HH",
              "E, H": "ccc, HH",
              "Ed, H": "E d, HH",
              "Gy, H": "y G, HH",
              "GyMd, H": "dd/MM/y GGGGG, HH",
              "GyMMM, H": "MMM y G, HH",
              "GyMMMd, H": "d MMM y G, HH",
              "GyMMMEd, H": "E d MMM y G, HH",
              "M, H": "L, HH",
              "Md, H": "dd/MM, HH",
              "MEd, H": "E dd/MM, HH",
              "MMM, H": "LLL, HH",
              "MMMd, H": "d MMM, HH",
              "MMMEd, H": "E d MMM, HH",
              "MMMMd H": "d MMMM HH",
              "y, H": "y, HH",
              "yM, H": "MM/y, HH",
              "yMd, H": "dd/MM/y, HH",
              "yMEd, H": "E dd/MM/y, HH",
              "yMMM, H": "MMM y, HH",
              "yMMMd, H": "d MMM y, HH",
              "yMMMEd, H": "E d MMM y, HH",
              "yMMMM H": "MMMM y HH",
              "EEEE d MMMM y hm": "EEEE d MMMM y h:mm a",
              "d MMMM y hm": "d MMMM y h:mm a",
              "d MMM y, hm": "d MMM y, h:mm a",
              "dd/MM/yy, hm": "dd/MM/yy, h:mm a",
              "d, hm": "d, h:mm a",
              "E, hm": "ccc, h:mm a",
              "Ed, hm": "E d, h:mm a",
              "Gy, hm": "y G, h:mm a",
              "GyMd, hm": "dd/MM/y GGGGG, h:mm a",
              "GyMMM, hm": "MMM y G, h:mm a",
              "GyMMMd, hm": "d MMM y G, h:mm a",
              "GyMMMEd, hm": "E d MMM y G, h:mm a",
              "M, hm": "L, h:mm a",
              "Md, hm": "dd/MM, h:mm a",
              "MEd, hm": "E dd/MM, h:mm a",
              "MMM, hm": "LLL, h:mm a",
              "MMMd, hm": "d MMM, h:mm a",
              "MMMEd, hm": "E d MMM, h:mm a",
              "MMMMd hm": "d MMMM h:mm a",
              "y, hm": "y, h:mm a",
              "yM, hm": "MM/y, h:mm a",
              "yMd, hm": "dd/MM/y, h:mm a",
              "yMEd, hm": "E dd/MM/y, h:mm a",
              "yMMM, hm": "MMM y, h:mm a",
              "yMMMd, hm": "d MMM y, h:mm a",
              "yMMMEd, hm": "E d MMM y, h:mm a",
              "yMMMM hm": "MMMM y h:mm a",
              "EEEE d MMMM y Hm": "EEEE d MMMM y HH:mm",
              "d MMMM y Hm": "d MMMM y HH:mm",
              "d MMM y, Hm": "d MMM y, HH:mm",
              "dd/MM/yy, Hm": "dd/MM/yy, HH:mm",
              "d, Hm": "d, HH:mm",
              "E, Hm": "ccc, HH:mm",
              "Ed, Hm": "E d, HH:mm",
              "Gy, Hm": "y G, HH:mm",
              "GyMd, Hm": "dd/MM/y GGGGG, HH:mm",
              "GyMMM, Hm": "MMM y G, HH:mm",
              "GyMMMd, Hm": "d MMM y G, HH:mm",
              "GyMMMEd, Hm": "E d MMM y G, HH:mm",
              "M, Hm": "L, HH:mm",
              "Md, Hm": "dd/MM, HH:mm",
              "MEd, Hm": "E dd/MM, HH:mm",
              "MMM, Hm": "LLL, HH:mm",
              "MMMd, Hm": "d MMM, HH:mm",
              "MMMEd, Hm": "E d MMM, HH:mm",
              "MMMMd Hm": "d MMMM HH:mm",
              "y, Hm": "y, HH:mm",
              "yM, Hm": "MM/y, HH:mm",
              "yMd, Hm": "dd/MM/y, HH:mm",
              "yMEd, Hm": "E dd/MM/y, HH:mm",
              "yMMM, Hm": "MMM y, HH:mm",
              "yMMMd, Hm": "d MMM y, HH:mm",
              "yMMMEd, Hm": "E d MMM y, HH:mm",
              "yMMMM Hm": "MMMM y HH:mm",
              "EEEE d MMMM y hms": "EEEE d MMMM y h:mm:ss a",
              "d MMMM y hms": "d MMMM y h:mm:ss a",
              "d MMM y, hms": "d MMM y, h:mm:ss a",
              "dd/MM/yy, hms": "dd/MM/yy, h:mm:ss a",
              "d, hms": "d, h:mm:ss a",
              "E, hms": "ccc, h:mm:ss a",
              "Ed, hms": "E d, h:mm:ss a",
              "Gy, hms": "y G, h:mm:ss a",
              "GyMd, hms": "dd/MM/y GGGGG, h:mm:ss a",
              "GyMMM, hms": "MMM y G, h:mm:ss a",
              "GyMMMd, hms": "d MMM y G, h:mm:ss a",
              "GyMMMEd, hms": "E d MMM y G, h:mm:ss a",
              "M, hms": "L, h:mm:ss a",
              "Md, hms": "dd/MM, h:mm:ss a",
              "MEd, hms": "E dd/MM, h:mm:ss a",
              "MMM, hms": "LLL, h:mm:ss a",
              "MMMd, hms": "d MMM, h:mm:ss a",
              "MMMEd, hms": "E d MMM, h:mm:ss a",
              "MMMMd hms": "d MMMM h:mm:ss a",
              "y, hms": "y, h:mm:ss a",
              "yM, hms": "MM/y, h:mm:ss a",
              "yMd, hms": "dd/MM/y, h:mm:ss a",
              "yMEd, hms": "E dd/MM/y, h:mm:ss a",
              "yMMM, hms": "MMM y, h:mm:ss a",
              "yMMMd, hms": "d MMM y, h:mm:ss a",
              "yMMMEd, hms": "E d MMM y, h:mm:ss a",
              "yMMMM hms": "MMMM y h:mm:ss a",
              "EEEE d MMMM y Hms": "EEEE d MMMM y HH:mm:ss",
              "d MMMM y Hms": "d MMMM y HH:mm:ss",
              "d MMM y, Hms": "d MMM y, HH:mm:ss",
              "dd/MM/yy, Hms": "dd/MM/yy, HH:mm:ss",
              "d, Hms": "d, HH:mm:ss",
              "E, Hms": "ccc, HH:mm:ss",
              "Ed, Hms": "E d, HH:mm:ss",
              "Gy, Hms": "y G, HH:mm:ss",
              "GyMd, Hms": "dd/MM/y GGGGG, HH:mm:ss",
              "GyMMM, Hms": "MMM y G, HH:mm:ss",
              "GyMMMd, Hms": "d MMM y G, HH:mm:ss",
              "GyMMMEd, Hms": "E d MMM y G, HH:mm:ss",
              "M, Hms": "L, HH:mm:ss",
              "Md, Hms": "dd/MM, HH:mm:ss",
              "MEd, Hms": "E dd/MM, HH:mm:ss",
              "MMM, Hms": "LLL, HH:mm:ss",
              "MMMd, Hms": "d MMM, HH:mm:ss",
              "MMMEd, Hms": "E d MMM, HH:mm:ss",
              "MMMMd Hms": "d MMMM HH:mm:ss",
              "y, Hms": "y, HH:mm:ss",
              "yM, Hms": "MM/y, HH:mm:ss",
              "yMd, Hms": "dd/MM/y, HH:mm:ss",
              "yMEd, Hms": "E dd/MM/y, HH:mm:ss",
              "yMMM, Hms": "MMM y, HH:mm:ss",
              "yMMMd, Hms": "d MMM y, HH:mm:ss",
              "yMMMEd, Hms": "E d MMM y, HH:mm:ss",
              "yMMMM Hms": "MMMM y HH:mm:ss",
              "EEEE d MMMM y hmsv": "EEEE d MMMM y h:mm:ss a v",
              "d MMMM y hmsv": "d MMMM y h:mm:ss a v",
              "d MMM y, hmsv": "d MMM y, h:mm:ss a v",
              "dd/MM/yy, hmsv": "dd/MM/yy, h:mm:ss a v",
              "d, hmsv": "d, h:mm:ss a v",
              "E, hmsv": "ccc, h:mm:ss a v",
              "Ed, hmsv": "E d, h:mm:ss a v",
              "Gy, hmsv": "y G, h:mm:ss a v",
              "GyMd, hmsv": "dd/MM/y GGGGG, h:mm:ss a v",
              "GyMMM, hmsv": "MMM y G, h:mm:ss a v",
              "GyMMMd, hmsv": "d MMM y G, h:mm:ss a v",
              "GyMMMEd, hmsv": "E d MMM y G, h:mm:ss a v",
              "M, hmsv": "L, h:mm:ss a v",
              "Md, hmsv": "dd/MM, h:mm:ss a v",
              "MEd, hmsv": "E dd/MM, h:mm:ss a v",
              "MMM, hmsv": "LLL, h:mm:ss a v",
              "MMMd, hmsv": "d MMM, h:mm:ss a v",
              "MMMEd, hmsv": "E d MMM, h:mm:ss a v",
              "MMMMd hmsv": "d MMMM h:mm:ss a v",
              "y, hmsv": "y, h:mm:ss a v",
              "yM, hmsv": "MM/y, h:mm:ss a v",
              "yMd, hmsv": "dd/MM/y, h:mm:ss a v",
              "yMEd, hmsv": "E dd/MM/y, h:mm:ss a v",
              "yMMM, hmsv": "MMM y, h:mm:ss a v",
              "yMMMd, hmsv": "d MMM y, h:mm:ss a v",
              "yMMMEd, hmsv": "E d MMM y, h:mm:ss a v",
              "yMMMM hmsv": "MMMM y h:mm:ss a v",
              "EEEE d MMMM y Hmsv": "EEEE d MMMM y HH:mm:ss v",
              "d MMMM y Hmsv": "d MMMM y HH:mm:ss v",
              "d MMM y, Hmsv": "d MMM y, HH:mm:ss v",
              "dd/MM/yy, Hmsv": "dd/MM/yy, HH:mm:ss v",
              "d, Hmsv": "d, HH:mm:ss v",
              "E, Hmsv": "ccc, HH:mm:ss v",
              "Ed, Hmsv": "E d, HH:mm:ss v",
              "Gy, Hmsv": "y G, HH:mm:ss v",
              "GyMd, Hmsv": "dd/MM/y GGGGG, HH:mm:ss v",
              "GyMMM, Hmsv": "MMM y G, HH:mm:ss v",
              "GyMMMd, Hmsv": "d MMM y G, HH:mm:ss v",
              "GyMMMEd, Hmsv": "E d MMM y G, HH:mm:ss v",
              "M, Hmsv": "L, HH:mm:ss v",
              "Md, Hmsv": "dd/MM, HH:mm:ss v",
              "MEd, Hmsv": "E dd/MM, HH:mm:ss v",
              "MMM, Hmsv": "LLL, HH:mm:ss v",
              "MMMd, Hmsv": "d MMM, HH:mm:ss v",
              "MMMEd, Hmsv": "E d MMM, HH:mm:ss v",
              "MMMMd Hmsv": "d MMMM HH:mm:ss v",
              "y, Hmsv": "y, HH:mm:ss v",
              "yM, Hmsv": "MM/y, HH:mm:ss v",
              "yMd, Hmsv": "dd/MM/y, HH:mm:ss v",
              "yMEd, Hmsv": "E dd/MM/y, HH:mm:ss v",
              "yMMM, Hmsv": "MMM y, HH:mm:ss v",
              "yMMMd, Hmsv": "d MMM y, HH:mm:ss v",
              "yMMMEd, Hmsv": "E d MMM y, HH:mm:ss v",
              "yMMMM Hmsv": "MMMM y HH:mm:ss v",
              "EEEE d MMMM y hmv": "EEEE d MMMM y h:mm a v",
              "d MMMM y hmv": "d MMMM y h:mm a v",
              "d MMM y, hmv": "d MMM y, h:mm a v",
              "dd/MM/yy, hmv": "dd/MM/yy, h:mm a v",
              "d, hmv": "d, h:mm a v",
              "E, hmv": "ccc, h:mm a v",
              "Ed, hmv": "E d, h:mm a v",
              "Gy, hmv": "y G, h:mm a v",
              "GyMd, hmv": "dd/MM/y GGGGG, h:mm a v",
              "GyMMM, hmv": "MMM y G, h:mm a v",
              "GyMMMd, hmv": "d MMM y G, h:mm a v",
              "GyMMMEd, hmv": "E d MMM y G, h:mm a v",
              "M, hmv": "L, h:mm a v",
              "Md, hmv": "dd/MM, h:mm a v",
              "MEd, hmv": "E dd/MM, h:mm a v",
              "MMM, hmv": "LLL, h:mm a v",
              "MMMd, hmv": "d MMM, h:mm a v",
              "MMMEd, hmv": "E d MMM, h:mm a v",
              "MMMMd hmv": "d MMMM h:mm a v",
              "y, hmv": "y, h:mm a v",
              "yM, hmv": "MM/y, h:mm a v",
              "yMd, hmv": "dd/MM/y, h:mm a v",
              "yMEd, hmv": "E dd/MM/y, h:mm a v",
              "yMMM, hmv": "MMM y, h:mm a v",
              "yMMMd, hmv": "d MMM y, h:mm a v",
              "yMMMEd, hmv": "E d MMM y, h:mm a v",
              "yMMMM hmv": "MMMM y h:mm a v",
              "EEEE d MMMM y Hmv": "EEEE d MMMM y HH:mm v",
              "d MMMM y Hmv": "d MMMM y HH:mm v",
              "d MMM y, Hmv": "d MMM y, HH:mm v",
              "dd/MM/yy, Hmv": "dd/MM/yy, HH:mm v",
              "d, Hmv": "d, HH:mm v",
              "E, Hmv": "ccc, HH:mm v",
              "Ed, Hmv": "E d, HH:mm v",
              "Gy, Hmv": "y G, HH:mm v",
              "GyMd, Hmv": "dd/MM/y GGGGG, HH:mm v",
              "GyMMM, Hmv": "MMM y G, HH:mm v",
              "GyMMMd, Hmv": "d MMM y G, HH:mm v",
              "GyMMMEd, Hmv": "E d MMM y G, HH:mm v",
              "M, Hmv": "L, HH:mm v",
              "Md, Hmv": "dd/MM, HH:mm v",
              "MEd, Hmv": "E dd/MM, HH:mm v",
              "MMM, Hmv": "LLL, HH:mm v",
              "MMMd, Hmv": "d MMM, HH:mm v",
              "MMMEd, Hmv": "E d MMM, HH:mm v",
              "MMMMd Hmv": "d MMMM HH:mm v",
              "y, Hmv": "y, HH:mm v",
              "yM, Hmv": "MM/y, HH:mm v",
              "yMd, Hmv": "dd/MM/y, HH:mm v",
              "yMEd, Hmv": "E dd/MM/y, HH:mm v",
              "yMMM, Hmv": "MMM y, HH:mm v",
              "yMMMd, Hmv": "d MMM y, HH:mm v",
              "yMMMEd, Hmv": "E d MMM y, HH:mm v",
              "yMMMM Hmv": "MMMM y HH:mm v",
              "EEEE d MMMM y ms": "EEEE d MMMM y mm:ss",
              "d MMMM y ms": "d MMMM y mm:ss",
              "d MMM y, ms": "d MMM y, mm:ss",
              "dd/MM/yy, ms": "dd/MM/yy, mm:ss",
              "d, ms": "d, mm:ss",
              "E, ms": "ccc, mm:ss",
              "Ed, ms": "E d, mm:ss",
              "Gy, ms": "y G, mm:ss",
              "GyMd, ms": "dd/MM/y GGGGG, mm:ss",
              "GyMMM, ms": "MMM y G, mm:ss",
              "GyMMMd, ms": "d MMM y G, mm:ss",
              "GyMMMEd, ms": "E d MMM y G, mm:ss",
              "M, ms": "L, mm:ss",
              "Md, ms": "dd/MM, mm:ss",
              "MEd, ms": "E dd/MM, mm:ss",
              "MMM, ms": "LLL, mm:ss",
              "MMMd, ms": "d MMM, mm:ss",
              "MMMEd, ms": "E d MMM, mm:ss",
              "MMMMd ms": "d MMMM mm:ss",
              "y, ms": "y, mm:ss",
              "yM, ms": "MM/y, mm:ss",
              "yMd, ms": "dd/MM/y, mm:ss",
              "yMEd, ms": "E dd/MM/y, mm:ss",
              "yMMM, ms": "MMM y, mm:ss",
              "yMMMd, ms": "d MMM y, mm:ss",
              "yMMMEd, ms": "E d MMM y, mm:ss",
              "yMMMM ms": "MMMM y mm:ss"
            }
          },
          intervalFormats: {
            intervalFormatFallback: "{0} – {1}",
            Bh: {
              B: "h B – h B",
              h: "h – h B"
            },
            Bhm: {
              B: "h:mm B – h:mm B",
              h: "h:mm – h:mm B",
              m: "h:mm – h:mm B"
            },
            d: {
              d: "d–d"
            },
            Gy: {
              G: "y G – y G",
              y: "y – y G"
            },
            GyM: {
              G: "MM/y GGGGG – MM/y GGGGG",
              M: "MM/y – MM/y GGGGG",
              y: "MM/y – MM/y GGGGG"
            },
            GyMd: {
              d: "dd/MM/y – dd/MM/y GGGGG",
              G: "dd/MM/y GGGGG – dd/MM/y GGGGG",
              M: "dd/MM/y – dd/MM/y GGGGG",
              y: "dd/MM/y – dd/MM/y GGGGG"
            },
            GyMEd: {
              d: "E dd/MM/y – E dd/MM/y GGGGG",
              G: "E dd/MM/y – E d/dMM/y GGGGG",
              M: "E dd/MM/y – E dd/MM/y GGGGG",
              y: "E dd/MM/y – E dd/MM/y GGGGG"
            },
            GyMMM: {
              G: "MMM y G – MMM y G",
              M: "MMM – MMM y G",
              y: "MMM y – MMM y G"
            },
            GyMMMd: {
              d: "d – d MMM y G",
              G: "d MMM y G – d MMM y G",
              M: "d MMM – d MMM y G",
              y: "d MMM y – d MMM y G"
            },
            GyMMMEd: {
              d: "E d MMM – E d MMM y G",
              G: "E d MMM y G – E d MMM y G",
              M: "E d MMM – E d MMM y G",
              y: "E d MMM y – E d MMM y G"
            },
            h: {
              a: "h a – h a",
              h: "h–h a"
            },
            H: {
              H: "HH–HH"
            },
            hm: {
              a: "h:mm a – h:mm a",
              h: "h:mm–h:mm a",
              m: "h:mm–h:mm a"
            },
            Hm: {
              H: "HH:mm–HH:mm",
              m: "HH:mm–HH:mm"
            },
            hmv: {
              a: "h:mm a – h:mm a v",
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
              M: "M–M"
            },
            Md: {
              d: "dd/MM – dd/MM",
              M: "dd/MM – dd/MM"
            },
            MEd: {
              d: "E dd/MM – E dd/MM",
              M: "E dd/MM – E dd/MM"
            },
            MMM: {
              M: "MMM–MMM"
            },
            MMMd: {
              d: "dd–dd MMM",
              M: "dd MMM – dd MMM"
            },
            MMMEd: {
              d: "E dd – E dd MMM",
              M: "E dd MMM – E dd MMM"
            },
            y: {
              y: "y–y"
            },
            yM: {
              M: "MM/y – MM/y",
              y: "MM/y – MM/y"
            },
            yMd: {
              d: "dd/MM/y – dd/MM/y",
              M: "dd/MM/y – dd/MM/y",
              y: "dd/MM/y – dd/MM/y"
            },
            yMEd: {
              d: "E dd/MM/y – E dd/MM/y",
              M: "E dd/MM/y – E dd/MM/y",
              y: "E dd/MM/y – E dd/MM/y"
            },
            yMMM: {
              M: "MMM–MMM y",
              y: "MMM y – MMM y"
            },
            yMMMd: {
              d: "dd–dd MMM y",
              M: "dd MMM – dd MMM y",
              y: "dd MMM y – dd MMM y"
            },
            yMMMEd: {
              d: "E d – E d MMM y",
              M: "E d MMM – E d MMM y",
              y: "E d MMM y – E d MMM y"
            },
            yMMMM: {
              M: "MMMM–MMMM y",
              y: "MMMM y – MMMM y"
            }
          },
          hourCycle: "h23",
          nu: ["latn"],
          ca: ["gregory"],
          hc: ["h23", ""]
        },
        locale: "it"
      })
    }
  }
]);