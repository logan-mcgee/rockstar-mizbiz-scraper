try {
  let m = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    M = (new m.Error).stack;
  M && (m._sentryDebugIds = m._sentryDebugIds || {}, m._sentryDebugIds[M] = "003da883-e40e-4591-bcd1-9b7adb7f18bf", m._sentryDebugIdIdentifier = "sentry-dbid-003da883-e40e-4591-bcd1-9b7adb7f18bf")
} catch (m) {} {
  let m = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[(new m.Error).stack] = Object.assign({}, m._sentryModuleMetadata[(new m.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [4799], {
    71137: () => {
      Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
        data: {
          am: "AM",
          pm: "PM",
          weekday: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
          },
          era: {
            narrow: {
              BC: "B",
              AD: "A"
            },
            short: {
              BC: "BC",
              AD: "AD"
            },
            long: {
              BC: "Before Christ",
              AD: "Anno Domini"
            }
          },
          month: {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          },
          timeZoneName: {
            "America/Rio_Branco": {
              long: ["Acre Standard Time", "Acre Summer Time"]
            },
            "Asia/Kabul": {
              long: ["Afghanistan Time", "Afghanistan Time"]
            },
            "Africa/Maputo": {
              long: ["Central Africa Time", "Central Africa Time"]
            },
            "Africa/Bujumbura": {
              long: ["Central Africa Time", "Central Africa Time"]
            },
            "Africa/Gaborone": {
              long: ["Central Africa Time", "Central Africa Time"]
            },
            "Africa/Lubumbashi": {
              long: ["Central Africa Time", "Central Africa Time"]
            },
            "Africa/Blantyre": {
              long: ["Central Africa Time", "Central Africa Time"]
            },
            "Africa/Kigali": {
              long: ["Central Africa Time", "Central Africa Time"]
            },
            "Africa/Lusaka": {
              long: ["Central Africa Time", "Central Africa Time"]
            },
            "Africa/Harare": {
              long: ["Central Africa Time", "Central Africa Time"]
            },
            "Africa/Nairobi": {
              long: ["East Africa Time", "East Africa Time"]
            },
            "Africa/Djibouti": {
              long: ["East Africa Time", "East Africa Time"]
            },
            "Africa/Asmera": {
              long: ["East Africa Time", "East Africa Time"]
            },
            "Africa/Addis_Ababa": {
              long: ["East Africa Time", "East Africa Time"]
            },
            "Indian/Comoro": {
              long: ["East Africa Time", "East Africa Time"]
            },
            "Indian/Antananarivo": {
              long: ["East Africa Time", "East Africa Time"]
            },
            "Africa/Mogadishu": {
              long: ["East Africa Time", "East Africa Time"]
            },
            "Africa/Dar_es_Salaam": {
              long: ["East Africa Time", "East Africa Time"]
            },
            "Africa/Kampala": {
              long: ["East Africa Time", "East Africa Time"]
            },
            "Indian/Mayotte": {
              long: ["East Africa Time", "East Africa Time"]
            },
            "Africa/Johannesburg": {
              long: ["South Africa Standard Time", "South Africa Standard Time"]
            },
            "Africa/Maseru": {
              long: ["South Africa Standard Time", "South Africa Standard Time"]
            },
            "Africa/Mbabane": {
              long: ["South Africa Standard Time", "South Africa Standard Time"]
            },
            "Africa/Lagos": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Africa/Luanda": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Africa/Porto-Novo": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Africa/Kinshasa": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Africa/Bangui": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Africa/Brazzaville": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Africa/Douala": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Africa/Libreville": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Africa/Malabo": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Africa/Niamey": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Africa/Ndjamena": {
              long: ["West Africa Standard Time", "West Africa Summer Time"]
            },
            "Asia/Aqtobe": {
              long: ["West Kazakhstan Time", "West Kazakhstan Time"]
            },
            "America/Juneau": {
              long: ["Alaska Standard Time", "Alaska Daylight Time"],
              short: ["AKST", "AKDT"]
            },
            "Asia/Almaty": {
              long: ["East Kazakhstan Time", "East Kazakhstan Time"]
            },
            "America/Manaus": {
              long: ["Amazon Standard Time", "Amazon Summer Time"]
            },
            "America/Chicago": {
              long: ["Central Standard Time", "Central Daylight Time"],
              short: ["CST", "CDT"]
            },
            "America/Belize": {
              long: ["Central Standard Time", "Central Daylight Time"],
              short: ["CST", "CDT"]
            },
            "America/Winnipeg": {
              long: ["Central Standard Time", "Central Daylight Time"],
              short: ["CST", "CDT"]
            },
            "America/Costa_Rica": {
              long: ["Central Standard Time", "Central Daylight Time"],
              short: ["CST", "CDT"]
            },
            "America/Guatemala": {
              long: ["Central Standard Time", "Central Daylight Time"],
              short: ["CST", "CDT"]
            },
            "America/Tegucigalpa": {
              long: ["Central Standard Time", "Central Daylight Time"],
              short: ["CST", "CDT"]
            },
            "America/Mexico_City": {
              long: ["Central Standard Time", "Central Daylight Time"],
              short: ["CST", "CDT"]
            },
            "America/El_Salvador": {
              long: ["Central Standard Time", "Central Daylight Time"],
              short: ["CST", "CDT"]
            },
            "America/New_York": {
              long: ["Eastern Standard Time", "Eastern Daylight Time"],
              short: ["EST", "EDT"]
            },
            "America/Nassau": {
              long: ["Eastern Standard Time", "Eastern Daylight Time"],
              short: ["EST", "EDT"]
            },
            "America/Toronto": {
              long: ["Eastern Standard Time", "Eastern Daylight Time"],
              short: ["EST", "EDT"]
            },
            "America/Port-au-Prince": {
              long: ["Eastern Standard Time", "Eastern Daylight Time"],
              short: ["EST", "EDT"]
            },
            "America/Jamaica": {
              long: ["Eastern Standard Time", "Eastern Daylight Time"],
              short: ["EST", "EDT"]
            },
            "America/Cayman": {
              long: ["Eastern Standard Time", "Eastern Daylight Time"],
              short: ["EST", "EDT"]
            },
            "America/Panama": {
              long: ["Eastern Standard Time", "Eastern Daylight Time"],
              short: ["EST", "EDT"]
            },
            "America/Denver": {
              long: ["Mountain Standard Time", "Mountain Daylight Time"],
              short: ["MST", "MDT"]
            },
            "America/Edmonton": {
              long: ["Mountain Standard Time", "Mountain Daylight Time"],
              short: ["MST", "MDT"]
            },
            "America/Los_Angeles": {
              long: ["Pacific Standard Time", "Pacific Daylight Time"],
              short: ["PST", "PDT"]
            },
            "America/Vancouver": {
              long: ["Pacific Standard Time", "Pacific Daylight Time"],
              short: ["PST", "PDT"]
            },
            "America/Tijuana": {
              long: ["Pacific Standard Time", "Pacific Daylight Time"],
              short: ["PST", "PDT"]
            },
            "Asia/Anadyr": {
              long: ["Anadyr Standard Time", "Anadyr Summer Time"]
            },
            "Pacific/Apia": {
              long: ["Apia Standard Time", "Apia Daylight Time"]
            },
            "Asia/Riyadh": {
              long: ["Arabian Standard Time", "Arabian Daylight Time"]
            },
            "Asia/Bahrain": {
              long: ["Arabian Standard Time", "Arabian Daylight Time"]
            },
            "Asia/Baghdad": {
              long: ["Arabian Standard Time", "Arabian Daylight Time"]
            },
            "Asia/Kuwait": {
              long: ["Arabian Standard Time", "Arabian Daylight Time"]
            },
            "Asia/Qatar": {
              long: ["Arabian Standard Time", "Arabian Daylight Time"]
            },
            "Asia/Aden": {
              long: ["Arabian Standard Time", "Arabian Daylight Time"]
            },
            "America/Buenos_Aires": {
              long: ["Argentina Standard Time", "Argentina Summer Time"]
            },
            "America/Argentina/San_Luis": {
              long: ["Western Argentina Standard Time", "Western Argentina Summer Time"]
            },
            "Asia/Ashgabat": {
              long: ["Turkmenistan Standard Time", "Turkmenistan Summer Time"]
            },
            "America/Halifax": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Antigua": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Anguilla": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Aruba": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Barbados": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "Atlantic/Bermuda": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Kralendijk": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Curacao": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Dominica": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Grenada": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Thule": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Guadeloupe": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/St_Kitts": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/St_Lucia": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Marigot": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Martinique": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Montserrat": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Puerto_Rico": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Lower_Princes": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Port_of_Spain": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/St_Vincent": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/Tortola": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "America/St_Thomas": {
              long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
              short: ["AST", "ADT"]
            },
            "Australia/Adelaide": {
              long: ["Australian Central Standard Time", "Australian Central Daylight Time"]
            },
            "Australia/Eucla": {
              long: ["Australian Central Western Standard Time", "Australian Central Western Daylight Time"]
            },
            "Australia/Sydney": {
              long: ["Australian Eastern Standard Time", "Australian Eastern Daylight Time"]
            },
            "Australia/Perth": {
              long: ["Australian Western Standard Time", "Australian Western Daylight Time"]
            },
            "Atlantic/Azores": {
              long: ["Azores Standard Time", "Azores Summer Time"]
            },
            "Asia/Thimphu": {
              long: ["Bhutan Time", "Bhutan Time"]
            },
            "America/La_Paz": {
              long: ["Bolivia Time", "Bolivia Time"]
            },
            "Asia/Kuching": {
              long: ["Malaysia Time", "Malaysia Time"]
            },
            "America/Sao_Paulo": {
              long: ["Brasilia Standard Time", "Brasilia Summer Time"]
            },
            "Europe/London": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Asia/Brunei": {
              long: ["Brunei Darussalam Time", "Brunei Darussalam Time"]
            },
            "Atlantic/Cape_Verde": {
              long: ["Cape Verde Standard Time", "Cape Verde Summer Time"]
            },
            "Antarctica/Casey": {
              long: ["Casey Time", "Casey Time"]
            },
            "Pacific/Saipan": {
              long: ["North Mariana Islands Time", "North Mariana Islands Time"]
            },
            "Pacific/Guam": {
              long: ["Guam Standard Time", "Guam Standard Time"]
            },
            "Pacific/Chatham": {
              long: ["Chatham Standard Time", "Chatham Daylight Time"]
            },
            "America/Santiago": {
              long: ["Chile Standard Time", "Chile Summer Time"]
            },
            "Asia/Shanghai": {
              long: ["China Standard Time", "China Daylight Time"]
            },
            "Indian/Christmas": {
              long: ["Christmas Island Time", "Christmas Island Time"]
            },
            "Indian/Cocos": {
              long: ["Cocos Islands Time", "Cocos Islands Time"]
            },
            "America/Bogota": {
              long: ["Colombia Standard Time", "Colombia Summer Time"]
            },
            "Pacific/Rarotonga": {
              long: ["Cook Islands Standard Time", "Cook Islands Half Summer Time"]
            },
            "America/Havana": {
              long: ["Cuba Standard Time", "Cuba Daylight Time"]
            },
            "Antarctica/Davis": {
              long: ["Davis Time", "Davis Time"]
            },
            "Antarctica/DumontDUrville": {
              long: ["Dumont-d’Urville Time", "Dumont-d’Urville Time"]
            },
            "Asia/Dushanbe": {
              long: ["Tajikistan Time", "Tajikistan Time"]
            },
            "America/Paramaribo": {
              long: ["Suriname Time", "Suriname Time"]
            },
            "Asia/Dili": {
              long: ["East Timor Time", "East Timor Time"]
            },
            "Pacific/Easter": {
              long: ["Easter Island Standard Time", "Easter Island Summer Time"]
            },
            "America/Guayaquil": {
              long: ["Ecuador Time", "Ecuador Time"]
            },
            "Europe/Paris": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Andorra": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Tirane": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Vienna": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Sarajevo": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Brussels": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Zurich": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Prague": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Berlin": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Copenhagen": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Madrid": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Gibraltar": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Zagreb": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Budapest": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Rome": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Vaduz": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Luxembourg": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Monaco": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Podgorica": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Skopje": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Malta": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Amsterdam": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Oslo": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Warsaw": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Belgrade": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Stockholm": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Ljubljana": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Arctic/Longyearbyen": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Bratislava": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/San_Marino": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Africa/Tunis": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Vatican": {
              long: ["Central European Standard Time", "Central European Summer Time"]
            },
            "Europe/Bucharest": {
              long: ["Eastern European Standard Time", "Eastern European Summer Time"]
            },
            "Europe/Mariehamn": {
              long: ["Eastern European Standard Time", "Eastern European Summer Time"]
            },
            "Europe/Sofia": {
              long: ["Eastern European Standard Time", "Eastern European Summer Time"]
            },
            "Asia/Nicosia": {
              long: ["Eastern European Standard Time", "Eastern European Summer Time"]
            },
            "Africa/Cairo": {
              long: ["Eastern European Standard Time", "Eastern European Summer Time"]
            },
            "Europe/Helsinki": {
              long: ["Eastern European Standard Time", "Eastern European Summer Time"]
            },
            "Europe/Athens": {
              long: ["Eastern European Standard Time", "Eastern European Summer Time"]
            },
            "Asia/Beirut": {
              long: ["Eastern European Standard Time", "Eastern European Summer Time"]
            },
            "Europe/Minsk": {
              long: ["Further-eastern European Time", "Further-eastern European Time"]
            },
            "Europe/Kaliningrad": {
              long: ["Further-eastern European Time", "Further-eastern European Time"]
            },
            "Atlantic/Canary": {
              long: ["Western European Standard Time", "Western European Summer Time"]
            },
            "Atlantic/Faeroe": {
              long: ["Western European Standard Time", "Western European Summer Time"]
            },
            "Atlantic/Stanley": {
              long: ["Falkland Islands Standard Time", "Falkland Islands Summer Time"]
            },
            "Pacific/Fiji": {
              long: ["Fiji Standard Time", "Fiji Summer Time"]
            },
            "America/Cayenne": {
              long: ["French Guiana Time", "French Guiana Time"]
            },
            "Indian/Kerguelen": {
              long: ["French Southern & Antarctic Time", "French Southern & Antarctic Time"]
            },
            "Asia/Bishkek": {
              long: ["Kyrgyzstan Time", "Kyrgyzstan Time"]
            },
            "Pacific/Galapagos": {
              long: ["Galapagos Time", "Galapagos Time"]
            },
            "Pacific/Gambier": {
              long: ["Gambier Time", "Gambier Time"]
            },
            "Pacific/Tarawa": {
              long: ["Gilbert Islands Time", "Gilbert Islands Time"]
            },
            "Atlantic/Reykjavik": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Africa/Ouagadougou": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Africa/Abidjan": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Africa/Accra": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Africa/Banjul": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Africa/Conakry": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Africa/Bamako": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Africa/Nouakchott": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Atlantic/St_Helena": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Africa/Freetown": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Africa/Dakar": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "Africa/Lome": {
              long: ["Greenwich Mean Time", "Greenwich Mean Time"],
              short: ["GMT", "GMT"]
            },
            "America/Godthab": {
              long: ["West Greenland Standard Time", "West Greenland Summer Time"]
            },
            "America/Scoresbysund": {
              long: ["East Greenland Standard Time", "East Greenland Summer Time"]
            },
            "Asia/Dubai": {
              long: ["Gulf Standard Time", "Gulf Standard Time"]
            },
            "Asia/Muscat": {
              long: ["Gulf Standard Time", "Gulf Standard Time"]
            },
            "America/Guyana": {
              long: ["Guyana Time", "Guyana Time"]
            },
            "Pacific/Honolulu": {
              long: ["Hawaii-Aleutian Standard Time", "Hawaii-Aleutian Daylight Time"],
              short: ["HAST", "HADT"]
            },
            "Asia/Hong_Kong": {
              long: ["Hong Kong Standard Time", "Hong Kong Summer Time"]
            },
            "Asia/Hovd": {
              long: ["Hovd Standard Time", "Hovd Summer Time"]
            },
            "Asia/Calcutta": {
              long: ["India Standard Time", "India Standard Time"]
            },
            "Asia/Colombo": {
              long: ["Lanka Time", "Lanka Time"]
            },
            "Indian/Chagos": {
              long: ["Indian Ocean Time", "Indian Ocean Time"]
            },
            "Asia/Bangkok": {
              long: ["Indochina Time", "Indochina Time"]
            },
            "Asia/Phnom_Penh": {
              long: ["Indochina Time", "Indochina Time"]
            },
            "Asia/Vientiane": {
              long: ["Indochina Time", "Indochina Time"]
            },
            "Asia/Makassar": {
              long: ["Central Indonesia Time", "Central Indonesia Time"]
            },
            "Asia/Jayapura": {
              long: ["Eastern Indonesia Time", "Eastern Indonesia Time"]
            },
            "Asia/Jakarta": {
              long: ["Western Indonesia Time", "Western Indonesia Time"]
            },
            "Asia/Tehran": {
              long: ["Iran Standard Time", "Iran Daylight Time"]
            },
            "Asia/Irkutsk": {
              long: ["Irkutsk Standard Time", "Irkutsk Summer Time"]
            },
            "Asia/Jerusalem": {
              long: ["Israel Standard Time", "Israel Daylight Time"]
            },
            "Asia/Tokyo": {
              long: ["Japan Standard Time", "Japan Daylight Time"]
            },
            "Asia/Kamchatka": {
              long: ["Petropavlovsk-Kamchatski Standard Time", "Petropavlovsk-Kamchatski Summer Time"]
            },
            "Asia/Karachi": {
              long: ["Pakistan Standard Time", "Pakistan Summer Time"]
            },
            "Asia/Qyzylorda": {
              long: ["Qyzylorda Standard Time", "Qyzylorda Summer Time"]
            },
            "Asia/Seoul": {
              long: ["Korean Standard Time", "Korean Daylight Time"]
            },
            "Pacific/Kosrae": {
              long: ["Kosrae Time", "Kosrae Time"]
            },
            "Asia/Krasnoyarsk": {
              long: ["Krasnoyarsk Standard Time", "Krasnoyarsk Summer Time"]
            },
            "Europe/Samara": {
              long: ["Samara Standard Time", "Samara Summer Time"]
            },
            "Pacific/Kiritimati": {
              long: ["Line Islands Time", "Line Islands Time"]
            },
            "Australia/Lord_Howe": {
              long: ["Lord Howe Standard Time", "Lord Howe Daylight Time"]
            },
            "Asia/Macau": {
              long: ["Macao Standard Time", "Macao Summer Time"]
            },
            "Asia/Magadan": {
              long: ["Magadan Standard Time", "Magadan Summer Time"]
            },
            "Indian/Maldives": {
              long: ["Maldives Time", "Maldives Time"]
            },
            "Pacific/Marquesas": {
              long: ["Marquesas Time", "Marquesas Time"]
            },
            "Pacific/Majuro": {
              long: ["Marshall Islands Time", "Marshall Islands Time"]
            },
            "Indian/Mauritius": {
              long: ["Mauritius Standard Time", "Mauritius Summer Time"]
            },
            "Antarctica/Mawson": {
              long: ["Mawson Time", "Mawson Time"]
            },
            "America/Mazatlan": {
              long: ["Mexican Pacific Standard Time", "Mexican Pacific Daylight Time"]
            },
            "Asia/Ulaanbaatar": {
              long: ["Ulaanbaatar Standard Time", "Ulaanbaatar Summer Time"]
            },
            "Europe/Moscow": {
              long: ["Moscow Standard Time", "Moscow Summer Time"]
            },
            "Asia/Rangoon": {
              long: ["Myanmar Time", "Myanmar Time"]
            },
            "Pacific/Nauru": {
              long: ["Nauru Time", "Nauru Time"]
            },
            "Asia/Katmandu": {
              long: ["Nepal Time", "Nepal Time"]
            },
            "Pacific/Noumea": {
              long: ["New Caledonia Standard Time", "New Caledonia Summer Time"]
            },
            "Pacific/Auckland": {
              long: ["New Zealand Standard Time", "New Zealand Daylight Time"]
            },
            "Antarctica/McMurdo": {
              long: ["New Zealand Standard Time", "New Zealand Daylight Time"]
            },
            "America/St_Johns": {
              long: ["Newfoundland Standard Time", "Newfoundland Daylight Time"]
            },
            "Pacific/Niue": {
              long: ["Niue Time", "Niue Time"]
            },
            "Pacific/Norfolk": {
              long: ["Norfolk Island Standard Time", "Norfolk Island Daylight Time"]
            },
            "America/Noronha": {
              long: ["Fernando de Noronha Standard Time", "Fernando de Noronha Summer Time"]
            },
            "Asia/Novosibirsk": {
              long: ["Novosibirsk Standard Time", "Novosibirsk Summer Time"]
            },
            "Asia/Omsk": {
              long: ["Omsk Standard Time", "Omsk Summer Time"]
            },
            "Pacific/Palau": {
              long: ["Palau Time", "Palau Time"]
            },
            "Pacific/Port_Moresby": {
              long: ["Papua New Guinea Time", "Papua New Guinea Time"]
            },
            "America/Asuncion": {
              long: ["Paraguay Standard Time", "Paraguay Summer Time"]
            },
            "America/Lima": {
              long: ["Peru Standard Time", "Peru Summer Time"]
            },
            "Asia/Manila": {
              long: ["Philippine Standard Time", "Philippine Summer Time"]
            },
            "Pacific/Enderbury": {
              long: ["Phoenix Islands Time", "Phoenix Islands Time"]
            },
            "America/Miquelon": {
              long: ["St. Pierre & Miquelon Standard Time", "St. Pierre & Miquelon Daylight Time"]
            },
            "Pacific/Pitcairn": {
              long: ["Pitcairn Time", "Pitcairn Time"]
            },
            "Pacific/Ponape": {
              long: ["Ponape Time", "Ponape Time"]
            },
            "Asia/Pyongyang": {
              long: ["Pyongyang Time", "Pyongyang Time"]
            },
            "Indian/Reunion": {
              long: ["Réunion Time", "Réunion Time"]
            },
            "Antarctica/Rothera": {
              long: ["Rothera Time", "Rothera Time"]
            },
            "Asia/Sakhalin": {
              long: ["Sakhalin Standard Time", "Sakhalin Summer Time"]
            },
            "Pacific/Pago_Pago": {
              long: ["Samoa Standard Time", "Samoa Daylight Time"]
            },
            "Indian/Mahe": {
              long: ["Seychelles Time", "Seychelles Time"]
            },
            "Asia/Singapore": {
              long: ["Singapore Standard Time", "Singapore Standard Time"]
            },
            "Pacific/Guadalcanal": {
              long: ["Solomon Islands Time", "Solomon Islands Time"]
            },
            "Atlantic/South_Georgia": {
              long: ["South Georgia Time", "South Georgia Time"]
            },
            "Asia/Yekaterinburg": {
              long: ["Yekaterinburg Standard Time", "Yekaterinburg Summer Time"]
            },
            "Antarctica/Syowa": {
              long: ["Syowa Time", "Syowa Time"]
            },
            "Pacific/Tahiti": {
              long: ["Tahiti Time", "Tahiti Time"]
            },
            "Asia/Taipei": {
              long: ["Taipei Standard Time", "Taipei Daylight Time"]
            },
            "Asia/Tashkent": {
              long: ["Uzbekistan Standard Time", "Uzbekistan Summer Time"]
            },
            "Pacific/Fakaofo": {
              long: ["Tokelau Time", "Tokelau Time"]
            },
            "Pacific/Tongatapu": {
              long: ["Tonga Standard Time", "Tonga Summer Time"]
            },
            "Pacific/Truk": {
              long: ["Chuuk Time", "Chuuk Time"]
            },
            "Pacific/Funafuti": {
              long: ["Tuvalu Time", "Tuvalu Time"]
            },
            "America/Montevideo": {
              long: ["Uruguay Standard Time", "Uruguay Summer Time"]
            },
            "Pacific/Efate": {
              long: ["Vanuatu Standard Time", "Vanuatu Summer Time"]
            },
            "America/Caracas": {
              long: ["Venezuela Time", "Venezuela Time"]
            },
            "Asia/Vladivostok": {
              long: ["Vladivostok Standard Time", "Vladivostok Summer Time"]
            },
            "Europe/Volgograd": {
              long: ["Volgograd Standard Time", "Volgograd Summer Time"]
            },
            "Antarctica/Vostok": {
              long: ["Vostok Time", "Vostok Time"]
            },
            "Pacific/Wake": {
              long: ["Wake Island Time", "Wake Island Time"]
            },
            "Pacific/Wallis": {
              long: ["Wallis & Futuna Time", "Wallis & Futuna Time"]
            },
            "Asia/Yakutsk": {
              long: ["Yakutsk Standard Time", "Yakutsk Summer Time"]
            },
            "America/Whitehorse": {
              long: ["Yukon Time", "Yukon Time"]
            },
            UTC: {
              long: ["Coordinated Universal Time", "Coordinated Universal Time"],
              short: ["UTC", "UTC"]
            }
          },
          gmtFormat: "GMT{0}",
          hourFormat: "+HH:mm;-HH:mm",
          dateFormat: {
            full: "EEEE, MMMM d, y",
            long: "MMMM d, y",
            medium: "MMM d, y",
            short: "M/d/yy"
          },
          timeFormat: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a"
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
              Ed: "d E",
              Ehm: "E h:mm a",
              "Ehm-alt-ascii": "E h:mm a",
              EHm: "E HH:mm",
              Ehms: "E h:mm:ss a",
              "Ehms-alt-ascii": "E h:mm:ss a",
              EHms: "E HH:mm:ss",
              Gy: "y G",
              GyMd: "M/d/y G",
              GyMMM: "MMM y G",
              GyMMMd: "MMM d, y G",
              GyMMMEd: "E, MMM d, y G",
              h: "h a",
              "h-alt-ascii": "h a",
              H: "HH",
              hm: "h:mm a",
              "hm-alt-ascii": "h:mm a",
              Hm: "HH:mm",
              hms: "h:mm:ss a",
              "hms-alt-ascii": "h:mm:ss a",
              Hms: "HH:mm:ss",
              hmsv: "h:mm:ss a v",
              "hmsv-alt-ascii": "h:mm:ss a v",
              Hmsv: "HH:mm:ss v",
              hmv: "h:mm a v",
              "hmv-alt-ascii": "h:mm a v",
              Hmv: "HH:mm v",
              M: "L",
              Md: "M/d",
              MEd: "E, M/d",
              MMM: "LLL",
              MMMd: "MMM d",
              MMMEd: "E, MMM d",
              MMMMd: "MMMM d",
              ms: "mm:ss",
              y: "y",
              yM: "M/y",
              yMd: "M/d/y",
              yMEd: "E, M/d/y",
              yMMM: "MMM y",
              yMMMd: "MMM d, y",
              yMMMEd: "E, MMM d, y",
              yMMMM: "MMMM y",
              "EEEE, MMMM d, y": "EEEE, MMMM d, y",
              "MMMM d, y": "MMMM d, y",
              "MMM d, y": "MMM d, y",
              "M/d/yy": "M/d/yy",
              "h:mm:ss a zzzz": "h:mm:ss a zzzz",
              "h:mm:ss a zzzz": "h:mm:ss a zzzz",
              "h:mm:ss a z": "h:mm:ss a z",
              "h:mm:ss a z": "h:mm:ss a z",
              "h:mm:ss a": "h:mm:ss a",
              "h:mm:ss a": "h:mm:ss a",
              "h:mm a": "h:mm a",
              "h:mm a": "h:mm a",
              "EEEE, MMMM d, y, h:mm:ss a zzzz": "EEEE, MMMM d, y, h:mm:ss a zzzz",
              "MMMM d, y, h:mm:ss a zzzz": "MMMM d, y, h:mm:ss a zzzz",
              "MMM d, y, h:mm:ss a zzzz": "MMM d, y, h:mm:ss a zzzz",
              "M/d/yy, h:mm:ss a zzzz": "M/d/yy, h:mm:ss a zzzz",
              "d, h:mm:ss a zzzz": "d, h:mm:ss a zzzz",
              "E, h:mm:ss a zzzz": "ccc, h:mm:ss a zzzz",
              "Ed, h:mm:ss a zzzz": "d E, h:mm:ss a zzzz",
              "Gy, h:mm:ss a zzzz": "y G, h:mm:ss a zzzz",
              "GyMd, h:mm:ss a zzzz": "M/d/y G, h:mm:ss a zzzz",
              "GyMMM, h:mm:ss a zzzz": "MMM y G, h:mm:ss a zzzz",
              "GyMMMd, h:mm:ss a zzzz": "MMM d, y G, h:mm:ss a zzzz",
              "GyMMMEd, h:mm:ss a zzzz": "E, MMM d, y G, h:mm:ss a zzzz",
              "M, h:mm:ss a zzzz": "L, h:mm:ss a zzzz",
              "Md, h:mm:ss a zzzz": "M/d, h:mm:ss a zzzz",
              "MEd, h:mm:ss a zzzz": "E, M/d, h:mm:ss a zzzz",
              "MMM, h:mm:ss a zzzz": "LLL, h:mm:ss a zzzz",
              "MMMd, h:mm:ss a zzzz": "MMM d, h:mm:ss a zzzz",
              "MMMEd, h:mm:ss a zzzz": "E, MMM d, h:mm:ss a zzzz",
              "MMMMd, h:mm:ss a zzzz": "MMMM d, h:mm:ss a zzzz",
              "y, h:mm:ss a zzzz": "y, h:mm:ss a zzzz",
              "yM, h:mm:ss a zzzz": "M/y, h:mm:ss a zzzz",
              "yMd, h:mm:ss a zzzz": "M/d/y, h:mm:ss a zzzz",
              "yMEd, h:mm:ss a zzzz": "E, M/d/y, h:mm:ss a zzzz",
              "yMMM, h:mm:ss a zzzz": "MMM y, h:mm:ss a zzzz",
              "yMMMd, h:mm:ss a zzzz": "MMM d, y, h:mm:ss a zzzz",
              "yMMMEd, h:mm:ss a zzzz": "E, MMM d, y, h:mm:ss a zzzz",
              "yMMMM, h:mm:ss a zzzz": "MMMM y, h:mm:ss a zzzz",
              "EEEE, MMMM d, y, h:mm:ss a zzzz": "EEEE, MMMM d, y, h:mm:ss a zzzz",
              "MMMM d, y, h:mm:ss a zzzz": "MMMM d, y, h:mm:ss a zzzz",
              "MMM d, y, h:mm:ss a zzzz": "MMM d, y, h:mm:ss a zzzz",
              "M/d/yy, h:mm:ss a zzzz": "M/d/yy, h:mm:ss a zzzz",
              "d, h:mm:ss a zzzz": "d, h:mm:ss a zzzz",
              "E, h:mm:ss a zzzz": "ccc, h:mm:ss a zzzz",
              "Ed, h:mm:ss a zzzz": "d E, h:mm:ss a zzzz",
              "Gy, h:mm:ss a zzzz": "y G, h:mm:ss a zzzz",
              "GyMd, h:mm:ss a zzzz": "M/d/y G, h:mm:ss a zzzz",
              "GyMMM, h:mm:ss a zzzz": "MMM y G, h:mm:ss a zzzz",
              "GyMMMd, h:mm:ss a zzzz": "MMM d, y G, h:mm:ss a zzzz",
              "GyMMMEd, h:mm:ss a zzzz": "E, MMM d, y G, h:mm:ss a zzzz",
              "M, h:mm:ss a zzzz": "L, h:mm:ss a zzzz",
              "Md, h:mm:ss a zzzz": "M/d, h:mm:ss a zzzz",
              "MEd, h:mm:ss a zzzz": "E, M/d, h:mm:ss a zzzz",
              "MMM, h:mm:ss a zzzz": "LLL, h:mm:ss a zzzz",
              "MMMd, h:mm:ss a zzzz": "MMM d, h:mm:ss a zzzz",
              "MMMEd, h:mm:ss a zzzz": "E, MMM d, h:mm:ss a zzzz",
              "MMMMd, h:mm:ss a zzzz": "MMMM d, h:mm:ss a zzzz",
              "y, h:mm:ss a zzzz": "y, h:mm:ss a zzzz",
              "yM, h:mm:ss a zzzz": "M/y, h:mm:ss a zzzz",
              "yMd, h:mm:ss a zzzz": "M/d/y, h:mm:ss a zzzz",
              "yMEd, h:mm:ss a zzzz": "E, M/d/y, h:mm:ss a zzzz",
              "yMMM, h:mm:ss a zzzz": "MMM y, h:mm:ss a zzzz",
              "yMMMd, h:mm:ss a zzzz": "MMM d, y, h:mm:ss a zzzz",
              "yMMMEd, h:mm:ss a zzzz": "E, MMM d, y, h:mm:ss a zzzz",
              "yMMMM, h:mm:ss a zzzz": "MMMM y, h:mm:ss a zzzz",
              "EEEE, MMMM d, y, h:mm:ss a z": "EEEE, MMMM d, y, h:mm:ss a z",
              "MMMM d, y, h:mm:ss a z": "MMMM d, y, h:mm:ss a z",
              "MMM d, y, h:mm:ss a z": "MMM d, y, h:mm:ss a z",
              "M/d/yy, h:mm:ss a z": "M/d/yy, h:mm:ss a z",
              "d, h:mm:ss a z": "d, h:mm:ss a z",
              "E, h:mm:ss a z": "ccc, h:mm:ss a z",
              "Ed, h:mm:ss a z": "d E, h:mm:ss a z",
              "Gy, h:mm:ss a z": "y G, h:mm:ss a z",
              "GyMd, h:mm:ss a z": "M/d/y G, h:mm:ss a z",
              "GyMMM, h:mm:ss a z": "MMM y G, h:mm:ss a z",
              "GyMMMd, h:mm:ss a z": "MMM d, y G, h:mm:ss a z",
              "GyMMMEd, h:mm:ss a z": "E, MMM d, y G, h:mm:ss a z",
              "M, h:mm:ss a z": "L, h:mm:ss a z",
              "Md, h:mm:ss a z": "M/d, h:mm:ss a z",
              "MEd, h:mm:ss a z": "E, M/d, h:mm:ss a z",
              "MMM, h:mm:ss a z": "LLL, h:mm:ss a z",
              "MMMd, h:mm:ss a z": "MMM d, h:mm:ss a z",
              "MMMEd, h:mm:ss a z": "E, MMM d, h:mm:ss a z",
              "MMMMd, h:mm:ss a z": "MMMM d, h:mm:ss a z",
              "y, h:mm:ss a z": "y, h:mm:ss a z",
              "yM, h:mm:ss a z": "M/y, h:mm:ss a z",
              "yMd, h:mm:ss a z": "M/d/y, h:mm:ss a z",
              "yMEd, h:mm:ss a z": "E, M/d/y, h:mm:ss a z",
              "yMMM, h:mm:ss a z": "MMM y, h:mm:ss a z",
              "yMMMd, h:mm:ss a z": "MMM d, y, h:mm:ss a z",
              "yMMMEd, h:mm:ss a z": "E, MMM d, y, h:mm:ss a z",
              "yMMMM, h:mm:ss a z": "MMMM y, h:mm:ss a z",
              "EEEE, MMMM d, y, h:mm:ss a z": "EEEE, MMMM d, y, h:mm:ss a z",
              "MMMM d, y, h:mm:ss a z": "MMMM d, y, h:mm:ss a z",
              "MMM d, y, h:mm:ss a z": "MMM d, y, h:mm:ss a z",
              "M/d/yy, h:mm:ss a z": "M/d/yy, h:mm:ss a z",
              "d, h:mm:ss a z": "d, h:mm:ss a z",
              "E, h:mm:ss a z": "ccc, h:mm:ss a z",
              "Ed, h:mm:ss a z": "d E, h:mm:ss a z",
              "Gy, h:mm:ss a z": "y G, h:mm:ss a z",
              "GyMd, h:mm:ss a z": "M/d/y G, h:mm:ss a z",
              "GyMMM, h:mm:ss a z": "MMM y G, h:mm:ss a z",
              "GyMMMd, h:mm:ss a z": "MMM d, y G, h:mm:ss a z",
              "GyMMMEd, h:mm:ss a z": "E, MMM d, y G, h:mm:ss a z",
              "M, h:mm:ss a z": "L, h:mm:ss a z",
              "Md, h:mm:ss a z": "M/d, h:mm:ss a z",
              "MEd, h:mm:ss a z": "E, M/d, h:mm:ss a z",
              "MMM, h:mm:ss a z": "LLL, h:mm:ss a z",
              "MMMd, h:mm:ss a z": "MMM d, h:mm:ss a z",
              "MMMEd, h:mm:ss a z": "E, MMM d, h:mm:ss a z",
              "MMMMd, h:mm:ss a z": "MMMM d, h:mm:ss a z",
              "y, h:mm:ss a z": "y, h:mm:ss a z",
              "yM, h:mm:ss a z": "M/y, h:mm:ss a z",
              "yMd, h:mm:ss a z": "M/d/y, h:mm:ss a z",
              "yMEd, h:mm:ss a z": "E, M/d/y, h:mm:ss a z",
              "yMMM, h:mm:ss a z": "MMM y, h:mm:ss a z",
              "yMMMd, h:mm:ss a z": "MMM d, y, h:mm:ss a z",
              "yMMMEd, h:mm:ss a z": "E, MMM d, y, h:mm:ss a z",
              "yMMMM, h:mm:ss a z": "MMMM y, h:mm:ss a z",
              "EEEE, MMMM d, y, h:mm:ss a": "EEEE, MMMM d, y, h:mm:ss a",
              "MMMM d, y, h:mm:ss a": "MMMM d, y, h:mm:ss a",
              "MMM d, y, h:mm:ss a": "MMM d, y, h:mm:ss a",
              "M/d/yy, h:mm:ss a": "M/d/yy, h:mm:ss a",
              "d, h:mm:ss a": "d, h:mm:ss a",
              "E, h:mm:ss a": "ccc, h:mm:ss a",
              "Ed, h:mm:ss a": "d E, h:mm:ss a",
              "Gy, h:mm:ss a": "y G, h:mm:ss a",
              "GyMd, h:mm:ss a": "M/d/y G, h:mm:ss a",
              "GyMMM, h:mm:ss a": "MMM y G, h:mm:ss a",
              "GyMMMd, h:mm:ss a": "MMM d, y G, h:mm:ss a",
              "GyMMMEd, h:mm:ss a": "E, MMM d, y G, h:mm:ss a",
              "M, h:mm:ss a": "L, h:mm:ss a",
              "Md, h:mm:ss a": "M/d, h:mm:ss a",
              "MEd, h:mm:ss a": "E, M/d, h:mm:ss a",
              "MMM, h:mm:ss a": "LLL, h:mm:ss a",
              "MMMd, h:mm:ss a": "MMM d, h:mm:ss a",
              "MMMEd, h:mm:ss a": "E, MMM d, h:mm:ss a",
              "MMMMd, h:mm:ss a": "MMMM d, h:mm:ss a",
              "y, h:mm:ss a": "y, h:mm:ss a",
              "yM, h:mm:ss a": "M/y, h:mm:ss a",
              "yMd, h:mm:ss a": "M/d/y, h:mm:ss a",
              "yMEd, h:mm:ss a": "E, M/d/y, h:mm:ss a",
              "yMMM, h:mm:ss a": "MMM y, h:mm:ss a",
              "yMMMd, h:mm:ss a": "MMM d, y, h:mm:ss a",
              "yMMMEd, h:mm:ss a": "E, MMM d, y, h:mm:ss a",
              "yMMMM, h:mm:ss a": "MMMM y, h:mm:ss a",
              "EEEE, MMMM d, y, h:mm:ss a": "EEEE, MMMM d, y, h:mm:ss a",
              "MMMM d, y, h:mm:ss a": "MMMM d, y, h:mm:ss a",
              "MMM d, y, h:mm:ss a": "MMM d, y, h:mm:ss a",
              "M/d/yy, h:mm:ss a": "M/d/yy, h:mm:ss a",
              "d, h:mm:ss a": "d, h:mm:ss a",
              "E, h:mm:ss a": "ccc, h:mm:ss a",
              "Ed, h:mm:ss a": "d E, h:mm:ss a",
              "Gy, h:mm:ss a": "y G, h:mm:ss a",
              "GyMd, h:mm:ss a": "M/d/y G, h:mm:ss a",
              "GyMMM, h:mm:ss a": "MMM y G, h:mm:ss a",
              "GyMMMd, h:mm:ss a": "MMM d, y G, h:mm:ss a",
              "GyMMMEd, h:mm:ss a": "E, MMM d, y G, h:mm:ss a",
              "M, h:mm:ss a": "L, h:mm:ss a",
              "Md, h:mm:ss a": "M/d, h:mm:ss a",
              "MEd, h:mm:ss a": "E, M/d, h:mm:ss a",
              "MMM, h:mm:ss a": "LLL, h:mm:ss a",
              "MMMd, h:mm:ss a": "MMM d, h:mm:ss a",
              "MMMEd, h:mm:ss a": "E, MMM d, h:mm:ss a",
              "MMMMd, h:mm:ss a": "MMMM d, h:mm:ss a",
              "y, h:mm:ss a": "y, h:mm:ss a",
              "yM, h:mm:ss a": "M/y, h:mm:ss a",
              "yMd, h:mm:ss a": "M/d/y, h:mm:ss a",
              "yMEd, h:mm:ss a": "E, M/d/y, h:mm:ss a",
              "yMMM, h:mm:ss a": "MMM y, h:mm:ss a",
              "yMMMd, h:mm:ss a": "MMM d, y, h:mm:ss a",
              "yMMMEd, h:mm:ss a": "E, MMM d, y, h:mm:ss a",
              "yMMMM, h:mm:ss a": "MMMM y, h:mm:ss a",
              "EEEE, MMMM d, y, h:mm a": "EEEE, MMMM d, y, h:mm a",
              "MMMM d, y, h:mm a": "MMMM d, y, h:mm a",
              "MMM d, y, h:mm a": "MMM d, y, h:mm a",
              "M/d/yy, h:mm a": "M/d/yy, h:mm a",
              "d, h:mm a": "d, h:mm a",
              "E, h:mm a": "ccc, h:mm a",
              "Ed, h:mm a": "d E, h:mm a",
              "Gy, h:mm a": "y G, h:mm a",
              "GyMd, h:mm a": "M/d/y G, h:mm a",
              "GyMMM, h:mm a": "MMM y G, h:mm a",
              "GyMMMd, h:mm a": "MMM d, y G, h:mm a",
              "GyMMMEd, h:mm a": "E, MMM d, y G, h:mm a",
              "M, h:mm a": "L, h:mm a",
              "Md, h:mm a": "M/d, h:mm a",
              "MEd, h:mm a": "E, M/d, h:mm a",
              "MMM, h:mm a": "LLL, h:mm a",
              "MMMd, h:mm a": "MMM d, h:mm a",
              "MMMEd, h:mm a": "E, MMM d, h:mm a",
              "MMMMd, h:mm a": "MMMM d, h:mm a",
              "y, h:mm a": "y, h:mm a",
              "yM, h:mm a": "M/y, h:mm a",
              "yMd, h:mm a": "M/d/y, h:mm a",
              "yMEd, h:mm a": "E, M/d/y, h:mm a",
              "yMMM, h:mm a": "MMM y, h:mm a",
              "yMMMd, h:mm a": "MMM d, y, h:mm a",
              "yMMMEd, h:mm a": "E, MMM d, y, h:mm a",
              "yMMMM, h:mm a": "MMMM y, h:mm a",
              "EEEE, MMMM d, y, h:mm a": "EEEE, MMMM d, y, h:mm a",
              "MMMM d, y, h:mm a": "MMMM d, y, h:mm a",
              "MMM d, y, h:mm a": "MMM d, y, h:mm a",
              "M/d/yy, h:mm a": "M/d/yy, h:mm a",
              "d, h:mm a": "d, h:mm a",
              "E, h:mm a": "ccc, h:mm a",
              "Ed, h:mm a": "d E, h:mm a",
              "Gy, h:mm a": "y G, h:mm a",
              "GyMd, h:mm a": "M/d/y G, h:mm a",
              "GyMMM, h:mm a": "MMM y G, h:mm a",
              "GyMMMd, h:mm a": "MMM d, y G, h:mm a",
              "GyMMMEd, h:mm a": "E, MMM d, y G, h:mm a",
              "M, h:mm a": "L, h:mm a",
              "Md, h:mm a": "M/d, h:mm a",
              "MEd, h:mm a": "E, M/d, h:mm a",
              "MMM, h:mm a": "LLL, h:mm a",
              "MMMd, h:mm a": "MMM d, h:mm a",
              "MMMEd, h:mm a": "E, MMM d, h:mm a",
              "MMMMd, h:mm a": "MMMM d, h:mm a",
              "y, h:mm a": "y, h:mm a",
              "yM, h:mm a": "M/y, h:mm a",
              "yMd, h:mm a": "M/d/y, h:mm a",
              "yMEd, h:mm a": "E, M/d/y, h:mm a",
              "yMMM, h:mm a": "MMM y, h:mm a",
              "yMMMd, h:mm a": "MMM d, y, h:mm a",
              "yMMMEd, h:mm a": "E, MMM d, y, h:mm a",
              "yMMMM, h:mm a": "MMMM y, h:mm a",
              "EEEE, MMMM d, y, Bh": "EEEE, MMMM d, y, h B",
              "MMMM d, y, Bh": "MMMM d, y, h B",
              "MMM d, y, Bh": "MMM d, y, h B",
              "M/d/yy, Bh": "M/d/yy, h B",
              "d, Bh": "d, h B",
              "E, Bh": "ccc, h B",
              "Ed, Bh": "d E, h B",
              "Gy, Bh": "y G, h B",
              "GyMd, Bh": "M/d/y G, h B",
              "GyMMM, Bh": "MMM y G, h B",
              "GyMMMd, Bh": "MMM d, y G, h B",
              "GyMMMEd, Bh": "E, MMM d, y G, h B",
              "M, Bh": "L, h B",
              "Md, Bh": "M/d, h B",
              "MEd, Bh": "E, M/d, h B",
              "MMM, Bh": "LLL, h B",
              "MMMd, Bh": "MMM d, h B",
              "MMMEd, Bh": "E, MMM d, h B",
              "MMMMd, Bh": "MMMM d, h B",
              "y, Bh": "y, h B",
              "yM, Bh": "M/y, h B",
              "yMd, Bh": "M/d/y, h B",
              "yMEd, Bh": "E, M/d/y, h B",
              "yMMM, Bh": "MMM y, h B",
              "yMMMd, Bh": "MMM d, y, h B",
              "yMMMEd, Bh": "E, MMM d, y, h B",
              "yMMMM, Bh": "MMMM y, h B",
              "EEEE, MMMM d, y, Bhm": "EEEE, MMMM d, y, h:mm B",
              "MMMM d, y, Bhm": "MMMM d, y, h:mm B",
              "MMM d, y, Bhm": "MMM d, y, h:mm B",
              "M/d/yy, Bhm": "M/d/yy, h:mm B",
              "d, Bhm": "d, h:mm B",
              "E, Bhm": "ccc, h:mm B",
              "Ed, Bhm": "d E, h:mm B",
              "Gy, Bhm": "y G, h:mm B",
              "GyMd, Bhm": "M/d/y G, h:mm B",
              "GyMMM, Bhm": "MMM y G, h:mm B",
              "GyMMMd, Bhm": "MMM d, y G, h:mm B",
              "GyMMMEd, Bhm": "E, MMM d, y G, h:mm B",
              "M, Bhm": "L, h:mm B",
              "Md, Bhm": "M/d, h:mm B",
              "MEd, Bhm": "E, M/d, h:mm B",
              "MMM, Bhm": "LLL, h:mm B",
              "MMMd, Bhm": "MMM d, h:mm B",
              "MMMEd, Bhm": "E, MMM d, h:mm B",
              "MMMMd, Bhm": "MMMM d, h:mm B",
              "y, Bhm": "y, h:mm B",
              "yM, Bhm": "M/y, h:mm B",
              "yMd, Bhm": "M/d/y, h:mm B",
              "yMEd, Bhm": "E, M/d/y, h:mm B",
              "yMMM, Bhm": "MMM y, h:mm B",
              "yMMMd, Bhm": "MMM d, y, h:mm B",
              "yMMMEd, Bhm": "E, MMM d, y, h:mm B",
              "yMMMM, Bhm": "MMMM y, h:mm B",
              "EEEE, MMMM d, y, Bhms": "EEEE, MMMM d, y, h:mm:ss B",
              "MMMM d, y, Bhms": "MMMM d, y, h:mm:ss B",
              "MMM d, y, Bhms": "MMM d, y, h:mm:ss B",
              "M/d/yy, Bhms": "M/d/yy, h:mm:ss B",
              "d, Bhms": "d, h:mm:ss B",
              "E, Bhms": "ccc, h:mm:ss B",
              "Ed, Bhms": "d E, h:mm:ss B",
              "Gy, Bhms": "y G, h:mm:ss B",
              "GyMd, Bhms": "M/d/y G, h:mm:ss B",
              "GyMMM, Bhms": "MMM y G, h:mm:ss B",
              "GyMMMd, Bhms": "MMM d, y G, h:mm:ss B",
              "GyMMMEd, Bhms": "E, MMM d, y G, h:mm:ss B",
              "M, Bhms": "L, h:mm:ss B",
              "Md, Bhms": "M/d, h:mm:ss B",
              "MEd, Bhms": "E, M/d, h:mm:ss B",
              "MMM, Bhms": "LLL, h:mm:ss B",
              "MMMd, Bhms": "MMM d, h:mm:ss B",
              "MMMEd, Bhms": "E, MMM d, h:mm:ss B",
              "MMMMd, Bhms": "MMMM d, h:mm:ss B",
              "y, Bhms": "y, h:mm:ss B",
              "yM, Bhms": "M/y, h:mm:ss B",
              "yMd, Bhms": "M/d/y, h:mm:ss B",
              "yMEd, Bhms": "E, M/d/y, h:mm:ss B",
              "yMMM, Bhms": "MMM y, h:mm:ss B",
              "yMMMd, Bhms": "MMM d, y, h:mm:ss B",
              "yMMMEd, Bhms": "E, MMM d, y, h:mm:ss B",
              "yMMMM, Bhms": "MMMM y, h:mm:ss B",
              "EEEE, MMMM d, y, h": "EEEE, MMMM d, y, h a",
              "MMMM d, y, h": "MMMM d, y, h a",
              "MMM d, y, h": "MMM d, y, h a",
              "M/d/yy, h": "M/d/yy, h a",
              "d, h": "d, h a",
              "E, h": "ccc, h a",
              "Ed, h": "d E, h a",
              "Gy, h": "y G, h a",
              "GyMd, h": "M/d/y G, h a",
              "GyMMM, h": "MMM y G, h a",
              "GyMMMd, h": "MMM d, y G, h a",
              "GyMMMEd, h": "E, MMM d, y G, h a",
              "M, h": "L, h a",
              "Md, h": "M/d, h a",
              "MEd, h": "E, M/d, h a",
              "MMM, h": "LLL, h a",
              "MMMd, h": "MMM d, h a",
              "MMMEd, h": "E, MMM d, h a",
              "MMMMd, h": "MMMM d, h a",
              "y, h": "y, h a",
              "yM, h": "M/y, h a",
              "yMd, h": "M/d/y, h a",
              "yMEd, h": "E, M/d/y, h a",
              "yMMM, h": "MMM y, h a",
              "yMMMd, h": "MMM d, y, h a",
              "yMMMEd, h": "E, MMM d, y, h a",
              "yMMMM, h": "MMMM y, h a",
              "EEEE, MMMM d, y, H": "EEEE, MMMM d, y, HH",
              "MMMM d, y, H": "MMMM d, y, HH",
              "MMM d, y, H": "MMM d, y, HH",
              "M/d/yy, H": "M/d/yy, HH",
              "d, H": "d, HH",
              "E, H": "ccc, HH",
              "Ed, H": "d E, HH",
              "Gy, H": "y G, HH",
              "GyMd, H": "M/d/y G, HH",
              "GyMMM, H": "MMM y G, HH",
              "GyMMMd, H": "MMM d, y G, HH",
              "GyMMMEd, H": "E, MMM d, y G, HH",
              "M, H": "L, HH",
              "Md, H": "M/d, HH",
              "MEd, H": "E, M/d, HH",
              "MMM, H": "LLL, HH",
              "MMMd, H": "MMM d, HH",
              "MMMEd, H": "E, MMM d, HH",
              "MMMMd, H": "MMMM d, HH",
              "y, H": "y, HH",
              "yM, H": "M/y, HH",
              "yMd, H": "M/d/y, HH",
              "yMEd, H": "E, M/d/y, HH",
              "yMMM, H": "MMM y, HH",
              "yMMMd, H": "MMM d, y, HH",
              "yMMMEd, H": "E, MMM d, y, HH",
              "yMMMM, H": "MMMM y, HH",
              "EEEE, MMMM d, y, hm": "EEEE, MMMM d, y, h:mm a",
              "MMMM d, y, hm": "MMMM d, y, h:mm a",
              "MMM d, y, hm": "MMM d, y, h:mm a",
              "M/d/yy, hm": "M/d/yy, h:mm a",
              "d, hm": "d, h:mm a",
              "E, hm": "ccc, h:mm a",
              "Ed, hm": "d E, h:mm a",
              "Gy, hm": "y G, h:mm a",
              "GyMd, hm": "M/d/y G, h:mm a",
              "GyMMM, hm": "MMM y G, h:mm a",
              "GyMMMd, hm": "MMM d, y G, h:mm a",
              "GyMMMEd, hm": "E, MMM d, y G, h:mm a",
              "M, hm": "L, h:mm a",
              "Md, hm": "M/d, h:mm a",
              "MEd, hm": "E, M/d, h:mm a",
              "MMM, hm": "LLL, h:mm a",
              "MMMd, hm": "MMM d, h:mm a",
              "MMMEd, hm": "E, MMM d, h:mm a",
              "MMMMd, hm": "MMMM d, h:mm a",
              "y, hm": "y, h:mm a",
              "yM, hm": "M/y, h:mm a",
              "yMd, hm": "M/d/y, h:mm a",
              "yMEd, hm": "E, M/d/y, h:mm a",
              "yMMM, hm": "MMM y, h:mm a",
              "yMMMd, hm": "MMM d, y, h:mm a",
              "yMMMEd, hm": "E, MMM d, y, h:mm a",
              "yMMMM, hm": "MMMM y, h:mm a",
              "EEEE, MMMM d, y, Hm": "EEEE, MMMM d, y, HH:mm",
              "MMMM d, y, Hm": "MMMM d, y, HH:mm",
              "MMM d, y, Hm": "MMM d, y, HH:mm",
              "M/d/yy, Hm": "M/d/yy, HH:mm",
              "d, Hm": "d, HH:mm",
              "E, Hm": "ccc, HH:mm",
              "Ed, Hm": "d E, HH:mm",
              "Gy, Hm": "y G, HH:mm",
              "GyMd, Hm": "M/d/y G, HH:mm",
              "GyMMM, Hm": "MMM y G, HH:mm",
              "GyMMMd, Hm": "MMM d, y G, HH:mm",
              "GyMMMEd, Hm": "E, MMM d, y G, HH:mm",
              "M, Hm": "L, HH:mm",
              "Md, Hm": "M/d, HH:mm",
              "MEd, Hm": "E, M/d, HH:mm",
              "MMM, Hm": "LLL, HH:mm",
              "MMMd, Hm": "MMM d, HH:mm",
              "MMMEd, Hm": "E, MMM d, HH:mm",
              "MMMMd, Hm": "MMMM d, HH:mm",
              "y, Hm": "y, HH:mm",
              "yM, Hm": "M/y, HH:mm",
              "yMd, Hm": "M/d/y, HH:mm",
              "yMEd, Hm": "E, M/d/y, HH:mm",
              "yMMM, Hm": "MMM y, HH:mm",
              "yMMMd, Hm": "MMM d, y, HH:mm",
              "yMMMEd, Hm": "E, MMM d, y, HH:mm",
              "yMMMM, Hm": "MMMM y, HH:mm",
              "EEEE, MMMM d, y, hms": "EEEE, MMMM d, y, h:mm:ss a",
              "MMMM d, y, hms": "MMMM d, y, h:mm:ss a",
              "MMM d, y, hms": "MMM d, y, h:mm:ss a",
              "M/d/yy, hms": "M/d/yy, h:mm:ss a",
              "d, hms": "d, h:mm:ss a",
              "E, hms": "ccc, h:mm:ss a",
              "Ed, hms": "d E, h:mm:ss a",
              "Gy, hms": "y G, h:mm:ss a",
              "GyMd, hms": "M/d/y G, h:mm:ss a",
              "GyMMM, hms": "MMM y G, h:mm:ss a",
              "GyMMMd, hms": "MMM d, y G, h:mm:ss a",
              "GyMMMEd, hms": "E, MMM d, y G, h:mm:ss a",
              "M, hms": "L, h:mm:ss a",
              "Md, hms": "M/d, h:mm:ss a",
              "MEd, hms": "E, M/d, h:mm:ss a",
              "MMM, hms": "LLL, h:mm:ss a",
              "MMMd, hms": "MMM d, h:mm:ss a",
              "MMMEd, hms": "E, MMM d, h:mm:ss a",
              "MMMMd, hms": "MMMM d, h:mm:ss a",
              "y, hms": "y, h:mm:ss a",
              "yM, hms": "M/y, h:mm:ss a",
              "yMd, hms": "M/d/y, h:mm:ss a",
              "yMEd, hms": "E, M/d/y, h:mm:ss a",
              "yMMM, hms": "MMM y, h:mm:ss a",
              "yMMMd, hms": "MMM d, y, h:mm:ss a",
              "yMMMEd, hms": "E, MMM d, y, h:mm:ss a",
              "yMMMM, hms": "MMMM y, h:mm:ss a",
              "EEEE, MMMM d, y, Hms": "EEEE, MMMM d, y, HH:mm:ss",
              "MMMM d, y, Hms": "MMMM d, y, HH:mm:ss",
              "MMM d, y, Hms": "MMM d, y, HH:mm:ss",
              "M/d/yy, Hms": "M/d/yy, HH:mm:ss",
              "d, Hms": "d, HH:mm:ss",
              "E, Hms": "ccc, HH:mm:ss",
              "Ed, Hms": "d E, HH:mm:ss",
              "Gy, Hms": "y G, HH:mm:ss",
              "GyMd, Hms": "M/d/y G, HH:mm:ss",
              "GyMMM, Hms": "MMM y G, HH:mm:ss",
              "GyMMMd, Hms": "MMM d, y G, HH:mm:ss",
              "GyMMMEd, Hms": "E, MMM d, y G, HH:mm:ss",
              "M, Hms": "L, HH:mm:ss",
              "Md, Hms": "M/d, HH:mm:ss",
              "MEd, Hms": "E, M/d, HH:mm:ss",
              "MMM, Hms": "LLL, HH:mm:ss",
              "MMMd, Hms": "MMM d, HH:mm:ss",
              "MMMEd, Hms": "E, MMM d, HH:mm:ss",
              "MMMMd, Hms": "MMMM d, HH:mm:ss",
              "y, Hms": "y, HH:mm:ss",
              "yM, Hms": "M/y, HH:mm:ss",
              "yMd, Hms": "M/d/y, HH:mm:ss",
              "yMEd, Hms": "E, M/d/y, HH:mm:ss",
              "yMMM, Hms": "MMM y, HH:mm:ss",
              "yMMMd, Hms": "MMM d, y, HH:mm:ss",
              "yMMMEd, Hms": "E, MMM d, y, HH:mm:ss",
              "yMMMM, Hms": "MMMM y, HH:mm:ss",
              "EEEE, MMMM d, y, hmsv": "EEEE, MMMM d, y, h:mm:ss a v",
              "MMMM d, y, hmsv": "MMMM d, y, h:mm:ss a v",
              "MMM d, y, hmsv": "MMM d, y, h:mm:ss a v",
              "M/d/yy, hmsv": "M/d/yy, h:mm:ss a v",
              "d, hmsv": "d, h:mm:ss a v",
              "E, hmsv": "ccc, h:mm:ss a v",
              "Ed, hmsv": "d E, h:mm:ss a v",
              "Gy, hmsv": "y G, h:mm:ss a v",
              "GyMd, hmsv": "M/d/y G, h:mm:ss a v",
              "GyMMM, hmsv": "MMM y G, h:mm:ss a v",
              "GyMMMd, hmsv": "MMM d, y G, h:mm:ss a v",
              "GyMMMEd, hmsv": "E, MMM d, y G, h:mm:ss a v",
              "M, hmsv": "L, h:mm:ss a v",
              "Md, hmsv": "M/d, h:mm:ss a v",
              "MEd, hmsv": "E, M/d, h:mm:ss a v",
              "MMM, hmsv": "LLL, h:mm:ss a v",
              "MMMd, hmsv": "MMM d, h:mm:ss a v",
              "MMMEd, hmsv": "E, MMM d, h:mm:ss a v",
              "MMMMd, hmsv": "MMMM d, h:mm:ss a v",
              "y, hmsv": "y, h:mm:ss a v",
              "yM, hmsv": "M/y, h:mm:ss a v",
              "yMd, hmsv": "M/d/y, h:mm:ss a v",
              "yMEd, hmsv": "E, M/d/y, h:mm:ss a v",
              "yMMM, hmsv": "MMM y, h:mm:ss a v",
              "yMMMd, hmsv": "MMM d, y, h:mm:ss a v",
              "yMMMEd, hmsv": "E, MMM d, y, h:mm:ss a v",
              "yMMMM, hmsv": "MMMM y, h:mm:ss a v",
              "EEEE, MMMM d, y, Hmsv": "EEEE, MMMM d, y, HH:mm:ss v",
              "MMMM d, y, Hmsv": "MMMM d, y, HH:mm:ss v",
              "MMM d, y, Hmsv": "MMM d, y, HH:mm:ss v",
              "M/d/yy, Hmsv": "M/d/yy, HH:mm:ss v",
              "d, Hmsv": "d, HH:mm:ss v",
              "E, Hmsv": "ccc, HH:mm:ss v",
              "Ed, Hmsv": "d E, HH:mm:ss v",
              "Gy, Hmsv": "y G, HH:mm:ss v",
              "GyMd, Hmsv": "M/d/y G, HH:mm:ss v",
              "GyMMM, Hmsv": "MMM y G, HH:mm:ss v",
              "GyMMMd, Hmsv": "MMM d, y G, HH:mm:ss v",
              "GyMMMEd, Hmsv": "E, MMM d, y G, HH:mm:ss v",
              "M, Hmsv": "L, HH:mm:ss v",
              "Md, Hmsv": "M/d, HH:mm:ss v",
              "MEd, Hmsv": "E, M/d, HH:mm:ss v",
              "MMM, Hmsv": "LLL, HH:mm:ss v",
              "MMMd, Hmsv": "MMM d, HH:mm:ss v",
              "MMMEd, Hmsv": "E, MMM d, HH:mm:ss v",
              "MMMMd, Hmsv": "MMMM d, HH:mm:ss v",
              "y, Hmsv": "y, HH:mm:ss v",
              "yM, Hmsv": "M/y, HH:mm:ss v",
              "yMd, Hmsv": "M/d/y, HH:mm:ss v",
              "yMEd, Hmsv": "E, M/d/y, HH:mm:ss v",
              "yMMM, Hmsv": "MMM y, HH:mm:ss v",
              "yMMMd, Hmsv": "MMM d, y, HH:mm:ss v",
              "yMMMEd, Hmsv": "E, MMM d, y, HH:mm:ss v",
              "yMMMM, Hmsv": "MMMM y, HH:mm:ss v",
              "EEEE, MMMM d, y, hmv": "EEEE, MMMM d, y, h:mm a v",
              "MMMM d, y, hmv": "MMMM d, y, h:mm a v",
              "MMM d, y, hmv": "MMM d, y, h:mm a v",
              "M/d/yy, hmv": "M/d/yy, h:mm a v",
              "d, hmv": "d, h:mm a v",
              "E, hmv": "ccc, h:mm a v",
              "Ed, hmv": "d E, h:mm a v",
              "Gy, hmv": "y G, h:mm a v",
              "GyMd, hmv": "M/d/y G, h:mm a v",
              "GyMMM, hmv": "MMM y G, h:mm a v",
              "GyMMMd, hmv": "MMM d, y G, h:mm a v",
              "GyMMMEd, hmv": "E, MMM d, y G, h:mm a v",
              "M, hmv": "L, h:mm a v",
              "Md, hmv": "M/d, h:mm a v",
              "MEd, hmv": "E, M/d, h:mm a v",
              "MMM, hmv": "LLL, h:mm a v",
              "MMMd, hmv": "MMM d, h:mm a v",
              "MMMEd, hmv": "E, MMM d, h:mm a v",
              "MMMMd, hmv": "MMMM d, h:mm a v",
              "y, hmv": "y, h:mm a v",
              "yM, hmv": "M/y, h:mm a v",
              "yMd, hmv": "M/d/y, h:mm a v",
              "yMEd, hmv": "E, M/d/y, h:mm a v",
              "yMMM, hmv": "MMM y, h:mm a v",
              "yMMMd, hmv": "MMM d, y, h:mm a v",
              "yMMMEd, hmv": "E, MMM d, y, h:mm a v",
              "yMMMM, hmv": "MMMM y, h:mm a v",
              "EEEE, MMMM d, y, Hmv": "EEEE, MMMM d, y, HH:mm v",
              "MMMM d, y, Hmv": "MMMM d, y, HH:mm v",
              "MMM d, y, Hmv": "MMM d, y, HH:mm v",
              "M/d/yy, Hmv": "M/d/yy, HH:mm v",
              "d, Hmv": "d, HH:mm v",
              "E, Hmv": "ccc, HH:mm v",
              "Ed, Hmv": "d E, HH:mm v",
              "Gy, Hmv": "y G, HH:mm v",
              "GyMd, Hmv": "M/d/y G, HH:mm v",
              "GyMMM, Hmv": "MMM y G, HH:mm v",
              "GyMMMd, Hmv": "MMM d, y G, HH:mm v",
              "GyMMMEd, Hmv": "E, MMM d, y G, HH:mm v",
              "M, Hmv": "L, HH:mm v",
              "Md, Hmv": "M/d, HH:mm v",
              "MEd, Hmv": "E, M/d, HH:mm v",
              "MMM, Hmv": "LLL, HH:mm v",
              "MMMd, Hmv": "MMM d, HH:mm v",
              "MMMEd, Hmv": "E, MMM d, HH:mm v",
              "MMMMd, Hmv": "MMMM d, HH:mm v",
              "y, Hmv": "y, HH:mm v",
              "yM, Hmv": "M/y, HH:mm v",
              "yMd, Hmv": "M/d/y, HH:mm v",
              "yMEd, Hmv": "E, M/d/y, HH:mm v",
              "yMMM, Hmv": "MMM y, HH:mm v",
              "yMMMd, Hmv": "MMM d, y, HH:mm v",
              "yMMMEd, Hmv": "E, MMM d, y, HH:mm v",
              "yMMMM, Hmv": "MMMM y, HH:mm v",
              "EEEE, MMMM d, y, ms": "EEEE, MMMM d, y, mm:ss",
              "MMMM d, y, ms": "MMMM d, y, mm:ss",
              "MMM d, y, ms": "MMM d, y, mm:ss",
              "M/d/yy, ms": "M/d/yy, mm:ss",
              "d, ms": "d, mm:ss",
              "E, ms": "ccc, mm:ss",
              "Ed, ms": "d E, mm:ss",
              "Gy, ms": "y G, mm:ss",
              "GyMd, ms": "M/d/y G, mm:ss",
              "GyMMM, ms": "MMM y G, mm:ss",
              "GyMMMd, ms": "MMM d, y G, mm:ss",
              "GyMMMEd, ms": "E, MMM d, y G, mm:ss",
              "M, ms": "L, mm:ss",
              "Md, ms": "M/d, mm:ss",
              "MEd, ms": "E, M/d, mm:ss",
              "MMM, ms": "LLL, mm:ss",
              "MMMd, ms": "MMM d, mm:ss",
              "MMMEd, ms": "E, MMM d, mm:ss",
              "MMMMd, ms": "MMMM d, mm:ss",
              "y, ms": "y, mm:ss",
              "yM, ms": "M/y, mm:ss",
              "yMd, ms": "M/d/y, mm:ss",
              "yMEd, ms": "E, M/d/y, mm:ss",
              "yMMM, ms": "MMM y, mm:ss",
              "yMMMd, ms": "MMM d, y, mm:ss",
              "yMMMEd, ms": "E, MMM d, y, mm:ss",
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
              d: "d – d"
            },
            Gy: {
              G: "y G – y G",
              y: "y – y G"
            },
            GyM: {
              G: "M/y G – M/y G",
              M: "M/y – M/y G",
              y: "M/y – M/y G"
            },
            GyMd: {
              d: "M/d/y – M/d/y G",
              G: "M/d/y G – M/d/y G",
              M: "M/d/y – M/d/y G",
              y: "M/d/y – M/d/y G"
            },
            GyMEd: {
              d: "E, M/d/y – E, M/d/y G",
              G: "E, M/d/y G – E, M/d/y G",
              M: "E, M/d/y – E, M/d/y G",
              y: "E, M/d/y – E, M/d/y G"
            },
            GyMMM: {
              G: "MMM y G – MMM y G",
              M: "MMM – MMM y G",
              y: "MMM y – MMM y G"
            },
            GyMMMd: {
              d: "MMM d – d, y G",
              G: "MMM d, y G – MMM d, y G",
              M: "MMM d – MMM d, y G",
              y: "MMM d, y – MMM d, y G"
            },
            GyMMMEd: {
              d: "E, MMM d – E, MMM d, y G",
              G: "E, MMM d, y G – E, MMM d, y G",
              M: "E, MMM d – E, MMM d, y G",
              y: "E, MMM d, y – E, MMM d, y G"
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
              M: "M – M"
            },
            Md: {
              d: "M/d – M/d",
              M: "M/d – M/d"
            },
            MEd: {
              d: "E, M/d – E, M/d",
              M: "E, M/d – E, M/d"
            },
            MMM: {
              M: "MMM – MMM"
            },
            MMMd: {
              d: "MMM d – d",
              M: "MMM d – MMM d"
            },
            MMMEd: {
              d: "E, MMM d – E, MMM d",
              M: "E, MMM d – E, MMM d"
            },
            y: {
              y: "y – y"
            },
            yM: {
              M: "M/y – M/y",
              y: "M/y – M/y"
            },
            yMd: {
              d: "M/d/y – M/d/y",
              M: "M/d/y – M/d/y",
              y: "M/d/y – M/d/y"
            },
            yMEd: {
              d: "E, M/d/y – E, M/d/y",
              M: "E, M/d/y – E, M/d/y",
              y: "E, M/d/y – E, M/d/y"
            },
            yMMM: {
              M: "MMM – MMM y",
              y: "MMM y – MMM y"
            },
            yMMMd: {
              d: "MMM d – d, y",
              M: "MMM d – MMM d, y",
              y: "MMM d, y – MMM d, y"
            },
            yMMMEd: {
              d: "E, MMM d – E, MMM d, y",
              M: "E, MMM d – E, MMM d, y",
              y: "E, MMM d, y – E, MMM d, y"
            },
            yMMMM: {
              M: "MMMM – MMMM y",
              y: "MMMM y – MMMM y"
            }
          },
          hourCycle: "h12",
          nu: ["latn"],
          ca: ["gregory"],
          hc: ["h12", "", "h23", ""]
        },
        locale: "en"
      })
    }
  }
]);