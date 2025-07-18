try {
  let M = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new M.Error).stack;
  d && (M._sentryDebugIds = M._sentryDebugIds || {}, M._sentryDebugIds[d] = "060a1676-af42-4459-9a76-c978c2b469a7", M._sentryDebugIdIdentifier = "sentry-dbid-060a1676-af42-4459-9a76-c978c2b469a7")
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
  [662], {
    99006: () => {
      Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
        data: {
          am: "AM",
          pm: "PM",
          weekday: {
            narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
            short: ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sáb."],
            long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
          },
          era: {
            narrow: {
              BC: "a.C.",
              AD: "d.C."
            },
            short: {
              BC: "a.C.",
              AD: "d.C."
            },
            long: {
              BC: "antes de Cristo",
              AD: "depois de Cristo"
            }
          },
          month: {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            short: ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."],
            long: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
          },
          timeZoneName: {
            "America/Rio_Branco": {
              long: ["Horário Padrão do Acre", "Horário de Verão do Acre"],
              short: ["ACT", "ACST"]
            },
            "Asia/Kabul": {
              long: ["Horário do Afeganistão", "Horário do Afeganistão"]
            },
            "Africa/Maputo": {
              long: ["Horário da África Central", "Horário da África Central"]
            },
            "Africa/Bujumbura": {
              long: ["Horário da África Central", "Horário da África Central"]
            },
            "Africa/Gaborone": {
              long: ["Horário da África Central", "Horário da África Central"]
            },
            "Africa/Lubumbashi": {
              long: ["Horário da África Central", "Horário da África Central"]
            },
            "Africa/Blantyre": {
              long: ["Horário da África Central", "Horário da África Central"]
            },
            "Africa/Kigali": {
              long: ["Horário da África Central", "Horário da África Central"]
            },
            "Africa/Lusaka": {
              long: ["Horário da África Central", "Horário da África Central"]
            },
            "Africa/Harare": {
              long: ["Horário da África Central", "Horário da África Central"]
            },
            "Africa/Nairobi": {
              long: ["Horário da África Oriental", "Horário da África Oriental"]
            },
            "Africa/Djibouti": {
              long: ["Horário da África Oriental", "Horário da África Oriental"]
            },
            "Africa/Asmera": {
              long: ["Horário da África Oriental", "Horário da África Oriental"]
            },
            "Africa/Addis_Ababa": {
              long: ["Horário da África Oriental", "Horário da África Oriental"]
            },
            "Indian/Comoro": {
              long: ["Horário da África Oriental", "Horário da África Oriental"]
            },
            "Indian/Antananarivo": {
              long: ["Horário da África Oriental", "Horário da África Oriental"]
            },
            "Africa/Mogadishu": {
              long: ["Horário da África Oriental", "Horário da África Oriental"]
            },
            "Africa/Dar_es_Salaam": {
              long: ["Horário da África Oriental", "Horário da África Oriental"]
            },
            "Africa/Kampala": {
              long: ["Horário da África Oriental", "Horário da África Oriental"]
            },
            "Indian/Mayotte": {
              long: ["Horário da África Oriental", "Horário da África Oriental"]
            },
            "Africa/Johannesburg": {
              long: ["Horário da África do Sul", "Horário da África do Sul"]
            },
            "Africa/Maseru": {
              long: ["Horário da África do Sul", "Horário da África do Sul"]
            },
            "Africa/Mbabane": {
              long: ["Horário da África do Sul", "Horário da África do Sul"]
            },
            "Africa/Lagos": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Africa/Luanda": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Africa/Porto-Novo": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Africa/Kinshasa": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Africa/Bangui": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Africa/Brazzaville": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Africa/Douala": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Africa/Libreville": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Africa/Malabo": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Africa/Niamey": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Africa/Ndjamena": {
              long: ["Horário Padrão da África Ocidental", "Horário de Verão da África Ocidental"]
            },
            "Asia/Aqtobe": {
              long: ["Horário do Cazaquistão Ocidental", "Horário do Cazaquistão Ocidental"]
            },
            "America/Juneau": {
              long: ["Horário Padrão do Alasca", "Horário de Verão do Alasca"]
            },
            "Asia/Almaty": {
              long: ["Horário do Cazaquistão Oriental", "Horário do Cazaquistão Oriental"]
            },
            "America/Manaus": {
              long: ["Horário Padrão do Amazonas", "Horário de Verão do Amazonas"],
              short: ["AMT", "AMST"]
            },
            "America/Chicago": {
              long: ["Horário Padrão Central", "Horário de Verão Central"]
            },
            "America/Belize": {
              long: ["Horário Padrão Central", "Horário de Verão Central"]
            },
            "America/Winnipeg": {
              long: ["Horário Padrão Central", "Horário de Verão Central"]
            },
            "America/Costa_Rica": {
              long: ["Horário Padrão Central", "Horário de Verão Central"]
            },
            "America/Guatemala": {
              long: ["Horário Padrão Central", "Horário de Verão Central"]
            },
            "America/Tegucigalpa": {
              long: ["Horário Padrão Central", "Horário de Verão Central"]
            },
            "America/Mexico_City": {
              long: ["Horário Padrão Central", "Horário de Verão Central"]
            },
            "America/El_Salvador": {
              long: ["Horário Padrão Central", "Horário de Verão Central"]
            },
            "America/New_York": {
              long: ["Horário Padrão do Leste", "Horário de Verão do Leste"]
            },
            "America/Nassau": {
              long: ["Horário Padrão do Leste", "Horário de Verão do Leste"]
            },
            "America/Toronto": {
              long: ["Horário Padrão do Leste", "Horário de Verão do Leste"]
            },
            "America/Port-au-Prince": {
              long: ["Horário Padrão do Leste", "Horário de Verão do Leste"]
            },
            "America/Jamaica": {
              long: ["Horário Padrão do Leste", "Horário de Verão do Leste"]
            },
            "America/Cayman": {
              long: ["Horário Padrão do Leste", "Horário de Verão do Leste"]
            },
            "America/Panama": {
              long: ["Horário Padrão do Leste", "Horário de Verão do Leste"]
            },
            "America/Denver": {
              long: ["Horário Padrão das Montanhas", "Horário de Verão das Montanhas"]
            },
            "America/Edmonton": {
              long: ["Horário Padrão das Montanhas", "Horário de Verão das Montanhas"]
            },
            "America/Los_Angeles": {
              long: ["Horário Padrão do Pacífico", "Horário de Verão do Pacífico"]
            },
            "America/Vancouver": {
              long: ["Horário Padrão do Pacífico", "Horário de Verão do Pacífico"]
            },
            "America/Tijuana": {
              long: ["Horário Padrão do Pacífico", "Horário de Verão do Pacífico"]
            },
            "Asia/Anadyr": {
              long: ["Horário Padrão do Anadyr", "Horário de Verão do Anadyr"]
            },
            "Pacific/Apia": {
              long: ["Horário Padrão de Apia", "Horário de Verão de Apia"]
            },
            "Asia/Riyadh": {
              long: ["Horário Padrão da Arábia", "Horário de Verão da Arábia"]
            },
            "Asia/Bahrain": {
              long: ["Horário Padrão da Arábia", "Horário de Verão da Arábia"]
            },
            "Asia/Baghdad": {
              long: ["Horário Padrão da Arábia", "Horário de Verão da Arábia"]
            },
            "Asia/Kuwait": {
              long: ["Horário Padrão da Arábia", "Horário de Verão da Arábia"]
            },
            "Asia/Qatar": {
              long: ["Horário Padrão da Arábia", "Horário de Verão da Arábia"]
            },
            "Asia/Aden": {
              long: ["Horário Padrão da Arábia", "Horário de Verão da Arábia"]
            },
            "America/Buenos_Aires": {
              long: ["Horário Padrão da Argentina", "Horário de Verão da Argentina"]
            },
            "America/Argentina/San_Luis": {
              long: ["Horário Padrão da Argentina Ocidental", "Horário de Verão da Argentina Ocidental"]
            },
            "Asia/Ashgabat": {
              long: ["Horário Padrão do Turcomenistão", "Horário de Verão do Turcomenistão"]
            },
            "America/Halifax": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Antigua": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Anguilla": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Aruba": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Barbados": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "Atlantic/Bermuda": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Kralendijk": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Curacao": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Dominica": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Grenada": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Thule": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Guadeloupe": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/St_Kitts": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/St_Lucia": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Marigot": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Martinique": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Montserrat": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Puerto_Rico": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Lower_Princes": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Port_of_Spain": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/St_Vincent": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/Tortola": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "America/St_Thomas": {
              long: ["Horário Padrão do Atlântico", "Horário de Verão do Atlântico"]
            },
            "Australia/Adelaide": {
              long: ["Horário Padrão da Austrália Central", "Horário de Verão da Austrália Central"]
            },
            "Australia/Eucla": {
              long: ["Horário Padrão da Austrália Centro-Ocidental", "Horário de Verão da Austrália Centro-Ocidental"]
            },
            "Australia/Sydney": {
              long: ["Horário Padrão da Austrália Oriental", "Horário de Verão da Austrália Oriental"]
            },
            "Australia/Perth": {
              long: ["Horário Padrão da Austrália Ocidental", "Horário de Verão da Austrália Ocidental"]
            },
            "Atlantic/Azores": {
              long: ["Horário Padrão dos Açores", "Horário de Verão dos Açores"]
            },
            "Asia/Thimphu": {
              long: ["Horário do Butão", "Horário do Butão"]
            },
            "America/La_Paz": {
              long: ["Horário da Bolívia", "Horário da Bolívia"]
            },
            "Asia/Kuching": {
              long: ["Horário da Malásia", "Horário da Malásia"]
            },
            "America/Sao_Paulo": {
              long: ["Horário Padrão de Brasília", "Horário de Verão de Brasília"],
              short: ["BRT", "BRST"]
            },
            "Europe/London": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Asia/Brunei": {
              long: ["Horário de Brunei Darussalam", "Horário de Brunei Darussalam"]
            },
            "Atlantic/Cape_Verde": {
              long: ["Horário Padrão de Cabo Verde", "Horário de Verão de Cabo Verde"]
            },
            "Pacific/Saipan": {
              long: ["Horário das Ilhas Mariana do Norte", "Horário das Ilhas Mariana do Norte"]
            },
            "Pacific/Guam": {
              long: ["Horário Padrão de Guam", "Horário Padrão de Guam"]
            },
            "Pacific/Chatham": {
              long: ["Horário Padrão de Chatham", "Horário de Verão de Chatham"]
            },
            "America/Santiago": {
              long: ["Horário Padrão do Chile", "Horário de Verão do Chile"]
            },
            "Asia/Shanghai": {
              long: ["Horário Padrão da China", "Horário de Verão da China"]
            },
            "Indian/Christmas": {
              long: ["Horário da Ilha Christmas", "Horário da Ilha Christmas"]
            },
            "Indian/Cocos": {
              long: ["Horário das Ilhas Coco", "Horário das Ilhas Coco"]
            },
            "America/Bogota": {
              long: ["Horário Padrão da Colômbia", "Horário de Verão da Colômbia"]
            },
            "Pacific/Rarotonga": {
              long: ["Horário Padrão das Ilhas Cook", "Meio Horário de Verão das Ilhas Cook"]
            },
            "America/Havana": {
              long: ["Horário Padrão de Cuba", "Horário de Verão de Cuba"]
            },
            "Antarctica/Davis": {
              long: ["Horário de Davis", "Horário de Davis"]
            },
            "Antarctica/DumontDUrville": {
              long: ["Horário de Dumont-d’Urville", "Horário de Dumont-d’Urville"]
            },
            "Asia/Dushanbe": {
              long: ["Horário do Tajiquistão", "Horário do Tajiquistão"]
            },
            "America/Paramaribo": {
              long: ["Horário do Suriname", "Horário do Suriname"]
            },
            "Asia/Dili": {
              long: ["Horário do Timor-Leste", "Horário do Timor-Leste"]
            },
            "Pacific/Easter": {
              long: ["Horário Padrão da Ilha de Páscoa", "Horário de Verão da Ilha de Páscoa"]
            },
            "America/Guayaquil": {
              long: ["Horário do Equador", "Horário do Equador"]
            },
            "Europe/Paris": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Andorra": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Tirane": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Vienna": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Sarajevo": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Brussels": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Zurich": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Prague": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Berlin": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Copenhagen": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Madrid": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Gibraltar": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Zagreb": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Budapest": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Rome": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Vaduz": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Luxembourg": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Monaco": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Podgorica": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Skopje": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Malta": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Amsterdam": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Oslo": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Warsaw": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Belgrade": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Stockholm": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Ljubljana": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Arctic/Longyearbyen": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Bratislava": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/San_Marino": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Africa/Tunis": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Vatican": {
              long: ["Horário Padrão da Europa Central", "Horário de Verão da Europa Central"]
            },
            "Europe/Bucharest": {
              long: ["Horário Padrão da Europa Oriental", "Horário de Verão da Europa Oriental"]
            },
            "Europe/Mariehamn": {
              long: ["Horário Padrão da Europa Oriental", "Horário de Verão da Europa Oriental"]
            },
            "Europe/Sofia": {
              long: ["Horário Padrão da Europa Oriental", "Horário de Verão da Europa Oriental"]
            },
            "Asia/Nicosia": {
              long: ["Horário Padrão da Europa Oriental", "Horário de Verão da Europa Oriental"]
            },
            "Africa/Cairo": {
              long: ["Horário Padrão da Europa Oriental", "Horário de Verão da Europa Oriental"]
            },
            "Europe/Helsinki": {
              long: ["Horário Padrão da Europa Oriental", "Horário de Verão da Europa Oriental"]
            },
            "Europe/Athens": {
              long: ["Horário Padrão da Europa Oriental", "Horário de Verão da Europa Oriental"]
            },
            "Asia/Beirut": {
              long: ["Horário Padrão da Europa Oriental", "Horário de Verão da Europa Oriental"]
            },
            "Europe/Minsk": {
              long: ["Horário do Extremo Leste Europeu", "Horário do Extremo Leste Europeu"]
            },
            "Europe/Kaliningrad": {
              long: ["Horário do Extremo Leste Europeu", "Horário do Extremo Leste Europeu"]
            },
            "Atlantic/Canary": {
              long: ["Horário Padrão da Europa Ocidental", "Horário de Verão da Europa Ocidental"]
            },
            "Atlantic/Faeroe": {
              long: ["Horário Padrão da Europa Ocidental", "Horário de Verão da Europa Ocidental"]
            },
            "Atlantic/Stanley": {
              long: ["Horário Padrão das Ilhas Malvinas", "Horário de Verão das Ilhas Malvinas"]
            },
            "Pacific/Fiji": {
              long: ["Horário Padrão de Fiji", "Horário de Verão de Fiji"]
            },
            "America/Cayenne": {
              long: ["Horário da Guiana Francesa", "Horário da Guiana Francesa"]
            },
            "Indian/Kerguelen": {
              long: ["Horário dos Territórios Franceses do Sul e Antártida", "Horário dos Territórios Franceses do Sul e Antártida"]
            },
            "Asia/Bishkek": {
              long: ["Horário do Quirguistão", "Horário do Quirguistão"]
            },
            "Pacific/Galapagos": {
              long: ["Horário de Galápagos", "Horário de Galápagos"]
            },
            "Pacific/Gambier": {
              long: ["Horário de Gambier", "Horário de Gambier"]
            },
            "Pacific/Tarawa": {
              long: ["Horário das Ilhas Gilberto", "Horário das Ilhas Gilberto"]
            },
            "Atlantic/Reykjavik": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Africa/Ouagadougou": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Africa/Abidjan": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Africa/Accra": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Africa/Banjul": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Africa/Conakry": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Africa/Bamako": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Africa/Nouakchott": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Atlantic/St_Helena": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Africa/Freetown": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Africa/Dakar": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "Africa/Lome": {
              long: ["Horário do Meridiano de Greenwich", "Horário do Meridiano de Greenwich"]
            },
            "America/Godthab": {
              long: ["Horário Padrão da Groenlândia Ocidental", "Horário de Verão da Groenlândia Ocidental"]
            },
            "America/Scoresbysund": {
              long: ["Horário Padrão da Groelândia Oriental", "Horário de Verão da Groelândia Oriental"]
            },
            "Asia/Dubai": {
              long: ["Horário do Golfo", "Horário do Golfo"]
            },
            "Asia/Muscat": {
              long: ["Horário do Golfo", "Horário do Golfo"]
            },
            "America/Guyana": {
              long: ["Horário da Guiana", "Horário da Guiana"]
            },
            "Pacific/Honolulu": {
              long: ["Horário Padrão do Havaí e Ilhas Aleutas", "Horário de Verão do Havaí e Ilhas Aleutas"]
            },
            "Asia/Hong_Kong": {
              long: ["Horário Padrão de Hong Kong", "Horário de Verão de Hong Kong"]
            },
            "Asia/Hovd": {
              long: ["Horário Padrão de Hovd", "Horário de Verão de Hovd"]
            },
            "Asia/Calcutta": {
              long: ["Horário Padrão da Índia", "Horário Padrão da Índia"]
            },
            "Asia/Colombo": {
              long: ["Horário de Lanka", "Horário de Lanka"]
            },
            "Indian/Chagos": {
              long: ["Horário do Oceano Índico", "Horário do Oceano Índico"]
            },
            "Asia/Bangkok": {
              long: ["Horário da Indochina", "Horário da Indochina"]
            },
            "Asia/Phnom_Penh": {
              long: ["Horário da Indochina", "Horário da Indochina"]
            },
            "Asia/Vientiane": {
              long: ["Horário da Indochina", "Horário da Indochina"]
            },
            "Asia/Makassar": {
              long: ["Horário da Indonésia Central", "Horário da Indonésia Central"]
            },
            "Asia/Jayapura": {
              long: ["Horário da Indonésia Oriental", "Horário da Indonésia Oriental"]
            },
            "Asia/Jakarta": {
              long: ["Horário da Indonésia Ocidental", "Horário da Indonésia Ocidental"]
            },
            "Asia/Tehran": {
              long: ["Horário Padrão do Irã", "Horário de Verão do Irã"]
            },
            "Asia/Irkutsk": {
              long: ["Horário Padrão de Irkutsk", "Horário de Verão de Irkutsk"]
            },
            "Asia/Jerusalem": {
              long: ["Horário Padrão de Israel", "Horário de Verão de Israel"]
            },
            "Asia/Tokyo": {
              long: ["Horário Padrão do Japão", "Horário de Verão do Japão"]
            },
            "Asia/Kamchatka": {
              long: ["Horário Padrão de Petropavlovsk-Kamchatski", "Horário de Verão de Petropavlovsk-Kamchatski"]
            },
            "Asia/Karachi": {
              long: ["Horário Padrão do Paquistão", "Horário de Verão do Paquistão"]
            },
            "Asia/Qyzylorda": {
              long: ["Horário Padrão de Qyzylorda", "Horário de Verão de Qyzylorda"]
            },
            "Asia/Seoul": {
              long: ["Horário Padrão da Coreia", "Horário de Verão da Coreia"]
            },
            "Pacific/Kosrae": {
              long: ["Horário de Kosrae", "Horário de Kosrae"]
            },
            "Asia/Krasnoyarsk": {
              long: ["Horário Padrão de Krasnoyarsk", "Horário de Verão de Krasnoyarsk"]
            },
            "Europe/Samara": {
              long: ["Horário Padrão de Samara", "Horário de Verão de Samara"]
            },
            "Pacific/Kiritimati": {
              long: ["Horário das Ilhas da Linha", "Horário das Ilhas da Linha"]
            },
            "Australia/Lord_Howe": {
              long: ["Horário Padrão de Lord Howe", "Horário de Verão de Lord Howe"]
            },
            "Asia/Macau": {
              long: ["Horário Padrão de Macau", "Horário de Verão de Macau"]
            },
            "Asia/Magadan": {
              long: ["Horário Padrão de Magadan", "Horário de Verão de Magadan"]
            },
            "Indian/Maldives": {
              long: ["Horário das Ilhas Maldivas", "Horário das Ilhas Maldivas"]
            },
            "Pacific/Marquesas": {
              long: ["Horário das Marquesas", "Horário das Marquesas"]
            },
            "Pacific/Majuro": {
              long: ["Horário das Ilhas Marshall", "Horário das Ilhas Marshall"]
            },
            "Indian/Mauritius": {
              long: ["Horário Padrão de Maurício", "Horário de Verão de Maurício"]
            },
            "Antarctica/Mawson": {
              long: ["Horário de Mawson", "Horário de Mawson"]
            },
            "America/Mazatlan": {
              long: ["Horário Padrão do Pacífico Mexicano", "Horário de Verão do Pacífico Mexicano"]
            },
            "Asia/Ulaanbaatar": {
              long: ["Horário Padrão de Ulan Bator", "Horário de Verão de Ulan Bator"]
            },
            "Europe/Moscow": {
              long: ["Horário Padrão de Moscou", "Horário de Verão de Moscou"]
            },
            "Asia/Rangoon": {
              long: ["Horário de Mianmar", "Horário de Mianmar"]
            },
            "Pacific/Nauru": {
              long: ["Horário de Nauru", "Horário de Nauru"]
            },
            "Asia/Katmandu": {
              long: ["Horário do Nepal", "Horário do Nepal"]
            },
            "Pacific/Noumea": {
              long: ["Horário Padrão da Nova Caledônia", "Horário de Verão da Nova Caledônia"]
            },
            "Pacific/Auckland": {
              long: ["Horário Padrão da Nova Zelândia", "Horário de Verão da Nova Zelândia"]
            },
            "Antarctica/McMurdo": {
              long: ["Horário Padrão da Nova Zelândia", "Horário de Verão da Nova Zelândia"]
            },
            "America/St_Johns": {
              long: ["Horário Padrão da Terra Nova", "Horário de Verão da Terra Nova"]
            },
            "Pacific/Niue": {
              long: ["Horário de Niue", "Horário de Niue"]
            },
            "Pacific/Norfolk": {
              long: ["Horário Padrão da Ilha Norfolk", "Horário de Verão da Ilha Norfolk"]
            },
            "America/Noronha": {
              long: ["Horário Padrão de Fernando de Noronha", "Horário de Verão de Fernando de Noronha"]
            },
            "Asia/Novosibirsk": {
              long: ["Horário Padrão de Novosibirsk", "Horário de Verão de Novosibirsk"]
            },
            "Asia/Omsk": {
              long: ["Horário Padrão de Omsk", "Horário de Verão de Omsk"]
            },
            "Pacific/Palau": {
              long: ["Horário de Palau", "Horário de Palau"]
            },
            "Pacific/Port_Moresby": {
              long: ["Horário de Papua-Nova Guiné", "Horário de Papua-Nova Guiné"]
            },
            "America/Asuncion": {
              long: ["Horário Padrão do Paraguai", "Horário de Verão do Paraguai"]
            },
            "America/Lima": {
              long: ["Horário Padrão do Peru", "Horário de Verão do Peru"]
            },
            "Asia/Manila": {
              long: ["Horário Padrão das Filipinas", "Horário de Verão das Filipinas"]
            },
            "Pacific/Enderbury": {
              long: ["Horário das Ilhas Fênix", "Horário das Ilhas Fênix"]
            },
            "America/Miquelon": {
              long: ["Horário Padrão de São Pedro e Miquelão", "Horário Verão de São Pedro e Miquelão"]
            },
            "Pacific/Pitcairn": {
              long: ["Horário de Pitcairn", "Horário de Pitcairn"]
            },
            "Pacific/Ponape": {
              long: ["Horário de Ponape", "Horário de Ponape"]
            },
            "Asia/Pyongyang": {
              long: ["Horário de Pyongyang", "Horário de Pyongyang"]
            },
            "Indian/Reunion": {
              long: ["Horário de Reunião", "Horário de Reunião"]
            },
            "Antarctica/Rothera": {
              long: ["Horário de Rothera", "Horário de Rothera"]
            },
            "Asia/Sakhalin": {
              long: ["Horário Padrão de Sacalina", "Horário de Verão de Sacalina"]
            },
            "Pacific/Pago_Pago": {
              long: ["Horário Padrão de Samoa", "Horário de Verão de Samoa"]
            },
            "Indian/Mahe": {
              long: ["Horário de Seicheles", "Horário de Seicheles"]
            },
            "Asia/Singapore": {
              long: ["Horário Padrão de Singapura", "Horário Padrão de Singapura"]
            },
            "Pacific/Guadalcanal": {
              long: ["Horário das Ilhas Salomão", "Horário das Ilhas Salomão"]
            },
            "Atlantic/South_Georgia": {
              long: ["Horário da Geórgia do Sul", "Horário da Geórgia do Sul"]
            },
            "Asia/Yekaterinburg": {
              long: ["Horário Padrão de Ecaterimburgo", "Horário de Verão de Ecaterimburgo"]
            },
            "Antarctica/Syowa": {
              long: ["Horário de Syowa", "Horário de Syowa"]
            },
            "Pacific/Tahiti": {
              long: ["Horário do Taiti", "Horário do Taiti"]
            },
            "Asia/Taipei": {
              long: ["Horário Padrão de Taipei", "Horário de Verão de Taipei"]
            },
            "Asia/Tashkent": {
              long: ["Horário Padrão do Uzbequistão", "Horário de Verão do Uzbequistão"]
            },
            "Pacific/Fakaofo": {
              long: ["Horário de Tokelau", "Horário de Tokelau"]
            },
            "Pacific/Tongatapu": {
              long: ["Horário Padrão de Tonga", "Horário de Verão de Tonga"]
            },
            "Pacific/Truk": {
              long: ["Horário de Chuuk", "Horário de Chuuk"]
            },
            "Pacific/Funafuti": {
              long: ["Horário de Tuvalu", "Horário de Tuvalu"]
            },
            "America/Montevideo": {
              long: ["Horário Padrão do Uruguai", "Horário de Verão do Uruguai"]
            },
            "Pacific/Efate": {
              long: ["Horário Padrão de Vanuatu", "Horário de Verão de Vanuatu"]
            },
            "America/Caracas": {
              long: ["Horário da Venezuela", "Horário da Venezuela"]
            },
            "Asia/Vladivostok": {
              long: ["Horário Padrão de Vladivostok", "Horário de Verão de Vladivostok"]
            },
            "Europe/Volgograd": {
              long: ["Horário Padrão de Volgogrado", "Horário de Verão de Volgogrado"]
            },
            "Antarctica/Vostok": {
              long: ["Horário de Vostok", "Horário de Vostok"]
            },
            "Pacific/Wake": {
              long: ["Horário das Ilhas Wake", "Horário das Ilhas Wake"]
            },
            "Pacific/Wallis": {
              long: ["Horário de Wallis e Futuna", "Horário de Wallis e Futuna"]
            },
            "Asia/Yakutsk": {
              long: ["Horário Padrão de Yakutsk", "Horário de Verão de Yakutsk"]
            },
            "America/Whitehorse": {
              long: ["Horário do Yukon", "Horário do Yukon"]
            },
            UTC: {
              long: ["Horário Universal Coordenado", "Horário Universal Coordenado"],
              short: ["UTC", "UTC"]
            }
          },
          gmtFormat: "GMT{0}",
          hourFormat: "+HH:mm;-HH:mm",
          dateFormat: {
            full: "EEEE, d 'de' MMMM 'de' y",
            long: "d 'de' MMMM 'de' y",
            medium: "d 'de' MMM 'de' y",
            short: "dd/MM/y"
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
            medium: "{1} {0}",
            short: "{1} {0}"
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
              GyMd: "dd/MM/y GGGGG",
              GyMMM: "MMM 'de' y G",
              GyMMMd: "d 'de' MMM 'de' y G",
              GyMMMEd: "E, d 'de' MMM 'de' y G",
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
              MEd: "E, dd/MM",
              MMdd: "dd/MM",
              MMM: "LLL",
              MMMd: "d 'de' MMM",
              MMMEd: "E, d 'de' MMM",
              MMMMd: "d 'de' MMMM",
              MMMMEd: "E, d 'de' MMMM",
              ms: "mm:ss",
              y: "y",
              yM: "MM/y",
              yMd: "dd/MM/y",
              yMEd: "E, dd/MM/y",
              yMM: "MM/y",
              yMMM: "MMM 'de' y",
              yMMMd: "d 'de' MMM 'de' y",
              yMMMEd: "E, d 'de' MMM 'de' y",
              yMMMM: "MMMM 'de' y",
              yMMMMd: "d 'de' MMMM 'de' y",
              yMMMMEd: "E, d 'de' MMMM 'de' y",
              "EEEE, d 'de' MMMM 'de' y": "EEEE, d 'de' MMMM 'de' y",
              "d 'de' MMMM 'de' y": "d 'de' MMMM 'de' y",
              "d 'de' MMM 'de' y": "d 'de' MMM 'de' y",
              "dd/MM/y": "dd/MM/y",
              "HH:mm:ss zzzz": "HH:mm:ss zzzz",
              "HH:mm:ss z": "HH:mm:ss z",
              "HH:mm:ss": "HH:mm:ss",
              "HH:mm": "HH:mm",
              "EEEE, d 'de' MMMM 'de' y HH:mm:ss zzzz": "EEEE, d 'de' MMMM 'de' y HH:mm:ss zzzz",
              "d 'de' MMMM 'de' y HH:mm:ss zzzz": "d 'de' MMMM 'de' y HH:mm:ss zzzz",
              "d 'de' MMM 'de' y HH:mm:ss zzzz": "d 'de' MMM 'de' y HH:mm:ss zzzz",
              "dd/MM/y HH:mm:ss zzzz": "dd/MM/y HH:mm:ss zzzz",
              "d HH:mm:ss zzzz": "d HH:mm:ss zzzz",
              "E HH:mm:ss zzzz": "ccc HH:mm:ss zzzz",
              "Ed HH:mm:ss zzzz": "E, d HH:mm:ss zzzz",
              "Gy HH:mm:ss zzzz": "y G HH:mm:ss zzzz",
              "GyMd HH:mm:ss zzzz": "dd/MM/y GGGGG HH:mm:ss zzzz",
              "GyMMM HH:mm:ss zzzz": "MMM 'de' y G HH:mm:ss zzzz",
              "GyMMMd HH:mm:ss zzzz": "d 'de' MMM 'de' y G HH:mm:ss zzzz",
              "GyMMMEd HH:mm:ss zzzz": "E, d 'de' MMM 'de' y G HH:mm:ss zzzz",
              "M HH:mm:ss zzzz": "L HH:mm:ss zzzz",
              "Md HH:mm:ss zzzz": "dd/MM HH:mm:ss zzzz",
              "MEd HH:mm:ss zzzz": "E, dd/MM HH:mm:ss zzzz",
              "MMdd HH:mm:ss zzzz": "dd/MM HH:mm:ss zzzz",
              "MMM HH:mm:ss zzzz": "LLL HH:mm:ss zzzz",
              "MMMd HH:mm:ss zzzz": "d 'de' MMM HH:mm:ss zzzz",
              "MMMEd HH:mm:ss zzzz": "E, d 'de' MMM HH:mm:ss zzzz",
              "MMMMd HH:mm:ss zzzz": "d 'de' MMMM HH:mm:ss zzzz",
              "MMMMEd HH:mm:ss zzzz": "E, d 'de' MMMM HH:mm:ss zzzz",
              "y HH:mm:ss zzzz": "y HH:mm:ss zzzz",
              "yM HH:mm:ss zzzz": "MM/y HH:mm:ss zzzz",
              "yMd HH:mm:ss zzzz": "dd/MM/y HH:mm:ss zzzz",
              "yMEd HH:mm:ss zzzz": "E, dd/MM/y HH:mm:ss zzzz",
              "yMM HH:mm:ss zzzz": "MM/y HH:mm:ss zzzz",
              "yMMM HH:mm:ss zzzz": "MMM 'de' y HH:mm:ss zzzz",
              "yMMMd HH:mm:ss zzzz": "d 'de' MMM 'de' y HH:mm:ss zzzz",
              "yMMMEd HH:mm:ss zzzz": "E, d 'de' MMM 'de' y HH:mm:ss zzzz",
              "yMMMM HH:mm:ss zzzz": "MMMM 'de' y HH:mm:ss zzzz",
              "yMMMMd HH:mm:ss zzzz": "d 'de' MMMM 'de' y HH:mm:ss zzzz",
              "yMMMMEd HH:mm:ss zzzz": "E, d 'de' MMMM 'de' y HH:mm:ss zzzz",
              "EEEE, d 'de' MMMM 'de' y HH:mm:ss z": "EEEE, d 'de' MMMM 'de' y HH:mm:ss z",
              "d 'de' MMMM 'de' y HH:mm:ss z": "d 'de' MMMM 'de' y HH:mm:ss z",
              "d 'de' MMM 'de' y HH:mm:ss z": "d 'de' MMM 'de' y HH:mm:ss z",
              "dd/MM/y HH:mm:ss z": "dd/MM/y HH:mm:ss z",
              "d HH:mm:ss z": "d HH:mm:ss z",
              "E HH:mm:ss z": "ccc HH:mm:ss z",
              "Ed HH:mm:ss z": "E, d HH:mm:ss z",
              "Gy HH:mm:ss z": "y G HH:mm:ss z",
              "GyMd HH:mm:ss z": "dd/MM/y GGGGG HH:mm:ss z",
              "GyMMM HH:mm:ss z": "MMM 'de' y G HH:mm:ss z",
              "GyMMMd HH:mm:ss z": "d 'de' MMM 'de' y G HH:mm:ss z",
              "GyMMMEd HH:mm:ss z": "E, d 'de' MMM 'de' y G HH:mm:ss z",
              "M HH:mm:ss z": "L HH:mm:ss z",
              "Md HH:mm:ss z": "dd/MM HH:mm:ss z",
              "MEd HH:mm:ss z": "E, dd/MM HH:mm:ss z",
              "MMdd HH:mm:ss z": "dd/MM HH:mm:ss z",
              "MMM HH:mm:ss z": "LLL HH:mm:ss z",
              "MMMd HH:mm:ss z": "d 'de' MMM HH:mm:ss z",
              "MMMEd HH:mm:ss z": "E, d 'de' MMM HH:mm:ss z",
              "MMMMd HH:mm:ss z": "d 'de' MMMM HH:mm:ss z",
              "MMMMEd HH:mm:ss z": "E, d 'de' MMMM HH:mm:ss z",
              "y HH:mm:ss z": "y HH:mm:ss z",
              "yM HH:mm:ss z": "MM/y HH:mm:ss z",
              "yMd HH:mm:ss z": "dd/MM/y HH:mm:ss z",
              "yMEd HH:mm:ss z": "E, dd/MM/y HH:mm:ss z",
              "yMM HH:mm:ss z": "MM/y HH:mm:ss z",
              "yMMM HH:mm:ss z": "MMM 'de' y HH:mm:ss z",
              "yMMMd HH:mm:ss z": "d 'de' MMM 'de' y HH:mm:ss z",
              "yMMMEd HH:mm:ss z": "E, d 'de' MMM 'de' y HH:mm:ss z",
              "yMMMM HH:mm:ss z": "MMMM 'de' y HH:mm:ss z",
              "yMMMMd HH:mm:ss z": "d 'de' MMMM 'de' y HH:mm:ss z",
              "yMMMMEd HH:mm:ss z": "E, d 'de' MMMM 'de' y HH:mm:ss z",
              "EEEE, d 'de' MMMM 'de' y HH:mm:ss": "EEEE, d 'de' MMMM 'de' y HH:mm:ss",
              "d 'de' MMMM 'de' y HH:mm:ss": "d 'de' MMMM 'de' y HH:mm:ss",
              "d 'de' MMM 'de' y HH:mm:ss": "d 'de' MMM 'de' y HH:mm:ss",
              "dd/MM/y HH:mm:ss": "dd/MM/y HH:mm:ss",
              "d HH:mm:ss": "d HH:mm:ss",
              "E HH:mm:ss": "ccc HH:mm:ss",
              "Ed HH:mm:ss": "E, d HH:mm:ss",
              "Gy HH:mm:ss": "y G HH:mm:ss",
              "GyMd HH:mm:ss": "dd/MM/y GGGGG HH:mm:ss",
              "GyMMM HH:mm:ss": "MMM 'de' y G HH:mm:ss",
              "GyMMMd HH:mm:ss": "d 'de' MMM 'de' y G HH:mm:ss",
              "GyMMMEd HH:mm:ss": "E, d 'de' MMM 'de' y G HH:mm:ss",
              "M HH:mm:ss": "L HH:mm:ss",
              "Md HH:mm:ss": "dd/MM HH:mm:ss",
              "MEd HH:mm:ss": "E, dd/MM HH:mm:ss",
              "MMdd HH:mm:ss": "dd/MM HH:mm:ss",
              "MMM HH:mm:ss": "LLL HH:mm:ss",
              "MMMd HH:mm:ss": "d 'de' MMM HH:mm:ss",
              "MMMEd HH:mm:ss": "E, d 'de' MMM HH:mm:ss",
              "MMMMd HH:mm:ss": "d 'de' MMMM HH:mm:ss",
              "MMMMEd HH:mm:ss": "E, d 'de' MMMM HH:mm:ss",
              "y HH:mm:ss": "y HH:mm:ss",
              "yM HH:mm:ss": "MM/y HH:mm:ss",
              "yMd HH:mm:ss": "dd/MM/y HH:mm:ss",
              "yMEd HH:mm:ss": "E, dd/MM/y HH:mm:ss",
              "yMM HH:mm:ss": "MM/y HH:mm:ss",
              "yMMM HH:mm:ss": "MMM 'de' y HH:mm:ss",
              "yMMMd HH:mm:ss": "d 'de' MMM 'de' y HH:mm:ss",
              "yMMMEd HH:mm:ss": "E, d 'de' MMM 'de' y HH:mm:ss",
              "yMMMM HH:mm:ss": "MMMM 'de' y HH:mm:ss",
              "yMMMMd HH:mm:ss": "d 'de' MMMM 'de' y HH:mm:ss",
              "yMMMMEd HH:mm:ss": "E, d 'de' MMMM 'de' y HH:mm:ss",
              "EEEE, d 'de' MMMM 'de' y HH:mm": "EEEE, d 'de' MMMM 'de' y HH:mm",
              "d 'de' MMMM 'de' y HH:mm": "d 'de' MMMM 'de' y HH:mm",
              "d 'de' MMM 'de' y HH:mm": "d 'de' MMM 'de' y HH:mm",
              "dd/MM/y HH:mm": "dd/MM/y HH:mm",
              "d HH:mm": "d HH:mm",
              "E HH:mm": "ccc HH:mm",
              "Ed HH:mm": "E, d HH:mm",
              "Gy HH:mm": "y G HH:mm",
              "GyMd HH:mm": "dd/MM/y GGGGG HH:mm",
              "GyMMM HH:mm": "MMM 'de' y G HH:mm",
              "GyMMMd HH:mm": "d 'de' MMM 'de' y G HH:mm",
              "GyMMMEd HH:mm": "E, d 'de' MMM 'de' y G HH:mm",
              "M HH:mm": "L HH:mm",
              "Md HH:mm": "dd/MM HH:mm",
              "MEd HH:mm": "E, dd/MM HH:mm",
              "MMdd HH:mm": "dd/MM HH:mm",
              "MMM HH:mm": "LLL HH:mm",
              "MMMd HH:mm": "d 'de' MMM HH:mm",
              "MMMEd HH:mm": "E, d 'de' MMM HH:mm",
              "MMMMd HH:mm": "d 'de' MMMM HH:mm",
              "MMMMEd HH:mm": "E, d 'de' MMMM HH:mm",
              "y HH:mm": "y HH:mm",
              "yM HH:mm": "MM/y HH:mm",
              "yMd HH:mm": "dd/MM/y HH:mm",
              "yMEd HH:mm": "E, dd/MM/y HH:mm",
              "yMM HH:mm": "MM/y HH:mm",
              "yMMM HH:mm": "MMM 'de' y HH:mm",
              "yMMMd HH:mm": "d 'de' MMM 'de' y HH:mm",
              "yMMMEd HH:mm": "E, d 'de' MMM 'de' y HH:mm",
              "yMMMM HH:mm": "MMMM 'de' y HH:mm",
              "yMMMMd HH:mm": "d 'de' MMMM 'de' y HH:mm",
              "yMMMMEd HH:mm": "E, d 'de' MMMM 'de' y HH:mm",
              "EEEE, d 'de' MMMM 'de' y Bh": "EEEE, d 'de' MMMM 'de' y h B",
              "d 'de' MMMM 'de' y Bh": "d 'de' MMMM 'de' y h B",
              "d 'de' MMM 'de' y Bh": "d 'de' MMM 'de' y h B",
              "dd/MM/y Bh": "dd/MM/y h B",
              "d Bh": "d h B",
              "E Bh": "ccc h B",
              "Ed Bh": "E, d h B",
              "Gy Bh": "y G h B",
              "GyMd Bh": "dd/MM/y GGGGG h B",
              "GyMMM Bh": "MMM 'de' y G h B",
              "GyMMMd Bh": "d 'de' MMM 'de' y G h B",
              "GyMMMEd Bh": "E, d 'de' MMM 'de' y G h B",
              "M Bh": "L h B",
              "Md Bh": "dd/MM h B",
              "MEd Bh": "E, dd/MM h B",
              "MMdd Bh": "dd/MM h B",
              "MMM Bh": "LLL h B",
              "MMMd Bh": "d 'de' MMM h B",
              "MMMEd Bh": "E, d 'de' MMM h B",
              "MMMMd Bh": "d 'de' MMMM h B",
              "MMMMEd Bh": "E, d 'de' MMMM h B",
              "y Bh": "y h B",
              "yM Bh": "MM/y h B",
              "yMd Bh": "dd/MM/y h B",
              "yMEd Bh": "E, dd/MM/y h B",
              "yMM Bh": "MM/y h B",
              "yMMM Bh": "MMM 'de' y h B",
              "yMMMd Bh": "d 'de' MMM 'de' y h B",
              "yMMMEd Bh": "E, d 'de' MMM 'de' y h B",
              "yMMMM Bh": "MMMM 'de' y h B",
              "yMMMMd Bh": "d 'de' MMMM 'de' y h B",
              "yMMMMEd Bh": "E, d 'de' MMMM 'de' y h B",
              "EEEE, d 'de' MMMM 'de' y Bhm": "EEEE, d 'de' MMMM 'de' y h:mm B",
              "d 'de' MMMM 'de' y Bhm": "d 'de' MMMM 'de' y h:mm B",
              "d 'de' MMM 'de' y Bhm": "d 'de' MMM 'de' y h:mm B",
              "dd/MM/y Bhm": "dd/MM/y h:mm B",
              "d Bhm": "d h:mm B",
              "E Bhm": "ccc h:mm B",
              "Ed Bhm": "E, d h:mm B",
              "Gy Bhm": "y G h:mm B",
              "GyMd Bhm": "dd/MM/y GGGGG h:mm B",
              "GyMMM Bhm": "MMM 'de' y G h:mm B",
              "GyMMMd Bhm": "d 'de' MMM 'de' y G h:mm B",
              "GyMMMEd Bhm": "E, d 'de' MMM 'de' y G h:mm B",
              "M Bhm": "L h:mm B",
              "Md Bhm": "dd/MM h:mm B",
              "MEd Bhm": "E, dd/MM h:mm B",
              "MMdd Bhm": "dd/MM h:mm B",
              "MMM Bhm": "LLL h:mm B",
              "MMMd Bhm": "d 'de' MMM h:mm B",
              "MMMEd Bhm": "E, d 'de' MMM h:mm B",
              "MMMMd Bhm": "d 'de' MMMM h:mm B",
              "MMMMEd Bhm": "E, d 'de' MMMM h:mm B",
              "y Bhm": "y h:mm B",
              "yM Bhm": "MM/y h:mm B",
              "yMd Bhm": "dd/MM/y h:mm B",
              "yMEd Bhm": "E, dd/MM/y h:mm B",
              "yMM Bhm": "MM/y h:mm B",
              "yMMM Bhm": "MMM 'de' y h:mm B",
              "yMMMd Bhm": "d 'de' MMM 'de' y h:mm B",
              "yMMMEd Bhm": "E, d 'de' MMM 'de' y h:mm B",
              "yMMMM Bhm": "MMMM 'de' y h:mm B",
              "yMMMMd Bhm": "d 'de' MMMM 'de' y h:mm B",
              "yMMMMEd Bhm": "E, d 'de' MMMM 'de' y h:mm B",
              "EEEE, d 'de' MMMM 'de' y Bhms": "EEEE, d 'de' MMMM 'de' y h:mm:ss B",
              "d 'de' MMMM 'de' y Bhms": "d 'de' MMMM 'de' y h:mm:ss B",
              "d 'de' MMM 'de' y Bhms": "d 'de' MMM 'de' y h:mm:ss B",
              "dd/MM/y Bhms": "dd/MM/y h:mm:ss B",
              "d Bhms": "d h:mm:ss B",
              "E Bhms": "ccc h:mm:ss B",
              "Ed Bhms": "E, d h:mm:ss B",
              "Gy Bhms": "y G h:mm:ss B",
              "GyMd Bhms": "dd/MM/y GGGGG h:mm:ss B",
              "GyMMM Bhms": "MMM 'de' y G h:mm:ss B",
              "GyMMMd Bhms": "d 'de' MMM 'de' y G h:mm:ss B",
              "GyMMMEd Bhms": "E, d 'de' MMM 'de' y G h:mm:ss B",
              "M Bhms": "L h:mm:ss B",
              "Md Bhms": "dd/MM h:mm:ss B",
              "MEd Bhms": "E, dd/MM h:mm:ss B",
              "MMdd Bhms": "dd/MM h:mm:ss B",
              "MMM Bhms": "LLL h:mm:ss B",
              "MMMd Bhms": "d 'de' MMM h:mm:ss B",
              "MMMEd Bhms": "E, d 'de' MMM h:mm:ss B",
              "MMMMd Bhms": "d 'de' MMMM h:mm:ss B",
              "MMMMEd Bhms": "E, d 'de' MMMM h:mm:ss B",
              "y Bhms": "y h:mm:ss B",
              "yM Bhms": "MM/y h:mm:ss B",
              "yMd Bhms": "dd/MM/y h:mm:ss B",
              "yMEd Bhms": "E, dd/MM/y h:mm:ss B",
              "yMM Bhms": "MM/y h:mm:ss B",
              "yMMM Bhms": "MMM 'de' y h:mm:ss B",
              "yMMMd Bhms": "d 'de' MMM 'de' y h:mm:ss B",
              "yMMMEd Bhms": "E, d 'de' MMM 'de' y h:mm:ss B",
              "yMMMM Bhms": "MMMM 'de' y h:mm:ss B",
              "yMMMMd Bhms": "d 'de' MMMM 'de' y h:mm:ss B",
              "yMMMMEd Bhms": "E, d 'de' MMMM 'de' y h:mm:ss B",
              "EEEE, d 'de' MMMM 'de' y h": "EEEE, d 'de' MMMM 'de' y h a",
              "d 'de' MMMM 'de' y h": "d 'de' MMMM 'de' y h a",
              "d 'de' MMM 'de' y h": "d 'de' MMM 'de' y h a",
              "dd/MM/y h": "dd/MM/y h a",
              "d h": "d h a",
              "E h": "ccc h a",
              "Ed h": "E, d h a",
              "Gy h": "y G h a",
              "GyMd h": "dd/MM/y GGGGG h a",
              "GyMMM h": "MMM 'de' y G h a",
              "GyMMMd h": "d 'de' MMM 'de' y G h a",
              "GyMMMEd h": "E, d 'de' MMM 'de' y G h a",
              "M h": "L h a",
              "Md h": "dd/MM h a",
              "MEd h": "E, dd/MM h a",
              "MMdd h": "dd/MM h a",
              "MMM h": "LLL h a",
              "MMMd h": "d 'de' MMM h a",
              "MMMEd h": "E, d 'de' MMM h a",
              "MMMMd h": "d 'de' MMMM h a",
              "MMMMEd h": "E, d 'de' MMMM h a",
              "y h": "y h a",
              "yM h": "MM/y h a",
              "yMd h": "dd/MM/y h a",
              "yMEd h": "E, dd/MM/y h a",
              "yMM h": "MM/y h a",
              "yMMM h": "MMM 'de' y h a",
              "yMMMd h": "d 'de' MMM 'de' y h a",
              "yMMMEd h": "E, d 'de' MMM 'de' y h a",
              "yMMMM h": "MMMM 'de' y h a",
              "yMMMMd h": "d 'de' MMMM 'de' y h a",
              "yMMMMEd h": "E, d 'de' MMMM 'de' y h a",
              "EEEE, d 'de' MMMM 'de' y H": "EEEE, d 'de' MMMM 'de' y HH",
              "d 'de' MMMM 'de' y H": "d 'de' MMMM 'de' y HH",
              "d 'de' MMM 'de' y H": "d 'de' MMM 'de' y HH",
              "dd/MM/y H": "dd/MM/y HH",
              "d H": "d HH",
              "E H": "ccc HH",
              "Ed H": "E, d HH",
              "Gy H": "y G HH",
              "GyMd H": "dd/MM/y GGGGG HH",
              "GyMMM H": "MMM 'de' y G HH",
              "GyMMMd H": "d 'de' MMM 'de' y G HH",
              "GyMMMEd H": "E, d 'de' MMM 'de' y G HH",
              "M H": "L HH",
              "Md H": "dd/MM HH",
              "MEd H": "E, dd/MM HH",
              "MMdd H": "dd/MM HH",
              "MMM H": "LLL HH",
              "MMMd H": "d 'de' MMM HH",
              "MMMEd H": "E, d 'de' MMM HH",
              "MMMMd H": "d 'de' MMMM HH",
              "MMMMEd H": "E, d 'de' MMMM HH",
              "y H": "y HH",
              "yM H": "MM/y HH",
              "yMd H": "dd/MM/y HH",
              "yMEd H": "E, dd/MM/y HH",
              "yMM H": "MM/y HH",
              "yMMM H": "MMM 'de' y HH",
              "yMMMd H": "d 'de' MMM 'de' y HH",
              "yMMMEd H": "E, d 'de' MMM 'de' y HH",
              "yMMMM H": "MMMM 'de' y HH",
              "yMMMMd H": "d 'de' MMMM 'de' y HH",
              "yMMMMEd H": "E, d 'de' MMMM 'de' y HH",
              "EEEE, d 'de' MMMM 'de' y hm": "EEEE, d 'de' MMMM 'de' y h:mm a",
              "d 'de' MMMM 'de' y hm": "d 'de' MMMM 'de' y h:mm a",
              "d 'de' MMM 'de' y hm": "d 'de' MMM 'de' y h:mm a",
              "dd/MM/y hm": "dd/MM/y h:mm a",
              "d hm": "d h:mm a",
              "E hm": "ccc h:mm a",
              "Ed hm": "E, d h:mm a",
              "Gy hm": "y G h:mm a",
              "GyMd hm": "dd/MM/y GGGGG h:mm a",
              "GyMMM hm": "MMM 'de' y G h:mm a",
              "GyMMMd hm": "d 'de' MMM 'de' y G h:mm a",
              "GyMMMEd hm": "E, d 'de' MMM 'de' y G h:mm a",
              "M hm": "L h:mm a",
              "Md hm": "dd/MM h:mm a",
              "MEd hm": "E, dd/MM h:mm a",
              "MMdd hm": "dd/MM h:mm a",
              "MMM hm": "LLL h:mm a",
              "MMMd hm": "d 'de' MMM h:mm a",
              "MMMEd hm": "E, d 'de' MMM h:mm a",
              "MMMMd hm": "d 'de' MMMM h:mm a",
              "MMMMEd hm": "E, d 'de' MMMM h:mm a",
              "y hm": "y h:mm a",
              "yM hm": "MM/y h:mm a",
              "yMd hm": "dd/MM/y h:mm a",
              "yMEd hm": "E, dd/MM/y h:mm a",
              "yMM hm": "MM/y h:mm a",
              "yMMM hm": "MMM 'de' y h:mm a",
              "yMMMd hm": "d 'de' MMM 'de' y h:mm a",
              "yMMMEd hm": "E, d 'de' MMM 'de' y h:mm a",
              "yMMMM hm": "MMMM 'de' y h:mm a",
              "yMMMMd hm": "d 'de' MMMM 'de' y h:mm a",
              "yMMMMEd hm": "E, d 'de' MMMM 'de' y h:mm a",
              "EEEE, d 'de' MMMM 'de' y Hm": "EEEE, d 'de' MMMM 'de' y HH:mm",
              "d 'de' MMMM 'de' y Hm": "d 'de' MMMM 'de' y HH:mm",
              "d 'de' MMM 'de' y Hm": "d 'de' MMM 'de' y HH:mm",
              "dd/MM/y Hm": "dd/MM/y HH:mm",
              "d Hm": "d HH:mm",
              "E Hm": "ccc HH:mm",
              "Ed Hm": "E, d HH:mm",
              "Gy Hm": "y G HH:mm",
              "GyMd Hm": "dd/MM/y GGGGG HH:mm",
              "GyMMM Hm": "MMM 'de' y G HH:mm",
              "GyMMMd Hm": "d 'de' MMM 'de' y G HH:mm",
              "GyMMMEd Hm": "E, d 'de' MMM 'de' y G HH:mm",
              "M Hm": "L HH:mm",
              "Md Hm": "dd/MM HH:mm",
              "MEd Hm": "E, dd/MM HH:mm",
              "MMdd Hm": "dd/MM HH:mm",
              "MMM Hm": "LLL HH:mm",
              "MMMd Hm": "d 'de' MMM HH:mm",
              "MMMEd Hm": "E, d 'de' MMM HH:mm",
              "MMMMd Hm": "d 'de' MMMM HH:mm",
              "MMMMEd Hm": "E, d 'de' MMMM HH:mm",
              "y Hm": "y HH:mm",
              "yM Hm": "MM/y HH:mm",
              "yMd Hm": "dd/MM/y HH:mm",
              "yMEd Hm": "E, dd/MM/y HH:mm",
              "yMM Hm": "MM/y HH:mm",
              "yMMM Hm": "MMM 'de' y HH:mm",
              "yMMMd Hm": "d 'de' MMM 'de' y HH:mm",
              "yMMMEd Hm": "E, d 'de' MMM 'de' y HH:mm",
              "yMMMM Hm": "MMMM 'de' y HH:mm",
              "yMMMMd Hm": "d 'de' MMMM 'de' y HH:mm",
              "yMMMMEd Hm": "E, d 'de' MMMM 'de' y HH:mm",
              "EEEE, d 'de' MMMM 'de' y hms": "EEEE, d 'de' MMMM 'de' y h:mm:ss a",
              "d 'de' MMMM 'de' y hms": "d 'de' MMMM 'de' y h:mm:ss a",
              "d 'de' MMM 'de' y hms": "d 'de' MMM 'de' y h:mm:ss a",
              "dd/MM/y hms": "dd/MM/y h:mm:ss a",
              "d hms": "d h:mm:ss a",
              "E hms": "ccc h:mm:ss a",
              "Ed hms": "E, d h:mm:ss a",
              "Gy hms": "y G h:mm:ss a",
              "GyMd hms": "dd/MM/y GGGGG h:mm:ss a",
              "GyMMM hms": "MMM 'de' y G h:mm:ss a",
              "GyMMMd hms": "d 'de' MMM 'de' y G h:mm:ss a",
              "GyMMMEd hms": "E, d 'de' MMM 'de' y G h:mm:ss a",
              "M hms": "L h:mm:ss a",
              "Md hms": "dd/MM h:mm:ss a",
              "MEd hms": "E, dd/MM h:mm:ss a",
              "MMdd hms": "dd/MM h:mm:ss a",
              "MMM hms": "LLL h:mm:ss a",
              "MMMd hms": "d 'de' MMM h:mm:ss a",
              "MMMEd hms": "E, d 'de' MMM h:mm:ss a",
              "MMMMd hms": "d 'de' MMMM h:mm:ss a",
              "MMMMEd hms": "E, d 'de' MMMM h:mm:ss a",
              "y hms": "y h:mm:ss a",
              "yM hms": "MM/y h:mm:ss a",
              "yMd hms": "dd/MM/y h:mm:ss a",
              "yMEd hms": "E, dd/MM/y h:mm:ss a",
              "yMM hms": "MM/y h:mm:ss a",
              "yMMM hms": "MMM 'de' y h:mm:ss a",
              "yMMMd hms": "d 'de' MMM 'de' y h:mm:ss a",
              "yMMMEd hms": "E, d 'de' MMM 'de' y h:mm:ss a",
              "yMMMM hms": "MMMM 'de' y h:mm:ss a",
              "yMMMMd hms": "d 'de' MMMM 'de' y h:mm:ss a",
              "yMMMMEd hms": "E, d 'de' MMMM 'de' y h:mm:ss a",
              "EEEE, d 'de' MMMM 'de' y Hms": "EEEE, d 'de' MMMM 'de' y HH:mm:ss",
              "d 'de' MMMM 'de' y Hms": "d 'de' MMMM 'de' y HH:mm:ss",
              "d 'de' MMM 'de' y Hms": "d 'de' MMM 'de' y HH:mm:ss",
              "dd/MM/y Hms": "dd/MM/y HH:mm:ss",
              "d Hms": "d HH:mm:ss",
              "E Hms": "ccc HH:mm:ss",
              "Ed Hms": "E, d HH:mm:ss",
              "Gy Hms": "y G HH:mm:ss",
              "GyMd Hms": "dd/MM/y GGGGG HH:mm:ss",
              "GyMMM Hms": "MMM 'de' y G HH:mm:ss",
              "GyMMMd Hms": "d 'de' MMM 'de' y G HH:mm:ss",
              "GyMMMEd Hms": "E, d 'de' MMM 'de' y G HH:mm:ss",
              "M Hms": "L HH:mm:ss",
              "Md Hms": "dd/MM HH:mm:ss",
              "MEd Hms": "E, dd/MM HH:mm:ss",
              "MMdd Hms": "dd/MM HH:mm:ss",
              "MMM Hms": "LLL HH:mm:ss",
              "MMMd Hms": "d 'de' MMM HH:mm:ss",
              "MMMEd Hms": "E, d 'de' MMM HH:mm:ss",
              "MMMMd Hms": "d 'de' MMMM HH:mm:ss",
              "MMMMEd Hms": "E, d 'de' MMMM HH:mm:ss",
              "y Hms": "y HH:mm:ss",
              "yM Hms": "MM/y HH:mm:ss",
              "yMd Hms": "dd/MM/y HH:mm:ss",
              "yMEd Hms": "E, dd/MM/y HH:mm:ss",
              "yMM Hms": "MM/y HH:mm:ss",
              "yMMM Hms": "MMM 'de' y HH:mm:ss",
              "yMMMd Hms": "d 'de' MMM 'de' y HH:mm:ss",
              "yMMMEd Hms": "E, d 'de' MMM 'de' y HH:mm:ss",
              "yMMMM Hms": "MMMM 'de' y HH:mm:ss",
              "yMMMMd Hms": "d 'de' MMMM 'de' y HH:mm:ss",
              "yMMMMEd Hms": "E, d 'de' MMMM 'de' y HH:mm:ss",
              "EEEE, d 'de' MMMM 'de' y hmsv": "EEEE, d 'de' MMMM 'de' y h:mm:ss a v",
              "d 'de' MMMM 'de' y hmsv": "d 'de' MMMM 'de' y h:mm:ss a v",
              "d 'de' MMM 'de' y hmsv": "d 'de' MMM 'de' y h:mm:ss a v",
              "dd/MM/y hmsv": "dd/MM/y h:mm:ss a v",
              "d hmsv": "d h:mm:ss a v",
              "E hmsv": "ccc h:mm:ss a v",
              "Ed hmsv": "E, d h:mm:ss a v",
              "Gy hmsv": "y G h:mm:ss a v",
              "GyMd hmsv": "dd/MM/y GGGGG h:mm:ss a v",
              "GyMMM hmsv": "MMM 'de' y G h:mm:ss a v",
              "GyMMMd hmsv": "d 'de' MMM 'de' y G h:mm:ss a v",
              "GyMMMEd hmsv": "E, d 'de' MMM 'de' y G h:mm:ss a v",
              "M hmsv": "L h:mm:ss a v",
              "Md hmsv": "dd/MM h:mm:ss a v",
              "MEd hmsv": "E, dd/MM h:mm:ss a v",
              "MMdd hmsv": "dd/MM h:mm:ss a v",
              "MMM hmsv": "LLL h:mm:ss a v",
              "MMMd hmsv": "d 'de' MMM h:mm:ss a v",
              "MMMEd hmsv": "E, d 'de' MMM h:mm:ss a v",
              "MMMMd hmsv": "d 'de' MMMM h:mm:ss a v",
              "MMMMEd hmsv": "E, d 'de' MMMM h:mm:ss a v",
              "y hmsv": "y h:mm:ss a v",
              "yM hmsv": "MM/y h:mm:ss a v",
              "yMd hmsv": "dd/MM/y h:mm:ss a v",
              "yMEd hmsv": "E, dd/MM/y h:mm:ss a v",
              "yMM hmsv": "MM/y h:mm:ss a v",
              "yMMM hmsv": "MMM 'de' y h:mm:ss a v",
              "yMMMd hmsv": "d 'de' MMM 'de' y h:mm:ss a v",
              "yMMMEd hmsv": "E, d 'de' MMM 'de' y h:mm:ss a v",
              "yMMMM hmsv": "MMMM 'de' y h:mm:ss a v",
              "yMMMMd hmsv": "d 'de' MMMM 'de' y h:mm:ss a v",
              "yMMMMEd hmsv": "E, d 'de' MMMM 'de' y h:mm:ss a v",
              "EEEE, d 'de' MMMM 'de' y Hmsv": "EEEE, d 'de' MMMM 'de' y HH:mm:ss v",
              "d 'de' MMMM 'de' y Hmsv": "d 'de' MMMM 'de' y HH:mm:ss v",
              "d 'de' MMM 'de' y Hmsv": "d 'de' MMM 'de' y HH:mm:ss v",
              "dd/MM/y Hmsv": "dd/MM/y HH:mm:ss v",
              "d Hmsv": "d HH:mm:ss v",
              "E Hmsv": "ccc HH:mm:ss v",
              "Ed Hmsv": "E, d HH:mm:ss v",
              "Gy Hmsv": "y G HH:mm:ss v",
              "GyMd Hmsv": "dd/MM/y GGGGG HH:mm:ss v",
              "GyMMM Hmsv": "MMM 'de' y G HH:mm:ss v",
              "GyMMMd Hmsv": "d 'de' MMM 'de' y G HH:mm:ss v",
              "GyMMMEd Hmsv": "E, d 'de' MMM 'de' y G HH:mm:ss v",
              "M Hmsv": "L HH:mm:ss v",
              "Md Hmsv": "dd/MM HH:mm:ss v",
              "MEd Hmsv": "E, dd/MM HH:mm:ss v",
              "MMdd Hmsv": "dd/MM HH:mm:ss v",
              "MMM Hmsv": "LLL HH:mm:ss v",
              "MMMd Hmsv": "d 'de' MMM HH:mm:ss v",
              "MMMEd Hmsv": "E, d 'de' MMM HH:mm:ss v",
              "MMMMd Hmsv": "d 'de' MMMM HH:mm:ss v",
              "MMMMEd Hmsv": "E, d 'de' MMMM HH:mm:ss v",
              "y Hmsv": "y HH:mm:ss v",
              "yM Hmsv": "MM/y HH:mm:ss v",
              "yMd Hmsv": "dd/MM/y HH:mm:ss v",
              "yMEd Hmsv": "E, dd/MM/y HH:mm:ss v",
              "yMM Hmsv": "MM/y HH:mm:ss v",
              "yMMM Hmsv": "MMM 'de' y HH:mm:ss v",
              "yMMMd Hmsv": "d 'de' MMM 'de' y HH:mm:ss v",
              "yMMMEd Hmsv": "E, d 'de' MMM 'de' y HH:mm:ss v",
              "yMMMM Hmsv": "MMMM 'de' y HH:mm:ss v",
              "yMMMMd Hmsv": "d 'de' MMMM 'de' y HH:mm:ss v",
              "yMMMMEd Hmsv": "E, d 'de' MMMM 'de' y HH:mm:ss v",
              "EEEE, d 'de' MMMM 'de' y hmv": "EEEE, d 'de' MMMM 'de' y h:mm a v",
              "d 'de' MMMM 'de' y hmv": "d 'de' MMMM 'de' y h:mm a v",
              "d 'de' MMM 'de' y hmv": "d 'de' MMM 'de' y h:mm a v",
              "dd/MM/y hmv": "dd/MM/y h:mm a v",
              "d hmv": "d h:mm a v",
              "E hmv": "ccc h:mm a v",
              "Ed hmv": "E, d h:mm a v",
              "Gy hmv": "y G h:mm a v",
              "GyMd hmv": "dd/MM/y GGGGG h:mm a v",
              "GyMMM hmv": "MMM 'de' y G h:mm a v",
              "GyMMMd hmv": "d 'de' MMM 'de' y G h:mm a v",
              "GyMMMEd hmv": "E, d 'de' MMM 'de' y G h:mm a v",
              "M hmv": "L h:mm a v",
              "Md hmv": "dd/MM h:mm a v",
              "MEd hmv": "E, dd/MM h:mm a v",
              "MMdd hmv": "dd/MM h:mm a v",
              "MMM hmv": "LLL h:mm a v",
              "MMMd hmv": "d 'de' MMM h:mm a v",
              "MMMEd hmv": "E, d 'de' MMM h:mm a v",
              "MMMMd hmv": "d 'de' MMMM h:mm a v",
              "MMMMEd hmv": "E, d 'de' MMMM h:mm a v",
              "y hmv": "y h:mm a v",
              "yM hmv": "MM/y h:mm a v",
              "yMd hmv": "dd/MM/y h:mm a v",
              "yMEd hmv": "E, dd/MM/y h:mm a v",
              "yMM hmv": "MM/y h:mm a v",
              "yMMM hmv": "MMM 'de' y h:mm a v",
              "yMMMd hmv": "d 'de' MMM 'de' y h:mm a v",
              "yMMMEd hmv": "E, d 'de' MMM 'de' y h:mm a v",
              "yMMMM hmv": "MMMM 'de' y h:mm a v",
              "yMMMMd hmv": "d 'de' MMMM 'de' y h:mm a v",
              "yMMMMEd hmv": "E, d 'de' MMMM 'de' y h:mm a v",
              "EEEE, d 'de' MMMM 'de' y Hmv": "EEEE, d 'de' MMMM 'de' y HH:mm v",
              "d 'de' MMMM 'de' y Hmv": "d 'de' MMMM 'de' y HH:mm v",
              "d 'de' MMM 'de' y Hmv": "d 'de' MMM 'de' y HH:mm v",
              "dd/MM/y Hmv": "dd/MM/y HH:mm v",
              "d Hmv": "d HH:mm v",
              "E Hmv": "ccc HH:mm v",
              "Ed Hmv": "E, d HH:mm v",
              "Gy Hmv": "y G HH:mm v",
              "GyMd Hmv": "dd/MM/y GGGGG HH:mm v",
              "GyMMM Hmv": "MMM 'de' y G HH:mm v",
              "GyMMMd Hmv": "d 'de' MMM 'de' y G HH:mm v",
              "GyMMMEd Hmv": "E, d 'de' MMM 'de' y G HH:mm v",
              "M Hmv": "L HH:mm v",
              "Md Hmv": "dd/MM HH:mm v",
              "MEd Hmv": "E, dd/MM HH:mm v",
              "MMdd Hmv": "dd/MM HH:mm v",
              "MMM Hmv": "LLL HH:mm v",
              "MMMd Hmv": "d 'de' MMM HH:mm v",
              "MMMEd Hmv": "E, d 'de' MMM HH:mm v",
              "MMMMd Hmv": "d 'de' MMMM HH:mm v",
              "MMMMEd Hmv": "E, d 'de' MMMM HH:mm v",
              "y Hmv": "y HH:mm v",
              "yM Hmv": "MM/y HH:mm v",
              "yMd Hmv": "dd/MM/y HH:mm v",
              "yMEd Hmv": "E, dd/MM/y HH:mm v",
              "yMM Hmv": "MM/y HH:mm v",
              "yMMM Hmv": "MMM 'de' y HH:mm v",
              "yMMMd Hmv": "d 'de' MMM 'de' y HH:mm v",
              "yMMMEd Hmv": "E, d 'de' MMM 'de' y HH:mm v",
              "yMMMM Hmv": "MMMM 'de' y HH:mm v",
              "yMMMMd Hmv": "d 'de' MMMM 'de' y HH:mm v",
              "yMMMMEd Hmv": "E, d 'de' MMMM 'de' y HH:mm v",
              "EEEE, d 'de' MMMM 'de' y ms": "EEEE, d 'de' MMMM 'de' y mm:ss",
              "d 'de' MMMM 'de' y ms": "d 'de' MMMM 'de' y mm:ss",
              "d 'de' MMM 'de' y ms": "d 'de' MMM 'de' y mm:ss",
              "dd/MM/y ms": "dd/MM/y mm:ss",
              "d ms": "d mm:ss",
              "E ms": "ccc mm:ss",
              "Ed ms": "E, d mm:ss",
              "Gy ms": "y G mm:ss",
              "GyMd ms": "dd/MM/y GGGGG mm:ss",
              "GyMMM ms": "MMM 'de' y G mm:ss",
              "GyMMMd ms": "d 'de' MMM 'de' y G mm:ss",
              "GyMMMEd ms": "E, d 'de' MMM 'de' y G mm:ss",
              "M ms": "L mm:ss",
              "Md ms": "dd/MM mm:ss",
              "MEd ms": "E, dd/MM mm:ss",
              "MMdd ms": "dd/MM mm:ss",
              "MMM ms": "LLL mm:ss",
              "MMMd ms": "d 'de' MMM mm:ss",
              "MMMEd ms": "E, d 'de' MMM mm:ss",
              "MMMMd ms": "d 'de' MMMM mm:ss",
              "MMMMEd ms": "E, d 'de' MMMM mm:ss",
              "y ms": "y mm:ss",
              "yM ms": "MM/y mm:ss",
              "yMd ms": "dd/MM/y mm:ss",
              "yMEd ms": "E, dd/MM/y mm:ss",
              "yMM ms": "MM/y mm:ss",
              "yMMM ms": "MMM 'de' y mm:ss",
              "yMMMd ms": "d 'de' MMM 'de' y mm:ss",
              "yMMMEd ms": "E, d 'de' MMM 'de' y mm:ss",
              "yMMMM ms": "MMMM 'de' y mm:ss",
              "yMMMMd ms": "d 'de' MMMM 'de' y mm:ss",
              "yMMMMEd ms": "E, d 'de' MMMM 'de' y mm:ss"
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
              G: "MM/y GGGGG – MM/y GGGGG",
              M: "MM/y – MM/y GGGGG",
              y: "MM/y – MM/y G"
            },
            GyMd: {
              d: "M/d/y – M/d/y GGGGG",
              G: "M/d/y GGGGG – M/d/y GGGGG",
              M: "M/d/y – M/d/y GGGGG",
              y: "M/d/y – M/d/y GGGGG"
            },
            GyMEd: {
              d: "E, dd/MM/y – E, dd/MM/y GGGGG",
              G: "E, dd/MM/y GGGGG – E, dd/MM/y GGGGG",
              M: "E, dd/MM/y – E, dd/MM/y GGGGG",
              y: "E, dd/MM/y – E, dd/MM/y GGGGG"
            },
            GyMMM: {
              G: "MMM y G – MMM y G",
              M: "MMM – MMM y G",
              y: "MMM y – MMM y G"
            },
            GyMMMd: {
              d: "d – d 'de' MMM, y G",
              G: "d 'de' MMM 'de' y G – d 'de' MMM 'de' y G",
              M: "dd 'de' MMM – dd 'de' MMM 'de' y G",
              y: "d 'de' MMM 'de' y G – d 'de' MMM 'de' y G"
            },
            GyMMMEd: {
              d: "E, d 'de' MMM – E, d 'de' MMM 'de' y G",
              G: "E, d 'de' MMM 'de' y G – E, d 'de' MMM 'de' y G",
              M: "E, d 'de' MMM – E, d 'de' MMM 'de' y G",
              y: "E, d 'de' MMM 'de' y – E, d 'de' MMM 'de' y G"
            },
            h: {
              a: "h a – h a",
              h: "h – h a"
            },
            H: {
              H: "HH'h' - HH'h'"
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
              d: "dd/MM – dd/MM",
              M: "dd/MM – dd/MM"
            },
            MEd: {
              d: "E, dd/MM – E, dd/MM",
              M: "E, dd/MM – E, dd/MM"
            },
            MMM: {
              M: "MMM – MMM"
            },
            MMMd: {
              d: "d – d 'de' MMM",
              M: "d 'de' MMM – d 'de' MMM"
            },
            MMMEd: {
              d: "E, d 'de' MMM – E, d 'de' MMM",
              M: "E, d 'de' MMM – E, d 'de' MMM"
            },
            y: {
              y: "y – y"
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
              d: "E, dd/MM/y – E, dd/MM/y",
              M: "E, dd/MM/y – E, dd/MM/y",
              y: "E, dd/MM/y – E, dd/MM/y"
            },
            yMMM: {
              M: "MMM – MMM 'de' y",
              y: "MMM 'de' y – MMM 'de' y"
            },
            yMMMd: {
              d: "d – d 'de' MMM 'de' y",
              M: "d 'de' MMM – d 'de' MMM 'de' y",
              y: "d 'de' MMM 'de' y – d 'de' MMM 'de' y"
            },
            yMMMEd: {
              d: "E, d 'de' MMM – E, d 'de' MMM 'de' y",
              M: "E, d 'de' MMM – E, d 'de' MMM 'de' y",
              y: "E, d 'de' MMM 'de' y – E, d 'de' MMM 'de' y"
            },
            yMMMM: {
              M: "MMMM – MMMM 'de' y",
              y: "MMMM 'de' y – MMMM 'de' y"
            }
          },
          hourCycle: "h23",
          nu: ["latn"],
          ca: ["gregory"],
          hc: ["h23", ""]
        },
        locale: "pt"
      })
    }
  }
]);