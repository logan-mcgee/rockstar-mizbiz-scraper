try {
  let M = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    m = (new M.Error).stack;
  m && (M._sentryDebugIds = M._sentryDebugIds || {}, M._sentryDebugIds[m] = "e37ef66d-1f37-46b0-93f0-08a5357125ee", M._sentryDebugIdIdentifier = "sentry-dbid-e37ef66d-1f37-46b0-93f0-08a5357125ee")
} catch (M) {} {
  let M = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[(new M.Error).stack] = Object.assign({}, M._sentryModuleMetadata[(new M.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [5259], {
    13577: () => {
      Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
        data: {
          am: "AM",
          pm: "PM",
          weekday: {
            narrow: ["S", "M", "D", "M", "D", "F", "S"],
            short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
            long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
          },
          era: {
            narrow: {
              BC: "v. Chr.",
              AD: "n. Chr."
            },
            short: {
              BC: "v. Chr.",
              AD: "n. Chr."
            },
            long: {
              BC: "v. Chr.",
              AD: "n. Chr."
            }
          },
          month: {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            short: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."],
            long: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
          },
          timeZoneName: {
            "America/Rio_Branco": {
              long: ["Acre-Normalzeit", "Acre-Sommerzeit"]
            },
            "Asia/Kabul": {
              long: ["Afghanistan-Zeit", "Afghanistan-Zeit"]
            },
            "Africa/Maputo": {
              long: ["Zentralafrikanische Zeit", "Zentralafrikanische Zeit"]
            },
            "Africa/Bujumbura": {
              long: ["Zentralafrikanische Zeit", "Zentralafrikanische Zeit"]
            },
            "Africa/Gaborone": {
              long: ["Zentralafrikanische Zeit", "Zentralafrikanische Zeit"]
            },
            "Africa/Lubumbashi": {
              long: ["Zentralafrikanische Zeit", "Zentralafrikanische Zeit"]
            },
            "Africa/Blantyre": {
              long: ["Zentralafrikanische Zeit", "Zentralafrikanische Zeit"]
            },
            "Africa/Kigali": {
              long: ["Zentralafrikanische Zeit", "Zentralafrikanische Zeit"]
            },
            "Africa/Lusaka": {
              long: ["Zentralafrikanische Zeit", "Zentralafrikanische Zeit"]
            },
            "Africa/Harare": {
              long: ["Zentralafrikanische Zeit", "Zentralafrikanische Zeit"]
            },
            "Africa/Nairobi": {
              long: ["Ostafrikanische Zeit", "Ostafrikanische Zeit"]
            },
            "Africa/Djibouti": {
              long: ["Ostafrikanische Zeit", "Ostafrikanische Zeit"]
            },
            "Africa/Asmera": {
              long: ["Ostafrikanische Zeit", "Ostafrikanische Zeit"]
            },
            "Africa/Addis_Ababa": {
              long: ["Ostafrikanische Zeit", "Ostafrikanische Zeit"]
            },
            "Indian/Comoro": {
              long: ["Ostafrikanische Zeit", "Ostafrikanische Zeit"]
            },
            "Indian/Antananarivo": {
              long: ["Ostafrikanische Zeit", "Ostafrikanische Zeit"]
            },
            "Africa/Mogadishu": {
              long: ["Ostafrikanische Zeit", "Ostafrikanische Zeit"]
            },
            "Africa/Dar_es_Salaam": {
              long: ["Ostafrikanische Zeit", "Ostafrikanische Zeit"]
            },
            "Africa/Kampala": {
              long: ["Ostafrikanische Zeit", "Ostafrikanische Zeit"]
            },
            "Indian/Mayotte": {
              long: ["Ostafrikanische Zeit", "Ostafrikanische Zeit"]
            },
            "Africa/Johannesburg": {
              long: ["Südafrikanische Zeit", "Südafrikanische Zeit"]
            },
            "Africa/Maseru": {
              long: ["Südafrikanische Zeit", "Südafrikanische Zeit"]
            },
            "Africa/Mbabane": {
              long: ["Südafrikanische Zeit", "Südafrikanische Zeit"]
            },
            "Africa/Lagos": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Africa/Luanda": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Africa/Porto-Novo": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Africa/Kinshasa": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Africa/Bangui": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Africa/Brazzaville": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Africa/Douala": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Africa/Libreville": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Africa/Malabo": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Africa/Niamey": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Africa/Ndjamena": {
              long: ["Westafrikanische Normalzeit", "Westafrikanische Sommerzeit"]
            },
            "Asia/Aqtobe": {
              long: ["Westkasachische Zeit", "Westkasachische Zeit"]
            },
            "America/Juneau": {
              long: ["Alaska-Normalzeit", "Alaska-Sommerzeit"]
            },
            "Asia/Almaty": {
              long: ["Ostkasachische Zeit", "Ostkasachische Zeit"]
            },
            "America/Manaus": {
              long: ["Amazonas-Normalzeit", "Amazonas-Sommerzeit"]
            },
            "America/Chicago": {
              long: ["Nordamerikanische Zentral-Normalzeit", "Nordamerikanische Zentral-Sommerzeit"]
            },
            "America/Belize": {
              long: ["Nordamerikanische Zentral-Normalzeit", "Nordamerikanische Zentral-Sommerzeit"]
            },
            "America/Winnipeg": {
              long: ["Nordamerikanische Zentral-Normalzeit", "Nordamerikanische Zentral-Sommerzeit"]
            },
            "America/Costa_Rica": {
              long: ["Nordamerikanische Zentral-Normalzeit", "Nordamerikanische Zentral-Sommerzeit"]
            },
            "America/Guatemala": {
              long: ["Nordamerikanische Zentral-Normalzeit", "Nordamerikanische Zentral-Sommerzeit"]
            },
            "America/Tegucigalpa": {
              long: ["Nordamerikanische Zentral-Normalzeit", "Nordamerikanische Zentral-Sommerzeit"]
            },
            "America/Mexico_City": {
              long: ["Nordamerikanische Zentral-Normalzeit", "Nordamerikanische Zentral-Sommerzeit"]
            },
            "America/El_Salvador": {
              long: ["Nordamerikanische Zentral-Normalzeit", "Nordamerikanische Zentral-Sommerzeit"]
            },
            "America/New_York": {
              long: ["Nordamerikanische Ostküsten-Normalzeit", "Nordamerikanische Ostküsten-Sommerzeit"]
            },
            "America/Nassau": {
              long: ["Nordamerikanische Ostküsten-Normalzeit", "Nordamerikanische Ostküsten-Sommerzeit"]
            },
            "America/Toronto": {
              long: ["Nordamerikanische Ostküsten-Normalzeit", "Nordamerikanische Ostküsten-Sommerzeit"]
            },
            "America/Port-au-Prince": {
              long: ["Nordamerikanische Ostküsten-Normalzeit", "Nordamerikanische Ostküsten-Sommerzeit"]
            },
            "America/Jamaica": {
              long: ["Nordamerikanische Ostküsten-Normalzeit", "Nordamerikanische Ostküsten-Sommerzeit"]
            },
            "America/Cayman": {
              long: ["Nordamerikanische Ostküsten-Normalzeit", "Nordamerikanische Ostküsten-Sommerzeit"]
            },
            "America/Panama": {
              long: ["Nordamerikanische Ostküsten-Normalzeit", "Nordamerikanische Ostküsten-Sommerzeit"]
            },
            "America/Denver": {
              long: ["Rocky-Mountains-Normalzeit", "Rocky-Mountains-Sommerzeit"]
            },
            "America/Edmonton": {
              long: ["Rocky-Mountains-Normalzeit", "Rocky-Mountains-Sommerzeit"]
            },
            "America/Los_Angeles": {
              long: ["Nordamerikanische Westküsten-Normalzeit", "Nordamerikanische Westküsten-Sommerzeit"]
            },
            "America/Vancouver": {
              long: ["Nordamerikanische Westküsten-Normalzeit", "Nordamerikanische Westküsten-Sommerzeit"]
            },
            "America/Tijuana": {
              long: ["Nordamerikanische Westküsten-Normalzeit", "Nordamerikanische Westküsten-Sommerzeit"]
            },
            "Asia/Anadyr": {
              long: ["Anadyr Normalzeit", "Anadyr Sommerzeit"]
            },
            "Pacific/Apia": {
              long: ["Apia-Normalzeit", "Apia-Sommerzeit"]
            },
            "Asia/Riyadh": {
              long: ["Arabische Normalzeit", "Arabische Sommerzeit"]
            },
            "Asia/Bahrain": {
              long: ["Arabische Normalzeit", "Arabische Sommerzeit"]
            },
            "Asia/Baghdad": {
              long: ["Arabische Normalzeit", "Arabische Sommerzeit"]
            },
            "Asia/Kuwait": {
              long: ["Arabische Normalzeit", "Arabische Sommerzeit"]
            },
            "Asia/Qatar": {
              long: ["Arabische Normalzeit", "Arabische Sommerzeit"]
            },
            "Asia/Aden": {
              long: ["Arabische Normalzeit", "Arabische Sommerzeit"]
            },
            "America/Buenos_Aires": {
              long: ["Argentinische Normalzeit", "Argentinische Sommerzeit"]
            },
            "America/Argentina/San_Luis": {
              long: ["Westargentinische Normalzeit", "Westargentinische Sommerzeit"]
            },
            "Asia/Ashgabat": {
              long: ["Turkmenische Normalzeit", "Turkmenische Sommerzeit"]
            },
            "America/Halifax": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Antigua": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Anguilla": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Aruba": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Barbados": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "Atlantic/Bermuda": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Kralendijk": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Curacao": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Dominica": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Grenada": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Thule": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Guadeloupe": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/St_Kitts": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/St_Lucia": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Marigot": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Martinique": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Montserrat": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Puerto_Rico": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Lower_Princes": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Port_of_Spain": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/St_Vincent": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/Tortola": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "America/St_Thomas": {
              long: ["Atlantik-Normalzeit", "Atlantik-Sommerzeit"]
            },
            "Australia/Adelaide": {
              long: ["Zentralaustralische Normalzeit", "Zentralaustralische Sommerzeit"]
            },
            "Australia/Eucla": {
              long: ["Zentral-/Westaustralische Normalzeit", "Zentral-/Westaustralische Sommerzeit"]
            },
            "Australia/Sydney": {
              long: ["Ostaustralische Normalzeit", "Ostaustralische Sommerzeit"]
            },
            "Australia/Perth": {
              long: ["Westaustralische Normalzeit", "Westaustralische Sommerzeit"]
            },
            "Atlantic/Azores": {
              long: ["Azoren-Normalzeit", "Azoren-Sommerzeit"]
            },
            "Asia/Thimphu": {
              long: ["Bhutan-Zeit", "Bhutan-Zeit"]
            },
            "America/La_Paz": {
              long: ["Bolivianische Zeit", "Bolivianische Zeit"]
            },
            "Asia/Kuching": {
              long: ["Malaysische Zeit", "Malaysische Zeit"]
            },
            "America/Sao_Paulo": {
              long: ["Brasília-Normalzeit", "Brasília-Sommerzeit"]
            },
            "Europe/London": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Asia/Brunei": {
              long: ["Brunei-Darussalam-Zeit", "Brunei-Darussalam-Zeit"]
            },
            "Atlantic/Cape_Verde": {
              long: ["Cabo-Verde-Normalzeit", "Cabo-Verde-Sommerzeit"]
            },
            "Antarctica/Casey": {
              long: ["Casey-Zeit", "Casey-Zeit"]
            },
            "Pacific/Saipan": {
              long: ["Nördliche-Marianen-Zeit", "Nördliche-Marianen-Zeit"]
            },
            "Pacific/Guam": {
              long: ["Guam-Zeit", "Guam-Zeit"]
            },
            "Pacific/Chatham": {
              long: ["Chatham-Normalzeit", "Chatham-Sommerzeit"]
            },
            "America/Santiago": {
              long: ["Chilenische Normalzeit", "Chilenische Sommerzeit"]
            },
            "Asia/Shanghai": {
              long: ["Chinesische Normalzeit", "Chinesische Sommerzeit"]
            },
            "Indian/Christmas": {
              long: ["Weihnachtsinsel-Zeit", "Weihnachtsinsel-Zeit"]
            },
            "Indian/Cocos": {
              long: ["Kokosinseln-Zeit", "Kokosinseln-Zeit"]
            },
            "America/Bogota": {
              long: ["Kolumbianische Normalzeit", "Kolumbianische Sommerzeit"]
            },
            "Pacific/Rarotonga": {
              long: ["Cookinseln-Normalzeit", "Cookinseln-Sommerzeit"]
            },
            "America/Havana": {
              long: ["Kubanische Normalzeit", "Kubanische Sommerzeit"]
            },
            "Antarctica/Davis": {
              long: ["Davis-Zeit", "Davis-Zeit"]
            },
            "Antarctica/DumontDUrville": {
              long: ["Dumont-d’Urville-Zeit", "Dumont-d’Urville-Zeit"]
            },
            "Asia/Dushanbe": {
              long: ["Tadschikische Zeit", "Tadschikische Zeit"]
            },
            "America/Paramaribo": {
              long: ["Suriname-Zeit", "Suriname-Zeit"]
            },
            "Asia/Dili": {
              long: ["Osttimor-Zeit", "Osttimor-Zeit"]
            },
            "Pacific/Easter": {
              long: ["Osterinsel-Normalzeit", "Osterinsel-Sommerzeit"]
            },
            "America/Guayaquil": {
              long: ["Ecuadorianische Zeit", "Ecuadorianische Zeit"]
            },
            "Europe/Paris": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Andorra": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Tirane": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Vienna": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Sarajevo": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Brussels": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Zurich": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Prague": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Berlin": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Copenhagen": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Madrid": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Gibraltar": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Zagreb": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Budapest": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Rome": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Vaduz": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Luxembourg": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Monaco": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Podgorica": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Skopje": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Malta": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Amsterdam": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Oslo": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Warsaw": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Belgrade": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Stockholm": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Ljubljana": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Arctic/Longyearbyen": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Bratislava": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/San_Marino": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Africa/Tunis": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Vatican": {
              long: ["Mitteleuropäische Normalzeit", "Mitteleuropäische Sommerzeit"],
              short: ["MEZ", "MESZ"]
            },
            "Europe/Bucharest": {
              long: ["Osteuropäische Normalzeit", "Osteuropäische Sommerzeit"],
              short: ["OEZ", "OESZ"]
            },
            "Europe/Mariehamn": {
              long: ["Osteuropäische Normalzeit", "Osteuropäische Sommerzeit"],
              short: ["OEZ", "OESZ"]
            },
            "Europe/Sofia": {
              long: ["Osteuropäische Normalzeit", "Osteuropäische Sommerzeit"],
              short: ["OEZ", "OESZ"]
            },
            "Asia/Nicosia": {
              long: ["Osteuropäische Normalzeit", "Osteuropäische Sommerzeit"],
              short: ["OEZ", "OESZ"]
            },
            "Africa/Cairo": {
              long: ["Osteuropäische Normalzeit", "Osteuropäische Sommerzeit"],
              short: ["OEZ", "OESZ"]
            },
            "Europe/Helsinki": {
              long: ["Osteuropäische Normalzeit", "Osteuropäische Sommerzeit"],
              short: ["OEZ", "OESZ"]
            },
            "Europe/Athens": {
              long: ["Osteuropäische Normalzeit", "Osteuropäische Sommerzeit"],
              short: ["OEZ", "OESZ"]
            },
            "Asia/Beirut": {
              long: ["Osteuropäische Normalzeit", "Osteuropäische Sommerzeit"],
              short: ["OEZ", "OESZ"]
            },
            "Europe/Minsk": {
              long: ["Kaliningrader Zeit", "Kaliningrader Zeit"]
            },
            "Europe/Kaliningrad": {
              long: ["Kaliningrader Zeit", "Kaliningrader Zeit"]
            },
            "Atlantic/Canary": {
              long: ["Westeuropäische Normalzeit", "Westeuropäische Sommerzeit"],
              short: ["WEZ", "WESZ"]
            },
            "Atlantic/Faeroe": {
              long: ["Westeuropäische Normalzeit", "Westeuropäische Sommerzeit"],
              short: ["WEZ", "WESZ"]
            },
            "Atlantic/Stanley": {
              long: ["Falklandinseln-Normalzeit", "Falklandinseln-Sommerzeit"]
            },
            "Pacific/Fiji": {
              long: ["Fidschi-Normalzeit", "Fidschi-Sommerzeit"]
            },
            "America/Cayenne": {
              long: ["Französisch-Guayana-Zeit", "Französisch-Guayana-Zeit"]
            },
            "Indian/Kerguelen": {
              long: ["Französische-Süd-und-Antarktisgebiete-Zeit", "Französische-Süd-und-Antarktisgebiete-Zeit"]
            },
            "Asia/Bishkek": {
              long: ["Kirgisische Zeit", "Kirgisische Zeit"]
            },
            "Pacific/Galapagos": {
              long: ["Galapagos-Zeit", "Galapagos-Zeit"]
            },
            "Pacific/Gambier": {
              long: ["Gambier-Zeit", "Gambier-Zeit"]
            },
            "Pacific/Tarawa": {
              long: ["Gilbert-Inseln-Zeit", "Gilbert-Inseln-Zeit"]
            },
            "Atlantic/Reykjavik": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Africa/Ouagadougou": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Africa/Abidjan": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Africa/Accra": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Africa/Banjul": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Africa/Conakry": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Africa/Bamako": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Africa/Nouakchott": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Atlantic/St_Helena": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Africa/Freetown": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Africa/Dakar": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "Africa/Lome": {
              long: ["Mittlere Greenwich-Zeit", "Mittlere Greenwich-Zeit"]
            },
            "America/Godthab": {
              long: ["Westgrönland-Normalzeit", "Westgrönland-Sommerzeit"]
            },
            "America/Scoresbysund": {
              long: ["Ostgrönland-Normalzeit", "Ostgrönland-Sommerzeit"]
            },
            "Asia/Dubai": {
              long: ["Golf-Zeit", "Golf-Zeit"]
            },
            "Asia/Muscat": {
              long: ["Golf-Zeit", "Golf-Zeit"]
            },
            "America/Guyana": {
              long: ["Guyana-Zeit", "Guyana-Zeit"]
            },
            "Pacific/Honolulu": {
              long: ["Hawaii-Aleuten-Normalzeit", "Hawaii-Aleuten-Sommerzeit"]
            },
            "Asia/Hong_Kong": {
              long: ["Hongkong-Normalzeit", "Hongkong-Sommerzeit"]
            },
            "Asia/Hovd": {
              long: ["Chowd-Normalzeit", "Chowd-Sommerzeit"]
            },
            "Asia/Calcutta": {
              long: ["Indische Normalzeit", "Indische Normalzeit"]
            },
            "Asia/Colombo": {
              long: ["Sri-Lanka-Zeit", "Sri-Lanka-Zeit"]
            },
            "Indian/Chagos": {
              long: ["Indischer-Ozean-Zeit", "Indischer-Ozean-Zeit"]
            },
            "Asia/Bangkok": {
              long: ["Indochina-Zeit", "Indochina-Zeit"]
            },
            "Asia/Phnom_Penh": {
              long: ["Indochina-Zeit", "Indochina-Zeit"]
            },
            "Asia/Vientiane": {
              long: ["Indochina-Zeit", "Indochina-Zeit"]
            },
            "Asia/Makassar": {
              long: ["Zentralindonesische Zeit", "Zentralindonesische Zeit"]
            },
            "Asia/Jayapura": {
              long: ["Ostindonesische Zeit", "Ostindonesische Zeit"]
            },
            "Asia/Jakarta": {
              long: ["Westindonesische Zeit", "Westindonesische Zeit"]
            },
            "Asia/Tehran": {
              long: ["Iranische Normalzeit", "Iranische Sommerzeit"]
            },
            "Asia/Irkutsk": {
              long: ["Irkutsker Normalzeit", "Irkutsker Sommerzeit"]
            },
            "Asia/Jerusalem": {
              long: ["Israelische Normalzeit", "Israelische Sommerzeit"]
            },
            "Asia/Tokyo": {
              long: ["Japanische Normalzeit", "Japanische Sommerzeit"]
            },
            "Asia/Kamchatka": {
              long: ["Kamtschatka-Normalzeit", "Kamtschatka-Sommerzeit"]
            },
            "Asia/Karachi": {
              long: ["Pakistanische Normalzeit", "Pakistanische Sommerzeit"]
            },
            "Asia/Qyzylorda": {
              long: ["Quysylorda-Normalzeit", "Qysylorda-Sommerzeit"]
            },
            "Asia/Seoul": {
              long: ["Koreanische Normalzeit", "Koreanische Sommerzeit"]
            },
            "Pacific/Kosrae": {
              long: ["Kosrae-Zeit", "Kosrae-Zeit"]
            },
            "Asia/Krasnoyarsk": {
              long: ["Krasnojarsker Normalzeit", "Krasnojarsker Sommerzeit"]
            },
            "Europe/Samara": {
              long: ["Samara-Normalzeit", "Samara-Sommerzeit"]
            },
            "Pacific/Kiritimati": {
              long: ["Linieninseln-Zeit", "Linieninseln-Zeit"]
            },
            "Australia/Lord_Howe": {
              long: ["Lord-Howe-Normalzeit", "Lord-Howe-Sommerzeit"]
            },
            "Asia/Macau": {
              long: ["Macau-Normalzeit", "Macau-Sommerzeit"]
            },
            "Asia/Magadan": {
              long: ["Magadan-Normalzeit", "Magadan-Sommerzeit"]
            },
            "Indian/Maldives": {
              long: ["Malediven-Zeit", "Malediven-Zeit"]
            },
            "Pacific/Marquesas": {
              long: ["Marquesas-Zeit", "Marquesas-Zeit"]
            },
            "Pacific/Majuro": {
              long: ["Marshallinseln-Zeit", "Marshallinseln-Zeit"]
            },
            "Indian/Mauritius": {
              long: ["Mauritius-Normalzeit", "Mauritius-Sommerzeit"]
            },
            "Antarctica/Mawson": {
              long: ["Mawson-Zeit", "Mawson-Zeit"]
            },
            "America/Mazatlan": {
              long: ["Mexikanische Pazifik-Normalzeit", "Mexikanische Pazifik-Sommerzeit"]
            },
            "Asia/Ulaanbaatar": {
              long: ["Ulaanbaatar-Normalzeit", "Ulaanbaatar-Sommerzeit"]
            },
            "Europe/Moscow": {
              long: ["Moskauer Normalzeit", "Moskauer Sommerzeit"]
            },
            "Asia/Rangoon": {
              long: ["Myanmar-Zeit", "Myanmar-Zeit"]
            },
            "Pacific/Nauru": {
              long: ["Nauru-Zeit", "Nauru-Zeit"]
            },
            "Asia/Katmandu": {
              long: ["Nepalesische Zeit", "Nepalesische Zeit"]
            },
            "Pacific/Noumea": {
              long: ["Neukaledonische Normalzeit", "Neukaledonische Sommerzeit"]
            },
            "Pacific/Auckland": {
              long: ["Neuseeland-Normalzeit", "Neuseeland-Sommerzeit"]
            },
            "Antarctica/McMurdo": {
              long: ["Neuseeland-Normalzeit", "Neuseeland-Sommerzeit"]
            },
            "America/St_Johns": {
              long: ["Neufundland-Normalzeit", "Neufundland-Sommerzeit"]
            },
            "Pacific/Niue": {
              long: ["Niue-Zeit", "Niue-Zeit"]
            },
            "Pacific/Norfolk": {
              long: ["Norfolkinsel-Normalzeit", "Norfolkinsel-Sommerzeit"]
            },
            "America/Noronha": {
              long: ["Fernando-de-Noronha-Normalzeit", "Fernando-de-Noronha-Sommerzeit"]
            },
            "Asia/Novosibirsk": {
              long: ["Nowosibirsker Normalzeit", "Nowosibirsker Sommerzeit"]
            },
            "Asia/Omsk": {
              long: ["Omsker Normalzeit", "Omsker Sommerzeit"]
            },
            "Pacific/Palau": {
              long: ["Palau-Zeit", "Palau-Zeit"]
            },
            "Pacific/Port_Moresby": {
              long: ["Papua-Neuguinea-Zeit", "Papua-Neuguinea-Zeit"]
            },
            "America/Asuncion": {
              long: ["Paraguayische Normalzeit", "Paraguayische Sommerzeit"]
            },
            "America/Lima": {
              long: ["Peruanische Normalzeit", "Peruanische Sommerzeit"]
            },
            "Asia/Manila": {
              long: ["Philippinische Normalzeit", "Philippinische Sommerzeit"]
            },
            "Pacific/Enderbury": {
              long: ["Phoenixinseln-Zeit", "Phoenixinseln-Zeit"]
            },
            "America/Miquelon": {
              long: ["St.-Pierre-und-Miquelon-Normalzeit", "St.-Pierre-und-Miquelon-Sommerzeit"]
            },
            "Pacific/Pitcairn": {
              long: ["Pitcairninseln-Zeit", "Pitcairninseln-Zeit"]
            },
            "Pacific/Ponape": {
              long: ["Ponape-Zeit", "Ponape-Zeit"]
            },
            "Asia/Pyongyang": {
              long: ["Pjöngjang-Zeit", "Pjöngjang-Zeit"]
            },
            "Indian/Reunion": {
              long: ["Réunion-Zeit", "Réunion-Zeit"]
            },
            "Antarctica/Rothera": {
              long: ["Rothera-Zeit", "Rothera-Zeit"]
            },
            "Asia/Sakhalin": {
              long: ["Sachalin-Normalzeit", "Sachalin-Sommerzeit"]
            },
            "Pacific/Pago_Pago": {
              long: ["Samoa-Normalzeit", "Samoa-Sommerzeit"]
            },
            "Indian/Mahe": {
              long: ["Seychellen-Zeit", "Seychellen-Zeit"]
            },
            "Asia/Singapore": {
              long: ["Singapurische Normalzeit", "Singapurische Normalzeit"]
            },
            "Pacific/Guadalcanal": {
              long: ["Salomonen-Zeit", "Salomonen-Zeit"]
            },
            "Atlantic/South_Georgia": {
              long: ["Südgeorgische Zeit", "Südgeorgische Zeit"]
            },
            "Asia/Yekaterinburg": {
              long: ["Jekaterinburger Normalzeit", "Jekaterinburger Sommerzeit"]
            },
            "Antarctica/Syowa": {
              long: ["Syowa-Zeit", "Syowa-Zeit"]
            },
            "Pacific/Tahiti": {
              long: ["Tahiti-Zeit", "Tahiti-Zeit"]
            },
            "Asia/Taipei": {
              long: ["Taipeh-Normalzeit", "Taipeh-Sommerzeit"]
            },
            "Asia/Tashkent": {
              long: ["Usbekische Normalzeit", "Usbekische Sommerzeit"]
            },
            "Pacific/Fakaofo": {
              long: ["Tokelau-Zeit", "Tokelau-Zeit"]
            },
            "Pacific/Tongatapu": {
              long: ["Tongaische Normalzeit", "Tongaische Sommerzeit"]
            },
            "Pacific/Truk": {
              long: ["Chuuk-Zeit", "Chuuk-Zeit"]
            },
            "Pacific/Funafuti": {
              long: ["Tuvalu-Zeit", "Tuvalu-Zeit"]
            },
            "America/Montevideo": {
              long: ["Uruguayische Normalzeit", "Uruguayische Sommerzeit"]
            },
            "Pacific/Efate": {
              long: ["Vanuatu-Normalzeit", "Vanuatu-Sommerzeit"]
            },
            "America/Caracas": {
              long: ["Venezuela-Zeit", "Venezuela-Zeit"]
            },
            "Asia/Vladivostok": {
              long: ["Wladiwostoker Normalzeit", "Wladiwostoker Sommerzeit"]
            },
            "Europe/Volgograd": {
              long: ["Wolgograder Normalzeit", "Wolgograder Sommerzeit"]
            },
            "Antarctica/Vostok": {
              long: ["Wostok-Zeit", "Wostok-Zeit"]
            },
            "Pacific/Wake": {
              long: ["Wake-Insel-Zeit", "Wake-Insel-Zeit"]
            },
            "Pacific/Wallis": {
              long: ["Wallis-und-Futuna-Zeit", "Wallis-und-Futuna-Zeit"]
            },
            "Asia/Yakutsk": {
              long: ["Jakutsker Normalzeit", "Jakutsker Sommerzeit"]
            },
            "America/Whitehorse": {
              long: ["Yukon-Zeit", "Yukon-Zeit"]
            },
            UTC: {
              long: ["Koordinierte Weltzeit", "Koordinierte Weltzeit"],
              short: ["UTC", "UTC"]
            }
          },
          gmtFormat: "GMT{0}",
          hourFormat: "+HH:mm;-HH:mm",
          dateFormat: {
            full: "EEEE, d. MMMM y",
            long: "d. MMMM y",
            medium: "dd.MM.y",
            short: "dd.MM.yy"
          },
          timeFormat: {
            full: "HH:mm:ss zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
          },
          dateTimeFormat: {
            full: "{1}, {0}",
            long: "{1}, {0}",
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
              Ed: "E, d.",
              Ehm: "E h:mm a",
              EHm: "E, HH:mm",
              Ehms: "E, h:mm:ss a",
              EHms: "E, HH:mm:ss",
              Gy: "y G",
              GyMd: "dd.MM.y G",
              GyMMM: "MMM y G",
              GyMMMd: "d. MMM y G",
              GyMMMEd: "E, d. MMM y G",
              h: "h 'Uhr' a",
              H: "HH 'Uhr'",
              hm: "h:mm a",
              Hm: "HH:mm",
              hms: "h:mm:ss a",
              Hms: "HH:mm:ss",
              hmsv: "h:mm:ss a v",
              Hmsv: "HH:mm:ss v",
              hmv: "h:mm a v",
              Hmv: "HH:mm v",
              M: "L",
              Md: "d.M.",
              MEd: "E, d.M.",
              MMd: "d.MM.",
              MMdd: "dd.MM.",
              MMM: "LLL",
              MMMd: "d. MMM",
              MMMEd: "E, d. MMM",
              MMMMd: "d. MMMM",
              MMMMEd: "E, d. MMMM",
              ms: "mm:ss",
              y: "y",
              yM: "M/y",
              yMd: "d.M.y",
              yMEd: "E, d.M.y",
              yMM: "MM.y",
              yMMdd: "dd.MM.y",
              yMMM: "MMM y",
              yMMMd: "d. MMM y",
              yMMMEd: "E, d. MMM y",
              yMMMM: "MMMM y",
              "EEEE, d. MMMM y": "EEEE, d. MMMM y",
              "d. MMMM y": "d. MMMM y",
              "dd.MM.y": "dd.MM.y",
              "dd.MM.yy": "dd.MM.yy",
              "HH:mm:ss zzzz": "HH:mm:ss zzzz",
              "HH:mm:ss z": "HH:mm:ss z",
              "HH:mm:ss": "HH:mm:ss",
              "HH:mm": "HH:mm",
              "EEEE, d. MMMM y, HH:mm:ss zzzz": "EEEE, d. MMMM y, HH:mm:ss zzzz",
              "d. MMMM y, HH:mm:ss zzzz": "d. MMMM y, HH:mm:ss zzzz",
              "dd.MM.y, HH:mm:ss zzzz": "dd.MM.y, HH:mm:ss zzzz",
              "dd.MM.yy, HH:mm:ss zzzz": "dd.MM.yy, HH:mm:ss zzzz",
              "d, HH:mm:ss zzzz": "d, HH:mm:ss zzzz",
              "E, HH:mm:ss zzzz": "ccc, HH:mm:ss zzzz",
              "Ed, HH:mm:ss zzzz": "E, d., HH:mm:ss zzzz",
              "Gy, HH:mm:ss zzzz": "y G, HH:mm:ss zzzz",
              "GyMd, HH:mm:ss zzzz": "dd.MM.y G, HH:mm:ss zzzz",
              "GyMMM, HH:mm:ss zzzz": "MMM y G, HH:mm:ss zzzz",
              "GyMMMd, HH:mm:ss zzzz": "d. MMM y G, HH:mm:ss zzzz",
              "GyMMMEd, HH:mm:ss zzzz": "E, d. MMM y G, HH:mm:ss zzzz",
              "M, HH:mm:ss zzzz": "L, HH:mm:ss zzzz",
              "Md, HH:mm:ss zzzz": "d.M., HH:mm:ss zzzz",
              "MEd, HH:mm:ss zzzz": "E, d.M., HH:mm:ss zzzz",
              "MMd, HH:mm:ss zzzz": "d.MM., HH:mm:ss zzzz",
              "MMdd, HH:mm:ss zzzz": "dd.MM., HH:mm:ss zzzz",
              "MMM, HH:mm:ss zzzz": "LLL, HH:mm:ss zzzz",
              "MMMd, HH:mm:ss zzzz": "d. MMM, HH:mm:ss zzzz",
              "MMMEd, HH:mm:ss zzzz": "E, d. MMM, HH:mm:ss zzzz",
              "MMMMd, HH:mm:ss zzzz": "d. MMMM, HH:mm:ss zzzz",
              "MMMMEd, HH:mm:ss zzzz": "E, d. MMMM, HH:mm:ss zzzz",
              "y, HH:mm:ss zzzz": "y, HH:mm:ss zzzz",
              "yM, HH:mm:ss zzzz": "M/y, HH:mm:ss zzzz",
              "yMd, HH:mm:ss zzzz": "d.M.y, HH:mm:ss zzzz",
              "yMEd, HH:mm:ss zzzz": "E, d.M.y, HH:mm:ss zzzz",
              "yMM, HH:mm:ss zzzz": "MM.y, HH:mm:ss zzzz",
              "yMMdd, HH:mm:ss zzzz": "dd.MM.y, HH:mm:ss zzzz",
              "yMMM, HH:mm:ss zzzz": "MMM y, HH:mm:ss zzzz",
              "yMMMd, HH:mm:ss zzzz": "d. MMM y, HH:mm:ss zzzz",
              "yMMMEd, HH:mm:ss zzzz": "E, d. MMM y, HH:mm:ss zzzz",
              "yMMMM, HH:mm:ss zzzz": "MMMM y, HH:mm:ss zzzz",
              "EEEE, d. MMMM y, HH:mm:ss z": "EEEE, d. MMMM y, HH:mm:ss z",
              "d. MMMM y, HH:mm:ss z": "d. MMMM y, HH:mm:ss z",
              "dd.MM.y, HH:mm:ss z": "dd.MM.y, HH:mm:ss z",
              "dd.MM.yy, HH:mm:ss z": "dd.MM.yy, HH:mm:ss z",
              "d, HH:mm:ss z": "d, HH:mm:ss z",
              "E, HH:mm:ss z": "ccc, HH:mm:ss z",
              "Ed, HH:mm:ss z": "E, d., HH:mm:ss z",
              "Gy, HH:mm:ss z": "y G, HH:mm:ss z",
              "GyMd, HH:mm:ss z": "dd.MM.y G, HH:mm:ss z",
              "GyMMM, HH:mm:ss z": "MMM y G, HH:mm:ss z",
              "GyMMMd, HH:mm:ss z": "d. MMM y G, HH:mm:ss z",
              "GyMMMEd, HH:mm:ss z": "E, d. MMM y G, HH:mm:ss z",
              "M, HH:mm:ss z": "L, HH:mm:ss z",
              "Md, HH:mm:ss z": "d.M., HH:mm:ss z",
              "MEd, HH:mm:ss z": "E, d.M., HH:mm:ss z",
              "MMd, HH:mm:ss z": "d.MM., HH:mm:ss z",
              "MMdd, HH:mm:ss z": "dd.MM., HH:mm:ss z",
              "MMM, HH:mm:ss z": "LLL, HH:mm:ss z",
              "MMMd, HH:mm:ss z": "d. MMM, HH:mm:ss z",
              "MMMEd, HH:mm:ss z": "E, d. MMM, HH:mm:ss z",
              "MMMMd, HH:mm:ss z": "d. MMMM, HH:mm:ss z",
              "MMMMEd, HH:mm:ss z": "E, d. MMMM, HH:mm:ss z",
              "y, HH:mm:ss z": "y, HH:mm:ss z",
              "yM, HH:mm:ss z": "M/y, HH:mm:ss z",
              "yMd, HH:mm:ss z": "d.M.y, HH:mm:ss z",
              "yMEd, HH:mm:ss z": "E, d.M.y, HH:mm:ss z",
              "yMM, HH:mm:ss z": "MM.y, HH:mm:ss z",
              "yMMdd, HH:mm:ss z": "dd.MM.y, HH:mm:ss z",
              "yMMM, HH:mm:ss z": "MMM y, HH:mm:ss z",
              "yMMMd, HH:mm:ss z": "d. MMM y, HH:mm:ss z",
              "yMMMEd, HH:mm:ss z": "E, d. MMM y, HH:mm:ss z",
              "yMMMM, HH:mm:ss z": "MMMM y, HH:mm:ss z",
              "EEEE, d. MMMM y, HH:mm:ss": "EEEE, d. MMMM y, HH:mm:ss",
              "d. MMMM y, HH:mm:ss": "d. MMMM y, HH:mm:ss",
              "dd.MM.y, HH:mm:ss": "dd.MM.y, HH:mm:ss",
              "dd.MM.yy, HH:mm:ss": "dd.MM.yy, HH:mm:ss",
              "d, HH:mm:ss": "d, HH:mm:ss",
              "E, HH:mm:ss": "ccc, HH:mm:ss",
              "Ed, HH:mm:ss": "E, d., HH:mm:ss",
              "Gy, HH:mm:ss": "y G, HH:mm:ss",
              "GyMd, HH:mm:ss": "dd.MM.y G, HH:mm:ss",
              "GyMMM, HH:mm:ss": "MMM y G, HH:mm:ss",
              "GyMMMd, HH:mm:ss": "d. MMM y G, HH:mm:ss",
              "GyMMMEd, HH:mm:ss": "E, d. MMM y G, HH:mm:ss",
              "M, HH:mm:ss": "L, HH:mm:ss",
              "Md, HH:mm:ss": "d.M., HH:mm:ss",
              "MEd, HH:mm:ss": "E, d.M., HH:mm:ss",
              "MMd, HH:mm:ss": "d.MM., HH:mm:ss",
              "MMdd, HH:mm:ss": "dd.MM., HH:mm:ss",
              "MMM, HH:mm:ss": "LLL, HH:mm:ss",
              "MMMd, HH:mm:ss": "d. MMM, HH:mm:ss",
              "MMMEd, HH:mm:ss": "E, d. MMM, HH:mm:ss",
              "MMMMd, HH:mm:ss": "d. MMMM, HH:mm:ss",
              "MMMMEd, HH:mm:ss": "E, d. MMMM, HH:mm:ss",
              "y, HH:mm:ss": "y, HH:mm:ss",
              "yM, HH:mm:ss": "M/y, HH:mm:ss",
              "yMd, HH:mm:ss": "d.M.y, HH:mm:ss",
              "yMEd, HH:mm:ss": "E, d.M.y, HH:mm:ss",
              "yMM, HH:mm:ss": "MM.y, HH:mm:ss",
              "yMMdd, HH:mm:ss": "dd.MM.y, HH:mm:ss",
              "yMMM, HH:mm:ss": "MMM y, HH:mm:ss",
              "yMMMd, HH:mm:ss": "d. MMM y, HH:mm:ss",
              "yMMMEd, HH:mm:ss": "E, d. MMM y, HH:mm:ss",
              "yMMMM, HH:mm:ss": "MMMM y, HH:mm:ss",
              "EEEE, d. MMMM y, HH:mm": "EEEE, d. MMMM y, HH:mm",
              "d. MMMM y, HH:mm": "d. MMMM y, HH:mm",
              "dd.MM.y, HH:mm": "dd.MM.y, HH:mm",
              "dd.MM.yy, HH:mm": "dd.MM.yy, HH:mm",
              "d, HH:mm": "d, HH:mm",
              "E, HH:mm": "ccc, HH:mm",
              "Ed, HH:mm": "E, d., HH:mm",
              "Gy, HH:mm": "y G, HH:mm",
              "GyMd, HH:mm": "dd.MM.y G, HH:mm",
              "GyMMM, HH:mm": "MMM y G, HH:mm",
              "GyMMMd, HH:mm": "d. MMM y G, HH:mm",
              "GyMMMEd, HH:mm": "E, d. MMM y G, HH:mm",
              "M, HH:mm": "L, HH:mm",
              "Md, HH:mm": "d.M., HH:mm",
              "MEd, HH:mm": "E, d.M., HH:mm",
              "MMd, HH:mm": "d.MM., HH:mm",
              "MMdd, HH:mm": "dd.MM., HH:mm",
              "MMM, HH:mm": "LLL, HH:mm",
              "MMMd, HH:mm": "d. MMM, HH:mm",
              "MMMEd, HH:mm": "E, d. MMM, HH:mm",
              "MMMMd, HH:mm": "d. MMMM, HH:mm",
              "MMMMEd, HH:mm": "E, d. MMMM, HH:mm",
              "y, HH:mm": "y, HH:mm",
              "yM, HH:mm": "M/y, HH:mm",
              "yMd, HH:mm": "d.M.y, HH:mm",
              "yMEd, HH:mm": "E, d.M.y, HH:mm",
              "yMM, HH:mm": "MM.y, HH:mm",
              "yMMdd, HH:mm": "dd.MM.y, HH:mm",
              "yMMM, HH:mm": "MMM y, HH:mm",
              "yMMMd, HH:mm": "d. MMM y, HH:mm",
              "yMMMEd, HH:mm": "E, d. MMM y, HH:mm",
              "yMMMM, HH:mm": "MMMM y, HH:mm",
              "EEEE, d. MMMM y, Bh": "EEEE, d. MMMM y, h B",
              "d. MMMM y, Bh": "d. MMMM y, h B",
              "dd.MM.y, Bh": "dd.MM.y, h B",
              "dd.MM.yy, Bh": "dd.MM.yy, h B",
              "d, Bh": "d, h B",
              "E, Bh": "ccc, h B",
              "Ed, Bh": "E, d., h B",
              "Gy, Bh": "y G, h B",
              "GyMd, Bh": "dd.MM.y G, h B",
              "GyMMM, Bh": "MMM y G, h B",
              "GyMMMd, Bh": "d. MMM y G, h B",
              "GyMMMEd, Bh": "E, d. MMM y G, h B",
              "M, Bh": "L, h B",
              "Md, Bh": "d.M., h B",
              "MEd, Bh": "E, d.M., h B",
              "MMd, Bh": "d.MM., h B",
              "MMdd, Bh": "dd.MM., h B",
              "MMM, Bh": "LLL, h B",
              "MMMd, Bh": "d. MMM, h B",
              "MMMEd, Bh": "E, d. MMM, h B",
              "MMMMd, Bh": "d. MMMM, h B",
              "MMMMEd, Bh": "E, d. MMMM, h B",
              "y, Bh": "y, h B",
              "yM, Bh": "M/y, h B",
              "yMd, Bh": "d.M.y, h B",
              "yMEd, Bh": "E, d.M.y, h B",
              "yMM, Bh": "MM.y, h B",
              "yMMdd, Bh": "dd.MM.y, h B",
              "yMMM, Bh": "MMM y, h B",
              "yMMMd, Bh": "d. MMM y, h B",
              "yMMMEd, Bh": "E, d. MMM y, h B",
              "yMMMM, Bh": "MMMM y, h B",
              "EEEE, d. MMMM y, Bhm": "EEEE, d. MMMM y, h:mm B",
              "d. MMMM y, Bhm": "d. MMMM y, h:mm B",
              "dd.MM.y, Bhm": "dd.MM.y, h:mm B",
              "dd.MM.yy, Bhm": "dd.MM.yy, h:mm B",
              "d, Bhm": "d, h:mm B",
              "E, Bhm": "ccc, h:mm B",
              "Ed, Bhm": "E, d., h:mm B",
              "Gy, Bhm": "y G, h:mm B",
              "GyMd, Bhm": "dd.MM.y G, h:mm B",
              "GyMMM, Bhm": "MMM y G, h:mm B",
              "GyMMMd, Bhm": "d. MMM y G, h:mm B",
              "GyMMMEd, Bhm": "E, d. MMM y G, h:mm B",
              "M, Bhm": "L, h:mm B",
              "Md, Bhm": "d.M., h:mm B",
              "MEd, Bhm": "E, d.M., h:mm B",
              "MMd, Bhm": "d.MM., h:mm B",
              "MMdd, Bhm": "dd.MM., h:mm B",
              "MMM, Bhm": "LLL, h:mm B",
              "MMMd, Bhm": "d. MMM, h:mm B",
              "MMMEd, Bhm": "E, d. MMM, h:mm B",
              "MMMMd, Bhm": "d. MMMM, h:mm B",
              "MMMMEd, Bhm": "E, d. MMMM, h:mm B",
              "y, Bhm": "y, h:mm B",
              "yM, Bhm": "M/y, h:mm B",
              "yMd, Bhm": "d.M.y, h:mm B",
              "yMEd, Bhm": "E, d.M.y, h:mm B",
              "yMM, Bhm": "MM.y, h:mm B",
              "yMMdd, Bhm": "dd.MM.y, h:mm B",
              "yMMM, Bhm": "MMM y, h:mm B",
              "yMMMd, Bhm": "d. MMM y, h:mm B",
              "yMMMEd, Bhm": "E, d. MMM y, h:mm B",
              "yMMMM, Bhm": "MMMM y, h:mm B",
              "EEEE, d. MMMM y, Bhms": "EEEE, d. MMMM y, h:mm:ss B",
              "d. MMMM y, Bhms": "d. MMMM y, h:mm:ss B",
              "dd.MM.y, Bhms": "dd.MM.y, h:mm:ss B",
              "dd.MM.yy, Bhms": "dd.MM.yy, h:mm:ss B",
              "d, Bhms": "d, h:mm:ss B",
              "E, Bhms": "ccc, h:mm:ss B",
              "Ed, Bhms": "E, d., h:mm:ss B",
              "Gy, Bhms": "y G, h:mm:ss B",
              "GyMd, Bhms": "dd.MM.y G, h:mm:ss B",
              "GyMMM, Bhms": "MMM y G, h:mm:ss B",
              "GyMMMd, Bhms": "d. MMM y G, h:mm:ss B",
              "GyMMMEd, Bhms": "E, d. MMM y G, h:mm:ss B",
              "M, Bhms": "L, h:mm:ss B",
              "Md, Bhms": "d.M., h:mm:ss B",
              "MEd, Bhms": "E, d.M., h:mm:ss B",
              "MMd, Bhms": "d.MM., h:mm:ss B",
              "MMdd, Bhms": "dd.MM., h:mm:ss B",
              "MMM, Bhms": "LLL, h:mm:ss B",
              "MMMd, Bhms": "d. MMM, h:mm:ss B",
              "MMMEd, Bhms": "E, d. MMM, h:mm:ss B",
              "MMMMd, Bhms": "d. MMMM, h:mm:ss B",
              "MMMMEd, Bhms": "E, d. MMMM, h:mm:ss B",
              "y, Bhms": "y, h:mm:ss B",
              "yM, Bhms": "M/y, h:mm:ss B",
              "yMd, Bhms": "d.M.y, h:mm:ss B",
              "yMEd, Bhms": "E, d.M.y, h:mm:ss B",
              "yMM, Bhms": "MM.y, h:mm:ss B",
              "yMMdd, Bhms": "dd.MM.y, h:mm:ss B",
              "yMMM, Bhms": "MMM y, h:mm:ss B",
              "yMMMd, Bhms": "d. MMM y, h:mm:ss B",
              "yMMMEd, Bhms": "E, d. MMM y, h:mm:ss B",
              "yMMMM, Bhms": "MMMM y, h:mm:ss B",
              "EEEE, d. MMMM y, h": "EEEE, d. MMMM y, h 'Uhr' a",
              "d. MMMM y, h": "d. MMMM y, h 'Uhr' a",
              "dd.MM.y, h": "dd.MM.y, h 'Uhr' a",
              "dd.MM.yy, h": "dd.MM.yy, h 'Uhr' a",
              "d, h": "d, h 'Uhr' a",
              "E, h": "ccc, h 'Uhr' a",
              "Ed, h": "E, d., h 'Uhr' a",
              "Gy, h": "y G, h 'Uhr' a",
              "GyMd, h": "dd.MM.y G, h 'Uhr' a",
              "GyMMM, h": "MMM y G, h 'Uhr' a",
              "GyMMMd, h": "d. MMM y G, h 'Uhr' a",
              "GyMMMEd, h": "E, d. MMM y G, h 'Uhr' a",
              "M, h": "L, h 'Uhr' a",
              "Md, h": "d.M., h 'Uhr' a",
              "MEd, h": "E, d.M., h 'Uhr' a",
              "MMd, h": "d.MM., h 'Uhr' a",
              "MMdd, h": "dd.MM., h 'Uhr' a",
              "MMM, h": "LLL, h 'Uhr' a",
              "MMMd, h": "d. MMM, h 'Uhr' a",
              "MMMEd, h": "E, d. MMM, h 'Uhr' a",
              "MMMMd, h": "d. MMMM, h 'Uhr' a",
              "MMMMEd, h": "E, d. MMMM, h 'Uhr' a",
              "y, h": "y, h 'Uhr' a",
              "yM, h": "M/y, h 'Uhr' a",
              "yMd, h": "d.M.y, h 'Uhr' a",
              "yMEd, h": "E, d.M.y, h 'Uhr' a",
              "yMM, h": "MM.y, h 'Uhr' a",
              "yMMdd, h": "dd.MM.y, h 'Uhr' a",
              "yMMM, h": "MMM y, h 'Uhr' a",
              "yMMMd, h": "d. MMM y, h 'Uhr' a",
              "yMMMEd, h": "E, d. MMM y, h 'Uhr' a",
              "yMMMM, h": "MMMM y, h 'Uhr' a",
              "EEEE, d. MMMM y, H": "EEEE, d. MMMM y, HH 'Uhr'",
              "d. MMMM y, H": "d. MMMM y, HH 'Uhr'",
              "dd.MM.y, H": "dd.MM.y, HH 'Uhr'",
              "dd.MM.yy, H": "dd.MM.yy, HH 'Uhr'",
              "d, H": "d, HH 'Uhr'",
              "E, H": "ccc, HH 'Uhr'",
              "Ed, H": "E, d., HH 'Uhr'",
              "Gy, H": "y G, HH 'Uhr'",
              "GyMd, H": "dd.MM.y G, HH 'Uhr'",
              "GyMMM, H": "MMM y G, HH 'Uhr'",
              "GyMMMd, H": "d. MMM y G, HH 'Uhr'",
              "GyMMMEd, H": "E, d. MMM y G, HH 'Uhr'",
              "M, H": "L, HH 'Uhr'",
              "Md, H": "d.M., HH 'Uhr'",
              "MEd, H": "E, d.M., HH 'Uhr'",
              "MMd, H": "d.MM., HH 'Uhr'",
              "MMdd, H": "dd.MM., HH 'Uhr'",
              "MMM, H": "LLL, HH 'Uhr'",
              "MMMd, H": "d. MMM, HH 'Uhr'",
              "MMMEd, H": "E, d. MMM, HH 'Uhr'",
              "MMMMd, H": "d. MMMM, HH 'Uhr'",
              "MMMMEd, H": "E, d. MMMM, HH 'Uhr'",
              "y, H": "y, HH 'Uhr'",
              "yM, H": "M/y, HH 'Uhr'",
              "yMd, H": "d.M.y, HH 'Uhr'",
              "yMEd, H": "E, d.M.y, HH 'Uhr'",
              "yMM, H": "MM.y, HH 'Uhr'",
              "yMMdd, H": "dd.MM.y, HH 'Uhr'",
              "yMMM, H": "MMM y, HH 'Uhr'",
              "yMMMd, H": "d. MMM y, HH 'Uhr'",
              "yMMMEd, H": "E, d. MMM y, HH 'Uhr'",
              "yMMMM, H": "MMMM y, HH 'Uhr'",
              "EEEE, d. MMMM y, hm": "EEEE, d. MMMM y, h:mm a",
              "d. MMMM y, hm": "d. MMMM y, h:mm a",
              "dd.MM.y, hm": "dd.MM.y, h:mm a",
              "dd.MM.yy, hm": "dd.MM.yy, h:mm a",
              "d, hm": "d, h:mm a",
              "E, hm": "ccc, h:mm a",
              "Ed, hm": "E, d., h:mm a",
              "Gy, hm": "y G, h:mm a",
              "GyMd, hm": "dd.MM.y G, h:mm a",
              "GyMMM, hm": "MMM y G, h:mm a",
              "GyMMMd, hm": "d. MMM y G, h:mm a",
              "GyMMMEd, hm": "E, d. MMM y G, h:mm a",
              "M, hm": "L, h:mm a",
              "Md, hm": "d.M., h:mm a",
              "MEd, hm": "E, d.M., h:mm a",
              "MMd, hm": "d.MM., h:mm a",
              "MMdd, hm": "dd.MM., h:mm a",
              "MMM, hm": "LLL, h:mm a",
              "MMMd, hm": "d. MMM, h:mm a",
              "MMMEd, hm": "E, d. MMM, h:mm a",
              "MMMMd, hm": "d. MMMM, h:mm a",
              "MMMMEd, hm": "E, d. MMMM, h:mm a",
              "y, hm": "y, h:mm a",
              "yM, hm": "M/y, h:mm a",
              "yMd, hm": "d.M.y, h:mm a",
              "yMEd, hm": "E, d.M.y, h:mm a",
              "yMM, hm": "MM.y, h:mm a",
              "yMMdd, hm": "dd.MM.y, h:mm a",
              "yMMM, hm": "MMM y, h:mm a",
              "yMMMd, hm": "d. MMM y, h:mm a",
              "yMMMEd, hm": "E, d. MMM y, h:mm a",
              "yMMMM, hm": "MMMM y, h:mm a",
              "EEEE, d. MMMM y, Hm": "EEEE, d. MMMM y, HH:mm",
              "d. MMMM y, Hm": "d. MMMM y, HH:mm",
              "dd.MM.y, Hm": "dd.MM.y, HH:mm",
              "dd.MM.yy, Hm": "dd.MM.yy, HH:mm",
              "d, Hm": "d, HH:mm",
              "E, Hm": "ccc, HH:mm",
              "Ed, Hm": "E, d., HH:mm",
              "Gy, Hm": "y G, HH:mm",
              "GyMd, Hm": "dd.MM.y G, HH:mm",
              "GyMMM, Hm": "MMM y G, HH:mm",
              "GyMMMd, Hm": "d. MMM y G, HH:mm",
              "GyMMMEd, Hm": "E, d. MMM y G, HH:mm",
              "M, Hm": "L, HH:mm",
              "Md, Hm": "d.M., HH:mm",
              "MEd, Hm": "E, d.M., HH:mm",
              "MMd, Hm": "d.MM., HH:mm",
              "MMdd, Hm": "dd.MM., HH:mm",
              "MMM, Hm": "LLL, HH:mm",
              "MMMd, Hm": "d. MMM, HH:mm",
              "MMMEd, Hm": "E, d. MMM, HH:mm",
              "MMMMd, Hm": "d. MMMM, HH:mm",
              "MMMMEd, Hm": "E, d. MMMM, HH:mm",
              "y, Hm": "y, HH:mm",
              "yM, Hm": "M/y, HH:mm",
              "yMd, Hm": "d.M.y, HH:mm",
              "yMEd, Hm": "E, d.M.y, HH:mm",
              "yMM, Hm": "MM.y, HH:mm",
              "yMMdd, Hm": "dd.MM.y, HH:mm",
              "yMMM, Hm": "MMM y, HH:mm",
              "yMMMd, Hm": "d. MMM y, HH:mm",
              "yMMMEd, Hm": "E, d. MMM y, HH:mm",
              "yMMMM, Hm": "MMMM y, HH:mm",
              "EEEE, d. MMMM y, hms": "EEEE, d. MMMM y, h:mm:ss a",
              "d. MMMM y, hms": "d. MMMM y, h:mm:ss a",
              "dd.MM.y, hms": "dd.MM.y, h:mm:ss a",
              "dd.MM.yy, hms": "dd.MM.yy, h:mm:ss a",
              "d, hms": "d, h:mm:ss a",
              "E, hms": "ccc, h:mm:ss a",
              "Ed, hms": "E, d., h:mm:ss a",
              "Gy, hms": "y G, h:mm:ss a",
              "GyMd, hms": "dd.MM.y G, h:mm:ss a",
              "GyMMM, hms": "MMM y G, h:mm:ss a",
              "GyMMMd, hms": "d. MMM y G, h:mm:ss a",
              "GyMMMEd, hms": "E, d. MMM y G, h:mm:ss a",
              "M, hms": "L, h:mm:ss a",
              "Md, hms": "d.M., h:mm:ss a",
              "MEd, hms": "E, d.M., h:mm:ss a",
              "MMd, hms": "d.MM., h:mm:ss a",
              "MMdd, hms": "dd.MM., h:mm:ss a",
              "MMM, hms": "LLL, h:mm:ss a",
              "MMMd, hms": "d. MMM, h:mm:ss a",
              "MMMEd, hms": "E, d. MMM, h:mm:ss a",
              "MMMMd, hms": "d. MMMM, h:mm:ss a",
              "MMMMEd, hms": "E, d. MMMM, h:mm:ss a",
              "y, hms": "y, h:mm:ss a",
              "yM, hms": "M/y, h:mm:ss a",
              "yMd, hms": "d.M.y, h:mm:ss a",
              "yMEd, hms": "E, d.M.y, h:mm:ss a",
              "yMM, hms": "MM.y, h:mm:ss a",
              "yMMdd, hms": "dd.MM.y, h:mm:ss a",
              "yMMM, hms": "MMM y, h:mm:ss a",
              "yMMMd, hms": "d. MMM y, h:mm:ss a",
              "yMMMEd, hms": "E, d. MMM y, h:mm:ss a",
              "yMMMM, hms": "MMMM y, h:mm:ss a",
              "EEEE, d. MMMM y, Hms": "EEEE, d. MMMM y, HH:mm:ss",
              "d. MMMM y, Hms": "d. MMMM y, HH:mm:ss",
              "dd.MM.y, Hms": "dd.MM.y, HH:mm:ss",
              "dd.MM.yy, Hms": "dd.MM.yy, HH:mm:ss",
              "d, Hms": "d, HH:mm:ss",
              "E, Hms": "ccc, HH:mm:ss",
              "Ed, Hms": "E, d., HH:mm:ss",
              "Gy, Hms": "y G, HH:mm:ss",
              "GyMd, Hms": "dd.MM.y G, HH:mm:ss",
              "GyMMM, Hms": "MMM y G, HH:mm:ss",
              "GyMMMd, Hms": "d. MMM y G, HH:mm:ss",
              "GyMMMEd, Hms": "E, d. MMM y G, HH:mm:ss",
              "M, Hms": "L, HH:mm:ss",
              "Md, Hms": "d.M., HH:mm:ss",
              "MEd, Hms": "E, d.M., HH:mm:ss",
              "MMd, Hms": "d.MM., HH:mm:ss",
              "MMdd, Hms": "dd.MM., HH:mm:ss",
              "MMM, Hms": "LLL, HH:mm:ss",
              "MMMd, Hms": "d. MMM, HH:mm:ss",
              "MMMEd, Hms": "E, d. MMM, HH:mm:ss",
              "MMMMd, Hms": "d. MMMM, HH:mm:ss",
              "MMMMEd, Hms": "E, d. MMMM, HH:mm:ss",
              "y, Hms": "y, HH:mm:ss",
              "yM, Hms": "M/y, HH:mm:ss",
              "yMd, Hms": "d.M.y, HH:mm:ss",
              "yMEd, Hms": "E, d.M.y, HH:mm:ss",
              "yMM, Hms": "MM.y, HH:mm:ss",
              "yMMdd, Hms": "dd.MM.y, HH:mm:ss",
              "yMMM, Hms": "MMM y, HH:mm:ss",
              "yMMMd, Hms": "d. MMM y, HH:mm:ss",
              "yMMMEd, Hms": "E, d. MMM y, HH:mm:ss",
              "yMMMM, Hms": "MMMM y, HH:mm:ss",
              "EEEE, d. MMMM y, hmsv": "EEEE, d. MMMM y, h:mm:ss a v",
              "d. MMMM y, hmsv": "d. MMMM y, h:mm:ss a v",
              "dd.MM.y, hmsv": "dd.MM.y, h:mm:ss a v",
              "dd.MM.yy, hmsv": "dd.MM.yy, h:mm:ss a v",
              "d, hmsv": "d, h:mm:ss a v",
              "E, hmsv": "ccc, h:mm:ss a v",
              "Ed, hmsv": "E, d., h:mm:ss a v",
              "Gy, hmsv": "y G, h:mm:ss a v",
              "GyMd, hmsv": "dd.MM.y G, h:mm:ss a v",
              "GyMMM, hmsv": "MMM y G, h:mm:ss a v",
              "GyMMMd, hmsv": "d. MMM y G, h:mm:ss a v",
              "GyMMMEd, hmsv": "E, d. MMM y G, h:mm:ss a v",
              "M, hmsv": "L, h:mm:ss a v",
              "Md, hmsv": "d.M., h:mm:ss a v",
              "MEd, hmsv": "E, d.M., h:mm:ss a v",
              "MMd, hmsv": "d.MM., h:mm:ss a v",
              "MMdd, hmsv": "dd.MM., h:mm:ss a v",
              "MMM, hmsv": "LLL, h:mm:ss a v",
              "MMMd, hmsv": "d. MMM, h:mm:ss a v",
              "MMMEd, hmsv": "E, d. MMM, h:mm:ss a v",
              "MMMMd, hmsv": "d. MMMM, h:mm:ss a v",
              "MMMMEd, hmsv": "E, d. MMMM, h:mm:ss a v",
              "y, hmsv": "y, h:mm:ss a v",
              "yM, hmsv": "M/y, h:mm:ss a v",
              "yMd, hmsv": "d.M.y, h:mm:ss a v",
              "yMEd, hmsv": "E, d.M.y, h:mm:ss a v",
              "yMM, hmsv": "MM.y, h:mm:ss a v",
              "yMMdd, hmsv": "dd.MM.y, h:mm:ss a v",
              "yMMM, hmsv": "MMM y, h:mm:ss a v",
              "yMMMd, hmsv": "d. MMM y, h:mm:ss a v",
              "yMMMEd, hmsv": "E, d. MMM y, h:mm:ss a v",
              "yMMMM, hmsv": "MMMM y, h:mm:ss a v",
              "EEEE, d. MMMM y, Hmsv": "EEEE, d. MMMM y, HH:mm:ss v",
              "d. MMMM y, Hmsv": "d. MMMM y, HH:mm:ss v",
              "dd.MM.y, Hmsv": "dd.MM.y, HH:mm:ss v",
              "dd.MM.yy, Hmsv": "dd.MM.yy, HH:mm:ss v",
              "d, Hmsv": "d, HH:mm:ss v",
              "E, Hmsv": "ccc, HH:mm:ss v",
              "Ed, Hmsv": "E, d., HH:mm:ss v",
              "Gy, Hmsv": "y G, HH:mm:ss v",
              "GyMd, Hmsv": "dd.MM.y G, HH:mm:ss v",
              "GyMMM, Hmsv": "MMM y G, HH:mm:ss v",
              "GyMMMd, Hmsv": "d. MMM y G, HH:mm:ss v",
              "GyMMMEd, Hmsv": "E, d. MMM y G, HH:mm:ss v",
              "M, Hmsv": "L, HH:mm:ss v",
              "Md, Hmsv": "d.M., HH:mm:ss v",
              "MEd, Hmsv": "E, d.M., HH:mm:ss v",
              "MMd, Hmsv": "d.MM., HH:mm:ss v",
              "MMdd, Hmsv": "dd.MM., HH:mm:ss v",
              "MMM, Hmsv": "LLL, HH:mm:ss v",
              "MMMd, Hmsv": "d. MMM, HH:mm:ss v",
              "MMMEd, Hmsv": "E, d. MMM, HH:mm:ss v",
              "MMMMd, Hmsv": "d. MMMM, HH:mm:ss v",
              "MMMMEd, Hmsv": "E, d. MMMM, HH:mm:ss v",
              "y, Hmsv": "y, HH:mm:ss v",
              "yM, Hmsv": "M/y, HH:mm:ss v",
              "yMd, Hmsv": "d.M.y, HH:mm:ss v",
              "yMEd, Hmsv": "E, d.M.y, HH:mm:ss v",
              "yMM, Hmsv": "MM.y, HH:mm:ss v",
              "yMMdd, Hmsv": "dd.MM.y, HH:mm:ss v",
              "yMMM, Hmsv": "MMM y, HH:mm:ss v",
              "yMMMd, Hmsv": "d. MMM y, HH:mm:ss v",
              "yMMMEd, Hmsv": "E, d. MMM y, HH:mm:ss v",
              "yMMMM, Hmsv": "MMMM y, HH:mm:ss v",
              "EEEE, d. MMMM y, hmv": "EEEE, d. MMMM y, h:mm a v",
              "d. MMMM y, hmv": "d. MMMM y, h:mm a v",
              "dd.MM.y, hmv": "dd.MM.y, h:mm a v",
              "dd.MM.yy, hmv": "dd.MM.yy, h:mm a v",
              "d, hmv": "d, h:mm a v",
              "E, hmv": "ccc, h:mm a v",
              "Ed, hmv": "E, d., h:mm a v",
              "Gy, hmv": "y G, h:mm a v",
              "GyMd, hmv": "dd.MM.y G, h:mm a v",
              "GyMMM, hmv": "MMM y G, h:mm a v",
              "GyMMMd, hmv": "d. MMM y G, h:mm a v",
              "GyMMMEd, hmv": "E, d. MMM y G, h:mm a v",
              "M, hmv": "L, h:mm a v",
              "Md, hmv": "d.M., h:mm a v",
              "MEd, hmv": "E, d.M., h:mm a v",
              "MMd, hmv": "d.MM., h:mm a v",
              "MMdd, hmv": "dd.MM., h:mm a v",
              "MMM, hmv": "LLL, h:mm a v",
              "MMMd, hmv": "d. MMM, h:mm a v",
              "MMMEd, hmv": "E, d. MMM, h:mm a v",
              "MMMMd, hmv": "d. MMMM, h:mm a v",
              "MMMMEd, hmv": "E, d. MMMM, h:mm a v",
              "y, hmv": "y, h:mm a v",
              "yM, hmv": "M/y, h:mm a v",
              "yMd, hmv": "d.M.y, h:mm a v",
              "yMEd, hmv": "E, d.M.y, h:mm a v",
              "yMM, hmv": "MM.y, h:mm a v",
              "yMMdd, hmv": "dd.MM.y, h:mm a v",
              "yMMM, hmv": "MMM y, h:mm a v",
              "yMMMd, hmv": "d. MMM y, h:mm a v",
              "yMMMEd, hmv": "E, d. MMM y, h:mm a v",
              "yMMMM, hmv": "MMMM y, h:mm a v",
              "EEEE, d. MMMM y, Hmv": "EEEE, d. MMMM y, HH:mm v",
              "d. MMMM y, Hmv": "d. MMMM y, HH:mm v",
              "dd.MM.y, Hmv": "dd.MM.y, HH:mm v",
              "dd.MM.yy, Hmv": "dd.MM.yy, HH:mm v",
              "d, Hmv": "d, HH:mm v",
              "E, Hmv": "ccc, HH:mm v",
              "Ed, Hmv": "E, d., HH:mm v",
              "Gy, Hmv": "y G, HH:mm v",
              "GyMd, Hmv": "dd.MM.y G, HH:mm v",
              "GyMMM, Hmv": "MMM y G, HH:mm v",
              "GyMMMd, Hmv": "d. MMM y G, HH:mm v",
              "GyMMMEd, Hmv": "E, d. MMM y G, HH:mm v",
              "M, Hmv": "L, HH:mm v",
              "Md, Hmv": "d.M., HH:mm v",
              "MEd, Hmv": "E, d.M., HH:mm v",
              "MMd, Hmv": "d.MM., HH:mm v",
              "MMdd, Hmv": "dd.MM., HH:mm v",
              "MMM, Hmv": "LLL, HH:mm v",
              "MMMd, Hmv": "d. MMM, HH:mm v",
              "MMMEd, Hmv": "E, d. MMM, HH:mm v",
              "MMMMd, Hmv": "d. MMMM, HH:mm v",
              "MMMMEd, Hmv": "E, d. MMMM, HH:mm v",
              "y, Hmv": "y, HH:mm v",
              "yM, Hmv": "M/y, HH:mm v",
              "yMd, Hmv": "d.M.y, HH:mm v",
              "yMEd, Hmv": "E, d.M.y, HH:mm v",
              "yMM, Hmv": "MM.y, HH:mm v",
              "yMMdd, Hmv": "dd.MM.y, HH:mm v",
              "yMMM, Hmv": "MMM y, HH:mm v",
              "yMMMd, Hmv": "d. MMM y, HH:mm v",
              "yMMMEd, Hmv": "E, d. MMM y, HH:mm v",
              "yMMMM, Hmv": "MMMM y, HH:mm v",
              "EEEE, d. MMMM y, ms": "EEEE, d. MMMM y, mm:ss",
              "d. MMMM y, ms": "d. MMMM y, mm:ss",
              "dd.MM.y, ms": "dd.MM.y, mm:ss",
              "dd.MM.yy, ms": "dd.MM.yy, mm:ss",
              "d, ms": "d, mm:ss",
              "E, ms": "ccc, mm:ss",
              "Ed, ms": "E, d., mm:ss",
              "Gy, ms": "y G, mm:ss",
              "GyMd, ms": "dd.MM.y G, mm:ss",
              "GyMMM, ms": "MMM y G, mm:ss",
              "GyMMMd, ms": "d. MMM y G, mm:ss",
              "GyMMMEd, ms": "E, d. MMM y G, mm:ss",
              "M, ms": "L, mm:ss",
              "Md, ms": "d.M., mm:ss",
              "MEd, ms": "E, d.M., mm:ss",
              "MMd, ms": "d.MM., mm:ss",
              "MMdd, ms": "dd.MM., mm:ss",
              "MMM, ms": "LLL, mm:ss",
              "MMMd, ms": "d. MMM, mm:ss",
              "MMMEd, ms": "E, d. MMM, mm:ss",
              "MMMMd, ms": "d. MMMM, mm:ss",
              "MMMMEd, ms": "E, d. MMMM, mm:ss",
              "y, ms": "y, mm:ss",
              "yM, ms": "M/y, mm:ss",
              "yMd, ms": "d.M.y, mm:ss",
              "yMEd, ms": "E, d.M.y, mm:ss",
              "yMM, ms": "MM.y, mm:ss",
              "yMMdd, ms": "dd.MM.y, mm:ss",
              "yMMM, ms": "MMM y, mm:ss",
              "yMMMd, ms": "d. MMM y, mm:ss",
              "yMMMEd, ms": "E, d. MMM y, mm:ss",
              "yMMMM, ms": "MMMM y, mm:ss"
            }
          },
          intervalFormats: {
            intervalFormatFallback: "{0} – {1}",
            Bh: {
              B: "h 'Uhr' B – h 'Uhr' B",
              h: "h–h 'Uhr' B"
            },
            Bhm: {
              B: "h:mm 'Uhr' B – h:mm 'Uhr' B",
              h: "h:mm – h:mm 'Uhr' B",
              m: "h:mm – h:mm 'Uhr' B"
            },
            d: {
              d: "d.–d."
            },
            Gy: {
              G: "y G – y G",
              y: "y–y G"
            },
            GyM: {
              G: "MM/y G – MM/y G",
              M: "MM/y – MM/y G",
              y: "MM/y – MM/y G"
            },
            GyMd: {
              d: "dd.–dd.MM.y G",
              G: "dd.MM.y G – dd.MM.y G",
              M: "dd.MM. – dd.MM.y G",
              y: "dd.MM.y – dd.MM.y G"
            },
            GyMEd: {
              d: "E, dd.MM.y – E, dd.MM.y G",
              G: "E, dd.MM.y G – E, dd.MM.y G",
              M: "E, dd.MM. – E, dd.MM.y G",
              y: "E, dd.MM.y – E, dd.MM.y G"
            },
            GyMMM: {
              G: "MMM y G – MMM y G",
              M: "MMM–MMM y G",
              y: "MMM y – MMM y G"
            },
            GyMMMd: {
              d: "d.–d. MMM y G",
              G: "d. MMM y G – d. MMM y G",
              M: "d. MMM – d. MMM y G",
              y: "d. MMM y – d. MMM y G"
            },
            GyMMMEd: {
              d: "E, d. – E, d. MMM y G",
              G: "E, d. MMM y G – E E, d. MMM y G",
              M: "E, d. MMM – E, d. MMM y G",
              y: "E, d. MMM y – E, d. MMM y G"
            },
            h: {
              a: "h 'Uhr' a – h 'Uhr' a",
              h: "h – h 'Uhr' a"
            },
            H: {
              H: "HH–HH 'Uhr'"
            },
            hm: {
              a: "h:mm a – h:mm a",
              h: "h:mm–h:mm a",
              m: "h:mm–h:mm a"
            },
            Hm: {
              H: "HH:mm–HH:mm 'Uhr'",
              m: "HH:mm–HH:mm 'Uhr'"
            },
            hmv: {
              a: "h:mm a – h:mm a v",
              h: "h:mm–h:mm a v",
              m: "h:mm–h:mm a v"
            },
            Hmv: {
              H: "HH:mm–HH:mm 'Uhr' v",
              m: "HH:mm–HH:mm 'Uhr' v"
            },
            hv: {
              a: "h a – h a v",
              h: "h–h a v"
            },
            Hv: {
              H: "HH–HH 'Uhr' v"
            },
            M: {
              M: "MM–MM"
            },
            Md: {
              d: "dd.–dd.MM.",
              M: "dd.MM. – dd.MM."
            },
            MEd: {
              d: "E, dd. – E, dd.MM.",
              M: "E, dd.MM. – E, dd.MM."
            },
            MMM: {
              M: "MMM–MMM"
            },
            MMMd: {
              d: "d.–d. MMM",
              M: "d. MMM – d. MMM"
            },
            MMMEd: {
              d: "E, d. – E, d. MMM",
              M: "E, d. MMM – E, d. MMM"
            },
            MMMM: {
              M: "LLLL–LLLL"
            },
            y: {
              y: "y–y"
            },
            yM: {
              M: "M/y – M/y",
              y: "M/y – M/y"
            },
            yMd: {
              d: "dd.–dd.MM.y",
              M: "dd.MM. – dd.MM.y",
              y: "dd.MM.y – dd.MM.y"
            },
            yMEd: {
              d: "E, dd. – E, dd.MM.y",
              M: "E, dd.MM. – E, dd.MM.y",
              y: "E, dd.MM.y – E, dd.MM.y"
            },
            yMMM: {
              M: "MMM–MMM y",
              y: "MMM y – MMM y"
            },
            yMMMd: {
              d: "d.–d. MMM y",
              M: "d. MMM – d. MMM y",
              y: "d. MMM y – d. MMM y"
            },
            yMMMEd: {
              d: "E, d. – E, d. MMM y",
              M: "E, d. MMM – E, d. MMM y",
              y: "E, d. MMM y – E, d. MMM y"
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
        locale: "de"
      })
    }
  }
]);