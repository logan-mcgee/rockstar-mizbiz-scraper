try {
  let M = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new M.Error).stack;
  d && (M._sentryDebugIds = M._sentryDebugIds || {}, M._sentryDebugIds[d] = "7fcfa625-3f55-4222-baa3-f7f2d2c9ec63", M._sentryDebugIdIdentifier = "sentry-dbid-7fcfa625-3f55-4222-baa3-f7f2d2c9ec63")
} catch (M) {} {
  let M = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[(new M.Error).stack] = Object.assign({}, M._sentryModuleMetadata[(new M.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [3370], {
    15494: () => {
      Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
        data: {
          am: "a. m.",
          pm: "p. m.",
          weekday: {
            narrow: ["D", "L", "M", "X", "J", "V", "S"],
            short: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
          },
          era: {
            narrow: {
              BC: "a. C.",
              AD: "d. C."
            },
            short: {
              BC: "a. C.",
              AD: "d. C."
            },
            long: {
              BC: "antes de Cristo",
              AD: "después de Cristo"
            }
          },
          month: {
            narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            short: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"],
            long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
          },
          timeZoneName: {
            "America/Rio_Branco": {
              long: ["Hora estándar de Acre", "Hora de verano de Acre"]
            },
            "Asia/Kabul": {
              long: ["hora de Afganistán", "hora de Afganistán"]
            },
            "Africa/Maputo": {
              long: ["hora de África central", "hora de África central"]
            },
            "Africa/Bujumbura": {
              long: ["hora de África central", "hora de África central"]
            },
            "Africa/Gaborone": {
              long: ["hora de África central", "hora de África central"]
            },
            "Africa/Lubumbashi": {
              long: ["hora de África central", "hora de África central"]
            },
            "Africa/Blantyre": {
              long: ["hora de África central", "hora de África central"]
            },
            "Africa/Kigali": {
              long: ["hora de África central", "hora de África central"]
            },
            "Africa/Lusaka": {
              long: ["hora de África central", "hora de África central"]
            },
            "Africa/Harare": {
              long: ["hora de África central", "hora de África central"]
            },
            "Africa/Nairobi": {
              long: ["hora de África oriental", "hora de África oriental"]
            },
            "Africa/Djibouti": {
              long: ["hora de África oriental", "hora de África oriental"]
            },
            "Africa/Asmera": {
              long: ["hora de África oriental", "hora de África oriental"]
            },
            "Africa/Addis_Ababa": {
              long: ["hora de África oriental", "hora de África oriental"]
            },
            "Indian/Comoro": {
              long: ["hora de África oriental", "hora de África oriental"]
            },
            "Indian/Antananarivo": {
              long: ["hora de África oriental", "hora de África oriental"]
            },
            "Africa/Mogadishu": {
              long: ["hora de África oriental", "hora de África oriental"]
            },
            "Africa/Dar_es_Salaam": {
              long: ["hora de África oriental", "hora de África oriental"]
            },
            "Africa/Kampala": {
              long: ["hora de África oriental", "hora de África oriental"]
            },
            "Indian/Mayotte": {
              long: ["hora de África oriental", "hora de África oriental"]
            },
            "Africa/Johannesburg": {
              long: ["hora de Sudáfrica", "hora de Sudáfrica"]
            },
            "Africa/Maseru": {
              long: ["hora de Sudáfrica", "hora de Sudáfrica"]
            },
            "Africa/Mbabane": {
              long: ["hora de Sudáfrica", "hora de Sudáfrica"]
            },
            "Africa/Lagos": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Africa/Luanda": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Africa/Porto-Novo": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Africa/Kinshasa": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Africa/Bangui": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Africa/Brazzaville": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Africa/Douala": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Africa/Libreville": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Africa/Malabo": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Africa/Niamey": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Africa/Ndjamena": {
              long: ["hora estándar de África occidental", "hora de verano de África occidental"]
            },
            "Asia/Aqtobe": {
              long: ["hora de Kazajistán occidental", "hora de Kazajistán occidental"]
            },
            "America/Juneau": {
              long: ["hora estándar de Alaska", "hora de verano de Alaska"]
            },
            "Asia/Almaty": {
              long: ["hora de Kazajistán oriental", "hora de Kazajistán oriental"]
            },
            "America/Manaus": {
              long: ["hora estándar del Amazonas", "hora de verano del Amazonas"]
            },
            "America/Chicago": {
              long: ["hora estándar central", "hora de verano central"]
            },
            "America/Belize": {
              long: ["hora estándar central", "hora de verano central"]
            },
            "America/Winnipeg": {
              long: ["hora estándar central", "hora de verano central"]
            },
            "America/Costa_Rica": {
              long: ["hora estándar central", "hora de verano central"]
            },
            "America/Guatemala": {
              long: ["hora estándar central", "hora de verano central"]
            },
            "America/Tegucigalpa": {
              long: ["hora estándar central", "hora de verano central"]
            },
            "America/Mexico_City": {
              long: ["hora estándar central", "hora de verano central"]
            },
            "America/El_Salvador": {
              long: ["hora estándar central", "hora de verano central"]
            },
            "America/New_York": {
              long: ["hora estándar oriental", "hora de verano oriental"]
            },
            "America/Nassau": {
              long: ["hora estándar oriental", "hora de verano oriental"]
            },
            "America/Toronto": {
              long: ["hora estándar oriental", "hora de verano oriental"]
            },
            "America/Port-au-Prince": {
              long: ["hora estándar oriental", "hora de verano oriental"]
            },
            "America/Jamaica": {
              long: ["hora estándar oriental", "hora de verano oriental"]
            },
            "America/Cayman": {
              long: ["hora estándar oriental", "hora de verano oriental"]
            },
            "America/Panama": {
              long: ["hora estándar oriental", "hora de verano oriental"]
            },
            "America/Denver": {
              long: ["hora estándar de las Montañas Rocosas", "hora de verano de las Montañas Rocosas"]
            },
            "America/Edmonton": {
              long: ["hora estándar de las Montañas Rocosas", "hora de verano de las Montañas Rocosas"]
            },
            "America/Los_Angeles": {
              long: ["hora estándar del Pacífico", "hora de verano del Pacífico"]
            },
            "America/Vancouver": {
              long: ["hora estándar del Pacífico", "hora de verano del Pacífico"]
            },
            "America/Tijuana": {
              long: ["hora estándar del Pacífico", "hora de verano del Pacífico"]
            },
            "Asia/Anadyr": {
              long: ["hora estándar de Anadyr", "hora de verano de Anadyr"]
            },
            "Pacific/Apia": {
              long: ["hora estándar de Apia", "horario de verano de Apia"]
            },
            "Asia/Riyadh": {
              long: ["hora estándar de Arabia", "hora de verano de Arabia"]
            },
            "Asia/Bahrain": {
              long: ["hora estándar de Arabia", "hora de verano de Arabia"]
            },
            "Asia/Baghdad": {
              long: ["hora estándar de Arabia", "hora de verano de Arabia"]
            },
            "Asia/Kuwait": {
              long: ["hora estándar de Arabia", "hora de verano de Arabia"]
            },
            "Asia/Qatar": {
              long: ["hora estándar de Arabia", "hora de verano de Arabia"]
            },
            "Asia/Aden": {
              long: ["hora estándar de Arabia", "hora de verano de Arabia"]
            },
            "America/Buenos_Aires": {
              long: ["hora estándar de Argentina", "hora de verano de Argentina"]
            },
            "America/Argentina/San_Luis": {
              long: ["hora estándar de Argentina occidental", "hora de verano de Argentina occidental"]
            },
            "Asia/Ashgabat": {
              long: ["hora estándar de Turkmenistán", "hora de verano de Turkmenistán"]
            },
            "America/Halifax": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Antigua": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Anguilla": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Aruba": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Barbados": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "Atlantic/Bermuda": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Kralendijk": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Curacao": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Dominica": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Grenada": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Thule": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Guadeloupe": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/St_Kitts": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/St_Lucia": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Marigot": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Martinique": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Montserrat": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Puerto_Rico": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Lower_Princes": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Port_of_Spain": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/St_Vincent": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/Tortola": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "America/St_Thomas": {
              long: ["hora estándar del Atlántico", "hora de verano del Atlántico"]
            },
            "Australia/Adelaide": {
              long: ["hora estándar de Australia central", "hora de verano de Australia central"]
            },
            "Australia/Eucla": {
              long: ["hora estándar de Australia centroccidental", "hora de verano de Australia centroccidental"]
            },
            "Australia/Sydney": {
              long: ["hora estándar de Australia oriental", "hora de verano de Australia oriental"]
            },
            "Australia/Perth": {
              long: ["hora estándar de Australia occidental", "hora de verano de Australia occidental"]
            },
            "Atlantic/Azores": {
              long: ["hora estándar de las Azores", "hora de verano de las Azores"]
            },
            "Asia/Thimphu": {
              long: ["hora de Bután", "hora de Bután"]
            },
            "America/La_Paz": {
              long: ["hora de Bolivia", "hora de Bolivia"]
            },
            "Asia/Kuching": {
              long: ["hora de Malasia", "hora de Malasia"]
            },
            "America/Sao_Paulo": {
              long: ["hora estándar de Brasilia", "hora de verano de Brasilia"]
            },
            "Europe/London": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Asia/Brunei": {
              long: ["hora de Brunéi", "hora de Brunéi"]
            },
            "Atlantic/Cape_Verde": {
              long: ["hora estándar de Cabo Verde", "hora de verano de Cabo Verde"]
            },
            "Pacific/Saipan": {
              long: ["Hora de las Islas Marianas del Norte", "Hora de las Islas Marianas del Norte"]
            },
            "Pacific/Guam": {
              long: ["Hora estándar de Guam", "Hora estándar de Guam"]
            },
            "Pacific/Chatham": {
              long: ["hora estándar de Chatham", "hora de verano de Chatham"]
            },
            "America/Santiago": {
              long: ["hora estándar de Chile", "hora de verano de Chile"]
            },
            "Asia/Shanghai": {
              long: ["hora estándar de China", "hora de verano de China"]
            },
            "Indian/Christmas": {
              long: ["hora de la Isla de Navidad", "hora de la Isla de Navidad"]
            },
            "Indian/Cocos": {
              long: ["hora de las Islas Cocos", "hora de las Islas Cocos"]
            },
            "America/Bogota": {
              long: ["hora estándar de Colombia", "hora de verano de Colombia"]
            },
            "Pacific/Rarotonga": {
              long: ["hora estándar de las Islas Cook", "hora de verano media de las Islas Cook"]
            },
            "America/Havana": {
              long: ["hora estándar de Cuba", "hora de verano de Cuba"]
            },
            "Antarctica/Davis": {
              long: ["hora de Davis", "hora de Davis"]
            },
            "Antarctica/DumontDUrville": {
              long: ["hora de Dumont-d’Urville", "hora de Dumont-d’Urville"]
            },
            "Asia/Dushanbe": {
              long: ["hora de Tayikistán", "hora de Tayikistán"]
            },
            "America/Paramaribo": {
              long: ["hora de Surinam", "hora de Surinam"]
            },
            "Asia/Dili": {
              long: ["hora de Timor Oriental", "hora de Timor Oriental"]
            },
            "Pacific/Easter": {
              long: ["hora estándar de la isla de Pascua", "hora de verano de la isla de Pascua"]
            },
            "America/Guayaquil": {
              long: ["hora de Ecuador", "hora de Ecuador"]
            },
            "Europe/Paris": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Andorra": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Tirane": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Vienna": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Sarajevo": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Brussels": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Zurich": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Prague": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Berlin": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Copenhagen": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Madrid": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Gibraltar": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Zagreb": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Budapest": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Rome": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Vaduz": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Luxembourg": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Monaco": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Podgorica": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Skopje": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Malta": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Amsterdam": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Oslo": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Warsaw": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Belgrade": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Stockholm": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Ljubljana": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Arctic/Longyearbyen": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Bratislava": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/San_Marino": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Africa/Tunis": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Vatican": {
              long: ["hora estándar de Europa central", "hora de verano de Europa central"],
              short: ["CET", "CEST"]
            },
            "Europe/Bucharest": {
              long: ["hora estándar de Europa oriental", "hora de verano de Europa oriental"],
              short: ["EET", "EEST"]
            },
            "Europe/Mariehamn": {
              long: ["hora estándar de Europa oriental", "hora de verano de Europa oriental"],
              short: ["EET", "EEST"]
            },
            "Europe/Sofia": {
              long: ["hora estándar de Europa oriental", "hora de verano de Europa oriental"],
              short: ["EET", "EEST"]
            },
            "Asia/Nicosia": {
              long: ["hora estándar de Europa oriental", "hora de verano de Europa oriental"],
              short: ["EET", "EEST"]
            },
            "Africa/Cairo": {
              long: ["hora estándar de Europa oriental", "hora de verano de Europa oriental"],
              short: ["EET", "EEST"]
            },
            "Europe/Helsinki": {
              long: ["hora estándar de Europa oriental", "hora de verano de Europa oriental"],
              short: ["EET", "EEST"]
            },
            "Europe/Athens": {
              long: ["hora estándar de Europa oriental", "hora de verano de Europa oriental"],
              short: ["EET", "EEST"]
            },
            "Asia/Beirut": {
              long: ["hora estándar de Europa oriental", "hora de verano de Europa oriental"],
              short: ["EET", "EEST"]
            },
            "Europe/Minsk": {
              long: ["hora del extremo oriental de Europa", "hora del extremo oriental de Europa"]
            },
            "Europe/Kaliningrad": {
              long: ["hora del extremo oriental de Europa", "hora del extremo oriental de Europa"]
            },
            "Atlantic/Canary": {
              long: ["hora estándar de Europa occidental", "hora de verano de Europa occidental"],
              short: ["WET", "WEST"]
            },
            "Atlantic/Faeroe": {
              long: ["hora estándar de Europa occidental", "hora de verano de Europa occidental"],
              short: ["WET", "WEST"]
            },
            "Atlantic/Stanley": {
              long: ["hora estándar de las islas Malvinas", "hora de verano de las islas Malvinas"]
            },
            "Pacific/Fiji": {
              long: ["hora estándar de Fiyi", "hora de verano de Fiyi"]
            },
            "America/Cayenne": {
              long: ["hora de la Guayana Francesa", "hora de la Guayana Francesa"]
            },
            "Indian/Kerguelen": {
              long: ["hora de Antártida y Territorios Australes Franceses", "hora de Antártida y Territorios Australes Franceses"]
            },
            "Asia/Bishkek": {
              long: ["hora de Kirguistán", "hora de Kirguistán"]
            },
            "Pacific/Galapagos": {
              long: ["hora de Galápagos", "hora de Galápagos"]
            },
            "Pacific/Gambier": {
              long: ["hora de Gambier", "hora de Gambier"]
            },
            "Pacific/Tarawa": {
              long: ["hora de las islas Gilbert", "hora de las islas Gilbert"]
            },
            "Atlantic/Reykjavik": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Africa/Ouagadougou": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Africa/Abidjan": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Africa/Accra": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Africa/Banjul": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Africa/Conakry": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Africa/Bamako": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Africa/Nouakchott": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Atlantic/St_Helena": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Africa/Freetown": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Africa/Dakar": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "Africa/Lome": {
              long: ["hora del meridiano de Greenwich", "hora del meridiano de Greenwich"],
              short: ["GMT", "GMT"]
            },
            "America/Godthab": {
              long: ["hora estándar de Groenlandia occidental", "hora de verano de Groenlandia occidental"]
            },
            "America/Scoresbysund": {
              long: ["hora estándar de Groenlandia oriental", "hora de verano de Groenlandia oriental"]
            },
            "Asia/Dubai": {
              long: ["hora estándar del Golfo", "hora estándar del Golfo"]
            },
            "Asia/Muscat": {
              long: ["hora estándar del Golfo", "hora estándar del Golfo"]
            },
            "America/Guyana": {
              long: ["hora de Guyana", "hora de Guyana"]
            },
            "Pacific/Honolulu": {
              long: ["hora estándar de Hawái-Aleutianas", "hora de verano de Hawái-Aleutianas"]
            },
            "Asia/Hong_Kong": {
              long: ["hora estándar de Hong Kong", "hora de verano de Hong Kong"]
            },
            "Asia/Hovd": {
              long: ["hora estándar de Hovd", "hora de verano de Hovd"]
            },
            "Asia/Calcutta": {
              long: ["hora estándar de la India", "hora estándar de la India"]
            },
            "Asia/Colombo": {
              long: ["Hora de Sri Lanka", "Hora de Sri Lanka"]
            },
            "Indian/Chagos": {
              long: ["hora del océano Índico", "hora del océano Índico"]
            },
            "Asia/Bangkok": {
              long: ["hora de Indochina", "hora de Indochina"]
            },
            "Asia/Phnom_Penh": {
              long: ["hora de Indochina", "hora de Indochina"]
            },
            "Asia/Vientiane": {
              long: ["hora de Indochina", "hora de Indochina"]
            },
            "Asia/Makassar": {
              long: ["hora de Indonesia central", "hora de Indonesia central"]
            },
            "Asia/Jayapura": {
              long: ["hora de Indonesia oriental", "hora de Indonesia oriental"]
            },
            "Asia/Jakarta": {
              long: ["hora de Indonesia occidental", "hora de Indonesia occidental"]
            },
            "Asia/Tehran": {
              long: ["hora estándar de Irán", "hora de verano de Irán"]
            },
            "Asia/Irkutsk": {
              long: ["hora estándar de Irkutsk", "hora de verano de Irkutsk"]
            },
            "Asia/Jerusalem": {
              long: ["hora estándar de Israel", "hora de verano de Israel"]
            },
            "Asia/Tokyo": {
              long: ["hora estándar de Japón", "hora de verano de Japón"]
            },
            "Asia/Kamchatka": {
              long: ["hora estándar de Kamchatka", "hora de verano de Kamchatka"]
            },
            "Asia/Karachi": {
              long: ["hora estándar de Pakistán", "hora de verano de Pakistán"]
            },
            "Asia/Qyzylorda": {
              long: ["Hora estándar de Qyzylorda", "Hora de verano de Qyzylorda"]
            },
            "Asia/Seoul": {
              long: ["hora estándar de Corea", "hora de verano de Corea"]
            },
            "Pacific/Kosrae": {
              long: ["hora de Kosrae", "hora de Kosrae"]
            },
            "Asia/Krasnoyarsk": {
              long: ["hora estándar de Krasnoyarsk", "hora de verano de Krasnoyarsk"]
            },
            "Europe/Samara": {
              long: ["hora estándar de Samara", "hora de verano de Samara"]
            },
            "Pacific/Kiritimati": {
              long: ["hora de las Espóradas Ecuatoriales", "hora de las Espóradas Ecuatoriales"]
            },
            "Australia/Lord_Howe": {
              long: ["hora estándar de Lord Howe", "hora de verano de Lord Howe"]
            },
            "Asia/Macau": {
              long: ["Hora estándar de Macao", "Hora de verano de Macao"]
            },
            "Asia/Magadan": {
              long: ["hora estándar de Magadán", "hora de verano de Magadán"]
            },
            "Indian/Maldives": {
              long: ["hora de Maldivas", "hora de Maldivas"]
            },
            "Pacific/Marquesas": {
              long: ["hora de Marquesas", "hora de Marquesas"]
            },
            "Pacific/Majuro": {
              long: ["hora de las Islas Marshall", "hora de las Islas Marshall"]
            },
            "Indian/Mauritius": {
              long: ["hora estándar de Mauricio", "hora de verano de Mauricio"]
            },
            "Antarctica/Mawson": {
              long: ["hora de Mawson", "hora de Mawson"]
            },
            "America/Mazatlan": {
              long: ["hora estándar del Pacífico de México", "hora de verano del Pacífico de México"]
            },
            "Asia/Ulaanbaatar": {
              long: ["hora estándar de Ulán Bator", "hora de verano de Ulán Bator"]
            },
            "Europe/Moscow": {
              long: ["hora estándar de Moscú", "hora de verano de Moscú"]
            },
            "Asia/Rangoon": {
              long: ["hora de Myanmar", "hora de Myanmar"]
            },
            "Pacific/Nauru": {
              long: ["hora de Nauru", "hora de Nauru"]
            },
            "Asia/Katmandu": {
              long: ["hora de Nepal", "hora de Nepal"]
            },
            "Pacific/Noumea": {
              long: ["hora estándar de Nueva Caledonia", "hora de verano de Nueva Caledonia"]
            },
            "Pacific/Auckland": {
              long: ["hora estándar de Nueva Zelanda", "hora de verano de Nueva Zelanda"]
            },
            "Antarctica/McMurdo": {
              long: ["hora estándar de Nueva Zelanda", "hora de verano de Nueva Zelanda"]
            },
            "America/St_Johns": {
              long: ["hora estándar de Terranova", "hora de verano de Terranova"]
            },
            "Pacific/Niue": {
              long: ["hora de Niue", "hora de Niue"]
            },
            "Pacific/Norfolk": {
              long: ["hora estándar de la isla Norfolk", "hora de verano de la isla Norfolk"]
            },
            "America/Noronha": {
              long: ["hora estándar de Fernando de Noronha", "hora de verano de Fernando de Noronha"]
            },
            "Asia/Novosibirsk": {
              long: ["hora estándar de Novosibirsk", "hora de verano de Novosibirsk"]
            },
            "Asia/Omsk": {
              long: ["hora estándar de Omsk", "hora de verano de Omsk"]
            },
            "Pacific/Palau": {
              long: ["hora de Palaos", "hora de Palaos"]
            },
            "Pacific/Port_Moresby": {
              long: ["hora de Papúa Nueva Guinea", "hora de Papúa Nueva Guinea"]
            },
            "America/Asuncion": {
              long: ["hora estándar de Paraguay", "hora de verano de Paraguay"]
            },
            "America/Lima": {
              long: ["hora estándar de Perú", "hora de verano de Perú"]
            },
            "Asia/Manila": {
              long: ["hora estándar de Filipinas", "hora de verano de Filipinas"]
            },
            "Pacific/Enderbury": {
              long: ["hora de las Islas Fénix", "hora de las Islas Fénix"]
            },
            "America/Miquelon": {
              long: ["hora estándar de San Pedro y Miquelón", "hora de verano de San Pedro y Miquelón"]
            },
            "Pacific/Pitcairn": {
              long: ["hora de Pitcairn", "hora de Pitcairn"]
            },
            "Pacific/Ponape": {
              long: ["hora de Pohnpei", "hora de Pohnpei"]
            },
            "Asia/Pyongyang": {
              long: ["hora de Pyongyang", "hora de Pyongyang"]
            },
            "Indian/Reunion": {
              long: ["hora de Reunión", "hora de Reunión"]
            },
            "Antarctica/Rothera": {
              long: ["hora de Rothera", "hora de Rothera"]
            },
            "Asia/Sakhalin": {
              long: ["hora estándar de Sajalín", "hora de verano de Sajalín"]
            },
            "Pacific/Pago_Pago": {
              long: ["hora estándar de Samoa", "hora de verano de Samoa"]
            },
            "Indian/Mahe": {
              long: ["hora de Seychelles", "hora de Seychelles"]
            },
            "Asia/Singapore": {
              long: ["hora de Singapur", "hora de Singapur"]
            },
            "Pacific/Guadalcanal": {
              long: ["hora de las Islas Salomón", "hora de las Islas Salomón"]
            },
            "Atlantic/South_Georgia": {
              long: ["hora de Georgia del Sur", "hora de Georgia del Sur"]
            },
            "Asia/Yekaterinburg": {
              long: ["hora estándar de Ekaterimburgo", "hora de verano de Ekaterimburgo"]
            },
            "Antarctica/Syowa": {
              long: ["hora de Syowa", "hora de Syowa"]
            },
            "Pacific/Tahiti": {
              long: ["hora de Tahití", "hora de Tahití"]
            },
            "Asia/Taipei": {
              long: ["hora estándar de Taipéi", "hora de verano de Taipéi"]
            },
            "Asia/Tashkent": {
              long: ["hora estándar de Uzbekistán", "hora de verano de Uzbekistán"]
            },
            "Pacific/Fakaofo": {
              long: ["hora de Tokelau", "hora de Tokelau"]
            },
            "Pacific/Tongatapu": {
              long: ["hora estándar de Tonga", "hora de verano de Tonga"]
            },
            "Pacific/Truk": {
              long: ["hora de Chuuk", "hora de Chuuk"]
            },
            "Pacific/Funafuti": {
              long: ["hora de Tuvalu", "hora de Tuvalu"]
            },
            "America/Montevideo": {
              long: ["hora estándar de Uruguay", "hora de verano de Uruguay"]
            },
            "Pacific/Efate": {
              long: ["hora estándar de Vanuatu", "hora de verano de Vanuatu"]
            },
            "America/Caracas": {
              long: ["hora de Venezuela", "hora de Venezuela"]
            },
            "Asia/Vladivostok": {
              long: ["hora estándar de Vladivostok", "hora de verano de Vladivostok"]
            },
            "Europe/Volgograd": {
              long: ["hora estándar de Volgogrado", "hora de verano de Volgogrado"]
            },
            "Antarctica/Vostok": {
              long: ["hora de Vostok", "hora de Vostok"]
            },
            "Pacific/Wake": {
              long: ["hora de la isla Wake", "hora de la isla Wake"]
            },
            "Pacific/Wallis": {
              long: ["hora de Wallis y Futuna", "hora de Wallis y Futuna"]
            },
            "Asia/Yakutsk": {
              long: ["hora estándar de Yakutsk", "hora de verano de Yakutsk"]
            },
            "America/Whitehorse": {
              long: ["hora de Yukón", "hora de Yukón"]
            },
            UTC: {
              long: ["tiempo universal coordinado", "tiempo universal coordinado"],
              short: ["UTC", "UTC"]
            }
          },
          gmtFormat: "GMT{0}",
          hourFormat: "+HH:mm;-HH:mm",
          dateFormat: {
            full: "EEEE, d 'de' MMMM 'de' y",
            long: "d 'de' MMMM 'de' y",
            medium: "d MMM y",
            short: "d/M/yy"
          },
          timeFormat: {
            full: "H:mm:ss (zzzz)",
            long: "H:mm:ss z",
            medium: "H:mm:ss",
            short: "H:mm"
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
              Ed: "E d",
              Ehm: "E, h:mm a",
              EHm: "E, H:mm",
              Ehms: "E, h:mm:ss a",
              EHms: "E, H:mm:ss",
              Gy: "y G",
              GyMd: "d/M/y GGGGG",
              GyMMM: "MMM y G",
              GyMMMd: "d MMM y G",
              GyMMMEd: "E, d MMM y G",
              GyMMMM: "MMMM 'de' y G",
              GyMMMMd: "d 'de' MMMM 'de' y G",
              GyMMMMEd: "E, d 'de' MMMM 'de' y G",
              h: "h a",
              H: "H",
              hm: "h:mm a",
              Hm: "H:mm",
              hms: "h:mm:ss a",
              Hms: "H:mm:ss",
              hmsv: "h:mm:ss a v",
              Hmsv: "H:mm:ss v",
              hmsvvvv: "h:mm:ss a (vvvv)",
              Hmsvvvv: "H:mm:ss (vvvv)",
              hmv: "h:mm a v",
              Hmv: "H:mm v",
              M: "L",
              Md: "d/M",
              MEd: "E, d/M",
              MMd: "d/M",
              MMdd: "d/M",
              MMM: "LLL",
              MMMd: "d MMM",
              MMMEd: "E, d MMM",
              MMMMd: "d 'de' MMMM",
              MMMMEd: "E, d 'de' MMMM",
              ms: "mm:ss",
              y: "y",
              yM: "M/y",
              yMd: "d/M/y",
              yMEd: "EEE, d/M/y",
              yMM: "M/y",
              yMMM: "MMM y",
              yMMMd: "d MMM y",
              yMMMEd: "EEE, d MMM y",
              yMMMM: "MMMM 'de' y",
              yMMMMd: "d 'de' MMMM 'de' y",
              yMMMMEd: "EEE, d 'de' MMMM 'de' y",
              "EEEE, d 'de' MMMM 'de' y": "EEEE, d 'de' MMMM 'de' y",
              "d 'de' MMMM 'de' y": "d 'de' MMMM 'de' y",
              "d MMM y": "d MMM y",
              "d/M/yy": "d/M/yy",
              "H:mm:ss (zzzz)": "H:mm:ss (zzzz)",
              "H:mm:ss z": "H:mm:ss z",
              "H:mm:ss": "H:mm:ss",
              "H:mm": "H:mm",
              "EEEE, d 'de' MMMM 'de' y, H:mm:ss (zzzz)": "EEEE, d 'de' MMMM 'de' y, H:mm:ss (zzzz)",
              "d 'de' MMMM 'de' y, H:mm:ss (zzzz)": "d 'de' MMMM 'de' y, H:mm:ss (zzzz)",
              "d MMM y, H:mm:ss (zzzz)": "d MMM y, H:mm:ss (zzzz)",
              "d/M/yy, H:mm:ss (zzzz)": "d/M/yy, H:mm:ss (zzzz)",
              "d, H:mm:ss (zzzz)": "d, H:mm:ss (zzzz)",
              "E, H:mm:ss (zzzz)": "ccc, H:mm:ss (zzzz)",
              "Ed, H:mm:ss (zzzz)": "E d, H:mm:ss (zzzz)",
              "Gy, H:mm:ss (zzzz)": "y G, H:mm:ss (zzzz)",
              "GyMd, H:mm:ss (zzzz)": "d/M/y GGGGG, H:mm:ss (zzzz)",
              "GyMMM, H:mm:ss (zzzz)": "MMM y G, H:mm:ss (zzzz)",
              "GyMMMd, H:mm:ss (zzzz)": "d MMM y G, H:mm:ss (zzzz)",
              "GyMMMEd, H:mm:ss (zzzz)": "E, d MMM y G, H:mm:ss (zzzz)",
              "GyMMMM, H:mm:ss (zzzz)": "MMMM 'de' y G, H:mm:ss (zzzz)",
              "GyMMMMd, H:mm:ss (zzzz)": "d 'de' MMMM 'de' y G, H:mm:ss (zzzz)",
              "GyMMMMEd, H:mm:ss (zzzz)": "E, d 'de' MMMM 'de' y G, H:mm:ss (zzzz)",
              "M, H:mm:ss (zzzz)": "L, H:mm:ss (zzzz)",
              "Md, H:mm:ss (zzzz)": "d/M, H:mm:ss (zzzz)",
              "MEd, H:mm:ss (zzzz)": "E, d/M, H:mm:ss (zzzz)",
              "MMd, H:mm:ss (zzzz)": "d/M, H:mm:ss (zzzz)",
              "MMdd, H:mm:ss (zzzz)": "d/M, H:mm:ss (zzzz)",
              "MMM, H:mm:ss (zzzz)": "LLL, H:mm:ss (zzzz)",
              "MMMd, H:mm:ss (zzzz)": "d MMM, H:mm:ss (zzzz)",
              "MMMEd, H:mm:ss (zzzz)": "E, d MMM, H:mm:ss (zzzz)",
              "MMMMd, H:mm:ss (zzzz)": "d 'de' MMMM, H:mm:ss (zzzz)",
              "MMMMEd, H:mm:ss (zzzz)": "E, d 'de' MMMM, H:mm:ss (zzzz)",
              "y, H:mm:ss (zzzz)": "y, H:mm:ss (zzzz)",
              "yM, H:mm:ss (zzzz)": "M/y, H:mm:ss (zzzz)",
              "yMd, H:mm:ss (zzzz)": "d/M/y, H:mm:ss (zzzz)",
              "yMEd, H:mm:ss (zzzz)": "EEE, d/M/y, H:mm:ss (zzzz)",
              "yMM, H:mm:ss (zzzz)": "M/y, H:mm:ss (zzzz)",
              "yMMM, H:mm:ss (zzzz)": "MMM y, H:mm:ss (zzzz)",
              "yMMMd, H:mm:ss (zzzz)": "d MMM y, H:mm:ss (zzzz)",
              "yMMMEd, H:mm:ss (zzzz)": "EEE, d MMM y, H:mm:ss (zzzz)",
              "yMMMM, H:mm:ss (zzzz)": "MMMM 'de' y, H:mm:ss (zzzz)",
              "yMMMMd, H:mm:ss (zzzz)": "d 'de' MMMM 'de' y, H:mm:ss (zzzz)",
              "yMMMMEd, H:mm:ss (zzzz)": "EEE, d 'de' MMMM 'de' y, H:mm:ss (zzzz)",
              "EEEE, d 'de' MMMM 'de' y, H:mm:ss z": "EEEE, d 'de' MMMM 'de' y, H:mm:ss z",
              "d 'de' MMMM 'de' y, H:mm:ss z": "d 'de' MMMM 'de' y, H:mm:ss z",
              "d MMM y, H:mm:ss z": "d MMM y, H:mm:ss z",
              "d/M/yy, H:mm:ss z": "d/M/yy, H:mm:ss z",
              "d, H:mm:ss z": "d, H:mm:ss z",
              "E, H:mm:ss z": "ccc, H:mm:ss z",
              "Ed, H:mm:ss z": "E d, H:mm:ss z",
              "Gy, H:mm:ss z": "y G, H:mm:ss z",
              "GyMd, H:mm:ss z": "d/M/y GGGGG, H:mm:ss z",
              "GyMMM, H:mm:ss z": "MMM y G, H:mm:ss z",
              "GyMMMd, H:mm:ss z": "d MMM y G, H:mm:ss z",
              "GyMMMEd, H:mm:ss z": "E, d MMM y G, H:mm:ss z",
              "GyMMMM, H:mm:ss z": "MMMM 'de' y G, H:mm:ss z",
              "GyMMMMd, H:mm:ss z": "d 'de' MMMM 'de' y G, H:mm:ss z",
              "GyMMMMEd, H:mm:ss z": "E, d 'de' MMMM 'de' y G, H:mm:ss z",
              "M, H:mm:ss z": "L, H:mm:ss z",
              "Md, H:mm:ss z": "d/M, H:mm:ss z",
              "MEd, H:mm:ss z": "E, d/M, H:mm:ss z",
              "MMd, H:mm:ss z": "d/M, H:mm:ss z",
              "MMdd, H:mm:ss z": "d/M, H:mm:ss z",
              "MMM, H:mm:ss z": "LLL, H:mm:ss z",
              "MMMd, H:mm:ss z": "d MMM, H:mm:ss z",
              "MMMEd, H:mm:ss z": "E, d MMM, H:mm:ss z",
              "MMMMd, H:mm:ss z": "d 'de' MMMM, H:mm:ss z",
              "MMMMEd, H:mm:ss z": "E, d 'de' MMMM, H:mm:ss z",
              "y, H:mm:ss z": "y, H:mm:ss z",
              "yM, H:mm:ss z": "M/y, H:mm:ss z",
              "yMd, H:mm:ss z": "d/M/y, H:mm:ss z",
              "yMEd, H:mm:ss z": "EEE, d/M/y, H:mm:ss z",
              "yMM, H:mm:ss z": "M/y, H:mm:ss z",
              "yMMM, H:mm:ss z": "MMM y, H:mm:ss z",
              "yMMMd, H:mm:ss z": "d MMM y, H:mm:ss z",
              "yMMMEd, H:mm:ss z": "EEE, d MMM y, H:mm:ss z",
              "yMMMM, H:mm:ss z": "MMMM 'de' y, H:mm:ss z",
              "yMMMMd, H:mm:ss z": "d 'de' MMMM 'de' y, H:mm:ss z",
              "yMMMMEd, H:mm:ss z": "EEE, d 'de' MMMM 'de' y, H:mm:ss z",
              "EEEE, d 'de' MMMM 'de' y, H:mm:ss": "EEEE, d 'de' MMMM 'de' y, H:mm:ss",
              "d 'de' MMMM 'de' y, H:mm:ss": "d 'de' MMMM 'de' y, H:mm:ss",
              "d MMM y, H:mm:ss": "d MMM y, H:mm:ss",
              "d/M/yy, H:mm:ss": "d/M/yy, H:mm:ss",
              "d, H:mm:ss": "d, H:mm:ss",
              "E, H:mm:ss": "ccc, H:mm:ss",
              "Ed, H:mm:ss": "E d, H:mm:ss",
              "Gy, H:mm:ss": "y G, H:mm:ss",
              "GyMd, H:mm:ss": "d/M/y GGGGG, H:mm:ss",
              "GyMMM, H:mm:ss": "MMM y G, H:mm:ss",
              "GyMMMd, H:mm:ss": "d MMM y G, H:mm:ss",
              "GyMMMEd, H:mm:ss": "E, d MMM y G, H:mm:ss",
              "GyMMMM, H:mm:ss": "MMMM 'de' y G, H:mm:ss",
              "GyMMMMd, H:mm:ss": "d 'de' MMMM 'de' y G, H:mm:ss",
              "GyMMMMEd, H:mm:ss": "E, d 'de' MMMM 'de' y G, H:mm:ss",
              "M, H:mm:ss": "L, H:mm:ss",
              "Md, H:mm:ss": "d/M, H:mm:ss",
              "MEd, H:mm:ss": "E, d/M, H:mm:ss",
              "MMd, H:mm:ss": "d/M, H:mm:ss",
              "MMdd, H:mm:ss": "d/M, H:mm:ss",
              "MMM, H:mm:ss": "LLL, H:mm:ss",
              "MMMd, H:mm:ss": "d MMM, H:mm:ss",
              "MMMEd, H:mm:ss": "E, d MMM, H:mm:ss",
              "MMMMd, H:mm:ss": "d 'de' MMMM, H:mm:ss",
              "MMMMEd, H:mm:ss": "E, d 'de' MMMM, H:mm:ss",
              "y, H:mm:ss": "y, H:mm:ss",
              "yM, H:mm:ss": "M/y, H:mm:ss",
              "yMd, H:mm:ss": "d/M/y, H:mm:ss",
              "yMEd, H:mm:ss": "EEE, d/M/y, H:mm:ss",
              "yMM, H:mm:ss": "M/y, H:mm:ss",
              "yMMM, H:mm:ss": "MMM y, H:mm:ss",
              "yMMMd, H:mm:ss": "d MMM y, H:mm:ss",
              "yMMMEd, H:mm:ss": "EEE, d MMM y, H:mm:ss",
              "yMMMM, H:mm:ss": "MMMM 'de' y, H:mm:ss",
              "yMMMMd, H:mm:ss": "d 'de' MMMM 'de' y, H:mm:ss",
              "yMMMMEd, H:mm:ss": "EEE, d 'de' MMMM 'de' y, H:mm:ss",
              "EEEE, d 'de' MMMM 'de' y, H:mm": "EEEE, d 'de' MMMM 'de' y, H:mm",
              "d 'de' MMMM 'de' y, H:mm": "d 'de' MMMM 'de' y, H:mm",
              "d MMM y, H:mm": "d MMM y, H:mm",
              "d/M/yy, H:mm": "d/M/yy, H:mm",
              "d, H:mm": "d, H:mm",
              "E, H:mm": "ccc, H:mm",
              "Ed, H:mm": "E d, H:mm",
              "Gy, H:mm": "y G, H:mm",
              "GyMd, H:mm": "d/M/y GGGGG, H:mm",
              "GyMMM, H:mm": "MMM y G, H:mm",
              "GyMMMd, H:mm": "d MMM y G, H:mm",
              "GyMMMEd, H:mm": "E, d MMM y G, H:mm",
              "GyMMMM, H:mm": "MMMM 'de' y G, H:mm",
              "GyMMMMd, H:mm": "d 'de' MMMM 'de' y G, H:mm",
              "GyMMMMEd, H:mm": "E, d 'de' MMMM 'de' y G, H:mm",
              "M, H:mm": "L, H:mm",
              "Md, H:mm": "d/M, H:mm",
              "MEd, H:mm": "E, d/M, H:mm",
              "MMd, H:mm": "d/M, H:mm",
              "MMdd, H:mm": "d/M, H:mm",
              "MMM, H:mm": "LLL, H:mm",
              "MMMd, H:mm": "d MMM, H:mm",
              "MMMEd, H:mm": "E, d MMM, H:mm",
              "MMMMd, H:mm": "d 'de' MMMM, H:mm",
              "MMMMEd, H:mm": "E, d 'de' MMMM, H:mm",
              "y, H:mm": "y, H:mm",
              "yM, H:mm": "M/y, H:mm",
              "yMd, H:mm": "d/M/y, H:mm",
              "yMEd, H:mm": "EEE, d/M/y, H:mm",
              "yMM, H:mm": "M/y, H:mm",
              "yMMM, H:mm": "MMM y, H:mm",
              "yMMMd, H:mm": "d MMM y, H:mm",
              "yMMMEd, H:mm": "EEE, d MMM y, H:mm",
              "yMMMM, H:mm": "MMMM 'de' y, H:mm",
              "yMMMMd, H:mm": "d 'de' MMMM 'de' y, H:mm",
              "yMMMMEd, H:mm": "EEE, d 'de' MMMM 'de' y, H:mm",
              "EEEE, d 'de' MMMM 'de' y, Bh": "EEEE, d 'de' MMMM 'de' y, h B",
              "d 'de' MMMM 'de' y, Bh": "d 'de' MMMM 'de' y, h B",
              "d MMM y, Bh": "d MMM y, h B",
              "d/M/yy, Bh": "d/M/yy, h B",
              "d, Bh": "d, h B",
              "E, Bh": "ccc, h B",
              "Ed, Bh": "E d, h B",
              "Gy, Bh": "y G, h B",
              "GyMd, Bh": "d/M/y GGGGG, h B",
              "GyMMM, Bh": "MMM y G, h B",
              "GyMMMd, Bh": "d MMM y G, h B",
              "GyMMMEd, Bh": "E, d MMM y G, h B",
              "GyMMMM, Bh": "MMMM 'de' y G, h B",
              "GyMMMMd, Bh": "d 'de' MMMM 'de' y G, h B",
              "GyMMMMEd, Bh": "E, d 'de' MMMM 'de' y G, h B",
              "M, Bh": "L, h B",
              "Md, Bh": "d/M, h B",
              "MEd, Bh": "E, d/M, h B",
              "MMd, Bh": "d/M, h B",
              "MMdd, Bh": "d/M, h B",
              "MMM, Bh": "LLL, h B",
              "MMMd, Bh": "d MMM, h B",
              "MMMEd, Bh": "E, d MMM, h B",
              "MMMMd, Bh": "d 'de' MMMM, h B",
              "MMMMEd, Bh": "E, d 'de' MMMM, h B",
              "y, Bh": "y, h B",
              "yM, Bh": "M/y, h B",
              "yMd, Bh": "d/M/y, h B",
              "yMEd, Bh": "EEE, d/M/y, h B",
              "yMM, Bh": "M/y, h B",
              "yMMM, Bh": "MMM y, h B",
              "yMMMd, Bh": "d MMM y, h B",
              "yMMMEd, Bh": "EEE, d MMM y, h B",
              "yMMMM, Bh": "MMMM 'de' y, h B",
              "yMMMMd, Bh": "d 'de' MMMM 'de' y, h B",
              "yMMMMEd, Bh": "EEE, d 'de' MMMM 'de' y, h B",
              "EEEE, d 'de' MMMM 'de' y, Bhm": "EEEE, d 'de' MMMM 'de' y, h:mm B",
              "d 'de' MMMM 'de' y, Bhm": "d 'de' MMMM 'de' y, h:mm B",
              "d MMM y, Bhm": "d MMM y, h:mm B",
              "d/M/yy, Bhm": "d/M/yy, h:mm B",
              "d, Bhm": "d, h:mm B",
              "E, Bhm": "ccc, h:mm B",
              "Ed, Bhm": "E d, h:mm B",
              "Gy, Bhm": "y G, h:mm B",
              "GyMd, Bhm": "d/M/y GGGGG, h:mm B",
              "GyMMM, Bhm": "MMM y G, h:mm B",
              "GyMMMd, Bhm": "d MMM y G, h:mm B",
              "GyMMMEd, Bhm": "E, d MMM y G, h:mm B",
              "GyMMMM, Bhm": "MMMM 'de' y G, h:mm B",
              "GyMMMMd, Bhm": "d 'de' MMMM 'de' y G, h:mm B",
              "GyMMMMEd, Bhm": "E, d 'de' MMMM 'de' y G, h:mm B",
              "M, Bhm": "L, h:mm B",
              "Md, Bhm": "d/M, h:mm B",
              "MEd, Bhm": "E, d/M, h:mm B",
              "MMd, Bhm": "d/M, h:mm B",
              "MMdd, Bhm": "d/M, h:mm B",
              "MMM, Bhm": "LLL, h:mm B",
              "MMMd, Bhm": "d MMM, h:mm B",
              "MMMEd, Bhm": "E, d MMM, h:mm B",
              "MMMMd, Bhm": "d 'de' MMMM, h:mm B",
              "MMMMEd, Bhm": "E, d 'de' MMMM, h:mm B",
              "y, Bhm": "y, h:mm B",
              "yM, Bhm": "M/y, h:mm B",
              "yMd, Bhm": "d/M/y, h:mm B",
              "yMEd, Bhm": "EEE, d/M/y, h:mm B",
              "yMM, Bhm": "M/y, h:mm B",
              "yMMM, Bhm": "MMM y, h:mm B",
              "yMMMd, Bhm": "d MMM y, h:mm B",
              "yMMMEd, Bhm": "EEE, d MMM y, h:mm B",
              "yMMMM, Bhm": "MMMM 'de' y, h:mm B",
              "yMMMMd, Bhm": "d 'de' MMMM 'de' y, h:mm B",
              "yMMMMEd, Bhm": "EEE, d 'de' MMMM 'de' y, h:mm B",
              "EEEE, d 'de' MMMM 'de' y, Bhms": "EEEE, d 'de' MMMM 'de' y, h:mm:ss B",
              "d 'de' MMMM 'de' y, Bhms": "d 'de' MMMM 'de' y, h:mm:ss B",
              "d MMM y, Bhms": "d MMM y, h:mm:ss B",
              "d/M/yy, Bhms": "d/M/yy, h:mm:ss B",
              "d, Bhms": "d, h:mm:ss B",
              "E, Bhms": "ccc, h:mm:ss B",
              "Ed, Bhms": "E d, h:mm:ss B",
              "Gy, Bhms": "y G, h:mm:ss B",
              "GyMd, Bhms": "d/M/y GGGGG, h:mm:ss B",
              "GyMMM, Bhms": "MMM y G, h:mm:ss B",
              "GyMMMd, Bhms": "d MMM y G, h:mm:ss B",
              "GyMMMEd, Bhms": "E, d MMM y G, h:mm:ss B",
              "GyMMMM, Bhms": "MMMM 'de' y G, h:mm:ss B",
              "GyMMMMd, Bhms": "d 'de' MMMM 'de' y G, h:mm:ss B",
              "GyMMMMEd, Bhms": "E, d 'de' MMMM 'de' y G, h:mm:ss B",
              "M, Bhms": "L, h:mm:ss B",
              "Md, Bhms": "d/M, h:mm:ss B",
              "MEd, Bhms": "E, d/M, h:mm:ss B",
              "MMd, Bhms": "d/M, h:mm:ss B",
              "MMdd, Bhms": "d/M, h:mm:ss B",
              "MMM, Bhms": "LLL, h:mm:ss B",
              "MMMd, Bhms": "d MMM, h:mm:ss B",
              "MMMEd, Bhms": "E, d MMM, h:mm:ss B",
              "MMMMd, Bhms": "d 'de' MMMM, h:mm:ss B",
              "MMMMEd, Bhms": "E, d 'de' MMMM, h:mm:ss B",
              "y, Bhms": "y, h:mm:ss B",
              "yM, Bhms": "M/y, h:mm:ss B",
              "yMd, Bhms": "d/M/y, h:mm:ss B",
              "yMEd, Bhms": "EEE, d/M/y, h:mm:ss B",
              "yMM, Bhms": "M/y, h:mm:ss B",
              "yMMM, Bhms": "MMM y, h:mm:ss B",
              "yMMMd, Bhms": "d MMM y, h:mm:ss B",
              "yMMMEd, Bhms": "EEE, d MMM y, h:mm:ss B",
              "yMMMM, Bhms": "MMMM 'de' y, h:mm:ss B",
              "yMMMMd, Bhms": "d 'de' MMMM 'de' y, h:mm:ss B",
              "yMMMMEd, Bhms": "EEE, d 'de' MMMM 'de' y, h:mm:ss B",
              "EEEE, d 'de' MMMM 'de' y, h": "EEEE, d 'de' MMMM 'de' y, h a",
              "d 'de' MMMM 'de' y, h": "d 'de' MMMM 'de' y, h a",
              "d MMM y, h": "d MMM y, h a",
              "d/M/yy, h": "d/M/yy, h a",
              "d, h": "d, h a",
              "E, h": "ccc, h a",
              "Ed, h": "E d, h a",
              "Gy, h": "y G, h a",
              "GyMd, h": "d/M/y GGGGG, h a",
              "GyMMM, h": "MMM y G, h a",
              "GyMMMd, h": "d MMM y G, h a",
              "GyMMMEd, h": "E, d MMM y G, h a",
              "GyMMMM, h": "MMMM 'de' y G, h a",
              "GyMMMMd, h": "d 'de' MMMM 'de' y G, h a",
              "GyMMMMEd, h": "E, d 'de' MMMM 'de' y G, h a",
              "M, h": "L, h a",
              "Md, h": "d/M, h a",
              "MEd, h": "E, d/M, h a",
              "MMd, h": "d/M, h a",
              "MMdd, h": "d/M, h a",
              "MMM, h": "LLL, h a",
              "MMMd, h": "d MMM, h a",
              "MMMEd, h": "E, d MMM, h a",
              "MMMMd, h": "d 'de' MMMM, h a",
              "MMMMEd, h": "E, d 'de' MMMM, h a",
              "y, h": "y, h a",
              "yM, h": "M/y, h a",
              "yMd, h": "d/M/y, h a",
              "yMEd, h": "EEE, d/M/y, h a",
              "yMM, h": "M/y, h a",
              "yMMM, h": "MMM y, h a",
              "yMMMd, h": "d MMM y, h a",
              "yMMMEd, h": "EEE, d MMM y, h a",
              "yMMMM, h": "MMMM 'de' y, h a",
              "yMMMMd, h": "d 'de' MMMM 'de' y, h a",
              "yMMMMEd, h": "EEE, d 'de' MMMM 'de' y, h a",
              "EEEE, d 'de' MMMM 'de' y, H": "EEEE, d 'de' MMMM 'de' y, H",
              "d 'de' MMMM 'de' y, H": "d 'de' MMMM 'de' y, H",
              "d MMM y, H": "d MMM y, H",
              "d/M/yy, H": "d/M/yy, H",
              "d, H": "d, H",
              "E, H": "ccc, H",
              "Ed, H": "E d, H",
              "Gy, H": "y G, H",
              "GyMd, H": "d/M/y GGGGG, H",
              "GyMMM, H": "MMM y G, H",
              "GyMMMd, H": "d MMM y G, H",
              "GyMMMEd, H": "E, d MMM y G, H",
              "GyMMMM, H": "MMMM 'de' y G, H",
              "GyMMMMd, H": "d 'de' MMMM 'de' y G, H",
              "GyMMMMEd, H": "E, d 'de' MMMM 'de' y G, H",
              "M, H": "L, H",
              "Md, H": "d/M, H",
              "MEd, H": "E, d/M, H",
              "MMd, H": "d/M, H",
              "MMdd, H": "d/M, H",
              "MMM, H": "LLL, H",
              "MMMd, H": "d MMM, H",
              "MMMEd, H": "E, d MMM, H",
              "MMMMd, H": "d 'de' MMMM, H",
              "MMMMEd, H": "E, d 'de' MMMM, H",
              "y, H": "y, H",
              "yM, H": "M/y, H",
              "yMd, H": "d/M/y, H",
              "yMEd, H": "EEE, d/M/y, H",
              "yMM, H": "M/y, H",
              "yMMM, H": "MMM y, H",
              "yMMMd, H": "d MMM y, H",
              "yMMMEd, H": "EEE, d MMM y, H",
              "yMMMM, H": "MMMM 'de' y, H",
              "yMMMMd, H": "d 'de' MMMM 'de' y, H",
              "yMMMMEd, H": "EEE, d 'de' MMMM 'de' y, H",
              "EEEE, d 'de' MMMM 'de' y, hm": "EEEE, d 'de' MMMM 'de' y, h:mm a",
              "d 'de' MMMM 'de' y, hm": "d 'de' MMMM 'de' y, h:mm a",
              "d MMM y, hm": "d MMM y, h:mm a",
              "d/M/yy, hm": "d/M/yy, h:mm a",
              "d, hm": "d, h:mm a",
              "E, hm": "ccc, h:mm a",
              "Ed, hm": "E d, h:mm a",
              "Gy, hm": "y G, h:mm a",
              "GyMd, hm": "d/M/y GGGGG, h:mm a",
              "GyMMM, hm": "MMM y G, h:mm a",
              "GyMMMd, hm": "d MMM y G, h:mm a",
              "GyMMMEd, hm": "E, d MMM y G, h:mm a",
              "GyMMMM, hm": "MMMM 'de' y G, h:mm a",
              "GyMMMMd, hm": "d 'de' MMMM 'de' y G, h:mm a",
              "GyMMMMEd, hm": "E, d 'de' MMMM 'de' y G, h:mm a",
              "M, hm": "L, h:mm a",
              "Md, hm": "d/M, h:mm a",
              "MEd, hm": "E, d/M, h:mm a",
              "MMd, hm": "d/M, h:mm a",
              "MMdd, hm": "d/M, h:mm a",
              "MMM, hm": "LLL, h:mm a",
              "MMMd, hm": "d MMM, h:mm a",
              "MMMEd, hm": "E, d MMM, h:mm a",
              "MMMMd, hm": "d 'de' MMMM, h:mm a",
              "MMMMEd, hm": "E, d 'de' MMMM, h:mm a",
              "y, hm": "y, h:mm a",
              "yM, hm": "M/y, h:mm a",
              "yMd, hm": "d/M/y, h:mm a",
              "yMEd, hm": "EEE, d/M/y, h:mm a",
              "yMM, hm": "M/y, h:mm a",
              "yMMM, hm": "MMM y, h:mm a",
              "yMMMd, hm": "d MMM y, h:mm a",
              "yMMMEd, hm": "EEE, d MMM y, h:mm a",
              "yMMMM, hm": "MMMM 'de' y, h:mm a",
              "yMMMMd, hm": "d 'de' MMMM 'de' y, h:mm a",
              "yMMMMEd, hm": "EEE, d 'de' MMMM 'de' y, h:mm a",
              "EEEE, d 'de' MMMM 'de' y, Hm": "EEEE, d 'de' MMMM 'de' y, H:mm",
              "d 'de' MMMM 'de' y, Hm": "d 'de' MMMM 'de' y, H:mm",
              "d MMM y, Hm": "d MMM y, H:mm",
              "d/M/yy, Hm": "d/M/yy, H:mm",
              "d, Hm": "d, H:mm",
              "E, Hm": "ccc, H:mm",
              "Ed, Hm": "E d, H:mm",
              "Gy, Hm": "y G, H:mm",
              "GyMd, Hm": "d/M/y GGGGG, H:mm",
              "GyMMM, Hm": "MMM y G, H:mm",
              "GyMMMd, Hm": "d MMM y G, H:mm",
              "GyMMMEd, Hm": "E, d MMM y G, H:mm",
              "GyMMMM, Hm": "MMMM 'de' y G, H:mm",
              "GyMMMMd, Hm": "d 'de' MMMM 'de' y G, H:mm",
              "GyMMMMEd, Hm": "E, d 'de' MMMM 'de' y G, H:mm",
              "M, Hm": "L, H:mm",
              "Md, Hm": "d/M, H:mm",
              "MEd, Hm": "E, d/M, H:mm",
              "MMd, Hm": "d/M, H:mm",
              "MMdd, Hm": "d/M, H:mm",
              "MMM, Hm": "LLL, H:mm",
              "MMMd, Hm": "d MMM, H:mm",
              "MMMEd, Hm": "E, d MMM, H:mm",
              "MMMMd, Hm": "d 'de' MMMM, H:mm",
              "MMMMEd, Hm": "E, d 'de' MMMM, H:mm",
              "y, Hm": "y, H:mm",
              "yM, Hm": "M/y, H:mm",
              "yMd, Hm": "d/M/y, H:mm",
              "yMEd, Hm": "EEE, d/M/y, H:mm",
              "yMM, Hm": "M/y, H:mm",
              "yMMM, Hm": "MMM y, H:mm",
              "yMMMd, Hm": "d MMM y, H:mm",
              "yMMMEd, Hm": "EEE, d MMM y, H:mm",
              "yMMMM, Hm": "MMMM 'de' y, H:mm",
              "yMMMMd, Hm": "d 'de' MMMM 'de' y, H:mm",
              "yMMMMEd, Hm": "EEE, d 'de' MMMM 'de' y, H:mm",
              "EEEE, d 'de' MMMM 'de' y, hms": "EEEE, d 'de' MMMM 'de' y, h:mm:ss a",
              "d 'de' MMMM 'de' y, hms": "d 'de' MMMM 'de' y, h:mm:ss a",
              "d MMM y, hms": "d MMM y, h:mm:ss a",
              "d/M/yy, hms": "d/M/yy, h:mm:ss a",
              "d, hms": "d, h:mm:ss a",
              "E, hms": "ccc, h:mm:ss a",
              "Ed, hms": "E d, h:mm:ss a",
              "Gy, hms": "y G, h:mm:ss a",
              "GyMd, hms": "d/M/y GGGGG, h:mm:ss a",
              "GyMMM, hms": "MMM y G, h:mm:ss a",
              "GyMMMd, hms": "d MMM y G, h:mm:ss a",
              "GyMMMEd, hms": "E, d MMM y G, h:mm:ss a",
              "GyMMMM, hms": "MMMM 'de' y G, h:mm:ss a",
              "GyMMMMd, hms": "d 'de' MMMM 'de' y G, h:mm:ss a",
              "GyMMMMEd, hms": "E, d 'de' MMMM 'de' y G, h:mm:ss a",
              "M, hms": "L, h:mm:ss a",
              "Md, hms": "d/M, h:mm:ss a",
              "MEd, hms": "E, d/M, h:mm:ss a",
              "MMd, hms": "d/M, h:mm:ss a",
              "MMdd, hms": "d/M, h:mm:ss a",
              "MMM, hms": "LLL, h:mm:ss a",
              "MMMd, hms": "d MMM, h:mm:ss a",
              "MMMEd, hms": "E, d MMM, h:mm:ss a",
              "MMMMd, hms": "d 'de' MMMM, h:mm:ss a",
              "MMMMEd, hms": "E, d 'de' MMMM, h:mm:ss a",
              "y, hms": "y, h:mm:ss a",
              "yM, hms": "M/y, h:mm:ss a",
              "yMd, hms": "d/M/y, h:mm:ss a",
              "yMEd, hms": "EEE, d/M/y, h:mm:ss a",
              "yMM, hms": "M/y, h:mm:ss a",
              "yMMM, hms": "MMM y, h:mm:ss a",
              "yMMMd, hms": "d MMM y, h:mm:ss a",
              "yMMMEd, hms": "EEE, d MMM y, h:mm:ss a",
              "yMMMM, hms": "MMMM 'de' y, h:mm:ss a",
              "yMMMMd, hms": "d 'de' MMMM 'de' y, h:mm:ss a",
              "yMMMMEd, hms": "EEE, d 'de' MMMM 'de' y, h:mm:ss a",
              "EEEE, d 'de' MMMM 'de' y, Hms": "EEEE, d 'de' MMMM 'de' y, H:mm:ss",
              "d 'de' MMMM 'de' y, Hms": "d 'de' MMMM 'de' y, H:mm:ss",
              "d MMM y, Hms": "d MMM y, H:mm:ss",
              "d/M/yy, Hms": "d/M/yy, H:mm:ss",
              "d, Hms": "d, H:mm:ss",
              "E, Hms": "ccc, H:mm:ss",
              "Ed, Hms": "E d, H:mm:ss",
              "Gy, Hms": "y G, H:mm:ss",
              "GyMd, Hms": "d/M/y GGGGG, H:mm:ss",
              "GyMMM, Hms": "MMM y G, H:mm:ss",
              "GyMMMd, Hms": "d MMM y G, H:mm:ss",
              "GyMMMEd, Hms": "E, d MMM y G, H:mm:ss",
              "GyMMMM, Hms": "MMMM 'de' y G, H:mm:ss",
              "GyMMMMd, Hms": "d 'de' MMMM 'de' y G, H:mm:ss",
              "GyMMMMEd, Hms": "E, d 'de' MMMM 'de' y G, H:mm:ss",
              "M, Hms": "L, H:mm:ss",
              "Md, Hms": "d/M, H:mm:ss",
              "MEd, Hms": "E, d/M, H:mm:ss",
              "MMd, Hms": "d/M, H:mm:ss",
              "MMdd, Hms": "d/M, H:mm:ss",
              "MMM, Hms": "LLL, H:mm:ss",
              "MMMd, Hms": "d MMM, H:mm:ss",
              "MMMEd, Hms": "E, d MMM, H:mm:ss",
              "MMMMd, Hms": "d 'de' MMMM, H:mm:ss",
              "MMMMEd, Hms": "E, d 'de' MMMM, H:mm:ss",
              "y, Hms": "y, H:mm:ss",
              "yM, Hms": "M/y, H:mm:ss",
              "yMd, Hms": "d/M/y, H:mm:ss",
              "yMEd, Hms": "EEE, d/M/y, H:mm:ss",
              "yMM, Hms": "M/y, H:mm:ss",
              "yMMM, Hms": "MMM y, H:mm:ss",
              "yMMMd, Hms": "d MMM y, H:mm:ss",
              "yMMMEd, Hms": "EEE, d MMM y, H:mm:ss",
              "yMMMM, Hms": "MMMM 'de' y, H:mm:ss",
              "yMMMMd, Hms": "d 'de' MMMM 'de' y, H:mm:ss",
              "yMMMMEd, Hms": "EEE, d 'de' MMMM 'de' y, H:mm:ss",
              "EEEE, d 'de' MMMM 'de' y, hmsv": "EEEE, d 'de' MMMM 'de' y, h:mm:ss a v",
              "d 'de' MMMM 'de' y, hmsv": "d 'de' MMMM 'de' y, h:mm:ss a v",
              "d MMM y, hmsv": "d MMM y, h:mm:ss a v",
              "d/M/yy, hmsv": "d/M/yy, h:mm:ss a v",
              "d, hmsv": "d, h:mm:ss a v",
              "E, hmsv": "ccc, h:mm:ss a v",
              "Ed, hmsv": "E d, h:mm:ss a v",
              "Gy, hmsv": "y G, h:mm:ss a v",
              "GyMd, hmsv": "d/M/y GGGGG, h:mm:ss a v",
              "GyMMM, hmsv": "MMM y G, h:mm:ss a v",
              "GyMMMd, hmsv": "d MMM y G, h:mm:ss a v",
              "GyMMMEd, hmsv": "E, d MMM y G, h:mm:ss a v",
              "GyMMMM, hmsv": "MMMM 'de' y G, h:mm:ss a v",
              "GyMMMMd, hmsv": "d 'de' MMMM 'de' y G, h:mm:ss a v",
              "GyMMMMEd, hmsv": "E, d 'de' MMMM 'de' y G, h:mm:ss a v",
              "M, hmsv": "L, h:mm:ss a v",
              "Md, hmsv": "d/M, h:mm:ss a v",
              "MEd, hmsv": "E, d/M, h:mm:ss a v",
              "MMd, hmsv": "d/M, h:mm:ss a v",
              "MMdd, hmsv": "d/M, h:mm:ss a v",
              "MMM, hmsv": "LLL, h:mm:ss a v",
              "MMMd, hmsv": "d MMM, h:mm:ss a v",
              "MMMEd, hmsv": "E, d MMM, h:mm:ss a v",
              "MMMMd, hmsv": "d 'de' MMMM, h:mm:ss a v",
              "MMMMEd, hmsv": "E, d 'de' MMMM, h:mm:ss a v",
              "y, hmsv": "y, h:mm:ss a v",
              "yM, hmsv": "M/y, h:mm:ss a v",
              "yMd, hmsv": "d/M/y, h:mm:ss a v",
              "yMEd, hmsv": "EEE, d/M/y, h:mm:ss a v",
              "yMM, hmsv": "M/y, h:mm:ss a v",
              "yMMM, hmsv": "MMM y, h:mm:ss a v",
              "yMMMd, hmsv": "d MMM y, h:mm:ss a v",
              "yMMMEd, hmsv": "EEE, d MMM y, h:mm:ss a v",
              "yMMMM, hmsv": "MMMM 'de' y, h:mm:ss a v",
              "yMMMMd, hmsv": "d 'de' MMMM 'de' y, h:mm:ss a v",
              "yMMMMEd, hmsv": "EEE, d 'de' MMMM 'de' y, h:mm:ss a v",
              "EEEE, d 'de' MMMM 'de' y, Hmsv": "EEEE, d 'de' MMMM 'de' y, H:mm:ss v",
              "d 'de' MMMM 'de' y, Hmsv": "d 'de' MMMM 'de' y, H:mm:ss v",
              "d MMM y, Hmsv": "d MMM y, H:mm:ss v",
              "d/M/yy, Hmsv": "d/M/yy, H:mm:ss v",
              "d, Hmsv": "d, H:mm:ss v",
              "E, Hmsv": "ccc, H:mm:ss v",
              "Ed, Hmsv": "E d, H:mm:ss v",
              "Gy, Hmsv": "y G, H:mm:ss v",
              "GyMd, Hmsv": "d/M/y GGGGG, H:mm:ss v",
              "GyMMM, Hmsv": "MMM y G, H:mm:ss v",
              "GyMMMd, Hmsv": "d MMM y G, H:mm:ss v",
              "GyMMMEd, Hmsv": "E, d MMM y G, H:mm:ss v",
              "GyMMMM, Hmsv": "MMMM 'de' y G, H:mm:ss v",
              "GyMMMMd, Hmsv": "d 'de' MMMM 'de' y G, H:mm:ss v",
              "GyMMMMEd, Hmsv": "E, d 'de' MMMM 'de' y G, H:mm:ss v",
              "M, Hmsv": "L, H:mm:ss v",
              "Md, Hmsv": "d/M, H:mm:ss v",
              "MEd, Hmsv": "E, d/M, H:mm:ss v",
              "MMd, Hmsv": "d/M, H:mm:ss v",
              "MMdd, Hmsv": "d/M, H:mm:ss v",
              "MMM, Hmsv": "LLL, H:mm:ss v",
              "MMMd, Hmsv": "d MMM, H:mm:ss v",
              "MMMEd, Hmsv": "E, d MMM, H:mm:ss v",
              "MMMMd, Hmsv": "d 'de' MMMM, H:mm:ss v",
              "MMMMEd, Hmsv": "E, d 'de' MMMM, H:mm:ss v",
              "y, Hmsv": "y, H:mm:ss v",
              "yM, Hmsv": "M/y, H:mm:ss v",
              "yMd, Hmsv": "d/M/y, H:mm:ss v",
              "yMEd, Hmsv": "EEE, d/M/y, H:mm:ss v",
              "yMM, Hmsv": "M/y, H:mm:ss v",
              "yMMM, Hmsv": "MMM y, H:mm:ss v",
              "yMMMd, Hmsv": "d MMM y, H:mm:ss v",
              "yMMMEd, Hmsv": "EEE, d MMM y, H:mm:ss v",
              "yMMMM, Hmsv": "MMMM 'de' y, H:mm:ss v",
              "yMMMMd, Hmsv": "d 'de' MMMM 'de' y, H:mm:ss v",
              "yMMMMEd, Hmsv": "EEE, d 'de' MMMM 'de' y, H:mm:ss v",
              "EEEE, d 'de' MMMM 'de' y, hmsvvvv": "EEEE, d 'de' MMMM 'de' y, h:mm:ss a (vvvv)",
              "d 'de' MMMM 'de' y, hmsvvvv": "d 'de' MMMM 'de' y, h:mm:ss a (vvvv)",
              "d MMM y, hmsvvvv": "d MMM y, h:mm:ss a (vvvv)",
              "d/M/yy, hmsvvvv": "d/M/yy, h:mm:ss a (vvvv)",
              "d, hmsvvvv": "d, h:mm:ss a (vvvv)",
              "E, hmsvvvv": "ccc, h:mm:ss a (vvvv)",
              "Ed, hmsvvvv": "E d, h:mm:ss a (vvvv)",
              "Gy, hmsvvvv": "y G, h:mm:ss a (vvvv)",
              "GyMd, hmsvvvv": "d/M/y GGGGG, h:mm:ss a (vvvv)",
              "GyMMM, hmsvvvv": "MMM y G, h:mm:ss a (vvvv)",
              "GyMMMd, hmsvvvv": "d MMM y G, h:mm:ss a (vvvv)",
              "GyMMMEd, hmsvvvv": "E, d MMM y G, h:mm:ss a (vvvv)",
              "GyMMMM, hmsvvvv": "MMMM 'de' y G, h:mm:ss a (vvvv)",
              "GyMMMMd, hmsvvvv": "d 'de' MMMM 'de' y G, h:mm:ss a (vvvv)",
              "GyMMMMEd, hmsvvvv": "E, d 'de' MMMM 'de' y G, h:mm:ss a (vvvv)",
              "M, hmsvvvv": "L, h:mm:ss a (vvvv)",
              "Md, hmsvvvv": "d/M, h:mm:ss a (vvvv)",
              "MEd, hmsvvvv": "E, d/M, h:mm:ss a (vvvv)",
              "MMd, hmsvvvv": "d/M, h:mm:ss a (vvvv)",
              "MMdd, hmsvvvv": "d/M, h:mm:ss a (vvvv)",
              "MMM, hmsvvvv": "LLL, h:mm:ss a (vvvv)",
              "MMMd, hmsvvvv": "d MMM, h:mm:ss a (vvvv)",
              "MMMEd, hmsvvvv": "E, d MMM, h:mm:ss a (vvvv)",
              "MMMMd, hmsvvvv": "d 'de' MMMM, h:mm:ss a (vvvv)",
              "MMMMEd, hmsvvvv": "E, d 'de' MMMM, h:mm:ss a (vvvv)",
              "y, hmsvvvv": "y, h:mm:ss a (vvvv)",
              "yM, hmsvvvv": "M/y, h:mm:ss a (vvvv)",
              "yMd, hmsvvvv": "d/M/y, h:mm:ss a (vvvv)",
              "yMEd, hmsvvvv": "EEE, d/M/y, h:mm:ss a (vvvv)",
              "yMM, hmsvvvv": "M/y, h:mm:ss a (vvvv)",
              "yMMM, hmsvvvv": "MMM y, h:mm:ss a (vvvv)",
              "yMMMd, hmsvvvv": "d MMM y, h:mm:ss a (vvvv)",
              "yMMMEd, hmsvvvv": "EEE, d MMM y, h:mm:ss a (vvvv)",
              "yMMMM, hmsvvvv": "MMMM 'de' y, h:mm:ss a (vvvv)",
              "yMMMMd, hmsvvvv": "d 'de' MMMM 'de' y, h:mm:ss a (vvvv)",
              "yMMMMEd, hmsvvvv": "EEE, d 'de' MMMM 'de' y, h:mm:ss a (vvvv)",
              "EEEE, d 'de' MMMM 'de' y, Hmsvvvv": "EEEE, d 'de' MMMM 'de' y, H:mm:ss (vvvv)",
              "d 'de' MMMM 'de' y, Hmsvvvv": "d 'de' MMMM 'de' y, H:mm:ss (vvvv)",
              "d MMM y, Hmsvvvv": "d MMM y, H:mm:ss (vvvv)",
              "d/M/yy, Hmsvvvv": "d/M/yy, H:mm:ss (vvvv)",
              "d, Hmsvvvv": "d, H:mm:ss (vvvv)",
              "E, Hmsvvvv": "ccc, H:mm:ss (vvvv)",
              "Ed, Hmsvvvv": "E d, H:mm:ss (vvvv)",
              "Gy, Hmsvvvv": "y G, H:mm:ss (vvvv)",
              "GyMd, Hmsvvvv": "d/M/y GGGGG, H:mm:ss (vvvv)",
              "GyMMM, Hmsvvvv": "MMM y G, H:mm:ss (vvvv)",
              "GyMMMd, Hmsvvvv": "d MMM y G, H:mm:ss (vvvv)",
              "GyMMMEd, Hmsvvvv": "E, d MMM y G, H:mm:ss (vvvv)",
              "GyMMMM, Hmsvvvv": "MMMM 'de' y G, H:mm:ss (vvvv)",
              "GyMMMMd, Hmsvvvv": "d 'de' MMMM 'de' y G, H:mm:ss (vvvv)",
              "GyMMMMEd, Hmsvvvv": "E, d 'de' MMMM 'de' y G, H:mm:ss (vvvv)",
              "M, Hmsvvvv": "L, H:mm:ss (vvvv)",
              "Md, Hmsvvvv": "d/M, H:mm:ss (vvvv)",
              "MEd, Hmsvvvv": "E, d/M, H:mm:ss (vvvv)",
              "MMd, Hmsvvvv": "d/M, H:mm:ss (vvvv)",
              "MMdd, Hmsvvvv": "d/M, H:mm:ss (vvvv)",
              "MMM, Hmsvvvv": "LLL, H:mm:ss (vvvv)",
              "MMMd, Hmsvvvv": "d MMM, H:mm:ss (vvvv)",
              "MMMEd, Hmsvvvv": "E, d MMM, H:mm:ss (vvvv)",
              "MMMMd, Hmsvvvv": "d 'de' MMMM, H:mm:ss (vvvv)",
              "MMMMEd, Hmsvvvv": "E, d 'de' MMMM, H:mm:ss (vvvv)",
              "y, Hmsvvvv": "y, H:mm:ss (vvvv)",
              "yM, Hmsvvvv": "M/y, H:mm:ss (vvvv)",
              "yMd, Hmsvvvv": "d/M/y, H:mm:ss (vvvv)",
              "yMEd, Hmsvvvv": "EEE, d/M/y, H:mm:ss (vvvv)",
              "yMM, Hmsvvvv": "M/y, H:mm:ss (vvvv)",
              "yMMM, Hmsvvvv": "MMM y, H:mm:ss (vvvv)",
              "yMMMd, Hmsvvvv": "d MMM y, H:mm:ss (vvvv)",
              "yMMMEd, Hmsvvvv": "EEE, d MMM y, H:mm:ss (vvvv)",
              "yMMMM, Hmsvvvv": "MMMM 'de' y, H:mm:ss (vvvv)",
              "yMMMMd, Hmsvvvv": "d 'de' MMMM 'de' y, H:mm:ss (vvvv)",
              "yMMMMEd, Hmsvvvv": "EEE, d 'de' MMMM 'de' y, H:mm:ss (vvvv)",
              "EEEE, d 'de' MMMM 'de' y, hmv": "EEEE, d 'de' MMMM 'de' y, h:mm a v",
              "d 'de' MMMM 'de' y, hmv": "d 'de' MMMM 'de' y, h:mm a v",
              "d MMM y, hmv": "d MMM y, h:mm a v",
              "d/M/yy, hmv": "d/M/yy, h:mm a v",
              "d, hmv": "d, h:mm a v",
              "E, hmv": "ccc, h:mm a v",
              "Ed, hmv": "E d, h:mm a v",
              "Gy, hmv": "y G, h:mm a v",
              "GyMd, hmv": "d/M/y GGGGG, h:mm a v",
              "GyMMM, hmv": "MMM y G, h:mm a v",
              "GyMMMd, hmv": "d MMM y G, h:mm a v",
              "GyMMMEd, hmv": "E, d MMM y G, h:mm a v",
              "GyMMMM, hmv": "MMMM 'de' y G, h:mm a v",
              "GyMMMMd, hmv": "d 'de' MMMM 'de' y G, h:mm a v",
              "GyMMMMEd, hmv": "E, d 'de' MMMM 'de' y G, h:mm a v",
              "M, hmv": "L, h:mm a v",
              "Md, hmv": "d/M, h:mm a v",
              "MEd, hmv": "E, d/M, h:mm a v",
              "MMd, hmv": "d/M, h:mm a v",
              "MMdd, hmv": "d/M, h:mm a v",
              "MMM, hmv": "LLL, h:mm a v",
              "MMMd, hmv": "d MMM, h:mm a v",
              "MMMEd, hmv": "E, d MMM, h:mm a v",
              "MMMMd, hmv": "d 'de' MMMM, h:mm a v",
              "MMMMEd, hmv": "E, d 'de' MMMM, h:mm a v",
              "y, hmv": "y, h:mm a v",
              "yM, hmv": "M/y, h:mm a v",
              "yMd, hmv": "d/M/y, h:mm a v",
              "yMEd, hmv": "EEE, d/M/y, h:mm a v",
              "yMM, hmv": "M/y, h:mm a v",
              "yMMM, hmv": "MMM y, h:mm a v",
              "yMMMd, hmv": "d MMM y, h:mm a v",
              "yMMMEd, hmv": "EEE, d MMM y, h:mm a v",
              "yMMMM, hmv": "MMMM 'de' y, h:mm a v",
              "yMMMMd, hmv": "d 'de' MMMM 'de' y, h:mm a v",
              "yMMMMEd, hmv": "EEE, d 'de' MMMM 'de' y, h:mm a v",
              "EEEE, d 'de' MMMM 'de' y, Hmv": "EEEE, d 'de' MMMM 'de' y, H:mm v",
              "d 'de' MMMM 'de' y, Hmv": "d 'de' MMMM 'de' y, H:mm v",
              "d MMM y, Hmv": "d MMM y, H:mm v",
              "d/M/yy, Hmv": "d/M/yy, H:mm v",
              "d, Hmv": "d, H:mm v",
              "E, Hmv": "ccc, H:mm v",
              "Ed, Hmv": "E d, H:mm v",
              "Gy, Hmv": "y G, H:mm v",
              "GyMd, Hmv": "d/M/y GGGGG, H:mm v",
              "GyMMM, Hmv": "MMM y G, H:mm v",
              "GyMMMd, Hmv": "d MMM y G, H:mm v",
              "GyMMMEd, Hmv": "E, d MMM y G, H:mm v",
              "GyMMMM, Hmv": "MMMM 'de' y G, H:mm v",
              "GyMMMMd, Hmv": "d 'de' MMMM 'de' y G, H:mm v",
              "GyMMMMEd, Hmv": "E, d 'de' MMMM 'de' y G, H:mm v",
              "M, Hmv": "L, H:mm v",
              "Md, Hmv": "d/M, H:mm v",
              "MEd, Hmv": "E, d/M, H:mm v",
              "MMd, Hmv": "d/M, H:mm v",
              "MMdd, Hmv": "d/M, H:mm v",
              "MMM, Hmv": "LLL, H:mm v",
              "MMMd, Hmv": "d MMM, H:mm v",
              "MMMEd, Hmv": "E, d MMM, H:mm v",
              "MMMMd, Hmv": "d 'de' MMMM, H:mm v",
              "MMMMEd, Hmv": "E, d 'de' MMMM, H:mm v",
              "y, Hmv": "y, H:mm v",
              "yM, Hmv": "M/y, H:mm v",
              "yMd, Hmv": "d/M/y, H:mm v",
              "yMEd, Hmv": "EEE, d/M/y, H:mm v",
              "yMM, Hmv": "M/y, H:mm v",
              "yMMM, Hmv": "MMM y, H:mm v",
              "yMMMd, Hmv": "d MMM y, H:mm v",
              "yMMMEd, Hmv": "EEE, d MMM y, H:mm v",
              "yMMMM, Hmv": "MMMM 'de' y, H:mm v",
              "yMMMMd, Hmv": "d 'de' MMMM 'de' y, H:mm v",
              "yMMMMEd, Hmv": "EEE, d 'de' MMMM 'de' y, H:mm v",
              "EEEE, d 'de' MMMM 'de' y, ms": "EEEE, d 'de' MMMM 'de' y, mm:ss",
              "d 'de' MMMM 'de' y, ms": "d 'de' MMMM 'de' y, mm:ss",
              "d MMM y, ms": "d MMM y, mm:ss",
              "d/M/yy, ms": "d/M/yy, mm:ss",
              "d, ms": "d, mm:ss",
              "E, ms": "ccc, mm:ss",
              "Ed, ms": "E d, mm:ss",
              "Gy, ms": "y G, mm:ss",
              "GyMd, ms": "d/M/y GGGGG, mm:ss",
              "GyMMM, ms": "MMM y G, mm:ss",
              "GyMMMd, ms": "d MMM y G, mm:ss",
              "GyMMMEd, ms": "E, d MMM y G, mm:ss",
              "GyMMMM, ms": "MMMM 'de' y G, mm:ss",
              "GyMMMMd, ms": "d 'de' MMMM 'de' y G, mm:ss",
              "GyMMMMEd, ms": "E, d 'de' MMMM 'de' y G, mm:ss",
              "M, ms": "L, mm:ss",
              "Md, ms": "d/M, mm:ss",
              "MEd, ms": "E, d/M, mm:ss",
              "MMd, ms": "d/M, mm:ss",
              "MMdd, ms": "d/M, mm:ss",
              "MMM, ms": "LLL, mm:ss",
              "MMMd, ms": "d MMM, mm:ss",
              "MMMEd, ms": "E, d MMM, mm:ss",
              "MMMMd, ms": "d 'de' MMMM, mm:ss",
              "MMMMEd, ms": "E, d 'de' MMMM, mm:ss",
              "y, ms": "y, mm:ss",
              "yM, ms": "M/y, mm:ss",
              "yMd, ms": "d/M/y, mm:ss",
              "yMEd, ms": "EEE, d/M/y, mm:ss",
              "yMM, ms": "M/y, mm:ss",
              "yMMM, ms": "MMM y, mm:ss",
              "yMMMd, ms": "d MMM y, mm:ss",
              "yMMMEd, ms": "EEE, d MMM y, mm:ss",
              "yMMMM, ms": "MMMM 'de' y, mm:ss",
              "yMMMMd, ms": "d 'de' MMMM 'de' y, mm:ss",
              "yMMMMEd, ms": "EEE, d 'de' MMMM 'de' y, mm:ss"
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
              G: "M/y G – M/y G",
              M: "M/y – M/y G",
              y: "M/y – M/y G"
            },
            GyMd: {
              d: "d/M/y – d/M/y G",
              G: "d/M/y G – d/M/y G",
              M: "d/M/y – d/M/y G",
              y: "d/M/y – d/M/y G"
            },
            GyMEd: {
              d: "E, d/M/y – E, d/M/y G",
              G: "E, d/M/y G – E, d/M/y G",
              M: "E, d/M/y – E, d/M/y G",
              y: "E, d/M/y – E, d/M/y G"
            },
            GyMMM: {
              G: "MMM y G – MMM y G",
              M: "MMM–MMM y G",
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
              a: "h a – h a",
              h: "h–h a"
            },
            H: {
              H: "H–H"
            },
            hm: {
              a: "h:mm a – h:mm a",
              h: "h:mm – h:mm a",
              m: "h:mm – h:mm a"
            },
            Hm: {
              H: "H:mm–H:mm",
              m: "H:mm–H:mm"
            },
            hmv: {
              a: "h:mm a – h:mm a v",
              h: "h:mm–h:mm a v",
              m: "h:mm–h:mm a v"
            },
            Hmv: {
              H: "H:mm–H:mm v",
              m: "H:mm–H:mm v"
            },
            hv: {
              a: "h a – h a v",
              h: "h–h a v"
            },
            Hv: {
              H: "H–H v"
            },
            M: {
              M: "M–M"
            },
            Md: {
              d: "d/M – d/M",
              M: "d/M – d/M"
            },
            MEd: {
              d: "E, d/M – E, d/M",
              M: "E, d/M – E, d/M"
            },
            MMM: {
              M: "MMM–MMM"
            },
            MMMd: {
              d: "d–d MMM",
              M: "d MMM – d MMM"
            },
            MMMEd: {
              d: "E, d MMM – E, d MMM",
              M: "E, d MMM – E, d MMM"
            },
            MMMMd: {
              d: "d–d 'de' MMMM",
              M: "d 'de' MMMM – d 'de' MMMM"
            },
            MMMMEd: {
              d: "E, d 'de' MMMM – E, d 'de' MMMM",
              M: "E, d 'de' MMMM – E, d 'de' MMMM"
            },
            y: {
              y: "y–y"
            },
            yM: {
              M: "M/y – M/y",
              y: "M/y – M/y"
            },
            yMd: {
              d: "d/M/y – d/M/y",
              M: "d/M/y – d/M/y",
              y: "d/M/y – d/M/y"
            },
            yMEd: {
              d: "E, d/M/y – E, d/M/y",
              M: "E, d/M/y – E, d/M/y",
              y: "E, d/M/y – E, d/M/y"
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
              d: "E, d MMM – E, d MMM y",
              M: "E, d MMM – E, d MMM y",
              y: "E, d MMM y – E, d MMM y"
            },
            yMMMM: {
              M: "MMMM–MMMM 'de' y",
              y: "MMMM 'de' y – MMMM 'de' y"
            },
            yMMMMd: {
              d: "d–d 'de' MMMM 'de' y",
              M: "d 'de' MMMM – d 'de' MMMM 'de' y",
              y: "d 'de' MMMM 'de' y – d 'de' MMMM 'de' y"
            },
            yMMMMEd: {
              d: "E, d 'de' MMMM – E, d 'de' MMMM 'de' y",
              M: "E, d 'de' MMMM – E, d 'de' MMMM 'de' y",
              y: "E, d 'de' MMMM 'de' y – E, d 'de' MMMM 'de' y"
            }
          },
          hourCycle: "h23",
          nu: ["latn"],
          ca: ["gregory"],
          hc: ["h23", "", "h12", ""]
        },
        locale: "es"
      })
    }
  }
]);