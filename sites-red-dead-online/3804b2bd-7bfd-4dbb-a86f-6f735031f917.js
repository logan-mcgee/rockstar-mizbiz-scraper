try {
  let r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new r.Error).stack;
  o && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[o] = "3804b2bd-7bfd-4dbb-a86f-6f735031f917", r._sentryDebugIdIdentifier = "sentry-dbid-3804b2bd-7bfd-4dbb-a86f-6f735031f917")
} catch (r) {} {
  let r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[(new r.Error).stack] = Object.assign({}, r._sentryModuleMetadata[(new r.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [824], {
    48140: () => {
      Intl.NumberFormat && "function" == typeof Intl.NumberFormat.__addLocaleData && Intl.NumberFormat.__addLocaleData({
        data: {
          currencies: {
            ADP: {
              displayName: {
                other: "안도라 페세타"
              },
              narrow: "ADP",
              symbol: "ADP"
            },
            AED: {
              displayName: {
                other: "아랍에미리트 디르함"
              },
              narrow: "AED",
              symbol: "AED"
            },
            AFA: {
              displayName: {
                other: "아프가니 (1927–2002)"
              },
              narrow: "AFA",
              symbol: "AFA"
            },
            AFN: {
              displayName: {
                other: "아프가니스탄 아프가니"
              },
              narrow: "؋",
              symbol: "AFN"
            },
            ALL: {
              displayName: {
                other: "알바니아 레크"
              },
              narrow: "ALL",
              symbol: "ALL"
            },
            AMD: {
              displayName: {
                other: "아르메니아 드람"
              },
              narrow: "֏",
              symbol: "AMD"
            },
            ANG: {
              displayName: {
                other: "네덜란드령 안틸레스 길더"
              },
              narrow: "ANG",
              symbol: "ANG"
            },
            AOA: {
              displayName: {
                other: "앙골라 콴자"
              },
              narrow: "Kz",
              symbol: "AOA"
            },
            AOK: {
              displayName: {
                other: "앙골라 콴자 (1977–1990)"
              },
              narrow: "AOK",
              symbol: "AOK"
            },
            AON: {
              displayName: {
                other: "앙골라 신콴자 (1990–2000)"
              },
              narrow: "AON",
              symbol: "AON"
            },
            AOR: {
              displayName: {
                other: "앙골라 재조정 콴자 (1995–1999)"
              },
              narrow: "AOR",
              symbol: "AOR"
            },
            ARA: {
              displayName: {
                other: "아르헨티나 오스트랄"
              },
              narrow: "ARA",
              symbol: "ARA"
            },
            ARL: {
              displayName: {
                other: "아르헨티나 페소 레이 (1970–1983)"
              },
              narrow: "ARL",
              symbol: "ARL"
            },
            ARM: {
              displayName: {
                other: "아르헨티나 페소 (18810–1970)"
              },
              narrow: "ARM",
              symbol: "ARM"
            },
            ARP: {
              displayName: {
                other: "아르헨티나 페소 (1983–1985)"
              },
              narrow: "ARP",
              symbol: "ARP"
            },
            ARS: {
              displayName: {
                other: "아르헨티나 페소"
              },
              narrow: "$",
              symbol: "ARS"
            },
            ATS: {
              displayName: {
                other: "호주 실링"
              },
              narrow: "ATS",
              symbol: "ATS"
            },
            AUD: {
              displayName: {
                other: "호주 달러"
              },
              narrow: "$",
              symbol: "AU$"
            },
            AWG: {
              displayName: {
                other: "아루바 플로린"
              },
              narrow: "AWG",
              symbol: "AWG"
            },
            AZM: {
              displayName: {
                other: "아제르바이젠 마나트(1993–2006)"
              },
              narrow: "AZM",
              symbol: "AZM"
            },
            AZN: {
              displayName: {
                other: "아제르바이잔 마나트"
              },
              narrow: "₼",
              symbol: "AZN"
            },
            BAD: {
              displayName: {
                other: "보스니아-헤르체고비나 디나르"
              },
              narrow: "BAD",
              symbol: "BAD"
            },
            BAM: {
              displayName: {
                other: "보스니아-헤르체고비나 태환 마르크"
              },
              narrow: "KM",
              symbol: "BAM"
            },
            BAN: {
              displayName: {
                other: "보스니아-헤르체고비나 신디나르 (1994–1997)"
              },
              narrow: "BAN",
              symbol: "BAN"
            },
            BBD: {
              displayName: {
                other: "바베이도스 달러"
              },
              narrow: "$",
              symbol: "BBD"
            },
            BDT: {
              displayName: {
                other: "방글라데시 타카"
              },
              narrow: "৳",
              symbol: "BDT"
            },
            BEC: {
              displayName: {
                other: "벨기에 프랑 (태환)"
              },
              narrow: "BEC",
              symbol: "BEC"
            },
            BEF: {
              displayName: {
                other: "벨기에 프랑"
              },
              narrow: "BEF",
              symbol: "BEF"
            },
            BEL: {
              displayName: {
                other: "벨기에 프랑 (금융)"
              },
              narrow: "BEL",
              symbol: "BEL"
            },
            BGL: {
              displayName: {
                other: "불가리아 동전 렛"
              },
              narrow: "BGL",
              symbol: "BGL"
            },
            BGM: {
              displayName: {
                other: "불가리아 사회주의자 렛"
              },
              narrow: "BGM",
              symbol: "BGM"
            },
            BGN: {
              displayName: {
                other: "불가리아 레프"
              },
              narrow: "BGN",
              symbol: "BGN"
            },
            BGO: {
              displayName: {
                other: "불가리아 렛 (1879–1952)"
              },
              narrow: "BGO",
              symbol: "BGO"
            },
            BHD: {
              displayName: {
                other: "바레인 디나르"
              },
              narrow: "BHD",
              symbol: "BHD"
            },
            BIF: {
              displayName: {
                other: "부룬디 프랑"
              },
              narrow: "BIF",
              symbol: "BIF"
            },
            BMD: {
              displayName: {
                other: "버뮤다 달러"
              },
              narrow: "$",
              symbol: "BMD"
            },
            BND: {
              displayName: {
                other: "부루나이 달러"
              },
              narrow: "$",
              symbol: "BND"
            },
            BOB: {
              displayName: {
                other: "볼리비아 볼리비아노"
              },
              narrow: "Bs",
              symbol: "BOB"
            },
            BOL: {
              displayName: {
                other: "볼리비아 볼리비아노 (1863–1963)"
              },
              narrow: "BOL",
              symbol: "BOL"
            },
            BOP: {
              displayName: {
                other: "볼리비아노 페소"
              },
              narrow: "BOP",
              symbol: "BOP"
            },
            BOV: {
              displayName: {
                other: "볼리비아노 Mvdol(기금)"
              },
              narrow: "BOV",
              symbol: "BOV"
            },
            BRB: {
              displayName: {
                other: "볼리비아노 크루제이루 노보 (1967–1986)"
              },
              narrow: "BRB",
              symbol: "BRB"
            },
            BRC: {
              displayName: {
                other: "브라질 크루자두"
              },
              narrow: "BRC",
              symbol: "BRC"
            },
            BRE: {
              displayName: {
                other: "브라질 크루제이루 (1990–1993)"
              },
              narrow: "BRE",
              symbol: "BRE"
            },
            BRL: {
              displayName: {
                other: "브라질 레알"
              },
              narrow: "R$",
              symbol: "R$"
            },
            BRN: {
              displayName: {
                other: "브라질 크루자두 노보"
              },
              narrow: "BRN",
              symbol: "BRN"
            },
            BRR: {
              displayName: {
                other: "브라질 크루제이루"
              },
              narrow: "BRR",
              symbol: "BRR"
            },
            BRZ: {
              displayName: {
                other: "브라질 크루제이루 (1942–1967)"
              },
              narrow: "BRZ",
              symbol: "BRZ"
            },
            BSD: {
              displayName: {
                other: "바하마 달러"
              },
              narrow: "$",
              symbol: "BSD"
            },
            BTN: {
              displayName: {
                other: "부탄 눌투눔"
              },
              narrow: "BTN",
              symbol: "BTN"
            },
            BUK: {
              displayName: {
                other: "버마 차트"
              },
              narrow: "BUK",
              symbol: "BUK"
            },
            BWP: {
              displayName: {
                other: "보츠와나 풀라"
              },
              narrow: "P",
              symbol: "BWP"
            },
            BYB: {
              displayName: {
                other: "벨라루스 신권 루블 (1994–1999)"
              },
              narrow: "BYB",
              symbol: "BYB"
            },
            BYN: {
              displayName: {
                other: "벨라루스 루블"
              },
              narrow: "р.",
              symbol: "BYN"
            },
            BYR: {
              displayName: {
                other: "벨라루스 루블 (2000–2016)"
              },
              narrow: "BYR",
              symbol: "BYR"
            },
            BZD: {
              displayName: {
                other: "벨리즈 달러"
              },
              narrow: "$",
              symbol: "BZD"
            },
            CAD: {
              displayName: {
                other: "캐나다 달러"
              },
              narrow: "$",
              symbol: "CA$"
            },
            CDF: {
              displayName: {
                other: "콩고 프랑"
              },
              narrow: "CDF",
              symbol: "CDF"
            },
            CHE: {
              displayName: {
                other: "유로 (WIR)"
              },
              narrow: "CHE",
              symbol: "CHE"
            },
            CHF: {
              displayName: {
                other: "스위스 프랑"
              },
              narrow: "CHF",
              symbol: "CHF"
            },
            CHW: {
              displayName: {
                other: "프랑 (WIR)"
              },
              narrow: "CHW",
              symbol: "CHW"
            },
            CLE: {
              displayName: {
                other: "칠레 에스쿠도"
              },
              narrow: "CLE",
              symbol: "CLE"
            },
            CLF: {
              displayName: {
                other: "칠레 (UF)"
              },
              narrow: "CLF",
              symbol: "CLF"
            },
            CLP: {
              displayName: {
                other: "칠레 페소"
              },
              narrow: "$",
              symbol: "CLP"
            },
            CNH: {
              displayName: {
                other: "중국 위안화(역외)"
              },
              narrow: "CNH",
              symbol: "CNH"
            },
            CNY: {
              displayName: {
                other: "중국 위안화"
              },
              narrow: "¥",
              symbol: "CN¥"
            },
            COP: {
              displayName: {
                other: "콜롬비아 페소"
              },
              narrow: "$",
              symbol: "COP"
            },
            COU: {
              displayName: {
                other: "콜롬비아 실가 단위"
              },
              narrow: "COU",
              symbol: "COU"
            },
            CRC: {
              displayName: {
                other: "코스타리카 콜론"
              },
              narrow: "₡",
              symbol: "CRC"
            },
            CSD: {
              displayName: {
                other: "고 세르비아 디나르"
              },
              narrow: "CSD",
              symbol: "CSD"
            },
            CSK: {
              displayName: {
                other: "체코슬로바키아 동전 코루나"
              },
              narrow: "CSK",
              symbol: "CSK"
            },
            CUC: {
              displayName: {
                other: "쿠바 태환 페소"
              },
              narrow: "$",
              symbol: "CUC"
            },
            CUP: {
              displayName: {
                other: "쿠바 페소"
              },
              narrow: "$",
              symbol: "CUP"
            },
            CVE: {
              displayName: {
                other: "카보베르데 에스쿠도"
              },
              narrow: "CVE",
              symbol: "CVE"
            },
            CYP: {
              displayName: {
                other: "싸이프러스 파운드"
              },
              narrow: "CYP",
              symbol: "CYP"
            },
            CZK: {
              displayName: {
                other: "체코 코루나"
              },
              narrow: "Kč",
              symbol: "CZK"
            },
            DDM: {
              displayName: {
                other: "동독 오스트마르크"
              },
              narrow: "DDM",
              symbol: "DDM"
            },
            DEM: {
              displayName: {
                other: "독일 마르크"
              },
              narrow: "DEM",
              symbol: "DEM"
            },
            DJF: {
              displayName: {
                other: "지부티 프랑"
              },
              narrow: "DJF",
              symbol: "DJF"
            },
            DKK: {
              displayName: {
                other: "덴마크 크로네"
              },
              narrow: "kr",
              symbol: "DKK"
            },
            DOP: {
              displayName: {
                other: "도미니카 페소"
              },
              narrow: "$",
              symbol: "DOP"
            },
            DZD: {
              displayName: {
                other: "알제리 디나르"
              },
              narrow: "DZD",
              symbol: "DZD"
            },
            ECS: {
              displayName: {
                other: "에쿠아도르 수크레"
              },
              narrow: "ECS",
              symbol: "ECS"
            },
            ECV: {
              displayName: {
                other: "에콰도르 (UVC)"
              },
              narrow: "ECV",
              symbol: "ECV"
            },
            EEK: {
              displayName: {
                other: "에스토니아 크룬"
              },
              narrow: "EEK",
              symbol: "EEK"
            },
            EGP: {
              displayName: {
                other: "이집트 파운드"
              },
              narrow: "E£",
              symbol: "EGP"
            },
            ERN: {
              displayName: {
                other: "에리트리아 나크파"
              },
              narrow: "ERN",
              symbol: "ERN"
            },
            ESA: {
              displayName: {
                other: "스페인 페세타(예금)"
              },
              narrow: "ESA",
              symbol: "ESA"
            },
            ESB: {
              displayName: {
                other: "스페인 페세타(변환 예금)"
              },
              narrow: "ESB",
              symbol: "ESB"
            },
            ESP: {
              displayName: {
                other: "스페인 페세타"
              },
              narrow: "₧",
              symbol: "ESP"
            },
            ETB: {
              displayName: {
                other: "에티오피아 비르"
              },
              narrow: "ETB",
              symbol: "ETB"
            },
            EUR: {
              displayName: {
                other: "유로"
              },
              narrow: "€",
              symbol: "€"
            },
            FIM: {
              displayName: {
                other: "핀란드 마르카"
              },
              narrow: "FIM",
              symbol: "FIM"
            },
            FJD: {
              displayName: {
                other: "피지 달러"
              },
              narrow: "$",
              symbol: "FJD"
            },
            FKP: {
              displayName: {
                other: "포클랜드제도 파운드"
              },
              narrow: "£",
              symbol: "FKP"
            },
            FRF: {
              displayName: {
                other: "프랑스 프랑"
              },
              narrow: "FRF",
              symbol: "FRF"
            },
            GBP: {
              displayName: {
                other: "영국 파운드"
              },
              narrow: "£",
              symbol: "£"
            },
            GEK: {
              displayName: {
                other: "그루지야 지폐 라리트"
              },
              narrow: "GEK",
              symbol: "GEK"
            },
            GEL: {
              displayName: {
                other: "조지아 라리"
              },
              narrow: "₾",
              symbol: "GEL"
            },
            GHC: {
              displayName: {
                other: "가나 시디 (1979–2007)"
              },
              narrow: "GHC",
              symbol: "GHC"
            },
            GHS: {
              displayName: {
                other: "가나 세디"
              },
              narrow: "GH₵",
              symbol: "GHS"
            },
            GIP: {
              displayName: {
                other: "지브롤터 파운드"
              },
              narrow: "£",
              symbol: "GIP"
            },
            GMD: {
              displayName: {
                other: "감비아 달라시"
              },
              narrow: "GMD",
              symbol: "GMD"
            },
            GNF: {
              displayName: {
                other: "기니 프랑"
              },
              narrow: "FG",
              symbol: "GNF"
            },
            GNS: {
              displayName: {
                other: "기니 시리"
              },
              narrow: "GNS",
              symbol: "GNS"
            },
            GQE: {
              displayName: {
                other: "적도 기니 에쿨 (Ekwele)"
              },
              narrow: "GQE",
              symbol: "GQE"
            },
            GRD: {
              displayName: {
                other: "그리스 드라크마"
              },
              narrow: "GRD",
              symbol: "GRD"
            },
            GTQ: {
              displayName: {
                other: "과테말라 케트살"
              },
              narrow: "Q",
              symbol: "GTQ"
            },
            GWE: {
              displayName: {
                other: "포르투갈령 기니 에스쿠도"
              },
              narrow: "GWE",
              symbol: "GWE"
            },
            GWP: {
              displayName: {
                other: "기네비쏘 페소"
              },
              narrow: "GWP",
              symbol: "GWP"
            },
            GYD: {
              displayName: {
                other: "가이아나 달러"
              },
              narrow: "$",
              symbol: "GYD"
            },
            HKD: {
              displayName: {
                other: "홍콩 달러"
              },
              narrow: "$",
              symbol: "HK$"
            },
            HNL: {
              displayName: {
                other: "온두라스 렘피라"
              },
              narrow: "L",
              symbol: "HNL"
            },
            HRD: {
              displayName: {
                other: "크로아티아 디나르"
              },
              narrow: "HRD",
              symbol: "HRD"
            },
            HRK: {
              displayName: {
                other: "크로아티아 쿠나"
              },
              narrow: "kn",
              symbol: "HRK"
            },
            HTG: {
              displayName: {
                other: "아이티 구르드"
              },
              narrow: "HTG",
              symbol: "HTG"
            },
            HUF: {
              displayName: {
                other: "헝가리 포린트"
              },
              narrow: "Ft",
              symbol: "HUF"
            },
            IDR: {
              displayName: {
                other: "인도네시아 루피아"
              },
              narrow: "Rp",
              symbol: "IDR"
            },
            IEP: {
              displayName: {
                other: "아일랜드 파운드"
              },
              narrow: "IEP",
              symbol: "IEP"
            },
            ILP: {
              displayName: {
                other: "이스라엘 파운드"
              },
              narrow: "ILP",
              symbol: "ILP"
            },
            ILS: {
              displayName: {
                other: "이스라엘 신권 세켈"
              },
              narrow: "₪",
              symbol: "₪"
            },
            INR: {
              displayName: {
                other: "인도 루피"
              },
              narrow: "₹",
              symbol: "₹"
            },
            IQD: {
              displayName: {
                other: "이라크 디나르"
              },
              narrow: "IQD",
              symbol: "IQD"
            },
            IRR: {
              displayName: {
                other: "이란 리얄"
              },
              narrow: "IRR",
              symbol: "IRR"
            },
            ISK: {
              displayName: {
                other: "아이슬란드 크로나"
              },
              narrow: "kr",
              symbol: "ISK"
            },
            ITL: {
              displayName: {
                other: "이탈리아 리라"
              },
              narrow: "ITL",
              symbol: "ITL"
            },
            JMD: {
              displayName: {
                other: "자메이카 달러"
              },
              narrow: "$",
              symbol: "JMD"
            },
            JOD: {
              displayName: {
                other: "요르단 디나르"
              },
              narrow: "JOD",
              symbol: "JOD"
            },
            JPY: {
              displayName: {
                other: "일본 엔화"
              },
              narrow: "¥",
              symbol: "JP¥"
            },
            KES: {
              displayName: {
                other: "케냐 실링"
              },
              narrow: "KES",
              symbol: "KES"
            },
            KGS: {
              displayName: {
                other: "키르기스스탄 솜"
              },
              narrow: "⃀",
              symbol: "KGS"
            },
            KHR: {
              displayName: {
                other: "캄보디아 리엘"
              },
              narrow: "៛",
              symbol: "KHR"
            },
            KMF: {
              displayName: {
                other: "코모르 프랑"
              },
              narrow: "CF",
              symbol: "KMF"
            },
            KPW: {
              displayName: {
                other: "조선 민주주의 인민 공화국 원"
              },
              narrow: "₩",
              symbol: "KPW"
            },
            KRH: {
              displayName: {
                other: "대한민국 환 (1953–1962)"
              },
              narrow: "KRH",
              symbol: "KRH"
            },
            KRW: {
              displayName: {
                other: "대한민국 원"
              },
              narrow: "₩",
              symbol: "₩"
            },
            KWD: {
              displayName: {
                other: "쿠웨이트 디나르"
              },
              narrow: "KWD",
              symbol: "KWD"
            },
            KYD: {
              displayName: {
                other: "케이맨 제도 달러"
              },
              narrow: "$",
              symbol: "KYD"
            },
            KZT: {
              displayName: {
                other: "카자흐스탄 텡게"
              },
              narrow: "₸",
              symbol: "KZT"
            },
            LAK: {
              displayName: {
                other: "라오스 키프"
              },
              narrow: "₭",
              symbol: "LAK"
            },
            LBP: {
              displayName: {
                other: "레바논 파운드"
              },
              narrow: "L£",
              symbol: "LBP"
            },
            LKR: {
              displayName: {
                other: "스리랑카 루피"
              },
              narrow: "Rs",
              symbol: "LKR"
            },
            LRD: {
              displayName: {
                other: "라이베리아 달러"
              },
              narrow: "$",
              symbol: "LRD"
            },
            LSL: {
              displayName: {
                other: "레소토 로티"
              },
              narrow: "LSL",
              symbol: "LSL"
            },
            LTL: {
              displayName: {
                other: "리투아니아 리타"
              },
              narrow: "Lt",
              symbol: "LTL"
            },
            LTT: {
              displayName: {
                other: "룩셈부르크 타로나"
              },
              narrow: "LTT",
              symbol: "LTT"
            },
            LUC: {
              displayName: {
                other: "룩셈부르크 변환 프랑"
              },
              narrow: "LUC",
              symbol: "LUC"
            },
            LUF: {
              displayName: {
                other: "룩셈부르크 프랑"
              },
              narrow: "LUF",
              symbol: "LUF"
            },
            LUL: {
              displayName: {
                other: "룩셈부르크 재정 프랑"
              },
              narrow: "LUL",
              symbol: "LUL"
            },
            LVL: {
              displayName: {
                other: "라트비아 라트"
              },
              narrow: "Ls",
              symbol: "LVL"
            },
            LVR: {
              displayName: {
                other: "라트비아 루블"
              },
              narrow: "LVR",
              symbol: "LVR"
            },
            LYD: {
              displayName: {
                other: "리비아 디나르"
              },
              narrow: "LYD",
              symbol: "LYD"
            },
            MAD: {
              displayName: {
                other: "모로코 디르함"
              },
              narrow: "MAD",
              symbol: "MAD"
            },
            MAF: {
              displayName: {
                other: "모로코 프랑"
              },
              narrow: "MAF",
              symbol: "MAF"
            },
            MCF: {
              displayName: {
                other: "모나코 프랑"
              },
              narrow: "MCF",
              symbol: "MCF"
            },
            MDC: {
              displayName: {
                other: "몰도바 쿠폰"
              },
              narrow: "MDC",
              symbol: "MDC"
            },
            MDL: {
              displayName: {
                other: "몰도바 레이"
              },
              narrow: "MDL",
              symbol: "MDL"
            },
            MGA: {
              displayName: {
                other: "마다가스카르 아리아리"
              },
              narrow: "Ar",
              symbol: "MGA"
            },
            MGF: {
              displayName: {
                other: "마다가스카르 프랑"
              },
              narrow: "MGF",
              symbol: "MGF"
            },
            MKD: {
              displayName: {
                other: "마케도니아 디나르"
              },
              narrow: "MKD",
              symbol: "MKD"
            },
            MLF: {
              displayName: {
                other: "말리 프랑"
              },
              narrow: "MLF",
              symbol: "MLF"
            },
            MMK: {
              displayName: {
                other: "미얀마 키얏"
              },
              narrow: "K",
              symbol: "MMK"
            },
            MNT: {
              displayName: {
                other: "몽골 투그릭"
              },
              narrow: "₮",
              symbol: "MNT"
            },
            MOP: {
              displayName: {
                other: "마카오 파타카"
              },
              narrow: "MOP",
              symbol: "MOP"
            },
            MRO: {
              displayName: {
                other: "모리타니 우기야 (1973–2017)"
              },
              narrow: "MRO",
              symbol: "MRO"
            },
            MRU: {
              displayName: {
                other: "모리타니 우기야"
              },
              narrow: "MRU",
              symbol: "MRU"
            },
            MTL: {
              displayName: {
                other: "몰타 리라"
              },
              narrow: "MTL",
              symbol: "MTL"
            },
            MTP: {
              displayName: {
                other: "몰타 파운드"
              },
              narrow: "MTP",
              symbol: "MTP"
            },
            MUR: {
              displayName: {
                other: "모리셔스 루피"
              },
              narrow: "Rs",
              symbol: "MUR"
            },
            MVR: {
              displayName: {
                other: "몰디브 제도 루피아"
              },
              narrow: "MVR",
              symbol: "MVR"
            },
            MWK: {
              displayName: {
                other: "말라위 콰차"
              },
              narrow: "MWK",
              symbol: "MWK"
            },
            MXN: {
              displayName: {
                other: "멕시코 페소"
              },
              narrow: "$",
              symbol: "MX$"
            },
            MXP: {
              displayName: {
                other: "멕시코 실버 페소 (1861–1992)"
              },
              narrow: "MXP",
              symbol: "MXP"
            },
            MXV: {
              displayName: {
                other: "멕시코 (UDI)"
              },
              narrow: "MXV",
              symbol: "MXV"
            },
            MYR: {
              displayName: {
                other: "말레이시아 링깃"
              },
              narrow: "RM",
              symbol: "MYR"
            },
            MZE: {
              displayName: {
                other: "모잠비크 에스쿠도"
              },
              narrow: "MZE",
              symbol: "MZE"
            },
            MZM: {
              displayName: {
                other: "고 모잠비크 메티칼"
              },
              narrow: "MZM",
              symbol: "MZM"
            },
            MZN: {
              displayName: {
                other: "모잠비크 메티칼"
              },
              narrow: "MZN",
              symbol: "MZN"
            },
            NAD: {
              displayName: {
                other: "나미비아 달러"
              },
              narrow: "$",
              symbol: "NAD"
            },
            NGN: {
              displayName: {
                other: "나이지리아 나이라"
              },
              narrow: "₦",
              symbol: "NGN"
            },
            NIC: {
              displayName: {
                other: "니카라과 코르도바 오로(1988~1991)"
              },
              narrow: "NIC",
              symbol: "NIC"
            },
            NIO: {
              displayName: {
                other: "니카라과 코르도바"
              },
              narrow: "C$",
              symbol: "NIO"
            },
            NLG: {
              displayName: {
                other: "네델란드 길더"
              },
              narrow: "NLG",
              symbol: "NLG"
            },
            NOK: {
              displayName: {
                other: "노르웨이 크로네"
              },
              narrow: "kr",
              symbol: "NOK"
            },
            NPR: {
              displayName: {
                other: "네팔 루피"
              },
              narrow: "Rs",
              symbol: "NPR"
            },
            NZD: {
              displayName: {
                other: "뉴질랜드 달러"
              },
              narrow: "$",
              symbol: "NZ$"
            },
            OMR: {
              displayName: {
                other: "오만 리알"
              },
              narrow: "OMR",
              symbol: "OMR"
            },
            PAB: {
              displayName: {
                other: "파나마 발보아"
              },
              narrow: "PAB",
              symbol: "PAB"
            },
            PEI: {
              displayName: {
                other: "페루 인티"
              },
              narrow: "PEI",
              symbol: "PEI"
            },
            PEN: {
              displayName: {
                other: "페루 솔"
              },
              narrow: "PEN",
              symbol: "PEN"
            },
            PES: {
              displayName: {
                other: "페루 솔 (1863–1965)"
              },
              narrow: "PES",
              symbol: "PES"
            },
            PGK: {
              displayName: {
                other: "파푸아뉴기니 키나"
              },
              narrow: "PGK",
              symbol: "PGK"
            },
            PHP: {
              displayName: {
                other: "필리핀 페소"
              },
              narrow: "₱",
              symbol: "PHP"
            },
            PKR: {
              displayName: {
                other: "파키스탄 루피"
              },
              narrow: "Rs",
              symbol: "PKR"
            },
            PLN: {
              displayName: {
                other: "폴란드 즈워티"
              },
              narrow: "zł",
              symbol: "PLN"
            },
            PLZ: {
              displayName: {
                other: "폴란드 즐로티 (1950–1995)"
              },
              narrow: "PLZ",
              symbol: "PLZ"
            },
            PTE: {
              displayName: {
                other: "포르투갈 에스쿠도"
              },
              narrow: "PTE",
              symbol: "PTE"
            },
            PYG: {
              displayName: {
                other: "파라과이 과라니"
              },
              narrow: "₲",
              symbol: "PYG"
            },
            QAR: {
              displayName: {
                other: "카타르 리얄"
              },
              narrow: "QAR",
              symbol: "QAR"
            },
            RHD: {
              displayName: {
                other: "로디지아 달러"
              },
              narrow: "RHD",
              symbol: "RHD"
            },
            ROL: {
              displayName: {
                other: "루마니아 레이"
              },
              narrow: "ROL",
              symbol: "ROL"
            },
            RON: {
              displayName: {
                other: "루마니아 레우"
              },
              narrow: "L",
              symbol: "RON"
            },
            RSD: {
              displayName: {
                other: "세르비아 디나르"
              },
              narrow: "RSD",
              symbol: "RSD"
            },
            RUB: {
              displayName: {
                other: "러시아 루블"
              },
              narrow: "₽",
              symbol: "RUB"
            },
            RUR: {
              displayName: {
                other: "러시아 루블 (1991–1998)"
              },
              narrow: "RUR",
              symbol: "RUR"
            },
            RWF: {
              displayName: {
                other: "르완다 프랑"
              },
              narrow: "RF",
              symbol: "RWF"
            },
            SAR: {
              displayName: {
                other: "사우디아라비아 리얄"
              },
              narrow: "SAR",
              symbol: "SAR"
            },
            SBD: {
              displayName: {
                other: "솔로몬 제도 달러"
              },
              narrow: "$",
              symbol: "SBD"
            },
            SCR: {
              displayName: {
                other: "세이셸 루피"
              },
              narrow: "SCR",
              symbol: "SCR"
            },
            SDD: {
              displayName: {
                other: "수단 디나르"
              },
              narrow: "SDD",
              symbol: "SDD"
            },
            SDG: {
              displayName: {
                other: "수단 파운드"
              },
              narrow: "SDG",
              symbol: "SDG"
            },
            SDP: {
              displayName: {
                other: "고 수단 파운드"
              },
              narrow: "SDP",
              symbol: "SDP"
            },
            SEK: {
              displayName: {
                other: "스웨덴 크로나"
              },
              narrow: "kr",
              symbol: "SEK"
            },
            SGD: {
              displayName: {
                other: "싱가포르 달러"
              },
              narrow: "$",
              symbol: "SGD"
            },
            SHP: {
              displayName: {
                other: "세인트헬레나 파운드"
              },
              narrow: "£",
              symbol: "SHP"
            },
            SIT: {
              displayName: {
                other: "슬로베니아 톨라르"
              },
              narrow: "SIT",
              symbol: "SIT"
            },
            SKK: {
              displayName: {
                other: "슬로바키아 코루나"
              },
              narrow: "SKK",
              symbol: "SKK"
            },
            SLE: {
              displayName: {
                other: "시에라리온 리온"
              },
              narrow: "SLE",
              symbol: "SLE"
            },
            SLL: {
              displayName: {
                other: "시에라리온 리온(1964~2022)"
              },
              narrow: "SLL",
              symbol: "SLL"
            },
            SOS: {
              displayName: {
                other: "소말리아 실링"
              },
              narrow: "SOS",
              symbol: "SOS"
            },
            SRD: {
              displayName: {
                other: "수리남 달러"
              },
              narrow: "$",
              symbol: "SRD"
            },
            SRG: {
              displayName: {
                other: "수리남 길더"
              },
              narrow: "SRG",
              symbol: "SRG"
            },
            SSP: {
              displayName: {
                other: "남수단 파운드"
              },
              narrow: "£",
              symbol: "SSP"
            },
            STD: {
              displayName: {
                other: "상투메 프린시페 도브라 (1977–2017)"
              },
              narrow: "STD",
              symbol: "STD"
            },
            STN: {
              displayName: {
                other: "상투메 프린시페 도브라"
              },
              narrow: "Db",
              symbol: "STN"
            },
            SUR: {
              displayName: {
                other: "소련 루블"
              },
              narrow: "SUR",
              symbol: "SUR"
            },
            SVC: {
              displayName: {
                other: "엘살바도르 콜론"
              },
              narrow: "SVC",
              symbol: "SVC"
            },
            SYP: {
              displayName: {
                other: "시리아 파운드"
              },
              narrow: "£",
              symbol: "SYP"
            },
            SZL: {
              displayName: {
                other: "스와질란드 릴랑게니"
              },
              narrow: "SZL",
              symbol: "SZL"
            },
            THB: {
              displayName: {
                other: "태국 바트"
              },
              narrow: "฿",
              symbol: "THB"
            },
            TJR: {
              displayName: {
                other: "타지키스탄 루블"
              },
              narrow: "TJR",
              symbol: "TJR"
            },
            TJS: {
              displayName: {
                other: "타지키스탄 소모니"
              },
              narrow: "TJS",
              symbol: "TJS"
            },
            TMM: {
              displayName: {
                other: "투르크메니스탄 마나트 (1993–2009)"
              },
              narrow: "TMM",
              symbol: "TMM"
            },
            TMT: {
              displayName: {
                other: "투르크메니스탄 마나트"
              },
              narrow: "TMT",
              symbol: "TMT"
            },
            TND: {
              displayName: {
                other: "튀니지 디나르"
              },
              narrow: "TND",
              symbol: "TND"
            },
            TOP: {
              displayName: {
                other: "통가 파앙가"
              },
              narrow: "T$",
              symbol: "TOP"
            },
            TPE: {
              displayName: {
                other: "티모르 에스쿠도"
              },
              narrow: "TPE",
              symbol: "TPE"
            },
            TRL: {
              displayName: {
                other: "터키 리라(1922~2005)"
              },
              narrow: "TRL",
              symbol: "TRL"
            },
            TRY: {
              displayName: {
                other: "튀르키예 리라"
              },
              narrow: "₺",
              symbol: "TRY"
            },
            TTD: {
              displayName: {
                other: "트리니다드 토바고 달러"
              },
              narrow: "$",
              symbol: "TTD"
            },
            TWD: {
              displayName: {
                other: "신 타이완 달러"
              },
              narrow: "NT$",
              symbol: "NT$"
            },
            TZS: {
              displayName: {
                other: "탄자니아 실링"
              },
              narrow: "TZS",
              symbol: "TZS"
            },
            UAH: {
              displayName: {
                other: "우크라이나 그리브나"
              },
              narrow: "₴",
              symbol: "UAH"
            },
            UAK: {
              displayName: {
                other: "우크라이나 카보바네츠"
              },
              narrow: "UAK",
              symbol: "UAK"
            },
            UGS: {
              displayName: {
                other: "우간다 실링 (1966–1987)"
              },
              narrow: "UGS",
              symbol: "UGS"
            },
            UGX: {
              displayName: {
                other: "우간다 실링"
              },
              narrow: "UGX",
              symbol: "UGX"
            },
            USD: {
              displayName: {
                other: "미국 달러"
              },
              narrow: "$",
              symbol: "US$"
            },
            USN: {
              displayName: {
                other: "미국 달러(다음날)"
              },
              narrow: "USN",
              symbol: "USN"
            },
            USS: {
              displayName: {
                other: "미국 달러(당일)"
              },
              narrow: "USS",
              symbol: "USS"
            },
            UYI: {
              displayName: {
                other: "우루과이 페소 (UI)"
              },
              narrow: "UYI",
              symbol: "UYI"
            },
            UYP: {
              displayName: {
                other: "우루과이 페소 (1975–1993)"
              },
              narrow: "UYP",
              symbol: "UYP"
            },
            UYU: {
              displayName: {
                other: "우루과이 페소"
              },
              narrow: "$",
              symbol: "UYU"
            },
            UZS: {
              displayName: {
                other: "우즈베키스탄 숨"
              },
              narrow: "UZS",
              symbol: "UZS"
            },
            VEB: {
              displayName: {
                other: "베네주엘라 볼리바르 (1871–2008)"
              },
              narrow: "VEB",
              symbol: "VEB"
            },
            VEF: {
              displayName: {
                other: "베네수엘라 볼리바르 (2008–2018)"
              },
              narrow: "Bs",
              symbol: "VEF"
            },
            VES: {
              displayName: {
                other: "베네수엘라 볼리바르"
              },
              narrow: "VES",
              symbol: "VES"
            },
            VND: {
              displayName: {
                other: "베트남 동"
              },
              narrow: "₫",
              symbol: "₫"
            },
            VNN: {
              displayName: {
                other: "베트남 동 (1978–1985)"
              },
              narrow: "VNN",
              symbol: "VNN"
            },
            VUV: {
              displayName: {
                other: "바누아투 바투"
              },
              narrow: "VUV",
              symbol: "VUV"
            },
            WST: {
              displayName: {
                other: "서 사모아 탈라"
              },
              narrow: "WST",
              symbol: "WST"
            },
            XAF: {
              displayName: {
                other: "중앙아프리카 CFA 프랑"
              },
              narrow: "FCFA",
              symbol: "FCFA"
            },
            XAG: {
              displayName: {
                other: "은화"
              },
              narrow: "XAG",
              symbol: "XAG"
            },
            XAU: {
              displayName: {
                other: "금"
              },
              narrow: "XAU",
              symbol: "XAU"
            },
            XBA: {
              displayName: {
                other: "유르코 (유럽 회계 단위)"
              },
              narrow: "XBA",
              symbol: "XBA"
            },
            XBB: {
              displayName: {
                other: "유럽 통화 동맹"
              },
              narrow: "XBB",
              symbol: "XBB"
            },
            XBC: {
              displayName: {
                other: "유럽 계산 단위 (XBC)"
              },
              narrow: "XBC",
              symbol: "XBC"
            },
            XBD: {
              displayName: {
                other: "유럽 계산 단위 (XBD)"
              },
              narrow: "XBD",
              symbol: "XBD"
            },
            XCD: {
              displayName: {
                other: "동카리브 달러"
              },
              narrow: "$",
              symbol: "EC$"
            },
            XCG: {
              displayName: {},
              narrow: "Cg.",
              symbol: "Cg."
            },
            XDR: {
              displayName: {
                other: "특별인출권"
              },
              narrow: "XDR",
              symbol: "XDR"
            },
            XEU: {
              displayName: {
                other: "유럽 환율 단위"
              },
              narrow: "XEU",
              symbol: "XEU"
            },
            XFO: {
              displayName: {
                other: "프랑스 프랑 (Gold)"
              },
              narrow: "XFO",
              symbol: "XFO"
            },
            XFU: {
              displayName: {
                other: "프랑스 프랑 (UIC)"
              },
              narrow: "XFU",
              symbol: "XFU"
            },
            XOF: {
              displayName: {
                other: "서아프리카 CFA 프랑"
              },
              narrow: "F CFA",
              symbol: "F CFA"
            },
            XPD: {
              displayName: {
                other: "팔라듐"
              },
              narrow: "XPD",
              symbol: "XPD"
            },
            XPF: {
              displayName: {
                other: "CFP 프랑"
              },
              narrow: "CFPF",
              symbol: "CFPF"
            },
            XPT: {
              displayName: {
                other: "백금"
              },
              narrow: "XPT",
              symbol: "XPT"
            },
            XRE: {
              displayName: {
                other: "RINET 기금"
              },
              narrow: "XRE",
              symbol: "XRE"
            },
            XTS: {
              displayName: {
                other: "테스트 통화 코드"
              },
              narrow: "XTS",
              symbol: "XTS"
            },
            XXX: {
              displayName: {
                other: "(알 수 없는 통화 단위)"
              },
              narrow: "¤",
              symbol: "¤"
            },
            YDD: {
              displayName: {
                other: "예멘 디나르"
              },
              narrow: "YDD",
              symbol: "YDD"
            },
            YER: {
              displayName: {
                other: "예멘 리알"
              },
              narrow: "YER",
              symbol: "YER"
            },
            YUD: {
              displayName: {
                other: "유고슬라비아 동전 디나르"
              },
              narrow: "YUD",
              symbol: "YUD"
            },
            YUM: {
              displayName: {
                other: "유고슬라비아 노비 디나르"
              },
              narrow: "YUM",
              symbol: "YUM"
            },
            YUN: {
              displayName: {
                other: "유고슬라비아 전환 디나르"
              },
              narrow: "YUN",
              symbol: "YUN"
            },
            ZAL: {
              displayName: {
                other: "남아프리카 랜드 (금융)"
              },
              narrow: "ZAL",
              symbol: "ZAL"
            },
            ZAR: {
              displayName: {
                other: "남아프리카 랜드"
              },
              narrow: "R",
              symbol: "ZAR"
            },
            ZMK: {
              displayName: {
                other: "쟘비아 콰쳐 (1968–2012)"
              },
              narrow: "ZMK",
              symbol: "ZMK"
            },
            ZMW: {
              displayName: {
                other: "잠비아 콰차"
              },
              narrow: "ZK",
              symbol: "ZMW"
            },
            ZRN: {
              displayName: {
                other: "자이르 신권 자이르"
              },
              narrow: "ZRN",
              symbol: "ZRN"
            },
            ZRZ: {
              displayName: {
                other: "자이르 자이르"
              },
              narrow: "ZRZ",
              symbol: "ZRZ"
            },
            ZWD: {
              displayName: {
                other: "짐바브웨 달러"
              },
              narrow: "ZWD",
              symbol: "ZWD"
            },
            ZWL: {
              displayName: {
                other: "짐바브웨 달러 (2009)"
              },
              narrow: "ZWL",
              symbol: "ZWL"
            },
            ZWR: {
              displayName: {
                other: "짐바브웨 달러 (2008)"
              },
              narrow: "ZWR",
              symbol: "ZWR"
            }
          },
          nu: ["latn"],
          numbers: {
            currency: {
              latn: {
                accounting: "¤#,##0.00;(¤#,##0.00)",
                currencySpacing: {
                  afterInsertBetween: " ",
                  beforeInsertBetween: " "
                },
                short: {
                  1e3: {
                    other: "¤0천"
                  },
                  1e4: {
                    other: "¤0만"
                  },
                  1e5: {
                    other: "¤00만"
                  },
                  1e6: {
                    other: "¤000만"
                  },
                  1e7: {
                    other: "¤0000만"
                  },
                  1e8: {
                    other: "¤0억"
                  },
                  1e9: {
                    other: "¤00억"
                  },
                  1e10: {
                    other: "¤000억"
                  },
                  1e11: {
                    other: "¤0000억"
                  },
                  1e12: {
                    other: "¤0조"
                  },
                  1e13: {
                    other: "¤00조"
                  },
                  1e14: {
                    other: "¤000조"
                  }
                },
                standard: "¤#,##0.00",
                unitPattern: "{0} {1}"
              }
            },
            decimal: {
              latn: {
                long: {
                  1e3: {
                    other: "0천"
                  },
                  1e4: {
                    other: "0만"
                  },
                  1e5: {
                    other: "00만"
                  },
                  1e6: {
                    other: "000만"
                  },
                  1e7: {
                    other: "0000만"
                  },
                  1e8: {
                    other: "0억"
                  },
                  1e9: {
                    other: "00억"
                  },
                  1e10: {
                    other: "000억"
                  },
                  1e11: {
                    other: "0000억"
                  },
                  1e12: {
                    other: "0조"
                  },
                  1e13: {
                    other: "00조"
                  },
                  1e14: {
                    other: "000조"
                  }
                },
                short: {
                  1e3: {
                    other: "0천"
                  },
                  1e4: {
                    other: "0만"
                  },
                  1e5: {
                    other: "00만"
                  },
                  1e6: {
                    other: "000만"
                  },
                  1e7: {
                    other: "0000만"
                  },
                  1e8: {
                    other: "0억"
                  },
                  1e9: {
                    other: "00억"
                  },
                  1e10: {
                    other: "000억"
                  },
                  1e11: {
                    other: "0000억"
                  },
                  1e12: {
                    other: "0조"
                  },
                  1e13: {
                    other: "00조"
                  },
                  1e14: {
                    other: "000조"
                  }
                },
                standard: "#,##0.###"
              }
            },
            nu: ["latn"],
            percent: {
              latn: "#,##0%"
            },
            symbols: {
              latn: {
                approximatelySign: "~",
                decimal: ".",
                exponential: "E",
                group: ",",
                infinity: "∞",
                list: ";",
                minusSign: "-",
                nan: "NaN",
                perMille: "‰",
                percentSign: "%",
                plusSign: "+",
                rangeSign: "~",
                superscriptingExponent: "×",
                timeSeparator: ":"
              }
            }
          },
          units: {
            compound: {
              per: {
                long: "{1}당 {0}",
                narrow: "{0}/{1}",
                short: "{0}/{1}"
              }
            },
            simple: {
              acre: {
                long: {
                  other: "{0}에이커"
                },
                narrow: {
                  other: "{0}ac"
                },
                perUnit: {},
                short: {
                  other: "{0}ac"
                }
              },
              bit: {
                long: {
                  other: "{0}비트"
                },
                narrow: {
                  other: "{0}bit"
                },
                perUnit: {},
                short: {
                  other: "{0}bit"
                }
              },
              byte: {
                long: {
                  other: "{0}바이트"
                },
                narrow: {
                  other: "{0}byte"
                },
                perUnit: {},
                short: {
                  other: "{0}byte"
                }
              },
              celsius: {
                long: {
                  other: "섭씨 {0}도"
                },
                narrow: {
                  other: "{0}°C"
                },
                perUnit: {},
                short: {
                  other: "{0}°C"
                }
              },
              centimeter: {
                long: {
                  other: "{0}센티미터"
                },
                narrow: {
                  other: "{0}cm"
                },
                perUnit: {
                  long: "센티미터당 {0}",
                  narrow: "{0}/cm",
                  short: "{0}/cm"
                },
                short: {
                  other: "{0}cm"
                }
              },
              day: {
                long: {
                  other: "{0}일"
                },
                narrow: {
                  other: "{0}일"
                },
                perUnit: {
                  long: "일당 {0}",
                  narrow: "{0}/일",
                  short: "{0}/일"
                },
                short: {
                  other: "{0}일"
                }
              },
              degree: {
                long: {
                  other: "{0}도"
                },
                narrow: {
                  other: "{0}°"
                },
                perUnit: {},
                short: {
                  other: "{0}°"
                }
              },
              fahrenheit: {
                long: {
                  other: "화씨 {0}도"
                },
                narrow: {
                  other: "{0}°F"
                },
                perUnit: {},
                short: {
                  other: "{0}°F"
                }
              },
              "fluid-ounce": {
                long: {
                  other: "{0}액량 온스"
                },
                narrow: {
                  other: "{0}fl oz"
                },
                perUnit: {},
                short: {
                  other: "{0}fl oz"
                }
              },
              foot: {
                long: {
                  other: "{0}피트"
                },
                narrow: {
                  other: "{0}′"
                },
                perUnit: {
                  long: "피트당 {0}",
                  narrow: "{0}/ft",
                  short: "{0}/ft"
                },
                short: {
                  other: "{0}ft"
                }
              },
              gallon: {
                long: {
                  other: "{0}갤런"
                },
                narrow: {
                  other: "{0}gal"
                },
                perUnit: {
                  long: "갤런당 {0}",
                  narrow: "{0}/gal",
                  short: "{0}/gal"
                },
                short: {
                  other: "{0}gal"
                }
              },
              gigabit: {
                long: {
                  other: "{0}기가비트"
                },
                narrow: {
                  other: "{0}Gb"
                },
                perUnit: {},
                short: {
                  other: "{0}Gb"
                }
              },
              gigabyte: {
                long: {
                  other: "{0}기가바이트"
                },
                narrow: {
                  other: "{0}GB"
                },
                perUnit: {},
                short: {
                  other: "{0}GB"
                }
              },
              gram: {
                long: {
                  other: "{0}그램"
                },
                narrow: {
                  other: "{0}g"
                },
                perUnit: {
                  long: "그램당 {0}",
                  narrow: "{0}/g",
                  short: "{0}/g"
                },
                short: {
                  other: "{0}g"
                }
              },
              hectare: {
                long: {
                  other: "{0}헥타르"
                },
                narrow: {
                  other: "{0}ha"
                },
                perUnit: {},
                short: {
                  other: "{0}ha"
                }
              },
              hour: {
                long: {
                  other: "{0}시간"
                },
                narrow: {
                  other: "{0}시간"
                },
                perUnit: {
                  long: "시간당 {0}",
                  narrow: "{0}/시간",
                  short: "{0}/h"
                },
                short: {
                  other: "{0}시간"
                }
              },
              inch: {
                long: {
                  other: "{0}인치"
                },
                narrow: {
                  other: "{0}″"
                },
                perUnit: {
                  long: "인치당 {0}",
                  narrow: "{0}/in",
                  short: "{0}/in"
                },
                short: {
                  other: "{0}in"
                }
              },
              kilobit: {
                long: {
                  other: "{0}킬로비트"
                },
                narrow: {
                  other: "{0}kb"
                },
                perUnit: {},
                short: {
                  other: "{0}kb"
                }
              },
              kilobyte: {
                long: {
                  other: "{0}킬로바이트"
                },
                narrow: {
                  other: "{0}kB"
                },
                perUnit: {},
                short: {
                  other: "{0}kB"
                }
              },
              kilogram: {
                long: {
                  other: "{0}킬로그램"
                },
                narrow: {
                  other: "{0}kg"
                },
                perUnit: {
                  long: "킬로그램당 {0}",
                  narrow: "{0}/kg",
                  short: "{0}/kg"
                },
                short: {
                  other: "{0}kg"
                }
              },
              kilometer: {
                long: {
                  other: "{0}킬로미터"
                },
                narrow: {
                  other: "{0}km"
                },
                perUnit: {
                  long: "킬로미터당 {0}",
                  narrow: "{0}/km",
                  short: "{0}/km"
                },
                short: {
                  other: "{0}km"
                }
              },
              "kilometer-per-hour": {
                long: {
                  other: "시속 {0}킬로미터"
                },
                narrow: {
                  other: "{0}km/h"
                },
                perUnit: {},
                short: {
                  other: "{0}km/h"
                }
              },
              liter: {
                long: {
                  other: "{0}리터"
                },
                narrow: {
                  other: "{0}L"
                },
                perUnit: {
                  long: "리터당 {0}",
                  narrow: "{0}/L",
                  short: "{0}/L"
                },
                short: {
                  other: "{0}L"
                }
              },
              "liter-per-kilometer": {
                long: {
                  other: "킬로미터당 {0}리터"
                },
                narrow: {
                  other: "{0}L/km"
                },
                perUnit: {},
                short: {
                  other: "{0}L/km"
                }
              },
              megabit: {
                long: {
                  other: "{0}메가비트"
                },
                narrow: {
                  other: "{0}Mb"
                },
                perUnit: {},
                short: {
                  other: "{0}Mb"
                }
              },
              megabyte: {
                long: {
                  other: "{0}메가바이트"
                },
                narrow: {
                  other: "{0}MB"
                },
                perUnit: {},
                short: {
                  other: "{0}MB"
                }
              },
              meter: {
                long: {
                  other: "{0}미터"
                },
                narrow: {
                  other: "{0}m"
                },
                perUnit: {
                  long: "미터당 {0}",
                  narrow: "{0}/m",
                  short: "{0}/m"
                },
                short: {
                  other: "{0}m"
                }
              },
              "meter-per-second": {
                long: {
                  other: "초속 {0}미터"
                },
                narrow: {
                  other: "{0}m/s"
                },
                perUnit: {},
                short: {
                  other: "{0}m/s"
                }
              },
              mile: {
                long: {
                  other: "{0}마일"
                },
                narrow: {
                  other: "{0}mi"
                },
                perUnit: {},
                short: {
                  other: "{0}mi"
                }
              },
              "mile-per-gallon": {
                long: {
                  other: "갤런당 {0}마일"
                },
                narrow: {
                  other: "{0}mpg"
                },
                perUnit: {},
                short: {
                  other: "{0}mpg"
                }
              },
              "mile-per-hour": {
                long: {
                  other: "시속 {0}마일"
                },
                narrow: {
                  other: "{0}mph"
                },
                perUnit: {},
                short: {
                  other: "{0}mi/h"
                }
              },
              "mile-scandinavian": {
                long: {
                  other: "{0}스칸디나비아 마일"
                },
                narrow: {
                  other: "{0}smi"
                },
                perUnit: {},
                short: {
                  other: "{0}smi"
                }
              },
              milliliter: {
                long: {
                  other: "{0}밀리리터"
                },
                narrow: {
                  other: "{0}mL"
                },
                perUnit: {},
                short: {
                  other: "{0}mL"
                }
              },
              millimeter: {
                long: {
                  other: "{0}밀리미터"
                },
                narrow: {
                  other: "{0}mm"
                },
                perUnit: {},
                short: {
                  other: "{0}mm"
                }
              },
              millisecond: {
                long: {
                  other: "{0}밀리초"
                },
                narrow: {
                  other: "{0}ms"
                },
                perUnit: {},
                short: {
                  other: "{0}ms"
                }
              },
              minute: {
                long: {
                  other: "{0}분"
                },
                narrow: {
                  other: "{0}분"
                },
                perUnit: {
                  long: "분당 {0}",
                  narrow: "{0}/분",
                  short: "{0}/min"
                },
                short: {
                  other: "{0}분"
                }
              },
              month: {
                long: {
                  other: "{0}개월"
                },
                narrow: {
                  other: "{0}개월"
                },
                perUnit: {
                  long: "월당 {0}",
                  narrow: "{0}/월",
                  short: "{0}/월"
                },
                short: {
                  other: "{0}개월"
                }
              },
              ounce: {
                long: {
                  other: "{0}온스"
                },
                narrow: {
                  other: "{0}oz"
                },
                perUnit: {
                  long: "온스당 {0}",
                  narrow: "{0}/oz",
                  short: "{0}/oz"
                },
                short: {
                  other: "{0}oz"
                }
              },
              percent: {
                long: {
                  other: "{0}%"
                },
                narrow: {
                  other: "{0}%"
                },
                perUnit: {},
                short: {
                  other: "{0}%"
                }
              },
              petabyte: {
                long: {
                  other: "{0}페타바이트"
                },
                narrow: {
                  other: "{0}PB"
                },
                perUnit: {},
                short: {
                  other: "{0}PB"
                }
              },
              pound: {
                long: {
                  other: "{0}파운드"
                },
                narrow: {
                  other: "{0}lb"
                },
                perUnit: {
                  long: "파운드당 {0}",
                  narrow: "{0}/lb",
                  short: "{0}/lb"
                },
                short: {
                  other: "{0}lb"
                }
              },
              second: {
                long: {
                  other: "{0}초"
                },
                narrow: {
                  other: "{0}초"
                },
                perUnit: {
                  long: "초당 {0}",
                  narrow: "{0}/초",
                  short: "{0}/s"
                },
                short: {
                  other: "{0}초"
                }
              },
              stone: {
                long: {
                  other: "{0}스톤"
                },
                narrow: {
                  other: "{0}st"
                },
                perUnit: {},
                short: {
                  other: "{0}st"
                }
              },
              terabit: {
                long: {
                  other: "{0}테라비트"
                },
                narrow: {
                  other: "{0}Tb"
                },
                perUnit: {},
                short: {
                  other: "{0}Tb"
                }
              },
              terabyte: {
                long: {
                  other: "{0}테라바이트"
                },
                narrow: {
                  other: "{0}TB"
                },
                perUnit: {},
                short: {
                  other: "{0}TB"
                }
              },
              week: {
                long: {
                  other: "{0}주"
                },
                narrow: {
                  other: "{0}주"
                },
                perUnit: {
                  long: "주당 {0}",
                  narrow: "{0}/주",
                  short: "{0}/주"
                },
                short: {
                  other: "{0}주"
                }
              },
              yard: {
                long: {
                  other: "{0}야드"
                },
                narrow: {
                  other: "{0}yd"
                },
                perUnit: {},
                short: {
                  other: "{0}yd"
                }
              },
              year: {
                long: {
                  other: "{0}년"
                },
                narrow: {
                  other: "{0}년"
                },
                perUnit: {
                  long: "연당 {0}",
                  narrow: "{0}/년",
                  short: "{0}/년"
                },
                short: {
                  other: "{0}년"
                }
              }
            }
          }
        },
        locale: "ko"
      })
    }
  }
]);