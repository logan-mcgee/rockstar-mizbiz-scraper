try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8fffcc4d-ea54-4ef6-898b-e5f4c2bb15b4", e._sentryDebugIdIdentifier = "sentry-dbid-8fffcc4d-ea54-4ef6-898b-e5f4c2bb15b4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4518, 9356], {
    1157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    3860: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var n = t(42295);
      const s = ({
        to: e,
        target: a,
        className: t,
        onNavigate: s,
        onClick: r,
        reloadDocument: o,
        children: i,
        ..._
      }) => {
        const c = e?.startsWith("http");
        return (0, n.jsx)("a", {
          href: e,
          className: t,
          onClick: a => {
            r?.(a), c || o || (s ? (a.preventDefault(), s(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
          },
          target: a,
          ..._,
          children: i
        })
      }
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    10046: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    10869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    14724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    24865: (e, a, t) => {
      var n = {
        "./VI/mobile.jpg": 92244
      };

      function s(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = r, e.exports = s, s.id = 24865
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    39294: (e, a, t) => {
      var n = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
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

      function s(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = r, e.exports = s, s.id = 39294
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    53781: (e, a, t) => {
      var n = {
        "./VI/desktop.jpg": 67496
      };

      function s(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = r, e.exports = s, s.id = 53781
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    59414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    59655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    59942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    67496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/372e91ece1e13eda3ec63d6dfc06f7ce.jpg"
    },
    73483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    73534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    73564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    78323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    79114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    79867: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r,
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
        r = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), n = s.findIndex((a => Object.entries(a.sites).findIndex((([a, n]) => n === t && (e = {
            site: a,
            subDomain: n
          }, !0))) >= 0)), r = s[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    84141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    85256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    85332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    85613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    86751: (e, a, t) => {
      var n = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
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

      function s(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = r, e.exports = s, s.id = 86751
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    92244: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f086bb17e0de94d33c4031f30fff704.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    98788: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Actions: () => Ni,
        AvatarMenu: () => ei,
        AvatarMenuLanguageLabel: () => oi,
        AvatarMenuSection: () => ti,
        AvatarMenuSectionContent: () => ri,
        AvatarMenuSectionHeader: () => ni,
        AvatarMenuSectionHeaderDropdown: () => si,
        Breakpoint: () => wo,
        CallToAction: () => zi,
        Header: () => Ao,
        Menu: () => vi,
        MenuContent: () => yi,
        MenuIcon: () => Mi,
        MenuItem: () => pi,
        MenuLink: () => Ci,
        MenuList: () => mi,
        MenuSub: () => xi,
        MenuTrigger: () => hi,
        MobileMenu: () => Vo,
        MobileMenuNav: () => zo,
        NavigationWrapper: () => Li,
        QuickMenu: () => ci,
        Root: () => Lo,
        Search: () => Fi,
        SearchBar: () => Ui,
        SearchContainer: () => Wi,
        SearchError: () => Xi,
        SearchFilters: () => $i,
        SearchTarget: () => Ji,
        SearchTargetDropdown: () => Ki,
        SiteTitle: () => t_,
        default: () => n_
      });
      var n = {};
      t.r(n), t.d(n, {
        beaterator: () => sr,
        bully: () => ir,
        careers: () => _r,
        gta: () => cr,
        gta2: () => lr,
        gta3: () => dr,
        gta4: () => gr,
        gta5: () => vr,
        gtaAdvance: () => mr,
        gtaCtw: () => ur,
        gtaIvEflc: () => pr,
        gtaLcs: () => hr,
        gtaLondon: () => fr,
        gtaOnline: () => br,
        gtaPlus: () => wr,
        gtaSanAndreas: () => yr,
        gtaTrilogy: () => kr,
        gtaVc: () => xr,
        gtaVcs: () => Mr,
        laNoire: () => Cr,
        manhunt: () => Tr,
        manhunt2: () => jr,
        maxPayne: () => Sr,
        maxPayne2: () => Gr,
        maxPayne3: () => Ar,
        midnightclub: () => Ir,
        midnightclub2: () => Pr,
        midnightclub3: () => Lr,
        midnightclubStreetRacing: () => Nr,
        oni: () => Rr,
        readDeadOnline: () => Or,
        redDeadRedemption: () => Dr,
        redDeadRedemption2: () => zr,
        redDeadRedemptionUndeadNightmare: () => Er,
        redDeadRevolver: () => Br,
        rsg: () => Vr,
        skateAndDestroy: () => Fr,
        smugglersRun: () => Hr,
        smugglersRun2: () => Wr,
        smugglersRunWarzones: () => Ur,
        stateOfEmergency: () => qr,
        tableTennis: () => $r,
        theItalianJob: () => Jr,
        theWarriors: () => Yr,
        wildMetal: () => Kr
      });
      var s = {};
      t.r(s), t.d(s, {
        GamesMenu: () => ji,
        GamesMenuItem: () => Si,
        default: () => Ai
      });
      var r = t(42295),
        o = t(81788),
        i = t(2918),
        _ = t(95966),
        c = t(93635),
        l = t(71127);
      class d extends l.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, r.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, r.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const g = JSON.parse('{"de-DE":{"accessibility_skip_button":"Menü verlassen","avatar_menu_close":"Spielermenü schließen","avatar_menu_open":"Spielermenü öffnen","avatarmenu_logout":"Abmelden","avatarmenu_selectlanguage":"Eine Sprache auswählen","avatarmenu_signin":"Anmelden","avatarmenu_signup":"Registrieren","banner_rockstargames_collapsed_legal_cta_aria_label":"Inhalt für eingeklapptes Banner","banner_rockstargames_collapsed_legal_cta_label":"Mehr erfahren","banner_rockstargames_collapsed_legal_text":"Unsere rechtlichen Bedingungen ändern sich am 28. Februar 2024.","banner_rockstargames_gift_cta":"Hol dir einen kostenlosen Sportwagen in GTA Online","banner_rockstargames_gift_text":"Hol dir ab sofort und bis zum 18. März einen kostenlosen Obey 8F Drafter.","games_menu_featured":"Ausgewählte Spiele","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Spiele","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Alle anzeigen","nav_avatarmenu_title":"Avatarmenü","nav_bully_Overview":"Support","nav_bully_accomplishments":"Erfolge","nav_bully_cta_buy_now":"Jetzt kaufen","nav_bully_game_overview":"Entdecken","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Stellenangebote auf LinkedIn","nav_careers_contact_us":"Kontaktiere uns","nav_careers_home":"Startseite","nav_careers_openings":"Stellenangebote","nav_cta_get_launcher":"Launcher herunterladen","nav_gta3_cta_buy_now":"Jetzt kaufen","nav_gta_trilogy_accomplishments":"Erfolge","nav_gta_trilogy_cta_buy_now":"Jetzt kaufen","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Überblick","nav_gta_trilogy_support":"Support","nav_gtaiv_accomplishments":"Erfolge","nav_gtaiv_cta_buy_now":"Jetzt kaufen","nav_gtaiv_overview":"Entdecken","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Erfolge","nav_gtaiveflc_cta_buy_now":"Jetzt kaufen","nav_gtaiveflc_overview":"Überblick","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Erfolge","nav_gtao_browse_crews":"Alle Crews ansehen","nav_gtao_career_progress":"Karrierefortschritt","nav_gtao_checklist":"Checkliste","nav_gtao_community":"Community","nav_gtao_community_series":"Community-Serie","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crew erstellen","nav_gtao_cta_buy_now":"Jetzt kaufen","nav_gtao_discover":"Entdecken","nav_gtao_emblem_editor":"Emblem-Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Alle Jobs ansehen","nav_gtao_jobs_playlists":"Spielelisten","nav_gtao_license_plate_creator":"Nummernschild-Editor","nav_gtao_missions":"Missionen","nav_gtao_my_character":"Mein Charakter","nav_gtao_my_crews":"Meine Crews","nav_gtao_my_jobs":"Meine Jobs","nav_gtao_overview":"Überblick","nav_gtao_photos":"Fotos","nav_gtao_stats":"Statistiken","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_twitch_drops":"Twitch Drops","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Jetzt kaufen","nav_gtav_accomplishments":"Erfolge","nav_gtav_checklist":"Checkliste","nav_gtav_community":"Community","nav_gtav_community_series":"Community-Serie","nav_gtav_create_crew":"Crew erstellen","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Alle Crews ansehen","nav_gtav_cta_buy_now":"Jetzt kaufen","nav_gtav_discover":"Entdecken","nav_gtav_emblem_editor":"Emblem-Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Alle Jobs ansehen","nav_gtav_licence_plate_creator":"Nummernschild-Editor","nav_gtav_missions":"Missionen","nav_gtav_my_character":"Mein Charakter","nav_gtav_my_crews":"Meine Crews","nav_gtav_my_jobs":"Meine Jobs","nav_gtav_overview":"Überblick","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Spielelisten","nav_gtav_stats":"Statistiken","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Jetzt kaufen","nav_gtavc_discover":"Entdecken","nav_gtavcs_discover":"Entdecken","nav_lanoire_accomplishments":"Erfolge","nav_lanoire_badge_pursuit":"Jagd nach Abzeichen","nav_lanoire_case_tracker":"Ermittlungsakten","nav_lanoire_checklist":"Checkliste","nav_lanoire_cta_buy_now":"Jetzt kaufen","nav_lanoire_official_site":"Offizielle Seite","nav_lanoire_overview":"Überblick","nav_lanoire_pc_console":"PC/Konsole","nav_lanoire_progress":"Fortschritt","nav_lanoire_stats":"Statistiken","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Menü schließen","nav_mobilemenu_open":"Menü öffnen","nav_mobilemenu_title":"Navigationsmenü","nav_more_dropdown":"Mehr","nav_mp3_accomplishments":"Erfolge","nav_mp3_career":"Karriere","nav_mp3_chapters":"Kapitel","nav_mp3_checklist":"Checkliste","nav_mp3_checkpoint_challenge":"Kontrollpunkt-Herausforderung","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Jetzt kaufen","nav_mp3_featured":"Vorgestellt","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Bestenlisten","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Neuigkeiten","nav_mp3_ny_minute":"Eine Minute in New York","nav_mp3_official_site":"Offizielle Seite","nav_mp3_overview":"Überblick","nav_mp3_progress":"Fortschritt","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Spezifikationen","nav_mp3_support":"Support","nav_mp3_weapons":"Waffen","nav_opens_in_new_window":"{text} (Link öffnet ein neues Fenster)","nav_quick_access_games":"Spiele","nav_quick_access_home":"Startseite","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Erfolge","nav_rdo_awards":"Auszeichnungen","nav_rdo_benefits":"Vorteile","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Club-Belohnungen","nav_rdo_community":"Community","nav_rdo_competitive_series":"Wettkampf-Serie","nav_rdo_cta_buy_now":"Jetzt kaufen","nav_rdo_customization":"Individualisierung","nav_rdo_explore":"Entdecken","nav_rdo_getting_started":"Erste Schritte","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mein Charakter","nav_rdo_overview":"Überblick","nav_rdo_photos":"Fotos","nav_rdo_posses":"Trupps","nav_rdo_posses_free_roam":"Trupps und Free Roam","nav_rdo_progress":"Fortschritt","nav_rdo_progression":"Fortschritt","nav_rdo_rank_unlocks":"Rang-Freischaltungen","nav_rdo_roles":"Rollen","nav_rdo_specialist_roles":"Spezialrollen","nav_rdo_story_missions":"Storymissionen","nav_rdo_support":"Support","nav_rdr2_accomplishments":"Erfolge","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Herausforderungen","nav_rdr2_chapters":"Kapitel","nav_rdr2_character":"Charakter","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Jetzt kaufen","nav_rdr2_explore":"Entdecken","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Schauplätze","nav_rdr2_media":"Medien","nav_rdr2_music":"Musik","nav_rdr2_online":"Online","nav_rdr2_overview":"Überblick","nav_rdr2_progress":"Fortschritt","nav_rdr2_stats":"Statistiken","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"Die Van-der-Linde-Bande","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Waffen","nav_rdr2_wildlife":"Tierwelt","nav_rdr_cta_buy_now":"Jetzt kaufen","nav_rockstargames_external_link":"Extern","nav_rockstargames_home":"Rockstar-Games-Startseite","nav_rockstargames_logo":"Klicken, um das Menü zu öffnen","nav_rsg_community_guidelines":"Community-Richtlinien","nav_rsg_downloads":"Downloads","nav_rsg_games":"Spiele","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Deine Suchanfrage ist zu kurz. Suchbegriffe müssen mindestens {count} Zeichen lang sein.","nav_search_error_too_short_invalid_chars":"Deine Suchanfrage beinhaltet ungültige Zeichen ({invalidChars}). Bitte entferne diese und versuche es erneut.","nav_support_dashboard":"Meine Übersicht","nav_support_home":"Startseite","nav_support_service_status":"Service-Status","nav_support_submit_ticket":"Eine Anfrage einreichen","nav_thewarriors_cta_buy_now":"Jetzt kaufen","nav_undeadnightmare_buy_now":"Jetzt kaufen","nav_undeadnightmare_discover":"Entdecken","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Medien","nav_undeadnightmare_news":"Neuigkeiten","nav_undeadnightmare_ps3_digital":"PS3 – Digital","nav_undeadnightmare_specs":"Spezifikationen","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 – Digital","nav_view_all_games":"Alle anzeigen","nofications_new":"Neue Benachrichtigungen","quick_access_title":"Rockstar Games","sc_link_account":"Konto","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_legal":"Rechtliches","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzerklärung","sc_link_settings":"Einstellungen","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","search_action":"Suchen","search_close_button":"Suche schließen","search_open_button":"Suche öffnen","search_placeholder":"Rockstar Games durchsuchen …","search_target_aria_label":"Durchsuche {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Spiele","search_target_jobs":"Jobs","search_target_posts":"Beiträge","search_target_users":"Nutzer","search_target_videos":"Videos"},"en-US":{"accessibility_skip_button":"Skip the Menu","avatar_menu_close":"Close Player Menu","avatar_menu_open":"Open Player Menu","avatarmenu_logout":"Log Out","avatarmenu_selectlanguage":"Select a Language","avatarmenu_signin":"Sign In","avatarmenu_signup":"Sign Up","banner_rockstargames_collapsed_legal_cta_aria_label":"Collapsed Banner content","banner_rockstargames_collapsed_legal_cta_label":"Learn More","banner_rockstargames_collapsed_legal_text":"Our legal terms are changing Feb. 28, 2024.","banner_rockstargames_gift_cta":"Get a free Sports Car in GTA Online","banner_rockstargames_gift_text":"Now until March 18, claim a free Obey 8F Drafter.","games_menu_featured":"Featured Games","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Games","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"View All","nav_avatarmenu_title":"Avatar menu","nav_bully_Overview":"Support","nav_bully_accomplishments":"Accomplishments","nav_bully_cta_buy_now":"Buy Now","nav_bully_game_overview":"Discover","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Careers on LinkedIn","nav_careers_contact_us":"Contact us","nav_careers_home":"Home","nav_careers_openings":"Openings","nav_cta_get_launcher":"Get Launcher","nav_gta3_cta_buy_now":"Buy Now","nav_gta_trilogy_accomplishments":"Accomplishments","nav_gta_trilogy_cta_buy_now":"Buy Now","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Overview","nav_gta_trilogy_support":"Support","nav_gtaiv_accomplishments":"Accomplishments","nav_gtaiv_cta_buy_now":"Buy Now","nav_gtaiv_overview":"Discover","nav_gtaiv_support":"Support","nav_gtaiveflc_accomplishments":"Accomplishments","nav_gtaiveflc_cta_buy_now":"Buy Now","nav_gtaiveflc_overview":"Overview","nav_gtaiveflc_support":"Support","nav_gtao_accomplishments":"Accomplishments","nav_gtao_browse_crews":"Browse All Crews","nav_gtao_career_progress":"Career Progress","nav_gtao_checklist":"Checklist","nav_gtao_community":"Community","nav_gtao_community_series":"Community Series","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Create a Crew","nav_gtao_cta_buy_now":"Buy Now","nav_gtao_discover":"Discover","nav_gtao_emblem_editor":"Emblem Editor","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Jobs","nav_gtao_jobs_browse_all":"Browse All Jobs","nav_gtao_jobs_playlists":"Playlists","nav_gtao_license_plate_creator":"License Plate Creator","nav_gtao_missions":"Missions","nav_gtao_my_character":"My Character","nav_gtao_my_crews":"My Crews","nav_gtao_my_jobs":"My Jobs","nav_gtao_overview":"Overview","nav_gtao_photos":"Photos","nav_gtao_stats":"Stats","nav_gtao_story":"Story","nav_gtao_support":"Support","nav_gtao_twitch_drops":"Twitch Drops","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Buy Now","nav_gtav_accomplishments":"Accomplishments","nav_gtav_checklist":"Checklist","nav_gtav_community":"Community","nav_gtav_community_series":"Community Series","nav_gtav_create_crew":"Create a Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Browse All Crews","nav_gtav_cta_buy_now":"Buy Now","nav_gtav_discover":"Discover","nav_gtav_emblem_editor":"Emblem Editor","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Jobs","nav_gtav_jobs_browse_all":"Browse All Jobs","nav_gtav_licence_plate_creator":"License Plate Creator","nav_gtav_missions":"Missions","nav_gtav_my_character":"My Character","nav_gtav_my_crews":"My Crews","nav_gtav_my_jobs":"My Jobs","nav_gtav_overview":"Overview","nav_gtav_photos":"Photos","nav_gtav_playlists":"Playlists","nav_gtav_stats":"Stats","nav_gtav_story":"Story","nav_gtav_support":"Support","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Buy Now","nav_gtavc_discover":"Discover","nav_gtavcs_discover":"Discover","nav_lanoire_accomplishments":"Accomplishments","nav_lanoire_badge_pursuit":"Badge Pursuit","nav_lanoire_case_tracker":"Case Tracker","nav_lanoire_checklist":"Checklist","nav_lanoire_cta_buy_now":"Buy Now","nav_lanoire_official_site":"Official Site","nav_lanoire_overview":"Overview","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progress","nav_lanoire_stats":"Stats","nav_lanoire_support":"Support","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Close menu","nav_mobilemenu_open":"Open menu","nav_mobilemenu_title":"Navigation menu","nav_more_dropdown":"More","nav_mp3_accomplishments":"Accomplishments","nav_mp3_career":"Career","nav_mp3_chapters":"Chapters","nav_mp3_checklist":"Checklist","nav_mp3_checkpoint_challenge":"Checkpoint Challenge","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Buy Now","nav_mp3_featured":"Featured","nav_mp3_grinds":"Grinds","nav_mp3_leaderboards":"Leaderboards","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"News","nav_mp3_ny_minute":"New York Minute","nav_mp3_official_site":"Official Site","nav_mp3_overview":"Overview","nav_mp3_progress":"Progress","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Singleplayer","nav_mp3_specifications":"Specifications","nav_mp3_support":"Support","nav_mp3_weapons":"Weapons","nav_opens_in_new_window":"{text} (Link opens in new window)","nav_quick_access_games":"Games","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Accomplishments","nav_rdo_awards":"Awards","nav_rdo_benefits":"Benefits","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Club Rewards","nav_rdo_community":"Community","nav_rdo_competitive_series":"Competitive Series","nav_rdo_cta_buy_now":"Buy Now","nav_rdo_customization":"Customization","nav_rdo_explore":"Explore","nav_rdo_getting_started":"Getting Started","nav_rdo_guides":"Guides","nav_rdo_my_character":"My Character","nav_rdo_overview":"Overview","nav_rdo_photos":"Photos","nav_rdo_posses":"Posses","nav_rdo_posses_free_roam":"Posses and Free Roam","nav_rdo_progress":"Progress","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Rank Unlocks","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Specialist Roles","nav_rdo_story_missions":"Story Missions","nav_rdo_support":"Support","nav_rdr2_accomplishments":"Accomplishments","nav_rdr2_artwork":"Artwork","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Challenges","nav_rdr2_chapters":"Chapters","nav_rdr2_character":"Character","nav_rdr2_compendium":"Compendium","nav_rdr2_cta_buy_now":"Buy Now","nav_rdr2_explore":"Explore","nav_rdr2_gallery":"Gallery","nav_rdr2_locations":"Locations","nav_rdr2_media":"Media","nav_rdr2_music":"Music","nav_rdr2_online":"Online","nav_rdr2_overview":"Overview","nav_rdr2_progress":"Progress","nav_rdr2_stats":"Stats","nav_rdr2_support":"Support","nav_rdr2_van_der_linde_gang":"The Van der Linde Gang","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Weaponry","nav_rdr2_wildlife":"Wildlife","nav_rdr_cta_buy_now":"Buy Now","nav_rockstargames_external_link":"External","nav_rockstargames_home":"Rockstar Games Home","nav_rockstargames_logo":"Click to open menu","nav_rsg_community_guidelines":"Community Guidelines","nav_rsg_downloads":"Downloads","nav_rsg_games":"Games","nav_rsg_newswire":"Newswire","nav_rsg_store":"Store","nav_rsg_support":"Support","nav_rsg_videos":"Videos","nav_search_error_too_short":"Your search query is too short. Queries must be at least {count} characters long.","nav_search_error_too_short_invalid_chars":"Your search query contains invalid characters ({invalidChars}). Remove these and try again.","nav_support_dashboard":"My Dashboard","nav_support_home":"Home","nav_support_service_status":"Service Status","nav_support_submit_ticket":"Submit a Ticket","nav_thewarriors_cta_buy_now":"Buy Now","nav_undeadnightmare_buy_now":"Buy Now","nav_undeadnightmare_discover":"Discover","nav_undeadnightmare_gallery":"Gallery","nav_undeadnightmare_info":"Info","nav_undeadnightmare_media":"Media","nav_undeadnightmare_news":"News","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Specifications","nav_undeadnightmare_suport":"Support","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"View All","nofications_new":"New notifications","quick_access_title":"Rockstar Games","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_legal":"Legal","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","search_action":"Search","search_close_button":"Close Search","search_open_button":"Open Search","search_placeholder":"Search Rockstar Games...","search_target_aria_label":"Search {target}","search_target_community":"Community","search_target_crews":"Crews","search_target_games":"Games","search_target_jobs":"Jobs","search_target_posts":"Posts","search_target_users":"Users","search_target_videos":"Videos"},"es-ES":{"accessibility_skip_button":"Omitir menú","avatar_menu_close":"Cerrar menú de jugador","avatar_menu_open":"Abrir menú de jugador","avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Selecciona un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","banner_rockstargames_collapsed_legal_cta_aria_label":"Contenido de un banner colapsado","banner_rockstargames_collapsed_legal_cta_label":"Más información","banner_rockstargames_collapsed_legal_text":"Nuestras condiciones legales cambian el 28 de febrero de 2024.","banner_rockstargames_gift_cta":"Consigue un coche deportivo gratis en GTA Online","banner_rockstargames_gift_text":"Desde ahora hasta el 18 de marzo, consigue un Obey 8F Drafter.","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Juegos","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Ver todos","nav_avatarmenu_title":"Menú del avatar","nav_bully_Overview":"Asistencia técnica","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contacta con nosotros","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta3_cta_buy_now":"Comprar ahora","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Asistencia técnica","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Asistencia técnica","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_cta_buy_now":"Comprar ahora","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Asistencia técnica","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_career_progress":"Progreso en la trayectoria","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_community_series":"Series de la comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver todas las actividades","nav_gtao_jobs_playlists":"Listas de partidas","nav_gtao_license_plate_creator":"Creador de matrículas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Asistencia técnica","nav_gtao_twitch_drops":"Drops de Twitch","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_community_series":"Series de la comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver todas las actividades","nav_gtav_licence_plate_creator":"Creador de matrículas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de partidas","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Asistencia técnica","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio web oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Asistencia técnica","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Cerrar menú","nav_mobilemenu_open":"Abrir menú","nav_mobilemenu_title":"Menú de navegación","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de puntos de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio web oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Puntuación máxima","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Asistencia técnica","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una nueva ventana)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Ventajas","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Cuadrillas","nav_rdo_posses_free_roam":"Cuadrillas y Modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progreso","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles especializados","nav_rdo_story_missions":"Misiones de la historia","nav_rdo_support":"Asistencia técnica","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Asistencia técnica","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Fauna","nav_rdr_cta_buy_now":"Comprar ahora","nav_rockstargames_external_link":"Externo","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_community_guidelines":"Directrices de la comunidad","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Newswire","nav_rsg_store":"Tienda","nav_rsg_support":"Asistencia técnica","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Tu búsqueda es demasiado corta. Las búsquedas deben contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres que no son válidos ({invalidChars}). Quítalos e inténtalo de nuevo.","nav_support_dashboard":"Mi panel","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_thewarriors_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Asistencia técnica","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","nofications_new":"Nuevas notificaciones","quick_access_title":"Rockstar Games","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_legal":"Aviso legal","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_users":"Usuarios","search_target_videos":"Vídeos"},"es-MX":{"accessibility_skip_button":"Omitir menú","avatar_menu_close":"Cerrar menú del jugador","avatar_menu_open":"Abrir menú del jugador","avatarmenu_logout":"Cerrar sesión","avatarmenu_selectlanguage":"Seleccionar un idioma","avatarmenu_signin":"Iniciar sesión","avatarmenu_signup":"Registrarse","banner_rockstargames_collapsed_legal_cta_aria_label":"Contenido de cartel colapsado","banner_rockstargames_collapsed_legal_cta_label":"Más información","banner_rockstargames_collapsed_legal_text":"Nuestros términos legales cambiarán el 28 de febrero de 2024.","banner_rockstargames_gift_cta":"Obtén un coche deportivo gratis en GTA Online","banner_rockstargames_gift_text":"Obtén un Obey 8F Drafter gratis hasta el 18 de marzo.","games_menu_featured":"Juegos destacados","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Juegos","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Ver todos","nav_avatarmenu_title":"Menú del avatar","nav_bully_Overview":"Soporte","nav_bully_accomplishments":"Logros","nav_bully_cta_buy_now":"Comprar ahora","nav_bully_game_overview":"Descubrir","nav_bully_videos":"Videos","nav_careers_careers_on_linkedin":"Empleos en LinkedIn","nav_careers_contact_us":"Contáctanos","nav_careers_home":"Inicio","nav_careers_openings":"Empleos","nav_cta_get_launcher":"Obtener Launcher","nav_gta3_cta_buy_now":"Comprar ahora","nav_gta_trilogy_accomplishments":"Logros","nav_gta_trilogy_cta_buy_now":"Comprar ahora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Información general","nav_gta_trilogy_support":"Soporte","nav_gtaiv_accomplishments":"Logros","nav_gtaiv_cta_buy_now":"Comprar ahora","nav_gtaiv_overview":"Descubrir","nav_gtaiv_support":"Soporte","nav_gtaiveflc_accomplishments":"Logros","nav_gtaiveflc_cta_buy_now":"Comprar ahora","nav_gtaiveflc_overview":"Información general","nav_gtaiveflc_support":"Soporte","nav_gtao_accomplishments":"Logros","nav_gtao_browse_crews":"Ver todas las Crews","nav_gtao_career_progress":"Progreso y trayectoria","nav_gtao_checklist":"Lista de progreso","nav_gtao_community":"Comunidad","nav_gtao_community_series":"Serie de la comunidad","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Crear una Crew","nav_gtao_cta_buy_now":"Comprar ahora","nav_gtao_discover":"Descubrir","nav_gtao_emblem_editor":"Editor de emblemas","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guías","nav_gtao_jobs":"Actividades","nav_gtao_jobs_browse_all":"Ver actividades","nav_gtao_jobs_playlists":"Listas de juego","nav_gtao_license_plate_creator":"Creador de placas","nav_gtao_missions":"Misiones","nav_gtao_my_character":"Mi personaje","nav_gtao_my_crews":"Mis Crews","nav_gtao_my_jobs":"Mis actividades","nav_gtao_overview":"Información general","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estadísticas","nav_gtao_story":"Historia","nav_gtao_support":"Soporte","nav_gtao_twitch_drops":"Drops de Twitch","nav_gtao_videos":"Videos","nav_gtasanandreas_cta_buy_now":"Comprar ahora","nav_gtav_accomplishments":"Logros","nav_gtav_checklist":"Lista de progreso","nav_gtav_community":"Comunidad","nav_gtav_community_series":"Serie de la comunidad","nav_gtav_create_crew":"Crear una Crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Ver todas las Crews","nav_gtav_cta_buy_now":"Comprar ahora","nav_gtav_discover":"Descubrir","nav_gtav_emblem_editor":"Editor de emblemas","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guías","nav_gtav_jobs":"Actividades","nav_gtav_jobs_browse_all":"Ver actividades","nav_gtav_licence_plate_creator":"Creador de placas","nav_gtav_missions":"Misiones","nav_gtav_my_character":"Mi personaje","nav_gtav_my_crews":"Mis Crews","nav_gtav_my_jobs":"Mis actividades","nav_gtav_overview":"Información general","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de juego","nav_gtav_stats":"Estadísticas","nav_gtav_story":"Historia","nav_gtav_support":"Soporte","nav_gtav_videos":"Videos","nav_gtavc_cta_buy_now":"Comprar ahora","nav_gtavc_discover":"Descubrir","nav_gtavcs_discover":"Descubrir","nav_lanoire_accomplishments":"Logros","nav_lanoire_badge_pursuit":"Búsqueda de placas","nav_lanoire_case_tracker":"Localizador de casos","nav_lanoire_checklist":"Lista de progreso","nav_lanoire_cta_buy_now":"Comprar ahora","nav_lanoire_official_site":"Sitio oficial","nav_lanoire_overview":"Información general","nav_lanoire_pc_console":"PC/Consola","nav_lanoire_progress":"Progreso","nav_lanoire_stats":"Estadísticas","nav_lanoire_support":"Soporte","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Cerrar menú","nav_mobilemenu_open":"Abrir menú","nav_mobilemenu_title":"Menú de navegación","nav_more_dropdown":"Más","nav_mp3_accomplishments":"Logros","nav_mp3_career":"Trayectoria","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progreso","nav_mp3_checkpoint_challenge":"Desafío de punto de control","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Comprar ahora","nav_mp3_featured":"Destacadas","nav_mp3_grinds":"Retos","nav_mp3_leaderboards":"Marcadores","nav_mp3_multiplayer":"Multijugador","nav_mp3_news":"Noticias","nav_mp3_ny_minute":"Minuto de Nueva York","nav_mp3_official_site":"Sitio oficial","nav_mp3_overview":"Información general","nav_mp3_progress":"Progreso","nav_mp3_score_attack":"Máxima puntuación","nav_mp3_singleplayer":"Un jugador","nav_mp3_specifications":"Requisitos","nav_mp3_support":"Soporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (El enlace se abre en una ventana nueva)","nav_quick_access_games":"Juegos","nav_quick_access_home":"Inicio","nav_quick_access_newswire":"Canal de noticias","nav_rdo_accomplishments":"Logros","nav_rdo_awards":"Premios","nav_rdo_benefits":"Beneficios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Recompensas del club","nav_rdo_community":"Comunidad","nav_rdo_competitive_series":"Series competitivas","nav_rdo_cta_buy_now":"Comprar ahora","nav_rdo_customization":"Personalización","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeros pasos","nav_rdo_guides":"Guías","nav_rdo_my_character":"Mi personaje","nav_rdo_overview":"Información general","nav_rdo_photos":"Fotos","nav_rdo_posses":"Clanes","nav_rdo_posses_free_roam":"Clanes y modo Libre","nav_rdo_progress":"Progreso","nav_rdo_progression":"Progresión","nav_rdo_rank_unlocks":"Desbloqueos de nivel","nav_rdo_roles":"Roles","nav_rdo_specialist_roles":"Roles de especialistas","nav_rdo_story_missions":"Misiones narrativas","nav_rdo_support":"Soporte","nav_rdr2_accomplishments":"Logros","nav_rdr2_artwork":"Ilustraciones","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafíos","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personaje","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Comprar ahora","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galería","nav_rdr2_locations":"Ubicaciones","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Información general","nav_rdr2_progress":"Progreso","nav_rdr2_stats":"Estadísticas","nav_rdr2_support":"Soporte","nav_rdr2_van_der_linde_gang":"Banda de Van der Linde","nav_rdr2_videos":"Videos","nav_rdr2_weaponry":"Armamento","nav_rdr2_wildlife":"Fauna","nav_rdr_cta_buy_now":"Comprar ahora","nav_rockstargames_external_link":"Externo","nav_rockstargames_home":"Inicio de Rockstar Games","nav_rockstargames_logo":"Haz clic para abrir el menú","nav_rsg_community_guidelines":"Directrices de la comunidad","nav_rsg_downloads":"Descargas","nav_rsg_games":"Juegos","nav_rsg_newswire":"Canal de noticias","nav_rsg_store":"Tienda","nav_rsg_support":"Soporte","nav_rsg_videos":"Videos","nav_search_error_too_short":"Tu búsqueda es muy corta. La búsqueda debe contener al menos {count} caracteres.","nav_search_error_too_short_invalid_chars":"Tu búsqueda contiene caracteres no válidos: {invalidChars}. Quítalos de la búsqueda y vuelve a intentarlo.","nav_support_dashboard":"Mi panel de control","nav_support_home":"Inicio","nav_support_service_status":"Estado del servicio","nav_support_submit_ticket":"Enviar una solicitud","nav_thewarriors_cta_buy_now":"Comprar ahora","nav_undeadnightmare_buy_now":"Comprar ahora","nav_undeadnightmare_discover":"Descubrir","nav_undeadnightmare_gallery":"Galería","nav_undeadnightmare_info":"Información","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Noticias","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Requisitos","nav_undeadnightmare_suport":"Soporte","nav_undeadnightmare_videos":"Videos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver todos","nofications_new":"Nuevas notificaciones","quick_access_title":"Rockstar Games","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_legal":"Legal","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","search_action":"Buscar","search_close_button":"Cerrar búsqueda","search_open_button":"Abrir búsqueda","search_placeholder":"Buscar en Rockstar Games","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidad","search_target_crews":"Crews","search_target_games":"Juegos","search_target_jobs":"Actividades","search_target_posts":"Publicaciones","search_target_users":"Usuarios","search_target_videos":"Videos"},"fr-FR":{"accessibility_skip_button":"Passer le menu","avatar_menu_close":"Fermer le menu Joueur","avatar_menu_open":"Ouvrir le menu Joueur","avatarmenu_logout":"Se déconnecter","avatarmenu_selectlanguage":"Sélectionner une langue","avatarmenu_signin":"Se connecter","avatarmenu_signup":"S\'abonner","banner_rockstargames_collapsed_legal_cta_aria_label":"Contenu de la bannière réduite","banner_rockstargames_collapsed_legal_cta_label":"En savoir plus","banner_rockstargames_collapsed_legal_text":"Nos conditions générales changent le 28 février 2024.","banner_rockstargames_gift_cta":"Obtenez une sportive gratuite dans GTA Online","banner_rockstargames_gift_text":"Jusqu\'au 18 mars, récupérez gratuitement une Obey 8F Drafter.","games_menu_featured":"Jeux à la une","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Jeux","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Voir tout","nav_avatarmenu_title":"Menu d\'avatar","nav_bully_Overview":"Assistance","nav_bully_accomplishments":"Exploits","nav_bully_cta_buy_now":"Acheter maintenant","nav_bully_game_overview":"Découvrir","nav_bully_videos":"Vidéos","nav_careers_careers_on_linkedin":"Offres d\'emploi sur LinkedIn","nav_careers_contact_us":"Nous contacter","nav_careers_home":"Accueil","nav_careers_openings":"Postes à pourvoir","nav_cta_get_launcher":"Obtenir le Launcher","nav_gta3_cta_buy_now":"Acheter maintenant","nav_gta_trilogy_accomplishments":"Exploits","nav_gta_trilogy_cta_buy_now":"Acheter maintenant","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Vue d\'ensemble","nav_gta_trilogy_support":"Assistance","nav_gtaiv_accomplishments":"Exploits","nav_gtaiv_cta_buy_now":"Acheter maintenant","nav_gtaiv_overview":"Découvrir","nav_gtaiv_support":"Assistance","nav_gtaiveflc_accomplishments":"Exploits","nav_gtaiveflc_cta_buy_now":"Acheter maintenant","nav_gtaiveflc_overview":"Vue d\'ensemble","nav_gtaiveflc_support":"Assistance","nav_gtao_accomplishments":"Exploits","nav_gtao_browse_crews":"Parcourir tous les crews","nav_gtao_career_progress":"Suivi de carrière","nav_gtao_checklist":"Check-list","nav_gtao_community":"Communauté","nav_gtao_community_series":"Épreuves de la communauté","nav_gtao_crews":"Crews","nav_gtao_crews_create":"Créer un crew","nav_gtao_cta_buy_now":"Acheter maintenant","nav_gtao_discover":"Découvrir","nav_gtao_emblem_editor":"Éditeur d\'emblèmes","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guides","nav_gtao_jobs":"Activités","nav_gtao_jobs_browse_all":"Parcourir toutes les activités","nav_gtao_jobs_playlists":"Listes","nav_gtao_license_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtao_missions":"Missions","nav_gtao_my_character":"Mon personnage","nav_gtao_my_crews":"Mes crews","nav_gtao_my_jobs":"Mes activités","nav_gtao_overview":"Vue d\'ensemble","nav_gtao_photos":"Photos","nav_gtao_stats":"Statistiques","nav_gtao_story":"Histoire","nav_gtao_support":"Assistance","nav_gtao_twitch_drops":"Drops Twitch","nav_gtao_videos":"Vidéos","nav_gtasanandreas_cta_buy_now":"Acheter maintenant","nav_gtav_accomplishments":"Exploits","nav_gtav_checklist":"Check-list","nav_gtav_community":"Communauté","nav_gtav_community_series":"Épreuves de la communauté","nav_gtav_create_crew":"Créer un crew","nav_gtav_crews":"Crews","nav_gtav_crews_browse_all":"Parcourir tous les crews","nav_gtav_cta_buy_now":"Acheter maintenant","nav_gtav_discover":"Découvrir","nav_gtav_emblem_editor":"Éditeur d\'emblèmes","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guides","nav_gtav_jobs":"Activités","nav_gtav_jobs_browse_all":"Parcourir toutes les activités","nav_gtav_licence_plate_creator":"Éditeur de plaque d\'immatriculation","nav_gtav_missions":"Missions","nav_gtav_my_character":"Mon personnage","nav_gtav_my_crews":"Mes crews","nav_gtav_my_jobs":"Mes activités","nav_gtav_overview":"Vue d\'ensemble","nav_gtav_photos":"Photos","nav_gtav_playlists":"Listes","nav_gtav_stats":"Statistiques","nav_gtav_story":"Histoire","nav_gtav_support":"Assistance","nav_gtav_videos":"Vidéos","nav_gtavc_cta_buy_now":"Acheter maintenant","nav_gtavc_discover":"Découvrir","nav_gtavcs_discover":"Découvrir","nav_lanoire_accomplishments":"Exploits","nav_lanoire_badge_pursuit":"Défi Traque & plaque","nav_lanoire_case_tracker":"Suivi d\'affaires","nav_lanoire_checklist":"Check-list","nav_lanoire_cta_buy_now":"Acheter maintenant","nav_lanoire_official_site":"Site officiel","nav_lanoire_overview":"Vue d\'ensemble","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progression","nav_lanoire_stats":"Statistiques","nav_lanoire_support":"Assistance","nav_lanoire_vr_case_files":"Les enquêtes VR","nav_mobilemenu_close":"Fermer le menu","nav_mobilemenu_open":"Ouvrir le menu","nav_mobilemenu_title":"Menu de navigation","nav_more_dropdown":"Plus","nav_mp3_accomplishments":"Exploits","nav_mp3_career":"Carrière","nav_mp3_chapters":"Chapitres","nav_mp3_checklist":"Check-list","nav_mp3_checkpoint_challenge":"Défi points de passage","nav_mp3_crews":"Crews","nav_mp3_cta_buy_now":"Acheter maintenant","nav_mp3_featured":"À la une","nav_mp3_grinds":"Défis","nav_mp3_leaderboards":"Classements","nav_mp3_multiplayer":"Multijoueur","nav_mp3_news":"Actualités","nav_mp3_ny_minute":"Minute new-yorkaise","nav_mp3_official_site":"Site officiel","nav_mp3_overview":"Vue d\'ensemble","nav_mp3_progress":"Progression","nav_mp3_score_attack":"Score Attack","nav_mp3_singleplayer":"Solo","nav_mp3_specifications":"Configuration","nav_mp3_support":"Assistance","nav_mp3_weapons":"Armes","nav_opens_in_new_window":"{text} (le lien s\'ouvrira dans une nouvelle fenêtre)","nav_quick_access_games":"Jeux","nav_quick_access_home":"Accueil","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Exploits","nav_rdo_awards":"Récompenses","nav_rdo_benefits":"Avantages","nav_rdo_catalogue":"Catalogue","nav_rdo_club_rewards":"Récompenses du club","nav_rdo_community":"Communauté","nav_rdo_competitive_series":"Séries compétitives","nav_rdo_cta_buy_now":"Acheter maintenant","nav_rdo_customization":"Personnalisation","nav_rdo_explore":"Explorer","nav_rdo_getting_started":"Bien démarrer","nav_rdo_guides":"Guides","nav_rdo_my_character":"Mon personnage","nav_rdo_overview":"Vue d\'ensemble","nav_rdo_photos":"Photos","nav_rdo_posses":"Groupes","nav_rdo_posses_free_roam":"Groupes et mode exploration","nav_rdo_progress":"Progression","nav_rdo_progression":"Progression","nav_rdo_rank_unlocks":"Éléments à déverrouiller","nav_rdo_roles":"Rôles","nav_rdo_specialist_roles":"Rôles spécialisés","nav_rdo_story_missions":"Missions de l\'histoire","nav_rdo_support":"Assistance","nav_rdr2_accomplishments":"Exploits","nav_rdr2_artwork":"Illustrations","nav_rdr2_catalogue":"Catalogue","nav_rdr2_challenges":"Défis","nav_rdr2_chapters":"Chapitres","nav_rdr2_character":"Personnage","nav_rdr2_compendium":"Encyclopédie","nav_rdr2_cta_buy_now":"Acheter maintenant","nav_rdr2_explore":"Explorer","nav_rdr2_gallery":"Galerie","nav_rdr2_locations":"Lieux","nav_rdr2_media":"Média","nav_rdr2_music":"Musique","nav_rdr2_online":"En ligne","nav_rdr2_overview":"Vue d\'ensemble","nav_rdr2_progress":"Progression","nav_rdr2_stats":"Statistiques","nav_rdr2_support":"Assistance","nav_rdr2_van_der_linde_gang":"La bande de Van der Linde","nav_rdr2_videos":"Vidéos","nav_rdr2_weaponry":"Armes","nav_rdr2_wildlife":"Vie sauvage","nav_rdr_cta_buy_now":"Acheter maintenant","nav_rockstargames_external_link":"Externe","nav_rockstargames_home":"Accueil Rockstar Games","nav_rockstargames_logo":"Cliquez pour ouvrir le menu","nav_rsg_community_guidelines":"Règles de la communauté","nav_rsg_downloads":"Téléchargements","nav_rsg_games":"Jeux","nav_rsg_newswire":"Newswire","nav_rsg_store":"Boutique","nav_rsg_support":"Assistance","nav_rsg_videos":"Vidéos","nav_search_error_too_short":"Requête trop courte. Votre requête doit comporter au moins {count} caractères.","nav_search_error_too_short_invalid_chars":"Votre requête contient des caractères non valides ({invalidChars}). Veuillez les supprimer et réessayer.","nav_support_dashboard":"Mon tableau de bord","nav_support_home":"Accueil","nav_support_service_status":"État du service","nav_support_submit_ticket":"Envoyer une demande d\'assistance","nav_thewarriors_cta_buy_now":"Acheter maintenant","nav_undeadnightmare_buy_now":"Acheter maintenant","nav_undeadnightmare_discover":"Découvrir","nav_undeadnightmare_gallery":"Galerie","nav_undeadnightmare_info":"Infos","nav_undeadnightmare_media":"Média","nav_undeadnightmare_news":"Actualités","nav_undeadnightmare_ps3_digital":"PS3 - Version numérique","nav_undeadnightmare_specs":"Configuration","nav_undeadnightmare_suport":"Assistance","nav_undeadnightmare_videos":"Vidéos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Version numérique","nav_view_all_games":"Voir tout","nofications_new":"Nouvelles notifications","quick_access_title":"Rockstar Games","sc_link_account":"Compte","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre ni partager mes données personnelles","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_legal":"Mentions légales","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","search_action":"Rechercher","search_close_button":"Fermer la recherche","search_open_button":"Ouvrir la recherche","search_placeholder":"Rechercher sur Rockstar Games...","search_target_aria_label":"Rechercher {target}","search_target_community":"Communauté","search_target_crews":"Crews","search_target_games":"Jeux","search_target_jobs":"Activités","search_target_posts":"Publications","search_target_users":"Utilisateurs","search_target_videos":"Vidéos"},"it-IT":{"accessibility_skip_button":"Salta il menu","avatar_menu_close":"Chiudi Menu giocatore","avatar_menu_open":"Apri Menu giocatore","avatarmenu_logout":"Esci","avatarmenu_selectlanguage":"Seleziona una lingua","avatarmenu_signin":"Accedi","avatarmenu_signup":"Registrati","banner_rockstargames_collapsed_legal_cta_aria_label":"Contenuto del banner ridotto","banner_rockstargames_collapsed_legal_cta_label":"Altre informazioni","banner_rockstargames_collapsed_legal_text":"I nostri termini legali sono cambiati il 28 febbraio 2024.","banner_rockstargames_gift_cta":"Ottieni un’auto sportiva gratis in GTA Online","banner_rockstargames_gift_text":"Da ora e fino al 18 marzo, riscatta una Obey 8F Drafter gratis.","games_menu_featured":"Giochi in evidenza","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Giochi","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Visualizza tutto","nav_avatarmenu_title":"Menu avatar","nav_bully_Overview":"Supporto","nav_bully_accomplishments":"Premi","nav_bully_cta_buy_now":"Acquista ora","nav_bully_game_overview":"Scopri","nav_bully_videos":"Video","nav_careers_careers_on_linkedin":"Carriere su LinkedIn","nav_careers_contact_us":"Contattaci","nav_careers_home":"Home","nav_careers_openings":"Possibilità di impiego","nav_cta_get_launcher":"Ottieni il launcher","nav_gta3_cta_buy_now":"Acquista ora","nav_gta_trilogy_accomplishments":"Premi","nav_gta_trilogy_cta_buy_now":"Acquista ora","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Panoramica","nav_gta_trilogy_support":"Supporto","nav_gtaiv_accomplishments":"Premi","nav_gtaiv_cta_buy_now":"Acquista ora","nav_gtaiv_overview":"Scopri","nav_gtaiv_support":"Supporto","nav_gtaiveflc_accomplishments":"Premi","nav_gtaiveflc_cta_buy_now":"Acquista ora","nav_gtaiveflc_overview":"Panoramica","nav_gtaiveflc_support":"Supporto","nav_gtao_accomplishments":"Premi","nav_gtao_browse_crews":"Esplora le crew","nav_gtao_career_progress":"Progressi della carriera","nav_gtao_checklist":"Elenco 100%","nav_gtao_community":"Comunità","nav_gtao_community_series":"Serie della comunità","nav_gtao_crews":"Crew","nav_gtao_crews_create":"Crea una crew","nav_gtao_cta_buy_now":"Acquista ora","nav_gtao_discover":"Scopri","nav_gtao_emblem_editor":"Editor simboli","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guide","nav_gtao_jobs":"Attività","nav_gtao_jobs_browse_all":"Esplora le attività","nav_gtao_jobs_playlists":"Elenchi partite","nav_gtao_license_plate_creator":"Creatore di targhe","nav_gtao_missions":"Missioni","nav_gtao_my_character":"Il mio personaggio","nav_gtao_my_crews":"Le mie crew","nav_gtao_my_jobs":"Le mie attività","nav_gtao_overview":"Panoramica","nav_gtao_photos":"Foto","nav_gtao_stats":"Statistiche","nav_gtao_story":"Storia","nav_gtao_support":"Supporto","nav_gtao_twitch_drops":"Twitch Drop","nav_gtao_videos":"Video","nav_gtasanandreas_cta_buy_now":"Acquista ora","nav_gtav_accomplishments":"Premi","nav_gtav_checklist":"Elenco 100%","nav_gtav_community":"Comunità","nav_gtav_community_series":"Serie della comunità","nav_gtav_create_crew":"Crea una crew","nav_gtav_crews":"Crew","nav_gtav_crews_browse_all":"Esplora le crew","nav_gtav_cta_buy_now":"Acquista ora","nav_gtav_discover":"Scopri","nav_gtav_emblem_editor":"Editor simboli","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guide","nav_gtav_jobs":"Attività","nav_gtav_jobs_browse_all":"Esplora le attività","nav_gtav_licence_plate_creator":"Creatore di targhe","nav_gtav_missions":"Missioni","nav_gtav_my_character":"Il mio personaggio","nav_gtav_my_crews":"Le mie crew","nav_gtav_my_jobs":"Le mie attività","nav_gtav_overview":"Panoramica","nav_gtav_photos":"Foto","nav_gtav_playlists":"Elenchi partite","nav_gtav_stats":"Statistiche","nav_gtav_story":"Storia","nav_gtav_support":"Supporto","nav_gtav_videos":"Video","nav_gtavc_cta_buy_now":"Acquista ora","nav_gtavc_discover":"Scopri","nav_gtavcs_discover":"Scopri","nav_lanoire_accomplishments":"Premi","nav_lanoire_badge_pursuit":"Ricerca dei distintivi","nav_lanoire_case_tracker":"Registro dei casi","nav_lanoire_checklist":"Elenco 100%","nav_lanoire_cta_buy_now":"Acquista ora","nav_lanoire_official_site":"Sito ufficiale","nav_lanoire_overview":"Panoramica","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Statistiche","nav_lanoire_support":"Supporto","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Chiudi menu","nav_mobilemenu_open":"Apri menu","nav_mobilemenu_title":"Menu di navigazione","nav_more_dropdown":"Altro","nav_mp3_accomplishments":"Premi","nav_mp3_career":"Carriera","nav_mp3_chapters":"Capitoli","nav_mp3_checklist":"Elenco 100%","nav_mp3_checkpoint_challenge":"Sfida a checkpoint","nav_mp3_crews":"Crew","nav_mp3_cta_buy_now":"Acquista ora","nav_mp3_featured":"In evidenza","nav_mp3_grinds":"Sgobbate","nav_mp3_leaderboards":"Classifiche","nav_mp3_multiplayer":"Multiplayer","nav_mp3_news":"Novità","nav_mp3_ny_minute":"Ultimo respiro","nav_mp3_official_site":"Sito ufficiale","nav_mp3_overview":"Panoramica","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Sfida a punti","nav_mp3_singleplayer":"Giocatore singolo","nav_mp3_specifications":"Requisiti","nav_mp3_support":"Supporto","nav_mp3_weapons":"Armi","nav_opens_in_new_window":"{text} (Il link si apre in una nuova finestra)","nav_quick_access_games":"Giochi","nav_quick_access_home":"Home","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Premi","nav_rdo_awards":"Ricompense","nav_rdo_benefits":"Vantaggi","nav_rdo_catalogue":"Catalogo","nav_rdo_club_rewards":"Ricompense del club","nav_rdo_community":"Comunità","nav_rdo_competitive_series":"Serie competitive","nav_rdo_cta_buy_now":"Acquista ora","nav_rdo_customization":"Personalizzazione","nav_rdo_explore":"Esplora","nav_rdo_getting_started":"Come iniziare","nav_rdo_guides":"Guide","nav_rdo_my_character":"Il mio personaggio","nav_rdo_overview":"Panoramica","nav_rdo_photos":"Foto","nav_rdo_posses":"Posse","nav_rdo_posses_free_roam":"Posse e Free Roam","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressione","nav_rdo_rank_unlocks":"Sbloccabili con rango","nav_rdo_roles":"Ruoli","nav_rdo_specialist_roles":"Ruoli specializzati","nav_rdo_story_missions":"Missioni della storia","nav_rdo_support":"Supporto","nav_rdr2_accomplishments":"Premi","nav_rdr2_artwork":"Illustrazioni","nav_rdr2_catalogue":"Catalogo","nav_rdr2_challenges":"Sfide","nav_rdr2_chapters":"Capitoli","nav_rdr2_character":"Personaggio","nav_rdr2_compendium":"Compendio","nav_rdr2_cta_buy_now":"Acquista ora","nav_rdr2_explore":"Esplora","nav_rdr2_gallery":"Galleria","nav_rdr2_locations":"Luoghi","nav_rdr2_media":"Contenuti multimediali","nav_rdr2_music":"Musica","nav_rdr2_online":"Online","nav_rdr2_overview":"Panoramica","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Statistiche","nav_rdr2_support":"Supporto","nav_rdr2_van_der_linde_gang":"La banda di Van der Linde","nav_rdr2_videos":"Video","nav_rdr2_weaponry":"Arsenale","nav_rdr2_wildlife":"Fauna selvatica","nav_rdr_cta_buy_now":"Acquista ora","nav_rockstargames_external_link":"Esterno","nav_rockstargames_home":"Home Rockstar Games","nav_rockstargames_logo":"Clicca per aprire il menu","nav_rsg_community_guidelines":"Linee guida della comunità","nav_rsg_downloads":"Download","nav_rsg_games":"Giochi","nav_rsg_newswire":"Newswire","nav_rsg_store":"Negozio","nav_rsg_support":"Supporto","nav_rsg_videos":"Video","nav_search_error_too_short":"La tua ricerca è troppo corta. Le ricerche devono contenere almeno {count} caratteri.","nav_search_error_too_short_invalid_chars":"La tua ricerca contiene dei caratteri non validi ({invalidChars}). Rimuovili e riprova.","nav_support_dashboard":"La mia dashboard","nav_support_home":"Home","nav_support_service_status":"Stato del servizio","nav_support_submit_ticket":"Invia un ticket","nav_thewarriors_cta_buy_now":"Acquista ora","nav_undeadnightmare_buy_now":"Acquista ora","nav_undeadnightmare_discover":"Scopri","nav_undeadnightmare_gallery":"Galleria","nav_undeadnightmare_info":"Informazioni","nav_undeadnightmare_media":"Contenuti multimediali","nav_undeadnightmare_news":"Novità","nav_undeadnightmare_ps3_digital":"PS3 - Digitale","nav_undeadnightmare_specs":"Requisiti","nav_undeadnightmare_suport":"Supporto","nav_undeadnightmare_videos":"Video","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digitale","nav_view_all_games":"Visualizza tutto","nofications_new":"Nuove notifiche","quick_access_title":"Rockstar Games","sc_link_account":"Account","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere o condividere i miei dati personali","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_legal":"Note legali","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","search_action":"Cerca","search_close_button":"Chiudi ricerca","search_open_button":"Apri ricerca","search_placeholder":"Cerca in Rockstar Games...","search_target_aria_label":"Cerca {target}","search_target_community":"Comunità","search_target_crews":"Crew","search_target_games":"Giochi","search_target_jobs":"Attività","search_target_posts":"Post","search_target_users":"Utenti","search_target_videos":"Video"},"ja-JP":{"accessibility_skip_button":"メニューをスキップ","avatar_menu_close":"プレイヤーメニューを閉じる","avatar_menu_open":"プレイヤーメニューを開く","avatarmenu_logout":"ログアウト","avatarmenu_selectlanguage":"言語を選択","avatarmenu_signin":"サインイン","avatarmenu_signup":"サインアップ","banner_rockstargames_collapsed_legal_cta_aria_label":"折りたたみ可能バナーコンテンツ","banner_rockstargames_collapsed_legal_cta_label":"詳細を閲覧","banner_rockstargames_collapsed_legal_text":"2024年2月28日に利用規約が変更されます","banner_rockstargames_gift_cta":"「GTAオンライン」でスポーツカーを無料で受け取ろう","banner_rockstargames_gift_text":"3月18日までオベイ 8Fドラフターが無料","games_menu_featured":"注目のゲーム","games_menu_gta_online":"GTAオンライン","games_menu_gta_trilogy":"グランド・セフト・オート：トリロジー","games_menu_gta_v":"グランド・セフト・オートV","games_menu_item":"ゲーム","games_menu_rdr":"レッド・デッド・リデンプション","games_menu_rdr_2":"レッド・デッド・リデンプション2","games_menu_rdr_online":"レッド・デッド・オンライン","games_menu_vi":"グランド・セフト・オートVI","games_menu_view_all":"全て表示","nav_avatarmenu_title":"アバターメニュー","nav_bully_Overview":"サポート","nav_bully_accomplishments":"実績","nav_bully_cta_buy_now":"今すぐ購入","nav_bully_game_overview":"注目","nav_bully_videos":"ビデオ","nav_careers_careers_on_linkedin":"LinkedInキャリア","nav_careers_contact_us":"お問い合せ","nav_careers_home":"ホーム","nav_careers_openings":"求人","nav_cta_get_launcher":"Launcherを入手","nav_gta3_cta_buy_now":"今すぐ購入","nav_gta_trilogy_accomplishments":"実績","nav_gta_trilogy_cta_buy_now":"今すぐ購入","nav_gta_trilogy_gta3":"グランド・セフト・オートIII","nav_gta_trilogy_gtasa":"グランド・セフト・オート：サンアンドレアス","nav_gta_trilogy_gtavc":"グランド・セフト・オート：バイスシティ","nav_gta_trilogy_overview":"概要","nav_gta_trilogy_support":"サポート","nav_gtaiv_accomplishments":"実績","nav_gtaiv_cta_buy_now":"今すぐ購入","nav_gtaiv_overview":"注目","nav_gtaiv_support":"サポート","nav_gtaiveflc_accomplishments":"実績","nav_gtaiveflc_cta_buy_now":"今すぐ購入","nav_gtaiveflc_overview":"概要","nav_gtaiveflc_support":"サポート","nav_gtao_accomplishments":"実績","nav_gtao_browse_crews":"全てのクルーを見る","nav_gtao_career_progress":"キャリア進行状況","nav_gtao_checklist":"チェックリスト","nav_gtao_community":"コミュニティ","nav_gtao_community_series":"コミュニティシリーズ","nav_gtao_crews":"クルー","nav_gtao_crews_create":"クルーを作成する","nav_gtao_cta_buy_now":"今すぐ購入","nav_gtao_discover":"注目","nav_gtao_emblem_editor":"エンブレム・エディター","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTAオンライン","nav_gtao_guides":"ガイド","nav_gtao_jobs":"ジョブ","nav_gtao_jobs_browse_all":"全てのジョブを見る","nav_gtao_jobs_playlists":"プレイリスト","nav_gtao_license_plate_creator":"ナンバープレートクリエイター","nav_gtao_missions":"ミッション","nav_gtao_my_character":"自分のキャラクター","nav_gtao_my_crews":"自分のクルー","nav_gtao_my_jobs":"マイ・ジョブ","nav_gtao_overview":"概要","nav_gtao_photos":"写真","nav_gtao_stats":"ステータス","nav_gtao_story":"ストーリー","nav_gtao_support":"サポート","nav_gtao_twitch_drops":"Twitch Drops","nav_gtao_videos":"ビデオ","nav_gtasanandreas_cta_buy_now":"今すぐ購入","nav_gtav_accomplishments":"実績","nav_gtav_checklist":"チェックリスト","nav_gtav_community":"コミュニティ","nav_gtav_community_series":"コミュニティシリーズ","nav_gtav_create_crew":"クルーを作成","nav_gtav_crews":"クルー","nav_gtav_crews_browse_all":"全てのクルーを見る","nav_gtav_cta_buy_now":"今すぐ購入","nav_gtav_discover":"概要","nav_gtav_emblem_editor":"エンブレム・エディター","nav_gtav_gta_online":"GTAオンライン","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"ガイド","nav_gtav_jobs":"ジョブ","nav_gtav_jobs_browse_all":"全てのジョブを見る","nav_gtav_licence_plate_creator":"ナンバープレートクリエイター","nav_gtav_missions":"ミッション","nav_gtav_my_character":"自分のキャラクター","nav_gtav_my_crews":"自分のクルー","nav_gtav_my_jobs":"マイ・ジョブ","nav_gtav_overview":"概要","nav_gtav_photos":"写真","nav_gtav_playlists":"プレイリスト","nav_gtav_stats":"ステータス","nav_gtav_story":"ストーリー","nav_gtav_support":"サポート","nav_gtav_videos":"ビデオ","nav_gtavc_cta_buy_now":"今すぐ購入","nav_gtavc_discover":"概要","nav_gtavcs_discover":"注目","nav_lanoire_accomplishments":"実績","nav_lanoire_badge_pursuit":"バッジ探索チャレンジ","nav_lanoire_case_tracker":"事件トラッカー","nav_lanoire_checklist":"チェックリスト","nav_lanoire_cta_buy_now":"今すぐ購入","nav_lanoire_official_site":"オフィシャルサイト","nav_lanoire_overview":"概要","nav_lanoire_pc_console":"PC/コンソール","nav_lanoire_progress":"進行状況","nav_lanoire_stats":"ステータス","nav_lanoire_support":"サポート","nav_lanoire_vr_case_files":"VR事件簿","nav_mobilemenu_close":"メニューを閉じる","nav_mobilemenu_open":"メニューを開く","nav_mobilemenu_title":"ナビゲーションメニュー","nav_more_dropdown":"もっと見る","nav_mp3_accomplishments":"実績","nav_mp3_career":"キャリア","nav_mp3_chapters":"チャプター","nav_mp3_checklist":"チェックリスト","nav_mp3_checkpoint_challenge":"チェックポイントチャレンジ","nav_mp3_crews":"クルー","nav_mp3_cta_buy_now":"今すぐ購入","nav_mp3_featured":"ピックアップ","nav_mp3_grinds":"グラインド","nav_mp3_leaderboards":"ランキング","nav_mp3_multiplayer":"マルチプレイ","nav_mp3_news":"ニュース","nav_mp3_ny_minute":"ニューヨーク・ミニッツ","nav_mp3_official_site":"オフィシャルサイト","nav_mp3_overview":"概要","nav_mp3_progress":"進行状況","nav_mp3_score_attack":"スコアアタック","nav_mp3_singleplayer":"シングルプレイ","nav_mp3_specifications":"システム要件","nav_mp3_support":"サポート","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}(リンクは新しいウィンドウで開きます)","nav_quick_access_games":"ゲーム","nav_quick_access_home":"ホーム","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"実績","nav_rdo_awards":"アワード","nav_rdo_benefits":"特典","nav_rdo_catalogue":"カタログ","nav_rdo_club_rewards":"クラブ報酬","nav_rdo_community":"コミュニティ","nav_rdo_competitive_series":"対戦シリーズ","nav_rdo_cta_buy_now":"今すぐ購入","nav_rdo_customization":"カスタマイズ","nav_rdo_explore":"探索","nav_rdo_getting_started":"冒険の始まり","nav_rdo_guides":"ガイド","nav_rdo_my_character":"自分のキャラクター","nav_rdo_overview":"概要","nav_rdo_photos":"写真","nav_rdo_posses":"民警団","nav_rdo_posses_free_roam":"民警団＆放浪モード","nav_rdo_progress":"進行状況","nav_rdo_progression":"進行状況","nav_rdo_rank_unlocks":"ランク解除","nav_rdo_roles":"役割","nav_rdo_specialist_roles":"専門的な役割","nav_rdo_story_missions":"ストーリーミッション","nav_rdo_support":"サポート","nav_rdr2_accomplishments":"実績","nav_rdr2_artwork":"アートワーク","nav_rdr2_catalogue":"カタログ","nav_rdr2_challenges":"チャレンジ","nav_rdr2_chapters":"チャプター","nav_rdr2_character":"キャラクター","nav_rdr2_compendium":"図鑑","nav_rdr2_cta_buy_now":"今すぐ購入","nav_rdr2_explore":"探索","nav_rdr2_gallery":"ギャラリー","nav_rdr2_locations":"ロケーション","nav_rdr2_media":"メディア","nav_rdr2_music":"音楽","nav_rdr2_online":"オンライン","nav_rdr2_overview":"概要","nav_rdr2_progress":"進行状況","nav_rdr2_stats":"ステータス","nav_rdr2_support":"サポート","nav_rdr2_van_der_linde_gang":"ダッチギャング","nav_rdr2_videos":"ビデオ","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rdr_cta_buy_now":"今すぐ購入","nav_rockstargames_external_link":"外部","nav_rockstargames_home":"ロックスター・ゲームスホーム","nav_rockstargames_logo":"クリックしてメニューを開く","nav_rsg_community_guidelines":"コミュニティガイドライン","nav_rsg_downloads":"ダウンロード","nav_rsg_games":"ゲーム","nav_rsg_newswire":"Newswire","nav_rsg_store":"ストア","nav_rsg_support":"サポート","nav_rsg_videos":"ビデオ","nav_search_error_too_short":"検索文字数が少なすぎます。{count}文字以上にしてください。","nav_search_error_too_short_invalid_chars":"検索文字に無効な文字({invalidChars})が含まれています。無効な文字を削除してもう一度お試しください。","nav_support_dashboard":"ダッシュボード","nav_support_home":"ホーム","nav_support_service_status":"サービス状況","nav_support_submit_ticket":"チケットを送信","nav_thewarriors_cta_buy_now":"今すぐ購入","nav_undeadnightmare_buy_now":"今すぐ購入","nav_undeadnightmare_discover":"概要","nav_undeadnightmare_gallery":"ギャラリー","nav_undeadnightmare_info":"情報","nav_undeadnightmare_media":"メディア","nav_undeadnightmare_news":"ニュース","nav_undeadnightmare_ps3_digital":"PS3 - ダウンロード版","nav_undeadnightmare_specs":"システム要件","nav_undeadnightmare_suport":"サポート","nav_undeadnightmare_videos":"ビデオ","nav_undeadnightmare_xbox360_digital":"Xbox 360 - ダウンロード版","nav_view_all_games":"全て表示","nofications_new":"新しいお知らせ","quick_access_title":"Rockstar Games","sc_link_account":"アカウント","sc_link_cookies_policy":"Cookieポリシー","sc_link_cookies_settings":"Cookie設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を共有もしくは売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_legal":"利用規約","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","search_action":"検索","search_close_button":"検索を閉じる","search_open_button":"検索を開く","search_placeholder":"ロックスター・ゲームス内を検索…","search_target_aria_label":"{Target}を検索","search_target_community":"コミュニティ","search_target_crews":"クルー","search_target_games":"ゲーム","search_target_jobs":"ジョブ","search_target_posts":"投稿","search_target_users":"ユーザー","search_target_videos":"ビデオ"},"ko-KR":{"accessibility_skip_button":"메뉴 건너뛰기","avatar_menu_close":"플레이어 메뉴 닫기","avatar_menu_open":"플레이어 메뉴 열기","avatarmenu_logout":"로그아웃","avatarmenu_selectlanguage":"언어 선택","avatarmenu_signin":"로그인","avatarmenu_signup":"가입","banner_rockstargames_collapsed_legal_cta_aria_label":"접을 수 있는 배너 콘텐츠","banner_rockstargames_collapsed_legal_cta_label":"더 알아보기","banner_rockstargames_collapsed_legal_text":"2024년 2월 28일에 법률 약관이 변경되었습니다.","banner_rockstargames_gift_cta":"GTA 온라인에서 무료 스포츠카 획득","banner_rockstargames_gift_text":"지금부터 3월 18일까지 무료 오베이 8F 드래프터를 획득할 수 있습니다.","games_menu_featured":"특선 게임","games_menu_gta_online":"Grand Theft Auto 온라인","games_menu_gta_trilogy":"Grand Theft Auto: 트릴로지","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"게임","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 온라인","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"모두 보기","nav_avatarmenu_title":"아바타 메뉴","nav_bully_Overview":"지원","nav_bully_accomplishments":"업적","nav_bully_cta_buy_now":"지금 구입","nav_bully_game_overview":"탐색","nav_bully_videos":"동영상","nav_careers_careers_on_linkedin":"LinkedIn 채용","nav_careers_contact_us":"문의","nav_careers_home":"홈","nav_careers_openings":"진행 중 공고","nav_cta_get_launcher":"Launcher 다운로드","nav_gta3_cta_buy_now":"지금 구입","nav_gta_trilogy_accomplishments":"업적","nav_gta_trilogy_cta_buy_now":"지금 구입","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"소개","nav_gta_trilogy_support":"지원","nav_gtaiv_accomplishments":"업적","nav_gtaiv_cta_buy_now":"지금 구입","nav_gtaiv_overview":"탐색","nav_gtaiv_support":"지원","nav_gtaiveflc_accomplishments":"업적","nav_gtaiveflc_cta_buy_now":"지금 구입","nav_gtaiveflc_overview":"소개","nav_gtaiveflc_support":"지원","nav_gtao_accomplishments":"업적","nav_gtao_browse_crews":"모든 조직 둘러보기","nav_gtao_career_progress":"경력 진행","nav_gtao_checklist":"체크리스트","nav_gtao_community":"커뮤니티","nav_gtao_community_series":"커뮤니티 시리즈","nav_gtao_crews":"조직","nav_gtao_crews_create":"조직 생성","nav_gtao_cta_buy_now":"지금 구입","nav_gtao_discover":"탐색","nav_gtao_emblem_editor":"상징 편집기","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 온라인","nav_gtao_guides":"가이드","nav_gtao_jobs":"작업","nav_gtao_jobs_browse_all":"모든 작업 둘러보기","nav_gtao_jobs_playlists":"플레이 목록","nav_gtao_license_plate_creator":"번호판 생성기","nav_gtao_missions":"임무","nav_gtao_my_character":"내 캐릭터","nav_gtao_my_crews":"내 조직","nav_gtao_my_jobs":"내 작업","nav_gtao_overview":"소개","nav_gtao_photos":"사진","nav_gtao_stats":"통계","nav_gtao_story":"스토리","nav_gtao_support":"지원","nav_gtao_twitch_drops":"Twitch 드롭스","nav_gtao_videos":"동영상","nav_gtasanandreas_cta_buy_now":"지금 구입","nav_gtav_accomplishments":"업적","nav_gtav_checklist":"체크리스트","nav_gtav_community":"커뮤니티","nav_gtav_community_series":"커뮤니티 시리즈","nav_gtav_create_crew":"조직 생성","nav_gtav_crews":"조직","nav_gtav_crews_browse_all":"모든 조직 둘러보기","nav_gtav_cta_buy_now":"지금 구입","nav_gtav_discover":"탐색","nav_gtav_emblem_editor":"상징 편집기","nav_gtav_gta_online":"GTA 온라인","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"가이드","nav_gtav_jobs":"작업","nav_gtav_jobs_browse_all":"모든 작업 둘러보기","nav_gtav_licence_plate_creator":"번호판 생성기","nav_gtav_missions":"임무","nav_gtav_my_character":"내 캐릭터","nav_gtav_my_crews":"내 조직","nav_gtav_my_jobs":"내 작업","nav_gtav_overview":"소개","nav_gtav_photos":"사진","nav_gtav_playlists":"플레이 목록","nav_gtav_stats":"통계","nav_gtav_story":"스토리","nav_gtav_support":"지원","nav_gtav_videos":"동영상","nav_gtavc_cta_buy_now":"지금 구입","nav_gtavc_discover":"탐색","nav_gtavcs_discover":"탐색","nav_lanoire_accomplishments":"업적","nav_lanoire_badge_pursuit":"배지 수집","nav_lanoire_case_tracker":"사건 추적 일지","nav_lanoire_checklist":"체크리스트","nav_lanoire_cta_buy_now":"지금 구입","nav_lanoire_official_site":"공식 사이트","nav_lanoire_overview":"소개","nav_lanoire_pc_console":"PC/콘솔","nav_lanoire_progress":"진행","nav_lanoire_stats":"통계","nav_lanoire_support":"지원","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"메뉴 닫기","nav_mobilemenu_open":"메뉴 열기","nav_mobilemenu_title":"이동 메뉴","nav_more_dropdown":"그 외","nav_mp3_accomplishments":"업적","nav_mp3_career":"경력","nav_mp3_chapters":"챕터","nav_mp3_checklist":"체크리스트","nav_mp3_checkpoint_challenge":"체크포인트 도전","nav_mp3_crews":"조직","nav_mp3_cta_buy_now":"지금 구입","nav_mp3_featured":"주요 사항","nav_mp3_grinds":"시련","nav_mp3_leaderboards":"순위표","nav_mp3_multiplayer":"멀티 플레이","nav_mp3_news":"뉴스","nav_mp3_ny_minute":"뉴욕의 시간","nav_mp3_official_site":"공식 사이트","nav_mp3_overview":"소개","nav_mp3_progress":"진행","nav_mp3_score_attack":"스코어 어택","nav_mp3_singleplayer":"싱글 플레이","nav_mp3_specifications":"사양","nav_mp3_support":"지원","nav_mp3_weapons":"무기","nav_opens_in_new_window":"{text} (새 창에서 링크 열기)","nav_quick_access_games":"게임","nav_quick_access_home":"홈","nav_quick_access_newswire":"뉴스와이어","nav_rdo_accomplishments":"업적","nav_rdo_awards":"보상","nav_rdo_benefits":"혜택","nav_rdo_catalogue":"카탈로그","nav_rdo_club_rewards":"클럽 보상","nav_rdo_community":"커뮤니티","nav_rdo_competitive_series":"경쟁 시리즈","nav_rdo_cta_buy_now":"지금 구입","nav_rdo_customization":"커스텀","nav_rdo_explore":"탐험","nav_rdo_getting_started":"시작하기","nav_rdo_guides":"가이드","nav_rdo_my_character":"내 캐릭터","nav_rdo_overview":"소개","nav_rdo_photos":"사진","nav_rdo_posses":"갱단","nav_rdo_posses_free_roam":"갱단과 유랑 모드","nav_rdo_progress":"진행","nav_rdo_progression":"진행 상황","nav_rdo_rank_unlocks":"랭크 잠금 해제","nav_rdo_roles":"직업","nav_rdo_specialist_roles":"전문 직업","nav_rdo_story_missions":"스토리 임무","nav_rdo_support":"지원","nav_rdr2_accomplishments":"업적","nav_rdr2_artwork":"아트워크","nav_rdr2_catalogue":"카탈로그","nav_rdr2_challenges":"도전","nav_rdr2_chapters":"챕터","nav_rdr2_character":"캐릭터","nav_rdr2_compendium":"개요","nav_rdr2_cta_buy_now":"지금 구입","nav_rdr2_explore":"탐험","nav_rdr2_gallery":"갤러리","nav_rdr2_locations":"위치","nav_rdr2_media":"미디어","nav_rdr2_music":"음악","nav_rdr2_online":"온라인","nav_rdr2_overview":"소개","nav_rdr2_progress":"진행","nav_rdr2_stats":"통계","nav_rdr2_support":"지원","nav_rdr2_van_der_linde_gang":"반 더 린드 갱단","nav_rdr2_videos":"동영상","nav_rdr2_weaponry":"무기","nav_rdr2_wildlife":"야생 동물","nav_rdr_cta_buy_now":"지금 구입","nav_rockstargames_external_link":"외부","nav_rockstargames_home":"Rockstar Games 홈","nav_rockstargames_logo":"클릭해서 메뉴 열기","nav_rsg_community_guidelines":"커뮤니티 가이드라인","nav_rsg_downloads":"다운로드","nav_rsg_games":"게임","nav_rsg_newswire":"뉴스와이어","nav_rsg_store":"스토어","nav_rsg_support":"지원","nav_rsg_videos":"동영상","nav_search_error_too_short":"검색어가 너무 짧습니다. 검색어는 최소 {count}글자여야 합니다.","nav_search_error_too_short_invalid_chars":"검색어에 유효하지 않은 문자({invalidChars})가 포함되어 있습니다. 제거하고 다시 시도하십시오.","nav_support_dashboard":"내 대시보드","nav_support_home":"홈","nav_support_service_status":"서비스 상태","nav_support_submit_ticket":"요청 제출","nav_thewarriors_cta_buy_now":"지금 구입","nav_undeadnightmare_buy_now":"지금 구입","nav_undeadnightmare_discover":"탐색","nav_undeadnightmare_gallery":"갤러리","nav_undeadnightmare_info":"정보","nav_undeadnightmare_media":"미디어","nav_undeadnightmare_news":"뉴스","nav_undeadnightmare_ps3_digital":"PS3 - 디지털","nav_undeadnightmare_specs":"사양","nav_undeadnightmare_suport":"지원","nav_undeadnightmare_videos":"동영상","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 디지털","nav_view_all_games":"모두 보기","nofications_new":"새 알림","quick_access_title":"Rockstar Games","sc_link_account":"계정","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 또는 공유 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_legal":"법률 관련","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","search_action":"검색","search_close_button":"검색 닫기","search_open_button":"검색 열기","search_placeholder":"Rockstar Games 검색...","search_target_aria_label":"{Target} 검색","search_target_community":"커뮤니티","search_target_crews":"조직","search_target_games":"게임","search_target_jobs":"작업","search_target_posts":"게시물","search_target_users":"유저","search_target_videos":"동영상"},"pl-PL":{"accessibility_skip_button":"Pomiń menu","avatar_menu_close":"Zamknij menu gracza","avatar_menu_open":"Otwórz menu gracza","avatarmenu_logout":"Wyloguj się","avatarmenu_selectlanguage":"Wybierz język","avatarmenu_signin":"Zaloguj się","avatarmenu_signup":"Zarejestruj się","banner_rockstargames_collapsed_legal_cta_aria_label":"Zwijany baner","banner_rockstargames_collapsed_legal_cta_label":"Dowiedz się więcej","banner_rockstargames_collapsed_legal_text":"Nasze zasady prawne ulegną zmianie 28 lutego 2024.","banner_rockstargames_gift_cta":"Zdobądź darmowy samochód sportowy w GTA Online","banner_rockstargames_gift_text":"Odbierz za darmo Obeya 8F Draftera do 18 marca.","games_menu_featured":"Wyróżnione gry","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Gry","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Pokaż wszystko","nav_avatarmenu_title":"Menu awatara","nav_bully_Overview":"Wsparcie","nav_bully_accomplishments":"Osiągnięcia","nav_bully_cta_buy_now":"Kup teraz","nav_bully_game_overview":"Odkryj","nav_bully_videos":"Filmy","nav_careers_careers_on_linkedin":"Oferty pracy na LinkedIn","nav_careers_contact_us":"Kontakt","nav_careers_home":"Strona główna","nav_careers_openings":"Wakaty","nav_cta_get_launcher":"Pobierz aplikację","nav_gta3_cta_buy_now":"Kup teraz","nav_gta_trilogy_accomplishments":"Osiągnięcia","nav_gta_trilogy_cta_buy_now":"Kup teraz","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Ogólny zarys","nav_gta_trilogy_support":"Wsparcie","nav_gtaiv_accomplishments":"Osiągnięcia","nav_gtaiv_cta_buy_now":"Kup teraz","nav_gtaiv_overview":"Odkryj","nav_gtaiv_support":"Wsparcie","nav_gtaiveflc_accomplishments":"Osiągnięcia","nav_gtaiveflc_cta_buy_now":"Kup teraz","nav_gtaiveflc_overview":"Ogólny zarys","nav_gtaiveflc_support":"Wsparcie","nav_gtao_accomplishments":"Osiągnięcia","nav_gtao_browse_crews":"Przeglądaj ekipy","nav_gtao_career_progress":"Postępy kariery","nav_gtao_checklist":"Lista zadań","nav_gtao_community":"Społeczność","nav_gtao_community_series":"Seria społeczności","nav_gtao_crews":"Ekipy","nav_gtao_crews_create":"Stwórz ekipę","nav_gtao_cta_buy_now":"Kup teraz","nav_gtao_discover":"Odkryj","nav_gtao_emblem_editor":"Edytor emblematów","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Przewodniki","nav_gtao_jobs":"Akcje","nav_gtao_jobs_browse_all":"Przeglądaj akcje","nav_gtao_jobs_playlists":"Listy gier","nav_gtao_license_plate_creator":"Kreator tablic rejestracyjnych","nav_gtao_missions":"Misje","nav_gtao_my_character":"Moja postać","nav_gtao_my_crews":"Moje ekipy","nav_gtao_my_jobs":"Moje akcje","nav_gtao_overview":"Ogólny zarys","nav_gtao_photos":"Zdjęcia","nav_gtao_stats":"Statystyki","nav_gtao_story":"Fabuła","nav_gtao_support":"Wsparcie","nav_gtao_twitch_drops":"Dropy na Twitchu","nav_gtao_videos":"Filmy","nav_gtasanandreas_cta_buy_now":"Kup teraz","nav_gtav_accomplishments":"Osiągnięcia","nav_gtav_checklist":"Lista zadań","nav_gtav_community":"Społeczność","nav_gtav_community_series":"Seria społeczności","nav_gtav_create_crew":"Stwórz ekipę","nav_gtav_crews":"Ekipy","nav_gtav_crews_browse_all":"Przeglądaj ekipy","nav_gtav_cta_buy_now":"Kup teraz","nav_gtav_discover":"Odkryj","nav_gtav_emblem_editor":"Edytor emblematów","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Przewodniki","nav_gtav_jobs":"Akcje","nav_gtav_jobs_browse_all":"Przeglądaj akcje","nav_gtav_licence_plate_creator":"Kreator tablic rejestracyjnych","nav_gtav_missions":"Misje","nav_gtav_my_character":"Moja postać","nav_gtav_my_crews":"Moje ekipy","nav_gtav_my_jobs":"Moje akcje","nav_gtav_overview":"Ogólny zarys","nav_gtav_photos":"Zdjęcia","nav_gtav_playlists":"Listy gier","nav_gtav_stats":"Statystyki","nav_gtav_story":"Fabuła","nav_gtav_support":"Wsparcie","nav_gtav_videos":"Filmy","nav_gtavc_cta_buy_now":"Kup teraz","nav_gtavc_discover":"Odkryj","nav_gtavcs_discover":"Odkryj","nav_lanoire_accomplishments":"Osiągnięcia","nav_lanoire_badge_pursuit":"Pościg za odznaką","nav_lanoire_case_tracker":"Wykaz spraw","nav_lanoire_checklist":"Lista zadań","nav_lanoire_cta_buy_now":"Kup teraz","nav_lanoire_official_site":"Oficjalna strona","nav_lanoire_overview":"Ogólny zarys","nav_lanoire_pc_console":"PC/konsola","nav_lanoire_progress":"Postępy","nav_lanoire_stats":"Statystyki","nav_lanoire_support":"Wsparcie","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Zamknij menu","nav_mobilemenu_open":"Otwórz menu","nav_mobilemenu_title":"Menu nawigacji","nav_more_dropdown":"Więcej","nav_mp3_accomplishments":"Osiągnięcia","nav_mp3_career":"Kariera","nav_mp3_chapters":"Rozdziały","nav_mp3_checklist":"Lista zadań","nav_mp3_checkpoint_challenge":"Wyzwanie punktów kontrolnych","nav_mp3_crews":"Ekipy","nav_mp3_cta_buy_now":"Kup teraz","nav_mp3_featured":"Wyróżnione","nav_mp3_grinds":"Zadania","nav_mp3_leaderboards":"Rankingi","nav_mp3_multiplayer":"Tryb wieloosobowy","nav_mp3_news":"Nowości","nav_mp3_ny_minute":"W mgnieniu oka","nav_mp3_official_site":"Oficjalna strona","nav_mp3_overview":"Ogólny zarys","nav_mp3_progress":"Postępy","nav_mp3_score_attack":"Atak na wynik","nav_mp3_singleplayer":"Gra jednoosobowa","nav_mp3_specifications":"Wymagania","nav_mp3_support":"Wsparcie","nav_mp3_weapons":"Broń","nav_opens_in_new_window":"{text} (Odnośnik otworzy nowe okno)","nav_quick_access_games":"Gry","nav_quick_access_home":"Strona główna","nav_quick_access_newswire":"Newswire","nav_rdo_accomplishments":"Osiągnięcia","nav_rdo_awards":"Nagrody","nav_rdo_benefits":"Korzyści","nav_rdo_catalogue":"Katalog","nav_rdo_club_rewards":"Nagrody klubowe","nav_rdo_community":"Społeczność","nav_rdo_competitive_series":"Seria rywalizacji","nav_rdo_cta_buy_now":"Kup teraz","nav_rdo_customization":"Personalizacja","nav_rdo_explore":"Eksploruj","nav_rdo_getting_started":"Pierwsze kroki","nav_rdo_guides":"Przewodniki","nav_rdo_my_character":"Moja postać","nav_rdo_overview":"Ogólny zarys","nav_rdo_photos":"Zdjęcia","nav_rdo_posses":"Bandy","nav_rdo_posses_free_roam":"Bandy i gra swobodna","nav_rdo_progress":"Postępy","nav_rdo_progression":"Postępy","nav_rdo_rank_unlocks":"Nagrody za rangi","nav_rdo_roles":"Role","nav_rdo_specialist_roles":"Role specjalistyczne","nav_rdo_story_missions":"Misje fabularne","nav_rdo_support":"Wsparcie","nav_rdr2_accomplishments":"Osiągnięcia","nav_rdr2_artwork":"Grafiki","nav_rdr2_catalogue":"Katalog","nav_rdr2_challenges":"Wyzwania","nav_rdr2_chapters":"Rozdziały","nav_rdr2_character":"Postać","nav_rdr2_compendium":"Kompendium","nav_rdr2_cta_buy_now":"Kup teraz","nav_rdr2_explore":"Eksploruj","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Miejsca","nav_rdr2_media":"Multimedia","nav_rdr2_music":"Muzyka","nav_rdr2_online":"Online","nav_rdr2_overview":"Ogólny zarys","nav_rdr2_progress":"Postępy","nav_rdr2_stats":"Statystyki","nav_rdr2_support":"Wsparcie","nav_rdr2_van_der_linde_gang":"Gang van der Lindego","nav_rdr2_videos":"Filmy","nav_rdr2_weaponry":"Broń","nav_rdr2_wildlife":"Zwierzęta","nav_rdr_cta_buy_now":"Kup teraz","nav_rockstargames_external_link":"Zewnętrzny","nav_rockstargames_home":"Strona główna Rockstar Games","nav_rockstargames_logo":"Kliknij, aby otworzyć menu","nav_rsg_community_guidelines":"Wskazówki społeczności","nav_rsg_downloads":"Do pobrania","nav_rsg_games":"Gry","nav_rsg_newswire":"Newswire","nav_rsg_store":"Sklep","nav_rsg_support":"Wsparcie","nav_rsg_videos":"Filmy","nav_search_error_too_short":"Wyszukiwana fraza jest za krótka. Musi ona składać się z co najmniej {count} znaków.","nav_search_error_too_short_invalid_chars":"Wyszukiwana fraza zawiera nieobsługiwane znaki ({invalidChars}). Usuń je i spróbuj ponownie.","nav_support_dashboard":"Panel użytkownika","nav_support_home":"Strona główna","nav_support_service_status":"Status usługi","nav_support_submit_ticket":"Wyślij zgłoszenie","nav_thewarriors_cta_buy_now":"Kup teraz","nav_undeadnightmare_buy_now":"Kup teraz","nav_undeadnightmare_discover":"Odkryj","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informacje","nav_undeadnightmare_media":"Multimedia","nav_undeadnightmare_news":"Nowości","nav_undeadnightmare_ps3_digital":"PS3 – wersja cyfrowa","nav_undeadnightmare_specs":"Wymagania","nav_undeadnightmare_suport":"Wsparcie","nav_undeadnightmare_videos":"Filmy","nav_undeadnightmare_xbox360_digital":"Xbox 360 – wersja cyfrowa","nav_view_all_games":"Pokaż wszystko","nofications_new":"Nowe powiadomienia","quick_access_title":"Rockstar Games","sc_link_account":"Konto","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży i udostępniania moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_legal":"Informacje prawne","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","search_action":"Szukaj","search_close_button":"Zamknij wyszukiwanie","search_open_button":"Rozpocznij wyszukiwanie","search_placeholder":"Przeszukaj Rockstar Games...","search_target_aria_label":"Wyszukaj: {target}","search_target_community":"Społeczność","search_target_crews":"Ekipy","search_target_games":"Gry","search_target_jobs":"Akcje","search_target_posts":"Wpisy","search_target_users":"Użytkownicy","search_target_videos":"Filmy"},"pt-BR":{"accessibility_skip_button":"Pular o menu","avatar_menu_close":"Fechar menu de jogador","avatar_menu_open":"Abrir menu de jogador","avatarmenu_logout":"Sair","avatarmenu_selectlanguage":"Selecione um idioma","avatarmenu_signin":"Iniciar sessão","avatarmenu_signup":"Inscrever-se","banner_rockstargames_collapsed_legal_cta_aria_label":"Conteúdo do banner recolhido","banner_rockstargames_collapsed_legal_cta_label":"Saiba mais","banner_rockstargames_collapsed_legal_text":"Nossos termos jurídicos mudaram em 28 de fevereiro de 2024.","banner_rockstargames_gift_cta":"Obtenha um carro esportivo de graça no GTA Online","banner_rockstargames_gift_text":"Até 18 de março, resgate um Obey 8F Drafter grátis.","games_menu_featured":"Jogos em destaque","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Jogos","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Ver tudo","nav_avatarmenu_title":"Menu de avatar","nav_bully_Overview":"Suporte","nav_bully_accomplishments":"Conquistas","nav_bully_cta_buy_now":"Compre já","nav_bully_game_overview":"Descobrir","nav_bully_videos":"Vídeos","nav_careers_careers_on_linkedin":"Carreiras no LinkedIn","nav_careers_contact_us":"Entre em contato","nav_careers_home":"Início","nav_careers_openings":"Vagas","nav_cta_get_launcher":"Obter Launcher","nav_gta3_cta_buy_now":"Compre já","nav_gta_trilogy_accomplishments":"Conquistas","nav_gta_trilogy_cta_buy_now":"Compre já","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Visão geral","nav_gta_trilogy_support":"Suporte","nav_gtaiv_accomplishments":"Conquistas","nav_gtaiv_cta_buy_now":"Compre já","nav_gtaiv_overview":"Descobrir","nav_gtaiv_support":"Suporte","nav_gtaiveflc_accomplishments":"Conquistas","nav_gtaiveflc_cta_buy_now":"Compre já","nav_gtaiveflc_overview":"Visão geral","nav_gtaiveflc_support":"Suporte","nav_gtao_accomplishments":"Conquistas","nav_gtao_browse_crews":"Ver todos os Comandos","nav_gtao_career_progress":"Progresso da Carreira","nav_gtao_checklist":"Lista de progresso","nav_gtao_community":"Comunidade","nav_gtao_community_series":"Comunidade em Série","nav_gtao_crews":"Comandos","nav_gtao_crews_create":"Criar um Comando","nav_gtao_cta_buy_now":"Compre já","nav_gtao_discover":"Descobrir","nav_gtao_emblem_editor":"Editor de Emblema","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Guias","nav_gtao_jobs":"Serviços","nav_gtao_jobs_browse_all":"Ver todos os serviços","nav_gtao_jobs_playlists":"Listas de jogos","nav_gtao_license_plate_creator":"Criador de Placas","nav_gtao_missions":"Missões","nav_gtao_my_character":"Meu personagem","nav_gtao_my_crews":"Meus Comandos","nav_gtao_my_jobs":"Meus serviços","nav_gtao_overview":"Visão geral","nav_gtao_photos":"Fotos","nav_gtao_stats":"Estatísticas","nav_gtao_story":"História","nav_gtao_support":"Suporte","nav_gtao_twitch_drops":"Drops da Twitch","nav_gtao_videos":"Vídeos","nav_gtasanandreas_cta_buy_now":"Compre já","nav_gtav_accomplishments":"Conquistas","nav_gtav_checklist":"Lista de progresso","nav_gtav_community":"Comunidade","nav_gtav_community_series":"Comunidade em Série","nav_gtav_create_crew":"Criar um Comando","nav_gtav_crews":"Comandos","nav_gtav_crews_browse_all":"Ver todos os Comandos","nav_gtav_cta_buy_now":"Compre já","nav_gtav_discover":"Descobrir","nav_gtav_emblem_editor":"Editor de Emblema","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Guias","nav_gtav_jobs":"Serviços","nav_gtav_jobs_browse_all":"Ver todos os serviços","nav_gtav_licence_plate_creator":"Criador de Placas","nav_gtav_missions":"Missões","nav_gtav_my_character":"Meu personagem","nav_gtav_my_crews":"Meus Comandos","nav_gtav_my_jobs":"Meus serviços","nav_gtav_overview":"Visão geral","nav_gtav_photos":"Fotos","nav_gtav_playlists":"Listas de jogos","nav_gtav_stats":"Estatísticas","nav_gtav_story":"História","nav_gtav_support":"Suporte","nav_gtav_videos":"Vídeos","nav_gtavc_cta_buy_now":"Compre já","nav_gtavc_discover":"Descobrir","nav_gtavcs_discover":"Descobrir","nav_lanoire_accomplishments":"Conquistas","nav_lanoire_badge_pursuit":"Distintivos escondidos","nav_lanoire_case_tracker":"Rastreador de Casos","nav_lanoire_checklist":"Lista de progresso","nav_lanoire_cta_buy_now":"Compre já","nav_lanoire_official_site":"Site oficial","nav_lanoire_overview":"Visão geral","nav_lanoire_pc_console":"PC/Console","nav_lanoire_progress":"Progresso","nav_lanoire_stats":"Estatísticas","nav_lanoire_support":"Suporte","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Fechar menu","nav_mobilemenu_open":"Abrir menu","nav_mobilemenu_title":"Menu de navegação","nav_more_dropdown":"Mais","nav_mp3_accomplishments":"Conquistas","nav_mp3_career":"Carreira","nav_mp3_chapters":"Capítulos","nav_mp3_checklist":"Lista de progresso","nav_mp3_checkpoint_challenge":"Desafio Checkpoint","nav_mp3_crews":"Comandos","nav_mp3_cta_buy_now":"Compre já","nav_mp3_featured":"Em destaque","nav_mp3_grinds":"Desafios","nav_mp3_leaderboards":"Placares de líderes","nav_mp3_multiplayer":"Multijogador","nav_mp3_news":"Novidades","nav_mp3_ny_minute":"Um Minuto de Nova York","nav_mp3_official_site":"Site oficial","nav_mp3_overview":"Visão geral","nav_mp3_progress":"Progresso","nav_mp3_score_attack":"Modo de Pontuação","nav_mp3_singleplayer":"Jogo individual","nav_mp3_specifications":"Especificações","nav_mp3_support":"Suporte","nav_mp3_weapons":"Armas","nav_opens_in_new_window":"{text} (O link abre em uma nova janela)","nav_quick_access_games":"Jogos","nav_quick_access_home":"Início","nav_quick_access_newswire":"Boletim","nav_rdo_accomplishments":"Conquistas","nav_rdo_awards":"Prêmios","nav_rdo_benefits":"Benefícios","nav_rdo_catalogue":"Catálogo","nav_rdo_club_rewards":"Prêmios do Clube","nav_rdo_community":"Comunidade","nav_rdo_competitive_series":"Séries Competitivas","nav_rdo_cta_buy_now":"Compre já","nav_rdo_customization":"Personalização","nav_rdo_explore":"Explorar","nav_rdo_getting_started":"Primeiros passos","nav_rdo_guides":"Guias","nav_rdo_my_character":"Meu personagem","nav_rdo_overview":"Visão geral","nav_rdo_photos":"Fotos","nav_rdo_posses":"Bandos","nav_rdo_posses_free_roam":"Bandos e Modo Livre","nav_rdo_progress":"Progresso","nav_rdo_progression":"Progressão","nav_rdo_rank_unlocks":"Desbloqueios por Nível","nav_rdo_roles":"Ofícios","nav_rdo_specialist_roles":"Ofícios Especializados","nav_rdo_story_missions":"Missões de História","nav_rdo_support":"Suporte","nav_rdr2_accomplishments":"Conquistas","nav_rdr2_artwork":"Arte","nav_rdr2_catalogue":"Catálogo","nav_rdr2_challenges":"Desafios","nav_rdr2_chapters":"Capítulos","nav_rdr2_character":"Personagem","nav_rdr2_compendium":"Compêndio","nav_rdr2_cta_buy_now":"Compre já","nav_rdr2_explore":"Explorar","nav_rdr2_gallery":"Galeria","nav_rdr2_locations":"Locais","nav_rdr2_media":"Mídia","nav_rdr2_music":"Música","nav_rdr2_online":"Online","nav_rdr2_overview":"Visão geral","nav_rdr2_progress":"Progresso","nav_rdr2_stats":"Estatísticas","nav_rdr2_support":"Suporte","nav_rdr2_van_der_linde_gang":"Gangue Van der Linde","nav_rdr2_videos":"Vídeos","nav_rdr2_weaponry":"Armas","nav_rdr2_wildlife":"Vida Selvagem","nav_rdr_cta_buy_now":"Compre já","nav_rockstargames_external_link":"Externo","nav_rockstargames_home":"Rockstar Games – Início","nav_rockstargames_logo":"Clique para abrir o menu","nav_rsg_community_guidelines":"Regras da Comunidade","nav_rsg_downloads":"Downloads","nav_rsg_games":"Jogos","nav_rsg_newswire":"Boletim","nav_rsg_store":"Loja","nav_rsg_support":"Suporte","nav_rsg_videos":"Vídeos","nav_search_error_too_short":"Seu termo de busca é curto demais. Os termos de busca devem ter, no mínimo, {count} caracteres.","nav_search_error_too_short_invalid_chars":"Seu termo de busca contém caracteres inválidos ({invalidChars}). Remova-os e tente novamente.","nav_support_dashboard":"Meu painel","nav_support_home":"Início","nav_support_service_status":"Status do serviço","nav_support_submit_ticket":"Enviar uma solicitação","nav_thewarriors_cta_buy_now":"Compre já","nav_undeadnightmare_buy_now":"Compre já","nav_undeadnightmare_discover":"Descobrir","nav_undeadnightmare_gallery":"Galeria","nav_undeadnightmare_info":"Informações","nav_undeadnightmare_media":"Mídia","nav_undeadnightmare_news":"Novidades","nav_undeadnightmare_ps3_digital":"PS3 - Digital","nav_undeadnightmare_specs":"Especificações","nav_undeadnightmare_suport":"Suporte","nav_undeadnightmare_videos":"Vídeos","nav_undeadnightmare_xbox360_digital":"Xbox 360 - Digital","nav_view_all_games":"Ver tudo","nofications_new":"Novas notificações","quick_access_title":"Rockstar Games","sc_link_account":"Conta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não compartilhem minhas informações pessoais","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_legal":"Aviso legal","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","search_action":"Buscar","search_close_button":"Fechar busca","search_open_button":"Abrir busca","search_placeholder":"Buscar em Rockstar Games...","search_target_aria_label":"Buscar {target}","search_target_community":"Comunidade","search_target_crews":"Comandos","search_target_games":"Jogos","search_target_jobs":"Serviços","search_target_posts":"Publicações","search_target_users":"Usuários","search_target_videos":"Vídeos"},"ru-RU":{"accessibility_skip_button":"Пропустить меню","avatar_menu_close":"Закрыть меню игрока","avatar_menu_open":"Открыть меню игрока","avatarmenu_logout":"Выход","avatarmenu_selectlanguage":"Выбрать язык","avatarmenu_signin":"Войти","avatarmenu_signup":"Регистрация","banner_rockstargames_collapsed_legal_cta_aria_label":"Содержимое складывающегося баннера","banner_rockstargames_collapsed_legal_cta_label":"Подробности","banner_rockstargames_collapsed_legal_text":"Наши юридические условия изменились 28 февраля 2024 г.","banner_rockstargames_gift_cta":"Получите спорткар в GTA Online бесплатно.","banner_rockstargames_gift_text":"До 18 марта вы можете бесплатно получить Obey 8F Drafter.","games_menu_featured":"Избранные игры","games_menu_gta_online":"Grand Theft Auto Online","games_menu_gta_trilogy":"Grand Theft Auto: The Trilogy","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"Игры","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead Online","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"Показать все","nav_avatarmenu_title":"Меню аватара","nav_bully_Overview":"Поддержка","nav_bully_accomplishments":"Достижения","nav_bully_cta_buy_now":"Купить","nav_bully_game_overview":"Об игре","nav_bully_videos":"Видеоролики","nav_careers_careers_on_linkedin":"Вакансии на LinkedIn","nav_careers_contact_us":"Свяжитесь с нами","nav_careers_home":"Главная страница","nav_careers_openings":"Вакансии","nav_cta_get_launcher":"Скачать RGL","nav_gta3_cta_buy_now":"Купить","nav_gta_trilogy_accomplishments":"Достижения","nav_gta_trilogy_cta_buy_now":"Купить","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA: San Andreas","nav_gta_trilogy_gtavc":"GTA: Vice City","nav_gta_trilogy_overview":"Описание","nav_gta_trilogy_support":"Поддержка","nav_gtaiv_accomplishments":"Достижения","nav_gtaiv_cta_buy_now":"Купить","nav_gtaiv_overview":"Об игре","nav_gtaiv_support":"Поддержка","nav_gtaiveflc_accomplishments":"Достижения","nav_gtaiveflc_cta_buy_now":"Купить","nav_gtaiveflc_overview":"Описание","nav_gtaiveflc_support":"Поддержка","nav_gtao_accomplishments":"Достижения","nav_gtao_browse_crews":"Посмотреть все банды","nav_gtao_career_progress":"Прогресс карьеры","nav_gtao_checklist":"Трекер","nav_gtao_community":"Сообщество","nav_gtao_community_series":"Серия сообщества","nav_gtao_crews":"Банды","nav_gtao_crews_create":"Создать банду","nav_gtao_cta_buy_now":"Купить","nav_gtao_discover":"Об игре","nav_gtao_emblem_editor":"Редактор эмблем","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA Online","nav_gtao_guides":"Руководства","nav_gtao_jobs":"Дела","nav_gtao_jobs_browse_all":"Посмотреть все дела","nav_gtao_jobs_playlists":"Плейлисты","nav_gtao_license_plate_creator":"Редактор номерных знаков","nav_gtao_missions":"Задания","nav_gtao_my_character":"Мой персонаж","nav_gtao_my_crews":"Мои банды","nav_gtao_my_jobs":"Мои дела","nav_gtao_overview":"Описание","nav_gtao_photos":"Фотографии","nav_gtao_stats":"Статистика","nav_gtao_story":"Сюжетный режим","nav_gtao_support":"Поддержка","nav_gtao_twitch_drops":"Twitch Drops","nav_gtao_videos":"Видеоролики","nav_gtasanandreas_cta_buy_now":"Купить","nav_gtav_accomplishments":"Достижения","nav_gtav_checklist":"Трекер","nav_gtav_community":"Сообщество","nav_gtav_community_series":"Серия сообщества","nav_gtav_create_crew":"Создать банду","nav_gtav_crews":"Банды","nav_gtav_crews_browse_all":"Посмотреть все банды","nav_gtav_cta_buy_now":"Купить","nav_gtav_discover":"Об игре","nav_gtav_emblem_editor":"Редактор эмблем","nav_gtav_gta_online":"GTA Online","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"Руководства","nav_gtav_jobs":"Дела","nav_gtav_jobs_browse_all":"Посмотреть все дела","nav_gtav_licence_plate_creator":"Редактор номерных знаков","nav_gtav_missions":"Задания","nav_gtav_my_character":"Мой персонаж","nav_gtav_my_crews":"Мои банды","nav_gtav_my_jobs":"Мои дела","nav_gtav_overview":"Описание","nav_gtav_photos":"Фотографии","nav_gtav_playlists":"Плейлисты","nav_gtav_stats":"Статистика","nav_gtav_story":"Сюжетный режим","nav_gtav_support":"Поддержка","nav_gtav_videos":"Видеоролики","nav_gtavc_cta_buy_now":"Купить","nav_gtavc_discover":"Об игре","nav_gtavcs_discover":"Об игре","nav_lanoire_accomplishments":"Достижения","nav_lanoire_badge_pursuit":"Значки","nav_lanoire_case_tracker":"Прогресс","nav_lanoire_checklist":"Трекер","nav_lanoire_cta_buy_now":"Купить","nav_lanoire_official_site":"Официальный сайт","nav_lanoire_overview":"Описание","nav_lanoire_pc_console":"На PC и консолях","nav_lanoire_progress":"Прогресс","nav_lanoire_stats":"Статистика","nav_lanoire_support":"Поддержка","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"Закрыть меню","nav_mobilemenu_open":"Открыть меню","nav_mobilemenu_title":"Меню навигации","nav_more_dropdown":"Дополнительно","nav_mp3_accomplishments":"Достижения","nav_mp3_career":"Карьера","nav_mp3_chapters":"Главы","nav_mp3_checklist":"Трекер","nav_mp3_checkpoint_challenge":"Контрольные точки","nav_mp3_crews":"Банды","nav_mp3_cta_buy_now":"Купить","nav_mp3_featured":"Избранные","nav_mp3_grinds":"Подвиги","nav_mp3_leaderboards":"Списки лидеров","nav_mp3_multiplayer":"Сетевая игра","nav_mp3_news":"Новости","nav_mp3_ny_minute":"Время не ждет","nav_mp3_official_site":"Официальный сайт","nav_mp3_overview":"Описание","nav_mp3_progress":"Прогресс","nav_mp3_score_attack":"Игра на очки","nav_mp3_singleplayer":"Одиночная игра","nav_mp3_specifications":"Системные требования","nav_mp3_support":"Поддержка","nav_mp3_weapons":"Оружие","nav_opens_in_new_window":"{text} (ссылка откроется в новом окне)","nav_quick_access_games":"Игры","nav_quick_access_home":"Главная страница","nav_quick_access_newswire":"Новостная лента","nav_rdo_accomplishments":"Достижения","nav_rdo_awards":"Награды","nav_rdo_benefits":"Бонусы","nav_rdo_catalogue":"Каталог","nav_rdo_club_rewards":"Награды клуба","nav_rdo_community":"Сообщество","nav_rdo_competitive_series":"Соревновательные серии","nav_rdo_cta_buy_now":"Купить","nav_rdo_customization":"Персонализация","nav_rdo_explore":"Об игре","nav_rdo_getting_started":"С чего начать","nav_rdo_guides":"Руководства","nav_rdo_my_character":"Мой персонаж","nav_rdo_overview":"Описание","nav_rdo_photos":"Фотографии","nav_rdo_posses":"Отряды","nav_rdo_posses_free_roam":"Отряды и свободный режим","nav_rdo_progress":"Прогресс","nav_rdo_progression":"Прогресс","nav_rdo_rank_unlocks":"Открываемые предметы","nav_rdo_roles":"Роли","nav_rdo_specialist_roles":"Роли","nav_rdo_story_missions":"Сюжетные задания","nav_rdo_support":"Поддержка","nav_rdr2_accomplishments":"Достижения","nav_rdr2_artwork":"Иллюстрации","nav_rdr2_catalogue":"Каталог","nav_rdr2_challenges":"Испытания","nav_rdr2_chapters":"Главы","nav_rdr2_character":"Игрок","nav_rdr2_compendium":"Справочник","nav_rdr2_cta_buy_now":"Купить","nav_rdr2_explore":"Об игре","nav_rdr2_gallery":"Галерея","nav_rdr2_locations":"Места на карте","nav_rdr2_media":"Медиаматериалы","nav_rdr2_music":"Музыка","nav_rdr2_online":"Сетевая игра","nav_rdr2_overview":"Описание","nav_rdr2_progress":"Прогресс","nav_rdr2_stats":"Статистика","nav_rdr2_support":"Поддержка","nav_rdr2_van_der_linde_gang":"Банда Ван дер Линде","nav_rdr2_videos":"Видеоролики","nav_rdr2_weaponry":"Оружие","nav_rdr2_wildlife":"Животные","nav_rdr_cta_buy_now":"Купить","nav_rockstargames_external_link":"Внешний адрес","nav_rockstargames_home":"Главная страница Rockstar Games","nav_rockstargames_logo":"Нажмите, чтобы открыть меню","nav_rsg_community_guidelines":"Правила сообщества","nav_rsg_downloads":"Загрузки","nav_rsg_games":"Игры","nav_rsg_newswire":"Новостная лента","nav_rsg_store":"Магазин","nav_rsg_support":"Поддержка","nav_rsg_videos":"Видеоролики","nav_search_error_too_short":"Слишком короткий поисковый запрос. Минимальное число символов в запросе – {count}.","nav_search_error_too_short_invalid_chars":"Поисковый запрос содержит некорректные символы ({invalidChars}). Удалите их и попробуйте еще раз.","nav_support_dashboard":"Панель управления","nav_support_home":"Главная страница","nav_support_service_status":"Состояние серверов","nav_support_submit_ticket":"Оставить запрос","nav_thewarriors_cta_buy_now":"Купить","nav_undeadnightmare_buy_now":"Купить","nav_undeadnightmare_discover":"Об игре","nav_undeadnightmare_gallery":"Галерея","nav_undeadnightmare_info":"Информация","nav_undeadnightmare_media":"Медиаматериалы","nav_undeadnightmare_news":"Новости","nav_undeadnightmare_ps3_digital":"PS3 – цифровая версия","nav_undeadnightmare_specs":"Системные требования","nav_undeadnightmare_suport":"Поддержка","nav_undeadnightmare_videos":"Видеоролики","nav_undeadnightmare_xbox360_digital":"Xbox 360 – цифровая версия","nav_view_all_games":"Показать все","nofications_new":"Новые уведомления","quick_access_title":"Rockstar Games","sc_link_account":"Учетная запись","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать и разглашать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_legal":"Юридическая информация","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","search_action":"Поиск","search_close_button":"Закрыть поиск","search_open_button":"Открыть поиск","search_placeholder":"Искать в Rockstar Games...","search_target_aria_label":"Искать в разделе: {target}","search_target_community":"Сообщество","search_target_crews":"Банды","search_target_games":"Игры","search_target_jobs":"Дела","search_target_posts":"Сообщения","search_target_users":"Пользователи","search_target_videos":"Видеоролики"},"zh-CN":{"accessibility_skip_button":"跳过菜单","avatar_menu_close":"关闭玩家菜单","avatar_menu_open":"打开玩家菜单","avatarmenu_logout":"登出","avatarmenu_selectlanguage":"选择一种语言","avatarmenu_signin":"登录","avatarmenu_signup":"注册","banner_rockstargames_collapsed_legal_cta_aria_label":"折叠式横幅内容","banner_rockstargames_collapsed_legal_cta_label":"了解更多","banner_rockstargames_collapsed_legal_text":"我们的法律条款将于 2024 年 2 月 28 日变更。","banner_rockstargames_gift_cta":"在 GTA 在线模式中获取一辆免费跑车","banner_rockstargames_gift_text":"即日起至 3 月 18 日，可免费领取一辆奥北 8F 尾随者","games_menu_featured":"精选游戏","games_menu_gta_online":"Grand Theft Auto 在线模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"游戏","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 在线模式","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"查看全部","nav_avatarmenu_title":"头像菜单","nav_bully_Overview":"支持","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"马上购买","nav_bully_game_overview":"发现","nav_bully_videos":"视频","nav_careers_careers_on_linkedin":"通过 LinkedIn 应聘","nav_careers_contact_us":"联系我们","nav_careers_home":"主页","nav_careers_openings":"空缺职位","nav_cta_get_launcher":"获取 Launcher","nav_gta3_cta_buy_now":"马上购买","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"马上购买","nav_gta_trilogy_gta3":"GTA 3","nav_gta_trilogy_gtasa":"GTA:San Andreas","nav_gta_trilogy_gtavc":"GTA:Vice City","nav_gta_trilogy_overview":"概况","nav_gta_trilogy_support":"支持","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"马上购买","nav_gtaiv_overview":"发现","nav_gtaiv_support":"支持","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_cta_buy_now":"马上购买","nav_gtaiveflc_overview":"概况","nav_gtaiveflc_support":"支持","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"浏览所有帮会","nav_gtao_career_progress":"职业进度","nav_gtao_checklist":"清单","nav_gtao_community":"社区","nav_gtao_community_series":"社区系列","nav_gtao_crews":"帮会","nav_gtao_crews_create":"创建帮会","nav_gtao_cta_buy_now":"马上购买","nav_gtao_discover":"发现","nav_gtao_emblem_editor":"徽章编辑器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 在线模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"浏览所有差事","nav_gtao_jobs_playlists":"游玩清单","nav_gtao_license_plate_creator":"车牌制作器","nav_gtao_missions":"任务","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的帮会","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"概况","nav_gtao_photos":"照片","nav_gtao_stats":"统计数据","nav_gtao_story":"故事","nav_gtao_support":"支持","nav_gtao_twitch_drops":"Twitch Drops","nav_gtao_videos":"视频","nav_gtasanandreas_cta_buy_now":"马上购买","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清单","nav_gtav_community":"社区","nav_gtav_community_series":"社区系列","nav_gtav_create_crew":"创建帮会","nav_gtav_crews":"帮会","nav_gtav_crews_browse_all":"浏览所有帮会","nav_gtav_cta_buy_now":"马上购买","nav_gtav_discover":"发现","nav_gtav_emblem_editor":"徽章编辑器","nav_gtav_gta_online":"GTA 在线模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"浏览所有差事","nav_gtav_licence_plate_creator":"车牌制作器","nav_gtav_missions":"任务","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的帮会","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"概况","nav_gtav_photos":"照片","nav_gtav_playlists":"游玩清单","nav_gtav_stats":"统计数据","nav_gtav_story":"故事","nav_gtav_support":"支持","nav_gtav_videos":"视频","nav_gtavc_cta_buy_now":"马上购买","nav_gtavc_discover":"发现","nav_gtavcs_discover":"发现","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"收集警徽","nav_lanoire_case_tracker":"案件纪录","nav_lanoire_checklist":"清单","nav_lanoire_cta_buy_now":"马上购买","nav_lanoire_official_site":"官方网站","nav_lanoire_overview":"概况","nav_lanoire_pc_console":"PC/主机","nav_lanoire_progress":"进度","nav_lanoire_stats":"统计数据","nav_lanoire_support":"支持","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"关闭菜单","nav_mobilemenu_open":"打开菜单","nav_mobilemenu_title":"导航菜单","nav_more_dropdown":"更多内容","nav_mp3_accomplishments":"成就","nav_mp3_career":"职业生涯","nav_mp3_chapters":"章节","nav_mp3_checklist":"清单","nav_mp3_checkpoint_challenge":"检查点挑战","nav_mp3_crews":"帮会","nav_mp3_cta_buy_now":"马上购买","nav_mp3_featured":"精选","nav_mp3_grinds":"挑战","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人游戏","nav_mp3_news":"新闻","nav_mp3_ny_minute":"纽约一分钟","nav_mp3_official_site":"官方网站","nav_mp3_overview":"概况","nav_mp3_progress":"进度","nav_mp3_score_attack":"分数挑战","nav_mp3_singleplayer":"单人游戏","nav_mp3_specifications":"配置","nav_mp3_support":"支持","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新窗口中打开链接）","nav_quick_access_games":"游戏","nav_quick_access_home":"主页","nav_quick_access_newswire":"新闻专线","nav_rdo_accomplishments":"成就","nav_rdo_awards":"奖章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目录","nav_rdo_club_rewards":"俱乐部奖励","nav_rdo_community":"社区","nav_rdo_competitive_series":"竞技系列","nav_rdo_cta_buy_now":"马上购买","nav_rdo_customization":"自定义","nav_rdo_explore":"探索","nav_rdo_getting_started":"新手上路","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"概况","nav_rdo_photos":"照片","nav_rdo_posses":"团队","nav_rdo_posses_free_roam":"团队和自由模式","nav_rdo_progress":"进度","nav_rdo_progression":"进程","nav_rdo_rank_unlocks":"等级解锁","nav_rdo_roles":"职业","nav_rdo_specialist_roles":"专家职业","nav_rdo_story_missions":"故事任务","nav_rdo_support":"支持","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"艺术作品","nav_rdr2_catalogue":"目录","nav_rdr2_challenges":"挑战","nav_rdr2_chapters":"章节","nav_rdr2_character":"角色","nav_rdr2_compendium":"生涯","nav_rdr2_cta_buy_now":"马上购买","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相册","nav_rdr2_locations":"地点","nav_rdr2_media":"媒体","nav_rdr2_music":"音乐","nav_rdr2_online":"在线模式","nav_rdr2_overview":"概况","nav_rdr2_progress":"进度","nav_rdr2_stats":"统计数据","nav_rdr2_support":"支持","nav_rdr2_van_der_linde_gang":"范德林德帮","nav_rdr2_videos":"视频","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生动物","nav_rdr_cta_buy_now":"马上购买","nav_rockstargames_external_link":"外部","nav_rockstargames_home":"Rockstar Games 主页","nav_rockstargames_logo":"点击打开菜单","nav_rsg_community_guidelines":"社区指南","nav_rsg_downloads":"下载","nav_rsg_games":"游戏","nav_rsg_newswire":"新闻专线","nav_rsg_store":"商店","nav_rsg_support":"支持","nav_rsg_videos":"视频","nav_search_error_too_short":"您的搜索词条太短。词条长度必须至少为 {count} 个字符。","nav_search_error_too_short_invalid_chars":"您的搜索词条包含无效字符（{invalidChars}）。请删除这些无效字符并重试。","nav_support_dashboard":"个人中心","nav_support_home":"主页","nav_support_service_status":"服务状态","nav_support_submit_ticket":"提交请求","nav_thewarriors_cta_buy_now":"马上购买","nav_undeadnightmare_buy_now":"马上购买","nav_undeadnightmare_discover":"发现","nav_undeadnightmare_gallery":"相册","nav_undeadnightmare_info":"信息","nav_undeadnightmare_media":"媒体","nav_undeadnightmare_news":"新闻","nav_undeadnightmare_ps3_digital":"PS3 - 数字版","nav_undeadnightmare_specs":"配置","nav_undeadnightmare_suport":"支持","nav_undeadnightmare_videos":"视频","nav_undeadnightmare_xbox360_digital":"Xbox 360 - 数字版","nav_view_all_games":"查看全部","nofications_new":"新通知","quick_access_title":"Rockstar Games","sc_link_account":"账户","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售或分享我的个人信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_legal":"法律声明","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","search_action":"搜索","search_close_button":"关闭搜索","search_open_button":"打开搜索","search_placeholder":"搜索 Rockstar Games……","search_target_aria_label":"搜索 {target}","search_target_community":"社区","search_target_crews":"帮会","search_target_games":"游戏","search_target_jobs":"差事","search_target_posts":"帖子","search_target_users":"用户","search_target_videos":"视频"},"zh-TW":{"accessibility_skip_button":"跳過選單","avatar_menu_close":"關閉玩家選單","avatar_menu_open":"開啟玩家選單","avatarmenu_logout":"登出","avatarmenu_selectlanguage":"選擇語言","avatarmenu_signin":"登入","avatarmenu_signup":"註冊","banner_rockstargames_collapsed_legal_cta_aria_label":"關閉橫幅內容","banner_rockstargames_collapsed_legal_cta_label":"了解更多","banner_rockstargames_collapsed_legal_text":"我們的法律聲明條款於 2024 年 2 月 28 日進行變更。","banner_rockstargames_gift_cta":"在 GTA 線上模式免費取得一輛跑車","banner_rockstargames_gift_text":"即日起至 3 月 18 日止，免費領取一輛奧北 8F 尾流王者。","games_menu_featured":"精選遊戲","games_menu_gta_online":"Grand Theft Auto 線上模式","games_menu_gta_trilogy":"Grand Theft Auto：三部曲","games_menu_gta_v":"Grand Theft Auto V","games_menu_item":"遊戲","games_menu_rdr":"Red Dead Redemption","games_menu_rdr_2":"Red Dead Redemption 2","games_menu_rdr_online":"Red Dead 線上模式","games_menu_vi":"Grand Theft Auto VI","games_menu_view_all":"檢視全部","nav_avatarmenu_title":"虛擬人偶選單","nav_bully_Overview":"支援","nav_bully_accomplishments":"成就","nav_bully_cta_buy_now":"馬上購買","nav_bully_game_overview":"探索","nav_bully_videos":"影片","nav_careers_careers_on_linkedin":"LinkedIn 上的工作機會","nav_careers_contact_us":"聯絡我們","nav_careers_home":"首頁","nav_careers_openings":"工作機會","nav_cta_get_launcher":"取得 Launcher","nav_gta3_cta_buy_now":"馬上購買","nav_gta_trilogy_accomplishments":"成就","nav_gta_trilogy_cta_buy_now":"馬上購買","nav_gta_trilogy_gta3":"GTA III","nav_gta_trilogy_gtasa":"GTA:San Andreas","nav_gta_trilogy_gtavc":"GTA:Vice City","nav_gta_trilogy_overview":"總覽","nav_gta_trilogy_support":"支援","nav_gtaiv_accomplishments":"成就","nav_gtaiv_cta_buy_now":"馬上購買","nav_gtaiv_overview":"探索","nav_gtaiv_support":"支援","nav_gtaiveflc_accomplishments":"成就","nav_gtaiveflc_cta_buy_now":"馬上購買","nav_gtaiveflc_overview":"總覽","nav_gtaiveflc_support":"支援","nav_gtao_accomplishments":"成就","nav_gtao_browse_crews":"瀏覽全部幫會","nav_gtao_career_progress":"生涯進度","nav_gtao_checklist":"清單","nav_gtao_community":"社群","nav_gtao_community_series":"社群系列賽","nav_gtao_crews":"幫會","nav_gtao_crews_create":"建立幫會","nav_gtao_cta_buy_now":"馬上購買","nav_gtao_discover":"探索","nav_gtao_emblem_editor":"徽記編輯器","nav_gtao_gta_plus":"GTA+","nav_gtao_gtao":"GTA 線上模式","nav_gtao_guides":"指南","nav_gtao_jobs":"差事","nav_gtao_jobs_browse_all":"瀏覽全部差事","nav_gtao_jobs_playlists":"遊玩清單","nav_gtao_license_plate_creator":"車牌製作器","nav_gtao_missions":"任務","nav_gtao_my_character":"我的角色","nav_gtao_my_crews":"我的幫會","nav_gtao_my_jobs":"我的差事","nav_gtao_overview":"總覽","nav_gtao_photos":"相片","nav_gtao_stats":"統計資料","nav_gtao_story":"故事","nav_gtao_support":"支援","nav_gtao_twitch_drops":"Twitch 掉寶","nav_gtao_videos":"影片","nav_gtasanandreas_cta_buy_now":"馬上購買","nav_gtav_accomplishments":"成就","nav_gtav_checklist":"清單","nav_gtav_community":"社群","nav_gtav_community_series":"社群系列賽","nav_gtav_create_crew":"建立幫會","nav_gtav_crews":"幫會","nav_gtav_crews_browse_all":"瀏覽全部幫會","nav_gtav_cta_buy_now":"馬上購買","nav_gtav_discover":"探索","nav_gtav_emblem_editor":"徽記編輯器","nav_gtav_gta_online":"GTA 線上模式","nav_gtav_gta_plus":"GTA+","nav_gtav_guides":"指南","nav_gtav_jobs":"差事","nav_gtav_jobs_browse_all":"瀏覽全部差事","nav_gtav_licence_plate_creator":"車牌製作器","nav_gtav_missions":"任務","nav_gtav_my_character":"我的角色","nav_gtav_my_crews":"我的幫會","nav_gtav_my_jobs":"我的差事","nav_gtav_overview":"總覽","nav_gtav_photos":"相片","nav_gtav_playlists":"遊玩清單","nav_gtav_stats":"統計資料","nav_gtav_story":"故事","nav_gtav_support":"支援","nav_gtav_videos":"影片","nav_gtavc_cta_buy_now":"馬上購買","nav_gtavc_discover":"探索","nav_gtavcs_discover":"探索","nav_lanoire_accomplishments":"成就","nav_lanoire_badge_pursuit":"尋找警徽","nav_lanoire_case_tracker":"案件追蹤器","nav_lanoire_checklist":"清單","nav_lanoire_cta_buy_now":"馬上購買","nav_lanoire_official_site":"官方網站","nav_lanoire_overview":"總覽","nav_lanoire_pc_console":"PC/遊戲主機","nav_lanoire_progress":"進度","nav_lanoire_stats":"統計資料","nav_lanoire_support":"支援","nav_lanoire_vr_case_files":"VR Case Files","nav_mobilemenu_close":"關閉選單","nav_mobilemenu_open":"開啟選單","nav_mobilemenu_title":"導覽選單","nav_more_dropdown":"更多","nav_mp3_accomplishments":"成就","nav_mp3_career":"生涯","nav_mp3_chapters":"章節","nav_mp3_checklist":"清單","nav_mp3_checkpoint_challenge":"檢查點挑戰","nav_mp3_crews":"幫會","nav_mp3_cta_buy_now":"馬上購買","nav_mp3_featured":"精選","nav_mp3_grinds":"挑戰","nav_mp3_leaderboards":"排行榜","nav_mp3_multiplayer":"多人遊戲","nav_mp3_news":"新聞","nav_mp3_ny_minute":"分秒必爭","nav_mp3_official_site":"官方網站","nav_mp3_overview":"總覽","nav_mp3_progress":"進度","nav_mp3_score_attack":"奪取高分","nav_mp3_singleplayer":"單人遊戲","nav_mp3_specifications":"規格","nav_mp3_support":"支援","nav_mp3_weapons":"武器","nav_opens_in_new_window":"{text}（在新視窗開啟連結）","nav_quick_access_games":"遊戲","nav_quick_access_home":"首頁","nav_quick_access_newswire":"新聞放送","nav_rdo_accomplishments":"成就","nav_rdo_awards":"獎章","nav_rdo_benefits":"福利","nav_rdo_catalogue":"目錄","nav_rdo_club_rewards":"俱樂部獎勵","nav_rdo_community":"社群","nav_rdo_competitive_series":"競爭系列賽","nav_rdo_cta_buy_now":"馬上購買","nav_rdo_customization":"自訂","nav_rdo_explore":"探索","nav_rdo_getting_started":"準備開始","nav_rdo_guides":"指南","nav_rdo_my_character":"我的角色","nav_rdo_overview":"總覽","nav_rdo_photos":"相片","nav_rdo_posses":"武裝隊","nav_rdo_posses_free_roam":"武裝隊與浪跡模式","nav_rdo_progress":"進度","nav_rdo_progression":"發展","nav_rdo_rank_unlocks":"等級解鎖","nav_rdo_roles":"角色職業","nav_rdo_specialist_roles":"專家角色職業","nav_rdo_story_missions":"故事任務","nav_rdo_support":"支援","nav_rdr2_accomplishments":"成就","nav_rdr2_artwork":"插圖","nav_rdr2_catalogue":"目錄","nav_rdr2_challenges":"挑戰","nav_rdr2_chapters":"章節","nav_rdr2_character":"角色","nav_rdr2_compendium":"圖鑑","nav_rdr2_cta_buy_now":"馬上購買","nav_rdr2_explore":"探索","nav_rdr2_gallery":"相冊","nav_rdr2_locations":"地點","nav_rdr2_media":"媒體","nav_rdr2_music":"音樂","nav_rdr2_online":"線上模式","nav_rdr2_overview":"總覽","nav_rdr2_progress":"進度","nav_rdr2_stats":"統計資料","nav_rdr2_support":"支援","nav_rdr2_van_der_linde_gang":"范特林幫派","nav_rdr2_videos":"影片","nav_rdr2_weaponry":"武器","nav_rdr2_wildlife":"野生動物","nav_rdr_cta_buy_now":"馬上購買","nav_rockstargames_external_link":"外部","nav_rockstargames_home":"Rockstar Games 首頁","nav_rockstargames_logo":"點擊以開啟選單","nav_rsg_community_guidelines":"社群守則","nav_rsg_downloads":"下載","nav_rsg_games":"遊戲","nav_rsg_newswire":"新聞放送","nav_rsg_store":"商店","nav_rsg_support":"支援","nav_rsg_videos":"影片","nav_search_error_too_short":"您的搜尋字詞太短。搜尋字詞必須至少有 {count} 個字元。","nav_search_error_too_short_invalid_chars":"您的搜尋字詞含有無效字元（{invalidChars}）。請移除後再試一次。","nav_support_dashboard":"我的設定畫面","nav_support_home":"首頁","nav_support_service_status":"服務狀態","nav_support_submit_ticket":"提交請求","nav_thewarriors_cta_buy_now":"馬上購買","nav_undeadnightmare_buy_now":"馬上購買","nav_undeadnightmare_discover":"探索","nav_undeadnightmare_gallery":"相冊","nav_undeadnightmare_info":"資訊","nav_undeadnightmare_media":"媒體","nav_undeadnightmare_news":"新聞","nav_undeadnightmare_ps3_digital":"PS3：數位版","nav_undeadnightmare_specs":"規格","nav_undeadnightmare_suport":"支援","nav_undeadnightmare_videos":"影片","nav_undeadnightmare_xbox360_digital":"Xbox 360：數位版","nav_view_all_games":"檢視全部","nofications_new":"新通知","quick_access_title":"Rockstar Games","sc_link_account":"帳戶","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售或分享我的個人資訊","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_legal":"法律聲明","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","search_action":"搜尋","search_close_button":"關閉搜尋","search_open_button":"開啟搜尋","search_placeholder":"搜尋 Rockstar Games……","search_target_aria_label":"搜尋「{target}」","search_target_community":"社群","search_target_crews":"幫會","search_target_games":"遊戲","search_target_jobs":"差事","search_target_posts":"貼文","search_target_users":"使用者","search_target_videos":"影片"}}');
      var v = t(79867);
      const m = (0, l.createContext)({
          environment: {
            id: "",
            sites: {
              www: "",
              socialClub: "",
              support: "",
              store: "",
              supportNew: "supportNew"
            },
            cookieIdentifier: ""
          },
          navigationData: {
            site: "",
            brand: "rockstar",
            links: [],
            appearancePaths: ["/*"]
          },
          location: window.location,
          onNavigate: () => {},
          locale: "",
          rockstarUser: {
            id: 0,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          },
          openedDropdown: null,
          setOpenedDropdown: () => {},
          routeOptions: {
            isSearchPage: !1,
            forceSearch: !1
          },
          searchConfig: {
            targets: []
          }
        }),
        u = ({
          navData: e,
          location: a,
          onNavigate: t,
          routeOptions: n,
          children: s,
          searchConfig: _
        }) => {
          const [c, d] = (0, l.useState)(null), [g, u] = (0, l.useMemo)((() => (0, o.getLocale)()), []), {
            hash: p
          } = a, {
            data: h
          } = (0, i.useRockstarUser)(), f = (0, v.A)(), b = (0, l.useMemo)((() => {
            const s = {
              ...a,
              ...window.location
            };
            return {
              navigationData: e,
              onNavigate: t,
              environment: f,
              location: s,
              locale: g,
              rockstarUser: h,
              openedDropdown: c,
              setOpenedDropdown: d,
              routeOptions: n,
              searchConfig: _
            }
          }), [e, g, JSON.stringify(a), f, c, n, h]);
          return (0, l.useEffect)((() => {
            u(g.iso);
            const e = () => d(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, l.useEffect)((() => {
            const e = p?.replace("#", "");
            if (!e) return () => {};
            const a = setInterval((() => {
                const t = document.getElementById(e);
                t && (clearInterval(a), window.scrollTo({
                  top: t.offsetTop,
                  behavior: "smooth"
                }))
              }), 200),
              t = setTimeout((() => clearInterval(a)), 1e4);
            return () => {
              clearTimeout(t), clearInterval(a)
            }
          }), [p]), (0, r.jsx)(m.Provider, {
            value: b,
            children: s
          })
        },
        p = () => {
          const e = (0, l.useContext)(m);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        h = () => {
          const e = (0, l.useContext)(m);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        f = () => {
          const e = (0, l.useContext)(m);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: a,
            setOpenedDropdown: t
          } = e;
          return [a, e => {
            t(e === a ? null : e)
          }]
        },
        b = () => {
          const e = (0, l.useContext)(m);
          if (void 0 === e) throw new Error("useSearchConfig must be used within a Navigation Provider");
          return e.searchConfig
        },
        w = () => {
          const e = (0, l.useContext)(m);
          if (void 0 === e) throw new Error("useRouteOptions must be used within a Navigation Provider");
          return e.routeOptions
        },
        y = () => {
          const e = (0, l.useContext)(m);
          if (void 0 === e) throw new Error("useWindowLocation must be used within a Navigation Provider");
          return e.location
        },
        k = () => {
          const e = (0, l.useContext)(m);
          if (void 0 === e) throw new Error("useOnNavigate must be used within a Navigation Provider");
          return e.onNavigate
        };
      var x = t(13581);
      let M, C, T, j, S, G, A, I, P, L, N, R, O, D, z = () => M || "undefined" != typeof window && (M = window.gsap) && M.registerPlugin && M,
        E = 1,
        B = [],
        V = [],
        q = [],
        F = Date.now,
        H = (e, a) => a,
        W = (e, a) => ~q.indexOf(e) && q[q.indexOf(e) + 1][a],
        U = e => !!~N.indexOf(e),
        $ = (e, a, t, n, s) => e.addEventListener(a, t, {
          passive: !n,
          capture: !!s
        }),
        J = (e, a, t, n) => e.removeEventListener(a, t, !!n),
        Y = "scrollLeft",
        K = "scrollTop",
        X = () => R && R.isPressed || V.cache++,
        Q = (e, a) => {
          let t = n => {
            if (n || 0 === n) {
              E && (j.history.scrollRestoration = "manual");
              let a = R && R.isPressed;
              n = t.v = Math.round(n) || (R && R.iOS ? 1 : 0), e(n), t.cacheID = V.cache, a && H("ss", n)
            } else(a || V.cache !== t.cacheID || H("ref")) && (t.cacheID = V.cache, t.v = e());
            return t.v + t.offset
          };
          return t.offset = 0, e && t
        },
        Z = {
          s: Y,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: Q((function(e) {
            return arguments.length ? j.scrollTo(e, ee.sc()) : j.pageXOffset || S[Y] || G[Y] || A[Y] || 0
          }))
        },
        ee = {
          s: K,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: Z,
          sc: Q((function(e) {
            return arguments.length ? j.scrollTo(Z.sc(), e) : j.pageYOffset || S[K] || G[K] || A[K] || 0
          }))
        },
        ae = (e, a) => (a && a._ctx && a._ctx.selector || M.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== M.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        te = (e, {
          s: a,
          sc: t
        }) => {
          U(e) && (e = S.scrollingElement || G);
          let n = V.indexOf(e),
            s = t === ee.sc ? 1 : 2;
          !~n && (n = V.push(e) - 1), V[n + s] || $(e, "scroll", X);
          let r = V[n + s],
            o = r || (V[n + s] = Q(W(e, a), !0) || (U(e) ? t : Q((function(t) {
              return arguments.length ? e[a] = t : e[a]
            }))));
          return o.target = e, r || (o.smooth = "smooth" === M.getProperty(e, "scrollBehavior")), o
        },
        ne = (e, a, t) => {
          let n = e,
            s = e,
            r = F(),
            o = r,
            i = a || 50,
            _ = Math.max(500, 3 * i),
            c = (e, a) => {
              let _ = F();
              a || _ - r > i ? (s = n, n = e, o = r, r = _) : t ? n += e : n = s + (e - s) / (_ - o) * (r - o)
            };
          return {
            update: c,
            reset: () => {
              s = n = t ? 0 : n, o = r = 0
            },
            getVelocity: e => {
              let a = o,
                i = s,
                l = F();
              return (e || 0 === e) && e !== n && c(e), r === o || l - o > _ ? 0 : (n + (t ? i : -i)) / ((t ? l : r) - a) * 1e3
            }
          }
        },
        se = (e, a) => (a && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        re = e => {
          let a = Math.max(...e),
            t = Math.min(...e);
          return Math.abs(a) >= Math.abs(t) ? a : t
        },
        oe = () => {
          L = M.core.globals().ScrollTrigger, L && L.core && (() => {
            let e = L.core,
              a = e.bridge || {},
              t = e._scrollers,
              n = e._proxies;
            t.push(...V), n.push(...q), V = t, q = n, H = (e, t) => a[e](t)
          })()
        },
        ie = e => (M = e || z(), M && "undefined" != typeof document && document.body && (j = window, S = document, G = S.documentElement, A = S.body, N = [j, S, G, A], T = M.utils.clamp, D = M.core.context || function() {}, P = "onpointerenter" in A ? "pointer" : "mouse", I = _e.isTouch = j.matchMedia && j.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in j || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, O = _e.eventTypes = ("ontouchstart" in G ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in G ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => E = 0), 500), oe(), C = 1), C);
      Z.op = ee, V.cache = 0;
      class _e {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          C || ie(M) || console.warn("Please gsap.registerPlugin(Observer)"), L || oe();
          let {
            tolerance: a,
            dragMinimum: t,
            type: n,
            target: s,
            lineHeight: r,
            debounce: o,
            preventDefault: i,
            onStop: _,
            onStopDelay: c,
            ignore: l,
            wheelSpeed: d,
            event: g,
            onDragStart: v,
            onDragEnd: m,
            onDrag: u,
            onPress: p,
            onRelease: h,
            onRight: f,
            onLeft: b,
            onUp: w,
            onDown: y,
            onChangeX: k,
            onChangeY: x,
            onChange: T,
            onToggleX: N,
            onToggleY: z,
            onHover: E,
            onHoverEnd: V,
            onMove: q,
            ignoreCheck: H,
            isNormalizer: W,
            onGestureStart: Y,
            onGestureEnd: K,
            onWheel: Q,
            onEnable: _e,
            onDisable: ce,
            onClick: le,
            scrollSpeed: de,
            capture: ge,
            allowClicks: ve,
            lockAxis: me,
            onLockAxis: ue
          } = e;
          this.target = s = ae(s) || G, this.vars = e, l && (l = M.utils.toArray(l)), a = a || 1e-9, t = t || 0, d = d || 1, de = de || 1, n = n || "wheel,touch,pointer", o = !1 !== o, r || (r = parseFloat(j.getComputedStyle(A).lineHeight) || 22);
          let pe, he, fe, be, we, ye, ke, xe = this,
            Me = 0,
            Ce = 0,
            Te = te(s, Z),
            je = te(s, ee),
            Se = Te(),
            Ge = je(),
            Ae = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === O[0],
            Ie = U(s),
            Pe = s.ownerDocument || S,
            Le = [0, 0, 0],
            Ne = [0, 0, 0],
            Re = 0,
            Oe = () => Re = F(),
            De = (e, a) => (xe.event = e) && l && ~l.indexOf(e.target) || a && Ae && "touch" !== e.pointerType || H && H(e, a),
            ze = () => {
              let e = xe.deltaX = re(Le),
                t = xe.deltaY = re(Ne),
                n = Math.abs(e) >= a,
                s = Math.abs(t) >= a;
              T && (n || s) && T(xe, e, t, Le, Ne), n && (f && xe.deltaX > 0 && f(xe), b && xe.deltaX < 0 && b(xe), k && k(xe), N && xe.deltaX < 0 != Me < 0 && N(xe), Me = xe.deltaX, Le[0] = Le[1] = Le[2] = 0), s && (y && xe.deltaY > 0 && y(xe), w && xe.deltaY < 0 && w(xe), x && x(xe), z && xe.deltaY < 0 != Ce < 0 && z(xe), Ce = xe.deltaY, Ne[0] = Ne[1] = Ne[2] = 0), (be || fe) && (q && q(xe), fe && (u(xe), fe = !1), be = !1), ye && !(ye = !1) && ue && ue(xe), we && (Q(xe), we = !1), pe = 0
            },
            Ee = (e, a, t) => {
              Le[t] += e, Ne[t] += a, xe._vx.update(e), xe._vy.update(a), o ? pe || (pe = requestAnimationFrame(ze)) : ze()
            },
            Be = (e, a) => {
              me && !ke && (xe.axis = ke = Math.abs(e) > Math.abs(a) ? "x" : "y", ye = !0), "y" !== ke && (Le[2] += e, xe._vx.update(e, !0)), "x" !== ke && (Ne[2] += a, xe._vy.update(a, !0)), o ? pe || (pe = requestAnimationFrame(ze)) : ze()
            },
            Ve = e => {
              if (De(e, 1)) return;
              let a = (e = se(e, i)).clientX,
                n = e.clientY,
                s = a - xe.x,
                r = n - xe.y,
                o = xe.isDragging;
              xe.x = a, xe.y = n, (o || Math.abs(xe.startX - a) >= t || Math.abs(xe.startY - n) >= t) && (u && (fe = !0), o || (xe.isDragging = !0), Be(s, r), o || v && v(xe))
            },
            qe = xe.onPress = e => {
              De(e, 1) || e && e.button || (xe.axis = ke = null, he.pause(), xe.isPressed = !0, e = se(e), Me = Ce = 0, xe.startX = xe.x = e.clientX, xe.startY = xe.y = e.clientY, xe._vx.reset(), xe._vy.reset(), $(W ? s : Pe, O[1], Ve, i, !0), xe.deltaX = xe.deltaY = 0, p && p(xe))
            },
            Fe = xe.onRelease = e => {
              if (De(e, 1)) return;
              J(W ? s : Pe, O[1], Ve, !0);
              let a = !isNaN(xe.y - xe.startY),
                t = xe.isDragging && (Math.abs(xe.x - xe.startX) > 3 || Math.abs(xe.y - xe.startY) > 3),
                n = se(e);
              !t && a && (xe._vx.reset(), xe._vy.reset(), i && ve && M.delayedCall(.08, (() => {
                if (F() - Re > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Pe.createEvent) {
                  let a = Pe.createEvent("MouseEvents");
                  a.initMouseEvent("click", !0, !0, j, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(a)
                }
              }))), xe.isDragging = xe.isGesturing = xe.isPressed = !1, _ && !W && he.restart(!0), m && t && m(xe), h && h(xe, t)
            },
            He = e => e.touches && e.touches.length > 1 && (xe.isGesturing = !0) && Y(e, xe.isDragging),
            We = () => (xe.isGesturing = !1) || K(xe),
            Ue = e => {
              if (De(e)) return;
              let a = Te(),
                t = je();
              Ee((a - Se) * de, (t - Ge) * de, 1), Se = a, Ge = t, _ && he.restart(!0)
            },
            $e = e => {
              if (De(e)) return;
              e = se(e, i), Q && (we = !0);
              let a = (1 === e.deltaMode ? r : 2 === e.deltaMode ? j.innerHeight : 1) * d;
              Ee(e.deltaX * a, e.deltaY * a, 0), _ && !W && he.restart(!0)
            },
            Je = e => {
              if (De(e)) return;
              let a = e.clientX,
                t = e.clientY,
                n = a - xe.x,
                s = t - xe.y;
              xe.x = a, xe.y = t, be = !0, (n || s) && Be(n, s)
            },
            Ye = e => {
              xe.event = e, E(xe)
            },
            Ke = e => {
              xe.event = e, V(xe)
            },
            Xe = e => De(e) || se(e, i) && le(xe);
          he = xe._dc = M.delayedCall(c || .25, (() => {
            xe._vx.reset(), xe._vy.reset(), he.pause(), _ && _(xe)
          })).pause(), xe.deltaX = xe.deltaY = 0, xe._vx = ne(0, 50, !0), xe._vy = ne(0, 50, !0), xe.scrollX = Te, xe.scrollY = je, xe.isDragging = xe.isGesturing = xe.isPressed = !1, D(this), xe.enable = e => (xe.isEnabled || ($(Ie ? Pe : s, "scroll", X), n.indexOf("scroll") >= 0 && $(Ie ? Pe : s, "scroll", Ue, i, ge), n.indexOf("wheel") >= 0 && $(s, "wheel", $e, i, ge), (n.indexOf("touch") >= 0 && I || n.indexOf("pointer") >= 0) && ($(s, O[0], qe, i, ge), $(Pe, O[2], Fe), $(Pe, O[3], Fe), ve && $(s, "click", Oe, !1, !0), le && $(s, "click", Xe), Y && $(Pe, "gesturestart", He), K && $(Pe, "gestureend", We), E && $(s, P + "enter", Ye), V && $(s, P + "leave", Ke), q && $(s, P + "move", Je)), xe.isEnabled = !0, e && e.type && qe(e), _e && _e(xe)), xe), xe.disable = () => {
            xe.isEnabled && (B.filter((e => e !== xe && U(e.target))).length || J(Ie ? Pe : s, "scroll", X), xe.isPressed && (xe._vx.reset(), xe._vy.reset(), J(W ? s : Pe, O[1], Ve, !0)), J(Ie ? Pe : s, "scroll", Ue, ge), J(s, "wheel", $e, ge), J(s, O[0], qe, ge), J(Pe, O[2], Fe), J(Pe, O[3], Fe), J(s, "click", Oe, !0), J(s, "click", Xe), J(Pe, "gesturestart", He), J(Pe, "gestureend", We), J(s, P + "enter", Ye), J(s, P + "leave", Ke), J(s, P + "move", Je), xe.isEnabled = xe.isPressed = xe.isDragging = !1, ce && ce(xe))
          }, xe.kill = xe.revert = () => {
            xe.disable();
            let e = B.indexOf(xe);
            e >= 0 && B.splice(e, 1), R === xe && (R = 0)
          }, B.push(xe), W && U(s) && (R = xe), xe.enable(g)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      _e.version = "3.12.2", _e.create = e => new _e(e), _e.register = ie, _e.getAll = () => B.slice(), _e.getById = e => B.filter((a => a.vars.id === e))[0], z() && M.registerPlugin(_e);
      let ce, le, de, ge, ve, me, ue, pe, he, fe, be, we, ye, ke, xe, Me, Ce, Te, je, Se, Ge, Ae, Ie, Pe, Le, Ne, Re, Oe, De, ze, Ee, Be, Ve, qe, Fe, He, We = 1,
        Ue = Date.now,
        $e = Ue(),
        Je = 0,
        Ye = 0,
        Ke = (e, a, t) => {
          let n = la(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return t["_" + a + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
        },
        Xe = (e, a) => !a || la(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        Qe = () => Ye && requestAnimationFrame(Qe),
        Ze = () => ke = 1,
        ea = () => ke = 0,
        aa = e => e,
        ta = e => Math.round(1e5 * e) / 1e5 || 0,
        na = () => "undefined" != typeof window,
        sa = () => ce || na() && (ce = window.gsap) && ce.registerPlugin && ce,
        ra = e => !!~ue.indexOf(e),
        oa = e => ("Height" === e ? Ee : de["inner" + e]) || ve["client" + e] || me["client" + e],
        ia = e => W(e, "getBoundingClientRect") || (ra(e) ? () => (bt.width = de.innerWidth, bt.height = Ee, bt) : () => La(e)),
        _a = (e, {
          s: a,
          d2: t,
          d: n,
          a: s
        }) => Math.max(0, (a = "scroll" + t) && (s = W(e, a)) ? s() - ia(e)()[n] : ra(e) ? (ve[a] || me[a]) - oa(t) : e[a] - e["offset" + t]),
        ca = (e, a) => {
          for (let t = 0; t < je.length; t += 3)(!a || ~a.indexOf(je[t + 1])) && e(je[t], je[t + 1], je[t + 2])
        },
        la = e => "string" == typeof e,
        da = e => "function" == typeof e,
        ga = e => "number" == typeof e,
        va = e => "object" == typeof e,
        ma = (e, a, t) => e && e.progress(a ? 0 : 1) && t && e.pause(),
        ua = (e, a) => {
          if (e.enabled) {
            let t = a(e);
            t && t.totalTime && (e.callbackAnimation = t)
          }
        },
        pa = Math.abs,
        ha = "left",
        fa = "right",
        ba = "bottom",
        wa = "width",
        ya = "height",
        ka = "Right",
        xa = "Left",
        Ma = "Top",
        Ca = "Bottom",
        Ta = "padding",
        ja = "margin",
        Sa = "Width",
        Ga = "Height",
        Aa = "px",
        Ia = e => de.getComputedStyle(e),
        Pa = (e, a) => {
          for (let t in a) t in e || (e[t] = a[t]);
          return e
        },
        La = (e, a) => {
          let t = a && "matrix(1, 0, 0, 1, 0, 0)" !== Ia(e)[xe] && ce.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            n = e.getBoundingClientRect();
          return t && t.progress(0).kill(), n
        },
        Na = (e, {
          d2: a
        }) => e["offset" + a] || e["client" + a] || 0,
        Ra = e => {
          let a, t = [],
            n = e.labels,
            s = e.duration();
          for (a in n) t.push(n[a] / s);
          return t
        },
        Oa = e => {
          let a = ce.utils.snap(e),
            t = Array.isArray(e) && e.slice(0).sort(((e, a) => e - a));
          return t ? (e, n, s = .001) => {
            let r;
            if (!n) return a(e);
            if (n > 0) {
              for (e -= s, r = 0; r < t.length; r++)
                if (t[r] >= e) return t[r];
              return t[r - 1]
            }
            for (r = t.length, e += s; r--;)
              if (t[r] <= e) return t[r];
            return t[0]
          } : (t, n, s = .001) => {
            let r = a(t);
            return !n || Math.abs(r - t) < s || r - t < 0 == n < 0 ? r : a(n < 0 ? t - e : t + e)
          }
        },
        Da = (e, a, t, n) => t.split(",").forEach((t => e(a, t, n))),
        za = (e, a, t, n, s) => e.addEventListener(a, t, {
          passive: !n,
          capture: !!s
        }),
        Ea = (e, a, t, n) => e.removeEventListener(a, t, !!n),
        Ba = (e, a, t) => {
          (t = t && t.wheelHandler) && (e(a, "wheel", t), e(a, "touchmove", t))
        },
        Va = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        qa = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Fa = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Ha = (e, a) => {
          if (la(e)) {
            let t = e.indexOf("="),
              n = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (n *= a / 100), e = e.substr(0, t - 1)), e = n + (e in Fa ? Fa[e] * a : ~e.indexOf("%") ? parseFloat(e) * a / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Wa = (e, a, t, n, {
          startColor: s,
          endColor: r,
          fontSize: o,
          indent: i,
          fontWeight: _
        }, c, l, d) => {
          let g = ge.createElement("div"),
            v = ra(t) || "fixed" === W(t, "pinType"),
            m = -1 !== e.indexOf("scroller"),
            u = v ? me : t,
            p = -1 !== e.indexOf("start"),
            h = p ? s : r,
            f = "border-color:" + h + ";font-size:" + o + ";color:" + h + ";font-weight:" + _ + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return f += "position:" + ((m || d) && v ? "fixed;" : "absolute;"), (m || d || !v) && (f += (n === ee ? fa : ba) + ":" + (c + parseFloat(i)) + "px;"), l && (f += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"), g._isStart = p, g.setAttribute("class", "gsap-marker-" + e + (a ? " marker-" + a : "")), g.style.cssText = f, g.innerText = a || 0 === a ? e + "-" + a : e, u.children[0] ? u.insertBefore(g, u.children[0]) : u.appendChild(g), g._offset = g["offset" + n.op.d2], Ua(g, 0, n, p), g
        },
        Ua = (e, a, t, n) => {
          let s = {
              display: "block"
            },
            r = t[n ? "os2" : "p2"],
            o = t[n ? "p2" : "os2"];
          e._isFlipped = n, s[t.a + "Percent"] = n ? -100 : 0, s[t.a] = n ? "1px" : 0, s["border" + r + Sa] = 1, s["border" + o + Sa] = 0, s[t.p] = a + "px", ce.set(e, s)
        },
        $a = [],
        Ja = {},
        Ya = () => Ue() - Je > 34 && (Ve || (Ve = requestAnimationFrame(gt))),
        Ka = () => {
          (!Ie || !Ie.isPressed || Ie.startX > me.clientWidth) && (V.cache++, Ie ? Ve || (Ve = requestAnimationFrame(gt)) : gt(), Je || tt("scrollStart"), Je = Ue())
        },
        Xa = () => {
          Ne = de.innerWidth, Le = de.innerHeight
        },
        Qa = () => {
          V.cache++, !ye && !Ae && !ge.fullscreenElement && !ge.webkitFullscreenElement && (!Pe || Ne !== de.innerWidth || Math.abs(de.innerHeight - Le) > .25 * de.innerHeight) && pe.restart(!0)
        },
        Za = {},
        et = [],
        at = () => Ea(Tt, "scrollEnd", at) || ct(!0),
        tt = e => Za[e] && Za[e].map((e => e())) || et,
        nt = [],
        st = e => {
          for (let a = 0; a < nt.length; a += 5)(!e || nt[a + 4] && nt[a + 4].query === e) && (nt[a].style.cssText = nt[a + 1], nt[a].getBBox && nt[a].setAttribute("transform", nt[a + 2] || ""), nt[a + 3].uncache = 1)
        },
        rt = (e, a) => {
          let t;
          for (Me = 0; Me < $a.length; Me++) t = $a[Me], !t || a && t._ctx !== a || (e ? t.kill(1) : t.revert(!0, !0));
          a && st(a), a || tt("revert")
        },
        ot = (e, a) => {
          V.cache++, (a || !qe) && V.forEach((e => da(e) && e.cacheID++ && (e.rec = 0))), la(e) && (de.history.scrollRestoration = De = e)
        },
        it = 0,
        _t = () => {
          me.appendChild(ze), Ee = ze.offsetHeight || de.innerHeight, me.removeChild(ze)
        },
        ct = (e, a) => {
          if (Je && !e) return void za(Tt, "scrollEnd", at);
          _t(), qe = Tt.isRefreshing = !0, V.forEach((e => da(e) && ++e.cacheID && (e.rec = e())));
          let t = tt("refreshInit");
          Se && Tt.sort(), a || rt(), V.forEach((e => {
            da(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), $a.slice(0).forEach((e => e.refresh())), $a.forEach(((e, a) => {
            if (e._subPinOffset && e.pin) {
              let a = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                t = e.pin[a];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[a] - t), e.refresh()
            }
          })), $a.forEach((e => {
            let a = _a(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > a) && e.setPositions(e.start, Math.max(e.start + 1, a), !0)
          })), t.forEach((e => e && e.render && e.render(-1))), V.forEach((e => {
            da(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), ot(De, 1), pe.pause(), it++, qe = 2, gt(2), $a.forEach((e => da(e.vars.onRefresh) && e.vars.onRefresh(e))), qe = Tt.isRefreshing = !1, tt("refresh")
        },
        lt = 0,
        dt = 1,
        gt = e => {
          if (!qe || 2 === e) {
            Tt.isUpdating = !0, He && He.update(0);
            let e = $a.length,
              a = Ue(),
              t = a - $e >= 50,
              n = e && $a[0].scroll();
            if (dt = lt > n ? -1 : 1, qe || (lt = n), t && (Je && !ke && a - Je > 200 && (Je = 0, tt("scrollEnd")), be = $e, $e = a), dt < 0) {
              for (Me = e; Me-- > 0;) $a[Me] && $a[Me].update(0, t);
              dt = 1
            } else
              for (Me = 0; Me < e; Me++) $a[Me] && $a[Me].update(0, t);
            Tt.isUpdating = !1
          }
          Ve = 0
        },
        vt = [ha, "top", ba, fa, ja + Ca, ja + ka, ja + Ma, ja + xa, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        mt = vt.concat([wa, ya, "boxSizing", "max" + Sa, "max" + Ga, "position", ja, Ta, Ta + Ma, Ta + ka, Ta + Ca, Ta + xa]),
        ut = (e, a, t, n) => {
          if (!e._gsap.swappedIn) {
            let s, r = vt.length,
              o = a.style,
              i = e.style;
            for (; r--;) s = vt[r], o[s] = t[s];
            o.position = "absolute" === t.position ? "absolute" : "relative", "inline" === t.display && (o.display = "inline-block"), i[ba] = i[fa] = "auto", o.flexBasis = t.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[wa] = Na(e, Z) + Aa, o[ya] = Na(e, ee) + Aa, o[Ta] = i[ja] = i.top = i[ha] = "0", ht(n), i[wa] = i["max" + Sa] = t[wa], i[ya] = i["max" + Ga] = t[ya], i[Ta] = t[Ta], e.parentNode !== a && (e.parentNode.insertBefore(a, e), a.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        pt = /([A-Z])/g,
        ht = e => {
          if (e) {
            let a, t, n = e.t.style,
              s = e.length,
              r = 0;
            for ((e.t._gsap || ce.core.getCache(e.t)).uncache = 1; r < s; r += 2) t = e[r + 1], a = e[r], t ? n[a] = t : n[a] && n.removeProperty(a.replace(pt, "-$1").toLowerCase())
          }
        },
        ft = e => {
          let a = mt.length,
            t = e.style,
            n = [],
            s = 0;
          for (; s < a; s++) n.push(mt[s], t[mt[s]]);
          return n.t = e, n
        },
        bt = {
          left: 0,
          top: 0
        },
        wt = (e, a, t, n, s, r, o, i, _, c, l, d, g, v) => {
          da(e) && (e = e(i)), la(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? Ha("0" + e.substr(3), t) : 0));
          let m, u, p, h = g ? g.time() : 0;
          if (g && g.seek(0), isNaN(e) || (e = +e), ga(e)) g && (e = ce.utils.mapRange(g.scrollTrigger.start, g.scrollTrigger.end, 0, d, e)), o && Ua(o, t, n, !0);
          else {
            da(a) && (a = a(i));
            let r, l, d, g, v = (e || "0").split(" ");
            p = ae(a, i) || me, r = La(p) || {}, r && (r.left || r.top) || "none" !== Ia(p).display || (g = p.style.display, p.style.display = "block", r = La(p), g ? p.style.display = g : p.style.removeProperty("display")), l = Ha(v[0], r[n.d]), d = Ha(v[1] || "0", t), e = r[n.p] - _[n.p] - c + l + s - d, o && Ua(o, d, n, t - d < 20 || o._isStart && d > 20), t -= t - d
          }
          if (v && (i[v] = e || -.001, e < 0 && (e = 0)), r) {
            let a = e + t,
              s = r._isStart;
            m = "scroll" + n.d2, Ua(r, a, n, s && a > 20 || !s && (l ? Math.max(me[m], ve[m]) : r.parentNode[m]) <= a + 1), l && (_ = La(o), l && (r.style[n.op.p] = _[n.op.p] - n.op.m - r._offset + Aa))
          }
          return g && p && (m = La(p), g.seek(d), u = La(p), g._caScrollDist = m[n.p] - u[n.p], e = e / g._caScrollDist * d), g && g.seek(h), g ? e : Math.round(e)
        },
        yt = /(webkit|moz|length|cssText|inset)/i,
        kt = (e, a, t, n) => {
          if (e.parentNode !== a) {
            let s, r, o = e.style;
            if (a === me) {
              for (s in e._stOrig = o.cssText, r = Ia(e), r) + s || yt.test(s) || !r[s] || "string" != typeof o[s] || "0" === s || (o[s] = r[s]);
              o.top = t, o.left = n
            } else o.cssText = e._stOrig;
            ce.core.getCache(e).uncache = 1, a.appendChild(e)
          }
        },
        xt = (e, a, t) => {
          let n = a,
            s = n;
          return a => {
            let r = Math.round(e());
            return r !== n && r !== s && Math.abs(r - n) > 3 && Math.abs(r - s) > 3 && (a = r, t && t()), s = n, n = a, a
          }
        },
        Mt = (e, a, t) => {
          let n = {};
          n[a.p] = "+=" + t, ce.set(e, n)
        },
        Ct = (e, a) => {
          let t = te(e, a),
            n = "_scroll" + a.p2,
            s = (a, r, o, i, _) => {
              let c = s.tween,
                l = r.onComplete,
                d = {};
              o = o || t();
              let g = xt(t, o, (() => {
                c.kill(), s.tween = 0
              }));
              return _ = i && _ || 0, i = i || a - o, c && c.kill(), r[n] = a, r.modifiers = d, d[n] = () => g(o + i * c.ratio + _ * c.ratio * c.ratio), r.onUpdate = () => {
                V.cache++, gt()
              }, r.onComplete = () => {
                s.tween = 0, l && l.call(c)
              }, c = s.tween = ce.to(e, r), c
            };
          return e[n] = t, t.wheelHandler = () => s.tween && s.tween.kill() && (s.tween = 0), za(e, "wheel", t.wheelHandler), Tt.isTouch && za(e, "touchmove", t.wheelHandler), s
        };
      class Tt {
        constructor(e, a) {
          le || Tt.register(ce) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Oe(this), this.init(e, a)
        }
        init(e, a) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ye) return void(this.update = this.refresh = this.kill = aa);
          e = Pa(la(e) || ga(e) || e.nodeType ? {
            trigger: e
          } : e, qa);
          let t, n, s, r, o, i, _, c, l, d, g, v, m, u, p, h, f, b, w, y, k, x, M, C, T, j, S, G, A, I, P, L, N, R, O, D, z, E, B, {
              onUpdate: F,
              toggleClass: H,
              id: U,
              onToggle: $,
              onRefresh: J,
              scrub: Y,
              trigger: K,
              pin: X,
              pinSpacing: Q,
              invalidateOnRefresh: ne,
              anticipatePin: se,
              onScrubComplete: re,
              onSnapComplete: oe,
              once: ie,
              snap: _e,
              pinReparent: le,
              pinSpacer: ue,
              containerAnimation: pe,
              fastScrollEnd: we,
              preventOverlaps: xe
            } = e,
            Ce = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Z : ee,
            Te = !Y && 0 !== Y,
            je = ae(e.scroller || de),
            Ae = ce.core.getCache(je),
            Ie = ra(je),
            Pe = "fixed" === ("pinType" in e ? e.pinType : W(je, "pinType") || Ie && "fixed"),
            Le = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            Ne = Te && e.toggleActions.split(" "),
            Re = "markers" in e ? e.markers : qa.markers,
            Oe = Ie ? 0 : parseFloat(Ia(je)["border" + Ce.p2 + Sa]) || 0,
            De = this,
            ze = e.onRefreshInit && (() => e.onRefreshInit(De)),
            Ee = ((e, a, {
              d: t,
              d2: n,
              a: s
            }) => (s = W(e, "getBoundingClientRect")) ? () => s()[t] : () => (a ? oa(n) : e["client" + n]) || 0)(je, Ie, Ce),
            Ve = ((e, a) => !a || ~q.indexOf(e) ? ia(e) : () => bt)(je, Ie),
            $e = 0,
            Qe = 0,
            Ze = 0,
            ea = te(je, Ce);
          var na;
          if (De._startClamp = De._endClamp = !1, De._dir = Ce, se *= 45, De.scroller = je, De.scroll = pe ? pe.time.bind(pe) : ea, r = ea(), De.vars = e, a = a || e.animation, "refreshPriority" in e && (Se = 1, -9999 === e.refreshPriority && (He = De)), Ae.tweenScroll = Ae.tweenScroll || {
              top: Ct(je, ee),
              left: Ct(je, Z)
            }, De.tweenTo = t = Ae.tweenScroll[Ce.p], De.scrubDuration = e => {
              N = ga(e) && e, N ? L ? L.duration(e) : L = ce.to(a, {
                ease: "expo",
                totalProgress: "+=0",
                duration: N,
                paused: !0,
                onComplete: () => re && re(De)
              }) : (L && L.progress(1).kill(), L = 0)
            }, a && (a.vars.lazy = !1, a._initted && !De.isReverted || !1 !== a.vars.immediateRender && !1 !== e.immediateRender && a.duration() && a.render(0, !0, !0), De.animation = a.pause(), a.scrollTrigger = De, De.scrubDuration(Y), I = 0, U || (U = a.vars.id)), _e && (va(_e) && !_e.push || (_e = {
              snapTo: _e
            }), "scrollBehavior" in me.style && ce.set(Ie ? [me, ve] : je, {
              scrollBehavior: "auto"
            }), V.forEach((e => da(e) && e.target === (Ie ? ge.scrollingElement || ve : je) && (e.smooth = !1))), s = da(_e.snapTo) ? _e.snapTo : "labels" === _e.snapTo ? (e => a => ce.utils.snap(Ra(e), a))(a) : "labelsDirectional" === _e.snapTo ? (na = a, (e, a) => Oa(Ra(na))(e, a.direction)) : !1 !== _e.directional ? (e, a) => Oa(_e.snapTo)(e, Ue() - Qe < 500 ? 0 : a.direction) : ce.utils.snap(_e.snapTo), R = _e.duration || {
              min: .1,
              max: 2
            }, R = va(R) ? fe(R.min, R.max) : fe(R, R), O = ce.delayedCall(_e.delay || N / 2 || .1, (() => {
              let e = ea(),
                n = Ue() - Qe < 500,
                r = t.tween;
              if (!(n || Math.abs(De.getVelocity()) < 10) || r || ke || $e === e) De.isActive && $e !== e && O.restart(!0);
              else {
                let o = (e - i) / u,
                  c = a && !Te ? a.totalProgress() : o,
                  l = n ? 0 : (c - P) / (Ue() - be) * 1e3 || 0,
                  d = ce.utils.clamp(-o, 1 - o, pa(l / 2) * l / .185),
                  g = o + (!1 === _e.inertia ? 0 : d),
                  v = fe(0, 1, s(g, De)),
                  m = Math.round(i + v * u),
                  {
                    onStart: p,
                    onInterrupt: h,
                    onComplete: f
                  } = _e;
                if (e <= _ && e >= i && m !== e) {
                  if (r && !r._initted && r.data <= pa(m - e)) return;
                  !1 === _e.inertia && (d = v - o), t(m, {
                    duration: R(pa(.185 * Math.max(pa(g - c), pa(v - c)) / l / .05 || 0)),
                    ease: _e.ease || "power3",
                    data: pa(m - e),
                    onInterrupt: () => O.restart(!0) && h && h(De),
                    onComplete: () => {
                      De.update(), $e = ea(), I = P = a && !Te ? a.totalProgress() : De.progress, oe && oe(De), f && f(De)
                    }
                  }, e, d * u, m - e - d * u), p && p(De, t.tween)
                }
              }
            })).pause()), U && (Ja[U] = De), K = De.trigger = ae(K || !0 !== X && X), B = K && K._gsap && K._gsap.stRevert, B && (B = B(De)), X = !0 === X ? K : ae(X), la(H) && (H = {
              targets: K,
              className: H
            }), X && (!1 === Q || Q === ja || (Q = !(!Q && X.parentNode && X.parentNode.style && "flex" === Ia(X.parentNode).display) && Ta), De.pin = X, n = ce.core.getCache(X), n.spacer ? p = n.pinState : (ue && (ue = ae(ue), ue && !ue.nodeType && (ue = ue.current || ue.nativeElement), n.spacerIsNative = !!ue, ue && (n.spacerState = ft(ue))), n.spacer = b = ue || ge.createElement("div"), b.classList.add("pin-spacer"), U && b.classList.add("pin-spacer-" + U), n.pinState = p = ft(X)), !1 !== e.force3D && ce.set(X, {
              force3D: !0
            }), De.spacer = b = n.spacer, A = Ia(X), C = A[Q + Ce.os2], y = ce.getProperty(X), k = ce.quickSetter(X, Ce.a, Aa), ut(X, b, A), f = ft(X)), Re) {
            v = va(Re) ? Pa(Re, Va) : Va, d = Wa("scroller-start", U, je, Ce, v, 0), g = Wa("scroller-end", U, je, Ce, v, 0, d), w = d["offset" + Ce.op.d2];
            let e = ae(W(je, "content") || je);
            c = this.markerStart = Wa("start", U, e, Ce, v, w, 0, pe), l = this.markerEnd = Wa("end", U, e, Ce, v, w, 0, pe), pe && (E = ce.quickSetter([c, l], Ce.a, Aa)), Pe || q.length && !0 === W(je, "fixedMarkers") || ((e => {
              let a = Ia(e).position;
              e.style.position = "absolute" === a || "fixed" === a ? a : "relative"
            })(Ie ? me : je), ce.set([d, g], {
              force3D: !0
            }), j = ce.quickSetter(d, Ce.a, Aa), G = ce.quickSetter(g, Ce.a, Aa))
          }
          if (pe) {
            let e = pe.vars.onUpdate,
              a = pe.vars.onUpdateParams;
            pe.eventCallback("onUpdate", (() => {
              De.update(0, 0, 1), e && e.apply(pe, a || [])
            }))
          }
          if (De.previous = () => $a[$a.indexOf(De) - 1], De.next = () => $a[$a.indexOf(De) + 1], De.revert = (e, t) => {
              if (!t) return De.kill(!0);
              let n = !1 !== e || !De.enabled,
                s = ye;
              n !== De.isReverted && (n && (D = Math.max(ea(), De.scroll.rec || 0), Ze = De.progress, z = a && a.progress()), c && [c, l, d, g].forEach((e => e.style.display = n ? "none" : "block")), n && (ye = De, De.update(n)), !X || le && De.isActive || (n ? ((e, a, t) => {
                ht(t);
                let n = e._gsap;
                if (n.spacerIsNative) ht(n.spacerState);
                else if (e._gsap.swappedIn) {
                  let t = a.parentNode;
                  t && (t.insertBefore(e, a), t.removeChild(a))
                }
                e._gsap.swappedIn = !1
              })(X, b, p) : ut(X, b, Ia(X), T)), n || De.update(n), ye = s, De.isReverted = n)
            }, De.refresh = (n, s, v, w) => {
              if ((ye || !De.enabled) && !s) return;
              if (X && n && Je) return void za(Tt, "scrollEnd", at);
              !qe && ze && ze(De), ye = De, t.tween && !v && (t.tween.kill(), t.tween = 0), L && L.pause(), ne && a && a.revert({
                kill: !1
              }).invalidate(), De.isReverted || De.revert(!0, !0), De._subPinOffset = !1;
              let k, C, j, G, A, I, P, N, R, E, B, V, q, F = Ee(),
                H = Ve(),
                W = pe ? pe.duration() : _a(je, Ce),
                U = u <= .01,
                $ = 0,
                Y = w || 0,
                se = va(v) ? v.end : e.end,
                re = e.endTrigger || K,
                oe = va(v) ? v.start : e.start || (0 !== e.start && K ? X ? "0 0" : "0 100%" : 0),
                ie = De.pinnedContainer = e.pinnedContainer && ae(e.pinnedContainer, De),
                _e = K && Math.max(0, $a.indexOf(De)) || 0,
                de = _e;
              for (Re && va(v) && (V = ce.getProperty(d, Ce.p), q = ce.getProperty(g, Ce.p)); de--;) I = $a[de], I.end || I.refresh(0, 1) || (ye = De), P = I.pin, !P || P !== K && P !== X && P !== ie || I.isReverted || (E || (E = []), E.unshift(I), I.revert(!0, !0)), I !== $a[de] && (_e--, de--);
              for (da(oe) && (oe = oe(De)), oe = Ke(oe, "start", De), i = wt(oe, K, F, Ce, ea(), c, d, De, H, Oe, Pe, W, pe, De._startClamp && "_startClamp") || (X ? -.001 : 0), da(se) && (se = se(De)), la(se) && !se.indexOf("+=") && (~se.indexOf(" ") ? se = (la(oe) ? oe.split(" ")[0] : "") + se : ($ = Ha(se.substr(2), F), se = la(oe) ? oe : (pe ? ce.utils.mapRange(0, pe.duration(), pe.scrollTrigger.start, pe.scrollTrigger.end, i) : i) + $, re = K)), se = Ke(se, "end", De), _ = Math.max(i, wt(se || (re ? "100% 0" : W), re, F, Ce, ea() + $, l, g, De, H, Oe, Pe, W, pe, De._endClamp && "_endClamp")) || -.001, $ = 0, de = _e; de--;) I = $a[de], P = I.pin, P && I.start - I._pinPush <= i && !pe && I.end > 0 && (k = I.end - (De._startClamp ? Math.max(0, I.start) : I.start), (P === K && I.start - I._pinPush < i || P === ie) && isNaN(oe) && ($ += k * (1 - I.progress)), P === X && (Y += k));
              if (i += $, _ += $, De._startClamp && (De._startClamp += $), De._endClamp && !qe && (De._endClamp = _ || -.001, _ = Math.min(_, _a(je, Ce))), u = _ - i || (i -= .01) && .001, U && (Ze = ce.utils.clamp(0, 1, ce.utils.normalize(i, _, D))), De._pinPush = Y, c && $ && (k = {}, k[Ce.a] = "+=" + $, ie && (k[Ce.p] = "-=" + ea()), ce.set([c, l], k)), X) k = Ia(X), G = Ce === ee, j = ea(), x = parseFloat(y(Ce.a)) + Y, !W && _ > 1 && (B = (Ie ? ge.scrollingElement || ve : je).style, B = {
                style: B,
                value: B["overflow" + Ce.a.toUpperCase()]
              }, Ie && "scroll" !== Ia(me)["overflow" + Ce.a.toUpperCase()] && (B.style["overflow" + Ce.a.toUpperCase()] = "scroll")), ut(X, b, k), f = ft(X), C = La(X, !0), N = Pe && te(je, G ? Z : ee)(), Q && (T = [Q + Ce.os2, u + Y + Aa], T.t = b, de = Q === Ta ? Na(X, Ce) + u + Y : 0, de && T.push(Ce.d, de + Aa), ht(T), ie && $a.forEach((e => {
                e.pin === ie && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), Pe && ea(D)), Pe && (A = {
                top: C.top + (G ? j - i : N) + Aa,
                left: C.left + (G ? N : j - i) + Aa,
                boxSizing: "border-box",
                position: "fixed"
              }, A[wa] = A["max" + Sa] = Math.ceil(C.width) + Aa, A[ya] = A["max" + Ga] = Math.ceil(C.height) + Aa, A[ja] = A[ja + Ma] = A[ja + ka] = A[ja + Ca] = A[ja + xa] = "0", A[Ta] = k[Ta], A[Ta + Ma] = k[Ta + Ma], A[Ta + ka] = k[Ta + ka], A[Ta + Ca] = k[Ta + Ca], A[Ta + xa] = k[Ta + xa], h = ((e, a, t) => {
                let n, s = [],
                  r = e.length,
                  o = t ? 8 : 0;
                for (; o < r; o += 2) n = e[o], s.push(n, n in a ? a[n] : e[o + 1]);
                return s.t = e.t, s
              })(p, A, le), qe && ea(0)), a ? (R = a._initted, Ge(1), a.render(a.duration(), !0, !0), M = y(Ce.a) - x + u + Y, S = Math.abs(u - M) > 1, Pe && S && h.splice(h.length - 2, 2), a.render(0, !0, !0), R || a.invalidate(!0), a.parent || a.totalTime(a.totalTime()), Ge(0)) : M = u, B && (B.value ? B.style["overflow" + Ce.a.toUpperCase()] = B.value : B.style.removeProperty("overflow-" + Ce.a));
              else if (K && ea() && !pe)
                for (C = K.parentNode; C && C !== me;) C._pinOffset && (i -= C._pinOffset, _ -= C._pinOffset), C = C.parentNode;
              E && E.forEach((e => e.revert(!1, !0))), De.start = i, De.end = _, r = o = qe ? D : ea(), pe || qe || (r < D && ea(D), De.scroll.rec = 0), De.revert(!1, !0), Qe = Ue(), O && ($e = -1, O.restart(!0)), ye = 0, a && Te && (a._initted || z) && a.progress() !== z && a.progress(z || 0, !0).render(a.time(), !0, !0), (U || Ze !== De.progress || pe) && (a && !Te && a.totalProgress(pe && i < -.001 && !Ze ? ce.utils.normalize(i, _, 0) : Ze, !0), De.progress = U || (r - i) / u === Ze ? 0 : Ze), X && Q && (b._pinOffset = Math.round(De.progress * M)), L && L.invalidate(), isNaN(V) || (V -= ce.getProperty(d, Ce.p), q -= ce.getProperty(g, Ce.p), Mt(d, Ce, V), Mt(c, Ce, V - (w || 0)), Mt(g, Ce, q), Mt(l, Ce, q - (w || 0))), U && !qe && De.update(), !J || qe || m || (m = !0, J(De), m = !1)
            }, De.getVelocity = () => (ea() - o) / (Ue() - be) * 1e3 || 0, De.endAnimation = () => {
              ma(De.callbackAnimation), a && (L ? L.progress(1) : a.paused() ? Te || ma(a, De.direction < 0, 1) : ma(a, a.reversed()))
            }, De.labelToScroll = e => a && a.labels && (i || De.refresh() || i) + a.labels[e] / a.duration() * u || 0, De.getTrailing = e => {
              let a = $a.indexOf(De),
                t = De.direction > 0 ? $a.slice(0, a).reverse() : $a.slice(a + 1);
              return (la(e) ? t.filter((a => a.vars.preventOverlaps === e)) : t).filter((e => De.direction > 0 ? e.end <= i : e.start >= _))
            }, De.update = (e, n, s) => {
              if (pe && !s && !e) return;
              let c, l, g, v, m, p, w, y, T = !0 === qe ? D : De.scroll(),
                A = e ? 0 : (T - i) / u,
                N = A < 0 ? 0 : A > 1 ? 1 : A || 0,
                R = De.progress;
              if (n && (o = r, r = pe ? ea() : T, _e && (P = I, I = a && !Te ? a.totalProgress() : N)), se && !N && X && !ye && !We && Je && i < T + (T - o) / (Ue() - be) * se && (N = 1e-4), N !== R && De.enabled) {
                if (c = De.isActive = !!N && N < 1, l = !!R && R < 1, p = c !== l, m = p || !!N != !!R, De.direction = N > R ? 1 : -1, De.progress = N, m && !ye && (g = N && !R ? 0 : 1 === N ? 1 : 1 === R ? 2 : 3, Te && (v = !p && "none" !== Ne[g + 1] && Ne[g + 1] || Ne[g], y = a && ("complete" === v || "reset" === v || v in a))), xe && (p || y) && (y || Y || !a) && (da(xe) ? xe(De) : De.getTrailing(xe).forEach((e => e.endAnimation()))), Te || (!L || ye || We ? a && a.totalProgress(N, !(!ye || !Qe && !e)) : (L._dp._time - L._start !== L._time && L.render(L._dp._time - L._start), L.resetTo ? L.resetTo("totalProgress", N, a._tTime / a._tDur) : (L.vars.totalProgress = N, L.invalidate().restart()))), X)
                  if (e && Q && (b.style[Q + Ce.os2] = C), Pe) {
                    if (m) {
                      if (w = !e && N > R && _ + 1 > T && T + 1 >= _a(je, Ce), le)
                        if (e || !c && !w) kt(X, b);
                        else {
                          let e = La(X, !0),
                            a = T - i;
                          kt(X, me, e.top + (Ce === ee ? a : 0) + Aa, e.left + (Ce === ee ? 0 : a) + Aa)
                        } ht(c || w ? h : f), S && N < 1 && c || k(x + (1 !== N || w ? 0 : M))
                    }
                  } else k(ta(x + M * N));
                _e && !t.tween && !ye && !We && O.restart(!0), H && (p || ie && N && (N < 1 || !Be)) && he(H.targets).forEach((e => e.classList[c || ie ? "add" : "remove"](H.className))), F && !Te && !e && F(De), m && !ye ? (Te && (y && ("complete" === v ? a.pause().totalProgress(1) : "reset" === v ? a.restart(!0).pause() : "restart" === v ? a.restart(!0) : a[v]()), F && F(De)), !p && Be || ($ && p && ua(De, $), Le[g] && ua(De, Le[g]), ie && (1 === N ? De.kill(!1, 1) : Le[g] = 0), p || (g = 1 === N ? 1 : 3, Le[g] && ua(De, Le[g]))), we && !c && Math.abs(De.getVelocity()) > (ga(we) ? we : 2500) && (ma(De.callbackAnimation), L ? L.progress(1) : ma(a, "reverse" === v ? 1 : !N, 1))) : Te && F && !ye && F(De)
              }
              if (G) {
                let e = pe ? T / pe.duration() * (pe._caScrollDist || 0) : T;
                j(e + (d._isFlipped ? 1 : 0)), G(e)
              }
              E && E(-T / pe.duration() * (pe._caScrollDist || 0))
            }, De.enable = (e, a) => {
              De.enabled || (De.enabled = !0, za(je, "resize", Qa), Ie || za(je, "scroll", Ka), ze && za(Tt, "refreshInit", ze), !1 !== e && (De.progress = Ze = 0, r = o = $e = ea()), !1 !== a && De.refresh())
            }, De.getTween = e => e && t ? t.tween : L, De.setPositions = (e, a, t, n) => {
              if (pe) {
                let t = pe.scrollTrigger,
                  n = pe.duration(),
                  s = t.end - t.start;
                e = t.start + s * e / n, a = t.start + s * a / n
              }
              De.refresh(!1, !1, {
                start: Xe(e, t && !!De._startClamp),
                end: Xe(a, t && !!De._endClamp)
              }, n), De.update()
            }, De.adjustPinSpacing = e => {
              if (T && e) {
                let a = T.indexOf(Ce.d) + 1;
                T[a] = parseFloat(T[a]) + e + Aa, T[1] = parseFloat(T[1]) + e + Aa, ht(T)
              }
            }, De.disable = (e, a) => {
              if (De.enabled && (!1 !== e && De.revert(!0, !0), De.enabled = De.isActive = !1, a || L && L.pause(), D = 0, n && (n.uncache = 1), ze && Ea(Tt, "refreshInit", ze), O && (O.pause(), t.tween && t.tween.kill() && (t.tween = 0)), !Ie)) {
                let e = $a.length;
                for (; e--;)
                  if ($a[e].scroller === je && $a[e] !== De) return;
                Ea(je, "resize", Qa), Ie || Ea(je, "scroll", Ka)
              }
            }, De.kill = (t, s) => {
              De.disable(t, s), L && !s && L.kill(), U && delete Ja[U];
              let r = $a.indexOf(De);
              r >= 0 && $a.splice(r, 1), r === Me && dt > 0 && Me--, r = 0, $a.forEach((e => e.scroller === De.scroller && (r = 1))), r || qe || (De.scroll.rec = 0), a && (a.scrollTrigger = null, t && a.revert({
                kill: !1
              }), s || a.kill()), c && [c, l, d, g].forEach((e => e.parentNode && e.parentNode.removeChild(e))), He === De && (He = 0), X && (n && (n.uncache = 1), r = 0, $a.forEach((e => e.pin === X && r++)), r || (n.spacer = 0)), e.onKill && e.onKill(De)
            }, $a.push(De), De.enable(!1, !1), B && B(De), a && a.add && !u) {
            let e = De.update;
            De.update = () => {
              De.update = e, i || _ || De.refresh()
            }, ce.delayedCall(.01, De.update), u = .01, i = _ = 0
          } else De.refresh();
          X && (() => {
            if (Fe !== it) {
              let e = Fe = it;
              requestAnimationFrame((() => e === it && ct(!0)))
            }
          })()
        }
        static register(e) {
          return le || (ce = e || sa(), na() && window.document && Tt.enable(), le = Ye), le
        }
        static defaults(e) {
          if (e)
            for (let a in e) qa[a] = e[a];
          return qa
        }
        static disable(e, a) {
          Ye = 0, $a.forEach((t => t[a ? "kill" : "disable"](e))), Ea(de, "wheel", Ka), Ea(ge, "scroll", Ka), clearInterval(we), Ea(ge, "touchcancel", aa), Ea(me, "touchstart", aa), Da(Ea, ge, "pointerdown,touchstart,mousedown", Ze), Da(Ea, ge, "pointerup,touchend,mouseup", ea), pe.kill(), ca(Ea);
          for (let e = 0; e < V.length; e += 3) Ba(Ea, V[e], V[e + 1]), Ba(Ea, V[e], V[e + 2])
        }
        static enable() {
          if (de = window, ge = document, ve = ge.documentElement, me = ge.body, ce && (he = ce.utils.toArray, fe = ce.utils.clamp, Oe = ce.core.context || aa, Ge = ce.core.suppressOverwrites || aa, De = de.history.scrollRestoration || "auto", lt = de.pageYOffset, ce.core.globals("ScrollTrigger", Tt), me)) {
            Ye = 1, ze = document.createElement("div"), ze.style.height = "100vh", ze.style.position = "absolute", _t(), Qe(), _e.register(ce), Tt.isTouch = _e.isTouch, Re = _e.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), za(de, "wheel", Ka), ue = [de, ge, ve, me], ce.matchMedia ? (Tt.matchMedia = e => {
              let a, t = ce.matchMedia();
              for (a in e) t.add(a, e[a]);
              return t
            }, ce.addEventListener("matchMediaInit", (() => rt())), ce.addEventListener("matchMediaRevert", (() => st())), ce.addEventListener("matchMedia", (() => {
              ct(0, 1), tt("matchMedia")
            })), ce.matchMedia("(orientation: portrait)", (() => (Xa(), Xa)))) : console.warn("Requires GSAP 3.11.0 or later"), Xa(), za(ge, "scroll", Ka);
            let e, a, t = me.style,
              n = t.borderTopStyle,
              s = ce.core.Animation.prototype;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), t.borderTopStyle = "solid", e = La(me), ee.m = Math.round(e.top + ee.sc()) || 0, Z.m = Math.round(e.left + Z.sc()) || 0, n ? t.borderTopStyle = n : t.removeProperty("border-top-style"), we = setInterval(Ya, 250), ce.delayedCall(.5, (() => We = 0)), za(ge, "touchcancel", aa), za(me, "touchstart", aa), Da(za, ge, "pointerdown,touchstart,mousedown", Ze), Da(za, ge, "pointerup,touchend,mouseup", ea), xe = ce.utils.checkPrefix("transform"), mt.push(xe), le = Ue(), pe = ce.delayedCall(.2, ct).pause(), je = [ge, "visibilitychange", () => {
                let e = de.innerWidth,
                  a = de.innerHeight;
                ge.hidden ? (Ce = e, Te = a) : Ce === e && Te === a || Qa()
              }, ge, "DOMContentLoaded", ct, de, "load", ct, de, "resize", Qa], ca(za), $a.forEach((e => e.enable(0, 1))), a = 0; a < V.length; a += 3) Ba(Ea, V[a], V[a + 1]), Ba(Ea, V[a], V[a + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (Be = !!e.limitCallbacks);
          let a = e.syncInterval;
          a && clearInterval(we) || (we = a) && setInterval(Ya, a), "ignoreMobileResize" in e && (Pe = 1 === Tt.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (ca(Ea) || ca(za, e.autoRefreshEvents || "none"), Ae = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, a) {
          let t = ae(e),
            n = V.indexOf(t),
            s = ra(t);
          ~n && V.splice(n, s ? 6 : 2), a && (s ? q.unshift(de, a, me, a, ve, a) : q.unshift(t, a))
        }
        static clearMatchMedia(e) {
          $a.forEach((a => a._ctx && a._ctx.query === e && a._ctx.kill(!0, !0)))
        }
        static isInViewport(e, a, t) {
          let n = (la(e) ? ae(e) : e).getBoundingClientRect(),
            s = n[t ? wa : ya] * a || 0;
          return t ? n.right - s > 0 && n.left + s < de.innerWidth : n.bottom - s > 0 && n.top + s < de.innerHeight
        }
        static positionInViewport(e, a, t) {
          la(e) && (e = ae(e));
          let n = e.getBoundingClientRect(),
            s = n[t ? wa : ya],
            r = null == a ? s / 2 : a in Fa ? Fa[a] * s : ~a.indexOf("%") ? parseFloat(a) * s / 100 : parseFloat(a) || 0;
          return t ? (n.left + r) / de.innerWidth : (n.top + r) / de.innerHeight
        }
        static killAll(e) {
          if ($a.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = Za.killAll || [];
            Za = {}, e.forEach((e => e()))
          }
        }
      }
      Tt.version = "3.12.2", Tt.saveStyles = e => e ? he(e).forEach((e => {
        if (e && e.style) {
          let a = nt.indexOf(e);
          a >= 0 && nt.splice(a, 5), nt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ce.core.getCache(e), Oe())
        }
      })) : nt, Tt.revert = (e, a) => rt(!e, a), Tt.create = (e, a) => new Tt(e, a), Tt.refresh = e => e ? Qa() : (le || Tt.register()) && ct(!0), Tt.update = e => ++V.cache && gt(!0 === e ? 2 : 0), Tt.clearScrollMemory = ot, Tt.maxScroll = (e, a) => _a(e, a ? Z : ee), Tt.getScrollFunc = (e, a) => te(ae(e), a ? Z : ee), Tt.getById = e => Ja[e], Tt.getAll = () => $a.filter((e => "ScrollSmoother" !== e.vars.id)), Tt.isScrolling = () => !!Je, Tt.snapDirectional = Oa, Tt.addEventListener = (e, a) => {
        let t = Za[e] || (Za[e] = []);
        ~t.indexOf(a) || t.push(a)
      }, Tt.removeEventListener = (e, a) => {
        let t = Za[e],
          n = t && t.indexOf(a);
        n >= 0 && t.splice(n, 1)
      }, Tt.batch = (e, a) => {
        let t, n = [],
          s = {},
          r = a.interval || .016,
          o = a.batchMax || 1e9,
          i = (e, a) => {
            let t = [],
              n = [],
              s = ce.delayedCall(r, (() => {
                a(t, n), t = [], n = []
              })).pause();
            return e => {
              t.length || s.restart(!0), t.push(e.trigger), n.push(e), o <= t.length && s.progress(1)
            }
          };
        for (t in a) s[t] = "on" === t.substr(0, 2) && da(a[t]) && "onRefreshInit" !== t ? i(0, a[t]) : a[t];
        return da(o) && (o = o(), za(Tt, "refresh", (() => o = a.batchMax()))), he(e).forEach((e => {
          let a = {};
          for (t in s) a[t] = s[t];
          a.trigger = e, n.push(Tt.create(a))
        })), n
      };
      let jt, St = (e, a, t, n) => (a > n ? e(n) : a < 0 && e(0), t > n ? (n - a) / (t - a) : t < 0 ? a / (a - t) : 1),
        Gt = (e, a) => {
          !0 === a ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === a ? "auto" : a ? "pan-" + a + (_e.isTouch ? " pinch-zoom" : "") : "none", e === ve && Gt(me, a)
        },
        At = {
          auto: 1,
          scroll: 1
        },
        It = ({
          event: e,
          target: a,
          axis: t
        }) => {
          let n, s = (e.changedTouches ? e.changedTouches[0] : e).target,
            r = s._gsap || ce.core.getCache(s),
            o = Ue();
          if (!r._isScrollT || o - r._isScrollT > 2e3) {
            for (; s && s !== me && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !At[(n = Ia(s)).overflowY] && !At[n.overflowX]);) s = s.parentNode;
            r._isScroll = s && s !== a && !ra(s) && (At[(n = Ia(s)).overflowY] || At[n.overflowX]), r._isScrollT = o
          }(r._isScroll || "x" === t) && (e.stopPropagation(), e._gsapAllow = !0)
        },
        Pt = (e, a, t, n) => _e.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: a,
          onWheel: n = n && It,
          onPress: n,
          onDrag: n,
          onScroll: n,
          onEnable: () => t && za(ge, _e.eventTypes[0], Nt, !1, !0),
          onDisable: () => Ea(ge, _e.eventTypes[0], Nt, !0)
        }),
        Lt = /(input|label|select|textarea)/i,
        Nt = e => {
          let a = Lt.test(e.target.tagName);
          (a || jt) && (e._gsapAllow = !0, jt = a)
        };
      Tt.sort = e => $a.sort(e || ((e, a) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (a.start + -1e6 * (a.vars.refreshPriority || 0)))), Tt.observe = e => new _e(e), Tt.normalizeScroll = e => {
        if (void 0 === e) return Ie;
        if (!0 === e && Ie) return Ie.enable();
        if (!1 === e) return Ie && Ie.kill();
        let a = e instanceof _e ? e : (e => {
          va(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let a, t, n, s, r, o, i, _, {
              normalizeScrollX: c,
              momentum: l,
              allowNestedScroll: d,
              onRelease: g
            } = e,
            v = ae(e.target) || ve,
            m = ce.core.globals().ScrollSmoother,
            u = m && m.get(),
            p = Re && (e.content && ae(e.content) || u && !1 !== e.content && !u.smooth() && u.content()),
            h = te(v, ee),
            f = te(v, Z),
            b = 1,
            w = (_e.isTouch && de.visualViewport ? de.visualViewport.scale * de.visualViewport.width : de.outerWidth) / de.innerWidth,
            y = 0,
            k = da(l) ? () => l(a) : () => l || 2.8,
            x = Pt(v, e.type, !0, d),
            M = () => s = !1,
            C = aa,
            T = aa,
            j = () => {
              t = _a(v, ee), T = fe(Re ? 1 : 0, t), c && (C = fe(0, _a(v, Z))), n = it
            },
            S = () => {
              p._gsap.y = ta(parseFloat(p._gsap.y) + h.offset) + "px", p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
            },
            G = () => {
              j(), r.isActive() && r.vars.scrollY > t && (h() > t ? r.progress(1) && h(t) : r.resetTo("scrollY", t))
            };
          return p && ce.set(p, {
            y: "+=0"
          }), e.ignoreCheck = e => Re && "touchmove" === e.type && (() => {
            if (s) {
              requestAnimationFrame(M);
              let e = ta(a.deltaY / 2),
                t = T(h.v - e);
              if (p && t !== h.v + h.offset) {
                h.offset = t - h.v;
                let e = ta((parseFloat(p && p._gsap.y) || 0) - h.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", p._gsap.y = e + "px", h.cacheID = V.cache, gt()
              }
              return !0
            }
            h.offset && S(), s = !0
          })() || b > 1.05 && "touchstart" !== e.type || a.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            s = !1;
            let e = b;
            b = ta((de.visualViewport && de.visualViewport.scale || 1) / w), r.pause(), e !== b && Gt(v, b > 1.01 || !c && "x"), o = f(), i = h(), j(), n = it
          }, e.onRelease = e.onGestureStart = (e, a) => {
            if (h.offset && S(), a) {
              V.cache++;
              let a, n, s = k();
              c && (a = f(), n = a + .05 * s * -e.velocityX / .227, s *= St(f, a, n, _a(v, Z)), r.vars.scrollX = C(n)), a = h(), n = a + .05 * s * -e.velocityY / .227, s *= St(h, a, n, _a(v, ee)), r.vars.scrollY = T(n), r.invalidate().duration(s).play(.01), (Re && r.vars.scrollY >= t || a >= t - 1) && ce.to({}, {
                onUpdate: G,
                duration: s
              })
            } else _.restart(!0);
            g && g(e)
          }, e.onWheel = () => {
            r._ts && r.pause(), Ue() - y > 1e3 && (n = 0, y = Ue())
          }, e.onChange = (e, a, t, s, r) => {
            if (it !== n && j(), a && c && f(C(s[2] === a ? o + (e.startX - e.x) : f() + a - s[1])), t) {
              h.offset && S();
              let a = r[2] === t,
                n = a ? i + e.startY - e.y : h() + t - r[1],
                s = T(n);
              a && n !== s && (i += s - n), h(s)
            }(t || a) && gt()
          }, e.onEnable = () => {
            Gt(v, !c && "x"), Tt.addEventListener("refresh", G), za(de, "resize", G), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = f.smooth = !1), x.enable()
          }, e.onDisable = () => {
            Gt(v, !0), Ea(de, "resize", G), Tt.removeEventListener("refresh", G), x.kill()
          }, e.lockAxis = !1 !== e.lockAxis, a = new _e(e), a.iOS = Re, Re && !h() && h(1), Re && ce.ticker.add(aa), _ = a._dc, r = ce.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: xt(h, h(), (() => r.pause()))
            },
            onUpdate: gt,
            onComplete: _.vars.onComplete
          }), a
        })(e);
        return Ie && Ie.target === a.target && Ie.kill(), ra(a.target) && (Ie = a), a
      }, Tt.core = {
        _getVelocityProp: ne,
        _inputObserver: Pt,
        _scrollers: V,
        _proxies: q,
        bridge: {
          ss: () => {
            Je || tt("scrollStart"), Je = Ue()
          },
          ref: () => ye
        }
      }, sa() && ce.registerPlugin(Tt);
      let Rt, Ot, Dt, zt, Et, Bt, Vt, qt, Ft, Ht, Wt, Ut, $t, Jt, Yt, Kt, Xt = () => "undefined" != typeof window,
        Qt = () => Rt || Xt() && (Rt = window.gsap) && Rt.registerPlugin && Rt,
        Zt = e => Ht.maxScroll(e || Dt);
      class en {
        constructor(e) {
          Ot || en.register(Rt) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, Wt && Wt.kill(), Wt = this, Yt(this);
          let a, t, n, s, r, o, i, _, c, l, d, g, v, m, u, {
              smoothTouch: p,
              onUpdate: h,
              onStop: f,
              smooth: b,
              onFocusIn: w,
              normalizeScroll: y,
              wholePixels: k
            } = e,
            x = this,
            M = e.effectsPrefix || "",
            C = Ht.getScrollFunc(Dt),
            T = 1 === Ht.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8,
            j = T && +e.speed || 1,
            S = 0,
            G = 0,
            A = 1,
            I = $t(0),
            P = () => I.update(-S),
            L = {
              y: 0
            },
            N = () => a.style.overflow = "visible",
            R = e => {
              e.update();
              let a = e.getTween();
              a && (a.pause(), a._time = a._dur, a._tTime = a._tDur), m = !1, e.animation.progress(e.progress, !0)
            },
            O = (e, t) => {
              (e !== S && !l || t) && (k && (e = Math.round(e)), T && (a.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", a._gsap.y = e + "px"), G = e - S, S = e, Ht.isUpdating || en.isRefreshing || Ht.update())
            },
            D = function(e) {
              return arguments.length ? (e < 0 && (e = 0), L.y = -e, m = !0, l ? S = -e : O(-e), Ht.isRefreshing ? s.update() : C(e / j), this) : -S
            },
            z = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!Ht.isRefreshing) {
                let e = Zt(t) * j;
                e < -S && D(e), Kt.restart(!0)
              }
            })),
            E = e => {
              t.scrollTop = 0, e.target.contains && e.target.contains(t) || w && !1 === w(this, e) || (Ht.isInViewport(e.target) || e.target === u || this.scrollTo(e.target, !1, "center center"), u = e.target)
            },
            B = (e, a) => {
              if (e < a.start) return e;
              let t = isNaN(a.ratio) ? 1 : a.ratio,
                n = a.end - a.start,
                s = e - a.start,
                r = a.offset || 0,
                o = a.pins || [],
                i = o.offset || 0,
                _ = a._startClamp && a.start <= 0 || a.pins && a.pins.offset ? 0 : a._endClamp && a.end === Zt() ? 1 : .5;
              return o.forEach((a => {
                n -= a.distance, a.nativeStart <= e && (s -= a.distance)
              })), i && (s *= (n - i / t) / n), e + (s - r * _) / t - s
            },
            V = (e, a, t) => {
              t || (e.pins.length = e.pins.offset = 0);
              let n, s, r, o, i, _, c, l, d = e.pins,
                g = e.markers;
              for (c = 0; c < a.length; c++)
                if (l = a[c], e.trigger && l.trigger && e !== l && (l.trigger === e.trigger || l.pinnedContainer === e.trigger || e.trigger.contains(l.trigger)) && (i = l._startNative || l._startClamp || l.start, _ = l._endNative || l._endClamp || l.end, r = B(i, e), o = l.pin && _ > 0 ? r + (_ - i) : B(_, e), l.setPositions(r, o, !0, (l._startClamp ? Math.max(0, r) : r) - i), l.markerStart && g.push(Rt.quickSetter([l.markerStart, l.markerEnd], "y", "px")), l.pin && l.end > 0 && !t)) {
                  if (n = l.end - l.start, s = e._startClamp && l.start < 0, s) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void V(e, a);
                    n += l.start, d.offset = -l.start
                  }
                  d.push({
                    start: l.start,
                    nativeStart: i,
                    end: l.end,
                    distance: n,
                    trig: l
                  }), e.setPositions(e.start, e.end + (s ? -l.start : n), !0)
                }
            },
            q = (e, a) => {
              r.forEach((t => V(t, e, a)))
            },
            F = () => {
              N(), requestAnimationFrame(N), r && (Ht.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), r.forEach((e => {
                let a = e._startClamp || e.start,
                  t = e.autoSpeed ? Math.min(Zt(), e.end) : a + Math.abs((e.end - a) / e.ratio),
                  n = t - e.end;
                if (a -= n / 2, t -= n / 2, a > t) {
                  let e = a;
                  a = t, t = e
                }
                e._startClamp && a < 0 ? (t = e.ratio < 0 ? Zt() : e.end / e.ratio, n = t - e.end, a = 0) : (e.ratio < 0 || e._endClamp && t >= Zt()) && (t = Zt(), a = e.ratio < 0 || e.ratio > 1 ? 0 : t - (t - e.start) / e.ratio, n = (t - a) * e.ratio - (e.end - e.start)), e.offset = n || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(a, t, !0)
              })), q(Ht.sort())), I.reset()
            },
            H = () => Ht.addEventListener("refresh", F),
            W = () => r && r.forEach((e => e.vars.onRefresh(e))),
            U = () => (r && r.forEach((e => e.vars.onRefreshInit(e))), W),
            $ = (e, a, t, n) => () => {
              let s = "function" == typeof a ? a(t, n) : a;
              s || 0 === s || (s = n.getAttribute("data-" + M + e) || ("speed" === e ? 1 : 0)), n.setAttribute("data-" + M + e, s);
              let r = "clamp(" === (s + "").substr(0, 6);
              return {
                clamp: r,
                value: r ? s.substr(6, s.length - 7) : s
              }
            },
            J = (e, a, n, s, o) => {
              o = ("function" == typeof o ? o(s, e) : o) || 0;
              let i, _, c, l, d, g, v = $("speed", a, s, e),
                m = $("lag", n, s, e),
                u = Rt.getProperty(e, "y"),
                p = e._gsap,
                h = [],
                f = () => {
                  a = v(), n = parseFloat(m().value), i = parseFloat(a.value) || 1, c = "auto" === a.value, d = c || _ && _._startClamp && _.start <= 0 || h.offset ? 0 : _ && _._endClamp && _.end === Zt() ? 1 : .5, l && l.kill(), l = n && Rt.to(e, {
                    ease: Ut,
                    overwrite: !1,
                    y: "+=0",
                    duration: n
                  }), _ && (_.ratio = i, _.autoSpeed = c)
                },
                b = () => {
                  p.y = u + "px", p.renderTransform(1), f()
                },
                w = [],
                y = 0,
                k = a => {
                  if (c) {
                    b();
                    let t = ((e, a) => {
                      let t, n, s = e.parentNode || Et,
                        r = e.getBoundingClientRect(),
                        o = s.getBoundingClientRect(),
                        i = o.top - r.top,
                        _ = o.bottom - r.bottom,
                        c = (Math.abs(i) > Math.abs(_) ? i : _) / (1 - a),
                        l = -c * a;
                      return c > 0 && (t = o.height / (Dt.innerHeight + o.height), n = .5 === t ? 2 * o.height : 2 * Math.min(o.height, Math.abs(-c * t / (2 * t - 1))) * (a || 1), l += a ? -n * a : -n / 2, c += n), {
                        change: c,
                        offset: l
                      }
                    })(e, Ft(0, 1, -a.start / (a.end - a.start)));
                    y = t.change, g = t.offset
                  } else g = h.offset || 0, y = (a.end - a.start - g) * (1 - i);
                  h.forEach((e => y -= e.distance * (1 - i))), a.offset = y || .001, a.vars.onUpdate(a), l && l.progress(1)
                };
              return f(), (1 !== i || c || l) && (_ = Ht.create({
                trigger: c ? e.parentNode : e,
                start: () => a.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o,
                end: () => a.value < 0 ? "max" : a.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o,
                scroller: t,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: b,
                onRefresh: k,
                onKill: e => {
                  let a = r.indexOf(e);
                  a >= 0 && r.splice(a, 1), b()
                },
                onUpdate: e => {
                  let a, t, n, s = u + y * (e.progress - d),
                    r = h.length,
                    o = 0;
                  if (e.offset) {
                    if (r) {
                      for (t = -S, n = e.end; r--;) {
                        if (a = h[r], a.trig.isActive || t >= a.start && t <= a.end) return void(l && (a.trig.progress += a.trig.direction < 0 ? .001 : -.001, a.trig.update(0, 0, 1), l.resetTo("y", parseFloat(p.y), -G, !0), A && l.progress(1)));
                        t > a.end && (o += a.distance), n -= a.distance
                      }
                      s = u + o + y * ((Rt.utils.clamp(e.start, e.end, t) - e.start - o) / (n - e.start) - d)
                    }
                    w.length && !c && w.forEach((e => e(s - o))), i = s + g, s = Math.round(1e5 * i) / 1e5 || 0, l ? (l.resetTo("y", s, -G, !0), A && l.progress(1)) : (p.y = s + "px", p.renderTransform(1))
                  }
                  var i
                }
              }), k(_), Rt.core.getCache(_.trigger).stRevert = U, _.startY = u, _.pins = h, _.markers = w, _.ratio = i, _.autoSpeed = c, e.style.willChange = "transform"), _
            };

          function Y() {
            return n = a.clientHeight, a.style.overflow = "visible", Bt.style.height = Dt.innerHeight + (n - Dt.innerHeight) / j + "px", n - Dt.innerHeight
          }
          H(), Ht.addEventListener("killAll", H), Rt.delayedCall(.5, (() => A = 0)), this.scrollTop = D, this.scrollTo = (e, a, t) => {
            let n = Rt.utils.clamp(0, Zt(), isNaN(e) ? this.offset(e, t) : +e);
            a ? l ? Rt.to(this, {
              duration: T,
              scrollTop: n,
              overwrite: "auto",
              ease: Ut
            }) : C(n) : D(n)
          }, this.offset = (e, a) => {
            let t, n = (e = qt(e)[0]).style.cssText,
              s = Ht.create({
                trigger: e,
                start: a || "top top"
              });
            return r && (A ? Ht.refresh() : q([s], !0)), t = s.start / j, s.kill(!1), e.style.cssText = n, Rt.core.getCache(e).uncache = 1, t
          }, this.content = function(e) {
            if (arguments.length) {
              let t = qt(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Bt.children[0];
              return t !== a && (a = t, c = a.getAttribute("style") || "", z && z.observe(a), Rt.set(a, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), T || Rt.set(a, {
                clearProps: "transform"
              })), this
            }
            return a
          }, this.wrapper = function(e) {
            return arguments.length ? (t = qt(e || "#smooth-wrapper")[0] || (e => {
              let a = zt.querySelector(".ScrollSmoother-wrapper");
              return a || (a = zt.createElement("div"), a.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(a, e), a.appendChild(e)), a
            })(a), _ = t.getAttribute("style") || "", Y(), Rt.set(t, T ? {
              overflow: "hidden",
              position: "fixed",
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            } : {
              overflow: "visible",
              position: "relative",
              width: "100%",
              height: "auto",
              top: "auto",
              bottom: "auto",
              left: "auto",
              right: "auto"
            }), this) : t
          }, this.effects = (e, a) => {
            if (r || (r = []), !e) return r.slice(0);
            (e = qt(e)).forEach((e => {
              let a = r.length;
              for (; a--;) r[a].trigger === e && r[a].kill()
            })), a = a || {};
            let t, n, {
                speed: s,
                lag: o,
                effectsPadding: i
              } = a,
              _ = [];
            for (t = 0; t < e.length; t++) n = J(e[t], s, o, t, i), n && _.push(n);
            return r.push(..._), _
          }, this.sections = (e, a) => {
            if (o || (o = []), !e) return o.slice(0);
            let t = qt(e).map((e => Ht.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: a => {
                e.style.opacity = a.isActive ? "1" : "0", e.style.pointerEvents = a.isActive ? "all" : "none"
              }
            })));
            return a && a.add ? o.push(...t) : o = t.slice(0), t
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => O(e || 0 === e ? e : S), this.getVelocity = () => I.getVelocity(-S), Ht.scrollerProxy(t, {
            scrollTop: D,
            scrollHeight: () => Y() && Bt.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!T,
            content: a,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: Dt.innerWidth,
              height: Dt.innerHeight
            })
          }), Ht.defaults({
            scroller: t
          });
          let K = Ht.getAll().filter((e => e.scroller === Dt || e.scroller === t));
          K.forEach((e => e.revert(!0, !0))), s = Ht.create({
            animation: Rt.fromTo(L, {
              y: 0
            }, {
              y: () => -Y(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = m;
                  e && (R(s), L.y = S), O(L.y, e), P(), h && !l && h(x)
                }
              }
            }),
            onRefreshInit: e => {
              if (en.isRefreshing) return;
              if (en.isRefreshing = !0, r) {
                let e = Ht.getAll().filter((e => !!e.pin));
                r.forEach((a => {
                  a.vars.pinnedContainer || e.forEach((e => {
                    if (e.pin.contains(a.trigger)) {
                      let t = a.vars;
                      t.pinnedContainer = e.pin, a.vars = null, a.init(t, a.animation)
                    }
                  }))
                }))
              }
              let a = e.getTween();
              v = a && a._end > a._dp._time, g = S, L.y = 0, T && (1 === Ht.isTouch && (t.style.position = "absolute"), t.scrollTop = 0, 1 === Ht.isTouch && (t.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, Y() / j), v || R(e), L.y = -C() * j, O(L.y), A || e.animation.progress(Rt.utils.clamp(0, 1, g / j / -e.end)), v && (e.progress -= .001, e.update()), en.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: Dt,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => Y() / j,
            onScrubComplete: () => {
              I.reset(), f && f(this)
            },
            scrub: T || !0
          }), this.smooth = function(a) {
            return arguments.length && (T = a || 0, j = T && +e.speed || 1, s.scrubDuration(a)), s.getTween() ? s.getTween().duration() : 0
          }, s.getTween() && (s.getTween().vars.ease = e.ease || Ut), this.scrollTrigger = s, e.effects && this.effects(!0 === e.effects ? "[data-" + M + "speed], [data-" + M + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), K.forEach((e => {
            e.vars.scroller = t, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, a) {
            return arguments.length ? (!!l !== e && (e ? (s.getTween() && s.getTween().pause(), C(-S / j), I.reset(), d = Ht.normalizeScroll(), d && d.disable(), l = Ht.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => D(-S)
            }), l.nested = Jt(Et, "wheel,touch,scroll", !0, !1 !== a)) : (l.nested.kill(), l.kill(), l = 0, d && d.enable(), s.progress = (-S / j - s.start) / (s.end - s.start), R(s))), this) : !!l
          }, this.kill = this.revert = () => {
            this.paused(!1), R(s), s.kill();
            let e = (r || []).concat(o || []),
              n = e.length;
            for (; n--;) e[n].kill();
            Ht.scrollerProxy(t), Ht.removeEventListener("killAll", H), Ht.removeEventListener("refresh", F), t.style.cssText = _, a.style.cssText = c;
            let l = Ht.defaults({});
            l && l.scroller === t && Ht.defaults({
              scroller: Dt
            }), this.normalizer && Ht.normalizeScroll(!1), clearInterval(i), Wt = null, z && z.disconnect(), Bt.style.removeProperty("height"), Dt.removeEventListener("focusin", E)
          }, this.refresh = (e, a) => s.refresh(e, a), y && (this.normalizer = Ht.normalizeScroll(!0 === y ? {
            debounce: !0,
            content: !T && a
          } : y)), Ht.config(e), "overscrollBehavior" in Dt.getComputedStyle(Bt) && Rt.set([Bt, Et], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in Dt.getComputedStyle(Bt) && Rt.set([Bt, Et], {
            scrollBehavior: "auto"
          }), Dt.addEventListener("focusin", E), i = setInterval(P, 250), "loading" === zt.readyState || requestAnimationFrame((() => Ht.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return Ot || (Rt = e || Qt(), Xt() && window.document && (Dt = window, zt = document, Et = zt.documentElement, Bt = zt.body), Rt && (qt = Rt.utils.toArray, Ft = Rt.utils.clamp, Ut = Rt.parseEase("expo"), Yt = Rt.core.context || function() {}, Ht = Rt.core.globals().ScrollTrigger, Rt.core.globals("ScrollSmoother", en), Bt && Ht && (Kt = Rt.delayedCall(.2, (() => Ht.isRefreshing || Wt && Wt.refresh())).pause(), Vt = [Dt, zt, Et, Bt], $t = Ht.core._getVelocityProp, Jt = Ht.core._inputObserver, en.refresh = Ht.refresh, Ot = 1))), Ot
        }
      }
      en.version = "3.12.2", en.create = e => Wt && e && Wt.content() === qt(e.content)[0] ? Wt : new en(e), en.get = () => Wt, Qt() && Rt.registerPlugin(en);
      let an, tn, nn, sn, rn, on, _n, cn, ln = () => "undefined" != typeof window,
        dn = () => an || ln() && (an = window.gsap) && an.registerPlugin && an,
        gn = e => "string" == typeof e,
        vn = e => "function" == typeof e,
        mn = (e, a) => {
          let t = "x" === a ? "Width" : "Height",
            n = "scroll" + t,
            s = "client" + t;
          return e === nn || e === sn || e === rn ? Math.max(sn[n], rn[n]) - (nn["inner" + t] || sn[s] || rn[s]) : e[n] - e["offset" + t]
        },
        un = (e, a) => {
          let t = "scroll" + ("x" === a ? "Left" : "Top");
          return e === nn && (null != e.pageXOffset ? t = "page" + a.toUpperCase() + "Offset" : e = null != sn[t] ? sn : rn), () => e[t]
        },
        pn = (e, a) => {
          if (!(e = on(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let t = e.getBoundingClientRect(),
            n = !a || a === nn || a === rn,
            s = n ? {
              top: sn.clientTop - (nn.pageYOffset || sn.scrollTop || rn.scrollTop || 0),
              left: sn.clientLeft - (nn.pageXOffset || sn.scrollLeft || rn.scrollLeft || 0)
            } : a.getBoundingClientRect(),
            r = {
              x: t.left - s.left,
              y: t.top - s.top
            };
          return !n && a && (r.x += un(a, "x")(), r.y += un(a, "y")()), r
        },
        hn = (e, a, t, n, s) => isNaN(e) || "object" == typeof e ? gn(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + n - s : "max" === e ? mn(a, t) - s : Math.min(mn(a, t), pn(e, a)[t] - s) : parseFloat(e) - s,
        fn = () => {
          an = dn(), ln() && an && "undefined" != typeof document && document.body && (nn = window, rn = document.body, sn = document.documentElement, on = an.utils.toArray, an.config({
            autoKillThreshold: 7
          }), _n = an.config(), tn = 1)
        };
      const bn = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          an = e, fn()
        },
        init(e, a, t, n, s) {
          tn || fn();
          let r = this,
            o = an.getProperty(e, "scrollSnapType");
          r.isWin = e === nn, r.target = e, r.tween = t, a = ((e, a, t, n) => {
            if (vn(e) && (e = e(a, t, n)), "object" != typeof e) return gn(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let s, r = {};
              for (s in e) r[s] = "onAutoKill" !== s && vn(e[s]) ? e[s](a, t, n) : e[s];
              return r
            }
          })(a, n, e, s), r.vars = a, r.autoKill = !!a.autoKill, r.getX = un(e, "x"), r.getY = un(e, "y"), r.x = r.xPrev = r.getX(), r.y = r.yPrev = r.getY(), cn || (cn = an.core.globals().ScrollTrigger), "smooth" === an.getProperty(e, "scrollBehavior") && an.set(e, {
            scrollBehavior: "auto"
          }), o && "none" !== o && (r.snap = 1, r.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != a.x ? (r.add(r, "x", r.x, hn(a.x, e, "x", r.x, a.offsetX || 0), n, s), r._props.push("scrollTo_x")) : r.skipX = 1, null != a.y ? (r.add(r, "y", r.y, hn(a.y, e, "y", r.y, a.offsetY || 0), n, s), r._props.push("scrollTo_y")) : r.skipY = 1
        },
        render(e, a) {
          let t, n, s, r, o, i = a._pt,
            {
              target: _,
              tween: c,
              autoKill: l,
              xPrev: d,
              yPrev: g,
              isWin: v,
              snap: m,
              snapInline: u
            } = a;
          for (; i;) i.r(e, i.d), i = i._next;
          t = v || !a.skipX ? a.getX() : d, n = v || !a.skipY ? a.getY() : g, s = n - g, r = t - d, o = _n.autoKillThreshold, a.x < 0 && (a.x = 0), a.y < 0 && (a.y = 0), l && (!a.skipX && (r > o || r < -o) && t < mn(_, "x") && (a.skipX = 1), !a.skipY && (s > o || s < -o) && n < mn(_, "y") && (a.skipY = 1), a.skipX && a.skipY && (c.kill(), a.vars.onAutoKill && a.vars.onAutoKill.apply(c, a.vars.onAutoKillParams || []))), v ? nn.scrollTo(a.skipX ? t : a.x, a.skipY ? n : a.y) : (a.skipY || (_.scrollTop = a.y), a.skipX || (_.scrollLeft = a.x)), !m || 1 !== e && 0 !== e || (n = _.scrollTop, t = _.scrollLeft, u ? _.style.scrollSnapType = u : _.style.removeProperty("scroll-snap-type"), _.scrollTop = n + 1, _.scrollLeft = t + 1, _.scrollTop = n, _.scrollLeft = t), a.xPrev = a.x, a.yPrev = a.y, cn && cn.update()
        },
        kill(e) {
          let a = "scrollTo" === e;
          (a || "scrollTo_x" === e) && (this.skipX = 1), (a || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      bn.max = mn, bn.getOffset = pn, bn.buildGetter = un, dn() && an.registerPlugin(bn);
      const wn = e => {
        const a = h(),
          t = (e, n) => n?.requiresAuth && !a?.nickname ? e : [...e, {
            ...n,
            ...n.children ? {
              children: n.children.reduce(t, [])
            } : []
          }];
        return (0, l.useMemo)((() => e.reduce(t, [])), [e, a?.nickname])
      };
      var yn = t(20270),
        kn = t(3860);
      const xn = (e, a, t, n) => ({
          event: e || "nav_click",
          link_url: a,
          text: t,
          element_placement: `Global Nav > ${n}`?.toLowerCase()
        }),
        Mn = () => {
          const e = (0, v.A)(),
            [a] = (0, o.getLocale)(),
            t = h();
          return n => {
            if (!n.path) return n.domain;
            const s = [
                ["username", t?.nickname]
              ],
              r = ((e, a) => a.reduce(((e, [a, t]) => e.replaceAll(`{${a}}`, t)), e))(n.path, s),
              i = "www" === n.domain && "www" !== e.currentSite?.site ? ((e, a) => {
                if (!a || a.iso === o.englishLocale.iso) return e;
                const t = a.subdomaincom;
                return "/" === e[0] ? t + e : `${t}/${e}`
              })(r, a) : r;
            return n.domain + i
          }
        },
        Cn = "nav-internal",
        Tn = "nav-external",
        jn = "nav-dropdown",
        Sn = "nav-no-link",
        Gn = "games-menu",
        An = (0, o.defineMessages)({
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
        In = ({
          children: e,
          location: a,
          className: t,
          isLegacy: n,
          label: s,
          type: c,
          target: d,
          gaEvent: g,
          gaText: v,
          gaBreadCrumb: m,
          dataTestId: u,
          onClick: p,
          ...h
        }) => {
          const f = (0, o.useIntl)(),
            {
              track: b
            } = (0, i.useGtmTrack)(),
            w = Mn(),
            {
              dispatch: y
            } = (0, _.useRockstarEventDispatcher)(),
            x = k(),
            M = (0, l.useMemo)((() => {
              const e = {};
              return "_blank" === d && (e["aria-label"] = f.formatMessage(An.nav_opens_in_new_window, {
                text: s
              }), e.rel = "noopener"), e
            }), [s, d]);
          if (!a && c === Sn && u) {
            const a = () => {
              b(xn(g, "", v, m)), y(u)
            };
            return (0, r.jsx)("button", {
              type: "button",
              className: t,
              onClick: () => a(),
              "data-testid": u,
              ...h,
              ...M,
              children: e
            })
          }
          if (!a) return null;
          const C = w(a),
            T = Boolean(c === Tn || n || document.documentElement.classList.contains("legacyPage"));
          return (0, r.jsx)(kn.A, {
            className: t,
            target: d,
            to: C,
            onClick: () => (p?.(), void b(xn(g, C.toString(), v, m))),
            onNavigate: x,
            reloadDocument: T,
            "data-testid": u,
            ...h,
            ...M,
            children: e
          })
        },
        Pn = {
          callToAction: "rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770",
          highlight: "rockstargames-modules-core-headerd468a02858ad85269a394854bce5e316"
        },
        Ln = ({
          children: e,
          dataTestId: a,
          location: t,
          variant: n,
          gaEvent: s,
          gaText: o,
          target: i,
          onClick: _
        }) => (0, r.jsx)("div", {
          className: Pn.callToActionContainer,
          children: (0, r.jsx)(In, {
            className: [Pn.callToAction, n ? Pn[n] : ""].join(" "),
            dataTestId: a,
            location: t,
            gaEvent: s,
            gaText: o,
            gaBreadCrumb: o,
            onClick: _,
            target: i,
            children: e
          })
        });
      var Nn = t(63582);
      const Rn = {
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
        On = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        Dn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        zn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        En = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        Bn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        Vn = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        qn = {
          pillBtn: "rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac",
          pillButton: "rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f",
          selected: "rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e"
        },
        Fn = ({
          children: e,
          selected: a,
          ...t
        }) => (0, r.jsx)("button", {
          type: "button",
          className: [qn.pillButton, a ? qn.selected : ""].join(" "),
          ...t,
          children: e
        });
      var Hn = t(75971);
      const Wn = {
          fadeIn: "rockstargames-modules-core-headerae886af8e4ee1f3fa82f58141f31dccb",
          pillBtn: "rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513",
          selected: "rockstargames-modules-core-headerdc9de673c49d945b85a20bf5e859500a",
          subMenu: "rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7"
        },
        Un = {
          enter: {
            opacity: 1,
            zIndex: 101,
            visibility: "visible"
          },
          exit: {
            opacity: 0,
            zIndex: 100,
            transitionEnd: {
              visibility: "hidden"
            }
          }
        },
        $n = ({
          openerRef: e,
          isOpen: a,
          isMobile: t,
          children: n
        }) => {
          const [s, o] = (0, l.useState)(null), {
            styles: i,
            attributes: _,
            forceUpdate: c
          } = (0, Hn.usePopper)(e, s, {
            placement: "bottom-start",
            modifiers: [{
              name: "offset",
              enabled: !0,
              options: {
                offset: [0, 4]
              }
            }, {
              name: "preventOverflow",
              options: {
                padding: 8,
                altAxis: !t
              }
            }]
          });
          return (0, l.useEffect)((() => {
            Promise.resolve().then(c)
          }), [e, a, t]), (0, r.jsx)(Nn.motion.div, {
            initial: "exit",
            animate: a ? "enter" : "exit",
            transition: Rn.quickFade,
            variants: Un,
            className: [Wn.subMenu].join(" "),
            style: {
              ...i.popper
            },
            ref: o,
            ..._.popper,
            children: n
          })
        },
        Jn = ({
          children: e,
          ...a
        }) => (0, r.jsx)("button", {
          type: "button",
          className: "rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13",
          ...a,
          children: e
        }),
        Yn = {
          backgroundElevation: "rockstargames-modules-core-headerddaf896d4deca83f6d4a43dde2449ed6",
          backgroundOverlay: "rockstargames-modules-core-headere39052a22cbfec8136c7f57d9e910820",
          backgroundVisible: "rockstargames-modules-core-headerdd3818dff0e6f7bd2777880270cbdabb"
        },
        Kn = ({
          children: e,
          isOpen: a,
          onClose: t,
          visible: n
        }) => a ? (0, r.jsxs)("div", {
          className: [Yn.backgroundElevation].join(" "),
          onClick: t,
          children: [(0, r.jsx)("div", {
            className: [Yn.backgroundOverlay, n ? Yn.backgroundVisible : ""].join(" ")
          }), e]
        }) : null,
        Xn = ({
          target: e,
          selected: a,
          selectedTarget: t,
          onClick: n,
          isMobile: s,
          ...i
        }) => {
          const _ = (0, o.useIntl)(),
            [c, d] = (0, l.useState)(!1),
            [g, v] = (0, l.useState)(null);
          return e.type === jn ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              ref: v,
              children: (0, r.jsxs)(Fn, {
                "aria-label": _.formatMessage(An.search_target_aria_label, {
                  target: t && e?.targets?.indexOf(t) >= 0 ? t.text : e.text
                }),
                selected: a,
                onClick: () => d(!c),
                ...i,
                children: [t && e?.targets?.indexOf(t) >= 0 ? t.text : e.text, (0, r.jsx)("img", {
                  src: En,
                  alt: ""
                })]
              }, e.gaText)
            }), (0, r.jsx)(Kn, {
              isOpen: c,
              onClose: () => d(!1),
              children: (0, r.jsx)($n, {
                isOpen: c,
                openerRef: g,
                isMobile: s,
                children: e.targets?.map((e => (0, r.jsx)(Jn, {
                  "aria-label": _.formatMessage(An.search_target_aria_label, {
                    target: e.text
                  }),
                  onClick: () => n(e),
                  children: e.text
                }, e.gaText)))
              })
            })]
          }) : (0, r.jsx)(Fn, {
            "aria-label": _.formatMessage(An.search_target_aria_label, {
              target: e.text
            }),
            selected: a,
            onClick: () => n(e),
            ...i,
            children: e.text
          }, e.tab)
        },
        Qn = {
          open: "rockstargames-modules-core-headerb5c4f53ad11e76bbf9b1324c766560ad",
          secondaryNavigationOverlay: "rockstargames-modules-core-headerbbd3cc8e4460000b11ca8ef9b0eee345",
          secondaryNavigationSlide: "rockstargames-modules-core-headerbf9f9a25ea6f9aa44b4b2ab52512e335"
        },
        Zn = ({
          children: e,
          isOpen: a,
          onMouseClick: t,
          onEscapeKey: n,
          onMouseAway: s,
          style: o
        }) => {
          const i = a ? [Qn.open] : [],
            _ = e => {
              "Escape" === e.key && n?.()
            };
          return (0, l.useEffect)((() => (a ? window.addEventListener("keyup", _) : window.removeEventListener("keyup", _), () => window.removeEventListener("keyup", _))), [_, a]), a ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: [Qn.secondaryNavigationOverlay, ...i].join(" "),
              onClick: t,
              onMouseEnter: s,
              style: o
            }), e && (0, r.jsx)("div", {
              className: [Qn.secondaryNavigationSlide, ...i].join(" "),
              children: e
            })]
          }) : null
        },
        es = ({
          handleSearch: e,
          handleSearchKeypress: a,
          handleSearchTargetSelect: t,
          setIsSearchOpen: n,
          setSearchQuery: s,
          isSearchOpen: i,
          searchQuery: _,
          selectedTarget: c,
          selectedTargetIndex: d,
          isSearchPage: g,
          searchError: v,
          maxSearchLength: m
        }) => {
          const u = (0, o.useIntl)(),
            p = b(),
            h = (0, l.useRef)(null),
            f = () => {
              n(), g || s(""), h?.current?.focus()
            },
            w = () => {
              g || n()
            };
          return (0, l.useEffect)((() => {
            i ? h?.current?.focus() : h?.current?.blur()
          }), [i]), (0, r.jsxs)("div", {
            children: [(0, r.jsx)("button", {
              className: "rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60",
              type: "button",
              onClick: f,
              "data-testid": "searchToggle",
              children: (0, r.jsx)("img", {
                src: Dn,
                alt: u.formatMessage(i ? An.search_close_button : An.search_open_button)
              })
            }), (0, r.jsx)(Nn.AnimatePresence, {
              children: i && (0, r.jsxs)("div", {
                children: [(0, r.jsx)(Zn, {
                  isOpen: !g,
                  onEscapeKey: w,
                  onMouseClick: w
                }), (0, r.jsxs)(Nn.motion.div, {
                  className: "rockstargames-modules-core-headerce9e8c7dd9562ae75b9543b27f740642",
                  initial: {
                    height: 0,
                    overflow: "hidden"
                  },
                  animate: {
                    height: "auto",
                    overflow: "initial"
                  },
                  exit: {
                    height: 0,
                    overflow: "hidden",
                    transition: Rn.springClose
                  },
                  transition: Rn.springOpen,
                  "data-testid": "searchBar",
                  children: [(0, r.jsxs)(Nn.motion.div, {
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    exit: {
                      opacity: 0,
                      transition: {
                        duration: .1,
                        ease: "easeOut"
                      }
                    },
                    transition: {
                      duration: .3,
                      ease: "easeIn",
                      delay: .1
                    },
                    className: "rockstargames-modules-core-headerb6ffd9ebe8ffa3ac0f4e248ca522036b",
                    children: [(0, r.jsx)("div", {
                      className: "rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        onClick: e,
                        children: (0, r.jsx)("img", {
                          src: Dn,
                          alt: u.formatMessage(An.search_action)
                        })
                      })
                    }), (0, r.jsx)("div", {
                      className: "rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f",
                      children: (0, r.jsx)("input", {
                        type: "textfield",
                        value: _,
                        onChange: e => s(e.target.value),
                        onKeyUp: a,
                        placeholder: u.formatMessage(An.search_placeholder),
                        ref: h,
                        enterKeyHint: "search",
                        maxLength: m
                      })
                    }), (0, r.jsx)("div", {
                      className: "rockstargames-modules-core-headerf1bedf210587b5186fca4d243f05a1aa",
                      children: p.targets.map(((e, a) => (0, r.jsx)(Xn, {
                        target: e,
                        onClick: e => t(e, a),
                        selected: d === a,
                        selectedTarget: c
                      }, e.tab)))
                    }), !g && (0, r.jsx)("div", {
                      className: "rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        onClick: f,
                        children: (0, r.jsx)("img", {
                          src: zn,
                          alt: u.formatMessage(An.search_close_button)
                        })
                      })
                    })]
                  }), v && (0, r.jsx)("div", {
                    className: "rockstargames-modules-core-headerc3e3363c5e7b53755b9c9afcc262ccb6",
                    "aria-live": "polite",
                    children: v
                  })]
                })]
              })
            })]
          })
        },
        as = {
          errorMessage: "rockstargames-modules-core-headerbf16fe605728a09b0a5c269d57371bfa",
          hasScroll: "rockstargames-modules-core-headere3fe68b0501338fe7b3cbed75b1773c8",
          search: "rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1",
          targets: "rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746",
          targetsOuter: "rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd"
        },
        ts = ({
          handleSearch: e,
          handleSearchKeypress: a,
          handleSearchTargetSelect: t,
          setIsSearchOpen: n,
          setSearchQuery: s,
          isSearchOpen: i,
          searchQuery: _,
          selectedTarget: c,
          selectedTargetIndex: d,
          isSearchPage: g,
          searchError: v,
          maxSearchLength: m
        }) => {
          const u = (0, o.useIntl)(),
            p = b(),
            h = (0, l.useRef)(null),
            [f, w] = (0, l.useState)(!1);
          return (0, l.useEffect)((() => {
            let e, a, t = !1;
            const n = n => {
                h && h.current && (n.preventDefault(), t = !0, e = n.pageX - h.current.offsetLeft, a = h.current.scrollLeft)
              },
              s = () => {
                t = !1
              },
              r = n => {
                if (t && (n.preventDefault(), h && h.current)) {
                  const t = n.pageX - h.current.offsetLeft - e;
                  h.current.scrollLeft = a - t
                }
              },
              o = () => {
                if (h && h.current) {
                  const e = h.current.scrollLeft;
                  w(e > 20)
                }
              };
            if (h && h.current) {
              const e = h.current;
              e.addEventListener("mousedown", n), e.addEventListener("mouseup", s), e.addEventListener("mouseleave", s), e.addEventListener("mousemove", r), e.addEventListener("scroll", o)
            }
            return () => {
              h && h.current && (h.current.removeEventListener("mousedown", n), h.current.removeEventListener("mouseup", s), h.current.removeEventListener("mouseleave", s), h.current.removeEventListener("mousemove", r), h.current.removeEventListener("scroll", o))
            }
          })), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(Nn.motion.div, {
              className: as.search,
              variants: On,
              transition: Rn.staggerFade,
              "data-testid": "searchBar",
              children: [(0, r.jsx)("button", {
                type: "button",
                onClick: () => i ? e() : n(!0),
                children: (0, r.jsx)("img", {
                  src: Dn,
                  alt: u.formatMessage(An.search_action)
                })
              }), (0, r.jsx)("input", {
                type: "text",
                value: _,
                onChange: e => s(e.target.value),
                onFocus: () => n(!0),
                onKeyUp: a,
                placeholder: u.formatMessage(An.search_placeholder),
                enterKeyHint: "search",
                maxLength: m
              }), i && !g && (0, r.jsx)("button", {
                type: "button",
                onClick: () => n(!1),
                children: (0, r.jsx)("img", {
                  src: zn,
                  alt: u.formatMessage(An.search_close_button)
                })
              })]
            }), i && (0, r.jsxs)("div", {
              className: [as.targetsOuter, f ? as.hasScroll : ""].join(" "),
              children: [(0, r.jsx)("div", {
                className: as.targets,
                ref: h,
                children: p.targets.map(((e, a) => (0, r.jsx)(Xn, {
                  target: e,
                  selected: d === a,
                  selectedTarget: c,
                  onClick: e => t(e, a),
                  isMobile: !0
                }, e.tab)))
              }), v && (0, r.jsx)("div", {
                className: as.errorMessage,
                "aria-live": "polite",
                children: v
              })]
            })]
          })
        };
      var ns = t(16188),
        ss = t.n(ns);
      const rs = "global-nav-search",
        os = ({
          ...e
        }) => {
          const {
            windowWidth: a
          } = (0, _.useWindowResize)(), {
            pathname: t,
            search: n
          } = y(), s = b(), [i, c] = (0, l.useState)(""), [d, g] = f(), [v, m] = (0, l.useState)(0), [u, p] = (0, l.useState)(s.targets[0]), [h, x] = (0, l.useState)(""), M = (() => {
            const e = Mn(),
              a = k();
            return (t, n) => {
              const s = new URLSearchParams(n.params),
                r = n.path?.replace("{term}", t);
              s.forEach(((e, a) => {
                "{query}" === e && s.set(a, t)
              }));
              const o = s.toString() ? `?${s.toString()}` : "",
                i = {
                  domain: n.domain,
                  path: r + o
                },
                _ = e(i);
              _ ? i.domain ? window.location.href = _ : a ? a(_) : window.history.pushState({}, "", _) : console.error(`No search url could be constructed from ${n.domain} and ${n.path}`)
            }
          })(), {
            isSearchPage: C,
            forceSearch: T
          } = w(), j = (0, o.useIntl)(), S = a < 1024, G = C && T || d === rs, A = e => {
            if ("" === i) return !1;
            e.length > u.searchOptions.max && c(e.substring(0, u.searchOptions.max));
            const a = u.searchOptions.validationFunction?.(e);
            return e.split(/\s+/).every((e => e.length < u.searchOptions.min)) ? (x(j.formatMessage(An.nav_search_error_too_short, {
              count: u.searchOptions.min
            })), !1) : a ? (x(j.formatMessage(An.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(a)].join(", ")
            })), !1) : (x(""), !0)
          }, I = () => {
            A(i) && M(i, u.location)
          }, P = (e, a) => {
            let t;
            const n = new URLSearchParams(e);
            return new URLSearchParams(a).forEach(((e, a) => {
              const s = n.get(a);
              "{query}" === e && s ? (t = !0, c(s), A(s)) : t = s === e && !1 !== t
            })), t
          }, L = (e, a) => {
            if (!a) return !1;
            const t = e.split(/[/?]+/),
              n = a.split(/[/?]+/);
            if (n.every(((e, a) => e === t[a] || "{term}" === e || "" === e))) {
              const e = n.findIndex((e => "{term}" === e));
              return e && c(t[e]), !0
            }
            return !1
          };
          (0, l.useEffect)((() => {
            C || (m(0), p(s.targets[0]));
            const e = s.targets.findIndex((e => {
              if ("" === e.type && e.location) {
                if (e.location.path && t.startsWith(e.location.path) && P(n, e.location.params)) return p(e), !0;
                if (!e.location.params && L(t, e.location.path)) return p(e), !0
              }
              if ("nav-dropdown" === e.type) {
                const a = e.targets?.findIndex((e => {
                  if ("" === e.type) {
                    if (e.location.path && t.startsWith(e.location.path) && P(n, e.location.params)) return p(e), !0;
                    if (L(t, e.location.path)) return p(e), !0
                  }
                  return !1
                }));
                return !ss().isNil(a) && a >= 0
              }
            }));
            m(e)
          }), [t, n, C]);
          const N = {
            handleSearch: I,
            handleSearchKeypress: e => {
              x(""), "Enter" === e.key && I()
            },
            handleSearchTargetSelect: (e, a) => {
              p(e), m(a), A(i) && M(i, e.location)
            },
            setIsSearchOpen: () => g(rs),
            setSearchQuery: c,
            isSearchOpen: G,
            searchQuery: i,
            selectedTarget: u,
            selectedTargetIndex: v,
            isSearchPage: C,
            searchError: h,
            maxSearchLength: u.searchOptions.max
          };
          return S ? (0, r.jsx)(ts, {
            ...N,
            ...e
          }) : (0, r.jsx)(es, {
            ...N
          })
        },
        is = ({
          cta: e,
          includeSearch: a = !0,
          isMobile: t
        }) => {
          const n = y(),
            s = k(),
            [, o] = f();
          return (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c",
            "data-testid": "actions",
            children: [e && (0, r.jsx)("div", {
              children: (0, r.jsx)(Ln, {
                variant: e.variant,
                location: e.location,
                dataTestId: e.dataTestId,
                gaEvent: e.ga,
                gaText: e.text,
                target: e.target,
                children: e.text
              })
            }), a && (0, r.jsx)(os, {}), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(yn.MenuButton, {
                setOtherHeaderDropdowns: o
              }), !t && (0, r.jsx)(yn.Menu, {
                location: n,
                onNavigate: s
              })]
            })]
          })
        },
        _s = {
          active: "rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95",
          navigationItem: "rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558"
        },
        cs = e => e.replace(/\?.*$/, ""),
        ls = (e, a) => e === a,
        ds = e => {
          const {
            pathname: a,
            hostname: t
          } = y();
          return e && e.length ? e.map((({
            domain: e,
            path: n,
            additionalPathMatches: s
          }) => {
            if (e !== t && "" !== e) return null;
            const r = cs(n || ""),
              o = ls(r, cs(a));
            let i;
            return s && (i = ls(s, cs(a))), Boolean(o || i)
          })) : []
        },
        gs = ({
          text: e,
          type: a,
          location: t,
          isLegacy: n,
          gaText: s,
          gaBreadCrumb: o,
          dataTestId: i,
          target: _,
          ...c
        }) => {
          const [l] = ds(t ? [{
            domain: t?.domain,
            path: t?.path,
            end: "nav-internal" === a,
            additionalPathMatches: t?.additionalPathMatches
          }] : []), d = a === Tn;
          return (0, r.jsxs)(In, {
            className: [_s.navigationItem, l ? _s.active : ""].join(" "),
            location: t,
            isLegacy: n,
            type: a,
            target: _,
            gaText: s,
            gaBreadCrumb: o,
            dataTestId: i,
            label: e,
            ...c,
            children: [e, d && (0, r.jsx)("img", {
              alt: "",
              src: Bn
            })]
          })
        },
        vs = {
          active: "rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68",
          navigationDropdownButton: "rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b",
          open: "rockstargames-modules-core-headere981dceef9b773c1a38070cf53b88f91"
        },
        ms = ({
          text: e,
          isOpen: a,
          onClick: t,
          buttonRef: n,
          navChildren: s,
          gaText: o,
          gaBreadCrumb: _,
          dataTestId: c
        }) => {
          const {
            track: d
          } = (0, i.useGtmTrack)(), g = (0, l.useCallback)((() => {
            d(xn(void 0, "", o, _)), t()
          }), [o, _, a, t]), v = (0, l.useMemo)((() => {
            if (!s) return;
            const e = (a, t) => {
              let n;
              return n = t.children ? t.children.reduce(e, []) : t?.location ? [t.location] : [], [...a, ...n]
            };
            return s.reduce(e, [])
          }), [s]), m = ds(v), u = m?.some(Boolean);
          return (0, r.jsx)("div", {
            className: vs.navigationDropdown,
            ref: n,
            children: (0, r.jsxs)("button", {
              className: [vs.navigationDropdownButton, u ? vs.active : "", a ? vs.open : ""].join(" "),
              type: "button",
              "data-testid": c || "navDropdown",
              onClick: g,
              children: [e, (0, r.jsx)("img", {
                src: En,
                alt: ""
              })]
            })
          })
        },
        us = {
          img: "rockstargames-modules-core-headerd87037fda2ea106061c7a614036a89df",
          imgContentful: "rockstargames-modules-core-headerb9f3c994ce8a97ac6530cf0a85e5abe0",
          wide: "rockstargames-modules-core-headerdc444c089b89129c0a39bc61845d531f"
        };
      (0, _.importAll)(t(86751));
      const ps = ({
          isWideCard: e = !1,
          size: a = 640,
          title: n,
          titleSlug: s
        }) => {
          const {
            isMobile: o
          } = (0, _.useWindowResize)(), i = (0, l.useMemo)((() => {
            let n = "";
            return e && (n = o ? t(24865)(`./${s}/mobile.jpg`) : t(53781)(`./${s}/desktop.jpg`)), n || (n = t(39294)(`./${s}.jpg`), n += `?im=Resize=${a}`), n
          }), [o, s]), [c] = (0, _.usePreloadImg)(i);
          let d = i;
          return (0, r.jsx)("div", {
            role: "img",
            "aria-label": n,
            style: {
              backgroundImage: `url(${d})`
            },
            className: [us.img, c ? us.startAnimation : "", e ? us.wide : ""].join(" ")
          })
        },
        hs = ({
          title: e,
          titleSlug: a,
          location: t,
          gaText: n,
          gaBreadCrumb: s,
          dataTestId: o,
          ...i
        }) => (0, r.jsx)("div", {
          className: "rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7",
          children: (0, r.jsx)(In, {
            location: t,
            gaText: n,
            gaBreadCrumb: s,
            dataTestId: o,
            ...i,
            children: (0, r.jsx)(ps, {
              title: e,
              titleSlug: a
            })
          })
        }, e),
        fs = (e, a) => {
          const t = a.currentSite?.site === v.C.www ? "" : `https://${a.sites[v.C.www]}.rockstargames.com`;
          return {
            viewAllLocation: {
              domain: t,
              path: "/games"
            },
            games: [{
              titleSlug: "VI",
              text: e.formatMessage(An.games_menu_vi),
              gaText: "Grand Theft Auto VI",
              location: {
                domain: t,
                path: "/VI"
              },
              isLegacy: !0,
              dataTestId: "VI"
            }, {
              titleSlug: "gta-v",
              text: e.formatMessage(An.games_menu_gta_v),
              gaText: "Grand Theft Auto V",
              location: {
                domain: t,
                path: "/gta-v"
              },
              dataTestId: "gtav"
            }, {
              titleSlug: "gta-online",
              text: e.formatMessage(An.games_menu_gta_online),
              gaText: "Grand Theft Auto Online",
              location: {
                domain: t,
                path: "/gta-online"
              },
              dataTestId: "gtao"
            }, {
              titleSlug: "reddeadredemption2",
              text: e.formatMessage(An.games_menu_rdr_2),
              gaText: "Red Dead Redemption 2",
              location: {
                domain: t,
                path: "/reddeadredemption2"
              },
              dataTestId: "rdr2"
            }, {
              titleSlug: "reddeadredemption",
              text: e.formatMessage(An.games_menu_rdr),
              gaText: "Red Dead Redemption",
              location: {
                domain: t,
                path: "/reddeadredemption"
              },
              dataTestId: "rdr"
            }]
          }
        },
        bs = () => {
          const e = (0, o.useIntl)(),
            a = p(),
            {
              viewAllLocation: t,
              games: n
            } = fs(e, a);
          return (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-headerc44e1e859a7c882c94e4ab6659292df1",
            "data-testid": "gamesMenu",
            children: [(0, r.jsxs)("div", {
              className: "rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31",
              children: [(0, r.jsx)("div", {
                children: (0, r.jsx)("h2", {
                  className: "rockstargames-modules-core-headerdf107c2f64cafbee316afb5bf5d6c994",
                  children: e.formatMessage(An.games_menu_featured)
                })
              }), (0, r.jsx)("div", {
                children: (0, r.jsxs)(In, {
                  className: "rockstargames-modules-core-headera9c20e94d8cd00159778729b0c3eb095",
                  gaText: An.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${An.games_menu_view_all.defaultMessage}`,
                  location: t,
                  children: [e.formatMessage(An.games_menu_view_all), (0, r.jsx)("img", {
                    src: Vn,
                    alt: e.formatMessage(An.nav_view_all_games)
                  })]
                })
              })]
            }), (0, r.jsx)("div", {
              className: "rockstargames-modules-core-headerca5189f6c9b4274473d2cf9a8ace7bb0",
              children: n.map((e => (0, r.jsx)(hs, {
                title: e.text,
                titleSlug: e.titleSlug,
                gaText: e.gaText,
                gaBreadCrumb: `Games > ${e.gaText}`,
                location: e.location,
                dataTestId: e.dataTestId,
                isLegacy: e.isLegacy
              }, e.titleSlug)))
            })]
          })
        },
        ws = {
          nested: "rockstargames-modules-core-headerb83b9fbed333ffb6cc89eb40ce1f258e",
          open: "rockstargames-modules-core-headerb232c7352afb473e20d474f81db87a11",
          openChevron: "rockstargames-modules-core-headerb78556b7ba42b398bc55bf4720f9eee5",
          subMenuDropdownButton: "rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8",
          subMenuDropdownContainer: "rockstargames-modules-core-headerbe98900eb9861a339ca26cd5c23795c2",
          subMenuDropdownItems: "rockstargames-modules-core-headerf54f4c00ab7b5e6ab645951063e44b9e"
        },
        ys = {
          nested: "rockstargames-modules-core-headera81cbcdbdd397a2a286c23049697987b",
          subMenuItem: "rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5"
        },
        ks = {
          active: "rockstargames-modules-core-headerab8c1da57859a4347bb7cd9722832fb9",
          navigationLink: "rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641"
        },
        xs = e => [ks.navigationLink, e ? ks.active : ""].join(" "),
        Ms = ({
          text: e,
          type: a,
          location: t,
          className: n,
          isLegacy: s,
          target: o,
          nested: i,
          gaText: _,
          gaBreadCrumb: c,
          dataTestId: l,
          ...d
        }) => {
          const g = a === Tn,
            v = t ? [{
              ...t,
              end: a === Cn
            }] : [],
            [m] = ds(v);
          return (0, r.jsxs)(In, {
            className: [xs(Boolean(m)), ys.subMenuItem, i ? ys.nested : "", n].join(" "),
            location: t,
            isLegacy: s,
            type: a,
            target: o,
            gaText: _,
            gaBreadCrumb: c,
            dataTestId: l,
            label: e,
            "data-ui-name": "sub-menu-item",
            ...d,
            children: [e, g && (0, r.jsx)("img", {
              alt: "",
              src: Bn
            })]
          })
        },
        Cs = "nav-dropdown",
        Ts = ({
          text: e,
          navChildren: a,
          gaText: t,
          gaBreadCrumb: n,
          nested: s,
          dataTestId: o,
          subMenuId: _,
          toggleOpen: c,
          isOpen: d,
          ...g
        }) => {
          const [v] = f(), {
            track: m
          } = (0, i.useGtmTrack)(), u = (0, l.useRef)(null), [p, h] = (0, l.useState)(null);
          (0, l.useEffect)((() => {
            null === v && c(null)
          }), [v]);
          const b = e => {
              m(xn(void 0, "", t, n)), c(e ? _ : null)
            },
            w = e => {
              "ArrowLeft" === e.code && (b(!1), u?.current?.focus())
            };
          return (0, r.jsxs)("div", {
            className: [ws.subMenuDropdownContainer, s ? ws.nested : ""].join(" "),
            ...g,
            "data-ui-name": "sub-menu-item",
            children: [(0, r.jsxs)("button", {
              type: "button",
              className: [ws.subMenuDropdownButton, s ? ws.nested : "", d ? ws.open : ""].join(" "),
              onClick: () => b(!d),
              onKeyUp: e => {
                "Enter" === e.code && b(!0), "ArrowRight" === e.code && b(!0), "ArrowLeft" === e.code && b(!1)
              },
              ref: u,
              "data-testid": o,
              children: [e, (0, r.jsx)("img", {
                src: En,
                className: ws.openChevron,
                alt: ""
              })]
            }), (0, r.jsx)(Nn.AnimatePresence, {
              children: d && a && (0, r.jsx)(Nn.motion.div, {
                className: ws.subMenuDropdownItems,
                variants: {
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
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: Rn.springOpen,
                children: a.map((e => e.type === Cs ? (0, r.jsx)(Ts, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.gaText,
                  gaBreadCrumb: `${n} > ${e.gaText}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: p === `desktop-submenu-${e.gaText}`,
                  toggleOpen: h
                }, e.gaText) : (0, r.jsx)(Ms, {
                  text: e.text,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${n} > ${e.gaText}`,
                  onKeyUp: w,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.gaText)))
              })
            })]
          })
        },
        js = Ts,
        Ss = {
          show: {
            height: "auto",
            zIndex: 101,
            display: "block",
            visibility: "visible",
            transition: {
              ...Rn.springOpen
            }
          },
          hidden: {
            height: 0,
            zIndex: 100,
            overflow: "hidden",
            transitionEnd: {
              visibility: "hidden",
              display: "none"
            },
            transition: {
              ...Rn.springClose
            }
          }
        },
        Gs = ({
          text: e,
          gaText: a,
          type: t,
          location: n,
          navChildren: s,
          isLegacy: o,
          target: i,
          gaBreadCrumb: _,
          navKey: c,
          isHidden: d,
          dataTestId: g,
          ...v
        }) => {
          const [m, u] = (0, l.useState)(null), p = y(), [h, b] = f(), [w, k] = (0, l.useState)(null), x = h === c, M = {
            ...x ? {
              visibility: "visible",
              display: "block"
            } : {
              visibility: "hidden",
              display: "none"
            }
          };
          (0, l.useEffect)((() => {
            b(null)
          }), [p.pathname, p.key]);
          const C = _ ? `${_} > ${a}` : a ?? e;
          return t === jn ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(ms, {
              text: e,
              gaText: a,
              gaBreadCrumb: C,
              onClick: () => b(c),
              isOpen: x,
              buttonRef: d ? void 0 : u,
              navChildren: s,
              dataTestId: g,
              ...v
            }), !d && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(Zn, {
                isOpen: x,
                onMouseClick: () => b(null),
                onEscapeKey: () => b(null)
              }), (0, r.jsx)($n, {
                isOpen: x,
                openerRef: m,
                children: s?.map((e => e.type === jn ? (0, r.jsx)(js, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.text,
                  gaBreadCrumb: `${C} > ${e.gaText}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: w === `desktop-submenu-${e.gaText}`,
                  toggleOpen: k
                }, `desktop-submenu-${e.text}`) : (0, r.jsx)(Ms, {
                  location: e.location,
                  text: e.text,
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.gaText,
                  gaBreadCrumb: `${C} > ${e.gaText}`,
                  dataTestId: e.dataTestId
                }, e.text)))
              })]
            })]
          }) : t === Gn ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(ms, {
              text: e,
              gaText: e,
              gaBreadCrumb: _ ? `${_} > ${a}` : a,
              onClick: () => b(c),
              isOpen: x,
              dataTestId: g,
              ...v
            }), !d && (0, r.jsx)(Zn, {
              isOpen: !0,
              onMouseClick: () => b(null),
              onEscapeKey: () => b(null),
              style: M,
              children: (0, r.jsx)(Nn.motion.div, {
                initial: "hidden",
                animate: x ? "show" : "hidden",
                variants: Ss,
                children: (0, r.jsx)(bs, {})
              })
            })]
          }) : n || t === Sn ? (0, r.jsx)(gs, {
            location: n,
            type: t,
            text: e,
            isLegacy: o,
            target: i,
            gaText: a,
            gaBreadCrumb: _ ? `${_} > ${a}` : a,
            dataTestId: g,
            ...v
          }) : null
        },
        As = ({
          links: e
        }) => {
          const a = (0, o.useIntl)(),
            [t, n] = (0, l.useState)(e),
            [s, i] = (0, l.useState)([]),
            _ = (0, l.useRef)(null),
            c = (0, l.useRef)(null),
            d = (0, l.useCallback)((() => {
              const a = c.current;
              if (!a || !e.length) return;
              const {
                children: t
              } = a;
              let s = 0;
              const r = Array.from(t).map(((e, a) => {
                  const t = e.getBoundingClientRect().top;
                  return 0 === a && (s = t), t
                })),
                o = r.filter((e => e !== s)).length,
                _ = r.findIndex((e => e > s));
              let l = _;
              _ > 0 && (l = _ - 1), o ? (n(e.slice(0, l)), i(e.slice(l))) : (n(e), i([]))
            }), [e, c?.current]);
          (0, l.useEffect)((() => {
            const e = new ResizeObserver(d);
            return c?.current && e.observe(c.current), () => {
              c?.current && e.unobserve(c.current)
            }
          }), [e, c?.current]);
          const g = (0, l.useMemo)((() => (0, r.jsx)("ul", {
            ref: c,
            className: "rockstargames-modules-core-headerdc3da34691ab5b1e333e3d37858767f0",
            "aria-hidden": "true",
            children: e.map((e => (0, r.jsx)("li", {
              children: (0, r.jsx)(Gs, {
                text: e.text,
                type: e.type,
                target: e.target,
                location: e.location,
                navChildren: e.children,
                navKey: e.text,
                isHidden: !0
              })
            }, `desktop-main-dropdown-hidden-${e.text}`)))
          })), [e]);
          return 0 === e.length ? null : (0, r.jsxs)("nav", {
            className: "rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73",
            children: [(0, r.jsxs)("ul", {
              ref: _,
              children: [t.map((e => (0, r.jsx)("li", {
                children: (0, r.jsx)(Gs, {
                  text: e.text,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  gaText: e.gaText,
                  dataTestId: e?.dataTestId
                })
              }, e.text))), s.length > 0 && (0, r.jsx)("li", {
                children: (0, r.jsx)(Gs, {
                  text: a.formatMessage(An.nav_more_dropdown),
                  type: jn,
                  navChildren: s,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), g]
          })
        },
        Is = () => (0, r.jsx)("div", {
          className: "rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a"
        }),
        Ps = {
          link: "rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876",
          quickAccess: "rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a"
        },
        Ls = () => {
          const {
            windowWidth: e
          } = (0, _.useWindowResize)(), a = p(), t = a.currentSite?.site === v.C.www ? "" : `https://${a.sites[v.C.www]}.rockstargames.com`, n = e < 1024, s = {
            hidden: {
              y: "100%",
              transition: Rn.hamburgerClose
            },
            show: {
              y: 0,
              transition: {
                ...Rn.hamburgerOpen,
                staggerChildren: .1,
                delayChildren: .6 * Rn.hamburgerOpen.duration
              }
            }
          }, i = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: Rn.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: Rn.staggerFade
            }
          }, c = (0, o.useIntl)(), l = {
            home: {
              domain: t,
              path: "/"
            },
            games: {
              domain: t,
              path: "/games"
            },
            newswire: {
              domain: t,
              path: "/newswire"
            }
          }, d = "Quick Access";
          return (0, r.jsxs)(Nn.motion.ul, {
            className: Ps.quickAccess,
            variants: n ? s : On,
            initial: "hidden",
            animate: "show",
            exit: "hidden",
            transition: n ? null : Rn.quickFade,
            children: [(0, r.jsx)(Nn.motion.li, {
              variants: n ? i : null,
              children: (0, r.jsxs)(In, {
                location: l.home,
                className: [xs(), Ps.link].join(" "),
                gaText: An.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${d} > ${An.nav_quick_access_home.defaultMessage}`,
                children: [(0, r.jsx)("img", {
                  alt: "Rockstar Games",
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg"
                }), (0, r.jsx)(o.FormattedMessage, {
                  ...An.nav_quick_access_home
                })]
              })
            }), (0, r.jsx)(Nn.motion.li, {
              variants: n ? i : null,
              children: (0, r.jsxs)(In, {
                location: l.games,
                className: [xs(), Ps.link].join(" "),
                gaText: An.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${d} > ${An.nav_quick_access_games.defaultMessage}`,
                children: [(0, r.jsx)("img", {
                  alt: c.formatMessage(An.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, r.jsx)(o.FormattedMessage, {
                  ...An.nav_quick_access_games
                })]
              })
            }), (0, r.jsx)(Nn.motion.li, {
              variants: n ? i : null,
              children: (0, r.jsxs)(In, {
                location: l.newswire,
                className: [xs(), Ps.link].join(" "),
                gaText: An.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${d} > ${An.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, r.jsx)("img", {
                  alt: c.formatMessage(An.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, r.jsx)(o.FormattedMessage, {
                  ...An.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        Ns = "quick-access-menu",
        Rs = ({
          site: e,
          brand: a,
          hideRockstarBrand: t,
          hideQuickAccess: n
        }) => {
          const s = (0, o.useIntl)(),
            {
              windowWidth: i
            } = (0, _.useWindowResize)(),
            [c, d] = (0, l.useState)(null),
            [g, m] = (0, l.useState)(null),
            [u, h] = f(),
            b = p(),
            w = u === Ns,
            y = n ? An.nav_rockstargames_home : An.nav_rockstargames_logo,
            k = {
              domain: b.currentSite?.site === v.C.www ? "" : `https://${b.sites[v.C.www]}.rockstargames.com`,
              path: "/"
            },
            x = i < 1024,
            {
              styles: M,
              attributes: C,
              forceUpdate: T
            } = (0, Hn.usePopper)(c, g, {
              placement: "bottom-start",
              modifiers: [{
                name: "offset",
                enabled: !0,
                options: {
                  offset: [0, 30]
                }
              }, {
                name: "preventOverflow",
                options: {
                  padding: 8,
                  altAxis: !0
                }
              }]
            });
          return (0, l.useEffect)((() => {
            Promise.resolve().then(T)
          }), [c, w]), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-headercc10478657fa254e4e3449bce7c07d2d",
            children: [!t && (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-headerd6ca505694953416f6cfd919ef1904e1",
              children: [(x || n) && (0, r.jsx)(In, {
                location: k,
                gaText: An.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: An.nav_rockstargames_home.defaultMessage,
                "aria-label": s.formatMessage(y),
                children: (0, r.jsx)(Is, {})
              }), !x && !n && (0, r.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headera8caa9bacc7f74ef9bd86698de9ff08c",
                onClick: () => h(Ns),
                "aria-label": s.formatMessage(y),
                ref: d,
                children: (0, r.jsx)(Is, {})
              }), w && !n && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(Zn, {
                  isOpen: w,
                  onEscapeKey: () => h(null),
                  onMouseClick: () => h(null)
                }), (0, r.jsx)("div", {
                  className: "rockstargames-modules-core-headerd6bd4cea9554313294cb18d1478da1ca",
                  style: {
                    ...M.popper
                  },
                  ref: m,
                  ...C.popper,
                  children: (0, r.jsx)(Ls, {})
                })]
              })]
            }), a && (0, r.jsxs)(r.Fragment, {
              children: [!t && (0, r.jsx)("div", {
                className: "rockstargames-modules-core-headerc2788a414e74cc6eecfa96c0dc4ffac8"
              }), (0, r.jsx)("div", {
                className: "rockstargames-modules-core-headeref547bd473dcff449cc4d72700b35e3a",
                children: (0, r.jsx)("img", {
                  className: "rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e",
                  "data-brand": e,
                  alt: e,
                  src: a
                })
              })]
            })]
          })
        },
        Os = {
          fixed: "rockstargames-modules-core-headere7388ff62f2c8d2f6ecfc70019310faa",
          fluid: "rockstargames-modules-core-headerec46a8779f24ebce8cd66175dfa225f8",
          header: "rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069",
          quickAccessWrapper: "rockstargames-modules-core-headera949a457f9b9536c84492c22ad8ab91e",
          title: "rockstargames-modules-core-headerbc99b8e4243957f58ee357454d77a14b"
        },
        Ds = ({
          headerRef: e,
          data: a
        }) => {
          const t = (0, l.useMemo)((() => {
              const {
                currentSite: e
              } = (0, v.A)();
              if (e?.site === v.C.socialClub) return {
                zIndex: 8600
              }
            }), []),
            n = wn(a.links);
          return (0, r.jsxs)("header", {
            ref: e,
            className: [Os.header, Os.fixed].join(" "),
            style: t,
            children: [(0, r.jsx)("div", {
              className: Os.title,
              children: (0, r.jsx)(Rs, {
                site: a.site,
                brand: a.brand,
                hideQuickAccess: a.hideQuickAccess || !1
              })
            }), (0, r.jsx)("div", {
              className: Os.fluid,
              children: (0, r.jsx)(As, {
                links: n
              })
            }), (0, r.jsx)("div", {
              className: Os.fixed,
              children: (0, r.jsx)(is, {
                cta: a.cta,
                includeSearch: !a.hideSearch
              })
            })]
          })
        },
        zs = {
          hamburger: "rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052",
          open: "rockstargames-modules-core-headerbd080f06ee310dbeb7602106d104aa1b"
        },
        Es = ({
          toggle: e,
          isMenuOpen: a
        }) => {
          const {
            track: t
          } = (0, i.useGtmTrack)();
          return (0, r.jsx)("div", {
            className: [zs.hamburger, a ? zs.open : ""].join(" "),
            children: (0, r.jsxs)("button", {
              onClick: () => {
                t({
                  event: a ? "nav_close" : "nav_open",
                  element_placement: "global nav"
                }), e?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
            })
          })
        },
        Bs = {
          fullMenuOpen: "rockstargames-modules-core-headeraa4c60d9207e8327ebc788a3e1d56d5b",
          header: "rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3",
          nav: "rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627",
          navContainer: "rockstargames-modules-core-headerc5b9f47efbb73b2dfd9c68013ca5bed4",
          overlay: "rockstargames-modules-core-headerff8c8312206e01ca7503d1914e699e1d",
          searchOpen: "rockstargames-modules-core-headerba19960a101d69f671900a795029cf7b",
          title: "rockstargames-modules-core-headerb77426232e2ade0dcb72f4d2764215e8"
        };
      var Vs = t(32654);
      const qs = ({
          text: e
        }) => {
          const {
            isMobile: a
          } = (0, _.useWindowResize)(), t = (0, o.useIntl)(), n = p(), {
            viewAllLocation: s,
            games: i
          } = fs(t, n), [c, d] = (0, l.useState)(2.5);
          return (0, l.useEffect)((() => {
            d(a ? 2.5 : 3.5)
          }), [a]), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d",
            "data-testid": "gamesMenu",
            children: [(0, r.jsxs)("div", {
              className: "rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764",
              children: [(0, r.jsx)("h2", {
                children: e
              }), (0, r.jsxs)(In, {
                gaText: An.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${An.nav_view_all_games.defaultMessage}`,
                location: s,
                className: ks.navigationLink,
                children: [(0, r.jsx)(o.FormattedMessage, {
                  ...An.nav_view_all_games
                }), (0, r.jsx)("img", {
                  src: Vn,
                  alt: t.formatMessage(An.nav_view_all_games)
                })]
              })]
            }), (0, r.jsx)(Vs.RC, {
              className: "rockstargames-modules-core-headerc916087398dcb2ac0d81fc2541342f98",
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: c,
              speed: 700,
              children: i.map((e => (0, r.jsx)(Vs.qr, {
                className: "rockstargames-modules-core-headerfb650180ffb26ef3af920b51a6e292b1",
                children: (0, r.jsx)(hs, {
                  titleSlug: e.titleSlug,
                  title: e.text,
                  gaText: e.gaText,
                  gaBreadCrumb: `Games > ${e.gaText}`,
                  location: e.location,
                  dataTestId: e.dataTestId,
                  isLegacy: e.isLegacy
                })
              }, e.gaText)))
            })]
          })
        },
        Fs = ({
          children: e,
          isOpen: a
        }) => (0, r.jsx)(Nn.AnimatePresence, {
          children: a && (0, r.jsx)(Nn.motion.div, {
            className: "rockstargames-modules-core-headerad11bebe60eb9c08d9bb91f941f50d2a",
            variants: {
              open: {
                height: "auto",
                opacity: 1
              },
              closed: {
                height: 0,
                opacity: 0
              }
            },
            animate: "open",
            initial: "closed",
            exit: "closed",
            transition: Rn.springOpen,
            children: e
          })
        }),
        Hs = {
          open: "rockstargames-modules-core-headerbb4494f77dcd9ffda130e4e916bdb05d",
          subMenuDropdownButton: "rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc",
          subMenuDropdownContainer: "rockstargames-modules-core-headerc02f6922f08136a6e751eed320862016",
          subMenuDropdownItems: "rockstargames-modules-core-headerbf4e902d509c225732afae50338dd4c0"
        },
        Ws = {},
        Us = ({
          text: e,
          dataTestId: a,
          type: t,
          target: n,
          location: s,
          className: o,
          gaText: i,
          gaBreadCrumb: _,
          isLegacy: c,
          onClick: l,
          ...d
        }) => {
          const [g] = ds(s ? [s] : []), v = t === Tn;
          return (0, r.jsxs)(In, {
            className: [xs(Boolean(g)), Ws.subMenuItem, o].join(" "),
            dataTestId: a,
            location: s,
            type: t,
            target: n,
            gaText: i,
            gaBreadCrumb: _,
            onClick: l,
            isLegacy: c,
            label: e,
            ...d,
            children: [e, v && (0, r.jsx)("img", {
              alt: "",
              src: Bn
            })]
          })
        },
        $s = ({
          text: e,
          dataTestId: a,
          navChildren: t,
          gaText: n,
          gaBreadCrumb: s,
          onClick: o,
          isSubMenuOpen: _,
          toggleMenuOpen: c,
          ...l
        }) => {
          const {
            track: d
          } = (0, i.useGtmTrack)();
          return (0, r.jsxs)("div", {
            className: Hs.subMenuDropdownContainer,
            ...l,
            children: [(0, r.jsxs)("button", {
              type: "button",
              "data-testid": a,
              className: [Hs.subMenuDropdownButton, _ ? Hs.open : ""].join(" "),
              onClick: () => {
                d(xn(void 0, "", n, s)), c()
              },
              children: [e, (0, r.jsx)("img", {
                src: En,
                alt: ""
              })]
            }), (0, r.jsx)(Nn.AnimatePresence, {
              children: _ && (0, r.jsx)(Nn.motion.div, {
                className: Hs.subMenuDropdownItems,
                variants: {
                  open: {
                    height: "auto",
                    opacity: 1
                  },
                  closed: {
                    height: 0,
                    opacity: 0
                  }
                },
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: Rn.springOpen,
                children: t.map((e => (0, r.jsx)(Us, {
                  text: e.text,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${s} > ${e.gaText}`,
                  onClick: o,
                  isLegacy: e.isLegacy
                }, e.gaText)))
              })
            })]
          })
        },
        Js = ({
          dataTestId: e,
          type: a,
          target: t,
          location: n,
          navChildren: s,
          gaBreadCrumb: o,
          onClick: i,
          isOpen: _,
          setIsOpen: c,
          text: d,
          gaText: g,
          ...v
        }) => {
          const [m, u] = (0, l.useState)(null), [p] = ds(n ? [n] : []), h = o ? `${o} > ${g}` : g;
          if (a === jn) return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(ms, {
              text: d,
              dataTestId: e,
              gaText: g,
              gaBreadCrumb: h,
              onClick: () => c(),
              isOpen: _,
              ...v
            }), (0, r.jsx)(Fs, {
              isOpen: _,
              children: s?.map(((e, a) => e.type === jn ? (0, r.jsx)($s, {
                text: e.text,
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.gaText,
                gaBreadCrumb: `${h} > ${e.gaText}`,
                onClick: i,
                isSubMenuOpen: m === a,
                toggleMenuOpen: () => u(m !== a ? a : null)
              }, e.gaText) : (0, r.jsx)(Us, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: e.text,
                type: e.type,
                gaText: e.gaText,
                gaBreadCrumb: `${h} > ${e.gaText}`,
                onClick: i
              }, e.gaText)))
            })]
          });
          if (a === Gn) return (0, r.jsx)(qs, {
            text: d
          });
          const f = a === Tn;
          return (0, r.jsxs)(In, {
            location: n,
            dataTestId: e,
            type: a,
            target: t,
            gaText: g,
            gaBreadCrumb: h,
            className: [xs(Boolean(p)), p ? "rockstargames-modules-core-headerf6daff7a849e2826ed2d1f41b9941956" : ""].join(" "),
            label: d,
            ...v,
            children: [d, f && (0, r.jsx)("img", {
              alt: "",
              src: Bn
            })]
          })
        },
        Ys = ({
          links: e,
          cta: a,
          onClick: t
        }) => {
          const [n, s] = (0, l.useState)(null);
          return (0, r.jsx)("div", {
            className: "rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb",
            children: (0, r.jsxs)("ul", {
              children: [e.map(((e, a) => (0, r.jsx)(Nn.motion.li, {
                variants: On,
                transition: Rn.staggerFade,
                children: (0, r.jsx)(Js, {
                  text: e.text,
                  gaText: e.gaText,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onClick: t,
                  isOpen: n === a,
                  setIsOpen: () => s(n !== a ? a : null)
                })
              }, e.text))), a && (0, r.jsx)(Nn.motion.li, {
                className: "rockstargames-modules-core-headerc22ed7fb01d7e65a14a7913a0459a4e3",
                variants: On,
                transition: Rn.staggerFade,
                children: (0, r.jsx)(Ln, {
                  variant: a.variant,
                  dataTestId: a.dataTestId,
                  location: a.location,
                  gaEvent: a.ga,
                  gaText: a.gaText,
                  onClick: t,
                  children: a.text
                })
              })]
            })
          })
        },
        Ks = ({
          headerRef: e,
          data: a
        }) => {
          const [t, n] = (0, l.useState)(!1), [s, o] = (0, l.useState)(!1), {
            isSearchPage: i,
            forceSearch: c
          } = w(), d = y(), {
            pathname: g,
            hash: m,
            search: u
          } = d, h = k(), {
            currentSite: f
          } = p(), b = wn(a.links), {
            setBodyIsLocked: x
          } = (0, _.useBodyScrollable)("HeaderMobile"), M = {
            show: {
              height: "auto",
              paddingBottom: t && a.brand ? "var(--global-navigation-height)" : "",
              transition: {
                ...Rn.hamburgerOpen,
                staggerChildren: .05
              }
            },
            hidden: {
              height: 0,
              paddingBottom: 0,
              transition: Rn.hamburgerClose
            }
          };
          return (0, l.useEffect)((() => {
            x(!!t)
          }), [t]), (0, l.useEffect)((() => {
            o(!1), n(!1)
          }), [g, m, u]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("header", {
              ref: e,
              className: Bs.header,
              children: [(0, r.jsx)(Es, {
                toggle: () => {
                  n(!t), o(!1)
                },
                isMenuOpen: t
              }), (0, r.jsx)("div", {
                className: Bs.title,
                children: (0, r.jsx)(Rs, {
                  site: a.site,
                  brand: a.brand,
                  hideRockstarBrand: !!a.brand
                })
              }), (0, r.jsx)("div", {
                children: (0, r.jsx)(is, {
                  includeSearch: !1,
                  isMobile: !0
                })
              })]
            }), (0, r.jsx)(Nn.AnimatePresence, {
              children: (t || s || i && f?.site === v.C.www) && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)(Nn.motion.nav, {
                  className: [Bs.nav, t && a.brand ? Bs.paddingBottom : "", t ? Bs.fullMenuOpen : ""].join(" "),
                  variants: M,
                  animate: "show",
                  initial: "hidden",
                  exit: "hidden",
                  children: [!a.hideSearch && (0, r.jsx)(os, {
                    isSearchOpen: s || i && c,
                    setIsSearchOpen: o
                  }), t && (0, r.jsx)("div", {
                    className: [Bs.navContainer, s ? Bs.searchOpen : ""].join(" "),
                    children: (0, r.jsx)(Ys, {
                      links: b,
                      cta: a.cta,
                      onClick: () => {
                        n(!1), o(!1)
                      }
                    })
                  })]
                }), t && a.brand && !a.hideQuickAccess && (0, r.jsx)(Ls, {}), !i && (0, r.jsx)(Nn.motion.div, {
                  className: Bs.overlay,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: Rn.hamburgerClose
                  },
                  transition: Rn.hamburgerOpen
                })]
              })
            }), (0, r.jsx)(yn.Menu, {
              location: d,
              onNavigate: h
            })]
          })
        };
      t(79952);
      const Xs = () => {
          const e = (0, l.useRef)(null),
            a = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
          return (0, l.useEffect)((() => {
            a && a.enableExperimentalAPIs(!0)
          }), []), (0, r.jsx)("button", {
            ref: e,
            className: "rockstargames-modules-core-headere0e27fbcd7bb62793ad72aa4562e8b53",
            onClick: () => {
              const t = document.querySelector("header");
              if (a && t) {
                const n = a.findCandidates(t, "down", {
                  mode: "all"
                });
                if (n !== t) {
                  const a = n.filter((a => {
                    if (t.contains(a) || e.current === a) return !1;
                    const n = a.getAttribute("tabindex"),
                      s = null === n || parseInt(n, 10) >= 0,
                      r = null !== a.offsetParent && "hidden" !== getComputedStyle(a).visibility;
                    return s && r
                  }));
                  a.length > 0 && a[0].focus()
                }
              }
            },
            children: (0, r.jsx)(o.FormattedMessage, {
              ...An.accessibility_skip_button
            })
          })
        },
        Qs = {
          badge: "rockstargames-modules-core-headerab6bac3e7cd6aeeec5fe34375b77b1a2",
          globalNavigationRoot: "rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headere22f06c8b88ebe362a876f197dca5953",
          globalNavigationSpacer: "rockstargames-modules-core-headerd45d3098c677dd2ec79f50475413ab8e",
          large: "rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79",
          pillBtn: "rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e",
          selected: "rockstargames-modules-core-headere3891b1e9b084d58f6e1afb5fa14ab12"
        };
      x.gsap.registerPlugin(Tt, en, bn);
      const Zs = () => {
          const e = (0, l.useRef)(null),
            a = (0, _.useScroll)(),
            t = a?.freezeUserShouldSeeMore,
            {
              windowWidth: n
            } = (0, _.useWindowResize)(),
            s = (() => {
              const e = (0, l.useContext)(m);
              if (void 0 === e) throw new Error("useNavigationData must be used within a Navigation Provider");
              return e.navigationData
            })(),
            o = y(),
            {
              isSearchPage: i,
              forceSearch: c
            } = w(),
            d = n < 1024,
            [g, v] = (0, l.useState)(!1),
            u = (0, l.useRef)(null),
            p = (0, l.useRef)(null);
          (0, l.useEffect)((() => {
            v(!0)
          }), []), (0, l.useEffect)((() => {
            const a = "data-show-more-content";
            document.body.removeAttribute(a), e?.current?.removeAttribute(a)
          }), [o.pathname]);
          const h = (0, l.useCallback)((a => {
            if (t) return;
            const n = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
            a.direction === u?.current || n ? n && a?.animation?.pause() : -1 === a.direction ? a.animation?.reverse() : a.animation?.play();
            const s = "data-show-more-content";
            1 === a.direction ? (document.body.setAttribute(s, ""), e?.current?.setAttribute(s, "")) : (document.body.removeAttribute(s), e?.current?.removeAttribute(s)), u.current = a.direction
          }), [t]);
          (0, l.useEffect)((() => {
            const e = x.gsap.context((() => {
              p?.current && x.gsap.set(p.current, {
                paused: !0,
                scrollTrigger: {
                  onUpdate: e => {
                    h(e)
                  },
                  start: "140px",
                  end: 999999999
                }
              })
            }));
            return () => e.revert()
          }), [t, p?.current]);
          const f = (0, l.useMemo)((() => d ? (0, r.jsx)(Ks, {
            headerRef: p,
            data: s
          }) : (0, r.jsx)(Ds, {
            headerRef: p,
            data: s
          })), [s, d]);
          return (0, r.jsxs)("div", {
            className: Qs.globalNavigationRoot,
            "data-header-initialized": g,
            ref: e,
            children: [(0, r.jsx)(Xs, {}), (0, r.jsx)("div", {
              className: [Qs.globalNavigationSpacer, i && c ? Qs.globalNavigationSearchSpacer : ""].join(" ")
            }), f]
          })
        },
        {
          graphEnv: er
        } = (0, _.getConfigForDomain)(),
        ar = ({
          navData: e,
          searchConfig: a,
          routeOptions: t,
          location: n,
          onNavigate: s
        }) => (0, r.jsx)("div", {
          className: "siteHeaderContainer",
          children: (0, r.jsx)(_.ResizeProvider, {
            children: (0, r.jsx)(c.UN, {
              children: (0, r.jsx)(u, {
                navData: e,
                location: n,
                onNavigate: s,
                searchConfig: a,
                routeOptions: t,
                children: (0, r.jsx)(Zs, {})
              })
            })
          })
        }),
        tr = (0, _.withRockstarGraph)((({
          navData: e,
          searchConfig: a,
          routeOptions: t,
          location: n,
          onNavigate: s,
          privateToken: i
        }) => {
          const [{
            iso: l
          }] = (0, o.getLocale)();
          return (0, r.jsx)("div", {
            className: "siteHeaderContainer",
            children: (0, r.jsx)(_.ResizeProvider, {
              children: (0, r.jsx)(c.iR, {
                privateToken: i,
                children: (0, r.jsx)(c.UN, {
                  children: (0, r.jsx)(u, {
                    navData: e,
                    location: n,
                    onNavigate: s,
                    searchConfig: a,
                    routeOptions: t,
                    children: (0, r.jsx)(Zs, {})
                  })
                })
              })
            })
          })
        }), {
          env: er
        }),
        nr = ((e, a = null, t = !1) => function(n) {
          return (0, r.jsx)(d, {
            header: a,
            hidden: t,
            children: (0, r.jsx)(e, {
              ...n
            })
          })
        })((0, o.withIntl)((({
          ...e
        }) => {
          const {
            hasProvider: a
          } = (0, i.useRockstarUser)();
          return a ? (0, r.jsx)(ar, {
            ...e
          }) : (0, r.jsx)(tr, {
            ...e
          })
        }), g), null, !0),
        sr = () => ({
          site: "beaterator",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/beaterator/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
          links: []
        }),
        rr = (0, o.defineMessages)({
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
        or = v.C.www,
        ir = e => ({
          site: "bully",
          appearancePaths: {
            [v.C.www]: [{
              path: "/bully/*",
              options: {}
            }],
            [v.C.socialClub]: [{
              path: "/games/bully*",
              options: {}
            }, {
              path: "/member/*/games/bully/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
          links: [{
            text: e.formatMessage(rr.nav_bully_game_overview),
            gaText: rr.nav_bully_game_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: v.C.www,
              path: "/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: e.formatMessage(rr.nav_bully_accomplishments),
            gaText: rr.nav_bully_accomplishments.defaultMessage,
            type: "nav-internal",
            location: {
              domain: v.C.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: e.formatMessage(rr.nav_bully_support),
            gaText: rr.nav_bully_support.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: v.C.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: e.formatMessage(rr.nav_bully_cta_buy_now),
            gaText: rr.nav_bully_cta_buy_now.defaultMessage,
            location: {
              domain: or,
              path: "/bully/?section=order"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        }),
        _r = e => ({
          site: "careers",
          appearancePaths: {
            [v.C.www]: [{
              path: "/careers/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a6910245d0cd177a1c2228d2f661b86.svg",
          hideSearch: !0,
          links: [{
            text: e.formatMessage(rr.nav_careers_home),
            gaText: rr.nav_careers_home.defaultMessage,
            type: "nav-internal",
            location: {
              domain: v.C.www,
              path: "/careers"
            },
            dataTestId: "careersLink"
          }, {
            text: e.formatMessage(rr.nav_careers_openings),
            gaText: rr.nav_careers_openings.defaultMessage,
            type: "nav-internal",
            location: {
              domain: v.C.www,
              path: "/careers/openings"
            },
            dataTestId: "careersOpeningsLink"
          }, {
            text: e.formatMessage(rr.nav_careers_contact_us),
            gaText: rr.nav_careers_contact_us.defaultMessage,
            type: "nav-no-link",
            dataTestId: "careersContactUsLink"
          }, {
            text: e.formatMessage(rr.nav_careers_careers_on_linkedin),
            gaText: rr.nav_careers_careers_on_linkedin.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com",
              path: "/company/rockstar-games/"
            },
            dataTestId: "careersLinkedInLink"
          }]
        }),
        cr = () => ({
          site: "gta",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/gta/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
          links: []
        }),
        lr = () => ({
          site: "gta2",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/gta2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
          links: []
        }),
        dr = e => ({
          site: "grandtheftauto3",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/grandtheftauto3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70d4774a8eb28cbdc69793504746f961.svg",
          links: [],
          cta: {
            text: e.formatMessage(rr.nav_gta3_cta_buy_now),
            target: "_blank",
            location: {
              domain: v.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: rr.nav_gta3_cta_buy_now.defaultMessage,
            dataTestId: "gta3BuyNowCta",
            variant: "highlight"
          }
        }),
        gr = e => ({
          site: "gta-iv",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/IV/*",
              options: {}
            }],
            [v.C.socialClub]: [{
              path: "/games/gtaiv*",
              options: {}
            }, {
              path: "/member/*/games/gtaiv*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01dcdecd53de88ec599ab76ce2863fcd.svg",
          links: [{
            text: e.formatMessage(rr.nav_gtaiv_overview),
            gaText: rr.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: v.C.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: e.formatMessage(rr.nav_gtaiv_accomplishments),
            gaText: rr.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: v.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: e.formatMessage(rr.nav_gtaiv_support),
            gaText: rr.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: v.C.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: e.formatMessage(rr.nav_gtaiv_cta_buy_now),
            target: "_blank",
            location: {
              domain: v.C.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            gaText: rr.nav_gtaiv_cta_buy_now.defaultMessage,
            dataTestId: "gtaivPurchaseLink",
            variant: "highlight"
          }
        }),
        vr = e => ({
          site: "gta5",
          appearancePaths: {
            [v.C.www]: [{
              path: "/gta-v/*",
              options: {}
            }],
            [v.C.socialClub]: [{
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
              domain: v.C.www,
              path: "/gta-v"
            },
            text: e.formatMessage(rr.nav_gtav_overview),
            gaText: rr.nav_gtav_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoLink",
              location: {
                domain: v.C.www,
                path: "/gta-online"
              },
              text: e.formatMessage(rr.nav_gtav_discover),
              gaText: rr.nav_gtav_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: v.C.www,
                path: "/gta-online/career-progress"
              },
              text: e.formatMessage(rr.nav_gtao_career_progress),
              gaText: rr.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: e.formatMessage(rr.nav_gtav_my_character),
              gaText: rr.nav_gtav_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: v.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: e.formatMessage(rr.nav_gtav_jobs),
              gaText: rr.nav_gtav_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: v.C.www,
                path: "/gta-online/guides"
              },
              text: e.formatMessage(rr.nav_gtav_guides),
              gaText: rr.nav_gtav_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlatesLink",
              location: {
                domain: v.C.www,
                path: "/gta-online/license-plates"
              },
              text: e.formatMessage(rr.nav_gtav_licence_plate_creator),
              gaText: rr.nav_gtav_licence_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: v.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: e.formatMessage(rr.nav_gtao_twitch_drops),
              gaText: rr.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: e.formatMessage(rr.nav_gtav_gta_online),
            gaText: rr.nav_gtav_gta_online.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtavSpOverviewButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: e.formatMessage(rr.nav_gtav_stats),
              gaText: rr.nav_gtav_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpMissionsButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: e.formatMessage(rr.nav_gtav_missions),
              gaText: rr.nav_gtav_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpChecklistButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: e.formatMessage(rr.nav_gtav_checklist),
              gaText: rr.nav_gtav_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: e.formatMessage(rr.nav_gtav_accomplishments),
              gaText: rr.nav_gtav_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavSpLink",
            text: e.formatMessage(rr.nav_gtav_story),
            gaText: rr.nav_gtav_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtav+Link",
            location: {
              domain: v.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: e.formatMessage(rr.nav_gtav_gta_plus),
            gaText: rr.nav_gtav_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              children: [{
                dataTestId: "gtavAllJobsButtons",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                },
                text: e.formatMessage(rr.nav_gtav_jobs_browse_all),
                gaText: rr.nav_gtav_jobs_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCommunitySeriesLink",
                location: {
                  domain: v.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                text: e.formatMessage(rr.nav_gtav_community_series),
                gaText: rr.nav_gtav_community_series.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyJobsButtons",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                },
                text: e.formatMessage(rr.nav_gtav_my_jobs),
                gaText: rr.nav_gtav_my_jobs.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavPlaylistsButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/gtav/playlists"
                },
                text: e.formatMessage(rr.nav_gtav_playlists),
                gaText: rr.nav_gtav_playlists.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavJobsDropdown",
              text: e.formatMessage(rr.nav_gtav_jobs),
              gaText: rr.nav_gtav_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              children: [{
                dataTestId: "gtavBrowseCrewsButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/crews"
                },
                text: e.formatMessage(rr.nav_gtav_crews_browse_all),
                gaText: rr.nav_gtav_crews_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyCrewsButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0,
                text: e.formatMessage(rr.nav_gtav_my_crews),
                gaText: rr.nav_gtav_my_crews.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/crews/create"
                },
                text: e.formatMessage(rr.nav_gtav_create_crew),
                gaText: rr.nav_gtav_create_crew.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/emblems"
                },
                text: e.formatMessage(rr.nav_gtav_emblem_editor),
                gaText: rr.nav_gtav_emblem_editor.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavCrewsDropdown",
              text: e.formatMessage(rr.nav_gtav_crews),
              gaText: rr.nav_gtav_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: v.C.www,
                path: "/community-resources/guidelines"
              },
              text: e.formatMessage(rr.nav_rsg_community_guidelines),
              gaText: rr.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavCommunityDropdown",
            text: e.formatMessage(rr.nav_gtav_community),
            gaText: rr.nav_gtav_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaSupportLink",
            location: {
              domain: v.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: e.formatMessage(rr.nav_gtav_support),
            gaText: rr.nav_gtav_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: e.formatMessage(rr.nav_gtav_cta_buy_now),
            location: {
              domain: v.C.www,
              path: "/gta-v?info=order"
            },
            ga: "cta_buy",
            gaText: rr.nav_gtav_cta_buy_now.defaultMessage,
            dataTestId: "gtavPurchaseLink"
          }
        }),
        mr = () => ({
          site: "grandtheftauto-gba",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/grandtheftauto-gba/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
          links: []
        }),
        ur = () => ({
          site: "chinatownwars",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/chinatownwars/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
          links: []
        }),
        pr = e => ({
          site: "episodesfromlibertycity",
          appearancePaths: {
            [v.C.www]: [{
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
            text: e.formatMessage(rr.nav_gtaiveflc_cta_buy_now),
            gaText: rr.nav_gtaiveflc_cta_buy_now.defaultMessage
          },
          links: [{
            text: e.formatMessage(rr.nav_gtaiv_overview),
            gaText: rr.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: v.C.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: e.formatMessage(rr.nav_gtaiv_accomplishments),
            gaText: rr.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: v.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: e.formatMessage(rr.nav_gtaiv_support),
            gaText: rr.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: v.C.support,
              path: "/categories/115001614848"
            }
          }]
        }),
        hr = () => ({
          site: "libertycitystories",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/libertycitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e39e530c8e7a5b1a3243edeaaf0b223.svg",
          links: []
        }),
        fr = () => ({
          site: "gtalondon",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/gtalondon/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
          links: []
        }),
        br = e => ({
          site: "gta-online",
          appearancePaths: {
            [v.C.www]: [{
              path: "/gta-online/*",
              options: {}
            }],
            [v.C.socialClub]: [{
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
              domain: v.C.www,
              path: "/gta-v"
            },
            text: e.formatMessage(rr.nav_gtao_overview),
            gaText: rr.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: v.C.www,
                path: "/gta-online"
              },
              text: e.formatMessage(rr.nav_gtao_discover),
              gaText: rr.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: v.C.www,
                path: "/gta-online/career-progress"
              },
              text: e.formatMessage(rr.nav_gtao_career_progress),
              gaText: rr.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: e.formatMessage(rr.nav_gtao_my_character),
              gaText: rr.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: v.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: e.formatMessage(rr.nav_gtao_jobs),
              gaText: rr.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: v.C.www,
                path: "/gta-online/guides"
              },
              text: e.formatMessage(rr.nav_gtao_guides),
              gaText: rr.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: v.C.www,
                path: "/gta-online/license-plates"
              },
              text: e.formatMessage(rr.nav_gtao_license_plate_creator),
              gaText: rr.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: v.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: e.formatMessage(rr.nav_gtao_twitch_drops),
              gaText: rr.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: e.formatMessage(rr.nav_gtao_gtao),
            gaText: rr.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: e.formatMessage(rr.nav_gtao_stats),
              gaText: rr.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: e.formatMessage(rr.nav_gtao_missions),
              gaText: rr.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: e.formatMessage(rr.nav_gtao_checklist),
              gaText: rr.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: e.formatMessage(rr.nav_gtao_accomplishments),
              gaText: rr.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: e.formatMessage(rr.nav_gtao_story),
            gaText: rr.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: v.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: e.formatMessage(rr.nav_gtao_gta_plus),
            gaText: rr.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: e.formatMessage(rr.nav_gtao_jobs_browse_all),
                gaText: rr.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: e.formatMessage(rr.nav_gtao_community_series),
                gaText: rr.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: v.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: e.formatMessage(rr.nav_gtao_my_jobs),
                gaText: rr.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                requiresAuth: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: e.formatMessage(rr.nav_gtao_jobs_playlists),
                gaText: rr.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: e.formatMessage(rr.nav_gtao_jobs),
              gaText: rr.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: e.formatMessage(rr.nav_gtao_browse_crews),
                gaText: rr.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: e.formatMessage(rr.nav_gtao_my_crews),
                gaText: rr.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: v.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: e.formatMessage(rr.nav_gtao_crews_create),
                gaText: rr.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: v.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: e.formatMessage(rr.nav_gtao_emblem_editor),
                gaText: rr.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: v.C.socialClub,
                  path: "/emblems"
                }
              }],
              text: e.formatMessage(rr.nav_gtao_crews),
              gaText: rr.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: v.C.www,
                path: "/community-resources/guidelines"
              },
              text: e.formatMessage(rr.nav_rsg_community_guidelines),
              gaText: rr.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: e.formatMessage(rr.nav_gtao_community),
            gaText: rr.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: v.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: e.formatMessage(rr.nav_gtao_support),
            gaText: rr.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: e.formatMessage(rr.nav_gtao_cta_buy_now),
            location: {
              domain: v.C.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy",
            gaText: rr.nav_gtao_cta_buy_now.defaultMessage,
            dataTestId: "gtaoPurchaseLink"
          }
        }),
        wr = e => ({
          site: "gta-plus",
          appearancePaths: {
            [v.C.www]: [{
              path: "/gta-plus/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: v.C.www,
              path: "/gta-v"
            },
            text: e.formatMessage(rr.nav_gtao_overview),
            gaText: rr.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: v.C.www,
                path: "/gta-online"
              },
              text: e.formatMessage(rr.nav_gtao_discover),
              gaText: rr.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: v.C.www,
                path: "/gta-online/career-progress"
              },
              text: e.formatMessage(rr.nav_gtao_career_progress),
              gaText: rr.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: e.formatMessage(rr.nav_gtao_my_character),
              gaText: rr.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: v.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: e.formatMessage(rr.nav_gtao_jobs),
              gaText: rr.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: v.C.www,
                path: "/gta-online/guides"
              },
              text: e.formatMessage(rr.nav_gtao_guides),
              gaText: rr.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: v.C.www,
                path: "/gta-online/license-plates"
              },
              text: e.formatMessage(rr.nav_gtao_license_plate_creator),
              gaText: rr.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: v.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: e.formatMessage(rr.nav_gtao_twitch_drops),
              gaText: rr.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: e.formatMessage(rr.nav_gtao_gtao),
            gaText: rr.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: e.formatMessage(rr.nav_gtao_stats),
              gaText: rr.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: e.formatMessage(rr.nav_gtao_missions),
              gaText: rr.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: e.formatMessage(rr.nav_gtao_checklist),
              gaText: rr.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: v.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: e.formatMessage(rr.nav_gtao_accomplishments),
              gaText: rr.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: e.formatMessage(rr.nav_gtao_story),
            gaText: rr.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: v.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: e.formatMessage(rr.nav_gtao_gta_plus),
            gaText: rr.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: e.formatMessage(rr.nav_gtao_jobs_browse_all),
                gaText: rr.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: e.formatMessage(rr.nav_gtao_community_series),
                gaText: rr.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: v.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: e.formatMessage(rr.nav_gtao_my_jobs),
                gaText: rr.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: e.formatMessage(rr.nav_gtao_jobs_playlists),
                gaText: rr.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: e.formatMessage(rr.nav_gtao_jobs),
              gaText: rr.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: e.formatMessage(rr.nav_gtao_browse_crews),
                gaText: rr.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: e.formatMessage(rr.nav_gtao_my_crews),
                gaText: rr.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: v.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: e.formatMessage(rr.nav_gtao_crews_create),
                gaText: rr.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: v.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: e.formatMessage(rr.nav_gtao_emblem_editor),
                gaText: rr.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: v.C.socialClub,
                  path: "/emblems/new"
                }
              }],
              text: e.formatMessage(rr.nav_gtao_crews),
              gaText: rr.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: v.C.www,
                path: "/community-resources/guidelines"
              },
              text: e.formatMessage(rr.nav_rsg_community_guidelines),
              gaText: rr.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: e.formatMessage(rr.nav_gtao_community),
            gaText: rr.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: v.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: e.formatMessage(rr.nav_gtao_support),
            gaText: rr.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: e.formatMessage(rr.nav_gtao_cta_buy_now),
            location: {
              domain: v.C.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy",
            gaText: rr.nav_gtao_cta_buy_now.defaultMessage,
            dataTestId: "gtaoPurchaseLink"
          }
        }),
        yr = e => ({
          site: "sanandreas",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/sanandreas/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
          links: [],
          cta: {
            text: e.formatMessage(rr.nav_gtasanandreas_cta_buy_now),
            target: "_blank",
            location: {
              domain: v.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: rr.nav_gtasanandreas_cta_buy_now.defaultMessage,
            dataTestId: "gtaSanAndreasPurchaseLink",
            variant: "highlight"
          }
        }),
        kr = e => ({
          site: "gta-trilogy",
          appearancePaths: {
            [v.C.www]: [{
              path: "/GTATrilogy/*",
              options: {}
            }],
            [v.C.socialClub]: [{
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
            text: e.formatMessage(rr.nav_gta_trilogy_overview),
            gaText: rr.nav_gta_trilogy_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: v.C.www,
              path: "/GTATrilogy"
            }
          }, {
            text: e.formatMessage(rr.nav_gta_trilogy_accomplishments),
            gaText: rr.nav_gta_trilogy_accomplishments.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: e.formatMessage(rr.nav_gta_trilogy_gtasa),
              gaText: rr.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: v.C.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: e.formatMessage(rr.nav_gta_trilogy_gtavc),
              gaText: rr.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: v.C.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: e.formatMessage(rr.nav_gta_trilogy_gta3),
              gaText: rr.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: v.C.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: e.formatMessage(rr.nav_gta_trilogy_support),
            gaText: rr.nav_gta_trilogy_support.defaultMessage,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: e.formatMessage(rr.nav_gta_trilogy_gtasa),
              gaText: rr.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: v.C.support,
                path: "/categories/115001620287"
              }
            }, {
              text: e.formatMessage(rr.nav_gta_trilogy_gtavc),
              gaText: rr.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: v.C.support,
                path: "/categories/115001619868"
              }
            }, {
              text: e.formatMessage(rr.nav_gta_trilogy_gta3),
              gaText: rr.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-external",
              dataTestId: "gta3TrilogySupportLink",
              target: "_blank",
              location: {
                domain: v.C.support,
                path: "/categories/115001619948"
              }
            }]
          }],
          cta: {
            text: e.formatMessage(rr.nav_gta_trilogy_cta_buy_now),
            target: "_blank",
            location: {
              domain: v.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: rr.nav_gta_trilogy_cta_buy_now.defaultMessage,
            dataTestId: "gtaTrilogyPurchaseLink"
          }
        }),
        xr = e => ({
          site: "vicecity",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/vicecity/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
          links: [],
          cta: {
            text: e.formatMessage(rr.nav_gtavc_cta_buy_now),
            target: "_blank",
            location: {
              domain: v.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: rr.nav_gtavc_cta_buy_now.defaultMessage,
            dataTestId: "gtaVcBuyNowLink",
            variant: "highlight"
          }
        }),
        Mr = () => ({
          site: "vicecitystories",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/vicecitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
          links: []
        }),
        Cr = e => ({
          site: "la-noire",
          appearancePaths: {
            [v.C.www]: [{
              path: "/lanoire/*",
              options: {}
            }, {
              path: "/games/lanoire/*",
              options: {}
            }],
            [v.C.socialClub]: [{
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
            text: e.formatMessage(rr.nav_lanoire_overview),
            gaText: rr.nav_lanoire_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: v.C.www,
              path: "/games/lanoire"
            }
          }, {
            text: e.formatMessage(rr.nav_lanoire_progress),
            gaText: rr.nav_lanoire_progress.defaultMessage,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: e.formatMessage(rr.nav_lanoire_pc_console),
              gaText: rr.nav_lanoire_pc_console.defaultMessage,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: e.formatMessage(rr.nav_lanoire_case_tracker),
                gaText: rr.nav_lanoire_case_tracker.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: e.formatMessage(rr.nav_lanoire_checklist),
                gaText: rr.nav_lanoire_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: e.formatMessage(rr.nav_lanoire_stats),
                gaText: rr.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: e.formatMessage(rr.nav_lanoire_accomplishments),
                gaText: rr.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: v.C.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: e.formatMessage(rr.nav_lanoire_badge_pursuit),
                gaText: rr.nav_lanoire_badge_pursuit.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: e.formatMessage(rr.nav_lanoire_vr_case_files),
              gaText: rr.nav_lanoire_vr_case_files.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: e.formatMessage(rr.nav_lanoire_stats),
                gaText: rr.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: e.formatMessage(rr.nav_lanoire_accomplishments),
                gaText: rr.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: v.C.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: e.formatMessage(rr.nav_lanoire_support),
            gaText: rr.nav_lanoire_support.defaultMessage,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: v.C.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: e.formatMessage(rr.nav_lanoire_cta_buy_now),
            location: {
              domain: v.C.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy",
            gaText: rr.nav_lanoire_cta_buy_now.defaultMessage,
            dataTestId: "lanoirePurchaseLink"
          }
        }),
        Tr = () => ({
          site: "manhunt",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/manhunt/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
          links: []
        }),
        jr = () => ({
          site: "manhunt2",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/manhunt2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
          links: []
        }),
        Sr = () => ({
          site: "maxpayne",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/maxpayne/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
          links: []
        }),
        Gr = () => ({
          site: "maxpayne2",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/maxpayne2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
          links: []
        }),
        Ar = e => ({
          site: "maxpayne3",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/maxpayne3/*",
              options: {}
            }],
            [v.C.socialClub]: [{
              path: "/games/maxpayne3*",
              options: {}
            }, {
              path: "/member/*/games/maxpayne3*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba94346e4b206acc56976b59974bffbe.png",
          links: [{
            text: e.formatMessage(rr.nav_mp3_overview),
            gaText: rr.nav_mp3_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: v.C.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: e.formatMessage(rr.nav_mp3_progress),
            gaText: rr.nav_mp3_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: e.formatMessage(rr.nav_mp3_accomplishments),
              gaText: rr.nav_mp3_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: v.C.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: e.formatMessage(rr.nav_mp3_singleplayer),
              gaText: rr.nav_mp3_singleplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: e.formatMessage(rr.nav_mp3_career),
                gaText: rr.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_checklist),
                gaText: rr.nav_mp3_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_grinds),
                gaText: rr.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_chapters),
                gaText: rr.nav_mp3_chapters.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_weapons),
                gaText: rr.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_leaderboards),
                gaText: rr.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: e.formatMessage(rr.nav_mp3_multiplayer),
              gaText: rr.nav_mp3_multiplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: e.formatMessage(rr.nav_mp3_career),
                gaText: rr.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_grinds),
                gaText: rr.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_weapons),
                gaText: rr.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_leaderboards),
                gaText: rr.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: e.formatMessage(rr.nav_mp3_crews),
              gaText: rr.nav_mp3_crews.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: e.formatMessage(rr.nav_mp3_multiplayer),
                gaText: rr.nav_mp3_multiplayer.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_score_attack),
                gaText: rr.nav_mp3_score_attack.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_ny_minute),
                gaText: rr.nav_mp3_ny_minute.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_checkpoint_challenge),
                gaText: rr.nav_mp3_checkpoint_challenge.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: e.formatMessage(rr.nav_mp3_featured),
                gaText: rr.nav_mp3_featured.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewFeaturedLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: v.C.socialClub,
                  path: "/games/maxpayne3/crews/rivalries"
                }
              }]
            }]
          }, {
            text: e.formatMessage(rr.nav_mp3_support),
            gaText: rr.nav_mp3_support.defaultMessage,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: v.C.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: e.formatMessage(rr.nav_mp3_cta_buy_now),
            target: "_blank",
            location: {
              domain: v.C.store,
              path: "/game/buy-max-payne-3"
            },
            ga: "cta_buy",
            gaText: rr.nav_mp3_cta_buy_now.defaultMessage,
            dataTestId: "mp3PurchaseLink"
          }
        }),
        Ir = () => ({
          site: "midnightclub",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/midnightclub/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
          links: []
        }),
        Pr = () => ({
          site: "midnightclub2",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/midnightclub2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
          links: []
        }),
        Lr = () => ({
          site: "midnightclub3",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/midnightclub3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
          links: []
        }),
        Nr = () => ({
          site: "midnightclubLA",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/midnightclubLA/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0333d6f30ad108c77944b8faf6f34c03.png",
          links: []
        }),
        Rr = () => ({
          site: "oni",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/oni/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
          links: []
        }),
        Or = e => ({
          site: "rdo",
          appearancePaths: {
            [v.C.www]: [{
              path: "/reddeadonline/*",
              options: {}
            }],
            [v.C.socialClub]: [{
              path: "/games/rdo*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
          links: [{
            dataTestId: "rdoLink",
            location: {
              domain: v.C.www,
              path: "/reddeadonline"
            },
            text: e.formatMessage(rr.nav_rdo_overview),
            gaText: rr.nav_rdo_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: v.C.www,
                path: "/reddeadonline/features/getting-started"
              },
              text: e.formatMessage(rr.nav_rdo_getting_started),
              gaText: rr.nav_rdo_getting_started.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesLink",
              location: {
                domain: v.C.www,
                path: "/reddeadonline/features/roles"
              },
              text: e.formatMessage(rr.nav_rdo_specialist_roles),
              gaText: rr.nav_rdo_specialist_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoLOOLink",
              location: {
                domain: v.C.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              },
              text: e.formatMessage(rr.nav_rdo_story_missions),
              gaText: rr.nav_rdo_story_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPossesLink",
              location: {
                domain: v.C.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              },
              text: e.formatMessage(rr.nav_rdo_posses_free_roam),
              gaText: rr.nav_rdo_posses_free_roam.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoSAELink",
              location: {
                domain: v.C.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              },
              text: e.formatMessage(rr.nav_rdo_competitive_series),
              gaText: rr.nav_rdo_competitive_series.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: v.C.www,
                path: "/reddeadonline/features/customization"
              },
              text: e.formatMessage(rr.nav_rdo_customization),
              gaText: rr.nav_rdo_customization.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoProgressLink",
              location: {
                domain: v.C.www,
                path: "/reddeadonline/features/rank-and-fortune"
              },
              text: e.formatMessage(rr.nav_rdo_progression),
              gaText: rr.nav_rdo_progression.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoExploreDropdown",
            text: e.formatMessage(rr.nav_rdo_explore),
            gaText: rr.nav_rdo_explore.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoOverviewButton",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdo/overview"
              },
              text: e.formatMessage(rr.nav_rdo_my_character),
              gaText: rr.nav_rdo_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesButton",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdo/roles"
              },
              text: e.formatMessage(rr.nav_rdo_roles),
              gaText: rr.nav_rdo_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdo/clubrewards"
              },
              text: e.formatMessage(rr.nav_rdo_club_rewards),
              gaText: rr.nav_rdo_club_rewards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRankButton",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdo/rank"
              },
              text: e.formatMessage(rr.nav_rdo_rank_unlocks),
              gaText: rr.nav_rdo_rank_unlocks.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAwardsButton",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdo/awards"
              },
              text: e.formatMessage(rr.nav_rdo_awards),
              gaText: rr.nav_rdo_awards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdo/achievements"
              },
              text: e.formatMessage(rr.nav_rdo_accomplishments),
              gaText: rr.nav_rdo_accomplishments.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdo/benefits"
              },
              text: e.formatMessage(rr.nav_rdo_benefits),
              gaText: rr.nav_rdo_benefits.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoProgressDropdown",
            text: e.formatMessage(rr.nav_rdo_progress),
            gaText: rr.nav_rdo_progress.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoPosseButton",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdo/posse"
              },
              text: e.formatMessage(rr.nav_rdo_posses),
              gaText: rr.nav_rdo_posses.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCommunityGuidelinesButton",
              location: {
                domain: v.C.www,
                path: "/community-resources/guidelines"
              },
              text: e.formatMessage(rr.nav_rsg_community_guidelines),
              gaText: rr.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoCommunityDropdown",
            text: e.formatMessage(rr.nav_rdo_community),
            gaText: rr.nav_rdo_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "rdoCatalogueButton",
            location: {
              domain: v.C.socialClub,
              path: "/games/rdr2/catalogue/online/"
            },
            target: "_blank",
            text: e.formatMessage(rr.nav_rdo_catalogue),
            gaText: rr.nav_rdo_catalogue.defaultMessage,
            type: "nav-external"
          }, {
            dataTestId: "rdoSupportLink",
            location: {
              domain: v.C.support,
              path: "/categories/115001624507"
            },
            target: "_blank",
            text: e.formatMessage(rr.nav_rdo_support),
            gaText: rr.nav_rdo_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: e.formatMessage(rr.nav_rdo_cta_buy_now),
            target: "_blank",
            location: {
              domain: v.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy",
            gaText: rr.nav_rdo_cta_buy_now.defaultMessage,
            dataTestId: "rdoPurchaseLink"
          }
        }),
        Dr = e => ({
          site: "reddeadredemption",
          appearancePaths: {
            [v.C.www]: [{
              path: "/reddeadredemption/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afce1282be848202a965031813991b09.svg",
          links: [],
          cta: {
            text: e.formatMessage(rr.nav_rdr_cta_buy_now),
            location: {
              domain: v.C.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy",
            gaText: rr.nav_rdr_cta_buy_now.defaultMessage,
            dataTestId: "rsrBuyNowCta"
          }
        }),
        zr = e => ({
          site: "rdr2",
          appearancePaths: {
            [v.C.www]: [{
              path: "/reddeadredemption2/*",
              options: {}
            }, {
              path: "/games/reddeadredemption2/*",
              options: {}
            }],
            [v.C.socialClub]: [{
              path: "/games/rdr2*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e3cf24e53a1fb96410ddbe7d17ca96f.svg",
          links: [{
            text: e.formatMessage(rr.nav_rdr2_overview),
            gaText: rr.nav_rdr2_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: v.C.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: e.formatMessage(rr.nav_rdr2_explore),
            gaText: rr.nav_rdr2_explore.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: e.formatMessage(rr.nav_rdr2_van_der_linde_gang),
              gaText: rr.nav_rdr2_van_der_linde_gang.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: v.C.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_locations),
              gaText: rr.nav_rdr2_locations.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: v.C.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_wildlife),
              gaText: rr.nav_rdr2_wildlife.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: v.C.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_weaponry),
              gaText: rr.nav_rdr2_weaponry.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: v.C.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: e.formatMessage(rr.nav_rdr2_progress),
            gaText: rr.nav_rdr2_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: e.formatMessage(rr.nav_rdr2_stats),
              gaText: rr.nav_rdr2_stats.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_chapters),
              gaText: rr.nav_rdr2_chapters.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_challenges),
              gaText: rr.nav_rdr2_challenges.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_character),
              gaText: rr.nav_rdr2_character.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_compendium),
              gaText: rr.nav_rdr2_compendium.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_accomplishments),
              gaText: rr.nav_rdr2_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: v.C.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: e.formatMessage(rr.nav_rdr2_media),
            gaText: rr.nav_rdr2_media.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: e.formatMessage(rr.nav_rdr2_gallery),
              gaText: rr.nav_rdr2_gallery.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: v.C.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_artwork),
              gaText: rr.nav_rdr2_artwork.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: v.C.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_videos),
              gaText: rr.nav_rdr2_videos.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: v.C.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: e.formatMessage(rr.nav_rdr2_music),
              gaText: rr.nav_rdr2_music.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: v.C.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: e.formatMessage(rr.nav_rdr2_online),
            gaText: rr.nav_rdr2_online.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: v.C.www,
              path: "/reddeadonline"
            }
          }, {
            text: e.formatMessage(rr.nav_rdr2_catalogue),
            gaText: rr.nav_rdr2_catalogue.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: v.C.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: e.formatMessage(rr.nav_rdr2_support),
            gaText: rr.nav_rdr2_support.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: v.C.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: e.formatMessage(rr.nav_rdr2_cta_buy_now),
            target: "_blank",
            location: {
              domain: v.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy",
            gaText: rr.nav_rdr2_cta_buy_now.defaultMessage,
            dataTestId: "rdr2StoreLink"
          }
        }),
        Er = () => ({
          site: "undeadnightmare",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/undeadnightmare/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
          links: []
        }),
        Br = () => ({
          site: "reddeadrevolver",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/reddeadrevolver/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
          links: []
        }),
        Vr = e => ({
          site: "rsg",
          appearancePaths: {
            [v.C.www]: [{
              path: "/search/*",
              options: {
                isSearchPage: !0,
                forceSearch: !0
              }
            }, {
              path: "/*",
              options: {}
            }],
            [v.C.socialClub]: [{
              path: "/*",
              options: {}
            }]
          },
          brand: null,
          links: [{
            text: e.formatMessage(rr.nav_rsg_games),
            gaText: rr.nav_rsg_games.defaultMessage,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: e.formatMessage(rr.nav_rsg_newswire),
            gaText: rr.nav_rsg_newswire.defaultMessage,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: v.C.www,
              path: "/newswire"
            }
          }, {
            text: e.formatMessage(rr.nav_rsg_videos),
            gaText: rr.nav_rsg_videos.defaultMessage,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: v.C.www,
              path: "/videos"
            }
          }, {
            text: e.formatMessage(rr.nav_rsg_downloads),
            gaText: rr.nav_rsg_downloads.defaultMessage,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: v.C.www,
              path: "/downloads"
            }
          }, {
            text: e.formatMessage(rr.nav_rsg_store),
            gaText: rr.nav_rsg_store.defaultMessage,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: v.C.store,
              path: "/"
            }
          }, {
            text: e.formatMessage(rr.nav_rsg_support),
            gaText: rr.nav_rsg_support.defaultMessage,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: v.C.support,
              path: "/"
            }
          }],
          cta: {
            text: e.formatMessage(rr.nav_rsg_cta_get_launcher),
            location: {
              domain: v.C.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download",
            gaText: rr.nav_rsg_cta_get_launcher.defaultMessage,
            dataTestId: "launcherLink",
            variant: "highlight"
          },
          hideQuickAccess: !0
        }),
        qr = () => ({
          site: "stateofemergency",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/stateofemergency/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
          links: []
        }),
        Fr = () => ({
          site: "skateanddestroy",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/skateanddestroy/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
          links: []
        }),
        Hr = () => ({
          site: "smugglersrun",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/smugglersrun/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
          links: []
        }),
        Wr = () => ({
          site: "smugglersrun2",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/smugglersrun2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
          links: []
        }),
        Ur = () => ({
          site: "smugglersrunwarzones",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/smugglersrunwarzones/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
          links: []
        }),
        $r = () => ({
          site: "tabletennis",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/tabletennis/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6168a999187a8807caacf4d106a60a80.svg",
          links: []
        }),
        Jr = () => ({
          site: "italianjob",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/italianjob/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
          links: []
        }),
        Yr = e => ({
          site: "thewarriors",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/thewarriors/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
          links: [],
          cta: {
            text: e.formatMessage(rr.nav_thewarriors_cta_buy_now),
            location: {
              domain: "https://store.playstation.com",
              path: "/concept/205082"
            },
            ga: "cta_buy",
            gaText: rr.nav_thewarriors_cta_buy_now.defaultMessage,
            dataTestId: "thewarriorsPurchaseLink"
          }
        }),
        Kr = () => ({
          site: "wildmetal",
          appearancePaths: {
            [v.C.www]: [{
              path: "/games/wildmetal/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
          links: []
        }),
        Xr = /[*?\\<>&%@:~]/g,
        Qr = e => e.match(Xr),
        Zr = {
          min: 3,
          max: 100,
          validationFunction: Qr
        },
        eo = (0, v.A)(),
        ao = (e, a) => "/" + [a, ...e.split("/")].filter(Boolean).join("/"),
        to = (e, a) => e ? e === a ? "" : e.startsWith("http") ? e : `https://${eo.sites[e]}.rockstargames.com` : "",
        no = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        so = (e, a, t, n) => [{
          text: e.formatMessage(rr.sc_link_account),
          target: "_self",
          dataTestId: "accountButton",
          type: "nav-dropdown",
          children: [{
            text: e.formatMessage(rr.sc_link_settings),
            location: {
              domain: v.C.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...no,
              text: rr.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, {
            text: e.formatMessage(rr.sc_link_view_my_profile),
            location: {
              domain: t,
              path: ""
            },
            target: "_self",
            ga: {
              ...no,
              text: rr.sc_link_view_my_profile.defaultMessage
            },
            dataTestId: "viewMyProfileLink"
          }, {
            text: e.formatMessage(rr.sc_link_game_activation),
            location: {
              domain: v.C.socialClub,
              path: "/activate"
            },
            target: "_self",
            ga: {
              ...no,
              text: rr.sc_link_game_activation.defaultMessage
            },
            dataTestId: "gameActivationLink"
          }]
        }, {
          text: e.formatMessage(rr.sc_link_notifications),
          location: {
            domain: v.C.socialClub,
            path: "/notifications"
          },
          target: "_self",
          hasNotifications: n,
          ga: {
            ...no,
            text: rr.sc_link_notifications.defaultMessage,
            location: {
              domain: v.C.socialClub,
              path: "/notifications"
            }
          },
          dataTestId: "notificationsLink"
        }, {
          text: e.formatMessage(rr.sc_link_crews),
          location: {
            domain: v.C.socialClub,
            path: `/member/${a}/crews`
          },
          target: "_self",
          ga: {
            ...no,
            text: rr.sc_link_crews.defaultMessage
          },
          dataTestId: "crewsLink"
        }, {
          text: e.formatMessage(rr.sc_link_friends),
          target: "_self",
          dataTestId: "friendsButton",
          type: "nav-dropdown",
          children: [{
            text: e.formatMessage(rr.sc_link_my_friends),
            location: {
              domain: v.C.socialClub,
              path: `/member/${a}/friends`
            },
            target: "_self",
            ga: {
              ...no,
              text: rr.sc_link_my_friends.defaultMessage
            },
            dataTestId: "myFriendsLink"
          }, {
            text: e.formatMessage(rr.sc_link_import_friends),
            location: {
              domain: v.C.socialClub,
              path: "/friends/import"
            },
            target: "_self",
            ga: {
              ...no,
              text: rr.sc_link_import_friends.defaultMessage
            },
            dataTestId: "importFriendsLink"
          }, {
            text: e.formatMessage(rr.sc_link_find_friends),
            location: {
              domain: v.C.socialClub,
              path: "/members"
            },
            target: "_self",
            ga: {
              ...no,
              text: rr.sc_link_import_friends.defaultMessage
            },
            dataTestId: "findFriendsLink"
          }]
        }],
        ro = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        oo = e => ({
          text: e.formatMessage(rr.sc_link_help),
          target: "_self",
          ga: {
            ...ro,
            text: rr.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          type: "nav-dropdown",
          children: [{
            text: e.formatMessage(rr.sc_link_support),
            location: {
              domain: v.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...ro,
              text: rr.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(rr.sc_link_legal),
            location: {
              domain: v.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...ro,
              text: rr.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(rr.sc_link_privacy_policy),
            location: {
              domain: v.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...ro,
              text: rr.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(rr.sc_link_cookies_policy),
            location: {
              domain: v.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...ro,
              text: rr.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            type: "nav-no-link",
            text: e.formatMessage(rr.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...ro,
              text: rr.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(rr.sc_link_do_not_sell_my_information),
            location: {
              domain: v.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...ro,
              text: rr.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var io = t(42686);
      let _o;
      _o = {
        gameCard: "rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251"
      };
      const co = ({
          title: e,
          titleSlug: a,
          path: t,
          onNavigate: n,
          dataTestId: s,
          onClick: o,
          ...i
        }) => {
          let _;
          return _ = i, (0, r.jsx)("div", {
            className: _o.gameCard,
            children: (0, r.jsx)(kn.A, {
              to: t,
              "aria-label": e,
              onNavigate: n,
              onClick: o,
              "data-testid": s,
              ..._,
              children: (0, r.jsx)(ps, {
                title: e,
                titleSlug: a,
                inGlobalNav: !0
              })
            })
          }, e)
        },
        lo = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        go = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        vo = (0, o.defineMessages)({
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
        mo = e => ({
          viewAllLocation: {
            path: "/games"
          },
          games: [{
            titleSlug: "VI",
            text: e.formatMessage(vo.games_menu_vi),
            gaText: "Grand Theft Auto VI",
            path: "/VI",
            useLocale: !0,
            externalRoute: !0,
            dataTestId: "VI"
          }, {
            titleSlug: "gta-v",
            text: e.formatMessage(vo.games_menu_gta_v),
            gaText: "Grand Theft Auto V",
            path: "/gta-v",
            dataTestId: "gtav"
          }, {
            titleSlug: "gta-online",
            text: e.formatMessage(vo.games_menu_gta_online),
            gaText: "Grand Theft Auto Online",
            path: "/gta-online",
            dataTestId: "gtao"
          }, {
            titleSlug: "reddeadredemption2",
            text: e.formatMessage(vo.games_menu_rdr_2),
            gaText: "Red Dead Redemption 2",
            path: "/reddeadredemption2",
            dataTestId: "rdr2"
          }, {
            titleSlug: "reddeadredemption",
            text: e.formatMessage(vo.games_menu_rdr),
            gaText: "Red Dead Redemption",
            path: "/reddeadredemption",
            dataTestId: "rdr"
          }]
        });
      var uo = t(9046),
        po = t(74406);
      const ho = {
        avatarMenuLink: "rockstargames-modules-core-headerc640bf864619b6a2296140ddb12e8475",
        avatarNestedDropdown: "rockstargames-modules-core-headera4788f15b7ea9665e8e186a03c86ca32",
        dropdownMenu: "rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715",
        dropdownMenuMobile: "rockstargames-modules-core-headerf905a8b31e0bab44202ab5722726c472",
        externalLinkIcon: "rockstargames-modules-core-headerb350a68799dbf9dc424ca04489c8a0ad",
        hiddenItem: "rockstargames-modules-core-headerd5e29664a79741798b66ebe415c59463",
        hiddenItems: "rockstargames-modules-core-headerabf1a661e4902fa5712272e92f2de033",
        menu: "rockstargames-modules-core-headerd922c5fe52102c7e5c8bc3c42d010585",
        menuItem: "rockstargames-modules-core-headerf303c57e835ec31bf4213fb03aba17ef",
        menuItems: "rockstargames-modules-core-headerec44e526244f48930351136a502341d5",
        menuLink: "rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912",
        menuList: "rockstargames-modules-core-headere463be3861d293e36d66bb8ab0c19645",
        menuTrigger: "rockstargames-modules-core-headerfaca5fabb7852e77e62aa1da55dfad31",
        menuTriggerChevron: "rockstargames-modules-core-headerec5d2c793461b20aed9bb78b399482ad",
        mobileMenuLink: "rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2",
        nestedDropdown: "rockstargames-modules-core-headerddf1983ce836b67a33e2f08a1a5316a3",
        nestedLink: "rockstargames-modules-core-headerbba8a763e416f3af074bb59987ec7834",
        nestedMenuItem: "rockstargames-modules-core-headerda3bef6906347a4766f3e910c294774a",
        pillBtn: "rockstargames-modules-core-headere0ed1b3547264fc03757f0e9e9d6f93b",
        quickMenuLink: "rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60",
        selected: "rockstargames-modules-core-headerf9516763b5bc7d2d11b742f2362cca74",
        sharedMenuLinkStyles: "rockstargames-modules-core-headerb76fe7fae607404368bb160833f02f4b",
        subMenu: "rockstargames-modules-core-headerd962f98ae74a4cbed394cf29a5d0a472",
        subMenuLink: "rockstargames-modules-core-headeree8b6e236dcc760405f887886740a954"
      };
      var fo = t(21222);
      const bo = {
          desktop: "rockstargames-modules-core-headerf1fc26697d7f376112d0fcd256b22a9a",
          mobile: "rockstargames-modules-core-headerd46e4a60f402edcf62521fefd6a9289f",
          pillBtn: "rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939",
          selected: "rockstargames-modules-core-headerade3ff1f5041701c0a98cb7198ece826"
        },
        wo = ({
          showOn: e,
          ...a
        }) => (0, r.jsx)(fo.Slot, {
          className: e ? bo[e] : "",
          ...a
        });
      var yo = t(4572),
        ko = t.n(yo),
        xo = t(64324),
        Mo = t(24780),
        Co = t(63694),
        To = t(87927);
      const jo = (0, o.defineMessages)({
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
        So = () => {
          const e = (0, l.useRef)(null);
          return (0, r.jsx)("button", {
            ref: e,
            className: "rockstargames-modules-core-headerc95fa2303ee2096feb04a8cd9d2a5a4b",
            onClick: () => {
              const a = document.querySelector(".siteHeaderContainer");
              if (window?.__spatialNavigation__?.enableExperimentalAPIs(!0), a && window?.__spatialNavigation__) {
                const t = window?.__spatialNavigation__?.findCandidates(a, "down", {
                    mode: "all"
                  }),
                  n = t.filter((t => !a.contains(t) && e.current !== t));
                n.length > 0 && n[0].focus()
              }
            },
            children: (0, r.jsx)(o.FormattedMessage, {
              ...jo.accessibility_skip_button
            })
          })
        },
        Go = {
          badge: "rockstargames-modules-core-headerd9f1030abbf43b4dca938748cd2971f6",
          fixed: "rockstargames-modules-core-headerb0b5cfbe2c5745a3dae3bc5d2a659d0c",
          fluid: "rockstargames-modules-core-headera5621119fecf77af162314e4f58e3bf4",
          globalNavigationContainer: "rockstargames-modules-core-headercdf77b768c87c4f69cdc9f249e664436",
          globalNavigationRoot: "rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headerf5becd5edc3ccc807f80e476aaf0a923",
          globalNavigationSpacer: "rockstargames-modules-core-headerde436e3db259eb0f31d67c3597d8b8fd",
          header: "rockstargames-modules-core-headerb6b45ba1e342fd31738d08621f64dcf4",
          large: "rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c",
          pillBtn: "rockstargames-modules-core-headerb3978c01af4cdbe62e1bd704f1e5642a",
          quickAccessWrapper: "rockstargames-modules-core-headera0ac1e76ac3363eae9fc0b8dc016c4f6",
          selected: "rockstargames-modules-core-headerd89d3d1eec6c5bd71ccb21cee0ab387a",
          title: "rockstargames-modules-core-headere3074d7d0504de5ecbc3f71e8ff47931"
        },
        Ao = ({
          children: e
        }) => (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("header", {
            className: ko()(Go.header, Go.fixed),
            children: e
          })
        }),
        Io = (0, l.createContext)({
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
        Po = {
          visible: {
            transform: "translateY(0%)",
            visibility: "visible"
          },
          hidden: {
            transform: "translateY(-100%)",
            transitionEnd: {
              visibility: "hidden"
            }
          }
        },
        Lo = (0, o.withIntl)((({
          children: e,
          brand: a
        }) => {
          const [t, n] = (0, l.useState)(!1), [s, i] = (0, l.useState)(!0), [_, c] = (0, l.useState)(!1), [d, g] = (0, l.useState)(!1), [v, m] = (0, l.useState)(!1), u = (0, l.useRef)(null), p = (0, l.useRef)(null), [h, f] = (0, l.useState)(null), [{
            iso: b
          }] = (0, o.getLocale)();
          return (0, l.useEffect)((() => {
            let e = window.scrollY;
            const a = () => {
                const a = window.scrollY > 140,
                  t = window.scrollY > e;
                n(a && t), e = window.scrollY
              },
              t = () => {
                i(0 === window.scrollY)
              };
            return window.addEventListener("scroll", a), window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", a), window.removeEventListener("scroll", t)
            }
          }), [t]), (0, l.useEffect)((() => {
            const e = "data-show-more-content";
            t ? document.body.setAttribute(e, "") : document.body.removeAttribute(e)
          }), [t]), (0, l.useEffect)((() => {
            c(!0)
          }), []), (0, r.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, r.jsx)("div", {
              ref: f,
              children: h && (0, r.jsx)(To.NP, {
                colorScheme: "dark",
                defaultColorScheme: "dark",
                defaultContrastMode: "normal",
                defaultPlatformScale: "desktop",
                container: h,
                children: _ && (0, r.jsx)(Io.Provider, {
                  value: {
                    brand: a,
                    isNavHidden: t,
                    containerRef: u,
                    navContentRef: p,
                    avatarMenuOpened: d,
                    setAvatarMenuOpened: g,
                    mainMenuOpened: v,
                    setMainMenuOpened: m
                  },
                  children: (0, r.jsxs)("div", {
                    className: ko()(Go.globalNavigationRoot, Go.globalNavVars),
                    ref: u,
                    lang: b,
                    children: [(0, r.jsx)(So, {}), (0, r.jsx)("div", {
                      className: Go.globalNavigationSpacer
                    }), (0, r.jsx)(Nn.motion.div, {
                      ref: p,
                      className: Go.globalNavigationContainer,
                      variants: Po,
                      initial: "visible",
                      animate: t ? "hidden" : "visible",
                      "data-ishidden": t,
                      "data-testid": "globalnav__container",
                      children: e
                    })]
                  })
                })
              })
            })
          })
        }), g),
        No = {
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
        Ro = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        Oo = {
          fullMenuOpen: "rockstargames-modules-core-headerb179669051e37adce8fd2936eb8222de",
          menuMobile: "rockstargames-modules-core-headerfd282c0ed200fdb171dae24f3902f6b1",
          menuMobileCta: "rockstargames-modules-core-headerd4f74f7e1cef072e336f954fae948a07",
          menuMobileItem: "rockstargames-modules-core-headerb9830b1f4dd5e2813b68130c424c3aa6",
          menuMobileItems: "rockstargames-modules-core-headera72000cfbe48e7dc2c0f071ecf0b533c",
          mobileMenuContainer: "rockstargames-modules-core-headerd8335dcffc8b201a6f702cc7b22ebab7",
          mobileMenuDrawer: "rockstargames-modules-core-headerd28d9855f9427597e52d7e74abbf75dc",
          mobileMenuHamburger: "rockstargames-modules-core-headerffee60778b241ac8cd6bc04685b782d3",
          mobileMenuHamburgerContainer: "rockstargames-modules-core-headerfb5e947b9aa01caf3aa9bca4ddcb3dee",
          mobileMenuOpen: "rockstargames-modules-core-headerb523d5fd993427cae2eda1f5b9225699",
          mobileMenuSearchOpen: "rockstargames-modules-core-headera2283f7a71bfe0902ebe7176a1f3f45a",
          open: "rockstargames-modules-core-headere31b18e5d92d04a3ffe036ff25c1ee5a",
          overlay: "rockstargames-modules-core-headerd07fb32788b786e529979364bf8fcb5c"
        },
        Do = (0, l.createContext)({
          openedNav: ""
        }),
        zo = ({
          children: e
        }) => {
          const [a, t] = (0, l.useState)("");
          return (0, r.jsx)(Do.Provider, {
            value: {
              openedNav: a
            },
            children: (0, r.jsx)(uo.Root, {
              value: a,
              onValueChange: t,
              children: (0, r.jsx)(uo.List, {
                className: Oo.menuMobileItems,
                children: e
              })
            })
          })
        },
        Eo = (0, l.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        Bo = ({
          children: e,
          toggleMenuAnimation: a
        }) => (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(Nn.motion.div, {
            className: Oo.dialogWrap,
            variants: a,
            animate: "show",
            initial: "hidden",
            exit: "hidden",
            children: e
          })
        }),
        Vo = ({
          children: e
        }) => {
          const a = (0, o.useIntl)(),
            [t, n] = (0, l.useState)(!1),
            [s, i] = (0, l.useState)(!1),
            [_, c] = (0, l.useState)(!1),
            {
              brand: d
            } = (0, l.useContext)(Io),
            g = {
              show: {
                height: "100dvh",
                paddingBottom: t && d ? "var(--global-navigation-height)" : "",
                transition: {
                  ...No.hamburgerOpen,
                  delay: .2,
                  staggerChildren: .15
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: No.hamburgerClose
              }
            };
          return (0, r.jsx)(Eo.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                n(!1)
              },
              setHasQuickMenu: c
            },
            children: (0, r.jsxs)(Mo.Root, {
              open: t,
              onOpenChange: n,
              children: [(0, r.jsx)(wo, {
                showOn: "mobile",
                children: (0, r.jsx)(qo, {
                  onClick: () => {
                    n(!t), i(!1)
                  },
                  isMenuOpen: t
                })
              }), (0, r.jsx)(Nn.AnimatePresence, {
                children: t && (0, r.jsx)(wo, {
                  showOn: "mobile",
                  children: (0, r.jsxs)(Bo, {
                    toggleMenuAnimation: g,
                    children: [(0, r.jsx)(Mo.Overlay, {
                      className: Oo.overlay
                    }), (0, r.jsx)(Mo.Content, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => n(!1),
                      children: (0, r.jsxs)(Nn.motion.div, {
                        className: ko()(Oo.mobileMenuDrawer, Oo.mobileMenuOpen),
                        variants: g,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, r.jsxs)(Co.VisuallyHidden, {
                          children: [(0, r.jsx)(Mo.Title, {
                            children: a.formatMessage(jo.nav_mobilemenu_title)
                          }), (0, r.jsx)(Mo.Description, {
                            children: a.formatMessage(jo.nav_mobilemenu_title)
                          })]
                        }), (0, r.jsx)("div", {
                          className: ko()(s ? Oo.mobileMenuSearchOpen : "", Oo.mobileMenuContainer),
                          children: (0, r.jsx)(Nn.motion.div, {
                            className: ko()(Oo.menuMobile, _ ? Oo.withQuickMenu : ""),
                            children: l.Children.map(e, (e => (0, r.jsx)(Nn.motion.div, {
                              variants: Ro,
                              transition: No.staggerFade,
                              children: e
                            })))
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
        qo = ({
          className: e,
          isMenuOpen: a,
          ...t
        }) => {
          const n = (0, o.useIntl)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: ko()(Oo.mobileMenuHamburgerContainer, e),
              children: (0, r.jsxs)(Mo.Trigger, {
                title: n.formatMessage(a ? jo.nav_mobilemenu_close : jo.nav_mobilemenu_open),
                type: "button",
                className: ko()(Oo.mobileMenuHamburger, {
                  [Oo.open]: a
                }),
                "data-testid": "hamburgerNav",
                ...t,
                children: [(0, r.jsx)("span", {
                  className: Oo.bar,
                  "data-opened": a
                }), (0, r.jsx)("span", {
                  className: Oo.bar,
                  "data-opened": a
                }), (0, r.jsx)("span", {
                  className: Oo.bar,
                  "data-opened": a
                })]
              })
            })
          })
        },
        Fo = (...e) => {
          const a = e.filter(Boolean);
          return a.length <= 1 ? a[0] || null : function(e) {
            for (const t of a) "function" == typeof t ? t(e) : t && (t.current = e)
          }
        };
      var Ho = t(42638),
        Wo = t(61339),
        Uo = t(34902);
      const $o = ({
          children: e,
          className: a,
          ...t
        }) => {
          const {
            containerRef: n
          } = (0, l.useContext)(Io);
          return (0, r.jsx)(Uo.Root, {
            className: ko()("rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563", a),
            container: n?.current,
            ...t,
            children: e
          })
        },
        Jo = {
          avatarDropdownChevron: "rockstargames-modules-core-headerda0dbf9fd75e574727b5d795d7681bfd",
          avatarMenu: "rockstargames-modules-core-headerc21d08286895e5d5d2fc1a7586c6a11d",
          avatarMenuContent: "rockstargames-modules-core-headerfbdd0b16d9b61ed0dd3f5e76b9a1f9de",
          avatarMenuContentMobile: "rockstargames-modules-core-headereef2738c4b5cf2f7e69238683d6d503f",
          avatarMenuLanguageLabel: "rockstargames-modules-core-headerad542b51868c54065401d2ccb5f6159f",
          avatarMenuMobile: "rockstargames-modules-core-headerb68abcf23dae4ff8aa054bd9ff446a9a",
          avatarMenuSection: "rockstargames-modules-core-headerf43b908943d5a326555406c89c919f3a",
          avatarMenuSectionHeader: "rockstargames-modules-core-headerc63374d1c5bca5343c48709064ac9ecc",
          avatarMenuSectionHeaderDropdown: "rockstargames-modules-core-headerc2907f284a3a3dd7c419856bdb6a99ee",
          dragHandle: "rockstargames-modules-core-headerbe1cd057f4c550474a77b822a5eb729e",
          dragHandleBtn: "rockstargames-modules-core-headeredeb54ea736b008d967474a5c9b63a33",
          pillBtn: "rockstargames-modules-core-headerff5e3320dd70a4dcaccbe336302b4714",
          scAvatarBtn: "rockstargames-modules-core-headerb82b1a7297d0e2f91a3ac183adcb21c4",
          scAvatarBtnUser: "rockstargames-modules-core-headerfa4a01e9a53561bce475cd223f7cafe1",
          selected: "rockstargames-modules-core-headercb3e82faf685657df2d72233f5467a60"
        },
        Yo = (0, l.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        Ko = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Xo = {
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
        Qo = {
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
        Zo = ({
          children: e,
          className: a
        }) => (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: ko()(Jo.avatarMenu, a),
            children: e
          })
        }),
        ei = ({
          avatarIconUrl: e,
          nickname: a,
          isLoggedIn: n,
          children: s
        }) => {
          const _ = (0, o.useIntl)(),
            c = t(10046),
            [d, g] = (0, l.useState)(!1),
            [v, m] = (0, l.useState)(!1),
            [u, p] = (0, l.useState)(["open"]),
            {
              isNavHidden: h,
              setAvatarMenuOpened: f,
              mainMenuOpened: b,
              setMainMenuOpened: w
            } = (0, l.useContext)(Io),
            {
              data: y,
              loggedIn: k
            } = (0, i.useRockstarUser)(),
            {
              track: x
            } = (0, i.useGtmTrack)(),
            [M, C] = (0, l.useState)(!1),
            T = e => {
              const a = ["open", ...e.filter((e => "open" !== e))];
              p(a)
            },
            j = () => {
              g(!1), m(!1)
            };
          return (0, l.useEffect)((() => {
            h && j()
          }), [h]), (0, l.useEffect)((() => {
            y && k && !M && y?.accountSynced && (C(!0), x({
              event: "account_synced"
            }))
          }), [y?.accountSynced, k]), (0, l.useEffect)((() => {
            const e = d || v;
            e && b && w(!1), f(e)
          }), [d, v, b]), (0, r.jsxs)(Yo.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: u,
              closeAvatarMenu: j
            },
            children: [(0, r.jsx)(Ho.Root, {
              open: d,
              onOpenChange: g,
              children: (0, r.jsx)(wo, {
                showOn: "desktop",
                children: (0, r.jsxs)(Zo, {
                  children: [(0, r.jsx)(Ho.Trigger, {
                    asChild: !0,
                    children: (0, r.jsx)("button", {
                      className: Jo.scAvatarBtn,
                      "aria-label": _.formatMessage(d ? jo.avatar_menu_close : jo.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": n,
                      children: (0, r.jsx)("img", {
                        className: Jo.scAvatarBtnUser,
                        src: e || c,
                        alt: a
                      })
                    })
                  }), (0, r.jsx)(Nn.AnimatePresence, {
                    children: d && (0, r.jsx)(Ho.Content, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: e => e.preventDefault(),
                      children: (0, r.jsx)(Nn.motion.div, {
                        variants: Ko,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, r.jsx)(Wo.Root, {
                          type: "multiple",
                          value: u,
                          onValueChange: T,
                          children: (0, r.jsx)(xi, {
                            className: Jo.avatarMenuContent,
                            children: s
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, r.jsx)(Mo.Root, {
              open: v,
              onOpenChange: m,
              children: (0, r.jsx)(wo, {
                showOn: "mobile",
                children: (0, r.jsxs)(Zo, {
                  children: [(0, r.jsx)(Mo.Trigger, {
                    className: Jo.scAvatarBtn,
                    "aria-label": _.formatMessage(v ? jo.avatar_menu_close : jo.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": n,
                    children: (0, r.jsx)("button", {
                      className: Jo.scAvatarBtn,
                      "aria-label": _.formatMessage(d ? jo.avatar_menu_close : jo.avatar_menu_open),
                      children: (0, r.jsx)("img", {
                        className: Jo.scAvatarBtnUser,
                        src: e || c
                      })
                    })
                  }), (0, r.jsx)(Nn.AnimatePresence, {
                    children: v && (0, r.jsx)($o, {
                      asChild: !0,
                      children: (0, r.jsxs)(Mo.Content, {
                        forceMount: !0,
                        children: [(0, r.jsxs)(Co.VisuallyHidden, {
                          children: [(0, r.jsx)(Mo.Title, {
                            children: _.formatMessage(jo.nav_avatarmenu_title)
                          }), (0, r.jsx)(Mo.Description, {
                            children: _.formatMessage(jo.nav_avatarmenu_title)
                          })]
                        }), (0, r.jsxs)(Nn.motion.div, {
                          variants: Qo,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: Jo.avatarMenuMobile,
                          children: [(0, r.jsx)(Mo.Close, {
                            className: Jo.dragHandleBtn,
                            "aria-label": _.formatMessage(jo.avatar_menu_close),
                            children: (0, r.jsx)("div", {
                              className: Jo.dragHandle
                            })
                          }), (0, r.jsx)(Wo.Root, {
                            type: "multiple",
                            value: u,
                            onValueChange: T,
                            children: (0, r.jsx)(xi, {
                              className: Jo.avatarMenuContentMobile,
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
        ai = (0, l.createContext)({
          avatarMenuItemId: ""
        }),
        ti = ({
          children: e,
          value: a
        }) => {
          const t = (0, l.useId)();
          return (0, r.jsx)(ai.Provider, {
            value: {
              avatarMenuItemId: a || t
            },
            children: (0, r.jsx)(Wo.Item, {
              value: a || t,
              className: Jo.avatarMenuSection,
              children: e
            })
          })
        },
        ni = ({
          children: e,
          ...a
        }) => (0, r.jsx)(Wo.Header, {
          asChild: !0,
          children: (0, r.jsx)("li", {
            className: Jo.listItem,
            children: (0, r.jsx)(Wo.Trigger, {
              className: Jo.avatarMenuSectionHeader,
              ...a,
              children: e
            })
          })
        }),
        si = ({
          children: e,
          ...a
        }) => (0, r.jsx)(Wo.Header, {
          style: {
            margin: 0
          },
          children: (0, r.jsxs)(Wo.Trigger, {
            className: Jo.avatarMenuSectionHeaderDropdown,
            "data-testid": "header-language-selector-button",
            ...a,
            children: [e, (0, r.jsx)("img", {
              src: lo,
              className: Jo.avatarDropdownChevron,
              alt: ""
            })]
          })
        }),
        ri = ({
          children: e,
          ...a
        }) => {
          const {
            avatarMenuOpenItems: t
          } = (0, l.useContext)(Yo), {
            avatarMenuItemId: n
          } = (0, l.useContext)(ai), s = t.indexOf(n) >= 0;
          return (0, r.jsx)(Wo.Content, {
            forceMount: !0,
            asChild: !0,
            ...a,
            children: (0, r.jsx)(Nn.motion.div, {
              variants: Xo,
              initial: "closed",
              animate: s ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: e
            })
          })
        },
        oi = ({
          children: e,
          ...a
        }) => (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: Jo.avatarMenuLanguageLabel,
            ...a,
            children: e
          })
        }),
        ii = "rockstargames-modules-core-headera0afcf77006159d689145a562371f6af",
        _i = (0, l.createContext)({
          inQuickMenu: !1
        }),
        ci = ({
          children: e
        }) => {
          const {
            inMobileMenu: a,
            setHasQuickMenu: t
          } = (0, l.useContext)(Eo), n = {
            hidden: {
              opacity: 0,
              y: "100%",
              transition: No.hamburgerClose
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                ...No.hamburgerOpen,
                staggerChildren: .15,
                delay: .8 * No.hamburgerOpen.duration,
                delayChildren: .15
              }
            }
          }, s = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: No.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: No.staggerFade
            }
          };
          let o;
          return o = ko()("rockstargames-modules-core-headeredd6d5149d36c2b3d89460393482b5a1", a ? ii : "rockstargames-modules-core-headeree781136421e86f1ba76f28f45009bfd"), (0, l.useEffect)((() => (t?.(!0), () => {
            t?.(!1)
          })), []), a ? (0, r.jsx)(_i.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, r.jsx)(uo.Root, {
              asChild: !0,
              children: (0, r.jsx)(Nn.motion.div, {
                variants: n,
                className: o,
                children: l.Children.map(e, (e => (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)(Nn.motion.li, {
                    variants: s,
                    className: ko()("rockstargames-modules-core-headere3008521b763b81f3b4f2c3659d22cc2", ii),
                    children: e
                  })
                })))
              })
            })
          }) : (0, r.jsx)(_i.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, r.jsx)(uo.Root, {
              asChild: !0,
              children: (0, r.jsx)("div", {
                className: o,
                children: e
              })
            })
          })
        },
        li = e => {
          e.preventDefault()
        },
        di = (0, l.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: e => {}
        }),
        gi = (0, l.createContext)({
          isHidden: !1
        }),
        vi = ({
          children: e
        }) => {
          const a = (0, o.useIntl)(),
            [t, n] = (0, l.useState)(""),
            [s, i] = (0, l.useState)(e),
            [_, c] = (0, l.useState)([]),
            d = (0, l.useRef)(null),
            g = (0, l.useRef)(null),
            {
              isNavHidden: v,
              mainMenuOpened: m,
              avatarMenuOpened: u,
              setMainMenuOpened: p
            } = (0, l.useContext)(Io),
            {
              inAvatarMenu: h
            } = (0, l.useContext)(Yo),
            f = (0, l.useCallback)((() => {
              const a = g.current;
              if (!a) return;
              const {
                children: t
              } = a;
              let n = 0;
              const s = Array.from(t).map(((e, a) => {
                  const t = e.getBoundingClientRect().top;
                  return 0 === a && (n = t), t
                })),
                r = s.filter((e => e !== n)).length,
                o = s.findIndex((e => e > n));
              let _ = o;
              if (o > 0 && (_ = o - 2), r) {
                const a = [],
                  t = [];
                l.Children.forEach(e, ((e, n) => {
                  n < _ ? a.push(e) : t.push(e)
                })), a && i(a), t && c(t)
              } else i(e), c([])
            }), [e, g?.current]);
          let b, w, y;
          return (0, l.useEffect)((() => {
            const e = new ResizeObserver(f);
            return g?.current && e.observe(g.current), () => {
              g?.current && e.unobserve(g.current)
            }
          }), [e, g?.current]), (0, l.useEffect)((() => {
            n("")
          }), [v]), (0, l.useEffect)((() => {
            const e = () => n("");
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, l.useEffect)((() => {
            m || "" === t || n("")
          }), [m]), (0, l.useEffect)((() => {
            p("" !== t)
          }), [t, u, m, h]), b = ho.menu, w = ho.menuItems, y = ho.hiddenItems, (0, r.jsx)(di.Provider, {
            value: {
              inMenu: !0,
              openedNav: t,
              setOpenedNav: n
            },
            children: (0, r.jsx)(wo, {
              showOn: "desktop",
              children: (0, r.jsxs)(uo.Root, {
                className: b,
                value: t,
                onValueChange: n,
                children: [(0, r.jsxs)(mi, {
                  ref: d,
                  className: w,
                  children: [s, _?.length > 0 && (0, r.jsxs)(pi, {
                    children: [(0, r.jsx)(hi, {
                      "data-testid": "navMore",
                      children: a.formatMessage(jo.nav_more_dropdown)
                    }), (0, r.jsx)(yi, {
                      children: (0, r.jsx)(xi, {
                        children: (0, r.jsx)(mi, {
                          children: _
                        })
                      })
                    })]
                  })]
                }), (0, r.jsx)(mi, {
                  ref: g,
                  className: y,
                  "aria-hidden": "true",
                  children: (0, r.jsx)(gi.Provider, {
                    value: {
                      isHidden: !0
                    },
                    children: e
                  })
                })]
              })
            })
          })
        },
        mi = (0, l.forwardRef)((function({
          children: e,
          className: a,
          ...t
        }, n) {
          let s;
          return s = ho.menuList, (0, r.jsx)(uo.List, {
            ref: n,
            className: ko()(s, a),
            ...t,
            children: e
          })
        })),
        ui = (0, l.createContext)({
          value: ""
        }),
        pi = (0, l.forwardRef)((function({
          testId: e,
          children: a,
          ...t
        }, n) {
          const {
            depth: s
          } = (0, l.useContext)(ki), {
            inMobileMenu: o
          } = (0, l.useContext)(Eo), i = (0, l.useRef)(null), _ = `rsm-${(0,po.useId)()}`;
          let c, d;
          return c = ho.menuItem, d = ho.nestedMenuItem, (0, r.jsx)(ui.Provider, {
            value: {
              value: _,
              ref: i
            },
            children: (0, r.jsx)(uo.Item, {
              value: _,
              ref: Fo(n, i),
              className: ko()({
                [c]: !0,
                [d]: 1 === s && !o
              }),
              "data-testid": e,
              ...t,
              children: a
            })
          })
        })),
        hi = (0, l.forwardRef)((function(e, a) {
          const {
            children: t,
            ...n
          } = e, {
            inMenu: s
          } = (0, l.useContext)(di), {
            inAvatarMenu: o
          } = (0, l.useContext)(Yo), {
            inQuickMenu: i
          } = (0, l.useContext)(_i), {
            inMobileMenu: _
          } = (0, l.useContext)(Eo), {
            inSubMenu: c,
            depth: d
          } = (0, l.useContext)(ki);
          return (0, r.jsxs)(uo.Trigger, {
            ref: a,
            onPointerMove: li,
            onPointerLeave: li,
            className: ko()(ho.menuTrigger, {
              [ho.menuLink]: s,
              [ho.quickMenuLink]: i,
              [ho.mobileMenuLink]: _,
              [ho.subMenuLink]: c,
              [ho.avatarMenuLink]: o,
              [ho.nestedLink]: d > 1
            }),
            ...n,
            children: [t, (0, r.jsx)("img", {
              src: lo,
              className: ho.menuTriggerChevron,
              alt: ""
            })]
          })
        })),
        fi = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        bi = {
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
        wi = {
          enter: {
            opacity: 1,
            zIndex: 101
          },
          exit: {
            opacity: 1,
            zIndex: 100
          }
        },
        yi = (0, l.forwardRef)((function({
          children: e,
          animationOverride: a,
          ...t
        }, n) {
          const {
            navContentRef: s
          } = (0, l.useContext)(Io), {
            inSubMenu: o,
            openedNav: i
          } = (0, l.useContext)(ki), {
            openedNav: _
          } = (0, l.useContext)(di), {
            openedNav: c
          } = (0, l.useContext)(Do), {
            value: d,
            ref: g
          } = (0, l.useContext)(ui), {
            inMobileMenu: v
          } = (0, l.useContext)(Eo), {
            isHidden: m
          } = (0, l.useContext)(gi), {
            inAvatarMenu: u
          } = (0, l.useContext)(Yo), p = [i, _, c].includes(d);
          if (m) return null;
          let h, f, b, w, y;
          return h = ho.dropdownMenu, f = ho.dropdownMenuMobile, b = ho.nestedDropdown, w = ho.avatarNestedDropdown, y = ho.subMenuWrapper, (0, r.jsx)(Nn.AnimatePresence, {
            children: p && (0, r.jsx)(uo.Content, {
              ref: n,
              className: ko()({
                [h]: !v,
                [f]: v,
                [b]: o && !v,
                [w]: u
              }),
              onPointerEnter: li,
              onPointerLeave: li,
              onPointerDown: li,
              onPointerDownOutside: e => {
                o && e.preventDefault()
              },
              style: {
                left: g?.current?.offsetLeft,
                top: (g?.current?.offsetHeight ?? 0) + 3
              },
              ...t,
              asChild: !0,
              forceMount: !0,
              children: (0, r.jsx)(Nn.motion.div, {
                variants: a || o || v ? bi : fi,
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: No.springOpen,
                className: y,
                children: e
              })
            })
          })
        })),
        ki = (0, l.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        xi = (0, l.forwardRef)((function({
          children: e,
          ...a
        }, t) {
          const {
            depth: n
          } = (0, l.useContext)(ki), {
            openedNav: s
          } = (0, l.useContext)(Do), {
            isNavHidden: o
          } = (0, l.useContext)(Io), [i, _] = (0, l.useState)("");
          (0, l.useEffect)((() => {
            _("")
          }), [s, o]);
          const c = n ? n + 1 : 1;
          let d;
          return d = ho.subMenu, (0, r.jsx)(ki.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: i,
              depth: c
            },
            children: (0, r.jsx)(uo.Root, {
              ref: t,
              defaultValue: "",
              value: i,
              onValueChange: e => {
                _(e === i ? "" : e)
              },
              orientation: "vertical",
              className: d,
              "data-depth": c,
              ...a,
              asChild: !0,
              children: (0, r.jsx)(Nn.motion.div, {
                variants: wi,
                animate: "enter",
                initial: "exit",
                exit: "exit",
                transition: No.quickFade,
                children: e
              })
            })
          })
        })),
        Mi = (0, l.forwardRef)((function({
          className: e,
          ...a
        }, t) {
          const n = ko()(ho.menuIcon, e);
          return (0, r.jsx)("img", {
            ref: t,
            className: n,
            ...a
          })
        })),
        Ci = (0, l.forwardRef)((function({
          children: e,
          asChild: a,
          className: t,
          onClick: n,
          external: s,
          hasNotification: i,
          ..._
        }, c) {
          const d = (0, o.useIntl)(),
            {
              inMenu: g
            } = (0, l.useContext)(di),
            {
              inAvatarMenu: v,
              closeAvatarMenu: m
            } = (0, l.useContext)(Yo),
            {
              inQuickMenu: u
            } = (0, l.useContext)(_i),
            {
              inMobileMenu: p,
              closeMobileMenu: h
            } = (0, l.useContext)(Eo),
            {
              inSubMenu: f,
              depth: b
            } = (0, l.useContext)(ki),
            w = ko()({
              [ho.menuLink]: g,
              [ho.quickMenuLink]: u,
              [ho.mobileMenuLink]: p,
              [ho.subMenuLink]: f,
              [ho.avatarMenuLink]: v,
              [ho.nestedLink]: b > 1
            }, t),
            y = a ? fo.Slot : "a";
          return (0, r.jsx)(uo.Link, {
            asChild: !0,
            onSelect: e => {
              m?.(), h?.(), n?.(e)
            },
            ..._,
            children: (0, r.jsxs)(y, {
              ref: c,
              className: w,
              children: [(0, r.jsx)(fo.Slottable, {
                children: e
              }), s && (0, r.jsx)(xo.ExternalLink, {
                label: d.formatMessage(jo.nav_rockstargames_external_link),
                className: ho.externalLinkIcon
              })]
            })
          })
        }));
      let Ti;
      Ti = {
        gameCards: "rockstargames-modules-core-headere104ee1bbcd8b04a2ea224fdccd9bb67",
        gamesMenu: "rockstargames-modules-core-headerdb2039d0fa02404c1e032ddafe358efd",
        gamesMenuContent: "rockstargames-modules-core-headercaea3404775ed365d2f4aef72c9990dc",
        gamesMenuMobile: "rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89",
        gamesSubMenu: "rockstargames-modules-core-headerf01964ebb2d62c8bd7d7ad3df1d818a4",
        header: "rockstargames-modules-core-headerefbf909442a1564a3efb261ef928345d",
        menuTitle: "rockstargames-modules-core-headerbacc5a58858921d497c7752942deb135",
        pillBtn: "rockstargames-modules-core-headercae5df759f802aa04900e0b40597ba48",
        selected: "rockstargames-modules-core-headerc1d01988f20547a303ca62d99b0beee4",
        slide: "rockstargames-modules-core-headerdf455110c72d70cc653582db9d812af6",
        slider: "rockstargames-modules-core-headerb673908f44e71f1c48537b69a244eaf5",
        "swiper-horizontal": "rockstargames-modules-core-headerc5d5a6c2ae5bc35a9ce9fa397ffe3508",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-headera6e13c807485e2f4de5e219ba255f912",
        "swiper-vertical": "rockstargames-modules-core-headerde108a391289bb293ca8f15ddccf6fd0",
        titleBar: "rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053",
        viewAllLink: "rockstargames-modules-core-headera4f8eb74ae350f61ed4b4fffa4d8ff8d"
      };
      const ji = ({
          onNavigate: e,
          onClick: a
        }) => {
          const t = (0, o.useIntl)(),
            n = (0, v.A)(),
            [{
              subdomaincom: s
            }] = (0, o.getLocale)(),
            i = s !== o.englishLocale.subdomaincom ? `/${s}` : "",
            _ = n.currentSite?.site === v.C.www,
            c = `https://${n.sites[v.C.www]}.rockstargames.com`;
          let d = "";
          d = _ ? i : `${c}${i}`;
          const {
            viewAllLocation: g,
            games: m
          } = (0, l.useMemo)((() => mo(t)), [s]);
          return (0, r.jsxs)("div", {
            className: Ti.gamesMenu,
            "data-testid": "gamesMenu",
            children: [(0, r.jsxs)("div", {
              className: Ti.titleBar,
              children: [(0, r.jsx)("div", {
                children: (0, r.jsx)("h2", {
                  className: Ti.menuTitle,
                  children: t.formatMessage(vo.games_menu_featured)
                })
              }), (0, r.jsx)("div", {
                children: (0, r.jsx)(io.Button, {
                  asChild: !0,
                  appearance: "ghost",
                  size: "MD",
                  children: (0, r.jsxs)("a", {
                    className: Ti.viewAllLink,
                    href: d + g.path,
                    children: [t.formatMessage(vo.games_menu_view_all), (0, r.jsx)("img", {
                      src: go,
                      alt: t.formatMessage(vo.games_menu_view_all)
                    })]
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: Ti.gameCards,
              children: m.map((t => {
                return (0, r.jsx)(co, {
                  titleSlug: t.titleSlug,
                  title: t.text,
                  path: (!_ || t.externalRoute ? t.useLocale ? `${c}${i}` : c : "") + t.path,
                  dataTestId: t.dataTestId,
                  onNavigate: e,
                  onClick: (n = t.gaText, s = `Games > ${t.gaText}`, o = (!_ || t.externalRoute ? t.useLocale ? `${c}${i}` : c : "") + t.path, () => {
                    a?.(n, s, o)
                  })
                }, t.titleSlug);
                var n, s, o
              }))
            })]
          })
        },
        Si = ({
          onNavigate: e,
          onClick: a,
          dataTestId: t
        }) => {
          const n = (0, o.useIntl)(),
            {
              isHidden: s
            } = (0, l.useContext)(gi),
            {
              inMobileMenu: i
            } = (0, l.useContext)(Eo);
          return i ? (0, r.jsx)(Gi, {
            onNavigate: e,
            onClick: a
          }) : (0, r.jsxs)(pi, {
            children: [(0, r.jsx)(hi, {
              "data-testid": t,
              children: n.formatMessage(vo.games_menu_item)
            }), (0, r.jsx)(Nn.AnimatePresence, {
              children: !s && (0, r.jsx)(yi, {
                className: Ti.gamesMenuContent,
                animationOverride: "expandCollapse",
                children: (0, r.jsx)(ji, {
                  onNavigate: e,
                  onClick: a
                })
              })
            })]
          })
        },
        Gi = ({
          onNavigate: e,
          onClick: a
        }) => {
          const t = (0, o.useIntl)(),
            n = (0, v.A)(),
            [{
              subdomaincom: s
            }] = (0, o.getLocale)(),
            {
              closeMobileMenu: i
            } = (0, l.useContext)(Eo),
            _ = s !== o.englishLocale.subdomaincom ? `/${s}` : "",
            c = n.currentSite?.site === v.C.www,
            d = `https://${n.sites[v.C.www]}.rockstargames.com`;
          let g = "";
          g = c ? _ : `${d}${_}`;
          const {
            viewAllLocation: m,
            games: u
          } = (0, l.useMemo)((() => mo(t)), [s]);
          let p;
          return p = 3.5, (0, r.jsxs)("li", {
            className: Ti.gamesMenuMobile,
            "data-testid": "gamesMenu",
            children: [(0, r.jsxs)("div", {
              className: Ti.header,
              children: [(0, r.jsx)("h2", {
                children: t.formatMessage(vo.games_menu_featured)
              }), (0, r.jsx)(io.Button, {
                asChild: !0,
                appearance: "ghost",
                size: "MD",
                children: (0, r.jsxs)("a", {
                  className: Ti.viewAllLink,
                  href: g + m.path,
                  children: [t.formatMessage(vo.games_menu_view_all), (0, r.jsx)("img", {
                    src: go,
                    alt: t.formatMessage(vo.games_menu_view_all)
                  })]
                })
              })]
            }), (0, r.jsx)(Vs.RC, {
              className: Ti.slider,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: 3.5,
              speed: 700,
              children: u.map((t => {
                return (0, r.jsx)(Vs.qr, {
                  className: Ti.slide,
                  children: (0, r.jsx)(co, {
                    titleSlug: t.titleSlug,
                    title: t.text,
                    path: (!c || t.externalRoute ? t.useLocale ? `${d}${_}` : d : "") + t.path,
                    dataTestId: t.dataTestId,
                    onNavigate: e,
                    onClick: (n = t.gaText, s = `Games > ${t.gaText}`, o = (!c || t.externalRoute ? t.useLocale ? `${d}${_}` : d : "") + t.path, () => {
                      a?.(n, s, o), i()
                    })
                  })
                }, t.gaText);
                var n, s, o
              }))
            })]
          })
        },
        Ai = Gi,
        Ii = () => {
          const e = (() => {
            const e = (0, v.A)(),
              [a] = (0, o.getLocale)();
            return (t, n) => {
              if (!t.path) return t.domain;
              const s = [
                  ["username", n]
                ],
                r = ((e, a) => a.filter((([, e]) => Boolean(e))).reduce(((e, [a, t]) => e.replaceAll(`{${a}}`, t)), e))(t.path, s),
                i = "www" === t.domain && "www" !== e.currentSite?.site ? ((e, a) => {
                  if (!a || a.iso === o.englishLocale.iso) return e;
                  const t = a.subdomaincom;
                  return "/" === e[0] ? t + e : `${t}/${e}`
                })(r, a) : r;
              return t.domain + i
            }
          })();
          return (a, t) => {
            const n = new URLSearchParams(t.params),
              s = t.path?.replace("{term}", a);
            n.forEach(((e, t) => {
              "{query}" === e && n.set(t, a)
            }));
            const r = n.toString() ? `?${n.toString()}` : "",
              o = {
                domain: t.domain,
                path: s + r
              },
              i = e(o, "");
            if (i) return i;
            console.error(`No search url could be constructed from ${t.domain} and ${t.path}`)
          }
        },
        Pi = ({
          globalNavLoaderComponent: e,
          globalNavComponent: a,
          locale: t,
          username: i,
          userProfileLink: _,
          hasNotifications: c,
          ...d
        }) => {
          const g = (0, o.useIntl)(),
            m = (0, v.A)(),
            u = ((e, a = "") => {
              const t = (0, v.A)(),
                n = e.subdomaincom,
                s = (e, t) => t?.requiresAuth && !a ? e : [...e, r(t)],
                r = e => {
                  const r = t.currentSite?.site !== v.C.www && e.location?.domain === v.C.www && "en" !== n,
                    o = e.location?.path.replace("{username}", a);
                  return {
                    ...e,
                    ...e.children ? {
                      children: e.children.reduce(s, [])
                    } : {},
                    ...e.targets ? {
                      targets: e.targets.reduce(s, [])
                    } : {},
                    ...e.location ? {
                      location: {
                        ...e.location,
                        path: r && o ? ao(o, n) : o,
                        domain: t?.currentSite ? to(e.location.domain, t.currentSite.site) : ""
                      }
                    } : {}
                  }
                };
              return e => r(e)
            })(t, i),
            p = Ii(),
            [h, f] = (0, l.useState)(""),
            b = e,
            w = (e => ({
              targets: [{
                text: e.formatMessage(rr.search_target_games),
                gaText: rr.search_target_games.defaultMessage,
                tab: "games",
                value: "games",
                type: "",
                location: {
                  domain: v.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "games"
                  }
                },
                searchOptions: Zr
              }, {
                text: e.formatMessage(rr.search_target_posts),
                gaText: rr.search_target_posts.defaultMessage,
                tab: "posts",
                value: "posts",
                type: "",
                location: {
                  domain: v.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "posts"
                  }
                },
                searchOptions: Zr
              }, {
                text: e.formatMessage(rr.search_target_videos),
                gaText: rr.search_target_videos.defaultMessage,
                tab: "videos",
                value: "videos",
                type: "",
                location: {
                  domain: v.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "videos"
                  }
                },
                searchOptions: Zr
              }, {
                text: e.formatMessage(rr.search_target_community),
                gaText: rr.search_target_community.defaultMessage,
                tab: "socialClub",
                value: "socialClub",
                type: "nav-dropdown",
                targets: [{
                  text: e.formatMessage(rr.search_target_users),
                  gaText: rr.search_target_users.defaultMessage,
                  value: "community-users",
                  type: "",
                  location: {
                    domain: v.C.socialClub,
                    path: "/members/{term}"
                  },
                  searchOptions: Zr
                }, {
                  text: e.formatMessage(rr.search_target_crews),
                  gaText: rr.search_target_crews.defaultMessage,
                  value: "community-crews",
                  type: "",
                  location: {
                    domain: v.C.socialClub,
                    path: "/crews/{term}"
                  },
                  searchOptions: Zr
                }, {
                  text: e.formatMessage(rr.search_target_jobs),
                  gaText: rr.search_target_jobs.defaultMessage,
                  value: "community-jobs",
                  type: "",
                  location: {
                    domain: v.C.socialClub,
                    path: "/jobs/{term}"
                  },
                  searchOptions: Zr
                }]
              }]
            }))(g),
            [y, k] = (0, l.useState)(window.innerWidth < 1024),
            {
              rsg: x,
              ...M
            } = n,
            C = Object.values({
              ...M,
              rsg: x
            }).map((e => e(g))),
            T = (0, l.useMemo)((() => {
              const e = m.currentSite?.site,
                a = x(g).links;
              return C.reduce(((t, n) => {
                if (!m.currentSite?.site || !n?.appearancePaths?.[m.currentSite.site]) return t;
                const s = ((e, a, t, n) => e && 0 !== e.length || "www" !== t || !n ? e : a)(n.links, a, e, y);
                return [...t, {
                  ...n,
                  appearancePaths: m.currentSite?.site ? n?.appearancePaths?.[m.currentSite.site] : [],
                  links: s.map(u),
                  cta: n.cta && u(n.cta)
                }]
              }), [])
            }), [y, C]),
            j = (0, l.useMemo)((() => ({
              ...w,
              targets: w.targets.map(u)
            })), [w, u]),
            S = (0, l.useMemo)((() => (e => ({
              quickMenuHome: e.formatMessage(An.nav_quick_access_home),
              quickMenuGames: e.formatMessage(An.nav_quick_access_games),
              quickMenuNewswire: e.formatMessage(An.nav_quick_access_newswire),
              avatarMenuSelectLanguage: e.formatMessage(An.avatarmenu_selectlanguage),
              avatarMenuSignIn: e.formatMessage(An.avatarmenu_signin),
              avatarMenuSignUp: e.formatMessage(An.avatarmenu_signup),
              avatarMenuSignOut: e.formatMessage(An.avatarmenu_logout)
            }))(g)), []),
            G = (e, a) => {
              let t, n = "";
              const s = new URLSearchParams(e);
              if (new URLSearchParams(a).forEach(((e, a) => {
                  const r = s.get(a);
                  "{query}" === e && r ? (t = !0, n = r) : t = r === e && !1 !== t
                })), t) return n
            },
            A = (e, a) => {
              if (!a) return !1;
              const t = e.split(/[/?]+/),
                n = a.split(/[/?]+/);
              if (n.every(((e, a) => e === t[a] || "{term}" === e || "" === e))) {
                const e = n.findIndex((e => "{term}" === e));
                if (e) return t[e]
              }
              return ""
            },
            I = (0, l.useCallback)((() => {
              let e, a = "";
              const {
                pathname: t,
                search: n
              } = window.location;
              return j.targets.findIndex((s => {
                if ("" === s.type && s.location) {
                  if (s.location.path && t.startsWith(s.location.path)) {
                    const t = G(n, s.location.params);
                    if (t) return a = t, e = s, !0
                  }
                  if (!s.location.params) {
                    const n = A(t, s.location.path);
                    if (n) return a = n, e = s, !0
                  }
                }
                if ("nav-dropdown" === s.type) {
                  const r = s.targets?.findIndex((s => {
                    if ("" === s.type) {
                      if (s.location.path && t.startsWith(s.location.path)) {
                        const t = G(n, s.location.params);
                        if (t) return a = t, e = s, !0
                      }
                      const r = A(t, s.location.path);
                      if (r) return a = r, e = s, !0
                    }
                    return !1
                  }));
                  return Boolean(r) && r >= 0
                }
              })), [a, e]
            }), [j]),
            P = (0, l.useCallback)(((e, a) => {
              let t;
              return e.forEach((e => {
                if ("nav-dropdown" === e.type) {
                  const n = P(e.targets, a);
                  n && (t = n)
                } else e.value === a && (t = e)
              })), t
            }), [j]),
            L = (0, l.useCallback)((e => {
              if ("" === e) return !1;
              const a = Qr?.(e);
              return e.split(/\s+/).every((e => e.length < 3)) ? (f(g.formatMessage(An.nav_search_error_too_short, {
                count: 3
              })), !1) : a ? (f(g.formatMessage(An.nav_search_error_invalid_chars, {
                invalidChars: [...new Set(a)].join(", ")
              })), !1) : (f(""), !0)
            }), []),
            N = (0, l.useCallback)(((e, a) => {
              if (L(e) && a) {
                const t = P(j.targets, a);
                return t ? p(e, t.location) : null
              }
            }), [j]),
            R = (0, l.useMemo)((() => ({
              loggedInLinks: so(g, i, _, c).map(u),
              helpItem: u(oo(g))
            })), [g, i, _, c]);
          return (0, l.useEffect)((() => {
            const e = () => {
              k(window.innerWidth < 1024)
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, r.jsx)(b, {
            navigationData: T,
            locale: t,
            globalNavigationComponent: a,
            searchConfig: j,
            gamesMenuComponent: s,
            avatarMenuData: R,
            onSearch: N,
            getQueryFromUrl: I,
            errorMessage: h,
            localisedStrings: S,
            ...d
          })
        },
        Li = (0, o.withIntl)((({
          globalNavLoaderComponent: e,
          globalNavComponent: a,
          username: t,
          userProfileLink: n,
          hasNotifications: s,
          ...i
        }) => {
          const [_] = (0, o.getLocale)();
          return e ? (0, r.jsx)(Pi, {
            globalNavLoaderComponent: e,
            globalNavComponent: a,
            locale: _,
            username: t,
            userProfileLink: n,
            hasNotifications: s,
            ...i
          }) : null
        }), g),
        Ni = ({
          children: e
        }) => (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: "rockstargames-modules-core-headerc4f15625f88eb02acfbc8ca67b037e73",
            children: e
          })
        });
      var Ri = t(99280);
      const Oi = "rockstargames-modules-core-headercbbfe1886a9116f22ee660d6e782abb5",
        Di = "rockstargames-modules-core-headerf88340f4aed2ac9af614a8c30dac6a86",
        zi = (0, l.forwardRef)((function({
          children: e,
          asChild: a,
          className: t,
          variant: n,
          dataTestId: s,
          ...o
        }, i) {
          const {
            inMobileMenu: _
          } = (0, l.useContext)(Eo), c = (0, Ri.mergeProps)({
            "data-testid": s
          }, o), d = ko()("rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca", {
            [Di]: "highlight" === n,
            [Oi]: !!_
          }, t), g = a ? fo.Slot : "a";
          return (0, r.jsx)(g, {
            ref: i,
            className: d,
            ...c,
            children: (0, r.jsx)(fo.Slottable, {
              children: e
            })
          })
        }));
      var Ei = t(86683),
        Bi = t(79158);
      const Vi = {
          closeIcon: "rockstargames-modules-core-headere4d62dd5ace547da9e7b6fb79bbe72ad",
          filterContainer: "rockstargames-modules-core-headerea293624c20a9003528f8f987ca1a72a",
          filterContainerMobile: "rockstargames-modules-core-headerb2545197a446a380d2e8d73ec8cac0b3",
          filters: "rockstargames-modules-core-headerb642c9d9226db09086ecfa05185cc13a",
          hasScrollLeft: "rockstargames-modules-core-headerfe78fb2c62f5bb25362c8c0cc57d0531",
          hasScrollRight: "rockstargames-modules-core-headere566b42b19ba5c234f6aa6ce1019f147",
          open: "rockstargames-modules-core-headerace76bca2cab08dbc01f04d6bb22972c",
          pillBtn: "rockstargames-modules-core-headerab3b2e0ecc987b715403e7c4b132f95d",
          pillButton: "rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a",
          scaleIn: "rockstargames-modules-core-headerb66ae794e4fe420fc94052d205a7ff94",
          searchBarContainer: "rockstargames-modules-core-headerd4f3148e5037527a409f7b661459772d",
          searchContainer: "rockstargames-modules-core-headerab5088afc99154e0b25d9940005de113",
          searchError: "rockstargames-modules-core-headereb547eb575435a51cbf0873f194d4107",
          searchField: "rockstargames-modules-core-headerd94a8a649b5f5cd1fa547c9308ee4457",
          searchFieldMobile: "rockstargames-modules-core-headera195beaac090ea8f2494f17d66774cb9",
          searchIcon: "rockstargames-modules-core-headerecdd68bbe17f44b9e70ff88f2b2a9b79",
          searchQuery: "rockstargames-modules-core-headera634f4a0c4a48cbcc350732d51cb090b",
          searchQueryMobile: "rockstargames-modules-core-headere1e68d34808ed306bca03b05f5b2b02d",
          searchTargetDropdown: "rockstargames-modules-core-headerb471c4190fc8e65979506ca527760dda",
          searchTargetDropdownContent: "rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a",
          searchTargets: "rockstargames-modules-core-headere823c5118fac77772d262996cc811242",
          searchTargetsMobile: "rockstargames-modules-core-headereac76768521427c950890d0981c8604c",
          searchToggleButton: "rockstargames-modules-core-headerfd31178b39e75b430b16a32f5ed36e2e",
          selected: "rockstargames-modules-core-headerd58298b0610cb77e0a7d26a8735a93fd",
          subTargetButton: "rockstargames-modules-core-headercbf7a2945565eaca09b784a902ac191b",
          triggerChevron: "rockstargames-modules-core-headerded9b5c5e36e41a53dcdccf1a0fe2766"
        },
        qi = {
          open: {
            height: "auto",
            overflow: "hidden",
            transition: {
              ...No.springClose,
              delay: .15
            }
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: No.springClose
          }
        },
        Fi = ({
          children: e,
          isSearchPage: a
        }) => {
          const t = (0, o.useIntl)(),
            {
              isNavHidden: n
            } = (0, l.useContext)(Io),
            [s, i] = (0, l.useState)(a || !1);
          (0, l.useEffect)((() => {
            i(!1)
          }), [n]);
          const _ = !n && (a || s);
          let c;
          return c = Vi.searchContainer, (0, r.jsx)(wo, {
            showOn: "desktop",
            children: (0, r.jsx)("div", {
              className: c,
              children: (0, r.jsxs)(Ho.Root, {
                open: _,
                onOpenChange: i,
                children: [(0, r.jsx)(Ho.Trigger, {
                  asChild: !0,
                  children: (0, r.jsx)("button", {
                    className: Vi.searchToggleButton,
                    "data-testid": "searchToggle",
                    children: (0, r.jsx)("img", {
                      src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
                      className: Vi.searchToggleButtonIcon,
                      alt: t.formatMessage(_ ? jo.search_close_button : jo.search_open_button)
                    })
                  })
                }), (0, r.jsx)(Nn.AnimatePresence, {
                  children: _ && (0, r.jsx)(Ei.FocusScope, {
                    loop: !a,
                    children: (0, r.jsx)(Ho.Content, {
                      forceMount: !0,
                      sideOffset: 26,
                      children: (0, r.jsx)(Nn.motion.div, {
                        initial: "close",
                        animate: "open",
                        exit: "close",
                        variants: qi,
                        "data-testid": "searchBar",
                        children: e
                      })
                    })
                  })
                })]
              })
            })
          })
        },
        Hi = (0, l.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        Wi = (0, l.forwardRef)((function({
          children: e
        }, a) {
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              ref: a,
              className: Vi.searchBarContainer,
              children: e
            })
          })
        })),
        Ui = (0, l.forwardRef)((function({
          children: e,
          queryMin: a = 0,
          queryMax: t = 100,
          onSearch: n,
          query: s,
          onQueryChange: i,
          target: _,
          onTargetChange: c,
          isSearchPage: d = !1
        }, g) {
          const v = (0, o.useIntl)(),
            {
              inMobileMenu: m,
              closeMobileMenu: u
            } = (0, l.useContext)(Eo),
            [p, h] = (0, Bi.useControllableState)({
              prop: s,
              onChange: i,
              defaultProp: ""
            }),
            [f, b] = (0, Bi.useControllableState)({
              prop: _,
              onChange: c,
              defaultProp: ""
            }),
            [w, y] = (0, l.useState)(!1),
            k = (e, a) => {
              n(e, a, u)
            },
            x = {
              inSearchMenu: !0,
              searchTarget: f,
              setSearchTarget: e => {
                b(e), p && p.length >= a && k(p, e)
              },
              onChange: i
            },
            M = (0, l.useMemo)((() => m ? (0, r.jsx)(Nn.AnimatePresence, {
              children: w && (0, r.jsx)(Nn.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: qi,
                transition: No.springOpen,
                "data-testid": "searchBar",
                children: (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("div", {
                    className: Vi.searchTargetsMobile,
                    children: e
                  })
                })
              })
            }) : (0, r.jsx)(r.Fragment, {
              children: (0, r.jsxs)("div", {
                className: Vi.searchTargets,
                children: [e, !m && !d && (0, r.jsx)("div", {
                  className: Vi.closeIcon,
                  children: (0, r.jsx)(Ho.Close, {
                    className: Vi.closeIconButton,
                    children: (0, r.jsx)("img", {
                      className: Vi.closeIconImg,
                      src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
                      alt: v.formatMessage(jo.search_close_button)
                    })
                  })
                })]
              })
            })), [m, w, d]);
          return (0, r.jsxs)(Hi.Provider, {
            value: x,
            children: [(0, r.jsxs)("div", {
              className: ko()(Vi.searchQuery, {
                [Vi.searchQueryMobile]: m
              }),
              "data-testid": "searchBar",
              children: [(0, r.jsx)("div", {
                className: Vi.searchIcon,
                children: (0, r.jsx)(io.IconButton, {
                  className: Vi.searchIconButton,
                  onClick: () => {
                    k(p, f)
                  },
                  appearance: "ghost",
                  icon: "Search",
                  size: "LG",
                  label: v.formatMessage(jo.search_action)
                })
              }), (0, r.jsx)("div", {
                className: Vi.searchField,
                children: (0, r.jsx)("input", {
                  className: Vi.searchFieldInput,
                  type: "textfield",
                  value: p,
                  onChange: e => (e => {
                    h(e)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && p && f && k(p, f)
                  },
                  onFocus: () => y(!0),
                  placeholder: v.formatMessage(jo.search_placeholder),
                  ref: g,
                  enterKeyHint: "search",
                  maxLength: t,
                  min: a,
                  max: t
                })
              }), m && w && (0, r.jsx)(io.IconButton, {
                onClick: () => y(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: v.formatMessage(jo.search_close_button)
              })]
            }), M]
          })
        })),
        $i = ({
          children: e
        }) => {
          const {
            inMobileMenu: a
          } = (0, l.useContext)(Eo), t = (0, l.useRef)(null), [n, s] = (0, l.useState)(0);
          return (0, l.useEffect)((() => {
            const e = () => {
              t && t.current && s(t.current.scrollLeft / (t.current.scrollWidth - t.current.offsetWidth))
            };
            return t && t.current && t.current.addEventListener("scroll", e), () => {
              t && t.current && t.current.removeEventListener("scroll", e)
            }
          }), [t.current]), (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: ko()(a ? Vi.filterContainerMobile : Vi.filterContainer, {
                [Vi.hasScrollLeft]: n > .1,
                [Vi.hasScrollRight]: n < .9
              }),
              children: (0, r.jsx)("div", {
                ref: t,
                className: Vi.filters,
                children: e
              })
            })
          })
        },
        Ji = (0, l.forwardRef)((function({
          children: e,
          value: a,
          title: t,
          active: n,
          hasChevron: s,
          ...o
        }, i) {
          const {
            setSearchTarget: _,
            searchTarget: c
          } = (0, l.useContext)(Hi), {
            inSearchTargetDropdown: d,
            setRootSearchTarget: g,
            rootSearchTarget: v
          } = (0, l.useContext)(Yi), m = n || Boolean(c) && (c === a || c === v.key);
          return (0, r.jsx)("button", {
            ref: i,
            type: "button",
            className: ko()({
              [Vi.subTargetButton]: d,
              [Vi.pillButton]: !d,
              [Vi.selected]: m
            }),
            onClick: () => {
              return n = a, _?.(n), void(d && "string" == typeof e && g({
                key: a,
                title: t
              }));
              var n
            },
            value: a,
            ...o,
            children: e
          })
        })),
        Yi = (0, l.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        Ki = ({
          title: e,
          children: a
        }) => {
          const [t, n] = (0, l.useState)(!1), [s, o] = (0, l.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: i
          } = (0, l.useContext)(Hi);
          return (0, l.useEffect)((() => {
            n(!1)
          }), [s]), (0, l.useEffect)((() => {
            i !== s.key && o({
              key: "",
              title: ""
            })
          }), [i]), (0, r.jsxs)(Ho.Root, {
            open: t,
            onOpenChange: n,
            children: [(0, r.jsx)(Ho.Trigger, {
              asChild: !0,
              children: (0, r.jsxs)(Ji, {
                value: e,
                title: e,
                active: s.key,
                hasChevron: !0,
                children: [s.title || e, (0, r.jsx)("img", {
                  src: lo,
                  className: ko()(Vi.triggerChevron, Vi.pillButtonChevron, t ? Vi.open : Vi.closed),
                  alt: ""
                })]
              })
            }), (0, r.jsx)(Yi.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: s,
                setRootSearchTarget: o
              },
              children: (0, r.jsx)(Ho.Content, {
                align: "start",
                className: Vi.searchTargetDropdownContent,
                children: a
              })
            })]
          })
        },
        Xi = (0, l.forwardRef)((function({
          errorMessage: e
        }, a) {
          return (0, r.jsx)(r.Fragment, {
            children: e && (0, r.jsx)("div", {
              ref: a,
              className: Vi.searchError,
              "aria-live": "polite",
              children: e
            })
          })
        })),
        Qi = () => (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: "rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8"
          })
        }),
        Zi = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        e_ = ({
          children: e
        }) => (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: "rockstargames-modules-core-headerb849f786b7df4a944d31e8d270e88402",
            children: e
          })
        }),
        a_ = ({
          children: e
        }) => (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: "rockstargames-modules-core-headerd4e4d5dba7484c7a542e229dfbce0fa5",
            children: e
          })
        }),
        t_ = ({
          quickAccessHidden: e,
          children: a,
          href: t,
          onNavigate: n
        }) => {
          const s = (0, o.useIntl)(),
            [i, _] = (0, l.useState)(!1),
            {
              brand: c,
              isNavHidden: d
            } = (0, l.useContext)(Io),
            g = t || "/";
          return (0, l.useEffect)((() => {
            _(!1)
          }), [d, e]), (0, r.jsxs)(e_, {
            children: [(0, r.jsxs)(a_, {
              children: [!c && (0, r.jsx)(wo, {
                showOn: "mobile",
                children: (0, r.jsx)(kn.A, {
                  to: g,
                  "aria-label": s.formatMessage(jo.nav_rockstargames_home),
                  onNavigate: n,
                  children: (0, r.jsx)(Qi, {})
                })
              }), !a && (0, r.jsx)(wo, {
                showOn: "desktop",
                children: (0, r.jsx)(kn.A, {
                  to: g,
                  "aria-label": s.formatMessage(jo.nav_rockstargames_home),
                  onNavigate: n,
                  children: (0, r.jsx)(Qi, {})
                })
              }), a && (0, r.jsxs)(Ho.Root, {
                open: i,
                onOpenChange: _,
                children: [(0, r.jsx)(wo, {
                  showOn: "desktop",
                  children: (0, r.jsx)(Ho.Trigger, {
                    asChild: !0,
                    children: (0, r.jsx)("button", {
                      type: "button",
                      className: "rockstargames-modules-core-headercca5aace5aea24ffadc1b682e19098c1",
                      "aria-label": s.formatMessage(jo.nav_rockstargames_logo),
                      children: (0, r.jsx)(Qi, {})
                    })
                  })
                }), (0, r.jsx)(Nn.AnimatePresence, {
                  children: i && (0, r.jsx)(wo, {
                    showOn: "desktop",
                    children: (0, r.jsx)(Ho.Content, {
                      forceMount: !0,
                      align: "start",
                      sideOffset: 24,
                      children: (0, r.jsx)(Nn.motion.div, {
                        className: "rockstargames-modules-core-headerfe87bc51f19ebbbaeda0ea6abe883764",
                        variants: Zi,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: a
                      })
                    })
                  })
                })]
              })]
            }), c && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(wo, {
                showOn: "desktop",
                children: (0, r.jsx)("div", {
                  className: "rockstargames-modules-core-headerd9361f5f553f030e6a2739115afe41a7"
                })
              }), (0, r.jsx)("div", {
                className: "rockstargames-modules-core-headeref458606d6bf19c4a61b18feb8aaf80a",
                children: c
              })]
            })]
          })
        },
        n_ = nr
    }
  }
]);