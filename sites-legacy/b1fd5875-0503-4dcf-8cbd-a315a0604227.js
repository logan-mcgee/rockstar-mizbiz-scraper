try {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new a.Error).stack;
  t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "b1fd5875-0503-4dcf-8cbd-a315a0604227", a._sentryDebugIdIdentifier = "sentry-dbid-b1fd5875-0503-4dcf-8cbd-a315a0604227")
} catch (a) {} {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[(new a.Error).stack] = Object.assign({}, a._sentryModuleMetadata[(new a.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [9615], {
    9339: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.shouldPolyfill = void 0, t.shouldPolyfill = function() {
        return !("supportedValuesOf" in Intl)
      }
    },
    9923: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.hourCycles = void 0, t.hourCycles = {
        "001": ["h23", "h12"],
        AC: ["h23", "h12"],
        AD: ["h23"],
        AE: ["h12", "h23"],
        AF: ["h23", "h12"],
        AG: ["h12", "h23"],
        AI: ["h23", "h12"],
        AL: ["h12", "h23"],
        AM: ["h23"],
        AO: ["h23"],
        AR: ["h23", "h12"],
        AS: ["h12", "h23"],
        AT: ["h23"],
        AU: ["h12", "h23"],
        AW: ["h23"],
        AX: ["h23"],
        AZ: ["h23", "h12"],
        BA: ["h23", "h12"],
        BB: ["h12", "h23"],
        BD: ["h12", "h23"],
        BE: ["h23"],
        BF: ["h23"],
        BG: ["h23", "h12"],
        BH: ["h12", "h23"],
        BI: ["h23", "h12"],
        BJ: ["h23"],
        BL: ["h23"],
        BM: ["h12", "h23"],
        BN: ["h12", "h23"],
        BO: ["h23", "h12"],
        BQ: ["h23"],
        BR: ["h23"],
        BS: ["h12", "h23"],
        BT: ["h12", "h23"],
        BW: ["h23", "h12"],
        BY: ["h23", "h12"],
        BZ: ["h23", "h12"],
        CA: ["h12", "h23"],
        CC: ["h23", "h12"],
        CD: ["h23"],
        CF: ["h23", "h12"],
        CG: ["h23"],
        CH: ["h23", "h12"],
        CI: ["h23"],
        CK: ["h23", "h12"],
        CL: ["h23", "h12"],
        CM: ["h23", "h12"],
        CN: ["h23", "h12"],
        CO: ["h12", "h23"],
        CP: ["h23"],
        CR: ["h23", "h12"],
        CU: ["h23", "h12"],
        CV: ["h23"],
        CW: ["h23"],
        CX: ["h23", "h12"],
        CY: ["h12", "h23"],
        CZ: ["h23"],
        DE: ["h23"],
        DG: ["h23", "h12"],
        DJ: ["h12", "h23"],
        DK: ["h23"],
        DM: ["h12", "h23"],
        DO: ["h12", "h23"],
        DZ: ["h12", "h23"],
        EA: ["h23", "h12"],
        EC: ["h23", "h12"],
        EE: ["h23"],
        EG: ["h12", "h23"],
        EH: ["h12", "h23"],
        ER: ["h12", "h23"],
        ES: ["h23", "h12"],
        ET: ["h12", "h23"],
        FI: ["h23"],
        FJ: ["h12", "h23"],
        FK: ["h23", "h12"],
        FM: ["h12", "h23"],
        FO: ["h23", "h12"],
        FR: ["h23"],
        GA: ["h23"],
        GB: ["h23", "h12"],
        GD: ["h12", "h23"],
        GE: ["h23", "h12"],
        GF: ["h23"],
        GG: ["h23", "h12"],
        GH: ["h12", "h23"],
        GI: ["h23", "h12"],
        GL: ["h23", "h12"],
        GM: ["h12", "h23"],
        GN: ["h23"],
        GP: ["h23"],
        GQ: ["h23", "h12"],
        GR: ["h12", "h23"],
        GT: ["h23", "h12"],
        GU: ["h12", "h23"],
        GW: ["h23"],
        GY: ["h12", "h23"],
        HK: ["h12", "h23"],
        HN: ["h23", "h12"],
        HR: ["h23"],
        HU: ["h23", "h12"],
        IC: ["h23", "h12"],
        ID: ["h23"],
        IE: ["h23", "h12"],
        IL: ["h23"],
        IM: ["h23", "h12"],
        IN: ["h12", "h23"],
        IO: ["h23", "h12"],
        IQ: ["h12", "h23"],
        IR: ["h23"],
        IS: ["h23"],
        IT: ["h23"],
        JE: ["h23", "h12"],
        JM: ["h12", "h23"],
        JO: ["h12", "h23"],
        JP: ["h23", "h11", "h12"],
        KE: ["h23", "h12"],
        KG: ["h23", "h12"],
        KH: ["h12", "h23"],
        KI: ["h12", "h23"],
        KM: ["h23", "h12"],
        KN: ["h12", "h23"],
        KP: ["h12", "h23"],
        KR: ["h12", "h23"],
        KW: ["h12", "h23"],
        KY: ["h12", "h23"],
        KZ: ["h23"],
        LA: ["h23", "h12"],
        LB: ["h12", "h23"],
        LC: ["h12", "h23"],
        LI: ["h23", "h12"],
        LK: ["h23", "h12"],
        LR: ["h12", "h23"],
        LS: ["h12", "h23"],
        LT: ["h23", "h12"],
        LU: ["h23", "h12"],
        LV: ["h23", "h12"],
        LY: ["h12", "h23"],
        MA: ["h23", "h12"],
        MC: ["h23"],
        MD: ["h23"],
        ME: ["h23", "h12"],
        MF: ["h23"],
        MG: ["h23", "h12"],
        MH: ["h12", "h23"],
        MK: ["h23", "h12"],
        ML: ["h23"],
        MM: ["h23", "h12"],
        MN: ["h23", "h12"],
        MO: ["h12", "h23"],
        MP: ["h12", "h23"],
        MQ: ["h23"],
        MR: ["h12", "h23"],
        MS: ["h23", "h12"],
        MT: ["h23", "h12"],
        MU: ["h23", "h12"],
        MV: ["h23", "h12"],
        MW: ["h12", "h23"],
        MX: ["h23", "h12"],
        MY: ["h12", "h23"],
        MZ: ["h23"],
        NA: ["h12", "h23"],
        NC: ["h23"],
        NE: ["h23"],
        NF: ["h23", "h12"],
        NG: ["h23", "h12"],
        NI: ["h23", "h12"],
        NL: ["h23"],
        NO: ["h23", "h12"],
        NP: ["h23", "h12"],
        NR: ["h23", "h12"],
        NU: ["h23", "h12"],
        NZ: ["h12", "h23"],
        OM: ["h12", "h23"],
        PA: ["h12", "h23"],
        PE: ["h23", "h12"],
        PF: ["h23", "h12"],
        PG: ["h12", "h23"],
        PH: ["h12", "h23"],
        PK: ["h12", "h23"],
        PL: ["h23", "h12"],
        PM: ["h23"],
        PN: ["h23", "h12"],
        PR: ["h12", "h23"],
        PS: ["h12", "h23"],
        PT: ["h23"],
        PW: ["h12", "h23"],
        PY: ["h23", "h12"],
        QA: ["h12", "h23"],
        RE: ["h23"],
        RO: ["h23"],
        RS: ["h23", "h12"],
        RU: ["h23"],
        RW: ["h23", "h12"],
        SA: ["h12", "h23"],
        SB: ["h12", "h23"],
        SC: ["h23", "h12"],
        SD: ["h12", "h23"],
        SE: ["h23"],
        SG: ["h12", "h23"],
        SH: ["h23", "h12"],
        SI: ["h23"],
        SJ: ["h23"],
        SK: ["h23"],
        SL: ["h12", "h23"],
        SM: ["h23", "h12"],
        SN: ["h23", "h12"],
        SO: ["h12", "h23"],
        SR: ["h23"],
        SS: ["h12", "h23"],
        ST: ["h23"],
        SV: ["h23", "h12"],
        SX: ["h23", "h12"],
        SY: ["h12", "h23"],
        SZ: ["h12", "h23"],
        TA: ["h23", "h12"],
        TC: ["h12", "h23"],
        TD: ["h12", "h23"],
        TF: ["h23", "h12"],
        TG: ["h23"],
        TH: ["h23", "h12"],
        TJ: ["h23", "h12"],
        TL: ["h23", "h12"],
        TM: ["h23", "h12"],
        TN: ["h12", "h23"],
        TO: ["h12", "h23"],
        TR: ["h23"],
        TT: ["h12", "h23"],
        TW: ["h12", "h23"],
        TZ: ["h23", "h12"],
        UA: ["h23", "h12"],
        UG: ["h23", "h12"],
        UM: ["h12", "h23"],
        US: ["h12", "h23"],
        UY: ["h23", "h12"],
        UZ: ["h23", "h12"],
        VA: ["h23", "h12"],
        VC: ["h12", "h23"],
        VE: ["h12", "h23"],
        VG: ["h12", "h23"],
        VI: ["h12", "h23"],
        VN: ["h23", "h12"],
        VU: ["h12", "h23"],
        WF: ["h23"],
        WS: ["h12", "h23"],
        XK: ["h23", "h12"],
        YE: ["h12", "h23"],
        YT: ["h23"],
        ZA: ["h23", "h12"],
        ZM: ["h12", "h23"],
        ZW: ["h23", "h12"],
        "af-ZA": ["h23", "h12"],
        "ar-001": ["h12", "h23"],
        "ca-ES": ["h23", "h12"],
        "en-001": ["h12", "h23"],
        "es-BO": ["h23", "h12"],
        "es-BR": ["h23", "h12"],
        "es-EC": ["h23", "h12"],
        "es-ES": ["h23", "h12"],
        "es-GQ": ["h23", "h12"],
        "es-PE": ["h23", "h12"],
        "fr-CA": ["h23", "h12"],
        "gl-ES": ["h23", "h12"],
        "gu-IN": ["h12", "h23"],
        "hi-IN": ["h12", "h23"],
        "it-CH": ["h23", "h12"],
        "it-IT": ["h23", "h12"],
        "kn-IN": ["h12", "h23"],
        "ml-IN": ["h12", "h23"],
        "mr-IN": ["h12", "h23"],
        "pa-IN": ["h12", "h23"],
        "ta-IN": ["h12", "h23"],
        "te-IN": ["h12", "h23"],
        "zu-ZA": ["h23", "h12"]
      }
    },
    11961: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getSupportedTimeZones = void 0;
      var e = n(19724);
      t.getSupportedTimeZones = function(a) {
        return e.timezones.filter((function(t) {
          return function(a, t) {
            void 0 === t && (t = "en");
            try {
              return new Intl.DateTimeFormat(t, {
                timeZone: a
              }).resolvedOptions().timeZone === a
            } catch (a) {}
            return !1
          }(t, a)
        }))
      }
    },
    15038: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.supportedValuesOf = t.shouldPolyfill = void 0;
      var e = n(9339);
      Object.defineProperty(t, "shouldPolyfill", {
        enumerable: !0,
        get: function() {
          return e.shouldPolyfill
        }
      });
      var r = n(77727);
      Object.defineProperty(t, "supportedValuesOf", {
        enumerable: !0,
        get: function() {
          return r.supportedValuesOf
        }
      })
    },
    18908: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isUnicodeLanguageSubtag = t.isUnicodeScriptSubtag = t.isUnicodeRegionSubtag = t.isStructurallyValidLanguageTag = t.parseUnicodeLanguageId = t.parseUnicodeLocaleId = t.getCanonicalLocales = void 0;
      var e = n(23514),
        r = n(57410),
        i = n(62091),
        L = n(23247);
      t.getCanonicalLocales = function(a) {
        return function(a) {
          if (void 0 === a) return [];
          var t = [];
          "string" == typeof a && (a = [a]);
          for (var n = 0, e = a; n < e.length; n++) {
            var s = e[n],
              l = (0, i.emitUnicodeLocaleId)((0, L.canonicalizeUnicodeLocaleId)((0, r.parseUnicodeLocaleId)(s)));
            t.indexOf(l) < 0 && t.push(l)
          }
          return t
        }(a)
      };
      var s = n(57410);
      Object.defineProperty(t, "parseUnicodeLocaleId", {
        enumerable: !0,
        get: function() {
          return s.parseUnicodeLocaleId
        }
      }), Object.defineProperty(t, "parseUnicodeLanguageId", {
        enumerable: !0,
        get: function() {
          return s.parseUnicodeLanguageId
        }
      }), Object.defineProperty(t, "isStructurallyValidLanguageTag", {
        enumerable: !0,
        get: function() {
          return s.isStructurallyValidLanguageTag
        }
      }), Object.defineProperty(t, "isUnicodeRegionSubtag", {
        enumerable: !0,
        get: function() {
          return s.isUnicodeRegionSubtag
        }
      }), Object.defineProperty(t, "isUnicodeScriptSubtag", {
        enumerable: !0,
        get: function() {
          return s.isUnicodeScriptSubtag
        }
      }), Object.defineProperty(t, "isUnicodeLanguageSubtag", {
        enumerable: !0,
        get: function() {
          return s.isUnicodeLanguageSubtag
        }
      }), e.__exportStar(n(58804), t), e.__exportStar(n(62091), t), e.__exportStar(n(44833), t)
    },
    19724: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.timezones = void 0, t.timezones = ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia_Banderas", "America/Bahia", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Ciudad_Juarez", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson_Creek", "America/Dawson", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port_of_Spain", "America/Port-au-Prince", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kyiv", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Kanton", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"]
    },
    23247: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.canonicalizeUnicodeLocaleId = t.canonicalizeUnicodeLanguageId = void 0;
      var e = n(23514),
        r = n(38942),
        i = n(57410),
        L = n(44833),
        s = n(62091);

      function l(a) {
        for (var t = {}, n = [], e = 0, r = a; e < r.length; e++) {
          var i = r[e];
          i[0] in t || (t[i[0]] = 1, i[1] && "true" !== i[1] ? n.push([i[0].toLowerCase(), i[1].toLowerCase()]) : n.push([i[0].toLowerCase()]))
        }
        return n.sort(o)
      }

      function o(a, t) {
        return a[0] < t[0] ? -1 : a[0] > t[0] ? 1 : 0
      }

      function u(a, t) {
        return a.type < t.type ? -1 : a.type > t.type ? 1 : 0
      }

      function m(a, t) {
        for (var n = e.__spreadArray([], a, !0), r = 0, i = t; r < i.length; r++) {
          var L = i[r];
          a.indexOf(L) < 0 && n.push(L)
        }
        return n
      }

      function d(a) {
        var t = a;
        if (a.variants.length)
          for (var n = "", e = 0, l = a.variants; e < l.length; e++) {
            var o = l[e];
            if (n = r.languageAlias[(0, s.emitUnicodeLanguageId)({
                lang: a.lang,
                variants: [o]
              })]) {
              t = {
                lang: (c = (0, i.parseUnicodeLanguageId)(n.split(i.SEPARATOR))).lang,
                script: t.script || c.script,
                region: t.region || c.region,
                variants: m(t.variants, c.variants)
              };
              break
            }
          }
        if (t.script && t.region) {
          var u = r.languageAlias[(0, s.emitUnicodeLanguageId)({
            lang: t.lang,
            script: t.script,
            region: t.region,
            variants: []
          })];
          u && (t = {
            lang: (c = (0, i.parseUnicodeLanguageId)(u.split(i.SEPARATOR))).lang,
            script: c.script,
            region: c.region,
            variants: t.variants
          })
        }
        if (t.region) {
          var d = r.languageAlias[(0, s.emitUnicodeLanguageId)({
            lang: t.lang,
            region: t.region,
            variants: []
          })];
          d && (t = {
            lang: (c = (0, i.parseUnicodeLanguageId)(d.split(i.SEPARATOR))).lang,
            script: t.script || c.script,
            region: c.region,
            variants: t.variants
          })
        }
        var c, g = r.languageAlias[(0, s.emitUnicodeLanguageId)({
          lang: t.lang,
          variants: []
        })];
        if (g && (t = {
            lang: (c = (0, i.parseUnicodeLanguageId)(g.split(i.SEPARATOR))).lang,
            script: t.script || c.script,
            region: t.region || c.region,
            variants: t.variants
          }), t.region) {
          var b = t.region.toUpperCase(),
            h = r.territoryAlias[b],
            k = void 0;
          if (h) {
            var y = h.split(" ");
            k = y[0];
            var f = L.likelySubtags[(0, s.emitUnicodeLanguageId)({
              lang: t.lang,
              script: t.script,
              variants: []
            })];
            if (f) {
              var p = (0, i.parseUnicodeLanguageId)(f.split(i.SEPARATOR)).region;
              p && y.indexOf(p) > -1 && (k = p)
            }
          }
          k && (t.region = k), t.region = t.region.toUpperCase()
        }
        if (t.script && (t.script = t.script[0].toUpperCase() + t.script.slice(1).toLowerCase(), r.scriptAlias[t.script] && (t.script = r.scriptAlias[t.script])), t.variants.length) {
          for (var D = 0; D < t.variants.length; D++)
            if (o = t.variants[D].toLowerCase(), r.variantAlias[o]) {
              var A = r.variantAlias[o];
              (0, i.isUnicodeVariantSubtag)(A) ? t.variants[D] = A: (0, i.isUnicodeLanguageSubtag)(A) && (t.lang = A)
            } t.variants.sort()
        }
        return t
      }
      t.canonicalizeUnicodeLanguageId = d, t.canonicalizeUnicodeLocaleId = function(a) {
        if (a.lang = d(a.lang), a.extensions) {
          for (var t = 0, n = a.extensions; t < n.length; t++) {
            var e = n[t];
            switch (e.type) {
              case "u":
                e.keywords = l(e.keywords), e.attributes && (e.attributes = (r = e.attributes, Object.keys(r.reduce((function(a, t) {
                  return a[t.toLowerCase()] = 1, a
                }), {})).sort()));
                break;
              case "t":
                e.lang && (e.lang = d(e.lang)), e.fields = l(e.fields);
                break;
              default:
                e.value = e.value.toLowerCase()
            }
          }
          a.extensions.sort(u)
        }
        var r;
        return a
      }
    },
    28358: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getSupportedCurrencies = void 0;
      var e = n(99719);

      function r(a, t) {
        void 0 === t && (t = "en");
        try {
          var n = new Intl.NumberFormat(t, {
            style: "currency",
            currencyDisplay: "name",
            currency: a
          }).format(123);
          if (n.substring(0, 3) !== a && n.substring(n.length - 3) !== a) return !0
        } catch (a) {}
        return !1
      }
      t.getSupportedCurrencies = function(a) {
        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = [], i = 0, L = e.currencies; i < L.length; i++) {
          var s = L[i];
          if (3 === s.length) r(s, a) && n.push(s);
          else if (5 === s.length && "~" === s[3])
            for (var l = t.indexOf(s[2]), o = t.indexOf(s[4]), u = l; u <= o; u++) {
              var m = s.substring(0, 2) + t[u];
              r(m, a) && n.push(m)
            }
        }
        return n
      }
    },
    38942: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.variantAlias = t.scriptAlias = t.territoryAlias = t.languageAlias = void 0, t.languageAlias = {
        "aa-saaho": "ssy",
        aam: "aas",
        aar: "aa",
        abk: "ab",
        adp: "dz",
        afr: "af",
        agp: "apf",
        ais: "ami",
        ajt: "aeb",
        aju: "jrb",
        aka: "ak",
        alb: "sq",
        als: "sq",
        amh: "am",
        ara: "ar",
        arb: "ar",
        arg: "an",
        arm: "hy",
        "art-lojban": "jbo",
        asd: "snz",
        asm: "as",
        aue: "ktz",
        ava: "av",
        ave: "ae",
        aym: "ay",
        ayr: "ay",
        ayx: "nun",
        aze: "az",
        azj: "az",
        bak: "ba",
        bam: "bm",
        baq: "eu",
        baz: "nvo",
        bcc: "bal",
        bcl: "bik",
        bel: "be",
        ben: "bn",
        bgm: "bcg",
        bh: "bho",
        bhk: "fbl",
        bic: "bir",
        bih: "bho",
        bis: "bi",
        bjd: "drl",
        bjq: "bzc",
        bkb: "ebk",
        blg: "iba",
        bod: "bo",
        bos: "bs",
        bre: "br",
        btb: "beb",
        bul: "bg",
        bur: "my",
        bxk: "luy",
        bxr: "bua",
        cat: "ca",
        ccq: "rki",
        "cel-gaulish": "xtg",
        ces: "cs",
        cha: "ch",
        che: "ce",
        chi: "zh",
        chu: "cu",
        chv: "cv",
        cjr: "mom",
        cka: "cmr",
        cld: "syr",
        cmk: "xch",
        cmn: "zh",
        cnr: "sr-ME",
        cor: "kw",
        cos: "co",
        coy: "pij",
        cqu: "quh",
        cre: "cr",
        cwd: "cr",
        cym: "cy",
        cze: "cs",
        daf: "dnj",
        dan: "da",
        dap: "njz",
        deu: "de",
        dgo: "doi",
        dhd: "mwr",
        dik: "din",
        diq: "zza",
        dit: "dif",
        div: "dv",
        djl: "dze",
        dkl: "aqd",
        drh: "mn",
        drr: "kzk",
        drw: "fa-AF",
        dud: "uth",
        duj: "dwu",
        dut: "nl",
        dwl: "dbt",
        dzo: "dz",
        ekk: "et",
        ell: "el",
        elp: "amq",
        emk: "man",
        "en-GB-oed": "en-GB-oxendict",
        eng: "en",
        epo: "eo",
        esk: "ik",
        est: "et",
        eus: "eu",
        ewe: "ee",
        fao: "fo",
        fas: "fa",
        fat: "ak",
        fij: "fj",
        fin: "fi",
        fra: "fr",
        fre: "fr",
        fry: "fy",
        fuc: "ff",
        ful: "ff",
        gav: "dev",
        gaz: "om",
        gbc: "wny",
        gbo: "grb",
        geo: "ka",
        ger: "de",
        gfx: "vaj",
        ggn: "gvr",
        ggo: "esg",
        ggr: "gtu",
        gio: "aou",
        gla: "gd",
        gle: "ga",
        glg: "gl",
        gli: "kzk",
        glv: "gv",
        gno: "gon",
        gre: "el",
        grn: "gn",
        gti: "nyc",
        gug: "gn",
        guj: "gu",
        guv: "duz",
        gya: "gba",
        hat: "ht",
        hau: "ha",
        hbs: "sr-Latn",
        hdn: "hai",
        hea: "hmn",
        heb: "he",
        her: "hz",
        him: "srx",
        hin: "hi",
        hmo: "ho",
        hrr: "jal",
        hrv: "hr",
        hun: "hu",
        "hy-arevmda": "hyw",
        hye: "hy",
        "i-ami": "ami",
        "i-bnn": "bnn",
        "i-default": "en-x-i-default",
        "i-enochian": "und-x-i-enochian",
        "i-hak": "hak",
        "i-klingon": "tlh",
        "i-lux": "lb",
        "i-mingo": "see-x-i-mingo",
        "i-navajo": "nv",
        "i-pwn": "pwn",
        "i-tao": "tao",
        "i-tay": "tay",
        "i-tsu": "tsu",
        ibi: "opa",
        ibo: "ig",
        ice: "is",
        ido: "io",
        iii: "ii",
        ike: "iu",
        iku: "iu",
        ile: "ie",
        ill: "ilm",
        ilw: "gal",
        in: "id",
        ina: "ia",
        ind: "id",
        ipk: "ik",
        isl: "is",
        ita: "it",
        iw: "he",
        izi: "eza",
        jar: "jgk",
        jav: "jv",
        jeg: "oyb",
        ji: "yi",
        jpn: "ja",
        jw: "jv",
        kal: "kl",
        kan: "kn",
        kas: "ks",
        kat: "ka",
        kau: "kr",
        kaz: "kk",
        kdv: "zkd",
        kgc: "tdf",
        kgd: "ncq",
        kgh: "kml",
        khk: "mn",
        khm: "km",
        kik: "ki",
        kin: "rw",
        kir: "ky",
        kmr: "ku",
        knc: "kr",
        kng: "kg",
        knn: "kok",
        koj: "kwv",
        kom: "kv",
        kon: "kg",
        kor: "ko",
        kpp: "jkm",
        kpv: "kv",
        krm: "bmf",
        ktr: "dtp",
        kua: "kj",
        kur: "ku",
        kvs: "gdj",
        kwq: "yam",
        kxe: "tvd",
        kxl: "kru",
        kzh: "dgl",
        kzj: "dtp",
        kzt: "dtp",
        lak: "ksp",
        lao: "lo",
        lat: "la",
        lav: "lv",
        lbk: "bnc",
        leg: "enl",
        lii: "raq",
        lim: "li",
        lin: "ln",
        lit: "lt",
        llo: "ngt",
        lmm: "rmx",
        ltz: "lb",
        lub: "lu",
        lug: "lg",
        lvs: "lv",
        mac: "mk",
        mah: "mh",
        mal: "ml",
        mao: "mi",
        mar: "mr",
        may: "ms",
        meg: "cir",
        mgx: "jbk",
        mhr: "chm",
        mkd: "mk",
        mlg: "mg",
        mlt: "mt",
        mnk: "man",
        mnt: "wnn",
        mo: "ro",
        mof: "xnt",
        mol: "ro",
        mon: "mn",
        mri: "mi",
        msa: "ms",
        mst: "mry",
        mup: "raj",
        mwd: "dmw",
        mwj: "vaj",
        mya: "my",
        myd: "aog",
        myt: "mry",
        nad: "xny",
        nau: "na",
        nav: "nv",
        nbf: "nru",
        nbl: "nr",
        nbx: "ekc",
        ncp: "kdz",
        nde: "nd",
        ndo: "ng",
        nep: "ne",
        nld: "nl",
        nln: "azd",
        nlr: "nrk",
        nno: "nn",
        nns: "nbr",
        nnx: "ngv",
        "no-bok": "nb",
        "no-bokmal": "nb",
        "no-nyn": "nn",
        "no-nynorsk": "nn",
        nob: "nb",
        noo: "dtd",
        nor: "no",
        npi: "ne",
        nts: "pij",
        nxu: "bpp",
        nya: "ny",
        oci: "oc",
        ojg: "oj",
        oji: "oj",
        ori: "or",
        orm: "om",
        ory: "or",
        oss: "os",
        oun: "vaj",
        pan: "pa",
        pat: "kxr",
        pbu: "ps",
        pcr: "adx",
        per: "fa",
        pes: "fa",
        pli: "pi",
        plt: "mg",
        pmc: "huw",
        pmu: "phr",
        pnb: "lah",
        pol: "pl",
        por: "pt",
        ppa: "bfy",
        ppr: "lcq",
        prs: "fa-AF",
        pry: "prt",
        pus: "ps",
        puz: "pub",
        que: "qu",
        quz: "qu",
        rmr: "emx",
        rmy: "rom",
        roh: "rm",
        ron: "ro",
        rum: "ro",
        run: "rn",
        rus: "ru",
        sag: "sg",
        san: "sa",
        sap: "aqt",
        sca: "hle",
        scc: "sr",
        scr: "hr",
        sgl: "isk",
        "sgn-BE-FR": "sfb",
        "sgn-BE-NL": "vgt",
        "sgn-BR": "bzs",
        "sgn-CH-DE": "sgg",
        "sgn-CO": "csn",
        "sgn-DE": "gsg",
        "sgn-DK": "dsl",
        "sgn-ES": "ssp",
        "sgn-FR": "fsl",
        "sgn-GB": "bfi",
        "sgn-GR": "gss",
        "sgn-IE": "isg",
        "sgn-IT": "ise",
        "sgn-JP": "jsl",
        "sgn-MX": "mfs",
        "sgn-NI": "ncs",
        "sgn-NL": "dse",
        "sgn-NO": "nsi",
        "sgn-PT": "psr",
        "sgn-SE": "swl",
        "sgn-US": "ase",
        "sgn-ZA": "sfs",
        sh: "sr-Latn",
        sin: "si",
        skk: "oyb",
        slk: "sk",
        slo: "sk",
        slv: "sl",
        smd: "kmb",
        sme: "se",
        smo: "sm",
        sna: "sn",
        snb: "iba",
        snd: "sd",
        som: "so",
        sot: "st",
        spa: "es",
        spy: "kln",
        sqi: "sq",
        src: "sc",
        srd: "sc",
        srp: "sr",
        ssw: "ss",
        sul: "sgd",
        sum: "ulw",
        sun: "su",
        swa: "sw",
        swc: "sw-CD",
        swe: "sv",
        swh: "sw",
        tah: "ty",
        tam: "ta",
        tat: "tt",
        tdu: "dtp",
        tel: "te",
        tgg: "bjp",
        tgk: "tg",
        tgl: "fil",
        tha: "th",
        thc: "tpo",
        thw: "ola",
        thx: "oyb",
        tib: "bo",
        tid: "itd",
        tie: "ras",
        tir: "ti",
        tkk: "twm",
        tl: "fil",
        tlw: "weo",
        tmp: "tyj",
        tne: "kak",
        tnf: "fa-AF",
        ton: "to",
        tsf: "taj",
        tsn: "tn",
        tso: "ts",
        ttq: "tmh",
        tuk: "tk",
        tur: "tr",
        tw: "ak",
        twi: "ak",
        uig: "ug",
        ukr: "uk",
        umu: "del",
        "und-aaland": "und-AX",
        "und-arevela": "und",
        "und-arevmda": "und",
        "und-bokmal": "und",
        "und-hakka": "und",
        "und-hepburn-heploc": "und-alalc97",
        "und-lojban": "und",
        "und-nynorsk": "und",
        "und-saaho": "und",
        "und-xiang": "und",
        unp: "wro",
        uok: "ema",
        urd: "ur",
        uzb: "uz",
        uzn: "uz",
        ven: "ve",
        vie: "vi",
        vol: "vo",
        wel: "cy",
        wgw: "wgb",
        wit: "nol",
        wiw: "nwo",
        wln: "wa",
        wol: "wo",
        xba: "cax",
        xho: "xh",
        xia: "acn",
        xkh: "waw",
        xpe: "kpe",
        xrq: "dmw",
        xsj: "suj",
        xsl: "den",
        ybd: "rki",
        ydd: "yi",
        yen: "ynq",
        yid: "yi",
        yiy: "yrm",
        yma: "lrr",
        ymt: "mtm",
        yor: "yo",
        yos: "zom",
        yuu: "yug",
        zai: "zap",
        "zh-cmn": "zh",
        "zh-cmn-Hans": "zh-Hans",
        "zh-cmn-Hant": "zh-Hant",
        "zh-gan": "gan",
        "zh-guoyu": "zh",
        "zh-hakka": "hak",
        "zh-min": "nan-x-zh-min",
        "zh-min-nan": "nan",
        "zh-wuu": "wuu",
        "zh-xiang": "hsn",
        "zh-yue": "yue",
        zha: "za",
        zho: "zh",
        zir: "scv",
        zsm: "ms",
        zul: "zu",
        zyb: "za"
      }, t.territoryAlias = {
        "004": "AF",
        "008": "AL",
        "010": "AQ",
        "012": "DZ",
        "016": "AS",
        "020": "AD",
        "024": "AO",
        "028": "AG",
        "031": "AZ",
        "032": "AR",
        "036": "AU",
        "040": "AT",
        "044": "BS",
        "048": "BH",
        "050": "BD",
        "051": "AM",
        "052": "BB",
        "056": "BE",
        "060": "BM",
        "062": "034 143",
        "064": "BT",
        "068": "BO",
        "070": "BA",
        "072": "BW",
        "074": "BV",
        "076": "BR",
        "084": "BZ",
        "086": "IO",
        "090": "SB",
        "092": "VG",
        "096": "BN",
        100: "BG",
        104: "MM",
        108: "BI",
        112: "BY",
        116: "KH",
        120: "CM",
        124: "CA",
        132: "CV",
        136: "KY",
        140: "CF",
        144: "LK",
        148: "TD",
        152: "CL",
        156: "CN",
        158: "TW",
        162: "CX",
        166: "CC",
        170: "CO",
        172: "RU AM AZ BY GE KG KZ MD TJ TM UA UZ",
        174: "KM",
        175: "YT",
        178: "CG",
        180: "CD",
        184: "CK",
        188: "CR",
        191: "HR",
        192: "CU",
        196: "CY",
        200: "CZ SK",
        203: "CZ",
        204: "BJ",
        208: "DK",
        212: "DM",
        214: "DO",
        218: "EC",
        222: "SV",
        226: "GQ",
        230: "ET",
        231: "ET",
        232: "ER",
        233: "EE",
        234: "FO",
        238: "FK",
        239: "GS",
        242: "FJ",
        246: "FI",
        248: "AX",
        249: "FR",
        250: "FR",
        254: "GF",
        258: "PF",
        260: "TF",
        262: "DJ",
        266: "GA",
        268: "GE",
        270: "GM",
        275: "PS",
        276: "DE",
        278: "DE",
        280: "DE",
        288: "GH",
        292: "GI",
        296: "KI",
        300: "GR",
        304: "GL",
        308: "GD",
        312: "GP",
        316: "GU",
        320: "GT",
        324: "GN",
        328: "GY",
        332: "HT",
        334: "HM",
        336: "VA",
        340: "HN",
        344: "HK",
        348: "HU",
        352: "IS",
        356: "IN",
        360: "ID",
        364: "IR",
        368: "IQ",
        372: "IE",
        376: "IL",
        380: "IT",
        384: "CI",
        388: "JM",
        392: "JP",
        398: "KZ",
        400: "JO",
        404: "KE",
        408: "KP",
        410: "KR",
        414: "KW",
        417: "KG",
        418: "LA",
        422: "LB",
        426: "LS",
        428: "LV",
        430: "LR",
        434: "LY",
        438: "LI",
        440: "LT",
        442: "LU",
        446: "MO",
        450: "MG",
        454: "MW",
        458: "MY",
        462: "MV",
        466: "ML",
        470: "MT",
        474: "MQ",
        478: "MR",
        480: "MU",
        484: "MX",
        492: "MC",
        496: "MN",
        498: "MD",
        499: "ME",
        500: "MS",
        504: "MA",
        508: "MZ",
        512: "OM",
        516: "NA",
        520: "NR",
        524: "NP",
        528: "NL",
        530: "CW SX BQ",
        531: "CW",
        532: "CW SX BQ",
        533: "AW",
        534: "SX",
        535: "BQ",
        536: "SA IQ",
        540: "NC",
        548: "VU",
        554: "NZ",
        558: "NI",
        562: "NE",
        566: "NG",
        570: "NU",
        574: "NF",
        578: "NO",
        580: "MP",
        581: "UM",
        582: "FM MH MP PW",
        583: "FM",
        584: "MH",
        585: "PW",
        586: "PK",
        591: "PA",
        598: "PG",
        600: "PY",
        604: "PE",
        608: "PH",
        612: "PN",
        616: "PL",
        620: "PT",
        624: "GW",
        626: "TL",
        630: "PR",
        634: "QA",
        638: "RE",
        642: "RO",
        643: "RU",
        646: "RW",
        652: "BL",
        654: "SH",
        659: "KN",
        660: "AI",
        662: "LC",
        663: "MF",
        666: "PM",
        670: "VC",
        674: "SM",
        678: "ST",
        682: "SA",
        686: "SN",
        688: "RS",
        690: "SC",
        694: "SL",
        702: "SG",
        703: "SK",
        704: "VN",
        705: "SI",
        706: "SO",
        710: "ZA",
        716: "ZW",
        720: "YE",
        724: "ES",
        728: "SS",
        729: "SD",
        732: "EH",
        736: "SD",
        740: "SR",
        744: "SJ",
        748: "SZ",
        752: "SE",
        756: "CH",
        760: "SY",
        762: "TJ",
        764: "TH",
        768: "TG",
        772: "TK",
        776: "TO",
        780: "TT",
        784: "AE",
        788: "TN",
        792: "TR",
        795: "TM",
        796: "TC",
        798: "TV",
        800: "UG",
        804: "UA",
        807: "MK",
        810: "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ",
        818: "EG",
        826: "GB",
        830: "JE GG",
        831: "GG",
        832: "JE",
        833: "IM",
        834: "TZ",
        840: "US",
        850: "VI",
        854: "BF",
        858: "UY",
        860: "UZ",
        862: "VE",
        876: "WF",
        882: "WS",
        886: "YE",
        887: "YE",
        890: "RS ME SI HR MK BA",
        891: "RS ME",
        894: "ZM",
        958: "AA",
        959: "QM",
        960: "QN",
        962: "QP",
        963: "QQ",
        964: "QR",
        965: "QS",
        966: "QT",
        967: "EU",
        968: "QV",
        969: "QW",
        970: "QX",
        971: "QY",
        972: "QZ",
        973: "XA",
        974: "XB",
        975: "XC",
        976: "XD",
        977: "XE",
        978: "XF",
        979: "XG",
        980: "XH",
        981: "XI",
        982: "XJ",
        983: "XK",
        984: "XL",
        985: "XM",
        986: "XN",
        987: "XO",
        988: "XP",
        989: "XQ",
        990: "XR",
        991: "XS",
        992: "XT",
        993: "XU",
        994: "XV",
        995: "XW",
        996: "XX",
        997: "XY",
        998: "XZ",
        999: "ZZ",
        AAA: "AA",
        ABW: "AW",
        AFG: "AF",
        AGO: "AO",
        AIA: "AI",
        ALA: "AX",
        ALB: "AL",
        AN: "CW SX BQ",
        AND: "AD",
        ANT: "CW SX BQ",
        ARE: "AE",
        ARG: "AR",
        ARM: "AM",
        ASC: "AC",
        ASM: "AS",
        ATA: "AQ",
        ATF: "TF",
        ATG: "AG",
        AUS: "AU",
        AUT: "AT",
        AZE: "AZ",
        BDI: "BI",
        BEL: "BE",
        BEN: "BJ",
        BES: "BQ",
        BFA: "BF",
        BGD: "BD",
        BGR: "BG",
        BHR: "BH",
        BHS: "BS",
        BIH: "BA",
        BLM: "BL",
        BLR: "BY",
        BLZ: "BZ",
        BMU: "BM",
        BOL: "BO",
        BRA: "BR",
        BRB: "BB",
        BRN: "BN",
        BTN: "BT",
        BU: "MM",
        BUR: "MM",
        BVT: "BV",
        BWA: "BW",
        CAF: "CF",
        CAN: "CA",
        CCK: "CC",
        CHE: "CH",
        CHL: "CL",
        CHN: "CN",
        CIV: "CI",
        CMR: "CM",
        COD: "CD",
        COG: "CG",
        COK: "CK",
        COL: "CO",
        COM: "KM",
        CPT: "CP",
        CPV: "CV",
        CRI: "CR",
        CS: "RS ME",
        CT: "KI",
        CUB: "CU",
        CUW: "CW",
        CXR: "CX",
        CYM: "KY",
        CYP: "CY",
        CZE: "CZ",
        DD: "DE",
        DDR: "DE",
        DEU: "DE",
        DGA: "DG",
        DJI: "DJ",
        DMA: "DM",
        DNK: "DK",
        DOM: "DO",
        DY: "BJ",
        DZA: "DZ",
        ECU: "EC",
        EGY: "EG",
        ERI: "ER",
        ESH: "EH",
        ESP: "ES",
        EST: "EE",
        ETH: "ET",
        FIN: "FI",
        FJI: "FJ",
        FLK: "FK",
        FQ: "AQ TF",
        FRA: "FR",
        FRO: "FO",
        FSM: "FM",
        FX: "FR",
        FXX: "FR",
        GAB: "GA",
        GBR: "GB",
        GEO: "GE",
        GGY: "GG",
        GHA: "GH",
        GIB: "GI",
        GIN: "GN",
        GLP: "GP",
        GMB: "GM",
        GNB: "GW",
        GNQ: "GQ",
        GRC: "GR",
        GRD: "GD",
        GRL: "GL",
        GTM: "GT",
        GUF: "GF",
        GUM: "GU",
        GUY: "GY",
        HKG: "HK",
        HMD: "HM",
        HND: "HN",
        HRV: "HR",
        HTI: "HT",
        HUN: "HU",
        HV: "BF",
        IDN: "ID",
        IMN: "IM",
        IND: "IN",
        IOT: "IO",
        IRL: "IE",
        IRN: "IR",
        IRQ: "IQ",
        ISL: "IS",
        ISR: "IL",
        ITA: "IT",
        JAM: "JM",
        JEY: "JE",
        JOR: "JO",
        JPN: "JP",
        JT: "UM",
        KAZ: "KZ",
        KEN: "KE",
        KGZ: "KG",
        KHM: "KH",
        KIR: "KI",
        KNA: "KN",
        KOR: "KR",
        KWT: "KW",
        LAO: "LA",
        LBN: "LB",
        LBR: "LR",
        LBY: "LY",
        LCA: "LC",
        LIE: "LI",
        LKA: "LK",
        LSO: "LS",
        LTU: "LT",
        LUX: "LU",
        LVA: "LV",
        MAC: "MO",
        MAF: "MF",
        MAR: "MA",
        MCO: "MC",
        MDA: "MD",
        MDG: "MG",
        MDV: "MV",
        MEX: "MX",
        MHL: "MH",
        MI: "UM",
        MKD: "MK",
        MLI: "ML",
        MLT: "MT",
        MMR: "MM",
        MNE: "ME",
        MNG: "MN",
        MNP: "MP",
        MOZ: "MZ",
        MRT: "MR",
        MSR: "MS",
        MTQ: "MQ",
        MUS: "MU",
        MWI: "MW",
        MYS: "MY",
        MYT: "YT",
        NAM: "NA",
        NCL: "NC",
        NER: "NE",
        NFK: "NF",
        NGA: "NG",
        NH: "VU",
        NIC: "NI",
        NIU: "NU",
        NLD: "NL",
        NOR: "NO",
        NPL: "NP",
        NQ: "AQ",
        NRU: "NR",
        NT: "SA IQ",
        NTZ: "SA IQ",
        NZL: "NZ",
        OMN: "OM",
        PAK: "PK",
        PAN: "PA",
        PC: "FM MH MP PW",
        PCN: "PN",
        PER: "PE",
        PHL: "PH",
        PLW: "PW",
        PNG: "PG",
        POL: "PL",
        PRI: "PR",
        PRK: "KP",
        PRT: "PT",
        PRY: "PY",
        PSE: "PS",
        PU: "UM",
        PYF: "PF",
        PZ: "PA",
        QAT: "QA",
        QMM: "QM",
        QNN: "QN",
        QPP: "QP",
        QQQ: "QQ",
        QRR: "QR",
        QSS: "QS",
        QTT: "QT",
        QU: "EU",
        QUU: "EU",
        QVV: "QV",
        QWW: "QW",
        QXX: "QX",
        QYY: "QY",
        QZZ: "QZ",
        REU: "RE",
        RH: "ZW",
        ROU: "RO",
        RUS: "RU",
        RWA: "RW",
        SAU: "SA",
        SCG: "RS ME",
        SDN: "SD",
        SEN: "SN",
        SGP: "SG",
        SGS: "GS",
        SHN: "SH",
        SJM: "SJ",
        SLB: "SB",
        SLE: "SL",
        SLV: "SV",
        SMR: "SM",
        SOM: "SO",
        SPM: "PM",
        SRB: "RS",
        SSD: "SS",
        STP: "ST",
        SU: "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ",
        SUN: "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ",
        SUR: "SR",
        SVK: "SK",
        SVN: "SI",
        SWE: "SE",
        SWZ: "SZ",
        SXM: "SX",
        SYC: "SC",
        SYR: "SY",
        TAA: "TA",
        TCA: "TC",
        TCD: "TD",
        TGO: "TG",
        THA: "TH",
        TJK: "TJ",
        TKL: "TK",
        TKM: "TM",
        TLS: "TL",
        TMP: "TL",
        TON: "TO",
        TP: "TL",
        TTO: "TT",
        TUN: "TN",
        TUR: "TR",
        TUV: "TV",
        TWN: "TW",
        TZA: "TZ",
        UGA: "UG",
        UK: "GB",
        UKR: "UA",
        UMI: "UM",
        URY: "UY",
        USA: "US",
        UZB: "UZ",
        VAT: "VA",
        VCT: "VC",
        VD: "VN",
        VEN: "VE",
        VGB: "VG",
        VIR: "VI",
        VNM: "VN",
        VUT: "VU",
        WK: "UM",
        WLF: "WF",
        WSM: "WS",
        XAA: "XA",
        XBB: "XB",
        XCC: "XC",
        XDD: "XD",
        XEE: "XE",
        XFF: "XF",
        XGG: "XG",
        XHH: "XH",
        XII: "XI",
        XJJ: "XJ",
        XKK: "XK",
        XLL: "XL",
        XMM: "XM",
        XNN: "XN",
        XOO: "XO",
        XPP: "XP",
        XQQ: "XQ",
        XRR: "XR",
        XSS: "XS",
        XTT: "XT",
        XUU: "XU",
        XVV: "XV",
        XWW: "XW",
        XXX: "XX",
        XYY: "XY",
        XZZ: "XZ",
        YD: "YE",
        YEM: "YE",
        YMD: "YE",
        YU: "RS ME",
        YUG: "RS ME",
        ZAF: "ZA",
        ZAR: "CD",
        ZMB: "ZM",
        ZR: "CD",
        ZWE: "ZW",
        ZZZ: "ZZ"
      }, t.scriptAlias = {
        Qaai: "Zinh"
      }, t.variantAlias = {
        heploc: "alalc97",
        polytoni: "polyton"
      }
    },
    40102: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Locale = void 0;
      var e = n(23514),
        r = n(15038),
        i = n(72971),
        L = n(18908),
        s = e.__importDefault(n(64390)),
        l = n(62494),
        o = n(95728),
        u = n(58289),
        m = ["ca", "co", "hc", "kf", "kn", "nu"],
        d = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;

      function c(a, t, n, r, i) {
        return void 0 === r && (r = []), i ? {
          lang: a && "und" !== a ? a : i.lang,
          script: t || i.script,
          region: n || i.region,
          variants: e.__spreadArray(e.__spreadArray([], r, !0), i.variants, !0)
        } : {
          lang: a || "und",
          script: t,
          region: n,
          variants: r
        }
      }

      function g(a) {
        var t = (0, L.parseUnicodeLocaleId)(a),
          n = t.lang,
          e = n.lang,
          r = n.script,
          i = n.region,
          s = n.variants;
        if (r && i) {
          var l = L.likelySubtags[(0, L.emitUnicodeLanguageId)({
            lang: e,
            script: r,
            region: i,
            variants: []
          })];
          if (l) {
            var o = (0, L.parseUnicodeLanguageId)(l);
            return t.lang = c(void 0, void 0, void 0, s, o), (0, L.emitUnicodeLocaleId)(t)
          }
        }
        if (r) {
          var u = L.likelySubtags[(0, L.emitUnicodeLanguageId)({
            lang: e,
            script: r,
            variants: []
          })];
          if (u) {
            var m = (0, L.parseUnicodeLanguageId)(u);
            return t.lang = c(void 0, void 0, i, s, m), (0, L.emitUnicodeLocaleId)(t)
          }
        }
        if (i) {
          var d = L.likelySubtags[(0, L.emitUnicodeLanguageId)({
            lang: e,
            region: i,
            variants: []
          })];
          if (d) {
            var g = (0, L.parseUnicodeLanguageId)(d);
            return t.lang = c(void 0, r, void 0, s, g), (0, L.emitUnicodeLocaleId)(t)
          }
        }
        var b = L.likelySubtags[e] || L.likelySubtags[(0, L.emitUnicodeLanguageId)({
          lang: "und",
          script: r,
          variants: []
        })];
        if (!b) throw new Error("No match for addLikelySubtags");
        var h = (0, L.parseUnicodeLanguageId)(b);
        return t.lang = c(void 0, r, i, s, h), (0, L.emitUnicodeLocaleId)(t)
      }

      function b(a, t) {
        var n = a;
        return void 0 !== t && (n = [t]), Array.from(n)
      }

      function h(a) {
        var t, n = (0, s.default)(a),
          e = n.calendar;
        return "root" !== n.locale && (t = a.maximize().region), b((0, l.getCalendarPreferenceDataForRegion)(t), e)
      }

      function k(a) {
        var t = (0, s.default)(a),
          n = t.collation,
          e = t.locale,
          i = (0, r.supportedValuesOf)("collation", e).filter((function(a) {
            return "standard" !== a && "search" !== a
          }));
        return i.sort(), b(i, n)
      }

      function y(a) {
        var t, n = (0, s.default)(a),
          e = n.hourCycle,
          r = n.locale;
        return "root" !== r && (t = a.maximize().region), b((0, l.getHourCyclesPreferenceDataForLocaleOrRegion)(r, t), e)
      }

      function f(a) {
        var t, n = (0, s.default)(a),
          r = n.numberingSystem,
          i = n.locale,
          L = a.language,
          l = null !== (t = u.numberingSystems[i]) && void 0 !== t ? t : u.numberingSystems[L];
        return b(l ? e.__spreadArray([], l, !0) : [], r)
      }

      function p(a) {
        var t = (0, s.default)(a).locale,
          n = (0, L.parseUnicodeLanguageId)(t).region;
        if (n) {
          var e = (0, l.getTimeZonePreferenceForRegion)(n);
          return e.sort(), Array.from(e)
        }
      }

      function D(a) {
        var t = (0, s.default)(a).locale;
        return "right-to-left" === o.characterOrders[t] ? "rtl" : "ltr"
      }

      function A(a) {
        var t;
        return "root" !== (0, s.default)(a).locale && (t = a.maximize().region), (0, l.getWeekDataForRegion)(t)
      }
      var w = function() {
        function a(t, n) {
          if (!(this && this instanceof a ? this.constructor : void 0)) throw new TypeError("Intl.Locale must be called with 'new'");
          var r, l = a.relevantExtensionKeys,
            o = ["initializedLocale", "locale", "calendar", "collation", "hourCycle", "numberingSystem"];
          if (l.indexOf("kf") > -1 && o.push("caseFirst"), l.indexOf("kn") > -1 && o.push("numeric"), void 0 === t) throw new TypeError("First argument to Intl.Locale constructor can't be empty or missing");
          if ("string" != typeof t && "object" != typeof t) throw new TypeError("tag must be a string or object");
          t = "object" == typeof t && (r = (0, s.default)(t)) && r.initializedLocale ? r.locale : t.toString(), r = (0, s.default)(this);
          var u = (0, i.CoerceOptionsToObject)(n);
          t = function(a, t) {
            (0, i.invariant)("string" == typeof a, "language tag must be a string"), (0, i.invariant)((0, L.isStructurallyValidLanguageTag)(a), "malformed language tag", RangeError);
            var n = (0, i.GetOption)(t, "language", "string", void 0, void 0);
            void 0 !== n && (0, i.invariant)((0, L.isUnicodeLanguageSubtag)(n), "Malformed unicode_language_subtag", RangeError);
            var r = (0, i.GetOption)(t, "script", "string", void 0, void 0);
            void 0 !== r && (0, i.invariant)((0, L.isUnicodeScriptSubtag)(r), "Malformed unicode_script_subtag", RangeError);
            var s = (0, i.GetOption)(t, "region", "string", void 0, void 0);
            void 0 !== s && (0, i.invariant)((0, L.isUnicodeRegionSubtag)(s), "Malformed unicode_region_subtag", RangeError);
            var l = (0, L.parseUnicodeLanguageId)(a);
            return void 0 !== n && (l.lang = n), void 0 !== r && (l.script = r), void 0 !== s && (l.region = s), Intl.getCanonicalLocales((0, L.emitUnicodeLocaleId)(e.__assign(e.__assign({}, (0, L.parseUnicodeLocaleId)(a)), {
              lang: l
            })))[0]
          }(t, u);
          var m = Object.create(null),
            c = (0, i.GetOption)(u, "calendar", "string", void 0, void 0);
          if (void 0 !== c && !d.test(c)) throw new RangeError("invalid calendar");
          m.ca = c;
          var g = (0, i.GetOption)(u, "collation", "string", void 0, void 0);
          if (void 0 !== g && !d.test(g)) throw new RangeError("invalid collation");
          m.co = g;
          var b = (0, i.GetOption)(u, "hourCycle", "string", ["h11", "h12", "h23", "h24"], void 0);
          m.hc = b;
          var h = (0, i.GetOption)(u, "caseFirst", "string", ["upper", "lower", "false"], void 0);
          m.kf = h;
          var k, y = (0, i.GetOption)(u, "numeric", "boolean", void 0, void 0);
          void 0 !== y && (k = String(y)), m.kn = k;
          var f = (0, i.GetOption)(u, "numberingSystem", "string", void 0, void 0);
          if (void 0 !== f && !d.test(f)) throw new RangeError("Invalid numberingSystem");
          m.nu = f;
          var p = function(a, t, n) {
            for (var e, r = [], s = (0, L.parseUnicodeLocaleId)(a), l = 0, o = s.extensions; l < o.length; l++) {
              var u = o[l];
              "u" === u.type && (e = u, Array.isArray(u.keywords) && (r = u.keywords))
            }
            for (var m = Object.create(null), d = 0, c = n; d < c.length; d++) {
              for (var g = c[d], b = void 0, h = void 0, k = 0, y = r; k < y.length; k++) {
                var f = y[k];
                f[0] === g && (b = (h = f)[1])
              }(0, i.invariant)(g in t, "".concat(g, " must be in options"));
              var p = t[g];
              void 0 !== p && ((0, i.invariant)("string" == typeof p, "Value for ".concat(g, " must be a string")), b = p, h ? h[1] = b : r.push([g, b])), m[g] = b
            }
            return e ? e.keywords = r : r.length && s.extensions.push({
              type: "u",
              keywords: r,
              attributes: []
            }), m.locale = Intl.getCanonicalLocales((0, L.emitUnicodeLocaleId)(s))[0], m
          }(t, m, l);
          r.locale = p.locale, r.calendar = p.ca, r.collation = p.co, r.hourCycle = p.hc, l.indexOf("kf") > -1 && (r.caseFirst = p.kf), l.indexOf("kn") > -1 && (r.numeric = (0, i.SameValue)(p.kn, "true")), r.numberingSystem = p.nu
        }
        return a.prototype.maximize = function() {
          var t = (0, s.default)(this).locale;
          try {
            return new a(g(t))
          } catch (n) {
            return new a(t)
          }
        }, a.prototype.minimize = function() {
          var t = (0, s.default)(this).locale;
          try {
            return new a(function(a) {
              var t = g(a);
              if (!t) return a;
              t = (0, L.emitUnicodeLanguageId)(e.__assign(e.__assign({}, (0, L.parseUnicodeLanguageId)(t)), {
                variants: []
              }));
              var n = (0, L.parseUnicodeLocaleId)(a),
                r = n.lang,
                i = r.lang,
                s = r.script,
                l = r.region,
                o = r.variants;
              return g((0, L.emitUnicodeLanguageId)({
                lang: i,
                variants: []
              })) === t ? (0, L.emitUnicodeLocaleId)(e.__assign(e.__assign({}, n), {
                lang: c(i, void 0, void 0, o)
              })) : l && g((0, L.emitUnicodeLanguageId)({
                lang: i,
                region: l,
                variants: []
              })) === t ? (0, L.emitUnicodeLocaleId)(e.__assign(e.__assign({}, n), {
                lang: c(i, void 0, l, o)
              })) : s && g((0, L.emitUnicodeLanguageId)({
                lang: i,
                script: s,
                variants: []
              })) === t ? (0, L.emitUnicodeLocaleId)(e.__assign(e.__assign({}, n), {
                lang: c(i, s, void 0, o)
              })) : a
            }(t))
          } catch (n) {
            return new a(t)
          }
        }, a.prototype.toString = function() {
          return (0, s.default)(this).locale
        }, Object.defineProperty(a.prototype, "baseName", {
          get: function() {
            var a = (0, s.default)(this).locale;
            return (0, L.emitUnicodeLanguageId)((0, L.parseUnicodeLanguageId)(a))
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(a.prototype, "calendar", {
          get: function() {
            return (0, s.default)(this).calendar
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(a.prototype, "collation", {
          get: function() {
            return (0, s.default)(this).collation
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(a.prototype, "hourCycle", {
          get: function() {
            return (0, s.default)(this).hourCycle
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(a.prototype, "caseFirst", {
          get: function() {
            return (0, s.default)(this).caseFirst
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(a.prototype, "numeric", {
          get: function() {
            return (0, s.default)(this).numeric
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(a.prototype, "numberingSystem", {
          get: function() {
            return (0, s.default)(this).numberingSystem
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(a.prototype, "language", {
          get: function() {
            var a = (0, s.default)(this).locale;
            return (0, L.parseUnicodeLanguageId)(a).lang
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(a.prototype, "script", {
          get: function() {
            var a = (0, s.default)(this).locale;
            return (0, L.parseUnicodeLanguageId)(a).script
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(a.prototype, "region", {
          get: function() {
            var a = (0, s.default)(this).locale;
            return (0, L.parseUnicodeLanguageId)(a).region
          },
          enumerable: !1,
          configurable: !0
        }), a.prototype.getCalendars = function() {
          return h(this)
        }, Object.defineProperty(a.prototype, "calendars", {
          get: function() {
            return h(this)
          },
          enumerable: !1,
          configurable: !0
        }), a.prototype.getCollations = function() {
          return k(this)
        }, Object.defineProperty(a.prototype, "collations", {
          get: function() {
            return k(this)
          },
          enumerable: !1,
          configurable: !0
        }), a.prototype.getHourCycles = function() {
          if (void 0 === (0, s.default)(this).initializedLocale) throw new TypeError("Error uninitialized locale");
          return y(this)
        }, Object.defineProperty(a.prototype, "hourCycles", {
          get: function() {
            return y(this)
          },
          enumerable: !1,
          configurable: !0
        }), a.prototype.getNumberingSystems = function() {
          return f(this)
        }, Object.defineProperty(a.prototype, "numberingSystems", {
          get: function() {
            return f(this)
          },
          enumerable: !1,
          configurable: !0
        }), a.prototype.getTimeZones = function() {
          return p(this)
        }, Object.defineProperty(a.prototype, "timeZones", {
          get: function() {
            return p(this)
          },
          enumerable: !1,
          configurable: !0
        }), a.prototype.getTextInfo = function() {
          var a = Object.create(Object.prototype),
            t = D(this);
          return (0, i.defineProperty)(a, "direction", {
            value: t
          }), a
        }, Object.defineProperty(a.prototype, "textInfo", {
          get: function() {
            try {
              var a = Object.create(Object.prototype),
                t = D(this);
              return Object.defineProperty(a, "direction", {
                value: t,
                writable: !0,
                enumerable: !0,
                configurable: !0
              }), a
            } catch (a) {
              throw new TypeError("Error retrieving textInfo")
            }
          },
          enumerable: !1,
          configurable: !0
        }), a.prototype.getWeekInfo = function() {
          var a = Object.create(Object.prototype);
          if (void 0 === (0, s.default)(this).initializedLocale) throw new TypeError("Error uninitialized locale");
          var t = A(this),
            n = t.weekend;
          return (0, i.defineProperty)(a, "firstDay", {
            value: t.firstDay
          }), (0, i.defineProperty)(a, "weekend", {
            value: n
          }), (0, i.defineProperty)(a, "minimalDays", {
            value: t.minimalDays
          }), a
        }, Object.defineProperty(a.prototype, "weekInfo", {
          get: function() {
            try {
              var a = Object.create(Object.prototype),
                t = A(this),
                n = t.weekend;
              return Object.defineProperty(a, "firstDay", {
                value: t.firstDay,
                writable: !0,
                enumerable: !0,
                configurable: !0
              }), Object.defineProperty(a, "weekend", {
                value: n,
                writable: !0,
                enumerable: !0,
                configurable: !0
              }), Object.defineProperty(a, "minimalDays", {
                value: t.minimalDays,
                writable: !0,
                enumerable: !0,
                configurable: !0
              }), a
            } catch (a) {
              throw new TypeError("Error retrieving weekInfo")
            }
          },
          enumerable: !1,
          configurable: !0
        }), a.relevantExtensionKeys = m, a.polyfilled = !0, a
      }();
      t.Locale = w;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(w.prototype, Symbol.toStringTag, {
          value: "Intl.Locale",
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(w.prototype.constructor, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (a) {}
      t.default = w
    },
    41788: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.collations = void 0, t.collations = ["big5han", "compat", "dict", "direct", "ducet", "emoji", "eor", "gb2312", "phonebk", "phonetic", "pinyin", "reformed", "search", "searchjl", "standard", "stroke", "trad", "unihan", "zhuyin"]
    },
    44833: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.likelySubtags = void 0, t.likelySubtags = {
        aa: "aa-Latn-ET",
        aaa: "aaa-Latn-NG",
        aab: "aab-Latn-NG",
        aac: "aac-Latn-PG",
        aad: "aad-Latn-PG",
        aae: "aae-Latn-IT",
        "aae-Grek": "aae-Grek-IT",
        aaf: "aaf-Mlym-IN",
        "aaf-Arab": "aaf-Arab-IN",
        aag: "aag-Latn-PG",
        aah: "aah-Latn-PG",
        aai: "aai-Latn-ZZ",
        aak: "aak-Latn-ZZ",
        aal: "aal-Latn-CM",
        aan: "aan-Latn-BR",
        aao: "aao-Arab-DZ",
        aap: "aap-Latn-BR",
        aaq: "aaq-Latn-US",
        aas: "aas-Latn-TZ",
        aat: "aat-Grek-GR",
        aau: "aau-Latn-ZZ",
        aaw: "aaw-Latn-PG",
        aax: "aax-Latn-ID",
        aaz: "aaz-Latn-ID",
        ab: "ab-Cyrl-GE",
        aba: "aba-Latn-CI",
        abb: "abb-Latn-CM",
        abc: "abc-Latn-PH",
        abd: "abd-Latn-PH",
        abe: "abe-Latn-CA",
        abf: "abf-Latn-MY",
        abg: "abg-Latn-PG",
        abh: "abh-Arab-TJ",
        abi: "abi-Latn-ZZ",
        abl: "abl-Rjng-ID",
        "abl-Latn": "abl-Latn-ID",
        abm: "abm-Latn-NG",
        abn: "abn-Latn-NG",
        abo: "abo-Latn-NG",
        abp: "abp-Latn-PH",
        abq: "abq-Cyrl-ZZ",
        abr: "abr-Latn-GH",
        abs: "abs-Latn-ID",
        abt: "abt-Latn-ZZ",
        abu: "abu-Latn-CI",
        abv: "abv-Arab-BH",
        abw: "abw-Latn-PG",
        abx: "abx-Latn-PH",
        aby: "aby-Latn-ZZ",
        abz: "abz-Latn-ID",
        aca: "aca-Latn-CO",
        acb: "acb-Latn-NG",
        acd: "acd-Latn-ZZ",
        ace: "ace-Latn-ID",
        acf: "acf-Latn-LC",
        ach: "ach-Latn-UG",
        acm: "acm-Arab-IQ",
        acn: "acn-Latn-CN",
        acp: "acp-Latn-NG",
        acq: "acq-Arab-YE",
        acr: "acr-Latn-GT",
        acs: "acs-Latn-BR",
        act: "act-Latn-NL",
        acu: "acu-Latn-EC",
        acv: "acv-Latn-US",
        acw: "acw-Arab-SA",
        acx: "acx-Arab-OM",
        acy: "acy-Latn-CY",
        "acy-Arab": "acy-Arab-CY",
        "acy-Grek": "acy-Grek-CY",
        acz: "acz-Latn-SD",
        ada: "ada-Latn-GH",
        adb: "adb-Latn-TL",
        add: "add-Latn-CM",
        ade: "ade-Latn-ZZ",
        adf: "adf-Arab-OM",
        adg: "adg-Latn-AU",
        adh: "adh-Latn-UG",
        adi: "adi-Latn-IN",
        "adi-Tibt": "adi-Tibt-CN",
        adj: "adj-Latn-ZZ",
        adl: "adl-Latn-IN",
        adn: "adn-Latn-ID",
        ado: "ado-Latn-PG",
        adp: "adp-Tibt-BT",
        adq: "adq-Latn-GH",
        adr: "adr-Latn-ID",
        adt: "adt-Latn-AU",
        adu: "adu-Latn-NG",
        adw: "adw-Latn-BR",
        adx: "adx-Tibt-CN",
        ady: "ady-Cyrl-RU",
        adz: "adz-Latn-ZZ",
        ae: "ae-Avst-IR",
        aea: "aea-Latn-AU",
        aeb: "aeb-Arab-TN",
        aec: "aec-Arab-EG",
        aee: "aee-Arab-AF",
        aek: "aek-Latn-NC",
        ael: "ael-Latn-CM",
        aem: "aem-Latn-VN",
        aeq: "aeq-Arab-PK",
        aer: "aer-Latn-AU",
        aeu: "aeu-Latn-CN",
        aew: "aew-Latn-PG",
        aey: "aey-Latn-ZZ",
        aez: "aez-Latn-PG",
        af: "af-Latn-ZA",
        afb: "afb-Arab-KW",
        afd: "afd-Latn-PG",
        afe: "afe-Latn-NG",
        afh: "afh-Latn-GH",
        afi: "afi-Latn-PG",
        afk: "afk-Latn-PG",
        afn: "afn-Latn-NG",
        afo: "afo-Latn-NG",
        afp: "afp-Latn-PG",
        afs: "afs-Latn-MX",
        afu: "afu-Latn-GH",
        afz: "afz-Latn-ID",
        aga: "aga-Latn-PE",
        agb: "agb-Latn-NG",
        agc: "agc-Latn-ZZ",
        agd: "agd-Latn-ZZ",
        age: "age-Latn-PG",
        agf: "agf-Latn-ID",
        agg: "agg-Latn-ZZ",
        agh: "agh-Latn-CD",
        agi: "agi-Deva-IN",
        agj: "agj-Ethi-ET",
        "agj-Arab": "agj-Arab-ET",
        agk: "agk-Latn-PH",
        agl: "agl-Latn-PG",
        agm: "agm-Latn-ZZ",
        agn: "agn-Latn-PH",
        ago: "ago-Latn-ZZ",
        agq: "agq-Latn-CM",
        agr: "agr-Latn-PE",
        ags: "ags-Latn-CM",
        agt: "agt-Latn-PH",
        agu: "agu-Latn-GT",
        agv: "agv-Latn-PH",
        agw: "agw-Latn-SB",
        agx: "agx-Cyrl-RU",
        agy: "agy-Latn-PH",
        agz: "agz-Latn-PH",
        aha: "aha-Latn-ZZ",
        ahb: "ahb-Latn-VU",
        ahg: "ahg-Ethi-ET",
        ahh: "ahh-Latn-ID",
        ahi: "ahi-Latn-CI",
        ahk: "ahk-Latn-MM",
        "ahk-Mymr": "ahk-Mymr-MM",
        "ahk-TH": "ahk-Latn-TH",
        "ahk-Thai": "ahk-Thai-TH",
        ahl: "ahl-Latn-ZZ",
        ahm: "ahm-Latn-CI",
        ahn: "ahn-Latn-NG",
        aho: "aho-Ahom-IN",
        ahp: "ahp-Latn-CI",
        ahr: "ahr-Deva-IN",
        ahs: "ahs-Latn-NG",
        aht: "aht-Latn-US",
        aia: "aia-Latn-SB",
        aib: "aib-Arab-CN",
        aic: "aic-Latn-PG",
        aid: "aid-Latn-AU",
        aie: "aie-Latn-PG",
        aif: "aif-Latn-PG",
        aig: "aig-Latn-AG",
        aij: "aij-Hebr-IL",
        aik: "aik-Latn-NG",
        ail: "ail-Latn-PG",
        aim: "aim-Latn-IN",
        ain: "ain-Kana-JP",
        "ain-Latn": "ain-Latn-JP",
        aio: "aio-Mymr-IN",
        aip: "aip-Latn-ID",
        aiq: "aiq-Arab-AF",
        air: "air-Latn-ID",
        ait: "ait-Latn-BR",
        aiw: "aiw-Latn-ET",
        "aiw-Arab": "aiw-Arab-ET",
        "aiw-Ethi": "aiw-Ethi-ET",
        aix: "aix-Latn-PG",
        aiy: "aiy-Latn-CF",
        aja: "aja-Latn-SS",
        ajg: "ajg-Latn-ZZ",
        aji: "aji-Latn-NC",
        ajn: "ajn-Latn-AU",
        ajp: "ajp-Arab-JO",
        ajt: "ajt-Arab-TN",
        ajw: "ajw-Latn-NG",
        ajz: "ajz-Latn-IN",
        ak: "ak-Latn-GH",
        akb: "akb-Latn-ID",
        "akb-Batk": "akb-Batk-ID",
        akc: "akc-Latn-ID",
        akd: "akd-Latn-NG",
        ake: "ake-Latn-GY",
        akf: "akf-Latn-NG",
        akg: "akg-Latn-ID",
        akh: "akh-Latn-PG",
        aki: "aki-Latn-PG",
        akk: "akk-Xsux-IQ",
        akl: "akl-Latn-PH",
        ako: "ako-Latn-SR",
        akp: "akp-Latn-GH",
        akq: "akq-Latn-PG",
        akr: "akr-Latn-VU",
        aks: "aks-Latn-TG",
        akt: "akt-Latn-PG",
        aku: "aku-Latn-CM",
        akv: "akv-Cyrl-RU",
        akw: "akw-Latn-CG",
        akz: "akz-Latn-US",
        ala: "ala-Latn-ZZ",
        alc: "alc-Latn-CL",
        ald: "ald-Latn-CI",
        ale: "ale-Latn-US",
        alf: "alf-Latn-NG",
        alh: "alh-Latn-AU",
        ali: "ali-Latn-ZZ",
        alj: "alj-Latn-PH",
        alk: "alk-Laoo-LA",
        all: "all-Mlym-IN",
        alm: "alm-Latn-VU",
        aln: "aln-Latn-XK",
        alo: "alo-Latn-ID",
        alp: "alp-Latn-ID",
        alq: "alq-Latn-CA",
        alr: "alr-Cyrl-RU",
        alt: "alt-Cyrl-RU",
        alu: "alu-Latn-SB",
        alw: "alw-Ethi-ET",
        alx: "alx-Latn-PG",
        aly: "aly-Latn-AU",
        alz: "alz-Latn-CD",
        am: "am-Ethi-ET",
        ama: "ama-Latn-BR",
        amb: "amb-Latn-NG",
        amc: "amc-Latn-PE",
        ame: "ame-Latn-PE",
        amf: "amf-Latn-ET",
        "amf-Ethi": "amf-Ethi-ET",
        amg: "amg-Latn-AU",
        ami: "ami-Latn-TW",
        amj: "amj-Latn-TD",
        amk: "amk-Latn-ID",
        amm: "amm-Latn-ZZ",
        amn: "amn-Latn-ZZ",
        amo: "amo-Latn-NG",
        amp: "amp-Latn-ZZ",
        amq: "amq-Latn-ID",
        amr: "amr-Latn-PE",
        ams: "ams-Jpan-JP",
        amt: "amt-Latn-PG",
        amu: "amu-Latn-MX",
        amv: "amv-Latn-ID",
        amw: "amw-Syrc-SY",
        "amw-Arab": "amw-Arab-SY",
        "amw-Armi": "amw-Armi-SY",
        "amw-Latn": "amw-Latn-SY",
        amx: "amx-Latn-AU",
        amy: "amy-Latn-AU",
        amz: "amz-Latn-AU",
        an: "an-Latn-ES",
        ana: "ana-Latn-CO",
        anb: "anb-Latn-PE",
        anc: "anc-Latn-ZZ",
        and: "and-Latn-ID",
        ane: "ane-Latn-NC",
        anf: "anf-Latn-GH",
        ang: "ang-Latn-GB",
        anh: "anh-Latn-PG",
        ani: "ani-Cyrl-RU",
        anj: "anj-Latn-PG",
        ank: "ank-Latn-ZZ",
        anl: "anl-Latn-MM",
        anm: "anm-Latn-IN",
        ann: "ann-Latn-NG",
        ano: "ano-Latn-CO",
        anp: "anp-Deva-IN",
        anr: "anr-Deva-IN",
        ans: "ans-Latn-CO",
        ant: "ant-Latn-AU",
        anu: "anu-Ethi-ET",
        "anu-Arab": "anu-Arab-SS",
        "anu-Latn": "anu-Latn-SS",
        anv: "anv-Latn-CM",
        anw: "anw-Latn-NG",
        anx: "anx-Latn-PG",
        any: "any-Latn-ZZ",
        anz: "anz-Latn-PG",
        aoa: "aoa-Latn-ST",
        aob: "aob-Latn-PG",
        aoc: "aoc-Latn-VE",
        aod: "aod-Latn-PG",
        aoe: "aoe-Latn-PG",
        aof: "aof-Latn-PG",
        aog: "aog-Latn-PG",
        aoi: "aoi-Latn-AU",
        aoj: "aoj-Latn-ZZ",
        aok: "aok-Latn-NC",
        aol: "aol-Latn-ID",
        aom: "aom-Latn-ZZ",
        aon: "aon-Latn-PG",
        aor: "aor-Latn-VU",
        aos: "aos-Latn-ID",
        aot: "aot-Beng-BD",
        "aot-Latn": "aot-Latn-IN",
        aox: "aox-Latn-GY",
        aoz: "aoz-Latn-ID",
        apb: "apb-Latn-SB",
        apc: "apc-Arab-SY",
        apd: "apd-Arab-TG",
        ape: "ape-Latn-ZZ",
        apf: "apf-Latn-PH",
        apg: "apg-Latn-ID",
        aph: "aph-Deva-NP",
        api: "api-Latn-BR",
        apj: "apj-Latn-US",
        apk: "apk-Latn-US",
        apl: "apl-Latn-US",
        apm: "apm-Latn-US",
        apn: "apn-Latn-BR",
        apo: "apo-Latn-PG",
        app: "app-Latn-VU",
        apr: "apr-Latn-ZZ",
        aps: "aps-Latn-ZZ",
        apt: "apt-Latn-IN",
        apu: "apu-Latn-BR",
        apv: "apv-Latn-BR",
        apw: "apw-Latn-US",
        apx: "apx-Latn-ID",
        apy: "apy-Latn-BR",
        apz: "apz-Latn-ZZ",
        aqc: "aqc-Cyrl-RU",
        aqd: "aqd-Latn-ML",
        aqg: "aqg-Latn-NG",
        aqk: "aqk-Latn-NG",
        aqm: "aqm-Latn-ID",
        aqn: "aqn-Latn-PH",
        aqr: "aqr-Latn-NC",
        aqt: "aqt-Latn-PY",
        aqz: "aqz-Latn-BR",
        ar: "ar-Arab-EG",
        arc: "arc-Armi-IR",
        "arc-Nbat": "arc-Nbat-JO",
        "arc-Palm": "arc-Palm-SY",
        ard: "ard-Latn-AU",
        are: "are-Latn-AU",
        arh: "arh-Latn-ZZ",
        ari: "ari-Latn-US",
        arj: "arj-Latn-BR",
        ark: "ark-Latn-BR",
        arl: "arl-Latn-PE",
        arn: "arn-Latn-CL",
        aro: "aro-Latn-BO",
        arp: "arp-Latn-US",
        arq: "arq-Arab-DZ",
        arr: "arr-Latn-BR",
        ars: "ars-Arab-SA",
        aru: "aru-Latn-BR",
        arw: "arw-Latn-SR",
        arx: "arx-Latn-BR",
        ary: "ary-Arab-MA",
        arz: "arz-Arab-EG",
        as: "as-Beng-IN",
        asa: "asa-Latn-TZ",
        asb: "asb-Latn-CA",
        asc: "asc-Latn-ID",
        ase: "ase-Sgnw-US",
        asg: "asg-Latn-ZZ",
        ash: "ash-Latn-PE",
        asi: "asi-Latn-ID",
        asj: "asj-Latn-CM",
        ask: "ask-Arab-AF",
        asl: "asl-Latn-ID",
        asn: "asn-Latn-BR",
        aso: "aso-Latn-ZZ",
        ass: "ass-Latn-CM",
        ast: "ast-Latn-ES",
        asu: "asu-Latn-BR",
        asv: "asv-Latn-CD",
        asx: "asx-Latn-PG",
        asy: "asy-Latn-ID",
        asz: "asz-Latn-ID",
        ata: "ata-Latn-ZZ",
        atb: "atb-Latn-CN",
        "atb-Lisu": "atb-Lisu-CN",
        atc: "atc-Latn-PE",
        atd: "atd-Latn-PH",
        ate: "ate-Latn-PG",
        atg: "atg-Latn-ZZ",
        ati: "ati-Latn-CI",
        atj: "atj-Latn-CA",
        atk: "atk-Latn-PH",
        atl: "atl-Latn-PH",
        atm: "atm-Latn-PH",
        atn: "atn-Arab-IR",
        ato: "ato-Latn-CM",
        atp: "atp-Latn-PH",
        atq: "atq-Latn-ID",
        atr: "atr-Latn-BR",
        ats: "ats-Latn-US",
        att: "att-Latn-PH",
        atu: "atu-Latn-SS",
        atv: "atv-Cyrl-RU",
        atw: "atw-Latn-US",
        atx: "atx-Latn-BR",
        aty: "aty-Latn-VU",
        atz: "atz-Latn-PH",
        aua: "aua-Latn-SB",
        auc: "auc-Latn-EC",
        aud: "aud-Latn-SB",
        aug: "aug-Latn-BJ",
        auh: "auh-Latn-ZM",
        aui: "aui-Latn-PG",
        auj: "auj-Arab-LY",
        "auj-Latn": "auj-Latn-LY",
        "auj-Tfng": "auj-Tfng-LY",
        auk: "auk-Latn-PG",
        aul: "aul-Latn-VU",
        aum: "aum-Latn-NG",
        aun: "aun-Latn-PG",
        auo: "auo-Latn-NG",
        aup: "aup-Latn-PG",
        auq: "auq-Latn-ID",
        aur: "aur-Latn-PG",
        aut: "aut-Latn-PF",
        auu: "auu-Latn-ID",
        auw: "auw-Latn-ID",
        auy: "auy-Latn-ZZ",
        auz: "auz-Arab-UZ",
        av: "av-Cyrl-RU",
        avb: "avb-Latn-PG",
        avd: "avd-Arab-IR",
        avi: "avi-Latn-CI",
        avk: "avk-Latn-001",
        avl: "avl-Arab-ZZ",
        avm: "avm-Latn-AU",
        avn: "avn-Latn-ZZ",
        avo: "avo-Latn-BR",
        avs: "avs-Latn-PE",
        avt: "avt-Latn-ZZ",
        avu: "avu-Latn-ZZ",
        avv: "avv-Latn-BR",
        awa: "awa-Deva-IN",
        awb: "awb-Latn-ZZ",
        awc: "awc-Latn-NG",
        awe: "awe-Latn-BR",
        awg: "awg-Latn-AU",
        awh: "awh-Latn-ID",
        awi: "awi-Latn-PG",
        awk: "awk-Latn-AU",
        awm: "awm-Latn-PG",
        awn: "awn-Ethi-ET",
        awo: "awo-Latn-ZZ",
        awr: "awr-Latn-ID",
        aws: "aws-Latn-ID",
        awt: "awt-Latn-BR",
        awu: "awu-Latn-ID",
        awv: "awv-Latn-ID",
        aww: "aww-Latn-PG",
        awx: "awx-Latn-ZZ",
        awy: "awy-Latn-ID",
        axb: "axb-Latn-AR",
        axe: "axe-Latn-AU",
        axg: "axg-Latn-BR",
        axk: "axk-Latn-CF",
        axl: "axl-Latn-AU",
        axm: "axm-Armn-AM",
        axx: "axx-Latn-NC",
        ay: "ay-Latn-BO",
        aya: "aya-Latn-PG",
        ayb: "ayb-Latn-ZZ",
        ayc: "ayc-Latn-PE",
        ayd: "ayd-Latn-AU",
        aye: "aye-Latn-NG",
        ayg: "ayg-Latn-TG",
        ayh: "ayh-Arab-YE",
        ayi: "ayi-Latn-NG",
        ayk: "ayk-Latn-NG",
        ayl: "ayl-Arab-LY",
        ayn: "ayn-Arab-YE",
        ayo: "ayo-Latn-PY",
        ayp: "ayp-Arab-IQ",
        ayq: "ayq-Latn-PG",
        ays: "ays-Latn-PH",
        ayt: "ayt-Latn-PH",
        ayu: "ayu-Latn-NG",
        ayz: "ayz-Latn-ID",
        az: "az-Latn-AZ",
        "az-Arab": "az-Arab-IR",
        "az-IQ": "az-Arab-IQ",
        "az-IR": "az-Arab-IR",
        "az-RU": "az-Cyrl-RU",
        azb: "azb-Arab-IR",
        "azb-Cyrl": "azb-Cyrl-AZ",
        "azb-Latn": "azb-Latn-AZ",
        azd: "azd-Latn-MX",
        azg: "azg-Latn-MX",
        azm: "azm-Latn-MX",
        azn: "azn-Latn-MX",
        azo: "azo-Latn-CM",
        azt: "azt-Latn-PH",
        azz: "azz-Latn-MX",
        ba: "ba-Cyrl-RU",
        baa: "baa-Latn-SB",
        bab: "bab-Latn-GW",
        bac: "bac-Latn-ID",
        bae: "bae-Latn-VE",
        baf: "baf-Latn-CM",
        bag: "bag-Latn-CM",
        bah: "bah-Latn-BS",
        baj: "baj-Latn-ID",
        bal: "bal-Arab-PK",
        ban: "ban-Latn-ID",
        bao: "bao-Latn-CO",
        bap: "bap-Deva-NP",
        bar: "bar-Latn-AT",
        bas: "bas-Latn-CM",
        bau: "bau-Latn-NG",
        bav: "bav-Latn-ZZ",
        baw: "baw-Latn-CM",
        bax: "bax-Bamu-CM",
        bay: "bay-Latn-ID",
        bba: "bba-Latn-ZZ",
        bbb: "bbb-Latn-ZZ",
        bbc: "bbc-Latn-ID",
        bbd: "bbd-Latn-ZZ",
        bbe: "bbe-Latn-CD",
        bbf: "bbf-Latn-PG",
        bbg: "bbg-Latn-GA",
        bbi: "bbi-Latn-CM",
        bbj: "bbj-Latn-CM",
        bbk: "bbk-Latn-CM",
        bbl: "bbl-Geor-GE",
        bbm: "bbm-Latn-CD",
        bbn: "bbn-Latn-PG",
        bbo: "bbo-Latn-BF",
        bbp: "bbp-Latn-ZZ",
        bbq: "bbq-Latn-CM",
        bbr: "bbr-Latn-ZZ",
        bbs: "bbs-Latn-NG",
        bbt: "bbt-Latn-NG",
        bbu: "bbu-Latn-NG",
        bbv: "bbv-Latn-PG",
        bbw: "bbw-Latn-CM",
        bbx: "bbx-Latn-CM",
        bby: "bby-Latn-CM",
        bca: "bca-Latn-CN",
        "bca-Hani": "bca-Hani-CN",
        bcb: "bcb-Latn-SN",
        bcd: "bcd-Latn-ID",
        bce: "bce-Latn-CM",
        bcf: "bcf-Latn-ZZ",
        bcg: "bcg-Latn-GN",
        bch: "bch-Latn-ZZ",
        bci: "bci-Latn-CI",
        bcj: "bcj-Latn-AU",
        bck: "bck-Latn-AU",
        bcm: "bcm-Latn-ZZ",
        bcn: "bcn-Latn-ZZ",
        bco: "bco-Latn-ZZ",
        bcp: "bcp-Latn-CD",
        bcq: "bcq-Ethi-ZZ",
        bcr: "bcr-Latn-CA",
        bcs: "bcs-Latn-NG",
        bct: "bct-Latn-CD",
        bcu: "bcu-Latn-ZZ",
        bcv: "bcv-Latn-NG",
        bcw: "bcw-Latn-CM",
        bcy: "bcy-Latn-NG",
        bcz: "bcz-Latn-SN",
        bda: "bda-Latn-SN",
        bdb: "bdb-Latn-ID",
        bdc: "bdc-Latn-CO",
        bdd: "bdd-Latn-ZZ",
        bde: "bde-Latn-NG",
        bdf: "bdf-Latn-PG",
        bdg: "bdg-Latn-MY",
        bdh: "bdh-Latn-SS",
        bdi: "bdi-Latn-SD",
        bdj: "bdj-Latn-SS",
        bdk: "bdk-Latn-AZ",
        bdl: "bdl-Latn-ID",
        bdm: "bdm-Latn-TD",
        bdn: "bdn-Latn-CM",
        bdo: "bdo-Latn-TD",
        bdp: "bdp-Latn-TZ",
        bdq: "bdq-Latn-VN",
        bdr: "bdr-Latn-MY",
        bds: "bds-Latn-TZ",
        bdt: "bdt-Latn-CF",
        bdu: "bdu-Latn-CM",
        bdv: "bdv-Orya-IN",
        bdw: "bdw-Latn-ID",
        bdx: "bdx-Latn-ID",
        bdy: "bdy-Latn-AU",
        bdz: "bdz-Arab-PK",
        be: "be-Cyrl-BY",
        bea: "bea-Latn-CA",
        "bea-Cans": "bea-Cans-CA",
        beb: "beb-Latn-CM",
        bec: "bec-Latn-CM",
        bed: "bed-Latn-ID",
        bee: "bee-Deva-IN",
        bef: "bef-Latn-ZZ",
        beh: "beh-Latn-ZZ",
        bei: "bei-Latn-ID",
        bej: "bej-Arab-SD",
        bek: "bek-Latn-PG",
        bem: "bem-Latn-ZM",
        beo: "beo-Latn-PG",
        bep: "bep-Latn-ID",
        beq: "beq-Latn-CG",
        bes: "bes-Latn-TD",
        bet: "bet-Latn-ZZ",
        beu: "beu-Latn-ID",
        bev: "bev-Latn-CI",
        bew: "bew-Latn-ID",
        bex: "bex-Latn-ZZ",
        bey: "bey-Latn-PG",
        bez: "bez-Latn-TZ",
        bfa: "bfa-Latn-SS",
        "bfa-Arab": "bfa-Arab-SS",
        bfb: "bfb-Deva-IN",
        bfc: "bfc-Latn-CN",
        bfd: "bfd-Latn-CM",
        bfe: "bfe-Latn-ID",
        bff: "bff-Latn-CF",
        bfg: "bfg-Latn-ID",
        bfh: "bfh-Latn-PG",
        bfj: "bfj-Latn-CM",
        bfl: "bfl-Latn-CF",
        bfm: "bfm-Latn-CM",
        bfn: "bfn-Latn-TL",
        bfo: "bfo-Latn-BF",
        bfp: "bfp-Latn-CM",
        bfq: "bfq-Taml-IN",
        bfs: "bfs-Latn-CN",
        "bfs-Hani": "bfs-Hani-CN",
        bft: "bft-Arab-PK",
        bfu: "bfu-Tibt-IN",
        "bfu-Takr": "bfu-Takr-IN",
        bfw: "bfw-Orya-IN",
        bfx: "bfx-Latn-PH",
        bfy: "bfy-Deva-IN",
        bfz: "bfz-Deva-IN",
        bg: "bg-Cyrl-BG",
        bga: "bga-Latn-NG",
        bgb: "bgb-Latn-ID",
        bgc: "bgc-Deva-IN",
        bgd: "bgd-Deva-IN",
        bgf: "bgf-Latn-CM",
        bgg: "bgg-Latn-IN",
        bgi: "bgi-Latn-PH",
        bgj: "bgj-Latn-CM",
        bgn: "bgn-Arab-PK",
        bgo: "bgo-Latn-GN",
        bgp: "bgp-Arab-PK",
        bgq: "bgq-Deva-IN",
        bgr: "bgr-Latn-IN",
        bgs: "bgs-Latn-PH",
        bgt: "bgt-Latn-SB",
        bgu: "bgu-Latn-NG",
        bgv: "bgv-Latn-ID",
        bgw: "bgw-Deva-IN",
        bgx: "bgx-Grek-TR",
        bgy: "bgy-Latn-ID",
        bgz: "bgz-Latn-ID",
        bha: "bha-Deva-IN",
        bhb: "bhb-Deva-IN",
        bhc: "bhc-Latn-ID",
        bhd: "bhd-Deva-IN",
        "bhd-Arab": "bhd-Arab-IN",
        "bhd-Takr": "bhd-Takr-IN",
        bhe: "bhe-Arab-PK",
        bhf: "bhf-Latn-PG",
        bhg: "bhg-Latn-ZZ",
        bhh: "bhh-Cyrl-IL",
        "bhh-Hebr": "bhh-Hebr-IL",
        "bhh-Latn": "bhh-Latn-IL",
        bhi: "bhi-Deva-IN",
        bhj: "bhj-Deva-NP",
        bhl: "bhl-Latn-ZZ",
        bhm: "bhm-Arab-OM",
        bhn: "bhn-Syrc-GE",
        bho: "bho-Deva-IN",
        bhp: "bhp-Latn-ID",
        bhq: "bhq-Latn-ID",
        bhr: "bhr-Latn-MG",
        bhs: "bhs-Latn-CM",
        bht: "bht-Takr-IN",
        "bht-Deva": "bht-Deva-IN",
        "bht-Latn": "bht-Latn-IN",
        bhu: "bhu-Deva-IN",
        bhv: "bhv-Latn-ID",
        bhw: "bhw-Latn-ID",
        bhy: "bhy-Latn-ZZ",
        bhz: "bhz-Latn-ID",
        bi: "bi-Latn-VU",
        bia: "bia-Latn-AU",
        bib: "bib-Latn-ZZ",
        bid: "bid-Latn-TD",
        bie: "bie-Latn-PG",
        bif: "bif-Latn-GW",
        big: "big-Latn-ZZ",
        bik: "bik-Latn-PH",
        bil: "bil-Latn-NG",
        bim: "bim-Latn-ZZ",
        bin: "bin-Latn-NG",
        bio: "bio-Latn-ZZ",
        bip: "bip-Latn-CD",
        biq: "biq-Latn-ZZ",
        bir: "bir-Latn-PG",
        bit: "bit-Latn-PG",
        biu: "biu-Latn-IN",
        biv: "biv-Latn-GH",
        biw: "biw-Latn-CM",
        biy: "biy-Deva-IN",
        biz: "biz-Latn-CD",
        bja: "bja-Latn-CD",
        bjb: "bjb-Latn-AU",
        bjc: "bjc-Latn-PG",
        bjf: "bjf-Syrc-IL",
        bjg: "bjg-Latn-GW",
        bjh: "bjh-Latn-ZZ",
        bji: "bji-Ethi-ZZ",
        bjj: "bjj-Deva-IN",
        bjk: "bjk-Latn-PG",
        bjl: "bjl-Latn-PG",
        bjm: "bjm-Arab-IQ",
        bjn: "bjn-Latn-ID",
        bjo: "bjo-Latn-ZZ",
        bjp: "bjp-Latn-PG",
        bjr: "bjr-Latn-ZZ",
        bjs: "bjs-Latn-BB",
        bjt: "bjt-Latn-SN",
        bju: "bju-Latn-CM",
        bjv: "bjv-Latn-TD",
        bjw: "bjw-Latn-CI",
        bjx: "bjx-Latn-PH",
        bjy: "bjy-Latn-AU",
        bjz: "bjz-Latn-ZZ",
        bka: "bka-Latn-NG",
        bkc: "bkc-Latn-ZZ",
        bkd: "bkd-Latn-PH",
        bkf: "bkf-Latn-CD",
        bkg: "bkg-Latn-CF",
        bkh: "bkh-Latn-CM",
        bki: "bki-Latn-VU",
        bkj: "bkj-Latn-CF",
        bkl: "bkl-Latn-ID",
        bkm: "bkm-Latn-CM",
        bkn: "bkn-Latn-ID",
        bko: "bko-Latn-CM",
        bkp: "bkp-Latn-CD",
        bkq: "bkq-Latn-ZZ",
        bkr: "bkr-Latn-ID",
        bks: "bks-Latn-PH",
        bkt: "bkt-Latn-CD",
        bku: "bku-Latn-PH",
        bkv: "bkv-Latn-ZZ",
        bkw: "bkw-Latn-CG",
        bkx: "bkx-Latn-TL",
        bky: "bky-Latn-NG",
        bkz: "bkz-Latn-ID",
        bla: "bla-Latn-CA",
        blb: "blb-Latn-SB",
        blc: "blc-Latn-CA",
        bld: "bld-Latn-ID",
        ble: "ble-Latn-GW",
        blf: "blf-Latn-ID",
        blg: "blg-Latn-MY",
        blh: "blh-Latn-LR",
        bli: "bli-Latn-CD",
        blj: "blj-Latn-ID",
        blk: "blk-Mymr-MM",
        blm: "blm-Latn-SS",
        bln: "bln-Latn-PH",
        blo: "blo-Latn-BJ",
        blp: "blp-Latn-SB",
        blq: "blq-Latn-PG",
        blr: "blr-Latn-CN",
        "blr-Tale": "blr-Tale-CN",
        "blr-Thai": "blr-Thai-TH",
        bls: "bls-Latn-ID",
        blt: "blt-Tavt-VN",
        blv: "blv-Latn-AO",
        blw: "blw-Latn-PH",
        blx: "blx-Latn-PH",
        bly: "bly-Latn-BJ",
        blz: "blz-Latn-ID",
        bm: "bm-Latn-ML",
        bma: "bma-Latn-NG",
        bmb: "bmb-Latn-CD",
        bmc: "bmc-Latn-PG",
        bmd: "bmd-Latn-GN",
        bme: "bme-Latn-CF",
        bmf: "bmf-Latn-SL",
        bmg: "bmg-Latn-CD",
        bmh: "bmh-Latn-ZZ",
        bmi: "bmi-Latn-TD",
        bmj: "bmj-Deva-NP",
        bmk: "bmk-Latn-ZZ",
        bml: "bml-Latn-CD",
        bmm: "bmm-Latn-MG",
        bmn: "bmn-Latn-PG",
        bmo: "bmo-Latn-CM",
        bmp: "bmp-Latn-PG",
        bmq: "bmq-Latn-ML",
        bmr: "bmr-Latn-CO",
        bms: "bms-Latn-NE",
        bmu: "bmu-Latn-ZZ",
        bmv: "bmv-Latn-CM",
        bmw: "bmw-Latn-CG",
        bmx: "bmx-Latn-PG",
        bmz: "bmz-Latn-PG",
        bn: "bn-Beng-BD",
        bna: "bna-Latn-ID",
        bnb: "bnb-Latn-MY",
        bnc: "bnc-Latn-PH",
        bnd: "bnd-Latn-ID",
        bne: "bne-Latn-ID",
        bnf: "bnf-Latn-ID",
        bng: "bng-Latn-ZZ",
        bni: "bni-Latn-CD",
        bnj: "bnj-Latn-PH",
        bnk: "bnk-Latn-VU",
        bnm: "bnm-Latn-ZZ",
        bnn: "bnn-Latn-TW",
        bno: "bno-Latn-PH",
        bnp: "bnp-Latn-ZZ",
        bnq: "bnq-Latn-ID",
        bnr: "bnr-Latn-VU",
        bns: "bns-Deva-IN",
        bnu: "bnu-Latn-ID",
        bnv: "bnv-Latn-ID",
        bnw: "bnw-Latn-PG",
        bnx: "bnx-Latn-CD",
        bny: "bny-Latn-MY",
        bnz: "bnz-Latn-CM",
        bo: "bo-Tibt-CN",
        boa: "boa-Latn-PE",
        bob: "bob-Latn-KE",
        boe: "boe-Latn-CM",
        bof: "bof-Latn-BF",
        boh: "boh-Latn-CD",
        boj: "boj-Latn-ZZ",
        bok: "bok-Latn-CG",
        bol: "bol-Latn-NG",
        bom: "bom-Latn-ZZ",
        bon: "bon-Latn-ZZ",
        boo: "boo-Latn-ML",
        bop: "bop-Latn-PG",
        boq: "boq-Latn-PG",
        bor: "bor-Latn-BR",
        bot: "bot-Latn-SS",
        bou: "bou-Latn-TZ",
        bov: "bov-Latn-GH",
        bow: "bow-Latn-PG",
        box: "box-Latn-BF",
        boy: "boy-Latn-CF",
        boz: "boz-Latn-ML",
        "boz-Arab": "boz-Arab-ML",
        bpa: "bpa-Latn-VU",
        bpc: "bpc-Latn-CM",
        bpd: "bpd-Latn-CF",
        bpe: "bpe-Latn-PG",
        bpg: "bpg-Latn-ID",
        bph: "bph-Cyrl-RU",
        bpi: "bpi-Latn-PG",
        bpj: "bpj-Latn-CD",
        bpk: "bpk-Latn-NC",
        bpl: "bpl-Latn-AU",
        bpm: "bpm-Latn-PG",
        bpo: "bpo-Latn-ID",
        bpp: "bpp-Latn-ID",
        bpq: "bpq-Latn-ID",
        bpr: "bpr-Latn-PH",
        bps: "bps-Latn-PH",
        bpt: "bpt-Latn-AU",
        bpu: "bpu-Latn-PG",
        bpv: "bpv-Latn-ID",
        bpw: "bpw-Latn-PG",
        bpx: "bpx-Deva-IN",
        bpy: "bpy-Beng-IN",
        bpz: "bpz-Latn-ID",
        bqa: "bqa-Latn-BJ",
        bqb: "bqb-Latn-ID",
        bqc: "bqc-Latn-ZZ",
        bqd: "bqd-Latn-CM",
        bqf: "bqf-Latn-GN",
        "bqf-Arab": "bqf-Arab-GN",
        bqg: "bqg-Latn-TG",
        bqi: "bqi-Arab-IR",
        bqj: "bqj-Latn-SN",
        bqk: "bqk-Latn-CF",
        bql: "bql-Latn-PG",
        bqm: "bqm-Latn-CM",
        bqo: "bqo-Latn-CM",
        bqp: "bqp-Latn-ZZ",
        bqq: "bqq-Latn-ID",
        bqr: "bqr-Latn-ID",
        bqs: "bqs-Latn-PG",
        bqt: "bqt-Latn-CM",
        bqu: "bqu-Latn-CD",
        bqv: "bqv-Latn-CI",
        bqw: "bqw-Latn-NG",
        bqx: "bqx-Latn-NG",
        bqz: "bqz-Latn-CM",
        br: "br-Latn-FR",
        bra: "bra-Deva-IN",
        brb: "brb-Khmr-KH",
        "brb-Laoo": "brb-Laoo-LA",
        "brb-Latn": "brb-Latn-VN",
        brc: "brc-Latn-GY",
        brd: "brd-Deva-NP",
        brf: "brf-Latn-CD",
        brg: "brg-Latn-BO",
        brh: "brh-Arab-PK",
        bri: "bri-Latn-CM",
        brj: "brj-Latn-VU",
        brk: "brk-Arab-SD",
        brl: "brl-Latn-BW",
        brm: "brm-Latn-CD",
        brn: "brn-Latn-CR",
        brp: "brp-Latn-ID",
        brq: "brq-Latn-PG",
        brr: "brr-Latn-SB",
        brs: "brs-Latn-ID",
        brt: "brt-Latn-NG",
        bru: "bru-Latn-VN",
        "bru-Laoo": "bru-Laoo-LA",
        "bru-Thai": "bru-Thai-LA",
        brv: "brv-Laoo-LA",
        brx: "brx-Deva-IN",
        bry: "bry-Latn-PG",
        brz: "brz-Latn-ZZ",
        bs: "bs-Latn-BA",
        bsa: "bsa-Latn-ID",
        bsb: "bsb-Latn-BN",
        bsc: "bsc-Latn-SN",
        bse: "bse-Latn-CM",
        bsf: "bsf-Latn-NG",
        bsh: "bsh-Arab-AF",
        bsi: "bsi-Latn-CM",
        bsj: "bsj-Latn-ZZ",
        bsk: "bsk-Arab-PK",
        "bsk-Latn": "bsk-Latn-PK",
        bsl: "bsl-Latn-NG",
        bsm: "bsm-Latn-ID",
        bsn: "bsn-Latn-CO",
        bso: "bso-Latn-TD",
        bsp: "bsp-Latn-GN",
        bsq: "bsq-Bass-LR",
        bsr: "bsr-Latn-NG",
        bss: "bss-Latn-CM",
        bst: "bst-Ethi-ZZ",
        bsu: "bsu-Latn-ID",
        bsv: "bsv-Latn-GN",
        "bsv-Arab": "bsv-Arab-GN",
        bsw: "bsw-Latn-ET",
        "bsw-Ethi": "bsw-Ethi-ET",
        bsx: "bsx-Latn-NG",
        bsy: "bsy-Latn-MY",
        bta: "bta-Latn-NG",
        btc: "btc-Latn-CM",
        btd: "btd-Batk-ID",
        bte: "bte-Latn-NG",
        btf: "btf-Latn-TD",
        btg: "btg-Latn-CI",
        bth: "bth-Latn-MY",
        bti: "bti-Latn-ID",
        btj: "btj-Latn-ID",
        btm: "btm-Batk-ID",
        btn: "btn-Latn-PH",
        bto: "bto-Latn-PH",
        btp: "btp-Latn-PG",
        btq: "btq-Latn-MY",
        btr: "btr-Latn-VU",
        bts: "bts-Latn-ID",
        "bts-Batk": "bts-Batk-ID",
        btt: "btt-Latn-ZZ",
        btu: "btu-Latn-NG",
        btv: "btv-Deva-PK",
        btw: "btw-Latn-PH",
        btx: "btx-Latn-ID",
        "btx-Batk": "btx-Batk-ID",
        bty: "bty-Latn-ID",
        btz: "btz-Latn-ID",
        bua: "bua-Cyrl-RU",
        bub: "bub-Latn-TD",
        buc: "buc-Latn-YT",
        bud: "bud-Latn-ZZ",
        bue: "bue-Latn-CA",
        buf: "buf-Latn-CD",
        bug: "bug-Latn-ID",
        buh: "buh-Latn-CN",
        bui: "bui-Latn-CG",
        buj: "buj-Latn-NG",
        buk: "buk-Latn-ZZ",
        bum: "bum-Latn-CM",
        bun: "bun-Latn-SL",
        buo: "buo-Latn-ZZ",
        bup: "bup-Latn-ID",
        buq: "buq-Latn-PG",
        bus: "bus-Latn-ZZ",
        but: "but-Latn-PG",
        buu: "buu-Latn-ZZ",
        buv: "buv-Latn-PG",
        buw: "buw-Latn-GA",
        bux: "bux-Latn-NG",
        buy: "buy-Latn-SL",
        buz: "buz-Latn-NG",
        bva: "bva-Latn-TD",
        bvb: "bvb-Latn-GQ",
        bvc: "bvc-Latn-SB",
        bvd: "bvd-Latn-SB",
        bve: "bve-Latn-ID",
        bvf: "bvf-Latn-TD",
        bvg: "bvg-Latn-CM",
        bvh: "bvh-Latn-NG",
        bvi: "bvi-Latn-SS",
        bvj: "bvj-Latn-NG",
        bvk: "bvk-Latn-ID",
        bvm: "bvm-Latn-CM",
        bvn: "bvn-Latn-PG",
        bvo: "bvo-Latn-TD",
        bvq: "bvq-Latn-CF",
        bvr: "bvr-Latn-AU",
        bvt: "bvt-Latn-ID",
        bvu: "bvu-Latn-ID",
        bvv: "bvv-Latn-VE",
        bvw: "bvw-Latn-NG",
        bvx: "bvx-Latn-CG",
        bvy: "bvy-Latn-PH",
        bvz: "bvz-Latn-ID",
        bwa: "bwa-Latn-NC",
        bwb: "bwb-Latn-FJ",
        bwc: "bwc-Latn-ZM",
        bwd: "bwd-Latn-ZZ",
        bwe: "bwe-Mymr-MM",
        "bwe-Latn": "bwe-Latn-MM",
        bwf: "bwf-Latn-PG",
        bwg: "bwg-Latn-MZ",
        bwh: "bwh-Latn-CM",
        bwi: "bwi-Latn-VE",
        bwj: "bwj-Latn-BF",
        bwk: "bwk-Latn-PG",
        bwl: "bwl-Latn-CD",
        bwm: "bwm-Latn-PG",
        bwo: "bwo-Latn-ET",
        "bwo-Ethi": "bwo-Ethi-ET",
        bwp: "bwp-Latn-ID",
        bwq: "bwq-Latn-BF",
        bwr: "bwr-Latn-ZZ",
        bws: "bws-Latn-CD",
        bwt: "bwt-Latn-CM",
        bwu: "bwu-Latn-GH",
        bww: "bww-Latn-CD",
        bwx: "bwx-Latn-CN",
        bwy: "bwy-Latn-BF",
        bwz: "bwz-Latn-CG",
        bxa: "bxa-Latn-SB",
        bxb: "bxb-Latn-SS",
        bxc: "bxc-Latn-GQ",
        bxf: "bxf-Latn-PG",
        bxg: "bxg-Latn-CD",
        bxh: "bxh-Latn-ZZ",
        bxi: "bxi-Latn-AU",
        bxj: "bxj-Latn-AU",
        bxl: "bxl-Latn-BF",
        bxm: "bxm-Cyrl-MN",
        "bxm-Latn": "bxm-Latn-MN",
        "bxm-Mong": "bxm-Mong-MN",
        bxn: "bxn-Latn-AU",
        bxo: "bxo-Latn-NG",
        bxp: "bxp-Latn-CM",
        bxq: "bxq-Latn-NG",
        bxs: "bxs-Latn-CM",
        bxu: "bxu-Mong-CN",
        "bxu-Cyrl": "bxu-Cyrl-CN",
        "bxu-Latn": "bxu-Latn-CN",
        bxv: "bxv-Latn-TD",
        bxw: "bxw-Latn-ML",
        bxz: "bxz-Latn-PG",
        bya: "bya-Latn-PH",
        byb: "byb-Latn-CM",
        byc: "byc-Latn-NG",
        byd: "byd-Latn-ID",
        bye: "bye-Latn-ZZ",
        byf: "byf-Latn-NG",
        byh: "byh-Deva-NP",
        byi: "byi-Latn-CD",
        byj: "byj-Latn-NG",
        byk: "byk-Latn-CN",
        byl: "byl-Latn-ID",
        bym: "bym-Latn-AU",
        byn: "byn-Ethi-ER",
        byp: "byp-Latn-NG",
        byr: "byr-Latn-ZZ",
        bys: "bys-Latn-ZZ",
        byv: "byv-Latn-CM",
        byw: "byw-Deva-NP",
        byx: "byx-Latn-ZZ",
        byz: "byz-Latn-PG",
        bza: "bza-Latn-ZZ",
        bzb: "bzb-Latn-ID",
        bzc: "bzc-Latn-MG",
        bzd: "bzd-Latn-CR",
        bze: "bze-Latn-ML",
        bzf: "bzf-Latn-ZZ",
        bzh: "bzh-Latn-ZZ",
        bzi: "bzi-Thai-TH",
        bzj: "bzj-Latn-BZ",
        bzk: "bzk-Latn-NI",
        bzl: "bzl-Latn-ID",
        bzm: "bzm-Latn-CD",
        bzn: "bzn-Latn-ID",
        bzo: "bzo-Latn-CD",
        bzp: "bzp-Latn-ID",
        bzq: "bzq-Latn-ID",
        bzr: "bzr-Latn-AU",
        bzt: "bzt-Latn-001",
        bzu: "bzu-Latn-ID",
        bzv: "bzv-Latn-CM",
        bzw: "bzw-Latn-ZZ",
        bzx: "bzx-Latn-ML",
        bzy: "bzy-Latn-NG",
        bzz: "bzz-Latn-NG",
        ca: "ca-Latn-ES",
        caa: "caa-Latn-GT",
        cab: "cab-Latn-HN",
        cac: "cac-Latn-GT",
        cad: "cad-Latn-US",
        cae: "cae-Latn-SN",
        caf: "caf-Latn-CA",
        "caf-Cans": "caf-Cans-CA",
        cag: "cag-Latn-PY",
        cah: "cah-Latn-PE",
        caj: "caj-Latn-AR",
        cak: "cak-Latn-GT",
        cal: "cal-Latn-MP",
        cam: "cam-Latn-NC",
        can: "can-Latn-ZZ",
        cao: "cao-Latn-BO",
        cap: "cap-Latn-BO",
        caq: "caq-Latn-IN",
        car: "car-Latn-VE",
        cas: "cas-Latn-BO",
        cav: "cav-Latn-BO",
        caw: "caw-Latn-BO",
        cax: "cax-Latn-BO",
        cay: "cay-Latn-CA",
        caz: "caz-Latn-BO",
        cbb: "cbb-Latn-CO",
        cbc: "cbc-Latn-CO",
        cbd: "cbd-Latn-CO",
        cbg: "cbg-Latn-CO",
        cbi: "cbi-Latn-EC",
        cbj: "cbj-Latn-ZZ",
        cbk: "cbk-Latn-PH",
        "cbk-Brai": "cbk-Brai-PH",
        cbl: "cbl-Latn-MM",
        cbn: "cbn-Thai-TH",
        cbo: "cbo-Latn-NG",
        cbq: "cbq-Latn-NG",
        cbr: "cbr-Latn-PE",
        cbs: "cbs-Latn-PE",
        cbt: "cbt-Latn-PE",
        cbu: "cbu-Latn-PE",
        cbv: "cbv-Latn-CO",
        cbw: "cbw-Latn-PH",
        cby: "cby-Latn-CO",
        ccc: "ccc-Latn-PE",
        ccd: "ccd-Latn-BR",
        cce: "cce-Latn-MZ",
        ccg: "ccg-Latn-NG",
        cch: "cch-Latn-NG",
        ccj: "ccj-Latn-GW",
        ccl: "ccl-Latn-TZ",
        ccm: "ccm-Latn-MY",
        cco: "cco-Latn-MX",
        ccp: "ccp-Cakm-BD",
        ccr: "ccr-Latn-SV",
        cde: "cde-Telu-IN",
        cdf: "cdf-Latn-IN",
        "cdf-Beng": "cdf-Beng-IN",
        cdh: "cdh-Deva-IN",
        "cdh-Takr": "cdh-Takr-IN",
        cdi: "cdi-Gujr-IN",
        cdj: "cdj-Deva-IN",
        cdm: "cdm-Deva-NP",
        "cdm-Latn": "cdm-Latn-NP",
        cdo: "cdo-Hans-CN",
        "cdo-Hant": "cdo-Hant-CN",
        "cdo-Latn": "cdo-Latn-CN",
        cdr: "cdr-Latn-NG",
        cdz: "cdz-Beng-IN",
        ce: "ce-Cyrl-RU",
        cea: "cea-Latn-US",
        ceb: "ceb-Latn-PH",
        ceg: "ceg-Latn-PY",
        cek: "cek-Latn-MM",
        cen: "cen-Latn-NG",
        cet: "cet-Latn-NG",
        cey: "cey-Latn-MM",
        cfa: "cfa-Latn-ZZ",
        cfd: "cfd-Latn-NG",
        cfg: "cfg-Latn-NG",
        cfm: "cfm-Latn-MM",
        "cfm-Beng": "cfm-Beng-IN",
        cga: "cga-Latn-PG",
        cgc: "cgc-Latn-PH",
        cgg: "cgg-Latn-UG",
        cgk: "cgk-Tibt-BT",
        ch: "ch-Latn-GU",
        chb: "chb-Latn-CO",
        chd: "chd-Latn-MX",
        chf: "chf-Latn-MX",
        chg: "chg-Arab-TM",
        chh: "chh-Latn-US",
        chj: "chj-Latn-MX",
        chk: "chk-Latn-FM",
        chl: "chl-Latn-US",
        chm: "chm-Cyrl-RU",
        chn: "chn-Latn-US",
        "chn-Dupl": "chn-Dupl-US",
        cho: "cho-Latn-US",
        chp: "chp-Latn-CA",
        chq: "chq-Latn-MX",
        chr: "chr-Cher-US",
        cht: "cht-Latn-PE",
        chw: "chw-Latn-MZ",
        chx: "chx-Deva-NP",
        chy: "chy-Latn-US",
        chz: "chz-Latn-MX",
        cia: "cia-Latn-ID",
        "cia-Arab": "cia-Arab-ID",
        "cia-Hang": "cia-Hang-ID",
        cib: "cib-Latn-BJ",
        cic: "cic-Latn-US",
        cie: "cie-Latn-NG",
        cih: "cih-Deva-IN",
        cim: "cim-Latn-IT",
        cin: "cin-Latn-BR",
        cip: "cip-Latn-MX",
        cir: "cir-Latn-NC",
        ciw: "ciw-Latn-US",
        "ciw-Cans": "ciw-Cans-US",
        ciy: "ciy-Latn-VE",
        cja: "cja-Arab-KH",
        cje: "cje-Latn-VN",
        cjh: "cjh-Latn-US",
        cji: "cji-Cyrl-RU",
        cjk: "cjk-Latn-AO",
        cjm: "cjm-Cham-VN",
        cjn: "cjn-Latn-PG",
        cjo: "cjo-Latn-PE",
        cjp: "cjp-Latn-CR",
        cjs: "cjs-Latn-RU",
        "cjs-Cyrl": "cjs-Cyrl-RU",
        cjv: "cjv-Latn-ZZ",
        cjy: "cjy-Hans-CN",
        "cjy-Hant": "cjy-Hant-CN",
        ckb: "ckb-Arab-IQ",
        ckl: "ckl-Latn-ZZ",
        ckm: "ckm-Latn-HR",
        "ckm-Glag": "ckm-Glag-HR",
        ckn: "ckn-Latn-MM",
        cko: "cko-Latn-ZZ",
        ckq: "ckq-Latn-TD",
        ckr: "ckr-Latn-PG",
        cks: "cks-Latn-NC",
        ckt: "ckt-Cyrl-RU",
        cku: "cku-Latn-US",
        ckv: "ckv-Latn-TW",
        ckx: "ckx-Latn-CM",
        cky: "cky-Latn-ZZ",
        ckz: "ckz-Latn-GT",
        cla: "cla-Latn-ZZ",
        clc: "clc-Latn-CA",
        cle: "cle-Latn-MX",
        clh: "clh-Arab-PK",
        cli: "cli-Latn-GH",
        clj: "clj-Latn-MM",
        clk: "clk-Latn-IN",
        "clk-Tibt": "clk-Tibt-CN",
        cll: "cll-Latn-GH",
        clm: "clm-Latn-US",
        clo: "clo-Latn-MX",
        clt: "clt-Latn-MM",
        clu: "clu-Latn-PH",
        clw: "clw-Cyrl-RU",
        cly: "cly-Latn-MX",
        cma: "cma-Latn-VN",
        cme: "cme-Latn-ZZ",
        cmg: "cmg-Soyo-MN",
        cmi: "cmi-Latn-CO",
        cml: "cml-Latn-ID",
        cmo: "cmo-Latn-VN",
        "cmo-KH": "cmo-Latn-KH",
        "cmo-Khmr": "cmo-Khmr-KH",
        cmr: "cmr-Latn-MM",
        cms: "cms-Latn-IT",
        cmt: "cmt-Latn-ZA",
        cna: "cna-Tibt-IN",
        cnb: "cnb-Latn-MM",
        cnc: "cnc-Latn-VN",
        cng: "cng-Latn-CN",
        cnh: "cnh-Latn-MM",
        cni: "cni-Latn-PE",
        cnk: "cnk-Latn-MM",
        cnl: "cnl-Latn-MX",
        cnp: "cnp-Hans-CN",
        "cnp-Hant": "cnp-Hant-CN",
        cnq: "cnq-Latn-CM",
        cns: "cns-Latn-ID",
        cnt: "cnt-Latn-MX",
        cnw: "cnw-Latn-MM",
        cnx: "cnx-Latn-GB",
        co: "co-Latn-FR",
        coa: "coa-Latn-AU",
        cob: "cob-Latn-MX",
        coc: "coc-Latn-MX",
        cod: "cod-Latn-PE",
        coe: "coe-Latn-CO",
        cof: "cof-Latn-EC",
        cog: "cog-Thai-TH",
        coh: "coh-Latn-KE",
        coj: "coj-Latn-MX",
        cok: "cok-Latn-MX",
        col: "col-Latn-US",
        com: "com-Latn-US",
        coo: "coo-Latn-CA",
        cop: "cop-Copt-EG",
        coq: "coq-Latn-US",
        cot: "cot-Latn-PE",
        cou: "cou-Latn-SN",
        cox: "cox-Latn-PE",
        coz: "coz-Latn-MX",
        cpa: "cpa-Latn-MX",
        cpb: "cpb-Latn-PE",
        cpc: "cpc-Latn-PE",
        cpg: "cpg-Grek-GR",
        cpi: "cpi-Latn-NR",
        cpn: "cpn-Latn-GH",
        cpo: "cpo-Latn-BF",
        cps: "cps-Latn-PH",
        cpu: "cpu-Latn-PE",
        cpx: "cpx-Latn-CN",
        cpy: "cpy-Latn-PE",
        cqd: "cqd-Latn-CN",
        cr: "cr-Cans-CA",
        crb: "crb-Latn-VC",
        crc: "crc-Latn-VU",
        crd: "crd-Latn-US",
        crf: "crf-Latn-CO",
        crg: "crg-Latn-CA",
        crh: "crh-Cyrl-UA",
        cri: "cri-Latn-ST",
        crj: "crj-Cans-CA",
        "crj-Latn": "crj-Latn-CA",
        crk: "crk-Cans-CA",
        crl: "crl-Cans-CA",
        crm: "crm-Cans-CA",
        crn: "crn-Latn-MX",
        cro: "cro-Latn-US",
        crq: "crq-Latn-AR",
        crs: "crs-Latn-SC",
        crt: "crt-Latn-AR",
        crv: "crv-Latn-IN",
        crw: "crw-Latn-VN",
        crx: "crx-Latn-CA",
        "crx-Cans": "crx-Cans-CA",
        cry: "cry-Latn-NG",
        crz: "crz-Latn-US",
        cs: "cs-Latn-CZ",
        csa: "csa-Latn-MX",
        csb: "csb-Latn-PL",
        csh: "csh-Mymr-MM",
        "csh-Latn": "csh-Latn-MM",
        csj: "csj-Latn-MM",
        csk: "csk-Latn-SN",
        csm: "csm-Latn-US",
        cso: "cso-Latn-MX",
        csp: "csp-Hans-CN",
        "csp-Hant": "csp-Hant-CN",
        css: "css-Latn-US",
        cst: "cst-Latn-US",
        csv: "csv-Latn-MM",
        csw: "csw-Cans-CA",
        csy: "csy-Latn-MM",
        csz: "csz-Latn-US",
        cta: "cta-Latn-MX",
        ctc: "ctc-Latn-US",
        ctd: "ctd-Pauc-MM",
        cte: "cte-Latn-MX",
        ctg: "ctg-Beng-BD",
        "ctg-Arab": "ctg-Arab-BD",
        "ctg-Latn": "ctg-Latn-BD",
        cth: "cth-Latn-MM",
        ctl: "ctl-Latn-MX",
        ctm: "ctm-Latn-US",
        ctn: "ctn-Deva-NP",
        cto: "cto-Latn-CO",
        ctp: "ctp-Latn-MX",
        cts: "cts-Latn-PH",
        ctt: "ctt-Taml-IN",
        ctu: "ctu-Latn-MX",
        ctz: "ctz-Latn-MX",
        cu: "cu-Cyrl-RU",
        "cu-Glag": "cu-Glag-BG",
        cua: "cua-Latn-VN",
        cub: "cub-Latn-CO",
        cuc: "cuc-Latn-MX",
        cuh: "cuh-Latn-KE",
        cui: "cui-Latn-CO",
        cuj: "cuj-Latn-PE",
        cuk: "cuk-Latn-PA",
        cul: "cul-Latn-BR",
        cuo: "cuo-Latn-VE",
        cup: "cup-Latn-US",
        cut: "cut-Latn-MX",
        cuu: "cuu-Lana-CN",
        cuv: "cuv-Latn-CM",
        cux: "cux-Latn-MX",
        cv: "cv-Cyrl-RU",
        cvg: "cvg-Latn-IN",
        "cvg-Tibt": "cvg-Tibt-IN",
        cvn: "cvn-Latn-MX",
        cwa: "cwa-Latn-TZ",
        cwb: "cwb-Latn-MZ",
        cwe: "cwe-Latn-TZ",
        cwg: "cwg-Latn-MY",
        cwt: "cwt-Latn-SN",
        cy: "cy-Latn-GB",
        cya: "cya-Latn-MX",
        cyb: "cyb-Latn-BO",
        cyo: "cyo-Latn-PH",
        czh: "czh-Hans-CN",
        "czh-Hant": "czh-Hant-CN",
        czk: "czk-Hebr-CZ",
        czn: "czn-Latn-MX",
        czt: "czt-Latn-MM",
        da: "da-Latn-DK",
        daa: "daa-Latn-TD",
        dac: "dac-Latn-PG",
        dad: "dad-Latn-ZZ",
        dae: "dae-Latn-CM",
        daf: "daf-Latn-CI",
        dag: "dag-Latn-ZZ",
        dah: "dah-Latn-ZZ",
        dai: "dai-Latn-TD",
        daj: "daj-Latn-SD",
        dak: "dak-Latn-US",
        dal: "dal-Latn-KE",
        dam: "dam-Latn-NG",
        dao: "dao-Latn-MM",
        daq: "daq-Deva-IN",
        dar: "dar-Cyrl-RU",
        das: "das-Latn-CI",
        dau: "dau-Latn-TD",
        dav: "dav-Latn-KE",
        daw: "daw-Latn-PH",
        dax: "dax-Latn-AU",
        daz: "daz-Latn-ID",
        dba: "dba-Latn-ML",
        dbb: "dbb-Latn-NG",
        dbd: "dbd-Latn-ZZ",
        dbe: "dbe-Latn-ID",
        dbf: "dbf-Latn-ID",
        dbg: "dbg-Latn-ML",
        dbi: "dbi-Latn-NG",
        dbj: "dbj-Latn-MY",
        "dbj-Arab": "dbj-Arab-MY",
        dbl: "dbl-Latn-AU",
        dbm: "dbm-Latn-NG",
        dbn: "dbn-Latn-ID",
        dbo: "dbo-Latn-NG",
        dbp: "dbp-Latn-NG",
        dbq: "dbq-Latn-ZZ",
        dbt: "dbt-Latn-ML",
        dbu: "dbu-Latn-ML",
        dbv: "dbv-Latn-NG",
        dbw: "dbw-Latn-ML",
        dby: "dby-Latn-PG",
        dcc: "dcc-Arab-IN",
        dcr: "dcr-Latn-VI",
        dda: "dda-Latn-AU",
        ddd: "ddd-Latn-SS",
        dde: "dde-Latn-CG",
        ddg: "ddg-Latn-TL",
        ddi: "ddi-Latn-PG",
        ddj: "ddj-Latn-AU",
        ddn: "ddn-Latn-ZZ",
        ddo: "ddo-Cyrl-RU",
        ddr: "ddr-Latn-AU",
        dds: "dds-Latn-ML",
        ddw: "ddw-Latn-ID",
        de: "de-Latn-DE",
        dec: "dec-Latn-SD",
        ded: "ded-Latn-ZZ",
        dee: "dee-Latn-LR",
        def: "def-Arab-IR",
        deg: "deg-Latn-NG",
        deh: "deh-Arab-PK",
        dei: "dei-Latn-ID",
        dek: "dek-Latn-CM",
        del: "del-Latn-US",
        dem: "dem-Latn-ID",
        den: "den-Latn-CA",
        deq: "deq-Latn-CF",
        der: "der-Beng-IN",
        "der-Latn": "der-Latn-IN",
        des: "des-Latn-BR",
        dev: "dev-Latn-PG",
        dez: "dez-Latn-CD",
        dga: "dga-Latn-ZZ",
        dgb: "dgb-Latn-ML",
        dgc: "dgc-Latn-PH",
        dgd: "dgd-Latn-BF",
        dge: "dge-Latn-PG",
        dgg: "dgg-Latn-PG",
        dgh: "dgh-Latn-ZZ",
        dgi: "dgi-Latn-ZZ",
        dgk: "dgk-Latn-CF",
        dgl: "dgl-Arab-ZZ",
        dgn: "dgn-Latn-AU",
        dgr: "dgr-Latn-CA",
        dgs: "dgs-Latn-BF",
        dgt: "dgt-Latn-AU",
        dgw: "dgw-Latn-AU",
        dgx: "dgx-Latn-PG",
        dgz: "dgz-Latn-ZZ",
        dhg: "dhg-Latn-AU",
        dhi: "dhi-Deva-NP",
        dhl: "dhl-Latn-AU",
        dhm: "dhm-Latn-AO",
        dhn: "dhn-Gujr-IN",
        dho: "dho-Deva-IN",
        dhr: "dhr-Latn-AU",
        dhs: "dhs-Latn-TZ",
        dhu: "dhu-Latn-AU",
        dhv: "dhv-Latn-NC",
        dhw: "dhw-Deva-NP",
        dhx: "dhx-Latn-AU",
        dia: "dia-Latn-ZZ",
        dib: "dib-Latn-SS",
        dic: "dic-Latn-CI",
        did: "did-Latn-SS",
        dif: "dif-Latn-AU",
        dig: "dig-Latn-KE",
        dih: "dih-Latn-MX",
        dii: "dii-Latn-CM",
        dij: "dij-Latn-ID",
        dil: "dil-Latn-SD",
        din: "din-Latn-SS",
        "din-Arab": "din-Arab-SS",
        dio: "dio-Latn-NG",
        dip: "dip-Latn-SS",
        dir: "dir-Latn-NG",
        dis: "dis-Latn-IN",
        "dis-Beng": "dis-Beng-IN",
        diu: "diu-Latn-NA",
        diw: "diw-Latn-SS",
        dix: "dix-Latn-VU",
        diy: "diy-Latn-ID",
        diz: "diz-Latn-CD",
        dja: "dja-Latn-AU",
        djb: "djb-Latn-AU",
        djc: "djc-Latn-TD",
        djd: "djd-Latn-AU",
        dje: "dje-Latn-NE",
        djf: "djf-Latn-AU",
        dji: "dji-Latn-AU",
        djj: "djj-Latn-AU",
        djk: "djk-Latn-SR",
        djm: "djm-Latn-ML",
        djn: "djn-Latn-AU",
        djo: "djo-Latn-ID",
        djr: "djr-Latn-AU",
        dju: "dju-Latn-PG",
        djw: "djw-Latn-AU",
        dka: "dka-Tibt-BT",
        dkg: "dkg-Latn-NG",
        dkk: "dkk-Latn-ID",
        dkr: "dkr-Latn-MY",
        dks: "dks-Latn-SS",
        dkx: "dkx-Latn-CM",
        dlg: "dlg-Cyrl-RU",
        dlm: "dlm-Latn-HR",
        dln: "dln-Latn-IN",
        dma: "dma-Latn-GA",
        dmb: "dmb-Latn-ML",
        dmc: "dmc-Latn-PG",
        dmd: "dmd-Latn-AU",
        dme: "dme-Latn-CM",
        dmf: "dmf-Medf-NG",
        dmg: "dmg-Latn-MY",
        dmk: "dmk-Arab-PK",
        dml: "dml-Arab-PK",
        dmm: "dmm-Latn-CM",
        dmo: "dmo-Latn-CM",
        dmr: "dmr-Latn-ID",
        dms: "dms-Latn-ID",
        dmu: "dmu-Latn-ID",
        dmv: "dmv-Latn-MY",
        dmw: "dmw-Latn-AU",
        dmx: "dmx-Latn-MZ",
        dmy: "dmy-Latn-ID",
        dna: "dna-Latn-ID",
        dnd: "dnd-Latn-PG",
        dne: "dne-Latn-TZ",
        dng: "dng-Cyrl-KG",
        "dng-Arab": "dng-Arab-KG",
        dni: "dni-Latn-ID",
        dnj: "dnj-Latn-CI",
        dnk: "dnk-Latn-ID",
        dnn: "dnn-Latn-BF",
        dno: "dno-Latn-CD",
        dnr: "dnr-Latn-PG",
        dnt: "dnt-Latn-ID",
        dnu: "dnu-Mymr-MM",
        dnv: "dnv-Mymr-MM",
        dnw: "dnw-Latn-ID",
        dny: "dny-Latn-BR",
        doa: "doa-Latn-PG",
        dob: "dob-Latn-ZZ",
        doc: "doc-Latn-CN",
        doe: "doe-Latn-TZ",
        dof: "dof-Latn-PG",
        doh: "doh-Latn-NG",
        doi: "doi-Deva-IN",
        dok: "dok-Latn-ID",
        dol: "dol-Latn-PG",
        don: "don-Latn-PG",
        doo: "doo-Latn-CD",
        dop: "dop-Latn-ZZ",
        dor: "dor-Latn-SB",
        dos: "dos-Latn-BF",
        dot: "dot-Latn-NG",
        dov: "dov-Latn-ZW",
        dow: "dow-Latn-ZZ",
        dox: "dox-Ethi-ET",
        doy: "doy-Latn-GH",
        dpp: "dpp-Latn-MY",
        drc: "drc-Latn-PT",
        dre: "dre-Tibt-NP",
        drg: "drg-Latn-MY",
        drh: "drh-Mong-CN",
        dri: "dri-Latn-ZZ",
        drl: "drl-Latn-AU",
        drn: "drn-Latn-ID",
        dro: "dro-Latn-MY",
        drq: "drq-Deva-NP",
        drs: "drs-Ethi-ZZ",
        drt: "drt-Latn-NL",
        dru: "dru-Latn-TW",
        dry: "dry-Deva-NP",
        dsb: "dsb-Latn-DE",
        dsh: "dsh-Latn-KE",
        dsi: "dsi-Latn-TD",
        dsn: "dsn-Latn-ID",
        dso: "dso-Orya-IN",
        dsq: "dsq-Latn-ML",
        "dsq-Arab": "dsq-Arab-ML",
        dta: "dta-Latn-CN",
        "dta-Cyrl": "dta-Cyrl-CN",
        "dta-Hans": "dta-Hans-CN",
        dtb: "dtb-Latn-MY",
        dtd: "dtd-Latn-CA",
        dth: "dth-Latn-AU",
        dti: "dti-Latn-ML",
        dtk: "dtk-Latn-ML",
        dtm: "dtm-Latn-ML",
        dto: "dto-Latn-ML",
        dtp: "dtp-Latn-MY",
        dtr: "dtr-Latn-MY",
        dts: "dts-Latn-ZZ",
        dtt: "dtt-Latn-ML",
        dtu: "dtu-Latn-ML",
        dty: "dty-Deva-NP",
        dua: "dua-Latn-CM",
        dub: "dub-Gujr-IN",
        duc: "duc-Latn-ZZ",
        dud: "dud-Latn-ZZ",
        due: "due-Latn-PH",
        duf: "duf-Latn-NC",
        dug: "dug-Latn-ZZ",
        duh: "duh-Deva-IN",
        "duh-Gujr": "duh-Gujr-IN",
        dui: "dui-Latn-PG",
        duk: "duk-Latn-PG",
        dul: "dul-Latn-PH",
        dum: "dum-Latn-NL",
        dun: "dun-Latn-ID",
        duo: "duo-Latn-PH",
        dup: "dup-Latn-ID",
        duq: "duq-Latn-ID",
        dur: "dur-Latn-CM",
        dus: "dus-Deva-NP",
        duu: "duu-Latn-CN",
        duv: "duv-Latn-ID",
        duw: "duw-Latn-ID",
        dux: "dux-Latn-ML",
        duy: "duy-Latn-PH",
        duz: "duz-Latn-CM",
        dv: "dv-Thaa-MV",
        dva: "dva-Latn-ZZ",
        dwa: "dwa-Latn-NG",
        dwk: "dwk-Orya-IN",
        dwr: "dwr-Latn-ET",
        "dwr-Ethi": "dwr-Ethi-ET",
        dws: "dws-Latn-001",
        dwu: "dwu-Latn-AU",
        dww: "dww-Latn-ZZ",
        dwy: "dwy-Latn-AU",
        dwz: "dwz-Deva-NP",
        dya: "dya-Latn-BF",
        dyb: "dyb-Latn-AU",
        dyd: "dyd-Latn-AU",
        dyg: "dyg-Latn-PH",
        dyi: "dyi-Latn-CI",
        dym: "dym-Latn-ML",
        dyn: "dyn-Latn-AU",
        dyo: "dyo-Latn-SN",
        dyu: "dyu-Latn-BF",
        dyy: "dyy-Latn-AU",
        dz: "dz-Tibt-BT",
        dza: "dza-Latn-NG",
        dze: "dze-Latn-AU",
        dzg: "dzg-Latn-ZZ",
        dzl: "dzl-Tibt-BT",
        dzn: "dzn-Latn-CD",
        eaa: "eaa-Latn-AU",
        ebc: "ebc-Latn-ID",
        ebg: "ebg-Latn-NG",
        ebk: "ebk-Latn-PH",
        ebo: "ebo-Latn-CG",
        ebr: "ebr-Latn-CI",
        ebu: "ebu-Latn-KE",
        ecr: "ecr-Grek-GR",
        ecy: "ecy-Cprt-CY",
        ee: "ee-Latn-GH",
        efa: "efa-Latn-NG",
        efe: "efe-Latn-CD",
        efi: "efi-Latn-NG",
        ega: "ega-Latn-CI",
        egl: "egl-Latn-IT",
        egm: "egm-Latn-TZ",
        ego: "ego-Latn-NG",
        egy: "egy-Egyp-EG",
        ehu: "ehu-Latn-NG",
        eip: "eip-Latn-ID",
        eit: "eit-Latn-PG",
        eiv: "eiv-Latn-PG",
        eja: "eja-Latn-GW",
        eka: "eka-Latn-ZZ",
        eke: "eke-Latn-NG",
        ekg: "ekg-Latn-ID",
        eki: "eki-Latn-NG",
        ekl: "ekl-Latn-BD",
        ekm: "ekm-Latn-CM",
        eko: "eko-Latn-MZ",
        "eko-Arab": "eko-Arab-MZ",
        ekp: "ekp-Latn-NG",
        ekr: "ekr-Latn-NG",
        eky: "eky-Kali-MM",
        el: "el-Grek-GR",
        ele: "ele-Latn-PG",
        elk: "elk-Latn-PG",
        elm: "elm-Latn-NG",
        elo: "elo-Latn-KE",
        elu: "elu-Latn-PG",
        ema: "ema-Latn-ZZ",
        emb: "emb-Latn-ID",
        eme: "eme-Latn-GF",
        emg: "emg-Deva-NP",
        emi: "emi-Latn-ZZ",
        emm: "emm-Latn-MX",
        emn: "emn-Latn-CM",
        emp: "emp-Latn-PA",
        ems: "ems-Latn-US",
        "ems-Cyrl": "ems-Cyrl-US",
        emu: "emu-Deva-IN",
        emw: "emw-Latn-ID",
        emx: "emx-Latn-FR",
        emz: "emz-Latn-CM",
        en: "en-Latn-US",
        "en-Shaw": "en-Shaw-GB",
        ena: "ena-Latn-PG",
        enb: "enb-Latn-KE",
        enc: "enc-Latn-VN",
        end: "end-Latn-ID",
        enf: "enf-Cyrl-RU",
        enh: "enh-Cyrl-RU",
        enl: "enl-Latn-PY",
        enm: "enm-Latn-GB",
        enn: "enn-Latn-ZZ",
        eno: "eno-Latn-ID",
        enq: "enq-Latn-ZZ",
        enr: "enr-Latn-ID",
        env: "env-Latn-NG",
        enw: "enw-Latn-NG",
        enx: "enx-Latn-PY",
        eo: "eo-Latn-001",
        eot: "eot-Latn-CI",
        epi: "epi-Latn-NG",
        era: "era-Taml-IN",
        erg: "erg-Latn-VU",
        erh: "erh-Latn-NG",
        eri: "eri-Latn-ZZ",
        erk: "erk-Latn-VU",
        err: "err-Latn-AU",
        ert: "ert-Latn-ID",
        erw: "erw-Latn-ID",
        es: "es-Latn-ES",
        ese: "ese-Latn-BO",
        esg: "esg-Gonm-IN",
        esh: "esh-Arab-IR",
        esi: "esi-Latn-US",
        esm: "esm-Latn-CI",
        ess: "ess-Latn-US",
        "ess-Cyrl": "ess-Cyrl-US",
        esu: "esu-Latn-US",
        esy: "esy-Latn-PH",
        et: "et-Latn-EE",
        etb: "etb-Latn-NG",
        etn: "etn-Latn-VU",
        eto: "eto-Latn-CM",
        etr: "etr-Latn-ZZ",
        ets: "ets-Latn-NG",
        ett: "ett-Ital-IT",
        etu: "etu-Latn-ZZ",
        etx: "etx-Latn-ZZ",
        etz: "etz-Latn-ID",
        eu: "eu-Latn-ES",
        eve: "eve-Cyrl-RU",
        evh: "evh-Latn-NG",
        evn: "evn-Cyrl-RU",
        "evn-Latn": "evn-Latn-CN",
        "evn-Mong": "evn-Mong-CN",
        ewo: "ewo-Latn-CM",
        ext: "ext-Latn-ES",
        eya: "eya-Latn-US",
        eyo: "eyo-Latn-KE",
        eza: "eza-Latn-ZZ",
        eze: "eze-Latn-NG",
        fa: "fa-Arab-IR",
        faa: "faa-Latn-ZZ",
        fab: "fab-Latn-ZZ",
        fad: "fad-Latn-PG",
        faf: "faf-Latn-SB",
        fag: "fag-Latn-ZZ",
        fah: "fah-Latn-NG",
        fai: "fai-Latn-ZZ",
        faj: "faj-Latn-PG",
        fak: "fak-Latn-CM",
        fal: "fal-Latn-CM",
        fam: "fam-Latn-NG",
        fan: "fan-Latn-GQ",
        fap: "fap-Latn-SN",
        far: "far-Latn-SB",
        fau: "fau-Latn-ID",
        fax: "fax-Latn-ES",
        fay: "fay-Arab-IR",
        faz: "faz-Arab-IR",
        fbl: "fbl-Latn-PH",
        fer: "fer-Latn-SS",
        ff: "ff-Latn-SN",
        "ff-Adlm": "ff-Adlm-GN",
        ffi: "ffi-Latn-ZZ",
        ffm: "ffm-Latn-ML",
        fgr: "fgr-Latn-TD",
        fi: "fi-Latn-FI",
        fia: "fia-Arab-SD",
        fie: "fie-Latn-NG",
        fif: "fif-Latn-SA",
        fil: "fil-Latn-PH",
        fip: "fip-Latn-TZ",
        fir: "fir-Latn-NG",
        fit: "fit-Latn-SE",
        fiw: "fiw-Latn-PG",
        fj: "fj-Latn-FJ",
        fkk: "fkk-Latn-NG",
        fkv: "fkv-Latn-NO",
        fla: "fla-Latn-US",
        flh: "flh-Latn-ID",
        fli: "fli-Latn-NG",
        fll: "fll-Latn-CM",
        fln: "fln-Latn-AU",
        flr: "flr-Latn-ZZ",
        fly: "fly-Latn-ZA",
        fmp: "fmp-Latn-ZZ",
        fmu: "fmu-Deva-IN",
        fnb: "fnb-Latn-VU",
        fng: "fng-Latn-ZA",
        fni: "fni-Latn-TD",
        fo: "fo-Latn-FO",
        fod: "fod-Latn-ZZ",
        foi: "foi-Latn-PG",
        fom: "fom-Latn-CD",
        fon: "fon-Latn-BJ",
        for: "for-Latn-ZZ",
        fos: "fos-Latn-TW",
        fpe: "fpe-Latn-ZZ",
        fqs: "fqs-Latn-ZZ",
        fr: "fr-Latn-FR",
        frc: "frc-Latn-US",
        frd: "frd-Latn-ID",
        frk: "frk-Latn-DE",
        frm: "frm-Latn-FR",
        fro: "fro-Latn-FR",
        frp: "frp-Latn-FR",
        frq: "frq-Latn-PG",
        frr: "frr-Latn-DE",
        frs: "frs-Latn-DE",
        frt: "frt-Latn-VU",
        fub: "fub-Arab-CM",
        fud: "fud-Latn-WF",
        fue: "fue-Latn-ZZ",
        fuf: "fuf-Latn-GN",
        fuh: "fuh-Latn-ZZ",
        fui: "fui-Latn-TD",
        fum: "fum-Latn-NG",
        fun: "fun-Latn-BR",
        fuq: "fuq-Latn-NE",
        fur: "fur-Latn-IT",
        fut: "fut-Latn-VU",
        fuu: "fuu-Latn-CD",
        fuv: "fuv-Latn-NG",
        fuy: "fuy-Latn-ZZ",
        fvr: "fvr-Latn-SD",
        fwa: "fwa-Latn-NC",
        fwe: "fwe-Latn-NA",
        fy: "fy-Latn-NL",
        ga: "ga-Latn-IE",
        gaa: "gaa-Latn-GH",
        gab: "gab-Latn-TD",
        gac: "gac-Latn-IN",
        "gac-Deva": "gac-Deva-IN",
        gad: "gad-Latn-PH",
        gae: "gae-Latn-VE",
        gaf: "gaf-Latn-ZZ",
        gag: "gag-Latn-MD",
        gah: "gah-Latn-ZZ",
        gai: "gai-Latn-PG",
        gaj: "gaj-Latn-ZZ",
        gak: "gak-Latn-ID",
        gal: "gal-Latn-TL",
        gam: "gam-Latn-ZZ",
        gan: "gan-Hans-CN",
        gao: "gao-Latn-PG",
        gap: "gap-Latn-PG",
        gaq: "gaq-Orya-IN",
        gar: "gar-Latn-PG",
        gas: "gas-Gujr-IN",
        gat: "gat-Latn-PG",
        gau: "gau-Telu-IN",
        gaw: "gaw-Latn-ZZ",
        gax: "gax-Latn-ET",
        "gax-Ethi": "gax-Ethi-ET",
        gay: "gay-Latn-ID",
        gba: "gba-Latn-ZZ",
        gbb: "gbb-Latn-AU",
        gbd: "gbd-Latn-AU",
        gbe: "gbe-Latn-PG",
        gbf: "gbf-Latn-ZZ",
        gbg: "gbg-Latn-CF",
        gbh: "gbh-Latn-BJ",
        gbi: "gbi-Latn-ID",
        gbj: "gbj-Orya-IN",
        gbk: "gbk-Deva-IN",
        "gbk-Takr": "gbk-Takr-IN",
        gbl: "gbl-Gujr-IN",
        "gbl-Deva": "gbl-Deva-IN",
        gbm: "gbm-Deva-IN",
        gbn: "gbn-Latn-SS",
        gbp: "gbp-Latn-CF",
        gbq: "gbq-Latn-CF",
        gbr: "gbr-Latn-NG",
        gbs: "gbs-Latn-BJ",
        gbu: "gbu-Latn-AU",
        gbv: "gbv-Latn-CF",
        gbw: "gbw-Latn-AU",
        gbx: "gbx-Latn-BJ",
        gby: "gby-Latn-ZZ",
        gbz: "gbz-Arab-IR",
        gcc: "gcc-Latn-PG",
        gcd: "gcd-Latn-AU",
        gcf: "gcf-Latn-GP",
        gcl: "gcl-Latn-GD",
        gcn: "gcn-Latn-PG",
        gcr: "gcr-Latn-GF",
        gct: "gct-Latn-VE",
        gd: "gd-Latn-GB",
        gdb: "gdb-Orya-IN",
        "gdb-Telu": "gdb-Telu-IN",
        gdc: "gdc-Latn-AU",
        gdd: "gdd-Latn-PG",
        gde: "gde-Latn-ZZ",
        gdf: "gdf-Latn-NG",
        gdg: "gdg-Latn-PH",
        gdh: "gdh-Latn-AU",
        gdi: "gdi-Latn-CF",
        gdj: "gdj-Latn-AU",
        gdk: "gdk-Latn-TD",
        gdl: "gdl-Latn-ET",
        "gdl-Ethi": "gdl-Ethi-ET",
        gdm: "gdm-Latn-TD",
        gdn: "gdn-Latn-ZZ",
        gdo: "gdo-Cyrl-RU",
        gdq: "gdq-Latn-YE",
        gdr: "gdr-Latn-ZZ",
        gdt: "gdt-Latn-AU",
        gdu: "gdu-Latn-NG",
        gdx: "gdx-Deva-IN",
        gea: "gea-Latn-NG",
        geb: "geb-Latn-ZZ",
        gec: "gec-Latn-LR",
        ged: "ged-Latn-NG",
        gef: "gef-Latn-ID",
        geg: "geg-Latn-NG",
        geh: "geh-Latn-CA",
        gei: "gei-Latn-ID",
        gej: "gej-Latn-ZZ",
        gek: "gek-Latn-NG",
        gel: "gel-Latn-ZZ",
        geq: "geq-Latn-CF",
        ges: "ges-Latn-ID",
        gev: "gev-Latn-GA",
        gew: "gew-Latn-NG",
        gex: "gex-Latn-SO",
        gey: "gey-Latn-CD",
        gez: "gez-Ethi-ET",
        gfk: "gfk-Latn-ZZ",
        gga: "gga-Latn-SB",
        ggb: "ggb-Latn-LR",
        ggd: "ggd-Latn-AU",
        gge: "gge-Latn-AU",
        ggg: "ggg-Arab-PK",
        ggk: "ggk-Latn-AU",
        ggl: "ggl-Latn-PG",
        ggn: "ggn-Deva-NP",
        ggt: "ggt-Latn-PG",
        ggu: "ggu-Latn-CI",
        ggw: "ggw-Latn-PG",
        gha: "gha-Arab-LY",
        "gha-Latn": "gha-Latn-LY",
        "gha-Tfng": "gha-Tfng-LY",
        ghc: "ghc-Latn-GB",
        ghe: "ghe-Deva-NP",
        ghk: "ghk-Latn-MM",
        ghn: "ghn-Latn-SB",
        ghr: "ghr-Arab-PK",
        ghs: "ghs-Latn-ZZ",
        ght: "ght-Tibt-NP",
        gia: "gia-Latn-AU",
        gib: "gib-Latn-NG",
        gic: "gic-Latn-ZA",
        gid: "gid-Latn-CM",
        gie: "gie-Latn-CI",
        gig: "gig-Arab-PK",
        gih: "gih-Latn-AU",
        gil: "gil-Latn-KI",
        gim: "gim-Latn-ZZ",
        gin: "gin-Cyrl-RU",
        gip: "gip-Latn-PG",
        giq: "giq-Latn-VN",
        gir: "gir-Latn-VN",
        gis: "gis-Latn-CM",
        git: "git-Latn-CA",
        gix: "gix-Latn-CD",
        giy: "giy-Latn-AU",
        giz: "giz-Latn-CM",
        gjk: "gjk-Arab-PK",
        gjm: "gjm-Latn-AU",
        gjn: "gjn-Latn-ZZ",
        gjr: "gjr-Latn-AU",
        gju: "gju-Arab-PK",
        gka: "gka-Latn-PG",
        gkd: "gkd-Latn-PG",
        gke: "gke-Latn-CM",
        gkn: "gkn-Latn-ZZ",
        gko: "gko-Latn-AU",
        gkp: "gkp-Latn-ZZ",
        gku: "gku-Latn-ZA",
        gl: "gl-Latn-ES",
        glb: "glb-Latn-NG",
        glc: "glc-Latn-TD",
        gld: "gld-Cyrl-RU",
        glh: "glh-Arab-AF",
        glj: "glj-Latn-TD",
        glk: "glk-Arab-IR",
        gll: "gll-Latn-AU",
        glo: "glo-Latn-NG",
        glr: "glr-Latn-LR",
        glu: "glu-Latn-TD",
        glw: "glw-Latn-NG",
        gma: "gma-Latn-AU",
        gmb: "gmb-Latn-SB",
        gmd: "gmd-Latn-NG",
        gmg: "gmg-Latn-PG",
        gmh: "gmh-Latn-DE",
        gmm: "gmm-Latn-ZZ",
        gmn: "gmn-Latn-CM",
        gmr: "gmr-Latn-AU",
        gmu: "gmu-Latn-PG",
        gmv: "gmv-Ethi-ZZ",
        gmx: "gmx-Latn-TZ",
        gmy: "gmy-Linb-GR",
        gmz: "gmz-Latn-NG",
        gn: "gn-Latn-PY",
        gna: "gna-Latn-BF",
        gnb: "gnb-Latn-IN",
        gnc: "gnc-Latn-ES",
        gnd: "gnd-Latn-ZZ",
        gne: "gne-Latn-NG",
        gng: "gng-Latn-ZZ",
        gnh: "gnh-Latn-NG",
        gni: "gni-Latn-AU",
        gnj: "gnj-Latn-CI",
        gnk: "gnk-Latn-BW",
        gnl: "gnl-Latn-AU",
        gnm: "gnm-Latn-PG",
        gnn: "gnn-Latn-AU",
        gnq: "gnq-Latn-MY",
        gnr: "gnr-Latn-AU",
        gnt: "gnt-Latn-PG",
        gnu: "gnu-Latn-PG",
        gnw: "gnw-Latn-BO",
        gnz: "gnz-Latn-CF",
        goa: "goa-Latn-CI",
        gob: "gob-Latn-CO",
        goc: "goc-Latn-PG",
        god: "god-Latn-ZZ",
        goe: "goe-Tibt-BT",
        gof: "gof-Ethi-ZZ",
        gog: "gog-Latn-TZ",
        goh: "goh-Latn-DE",
        goi: "goi-Latn-ZZ",
        gok: "gok-Deva-IN",
        gol: "gol-Latn-LR",
        gom: "gom-Deva-IN",
        gon: "gon-Telu-IN",
        goo: "goo-Latn-FJ",
        gop: "gop-Latn-ID",
        goq: "goq-Latn-ID",
        gor: "gor-Latn-ID",
        gos: "gos-Latn-NL",
        got: "got-Goth-UA",
        gou: "gou-Latn-CM",
        gov: "gov-Latn-CI",
        gow: "gow-Latn-TZ",
        gox: "gox-Latn-CD",
        goy: "goy-Latn-TD",
        gpa: "gpa-Latn-NG",
        gpe: "gpe-Latn-GH",
        gpn: "gpn-Latn-PG",
        gqa: "gqa-Latn-NG",
        gqn: "gqn-Latn-BR",
        gqr: "gqr-Latn-TD",
        gra: "gra-Deva-IN",
        "gra-Gujr": "gra-Gujr-IN",
        grb: "grb-Latn-ZZ",
        grc: "grc-Cprt-CY",
        "grc-Linb": "grc-Linb-GR",
        grd: "grd-Latn-NG",
        grg: "grg-Latn-PG",
        grh: "grh-Latn-NG",
        gri: "gri-Latn-SB",
        grj: "grj-Latn-LR",
        grm: "grm-Latn-MY",
        grq: "grq-Latn-PG",
        grs: "grs-Latn-ID",
        grt: "grt-Beng-IN",
        gru: "gru-Ethi-ET",
        "gru-Latn": "gru-Latn-ET",
        grv: "grv-Latn-LR",
        grw: "grw-Latn-ZZ",
        grx: "grx-Latn-PG",
        gry: "gry-Latn-LR",
        grz: "grz-Latn-PG",
        gsl: "gsl-Latn-SN",
        gsn: "gsn-Latn-PG",
        gso: "gso-Latn-CF",
        gsp: "gsp-Latn-PG",
        gsw: "gsw-Latn-CH",
        gta: "gta-Latn-BR",
        gtu: "gtu-Latn-AU",
        gu: "gu-Gujr-IN",
        gua: "gua-Latn-NG",
        gub: "gub-Latn-BR",
        guc: "guc-Latn-CO",
        gud: "gud-Latn-ZZ",
        gue: "gue-Latn-AU",
        guf: "guf-Latn-AU",
        guh: "guh-Latn-CO",
        gui: "gui-Latn-BO",
        guk: "guk-Latn-ET",
        "guk-Ethi": "guk-Ethi-ET",
        gul: "gul-Latn-US",
        gum: "gum-Latn-CO",
        gun: "gun-Latn-BR",
        guo: "guo-Latn-CO",
        gup: "gup-Latn-AU",
        guq: "guq-Latn-PY",
        gur: "gur-Latn-GH",
        gut: "gut-Latn-CR",
        guu: "guu-Latn-VE",
        guw: "guw-Latn-ZZ",
        gux: "gux-Latn-ZZ",
        guz: "guz-Latn-KE",
        gv: "gv-Latn-IM",
        gva: "gva-Latn-PY",
        gvc: "gvc-Latn-BR",
        gve: "gve-Latn-PG",
        gvf: "gvf-Latn-ZZ",
        gvj: "gvj-Latn-BR",
        gvl: "gvl-Latn-TD",
        gvm: "gvm-Latn-NG",
        gvn: "gvn-Latn-AU",
        gvo: "gvo-Latn-BR",
        gvp: "gvp-Latn-BR",
        gvr: "gvr-Deva-NP",
        gvs: "gvs-Latn-ZZ",
        gvy: "gvy-Latn-AU",
        gwa: "gwa-Latn-CI",
        gwb: "gwb-Latn-NG",
        gwc: "gwc-Arab-ZZ",
        gwd: "gwd-Latn-ET",
        gwe: "gwe-Latn-TZ",
        gwf: "gwf-Arab-PK",
        gwg: "gwg-Latn-NG",
        gwi: "gwi-Latn-CA",
        gwj: "gwj-Latn-BW",
        gwm: "gwm-Latn-AU",
        gwn: "gwn-Latn-NG",
        gwr: "gwr-Latn-UG",
        gwt: "gwt-Arab-ZZ",
        gwu: "gwu-Latn-AU",
        gww: "gww-Latn-AU",
        gwx: "gwx-Latn-GH",
        gxx: "gxx-Latn-CI",
        gyb: "gyb-Latn-PG",
        gyd: "gyd-Latn-AU",
        gye: "gye-Latn-NG",
        gyf: "gyf-Latn-AU",
        gyg: "gyg-Latn-CF",
        gyi: "gyi-Latn-ZZ",
        gyl: "gyl-Latn-ET",
        "gyl-Ethi": "gyl-Ethi-ET",
        gym: "gym-Latn-PA",
        gyn: "gyn-Latn-GY",
        gyo: "gyo-Deva-NP",
        gyr: "gyr-Latn-BO",
        gyy: "gyy-Latn-AU",
        gyz: "gyz-Latn-NG",
        gza: "gza-Latn-SD",
        gzi: "gzi-Arab-IR",
        gzn: "gzn-Latn-ID",
        ha: "ha-Latn-NG",
        "ha-CM": "ha-Arab-CM",
        "ha-SD": "ha-Arab-SD",
        haa: "haa-Latn-US",
        hac: "hac-Arab-IR",
        had: "had-Latn-ID",
        hae: "hae-Latn-ET",
        hag: "hag-Latn-ZZ",
        hah: "hah-Latn-PG",
        hai: "hai-Latn-CA",
        haj: "haj-Latn-IN",
        "haj-Beng": "haj-Beng-IN",
        hak: "hak-Hans-CN",
        hal: "hal-Latn-VN",
        ham: "ham-Latn-ZZ",
        han: "han-Latn-TZ",
        hao: "hao-Latn-PG",
        hap: "hap-Latn-ID",
        haq: "haq-Latn-TZ",
        har: "har-Ethi-ET",
        "har-Arab": "har-Arab-ET",
        "har-Latn": "har-Latn-ET",
        has: "has-Latn-CA",
        hav: "hav-Latn-CD",
        haw: "haw-Latn-US",
        hax: "hax-Latn-CA",
        hay: "hay-Latn-TZ",
        haz: "haz-Arab-AF",
        hba: "hba-Latn-CD",
        hbb: "hbb-Latn-ZZ",
        hbn: "hbn-Latn-SD",
        hbo: "hbo-Hebr-IL",
        hbu: "hbu-Latn-TL",
        hch: "hch-Latn-MX",
        hdy: "hdy-Ethi-ZZ",
        he: "he-Hebr-IL",
        hed: "hed-Latn-TD",
        heg: "heg-Latn-ID",
        heh: "heh-Latn-TZ",
        hei: "hei-Latn-CA",
        hem: "hem-Latn-CD",
        hgm: "hgm-Latn-NA",
        hgw: "hgw-Latn-PG",
        hhi: "hhi-Latn-PG",
        hhr: "hhr-Latn-SN",
        hhy: "hhy-Latn-ZZ",
        hi: "hi-Deva-IN",
        "hi-Latn": "hi-Latn-IN",
        hia: "hia-Latn-ZZ",
        hib: "hib-Latn-PE",
        hid: "hid-Latn-US",
        hif: "hif-Latn-FJ",
        hig: "hig-Latn-ZZ",
        hih: "hih-Latn-ZZ",
        hii: "hii-Takr-IN",
        "hii-Deva": "hii-Deva-IN",
        hij: "hij-Latn-CM",
        hik: "hik-Latn-ID",
        hil: "hil-Latn-PH",
        hio: "hio-Latn-BW",
        hir: "hir-Latn-BR",
        hit: "hit-Xsux-TR",
        hiw: "hiw-Latn-VU",
        hix: "hix-Latn-BR",
        hji: "hji-Latn-ID",
        hka: "hka-Latn-TZ",
        hke: "hke-Latn-CD",
        hkh: "hkh-Arab-IN",
        "hkh-Deva": "hkh-Deva-IN",
        "hkh-Latn": "hkh-Latn-IN",
        hkk: "hkk-Latn-PG",
        hla: "hla-Latn-ZZ",
        hlb: "hlb-Deva-IN",
        hld: "hld-Latn-VN",
        hlt: "hlt-Latn-MM",
        hlu: "hlu-Hluw-TR",
        hma: "hma-Latn-CN",
        hmb: "hmb-Latn-ML",
        hmd: "hmd-Plrd-CN",
        hmf: "hmf-Latn-VN",
        hmj: "hmj-Bopo-CN",
        hmm: "hmm-Latn-CN",
        hmn: "hmn-Latn-CN",
        "hmn-Bopo": "hmn-Bopo-CN",
        "hmn-Hmng": "hmn-Hmng-CN",
        hmp: "hmp-Latn-CN",
        hmq: "hmq-Bopo-CN",
        hmr: "hmr-Latn-IN",
        hms: "hms-Latn-CN",
        hmt: "hmt-Latn-ZZ",
        hmu: "hmu-Latn-ID",
        hmv: "hmv-Latn-VN",
        hmw: "hmw-Latn-CN",
        hmy: "hmy-Latn-CN",
        hmz: "hmz-Latn-CN",
        "hmz-Plrd": "hmz-Plrd-CN",
        hna: "hna-Latn-CM",
        hnd: "hnd-Arab-PK",
        hne: "hne-Deva-IN",
        hng: "hng-Latn-AO",
        hnh: "hnh-Latn-BW",
        hni: "hni-Latn-CN",
        hnj: "hnj-Hmnp-US",
        "hnj-AU": "hnj-Laoo-AU",
        "hnj-CN": "hnj-Laoo-CN",
        "hnj-FR": "hnj-Laoo-FR",
        "hnj-GF": "hnj-Laoo-GF",
        "hnj-LA": "hnj-Laoo-LA",
        "hnj-Laoo": "hnj-Laoo-LA",
        "hnj-MM": "hnj-Laoo-MM",
        "hnj-SR": "hnj-Laoo-SR",
        "hnj-TH": "hnj-Laoo-TH",
        "hnj-US": "hnj-Hmnp-US",
        "hnj-VN": "hnj-Laoo-VN",
        hnn: "hnn-Latn-PH",
        hno: "hno-Arab-PK",
        hns: "hns-Latn-SR",
        ho: "ho-Latn-PG",
        hoa: "hoa-Latn-SB",
        hob: "hob-Latn-PG",
        hoc: "hoc-Deva-IN",
        hod: "hod-Latn-NG",
        hoe: "hoe-Latn-NG",
        hoh: "hoh-Arab-OM",
        hoi: "hoi-Latn-US",
        hoj: "hoj-Deva-IN",
        hol: "hol-Latn-AO",
        hom: "hom-Latn-SS",
        hoo: "hoo-Latn-CD",
        hop: "hop-Latn-US",
        hor: "hor-Latn-TD",
        hot: "hot-Latn-ZZ",
        hov: "hov-Latn-ID",
        how: "how-Hani-CN",
        hoy: "hoy-Deva-IN",
        hpo: "hpo-Mymr-MM",
        hr: "hr-Latn-HR",
        hra: "hra-Latn-IN",
        hrc: "hrc-Latn-PG",
        hre: "hre-Latn-VN",
        hrk: "hrk-Latn-ID",
        hrm: "hrm-Latn-CN",
        "hrm-Hmng": "hrm-Hmng-CN",
        hro: "hro-Latn-VN",
        hrp: "hrp-Latn-AU",
        hrt: "hrt-Syrc-TR",
        hru: "hru-Latn-IN",
        hrw: "hrw-Latn-PG",
        hrx: "hrx-Latn-BR",
        hrz: "hrz-Arab-IR",
        hsb: "hsb-Latn-DE",
        hsn: "hsn-Hans-CN",
        hss: "hss-Arab-OM",
        ht: "ht-Latn-HT",
        hti: "hti-Latn-ID",
        hto: "hto-Latn-CO",
        hts: "hts-Latn-TZ",
        htu: "htu-Latn-ID",
        htx: "htx-Xsux-TR",
        hu: "hu-Latn-HU",
        hub: "hub-Latn-PE",
        huc: "huc-Latn-BW",
        hud: "hud-Latn-ID",
        hue: "hue-Latn-MX",
        huf: "huf-Latn-PG",
        hug: "hug-Latn-PE",
        huh: "huh-Latn-CL",
        hui: "hui-Latn-ZZ",
        huk: "huk-Latn-ID",
        hul: "hul-Latn-PG",
        hum: "hum-Latn-CD",
        hup: "hup-Latn-US",
        hur: "hur-Latn-CA",
        hus: "hus-Latn-MX",
        hut: "hut-Deva-NP",
        "hut-Tibt": "hut-Tibt-NP",
        huu: "huu-Latn-PE",
        huv: "huv-Latn-MX",
        huw: "huw-Latn-ID",
        hux: "hux-Latn-PE",
        huy: "huy-Hebr-IL",
        huz: "huz-Cyrl-RU",
        hvc: "hvc-Latn-HT",
        hve: "hve-Latn-MX",
        hvk: "hvk-Latn-NC",
        hvn: "hvn-Latn-ID",
        hvv: "hvv-Latn-MX",
        hwa: "hwa-Latn-CI",
        hwc: "hwc-Latn-US",
        hwo: "hwo-Latn-NG",
        hy: "hy-Armn-AM",
        hya: "hya-Latn-CM",
        hyw: "hyw-Armn-AM",
        hz: "hz-Latn-NA",
        ia: "ia-Latn-001",
        iai: "iai-Latn-NC",
        ian: "ian-Latn-ZZ",
        iar: "iar-Latn-ZZ",
        iba: "iba-Latn-MY",
        ibb: "ibb-Latn-NG",
        ibd: "ibd-Latn-AU",
        ibe: "ibe-Latn-NG",
        ibg: "ibg-Latn-PH",
        ibh: "ibh-Latn-VN",
        ibl: "ibl-Latn-PH",
        ibm: "ibm-Latn-NG",
        ibn: "ibn-Latn-NG",
        ibr: "ibr-Latn-NG",
        ibu: "ibu-Latn-ID",
        iby: "iby-Latn-ZZ",
        ica: "ica-Latn-ZZ",
        ich: "ich-Latn-ZZ",
        icr: "icr-Latn-CO",
        id: "id-Latn-ID",
        ida: "ida-Latn-KE",
        idb: "idb-Latn-IN",
        idc: "idc-Latn-NG",
        idd: "idd-Latn-ZZ",
        ide: "ide-Latn-NG",
        idi: "idi-Latn-ZZ",
        idr: "idr-Latn-SS",
        ids: "ids-Latn-NG",
        idt: "idt-Latn-TL",
        idu: "idu-Latn-ZZ",
        ie: "ie-Latn-001",
        ifa: "ifa-Latn-PH",
        ifb: "ifb-Latn-PH",
        ife: "ife-Latn-TG",
        iff: "iff-Latn-VU",
        ifk: "ifk-Latn-PH",
        ifm: "ifm-Latn-CG",
        ifu: "ifu-Latn-PH",
        ify: "ify-Latn-PH",
        ig: "ig-Latn-NG",
        igb: "igb-Latn-ZZ",
        ige: "ige-Latn-ZZ",
        igg: "igg-Latn-PG",
        igl: "igl-Latn-NG",
        igm: "igm-Latn-PG",
        ign: "ign-Latn-BO",
        igo: "igo-Latn-PG",
        igs: "igs-Latn-001",
        "igs-Grek": "igs-Grek-001",
        igw: "igw-Latn-NG",
        ihb: "ihb-Latn-ID",
        ihi: "ihi-Latn-NG",
        ihp: "ihp-Latn-ID",
        ihw: "ihw-Latn-AU",
        ii: "ii-Yiii-CN",
        iin: "iin-Latn-AU",
        ijc: "ijc-Latn-NG",
        ije: "ije-Latn-NG",
        ijj: "ijj-Latn-ZZ",
        ijn: "ijn-Latn-NG",
        ijs: "ijs-Latn-NG",
        ik: "ik-Latn-US",
        iki: "iki-Latn-NG",
        ikk: "ikk-Latn-ZZ",
        ikl: "ikl-Latn-NG",
        iko: "iko-Latn-NG",
        ikp: "ikp-Latn-NG",
        ikr: "ikr-Latn-AU",
        ikt: "ikt-Latn-CA",
        "ikt-Cans": "ikt-Cans-CA",
        ikv: "ikv-Latn-NG",
        ikw: "ikw-Latn-ZZ",
        ikx: "ikx-Latn-ZZ",
        ikz: "ikz-Latn-TZ",
        ila: "ila-Latn-ID",
        ilb: "ilb-Latn-ZM",
        ilg: "ilg-Latn-AU",
        ili: "ili-Latn-CN",
        "ili-Arab": "ili-Arab-CN",
        "ili-Cyrl": "ili-Cyrl-KZ",
        ilk: "ilk-Latn-PH",
        ilm: "ilm-Latn-MY",
        ilo: "ilo-Latn-PH",
        ilp: "ilp-Latn-PH",
        ilu: "ilu-Latn-ID",
        ilv: "ilv-Latn-NG",
        imi: "imi-Latn-PG",
        iml: "iml-Latn-US",
        imn: "imn-Latn-PG",
        imo: "imo-Latn-ZZ",
        imr: "imr-Latn-ID",
        ims: "ims-Latn-IT",
        imt: "imt-Latn-SS",
        imy: "imy-Lyci-TR",
        in: "in-Latn-ID",
        inb: "inb-Latn-CO",
        ing: "ing-Latn-US",
        inh: "inh-Cyrl-RU",
        inj: "inj-Latn-CO",
        inn: "inn-Latn-PH",
        ino: "ino-Latn-PG",
        inp: "inp-Latn-PE",
        int: "int-Mymr-MM",
        io: "io-Latn-001",
        ior: "ior-Ethi-ET",
        iou: "iou-Latn-ZZ",
        iow: "iow-Latn-US",
        ipi: "ipi-Latn-PG",
        ipo: "ipo-Latn-PG",
        iqu: "iqu-Latn-PE",
        iqw: "iqw-Latn-NG",
        ire: "ire-Latn-ID",
        irh: "irh-Latn-ID",
        iri: "iri-Latn-ZZ",
        irk: "irk-Latn-TZ",
        irn: "irn-Latn-BR",
        iru: "iru-Taml-IN",
        "iru-Mlym": "iru-Mlym-IN",
        irx: "irx-Latn-ID",
        iry: "iry-Latn-PH",
        is: "is-Latn-IS",
        isa: "isa-Latn-PG",
        isc: "isc-Latn-PE",
        isd: "isd-Latn-PH",
        ish: "ish-Latn-NG",
        isi: "isi-Latn-NG",
        isk: "isk-Arab-AF",
        "isk-Cyrl": "isk-Cyrl-TJ",
        ism: "ism-Latn-ID",
        isn: "isn-Latn-TZ",
        iso: "iso-Latn-NG",
        ist: "ist-Latn-HR",
        isu: "isu-Latn-CM",
        it: "it-Latn-IT",
        itb: "itb-Latn-PH",
        itd: "itd-Latn-ID",
        ite: "ite-Latn-BO",
        iti: "iti-Latn-PH",
        itk: "itk-Hebr-IT",
        itl: "itl-Cyrl-RU",
        itm: "itm-Latn-NG",
        ito: "ito-Latn-BO",
        itr: "itr-Latn-PG",
        its: "its-Latn-NG",
        itt: "itt-Latn-PH",
        itv: "itv-Latn-PH",
        itw: "itw-Latn-NG",
        itx: "itx-Latn-ID",
        ity: "ity-Latn-PH",
        itz: "itz-Latn-GT",
        iu: "iu-Cans-CA",
        ium: "ium-Latn-CN",
        "ium-Hani": "ium-Hani-CN",
        "ium-Laoo": "ium-Laoo-LA",
        "ium-Thai": "ium-Thai-TH",
        ivb: "ivb-Latn-PH",
        ivv: "ivv-Latn-PH",
        iw: "iw-Hebr-IL",
        iwk: "iwk-Latn-PH",
        iwm: "iwm-Latn-ZZ",
        iwo: "iwo-Latn-ID",
        iws: "iws-Latn-ZZ",
        ixc: "ixc-Latn-MX",
        ixl: "ixl-Latn-GT",
        iya: "iya-Latn-NG",
        iyo: "iyo-Latn-CM",
        iyx: "iyx-Latn-CG",
        izh: "izh-Latn-RU",
        izi: "izi-Latn-ZZ",
        izr: "izr-Latn-NG",
        izz: "izz-Latn-NG",
        ja: "ja-Jpan-JP",
        jaa: "jaa-Latn-BR",
        jab: "jab-Latn-ZZ",
        jac: "jac-Latn-GT",
        jad: "jad-Arab-GN",
        jae: "jae-Latn-PG",
        jaf: "jaf-Latn-NG",
        jah: "jah-Latn-MY",
        jaj: "jaj-Latn-SB",
        jak: "jak-Latn-MY",
        jal: "jal-Latn-ID",
        jam: "jam-Latn-JM",
        jan: "jan-Latn-AU",
        jao: "jao-Latn-AU",
        jaq: "jaq-Latn-ID",
        jar: "jar-Latn-ZZ",
        jas: "jas-Latn-NC",
        jat: "jat-Arab-AF",
        jau: "jau-Latn-ID",
        jax: "jax-Latn-ID",
        jay: "jay-Latn-AU",
        jaz: "jaz-Latn-NC",
        jbe: "jbe-Hebr-IL",
        jbi: "jbi-Latn-AU",
        jbj: "jbj-Latn-ID",
        jbk: "jbk-Latn-PG",
        jbm: "jbm-Latn-NG",
        jbn: "jbn-Arab-LY",
        jbo: "jbo-Latn-001",
        jbr: "jbr-Latn-ID",
        jbt: "jbt-Latn-BR",
        jbu: "jbu-Latn-ZZ",
        jbw: "jbw-Latn-AU",
        jct: "jct-Cyrl-UA",
        "jct-Latn": "jct-Latn-UA",
        jda: "jda-Tibt-IN",
        jdg: "jdg-Arab-PK",
        jdt: "jdt-Cyrl-RU",
        "jdt-Hebr": "jdt-Hebr-RU",
        "jdt-Latn": "jdt-Latn-AZ",
        jeb: "jeb-Latn-PE",
        jee: "jee-Deva-NP",
        jeh: "jeh-Latn-VN",
        "jeh-Laoo": "jeh-Laoo-LA",
        jei: "jei-Latn-ID",
        jek: "jek-Latn-CI",
        jel: "jel-Latn-ID",
        jen: "jen-Latn-ZZ",
        jer: "jer-Latn-NG",
        jet: "jet-Latn-PG",
        jeu: "jeu-Latn-TD",
        jgb: "jgb-Latn-CD",
        jge: "jge-Geor-GE",
        "jge-Hebr": "jge-Hebr-IL",
        jgk: "jgk-Latn-ZZ",
        jgo: "jgo-Latn-CM",
        jhi: "jhi-Latn-MY",
        ji: "ji-Hebr-UA",
        jia: "jia-Latn-CM",
        jib: "jib-Latn-ZZ",
        jic: "jic-Latn-HN",
        jid: "jid-Latn-NG",
        jie: "jie-Latn-NG",
        jig: "jig-Latn-AU",
        jil: "jil-Latn-PG",
        jim: "jim-Latn-CM",
        jit: "jit-Latn-TZ",
        jiu: "jiu-Latn-CN",
        jiv: "jiv-Latn-EC",
        jiy: "jiy-Latn-CN",
        jje: "jje-Hang-KR",
        jjr: "jjr-Latn-NG",
        jka: "jka-Latn-ID",
        jkm: "jkm-Mymr-MM",
        "jkm-Brai": "jkm-Brai-MM",
        "jkm-Latn": "jkm-Latn-MM",
        jko: "jko-Latn-PG",
        jku: "jku-Latn-NG",
        jle: "jle-Latn-SD",
        jma: "jma-Latn-PG",
        jmb: "jmb-Latn-NG",
        jmc: "jmc-Latn-TZ",
        jmd: "jmd-Latn-ID",
        jmi: "jmi-Latn-NG",
        jml: "jml-Deva-NP",
        jmn: "jmn-Latn-MM",
        jmr: "jmr-Latn-GH",
        jms: "jms-Latn-NG",
        jmw: "jmw-Latn-PG",
        jmx: "jmx-Latn-MX",
        jna: "jna-Takr-IN",
        jnd: "jnd-Arab-PK",
        jng: "jng-Latn-AU",
        jni: "jni-Latn-NG",
        jnj: "jnj-Latn-ET",
        "jnj-Ethi": "jnj-Ethi-ET",
        jnl: "jnl-Deva-IN",
        jns: "jns-Deva-IN",
        "jns-Latn": "jns-Latn-IN",
        "jns-Takr": "jns-Takr-IN",
        job: "job-Latn-CD",
        jod: "jod-Latn-CI",
        jog: "jog-Arab-PK",
        jor: "jor-Latn-BO",
        jow: "jow-Latn-ML",
        jpa: "jpa-Hebr-PS",
        jpr: "jpr-Hebr-IL",
        jqr: "jqr-Latn-PE",
        jra: "jra-Latn-ZZ",
        jrr: "jrr-Latn-NG",
        jrt: "jrt-Latn-NG",
        jru: "jru-Latn-VE",
        jua: "jua-Latn-BR",
        jub: "jub-Latn-NG",
        jud: "jud-Latn-CI",
        juh: "juh-Latn-NG",
        jui: "jui-Latn-AU",
        juk: "juk-Latn-NG",
        jul: "jul-Deva-NP",
        jum: "jum-Latn-SD",
        jun: "jun-Orya-IN",
        juo: "juo-Latn-NG",
        jup: "jup-Latn-BR",
        jur: "jur-Latn-BR",
        jut: "jut-Latn-DK",
        juu: "juu-Latn-NG",
        juw: "juw-Latn-NG",
        juy: "juy-Orya-IN",
        jv: "jv-Latn-ID",
        jvd: "jvd-Latn-ID",
        jvn: "jvn-Latn-SR",
        jw: "jw-Latn-ID",
        jwi: "jwi-Latn-GH",
        jya: "jya-Tibt-CN",
        jye: "jye-Hebr-IL",
        jyy: "jyy-Latn-TD",
        ka: "ka-Geor-GE",
        kaa: "kaa-Cyrl-UZ",
        kab: "kab-Latn-DZ",
        kac: "kac-Latn-MM",
        kad: "kad-Latn-ZZ",
        kag: "kag-Latn-MY",
        kah: "kah-Latn-CF",
        kai: "kai-Latn-ZZ",
        kaj: "kaj-Latn-NG",
        kak: "kak-Latn-PH",
        kam: "kam-Latn-KE",
        kao: "kao-Latn-ML",
        kap: "kap-Cyrl-RU",
        kaq: "kaq-Latn-PE",
        kav: "kav-Latn-BR",
        kaw: "kaw-Kawi-ID",
        kax: "kax-Latn-ID",
        kay: "kay-Latn-BR",
        kba: "kba-Latn-AU",
        kbb: "kbb-Latn-BR",
        kbc: "kbc-Latn-BR",
        kbd: "kbd-Cyrl-RU",
        kbe: "kbe-Latn-AU",
        kbh: "kbh-Latn-CO",
        kbi: "kbi-Latn-ID",
        kbj: "kbj-Latn-CD",
        kbk: "kbk-Latn-PG",
        kbl: "kbl-Latn-TD",
        kbm: "kbm-Latn-ZZ",
        kbn: "kbn-Latn-CF",
        kbo: "kbo-Latn-SS",
        kbp: "kbp-Latn-ZZ",
        kbq: "kbq-Latn-ZZ",
        kbr: "kbr-Latn-ET",
        "kbr-Ethi": "kbr-Ethi-ET",
        kbs: "kbs-Latn-GA",
        kbt: "kbt-Latn-PG",
        kbu: "kbu-Arab-PK",
        kbv: "kbv-Latn-ID",
        kbw: "kbw-Latn-PG",
        kbx: "kbx-Latn-ZZ",
        kby: "kby-Arab-NE",
        kbz: "kbz-Latn-NG",
        kca: "kca-Cyrl-RU",
        kcb: "kcb-Latn-PG",
        kcc: "kcc-Latn-NG",
        kcd: "kcd-Latn-ID",
        kce: "kce-Latn-NG",
        kcf: "kcf-Latn-NG",
        kcg: "kcg-Latn-NG",
        kch: "kch-Latn-NG",
        kci: "kci-Latn-NG",
        kcj: "kcj-Latn-GW",
        kck: "kck-Latn-ZW",
        kcl: "kcl-Latn-ZZ",
        kcm: "kcm-Latn-CF",
        kcn: "kcn-Latn-UG",
        kco: "kco-Latn-PG",
        kcp: "kcp-Latn-SD",
        kcq: "kcq-Latn-NG",
        kcs: "kcs-Latn-NG",
        kct: "kct-Latn-ZZ",
        kcu: "kcu-Latn-TZ",
        kcv: "kcv-Latn-CD",
        kcw: "kcw-Latn-CD",
        kcz: "kcz-Latn-TZ",
        kda: "kda-Latn-AU",
        kdc: "kdc-Latn-TZ",
        kdd: "kdd-Latn-AU",
        kde: "kde-Latn-TZ",
        kdf: "kdf-Latn-PG",
        kdg: "kdg-Latn-CD",
        kdh: "kdh-Latn-TG",
        kdi: "kdi-Latn-UG",
        kdj: "kdj-Latn-UG",
        kdk: "kdk-Latn-NC",
        kdl: "kdl-Latn-ZZ",
        kdm: "kdm-Latn-NG",
        kdn: "kdn-Latn-ZW",
        kdp: "kdp-Latn-NG",
        kdq: "kdq-Beng-IN",
        kdr: "kdr-Latn-LT",
        "kdr-Cyrl": "kdr-Cyrl-UA",
        kdt: "kdt-Thai-TH",
        kdw: "kdw-Latn-ID",
        kdx: "kdx-Latn-NG",
        kdy: "kdy-Latn-ID",
        kdz: "kdz-Latn-CM",
        kea: "kea-Latn-CV",
        keb: "keb-Latn-GA",
        kec: "kec-Latn-SD",
        ked: "ked-Latn-TZ",
        kee: "kee-Latn-US",
        kef: "kef-Latn-TG",
        keg: "keg-Latn-SD",
        keh: "keh-Latn-PG",
        kei: "kei-Latn-ID",
        kek: "kek-Latn-GT",
        kel: "kel-Latn-CD",
        kem: "kem-Latn-TL",
        ken: "ken-Latn-CM",
        keo: "keo-Latn-UG",
        ker: "ker-Latn-TD",
        kes: "kes-Latn-NG",
        ket: "ket-Cyrl-RU",
        keu: "keu-Latn-TG",
        kew: "kew-Latn-PG",
        kex: "kex-Deva-IN",
        "kex-Gujr": "kex-Gujr-IN",
        key: "key-Telu-IN",
        kez: "kez-Latn-ZZ",
        kfa: "kfa-Knda-IN",
        kfb: "kfb-Deva-IN",
        kfc: "kfc-Telu-IN",
        kfd: "kfd-Knda-IN",
        kfe: "kfe-Taml-IN",
        kff: "kff-Latn-IN",
        "kff-Deva": "kff-Deva-IN",
        "kff-Orya": "kff-Orya-IN",
        "kff-Telu": "kff-Telu-IN",
        kfh: "kfh-Mlym-IN",
        kfi: "kfi-Taml-IN",
        "kfi-Knda": "kfi-Knda-IN",
        kfk: "kfk-Deva-IN",
        "kfk-Takr": "kfk-Takr-IN",
        kfl: "kfl-Latn-CM",
        kfm: "kfm-Arab-IR",
        kfn: "kfn-Latn-CM",
        kfo: "kfo-Latn-CI",
        kfp: "kfp-Deva-IN",
        kfq: "kfq-Deva-IN",
        kfr: "kfr-Deva-IN",
        kfs: "kfs-Deva-IN",
        kfv: "kfv-Latn-IN",
        kfw: "kfw-Latn-IN",
        kfx: "kfx-Deva-IN",
        "kfx-Takr": "kfx-Takr-IN",
        kfy: "kfy-Deva-IN",
        kfz: "kfz-Latn-BF",
        kg: "kg-Latn-CD",
        kga: "kga-Latn-CI",
        kgb: "kgb-Latn-ID",
        kge: "kge-Latn-ID",
        kgf: "kgf-Latn-ZZ",
        kgj: "kgj-Deva-NP",
        kgk: "kgk-Latn-BR",
        kgl: "kgl-Latn-AU",
        kgm: "kgm-Latn-BR",
        kgo: "kgo-Latn-SD",
        kgp: "kgp-Latn-BR",
        kgq: "kgq-Latn-ID",
        kgr: "kgr-Latn-ID",
        kgs: "kgs-Latn-AU",
        kgt: "kgt-Latn-NG",
        kgu: "kgu-Latn-PG",
        kgv: "kgv-Latn-ID",
        kgw: "kgw-Latn-ID",
        kgx: "kgx-Latn-ID",
        kgy: "kgy-Deva-NP",
        kha: "kha-Latn-IN",
        khb: "khb-Talu-CN",
        khc: "khc-Latn-ID",
        khd: "khd-Latn-ID",
        khe: "khe-Latn-ID",
        khf: "khf-Thai-LA",
        khg: "khg-Tibt-CN",
        khh: "khh-Latn-ID",
        khj: "khj-Latn-NG",
        khl: "khl-Latn-PG",
        khn: "khn-Deva-IN",
        khp: "khp-Latn-ID",
        khq: "khq-Latn-ML",
        khr: "khr-Latn-IN",
        "khr-Deva": "khr-Deva-IN",
        khs: "khs-Latn-ZZ",
        kht: "kht-Mymr-IN",
        khu: "khu-Latn-AO",
        khv: "khv-Cyrl-RU",
        khw: "khw-Arab-PK",
        khx: "khx-Latn-CD",
        khy: "khy-Latn-CD",
        khz: "khz-Latn-ZZ",
        ki: "ki-Latn-KE",
        kia: "kia-Latn-TD",
        kib: "kib-Latn-SD",
        kic: "kic-Latn-US",
        kid: "kid-Latn-CM",
        kie: "kie-Latn-TD",
        kif: "kif-Deva-NP",
        kig: "kig-Latn-ID",
        kih: "kih-Latn-PG",
        kij: "kij-Latn-ZZ",
        kil: "kil-Latn-NG",
        kim: "kim-Cyrl-RU",
        kio: "kio-Latn-US",
        kip: "kip-Deva-NP",
        kiq: "kiq-Latn-ID",
        kis: "kis-Latn-PG",
        kit: "kit-Latn-PG",
        kiu: "kiu-Latn-TR",
        kiv: "kiv-Latn-TZ",
        kiw: "kiw-Latn-ZZ",
        kix: "kix-Latn-IN",
        kiy: "kiy-Latn-ID",
        kiz: "kiz-Latn-TZ",
        kj: "kj-Latn-NA",
        kja: "kja-Latn-ID",
        kjb: "kjb-Latn-GT",
        kjc: "kjc-Latn-ID",
        kjd: "kjd-Latn-ZZ",
        kje: "kje-Latn-ID",
        kjg: "kjg-Laoo-LA",
        kjh: "kjh-Cyrl-RU",
        kji: "kji-Latn-SB",
        kjj: "kjj-Latn-AZ",
        kjk: "kjk-Latn-ID",
        kjl: "kjl-Deva-NP",
        kjm: "kjm-Latn-VN",
        kjn: "kjn-Latn-AU",
        kjo: "kjo-Deva-IN",
        kjp: "kjp-Mymr-MM",
        "kjp-Thai": "kjp-Thai-TH",
        kjq: "kjq-Latn-US",
        kjr: "kjr-Latn-ID",
        kjs: "kjs-Latn-ZZ",
        kjt: "kjt-Thai-TH",
        kju: "kju-Latn-US",
        kjx: "kjx-Latn-PG",
        kjy: "kjy-Latn-ZZ",
        kk: "kk-Cyrl-KZ",
        "kk-AF": "kk-Arab-AF",
        "kk-Arab": "kk-Arab-CN",
        "kk-CN": "kk-Arab-CN",
        "kk-IR": "kk-Arab-IR",
        "kk-MN": "kk-Arab-MN",
        kka: "kka-Latn-NG",
        kkb: "kkb-Latn-ID",
        kkc: "kkc-Latn-ZZ",
        kkd: "kkd-Latn-NG",
        kke: "kke-Latn-GN",
        "kke-Arab": "kke-Arab-GN",
        kkf: "kkf-Tibt-IN",
        kkg: "kkg-Latn-PH",
        kkh: "kkh-Lana-MM",
        kki: "kki-Latn-TZ",
        kkj: "kkj-Latn-CM",
        kkk: "kkk-Latn-SB",
        kkl: "kkl-Latn-ID",
        kkm: "kkm-Latn-NG",
        kko: "kko-Latn-SD",
        kkp: "kkp-Latn-AU",
        kkq: "kkq-Latn-CD",
        kkr: "kkr-Latn-NG",
        kks: "kks-Latn-NG",
        kkt: "kkt-Deva-NP",
        kku: "kku-Latn-NG",
        kkv: "kkv-Latn-ID",
        kkw: "kkw-Latn-CG",
        kkx: "kkx-Latn-ID",
        kky: "kky-Latn-AU",
        kkz: "kkz-Latn-CA",
        kl: "kl-Latn-GL",
        kla: "kla-Latn-US",
        klb: "klb-Latn-MX",
        klc: "klc-Latn-CM",
        kld: "kld-Latn-AU",
        kle: "kle-Deva-NP",
        klf: "klf-Latn-TD",
        klg: "klg-Latn-PH",
        klh: "klh-Latn-PG",
        kli: "kli-Latn-ID",
        klj: "klj-Arab-IR",
        klk: "klk-Latn-NG",
        kll: "kll-Latn-PH",
        klm: "klm-Latn-PG",
        kln: "kln-Latn-KE",
        klo: "klo-Latn-NG",
        klp: "klp-Latn-PG",
        klq: "klq-Latn-ZZ",
        klr: "klr-Deva-NP",
        kls: "kls-Latn-PK",
        "kls-Arab": "kls-Arab-PK",
        klt: "klt-Latn-ZZ",
        klu: "klu-Latn-LR",
        klv: "klv-Latn-VU",
        klw: "klw-Latn-ID",
        klx: "klx-Latn-ZZ",
        kly: "kly-Latn-ID",
        klz: "klz-Latn-ID",
        km: "km-Khmr-KH",
        kma: "kma-Latn-GH",
        kmb: "kmb-Latn-AO",
        kmc: "kmc-Latn-CN",
        "kmc-Hani": "kmc-Hani-CN",
        kmd: "kmd-Latn-PH",
        kme: "kme-Latn-CM",
        kmf: "kmf-Latn-PG",
        kmg: "kmg-Latn-PG",
        kmh: "kmh-Latn-ZZ",
        kmi: "kmi-Latn-NG",
        kmj: "kmj-Deva-IN",
        kmk: "kmk-Latn-PH",
        kml: "kml-Latn-PH",
        kmm: "kmm-Latn-IN",
        kmn: "kmn-Latn-PG",
        kmo: "kmo-Latn-ZZ",
        kmp: "kmp-Latn-CM",
        kmq: "kmq-Latn-ET",
        kms: "kms-Latn-ZZ",
        kmt: "kmt-Latn-ID",
        kmu: "kmu-Latn-ZZ",
        kmv: "kmv-Latn-BR",
        kmw: "kmw-Latn-ZZ",
        kmx: "kmx-Latn-PG",
        kmy: "kmy-Latn-NG",
        kmz: "kmz-Arab-IR",
        kn: "kn-Knda-IN",
        kna: "kna-Latn-NG",
        knb: "knb-Latn-PH",
        knd: "knd-Latn-ID",
        kne: "kne-Latn-PH",
        knf: "knf-Latn-GW",
        kni: "kni-Latn-NG",
        knj: "knj-Latn-GT",
        knk: "knk-Latn-SL",
        "knk-Arab": "knk-Arab-SL",
        knl: "knl-Latn-ID",
        knm: "knm-Latn-BR",
        kno: "kno-Latn-SL",
        knp: "knp-Latn-ZZ",
        knq: "knq-Latn-MY",
        knr: "knr-Latn-PG",
        kns: "kns-Latn-MY",
        "kns-Thai": "kns-Thai-TH",
        knt: "knt-Latn-BR",
        knu: "knu-Latn-GN",
        knv: "knv-Latn-PG",
        knw: "knw-Latn-NA",
        knx: "knx-Latn-ID",
        kny: "kny-Latn-CD",
        knz: "knz-Latn-BF",
        ko: "ko-Kore-KR",
        koa: "koa-Latn-PG",
        koc: "koc-Latn-NG",
        kod: "kod-Latn-ID",
        koe: "koe-Latn-SS",
        kof: "kof-Latn-NG",
        kog: "kog-Latn-CO",
        koh: "koh-Latn-CG",
        koi: "koi-Cyrl-RU",
        kok: "kok-Deva-IN",
        kol: "kol-Latn-ZZ",
        koo: "koo-Latn-UG",
        kop: "kop-Latn-PG",
        koq: "koq-Latn-GA",
        kos: "kos-Latn-FM",
        kot: "kot-Latn-CM",
        kou: "kou-Latn-TD",
        kov: "kov-Latn-NG",
        kow: "kow-Latn-NG",
        koy: "koy-Latn-US",
        koz: "koz-Latn-ZZ",
        kpa: "kpa-Latn-NG",
        kpc: "kpc-Latn-CO",
        kpd: "kpd-Latn-ID",
        kpe: "kpe-Latn-LR",
        kpf: "kpf-Latn-ZZ",
        kpg: "kpg-Latn-FM",
        kph: "kph-Latn-GH",
        kpi: "kpi-Latn-ID",
        kpj: "kpj-Latn-BR",
        kpk: "kpk-Latn-NG",
        kpl: "kpl-Latn-CD",
        kpm: "kpm-Latn-VN",
        kpn: "kpn-Latn-BR",
        kpo: "kpo-Latn-ZZ",
        kpq: "kpq-Latn-ID",
        kpr: "kpr-Latn-ZZ",
        kps: "kps-Latn-ID",
        kpt: "kpt-Cyrl-RU",
        kpu: "kpu-Latn-ID",
        kpw: "kpw-Latn-PG",
        kpx: "kpx-Latn-ZZ",
        kpy: "kpy-Cyrl-RU",
        kpz: "kpz-Latn-UG",
        kqa: "kqa-Latn-PG",
        kqb: "kqb-Latn-ZZ",
        kqc: "kqc-Latn-PG",
        kqd: "kqd-Syrc-IQ",
        kqe: "kqe-Latn-PH",
        kqf: "kqf-Latn-ZZ",
        kqg: "kqg-Latn-BF",
        kqh: "kqh-Latn-TZ",
        kqi: "kqi-Latn-PG",
        kqj: "kqj-Latn-PG",
        kqk: "kqk-Latn-BJ",
        kql: "kql-Latn-PG",
        kqm: "kqm-Latn-CI",
        kqn: "kqn-Latn-ZM",
        kqo: "kqo-Latn-LR",
        kqp: "kqp-Latn-TD",
        kqq: "kqq-Latn-BR",
        kqr: "kqr-Latn-MY",
        kqs: "kqs-Latn-ZZ",
        kqt: "kqt-Latn-MY",
        kqu: "kqu-Latn-ZA",
        kqv: "kqv-Latn-ID",
        kqw: "kqw-Latn-PG",
        kqx: "kqx-Latn-CM",
        kqy: "kqy-Ethi-ZZ",
        kqz: "kqz-Latn-ZA",
        kr: "kr-Latn-ZZ",
        kra: "kra-Deva-NP",
        krb: "krb-Latn-US",
        krc: "krc-Cyrl-RU",
        krd: "krd-Latn-TL",
        kre: "kre-Latn-BR",
        krf: "krf-Latn-VU",
        krh: "krh-Latn-NG",
        kri: "kri-Latn-SL",
        krj: "krj-Latn-PH",
        krk: "krk-Cyrl-RU",
        krl: "krl-Latn-RU",
        krn: "krn-Latn-LR",
        krp: "krp-Latn-NG",
        krr: "krr-Khmr-KH",
        krs: "krs-Latn-ZZ",
        krt: "krt-Latn-NE",
        kru: "kru-Deva-IN",
        krv: "krv-Khmr-KH",
        krw: "krw-Latn-LR",
        krx: "krx-Latn-SN",
        kry: "kry-Latn-AZ",
        krz: "krz-Latn-ID",
        ks: "ks-Arab-IN",
        ksa: "ksa-Latn-NG",
        ksb: "ksb-Latn-TZ",
        ksc: "ksc-Latn-PH",
        ksd: "ksd-Latn-ZZ",
        kse: "kse-Latn-PG",
        ksf: "ksf-Latn-CM",
        ksg: "ksg-Latn-SB",
        ksh: "ksh-Latn-DE",
        ksi: "ksi-Latn-PG",
        ksj: "ksj-Latn-ZZ",
        ksk: "ksk-Latn-US",
        ksl: "ksl-Latn-PG",
        ksm: "ksm-Latn-NG",
        ksn: "ksn-Latn-PH",
        kso: "kso-Latn-NG",
        ksp: "ksp-Latn-CF",
        ksq: "ksq-Latn-NG",
        ksr: "ksr-Latn-ZZ",
        kss: "kss-Latn-LR",
        kst: "kst-Latn-BF",
        ksu: "ksu-Mymr-IN",
        ksv: "ksv-Latn-CD",
        ksw: "ksw-Mymr-MM",
        "ksw-Latn": "ksw-Latn-MM",
        ksx: "ksx-Latn-ID",
        ksz: "ksz-Deva-IN",
        kta: "kta-Latn-VN",
        ktb: "ktb-Ethi-ZZ",
        ktc: "ktc-Latn-NG",
        ktd: "ktd-Latn-AU",
        ktf: "ktf-Latn-CD",
        ktg: "ktg-Latn-AU",
        kth: "kth-Latn-TD",
        kti: "kti-Latn-ID",
        ktj: "ktj-Latn-CI",
        ktk: "ktk-Latn-PG",
        ktl: "ktl-Arab-IR",
        ktm: "ktm-Latn-ZZ",
        ktn: "ktn-Latn-BR",
        kto: "kto-Latn-ZZ",
        ktp: "ktp-Plrd-CN",
        ktq: "ktq-Latn-PH",
        ktr: "ktr-Latn-MY",
        kts: "kts-Latn-ID",
        ktt: "ktt-Latn-ID",
        ktu: "ktu-Latn-CD",
        ktv: "ktv-Latn-VN",
        ktw: "ktw-Latn-US",
        ktx: "ktx-Latn-BR",
        kty: "kty-Latn-CD",
        ktz: "ktz-Latn-NA",
        ku: "ku-Latn-TR",
        "ku-Arab": "ku-Arab-IQ",
        "ku-LB": "ku-Arab-LB",
        "ku-Yezi": "ku-Yezi-GE",
        kub: "kub-Latn-ZZ",
        kuc: "kuc-Latn-ID",
        kud: "kud-Latn-ZZ",
        kue: "kue-Latn-ZZ",
        kuf: "kuf-Laoo-LA",
        kug: "kug-Latn-NG",
        kuh: "kuh-Latn-NG",
        kui: "kui-Latn-BR",
        kuj: "kuj-Latn-ZZ",
        kuk: "kuk-Latn-ID",
        kul: "kul-Latn-NG",
        kum: "kum-Cyrl-RU",
        kun: "kun-Latn-ZZ",
        kuo: "kuo-Latn-PG",
        kup: "kup-Latn-ZZ",
        kuq: "kuq-Latn-BR",
        kus: "kus-Latn-ZZ",
        kut: "kut-Latn-CA",
        kuu: "kuu-Latn-US",
        kuv: "kuv-Latn-ID",
        kuw: "kuw-Latn-CF",
        kux: "kux-Latn-AU",
        kuy: "kuy-Latn-AU",
        kuz: "kuz-Latn-CL",
        kv: "kv-Cyrl-RU",
        kva: "kva-Cyrl-RU",
        kvb: "kvb-Latn-ID",
        kvc: "kvc-Latn-PG",
        kvd: "kvd-Latn-ID",
        kve: "kve-Latn-MY",
        kvf: "kvf-Latn-TD",
        kvg: "kvg-Latn-ZZ",
        kvh: "kvh-Latn-ID",
        kvi: "kvi-Latn-TD",
        kvj: "kvj-Latn-CM",
        kvl: "kvl-Latn-MM",
        kvm: "kvm-Latn-CM",
        kvn: "kvn-Latn-CO",
        kvo: "kvo-Latn-ID",
        kvp: "kvp-Latn-ID",
        kvq: "kvq-Mymr-MM",
        "kvq-Latn": "kvq-Latn-MM",
        kvr: "kvr-Latn-ID",
        kvt: "kvt-Mymr-MM",
        kvv: "kvv-Latn-ID",
        kvw: "kvw-Latn-ID",
        kvx: "kvx-Arab-PK",
        kvy: "kvy-Kali-MM",
        kvz: "kvz-Latn-ID",
        kw: "kw-Latn-GB",
        kwa: "kwa-Latn-BR",
        kwb: "kwb-Latn-NG",
        kwc: "kwc-Latn-CG",
        kwd: "kwd-Latn-SB",
        kwe: "kwe-Latn-ID",
        kwf: "kwf-Latn-SB",
        kwg: "kwg-Latn-TD",
        kwh: "kwh-Latn-ID",
        kwi: "kwi-Latn-CO",
        kwj: "kwj-Latn-ZZ",
        kwk: "kwk-Latn-CA",
        kwl: "kwl-Latn-NG",
        kwm: "kwm-Latn-NA",
        kwn: "kwn-Latn-NA",
        kwo: "kwo-Latn-ZZ",
        kwp: "kwp-Latn-CI",
        kwq: "kwq-Latn-ZZ",
        kwr: "kwr-Latn-ID",
        kws: "kws-Latn-CD",
        kwt: "kwt-Latn-ID",
        kwu: "kwu-Latn-CM",
        kwv: "kwv-Latn-TD",
        kww: "kww-Latn-SR",
        kwy: "kwy-Latn-CD",
        kwz: "kwz-Latn-AO",
        kxa: "kxa-Latn-ZZ",
        kxb: "kxb-Latn-CI",
        kxc: "kxc-Ethi-ZZ",
        kxd: "kxd-Latn-BN",
        "kxd-Arab": "kxd-Arab-BN",
        kxe: "kxe-Latn-ZZ",
        kxf: "kxf-Mymr-MM",
        "kxf-Latn": "kxf-Latn-MM",
        kxi: "kxi-Latn-MY",
        kxj: "kxj-Latn-TD",
        kxk: "kxk-Mymr-MM",
        kxl: "kxl-Deva-IN",
        kxm: "kxm-Thai-TH",
        kxn: "kxn-Latn-MY",
        kxo: "kxo-Latn-BR",
        kxp: "kxp-Arab-PK",
        kxq: "kxq-Latn-ID",
        kxr: "kxr-Latn-PG",
        kxt: "kxt-Latn-PG",
        kxv: "kxv-Orya-IN",
        "kxv-Latn": "kxv-Latn-IN",
        "kxv-Telu": "kxv-Telu-IN",
        kxw: "kxw-Latn-ZZ",
        kxx: "kxx-Latn-CG",
        kxy: "kxy-Latn-VN",
        kxz: "kxz-Latn-ZZ",
        ky: "ky-Cyrl-KG",
        "ky-Arab": "ky-Arab-CN",
        "ky-CN": "ky-Arab-CN",
        "ky-Latn": "ky-Latn-TR",
        "ky-TR": "ky-Latn-TR",
        kya: "kya-Latn-TZ",
        kyb: "kyb-Latn-PH",
        kyc: "kyc-Latn-PG",
        kyd: "kyd-Latn-ID",
        kye: "kye-Latn-ZZ",
        kyf: "kyf-Latn-CI",
        kyg: "kyg-Latn-PG",
        kyh: "kyh-Latn-US",
        kyi: "kyi-Latn-MY",
        kyj: "kyj-Latn-PH",
        kyk: "kyk-Latn-PH",
        kyl: "kyl-Latn-US",
        kym: "kym-Latn-CF",
        kyn: "kyn-Latn-PH",
        kyo: "kyo-Latn-ID",
        kyq: "kyq-Latn-TD",
        kyr: "kyr-Latn-BR",
        kys: "kys-Latn-MY",
        kyt: "kyt-Latn-ID",
        kyu: "kyu-Kali-MM",
        "kyu-Latn": "kyu-Latn-MM",
        "kyu-Mymr": "kyu-Mymr-MM",
        kyv: "kyv-Deva-NP",
        kyw: "kyw-Deva-IN",
        "kyw-Beng": "kyw-Beng-IN",
        "kyw-Orya": "kyw-Orya-IN",
        kyx: "kyx-Latn-ZZ",
        kyy: "kyy-Latn-PG",
        kyz: "kyz-Latn-BR",
        kza: "kza-Latn-BF",
        kzb: "kzb-Latn-ID",
        kzc: "kzc-Latn-CI",
        kzd: "kzd-Latn-ID",
        kze: "kze-Latn-PG",
        kzf: "kzf-Latn-ID",
        kzh: "kzh-Arab-ZZ",
        kzi: "kzi-Latn-MY",
        kzj: "kzj-Latn-MY",
        kzk: "kzk-Latn-SB",
        kzl: "kzl-Latn-ID",
        kzm: "kzm-Latn-ID",
        kzn: "kzn-Latn-MW",
        kzo: "kzo-Latn-GA",
        kzp: "kzp-Latn-ID",
        kzr: "kzr-Latn-ZZ",
        kzs: "kzs-Latn-MY",
        kzt: "kzt-Latn-MY",
        kzu: "kzu-Latn-ID",
        kzv: "kzv-Latn-ID",
        kzw: "kzw-Latn-BR",
        kzx: "kzx-Latn-ID",
        kzy: "kzy-Latn-CD",
        kzz: "kzz-Latn-ID",
        la: "la-Latn-VA",
        laa: "laa-Latn-PH",
        lab: "lab-Lina-GR",
        lac: "lac-Latn-MX",
        lad: "lad-Hebr-IL",
        lae: "lae-Deva-IN",
        "lae-Tibt": "lae-Tibt-IN",
        lag: "lag-Latn-TZ",
        lah: "lah-Arab-PK",
        lai: "lai-Latn-MW",
        laj: "laj-Latn-UG",
        lal: "lal-Latn-CD",
        lam: "lam-Latn-ZM",
        lan: "lan-Latn-NG",
        lap: "lap-Latn-TD",
        laq: "laq-Latn-VN",
        lar: "lar-Latn-GH",
        las: "las-Latn-ZZ",
        lau: "lau-Latn-ID",
        law: "law-Latn-ID",
        lax: "lax-Latn-IN",
        "lax-Beng": "lax-Beng-IN",
        laz: "laz-Latn-PG",
        lb: "lb-Latn-LU",
        lbb: "lbb-Latn-PG",
        lbc: "lbc-Lisu-CN",
        lbe: "lbe-Cyrl-RU",
        lbf: "lbf-Deva-IN",
        "lbf-Tibt": "lbf-Tibt-CN",
        lbi: "lbi-Latn-CM",
        lbj: "lbj-Tibt-IN",
        "lbj-Arab": "lbj-Arab-IN",
        lbl: "lbl-Latn-PH",
        lbm: "lbm-Deva-IN",
        lbn: "lbn-Latn-LA",
        "lbn-Laoo": "lbn-Laoo-LA",
        lbo: "lbo-Laoo-LA",
        "lbo-Latn": "lbo-Latn-US",
        lbq: "lbq-Latn-PG",
        lbr: "lbr-Deva-NP",
        lbt: "lbt-Latn-VN",
        lbu: "lbu-Latn-ZZ",
        lbv: "lbv-Latn-PG",
        lbw: "lbw-Latn-ID",
        lbx: "lbx-Latn-ID",
        lby: "lby-Latn-AU",
        lbz: "lbz-Latn-AU",
        lcc: "lcc-Latn-ID",
        lcd: "lcd-Latn-ID",
        lce: "lce-Latn-ID",
        lcf: "lcf-Latn-ID",
        lch: "lch-Latn-AO",
        lcl: "lcl-Latn-ID",
        lcm: "lcm-Latn-ZZ",
        lcp: "lcp-Thai-CN",
        lcq: "lcq-Latn-ID",
        lcs: "lcs-Latn-ID",
        lda: "lda-Latn-CI",
        ldb: "ldb-Latn-ZZ",
        ldd: "ldd-Latn-NG",
        ldg: "ldg-Latn-NG",
        ldh: "ldh-Latn-NG",
        ldi: "ldi-Latn-CG",
        ldj: "ldj-Latn-NG",
        ldk: "ldk-Latn-NG",
        ldl: "ldl-Latn-NG",
        ldm: "ldm-Latn-GN",
        ldn: "ldn-Latn-001",
        ldo: "ldo-Latn-NG",
        ldp: "ldp-Latn-NG",
        ldq: "ldq-Latn-NG",
        lea: "lea-Latn-CD",
        leb: "leb-Latn-ZM",
        lec: "lec-Latn-BO",
        led: "led-Latn-ZZ",
        lee: "lee-Latn-ZZ",
        lef: "lef-Latn-GH",
        leh: "leh-Latn-ZM",
        lei: "lei-Latn-PG",
        lej: "lej-Latn-CD",
        lek: "lek-Latn-PG",
        lel: "lel-Latn-CD",
        lem: "lem-Latn-ZZ",
        len: "len-Latn-HN",
        leo: "leo-Latn-CM",
        lep: "lep-Lepc-IN",
        leq: "leq-Latn-ZZ",
        ler: "ler-Latn-PG",
        les: "les-Latn-CD",
        let: "let-Latn-PG",
        leu: "leu-Latn-ZZ",
        lev: "lev-Latn-ID",
        lew: "lew-Latn-ID",
        lex: "lex-Latn-ID",
        ley: "ley-Latn-ID",
        lez: "lez-Cyrl-RU",
        lfa: "lfa-Latn-CM",
        lfn: "lfn-Latn-001",
        "lfn-Cyrl": "lfn-Cyrl-001",
        lg: "lg-Latn-UG",
        lga: "lga-Latn-SB",
        lgb: "lgb-Latn-SB",
        lgg: "lgg-Latn-ZZ",
        lgh: "lgh-Latn-VN",
        lgi: "lgi-Latn-ID",
        lgk: "lgk-Latn-VU",
        lgl: "lgl-Latn-SB",
        lgm: "lgm-Latn-CD",
        lgn: "lgn-Latn-ET",
        lgo: "lgo-Latn-SS",
        lgq: "lgq-Latn-GH",
        lgr: "lgr-Latn-SB",
        lgt: "lgt-Latn-PG",
        lgu: "lgu-Latn-SB",
        lgz: "lgz-Latn-CD",
        lha: "lha-Latn-VN",
        lhh: "lhh-Latn-ID",
        lhi: "lhi-Latn-CN",
        lhm: "lhm-Deva-NP",
        lhn: "lhn-Latn-MY",
        lhs: "lhs-Syrc-SY",
        lht: "lht-Latn-VU",
        lhu: "lhu-Latn-CN",
        li: "li-Latn-NL",
        lia: "lia-Latn-ZZ",
        lib: "lib-Latn-PG",
        lic: "lic-Latn-CN",
        lid: "lid-Latn-ZZ",
        lie: "lie-Latn-CD",
        lif: "lif-Deva-NP",
        "lif-Limb": "lif-Limb-IN",
        lig: "lig-Latn-ZZ",
        lih: "lih-Latn-ZZ",
        lij: "lij-Latn-IT",
        lik: "lik-Latn-CD",
        lil: "lil-Latn-CA",
        lio: "lio-Latn-ID",
        lip: "lip-Latn-GH",
        liq: "liq-Latn-ET",
        lir: "lir-Latn-LR",
        lis: "lis-Lisu-CN",
        liu: "liu-Latn-SD",
        liv: "liv-Latn-LV",
        liw: "liw-Latn-ID",
        lix: "lix-Latn-ID",
        liy: "liy-Latn-CF",
        liz: "liz-Latn-CD",
        lja: "lja-Latn-AU",
        lje: "lje-Latn-ID",
        lji: "lji-Latn-ID",
        ljl: "ljl-Latn-ID",
        ljp: "ljp-Latn-ID",
        ljw: "ljw-Latn-AU",
        ljx: "ljx-Latn-AU",
        lka: "lka-Latn-TL",
        lkb: "lkb-Latn-KE",
        lkc: "lkc-Latn-VN",
        lkd: "lkd-Latn-BR",
        lke: "lke-Latn-UG",
        lkh: "lkh-Tibt-BT",
        lki: "lki-Arab-IR",
        lkj: "lkj-Latn-MY",
        lkl: "lkl-Latn-PG",
        lkm: "lkm-Latn-AU",
        lkn: "lkn-Latn-VU",
        lko: "lko-Latn-KE",
        lkr: "lkr-Latn-SS",
        lks: "lks-Latn-KE",
        lkt: "lkt-Latn-US",
        lku: "lku-Latn-AU",
        lky: "lky-Latn-SS",
        lla: "lla-Latn-NG",
        llb: "llb-Latn-MZ",
        llc: "llc-Latn-GN",
        lld: "lld-Latn-IT",
        lle: "lle-Latn-ZZ",
        llf: "llf-Latn-PG",
        llg: "llg-Latn-ID",
        lli: "lli-Latn-CG",
        llj: "llj-Latn-AU",
        llk: "llk-Latn-MY",
        lll: "lll-Latn-PG",
        llm: "llm-Latn-ID",
        lln: "lln-Latn-ZZ",
        llp: "llp-Latn-VU",
        llq: "llq-Latn-ID",
        llu: "llu-Latn-SB",
        llx: "llx-Latn-FJ",
        lma: "lma-Latn-GN",
        lmb: "lmb-Latn-VU",
        lmc: "lmc-Latn-AU",
        lmd: "lmd-Latn-SD",
        lme: "lme-Latn-TD",
        lmf: "lmf-Latn-ID",
        lmg: "lmg-Latn-PG",
        lmh: "lmh-Deva-NP",
        lmi: "lmi-Latn-CD",
        lmj: "lmj-Latn-ID",
        lmk: "lmk-Latn-IN",
        "lmk-Mymr": "lmk-Mymr-IN",
        lml: "lml-Latn-VU",
        lmn: "lmn-Telu-IN",
        lmo: "lmo-Latn-IT",
        lmp: "lmp-Latn-ZZ",
        lmq: "lmq-Latn-ID",
        lmr: "lmr-Latn-ID",
        lmu: "lmu-Latn-VU",
        lmv: "lmv-Latn-FJ",
        lmw: "lmw-Latn-US",
        lmx: "lmx-Latn-CM",
        lmy: "lmy-Latn-ID",
        ln: "ln-Latn-CD",
        lna: "lna-Latn-CF",
        lnb: "lnb-Latn-NA",
        lnd: "lnd-Latn-ID",
        lnh: "lnh-Latn-MY",
        lni: "lni-Latn-PG",
        lnj: "lnj-Latn-AU",
        lnl: "lnl-Latn-CF",
        lnm: "lnm-Latn-PG",
        lnn: "lnn-Latn-VU",
        lns: "lns-Latn-ZZ",
        lnu: "lnu-Latn-ZZ",
        lnw: "lnw-Latn-AU",
        lnz: "lnz-Latn-CD",
        lo: "lo-Laoo-LA",
        loa: "loa-Latn-ID",
        lob: "lob-Latn-BF",
        loc: "loc-Latn-PH",
        loe: "loe-Latn-ID",
        log: "log-Latn-CD",
        loh: "loh-Latn-SS",
        loi: "loi-Latn-CI",
        loj: "loj-Latn-ZZ",
        lok: "lok-Latn-ZZ",
        lol: "lol-Latn-CD",
        lom: "lom-Latn-LR",
        lon: "lon-Latn-MW",
        loo: "loo-Latn-CD",
        lop: "lop-Latn-NG",
        loq: "loq-Latn-CD",
        lor: "lor-Latn-ZZ",
        los: "los-Latn-ZZ",
        lot: "lot-Latn-SS",
        "lot-Arab": "lot-Arab-SS",
        lou: "lou-Latn-US",
        low: "low-Latn-MY",
        lox: "lox-Latn-ID",
        loy: "loy-Deva-NP",
        "loy-Tibt": "loy-Tibt-NP",
        loz: "loz-Latn-ZM",
        lpa: "lpa-Latn-VU",
        lpe: "lpe-Latn-ID",
        lpn: "lpn-Latn-MM",
        lpo: "lpo-Plrd-CN",
        "lpo-Lisu": "lpo-Lisu-CN",
        lpx: "lpx-Latn-SS",
        lqr: "lqr-Latn-SS",
        lra: "lra-Latn-MY",
        lrc: "lrc-Arab-IR",
        lrg: "lrg-Latn-AU",
        lri: "lri-Latn-KE",
        lrk: "lrk-Arab-PK",
        lrl: "lrl-Arab-IR",
        lrm: "lrm-Latn-KE",
        lrn: "lrn-Latn-ID",
        lro: "lro-Latn-SD",
        lrt: "lrt-Latn-ID",
        lrv: "lrv-Latn-VU",
        lrz: "lrz-Latn-VU",
        lsa: "lsa-Arab-IR",
        lsd: "lsd-Hebr-IL",
        lse: "lse-Latn-CD",
        lsi: "lsi-Latn-MM",
        lsm: "lsm-Latn-UG",
        lsr: "lsr-Latn-PG",
        lss: "lss-Arab-PK",
        lt: "lt-Latn-LT",
        ltg: "ltg-Latn-LV",
        lth: "lth-Latn-UG",
        lti: "lti-Latn-ID",
        ltn: "ltn-Latn-BR",
        lto: "lto-Latn-KE",
        lts: "lts-Latn-KE",
        ltu: "ltu-Latn-ID",
        lu: "lu-Latn-CD",
        lua: "lua-Latn-CD",
        luc: "luc-Latn-UG",
        lud: "lud-Latn-RU",
        lue: "lue-Latn-ZM",
        luf: "luf-Latn-PG",
        lui: "lui-Latn-US",
        luj: "luj-Latn-CD",
        luk: "luk-Tibt-BT",
        lul: "lul-Latn-SS",
        lum: "lum-Latn-AO",
        lun: "lun-Latn-ZM",
        luo: "luo-Latn-KE",
        lup: "lup-Latn-GA",
        luq: "luq-Latn-CU",
        lur: "lur-Latn-ID",
        lus: "lus-Latn-IN",
        "lus-Beng": "lus-Beng-BD",
        "lus-Brai": "lus-Brai-IN",
        lut: "lut-Latn-US",
        luu: "luu-Deva-NP",
        luv: "luv-Arab-OM",
        luw: "luw-Latn-CM",
        luy: "luy-Latn-KE",
        luz: "luz-Arab-IR",
        lv: "lv-Latn-LV",
        lva: "lva-Latn-TL",
        lvi: "lvi-Latn-LA",
        lvk: "lvk-Latn-SB",
        lvu: "lvu-Latn-ID",
        lwa: "lwa-Latn-CD",
        lwe: "lwe-Latn-ID",
        lwg: "lwg-Latn-KE",
        lwh: "lwh-Latn-VN",
        lwl: "lwl-Thai-TH",
        lwm: "lwm-Thai-CN",
        lwo: "lwo-Latn-SS",
        "lwo-ZA": "lwo-Latn-ZA",
        lwt: "lwt-Latn-ID",
        lww: "lww-Latn-VU",
        lxm: "lxm-Latn-PG",
        lya: "lya-Tibt-BT",
        lyn: "lyn-Latn-ZM",
        lzh: "lzh-Hans-CN",
        lzl: "lzl-Latn-VU",
        lzn: "lzn-Latn-MM",
        lzz: "lzz-Latn-TR",
        maa: "maa-Latn-MX",
        mab: "mab-Latn-MX",
        mad: "mad-Latn-ID",
        mae: "mae-Latn-NG",
        maf: "maf-Latn-CM",
        mag: "mag-Deva-IN",
        mai: "mai-Deva-IN",
        maj: "maj-Latn-MX",
        mak: "mak-Latn-ID",
        mam: "mam-Latn-GT",
        man: "man-Latn-GM",
        "man-GN": "man-Nkoo-GN",
        "man-Nkoo": "man-Nkoo-GN",
        maq: "maq-Latn-MX",
        mas: "mas-Latn-KE",
        mat: "mat-Latn-MX",
        mau: "mau-Latn-MX",
        mav: "mav-Latn-BR",
        maw: "maw-Latn-ZZ",
        max: "max-Latn-ID",
        maz: "maz-Latn-MX",
        mba: "mba-Latn-PH",
        mbb: "mbb-Latn-PH",
        mbc: "mbc-Latn-BR",
        mbd: "mbd-Latn-PH",
        mbf: "mbf-Latn-SG",
        mbh: "mbh-Latn-ZZ",
        mbi: "mbi-Latn-PH",
        mbj: "mbj-Latn-BR",
        mbk: "mbk-Latn-PG",
        mbl: "mbl-Latn-BR",
        mbm: "mbm-Latn-CG",
        mbn: "mbn-Latn-CO",
        mbo: "mbo-Latn-ZZ",
        mbp: "mbp-Latn-CO",
        mbq: "mbq-Latn-ZZ",
        mbr: "mbr-Latn-CO",
        mbs: "mbs-Latn-PH",
        mbt: "mbt-Latn-PH",
        mbu: "mbu-Latn-ZZ",
        mbv: "mbv-Latn-GN",
        mbw: "mbw-Latn-ZZ",
        mbx: "mbx-Latn-PG",
        mby: "mby-Arab-PK",
        mbz: "mbz-Latn-MX",
        mca: "mca-Latn-PY",
        mcb: "mcb-Latn-PE",
        mcc: "mcc-Latn-PG",
        mcd: "mcd-Latn-PE",
        mce: "mce-Latn-MX",
        mcf: "mcf-Latn-PE",
        mcg: "mcg-Latn-VE",
        mch: "mch-Latn-VE",
        mci: "mci-Latn-ZZ",
        mcj: "mcj-Latn-NG",
        mck: "mck-Latn-AO",
        mcl: "mcl-Latn-CO",
        mcm: "mcm-Latn-MY",
        mcn: "mcn-Latn-TD",
        mco: "mco-Latn-MX",
        mcp: "mcp-Latn-ZZ",
        mcq: "mcq-Latn-ZZ",
        mcr: "mcr-Latn-ZZ",
        mcs: "mcs-Latn-CM",
        mct: "mct-Latn-CM",
        mcu: "mcu-Latn-ZZ",
        mcv: "mcv-Latn-PG",
        mcw: "mcw-Latn-TD",
        mcx: "mcx-Latn-CF",
        mcy: "mcy-Latn-PG",
        mcz: "mcz-Latn-PG",
        mda: "mda-Latn-ZZ",
        mdb: "mdb-Latn-PG",
        mdc: "mdc-Latn-PG",
        mdd: "mdd-Latn-CM",
        mde: "mde-Arab-ZZ",
        mdf: "mdf-Cyrl-RU",
        mdg: "mdg-Latn-TD",
        mdh: "mdh-Latn-PH",
        mdi: "mdi-Latn-CD",
        mdj: "mdj-Latn-ZZ",
        mdk: "mdk-Latn-CD",
        mdm: "mdm-Latn-CD",
        mdn: "mdn-Latn-CF",
        mdp: "mdp-Latn-CD",
        mdq: "mdq-Latn-CD",
        mdr: "mdr-Latn-ID",
        mds: "mds-Latn-PG",
        mdt: "mdt-Latn-CG",
        mdu: "mdu-Latn-CG",
        mdv: "mdv-Latn-MX",
        mdw: "mdw-Latn-CG",
        mdx: "mdx-Ethi-ZZ",
        mdy: "mdy-Ethi-ET",
        "mdy-Latn": "mdy-Latn-ET",
        mdz: "mdz-Latn-BR",
        mea: "mea-Latn-CM",
        meb: "meb-Latn-PG",
        mec: "mec-Latn-AU",
        med: "med-Latn-ZZ",
        mee: "mee-Latn-ZZ",
        meh: "meh-Latn-MX",
        mej: "mej-Latn-ID",
        mek: "mek-Latn-ZZ",
        mel: "mel-Latn-MY",
        mem: "mem-Latn-AU",
        men: "men-Latn-SL",
        meo: "meo-Latn-MY",
        "meo-Arab": "meo-Arab-MY",
        mep: "mep-Latn-AU",
        meq: "meq-Latn-CM",
        mer: "mer-Latn-KE",
        mes: "mes-Latn-TD",
        met: "met-Latn-ZZ",
        meu: "meu-Latn-ZZ",
        mev: "mev-Latn-LR",
        mew: "mew-Latn-NG",
        mey: "mey-Latn-MR",
        "mey-Arab": "mey-Arab-MR",
        mez: "mez-Latn-US",
        mfa: "mfa-Arab-TH",
        mfb: "mfb-Latn-ID",
        mfc: "mfc-Latn-CD",
        mfd: "mfd-Latn-CM",
        mfe: "mfe-Latn-MU",
        mff: "mff-Latn-CM",
        mfg: "mfg-Latn-GN",
        "mfg-Arab": "mfg-Arab-GN",
        mfh: "mfh-Latn-CM",
        mfi: "mfi-Arab-CM",
        "mfi-Latn": "mfi-Latn-CM",
        mfj: "mfj-Latn-CM",
        mfk: "mfk-Latn-CM",
        mfl: "mfl-Latn-NG",
        mfm: "mfm-Latn-NG",
        mfn: "mfn-Latn-ZZ",
        mfo: "mfo-Latn-ZZ",
        mfp: "mfp-Latn-ID",
        mfq: "mfq-Latn-ZZ",
        mfr: "mfr-Latn-AU",
        mft: "mft-Latn-PG",
        mfu: "mfu-Latn-AO",
        mfv: "mfv-Latn-GW",
        mfw: "mfw-Latn-PG",
        mfx: "mfx-Latn-ET",
        "mfx-Ethi": "mfx-Ethi-ET",
        mfy: "mfy-Latn-MX",
        mfz: "mfz-Latn-SS",
        mg: "mg-Latn-MG",
        mgb: "mgb-Latn-TD",
        mgc: "mgc-Latn-SS",
        mgd: "mgd-Latn-SS",
        "mgd-Arab": "mgd-Arab-SS",
        mge: "mge-Latn-TD",
        mgf: "mgf-Latn-ID",
        mgg: "mgg-Latn-CM",
        mgh: "mgh-Latn-MZ",
        mgi: "mgi-Latn-NG",
        mgj: "mgj-Latn-NG",
        mgk: "mgk-Latn-ID",
        mgl: "mgl-Latn-ZZ",
        mgm: "mgm-Latn-TL",
        mgn: "mgn-Latn-CF",
        mgo: "mgo-Latn-CM",
        mgp: "mgp-Deva-NP",
        mgq: "mgq-Latn-TZ",
        mgr: "mgr-Latn-ZM",
        mgs: "mgs-Latn-TZ",
        mgt: "mgt-Latn-PG",
        mgu: "mgu-Latn-PG",
        mgv: "mgv-Latn-TZ",
        mgw: "mgw-Latn-TZ",
        mgy: "mgy-Latn-TZ",
        mgz: "mgz-Latn-TZ",
        mh: "mh-Latn-MH",
        mhb: "mhb-Latn-GA",
        mhc: "mhc-Latn-MX",
        mhd: "mhd-Latn-TZ",
        mhe: "mhe-Latn-MY",
        mhf: "mhf-Latn-PG",
        mhg: "mhg-Latn-AU",
        mhi: "mhi-Latn-ZZ",
        mhj: "mhj-Arab-AF",
        mhk: "mhk-Latn-CM",
        mhl: "mhl-Latn-ZZ",
        mhm: "mhm-Latn-MZ",
        mhn: "mhn-Latn-IT",
        mho: "mho-Latn-ZM",
        mhp: "mhp-Latn-ID",
        mhq: "mhq-Latn-US",
        mhs: "mhs-Latn-ID",
        mht: "mht-Latn-VE",
        mhu: "mhu-Latn-IN",
        mhw: "mhw-Latn-BW",
        mhx: "mhx-Latn-MM",
        mhy: "mhy-Latn-ID",
        mhz: "mhz-Latn-ID",
        mi: "mi-Latn-NZ",
        mia: "mia-Latn-US",
        mib: "mib-Latn-MX",
        mic: "mic-Latn-CA",
        mid: "mid-Mand-IQ",
        mie: "mie-Latn-MX",
        mif: "mif-Latn-ZZ",
        mig: "mig-Latn-MX",
        mih: "mih-Latn-MX",
        mii: "mii-Latn-MX",
        mij: "mij-Latn-CM",
        mik: "mik-Latn-US",
        mil: "mil-Latn-MX",
        mim: "mim-Latn-MX",
        min: "min-Latn-ID",
        mio: "mio-Latn-MX",
        mip: "mip-Latn-MX",
        miq: "miq-Latn-NI",
        mir: "mir-Latn-MX",
        mit: "mit-Latn-MX",
        miu: "miu-Latn-MX",
        miw: "miw-Latn-ZZ",
        mix: "mix-Latn-MX",
        miy: "miy-Latn-MX",
        miz: "miz-Latn-MX",
        mjb: "mjb-Latn-TL",
        mjc: "mjc-Latn-MX",
        mjd: "mjd-Latn-US",
        mje: "mje-Latn-TD",
        mjg: "mjg-Latn-CN",
        mjh: "mjh-Latn-TZ",
        mji: "mji-Latn-CN",
        mjj: "mjj-Latn-PG",
        mjk: "mjk-Latn-PG",
        mjl: "mjl-Deva-IN",
        "mjl-Takr": "mjl-Takr-IN",
        mjm: "mjm-Latn-PG",
        mjn: "mjn-Latn-PG",
        mjq: "mjq-Mlym-IN",
        mjr: "mjr-Mlym-IN",
        mjs: "mjs-Latn-NG",
        mjt: "mjt-Deva-IN",
        "mjt-Beng": "mjt-Beng-BD",
        mju: "mju-Telu-IN",
        mjv: "mjv-Mlym-IN",
        mjw: "mjw-Latn-IN",
        mjx: "mjx-Latn-BD",
        "mjx-Beng": "mjx-Beng-BD",
        mjy: "mjy-Latn-US",
        mjz: "mjz-Deva-NP",
        mk: "mk-Cyrl-MK",
        mka: "mka-Latn-CI",
        mkb: "mkb-Deva-IN",
        mkc: "mkc-Latn-PG",
        mke: "mke-Deva-IN",
        mkf: "mkf-Latn-NG",
        mki: "mki-Arab-ZZ",
        mkj: "mkj-Latn-FM",
        mkk: "mkk-Latn-CM",
        mkl: "mkl-Latn-ZZ",
        mkm: "mkm-Thai-TH",
        mkn: "mkn-Latn-ID",
        mko: "mko-Latn-NG",
        mkp: "mkp-Latn-ZZ",
        mkr: "mkr-Latn-PG",
        mks: "mks-Latn-MX",
        mkt: "mkt-Latn-NC",
        mku: "mku-Latn-GN",
        mkv: "mkv-Latn-VU",
        mkw: "mkw-Latn-ZZ",
        mkx: "mkx-Latn-PH",
        mky: "mky-Latn-ID",
        mkz: "mkz-Latn-TL",
        ml: "ml-Mlym-IN",
        mla: "mla-Latn-VU",
        mlb: "mlb-Latn-CM",
        mlc: "mlc-Latn-VN",
        mle: "mle-Latn-ZZ",
        mlf: "mlf-Thai-LA",
        "mlf-Latn": "mlf-Latn-LA",
        mlh: "mlh-Latn-PG",
        mli: "mli-Latn-ID",
        mlj: "mlj-Latn-TD",
        mlk: "mlk-Latn-KE",
        mll: "mll-Latn-VU",
        mln: "mln-Latn-SB",
        mlo: "mlo-Latn-SN",
        mlp: "mlp-Latn-ZZ",
        mlq: "mlq-Latn-SN",
        "mlq-Arab": "mlq-Arab-SN",
        mlr: "mlr-Latn-CM",
        mls: "mls-Latn-SD",
        mlu: "mlu-Latn-SB",
        mlv: "mlv-Latn-VU",
        mlw: "mlw-Latn-CM",
        mlx: "mlx-Latn-VU",
        mlz: "mlz-Latn-PH",
        mma: "mma-Latn-NG",
        mmb: "mmb-Latn-ID",
        mmc: "mmc-Latn-MX",
        mmd: "mmd-Latn-CN",
        "mmd-Hans": "mmd-Hans-CN",
        "mmd-Hant": "mmd-Hant-CN",
        mme: "mme-Latn-VU",
        mmf: "mmf-Latn-NG",
        mmg: "mmg-Latn-VU",
        mmh: "mmh-Latn-BR",
        mmi: "mmi-Latn-PG",
        mmm: "mmm-Latn-VU",
        mmn: "mmn-Latn-PH",
        mmo: "mmo-Latn-ZZ",
        mmp: "mmp-Latn-PG",
        mmq: "mmq-Latn-PG",
        mmr: "mmr-Latn-CN",
        mmt: "mmt-Latn-PG",
        mmu: "mmu-Latn-ZZ",
        mmv: "mmv-Latn-BR",
        mmw: "mmw-Latn-VU",
        mmx: "mmx-Latn-ZZ",
        mmy: "mmy-Latn-TD",
        mmz: "mmz-Latn-CD",
        mn: "mn-Cyrl-MN",
        "mn-CN": "mn-Mong-CN",
        "mn-Mong": "mn-Mong-CN",
        mna: "mna-Latn-ZZ",
        mnb: "mnb-Latn-ID",
        mnd: "mnd-Latn-BR",
        mne: "mne-Latn-TD",
        mnf: "mnf-Latn-ZZ",
        mng: "mng-Latn-VN",
        mnh: "mnh-Latn-CD",
        mni: "mni-Beng-IN",
        mnj: "mnj-Arab-AF",
        mnl: "mnl-Latn-VU",
        mnm: "mnm-Latn-PG",
        mnn: "mnn-Latn-VN",
        mnp: "mnp-Latn-CN",
        mnq: "mnq-Latn-MY",
        mnr: "mnr-Latn-US",
        mns: "mns-Cyrl-RU",
        mnu: "mnu-Latn-ID",
        mnv: "mnv-Latn-SB",
        mnw: "mnw-Mymr-MM",
        mnx: "mnx-Latn-ID",
        mny: "mny-Latn-MZ",
        mnz: "mnz-Latn-ID",
        mo: "mo-Latn-RO",
        moa: "moa-Latn-ZZ",
        moc: "moc-Latn-AR",
        mod: "mod-Latn-US",
        moe: "moe-Latn-CA",
        mog: "mog-Latn-ID",
        moh: "moh-Latn-CA",
        moi: "moi-Latn-NG",
        moj: "moj-Latn-CG",
        mok: "mok-Latn-ID",
        mom: "mom-Latn-NI",
        moo: "moo-Latn-VN",
        mop: "mop-Latn-BZ",
        moq: "moq-Latn-ID",
        mor: "mor-Latn-SD",
        mos: "mos-Latn-BF",
        mot: "mot-Latn-CO",
        mou: "mou-Latn-TD",
        mov: "mov-Latn-US",
        mow: "mow-Latn-CG",
        mox: "mox-Latn-ZZ",
        moy: "moy-Latn-ET",
        "moy-Ethi": "moy-Ethi-ET",
        moz: "moz-Latn-TD",
        mpa: "mpa-Latn-TZ",
        mpb: "mpb-Latn-AU",
        mpc: "mpc-Latn-AU",
        mpd: "mpd-Latn-BR",
        mpe: "mpe-Latn-ET",
        "mpe-Ethi": "mpe-Ethi-ET",
        mpg: "mpg-Latn-TD",
        mph: "mph-Latn-AU",
        mpi: "mpi-Latn-CM",
        mpj: "mpj-Latn-AU",
        mpk: "mpk-Latn-TD",
        mpl: "mpl-Latn-PG",
        mpm: "mpm-Latn-MX",
        mpn: "mpn-Latn-PG",
        mpo: "mpo-Latn-PG",
        mpp: "mpp-Latn-ZZ",
        mpq: "mpq-Latn-BR",
        mpr: "mpr-Latn-SB",
        mps: "mps-Latn-ZZ",
        mpt: "mpt-Latn-ZZ",
        mpu: "mpu-Latn-BR",
        mpv: "mpv-Latn-PG",
        mpw: "mpw-Latn-BR",
        mpx: "mpx-Latn-ZZ",
        mpy: "mpy-Latn-ID",
        mpz: "mpz-Thai-TH",
        mqa: "mqa-Latn-ID",
        mqb: "mqb-Latn-CM",
        mqc: "mqc-Latn-ID",
        mqe: "mqe-Latn-PG",
        mqf: "mqf-Latn-ID",
        mqg: "mqg-Latn-ID",
        mqh: "mqh-Latn-MX",
        mqi: "mqi-Latn-ID",
        mqj: "mqj-Latn-ID",
        mqk: "mqk-Latn-PH",
        mql: "mql-Latn-ZZ",
        mqm: "mqm-Latn-PF",
        mqn: "mqn-Latn-ID",
        mqo: "mqo-Latn-ID",
        mqp: "mqp-Latn-ID",
        mqq: "mqq-Latn-MY",
        mqr: "mqr-Latn-ID",
        mqs: "mqs-Latn-ID",
        mqu: "mqu-Latn-SS",
        mqv: "mqv-Latn-PG",
        mqw: "mqw-Latn-PG",
        mqx: "mqx-Latn-ID",
        "mqx-Bugi": "mqx-Bugi-ID",
        mqy: "mqy-Latn-ID",
        mqz: "mqz-Latn-PG",
        mr: "mr-Deva-IN",
        mra: "mra-Thai-TH",
        mrb: "mrb-Latn-VU",
        mrc: "mrc-Latn-US",
        mrd: "mrd-Deva-NP",
        mrf: "mrf-Latn-ID",
        mrg: "mrg-Latn-IN",
        "mrg-Beng": "mrg-Beng-IN",
        "mrg-Deva": "mrg-Deva-IN",
        mrh: "mrh-Latn-IN",
        mrj: "mrj-Cyrl-RU",
        mrk: "mrk-Latn-NC",
        mrl: "mrl-Latn-FM",
        mrm: "mrm-Latn-VU",
        mrn: "mrn-Latn-SB",
        mro: "mro-Mroo-BD",
        mrp: "mrp-Latn-VU",
        mrq: "mrq-Latn-PF",
        mrr: "mrr-Deva-IN",
        mrs: "mrs-Latn-VU",
        mrt: "mrt-Latn-NG",
        mru: "mru-Latn-CM",
        mrv: "mrv-Latn-PF",
        mrw: "mrw-Latn-PH",
        "mrw-Arab": "mrw-Arab-PH",
        mrx: "mrx-Latn-ID",
        mry: "mry-Latn-PH",
        mrz: "mrz-Latn-ID",
        ms: "ms-Latn-MY",
        "ms-CC": "ms-Arab-CC",
        msb: "msb-Latn-PH",
        msc: "msc-Latn-GN",
        mse: "mse-Latn-TD",
        msf: "msf-Latn-ID",
        msg: "msg-Latn-ID",
        msh: "msh-Latn-MG",
        msi: "msi-Latn-MY",
        msj: "msj-Latn-CD",
        msk: "msk-Latn-PH",
        msl: "msl-Latn-ID",
        msm: "msm-Latn-PH",
        msn: "msn-Latn-VU",
        mso: "mso-Latn-ID",
        msp: "msp-Latn-BR",
        msq: "msq-Latn-NC",
        mss: "mss-Latn-ID",
        msu: "msu-Latn-PG",
        msv: "msv-Latn-CM",
        msw: "msw-Latn-GW",
        msx: "msx-Latn-PG",
        msy: "msy-Latn-PG",
        msz: "msz-Latn-PG",
        mt: "mt-Latn-MT",
        mta: "mta-Latn-PH",
        mtb: "mtb-Latn-CI",
        mtc: "mtc-Latn-ZZ",
        mtd: "mtd-Latn-ID",
        mte: "mte-Latn-SB",
        mtf: "mtf-Latn-ZZ",
        mtg: "mtg-Latn-ID",
        mth: "mth-Latn-ID",
        mti: "mti-Latn-ZZ",
        mtj: "mtj-Latn-ID",
        mtk: "mtk-Latn-CM",
        mtl: "mtl-Latn-NG",
        mtm: "mtm-Cyrl-RU",
        mtn: "mtn-Latn-NI",
        mto: "mto-Latn-MX",
        mtp: "mtp-Latn-BO",
        mtq: "mtq-Latn-VN",
        mtr: "mtr-Deva-IN",
        mts: "mts-Latn-PE",
        mtt: "mtt-Latn-VU",
        mtu: "mtu-Latn-MX",
        mtv: "mtv-Latn-PG",
        mtw: "mtw-Latn-PH",
        mtx: "mtx-Latn-MX",
        mty: "mty-Latn-PG",
        mua: "mua-Latn-CM",
        mub: "mub-Latn-TD",
        muc: "muc-Latn-CM",
        mud: "mud-Cyrl-RU",
        mue: "mue-Latn-EC",
        mug: "mug-Latn-CM",
        muh: "muh-Latn-SS",
        mui: "mui-Latn-ID",
        muj: "muj-Latn-TD",
        muk: "muk-Tibt-NP",
        mum: "mum-Latn-PG",
        muo: "muo-Latn-CM",
        muq: "muq-Latn-CN",
        mur: "mur-Latn-ZZ",
        mus: "mus-Latn-US",
        mut: "mut-Deva-IN",
        muu: "muu-Latn-KE",
        muv: "muv-Taml-IN",
        mux: "mux-Latn-PG",
        muy: "muy-Latn-CM",
        muz: "muz-Ethi-ET",
        "muz-Latn": "muz-Latn-ET",
        mva: "mva-Latn-ZZ",
        mvd: "mvd-Latn-ID",
        mvf: "mvf-Mong-CN",
        "mvf-Phag": "mvf-Phag-CN",
        mvg: "mvg-Latn-MX",
        mvh: "mvh-Latn-TD",
        mvk: "mvk-Latn-PG",
        mvl: "mvl-Latn-AU",
        mvn: "mvn-Latn-ZZ",
        mvo: "mvo-Latn-SB",
        mvp: "mvp-Latn-ID",
        mvq: "mvq-Latn-PG",
        mvr: "mvr-Latn-ID",
        mvs: "mvs-Latn-ID",
        mvt: "mvt-Latn-VU",
        mvu: "mvu-Latn-TD",
        mvv: "mvv-Latn-MY",
        mvw: "mvw-Latn-TZ",
        mvx: "mvx-Latn-ID",
        mvy: "mvy-Arab-PK",
        mvz: "mvz-Ethi-ET",
        "mvz-Arab": "mvz-Arab-ET",
        mwa: "mwa-Latn-PG",
        mwb: "mwb-Latn-PG",
        mwc: "mwc-Latn-PG",
        mwe: "mwe-Latn-TZ",
        mwf: "mwf-Latn-AU",
        mwg: "mwg-Latn-PG",
        mwh: "mwh-Latn-PG",
        mwi: "mwi-Latn-VU",
        mwk: "mwk-Latn-ML",
        mwl: "mwl-Latn-PT",
        mwm: "mwm-Latn-TD",
        mwn: "mwn-Latn-ZM",
        mwo: "mwo-Latn-VU",
        mwp: "mwp-Latn-AU",
        mwq: "mwq-Latn-MM",
        mwr: "mwr-Deva-IN",
        mws: "mws-Latn-KE",
        mwt: "mwt-Mymr-MM",
        "mwt-Thai": "mwt-Thai-TH",
        mwu: "mwu-Latn-SS",
        mwv: "mwv-Latn-ID",
        mww: "mww-Hmnp-US",
        mwz: "mwz-Latn-CD",
        mxa: "mxa-Latn-MX",
        mxb: "mxb-Latn-MX",
        mxc: "mxc-Latn-ZW",
        mxd: "mxd-Latn-ID",
        mxe: "mxe-Latn-VU",
        mxf: "mxf-Latn-CM",
        mxg: "mxg-Latn-AO",
        mxh: "mxh-Latn-CD",
        mxi: "mxi-Latn-ES",
        mxj: "mxj-Latn-IN",
        mxk: "mxk-Latn-PG",
        mxl: "mxl-Latn-BJ",
        mxm: "mxm-Latn-ZZ",
        mxn: "mxn-Latn-ID",
        mxo: "mxo-Latn-ZM",
        mxp: "mxp-Latn-MX",
        mxq: "mxq-Latn-MX",
        mxr: "mxr-Latn-MY",
        mxs: "mxs-Latn-MX",
        mxt: "mxt-Latn-MX",
        mxu: "mxu-Latn-CM",
        mxv: "mxv-Latn-MX",
        mxw: "mxw-Latn-PG",
        mxx: "mxx-Latn-CI",
        mxy: "mxy-Latn-MX",
        mxz: "mxz-Latn-ID",
        my: "my-Mymr-MM",
        myb: "myb-Latn-TD",
        myc: "myc-Latn-CD",
        mye: "mye-Latn-GA",
        myf: "myf-Latn-ET",
        myg: "myg-Latn-CM",
        myh: "myh-Latn-US",
        myj: "myj-Latn-SS",
        myk: "myk-Latn-ZZ",
        myl: "myl-Latn-ID",
        mym: "mym-Ethi-ZZ",
        myp: "myp-Latn-BR",
        myr: "myr-Latn-PE",
        myu: "myu-Latn-BR",
        myv: "myv-Cyrl-RU",
        myw: "myw-Latn-ZZ",
        myx: "myx-Latn-UG",
        myy: "myy-Latn-CO",
        myz: "myz-Mand-IR",
        mza: "mza-Latn-MX",
        mzd: "mzd-Latn-CM",
        mze: "mze-Latn-PG",
        mzh: "mzh-Latn-AR",
        mzi: "mzi-Latn-MX",
        mzj: "mzj-Latn-LR",
        mzk: "mzk-Latn-ZZ",
        mzl: "mzl-Latn-MX",
        mzm: "mzm-Latn-ZZ",
        mzn: "mzn-Arab-IR",
        mzo: "mzo-Latn-BR",
        mzp: "mzp-Latn-ZZ",
        mzq: "mzq-Latn-ID",
        mzr: "mzr-Latn-BR",
        mzt: "mzt-Latn-MY",
        mzu: "mzu-Latn-PG",
        mzv: "mzv-Latn-CF",
        mzw: "mzw-Latn-ZZ",
        mzx: "mzx-Latn-GY",
        mzz: "mzz-Latn-ZZ",
        na: "na-Latn-NR",
        naa: "naa-Latn-ID",
        nab: "nab-Latn-BR",
        nac: "nac-Latn-ZZ",
        nae: "nae-Latn-ID",
        naf: "naf-Latn-ZZ",
        nag: "nag-Latn-IN",
        naj: "naj-Latn-GN",
        nak: "nak-Latn-ZZ",
        nal: "nal-Latn-PG",
        nam: "nam-Latn-AU",
        nan: "nan-Hans-CN",
        nao: "nao-Deva-NP",
        nap: "nap-Latn-IT",
        naq: "naq-Latn-NA",
        nar: "nar-Latn-NG",
        nas: "nas-Latn-ZZ",
        nat: "nat-Latn-NG",
        naw: "naw-Latn-GH",
        nax: "nax-Latn-PG",
        nay: "nay-Latn-AU",
        naz: "naz-Latn-MX",
        nb: "nb-Latn-NO",
        nba: "nba-Latn-AO",
        nbb: "nbb-Latn-NG",
        nbc: "nbc-Latn-IN",
        nbd: "nbd-Latn-CD",
        nbe: "nbe-Latn-IN",
        nbh: "nbh-Latn-NG",
        nbi: "nbi-Latn-IN",
        nbj: "nbj-Latn-AU",
        nbk: "nbk-Latn-PG",
        nbm: "nbm-Latn-CF",
        nbn: "nbn-Latn-ID",
        nbo: "nbo-Latn-NG",
        nbp: "nbp-Latn-NG",
        nbq: "nbq-Latn-ID",
        nbr: "nbr-Latn-NG",
        nbt: "nbt-Latn-IN",
        "nbt-Deva": "nbt-Deva-IN",
        nbu: "nbu-Latn-IN",
        nbv: "nbv-Latn-CM",
        nbw: "nbw-Latn-CD",
        nby: "nby-Latn-PG",
        nca: "nca-Latn-ZZ",
        ncb: "ncb-Latn-IN",
        "ncb-Deva": "ncb-Deva-IN",
        ncc: "ncc-Latn-PG",
        ncd: "ncd-Deva-NP",
        nce: "nce-Latn-ZZ",
        ncf: "ncf-Latn-ZZ",
        ncg: "ncg-Latn-CA",
        nch: "nch-Latn-MX",
        nci: "nci-Latn-MX",
        ncj: "ncj-Latn-MX",
        nck: "nck-Latn-AU",
        ncl: "ncl-Latn-MX",
        ncm: "ncm-Latn-PG",
        ncn: "ncn-Latn-PG",
        nco: "nco-Latn-ZZ",
        ncq: "ncq-Laoo-LA",
        "ncq-Thai": "ncq-Thai-LA",
        ncr: "ncr-Latn-CM",
        nct: "nct-Latn-IN",
        "nct-Beng": "nct-Beng-IN",
        ncu: "ncu-Latn-ZZ",
        ncx: "ncx-Latn-MX",
        ncz: "ncz-Latn-US",
        nd: "nd-Latn-ZW",
        nda: "nda-Latn-CG",
        ndb: "ndb-Latn-CM",
        ndc: "ndc-Latn-MZ",
        ndd: "ndd-Latn-NG",
        ndf: "ndf-Cyrl-RU",
        ndg: "ndg-Latn-TZ",
        ndh: "ndh-Latn-TZ",
        ndi: "ndi-Latn-NG",
        ndj: "ndj-Latn-TZ",
        ndk: "ndk-Latn-CD",
        ndl: "ndl-Latn-CD",
        ndm: "ndm-Latn-TD",
        ndn: "ndn-Latn-CG",
        ndp: "ndp-Latn-UG",
        ndq: "ndq-Latn-AO",
        ndr: "ndr-Latn-NG",
        nds: "nds-Latn-DE",
        ndt: "ndt-Latn-CD",
        ndu: "ndu-Latn-CM",
        ndv: "ndv-Latn-SN",
        ndw: "ndw-Latn-CD",
        ndx: "ndx-Latn-ID",
        ndy: "ndy-Latn-CF",
        "ndy-TD": "ndy-Latn-TD",
        ndz: "ndz-Latn-SS",
        ne: "ne-Deva-NP",
        nea: "nea-Latn-ID",
        neb: "neb-Latn-ZZ",
        nec: "nec-Latn-ID",
        ned: "ned-Latn-NG",
        nee: "nee-Latn-NC",
        neg: "neg-Cyrl-RU",
        neh: "neh-Tibt-BT",
        nei: "nei-Xsux-TR",
        nej: "nej-Latn-PG",
        nek: "nek-Latn-NC",
        nem: "nem-Latn-NC",
        nen: "nen-Latn-NC",
        neo: "neo-Latn-VN",
        neq: "neq-Latn-MX",
        ner: "ner-Latn-ID",
        net: "net-Latn-PG",
        neu: "neu-Latn-001",
        new: "new-Deva-NP",
        nex: "nex-Latn-ZZ",
        ney: "ney-Latn-CI",
        nez: "nez-Latn-US",
        nfa: "nfa-Latn-ID",
        nfd: "nfd-Latn-NG",
        nfl: "nfl-Latn-SB",
        nfr: "nfr-Latn-ZZ",
        nfu: "nfu-Latn-CM",
        ng: "ng-Latn-NA",
        nga: "nga-Latn-ZZ",
        ngb: "ngb-Latn-ZZ",
        ngc: "ngc-Latn-CD",
        ngd: "ngd-Latn-CF",
        nge: "nge-Latn-CM",
        ngg: "ngg-Latn-CF",
        ngh: "ngh-Latn-ZA",
        ngi: "ngi-Latn-NG",
        ngj: "ngj-Latn-CM",
        ngk: "ngk-Latn-AU",
        ngl: "ngl-Latn-MZ",
        ngm: "ngm-Latn-FM",
        ngn: "ngn-Latn-CM",
        ngp: "ngp-Latn-TZ",
        ngq: "ngq-Latn-TZ",
        ngr: "ngr-Latn-SB",
        ngs: "ngs-Latn-NG",
        ngt: "ngt-Laoo-LA",
        ngu: "ngu-Latn-MX",
        ngv: "ngv-Latn-CM",
        ngw: "ngw-Latn-NG",
        ngx: "ngx-Latn-NG",
        ngy: "ngy-Latn-CM",
        ngz: "ngz-Latn-CG",
        nha: "nha-Latn-AU",
        nhb: "nhb-Latn-ZZ",
        nhc: "nhc-Latn-MX",
        nhd: "nhd-Latn-PY",
        nhe: "nhe-Latn-MX",
        nhf: "nhf-Latn-AU",
        nhg: "nhg-Latn-MX",
        nhi: "nhi-Latn-MX",
        nhk: "nhk-Latn-MX",
        nhm: "nhm-Latn-MX",
        nhn: "nhn-Latn-MX",
        nho: "nho-Latn-PG",
        nhp: "nhp-Latn-MX",
        nhq: "nhq-Latn-MX",
        nhr: "nhr-Latn-BW",
        nht: "nht-Latn-MX",
        nhu: "nhu-Latn-CM",
        nhv: "nhv-Latn-MX",
        nhw: "nhw-Latn-MX",
        nhx: "nhx-Latn-MX",
        nhy: "nhy-Latn-MX",
        nhz: "nhz-Latn-MX",
        nia: "nia-Latn-ID",
        nib: "nib-Latn-PG",
        nid: "nid-Latn-AU",
        nie: "nie-Latn-TD",
        nif: "nif-Latn-ZZ",
        nig: "nig-Latn-AU",
        nih: "nih-Latn-TZ",
        nii: "nii-Latn-ZZ",
        nij: "nij-Latn-ID",
        nil: "nil-Latn-ID",
        nim: "nim-Latn-TZ",
        nin: "nin-Latn-ZZ",
        nio: "nio-Cyrl-RU",
        niq: "niq-Latn-KE",
        nir: "nir-Latn-ID",
        nis: "nis-Latn-PG",
        nit: "nit-Telu-IN",
        niu: "niu-Latn-NU",
        niv: "niv-Cyrl-RU",
        "niv-Latn": "niv-Latn-RU",
        niw: "niw-Latn-PG",
        nix: "nix-Latn-CD",
        niy: "niy-Latn-ZZ",
        niz: "niz-Latn-ZZ",
        nja: "nja-Latn-NG",
        njb: "njb-Latn-IN",
        njd: "njd-Latn-TZ",
        njh: "njh-Latn-IN",
        nji: "nji-Latn-AU",
        njj: "njj-Latn-CM",
        njl: "njl-Latn-SS",
        njm: "njm-Latn-IN",
        njn: "njn-Latn-IN",
        njo: "njo-Latn-IN",
        njr: "njr-Latn-NG",
        njs: "njs-Latn-ID",
        njt: "njt-Latn-SR",
        nju: "nju-Latn-AU",
        njx: "njx-Latn-CG",
        njy: "njy-Latn-CM",
        njz: "njz-Latn-IN",
        "njz-Beng": "njz-Beng-IN",
        nka: "nka-Latn-ZM",
        nkb: "nkb-Latn-IN",
        nkc: "nkc-Latn-CM",
        nkd: "nkd-Latn-IN",
        nke: "nke-Latn-SB",
        nkf: "nkf-Latn-IN",
        nkg: "nkg-Latn-ZZ",
        nkh: "nkh-Latn-IN",
        nki: "nki-Latn-IN",
        "nki-Beng": "nki-Beng-IN",
        nkj: "nkj-Latn-ID",
        nkk: "nkk-Latn-VU",
        nkm: "nkm-Latn-PG",
        nkn: "nkn-Latn-AO",
        nko: "nko-Latn-ZZ",
        nkq: "nkq-Latn-GH",
        nkr: "nkr-Latn-FM",
        nks: "nks-Latn-ID",
        nkt: "nkt-Latn-TZ",
        nku: "nku-Latn-CI",
        nkv: "nkv-Latn-MW",
        nkw: "nkw-Latn-CD",
        nkx: "nkx-Latn-NG",
        nkz: "nkz-Latn-NG",
        nl: "nl-Latn-NL",
        nla: "nla-Latn-CM",
        nlc: "nlc-Latn-ID",
        nle: "nle-Latn-KE",
        nlg: "nlg-Latn-SB",
        nli: "nli-Arab-AF",
        nlj: "nlj-Latn-CD",
        nlk: "nlk-Latn-ID",
        nlm: "nlm-Arab-PK",
        nlo: "nlo-Latn-CD",
        nlq: "nlq-Latn-MM",
        nlu: "nlu-Latn-GH",
        nlv: "nlv-Latn-MX",
        nlw: "nlw-Latn-AU",
        nlx: "nlx-Deva-IN",
        nly: "nly-Latn-AU",
        nlz: "nlz-Latn-SB",
        nma: "nma-Latn-IN",
        nmb: "nmb-Latn-VU",
        nmc: "nmc-Latn-TD",
        nmd: "nmd-Latn-GA",
        nme: "nme-Latn-IN",
        nmf: "nmf-Latn-IN",
        nmg: "nmg-Latn-CM",
        nmh: "nmh-Latn-IN",
        nmi: "nmi-Latn-NG",
        nmj: "nmj-Latn-CF",
        nmk: "nmk-Latn-VU",
        nml: "nml-Latn-CM",
        nmm: "nmm-Deva-NP",
        "nmm-Tibt": "nmm-Tibt-NP",
        nmn: "nmn-Latn-BW",
        nmo: "nmo-Latn-IN",
        "nmo-Beng": "nmo-Beng-IN",
        nmp: "nmp-Latn-AU",
        nmq: "nmq-Latn-ZW",
        nmr: "nmr-Latn-CM",
        nms: "nms-Latn-VU",
        nmt: "nmt-Latn-FM",
        nmu: "nmu-Latn-US",
        nmv: "nmv-Latn-AU",
        nmw: "nmw-Latn-PG",
        nmx: "nmx-Latn-PG",
        nmz: "nmz-Latn-ZZ",
        nn: "nn-Latn-NO",
        nna: "nna-Latn-AU",
        nnb: "nnb-Latn-CD",
        nnc: "nnc-Latn-TD",
        nnd: "nnd-Latn-VU",
        nne: "nne-Latn-AO",
        nnf: "nnf-Latn-ZZ",
        nng: "nng-Latn-IN",
        "nng-Beng": "nng-Beng-IN",
        nnh: "nnh-Latn-CM",
        nni: "nni-Latn-ID",
        nnj: "nnj-Latn-ET",
        nnk: "nnk-Latn-ZZ",
        nnl: "nnl-Latn-IN",
        nnm: "nnm-Latn-ZZ",
        nnn: "nnn-Latn-TD",
        nnp: "nnp-Wcho-IN",
        nnq: "nnq-Latn-TZ",
        nnr: "nnr-Latn-AU",
        nnt: "nnt-Latn-US",
        nnu: "nnu-Latn-GH",
        nnv: "nnv-Latn-AU",
        nnw: "nnw-Latn-BF",
        nny: "nny-Latn-AU",
        nnz: "nnz-Latn-CM",
        no: "no-Latn-NO",
        noa: "noa-Latn-CO",
        noc: "noc-Latn-PG",
        nod: "nod-Lana-TH",
        noe: "noe-Deva-IN",
        nof: "nof-Latn-PG",
        nog: "nog-Cyrl-RU",
        noh: "noh-Latn-PG",
        noi: "noi-Deva-IN",
        noj: "noj-Latn-CO",
        nok: "nok-Latn-US",
        nom: "nom-Latn-PE",
        non: "non-Runr-SE",
        nop: "nop-Latn-ZZ",
        noq: "noq-Latn-CD",
        nos: "nos-Yiii-CN",
        not: "not-Latn-PE",
        nou: "nou-Latn-ZZ",
        nov: "nov-Latn-001",
        now: "now-Latn-TZ",
        noy: "noy-Latn-TD",
        npb: "npb-Tibt-BT",
        npg: "npg-Latn-MM",
        nph: "nph-Latn-IN",
        npl: "npl-Latn-MX",
        npn: "npn-Latn-PG",
        npo: "npo-Latn-IN",
        nps: "nps-Latn-ID",
        npu: "npu-Latn-IN",
        npx: "npx-Latn-SB",
        npy: "npy-Latn-ID",
        nqg: "nqg-Latn-BJ",
        nqk: "nqk-Latn-BJ",
        nql: "nql-Latn-AO",
        nqm: "nqm-Latn-ID",
        nqn: "nqn-Latn-PG",
        nqo: "nqo-Nkoo-GN",
        nqq: "nqq-Latn-MM",
        nqt: "nqt-Latn-NG",
        nqy: "nqy-Latn-MM",
        nr: "nr-Latn-ZA",
        nra: "nra-Latn-GA",
        nrb: "nrb-Latn-ZZ",
        nre: "nre-Latn-IN",
        nrf: "nrf-Latn-JE",
        nrg: "nrg-Latn-VU",
        nri: "nri-Latn-IN",
        nrk: "nrk-Latn-AU",
        nrl: "nrl-Latn-AU",
        nrm: "nrm-Latn-MY",
        nrp: "nrp-Latn-IT",
        nru: "nru-Latn-CN",
        "nru-Hans": "nru-Hans-CN",
        "nru-Hant": "nru-Hant-CN",
        nrx: "nrx-Latn-AU",
        nrz: "nrz-Latn-PG",
        nsa: "nsa-Latn-IN",
        nsb: "nsb-Latn-ZA",
        nsc: "nsc-Latn-NG",
        nsd: "nsd-Yiii-CN",
        nse: "nse-Latn-ZM",
        nsf: "nsf-Yiii-CN",
        nsg: "nsg-Latn-TZ",
        nsh: "nsh-Latn-CM",
        nsk: "nsk-Cans-CA",
        nsm: "nsm-Latn-IN",
        nsn: "nsn-Latn-ZZ",
        nso: "nso-Latn-ZA",
        nsq: "nsq-Latn-US",
        nss: "nss-Latn-ZZ",
        nst: "nst-Tnsa-IN",
        nsu: "nsu-Latn-MX",
        nsv: "nsv-Yiii-CN",
        nsw: "nsw-Latn-VU",
        nsx: "nsx-Latn-AO",
        nsy: "nsy-Latn-ID",
        nsz: "nsz-Latn-US",
        ntd: "ntd-Latn-MY",
        nte: "nte-Latn-MZ",
        ntg: "ntg-Latn-AU",
        nti: "nti-Latn-BF",
        ntj: "ntj-Latn-AU",
        ntk: "ntk-Latn-TZ",
        ntm: "ntm-Latn-ZZ",
        nto: "nto-Latn-CD",
        ntp: "ntp-Latn-MX",
        ntr: "ntr-Latn-ZZ",
        ntu: "ntu-Latn-SB",
        ntx: "ntx-Latn-MM",
        nty: "nty-Yiii-VN",
        ntz: "ntz-Arab-IR",
        nua: "nua-Latn-NC",
        nuc: "nuc-Latn-BR",
        nud: "nud-Latn-PG",
        nue: "nue-Latn-CD",
        nuf: "nuf-Latn-CN",
        nug: "nug-Latn-AU",
        nuh: "nuh-Latn-NG",
        nui: "nui-Latn-ZZ",
        nuj: "nuj-Latn-UG",
        nuk: "nuk-Latn-CA",
        num: "num-Latn-TO",
        nun: "nun-Latn-MM",
        nuo: "nuo-Latn-VN",
        nup: "nup-Latn-ZZ",
        nuq: "nuq-Latn-PG",
        nur: "nur-Latn-PG",
        nus: "nus-Latn-SS",
        nut: "nut-Latn-VN",
        nuu: "nuu-Latn-CD",
        nuv: "nuv-Latn-ZZ",
        nuw: "nuw-Latn-FM",
        nux: "nux-Latn-ZZ",
        nuy: "nuy-Latn-AU",
        nuz: "nuz-Latn-MX",
        nv: "nv-Latn-US",
        nvh: "nvh-Latn-VU",
        nvm: "nvm-Latn-PG",
        nvo: "nvo-Latn-CM",
        nwb: "nwb-Latn-ZZ",
        nwc: "nwc-Newa-NP",
        "nwc-Brah": "nwc-Brah-NP",
        "nwc-Deva": "nwc-Deva-NP",
        "nwc-Sidd": "nwc-Sidd-NP",
        nwe: "nwe-Latn-CM",
        nwg: "nwg-Latn-AU",
        nwi: "nwi-Latn-VU",
        nwm: "nwm-Latn-SS",
        nwo: "nwo-Latn-AU",
        nwr: "nwr-Latn-PG",
        nww: "nww-Latn-TZ",
        nwx: "nwx-Deva-NP",
        nxa: "nxa-Latn-TL",
        nxd: "nxd-Latn-CD",
        nxe: "nxe-Latn-ID",
        nxg: "nxg-Latn-ID",
        nxi: "nxi-Latn-TZ",
        nxl: "nxl-Latn-ID",
        nxn: "nxn-Latn-AU",
        nxo: "nxo-Latn-GA",
        nxq: "nxq-Latn-CN",
        nxr: "nxr-Latn-ZZ",
        nxx: "nxx-Latn-ID",
        ny: "ny-Latn-MW",
        nyb: "nyb-Latn-GH",
        nyc: "nyc-Latn-CD",
        nyd: "nyd-Latn-KE",
        nye: "nye-Latn-AO",
        nyf: "nyf-Latn-KE",
        nyg: "nyg-Latn-CD",
        nyh: "nyh-Latn-AU",
        nyi: "nyi-Latn-SD",
        nyj: "nyj-Latn-CD",
        nyk: "nyk-Latn-AO",
        nyl: "nyl-Thai-TH",
        nym: "nym-Latn-TZ",
        nyn: "nyn-Latn-UG",
        nyo: "nyo-Latn-UG",
        nyp: "nyp-Latn-UG",
        nyq: "nyq-Arab-IR",
        nyr: "nyr-Latn-MW",
        nys: "nys-Latn-AU",
        nyt: "nyt-Latn-AU",
        nyu: "nyu-Latn-MZ",
        nyv: "nyv-Latn-AU",
        nyx: "nyx-Latn-AU",
        nyy: "nyy-Latn-TZ",
        nza: "nza-Latn-CM",
        nzb: "nzb-Latn-GA",
        nzd: "nzd-Latn-CD",
        nzi: "nzi-Latn-GH",
        nzk: "nzk-Latn-CF",
        nzm: "nzm-Latn-IN",
        nzu: "nzu-Latn-CG",
        nzy: "nzy-Latn-TD",
        nzz: "nzz-Latn-ML",
        oaa: "oaa-Cyrl-RU",
        oac: "oac-Cyrl-RU",
        oar: "oar-Syrc-SY",
        oav: "oav-Geor-GE",
        obi: "obi-Latn-US",
        obk: "obk-Latn-PH",
        obl: "obl-Latn-CM",
        obm: "obm-Phnx-JO",
        obo: "obo-Latn-PH",
        obr: "obr-Mymr-MM",
        obt: "obt-Latn-FR",
        obu: "obu-Latn-NG",
        oc: "oc-Latn-FR",
        oca: "oca-Latn-PE",
        oco: "oco-Latn-GB",
        ocu: "ocu-Latn-MX",
        oda: "oda-Latn-NG",
        odk: "odk-Arab-PK",
        odt: "odt-Latn-NL",
        odu: "odu-Latn-NG",
        ofu: "ofu-Latn-NG",
        ogb: "ogb-Latn-NG",
        ogc: "ogc-Latn-ZZ",
        ogg: "ogg-Latn-NG",
        ogo: "ogo-Latn-NG",
        ogu: "ogu-Latn-NG",
        oht: "oht-Xsux-TR",
        oia: "oia-Latn-ID",
        oie: "oie-Latn-SS",
        oin: "oin-Latn-PG",
        oj: "oj-Cans-CA",
        ojb: "ojb-Latn-CA",
        "ojb-Cans": "ojb-Cans-CA",
        ojc: "ojc-Latn-CA",
        ojs: "ojs-Cans-CA",
        ojv: "ojv-Latn-SB",
        ojw: "ojw-Latn-CA",
        "ojw-Cans": "ojw-Cans-CA",
        oka: "oka-Latn-CA",
        okb: "okb-Latn-NG",
        okc: "okc-Latn-CD",
        okd: "okd-Latn-NG",
        oke: "oke-Latn-NG",
        okg: "okg-Latn-AU",
        oki: "oki-Latn-KE",
        okk: "okk-Latn-PG",
        okm: "okm-Hang-KR",
        oko: "oko-Hani-KR",
        okr: "okr-Latn-ZZ",
        oks: "oks-Latn-NG",
        oku: "oku-Latn-CM",
        okv: "okv-Latn-ZZ",
        okx: "okx-Latn-NG",
        okz: "okz-Khmr-KH",
        ola: "ola-Deva-NP",
        "ola-Tibt": "ola-Tibt-CN",
        old: "old-Latn-TZ",
        ole: "ole-Tibt-BT",
        olk: "olk-Latn-AU",
        olm: "olm-Latn-NG",
        olo: "olo-Latn-RU",
        olr: "olr-Latn-VU",
        olt: "olt-Latn-LT",
        olu: "olu-Latn-AO",
        om: "om-Latn-ET",
        oma: "oma-Latn-US",
        omb: "omb-Latn-VU",
        omc: "omc-Latn-PE",
        omg: "omg-Latn-PE",
        omi: "omi-Latn-CD",
        omk: "omk-Cyrl-RU",
        oml: "oml-Latn-CD",
        omo: "omo-Latn-PG",
        omp: "omp-Mtei-IN",
        omr: "omr-Modi-IN",
        omt: "omt-Latn-KE",
        omu: "omu-Latn-PE",
        omw: "omw-Latn-PG",
        ona: "ona-Latn-AR",
        one: "one-Latn-CA",
        ong: "ong-Latn-ZZ",
        oni: "oni-Latn-ID",
        onj: "onj-Latn-PG",
        onk: "onk-Latn-PG",
        onn: "onn-Latn-ZZ",
        ono: "ono-Latn-CA",
        onp: "onp-Latn-IN",
        "onp-Deva": "onp-Deva-IN",
        onr: "onr-Latn-PG",
        ons: "ons-Latn-ZZ",
        ont: "ont-Latn-PG",
        onu: "onu-Latn-VU",
        onx: "onx-Latn-ID",
        ood: "ood-Latn-US",
        oon: "oon-Deva-IN",
        oor: "oor-Latn-ZA",
        opa: "opa-Latn-NG",
        opk: "opk-Latn-ID",
        opm: "opm-Latn-ZZ",
        opo: "opo-Latn-PG",
        opt: "opt-Latn-MX",
        opy: "opy-Latn-BR",
        or: "or-Orya-IN",
        ora: "ora-Latn-SB",
        orc: "orc-Latn-KE",
        ore: "ore-Latn-PE",
        org: "org-Latn-NG",
        orn: "orn-Latn-MY",
        oro: "oro-Latn-ZZ",
        orr: "orr-Latn-NG",
        ors: "ors-Latn-MY",
        ort: "ort-Telu-IN",
        oru: "oru-Arab-ZZ",
        orv: "orv-Cyrl-RU",
        orw: "orw-Latn-BR",
        orx: "orx-Latn-NG",
        orz: "orz-Latn-ID",
        os: "os-Cyrl-GE",
        osa: "osa-Osge-US",
        osc: "osc-Ital-IT",
        "osc-Latn": "osc-Latn-IT",
        osi: "osi-Java-ID",
        oso: "oso-Latn-NG",
        osp: "osp-Latn-ES",
        ost: "ost-Latn-CM",
        osu: "osu-Latn-PG",
        osx: "osx-Latn-DE",
        ota: "ota-Arab-ZZ",
        otb: "otb-Tibt-CN",
        otd: "otd-Latn-ID",
        ote: "ote-Latn-MX",
        oti: "oti-Latn-BR",
        otk: "otk-Orkh-MN",
        otl: "otl-Latn-MX",
        otm: "otm-Latn-MX",
        otn: "otn-Latn-MX",
        otq: "otq-Latn-MX",
        otr: "otr-Latn-SD",
        ots: "ots-Latn-MX",
        ott: "ott-Latn-MX",
        otu: "otu-Latn-BR",
        otw: "otw-Latn-CA",
        otx: "otx-Latn-MX",
        oty: "oty-Gran-IN",
        otz: "otz-Latn-MX",
        oub: "oub-Latn-LR",
        oue: "oue-Latn-PG",
        oui: "oui-Ougr-143",
        oum: "oum-Latn-PG",
        ovd: "ovd-Latn-SE",
        owi: "owi-Latn-PG",
        owl: "owl-Latn-GB",
        oyd: "oyd-Latn-ET",
        oym: "oym-Latn-BR",
        oyy: "oyy-Latn-PG",
        ozm: "ozm-Latn-ZZ",
        pa: "pa-Guru-IN",
        "pa-Arab": "pa-Arab-PK",
        "pa-PK": "pa-Arab-PK",
        pab: "pab-Latn-BR",
        pac: "pac-Latn-VN",
        pad: "pad-Latn-BR",
        pae: "pae-Latn-CD",
        paf: "paf-Latn-BR",
        pag: "pag-Latn-PH",
        pah: "pah-Latn-BR",
        pai: "pai-Latn-NG",
        pak: "pak-Latn-BR",
        pal: "pal-Phli-IR",
        "pal-Phlp": "pal-Phlp-CN",
        pam: "pam-Latn-PH",
        pao: "pao-Latn-US",
        pap: "pap-Latn-CW",
        paq: "paq-Cyrl-TJ",
        par: "par-Latn-US",
        pas: "pas-Latn-ID",
        pau: "pau-Latn-PW",
        pav: "pav-Latn-BR",
        paw: "paw-Latn-US",
        pax: "pax-Latn-BR",
        pay: "pay-Latn-HN",
        paz: "paz-Latn-BR",
        pbb: "pbb-Latn-CO",
        pbc: "pbc-Latn-GY",
        pbe: "pbe-Latn-MX",
        pbf: "pbf-Latn-MX",
        pbg: "pbg-Latn-VE",
        pbh: "pbh-Latn-VE",
        pbi: "pbi-Latn-ZZ",
        pbl: "pbl-Latn-NG",
        pbm: "pbm-Latn-MX",
        pbn: "pbn-Latn-NG",
        pbo: "pbo-Latn-GW",
        pbp: "pbp-Latn-GN",
        pbr: "pbr-Latn-TZ",
        pbs: "pbs-Latn-MX",
        pbt: "pbt-Arab-AF",
        pbv: "pbv-Latn-IN",
        pby: "pby-Latn-PG",
        pca: "pca-Latn-MX",
        pcb: "pcb-Khmr-KH",
        pcc: "pcc-Latn-CN",
        "pcc-Hani": "pcc-Hani-CN",
        pcd: "pcd-Latn-FR",
        pce: "pce-Mymr-MM",
        "pce-Thai": "pce-Thai-TH",
        pcf: "pcf-Mlym-IN",
        pcg: "pcg-Mlym-IN",
        "pcg-Knda": "pcg-Knda-IN",
        "pcg-Taml": "pcg-Taml-IN",
        pch: "pch-Deva-IN",
        pci: "pci-Deva-IN",
        "pci-Orya": "pci-Orya-IN",
        pcj: "pcj-Telu-IN",
        pck: "pck-Latn-IN",
        pcm: "pcm-Latn-NG",
        pcn: "pcn-Latn-NG",
        pcp: "pcp-Latn-BO",
        pcw: "pcw-Latn-NG",
        pda: "pda-Latn-PG",
        pdc: "pdc-Latn-US",
        pdn: "pdn-Latn-ID",
        pdo: "pdo-Latn-ID",
        pdt: "pdt-Latn-CA",
        pdu: "pdu-Latn-MM",
        "pdu-Mymr": "pdu-Mymr-MM",
        pea: "pea-Latn-ID",
        peb: "peb-Latn-US",
        ped: "ped-Latn-ZZ",
        pee: "pee-Latn-ID",
        peg: "peg-Orya-IN",
        pei: "pei-Latn-MX",
        pek: "pek-Latn-PG",
        pel: "pel-Latn-ID",
        pem: "pem-Latn-CD",
        peo: "peo-Xpeo-IR",
        pep: "pep-Latn-PG",
        peq: "peq-Latn-US",
        pev: "pev-Latn-VE",
        pex: "pex-Latn-ZZ",
        pey: "pey-Latn-ID",
        pez: "pez-Latn-MY",
        pfa: "pfa-Latn-FM",
        pfe: "pfe-Latn-CM",
        pfl: "pfl-Latn-DE",
        pga: "pga-Latn-SS",
        pgd: "pgd-Khar-PK",
        pgg: "pgg-Deva-IN",
        pgi: "pgi-Latn-PG",
        pgk: "pgk-Latn-VU",
        pgl: "pgl-Ogam-IE",
        pgn: "pgn-Ital-IT",
        pgs: "pgs-Latn-NG",
        pgu: "pgu-Latn-ID",
        phd: "phd-Deva-IN",
        phg: "phg-Latn-VN",
        phh: "phh-Latn-VN",
        phk: "phk-Mymr-IN",
        phl: "phl-Arab-ZZ",
        phm: "phm-Latn-MZ",
        phn: "phn-Phnx-LB",
        pho: "pho-Laoo-LA",
        phr: "phr-Arab-PK",
        pht: "pht-Thai-TH",
        phv: "phv-Arab-AF",
        phw: "phw-Deva-NP",
        pi: "pi-Sinh-IN",
        "pi-Brah": "pi-Brah-IN",
        "pi-Deva": "pi-Deva-IN",
        "pi-Khar": "pi-Khar-IN",
        "pi-Khmr": "pi-Khmr-IN",
        "pi-Mymr": "pi-Mymr-IN",
        "pi-Thai": "pi-Thai-IN",
        pia: "pia-Latn-MX",
        pib: "pib-Latn-PE",
        pic: "pic-Latn-GA",
        pid: "pid-Latn-VE",
        pif: "pif-Latn-FM",
        pig: "pig-Latn-PE",
        pih: "pih-Latn-NF",
        pij: "pij-Latn-CO",
        pil: "pil-Latn-ZZ",
        pim: "pim-Latn-US",
        pin: "pin-Latn-PG",
        pio: "pio-Latn-CO",
        pip: "pip-Latn-ZZ",
        pir: "pir-Latn-BR",
        pis: "pis-Latn-SB",
        pit: "pit-Latn-AU",
        piu: "piu-Latn-AU",
        piv: "piv-Latn-SB",
        piw: "piw-Latn-TZ",
        pix: "pix-Latn-PG",
        piy: "piy-Latn-NG",
        piz: "piz-Latn-NC",
        pjt: "pjt-Latn-AU",
        pka: "pka-Brah-IN",
        pkb: "pkb-Latn-KE",
        pkg: "pkg-Latn-PG",
        pkh: "pkh-Latn-BD",
        "pkh-Deva": "pkh-Deva-BD",
        pkn: "pkn-Latn-AU",
        pko: "pko-Latn-KE",
        pkp: "pkp-Latn-CK",
        pkr: "pkr-Mlym-IN",
        pku: "pku-Latn-ID",
        pl: "pl-Latn-PL",
        pla: "pla-Latn-ZZ",
        plb: "plb-Latn-VU",
        plc: "plc-Latn-PH",
        pld: "pld-Latn-GB",
        ple: "ple-Latn-ID",
        plg: "plg-Latn-AR",
        plh: "plh-Latn-ID",
        plj: "plj-Latn-NG",
        plk: "plk-Arab-PK",
        pll: "pll-Mymr-MM",
        pln: "pln-Latn-CO",
        plo: "plo-Latn-MX",
        plr: "plr-Latn-CI",
        pls: "pls-Latn-MX",
        plu: "plu-Latn-BR",
        plv: "plv-Latn-PH",
        plw: "plw-Latn-PH",
        plz: "plz-Latn-MY",
        pma: "pma-Latn-VU",
        pmb: "pmb-Latn-CD",
        pmd: "pmd-Latn-AU",
        pme: "pme-Latn-NC",
        pmf: "pmf-Latn-ID",
        pmh: "pmh-Brah-IN",
        pmi: "pmi-Latn-CN",
        pmj: "pmj-Latn-CN",
        pml: "pml-Latn-TN",
        pmm: "pmm-Latn-CM",
        pmn: "pmn-Latn-CM",
        pmo: "pmo-Latn-ID",
        pmq: "pmq-Latn-MX",
        pmr: "pmr-Latn-PG",
        pms: "pms-Latn-IT",
        pmt: "pmt-Latn-PF",
        pmw: "pmw-Latn-US",
        pmx: "pmx-Latn-IN",
        pmy: "pmy-Latn-ID",
        pmz: "pmz-Latn-MX",
        pna: "pna-Latn-MY",
        pnc: "pnc-Latn-ID",
        pnd: "pnd-Latn-AO",
        pne: "pne-Latn-MY",
        png: "png-Latn-ZZ",
        pnh: "pnh-Latn-CK",
        pni: "pni-Latn-ID",
        pnj: "pnj-Latn-AU",
        pnk: "pnk-Latn-BO",
        pnl: "pnl-Latn-BF",
        pnm: "pnm-Latn-MY",
        pnn: "pnn-Latn-ZZ",
        pno: "pno-Latn-PE",
        pnp: "pnp-Latn-ID",
        pnq: "pnq-Latn-BF",
        pnr: "pnr-Latn-PG",
        pns: "pns-Latn-ID",
        pnt: "pnt-Grek-GR",
        pnv: "pnv-Latn-AU",
        pnw: "pnw-Latn-AU",
        pny: "pny-Latn-CM",
        pnz: "pnz-Latn-CF",
        poc: "poc-Latn-GT",
        poe: "poe-Latn-MX",
        pof: "pof-Latn-CD",
        pog: "pog-Latn-BR",
        poh: "poh-Latn-GT",
        poi: "poi-Latn-MX",
        pok: "pok-Latn-BR",
        pom: "pom-Latn-US",
        pon: "pon-Latn-FM",
        poo: "poo-Latn-US",
        pop: "pop-Latn-NC",
        poq: "poq-Latn-MX",
        pos: "pos-Latn-MX",
        pot: "pot-Latn-US",
        pov: "pov-Latn-GW",
        pow: "pow-Latn-MX",
        poy: "poy-Latn-TZ",
        ppa: "ppa-Deva-IN",
        ppe: "ppe-Latn-PG",
        ppi: "ppi-Latn-MX",
        ppk: "ppk-Latn-ID",
        ppl: "ppl-Latn-SV",
        ppm: "ppm-Latn-ID",
        ppn: "ppn-Latn-PG",
        ppo: "ppo-Latn-ZZ",
        ppp: "ppp-Latn-CD",
        ppq: "ppq-Latn-PG",
        pps: "pps-Latn-MX",
        ppt: "ppt-Latn-PG",
        pqa: "pqa-Latn-NG",
        pqm: "pqm-Latn-CA",
        pra: "pra-Khar-PK",
        prc: "prc-Arab-AF",
        prd: "prd-Arab-IR",
        pre: "pre-Latn-ST",
        prf: "prf-Latn-PH",
        prg: "prg-Latn-001",
        prh: "prh-Latn-PH",
        pri: "pri-Latn-NC",
        prk: "prk-Latn-MM",
        prm: "prm-Latn-PG",
        pro: "pro-Latn-FR",
        prp: "prp-Gujr-IN",
        prq: "prq-Latn-PE",
        prr: "prr-Latn-BR",
        prt: "prt-Thai-TH",
        pru: "pru-Latn-ID",
        prw: "prw-Latn-PG",
        prx: "prx-Arab-IN",
        "prx-Tibt": "prx-Tibt-IN",
        ps: "ps-Arab-AF",
        psa: "psa-Latn-ID",
        pse: "pse-Latn-ID",
        psh: "psh-Arab-AF",
        psi: "psi-Arab-AF",
        psm: "psm-Latn-BO",
        psn: "psn-Latn-ID",
        psq: "psq-Latn-PG",
        pss: "pss-Latn-ZZ",
        pst: "pst-Arab-PK",
        psw: "psw-Latn-VU",
        pt: "pt-Latn-BR",
        pta: "pta-Latn-PY",
        pth: "pth-Latn-BR",
        pti: "pti-Latn-AU",
        ptn: "ptn-Latn-ID",
        pto: "pto-Latn-BR",
        ptp: "ptp-Latn-ZZ",
        ptr: "ptr-Latn-VU",
        ptt: "ptt-Latn-ID",
        ptu: "ptu-Latn-ID",
        ptv: "ptv-Latn-VU",
        pua: "pua-Latn-MX",
        pub: "pub-Latn-IN",
        puc: "puc-Latn-ID",
        pud: "pud-Latn-ID",
        pue: "pue-Latn-AR",
        puf: "puf-Latn-ID",
        pug: "pug-Latn-BF",
        pui: "pui-Latn-CO",
        puj: "puj-Latn-ID",
        pum: "pum-Deva-NP",
        puo: "puo-Latn-VN",
        pup: "pup-Latn-PG",
        puq: "puq-Latn-PE",
        pur: "pur-Latn-BR",
        put: "put-Latn-ID",
        puu: "puu-Latn-GA",
        puw: "puw-Latn-FM",
        pux: "pux-Latn-PG",
        puy: "puy-Latn-US",
        pwa: "pwa-Latn-ZZ",
        pwb: "pwb-Latn-NG",
        pwg: "pwg-Latn-PG",
        pwm: "pwm-Latn-PH",
        pwn: "pwn-Latn-TW",
        pwo: "pwo-Mymr-MM",
        pwr: "pwr-Deva-IN",
        pww: "pww-Thai-TH",
        pxm: "pxm-Latn-MX",
        pye: "pye-Latn-CI",
        pym: "pym-Latn-NG",
        pyn: "pyn-Latn-BR",
        pyu: "pyu-Latn-TW",
        "pyu-Hani": "pyu-Hani-TW",
        pyx: "pyx-Mymr-MM",
        pyy: "pyy-Latn-MM",
        pzh: "pzh-Latn-TW",
        pzn: "pzn-Latn-MM",
        qu: "qu-Latn-PE",
        qua: "qua-Latn-US",
        qub: "qub-Latn-PE",
        quc: "quc-Latn-GT",
        qud: "qud-Latn-EC",
        quf: "quf-Latn-PE",
        qug: "qug-Latn-EC",
        qui: "qui-Latn-US",
        quk: "quk-Latn-PE",
        qul: "qul-Latn-BO",
        qum: "qum-Latn-GT",
        qun: "qun-Latn-US",
        qup: "qup-Latn-PE",
        quq: "quq-Latn-ES",
        qur: "qur-Latn-PE",
        qus: "qus-Latn-AR",
        quv: "quv-Latn-GT",
        quw: "quw-Latn-EC",
        qux: "qux-Latn-PE",
        quy: "quy-Latn-PE",
        qva: "qva-Latn-PE",
        qvc: "qvc-Latn-PE",
        qve: "qve-Latn-PE",
        qvh: "qvh-Latn-PE",
        qvi: "qvi-Latn-EC",
        qvj: "qvj-Latn-EC",
        qvl: "qvl-Latn-PE",
        qvm: "qvm-Latn-PE",
        qvn: "qvn-Latn-PE",
        qvo: "qvo-Latn-PE",
        qvp: "qvp-Latn-PE",
        qvs: "qvs-Latn-PE",
        qvw: "qvw-Latn-PE",
        qvz: "qvz-Latn-EC",
        qwa: "qwa-Latn-PE",
        qwc: "qwc-Latn-PE",
        qwh: "qwh-Latn-PE",
        qwm: "qwm-Latn-RU",
        "qwm-Cyrl": "qwm-Cyrl-RU",
        "qwm-Runr": "qwm-Runr-RU",
        qws: "qws-Latn-PE",
        qwt: "qwt-Latn-US",
        qxa: "qxa-Latn-PE",
        qxc: "qxc-Latn-PE",
        qxh: "qxh-Latn-PE",
        qxl: "qxl-Latn-EC",
        qxn: "qxn-Latn-PE",
        qxo: "qxo-Latn-PE",
        qxp: "qxp-Latn-PE",
        qxq: "qxq-Arab-IR",
        qxr: "qxr-Latn-EC",
        qxt: "qxt-Latn-PE",
        qxu: "qxu-Latn-PE",
        qxw: "qxw-Latn-PE",
        qya: "qya-Latn-001",
        qyp: "qyp-Latn-US",
        raa: "raa-Deva-NP",
        rab: "rab-Deva-NP",
        rac: "rac-Latn-ID",
        rad: "rad-Latn-VN",
        raf: "raf-Deva-NP",
        rag: "rag-Latn-KE",
        rah: "rah-Beng-IN",
        "rah-Latn": "rah-Latn-IN",
        rai: "rai-Latn-ZZ",
        raj: "raj-Deva-IN",
        rak: "rak-Latn-PG",
        ram: "ram-Latn-BR",
        ran: "ran-Latn-ID",
        rao: "rao-Latn-ZZ",
        rap: "rap-Latn-CL",
        rar: "rar-Latn-CK",
        rav: "rav-Deva-NP",
        raw: "raw-Latn-MM",
        rax: "rax-Latn-NG",
        ray: "ray-Latn-PF",
        raz: "raz-Latn-ID",
        rbb: "rbb-Mymr-MM",
        rbk: "rbk-Latn-PH",
        rbl: "rbl-Latn-PH",
        rbp: "rbp-Latn-AU",
        rcf: "rcf-Latn-RE",
        rdb: "rdb-Arab-IR",
        rea: "rea-Latn-PG",
        reb: "reb-Latn-ID",
        ree: "ree-Latn-MY",
        reg: "reg-Latn-TZ",
        rei: "rei-Orya-IN",
        "rei-Telu": "rei-Telu-IN",
        rej: "rej-Latn-ID",
        rel: "rel-Latn-ZZ",
        rem: "rem-Latn-PE",
        ren: "ren-Latn-VN",
        res: "res-Latn-ZZ",
        ret: "ret-Latn-ID",
        rey: "rey-Latn-BO",
        rga: "rga-Latn-VU",
        rgn: "rgn-Latn-IT",
        rgr: "rgr-Latn-PE",
        rgs: "rgs-Latn-VN",
        rgu: "rgu-Latn-ID",
        rhg: "rhg-Rohg-MM",
        rhp: "rhp-Latn-PG",
        ria: "ria-Latn-IN",
        rif: "rif-Latn-MA",
        ril: "ril-Latn-MM",
        rim: "rim-Latn-TZ",
        rin: "rin-Latn-NG",
        rir: "rir-Latn-ID",
        rit: "rit-Latn-AU",
        riu: "riu-Latn-ID",
        rjg: "rjg-Latn-ID",
        rji: "rji-Deva-NP",
        rjs: "rjs-Deva-NP",
        rka: "rka-Khmr-KH",
        rkb: "rkb-Latn-BR",
        rkh: "rkh-Latn-CK",
        rki: "rki-Mymr-MM",
        rkm: "rkm-Latn-BF",
        rkt: "rkt-Beng-BD",
        rkw: "rkw-Latn-AU",
        rm: "rm-Latn-CH",
        rma: "rma-Latn-NI",
        rmb: "rmb-Latn-AU",
        rmc: "rmc-Latn-SK",
        rmd: "rmd-Latn-DK",
        rme: "rme-Latn-GB",
        rmf: "rmf-Latn-FI",
        rmg: "rmg-Latn-NO",
        rmh: "rmh-Latn-ID",
        rmi: "rmi-Armn-AM",
        rmk: "rmk-Latn-PG",
        rml: "rml-Latn-PL",
        "rml-Cyrl": "rml-Cyrl-BY",
        rmm: "rmm-Latn-ID",
        rmn: "rmn-Latn-RS",
        "rmn-Cyrl": "rmn-Cyrl-BG",
        "rmn-Grek": "rmn-Grek-GR",
        rmo: "rmo-Latn-CH",
        rmp: "rmp-Latn-PG",
        rmq: "rmq-Latn-ES",
        rmt: "rmt-Arab-IR",
        rmu: "rmu-Latn-SE",
        rmw: "rmw-Latn-GB",
        rmx: "rmx-Latn-VN",
        rmz: "rmz-Mymr-IN",
        rn: "rn-Latn-BI",
        rna: "rna-Latn-ZZ",
        rnd: "rnd-Latn-CD",
        rng: "rng-Latn-MZ",
        rnl: "rnl-Latn-IN",
        rnn: "rnn-Latn-ID",
        rnr: "rnr-Latn-AU",
        rnw: "rnw-Latn-TZ",
        ro: "ro-Latn-RO",
        rob: "rob-Latn-ID",
        roc: "roc-Latn-VN",
        rod: "rod-Latn-NG",
        roe: "roe-Latn-PG",
        rof: "rof-Latn-TZ",
        rog: "rog-Latn-VN",
        rol: "rol-Latn-PH",
        rom: "rom-Latn-RO",
        "rom-Cyrl": "rom-Cyrl-RO",
        roo: "roo-Latn-ZZ",
        rop: "rop-Latn-AU",
        ror: "ror-Latn-ID",
        rou: "rou-Latn-TD",
        row: "row-Latn-ID",
        rpn: "rpn-Latn-VU",
        rpt: "rpt-Latn-PG",
        rri: "rri-Latn-SB",
        rro: "rro-Latn-ZZ",
        rrt: "rrt-Latn-AU",
        rsk: "rsk-Cyrl-RS",
        rtc: "rtc-Latn-MM",
        rth: "rth-Latn-ID",
        rtm: "rtm-Latn-FJ",
        rtw: "rtw-Deva-IN",
        ru: "ru-Cyrl-RU",
        rub: "rub-Latn-UG",
        ruc: "ruc-Latn-UG",
        rue: "rue-Cyrl-UA",
        ruf: "ruf-Latn-TZ",
        rug: "rug-Latn-SB",
        rui: "rui-Latn-TZ",
        ruk: "ruk-Latn-NG",
        ruo: "ruo-Latn-HR",
        rup: "rup-Latn-RO",
        "rup-Grek": "rup-Grek-GR",
        ruq: "ruq-Latn-GR",
        rut: "rut-Cyrl-RU",
        "rut-Latn": "rut-Latn-AZ",
        ruu: "ruu-Latn-MY",
        ruy: "ruy-Latn-NG",
        ruz: "ruz-Latn-NG",
        rw: "rw-Latn-RW",
        rwa: "rwa-Latn-PG",
        rwk: "rwk-Latn-TZ",
        rwl: "rwl-Latn-TZ",
        rwm: "rwm-Latn-UG",
        rwo: "rwo-Latn-ZZ",
        rwr: "rwr-Deva-IN",
        rxd: "rxd-Latn-AU",
        rxw: "rxw-Latn-AU",
        ryu: "ryu-Kana-JP",
        sa: "sa-Deva-IN",
        saa: "saa-Latn-TD",
        sab: "sab-Latn-PA",
        sac: "sac-Latn-US",
        sad: "sad-Latn-TZ",
        sae: "sae-Latn-BR",
        saf: "saf-Latn-GH",
        sah: "sah-Cyrl-RU",
        saj: "saj-Latn-ID",
        sak: "sak-Latn-GA",
        sam: "sam-Samr-PS",
        "sam-Hebr": "sam-Hebr-PS",
        "sam-Syrc": "sam-Syrc-PS",
        sao: "sao-Latn-ID",
        saq: "saq-Latn-KE",
        sar: "sar-Latn-BO",
        sas: "sas-Latn-ID",
        sat: "sat-Olck-IN",
        sau: "sau-Latn-ID",
        sav: "sav-Latn-SN",
        saw: "saw-Latn-ID",
        sax: "sax-Latn-VU",
        say: "say-Latn-NG",
        saz: "saz-Saur-IN",
        sba: "sba-Latn-ZZ",
        sbb: "sbb-Latn-SB",
        sbc: "sbc-Latn-PG",
        sbd: "sbd-Latn-BF",
        sbe: "sbe-Latn-ZZ",
        sbg: "sbg-Latn-ID",
        sbh: "sbh-Latn-PG",
        sbi: "sbi-Latn-PG",
        sbj: "sbj-Latn-TD",
        sbk: "sbk-Latn-TZ",
        sbl: "sbl-Latn-PH",
        sbm: "sbm-Latn-TZ",
        sbn: "sbn-Arab-PK",
        sbo: "sbo-Latn-MY",
        sbp: "sbp-Latn-TZ",
        sbq: "sbq-Latn-PG",
        sbr: "sbr-Latn-ID",
        sbs: "sbs-Latn-NA",
        sbt: "sbt-Latn-ID",
        sbu: "sbu-Tibt-IN",
        "sbu-Deva": "sbu-Deva-IN",
        sbv: "sbv-Latn-IT",
        sbw: "sbw-Latn-GA",
        sbx: "sbx-Latn-ID",
        sby: "sby-Latn-ZM",
        sbz: "sbz-Latn-CF",
        sc: "sc-Latn-IT",
        scb: "scb-Latn-VN",
        sce: "sce-Latn-CN",
        "sce-Arab": "sce-Arab-CN",
        scf: "scf-Latn-PA",
        scg: "scg-Latn-ID",
        sch: "sch-Latn-IN",
        sci: "sci-Latn-LK",
        sck: "sck-Deva-IN",
        scl: "scl-Arab-ZZ",
        scn: "scn-Latn-IT",
        sco: "sco-Latn-GB",
        scp: "scp-Deva-NP",
        scs: "scs-Latn-CA",
        "scs-Cans": "scs-Cans-CA",
        sct: "sct-Laoo-LA",
        scu: "scu-Takr-IN",
        scv: "scv-Latn-NG",
        scw: "scw-Latn-NG",
        scx: "scx-Grek-IT",
        sd: "sd-Arab-PK",
        "sd-Deva": "sd-Deva-IN",
        "sd-IN": "sd-Deva-IN",
        "sd-Khoj": "sd-Khoj-IN",
        "sd-Sind": "sd-Sind-IN",
        sda: "sda-Latn-ID",
        sdb: "sdb-Arab-IQ",
        sdc: "sdc-Latn-IT",
        sde: "sde-Latn-NG",
        sdf: "sdf-Arab-IQ",
        sdg: "sdg-Arab-AF",
        sdh: "sdh-Arab-IR",
        sdj: "sdj-Latn-CG",
        sdk: "sdk-Latn-PG",
        sdn: "sdn-Latn-IT",
        sdo: "sdo-Latn-MY",
        sdq: "sdq-Latn-ID",
        sds: "sds-Arab-TN",
        sdu: "sdu-Latn-ID",
        sdx: "sdx-Latn-MY",
        se: "se-Latn-NO",
        sea: "sea-Latn-MY",
        seb: "seb-Latn-CI",
        sec: "sec-Latn-CA",
        sed: "sed-Latn-VN",
        see: "see-Latn-US",
        sef: "sef-Latn-CI",
        seg: "seg-Latn-TZ",
        seh: "seh-Latn-MZ",
        sei: "sei-Latn-MX",
        sej: "sej-Latn-PG",
        sek: "sek-Latn-CA",
        "sek-Cans": "sek-Cans-CA",
        sel: "sel-Cyrl-RU",
        sen: "sen-Latn-BF",
        seo: "seo-Latn-PG",
        sep: "sep-Latn-BF",
        seq: "seq-Latn-BF",
        ser: "ser-Latn-US",
        ses: "ses-Latn-ML",
        set: "set-Latn-ID",
        seu: "seu-Latn-ID",
        sev: "sev-Latn-CI",
        sew: "sew-Latn-PG",
        sey: "sey-Latn-EC",
        sez: "sez-Latn-MM",
        sfe: "sfe-Latn-PH",
        sfm: "sfm-Plrd-CN",
        sfw: "sfw-Latn-GH",
        sg: "sg-Latn-CF",
        sga: "sga-Ogam-IE",
        sgb: "sgb-Latn-PH",
        sgc: "sgc-Latn-KE",
        sgd: "sgd-Latn-PH",
        sge: "sge-Latn-ID",
        sgh: "sgh-Cyrl-TJ",
        "sgh-Arab": "sgh-Arab-AF",
        "sgh-Latn": "sgh-Latn-TJ",
        sgi: "sgi-Latn-CM",
        sgj: "sgj-Deva-IN",
        sgm: "sgm-Latn-KE",
        sgp: "sgp-Latn-IN",
        sgr: "sgr-Arab-IR",
        sgs: "sgs-Latn-LT",
        sgt: "sgt-Tibt-BT",
        sgu: "sgu-Latn-ID",
        sgw: "sgw-Ethi-ZZ",
        sgy: "sgy-Arab-AF",
        sgz: "sgz-Latn-ZZ",
        sha: "sha-Latn-NG",
        shb: "shb-Latn-BR",
        shc: "shc-Latn-CD",
        shd: "shd-Arab-PK",
        she: "she-Latn-ET",
        shg: "shg-Latn-BW",
        shh: "shh-Latn-US",
        shi: "shi-Tfng-MA",
        shj: "shj-Latn-SD",
        shk: "shk-Latn-ZZ",
        shm: "shm-Arab-IR",
        shn: "shn-Mymr-MM",
        sho: "sho-Latn-NG",
        shp: "shp-Latn-PE",
        shq: "shq-Latn-ZM",
        shr: "shr-Latn-CD",
        shs: "shs-Latn-CA",
        sht: "sht-Latn-US",
        shu: "shu-Arab-ZZ",
        shv: "shv-Arab-OM",
        shw: "shw-Latn-SD",
        shy: "shy-Latn-DZ",
        "shy-Arab": "shy-Arab-DZ",
        "shy-Tfng": "shy-Tfng-DZ",
        shz: "shz-Latn-ML",
        si: "si-Sinh-LK",
        sia: "sia-Cyrl-RU",
        sib: "sib-Latn-MY",
        sid: "sid-Latn-ET",
        sie: "sie-Latn-ZM",
        sif: "sif-Latn-BF",
        sig: "sig-Latn-ZZ",
        sih: "sih-Latn-NC",
        sii: "sii-Latn-IN",
        sij: "sij-Latn-PG",
        sik: "sik-Latn-BR",
        sil: "sil-Latn-ZZ",
        sim: "sim-Latn-ZZ",
        sip: "sip-Tibt-IN",
        siq: "siq-Latn-PG",
        sir: "sir-Latn-NG",
        sis: "sis-Latn-US",
        siu: "siu-Latn-PG",
        siv: "siv-Latn-PG",
        siw: "siw-Latn-PG",
        six: "six-Latn-PG",
        siy: "siy-Arab-IR",
        siz: "siz-Arab-EG",
        sja: "sja-Latn-CO",
        sjb: "sjb-Latn-ID",
        sjd: "sjd-Cyrl-RU",
        sje: "sje-Latn-SE",
        sjg: "sjg-Latn-TD",
        sjl: "sjl-Latn-IN",
        sjm: "sjm-Latn-PH",
        sjp: "sjp-Deva-IN",
        "sjp-Beng": "sjp-Beng-IN",
        sjr: "sjr-Latn-ZZ",
        sjt: "sjt-Cyrl-RU",
        sju: "sju-Latn-SE",
        sjw: "sjw-Latn-US",
        sk: "sk-Latn-SK",
        ska: "ska-Latn-US",
        skb: "skb-Thai-TH",
        skc: "skc-Latn-ZZ",
        skd: "skd-Latn-US",
        ske: "ske-Latn-VU",
        skf: "skf-Latn-BR",
        skg: "skg-Latn-MG",
        skh: "skh-Latn-ID",
        ski: "ski-Latn-ID",
        skj: "skj-Deva-NP",
        skm: "skm-Latn-PG",
        skn: "skn-Latn-PH",
        sko: "sko-Latn-ID",
        skp: "skp-Latn-MY",
        skq: "skq-Latn-BF",
        skr: "skr-Arab-PK",
        sks: "sks-Latn-ZZ",
        skt: "skt-Latn-CD",
        sku: "sku-Latn-VU",
        skv: "skv-Latn-ID",
        skw: "skw-Latn-GY",
        skx: "skx-Latn-ID",
        sky: "sky-Latn-SB",
        skz: "skz-Latn-ID",
        sl: "sl-Latn-SI",
        slc: "slc-Latn-CO",
        sld: "sld-Latn-ZZ",
        slg: "slg-Latn-ID",
        slh: "slh-Latn-US",
        sli: "sli-Latn-PL",
        slj: "slj-Latn-BR",
        sll: "sll-Latn-ZZ",
        slm: "slm-Latn-PH",
        sln: "sln-Latn-US",
        slp: "slp-Latn-ID",
        slq: "slq-Arab-IR",
        slr: "slr-Latn-CN",
        slu: "slu-Latn-ID",
        slw: "slw-Latn-PG",
        slx: "slx-Latn-CD",
        sly: "sly-Latn-ID",
        slz: "slz-Latn-ID",
        sm: "sm-Latn-WS",
        sma: "sma-Latn-SE",
        smb: "smb-Latn-PG",
        smc: "smc-Latn-PG",
        smd: "smd-Latn-AO",
        smf: "smf-Latn-PG",
        smg: "smg-Latn-PG",
        smh: "smh-Yiii-CN",
        smj: "smj-Latn-SE",
        smk: "smk-Latn-PH",
        sml: "sml-Latn-PH",
        smn: "smn-Latn-FI",
        smp: "smp-Samr-IL",
        smq: "smq-Latn-ZZ",
        smr: "smr-Latn-ID",
        sms: "sms-Latn-FI",
        smt: "smt-Latn-IN",
        smu: "smu-Khmr-KH",
        smw: "smw-Latn-ID",
        smx: "smx-Latn-CD",
        smy: "smy-Arab-IR",
        smz: "smz-Latn-PG",
        sn: "sn-Latn-ZW",
        snb: "snb-Latn-MY",
        snc: "snc-Latn-ZZ",
        sne: "sne-Latn-MY",
        snf: "snf-Latn-SN",
        sng: "sng-Latn-CD",
        "sng-Brai": "sng-Brai-CD",
        sni: "sni-Latn-PE",
        snj: "snj-Latn-CF",
        snk: "snk-Latn-ML",
        snl: "snl-Latn-PH",
        snm: "snm-Latn-UG",
        snn: "snn-Latn-CO",
        sno: "sno-Latn-US",
        snp: "snp-Latn-ZZ",
        snq: "snq-Latn-GA",
        snr: "snr-Latn-PG",
        sns: "sns-Latn-VU",
        snu: "snu-Latn-ID",
        snv: "snv-Latn-MY",
        snw: "snw-Latn-GH",
        snx: "snx-Latn-ZZ",
        sny: "sny-Latn-ZZ",
        snz: "snz-Latn-PG",
        so: "so-Latn-SO",
        soa: "soa-Tavt-TH",
        "soa-Thai": "soa-Thai-TH",
        sob: "sob-Latn-ID",
        soc: "soc-Latn-CD",
        sod: "sod-Latn-CD",
        soe: "soe-Latn-CD",
        sog: "sog-Sogd-UZ",
        soi: "soi-Deva-NP",
        sok: "sok-Latn-ZZ",
        sol: "sol-Latn-PG",
        soo: "soo-Latn-CD",
        sop: "sop-Latn-CD",
        soq: "soq-Latn-ZZ",
        sor: "sor-Latn-TD",
        sos: "sos-Latn-BF",
        sou: "sou-Thai-TH",
        sov: "sov-Latn-PW",
        sow: "sow-Latn-PG",
        sox: "sox-Latn-CM",
        soy: "soy-Latn-ZZ",
        soz: "soz-Latn-TZ",
        spb: "spb-Latn-ID",
        spc: "spc-Latn-VE",
        spd: "spd-Latn-ZZ",
        spe: "spe-Latn-PG",
        spg: "spg-Latn-MY",
        spi: "spi-Latn-ID",
        spk: "spk-Latn-PG",
        spl: "spl-Latn-ZZ",
        spm: "spm-Latn-PG",
        spn: "spn-Latn-PY",
        spo: "spo-Latn-US",
        spp: "spp-Latn-ML",
        spq: "spq-Latn-PE",
        spr: "spr-Latn-ID",
        sps: "sps-Latn-ZZ",
        spt: "spt-Tibt-IN",
        spv: "spv-Orya-IN",
        sq: "sq-Latn-AL",
        sqa: "sqa-Latn-NG",
        sqh: "sqh-Latn-NG",
        sqm: "sqm-Latn-CF",
        sqo: "sqo-Arab-IR",
        sqq: "sqq-Laoo-LA",
        sqt: "sqt-Arab-YE",
        "sqt-Latn": "sqt-Latn-YE",
        squ: "squ-Latn-CA",
        sr: "sr-Cyrl-RS",
        "sr-ME": "sr-Latn-ME",
        "sr-RO": "sr-Latn-RO",
        "sr-RU": "sr-Latn-RU",
        "sr-TR": "sr-Latn-TR",
        sra: "sra-Latn-PG",
        srb: "srb-Sora-IN",
        sre: "sre-Latn-ID",
        srf: "srf-Latn-PG",
        srg: "srg-Latn-PH",
        srh: "srh-Arab-CN",
        sri: "sri-Latn-CO",
        srk: "srk-Latn-MY",
        srl: "srl-Latn-ID",
        srm: "srm-Latn-SR",
        srn: "srn-Latn-SR",
        sro: "sro-Latn-IT",
        srq: "srq-Latn-BO",
        srr: "srr-Latn-SN",
        srs: "srs-Latn-CA",
        srt: "srt-Latn-ID",
        sru: "sru-Latn-BR",
        srv: "srv-Latn-PH",
        srw: "srw-Latn-ID",
        srx: "srx-Deva-IN",
        sry: "sry-Latn-PG",
        srz: "srz-Arab-IR",
        ss: "ss-Latn-ZA",
        ssb: "ssb-Latn-PH",
        ssc: "ssc-Latn-TZ",
        ssd: "ssd-Latn-ZZ",
        sse: "sse-Latn-PH",
        "sse-Arab": "sse-Arab-PH",
        ssf: "ssf-Latn-TW",
        ssg: "ssg-Latn-ZZ",
        ssh: "ssh-Arab-AE",
        ssj: "ssj-Latn-PG",
        ssl: "ssl-Latn-GH",
        ssm: "ssm-Latn-MY",
        ssn: "ssn-Latn-KE",
        sso: "sso-Latn-PG",
        ssq: "ssq-Latn-ID",
        sss: "sss-Laoo-LA",
        "sss-Thai": "sss-Thai-TH",
        sst: "sst-Latn-PG",
        ssu: "ssu-Latn-PG",
        ssv: "ssv-Latn-VU",
        ssx: "ssx-Latn-PG",
        ssy: "ssy-Latn-ER",
        ssz: "ssz-Latn-PG",
        st: "st-Latn-ZA",
        sta: "sta-Latn-ZM",
        stb: "stb-Latn-PH",
        ste: "ste-Latn-ID",
        stf: "stf-Latn-PG",
        stg: "stg-Latn-VN",
        sth: "sth-Latn-IE",
        sti: "sti-Latn-VN",
        "sti-KH": "sti-Latn-KH",
        stj: "stj-Latn-BF",
        stk: "stk-Latn-ZZ",
        stl: "stl-Latn-NL",
        stm: "stm-Latn-PG",
        stn: "stn-Latn-SB",
        sto: "sto-Latn-CA",
        stp: "stp-Latn-MX",
        stq: "stq-Latn-DE",
        str: "str-Latn-CA",
        sts: "sts-Arab-AF",
        stt: "stt-Latn-VN",
        stv: "stv-Ethi-ET",
        "stv-Arab": "stv-Arab-ET",
        stw: "stw-Latn-FM",
        sty: "sty-Cyrl-RU",
        su: "su-Latn-ID",
        sua: "sua-Latn-ZZ",
        sub: "sub-Latn-CD",
        suc: "suc-Latn-PH",
        sue: "sue-Latn-ZZ",
        sug: "sug-Latn-PG",
        sui: "sui-Latn-PG",
        suj: "suj-Latn-TZ",
        suk: "suk-Latn-TZ",
        suo: "suo-Latn-PG",
        suq: "suq-Latn-ET",
        "suq-Ethi": "suq-Ethi-ET",
        sur: "sur-Latn-ZZ",
        sus: "sus-Latn-GN",
        sut: "sut-Latn-NI",
        suv: "suv-Latn-IN",
        "suv-Beng": "suv-Beng-IN",
        "suv-Deva": "suv-Deva-IN",
        suw: "suw-Latn-TZ",
        suy: "suy-Latn-BR",
        suz: "suz-Deva-NP",
        sv: "sv-Latn-SE",
        sva: "sva-Geor-GE",
        "sva-Cyrl": "sva-Cyrl-GE",
        "sva-Latn": "sva-Latn-GE",
        svb: "svb-Latn-PG",
        svc: "svc-Latn-VC",
        sve: "sve-Latn-ID",
        svm: "svm-Latn-IT",
        svs: "svs-Latn-SB",
        sw: "sw-Latn-TZ",
        swb: "swb-Arab-YT",
        swc: "swc-Latn-CD",
        swf: "swf-Latn-CD",
        swg: "swg-Latn-DE",
        swi: "swi-Hani-CN",
        swj: "swj-Latn-GA",
        swk: "swk-Latn-MW",
        swm: "swm-Latn-PG",
        swo: "swo-Latn-BR",
        swp: "swp-Latn-ZZ",
        swq: "swq-Latn-CM",
        swr: "swr-Latn-ID",
        sws: "sws-Latn-ID",
        swt: "swt-Latn-ID",
        swu: "swu-Latn-ID",
        swv: "swv-Deva-IN",
        sww: "sww-Latn-VU",
        swx: "swx-Latn-BR",
        swy: "swy-Latn-TD",
        sxb: "sxb-Latn-KE",
        sxe: "sxe-Latn-GA",
        sxn: "sxn-Latn-ID",
        sxr: "sxr-Latn-TW",
        sxs: "sxs-Latn-NG",
        sxu: "sxu-Latn-DE",
        "sxu-Runr": "sxu-Runr-DE",
        sxw: "sxw-Latn-ZZ",
        sya: "sya-Latn-ID",
        syb: "syb-Latn-PH",
        syc: "syc-Syrc-TR",
        syi: "syi-Latn-GA",
        syk: "syk-Latn-NG",
        syl: "syl-Beng-BD",
        sym: "sym-Latn-BF",
        syn: "syn-Syrc-IR",
        syo: "syo-Latn-KH",
        syr: "syr-Syrc-IQ",
        sys: "sys-Latn-TD",
        syw: "syw-Deva-NP",
        syx: "syx-Latn-GA",
        sza: "sza-Latn-MY",
        szb: "szb-Latn-ID",
        szc: "szc-Latn-MY",
        szd: "szd-Latn-MY",
        szg: "szg-Latn-CD",
        szl: "szl-Latn-PL",
        szn: "szn-Latn-ID",
        szp: "szp-Latn-ID",
        szv: "szv-Latn-CM",
        szw: "szw-Latn-ID",
        szy: "szy-Latn-TW",
        ta: "ta-Taml-IN",
        taa: "taa-Latn-US",
        tab: "tab-Cyrl-RU",
        tac: "tac-Latn-MX",
        tad: "tad-Latn-ID",
        tae: "tae-Latn-BR",
        taf: "taf-Latn-BR",
        tag: "tag-Latn-SD",
        taj: "taj-Deva-NP",
        tak: "tak-Latn-NG",
        tal: "tal-Latn-ZZ",
        tan: "tan-Latn-ZZ",
        tao: "tao-Latn-TW",
        tap: "tap-Latn-CD",
        taq: "taq-Latn-ZZ",
        tar: "tar-Latn-MX",
        tas: "tas-Latn-VN",
        tau: "tau-Latn-US",
        tav: "tav-Latn-CO",
        taw: "taw-Latn-PG",
        tax: "tax-Latn-TD",
        tay: "tay-Latn-TW",
        "tay-Hans": "tay-Hans-TW",
        "tay-Hant": "tay-Hant-TW",
        taz: "taz-Latn-SD",
        tba: "tba-Latn-BR",
        tbc: "tbc-Latn-ZZ",
        tbd: "tbd-Latn-ZZ",
        tbe: "tbe-Latn-SB",
        tbf: "tbf-Latn-ZZ",
        tbg: "tbg-Latn-ZZ",
        tbh: "tbh-Latn-AU",
        tbi: "tbi-Latn-SD",
        tbj: "tbj-Latn-PG",
        tbk: "tbk-Tagb-PH",
        "tbk-Hano": "tbk-Hano-PH",
        "tbk-Latn": "tbk-Latn-PH",
        tbl: "tbl-Latn-PH",
        tbm: "tbm-Latn-CD",
        tbn: "tbn-Latn-CO",
        tbo: "tbo-Latn-ZZ",
        tbp: "tbp-Latn-ID",
        tbs: "tbs-Latn-PG",
        tbt: "tbt-Latn-CD",
        tbu: "tbu-Latn-MX",
        tbv: "tbv-Latn-PG",
        tbw: "tbw-Latn-PH",
        tbx: "tbx-Latn-PG",
        tby: "tby-Latn-ID",
        tbz: "tbz-Latn-ZZ",
        tca: "tca-Latn-BR",
        tcb: "tcb-Latn-US",
        tcc: "tcc-Latn-TZ",
        tcd: "tcd-Latn-GH",
        tce: "tce-Latn-CA",
        tcf: "tcf-Latn-MX",
        tcg: "tcg-Latn-ID",
        tch: "tch-Latn-TC",
        tci: "tci-Latn-ZZ",
        tck: "tck-Latn-GA",
        tcm: "tcm-Latn-ID",
        tcn: "tcn-Tibt-NP",
        tco: "tco-Mymr-MM",
        tcp: "tcp-Latn-MM",
        tcq: "tcq-Latn-ID",
        tcs: "tcs-Latn-AU",
        tcu: "tcu-Latn-MX",
        tcw: "tcw-Latn-MX",
        tcx: "tcx-Taml-IN",
        tcy: "tcy-Knda-IN",
        tcz: "tcz-Latn-IN",
        tda: "tda-Tfng-NE",
        "tda-Arab": "tda-Arab-NE",
        "tda-Latn": "tda-Latn-NE",
        tdb: "tdb-Deva-IN",
        "tdb-Beng": "tdb-Beng-IN",
        "tdb-Kthi": "tdb-Kthi-IN",
        tdc: "tdc-Latn-CO",
        tdd: "tdd-Tale-CN",
        tde: "tde-Latn-ML",
        tdg: "tdg-Deva-NP",
        tdh: "tdh-Deva-NP",
        tdi: "tdi-Latn-ID",
        tdj: "tdj-Latn-ID",
        tdk: "tdk-Latn-NG",
        tdl: "tdl-Latn-NG",
        tdm: "tdm-Latn-GY",
        tdn: "tdn-Latn-ID",
        tdo: "tdo-Latn-NG",
        tdq: "tdq-Latn-NG",
        tdr: "tdr-Latn-VN",
        tds: "tds-Latn-ID",
        tdt: "tdt-Latn-TL",
        tdu: "tdu-Latn-MY",
        tdv: "tdv-Latn-NG",
        tdx: "tdx-Latn-MG",
        tdy: "tdy-Latn-PH",
        te: "te-Telu-IN",
        tea: "tea-Latn-MY",
        teb: "teb-Latn-EC",
        tec: "tec-Latn-KE",
        ted: "ted-Latn-ZZ",
        tee: "tee-Latn-MX",
        teg: "teg-Latn-GA",
        teh: "teh-Latn-AR",
        tei: "tei-Latn-PG",
        tek: "tek-Latn-CD",
        tem: "tem-Latn-SL",
        ten: "ten-Latn-CO",
        teo: "teo-Latn-UG",
        tep: "tep-Latn-MX",
        teq: "teq-Latn-SD",
        ter: "ter-Latn-BR",
        tes: "tes-Java-ID",
        tet: "tet-Latn-TL",
        teu: "teu-Latn-UG",
        tev: "tev-Latn-ID",
        tew: "tew-Latn-US",
        tex: "tex-Latn-SS",
        tey: "tey-Latn-SD",
        tfi: "tfi-Latn-ZZ",
        tfn: "tfn-Latn-US",
        tfo: "tfo-Latn-ID",
        tfr: "tfr-Latn-PA",
        tft: "tft-Latn-ID",
        tg: "tg-Cyrl-TJ",
        "tg-Arab": "tg-Arab-PK",
        "tg-PK": "tg-Arab-PK",
        tga: "tga-Latn-KE",
        tgb: "tgb-Latn-MY",
        tgc: "tgc-Latn-ZZ",
        tgd: "tgd-Latn-NG",
        tge: "tge-Deva-NP",
        tgf: "tgf-Tibt-BT",
        tgh: "tgh-Latn-TT",
        tgi: "tgi-Latn-PG",
        tgj: "tgj-Latn-IN",
        tgn: "tgn-Latn-PH",
        tgo: "tgo-Latn-ZZ",
        tgp: "tgp-Latn-VU",
        tgq: "tgq-Latn-MY",
        tgs: "tgs-Latn-VU",
        tgt: "tgt-Latn-PH",
        "tgt-Hano": "tgt-Hano-PH",
        "tgt-Tagb": "tgt-Tagb-PH",
        tgu: "tgu-Latn-ZZ",
        tgv: "tgv-Latn-BR",
        tgw: "tgw-Latn-CI",
        tgx: "tgx-Latn-CA",
        tgy: "tgy-Latn-SS",
        tgz: "tgz-Latn-AU",
        th: "th-Thai-TH",
        thd: "thd-Latn-AU",
        the: "the-Deva-NP",
        thf: "thf-Deva-NP",
        thh: "thh-Latn-MX",
        thi: "thi-Tale-LA",
        thk: "thk-Latn-KE",
        thl: "thl-Deva-NP",
        thm: "thm-Thai-TH",
        thp: "thp-Latn-CA",
        "thp-Dupl": "thp-Dupl-CA",
        thq: "thq-Deva-NP",
        thr: "thr-Deva-NP",
        ths: "ths-Deva-NP",
        tht: "tht-Latn-CA",
        thu: "thu-Latn-SS",
        thv: "thv-Latn-DZ",
        "thv-Arab": "thv-Arab-DZ",
        "thv-Tfng": "thv-Tfng-DZ",
        thy: "thy-Latn-NG",
        thz: "thz-Latn-NE",
        "thz-Tfng": "thz-Tfng-NE",
        ti: "ti-Ethi-ET",
        tic: "tic-Latn-SD",
        tif: "tif-Latn-ZZ",
        tig: "tig-Ethi-ER",
        tih: "tih-Latn-MY",
        tii: "tii-Latn-CD",
        tij: "tij-Deva-NP",
        tik: "tik-Latn-ZZ",
        til: "til-Latn-US",
        tim: "tim-Latn-ZZ",
        tin: "tin-Cyrl-RU",
        tio: "tio-Latn-ZZ",
        tip: "tip-Latn-ID",
        tiq: "tiq-Latn-BF",
        tis: "tis-Latn-PH",
        tit: "tit-Latn-CO",
        tiu: "tiu-Latn-PH",
        tiv: "tiv-Latn-NG",
        tiw: "tiw-Latn-AU",
        tix: "tix-Latn-US",
        tiy: "tiy-Latn-PH",
        tja: "tja-Latn-LR",
        tjg: "tjg-Latn-ID",
        tji: "tji-Latn-CN",
        tjj: "tjj-Latn-AU",
        tjl: "tjl-Mymr-MM",
        tjn: "tjn-Latn-CI",
        tjo: "tjo-Arab-DZ",
        tjp: "tjp-Latn-AU",
        tjs: "tjs-Latn-CN",
        tju: "tju-Latn-AU",
        tjw: "tjw-Latn-AU",
        tk: "tk-Latn-TM",
        tka: "tka-Latn-BR",
        tkb: "tkb-Deva-IN",
        tkd: "tkd-Latn-TL",
        tke: "tke-Latn-MZ",
        tkf: "tkf-Latn-BR",
        tkg: "tkg-Latn-MG",
        tkl: "tkl-Latn-TK",
        tkp: "tkp-Latn-SB",
        tkq: "tkq-Latn-NG",
        tkr: "tkr-Latn-AZ",
        tks: "tks-Arab-IR",
        tkt: "tkt-Deva-NP",
        tku: "tku-Latn-MX",
        tkv: "tkv-Latn-PG",
        tkw: "tkw-Latn-SB",
        tkx: "tkx-Latn-ID",
        tkz: "tkz-Latn-VN",
        tl: "tl-Latn-PH",
        tla: "tla-Latn-MX",
        tlb: "tlb-Latn-ID",
        tlc: "tlc-Latn-MX",
        tld: "tld-Latn-ID",
        tlf: "tlf-Latn-ZZ",
        tlg: "tlg-Latn-ID",
        tli: "tli-Latn-US",
        "tli-Cyrl": "tli-Cyrl-US",
        tlj: "tlj-Latn-UG",
        tlk: "tlk-Latn-ID",
        tll: "tll-Latn-CD",
        tlm: "tlm-Latn-VU",
        tln: "tln-Latn-ID",
        tlp: "tlp-Latn-MX",
        tlq: "tlq-Latn-MM",
        tlr: "tlr-Latn-SB",
        tls: "tls-Latn-VU",
        tlt: "tlt-Latn-ID",
        tlu: "tlu-Latn-ID",
        tlv: "tlv-Latn-ID",
        tlx: "tlx-Latn-ZZ",
        tly: "tly-Latn-AZ",
        tma: "tma-Latn-TD",
        tmb: "tmb-Latn-VU",
        tmc: "tmc-Latn-TD",
        tmd: "tmd-Latn-PG",
        tme: "tme-Latn-BR",
        tmf: "tmf-Latn-PY",
        tmg: "tmg-Latn-ID",
        tmh: "tmh-Latn-NE",
        tmi: "tmi-Latn-VU",
        tmj: "tmj-Latn-ID",
        tmk: "tmk-Deva-NP",
        tml: "tml-Latn-ID",
        tmm: "tmm-Latn-VN",
        tmn: "tmn-Latn-ID",
        tmo: "tmo-Latn-MY",
        tmq: "tmq-Latn-PG",
        tmr: "tmr-Syrc-IL",
        tmt: "tmt-Latn-VU",
        tmu: "tmu-Latn-ID",
        tmv: "tmv-Latn-CD",
        tmw: "tmw-Latn-MY",
        tmy: "tmy-Latn-ZZ",
        tmz: "tmz-Latn-VE",
        tn: "tn-Latn-ZA",
        tna: "tna-Latn-BO",
        tnb: "tnb-Latn-CO",
        tnc: "tnc-Latn-CO",
        tnd: "tnd-Latn-CO",
        tng: "tng-Latn-TD",
        tnh: "tnh-Latn-ZZ",
        tni: "tni-Latn-ID",
        tnk: "tnk-Latn-VU",
        tnl: "tnl-Latn-VU",
        tnm: "tnm-Latn-ID",
        tnn: "tnn-Latn-VU",
        tno: "tno-Latn-BO",
        tnp: "tnp-Latn-VU",
        tnq: "tnq-Latn-PR",
        tnr: "tnr-Latn-SN",
        tns: "tns-Latn-PG",
        tnt: "tnt-Latn-ID",
        tnv: "tnv-Cakm-BD",
        tnw: "tnw-Latn-ID",
        tnx: "tnx-Latn-SB",
        tny: "tny-Latn-TZ",
        to: "to-Latn-TO",
        tob: "tob-Latn-AR",
        toc: "toc-Latn-MX",
        tod: "tod-Latn-GN",
        tof: "tof-Latn-ZZ",
        tog: "tog-Latn-MW",
        toh: "toh-Latn-MZ",
        toi: "toi-Latn-ZM",
        toj: "toj-Latn-MX",
        tok: "tok-Latn-001",
        tol: "tol-Latn-US",
        tom: "tom-Latn-ID",
        too: "too-Latn-MX",
        top: "top-Latn-MX",
        toq: "toq-Latn-ZZ",
        tor: "tor-Latn-CD",
        tos: "tos-Latn-MX",
        tou: "tou-Latn-VN",
        tov: "tov-Arab-IR",
        tow: "tow-Latn-US",
        tox: "tox-Latn-PW",
        toy: "toy-Latn-ID",
        toz: "toz-Latn-CM",
        tpa: "tpa-Latn-PG",
        tpc: "tpc-Latn-MX",
        tpe: "tpe-Latn-BD",
        "tpe-Beng": "tpe-Beng-BD",
        tpf: "tpf-Latn-ID",
        tpg: "tpg-Latn-ID",
        tpi: "tpi-Latn-PG",
        tpj: "tpj-Latn-PY",
        tpk: "tpk-Latn-BR",
        tpl: "tpl-Latn-MX",
        tpm: "tpm-Latn-ZZ",
        tpn: "tpn-Latn-BR",
        tpp: "tpp-Latn-MX",
        tpr: "tpr-Latn-BR",
        tpt: "tpt-Latn-MX",
        tpu: "tpu-Khmr-KH",
        tpv: "tpv-Latn-MP",
        tpx: "tpx-Latn-MX",
        tpy: "tpy-Latn-BR",
        tpz: "tpz-Latn-ZZ",
        tqb: "tqb-Latn-BR",
        tql: "tql-Latn-VU",
        tqm: "tqm-Latn-PG",
        tqn: "tqn-Latn-US",
        tqo: "tqo-Latn-ZZ",
        tqp: "tqp-Latn-PG",
        tqt: "tqt-Latn-MX",
        tqu: "tqu-Latn-SB",
        tqw: "tqw-Latn-US",
        tr: "tr-Latn-TR",
        tra: "tra-Arab-AF",
        trb: "trb-Latn-PG",
        trc: "trc-Latn-MX",
        tre: "tre-Latn-ID",
        trf: "trf-Latn-TT",
        trg: "trg-Hebr-IL",
        trh: "trh-Latn-PG",
        tri: "tri-Latn-SR",
        trj: "trj-Latn-TD",
        trl: "trl-Latn-GB",
        trm: "trm-Arab-AF",
        trn: "trn-Latn-BO",
        tro: "tro-Latn-IN",
        trp: "trp-Latn-IN",
        "trp-Beng": "trp-Beng-IN",
        trq: "trq-Latn-MX",
        trr: "trr-Latn-PE",
        trs: "trs-Latn-MX",
        trt: "trt-Latn-ID",
        tru: "tru-Latn-TR",
        trv: "trv-Latn-TW",
        trw: "trw-Arab-PK",
        trx: "trx-Latn-MY",
        try: "try-Latn-IN",
        trz: "trz-Latn-BR",
        ts: "ts-Latn-ZA",
        tsa: "tsa-Latn-CG",
        tsb: "tsb-Latn-ET",
        tsc: "tsc-Latn-MZ",
        tsd: "tsd-Grek-GR",
        tsf: "tsf-Deva-NP",
        tsg: "tsg-Latn-PH",
        tsh: "tsh-Latn-CM",
        tsi: "tsi-Latn-CA",
        tsj: "tsj-Tibt-BT",
        tsl: "tsl-Latn-VN",
        tsp: "tsp-Latn-BF",
        tsr: "tsr-Latn-VU",
        tst: "tst-Latn-ML",
        tsu: "tsu-Latn-TW",
        tsv: "tsv-Latn-GA",
        tsw: "tsw-Latn-ZZ",
        tsx: "tsx-Latn-PG",
        tsz: "tsz-Latn-MX",
        tt: "tt-Cyrl-RU",
        ttb: "ttb-Latn-NG",
        ttc: "ttc-Latn-GT",
        ttd: "ttd-Latn-ZZ",
        tte: "tte-Latn-ZZ",
        ttf: "ttf-Latn-CM",
        tth: "tth-Laoo-LA",
        tti: "tti-Latn-ID",
        ttj: "ttj-Latn-UG",
        ttk: "ttk-Latn-CO",
        ttl: "ttl-Latn-ZM",
        ttm: "ttm-Latn-CA",
        ttn: "ttn-Latn-ID",
        tto: "tto-Laoo-LA",
        ttp: "ttp-Latn-ID",
        ttr: "ttr-Latn-ZZ",
        tts: "tts-Thai-TH",
        ttt: "ttt-Latn-AZ",
        ttu: "ttu-Latn-PG",
        ttv: "ttv-Latn-PG",
        ttw: "ttw-Latn-MY",
        tty: "tty-Latn-ID",
        tua: "tua-Latn-PG",
        tub: "tub-Latn-US",
        tuc: "tuc-Latn-PG",
        tud: "tud-Latn-BR",
        tue: "tue-Latn-CO",
        tuf: "tuf-Latn-CO",
        tug: "tug-Latn-TD",
        tuh: "tuh-Latn-ZZ",
        tui: "tui-Latn-CM",
        tuj: "tuj-Latn-ID",
        tul: "tul-Latn-ZZ",
        tum: "tum-Latn-MW",
        tun: "tun-Latn-US",
        tuo: "tuo-Latn-BR",
        tuq: "tuq-Latn-ZZ",
        tus: "tus-Latn-CA",
        tuu: "tuu-Latn-US",
        tuv: "tuv-Latn-KE",
        tux: "tux-Latn-BR",
        tuy: "tuy-Latn-KE",
        tuz: "tuz-Latn-BF",
        tva: "tva-Latn-SB",
        tvd: "tvd-Latn-ZZ",
        tve: "tve-Latn-ID",
        tvk: "tvk-Latn-VU",
        tvl: "tvl-Latn-TV",
        tvm: "tvm-Latn-ID",
        tvn: "tvn-Mymr-MM",
        tvo: "tvo-Latn-ID",
        tvs: "tvs-Latn-KE",
        tvt: "tvt-Latn-IN",
        tvu: "tvu-Latn-ZZ",
        tvw: "tvw-Latn-ID",
        tvx: "tvx-Latn-TW",
        twa: "twa-Latn-US",
        twb: "twb-Latn-PH",
        twd: "twd-Latn-NL",
        twe: "twe-Latn-ID",
        twf: "twf-Latn-US",
        twg: "twg-Latn-ID",
        twh: "twh-Latn-ZZ",
        twl: "twl-Latn-MZ",
        twm: "twm-Deva-IN",
        twn: "twn-Latn-CM",
        two: "two-Latn-BW",
        twp: "twp-Latn-PG",
        twq: "twq-Latn-NE",
        twr: "twr-Latn-MX",
        twt: "twt-Latn-BR",
        twu: "twu-Latn-ID",
        tww: "tww-Latn-PG",
        twx: "twx-Latn-MZ",
        twy: "twy-Latn-ID",
        txa: "txa-Latn-MY",
        txe: "txe-Latn-ID",
        txg: "txg-Tang-CN",
        txi: "txi-Latn-BR",
        txj: "txj-Latn-NG",
        txm: "txm-Latn-ID",
        txn: "txn-Latn-ID",
        txo: "txo-Toto-IN",
        txq: "txq-Latn-ID",
        txs: "txs-Latn-ID",
        txt: "txt-Latn-ID",
        txu: "txu-Latn-BR",
        txx: "txx-Latn-MY",
        txy: "txy-Latn-MG",
        ty: "ty-Latn-PF",
        tya: "tya-Latn-ZZ",
        tye: "tye-Latn-NG",
        tyh: "tyh-Latn-VN",
        tyi: "tyi-Latn-CG",
        tyj: "tyj-Latn-VN",
        tyl: "tyl-Latn-VN",
        tyn: "tyn-Latn-ID",
        typ: "typ-Latn-AU",
        tyr: "tyr-Tavt-VN",
        tys: "tys-Latn-VN",
        tyt: "tyt-Latn-VN",
        "tyt-Tavt": "tyt-Tavt-VN",
        tyu: "tyu-Latn-BW",
        tyv: "tyv-Cyrl-RU",
        tyx: "tyx-Latn-CG",
        tyy: "tyy-Latn-NG",
        tyz: "tyz-Latn-VN",
        tzh: "tzh-Latn-MX",
        tzj: "tzj-Latn-GT",
        tzl: "tzl-Latn-001",
        tzm: "tzm-Latn-MA",
        tzn: "tzn-Latn-ID",
        tzo: "tzo-Latn-MX",
        tzx: "tzx-Latn-PG",
        uam: "uam-Latn-BR",
        uar: "uar-Latn-PG",
        uba: "uba-Latn-NG",
        ubi: "ubi-Latn-TD",
        ubl: "ubl-Latn-PH",
        ubr: "ubr-Latn-PG",
        ubu: "ubu-Latn-ZZ",
        uda: "uda-Latn-NG",
        ude: "ude-Cyrl-RU",
        udg: "udg-Mlym-IN",
        udi: "udi-Aghb-RU",
        udj: "udj-Latn-ID",
        udl: "udl-Latn-CM",
        udm: "udm-Cyrl-RU",
        udu: "udu-Latn-SD",
        ues: "ues-Latn-ID",
        ufi: "ufi-Latn-PG",
        ug: "ug-Arab-CN",
        "ug-Cyrl": "ug-Cyrl-KZ",
        "ug-KZ": "ug-Cyrl-KZ",
        "ug-MN": "ug-Cyrl-MN",
        uga: "uga-Ugar-SY",
        ugb: "ugb-Latn-AU",
        uge: "uge-Latn-SB",
        ugh: "ugh-Cyrl-RU",
        ugo: "ugo-Thai-TH",
        uha: "uha-Latn-NG",
        uhn: "uhn-Latn-ID",
        uis: "uis-Latn-PG",
        uiv: "uiv-Latn-CM",
        uji: "uji-Latn-NG",
        uk: "uk-Cyrl-UA",
        uka: "uka-Latn-ID",
        ukg: "ukg-Latn-PG",
        ukh: "ukh-Latn-CF",
        uki: "uki-Orya-IN",
        ukk: "ukk-Latn-MM",
        ukp: "ukp-Latn-NG",
        ukq: "ukq-Latn-NG",
        uku: "uku-Latn-NG",
        ukv: "ukv-Latn-SS",
        ukw: "ukw-Latn-NG",
        uky: "uky-Latn-AU",
        ula: "ula-Latn-NG",
        ulb: "ulb-Latn-NG",
        ulc: "ulc-Cyrl-RU",
        ule: "ule-Latn-AR",
        ulf: "ulf-Latn-ID",
        uli: "uli-Latn-FM",
        ulk: "ulk-Latn-AU",
        ulm: "ulm-Latn-ID",
        uln: "uln-Latn-PG",
        ulu: "ulu-Latn-ID",
        ulw: "ulw-Latn-NI",
        uma: "uma-Latn-US",
        umb: "umb-Latn-AO",
        umd: "umd-Latn-AU",
        umg: "umg-Latn-AU",
        umi: "umi-Latn-MY",
        umm: "umm-Latn-NG",
        umn: "umn-Latn-MM",
        umo: "umo-Latn-BR",
        ump: "ump-Latn-AU",
        umr: "umr-Latn-AU",
        ums: "ums-Latn-ID",
        una: "una-Latn-PG",
        und: "en-Latn-US",
        "und-002": "en-Latn-NG",
        "und-003": "en-Latn-US",
        "und-005": "pt-Latn-BR",
        "und-009": "en-Latn-AU",
        "und-011": "en-Latn-NG",
        "und-013": "es-Latn-MX",
        "und-014": "sw-Latn-TZ",
        "und-015": "ar-Arab-EG",
        "und-017": "sw-Latn-CD",
        "und-018": "en-Latn-ZA",
        "und-019": "en-Latn-US",
        "und-021": "en-Latn-US",
        "und-029": "es-Latn-CU",
        "und-030": "zh-Hans-CN",
        "und-034": "hi-Deva-IN",
        "und-035": "id-Latn-ID",
        "und-039": "it-Latn-IT",
        "und-053": "en-Latn-AU",
        "und-054": "en-Latn-PG",
        "und-057": "en-Latn-GU",
        "und-061": "sm-Latn-WS",
        "und-142": "zh-Hans-CN",
        "und-143": "uz-Latn-UZ",
        "und-145": "ar-Arab-SA",
        "und-150": "ru-Cyrl-RU",
        "und-151": "ru-Cyrl-RU",
        "und-154": "en-Latn-GB",
        "und-155": "de-Latn-DE",
        "und-202": "en-Latn-NG",
        "und-419": "es-Latn-419",
        "und-AD": "ca-Latn-AD",
        "und-AE": "ar-Arab-AE",
        "und-AF": "fa-Arab-AF",
        "und-AL": "sq-Latn-AL",
        "und-AM": "hy-Armn-AM",
        "und-AO": "pt-Latn-AO",
        "und-AQ": "und-Latn-AQ",
        "und-AR": "es-Latn-AR",
        "und-AS": "sm-Latn-AS",
        "und-AT": "de-Latn-AT",
        "und-AW": "nl-Latn-AW",
        "und-AX": "sv-Latn-AX",
        "und-AZ": "az-Latn-AZ",
        "und-Adlm": "ff-Adlm-GN",
        "und-Aghb": "udi-Aghb-RU",
        "und-Ahom": "aho-Ahom-IN",
        "und-Arab": "ar-Arab-EG",
        "und-Arab-CC": "ms-Arab-CC",
        "und-Arab-CN": "ug-Arab-CN",
        "und-Arab-GB": "ur-Arab-GB",
        "und-Arab-ID": "ms-Arab-ID",
        "und-Arab-IN": "ur-Arab-IN",
        "und-Arab-KH": "cja-Arab-KH",
        "und-Arab-MM": "rhg-Arab-MM",
        "und-Arab-MN": "kk-Arab-MN",
        "und-Arab-MU": "ur-Arab-MU",
        "und-Arab-NG": "ha-Arab-NG",
        "und-Arab-PK": "ur-Arab-PK",
        "und-Arab-TG": "apd-Arab-TG",
        "und-Arab-TH": "mfa-Arab-TH",
        "und-Arab-TJ": "fa-Arab-TJ",
        "und-Arab-TR": "apc-Arab-TR",
        "und-Arab-YT": "swb-Arab-YT",
        "und-Armi": "arc-Armi-IR",
        "und-Armn": "hy-Armn-AM",
        "und-Avst": "ae-Avst-IR",
        "und-BA": "bs-Latn-BA",
        "und-BD": "bn-Beng-BD",
        "und-BE": "nl-Latn-BE",
        "und-BF": "fr-Latn-BF",
        "und-BG": "bg-Cyrl-BG",
        "und-BH": "ar-Arab-BH",
        "und-BI": "rn-Latn-BI",
        "und-BJ": "fr-Latn-BJ",
        "und-BL": "fr-Latn-BL",
        "und-BN": "ms-Latn-BN",
        "und-BO": "es-Latn-BO",
        "und-BQ": "pap-Latn-BQ",
        "und-BR": "pt-Latn-BR",
        "und-BT": "dz-Tibt-BT",
        "und-BV": "und-Latn-BV",
        "und-BY": "be-Cyrl-BY",
        "und-Bali": "ban-Bali-ID",
        "und-Bamu": "bax-Bamu-CM",
        "und-Bass": "bsq-Bass-LR",
        "und-Batk": "bbc-Batk-ID",
        "und-Beng": "bn-Beng-BD",
        "und-Bhks": "sa-Bhks-IN",
        "und-Bopo": "zh-Bopo-TW",
        "und-Brah": "pka-Brah-IN",
        "und-Brai": "fr-Brai-FR",
        "und-Bugi": "bug-Bugi-ID",
        "und-Buhd": "bku-Buhd-PH",
        "und-CD": "sw-Latn-CD",
        "und-CF": "fr-Latn-CF",
        "und-CG": "fr-Latn-CG",
        "und-CH": "de-Latn-CH",
        "und-CI": "fr-Latn-CI",
        "und-CL": "es-Latn-CL",
        "und-CM": "fr-Latn-CM",
        "und-CN": "zh-Hans-CN",
        "und-CO": "es-Latn-CO",
        "und-CP": "und-Latn-CP",
        "und-CR": "es-Latn-CR",
        "und-CU": "es-Latn-CU",
        "und-CV": "pt-Latn-CV",
        "und-CW": "pap-Latn-CW",
        "und-CY": "el-Grek-CY",
        "und-CZ": "cs-Latn-CZ",
        "und-Cakm": "ccp-Cakm-BD",
        "und-Cans": "iu-Cans-CA",
        "und-Cari": "xcr-Cari-TR",
        "und-Cham": "cjm-Cham-VN",
        "und-Cher": "chr-Cher-US",
        "und-Chrs": "xco-Chrs-UZ",
        "und-Copt": "cop-Copt-EG",
        "und-Cpmn": "und-Cpmn-CY",
        "und-Cpmn-CY": "und-Cpmn-CY",
        "und-Cprt": "grc-Cprt-CY",
        "und-Cyrl": "ru-Cyrl-RU",
        "und-Cyrl-AL": "mk-Cyrl-AL",
        "und-Cyrl-BA": "sr-Cyrl-BA",
        "und-Cyrl-GE": "ab-Cyrl-GE",
        "und-Cyrl-GR": "mk-Cyrl-GR",
        "und-Cyrl-MD": "uk-Cyrl-MD",
        "und-Cyrl-RO": "bg-Cyrl-RO",
        "und-Cyrl-SK": "uk-Cyrl-SK",
        "und-Cyrl-TR": "kbd-Cyrl-TR",
        "und-Cyrl-XK": "sr-Cyrl-XK",
        "und-DE": "de-Latn-DE",
        "und-DJ": "aa-Latn-DJ",
        "und-DK": "da-Latn-DK",
        "und-DO": "es-Latn-DO",
        "und-DZ": "ar-Arab-DZ",
        "und-Deva": "hi-Deva-IN",
        "und-Deva-BT": "ne-Deva-BT",
        "und-Deva-FJ": "hif-Deva-FJ",
        "und-Deva-MU": "bho-Deva-MU",
        "und-Deva-PK": "btv-Deva-PK",
        "und-Diak": "dv-Diak-MV",
        "und-Dogr": "doi-Dogr-IN",
        "und-Dupl": "fr-Dupl-FR",
        "und-EA": "es-Latn-EA",
        "und-EC": "es-Latn-EC",
        "und-EE": "et-Latn-EE",
        "und-EG": "ar-Arab-EG",
        "und-EH": "ar-Arab-EH",
        "und-ER": "ti-Ethi-ER",
        "und-ES": "es-Latn-ES",
        "und-ET": "am-Ethi-ET",
        "und-EU": "en-Latn-IE",
        "und-EZ": "de-Latn-EZ",
        "und-Egyp": "egy-Egyp-EG",
        "und-Elba": "sq-Elba-AL",
        "und-Elym": "arc-Elym-IR",
        "und-Ethi": "am-Ethi-ET",
        "und-FI": "fi-Latn-FI",
        "und-FO": "fo-Latn-FO",
        "und-FR": "fr-Latn-FR",
        "und-GA": "fr-Latn-GA",
        "und-GE": "ka-Geor-GE",
        "und-GF": "fr-Latn-GF",
        "und-GH": "ak-Latn-GH",
        "und-GL": "kl-Latn-GL",
        "und-GN": "fr-Latn-GN",
        "und-GP": "fr-Latn-GP",
        "und-GQ": "es-Latn-GQ",
        "und-GR": "el-Grek-GR",
        "und-GS": "und-Latn-GS",
        "und-GT": "es-Latn-GT",
        "und-GW": "pt-Latn-GW",
        "und-Geor": "ka-Geor-GE",
        "und-Glag": "cu-Glag-BG",
        "und-Gong": "wsg-Gong-IN",
        "und-Gonm": "esg-Gonm-IN",
        "und-Goth": "got-Goth-UA",
        "und-Gran": "sa-Gran-IN",
        "und-Grek": "el-Grek-GR",
        "und-Grek-TR": "bgx-Grek-TR",
        "und-Gujr": "gu-Gujr-IN",
        "und-Guru": "pa-Guru-IN",
        "und-HK": "zh-Hant-HK",
        "und-HM": "und-Latn-HM",
        "und-HN": "es-Latn-HN",
        "und-HR": "hr-Latn-HR",
        "und-HT": "ht-Latn-HT",
        "und-HU": "hu-Latn-HU",
        "und-Hanb": "zh-Hanb-TW",
        "und-Hang": "ko-Hang-KR",
        "und-Hani": "zh-Hani-CN",
        "und-Hano": "hnn-Hano-PH",
        "und-Hans": "zh-Hans-CN",
        "und-Hant": "zh-Hant-TW",
        "und-Hant-CA": "yue-Hant-CA",
        "und-Hebr": "he-Hebr-IL",
        "und-Hebr-SE": "yi-Hebr-SE",
        "und-Hebr-UA": "yi-Hebr-UA",
        "und-Hebr-US": "yi-Hebr-US",
        "und-Hira": "ja-Hira-JP",
        "und-Hluw": "hlu-Hluw-TR",
        "und-Hmng": "hnj-Hmng-LA",
        "und-Hmnp": "hnj-Hmnp-US",
        "und-Hung": "hu-Hung-HU",
        "und-IC": "es-Latn-IC",
        "und-ID": "id-Latn-ID",
        "und-IL": "he-Hebr-IL",
        "und-IN": "hi-Deva-IN",
        "und-IQ": "ar-Arab-IQ",
        "und-IR": "fa-Arab-IR",
        "und-IS": "is-Latn-IS",
        "und-IT": "it-Latn-IT",
        "und-Ital": "ett-Ital-IT",
        "und-JO": "ar-Arab-JO",
        "und-JP": "ja-Jpan-JP",
        "und-Jamo": "ko-Jamo-KR",
        "und-Java": "jv-Java-ID",
        "und-Jpan": "ja-Jpan-JP",
        "und-KE": "sw-Latn-KE",
        "und-KG": "ky-Cyrl-KG",
        "und-KH": "km-Khmr-KH",
        "und-KM": "ar-Arab-KM",
        "und-KP": "ko-Kore-KP",
        "und-KR": "ko-Kore-KR",
        "und-KW": "ar-Arab-KW",
        "und-KZ": "ru-Cyrl-KZ",
        "und-Kali": "eky-Kali-MM",
        "und-Kana": "ja-Kana-JP",
        "und-Kawi": "kaw-Kawi-ID",
        "und-Khar": "pra-Khar-PK",
        "und-Khmr": "km-Khmr-KH",
        "und-Khoj": "sd-Khoj-IN",
        "und-Kits": "zkt-Kits-CN",
        "und-Knda": "kn-Knda-IN",
        "und-Kore": "ko-Kore-KR",
        "und-Kthi": "bho-Kthi-IN",
        "und-LA": "lo-Laoo-LA",
        "und-LB": "ar-Arab-LB",
        "und-LI": "de-Latn-LI",
        "und-LK": "si-Sinh-LK",
        "und-LS": "st-Latn-LS",
        "und-LT": "lt-Latn-LT",
        "und-LU": "fr-Latn-LU",
        "und-LV": "lv-Latn-LV",
        "und-LY": "ar-Arab-LY",
        "und-Lana": "nod-Lana-TH",
        "und-Laoo": "lo-Laoo-LA",
        "und-Laoo-AU": "hnj-Laoo-AU",
        "und-Laoo-CN": "hnj-Laoo-CN",
        "und-Laoo-FR": "hnj-Laoo-FR",
        "und-Laoo-GF": "hnj-Laoo-GF",
        "und-Laoo-MM": "hnj-Laoo-MM",
        "und-Laoo-SR": "hnj-Laoo-SR",
        "und-Laoo-TH": "hnj-Laoo-TH",
        "und-Laoo-US": "hnj-Laoo-US",
        "und-Laoo-VN": "hnj-Laoo-VN",
        "und-Latn-AF": "tk-Latn-AF",
        "und-Latn-AM": "ku-Latn-AM",
        "und-Latn-CN": "za-Latn-CN",
        "und-Latn-CY": "tr-Latn-CY",
        "und-Latn-DZ": "fr-Latn-DZ",
        "und-Latn-ET": "en-Latn-ET",
        "und-Latn-GE": "ku-Latn-GE",
        "und-Latn-IR": "tk-Latn-IR",
        "und-Latn-KM": "fr-Latn-KM",
        "und-Latn-MA": "fr-Latn-MA",
        "und-Latn-MK": "sq-Latn-MK",
        "und-Latn-MM": "kac-Latn-MM",
        "und-Latn-MO": "pt-Latn-MO",
        "und-Latn-MR": "fr-Latn-MR",
        "und-Latn-RU": "krl-Latn-RU",
        "und-Latn-SY": "fr-Latn-SY",
        "und-Latn-TN": "fr-Latn-TN",
        "und-Latn-TW": "trv-Latn-TW",
        "und-Latn-UA": "pl-Latn-UA",
        "und-Lepc": "lep-Lepc-IN",
        "und-Limb": "lif-Limb-IN",
        "und-Lina": "lab-Lina-GR",
        "und-Linb": "grc-Linb-GR",
        "und-Lisu": "lis-Lisu-CN",
        "und-Lyci": "xlc-Lyci-TR",
        "und-Lydi": "xld-Lydi-TR",
        "und-MA": "ar-Arab-MA",
        "und-MC": "fr-Latn-MC",
        "und-MD": "ro-Latn-MD",
        "und-ME": "sr-Latn-ME",
        "und-MF": "fr-Latn-MF",
        "und-MG": "mg-Latn-MG",
        "und-MK": "mk-Cyrl-MK",
        "und-ML": "bm-Latn-ML",
        "und-MM": "my-Mymr-MM",
        "und-MN": "mn-Cyrl-MN",
        "und-MO": "zh-Hant-MO",
        "und-MQ": "fr-Latn-MQ",
        "und-MR": "ar-Arab-MR",
        "und-MT": "mt-Latn-MT",
        "und-MU": "mfe-Latn-MU",
        "und-MV": "dv-Thaa-MV",
        "und-MX": "es-Latn-MX",
        "und-MY": "ms-Latn-MY",
        "und-MZ": "pt-Latn-MZ",
        "und-Mahj": "hi-Mahj-IN",
        "und-Maka": "mak-Maka-ID",
        "und-Mand": "myz-Mand-IR",
        "und-Mani": "xmn-Mani-CN",
        "und-Marc": "bo-Marc-CN",
        "und-Medf": "dmf-Medf-NG",
        "und-Mend": "men-Mend-SL",
        "und-Merc": "xmr-Merc-SD",
        "und-Mero": "xmr-Mero-SD",
        "und-Mlym": "ml-Mlym-IN",
        "und-Modi": "mr-Modi-IN",
        "und-Mong": "mn-Mong-CN",
        "und-Mroo": "mro-Mroo-BD",
        "und-Mtei": "mni-Mtei-IN",
        "und-Mult": "skr-Mult-PK",
        "und-Mymr": "my-Mymr-MM",
        "und-Mymr-IN": "kht-Mymr-IN",
        "und-Mymr-TH": "mnw-Mymr-TH",
        "und-NA": "af-Latn-NA",
        "und-NC": "fr-Latn-NC",
        "und-NE": "ha-Latn-NE",
        "und-NI": "es-Latn-NI",
        "und-NL": "nl-Latn-NL",
        "und-NO": "nb-Latn-NO",
        "und-NP": "ne-Deva-NP",
        "und-Nagm": "unr-Nagm-IN",
        "und-Nand": "sa-Nand-IN",
        "und-Narb": "xna-Narb-SA",
        "und-Nbat": "arc-Nbat-JO",
        "und-Newa": "new-Newa-NP",
        "und-Nkoo": "man-Nkoo-GN",
        "und-Nshu": "zhx-Nshu-CN",
        "und-OM": "ar-Arab-OM",
        "und-Ogam": "sga-Ogam-IE",
        "und-Olck": "sat-Olck-IN",
        "und-Orkh": "otk-Orkh-MN",
        "und-Orya": "or-Orya-IN",
        "und-Osge": "osa-Osge-US",
        "und-Osma": "so-Osma-SO",
        "und-Ougr": "oui-Ougr-143",
        "und-PA": "es-Latn-PA",
        "und-PE": "es-Latn-PE",
        "und-PF": "fr-Latn-PF",
        "und-PG": "tpi-Latn-PG",
        "und-PH": "fil-Latn-PH",
        "und-PK": "ur-Arab-PK",
        "und-PL": "pl-Latn-PL",
        "und-PM": "fr-Latn-PM",
        "und-PR": "es-Latn-PR",
        "und-PS": "ar-Arab-PS",
        "und-PT": "pt-Latn-PT",
        "und-PW": "pau-Latn-PW",
        "und-PY": "gn-Latn-PY",
        "und-Palm": "arc-Palm-SY",
        "und-Pauc": "ctd-Pauc-MM",
        "und-Perm": "kv-Perm-RU",
        "und-Phag": "lzh-Phag-CN",
        "und-Phli": "pal-Phli-IR",
        "und-Phlp": "pal-Phlp-CN",
        "und-Phnx": "phn-Phnx-LB",
        "und-Plrd": "hmd-Plrd-CN",
        "und-Prti": "xpr-Prti-IR",
        "und-QA": "ar-Arab-QA",
        "und-QO": "en-Latn-DG",
        "und-RE": "fr-Latn-RE",
        "und-RO": "ro-Latn-RO",
        "und-RS": "sr-Cyrl-RS",
        "und-RU": "ru-Cyrl-RU",
        "und-RW": "rw-Latn-RW",
        "und-Rjng": "rej-Rjng-ID",
        "und-Rohg": "rhg-Rohg-MM",
        "und-Runr": "non-Runr-SE",
        "und-SA": "ar-Arab-SA",
        "und-SC": "fr-Latn-SC",
        "und-SD": "ar-Arab-SD",
        "und-SE": "sv-Latn-SE",
        "und-SI": "sl-Latn-SI",
        "und-SJ": "nb-Latn-SJ",
        "und-SK": "sk-Latn-SK",
        "und-SM": "it-Latn-SM",
        "und-SN": "fr-Latn-SN",
        "und-SO": "so-Latn-SO",
        "und-SR": "nl-Latn-SR",
        "und-ST": "pt-Latn-ST",
        "und-SV": "es-Latn-SV",
        "und-SY": "ar-Arab-SY",
        "und-Samr": "smp-Samr-IL",
        "und-Sarb": "xsa-Sarb-YE",
        "und-Saur": "saz-Saur-IN",
        "und-Sgnw": "ase-Sgnw-US",
        "und-Shaw": "en-Shaw-GB",
        "und-Shrd": "sa-Shrd-IN",
        "und-Sidd": "sa-Sidd-IN",
        "und-Sind": "sd-Sind-IN",
        "und-Sinh": "si-Sinh-LK",
        "und-Sogd": "sog-Sogd-UZ",
        "und-Sogo": "sog-Sogo-UZ",
        "und-Sora": "srb-Sora-IN",
        "und-Soyo": "cmg-Soyo-MN",
        "und-Sund": "su-Sund-ID",
        "und-Sylo": "syl-Sylo-BD",
        "und-Syrc": "syr-Syrc-IQ",
        "und-TD": "fr-Latn-TD",
        "und-TF": "fr-Latn-TF",
        "und-TG": "fr-Latn-TG",
        "und-TH": "th-Thai-TH",
        "und-TJ": "tg-Cyrl-TJ",
        "und-TK": "tkl-Latn-TK",
        "und-TL": "pt-Latn-TL",
        "und-TM": "tk-Latn-TM",
        "und-TN": "ar-Arab-TN",
        "und-TO": "to-Latn-TO",
        "und-TR": "tr-Latn-TR",
        "und-TV": "tvl-Latn-TV",
        "und-TW": "zh-Hant-TW",
        "und-TZ": "sw-Latn-TZ",
        "und-Tagb": "tbw-Tagb-PH",
        "und-Takr": "doi-Takr-IN",
        "und-Tale": "tdd-Tale-CN",
        "und-Talu": "khb-Talu-CN",
        "und-Taml": "ta-Taml-IN",
        "und-Tang": "txg-Tang-CN",
        "und-Tavt": "blt-Tavt-VN",
        "und-Telu": "te-Telu-IN",
        "und-Tfng": "zgh-Tfng-MA",
        "und-Tglg": "fil-Tglg-PH",
        "und-Thaa": "dv-Thaa-MV",
        "und-Thai": "th-Thai-TH",
        "und-Thai-CN": "lcp-Thai-CN",
        "und-Thai-KH": "kdt-Thai-KH",
        "und-Thai-LA": "kdt-Thai-LA",
        "und-Tibt": "bo-Tibt-CN",
        "und-Tirh": "mai-Tirh-IN",
        "und-Tnsa": "nst-Tnsa-IN",
        "und-Toto": "txo-Toto-IN",
        "und-UA": "uk-Cyrl-UA",
        "und-UG": "sw-Latn-UG",
        "und-UY": "es-Latn-UY",
        "und-UZ": "uz-Latn-UZ",
        "und-Ugar": "uga-Ugar-SY",
        "und-VA": "it-Latn-VA",
        "und-VE": "es-Latn-VE",
        "und-VN": "vi-Latn-VN",
        "und-VU": "bi-Latn-VU",
        "und-Vaii": "vai-Vaii-LR",
        "und-Vith": "sq-Vith-AL",
        "und-WF": "fr-Latn-WF",
        "und-WS": "sm-Latn-WS",
        "und-Wara": "hoc-Wara-IN",
        "und-Wcho": "nnp-Wcho-IN",
        "und-XK": "sq-Latn-XK",
        "und-Xpeo": "peo-Xpeo-IR",
        "und-Xsux": "akk-Xsux-IQ",
        "und-YE": "ar-Arab-YE",
        "und-YT": "fr-Latn-YT",
        "und-Yezi": "ku-Yezi-GE",
        "und-Yiii": "ii-Yiii-CN",
        "und-ZW": "sn-Latn-ZW",
        "und-Zanb": "cmg-Zanb-MN",
        une: "une-Latn-NG",
        ung: "ung-Latn-AU",
        uni: "uni-Latn-PG",
        unk: "unk-Latn-BR",
        unm: "unm-Latn-US",
        unn: "unn-Latn-AU",
        unr: "unr-Beng-IN",
        "unr-Deva": "unr-Deva-NP",
        "unr-NP": "unr-Deva-NP",
        unu: "unu-Latn-PG",
        unx: "unx-Beng-IN",
        unz: "unz-Latn-ID",
        uok: "uok-Latn-ZZ",
        uon: "uon-Latn-TW",
        upi: "upi-Latn-PG",
        upv: "upv-Latn-VU",
        ur: "ur-Arab-PK",
        ura: "ura-Latn-PE",
        urb: "urb-Latn-BR",
        urc: "urc-Latn-AU",
        ure: "ure-Latn-BO",
        urf: "urf-Latn-AU",
        urg: "urg-Latn-PG",
        urh: "urh-Latn-NG",
        uri: "uri-Latn-ZZ",
        urk: "urk-Thai-TH",
        urm: "urm-Latn-PG",
        urn: "urn-Latn-ID",
        uro: "uro-Latn-PG",
        urp: "urp-Latn-BR",
        urr: "urr-Latn-VU",
        urt: "urt-Latn-ZZ",
        uru: "uru-Latn-BR",
        urv: "urv-Latn-PG",
        urw: "urw-Latn-ZZ",
        urx: "urx-Latn-PG",
        ury: "ury-Latn-ID",
        urz: "urz-Latn-BR",
        usa: "usa-Latn-ZZ",
        ush: "ush-Arab-PK",
        usi: "usi-Latn-BD",
        "usi-Beng": "usi-Beng-BD",
        usk: "usk-Latn-CM",
        usp: "usp-Latn-GT",
        uss: "uss-Latn-NG",
        usu: "usu-Latn-PG",
        uta: "uta-Latn-NG",
        ute: "ute-Latn-US",
        uth: "uth-Latn-ZZ",
        utp: "utp-Latn-SB",
        utr: "utr-Latn-ZZ",
        utu: "utu-Latn-PG",
        uum: "uum-Grek-GE",
        "uum-Cyrl": "uum-Cyrl-GE",
        uur: "uur-Latn-VU",
        uve: "uve-Latn-NC",
        uvh: "uvh-Latn-ZZ",
        uvl: "uvl-Latn-ZZ",
        uwa: "uwa-Latn-AU",
        uya: "uya-Latn-NG",
        uz: "uz-Latn-UZ",
        "uz-AF": "uz-Arab-AF",
        "uz-Arab": "uz-Arab-AF",
        "uz-CN": "uz-Cyrl-CN",
        uzs: "uzs-Arab-AF",
        vaa: "vaa-Taml-IN",
        vae: "vae-Latn-CF",
        vaf: "vaf-Arab-IR",
        vag: "vag-Latn-ZZ",
        vah: "vah-Deva-IN",
        vai: "vai-Vaii-LR",
        vaj: "vaj-Latn-NA",
        val: "val-Latn-PG",
        vam: "vam-Latn-PG",
        van: "van-Latn-ZZ",
        vao: "vao-Latn-VU",
        vap: "vap-Latn-IN",
        var: "var-Latn-MX",
        vas: "vas-Deva-IN",
        "vas-Gujr": "vas-Gujr-IN",
        vau: "vau-Latn-CD",
        vav: "vav-Deva-IN",
        "vav-Gujr": "vav-Gujr-IN",
        vay: "vay-Deva-NP",
        vbb: "vbb-Latn-ID",
        vbk: "vbk-Latn-PH",
        ve: "ve-Latn-ZA",
        vec: "vec-Latn-IT",
        vem: "vem-Latn-NG",
        veo: "veo-Latn-US",
        vep: "vep-Latn-RU",
        ver: "ver-Latn-NG",
        vgr: "vgr-Arab-PK",
        vi: "vi-Latn-VN",
        vic: "vic-Latn-SX",
        vid: "vid-Latn-TZ",
        vif: "vif-Latn-CG",
        vig: "vig-Latn-BF",
        vil: "vil-Latn-AR",
        vin: "vin-Latn-TZ",
        vit: "vit-Latn-NG",
        viv: "viv-Latn-ZZ",
        vka: "vka-Latn-AU",
        vkj: "vkj-Latn-TD",
        vkk: "vkk-Latn-ID",
        vkl: "vkl-Latn-ID",
        vkm: "vkm-Latn-BR",
        vkn: "vkn-Latn-NG",
        vko: "vko-Latn-ID",
        vkp: "vkp-Latn-IN",
        "vkp-Deva": "vkp-Deva-IN",
        vkt: "vkt-Latn-ID",
        vku: "vku-Latn-AU",
        vkz: "vkz-Latn-NG",
        vlp: "vlp-Latn-VU",
        vls: "vls-Latn-BE",
        vma: "vma-Latn-AU",
        vmb: "vmb-Latn-AU",
        vmc: "vmc-Latn-MX",
        vmd: "vmd-Knda-IN",
        vme: "vme-Latn-ID",
        vmf: "vmf-Latn-DE",
        vmg: "vmg-Latn-PG",
        vmh: "vmh-Arab-IR",
        vmi: "vmi-Latn-AU",
        vmj: "vmj-Latn-MX",
        vmk: "vmk-Latn-MZ",
        vml: "vml-Latn-AU",
        vmm: "vmm-Latn-MX",
        vmp: "vmp-Latn-MX",
        vmq: "vmq-Latn-MX",
        vmr: "vmr-Latn-MZ",
        vms: "vms-Latn-ID",
        vmu: "vmu-Latn-AU",
        vmw: "vmw-Latn-MZ",
        vmx: "vmx-Latn-MX",
        vmy: "vmy-Latn-MX",
        vmz: "vmz-Latn-MX",
        vnk: "vnk-Latn-SB",
        vnm: "vnm-Latn-VU",
        vnp: "vnp-Latn-VU",
        vo: "vo-Latn-001",
        vor: "vor-Latn-NG",
        vot: "vot-Latn-RU",
        vra: "vra-Latn-VU",
        vro: "vro-Latn-EE",
        vrs: "vrs-Latn-SB",
        vrt: "vrt-Latn-VU",
        vto: "vto-Latn-ID",
        vum: "vum-Latn-GA",
        vun: "vun-Latn-TZ",
        vut: "vut-Latn-ZZ",
        vwa: "vwa-Latn-CN",
        "vwa-Mymr": "vwa-Mymr-CN",
        wa: "wa-Latn-BE",
        waa: "waa-Latn-US",
        wab: "wab-Latn-PG",
        wac: "wac-Latn-US",
        wad: "wad-Latn-ID",
        wae: "wae-Latn-CH",
        waf: "waf-Latn-BR",
        wag: "wag-Latn-PG",
        wah: "wah-Latn-ID",
        wai: "wai-Latn-ID",
        waj: "waj-Latn-ZZ",
        wal: "wal-Ethi-ET",
        wam: "wam-Latn-US",
        wan: "wan-Latn-ZZ",
        wap: "wap-Latn-GY",
        waq: "waq-Latn-AU",
        war: "war-Latn-PH",
        was: "was-Latn-US",
        wat: "wat-Latn-PG",
        wau: "wau-Latn-BR",
        wav: "wav-Latn-NG",
        waw: "waw-Latn-BR",
        wax: "wax-Latn-PG",
        way: "way-Latn-SR",
        waz: "waz-Latn-PG",
        wba: "wba-Latn-VE",
        wbb: "wbb-Latn-ID",
        wbe: "wbe-Latn-ID",
        wbf: "wbf-Latn-BF",
        wbh: "wbh-Latn-TZ",
        wbi: "wbi-Latn-TZ",
        wbj: "wbj-Latn-TZ",
        wbk: "wbk-Arab-AF",
        wbl: "wbl-Latn-PK",
        "wbl-Arab": "wbl-Arab-AF",
        "wbl-Cyrl": "wbl-Cyrl-TJ",
        wbm: "wbm-Latn-CN",
        wbp: "wbp-Latn-AU",
        wbq: "wbq-Telu-IN",
        wbr: "wbr-Deva-IN",
        wbt: "wbt-Latn-AU",
        wbv: "wbv-Latn-AU",
        wbw: "wbw-Latn-ID",
        wca: "wca-Latn-BR",
        wci: "wci-Latn-ZZ",
        wdd: "wdd-Latn-GA",
        wdg: "wdg-Latn-PG",
        wdj: "wdj-Latn-AU",
        wdk: "wdk-Latn-AU",
        wdt: "wdt-Latn-CA",
        wdu: "wdu-Latn-AU",
        wdy: "wdy-Latn-AU",
        wec: "wec-Latn-CI",
        wed: "wed-Latn-PG",
        weg: "weg-Latn-AU",
        weh: "weh-Latn-CM",
        wei: "wei-Latn-PG",
        wem: "wem-Latn-BJ",
        weo: "weo-Latn-ID",
        wep: "wep-Latn-DE",
        wer: "wer-Latn-ZZ",
        wes: "wes-Latn-CM",
        wet: "wet-Latn-ID",
        weu: "weu-Latn-MM",
        wew: "wew-Latn-ID",
        wfg: "wfg-Latn-ID",
        wga: "wga-Latn-AU",
        wgb: "wgb-Latn-PG",
        wgg: "wgg-Latn-AU",
        wgi: "wgi-Latn-ZZ",
        wgo: "wgo-Latn-ID",
        wgu: "wgu-Latn-AU",
        wgy: "wgy-Latn-AU",
        wha: "wha-Latn-ID",
        whg: "whg-Latn-ZZ",
        whk: "whk-Latn-ID",
        whu: "whu-Latn-ID",
        wib: "wib-Latn-ZZ",
        wic: "wic-Latn-US",
        wie: "wie-Latn-AU",
        wif: "wif-Latn-AU",
        wig: "wig-Latn-AU",
        wih: "wih-Latn-AU",
        wii: "wii-Latn-PG",
        wij: "wij-Latn-AU",
        wik: "wik-Latn-AU",
        wil: "wil-Latn-AU",
        wim: "wim-Latn-AU",
        win: "win-Latn-US",
        wir: "wir-Latn-BR",
        wiu: "wiu-Latn-ZZ",
        wiv: "wiv-Latn-ZZ",
        wiy: "wiy-Latn-US",
        wja: "wja-Latn-ZZ",
        wji: "wji-Latn-ZZ",
        wka: "wka-Latn-TZ",
        wkd: "wkd-Latn-ID",
        wkr: "wkr-Latn-AU",
        wkw: "wkw-Latn-AU",
        wky: "wky-Latn-AU",
        wla: "wla-Latn-PG",
        wlg: "wlg-Latn-AU",
        wlh: "wlh-Latn-TL",
        wli: "wli-Latn-ID",
        wlm: "wlm-Latn-GB",
        wlo: "wlo-Arab-ID",
        wlr: "wlr-Latn-VU",
        wls: "wls-Latn-WF",
        wlu: "wlu-Latn-AU",
        wlv: "wlv-Latn-AR",
        wlw: "wlw-Latn-ID",
        wlx: "wlx-Latn-GH",
        wma: "wma-Latn-NG",
        wmb: "wmb-Latn-AU",
        wmc: "wmc-Latn-PG",
        wmd: "wmd-Latn-BR",
        wme: "wme-Deva-NP",
        wmh: "wmh-Latn-TL",
        wmi: "wmi-Latn-AU",
        wmm: "wmm-Latn-ID",
        wmn: "wmn-Latn-NC",
        wmo: "wmo-Latn-ZZ",
        wms: "wms-Latn-ID",
        wmt: "wmt-Latn-AU",
        wmw: "wmw-Latn-MZ",
        "wmw-Arab": "wmw-Arab-MZ",
        wmx: "wmx-Latn-PG",
        wnb: "wnb-Latn-PG",
        wnc: "wnc-Latn-ZZ",
        wnd: "wnd-Latn-AU",
        wne: "wne-Arab-PK",
        wng: "wng-Latn-ID",
        wni: "wni-Arab-KM",
        wnk: "wnk-Latn-ID",
        wnm: "wnm-Latn-AU",
        wnn: "wnn-Latn-AU",
        wno: "wno-Latn-ID",
        wnp: "wnp-Latn-PG",
        wnu: "wnu-Latn-ZZ",
        wnw: "wnw-Latn-US",
        wny: "wny-Latn-AU",
        wo: "wo-Latn-SN",
        woa: "woa-Latn-AU",
        wob: "wob-Latn-ZZ",
        woc: "woc-Latn-PG",
        wod: "wod-Latn-ID",
        woe: "woe-Latn-FM",
        wof: "wof-Latn-GM",
        "wof-Arab": "wof-Arab-GM",
        wog: "wog-Latn-PG",
        woi: "woi-Latn-ID",
        wok: "wok-Latn-CM",
        wom: "wom-Latn-NG",
        won: "won-Latn-CD",
        woo: "woo-Latn-ID",
        wor: "wor-Latn-ID",
        wos: "wos-Latn-ZZ",
        wow: "wow-Latn-ID",
        wpc: "wpc-Latn-VE",
        wrb: "wrb-Latn-AU",
        wrg: "wrg-Latn-AU",
        wrh: "wrh-Latn-AU",
        wri: "wri-Latn-AU",
        wrk: "wrk-Latn-AU",
        wrl: "wrl-Latn-AU",
        wrm: "wrm-Latn-AU",
        wro: "wro-Latn-AU",
        wrp: "wrp-Latn-ID",
        wrr: "wrr-Latn-AU",
        wrs: "wrs-Latn-ZZ",
        wru: "wru-Latn-ID",
        wrv: "wrv-Latn-PG",
        wrw: "wrw-Latn-AU",
        wrx: "wrx-Latn-ID",
        wrz: "wrz-Latn-AU",
        wsa: "wsa-Latn-ID",
        wsg: "wsg-Gong-IN",
        wsi: "wsi-Latn-VU",
        wsk: "wsk-Latn-ZZ",
        wsr: "wsr-Latn-PG",
        wss: "wss-Latn-GH",
        wsu: "wsu-Latn-BR",
        wsv: "wsv-Arab-AF",
        wtf: "wtf-Latn-PG",
        wth: "wth-Latn-AU",
        wti: "wti-Latn-ET",
        wtk: "wtk-Latn-PG",
        wtm: "wtm-Deva-IN",
        wtw: "wtw-Latn-ID",
        "wtw-Bugi": "wtw-Bugi-ID",
        wua: "wua-Latn-AU",
        wub: "wub-Latn-AU",
        wud: "wud-Latn-TG",
        wul: "wul-Latn-ID",
        wum: "wum-Latn-GA",
        wun: "wun-Latn-TZ",
        wur: "wur-Latn-AU",
        wut: "wut-Latn-PG",
        wuu: "wuu-Hans-CN",
        wuv: "wuv-Latn-ZZ",
        wux: "wux-Latn-AU",
        wuy: "wuy-Latn-ID",
        wwa: "wwa-Latn-ZZ",
        wwb: "wwb-Latn-AU",
        wwo: "wwo-Latn-VU",
        wwr: "wwr-Latn-AU",
        www: "www-Latn-CM",
        wxw: "wxw-Latn-AU",
        wyb: "wyb-Latn-AU",
        wyi: "wyi-Latn-AU",
        wym: "wym-Latn-PL",
        wyn: "wyn-Latn-US",
        wyr: "wyr-Latn-BR",
        wyy: "wyy-Latn-FJ",
        xaa: "xaa-Latn-ES",
        xab: "xab-Latn-NG",
        xai: "xai-Latn-BR",
        xaj: "xaj-Latn-BR",
        xak: "xak-Latn-VE",
        xal: "xal-Cyrl-RU",
        xam: "xam-Latn-ZA",
        xan: "xan-Ethi-ET",
        xao: "xao-Latn-VN",
        xar: "xar-Latn-PG",
        xas: "xas-Cyrl-RU",
        xat: "xat-Latn-BR",
        xau: "xau-Latn-ID",
        xav: "xav-Latn-BR",
        xaw: "xaw-Latn-US",
        xay: "xay-Latn-ID",
        xbb: "xbb-Latn-AU",
        xbd: "xbd-Latn-AU",
        xbe: "xbe-Latn-AU",
        xbg: "xbg-Latn-AU",
        xbi: "xbi-Latn-ZZ",
        xbj: "xbj-Latn-AU",
        xbm: "xbm-Latn-FR",
        xbn: "xbn-Latn-MY",
        xbp: "xbp-Latn-AU",
        xbr: "xbr-Latn-ID",
        xbw: "xbw-Latn-BR",
        xby: "xby-Latn-AU",
        xch: "xch-Latn-US",
        xco: "xco-Chrs-UZ",
        xcr: "xcr-Cari-TR",
        xda: "xda-Latn-AU",
        xdk: "xdk-Latn-AU",
        xdo: "xdo-Latn-AO",
        xdq: "xdq-Cyrl-RU",
        xdy: "xdy-Latn-ID",
        xed: "xed-Latn-CM",
        xeg: "xeg-Latn-ZA",
        xem: "xem-Latn-ID",
        xer: "xer-Latn-BR",
        xes: "xes-Latn-ZZ",
        xet: "xet-Latn-BR",
        xeu: "xeu-Latn-PG",
        xgb: "xgb-Latn-CI",
        xgd: "xgd-Latn-AU",
        xgg: "xgg-Latn-AU",
        xgi: "xgi-Latn-AU",
        xgm: "xgm-Latn-AU",
        xgu: "xgu-Latn-AU",
        xgw: "xgw-Latn-AU",
        xh: "xh-Latn-ZA",
        xhe: "xhe-Arab-PK",
        xhm: "xhm-Khmr-KH",
        xhv: "xhv-Latn-VN",
        xii: "xii-Latn-ZA",
        xin: "xin-Latn-GT",
        xir: "xir-Latn-BR",
        xis: "xis-Orya-IN",
        xiy: "xiy-Latn-BR",
        xjb: "xjb-Latn-AU",
        xjt: "xjt-Latn-AU",
        xka: "xka-Arab-PK",
        xkb: "xkb-Latn-BJ",
        xkc: "xkc-Arab-IR",
        xkd: "xkd-Latn-ID",
        xke: "xke-Latn-ID",
        xkg: "xkg-Latn-ML",
        xkj: "xkj-Arab-IR",
        xkl: "xkl-Latn-ID",
        xkn: "xkn-Latn-ID",
        xkp: "xkp-Arab-IR",
        xkq: "xkq-Latn-ID",
        xkr: "xkr-Latn-BR",
        xks: "xks-Latn-ID",
        xkt: "xkt-Latn-GH",
        xku: "xku-Latn-CG",
        xkv: "xkv-Latn-BW",
        xkw: "xkw-Latn-ID",
        xkx: "xkx-Latn-PG",
        xky: "xky-Latn-MY",
        xkz: "xkz-Latn-BT",
        xla: "xla-Latn-ZZ",
        xlc: "xlc-Lyci-TR",
        xld: "xld-Lydi-TR",
        xly: "xly-Elym-IR",
        xma: "xma-Latn-SO",
        xmb: "xmb-Latn-CM",
        xmc: "xmc-Latn-MZ",
        xmd: "xmd-Latn-CM",
        xmf: "xmf-Geor-GE",
        xmg: "xmg-Latn-CM",
        xmh: "xmh-Latn-AU",
        xmj: "xmj-Latn-CM",
        xmm: "xmm-Latn-ID",
        xmn: "xmn-Mani-CN",
        xmo: "xmo-Latn-BR",
        xmp: "xmp-Latn-AU",
        xmq: "xmq-Latn-AU",
        xmr: "xmr-Merc-SD",
        xmt: "xmt-Latn-ID",
        xmu: "xmu-Latn-AU",
        xmv: "xmv-Latn-MG",
        xmw: "xmw-Latn-MG",
        xmx: "xmx-Latn-ID",
        xmy: "xmy-Latn-AU",
        xmz: "xmz-Latn-ID",
        xna: "xna-Narb-SA",
        xnb: "xnb-Latn-TW",
        xni: "xni-Latn-AU",
        xnj: "xnj-Latn-TZ",
        xnk: "xnk-Latn-AU",
        xnm: "xnm-Latn-AU",
        xnn: "xnn-Latn-PH",
        xnq: "xnq-Latn-MZ",
        xnr: "xnr-Deva-IN",
        xnt: "xnt-Latn-US",
        xnu: "xnu-Latn-AU",
        xny: "xny-Latn-AU",
        xnz: "xnz-Latn-EG",
        "xnz-Arab": "xnz-Arab-EG",
        xoc: "xoc-Latn-NG",
        xod: "xod-Latn-ID",
        xog: "xog-Latn-UG",
        xoi: "xoi-Latn-PG",
        xok: "xok-Latn-BR",
        xom: "xom-Latn-SD",
        "xom-Ethi": "xom-Ethi-ET",
        xon: "xon-Latn-ZZ",
        xoo: "xoo-Latn-BR",
        xop: "xop-Latn-PG",
        xor: "xor-Latn-BR",
        xow: "xow-Latn-PG",
        xpa: "xpa-Latn-AU",
        xpb: "xpb-Latn-AU",
        xpd: "xpd-Latn-AU",
        xpf: "xpf-Latn-AU",
        xpg: "xpg-Grek-TR",
        xph: "xph-Latn-AU",
        xpi: "xpi-Ogam-GB",
        xpj: "xpj-Latn-AU",
        xpk: "xpk-Latn-BR",
        xpl: "xpl-Latn-AU",
        xpm: "xpm-Cyrl-RU",
        xpn: "xpn-Latn-BR",
        xpo: "xpo-Latn-MX",
        xpq: "xpq-Latn-US",
        xpr: "xpr-Prti-IR",
        xpt: "xpt-Latn-AU",
        xpv: "xpv-Latn-AU",
        xpw: "xpw-Latn-AU",
        xpx: "xpx-Latn-AU",
        xpz: "xpz-Latn-AU",
        xra: "xra-Latn-BR",
        xrb: "xrb-Latn-ZZ",
        xrd: "xrd-Latn-AU",
        xre: "xre-Latn-BR",
        xrg: "xrg-Latn-AU",
        xri: "xri-Latn-BR",
        xrm: "xrm-Cyrl-RU",
        xrn: "xrn-Cyrl-RU",
        xrr: "xrr-Latn-IT",
        xru: "xru-Latn-AU",
        xrw: "xrw-Latn-PG",
        xsa: "xsa-Sarb-YE",
        xsb: "xsb-Latn-PH",
        xse: "xse-Latn-ID",
        xsh: "xsh-Latn-NG",
        xsi: "xsi-Latn-ZZ",
        xsm: "xsm-Latn-ZZ",
        xsn: "xsn-Latn-NG",
        xsp: "xsp-Latn-PG",
        xsq: "xsq-Latn-MZ",
        xsr: "xsr-Deva-NP",
        xss: "xss-Cyrl-RU",
        xsu: "xsu-Latn-VE",
        xsy: "xsy-Latn-TW",
        xta: "xta-Latn-MX",
        xtb: "xtb-Latn-MX",
        xtc: "xtc-Latn-SD",
        xtd: "xtd-Latn-MX",
        xte: "xte-Latn-ID",
        xth: "xth-Latn-AU",
        xti: "xti-Latn-MX",
        xtj: "xtj-Latn-MX",
        xtl: "xtl-Latn-MX",
        xtm: "xtm-Latn-MX",
        xtn: "xtn-Latn-MX",
        xtp: "xtp-Latn-MX",
        xts: "xts-Latn-MX",
        xtt: "xtt-Latn-MX",
        xtu: "xtu-Latn-MX",
        xtv: "xtv-Latn-AU",
        xtw: "xtw-Latn-BR",
        xty: "xty-Latn-MX",
        xub: "xub-Taml-IN",
        "xub-Knda": "xub-Knda-IN",
        "xub-Mlym": "xub-Mlym-IN",
        xud: "xud-Latn-AU",
        xuj: "xuj-Taml-IN",
        xul: "xul-Latn-AU",
        xum: "xum-Latn-IT",
        "xum-Ital": "xum-Ital-IT",
        xun: "xun-Latn-AU",
        xuo: "xuo-Latn-TD",
        xut: "xut-Latn-AU",
        xuu: "xuu-Latn-NA",
        xve: "xve-Ital-IT",
        xvi: "xvi-Arab-AF",
        xvn: "xvn-Latn-ES",
        xvo: "xvo-Latn-IT",
        xvs: "xvs-Latn-IT",
        xwa: "xwa-Latn-BR",
        xwd: "xwd-Latn-AU",
        xwe: "xwe-Latn-ZZ",
        xwj: "xwj-Latn-AU",
        xwk: "xwk-Latn-AU",
        xwl: "xwl-Latn-BJ",
        xwo: "xwo-Cyrl-RU",
        xwr: "xwr-Latn-ID",
        xwt: "xwt-Latn-AU",
        xww: "xww-Latn-AU",
        xxb: "xxb-Latn-GH",
        xxk: "xxk-Latn-ID",
        xxm: "xxm-Latn-AU",
        xxr: "xxr-Latn-BR",
        xxt: "xxt-Latn-ID",
        xya: "xya-Latn-AU",
        xyb: "xyb-Latn-AU",
        xyj: "xyj-Latn-AU",
        xyk: "xyk-Latn-AU",
        xyl: "xyl-Latn-BR",
        xyt: "xyt-Latn-AU",
        xyy: "xyy-Latn-AU",
        xzh: "xzh-Marc-CN",
        xzp: "xzp-Latn-MX",
        yaa: "yaa-Latn-PE",
        yab: "yab-Latn-BR",
        yac: "yac-Latn-ID",
        yad: "yad-Latn-PE",
        yae: "yae-Latn-VE",
        yaf: "yaf-Latn-CD",
        yag: "yag-Latn-CL",
        yai: "yai-Cyrl-TJ",
        yaj: "yaj-Latn-CF",
        yak: "yak-Latn-US",
        yal: "yal-Latn-GN",
        "yal-Arab": "yal-Arab-GN",
        yam: "yam-Latn-ZZ",
        yan: "yan-Latn-NI",
        yao: "yao-Latn-MZ",
        yap: "yap-Latn-FM",
        yaq: "yaq-Latn-MX",
        yar: "yar-Latn-VE",
        yas: "yas-Latn-ZZ",
        yat: "yat-Latn-ZZ",
        yau: "yau-Latn-VE",
        yav: "yav-Latn-CM",
        yaw: "yaw-Latn-BR",
        yax: "yax-Latn-AO",
        yay: "yay-Latn-ZZ",
        yaz: "yaz-Latn-ZZ",
        yba: "yba-Latn-ZZ",
        ybb: "ybb-Latn-CM",
        ybe: "ybe-Latn-CN",
        "ybe-Ougr": "ybe-Ougr-CN",
        ybh: "ybh-Deva-NP",
        ybi: "ybi-Deva-NP",
        ybj: "ybj-Latn-NG",
        ybl: "ybl-Latn-NG",
        ybm: "ybm-Latn-PG",
        ybn: "ybn-Latn-BR",
        ybo: "ybo-Latn-PG",
        ybx: "ybx-Latn-PG",
        yby: "yby-Latn-ZZ",
        ycl: "ycl-Latn-CN",
        ycn: "ycn-Latn-CO",
        yda: "yda-Latn-AU",
        yde: "yde-Latn-PG",
        ydg: "ydg-Arab-PK",
        ydk: "ydk-Latn-PG",
        yea: "yea-Mlym-IN",
        "yea-Knda": "yea-Knda-IN",
        yec: "yec-Latn-DE",
        yee: "yee-Latn-PG",
        yei: "yei-Latn-CM",
        yej: "yej-Grek-IL",
        yel: "yel-Latn-CD",
        yer: "yer-Latn-ZZ",
        yes: "yes-Latn-NG",
        yet: "yet-Latn-ID",
        yeu: "yeu-Telu-IN",
        yev: "yev-Latn-PG",
        yey: "yey-Latn-BW",
        yga: "yga-Latn-AU",
        ygi: "ygi-Latn-AU",
        ygl: "ygl-Latn-PG",
        ygm: "ygm-Latn-PG",
        ygp: "ygp-Plrd-CN",
        ygr: "ygr-Latn-ZZ",
        ygu: "ygu-Latn-AU",
        ygw: "ygw-Latn-ZZ",
        yhd: "yhd-Hebr-IL",
        yi: "yi-Hebr-001",
        yia: "yia-Latn-AU",
        yig: "yig-Yiii-CN",
        yih: "yih-Hebr-DE",
        yii: "yii-Latn-AU",
        yij: "yij-Latn-AU",
        yil: "yil-Latn-AU",
        yim: "yim-Latn-IN",
        yir: "yir-Latn-ID",
        yis: "yis-Latn-PG",
        yiv: "yiv-Yiii-CN",
        yka: "yka-Latn-PH",
        "yka-Arab": "yka-Arab-PH",
        ykg: "ykg-Cyrl-RU",
        yki: "yki-Latn-ID",
        ykk: "ykk-Latn-PG",
        ykm: "ykm-Latn-PG",
        yko: "yko-Latn-ZZ",
        ykr: "ykr-Latn-PG",
        yky: "yky-Latn-CF",
        yla: "yla-Latn-PG",
        ylb: "ylb-Latn-PG",
        yle: "yle-Latn-ZZ",
        ylg: "ylg-Latn-ZZ",
        yli: "yli-Latn-ID",
        yll: "yll-Latn-ZZ",
        ylr: "ylr-Latn-AU",
        ylu: "ylu-Latn-PG",
        yly: "yly-Latn-NC",
        ymb: "ymb-Latn-PG",
        yme: "yme-Latn-PE",
        ymg: "ymg-Latn-CD",
        ymk: "ymk-Latn-MZ",
        "ymk-Arab": "ymk-Arab-MZ",
        yml: "yml-Latn-ZZ",
        ymm: "ymm-Latn-SO",
        ymn: "ymn-Latn-ID",
        ymo: "ymo-Latn-PG",
        ymp: "ymp-Latn-PG",
        yna: "yna-Plrd-CN",
        ynd: "ynd-Latn-AU",
        yng: "yng-Latn-CD",
        ynk: "ynk-Cyrl-RU",
        ynl: "ynl-Latn-PG",
        ynq: "ynq-Latn-NG",
        yns: "yns-Latn-CD",
        ynu: "ynu-Latn-CO",
        yo: "yo-Latn-NG",
        yob: "yob-Latn-PG",
        yog: "yog-Latn-PH",
        yoi: "yoi-Jpan-JP",
        yok: "yok-Latn-US",
        yol: "yol-Latn-GB",
        yom: "yom-Latn-CD",
        yon: "yon-Latn-ZZ",
        yot: "yot-Latn-NG",
        yoy: "yoy-Thai-TH",
        yra: "yra-Latn-PG",
        yrb: "yrb-Latn-ZZ",
        yre: "yre-Latn-ZZ",
        yrk: "yrk-Cyrl-RU",
        yrl: "yrl-Latn-BR",
        yrm: "yrm-Latn-AU",
        yro: "yro-Latn-BR",
        yrs: "yrs-Latn-ID",
        yrw: "yrw-Latn-PG",
        yry: "yry-Latn-AU",
        ysd: "ysd-Yiii-CN",
        ysn: "ysn-Yiii-CN",
        ysp: "ysp-Yiii-CN",
        ysr: "ysr-Cyrl-RU",
        yss: "yss-Latn-ZZ",
        ysy: "ysy-Plrd-CN",
        ytw: "ytw-Latn-PG",
        yty: "yty-Latn-AU",
        yua: "yua-Latn-MX",
        yub: "yub-Latn-AU",
        yuc: "yuc-Latn-US",
        yud: "yud-Hebr-IL",
        yue: "yue-Hant-HK",
        "yue-CN": "yue-Hans-CN",
        "yue-Hans": "yue-Hans-CN",
        yuf: "yuf-Latn-US",
        yug: "yug-Cyrl-RU",
        yui: "yui-Latn-CO",
        yuj: "yuj-Latn-ZZ",
        yul: "yul-Latn-CF",
        yum: "yum-Latn-US",
        yun: "yun-Latn-NG",
        yup: "yup-Latn-CO",
        yuq: "yuq-Latn-BO",
        yur: "yur-Latn-US",
        yut: "yut-Latn-ZZ",
        yuw: "yuw-Latn-ZZ",
        yux: "yux-Cyrl-RU",
        yuz: "yuz-Latn-BO",
        yva: "yva-Latn-ID",
        yvt: "yvt-Latn-VE",
        ywa: "ywa-Latn-PG",
        ywg: "ywg-Latn-AU",
        ywn: "ywn-Latn-BR",
        ywq: "ywq-Plrd-CN",
        "ywq-Yiii": "ywq-Yiii-CN",
        ywr: "ywr-Latn-AU",
        ywu: "ywu-Plrd-CN",
        "ywu-Yiii": "ywu-Yiii-CN",
        yww: "yww-Latn-AU",
        yxa: "yxa-Latn-AU",
        yxg: "yxg-Latn-AU",
        yxl: "yxl-Latn-AU",
        yxm: "yxm-Latn-AU",
        yxu: "yxu-Latn-AU",
        yxy: "yxy-Latn-AU",
        yyr: "yyr-Latn-AU",
        yyu: "yyu-Latn-PG",
        za: "za-Latn-CN",
        zaa: "zaa-Latn-MX",
        zab: "zab-Latn-MX",
        zac: "zac-Latn-MX",
        zad: "zad-Latn-MX",
        zae: "zae-Latn-MX",
        zaf: "zaf-Latn-MX",
        zag: "zag-Latn-SD",
        zah: "zah-Latn-NG",
        zaj: "zaj-Latn-TZ",
        zak: "zak-Latn-TZ",
        zam: "zam-Latn-MX",
        zao: "zao-Latn-MX",
        zap: "zap-Latn-MX",
        zaq: "zaq-Latn-MX",
        zar: "zar-Latn-MX",
        zas: "zas-Latn-MX",
        zat: "zat-Latn-MX",
        zau: "zau-Tibt-IN",
        "zau-Arab": "zau-Arab-IN",
        zav: "zav-Latn-MX",
        zaw: "zaw-Latn-MX",
        zax: "zax-Latn-MX",
        zay: "zay-Latn-ET",
        "zay-Ethi": "zay-Ethi-ET",
        zaz: "zaz-Latn-NG",
        zba: "zba-Arab-001",
        zbc: "zbc-Latn-MY",
        zbe: "zbe-Latn-MY",
        zbt: "zbt-Latn-ID",
        zbu: "zbu-Latn-NG",
        zbw: "zbw-Latn-MY",
        zca: "zca-Latn-MX",
        zch: "zch-Hani-CN",
        zdj: "zdj-Arab-KM",
        zea: "zea-Latn-NL",
        zeg: "zeg-Latn-PG",
        zeh: "zeh-Hani-CN",
        zen: "zen-Tfng-MR",
        "zen-Arab": "zen-Arab-MR",
        zga: "zga-Latn-TZ",
        zgb: "zgb-Hani-CN",
        zgh: "zgh-Tfng-MA",
        zgm: "zgm-Hani-CN",
        zgn: "zgn-Hani-CN",
        zgr: "zgr-Latn-PG",
        zh: "zh-Hans-CN",
        "zh-AU": "zh-Hant-AU",
        "zh-BN": "zh-Hant-BN",
        "zh-Bopo": "zh-Bopo-TW",
        "zh-GB": "zh-Hant-GB",
        "zh-GF": "zh-Hant-GF",
        "zh-HK": "zh-Hant-HK",
        "zh-Hanb": "zh-Hanb-TW",
        "zh-Hant": "zh-Hant-TW",
        "zh-ID": "zh-Hant-ID",
        "zh-MO": "zh-Hant-MO",
        "zh-PA": "zh-Hant-PA",
        "zh-PF": "zh-Hant-PF",
        "zh-PH": "zh-Hant-PH",
        "zh-SR": "zh-Hant-SR",
        "zh-TH": "zh-Hant-TH",
        "zh-TW": "zh-Hant-TW",
        "zh-US": "zh-Hant-US",
        "zh-VN": "zh-Hant-VN",
        zhd: "zhd-Hani-CN",
        "zhd-Latn": "zhd-Latn-VN",
        zhi: "zhi-Latn-NG",
        zhn: "zhn-Latn-CN",
        "zhn-Hani": "zhn-Hani-CN",
        zhw: "zhw-Latn-CM",
        zhx: "zhx-Nshu-CN",
        zia: "zia-Latn-ZZ",
        zik: "zik-Latn-PG",
        zil: "zil-Latn-GN",
        zim: "zim-Latn-TD",
        zin: "zin-Latn-TZ",
        ziw: "ziw-Latn-TZ",
        ziz: "ziz-Latn-NG",
        zka: "zka-Latn-ID",
        zkb: "zkb-Cyrl-RU",
        zkd: "zkd-Latn-MM",
        zko: "zko-Cyrl-RU",
        zkp: "zkp-Latn-BR",
        zkt: "zkt-Kits-CN",
        zku: "zku-Latn-AU",
        zkz: "zkz-Cyrl-RU",
        zla: "zla-Latn-CD",
        zlj: "zlj-Hani-CN",
        "zlj-Latn": "zlj-Latn-CN",
        zlm: "zlm-Latn-TG",
        zln: "zln-Hani-CN",
        zlq: "zlq-Hani-CN",
        zma: "zma-Latn-AU",
        zmb: "zmb-Latn-CD",
        zmc: "zmc-Latn-AU",
        zmd: "zmd-Latn-AU",
        zme: "zme-Latn-AU",
        zmf: "zmf-Latn-CD",
        zmg: "zmg-Latn-AU",
        zmh: "zmh-Latn-PG",
        zmi: "zmi-Latn-MY",
        zmj: "zmj-Latn-AU",
        zmk: "zmk-Latn-AU",
        zml: "zml-Latn-AU",
        zmm: "zmm-Latn-AU",
        zmn: "zmn-Latn-GA",
        zmo: "zmo-Latn-SD",
        zmp: "zmp-Latn-CD",
        zmq: "zmq-Latn-CD",
        zmr: "zmr-Latn-AU",
        zms: "zms-Latn-CD",
        zmt: "zmt-Latn-AU",
        zmu: "zmu-Latn-AU",
        zmv: "zmv-Latn-AU",
        zmw: "zmw-Latn-CD",
        zmx: "zmx-Latn-CG",
        zmy: "zmy-Latn-AU",
        zmz: "zmz-Latn-CD",
        zna: "zna-Latn-TD",
        zne: "zne-Latn-ZZ",
        zng: "zng-Latn-VN",
        znk: "znk-Latn-AU",
        zns: "zns-Latn-NG",
        zoc: "zoc-Latn-MX",
        zoh: "zoh-Latn-MX",
        zom: "zom-Latn-IN",
        zoo: "zoo-Latn-MX",
        zoq: "zoq-Latn-MX",
        zor: "zor-Latn-MX",
        zos: "zos-Latn-MX",
        zpa: "zpa-Latn-MX",
        zpb: "zpb-Latn-MX",
        zpc: "zpc-Latn-MX",
        zpd: "zpd-Latn-MX",
        zpe: "zpe-Latn-MX",
        zpf: "zpf-Latn-MX",
        zpg: "zpg-Latn-MX",
        zph: "zph-Latn-MX",
        zpi: "zpi-Latn-MX",
        zpj: "zpj-Latn-MX",
        zpk: "zpk-Latn-MX",
        zpl: "zpl-Latn-MX",
        zpm: "zpm-Latn-MX",
        zpn: "zpn-Latn-MX",
        zpo: "zpo-Latn-MX",
        zpp: "zpp-Latn-MX",
        zpq: "zpq-Latn-MX",
        zpr: "zpr-Latn-MX",
        zps: "zps-Latn-MX",
        zpt: "zpt-Latn-MX",
        zpu: "zpu-Latn-MX",
        zpv: "zpv-Latn-MX",
        zpw: "zpw-Latn-MX",
        zpx: "zpx-Latn-MX",
        zpy: "zpy-Latn-MX",
        zpz: "zpz-Latn-MX",
        zqe: "zqe-Hani-CN",
        "zqe-Latn": "zqe-Latn-CN",
        zrn: "zrn-Latn-TD",
        zro: "zro-Latn-EC",
        zrp: "zrp-Hebr-FR",
        zrs: "zrs-Latn-ID",
        zsa: "zsa-Latn-PG",
        zsr: "zsr-Latn-MX",
        zsu: "zsu-Latn-PG",
        zte: "zte-Latn-MX",
        ztg: "ztg-Latn-MX",
        ztl: "ztl-Latn-MX",
        ztm: "ztm-Latn-MX",
        ztn: "ztn-Latn-MX",
        ztp: "ztp-Latn-MX",
        ztq: "ztq-Latn-MX",
        zts: "zts-Latn-MX",
        ztt: "ztt-Latn-MX",
        ztu: "ztu-Latn-MX",
        ztx: "ztx-Latn-MX",
        zty: "zty-Latn-MX",
        zu: "zu-Latn-ZA",
        zua: "zua-Latn-NG",
        zuh: "zuh-Latn-PG",
        zum: "zum-Arab-OM",
        zun: "zun-Latn-US",
        zuy: "zuy-Latn-CM",
        zyg: "zyg-Hani-CN",
        zyj: "zyj-Latn-CN",
        "zyj-Hani": "zyj-Hani-CN",
        zyn: "zyn-Hani-CN",
        zyp: "zyp-Latn-MM",
        zza: "zza-Latn-TR",
        zzj: "zzj-Hani-CN"
      }
    },
    50894: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getSupportedUnits = void 0;
      var e = n(57387);
      t.getSupportedUnits = function(a) {
        return e.units.filter((function(t) {
          return function(a, t) {
            void 0 === t && (t = "en");
            try {
              return new Intl.NumberFormat(t, {
                style: "unit",
                unit: a
              }).resolvedOptions().unit === a
            } catch (a) {}
            return !1
          }(t, a)
        }))
      }
    },
    54722: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.weekData = void 0, t.weekData = {
        "001": {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AC: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AD: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        AE: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AF: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [4, 5]
        },
        AG: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AI: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AL: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AM: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AO: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AQ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AR: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AS: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AT: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        AU: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AW: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        AX: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        AZ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BA: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BB: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BD: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BE: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        BF: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BG: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        BH: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        BI: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BJ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BL: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BM: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BN: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BO: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BQ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BR: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BS: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BT: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BV: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BW: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BY: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        BZ: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CA: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CC: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CD: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CF: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CG: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CH: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        CI: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CK: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CL: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CM: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CN: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CO: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CP: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CQ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CR: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CU: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CV: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CW: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CX: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CY: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        CZ: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        DE: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        DG: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        DJ: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [6, 7]
        },
        DK: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        DM: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        DO: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        DZ: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        EA: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        EC: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        EE: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        EG: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        EH: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        ER: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        ES: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        ET: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        FI: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        FJ: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        FK: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        FM: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        FO: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        FR: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        GA: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GB: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        GD: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GE: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GF: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        GG: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        GH: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GI: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        GL: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GM: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GN: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GP: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        GQ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GR: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        GS: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GT: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GU: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GW: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        GY: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        HK: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        HM: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        HN: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        HR: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        HT: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        HU: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        IC: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        ID: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        IE: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        IL: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [5, 6]
        },
        IM: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        IN: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [7]
        },
        IO: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        IQ: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        IR: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5]
        },
        IS: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        IT: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        JE: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        JM: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        JO: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        JP: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        KE: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        KG: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        KH: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        KI: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        KM: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        KN: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        KP: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        KR: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        KW: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        KY: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        KZ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        LA: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        LB: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        LC: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        LI: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        LK: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        LR: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        LS: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        LT: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        LU: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        LV: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        LY: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        MA: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MC: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        MD: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        ME: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MF: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MG: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MH: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MK: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        ML: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MM: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MN: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MO: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MP: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MQ: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        MR: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MS: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MT: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MU: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MV: {
          firstDay: 5,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MW: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MX: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MY: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        MZ: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        NA: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        NC: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        NE: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        NF: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        NG: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        NI: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        NL: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        NO: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        NP: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        NR: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        NU: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        NZ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        OM: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        PA: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PE: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PF: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PG: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PH: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PK: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PL: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        PM: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PN: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PR: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PS: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PT: {
          firstDay: 7,
          minimalDays: 4,
          weekend: [6, 7]
        },
        PW: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        PY: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        QA: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        RE: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        RO: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        RS: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        RU: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        RW: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SA: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [5, 6]
        },
        SB: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SC: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SD: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        SE: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        SG: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SH: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SI: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SJ: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        SK: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        SL: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SM: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        SN: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SO: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SR: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SS: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        ST: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SV: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SX: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        SY: {
          firstDay: 6,
          minimalDays: 1,
          weekend: [5, 6]
        },
        SZ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TA: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TC: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TD: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TF: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TG: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TH: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TJ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TK: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TL: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TM: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TN: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TO: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TR: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TT: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TV: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TW: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        TZ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        UA: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        UG: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [7]
        },
        UM: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        US: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        UY: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        UZ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        VA: {
          firstDay: 1,
          minimalDays: 4,
          weekend: [6, 7]
        },
        VC: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        VE: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        VG: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        VI: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        VN: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        VU: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        WF: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        WS: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        XK: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        YE: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [5, 6]
        },
        YT: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        ZA: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        ZM: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        },
        ZW: {
          firstDay: 7,
          minimalDays: 1,
          weekend: [6, 7]
        },
        ZZ: {
          firstDay: 1,
          minimalDays: 1,
          weekend: [6, 7]
        }
      }
    },
    54902: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getSupportedCalendars = void 0;
      var e = n(77091);
      t.getSupportedCalendars = function(a) {
        return e.calendars.filter((function(t) {
          return function(a, t) {
            void 0 === t && (t = "en");
            try {
              var n = new Intl.DateTimeFormat("".concat(t, "-u-ca-").concat(a)).resolvedOptions().calendar;
              if ("gregory" !== a || "gregory" !== n) return !0
            } catch (a) {}
            return !1
          }(t, a)
        }))
      }
    },
    57387: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.units = void 0, t.units = ["degree", "acre", "hectare", "percent", "bit", "byte", "gigabit", "gigabyte", "kilobit", "kilobyte", "megabit", "megabyte", "petabyte", "terabit", "terabyte", "day", "hour", "millisecond", "minute", "month", "second", "week", "year", "centimeter", "foot", "inch", "kilometer", "meter", "mile-scandinavian", "mile", "millimeter", "yard", "gram", "kilogram", "ounce", "pound", "stone", "celsius", "fahrenheit", "fluid-ounce", "gallon", "liter", "milliliter"]
    },
    57410: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.parseUnicodeLocaleId = t.parseUnicodeLanguageId = t.isUnicodeVariantSubtag = t.isUnicodeScriptSubtag = t.isUnicodeRegionSubtag = t.isStructurallyValidLanguageTag = t.isUnicodeLanguageSubtag = t.SEPARATOR = void 0;
      var e = n(23514),
        r = /^[a-z0-9]{1,8}$/i,
        i = /^[a-z0-9]{2,8}$/i,
        L = /^[a-z0-9]{3,8}$/i,
        s = /^[a-z0-9][a-z]$/i,
        l = /^[a-z0-9]{3,8}$/i,
        o = /^[a-z]{4}$/i,
        u = /^[0-9a-svwyz]$/i,
        m = /^([a-z]{2}|[0-9]{3})$/i,
        d = /^([a-z0-9]{5,8}|[0-9][a-z0-9]{3})$/i,
        c = /^([a-z]{2,3}|[a-z]{5,8})$/i,
        g = /^[a-z][0-9]$/i;

      function b(a) {
        return c.test(a)
      }

      function h(a) {
        return m.test(a)
      }

      function k(a) {
        return o.test(a)
      }

      function y(a) {
        return d.test(a)
      }

      function f(a) {
        "string" == typeof a && (a = a.split(t.SEPARATOR));
        var n, e, r = a.shift();
        if (!r) throw new RangeError("Missing unicode_language_subtag");
        if ("root" === r) return {
          lang: "root",
          variants: []
        };
        if (!b(r)) throw new RangeError("Malformed unicode_language_subtag");
        a.length && k(a[0]) && (n = a.shift()), a.length && h(a[0]) && (e = a.shift());
        for (var i = {}; a.length && y(a[0]);) {
          var L = a.shift();
          if (L in i) throw new RangeError('Duplicate variant "'.concat(L, '"'));
          i[L] = 1
        }
        return {
          lang: r,
          script: n,
          region: e,
          variants: Object.keys(i)
        }
      }

      function p(a) {
        for (var t, n = []; a.length && (t = D(a));) n.push(t);
        if (n.length) return {
          type: "u",
          keywords: n,
          attributes: []
        };
        for (var e = []; a.length && L.test(a[0]);) e.push(a.shift());
        for (; a.length && (t = D(a));) n.push(t);
        if (n.length || e.length) return {
          type: "u",
          attributes: e,
          keywords: n
        };
        throw new RangeError("Malformed unicode_extension")
      }

      function D(a) {
        var n;
        if (s.test(a[0])) {
          n = a.shift();
          for (var e = []; a.length && l.test(a[0]);) e.push(a.shift());
          var r = "";
          return e.length && (r = e.join(t.SEPARATOR)), [n, r]
        }
      }

      function A(a) {
        var n;
        try {
          n = f(a)
        } catch (a) {}
        for (var e = []; a.length && g.test(a[0]);) {
          for (var r = a.shift(), i = []; a.length && L.test(a[0]);) i.push(a.shift());
          if (!i.length) throw new RangeError('Missing tvalue for tkey "'.concat(r, '"'));
          e.push([r, i.join(t.SEPARATOR)])
        }
        if (e.length) return {
          type: "t",
          fields: e,
          lang: n
        };
        throw new RangeError("Malformed transformed_extension")
      }

      function w(a) {
        for (var n = []; a.length && r.test(a[0]);) n.push(a.shift());
        if (n.length) return {
          type: "x",
          value: n.join(t.SEPARATOR)
        };
        throw new RangeError("Malformed private_use_extension")
      }

      function v(a) {
        for (var n = []; a.length && i.test(a[0]);) n.push(a.shift());
        return n.length ? n.join(t.SEPARATOR) : ""
      }
      t.SEPARATOR = "-", t.isUnicodeLanguageSubtag = b, t.isStructurallyValidLanguageTag = function(a) {
        try {
          f(a.split(t.SEPARATOR))
        } catch (a) {
          return !1
        }
        return !0
      }, t.isUnicodeRegionSubtag = h, t.isUnicodeScriptSubtag = k, t.isUnicodeVariantSubtag = y, t.parseUnicodeLanguageId = f, t.parseUnicodeLocaleId = function(a) {
        var n = a.split(t.SEPARATOR),
          r = f(n);
        return e.__assign({
          lang: r
        }, function(a) {
          if (!a.length) return {
            extensions: []
          };
          var t, n, e, r = [],
            i = {};
          do {
            var L = a.shift();
            switch (L) {
              case "u":
              case "U":
                if (t) throw new RangeError("There can only be 1 -u- extension");
                t = p(a), r.push(t);
                break;
              case "t":
              case "T":
                if (n) throw new RangeError("There can only be 1 -t- extension");
                n = A(a), r.push(n);
                break;
              case "x":
              case "X":
                if (e) throw new RangeError("There can only be 1 -x- extension");
                e = w(a), r.push(e);
                break;
              default:
                if (!u.test(L)) throw new RangeError("Malformed extension type");
                if (L in i) throw new RangeError("There can only be 1 -".concat(L, "- extension"));
                var s = {
                  type: L,
                  value: v(a)
                };
                i[s.type] = s, r.push(s)
            }
          } while (a.length);
          return {
            extensions: r
          }
        }(n))
      }
    },
    57733: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getSupportedNumberingSystems = void 0;
      var e = n(89232);
      t.getSupportedNumberingSystems = function(a) {
        return e.numberingSystemNames.filter((function(t) {
          return function(a, t) {
            void 0 === t && (t = "en");
            try {
              var n = new Intl.NumberFormat("".concat(t, "-u-nu-").concat(a));
              if (n.resolvedOptions().numberingSystem === a && "latn" === a || "123" !== n.format(123)) return !0
            } catch (a) {}
            return !1
          }(t, a)
        }))
      }
    },
    58289: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.numberingSystems = void 0, t.numberingSystems = {
        aa: ["latn"],
        "aa-DJ": ["latn"],
        "aa-ER": ["latn"],
        ab: ["latn"],
        af: ["latn"],
        "af-NA": ["latn"],
        agq: ["latn"],
        ak: ["latn"],
        am: ["latn", "ethi"],
        an: ["latn"],
        ann: ["latn"],
        apc: ["latn"],
        ar: ["arab"],
        "ar-AE": ["latn", "arab"],
        "ar-BH": ["arab"],
        "ar-DJ": ["arab"],
        "ar-DZ": ["latn", "arab"],
        "ar-EG": ["arab"],
        "ar-EH": ["latn", "arab"],
        "ar-ER": ["arab"],
        "ar-IL": ["arab"],
        "ar-IQ": ["arab"],
        "ar-JO": ["arab"],
        "ar-KM": ["arab"],
        "ar-KW": ["arab"],
        "ar-LB": ["arab"],
        "ar-LY": ["latn", "arab"],
        "ar-MA": ["latn", "arab"],
        "ar-MR": ["arab"],
        "ar-OM": ["arab"],
        "ar-PS": ["arab"],
        "ar-QA": ["arab"],
        "ar-SA": ["arab"],
        "ar-SD": ["arab"],
        "ar-SO": ["arab"],
        "ar-SS": ["arab"],
        "ar-SY": ["arab"],
        "ar-TD": ["arab"],
        "ar-TN": ["latn", "arab"],
        "ar-YE": ["arab"],
        arn: ["latn"],
        as: ["beng"],
        asa: ["latn"],
        ast: ["latn"],
        az: ["latn"],
        "az-Arab": ["arabext"],
        "az-Arab-IQ": ["arabext"],
        "az-Arab-TR": ["arabext"],
        "az-Cyrl": ["latn"],
        "az-Latn": ["latn"],
        ba: ["latn"],
        bal: ["latn"],
        "bal-Arab": ["latn"],
        "bal-Latn": ["latn"],
        bas: ["latn"],
        be: ["latn"],
        "be-tarask": ["latn"],
        bem: ["latn"],
        bez: ["latn"],
        bg: ["latn"],
        bgc: ["deva", "latn"],
        bgn: ["arabext"],
        "bgn-AE": ["arabext"],
        "bgn-AF": ["arabext"],
        "bgn-IR": ["arabext"],
        "bgn-OM": ["arabext"],
        bho: ["deva", "latn"],
        blt: ["latn"],
        bm: ["latn"],
        "bm-Nkoo": ["latn", "nkoo"],
        bn: ["beng"],
        "bn-IN": ["beng"],
        bo: ["latn", "tibt"],
        "bo-IN": ["latn", "tibt"],
        br: ["latn"],
        brx: ["latn", "deva"],
        bs: ["latn"],
        "bs-Cyrl": ["latn"],
        "bs-Latn": ["latn"],
        bss: ["latn"],
        byn: ["latn", "ethi"],
        ca: ["latn"],
        "ca-AD": ["latn"],
        "ca-ES-valencia": ["latn"],
        "ca-FR": ["latn"],
        "ca-IT": ["latn"],
        cad: ["latn"],
        cch: ["latn"],
        ccp: ["cakm"],
        "ccp-IN": ["cakm"],
        ce: ["latn"],
        ceb: ["latn"],
        cgg: ["latn"],
        cho: ["latn"],
        chr: ["latn"],
        cic: ["latn"],
        ckb: ["arab"],
        "ckb-IR": ["arab"],
        co: ["latn"],
        cs: ["latn"],
        cu: ["latn", "cyrl"],
        cv: ["latn"],
        cy: ["latn"],
        da: ["latn"],
        "da-GL": ["latn"],
        dav: ["latn"],
        de: ["latn"],
        "de-AT": ["latn"],
        "de-BE": ["latn"],
        "de-CH": ["latn"],
        "de-IT": ["latn"],
        "de-LI": ["latn"],
        "de-LU": ["latn"],
        dje: ["latn"],
        doi: ["latn", "deva"],
        dsb: ["latn"],
        dua: ["latn"],
        dv: ["latn", "arab"],
        dyo: ["latn"],
        dz: ["tibt"],
        ebu: ["latn"],
        ee: ["latn"],
        "ee-TG": ["latn"],
        el: ["latn", "grek"],
        "el-CY": ["latn", "grek"],
        "el-polyton": ["latn", "grek"],
        en: ["latn"],
        "en-001": ["latn"],
        "en-150": ["latn"],
        "en-AE": ["latn"],
        "en-AG": ["latn"],
        "en-AI": ["latn"],
        "en-AS": ["latn"],
        "en-AT": ["latn"],
        "en-AU": ["latn"],
        "en-BB": ["latn"],
        "en-BE": ["latn"],
        "en-BI": ["latn"],
        "en-BM": ["latn"],
        "en-BS": ["latn"],
        "en-BW": ["latn"],
        "en-BZ": ["latn"],
        "en-CA": ["latn"],
        "en-CC": ["latn"],
        "en-CH": ["latn"],
        "en-CK": ["latn"],
        "en-CM": ["latn"],
        "en-CX": ["latn"],
        "en-CY": ["latn"],
        "en-DE": ["latn"],
        "en-DG": ["latn"],
        "en-DK": ["latn"],
        "en-DM": ["latn"],
        "en-Dsrt": ["latn"],
        "en-ER": ["latn"],
        "en-FI": ["latn"],
        "en-FJ": ["latn"],
        "en-FK": ["latn"],
        "en-FM": ["latn"],
        "en-GB": ["latn"],
        "en-GD": ["latn"],
        "en-GG": ["latn"],
        "en-GH": ["latn"],
        "en-GI": ["latn"],
        "en-GM": ["latn"],
        "en-GU": ["latn"],
        "en-GY": ["latn"],
        "en-HK": ["latn"],
        "en-IE": ["latn"],
        "en-IL": ["latn"],
        "en-IM": ["latn"],
        "en-IN": ["latn"],
        "en-IO": ["latn"],
        "en-JE": ["latn"],
        "en-JM": ["latn"],
        "en-KE": ["latn"],
        "en-KI": ["latn"],
        "en-KN": ["latn"],
        "en-KY": ["latn"],
        "en-LC": ["latn"],
        "en-LR": ["latn"],
        "en-LS": ["latn"],
        "en-MG": ["latn"],
        "en-MH": ["latn"],
        "en-MO": ["latn"],
        "en-MP": ["latn"],
        "en-MS": ["latn"],
        "en-MT": ["latn"],
        "en-MU": ["latn"],
        "en-MV": ["latn"],
        "en-MW": ["latn"],
        "en-MY": ["latn"],
        "en-NA": ["latn"],
        "en-NF": ["latn"],
        "en-NG": ["latn"],
        "en-NL": ["latn"],
        "en-NR": ["latn"],
        "en-NU": ["latn"],
        "en-NZ": ["latn"],
        "en-PG": ["latn"],
        "en-PH": ["latn"],
        "en-PK": ["latn"],
        "en-PN": ["latn"],
        "en-PR": ["latn"],
        "en-PW": ["latn"],
        "en-RW": ["latn"],
        "en-SB": ["latn"],
        "en-SC": ["latn"],
        "en-SD": ["latn"],
        "en-SE": ["latn"],
        "en-SG": ["latn"],
        "en-SH": ["latn"],
        "en-SI": ["latn"],
        "en-SL": ["latn"],
        "en-SS": ["latn"],
        "en-SX": ["latn"],
        "en-SZ": ["latn"],
        "en-Shaw": ["latn"],
        "en-TC": ["latn"],
        "en-TK": ["latn"],
        "en-TO": ["latn"],
        "en-TT": ["latn"],
        "en-TV": ["latn"],
        "en-TZ": ["latn"],
        "en-UG": ["latn"],
        "en-UM": ["latn"],
        "en-VC": ["latn"],
        "en-VG": ["latn"],
        "en-VI": ["latn"],
        "en-VU": ["latn"],
        "en-WS": ["latn"],
        "en-ZA": ["latn"],
        "en-ZM": ["latn"],
        "en-ZW": ["latn"],
        eo: ["latn"],
        es: ["latn"],
        "es-419": ["latn"],
        "es-AR": ["latn"],
        "es-BO": ["latn"],
        "es-BR": ["latn"],
        "es-BZ": ["latn"],
        "es-CL": ["latn"],
        "es-CO": ["latn"],
        "es-CR": ["latn"],
        "es-CU": ["latn"],
        "es-DO": ["latn"],
        "es-EA": ["latn"],
        "es-EC": ["latn"],
        "es-GQ": ["latn"],
        "es-GT": ["latn"],
        "es-HN": ["latn"],
        "es-IC": ["latn"],
        "es-MX": ["latn"],
        "es-NI": ["latn"],
        "es-PA": ["latn"],
        "es-PE": ["latn"],
        "es-PH": ["latn"],
        "es-PR": ["latn"],
        "es-PY": ["latn"],
        "es-SV": ["latn"],
        "es-US": ["latn"],
        "es-UY": ["latn"],
        "es-VE": ["latn"],
        et: ["latn"],
        eu: ["latn"],
        ewo: ["latn"],
        fa: ["arabext"],
        "fa-AF": ["arabext"],
        ff: ["latn"],
        "ff-Adlm": ["adlm"],
        "ff-Adlm-BF": ["adlm"],
        "ff-Adlm-CM": ["adlm"],
        "ff-Adlm-GH": ["adlm"],
        "ff-Adlm-GM": ["adlm"],
        "ff-Adlm-GW": ["adlm"],
        "ff-Adlm-LR": ["adlm"],
        "ff-Adlm-MR": ["adlm"],
        "ff-Adlm-NE": ["adlm"],
        "ff-Adlm-NG": ["adlm"],
        "ff-Adlm-SL": ["adlm"],
        "ff-Adlm-SN": ["adlm"],
        "ff-Latn": ["latn"],
        "ff-Latn-BF": ["latn"],
        "ff-Latn-CM": ["latn"],
        "ff-Latn-GH": ["latn"],
        "ff-Latn-GM": ["latn"],
        "ff-Latn-GN": ["latn"],
        "ff-Latn-GW": ["latn"],
        "ff-Latn-LR": ["latn"],
        "ff-Latn-MR": ["latn"],
        "ff-Latn-NE": ["latn"],
        "ff-Latn-NG": ["latn"],
        "ff-Latn-SL": ["latn"],
        fi: ["latn"],
        fil: ["latn"],
        fo: ["latn"],
        "fo-DK": ["latn"],
        fr: ["latn"],
        "fr-BE": ["latn"],
        "fr-BF": ["latn"],
        "fr-BI": ["latn"],
        "fr-BJ": ["latn"],
        "fr-BL": ["latn"],
        "fr-CA": ["latn"],
        "fr-CD": ["latn"],
        "fr-CF": ["latn"],
        "fr-CG": ["latn"],
        "fr-CH": ["latn"],
        "fr-CI": ["latn"],
        "fr-CM": ["latn"],
        "fr-DJ": ["latn"],
        "fr-DZ": ["latn"],
        "fr-GA": ["latn"],
        "fr-GF": ["latn"],
        "fr-GN": ["latn"],
        "fr-GP": ["latn"],
        "fr-GQ": ["latn"],
        "fr-HT": ["latn"],
        "fr-KM": ["latn"],
        "fr-LU": ["latn"],
        "fr-MA": ["latn"],
        "fr-MC": ["latn"],
        "fr-MF": ["latn"],
        "fr-MG": ["latn"],
        "fr-ML": ["latn"],
        "fr-MQ": ["latn"],
        "fr-MR": ["latn"],
        "fr-MU": ["latn"],
        "fr-NC": ["latn"],
        "fr-NE": ["latn"],
        "fr-PF": ["latn"],
        "fr-PM": ["latn"],
        "fr-RE": ["latn"],
        "fr-RW": ["latn"],
        "fr-SC": ["latn"],
        "fr-SN": ["latn"],
        "fr-SY": ["latn"],
        "fr-TD": ["latn"],
        "fr-TG": ["latn"],
        "fr-TN": ["latn"],
        "fr-VU": ["latn"],
        "fr-WF": ["latn"],
        "fr-YT": ["latn"],
        frr: ["latn"],
        fur: ["latn"],
        fy: ["latn"],
        ga: ["latn"],
        "ga-GB": ["latn"],
        gaa: ["latn"],
        gd: ["latn"],
        gez: ["latn"],
        "gez-ER": ["latn"],
        gl: ["latn"],
        gn: ["latn"],
        gsw: ["latn"],
        "gsw-FR": ["latn"],
        "gsw-LI": ["latn"],
        gu: ["latn", "gujr"],
        guz: ["latn"],
        gv: ["latn"],
        ha: ["latn"],
        "ha-Arab": ["latn", "arab"],
        "ha-Arab-SD": ["latn", "arab"],
        "ha-GH": ["latn"],
        "ha-NE": ["latn"],
        haw: ["latn"],
        he: ["latn", "hebr"],
        hi: ["latn", "deva"],
        "hi-Latn": ["latn"],
        hnj: ["hmnp", "latn"],
        "hnj-Hmnp": ["hmnp", "latn"],
        hr: ["latn"],
        "hr-BA": ["latn"],
        hsb: ["latn"],
        hu: ["latn"],
        hy: ["latn", "armn"],
        ia: ["latn"],
        id: ["latn"],
        ig: ["latn"],
        ii: ["latn"],
        io: ["latn"],
        is: ["latn"],
        it: ["latn"],
        "it-CH": ["latn"],
        "it-SM": ["latn"],
        "it-VA": ["latn"],
        iu: ["latn"],
        "iu-Latn": ["latn"],
        ja: ["latn", "jpan", "jpanfin"],
        jbo: ["latn"],
        jgo: ["latn"],
        jmc: ["latn"],
        jv: ["latn", "java"],
        ka: ["latn", "geor"],
        kab: ["latn"],
        kaj: ["latn"],
        kam: ["latn"],
        kcg: ["latn"],
        kde: ["latn"],
        kea: ["latn"],
        ken: ["latn"],
        kgp: ["latn"],
        khq: ["latn"],
        ki: ["latn"],
        kk: ["latn"],
        kkj: ["latn"],
        kl: ["latn"],
        kln: ["latn"],
        km: ["latn", "khmr"],
        kn: ["latn", "knda"],
        ko: ["latn"],
        "ko-KP": ["latn"],
        kok: ["latn", "deva"],
        kpe: ["latn"],
        "kpe-GN": ["latn"],
        ks: ["arabext"],
        "ks-Arab": ["arabext"],
        "ks-Deva": ["latn"],
        ksb: ["latn"],
        ksf: ["latn"],
        ksh: ["latn"],
        ku: ["latn"],
        kw: ["latn"],
        ky: ["latn"],
        la: ["latn"],
        lag: ["latn"],
        lb: ["latn"],
        lg: ["latn"],
        lij: ["latn"],
        lkt: ["latn"],
        lmo: ["latn"],
        ln: ["latn"],
        "ln-AO": ["latn"],
        "ln-CF": ["latn"],
        "ln-CG": ["latn"],
        lo: ["latn", "laoo"],
        lrc: ["arabext"],
        "lrc-IQ": ["arabext"],
        lt: ["latn"],
        lu: ["latn"],
        luo: ["latn"],
        luy: ["latn"],
        lv: ["latn"],
        mai: ["latn", "deva"],
        mas: ["latn"],
        "mas-TZ": ["latn"],
        mdf: ["latn"],
        mer: ["latn"],
        mfe: ["latn"],
        mg: ["latn"],
        mgh: ["latn"],
        mgo: ["latn"],
        mi: ["latn"],
        mk: ["latn"],
        ml: ["latn", "mlym"],
        mn: ["latn"],
        "mn-Mong": ["latn", "mong"],
        "mn-Mong-MN": ["latn", "mong"],
        mni: ["beng", "latn"],
        "mni-Beng": ["beng", "latn"],
        "mni-Mtei": ["mtei", "latn"],
        moh: ["latn"],
        mr: ["deva"],
        ms: ["latn"],
        "ms-Arab": ["latn"],
        "ms-Arab-BN": ["latn"],
        "ms-BN": ["latn"],
        "ms-ID": ["latn"],
        "ms-SG": ["latn"],
        mt: ["latn"],
        mua: ["latn"],
        mus: ["latn"],
        my: ["mymr"],
        myv: ["latn"],
        mzn: ["arabext"],
        naq: ["latn"],
        nb: ["latn"],
        "nb-SJ": ["latn"],
        nd: ["latn"],
        nds: ["latn"],
        "nds-NL": ["latn"],
        ne: ["deva"],
        "ne-IN": ["deva"],
        nl: ["latn"],
        "nl-AW": ["latn"],
        "nl-BE": ["latn"],
        "nl-BQ": ["latn"],
        "nl-CW": ["latn"],
        "nl-SR": ["latn"],
        "nl-SX": ["latn"],
        nmg: ["latn"],
        nn: ["latn"],
        nnh: ["latn"],
        no: ["latn"],
        nqo: ["nkoo"],
        nr: ["latn"],
        nso: ["latn"],
        nus: ["latn"],
        nv: ["latn"],
        ny: ["latn"],
        nyn: ["latn"],
        oc: ["latn"],
        "oc-ES": ["latn"],
        om: ["latn", "ethi"],
        "om-KE": ["latn", "ethi"],
        or: ["latn", "orya"],
        os: ["latn"],
        "os-RU": ["latn"],
        osa: ["latn"],
        pa: ["latn", "guru"],
        "pa-Arab": ["arabext"],
        "pa-Guru": ["latn", "guru"],
        pap: ["latn"],
        "pap-AW": ["latn"],
        pcm: ["latn"],
        pis: ["latn"],
        pl: ["latn"],
        prg: ["latn"],
        ps: ["arabext"],
        "ps-PK": ["arabext"],
        pt: ["latn"],
        "pt-AO": ["latn"],
        "pt-CH": ["latn"],
        "pt-CV": ["latn"],
        "pt-GQ": ["latn"],
        "pt-GW": ["latn"],
        "pt-LU": ["latn"],
        "pt-MO": ["latn"],
        "pt-MZ": ["latn"],
        "pt-PT": ["latn"],
        "pt-ST": ["latn"],
        "pt-TL": ["latn"],
        qu: ["latn"],
        "qu-BO": ["latn"],
        "qu-EC": ["latn"],
        quc: ["latn"],
        raj: ["deva", "latn"],
        rhg: ["latn"],
        "rhg-Rohg": ["latn"],
        "rhg-Rohg-BD": ["latn"],
        rif: ["latn"],
        rm: ["latn"],
        rn: ["latn"],
        ro: ["latn"],
        "ro-MD": ["latn"],
        rof: ["latn"],
        ru: ["latn"],
        "ru-BY": ["latn"],
        "ru-KG": ["latn"],
        "ru-KZ": ["latn"],
        "ru-MD": ["latn"],
        "ru-UA": ["latn"],
        rw: ["latn"],
        rwk: ["latn"],
        sa: ["deva"],
        sah: ["latn"],
        saq: ["latn"],
        sat: ["olck", "latn"],
        "sat-Deva": ["deva", "latn"],
        "sat-Olck": ["olck", "latn"],
        sbp: ["latn"],
        sc: ["latn"],
        scn: ["latn"],
        sd: ["arab"],
        "sd-Arab": ["arab"],
        "sd-Deva": ["latn"],
        sdh: ["arab"],
        "sdh-IQ": ["arab"],
        se: ["latn"],
        "se-FI": ["latn"],
        "se-SE": ["latn"],
        seh: ["latn"],
        ses: ["latn"],
        sg: ["latn"],
        shi: ["latn"],
        "shi-Latn": ["latn"],
        "shi-Tfng": ["latn"],
        shn: ["latn"],
        "shn-TH": ["latn"],
        si: ["latn"],
        sid: ["latn"],
        sk: ["latn"],
        sl: ["latn"],
        sma: ["latn"],
        "sma-NO": ["latn"],
        smj: ["latn"],
        "smj-NO": ["latn"],
        smn: ["latn"],
        sms: ["latn"],
        sn: ["latn"],
        so: ["latn"],
        "so-DJ": ["latn"],
        "so-ET": ["latn"],
        "so-KE": ["latn"],
        sq: ["latn"],
        "sq-MK": ["latn"],
        "sq-XK": ["latn"],
        sr: ["latn"],
        "sr-Cyrl": ["latn"],
        "sr-Cyrl-BA": ["latn"],
        "sr-Cyrl-ME": ["latn"],
        "sr-Cyrl-XK": ["latn"],
        "sr-Latn": ["latn"],
        "sr-Latn-BA": ["latn"],
        "sr-Latn-ME": ["latn"],
        "sr-Latn-XK": ["latn"],
        ss: ["latn"],
        "ss-SZ": ["latn"],
        ssy: ["latn"],
        st: ["latn"],
        "st-LS": ["latn"],
        su: ["latn"],
        "su-Latn": ["latn"],
        sv: ["latn"],
        "sv-AX": ["latn"],
        "sv-FI": ["latn"],
        sw: ["latn"],
        "sw-CD": ["latn"],
        "sw-KE": ["latn"],
        "sw-UG": ["latn"],
        syr: ["latn"],
        "syr-SY": ["latn"],
        szl: ["latn"],
        ta: ["latn", "tamldec", "taml"],
        "ta-LK": ["latn", "tamldec", "taml"],
        "ta-MY": ["latn", "tamldec", "taml"],
        "ta-SG": ["latn", "tamldec", "taml"],
        te: ["latn", "telu"],
        teo: ["latn"],
        "teo-KE": ["latn"],
        tg: ["latn"],
        th: ["latn", "thai"],
        ti: ["latn", "ethi"],
        "ti-ER": ["latn", "ethi"],
        tig: ["latn", "ethi"],
        tk: ["latn"],
        tn: ["latn"],
        "tn-BW": ["latn"],
        to: ["latn"],
        tok: ["latn"],
        tpi: ["latn"],
        tr: ["latn"],
        "tr-CY": ["latn"],
        trv: ["latn"],
        trw: ["latn"],
        ts: ["latn"],
        tt: ["latn"],
        twq: ["latn"],
        tzm: ["latn"],
        ug: ["latn", "arabext"],
        uk: ["latn"],
        und: ["latn"],
        ur: ["latn", "arabext"],
        "ur-IN": ["arabext"],
        uz: ["latn"],
        "uz-Arab": ["arabext"],
        "uz-Cyrl": ["latn"],
        "uz-Latn": ["latn"],
        vai: ["latn", "vaii"],
        "vai-Latn": ["latn", "vaii"],
        "vai-Vaii": ["latn", "vaii"],
        ve: ["latn"],
        vec: ["latn"],
        vi: ["latn"],
        vo: ["latn"],
        vun: ["latn"],
        wa: ["latn"],
        wae: ["latn"],
        wal: ["latn", "ethi"],
        wbp: ["latn"],
        wo: ["latn"],
        xh: ["latn"],
        xog: ["latn"],
        yav: ["latn"],
        yi: ["latn", "hebr"],
        yo: ["latn"],
        "yo-BJ": ["latn"],
        yrl: ["latn"],
        "yrl-CO": ["latn"],
        "yrl-VE": ["latn"],
        yue: ["latn", "hanidec", "hant", "hantfin"],
        "yue-Hans": ["latn", "hanidec", "hans", "hansfin"],
        "yue-Hant": ["latn", "hanidec", "hant", "hantfin"],
        zgh: ["latn"],
        zh: ["latn", "hanidec", "hans", "hansfin"],
        "zh-Hans": ["latn", "hanidec", "hans", "hansfin"],
        "zh-Hans-HK": ["latn", "hanidec", "hans", "hansfin"],
        "zh-Hans-MO": ["latn", "hanidec", "hans", "hansfin"],
        "zh-Hans-SG": ["latn", "hanidec", "hans", "hansfin"],
        "zh-Hant": ["latn", "hanidec", "hant", "hantfin"],
        "zh-Hant-HK": ["latn", "hanidec", "hant", "hantfin"],
        "zh-Hant-MO": ["latn", "hanidec", "hant", "hantfin"],
        zu: ["latn"]
      }
    },
    58804: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      })
    },
    59846: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.calendars = void 0, t.calendars = {
        "001": ["gregorian"],
        AE: ["gregorian", "islamic-umalqura", "islamic", "islamic-civil", "islamic-tbla"],
        AF: ["persian", "gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        AL: ["gregorian", "islamic-civil", "islamic-tbla"],
        AZ: ["gregorian", "islamic-civil", "islamic-tbla"],
        BD: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        BH: ["gregorian", "islamic-umalqura", "islamic", "islamic-civil", "islamic-tbla"],
        CN: ["gregorian", "chinese"],
        CX: ["gregorian", "chinese"],
        DJ: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        DZ: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        EG: ["gregorian", "coptic", "islamic", "islamic-civil", "islamic-tbla"],
        EH: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        ER: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        ET: ["gregorian", "ethiopic"],
        HK: ["gregorian", "chinese"],
        ID: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        IL: ["gregorian", "hebrew", "islamic", "islamic-civil", "islamic-tbla"],
        IN: ["gregorian", "indian"],
        IQ: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        IR: ["persian", "gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        JO: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        JP: ["gregorian", "japanese"],
        KM: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        KR: ["gregorian", "dangi"],
        KW: ["gregorian", "islamic-umalqura", "islamic", "islamic-civil", "islamic-tbla"],
        LB: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        LY: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        MA: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        MO: ["gregorian", "chinese"],
        MR: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        MV: ["gregorian", "islamic-civil", "islamic-tbla"],
        MY: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        NE: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        OM: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        PK: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        PS: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        QA: ["gregorian", "islamic-umalqura", "islamic", "islamic-civil", "islamic-tbla"],
        SA: ["islamic-umalqura", "gregorian", "islamic", "islamic-rgsa"],
        SD: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        SG: ["gregorian", "chinese"],
        SY: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        TD: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        TH: ["buddhist", "gregorian"],
        TJ: ["gregorian", "islamic-civil", "islamic-tbla"],
        TM: ["gregorian", "islamic-civil", "islamic-tbla"],
        TN: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"],
        TR: ["gregorian", "islamic-civil", "islamic-tbla"],
        TW: ["gregorian", "roc", "chinese"],
        UZ: ["gregorian", "islamic-civil", "islamic-tbla"],
        XK: ["gregorian", "islamic-civil", "islamic-tbla"],
        YE: ["gregorian", "islamic", "islamic-civil", "islamic-tbla"]
      }
    },
    62091: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.emitUnicodeLocaleId = t.emitUnicodeLanguageId = void 0;
      var e = n(23514);

      function r(a) {
        return a ? e.__spreadArray([a.lang, a.script, a.region], a.variants || [], !0).filter(Boolean).join("-") : ""
      }
      t.emitUnicodeLanguageId = r, t.emitUnicodeLocaleId = function(a) {
        for (var t = a.lang, n = a.extensions, i = [r(t)], L = 0, s = n; L < s.length; L++) {
          var l = s[L];
          switch (i.push(l.type), l.type) {
            case "u":
              i.push.apply(i, e.__spreadArray(e.__spreadArray([], l.attributes, !1), l.keywords.reduce((function(a, t) {
                return a.concat(t)
              }), []), !1));
              break;
            case "t":
              i.push.apply(i, e.__spreadArray([r(l.lang)], l.fields.reduce((function(a, t) {
                return a.concat(t)
              }), []), !1));
              break;
            default:
              i.push(l.value)
          }
        }
        return i.filter(Boolean).join("-")
      }
    },
    62494: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getWeekDataForRegion = t.getTimeZonePreferenceForRegion = t.getHourCyclesPreferenceDataForLocaleOrRegion = t.getCalendarPreferenceDataForRegion = void 0;
      var e = n(23514),
        r = n(76941),
        i = n(9923),
        L = n(59846),
        s = n(54722);
      t.getCalendarPreferenceDataForRegion = function(a) {
        var t = a ? a.toUpperCase() : null;
        return (L.calendars[t || ""] || L.calendars["001"]).map((function(a) {
          return "gregorian" === a ? "gregory" : "islamic-civil" === a ? "islamicc" : a
        }))
      }, t.getHourCyclesPreferenceDataForLocaleOrRegion = function(a, t) {
        var n = a.toLowerCase(),
          r = t ? t.toUpperCase() : "",
          L = i.hourCycles[n] || i.hourCycles[r] || i.hourCycles["".concat(n, "-001")] || i.hourCycles["001"];
        return e.__spreadArray([], L, !0)
      }, t.getTimeZonePreferenceForRegion = function(a) {
        var t = a.toLowerCase();
        return r.timezones[t] ? e.__spreadArray([], r.timezones[t], !0) : []
      }, t.getWeekDataForRegion = function(a) {
        var t = a ? a.toUpperCase() : "";
        return s.weekData[t || "001"] || s.weekData["001"]
      }
    },
    64390: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = new WeakMap;
      t.default = function(a) {
        var t = n.get(a);
        return t || (t = Object.create(null), n.set(a, t)), t
      }
    },
    66545: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getSupportedCollations = void 0;
      var e = n(41788);
      t.getSupportedCollations = function(a) {
        return e.collations.filter((function(t) {
          return function(a, t) {
            void 0 === t && (t = "en");
            try {
              return Intl.Collator("".concat(t, "-u-co-").concat(a)).resolvedOptions().collation === a
            } catch (a) {}
            return !1
          }(t, a)
        }))
      }
    },
    72971: (a, t, n) => {
      function e(a) {
        return Intl.getCanonicalLocales(a)
      }

      function r(a, t) {
        var n = t.zoneNames,
          e = t.uppercaseLinks,
          r = a.toUpperCase(),
          i = n.reduce((function(a, t) {
            return a[t.toUpperCase()] = t, a
          }), {}),
          L = e[r] || i[r];
        return "Etc/UTC" === L || "Etc/GMT" === L ? "UTC" : L
      }

      function i(a) {
        if ("symbol" == typeof a) throw TypeError("Cannot convert a Symbol value to a string");
        return String(a)
      }

      function L(a) {
        if (void 0 === a) return NaN;
        if (null === a) return 0;
        if ("boolean" == typeof a) return a ? 1 : 0;
        if ("number" == typeof a) return a;
        if ("symbol" == typeof a || "bigint" == typeof a) throw new TypeError("Cannot convert symbol/bigint to number");
        return Number(a)
      }

      function s(a) {
        return isFinite(a) ? Math.abs(a) > 8640000000000001 ? NaN : function(a) {
          var t = L(a);
          if (isNaN(t) || o(t, -0)) return 0;
          if (isFinite(t)) return t;
          var n = Math.floor(Math.abs(t));
          return t < 0 && (n = -n), o(n, -0) ? 0 : n
        }(a) : NaN
      }

      function l(a) {
        if (null == a) throw new TypeError("undefined/null cannot be converted to object");
        return Object(a)
      }

      function o(a, t) {
        return Object.is ? Object.is(a, t) : a === t ? 0 !== a || 1 / a == 1 / t : a != a && t != t
      }

      function u(a) {
        return new Array(a)
      }

      function m(a, t) {
        return Object.prototype.hasOwnProperty.call(a, t)
      }

      function d(a) {
        return null === a ? "Null" : void 0 === a ? "Undefined" : "function" == typeof a || "object" == typeof a ? "Object" : "number" == typeof a ? "Number" : "boolean" == typeof a ? "Boolean" : "string" == typeof a ? "String" : "symbol" == typeof a ? "Symbol" : "bigint" == typeof a ? "BigInt" : void 0
      }
      n.r(t), n.d(t, {
        ApplyUnsignedRoundingMode: () => W,
        ArrayCreate: () => u,
        CanonicalizeLocaleList: () => e,
        CanonicalizeTimeZoneName: () => r,
        CoerceOptionsToObject: () => z,
        CollapseNumberRange: () => J,
        ComputeExponent: () => ma,
        ComputeExponentForMagnitude: () => sa,
        CurrencyDigits: () => da,
        DateFromTime: () => v,
        Day: () => b,
        DayFromYear: () => k,
        DayWithinYear: () => D,
        DaysInYear: () => p,
        FormatApproximately: () => ca,
        FormatNumericRange: () => Ma,
        FormatNumericRangeToParts: () => Na,
        FormatNumericToParts: () => Ca,
        FormatNumericToString: () => ua,
        GetNumberOption: () => U,
        GetOption: () => E,
        GetOptionsObject: () => B,
        GetStringOrBooleanOption: () => R,
        GetUnsignedRoundingMode: () => Za,
        HasOwnProperty: () => m,
        HourFromTime: () => P,
        InLeapYear: () => A,
        InitializeNumberFormat: () => Ya,
        IsSanctionedSimpleUnitIdentifier: () => K,
        IsValidTimeZoneName: () => O,
        IsWellFormedCurrencyCode: () => X,
        IsWellFormedUnitIdentifier: () => Y,
        MinFromTime: () => S,
        MonthFromTime: () => w,
        OrdinaryHasInstance: () => T,
        PartitionNumberPattern: () => wa,
        PartitionNumberRangePattern: () => va,
        PartitionPattern: () => Wa,
        RangePatternType: () => Oa,
        SANCTIONED_UNITS: () => q,
        SIMPLE_UNITS: () => F,
        SameValue: () => o,
        SecFromTime: () => x,
        SetNumberFormatDigitOptions: () => Fa,
        SetNumberFormatUnitOptions: () => Ka,
        SupportedLocales: () => Ja,
        TimeClip: () => s,
        TimeFromYear: () => y,
        ToNumber: () => L,
        ToObject: () => l,
        ToRawFixed: () => oa,
        ToRawPrecision: () => la,
        ToString: () => i,
        Type: () => d,
        WeekDay: () => h,
        YearFromTime: () => f,
        _formatToParts: () => fa,
        defineProperty: () => ia,
        getInternalSlot: () => na,
        getMagnitude: () => Q,
        getMultiInternalSlots: () => ea,
        invariant: () => La,
        isLiteralPart: () => ra,
        isMissingLocaleDataError: () => Qa,
        msFromTime: () => j,
        removeUnitNamespace: () => H,
        setInternalSlot: () => aa,
        setMultiInternalSlots: () => ta
      });
      var c = 864e5;

      function g(a, t) {
        return a - Math.floor(a / t) * t
      }

      function b(a) {
        return Math.floor(a / c)
      }

      function h(a) {
        return g(b(a) + 4, 7)
      }

      function k(a) {
        return Date.UTC(a, 0) / c
      }

      function y(a) {
        return Date.UTC(a, 0)
      }

      function f(a) {
        return new Date(a).getUTCFullYear()
      }

      function p(a) {
        return a % 4 != 0 ? 365 : a % 100 != 0 ? 366 : a % 400 != 0 ? 365 : 366
      }

      function D(a) {
        return b(a) - k(f(a))
      }

      function A(a) {
        return 365 === p(f(a)) ? 0 : 1
      }

      function w(a) {
        var t = D(a),
          n = A(a);
        if (t >= 0 && t < 31) return 0;
        if (t < 59 + n) return 1;
        if (t < 90 + n) return 2;
        if (t < 120 + n) return 3;
        if (t < 151 + n) return 4;
        if (t < 181 + n) return 5;
        if (t < 212 + n) return 6;
        if (t < 243 + n) return 7;
        if (t < 273 + n) return 8;
        if (t < 304 + n) return 9;
        if (t < 334 + n) return 10;
        if (t < 365 + n) return 11;
        throw new Error("Invalid time")
      }

      function v(a) {
        var t = D(a),
          n = w(a),
          e = A(a);
        if (0 === n) return t + 1;
        if (1 === n) return t - 30;
        if (2 === n) return t - 58 - e;
        if (3 === n) return t - 89 - e;
        if (4 === n) return t - 119 - e;
        if (5 === n) return t - 150 - e;
        if (6 === n) return t - 180 - e;
        if (7 === n) return t - 211 - e;
        if (8 === n) return t - 242 - e;
        if (9 === n) return t - 272 - e;
        if (10 === n) return t - 303 - e;
        if (11 === n) return t - 333 - e;
        throw new Error("Invalid time")
      }
      var M = 24,
        N = 60,
        C = 60,
        G = 1e3,
        I = G * C,
        Z = I * N;

      function P(a) {
        return g(Math.floor(a / Z), M)
      }

      function S(a) {
        return g(Math.floor(a / I), N)
      }

      function x(a) {
        return g(Math.floor(a / G), C)
      }

      function T(a, t, n) {
        if ("function" != typeof a) return !1;
        if (null == n ? void 0 : n.boundTargetFunction) return t instanceof(null == n ? void 0 : n.boundTargetFunction);
        if ("object" != typeof t) return !1;
        var e = a.prototype;
        if ("object" != typeof e) throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
        return Object.prototype.isPrototypeOf.call(e, t)
      }

      function j(a) {
        return g(a, G)
      }

      function z(a) {
        return void 0 === a ? Object.create(null) : l(a)
      }

      function _(a, t, n, e) {
        if (void 0 === a) return e;
        var r = Number(a);
        if (isNaN(r) || r < t || r > n) throw new RangeError("".concat(r, " is outside of range [").concat(t, ", ").concat(n, "]"));
        return Math.floor(r)
      }

      function U(a, t, n, e, r) {
        return _(a[t], n, e, r)
      }

      function E(a, t, n, e, r) {
        if ("object" != typeof a) throw new TypeError("Options must be an object");
        var L = a[t];
        if (void 0 !== L) {
          if ("boolean" !== n && "string" !== n) throw new TypeError("invalid type");
          if ("boolean" === n && (L = Boolean(L)), "string" === n && (L = i(L)), void 0 !== e && !e.filter((function(a) {
              return a == L
            })).length) throw new RangeError("".concat(L, " is not within ").concat(e.join(", ")));
          return L
        }
        return r
      }

      function B(a) {
        if (void 0 === a) return Object.create(null);
        if ("object" == typeof a) return a;
        throw new TypeError("Options must be an object")
      }

      function R(a, t, n, e, r, L) {
        var s = a[t];
        if (void 0 === s) return L;
        if (!0 === s) return e;
        if (!1 === Boolean(s)) return r;
        if ("true" === (s = i(s)) || "false" === s) return L;
        if (-1 === (n || []).indexOf(s)) throw new RangeError("Invalid value ".concat(s));
        return s
      }
      var q = ["angle-degree", "area-acre", "area-hectare", "concentr-percent", "digital-bit", "digital-byte", "digital-gigabit", "digital-gigabyte", "digital-kilobit", "digital-kilobyte", "digital-megabit", "digital-megabyte", "digital-petabyte", "digital-terabit", "digital-terabyte", "duration-day", "duration-hour", "duration-millisecond", "duration-minute", "duration-month", "duration-second", "duration-week", "duration-year", "length-centimeter", "length-foot", "length-inch", "length-kilometer", "length-meter", "length-mile-scandinavian", "length-mile", "length-millimeter", "length-yard", "mass-gram", "mass-kilogram", "mass-ounce", "mass-pound", "mass-stone", "temperature-celsius", "temperature-fahrenheit", "volume-fluid-ounce", "volume-gallon", "volume-liter", "volume-milliliter"];

      function H(a) {
        return a.slice(a.indexOf("-") + 1)
      }
      var F = q.map(H);

      function K(a) {
        return F.indexOf(a) > -1
      }

      function O(a, t) {
        var n = t.zoneNamesFromData,
          e = t.uppercaseLinks,
          r = a.toUpperCase(),
          i = new Set,
          L = new Set;
        return n.map((function(a) {
          return a.toUpperCase()
        })).forEach((function(a) {
          return i.add(a)
        })), Object.keys(e).forEach((function(a) {
          L.add(a.toUpperCase()), i.add(e[a].toUpperCase())
        })), i.has(r) || L.has(r)
      }
      var V = /[^A-Z]/;

      function X(a) {
        return 3 === (a = a.replace(/([a-z])/g, (function(a, t) {
          return t.toUpperCase()
        }))).length && !V.test(a)
      }

      function Y(a) {
        if (K(a = a.replace(/([A-Z])/g, (function(a, t) {
            return t.toLowerCase()
          })))) return !0;
        var t = a.split("-per-");
        if (2 !== t.length) return !1;
        var n = t[0],
          e = t[1];
        return !(!K(n) || !K(e))
      }

      function W(a, t, n, e) {
        if (a === t) return t;
        if (void 0 === e) throw new Error("unsignedRoundingMode is mandatory");
        if ("zero" === e) return t;
        if ("infinity" === e) return n;
        var r = a - t,
          i = n - a;
        if (r < i) return t;
        if (i < r) return n;
        if (r !== i) throw new Error("Unexpected error");
        if ("half-zero" === e) return t;
        if ("half-infinity" === e) return n;
        if ("half-even" !== e) throw new Error("Unexpected value for unsignedRoundingMode: ".concat(e));
        return 0 == t / (n - t) % 2 ? t : n
      }

      function J(a) {
        return a
      }

      function Q(a) {
        return Math.floor(Math.log(a) * Math.LOG10E)
      }

      function $(a, t) {
        if ("function" == typeof a.repeat) return a.repeat(t);
        for (var n = new Array(t), e = 0; e < n.length; e++) n[e] = a;
        return n.join("")
      }

      function aa(a, t, n, e) {
        a.get(t) || a.set(t, Object.create(null)), a.get(t)[n] = e
      }

      function ta(a, t, n) {
        for (var e = 0, r = Object.keys(n); e < r.length; e++) {
          var i = r[e];
          aa(a, t, i, n[i])
        }
      }

      function na(a, t, n) {
        return ea(a, t, n)[n]
      }

      function ea(a, t) {
        for (var n = [], e = 2; e < arguments.length; e++) n[e - 2] = arguments[e];
        var r = a.get(t);
        if (!r) throw new TypeError("".concat(t, " InternalSlot has not been initialized"));
        return n.reduce((function(a, t) {
          return a[t] = r[t], a
        }), Object.create(null))
      }

      function ra(a) {
        return "literal" === a.type
      }

      function ia(a, t, n) {
        var e = n.value;
        Object.defineProperty(a, t, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: e
        })
      }

      function La(a, t, n) {
        if (void 0 === n && (n = Error), !a) throw new n(t)
      }

      function sa(a, t, n) {
        var e = (0, n.getInternalSlots)(a),
          r = e.notation,
          i = e.dataLocaleData,
          L = e.numberingSystem;
        switch (r) {
          case "standard":
            return 0;
          case "scientific":
            return t;
          case "engineering":
            return 3 * Math.floor(t / 3);
          default:
            var s = e.compactDisplay,
              l = e.style,
              o = e.currencyDisplay,
              u = void 0;
            if ("currency" === l && "name" !== o) u = (i.numbers.currency[L] || i.numbers.currency[i.numbers.nu[0]]).short;
            else {
              var m = i.numbers.decimal[L] || i.numbers.decimal[i.numbers.nu[0]];
              u = "long" === s ? m.long : m.short
            }
            if (!u) return 0;
            var d = String(Math.pow(10, t)),
              c = Object.keys(u);
            if (d < c[0]) return 0;
            if (d > c[c.length - 1]) return c[c.length - 1].length - 1;
            var g = c.indexOf(d);
            if (-1 === g) return 0;
            var b = c[g];
            return "0" === u[b].other ? 0 : b.length - u[b].other.match(/0+/)[0].length
        }
      }

      function la(a, t, n) {
        var e, r, i, L, s = n;
        if (0 === a) e = $("0", s), r = 0, i = 0;
        else {
          var l = a.toString(),
            o = l.indexOf("e"),
            u = l.split("e"),
            m = u[0],
            d = u[1],
            c = m.replace(".", "");
          if (o >= 0 && c.length <= s) r = +d, e = c + $("0", s - c.length), i = a;
          else {
            var g = (r = Q(a)) - s + 1,
              b = Math.round(k(a, g));
            k(b, s - 1) >= 10 && (r += 1, b = Math.floor(b / 10)), e = b.toString(), i = k(b, s - 1 - r)
          }
        }
        if (r >= s - 1 ? (e += $("0", r - s + 1), L = r + 1) : r >= 0 ? (e = "".concat(e.slice(0, r + 1), ".").concat(e.slice(r + 1)), L = r + 1) : (e = "0.".concat($("0", -r - 1)).concat(e), L = 1), e.indexOf(".") >= 0 && n > t) {
          for (var h = n - t; h > 0 && "0" === e[e.length - 1];) e = e.slice(0, -1), h--;
          "." === e[e.length - 1] && (e = e.slice(0, -1))
        }
        return {
          formattedString: e,
          roundedNumber: i,
          integerDigitsCount: L
        };

        function k(a, t) {
          return t < 0 ? a * Math.pow(10, -t) : a / Math.pow(10, t)
        }
      }

      function oa(a, t, n) {
        var e, r, i = n,
          L = Math.round(a * Math.pow(10, i)),
          s = L / Math.pow(10, i);
        if (L < 1e21) e = L.toString();
        else {
          var l = (e = L.toString()).split("e"),
            o = l[0],
            u = l[1];
          e = o.replace(".", ""), e += $("0", Math.max(+u - e.length + 1, 0))
        }
        if (0 !== i) {
          var m = e.length;
          m <= i && (e = $("0", i + 1 - m) + e, m = i + 1);
          var d = e.slice(0, m - i),
            c = e.slice(m - i);
          e = "".concat(d, ".").concat(c), r = d.length
        } else r = e.length;
        for (var g = n - t; g > 0 && "0" === e[e.length - 1];) e = e.slice(0, -1), g--;
        return "." === e[e.length - 1] && (e = e.slice(0, -1)), {
          formattedString: e,
          roundedNumber: s,
          integerDigitsCount: r
        }
      }

      function ua(a, t) {
        var n, e = t < 0 || o(t, -0);
        switch (e && (t = -t), a.roundingType) {
          case "significantDigits":
            n = la(t, a.minimumSignificantDigits, a.maximumSignificantDigits);
            break;
          case "fractionDigits":
            n = oa(t, a.minimumFractionDigits, a.maximumFractionDigits);
            break;
          default:
            (n = la(t, 1, 2)).integerDigitsCount > 1 && (n = oa(t, 0, 0))
        }
        t = n.roundedNumber;
        var r = n.formattedString,
          i = n.integerDigitsCount,
          L = a.minimumIntegerDigits;
        return i < L && (r = $("0", L - i) + r), e && (t = -t), {
          roundedNumber: t,
          formattedString: r
        }
      }

      function ma(a, t, n) {
        var e = n.getInternalSlots;
        if (0 === t) return [0, 0];
        t < 0 && (t = -t);
        var r = Q(t),
          i = sa(a, r, {
            getInternalSlots: e
          });
        t = i < 0 ? t * Math.pow(10, -i) : t / Math.pow(10, i);
        var L = ua(e(a), t);
        return 0 === L.roundedNumber || Q(L.roundedNumber) === r - i ? [i, r] : [sa(a, r + 1, {
          getInternalSlots: e
        }), r + 1]
      }

      function da(a, t) {
        var n = t.currencyDigitsData;
        return m(n, a) ? n[a] : 2
      }

      function ca(a, t, n) {
        var e = (0, n.getInternalSlots)(a),
          r = e.dataLocaleData.numbers.symbols[e.numberingSystem].approximatelySign;
        return t.push({
          type: "approximatelySign",
          value: r
        }), t
      }
      var ga = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,
        ba = {
          adlm: ["𞥐", "𞥑", "𞥒", "𞥓", "𞥔", "𞥕", "𞥖", "𞥗", "𞥘", "𞥙"],
          ahom: ["𑜰", "𑜱", "𑜲", "𑜳", "𑜴", "𑜵", "𑜶", "𑜷", "𑜸", "𑜹"],
          arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
          arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
          bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
          beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
          bhks: ["𑱐", "𑱑", "𑱒", "𑱓", "𑱔", "𑱕", "𑱖", "𑱗", "𑱘", "𑱙"],
          brah: ["𑁦", "𑁧", "𑁨", "𑁩", "𑁪", "𑁫", "𑁬", "𑁭", "𑁮", "𑁯"],
          cakm: ["𑄶", "𑄷", "𑄸", "𑄹", "𑄺", "𑄻", "𑄼", "𑄽", "𑄾", "𑄿"],
          cham: ["꩐", "꩑", "꩒", "꩓", "꩔", "꩕", "꩖", "꩗", "꩘", "꩙"],
          deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
          diak: ["𑥐", "𑥑", "𑥒", "𑥓", "𑥔", "𑥕", "𑥖", "𑥗", "𑥘", "𑥙"],
          fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
          gong: ["𑶠", "𑶡", "𑶢", "𑶣", "𑶤", "𑶥", "𑶦", "𑶧", "𑶨", "𑶩"],
          gonm: ["𑵐", "𑵑", "𑵒", "𑵓", "𑵔", "𑵕", "𑵖", "𑵗", "𑵘", "𑵙"],
          gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
          guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
          hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
          hmng: ["𖭐", "𖭑", "𖭒", "𖭓", "𖭔", "𖭕", "𖭖", "𖭗", "𖭘", "𖭙"],
          hmnp: ["𞅀", "𞅁", "𞅂", "𞅃", "𞅄", "𞅅", "𞅆", "𞅇", "𞅈", "𞅉"],
          java: ["꧐", "꧑", "꧒", "꧓", "꧔", "꧕", "꧖", "꧗", "꧘", "꧙"],
          kali: ["꤀", "꤁", "꤂", "꤃", "꤄", "꤅", "꤆", "꤇", "꤈", "꤉"],
          khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
          knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
          lana: ["᪀", "᪁", "᪂", "᪃", "᪄", "᪅", "᪆", "᪇", "᪈", "᪉"],
          lanatham: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
          laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
          lepc: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
          limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
          mathbold: ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"],
          mathdbl: ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"],
          mathmono: ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"],
          mathsanb: ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"],
          mathsans: ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"],
          mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
          modi: ["𑙐", "𑙑", "𑙒", "𑙓", "𑙔", "𑙕", "𑙖", "𑙗", "𑙘", "𑙙"],
          mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
          mroo: ["𖩠", "𖩡", "𖩢", "𖩣", "𖩤", "𖩥", "𖩦", "𖩧", "𖩨", "𖩩"],
          mtei: ["꯰", "꯱", "꯲", "꯳", "꯴", "꯵", "꯶", "꯷", "꯸", "꯹"],
          mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
          mymrshan: ["႐", "႑", "႒", "႓", "႔", "႕", "႖", "႗", "႘", "႙"],
          mymrtlng: ["꧰", "꧱", "꧲", "꧳", "꧴", "꧵", "꧶", "꧷", "꧸", "꧹"],
          newa: ["𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙"],
          nkoo: ["߀", "߁", "߂", "߃", "߄", "߅", "߆", "߇", "߈", "߉"],
          olck: ["᱐", "᱑", "᱒", "᱓", "᱔", "᱕", "᱖", "᱗", "᱘", "᱙"],
          orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
          osma: ["𐒠", "𐒡", "𐒢", "𐒣", "𐒤", "𐒥", "𐒦", "𐒧", "𐒨", "𐒩"],
          rohg: ["𐴰", "𐴱", "𐴲", "𐴳", "𐴴", "𐴵", "𐴶", "𐴷", "𐴸", "𐴹"],
          saur: ["꣐", "꣑", "꣒", "꣓", "꣔", "꣕", "꣖", "꣗", "꣘", "꣙"],
          segment: ["🯰", "🯱", "🯲", "🯳", "🯴", "🯵", "🯶", "🯷", "🯸", "🯹"],
          shrd: ["𑇐", "𑇑", "𑇒", "𑇓", "𑇔", "𑇕", "𑇖", "𑇗", "𑇘", "𑇙"],
          sind: ["𑋰", "𑋱", "𑋲", "𑋳", "𑋴", "𑋵", "𑋶", "𑋷", "𑋸", "𑋹"],
          sinh: ["෦", "෧", "෨", "෩", "෪", "෫", "෬", "෭", "෮", "෯"],
          sora: ["𑃰", "𑃱", "𑃲", "𑃳", "𑃴", "𑃵", "𑃶", "𑃷", "𑃸", "𑃹"],
          sund: ["᮰", "᮱", "᮲", "᮳", "᮴", "᮵", "᮶", "᮷", "᮸", "᮹"],
          takr: ["𑛀", "𑛁", "𑛂", "𑛃", "𑛄", "𑛅", "𑛆", "𑛇", "𑛈", "𑛉"],
          talu: ["᧐", "᧑", "᧒", "᧓", "᧔", "᧕", "᧖", "᧗", "᧘", "᧙"],
          tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
          telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
          thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
          tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"],
          tirh: ["𑓐", "𑓑", "𑓒", "𑓓", "𑓔", "𑓕", "𑓖", "𑓗", "𑓘", "𑓙"],
          vaii: ["ᘠ", "ᘡ", "ᘢ", "ᘣ", "ᘤ", "ᘥ", "ᘦ", "ᘧ", "ᘨ", "ᘩ"],
          wara: ["𑣠", "𑣡", "𑣢", "𑣣", "𑣤", "𑣥", "𑣦", "𑣧", "𑣨", "𑣩"],
          wcho: ["𞋰", "𞋱", "𞋲", "𞋳", "𞋴", "𞋵", "𞋶", "𞋷", "𞋸", "𞋹"]
        },
        ha = new RegExp("^".concat(ga.source)),
        ka = new RegExp("".concat(ga.source, "$")),
        ya = /[#0](?:[\.,][#0]+)*/g;

      function fa(a, t, n, e) {
        var r, i, L = a.sign,
          s = a.exponent,
          l = a.magnitude,
          o = e.notation,
          u = e.style,
          m = e.numberingSystem,
          d = t.numbers.nu[0],
          c = null;
        if ("compact" === o && l && (c = function(a, t, n, e, r, i, L) {
            var s, l, o = a.roundedNumber,
              u = a.sign,
              m = a.magnitude,
              d = String(Math.pow(10, m)),
              c = n.numbers.nu[0];
            if ("currency" === e && "name" !== i) {
              var g = null === (s = ((b = n.numbers.currency)[L] || b[c]).short) || void 0 === s ? void 0 : s[d];
              if (!g) return null;
              l = Aa(t, o, g)
            } else {
              var b, h = ((b = n.numbers.decimal)[L] || b[c])[r][d];
              if (!h) return null;
              l = Aa(t, o, h)
            }
            return "0" === l ? null : l = Da(l, u).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0")
          }(a, n, t, u, e.compactDisplay, e.currencyDisplay, m)), "currency" === u && "name" !== e.currencyDisplay) {
          var g = t.currencies[e.currency];
          if (g) switch (e.currencyDisplay) {
            case "code":
              r = e.currency;
              break;
            case "symbol":
              r = g.symbol;
              break;
            default:
              r = g.narrow
          } else r = e.currency
        }
        i = c || ("decimal" === u || "unit" === u || "currency" === u && "name" === e.currencyDisplay ? Da((t.numbers.decimal[m] || t.numbers.decimal[d]).standard, L) : Da("currency" === u ? (h = t.numbers.currency[m] || t.numbers.currency[d])[e.currencySign] : t.numbers.percent[m] || t.numbers.percent[d], L));
        var b = ya.exec(i)[0];
        if (i = i.replace(ya, "{0}").replace(/'(.)'/g, "$1"), "currency" === u && "name" !== e.currencyDisplay) {
          var h, k = (h = t.numbers.currency[m] || t.numbers.currency[d]).currencySpacing.afterInsertBetween;
          k && !ka.test(r) && (i = i.replace("¤{0}", "¤".concat(k, "{0}")));
          var y = h.currencySpacing.beforeInsertBetween;
          y && !ha.test(r) && (i = i.replace("{0}¤", "{0}".concat(y, "¤")))
        }
        for (var f = i.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g), p = [], D = t.numbers.symbols[m] || t.numbers.symbols[d], A = 0, w = f; A < w.length; A++)
          if (q = w[A]) switch (q) {
            case "{0}":
              p.push.apply(p, pa(D, a, o, s, m, !c && Boolean(e.useGrouping), b, u));
              break;
            case "-":
              p.push({
                type: "minusSign",
                value: D.minusSign
              });
              break;
            case "+":
              p.push({
                type: "plusSign",
                value: D.plusSign
              });
              break;
            case "%":
              p.push({
                type: "percentSign",
                value: D.percentSign
              });
              break;
            case "¤":
              p.push({
                type: "currency",
                value: r
              });
              break;
            default:
              /^\{c:/.test(q) ? p.push({
                type: "compact",
                value: q.substring(3, q.length - 1)
              }) : p.push({
                type: "literal",
                value: q
              })
          }
        switch (u) {
          case "currency":
            if ("name" === e.currencyDisplay) {
              var v, M = (t.numbers.currency[m] || t.numbers.currency[d]).unitPattern,
                N = t.currencies[e.currency];
              v = N ? Aa(n, a.roundedNumber * Math.pow(10, s), N.displayName) : e.currency;
              for (var C = [], G = 0, I = M.split(/(\{[01]\})/g); G < I.length; G++) switch (q = I[G]) {
                case "{0}":
                  C.push.apply(C, p);
                  break;
                case "{1}":
                  C.push({
                    type: "currency",
                    value: v
                  });
                  break;
                default:
                  q && C.push({
                    type: "literal",
                    value: q
                  })
              }
              return C
            }
            return p;
          case "unit":
            var Z = e.unit,
              P = e.unitDisplay,
              S = t.units.simple[Z];
            if (M = void 0, S) M = Aa(n, a.roundedNumber * Math.pow(10, s), t.units.simple[Z][P]);
            else {
              var x = Z.split("-per-"),
                T = x[0],
                j = x[1];
              S = t.units.simple[T];
              var z = Aa(n, a.roundedNumber * Math.pow(10, s), t.units.simple[T][P]),
                _ = t.units.simple[j].perUnit[P];
              if (_) M = _.replace("{0}", z);
              else {
                var U = t.units.compound.per[P],
                  E = Aa(n, 1, t.units.simple[j][P]);
                M = M = U.replace("{0}", z).replace("{1}", E.replace("{0}", ""))
              }
            }
            C = [];
            for (var B = 0, R = M.split(/(\s*\{0\}\s*)/); B < R.length; B++) {
              var q = R[B],
                H = /^(\s*)\{0\}(\s*)$/.exec(q);
              H ? (H[1] && C.push({
                type: "literal",
                value: H[1]
              }), C.push.apply(C, p), H[2] && C.push({
                type: "literal",
                value: H[2]
              })) : q && C.push({
                type: "unit",
                value: q
              })
            }
            return C;
          default:
            return p
        }
      }

      function pa(a, t, n, e, r, i, L, s) {
        var l = [],
          o = t.formattedString,
          u = t.roundedNumber;
        if (isNaN(u)) return [{
          type: "nan",
          value: o
        }];
        if (!isFinite(u)) return [{
          type: "infinity",
          value: o
        }];
        var m = ba[r];
        m && (o = o.replace(/\d/g, (function(a) {
          return m[+a] || a
        })));
        var d, c, g = o.indexOf(".");
        if (g > 0 ? (d = o.slice(0, g), c = o.slice(g + 1)) : d = o, i && ("compact" !== n || u >= 1e4)) {
          var b = "currency" === s && null != a.currencyGroup ? a.currencyGroup : a.group,
            h = [],
            k = L.split(".")[0].split(","),
            y = 3,
            f = 3;
          k.length > 1 && (y = k[k.length - 1].length), k.length > 2 && (f = k[k.length - 2].length);
          var p = d.length - y;
          if (p > 0) {
            for (h.push(d.slice(p, p + y)), p -= f; p > 0; p -= f) h.push(d.slice(p, p + f));
            h.push(d.slice(0, p + f))
          } else h.push(d);
          for (; h.length > 0;) {
            var D = h.pop();
            l.push({
              type: "integer",
              value: D
            }), h.length > 0 && l.push({
              type: "group",
              value: b
            })
          }
        } else l.push({
          type: "integer",
          value: d
        });
        if (void 0 !== c && l.push({
            type: "decimal",
            value: a.decimal
          }, {
            type: "fraction",
            value: c
          }), ("scientific" === n || "engineering" === n) && isFinite(u)) {
          l.push({
            type: "exponentSeparator",
            value: a.exponential
          }), e < 0 && (l.push({
            type: "exponentMinusSign",
            value: a.minusSign
          }), e = -e);
          var A = oa(e, 0, 0);
          l.push({
            type: "exponentInteger",
            value: A.formattedString
          })
        }
        return l
      }

      function Da(a, t) {
        a.indexOf(";") < 0 && (a = "".concat(a, ";-").concat(a));
        var n = a.split(";"),
          e = n[0],
          r = n[1];
        switch (t) {
          case 0:
            return e;
          case -1:
            return r;
          default:
            return r.indexOf("-") >= 0 ? r.replace(/-/g, "+") : "+".concat(e)
        }
      }

      function Aa(a, t, n) {
        return n[a.select(t)] || n.other
      }

      function wa(a, t, n) {
        var e, r, i, L = n.getInternalSlots,
          s = L(a),
          l = s.pl,
          u = s.dataLocaleData,
          m = s.numberingSystem,
          d = u.numbers.symbols[m] || u.numbers.symbols[u.numbers.nu[0]],
          c = 0,
          g = 0;
        if (isNaN(t)) r = d.nan;
        else if (t == Number.POSITIVE_INFINITY || t == Number.NEGATIVE_INFINITY) r = d.infinity;
        else {
          if (!o(t, -0)) {
            if (!isFinite(t)) throw new Error("Input must be a mathematical value");
            "percent" == s.style && (t *= 100), g = (e = ma(a, t, {
              getInternalSlots: L
            }))[0], c = e[1], t = g < 0 ? t * Math.pow(10, -g) : t / Math.pow(10, g)
          }
          var b = ua(s, t);
          r = b.formattedString, t = b.roundedNumber
        }
        switch (s.signDisplay) {
          case "never":
            i = 0;
            break;
          case "auto":
            i = o(t, 0) || t > 0 || isNaN(t) ? 0 : -1;
            break;
          case "always":
            i = o(t, 0) || t > 0 || isNaN(t) ? 1 : -1;
            break;
          default:
            i = 0 === t || isNaN(t) ? 0 : t > 0 ? 1 : -1
        }
        return fa({
          roundedNumber: t,
          formattedString: r,
          exponent: g,
          magnitude: c,
          sign: i
        }, s.dataLocaleData, l, s)
      }

      function va(a, t, n, e) {
        var r = e.getInternalSlots;
        if (isNaN(t) || isNaN(n)) throw new RangeError("Input must be a number");
        var i = [],
          L = wa(a, t, {
            getInternalSlots: r
          }),
          s = wa(a, n, {
            getInternalSlots: r
          });
        if (L === s) return ca(a, L, {
          getInternalSlots: r
        });
        for (var l = 0, o = L; l < o.length; l++) o[l].source = "startRange";
        i = i.concat(L);
        var u = r(a),
          m = u.dataLocaleData.numbers.symbols[u.numberingSystem];
        i.push({
          type: "literal",
          value: m.rangeSign,
          source: "shared"
        });
        for (var d = 0, c = s; d < c.length; d++) c[d].source = "endRange";
        return i.concat(s)
      }

      function Ma(a, t, n, e) {
        return va(a, t, n, {
          getInternalSlots: e.getInternalSlots
        }).map((function(a) {
          return a.value
        })).join("")
      }

      function Na(a, t, n, e) {
        return va(a, t, n, {
          getInternalSlots: e.getInternalSlots
        }).map((function(a, t) {
          return {
            type: a.type,
            value: a.value,
            source: a.source,
            result: t.toString()
          }
        }))
      }

      function Ca(a, t, n) {
        for (var e = wa(a, t, n), r = u(0), i = 0, L = e; i < L.length; i++) {
          var s = L[i];
          r.push({
            type: s.type,
            value: s.value
          })
        }
        return r
      }
      var Ga = {
          ceil: "zero",
          floor: "infinity",
          expand: "infinity",
          trunc: "zero",
          halfCeil: "half-zero",
          halfFloor: "half-infinity",
          halfExpand: "half-infinity",
          halfTrunc: "half-zero",
          halfEven: "half-even"
        },
        Ia = {
          ceil: "infinity",
          floor: "zero",
          expand: "infinity",
          trunc: "zero",
          halfCeil: "half-infinity",
          halfFloor: "half-zero",
          halfExpand: "half-infinity",
          halfTrunc: "half-zero",
          halfEven: "half-even"
        };

      function Za(a, t) {
        return t ? Ga[a] : Ia[a]
      }
      var Pa = n(23514),
        Sa = {
          supplemental: {
            languageMatching: {
              "written-new": [{
                paradigmLocales: {
                  _locales: "en en_GB es es_419 pt_BR pt_PT"
                }
              }, {
                $enUS: {
                  _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI"
                }
              }, {
                $cnsar: {
                  _value: "HK+MO"
                }
              }, {
                $americas: {
                  _value: "019"
                }
              }, {
                $maghreb: {
                  _value: "MA+DZ+TN+LY+MR+EH"
                }
              }, {
                no: {
                  _desired: "nb",
                  _distance: "1"
                }
              }, {
                bs: {
                  _desired: "hr",
                  _distance: "4"
                }
              }, {
                bs: {
                  _desired: "sh",
                  _distance: "4"
                }
              }, {
                hr: {
                  _desired: "sh",
                  _distance: "4"
                }
              }, {
                sr: {
                  _desired: "sh",
                  _distance: "4"
                }
              }, {
                aa: {
                  _desired: "ssy",
                  _distance: "4"
                }
              }, {
                de: {
                  _desired: "gsw",
                  _distance: "4",
                  _oneway: "true"
                }
              }, {
                de: {
                  _desired: "lb",
                  _distance: "4",
                  _oneway: "true"
                }
              }, {
                no: {
                  _desired: "da",
                  _distance: "8"
                }
              }, {
                nb: {
                  _desired: "da",
                  _distance: "8"
                }
              }, {
                ru: {
                  _desired: "ab",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ach",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                nl: {
                  _desired: "af",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ak",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "am",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "ay",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "az",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ur: {
                  _desired: "bal",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "be",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "bem",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "bh",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "bn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "bo",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "br",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "ca",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fil: {
                  _desired: "ceb",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "chr",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ckb",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "co",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "crs",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                sk: {
                  _desired: "cs",
                  _distance: "20"
                }
              }, {
                en: {
                  _desired: "cy",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ee",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "eo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "eu",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                da: {
                  _desired: "fo",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                nl: {
                  _desired: "fy",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ga",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "gaa",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "gd",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "gl",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "gn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "gu",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ha",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "haw",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "ht",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "hy",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ia",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ig",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "is",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                id: {
                  _desired: "jv",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ka",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "kg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "kk",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "km",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "kn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "kri",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                tr: {
                  _desired: "ku",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "ky",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                it: {
                  _desired: "la",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "lg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "ln",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "lo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "loz",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "lua",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "mai",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "mfe",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "mg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "mi",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ml",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "mn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "mr",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                id: {
                  _desired: "ms",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "mt",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "my",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ne",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                nb: {
                  _desired: "nn",
                  _distance: "20"
                }
              }, {
                no: {
                  _desired: "nn",
                  _distance: "20"
                }
              }, {
                en: {
                  _desired: "nso",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ny",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "nyn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "oc",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "om",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "or",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "pa",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "pcm",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ps",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "qu",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                de: {
                  _desired: "rm",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "rn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "rw",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "sa",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sd",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "si",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "so",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sq",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "st",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                id: {
                  _desired: "su",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sw",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ta",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "te",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "tg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ti",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "tk",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "tlh",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "tn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "to",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "tt",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "tum",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "ug",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "uk",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ur",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "uz",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "wo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "xh",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "yi",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "yo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "za",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "zu",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "aao",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "abh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "abv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acx",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "adf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "aeb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "aec",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "afb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ajp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "apc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "apd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "arq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ars",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ary",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "arz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "auz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "avl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "bbz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "pga",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "shu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ssh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                az: {
                  _desired: "azb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                et: {
                  _desired: "vro",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "ffm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fub",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fue",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fui",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "gnw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "gui",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "gun",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "nhd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                iu: {
                  _desired: "ikt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "enb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "eyo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "niq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "oki",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "pko",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "sgc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "tec",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "tuy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kok: {
                  _desired: "gom",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kpe: {
                  _desired: "gkp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "ida",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lkb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lko",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lks",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lri",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lrm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lsm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lto",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lts",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lwg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "nle",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "nyd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "rag",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                lv: {
                  _desired: "ltg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bhr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bjq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bmm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bzc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "msh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "skg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "tdx",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "tkg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "txy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "xmv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "xmw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mn: {
                  _desired: "mvf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "bjn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "btj",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "bve",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "bvu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "coa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "dup",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "hji",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "id",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "jak",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "jax",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "kvb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "kvr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "kxd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "lce",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "lcf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "liw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "max",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "meo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mfa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mfb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "min",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mqg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "msi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mui",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "orn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "ors",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "pel",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "pse",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "tmw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "urk",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "vkk",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "vkt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "xmm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "zlm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "zmi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ne: {
                  _desired: "dty",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                om: {
                  _desired: "gax",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                om: {
                  _desired: "hae",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                om: {
                  _desired: "orc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                or: {
                  _desired: "spv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ps: {
                  _desired: "pbt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ps: {
                  _desired: "pst",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qub",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qud",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qug",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quk",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qul",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qup",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qur",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qus",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qux",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qva",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qve",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvj",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvs",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qwa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qwc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qwh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qws",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sc: {
                  _desired: "sdc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sc: {
                  _desired: "sdn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sc: {
                  _desired: "sro",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sq: {
                  _desired: "aae",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sq: {
                  _desired: "aat",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sq: {
                  _desired: "aln",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                syr: {
                  _desired: "aii",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                uz: {
                  _desired: "uzs",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                yi: {
                  _desired: "yih",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "cdo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "cjy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "cpx",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "czh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "czo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "gan",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "hak",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "hsn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "lzh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "mnp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "nan",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "wuu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "yue",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "*": {
                  _desired: "*",
                  _distance: "80"
                }
              }, {
                "en-Latn": {
                  _desired: "am-Ethi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "az-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "bn-Beng",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "zh-Hans": {
                  _desired: "bo-Tibt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "hy-Armn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ka-Geor",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "km-Khmr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "kn-Knda",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "lo-Laoo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ml-Mlym",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "my-Mymr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ne-Deva",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "or-Orya",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "pa-Guru",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ps-Arab",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "sd-Arab",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "si-Sinh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ta-Taml",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "te-Telu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ti-Ethi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "tk-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ur-Arab",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "uz-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "yi-Hebr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "sr-Cyrl": {
                  _desired: "sr-Latn",
                  _distance: "5"
                }
              }, {
                "zh-Hans": {
                  _desired: "za-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "zh-Hans": {
                  _desired: "zh-Hani",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "zh-Hant": {
                  _desired: "zh-Hani",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ar-Arab": {
                  _desired: "ar-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "bn-Beng": {
                  _desired: "bn-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "gu-Gujr": {
                  _desired: "gu-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "hi-Deva": {
                  _desired: "hi-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "kn-Knda": {
                  _desired: "kn-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ml-Mlym": {
                  _desired: "ml-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "mr-Deva": {
                  _desired: "mr-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ta-Taml": {
                  _desired: "ta-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "te-Telu": {
                  _desired: "te-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "zh-Hans": {
                  _desired: "zh-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Latn",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Hani",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Hira",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Kana",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Hrkt",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Hrkt": {
                  _desired: "ja-Hira",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Hrkt": {
                  _desired: "ja-Kana",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Kore": {
                  _desired: "ko-Hani",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Kore": {
                  _desired: "ko-Hang",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Kore": {
                  _desired: "ko-Jamo",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Hang": {
                  _desired: "ko-Jamo",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "*-*": {
                  _desired: "*-*",
                  _distance: "50"
                }
              }, {
                "ar-*-$maghreb": {
                  _desired: "ar-*-$maghreb",
                  _distance: "4"
                }
              }, {
                "ar-*-$!maghreb": {
                  _desired: "ar-*-$!maghreb",
                  _distance: "4"
                }
              }, {
                "ar-*-*": {
                  _desired: "ar-*-*",
                  _distance: "5"
                }
              }, {
                "en-*-$enUS": {
                  _desired: "en-*-$enUS",
                  _distance: "4"
                }
              }, {
                "en-*-GB": {
                  _desired: "en-*-$!enUS",
                  _distance: "3"
                }
              }, {
                "en-*-$!enUS": {
                  _desired: "en-*-$!enUS",
                  _distance: "4"
                }
              }, {
                "en-*-*": {
                  _desired: "en-*-*",
                  _distance: "5"
                }
              }, {
                "es-*-$americas": {
                  _desired: "es-*-$americas",
                  _distance: "4"
                }
              }, {
                "es-*-$!americas": {
                  _desired: "es-*-$!americas",
                  _distance: "4"
                }
              }, {
                "es-*-*": {
                  _desired: "es-*-*",
                  _distance: "5"
                }
              }, {
                "pt-*-$americas": {
                  _desired: "pt-*-$americas",
                  _distance: "4"
                }
              }, {
                "pt-*-$!americas": {
                  _desired: "pt-*-$!americas",
                  _distance: "4"
                }
              }, {
                "pt-*-*": {
                  _desired: "pt-*-*",
                  _distance: "5"
                }
              }, {
                "zh-Hant-$cnsar": {
                  _desired: "zh-Hant-$cnsar",
                  _distance: "4"
                }
              }, {
                "zh-Hant-$!cnsar": {
                  _desired: "zh-Hant-$!cnsar",
                  _distance: "4"
                }
              }, {
                "zh-Hant-*": {
                  _desired: "zh-Hant-*",
                  _distance: "5"
                }
              }, {
                "*-*-*": {
                  _desired: "*-*-*",
                  _distance: "4"
                }
              }]
            }
          }
        },
        xa = {
          "001": ["001", "001-status-grouping", "002", "005", "009", "011", "013", "014", "015", "017", "018", "019", "021", "029", "030", "034", "035", "039", "053", "054", "057", "061", "142", "143", "145", "150", "151", "154", "155", "AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EA", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "EU", "EZ", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "QO", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TA", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "UN", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"],
          "002": ["002", "002-status-grouping", "011", "014", "015", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EA", "EG", "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IC", "IO", "KE", "KM", "LR", "LS", "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SD", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TN", "TZ", "UG", "YT", "ZA", "ZM", "ZW"],
          "003": ["003", "013", "021", "029", "AG", "AI", "AW", "BB", "BL", "BM", "BQ", "BS", "BZ", "CA", "CR", "CU", "CW", "DM", "DO", "GD", "GL", "GP", "GT", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PM", "PR", "SV", "SX", "TC", "TT", "US", "VC", "VG", "VI"],
          "005": ["005", "AR", "BO", "BR", "BV", "CL", "CO", "EC", "FK", "GF", "GS", "GY", "PE", "PY", "SR", "UY", "VE"],
          "009": ["009", "053", "054", "057", "061", "AC", "AQ", "AS", "AU", "CC", "CK", "CP", "CX", "DG", "FJ", "FM", "GU", "HM", "KI", "MH", "MP", "NC", "NF", "NR", "NU", "NZ", "PF", "PG", "PN", "PW", "QO", "SB", "TA", "TK", "TO", "TV", "UM", "VU", "WF", "WS"],
          "011": ["011", "BF", "BJ", "CI", "CV", "GH", "GM", "GN", "GW", "LR", "ML", "MR", "NE", "NG", "SH", "SL", "SN", "TG"],
          "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
          "014": ["014", "BI", "DJ", "ER", "ET", "IO", "KE", "KM", "MG", "MU", "MW", "MZ", "RE", "RW", "SC", "SO", "SS", "TF", "TZ", "UG", "YT", "ZM", "ZW"],
          "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"],
          "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"],
          "018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
          "019": ["003", "005", "013", "019", "019-status-grouping", "021", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BV", "BZ", "CA", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GL", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PM", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "US", "UY", "VC", "VE", "VG", "VI"],
          "021": ["021", "BM", "CA", "GL", "PM", "US"],
          "029": ["029", "AG", "AI", "AW", "BB", "BL", "BQ", "BS", "CU", "CW", "DM", "DO", "GD", "GP", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
          "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
          "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"],
          "035": ["035", "BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"],
          "039": ["039", "AD", "AL", "BA", "ES", "GI", "GR", "HR", "IT", "ME", "MK", "MT", "PT", "RS", "SI", "SM", "VA", "XK"],
          "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
          "054": ["054", "FJ", "NC", "PG", "SB", "VU"],
          "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
          "061": ["061", "AS", "CK", "NU", "PF", "PN", "TK", "TO", "TV", "WF", "WS"],
          142: ["030", "034", "035", "142", "143", "145", "AE", "AF", "AM", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "GE", "HK", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SG", "SY", "TH", "TJ", "TL", "TM", "TR", "TW", "UZ", "VN", "YE"],
          143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
          145: ["145", "AE", "AM", "AZ", "BH", "CY", "GE", "IL", "IQ", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "YE"],
          150: ["039", "150", "151", "154", "155", "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CQ", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR", "GB", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA", "XK"],
          151: ["151", "BG", "BY", "CZ", "HU", "MD", "PL", "RO", "RU", "SK", "UA"],
          154: ["154", "AX", "CQ", "DK", "EE", "FI", "FO", "GB", "GG", "IE", "IM", "IS", "JE", "LT", "LV", "NO", "SE", "SJ"],
          155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"],
          202: ["011", "014", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IO", "KE", "KM", "LR", "LS", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TZ", "UG", "YT", "ZA", "ZM", "ZW"],
          419: ["005", "013", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BO", "BQ", "BR", "BS", "BV", "BZ", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "UY", "VC", "VE", "VG", "VI"],
          EU: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"],
          EZ: ["AT", "BE", "CY", "DE", "EE", "ES", "EZ", "FI", "FR", "GR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK"],
          QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
          UN: ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "UN", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
        },
        Ta = /-u(?:-[0-9a-z]{2,8})+/gi;

      function ja(a, t, n) {
        if (void 0 === n && (n = Error), !a) throw new n(t)
      }
      var za, _a = 838;

      function Ua(a, t, n) {
        var e = t.split("-"),
          r = e[0],
          i = e[1],
          L = e[2],
          s = !0;
        if (L && "$" === L[0]) {
          var l = "!" !== L[1],
            o = (l ? n[L.slice(1)] : n[L.slice(2)]).map((function(a) {
              return xa[a] || [a]
            })).reduce((function(a, t) {
              return (0, Pa.__spreadArray)((0, Pa.__spreadArray)([], a, !0), t, !0)
            }), []);
          s && (s = !(o.indexOf(a.region || "") > 1 != l))
        } else s && (s = !a.region || "*" === L || L === a.region);
        return s && (s = !a.script || "*" === i || i === a.script), s && (s = !a.language || "*" === r || r === a.language), s
      }

      function Ea(a) {
        return [a.language, a.script, a.region].filter(Boolean).join("-")
      }

      function Ba(a, t, n) {
        for (var e = 0, r = n.matches; e < r.length; e++) {
          var i = r[e],
            L = Ua(a, i.desired, n.matchVariables) && Ua(t, i.supported, n.matchVariables);
          if (i.oneway || L || (L = Ua(a, i.supported, n.matchVariables) && Ua(t, i.desired, n.matchVariables)), L) {
            var s = 10 * i.distance;
            return n.paradigmLocales.indexOf(Ea(a)) > -1 != n.paradigmLocales.indexOf(Ea(t)) > -1 ? s - 1 : s
          }
        }
        throw new Error("No matching distance found")
      }

      function Ra(a, t, n) {
        var e, r, i = [],
          L = t.reduce((function(a, t) {
            var n = t.replace(Ta, "");
            return i.push(n), a[n] = t, a
          }), {}),
          s = function(a, t, n) {
            void 0 === n && (n = _a);
            var e = 1 / 0,
              r = {
                matchedDesiredLocale: "",
                distances: {}
              };
            return a.forEach((function(a, n) {
              r.distances[a] || (r.distances[a] = {}), t.forEach((function(t) {
                var i = function(a, t) {
                  var n = new Intl.Locale(a).maximize(),
                    e = new Intl.Locale(t).maximize(),
                    r = {
                      language: n.language,
                      script: n.script || "",
                      region: n.region || ""
                    },
                    i = {
                      language: e.language,
                      script: e.script || "",
                      region: e.region || ""
                    },
                    L = 0,
                    s = function() {
                      var a, t;
                      if (!za) {
                        var n = null === (t = null === (a = Sa.supplemental.languageMatching["written-new"][0]) || void 0 === a ? void 0 : a.paradigmLocales) || void 0 === t ? void 0 : t._locales.split(" "),
                          e = Sa.supplemental.languageMatching["written-new"].slice(1, 5),
                          r = Sa.supplemental.languageMatching["written-new"].slice(5).map((function(a) {
                            var t = Object.keys(a)[0],
                              n = a[t];
                            return {
                              supported: t,
                              desired: n._desired,
                              distance: +n._distance,
                              oneway: "true" === n.oneway
                            }
                          }), {});
                        za = {
                          matches: r,
                          matchVariables: e.reduce((function(a, t) {
                            var n = Object.keys(t)[0],
                              e = t[n];
                            return a[n.slice(1)] = e._value.split("+"), a
                          }), {}),
                          paradigmLocales: (0, Pa.__spreadArray)((0, Pa.__spreadArray)([], n, !0), n.map((function(a) {
                            return new Intl.Locale(a.replace(/_/g, "-")).maximize().toString()
                          })), !0)
                        }
                      }
                      return za
                    }();
                  return r.language !== i.language && (L += Ba({
                    language: n.language,
                    script: "",
                    region: ""
                  }, {
                    language: e.language,
                    script: "",
                    region: ""
                  }, s)), r.script !== i.script && (L += Ba({
                    language: n.language,
                    script: r.script,
                    region: ""
                  }, {
                    language: e.language,
                    script: r.script,
                    region: ""
                  }, s)), r.region !== i.region && (L += Ba(r, i, s)), L
                }(a, t) + 0 + 40 * n;
                r.distances[a][t] = i, i < e && (e = i, r.matchedDesiredLocale = a, r.matchedSupportedLocale = t)
              }))
            })), e >= n && (r.matchedDesiredLocale = void 0, r.matchedSupportedLocale = void 0), r
          }(i, a);
        return s.matchedSupportedLocale && s.matchedDesiredLocale && (e = s.matchedSupportedLocale, r = L[s.matchedDesiredLocale].slice(s.matchedDesiredLocale.length) || void 0), e ? {
          locale: e,
          extension: r
        } : {
          locale: n()
        }
      }

      function qa(a, t) {
        for (var n = t;;) {
          if (a.indexOf(n) > -1) return n;
          var e = n.lastIndexOf("-");
          if (!~e) return;
          e >= 2 && "-" === n[e - 2] && (e -= 2), n = n.slice(0, e)
        }
      }

      function Ha(a, t) {
        ja(2 === t.length, "key must have 2 elements");
        var n = a.length,
          e = "-".concat(t, "-"),
          r = a.indexOf(e);
        if (-1 !== r) {
          for (var i = r + 4, L = i, s = i, l = !1; !l;) {
            var o = a.indexOf("-", s);
            2 == (-1 === o ? n - s : o - s) ? l = !0 : -1 === o ? (L = n, l = !0) : (L = o, s = o + 1)
          }
          return a.slice(i, L)
        }
        if (e = "-".concat(t), -1 !== (r = a.indexOf(e)) && r + 3 === n) return ""
      }

      function Fa(a, t, n, e, r) {
        var i = U(t, "minimumIntegerDigits", 1, 21, 1),
          L = t.minimumFractionDigits,
          s = t.maximumFractionDigits,
          l = t.minimumSignificantDigits,
          o = t.maximumSignificantDigits;
        a.minimumIntegerDigits = i;
        var u = E(t, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto"),
          m = void 0 !== l || void 0 !== o,
          d = void 0 !== L || void 0 !== s,
          c = !0,
          g = !0;
        if ("auto" === u && (c = m, (m || !d && "compact" === r) && (g = !1)), c && (m ? (l = _(l, 1, 21, 1), o = _(o, l, 21, 21), a.minimumSignificantDigits = l, a.maximumSignificantDigits = o) : (a.minimumSignificantDigits = 1, a.maximumSignificantDigits = 21)), g)
          if (d) {
            if (L = _(L, 0, 20, void 0), s = _(s, 0, 20, void 0), void 0 === L) L = Math.min(n, s);
            else if (void 0 === s) s = Math.max(e, L);
            else if (L > s) throw new RangeError("Invalid range, ".concat(L, " > ").concat(s));
            a.minimumFractionDigits = L, a.maximumFractionDigits = s
          } else a.minimumFractionDigits = n, a.maximumFractionDigits = e;
        c || g ? a.roundingType = "morePrecision" === u ? "morePrecision" : "lessPrecision" === u ? "lessPrecision" : m ? "significantDigits" : "fractionDigits" : (a.roundingType = "morePrecision", a.minimumFractionDigits = 0, a.maximumFractionDigits = 0, a.minimumSignificantDigits = 1, a.maximumSignificantDigits = 2)
      }

      function Ka(a, t, n) {
        void 0 === t && (t = Object.create(null));
        var e = (0, n.getInternalSlots)(a),
          r = E(t, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
        e.style = r;
        var i = E(t, "currency", "string", void 0, void 0);
        if (void 0 !== i && !X(i)) throw RangeError("Malformed currency code");
        if ("currency" === r && void 0 === i) throw TypeError("currency cannot be undefined");
        var L = E(t, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol"),
          s = E(t, "currencySign", "string", ["standard", "accounting"], "standard"),
          l = E(t, "unit", "string", void 0, void 0);
        if (void 0 !== l && !Y(l)) throw RangeError("Invalid unit argument for Intl.NumberFormat()");
        if ("unit" === r && void 0 === l) throw TypeError("unit cannot be undefined");
        var o = E(t, "unitDisplay", "string", ["short", "narrow", "long"], "short");
        "currency" === r && (e.currency = i.toUpperCase(), e.currencyDisplay = L, e.currencySign = s), "unit" === r && (e.unit = l, e.unitDisplay = o)
      }
      var Oa, Va, Xa = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3];

      function Ya(a, t, n, r) {
        var i = r.getInternalSlots,
          L = r.localeData,
          s = r.availableLocales,
          l = r.numberingSystemNames,
          o = r.getDefaultLocale,
          u = r.currencyDigitsData,
          m = e(t),
          d = z(n),
          c = Object.create(null),
          g = E(d, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
        c.localeMatcher = g;
        var b = E(d, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== b && l.indexOf(b) < 0) throw RangeError("Invalid numberingSystems: ".concat(b));
        c.nu = b;
        var h = function(a, t, n, e, r, i) {
            var L;
            L = "lookup" === n.localeMatcher ? function(a, t, n) {
              for (var e = {
                  locale: ""
                }, r = 0, i = t; r < i.length; r++) {
                var L = i[r],
                  s = L.replace(Ta, ""),
                  l = qa(a, s);
                if (l) return e.locale = l, L !== s && (e.extension = L.slice(s.length, L.length)), e
              }
              return e.locale = n(), e
            }(Array.from(a), t, i) : Ra(Array.from(a), t, i);
            for (var s = L.locale, l = {
                locale: "",
                dataLocale: s
              }, o = "-u", u = 0, m = e; u < m.length; u++) {
              var d = m[u];
              ja(s in r, "Missing locale data for ".concat(s));
              var c = r[s];
              ja("object" == typeof c && null !== c, "locale data ".concat(d, " must be an object"));
              var g = c[d];
              ja(Array.isArray(g), "keyLocaleData for ".concat(d, " must be an array"));
              var b = g[0];
              ja("string" == typeof b || null === b, "value must be string or null but got ".concat(typeof b, " in key ").concat(d));
              var h = "";
              if (L.extension) {
                var k = Ha(L.extension, d);
                void 0 !== k && ("" !== k ? ~g.indexOf(k) && (b = k, h = "-".concat(d, "-").concat(b)) : ~k.indexOf("true") && (b = "true", h = "-".concat(d)))
              }
              if (d in n) {
                var y = n[d];
                ja("string" == typeof y || null == y, "optionsValue must be String, Undefined or Null"), ~g.indexOf(y) && y !== b && (b = y, h = "")
              }
              l[d] = b, o += h
            }
            if (o.length > 2) {
              var f = s.indexOf("-x-");
              if (-1 === f) s += o;
              else {
                var p = s.slice(0, f),
                  D = s.slice(f, s.length);
                s = p + o + D
              }
              s = Intl.getCanonicalLocales(s)[0]
            }
            return l.locale = s, l
          }(Array.from(s), m, c, ["nu"], L, o),
          k = L[h.dataLocale];
        La(!!k, "Missing locale data for ".concat(h.dataLocale));
        var y = i(a);
        y.locale = h.locale, y.dataLocale = h.dataLocale, y.numberingSystem = h.nu, y.dataLocaleData = k, Ka(a, d, {
          getInternalSlots: i
        });
        var f, p, D = y.style;
        if ("currency" === D) {
          var A = da(y.currency, {
            currencyDigitsData: u
          });
          f = A, p = A
        } else f = 0, p = "percent" === D ? 0 : 3;
        var w = E(d, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
        y.notation = w, Fa(y, d, f, p, w);
        var v = U(d, "roundingIncrement", 1, 5e3, 1);
        if (-1 === Xa.indexOf(v)) throw new RangeError("Invalid rounding increment value: ".concat(v, ".\nValid values are ").concat(Xa, "."));
        if (1 !== v && "fractionDigits" !== y.roundingType) throw new TypeError("For roundingIncrement > 1 only fractionDigits is a valid roundingType");
        if (1 !== v && y.maximumFractionDigits !== y.minimumFractionDigits) throw new RangeError("With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.");
        y.roundingIncrement = v;
        var M = E(d, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
        y.trailingZeroDisplay = M;
        var N = E(d, "compactDisplay", "string", ["short", "long"], "short"),
          C = "auto";
        return "compact" === w && (y.compactDisplay = N, C = "min2"), y.useGrouping = R(d, "useGrouping", ["min2", "auto", "always"], "always", !1, C), y.signDisplay = E(d, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto"), y.roundingMode = E(d, "roundingMode", "string", ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"], "halfExpand"), a
      }

      function Wa(a) {
        for (var t = [], n = a.indexOf("{"), e = 0, r = 0, i = a.length; n < a.length && n > -1;) La((e = a.indexOf("}", n)) > n, "Invalid pattern ".concat(a)), n > r && t.push({
          type: "literal",
          value: a.substring(r, n)
        }), t.push({
          type: a.substring(n + 1, e),
          value: void 0
        }), r = e + 1, n = a.indexOf("{", r);
        return r < i && t.push({
          type: "literal",
          value: a.substring(r, i)
        }), t
      }

      function Ja(a, t, n) {
        return void 0 !== n && E(n = l(n), "localeMatcher", "string", ["lookup", "best fit"], "best fit"),
          function(a, t) {
            for (var n = [], e = 0, r = t; e < r.length; e++) {
              var i = qa(a, r[e].replace(Ta, ""));
              i && n.push(i)
            }
            return n
          }(Array.from(a), t)
      }

      function Qa(a) {
        return "MISSING_LOCALE_DATA" === a.type
      }
      Va = Error, (0, Pa.__extends)((function() {
          var a = null !== Va && Va.apply(this, arguments) || this;
          return a.type = "MISSING_LOCALE_DATA", a
        }), Va),
        function(a) {
          a.startRange = "startRange", a.shared = "shared", a.endRange = "endRange"
        }(Oa || (Oa = {}))
    },
    76941: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.timezones = void 0, t.timezones = {
        ad: ["Europe/Andorra"],
        ae: ["Asia/Dubai"],
        af: ["Asia/Kabul"],
        ag: ["America/Antigua"],
        ai: ["America/Anguilla"],
        al: ["Europe/Tirane"],
        am: ["Asia/Yerevan"],
        an: ["America/Curacao"],
        ao: ["Africa/Luanda"],
        aq: ["Pacific/Auckland", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok"],
        ar: ["America/Buenos_Aires", "America/Cordoba", "America/Catamarca", "America/Argentina/La_Rioja", "America/Jujuy", "America/Argentina/San_Luis", "America/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/Tucuman", "America/Argentina/San_Juan", "America/Argentina/Ushuaia"],
        as: ["Pacific/Pago_Pago"],
        at: ["Europe/Vienna"],
        au: ["Australia/Adelaide", "Australia/Broken_Hill", "Australia/Brisbane", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Currie", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Antarctica/Macquarie", "Australia/Perth", "Australia/Sydney"],
        aw: ["America/Aruba"],
        az: ["Asia/Baku"],
        ba: ["Europe/Sarajevo"],
        bb: ["America/Barbados"],
        bd: ["Asia/Dhaka"],
        be: ["Europe/Brussels"],
        bf: ["Africa/Ouagadougou"],
        bg: ["Europe/Sofia"],
        bh: ["Asia/Bahrain"],
        bi: ["Africa/Bujumbura"],
        bj: ["Africa/Porto-Novo"],
        bm: ["Atlantic/Bermuda"],
        bn: ["Asia/Brunei"],
        bo: ["America/La_Paz"],
        bq: ["America/Kralendijk"],
        br: ["America/Araguaina", "America/Belem", "America/Boa_Vista", "America/Cuiaba", "America/Campo_Grande", "America/Eirunepe", "America/Noronha", "America/Fortaleza", "America/Manaus", "America/Maceio", "America/Porto_Velho", "America/Rio_Branco", "America/Recife", "America/Sao_Paulo", "America/Bahia", "America/Santarem"],
        bs: ["America/Nassau"],
        bt: ["Asia/Thimphu"],
        bw: ["Africa/Gaborone"],
        by: ["Europe/Minsk"],
        bz: ["America/Belize"],
        ca: ["America/Creston", "America/Edmonton", "America/Rainy_River", "America/Fort_Nelson", "America/Glace_Bay", "America/Goose_Bay", "America/Halifax", "America/Iqaluit", "America/Moncton", "America/Toronto", "America/Nipigon", "America/Pangnirtung", "America/Resolute", "America/Regina", "America/St_Johns", "America/Thunder_Bay", "America/Toronto", "America/Vancouver", "America/Winnipeg", "America/Blanc-Sablon", "America/Cambridge_Bay", "America/Dawson", "America/Dawson_Creek", "America/Rankin_Inlet", "America/Inuvik", "America/Whitehorse", "America/Swift_Current", "America/Yellowknife", "America/Coral_Harbour"],
        cc: ["Indian/Cocos"],
        cd: ["Africa/Lubumbashi", "Africa/Kinshasa"],
        cf: ["Africa/Bangui"],
        cg: ["Africa/Brazzaville"],
        ch: ["Europe/Zurich"],
        ci: ["Africa/Abidjan"],
        ck: ["Pacific/Rarotonga"],
        cl: ["Pacific/Easter", "America/Punta_Arenas", "America/Santiago"],
        cm: ["Africa/Douala"],
        cn: ["Asia/Shanghai", "Asia/Shanghai", "Asia/Urumqi", "Asia/Shanghai", "Asia/Urumqi"],
        co: ["America/Bogota"],
        cr: ["America/Costa_Rica"],
        cs: ["CST6CDT"],
        cu: ["America/Havana"],
        cv: ["Atlantic/Cape_Verde"],
        cx: ["Indian/Christmas"],
        cy: ["Asia/Famagusta", "Asia/Nicosia"],
        cz: ["Europe/Prague"],
        de: ["Europe/Berlin", "Europe/Busingen"],
        dj: ["Africa/Djibouti"],
        dk: ["Europe/Copenhagen"],
        dm: ["America/Dominica"],
        do: ["America/Santo_Domingo"],
        dz: ["Africa/Algiers"],
        ec: ["Pacific/Galapagos", "America/Guayaquil"],
        ee: ["Europe/Tallinn"],
        eg: ["Africa/Cairo"],
        eh: ["Africa/El_Aaiun"],
        er: ["Africa/Asmera"],
        es: ["Africa/Ceuta", "Atlantic/Canary", "Europe/Madrid", "EST5EDT"],
        et: ["Africa/Addis_Ababa"],
        fi: ["Europe/Helsinki", "Europe/Mariehamn"],
        fj: ["Pacific/Fiji"],
        fk: ["Atlantic/Stanley"],
        fm: ["Pacific/Kosrae", "Pacific/Ponape", "Pacific/Truk"],
        fo: ["Atlantic/Faeroe"],
        fr: ["Europe/Paris"],
        ga: ["Africa/Libreville", "Asia/Gaza", "Asia/Gaza"],
        gb: ["Europe/London"],
        gd: ["America/Grenada"],
        ge: ["Asia/Tbilisi"],
        gf: ["America/Cayenne"],
        gg: ["Europe/Guernsey"],
        gh: ["Africa/Accra"],
        gi: ["Europe/Gibraltar"],
        gl: ["America/Danmarkshavn", "America/Godthab", "America/Scoresbysund", "America/Thule"],
        gm: ["Africa/Banjul", "Etc/GMT"],
        gn: ["Africa/Conakry"],
        gp: ["America/Guadeloupe", "America/Marigot", "America/St_Barthelemy"],
        gq: ["Africa/Malabo"],
        gr: ["Europe/Athens"],
        gs: ["Atlantic/South_Georgia"],
        gt: ["America/Guatemala"],
        gu: ["Pacific/Guam"],
        gw: ["Africa/Bissau"],
        gy: ["America/Guyana"],
        he: ["Asia/Hebron"],
        hk: ["Asia/Hong_Kong"],
        hn: ["America/Tegucigalpa"],
        hr: ["Europe/Zagreb"],
        ht: ["America/Port-au-Prince"],
        hu: ["Europe/Budapest"],
        id: ["Asia/Jayapura", "Asia/Jakarta", "Asia/Makassar", "Asia/Pontianak"],
        ie: ["Europe/Dublin"],
        im: ["Europe/Isle_of_Man"],
        in: ["Asia/Calcutta"],
        io: ["Indian/Chagos"],
        iq: ["Asia/Baghdad"],
        ir: ["Asia/Tehran"],
        is: ["Atlantic/Reykjavik"],
        it: ["Europe/Rome"],
        je: ["Asia/Jerusalem", "Europe/Jersey"],
        jm: ["America/Jamaica"],
        jo: ["Asia/Amman"],
        jp: ["Asia/Tokyo"],
        ke: ["Africa/Nairobi"],
        kg: ["Asia/Bishkek"],
        kh: ["Asia/Phnom_Penh"],
        ki: ["Pacific/Kiritimati", "Pacific/Enderbury", "Pacific/Tarawa"],
        km: ["Indian/Comoro"],
        kn: ["America/St_Kitts"],
        kp: ["Asia/Pyongyang"],
        kr: ["Asia/Seoul"],
        kw: ["Asia/Kuwait"],
        ky: ["America/Cayman"],
        kz: ["Asia/Aqtau", "Asia/Aqtobe", "Asia/Almaty", "Asia/Atyrau", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Oral"],
        la: ["Asia/Vientiane"],
        lb: ["Asia/Beirut"],
        lc: ["America/St_Lucia"],
        li: ["Europe/Vaduz"],
        lk: ["Asia/Colombo"],
        lr: ["Africa/Monrovia"],
        ls: ["Africa/Maseru"],
        lt: ["Europe/Vilnius"],
        lu: ["Europe/Luxembourg"],
        lv: ["Europe/Riga"],
        ly: ["Africa/Tripoli"],
        ma: ["Africa/Casablanca"],
        mc: ["Europe/Monaco"],
        md: ["Europe/Chisinau"],
        me: ["Europe/Podgorica"],
        mg: ["Indian/Antananarivo"],
        mh: ["Pacific/Kwajalein", "Pacific/Majuro"],
        mk: ["Europe/Skopje"],
        ml: ["Africa/Bamako"],
        mm: ["Asia/Rangoon"],
        mn: ["Asia/Choibalsan", "Asia/Hovd", "Asia/Ulaanbaatar"],
        mo: ["Asia/Macau"],
        mp: ["Pacific/Saipan"],
        mq: ["America/Martinique"],
        mr: ["Africa/Nouakchott"],
        ms: ["America/Montserrat", "MST7MDT"],
        mt: ["Europe/Malta"],
        mu: ["Indian/Mauritius"],
        mv: ["Indian/Maldives"],
        mw: ["Africa/Blantyre"],
        mx: ["America/Chihuahua", "America/Ciudad_Juarez", "America/Cancun", "America/Hermosillo", "America/Matamoros", "America/Mexico_City", "America/Merida", "America/Monterrey", "America/Mazatlan", "America/Ojinaga", "America/Bahia_Banderas", "America/Santa_Isabel", "America/Tijuana"],
        my: ["Asia/Kuching", "Asia/Kuala_Lumpur"],
        mz: ["Africa/Maputo"],
        na: ["Africa/Windhoek"],
        nc: ["Pacific/Noumea"],
        ne: ["Africa/Niamey"],
        nf: ["Pacific/Norfolk"],
        ng: ["Africa/Lagos"],
        ni: ["America/Managua"],
        nl: ["Europe/Amsterdam"],
        no: ["Europe/Oslo"],
        np: ["Asia/Katmandu"],
        nr: ["Pacific/Nauru"],
        nu: ["Pacific/Niue"],
        nz: ["Pacific/Auckland", "Pacific/Chatham"],
        om: ["Asia/Muscat"],
        pa: ["America/Panama"],
        pe: ["America/Lima"],
        pf: ["Pacific/Gambier", "Pacific/Marquesas", "Pacific/Tahiti"],
        pg: ["Pacific/Port_Moresby", "Pacific/Bougainville"],
        ph: ["Asia/Manila"],
        pk: ["Asia/Karachi"],
        pl: ["Europe/Warsaw"],
        pm: ["America/Miquelon"],
        pn: ["Pacific/Pitcairn"],
        pr: ["America/Puerto_Rico"],
        ps: ["PST8PDT"],
        pt: ["Atlantic/Madeira", "Europe/Lisbon", "Atlantic/Azores"],
        pw: ["Pacific/Palau"],
        py: ["America/Asuncion"],
        qa: ["Asia/Qatar"],
        re: ["Indian/Reunion"],
        ro: ["Europe/Bucharest"],
        rs: ["Europe/Belgrade"],
        ru: ["Europe/Astrakhan", "Asia/Barnaul", "Asia/Chita", "Asia/Anadyr", "Asia/Magadan", "Asia/Irkutsk", "Europe/Kaliningrad", "Asia/Khandyga", "Asia/Krasnoyarsk", "Europe/Samara", "Europe/Kirov", "Europe/Moscow", "Asia/Novokuznetsk", "Asia/Omsk", "Asia/Novosibirsk", "Asia/Kamchatka", "Europe/Saratov", "Asia/Srednekolymsk", "Asia/Tomsk", "Europe/Ulyanovsk", "Asia/Ust-Nera", "Asia/Sakhalin", "Europe/Volgograd", "Asia/Vladivostok", "Asia/Yekaterinburg", "Asia/Yakutsk"],
        rw: ["Africa/Kigali"],
        sa: ["Asia/Riyadh"],
        sb: ["Pacific/Guadalcanal"],
        sc: ["Indian/Mahe"],
        sd: ["Africa/Khartoum"],
        se: ["Europe/Stockholm"],
        sg: ["Asia/Singapore"],
        sh: ["Atlantic/St_Helena"],
        si: ["Europe/Ljubljana"],
        sj: ["Arctic/Longyearbyen"],
        sk: ["Europe/Bratislava"],
        sl: ["Africa/Freetown"],
        sm: ["Europe/San_Marino"],
        sn: ["Africa/Dakar"],
        so: ["Africa/Mogadishu"],
        sr: ["America/Paramaribo"],
        ss: ["Africa/Juba"],
        st: ["Africa/Sao_Tome"],
        sv: ["America/El_Salvador"],
        sx: ["America/Lower_Princes"],
        sy: ["Asia/Damascus"],
        sz: ["Africa/Mbabane"],
        tc: ["America/Grand_Turk"],
        td: ["Africa/Ndjamena"],
        tf: ["Indian/Kerguelen"],
        tg: ["Africa/Lome"],
        th: ["Asia/Bangkok"],
        tj: ["Asia/Dushanbe"],
        tk: ["Pacific/Fakaofo"],
        tl: ["Asia/Dili"],
        tm: ["Asia/Ashgabat"],
        tn: ["Africa/Tunis"],
        to: ["Pacific/Tongatapu"],
        tr: ["Europe/Istanbul"],
        tt: ["America/Port_of_Spain"],
        tv: ["Pacific/Funafuti"],
        tw: ["Asia/Taipei"],
        tz: ["Africa/Dar_es_Salaam"],
        ua: ["Europe/Kiev", "Europe/Zaporozhye", "Europe/Simferopol", "Europe/Uzhgorod"],
        ug: ["Africa/Kampala"],
        um: ["Pacific/Wake", "Pacific/Johnston", "Pacific/Midway"],
        un: ["Etc/Unknown"],
        us: ["America/Adak", "America/Indiana/Marengo", "America/Anchorage", "America/Boise", "America/Chicago", "America/Denver", "America/Detroit", "Pacific/Honolulu", "America/Indianapolis", "America/Indiana/Vevay", "America/Juneau", "America/Indiana/Knox", "America/Los_Angeles", "America/Louisville", "America/Menominee", "America/Kentucky/Monticello", "America/Metlakatla", "America/Denver", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/New_York", "America/Indiana/Vincennes", "America/Nome", "America/Phoenix", "America/Sitka", "America/Indiana/Tell_City", "America/Indiana/Winamac", "America/Indiana/Petersburg", "America/North_Dakota/Beulah", "America/Yakutat"],
        ut: ["Etc/UTC", "Etc/GMT-1", "Etc/GMT-2", "Etc/GMT-3", "Etc/GMT-4", "Etc/GMT-5", "Etc/GMT-6", "Etc/GMT-7", "Etc/GMT-8", "Etc/GMT-9", "Etc/GMT-10", "Etc/GMT-11", "Etc/GMT-12", "Etc/GMT-13", "Etc/GMT-14", "Etc/GMT+1", "Etc/GMT+2", "Etc/GMT+3", "Etc/GMT+4", "Etc/GMT+5", "Etc/GMT+6", "Etc/GMT+7", "Etc/GMT+8", "Etc/GMT+9", "Etc/GMT+10", "Etc/GMT+11", "Etc/GMT+12"],
        uy: ["America/Montevideo"],
        uz: ["Asia/Samarkand", "Asia/Tashkent"],
        va: ["Europe/Vatican"],
        vc: ["America/St_Vincent"],
        ve: ["America/Caracas"],
        vg: ["America/Tortola"],
        vi: ["America/St_Thomas"],
        vn: ["Asia/Saigon"],
        vu: ["Pacific/Efate"],
        wf: ["Pacific/Wallis"],
        ws: ["Pacific/Apia"],
        ye: ["Asia/Aden"],
        yt: ["Indian/Mayotte"],
        za: ["Africa/Johannesburg"],
        zm: ["Africa/Lusaka"],
        zw: ["Africa/Harare"]
      }
    },
    77091: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.calendars = void 0, t.calendars = ["buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "gregory", "hebrew", "indian", "islamic", "islamic-civil", "islamic-rgsa", "islamic-tbla", "islamic-umalqura", "islamicc", "iso8601", "japanese", "persian", "roc"]
    },
    77727: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.supportedValuesOf = void 0;
      var e = n(54902),
        r = n(66545),
        i = n(28358),
        L = n(57733),
        s = n(11961),
        l = n(50894);
      t.supportedValuesOf = function(a, t) {
        switch (a) {
          case "calendar":
            return (0, e.getSupportedCalendars)(t);
          case "collation":
            return (0, r.getSupportedCollations)(t);
          case "currency":
            return (0, i.getSupportedCurrencies)(t);
          case "numberingSystem":
            return (0, L.getSupportedNumberingSystems)(t);
          case "timeZone":
            return (0, s.getSupportedTimeZones)(t);
          case "unit":
            return (0, l.getSupportedUnits)(t);
          default:
            throw RangeError("Invalid key: " + a)
        }
      }
    },
    79285: (a, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var e = n(40102);
      Object.defineProperty(Intl, "Locale", {
        value: e.Locale,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    89232: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.numberingSystemNames = void 0, t.numberingSystemNames = ["adlm", "ahom", "arab", "arabext", "armn", "armnlow", "bali", "beng", "bhks", "brah", "cakm", "cham", "cyrl", "deva", "diak", "ethi", "fullwide", "geor", "gong", "gonm", "grek", "greklow", "gujr", "guru", "hanidays", "hanidec", "hans", "hansfin", "hant", "hantfin", "hebr", "hmng", "hmnp", "java", "jpan", "jpanfin", "jpanyear", "kali", "kawi", "khmr", "knda", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "nagm", "newa", "nkoo", "olck", "orya", "osma", "rohg", "roman", "romanlow", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "taml", "tamldec", "telu", "thai", "tibt", "tirh", "tnsa", "vaii", "wara", "wcho"]
    },
    95728: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.characterOrders = void 0, t.characterOrders = {
        aa: "left-to-right",
        "aa-DJ": "left-to-right",
        "aa-ER": "left-to-right",
        ab: "left-to-right",
        af: "left-to-right",
        "af-NA": "left-to-right",
        agq: "left-to-right",
        ak: "left-to-right",
        am: "left-to-right",
        an: "left-to-right",
        ann: "left-to-right",
        apc: "right-to-left",
        ar: "right-to-left",
        "ar-AE": "right-to-left",
        "ar-BH": "right-to-left",
        "ar-DJ": "right-to-left",
        "ar-DZ": "right-to-left",
        "ar-EG": "right-to-left",
        "ar-EH": "right-to-left",
        "ar-ER": "right-to-left",
        "ar-IL": "right-to-left",
        "ar-IQ": "right-to-left",
        "ar-JO": "right-to-left",
        "ar-KM": "right-to-left",
        "ar-KW": "right-to-left",
        "ar-LB": "right-to-left",
        "ar-LY": "right-to-left",
        "ar-MA": "right-to-left",
        "ar-MR": "right-to-left",
        "ar-OM": "right-to-left",
        "ar-PS": "right-to-left",
        "ar-QA": "right-to-left",
        "ar-SA": "right-to-left",
        "ar-SD": "right-to-left",
        "ar-SO": "right-to-left",
        "ar-SS": "right-to-left",
        "ar-SY": "right-to-left",
        "ar-TD": "right-to-left",
        "ar-TN": "right-to-left",
        "ar-YE": "right-to-left",
        arn: "left-to-right",
        as: "left-to-right",
        asa: "left-to-right",
        ast: "left-to-right",
        az: "left-to-right",
        "az-Arab": "right-to-left",
        "az-Arab-IQ": "right-to-left",
        "az-Arab-TR": "right-to-left",
        "az-Cyrl": "left-to-right",
        "az-Latn": "left-to-right",
        ba: "left-to-right",
        bal: "right-to-left",
        "bal-Arab": "right-to-left",
        "bal-Latn": "left-to-right",
        bas: "left-to-right",
        be: "left-to-right",
        "be-tarask": "left-to-right",
        bem: "left-to-right",
        bez: "left-to-right",
        bg: "left-to-right",
        bgc: "left-to-right",
        bgn: "right-to-left",
        "bgn-AE": "right-to-left",
        "bgn-AF": "right-to-left",
        "bgn-IR": "right-to-left",
        "bgn-OM": "right-to-left",
        bho: "left-to-right",
        blt: "left-to-right",
        bm: "left-to-right",
        "bm-Nkoo": "right-to-left",
        bn: "left-to-right",
        "bn-IN": "left-to-right",
        bo: "left-to-right",
        "bo-IN": "left-to-right",
        br: "left-to-right",
        brx: "left-to-right",
        bs: "left-to-right",
        "bs-Cyrl": "left-to-right",
        "bs-Latn": "left-to-right",
        bss: "left-to-right",
        byn: "left-to-right",
        ca: "left-to-right",
        "ca-AD": "left-to-right",
        "ca-ES-valencia": "left-to-right",
        "ca-FR": "left-to-right",
        "ca-IT": "left-to-right",
        cad: "left-to-right",
        cch: "left-to-right",
        ccp: "left-to-right",
        "ccp-IN": "left-to-right",
        ce: "left-to-right",
        ceb: "left-to-right",
        cgg: "left-to-right",
        cho: "left-to-right",
        chr: "left-to-right",
        cic: "left-to-right",
        ckb: "right-to-left",
        "ckb-IR": "right-to-left",
        co: "left-to-right",
        cs: "left-to-right",
        cu: "left-to-right",
        cv: "left-to-right",
        cy: "left-to-right",
        da: "left-to-right",
        "da-GL": "left-to-right",
        dav: "left-to-right",
        de: "left-to-right",
        "de-AT": "left-to-right",
        "de-BE": "left-to-right",
        "de-CH": "left-to-right",
        "de-IT": "left-to-right",
        "de-LI": "left-to-right",
        "de-LU": "left-to-right",
        dje: "left-to-right",
        doi: "left-to-right",
        dsb: "left-to-right",
        dua: "left-to-right",
        dv: "right-to-left",
        dyo: "left-to-right",
        dz: "left-to-right",
        ebu: "left-to-right",
        ee: "left-to-right",
        "ee-TG": "left-to-right",
        el: "left-to-right",
        "el-CY": "left-to-right",
        "el-polyton": "left-to-right",
        en: "left-to-right",
        "en-001": "left-to-right",
        "en-150": "left-to-right",
        "en-AE": "left-to-right",
        "en-AG": "left-to-right",
        "en-AI": "left-to-right",
        "en-AS": "left-to-right",
        "en-AT": "left-to-right",
        "en-AU": "left-to-right",
        "en-BB": "left-to-right",
        "en-BE": "left-to-right",
        "en-BI": "left-to-right",
        "en-BM": "left-to-right",
        "en-BS": "left-to-right",
        "en-BW": "left-to-right",
        "en-BZ": "left-to-right",
        "en-CA": "left-to-right",
        "en-CC": "left-to-right",
        "en-CH": "left-to-right",
        "en-CK": "left-to-right",
        "en-CM": "left-to-right",
        "en-CX": "left-to-right",
        "en-CY": "left-to-right",
        "en-DE": "left-to-right",
        "en-DG": "left-to-right",
        "en-DK": "left-to-right",
        "en-DM": "left-to-right",
        "en-Dsrt": "left-to-right",
        "en-ER": "left-to-right",
        "en-FI": "left-to-right",
        "en-FJ": "left-to-right",
        "en-FK": "left-to-right",
        "en-FM": "left-to-right",
        "en-GB": "left-to-right",
        "en-GD": "left-to-right",
        "en-GG": "left-to-right",
        "en-GH": "left-to-right",
        "en-GI": "left-to-right",
        "en-GM": "left-to-right",
        "en-GU": "left-to-right",
        "en-GY": "left-to-right",
        "en-HK": "left-to-right",
        "en-IE": "left-to-right",
        "en-IL": "left-to-right",
        "en-IM": "left-to-right",
        "en-IN": "left-to-right",
        "en-IO": "left-to-right",
        "en-JE": "left-to-right",
        "en-JM": "left-to-right",
        "en-KE": "left-to-right",
        "en-KI": "left-to-right",
        "en-KN": "left-to-right",
        "en-KY": "left-to-right",
        "en-LC": "left-to-right",
        "en-LR": "left-to-right",
        "en-LS": "left-to-right",
        "en-MG": "left-to-right",
        "en-MH": "left-to-right",
        "en-MO": "left-to-right",
        "en-MP": "left-to-right",
        "en-MS": "left-to-right",
        "en-MT": "left-to-right",
        "en-MU": "left-to-right",
        "en-MV": "left-to-right",
        "en-MW": "left-to-right",
        "en-MY": "left-to-right",
        "en-NA": "left-to-right",
        "en-NF": "left-to-right",
        "en-NG": "left-to-right",
        "en-NL": "left-to-right",
        "en-NR": "left-to-right",
        "en-NU": "left-to-right",
        "en-NZ": "left-to-right",
        "en-PG": "left-to-right",
        "en-PH": "left-to-right",
        "en-PK": "left-to-right",
        "en-PN": "left-to-right",
        "en-PR": "left-to-right",
        "en-PW": "left-to-right",
        "en-RW": "left-to-right",
        "en-SB": "left-to-right",
        "en-SC": "left-to-right",
        "en-SD": "left-to-right",
        "en-SE": "left-to-right",
        "en-SG": "left-to-right",
        "en-SH": "left-to-right",
        "en-Shaw": "left-to-right",
        "en-SI": "left-to-right",
        "en-SL": "left-to-right",
        "en-SS": "left-to-right",
        "en-SX": "left-to-right",
        "en-SZ": "left-to-right",
        "en-TC": "left-to-right",
        "en-TK": "left-to-right",
        "en-TO": "left-to-right",
        "en-TT": "left-to-right",
        "en-TV": "left-to-right",
        "en-TZ": "left-to-right",
        "en-UG": "left-to-right",
        "en-UM": "left-to-right",
        "en-VC": "left-to-right",
        "en-VG": "left-to-right",
        "en-VI": "left-to-right",
        "en-VU": "left-to-right",
        "en-WS": "left-to-right",
        "en-ZA": "left-to-right",
        "en-ZM": "left-to-right",
        "en-ZW": "left-to-right",
        eo: "left-to-right",
        es: "left-to-right",
        "es-419": "left-to-right",
        "es-AR": "left-to-right",
        "es-BO": "left-to-right",
        "es-BR": "left-to-right",
        "es-BZ": "left-to-right",
        "es-CL": "left-to-right",
        "es-CO": "left-to-right",
        "es-CR": "left-to-right",
        "es-CU": "left-to-right",
        "es-DO": "left-to-right",
        "es-EA": "left-to-right",
        "es-EC": "left-to-right",
        "es-GQ": "left-to-right",
        "es-GT": "left-to-right",
        "es-HN": "left-to-right",
        "es-IC": "left-to-right",
        "es-MX": "left-to-right",
        "es-NI": "left-to-right",
        "es-PA": "left-to-right",
        "es-PE": "left-to-right",
        "es-PH": "left-to-right",
        "es-PR": "left-to-right",
        "es-PY": "left-to-right",
        "es-SV": "left-to-right",
        "es-US": "left-to-right",
        "es-UY": "left-to-right",
        "es-VE": "left-to-right",
        et: "left-to-right",
        eu: "left-to-right",
        ewo: "left-to-right",
        fa: "right-to-left",
        "fa-AF": "right-to-left",
        ff: "left-to-right",
        "ff-Adlm": "right-to-left",
        "ff-Adlm-BF": "right-to-left",
        "ff-Adlm-CM": "right-to-left",
        "ff-Adlm-GH": "right-to-left",
        "ff-Adlm-GM": "right-to-left",
        "ff-Adlm-GW": "right-to-left",
        "ff-Adlm-LR": "right-to-left",
        "ff-Adlm-MR": "right-to-left",
        "ff-Adlm-NE": "right-to-left",
        "ff-Adlm-NG": "right-to-left",
        "ff-Adlm-SL": "right-to-left",
        "ff-Adlm-SN": "right-to-left",
        "ff-Latn": "left-to-right",
        "ff-Latn-BF": "left-to-right",
        "ff-Latn-CM": "left-to-right",
        "ff-Latn-GH": "left-to-right",
        "ff-Latn-GM": "left-to-right",
        "ff-Latn-GN": "left-to-right",
        "ff-Latn-GW": "left-to-right",
        "ff-Latn-LR": "left-to-right",
        "ff-Latn-MR": "left-to-right",
        "ff-Latn-NE": "left-to-right",
        "ff-Latn-NG": "left-to-right",
        "ff-Latn-SL": "left-to-right",
        fi: "left-to-right",
        fil: "left-to-right",
        fo: "left-to-right",
        "fo-DK": "left-to-right",
        fr: "left-to-right",
        "fr-BE": "left-to-right",
        "fr-BF": "left-to-right",
        "fr-BI": "left-to-right",
        "fr-BJ": "left-to-right",
        "fr-BL": "left-to-right",
        "fr-CA": "left-to-right",
        "fr-CD": "left-to-right",
        "fr-CF": "left-to-right",
        "fr-CG": "left-to-right",
        "fr-CH": "left-to-right",
        "fr-CI": "left-to-right",
        "fr-CM": "left-to-right",
        "fr-DJ": "left-to-right",
        "fr-DZ": "left-to-right",
        "fr-GA": "left-to-right",
        "fr-GF": "left-to-right",
        "fr-GN": "left-to-right",
        "fr-GP": "left-to-right",
        "fr-GQ": "left-to-right",
        "fr-HT": "left-to-right",
        "fr-KM": "left-to-right",
        "fr-LU": "left-to-right",
        "fr-MA": "left-to-right",
        "fr-MC": "left-to-right",
        "fr-MF": "left-to-right",
        "fr-MG": "left-to-right",
        "fr-ML": "left-to-right",
        "fr-MQ": "left-to-right",
        "fr-MR": "left-to-right",
        "fr-MU": "left-to-right",
        "fr-NC": "left-to-right",
        "fr-NE": "left-to-right",
        "fr-PF": "left-to-right",
        "fr-PM": "left-to-right",
        "fr-RE": "left-to-right",
        "fr-RW": "left-to-right",
        "fr-SC": "left-to-right",
        "fr-SN": "left-to-right",
        "fr-SY": "left-to-right",
        "fr-TD": "left-to-right",
        "fr-TG": "left-to-right",
        "fr-TN": "left-to-right",
        "fr-VU": "left-to-right",
        "fr-WF": "left-to-right",
        "fr-YT": "left-to-right",
        frr: "left-to-right",
        fur: "left-to-right",
        fy: "left-to-right",
        ga: "left-to-right",
        "ga-GB": "left-to-right",
        gaa: "left-to-right",
        gd: "left-to-right",
        gez: "left-to-right",
        "gez-ER": "left-to-right",
        gl: "left-to-right",
        gn: "left-to-right",
        gsw: "left-to-right",
        "gsw-FR": "left-to-right",
        "gsw-LI": "left-to-right",
        gu: "left-to-right",
        guz: "left-to-right",
        gv: "left-to-right",
        ha: "left-to-right",
        "ha-Arab": "right-to-left",
        "ha-Arab-SD": "right-to-left",
        "ha-GH": "left-to-right",
        "ha-NE": "left-to-right",
        haw: "left-to-right",
        he: "right-to-left",
        hi: "left-to-right",
        "hi-Latn": "left-to-right",
        hnj: "left-to-right",
        "hnj-Hmnp": "left-to-right",
        hr: "left-to-right",
        "hr-BA": "left-to-right",
        hsb: "left-to-right",
        hu: "left-to-right",
        hy: "left-to-right",
        ia: "left-to-right",
        id: "left-to-right",
        ig: "left-to-right",
        ii: "left-to-right",
        io: "left-to-right",
        is: "left-to-right",
        it: "left-to-right",
        "it-CH": "left-to-right",
        "it-SM": "left-to-right",
        "it-VA": "left-to-right",
        iu: "left-to-right",
        "iu-Latn": "left-to-right",
        ja: "left-to-right",
        jbo: "left-to-right",
        jgo: "left-to-right",
        jmc: "left-to-right",
        jv: "left-to-right",
        ka: "left-to-right",
        kab: "left-to-right",
        kaj: "left-to-right",
        kam: "left-to-right",
        kcg: "left-to-right",
        kde: "left-to-right",
        kea: "left-to-right",
        ken: "left-to-right",
        kgp: "left-to-right",
        khq: "left-to-right",
        ki: "left-to-right",
        kk: "left-to-right",
        kkj: "left-to-right",
        kl: "left-to-right",
        kln: "left-to-right",
        km: "left-to-right",
        kn: "left-to-right",
        ko: "left-to-right",
        "ko-KP": "left-to-right",
        kok: "left-to-right",
        kpe: "left-to-right",
        "kpe-GN": "left-to-right",
        ks: "right-to-left",
        "ks-Arab": "right-to-left",
        "ks-Deva": "left-to-right",
        ksb: "left-to-right",
        ksf: "left-to-right",
        ksh: "left-to-right",
        ku: "left-to-right",
        kw: "left-to-right",
        ky: "left-to-right",
        la: "left-to-right",
        lag: "left-to-right",
        lb: "left-to-right",
        lg: "left-to-right",
        lij: "left-to-right",
        lkt: "left-to-right",
        lmo: "left-to-right",
        ln: "left-to-right",
        "ln-AO": "left-to-right",
        "ln-CF": "left-to-right",
        "ln-CG": "left-to-right",
        lo: "left-to-right",
        lrc: "right-to-left",
        "lrc-IQ": "right-to-left",
        lt: "left-to-right",
        lu: "left-to-right",
        luo: "left-to-right",
        luy: "left-to-right",
        lv: "left-to-right",
        mai: "left-to-right",
        mas: "left-to-right",
        "mas-TZ": "left-to-right",
        mdf: "left-to-right",
        mer: "left-to-right",
        mfe: "left-to-right",
        mg: "left-to-right",
        mgh: "left-to-right",
        mgo: "left-to-right",
        mi: "left-to-right",
        mk: "left-to-right",
        ml: "left-to-right",
        mn: "left-to-right",
        "mn-Mong": "top-to-bottom",
        "mn-Mong-MN": "top-to-bottom",
        mni: "left-to-right",
        "mni-Beng": "left-to-right",
        "mni-Mtei": "left-to-right",
        moh: "left-to-right",
        mr: "left-to-right",
        ms: "left-to-right",
        "ms-Arab": "right-to-left",
        "ms-Arab-BN": "right-to-left",
        "ms-BN": "left-to-right",
        "ms-ID": "left-to-right",
        "ms-SG": "left-to-right",
        mt: "left-to-right",
        mua: "left-to-right",
        mus: "left-to-right",
        my: "left-to-right",
        myv: "left-to-right",
        mzn: "right-to-left",
        naq: "left-to-right",
        nb: "left-to-right",
        "nb-SJ": "left-to-right",
        nd: "left-to-right",
        nds: "left-to-right",
        "nds-NL": "left-to-right",
        ne: "left-to-right",
        "ne-IN": "left-to-right",
        nl: "left-to-right",
        "nl-AW": "left-to-right",
        "nl-BE": "left-to-right",
        "nl-BQ": "left-to-right",
        "nl-CW": "left-to-right",
        "nl-SR": "left-to-right",
        "nl-SX": "left-to-right",
        nmg: "left-to-right",
        nn: "left-to-right",
        nnh: "left-to-right",
        no: "left-to-right",
        nqo: "right-to-left",
        nr: "left-to-right",
        nso: "left-to-right",
        nus: "left-to-right",
        nv: "left-to-right",
        ny: "left-to-right",
        nyn: "left-to-right",
        oc: "left-to-right",
        "oc-ES": "left-to-right",
        om: "left-to-right",
        "om-KE": "left-to-right",
        or: "left-to-right",
        os: "left-to-right",
        "os-RU": "left-to-right",
        osa: "left-to-right",
        pa: "left-to-right",
        "pa-Arab": "right-to-left",
        "pa-Guru": "left-to-right",
        pap: "left-to-right",
        "pap-AW": "left-to-right",
        pcm: "left-to-right",
        pis: "left-to-right",
        pl: "left-to-right",
        prg: "left-to-right",
        ps: "right-to-left",
        "ps-PK": "right-to-left",
        pt: "left-to-right",
        "pt-AO": "left-to-right",
        "pt-CH": "left-to-right",
        "pt-CV": "left-to-right",
        "pt-GQ": "left-to-right",
        "pt-GW": "left-to-right",
        "pt-LU": "left-to-right",
        "pt-MO": "left-to-right",
        "pt-MZ": "left-to-right",
        "pt-PT": "left-to-right",
        "pt-ST": "left-to-right",
        "pt-TL": "left-to-right",
        qu: "left-to-right",
        "qu-BO": "left-to-right",
        "qu-EC": "left-to-right",
        quc: "left-to-right",
        raj: "left-to-right",
        rhg: "right-to-left",
        "rhg-Rohg": "right-to-left",
        "rhg-Rohg-BD": "right-to-left",
        rif: "left-to-right",
        rm: "left-to-right",
        rn: "left-to-right",
        ro: "left-to-right",
        "ro-MD": "left-to-right",
        rof: "left-to-right",
        ru: "left-to-right",
        "ru-BY": "left-to-right",
        "ru-KG": "left-to-right",
        "ru-KZ": "left-to-right",
        "ru-MD": "left-to-right",
        "ru-UA": "left-to-right",
        rw: "left-to-right",
        rwk: "left-to-right",
        sa: "left-to-right",
        sah: "left-to-right",
        saq: "left-to-right",
        sat: "left-to-right",
        "sat-Deva": "left-to-right",
        "sat-Olck": "left-to-right",
        sbp: "left-to-right",
        sc: "left-to-right",
        scn: "left-to-right",
        sd: "right-to-left",
        "sd-Arab": "right-to-left",
        "sd-Deva": "left-to-right",
        sdh: "right-to-left",
        "sdh-IQ": "right-to-left",
        se: "left-to-right",
        "se-FI": "left-to-right",
        "se-SE": "left-to-right",
        seh: "left-to-right",
        ses: "left-to-right",
        sg: "left-to-right",
        shi: "left-to-right",
        "shi-Latn": "left-to-right",
        "shi-Tfng": "left-to-right",
        shn: "left-to-right",
        "shn-TH": "left-to-right",
        si: "left-to-right",
        sid: "left-to-right",
        sk: "left-to-right",
        sl: "left-to-right",
        sma: "left-to-right",
        "sma-NO": "left-to-right",
        smj: "left-to-right",
        "smj-NO": "left-to-right",
        smn: "left-to-right",
        sms: "left-to-right",
        sn: "left-to-right",
        so: "left-to-right",
        "so-DJ": "left-to-right",
        "so-ET": "left-to-right",
        "so-KE": "left-to-right",
        sq: "left-to-right",
        "sq-MK": "left-to-right",
        "sq-XK": "left-to-right",
        sr: "left-to-right",
        "sr-Cyrl": "left-to-right",
        "sr-Cyrl-BA": "left-to-right",
        "sr-Cyrl-ME": "left-to-right",
        "sr-Cyrl-XK": "left-to-right",
        "sr-Latn": "left-to-right",
        "sr-Latn-BA": "left-to-right",
        "sr-Latn-ME": "left-to-right",
        "sr-Latn-XK": "left-to-right",
        ss: "left-to-right",
        "ss-SZ": "left-to-right",
        ssy: "left-to-right",
        st: "left-to-right",
        "st-LS": "left-to-right",
        su: "left-to-right",
        "su-Latn": "left-to-right",
        sv: "left-to-right",
        "sv-AX": "left-to-right",
        "sv-FI": "left-to-right",
        sw: "left-to-right",
        "sw-CD": "left-to-right",
        "sw-KE": "left-to-right",
        "sw-UG": "left-to-right",
        syr: "right-to-left",
        "syr-SY": "right-to-left",
        szl: "left-to-right",
        ta: "left-to-right",
        "ta-LK": "left-to-right",
        "ta-MY": "left-to-right",
        "ta-SG": "left-to-right",
        te: "left-to-right",
        teo: "left-to-right",
        "teo-KE": "left-to-right",
        tg: "left-to-right",
        th: "left-to-right",
        ti: "left-to-right",
        "ti-ER": "left-to-right",
        tig: "left-to-right",
        tk: "left-to-right",
        tn: "left-to-right",
        "tn-BW": "left-to-right",
        to: "left-to-right",
        tok: "left-to-right",
        tpi: "left-to-right",
        tr: "left-to-right",
        "tr-CY": "left-to-right",
        trv: "left-to-right",
        trw: "right-to-left",
        ts: "left-to-right",
        tt: "left-to-right",
        twq: "left-to-right",
        tzm: "left-to-right",
        ug: "right-to-left",
        uk: "left-to-right",
        und: "left-to-right",
        ur: "right-to-left",
        "ur-IN": "right-to-left",
        uz: "left-to-right",
        "uz-Arab": "right-to-left",
        "uz-Cyrl": "left-to-right",
        "uz-Latn": "left-to-right",
        vai: "left-to-right",
        "vai-Latn": "left-to-right",
        "vai-Vaii": "left-to-right",
        ve: "left-to-right",
        vec: "left-to-right",
        vi: "left-to-right",
        vo: "left-to-right",
        vun: "left-to-right",
        wa: "left-to-right",
        wae: "left-to-right",
        wal: "left-to-right",
        wbp: "left-to-right",
        wo: "left-to-right",
        xh: "left-to-right",
        xog: "left-to-right",
        yav: "left-to-right",
        yi: "right-to-left",
        yo: "left-to-right",
        "yo-BJ": "left-to-right",
        yrl: "left-to-right",
        "yrl-CO": "left-to-right",
        "yrl-VE": "left-to-right",
        yue: "left-to-right",
        "yue-Hans": "left-to-right",
        "yue-Hant": "left-to-right",
        zgh: "left-to-right",
        zh: "left-to-right",
        "zh-Hans": "left-to-right",
        "zh-Hans-HK": "left-to-right",
        "zh-Hans-MO": "left-to-right",
        "zh-Hans-SG": "left-to-right",
        "zh-Hant": "left-to-right",
        "zh-Hant-HK": "left-to-right",
        "zh-Hant-MO": "left-to-right",
        zu: "left-to-right"
      }
    },
    99719: (a, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.currencies = void 0, t.currencies = ["ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", "ANG", "AOA", "AOK", "AON", "AOR", "ARA", "ARL", "ARM", "ARP", "ARS", "ATS", "AUD", "AWG", "AZM", "AZN", "BAD", "BAM", "BAN", "BBD", "BDT", "BEC", "BEF", "BEL", "BGL", "BGM", "BGN", "BGO", "BHD", "BIF", "BMD", "BND", "BOB", "BOL", "BOP", "BOV", "BRB", "BRC", "BRE", "BRL", "BRN", "BRR", "BRZ", "BSD", "BTN", "BUK", "BWP", "BYB", "BYN", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLE", "CLF", "CLP", "CNH", "CNX", "CNY", "COP", "COU", "CRC", "CSD", "CSK", "CUC", "CUP", "CVE", "CYP", "CZK", "DDM", "DEM", "DJF", "DKK", "DOP", "DZD", "ECS", "ECV", "EEK", "EGP", "ERN", "ESA", "ESB", "ESP", "ETB", "EUR", "FIM", "FJD", "FKP", "FRF", "GBP", "GEK", "GEL", "GHC", "GHS", "GIP", "GMD", "GNF", "GNS", "GQE", "GRD", "GTQ", "GWE", "GWP", "GYD", "HKD", "HNL", "HRD", "HRK", "HTG", "HUF", "IDR", "IEP", "ILP", "ILR", "ILS", "INR", "IQD", "IRR", "ISJ", "ISK", "ITL", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRH", "KRO", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LTT", "LUC", "LUF", "LUL", "LVL", "LVR", "LYD", "MAD", "MAF", "MCF", "MDC", "MDL", "MGA", "MGF", "MKD", "MKN", "MLF", "MMK", "MNT", "MOP", "MRO", "MRU", "MTL", "MTP", "MUR", "MVP", "MVR", "MWK", "MXN", "MXP", "MXV", "MYR", "MZE", "MZM", "MZN", "NAD", "NGN", "NIC", "NIO", "NLG", "NOK", "NPR", "NZD", "OMR", "PAB", "PEI", "PEN", "PES", "PGK", "PHP", "PKR", "PLN", "PLZ", "PTE", "PYG", "QAR", "RHD", "ROL", "RON", "RSD", "RUB", "RUR", "RWF", "SAR", "SBD", "SCR", "SDD", "SDG", "SDP", "SEK", "SGD", "SHP", "SIT", "SKK", "SLE", "SLL", "SOS", "SRD", "SRG", "SSP", "STD", "STN", "SUR", "SVC", "SYP", "SZL", "THB", "TJR", "TJS", "TMM", "TMT", "TND", "TOP", "TPE", "TRL", "TRY", "TTD", "TWD", "TZS", "UAH", "UAK", "UGS", "UGX", "USD", "USN", "USS", "UYI", "UYP", "UYU", "UYW", "UZS", "VEB", "VED", "VEF", "VES", "VND", "VNN", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XEU", "XFO", "XFU", "XOF", "XPD", "XPF", "XPT", "XRE", "XSU", "XTS", "XUA", "XXX", "YDD", "YER", "YUD", "YUM", "YUN", "YUR", "ZAL", "ZAR", "ZMK", "ZMW", "ZRN", "ZRZ", "ZWD", "ZWL", "ZWR"]
    }
  }
]);