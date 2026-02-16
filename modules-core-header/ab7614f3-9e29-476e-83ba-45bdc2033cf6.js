try {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new a.Error).stack;
  e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "ab7614f3-9e29-476e-83ba-45bdc2033cf6", a._sentryDebugIdIdentifier = "sentry-dbid-ab7614f3-9e29-476e-83ba-45bdc2033cf6")
} catch (a) {} {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[(new a.Error).stack] = Object.assign({}, a._sentryModuleMetadata[(new a.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [1604], {
    1157: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    3818: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    3933: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    6927: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81f92d6438abb2b88c813d8eaeab8d3f.jpg"
    },
    7509: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    8494: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    10046: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    10111: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    10869: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    11016: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/74576fdc36948700777d06f9b8db2eec.jpg"
    },
    12602: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    13095: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    13890: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4eaaed791df32e91f97107b262830371.jpg"
    },
    14724: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    14825: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    16044: (a, e, t) => {
      var n = {
        "./VI/mobile/de_de.jpg": 35996,
        "./VI/mobile/en_us.jpg": 27109,
        "./VI/mobile/es_es.jpg": 79258,
        "./VI/mobile/es_mx.jpg": 36725,
        "./VI/mobile/fr_fr.jpg": 83118,
        "./VI/mobile/it_it.jpg": 34416,
        "./VI/mobile/ja_jp.jpg": 84705,
        "./VI/mobile/ko_kr.jpg": 33055,
        "./VI/mobile/pl_pl.jpg": 37098,
        "./VI/mobile/pt_br.jpg": 84598,
        "./VI/mobile/ru_ru.jpg": 20340,
        "./VI/mobile/zh_hans.jpg": 16264,
        "./VI/mobile/zh_tw.jpg": 6927
      };

      function s(a) {
        var e = o(a);
        return t(e)
      }

      function o(a) {
        if (!t.o(n, a)) {
          var e = new Error("Cannot find module '" + a + "'");
          throw e.code = "MODULE_NOT_FOUND", e
        }
        return n[a]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = o, a.exports = s, s.id = 16044
    },
    16264: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a9ff3cac0e6f01352186a60a37f17a8f.jpg"
    },
    18518: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    19552: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    20144: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5050d09bf65a09d316c5c4344c2c38fb.jpg"
    },
    20340: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/524705aa18bd4ecfe65a7604fe553bea.jpg"
    },
    22844: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    23587: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    24808: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    26788: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    27064: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    27109: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9184d16412d42140f30a1d0c16db22b1.jpg"
    },
    28005: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    31248: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    32830: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    33055: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4fb18f10480c1ce10ca7faaad9a2aea7.jpg"
    },
    33143: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    34416: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d748d12cf8cc854121e8be9860ed409.jpg"
    },
    35996: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44a3bdc0a87eb98dc369735737deaf33.jpg"
    },
    36725: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48f3ad2d0327e0b1b30934487535181.jpg"
    },
    37098: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/79aabd673e6726aec41e898bb1b4dca5.jpg"
    },
    37758: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/42eaeed54ffe28ca0cf5ca0babdc19a4.jpg"
    },
    38537: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e66ce9502ddace9f8b0a8496f0cdcda.jpg"
    },
    39003: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1293618750cb6ba3f62e73c5633032f8.jpg"
    },
    39294: (a, e, t) => {
      var n = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 13890,
        "./VI/desktop/ru_ru.jpg": 11016,
        "./VI/desktop/zh_hans.jpg": 95732,
        "./VI/desktop/zh_tw.jpg": 65667,
        "./VI/mobile/de_de.jpg": 35996,
        "./VI/mobile/en_us.jpg": 27109,
        "./VI/mobile/es_es.jpg": 79258,
        "./VI/mobile/es_mx.jpg": 36725,
        "./VI/mobile/fr_fr.jpg": 83118,
        "./VI/mobile/it_it.jpg": 34416,
        "./VI/mobile/ja_jp.jpg": 84705,
        "./VI/mobile/ko_kr.jpg": 33055,
        "./VI/mobile/pl_pl.jpg": 37098,
        "./VI/mobile/pt_br.jpg": 84598,
        "./VI/mobile/ru_ru.jpg": 20340,
        "./VI/mobile/zh_hans.jpg": 16264,
        "./VI/mobile/zh_tw.jpg": 6927,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function s(a) {
        var e = o(a);
        return t(e)
      }

      function o(a) {
        if (!t.o(n, a)) {
          var e = new Error("Cannot find module '" + a + "'");
          throw e.code = "MODULE_NOT_FOUND", e
        }
        return n[a]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = o, a.exports = s, s.id = 39294
    },
    40401: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5486652b229530cf4b752c25531e251f.jpg"
    },
    42043: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    42787: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    44596: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    47534: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e66ce9502ddace9f8b0a8496f0cdcda.jpg"
    },
    51048: (a, e, t) => {
      var n = {
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 13890,
        "./VI/desktop/ru_ru.jpg": 11016,
        "./VI/desktop/zh_hans.jpg": 95732,
        "./VI/desktop/zh_tw.jpg": 65667
      };

      function s(a) {
        var e = o(a);
        return t(e)
      }

      function o(a) {
        if (!t.o(n, a)) {
          var e = new Error("Cannot find module '" + a + "'");
          throw e.code = "MODULE_NOT_FOUND", e
        }
        return n[a]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = o, a.exports = s, s.id = 51048
    },
    52014: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    52461: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52591: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    57258: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    59414: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    59655: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    59942: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63365: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6205f3bd39adb33d23221501f6506dc5.jpg"
    },
    63839: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    64923: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    65667: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3ce78f679abdee82651d753a47e38532.jpg"
    },
    67181: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    72994: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04fad38dffabad52092b45f9a3cee88b.jpg"
    },
    73483: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    73534: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    73564: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    77264: (a, e, t) => {
      "use strict";
      t.r(e), t.d(e, {
        Actions: () => st,
        AvatarMenu: () => ge,
        AvatarMenuLanguageLabel: () => be,
        AvatarMenuSection: () => me,
        AvatarMenuSectionContent: () => he,
        AvatarMenuSectionHeader: () => pe,
        AvatarMenuSectionHeaderDropdown: () => ue,
        Breakpoint: () => Pa,
        CallToAction: () => _t,
        GLOBAL_NAVIGATION_COLOR_VAR: () => Ea,
        Header: () => qa,
        Menu: () => Me,
        MenuContent: () => Oe,
        MenuIcon: () => Ee,
        MenuItem: () => je,
        MenuLink: () => qe,
        MenuList: () => Ce,
        MenuSub: () => Be,
        MenuTrigger: () => Ge,
        MobileMenu: () => Qa,
        MobileMenuNav: () => $a,
        NavigationWrapper: () => nt,
        QuickMenu: () => we,
        Root: () => Ja,
        Search: () => vt,
        SearchBar: () => ut,
        SearchContainer: () => pt,
        SearchError: () => yt,
        SearchFilters: () => ht,
        SearchTarget: () => bt,
        SearchTargetDropdown: () => wt,
        SiteTitle: () => jt
      });
      var n = {};
      t.r(n), t.d(n, {
        beaterator: () => i,
        bully: () => g,
        careers: () => v,
        gta: () => m,
        gta2: () => p,
        gta3: () => u,
        gta4: () => h,
        gta5: () => b,
        gtaAdvance: () => f,
        gtaCtw: () => w,
        gtaIvEflc: () => y,
        gtaLcs: () => k,
        gtaLondon: () => x,
        gtaOnline: () => M,
        gtaPlus: () => C,
        gtaSanAndreas: () => T,
        gtaTrilogy: () => j,
        gtaVc: () => G,
        gtaVcs: () => A,
        laNoire: () => S,
        manhunt: () => I,
        manhunt2: () => L,
        maxPayne: () => z,
        maxPayne2: () => P,
        maxPayne3: () => R,
        midnightclub: () => N,
        midnightclub2: () => V,
        midnightclub3: () => O,
        midnightclubStreetRacing: () => D,
        oni: () => B,
        readDeadOnline: () => E,
        redDeadRedemption: () => q,
        redDeadRedemption2: () => F,
        redDeadRedemptionUndeadNightmare: () => J,
        redDeadRevolver: () => H,
        rsg: () => W,
        skateAndDestroy: () => K,
        smugglersRun: () => $,
        smugglersRun2: () => Y,
        smugglersRunWarzones: () => Q,
        stateOfEmergency: () => U,
        tableTennis: () => Z,
        theItalianJob: () => X,
        theWarriors: () => aa,
        wildMetal: () => ea
      });
      var s = {};
      t.r(s), t.d(s, {
        GamesMenu: () => Ye,
        GamesMenuItem: () => Qe,
        default: () => Xe
      });
      var o = t(42295),
        r = t(71127),
        _ = t(79867);
      const i = () => ({
        site: "beaterator",
        appearancePaths: {
          [_.C.www]: [{
            path: "/games/beaterator/*",
            options: {}
          }]
        },
        brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
        links: []
      });
      var l = t(81788);
      const c = (0, l.defineMessages)({
          nav_rockstargames_home: {
            id: "nav_rockstargames_home",
            description: "Global navigation, Rockstar Games Home",
            defaultMessage: "Rockstar Games Home"
          },
          nav_rockstargames_logo: {
            id: "nav_rockstargames_logo",
            description: "Global navigation, Rockstar Games Logo that opens the Quick Access Menu",
            defaultMessage: "Click to open menu"
          },
          nav_gtao_overview: {
            id: "nav_gtao_overview",
            description: "Global navigation, gtao variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_gtao_gtao: {
            id: "nav_gtao_gtao",
            description: "Global navigation, gtao variant - GTA Online text link",
            defaultMessage: "GTA Online"
          },
          nav_gtao_discover: {
            id: "nav_gtao_discover",
            description: "Global navigation, gtao variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_gtao_my_character: {
            id: "nav_gtao_my_character",
            description: "Global navigation, gtao variant - My Character text link",
            defaultMessage: "My Character"
          },
          nav_gtao_twitch_drops: {
            id: "nav_gtao_twitch_drops",
            description: "Global navigation, gtao variant - Twitch Drops text link",
            defaultMessage: "Twitch Drops"
          },
          nav_gtao_prix_luxury_real_estate: {
            id: "nav_gtao_prix_luxury_real_estate",
            description: "Global navigation, gtao variant - Prix Luxury Real Estate text link",
            defaultMessage: "Prix Luxury Real Estate"
          },
          nav_gtao_career_progress: {
            id: "nav_gtao_career_progress",
            description: "Global navigation, gtao variant - Career Progress text link",
            defaultMessage: "Career Progress"
          },
          nav_gtao_guides: {
            id: "nav_gtao_guides",
            description: "Global navigation, gtao variant - Guides text link",
            defaultMessage: "Guides"
          },
          nav_gtao_license_plate_creator: {
            id: "nav_gtao_license_plate_creator",
            description: "Global navigation, gtao variant - License Plate Creator text link",
            defaultMessage: "License Plate Creator"
          },
          nav_gtao_story: {
            id: "nav_gtao_story",
            description: "Global navigation, gtao variant - Story text link",
            defaultMessage: "Story"
          },
          nav_gtao_stats: {
            id: "nav_gtao_stats",
            description: "Global navigation, gtao variant - Stats text link",
            defaultMessage: "Stats"
          },
          nav_gtao_missions: {
            id: "nav_gtao_missions",
            description: "Global navigation, gtao variant - Missions text link",
            defaultMessage: "Missions"
          },
          nav_gtao_checklist: {
            id: "nav_gtao_checklist",
            description: "Global navigation, gtao variant - Checklist text link",
            defaultMessage: "Checklist"
          },
          nav_gtao_accomplishments: {
            id: "nav_gtao_accomplishments",
            description: "Global navigation, gtao variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_gtao_gta_plus: {
            id: "nav_gtao_gta_plus",
            description: "Global navigation, gtao variant - GTA+ text link",
            defaultMessage: "GTA+"
          },
          nav_gtao_community: {
            id: "nav_gtao_community",
            description: "Global navigation, gtao variant - Community text link",
            defaultMessage: "Community"
          },
          nav_gtao_jobs: {
            id: "nav_gtao_jobs",
            description: "Global navigation, gtao variant - Jobs text link",
            defaultMessage: "Jobs"
          },
          nav_gtao_community_series: {
            id: "nav_gtao_community_series",
            description: "Global navigation, gtao variant - Community Series text link",
            defaultMessage: "Community Series"
          },
          nav_gtao_my_jobs: {
            id: "nav_gtao_my_jobs",
            description: "Global navigation, gtao variant - My jobs text link",
            defaultMessage: "My Jobs"
          },
          nav_gtao_jobs_browse_all: {
            id: "nav_gtao_jobs_browse_all",
            description: "Global navigation, gtao variant - Browse all jobs text link",
            defaultMessage: "Browse All Jobs"
          },
          nav_gtao_crews: {
            id: "nav_gtao_crews",
            description: "Global navigation, gtao variant - Crews text link",
            defaultMessage: "Crews"
          },
          nav_gtao_my_crews: {
            id: "nav_gtao_my_crews",
            description: "Global navigation, gtao variant - My crews text link",
            defaultMessage: "My Crews"
          },
          nav_gtao_browse_crews: {
            id: "nav_gtao_browse_crews",
            description: "Global navigation, gtao variant - Browse all crews text link",
            defaultMessage: "Browse All Crews"
          },
          nav_gtao_crews_create: {
            id: "nav_gtao_crews_create",
            description: "Global navigation, gtao variant - Create a crew text link",
            defaultMessage: "Create a Crew"
          },
          nav_gtao_emblem_editor: {
            id: "nav_gtao_emblem_editor",
            description: "Global navigation, gtao variant - Emblem editor text link",
            defaultMessage: "Emblem Editor"
          },
          nav_gtao_jobs_playlists: {
            id: "nav_gtao_jobs_playlists",
            description: "Global navigation, gtao variant - Playlists text link",
            defaultMessage: "Playlists"
          },
          nav_gtao_photos: {
            id: "nav_gtao_photos",
            description: "Global navigation, gtao variant - Photos text link",
            defaultMessage: "Photos"
          },
          nav_gtao_videos: {
            id: "nav_gtao_videos",
            description: "Global navigation, gtao variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_gtao_support: {
            id: "nav_gtao_support",
            description: "Global navigation, gtao variant - Support text link",
            defaultMessage: "Support"
          },
          nav_gtao_cta_buy_now: {
            id: "nav_gtao_cta_buy_now",
            description: "Global navigation, gtao variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gta_trilogy_overview: {
            id: "nav_gta_trilogy_overview",
            description: "Global navigation, gta trilogy variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_gta_trilogy_accomplishments: {
            id: "nav_gta_trilogy_accomplishments",
            description: "Global navigation, gta trilogy variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_gta_trilogy_gtasa: {
            id: "nav_gta_trilogy_gtasa",
            description: "Global navigation, gta trilogy variant - GTA: San Andreas text link",
            defaultMessage: "GTA: San Andreas"
          },
          nav_gta_trilogy_gtavc: {
            id: "nav_gta_trilogy_gtavc",
            description: "Global navigation, gta trilogy variant - GTA: Vice City text link",
            defaultMessage: "GTA: Vice City"
          },
          nav_gta_trilogy_gta3: {
            id: "nav_gta_trilogy_gta3",
            description: "Global navigation, gta trilogy variant - GTA III text link",
            defaultMessage: "GTA III"
          },
          nav_gta_trilogy_support: {
            id: "nav_gta_trilogy_support",
            description: "Global navigation, gta trilogy variant - Support text link",
            defaultMessage: "Support"
          },
          nav_gta_trilogy_cta_buy_now: {
            id: "nav_gta_trilogy_cta_buy_now",
            description: "Global navigation, gta trilogy variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_bully_game_overview: {
            id: "nav_bully_game_overview",
            description: "Global navigation, Bully variant - Game overview text link",
            defaultMessage: "Discover"
          },
          nav_bully_videos: {
            id: "nav_bully_videos",
            description: "Global navigation, Bully variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_bully_accomplishments: {
            id: "nav_bully_accomplishments",
            description: "Global navigation, Bully variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_bully_support: {
            id: "nav_bully_Overview",
            description: "Global navigation, Bully variant - Support text link",
            defaultMessage: "Support"
          },
          nav_bully_cta_buy_now: {
            id: "nav_bully_cta_buy_now",
            description: "Global navigation, Bully variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_rsg_games: {
            id: "nav_rsg_games",
            description: "Global navigation, rsg variant - Games text link",
            defaultMessage: "Games"
          },
          nav_rsg_newswire: {
            id: "nav_rsg_newswire",
            description: "Global navigation, rsg variant - Newswire text link",
            defaultMessage: "Newswire"
          },
          nav_rsg_videos: {
            id: "nav_rsg_videos",
            description: "Global navigation, rsg variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_rsg_downloads: {
            id: "nav_rsg_downloads",
            description: "Global navigation, rsg variant - Download text link",
            defaultMessage: "Downloads"
          },
          nav_rsg_store: {
            id: "nav_rsg_store",
            description: "Global navigation, rsg variant - Store text link",
            defaultMessage: "Store"
          },
          nav_rsg_support: {
            id: "nav_rsg_support",
            description: "Global navigation, rsg variant - Support text link",
            defaultMessage: "Support"
          },
          nav_rsg_community_guidelines: {
            id: "nav_rsg_community_guidelines",
            description: "Global navigation, rsg variant - Community Guidelines text link",
            defaultMessage: "Community Guidelines"
          },
          nav_rsg_cta_get_launcher: {
            id: "nav_cta_get_launcher",
            description: "Global navigation, rsg variant - Get Launcher text link",
            defaultMessage: "Get Launcher"
          },
          nav_careers_home: {
            id: "nav_careers_home",
            description: "Global navigation, Careers variant - Home text link",
            defaultMessage: "Home"
          },
          nav_careers_openings: {
            id: "nav_careers_openings",
            description: "Global navigation, Careers variant - Openings text link",
            defaultMessage: "Openings"
          },
          nav_careers_contact_us: {
            id: "nav_careers_contact_us",
            description: "Global navigation, Careers variant - Contact us text link",
            defaultMessage: "Contact us"
          },
          nav_careers_careers_on_linkedin: {
            id: "nav_careers_careers_on_linkedin",
            description: "Global navigation, Careers variant - Careers on LinkedIn text link",
            defaultMessage: "Careers on LinkedIn"
          },
          nav_gta3_cta_buy_now: {
            id: "nav_gta3_cta_buy_now",
            description: "Global navigation, GTA3 variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtaiv_overview: {
            id: "nav_gtaiv_overview",
            description: "Global navigation, GTA IV variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_gtaiv_accomplishments: {
            id: "nav_gtaiv_accomplishments",
            description: "Global navigation, GTA IV variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiv_support: {
            id: "nav_gtaiv_support",
            description: "Global navigation, GTA IV variant - Support text link",
            defaultMessage: "Support"
          },
          nav_gtaiv_cta_buy_now: {
            id: "nav_gtaiv_cta_buy_now",
            description: "Global navigation, GTA IV variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtav_overview: {
            id: "nav_gtav_overview",
            description: "Global navigation, GTA V variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_gtav_gta_online: {
            id: "nav_gtav_gta_online",
            description: "Global navigation, GTA V variant - GTA Online text link",
            defaultMessage: "GTA Online"
          },
          nav_gtav_discover: {
            id: "nav_gtav_discover",
            description: "Global navigation, GTA V variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_gtav_my_character: {
            id: "nav_gtav_my_character",
            description: "Global navigation, GTA V variant - My Character text link",
            defaultMessage: "My Character"
          },
          nav_gtav_guides: {
            id: "nav_gtav_guides",
            description: "Global navigation, GTA V variant - Guides text link",
            defaultMessage: "Guides"
          },
          nav_gtav_licence_plate_creator: {
            id: "nav_gtav_licence_plate_creator",
            description: "Global navigation, GTA V variant - License Plate Creator text link",
            defaultMessage: "License Plate Creator"
          },
          nav_gtav_story: {
            id: "nav_gtav_story",
            description: "Global navigation, GTA V variant - Story text link",
            defaultMessage: "Story"
          },
          nav_gtav_stats: {
            id: "nav_gtav_stats",
            description: "Global navigation, GTA V variant - Stats text link",
            defaultMessage: "Stats"
          },
          nav_gtav_missions: {
            id: "nav_gtav_missions",
            description: "Global navigation, GTA V variant - Missions text link",
            defaultMessage: "Missions"
          },
          nav_gtav_checklist: {
            id: "nav_gtav_checklist",
            description: "Global navigation, GTA V variant - Checklist text link",
            defaultMessage: "Checklist"
          },
          nav_gtav_accomplishments: {
            id: "nav_gtav_accomplishments",
            description: "Global navigation, GTA V variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_gtav_gta_plus: {
            id: "nav_gtav_gta_plus",
            description: "Global navigation, GTA V variant - GTA+ text link",
            defaultMessage: "GTA+"
          },
          nav_gtav_community: {
            id: "nav_gtav_community",
            description: "Global navigation, GTA V variant - Community text link",
            defaultMessage: "Community"
          },
          nav_gtav_jobs: {
            id: "nav_gtav_jobs",
            description: "Global navigation, GTA V variant - Jobs text link",
            defaultMessage: "Jobs"
          },
          nav_gtav_community_series: {
            id: "nav_gtav_community_series",
            description: "Global navigation, GTA V variant - Community Series text link",
            defaultMessage: "Community Series"
          },
          nav_gtav_jobs_browse_all: {
            id: "nav_gtav_jobs_browse_all",
            description: "Global navigation, GTA V variant - Browse all jobs text link",
            defaultMessage: "Browse All Jobs"
          },
          nav_gtav_my_jobs: {
            id: "nav_gtav_my_jobs",
            description: "Global navigation, GTA V variant - My Jobs text link",
            defaultMessage: "My Jobs"
          },
          nav_gtav_playlists: {
            id: "nav_gtav_playlists",
            description: "Global navigation, GTA V variant - Playlists text link",
            defaultMessage: "Playlists"
          },
          nav_gtav_crews: {
            id: "nav_gtav_crews",
            description: "Global navigation, GTA V variant - Crews text link",
            defaultMessage: "Crews"
          },
          nav_gtav_crews_browse_all: {
            id: "nav_gtav_crews_browse_all",
            description: "Global navigation, GTA V variant - Browse All Crews text link",
            defaultMessage: "Browse All Crews"
          },
          nav_gtav_my_crews: {
            id: "nav_gtav_my_crews",
            description: "Global navigation, GTA V variant - My Crews text link",
            defaultMessage: "My Crews"
          },
          nav_gtav_create_crew: {
            id: "nav_gtav_create_crew",
            description: "Global navigation, GTA V variant - Create a Crew text link",
            defaultMessage: "Create a Crew"
          },
          nav_gtav_emblem_editor: {
            id: "nav_gtav_emblem_editor",
            description: "Global navigation, GTA V variant - Emblem Editor text link",
            defaultMessage: "Emblem Editor"
          },
          nav_gtav_photos: {
            id: "nav_gtav_photos",
            description: "Global navigation, GTA V variant - Photos text link",
            defaultMessage: "Photos"
          },
          nav_gtav_videos: {
            id: "nav_gtav_videos",
            description: "Global navigation, GTA V variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_gtav_support: {
            id: "nav_gtav_support",
            description: "Global navigation, GTA V variant - Support text link",
            defaultMessage: "Support"
          },
          nav_gtav_cta_buy_now: {
            id: "nav_gtav_cta_buy_now",
            description: "Global navigation, GTA V variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtaiveflc_overview: {
            id: "nav_gtaiveflc_overview",
            description: "Global navigation, GTA: EFLC variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_gtaiveflc_accomplishments: {
            id: "nav_gtaiveflc_accomplishments",
            description: "Global navigation, GTA: EFLC variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiveflc_support: {
            id: "nav_gtaiveflc_support",
            description: "Global navigation, GTA: EFLC variant - Support text link",
            defaultMessage: "Support"
          },
          nav_gtaiveflc_cta_buy_now: {
            id: "nav_gtaiveflc_cta_buy_now",
            description: "Global navigation, GTA EFLC variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtasanandreas_cta_buy_now: {
            id: "nav_gtasanandreas_cta_buy_now",
            description: "Global navigation, GTA: San Andreas variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtavc_discover: {
            id: "nav_gtavc_discover",
            description: "Global navigation, GTA: Vice City variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_gtavc_cta_buy_now: {
            id: "nav_gtavc_cta_buy_now",
            description: "Global navigation, GTA: Vice City variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtavcs_discover: {
            id: "nav_gtavcs_discover",
            description: "Global navigation, GTA: Vice City Stories variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_lanoire_overview: {
            id: "nav_lanoire_overview",
            description: "Global navigation, LA Noire variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_lanoire_official_site: {
            id: "nav_lanoire_official_site",
            description: "Global navigation, LA Noire variant - Official Site text link",
            defaultMessage: "Official Site"
          },
          nav_lanoire_progress: {
            id: "nav_lanoire_progress",
            description: "Global navigation, LA Noire variant - Progress text link",
            defaultMessage: "Progress"
          },
          nav_lanoire_pc_console: {
            id: "nav_lanoire_pc_console",
            description: "Global navigation, LA Noire variant - PC/Console text link",
            defaultMessage: "PC/Console"
          },
          nav_lanoire_case_tracker: {
            id: "nav_lanoire_case_tracker",
            description: "Global navigation, LA Noire variant - Case Tracker text link",
            defaultMessage: "Case Tracker"
          },
          nav_lanoire_checklist: {
            id: "nav_lanoire_checklist",
            description: "Global navigation, LA Noire variant - Checklist text link",
            defaultMessage: "Checklist"
          },
          nav_lanoire_stats: {
            id: "nav_lanoire_stats",
            description: "Global navigation, LA Noire variant - Stats text link",
            defaultMessage: "Stats"
          },
          nav_lanoire_accomplishments: {
            id: "nav_lanoire_accomplishments",
            description: "Global navigation, LA Noire variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_lanoire_badge_pursuit: {
            id: "nav_lanoire_badge_pursuit",
            description: "Global navigation, LA Noire variant - Badge Pursuit text link",
            defaultMessage: "Badge Pursuit"
          },
          nav_lanoire_vr_case_files: {
            id: "nav_lanoire_vr_case_files",
            description: "Global navigation, LA Noire variant - VR Case Files text link",
            defaultMessage: "VR Case Files"
          },
          nav_lanoire_support: {
            id: "nav_lanoire_support",
            description: "Global navigation, LA Noire variant - Support text link",
            defaultMessage: "Support"
          },
          nav_lanoire_cta_buy_now: {
            id: "nav_lanoire_cta_buy_now",
            description: "Global navigation, LA Noire variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_mp3_overview: {
            id: "nav_mp3_overview",
            description: "Global navigation, MP3 variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_mp3_official_site: {
            id: "nav_mp3_official_site",
            description: "Global navigation, MP3 variant - Official Site text link",
            defaultMessage: "Official Site"
          },
          nav_mp3_news: {
            id: "nav_mp3_news",
            description: "Global navigation, MP3 variant - News text link",
            defaultMessage: "News"
          },
          nav_mp3_progress: {
            id: "nav_mp3_progress",
            description: "Global navigation, MP3 variant - Progress text link",
            defaultMessage: "Progress"
          },
          nav_mp3_accomplishments: {
            id: "nav_mp3_accomplishments",
            description: "Global navigation, MP3 variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_mp3_singleplayer: {
            id: "nav_mp3_singleplayer",
            description: "Global navigation, MP3 variant - Singleplayer text link",
            defaultMessage: "Singleplayer"
          },
          nav_mp3_multiplayer: {
            id: "nav_mp3_multiplayer",
            description: "Global navigation, MP3 variant - Multiplayer text link",
            defaultMessage: "Multiplayer"
          },
          nav_mp3_career: {
            id: "nav_mp3_career",
            description: "Global navigation, MP3 variant - Career text link",
            defaultMessage: "Career"
          },
          nav_mp3_checklist: {
            id: "nav_mp3_checklist",
            description: "Global navigation, MP3 variant - Checklist text link",
            defaultMessage: "Checklist"
          },
          nav_mp3_grinds: {
            id: "nav_mp3_grinds",
            description: "Global navigation, MP3 variant - Grinds text link",
            defaultMessage: "Grinds"
          },
          nav_mp3_weapons: {
            id: "nav_mp3_weapons",
            description: "Global navigation, MP3 variant - Weapons text link",
            defaultMessage: "Weapons"
          },
          nav_mp3_chapters: {
            id: "nav_mp3_chapters",
            description: "Global navigation, MP3 variant - Chapters text link",
            defaultMessage: "Chapters"
          },
          nav_mp3_leaderboards: {
            id: "nav_mp3_leaderboards",
            description: "Global navigation, MP3 variant - Leaderboards text link",
            defaultMessage: "Leaderboards"
          },
          nav_mp3_crews: {
            id: "nav_mp3_crews",
            description: "Global navigation, MP3 variant - Crews text link",
            defaultMessage: "Crews"
          },
          nav_mp3_score_attack: {
            id: "nav_mp3_score_attack",
            description: "Global navigation, MP3 variant - Score Attack text link",
            defaultMessage: "Score Attack"
          },
          nav_mp3_ny_minute: {
            id: "nav_mp3_ny_minute",
            description: "Global navigation, MP3 variant - New York Minute text link",
            defaultMessage: "New York Minute"
          },
          nav_mp3_checkpoint_challenge: {
            id: "nav_mp3_checkpoint_challenge",
            description: "Global navigation, MP3 variant - Checkpoint Challenge text link",
            defaultMessage: "Checkpoint Challenge"
          },
          nav_mp3_featured: {
            id: "nav_mp3_featured",
            description: "Global navigation, MP3 variant - Featured text link",
            defaultMessage: "Featured"
          },
          nav_mp3_specifications: {
            id: "nav_mp3_specifications",
            description: "Global navigation, MP3 variant - Specifications text link",
            defaultMessage: "Specifications"
          },
          nav_mp3_support: {
            id: "nav_mp3_support",
            description: "Global navigation, MP3 variant - Support text link",
            defaultMessage: "Support"
          },
          nav_mp3_cta_buy_now: {
            id: "nav_mp3_cta_buy_now",
            description: "Global navigation, MP3 variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_rdr_cta_buy_now: {
            id: "nav_rdr_cta_buy_now",
            description: "Global navigation, RDR variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_rdo_overview: {
            id: "nav_rdo_overview",
            description: "Global navigation, RDO variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_rdo_explore: {
            id: "nav_rdo_explore",
            description: "Global navigation, RDO variant - Explore text link",
            defaultMessage: "Explore"
          },
          nav_rdo_getting_started: {
            id: "nav_rdo_getting_started",
            description: "Global navigation, RDO variant - Getting Started text link",
            defaultMessage: "Getting Started"
          },
          nav_rdo_specialist_roles: {
            id: "nav_rdo_specialist_roles",
            description: "Global navigation, RDO variant - Specialist Roles text link",
            defaultMessage: "Specialist Roles"
          },
          nav_rdo_story_missions: {
            id: "nav_rdo_story_missions",
            description: "Global navigation, RDO variant - Story Missions text link",
            defaultMessage: "Story Missions"
          },
          nav_rdo_posses_free_roam: {
            id: "nav_rdo_posses_free_roam",
            description: "Global navigation, RDO variant - Posses and Free Roam text link",
            defaultMessage: "Posses and Free Roam"
          },
          nav_rdo_competitive_series: {
            id: "nav_rdo_competitive_series",
            description: "Global navigation, RDO variant - Competitive Series text link",
            defaultMessage: "Competitive Series"
          },
          nav_rdo_customization: {
            id: "nav_rdo_customization",
            description: "Global navigation, RDO variant - Customization text link",
            defaultMessage: "Customization"
          },
          nav_rdo_progression: {
            id: "nav_rdo_progression",
            description: "Global navigation, RDO variant - Progression text link",
            defaultMessage: "Progression"
          },
          nav_rdo_progress: {
            id: "nav_rdo_progress",
            description: "Global navigation, RDO variant - Progress text link",
            defaultMessage: "Progress"
          },
          nav_rdo_my_character: {
            id: "nav_rdo_my_character",
            description: "Global navigation, RDO variant - My Character text link",
            defaultMessage: "My Character"
          },
          nav_rdo_roles: {
            id: "nav_rdo_roles",
            description: "Global navigation, RDO variant - Roles text link",
            defaultMessage: "Roles"
          },
          nav_rdo_rank_unlocks: {
            id: "nav_rdo_rank_unlocks",
            description: "Global navigation, RDO variant - Rank Unlocks text link",
            defaultMessage: "Rank Unlocks"
          },
          nav_rdo_awards: {
            id: "nav_rdo_awards",
            description: "Global navigation, RDO variant - Awards text link",
            defaultMessage: "Awards"
          },
          nav_rdo_accomplishments: {
            id: "nav_rdo_accomplishments",
            description: "Global navigation, RDO variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_rdo_benefits: {
            id: "nav_rdo_benefits",
            description: "Global navigation, RDO variant - Benefits text link",
            defaultMessage: "Benefits"
          },
          nav_rdo_guides: {
            id: "nav_rdo_guides",
            description: "Global navigation, RDO variant - Guides text link",
            defaultMessage: "Guides"
          },
          nav_rdo_club_rewards: {
            id: "nav_rdo_club_rewards",
            description: "Global navigation, RDO variant - Club Rewards text link",
            defaultMessage: "Club Rewards"
          },
          nav_rdo_community: {
            id: "nav_rdo_community",
            description: "Global navigation, RDO variant - Community text link",
            defaultMessage: "Community"
          },
          nav_rdo_posses: {
            id: "nav_rdo_posses",
            description: "Global navigation, RDO variant - Posses text link",
            defaultMessage: "Posses"
          },
          nav_rdo_photos: {
            id: "nav_rdo_photos",
            description: "Global navigation, RDO variant - Photos text link",
            defaultMessage: "Photos"
          },
          nav_rdo_catalogue: {
            id: "nav_rdo_catalogue",
            description: "Global navigation, RDO variant - Catalogue text link",
            defaultMessage: "Catalogue"
          },
          nav_rdo_support: {
            id: "nav_rdo_support",
            description: "Global navigation, RDO variant - Support text link",
            defaultMessage: "Support"
          },
          nav_rdo_cta_buy_now: {
            id: "nav_rdo_cta_buy_now",
            description: "Global navigation, RDO variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_rdr2_overview: {
            id: "nav_rdr2_overview",
            description: "Global navigation, RDR2 variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_rdr2_explore: {
            id: "nav_rdr2_explore",
            description: "Global navigation, RDR2 variant - Explore text link",
            defaultMessage: "Explore"
          },
          nav_rdr2_van_der_linde_gang: {
            id: "nav_rdr2_van_der_linde_gang",
            description: "Global navigation, RDR2 variant - The Van der Linde Gang text link",
            defaultMessage: "The Van der Linde Gang"
          },
          nav_rdr2_locations: {
            id: "nav_rdr2_locations",
            description: "Global navigation, RDR2 variant - Locations text link",
            defaultMessage: "Locations"
          },
          nav_rdr2_wildlife: {
            id: "nav_rdr2_wildlife",
            description: "Global navigation, RDR2 variant - Wildlife text link",
            defaultMessage: "Wildlife"
          },
          nav_rdr2_weaponry: {
            id: "nav_rdr2_weaponry",
            description: "Global navigation, RDR2 variant - Weaponry text link",
            defaultMessage: "Weaponry"
          },
          nav_rdr2_progress: {
            id: "nav_rdr2_progress",
            description: "Global navigation, RDR2 variant - Progress text link",
            defaultMessage: "Progress"
          },
          nav_rdr2_stats: {
            id: "nav_rdr2_stats",
            description: "Global navigation, RDR2 variant - Stats text link",
            defaultMessage: "Stats"
          },
          nav_rdr2_chapters: {
            id: "nav_rdr2_chapters",
            description: "Global navigation, RDR2 variant - Chapters text link",
            defaultMessage: "Chapters"
          },
          nav_rdr2_challenges: {
            id: "nav_rdr2_challenges",
            description: "Global navigation, RDR2 variant - Challenges text link",
            defaultMessage: "Challenges"
          },
          nav_rdr2_character: {
            id: "nav_rdr2_character",
            description: "Global navigation, RDR2 variant - Character text link",
            defaultMessage: "Character"
          },
          nav_rdr2_compendium: {
            id: "nav_rdr2_compendium",
            description: "Global navigation, RDR2 variant - Compendium text link",
            defaultMessage: "Compendium"
          },
          nav_rdr2_accomplishments: {
            id: "nav_rdr2_accomplishments",
            description: "Global navigation, RDR2 variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_rdr2_media: {
            id: "nav_rdr2_media",
            description: "Global navigation, RDR2 variant - Media text link",
            defaultMessage: "Media"
          },
          nav_rdr2_gallery: {
            id: "nav_rdr2_gallery",
            description: "Global navigation, RDR2 variant - Gallery text link",
            defaultMessage: "Gallery"
          },
          nav_rdr2_artwork: {
            id: "nav_rdr2_artwork",
            description: "Global navigation, RDR2 variant - Artwork text link",
            defaultMessage: "Artwork"
          },
          nav_rdr2_videos: {
            id: "nav_rdr2_videos",
            description: "Global navigation, RDR2 variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_rdr2_music: {
            id: "nav_rdr2_music",
            description: "Global navigation, RDR2 variant - Music text link",
            defaultMessage: "Music"
          },
          nav_rdr2_online: {
            id: "nav_rdr2_online",
            description: "Global navigation, RDR2 variant - Online text link",
            defaultMessage: "Online"
          },
          nav_rdr2_catalogue: {
            id: "nav_rdr2_catalogue",
            description: "Global navigation, RDR2 variant - Catalogue text link",
            defaultMessage: "Catalogue"
          },
          nav_rdr2_support: {
            id: "nav_rdr2_support",
            description: "Global navigation, RDR2 variant - Support text link",
            defaultMessage: "Support"
          },
          nav_rdr2_cta_buy_now: {
            id: "nav_rdr2_cta_buy_now",
            description: "Global navigation, RDR2 variant - CTA Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_discover: {
            id: "nav_undeadnightmare_discover",
            description: "Global navigation, Undead Nightmare variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_undeadnightmare_info: {
            id: "nav_undeadnightmare_info",
            description: "Global navigation, Undead Nightmare variant - Info text link",
            defaultMessage: "Info"
          },
          nav_undeadnightmare_media: {
            id: "nav_undeadnightmare_media",
            description: "Global navigation, Undead Nightmare variant - Media text link",
            defaultMessage: "Media"
          },
          nav_undeadnightmare_videos: {
            id: "nav_undeadnightmare_videos",
            description: "Global navigation, Undead Nightmare variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_undeadnightmare_gallery: {
            id: "nav_undeadnightmare_gallery",
            description: "Global navigation, Undead Nightmare variant - Gallery text link",
            defaultMessage: "Gallery"
          },
          nav_undeadnightmare_news: {
            id: "nav_undeadnightmare_news",
            description: "Global navigation, Undead Nightmare variant - News text link",
            defaultMessage: "News"
          },
          nav_undeadnightmare_specs: {
            id: "nav_undeadnightmare_specs",
            description: "Global navigation, Undead Nightmare variant - Specifications text link",
            defaultMessage: "Specifications"
          },
          nav_undeadnightmare_suport: {
            id: "nav_undeadnightmare_suport",
            description: "Global navigation, Undead Nightmare variant - Support text link",
            defaultMessage: "Support"
          },
          nav_undeadnightmare_buy_now: {
            id: "nav_undeadnightmare_buy_now",
            description: "Global navigation, Undead Nightmare variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_ps3_digital: {
            id: "nav_undeadnightmare_ps3_digital",
            description: "Global navigation, Undead Nightmare variant - PS3 - Digital text link",
            defaultMessage: "PS3 - Digital"
          },
          nav_undeadnightmare_xbox360_digital: {
            id: "nav_undeadnightmare_xbox360_digital",
            description: "Global navigation, Undead Nightmare variant - Xbox 360  - Digital text link",
            defaultMessage: "Xbox 360  - Digital"
          },
          nav_support_home: {
            id: "nav_support_home",
            description: "Global navigation, Support variant - Home text link",
            defaultMessage: "Home"
          },
          nav_support_service_status: {
            id: "nav_support_service_status",
            description: "Global navigation, Support variant - Service Status text link",
            defaultMessage: "Service Status"
          },
          nav_support_submit_ticket: {
            id: "nav_support_submit_ticket",
            description: "Global navigation, Support variant - Submit a Ticket text link",
            defaultMessage: "Submit a Ticket"
          },
          nav_support_dashboard: {
            id: "nav_support_dashboard",
            description: "Global navigation, Support variant - My Dashboard text link",
            defaultMessage: "My Dashboard"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            description: "Global navigation, Games Menu - Title for games menu",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            description: "Global navigation, Games Menu - View All link",
            defaultMessage: "View All"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            description: "Global navigation, Games Menu Games - Grand Theft Auto V",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            description: "Global navigation, Games Menu Games - Grand Theft Auto Online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            description: "Global navigation, Games Menu Games - Grand Theft Auto: The Trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            description: "Global navigation, Games Menu Games - Red Dead Redemption 2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr_online: {
            id: "games_menu_rdr_online",
            description: "Global navigation, Games Menu Games - Red Dead Online",
            defaultMessage: "Red Dead Online"
          },
          nav_thewarriors_cta_buy_now: {
            id: "nav_thewarriors_cta_buy_now",
            description: "Global navigation, The Warriors variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          search_action: {
            id: "search_action",
            description: "Global navigation search, Search action used on buttons and aria-labels",
            defaultMessage: "Search"
          },
          search_open_button: {
            id: "search_open_button",
            description: "Global navigation search, Button label for opening search input",
            defaultMessage: "Open Search"
          },
          search_close_button: {
            id: "search_close_button",
            description: "Global navigation search, Button label for closing search input",
            defaultMessage: "Close Search"
          },
          search_placeholder: {
            id: "search_placeholder",
            description: "Global navigation search, Placeholder text within search input",
            defaultMessage: "Search Rockstar Games..."
          },
          search_target_aria_label: {
            id: "search_target_aria_label",
            description: 'Global navigation search, Search Target (aria label). Formatted: "Search Games", "Search Community", etc',
            defaultMessage: "Search {target}"
          },
          search_target_games: {
            id: "search_target_games",
            description: "Global navigation search, Search Target - Games",
            defaultMessage: "Games"
          },
          search_target_posts: {
            id: "search_target_posts",
            description: "Global navigation search, Search Target - Posts",
            defaultMessage: "Posts"
          },
          search_target_videos: {
            id: "search_target_videos",
            description: "Global navigation search, Search Target - Videos",
            defaultMessage: "Videos"
          },
          search_target_community: {
            id: "search_target_community",
            description: "Global navigation search, Search Target - Community",
            defaultMessage: "Community"
          },
          search_target_users: {
            id: "search_target_users",
            description: "Global navigation search, Search Target - Users",
            defaultMessage: "Users"
          },
          search_target_crews: {
            id: "search_target_crews",
            description: "Global navigation search, Search Target - Crews",
            defaultMessage: "Crews"
          },
          search_target_jobs: {
            id: "search_target_jobs",
            description: "Global navigation search, Search Target - Jobs",
            defaultMessage: "Jobs"
          },
          sc_link_account: {
            id: "sc_link_account",
            description: "A button that opens the account drop-down.",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            description: "A link to the social club profile page.",
            defaultMessage: "View My Profile"
          },
          sc_link_messages: {
            id: "sc_link_messages",
            description: "A link to the social club messages page.",
            defaultMessage: "Messages"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            description: "A link to the social club game activation page.",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            description: "A link to the social club notifications page.",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            description: "A link to the social club crews page.",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            description: "A button that openes the friends drop-down.",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            description: "A link to the social club friends page.",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            description: "A link to the social club import friends page.",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            description: "A link to the social club find friends page.",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            description: "A link to the social club find settings page.",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            description: "A link to the social club find help page.",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            description: "A link to the social club find support page.",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            description: "A link to the social club find legal page.",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            description: "A link to the social club find privacy policy page.",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            description: "A link to the social club find cookies policy page.",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            description: "A link to the social club find cookies settings page.",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            description: "A link to the social club find do not sell my information page.",
            defaultMessage: "Do Not Sell or Share My Personal Information"
          },
          nofications_new: {
            id: "nofications_new",
            description: "Aria label for new notifications icon.",
            defaultMessage: "New notifications"
          }
        }),
        d = _.C.www,
        g = a => ({
          site: "bully",
          appearancePaths: {
            [_.C.www]: [{
              path: "/bully/*",
              options: {}
            }],
            [_.C.socialClub]: [{
              path: "/games/bully*",
              options: {}
            }, {
              path: "/member/*/games/bully/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
          links: [{
            text: a.formatMessage(c.nav_bully_game_overview),
            gaText: c.nav_bully_game_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: _.C.www,
              path: "/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: a.formatMessage(c.nav_bully_accomplishments),
            gaText: c.nav_bully_accomplishments.defaultMessage,
            type: "nav-internal",
            location: {
              domain: _.C.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: a.formatMessage(c.nav_bully_support),
            gaText: c.nav_bully_support.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: _.C.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: a.formatMessage(c.nav_bully_cta_buy_now),
            gaText: c.nav_bully_cta_buy_now.defaultMessage,
            location: {
              domain: d,
              path: "/bully/?section=order"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        }),
        v = a => ({
          site: "careers",
          appearancePaths: {
            [_.C.www]: [{
              path: "/careers/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a6910245d0cd177a1c2228d2f661b86.svg",
          hideSearch: !0,
          links: [{
            text: a.formatMessage(c.nav_careers_home),
            gaText: c.nav_careers_home.defaultMessage,
            type: "nav-internal",
            location: {
              domain: _.C.www,
              path: "/careers"
            },
            dataTestId: "careersLink"
          }, {
            text: a.formatMessage(c.nav_careers_openings),
            gaText: c.nav_careers_openings.defaultMessage,
            type: "nav-internal",
            location: {
              domain: _.C.www,
              path: "/careers/openings"
            },
            dataTestId: "careersOpeningsLink"
          }, {
            text: a.formatMessage(c.nav_careers_contact_us),
            gaText: c.nav_careers_contact_us.defaultMessage,
            type: "nav-no-link",
            dataTestId: "careersContactUsLink"
          }, {
            text: a.formatMessage(c.nav_careers_careers_on_linkedin),
            gaText: c.nav_careers_careers_on_linkedin.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com",
              path: "/company/rockstar-games/"
            },
            dataTestId: "careersLinkedInLink"
          }]
        }),
        m = () => ({
          site: "gta",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/gta/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
          links: []
        }),
        p = () => ({
          site: "gta2",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/gta2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
          links: []
        }),
        u = a => ({
          site: "grandtheftauto3",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/grandtheftauto3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70d4774a8eb28cbdc69793504746f961.svg",
          links: [],
          cta: {
            text: a.formatMessage(c.nav_gta3_cta_buy_now),
            target: "_blank",
            location: {
              domain: _.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: c.nav_gta3_cta_buy_now.defaultMessage,
            dataTestId: "gta3BuyNowCta"
          }
        }),
        h = a => ({
          site: "gta-iv",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/IV/*",
              options: {}
            }],
            [_.C.socialClub]: [{
              path: "/games/gtaiv*",
              options: {}
            }, {
              path: "/member/*/games/gtaiv*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01dcdecd53de88ec599ab76ce2863fcd.svg",
          links: [{
            text: a.formatMessage(c.nav_gtaiv_overview),
            gaText: c.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: _.C.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: a.formatMessage(c.nav_gtaiv_accomplishments),
            gaText: c.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: _.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(c.nav_gtaiv_support),
            gaText: c.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: _.C.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: a.formatMessage(c.nav_gtaiv_cta_buy_now),
            target: "_blank",
            location: {
              domain: _.C.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            gaText: c.nav_gtaiv_cta_buy_now.defaultMessage,
            dataTestId: "gtaivPurchaseLink"
          }
        }),
        b = a => ({
          site: "gta5",
          appearancePaths: {
            [_.C.www]: [{
              path: "/gta-v/*",
              options: {}
            }],
            [_.C.socialClub]: [{
              path: "/games/gtav/*",
              options: {}
            }, {
              path: "/member/*/games/gtav/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/732efc56393d89076732e76b0a2b55b2.svg",
          links: [{
            dataTestId: "gtavLink",
            location: {
              domain: _.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(c.nav_gtav_overview),
            gaText: c.nav_gtav_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoLink",
              location: {
                domain: _.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(c.nav_gtav_discover),
              gaText: c.nav_gtav_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: _.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(c.nav_gtao_career_progress),
              gaText: c.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(c.nav_gtav_my_character),
              gaText: c.nav_gtav_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: _.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(c.nav_gtav_jobs),
              gaText: c.nav_gtav_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: _.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(c.nav_gtav_guides),
              gaText: c.nav_gtav_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlatesLink",
              location: {
                domain: _.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(c.nav_gtav_licence_plate_creator),
              gaText: c.nav_gtav_licence_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: _.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: a.formatMessage(c.nav_gtao_twitch_drops),
              gaText: c.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMansionsButton",
              location: {
                domain: _.C.www,
                path: "/gta-online/mansions"
              },
              text: a.formatMessage(c.nav_gtao_prix_luxury_real_estate),
              gaText: c.nav_gtao_prix_luxury_real_estate.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(c.nav_gtav_gta_online),
            gaText: c.nav_gtav_gta_online.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtavSpOverviewButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(c.nav_gtav_stats),
              gaText: c.nav_gtav_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpMissionsButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(c.nav_gtav_missions),
              gaText: c.nav_gtav_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpChecklistButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(c.nav_gtav_checklist),
              gaText: c.nav_gtav_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(c.nav_gtav_accomplishments),
              gaText: c.nav_gtav_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavSpLink",
            text: a.formatMessage(c.nav_gtav_story),
            gaText: c.nav_gtav_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtav+Link",
            location: {
              domain: _.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(c.nav_gtav_gta_plus),
            gaText: c.nav_gtav_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              children: [{
                dataTestId: "gtavAllJobsButtons",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                },
                text: a.formatMessage(c.nav_gtav_jobs_browse_all),
                gaText: c.nav_gtav_jobs_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCommunitySeriesLink",
                location: {
                  domain: _.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                text: a.formatMessage(c.nav_gtav_community_series),
                gaText: c.nav_gtav_community_series.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyJobsButtons",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                },
                text: a.formatMessage(c.nav_gtav_my_jobs),
                gaText: c.nav_gtav_my_jobs.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavPlaylistsButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/gtav/playlists"
                },
                text: a.formatMessage(c.nav_gtav_playlists),
                gaText: c.nav_gtav_playlists.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavJobsDropdown",
              text: a.formatMessage(c.nav_gtav_jobs),
              gaText: c.nav_gtav_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              children: [{
                dataTestId: "gtavBrowseCrewsButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/crews"
                },
                text: a.formatMessage(c.nav_gtav_crews_browse_all),
                gaText: c.nav_gtav_crews_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyCrewsButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0,
                text: a.formatMessage(c.nav_gtav_my_crews),
                gaText: c.nav_gtav_my_crews.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateCrewButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/crews/create"
                },
                text: a.formatMessage(c.nav_gtav_create_crew),
                gaText: c.nav_gtav_create_crew.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateEmblemButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/emblems"
                },
                text: a.formatMessage(c.nav_gtav_emblem_editor),
                gaText: c.nav_gtav_emblem_editor.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavCrewsDropdown",
              text: a.formatMessage(c.nav_gtav_crews),
              gaText: c.nav_gtav_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: _.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(c.nav_rsg_community_guidelines),
              gaText: c.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavCommunityDropdown",
            text: a.formatMessage(c.nav_gtav_community),
            gaText: c.nav_gtav_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaSupportLink",
            location: {
              domain: _.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(c.nav_gtav_support),
            gaText: c.nav_gtav_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: a.formatMessage(c.nav_gtav_cta_buy_now),
            location: {
              domain: _.C.www,
              path: "/gta-v?info=order"
            },
            ga: "cta_buy",
            gaText: c.nav_gtav_cta_buy_now.defaultMessage,
            dataTestId: "gtavPurchaseLink"
          }
        }),
        f = () => ({
          site: "grandtheftauto-gba",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/grandtheftauto-gba/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
          links: []
        }),
        w = () => ({
          site: "chinatownwars",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/chinatownwars/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
          links: []
        }),
        y = a => ({
          site: "episodesfromlibertycity",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/episodesfromlibertycity/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a7dfd2058127cb6f5adca6c9b1d91cc.png",
          cta: {
            dataTestId: "gtaiveflcPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: "https://store.rockstargames.com",
              path: "/game/buy-grand-theft-auto-iv"
            },
            text: a.formatMessage(c.nav_gtaiveflc_cta_buy_now),
            gaText: c.nav_gtaiveflc_cta_buy_now.defaultMessage
          },
          links: [{
            text: a.formatMessage(c.nav_gtaiv_overview),
            gaText: c.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: _.C.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: a.formatMessage(c.nav_gtaiv_accomplishments),
            gaText: c.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: _.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(c.nav_gtaiv_support),
            gaText: c.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: _.C.support,
              path: "/categories/115001614848"
            }
          }]
        }),
        k = () => ({
          site: "libertycitystories",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/libertycitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e39e530c8e7a5b1a3243edeaaf0b223.svg",
          links: []
        }),
        x = () => ({
          site: "gtalondon",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/gtalondon/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
          links: []
        }),
        M = a => ({
          site: "gta-online",
          appearancePaths: {
            [_.C.www]: [{
              path: "/gta-online/*",
              options: {}
            }],
            [_.C.socialClub]: [{
              path: "/members*",
              options: {
                isSearchPage: !0
              }
            }, {
              path: "/member/:username/crews*",
              options: {}
            }, {
              path: "/crews*",
              options: {
                isSearchPage: !0
              }
            }, {
              path: "/crew*",
              options: {}
            }, {
              path: "/jobs*",
              options: {
                isSearchPage: !0,
                queryParams: {
                  title: "gtav"
                }
              }
            }, {
              path: "*/jobs*",
              options: {}
            }, {
              path: "/emblems*",
              options: {}
            }, {
              path: "/games/gtav/:platform/career/overview/gtaonline*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d2753ceddb2213d956d51d369985513.svg",
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: _.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(c.nav_gtao_overview),
            gaText: c.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: _.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(c.nav_gtao_discover),
              gaText: c.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: _.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(c.nav_gtao_career_progress),
              gaText: c.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(c.nav_gtao_my_character),
              gaText: c.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: _.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(c.nav_gtao_jobs),
              gaText: c.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: _.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(c.nav_gtao_guides),
              gaText: c.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: _.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(c.nav_gtao_license_plate_creator),
              gaText: c.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: _.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: a.formatMessage(c.nav_gtao_twitch_drops),
              gaText: c.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMansionsButton",
              location: {
                domain: _.C.www,
                path: "/gta-online/mansions"
              },
              text: a.formatMessage(c.nav_gtao_prix_luxury_real_estate),
              gaText: c.nav_gtao_prix_luxury_real_estate.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(c.nav_gtao_gtao),
            gaText: c.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(c.nav_gtao_stats),
              gaText: c.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(c.nav_gtao_missions),
              gaText: c.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(c.nav_gtao_checklist),
              gaText: c.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(c.nav_gtao_accomplishments),
              gaText: c.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: a.formatMessage(c.nav_gtao_story),
            gaText: c.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: _.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(c.nav_gtao_gta_plus),
            gaText: c.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: a.formatMessage(c.nav_gtao_jobs_browse_all),
                gaText: c.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: _.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_community_series),
                gaText: c.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: _.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: a.formatMessage(c.nav_gtao_my_jobs),
                gaText: c.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                requiresAuth: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_jobs_playlists),
                gaText: c.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: _.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: a.formatMessage(c.nav_gtao_jobs),
              gaText: c.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: a.formatMessage(c.nav_gtao_browse_crews),
                gaText: c.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: _.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_my_crews),
                gaText: c.nav_gtao_my_crews.defaultMessage,
                isLegacy: !0,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: _.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(c.nav_gtao_crews_create),
                gaText: c.nav_gtao_crews_create.defaultMessage,
                isLegacy: !0,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: _.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_emblem_editor),
                gaText: c.nav_gtao_emblem_editor.defaultMessage,
                isLegacy: !0,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: _.C.socialClub,
                  path: "/emblems"
                }
              }],
              text: a.formatMessage(c.nav_gtao_crews),
              gaText: c.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: _.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(c.nav_rsg_community_guidelines),
              gaText: c.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: a.formatMessage(c.nav_gtao_community),
            gaText: c.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: _.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(c.nav_gtao_support),
            gaText: c.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: a.formatMessage(c.nav_gtao_cta_buy_now),
            location: {
              domain: _.C.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy",
            gaText: c.nav_gtao_cta_buy_now.defaultMessage,
            dataTestId: "gtaoPurchaseLink"
          }
        }),
        C = a => ({
          site: "gta-plus",
          appearancePaths: {
            [_.C.www]: [{
              path: "/gta-plus/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: _.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(c.nav_gtao_overview),
            gaText: c.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: _.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(c.nav_gtao_discover),
              gaText: c.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: _.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(c.nav_gtao_career_progress),
              gaText: c.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(c.nav_gtao_my_character),
              gaText: c.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: _.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(c.nav_gtao_jobs),
              gaText: c.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: _.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(c.nav_gtao_guides),
              gaText: c.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: _.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(c.nav_gtao_license_plate_creator),
              gaText: c.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: _.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: a.formatMessage(c.nav_gtao_twitch_drops),
              gaText: c.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMansionsButton",
              location: {
                domain: _.C.www,
                path: "/gta-online/mansions"
              },
              text: a.formatMessage(c.nav_gtao_prix_luxury_real_estate),
              gaText: c.nav_gtao_prix_luxury_real_estate.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(c.nav_gtao_gtao),
            gaText: c.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(c.nav_gtao_stats),
              gaText: c.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(c.nav_gtao_missions),
              gaText: c.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(c.nav_gtao_checklist),
              gaText: c.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: _.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(c.nav_gtao_accomplishments),
              gaText: c.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: a.formatMessage(c.nav_gtao_story),
            gaText: c.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: _.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(c.nav_gtao_gta_plus),
            gaText: c.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: a.formatMessage(c.nav_gtao_jobs_browse_all),
                gaText: c.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: _.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_community_series),
                gaText: c.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: _.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: a.formatMessage(c.nav_gtao_my_jobs),
                gaText: c.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: _.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_jobs_playlists),
                gaText: c.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: _.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: a.formatMessage(c.nav_gtao_jobs),
              gaText: c.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: a.formatMessage(c.nav_gtao_browse_crews),
                gaText: c.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: _.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_my_crews),
                gaText: c.nav_gtao_my_crews.defaultMessage,
                isLegacy: !0,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: _.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(c.nav_gtao_crews_create),
                gaText: c.nav_gtao_crews_create.defaultMessage,
                isLegacy: !0,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: _.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_emblem_editor),
                gaText: c.nav_gtao_emblem_editor.defaultMessage,
                isLegacy: !0,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: _.C.socialClub,
                  path: "/emblems/new"
                }
              }],
              text: a.formatMessage(c.nav_gtao_crews),
              gaText: c.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: _.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(c.nav_rsg_community_guidelines),
              gaText: c.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: a.formatMessage(c.nav_gtao_community),
            gaText: c.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: _.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(c.nav_gtao_support),
            gaText: c.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: a.formatMessage(c.nav_gtao_cta_buy_now),
            location: {
              domain: _.C.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy",
            gaText: c.nav_gtao_cta_buy_now.defaultMessage,
            dataTestId: "gtaoPurchaseLink"
          }
        }),
        T = a => ({
          site: "sanandreas",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/sanandreas/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
          links: [],
          cta: {
            text: a.formatMessage(c.nav_gtasanandreas_cta_buy_now),
            target: "_blank",
            location: {
              domain: _.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: c.nav_gtasanandreas_cta_buy_now.defaultMessage,
            dataTestId: "gtaSanAndreasPurchaseLink"
          }
        }),
        j = a => ({
          site: "gta-trilogy",
          appearancePaths: {
            [_.C.www]: [{
              path: "/GTATrilogy/*",
              options: {}
            }],
            [_.C.socialClub]: [{
              path: "/games/gtasa($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gtasa/*",
              options: {}
            }, {
              path: "/games/gtavc($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gtavc/*",
              options: {}
            }, {
              path: "/games/gta3($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gta3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ccc721c72fc5553108c7e70b0778dba.svg",
          links: [{
            text: a.formatMessage(c.nav_gta_trilogy_overview),
            gaText: c.nav_gta_trilogy_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: _.C.www,
              path: "/GTATrilogy"
            }
          }, {
            text: a.formatMessage(c.nav_gta_trilogy_accomplishments),
            gaText: c.nav_gta_trilogy_accomplishments.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: a.formatMessage(c.nav_gta_trilogy_gtasa),
              gaText: c.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: _.C.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: a.formatMessage(c.nav_gta_trilogy_gtavc),
              gaText: c.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: _.C.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: a.formatMessage(c.nav_gta_trilogy_gta3),
              gaText: c.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: _.C.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: a.formatMessage(c.nav_gta_trilogy_support),
            gaText: c.nav_gta_trilogy_support.defaultMessage,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: a.formatMessage(c.nav_gta_trilogy_gtasa),
              gaText: c.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: _.C.support,
                path: "/categories/115001620287"
              }
            }, {
              text: a.formatMessage(c.nav_gta_trilogy_gtavc),
              gaText: c.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: _.C.support,
                path: "/categories/115001619868"
              }
            }, {
              text: a.formatMessage(c.nav_gta_trilogy_gta3),
              gaText: c.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-external",
              dataTestId: "gta3TrilogySupportLink",
              target: "_blank",
              location: {
                domain: _.C.support,
                path: "/categories/115001619948"
              }
            }]
          }],
          cta: {
            text: a.formatMessage(c.nav_gta_trilogy_cta_buy_now),
            target: "_blank",
            location: {
              domain: _.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: c.nav_gta_trilogy_cta_buy_now.defaultMessage,
            dataTestId: "gtaTrilogyPurchaseLink"
          }
        }),
        G = a => ({
          site: "vicecity",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/vicecity/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
          links: [],
          cta: {
            text: a.formatMessage(c.nav_gtavc_cta_buy_now),
            target: "_blank",
            location: {
              domain: _.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: c.nav_gtavc_cta_buy_now.defaultMessage,
            dataTestId: "gtaVcBuyNowLink"
          }
        }),
        A = () => ({
          site: "vicecitystories",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/vicecitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
          links: []
        }),
        S = a => ({
          site: "la-noire",
          appearancePaths: {
            [_.C.www]: [{
              path: "/lanoire/*",
              options: {}
            }, {
              path: "/games/lanoire/*",
              options: {}
            }],
            [_.C.socialClub]: [{
              path: "/games/lanvr/*",
              options: {}
            }, {
              path: "/member/*/games/lanvr/*",
              options: {}
            }, {
              path: "/games/lan/*",
              options: {}
            }, {
              path: "/member/*/games/lan/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63c149607e42c3f7a8988ef21d53ec97.svg",
          links: [{
            text: a.formatMessage(c.nav_lanoire_overview),
            gaText: c.nav_lanoire_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: _.C.www,
              path: "/games/lanoire"
            }
          }, {
            text: a.formatMessage(c.nav_lanoire_progress),
            gaText: c.nav_lanoire_progress.defaultMessage,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: a.formatMessage(c.nav_lanoire_pc_console),
              gaText: c.nav_lanoire_pc_console.defaultMessage,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: a.formatMessage(c.nav_lanoire_case_tracker),
                gaText: c.nav_lanoire_case_tracker.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: a.formatMessage(c.nav_lanoire_checklist),
                gaText: c.nav_lanoire_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: a.formatMessage(c.nav_lanoire_stats),
                gaText: c.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: a.formatMessage(c.nav_lanoire_accomplishments),
                gaText: c.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: _.C.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: a.formatMessage(c.nav_lanoire_badge_pursuit),
                gaText: c.nav_lanoire_badge_pursuit.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: a.formatMessage(c.nav_lanoire_vr_case_files),
              gaText: c.nav_lanoire_vr_case_files.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: a.formatMessage(c.nav_lanoire_stats),
                gaText: c.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: a.formatMessage(c.nav_lanoire_accomplishments),
                gaText: c.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: _.C.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: a.formatMessage(c.nav_lanoire_support),
            gaText: c.nav_lanoire_support.defaultMessage,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: _.C.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: a.formatMessage(c.nav_lanoire_cta_buy_now),
            location: {
              domain: _.C.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy",
            gaText: c.nav_lanoire_cta_buy_now.defaultMessage,
            dataTestId: "lanoirePurchaseLink"
          }
        }),
        I = () => ({
          site: "manhunt",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/manhunt/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
          links: []
        }),
        L = () => ({
          site: "manhunt2",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/manhunt2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
          links: []
        }),
        z = () => ({
          site: "maxpayne",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/maxpayne/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
          links: []
        }),
        P = () => ({
          site: "maxpayne2",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/maxpayne2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
          links: []
        }),
        R = a => ({
          site: "maxpayne3",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/maxpayne3/*",
              options: {}
            }],
            [_.C.socialClub]: [{
              path: "/games/maxpayne3*",
              options: {}
            }, {
              path: "/member/*/games/maxpayne3*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba94346e4b206acc56976b59974bffbe.png",
          links: [{
            text: a.formatMessage(c.nav_mp3_overview),
            gaText: c.nav_mp3_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: _.C.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: a.formatMessage(c.nav_mp3_progress),
            gaText: c.nav_mp3_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: a.formatMessage(c.nav_mp3_accomplishments),
              gaText: c.nav_mp3_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: _.C.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: a.formatMessage(c.nav_mp3_singleplayer),
              gaText: c.nav_mp3_singleplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: a.formatMessage(c.nav_mp3_career),
                gaText: c.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_checklist),
                gaText: c.nav_mp3_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_grinds),
                gaText: c.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_chapters),
                gaText: c.nav_mp3_chapters.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_weapons),
                gaText: c.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_leaderboards),
                gaText: c.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: a.formatMessage(c.nav_mp3_multiplayer),
              gaText: c.nav_mp3_multiplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: a.formatMessage(c.nav_mp3_career),
                gaText: c.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_grinds),
                gaText: c.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_weapons),
                gaText: c.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_leaderboards),
                gaText: c.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: a.formatMessage(c.nav_mp3_crews),
              gaText: c.nav_mp3_crews.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: a.formatMessage(c.nav_mp3_multiplayer),
                gaText: c.nav_mp3_multiplayer.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_score_attack),
                gaText: c.nav_mp3_score_attack.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_ny_minute),
                gaText: c.nav_mp3_ny_minute.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_checkpoint_challenge),
                gaText: c.nav_mp3_checkpoint_challenge.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_featured),
                gaText: c.nav_mp3_featured.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewFeaturedLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: _.C.socialClub,
                  path: "/games/maxpayne3/crews/rivalries"
                }
              }]
            }]
          }, {
            text: a.formatMessage(c.nav_mp3_support),
            gaText: c.nav_mp3_support.defaultMessage,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: _.C.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: a.formatMessage(c.nav_mp3_cta_buy_now),
            target: "_blank",
            location: {
              domain: _.C.store,
              path: "/game/buy-max-payne-3"
            },
            ga: "cta_buy",
            gaText: c.nav_mp3_cta_buy_now.defaultMessage,
            dataTestId: "mp3PurchaseLink"
          }
        }),
        N = () => ({
          site: "midnightclub",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/midnightclub/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
          links: []
        }),
        V = () => ({
          site: "midnightclub2",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/midnightclub2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
          links: []
        }),
        O = () => ({
          site: "midnightclub3",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/midnightclub3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
          links: []
        }),
        D = () => ({
          site: "midnightclubLA",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/midnightclubLA/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0333d6f30ad108c77944b8faf6f34c03.png",
          links: []
        }),
        B = () => ({
          site: "oni",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/oni/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
          links: []
        }),
        E = a => ({
          site: "rdo",
          appearancePaths: {
            [_.C.www]: [{
              path: "/reddeadonline/*",
              options: {}
            }],
            [_.C.socialClub]: [{
              path: "/games/rdo*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
          links: [{
            dataTestId: "rdoLink",
            location: {
              domain: _.C.www,
              path: "/reddeadonline"
            },
            text: a.formatMessage(c.nav_rdo_overview),
            gaText: c.nav_rdo_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: _.C.www,
                path: "/reddeadonline/features/getting-started"
              },
              text: a.formatMessage(c.nav_rdo_getting_started),
              gaText: c.nav_rdo_getting_started.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesLink",
              location: {
                domain: _.C.www,
                path: "/reddeadonline/features/roles"
              },
              text: a.formatMessage(c.nav_rdo_specialist_roles),
              gaText: c.nav_rdo_specialist_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoLOOLink",
              location: {
                domain: _.C.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              },
              text: a.formatMessage(c.nav_rdo_story_missions),
              gaText: c.nav_rdo_story_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPossesLink",
              location: {
                domain: _.C.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              },
              text: a.formatMessage(c.nav_rdo_posses_free_roam),
              gaText: c.nav_rdo_posses_free_roam.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoSAELink",
              location: {
                domain: _.C.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              },
              text: a.formatMessage(c.nav_rdo_competitive_series),
              gaText: c.nav_rdo_competitive_series.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: _.C.www,
                path: "/reddeadonline/features/customization"
              },
              text: a.formatMessage(c.nav_rdo_customization),
              gaText: c.nav_rdo_customization.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoProgressLink",
              location: {
                domain: _.C.www,
                path: "/reddeadonline/features/rank-and-fortune"
              },
              text: a.formatMessage(c.nav_rdo_progression),
              gaText: c.nav_rdo_progression.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoExploreDropdown",
            text: a.formatMessage(c.nav_rdo_explore),
            gaText: c.nav_rdo_explore.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoOverviewButton",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdo/overview"
              },
              text: a.formatMessage(c.nav_rdo_my_character),
              gaText: c.nav_rdo_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesButton",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdo/roles"
              },
              text: a.formatMessage(c.nav_rdo_roles),
              gaText: c.nav_rdo_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdo/clubrewards"
              },
              text: a.formatMessage(c.nav_rdo_club_rewards),
              gaText: c.nav_rdo_club_rewards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRankButton",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdo/rank"
              },
              text: a.formatMessage(c.nav_rdo_rank_unlocks),
              gaText: c.nav_rdo_rank_unlocks.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAwardsButton",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdo/awards"
              },
              text: a.formatMessage(c.nav_rdo_awards),
              gaText: c.nav_rdo_awards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdo/achievements"
              },
              text: a.formatMessage(c.nav_rdo_accomplishments),
              gaText: c.nav_rdo_accomplishments.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdo/benefits"
              },
              text: a.formatMessage(c.nav_rdo_benefits),
              gaText: c.nav_rdo_benefits.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoProgressDropdown",
            text: a.formatMessage(c.nav_rdo_progress),
            gaText: c.nav_rdo_progress.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoPosseButton",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdo/posse"
              },
              text: a.formatMessage(c.nav_rdo_posses),
              gaText: c.nav_rdo_posses.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCommunityGuidelinesButton",
              location: {
                domain: _.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(c.nav_rsg_community_guidelines),
              gaText: c.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoCommunityDropdown",
            text: a.formatMessage(c.nav_rdo_community),
            gaText: c.nav_rdo_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "rdoCatalogueButton",
            location: {
              domain: _.C.socialClub,
              path: "/games/rdr2/catalogue/online/"
            },
            target: "_blank",
            text: a.formatMessage(c.nav_rdo_catalogue),
            gaText: c.nav_rdo_catalogue.defaultMessage,
            type: "nav-external"
          }, {
            dataTestId: "rdoSupportLink",
            location: {
              domain: _.C.support,
              path: "/categories/115001624507"
            },
            target: "_blank",
            text: a.formatMessage(c.nav_rdo_support),
            gaText: c.nav_rdo_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: a.formatMessage(c.nav_rdo_cta_buy_now),
            target: "_blank",
            location: {
              domain: _.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy",
            gaText: c.nav_rdo_cta_buy_now.defaultMessage,
            dataTestId: "rdoPurchaseLink"
          }
        }),
        q = a => ({
          site: "reddeadredemption",
          appearancePaths: {
            [_.C.www]: [{
              path: "/reddeadredemption/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afce1282be848202a965031813991b09.svg",
          links: [],
          cta: {
            text: a.formatMessage(c.nav_rdr_cta_buy_now),
            location: {
              domain: _.C.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy",
            gaText: c.nav_rdr_cta_buy_now.defaultMessage,
            dataTestId: "rsrBuyNowCta"
          }
        }),
        F = a => ({
          site: "rdr2",
          appearancePaths: {
            [_.C.www]: [{
              path: "/reddeadredemption2/*",
              options: {}
            }, {
              path: "/games/reddeadredemption2/*",
              options: {}
            }],
            [_.C.socialClub]: [{
              path: "/games/rdr2*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e3cf24e53a1fb96410ddbe7d17ca96f.svg",
          links: [{
            text: a.formatMessage(c.nav_rdr2_overview),
            gaText: c.nav_rdr2_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: _.C.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: a.formatMessage(c.nav_rdr2_explore),
            gaText: c.nav_rdr2_explore.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: a.formatMessage(c.nav_rdr2_van_der_linde_gang),
              gaText: c.nav_rdr2_van_der_linde_gang.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: _.C.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_locations),
              gaText: c.nav_rdr2_locations.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: _.C.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_wildlife),
              gaText: c.nav_rdr2_wildlife.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: _.C.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_weaponry),
              gaText: c.nav_rdr2_weaponry.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: _.C.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: a.formatMessage(c.nav_rdr2_progress),
            gaText: c.nav_rdr2_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: a.formatMessage(c.nav_rdr2_stats),
              gaText: c.nav_rdr2_stats.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_chapters),
              gaText: c.nav_rdr2_chapters.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_challenges),
              gaText: c.nav_rdr2_challenges.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_character),
              gaText: c.nav_rdr2_character.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_compendium),
              gaText: c.nav_rdr2_compendium.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_accomplishments),
              gaText: c.nav_rdr2_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: _.C.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: a.formatMessage(c.nav_rdr2_media),
            gaText: c.nav_rdr2_media.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: a.formatMessage(c.nav_rdr2_gallery),
              gaText: c.nav_rdr2_gallery.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: _.C.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_artwork),
              gaText: c.nav_rdr2_artwork.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: _.C.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_videos),
              gaText: c.nav_rdr2_videos.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: _.C.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_music),
              gaText: c.nav_rdr2_music.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: _.C.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: a.formatMessage(c.nav_rdr2_online),
            gaText: c.nav_rdr2_online.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: _.C.www,
              path: "/reddeadonline"
            }
          }, {
            text: a.formatMessage(c.nav_rdr2_catalogue),
            gaText: c.nav_rdr2_catalogue.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: _.C.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: a.formatMessage(c.nav_rdr2_support),
            gaText: c.nav_rdr2_support.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: _.C.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: a.formatMessage(c.nav_rdr2_cta_buy_now),
            target: "_blank",
            location: {
              domain: _.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy",
            gaText: c.nav_rdr2_cta_buy_now.defaultMessage,
            dataTestId: "rdr2StoreLink"
          }
        }),
        J = () => ({
          site: "undeadnightmare",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/undeadnightmare/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
          links: []
        }),
        H = () => ({
          site: "reddeadrevolver",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/reddeadrevolver/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
          links: []
        }),
        W = a => ({
          site: "rsg",
          appearancePaths: {
            [_.C.www]: [{
              path: "/search/*",
              options: {
                isSearchPage: !0,
                forceSearch: !0
              }
            }, {
              path: "/*",
              options: {}
            }],
            [_.C.socialClub]: [{
              path: "/*",
              options: {}
            }]
          },
          brand: null,
          links: [{
            text: a.formatMessage(c.nav_rsg_games),
            gaText: c.nav_rsg_games.defaultMessage,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: a.formatMessage(c.nav_rsg_newswire),
            gaText: c.nav_rsg_newswire.defaultMessage,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: _.C.www,
              path: "/newswire"
            }
          }, {
            text: a.formatMessage(c.nav_rsg_videos),
            gaText: c.nav_rsg_videos.defaultMessage,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: _.C.www,
              path: "/videos"
            }
          }, {
            text: a.formatMessage(c.nav_rsg_downloads),
            gaText: c.nav_rsg_downloads.defaultMessage,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: _.C.www,
              path: "/downloads"
            }
          }, {
            text: a.formatMessage(c.nav_rsg_store),
            gaText: c.nav_rsg_store.defaultMessage,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: _.C.store,
              path: "/"
            }
          }, {
            text: a.formatMessage(c.nav_rsg_support),
            gaText: c.nav_rsg_support.defaultMessage,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: _.C.support,
              path: "/"
            }
          }],
          cta: {
            text: a.formatMessage(c.nav_rsg_cta_get_launcher),
            location: {
              domain: _.C.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download",
            gaText: c.nav_rsg_cta_get_launcher.defaultMessage,
            dataTestId: "launcherLink"
          },
          hideQuickAccess: !0
        }),
        U = () => ({
          site: "stateofemergency",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/stateofemergency/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
          links: []
        }),
        K = () => ({
          site: "skateanddestroy",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/skateanddestroy/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
          links: []
        }),
        $ = () => ({
          site: "smugglersrun",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/smugglersrun/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
          links: []
        }),
        Y = () => ({
          site: "smugglersrun2",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/smugglersrun2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
          links: []
        }),
        Q = () => ({
          site: "smugglersrunwarzones",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/smugglersrunwarzones/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
          links: []
        }),
        Z = () => ({
          site: "tabletennis",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/tabletennis/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6168a999187a8807caacf4d106a60a80.svg",
          links: []
        }),
        X = () => ({
          site: "italianjob",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/italianjob/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
          links: []
        }),
        aa = a => ({
          site: "thewarriors",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/thewarriors/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
          links: [],
          cta: {
            text: a.formatMessage(c.nav_thewarriors_cta_buy_now),
            location: {
              domain: "https://store.playstation.com",
              path: "/concept/205082"
            },
            ga: "cta_buy",
            gaText: c.nav_thewarriors_cta_buy_now.defaultMessage,
            dataTestId: "thewarriorsPurchaseLink"
          }
        }),
        ea = () => ({
          site: "wildmetal",
          appearancePaths: {
            [_.C.www]: [{
              path: "/games/wildmetal/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
          links: []
        }),
        ta = /[*?\\<>&%@:~]/g,
        na = a => a.match(ta),
        sa = {
          min: 3,
          max: 100,
          validationFunction: na
        },
        oa = (0, _.A)(),
        ra = (a, e) => "/" + [e, ...a.split("/")].filter(Boolean).join("/"),
        _a = (a, e) => a ? a === e ? "" : a.startsWith("http") ? a : `https://${oa.sites[a]}.rockstargames.com` : "",
        ia = JSON.parse('{"de-DE":{"accessibility_skip_button":"Menü verlassen","avatar_menu_close":"Spielermenü schließen","avatar_menu_open":"Spielermenü öffnen","avatarmenu_logout":"Abmelden","avatarmenu_selectlanguage":"Eine Sprache auswählen","avatarmenu_signin":"Anmelden","avatarmenu_signup":"Registrieren","banner_rockstargames_collapsed_legal_cta_aria_label":"Inhalt für eingeklapptes Banner","banner_rockstargames_collapsed_legal_cta_label":"Mehr erfahren","banner_rockstargames_collapsed_legal_text":"Unsere rechtlichen Bedingungen ändern sich am 28. Februar 2024.","banner_rockstargames_gift_cta":"Hol dir einen kostenlosen Sportwagen in GTA Online","banner_rockstargames_gift_text":"Hol dir ab sofort und bis zum 18. März einen kostenlosen Obey 8F Drafter.","games_menu_featured":"Ausgewählte Spiele","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Spiele","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Alle anzeigen","nav_avatarmenu_title":"Avatarmenü","nav_bully_Overview":"Support","nav_bully_accomplishments":"Erfolge","nav_bully_cta_buy_now":"Jetzt kaufen","nav_bully_game_overview":"Entdecken","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Stellenangebote auf LinkedIn","nav_careers_contact_us":"Kontaktiere uns","nav_careers_home":"Startseite","nav_careers_openings":"Stellenangebote","nav_cta_get_launcher":"Launcher herunterladen","nav_gta3_cta_buy_now":"Jetzt kaufen","nav_gta_trilogy_accomplishments":"Erfolge","nav_gta_trilogy_cta_buy_now":"Jetzt kaufen","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Überblick","nav_gta_trilogy_support":"Support","nav_gtaiv_accomplishments":"Erfolge","nav_gtaiv_cta_buy_now":"Jetzt kaufen","nav_gtaiv_overview":"Entdecken","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Erfolge","nav_gtaiveflc_cta_buy_now":"Jetzt kaufen","nav_gtaiveflc_overview":"Überblick","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Erfolge","nav_gtao_browse_crews":"Alle Crews ansehen","nav_gtao_career_progress":"Karrierefortschritt","nav_gtao_checklist":"Checkliste","nav_gtao_community":"Community","nav_gtao_community_series":"Community-Serie","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crew erstellen","nav_gtao_cta_buy_now":"Jetzt kaufen","nav_gtao_discover":"Entdecken","nav_gtao_emblem_editor":"Emblem-Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Alle Jobs ansehen","nav_gtao_jobs_playlists":"Spielelisten","nav_gtao_license_plate_creator":"Nummernschild-Editor","nav_gtao_missions":"Missionen","nav_gtao_my_character":"Mein Charakter","nav_gtao_my_crews":"Meine Crews","nav_gtao_my_jobs":"Meine Jobs","nav_gtao_overview":"Überblick","nav_gtao_photos":"Fotos","nav_gtao_prix_luxury_real_estate":"Prix Luxury Real Estate","nav_gtao_stats":"Statistiken","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_twitch_drops":"Twitch Drops","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Jetzt kaufen","nav_gtav_accomplishments":"Erfolge","nav_gtav_checklist":"Checkliste","nav_gtav_community":"Community","nav_gtav_community_series":"Community-Serie","nav_gtav_create_crew":"Crew erstellen","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Alle Crews ansehen","nav_gtav_cta_buy_now":"Jetzt kaufen","nav_gtav_discover":"Entdecken","nav_gtav_emblem_editor":"Emblem-Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Alle Jobs ansehen","nav_gtav_licence_plate_creator":"Nummernschild-Editor","nav_gtav_missions":"Missionen","nav_gtav_my_character":"Mein Charakter","nav_gtav_my_crews":"Meine Crews","nav_gtav_my_jobs":"Meine Jobs","nav_gtav_overview":"Überblick","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Spielelisten","nav_gtav_stats":"Statistiken","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Jetzt kaufen","nav_gtavc_discover":"Entdecken","nav_gtavcs_discover":"Entdecken","nav_lanoire_accomplishments":"Erfolge","nav_lanoire_badge_pursuit":"Jagd nach Abzeichen","nav_lanoire_case_tracker":"Ermittlungsakten","nav_lanoire_checklist":"Checkliste","nav_lanoire_cta_buy_now":"Jetzt kaufen","nav_lanoire_official_site":"Offizielle Seite","nav_lanoire_overview":"Überblick","nav_lanoire_pc_console":"PC/Konsole","nav_lanoire_progress":"Fortschritt","nav_lanoire_stats":"Statistiken","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Menü schließen","nav_mobilemenu_open":"Menü öffnen","nav_mobilemenu_title":"Navigationsmenü","nav_more_dropdown":"Mehr","nav_mp3_accomplishments":"Erfolge","nav_mp3_career":"Karriere","nav_mp3_chapters":"Kapitel","nav_mp3_checklist":"Checkliste","nav_mp3_checkpoint_challenge":"Kontrollpunkt-Herausforderung","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Jetzt kaufen","nav_mp3_featured":"Vorgestellt","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Bestenlisten","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Neuigkeiten","nav_mp3_ny_minute":"Eine Minute in New York","nav_mp3_official_site":"Offizielle Seite","nav_mp3_overview":"Überblick","nav_mp3_progress":"Fortschritt","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Spezifikationen","nav_mp3_support":"Support","nav_mp3_weapons":"Waffen","nav_opens_in_new_window":"{text} (Link öffnet ein neues Fenster)","nav_quick_access_games":"Spiele","nav_quick_access_home":"Startseite","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Erfolge","nav_rdo_awards":"Auszeichnungen","nav_rdo_benefits":"Vorteile","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Club-Belohnungen","nav_rdo_community":"Community","nav_rdo_competitive_series":"Wettkampf-Serie","nav_rdo_cta_buy_now":"Jetzt kaufen","nav_rdo_customization":"Individualisierung","nav_rdo_explore":"Entdecken","nav_rdo_getting_started":"Erste Schritte","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mein Charakter","nav_rdo_overview":"Überblick","nav_rdo_photos":"Fotos","nav_rdo_posses":"Trupps","nav_rdo_posses_free_roam":"Trupps und Free Roam","nav_rdo_progress":"Fortschritt","nav_rdo_progression":"Fortschritt","nav_rdo_rank_unlocks":"Rang-Freischaltungen","nav_rdo_roles":"Rollen","nav_rdo_specialist_roles":"Spezialrollen","nav_rdo_story_missions":"Storymissionen","nav_rdo_support":"Support","nav_rdr2_accomplishments":"Erfolge","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Herausforderungen","nav_rdr2_chapters":"Kapitel","nav_rdr2_character":"Charakter","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Jetzt kaufen","nav_rdr2_explore":"Entdecken","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Schauplätze","nav_rdr2_media":"Medien","nav_rdr2_music":"Musik","nav_rdr2_online":"Online","nav_rdr2_overview":"Überblick","nav_rdr2_progress":"Fortschritt","nav_rdr2_stats":"Statistiken","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"Die Van-der-Linde-Bande","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Waffen","nav_rdr2_wildlife":"Tierwelt","nav_rdr_cta_buy_now":"Jetzt kaufen","nav_rockstargames_external_link":"Extern","nav_rockstargames_home":"Rockstar-Games-Startseite","nav_rockstargames_logo":"Klicken, um das Menü zu öffnen","nav_rsg_community_guidelines":"Community-Richtlinien","nav_rsg_downloads":"Downloads","nav_rsg_games":"Spiele","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Deine Suchanfrage ist zu kurz. Suchbegriffe müssen mindestens {count} Zeichen lang sein.","nav_search_error_too_short_invalid_chars":"Deine Suchanfrage beinhaltet ungültige Zeichen ({invalidChars}). Bitte entferne diese und versuche es erneut.","nav_support_dashboard":"Meine Übersicht","nav_support_home":"Startseite","nav_support_service_status":"Service-Status","nav_support_submit_ticket":"Eine Anfrage einreichen","nav_thewarriors_cta_buy_now":"Jetzt kaufen","nav_undeadnightmare_buy_now":"Jetzt kaufen","nav_undeadnightmare_discover":"Entdecken","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Medien","nav_undeadnightmare_news":"Neuigkeiten","nav_undeadnightmare_ps3_digital":"PS3 – Digital","nav_undeadnightmare_specs":"Spezifikationen","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 – Digital","nav_view_all_games":"Alle anzeigen","nofications_new":"Neue Benachrichtigungen","quick_access_title":"Rockstar Games","sc_link_account":"Konto","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_legal":"Rechtliches","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzerklärung","sc_link_settings":"Einstellungen","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","search_action":"Suchen","search_close_button":"Suche schließen","search_disabled_aria_label":"Nach dieser Anfrage wurde bereits gesucht. Bitte gib eine neue Suchanfrage ein.","search_open_button":"Suche öffnen","search_placeholder":"Rockstar Games durchsuchen …","search_target_aria_label":"Durchsuche {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Spiele","search_target_jobs":"Jobs","search_target_posts":"Beiträge","search_target_users":"Nutzer","search_target_videos":"Videos"},"en-US":{"accessibility_skip_button":"Skip the Menu","avatar_menu_close":"Close Player Menu","avatar_menu_open":"Open Player Menu","avatarmenu_logout":"Log Out","avatarmenu_selectlanguage":"Select a Language","avatarmenu_signin":"Sign In","avatarmenu_signup":"Sign Up","banner_rockstargames_collapsed_legal_cta_aria_label":"Collapsed Banner content","banner_rockstargames_collapsed_legal_cta_label":"Learn More","banner_rockstargames_collapsed_legal_text":"Our legal terms are changing Feb. 28, 2024.","banner_rockstargames_gift_cta":"Get a free Sports Car in GTA Online","banner_rockstargames_gift_text":"Now until March 18, claim a free Obey 8F Drafter.","games_menu_featured":"Featured Games","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Games","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"View All","nav_avatarmenu_title":"Avatar menu","nav_bully_Overview":"Support","nav_bully_accomplishments":"Accomplishments","nav_bully_cta_buy_now":"Buy Now","nav_bully_game_overview":"Discover","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Careers on LinkedIn","nav_careers_contact_us":"Contact us","nav_careers_home":"Home","nav_careers_openings":"Openings","nav_cta_get_launcher":"Get Launcher","nav_gta3_cta_buy_now":"Buy Now","nav_gta_trilogy_accomplishments":"Accomplishments","nav_gta_trilogy_cta_buy_now":"Buy Now","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Overview","nav_gta_trilogy_support":"Support","nav_gtaiv_accomplishments":"Accomplishments","nav_gtaiv_cta_buy_now":"Buy Now","nav_gtaiv_overview":"Discover","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Accomplishments","nav_gtaiveflc_cta_buy_now":"Buy Now","nav_gtaiveflc_overview":"Overview","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Accomplishments","nav_gtao_browse_crews":"Browse All Crews","nav_gtao_career_progress":"Career Progress","nav_gtao_checklist":"Checklist","nav_gtao_community":"Community","nav_gtao_community_series":"Community Series","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Create a Crew","nav_gtao_cta_buy_now":"Buy Now","nav_gtao_discover":"Discover","nav_gtao_emblem_editor":"Emblem Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Browse All Jobs","nav_gtao_jobs_playlists":"Playlists","nav_gtao_license_plate_creator":"License Plate Creator","nav_gtao_missions":"Missions","nav_gtao_my_character":"My Character","nav_gtao_my_crews":"My Crews","nav_gtao_my_jobs":"My Jobs","nav_gtao_overview":"Overview","nav_gtao_photos":"Photos","nav_gtao_prix_luxury_real_estate":"Prix Luxury Real Estate","nav_gtao_stats":"Stats","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_twitch_drops":"Twitch Drops","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Buy Now","nav_gtav_accomplishments":"Accomplishments","nav_gtav_checklist":"Checklist","nav_gtav_community":"Community","nav_gtav_community_series":"Community Series","nav_gtav_create_crew":"Create a Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Browse All Crews","nav_gtav_cta_buy_now":"Buy Now","nav_gtav_discover":"Discover","nav_gtav_emblem_editor":"Emblem Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Browse All Jobs","nav_gtav_licence_plate_creator":"License Plate Creator","nav_gtav_missions":"Missions","nav_gtav_my_character":"My Character","nav_gtav_my_crews":"My Crews","nav_gtav_my_jobs":"My Jobs","nav_gtav_overview":"Overview","nav_gtav_photos":"Photos","nav_gtav_playlists":"Playlists","nav_gtav_stats":"Stats","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Buy Now","nav_gtavc_discover":"Discover","nav_gtavcs_discover":"Discover","nav_lanoire_accomplishments":"Accomplishments","nav_lanoire_badge_pursuit":"Badge Pursuit","nav_lanoire_case_tracker":"Case Tracker","nav_lanoire_checklist":"Checklist","nav_lanoire_cta_buy_now":"Buy Now","nav_lanoire_official_site":"Official Site","nav_lanoire_overview":"Overview","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progress","nav_lanoire_stats":"Stats","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Close menu","nav_mobilemenu_open":"Open menu","nav_mobilemenu_title":"Navigation menu","nav_more_dropdown":"More","nav_mp3_accomplishments":"Accomplishments","nav_mp3_career":"Career","nav_mp3_chapters":"Chapters","nav_mp3_checklist":"Checklist","nav_mp3_checkpoint_challenge":"Checkpoint Challenge","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Buy Now","nav_mp3_featured":"Featured","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Leaderboards","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"News","nav_mp3_ny_minute":"New York Minute","nav_mp3_official_site":"Official Site","nav_mp3_overview":"Overview","nav_mp3_progress":"Progress","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Specifications","nav_mp3_support":"Support","nav_mp3_weapons":"Weapons","nav_opens_in_new_window":"{text} (Link opens in new window)","nav_quick_access_games":"Games","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Accomplishments","nav_rdo_awards":"Awards","nav_rdo_benefits":"Benefits","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Club Rewards","nav_rdo_community":"Community","nav_rdo_competitive_series":"Competitive Series","nav_rdo_cta_buy_now":"Buy Now","nav_rdo_customization":"Customization","nav_rdo_explore":"Explore","nav_rdo_getting_started":"Getting Started","nav_rdo_guides":"Guides","nav_rdo_my_character":"My Character","nav_rdo_overview":"Overview","nav_rdo_photos":"Photos","nav_rdo_posses":"Posses","nav_rdo_posses_free_roam":"Posses and Free Roam","nav_rdo_progress":"Progress","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Rank Unlocks","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Specialist Roles","nav_rdo_story_missions":"Story Missions","nav_rdo_support":"Support","nav_rdr2_accomplishments":"Accomplishments","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Challenges","nav_rdr2_chapters":"Chapters","nav_rdr2_character":"Character","nav_rdr2_compendium":"Compendium","nav_rdr2_cta_buy_now":"Buy Now","nav_rdr2_explore":"Explore","nav_rdr2_gallery":"Gallery","nav_rdr2_locations":"Locations","nav_rdr2_media":"Media","nav_rdr2_music":"Music","nav_rdr2_online":"Online","nav_rdr2_overview":"Overview","nav_rdr2_progress":"Progress","nav_rdr2_stats":"Stats","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"The Van der Linde Gang","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Weaponry","nav_rdr2_wildlife":"Wildlife","nav_rdr_cta_buy_now":"Buy Now","nav_rockstargames_external_link":"External","nav_rockstargames_home":"Rockstar Games Home","nav_rockstargames_logo":"Click to open menu","nav_rsg_community_guidelines":"Community Guidelines","nav_rsg_downloads":"Downloads","nav_rsg_games":"Games","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Your search query is too short. Queries must be at least {count} characters long.","nav_search_error_too_short_invalid_chars":"Your search query contains invalid characters ({invalidChars}). Remove these and try again.","nav_support_dashboard":"My Dashboard","nav_support_home":"Home","nav_support_service_status":"Service Status","nav_support_submit_ticket":"Submit a Ticket","nav_thewarriors_cta_buy_now":"Buy Now","nav_undeadnightmare_buy_now":"Buy Now","nav_undeadnightmare_discover":"Discover","nav_undeadnightmare_gallery":"Gallery","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Media","nav_undeadnightmare_news":"News","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Specifications","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"View All","nofications_new":"New notifications","quick_access_title":"Rockstar Games","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_legal":"Legal","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","search_action":"Search","search_close_button":"Close Search","search_disabled_aria_label":"Already searched current query. Please enter a new query.","search_open_button":"Open Search","search_placeholder":"Search Rockstar Games...","search_target_aria_label":"Search {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Games","search_target_jobs":"Jobs","search_target_posts":"Posts","search_target_users":"Users","search_target_videos":"Videos"},"es-ES":{"accessibility_skip_button":"Omitir menú","avatar_menu_close":"Cerrar menú de jugador","avatar_menu_open":"Abrir menú de jugador","avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Selecciona un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","banner_rockstargames_collapsed_legal_cta_aria_label":"Contenido de un banner colapsado","banner_rockstargames_collapsed_legal_cta_label":"Más información","banner_rockstargames_collapsed_legal_text":"Nuestras condiciones legales cambian el 28 de febrero de 2024.","banner_rockstargames_gift_cta":"Consigue un coche deportivo gratis en GTA Online","banner_rockstargames_gift_text":"Desde ahora hasta el 18 de marzo, consigue un Obey 8F Drafter.","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Juegos","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Ver todos","nav_avatarmenu_title":"Menú del avatar","nav_bully_Overview":"Asistencia técnica","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contacta con nosotros","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta3_cta_buy_now":"Comprar ahora","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Asistencia técnica","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Asistencia técnica","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_cta_buy_now":"Comprar ahora","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Asistencia técnica","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_career_progress":"Progreso en la trayectoria","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_community_series":"Series de la comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver todas las actividades","nav_gtao_jobs_playlists":"Listas de partidas","nav_gtao_license_plate_creator":"Creador de matrículas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_prix_luxury_real_estate":"Inmobiliaria Prix Luxury","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Asistencia técnica","nav_gtao_twitch_drops":"Drops de Twitch","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_community_series":"Series de la comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver todas las actividades","nav_gtav_licence_plate_creator":"Creador de matrículas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de partidas","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Asistencia técnica","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio web oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Asistencia técnica","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Cerrar menú","nav_mobilemenu_open":"Abrir menú","nav_mobilemenu_title":"Menú de navegación","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de puntos de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio web oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Puntuación máxima","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Asistencia técnica","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una nueva ventana)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Ventajas","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Cuadrillas","nav_rdo_posses_free_roam":"Cuadrillas y Modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progreso","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles especializados","nav_rdo_story_missions":"Misiones de la historia","nav_rdo_support":"Asistencia técnica","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Asistencia técnica","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Fauna","nav_rdr_cta_buy_now":"Comprar ahora","nav_rockstargames_external_link":"Externo","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_community_guidelines":"Directrices de la comunidad","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Newswire","nav_rsg_store":"Tienda","nav_rsg_support":"Asistencia técnica","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Tu búsqueda es demasiado corta. Las búsquedas deben contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres que no son válidos ({invalidChars}). Quítalos e inténtalo de nuevo.","nav_support_dashboard":"Mi panel","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_thewarriors_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Asistencia técnica","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","nofications_new":"Nuevas notificaciones","quick_access_title":"Rockstar Games","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_legal":"Aviso legal","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_disabled_aria_label":"Ya se ha realizado esta búsqueda. Introduce una nueva búsqueda.","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_users":"Usuarios","search_target_videos":"Vídeos"},"es-MX":{"accessibility_skip_button":"Omitir menú","avatar_menu_close":"Cerrar menú del jugador","avatar_menu_open":"Abrir menú del jugador","avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Seleccionar un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","banner_rockstargames_collapsed_legal_cta_aria_label":"Contenido de cartel colapsado","banner_rockstargames_collapsed_legal_cta_label":"Más información","banner_rockstargames_collapsed_legal_text":"Nuestros términos legales cambiarán el 28 de febrero de 2024.","banner_rockstargames_gift_cta":"Obtén un coche deportivo gratis en GTA Online","banner_rockstargames_gift_text":"Obtén un Obey 8F Drafter gratis hasta el 18 de marzo.","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Juegos","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Ver todos","nav_avatarmenu_title":"Menú del avatar","nav_bully_Overview":"Soporte","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contáctanos","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta3_cta_buy_now":"Comprar ahora","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Soporte","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Soporte","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_cta_buy_now":"Comprar ahora","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Soporte","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_career_progress":"Progreso y trayectoria","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_community_series":"Serie de la comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de juego","nav_gtao_license_plate_creator":"Creador de placas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_prix_luxury_real_estate":"Prix Luxury Real Estate","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Soporte","nav_gtao_twitch_drops":"Drops de Twitch","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_community_series":"Serie de la comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de placas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de juego","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Soporte","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Soporte","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Cerrar menú","nav_mobilemenu_open":"Abrir menú","nav_mobilemenu_title":"Menú de navegación","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Soporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una ventana nueva)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Canal de noticias","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Beneficios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Clanes","nav_rdo_posses_free_roam":"Clanes y modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles de especialistas","nav_rdo_story_missions":"Misiones narrativas","nav_rdo_support":"Soporte","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Soporte","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Armamento","nav_rdr2_wildlife":"Fauna","nav_rdr_cta_buy_now":"Comprar ahora","nav_rockstargames_external_link":"Externo","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_community_guidelines":"Directrices de la comunidad","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Canal de noticias","nav_rsg_store":"Tienda","nav_rsg_support":"Soporte","nav_rsg_videos":"Videos","nav_search_error_too_short":"Tu búsqueda es muy corta. La búsqueda debe contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres no válidos: {invalidChars}. Quítalos de la búsqueda y vuelve a intentarlo.","nav_support_dashboard":"Mi panel de control","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_thewarriors_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Soporte","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","nofications_new":"Nuevas notificaciones","quick_access_title":"Rockstar Games","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_legal":"Legal","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_disabled_aria_label":"Ya se realizó esta búsqueda. Inicia una nueva búsqueda.","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_users":"Usuarios","search_target_videos":"Videos"},"fr-FR":{"accessibility_skip_button":"Passer le menu","avatar_menu_close":"Fermer le menu Joueur","avatar_menu_open":"Ouvrir le menu Joueur","avatarmenu_logout":"Se déconnecter","avatarmenu_selectlanguage":"Sélectionner une langue","avatarmenu_signin":"Se connecter","avatarmenu_signup":"S\'abonner","banner_rockstargames_collapsed_legal_cta_aria_label":"Contenu de la bannière réduite","banner_rockstargames_collapsed_legal_cta_label":"En savoir plus","banner_rockstargames_collapsed_legal_text":"Nos conditions générales changent le 28 février 2024.","banner_rockstargames_gift_cta":"Obtenez une sportive gratuite dans GTA Online","banner_rockstargames_gift_text":"Jusqu\'au 18 mars, récupérez gratuitement une Obey 8F Drafter.","games_menu_featured":"Jeux à la une","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Jeux","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Voir tout","nav_avatarmenu_title":"Menu d\'avatar","nav_bully_Overview":"Assistance","nav_bully_accomplishments":"Exploits","nav_bully_cta_buy_now":"Acheter maintenant","nav_bully_game_overview":"Découvrir","nav_bully_videos":"Vidéos","nav_careers_careers_on_linkedin":"Offres d\'emploi sur LinkedIn","nav_careers_contact_us":"Nous contacter","nav_careers_home":"Accueil","nav_careers_openings":"Postes à pourvoir","nav_cta_get_launcher":"Obtenir le Launcher","nav_gta3_cta_buy_now":"Acheter maintenant","nav_gta_trilogy_accomplishments":"Exploits","nav_gta_trilogy_cta_buy_now":"Acheter maintenant","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Vue d\'ensemble","nav_gta_trilogy_support":"Assistance","nav_gtaiv_accomplishments":"Exploits","nav_gtaiv_cta_buy_now":"Acheter maintenant","nav_gtaiv_overview":"Découvrir","nav_gtaiv_support":"Assistance","nav_gtaiveflc_accomplishments":"Exploits","nav_gtaiveflc_cta_buy_now":"Acheter maintenant","nav_gtaiveflc_overview":"Vue d\'ensemble","nav_gtaiveflc_support":"Assistance","nav_gtao_accomplishments":"Exploits","nav_gtao_browse_crews":"Parcourir tous les crews","nav_gtao_career_progress":"Suivi de carrière","nav_gtao_checklist":"Check-list","nav_gtao_community":"Communauté","nav_gtao_community_series":"Épreuves de la communauté","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Créer un crew","nav_gtao_cta_buy_now":"Acheter maintenant","nav_gtao_discover":"Découvrir","nav_gtao_emblem_editor":"Éditeur d\'emblèmes","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Activités","nav_gtao_jobs_browse_all":"Parcourir toutes les activités","nav_gtao_jobs_playlists":"Listes","nav_gtao_license_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtao_missions":"Missions","nav_gtao_my_character":"Mon personnage","nav_gtao_my_crews":"Mes crews","nav_gtao_my_jobs":"Mes activités","nav_gtao_overview":"Vue d\'ensemble","nav_gtao_photos":"Photos","nav_gtao_prix_luxury_real_estate":"Prix Luxury Real Estate","nav_gtao_stats":"Statistiques","nav_gtao_story":"Histoire","nav_gtao_support":"Assistance","nav_gtao_twitch_drops":"Drops Twitch","nav_gtao_videos":"Vidéos","nav_gtasanandreas_cta_buy_now":"Acheter maintenant","nav_gtav_accomplishments":"Exploits","nav_gtav_checklist":"Check-list","nav_gtav_community":"Communauté","nav_gtav_community_series":"Épreuves de la communauté","nav_gtav_create_crew":"Créer un crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Parcourir tous les crews","nav_gtav_cta_buy_now":"Acheter maintenant","nav_gtav_discover":"Découvrir","nav_gtav_emblem_editor":"Éditeur d\'emblèmes","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Activités","nav_gtav_jobs_browse_all":"Parcourir toutes les activités","nav_gtav_licence_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtav_missions":"Missions","nav_gtav_my_character":"Mon personnage","nav_gtav_my_crews":"Mes crews","nav_gtav_my_jobs":"Mes activités","nav_gtav_overview":"Vue d\'ensemble","nav_gtav_photos":"Photos","nav_gtav_playlists":"Listes","nav_gtav_stats":"Statistiques","nav_gtav_story":"Histoire","nav_gtav_support":"Assistance","nav_gtav_videos":"Vidéos","nav_gtavc_cta_buy_now":"Acheter maintenant","nav_gtavc_discover":"Découvrir","nav_gtavcs_discover":"Découvrir","nav_lanoire_accomplishments":"Exploits","nav_lanoire_badge_pursuit":"Défi Traque & plaque","nav_lanoire_case_tracker":"Suivi d\'affaires","nav_lanoire_checklist":"Check-list","nav_lanoire_cta_buy_now":"Acheter maintenant","nav_lanoire_official_site":"Site officiel","nav_lanoire_overview":"Vue d\'ensemble","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progression","nav_lanoire_stats":"Statistiques","nav_lanoire_support":"Assistance","nav_lanoire_vr_case_files":"Les enquêtes VR","nav_mobilemenu_close":"Fermer le menu","nav_mobilemenu_open":"Ouvrir le menu","nav_mobilemenu_title":"Menu de navigation","nav_more_dropdown":"Plus","nav_mp3_accomplishments":"Exploits","nav_mp3_career":"Carrière","nav_mp3_chapters":"Chapitres","nav_mp3_checklist":"Check-list","nav_mp3_checkpoint_challenge":"Défi points de passage","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Acheter maintenant","nav_mp3_featured":"À la une","nav_mp3_grinds":"Défis","nav_mp3_leaderboards":"Classements","nav_mp3_multiplayer":"Multijoueur","nav_mp3_news":"Actualités","nav_mp3_ny_minute":"Minute new-yorkaise","nav_mp3_official_site":"Site officiel","nav_mp3_overview":"Vue d\'ensemble","nav_mp3_progress":"Progression","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Solo","nav_mp3_specifications":"Configuration","nav_mp3_support":"Assistance","nav_mp3_weapons":"Armes","nav_opens_in_new_window":"{text} (le lien s\'ouvrira dans une nouvelle fenêtre)","nav_quick_access_games":"Jeux","nav_quick_access_home":"Accueil","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Exploits","nav_rdo_awards":"Récompenses","nav_rdo_benefits":"Avantages","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Récompenses du club","nav_rdo_community":"Communauté","nav_rdo_competitive_series":"Séries compétitives","nav_rdo_cta_buy_now":"Acheter maintenant","nav_rdo_customization":"Personnalisation","nav_rdo_explore":"Explorer","nav_rdo_getting_started":"Bien démarrer","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mon personnage","nav_rdo_overview":"Vue d\'ensemble","nav_rdo_photos":"Photos","nav_rdo_posses":"Groupes","nav_rdo_posses_free_roam":"Groupes et mode exploration","nav_rdo_progress":"Progression","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Éléments à déverrouiller","nav_rdo_roles":"Rôles","nav_rdo_specialist_roles":"Rôles spécialisés","nav_rdo_story_missions":"Missions de l\'histoire","nav_rdo_support":"Assistance","nav_rdr2_accomplishments":"Exploits","nav_rdr2_artwork":"Illustrations","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Défis","nav_rdr2_chapters":"Chapitres","nav_rdr2_character":"Personnage","nav_rdr2_compendium":"Encyclopédie","nav_rdr2_cta_buy_now":"Acheter maintenant","nav_rdr2_explore":"Explorer","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Lieux","nav_rdr2_media":"Média","nav_rdr2_music":"Musique","nav_rdr2_online":"En ligne","nav_rdr2_overview":"Vue d\'ensemble","nav_rdr2_progress":"Progression","nav_rdr2_stats":"Statistiques","nav_rdr2_support":"Assistance","nav_rdr2_van_der_linde_gang":"La bande de Van der Linde","nav_rdr2_videos":"Vidéos","nav_rdr2_weaponry":"Armes","nav_rdr2_wildlife":"Vie sauvage","nav_rdr_cta_buy_now":"Acheter maintenant","nav_rockstargames_external_link":"Externe","nav_rockstargames_home":"Accueil Rockstar Games","nav_rockstargames_logo":"Cliquez pour ouvrir le menu","nav_rsg_community_guidelines":"Règles de la communauté","nav_rsg_downloads":"Téléchargements","nav_rsg_games":"Jeux","nav_rsg_newswire":"Newswire","nav_rsg_store":"Boutique","nav_rsg_support":"Assistance","nav_rsg_videos":"Vidéos","nav_search_error_too_short":"Requête trop courte. Votre requête doit comporter au moins {count} caractères.","nav_search_error_too_short_invalid_chars":"Votre requête contient des caractères non valides ({invalidChars}). Veuillez les supprimer et réessayer.","nav_support_dashboard":"Mon tableau de bord","nav_support_home":"Accueil","nav_support_service_status":"État du service","nav_support_submit_ticket":"Envoyer une demande d\'assistance","nav_thewarriors_cta_buy_now":"Acheter maintenant","nav_undeadnightmare_buy_now":"Acheter maintenant","nav_undeadnightmare_discover":"Découvrir","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Infos","nav_undeadnightmare_media":"Média","nav_undeadnightmare_news":"Actualités","nav_undeadnightmare_ps3_digital":"PS3 - Version numérique","nav_undeadnightmare_specs":"Configuration","nav_undeadnightmare_suport":"Assistance","nav_undeadnightmare_videos":"Vidéos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Version numérique","nav_view_all_games":"Voir tout","nofications_new":"Nouvelles notifications","quick_access_title":"Rockstar Games","sc_link_account":"Compte","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre ni partager mes données personnelles","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_legal":"Mentions légales","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","search_action":"Rechercher","search_close_button":"Fermer la recherche","search_disabled_aria_label":"La requête actuelle a déjà été effectuée. Veuillez effectuer une nouvelle requête.","search_open_button":"Ouvrir la recherche","search_placeholder":"Rechercher sur Rockstar Games...","search_target_aria_label":"Rechercher {target}","search_target_community":"Communauté","search_target_crews":"Crews","search_target_games":"Jeux","search_target_jobs":"Activités","search_target_posts":"Publications","search_target_users":"Utilisateurs","search_target_videos":"Vidéos"},"it-IT":{"accessibility_skip_button":"Salta il menu","avatar_menu_close":"Chiudi Menu giocatore","avatar_menu_open":"Apri Menu giocatore","avatarmenu_logout":"Esci","avatarmenu_selectlanguage":"Seleziona una lingua","avatarmenu_signin":"Accedi","avatarmenu_signup":"Registrati","banner_rockstargames_collapsed_legal_cta_aria_label":"Contenuto del banner ridotto","banner_rockstargames_collapsed_legal_cta_label":"Altre informazioni","banner_rockstargames_collapsed_legal_text":"I nostri termini legali sono cambiati il 28 febbraio 2024.","banner_rockstargames_gift_cta":"Ottieni un’auto sportiva gratis in GTA Online","banner_rockstargames_gift_text":"Da ora e fino al 18 marzo, riscatta una Obey 8F Drafter gratis.","games_menu_featured":"Giochi in evidenza","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Giochi","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Visualizza tutto","nav_avatarmenu_title":"Menu avatar","nav_bully_Overview":"Supporto","nav_bully_accomplishments":"Premi","nav_bully_cta_buy_now":"Acquista ora","nav_bully_game_overview":"Scopri","nav_bully_videos":"Video","nav_careers_careers_on_linkedin":"Carriere su LinkedIn","nav_careers_contact_us":"Contattaci","nav_careers_home":"Home","nav_careers_openings":"Possibilità di impiego","nav_cta_get_launcher":"Ottieni il launcher","nav_gta3_cta_buy_now":"Acquista ora","nav_gta_trilogy_accomplishments":"Premi","nav_gta_trilogy_cta_buy_now":"Acquista ora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Panoramica","nav_gta_trilogy_support":"Supporto","nav_gtaiv_accomplishments":"Premi","nav_gtaiv_cta_buy_now":"Acquista ora","nav_gtaiv_overview":"Scopri","nav_gtaiv_support":"Supporto","nav_gtaiveflc_accomplishments":"Premi","nav_gtaiveflc_cta_buy_now":"Acquista ora","nav_gtaiveflc_overview":"Panoramica","nav_gtaiveflc_support":"Supporto","nav_gtao_accomplishments":"Premi","nav_gtao_browse_crews":"Esplora le crew","nav_gtao_career_progress":"Progressi della carriera","nav_gtao_checklist":"Elenco 100%","nav_gtao_community":"Comunità","nav_gtao_community_series":"Serie della comunità","nav_gtao_crews":"Crew","nav_gtao_crews_create":"Crea una crew","nav_gtao_cta_buy_now":"Acquista ora","nav_gtao_discover":"Scopri","nav_gtao_emblem_editor":"Editor simboli","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guide","nav_gtao_jobs":"Attività","nav_gtao_jobs_browse_all":"Esplora le attività","nav_gtao_jobs_playlists":"Elenchi partite","nav_gtao_license_plate_creator":"Creatore di targhe","nav_gtao_missions":"Missioni","nav_gtao_my_character":"Il mio personaggio","nav_gtao_my_crews":"Le mie crew","nav_gtao_my_jobs":"Le mie attività","nav_gtao_overview":"Panoramica","nav_gtao_photos":"Foto","nav_gtao_prix_luxury_real_estate":"Prix Luxury Real Estate","nav_gtao_stats":"Statistiche","nav_gtao_story":"Storia","nav_gtao_support":"Supporto","nav_gtao_twitch_drops":"Twitch Drop","nav_gtao_videos":"Video","nav_gtasanandreas_cta_buy_now":"Acquista ora","nav_gtav_accomplishments":"Premi","nav_gtav_checklist":"Elenco 100%","nav_gtav_community":"Comunità","nav_gtav_community_series":"Serie della comunità","nav_gtav_create_crew":"Crea una crew","nav_gtav_crews":"Crew","nav_gtav_crews_browse_all":"Esplora le crew","nav_gtav_cta_buy_now":"Acquista ora","nav_gtav_discover":"Scopri","nav_gtav_emblem_editor":"Editor simboli","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guide","nav_gtav_jobs":"Attività","nav_gtav_jobs_browse_all":"Esplora le attività","nav_gtav_licence_plate_creator":"Creatore di targhe","nav_gtav_missions":"Missioni","nav_gtav_my_character":"Il mio personaggio","nav_gtav_my_crews":"Le mie crew","nav_gtav_my_jobs":"Le mie attività","nav_gtav_overview":"Panoramica","nav_gtav_photos":"Foto","nav_gtav_playlists":"Elenchi partite","nav_gtav_stats":"Statistiche","nav_gtav_story":"Storia","nav_gtav_support":"Supporto","nav_gtav_videos":"Video","nav_gtavc_cta_buy_now":"Acquista ora","nav_gtavc_discover":"Scopri","nav_gtavcs_discover":"Scopri","nav_lanoire_accomplishments":"Premi","nav_lanoire_badge_pursuit":"Ricerca dei distintivi","nav_lanoire_case_tracker":"Registro dei casi","nav_lanoire_checklist":"Elenco 100%","nav_lanoire_cta_buy_now":"Acquista ora","nav_lanoire_official_site":"Sito ufficiale","nav_lanoire_overview":"Panoramica","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Statistiche","nav_lanoire_support":"Supporto","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Chiudi menu","nav_mobilemenu_open":"Apri menu","nav_mobilemenu_title":"Menu di navigazione","nav_more_dropdown":"Altro","nav_mp3_accomplishments":"Premi","nav_mp3_career":"Carriera","nav_mp3_chapters":"Capitoli","nav_mp3_checklist":"Elenco 100%","nav_mp3_checkpoint_challenge":"Sfida a checkpoint","nav_mp3_crews":"Crew","nav_mp3_cta_buy_now":"Acquista ora","nav_mp3_featured":"In evidenza","nav_mp3_grinds":"Sgobbate","nav_mp3_leaderboards":"Classifiche","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Novità","nav_mp3_ny_minute":"Ultimo respiro","nav_mp3_official_site":"Sito ufficiale","nav_mp3_overview":"Panoramica","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Sfida a punti","nav_mp3_singleplayer":"Giocatore singolo","nav_mp3_specifications":"Requisiti","nav_mp3_support":"Supporto","nav_mp3_weapons":"Armi","nav_opens_in_new_window":"{text} (Il link si apre in una nuova finestra)","nav_quick_access_games":"Giochi","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Premi","nav_rdo_awards":"Ricompense","nav_rdo_benefits":"Vantaggi","nav_rdo_catalogue":"Catalogo","nav_rdo_club_rewards":"Ricompense del club","nav_rdo_community":"Comunità","nav_rdo_competitive_series":"Serie competitive","nav_rdo_cta_buy_now":"Acquista ora","nav_rdo_customization":"Personalizzazione","nav_rdo_explore":"Esplora","nav_rdo_getting_started":"Come iniziare","nav_rdo_guides":"Guide","nav_rdo_my_character":"Il mio personaggio","nav_rdo_overview":"Panoramica","nav_rdo_photos":"Foto","nav_rdo_posses":"Posse","nav_rdo_posses_free_roam":"Posse e Free Roam","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressione","nav_rdo_rank_unlocks":"Sbloccabili con rango","nav_rdo_roles":"Ruoli","nav_rdo_specialist_roles":"Ruoli specializzati","nav_rdo_story_missions":"Missioni della storia","nav_rdo_support":"Supporto","nav_rdr2_accomplishments":"Premi","nav_rdr2_artwork":"Illustrazioni","nav_rdr2_catalogue":"Catalogo","nav_rdr2_challenges":"Sfide","nav_rdr2_chapters":"Capitoli","nav_rdr2_character":"Personaggio","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Acquista ora","nav_rdr2_explore":"Esplora","nav_rdr2_gallery":"Galleria","nav_rdr2_locations":"Luoghi","nav_rdr2_media":"Contenuti multimediali","nav_rdr2_music":"Musica","nav_rdr2_online":"Online","nav_rdr2_overview":"Panoramica","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Statistiche","nav_rdr2_support":"Supporto","nav_rdr2_van_der_linde_gang":"La banda di Van der Linde","nav_rdr2_videos":"Video","nav_rdr2_weaponry":"Arsenale","nav_rdr2_wildlife":"Fauna selvatica","nav_rdr_cta_buy_now":"Acquista ora","nav_rockstargames_external_link":"Esterno","nav_rockstargames_home":"Home Rockstar Games","nav_rockstargames_logo":"Clicca per aprire il menu","nav_rsg_community_guidelines":"Linee guida della comunità","nav_rsg_downloads":"Download","nav_rsg_games":"Giochi","nav_rsg_newswire":"Newswire","nav_rsg_store":"Negozio","nav_rsg_support":"Supporto","nav_rsg_videos":"Video","nav_search_error_too_short":"La tua ricerca è troppo corta. Le ricerche devono contenere almeno {count} caratteri.","nav_search_error_too_short_invalid_chars":"La tua ricerca contiene dei caratteri non validi ({invalidChars}). Rimuovili e riprova.","nav_support_dashboard":"La mia dashboard","nav_support_home":"Home","nav_support_service_status":"Stato del servizio","nav_support_submit_ticket":"Invia un ticket","nav_thewarriors_cta_buy_now":"Acquista ora","nav_undeadnightmare_buy_now":"Acquista ora","nav_undeadnightmare_discover":"Scopri","nav_undeadnightmare_gallery":"Galleria","nav_undeadnightmare_info":"Informazioni","nav_undeadnightmare_media":"Contenuti multimediali","nav_undeadnightmare_news":"Novità","nav_undeadnightmare_ps3_digital":"PS3 - Digitale","nav_undeadnightmare_specs":"Requisiti","nav_undeadnightmare_suport":"Supporto","nav_undeadnightmare_videos":"Video","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digitale","nav_view_all_games":"Visualizza tutto","nofications_new":"Nuove notifiche","quick_access_title":"Rockstar Games","sc_link_account":"Account","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere o condividere i miei dati personali","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_legal":"Note legali","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","search_action":"Cerca","search_close_button":"Chiudi ricerca","search_disabled_aria_label":"Parametro di ricerca già utilizzato. Inserisci un nuovo termine di ricerca.","search_open_button":"Apri ricerca","search_placeholder":"Cerca in Rockstar Games...","search_target_aria_label":"Cerca {target}","search_target_community":"Comunità","search_target_crews":"Crew","search_target_games":"Giochi","search_target_jobs":"Attività","search_target_posts":"Post","search_target_users":"Utenti","search_target_videos":"Video"},"ja-JP":{"accessibility_skip_button":"メニューをスキップ","avatar_menu_close":"プレイヤーメニューを閉じる","avatar_menu_open":"プレイヤーメニューを開く","avatarmenu_logout":"ログアウト","avatarmenu_selectlanguage":"言語を選択","avatarmenu_signin":"サインイン","avatarmenu_signup":"サインアップ","banner_rockstargames_collapsed_legal_cta_aria_label":"折りたたみ可能バナーコンテンツ","banner_rockstargames_collapsed_legal_cta_label":"詳細を閲覧","banner_rockstargames_collapsed_legal_text":"2024年2月28日に利用規約が変更されます","banner_rockstargames_gift_cta":"「GTAオンライン」でスポーツカーを無料で受け取ろう","banner_rockstargames_gift_text":"3月18日までオベイ 8Fドラフターが無料","games_menu_featured":"注目のゲーム","games_menu_gta_online":"GTAオンライン","games_menu_gta_trilogy":"グランド・セフト・オート：トリロジー","games_menu_gta_v":"グランド・セフト・オートV","games_menu_item":"ゲーム","games_menu_rdr":"レッド・デッド・リデンプション","games_menu_rdr_2":"レッド・デッド・リデンプション2","games_menu_rdr_online":"レッド・デッド・オンライン","games_menu_vi":"グランド・セフト・オートVI","games_menu_view_all":"全て表示","nav_avatarmenu_title":"アバターメニュー","nav_bully_Overview":"サポート","nav_bully_accomplishments":"実績","nav_bully_cta_buy_now":"今すぐ購入","nav_bully_game_overview":"注目","nav_bully_videos":"ビデオ","nav_careers_careers_on_linkedin":"LinkedInキャリア","nav_careers_contact_us":"お問い合せ","nav_careers_home":"ホーム","nav_careers_openings":"求人","nav_cta_get_launcher":"Launcherを入手","nav_gta3_cta_buy_now":"今すぐ購入","nav_gta_trilogy_accomplishments":"実績","nav_gta_trilogy_cta_buy_now":"今すぐ購入","nav_gta_trilogy_gta3":"グランド・セフト・オートIII","nav_gta_trilogy_gtasa":"グランド・セフト・オート：サンアンドレアス","nav_gta_trilogy_gtavc":"グランド・セフト・オート：バイスシティ","nav_gta_trilogy_overview":"概要","nav_gta_trilogy_support":"サポート","nav_gtaiv_accomplishments":"実績","nav_gtaiv_cta_buy_now":"今すぐ購入","nav_gtaiv_overview":"注目","nav_gtaiv_support":"サポート","nav_gtaiveflc_accomplishments":"実績","nav_gtaiveflc_cta_buy_now":"今すぐ購入","nav_gtaiveflc_overview":"概要","nav_gtaiveflc_support":"サポート","nav_gtao_accomplishments":"実績","nav_gtao_browse_crews":"全てのクルーを見る","nav_gtao_career_progress":"キャリア進行状況","nav_gtao_checklist":"チェックリスト","nav_gtao_community":"コミュニティ","nav_gtao_community_series":"コミュニティシリーズ","nav_gtao_crews":"クルー","nav_gtao_crews_create":"クルーを作成する","nav_gtao_cta_buy_now":"今すぐ購入","nav_gtao_discover":"注目","nav_gtao_emblem_editor":"エンブレム・エディター","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTAオンライン","nav_gtao_guides":"ガイド","nav_gtao_jobs":"ジョブ","nav_gtao_jobs_browse_all":"全てのジョブを見る","nav_gtao_jobs_playlists":"プレイリスト","nav_gtao_license_plate_creator":"ナンバープレートクリエイター","nav_gtao_missions":"ミッション","nav_gtao_my_character":"自分のキャラクター","nav_gtao_my_crews":"自分のクルー","nav_gtao_my_jobs":"マイ・ジョブ","nav_gtao_overview":"概要","nav_gtao_photos":"写真","nav_gtao_prix_luxury_real_estate":"プリ・ラグジュアリー不動産","nav_gtao_stats":"ステータス","nav_gtao_story":"ストーリー","nav_gtao_support":"サポート","nav_gtao_twitch_drops":"Twitch Drops","nav_gtao_videos":"ビデオ","nav_gtasanandreas_cta_buy_now":"今すぐ購入","nav_gtav_accomplishments":"実績","nav_gtav_checklist":"チェックリスト","nav_gtav_community":"コミュニティ","nav_gtav_community_series":"コミュニティシリーズ","nav_gtav_create_crew":"クルーを作成","nav_gtav_crews":"クルー","nav_gtav_crews_browse_all":"全てのクルーを見る","nav_gtav_cta_buy_now":"今すぐ購入","nav_gtav_discover":"概要","nav_gtav_emblem_editor":"エンブレム・エディター","nav_gtav_gta_online":"GTAオンライン","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"ガイド","nav_gtav_jobs":"ジョブ","nav_gtav_jobs_browse_all":"全てのジョブを見る","nav_gtav_licence_plate_creator":"ナンバープレートクリエイター","nav_gtav_missions":"ミッション","nav_gtav_my_character":"自分のキャラクター","nav_gtav_my_crews":"自分のクルー","nav_gtav_my_jobs":"マイ・ジョブ","nav_gtav_overview":"概要","nav_gtav_photos":"写真","nav_gtav_playlists":"プレイリスト","nav_gtav_stats":"ステータス","nav_gtav_story":"ストーリー","nav_gtav_support":"サポート","nav_gtav_videos":"ビデオ","nav_gtavc_cta_buy_now":"今すぐ購入","nav_gtavc_discover":"概要","nav_gtavcs_discover":"注目","nav_lanoire_accomplishments":"実績","nav_lanoire_badge_pursuit":"バッジ探索チャレンジ","nav_lanoire_case_tracker":"事件トラッカー","nav_lanoire_checklist":"チェックリスト","nav_lanoire_cta_buy_now":"今すぐ購入","nav_lanoire_official_site":"オフィシャルサイト","nav_lanoire_overview":"概要","nav_lanoire_pc_console":"PC/コンソール","nav_lanoire_progress":"進行状況","nav_lanoire_stats":"ステータス","nav_lanoire_support":"サポート","nav_lanoire_vr_case_files":"VR事件簿","nav_mobilemenu_close":"メニューを閉じる","nav_mobilemenu_open":"メニューを開く","nav_mobilemenu_title":"ナビゲーションメニュー","nav_more_dropdown":"もっと見る","nav_mp3_accomplishments":"実績","nav_mp3_career":"キャリア","nav_mp3_chapters":"チャプター","nav_mp3_checklist":"チェックリスト","nav_mp3_checkpoint_challenge":"チェックポイントチャレンジ","nav_mp3_crews":"クルー","nav_mp3_cta_buy_now":"今すぐ購入","nav_mp3_featured":"ピックアップ","nav_mp3_grinds":"グラインド","nav_mp3_leaderboards":"ランキング","nav_mp3_multiplayer":"マルチプレイ","nav_mp3_news":"ニュース","nav_mp3_ny_minute":"ニューヨーク・ミニッツ","nav_mp3_official_site":"オフィシャルサイト","nav_mp3_overview":"概要","nav_mp3_progress":"進行状況","nav_mp3_score_attack":"スコアアタック","nav_mp3_singleplayer":"シングルプレイ","nav_mp3_specifications":"システム要件","nav_mp3_support":"サポート","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}(リンクは新しいウィンドウで開きます)","nav_quick_access_games":"ゲーム","nav_quick_access_home":"ホーム","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"実績","nav_rdo_awards":"アワード","nav_rdo_benefits":"特典","nav_rdo_catalogue":"カタログ","nav_rdo_club_rewards":"クラブ報酬","nav_rdo_community":"コミュニティ","nav_rdo_competitive_series":"対戦シリーズ","nav_rdo_cta_buy_now":"今すぐ購入","nav_rdo_customization":"カスタマイズ","nav_rdo_explore":"探索","nav_rdo_getting_started":"冒険の始まり","nav_rdo_guides":"ガイド","nav_rdo_my_character":"自分のキャラクター","nav_rdo_overview":"概要","nav_rdo_photos":"写真","nav_rdo_posses":"民警団","nav_rdo_posses_free_roam":"民警団＆放浪モード","nav_rdo_progress":"進行状況","nav_rdo_progression":"進行状況","nav_rdo_rank_unlocks":"ランク解除","nav_rdo_roles":"役割","nav_rdo_specialist_roles":"専門的な役割","nav_rdo_story_missions":"ストーリーミッション","nav_rdo_support":"サポート","nav_rdr2_accomplishments":"実績","nav_rdr2_artwork":"アートワーク","nav_rdr2_catalogue":"カタログ","nav_rdr2_challenges":"チャレンジ","nav_rdr2_chapters":"チャプター","nav_rdr2_character":"キャラクター","nav_rdr2_compendium":"図鑑","nav_rdr2_cta_buy_now":"今すぐ購入","nav_rdr2_explore":"探索","nav_rdr2_gallery":"ギャラリー","nav_rdr2_locations":"ロケーション","nav_rdr2_media":"メディア","nav_rdr2_music":"音楽","nav_rdr2_online":"オンライン","nav_rdr2_overview":"概要","nav_rdr2_progress":"進行状況","nav_rdr2_stats":"ステータス","nav_rdr2_support":"サポート","nav_rdr2_van_der_linde_gang":"ダッチギャング","nav_rdr2_videos":"ビデオ","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rdr_cta_buy_now":"今すぐ購入","nav_rockstargames_external_link":"外部","nav_rockstargames_home":"ロックスター・ゲームスホーム","nav_rockstargames_logo":"クリックしてメニューを開く","nav_rsg_community_guidelines":"コミュニティガイドライン","nav_rsg_downloads":"ダウンロード","nav_rsg_games":"ゲーム","nav_rsg_newswire":"Newswire","nav_rsg_store":"ストア","nav_rsg_support":"サポート","nav_rsg_videos":"ビデオ","nav_search_error_too_short":"検索文字数が少なすぎます。{count}文字以上にしてください。","nav_search_error_too_short_invalid_chars":"検索文字に無効な文字({invalidChars})が含まれています。無効な文字を削除してもう一度お試しください。","nav_support_dashboard":"ダッシュボード","nav_support_home":"ホーム","nav_support_service_status":"サービス状況","nav_support_submit_ticket":"チケットを送信","nav_thewarriors_cta_buy_now":"今すぐ購入","nav_undeadnightmare_buy_now":"今すぐ購入","nav_undeadnightmare_discover":"概要","nav_undeadnightmare_gallery":"ギャラリー","nav_undeadnightmare_info":"情報","nav_undeadnightmare_media":"メディア","nav_undeadnightmare_news":"ニュース","nav_undeadnightmare_ps3_digital":"PS3 - ダウンロード版","nav_undeadnightmare_specs":"システム要件","nav_undeadnightmare_suport":"サポート","nav_undeadnightmare_videos":"ビデオ","nav_undeadnightmare_xbox360_digital":"Xbox 360 - ダウンロード版","nav_view_all_games":"全て表示","nofications_new":"新しいお知らせ","quick_access_title":"Rockstar Games","sc_link_account":"アカウント","sc_link_cookies_policy":"Cookieポリシー","sc_link_cookies_settings":"Cookie設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を共有もしくは売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_legal":"利用規約","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","search_action":"検索","search_close_button":"検索を閉じる","search_disabled_aria_label":"現在の質問の検索は既にされました。新たな検索を入力してください。","search_open_button":"検索を開く","search_placeholder":"ロックスター・ゲームス内を検索…","search_target_aria_label":"{Target}を検索","search_target_community":"コミュニティ","search_target_crews":"クルー","search_target_games":"ゲーム","search_target_jobs":"ジョブ","search_target_posts":"投稿","search_target_users":"ユーザー","search_target_videos":"ビデオ"},"ko-KR":{"accessibility_skip_button":"메뉴 건너뛰기","avatar_menu_close":"플레이어 메뉴 닫기","avatar_menu_open":"플레이어 메뉴 열기","avatarmenu_logout":"로그아웃","avatarmenu_selectlanguage":"언어 선택","avatarmenu_signin":"로그인","avatarmenu_signup":"가입","banner_rockstargames_collapsed_legal_cta_aria_label":"접을 수 있는 배너 콘텐츠","banner_rockstargames_collapsed_legal_cta_label":"더 알아보기","banner_rockstargames_collapsed_legal_text":"2024년 2월 28일에 법률 약관이 변경되었습니다.","banner_rockstargames_gift_cta":"GTA 온라인에서 무료 스포츠카 획득","banner_rockstargames_gift_text":"지금부터 3월 18일까지 무료 오베이 8F 드래프터를 획득할 수 있습니다.","games_menu_featured":"특선 게임","games_menu_gta_online":"Grand Theft Auto 온라인","games_menu_gta_trilogy":"Grand Theft Auto: 트릴로지","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"게임","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 온라인","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"모두 보기","nav_avatarmenu_title":"아바타 메뉴","nav_bully_Overview":"지원","nav_bully_accomplishments":"업적","nav_bully_cta_buy_now":"지금 구입","nav_bully_game_overview":"탐색","nav_bully_videos":"동영상","nav_careers_careers_on_linkedin":"LinkedIn 채용","nav_careers_contact_us":"문의","nav_careers_home":"홈","nav_careers_openings":"진행 중 공고","nav_cta_get_launcher":"Launcher 다운로드","nav_gta3_cta_buy_now":"지금 구입","nav_gta_trilogy_accomplishments":"업적","nav_gta_trilogy_cta_buy_now":"지금 구입","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"소개","nav_gta_trilogy_support":"지원","nav_gtaiv_accomplishments":"업적","nav_gtaiv_cta_buy_now":"지금 구입","nav_gtaiv_overview":"탐색","nav_gtaiv_support":"지원","nav_gtaiveflc_accomplishments":"업적","nav_gtaiveflc_cta_buy_now":"지금 구입","nav_gtaiveflc_overview":"소개","nav_gtaiveflc_support":"지원","nav_gtao_accomplishments":"업적","nav_gtao_browse_crews":"모든 조직 둘러보기","nav_gtao_career_progress":"경력 진행","nav_gtao_checklist":"체크리스트","nav_gtao_community":"커뮤니티","nav_gtao_community_series":"커뮤니티 시리즈","nav_gtao_crews":"조직","nav_gtao_crews_create":"조직 생성","nav_gtao_cta_buy_now":"지금 구입","nav_gtao_discover":"탐색","nav_gtao_emblem_editor":"상징 편집기","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 온라인","nav_gtao_guides":"가이드","nav_gtao_jobs":"작업","nav_gtao_jobs_browse_all":"모든 작업 둘러보기","nav_gtao_jobs_playlists":"플레이 목록","nav_gtao_license_plate_creator":"번호판 생성기","nav_gtao_missions":"임무","nav_gtao_my_character":"내 캐릭터","nav_gtao_my_crews":"내 조직","nav_gtao_my_jobs":"내 작업","nav_gtao_overview":"소개","nav_gtao_photos":"사진","nav_gtao_prix_luxury_real_estate":"프릭스 럭셔리 부동산","nav_gtao_stats":"통계","nav_gtao_story":"스토리","nav_gtao_support":"지원","nav_gtao_twitch_drops":"Twitch 드롭스","nav_gtao_videos":"동영상","nav_gtasanandreas_cta_buy_now":"지금 구입","nav_gtav_accomplishments":"업적","nav_gtav_checklist":"체크리스트","nav_gtav_community":"커뮤니티","nav_gtav_community_series":"커뮤니티 시리즈","nav_gtav_create_crew":"조직 생성","nav_gtav_crews":"조직","nav_gtav_crews_browse_all":"모든 조직 둘러보기","nav_gtav_cta_buy_now":"지금 구입","nav_gtav_discover":"탐색","nav_gtav_emblem_editor":"상징 편집기","nav_gtav_gta_online":"GTA 온라인","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"가이드","nav_gtav_jobs":"작업","nav_gtav_jobs_browse_all":"모든 작업 둘러보기","nav_gtav_licence_plate_creator":"번호판 생성기","nav_gtav_missions":"임무","nav_gtav_my_character":"내 캐릭터","nav_gtav_my_crews":"내 조직","nav_gtav_my_jobs":"내 작업","nav_gtav_overview":"소개","nav_gtav_photos":"사진","nav_gtav_playlists":"플레이 목록","nav_gtav_stats":"통계","nav_gtav_story":"스토리","nav_gtav_support":"지원","nav_gtav_videos":"동영상","nav_gtavc_cta_buy_now":"지금 구입","nav_gtavc_discover":"탐색","nav_gtavcs_discover":"탐색","nav_lanoire_accomplishments":"업적","nav_lanoire_badge_pursuit":"배지 수집","nav_lanoire_case_tracker":"사건 추적 일지","nav_lanoire_checklist":"체크리스트","nav_lanoire_cta_buy_now":"지금 구입","nav_lanoire_official_site":"공식 사이트","nav_lanoire_overview":"소개","nav_lanoire_pc_console":"PC/콘솔","nav_lanoire_progress":"진행","nav_lanoire_stats":"통계","nav_lanoire_support":"지원","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"메뉴 닫기","nav_mobilemenu_open":"메뉴 열기","nav_mobilemenu_title":"이동 메뉴","nav_more_dropdown":"그 외","nav_mp3_accomplishments":"업적","nav_mp3_career":"경력","nav_mp3_chapters":"챕터","nav_mp3_checklist":"체크리스트","nav_mp3_checkpoint_challenge":"체크포인트 도전","nav_mp3_crews":"조직","nav_mp3_cta_buy_now":"지금 구입","nav_mp3_featured":"주요 사항","nav_mp3_grinds":"시련","nav_mp3_leaderboards":"순위표","nav_mp3_multiplayer":"멀티 플레이","nav_mp3_news":"뉴스","nav_mp3_ny_minute":"뉴욕의 시간","nav_mp3_official_site":"공식 사이트","nav_mp3_overview":"소개","nav_mp3_progress":"진행","nav_mp3_score_attack":"스코어 어택","nav_mp3_singleplayer":"싱글 플레이","nav_mp3_specifications":"사양","nav_mp3_support":"지원","nav_mp3_weapons":"무기","nav_opens_in_new_window":"{text} (새 창에서 링크 열기)","nav_quick_access_games":"게임","nav_quick_access_home":"홈","nav_quick_access_newswire":"뉴스와이어","nav_rdo_accomplishments":"업적","nav_rdo_awards":"보상","nav_rdo_benefits":"혜택","nav_rdo_catalogue":"카탈로그","nav_rdo_club_rewards":"클럽 보상","nav_rdo_community":"커뮤니티","nav_rdo_competitive_series":"경쟁 시리즈","nav_rdo_cta_buy_now":"지금 구입","nav_rdo_customization":"커스텀","nav_rdo_explore":"탐험","nav_rdo_getting_started":"시작하기","nav_rdo_guides":"가이드","nav_rdo_my_character":"내 캐릭터","nav_rdo_overview":"소개","nav_rdo_photos":"사진","nav_rdo_posses":"갱단","nav_rdo_posses_free_roam":"갱단과 유랑 모드","nav_rdo_progress":"진행","nav_rdo_progression":"진행 상황","nav_rdo_rank_unlocks":"랭크 잠금 해제","nav_rdo_roles":"직업","nav_rdo_specialist_roles":"전문 직업","nav_rdo_story_missions":"스토리 임무","nav_rdo_support":"지원","nav_rdr2_accomplishments":"업적","nav_rdr2_artwork":"아트워크","nav_rdr2_catalogue":"카탈로그","nav_rdr2_challenges":"도전","nav_rdr2_chapters":"챕터","nav_rdr2_character":"캐릭터","nav_rdr2_compendium":"개요","nav_rdr2_cta_buy_now":"지금 구입","nav_rdr2_explore":"탐험","nav_rdr2_gallery":"갤러리","nav_rdr2_locations":"위치","nav_rdr2_media":"미디어","nav_rdr2_music":"음악","nav_rdr2_online":"온라인","nav_rdr2_overview":"소개","nav_rdr2_progress":"진행","nav_rdr2_stats":"통계","nav_rdr2_support":"지원","nav_rdr2_van_der_linde_gang":"반 더 린드 갱단","nav_rdr2_videos":"동영상","nav_rdr2_weaponry":"무기","nav_rdr2_wildlife":"야생 동물","nav_rdr_cta_buy_now":"지금 구입","nav_rockstargames_external_link":"외부","nav_rockstargames_home":"Rockstar Games 홈","nav_rockstargames_logo":"클릭해서 메뉴 열기","nav_rsg_community_guidelines":"커뮤니티 가이드라인","nav_rsg_downloads":"다운로드","nav_rsg_games":"게임","nav_rsg_newswire":"뉴스와이어","nav_rsg_store":"스토어","nav_rsg_support":"지원","nav_rsg_videos":"동영상","nav_search_error_too_short":"검색어가 너무 짧습니다. 검색어는 최소 {count}글자여야 합니다.","nav_search_error_too_short_invalid_chars":"검색어에 유효하지 않은 문자({invalidChars})가 포함되어 있습니다. 제거하고 다시 시도하십시오.","nav_support_dashboard":"내 대시보드","nav_support_home":"홈","nav_support_service_status":"서비스 상태","nav_support_submit_ticket":"요청 제출","nav_thewarriors_cta_buy_now":"지금 구입","nav_undeadnightmare_buy_now":"지금 구입","nav_undeadnightmare_discover":"탐색","nav_undeadnightmare_gallery":"갤러리","nav_undeadnightmare_info":"정보","nav_undeadnightmare_media":"미디어","nav_undeadnightmare_news":"뉴스","nav_undeadnightmare_ps3_digital":"PS3 - 디지털","nav_undeadnightmare_specs":"사양","nav_undeadnightmare_suport":"지원","nav_undeadnightmare_videos":"동영상","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 디지털","nav_view_all_games":"모두 보기","nofications_new":"새 알림","quick_access_title":"Rockstar Games","sc_link_account":"계정","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 또는 공유 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_legal":"법률 관련","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","search_action":"검색","search_close_button":"검색 닫기","search_disabled_aria_label":"현재 검색어를 이미 검색했습니다. 새로운 검색어를 입력하십시오.","search_open_button":"검색 열기","search_placeholder":"Rockstar Games 검색...","search_target_aria_label":"{Target} 검색","search_target_community":"커뮤니티","search_target_crews":"조직","search_target_games":"게임","search_target_jobs":"작업","search_target_posts":"게시물","search_target_users":"유저","search_target_videos":"동영상"},"pl-PL":{"accessibility_skip_button":"Pomiń menu","avatar_menu_close":"Zamknij menu gracza","avatar_menu_open":"Otwórz menu gracza","avatarmenu_logout":"Wyloguj się","avatarmenu_selectlanguage":"Wybierz język","avatarmenu_signin":"Zaloguj się","avatarmenu_signup":"Zarejestruj się","banner_rockstargames_collapsed_legal_cta_aria_label":"Zwijany baner","banner_rockstargames_collapsed_legal_cta_label":"Dowiedz się więcej","banner_rockstargames_collapsed_legal_text":"Nasze zasady prawne ulegną zmianie 28 lutego 2024.","banner_rockstargames_gift_cta":"Zdobądź darmowy samochód sportowy w GTA Online","banner_rockstargames_gift_text":"Odbierz za darmo Obeya 8F Draftera do 18 marca.","games_menu_featured":"Wyróżnione gry","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Gry","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Pokaż wszystko","nav_avatarmenu_title":"Menu awatara","nav_bully_Overview":"Wsparcie","nav_bully_accomplishments":"Osiągnięcia","nav_bully_cta_buy_now":"Kup teraz","nav_bully_game_overview":"Odkryj","nav_bully_videos":"Filmy","nav_careers_careers_on_linkedin":"Oferty pracy na LinkedIn","nav_careers_contact_us":"Kontakt","nav_careers_home":"Strona główna","nav_careers_openings":"Wakaty","nav_cta_get_launcher":"Pobierz aplikację","nav_gta3_cta_buy_now":"Kup teraz","nav_gta_trilogy_accomplishments":"Osiągnięcia","nav_gta_trilogy_cta_buy_now":"Kup teraz","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Ogólny zarys","nav_gta_trilogy_support":"Wsparcie","nav_gtaiv_accomplishments":"Osiągnięcia","nav_gtaiv_cta_buy_now":"Kup teraz","nav_gtaiv_overview":"Odkryj","nav_gtaiv_support":"Wsparcie","nav_gtaiveflc_accomplishments":"Osiągnięcia","nav_gtaiveflc_cta_buy_now":"Kup teraz","nav_gtaiveflc_overview":"Ogólny zarys","nav_gtaiveflc_support":"Wsparcie","nav_gtao_accomplishments":"Osiągnięcia","nav_gtao_browse_crews":"Przeglądaj ekipy","nav_gtao_career_progress":"Postępy kariery","nav_gtao_checklist":"Lista zadań","nav_gtao_community":"Społeczność","nav_gtao_community_series":"Seria społeczności","nav_gtao_crews":"Ekipy","nav_gtao_crews_create":"Stwórz ekipę","nav_gtao_cta_buy_now":"Kup teraz","nav_gtao_discover":"Odkryj","nav_gtao_emblem_editor":"Edytor emblematów","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Przewodniki","nav_gtao_jobs":"Akcje","nav_gtao_jobs_browse_all":"Przeglądaj akcje","nav_gtao_jobs_playlists":"Listy gier","nav_gtao_license_plate_creator":"Kreator tablic rejestracyjnych","nav_gtao_missions":"Misje","nav_gtao_my_character":"Moja postać","nav_gtao_my_crews":"Moje ekipy","nav_gtao_my_jobs":"Moje akcje","nav_gtao_overview":"Ogólny zarys","nav_gtao_photos":"Zdjęcia","nav_gtao_prix_luxury_real_estate":"Prix Luxury Real Estate","nav_gtao_stats":"Statystyki","nav_gtao_story":"Fabuła","nav_gtao_support":"Wsparcie","nav_gtao_twitch_drops":"Dropy na Twitchu","nav_gtao_videos":"Filmy","nav_gtasanandreas_cta_buy_now":"Kup teraz","nav_gtav_accomplishments":"Osiągnięcia","nav_gtav_checklist":"Lista zadań","nav_gtav_community":"Społeczność","nav_gtav_community_series":"Seria społeczności","nav_gtav_create_crew":"Stwórz ekipę","nav_gtav_crews":"Ekipy","nav_gtav_crews_browse_all":"Przeglądaj ekipy","nav_gtav_cta_buy_now":"Kup teraz","nav_gtav_discover":"Odkryj","nav_gtav_emblem_editor":"Edytor emblematów","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Przewodniki","nav_gtav_jobs":"Akcje","nav_gtav_jobs_browse_all":"Przeglądaj akcje","nav_gtav_licence_plate_creator":"Kreator tablic rejestracyjnych","nav_gtav_missions":"Misje","nav_gtav_my_character":"Moja postać","nav_gtav_my_crews":"Moje ekipy","nav_gtav_my_jobs":"Moje akcje","nav_gtav_overview":"Ogólny zarys","nav_gtav_photos":"Zdjęcia","nav_gtav_playlists":"Listy gier","nav_gtav_stats":"Statystyki","nav_gtav_story":"Fabuła","nav_gtav_support":"Wsparcie","nav_gtav_videos":"Filmy","nav_gtavc_cta_buy_now":"Kup teraz","nav_gtavc_discover":"Odkryj","nav_gtavcs_discover":"Odkryj","nav_lanoire_accomplishments":"Osiągnięcia","nav_lanoire_badge_pursuit":"Pościg za odznaką","nav_lanoire_case_tracker":"Wykaz spraw","nav_lanoire_checklist":"Lista zadań","nav_lanoire_cta_buy_now":"Kup teraz","nav_lanoire_official_site":"Oficjalna strona","nav_lanoire_overview":"Ogólny zarys","nav_lanoire_pc_console":"PC/konsola","nav_lanoire_progress":"Postępy","nav_lanoire_stats":"Statystyki","nav_lanoire_support":"Wsparcie","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Zamknij menu","nav_mobilemenu_open":"Otwórz menu","nav_mobilemenu_title":"Menu nawigacji","nav_more_dropdown":"Więcej","nav_mp3_accomplishments":"Osiągnięcia","nav_mp3_career":"Kariera","nav_mp3_chapters":"Rozdziały","nav_mp3_checklist":"Lista zadań","nav_mp3_checkpoint_challenge":"Wyzwanie punktów kontrolnych","nav_mp3_crews":"Ekipy","nav_mp3_cta_buy_now":"Kup teraz","nav_mp3_featured":"Wyróżnione","nav_mp3_grinds":"Zadania","nav_mp3_leaderboards":"Rankingi","nav_mp3_multiplayer":"Tryb wieloosobowy","nav_mp3_news":"Nowości","nav_mp3_ny_minute":"W mgnieniu oka","nav_mp3_official_site":"Oficjalna strona","nav_mp3_overview":"Ogólny zarys","nav_mp3_progress":"Postępy","nav_mp3_score_attack":"Atak na wynik","nav_mp3_singleplayer":"Gra jednoosobowa","nav_mp3_specifications":"Wymagania","nav_mp3_support":"Wsparcie","nav_mp3_weapons":"Broń","nav_opens_in_new_window":"{text} (Odnośnik otworzy nowe okno)","nav_quick_access_games":"Gry","nav_quick_access_home":"Strona główna","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Osiągnięcia","nav_rdo_awards":"Nagrody","nav_rdo_benefits":"Korzyści","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Nagrody klubowe","nav_rdo_community":"Społeczność","nav_rdo_competitive_series":"Seria rywalizacji","nav_rdo_cta_buy_now":"Kup teraz","nav_rdo_customization":"Personalizacja","nav_rdo_explore":"Eksploruj","nav_rdo_getting_started":"Pierwsze kroki","nav_rdo_guides":"Przewodniki","nav_rdo_my_character":"Moja postać","nav_rdo_overview":"Ogólny zarys","nav_rdo_photos":"Zdjęcia","nav_rdo_posses":"Bandy","nav_rdo_posses_free_roam":"Bandy i gra swobodna","nav_rdo_progress":"Postępy","nav_rdo_progression":"Postępy","nav_rdo_rank_unlocks":"Nagrody za rangi","nav_rdo_roles":"Role","nav_rdo_specialist_roles":"Role specjalistyczne","nav_rdo_story_missions":"Misje fabularne","nav_rdo_support":"Wsparcie","nav_rdr2_accomplishments":"Osiągnięcia","nav_rdr2_artwork":"Grafiki","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Wyzwania","nav_rdr2_chapters":"Rozdziały","nav_rdr2_character":"Postać","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Kup teraz","nav_rdr2_explore":"Eksploruj","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Miejsca","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Muzyka","nav_rdr2_online":"Online","nav_rdr2_overview":"Ogólny zarys","nav_rdr2_progress":"Postępy","nav_rdr2_stats":"Statystyki","nav_rdr2_support":"Wsparcie","nav_rdr2_van_der_linde_gang":"Gang van der Lindego","nav_rdr2_videos":"Filmy","nav_rdr2_weaponry":"Broń","nav_rdr2_wildlife":"Zwierzęta","nav_rdr_cta_buy_now":"Kup teraz","nav_rockstargames_external_link":"Zewnętrzny","nav_rockstargames_home":"Strona główna Rockstar Games","nav_rockstargames_logo":"Kliknij, aby otworzyć menu","nav_rsg_community_guidelines":"Wskazówki społeczności","nav_rsg_downloads":"Do pobrania","nav_rsg_games":"Gry","nav_rsg_newswire":"Newswire","nav_rsg_store":"Sklep","nav_rsg_support":"Wsparcie","nav_rsg_videos":"Filmy","nav_search_error_too_short":"Wyszukiwana fraza jest za krótka. Musi ona składać się z co najmniej {count} znaków.","nav_search_error_too_short_invalid_chars":"Wyszukiwana fraza zawiera nieobsługiwane znaki ({invalidChars}). Usuń je i spróbuj ponownie.","nav_support_dashboard":"Panel użytkownika","nav_support_home":"Strona główna","nav_support_service_status":"Status usługi","nav_support_submit_ticket":"Wyślij zgłoszenie","nav_thewarriors_cta_buy_now":"Kup teraz","nav_undeadnightmare_buy_now":"Kup teraz","nav_undeadnightmare_discover":"Odkryj","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informacje","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Nowości","nav_undeadnightmare_ps3_digital":"PS3 – wersja cyfrowa","nav_undeadnightmare_specs":"Wymagania","nav_undeadnightmare_suport":"Wsparcie","nav_undeadnightmare_videos":"Filmy","nav_undeadnightmare_xbox360_digital":"Xbox 360 – wersja cyfrowa","nav_view_all_games":"Pokaż wszystko","nofications_new":"Nowe powiadomienia","quick_access_title":"Rockstar Games","sc_link_account":"Konto","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży i udostępniania moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_legal":"Informacje prawne","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","search_action":"Szukaj","search_close_button":"Zamknij wyszukiwanie","search_disabled_aria_label":"Już szukano bieżącej frazy. Wpisz nową frazę.","search_open_button":"Rozpocznij wyszukiwanie","search_placeholder":"Przeszukaj Rockstar Games...","search_target_aria_label":"Wyszukaj: {target}","search_target_community":"Społeczność","search_target_crews":"Ekipy","search_target_games":"Gry","search_target_jobs":"Akcje","search_target_posts":"Wpisy","search_target_users":"Użytkownicy","search_target_videos":"Filmy"},"pt-BR":{"accessibility_skip_button":"Pular o menu","avatar_menu_close":"Fechar menu de jogador","avatar_menu_open":"Abrir menu de jogador","avatarmenu_logout":"Sair","avatarmenu_selectlanguage":"Selecione um idioma","avatarmenu_signin":"Iniciar sessão","avatarmenu_signup":"Inscrever-se","banner_rockstargames_collapsed_legal_cta_aria_label":"Conteúdo do banner recolhido","banner_rockstargames_collapsed_legal_cta_label":"Saiba mais","banner_rockstargames_collapsed_legal_text":"Nossos termos jurídicos mudaram em 28 de fevereiro de 2024.","banner_rockstargames_gift_cta":"Obtenha um carro esportivo de graça no GTA Online","banner_rockstargames_gift_text":"Até 18 de março, resgate um Obey 8F Drafter grátis.","games_menu_featured":"Jogos em destaque","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Jogos","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Ver tudo","nav_avatarmenu_title":"Menu de avatar","nav_bully_Overview":"Suporte","nav_bully_accomplishments":"Conquistas","nav_bully_cta_buy_now":"Compre já","nav_bully_game_overview":"Descobrir","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Carreiras no LinkedIn","nav_careers_contact_us":"Entre em contato","nav_careers_home":"Início","nav_careers_openings":"Vagas","nav_cta_get_launcher":"Obter Launcher","nav_gta3_cta_buy_now":"Compre já","nav_gta_trilogy_accomplishments":"Conquistas","nav_gta_trilogy_cta_buy_now":"Compre já","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Visão geral","nav_gta_trilogy_support":"Suporte","nav_gtaiv_accomplishments":"Conquistas","nav_gtaiv_cta_buy_now":"Compre já","nav_gtaiv_overview":"Descobrir","nav_gtaiv_support":"Suporte","nav_gtaiveflc_accomplishments":"Conquistas","nav_gtaiveflc_cta_buy_now":"Compre já","nav_gtaiveflc_overview":"Visão geral","nav_gtaiveflc_support":"Suporte","nav_gtao_accomplishments":"Conquistas","nav_gtao_browse_crews":"Ver todos os Comandos","nav_gtao_career_progress":"Progresso da Carreira","nav_gtao_checklist":"Lista de progresso","nav_gtao_community":"Comunidade","nav_gtao_community_series":"Comunidade em Série","nav_gtao_crews":"Comandos","nav_gtao_crews_create":"Criar um Comando","nav_gtao_cta_buy_now":"Compre já","nav_gtao_discover":"Descobrir","nav_gtao_emblem_editor":"Editor de Emblema","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guias","nav_gtao_jobs":"Serviços","nav_gtao_jobs_browse_all":"Ver todos os serviços","nav_gtao_jobs_playlists":"Listas de jogos","nav_gtao_license_plate_creator":"Criador de Placas","nav_gtao_missions":"Missões","nav_gtao_my_character":"Meu personagem","nav_gtao_my_crews":"Meus Comandos","nav_gtao_my_jobs":"Meus serviços","nav_gtao_overview":"Visão geral","nav_gtao_photos":"Fotos","nav_gtao_prix_luxury_real_estate":"Prix Luxury Real Estate","nav_gtao_stats":"Estatísticas","nav_gtao_story":"História","nav_gtao_support":"Suporte","nav_gtao_twitch_drops":"Drops da Twitch","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Compre já","nav_gtav_accomplishments":"Conquistas","nav_gtav_checklist":"Lista de progresso","nav_gtav_community":"Comunidade","nav_gtav_community_series":"Comunidade em Série","nav_gtav_create_crew":"Criar um Comando","nav_gtav_crews":"Comandos","nav_gtav_crews_browse_all":"Ver todos os Comandos","nav_gtav_cta_buy_now":"Compre já","nav_gtav_discover":"Descobrir","nav_gtav_emblem_editor":"Editor de Emblema","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guias","nav_gtav_jobs":"Serviços","nav_gtav_jobs_browse_all":"Ver todos os serviços","nav_gtav_licence_plate_creator":"Criador de Placas","nav_gtav_missions":"Missões","nav_gtav_my_character":"Meu personagem","nav_gtav_my_crews":"Meus Comandos","nav_gtav_my_jobs":"Meus serviços","nav_gtav_overview":"Visão geral","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de jogos","nav_gtav_stats":"Estatísticas","nav_gtav_story":"História","nav_gtav_support":"Suporte","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Compre já","nav_gtavc_discover":"Descobrir","nav_gtavcs_discover":"Descobrir","nav_lanoire_accomplishments":"Conquistas","nav_lanoire_badge_pursuit":"Distintivos escondidos","nav_lanoire_case_tracker":"Rastreador de Casos","nav_lanoire_checklist":"Lista de progresso","nav_lanoire_cta_buy_now":"Compre já","nav_lanoire_official_site":"Site oficial","nav_lanoire_overview":"Visão geral","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Estatísticas","nav_lanoire_support":"Suporte","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Fechar menu","nav_mobilemenu_open":"Abrir menu","nav_mobilemenu_title":"Menu de navegação","nav_more_dropdown":"Mais","nav_mp3_accomplishments":"Conquistas","nav_mp3_career":"Carreira","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progresso","nav_mp3_checkpoint_challenge":"Desafio Checkpoint","nav_mp3_crews":"Comandos","nav_mp3_cta_buy_now":"Compre já","nav_mp3_featured":"Em destaque","nav_mp3_grinds":"Desafios","nav_mp3_leaderboards":"Placares de líderes","nav_mp3_multiplayer":"Multijogador","nav_mp3_news":"Novidades","nav_mp3_ny_minute":"Um Minuto de Nova York","nav_mp3_official_site":"Site oficial","nav_mp3_overview":"Visão geral","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Modo de Pontuação","nav_mp3_singleplayer":"Jogo individual","nav_mp3_specifications":"Especificações","nav_mp3_support":"Suporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (O link abre em uma nova janela)","nav_quick_access_games":"Jogos","nav_quick_access_home":"Início","nav_quick_access_newswire":"Boletim","nav_rdo_accomplishments":"Conquistas","nav_rdo_awards":"Prêmios","nav_rdo_benefits":"Benefícios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Prêmios do Clube","nav_rdo_community":"Comunidade","nav_rdo_competitive_series":"Séries Competitivas","nav_rdo_cta_buy_now":"Compre já","nav_rdo_customization":"Personalização","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeiros passos","nav_rdo_guides":"Guias","nav_rdo_my_character":"Meu personagem","nav_rdo_overview":"Visão geral","nav_rdo_photos":"Fotos","nav_rdo_posses":"Bandos","nav_rdo_posses_free_roam":"Bandos e Modo Livre","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressão","nav_rdo_rank_unlocks":"Desbloqueios por Nível","nav_rdo_roles":"Ofícios","nav_rdo_specialist_roles":"Ofícios Especializados","nav_rdo_story_missions":"Missões de História","nav_rdo_support":"Suporte","nav_rdr2_accomplishments":"Conquistas","nav_rdr2_artwork":"Arte","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafios","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personagem","nav_rdr2_compendium":"Compêndio","nav_rdr2_cta_buy_now":"Compre já","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Locais","nav_rdr2_media":"Mídia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Visão geral","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Estatísticas","nav_rdr2_support":"Suporte","nav_rdr2_van_der_linde_gang":"Gangue Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Vida Selvagem","nav_rdr_cta_buy_now":"Compre já","nav_rockstargames_external_link":"Externo","nav_rockstargames_home":"Rockstar Games – Início","nav_rockstargames_logo":"Clique para abrir o menu","nav_rsg_community_guidelines":"Regras da Comunidade","nav_rsg_downloads":"Downloads","nav_rsg_games":"Jogos","nav_rsg_newswire":"Boletim","nav_rsg_store":"Loja","nav_rsg_support":"Suporte","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Seu termo de busca é curto demais. Os termos de busca devem ter, no mínimo, {count} caracteres.","nav_search_error_too_short_invalid_chars":"Seu termo de busca contém caracteres inválidos ({invalidChars}). Remova-os e tente novamente.","nav_support_dashboard":"Meu painel","nav_support_home":"Início","nav_support_service_status":"Status do serviço","nav_support_submit_ticket":"Enviar uma solicitação","nav_thewarriors_cta_buy_now":"Compre já","nav_undeadnightmare_buy_now":"Compre já","nav_undeadnightmare_discover":"Descobrir","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informações","nav_undeadnightmare_media":"Mídia","nav_undeadnightmare_news":"Novidades","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Especificações","nav_undeadnightmare_suport":"Suporte","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver tudo","nofications_new":"Novas notificações","quick_access_title":"Rockstar Games","sc_link_account":"Conta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não compartilhem minhas informações pessoais","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_legal":"Aviso legal","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","search_action":"Buscar","search_close_button":"Fechar busca","search_disabled_aria_label":"Esta consulta já foi pesquisada. Faça uma nova consulta.","search_open_button":"Abrir busca","search_placeholder":"Buscar em Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidade","search_target_crews":"Comandos","search_target_games":"Jogos","search_target_jobs":"Serviços","search_target_posts":"Publicações","search_target_users":"Usuários","search_target_videos":"Vídeos"},"ru-RU":{"accessibility_skip_button":"Пропустить меню","avatar_menu_close":"Закрыть меню игрока","avatar_menu_open":"Открыть меню игрока","avatarmenu_logout":"Выход","avatarmenu_selectlanguage":"Выбрать язык","avatarmenu_signin":"Войти","avatarmenu_signup":"Регистрация","banner_rockstargames_collapsed_legal_cta_aria_label":"Содержимое складывающегося баннера","banner_rockstargames_collapsed_legal_cta_label":"Подробности","banner_rockstargames_collapsed_legal_text":"Наши юридические условия изменились 28 февраля 2024 г.","banner_rockstargames_gift_cta":"Получите спорткар в GTA Online бесплатно.","banner_rockstargames_gift_text":"До 18 марта вы можете бесплатно получить Obey 8F Drafter.","games_menu_featured":"Избранные игры","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Игры","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Показать все","nav_avatarmenu_title":"Меню аватара","nav_bully_Overview":"Поддержка","nav_bully_accomplishments":"Достижения","nav_bully_cta_buy_now":"Купить","nav_bully_game_overview":"Об игре","nav_bully_videos":"Видеоролики","nav_careers_careers_on_linkedin":"Вакансии на LinkedIn","nav_careers_contact_us":"Свяжитесь с нами","nav_careers_home":"Главная страница","nav_careers_openings":"Вакансии","nav_cta_get_launcher":"Скачать RGL","nav_gta3_cta_buy_now":"Купить","nav_gta_trilogy_accomplishments":"Достижения","nav_gta_trilogy_cta_buy_now":"Купить","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Описание","nav_gta_trilogy_support":"Поддержка","nav_gtaiv_accomplishments":"Достижения","nav_gtaiv_cta_buy_now":"Купить","nav_gtaiv_overview":"Об игре","nav_gtaiv_support":"Поддержка","nav_gtaiveflc_accomplishments":"Достижения","nav_gtaiveflc_cta_buy_now":"Купить","nav_gtaiveflc_overview":"Описание","nav_gtaiveflc_support":"Поддержка","nav_gtao_accomplishments":"Достижения","nav_gtao_browse_crews":"Посмотреть все банды","nav_gtao_career_progress":"Прогресс карьеры","nav_gtao_checklist":"Трекер","nav_gtao_community":"Сообщество","nav_gtao_community_series":"Серия сообщества","nav_gtao_crews":"Банды","nav_gtao_crews_create":"Создать банду","nav_gtao_cta_buy_now":"Купить","nav_gtao_discover":"Об игре","nav_gtao_emblem_editor":"Редактор эмблем","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Руководства","nav_gtao_jobs":"Дела","nav_gtao_jobs_browse_all":"Посмотреть все дела","nav_gtao_jobs_playlists":"Плейлисты","nav_gtao_license_plate_creator":"Редактор номерных знаков","nav_gtao_missions":"Задания","nav_gtao_my_character":"Мой персонаж","nav_gtao_my_crews":"Мои банды","nav_gtao_my_jobs":"Мои дела","nav_gtao_overview":"Описание","nav_gtao_photos":"Фотографии","nav_gtao_prix_luxury_real_estate":"Prix Luxury Real Estate","nav_gtao_stats":"Статистика","nav_gtao_story":"Сюжетный режим","nav_gtao_support":"Поддержка","nav_gtao_twitch_drops":"Twitch Drops","nav_gtao_videos":"Видеоролики","nav_gtasanandreas_cta_buy_now":"Купить","nav_gtav_accomplishments":"Достижения","nav_gtav_checklist":"Трекер","nav_gtav_community":"Сообщество","nav_gtav_community_series":"Серия сообщества","nav_gtav_create_crew":"Создать банду","nav_gtav_crews":"Банды","nav_gtav_crews_browse_all":"Посмотреть все банды","nav_gtav_cta_buy_now":"Купить","nav_gtav_discover":"Об игре","nav_gtav_emblem_editor":"Редактор эмблем","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Руководства","nav_gtav_jobs":"Дела","nav_gtav_jobs_browse_all":"Посмотреть все дела","nav_gtav_licence_plate_creator":"Редактор номерных знаков","nav_gtav_missions":"Задания","nav_gtav_my_character":"Мой персонаж","nav_gtav_my_crews":"Мои банды","nav_gtav_my_jobs":"Мои дела","nav_gtav_overview":"Описание","nav_gtav_photos":"Фотографии","nav_gtav_playlists":"Плейлисты","nav_gtav_stats":"Статистика","nav_gtav_story":"Сюжетный режим","nav_gtav_support":"Поддержка","nav_gtav_videos":"Видеоролики","nav_gtavc_cta_buy_now":"Купить","nav_gtavc_discover":"Об игре","nav_gtavcs_discover":"Об игре","nav_lanoire_accomplishments":"Достижения","nav_lanoire_badge_pursuit":"Значки","nav_lanoire_case_tracker":"Прогресс","nav_lanoire_checklist":"Трекер","nav_lanoire_cta_buy_now":"Купить","nav_lanoire_official_site":"Официальный сайт","nav_lanoire_overview":"Описание","nav_lanoire_pc_console":"На PC и консолях","nav_lanoire_progress":"Прогресс","nav_lanoire_stats":"Статистика","nav_lanoire_support":"Поддержка","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Закрыть меню","nav_mobilemenu_open":"Открыть меню","nav_mobilemenu_title":"Меню навигации","nav_more_dropdown":"Дополнительно","nav_mp3_accomplishments":"Достижения","nav_mp3_career":"Карьера","nav_mp3_chapters":"Главы","nav_mp3_checklist":"Трекер","nav_mp3_checkpoint_challenge":"Контрольные точки","nav_mp3_crews":"Банды","nav_mp3_cta_buy_now":"Купить","nav_mp3_featured":"Избранные","nav_mp3_grinds":"Подвиги","nav_mp3_leaderboards":"Списки лидеров","nav_mp3_multiplayer":"Сетевая игра","nav_mp3_news":"Новости","nav_mp3_ny_minute":"Время не ждет","nav_mp3_official_site":"Официальный сайт","nav_mp3_overview":"Описание","nav_mp3_progress":"Прогресс","nav_mp3_score_attack":"Игра на очки","nav_mp3_singleplayer":"Одиночная игра","nav_mp3_specifications":"Системные требования","nav_mp3_support":"Поддержка","nav_mp3_weapons":"Оружие","nav_opens_in_new_window":"{text} (ссылка откроется в новом окне)","nav_quick_access_games":"Игры","nav_quick_access_home":"Главная страница","nav_quick_access_newswire":"Новостная лента","nav_rdo_accomplishments":"Достижения","nav_rdo_awards":"Награды","nav_rdo_benefits":"Бонусы","nav_rdo_catalogue":"Каталог","nav_rdo_club_rewards":"Награды клуба","nav_rdo_community":"Сообщество","nav_rdo_competitive_series":"Соревновательные серии","nav_rdo_cta_buy_now":"Купить","nav_rdo_customization":"Персонализация","nav_rdo_explore":"Об игре","nav_rdo_getting_started":"С чего начать","nav_rdo_guides":"Руководства","nav_rdo_my_character":"Мой персонаж","nav_rdo_overview":"Описание","nav_rdo_photos":"Фотографии","nav_rdo_posses":"Отряды","nav_rdo_posses_free_roam":"Отряды и свободный режим","nav_rdo_progress":"Прогресс","nav_rdo_progression":"Прогресс","nav_rdo_rank_unlocks":"Открываемые предметы","nav_rdo_roles":"Роли","nav_rdo_specialist_roles":"Роли","nav_rdo_story_missions":"Сюжетные задания","nav_rdo_support":"Поддержка","nav_rdr2_accomplishments":"Достижения","nav_rdr2_artwork":"Иллюстрации","nav_rdr2_catalogue":"Каталог","nav_rdr2_challenges":"Испытания","nav_rdr2_chapters":"Главы","nav_rdr2_character":"Игрок","nav_rdr2_compendium":"Справочник","nav_rdr2_cta_buy_now":"Купить","nav_rdr2_explore":"Об игре","nav_rdr2_gallery":"Галерея","nav_rdr2_locations":"Места на карте","nav_rdr2_media":"Медиаматериалы","nav_rdr2_music":"Музыка","nav_rdr2_online":"Сетевая игра","nav_rdr2_overview":"Описание","nav_rdr2_progress":"Прогресс","nav_rdr2_stats":"Статистика","nav_rdr2_support":"Поддержка","nav_rdr2_van_der_linde_gang":"Банда Ван дер Линде","nav_rdr2_videos":"Видеоролики","nav_rdr2_weaponry":"Оружие","nav_rdr2_wildlife":"Животные","nav_rdr_cta_buy_now":"Купить","nav_rockstargames_external_link":"Внешний адрес","nav_rockstargames_home":"Главная страница Rockstar Games","nav_rockstargames_logo":"Нажмите, чтобы открыть меню","nav_rsg_community_guidelines":"Правила сообщества","nav_rsg_downloads":"Загрузки","nav_rsg_games":"Игры","nav_rsg_newswire":"Новостная лента","nav_rsg_store":"Магазин","nav_rsg_support":"Поддержка","nav_rsg_videos":"Видеоролики","nav_search_error_too_short":"Слишком короткий поисковый запрос. Минимальное число символов в запросе – {count}.","nav_search_error_too_short_invalid_chars":"Поисковый запрос содержит некорректные символы ({invalidChars}). Удалите их и попробуйте еще раз.","nav_support_dashboard":"Панель управления","nav_support_home":"Главная страница","nav_support_service_status":"Состояние серверов","nav_support_submit_ticket":"Оставить запрос","nav_thewarriors_cta_buy_now":"Купить","nav_undeadnightmare_buy_now":"Купить","nav_undeadnightmare_discover":"Об игре","nav_undeadnightmare_gallery":"Галерея","nav_undeadnightmare_info":"Информация","nav_undeadnightmare_media":"Медиаматериалы","nav_undeadnightmare_news":"Новости","nav_undeadnightmare_ps3_digital":"PS3 – цифровая версия","nav_undeadnightmare_specs":"Системные требования","nav_undeadnightmare_suport":"Поддержка","nav_undeadnightmare_videos":"Видеоролики","nav_undeadnightmare_xbox360_digital":"Xbox 360 – цифровая версия","nav_view_all_games":"Показать все","nofications_new":"Новые уведомления","quick_access_title":"Rockstar Games","sc_link_account":"Учетная запись","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать и разглашать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_legal":"Юридическая информация","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","search_action":"Поиск","search_close_button":"Закрыть поиск","search_disabled_aria_label":"Поиск по текущему запросу уже был выполнен. Введите новый запрос.","search_open_button":"Открыть поиск","search_placeholder":"Искать в Rockstar Games...","search_target_aria_label":"Искать в разделе: {target}","search_target_community":"Сообщество","search_target_crews":"Банды","search_target_games":"Игры","search_target_jobs":"Дела","search_target_posts":"Сообщения","search_target_users":"Пользователи","search_target_videos":"Видеоролики"},"zh-CN":{"accessibility_skip_button":"跳过菜单","avatar_menu_close":"关闭玩家菜单","avatar_menu_open":"打开玩家菜单","avatarmenu_logout":"登出","avatarmenu_selectlanguage":"选择一种语言","avatarmenu_signin":"登录","avatarmenu_signup":"注册","banner_rockstargames_collapsed_legal_cta_aria_label":"折叠式横幅内容","banner_rockstargames_collapsed_legal_cta_label":"了解更多","banner_rockstargames_collapsed_legal_text":"我们的法律条款将于 2024 年 2 月 28 日变更。","banner_rockstargames_gift_cta":"在 GTA 在线模式中获取一辆免费跑车","banner_rockstargames_gift_text":"即日起至 3 月 18 日，可免费领取一辆奥北 8F 尾随者","games_menu_featured":"精选游戏","games_menu_gta_online":"Grand Theft Auto 在线模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"游戏","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 在线模式","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"查看全部","nav_avatarmenu_title":"头像菜单","nav_bully_Overview":"支持","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"马上购买","nav_bully_game_overview":"发现","nav_bully_videos":"视频","nav_careers_careers_on_linkedin":"通过 LinkedIn 应聘","nav_careers_contact_us":"联系我们","nav_careers_home":"主页","nav_careers_openings":"空缺职位","nav_cta_get_launcher":"获取 Launcher","nav_gta3_cta_buy_now":"马上购买","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"马上购买","nav_gta_trilogy_gta3":"GTA 3","nav_gta_trilogy_gtasa":"GTA:San Andreas","nav_gta_trilogy_gtavc":"GTA:Vice City","nav_gta_trilogy_overview":"概况","nav_gta_trilogy_support":"支持","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"马上购买","nav_gtaiv_overview":"发现","nav_gtaiv_support":"支持","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_cta_buy_now":"马上购买","nav_gtaiveflc_overview":"概况","nav_gtaiveflc_support":"支持","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"浏览所有帮会","nav_gtao_career_progress":"职业进度","nav_gtao_checklist":"清单","nav_gtao_community":"社区","nav_gtao_community_series":"社区系列","nav_gtao_crews":"帮会","nav_gtao_crews_create":"创建帮会","nav_gtao_cta_buy_now":"马上购买","nav_gtao_discover":"发现","nav_gtao_emblem_editor":"徽章编辑器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 在线模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"浏览所有差事","nav_gtao_jobs_playlists":"游玩清单","nav_gtao_license_plate_creator":"车牌制作器","nav_gtao_missions":"任务","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的帮会","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"概况","nav_gtao_photos":"照片","nav_gtao_prix_luxury_real_estate":"普利克斯奢华房地产","nav_gtao_stats":"统计数据","nav_gtao_story":"故事","nav_gtao_support":"支持","nav_gtao_twitch_drops":"Twitch Drops","nav_gtao_videos":"视频","nav_gtasanandreas_cta_buy_now":"马上购买","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清单","nav_gtav_community":"社区","nav_gtav_community_series":"社区系列","nav_gtav_create_crew":"创建帮会","nav_gtav_crews":"帮会","nav_gtav_crews_browse_all":"浏览所有帮会","nav_gtav_cta_buy_now":"马上购买","nav_gtav_discover":"发现","nav_gtav_emblem_editor":"徽章编辑器","nav_gtav_gta_online":"GTA 在线模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"浏览所有差事","nav_gtav_licence_plate_creator":"车牌制作器","nav_gtav_missions":"任务","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的帮会","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"概况","nav_gtav_photos":"照片","nav_gtav_playlists":"游玩清单","nav_gtav_stats":"统计数据","nav_gtav_story":"故事","nav_gtav_support":"支持","nav_gtav_videos":"视频","nav_gtavc_cta_buy_now":"马上购买","nav_gtavc_discover":"发现","nav_gtavcs_discover":"发现","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"收集警徽","nav_lanoire_case_tracker":"案件纪录","nav_lanoire_checklist":"清单","nav_lanoire_cta_buy_now":"马上购买","nav_lanoire_official_site":"官方网站","nav_lanoire_overview":"概况","nav_lanoire_pc_console":"PC/主机","nav_lanoire_progress":"进度","nav_lanoire_stats":"统计数据","nav_lanoire_support":"支持","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"关闭菜单","nav_mobilemenu_open":"打开菜单","nav_mobilemenu_title":"导航菜单","nav_more_dropdown":"更多内容","nav_mp3_accomplishments":"成就","nav_mp3_career":"职业生涯","nav_mp3_chapters":"章节","nav_mp3_checklist":"清单","nav_mp3_checkpoint_challenge":"检查点挑战","nav_mp3_crews":"帮会","nav_mp3_cta_buy_now":"马上购买","nav_mp3_featured":"精选","nav_mp3_grinds":"挑战","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人游戏","nav_mp3_news":"新闻","nav_mp3_ny_minute":"纽约一分钟","nav_mp3_official_site":"官方网站","nav_mp3_overview":"概况","nav_mp3_progress":"进度","nav_mp3_score_attack":"分数挑战","nav_mp3_singleplayer":"单人游戏","nav_mp3_specifications":"配置","nav_mp3_support":"支持","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新窗口中打开链接）","nav_quick_access_games":"游戏","nav_quick_access_home":"主页","nav_quick_access_newswire":"新闻专线","nav_rdo_accomplishments":"成就","nav_rdo_awards":"奖章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目录","nav_rdo_club_rewards":"俱乐部奖励","nav_rdo_community":"社区","nav_rdo_competitive_series":"竞技系列","nav_rdo_cta_buy_now":"马上购买","nav_rdo_customization":"自定义","nav_rdo_explore":"探索","nav_rdo_getting_started":"新手上路","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"概况","nav_rdo_photos":"照片","nav_rdo_posses":"团队","nav_rdo_posses_free_roam":"团队和自由模式","nav_rdo_progress":"进度","nav_rdo_progression":"进程","nav_rdo_rank_unlocks":"等级解锁","nav_rdo_roles":"职业","nav_rdo_specialist_roles":"专家职业","nav_rdo_story_missions":"故事任务","nav_rdo_support":"支持","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"艺术作品","nav_rdr2_catalogue":"目录","nav_rdr2_challenges":"挑战","nav_rdr2_chapters":"章节","nav_rdr2_character":"角色","nav_rdr2_compendium":"生涯","nav_rdr2_cta_buy_now":"马上购买","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相册","nav_rdr2_locations":"地点","nav_rdr2_media":"媒体","nav_rdr2_music":"音乐","nav_rdr2_online":"在线模式","nav_rdr2_overview":"概况","nav_rdr2_progress":"进度","nav_rdr2_stats":"统计数据","nav_rdr2_support":"支持","nav_rdr2_van_der_linde_gang":"范德林德帮","nav_rdr2_videos":"视频","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生动物","nav_rdr_cta_buy_now":"马上购买","nav_rockstargames_external_link":"外部","nav_rockstargames_home":"Rockstar Games 主页","nav_rockstargames_logo":"点击打开菜单","nav_rsg_community_guidelines":"社区指南","nav_rsg_downloads":"下载","nav_rsg_games":"游戏","nav_rsg_newswire":"新闻专线","nav_rsg_store":"商店","nav_rsg_support":"支持","nav_rsg_videos":"视频","nav_search_error_too_short":"您的搜索词条太短。词条长度必须至少为 {count} 个字符。","nav_search_error_too_short_invalid_chars":"您的搜索词条包含无效字符（{invalidChars}）。请删除这些无效字符并重试。","nav_support_dashboard":"个人中心","nav_support_home":"主页","nav_support_service_status":"服务状态","nav_support_submit_ticket":"提交请求","nav_thewarriors_cta_buy_now":"马上购买","nav_undeadnightmare_buy_now":"马上购买","nav_undeadnightmare_discover":"发现","nav_undeadnightmare_gallery":"相册","nav_undeadnightmare_info":"信息","nav_undeadnightmare_media":"媒体","nav_undeadnightmare_news":"新闻","nav_undeadnightmare_ps3_digital":"PS3 - 数字版","nav_undeadnightmare_specs":"配置","nav_undeadnightmare_suport":"支持","nav_undeadnightmare_videos":"视频","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 数字版","nav_view_all_games":"查看全部","nofications_new":"新通知","quick_access_title":"Rockstar Games","sc_link_account":"账户","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售或分享我的个人信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_legal":"法律声明","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","search_action":"搜索","search_close_button":"关闭搜索","search_disabled_aria_label":"已搜索当前词条。请输入一个新的词条。","search_open_button":"打开搜索","search_placeholder":"搜索 Rockstar Games……","search_target_aria_label":"搜索 {target}","search_target_community":"社区","search_target_crews":"帮会","search_target_games":"游戏","search_target_jobs":"差事","search_target_posts":"帖子","search_target_users":"用户","search_target_videos":"视频"},"zh-TW":{"accessibility_skip_button":"跳過選單","avatar_menu_close":"關閉玩家選單","avatar_menu_open":"開啟玩家選單","avatarmenu_logout":"登出","avatarmenu_selectlanguage":"選擇語言","avatarmenu_signin":"登入","avatarmenu_signup":"註冊","banner_rockstargames_collapsed_legal_cta_aria_label":"關閉橫幅內容","banner_rockstargames_collapsed_legal_cta_label":"了解更多","banner_rockstargames_collapsed_legal_text":"我們的法律聲明條款於 2024 年 2 月 28 日進行變更。","banner_rockstargames_gift_cta":"在 GTA 線上模式免費取得一輛跑車","banner_rockstargames_gift_text":"即日起至 3 月 18 日止，免費領取一輛奧北 8F 尾流王者。","games_menu_featured":"精選遊戲","games_menu_gta_online":"Grand Theft Auto 線上模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"遊戲","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 線上模式","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"檢視全部","nav_avatarmenu_title":"虛擬人偶選單","nav_bully_Overview":"支援","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"馬上購買","nav_bully_game_overview":"探索","nav_bully_videos":"影片","nav_careers_careers_on_linkedin":"LinkedIn 上的工作機會","nav_careers_contact_us":"聯絡我們","nav_careers_home":"首頁","nav_careers_openings":"工作機會","nav_cta_get_launcher":"取得 Launcher","nav_gta3_cta_buy_now":"馬上購買","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"馬上購買","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA:San Andreas","nav_gta_trilogy_gtavc":"GTA:Vice City","nav_gta_trilogy_overview":"總覽","nav_gta_trilogy_support":"支援","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"馬上購買","nav_gtaiv_overview":"探索","nav_gtaiv_support":"支援","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_cta_buy_now":"馬上購買","nav_gtaiveflc_overview":"總覽","nav_gtaiveflc_support":"支援","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"瀏覽全部幫會","nav_gtao_career_progress":"生涯進度","nav_gtao_checklist":"清單","nav_gtao_community":"社群","nav_gtao_community_series":"社群系列賽","nav_gtao_crews":"幫會","nav_gtao_crews_create":"建立幫會","nav_gtao_cta_buy_now":"馬上購買","nav_gtao_discover":"探索","nav_gtao_emblem_editor":"徽記編輯器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 線上模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"瀏覽全部差事","nav_gtao_jobs_playlists":"遊玩清單","nav_gtao_license_plate_creator":"車牌製作器","nav_gtao_missions":"任務","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的幫會","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"總覽","nav_gtao_photos":"相片","nav_gtao_prix_luxury_real_estate":"碧林豪華地產","nav_gtao_stats":"統計資料","nav_gtao_story":"故事","nav_gtao_support":"支援","nav_gtao_twitch_drops":"Twitch 掉寶","nav_gtao_videos":"影片","nav_gtasanandreas_cta_buy_now":"馬上購買","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清單","nav_gtav_community":"社群","nav_gtav_community_series":"社群系列賽","nav_gtav_create_crew":"建立幫會","nav_gtav_crews":"幫會","nav_gtav_crews_browse_all":"瀏覽全部幫會","nav_gtav_cta_buy_now":"馬上購買","nav_gtav_discover":"探索","nav_gtav_emblem_editor":"徽記編輯器","nav_gtav_gta_online":"GTA 線上模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"瀏覽全部差事","nav_gtav_licence_plate_creator":"車牌製作器","nav_gtav_missions":"任務","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的幫會","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"總覽","nav_gtav_photos":"相片","nav_gtav_playlists":"遊玩清單","nav_gtav_stats":"統計資料","nav_gtav_story":"故事","nav_gtav_support":"支援","nav_gtav_videos":"影片","nav_gtavc_cta_buy_now":"馬上購買","nav_gtavc_discover":"探索","nav_gtavcs_discover":"探索","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"尋找警徽","nav_lanoire_case_tracker":"案件追蹤器","nav_lanoire_checklist":"清單","nav_lanoire_cta_buy_now":"馬上購買","nav_lanoire_official_site":"官方網站","nav_lanoire_overview":"總覽","nav_lanoire_pc_console":"PC/遊戲主機","nav_lanoire_progress":"進度","nav_lanoire_stats":"統計資料","nav_lanoire_support":"支援","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"關閉選單","nav_mobilemenu_open":"開啟選單","nav_mobilemenu_title":"導覽選單","nav_more_dropdown":"更多","nav_mp3_accomplishments":"成就","nav_mp3_career":"生涯","nav_mp3_chapters":"章節","nav_mp3_checklist":"清單","nav_mp3_checkpoint_challenge":"檢查點挑戰","nav_mp3_crews":"幫會","nav_mp3_cta_buy_now":"馬上購買","nav_mp3_featured":"精選","nav_mp3_grinds":"挑戰","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人遊戲","nav_mp3_news":"新聞","nav_mp3_ny_minute":"分秒必爭","nav_mp3_official_site":"官方網站","nav_mp3_overview":"總覽","nav_mp3_progress":"進度","nav_mp3_score_attack":"奪取高分","nav_mp3_singleplayer":"單人遊戲","nav_mp3_specifications":"規格","nav_mp3_support":"支援","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新視窗開啟連結）","nav_quick_access_games":"遊戲","nav_quick_access_home":"首頁","nav_quick_access_newswire":"新聞放送","nav_rdo_accomplishments":"成就","nav_rdo_awards":"獎章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目錄","nav_rdo_club_rewards":"俱樂部獎勵","nav_rdo_community":"社群","nav_rdo_competitive_series":"競爭系列賽","nav_rdo_cta_buy_now":"馬上購買","nav_rdo_customization":"自訂","nav_rdo_explore":"探索","nav_rdo_getting_started":"準備開始","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"總覽","nav_rdo_photos":"相片","nav_rdo_posses":"武裝隊","nav_rdo_posses_free_roam":"武裝隊與浪跡模式","nav_rdo_progress":"進度","nav_rdo_progression":"發展","nav_rdo_rank_unlocks":"等級解鎖","nav_rdo_roles":"角色職業","nav_rdo_specialist_roles":"專家角色職業","nav_rdo_story_missions":"故事任務","nav_rdo_support":"支援","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"插圖","nav_rdr2_catalogue":"目錄","nav_rdr2_challenges":"挑戰","nav_rdr2_chapters":"章節","nav_rdr2_character":"角色","nav_rdr2_compendium":"圖鑑","nav_rdr2_cta_buy_now":"馬上購買","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相冊","nav_rdr2_locations":"地點","nav_rdr2_media":"媒體","nav_rdr2_music":"音樂","nav_rdr2_online":"線上模式","nav_rdr2_overview":"總覽","nav_rdr2_progress":"進度","nav_rdr2_stats":"統計資料","nav_rdr2_support":"支援","nav_rdr2_van_der_linde_gang":"范特林幫派","nav_rdr2_videos":"影片","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rdr_cta_buy_now":"馬上購買","nav_rockstargames_external_link":"外部","nav_rockstargames_home":"Rockstar Games 首頁","nav_rockstargames_logo":"點擊以開啟選單","nav_rsg_community_guidelines":"社群守則","nav_rsg_downloads":"下載","nav_rsg_games":"遊戲","nav_rsg_newswire":"新聞放送","nav_rsg_store":"商店","nav_rsg_support":"支援","nav_rsg_videos":"影片","nav_search_error_too_short":"您的搜尋字詞太短。搜尋字詞必須至少有 {count} 個字元。","nav_search_error_too_short_invalid_chars":"您的搜尋字詞含有無效字元（{invalidChars}）。請移除後再試一次。","nav_support_dashboard":"我的設定畫面","nav_support_home":"首頁","nav_support_service_status":"服務狀態","nav_support_submit_ticket":"提交請求","nav_thewarriors_cta_buy_now":"馬上購買","nav_undeadnightmare_buy_now":"馬上購買","nav_undeadnightmare_discover":"探索","nav_undeadnightmare_gallery":"相冊","nav_undeadnightmare_info":"資訊","nav_undeadnightmare_media":"媒體","nav_undeadnightmare_news":"新聞","nav_undeadnightmare_ps3_digital":"PS3：數位版","nav_undeadnightmare_specs":"規格","nav_undeadnightmare_suport":"支援","nav_undeadnightmare_videos":"影片","nav_undeadnightmare_xbox360_digital":"Xbox 360：數位版","nav_view_all_games":"檢視全部","nofications_new":"新通知","quick_access_title":"Rockstar Games","sc_link_account":"帳戶","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售或分享我的個人資訊","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_legal":"法律聲明","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","search_action":"搜尋","search_close_button":"關閉搜尋","search_disabled_aria_label":"目前的查詢已完成搜尋。請輸入新的查詢。","search_open_button":"開啟搜尋","search_placeholder":"搜尋 Rockstar Games……","search_target_aria_label":"搜尋「{target}」","search_target_community":"社群","search_target_crews":"幫會","search_target_games":"遊戲","search_target_jobs":"差事","search_target_posts":"貼文","search_target_users":"使用者","search_target_videos":"影片"}}'),
        la = (a, e, t, n) => [{
          text: a.formatMessage(c.sc_link_account),
          target: "_self",
          dataTestId: "accountButton",
          type: "nav-dropdown",
          gaText: c.sc_link_account.defaultMessage,
          children: [{
            text: a.formatMessage(c.sc_link_settings),
            location: {
              domain: _.C.socialClub,
              path: "/settings"
            },
            target: "_self",
            gaText: c.sc_link_settings.defaultMessage,
            dataTestId: "settingsLink"
          }, {
            text: a.formatMessage(c.sc_link_view_my_profile),
            location: {
              domain: t,
              path: ""
            },
            target: "_self",
            gaText: c.sc_link_view_my_profile.defaultMessage,
            dataTestId: "viewMyProfileLink"
          }, {
            text: a.formatMessage(c.sc_link_game_activation),
            location: {
              domain: _.C.socialClub,
              path: "/activate"
            },
            target: "_self",
            gaText: c.sc_link_game_activation.defaultMessage,
            dataTestId: "gameActivationLink"
          }]
        }, {
          text: a.formatMessage(c.sc_link_notifications),
          location: {
            domain: _.C.socialClub,
            path: "/notifications"
          },
          target: "_self",
          hasNotifications: n,
          gaText: c.sc_link_notifications.defaultMessage,
          dataTestId: "notificationsLink"
        }, {
          text: a.formatMessage(c.sc_link_crews),
          location: {
            domain: _.C.socialClub,
            path: `/member/${e}/crews`
          },
          target: "_self",
          gaText: c.sc_link_crews.defaultMessage,
          dataTestId: "crewsLink"
        }, {
          text: a.formatMessage(c.sc_link_friends),
          target: "_self",
          dataTestId: "friendsButton",
          type: "nav-dropdown",
          gaText: c.sc_link_friends.defaultMessage,
          children: [{
            text: a.formatMessage(c.sc_link_my_friends),
            location: {
              domain: _.C.socialClub,
              path: `/member/${e}/friends`
            },
            target: "_self",
            gaText: c.sc_link_my_friends.defaultMessage,
            dataTestId: "myFriendsLink"
          }, {
            text: a.formatMessage(c.sc_link_import_friends),
            location: {
              domain: _.C.socialClub,
              path: "/friends/import"
            },
            target: "_self",
            gaText: c.sc_link_import_friends.defaultMessage,
            dataTestId: "importFriendsLink"
          }, {
            text: a.formatMessage(c.sc_link_find_friends),
            location: {
              domain: _.C.socialClub,
              path: "/members"
            },
            target: "_self",
            gaText: c.sc_link_import_friends.defaultMessage,
            dataTestId: "findFriendsLink"
          }]
        }],
        ca = a => ({
          text: a.formatMessage(c.sc_link_help),
          target: "_self",
          gaText: c.sc_link_help.defaultMessage,
          dataTestId: "helpButton",
          type: "nav-dropdown",
          children: [{
            text: a.formatMessage(c.sc_link_support),
            location: {
              domain: _.C.support,
              path: "/"
            },
            target: "_self",
            gaText: c.sc_link_support.defaultMessage,
            dataTestId: "supportLink"
          }, {
            text: a.formatMessage(c.sc_link_legal),
            location: {
              domain: _.C.www,
              path: "/legal"
            },
            target: "_self",
            gaText: c.sc_link_legal.defaultMessage,
            dataTestId: "legalLink"
          }, {
            text: a.formatMessage(c.sc_link_privacy_policy),
            location: {
              domain: _.C.www,
              path: "/privacy"
            },
            target: "_self",
            gaText: c.sc_link_privacy_policy.defaultMessage,
            dataTestId: "privacyPolicyLink"
          }, {
            text: a.formatMessage(c.sc_link_cookies_policy),
            location: {
              domain: _.C.www,
              path: "/cookies"
            },
            target: "_self",
            gaText: c.sc_link_cookies_policy.defaultMessage,
            dataTestId: "cookiesPolicyLink"
          }, {
            type: "nav-no-link",
            text: a.formatMessage(c.sc_link_cookies_settings),
            onClickCallback: a => {
              a.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            gaText: c.sc_link_cookies_settings.defaultMessage,
            dataTestId: "cookiesSettingsLink"
          }, {
            text: a.formatMessage(c.sc_link_do_not_sell_my_information),
            location: {
              domain: _.C.www,
              path: "/ccpa"
            },
            target: "_self",
            gaText: c.sc_link_do_not_sell_my_information.defaultMessage,
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var da = t(4572),
        ga = t.n(da),
        va = t(32654),
        ma = t(19292),
        pa = t(95966);
      const ua = {
        img: "rockstargames-modules-core-headerd87037fda2ea106061c7a614036a89df",
        imgContentful: "rockstargames-modules-core-headerb9f3c994ce8a97ac6530cf0a85e5abe0",
        wide: "rockstargames-modules-core-headerdc444c089b89129c0a39bc61845d531f"
      };
      (0, pa.importAll)(t(86751));
      const ha = ({
          isWideCard: a = !1,
          size: e = 640,
          title: n,
          titleSlug: s,
          inGlobalNav: _ = !1
        }) => {
          const {
            isMobile: i
          } = (0, pa.useWindowResize)(), l = (0, pa.useLocale)(), c = (0, r.useMemo)(() => {
            let n = "";
            return a && (n = i ? t(16044)(`./${s}/mobile/${l}.jpg`) : t(51048)(`./${s}/desktop/${l}.jpg`)), n || (n = t(39294)(`./${s}.jpg`), n += `?im=Resize=${e}`), n
          }, [i, s]), [d] = (0, pa.usePreloadImg)(c);
          let g = c;
          return (0, o.jsx)("div", {
            role: "img",
            "aria-label": n,
            style: {
              backgroundImage: `url(${g})`,
              borderRadius: _ ? "unset" : ""
            },
            className: [ua.img, d ? ua.startAnimation : "", a ? ua.wide : ""].join(" ")
          })
        },
        ba = ({
          to: a,
          target: e,
          className: t,
          onNavigate: n,
          onClick: s,
          reloadDocument: r,
          children: _,
          ...i
        }) => {
          const l = a?.startsWith("http");
          return (0, o.jsx)("a", {
            href: a,
            className: t,
            onClick: e => {
              s?.(e), l || r || (n ? (e.preventDefault(), n(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: e,
            ...i,
            children: _
          })
        },
        fa = ({
          title: a,
          titleSlug: e,
          path: t,
          onNavigate: n,
          dataTestId: s,
          onClick: r,
          ..._
        }) => {
          const i = {
            ..._,
            className: "_1d7cd9q1"
          };
          return (0, o.jsx)("div", {
            className: "_1d7cd9q0",
            children: (0, o.jsx)(ba, {
              to: t,
              "aria-label": a,
              onNavigate: n,
              onClick: r,
              "data-testid": s,
              ...i,
              children: (0, o.jsx)(ha, {
                title: a,
                titleSlug: e,
                inGlobalNav: !0
              })
            })
          }, a)
        },
        wa = (0, l.defineMessages)({
          games_menu_item: {
            id: "games_menu_item",
            description: "Global navigation, Games Menu - Menu Item label in main nav",
            defaultMessage: "Games"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            description: "Global navigation, Games Menu - Title for games menu",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            description: "Global navigation, Games Menu - View All link",
            defaultMessage: "View All"
          },
          games_menu_vi: {
            id: "games_menu_vi",
            description: "Global navigation, Games Menu Games - Grand Theft Auto VI",
            defaultMessage: "Grand Theft Auto VI"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            description: "Global navigation, Games Menu Games - Grand Theft Auto V",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            description: "Global navigation, Games Menu Games - Grand Theft Auto Online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            description: "Global navigation, Games Menu Games - Grand Theft Auto: The Trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            description: "Global navigation, Games Menu Games - Red Dead Redemption 2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr: {
            id: "games_menu_rdr",
            description: "Global navigation, Games Menu Games - Red Dead Redemption",
            defaultMessage: "Red Dead Redemption"
          }
        }),
        ya = a => ({
          viewAllLocation: {
            path: "/games"
          },
          games: [{
            titleSlug: "VI",
            text: a.formatMessage(wa.games_menu_vi),
            gaText: "Grand Theft Auto VI",
            path: "/VI",
            useLocale: !0,
            externalRoute: !0,
            dataTestId: "VI"
          }, {
            titleSlug: "gta-v",
            text: a.formatMessage(wa.games_menu_gta_v),
            gaText: "Grand Theft Auto V",
            path: "/gta-v",
            dataTestId: "gtav"
          }, {
            titleSlug: "gta-online",
            text: a.formatMessage(wa.games_menu_gta_online),
            gaText: "Grand Theft Auto Online",
            path: "/gta-online",
            dataTestId: "gtao"
          }, {
            titleSlug: "reddeadredemption2",
            text: a.formatMessage(wa.games_menu_rdr_2),
            gaText: "Red Dead Redemption 2",
            path: "/reddeadredemption2",
            dataTestId: "rdr2"
          }, {
            titleSlug: "reddeadredemption",
            text: a.formatMessage(wa.games_menu_rdr),
            gaText: "Red Dead Redemption",
            path: "/reddeadredemption",
            dataTestId: "rdr"
          }]
        });
      var ka = t(9046),
        xa = t(74406),
        Ma = t(91633),
        Ca = t(87927),
        Ta = t(96369),
        ja = "_1bo9ltzh",
        Ga = (0, Ta.c)({
          defaultClassName: "_1bo9ltz1",
          variantClassNames: {
            visibility: {
              visible: "_1bo9ltz2",
              hidden: "_1bo9ltz3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Aa = (0, Ta.c)({
          defaultClassName: "_1bo9ltzi",
          variantClassNames: {
            context: {
              mainMenu: "_1bo9ltzj",
              mobileMenu: "_1bo9ltzk",
              avatarMenu: "_1bo9ltzl",
              quickMenu: "_1bo9ltzm",
              subMenu: "_1bo9ltzn",
              nestedMenu: "_1bo9ltzo"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sa = "_1bo9ltzf",
        Ia = "_1bo9ltzg",
        La = t(21222);
      const za = {
          desktop: "rockstargames-modules-core-headerf1fc26697d7f376112d0fcd256b22a9a",
          mobile: "rockstargames-modules-core-headerd46e4a60f402edcf62521fefd6a9289f",
          pillBtn: "rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939",
          selected: "rockstargames-modules-core-headerade3ff1f5041701c0a98cb7198ece826"
        },
        Pa = ({
          showOn: a,
          ...e
        }) => (0, o.jsx)(La.Slot, {
          className: a ? za[a] : "",
          ...e
        });
      var Ra = t(90058),
        Na = t(63582),
        Va = t(24780),
        Oa = t(63694);
      t(79952);
      const Da = (0, l.defineMessages)({
          nav_rockstargames_home: {
            id: "nav_rockstargames_home",
            description: "Global navigation, Rockstar Games Home",
            defaultMessage: "Rockstar Games Home"
          },
          nav_rockstargames_logo: {
            id: "nav_rockstargames_logo",
            description: "Global navigation, Rockstar Games Logo that opens the Quick Access Menu",
            defaultMessage: "Click to open menu"
          },
          nav_rockstargames_external_link: {
            id: "nav_rockstargames_external_link",
            description: "Label for an external link.",
            defaultMessage: "External"
          },
          nav_mobilemenu_open: {
            id: "nav_mobilemenu_open",
            description: "Global navigation, Hamburger menu opens the Mobile Menu",
            defaultMessage: "Open menu"
          },
          nav_mobilemenu_close: {
            id: "nav_mobilemenu_close",
            description: "Global navigation, Hamburger menu closes the Mobile Menu",
            defaultMessage: "Close menu"
          },
          nav_mobilemenu_title: {
            id: "nav_mobilemenu_title",
            description: "Mobile Menu, Accessible title for the mobile menu",
            defaultMessage: "Navigation menu"
          },
          nav_avatarmenu_title: {
            id: "nav_avatarmenu_title",
            description: "Avatar Menu, Accessible title for the avatar menu",
            defaultMessage: "Avatar menu"
          },
          search_action: {
            id: "search_action",
            description: "Global navigation search, Search action used on buttons and aria-labels",
            defaultMessage: "Search"
          },
          search_open_button: {
            id: "search_open_button",
            description: "Global navigation search, Button label for opening search input",
            defaultMessage: "Open Search"
          },
          search_close_button: {
            id: "search_close_button",
            description: "Global navigation search, Button label for closing search input",
            defaultMessage: "Close Search"
          },
          search_placeholder: {
            id: "search_placeholder",
            description: "Global navigation search, Placeholder text within search input",
            defaultMessage: "Search Rockstar Games..."
          },
          search_target_aria_label: {
            id: "search_target_aria_label",
            description: 'Global navigation search, Search Target (aria label). Formatted: "Search Games", "Search Community", etc',
            defaultMessage: "Search {target}"
          },
          search_disabled_aria_label: {
            id: "search_disabled_aria_label",
            description: "Global navigation search, label when icon button is disabled",
            defaultMessage: "Already searched current query. Please enter a new query."
          },
          nav_quick_access_home: {
            id: "nav_quick_access_home",
            description: "Global navigation Quick Access, Home text link",
            defaultMessage: "Home"
          },
          nav_quick_access_games: {
            id: "nav_quick_access_games",
            description: "Global navigation Quick Access, Games text link",
            defaultMessage: "Games"
          },
          nav_quick_access_newswire: {
            id: "nav_quick_access_newswire",
            description: "Global navigation Quick Access, Newswire text link",
            defaultMessage: "Newswire"
          },
          nav_more_dropdown: {
            id: "nav_more_dropdown",
            description: "Global navigation More, Overflow for small screens More text link",
            defaultMessage: "More"
          },
          quick_access_title: {
            id: "quick_access_title",
            description: "The Rockstar Games title for quick access menu.",
            defaultMessage: "Rockstar Games"
          },
          nav_opens_in_new_window: {
            id: "nav_opens_in_new_window",
            description: "Message for A11Y to describe when a link is opened in a new window",
            defaultMessage: "{text} (Link opens in new window)"
          },
          accessibility_skip_button: {
            id: "accessibility_skip_button",
            description: "Message for A11Y asking the user if they want to skip the navigation and go straight to the content.",
            defaultMessage: "Skip the Menu"
          },
          avatar_menu_open: {
            id: "avatar_menu_open",
            description: "Global navigation player menu, Button label for opening search input",
            defaultMessage: "Open Player Menu"
          },
          avatar_menu_close: {
            id: "avatar_menu_close",
            description: "Global navigation player menu, Button label for closing search input",
            defaultMessage: "Close Player Menu"
          }
        }),
        Ba = () => {
          const a = (0, r.useRef)(null);
          return (0, o.jsx)("button", {
            ref: a,
            className: "rockstargames-modules-core-headerc95fa2303ee2096feb04a8cd9d2a5a4b",
            onClick: () => {
              const e = document.querySelector(".siteHeaderContainer"),
                t = window.__spatialNavigation__;
              if (e && t) {
                t.enableExperimentalAPIs(!0);
                const n = t.findCandidates(e, "down", {
                  mode: "all"
                }).filter(t => !e.contains(t) && a.current !== t);
                n.length > 0 && n[0].focus()
              }
            },
            children: (0, o.jsx)(l.FormattedMessage, {
              ...Da.accessibility_skip_button
            })
          })
        };
      var Ea = "--global-navigation-color";
      const qa = ({
          children: a
        }) => (0, o.jsx)("header", {
          className: ga()("aahbt55", "aahbt57"),
          children: a
        }),
        Fa = (0, r.createContext)({
          brand: void 0,
          isNavHidden: !1,
          containerRef: null,
          navContentRef: null,
          mainMenuOpened: !1,
          avatarMenuOpened: !1,
          setForceBackground: () => {},
          setAvatarMenuOpened: () => {},
          setMainMenuOpened: () => {}
        }),
        Ja = (0, l.withIntl)(({
          children: a,
          brand: e,
          mode: t = "default",
          navColorTheme: n = "dark",
          dynamicSlideStyles: s = {},
          forceSolidBackground: _ = !1
        }) => {
          const [i, c] = (0, r.useState)(!1), [d, g] = (0, r.useState)(!0), [v, m] = (0, r.useState)(!1), [p, u] = (0, r.useState)(!1), [h, b] = (0, r.useState)(!1), f = (0, r.useRef)(null), w = (0, r.useRef)(null), [y, k] = (0, r.useState)(null), [{
            iso: x
          }] = (0, l.getLocale)(), [M, C] = (0, r.useState)(_);
          (0, r.useEffect)(() => {
            let a = window.scrollY;
            const e = () => {
                const e = window.scrollY > 140,
                  t = window.scrollY > a;
                c(e && t), a = window.scrollY
              },
              t = () => {
                g(0 === window.scrollY)
              };
            return window.addEventListener("scroll", e), window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", e), window.removeEventListener("scroll", t)
            }
          }, []), (0, r.useEffect)(() => {
            const a = "data-show-more-content";
            i ? document.body.setAttribute(a, "") : document.body.removeAttribute(a)
          }, [i]), (0, r.useEffect)(() => {
            m(!0)
          }, []), (0, r.useEffect)(() => {
            const a = a => {
              c(a.detail.isHidden)
            };
            return window.addEventListener("header:hideNav", a), () => {
              window.removeEventListener("header:hideNav", a)
            }
          }, []);
          const T = !d || _ || M ? "dark" : n;
          return (0, o.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            style: s,
            children: (0, o.jsx)("div", {
              ref: k,
              children: y && (0, o.jsx)(Ca.NP, {
                colorScheme: T,
                defaultColorScheme: T,
                defaultContrastMode: "normal",
                defaultPlatformScale: "desktop",
                container: y,
                locale: x,
                children: v && (0, o.jsx)(Fa.Provider, {
                  value: {
                    brand: e,
                    isNavHidden: i,
                    containerRef: f,
                    navContentRef: w,
                    setForceBackground: C,
                    avatarMenuOpened: p,
                    setAvatarMenuOpened: u,
                    mainMenuOpened: h,
                    setMainMenuOpened: b
                  },
                  children: (0, o.jsxs)("div", {
                    className: ga()("aahbt51", "aahbt50"),
                    ref: f,
                    lang: x,
                    "data-scroll-top": d,
                    "data-color-mode": t,
                    "data-theme": T,
                    "data-force-background": _ || M,
                    children: [(0, o.jsx)(Ba, {}), (0, o.jsx)("div", {
                      className: "aahbt52"
                    }), (0, o.jsx)("div", {
                      ref: w,
                      className: "aahbt54",
                      "data-ishidden": i,
                      "data-testid": "globalnav__container",
                      children: a
                    })]
                  })
                })
              })
            })
          })
        }, ia),
        Ha = {
          quickFade: {
            duration: .1
          },
          staggerFade: {
            ease: "easeOut",
            duration: .4
          },
          springOpen: {
            type: "spring",
            stiffness: 300,
            damping: 35
          },
          springClose: {
            type: "spring",
            stiffness: 400,
            damping: 40
          },
          hamburgerOpen: {
            type: "spring",
            duration: .6,
            bounce: 0
          },
          hamburgerClose: {
            type: "spring",
            duration: .4,
            bounce: 0
          }
        },
        Wa = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        };
      var Ua = "_1u9a93bd";
      const Ka = (0, r.createContext)({
          openedNav: ""
        }),
        $a = ({
          children: a
        }) => {
          const [e, t] = (0, r.useState)("");
          return (0, o.jsx)(Ka.Provider, {
            value: {
              openedNav: e
            },
            children: (0, o.jsx)(ka.Root, {
              value: e,
              onValueChange: t,
              children: (0, o.jsx)(ka.List, {
                className: "_1u9a93b1",
                children: a
              })
            })
          })
        },
        Ya = (0, r.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        Qa = ({
          children: a
        }) => {
          const {
            contrastMode: e
          } = (0, Ca.DP)(), t = (0, l.useIntl)(), [n, s] = (0, r.useState)(!1), [_, i] = (0, r.useState)(!1), [c, d] = (0, r.useState)(!1), {
            brand: g,
            setForceBackground: v
          } = (0, r.useContext)(Fa);
          let m = "var(--global-navigation-height)";
          const p = Number("1024px".replace("px", ""));
          m = "var(--_1np1w6j0)", (0, r.useEffect)(() => {
            n && v(!0)
          }, [n]), (0, r.useEffect)(() => {
            const a = a => {
              const e = a?.target;
              n && e.innerWidth >= p && h()
            };
            return window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, [n]);
          const u = {
              show: {
                height: "100dvh",
                paddingBottom: n && g ? "var(--_1np1w6j0)" : "",
                transition: {
                  ...Ha.hamburgerOpen,
                  delay: .2,
                  staggerChildren: .15
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: Ha.hamburgerClose
              }
            },
            h = () => {
              s(!n), i(!1)
            };
          return (0, o.jsx)(Ya.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                s(!1)
              },
              setHasQuickMenu: d
            },
            children: (0, o.jsxs)(Va.Root, {
              open: n,
              onOpenChange: s,
              children: [(0, o.jsx)(Pa, {
                showOn: "mobile",
                children: (0, o.jsx)(Za, {
                  onClick: h,
                  isMenuOpen: n
                })
              }), (0, o.jsx)(Na.AnimatePresence, {
                onExitComplete: () => v(!1),
                children: n && (0, o.jsx)(Pa, {
                  showOn: "mobile",
                  children: (0, o.jsxs)(Na.motion.div, {
                    className: "_1u9a93be",
                    variants: u,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, o.jsx)(Va.Overlay, {
                      className: "_1u9a93ba"
                    }), (0, o.jsx)(Va.Content, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => s(!1),
                      children: (0, o.jsxs)(Na.motion.div, {
                        className: ga()((0, Ma.m)("dark", e), "_1u9a93b4", "_1u9a93b7"),
                        variants: u,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, o.jsxs)(Oa.VisuallyHidden, {
                          children: [(0, o.jsx)(Va.Title, {
                            children: t.formatMessage(Da.nav_mobilemenu_title)
                          }), (0, o.jsx)(Va.Description, {
                            children: t.formatMessage(Da.nav_mobilemenu_title)
                          })]
                        }), (0, o.jsx)("div", {
                          className: ga()(_ ? "_1u9a93b9" : "", "_1u9a93b6"),
                          children: (0, o.jsx)(Na.motion.div, {
                            className: ga()("_1u9a93b0", c ? "_1u9a93b8" : ""),
                            children: r.Children.map(a, a => (0, o.jsx)(Na.motion.div, {
                              variants: Wa,
                              transition: Ha.staggerFade,
                              children: a
                            }))
                          })
                        })]
                      })
                    })]
                  })
                })
              })]
            })
          })
        },
        Za = ({
          className: a,
          isMenuOpen: e,
          ...t
        }) => {
          const n = (0, l.useIntl)();
          return (0, o.jsx)("div", {
            className: ga()("_1u9a93bb", a),
            children: (0, o.jsxs)(Va.Trigger, {
              title: n.formatMessage(e ? Da.nav_mobilemenu_close : Da.nav_mobilemenu_open),
              type: "button",
              className: "_1u9a93bc",
              "data-testid": "hamburgerNav",
              ...t,
              children: [(0, o.jsx)("span", {
                className: Ua,
                "data-opened": e
              }), (0, o.jsx)("span", {
                className: Ua,
                "data-opened": e
              }), (0, o.jsx)("span", {
                className: Ua,
                "data-opened": e
              })]
            })
          })
        },
        Xa = (...a) => {
          const e = a.filter(Boolean);
          return e.length <= 1 ? e[0] || null : function(a) {
            for (const t of e) "function" == typeof t ? t(a) : t && (t.current = a)
          }
        };
      var ae = t(42638),
        ee = t(61339),
        te = t(2918),
        ne = t(34902);
      const se = ({
        children: a,
        className: e,
        ...t
      }) => {
        const {
          containerRef: n
        } = (0, r.useContext)(Fa);
        return (0, o.jsx)(ne.Root, {
          className: ga()("rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563", e),
          container: n?.current,
          ...t,
          children: a
        })
      };
      var oe = "brbzxq7",
        re = "brbzxq8";
      const _e = (0, r.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        ie = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        le = {
          open: {
            height: "auto",
            width: "100%",
            opacity: 1,
            marginBottom: "revert-layer",
            display: "block"
          },
          closed: {
            height: 0,
            width: "100%",
            opacity: 0,
            marginBottom: "auto",
            transitionEnd: {
              display: "none"
            }
          }
        },
        ce = {
          open: {
            transform: "translateY(0%)",
            display: "block"
          },
          closed: {
            transform: "translateY(100%)",
            transitionEnd: {
              display: "none"
            }
          }
        },
        de = ({
          children: a,
          className: e
        }) => (0, o.jsx)("div", {
          className: ga()("brbzxq1", e),
          children: a
        }),
        ge = ({
          avatarIconUrl: a,
          nickname: e,
          isLoggedIn: n,
          children: s,
          onOpenChange: _
        }) => {
          const i = (0, l.useIntl)(),
            c = t(10046),
            [d, g] = (0, r.useState)(!1),
            [v, m] = (0, r.useState)(!1),
            [p, u] = (0, r.useState)(["open"]),
            {
              isNavHidden: h,
              setAvatarMenuOpened: b,
              mainMenuOpened: f,
              setMainMenuOpened: w
            } = (0, r.useContext)(Fa),
            {
              data: y,
              loggedIn: k
            } = (0, te.useRockstarUser)(),
            {
              track: x
            } = (0, te.useGtmTrack)(),
            [M, C] = (0, r.useState)(!1),
            {
              contrastMode: T
            } = (0, Ca.DP)(),
            j = a => {
              const e = ["open", ...a.filter(a => "open" !== a)];
              u(e)
            },
            G = () => {
              g(!1), m(!1)
            };
          return (0, r.useEffect)(() => {
            h && G()
          }, [h]), (0, r.useEffect)(() => {
            y && k && !M && y?.accountSynced && (C(!0), x({
              event: "account_synced"
            }))
          }, [y?.accountSynced, k]), (0, r.useEffect)(() => {
            const a = d || v;
            a && f && w(!1), b(a)
          }, [d, v, f]), (0, o.jsxs)(_e.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: p,
              closeAvatarMenu: G
            },
            children: [(0, o.jsx)(ae.Root, {
              open: d,
              onOpenChange: a => {
                _?.(a), g(a)
              },
              children: (0, o.jsx)(Pa, {
                showOn: "desktop",
                children: (0, o.jsxs)(de, {
                  children: [(0, o.jsx)(ae.Trigger, {
                    asChild: !0,
                    children: (0, o.jsx)(ma.IconButton, {
                      size: "SM",
                      label: i.formatMessage(d ? Da.avatar_menu_close : Da.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: oe,
                      "aria-label": i.formatMessage(d ? Da.avatar_menu_close : Da.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": n,
                      children: a && (0, o.jsx)("img", {
                        className: re,
                        src: a || c,
                        alt: e
                      })
                    })
                  }), (0, o.jsx)(Na.AnimatePresence, {
                    children: d && (0, o.jsx)(ae.Content, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: a => a.preventDefault(),
                      className: (0, Ma.m)("dark", T),
                      children: (0, o.jsx)(Na.motion.div, {
                        variants: ie,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, o.jsx)(ee.Root, {
                          type: "multiple",
                          value: p,
                          onValueChange: j,
                          children: (0, o.jsx)(Be, {
                            className: "brbzxq2 _1dn7zm50",
                            children: s
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, o.jsx)(Va.Root, {
              open: v,
              onOpenChange: a => {
                _?.(a), m(a)
              },
              children: (0, o.jsx)(Pa, {
                showOn: "mobile",
                children: (0, o.jsxs)(de, {
                  children: [(0, o.jsx)(Va.Trigger, {
                    className: oe,
                    "aria-label": i.formatMessage(v ? Da.avatar_menu_close : Da.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": n,
                    children: (0, o.jsx)(ma.IconButton, {
                      size: "SM",
                      label: i.formatMessage(d ? Da.avatar_menu_close : Da.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: oe,
                      "aria-label": i.formatMessage(d ? Da.avatar_menu_close : Da.avatar_menu_open),
                      children: a && (0, o.jsx)("img", {
                        className: re,
                        src: a || c
                      })
                    })
                  }), (0, o.jsx)(Na.AnimatePresence, {
                    children: v && (0, o.jsx)(se, {
                      asChild: !0,
                      children: (0, o.jsxs)(Va.Content, {
                        forceMount: !0,
                        className: (0, Ma.m)("dark", T),
                        children: [(0, o.jsxs)(Oa.VisuallyHidden, {
                          children: [(0, o.jsx)(Va.Title, {
                            children: i.formatMessage(Da.nav_avatarmenu_title)
                          }), (0, o.jsx)(Va.Description, {
                            children: i.formatMessage(Da.nav_avatarmenu_title)
                          })]
                        }), (0, o.jsxs)(Na.motion.div, {
                          variants: ce,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: "brbzxq3",
                          children: [(0, o.jsx)(Va.Close, {
                            className: "brbzxq5",
                            "aria-label": i.formatMessage(Da.avatar_menu_close),
                            children: (0, o.jsx)("div", {
                              className: "brbzxq6"
                            })
                          }), (0, o.jsx)(ee.Root, {
                            type: "multiple",
                            value: p,
                            onValueChange: j,
                            children: (0, o.jsx)(Be, {
                              className: "brbzxq4 _1dn7zm50",
                              children: s
                            })
                          })]
                        })]
                      })
                    })
                  })]
                })
              })
            })]
          })
        },
        ve = (0, r.createContext)({
          avatarMenuItemId: ""
        }),
        me = ({
          children: a,
          value: e
        }) => {
          const t = (0, r.useId)();
          return (0, o.jsx)(ve.Provider, {
            value: {
              avatarMenuItemId: e || t
            },
            children: (0, o.jsx)(ee.Item, {
              value: e || t,
              className: "brbzxq9",
              children: a
            })
          })
        },
        pe = ({
          children: a,
          ...e
        }) => (0, o.jsx)(ee.Header, {
          asChild: !0,
          children: (0, o.jsx)("li", {
            className: "brbzxq0",
            children: (0, o.jsx)(ee.Trigger, {
              className: "brbzxqa",
              ...e,
              children: a
            })
          })
        }),
        ue = ({
          children: a,
          ...e
        }) => (0, o.jsx)(ee.Header, {
          style: {
            margin: 0
          },
          children: (0, o.jsxs)(ee.Trigger, {
            className: "brbzxqb",
            "data-testid": "header-language-selector-button",
            ...e,
            children: [a, (0, o.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
              className: "brbzxqc",
              alt: ""
            })]
          })
        }),
        he = ({
          children: a,
          ...e
        }) => {
          const {
            avatarMenuOpenItems: t
          } = (0, r.useContext)(_e), {
            avatarMenuItemId: n
          } = (0, r.useContext)(ve), s = t.indexOf(n) >= 0;
          return (0, o.jsx)(ee.Content, {
            forceMount: !0,
            asChild: !0,
            ...e,
            children: (0, o.jsx)(Na.motion.div, {
              variants: le,
              initial: "closed",
              animate: s ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: a
            })
          })
        },
        be = ({
          children: a,
          ...e
        }) => (0, o.jsx)("div", {
          className: "brbzxqd",
          ...e,
          children: a
        }),
        fe = (0, r.createContext)({
          inQuickMenu: !1
        }),
        we = ({
          children: a
        }) => {
          const {
            contrastMode: e
          } = (0, Ca.DP)(), {
            inMobileMenu: t,
            setHasQuickMenu: n
          } = (0, r.useContext)(Ya), s = {
            hidden: {
              opacity: 0,
              y: "100%",
              transition: Ha.hamburgerClose
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                ...Ha.hamburgerOpen,
                staggerChildren: .15,
                delay: .8 * Ha.hamburgerOpen.duration,
                delayChildren: .15
              }
            }
          }, _ = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: Ha.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: Ha.staggerFade
            }
          }, i = ga()((0, Ma.m)("dark", e), "_1wsl7ud0");
          return (0, r.useEffect)(() => (n?.(!0), () => {
            n?.(!1)
          }), []), t ? (0, o.jsx)(fe.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, o.jsx)(ka.Root, {
              asChild: !0,
              children: (0, o.jsx)(Na.motion.div, {
                variants: s,
                className: i,
                children: r.Children.map(a, a => (0, o.jsx)(Na.motion.li, {
                  variants: _,
                  className: "_1wsl7ud1",
                  children: a
                }))
              })
            })
          }) : (0, o.jsx)(fe.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, o.jsx)(ka.Root, {
              asChild: !0,
              children: (0, o.jsx)("div", {
                className: i,
                children: a
              })
            })
          })
        },
        ye = a => {
          a.preventDefault()
        },
        ke = (0, r.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: a => {}
        }),
        xe = (0, r.createContext)({
          isHidden: !1
        }),
        Me = ({
          children: a
        }) => {
          const e = (0, l.useIntl)(),
            [t, n] = (0, r.useState)(""),
            [s, _] = (0, r.useState)(a),
            [i, c] = (0, r.useState)([]),
            d = (0, r.useRef)(null),
            g = (0, r.useRef)(null),
            {
              isNavHidden: v,
              mainMenuOpened: m,
              avatarMenuOpened: p,
              setMainMenuOpened: u
            } = (0, r.useContext)(Fa),
            {
              inAvatarMenu: h
            } = (0, r.useContext)(_e),
            b = (0, r.useCallback)(() => {
              const e = g.current;
              if (!e) return;
              const {
                children: t
              } = e;
              let n = 0;
              const s = Array.from(t).map((a, e) => {
                  const t = a.getBoundingClientRect().top;
                  return 0 === e && (n = t), t
                }),
                o = s.filter(a => a !== n).length,
                i = s.findIndex(a => a > n);
              let l = i;
              if (i > 0 && (l = i - 2), o) {
                const e = [],
                  t = [];
                r.Children.forEach(a, (a, n) => {
                  n < l ? e.push(a) : t.push(a)
                }), e && _(e), t && c(t)
              } else _(a), c([])
            }, [a, g?.current]);
          (0, r.useEffect)(() => {
            const a = new ResizeObserver(b);
            return g?.current && a.observe(g.current), () => {
              g?.current && a.unobserve(g.current)
            }
          }, [a, g?.current]), (0, r.useEffect)(() => {
            n("")
          }, [v]), (0, r.useEffect)(() => {
            const a = () => n("");
            return window.addEventListener("scroll", a), () => {
              window.removeEventListener("scroll", a)
            }
          }, []), (0, r.useEffect)(() => {
            m || "" === t || n("")
          }, [m]), (0, r.useEffect)(() => {
            u("" !== t)
          }, [t, p, m, h]);
          const f = Ga({
              visibility: "visible"
            }),
            w = Ga({
              visibility: "hidden"
            });
          return (0, o.jsx)(ke.Provider, {
            value: {
              inMenu: !0,
              openedNav: t,
              setOpenedNav: n
            },
            children: (0, o.jsx)(Pa, {
              showOn: "desktop",
              children: (0, o.jsxs)(ka.Root, {
                className: "_1bo9ltz0",
                value: t,
                onValueChange: n,
                children: [(0, o.jsxs)(Ce, {
                  ref: d,
                  className: f,
                  children: [s, i?.length > 0 && (0, o.jsxs)(je, {
                    children: [(0, o.jsx)(Ge, {
                      "data-testid": "navMore",
                      children: e.formatMessage(Da.nav_more_dropdown)
                    }), (0, o.jsx)(Oe, {
                      children: (0, o.jsx)(Be, {
                        children: (0, o.jsx)(Ce, {
                          children: i
                        })
                      })
                    })]
                  })]
                }), (0, o.jsx)("div", {
                  className: "_1bo9ltz4",
                  children: (0, o.jsx)(Ce, {
                    ref: g,
                    className: w,
                    "aria-hidden": "true",
                    children: (0, o.jsx)(xe.Provider, {
                      value: {
                        isHidden: !0
                      },
                      children: a
                    })
                  })
                })]
              })
            })
          })
        },
        Ce = (0, r.forwardRef)(function({
          children: a,
          className: e,
          ...t
        }, n) {
          return (0, o.jsx)(ka.List, {
            ref: n,
            className: ga()("_1bo9ltze", e),
            ...t,
            children: a
          })
        }),
        Te = (0, r.createContext)({
          value: ""
        }),
        je = (0, r.forwardRef)(function({
          testId: a,
          children: e,
          ...t
        }, n) {
          const {
            depth: s
          } = (0, r.useContext)(De), {
            inMobileMenu: _
          } = (0, r.useContext)(Ya), i = (0, r.useRef)(null), l = `rsm-${(0,xa.useId)()}`, c = "_1bo9ltz5", d = "_1bo9ltz6";
          return (0, o.jsx)(Te.Provider, {
            value: {
              value: l,
              ref: i
            },
            children: (0, o.jsx)(ka.Item, {
              value: l,
              ref: Xa(n, i),
              className: ga()({
                [c]: !0,
                [d]: 1 === s && !_
              }),
              "data-testid": a,
              ...t,
              children: e
            })
          })
        }),
        Ge = a => {
          const {
            children: e
          } = a, {
            inMenu: t
          } = (0, r.useContext)(ke), {
            inAvatarMenu: n
          } = (0, r.useContext)(_e), {
            inQuickMenu: s
          } = (0, r.useContext)(fe), {
            inMobileMenu: _
          } = (0, r.useContext)(Ya), {
            inSubMenu: i,
            depth: l
          } = (0, r.useContext)(De);
          return l > 1 ? (0, o.jsx)(Pe, {
            ...a,
            children: e
          }) : i ? (0, o.jsx)(ze, {
            ...a,
            children: e
          }) : n ? (0, o.jsx)(Ie, {
            ...a,
            children: e
          }) : s ? (0, o.jsx)(Le, {
            ...a,
            children: e
          }) : _ ? (0, o.jsx)(Se, {
            ...a,
            children: e
          }) : t ? (0, o.jsx)(Ae, {
            ...a,
            children: e
          }) : void 0
        },
        Ae = a => {
          const {
            children: e,
            className: t,
            onClick: n,
            ...s
          } = a;
          return (0, o.jsxs)(ka.Trigger, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: n,
            className: ga()(Sa, Aa({
              context: "mainMenu"
            }), t),
            ...s,
            children: [e, (0, o.jsx)(Ra.ChevronDown, {
              label: "",
              className: Ia
            })]
          })
        },
        Se = a => {
          const {
            children: e,
            className: t,
            onClick: n,
            ...s
          } = a;
          return (0, o.jsxs)(ka.Trigger, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: n,
            className: ga()(Sa, Aa({
              context: "mobileMenu"
            }), t),
            ...s,
            children: [e, (0, o.jsx)(Ra.ChevronDown, {
              size: "LG",
              label: "",
              className: Ia
            })]
          })
        },
        Ie = a => {
          const {
            children: e,
            className: t,
            onClick: n,
            ...s
          } = a;
          return (0, o.jsxs)(ka.Trigger, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: n,
            className: ga()(Sa, Aa({
              context: "avatarMenu"
            }), t),
            ...s,
            children: [e, (0, o.jsx)(Ra.ChevronDown, {
              label: "",
              className: Ia
            })]
          })
        },
        Le = a => {
          const {
            children: e,
            className: t,
            onClick: n,
            ...s
          } = a;
          return (0, o.jsxs)(ka.Trigger, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: n,
            className: ga()(Sa, Aa({
              context: "quickMenu"
            }), t),
            ...s,
            children: [e, (0, o.jsx)(Ra.ChevronDown, {
              label: "",
              className: Ia
            })]
          })
        },
        ze = a => {
          const {
            children: e,
            className: t,
            onClick: n,
            ...s
          } = a;
          return (0, o.jsxs)(ka.Trigger, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: n,
            className: ga()(Sa, Aa({
              context: "subMenu"
            }), t),
            ...s,
            children: [e, (0, o.jsx)(Ra.ChevronDown, {
              label: "",
              className: Ia
            })]
          })
        },
        Pe = a => {
          const {
            children: e,
            className: t,
            onClick: n,
            ...s
          } = a;
          return (0, o.jsxs)(ka.Trigger, {
            onPointerMove: ye,
            onPointerLeave: ye,
            onClick: n,
            className: ga()(Sa, Aa({
              context: "nestedMenu"
            }), t),
            ...s,
            children: [e, (0, o.jsx)(Ra.ChevronDown, {
              label: "",
              className: Ia
            })]
          })
        },
        Re = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Ne = {
          open: {
            height: "auto",
            opacity: 1,
            marginBottom: "revert-layer"
          },
          closed: {
            height: 0,
            opacity: 0,
            marginBottom: "auto"
          }
        },
        Ve = {
          enter: {
            opacity: 1,
            zIndex: 101
          },
          exit: {
            opacity: 1,
            zIndex: 100
          }
        },
        Oe = (0, r.forwardRef)(function({
          children: a,
          animationOverride: e,
          ...t
        }, n) {
          const {
            navContentRef: s
          } = (0, r.useContext)(Fa), {
            inSubMenu: _,
            openedNav: i
          } = (0, r.useContext)(De), {
            openedNav: l
          } = (0, r.useContext)(ke), {
            openedNav: c
          } = (0, r.useContext)(Ka), {
            value: d,
            ref: g
          } = (0, r.useContext)(Te), {
            inMobileMenu: v
          } = (0, r.useContext)(Ya), {
            isHidden: m
          } = (0, r.useContext)(xe), {
            inAvatarMenu: p
          } = (0, r.useContext)(_e), u = [i, l, c].includes(d), {
            contrastMode: h
          } = (0, Ca.DP)();
          if (m) return null;
          const b = "_1bo9ltz8 _1dn7zm50 _1bo9ltz7",
            f = "_1bo9ltz9",
            w = "_1bo9ltza",
            y = "_1bo9ltzb";
          return (0, o.jsx)(Na.AnimatePresence, {
            children: u && (0, o.jsx)(ka.Content, {
              ref: n,
              className: ga()((0, Ma.m)("dark", h), {
                [b]: !v,
                [f]: v,
                [w]: _ && !v,
                [y]: p
              }),
              onPointerEnter: ye,
              onPointerLeave: ye,
              onPointerDown: ye,
              onPointerDownOutside: a => {
                _ && a.preventDefault()
              },
              style: {
                top: s?.current?.getBoundingClientRect().height,
                left: g?.current?.getBoundingClientRect().left
              },
              ...t,
              asChild: !0,
              forceMount: !0,
              children: (0, o.jsx)(Na.motion.div, {
                variants: e || _ || v ? Ne : Re,
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: Ha.springOpen,
                className: "_1bo9ltzc",
                children: a
              })
            })
          })
        }),
        De = (0, r.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        Be = (0, r.forwardRef)(function({
          children: a,
          ...e
        }, t) {
          const {
            depth: n
          } = (0, r.useContext)(De), {
            openedNav: s
          } = (0, r.useContext)(Ka), {
            isNavHidden: _
          } = (0, r.useContext)(Fa), [i, l] = (0, r.useState)("");
          (0, r.useEffect)(() => {
            l("")
          }, [s, _]);
          const c = n ? n + 1 : 1;
          return (0, o.jsx)(De.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: i,
              depth: c
            },
            children: (0, o.jsx)(ka.Root, {
              ref: t,
              defaultValue: "",
              value: i,
              onValueChange: a => {
                l(a === i ? "" : a)
              },
              orientation: "vertical",
              className: "_1bo9ltzd",
              "data-depth": c,
              ...e,
              asChild: !0,
              children: (0, o.jsx)(Na.motion.div, {
                variants: Ve,
                animate: "enter",
                initial: "exit",
                exit: "exit",
                transition: Ha.quickFade,
                children: a
              })
            })
          })
        }),
        Ee = (0, r.forwardRef)(function({
          className: a,
          ...e
        }, t) {
          const n = ga()("_1bo9ltzp", a);
          return (0, o.jsx)("img", {
            ref: t,
            className: n,
            ...e
          })
        }),
        qe = ({
          children: a,
          asChild: e,
          className: t,
          onClick: n,
          external: s,
          hasNotification: _,
          ...i
        }) => {
          const l = {
              children: a,
              asChild: e,
              className: t,
              onClick: n,
              external: s,
              ...i
            },
            {
              inMenu: c
            } = (0, r.useContext)(ke),
            {
              inAvatarMenu: d
            } = (0, r.useContext)(_e),
            {
              inQuickMenu: g
            } = (0, r.useContext)(fe),
            {
              inMobileMenu: v
            } = (0, r.useContext)(Ya),
            {
              inSubMenu: m,
              depth: p
            } = (0, r.useContext)(De);
          return p > 1 ? (0, o.jsx)(Ke, {
            ...l,
            children: a
          }) : m ? (0, o.jsx)(We, {
            ...l,
            hasNotification: _,
            children: a
          }) : d ? (0, o.jsx)(Ue, {
            ...l,
            children: a
          }) : g ? (0, o.jsx)(He, {
            ...l,
            children: a
          }) : v ? (0, o.jsx)(Je, {
            ...l,
            children: a
          }) : c ? (0, o.jsx)(Fe, {
            ...l,
            children: a
          }) : void 0
        },
        Fe = (0, r.forwardRef)(function({
          children: a,
          className: e,
          onClick: t,
          external: n,
          asChild: s,
          ..._
        }, i) {
          const c = (0, l.useIntl)(),
            {
              closeAvatarMenu: d
            } = (0, r.useContext)(_e),
            {
              closeMobileMenu: g
            } = (0, r.useContext)(Ya),
            v = s ? La.Slot : "a",
            m = ga()(Aa({
              context: "mainMenu"
            }), e);
          return (0, o.jsx)(ka.Link, {
            onSelect: a => {
              d?.(), g?.(), t?.(a)
            },
            className: m,
            asChild: !0,
            ..._,
            children: (0, o.jsxs)(v, {
              ref: i,
              children: [(0, o.jsx)(La.Slottable, {
                children: a
              }), n && (0, o.jsx)(Ra.ExternalLink, {
                label: c.formatMessage(Da.nav_rockstargames_external_link),
                className: ja
              })]
            })
          })
        }),
        Je = (0, r.forwardRef)(function({
          children: a,
          asChild: e,
          className: t,
          onClick: n,
          external: s,
          ..._
        }, i) {
          const {
            closeAvatarMenu: l
          } = (0, r.useContext)(_e), {
            closeMobileMenu: c
          } = (0, r.useContext)(Ya), d = ga()(Aa({
            context: "mobileMenu"
          }), t), g = e ? La.Slot : "a";
          return (0, o.jsx)(ka.Link, {
            asChild: !0,
            onSelect: a => {
              l?.(), c?.(), n?.(a)
            },
            ..._,
            children: (0, o.jsxs)(g, {
              ref: i,
              className: d,
              children: [(0, o.jsx)(La.Slottable, {
                children: a
              }), s && (0, o.jsx)(Ra.ExternalLink, {
                size: "LG",
                label: "",
                className: ja
              })]
            })
          })
        }),
        He = (0, r.forwardRef)(function({
          children: a,
          asChild: e,
          className: t,
          onClick: n,
          external: s,
          ..._
        }, i) {
          const c = (0, l.useIntl)(),
            {
              closeAvatarMenu: d
            } = (0, r.useContext)(_e),
            {
              closeMobileMenu: g
            } = (0, r.useContext)(Ya),
            v = ga()(Aa({
              context: "quickMenu"
            }), t),
            m = e ? La.Slot : "a";
          return (0, o.jsx)(ka.Link, {
            asChild: !0,
            onSelect: a => {
              d?.(), g?.(), n?.(a)
            },
            ..._,
            children: (0, o.jsxs)(m, {
              ref: i,
              className: v,
              children: [(0, o.jsx)(La.Slottable, {
                children: a
              }), s && (0, o.jsx)(Ra.ExternalLink, {
                label: c.formatMessage(Da.nav_rockstargames_external_link),
                className: ja
              })]
            })
          })
        }),
        We = (0, r.forwardRef)(function({
          children: a,
          asChild: e,
          className: t,
          onClick: n,
          external: s,
          hasNotification: _,
          ...i
        }, c) {
          const d = (0, l.useIntl)(),
            {
              closeAvatarMenu: g
            } = (0, r.useContext)(_e),
            {
              closeMobileMenu: v
            } = (0, r.useContext)(Ya),
            m = ga()(Aa({
              context: "subMenu"
            }), t, _ ? ["_1bo9ltzq"] : null),
            p = e ? La.Slot : "a";
          return (0, o.jsx)(ka.Link, {
            asChild: !0,
            onSelect: a => {
              g?.(), v?.(), n?.(a)
            },
            ...i,
            children: (0, o.jsxs)(p, {
              ref: c,
              className: m,
              children: [(0, o.jsx)(La.Slottable, {
                children: a
              }), s && (0, o.jsx)(Ra.ExternalLink, {
                label: d.formatMessage(Da.nav_rockstargames_external_link),
                className: ja
              })]
            })
          })
        }),
        Ue = (0, r.forwardRef)(function({
          children: a,
          asChild: e,
          className: t,
          onClick: n,
          external: s,
          ..._
        }, i) {
          const c = (0, l.useIntl)(),
            {
              closeAvatarMenu: d
            } = (0, r.useContext)(_e),
            {
              closeMobileMenu: g
            } = (0, r.useContext)(Ya),
            v = ga()(Aa({
              context: "avatarMenu"
            }), t),
            m = e ? La.Slot : "a";
          return (0, o.jsx)(ka.Link, {
            asChild: !0,
            onSelect: a => {
              d?.(), g?.(), n?.(a)
            },
            ..._,
            children: (0, o.jsxs)(m, {
              ref: i,
              className: v,
              children: [(0, o.jsx)(La.Slottable, {
                children: a
              }), s && (0, o.jsx)(Ra.ExternalLink, {
                label: c.formatMessage(Da.nav_rockstargames_external_link),
                className: ja
              })]
            })
          })
        }),
        Ke = (0, r.forwardRef)(function({
          children: a,
          asChild: e,
          className: t,
          onClick: n,
          external: s,
          ..._
        }, i) {
          const c = (0, l.useIntl)(),
            {
              closeAvatarMenu: d
            } = (0, r.useContext)(_e),
            {
              closeMobileMenu: g
            } = (0, r.useContext)(Ya),
            v = ga()(Aa({
              context: "nestedMenu"
            }), t),
            m = e ? La.Slot : "a";
          return (0, o.jsx)(ka.Link, {
            asChild: !0,
            onSelect: a => {
              d?.(), g?.(), n?.(a)
            },
            ..._,
            children: (0, o.jsxs)(m, {
              ref: i,
              className: v,
              children: [(0, o.jsx)(La.Slottable, {
                children: a
              }), s && (0, o.jsx)(Ra.ExternalLink, {
                label: c.formatMessage(Da.nav_rockstargames_external_link),
                className: ja
              })]
            })
          })
        });
      var $e = "_1lj6mra3 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh";
      const Ye = ({
          onNavigate: a,
          onClick: e
        }) => {
          const t = (0, l.useIntl)(),
            n = (0, _.A)(),
            [{
              subdomaincom: s
            }] = (0, l.getLocale)(),
            {
              setForceBackground: i
            } = (0, r.useContext)(Fa),
            {
              setOpenedNav: c
            } = (0, r.useContext)(ke),
            d = s !== l.englishLocale.subdomaincom ? `/${s}` : "",
            g = n.currentSite?.site === _.C.www,
            v = `https://${n.sites[_.C.www]}.rockstargames.com`;
          let m = "";
          m = g ? "" : `${v}${d}`;
          const {
            viewAllLocation: p,
            games: u
          } = (0, r.useMemo)(() => ya(t), [s]);
          return (0, r.useEffect)(() => (i?.(!0), () => {
            i?.(!1)
          }), []), (0, o.jsxs)("div", {
            className: "_1lj6mra1",
            "data-testid": "gamesMenu",
            children: [(0, o.jsxs)("div", {
              className: "_1lj6mra2",
              children: [(0, o.jsx)("div", {
                children: (0, o.jsx)("h2", {
                  className: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
                  children: t.formatMessage(wa.games_menu_featured)
                })
              }), (0, o.jsx)("div", {
                children: (0, o.jsx)(ma.Button, {
                  asChild: !0,
                  appearance: "ghost",
                  size: "MD",
                  iconRight: "ArrowRight",
                  iconRightLabel: t.formatMessage(wa.games_menu_view_all),
                  children: (0, o.jsx)(ba, {
                    className: $e,
                    to: m + p.path,
                    onNavigate: a,
                    onClick: () => c(""),
                    "data-testid": "GamesMenu__viewall",
                    children: t.formatMessage(wa.games_menu_view_all)
                  })
                })
              })]
            }), (0, o.jsx)("div", {
              className: "_1lj6mra4",
              children: u.map(t => {
                return (0, o.jsx)(fa, {
                  titleSlug: t.titleSlug,
                  title: t.text,
                  path: (!g || t.externalRoute ? t.useLocale ? `${v}${d}` : v : "") + t.path,
                  dataTestId: t.dataTestId,
                  onNavigate: a,
                  onClick: (n = t.gaText, s = `Games > ${t.gaText}`, r = (!g || t.externalRoute ? t.useLocale ? `${v}${d}` : v : "") + t.path, () => {
                    e?.(n, s, r)
                  })
                }, t.titleSlug);
                var n, s, r
              })
            })]
          })
        },
        Qe = ({
          onNavigate: a,
          onClick: e,
          dataTestId: t
        }) => {
          const n = (0, l.useIntl)(),
            {
              isHidden: s
            } = (0, r.useContext)(xe),
            {
              inMobileMenu: _
            } = (0, r.useContext)(Ya),
            {
              contrastMode: i
            } = (0, Ca.DP)();
          return _ ? (0, o.jsx)(Ze, {
            onNavigate: a,
            onClick: e
          }) : (0, o.jsxs)(je, {
            children: [(0, o.jsx)(Ge, {
              "data-testid": t,
              children: n.formatMessage(wa.games_menu_item)
            }), (0, o.jsx)(Na.AnimatePresence, {
              children: !s && (0, o.jsx)(Oe, {
                className: ga()((0, Ma.m)("dark", i), "_1lj6mra5"),
                animationOverride: "expandCollapse",
                children: (0, o.jsx)(Ye, {
                  onNavigate: a,
                  onClick: e
                })
              })
            })]
          })
        },
        Ze = ({
          onNavigate: a,
          onClick: e
        }) => {
          const t = (0, l.useIntl)(),
            n = (0, _.A)(),
            {
              windowWidth: s
            } = (0, pa.useWindowResize)(),
            [{
              subdomaincom: i
            }] = (0, l.getLocale)(),
            {
              closeMobileMenu: c
            } = (0, r.useContext)(Ya),
            d = i !== l.englishLocale.subdomaincom ? `/${i}` : "",
            g = n.currentSite?.site === _.C.www,
            v = `https://${n.sites[_.C.www]}.rockstargames.com`;
          let m = "";
          m = g ? "" : `${v}${d}`;
          const {
            viewAllLocation: p,
            games: u
          } = (0, r.useMemo)(() => ya(t), [i]), h = (0, r.useMemo)(() => window?.matchMedia?.("(min-width: 0px) and (max-width: 767.98px)").matches ? 2.25 : 3.5, [s]);
          return (0, o.jsxs)("li", {
            className: "_1lj6mra6",
            "data-testid": "gamesMenu",
            children: [(0, o.jsxs)("div", {
              className: "_1lj6mra7",
              children: [(0, o.jsx)(ma.Label, {
                size: "MD",
                appearance: "bold",
                className: "_1lj6mra8",
                children: t.formatMessage(wa.games_menu_item)
              }), (0, o.jsx)(ma.Button, {
                asChild: !0,
                appearance: "ghost",
                size: "MD",
                iconRight: "ArrowRight",
                iconRightLabel: t.formatMessage(wa.games_menu_view_all),
                children: (0, o.jsx)(ba, {
                  className: $e,
                  to: m + p.path,
                  onNavigate: a,
                  onClick: c,
                  children: t.formatMessage(wa.games_menu_view_all)
                })
              })]
            }), (0, o.jsx)(va.RC, {
              className: "_1lj6mra9",
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: h,
              speed: 700,
              children: u.map(t => {
                return (0, o.jsx)(va.qr, {
                  className: "_1lj6mraa",
                  children: (0, o.jsx)(fa, {
                    titleSlug: t.titleSlug,
                    title: t.text,
                    path: (!g || t.externalRoute ? t.useLocale ? `${v}${d}` : v : "") + t.path,
                    dataTestId: t.dataTestId,
                    onNavigate: a,
                    onClick: (n = t.gaText, s = `Games > ${t.gaText}`, r = (!g || t.externalRoute ? t.useLocale ? `${v}${d}` : v : "") + t.path, () => {
                      e?.(n, s, r), c()
                    })
                  })
                }, t.gaText);
                var n, s, r
              })
            })]
          })
        },
        Xe = Ze,
        at = () => {
          const a = (() => {
            const a = (0, _.A)(),
              [e] = (0, l.getLocale)();
            return (t, n) => {
              if (!t.path) return t.domain;
              const s = [
                  ["username", n]
                ],
                o = ((a, e) => e.filter(([, a]) => Boolean(a)).reduce((a, [e, t]) => a.replaceAll(`{${e}}`, t), a))(t.path, s),
                r = "www" === t.domain && "www" !== a.currentSite?.site ? ((a, e) => {
                  if (!e || e.iso === l.englishLocale.iso) return a;
                  const t = e.subdomaincom;
                  return "/" === a[0] ? t + a : `${t}/${a}`
                })(o, e) : o;
              return t.domain + r
            }
          })();
          return (e, t) => {
            const n = new URLSearchParams(t.params),
              s = t.path?.replace("{term}", e);
            n.forEach((a, t) => {
              "{query}" === a && n.set(t, e)
            });
            const o = n.toString() ? `?${n.toString()}` : "",
              r = {
                domain: t.domain,
                path: s + o
              },
              _ = a(r, "");
            if (_) return _;
            console.error(`No search url could be constructed from ${t.domain} and ${t.path}`)
          }
        },
        et = (0, l.defineMessages)({
          nav_rockstargames_home: {
            id: "nav_rockstargames_home",
            description: "Global navigation, Rockstar Games Home",
            defaultMessage: "Rockstar Games Home"
          },
          nav_rockstargames_logo: {
            id: "nav_rockstargames_logo",
            description: "Global navigation, Rockstar Games Logo that opens the Quick Access Menu",
            defaultMessage: "Click to open menu"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            description: "Global navigation, Games Menu - Title for games menu",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            description: "Global navigation, Games Menu - View All link",
            defaultMessage: "View All"
          },
          games_menu_vi: {
            id: "games_menu_vi",
            description: "Global navigation, Games Menu Games - Grand Theft Auto VI",
            defaultMessage: "Grand Theft Auto VI"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            description: "Global navigation, Games Menu Games - Grand Theft Auto V",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            description: "Global navigation, Games Menu Games - Grand Theft Auto Online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            description: "Global navigation, Games Menu Games - Grand Theft Auto: The Trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            description: "Global navigation, Games Menu Games - Red Dead Redemption 2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr_online: {
            id: "games_menu_rdr_online",
            description: "Global navigation, Games Menu Games - Red Dead Online",
            defaultMessage: "Red Dead Online"
          },
          games_menu_rdr: {
            id: "games_menu_rdr",
            description: "Global navigation, Games Menu Games - Red Dead Redemption",
            defaultMessage: "Red Dead Redemption"
          },
          search_action: {
            id: "search_action",
            description: "Global navigation search, Search action used on buttons and aria-labels",
            defaultMessage: "Search"
          },
          search_open_button: {
            id: "search_open_button",
            description: "Global navigation search, Button label for opening search input",
            defaultMessage: "Open Search"
          },
          search_close_button: {
            id: "search_close_button",
            description: "Global navigation search, Button label for closing search input",
            defaultMessage: "Close Search"
          },
          search_placeholder: {
            id: "search_placeholder",
            description: "Global navigation search, Placeholder text within search input",
            defaultMessage: "Search Rockstar Games..."
          },
          search_target_aria_label: {
            id: "search_target_aria_label",
            description: 'Global navigation search, Search Target (aria label). Formatted: "Search Games", "Search Community", etc',
            defaultMessage: "Search {target}"
          },
          nav_view_all_games: {
            id: "nav_view_all_games",
            description: "Global navigation, View All games text link",
            defaultMessage: "View All"
          },
          nav_more_dropdown: {
            id: "nav_more_dropdown",
            description: "Global navigation More, Overflow for small screens More text link",
            defaultMessage: "More"
          },
          quick_access_title: {
            id: "quick_access_title",
            description: "The Rockstar Games title for quick access menu.",
            defaultMessage: "Rockstar Games"
          },
          nav_search_error_too_short: {
            id: "nav_search_error_too_short",
            description: "Message under search box telling user their query is too short",
            defaultMessage: "Your search query is too short. Queries must be at least {count} characters long."
          },
          nav_search_error_invalid_chars: {
            id: "nav_search_error_too_short_invalid_chars",
            description: "Message under search box telling user their query contains invalid characters",
            defaultMessage: "Your search query contains invalid characters ({invalidChars}). Remove these and try again."
          },
          nav_opens_in_new_window: {
            id: "nav_opens_in_new_window",
            description: "Message for A11Y to describe when a link is opened in a new window",
            defaultMessage: "{text} (Link opens in new window)"
          },
          accessibility_skip_button: {
            id: "accessibility_skip_button",
            description: "Message for A11Y asking the user if they want to skip the navigation and go straight to the content.",
            defaultMessage: "Skip the Menu"
          },
          nav_quick_access_home: {
            id: "nav_quick_access_home",
            description: "Global navigation Quick Access, Home text link",
            defaultMessage: "Home"
          },
          nav_quick_access_games: {
            id: "nav_quick_access_games",
            description: "Global navigation Quick Access, Games text link",
            defaultMessage: "Games"
          },
          nav_quick_access_newswire: {
            id: "nav_quick_access_newswire",
            description: "Global navigation Quick Access, Newswire text link",
            defaultMessage: "Newswire"
          },
          avatarmenu_logout: {
            id: "avatarmenu_logout",
            description: "A link to log out of social club.",
            defaultMessage: "Log Out"
          },
          avatarmenu_signin: {
            id: "avatarmenu_signin",
            description: "A link to log in to social club.",
            defaultMessage: "Sign In"
          },
          avatarmenu_signup: {
            id: "avatarmenu_signup",
            description: "A link to join social club.",
            defaultMessage: "Sign Up"
          },
          avatarmenu_selectlanguage: {
            id: "avatarmenu_selectlanguage",
            description: "A dropdown header for the language selector",
            defaultMessage: "Select a Language"
          }
        }),
        tt = ({
          globalNavLoaderComponent: a,
          globalNavComponent: e,
          locale: t,
          username: i,
          userProfileLink: d,
          hasNotifications: g,
          ...v
        }) => {
          const m = (0, l.useIntl)(),
            p = (0, _.A)(),
            u = ((a, e = "") => {
              const t = (0, _.A)(),
                n = a.subdomaincom,
                s = (a, t) => t?.requiresAuth && !e ? a : [...a, o(t)],
                o = a => {
                  const o = t.currentSite?.site !== _.C.www && a.location?.domain === _.C.www && "en" !== n,
                    r = a.location?.path.replace("{username}", e);
                  return {
                    ...a,
                    ...a.children ? {
                      children: a.children.reduce(s, [])
                    } : {},
                    ...a.targets ? {
                      targets: a.targets.reduce(s, [])
                    } : {},
                    ...a.location ? {
                      location: {
                        ...a.location,
                        path: o && r ? ra(r, n) : r,
                        domain: t?.currentSite ? _a(a.location.domain, t.currentSite.site) : ""
                      }
                    } : {}
                  }
                };
              return a => o(a)
            })(t, i),
            h = at(),
            [b, f] = (0, r.useState)(""),
            w = a,
            y = (a => ({
              targets: [{
                text: a.formatMessage(c.search_target_games),
                gaText: c.search_target_games.defaultMessage,
                tab: "games",
                value: "games",
                type: "",
                location: {
                  domain: _.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "games"
                  }
                },
                searchOptions: sa
              }, {
                text: a.formatMessage(c.search_target_posts),
                gaText: c.search_target_posts.defaultMessage,
                tab: "posts",
                value: "posts",
                type: "",
                location: {
                  domain: _.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "posts"
                  }
                },
                searchOptions: sa
              }, {
                text: a.formatMessage(c.search_target_videos),
                gaText: c.search_target_videos.defaultMessage,
                tab: "videos",
                value: "videos",
                type: "",
                location: {
                  domain: _.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "videos"
                  }
                },
                searchOptions: sa
              }, {
                text: a.formatMessage(c.search_target_community),
                gaText: c.search_target_community.defaultMessage,
                tab: "socialClub",
                value: "socialClub",
                type: "nav-dropdown",
                targets: [{
                  text: a.formatMessage(c.search_target_users),
                  gaText: c.search_target_users.defaultMessage,
                  value: "community-users",
                  type: "",
                  location: {
                    domain: _.C.socialClub,
                    path: "/members/{term}"
                  },
                  searchOptions: sa
                }, {
                  text: a.formatMessage(c.search_target_crews),
                  gaText: c.search_target_crews.defaultMessage,
                  value: "community-crews",
                  type: "",
                  location: {
                    domain: _.C.socialClub,
                    path: "/crews/{term}"
                  },
                  searchOptions: sa
                }, {
                  text: a.formatMessage(c.search_target_jobs),
                  gaText: c.search_target_jobs.defaultMessage,
                  value: "community-jobs",
                  type: "",
                  location: {
                    domain: _.C.socialClub,
                    path: "/jobs/{term}"
                  },
                  searchOptions: sa
                }]
              }]
            }))(m),
            [k, x] = (0, r.useState)(window.innerWidth < 1024),
            {
              rsg: M,
              ...C
            } = n,
            T = Object.values({
              ...C,
              rsg: M
            }).map(a => a(m)),
            j = (0, r.useMemo)(() => {
              const a = p.currentSite?.site,
                e = M(m).links;
              return T.reduce((t, n) => {
                if (!p.currentSite?.site || !n?.appearancePaths?.[p.currentSite.site]) return t;
                const s = ((a, e, t, n) => a && 0 !== a.length || "www" !== t || !n ? a : e)(n.links, e, a, k);
                return [...t, {
                  ...n,
                  appearancePaths: p.currentSite?.site ? n?.appearancePaths?.[p.currentSite.site] : [],
                  links: s.map(u),
                  cta: n.cta && u(n.cta)
                }]
              }, [])
            }, [k, T]),
            G = (0, r.useMemo)(() => ({
              ...y,
              targets: y.targets.map(u)
            }), [y, u]),
            A = (0, r.useMemo)(() => (a => ({
              quickMenuHome: a.formatMessage(et.nav_quick_access_home),
              quickMenuGames: a.formatMessage(et.nav_quick_access_games),
              quickMenuNewswire: a.formatMessage(et.nav_quick_access_newswire),
              avatarMenuSelectLanguage: a.formatMessage(et.avatarmenu_selectlanguage),
              avatarMenuSignIn: a.formatMessage(et.avatarmenu_signin),
              avatarMenuSignUp: a.formatMessage(et.avatarmenu_signup),
              avatarMenuSignOut: a.formatMessage(et.avatarmenu_logout)
            }))(m), []),
            S = (a, e) => {
              let t, n = "";
              const s = new URLSearchParams(a);
              if (new URLSearchParams(e).forEach((a, e) => {
                  const o = s.get(e);
                  "{query}" === a && o ? (t = !0, n = o) : t = o === a && !1 !== t
                }), t) return n
            },
            I = (a, e) => {
              if (!e) return !1;
              const t = a.split(/[/?]+/),
                n = e.split(/[/?]+/);
              if (n.every((a, e) => a === t[e] || "{term}" === a || "" === a)) {
                const a = n.findIndex(a => "{term}" === a);
                if (a) return t[a]
              }
              return ""
            },
            L = (0, r.useCallback)(() => {
              let a, e = "";
              const {
                pathname: t,
                search: n
              } = window.location;
              return G.targets.findIndex(s => {
                if ("" === s.type && s.location) {
                  if (s.location.path && t.startsWith(s.location.path)) {
                    const t = S(n, s.location.params);
                    if (t) return e = t, a = s, !0
                  }
                  if (!s.location.params) {
                    const n = I(t, s.location.path);
                    if (n) return e = n, a = s, !0
                  }
                }
                if ("nav-dropdown" === s.type) {
                  const o = s.targets?.findIndex(s => {
                    if ("" === s.type) {
                      if (s.location.path && t.startsWith(s.location.path)) {
                        const t = S(n, s.location.params);
                        if (t) return e = t, a = s, !0
                      }
                      const o = I(t, s.location.path);
                      if (o) return e = o, a = s, !0
                    }
                    return !1
                  });
                  return Boolean(o) && o >= 0
                }
              }), [e, a]
            }, [G]),
            z = (0, r.useCallback)((a, e) => {
              let t;
              return a.forEach(a => {
                if ("nav-dropdown" === a.type) {
                  const n = z(a.targets, e);
                  n && (t = n)
                } else a.value === e && (t = a)
              }), t
            }, [G]),
            P = (0, r.useCallback)(a => {
              if ("" === a) return !1;
              const e = na?.(a);
              return a.split(/\s+/).every(a => a.length < 3) ? (f(m.formatMessage(et.nav_search_error_too_short, {
                count: 3
              })), !1) : e ? (f(m.formatMessage(et.nav_search_error_invalid_chars, {
                invalidChars: [...new Set(e)].join(", ")
              })), !1) : (f(""), !0)
            }, []),
            R = (0, r.useCallback)((a, e) => {
              if (P(a) && e) {
                const t = z(G.targets, e);
                return t ? h(a, t.location) : null
              }
            }, [G]),
            N = (0, r.useMemo)(() => ({
              loggedInLinks: la(m, i, d, g).map(u),
              helpItem: u(ca(m))
            }), [m, i, d, g]);
          return (0, r.useEffect)(() => {
            const a = () => {
              x(window.innerWidth < 1024)
            };
            return window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, []), (0, o.jsx)(w, {
            navigationData: j,
            locale: t,
            globalNavigationComponent: e,
            searchConfig: G,
            gamesMenuComponent: s,
            avatarMenuData: N,
            onSearch: R,
            getQueryFromUrl: L,
            errorMessage: b,
            localisedStrings: A,
            ...v
          })
        },
        nt = (0, l.withIntl)(({
          globalNavLoaderComponent: a,
          globalNavComponent: e,
          username: t,
          userProfileLink: n,
          hasNotifications: s,
          ...r
        }) => {
          const [_] = (0, l.getLocale)();
          return a ? (0, o.jsx)(tt, {
            globalNavLoaderComponent: a,
            globalNavComponent: e,
            locale: _,
            username: t,
            userProfileLink: n,
            hasNotifications: s,
            ...r
          }) : null
        }, ia),
        st = ({
          children: a
        }) => (0, o.jsx)("div", {
          className: "_1d9rfy60",
          children: a
        });
      var ot = t(64836),
        rt = t(95628);
      const _t = (0, r.forwardRef)(function({
        children: a,
        dataTestId: e,
        onPress: t,
        ...n
      }, s) {
        const {
          inMobileMenu: _,
          closeMobileMenu: i
        } = (0, r.useContext)(Ya), l = (0, rt.Ub)("(min-width: 1024px)"), c = (0, ot.mergeProps)({
          "data-testid": e,
          onPress: a => {
            t?.(a), i()
          },
          appearance: "secondary",
          size: l ? "SM" : "MD",
          className: "_1m011np0"
        }, n);
        return (0, o.jsx)("div", {
          className: _ ? "_1m011np1" : "_1m011np2",
          children: (0, o.jsx)(ma.Button, {
            ref: s,
            fullWidth: _,
            ...c,
            children: a
          })
        })
      });
      var it = t(86683),
        lt = t(79158),
        ct = "_1b6t9rh7",
        dt = "_1b6t9rhl";
      const gt = {
          open: {
            height: "auto",
            overflow: "hidden",
            transition: {
              ...Ha.springClose,
              delay: .15
            }
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: Ha.springClose
          }
        },
        vt = ({
          children: a,
          isSearchPage: e
        }) => {
          const {
            formatMessage: t
          } = (0, l.useIntl)(), {
            isNavHidden: n
          } = (0, r.useContext)(Fa), [s, _] = (0, r.useState)(e || !1), {
            contrastMode: i
          } = (0, Ca.DP)();
          (0, r.useEffect)(() => {
            _(!1)
          }, [n]);
          const c = !n && (e || s);
          return (0, o.jsx)(Pa, {
            showOn: "desktop",
            children: (0, o.jsx)("div", {
              className: "_1b6t9rh0",
              children: (0, o.jsxs)(ae.Root, {
                open: c,
                onOpenChange: _,
                children: [(0, o.jsx)(ae.Trigger, {
                  asChild: !0,
                  children: (0, o.jsx)(ma.IconButton, {
                    icon: "Search",
                    appearance: "ghost",
                    size: "SM",
                    label: t(c ? Da.search_close_button : Da.search_open_button),
                    className: "_1b6t9rhb",
                    "data-testid": "searchToggle"
                  })
                }), (0, o.jsx)(Na.AnimatePresence, {
                  children: c && (0, o.jsx)(it.FocusScope, {
                    loop: !e,
                    children: (0, o.jsx)(ae.Content, {
                      forceMount: !0,
                      sideOffset: 19,
                      children: (0, o.jsx)(Na.motion.div, {
                        initial: "close",
                        animate: "open",
                        exit: "close",
                        variants: gt,
                        "data-testid": "searchBar",
                        className: (0, Ma.m)("dark", i),
                        children: a
                      })
                    })
                  })
                })]
              })
            })
          })
        },
        mt = (0, r.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        pt = (0, r.forwardRef)(function({
          children: a
        }, e) {
          return (0, o.jsx)("div", {
            ref: e,
            className: "_1b6t9rh1",
            children: a
          })
        }),
        ut = (0, r.forwardRef)(function({
          children: a,
          queryMin: e = 0,
          queryMax: t = 100,
          onSearch: n,
          query: s,
          onQueryChange: _,
          target: i,
          onTargetChange: c,
          isSearchPage: d = !1
        }, g) {
          const {
            formatMessage: v
          } = (0, l.useIntl)(), {
            inMobileMenu: m,
            closeMobileMenu: p
          } = (0, r.useContext)(Ya), [u, h] = (0, lt.useControllableState)({
            prop: s,
            onChange: _,
            defaultProp: ""
          }), [b, f] = (0, lt.useControllableState)({
            prop: i,
            onChange: c,
            defaultProp: ""
          }), [w, y] = (0, r.useState)(!1), [k, x] = (0, r.useState)(!1), {
            setForceBackground: M
          } = (0, r.useContext)(Fa);
          (0, r.useEffect)(() => (M(!0), () => {
            M(!1)
          }), []);
          const C = (a, e) => {
              n(a, e, p), x(!0)
            },
            T = {
              inSearchMenu: !0,
              searchTarget: b,
              setSearchTarget: a => {
                f(a), u && u.length >= e && C(u, a)
              },
              onChange: _
            },
            j = (0, r.useMemo)(() => m ? (0, o.jsx)(Na.AnimatePresence, {
              children: w && (0, o.jsx)(Na.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: gt,
                transition: Ha.springOpen,
                "data-testid": "searchBar",
                children: (0, o.jsx)("div", {
                  className: "_1b6t9rh9 _1b6t9rh8",
                  children: a
                })
              })
            }) : (0, o.jsxs)("div", {
              className: "_1b6t9rh8",
              children: [a, !m && !d && (0, o.jsx)("div", {
                className: "_1b6t9rhd",
                children: (0, o.jsx)(ae.Close, {
                  className: "_1b6t9rhe",
                  children: (0, o.jsx)(Ra.X, {
                    size: "MD",
                    className: "_1b6t9rhf",
                    label: v(Da.search_close_button)
                  })
                })
              })]
            }), [m, w, d]);
          return (0, o.jsxs)(mt.Provider, {
            value: T,
            children: [(0, o.jsxs)("div", {
              className: ga()("_1b6t9rh6", {
                [ct]: m
              }),
              "data-testid": "searchBar",
              children: [(0, o.jsx)(ma.IconButton, {
                onClick: () => {
                  C(u, b)
                },
                appearance: "ghost",
                icon: "Search",
                size: "LG",
                label: v(k ? Da.search_disabled_aria_label : Da.search_action)
              }), (0, o.jsx)("div", {
                className: "_1b6t9rhg",
                children: (0, o.jsx)("input", {
                  className: "_1b6t9rhh",
                  type: "textfield",
                  value: u,
                  onChange: a => (a => {
                    h(a), x(!1)
                  })(a.target.value),
                  onKeyUp: a => {
                    "Enter" === a.key && u && b && C(u, b)
                  },
                  onFocus: () => y(!0),
                  placeholder: v(Da.search_placeholder),
                  ref: g,
                  enterKeyHint: "search",
                  maxLength: t,
                  min: e,
                  max: t
                })
              }), m && w && (0, o.jsx)(ma.IconButton, {
                onClick: () => y(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: v(Da.search_close_button)
              })]
            }), j]
          })
        }),
        ht = ({
          children: a
        }) => {
          const e = (0, r.useRef)(null),
            [t, n] = (0, r.useState)(0);
          return (0, r.useEffect)(() => {
            const a = () => {
              e && e.current && n(e.current.scrollLeft / (e.current.scrollWidth - e.current.offsetWidth))
            };
            return e && e.current && e.current.addEventListener("scroll", a), () => {
              e && e.current && e.current.removeEventListener("scroll", a)
            }
          }, [e.current]), (0, o.jsx)("div", {
            children: (0, o.jsx)("div", {
              ref: e,
              className: "_1b6t9rhi",
              children: a
            })
          })
        },
        bt = (0, r.forwardRef)(function({
          children: a,
          value: e,
          title: t,
          active: n,
          hasChevron: s,
          ..._
        }, i) {
          const {
            setSearchTarget: l,
            searchTarget: c
          } = (0, r.useContext)(mt), {
            inSearchTargetDropdown: d,
            setRootSearchTarget: g,
            rootSearchTarget: v
          } = (0, r.useContext)(ft), m = n => {
            l?.(n), d && "string" == typeof a && g({
              key: e,
              title: t
            })
          }, p = n || Boolean(c) && (c === e || c === v.key);
          return d ? (0, o.jsx)("button", {
            ref: i,
            type: "button",
            className: ga()("_1b6t9rhq", {
              [dt]: p
            }),
            onClick: () => m(e),
            value: e,
            ..._,
            children: a
          }) : (0, o.jsx)(ma.Tag.Root, {
            className: "_1b6t9rhj",
            color: p ? "monochrome" : "grey",
            size: "LG",
            background: "static",
            onClick: () => m(e),
            hasBorder: !1,
            ..._,
            asChild: !0,
            children: (0, o.jsxs)("button", {
              type: "button",
              ref: i,
              value: e,
              children: [(0, o.jsx)(ma.Tag.Label, {
                asChild: !0,
                children: (0, o.jsx)(ma.Body, {
                  size: "MD",
                  appearance: "bold",
                  children: a
                })
              }), s && (0, o.jsx)(ma.Tag.Icon, {
                className: "_1b6t9rho",
                label: "",
                icon: "ChevronDown"
              })]
            })
          })
        }),
        ft = (0, r.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        wt = ({
          title: a,
          children: e
        }) => {
          const [t, n] = (0, r.useState)(!1), [s, _] = (0, r.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: i
          } = (0, r.useContext)(mt);
          return (0, r.useEffect)(() => {
            n(!1)
          }, [s]), (0, r.useEffect)(() => {
            i !== s.key && _({
              key: "",
              title: ""
            })
          }, [i]), (0, o.jsxs)(ae.Root, {
            open: t,
            onOpenChange: n,
            children: [(0, o.jsx)(ae.Trigger, {
              asChild: !0,
              children: (0, o.jsx)(bt, {
                value: a,
                title: a,
                active: !!s.key,
                hasChevron: !0,
                children: s.title || a
              })
            }), (0, o.jsx)(ft.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: s,
                setRootSearchTarget: _
              },
              children: (0, o.jsx)(ae.Content, {
                align: "start",
                className: "_1b6t9rhp _1dn7zm50 _1b6t9rhn",
                children: e
              })
            })]
          })
        },
        yt = (0, r.forwardRef)(function({
          errorMessage: a
        }, e) {
          return a && (0, o.jsx)("div", {
            ref: e,
            className: "_1b6t9rh2",
            "aria-live": "polite",
            children: a
          })
        });
      var kt = "_1ffvzhu3",
        xt = "_1ffvzhu4";
      const Mt = () => (0, o.jsx)("div", {
        className: "_1ffvzhu2",
        children: (0, o.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [kt, xt, ""].map((a, e) => (0, o.jsx)("path", {
            className: a,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z",
            fill: "currentcolor"
          }, a + e))
        })
      });
      var Ct = "_635dix6";
      const Tt = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        jt = ({
          quickAccessHidden: a,
          children: e,
          href: t,
          onNavigate: n
        }) => {
          const s = (0, l.useIntl)(),
            [_, i] = (0, r.useState)(!1),
            {
              brand: c,
              isNavHidden: d
            } = (0, r.useContext)(Fa),
            g = t || "/";
          return (0, r.useEffect)(() => {
            i(!1)
          }, [d, a]), (0, o.jsxs)("div", {
            className: "_635dix0",
            children: [(0, o.jsxs)("div", {
              className: "_635dix1",
              children: [!c && (0, o.jsx)(Pa, {
                showOn: "mobile",
                children: (0, o.jsx)(ba, {
                  to: g,
                  "aria-label": s.formatMessage(Da.nav_rockstargames_home),
                  onNavigate: n,
                  className: Ct,
                  children: (0, o.jsx)(Mt, {})
                })
              }), !e && (0, o.jsx)(Pa, {
                showOn: "desktop",
                children: (0, o.jsx)(ba, {
                  to: g,
                  "aria-label": s.formatMessage(Da.nav_rockstargames_home),
                  onNavigate: n,
                  className: Ct,
                  children: (0, o.jsx)(Mt, {})
                })
              }), e && (0, o.jsxs)(ae.Root, {
                open: _,
                onOpenChange: i,
                children: [(0, o.jsx)(Pa, {
                  showOn: "desktop",
                  children: (0, o.jsx)(ae.Trigger, {
                    asChild: !0,
                    children: (0, o.jsx)("button", {
                      type: "button",
                      className: "_635dix5",
                      "aria-label": s.formatMessage(Da.nav_rockstargames_logo),
                      children: (0, o.jsx)(Mt, {})
                    })
                  })
                }), (0, o.jsx)(Na.AnimatePresence, {
                  children: _ && (0, o.jsx)(Pa, {
                    showOn: "desktop",
                    children: (0, o.jsx)(ae.Content, {
                      forceMount: !0,
                      align: "start",
                      sideOffset: 24,
                      children: (0, o.jsx)(Na.motion.div, {
                        className: "_635dix7",
                        variants: Tt,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: e
                      })
                    })
                  })
                })]
              })]
            }), c && (0, o.jsxs)("div", {
              className: "_635dix2",
              children: [(0, o.jsx)(Pa, {
                showOn: "desktop",
                children: (0, o.jsx)("div", {
                  className: "_635dix3"
                })
              }), (0, o.jsx)("div", {
                className: "_635dix4",
                children: c
              })]
            })]
          })
        }
    },
    77321: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    78323: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    79114: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    79258: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48f3ad2d0327e0b1b30934487535181.jpg"
    },
    79795: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    79867: (a, e, t) => {
      "use strict";
      t.d(e, {
        A: () => o,
        C: () => n
      });
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        o = () => {
          let a;
          const {
            location: e
          } = window, t = e.hostname.substring(0, e.hostname.indexOf(".rockstargames.com")), n = s.findIndex(e => Object.entries(e.sites).findIndex(([e, n]) => n === t && (a = {
            site: e,
            subDomain: n
          }, !0)) >= 0), o = s[n >= 0 ? n : 0];
          return a || (a = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: a
          }
        }
    },
    83118: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d748d12cf8cc854121e8be9860ed409.jpg"
    },
    84141: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    84598: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d33532ed9c8c08388d6ab4a0613520aa.jpg"
    },
    84705: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a9ff3cac0e6f01352186a60a37f17a8f.jpg"
    },
    84715: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    84752: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    85256: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    85332: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    85613: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    86751: (a, e, t) => {
      var n = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 13890,
        "./VI/desktop/ru_ru.jpg": 11016,
        "./VI/desktop/zh_hans.jpg": 95732,
        "./VI/desktop/zh_tw.jpg": 65667,
        "./VI/mobile/de_de.jpg": 35996,
        "./VI/mobile/en_us.jpg": 27109,
        "./VI/mobile/es_es.jpg": 79258,
        "./VI/mobile/es_mx.jpg": 36725,
        "./VI/mobile/fr_fr.jpg": 83118,
        "./VI/mobile/it_it.jpg": 34416,
        "./VI/mobile/ja_jp.jpg": 84705,
        "./VI/mobile/ko_kr.jpg": 33055,
        "./VI/mobile/pl_pl.jpg": 37098,
        "./VI/mobile/pt_br.jpg": 84598,
        "./VI/mobile/ru_ru.jpg": 20340,
        "./VI/mobile/zh_hans.jpg": 16264,
        "./VI/mobile/zh_tw.jpg": 6927,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function s(a) {
        var e = o(a);
        return t(e)
      }

      function o(a) {
        if (!t.o(n, a)) {
          var e = new Error("Cannot find module '" + a + "'");
          throw e.code = "MODULE_NOT_FOUND", e
        }
        return n[a]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = o, a.exports = s, s.id = 86751
    },
    89273: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    90377: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    91480: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    93573: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    93668: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04fad38dffabad52092b45f9a3cee88b.jpg"
    },
    95732: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6205f3bd39adb33d23221501f6506dc5.jpg"
    },
    95903: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    96148: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    98754: a => {
      "use strict";
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    }
  }
]);