try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    M = (new e.Error).stack;
  M && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[M] = "e06fff40-4be9-432f-9ae7-703d92d146e9", e._sentryDebugIdIdentifier = "sentry-dbid-e06fff40-4be9-432f-9ae7-703d92d146e9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7010], {
    52974: () => {
      Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
        data: {
          am: "AM",
          pm: "PM",
          weekday: {
            narrow: ["D", "L", "M", "M", "J", "V", "S"],
            short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
          },
          era: {
            narrow: {
              BC: "av. J.-C.",
              AD: "ap. J.-C."
            },
            short: {
              BC: "av. J.-C.",
              AD: "ap. J.-C."
            },
            long: {
              BC: "avant Jésus-Christ",
              AD: "après Jésus-Christ"
            }
          },
          month: {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            short: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            long: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
          },
          timeZoneName: {
            "America/Rio_Branco": {
              long: ["heure normale de l’Acre", "heure d’été de l’Acre"]
            },
            "Asia/Kabul": {
              long: ["heure de l’Afghanistan", "heure de l’Afghanistan"]
            },
            "Africa/Maputo": {
              long: ["heure normale d’Afrique centrale", "heure normale d’Afrique centrale"]
            },
            "Africa/Bujumbura": {
              long: ["heure normale d’Afrique centrale", "heure normale d’Afrique centrale"]
            },
            "Africa/Gaborone": {
              long: ["heure normale d’Afrique centrale", "heure normale d’Afrique centrale"]
            },
            "Africa/Lubumbashi": {
              long: ["heure normale d’Afrique centrale", "heure normale d’Afrique centrale"]
            },
            "Africa/Blantyre": {
              long: ["heure normale d’Afrique centrale", "heure normale d’Afrique centrale"]
            },
            "Africa/Kigali": {
              long: ["heure normale d’Afrique centrale", "heure normale d’Afrique centrale"]
            },
            "Africa/Lusaka": {
              long: ["heure normale d’Afrique centrale", "heure normale d’Afrique centrale"]
            },
            "Africa/Harare": {
              long: ["heure normale d’Afrique centrale", "heure normale d’Afrique centrale"]
            },
            "Africa/Nairobi": {
              long: ["heure normale d’Afrique de l’Est", "heure normale d’Afrique de l’Est"]
            },
            "Africa/Djibouti": {
              long: ["heure normale d’Afrique de l’Est", "heure normale d’Afrique de l’Est"]
            },
            "Africa/Asmera": {
              long: ["heure normale d’Afrique de l’Est", "heure normale d’Afrique de l’Est"]
            },
            "Africa/Addis_Ababa": {
              long: ["heure normale d’Afrique de l’Est", "heure normale d’Afrique de l’Est"]
            },
            "Indian/Comoro": {
              long: ["heure normale d’Afrique de l’Est", "heure normale d’Afrique de l’Est"]
            },
            "Indian/Antananarivo": {
              long: ["heure normale d’Afrique de l’Est", "heure normale d’Afrique de l’Est"]
            },
            "Africa/Mogadishu": {
              long: ["heure normale d’Afrique de l’Est", "heure normale d’Afrique de l’Est"]
            },
            "Africa/Dar_es_Salaam": {
              long: ["heure normale d’Afrique de l’Est", "heure normale d’Afrique de l’Est"]
            },
            "Africa/Kampala": {
              long: ["heure normale d’Afrique de l’Est", "heure normale d’Afrique de l’Est"]
            },
            "Indian/Mayotte": {
              long: ["heure normale d’Afrique de l’Est", "heure normale d’Afrique de l’Est"]
            },
            "Africa/Johannesburg": {
              long: ["heure normale d’Afrique méridionale", "heure normale d’Afrique méridionale"]
            },
            "Africa/Maseru": {
              long: ["heure normale d’Afrique méridionale", "heure normale d’Afrique méridionale"]
            },
            "Africa/Mbabane": {
              long: ["heure normale d’Afrique méridionale", "heure normale d’Afrique méridionale"]
            },
            "Africa/Lagos": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Africa/Luanda": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Africa/Porto-Novo": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Africa/Kinshasa": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Africa/Bangui": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Africa/Brazzaville": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Africa/Douala": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Africa/Libreville": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Africa/Malabo": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Africa/Niamey": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Africa/Ndjamena": {
              long: ["heure normale d’Afrique de l’Ouest", "heure d’été d’Afrique de l’Ouest"]
            },
            "Asia/Aqtobe": {
              long: ["heure de l’Ouest du Kazakhstan", "heure de l’Ouest du Kazakhstan"]
            },
            "America/Juneau": {
              long: ["heure normale de l’Alaska", "heure d’été de l’Alaska"]
            },
            "Asia/Almaty": {
              long: ["heure de l’Est du Kazakhstan", "heure de l’Est du Kazakhstan"]
            },
            "America/Manaus": {
              long: ["heure normale de l’Amazonie", "heure d’été de l’Amazonie"]
            },
            "America/Chicago": {
              long: ["heure normale du centre nord-américain", "heure d’été du centre nord-américain"]
            },
            "America/Belize": {
              long: ["heure normale du centre nord-américain", "heure d’été du centre nord-américain"]
            },
            "America/Winnipeg": {
              long: ["heure normale du centre nord-américain", "heure d’été du centre nord-américain"]
            },
            "America/Costa_Rica": {
              long: ["heure normale du centre nord-américain", "heure d’été du centre nord-américain"]
            },
            "America/Guatemala": {
              long: ["heure normale du centre nord-américain", "heure d’été du centre nord-américain"]
            },
            "America/Tegucigalpa": {
              long: ["heure normale du centre nord-américain", "heure d’été du centre nord-américain"]
            },
            "America/Mexico_City": {
              long: ["heure normale du centre nord-américain", "heure d’été du centre nord-américain"]
            },
            "America/El_Salvador": {
              long: ["heure normale du centre nord-américain", "heure d’été du centre nord-américain"]
            },
            "America/New_York": {
              long: ["heure normale de l’Est nord-américain", "heure d’été de l’Est nord-américain"]
            },
            "America/Nassau": {
              long: ["heure normale de l’Est nord-américain", "heure d’été de l’Est nord-américain"]
            },
            "America/Toronto": {
              long: ["heure normale de l’Est nord-américain", "heure d’été de l’Est nord-américain"]
            },
            "America/Port-au-Prince": {
              long: ["heure normale de l’Est nord-américain", "heure d’été de l’Est nord-américain"]
            },
            "America/Jamaica": {
              long: ["heure normale de l’Est nord-américain", "heure d’été de l’Est nord-américain"]
            },
            "America/Cayman": {
              long: ["heure normale de l’Est nord-américain", "heure d’été de l’Est nord-américain"]
            },
            "America/Panama": {
              long: ["heure normale de l’Est nord-américain", "heure d’été de l’Est nord-américain"]
            },
            "America/Denver": {
              long: ["heure normale des Rocheuses", "heure d’été des Rocheuses"]
            },
            "America/Edmonton": {
              long: ["heure normale des Rocheuses", "heure d’été des Rocheuses"]
            },
            "America/Los_Angeles": {
              long: ["heure normale du Pacifique nord-américain", "heure d’été du Pacifique nord-américain"]
            },
            "America/Vancouver": {
              long: ["heure normale du Pacifique nord-américain", "heure d’été du Pacifique nord-américain"]
            },
            "America/Tijuana": {
              long: ["heure normale du Pacifique nord-américain", "heure d’été du Pacifique nord-américain"]
            },
            "Asia/Anadyr": {
              long: ["heure normale d’Anadyr", "heure d’été d’Anadyr"]
            },
            "Pacific/Apia": {
              long: ["heure normale d’Apia", "heure d’été d’Apia"]
            },
            "Asia/Riyadh": {
              long: ["heure normale de l’Arabie", "heure d’été de l’Arabie"]
            },
            "Asia/Bahrain": {
              long: ["heure normale de l’Arabie", "heure d’été de l’Arabie"]
            },
            "Asia/Baghdad": {
              long: ["heure normale de l’Arabie", "heure d’été de l’Arabie"]
            },
            "Asia/Kuwait": {
              long: ["heure normale de l’Arabie", "heure d’été de l’Arabie"]
            },
            "Asia/Qatar": {
              long: ["heure normale de l’Arabie", "heure d’été de l’Arabie"]
            },
            "Asia/Aden": {
              long: ["heure normale de l’Arabie", "heure d’été de l’Arabie"]
            },
            "America/Buenos_Aires": {
              long: ["heure normale d’Argentine", "heure d’été de l’Argentine"]
            },
            "America/Argentina/San_Luis": {
              long: ["heure normale de l’Ouest argentin", "heure d’été de l’Ouest argentin"]
            },
            "Asia/Ashgabat": {
              long: ["heure normale du Turkménistan", "heure d’été du Turkménistan"]
            },
            "America/Halifax": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Antigua": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Anguilla": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Aruba": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Barbados": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "Atlantic/Bermuda": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Kralendijk": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Curacao": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Dominica": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Grenada": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Thule": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Guadeloupe": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/St_Kitts": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/St_Lucia": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Marigot": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Martinique": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Montserrat": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Puerto_Rico": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Lower_Princes": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Port_of_Spain": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/St_Vincent": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/Tortola": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "America/St_Thomas": {
              long: ["heure normale de l’Atlantique", "heure d’été de l’Atlantique"]
            },
            "Australia/Adelaide": {
              long: ["heure normale du centre de l’Australie", "heure d’été du centre de l’Australie"]
            },
            "Australia/Eucla": {
              long: ["heure normale du centre-ouest de l’Australie", "heure d’été du centre-ouest de l’Australie"]
            },
            "Australia/Sydney": {
              long: ["heure normale de l’Est de l’Australie", "heure d’été de l’Est de l’Australie"]
            },
            "Australia/Perth": {
              long: ["heure normale de l’Ouest de l’Australie", "heure d’été de l’Ouest de l’Australie"]
            },
            "Atlantic/Azores": {
              long: ["heure normale des Açores", "heure d’été des Açores"]
            },
            "Asia/Thimphu": {
              long: ["heure du Bhoutan", "heure du Bhoutan"]
            },
            "America/La_Paz": {
              long: ["heure de Bolivie", "heure de Bolivie"]
            },
            "Asia/Kuching": {
              long: ["heure de la Malaisie", "heure de la Malaisie"]
            },
            "America/Sao_Paulo": {
              long: ["heure normale de Brasilia", "heure d’été de Brasilia"]
            },
            "Europe/London": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Asia/Brunei": {
              long: ["heure du Brunei", "heure du Brunei"]
            },
            "Atlantic/Cape_Verde": {
              long: ["heure normale du Cap-Vert", "heure d’été du Cap-Vert"]
            },
            "Pacific/Saipan": {
              long: ["heure des îles Mariannes du Nord", "heure des îles Mariannes du Nord"]
            },
            "Pacific/Guam": {
              long: ["heure de Guam", "heure de Guam"]
            },
            "Pacific/Chatham": {
              long: ["heure normale des îles Chatham", "heure d’été des îles Chatham"]
            },
            "America/Santiago": {
              long: ["heure normale du Chili", "heure d’été du Chili"]
            },
            "Asia/Shanghai": {
              long: ["heure normale de la Chine", "heure d’été de Chine"]
            },
            "Indian/Christmas": {
              long: ["heure de l’île Christmas", "heure de l’île Christmas"]
            },
            "Indian/Cocos": {
              long: ["heure des îles Cocos", "heure des îles Cocos"]
            },
            "America/Bogota": {
              long: ["heure normale de Colombie", "heure d’été de Colombie"]
            },
            "Pacific/Rarotonga": {
              long: ["heure normale des îles Cook", "heure d’été des îles Cook"]
            },
            "America/Havana": {
              long: ["heure normale de Cuba", "heure d’été de Cuba"]
            },
            "Antarctica/Davis": {
              long: ["heure de Davis", "heure de Davis"]
            },
            "Antarctica/DumontDUrville": {
              long: ["heure de Dumont-d’Urville", "heure de Dumont-d’Urville"]
            },
            "Asia/Dushanbe": {
              long: ["heure du Tadjikistan", "heure du Tadjikistan"]
            },
            "America/Paramaribo": {
              long: ["heure du Suriname", "heure du Suriname"]
            },
            "Asia/Dili": {
              long: ["heure du Timor oriental", "heure du Timor oriental"]
            },
            "Pacific/Easter": {
              long: ["heure normale de l’île de Pâques", "heure d’été de l’île de Pâques"]
            },
            "America/Guayaquil": {
              long: ["heure de l’Équateur", "heure de l’Équateur"]
            },
            "Europe/Paris": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Andorra": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Tirane": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Vienna": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Sarajevo": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Brussels": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Zurich": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Prague": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Berlin": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Copenhagen": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Madrid": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Gibraltar": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Zagreb": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Budapest": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Rome": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Vaduz": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Luxembourg": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Monaco": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Podgorica": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Skopje": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Malta": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Amsterdam": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Oslo": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Warsaw": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Belgrade": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Stockholm": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Ljubljana": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Arctic/Longyearbyen": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Bratislava": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/San_Marino": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Africa/Tunis": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Vatican": {
              long: ["heure normale d’Europe centrale", "heure d’été d’Europe centrale"]
            },
            "Europe/Bucharest": {
              long: ["heure normale d’Europe de l’Est", "heure d’été d’Europe de l’Est"]
            },
            "Europe/Mariehamn": {
              long: ["heure normale d’Europe de l’Est", "heure d’été d’Europe de l’Est"]
            },
            "Europe/Sofia": {
              long: ["heure normale d’Europe de l’Est", "heure d’été d’Europe de l’Est"]
            },
            "Asia/Nicosia": {
              long: ["heure normale d’Europe de l’Est", "heure d’été d’Europe de l’Est"]
            },
            "Africa/Cairo": {
              long: ["heure normale d’Europe de l’Est", "heure d’été d’Europe de l’Est"]
            },
            "Europe/Helsinki": {
              long: ["heure normale d’Europe de l’Est", "heure d’été d’Europe de l’Est"]
            },
            "Europe/Athens": {
              long: ["heure normale d’Europe de l’Est", "heure d’été d’Europe de l’Est"]
            },
            "Asia/Beirut": {
              long: ["heure normale d’Europe de l’Est", "heure d’été d’Europe de l’Est"]
            },
            "Europe/Minsk": {
              long: ["heure de Kaliningrad", "heure de Kaliningrad"]
            },
            "Europe/Kaliningrad": {
              long: ["heure de Kaliningrad", "heure de Kaliningrad"]
            },
            "Atlantic/Canary": {
              long: ["heure normale d’Europe de l’Ouest", "heure d’été d’Europe de l’Ouest"]
            },
            "Atlantic/Faeroe": {
              long: ["heure normale d’Europe de l’Ouest", "heure d’été d’Europe de l’Ouest"]
            },
            "Atlantic/Stanley": {
              long: ["heure normale des îles Malouines", "heure d’été des îles Malouines"]
            },
            "Pacific/Fiji": {
              long: ["heure normale des îles Fidji", "heure d’été des îles Fidji"]
            },
            "America/Cayenne": {
              long: ["heure de la Guyane française", "heure de la Guyane française"]
            },
            "Indian/Kerguelen": {
              long: ["heure des Terres australes et antarctiques françaises", "heure des Terres australes et antarctiques françaises"]
            },
            "Asia/Bishkek": {
              long: ["heure du Kirghizistan", "heure du Kirghizistan"]
            },
            "Pacific/Galapagos": {
              long: ["heure des îles Galápagos", "heure des îles Galápagos"]
            },
            "Pacific/Gambier": {
              long: ["heure des îles Gambier", "heure des îles Gambier"]
            },
            "Pacific/Tarawa": {
              long: ["heure des îles Gilbert", "heure des îles Gilbert"]
            },
            "Atlantic/Reykjavik": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Africa/Ouagadougou": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Africa/Abidjan": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Africa/Accra": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Africa/Banjul": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Africa/Conakry": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Africa/Bamako": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Africa/Nouakchott": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Atlantic/St_Helena": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Africa/Freetown": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Africa/Dakar": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "Africa/Lome": {
              long: ["heure moyenne de Greenwich", "heure moyenne de Greenwich"]
            },
            "America/Godthab": {
              long: ["heure normale de l’Ouest du Groenland", "heure d’été de l’Ouest du Groenland"]
            },
            "America/Scoresbysund": {
              long: ["heure normale de l’Est du Groenland", "heure d’été de l’Est du Groenland"]
            },
            "Asia/Dubai": {
              long: ["heure du Golfe", "heure du Golfe"]
            },
            "Asia/Muscat": {
              long: ["heure du Golfe", "heure du Golfe"]
            },
            "America/Guyana": {
              long: ["heure du Guyana", "heure du Guyana"]
            },
            "Pacific/Honolulu": {
              long: ["heure normale d’Hawaï - Aléoutiennes", "heure d’été d’Hawaï - Aléoutiennes"]
            },
            "Asia/Hong_Kong": {
              long: ["heure normale de Hong Kong", "heure d’été de Hong Kong"]
            },
            "Asia/Hovd": {
              long: ["heure normale de Hovd", "heure d’été de Hovd"]
            },
            "Asia/Calcutta": {
              long: ["heure de l’Inde", "heure de l’Inde"]
            },
            "Indian/Chagos": {
              long: ["heure de l’Océan Indien", "heure de l’Océan Indien"]
            },
            "Asia/Bangkok": {
              long: ["heure d’Indochine", "heure d’Indochine"]
            },
            "Asia/Phnom_Penh": {
              long: ["heure d’Indochine", "heure d’Indochine"]
            },
            "Asia/Vientiane": {
              long: ["heure d’Indochine", "heure d’Indochine"]
            },
            "Asia/Makassar": {
              long: ["heure du Centre indonésien", "heure du Centre indonésien"]
            },
            "Asia/Jayapura": {
              long: ["heure de l’Est indonésien", "heure de l’Est indonésien"]
            },
            "Asia/Jakarta": {
              long: ["heure de l’Ouest indonésien", "heure de l’Ouest indonésien"]
            },
            "Asia/Tehran": {
              long: ["heure normale d’Iran", "heure d’été d’Iran"]
            },
            "Asia/Irkutsk": {
              long: ["heure normale d’Irkoutsk", "heure d’été d’Irkoutsk"]
            },
            "Asia/Jerusalem": {
              long: ["heure normale d’Israël", "heure d’été d’Israël"]
            },
            "Asia/Tokyo": {
              long: ["heure normale du Japon", "heure d’été du Japon"]
            },
            "Asia/Kamchatka": {
              long: ["heure normale de Petropavlovsk-Kamchatski", "heure d’été de Petropavlovsk-Kamchatski"]
            },
            "Asia/Karachi": {
              long: ["heure normale du Pakistan", "heure d’été du Pakistan"]
            },
            "Asia/Seoul": {
              long: ["heure normale de la Corée", "heure d’été de Corée"]
            },
            "Pacific/Kosrae": {
              long: ["heure de Kosrae", "heure de Kosrae"]
            },
            "Asia/Krasnoyarsk": {
              long: ["heure normale de Krasnoïarsk", "heure d’été de Krasnoïarsk"]
            },
            "Europe/Samara": {
              long: ["heure normale de Samara", "heure d’été de Samara"]
            },
            "Pacific/Kiritimati": {
              long: ["heure des îles de la Ligne", "heure des îles de la Ligne"]
            },
            "Australia/Lord_Howe": {
              long: ["heure normale de Lord Howe", "heure d’été de Lord Howe"]
            },
            "Asia/Magadan": {
              long: ["heure normale de Magadan", "heure d’été de Magadan"]
            },
            "Indian/Maldives": {
              long: ["heure des Maldives", "heure des Maldives"]
            },
            "Pacific/Marquesas": {
              long: ["heure des îles Marquises", "heure des îles Marquises"]
            },
            "Pacific/Majuro": {
              long: ["heure des îles Marshall", "heure des îles Marshall"]
            },
            "Indian/Mauritius": {
              long: ["heure normale de Maurice", "heure d’été de Maurice"]
            },
            "Antarctica/Mawson": {
              long: ["heure de Mawson", "heure de Mawson"]
            },
            "America/Mazatlan": {
              long: ["heure normale du Pacifique mexicain", "heure d’été du Pacifique mexicain"]
            },
            "Asia/Ulaanbaatar": {
              long: ["heure normale d’Oulan-Bator", "heure d’été d’Oulan-Bator"]
            },
            "Europe/Moscow": {
              long: ["heure normale de Moscou", "heure d’été de Moscou"]
            },
            "Asia/Rangoon": {
              long: ["heure du Myanmar", "heure du Myanmar"]
            },
            "Pacific/Nauru": {
              long: ["heure de Nauru", "heure de Nauru"]
            },
            "Asia/Katmandu": {
              long: ["heure du Népal", "heure du Népal"]
            },
            "Pacific/Noumea": {
              long: ["heure normale de la Nouvelle-Calédonie", "heure d’été de Nouvelle-Calédonie"]
            },
            "Pacific/Auckland": {
              long: ["heure normale de la Nouvelle-Zélande", "heure d’été de la Nouvelle-Zélande"]
            },
            "Antarctica/McMurdo": {
              long: ["heure normale de la Nouvelle-Zélande", "heure d’été de la Nouvelle-Zélande"]
            },
            "America/St_Johns": {
              long: ["heure normale de Terre-Neuve", "heure d’été de Terre-Neuve"]
            },
            "Pacific/Niue": {
              long: ["heure de Niue", "heure de Niue"]
            },
            "Pacific/Norfolk": {
              long: ["heure normale de l’île Norfolk", "heure d’été de l’île Norfolk"]
            },
            "America/Noronha": {
              long: ["heure normale de Fernando de Noronha", "heure d’été de Fernando de Noronha"]
            },
            "Asia/Novosibirsk": {
              long: ["heure normale de Novossibirsk", "heure d’été de Novossibirsk"]
            },
            "Asia/Omsk": {
              long: ["heure normale de Omsk", "heure d’été de Omsk"]
            },
            "Pacific/Palau": {
              long: ["heure des Palaos", "heure des Palaos"]
            },
            "Pacific/Port_Moresby": {
              long: ["heure de la Papouasie-Nouvelle-Guinée", "heure de la Papouasie-Nouvelle-Guinée"]
            },
            "America/Asuncion": {
              long: ["heure normale du Paraguay", "heure d’été du Paraguay"]
            },
            "America/Lima": {
              long: ["heure normale du Pérou", "heure d’été du Pérou"]
            },
            "Asia/Manila": {
              long: ["heure normale des Philippines", "heure d’été des Philippines"]
            },
            "Pacific/Enderbury": {
              long: ["heure des îles Phoenix", "heure des îles Phoenix"]
            },
            "America/Miquelon": {
              long: ["heure normale de Saint-Pierre-et-Miquelon", "heure d’été de Saint-Pierre-et-Miquelon"]
            },
            "Pacific/Pitcairn": {
              long: ["heure des îles Pitcairn", "heure des îles Pitcairn"]
            },
            "Pacific/Ponape": {
              long: ["heure de l’île de Pohnpei", "heure de l’île de Pohnpei"]
            },
            "Asia/Pyongyang": {
              long: ["heure de Pyongyang", "heure de Pyongyang"]
            },
            "Indian/Reunion": {
              long: ["heure de La Réunion", "heure de La Réunion"]
            },
            "Antarctica/Rothera": {
              long: ["heure de Rothera", "heure de Rothera"]
            },
            "Asia/Sakhalin": {
              long: ["heure normale de Sakhaline", "heure d’été de Sakhaline"]
            },
            "Pacific/Pago_Pago": {
              long: ["heure normale des Samoa", "heure d’été des Samoa"]
            },
            "Indian/Mahe": {
              long: ["heure des Seychelles", "heure des Seychelles"]
            },
            "Asia/Singapore": {
              long: ["heure de Singapour", "heure de Singapour"]
            },
            "Pacific/Guadalcanal": {
              long: ["heure des îles Salomon", "heure des îles Salomon"]
            },
            "Atlantic/South_Georgia": {
              long: ["heure de Géorgie du Sud", "heure de Géorgie du Sud"]
            },
            "Asia/Yekaterinburg": {
              long: ["heure normale d’Ekaterinbourg", "heure d’été d’Ekaterinbourg"]
            },
            "Antarctica/Syowa": {
              long: ["heure de Syowa", "heure de Syowa"]
            },
            "Pacific/Tahiti": {
              long: ["heure de Tahiti", "heure de Tahiti"]
            },
            "Asia/Taipei": {
              long: ["heure normale de Taipei", "heure d’été de Taipei"]
            },
            "Asia/Tashkent": {
              long: ["heure normale de l’Ouzbékistan", "heure d’été de l’Ouzbékistan"]
            },
            "Pacific/Fakaofo": {
              long: ["heure de Tokelau", "heure de Tokelau"]
            },
            "Pacific/Tongatapu": {
              long: ["heure normale des Tonga", "heure d’été de Tonga"]
            },
            "Pacific/Truk": {
              long: ["heure de Chuuk", "heure de Chuuk"]
            },
            "Pacific/Funafuti": {
              long: ["heure des Tuvalu", "heure des Tuvalu"]
            },
            "America/Montevideo": {
              long: ["heure normale de l’Uruguay", "heure d’été de l’Uruguay"]
            },
            "Pacific/Efate": {
              long: ["heure normale du Vanuatu", "heure d’été de Vanuatu"]
            },
            "America/Caracas": {
              long: ["heure du Venezuela", "heure du Venezuela"]
            },
            "Asia/Vladivostok": {
              long: ["heure normale de Vladivostok", "heure d’été de Vladivostok"]
            },
            "Europe/Volgograd": {
              long: ["heure normale de Volgograd", "heure d’été de Volgograd"]
            },
            "Antarctica/Vostok": {
              long: ["heure de Vostok", "heure de Vostok"]
            },
            "Pacific/Wake": {
              long: ["heure de l’île Wake", "heure de l’île Wake"]
            },
            "Pacific/Wallis": {
              long: ["heure de Wallis-et-Futuna", "heure de Wallis-et-Futuna"]
            },
            "Asia/Yakutsk": {
              long: ["heure normale de Iakoutsk", "heure d’été de Iakoutsk"]
            },
            "America/Whitehorse": {
              long: ["heure normale du Yukon", "heure normale du Yukon"]
            },
            UTC: {
              long: ["temps universel coordonné", "temps universel coordonné"],
              short: ["UTC", "UTC"]
            }
          },
          gmtFormat: "UTC{0}",
          hourFormat: "+HH:mm;−HH:mm",
          dateFormat: {
            full: "EEEE d MMMM y",
            long: "d MMMM y",
            medium: "d MMM y",
            short: "dd/MM/y"
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
            short: "{1} {0}"
          },
          formats: {
            gregory: {
              Bh: "h B",
              Bhm: "h:mm B",
              Bhms: "h:mm:ss B",
              d: "d",
              E: "E",
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
              H: "HH 'h'",
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
              "dd/MM/y": "dd/MM/y",
              "HH:mm:ss zzzz": "HH:mm:ss zzzz",
              "HH:mm:ss z": "HH:mm:ss z",
              "HH:mm:ss": "HH:mm:ss",
              "HH:mm": "HH:mm",
              "EEEE d MMMM y, HH:mm:ss zzzz": "EEEE d MMMM y, HH:mm:ss zzzz",
              "d MMMM y, HH:mm:ss zzzz": "d MMMM y, HH:mm:ss zzzz",
              "d MMM y, HH:mm:ss zzzz": "d MMM y, HH:mm:ss zzzz",
              "dd/MM/y HH:mm:ss zzzz": "dd/MM/y HH:mm:ss zzzz",
              "d HH:mm:ss zzzz": "d HH:mm:ss zzzz",
              "E HH:mm:ss zzzz": "E HH:mm:ss zzzz",
              "Ed HH:mm:ss zzzz": "E d HH:mm:ss zzzz",
              "Gy HH:mm:ss zzzz": "y G HH:mm:ss zzzz",
              "GyMd HH:mm:ss zzzz": "dd/MM/y GGGGG HH:mm:ss zzzz",
              "GyMMM, HH:mm:ss zzzz": "MMM y G, HH:mm:ss zzzz",
              "GyMMMd, HH:mm:ss zzzz": "d MMM y G, HH:mm:ss zzzz",
              "GyMMMEd, HH:mm:ss zzzz": "E d MMM y G, HH:mm:ss zzzz",
              "M HH:mm:ss zzzz": "L HH:mm:ss zzzz",
              "Md HH:mm:ss zzzz": "dd/MM HH:mm:ss zzzz",
              "MEd HH:mm:ss zzzz": "E dd/MM HH:mm:ss zzzz",
              "MMM, HH:mm:ss zzzz": "LLL, HH:mm:ss zzzz",
              "MMMd, HH:mm:ss zzzz": "d MMM, HH:mm:ss zzzz",
              "MMMEd, HH:mm:ss zzzz": "E d MMM, HH:mm:ss zzzz",
              "MMMMd, HH:mm:ss zzzz": "d MMMM, HH:mm:ss zzzz",
              "y HH:mm:ss zzzz": "y HH:mm:ss zzzz",
              "yM HH:mm:ss zzzz": "MM/y HH:mm:ss zzzz",
              "yMd HH:mm:ss zzzz": "dd/MM/y HH:mm:ss zzzz",
              "yMEd HH:mm:ss zzzz": "E dd/MM/y HH:mm:ss zzzz",
              "yMMM, HH:mm:ss zzzz": "MMM y, HH:mm:ss zzzz",
              "yMMMd, HH:mm:ss zzzz": "d MMM y, HH:mm:ss zzzz",
              "yMMMEd, HH:mm:ss zzzz": "E d MMM y, HH:mm:ss zzzz",
              "yMMMM, HH:mm:ss zzzz": "MMMM y, HH:mm:ss zzzz",
              "EEEE d MMMM y, HH:mm:ss z": "EEEE d MMMM y, HH:mm:ss z",
              "d MMMM y, HH:mm:ss z": "d MMMM y, HH:mm:ss z",
              "d MMM y, HH:mm:ss z": "d MMM y, HH:mm:ss z",
              "dd/MM/y HH:mm:ss z": "dd/MM/y HH:mm:ss z",
              "d HH:mm:ss z": "d HH:mm:ss z",
              "E HH:mm:ss z": "E HH:mm:ss z",
              "Ed HH:mm:ss z": "E d HH:mm:ss z",
              "Gy HH:mm:ss z": "y G HH:mm:ss z",
              "GyMd HH:mm:ss z": "dd/MM/y GGGGG HH:mm:ss z",
              "GyMMM, HH:mm:ss z": "MMM y G, HH:mm:ss z",
              "GyMMMd, HH:mm:ss z": "d MMM y G, HH:mm:ss z",
              "GyMMMEd, HH:mm:ss z": "E d MMM y G, HH:mm:ss z",
              "M HH:mm:ss z": "L HH:mm:ss z",
              "Md HH:mm:ss z": "dd/MM HH:mm:ss z",
              "MEd HH:mm:ss z": "E dd/MM HH:mm:ss z",
              "MMM, HH:mm:ss z": "LLL, HH:mm:ss z",
              "MMMd, HH:mm:ss z": "d MMM, HH:mm:ss z",
              "MMMEd, HH:mm:ss z": "E d MMM, HH:mm:ss z",
              "MMMMd, HH:mm:ss z": "d MMMM, HH:mm:ss z",
              "y HH:mm:ss z": "y HH:mm:ss z",
              "yM HH:mm:ss z": "MM/y HH:mm:ss z",
              "yMd HH:mm:ss z": "dd/MM/y HH:mm:ss z",
              "yMEd HH:mm:ss z": "E dd/MM/y HH:mm:ss z",
              "yMMM, HH:mm:ss z": "MMM y, HH:mm:ss z",
              "yMMMd, HH:mm:ss z": "d MMM y, HH:mm:ss z",
              "yMMMEd, HH:mm:ss z": "E d MMM y, HH:mm:ss z",
              "yMMMM, HH:mm:ss z": "MMMM y, HH:mm:ss z",
              "EEEE d MMMM y, HH:mm:ss": "EEEE d MMMM y, HH:mm:ss",
              "d MMMM y, HH:mm:ss": "d MMMM y, HH:mm:ss",
              "d MMM y, HH:mm:ss": "d MMM y, HH:mm:ss",
              "dd/MM/y HH:mm:ss": "dd/MM/y HH:mm:ss",
              "d HH:mm:ss": "d HH:mm:ss",
              "E HH:mm:ss": "E HH:mm:ss",
              "Ed HH:mm:ss": "E d HH:mm:ss",
              "Gy HH:mm:ss": "y G HH:mm:ss",
              "GyMd HH:mm:ss": "dd/MM/y GGGGG HH:mm:ss",
              "GyMMM, HH:mm:ss": "MMM y G, HH:mm:ss",
              "GyMMMd, HH:mm:ss": "d MMM y G, HH:mm:ss",
              "GyMMMEd, HH:mm:ss": "E d MMM y G, HH:mm:ss",
              "M HH:mm:ss": "L HH:mm:ss",
              "Md HH:mm:ss": "dd/MM HH:mm:ss",
              "MEd HH:mm:ss": "E dd/MM HH:mm:ss",
              "MMM, HH:mm:ss": "LLL, HH:mm:ss",
              "MMMd, HH:mm:ss": "d MMM, HH:mm:ss",
              "MMMEd, HH:mm:ss": "E d MMM, HH:mm:ss",
              "MMMMd, HH:mm:ss": "d MMMM, HH:mm:ss",
              "y HH:mm:ss": "y HH:mm:ss",
              "yM HH:mm:ss": "MM/y HH:mm:ss",
              "yMd HH:mm:ss": "dd/MM/y HH:mm:ss",
              "yMEd HH:mm:ss": "E dd/MM/y HH:mm:ss",
              "yMMM, HH:mm:ss": "MMM y, HH:mm:ss",
              "yMMMd, HH:mm:ss": "d MMM y, HH:mm:ss",
              "yMMMEd, HH:mm:ss": "E d MMM y, HH:mm:ss",
              "yMMMM, HH:mm:ss": "MMMM y, HH:mm:ss",
              "EEEE d MMMM y, HH:mm": "EEEE d MMMM y, HH:mm",
              "d MMMM y, HH:mm": "d MMMM y, HH:mm",
              "d MMM y, HH:mm": "d MMM y, HH:mm",
              "dd/MM/y HH:mm": "dd/MM/y HH:mm",
              "d HH:mm": "d HH:mm",
              "E HH:mm": "E HH:mm",
              "Ed HH:mm": "E d HH:mm",
              "Gy HH:mm": "y G HH:mm",
              "GyMd HH:mm": "dd/MM/y GGGGG HH:mm",
              "GyMMM, HH:mm": "MMM y G, HH:mm",
              "GyMMMd, HH:mm": "d MMM y G, HH:mm",
              "GyMMMEd, HH:mm": "E d MMM y G, HH:mm",
              "M HH:mm": "L HH:mm",
              "Md HH:mm": "dd/MM HH:mm",
              "MEd HH:mm": "E dd/MM HH:mm",
              "MMM, HH:mm": "LLL, HH:mm",
              "MMMd, HH:mm": "d MMM, HH:mm",
              "MMMEd, HH:mm": "E d MMM, HH:mm",
              "MMMMd, HH:mm": "d MMMM, HH:mm",
              "y HH:mm": "y HH:mm",
              "yM HH:mm": "MM/y HH:mm",
              "yMd HH:mm": "dd/MM/y HH:mm",
              "yMEd HH:mm": "E dd/MM/y HH:mm",
              "yMMM, HH:mm": "MMM y, HH:mm",
              "yMMMd, HH:mm": "d MMM y, HH:mm",
              "yMMMEd, HH:mm": "E d MMM y, HH:mm",
              "yMMMM, HH:mm": "MMMM y, HH:mm",
              "EEEE d MMMM y, Bh": "EEEE d MMMM y, h B",
              "d MMMM y, Bh": "d MMMM y, h B",
              "d MMM y, Bh": "d MMM y, h B",
              "dd/MM/y Bh": "dd/MM/y h B",
              "d Bh": "d h B",
              "E Bh": "E h B",
              "Ed Bh": "E d h B",
              "Gy Bh": "y G h B",
              "GyMd Bh": "dd/MM/y GGGGG h B",
              "GyMMM, Bh": "MMM y G, h B",
              "GyMMMd, Bh": "d MMM y G, h B",
              "GyMMMEd, Bh": "E d MMM y G, h B",
              "M Bh": "L h B",
              "Md Bh": "dd/MM h B",
              "MEd Bh": "E dd/MM h B",
              "MMM, Bh": "LLL, h B",
              "MMMd, Bh": "d MMM, h B",
              "MMMEd, Bh": "E d MMM, h B",
              "MMMMd, Bh": "d MMMM, h B",
              "y Bh": "y h B",
              "yM Bh": "MM/y h B",
              "yMd Bh": "dd/MM/y h B",
              "yMEd Bh": "E dd/MM/y h B",
              "yMMM, Bh": "MMM y, h B",
              "yMMMd, Bh": "d MMM y, h B",
              "yMMMEd, Bh": "E d MMM y, h B",
              "yMMMM, Bh": "MMMM y, h B",
              "EEEE d MMMM y, Bhm": "EEEE d MMMM y, h:mm B",
              "d MMMM y, Bhm": "d MMMM y, h:mm B",
              "d MMM y, Bhm": "d MMM y, h:mm B",
              "dd/MM/y Bhm": "dd/MM/y h:mm B",
              "d Bhm": "d h:mm B",
              "E Bhm": "E h:mm B",
              "Ed Bhm": "E d h:mm B",
              "Gy Bhm": "y G h:mm B",
              "GyMd Bhm": "dd/MM/y GGGGG h:mm B",
              "GyMMM, Bhm": "MMM y G, h:mm B",
              "GyMMMd, Bhm": "d MMM y G, h:mm B",
              "GyMMMEd, Bhm": "E d MMM y G, h:mm B",
              "M Bhm": "L h:mm B",
              "Md Bhm": "dd/MM h:mm B",
              "MEd Bhm": "E dd/MM h:mm B",
              "MMM, Bhm": "LLL, h:mm B",
              "MMMd, Bhm": "d MMM, h:mm B",
              "MMMEd, Bhm": "E d MMM, h:mm B",
              "MMMMd, Bhm": "d MMMM, h:mm B",
              "y Bhm": "y h:mm B",
              "yM Bhm": "MM/y h:mm B",
              "yMd Bhm": "dd/MM/y h:mm B",
              "yMEd Bhm": "E dd/MM/y h:mm B",
              "yMMM, Bhm": "MMM y, h:mm B",
              "yMMMd, Bhm": "d MMM y, h:mm B",
              "yMMMEd, Bhm": "E d MMM y, h:mm B",
              "yMMMM, Bhm": "MMMM y, h:mm B",
              "EEEE d MMMM y, Bhms": "EEEE d MMMM y, h:mm:ss B",
              "d MMMM y, Bhms": "d MMMM y, h:mm:ss B",
              "d MMM y, Bhms": "d MMM y, h:mm:ss B",
              "dd/MM/y Bhms": "dd/MM/y h:mm:ss B",
              "d Bhms": "d h:mm:ss B",
              "E Bhms": "E h:mm:ss B",
              "Ed Bhms": "E d h:mm:ss B",
              "Gy Bhms": "y G h:mm:ss B",
              "GyMd Bhms": "dd/MM/y GGGGG h:mm:ss B",
              "GyMMM, Bhms": "MMM y G, h:mm:ss B",
              "GyMMMd, Bhms": "d MMM y G, h:mm:ss B",
              "GyMMMEd, Bhms": "E d MMM y G, h:mm:ss B",
              "M Bhms": "L h:mm:ss B",
              "Md Bhms": "dd/MM h:mm:ss B",
              "MEd Bhms": "E dd/MM h:mm:ss B",
              "MMM, Bhms": "LLL, h:mm:ss B",
              "MMMd, Bhms": "d MMM, h:mm:ss B",
              "MMMEd, Bhms": "E d MMM, h:mm:ss B",
              "MMMMd, Bhms": "d MMMM, h:mm:ss B",
              "y Bhms": "y h:mm:ss B",
              "yM Bhms": "MM/y h:mm:ss B",
              "yMd Bhms": "dd/MM/y h:mm:ss B",
              "yMEd Bhms": "E dd/MM/y h:mm:ss B",
              "yMMM, Bhms": "MMM y, h:mm:ss B",
              "yMMMd, Bhms": "d MMM y, h:mm:ss B",
              "yMMMEd, Bhms": "E d MMM y, h:mm:ss B",
              "yMMMM, Bhms": "MMMM y, h:mm:ss B",
              "EEEE d MMMM y, h": "EEEE d MMMM y, h a",
              "d MMMM y, h": "d MMMM y, h a",
              "d MMM y, h": "d MMM y, h a",
              "dd/MM/y h": "dd/MM/y h a",
              "d h": "d h a",
              "E h": "E h a",
              "Ed h": "E d h a",
              "Gy h": "y G h a",
              "GyMd h": "dd/MM/y GGGGG h a",
              "GyMMM, h": "MMM y G, h a",
              "GyMMMd, h": "d MMM y G, h a",
              "GyMMMEd, h": "E d MMM y G, h a",
              "M h": "L h a",
              "Md h": "dd/MM h a",
              "MEd h": "E dd/MM h a",
              "MMM, h": "LLL, h a",
              "MMMd, h": "d MMM, h a",
              "MMMEd, h": "E d MMM, h a",
              "MMMMd, h": "d MMMM, h a",
              "y h": "y h a",
              "yM h": "MM/y h a",
              "yMd h": "dd/MM/y h a",
              "yMEd h": "E dd/MM/y h a",
              "yMMM, h": "MMM y, h a",
              "yMMMd, h": "d MMM y, h a",
              "yMMMEd, h": "E d MMM y, h a",
              "yMMMM, h": "MMMM y, h a",
              "EEEE d MMMM y, H": "EEEE d MMMM y, HH 'h'",
              "d MMMM y, H": "d MMMM y, HH 'h'",
              "d MMM y, H": "d MMM y, HH 'h'",
              "dd/MM/y H": "dd/MM/y HH 'h'",
              "d H": "d HH 'h'",
              "E H": "E HH 'h'",
              "Ed H": "E d HH 'h'",
              "Gy H": "y G HH 'h'",
              "GyMd H": "dd/MM/y GGGGG HH 'h'",
              "GyMMM, H": "MMM y G, HH 'h'",
              "GyMMMd, H": "d MMM y G, HH 'h'",
              "GyMMMEd, H": "E d MMM y G, HH 'h'",
              "M H": "L HH 'h'",
              "Md H": "dd/MM HH 'h'",
              "MEd H": "E dd/MM HH 'h'",
              "MMM, H": "LLL, HH 'h'",
              "MMMd, H": "d MMM, HH 'h'",
              "MMMEd, H": "E d MMM, HH 'h'",
              "MMMMd, H": "d MMMM, HH 'h'",
              "y H": "y HH 'h'",
              "yM H": "MM/y HH 'h'",
              "yMd H": "dd/MM/y HH 'h'",
              "yMEd H": "E dd/MM/y HH 'h'",
              "yMMM, H": "MMM y, HH 'h'",
              "yMMMd, H": "d MMM y, HH 'h'",
              "yMMMEd, H": "E d MMM y, HH 'h'",
              "yMMMM, H": "MMMM y, HH 'h'",
              "EEEE d MMMM y, hm": "EEEE d MMMM y, h:mm a",
              "d MMMM y, hm": "d MMMM y, h:mm a",
              "d MMM y, hm": "d MMM y, h:mm a",
              "dd/MM/y hm": "dd/MM/y h:mm a",
              "d hm": "d h:mm a",
              "E hm": "E h:mm a",
              "Ed hm": "E d h:mm a",
              "Gy hm": "y G h:mm a",
              "GyMd hm": "dd/MM/y GGGGG h:mm a",
              "GyMMM, hm": "MMM y G, h:mm a",
              "GyMMMd, hm": "d MMM y G, h:mm a",
              "GyMMMEd, hm": "E d MMM y G, h:mm a",
              "M hm": "L h:mm a",
              "Md hm": "dd/MM h:mm a",
              "MEd hm": "E dd/MM h:mm a",
              "MMM, hm": "LLL, h:mm a",
              "MMMd, hm": "d MMM, h:mm a",
              "MMMEd, hm": "E d MMM, h:mm a",
              "MMMMd, hm": "d MMMM, h:mm a",
              "y hm": "y h:mm a",
              "yM hm": "MM/y h:mm a",
              "yMd hm": "dd/MM/y h:mm a",
              "yMEd hm": "E dd/MM/y h:mm a",
              "yMMM, hm": "MMM y, h:mm a",
              "yMMMd, hm": "d MMM y, h:mm a",
              "yMMMEd, hm": "E d MMM y, h:mm a",
              "yMMMM, hm": "MMMM y, h:mm a",
              "EEEE d MMMM y, Hm": "EEEE d MMMM y, HH:mm",
              "d MMMM y, Hm": "d MMMM y, HH:mm",
              "d MMM y, Hm": "d MMM y, HH:mm",
              "dd/MM/y Hm": "dd/MM/y HH:mm",
              "d Hm": "d HH:mm",
              "E Hm": "E HH:mm",
              "Ed Hm": "E d HH:mm",
              "Gy Hm": "y G HH:mm",
              "GyMd Hm": "dd/MM/y GGGGG HH:mm",
              "GyMMM, Hm": "MMM y G, HH:mm",
              "GyMMMd, Hm": "d MMM y G, HH:mm",
              "GyMMMEd, Hm": "E d MMM y G, HH:mm",
              "M Hm": "L HH:mm",
              "Md Hm": "dd/MM HH:mm",
              "MEd Hm": "E dd/MM HH:mm",
              "MMM, Hm": "LLL, HH:mm",
              "MMMd, Hm": "d MMM, HH:mm",
              "MMMEd, Hm": "E d MMM, HH:mm",
              "MMMMd, Hm": "d MMMM, HH:mm",
              "y Hm": "y HH:mm",
              "yM Hm": "MM/y HH:mm",
              "yMd Hm": "dd/MM/y HH:mm",
              "yMEd Hm": "E dd/MM/y HH:mm",
              "yMMM, Hm": "MMM y, HH:mm",
              "yMMMd, Hm": "d MMM y, HH:mm",
              "yMMMEd, Hm": "E d MMM y, HH:mm",
              "yMMMM, Hm": "MMMM y, HH:mm",
              "EEEE d MMMM y, hms": "EEEE d MMMM y, h:mm:ss a",
              "d MMMM y, hms": "d MMMM y, h:mm:ss a",
              "d MMM y, hms": "d MMM y, h:mm:ss a",
              "dd/MM/y hms": "dd/MM/y h:mm:ss a",
              "d hms": "d h:mm:ss a",
              "E hms": "E h:mm:ss a",
              "Ed hms": "E d h:mm:ss a",
              "Gy hms": "y G h:mm:ss a",
              "GyMd hms": "dd/MM/y GGGGG h:mm:ss a",
              "GyMMM, hms": "MMM y G, h:mm:ss a",
              "GyMMMd, hms": "d MMM y G, h:mm:ss a",
              "GyMMMEd, hms": "E d MMM y G, h:mm:ss a",
              "M hms": "L h:mm:ss a",
              "Md hms": "dd/MM h:mm:ss a",
              "MEd hms": "E dd/MM h:mm:ss a",
              "MMM, hms": "LLL, h:mm:ss a",
              "MMMd, hms": "d MMM, h:mm:ss a",
              "MMMEd, hms": "E d MMM, h:mm:ss a",
              "MMMMd, hms": "d MMMM, h:mm:ss a",
              "y hms": "y h:mm:ss a",
              "yM hms": "MM/y h:mm:ss a",
              "yMd hms": "dd/MM/y h:mm:ss a",
              "yMEd hms": "E dd/MM/y h:mm:ss a",
              "yMMM, hms": "MMM y, h:mm:ss a",
              "yMMMd, hms": "d MMM y, h:mm:ss a",
              "yMMMEd, hms": "E d MMM y, h:mm:ss a",
              "yMMMM, hms": "MMMM y, h:mm:ss a",
              "EEEE d MMMM y, Hms": "EEEE d MMMM y, HH:mm:ss",
              "d MMMM y, Hms": "d MMMM y, HH:mm:ss",
              "d MMM y, Hms": "d MMM y, HH:mm:ss",
              "dd/MM/y Hms": "dd/MM/y HH:mm:ss",
              "d Hms": "d HH:mm:ss",
              "E Hms": "E HH:mm:ss",
              "Ed Hms": "E d HH:mm:ss",
              "Gy Hms": "y G HH:mm:ss",
              "GyMd Hms": "dd/MM/y GGGGG HH:mm:ss",
              "GyMMM, Hms": "MMM y G, HH:mm:ss",
              "GyMMMd, Hms": "d MMM y G, HH:mm:ss",
              "GyMMMEd, Hms": "E d MMM y G, HH:mm:ss",
              "M Hms": "L HH:mm:ss",
              "Md Hms": "dd/MM HH:mm:ss",
              "MEd Hms": "E dd/MM HH:mm:ss",
              "MMM, Hms": "LLL, HH:mm:ss",
              "MMMd, Hms": "d MMM, HH:mm:ss",
              "MMMEd, Hms": "E d MMM, HH:mm:ss",
              "MMMMd, Hms": "d MMMM, HH:mm:ss",
              "y Hms": "y HH:mm:ss",
              "yM Hms": "MM/y HH:mm:ss",
              "yMd Hms": "dd/MM/y HH:mm:ss",
              "yMEd Hms": "E dd/MM/y HH:mm:ss",
              "yMMM, Hms": "MMM y, HH:mm:ss",
              "yMMMd, Hms": "d MMM y, HH:mm:ss",
              "yMMMEd, Hms": "E d MMM y, HH:mm:ss",
              "yMMMM, Hms": "MMMM y, HH:mm:ss",
              "EEEE d MMMM y, hmsv": "EEEE d MMMM y, h:mm:ss a v",
              "d MMMM y, hmsv": "d MMMM y, h:mm:ss a v",
              "d MMM y, hmsv": "d MMM y, h:mm:ss a v",
              "dd/MM/y hmsv": "dd/MM/y h:mm:ss a v",
              "d hmsv": "d h:mm:ss a v",
              "E hmsv": "E h:mm:ss a v",
              "Ed hmsv": "E d h:mm:ss a v",
              "Gy hmsv": "y G h:mm:ss a v",
              "GyMd hmsv": "dd/MM/y GGGGG h:mm:ss a v",
              "GyMMM, hmsv": "MMM y G, h:mm:ss a v",
              "GyMMMd, hmsv": "d MMM y G, h:mm:ss a v",
              "GyMMMEd, hmsv": "E d MMM y G, h:mm:ss a v",
              "M hmsv": "L h:mm:ss a v",
              "Md hmsv": "dd/MM h:mm:ss a v",
              "MEd hmsv": "E dd/MM h:mm:ss a v",
              "MMM, hmsv": "LLL, h:mm:ss a v",
              "MMMd, hmsv": "d MMM, h:mm:ss a v",
              "MMMEd, hmsv": "E d MMM, h:mm:ss a v",
              "MMMMd, hmsv": "d MMMM, h:mm:ss a v",
              "y hmsv": "y h:mm:ss a v",
              "yM hmsv": "MM/y h:mm:ss a v",
              "yMd hmsv": "dd/MM/y h:mm:ss a v",
              "yMEd hmsv": "E dd/MM/y h:mm:ss a v",
              "yMMM, hmsv": "MMM y, h:mm:ss a v",
              "yMMMd, hmsv": "d MMM y, h:mm:ss a v",
              "yMMMEd, hmsv": "E d MMM y, h:mm:ss a v",
              "yMMMM, hmsv": "MMMM y, h:mm:ss a v",
              "EEEE d MMMM y, Hmsv": "EEEE d MMMM y, HH:mm:ss v",
              "d MMMM y, Hmsv": "d MMMM y, HH:mm:ss v",
              "d MMM y, Hmsv": "d MMM y, HH:mm:ss v",
              "dd/MM/y Hmsv": "dd/MM/y HH:mm:ss v",
              "d Hmsv": "d HH:mm:ss v",
              "E Hmsv": "E HH:mm:ss v",
              "Ed Hmsv": "E d HH:mm:ss v",
              "Gy Hmsv": "y G HH:mm:ss v",
              "GyMd Hmsv": "dd/MM/y GGGGG HH:mm:ss v",
              "GyMMM, Hmsv": "MMM y G, HH:mm:ss v",
              "GyMMMd, Hmsv": "d MMM y G, HH:mm:ss v",
              "GyMMMEd, Hmsv": "E d MMM y G, HH:mm:ss v",
              "M Hmsv": "L HH:mm:ss v",
              "Md Hmsv": "dd/MM HH:mm:ss v",
              "MEd Hmsv": "E dd/MM HH:mm:ss v",
              "MMM, Hmsv": "LLL, HH:mm:ss v",
              "MMMd, Hmsv": "d MMM, HH:mm:ss v",
              "MMMEd, Hmsv": "E d MMM, HH:mm:ss v",
              "MMMMd, Hmsv": "d MMMM, HH:mm:ss v",
              "y Hmsv": "y HH:mm:ss v",
              "yM Hmsv": "MM/y HH:mm:ss v",
              "yMd Hmsv": "dd/MM/y HH:mm:ss v",
              "yMEd Hmsv": "E dd/MM/y HH:mm:ss v",
              "yMMM, Hmsv": "MMM y, HH:mm:ss v",
              "yMMMd, Hmsv": "d MMM y, HH:mm:ss v",
              "yMMMEd, Hmsv": "E d MMM y, HH:mm:ss v",
              "yMMMM, Hmsv": "MMMM y, HH:mm:ss v",
              "EEEE d MMMM y, hmv": "EEEE d MMMM y, h:mm a v",
              "d MMMM y, hmv": "d MMMM y, h:mm a v",
              "d MMM y, hmv": "d MMM y, h:mm a v",
              "dd/MM/y hmv": "dd/MM/y h:mm a v",
              "d hmv": "d h:mm a v",
              "E hmv": "E h:mm a v",
              "Ed hmv": "E d h:mm a v",
              "Gy hmv": "y G h:mm a v",
              "GyMd hmv": "dd/MM/y GGGGG h:mm a v",
              "GyMMM, hmv": "MMM y G, h:mm a v",
              "GyMMMd, hmv": "d MMM y G, h:mm a v",
              "GyMMMEd, hmv": "E d MMM y G, h:mm a v",
              "M hmv": "L h:mm a v",
              "Md hmv": "dd/MM h:mm a v",
              "MEd hmv": "E dd/MM h:mm a v",
              "MMM, hmv": "LLL, h:mm a v",
              "MMMd, hmv": "d MMM, h:mm a v",
              "MMMEd, hmv": "E d MMM, h:mm a v",
              "MMMMd, hmv": "d MMMM, h:mm a v",
              "y hmv": "y h:mm a v",
              "yM hmv": "MM/y h:mm a v",
              "yMd hmv": "dd/MM/y h:mm a v",
              "yMEd hmv": "E dd/MM/y h:mm a v",
              "yMMM, hmv": "MMM y, h:mm a v",
              "yMMMd, hmv": "d MMM y, h:mm a v",
              "yMMMEd, hmv": "E d MMM y, h:mm a v",
              "yMMMM, hmv": "MMMM y, h:mm a v",
              "EEEE d MMMM y, Hmv": "EEEE d MMMM y, HH:mm v",
              "d MMMM y, Hmv": "d MMMM y, HH:mm v",
              "d MMM y, Hmv": "d MMM y, HH:mm v",
              "dd/MM/y Hmv": "dd/MM/y HH:mm v",
              "d Hmv": "d HH:mm v",
              "E Hmv": "E HH:mm v",
              "Ed Hmv": "E d HH:mm v",
              "Gy Hmv": "y G HH:mm v",
              "GyMd Hmv": "dd/MM/y GGGGG HH:mm v",
              "GyMMM, Hmv": "MMM y G, HH:mm v",
              "GyMMMd, Hmv": "d MMM y G, HH:mm v",
              "GyMMMEd, Hmv": "E d MMM y G, HH:mm v",
              "M Hmv": "L HH:mm v",
              "Md Hmv": "dd/MM HH:mm v",
              "MEd Hmv": "E dd/MM HH:mm v",
              "MMM, Hmv": "LLL, HH:mm v",
              "MMMd, Hmv": "d MMM, HH:mm v",
              "MMMEd, Hmv": "E d MMM, HH:mm v",
              "MMMMd, Hmv": "d MMMM, HH:mm v",
              "y Hmv": "y HH:mm v",
              "yM Hmv": "MM/y HH:mm v",
              "yMd Hmv": "dd/MM/y HH:mm v",
              "yMEd Hmv": "E dd/MM/y HH:mm v",
              "yMMM, Hmv": "MMM y, HH:mm v",
              "yMMMd, Hmv": "d MMM y, HH:mm v",
              "yMMMEd, Hmv": "E d MMM y, HH:mm v",
              "yMMMM, Hmv": "MMMM y, HH:mm v",
              "EEEE d MMMM y, ms": "EEEE d MMMM y, mm:ss",
              "d MMMM y, ms": "d MMMM y, mm:ss",
              "d MMM y, ms": "d MMM y, mm:ss",
              "dd/MM/y ms": "dd/MM/y mm:ss",
              "d ms": "d mm:ss",
              "E ms": "E mm:ss",
              "Ed ms": "E d mm:ss",
              "Gy ms": "y G mm:ss",
              "GyMd ms": "dd/MM/y GGGGG mm:ss",
              "GyMMM, ms": "MMM y G, mm:ss",
              "GyMMMd, ms": "d MMM y G, mm:ss",
              "GyMMMEd, ms": "E d MMM y G, mm:ss",
              "M ms": "L mm:ss",
              "Md ms": "dd/MM mm:ss",
              "MEd ms": "E dd/MM mm:ss",
              "MMM, ms": "LLL, mm:ss",
              "MMMd, ms": "d MMM, mm:ss",
              "MMMEd, ms": "E d MMM, mm:ss",
              "MMMMd, ms": "d MMMM, mm:ss",
              "y ms": "y mm:ss",
              "yM ms": "MM/y mm:ss",
              "yMd ms": "dd/MM/y mm:ss",
              "yMEd ms": "E dd/MM/y mm:ss",
              "yMMM, ms": "MMM y, mm:ss",
              "yMMMd, ms": "d MMM y, mm:ss",
              "yMMMEd, ms": "E d MMM y, mm:ss",
              "yMMMM, ms": "MMMM y, mm:ss"
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
              G: "y G 'à' y G",
              y: "y–y G"
            },
            GyM: {
              G: "MM/y G – MM/y G",
              M: "MM–MM/y G",
              y: "MM/y – MM/y G"
            },
            GyMd: {
              d: "d–d/MM/y G",
              G: "d/MM/y G – d/MM/y G",
              M: "d/MM – d/MM/y G",
              y: "d/MM/y – d/MM/y G"
            },
            GyMEd: {
              d: "E d – E d/MM/y G",
              G: "E d/MM/y G – E d/MM/y G",
              M: "E d/MM – E d/MM/y G",
              y: "E d/MM/y – E d/MM/y G"
            },
            GyMMM: {
              G: "MMM y G – MMM y G",
              M: "MMM – MMM y G",
              y: "MMM y – MMM y G"
            },
            GyMMMd: {
              d: "d–d MMM y G",
              G: "d MMM y G – d MMM y G",
              M: "d MMM – d MMM y G",
              y: "d MMM y – d MMM y G"
            },
            GyMMMEd: {
              d: "E d – E d MMM y G",
              G: "E d MMM y G – E d MMM y G",
              M: "E d MMM – E d MMM y G",
              y: "E d MMM y – E d MMM y G"
            },
            h: {
              a: "h a – h a",
              h: "h – h a"
            },
            H: {
              H: "HH – HH"
            },
            hm: {
              a: "h:mm a – h:mm a",
              h: "h:mm – h:mm a",
              m: "h:mm – h:mm a"
            },
            Hm: {
              H: "HH:mm – HH:mm",
              m: "HH:mm – HH:mm"
            },
            hmv: {
              a: "h:mm a – h:mm a v",
              h: "h:mm – h:mm a v",
              m: "h:mm – h:mm a v"
            },
            Hmv: {
              H: "HH:mm – HH:mm v",
              m: "HH:mm – HH:mm v"
            },
            hv: {
              a: "h a – h a v",
              h: "h – h a v"
            },
            Hv: {
              H: "HH – HH v"
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
              d: "d–d MMM",
              M: "d MMM – d MMM"
            },
            MMMEd: {
              d: "E d – E d MMM",
              M: "E d MMM – E d MMM"
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
              d: "d–d MMM y",
              M: "d MMM – d MMM y",
              y: "d MMM y – d MMM y"
            },
            yMMMEd: {
              d: "E d – E d MMM y",
              M: "E d MMM – E d MMM y",
              y: "E d MMM y – E d MMM y"
            },
            yMMMM: {
              M: "MMMM – MMMM y",
              y: "MMMM y – MMMM y"
            }
          },
          hourCycle: "h23",
          nu: ["latn"],
          ca: ["gregory"],
          hc: ["h23", ""]
        },
        locale: "fr"
      })
    }
  }
]);