try {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new a.Error).stack;
  o && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[o] = "20dd7be4-ce35-46d6-8de0-eded76c20ac5", a._sentryDebugIdIdentifier = "sentry-dbid-20dd7be4-ce35-46d6-8de0-eded76c20ac5")
} catch (a) {} {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[(new a.Error).stack] = Object.assign({}, a._sentryModuleMetadata[(new a.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9455], {
    8141: (a, o, r) => {
      r.d(o, {
        DI: () => l,
        Tm: () => t,
        LU: () => n
      });
      var e = r(23644);

      function l(a, o) {
        var r = {};
        if ("object" == typeof o) {
          var l = a;
          (0, e.Bx)(o, ((a, o) => {
            if (null != a) {
              var n = (0, e.Jt)(l, o);
              r[(0, e.Tm)(n)] = String(a)
            }
          }))
        } else {
          var n = a;
          for (var t in n) {
            var d = n[t];
            null != d && (r[(0, e.Tm)(t)] = d)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map((a => "".concat(a, ":").concat(this[a]))).join(";")
          },
          writable: !1
        }), r
      }
      r(10131);
      var n = {
        global: {
          color: {
            grey: {
              static: {
                25: "var(--foundry-global-color-grey-static-25-05dae190)",
                50: "var(--foundry-global-color-grey-static-50-767699a7)",
                75: "var(--foundry-global-color-grey-static-75-a2172132)",
                100: "var(--foundry-global-color-grey-static-100-01811cdb)",
                200: "var(--foundry-global-color-grey-static-200-8230761c)",
                300: "var(--foundry-global-color-grey-static-300-60d2d1b8)",
                400: "var(--foundry-global-color-grey-static-400-b9847fcb)",
                500: "var(--foundry-global-color-grey-static-500-c92b4dd8)",
                600: "var(--foundry-global-color-grey-static-600-048e9067)",
                700: "var(--foundry-global-color-grey-static-700-6ebcd800)",
                800: "var(--foundry-global-color-grey-static-800-35f77231)",
                900: "var(--foundry-global-color-grey-static-900-a85ec23d)"
              },
              adaptive: {
                25: "var(--foundry-global-color-grey-adaptive-25-4181979c)",
                50: "var(--foundry-global-color-grey-adaptive-50-2026f5f9)",
                75: "var(--foundry-global-color-grey-adaptive-75-e832421c)",
                100: "var(--foundry-global-color-grey-adaptive-100-ed36bf65)",
                200: "var(--foundry-global-color-grey-adaptive-200-fb12d031)",
                300: "var(--foundry-global-color-grey-adaptive-300-02700b85)",
                400: "var(--foundry-global-color-grey-adaptive-400-54ccd69e)",
                500: "var(--foundry-global-color-grey-adaptive-500-ddc3fb78)",
                600: "var(--foundry-global-color-grey-adaptive-600-e8d9db01)",
                700: "var(--foundry-global-color-grey-adaptive-700-e3418aa4)",
                800: "var(--foundry-global-color-grey-adaptive-800-59c03dd7)",
                900: "var(--foundry-global-color-grey-adaptive-900-bbecd7df)",
                1e3: "var(--foundry-global-color-grey-adaptive-1000-020dfb1f)"
              }
            },
            red: {
              static: {
                100: "var(--foundry-global-color-red-static-100-5234bf51)",
                200: "var(--foundry-global-color-red-static-200-9b555022)",
                300: "var(--foundry-global-color-red-static-300-6ef42061)",
                400: "var(--foundry-global-color-red-static-400-bd31684b)",
                500: "var(--foundry-global-color-red-static-500-b89c22c5)",
                600: "var(--foundry-global-color-red-static-600-ed4f7808)",
                700: "var(--foundry-global-color-red-static-700-20c326c5)",
                800: "var(--foundry-global-color-red-static-800-60c90a7b)",
                900: "var(--foundry-global-color-red-static-900-55f69265)",
                1e3: "var(--foundry-global-color-red-static-1000-12c1e6bb)",
                1100: "var(--foundry-global-color-red-static-1100-284ef4c0)",
                1200: "var(--foundry-global-color-red-static-1200-5d3f7911)",
                1300: "var(--foundry-global-color-red-static-1300-43fd11f8)",
                1400: "var(--foundry-global-color-red-static-1400-dff9f9a5)"
              },
              adaptive: {
                100: "var(--foundry-global-color-red-adaptive-100-9f218b31)",
                200: "var(--foundry-global-color-red-adaptive-200-b287e195)",
                300: "var(--foundry-global-color-red-adaptive-300-3513afa6)",
                400: "var(--foundry-global-color-red-adaptive-400-2e43b523)",
                500: "var(--foundry-global-color-red-adaptive-500-d198b061)",
                600: "var(--foundry-global-color-red-adaptive-600-7da276f6)",
                700: "var(--foundry-global-color-red-adaptive-700-6f634812)",
                800: "var(--foundry-global-color-red-adaptive-800-7f423e03)",
                900: "var(--foundry-global-color-red-adaptive-900-43f71e11)",
                1e3: "var(--foundry-global-color-red-adaptive-1000-9f5e2924)",
                1100: "var(--foundry-global-color-red-adaptive-1100-f2f72614)",
                1200: "var(--foundry-global-color-red-adaptive-1200-aef5078c)",
                1300: "var(--foundry-global-color-red-adaptive-1300-3c79c39b)",
                1400: "var(--foundry-global-color-red-adaptive-1400-918ac2c6)"
              }
            },
            yellow: {
              static: {
                100: "var(--foundry-global-color-yellow-static-100-2887d8ce)",
                200: "var(--foundry-global-color-yellow-static-200-1dceac31)",
                300: "var(--foundry-global-color-yellow-static-300-bda8dae5)",
                400: "var(--foundry-global-color-yellow-static-400-e603ca1c)",
                500: "var(--foundry-global-color-yellow-static-500-b9703bbc)",
                600: "var(--foundry-global-color-yellow-static-600-828a39a0)",
                700: "var(--foundry-global-color-yellow-static-700-cb059cba)",
                800: "var(--foundry-global-color-yellow-static-800-e49b6916)",
                900: "var(--foundry-global-color-yellow-static-900-ff35761e)",
                1e3: "var(--foundry-global-color-yellow-static-1000-7c6c4551)",
                1100: "var(--foundry-global-color-yellow-static-1100-2e821a8c)",
                1200: "var(--foundry-global-color-yellow-static-1200-aea00231)",
                1300: "var(--foundry-global-color-yellow-static-1300-7eec7bd0)",
                1400: "var(--foundry-global-color-yellow-static-1400-0ff6b89d)"
              },
              adaptive: {
                100: "var(--foundry-global-color-yellow-adaptive-100-8f09820e)",
                200: "var(--foundry-global-color-yellow-adaptive-200-63c3f5ee)",
                300: "var(--foundry-global-color-yellow-adaptive-300-4deab2f6)",
                400: "var(--foundry-global-color-yellow-adaptive-400-78286ac3)",
                500: "var(--foundry-global-color-yellow-adaptive-500-f0427a70)",
                600: "var(--foundry-global-color-yellow-adaptive-600-3f6d60dc)",
                700: "var(--foundry-global-color-yellow-adaptive-700-959c799c)",
                800: "var(--foundry-global-color-yellow-adaptive-800-099fea86)",
                900: "var(--foundry-global-color-yellow-adaptive-900-9443df02)",
                1e3: "var(--foundry-global-color-yellow-adaptive-1000-abbedd59)",
                1100: "var(--foundry-global-color-yellow-adaptive-1100-ff18d083)",
                1200: "var(--foundry-global-color-yellow-adaptive-1200-4bc40f51)",
                1300: "var(--foundry-global-color-yellow-adaptive-1300-b3a4b5b4)",
                1400: "var(--foundry-global-color-yellow-adaptive-1400-3048335a)"
              }
            },
            green: {
              static: {
                100: "var(--foundry-global-color-green-static-100-753f09df)",
                200: "var(--foundry-global-color-green-static-200-b1b43708)",
                300: "var(--foundry-global-color-green-static-300-d66b3241)",
                400: "var(--foundry-global-color-green-static-400-a93942e5)",
                500: "var(--foundry-global-color-green-static-500-2888e254)",
                600: "var(--foundry-global-color-green-static-600-aebbfb3a)",
                700: "var(--foundry-global-color-green-static-700-89b4ffdc)",
                800: "var(--foundry-global-color-green-static-800-87b9bb4f)",
                900: "var(--foundry-global-color-green-static-900-b42b84da)",
                1e3: "var(--foundry-global-color-green-static-1000-43ecb25e)",
                1100: "var(--foundry-global-color-green-static-1100-d4597796)",
                1200: "var(--foundry-global-color-green-static-1200-a4dad299)",
                1300: "var(--foundry-global-color-green-static-1300-7861b376)",
                1400: "var(--foundry-global-color-green-static-1400-4d463023)"
              },
              adaptive: {
                100: "var(--foundry-global-color-green-adaptive-100-e36f5da3)",
                200: "var(--foundry-global-color-green-adaptive-200-e50d247c)",
                300: "var(--foundry-global-color-green-adaptive-300-e74a73b3)",
                400: "var(--foundry-global-color-green-adaptive-400-3e375ae0)",
                500: "var(--foundry-global-color-green-adaptive-500-5eb32af8)",
                600: "var(--foundry-global-color-green-adaptive-600-67db0104)",
                700: "var(--foundry-global-color-green-adaptive-700-b46c5b6e)",
                800: "var(--foundry-global-color-green-adaptive-800-62f4ea41)",
                900: "var(--foundry-global-color-green-adaptive-900-456c793d)",
                1e3: "var(--foundry-global-color-green-adaptive-1000-ebe84050)",
                1100: "var(--foundry-global-color-green-adaptive-1100-7d1a8857)",
                1200: "var(--foundry-global-color-green-adaptive-1200-f5a760b2)",
                1300: "var(--foundry-global-color-green-adaptive-1300-98111c27)",
                1400: "var(--foundry-global-color-green-adaptive-1400-c7a2c7e4)"
              }
            },
            blue: {
              static: {
                100: "var(--foundry-global-color-blue-static-100-e67c243c)",
                200: "var(--foundry-global-color-blue-static-200-d053fe98)",
                300: "var(--foundry-global-color-blue-static-300-564f6a4f)",
                400: "var(--foundry-global-color-blue-static-400-803833dc)",
                500: "var(--foundry-global-color-blue-static-500-029df7ec)",
                600: "var(--foundry-global-color-blue-static-600-55155611)",
                700: "var(--foundry-global-color-blue-static-700-f0d799e8)",
                800: "var(--foundry-global-color-blue-static-800-6d071594)",
                900: "var(--foundry-global-color-blue-static-900-92d3b7cc)",
                1e3: "var(--foundry-global-color-blue-static-1000-cc0c4d91)",
                1100: "var(--foundry-global-color-blue-static-1100-674881c3)",
                1200: "var(--foundry-global-color-blue-static-1200-81ade28f)",
                1300: "var(--foundry-global-color-blue-static-1300-92c235c9)",
                1400: "var(--foundry-global-color-blue-static-1400-1b5feb14)"
              },
              adaptive: {
                100: "var(--foundry-global-color-blue-adaptive-100-b6c46a86)",
                200: "var(--foundry-global-color-blue-adaptive-200-0ccc0c81)",
                300: "var(--foundry-global-color-blue-adaptive-300-e5d80c0e)",
                400: "var(--foundry-global-color-blue-adaptive-400-44a2af0b)",
                500: "var(--foundry-global-color-blue-adaptive-500-64093fc7)",
                600: "var(--foundry-global-color-blue-adaptive-600-41bcc0d5)",
                700: "var(--foundry-global-color-blue-adaptive-700-6f985a0d)",
                800: "var(--foundry-global-color-blue-adaptive-800-c66fae2b)",
                900: "var(--foundry-global-color-blue-adaptive-900-f87fb7ab)",
                1e3: "var(--foundry-global-color-blue-adaptive-1000-129c45a7)",
                1100: "var(--foundry-global-color-blue-adaptive-1100-579d2d7f)",
                1200: "var(--foundry-global-color-blue-adaptive-1200-5b826b61)",
                1300: "var(--foundry-global-color-blue-adaptive-1300-5864a192)",
                1400: "var(--foundry-global-color-blue-adaptive-1400-b9e5f8ab)"
              }
            },
            seafoam: {
              static: {
                100: "var(--foundry-global-color-seafoam-static-100-a401f55d)",
                200: "var(--foundry-global-color-seafoam-static-200-157f98a6)",
                300: "var(--foundry-global-color-seafoam-static-300-f057cb2a)",
                400: "var(--foundry-global-color-seafoam-static-400-5c314058)",
                500: "var(--foundry-global-color-seafoam-static-500-4eba9472)",
                600: "var(--foundry-global-color-seafoam-static-600-bb39e74b)",
                700: "var(--foundry-global-color-seafoam-static-700-97a0e42c)",
                800: "var(--foundry-global-color-seafoam-static-800-c898779d)",
                900: "var(--foundry-global-color-seafoam-static-900-ca1e00fd)",
                1e3: "var(--foundry-global-color-seafoam-static-1000-97b36592)",
                1100: "var(--foundry-global-color-seafoam-static-1100-7a540639)",
                1200: "var(--foundry-global-color-seafoam-static-1200-9d613b2f)",
                1300: "var(--foundry-global-color-seafoam-static-1300-5d82dc91)",
                1400: "var(--foundry-global-color-seafoam-static-1400-c9f1799c)"
              },
              adaptive: {
                100: "var(--foundry-global-color-seafoam-adaptive-100-9fd7898d)",
                200: "var(--foundry-global-color-seafoam-adaptive-200-ad5ea160)",
                300: "var(--foundry-global-color-seafoam-adaptive-300-339db442)",
                400: "var(--foundry-global-color-seafoam-adaptive-400-bacc52ab)",
                500: "var(--foundry-global-color-seafoam-adaptive-500-24d9f0ae)",
                600: "var(--foundry-global-color-seafoam-adaptive-600-28f1d217)",
                700: "var(--foundry-global-color-seafoam-adaptive-700-f8862c98)",
                800: "var(--foundry-global-color-seafoam-adaptive-800-240ff22d)",
                900: "var(--foundry-global-color-seafoam-adaptive-900-30744fa2)",
                1e3: "var(--foundry-global-color-seafoam-adaptive-1000-cecc3b2f)",
                1100: "var(--foundry-global-color-seafoam-adaptive-1100-307fe74e)",
                1200: "var(--foundry-global-color-seafoam-adaptive-1200-1d61b617)",
                1300: "var(--foundry-global-color-seafoam-adaptive-1300-26c82681)",
                1400: "var(--foundry-global-color-seafoam-adaptive-1400-6cf3df35)"
              }
            },
            white: {
              static: {
                5: "var(--foundry-global-color-white-static-5-c4aa496e)",
                10: "var(--foundry-global-color-white-static-10-fc74444e)",
                15: "var(--foundry-global-color-white-static-15-e98f967d)",
                20: "var(--foundry-global-color-white-static-20-6326998e)",
                35: "var(--foundry-global-color-white-static-35-fdd05d92)",
                40: "var(--foundry-global-color-white-static-40-a06b4074)",
                50: "var(--foundry-global-color-white-static-50-195bb728)",
                65: "var(--foundry-global-color-white-static-65-c30f2d6e)",
                80: "var(--foundry-global-color-white-static-80-1525ba22)",
                85: "var(--foundry-global-color-white-static-85-79c7cc6b)",
                90: "var(--foundry-global-color-white-static-90-5959c519)",
                95: "var(--foundry-global-color-white-static-95-becabaec)",
                100: "var(--foundry-global-color-white-static-100-d44db539)"
              }
            },
            black: {
              static: {
                5: "var(--foundry-global-color-black-static-5-5a16f697)",
                10: "var(--foundry-global-color-black-static-10-16a76e5e)",
                15: "var(--foundry-global-color-black-static-15-d198b2a6)",
                20: "var(--foundry-global-color-black-static-20-3ae064df)",
                35: "var(--foundry-global-color-black-static-35-1523cb80)",
                40: "var(--foundry-global-color-black-static-40-32fa6bf3)",
                50: "var(--foundry-global-color-black-static-50-e761096d)",
                65: "var(--foundry-global-color-black-static-65-1c288c8d)",
                80: "var(--foundry-global-color-black-static-80-ceca67af)",
                85: "var(--foundry-global-color-black-static-85-3cb71ba6)",
                90: "var(--foundry-global-color-black-static-90-45219d0a)",
                95: "var(--foundry-global-color-black-static-95-4042e3bb)",
                100: "var(--foundry-global-color-black-static-100-43aea341)"
              }
            },
            alpha: {
              adaptive: {
                5: "var(--foundry-global-color-alpha-adaptive-5-b141acdd)",
                10: "var(--foundry-global-color-alpha-adaptive-10-2f911b2f)",
                15: "var(--foundry-global-color-alpha-adaptive-15-695b3a30)",
                20: "var(--foundry-global-color-alpha-adaptive-20-8e38b04d)",
                35: "var(--foundry-global-color-alpha-adaptive-35-f9b0b74d)",
                40: "var(--foundry-global-color-alpha-adaptive-40-29c77778)",
                50: "var(--foundry-global-color-alpha-adaptive-50-f61afb4a)",
                65: "var(--foundry-global-color-alpha-adaptive-65-5c75d572)",
                80: "var(--foundry-global-color-alpha-adaptive-80-6e56c3f3)",
                85: "var(--foundry-global-color-alpha-adaptive-85-130819b2)",
                90: "var(--foundry-global-color-alpha-adaptive-90-a416f5ef)",
                95: "var(--foundry-global-color-alpha-adaptive-95-68274c65)"
              }
            }
          },
          platformScales: {
            scale: {
              0: "var(--foundry-global-platform-scales-scale-0-0804de50)",
              10: "var(--foundry-global-platform-scales-scale-10-e43007a8)",
              25: "var(--foundry-global-platform-scales-scale-25-6410d0da)",
              33: "var(--foundry-global-platform-scales-scale-33-15ea8cb3)",
              50: "var(--foundry-global-platform-scales-scale-50-ce8d9569)",
              75: "var(--foundry-global-platform-scales-scale-75-e6cf5003)",
              100: "var(--foundry-global-platform-scales-scale-100-d27bfb1e)",
              125: "var(--foundry-global-platform-scales-scale-125-f7e280cb)",
              150: "var(--foundry-global-platform-scales-scale-150-6ca614ed)",
              175: "var(--foundry-global-platform-scales-scale-175-55240242)",
              200: "var(--foundry-global-platform-scales-scale-200-b985b3f2)",
              225: "var(--foundry-global-platform-scales-scale-225-d561439e)",
              250: "var(--foundry-global-platform-scales-scale-250-5ace963d)",
              300: "var(--foundry-global-platform-scales-scale-300-9356406c)",
              350: "var(--foundry-global-platform-scales-scale-350-a2b3bb07)",
              400: "var(--foundry-global-platform-scales-scale-400-25879f98)",
              450: "var(--foundry-global-platform-scales-scale-450-3029ab1a)",
              500: "var(--foundry-global-platform-scales-scale-500-f82c7fa1)",
              550: "var(--foundry-global-platform-scales-scale-550-d38e7e5a)",
              600: "var(--foundry-global-platform-scales-scale-600-396e1774)",
              650: "var(--foundry-global-platform-scales-scale-650-4291ab1c)",
              700: "var(--foundry-global-platform-scales-scale-700-251bd5dc)",
              750: "var(--foundry-global-platform-scales-scale-750-70abde6a)",
              800: "var(--foundry-global-platform-scales-scale-800-3fe8ece7)",
              900: "var(--foundry-global-platform-scales-scale-900-703d3bf4)",
              950: "var(--foundry-global-platform-scales-scale-950-faa06d06)",
              1e3: "var(--foundry-global-platform-scales-scale-1000-43953c90)",
              1100: "var(--foundry-global-platform-scales-scale-1100-6e89015f)",
              1150: "var(--foundry-global-platform-scales-scale-1150-a779c276)",
              1200: "var(--foundry-global-platform-scales-scale-1200-32a4be13)",
              1400: "var(--foundry-global-platform-scales-scale-1400-cfe54919)",
              1600: "var(--foundry-global-platform-scales-scale-1600-54eb9368)",
              1700: "var(--foundry-global-platform-scales-scale-1700-2581e2fc)",
              1800: "var(--foundry-global-platform-scales-scale-1800-2a76d411)",
              2e3: "var(--foundry-global-platform-scales-scale-2000-2558d0f0)",
              2200: "var(--foundry-global-platform-scales-scale-2200-7289d3db)",
              2350: "var(--foundry-global-platform-scales-scale-2350-76168f14)",
              2400: "var(--foundry-global-platform-scales-scale-2400-e83742de)",
              2500: "var(--foundry-global-platform-scales-scale-2500-24cc854f)",
              2750: "var(--foundry-global-platform-scales-scale-2750-217f5509)",
              3e3: "var(--foundry-global-platform-scales-scale-3000-586585a3)",
              3150: "var(--foundry-global-platform-scales-scale-3150-8caf26b3)",
              3350: "var(--foundry-global-platform-scales-scale-3350-9395e22d)",
              3500: "var(--foundry-global-platform-scales-scale-3500-c9791024)",
              3750: "var(--foundry-global-platform-scales-scale-3750-e5864061)",
              4e3: "var(--foundry-global-platform-scales-scale-4000-35294825)",
              4125: "var(--foundry-global-platform-scales-scale-4125-d7f8e5c7)",
              4250: "var(--foundry-global-platform-scales-scale-4250-3f02afdd)",
              4500: "var(--foundry-global-platform-scales-scale-4500-4b7f7b1a)",
              4750: "var(--foundry-global-platform-scales-scale-4750-f39e7cdd)",
              5e3: "var(--foundry-global-platform-scales-scale-5000-fd5d6798)",
              5250: "var(--foundry-global-platform-scales-scale-5250-526fbc6e)",
              5500: "var(--foundry-global-platform-scales-scale-5500-8d4a1c23)",
              5750: "var(--foundry-global-platform-scales-scale-5750-231d0b96)",
              6e3: "var(--foundry-global-platform-scales-scale-6000-48c91d9d)",
              6250: "var(--foundry-global-platform-scales-scale-6250-47fc2cb8)"
            }
          },
          border: {
            radius: {
              0: "var(--foundry-global-border-radius-0-df9394ed)",
              25: "var(--foundry-global-border-radius-25-00f8ef97)",
              50: "var(--foundry-global-border-radius-50-5b3f01bf)",
              100: "var(--foundry-global-border-radius-100-742803b2)",
              150: "var(--foundry-global-border-radius-150-ca109bc3)",
              200: "var(--foundry-global-border-radius-200-ece22bd6)",
              300: "var(--foundry-global-border-radius-300-7c6d4daf)",
              400: "var(--foundry-global-border-radius-400-ddbb88dd)",
              circle: "var(--foundry-global-border-radius-circle-a97600a9)",
              pill: "var(--foundry-global-border-radius-pill-8c8d51e6)"
            },
            width: {
              0: "var(--foundry-global-border-width-0-b149a800)",
              10: "var(--foundry-global-border-width-10-8d34e94d)",
              25: "var(--foundry-global-border-width-25-52cee49a)",
              33: "var(--foundry-global-border-width-33-d4281be2)",
              50: "var(--foundry-global-border-width-50-ed6ae051)"
            }
          },
          spacing: {
            gap: {
              10: "var(--foundry-global-spacing-gap-10-33a1fb65)",
              25: "var(--foundry-global-spacing-gap-25-2a51e690)",
              33: "var(--foundry-global-spacing-gap-33-ab827c04)",
              50: "var(--foundry-global-spacing-gap-50-ae99fc48)",
              75: "var(--foundry-global-spacing-gap-75-397a0da6)",
              100: "var(--foundry-global-spacing-gap-100-05387de1)",
              125: "var(--foundry-global-spacing-gap-125-23231511)",
              150: "var(--foundry-global-spacing-gap-150-7f268a13)",
              175: "var(--foundry-global-spacing-gap-175-d63af5f3)",
              200: "var(--foundry-global-spacing-gap-200-7d922174)",
              225: "var(--foundry-global-spacing-gap-225-b2ca1ee1)",
              250: "var(--foundry-global-spacing-gap-250-ee21f32b)",
              300: "var(--foundry-global-spacing-gap-300-2f9fe0c5)",
              350: "var(--foundry-global-spacing-gap-350-7ac0bb64)",
              400: "var(--foundry-global-spacing-gap-400-f21302a9)",
              450: "var(--foundry-global-spacing-gap-450-08746772)",
              500: "var(--foundry-global-spacing-gap-500-0fe0ec68)",
              550: "var(--foundry-global-spacing-gap-550-aff30058)",
              600: "var(--foundry-global-spacing-gap-600-d02b9116)",
              650: "var(--foundry-global-spacing-gap-650-d67ef995)",
              700: "var(--foundry-global-spacing-gap-700-936963d7)",
              750: "var(--foundry-global-spacing-gap-750-66d6e892)",
              800: "var(--foundry-global-spacing-gap-800-4ee30294)",
              900: "var(--foundry-global-spacing-gap-900-9531b9b6)",
              950: "var(--foundry-global-spacing-gap-950-cf297696)",
              1e3: "var(--foundry-global-spacing-gap-1000-af3eeb0f)",
              1100: "var(--foundry-global-spacing-gap-1100-6d6ab862)",
              1150: "var(--foundry-global-spacing-gap-1150-5e5d766c)",
              1200: "var(--foundry-global-spacing-gap-1200-5eb7c00a)",
              1400: "var(--foundry-global-spacing-gap-1400-302a953d)",
              1600: "var(--foundry-global-spacing-gap-1600-f3e8c303)",
              1700: "var(--foundry-global-spacing-gap-1700-b6c3835e)",
              1800: "var(--foundry-global-spacing-gap-1800-9826a3ad)",
              2e3: "var(--foundry-global-spacing-gap-2000-c24e1178)",
              2200: "var(--foundry-global-spacing-gap-2200-8192be37)",
              2350: "var(--foundry-global-spacing-gap-2350-1cf77686)",
              2400: "var(--foundry-global-spacing-gap-2400-c9462d01)",
              2500: "var(--foundry-global-spacing-gap-2500-442ef530)"
            },
            dimensions: {
              10: "var(--foundry-global-spacing-dimensions-10-7d52ec29)",
              25: "var(--foundry-global-spacing-dimensions-25-eec1a90b)",
              33: "var(--foundry-global-spacing-dimensions-33-9d3ffc33)",
              50: "var(--foundry-global-spacing-dimensions-50-b85610c2)",
              75: "var(--foundry-global-spacing-dimensions-75-8db9e2a0)",
              100: "var(--foundry-global-spacing-dimensions-100-97e13da9)",
              125: "var(--foundry-global-spacing-dimensions-125-ef032ca7)",
              150: "var(--foundry-global-spacing-dimensions-150-ea1fb93c)",
              175: "var(--foundry-global-spacing-dimensions-175-6d1e42fb)",
              200: "var(--foundry-global-spacing-dimensions-200-2fbf5420)",
              225: "var(--foundry-global-spacing-dimensions-225-f91d4d91)",
              250: "var(--foundry-global-spacing-dimensions-250-1db78665)",
              300: "var(--foundry-global-spacing-dimensions-300-8149e8c1)",
              350: "var(--foundry-global-spacing-dimensions-350-1aeb7130)",
              400: "var(--foundry-global-spacing-dimensions-400-b120da78)",
              450: "var(--foundry-global-spacing-dimensions-450-41690cc7)",
              500: "var(--foundry-global-spacing-dimensions-500-72b67c3c)",
              550: "var(--foundry-global-spacing-dimensions-550-97601a54)",
              600: "var(--foundry-global-spacing-dimensions-600-552f3071)",
              650: "var(--foundry-global-spacing-dimensions-650-61f68482)",
              700: "var(--foundry-global-spacing-dimensions-700-523e51c1)",
              750: "var(--foundry-global-spacing-dimensions-750-8a3f1cbf)",
              800: "var(--foundry-global-spacing-dimensions-800-bbdfa298)",
              900: "var(--foundry-global-spacing-dimensions-900-efcdb6bf)",
              950: "var(--foundry-global-spacing-dimensions-950-cc7b4e5e)",
              1e3: "var(--foundry-global-spacing-dimensions-1000-7e8c9b30)",
              1100: "var(--foundry-global-spacing-dimensions-1100-aca957c8)",
              1150: "var(--foundry-global-spacing-dimensions-1150-f8665e69)",
              1200: "var(--foundry-global-spacing-dimensions-1200-71972197)",
              1400: "var(--foundry-global-spacing-dimensions-1400-8f4cc278)",
              1600: "var(--foundry-global-spacing-dimensions-1600-b5e74cd0)",
              1700: "var(--foundry-global-spacing-dimensions-1700-b22e9e34)",
              1800: "var(--foundry-global-spacing-dimensions-1800-94e4f433)",
              2e3: "var(--foundry-global-spacing-dimensions-2000-d510a4b4)",
              2200: "var(--foundry-global-spacing-dimensions-2200-93c325ca)",
              2350: "var(--foundry-global-spacing-dimensions-2350-3bd02711)",
              2400: "var(--foundry-global-spacing-dimensions-2400-8d3906cf)",
              2500: "var(--foundry-global-spacing-dimensions-2500-4ab359ad)",
              2750: "var(--foundry-global-spacing-dimensions-2750-165b8e80)",
              3e3: "var(--foundry-global-spacing-dimensions-3000-27404208)",
              3150: "var(--foundry-global-spacing-dimensions-3150-c73af8bd)",
              3350: "var(--foundry-global-spacing-dimensions-3350-d07d3335)",
              3500: "var(--foundry-global-spacing-dimensions-3500-832dd3e8)",
              3750: "var(--foundry-global-spacing-dimensions-3750-18293754)",
              4e3: "var(--foundry-global-spacing-dimensions-4000-981888ae)",
              4125: "var(--foundry-global-spacing-dimensions-4125-711bd372)",
              4250: "var(--foundry-global-spacing-dimensions-4250-11e9d696)",
              4500: "var(--foundry-global-spacing-dimensions-4500-2f90e66f)",
              4750: "var(--foundry-global-spacing-dimensions-4750-1ff43e79)",
              5e3: "var(--foundry-global-spacing-dimensions-5000-7c37a31a)",
              5250: "var(--foundry-global-spacing-dimensions-5250-eed14f39)",
              5500: "var(--foundry-global-spacing-dimensions-5500-1e6d6f23)",
              5750: "var(--foundry-global-spacing-dimensions-5750-f63e358c)",
              6e3: "var(--foundry-global-spacing-dimensions-6000-25c8873a)",
              6250: "var(--foundry-global-spacing-dimensions-6250-aabe7f2f)"
            }
          },
          font: {
            family: {
              arial: "var(--foundry-global-font-family-arial-29a7d878)",
              helveticaNowDisplay: "var(--foundry-global-font-family-helvetica-now-display-15e86e06)",
              helveticaNowText: "var(--foundry-global-font-family-helvetica-now-text-2f039cca)",
              consolas: "var(--foundry-global-font-family-consolas-b260a4d8)"
            },
            weight: {
              400: "var(--foundry-global-font-weight-400-c543d620)",
              700: "var(--foundry-global-font-weight-700-4d05ca0a)"
            },
            size: {
              150: "var(--foundry-global-font-size-150-198f06c7)",
              175: "var(--foundry-global-font-size-175-7c044718)",
              200: "var(--foundry-global-font-size-200-9b30a1c2)",
              225: "var(--foundry-global-font-size-225-6b268615)",
              250: "var(--foundry-global-font-size-250-7c909c36)",
              300: "var(--foundry-global-font-size-300-ed2e8eb5)",
              400: "var(--foundry-global-font-size-400-310f384e)",
              500: "var(--foundry-global-font-size-500-ae4c1498)",
              600: "var(--foundry-global-font-size-600-f98b9cf9)",
              700: "var(--foundry-global-font-size-700-e55fff7d)",
              800: "var(--foundry-global-font-size-800-cbeeb437)",
              900: "var(--foundry-global-font-size-900-195dff23)",
              1e3: "var(--foundry-global-font-size-1000-de0d9aba)",
              1100: "var(--foundry-global-font-size-1100-a7f67440)"
            },
            letterSpacing: {
              0: "var(--foundry-global-font-letter-spacing-0-11d3b242)",
              25: "var(--foundry-global-font-letter-spacing-25-e01b7d49)",
              100: "var(--foundry-global-font-letter-spacing-100-823e8792)",
              200: "var(--foundry-global-font-letter-spacing-200-3d4cc27a)",
              250: "var(--foundry-global-font-letter-spacing-250-c0a207ff)",
              neg250: "var(--foundry-global-font-letter-spacing-neg-250-6c4f28af)",
              neg150: "var(--foundry-global-font-letter-spacing-neg-150-d0c75081)",
              neg100: "var(--foundry-global-font-letter-spacing-neg-100-d1dce193)",
              neg75: "var(--foundry-global-font-letter-spacing-neg-75-247e228b)",
              neg50: "var(--foundry-global-font-letter-spacing-neg-50-2f64a6bc)"
            },
            lineHeight: {
              100: "var(--foundry-global-font-line-height-100-d7ba3e93)",
              110: "var(--foundry-global-font-line-height-110-f2a1d21c)",
              120: "var(--foundry-global-font-line-height-120-114ddbcd)",
              130: "var(--foundry-global-font-line-height-130-1468e63f)",
              150: "var(--foundry-global-font-line-height-150-dc282d1f)"
            },
            spacing: {
              400: "var(--foundry-global-font-spacing-400-d05cce10)"
            }
          }
        },
        alias: {
          color: {
            background: {
              twotone: {
                success: "var(--foundry-alias-color-background-twotone-success-aee211b5)",
                information: "var(--foundry-alias-color-background-twotone-information-433f71ca)",
                warning: "var(--foundry-alias-color-background-twotone-warning-1b16c91e)",
                danger: "var(--foundry-alias-color-background-twotone-danger-89bb8777)",
                seafoam: "var(--foundry-alias-color-background-twotone-seafoam-bbb55e0c)"
              },
              bold: {
                layer0: "var(--foundry-alias-color-background-bold-layer-0-f947e8a3)",
                layer1: "var(--foundry-alias-color-background-bold-layer-1-a2bc128b)",
                layer2: "var(--foundry-alias-color-background-bold-layer-2-eddb4873)",
                layer3: "var(--foundry-alias-color-background-bold-layer-3-aaaf37c3)"
              },
              subtle: {
                layer0: "var(--foundry-alias-color-background-subtle-layer-0-3f1d20b0)",
                layer1: "var(--foundry-alias-color-background-subtle-layer-1-74c1dd2f)",
                layer2: "var(--foundry-alias-color-background-subtle-layer-2-b67c0bd1)"
              },
              component: {
                tooltip: "var(--foundry-alias-color-background-component-tooltip-791bcb22)"
              }
            },
            text: {
              standard: "var(--foundry-alias-color-text-standard-2d241861)",
              disabled: "var(--foundry-alias-color-text-disabled-6c1b5f99)",
              subdued: "var(--foundry-alias-color-text-subdued-d5502516)",
              header: "var(--foundry-alias-color-text-header-c0780da4)",
              success: "var(--foundry-alias-color-text-success-5fcd04d6)",
              information: "var(--foundry-alias-color-text-information-5657d70d)",
              warning: "var(--foundry-alias-color-text-warning-c0b6f339)",
              danger: "var(--foundry-alias-color-text-danger-bcdfc5ff)",
              seafoam: "var(--foundry-alias-color-text-seafoam-62ff1b40)"
            },
            icon: {
              standard: "var(--foundry-alias-color-icon-standard-3eef4ce2)",
              disabled: "var(--foundry-alias-color-icon-disabled-34e2f46b)",
              illustration: "var(--foundry-alias-color-icon-illustration-9b2d1c8c)",
              subdued: "var(--foundry-alias-color-icon-subdued-a7a37139)",
              subduedLowestContrast: "var(--foundry-alias-color-icon-subdued-lowest-contrast-6e35947c)",
              information: "var(--foundry-alias-color-icon-information-139f1e42)",
              informationLowerContrast: "var(--foundry-alias-color-icon-information-lower-contrast-bf7ca27d)",
              informationHigherContrast: "var(--foundry-alias-color-icon-information-higher-contrast-1dc79bef)",
              informationLowestContrast: "var(--foundry-alias-color-icon-information-lowest-contrast-c97926f1)",
              informationHighestContrast: "var(--foundry-alias-color-icon-information-highest-contrast-5a450ba5)",
              success: "var(--foundry-alias-color-icon-success-e23133ed)",
              successLowerContrast: "var(--foundry-alias-color-icon-success-lower-contrast-a88e4244)",
              successHigherContrast: "var(--foundry-alias-color-icon-success-higher-contrast-574d0db3)",
              successLowestContrast: "var(--foundry-alias-color-icon-success-lowest-contrast-bbecce8c)",
              successHighestContrast: "var(--foundry-alias-color-icon-success-highest-contrast-1add093c)",
              warning: "var(--foundry-alias-color-icon-warning-72f96436)",
              warningLowerContrast: "var(--foundry-alias-color-icon-warning-lower-contrast-b6e0d50b)",
              warningHigherContrast: "var(--foundry-alias-color-icon-warning-higher-contrast-0bba028d)",
              warningLowestContrast: "var(--foundry-alias-color-icon-warning-lowest-contrast-c396ad20)",
              warningHighestContrast: "var(--foundry-alias-color-icon-warning-highest-contrast-78003698)",
              danger: "var(--foundry-alias-color-icon-danger-615a4836)",
              dangerLowerContrast: "var(--foundry-alias-color-icon-danger-lower-contrast-92eb2f13)",
              dangerHigherContrast: "var(--foundry-alias-color-icon-danger-higher-contrast-c78869be)",
              dangerLowestContrast: "var(--foundry-alias-color-icon-danger-lowest-contrast-af0106b8)",
              dangerHighestContrast: "var(--foundry-alias-color-icon-danger-highest-contrast-ef621d13)",
              seafoam: "var(--foundry-alias-color-icon-seafoam-7c088ef5)",
              seafoamLowerContrast: "var(--foundry-alias-color-icon-seafoam-lower-contrast-ec6e11bf)",
              seafoamHigherContrast: "var(--foundry-alias-color-icon-seafoam-higher-contrast-7245aa5c)",
              seafoamLowestContrast: "var(--foundry-alias-color-icon-seafoam-lowest-contrast-64031f29)",
              seafoamHighestContrast: "var(--foundry-alias-color-icon-seafoam-highest-contrast-4a2ef321)"
            },
            border: {
              decorative: "var(--foundry-alias-color-border-decorative-678f338a)",
              decorativeLowestContrast: "var(--foundry-alias-color-border-decorative-lowest-contrast-f8bbcfca)",
              field: "var(--foundry-alias-color-border-field-d535e421)",
              control: "var(--foundry-alias-color-border-control-192e0629)",
              information: "var(--foundry-alias-color-border-information-b430db7d)",
              informationLowestContrast: "var(--foundry-alias-color-border-information-lowest-contrast-9d4cedd9)",
              informationHighestContrast: "var(--foundry-alias-color-border-information-highest-contrast-d8396f29)",
              success: "var(--foundry-alias-color-border-success-d9400b20)",
              successLowestContrast: "var(--foundry-alias-color-border-success-lowest-contrast-e656d81a)",
              successHighestContrast: "var(--foundry-alias-color-border-success-highest-contrast-4e576195)",
              warning: "var(--foundry-alias-color-border-warning-83f5d462)",
              warningLowestContrast: "var(--foundry-alias-color-border-warning-lowest-contrast-fd52fff8)",
              warningHighestContrast: "var(--foundry-alias-color-border-warning-highest-contrast-6f1f8d51)",
              danger: "var(--foundry-alias-color-border-danger-c58a5d4f)",
              dangerLowestContrast: "var(--foundry-alias-color-border-danger-lowest-contrast-e645825b)",
              dangerHighestContrast: "var(--foundry-alias-color-border-danger-highest-contrast-783d81da)",
              seafoam: "var(--foundry-alias-color-border-seafoam-152722dd)",
              seafoamLowestContrast: "var(--foundry-alias-color-border-seafoam-lowest-contrast-83343f40)",
              seafoamHighestContrast: "var(--foundry-alias-color-border-seafoam-highest-contrast-e1935bc9)",
              disabled: "var(--foundry-alias-color-border-disabled-cacdfb33)",
              focus: "var(--foundry-alias-color-border-focus-e58b07c7)",
              shadow: "var(--foundry-alias-color-border-shadow-9f37e9b9)"
            },
            decorative: {
              information: "var(--foundry-alias-color-decorative-information-6d17b386)",
              informationLowestContrast: "var(--foundry-alias-color-decorative-information-lowest-contrast-a34024fd)",
              informationHighestContrast: "var(--foundry-alias-color-decorative-information-highest-contrast-68ba8e34)",
              success: "var(--foundry-alias-color-decorative-success-e509717f)",
              successLowestContrast: "var(--foundry-alias-color-decorative-success-lowest-contrast-9a2a33f9)",
              successHighestContrast: "var(--foundry-alias-color-decorative-success-highest-contrast-1fe42830)",
              warning: "var(--foundry-alias-color-decorative-warning-5a28cd24)",
              warningLowestContrast: "var(--foundry-alias-color-decorative-warning-lowest-contrast-3c247b72)",
              warningHighestContrast: "var(--foundry-alias-color-decorative-warning-highest-contrast-a50141af)",
              danger: "var(--foundry-alias-color-decorative-danger-e7f85ac4)",
              dangerLowestContrast: "var(--foundry-alias-color-decorative-danger-lowest-contrast-7692d49b)",
              dangerHighestContrast: "var(--foundry-alias-color-decorative-danger-highest-contrast-ace7b335)",
              seafoam: "var(--foundry-alias-color-decorative-seafoam-9f1d83a7)",
              seafoamLowestContrast: "var(--foundry-alias-color-decorative-seafoam-lowest-contrast-7bfe0e03)",
              seafoamHighestContrast: "var(--foundry-alias-color-decorative-seafoam-highest-contrast-194ae5a1)"
            },
            brand: {
              bully: {
                blue: "var(--foundry-alias-color-brand-bully-blue-09f992d6)",
                yellow: "var(--foundry-alias-color-brand-bully-yellow-6124e706)"
              },
              rdr: {
                red: "var(--foundry-alias-color-brand-rdr-red-d730e332)"
              },
              rockstar: {
                gold: "var(--foundry-alias-color-brand-rockstar-gold-28436c1a)"
              }
            }
          },
          font: {
            family: {
              heading: {
                primary: "var(--foundry-alias-font-family-heading-primary-fab3091b)",
                fallback: "var(--foundry-alias-font-family-heading-fallback-197c505b)"
              },
              body: {
                primary: "var(--foundry-alias-font-family-body-primary-a0f2e156)",
                fallback: "var(--foundry-alias-font-family-body-fallback-aa2c93c5)"
              },
              code: {
                primary: "var(--foundry-alias-font-family-code-primary-0731b8b8)",
                fallback: "var(--foundry-alias-font-family-code-fallback-65a5a9e6)"
              }
            },
            letterSpacing: {
              heading: {
                primary: "var(--foundry-alias-font-letter-spacing-heading-primary-4052fb4d)",
                fallback: "var(--foundry-alias-font-letter-spacing-heading-fallback-0c565619)"
              },
              body: {
                primary: "var(--foundry-alias-font-letter-spacing-body-primary-36e0f114)",
                fallback: "var(--foundry-alias-font-letter-spacing-body-fallback-1bae4182)"
              },
              label: {
                primary: "var(--foundry-alias-font-letter-spacing-label-primary-ab7f3c8d)",
                fallback: "var(--foundry-alias-font-letter-spacing-label-fallback-1226b09e)"
              }
            },
            weight: {
              regular: "var(--foundry-alias-font-weight-regular-c2af3245)",
              bold: "var(--foundry-alias-font-weight-bold-751d319e)"
            },
            spacing: {
              paragraph: "var(--foundry-alias-font-spacing-paragraph-cdd6040b)"
            },
            size: {
              heading: {
                display: "var(--foundry-alias-font-size-heading-display-a2892c71)",
                "01": "var(--foundry-alias-font-size-heading-01-1e8a0727)",
                "02": "var(--foundry-alias-font-size-heading-02-0fd2c0d9)",
                "03": "var(--foundry-alias-font-size-heading-03-9a73c535)",
                "04": "var(--foundry-alias-font-size-heading-04-1fdd08c0)",
                "05": "var(--foundry-alias-font-size-heading-05-beb13840)",
                "06": "var(--foundry-alias-font-size-heading-06-40a06748)"
              },
              body: {
                bodyLg: "var(--foundry-alias-font-size-body-body-lg-bec4de18)",
                bodyMd: "var(--foundry-alias-font-size-body-body-md-caf3b782)",
                bodySm: "var(--foundry-alias-font-size-body-body-sm-2a8e6da3)",
                bodyXs: "var(--foundry-alias-font-size-body-body-xs-cf241758)",
                code: "var(--foundry-alias-font-size-body-code-17a5a27f)"
              }
            },
            lineHeight: {
              heading: "var(--foundry-alias-font-line-height-heading-5379287f)",
              body: "var(--foundry-alias-font-line-height-body-3e320cc8)"
            }
          }
        }
      };
      r(22673);
      const t = a => {
        const o = a.match(/^var\((.*)\)$/);
        return o ? o[1] : a
      }
    },
    57461: (a, o, r) => {
      function e(a) {
        var o = function(a, o) {
          if ("object" != typeof a || !a) return a;
          var r = a[Symbol.toPrimitive];
          if (void 0 !== r) {
            var e = r.call(a, o);
            if ("object" != typeof e) return e;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(a)
        }(a, "string");
        return "symbol" == typeof o ? o : String(o)
      }

      function l(a, o) {
        var r = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(a);
          o && (e = e.filter((function(o) {
            return Object.getOwnPropertyDescriptor(a, o).enumerable
          }))), r.push.apply(r, e)
        }
        return r
      }

      function n(a) {
        for (var o = 1; o < arguments.length; o++) {
          var r = null != arguments[o] ? arguments[o] : {};
          o % 2 ? l(Object(r), !0).forEach((function(o) {
            var l, n, t;
            l = a, n = o, t = r[o], (n = e(n)) in l ? Object.defineProperty(l, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : l[n] = t
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(o) {
            Object.defineProperty(a, o, Object.getOwnPropertyDescriptor(r, o))
          }))
        }
        return a
      }

      function t(a, o) {
        var r = {};
        for (var e in a) r[e] = o(a[e], e);
        return r
      }
      r.d(o, {
        no: () => s
      });
      var d = (a, o, r) => {
          for (var e of Object.keys(a)) {
            var l;
            if (a[e] !== (null !== (l = o[e]) && void 0 !== l ? l : r[e])) return !1
          }
          return !0
        },
        c = a => {
          var o = o => {
            var r = a.defaultClassName,
              e = n(n({}, a.defaultVariants), o);
            for (var l in e) {
              var t, c = null !== (t = e[l]) && void 0 !== t ? t : a.defaultVariants[l];
              if (null != c) {
                var s = c;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var f = a.variantClassNames[l][s];
                f && (r += " " + f)
              }
            }
            for (var [i, u] of a.compoundVariants) d(i, e, a.defaultVariants) && (r += " " + u);
            return r
          };
          return o.variants = () => Object.keys(a.variantClassNames), o.classNames = {
            get base() {
              return a.defaultClassName.split(" ")[0]
            },
            get variants() {
              return t(a.variantClassNames, (a => t(a, (a => a.split(" ")[0]))))
            }
          }, o
        },
        s = {
          enabled: {
            background: "var(--foundry_1qqcnua0)",
            border: "var(--foundry_1qqcnua1)",
            text: "var(--foundry_1qqcnua2)",
            outline: "var(--foundry_1qqcnua3)"
          },
          hover: {
            background: "var(--foundry_1qqcnua4)",
            border: "var(--foundry_1qqcnua5)",
            text: "var(--foundry_1qqcnua6)",
            outline: "var(--foundry_1qqcnua7)"
          },
          focus: {
            background: "var(--foundry_1qqcnua8)",
            border: "var(--foundry_1qqcnua9)",
            text: "var(--foundry_1qqcnuaa)",
            outline: "var(--foundry_1qqcnuab)"
          },
          pressed: {
            background: "var(--foundry_1qqcnuac)",
            border: "var(--foundry_1qqcnuad)",
            text: "var(--foundry_1qqcnuae)",
            outline: "var(--foundry_1qqcnuaf)"
          },
          disabled: {
            background: "var(--foundry_1qqcnuag)",
            border: "var(--foundry_1qqcnuah)",
            text: "var(--foundry_1qqcnuai)",
            outline: "var(--foundry_1qqcnuaj)"
          },
          loading: {
            background: "var(--foundry_1qqcnuak)",
            border: "var(--foundry_1qqcnual)",
            text: "var(--foundry_1qqcnuam)",
            outline: "var(--foundry_1qqcnuan)"
          }
        };
      c({
        defaultClassName: "foundry_1qqcnuao",
        variantClassNames: {
          appearance: {
            primary: "foundry_1qqcnuap",
            secondary: "foundry_1qqcnuaq",
            tertiary: "foundry_1qqcnuar",
            ghost: "foundry_1qqcnuas",
            information: "foundry_1qqcnuat",
            danger: "foundry_1qqcnuau",
            accent: "foundry_1qqcnuav"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), c({
        defaultClassName: "foundry_tdsdcda foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdc",
            MD: "foundry_tdsdcdd",
            SM: "foundry_tdsdcde",
            XS: "foundry_tdsdcdf"
          },
          appearance: {
            default: "foundry_tdsdcdg",
            bold: "foundry_tdsdcdh",
            hyperlink: "foundry_tdsdcdi"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), c({
        defaultClassName: "foundry_tdsdcdr foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdt",
            bold: "foundry_tdsdcdu"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), c({
        defaultClassName: "foundry_tdsdcd2 foundry_tdsdcd0",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd4",
            2: "foundry_tdsdcd5",
            3: "foundry_tdsdcd6",
            4: "foundry_tdsdcd7",
            5: "foundry_tdsdcd8",
            6: "foundry_tdsdcd9"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), c({
        defaultClassName: "foundry_tdsdcdj foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdl",
            MD: "foundry_tdsdcdm",
            SM: "foundry_tdsdcdn",
            XS: "foundry_tdsdcdo"
          },
          appearance: {
            default: "foundry_tdsdcdp",
            bold: "foundry_tdsdcdq"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), r(10131)
    },
    97359: (a, o, r) => {
      r.d(o, {
        A: () => A
      });
      var e = r(78322),
        l = r(62229),
        n = "right-scroll-bar-position",
        t = "width-before-scroll-bar";

      function d(a, o) {
        return "function" == typeof a ? a(o) : a && (a.current = o), a
      }
      var c = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
        s = new WeakMap;

      function f(a) {
        return a
      }
      var i = function(a) {
          void 0 === a && (a = {});
          var o = function(a, o) {
            void 0 === o && (o = f);
            var r = [],
              e = !1;
            return {
              read: function() {
                if (e) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return r.length ? r[r.length - 1] : a
              },
              useMedium: function(a) {
                var l = o(a, e);
                return r.push(l),
                  function() {
                    r = r.filter((function(a) {
                      return a !== l
                    }))
                  }
              },
              assignSyncMedium: function(a) {
                for (e = !0; r.length;) {
                  var o = r;
                  r = [], o.forEach(a)
                }
                r = {
                  push: function(o) {
                    return a(o)
                  },
                  filter: function() {
                    return r
                  }
                }
              },
              assignMedium: function(a) {
                e = !0;
                var o = [];
                if (r.length) {
                  var l = r;
                  r = [], l.forEach(a), o = r
                }
                var n = function() {
                    var r = o;
                    o = [], r.forEach(a)
                  },
                  t = function() {
                    return Promise.resolve().then(n)
                  };
                t(), r = {
                  push: function(a) {
                    o.push(a), t()
                  },
                  filter: function(a) {
                    return o = o.filter(a), r
                  }
                }
              }
            }
          }(null);
          return o.options = (0, e.__assign)({
            async: !0,
            ssr: !1
          }, a), o
        }(),
        u = function() {},
        b = l.forwardRef((function(a, o) {
          var r = l.useRef(null),
            n = l.useState({
              onScrollCapture: u,
              onWheelCapture: u,
              onTouchMoveCapture: u
            }),
            t = n[0],
            f = n[1],
            b = a.forwardProps,
            g = a.children,
            v = a.className,
            y = a.removeScrollBar,
            p = a.enabled,
            m = a.shards,
            h = a.sideCar,
            w = a.noIsolation,
            _ = a.inert,
            k = a.allowPinchZoom,
            C = a.as,
            q = void 0 === C ? "div" : C,
            E = a.gapMode,
            S = (0, e.__rest)(a, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            L = h,
            x = function(a, o) {
              var r, e, n, t = (r = o || null, e = function(o) {
                return a.forEach((function(a) {
                  return d(a, o)
                }))
              }, (n = (0, l.useState)((function() {
                return {
                  value: r,
                  callback: e,
                  facade: {
                    get current() {
                      return n.value
                    },
                    set current(a) {
                      var o = n.value;
                      o !== a && (n.value = a, n.callback(a, o))
                    }
                  }
                }
              }))[0]).callback = e, n.facade);
              return c((function() {
                var o = s.get(t);
                if (o) {
                  var r = new Set(o),
                    e = new Set(a),
                    l = t.current;
                  r.forEach((function(a) {
                    e.has(a) || d(a, null)
                  })), e.forEach((function(a) {
                    r.has(a) || d(a, l)
                  }))
                }
                s.set(t, a)
              }), [a]), t
            }([r, o]),
            N = (0, e.__assign)((0, e.__assign)({}, S), t);
          return l.createElement(l.Fragment, null, p && l.createElement(L, {
            sideCar: i,
            removeScrollBar: y,
            shards: m,
            noIsolation: w,
            inert: _,
            setCallbacks: f,
            allowPinchZoom: !!k,
            lockRef: r,
            gapMode: E
          }), b ? l.cloneElement(l.Children.only(g), (0, e.__assign)((0, e.__assign)({}, N), {
            ref: x
          })) : l.createElement(q, (0, e.__assign)({}, N, {
            className: v,
            ref: x
          }), g))
        }));
      b.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, b.classNames = {
        fullWidth: t,
        zeroRight: n
      };
      var g = function(a) {
        var o = a.sideCar,
          r = (0, e.__rest)(a, ["sideCar"]);
        if (!o) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var n = o.read();
        if (!n) throw new Error("Sidecar medium not found");
        return l.createElement(n, (0, e.__assign)({}, r))
      };
      g.isSideCarExport = !0;
      var v = function() {
          var a = 0,
            o = null;
          return {
            add: function(e) {
              var l, n;
              0 == a && (o = function() {
                if (!document) return null;
                var a = document.createElement("style");
                a.type = "text/css";
                var o = r.nc;
                return o && a.setAttribute("nonce", o), a
              }()) && (n = e, (l = o).styleSheet ? l.styleSheet.cssText = n : l.appendChild(document.createTextNode(n)), function(a) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
              }(o)), a++
            },
            remove: function() {
              !--a && o && (o.parentNode && o.parentNode.removeChild(o), o = null)
            }
          }
        },
        y = function() {
          var a, o = (a = v(), function(o, r) {
            l.useEffect((function() {
              return a.add(o),
                function() {
                  a.remove()
                }
            }), [o && r])
          });
          return function(a) {
            var r = a.styles,
              e = a.dynamic;
            return o(r, e), null
          }
        },
        p = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        m = function(a) {
          return parseInt(a || "", 10) || 0
        },
        h = y(),
        w = "data-scroll-locked",
        _ = function(a, o, r, e) {
          var l = a.left,
            d = a.top,
            c = a.right,
            s = a.gap;
          return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(e, ";\n   padding-right: ").concat(s, "px ").concat(e, ";\n  }\n  body[").concat(w, "] {\n    overflow: hidden ").concat(e, ";\n    overscroll-behavior: contain;\n    ").concat([o && "position: relative ".concat(e, ";"), "margin" === r && "\n    padding-left: ".concat(l, "px;\n    padding-top: ").concat(d, "px;\n    padding-right: ").concat(c, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(e, ";\n    "), "padding" === r && "padding-right: ".concat(s, "px ").concat(e, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(n, " {\n    right: ").concat(s, "px ").concat(e, ";\n  }\n  \n  .").concat(t, " {\n    margin-right: ").concat(s, "px ").concat(e, ";\n  }\n  \n  .").concat(n, " .").concat(n, " {\n    right: 0 ").concat(e, ";\n  }\n  \n  .").concat(t, " .").concat(t, " {\n    margin-right: 0 ").concat(e, ";\n  }\n  \n  body[").concat(w, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        k = function() {
          var a = parseInt(document.body.getAttribute(w) || "0", 10);
          return isFinite(a) ? a : 0
        },
        C = function(a) {
          var o = a.noRelative,
            r = a.noImportant,
            e = a.gapMode,
            n = void 0 === e ? "margin" : e;
          l.useEffect((function() {
            return document.body.setAttribute(w, (k() + 1).toString()),
              function() {
                var a = k() - 1;
                a <= 0 ? document.body.removeAttribute(w) : document.body.setAttribute(w, a.toString())
              }
          }), []);
          var t = l.useMemo((function() {
            return function(a) {
              if (void 0 === a && (a = "margin"), "undefined" == typeof window) return p;
              var o = function(a) {
                  var o = window.getComputedStyle(document.body),
                    r = o["padding" === a ? "paddingLeft" : "marginLeft"],
                    e = o["padding" === a ? "paddingTop" : "marginTop"],
                    l = o["padding" === a ? "paddingRight" : "marginRight"];
                  return [m(r), m(e), m(l)]
                }(a),
                r = document.documentElement.clientWidth,
                e = window.innerWidth;
              return {
                left: o[0],
                top: o[1],
                right: o[2],
                gap: Math.max(0, e - r + o[2] - o[0])
              }
            }(n)
          }), [n]);
          return l.createElement(h, {
            styles: _(t, !o, n, r ? "" : "!important")
          })
        },
        q = !1;
      if ("undefined" != typeof window) try {
        var E = Object.defineProperty({}, "passive", {
          get: function() {
            return q = !0, !0
          }
        });
        window.addEventListener("test", E, E), window.removeEventListener("test", E, E)
      } catch (a) {
        q = !1
      }
      var S = !!q && {
          passive: !1
        },
        L = function(a, o) {
          if (!(a instanceof Element)) return !1;
          var r = window.getComputedStyle(a);
          return "hidden" !== r[o] && !(r.overflowY === r.overflowX && ! function(a) {
            return "TEXTAREA" === a.tagName
          }(a) && "visible" === r[o])
        },
        x = function(a, o) {
          var r = o.ownerDocument,
            e = o;
          do {
            if ("undefined" != typeof ShadowRoot && e instanceof ShadowRoot && (e = e.host), N(a, e)) {
              var l = M(a, e);
              if (l[1] > l[2]) return !0
            }
            e = e.parentNode
          } while (e && e !== r.body);
          return !1
        },
        N = function(a, o) {
          return "v" === a ? function(a) {
            return L(a, "overflowY")
          }(o) : function(a) {
            return L(a, "overflowX")
          }(o)
        },
        M = function(a, o) {
          return "v" === a ? [(r = o).scrollTop, r.scrollHeight, r.clientHeight] : function(a) {
            return [a.scrollLeft, a.scrollWidth, a.clientWidth]
          }(o);
          var r
        },
        z = function(a) {
          return "changedTouches" in a ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY] : [0, 0]
        },
        T = function(a) {
          return [a.deltaX, a.deltaY]
        },
        j = function(a) {
          return a && "current" in a ? a.current : a
        },
        H = function(a) {
          return "\n  .block-interactivity-".concat(a, " {pointer-events: none;}\n  .allow-interactivity-").concat(a, " {pointer-events: all;}\n")
        },
        O = 0,
        P = [];

      function R(a) {
        for (var o = null; null !== a;) a instanceof ShadowRoot && (o = a.host, a = a.host), a = a.parentNode;
        return o
      }
      const D = (V = function(a) {
        var o = l.useRef([]),
          r = l.useRef([0, 0]),
          n = l.useRef(),
          t = l.useState(O++)[0],
          d = l.useState(y)[0],
          c = l.useRef(a);
        l.useEffect((function() {
          c.current = a
        }), [a]), l.useEffect((function() {
          if (a.inert) {
            document.body.classList.add("block-interactivity-".concat(t));
            var o = (0, e.__spreadArray)([a.lockRef.current], (a.shards || []).map(j), !0).filter(Boolean);
            return o.forEach((function(a) {
                return a.classList.add("allow-interactivity-".concat(t))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(t)), o.forEach((function(a) {
                  return a.classList.remove("allow-interactivity-".concat(t))
                }))
              }
          }
        }), [a.inert, a.lockRef.current, a.shards]);
        var s = l.useCallback((function(a, o) {
            if ("touches" in a && 2 === a.touches.length || "wheel" === a.type && a.ctrlKey) return !c.current.allowPinchZoom;
            var e, l = z(a),
              t = r.current,
              d = "deltaX" in a ? a.deltaX : t[0] - l[0],
              s = "deltaY" in a ? a.deltaY : t[1] - l[1],
              f = a.target,
              i = Math.abs(d) > Math.abs(s) ? "h" : "v";
            if ("touches" in a && "h" === i && "range" === f.type) return !1;
            var u = x(i, f);
            if (!u) return !0;
            if (u ? e = i : (e = "v" === i ? "h" : "v", u = x(i, f)), !u) return !1;
            if (!n.current && "changedTouches" in a && (d || s) && (n.current = e), !e) return !0;
            var b = n.current || e;
            return function(a, o, r, e) {
              var l = function(a, o) {
                  return "h" === a && "rtl" === o ? -1 : 1
                }(a, window.getComputedStyle(o).direction),
                n = l * e,
                t = r.target,
                d = o.contains(t),
                c = !1,
                s = n > 0,
                f = 0,
                i = 0;
              do {
                var u = M(a, t),
                  b = u[0],
                  g = u[1] - u[2] - l * b;
                (b || g) && N(a, t) && (f += g, i += b), t = t instanceof ShadowRoot ? t.host : t.parentNode
              } while (!d && t !== document.body || d && (o.contains(t) || o === t));
              return (s && (Math.abs(f) < 1 || !1) || !s && (Math.abs(i) < 1 || !1)) && (c = !0), c
            }(b, o, a, "h" === b ? d : s)
          }), []),
          f = l.useCallback((function(a) {
            var r = a;
            if (P.length && P[P.length - 1] === d) {
              var e = "deltaY" in r ? T(r) : z(r),
                l = o.current.filter((function(a) {
                  return a.name === r.type && (a.target === r.target || r.target === a.shadowParent) && (o = a.delta, l = e, o[0] === l[0] && o[1] === l[1]);
                  var o, l
                }))[0];
              if (l && l.should) r.cancelable && r.preventDefault();
              else if (!l) {
                var n = (c.current.shards || []).map(j).filter(Boolean).filter((function(a) {
                  return a.contains(r.target)
                }));
                (n.length > 0 ? s(r, n[0]) : !c.current.noIsolation) && r.cancelable && r.preventDefault()
              }
            }
          }), []),
          i = l.useCallback((function(a, r, e, l) {
            var n = {
              name: a,
              delta: r,
              target: e,
              should: l,
              shadowParent: R(e)
            };
            o.current.push(n), setTimeout((function() {
              o.current = o.current.filter((function(a) {
                return a !== n
              }))
            }), 1)
          }), []),
          u = l.useCallback((function(a) {
            r.current = z(a), n.current = void 0
          }), []),
          b = l.useCallback((function(o) {
            i(o.type, T(o), o.target, s(o, a.lockRef.current))
          }), []),
          g = l.useCallback((function(o) {
            i(o.type, z(o), o.target, s(o, a.lockRef.current))
          }), []);
        l.useEffect((function() {
          return P.push(d), a.setCallbacks({
              onScrollCapture: b,
              onWheelCapture: b,
              onTouchMoveCapture: g
            }), document.addEventListener("wheel", f, S), document.addEventListener("touchmove", f, S), document.addEventListener("touchstart", u, S),
            function() {
              P = P.filter((function(a) {
                return a !== d
              })), document.removeEventListener("wheel", f, S), document.removeEventListener("touchmove", f, S), document.removeEventListener("touchstart", u, S)
            }
        }), []);
        var v = a.removeScrollBar,
          p = a.inert;
        return l.createElement(l.Fragment, null, p ? l.createElement(d, {
          styles: H(t)
        }) : null, v ? l.createElement(C, {
          gapMode: a.gapMode
        }) : null)
      }, i.useMedium(V), g);
      var V, I = l.forwardRef((function(a, o) {
        return l.createElement(b, (0, e.__assign)({}, a, {
          ref: o,
          sideCar: D
        }))
      }));
      I.classNames = b.classNames;
      const A = I
    }
  }
]);