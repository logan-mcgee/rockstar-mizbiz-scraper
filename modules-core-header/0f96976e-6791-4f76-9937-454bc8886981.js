try {
  let m = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    M = (new m.Error).stack;
  M && (m._sentryDebugIds = m._sentryDebugIds || {}, m._sentryDebugIds[M] = "0f96976e-6791-4f76-9937-454bc8886981", m._sentryDebugIdIdentifier = "sentry-dbid-0f96976e-6791-4f76-9937-454bc8886981")
} catch (m) {} {
  let m = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[(new m.Error).stack] = Object.assign({}, m._sentryModuleMetadata[(new m.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4700], {
    98432: () => {
      Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
        data: {
          am: "上午",
          pm: "下午",
          weekday: {
            narrow: ["日", "一", "二", "三", "四", "五", "六"],
            short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
          },
          era: {
            narrow: {
              BC: "公元前",
              AD: "公元"
            },
            short: {
              BC: "公元前",
              AD: "公元"
            },
            long: {
              BC: "公元前",
              AD: "公元"
            }
          },
          month: {
            narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
          },
          timeZoneName: {
            "America/Rio_Branco": {
              long: ["阿克里标准时间", "阿克里夏令时间"]
            },
            "Asia/Kabul": {
              long: ["阿富汗时间", "阿富汗时间"]
            },
            "Africa/Maputo": {
              long: ["中部非洲时间", "中部非洲时间"]
            },
            "Africa/Bujumbura": {
              long: ["中部非洲时间", "中部非洲时间"]
            },
            "Africa/Gaborone": {
              long: ["中部非洲时间", "中部非洲时间"]
            },
            "Africa/Lubumbashi": {
              long: ["中部非洲时间", "中部非洲时间"]
            },
            "Africa/Blantyre": {
              long: ["中部非洲时间", "中部非洲时间"]
            },
            "Africa/Kigali": {
              long: ["中部非洲时间", "中部非洲时间"]
            },
            "Africa/Lusaka": {
              long: ["中部非洲时间", "中部非洲时间"]
            },
            "Africa/Harare": {
              long: ["中部非洲时间", "中部非洲时间"]
            },
            "Africa/Nairobi": {
              long: ["东部非洲时间", "东部非洲时间"]
            },
            "Africa/Djibouti": {
              long: ["东部非洲时间", "东部非洲时间"]
            },
            "Africa/Asmera": {
              long: ["东部非洲时间", "东部非洲时间"]
            },
            "Africa/Addis_Ababa": {
              long: ["东部非洲时间", "东部非洲时间"]
            },
            "Indian/Comoro": {
              long: ["东部非洲时间", "东部非洲时间"]
            },
            "Indian/Antananarivo": {
              long: ["东部非洲时间", "东部非洲时间"]
            },
            "Africa/Mogadishu": {
              long: ["东部非洲时间", "东部非洲时间"]
            },
            "Africa/Dar_es_Salaam": {
              long: ["东部非洲时间", "东部非洲时间"]
            },
            "Africa/Kampala": {
              long: ["东部非洲时间", "东部非洲时间"]
            },
            "Indian/Mayotte": {
              long: ["东部非洲时间", "东部非洲时间"]
            },
            "Africa/Johannesburg": {
              long: ["南非标准时间", "南非标准时间"]
            },
            "Africa/Maseru": {
              long: ["南非标准时间", "南非标准时间"]
            },
            "Africa/Mbabane": {
              long: ["南非标准时间", "南非标准时间"]
            },
            "Africa/Lagos": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Africa/Luanda": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Africa/Porto-Novo": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Africa/Kinshasa": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Africa/Bangui": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Africa/Brazzaville": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Africa/Douala": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Africa/Libreville": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Africa/Malabo": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Africa/Niamey": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Africa/Ndjamena": {
              long: ["西部非洲标准时间", "西部非洲夏令时间"]
            },
            "Asia/Aqtobe": {
              long: ["哈萨克斯坦西部时间", "哈萨克斯坦西部时间"]
            },
            "America/Juneau": {
              long: ["阿拉斯加标准时间", "阿拉斯加夏令时间"]
            },
            "Asia/Almaty": {
              long: ["哈萨克斯坦东部时间", "哈萨克斯坦东部时间"]
            },
            "America/Manaus": {
              long: ["亚马逊标准时间", "亚马逊夏令时间"]
            },
            "America/Chicago": {
              long: ["北美中部标准时间", "北美中部夏令时间"]
            },
            "America/Belize": {
              long: ["北美中部标准时间", "北美中部夏令时间"]
            },
            "America/Winnipeg": {
              long: ["北美中部标准时间", "北美中部夏令时间"]
            },
            "America/Costa_Rica": {
              long: ["北美中部标准时间", "北美中部夏令时间"]
            },
            "America/Guatemala": {
              long: ["北美中部标准时间", "北美中部夏令时间"]
            },
            "America/Tegucigalpa": {
              long: ["北美中部标准时间", "北美中部夏令时间"]
            },
            "America/Mexico_City": {
              long: ["北美中部标准时间", "北美中部夏令时间"]
            },
            "America/El_Salvador": {
              long: ["北美中部标准时间", "北美中部夏令时间"]
            },
            "America/New_York": {
              long: ["北美东部标准时间", "北美东部夏令时间"]
            },
            "America/Nassau": {
              long: ["北美东部标准时间", "北美东部夏令时间"]
            },
            "America/Toronto": {
              long: ["北美东部标准时间", "北美东部夏令时间"]
            },
            "America/Port-au-Prince": {
              long: ["北美东部标准时间", "北美东部夏令时间"]
            },
            "America/Jamaica": {
              long: ["北美东部标准时间", "北美东部夏令时间"]
            },
            "America/Cayman": {
              long: ["北美东部标准时间", "北美东部夏令时间"]
            },
            "America/Panama": {
              long: ["北美东部标准时间", "北美东部夏令时间"]
            },
            "America/Denver": {
              long: ["北美山区标准时间", "北美山区夏令时间"]
            },
            "America/Edmonton": {
              long: ["北美山区标准时间", "北美山区夏令时间"]
            },
            "America/Los_Angeles": {
              long: ["北美太平洋标准时间", "北美太平洋夏令时间"]
            },
            "America/Vancouver": {
              long: ["北美太平洋标准时间", "北美太平洋夏令时间"]
            },
            "America/Tijuana": {
              long: ["北美太平洋标准时间", "北美太平洋夏令时间"]
            },
            "Asia/Anadyr": {
              long: ["阿纳德尔标准时间", "阿纳德尔夏令时间"]
            },
            "Pacific/Apia": {
              long: ["阿皮亚标准时间", "阿皮亚夏令时间"]
            },
            "Asia/Riyadh": {
              long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
            },
            "Asia/Bahrain": {
              long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
            },
            "Asia/Baghdad": {
              long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
            },
            "Asia/Kuwait": {
              long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
            },
            "Asia/Qatar": {
              long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
            },
            "Asia/Aden": {
              long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
            },
            "America/Buenos_Aires": {
              long: ["阿根廷标准时间", "阿根廷夏令时间"]
            },
            "America/Argentina/San_Luis": {
              long: ["阿根廷西部标准时间", "阿根廷西部夏令时间"]
            },
            "Asia/Ashgabat": {
              long: ["土库曼斯坦标准时间", "土库曼斯坦夏令时间"]
            },
            "America/Halifax": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Antigua": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Anguilla": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Aruba": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Barbados": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "Atlantic/Bermuda": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Kralendijk": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Curacao": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Dominica": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Grenada": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Thule": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Guadeloupe": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/St_Kitts": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/St_Lucia": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Marigot": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Martinique": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Montserrat": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Puerto_Rico": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Lower_Princes": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Port_of_Spain": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/St_Vincent": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/Tortola": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "America/St_Thomas": {
              long: ["大西洋标准时间", "大西洋夏令时间"]
            },
            "Australia/Adelaide": {
              long: ["澳大利亚中部标准时间", "澳大利亚中部夏令时间"]
            },
            "Australia/Eucla": {
              long: ["澳大利亚中西部标准时间", "澳大利亚中西部夏令时间"]
            },
            "Australia/Sydney": {
              long: ["澳大利亚东部标准时间", "澳大利亚东部夏令时间"]
            },
            "Australia/Perth": {
              long: ["澳大利亚西部标准时间", "澳大利亚西部夏令时间"]
            },
            "Atlantic/Azores": {
              long: ["亚速尔群岛标准时间", "亚速尔群岛夏令时间"]
            },
            "Asia/Thimphu": {
              long: ["不丹时间", "不丹时间"]
            },
            "America/La_Paz": {
              long: ["玻利维亚标准时间", "玻利维亚标准时间"]
            },
            "Asia/Kuching": {
              long: ["马来西亚时间", "马来西亚时间"]
            },
            "America/Sao_Paulo": {
              long: ["巴西利亚标准时间", "巴西利亚夏令时间"]
            },
            "Europe/London": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Asia/Brunei": {
              long: ["文莱达鲁萨兰时间", "文莱达鲁萨兰时间"]
            },
            "Atlantic/Cape_Verde": {
              long: ["佛得角标准时间", "佛得角夏令时间"]
            },
            "Antarctica/Casey": {
              long: ["凯西时间", "凯西时间"]
            },
            "Pacific/Saipan": {
              long: ["北马里亚纳群岛时间", "北马里亚纳群岛时间"]
            },
            "Pacific/Guam": {
              long: ["关岛时间", "关岛时间"]
            },
            "Pacific/Chatham": {
              long: ["查塔姆标准时间", "查塔姆夏令时间"]
            },
            "America/Santiago": {
              long: ["智利标准时间", "智利夏令时间"]
            },
            "Asia/Shanghai": {
              long: ["中国标准时间", "中国夏令时间"]
            },
            "Indian/Christmas": {
              long: ["圣诞岛时间", "圣诞岛时间"]
            },
            "Indian/Cocos": {
              long: ["科科斯群岛时间", "科科斯群岛时间"]
            },
            "America/Bogota": {
              long: ["哥伦比亚标准时间", "哥伦比亚夏令时间"]
            },
            "Pacific/Rarotonga": {
              long: ["库克群岛标准时间", "库克群岛仲夏时间"]
            },
            "America/Havana": {
              long: ["古巴标准时间", "古巴夏令时间"]
            },
            "Antarctica/Davis": {
              long: ["戴维斯时间", "戴维斯时间"]
            },
            "Antarctica/DumontDUrville": {
              long: ["迪蒙·迪维尔时间", "迪蒙·迪维尔时间"]
            },
            "Asia/Dushanbe": {
              long: ["塔吉克斯坦时间", "塔吉克斯坦时间"]
            },
            "America/Paramaribo": {
              long: ["苏里南时间", "苏里南时间"]
            },
            "Asia/Dili": {
              long: ["东帝汶时间", "东帝汶时间"]
            },
            "Pacific/Easter": {
              long: ["复活节岛标准时间", "复活节岛夏令时间"]
            },
            "America/Guayaquil": {
              long: ["厄瓜多尔标准时间", "厄瓜多尔标准时间"]
            },
            "Europe/Paris": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Andorra": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Tirane": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Vienna": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Sarajevo": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Brussels": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Zurich": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Prague": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Berlin": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Copenhagen": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Madrid": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Gibraltar": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Zagreb": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Budapest": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Rome": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Vaduz": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Luxembourg": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Monaco": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Podgorica": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Skopje": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Malta": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Amsterdam": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Oslo": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Warsaw": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Belgrade": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Stockholm": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Ljubljana": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Arctic/Longyearbyen": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Bratislava": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/San_Marino": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Africa/Tunis": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Vatican": {
              long: ["中欧标准时间", "中欧夏令时间"]
            },
            "Europe/Bucharest": {
              long: ["东欧标准时间", "东欧夏令时间"]
            },
            "Europe/Mariehamn": {
              long: ["东欧标准时间", "东欧夏令时间"]
            },
            "Europe/Sofia": {
              long: ["东欧标准时间", "东欧夏令时间"]
            },
            "Asia/Nicosia": {
              long: ["东欧标准时间", "东欧夏令时间"]
            },
            "Africa/Cairo": {
              long: ["东欧标准时间", "东欧夏令时间"]
            },
            "Europe/Helsinki": {
              long: ["东欧标准时间", "东欧夏令时间"]
            },
            "Europe/Athens": {
              long: ["东欧标准时间", "东欧夏令时间"]
            },
            "Asia/Beirut": {
              long: ["东欧标准时间", "东欧夏令时间"]
            },
            "Europe/Minsk": {
              long: ["欧洲极东时间", "欧洲极东时间"]
            },
            "Europe/Kaliningrad": {
              long: ["欧洲极东时间", "欧洲极东时间"]
            },
            "Atlantic/Canary": {
              long: ["西欧标准时间", "西欧夏令时间"]
            },
            "Atlantic/Faeroe": {
              long: ["西欧标准时间", "西欧夏令时间"]
            },
            "Atlantic/Stanley": {
              long: ["福克兰群岛标准时间", "福克兰群岛夏令时间"]
            },
            "Pacific/Fiji": {
              long: ["斐济标准时间", "斐济夏令时间"]
            },
            "America/Cayenne": {
              long: ["法属圭亚那标准时间", "法属圭亚那标准时间"]
            },
            "Indian/Kerguelen": {
              long: ["法属南方和南极领地时间", "法属南方和南极领地时间"]
            },
            "Asia/Bishkek": {
              long: ["吉尔吉斯斯坦时间", "吉尔吉斯斯坦时间"]
            },
            "Pacific/Galapagos": {
              long: ["科隆群岛时间", "科隆群岛时间"]
            },
            "Pacific/Gambier": {
              long: ["甘比尔时间", "甘比尔时间"]
            },
            "Pacific/Tarawa": {
              long: ["吉尔伯特群岛时间", "吉尔伯特群岛时间"]
            },
            "Atlantic/Reykjavik": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Africa/Ouagadougou": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Africa/Abidjan": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Africa/Accra": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Africa/Banjul": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Africa/Conakry": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Africa/Bamako": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Africa/Nouakchott": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Atlantic/St_Helena": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Africa/Freetown": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Africa/Dakar": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "Africa/Lome": {
              long: ["格林尼治标准时间", "格林尼治标准时间"]
            },
            "America/Godthab": {
              long: ["格陵兰岛西部标准时间", "格陵兰岛西部夏令时间"]
            },
            "America/Scoresbysund": {
              long: ["格陵兰岛东部标准时间", "格陵兰岛东部夏令时间"]
            },
            "Asia/Dubai": {
              long: ["海湾标准时间", "海湾标准时间"]
            },
            "Asia/Muscat": {
              long: ["海湾标准时间", "海湾标准时间"]
            },
            "America/Guyana": {
              long: ["圭亚那时间", "圭亚那时间"]
            },
            "Pacific/Honolulu": {
              long: ["夏威夷-阿留申标准时间", "夏威夷-阿留申夏令时间"]
            },
            "Asia/Hong_Kong": {
              long: ["香港标准时间", "香港夏令时间"]
            },
            "Asia/Hovd": {
              long: ["科布多标准时间", "科布多夏令时间"]
            },
            "Asia/Calcutta": {
              long: ["印度时间", "印度时间"]
            },
            "Asia/Colombo": {
              long: ["兰卡时间", "兰卡时间"]
            },
            "Indian/Chagos": {
              long: ["印度洋时间", "印度洋时间"]
            },
            "Asia/Bangkok": {
              long: ["中南半岛时间", "中南半岛时间"]
            },
            "Asia/Phnom_Penh": {
              long: ["中南半岛时间", "中南半岛时间"]
            },
            "Asia/Vientiane": {
              long: ["中南半岛时间", "中南半岛时间"]
            },
            "Asia/Makassar": {
              long: ["印度尼西亚中部时间", "印度尼西亚中部时间"]
            },
            "Asia/Jayapura": {
              long: ["印度尼西亚东部时间", "印度尼西亚东部时间"]
            },
            "Asia/Jakarta": {
              long: ["印度尼西亚西部时间", "印度尼西亚西部时间"]
            },
            "Asia/Tehran": {
              long: ["伊朗标准时间", "伊朗夏令时间"]
            },
            "Asia/Irkutsk": {
              long: ["伊尔库茨克标准时间", "伊尔库茨克夏令时间"]
            },
            "Asia/Jerusalem": {
              long: ["以色列标准时间", "以色列夏令时间"]
            },
            "Asia/Tokyo": {
              long: ["日本标准时间", "日本夏令时间"]
            },
            "Asia/Kamchatka": {
              long: ["彼得罗巴甫洛夫斯克-堪察加标准时间", "彼得罗巴甫洛夫斯克-堪察加夏令时间"]
            },
            "Asia/Karachi": {
              long: ["巴基斯坦标准时间", "巴基斯坦夏令时间"]
            },
            "Asia/Qyzylorda": {
              long: ["克孜洛尔达标准时间", "克孜洛尔达夏令时间"]
            },
            "Asia/Seoul": {
              long: ["韩国标准时间", "韩国夏令时间"]
            },
            "Pacific/Kosrae": {
              long: ["科斯雷时间", "科斯雷时间"]
            },
            "Asia/Krasnoyarsk": {
              long: ["克拉斯诺亚尔斯克标准时间", "克拉斯诺亚尔斯克夏令时间"]
            },
            "Europe/Samara": {
              long: ["萨马拉标准时间", "萨马拉夏令时间"]
            },
            "Pacific/Kiritimati": {
              long: ["莱恩群岛时间", "莱恩群岛时间"]
            },
            "Australia/Lord_Howe": {
              long: ["豪勋爵岛标准时间", "豪勋爵岛夏令时间"]
            },
            "Asia/Macau": {
              long: ["澳门标准时间", "澳门夏令时间"]
            },
            "Asia/Magadan": {
              long: ["马加丹标准时间", "马加丹夏令时间"]
            },
            "Indian/Maldives": {
              long: ["马尔代夫时间", "马尔代夫时间"]
            },
            "Pacific/Marquesas": {
              long: ["马克萨斯群岛时间", "马克萨斯群岛时间"]
            },
            "Pacific/Majuro": {
              long: ["马绍尔群岛时间", "马绍尔群岛时间"]
            },
            "Indian/Mauritius": {
              long: ["毛里求斯标准时间", "毛里求斯夏令时间"]
            },
            "Antarctica/Mawson": {
              long: ["莫森时间", "莫森时间"]
            },
            "America/Mazatlan": {
              long: ["墨西哥太平洋标准时间", "墨西哥太平洋夏令时间"]
            },
            "Asia/Ulaanbaatar": {
              long: ["乌兰巴托标准时间", "乌兰巴托夏令时间"]
            },
            "Europe/Moscow": {
              long: ["莫斯科标准时间", "莫斯科夏令时间"]
            },
            "Asia/Rangoon": {
              long: ["缅甸时间", "缅甸时间"]
            },
            "Pacific/Nauru": {
              long: ["瑙鲁时间", "瑙鲁时间"]
            },
            "Asia/Katmandu": {
              long: ["尼泊尔时间", "尼泊尔时间"]
            },
            "Pacific/Noumea": {
              long: ["新喀里多尼亚标准时间", "新喀里多尼亚夏令时间"]
            },
            "Pacific/Auckland": {
              long: ["新西兰标准时间", "新西兰夏令时间"]
            },
            "Antarctica/McMurdo": {
              long: ["新西兰标准时间", "新西兰夏令时间"]
            },
            "America/St_Johns": {
              long: ["纽芬兰标准时间", "纽芬兰夏令时间"]
            },
            "Pacific/Niue": {
              long: ["纽埃时间", "纽埃时间"]
            },
            "Pacific/Norfolk": {
              long: ["诺福克岛标准时间", "诺福克岛夏令时间"]
            },
            "America/Noronha": {
              long: ["费尔南多-迪诺罗尼亚岛标准时间", "费尔南多-迪诺罗尼亚岛夏令时间"]
            },
            "Asia/Novosibirsk": {
              long: ["新西伯利亚标准时间", "新西伯利亚夏令时间"]
            },
            "Asia/Omsk": {
              long: ["鄂木斯克标准时间", "鄂木斯克夏令时间"]
            },
            "Pacific/Palau": {
              long: ["帕劳时间", "帕劳时间"]
            },
            "Pacific/Port_Moresby": {
              long: ["巴布亚新几内亚时间", "巴布亚新几内亚时间"]
            },
            "America/Asuncion": {
              long: ["巴拉圭标准时间", "巴拉圭夏令时间"]
            },
            "America/Lima": {
              long: ["秘鲁标准时间", "秘鲁夏令时间"]
            },
            "Asia/Manila": {
              long: ["菲律宾标准时间", "菲律宾夏令时间"]
            },
            "Pacific/Enderbury": {
              long: ["菲尼克斯群岛时间", "菲尼克斯群岛时间"]
            },
            "America/Miquelon": {
              long: ["圣皮埃尔和密克隆群岛标准时间", "圣皮埃尔和密克隆群岛夏令时间"]
            },
            "Pacific/Pitcairn": {
              long: ["皮特凯恩时间", "皮特凯恩时间"]
            },
            "Pacific/Ponape": {
              long: ["波纳佩时间", "波纳佩时间"]
            },
            "Asia/Pyongyang": {
              long: ["平壤时间", "平壤时间"]
            },
            "Indian/Reunion": {
              long: ["留尼汪时间", "留尼汪时间"]
            },
            "Antarctica/Rothera": {
              long: ["罗瑟拉时间", "罗瑟拉时间"]
            },
            "Asia/Sakhalin": {
              long: ["库页岛标准时间", "库页岛夏令时间"]
            },
            "Pacific/Pago_Pago": {
              long: ["萨摩亚标准时间", "萨摩亚夏令时间"]
            },
            "Indian/Mahe": {
              long: ["塞舌尔时间", "塞舌尔时间"]
            },
            "Asia/Singapore": {
              long: ["新加坡标准时间", "新加坡标准时间"]
            },
            "Pacific/Guadalcanal": {
              long: ["所罗门群岛时间", "所罗门群岛时间"]
            },
            "Atlantic/South_Georgia": {
              long: ["南乔治亚岛时间", "南乔治亚岛时间"]
            },
            "Asia/Yekaterinburg": {
              long: ["叶卡捷琳堡标准时间", "叶卡捷琳堡夏令时间"]
            },
            "Antarctica/Syowa": {
              long: ["昭和时间", "昭和时间"]
            },
            "Pacific/Tahiti": {
              long: ["塔希提岛时间", "塔希提岛时间"]
            },
            "Asia/Taipei": {
              long: ["台北标准时间", "台北夏令时间"]
            },
            "Asia/Tashkent": {
              long: ["乌兹别克斯坦标准时间", "乌兹别克斯坦夏令时间"]
            },
            "Pacific/Fakaofo": {
              long: ["托克劳时间", "托克劳时间"]
            },
            "Pacific/Tongatapu": {
              long: ["汤加标准时间", "汤加夏令时间"]
            },
            "Pacific/Truk": {
              long: ["楚克时间", "楚克时间"]
            },
            "Pacific/Funafuti": {
              long: ["图瓦卢时间", "图瓦卢时间"]
            },
            "America/Montevideo": {
              long: ["乌拉圭标准时间", "乌拉圭夏令时间"]
            },
            "Pacific/Efate": {
              long: ["瓦努阿图标准时间", "瓦努阿图夏令时间"]
            },
            "America/Caracas": {
              long: ["委内瑞拉时间", "委内瑞拉时间"]
            },
            "Asia/Vladivostok": {
              long: ["海参崴标准时间", "海参崴夏令时间"]
            },
            "Europe/Volgograd": {
              long: ["伏尔加格勒标准时间", "伏尔加格勒夏令时间"]
            },
            "Antarctica/Vostok": {
              long: ["沃斯托克时间", "沃斯托克时间"]
            },
            "Pacific/Wake": {
              long: ["威克岛时间", "威克岛时间"]
            },
            "Pacific/Wallis": {
              long: ["瓦利斯和富图纳时间", "瓦利斯和富图纳时间"]
            },
            "Asia/Yakutsk": {
              long: ["雅库茨克标准时间", "雅库茨克夏令时间"]
            },
            "America/Whitehorse": {
              long: ["育空时间", "育空时间"]
            },
            UTC: {
              long: ["协调世界时", "协调世界时"],
              short: ["UTC", "UTC"]
            }
          },
          gmtFormat: "GMT{0}",
          hourFormat: "+HH:mm;-HH:mm",
          dateFormat: {
            full: "y年M月d日EEEE",
            long: "y年M月d日",
            medium: "y年M月d日",
            short: "y/M/d"
          },
          timeFormat: {
            full: "zzzz HH:mm:ss",
            long: "z HH:mm:ss",
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
              Bh: "Bh时",
              Bhm: "Bh:mm",
              Bhms: "Bh:mm:ss",
              d: "d日",
              E: "ccc",
              EBhm: "EBh:mm",
              EBhms: "EBh:mm:ss",
              Ed: "d日E",
              Ehm: "Eah:mm",
              EHm: "EHH:mm",
              Ehms: "Eah:mm:ss",
              EHms: "EHH:mm:ss",
              Gy: "Gy年",
              GyMd: "GGGGG y-MM-dd",
              GyMMM: "Gy年M月",
              GyMMMd: "Gy年M月d日",
              GyMMMEd: "Gy年M月d日E",
              h: "ah时",
              H: "H时",
              hm: "ah:mm",
              Hm: "HH:mm",
              hms: "ah:mm:ss",
              Hms: "HH:mm:ss",
              hmsv: "v ah:mm:ss",
              Hmsv: "v HH:mm:ss",
              hmv: "v ah:mm",
              Hmv: "v HH:mm",
              M: "M月",
              Md: "M/d",
              MEd: "M/dE",
              MMdd: "MM/dd",
              MMM: "LLL",
              MMMd: "M月d日",
              MMMEd: "M月d日E",
              MMMMd: "M月d日",
              ms: "mm:ss",
              y: "y年",
              yM: "y/M",
              yMd: "y/M/d",
              yMEd: "y/M/dE",
              yMEEEEd: "y年M月d日EEEE",
              yMM: "y年M月",
              yMMM: "y年M月",
              yMMMd: "y年M月d日",
              yMMMEd: "y年M月d日E",
              yMMMM: "y年M月",
              y年M月d日EEEE: "y年M月d日EEEE",
              y年M月d日: "y年M月d日",
              "y/M/d": "y/M/d",
              "zzzz HH:mm:ss": "zzzz HH:mm:ss",
              "z HH:mm:ss": "z HH:mm:ss",
              "HH:mm:ss": "HH:mm:ss",
              "HH:mm": "HH:mm",
              "y年M月d日EEEE zzzz HH:mm:ss": "y年M月d日EEEE zzzz HH:mm:ss",
              "y年M月d日 zzzz HH:mm:ss": "y年M月d日 zzzz HH:mm:ss",
              "y/M/d zzzz HH:mm:ss": "y/M/d zzzz HH:mm:ss",
              "d zzzz HH:mm:ss": "d日 zzzz HH:mm:ss",
              "E zzzz HH:mm:ss": "ccc zzzz HH:mm:ss",
              "Ed zzzz HH:mm:ss": "d日E zzzz HH:mm:ss",
              "Gy zzzz HH:mm:ss": "Gy年 zzzz HH:mm:ss",
              "GyMd zzzz HH:mm:ss": "GGGGG y-MM-dd zzzz HH:mm:ss",
              "GyMMM zzzz HH:mm:ss": "Gy年M月 zzzz HH:mm:ss",
              "GyMMMd zzzz HH:mm:ss": "Gy年M月d日 zzzz HH:mm:ss",
              "GyMMMEd zzzz HH:mm:ss": "Gy年M月d日E zzzz HH:mm:ss",
              "M zzzz HH:mm:ss": "M月 zzzz HH:mm:ss",
              "Md zzzz HH:mm:ss": "M/d zzzz HH:mm:ss",
              "MEd zzzz HH:mm:ss": "M/dE zzzz HH:mm:ss",
              "MMdd zzzz HH:mm:ss": "MM/dd zzzz HH:mm:ss",
              "MMM zzzz HH:mm:ss": "LLL zzzz HH:mm:ss",
              "MMMd zzzz HH:mm:ss": "M月d日 zzzz HH:mm:ss",
              "MMMEd zzzz HH:mm:ss": "M月d日E zzzz HH:mm:ss",
              "MMMMd zzzz HH:mm:ss": "M月d日 zzzz HH:mm:ss",
              "y zzzz HH:mm:ss": "y年 zzzz HH:mm:ss",
              "yM zzzz HH:mm:ss": "y/M zzzz HH:mm:ss",
              "yMd zzzz HH:mm:ss": "y/M/d zzzz HH:mm:ss",
              "yMEd zzzz HH:mm:ss": "y/M/dE zzzz HH:mm:ss",
              "yMEEEEd zzzz HH:mm:ss": "y年M月d日EEEE zzzz HH:mm:ss",
              "yMM zzzz HH:mm:ss": "y年M月 zzzz HH:mm:ss",
              "yMMM zzzz HH:mm:ss": "y年M月 zzzz HH:mm:ss",
              "yMMMd zzzz HH:mm:ss": "y年M月d日 zzzz HH:mm:ss",
              "yMMMEd zzzz HH:mm:ss": "y年M月d日E zzzz HH:mm:ss",
              "yMMMM zzzz HH:mm:ss": "y年M月 zzzz HH:mm:ss",
              "y年M月d日EEEE z HH:mm:ss": "y年M月d日EEEE z HH:mm:ss",
              "y年M月d日 z HH:mm:ss": "y年M月d日 z HH:mm:ss",
              "y/M/d z HH:mm:ss": "y/M/d z HH:mm:ss",
              "d z HH:mm:ss": "d日 z HH:mm:ss",
              "E z HH:mm:ss": "ccc z HH:mm:ss",
              "Ed z HH:mm:ss": "d日E z HH:mm:ss",
              "Gy z HH:mm:ss": "Gy年 z HH:mm:ss",
              "GyMd z HH:mm:ss": "GGGGG y-MM-dd z HH:mm:ss",
              "GyMMM z HH:mm:ss": "Gy年M月 z HH:mm:ss",
              "GyMMMd z HH:mm:ss": "Gy年M月d日 z HH:mm:ss",
              "GyMMMEd z HH:mm:ss": "Gy年M月d日E z HH:mm:ss",
              "M z HH:mm:ss": "M月 z HH:mm:ss",
              "Md z HH:mm:ss": "M/d z HH:mm:ss",
              "MEd z HH:mm:ss": "M/dE z HH:mm:ss",
              "MMdd z HH:mm:ss": "MM/dd z HH:mm:ss",
              "MMM z HH:mm:ss": "LLL z HH:mm:ss",
              "MMMd z HH:mm:ss": "M月d日 z HH:mm:ss",
              "MMMEd z HH:mm:ss": "M月d日E z HH:mm:ss",
              "MMMMd z HH:mm:ss": "M月d日 z HH:mm:ss",
              "y z HH:mm:ss": "y年 z HH:mm:ss",
              "yM z HH:mm:ss": "y/M z HH:mm:ss",
              "yMd z HH:mm:ss": "y/M/d z HH:mm:ss",
              "yMEd z HH:mm:ss": "y/M/dE z HH:mm:ss",
              "yMEEEEd z HH:mm:ss": "y年M月d日EEEE z HH:mm:ss",
              "yMM z HH:mm:ss": "y年M月 z HH:mm:ss",
              "yMMM z HH:mm:ss": "y年M月 z HH:mm:ss",
              "yMMMd z HH:mm:ss": "y年M月d日 z HH:mm:ss",
              "yMMMEd z HH:mm:ss": "y年M月d日E z HH:mm:ss",
              "yMMMM z HH:mm:ss": "y年M月 z HH:mm:ss",
              "y年M月d日EEEE HH:mm:ss": "y年M月d日EEEE HH:mm:ss",
              "y年M月d日 HH:mm:ss": "y年M月d日 HH:mm:ss",
              "y/M/d HH:mm:ss": "y/M/d HH:mm:ss",
              "d HH:mm:ss": "d日 HH:mm:ss",
              "E HH:mm:ss": "ccc HH:mm:ss",
              "Ed HH:mm:ss": "d日E HH:mm:ss",
              "Gy HH:mm:ss": "Gy年 HH:mm:ss",
              "GyMd HH:mm:ss": "GGGGG y-MM-dd HH:mm:ss",
              "GyMMM HH:mm:ss": "Gy年M月 HH:mm:ss",
              "GyMMMd HH:mm:ss": "Gy年M月d日 HH:mm:ss",
              "GyMMMEd HH:mm:ss": "Gy年M月d日E HH:mm:ss",
              "M HH:mm:ss": "M月 HH:mm:ss",
              "Md HH:mm:ss": "M/d HH:mm:ss",
              "MEd HH:mm:ss": "M/dE HH:mm:ss",
              "MMdd HH:mm:ss": "MM/dd HH:mm:ss",
              "MMM HH:mm:ss": "LLL HH:mm:ss",
              "MMMd HH:mm:ss": "M月d日 HH:mm:ss",
              "MMMEd HH:mm:ss": "M月d日E HH:mm:ss",
              "MMMMd HH:mm:ss": "M月d日 HH:mm:ss",
              "y HH:mm:ss": "y年 HH:mm:ss",
              "yM HH:mm:ss": "y/M HH:mm:ss",
              "yMd HH:mm:ss": "y/M/d HH:mm:ss",
              "yMEd HH:mm:ss": "y/M/dE HH:mm:ss",
              "yMEEEEd HH:mm:ss": "y年M月d日EEEE HH:mm:ss",
              "yMM HH:mm:ss": "y年M月 HH:mm:ss",
              "yMMM HH:mm:ss": "y年M月 HH:mm:ss",
              "yMMMd HH:mm:ss": "y年M月d日 HH:mm:ss",
              "yMMMEd HH:mm:ss": "y年M月d日E HH:mm:ss",
              "yMMMM HH:mm:ss": "y年M月 HH:mm:ss",
              "y年M月d日EEEE HH:mm": "y年M月d日EEEE HH:mm",
              "y年M月d日 HH:mm": "y年M月d日 HH:mm",
              "y/M/d HH:mm": "y/M/d HH:mm",
              "d HH:mm": "d日 HH:mm",
              "E HH:mm": "ccc HH:mm",
              "Ed HH:mm": "d日E HH:mm",
              "Gy HH:mm": "Gy年 HH:mm",
              "GyMd HH:mm": "GGGGG y-MM-dd HH:mm",
              "GyMMM HH:mm": "Gy年M月 HH:mm",
              "GyMMMd HH:mm": "Gy年M月d日 HH:mm",
              "GyMMMEd HH:mm": "Gy年M月d日E HH:mm",
              "M HH:mm": "M月 HH:mm",
              "Md HH:mm": "M/d HH:mm",
              "MEd HH:mm": "M/dE HH:mm",
              "MMdd HH:mm": "MM/dd HH:mm",
              "MMM HH:mm": "LLL HH:mm",
              "MMMd HH:mm": "M月d日 HH:mm",
              "MMMEd HH:mm": "M月d日E HH:mm",
              "MMMMd HH:mm": "M月d日 HH:mm",
              "y HH:mm": "y年 HH:mm",
              "yM HH:mm": "y/M HH:mm",
              "yMd HH:mm": "y/M/d HH:mm",
              "yMEd HH:mm": "y/M/dE HH:mm",
              "yMEEEEd HH:mm": "y年M月d日EEEE HH:mm",
              "yMM HH:mm": "y年M月 HH:mm",
              "yMMM HH:mm": "y年M月 HH:mm",
              "yMMMd HH:mm": "y年M月d日 HH:mm",
              "yMMMEd HH:mm": "y年M月d日E HH:mm",
              "yMMMM HH:mm": "y年M月 HH:mm",
              "y年M月d日EEEE Bh": "y年M月d日EEEE Bh时",
              "y年M月d日 Bh": "y年M月d日 Bh时",
              "y/M/d Bh": "y/M/d Bh时",
              "d Bh": "d日 Bh时",
              "E Bh": "ccc Bh时",
              "Ed Bh": "d日E Bh时",
              "Gy Bh": "Gy年 Bh时",
              "GyMd Bh": "GGGGG y-MM-dd Bh时",
              "GyMMM Bh": "Gy年M月 Bh时",
              "GyMMMd Bh": "Gy年M月d日 Bh时",
              "GyMMMEd Bh": "Gy年M月d日E Bh时",
              "M Bh": "M月 Bh时",
              "Md Bh": "M/d Bh时",
              "MEd Bh": "M/dE Bh时",
              "MMdd Bh": "MM/dd Bh时",
              "MMM Bh": "LLL Bh时",
              "MMMd Bh": "M月d日 Bh时",
              "MMMEd Bh": "M月d日E Bh时",
              "MMMMd Bh": "M月d日 Bh时",
              "y Bh": "y年 Bh时",
              "yM Bh": "y/M Bh时",
              "yMd Bh": "y/M/d Bh时",
              "yMEd Bh": "y/M/dE Bh时",
              "yMEEEEd Bh": "y年M月d日EEEE Bh时",
              "yMM Bh": "y年M月 Bh时",
              "yMMM Bh": "y年M月 Bh时",
              "yMMMd Bh": "y年M月d日 Bh时",
              "yMMMEd Bh": "y年M月d日E Bh时",
              "yMMMM Bh": "y年M月 Bh时",
              "y年M月d日EEEE Bhm": "y年M月d日EEEE Bh:mm",
              "y年M月d日 Bhm": "y年M月d日 Bh:mm",
              "y/M/d Bhm": "y/M/d Bh:mm",
              "d Bhm": "d日 Bh:mm",
              "E Bhm": "ccc Bh:mm",
              "Ed Bhm": "d日E Bh:mm",
              "Gy Bhm": "Gy年 Bh:mm",
              "GyMd Bhm": "GGGGG y-MM-dd Bh:mm",
              "GyMMM Bhm": "Gy年M月 Bh:mm",
              "GyMMMd Bhm": "Gy年M月d日 Bh:mm",
              "GyMMMEd Bhm": "Gy年M月d日E Bh:mm",
              "M Bhm": "M月 Bh:mm",
              "Md Bhm": "M/d Bh:mm",
              "MEd Bhm": "M/dE Bh:mm",
              "MMdd Bhm": "MM/dd Bh:mm",
              "MMM Bhm": "LLL Bh:mm",
              "MMMd Bhm": "M月d日 Bh:mm",
              "MMMEd Bhm": "M月d日E Bh:mm",
              "MMMMd Bhm": "M月d日 Bh:mm",
              "y Bhm": "y年 Bh:mm",
              "yM Bhm": "y/M Bh:mm",
              "yMd Bhm": "y/M/d Bh:mm",
              "yMEd Bhm": "y/M/dE Bh:mm",
              "yMEEEEd Bhm": "y年M月d日EEEE Bh:mm",
              "yMM Bhm": "y年M月 Bh:mm",
              "yMMM Bhm": "y年M月 Bh:mm",
              "yMMMd Bhm": "y年M月d日 Bh:mm",
              "yMMMEd Bhm": "y年M月d日E Bh:mm",
              "yMMMM Bhm": "y年M月 Bh:mm",
              "y年M月d日EEEE Bhms": "y年M月d日EEEE Bh:mm:ss",
              "y年M月d日 Bhms": "y年M月d日 Bh:mm:ss",
              "y/M/d Bhms": "y/M/d Bh:mm:ss",
              "d Bhms": "d日 Bh:mm:ss",
              "E Bhms": "ccc Bh:mm:ss",
              "Ed Bhms": "d日E Bh:mm:ss",
              "Gy Bhms": "Gy年 Bh:mm:ss",
              "GyMd Bhms": "GGGGG y-MM-dd Bh:mm:ss",
              "GyMMM Bhms": "Gy年M月 Bh:mm:ss",
              "GyMMMd Bhms": "Gy年M月d日 Bh:mm:ss",
              "GyMMMEd Bhms": "Gy年M月d日E Bh:mm:ss",
              "M Bhms": "M月 Bh:mm:ss",
              "Md Bhms": "M/d Bh:mm:ss",
              "MEd Bhms": "M/dE Bh:mm:ss",
              "MMdd Bhms": "MM/dd Bh:mm:ss",
              "MMM Bhms": "LLL Bh:mm:ss",
              "MMMd Bhms": "M月d日 Bh:mm:ss",
              "MMMEd Bhms": "M月d日E Bh:mm:ss",
              "MMMMd Bhms": "M月d日 Bh:mm:ss",
              "y Bhms": "y年 Bh:mm:ss",
              "yM Bhms": "y/M Bh:mm:ss",
              "yMd Bhms": "y/M/d Bh:mm:ss",
              "yMEd Bhms": "y/M/dE Bh:mm:ss",
              "yMEEEEd Bhms": "y年M月d日EEEE Bh:mm:ss",
              "yMM Bhms": "y年M月 Bh:mm:ss",
              "yMMM Bhms": "y年M月 Bh:mm:ss",
              "yMMMd Bhms": "y年M月d日 Bh:mm:ss",
              "yMMMEd Bhms": "y年M月d日E Bh:mm:ss",
              "yMMMM Bhms": "y年M月 Bh:mm:ss",
              "y年M月d日EEEE h": "y年M月d日EEEE ah时",
              "y年M月d日 h": "y年M月d日 ah时",
              "y/M/d h": "y/M/d ah时",
              "d h": "d日 ah时",
              "E h": "ccc ah时",
              "Ed h": "d日E ah时",
              "Gy h": "Gy年 ah时",
              "GyMd h": "GGGGG y-MM-dd ah时",
              "GyMMM h": "Gy年M月 ah时",
              "GyMMMd h": "Gy年M月d日 ah时",
              "GyMMMEd h": "Gy年M月d日E ah时",
              "M h": "M月 ah时",
              "Md h": "M/d ah时",
              "MEd h": "M/dE ah时",
              "MMdd h": "MM/dd ah时",
              "MMM h": "LLL ah时",
              "MMMd h": "M月d日 ah时",
              "MMMEd h": "M月d日E ah时",
              "MMMMd h": "M月d日 ah时",
              "y h": "y年 ah时",
              "yM h": "y/M ah时",
              "yMd h": "y/M/d ah时",
              "yMEd h": "y/M/dE ah时",
              "yMEEEEd h": "y年M月d日EEEE ah时",
              "yMM h": "y年M月 ah时",
              "yMMM h": "y年M月 ah时",
              "yMMMd h": "y年M月d日 ah时",
              "yMMMEd h": "y年M月d日E ah时",
              "yMMMM h": "y年M月 ah时",
              "y年M月d日EEEE H": "y年M月d日EEEE H时",
              "y年M月d日 H": "y年M月d日 H时",
              "y/M/d H": "y/M/d H时",
              "d H": "d日 H时",
              "E H": "ccc H时",
              "Ed H": "d日E H时",
              "Gy H": "Gy年 H时",
              "GyMd H": "GGGGG y-MM-dd H时",
              "GyMMM H": "Gy年M月 H时",
              "GyMMMd H": "Gy年M月d日 H时",
              "GyMMMEd H": "Gy年M月d日E H时",
              "M H": "M月 H时",
              "Md H": "M/d H时",
              "MEd H": "M/dE H时",
              "MMdd H": "MM/dd H时",
              "MMM H": "LLL H时",
              "MMMd H": "M月d日 H时",
              "MMMEd H": "M月d日E H时",
              "MMMMd H": "M月d日 H时",
              "y H": "y年 H时",
              "yM H": "y/M H时",
              "yMd H": "y/M/d H时",
              "yMEd H": "y/M/dE H时",
              "yMEEEEd H": "y年M月d日EEEE H时",
              "yMM H": "y年M月 H时",
              "yMMM H": "y年M月 H时",
              "yMMMd H": "y年M月d日 H时",
              "yMMMEd H": "y年M月d日E H时",
              "yMMMM H": "y年M月 H时",
              "y年M月d日EEEE hm": "y年M月d日EEEE ah:mm",
              "y年M月d日 hm": "y年M月d日 ah:mm",
              "y/M/d hm": "y/M/d ah:mm",
              "d hm": "d日 ah:mm",
              "E hm": "ccc ah:mm",
              "Ed hm": "d日E ah:mm",
              "Gy hm": "Gy年 ah:mm",
              "GyMd hm": "GGGGG y-MM-dd ah:mm",
              "GyMMM hm": "Gy年M月 ah:mm",
              "GyMMMd hm": "Gy年M月d日 ah:mm",
              "GyMMMEd hm": "Gy年M月d日E ah:mm",
              "M hm": "M月 ah:mm",
              "Md hm": "M/d ah:mm",
              "MEd hm": "M/dE ah:mm",
              "MMdd hm": "MM/dd ah:mm",
              "MMM hm": "LLL ah:mm",
              "MMMd hm": "M月d日 ah:mm",
              "MMMEd hm": "M月d日E ah:mm",
              "MMMMd hm": "M月d日 ah:mm",
              "y hm": "y年 ah:mm",
              "yM hm": "y/M ah:mm",
              "yMd hm": "y/M/d ah:mm",
              "yMEd hm": "y/M/dE ah:mm",
              "yMEEEEd hm": "y年M月d日EEEE ah:mm",
              "yMM hm": "y年M月 ah:mm",
              "yMMM hm": "y年M月 ah:mm",
              "yMMMd hm": "y年M月d日 ah:mm",
              "yMMMEd hm": "y年M月d日E ah:mm",
              "yMMMM hm": "y年M月 ah:mm",
              "y年M月d日EEEE Hm": "y年M月d日EEEE HH:mm",
              "y年M月d日 Hm": "y年M月d日 HH:mm",
              "y/M/d Hm": "y/M/d HH:mm",
              "d Hm": "d日 HH:mm",
              "E Hm": "ccc HH:mm",
              "Ed Hm": "d日E HH:mm",
              "Gy Hm": "Gy年 HH:mm",
              "GyMd Hm": "GGGGG y-MM-dd HH:mm",
              "GyMMM Hm": "Gy年M月 HH:mm",
              "GyMMMd Hm": "Gy年M月d日 HH:mm",
              "GyMMMEd Hm": "Gy年M月d日E HH:mm",
              "M Hm": "M月 HH:mm",
              "Md Hm": "M/d HH:mm",
              "MEd Hm": "M/dE HH:mm",
              "MMdd Hm": "MM/dd HH:mm",
              "MMM Hm": "LLL HH:mm",
              "MMMd Hm": "M月d日 HH:mm",
              "MMMEd Hm": "M月d日E HH:mm",
              "MMMMd Hm": "M月d日 HH:mm",
              "y Hm": "y年 HH:mm",
              "yM Hm": "y/M HH:mm",
              "yMd Hm": "y/M/d HH:mm",
              "yMEd Hm": "y/M/dE HH:mm",
              "yMEEEEd Hm": "y年M月d日EEEE HH:mm",
              "yMM Hm": "y年M月 HH:mm",
              "yMMM Hm": "y年M月 HH:mm",
              "yMMMd Hm": "y年M月d日 HH:mm",
              "yMMMEd Hm": "y年M月d日E HH:mm",
              "yMMMM Hm": "y年M月 HH:mm",
              "y年M月d日EEEE hms": "y年M月d日EEEE ah:mm:ss",
              "y年M月d日 hms": "y年M月d日 ah:mm:ss",
              "y/M/d hms": "y/M/d ah:mm:ss",
              "d hms": "d日 ah:mm:ss",
              "E hms": "ccc ah:mm:ss",
              "Ed hms": "d日E ah:mm:ss",
              "Gy hms": "Gy年 ah:mm:ss",
              "GyMd hms": "GGGGG y-MM-dd ah:mm:ss",
              "GyMMM hms": "Gy年M月 ah:mm:ss",
              "GyMMMd hms": "Gy年M月d日 ah:mm:ss",
              "GyMMMEd hms": "Gy年M月d日E ah:mm:ss",
              "M hms": "M月 ah:mm:ss",
              "Md hms": "M/d ah:mm:ss",
              "MEd hms": "M/dE ah:mm:ss",
              "MMdd hms": "MM/dd ah:mm:ss",
              "MMM hms": "LLL ah:mm:ss",
              "MMMd hms": "M月d日 ah:mm:ss",
              "MMMEd hms": "M月d日E ah:mm:ss",
              "MMMMd hms": "M月d日 ah:mm:ss",
              "y hms": "y年 ah:mm:ss",
              "yM hms": "y/M ah:mm:ss",
              "yMd hms": "y/M/d ah:mm:ss",
              "yMEd hms": "y/M/dE ah:mm:ss",
              "yMEEEEd hms": "y年M月d日EEEE ah:mm:ss",
              "yMM hms": "y年M月 ah:mm:ss",
              "yMMM hms": "y年M月 ah:mm:ss",
              "yMMMd hms": "y年M月d日 ah:mm:ss",
              "yMMMEd hms": "y年M月d日E ah:mm:ss",
              "yMMMM hms": "y年M月 ah:mm:ss",
              "y年M月d日EEEE Hms": "y年M月d日EEEE HH:mm:ss",
              "y年M月d日 Hms": "y年M月d日 HH:mm:ss",
              "y/M/d Hms": "y/M/d HH:mm:ss",
              "d Hms": "d日 HH:mm:ss",
              "E Hms": "ccc HH:mm:ss",
              "Ed Hms": "d日E HH:mm:ss",
              "Gy Hms": "Gy年 HH:mm:ss",
              "GyMd Hms": "GGGGG y-MM-dd HH:mm:ss",
              "GyMMM Hms": "Gy年M月 HH:mm:ss",
              "GyMMMd Hms": "Gy年M月d日 HH:mm:ss",
              "GyMMMEd Hms": "Gy年M月d日E HH:mm:ss",
              "M Hms": "M月 HH:mm:ss",
              "Md Hms": "M/d HH:mm:ss",
              "MEd Hms": "M/dE HH:mm:ss",
              "MMdd Hms": "MM/dd HH:mm:ss",
              "MMM Hms": "LLL HH:mm:ss",
              "MMMd Hms": "M月d日 HH:mm:ss",
              "MMMEd Hms": "M月d日E HH:mm:ss",
              "MMMMd Hms": "M月d日 HH:mm:ss",
              "y Hms": "y年 HH:mm:ss",
              "yM Hms": "y/M HH:mm:ss",
              "yMd Hms": "y/M/d HH:mm:ss",
              "yMEd Hms": "y/M/dE HH:mm:ss",
              "yMEEEEd Hms": "y年M月d日EEEE HH:mm:ss",
              "yMM Hms": "y年M月 HH:mm:ss",
              "yMMM Hms": "y年M月 HH:mm:ss",
              "yMMMd Hms": "y年M月d日 HH:mm:ss",
              "yMMMEd Hms": "y年M月d日E HH:mm:ss",
              "yMMMM Hms": "y年M月 HH:mm:ss",
              "y年M月d日EEEE hmsv": "y年M月d日EEEE v ah:mm:ss",
              "y年M月d日 hmsv": "y年M月d日 v ah:mm:ss",
              "y/M/d hmsv": "y/M/d v ah:mm:ss",
              "d hmsv": "d日 v ah:mm:ss",
              "E hmsv": "ccc v ah:mm:ss",
              "Ed hmsv": "d日E v ah:mm:ss",
              "Gy hmsv": "Gy年 v ah:mm:ss",
              "GyMd hmsv": "GGGGG y-MM-dd v ah:mm:ss",
              "GyMMM hmsv": "Gy年M月 v ah:mm:ss",
              "GyMMMd hmsv": "Gy年M月d日 v ah:mm:ss",
              "GyMMMEd hmsv": "Gy年M月d日E v ah:mm:ss",
              "M hmsv": "M月 v ah:mm:ss",
              "Md hmsv": "M/d v ah:mm:ss",
              "MEd hmsv": "M/dE v ah:mm:ss",
              "MMdd hmsv": "MM/dd v ah:mm:ss",
              "MMM hmsv": "LLL v ah:mm:ss",
              "MMMd hmsv": "M月d日 v ah:mm:ss",
              "MMMEd hmsv": "M月d日E v ah:mm:ss",
              "MMMMd hmsv": "M月d日 v ah:mm:ss",
              "y hmsv": "y年 v ah:mm:ss",
              "yM hmsv": "y/M v ah:mm:ss",
              "yMd hmsv": "y/M/d v ah:mm:ss",
              "yMEd hmsv": "y/M/dE v ah:mm:ss",
              "yMEEEEd hmsv": "y年M月d日EEEE v ah:mm:ss",
              "yMM hmsv": "y年M月 v ah:mm:ss",
              "yMMM hmsv": "y年M月 v ah:mm:ss",
              "yMMMd hmsv": "y年M月d日 v ah:mm:ss",
              "yMMMEd hmsv": "y年M月d日E v ah:mm:ss",
              "yMMMM hmsv": "y年M月 v ah:mm:ss",
              "y年M月d日EEEE Hmsv": "y年M月d日EEEE v HH:mm:ss",
              "y年M月d日 Hmsv": "y年M月d日 v HH:mm:ss",
              "y/M/d Hmsv": "y/M/d v HH:mm:ss",
              "d Hmsv": "d日 v HH:mm:ss",
              "E Hmsv": "ccc v HH:mm:ss",
              "Ed Hmsv": "d日E v HH:mm:ss",
              "Gy Hmsv": "Gy年 v HH:mm:ss",
              "GyMd Hmsv": "GGGGG y-MM-dd v HH:mm:ss",
              "GyMMM Hmsv": "Gy年M月 v HH:mm:ss",
              "GyMMMd Hmsv": "Gy年M月d日 v HH:mm:ss",
              "GyMMMEd Hmsv": "Gy年M月d日E v HH:mm:ss",
              "M Hmsv": "M月 v HH:mm:ss",
              "Md Hmsv": "M/d v HH:mm:ss",
              "MEd Hmsv": "M/dE v HH:mm:ss",
              "MMdd Hmsv": "MM/dd v HH:mm:ss",
              "MMM Hmsv": "LLL v HH:mm:ss",
              "MMMd Hmsv": "M月d日 v HH:mm:ss",
              "MMMEd Hmsv": "M月d日E v HH:mm:ss",
              "MMMMd Hmsv": "M月d日 v HH:mm:ss",
              "y Hmsv": "y年 v HH:mm:ss",
              "yM Hmsv": "y/M v HH:mm:ss",
              "yMd Hmsv": "y/M/d v HH:mm:ss",
              "yMEd Hmsv": "y/M/dE v HH:mm:ss",
              "yMEEEEd Hmsv": "y年M月d日EEEE v HH:mm:ss",
              "yMM Hmsv": "y年M月 v HH:mm:ss",
              "yMMM Hmsv": "y年M月 v HH:mm:ss",
              "yMMMd Hmsv": "y年M月d日 v HH:mm:ss",
              "yMMMEd Hmsv": "y年M月d日E v HH:mm:ss",
              "yMMMM Hmsv": "y年M月 v HH:mm:ss",
              "y年M月d日EEEE hmv": "y年M月d日EEEE v ah:mm",
              "y年M月d日 hmv": "y年M月d日 v ah:mm",
              "y/M/d hmv": "y/M/d v ah:mm",
              "d hmv": "d日 v ah:mm",
              "E hmv": "ccc v ah:mm",
              "Ed hmv": "d日E v ah:mm",
              "Gy hmv": "Gy年 v ah:mm",
              "GyMd hmv": "GGGGG y-MM-dd v ah:mm",
              "GyMMM hmv": "Gy年M月 v ah:mm",
              "GyMMMd hmv": "Gy年M月d日 v ah:mm",
              "GyMMMEd hmv": "Gy年M月d日E v ah:mm",
              "M hmv": "M月 v ah:mm",
              "Md hmv": "M/d v ah:mm",
              "MEd hmv": "M/dE v ah:mm",
              "MMdd hmv": "MM/dd v ah:mm",
              "MMM hmv": "LLL v ah:mm",
              "MMMd hmv": "M月d日 v ah:mm",
              "MMMEd hmv": "M月d日E v ah:mm",
              "MMMMd hmv": "M月d日 v ah:mm",
              "y hmv": "y年 v ah:mm",
              "yM hmv": "y/M v ah:mm",
              "yMd hmv": "y/M/d v ah:mm",
              "yMEd hmv": "y/M/dE v ah:mm",
              "yMEEEEd hmv": "y年M月d日EEEE v ah:mm",
              "yMM hmv": "y年M月 v ah:mm",
              "yMMM hmv": "y年M月 v ah:mm",
              "yMMMd hmv": "y年M月d日 v ah:mm",
              "yMMMEd hmv": "y年M月d日E v ah:mm",
              "yMMMM hmv": "y年M月 v ah:mm",
              "y年M月d日EEEE Hmv": "y年M月d日EEEE v HH:mm",
              "y年M月d日 Hmv": "y年M月d日 v HH:mm",
              "y/M/d Hmv": "y/M/d v HH:mm",
              "d Hmv": "d日 v HH:mm",
              "E Hmv": "ccc v HH:mm",
              "Ed Hmv": "d日E v HH:mm",
              "Gy Hmv": "Gy年 v HH:mm",
              "GyMd Hmv": "GGGGG y-MM-dd v HH:mm",
              "GyMMM Hmv": "Gy年M月 v HH:mm",
              "GyMMMd Hmv": "Gy年M月d日 v HH:mm",
              "GyMMMEd Hmv": "Gy年M月d日E v HH:mm",
              "M Hmv": "M月 v HH:mm",
              "Md Hmv": "M/d v HH:mm",
              "MEd Hmv": "M/dE v HH:mm",
              "MMdd Hmv": "MM/dd v HH:mm",
              "MMM Hmv": "LLL v HH:mm",
              "MMMd Hmv": "M月d日 v HH:mm",
              "MMMEd Hmv": "M月d日E v HH:mm",
              "MMMMd Hmv": "M月d日 v HH:mm",
              "y Hmv": "y年 v HH:mm",
              "yM Hmv": "y/M v HH:mm",
              "yMd Hmv": "y/M/d v HH:mm",
              "yMEd Hmv": "y/M/dE v HH:mm",
              "yMEEEEd Hmv": "y年M月d日EEEE v HH:mm",
              "yMM Hmv": "y年M月 v HH:mm",
              "yMMM Hmv": "y年M月 v HH:mm",
              "yMMMd Hmv": "y年M月d日 v HH:mm",
              "yMMMEd Hmv": "y年M月d日E v HH:mm",
              "yMMMM Hmv": "y年M月 v HH:mm",
              "y年M月d日EEEE ms": "y年M月d日EEEE mm:ss",
              "y年M月d日 ms": "y年M月d日 mm:ss",
              "y/M/d ms": "y/M/d mm:ss",
              "d ms": "d日 mm:ss",
              "E ms": "ccc mm:ss",
              "Ed ms": "d日E mm:ss",
              "Gy ms": "Gy年 mm:ss",
              "GyMd ms": "GGGGG y-MM-dd mm:ss",
              "GyMMM ms": "Gy年M月 mm:ss",
              "GyMMMd ms": "Gy年M月d日 mm:ss",
              "GyMMMEd ms": "Gy年M月d日E mm:ss",
              "M ms": "M月 mm:ss",
              "Md ms": "M/d mm:ss",
              "MEd ms": "M/dE mm:ss",
              "MMdd ms": "MM/dd mm:ss",
              "MMM ms": "LLL mm:ss",
              "MMMd ms": "M月d日 mm:ss",
              "MMMEd ms": "M月d日E mm:ss",
              "MMMMd ms": "M月d日 mm:ss",
              "y ms": "y年 mm:ss",
              "yM ms": "y/M mm:ss",
              "yMd ms": "y/M/d mm:ss",
              "yMEd ms": "y/M/dE mm:ss",
              "yMEEEEd ms": "y年M月d日EEEE mm:ss",
              "yMM ms": "y年M月 mm:ss",
              "yMMM ms": "y年M月 mm:ss",
              "yMMMd ms": "y年M月d日 mm:ss",
              "yMMMEd ms": "y年M月d日E mm:ss",
              "yMMMM ms": "y年M月 mm:ss"
            }
          },
          intervalFormats: {
            intervalFormatFallback: "{0} – {1}",
            Bh: {
              B: "Bh时至Bh时",
              h: "Bh时至h时"
            },
            Bhm: {
              B: "Bh:mm至Bh:mm",
              h: "Bh:mm至h:mm",
              m: "Bh:mm至h:mm"
            },
            d: {
              d: "d–d日"
            },
            Gy: {
              G: "Gy年 – Gy年",
              y: "Gy年–y年"
            },
            GyM: {
              G: "GGGGGy-MM – GGGGGy-MM",
              M: "GGGGGy-MM – y-MM",
              y: "GGGGGy-MM – y-MM"
            },
            GyMd: {
              d: "GGGGGy-MM-dd – y-MM-dd",
              G: "GGGGGy-MM-dd – GGGGGy-MM-dd",
              M: "GGGGGy-MM-dd – y-MM-dd",
              y: "GGGGGy-MM-dd – y-MM-dd"
            },
            GyMEd: {
              d: "GGGGGy-MM-ddE – y-MM-ddE",
              G: "GGGGGy-MM-ddE – GGGGGy-MM-ddE",
              M: "GGGGGy-MM-ddE – y-MM-ddE",
              y: "GGGGGy-MM-ddE – y-MM-ddE"
            },
            GyMMM: {
              G: "Gy年MMM – Gy年MMM",
              M: "Gy年MMM–MMM",
              y: "Gy年MMM – y年MMM"
            },
            GyMMMd: {
              d: "Gy年MMMd–d日",
              G: "Gy年MMMd日 – Gy年MMMd日",
              M: "Gy年MMMd日 – MMMd日",
              y: "Gy年MMMd日 – y年MMMd日"
            },
            GyMMMEd: {
              d: "Gy年MMMd日E – MMMd日E",
              G: "Gy年MMMd日E – Gy年MMMd日E",
              M: "Gy年MMMd日E – MMMd日E",
              y: "Gy年MMMd日E – y年MMMd日E"
            },
            h: {
              a: "ah时至ah时",
              h: "ah时至h时"
            },
            H: {
              H: "HH–HH"
            },
            hm: {
              a: "ah:mm至ah:mm",
              h: "ah:mm至h:mm",
              m: "ah:mm至h:mm"
            },
            Hm: {
              H: "HH:mm–HH:mm",
              m: "HH:mm–HH:mm"
            },
            hmv: {
              a: "vah:mm至ah:mm",
              h: "vah:mm至h:mm",
              m: "vah:mm至h:mm"
            },
            Hmv: {
              H: "v HH:mm–HH:mm",
              m: "v HH:mm–HH:mm"
            },
            hv: {
              a: "vah时至ah时",
              h: "vah时至h时"
            },
            Hv: {
              H: "v HH–HH"
            },
            M: {
              M: "M–M月"
            },
            Md: {
              d: "M/d – M/d",
              M: "M/d – M/d"
            },
            MEd: {
              d: "M/dE至M/dE",
              M: "M/dE至M/dE"
            },
            MMM: {
              M: "MMM – MMM"
            },
            MMMd: {
              d: "M月d日至d日",
              M: "M月d日至M月d日"
            },
            MMMEd: {
              d: "M月d日E至d日E",
              M: "M月d日E至M月d日E"
            },
            y: {
              y: "y–y年"
            },
            yM: {
              M: "y年M月至M月",
              y: "y年M月至y年M月"
            },
            yMd: {
              d: "y/M/d – y/M/d",
              M: "y/M/d – y/M/d",
              y: "y/M/d – y/M/d"
            },
            yMEd: {
              d: "y/M/dE至y/M/dE",
              M: "y/M/dE至y/M/dE",
              y: "y/M/dE至y/M/dE"
            },
            yMMM: {
              M: "y年M月至M月",
              y: "y年M月至y年M月"
            },
            yMMMd: {
              d: "y年M月d日至d日",
              M: "y年M月d日至M月d日",
              y: "y年M月d日至y年M月d日"
            },
            yMMMEd: {
              d: "y年M月d日E至d日E",
              M: "y年M月d日E至M月d日E",
              y: "y年M月d日E至y年M月d日E"
            },
            yMMMM: {
              M: "y年M月至M月",
              y: "y年M月至y年M月"
            }
          },
          hourCycle: "h23",
          nu: ["latn"],
          ca: ["gregory", "chinese"],
          hc: ["h23", "", "", "h12"]
        },
        locale: "zh"
      })
    }
  }
]);