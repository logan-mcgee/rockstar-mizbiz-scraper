try {
  let M = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    m = (new M.Error).stack;
  m && (M._sentryDebugIds = M._sentryDebugIds || {}, M._sentryDebugIds[m] = "cb4968cf-6095-4882-ac79-43e43f3be5a5", M._sentryDebugIdIdentifier = "sentry-dbid-cb4968cf-6095-4882-ac79-43e43f3be5a5")
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
  [6664], {
    26208: () => {
      Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
        data: {
          am: "AM",
          pm: "PM",
          weekday: {
            narrow: ["일", "월", "화", "수", "목", "금", "토"],
            short: ["일", "월", "화", "수", "목", "금", "토"],
            long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
          },
          era: {
            narrow: {
              BC: "BC",
              AD: "AD"
            },
            short: {
              BC: "BC",
              AD: "AD"
            },
            long: {
              BC: "기원전",
              AD: "서기"
            }
          },
          month: {
            narrow: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            long: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
          },
          timeZoneName: {
            "America/Rio_Branco": {
              long: ["아크레 표준시", "아크레 하계 표준시"]
            },
            "Asia/Kabul": {
              long: ["아프가니스탄 시간", "아프가니스탄 시간"]
            },
            "Africa/Maputo": {
              long: ["중앙아프리카 시간", "중앙아프리카 시간"]
            },
            "Africa/Bujumbura": {
              long: ["중앙아프리카 시간", "중앙아프리카 시간"]
            },
            "Africa/Gaborone": {
              long: ["중앙아프리카 시간", "중앙아프리카 시간"]
            },
            "Africa/Lubumbashi": {
              long: ["중앙아프리카 시간", "중앙아프리카 시간"]
            },
            "Africa/Blantyre": {
              long: ["중앙아프리카 시간", "중앙아프리카 시간"]
            },
            "Africa/Kigali": {
              long: ["중앙아프리카 시간", "중앙아프리카 시간"]
            },
            "Africa/Lusaka": {
              long: ["중앙아프리카 시간", "중앙아프리카 시간"]
            },
            "Africa/Harare": {
              long: ["중앙아프리카 시간", "중앙아프리카 시간"]
            },
            "Africa/Nairobi": {
              long: ["동아프리카 시간", "동아프리카 시간"]
            },
            "Africa/Djibouti": {
              long: ["동아프리카 시간", "동아프리카 시간"]
            },
            "Africa/Asmera": {
              long: ["동아프리카 시간", "동아프리카 시간"]
            },
            "Africa/Addis_Ababa": {
              long: ["동아프리카 시간", "동아프리카 시간"]
            },
            "Indian/Comoro": {
              long: ["동아프리카 시간", "동아프리카 시간"]
            },
            "Indian/Antananarivo": {
              long: ["동아프리카 시간", "동아프리카 시간"]
            },
            "Africa/Mogadishu": {
              long: ["동아프리카 시간", "동아프리카 시간"]
            },
            "Africa/Dar_es_Salaam": {
              long: ["동아프리카 시간", "동아프리카 시간"]
            },
            "Africa/Kampala": {
              long: ["동아프리카 시간", "동아프리카 시간"]
            },
            "Indian/Mayotte": {
              long: ["동아프리카 시간", "동아프리카 시간"]
            },
            "Africa/Johannesburg": {
              long: ["남아프리카 시간", "남아프리카 시간"]
            },
            "Africa/Maseru": {
              long: ["남아프리카 시간", "남아프리카 시간"]
            },
            "Africa/Mbabane": {
              long: ["남아프리카 시간", "남아프리카 시간"]
            },
            "Africa/Lagos": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Africa/Luanda": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Africa/Porto-Novo": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Africa/Kinshasa": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Africa/Bangui": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Africa/Brazzaville": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Africa/Douala": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Africa/Libreville": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Africa/Malabo": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Africa/Niamey": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Africa/Ndjamena": {
              long: ["서아프리카 표준시", "서아프리카 하계 표준시"]
            },
            "Asia/Aqtobe": {
              long: ["서부 카자흐스탄 시간", "서부 카자흐스탄 시간"]
            },
            "America/Juneau": {
              long: ["알래스카 표준시", "알래스카 하계 표준시"]
            },
            "Asia/Almaty": {
              long: ["동부 카자흐스탄 시간", "동부 카자흐스탄 시간"]
            },
            "America/Manaus": {
              long: ["아마존 표준시", "아마존 하계 표준시"]
            },
            "America/Chicago": {
              long: ["미 중부 표준시", "미 중부 하계 표준시"]
            },
            "America/Belize": {
              long: ["미 중부 표준시", "미 중부 하계 표준시"]
            },
            "America/Winnipeg": {
              long: ["미 중부 표준시", "미 중부 하계 표준시"]
            },
            "America/Costa_Rica": {
              long: ["미 중부 표준시", "미 중부 하계 표준시"]
            },
            "America/Guatemala": {
              long: ["미 중부 표준시", "미 중부 하계 표준시"]
            },
            "America/Tegucigalpa": {
              long: ["미 중부 표준시", "미 중부 하계 표준시"]
            },
            "America/Mexico_City": {
              long: ["미 중부 표준시", "미 중부 하계 표준시"]
            },
            "America/El_Salvador": {
              long: ["미 중부 표준시", "미 중부 하계 표준시"]
            },
            "America/New_York": {
              long: ["미 동부 표준시", "미 동부 하계 표준시"]
            },
            "America/Nassau": {
              long: ["미 동부 표준시", "미 동부 하계 표준시"]
            },
            "America/Toronto": {
              long: ["미 동부 표준시", "미 동부 하계 표준시"]
            },
            "America/Port-au-Prince": {
              long: ["미 동부 표준시", "미 동부 하계 표준시"]
            },
            "America/Jamaica": {
              long: ["미 동부 표준시", "미 동부 하계 표준시"]
            },
            "America/Cayman": {
              long: ["미 동부 표준시", "미 동부 하계 표준시"]
            },
            "America/Panama": {
              long: ["미 동부 표준시", "미 동부 하계 표준시"]
            },
            "America/Denver": {
              long: ["미 산악 표준시", "미 산지 하계 표준시"]
            },
            "America/Edmonton": {
              long: ["미 산악 표준시", "미 산지 하계 표준시"]
            },
            "America/Los_Angeles": {
              long: ["미 태평양 표준시", "미 태평양 하계 표준시"]
            },
            "America/Vancouver": {
              long: ["미 태평양 표준시", "미 태평양 하계 표준시"]
            },
            "America/Tijuana": {
              long: ["미 태평양 표준시", "미 태평양 하계 표준시"]
            },
            "Asia/Anadyr": {
              long: ["아나디리 표준시", "아나디리 하계 표준시"]
            },
            "Pacific/Apia": {
              long: ["아피아 표준시", "아피아 하계 표준시"]
            },
            "Asia/Riyadh": {
              long: ["아라비아 표준시", "아라비아 하계 표준시"]
            },
            "Asia/Bahrain": {
              long: ["아라비아 표준시", "아라비아 하계 표준시"]
            },
            "Asia/Baghdad": {
              long: ["아라비아 표준시", "아라비아 하계 표준시"]
            },
            "Asia/Kuwait": {
              long: ["아라비아 표준시", "아라비아 하계 표준시"]
            },
            "Asia/Qatar": {
              long: ["아라비아 표준시", "아라비아 하계 표준시"]
            },
            "Asia/Aden": {
              long: ["아라비아 표준시", "아라비아 하계 표준시"]
            },
            "America/Buenos_Aires": {
              long: ["아르헨티나 표준시", "아르헨티나 하계 표준시"]
            },
            "America/Argentina/San_Luis": {
              long: ["아르헨티나 서부 표준시", "아르헨티나 서부 하계 표준시"]
            },
            "Asia/Ashgabat": {
              long: ["투르크메니스탄 표준시", "투르크메니스탄 하계 표준시"]
            },
            "America/Halifax": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Antigua": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Anguilla": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Aruba": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Barbados": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "Atlantic/Bermuda": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Kralendijk": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Curacao": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Dominica": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Grenada": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Thule": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Guadeloupe": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/St_Kitts": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/St_Lucia": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Marigot": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Martinique": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Montserrat": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Puerto_Rico": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Lower_Princes": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Port_of_Spain": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/St_Vincent": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/Tortola": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "America/St_Thomas": {
              long: ["대서양 표준시", "대서양 하계 표준시"]
            },
            "Australia/Adelaide": {
              long: ["오스트레일리아 중부 표준시", "오스트레일리아 중부 하계 표준시"]
            },
            "Australia/Eucla": {
              long: ["오스트레일리아 중서부 표준시", "오스트레일리아 중서부 하계 표준시"]
            },
            "Australia/Sydney": {
              long: ["오스트레일리아 동부 표준시", "오스트레일리아 동부 하계 표준시"]
            },
            "Australia/Perth": {
              long: ["오스트레일리아 서부 표준시", "오스트레일리아 서부 하계 표준시"]
            },
            "Atlantic/Azores": {
              long: ["아조레스 표준시", "아조레스 하계 표준시"]
            },
            "Asia/Thimphu": {
              long: ["부탄 시간", "부탄 시간"]
            },
            "America/La_Paz": {
              long: ["볼리비아 시간", "볼리비아 시간"]
            },
            "Asia/Kuching": {
              long: ["말레이시아 시간", "말레이시아 시간"]
            },
            "America/Sao_Paulo": {
              long: ["브라질리아 표준시", "브라질리아 하계 표준시"]
            },
            "Europe/London": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Asia/Brunei": {
              long: ["브루나이 시간", "브루나이 시간"]
            },
            "Atlantic/Cape_Verde": {
              long: ["카보 베르데 표준시", "카보 베르데 하계 표준시"]
            },
            "Antarctica/Casey": {
              long: ["케이시 시간", "케이시 시간"]
            },
            "Pacific/Chatham": {
              long: ["채텀 표준시", "채텀 하계 표준시"]
            },
            "America/Santiago": {
              long: ["칠레 표준시", "칠레 하계 표준시"]
            },
            "Asia/Shanghai": {
              long: ["중국 표준시", "중국 하계 표준시"]
            },
            "Indian/Christmas": {
              long: ["크리스마스섬 시간", "크리스마스섬 시간"]
            },
            "Indian/Cocos": {
              long: ["코코스 제도 시간", "코코스 제도 시간"]
            },
            "America/Bogota": {
              long: ["콜롬비아 표준시", "콜롬비아 하계 표준시"]
            },
            "Pacific/Rarotonga": {
              long: ["쿡 제도 표준시", "쿡 제도 절반 하계 표준시"]
            },
            "America/Havana": {
              long: ["쿠바 표준시", "쿠바 하계 표준시"]
            },
            "Antarctica/Davis": {
              long: ["데이비스 시간", "데이비스 시간"]
            },
            "Antarctica/DumontDUrville": {
              long: ["뒤몽뒤르빌 시간", "뒤몽뒤르빌 시간"]
            },
            "Asia/Dushanbe": {
              long: ["타지키스탄 시간", "타지키스탄 시간"]
            },
            "America/Paramaribo": {
              long: ["수리남 시간", "수리남 시간"]
            },
            "Asia/Dili": {
              long: ["동티모르 시간", "동티모르 시간"]
            },
            "Pacific/Easter": {
              long: ["이스터섬 표준시", "이스터섬 하계 표준시"]
            },
            "America/Guayaquil": {
              long: ["에콰도르 시간", "에콰도르 시간"]
            },
            "Europe/Paris": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Andorra": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Tirane": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Vienna": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Sarajevo": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Brussels": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Zurich": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Prague": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Berlin": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Copenhagen": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Madrid": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Gibraltar": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Zagreb": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Budapest": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Rome": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Vaduz": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Luxembourg": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Monaco": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Podgorica": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Skopje": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Malta": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Amsterdam": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Oslo": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Warsaw": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Belgrade": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Stockholm": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Ljubljana": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Arctic/Longyearbyen": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Bratislava": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/San_Marino": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Africa/Tunis": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Vatican": {
              long: ["중부유럽 표준시", "중부유럽 하계 표준시"]
            },
            "Europe/Bucharest": {
              long: ["동유럽 표준시", "동유럽 하계 표준시"]
            },
            "Europe/Mariehamn": {
              long: ["동유럽 표준시", "동유럽 하계 표준시"]
            },
            "Europe/Sofia": {
              long: ["동유럽 표준시", "동유럽 하계 표준시"]
            },
            "Asia/Nicosia": {
              long: ["동유럽 표준시", "동유럽 하계 표준시"]
            },
            "Africa/Cairo": {
              long: ["동유럽 표준시", "동유럽 하계 표준시"]
            },
            "Europe/Helsinki": {
              long: ["동유럽 표준시", "동유럽 하계 표준시"]
            },
            "Europe/Athens": {
              long: ["동유럽 표준시", "동유럽 하계 표준시"]
            },
            "Asia/Beirut": {
              long: ["동유럽 표준시", "동유럽 하계 표준시"]
            },
            "Europe/Minsk": {
              long: ["극동유럽 표준시", "극동유럽 표준시"]
            },
            "Europe/Kaliningrad": {
              long: ["극동유럽 표준시", "극동유럽 표준시"]
            },
            "Atlantic/Canary": {
              long: ["서유럽 표준시", "서유럽 하계 표준시"]
            },
            "Atlantic/Faeroe": {
              long: ["서유럽 표준시", "서유럽 하계 표준시"]
            },
            "Atlantic/Stanley": {
              long: ["포클랜드 제도 표준시", "포클랜드 제도 하계 표준시"]
            },
            "Pacific/Fiji": {
              long: ["피지 표준시", "피지 하계 표준시"]
            },
            "America/Cayenne": {
              long: ["프랑스령 가이아나 시간", "프랑스령 가이아나 시간"]
            },
            "Indian/Kerguelen": {
              long: ["프랑스령 남부 식민지 및 남극 시간", "프랑스령 남부 식민지 및 남극 시간"]
            },
            "Asia/Bishkek": {
              long: ["키르기스스탄 시간", "키르기스스탄 시간"]
            },
            "Pacific/Galapagos": {
              long: ["갈라파고스 시간", "갈라파고스 시간"]
            },
            "Pacific/Gambier": {
              long: ["감비에 시간", "감비에 시간"]
            },
            "Pacific/Tarawa": {
              long: ["길버트 제도 시간", "길버트 제도 시간"]
            },
            "Atlantic/Reykjavik": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Africa/Ouagadougou": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Africa/Abidjan": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Africa/Accra": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Africa/Banjul": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Africa/Conakry": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Africa/Bamako": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Africa/Nouakchott": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Atlantic/St_Helena": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Africa/Freetown": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Africa/Dakar": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "Africa/Lome": {
              long: ["그리니치 표준시", "그리니치 표준시"]
            },
            "America/Godthab": {
              long: ["그린란드 서부 표준시", "그린란드 서부 하계 표준시"]
            },
            "America/Scoresbysund": {
              long: ["그린란드 동부 표준시", "그린란드 동부 하계 표준시"]
            },
            "Asia/Dubai": {
              long: ["걸프만 표준시", "걸프만 표준시"]
            },
            "Asia/Muscat": {
              long: ["걸프만 표준시", "걸프만 표준시"]
            },
            "America/Guyana": {
              long: ["가이아나 시간", "가이아나 시간"]
            },
            "Pacific/Honolulu": {
              long: ["하와이 알류샨 표준시", "하와이 알류샨 하계 표준시"]
            },
            "Asia/Hong_Kong": {
              long: ["홍콩 표준시", "홍콩 하계 표준시"]
            },
            "Asia/Hovd": {
              long: ["호브드 표준시", "호브드 하계 표준시"]
            },
            "Asia/Calcutta": {
              long: ["인도 표준시", "인도 표준시"]
            },
            "Indian/Chagos": {
              long: ["인도양 시간", "인도양 시간"]
            },
            "Asia/Bangkok": {
              long: ["인도차이나 시간", "인도차이나 시간"]
            },
            "Asia/Phnom_Penh": {
              long: ["인도차이나 시간", "인도차이나 시간"]
            },
            "Asia/Vientiane": {
              long: ["인도차이나 시간", "인도차이나 시간"]
            },
            "Asia/Makassar": {
              long: ["중부 인도네시아 시간", "중부 인도네시아 시간"]
            },
            "Asia/Jayapura": {
              long: ["동부 인도네시아 시간", "동부 인도네시아 시간"]
            },
            "Asia/Jakarta": {
              long: ["서부 인도네시아 시간", "서부 인도네시아 시간"]
            },
            "Asia/Tehran": {
              long: ["이란 표준시", "이란 하계 표준시"]
            },
            "Asia/Irkutsk": {
              long: ["이르쿠츠크 표준시", "이르쿠츠크 하계 표준시"]
            },
            "Asia/Jerusalem": {
              long: ["이스라엘 표준시", "이스라엘 하계 표준시"]
            },
            "Asia/Tokyo": {
              long: ["일본 표준시", "일본 하계 표준시"]
            },
            "Asia/Kamchatka": {
              long: ["페트로파블롭스크-캄차츠키 표준시", "페트로파블롭스크-캄차츠키 하계 표준시"]
            },
            "Asia/Karachi": {
              long: ["파키스탄 표준시", "파키스탄 하계 표준시"]
            },
            "Asia/Qyzylorda": {
              long: ["키질로르다 표준 시간", "키질로르다 하계 표준시"]
            },
            "Asia/Seoul": {
              long: ["대한민국 표준시", "대한민국 하계 표준시"]
            },
            "Pacific/Kosrae": {
              long: ["코스라에섬 시간", "코스라에섬 시간"]
            },
            "Asia/Krasnoyarsk": {
              long: ["크라스노야르스크 표준시", "크라스노야르스크 하계 표준시"]
            },
            "Europe/Samara": {
              long: ["사마라 표준시", "사마라 하계 표준시"]
            },
            "Pacific/Kiritimati": {
              long: ["라인 제도 시간", "라인 제도 시간"]
            },
            "Australia/Lord_Howe": {
              long: ["로드 하우 표준시", "로드 하우 하계 표준시"]
            },
            "Asia/Macau": {
              long: ["마카오 표준 시간", "마카오 하계 표준시"]
            },
            "Asia/Magadan": {
              long: ["마가단 표준시", "마가단 하계 표준시"]
            },
            "Indian/Maldives": {
              long: ["몰디브 시간", "몰디브 시간"]
            },
            "Pacific/Marquesas": {
              long: ["마르키즈 제도 시간", "마르키즈 제도 시간"]
            },
            "Pacific/Majuro": {
              long: ["마셜 제도 시간", "마셜 제도 시간"]
            },
            "Indian/Mauritius": {
              long: ["모리셔스 표준시", "모리셔스 하계 표준시"]
            },
            "Antarctica/Mawson": {
              long: ["모슨 시간", "모슨 시간"]
            },
            "America/Mazatlan": {
              long: ["멕시코 태평양 표준시", "멕시코 태평양 하계 표준시"]
            },
            "Asia/Ulaanbaatar": {
              long: ["울란바토르 표준시", "울란바토르 하계 표준시"]
            },
            "Europe/Moscow": {
              long: ["모스크바 표준시", "모스크바 하계 표준시"]
            },
            "Asia/Rangoon": {
              long: ["미얀마 시간", "미얀마 시간"]
            },
            "Pacific/Nauru": {
              long: ["나우루 시간", "나우루 시간"]
            },
            "Asia/Katmandu": {
              long: ["네팔 시간", "네팔 시간"]
            },
            "Pacific/Noumea": {
              long: ["뉴칼레도니아 표준시", "뉴칼레도니아 하계 표준시"]
            },
            "Pacific/Auckland": {
              long: ["뉴질랜드 표준시", "뉴질랜드 하계 표준시"]
            },
            "Antarctica/McMurdo": {
              long: ["뉴질랜드 표준시", "뉴질랜드 하계 표준시"]
            },
            "America/St_Johns": {
              long: ["뉴펀들랜드 표준시", "뉴펀들랜드 하계 표준시"]
            },
            "Pacific/Niue": {
              long: ["니우에 시간", "니우에 시간"]
            },
            "Pacific/Norfolk": {
              long: ["노퍽섬 표준시", "노퍽섬 하계 표준시"]
            },
            "America/Noronha": {
              long: ["페르난도 데 노로냐 표준시", "페르난도 데 노로냐 하계 표준시"]
            },
            "Asia/Novosibirsk": {
              long: ["노보시비르스크 표준시", "노보시비르스크 하계 표준시"]
            },
            "Asia/Omsk": {
              long: ["옴스크 표준시", "옴스크 하계 표준시"]
            },
            "Pacific/Palau": {
              long: ["팔라우 시간", "팔라우 시간"]
            },
            "Pacific/Port_Moresby": {
              long: ["파푸아뉴기니 시간", "파푸아뉴기니 시간"]
            },
            "America/Asuncion": {
              long: ["파라과이 표준시", "파라과이 하계 표준시"]
            },
            "America/Lima": {
              long: ["페루 표준시", "페루 하계 표준시"]
            },
            "Asia/Manila": {
              long: ["필리핀 표준시", "필리핀 하계 표준시"]
            },
            "Pacific/Enderbury": {
              long: ["피닉스 제도 시간", "피닉스 제도 시간"]
            },
            "America/Miquelon": {
              long: ["세인트피에르 미클롱 표준시", "세인트피에르 미클롱 하계 표준시"]
            },
            "Pacific/Pitcairn": {
              long: ["핏케언 시간", "핏케언 시간"]
            },
            "Pacific/Ponape": {
              long: ["포나페 시간", "포나페 시간"]
            },
            "Asia/Pyongyang": {
              long: ["평양 시간", "평양 시간"]
            },
            "Indian/Reunion": {
              long: ["레위니옹 시간", "레위니옹 시간"]
            },
            "Antarctica/Rothera": {
              long: ["로데라 시간", "로데라 시간"]
            },
            "Asia/Sakhalin": {
              long: ["사할린 표준시", "사할린 하계 표준시"]
            },
            "Pacific/Pago_Pago": {
              long: ["사모아 표준시", "사모아 하계 표준시"]
            },
            "Indian/Mahe": {
              long: ["세이셸 시간", "세이셸 시간"]
            },
            "Asia/Singapore": {
              long: ["싱가포르 표준시", "싱가포르 표준시"]
            },
            "Pacific/Guadalcanal": {
              long: ["솔로몬 제도 시간", "솔로몬 제도 시간"]
            },
            "Atlantic/South_Georgia": {
              long: ["사우스 조지아 시간", "사우스 조지아 시간"]
            },
            "Asia/Yekaterinburg": {
              long: ["예카테린부르크 표준시", "예카테린부르크 하계 표준시"]
            },
            "Antarctica/Syowa": {
              long: ["쇼와 시간", "쇼와 시간"]
            },
            "Pacific/Tahiti": {
              long: ["타히티 시간", "타히티 시간"]
            },
            "Asia/Taipei": {
              long: ["대만 표준시", "대만 하계 표준시"]
            },
            "Asia/Tashkent": {
              long: ["우즈베키스탄 표준시", "우즈베키스탄 하계 표준시"]
            },
            "Pacific/Fakaofo": {
              long: ["토켈라우 시간", "토켈라우 시간"]
            },
            "Pacific/Tongatapu": {
              long: ["통가 표준시", "통가 하계 표준시"]
            },
            "Pacific/Truk": {
              long: ["추크 시간", "추크 시간"]
            },
            "Pacific/Funafuti": {
              long: ["투발루 시간", "투발루 시간"]
            },
            "America/Montevideo": {
              long: ["우루과이 표준시", "우루과이 하계 표준시"]
            },
            "Pacific/Efate": {
              long: ["바누아투 표준시", "바누아투 하계 표준시"]
            },
            "America/Caracas": {
              long: ["베네수엘라 시간", "베네수엘라 시간"]
            },
            "Asia/Vladivostok": {
              long: ["블라디보스토크 표준시", "블라디보스토크 하계 표준시"]
            },
            "Europe/Volgograd": {
              long: ["볼고그라드 표준시", "볼고그라드 하계 표준시"]
            },
            "Antarctica/Vostok": {
              long: ["보스톡 시간", "보스톡 시간"]
            },
            "Pacific/Wake": {
              long: ["웨이크섬 시간", "웨이크섬 시간"]
            },
            "Pacific/Wallis": {
              long: ["월리스푸투나 제도 시간", "월리스푸투나 제도 시간"]
            },
            "Asia/Yakutsk": {
              long: ["야쿠츠크 표준시", "야쿠츠크 하계 표준시"]
            },
            "America/Whitehorse": {
              long: ["유콘 시간", "유콘 시간"]
            },
            UTC: {
              long: ["협정 세계시", "협정 세계시"],
              short: ["UTC", "UTC"]
            }
          },
          gmtFormat: "GMT{0}",
          hourFormat: "+HH:mm;-HH:mm",
          dateFormat: {
            full: "y년 MMMM d일 EEEE",
            long: "y년 MMMM d일",
            medium: "y. M. d.",
            short: "yy. M. d."
          },
          timeFormat: {
            full: "a h시 m분 s초 zzzz",
            long: "a h시 m분 s초 z",
            medium: "a h:mm:ss",
            short: "a h:mm"
          },
          dateTimeFormat: {
            full: "{1} {0}",
            long: "{1} {0}",
            medium: "{1} {0}",
            short: "{1} {0}"
          },
          formats: {
            gregory: {
              Bh: "B h시",
              Bhm: "B h:mm",
              Bhms: "B h:mm:ss",
              d: "d일",
              E: "ccc",
              EBhm: "(E) B h:mm",
              EBhms: "(E) B h:mm:ss",
              Ed: "d일 (E)",
              EEEEd: "d일 EEEE",
              Ehm: "(E) a h:mm",
              EHm: "(E) HH:mm",
              Ehms: "(E) a h:mm:ss",
              EHms: "(E) HH:mm:ss",
              Gy: "G y년",
              GyMd: "GGGGG y/M/d",
              GyMMM: "G y년 MMM",
              GyMMMd: "G y년 MMM d일",
              GyMMMEd: "G y년 MMM d일 (E)",
              GyMMMEEEEd: "G y년 MMM d일 EEEE",
              h: "a h시",
              H: "H시",
              HHmmss: "HH:mm:ss",
              hm: "a h:mm",
              Hm: "HH:mm",
              hms: "a h:mm:ss",
              Hms: "H시 m분 s초",
              hmsv: "a h:mm:ss v",
              Hmsv: "H시 m분 s초 v",
              hmv: "a h:mm v",
              Hmv: "HH:mm v",
              M: "M월",
              Md: "M. d.",
              MEd: "M. d. (E)",
              MEEEEd: "M. d. EEEE",
              MMM: "LLL",
              MMMd: "MMM d일",
              MMMEd: "MMM d일 (E)",
              MMMEEEEd: "MMM d일 EEEE",
              MMMMd: "MMMM d일",
              mmss: "mm:ss",
              ms: "mm:ss",
              y: "y년",
              yM: "y. M.",
              yMd: "y. M. d.",
              yMEd: "y. M. d. (E)",
              yMEEEEd: "y. M. d. EEEE",
              yMM: "y. M.",
              yMMM: "y년 MMM",
              yMMMd: "y년 MMM d일",
              yMMMEd: "y년 MMM d일 (E)",
              yMMMEEEEd: "y년 MMM d일 EEEE",
              yMMMM: "y년 MMMM",
              "y년 MMMM d일 EEEE": "y년 MMMM d일 EEEE",
              "y년 MMMM d일": "y년 MMMM d일",
              "y. M. d.": "y. M. d.",
              "yy. M. d.": "yy. M. d.",
              "a h시 m분 s초 zzzz": "a h시 m분 s초 zzzz",
              "a h시 m분 s초 z": "a h시 m분 s초 z",
              "a h:mm:ss": "a h:mm:ss",
              "a h:mm": "a h:mm",
              "y년 MMMM d일 EEEE a h시 m분 s초 zzzz": "y년 MMMM d일 EEEE a h시 m분 s초 zzzz",
              "y년 MMMM d일 a h시 m분 s초 zzzz": "y년 MMMM d일 a h시 m분 s초 zzzz",
              "y. M. d. a h시 m분 s초 zzzz": "y. M. d. a h시 m분 s초 zzzz",
              "yy. M. d. a h시 m분 s초 zzzz": "yy. M. d. a h시 m분 s초 zzzz",
              "d a h시 m분 s초 zzzz": "d일 a h시 m분 s초 zzzz",
              "E a h시 m분 s초 zzzz": "ccc a h시 m분 s초 zzzz",
              "Ed a h시 m분 s초 zzzz": "d일 (E) a h시 m분 s초 zzzz",
              "EEEEd a h시 m분 s초 zzzz": "d일 EEEE a h시 m분 s초 zzzz",
              "Gy a h시 m분 s초 zzzz": "G y년 a h시 m분 s초 zzzz",
              "GyMd a h시 m분 s초 zzzz": "GGGGG y/M/d a h시 m분 s초 zzzz",
              "GyMMM a h시 m분 s초 zzzz": "G y년 MMM a h시 m분 s초 zzzz",
              "GyMMMd a h시 m분 s초 zzzz": "G y년 MMM d일 a h시 m분 s초 zzzz",
              "GyMMMEd a h시 m분 s초 zzzz": "G y년 MMM d일 (E) a h시 m분 s초 zzzz",
              "GyMMMEEEEd a h시 m분 s초 zzzz": "G y년 MMM d일 EEEE a h시 m분 s초 zzzz",
              "M a h시 m분 s초 zzzz": "M월 a h시 m분 s초 zzzz",
              "Md a h시 m분 s초 zzzz": "M. d. a h시 m분 s초 zzzz",
              "MEd a h시 m분 s초 zzzz": "M. d. (E) a h시 m분 s초 zzzz",
              "MEEEEd a h시 m분 s초 zzzz": "M. d. EEEE a h시 m분 s초 zzzz",
              "MMM a h시 m분 s초 zzzz": "LLL a h시 m분 s초 zzzz",
              "MMMd a h시 m분 s초 zzzz": "MMM d일 a h시 m분 s초 zzzz",
              "MMMEd a h시 m분 s초 zzzz": "MMM d일 (E) a h시 m분 s초 zzzz",
              "MMMEEEEd a h시 m분 s초 zzzz": "MMM d일 EEEE a h시 m분 s초 zzzz",
              "MMMMd a h시 m분 s초 zzzz": "MMMM d일 a h시 m분 s초 zzzz",
              "y a h시 m분 s초 zzzz": "y년 a h시 m분 s초 zzzz",
              "yM a h시 m분 s초 zzzz": "y. M. a h시 m분 s초 zzzz",
              "yMd a h시 m분 s초 zzzz": "y. M. d. a h시 m분 s초 zzzz",
              "yMEd a h시 m분 s초 zzzz": "y. M. d. (E) a h시 m분 s초 zzzz",
              "yMEEEEd a h시 m분 s초 zzzz": "y. M. d. EEEE a h시 m분 s초 zzzz",
              "yMM a h시 m분 s초 zzzz": "y. M. a h시 m분 s초 zzzz",
              "yMMM a h시 m분 s초 zzzz": "y년 MMM a h시 m분 s초 zzzz",
              "yMMMd a h시 m분 s초 zzzz": "y년 MMM d일 a h시 m분 s초 zzzz",
              "yMMMEd a h시 m분 s초 zzzz": "y년 MMM d일 (E) a h시 m분 s초 zzzz",
              "yMMMEEEEd a h시 m분 s초 zzzz": "y년 MMM d일 EEEE a h시 m분 s초 zzzz",
              "yMMMM a h시 m분 s초 zzzz": "y년 MMMM a h시 m분 s초 zzzz",
              "y년 MMMM d일 EEEE a h시 m분 s초 z": "y년 MMMM d일 EEEE a h시 m분 s초 z",
              "y년 MMMM d일 a h시 m분 s초 z": "y년 MMMM d일 a h시 m분 s초 z",
              "y. M. d. a h시 m분 s초 z": "y. M. d. a h시 m분 s초 z",
              "yy. M. d. a h시 m분 s초 z": "yy. M. d. a h시 m분 s초 z",
              "d a h시 m분 s초 z": "d일 a h시 m분 s초 z",
              "E a h시 m분 s초 z": "ccc a h시 m분 s초 z",
              "Ed a h시 m분 s초 z": "d일 (E) a h시 m분 s초 z",
              "EEEEd a h시 m분 s초 z": "d일 EEEE a h시 m분 s초 z",
              "Gy a h시 m분 s초 z": "G y년 a h시 m분 s초 z",
              "GyMd a h시 m분 s초 z": "GGGGG y/M/d a h시 m분 s초 z",
              "GyMMM a h시 m분 s초 z": "G y년 MMM a h시 m분 s초 z",
              "GyMMMd a h시 m분 s초 z": "G y년 MMM d일 a h시 m분 s초 z",
              "GyMMMEd a h시 m분 s초 z": "G y년 MMM d일 (E) a h시 m분 s초 z",
              "GyMMMEEEEd a h시 m분 s초 z": "G y년 MMM d일 EEEE a h시 m분 s초 z",
              "M a h시 m분 s초 z": "M월 a h시 m분 s초 z",
              "Md a h시 m분 s초 z": "M. d. a h시 m분 s초 z",
              "MEd a h시 m분 s초 z": "M. d. (E) a h시 m분 s초 z",
              "MEEEEd a h시 m분 s초 z": "M. d. EEEE a h시 m분 s초 z",
              "MMM a h시 m분 s초 z": "LLL a h시 m분 s초 z",
              "MMMd a h시 m분 s초 z": "MMM d일 a h시 m분 s초 z",
              "MMMEd a h시 m분 s초 z": "MMM d일 (E) a h시 m분 s초 z",
              "MMMEEEEd a h시 m분 s초 z": "MMM d일 EEEE a h시 m분 s초 z",
              "MMMMd a h시 m분 s초 z": "MMMM d일 a h시 m분 s초 z",
              "y a h시 m분 s초 z": "y년 a h시 m분 s초 z",
              "yM a h시 m분 s초 z": "y. M. a h시 m분 s초 z",
              "yMd a h시 m분 s초 z": "y. M. d. a h시 m분 s초 z",
              "yMEd a h시 m분 s초 z": "y. M. d. (E) a h시 m분 s초 z",
              "yMEEEEd a h시 m분 s초 z": "y. M. d. EEEE a h시 m분 s초 z",
              "yMM a h시 m분 s초 z": "y. M. a h시 m분 s초 z",
              "yMMM a h시 m분 s초 z": "y년 MMM a h시 m분 s초 z",
              "yMMMd a h시 m분 s초 z": "y년 MMM d일 a h시 m분 s초 z",
              "yMMMEd a h시 m분 s초 z": "y년 MMM d일 (E) a h시 m분 s초 z",
              "yMMMEEEEd a h시 m분 s초 z": "y년 MMM d일 EEEE a h시 m분 s초 z",
              "yMMMM a h시 m분 s초 z": "y년 MMMM a h시 m분 s초 z",
              "y년 MMMM d일 EEEE a h:mm:ss": "y년 MMMM d일 EEEE a h:mm:ss",
              "y년 MMMM d일 a h:mm:ss": "y년 MMMM d일 a h:mm:ss",
              "y. M. d. a h:mm:ss": "y. M. d. a h:mm:ss",
              "yy. M. d. a h:mm:ss": "yy. M. d. a h:mm:ss",
              "d a h:mm:ss": "d일 a h:mm:ss",
              "E a h:mm:ss": "ccc a h:mm:ss",
              "Ed a h:mm:ss": "d일 (E) a h:mm:ss",
              "EEEEd a h:mm:ss": "d일 EEEE a h:mm:ss",
              "Gy a h:mm:ss": "G y년 a h:mm:ss",
              "GyMd a h:mm:ss": "GGGGG y/M/d a h:mm:ss",
              "GyMMM a h:mm:ss": "G y년 MMM a h:mm:ss",
              "GyMMMd a h:mm:ss": "G y년 MMM d일 a h:mm:ss",
              "GyMMMEd a h:mm:ss": "G y년 MMM d일 (E) a h:mm:ss",
              "GyMMMEEEEd a h:mm:ss": "G y년 MMM d일 EEEE a h:mm:ss",
              "M a h:mm:ss": "M월 a h:mm:ss",
              "Md a h:mm:ss": "M. d. a h:mm:ss",
              "MEd a h:mm:ss": "M. d. (E) a h:mm:ss",
              "MEEEEd a h:mm:ss": "M. d. EEEE a h:mm:ss",
              "MMM a h:mm:ss": "LLL a h:mm:ss",
              "MMMd a h:mm:ss": "MMM d일 a h:mm:ss",
              "MMMEd a h:mm:ss": "MMM d일 (E) a h:mm:ss",
              "MMMEEEEd a h:mm:ss": "MMM d일 EEEE a h:mm:ss",
              "MMMMd a h:mm:ss": "MMMM d일 a h:mm:ss",
              "y a h:mm:ss": "y년 a h:mm:ss",
              "yM a h:mm:ss": "y. M. a h:mm:ss",
              "yMd a h:mm:ss": "y. M. d. a h:mm:ss",
              "yMEd a h:mm:ss": "y. M. d. (E) a h:mm:ss",
              "yMEEEEd a h:mm:ss": "y. M. d. EEEE a h:mm:ss",
              "yMM a h:mm:ss": "y. M. a h:mm:ss",
              "yMMM a h:mm:ss": "y년 MMM a h:mm:ss",
              "yMMMd a h:mm:ss": "y년 MMM d일 a h:mm:ss",
              "yMMMEd a h:mm:ss": "y년 MMM d일 (E) a h:mm:ss",
              "yMMMEEEEd a h:mm:ss": "y년 MMM d일 EEEE a h:mm:ss",
              "yMMMM a h:mm:ss": "y년 MMMM a h:mm:ss",
              "y년 MMMM d일 EEEE a h:mm": "y년 MMMM d일 EEEE a h:mm",
              "y년 MMMM d일 a h:mm": "y년 MMMM d일 a h:mm",
              "y. M. d. a h:mm": "y. M. d. a h:mm",
              "yy. M. d. a h:mm": "yy. M. d. a h:mm",
              "d a h:mm": "d일 a h:mm",
              "E a h:mm": "ccc a h:mm",
              "Ed a h:mm": "d일 (E) a h:mm",
              "EEEEd a h:mm": "d일 EEEE a h:mm",
              "Gy a h:mm": "G y년 a h:mm",
              "GyMd a h:mm": "GGGGG y/M/d a h:mm",
              "GyMMM a h:mm": "G y년 MMM a h:mm",
              "GyMMMd a h:mm": "G y년 MMM d일 a h:mm",
              "GyMMMEd a h:mm": "G y년 MMM d일 (E) a h:mm",
              "GyMMMEEEEd a h:mm": "G y년 MMM d일 EEEE a h:mm",
              "M a h:mm": "M월 a h:mm",
              "Md a h:mm": "M. d. a h:mm",
              "MEd a h:mm": "M. d. (E) a h:mm",
              "MEEEEd a h:mm": "M. d. EEEE a h:mm",
              "MMM a h:mm": "LLL a h:mm",
              "MMMd a h:mm": "MMM d일 a h:mm",
              "MMMEd a h:mm": "MMM d일 (E) a h:mm",
              "MMMEEEEd a h:mm": "MMM d일 EEEE a h:mm",
              "MMMMd a h:mm": "MMMM d일 a h:mm",
              "y a h:mm": "y년 a h:mm",
              "yM a h:mm": "y. M. a h:mm",
              "yMd a h:mm": "y. M. d. a h:mm",
              "yMEd a h:mm": "y. M. d. (E) a h:mm",
              "yMEEEEd a h:mm": "y. M. d. EEEE a h:mm",
              "yMM a h:mm": "y. M. a h:mm",
              "yMMM a h:mm": "y년 MMM a h:mm",
              "yMMMd a h:mm": "y년 MMM d일 a h:mm",
              "yMMMEd a h:mm": "y년 MMM d일 (E) a h:mm",
              "yMMMEEEEd a h:mm": "y년 MMM d일 EEEE a h:mm",
              "yMMMM a h:mm": "y년 MMMM a h:mm",
              "y년 MMMM d일 EEEE Bh": "y년 MMMM d일 EEEE B h시",
              "y년 MMMM d일 Bh": "y년 MMMM d일 B h시",
              "y. M. d. Bh": "y. M. d. B h시",
              "yy. M. d. Bh": "yy. M. d. B h시",
              "d Bh": "d일 B h시",
              "E Bh": "ccc B h시",
              "Ed Bh": "d일 (E) B h시",
              "EEEEd Bh": "d일 EEEE B h시",
              "Gy Bh": "G y년 B h시",
              "GyMd Bh": "GGGGG y/M/d B h시",
              "GyMMM Bh": "G y년 MMM B h시",
              "GyMMMd Bh": "G y년 MMM d일 B h시",
              "GyMMMEd Bh": "G y년 MMM d일 (E) B h시",
              "GyMMMEEEEd Bh": "G y년 MMM d일 EEEE B h시",
              "M Bh": "M월 B h시",
              "Md Bh": "M. d. B h시",
              "MEd Bh": "M. d. (E) B h시",
              "MEEEEd Bh": "M. d. EEEE B h시",
              "MMM Bh": "LLL B h시",
              "MMMd Bh": "MMM d일 B h시",
              "MMMEd Bh": "MMM d일 (E) B h시",
              "MMMEEEEd Bh": "MMM d일 EEEE B h시",
              "MMMMd Bh": "MMMM d일 B h시",
              "y Bh": "y년 B h시",
              "yM Bh": "y. M. B h시",
              "yMd Bh": "y. M. d. B h시",
              "yMEd Bh": "y. M. d. (E) B h시",
              "yMEEEEd Bh": "y. M. d. EEEE B h시",
              "yMM Bh": "y. M. B h시",
              "yMMM Bh": "y년 MMM B h시",
              "yMMMd Bh": "y년 MMM d일 B h시",
              "yMMMEd Bh": "y년 MMM d일 (E) B h시",
              "yMMMEEEEd Bh": "y년 MMM d일 EEEE B h시",
              "yMMMM Bh": "y년 MMMM B h시",
              "y년 MMMM d일 EEEE Bhm": "y년 MMMM d일 EEEE B h:mm",
              "y년 MMMM d일 Bhm": "y년 MMMM d일 B h:mm",
              "y. M. d. Bhm": "y. M. d. B h:mm",
              "yy. M. d. Bhm": "yy. M. d. B h:mm",
              "d Bhm": "d일 B h:mm",
              "E Bhm": "ccc B h:mm",
              "Ed Bhm": "d일 (E) B h:mm",
              "EEEEd Bhm": "d일 EEEE B h:mm",
              "Gy Bhm": "G y년 B h:mm",
              "GyMd Bhm": "GGGGG y/M/d B h:mm",
              "GyMMM Bhm": "G y년 MMM B h:mm",
              "GyMMMd Bhm": "G y년 MMM d일 B h:mm",
              "GyMMMEd Bhm": "G y년 MMM d일 (E) B h:mm",
              "GyMMMEEEEd Bhm": "G y년 MMM d일 EEEE B h:mm",
              "M Bhm": "M월 B h:mm",
              "Md Bhm": "M. d. B h:mm",
              "MEd Bhm": "M. d. (E) B h:mm",
              "MEEEEd Bhm": "M. d. EEEE B h:mm",
              "MMM Bhm": "LLL B h:mm",
              "MMMd Bhm": "MMM d일 B h:mm",
              "MMMEd Bhm": "MMM d일 (E) B h:mm",
              "MMMEEEEd Bhm": "MMM d일 EEEE B h:mm",
              "MMMMd Bhm": "MMMM d일 B h:mm",
              "y Bhm": "y년 B h:mm",
              "yM Bhm": "y. M. B h:mm",
              "yMd Bhm": "y. M. d. B h:mm",
              "yMEd Bhm": "y. M. d. (E) B h:mm",
              "yMEEEEd Bhm": "y. M. d. EEEE B h:mm",
              "yMM Bhm": "y. M. B h:mm",
              "yMMM Bhm": "y년 MMM B h:mm",
              "yMMMd Bhm": "y년 MMM d일 B h:mm",
              "yMMMEd Bhm": "y년 MMM d일 (E) B h:mm",
              "yMMMEEEEd Bhm": "y년 MMM d일 EEEE B h:mm",
              "yMMMM Bhm": "y년 MMMM B h:mm",
              "y년 MMMM d일 EEEE Bhms": "y년 MMMM d일 EEEE B h:mm:ss",
              "y년 MMMM d일 Bhms": "y년 MMMM d일 B h:mm:ss",
              "y. M. d. Bhms": "y. M. d. B h:mm:ss",
              "yy. M. d. Bhms": "yy. M. d. B h:mm:ss",
              "d Bhms": "d일 B h:mm:ss",
              "E Bhms": "ccc B h:mm:ss",
              "Ed Bhms": "d일 (E) B h:mm:ss",
              "EEEEd Bhms": "d일 EEEE B h:mm:ss",
              "Gy Bhms": "G y년 B h:mm:ss",
              "GyMd Bhms": "GGGGG y/M/d B h:mm:ss",
              "GyMMM Bhms": "G y년 MMM B h:mm:ss",
              "GyMMMd Bhms": "G y년 MMM d일 B h:mm:ss",
              "GyMMMEd Bhms": "G y년 MMM d일 (E) B h:mm:ss",
              "GyMMMEEEEd Bhms": "G y년 MMM d일 EEEE B h:mm:ss",
              "M Bhms": "M월 B h:mm:ss",
              "Md Bhms": "M. d. B h:mm:ss",
              "MEd Bhms": "M. d. (E) B h:mm:ss",
              "MEEEEd Bhms": "M. d. EEEE B h:mm:ss",
              "MMM Bhms": "LLL B h:mm:ss",
              "MMMd Bhms": "MMM d일 B h:mm:ss",
              "MMMEd Bhms": "MMM d일 (E) B h:mm:ss",
              "MMMEEEEd Bhms": "MMM d일 EEEE B h:mm:ss",
              "MMMMd Bhms": "MMMM d일 B h:mm:ss",
              "y Bhms": "y년 B h:mm:ss",
              "yM Bhms": "y. M. B h:mm:ss",
              "yMd Bhms": "y. M. d. B h:mm:ss",
              "yMEd Bhms": "y. M. d. (E) B h:mm:ss",
              "yMEEEEd Bhms": "y. M. d. EEEE B h:mm:ss",
              "yMM Bhms": "y. M. B h:mm:ss",
              "yMMM Bhms": "y년 MMM B h:mm:ss",
              "yMMMd Bhms": "y년 MMM d일 B h:mm:ss",
              "yMMMEd Bhms": "y년 MMM d일 (E) B h:mm:ss",
              "yMMMEEEEd Bhms": "y년 MMM d일 EEEE B h:mm:ss",
              "yMMMM Bhms": "y년 MMMM B h:mm:ss",
              "y년 MMMM d일 EEEE h": "y년 MMMM d일 EEEE a h시",
              "y년 MMMM d일 h": "y년 MMMM d일 a h시",
              "y. M. d. h": "y. M. d. a h시",
              "yy. M. d. h": "yy. M. d. a h시",
              "d h": "d일 a h시",
              "E h": "ccc a h시",
              "Ed h": "d일 (E) a h시",
              "EEEEd h": "d일 EEEE a h시",
              "Gy h": "G y년 a h시",
              "GyMd h": "GGGGG y/M/d a h시",
              "GyMMM h": "G y년 MMM a h시",
              "GyMMMd h": "G y년 MMM d일 a h시",
              "GyMMMEd h": "G y년 MMM d일 (E) a h시",
              "GyMMMEEEEd h": "G y년 MMM d일 EEEE a h시",
              "M h": "M월 a h시",
              "Md h": "M. d. a h시",
              "MEd h": "M. d. (E) a h시",
              "MEEEEd h": "M. d. EEEE a h시",
              "MMM h": "LLL a h시",
              "MMMd h": "MMM d일 a h시",
              "MMMEd h": "MMM d일 (E) a h시",
              "MMMEEEEd h": "MMM d일 EEEE a h시",
              "MMMMd h": "MMMM d일 a h시",
              "y h": "y년 a h시",
              "yM h": "y. M. a h시",
              "yMd h": "y. M. d. a h시",
              "yMEd h": "y. M. d. (E) a h시",
              "yMEEEEd h": "y. M. d. EEEE a h시",
              "yMM h": "y. M. a h시",
              "yMMM h": "y년 MMM a h시",
              "yMMMd h": "y년 MMM d일 a h시",
              "yMMMEd h": "y년 MMM d일 (E) a h시",
              "yMMMEEEEd h": "y년 MMM d일 EEEE a h시",
              "yMMMM h": "y년 MMMM a h시",
              "y년 MMMM d일 EEEE H": "y년 MMMM d일 EEEE H시",
              "y년 MMMM d일 H": "y년 MMMM d일 H시",
              "y. M. d. H": "y. M. d. H시",
              "yy. M. d. H": "yy. M. d. H시",
              "d H": "d일 H시",
              "E H": "ccc H시",
              "Ed H": "d일 (E) H시",
              "EEEEd H": "d일 EEEE H시",
              "Gy H": "G y년 H시",
              "GyMd H": "GGGGG y/M/d H시",
              "GyMMM H": "G y년 MMM H시",
              "GyMMMd H": "G y년 MMM d일 H시",
              "GyMMMEd H": "G y년 MMM d일 (E) H시",
              "GyMMMEEEEd H": "G y년 MMM d일 EEEE H시",
              "M H": "M월 H시",
              "Md H": "M. d. H시",
              "MEd H": "M. d. (E) H시",
              "MEEEEd H": "M. d. EEEE H시",
              "MMM H": "LLL H시",
              "MMMd H": "MMM d일 H시",
              "MMMEd H": "MMM d일 (E) H시",
              "MMMEEEEd H": "MMM d일 EEEE H시",
              "MMMMd H": "MMMM d일 H시",
              "y H": "y년 H시",
              "yM H": "y. M. H시",
              "yMd H": "y. M. d. H시",
              "yMEd H": "y. M. d. (E) H시",
              "yMEEEEd H": "y. M. d. EEEE H시",
              "yMM H": "y. M. H시",
              "yMMM H": "y년 MMM H시",
              "yMMMd H": "y년 MMM d일 H시",
              "yMMMEd H": "y년 MMM d일 (E) H시",
              "yMMMEEEEd H": "y년 MMM d일 EEEE H시",
              "yMMMM H": "y년 MMMM H시",
              "y년 MMMM d일 EEEE HHmmss": "y년 MMMM d일 EEEE HH:mm:ss",
              "y년 MMMM d일 HHmmss": "y년 MMMM d일 HH:mm:ss",
              "y. M. d. HHmmss": "y. M. d. HH:mm:ss",
              "yy. M. d. HHmmss": "yy. M. d. HH:mm:ss",
              "d HHmmss": "d일 HH:mm:ss",
              "E HHmmss": "ccc HH:mm:ss",
              "Ed HHmmss": "d일 (E) HH:mm:ss",
              "EEEEd HHmmss": "d일 EEEE HH:mm:ss",
              "Gy HHmmss": "G y년 HH:mm:ss",
              "GyMd HHmmss": "GGGGG y/M/d HH:mm:ss",
              "GyMMM HHmmss": "G y년 MMM HH:mm:ss",
              "GyMMMd HHmmss": "G y년 MMM d일 HH:mm:ss",
              "GyMMMEd HHmmss": "G y년 MMM d일 (E) HH:mm:ss",
              "GyMMMEEEEd HHmmss": "G y년 MMM d일 EEEE HH:mm:ss",
              "M HHmmss": "M월 HH:mm:ss",
              "Md HHmmss": "M. d. HH:mm:ss",
              "MEd HHmmss": "M. d. (E) HH:mm:ss",
              "MEEEEd HHmmss": "M. d. EEEE HH:mm:ss",
              "MMM HHmmss": "LLL HH:mm:ss",
              "MMMd HHmmss": "MMM d일 HH:mm:ss",
              "MMMEd HHmmss": "MMM d일 (E) HH:mm:ss",
              "MMMEEEEd HHmmss": "MMM d일 EEEE HH:mm:ss",
              "MMMMd HHmmss": "MMMM d일 HH:mm:ss",
              "y HHmmss": "y년 HH:mm:ss",
              "yM HHmmss": "y. M. HH:mm:ss",
              "yMd HHmmss": "y. M. d. HH:mm:ss",
              "yMEd HHmmss": "y. M. d. (E) HH:mm:ss",
              "yMEEEEd HHmmss": "y. M. d. EEEE HH:mm:ss",
              "yMM HHmmss": "y. M. HH:mm:ss",
              "yMMM HHmmss": "y년 MMM HH:mm:ss",
              "yMMMd HHmmss": "y년 MMM d일 HH:mm:ss",
              "yMMMEd HHmmss": "y년 MMM d일 (E) HH:mm:ss",
              "yMMMEEEEd HHmmss": "y년 MMM d일 EEEE HH:mm:ss",
              "yMMMM HHmmss": "y년 MMMM HH:mm:ss",
              "y년 MMMM d일 EEEE hm": "y년 MMMM d일 EEEE a h:mm",
              "y년 MMMM d일 hm": "y년 MMMM d일 a h:mm",
              "y. M. d. hm": "y. M. d. a h:mm",
              "yy. M. d. hm": "yy. M. d. a h:mm",
              "d hm": "d일 a h:mm",
              "E hm": "ccc a h:mm",
              "Ed hm": "d일 (E) a h:mm",
              "EEEEd hm": "d일 EEEE a h:mm",
              "Gy hm": "G y년 a h:mm",
              "GyMd hm": "GGGGG y/M/d a h:mm",
              "GyMMM hm": "G y년 MMM a h:mm",
              "GyMMMd hm": "G y년 MMM d일 a h:mm",
              "GyMMMEd hm": "G y년 MMM d일 (E) a h:mm",
              "GyMMMEEEEd hm": "G y년 MMM d일 EEEE a h:mm",
              "M hm": "M월 a h:mm",
              "Md hm": "M. d. a h:mm",
              "MEd hm": "M. d. (E) a h:mm",
              "MEEEEd hm": "M. d. EEEE a h:mm",
              "MMM hm": "LLL a h:mm",
              "MMMd hm": "MMM d일 a h:mm",
              "MMMEd hm": "MMM d일 (E) a h:mm",
              "MMMEEEEd hm": "MMM d일 EEEE a h:mm",
              "MMMMd hm": "MMMM d일 a h:mm",
              "y hm": "y년 a h:mm",
              "yM hm": "y. M. a h:mm",
              "yMd hm": "y. M. d. a h:mm",
              "yMEd hm": "y. M. d. (E) a h:mm",
              "yMEEEEd hm": "y. M. d. EEEE a h:mm",
              "yMM hm": "y. M. a h:mm",
              "yMMM hm": "y년 MMM a h:mm",
              "yMMMd hm": "y년 MMM d일 a h:mm",
              "yMMMEd hm": "y년 MMM d일 (E) a h:mm",
              "yMMMEEEEd hm": "y년 MMM d일 EEEE a h:mm",
              "yMMMM hm": "y년 MMMM a h:mm",
              "y년 MMMM d일 EEEE Hm": "y년 MMMM d일 EEEE HH:mm",
              "y년 MMMM d일 Hm": "y년 MMMM d일 HH:mm",
              "y. M. d. Hm": "y. M. d. HH:mm",
              "yy. M. d. Hm": "yy. M. d. HH:mm",
              "d Hm": "d일 HH:mm",
              "E Hm": "ccc HH:mm",
              "Ed Hm": "d일 (E) HH:mm",
              "EEEEd Hm": "d일 EEEE HH:mm",
              "Gy Hm": "G y년 HH:mm",
              "GyMd Hm": "GGGGG y/M/d HH:mm",
              "GyMMM Hm": "G y년 MMM HH:mm",
              "GyMMMd Hm": "G y년 MMM d일 HH:mm",
              "GyMMMEd Hm": "G y년 MMM d일 (E) HH:mm",
              "GyMMMEEEEd Hm": "G y년 MMM d일 EEEE HH:mm",
              "M Hm": "M월 HH:mm",
              "Md Hm": "M. d. HH:mm",
              "MEd Hm": "M. d. (E) HH:mm",
              "MEEEEd Hm": "M. d. EEEE HH:mm",
              "MMM Hm": "LLL HH:mm",
              "MMMd Hm": "MMM d일 HH:mm",
              "MMMEd Hm": "MMM d일 (E) HH:mm",
              "MMMEEEEd Hm": "MMM d일 EEEE HH:mm",
              "MMMMd Hm": "MMMM d일 HH:mm",
              "y Hm": "y년 HH:mm",
              "yM Hm": "y. M. HH:mm",
              "yMd Hm": "y. M. d. HH:mm",
              "yMEd Hm": "y. M. d. (E) HH:mm",
              "yMEEEEd Hm": "y. M. d. EEEE HH:mm",
              "yMM Hm": "y. M. HH:mm",
              "yMMM Hm": "y년 MMM HH:mm",
              "yMMMd Hm": "y년 MMM d일 HH:mm",
              "yMMMEd Hm": "y년 MMM d일 (E) HH:mm",
              "yMMMEEEEd Hm": "y년 MMM d일 EEEE HH:mm",
              "yMMMM Hm": "y년 MMMM HH:mm",
              "y년 MMMM d일 EEEE hms": "y년 MMMM d일 EEEE a h:mm:ss",
              "y년 MMMM d일 hms": "y년 MMMM d일 a h:mm:ss",
              "y. M. d. hms": "y. M. d. a h:mm:ss",
              "yy. M. d. hms": "yy. M. d. a h:mm:ss",
              "d hms": "d일 a h:mm:ss",
              "E hms": "ccc a h:mm:ss",
              "Ed hms": "d일 (E) a h:mm:ss",
              "EEEEd hms": "d일 EEEE a h:mm:ss",
              "Gy hms": "G y년 a h:mm:ss",
              "GyMd hms": "GGGGG y/M/d a h:mm:ss",
              "GyMMM hms": "G y년 MMM a h:mm:ss",
              "GyMMMd hms": "G y년 MMM d일 a h:mm:ss",
              "GyMMMEd hms": "G y년 MMM d일 (E) a h:mm:ss",
              "GyMMMEEEEd hms": "G y년 MMM d일 EEEE a h:mm:ss",
              "M hms": "M월 a h:mm:ss",
              "Md hms": "M. d. a h:mm:ss",
              "MEd hms": "M. d. (E) a h:mm:ss",
              "MEEEEd hms": "M. d. EEEE a h:mm:ss",
              "MMM hms": "LLL a h:mm:ss",
              "MMMd hms": "MMM d일 a h:mm:ss",
              "MMMEd hms": "MMM d일 (E) a h:mm:ss",
              "MMMEEEEd hms": "MMM d일 EEEE a h:mm:ss",
              "MMMMd hms": "MMMM d일 a h:mm:ss",
              "y hms": "y년 a h:mm:ss",
              "yM hms": "y. M. a h:mm:ss",
              "yMd hms": "y. M. d. a h:mm:ss",
              "yMEd hms": "y. M. d. (E) a h:mm:ss",
              "yMEEEEd hms": "y. M. d. EEEE a h:mm:ss",
              "yMM hms": "y. M. a h:mm:ss",
              "yMMM hms": "y년 MMM a h:mm:ss",
              "yMMMd hms": "y년 MMM d일 a h:mm:ss",
              "yMMMEd hms": "y년 MMM d일 (E) a h:mm:ss",
              "yMMMEEEEd hms": "y년 MMM d일 EEEE a h:mm:ss",
              "yMMMM hms": "y년 MMMM a h:mm:ss",
              "y년 MMMM d일 EEEE Hms": "y년 MMMM d일 EEEE H시 m분 s초",
              "y년 MMMM d일 Hms": "y년 MMMM d일 H시 m분 s초",
              "y. M. d. Hms": "y. M. d. H시 m분 s초",
              "yy. M. d. Hms": "yy. M. d. H시 m분 s초",
              "d Hms": "d일 H시 m분 s초",
              "E Hms": "ccc H시 m분 s초",
              "Ed Hms": "d일 (E) H시 m분 s초",
              "EEEEd Hms": "d일 EEEE H시 m분 s초",
              "Gy Hms": "G y년 H시 m분 s초",
              "GyMd Hms": "GGGGG y/M/d H시 m분 s초",
              "GyMMM Hms": "G y년 MMM H시 m분 s초",
              "GyMMMd Hms": "G y년 MMM d일 H시 m분 s초",
              "GyMMMEd Hms": "G y년 MMM d일 (E) H시 m분 s초",
              "GyMMMEEEEd Hms": "G y년 MMM d일 EEEE H시 m분 s초",
              "M Hms": "M월 H시 m분 s초",
              "Md Hms": "M. d. H시 m분 s초",
              "MEd Hms": "M. d. (E) H시 m분 s초",
              "MEEEEd Hms": "M. d. EEEE H시 m분 s초",
              "MMM Hms": "LLL H시 m분 s초",
              "MMMd Hms": "MMM d일 H시 m분 s초",
              "MMMEd Hms": "MMM d일 (E) H시 m분 s초",
              "MMMEEEEd Hms": "MMM d일 EEEE H시 m분 s초",
              "MMMMd Hms": "MMMM d일 H시 m분 s초",
              "y Hms": "y년 H시 m분 s초",
              "yM Hms": "y. M. H시 m분 s초",
              "yMd Hms": "y. M. d. H시 m분 s초",
              "yMEd Hms": "y. M. d. (E) H시 m분 s초",
              "yMEEEEd Hms": "y. M. d. EEEE H시 m분 s초",
              "yMM Hms": "y. M. H시 m분 s초",
              "yMMM Hms": "y년 MMM H시 m분 s초",
              "yMMMd Hms": "y년 MMM d일 H시 m분 s초",
              "yMMMEd Hms": "y년 MMM d일 (E) H시 m분 s초",
              "yMMMEEEEd Hms": "y년 MMM d일 EEEE H시 m분 s초",
              "yMMMM Hms": "y년 MMMM H시 m분 s초",
              "y년 MMMM d일 EEEE hmsv": "y년 MMMM d일 EEEE a h:mm:ss v",
              "y년 MMMM d일 hmsv": "y년 MMMM d일 a h:mm:ss v",
              "y. M. d. hmsv": "y. M. d. a h:mm:ss v",
              "yy. M. d. hmsv": "yy. M. d. a h:mm:ss v",
              "d hmsv": "d일 a h:mm:ss v",
              "E hmsv": "ccc a h:mm:ss v",
              "Ed hmsv": "d일 (E) a h:mm:ss v",
              "EEEEd hmsv": "d일 EEEE a h:mm:ss v",
              "Gy hmsv": "G y년 a h:mm:ss v",
              "GyMd hmsv": "GGGGG y/M/d a h:mm:ss v",
              "GyMMM hmsv": "G y년 MMM a h:mm:ss v",
              "GyMMMd hmsv": "G y년 MMM d일 a h:mm:ss v",
              "GyMMMEd hmsv": "G y년 MMM d일 (E) a h:mm:ss v",
              "GyMMMEEEEd hmsv": "G y년 MMM d일 EEEE a h:mm:ss v",
              "M hmsv": "M월 a h:mm:ss v",
              "Md hmsv": "M. d. a h:mm:ss v",
              "MEd hmsv": "M. d. (E) a h:mm:ss v",
              "MEEEEd hmsv": "M. d. EEEE a h:mm:ss v",
              "MMM hmsv": "LLL a h:mm:ss v",
              "MMMd hmsv": "MMM d일 a h:mm:ss v",
              "MMMEd hmsv": "MMM d일 (E) a h:mm:ss v",
              "MMMEEEEd hmsv": "MMM d일 EEEE a h:mm:ss v",
              "MMMMd hmsv": "MMMM d일 a h:mm:ss v",
              "y hmsv": "y년 a h:mm:ss v",
              "yM hmsv": "y. M. a h:mm:ss v",
              "yMd hmsv": "y. M. d. a h:mm:ss v",
              "yMEd hmsv": "y. M. d. (E) a h:mm:ss v",
              "yMEEEEd hmsv": "y. M. d. EEEE a h:mm:ss v",
              "yMM hmsv": "y. M. a h:mm:ss v",
              "yMMM hmsv": "y년 MMM a h:mm:ss v",
              "yMMMd hmsv": "y년 MMM d일 a h:mm:ss v",
              "yMMMEd hmsv": "y년 MMM d일 (E) a h:mm:ss v",
              "yMMMEEEEd hmsv": "y년 MMM d일 EEEE a h:mm:ss v",
              "yMMMM hmsv": "y년 MMMM a h:mm:ss v",
              "y년 MMMM d일 EEEE Hmsv": "y년 MMMM d일 EEEE H시 m분 s초 v",
              "y년 MMMM d일 Hmsv": "y년 MMMM d일 H시 m분 s초 v",
              "y. M. d. Hmsv": "y. M. d. H시 m분 s초 v",
              "yy. M. d. Hmsv": "yy. M. d. H시 m분 s초 v",
              "d Hmsv": "d일 H시 m분 s초 v",
              "E Hmsv": "ccc H시 m분 s초 v",
              "Ed Hmsv": "d일 (E) H시 m분 s초 v",
              "EEEEd Hmsv": "d일 EEEE H시 m분 s초 v",
              "Gy Hmsv": "G y년 H시 m분 s초 v",
              "GyMd Hmsv": "GGGGG y/M/d H시 m분 s초 v",
              "GyMMM Hmsv": "G y년 MMM H시 m분 s초 v",
              "GyMMMd Hmsv": "G y년 MMM d일 H시 m분 s초 v",
              "GyMMMEd Hmsv": "G y년 MMM d일 (E) H시 m분 s초 v",
              "GyMMMEEEEd Hmsv": "G y년 MMM d일 EEEE H시 m분 s초 v",
              "M Hmsv": "M월 H시 m분 s초 v",
              "Md Hmsv": "M. d. H시 m분 s초 v",
              "MEd Hmsv": "M. d. (E) H시 m분 s초 v",
              "MEEEEd Hmsv": "M. d. EEEE H시 m분 s초 v",
              "MMM Hmsv": "LLL H시 m분 s초 v",
              "MMMd Hmsv": "MMM d일 H시 m분 s초 v",
              "MMMEd Hmsv": "MMM d일 (E) H시 m분 s초 v",
              "MMMEEEEd Hmsv": "MMM d일 EEEE H시 m분 s초 v",
              "MMMMd Hmsv": "MMMM d일 H시 m분 s초 v",
              "y Hmsv": "y년 H시 m분 s초 v",
              "yM Hmsv": "y. M. H시 m분 s초 v",
              "yMd Hmsv": "y. M. d. H시 m분 s초 v",
              "yMEd Hmsv": "y. M. d. (E) H시 m분 s초 v",
              "yMEEEEd Hmsv": "y. M. d. EEEE H시 m분 s초 v",
              "yMM Hmsv": "y. M. H시 m분 s초 v",
              "yMMM Hmsv": "y년 MMM H시 m분 s초 v",
              "yMMMd Hmsv": "y년 MMM d일 H시 m분 s초 v",
              "yMMMEd Hmsv": "y년 MMM d일 (E) H시 m분 s초 v",
              "yMMMEEEEd Hmsv": "y년 MMM d일 EEEE H시 m분 s초 v",
              "yMMMM Hmsv": "y년 MMMM H시 m분 s초 v",
              "y년 MMMM d일 EEEE hmv": "y년 MMMM d일 EEEE a h:mm v",
              "y년 MMMM d일 hmv": "y년 MMMM d일 a h:mm v",
              "y. M. d. hmv": "y. M. d. a h:mm v",
              "yy. M. d. hmv": "yy. M. d. a h:mm v",
              "d hmv": "d일 a h:mm v",
              "E hmv": "ccc a h:mm v",
              "Ed hmv": "d일 (E) a h:mm v",
              "EEEEd hmv": "d일 EEEE a h:mm v",
              "Gy hmv": "G y년 a h:mm v",
              "GyMd hmv": "GGGGG y/M/d a h:mm v",
              "GyMMM hmv": "G y년 MMM a h:mm v",
              "GyMMMd hmv": "G y년 MMM d일 a h:mm v",
              "GyMMMEd hmv": "G y년 MMM d일 (E) a h:mm v",
              "GyMMMEEEEd hmv": "G y년 MMM d일 EEEE a h:mm v",
              "M hmv": "M월 a h:mm v",
              "Md hmv": "M. d. a h:mm v",
              "MEd hmv": "M. d. (E) a h:mm v",
              "MEEEEd hmv": "M. d. EEEE a h:mm v",
              "MMM hmv": "LLL a h:mm v",
              "MMMd hmv": "MMM d일 a h:mm v",
              "MMMEd hmv": "MMM d일 (E) a h:mm v",
              "MMMEEEEd hmv": "MMM d일 EEEE a h:mm v",
              "MMMMd hmv": "MMMM d일 a h:mm v",
              "y hmv": "y년 a h:mm v",
              "yM hmv": "y. M. a h:mm v",
              "yMd hmv": "y. M. d. a h:mm v",
              "yMEd hmv": "y. M. d. (E) a h:mm v",
              "yMEEEEd hmv": "y. M. d. EEEE a h:mm v",
              "yMM hmv": "y. M. a h:mm v",
              "yMMM hmv": "y년 MMM a h:mm v",
              "yMMMd hmv": "y년 MMM d일 a h:mm v",
              "yMMMEd hmv": "y년 MMM d일 (E) a h:mm v",
              "yMMMEEEEd hmv": "y년 MMM d일 EEEE a h:mm v",
              "yMMMM hmv": "y년 MMMM a h:mm v",
              "y년 MMMM d일 EEEE Hmv": "y년 MMMM d일 EEEE HH:mm v",
              "y년 MMMM d일 Hmv": "y년 MMMM d일 HH:mm v",
              "y. M. d. Hmv": "y. M. d. HH:mm v",
              "yy. M. d. Hmv": "yy. M. d. HH:mm v",
              "d Hmv": "d일 HH:mm v",
              "E Hmv": "ccc HH:mm v",
              "Ed Hmv": "d일 (E) HH:mm v",
              "EEEEd Hmv": "d일 EEEE HH:mm v",
              "Gy Hmv": "G y년 HH:mm v",
              "GyMd Hmv": "GGGGG y/M/d HH:mm v",
              "GyMMM Hmv": "G y년 MMM HH:mm v",
              "GyMMMd Hmv": "G y년 MMM d일 HH:mm v",
              "GyMMMEd Hmv": "G y년 MMM d일 (E) HH:mm v",
              "GyMMMEEEEd Hmv": "G y년 MMM d일 EEEE HH:mm v",
              "M Hmv": "M월 HH:mm v",
              "Md Hmv": "M. d. HH:mm v",
              "MEd Hmv": "M. d. (E) HH:mm v",
              "MEEEEd Hmv": "M. d. EEEE HH:mm v",
              "MMM Hmv": "LLL HH:mm v",
              "MMMd Hmv": "MMM d일 HH:mm v",
              "MMMEd Hmv": "MMM d일 (E) HH:mm v",
              "MMMEEEEd Hmv": "MMM d일 EEEE HH:mm v",
              "MMMMd Hmv": "MMMM d일 HH:mm v",
              "y Hmv": "y년 HH:mm v",
              "yM Hmv": "y. M. HH:mm v",
              "yMd Hmv": "y. M. d. HH:mm v",
              "yMEd Hmv": "y. M. d. (E) HH:mm v",
              "yMEEEEd Hmv": "y. M. d. EEEE HH:mm v",
              "yMM Hmv": "y. M. HH:mm v",
              "yMMM Hmv": "y년 MMM HH:mm v",
              "yMMMd Hmv": "y년 MMM d일 HH:mm v",
              "yMMMEd Hmv": "y년 MMM d일 (E) HH:mm v",
              "yMMMEEEEd Hmv": "y년 MMM d일 EEEE HH:mm v",
              "yMMMM Hmv": "y년 MMMM HH:mm v",
              "y년 MMMM d일 EEEE mmss": "y년 MMMM d일 EEEE mm:ss",
              "y년 MMMM d일 mmss": "y년 MMMM d일 mm:ss",
              "y. M. d. mmss": "y. M. d. mm:ss",
              "yy. M. d. mmss": "yy. M. d. mm:ss",
              "d mmss": "d일 mm:ss",
              "E mmss": "ccc mm:ss",
              "Ed mmss": "d일 (E) mm:ss",
              "EEEEd mmss": "d일 EEEE mm:ss",
              "Gy mmss": "G y년 mm:ss",
              "GyMd mmss": "GGGGG y/M/d mm:ss",
              "GyMMM mmss": "G y년 MMM mm:ss",
              "GyMMMd mmss": "G y년 MMM d일 mm:ss",
              "GyMMMEd mmss": "G y년 MMM d일 (E) mm:ss",
              "GyMMMEEEEd mmss": "G y년 MMM d일 EEEE mm:ss",
              "M mmss": "M월 mm:ss",
              "Md mmss": "M. d. mm:ss",
              "MEd mmss": "M. d. (E) mm:ss",
              "MEEEEd mmss": "M. d. EEEE mm:ss",
              "MMM mmss": "LLL mm:ss",
              "MMMd mmss": "MMM d일 mm:ss",
              "MMMEd mmss": "MMM d일 (E) mm:ss",
              "MMMEEEEd mmss": "MMM d일 EEEE mm:ss",
              "MMMMd mmss": "MMMM d일 mm:ss",
              "y mmss": "y년 mm:ss",
              "yM mmss": "y. M. mm:ss",
              "yMd mmss": "y. M. d. mm:ss",
              "yMEd mmss": "y. M. d. (E) mm:ss",
              "yMEEEEd mmss": "y. M. d. EEEE mm:ss",
              "yMM mmss": "y. M. mm:ss",
              "yMMM mmss": "y년 MMM mm:ss",
              "yMMMd mmss": "y년 MMM d일 mm:ss",
              "yMMMEd mmss": "y년 MMM d일 (E) mm:ss",
              "yMMMEEEEd mmss": "y년 MMM d일 EEEE mm:ss",
              "yMMMM mmss": "y년 MMMM mm:ss",
              "y년 MMMM d일 EEEE ms": "y년 MMMM d일 EEEE mm:ss",
              "y년 MMMM d일 ms": "y년 MMMM d일 mm:ss",
              "y. M. d. ms": "y. M. d. mm:ss",
              "yy. M. d. ms": "yy. M. d. mm:ss",
              "d ms": "d일 mm:ss",
              "E ms": "ccc mm:ss",
              "Ed ms": "d일 (E) mm:ss",
              "EEEEd ms": "d일 EEEE mm:ss",
              "Gy ms": "G y년 mm:ss",
              "GyMd ms": "GGGGG y/M/d mm:ss",
              "GyMMM ms": "G y년 MMM mm:ss",
              "GyMMMd ms": "G y년 MMM d일 mm:ss",
              "GyMMMEd ms": "G y년 MMM d일 (E) mm:ss",
              "GyMMMEEEEd ms": "G y년 MMM d일 EEEE mm:ss",
              "M ms": "M월 mm:ss",
              "Md ms": "M. d. mm:ss",
              "MEd ms": "M. d. (E) mm:ss",
              "MEEEEd ms": "M. d. EEEE mm:ss",
              "MMM ms": "LLL mm:ss",
              "MMMd ms": "MMM d일 mm:ss",
              "MMMEd ms": "MMM d일 (E) mm:ss",
              "MMMEEEEd ms": "MMM d일 EEEE mm:ss",
              "MMMMd ms": "MMMM d일 mm:ss",
              "y ms": "y년 mm:ss",
              "yM ms": "y. M. mm:ss",
              "yMd ms": "y. M. d. mm:ss",
              "yMEd ms": "y. M. d. (E) mm:ss",
              "yMEEEEd ms": "y. M. d. EEEE mm:ss",
              "yMM ms": "y. M. mm:ss",
              "yMMM ms": "y년 MMM mm:ss",
              "yMMMd ms": "y년 MMM d일 mm:ss",
              "yMMMEd ms": "y년 MMM d일 (E) mm:ss",
              "yMMMEEEEd ms": "y년 MMM d일 EEEE mm:ss",
              "yMMMM ms": "y년 MMMM mm:ss"
            }
          },
          intervalFormats: {
            intervalFormatFallback: "{0} ~ {1}",
            Bh: {
              B: "B h시 ~ B h시",
              h: "B h시~h시"
            },
            Bhm: {
              B: "B h:mm~B h:mm",
              h: "B h:mm ~ h:mm",
              m: "B h:mm ~ h:mm"
            },
            d: {
              d: "d일~d일"
            },
            Gy: {
              G: "G y년 ~ G y년",
              y: "G y년~y년"
            },
            GyM: {
              G: "GGGGG y년 M월 ~ GGGGG y년 M월",
              M: "GGGGG y년 M월 ~ GGGGG y년 M월",
              y: "GGGGG y년 M월 ~ y년 M월"
            },
            GyMd: {
              d: "GGGGG y년 M월 d일 ~ y년 M월 d일",
              G: "GGGGG y년 M월 d일 ~ GGGGG y년 M월 d일",
              M: "GGGGG y년 M월 d일 ~ y년 M월 d일",
              y: "GGGGG y년 M월 d일 ~ y년 M월 d일"
            },
            GyMEd: {
              d: "GGGGG y년 M월 d일 E요일 ~ y년 M월 d일 E요일",
              G: "GGGGG y년 M월 d일 E요일 ~ GGGGG y년 M월 d일 E요일",
              M: "GGGGG y년 M월 d일 E요일 ~ y년 M월 d일 E요일",
              y: "GGGGG y년 M월 d일 E요일 ~ y년 M월 d일 E요일"
            },
            GyMMM: {
              G: "G y년 MMM ~ G y년 MMM",
              M: "G y년 MMM ~ MMM",
              y: "G y년 MMM ~ y년 MMM"
            },
            GyMMMd: {
              d: "G y년 MMM d일 ~ d일",
              G: "G y년 MMM d일 ~ G y년 MMM d일",
              M: "G y년 MMM d일 ~ MMM d일",
              y: "G y년 MMM d일 ~ y년 MMM d일"
            },
            GyMMMEd: {
              d: "G y년 MMM d일 E요일 ~ MMM d일 E요일",
              G: "G y년 MMM d일 E요일 ~ G y년 MMM d일 E요일",
              M: "G y년 MMM d일 E요일 ~ MMM d일 E요일",
              y: "G y년 MMM d일 E요일 ~ y년 MMM d일 E요일"
            },
            h: {
              a: "a h시 ~ a h시",
              h: "a h시 ~ h시"
            },
            H: {
              H: "H ~ H시"
            },
            hm: {
              a: "a h:mm ~ a h:mm",
              h: "a h:mm~h:mm",
              m: "a h:mm~h:mm"
            },
            Hm: {
              H: "HH:mm ~ HH:mm",
              m: "HH:mm ~ HH:mm"
            },
            hmv: {
              a: "a h:mm ~ a h:mm v",
              h: "a h:mm~h:mm v",
              m: "a h:mm~h:mm v"
            },
            Hmv: {
              H: "HH:mm ~ HH:mm v",
              m: "HH:mm ~ HH:mm v"
            },
            hv: {
              a: "a h시 ~ a h시(v)",
              h: "a h시 ~ h시(v)"
            },
            Hv: {
              H: "HH ~ HH시 v"
            },
            M: {
              M: "M월~M월"
            },
            Md: {
              d: "M/d ~ M/d",
              M: "M/d ~ M/d"
            },
            MEd: {
              d: "M. d (E) ~ M. d (E)",
              M: "M. d (E) ~ M. d (E)"
            },
            MMM: {
              M: "MMM~MMM"
            },
            MMMd: {
              d: "MMM d일~d일",
              M: "M월 d일 ~ M월 d일"
            },
            MMMEd: {
              d: "M월 d일 (E) ~ d일 (E)",
              M: "M월 d일 (E) ~ M월 d일 (E)"
            },
            MMMM: {
              M: "LLLL–LLLL"
            },
            y: {
              y: "y년 ~ y년"
            },
            yM: {
              M: "y. M ~ y. M",
              y: "y. M ~ y. M"
            },
            yMd: {
              d: "y. M. d. ~ y. M. d.",
              M: "y. M. d. ~ y. M. d.",
              y: "y. M. d. ~ y. M. d."
            },
            yMEd: {
              d: "y. M. d. (E) ~ y. M. d. (E)",
              M: "y. M. d. (E) ~ y. M. d. (E)",
              y: "y. M. d. (E) ~ y. M. d. (E)"
            },
            yMMM: {
              M: "y년 M월~M월",
              y: "y년 M월 ~ y년 M월"
            },
            yMMMd: {
              d: "y년 M월 d일~d일",
              M: "y년 M월 d일 ~ M월 d일",
              y: "y년 M월 d일 ~ y년 M월 d일"
            },
            yMMMEd: {
              d: "y년 M월 d일 (E) ~ d일 (E)",
              M: "y년 M월 d일 (E) ~ M월 d일 (E)",
              y: "y년 M월 d일 (E) ~ y년 M월 d일 (E)"
            },
            yMMMEEEEd: {
              d: "y년 M월 d일 EEEE ~ d일 EEEE",
              M: "y년 M월 d일 EEEE ~ M월 d일 EEEE",
              y: "y년 M월 d일 EEEE ~ y년 M월 d일 EEEE"
            },
            yMMMM: {
              M: "y년 MMMM ~ MMMM",
              y: "y년 MMMM ~ y년 MMMM"
            }
          },
          hourCycle: "h12",
          nu: ["latn"],
          ca: ["gregory", "dangi"],
          hc: ["h12", "h23", "", ""]
        },
        locale: "ko"
      })
    }
  }
]);