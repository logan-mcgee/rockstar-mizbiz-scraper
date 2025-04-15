! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      u = (new Error).stack;
    u && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[u] = "2639bb56-6a73-47ad-be58-af13c14ede60", n._sentryDebugIdIdentifier = "sentry-dbid-2639bb56-6a73-47ad-be58-af13c14ede60")
  } catch (n) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [3476], {
    67094: n => {
      var u = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        o = /[ -,\.\/:-@\[\]\^`\{-~]/,
        f = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        d = function n(d, e) {
          "single" != (e = function(n, r) {
            if (!n) return r;
            var o = {};
            for (var f in r) o[f] = u.call(n, f) ? n[f] : r[f];
            return o
          }(e, n.options)).quotes && "double" != e.quotes && (e.quotes = "single");
          for (var A = "double" == e.quotes ? '"' : "'", p = e.isIdentifier, b = d.charAt(0), a = "", y = 0, t = d.length; y < t;) {
            var B = d.charAt(y++),
              k = B.charCodeAt(),
              _ = void 0;
            if (k < 32 || k > 126) {
              if (k >= 55296 && k <= 56319 && y < t) {
                var c = d.charCodeAt(y++);
                56320 == (64512 & c) ? k = ((1023 & k) << 10) + (1023 & c) + 65536 : y--
              }
              _ = "\\" + k.toString(16).toUpperCase() + " "
            } else _ = e.escapeEverything ? r.test(B) ? "\\" + B : "\\" + k.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(B) ? "\\" + k.toString(16).toUpperCase() + " " : "\\" == B || !p && ('"' == B && A == B || "'" == B && A == B) || p && o.test(B) ? "\\" + B : B;
            a += _
          }
          return p && (/^-[-\d]/.test(a) ? a = "\\-" + a.slice(1) : /\d/.test(b) && (a = "\\3" + b + " " + a.slice(1))), a = a.replace(f, (function(n, u, r) {
            return u && u.length % 2 ? n : (u || "") + r
          })), !p && e.wrap ? A + a + A : a
        };
      d.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, d.version = "3.0.0", n.exports = d
    },
    19856: (n, u, r) => {
      r.d(u, {
        A: () => A
      });
      var o = r(42587),
        f = r.n(o),
        d = r(15081),
        e = r.n(d)()(f());
      e.push([n.id, ".foundry_nu8bkp1 {\n  --foundry_nu8bkp2: 0px;\n  --foundry_nu8bkp3: 2px;\n  --foundry_nu8bkp4: 4px;\n  --foundry_nu8bkp5: 8px;\n  --foundry_nu8bkp6: 12px;\n  --foundry_nu8bkp7: 16px;\n  --foundry_nu8bkp8: 24px;\n  --foundry_nu8bkp9: 32px;\n  --foundry_nu8bkpa: 9999px;\n  --foundry_nu8bkpb: 1000px;\n  --foundry_nu8bkpc: 0px;\n  --foundry_nu8bkpd: 1px;\n  --foundry_nu8bkpe: 2px;\n  --foundry_nu8bkpf: 3px;\n  --foundry_nu8bkpg: 4px;\n  --foundry_nu8bkph: calc(2px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpi: calc(4px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpj: calc(8px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpk: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpl: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpm: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpn: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpo: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpp: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpq: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpr: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkps: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpt: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpu: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpv: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpw: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpx: calc(96px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpy: calc(112px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpz: calc(128px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp10: calc(2px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp11: calc(4px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp12: calc(8px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp13: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp14: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp15: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp16: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp17: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp18: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp19: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1a: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1b: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1c: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1d: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1e: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1f: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1g: calc(96px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1h: calc(112px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1i: calc(128px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1j: calc(144px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1k: calc(160px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1l: calc(176px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1m: calc(200px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1n: calc(240px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1o: calc(280px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1p: calc(320px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1q: calc(360px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1r: calc(400px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1s: calc(500px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1t: Arial;\n  --foundry_nu8bkp1u: Helvetica Now Display;\n  --foundry_nu8bkp1v: Helvetica Now Text;\n  --foundry_nu8bkp1w: Consolas;\n  --foundry_nu8bkp1x: 400;\n  --foundry_nu8bkp1y: 700;\n  --foundry_nu8bkp1z: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp20: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp21: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp22: calc(18px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp23: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp24: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp25: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp26: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp27: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp28: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp29: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2a: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2b: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2c: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2d: 0%;\n  --foundry_nu8bkp2e: 1%;\n  --foundry_nu8bkp2f: 2.5%;\n  --foundry_nu8bkp2g: -2.5%;\n  --foundry_nu8bkp2h: -1%;\n  --foundry_nu8bkp2i: 130%;\n  --foundry_nu8bkp2j: 150%;\n  --foundry_nu8bkp2k: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2l: Helvetica Now Display;\n  --foundry_nu8bkp2m: Arial;\n  --foundry_nu8bkp2n: Helvetica Now Text;\n  --foundry_nu8bkp2o: Arial;\n  --foundry_nu8bkp2p: Consolas;\n  --foundry_nu8bkp2q: Consolas;\n  --foundry_nu8bkp2r: -2.5%;\n  --foundry_nu8bkp2s: -2.5%;\n  --foundry_nu8bkp2t: -2.5%;\n  --foundry_nu8bkp2u: -2.5%;\n  --foundry_nu8bkp2v: 1%;\n  --foundry_nu8bkp2w: 1%;\n  --foundry_nu8bkp2x: 400;\n  --foundry_nu8bkp2y: 700;\n  --foundry_nu8bkp2z: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp30: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp31: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp32: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp33: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp34: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp35: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp36: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp37: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp38: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp39: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp3a: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp3b: 130%;\n  --foundry_nu8bkp3c: 150%;\n}\n.foundry_nu8bkpaq {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #eaeaea;\n  --foundry_nu8bkp3i: #d8d8d8;\n  --foundry_nu8bkp3j: #b2b2b2;\n  --foundry_nu8bkp3k: #919191;\n  --foundry_nu8bkp3l: #6d6d6d;\n  --foundry_nu8bkp3m: #464646;\n  --foundry_nu8bkp3n: #212121;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #ffffff;\n  --foundry_nu8bkp3q: #ffffff;\n  --foundry_nu8bkp3r: #f5f5f5;\n  --foundry_nu8bkp3s: #e4e4e4;\n  --foundry_nu8bkp3t: #d1d1d1;\n  --foundry_nu8bkp3u: #c0c0c0;\n  --foundry_nu8bkp3v: #9f9f9f;\n  --foundry_nu8bkp3w: #767676;\n  --foundry_nu8bkp3x: #585858;\n  --foundry_nu8bkp3y: #414141;\n  --foundry_nu8bkp3z: #2d2d2d;\n  --foundry_nu8bkp40: #151515;\n  --foundry_nu8bkp41: #fff3f3;\n  --foundry_nu8bkp42: #ffe3e3;\n  --foundry_nu8bkp43: #ffd3d3;\n  --foundry_nu8bkp44: #ffbdbd;\n  --foundry_nu8bkp45: #ffa5a5;\n  --foundry_nu8bkp46: #ff8181;\n  --foundry_nu8bkp47: #ff5c5c;\n  --foundry_nu8bkp48: #e74646;\n  --foundry_nu8bkp49: #c93838;\n  --foundry_nu8bkp4a: #a92d2d;\n  --foundry_nu8bkp4b: #8b2323;\n  --foundry_nu8bkp4c: #6d1c1c;\n  --foundry_nu8bkp4d: #541515;\n  --foundry_nu8bkp4e: #401010;\n  --foundry_nu8bkp4f: #fecccc;\n  --foundry_nu8bkp4g: #feb6b6;\n  --foundry_nu8bkp4h: #fd9d9d;\n  --foundry_nu8bkp4i: #fd7d7d;\n  --foundry_nu8bkp4j: #fc5858;\n  --foundry_nu8bkp4k: #fb1e1e;\n  --foundry_nu8bkp4l: #e10404;\n  --foundry_nu8bkp4m: #c50303;\n  --foundry_nu8bkp4n: #aa0303;\n  --foundry_nu8bkp4o: #920303;\n  --foundry_nu8bkp4p: #7e0202;\n  --foundry_nu8bkp4q: #690202;\n  --foundry_nu8bkp4r: #570202;\n  --foundry_nu8bkp4s: #480101;\n  --foundry_nu8bkp4t: #fff4d4;\n  --foundry_nu8bkp4u: #ffe8a4;\n  --foundry_nu8bkp4v: #ffdb72;\n  --foundry_nu8bkp4w: #ffc539;\n  --foundry_nu8bkp4x: #fcaf17;\n  --foundry_nu8bkp4y: #e19808;\n  --foundry_nu8bkp4z: #ca8602;\n  --foundry_nu8bkp50: #b07400;\n  --foundry_nu8bkp51: #976300;\n  --foundry_nu8bkp52: #7e5200;\n  --foundry_nu8bkp53: #654200;\n  --foundry_nu8bkp54: #503400;\n  --foundry_nu8bkp55: #3c2800;\n  --foundry_nu8bkp56: #2e1e00;\n  --foundry_nu8bkp57: #ffd258;\n  --foundry_nu8bkp58: #ffbd29;\n  --foundry_nu8bkp59: #f4a811;\n  --foundry_nu8bkp5a: #dd9507;\n  --foundry_nu8bkp5b: #c68402;\n  --foundry_nu8bkp5c: #af7400;\n  --foundry_nu8bkp5d: #9a6500;\n  --foundry_nu8bkp5e: #855800;\n  --foundry_nu8bkp5f: #734b00;\n  --foundry_nu8bkp5g: #624000;\n  --foundry_nu8bkp5h: #523600;\n  --foundry_nu8bkp5i: #442c00;\n  --foundry_nu8bkp5j: #372400;\n  --foundry_nu8bkp5k: #2d1d00;\n  --foundry_nu8bkp5l: #e0fbea;\n  --foundry_nu8bkp5m: #bef7d5;\n  --foundry_nu8bkp5n: #93f2b9;\n  --foundry_nu8bkp5o: #5ce693;\n  --foundry_nu8bkp5p: #39d878;\n  --foundry_nu8bkp5q: #20c05f;\n  --foundry_nu8bkp5r: #15aa51;\n  --foundry_nu8bkp5s: #0f9444;\n  --foundry_nu8bkp5t: #0b7f39;\n  --foundry_nu8bkp5u: #08692f;\n  --foundry_nu8bkp5v: #065626;\n  --foundry_nu8bkp5w: #05431e;\n  --foundry_nu8bkp5x: #043317;\n  --foundry_nu8bkp5y: #032712;\n  --foundry_nu8bkp5z: #96eab8;\n  --foundry_nu8bkp60: #64e096;\n  --foundry_nu8bkp61: #2ad16c;\n  --foundry_nu8bkp62: #26bb61;\n  --foundry_nu8bkp63: #21a657;\n  --foundry_nu8bkp64: #1e934c;\n  --foundry_nu8bkp65: #1a8043;\n  --foundry_nu8bkp66: #166f3a;\n  --foundry_nu8bkp67: #135f32;\n  --foundry_nu8bkp68: #10522a;\n  --foundry_nu8bkp69: #0e4424;\n  --foundry_nu8bkp6a: #0b381d;\n  --foundry_nu8bkp6b: #092e18;\n  --foundry_nu8bkp6c: #082513;\n  --foundry_nu8bkp6d: #f1f4f9;\n  --foundry_nu8bkp6e: #e3eaf4;\n  --foundry_nu8bkp6f: #d4dfee;\n  --foundry_nu8bkp6g: #bdcfe6;\n  --foundry_nu8bkp6h: #a9c0de;\n  --foundry_nu8bkp6i: #8ba9d2;\n  --foundry_nu8bkp6j: #7296c8;\n  --foundry_nu8bkp6k: #5882bc;\n  --foundry_nu8bkp6l: #406faf;\n  --foundry_nu8bkp6m: #295b9f;\n  --foundry_nu8bkp6n: #17498b;\n  --foundry_nu8bkp6o: #0c3874;\n  --foundry_nu8bkp6p: #062a5b;\n  --foundry_nu8bkp6q: #032047;\n  --foundry_nu8bkp6r: #ccd9eb;\n  --foundry_nu8bkp6s: #b7cae4;\n  --foundry_nu8bkp6t: #9fb9db;\n  --foundry_nu8bkp6u: #86a6d1;\n  --foundry_nu8bkp6v: #6e94c6;\n  --foundry_nu8bkp6w: #5782bc;\n  --foundry_nu8bkp6x: #4271b0;\n  --foundry_nu8bkp6y: #2f61a4;\n  --foundry_nu8bkp6z: #205396;\n  --foundry_nu8bkp70: #144587;\n  --foundry_nu8bkp71: #0d3a76;\n  --foundry_nu8bkp72: #082f64;\n  --foundry_nu8bkp73: #052654;\n  --foundry_nu8bkp74: #031f45;\n  --foundry_nu8bkp75: #f2f4f6;\n  --foundry_nu8bkp76: #e7ebee;\n  --foundry_nu8bkp77: #d9dfe4;\n  --foundry_nu8bkp78: #c5cfd6;\n  --foundry_nu8bkp79: #b2c0c8;\n  --foundry_nu8bkp7a: #98aab6;\n  --foundry_nu8bkp7b: #8297a5;\n  --foundry_nu8bkp7c: #6b8495;\n  --foundry_nu8bkp7d: #5a717f;\n  --foundry_nu8bkp7e: #4b5e6a;\n  --foundry_nu8bkp7f: #3d4c55;\n  --foundry_nu8bkp7g: #303b43;\n  --foundry_nu8bkp7h: #242d33;\n  --foundry_nu8bkp7i: #1b2226;\n  --foundry_nu8bkp7j: #d6d8da;\n  --foundry_nu8bkp7k: #c6cacc;\n  --foundry_nu8bkp7l: #b3b7ba;\n  --foundry_nu8bkp7m: #9fa5a9;\n  --foundry_nu8bkp7n: #8b9297;\n  --foundry_nu8bkp7o: #798187;\n  --foundry_nu8bkp7p: #697177;\n  --foundry_nu8bkp7q: #596269;\n  --foundry_nu8bkp7r: #4a555b;\n  --foundry_nu8bkp7s: #3e484f;\n  --foundry_nu8bkp7t: #323d43;\n  --foundry_nu8bkp7u: #273239;\n  --foundry_nu8bkp7v: #1f2930;\n  --foundry_nu8bkp7w: #182128;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #96eab8;\n  --foundry_nu8bkp87: #ccd9eb;\n  --foundry_nu8bkp88: #ffd258;\n  --foundry_nu8bkp89: #fecccc;\n  --foundry_nu8bkp8a: #d6d8da;\n  --foundry_nu8bkp8b: #ffffff;\n  --foundry_nu8bkp8c: #f5f5f5;\n  --foundry_nu8bkp8d: #e4e4e4;\n  --foundry_nu8bkp8e: #ffffff;\n  --foundry_nu8bkp8f: #f5f5f5;\n  --foundry_nu8bkp8g: #e4e4e4;\n  --foundry_nu8bkp8h: #ffffff;\n  --foundry_nu8bkp8i: #464646;\n  --foundry_nu8bkp8j: #2d2d2d;\n  --foundry_nu8bkp8k: #767676;\n  --foundry_nu8bkp8l: #585858;\n  --foundry_nu8bkp8m: #151515;\n  --foundry_nu8bkp8n: #135f32;\n  --foundry_nu8bkp8o: #205396;\n  --foundry_nu8bkp8p: #734b00;\n  --foundry_nu8bkp8q: #aa0303;\n  --foundry_nu8bkp8r: #4a555b;\n  --foundry_nu8bkp8s: #2d2d2d;\n  --foundry_nu8bkp8t: #767676;\n  --foundry_nu8bkp8u: #585858;\n  --foundry_nu8bkp8v: #414141;\n  --foundry_nu8bkp8w: #585858;\n  --foundry_nu8bkp8x: #205396;\n  --foundry_nu8bkp8y: #2f61a4;\n  --foundry_nu8bkp8z: #144587;\n  --foundry_nu8bkp90: #4271b0;\n  --foundry_nu8bkp91: #0d3a76;\n  --foundry_nu8bkp92: #135f32;\n  --foundry_nu8bkp93: #166f3a;\n  --foundry_nu8bkp94: #10522a;\n  --foundry_nu8bkp95: #1a8043;\n  --foundry_nu8bkp96: #0e4424;\n  --foundry_nu8bkp97: #734b00;\n  --foundry_nu8bkp98: #855800;\n  --foundry_nu8bkp99: #624000;\n  --foundry_nu8bkp9a: #9a6500;\n  --foundry_nu8bkp9b: #523600;\n  --foundry_nu8bkp9c: #aa0303;\n  --foundry_nu8bkp9d: #c50303;\n  --foundry_nu8bkp9e: #920303;\n  --foundry_nu8bkp9f: #e10404;\n  --foundry_nu8bkp9g: #7e0202;\n  --foundry_nu8bkp9h: #4a555b;\n  --foundry_nu8bkp9i: #596269;\n  --foundry_nu8bkp9j: #3e484f;\n  --foundry_nu8bkp9k: #697177;\n  --foundry_nu8bkp9l: #323d43;\n  --foundry_nu8bkp9m: #c0c0c0;\n  --foundry_nu8bkp9n: #d1d1d1;\n  --foundry_nu8bkp9o: #9f9f9f;\n  --foundry_nu8bkp9p: #585858;\n  --foundry_nu8bkp9q: #4271b0;\n  --foundry_nu8bkp9r: #5782bc;\n  --foundry_nu8bkp9s: #2f61a4;\n  --foundry_nu8bkp9t: #1a8043;\n  --foundry_nu8bkp9u: #1e934c;\n  --foundry_nu8bkp9v: #166f3a;\n  --foundry_nu8bkp9w: #9a6500;\n  --foundry_nu8bkp9x: #af7400;\n  --foundry_nu8bkp9y: #855800;\n  --foundry_nu8bkp9z: #e10404;\n  --foundry_nu8bkpa0: #fb1e1e;\n  --foundry_nu8bkpa1: #c50303;\n  --foundry_nu8bkpa2: #697177;\n  --foundry_nu8bkpa3: #798187;\n  --foundry_nu8bkpa4: #596269;\n  --foundry_nu8bkpa5: #c0c0c0;\n  --foundry_nu8bkpa6: rgba(0, 0, 0, 0);\n  --foundry_nu8bkpa7: #6e94c6;\n  --foundry_nu8bkpa8: #86a6d1;\n  --foundry_nu8bkpa9: #5782bc;\n  --foundry_nu8bkpaa: #21a657;\n  --foundry_nu8bkpab: #26bb61;\n  --foundry_nu8bkpac: #1e934c;\n  --foundry_nu8bkpad: #c68402;\n  --foundry_nu8bkpae: #dd9507;\n  --foundry_nu8bkpaf: #af7400;\n  --foundry_nu8bkpag: #fc5858;\n  --foundry_nu8bkpah: #fd7d7d;\n  --foundry_nu8bkpai: #fb1e1e;\n  --foundry_nu8bkpaj: #8b9297;\n  --foundry_nu8bkpak: #9fa5a9;\n  --foundry_nu8bkpal: #798187;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #fcaf17;\n}\n.foundry_nu8bkpar {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #eaeaea;\n  --foundry_nu8bkp3i: #d8d8d8;\n  --foundry_nu8bkp3j: #b2b2b2;\n  --foundry_nu8bkp3k: #919191;\n  --foundry_nu8bkp3l: #6d6d6d;\n  --foundry_nu8bkp3m: #464646;\n  --foundry_nu8bkp3n: #212121;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #000000;\n  --foundry_nu8bkp3q: #0e0e0e;\n  --foundry_nu8bkp3r: #141414;\n  --foundry_nu8bkp3s: #1a1a1a;\n  --foundry_nu8bkp3t: #222222;\n  --foundry_nu8bkp3u: #3f3f3f;\n  --foundry_nu8bkp3v: #5b5b5b;\n  --foundry_nu8bkp3w: #797979;\n  --foundry_nu8bkp3x: #989898;\n  --foundry_nu8bkp3y: #b3b3b3;\n  --foundry_nu8bkp3z: #cecece;\n  --foundry_nu8bkp40: #ebebeb;\n  --foundry_nu8bkp41: #fff3f3;\n  --foundry_nu8bkp42: #ffe3e3;\n  --foundry_nu8bkp43: #ffd3d3;\n  --foundry_nu8bkp44: #ffbdbd;\n  --foundry_nu8bkp45: #ffa5a5;\n  --foundry_nu8bkp46: #ff8181;\n  --foundry_nu8bkp47: #ff5c5c;\n  --foundry_nu8bkp48: #e74646;\n  --foundry_nu8bkp49: #c93838;\n  --foundry_nu8bkp4a: #a92d2d;\n  --foundry_nu8bkp4b: #8b2323;\n  --foundry_nu8bkp4c: #6d1c1c;\n  --foundry_nu8bkp4d: #541515;\n  --foundry_nu8bkp4e: #401010;\n  --foundry_nu8bkp4f: #4b0808;\n  --foundry_nu8bkp4g: #610b0b;\n  --foundry_nu8bkp4h: #7a0e0e;\n  --foundry_nu8bkp4i: #941111;\n  --foundry_nu8bkp4j: #b01414;\n  --foundry_nu8bkp4k: #cc1717;\n  --foundry_nu8bkp4l: #e72424;\n  --foundry_nu8bkp4m: #eb5050;\n  --foundry_nu8bkp4n: #ef6f6f;\n  --foundry_nu8bkp4o: #f28989;\n  --foundry_nu8bkp4p: #f5a4a4;\n  --foundry_nu8bkp4q: #f7b5b5;\n  --foundry_nu8bkp4r: #f9c5c5;\n  --foundry_nu8bkp4s: #fad3d3;\n  --foundry_nu8bkp4t: #fff4d4;\n  --foundry_nu8bkp4u: #ffe8a4;\n  --foundry_nu8bkp4v: #ffdb72;\n  --foundry_nu8bkp4w: #ffc539;\n  --foundry_nu8bkp4x: #fcaf17;\n  --foundry_nu8bkp4y: #e19808;\n  --foundry_nu8bkp4z: #ca8602;\n  --foundry_nu8bkp50: #b07400;\n  --foundry_nu8bkp51: #976300;\n  --foundry_nu8bkp52: #7e5200;\n  --foundry_nu8bkp53: #654200;\n  --foundry_nu8bkp54: #503400;\n  --foundry_nu8bkp55: #3c2800;\n  --foundry_nu8bkp56: #2e1e00;\n  --foundry_nu8bkp57: #312000;\n  --foundry_nu8bkp58: #402a00;\n  --foundry_nu8bkp59: #533600;\n  --foundry_nu8bkp5a: #654200;\n  --foundry_nu8bkp5b: #794f00;\n  --foundry_nu8bkp5c: #8e5d00;\n  --foundry_nu8bkp5d: #a36b00;\n  --foundry_nu8bkp5e: #b87a00;\n  --foundry_nu8bkp5f: #ce8903;\n  --foundry_nu8bkp5g: #e29808;\n  --foundry_nu8bkp5h: #f7aa13;\n  --foundry_nu8bkp5i: #ffb923;\n  --foundry_nu8bkp5j: #ffcb47;\n  --foundry_nu8bkp5k: #ffd86c;\n  --foundry_nu8bkp5l: #e0fbea;\n  --foundry_nu8bkp5m: #bef7d5;\n  --foundry_nu8bkp5n: #93f2b9;\n  --foundry_nu8bkp5o: #5ce693;\n  --foundry_nu8bkp5p: #39d878;\n  --foundry_nu8bkp5q: #20c05f;\n  --foundry_nu8bkp5r: #15aa51;\n  --foundry_nu8bkp5s: #0f9444;\n  --foundry_nu8bkp5t: #0b7f39;\n  --foundry_nu8bkp5u: #08692f;\n  --foundry_nu8bkp5v: #065626;\n  --foundry_nu8bkp5w: #05431e;\n  --foundry_nu8bkp5x: #043317;\n  --foundry_nu8bkp5y: #032712;\n  --foundry_nu8bkp5z: #082915;\n  --foundry_nu8bkp60: #0b361c;\n  --foundry_nu8bkp61: #0e4524;\n  --foundry_nu8bkp62: #11552c;\n  --foundry_nu8bkp63: #146535;\n  --foundry_nu8bkp64: #18763d;\n  --foundry_nu8bkp65: #1b8847;\n  --foundry_nu8bkp66: #1f9a50;\n  --foundry_nu8bkp67: #23ad5a;\n  --foundry_nu8bkp68: #26bf63;\n  --foundry_nu8bkp69: #2bd46f;\n  --foundry_nu8bkp6a: #58dd8d;\n  --foundry_nu8bkp6b: #84e6ab;\n  --foundry_nu8bkp6c: #a3ecc0;\n  --foundry_nu8bkp6d: #f1f4f9;\n  --foundry_nu8bkp6e: #e3eaf4;\n  --foundry_nu8bkp6f: #d4dfee;\n  --foundry_nu8bkp6g: #bdcfe6;\n  --foundry_nu8bkp6h: #a9c0de;\n  --foundry_nu8bkp6i: #8ba9d2;\n  --foundry_nu8bkp6j: #7296c8;\n  --foundry_nu8bkp6k: #5882bc;\n  --foundry_nu8bkp6l: #406faf;\n  --foundry_nu8bkp6m: #295b9f;\n  --foundry_nu8bkp6n: #17498b;\n  --foundry_nu8bkp6o: #0c3874;\n  --foundry_nu8bkp6p: #062a5b;\n  --foundry_nu8bkp6q: #032047;\n  --foundry_nu8bkp6r: #02234c;\n  --foundry_nu8bkp6s: #052e61;\n  --foundry_nu8bkp6t: #0c3b76;\n  --foundry_nu8bkp6u: #17498a;\n  --foundry_nu8bkp6v: #265899;\n  --foundry_nu8bkp6w: #3868a6;\n  --foundry_nu8bkp6x: #4c78b2;\n  --foundry_nu8bkp6y: #6189bd;\n  --foundry_nu8bkp6z: #7699c7;\n  --foundry_nu8bkp70: #8baad0;\n  --foundry_nu8bkp71: #a4bbda;\n  --foundry_nu8bkp72: #b4c7e0;\n  --foundry_nu8bkp73: #c4d3e7;\n  --foundry_nu8bkp74: #d2ddec;\n  --foundry_nu8bkp75: #f2f4f6;\n  --foundry_nu8bkp76: #e7ebee;\n  --foundry_nu8bkp77: #d9dfe4;\n  --foundry_nu8bkp78: #c5cfd6;\n  --foundry_nu8bkp79: #b2c0c8;\n  --foundry_nu8bkp7a: #98aab6;\n  --foundry_nu8bkp7b: #8297a5;\n  --foundry_nu8bkp7c: #6b8495;\n  --foundry_nu8bkp7d: #5a717f;\n  --foundry_nu8bkp7e: #4b5e6a;\n  --foundry_nu8bkp7f: #3d4c55;\n  --foundry_nu8bkp7g: #303b43;\n  --foundry_nu8bkp7h: #242d33;\n  --foundry_nu8bkp7i: #1b2226;\n  --foundry_nu8bkp7j: #1b252c;\n  --foundry_nu8bkp7k: #253037;\n  --foundry_nu8bkp7l: #323d44;\n  --foundry_nu8bkp7m: #404b52;\n  --foundry_nu8bkp7n: #4f5960;\n  --foundry_nu8bkp7o: #5f686e;\n  --foundry_nu8bkp7p: #6f787d;\n  --foundry_nu8bkp7q: #80888c;\n  --foundry_nu8bkp7r: #92989c;\n  --foundry_nu8bkp7s: #a3a8ac;\n  --foundry_nu8bkp7t: #b6babd;\n  --foundry_nu8bkp7u: #c2c6c8;\n  --foundry_nu8bkp7v: #d0d2d4;\n  --foundry_nu8bkp7w: #dadcde;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #082915;\n  --foundry_nu8bkp87: #02234c;\n  --foundry_nu8bkp88: #312000;\n  --foundry_nu8bkp89: #4b0808;\n  --foundry_nu8bkp8a: #1b252c;\n  --foundry_nu8bkp8b: #000000;\n  --foundry_nu8bkp8c: #141414;\n  --foundry_nu8bkp8d: #222222;\n  --foundry_nu8bkp8e: #3f3f3f;\n  --foundry_nu8bkp8f: #1a1a1a;\n  --foundry_nu8bkp8g: #141414;\n  --foundry_nu8bkp8h: #0e0e0e;\n  --foundry_nu8bkp8i: #212121;\n  --foundry_nu8bkp8j: #cecece;\n  --foundry_nu8bkp8k: #797979;\n  --foundry_nu8bkp8l: #989898;\n  --foundry_nu8bkp8m: #ebebeb;\n  --foundry_nu8bkp8n: #23ad5a;\n  --foundry_nu8bkp8o: #7699c7;\n  --foundry_nu8bkp8p: #ce8903;\n  --foundry_nu8bkp8q: #ef6f6f;\n  --foundry_nu8bkp8r: #92989c;\n  --foundry_nu8bkp8s: #cecece;\n  --foundry_nu8bkp8t: #797979;\n  --foundry_nu8bkp8u: #989898;\n  --foundry_nu8bkp8v: #b3b3b3;\n  --foundry_nu8bkp8w: #989898;\n  --foundry_nu8bkp8x: #7699c7;\n  --foundry_nu8bkp8y: #6189bd;\n  --foundry_nu8bkp8z: #8baad0;\n  --foundry_nu8bkp90: #4c78b2;\n  --foundry_nu8bkp91: #a4bbda;\n  --foundry_nu8bkp92: #23ad5a;\n  --foundry_nu8bkp93: #1f9a50;\n  --foundry_nu8bkp94: #26bf63;\n  --foundry_nu8bkp95: #1b8847;\n  --foundry_nu8bkp96: #2bd46f;\n  --foundry_nu8bkp97: #ce8903;\n  --foundry_nu8bkp98: #b87a00;\n  --foundry_nu8bkp99: #e29808;\n  --foundry_nu8bkp9a: #a36b00;\n  --foundry_nu8bkp9b: #f7aa13;\n  --foundry_nu8bkp9c: #ef6f6f;\n  --foundry_nu8bkp9d: #eb5050;\n  --foundry_nu8bkp9e: #f28989;\n  --foundry_nu8bkp9f: #e72424;\n  --foundry_nu8bkp9g: #f5a4a4;\n  --foundry_nu8bkp9h: #92989c;\n  --foundry_nu8bkp9i: #80888c;\n  --foundry_nu8bkp9j: #a3a8ac;\n  --foundry_nu8bkp9k: #6f787d;\n  --foundry_nu8bkp9l: #b6babd;\n  --foundry_nu8bkp9m: #3f3f3f;\n  --foundry_nu8bkp9n: #222222;\n  --foundry_nu8bkp9o: #5b5b5b;\n  --foundry_nu8bkp9p: #989898;\n  --foundry_nu8bkp9q: #4c78b2;\n  --foundry_nu8bkp9r: #3868a6;\n  --foundry_nu8bkp9s: #6189bd;\n  --foundry_nu8bkp9t: #1b8847;\n  --foundry_nu8bkp9u: #18763d;\n  --foundry_nu8bkp9v: #1f9a50;\n  --foundry_nu8bkp9w: #a36b00;\n  --foundry_nu8bkp9x: #8e5d00;\n  --foundry_nu8bkp9y: #b87a00;\n  --foundry_nu8bkp9z: #e72424;\n  --foundry_nu8bkpa0: #cc1717;\n  --foundry_nu8bkpa1: #eb5050;\n  --foundry_nu8bkpa2: #6f787d;\n  --foundry_nu8bkpa3: #5f686e;\n  --foundry_nu8bkpa4: #80888c;\n  --foundry_nu8bkpa5: #3f3f3f;\n  --foundry_nu8bkpa6: #222222;\n  --foundry_nu8bkpa7: #265899;\n  --foundry_nu8bkpa8: #17498a;\n  --foundry_nu8bkpa9: #3868a6;\n  --foundry_nu8bkpaa: #146535;\n  --foundry_nu8bkpab: #11552c;\n  --foundry_nu8bkpac: #18763d;\n  --foundry_nu8bkpad: #794f00;\n  --foundry_nu8bkpae: #654200;\n  --foundry_nu8bkpaf: #8e5d00;\n  --foundry_nu8bkpag: #b01414;\n  --foundry_nu8bkpah: #941111;\n  --foundry_nu8bkpai: #cc1717;\n  --foundry_nu8bkpaj: #4f5960;\n  --foundry_nu8bkpak: #404b52;\n  --foundry_nu8bkpal: #5f686e;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #fcaf17;\n}\n.foundry_nu8bkpas {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #cdcdcd;\n  --foundry_nu8bkp3i: #adadad;\n  --foundry_nu8bkp3j: #797979;\n  --foundry_nu8bkp3k: #555555;\n  --foundry_nu8bkp3l: #2e2e2e;\n  --foundry_nu8bkp3m: #000000;\n  --foundry_nu8bkp3n: #000000;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #ffffff;\n  --foundry_nu8bkp3q: #ffffff;\n  --foundry_nu8bkp3r: #ffffff;\n  --foundry_nu8bkp3s: #e4e4e4;\n  --foundry_nu8bkp3t: #b5b5b5;\n  --foundry_nu8bkp3u: #979797;\n  --foundry_nu8bkp3v: #6a6a6a;\n  --foundry_nu8bkp3w: #3c3c3c;\n  --foundry_nu8bkp3x: #111111;\n  --foundry_nu8bkp3y: #000000;\n  --foundry_nu8bkp3z: #000000;\n  --foundry_nu8bkp40: #000000;\n  --foundry_nu8bkp41: #ffdddd;\n  --foundry_nu8bkp42: #ffbdbd;\n  --foundry_nu8bkp43: #ff9c9c;\n  --foundry_nu8bkp44: #ff6d6d;\n  --foundry_nu8bkp45: #f04c4c;\n  --foundry_nu8bkp46: #c73737;\n  --foundry_nu8bkp47: #a42b2b;\n  --foundry_nu8bkp48: #802121;\n  --foundry_nu8bkp49: #5a1717;\n  --foundry_nu8bkp4a: #290b0b;\n  --foundry_nu8bkp4b: #000000;\n  --foundry_nu8bkp4c: #000000;\n  --foundry_nu8bkp4d: #000000;\n  --foundry_nu8bkp4e: #000000;\n  --foundry_nu8bkp4f: #feb1b1;\n  --foundry_nu8bkp4g: #fd8181;\n  --foundry_nu8bkp4h: #fc4242;\n  --foundry_nu8bkp4i: #e20404;\n  --foundry_nu8bkp4j: #b90303;\n  --foundry_nu8bkp4k: #940303;\n  --foundry_nu8bkp4l: #710202;\n  --foundry_nu8bkp4m: #4b0101;\n  --foundry_nu8bkp4n: #130000;\n  --foundry_nu8bkp4o: #000000;\n  --foundry_nu8bkp4p: #000000;\n  --foundry_nu8bkp4q: #000000;\n  --foundry_nu8bkp4r: #000000;\n  --foundry_nu8bkp4s: #000000;\n  --foundry_nu8bkp4t: #ffe492;\n  --foundry_nu8bkp4u: #ffc539;\n  --foundry_nu8bkp4v: #f4a811;\n  --foundry_nu8bkp4w: #d48e04;\n  --foundry_nu8bkp4x: #b87a00;\n  --foundry_nu8bkp4y: #966200;\n  --foundry_nu8bkp4z: #7a5000;\n  --foundry_nu8bkp50: #5e3e00;\n  --foundry_nu8bkp51: #412b00;\n  --foundry_nu8bkp52: #1d1300;\n  --foundry_nu8bkp53: #000000;\n  --foundry_nu8bkp54: #000000;\n  --foundry_nu8bkp55: #000000;\n  --foundry_nu8bkp56: #000000;\n  --foundry_nu8bkp57: #ffb720;\n  --foundry_nu8bkp58: #e19808;\n  --foundry_nu8bkp59: #bb7c00;\n  --foundry_nu8bkp5a: #9a6500;\n  --foundry_nu8bkp5b: #7c5200;\n  --foundry_nu8bkp5c: #624000;\n  --foundry_nu8bkp5d: #483000;\n  --foundry_nu8bkp5e: #2e1e00;\n  --foundry_nu8bkp5f: #070400;\n  --foundry_nu8bkp5g: #000000;\n  --foundry_nu8bkp5h: #000000;\n  --foundry_nu8bkp5i: #000000;\n  --foundry_nu8bkp5j: #000000;\n  --foundry_nu8bkp5k: #000000;\n  --foundry_nu8bkp5l: #adf5ca;\n  --foundry_nu8bkp5m: #5ce693;\n  --foundry_nu8bkp5n: #2ed16f;\n  --foundry_nu8bkp5o: #19b357;\n  --foundry_nu8bkp5p: #119c48;\n  --foundry_nu8bkp5q: #0a7e38;\n  --foundry_nu8bkp5r: #07662d;\n  --foundry_nu8bkp5s: #064f23;\n  --foundry_nu8bkp5t: #043719;\n  --foundry_nu8bkp5u: #03190c;\n  --foundry_nu8bkp5v: #000000;\n  --foundry_nu8bkp5w: #000000;\n  --foundry_nu8bkp5x: #000000;\n  --foundry_nu8bkp5y: #000000;\n  --foundry_nu8bkp5z: #57dd8c;\n  --foundry_nu8bkp60: #26be63;\n  --foundry_nu8bkp61: #1f9d51;\n  --foundry_nu8bkp62: #1a8043;\n  --foundry_nu8bkp63: #156836;\n  --foundry_nu8bkp64: #10522b;\n  --foundry_nu8bkp65: #0c3d1f;\n  --foundry_nu8bkp66: #082614;\n  --foundry_nu8bkp67: #010603;\n  --foundry_nu8bkp68: #000000;\n  --foundry_nu8bkp69: #000000;\n  --foundry_nu8bkp6a: #000000;\n  --foundry_nu8bkp6b: #000000;\n  --foundry_nu8bkp6c: #000000;\n  --foundry_nu8bkp6d: #dee6f2;\n  --foundry_nu8bkp6e: #bdcfe6;\n  --foundry_nu8bkp6f: #9fb9db;\n  --foundry_nu8bkp6g: #7c9fcc;\n  --foundry_nu8bkp6h: #6189c0;\n  --foundry_nu8bkp6i: #3e6eae;\n  --foundry_nu8bkp6j: #26589c;\n  --foundry_nu8bkp6k: #134384;\n  --foundry_nu8bkp6l: #072e62;\n  --foundry_nu8bkp6m: #02152e;\n  --foundry_nu8bkp6n: #000000;\n  --foundry_nu8bkp6o: #000000;\n  --foundry_nu8bkp6p: #000000;\n  --foundry_nu8bkp6q: #000000;\n  --foundry_nu8bkp6r: #b2c7e2;\n  --foundry_nu8bkp6s: #8aa9d2;\n  --foundry_nu8bkp6t: #638bc1;\n  --foundry_nu8bkp6u: #4271b0;\n  --foundry_nu8bkp6v: #285a9e;\n  --foundry_nu8bkp6w: #154688;\n  --foundry_nu8bkp6x: #09336c;\n  --foundry_nu8bkp6y: #032047;\n  --foundry_nu8bkp6z: #01050b;\n  --foundry_nu8bkp70: #000000;\n  --foundry_nu8bkp71: #000000;\n  --foundry_nu8bkp72: #000000;\n  --foundry_nu8bkp73: #000000;\n  --foundry_nu8bkp74: #000000;\n  --foundry_nu8bkp75: #e0e6e9;\n  --foundry_nu8bkp76: #c5cfd6;\n  --foundry_nu8bkp77: #aab9c2;\n  --foundry_nu8bkp78: #8b9fac;\n  --foundry_nu8bkp79: #728a9a;\n  --foundry_nu8bkp7a: #5a707e;\n  --foundry_nu8bkp7b: #495b67;\n  --foundry_nu8bkp7c: #39464f;\n  --foundry_nu8bkp7d: #273037;\n  --foundry_nu8bkp7e: #111518;\n  --foundry_nu8bkp7f: #000000;\n  --foundry_nu8bkp7g: #000000;\n  --foundry_nu8bkp7h: #000000;\n  --foundry_nu8bkp7i: #000000;\n  --foundry_nu8bkp7j: #c1c5c8;\n  --foundry_nu8bkp7k: #a1a7ab;\n  --foundry_nu8bkp7l: #838a8f;\n  --foundry_nu8bkp7m: #697177;\n  --foundry_nu8bkp7n: #525c62;\n  --foundry_nu8bkp7o: #3e484f;\n  --foundry_nu8bkp7p: #2b363d;\n  --foundry_nu8bkp7q: #182229;\n  --foundry_nu8bkp7r: #030506;\n  --foundry_nu8bkp7s: #000000;\n  --foundry_nu8bkp7t: #000000;\n  --foundry_nu8bkp7u: #000000;\n  --foundry_nu8bkp7v: #000000;\n  --foundry_nu8bkp7w: #000000;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #57dd8c;\n  --foundry_nu8bkp87: #b2c7e2;\n  --foundry_nu8bkp88: #ffb720;\n  --foundry_nu8bkp89: #feb1b1;\n  --foundry_nu8bkp8a: #c1c5c8;\n  --foundry_nu8bkp8b: #ffffff;\n  --foundry_nu8bkp8c: #ffffff;\n  --foundry_nu8bkp8d: #e4e4e4;\n  --foundry_nu8bkp8e: #ffffff;\n  --foundry_nu8bkp8f: #ffffff;\n  --foundry_nu8bkp8g: #e4e4e4;\n  --foundry_nu8bkp8h: #ffffff;\n  --foundry_nu8bkp8i: #000000;\n  --foundry_nu8bkp8j: #000000;\n  --foundry_nu8bkp8k: #3c3c3c;\n  --foundry_nu8bkp8l: #111111;\n  --foundry_nu8bkp8m: #000000;\n  --foundry_nu8bkp8n: #010603;\n  --foundry_nu8bkp8o: #01050b;\n  --foundry_nu8bkp8p: #070400;\n  --foundry_nu8bkp8q: #130000;\n  --foundry_nu8bkp8r: #030506;\n  --foundry_nu8bkp8s: #000000;\n  --foundry_nu8bkp8t: #3c3c3c;\n  --foundry_nu8bkp8u: #111111;\n  --foundry_nu8bkp8v: #000000;\n  --foundry_nu8bkp8w: #111111;\n  --foundry_nu8bkp8x: #01050b;\n  --foundry_nu8bkp8y: #032047;\n  --foundry_nu8bkp8z: #000000;\n  --foundry_nu8bkp90: #09336c;\n  --foundry_nu8bkp91: #000000;\n  --foundry_nu8bkp92: #010603;\n  --foundry_nu8bkp93: #082614;\n  --foundry_nu8bkp94: #000000;\n  --foundry_nu8bkp95: #0c3d1f;\n  --foundry_nu8bkp96: #000000;\n  --foundry_nu8bkp97: #070400;\n  --foundry_nu8bkp98: #2e1e00;\n  --foundry_nu8bkp99: #000000;\n  --foundry_nu8bkp9a: #483000;\n  --foundry_nu8bkp9b: #000000;\n  --foundry_nu8bkp9c: #130000;\n  --foundry_nu8bkp9d: #4b0101;\n  --foundry_nu8bkp9e: #000000;\n  --foundry_nu8bkp9f: #710202;\n  --foundry_nu8bkp9g: #000000;\n  --foundry_nu8bkp9h: #030506;\n  --foundry_nu8bkp9i: #182229;\n  --foundry_nu8bkp9j: #000000;\n  --foundry_nu8bkp9k: #2b363d;\n  --foundry_nu8bkp9l: #000000;\n  --foundry_nu8bkp9m: #979797;\n  --foundry_nu8bkp9n: #b5b5b5;\n  --foundry_nu8bkp9o: #6a6a6a;\n  --foundry_nu8bkp9p: #111111;\n  --foundry_nu8bkp9q: #09336c;\n  --foundry_nu8bkp9r: #154688;\n  --foundry_nu8bkp9s: #032047;\n  --foundry_nu8bkp9t: #0c3d1f;\n  --foundry_nu8bkp9u: #10522b;\n  --foundry_nu8bkp9v: #082614;\n  --foundry_nu8bkp9w: #483000;\n  --foundry_nu8bkp9x: #624000;\n  --foundry_nu8bkp9y: #2e1e00;\n  --foundry_nu8bkp9z: #710202;\n  --foundry_nu8bkpa0: #940303;\n  --foundry_nu8bkpa1: #4b0101;\n  --foundry_nu8bkpa2: #2b363d;\n  --foundry_nu8bkpa3: #3e484f;\n  --foundry_nu8bkpa4: #182229;\n  --foundry_nu8bkpa5: #979797;\n  --foundry_nu8bkpa6: rgba(0, 0, 0, 0);\n  --foundry_nu8bkpa7: #285a9e;\n  --foundry_nu8bkpa8: #4271b0;\n  --foundry_nu8bkpa9: #154688;\n  --foundry_nu8bkpaa: #156836;\n  --foundry_nu8bkpab: #1a8043;\n  --foundry_nu8bkpac: #10522b;\n  --foundry_nu8bkpad: #7c5200;\n  --foundry_nu8bkpae: #9a6500;\n  --foundry_nu8bkpaf: #624000;\n  --foundry_nu8bkpag: #b90303;\n  --foundry_nu8bkpah: #e20404;\n  --foundry_nu8bkpai: #940303;\n  --foundry_nu8bkpaj: #525c62;\n  --foundry_nu8bkpak: #697177;\n  --foundry_nu8bkpal: #3e484f;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #b87a00;\n}\n.foundry_nu8bkpat {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #cdcdcd;\n  --foundry_nu8bkp3i: #adadad;\n  --foundry_nu8bkp3j: #797979;\n  --foundry_nu8bkp3k: #555555;\n  --foundry_nu8bkp3l: #2e2e2e;\n  --foundry_nu8bkp3m: #000000;\n  --foundry_nu8bkp3n: #000000;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #000000;\n  --foundry_nu8bkp3q: #000000;\n  --foundry_nu8bkp3r: #070707;\n  --foundry_nu8bkp3s: #1a1a1a;\n  --foundry_nu8bkp3t: #2f2f2f;\n  --foundry_nu8bkp3u: #656565;\n  --foundry_nu8bkp3v: #939393;\n  --foundry_nu8bkp3w: #c4c4c4;\n  --foundry_nu8bkp3x: #f5f5f5;\n  --foundry_nu8bkp3y: #ffffff;\n  --foundry_nu8bkp3z: #ffffff;\n  --foundry_nu8bkp40: #ffffff;\n  --foundry_nu8bkp41: #ffdddd;\n  --foundry_nu8bkp42: #ffbdbd;\n  --foundry_nu8bkp43: #ff9c9c;\n  --foundry_nu8bkp44: #ff6d6d;\n  --foundry_nu8bkp45: #f04c4c;\n  --foundry_nu8bkp46: #c73737;\n  --foundry_nu8bkp47: #a42b2b;\n  --foundry_nu8bkp48: #802121;\n  --foundry_nu8bkp49: #5a1717;\n  --foundry_nu8bkp4a: #290b0b;\n  --foundry_nu8bkp4b: #000000;\n  --foundry_nu8bkp4c: #000000;\n  --foundry_nu8bkp4d: #000000;\n  --foundry_nu8bkp4e: #000000;\n  --foundry_nu8bkp4f: #670b0b;\n  --foundry_nu8bkp4g: #911010;\n  --foundry_nu8bkp4h: #bd1515;\n  --foundry_nu8bkp4i: #e62323;\n  --foundry_nu8bkp4j: #ed6060;\n  --foundry_nu8bkp4k: #f28989;\n  --foundry_nu8bkp4l: #f6aeae;\n  --foundry_nu8bkp4m: #fad0d0;\n  --foundry_nu8bkp4n: #fef2f2;\n  --foundry_nu8bkp4o: #ffffff;\n  --foundry_nu8bkp4p: #ffffff;\n  --foundry_nu8bkp4q: #ffffff;\n  --foundry_nu8bkp4r: #ffffff;\n  --foundry_nu8bkp4s: #ffffff;\n  --foundry_nu8bkp4t: #ffe492;\n  --foundry_nu8bkp4u: #ffc539;\n  --foundry_nu8bkp4v: #f4a811;\n  --foundry_nu8bkp4w: #d48e04;\n  --foundry_nu8bkp4x: #b87a00;\n  --foundry_nu8bkp4y: #966200;\n  --foundry_nu8bkp4z: #7a5000;\n  --foundry_nu8bkp50: #5e3e00;\n  --foundry_nu8bkp51: #412b00;\n  --foundry_nu8bkp52: #1d1300;\n  --foundry_nu8bkp53: #000000;\n  --foundry_nu8bkp54: #000000;\n  --foundry_nu8bkp55: #000000;\n  --foundry_nu8bkp56: #000000;\n  --foundry_nu8bkp57: #442d00;\n  --foundry_nu8bkp58: #634100;\n  --foundry_nu8bkp59: #825600;\n  --foundry_nu8bkp5a: #a26b00;\n  --foundry_nu8bkp5b: #c28101;\n  --foundry_nu8bkp5c: #e29808;\n  --foundry_nu8bkp5d: #feb21a;\n  --foundry_nu8bkp5e: #ffd665;\n  --foundry_nu8bkp5f: #fff4d7;\n  --foundry_nu8bkp5g: #ffffff;\n  --foundry_nu8bkp5h: #ffffff;\n  --foundry_nu8bkp5i: #ffffff;\n  --foundry_nu8bkp5j: #ffffff;\n  --foundry_nu8bkp5k: #ffffff;\n  --foundry_nu8bkp5l: #adf5ca;\n  --foundry_nu8bkp5m: #5ce693;\n  --foundry_nu8bkp5n: #2ed16f;\n  --foundry_nu8bkp5o: #19b357;\n  --foundry_nu8bkp5p: #119c48;\n  --foundry_nu8bkp5q: #0a7e38;\n  --foundry_nu8bkp5r: #07662d;\n  --foundry_nu8bkp5s: #064f23;\n  --foundry_nu8bkp5t: #043719;\n  --foundry_nu8bkp5u: #03190c;\n  --foundry_nu8bkp5v: #000000;\n  --foundry_nu8bkp5w: #000000;\n  --foundry_nu8bkp5x: #000000;\n  --foundry_nu8bkp5y: #000000;\n  --foundry_nu8bkp5z: #0c3a1e;\n  --foundry_nu8bkp60: #11522b;\n  --foundry_nu8bkp61: #166d39;\n  --foundry_nu8bkp62: #1b8746;\n  --foundry_nu8bkp63: #21a355;\n  --foundry_nu8bkp64: #26bf63;\n  --foundry_nu8bkp65: #44da80;\n  --foundry_nu8bkp66: #9eebbd;\n  --foundry_nu8bkp67: #e4faec;\n  --foundry_nu8bkp68: #ffffff;\n  --foundry_nu8bkp69: #ffffff;\n  --foundry_nu8bkp6a: #ffffff;\n  --foundry_nu8bkp6b: #ffffff;\n  --foundry_nu8bkp6c: #ffffff;\n  --foundry_nu8bkp6d: #dee6f2;\n  --foundry_nu8bkp6e: #bdcfe6;\n  --foundry_nu8bkp6f: #9fb9db;\n  --foundry_nu8bkp6g: #7c9fcc;\n  --foundry_nu8bkp6h: #6189c0;\n  --foundry_nu8bkp6i: #3e6eae;\n  --foundry_nu8bkp6j: #26589c;\n  --foundry_nu8bkp6k: #134384;\n  --foundry_nu8bkp6l: #072e62;\n  --foundry_nu8bkp6m: #02152e;\n  --foundry_nu8bkp6n: #000000;\n  --foundry_nu8bkp6o: #000000;\n  --foundry_nu8bkp6p: #000000;\n  --foundry_nu8bkp6q: #000000;\n  --foundry_nu8bkp6r: #073065;\n  --foundry_nu8bkp6s: #154787;\n  --foundry_nu8bkp6t: #2e609f;\n  --foundry_nu8bkp6u: #4b78b2;\n  --foundry_nu8bkp6v: #6a91c1;\n  --foundry_nu8bkp6w: #8ba9d0;\n  --foundry_nu8bkp6x: #adc2de;\n  --foundry_nu8bkp6y: #cfdbeb;\n  --foundry_nu8bkp6z: #f1f5f9;\n  --foundry_nu8bkp70: #ffffff;\n  --foundry_nu8bkp71: #ffffff;\n  --foundry_nu8bkp72: #ffffff;\n  --foundry_nu8bkp73: #ffffff;\n  --foundry_nu8bkp74: #ffffff;\n  --foundry_nu8bkp75: #e0e6e9;\n  --foundry_nu8bkp76: #c5cfd6;\n  --foundry_nu8bkp77: #aab9c2;\n  --foundry_nu8bkp78: #8b9fac;\n  --foundry_nu8bkp79: #728a9a;\n  --foundry_nu8bkp7a: #5a707e;\n  --foundry_nu8bkp7b: #495b67;\n  --foundry_nu8bkp7c: #39464f;\n  --foundry_nu8bkp7d: #273037;\n  --foundry_nu8bkp7e: #111518;\n  --foundry_nu8bkp7f: #000000;\n  --foundry_nu8bkp7g: #000000;\n  --foundry_nu8bkp7h: #000000;\n  --foundry_nu8bkp7i: #000000;\n  --foundry_nu8bkp7j: #28333a;\n  --foundry_nu8bkp7k: #3e4950;\n  --foundry_nu8bkp7l: #576067;\n  --foundry_nu8bkp7m: #6f777d;\n  --foundry_nu8bkp7n: #888f94;\n  --foundry_nu8bkp7o: #a2a8ab;\n  --foundry_nu8bkp7p: #bdc1c4;\n  --foundry_nu8bkp7q: #d8dadc;\n  --foundry_nu8bkp7r: #f4f4f5;\n  --foundry_nu8bkp7s: #ffffff;\n  --foundry_nu8bkp7t: #ffffff;\n  --foundry_nu8bkp7u: #ffffff;\n  --foundry_nu8bkp7v: #ffffff;\n  --foundry_nu8bkp7w: #ffffff;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #0c3a1e;\n  --foundry_nu8bkp87: #073065;\n  --foundry_nu8bkp88: #442d00;\n  --foundry_nu8bkp89: #670b0b;\n  --foundry_nu8bkp8a: #28333a;\n  --foundry_nu8bkp8b: #000000;\n  --foundry_nu8bkp8c: #070707;\n  --foundry_nu8bkp8d: #2f2f2f;\n  --foundry_nu8bkp8e: #656565;\n  --foundry_nu8bkp8f: #1a1a1a;\n  --foundry_nu8bkp8g: #070707;\n  --foundry_nu8bkp8h: #000000;\n  --foundry_nu8bkp8i: #000000;\n  --foundry_nu8bkp8j: #ffffff;\n  --foundry_nu8bkp8k: #c4c4c4;\n  --foundry_nu8bkp8l: #f5f5f5;\n  --foundry_nu8bkp8m: #ffffff;\n  --foundry_nu8bkp8n: #e4faec;\n  --foundry_nu8bkp8o: #f1f5f9;\n  --foundry_nu8bkp8p: #fff4d7;\n  --foundry_nu8bkp8q: #fef2f2;\n  --foundry_nu8bkp8r: #f4f4f5;\n  --foundry_nu8bkp8s: #ffffff;\n  --foundry_nu8bkp8t: #c4c4c4;\n  --foundry_nu8bkp8u: #f5f5f5;\n  --foundry_nu8bkp8v: #ffffff;\n  --foundry_nu8bkp8w: #f5f5f5;\n  --foundry_nu8bkp8x: #f1f5f9;\n  --foundry_nu8bkp8y: #cfdbeb;\n  --foundry_nu8bkp8z: #ffffff;\n  --foundry_nu8bkp90: #adc2de;\n  --foundry_nu8bkp91: #ffffff;\n  --foundry_nu8bkp92: #e4faec;\n  --foundry_nu8bkp93: #9eebbd;\n  --foundry_nu8bkp94: #ffffff;\n  --foundry_nu8bkp95: #44da80;\n  --foundry_nu8bkp96: #ffffff;\n  --foundry_nu8bkp97: #fff4d7;\n  --foundry_nu8bkp98: #ffd665;\n  --foundry_nu8bkp99: #ffffff;\n  --foundry_nu8bkp9a: #feb21a;\n  --foundry_nu8bkp9b: #ffffff;\n  --foundry_nu8bkp9c: #fef2f2;\n  --foundry_nu8bkp9d: #fad0d0;\n  --foundry_nu8bkp9e: #ffffff;\n  --foundry_nu8bkp9f: #f6aeae;\n  --foundry_nu8bkp9g: #ffffff;\n  --foundry_nu8bkp9h: #f4f4f5;\n  --foundry_nu8bkp9i: #d8dadc;\n  --foundry_nu8bkp9j: #ffffff;\n  --foundry_nu8bkp9k: #bdc1c4;\n  --foundry_nu8bkp9l: #ffffff;\n  --foundry_nu8bkp9m: #656565;\n  --foundry_nu8bkp9n: #2f2f2f;\n  --foundry_nu8bkp9o: #939393;\n  --foundry_nu8bkp9p: #f5f5f5;\n  --foundry_nu8bkp9q: #adc2de;\n  --foundry_nu8bkp9r: #8ba9d0;\n  --foundry_nu8bkp9s: #cfdbeb;\n  --foundry_nu8bkp9t: #44da80;\n  --foundry_nu8bkp9u: #26bf63;\n  --foundry_nu8bkp9v: #9eebbd;\n  --foundry_nu8bkp9w: #feb21a;\n  --foundry_nu8bkp9x: #e29808;\n  --foundry_nu8bkp9y: #ffd665;\n  --foundry_nu8bkp9z: #f6aeae;\n  --foundry_nu8bkpa0: #f28989;\n  --foundry_nu8bkpa1: #fad0d0;\n  --foundry_nu8bkpa2: #bdc1c4;\n  --foundry_nu8bkpa3: #a2a8ab;\n  --foundry_nu8bkpa4: #d8dadc;\n  --foundry_nu8bkpa5: #656565;\n  --foundry_nu8bkpa6: #2f2f2f;\n  --foundry_nu8bkpa7: #6a91c1;\n  --foundry_nu8bkpa8: #4b78b2;\n  --foundry_nu8bkpa9: #8ba9d0;\n  --foundry_nu8bkpaa: #21a355;\n  --foundry_nu8bkpab: #1b8746;\n  --foundry_nu8bkpac: #26bf63;\n  --foundry_nu8bkpad: #c28101;\n  --foundry_nu8bkpae: #a26b00;\n  --foundry_nu8bkpaf: #e29808;\n  --foundry_nu8bkpag: #ed6060;\n  --foundry_nu8bkpah: #e62323;\n  --foundry_nu8bkpai: #f28989;\n  --foundry_nu8bkpaj: #888f94;\n  --foundry_nu8bkpak: #6f777d;\n  --foundry_nu8bkpal: #a2a8ab;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #b87a00;\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry-int/tokens/dist/client/tokens/tokens.css"],
        names: [],
        mappings: "AAAA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,qDAAqD;EACrD,qDAAqD;EACrD,qDAAqD;EACrD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,uDAAuD;EACvD,uDAAuD;EACvD,sDAAsD;EACtD,sDAAsD;EACtD,sDAAsD;EACtD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,yBAAyB;EACzB,yCAAyC;EACzC,sCAAsC;EACtC,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,sBAAsB;EACtB,sBAAsB;EACtB,wBAAwB;EACxB,yBAAyB;EACzB,uBAAuB;EACvB,wBAAwB;EACxB,wBAAwB;EACxB,uDAAuD;EACvD,yCAAyC;EACzC,yBAAyB;EACzB,sCAAsC;EACtC,yBAAyB;EACzB,4BAA4B;EAC5B,4BAA4B;EAC5B,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,uDAAuD;EACvD,wBAAwB;EACxB,wBAAwB;AAC1B;AACA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,oCAAoC;EACpC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;AAC7B;AACA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;AAC7B;AACA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,oCAAoC;EACpC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;AAC7B;AACA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,uCAAuC;EACvC,sCAAsC;EACtC,sCAAsC;EACtC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;AAC7B",
        sourcesContent: [".foundry_nu8bkp1 {\n  --foundry_nu8bkp2: 0px;\n  --foundry_nu8bkp3: 2px;\n  --foundry_nu8bkp4: 4px;\n  --foundry_nu8bkp5: 8px;\n  --foundry_nu8bkp6: 12px;\n  --foundry_nu8bkp7: 16px;\n  --foundry_nu8bkp8: 24px;\n  --foundry_nu8bkp9: 32px;\n  --foundry_nu8bkpa: 9999px;\n  --foundry_nu8bkpb: 1000px;\n  --foundry_nu8bkpc: 0px;\n  --foundry_nu8bkpd: 1px;\n  --foundry_nu8bkpe: 2px;\n  --foundry_nu8bkpf: 3px;\n  --foundry_nu8bkpg: 4px;\n  --foundry_nu8bkph: calc(2px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpi: calc(4px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpj: calc(8px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpk: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpl: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpm: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpn: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpo: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpp: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpq: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpr: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkps: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpt: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpu: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpv: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpw: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpx: calc(96px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpy: calc(112px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkpz: calc(128px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp10: calc(2px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp11: calc(4px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp12: calc(8px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp13: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp14: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp15: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp16: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp17: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp18: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp19: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1a: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1b: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1c: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1d: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1e: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1f: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1g: calc(96px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1h: calc(112px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1i: calc(128px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1j: calc(144px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1k: calc(160px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1l: calc(176px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1m: calc(200px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1n: calc(240px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1o: calc(280px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1p: calc(320px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1q: calc(360px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1r: calc(400px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1s: calc(500px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp1t: Arial;\n  --foundry_nu8bkp1u: Helvetica Now Display;\n  --foundry_nu8bkp1v: Helvetica Now Text;\n  --foundry_nu8bkp1w: Consolas;\n  --foundry_nu8bkp1x: 400;\n  --foundry_nu8bkp1y: 700;\n  --foundry_nu8bkp1z: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp20: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp21: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp22: calc(18px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp23: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp24: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp25: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp26: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp27: calc(48px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp28: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp29: calc(64px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2a: calc(72px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2b: calc(80px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2c: calc(88px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2d: 0%;\n  --foundry_nu8bkp2e: 1%;\n  --foundry_nu8bkp2f: 2.5%;\n  --foundry_nu8bkp2g: -2.5%;\n  --foundry_nu8bkp2h: -1%;\n  --foundry_nu8bkp2i: 130%;\n  --foundry_nu8bkp2j: 150%;\n  --foundry_nu8bkp2k: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp2l: Helvetica Now Display;\n  --foundry_nu8bkp2m: Arial;\n  --foundry_nu8bkp2n: Helvetica Now Text;\n  --foundry_nu8bkp2o: Arial;\n  --foundry_nu8bkp2p: Consolas;\n  --foundry_nu8bkp2q: Consolas;\n  --foundry_nu8bkp2r: -2.5%;\n  --foundry_nu8bkp2s: -2.5%;\n  --foundry_nu8bkp2t: -2.5%;\n  --foundry_nu8bkp2u: -2.5%;\n  --foundry_nu8bkp2v: 1%;\n  --foundry_nu8bkp2w: 1%;\n  --foundry_nu8bkp2x: 400;\n  --foundry_nu8bkp2y: 700;\n  --foundry_nu8bkp2z: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp30: calc(56px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp31: calc(40px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp32: calc(32px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp33: calc(24px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp34: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp35: calc(20px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp36: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp37: calc(14px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp38: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp39: calc(12px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp3a: calc(16px * var(--foundry_nu8bkp0));\n  --foundry_nu8bkp3b: 130%;\n  --foundry_nu8bkp3c: 150%;\n}\n.foundry_nu8bkpaq {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #eaeaea;\n  --foundry_nu8bkp3i: #d8d8d8;\n  --foundry_nu8bkp3j: #b2b2b2;\n  --foundry_nu8bkp3k: #919191;\n  --foundry_nu8bkp3l: #6d6d6d;\n  --foundry_nu8bkp3m: #464646;\n  --foundry_nu8bkp3n: #212121;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #ffffff;\n  --foundry_nu8bkp3q: #ffffff;\n  --foundry_nu8bkp3r: #f5f5f5;\n  --foundry_nu8bkp3s: #e4e4e4;\n  --foundry_nu8bkp3t: #d1d1d1;\n  --foundry_nu8bkp3u: #c0c0c0;\n  --foundry_nu8bkp3v: #9f9f9f;\n  --foundry_nu8bkp3w: #767676;\n  --foundry_nu8bkp3x: #585858;\n  --foundry_nu8bkp3y: #414141;\n  --foundry_nu8bkp3z: #2d2d2d;\n  --foundry_nu8bkp40: #151515;\n  --foundry_nu8bkp41: #fff3f3;\n  --foundry_nu8bkp42: #ffe3e3;\n  --foundry_nu8bkp43: #ffd3d3;\n  --foundry_nu8bkp44: #ffbdbd;\n  --foundry_nu8bkp45: #ffa5a5;\n  --foundry_nu8bkp46: #ff8181;\n  --foundry_nu8bkp47: #ff5c5c;\n  --foundry_nu8bkp48: #e74646;\n  --foundry_nu8bkp49: #c93838;\n  --foundry_nu8bkp4a: #a92d2d;\n  --foundry_nu8bkp4b: #8b2323;\n  --foundry_nu8bkp4c: #6d1c1c;\n  --foundry_nu8bkp4d: #541515;\n  --foundry_nu8bkp4e: #401010;\n  --foundry_nu8bkp4f: #fecccc;\n  --foundry_nu8bkp4g: #feb6b6;\n  --foundry_nu8bkp4h: #fd9d9d;\n  --foundry_nu8bkp4i: #fd7d7d;\n  --foundry_nu8bkp4j: #fc5858;\n  --foundry_nu8bkp4k: #fb1e1e;\n  --foundry_nu8bkp4l: #e10404;\n  --foundry_nu8bkp4m: #c50303;\n  --foundry_nu8bkp4n: #aa0303;\n  --foundry_nu8bkp4o: #920303;\n  --foundry_nu8bkp4p: #7e0202;\n  --foundry_nu8bkp4q: #690202;\n  --foundry_nu8bkp4r: #570202;\n  --foundry_nu8bkp4s: #480101;\n  --foundry_nu8bkp4t: #fff4d4;\n  --foundry_nu8bkp4u: #ffe8a4;\n  --foundry_nu8bkp4v: #ffdb72;\n  --foundry_nu8bkp4w: #ffc539;\n  --foundry_nu8bkp4x: #fcaf17;\n  --foundry_nu8bkp4y: #e19808;\n  --foundry_nu8bkp4z: #ca8602;\n  --foundry_nu8bkp50: #b07400;\n  --foundry_nu8bkp51: #976300;\n  --foundry_nu8bkp52: #7e5200;\n  --foundry_nu8bkp53: #654200;\n  --foundry_nu8bkp54: #503400;\n  --foundry_nu8bkp55: #3c2800;\n  --foundry_nu8bkp56: #2e1e00;\n  --foundry_nu8bkp57: #ffd258;\n  --foundry_nu8bkp58: #ffbd29;\n  --foundry_nu8bkp59: #f4a811;\n  --foundry_nu8bkp5a: #dd9507;\n  --foundry_nu8bkp5b: #c68402;\n  --foundry_nu8bkp5c: #af7400;\n  --foundry_nu8bkp5d: #9a6500;\n  --foundry_nu8bkp5e: #855800;\n  --foundry_nu8bkp5f: #734b00;\n  --foundry_nu8bkp5g: #624000;\n  --foundry_nu8bkp5h: #523600;\n  --foundry_nu8bkp5i: #442c00;\n  --foundry_nu8bkp5j: #372400;\n  --foundry_nu8bkp5k: #2d1d00;\n  --foundry_nu8bkp5l: #e0fbea;\n  --foundry_nu8bkp5m: #bef7d5;\n  --foundry_nu8bkp5n: #93f2b9;\n  --foundry_nu8bkp5o: #5ce693;\n  --foundry_nu8bkp5p: #39d878;\n  --foundry_nu8bkp5q: #20c05f;\n  --foundry_nu8bkp5r: #15aa51;\n  --foundry_nu8bkp5s: #0f9444;\n  --foundry_nu8bkp5t: #0b7f39;\n  --foundry_nu8bkp5u: #08692f;\n  --foundry_nu8bkp5v: #065626;\n  --foundry_nu8bkp5w: #05431e;\n  --foundry_nu8bkp5x: #043317;\n  --foundry_nu8bkp5y: #032712;\n  --foundry_nu8bkp5z: #96eab8;\n  --foundry_nu8bkp60: #64e096;\n  --foundry_nu8bkp61: #2ad16c;\n  --foundry_nu8bkp62: #26bb61;\n  --foundry_nu8bkp63: #21a657;\n  --foundry_nu8bkp64: #1e934c;\n  --foundry_nu8bkp65: #1a8043;\n  --foundry_nu8bkp66: #166f3a;\n  --foundry_nu8bkp67: #135f32;\n  --foundry_nu8bkp68: #10522a;\n  --foundry_nu8bkp69: #0e4424;\n  --foundry_nu8bkp6a: #0b381d;\n  --foundry_nu8bkp6b: #092e18;\n  --foundry_nu8bkp6c: #082513;\n  --foundry_nu8bkp6d: #f1f4f9;\n  --foundry_nu8bkp6e: #e3eaf4;\n  --foundry_nu8bkp6f: #d4dfee;\n  --foundry_nu8bkp6g: #bdcfe6;\n  --foundry_nu8bkp6h: #a9c0de;\n  --foundry_nu8bkp6i: #8ba9d2;\n  --foundry_nu8bkp6j: #7296c8;\n  --foundry_nu8bkp6k: #5882bc;\n  --foundry_nu8bkp6l: #406faf;\n  --foundry_nu8bkp6m: #295b9f;\n  --foundry_nu8bkp6n: #17498b;\n  --foundry_nu8bkp6o: #0c3874;\n  --foundry_nu8bkp6p: #062a5b;\n  --foundry_nu8bkp6q: #032047;\n  --foundry_nu8bkp6r: #ccd9eb;\n  --foundry_nu8bkp6s: #b7cae4;\n  --foundry_nu8bkp6t: #9fb9db;\n  --foundry_nu8bkp6u: #86a6d1;\n  --foundry_nu8bkp6v: #6e94c6;\n  --foundry_nu8bkp6w: #5782bc;\n  --foundry_nu8bkp6x: #4271b0;\n  --foundry_nu8bkp6y: #2f61a4;\n  --foundry_nu8bkp6z: #205396;\n  --foundry_nu8bkp70: #144587;\n  --foundry_nu8bkp71: #0d3a76;\n  --foundry_nu8bkp72: #082f64;\n  --foundry_nu8bkp73: #052654;\n  --foundry_nu8bkp74: #031f45;\n  --foundry_nu8bkp75: #f2f4f6;\n  --foundry_nu8bkp76: #e7ebee;\n  --foundry_nu8bkp77: #d9dfe4;\n  --foundry_nu8bkp78: #c5cfd6;\n  --foundry_nu8bkp79: #b2c0c8;\n  --foundry_nu8bkp7a: #98aab6;\n  --foundry_nu8bkp7b: #8297a5;\n  --foundry_nu8bkp7c: #6b8495;\n  --foundry_nu8bkp7d: #5a717f;\n  --foundry_nu8bkp7e: #4b5e6a;\n  --foundry_nu8bkp7f: #3d4c55;\n  --foundry_nu8bkp7g: #303b43;\n  --foundry_nu8bkp7h: #242d33;\n  --foundry_nu8bkp7i: #1b2226;\n  --foundry_nu8bkp7j: #d6d8da;\n  --foundry_nu8bkp7k: #c6cacc;\n  --foundry_nu8bkp7l: #b3b7ba;\n  --foundry_nu8bkp7m: #9fa5a9;\n  --foundry_nu8bkp7n: #8b9297;\n  --foundry_nu8bkp7o: #798187;\n  --foundry_nu8bkp7p: #697177;\n  --foundry_nu8bkp7q: #596269;\n  --foundry_nu8bkp7r: #4a555b;\n  --foundry_nu8bkp7s: #3e484f;\n  --foundry_nu8bkp7t: #323d43;\n  --foundry_nu8bkp7u: #273239;\n  --foundry_nu8bkp7v: #1f2930;\n  --foundry_nu8bkp7w: #182128;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #96eab8;\n  --foundry_nu8bkp87: #ccd9eb;\n  --foundry_nu8bkp88: #ffd258;\n  --foundry_nu8bkp89: #fecccc;\n  --foundry_nu8bkp8a: #d6d8da;\n  --foundry_nu8bkp8b: #ffffff;\n  --foundry_nu8bkp8c: #f5f5f5;\n  --foundry_nu8bkp8d: #e4e4e4;\n  --foundry_nu8bkp8e: #ffffff;\n  --foundry_nu8bkp8f: #f5f5f5;\n  --foundry_nu8bkp8g: #e4e4e4;\n  --foundry_nu8bkp8h: #ffffff;\n  --foundry_nu8bkp8i: #464646;\n  --foundry_nu8bkp8j: #2d2d2d;\n  --foundry_nu8bkp8k: #767676;\n  --foundry_nu8bkp8l: #585858;\n  --foundry_nu8bkp8m: #151515;\n  --foundry_nu8bkp8n: #135f32;\n  --foundry_nu8bkp8o: #205396;\n  --foundry_nu8bkp8p: #734b00;\n  --foundry_nu8bkp8q: #aa0303;\n  --foundry_nu8bkp8r: #4a555b;\n  --foundry_nu8bkp8s: #2d2d2d;\n  --foundry_nu8bkp8t: #767676;\n  --foundry_nu8bkp8u: #585858;\n  --foundry_nu8bkp8v: #414141;\n  --foundry_nu8bkp8w: #585858;\n  --foundry_nu8bkp8x: #205396;\n  --foundry_nu8bkp8y: #2f61a4;\n  --foundry_nu8bkp8z: #144587;\n  --foundry_nu8bkp90: #4271b0;\n  --foundry_nu8bkp91: #0d3a76;\n  --foundry_nu8bkp92: #135f32;\n  --foundry_nu8bkp93: #166f3a;\n  --foundry_nu8bkp94: #10522a;\n  --foundry_nu8bkp95: #1a8043;\n  --foundry_nu8bkp96: #0e4424;\n  --foundry_nu8bkp97: #734b00;\n  --foundry_nu8bkp98: #855800;\n  --foundry_nu8bkp99: #624000;\n  --foundry_nu8bkp9a: #9a6500;\n  --foundry_nu8bkp9b: #523600;\n  --foundry_nu8bkp9c: #aa0303;\n  --foundry_nu8bkp9d: #c50303;\n  --foundry_nu8bkp9e: #920303;\n  --foundry_nu8bkp9f: #e10404;\n  --foundry_nu8bkp9g: #7e0202;\n  --foundry_nu8bkp9h: #4a555b;\n  --foundry_nu8bkp9i: #596269;\n  --foundry_nu8bkp9j: #3e484f;\n  --foundry_nu8bkp9k: #697177;\n  --foundry_nu8bkp9l: #323d43;\n  --foundry_nu8bkp9m: #c0c0c0;\n  --foundry_nu8bkp9n: #d1d1d1;\n  --foundry_nu8bkp9o: #9f9f9f;\n  --foundry_nu8bkp9p: #585858;\n  --foundry_nu8bkp9q: #4271b0;\n  --foundry_nu8bkp9r: #5782bc;\n  --foundry_nu8bkp9s: #2f61a4;\n  --foundry_nu8bkp9t: #1a8043;\n  --foundry_nu8bkp9u: #1e934c;\n  --foundry_nu8bkp9v: #166f3a;\n  --foundry_nu8bkp9w: #9a6500;\n  --foundry_nu8bkp9x: #af7400;\n  --foundry_nu8bkp9y: #855800;\n  --foundry_nu8bkp9z: #e10404;\n  --foundry_nu8bkpa0: #fb1e1e;\n  --foundry_nu8bkpa1: #c50303;\n  --foundry_nu8bkpa2: #697177;\n  --foundry_nu8bkpa3: #798187;\n  --foundry_nu8bkpa4: #596269;\n  --foundry_nu8bkpa5: #c0c0c0;\n  --foundry_nu8bkpa6: rgba(0, 0, 0, 0);\n  --foundry_nu8bkpa7: #6e94c6;\n  --foundry_nu8bkpa8: #86a6d1;\n  --foundry_nu8bkpa9: #5782bc;\n  --foundry_nu8bkpaa: #21a657;\n  --foundry_nu8bkpab: #26bb61;\n  --foundry_nu8bkpac: #1e934c;\n  --foundry_nu8bkpad: #c68402;\n  --foundry_nu8bkpae: #dd9507;\n  --foundry_nu8bkpaf: #af7400;\n  --foundry_nu8bkpag: #fc5858;\n  --foundry_nu8bkpah: #fd7d7d;\n  --foundry_nu8bkpai: #fb1e1e;\n  --foundry_nu8bkpaj: #8b9297;\n  --foundry_nu8bkpak: #9fa5a9;\n  --foundry_nu8bkpal: #798187;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #fcaf17;\n}\n.foundry_nu8bkpar {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #eaeaea;\n  --foundry_nu8bkp3i: #d8d8d8;\n  --foundry_nu8bkp3j: #b2b2b2;\n  --foundry_nu8bkp3k: #919191;\n  --foundry_nu8bkp3l: #6d6d6d;\n  --foundry_nu8bkp3m: #464646;\n  --foundry_nu8bkp3n: #212121;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #000000;\n  --foundry_nu8bkp3q: #0e0e0e;\n  --foundry_nu8bkp3r: #141414;\n  --foundry_nu8bkp3s: #1a1a1a;\n  --foundry_nu8bkp3t: #222222;\n  --foundry_nu8bkp3u: #3f3f3f;\n  --foundry_nu8bkp3v: #5b5b5b;\n  --foundry_nu8bkp3w: #797979;\n  --foundry_nu8bkp3x: #989898;\n  --foundry_nu8bkp3y: #b3b3b3;\n  --foundry_nu8bkp3z: #cecece;\n  --foundry_nu8bkp40: #ebebeb;\n  --foundry_nu8bkp41: #fff3f3;\n  --foundry_nu8bkp42: #ffe3e3;\n  --foundry_nu8bkp43: #ffd3d3;\n  --foundry_nu8bkp44: #ffbdbd;\n  --foundry_nu8bkp45: #ffa5a5;\n  --foundry_nu8bkp46: #ff8181;\n  --foundry_nu8bkp47: #ff5c5c;\n  --foundry_nu8bkp48: #e74646;\n  --foundry_nu8bkp49: #c93838;\n  --foundry_nu8bkp4a: #a92d2d;\n  --foundry_nu8bkp4b: #8b2323;\n  --foundry_nu8bkp4c: #6d1c1c;\n  --foundry_nu8bkp4d: #541515;\n  --foundry_nu8bkp4e: #401010;\n  --foundry_nu8bkp4f: #4b0808;\n  --foundry_nu8bkp4g: #610b0b;\n  --foundry_nu8bkp4h: #7a0e0e;\n  --foundry_nu8bkp4i: #941111;\n  --foundry_nu8bkp4j: #b01414;\n  --foundry_nu8bkp4k: #cc1717;\n  --foundry_nu8bkp4l: #e72424;\n  --foundry_nu8bkp4m: #eb5050;\n  --foundry_nu8bkp4n: #ef6f6f;\n  --foundry_nu8bkp4o: #f28989;\n  --foundry_nu8bkp4p: #f5a4a4;\n  --foundry_nu8bkp4q: #f7b5b5;\n  --foundry_nu8bkp4r: #f9c5c5;\n  --foundry_nu8bkp4s: #fad3d3;\n  --foundry_nu8bkp4t: #fff4d4;\n  --foundry_nu8bkp4u: #ffe8a4;\n  --foundry_nu8bkp4v: #ffdb72;\n  --foundry_nu8bkp4w: #ffc539;\n  --foundry_nu8bkp4x: #fcaf17;\n  --foundry_nu8bkp4y: #e19808;\n  --foundry_nu8bkp4z: #ca8602;\n  --foundry_nu8bkp50: #b07400;\n  --foundry_nu8bkp51: #976300;\n  --foundry_nu8bkp52: #7e5200;\n  --foundry_nu8bkp53: #654200;\n  --foundry_nu8bkp54: #503400;\n  --foundry_nu8bkp55: #3c2800;\n  --foundry_nu8bkp56: #2e1e00;\n  --foundry_nu8bkp57: #312000;\n  --foundry_nu8bkp58: #402a00;\n  --foundry_nu8bkp59: #533600;\n  --foundry_nu8bkp5a: #654200;\n  --foundry_nu8bkp5b: #794f00;\n  --foundry_nu8bkp5c: #8e5d00;\n  --foundry_nu8bkp5d: #a36b00;\n  --foundry_nu8bkp5e: #b87a00;\n  --foundry_nu8bkp5f: #ce8903;\n  --foundry_nu8bkp5g: #e29808;\n  --foundry_nu8bkp5h: #f7aa13;\n  --foundry_nu8bkp5i: #ffb923;\n  --foundry_nu8bkp5j: #ffcb47;\n  --foundry_nu8bkp5k: #ffd86c;\n  --foundry_nu8bkp5l: #e0fbea;\n  --foundry_nu8bkp5m: #bef7d5;\n  --foundry_nu8bkp5n: #93f2b9;\n  --foundry_nu8bkp5o: #5ce693;\n  --foundry_nu8bkp5p: #39d878;\n  --foundry_nu8bkp5q: #20c05f;\n  --foundry_nu8bkp5r: #15aa51;\n  --foundry_nu8bkp5s: #0f9444;\n  --foundry_nu8bkp5t: #0b7f39;\n  --foundry_nu8bkp5u: #08692f;\n  --foundry_nu8bkp5v: #065626;\n  --foundry_nu8bkp5w: #05431e;\n  --foundry_nu8bkp5x: #043317;\n  --foundry_nu8bkp5y: #032712;\n  --foundry_nu8bkp5z: #082915;\n  --foundry_nu8bkp60: #0b361c;\n  --foundry_nu8bkp61: #0e4524;\n  --foundry_nu8bkp62: #11552c;\n  --foundry_nu8bkp63: #146535;\n  --foundry_nu8bkp64: #18763d;\n  --foundry_nu8bkp65: #1b8847;\n  --foundry_nu8bkp66: #1f9a50;\n  --foundry_nu8bkp67: #23ad5a;\n  --foundry_nu8bkp68: #26bf63;\n  --foundry_nu8bkp69: #2bd46f;\n  --foundry_nu8bkp6a: #58dd8d;\n  --foundry_nu8bkp6b: #84e6ab;\n  --foundry_nu8bkp6c: #a3ecc0;\n  --foundry_nu8bkp6d: #f1f4f9;\n  --foundry_nu8bkp6e: #e3eaf4;\n  --foundry_nu8bkp6f: #d4dfee;\n  --foundry_nu8bkp6g: #bdcfe6;\n  --foundry_nu8bkp6h: #a9c0de;\n  --foundry_nu8bkp6i: #8ba9d2;\n  --foundry_nu8bkp6j: #7296c8;\n  --foundry_nu8bkp6k: #5882bc;\n  --foundry_nu8bkp6l: #406faf;\n  --foundry_nu8bkp6m: #295b9f;\n  --foundry_nu8bkp6n: #17498b;\n  --foundry_nu8bkp6o: #0c3874;\n  --foundry_nu8bkp6p: #062a5b;\n  --foundry_nu8bkp6q: #032047;\n  --foundry_nu8bkp6r: #02234c;\n  --foundry_nu8bkp6s: #052e61;\n  --foundry_nu8bkp6t: #0c3b76;\n  --foundry_nu8bkp6u: #17498a;\n  --foundry_nu8bkp6v: #265899;\n  --foundry_nu8bkp6w: #3868a6;\n  --foundry_nu8bkp6x: #4c78b2;\n  --foundry_nu8bkp6y: #6189bd;\n  --foundry_nu8bkp6z: #7699c7;\n  --foundry_nu8bkp70: #8baad0;\n  --foundry_nu8bkp71: #a4bbda;\n  --foundry_nu8bkp72: #b4c7e0;\n  --foundry_nu8bkp73: #c4d3e7;\n  --foundry_nu8bkp74: #d2ddec;\n  --foundry_nu8bkp75: #f2f4f6;\n  --foundry_nu8bkp76: #e7ebee;\n  --foundry_nu8bkp77: #d9dfe4;\n  --foundry_nu8bkp78: #c5cfd6;\n  --foundry_nu8bkp79: #b2c0c8;\n  --foundry_nu8bkp7a: #98aab6;\n  --foundry_nu8bkp7b: #8297a5;\n  --foundry_nu8bkp7c: #6b8495;\n  --foundry_nu8bkp7d: #5a717f;\n  --foundry_nu8bkp7e: #4b5e6a;\n  --foundry_nu8bkp7f: #3d4c55;\n  --foundry_nu8bkp7g: #303b43;\n  --foundry_nu8bkp7h: #242d33;\n  --foundry_nu8bkp7i: #1b2226;\n  --foundry_nu8bkp7j: #1b252c;\n  --foundry_nu8bkp7k: #253037;\n  --foundry_nu8bkp7l: #323d44;\n  --foundry_nu8bkp7m: #404b52;\n  --foundry_nu8bkp7n: #4f5960;\n  --foundry_nu8bkp7o: #5f686e;\n  --foundry_nu8bkp7p: #6f787d;\n  --foundry_nu8bkp7q: #80888c;\n  --foundry_nu8bkp7r: #92989c;\n  --foundry_nu8bkp7s: #a3a8ac;\n  --foundry_nu8bkp7t: #b6babd;\n  --foundry_nu8bkp7u: #c2c6c8;\n  --foundry_nu8bkp7v: #d0d2d4;\n  --foundry_nu8bkp7w: #dadcde;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #082915;\n  --foundry_nu8bkp87: #02234c;\n  --foundry_nu8bkp88: #312000;\n  --foundry_nu8bkp89: #4b0808;\n  --foundry_nu8bkp8a: #1b252c;\n  --foundry_nu8bkp8b: #000000;\n  --foundry_nu8bkp8c: #141414;\n  --foundry_nu8bkp8d: #222222;\n  --foundry_nu8bkp8e: #3f3f3f;\n  --foundry_nu8bkp8f: #1a1a1a;\n  --foundry_nu8bkp8g: #141414;\n  --foundry_nu8bkp8h: #0e0e0e;\n  --foundry_nu8bkp8i: #212121;\n  --foundry_nu8bkp8j: #cecece;\n  --foundry_nu8bkp8k: #797979;\n  --foundry_nu8bkp8l: #989898;\n  --foundry_nu8bkp8m: #ebebeb;\n  --foundry_nu8bkp8n: #23ad5a;\n  --foundry_nu8bkp8o: #7699c7;\n  --foundry_nu8bkp8p: #ce8903;\n  --foundry_nu8bkp8q: #ef6f6f;\n  --foundry_nu8bkp8r: #92989c;\n  --foundry_nu8bkp8s: #cecece;\n  --foundry_nu8bkp8t: #797979;\n  --foundry_nu8bkp8u: #989898;\n  --foundry_nu8bkp8v: #b3b3b3;\n  --foundry_nu8bkp8w: #989898;\n  --foundry_nu8bkp8x: #7699c7;\n  --foundry_nu8bkp8y: #6189bd;\n  --foundry_nu8bkp8z: #8baad0;\n  --foundry_nu8bkp90: #4c78b2;\n  --foundry_nu8bkp91: #a4bbda;\n  --foundry_nu8bkp92: #23ad5a;\n  --foundry_nu8bkp93: #1f9a50;\n  --foundry_nu8bkp94: #26bf63;\n  --foundry_nu8bkp95: #1b8847;\n  --foundry_nu8bkp96: #2bd46f;\n  --foundry_nu8bkp97: #ce8903;\n  --foundry_nu8bkp98: #b87a00;\n  --foundry_nu8bkp99: #e29808;\n  --foundry_nu8bkp9a: #a36b00;\n  --foundry_nu8bkp9b: #f7aa13;\n  --foundry_nu8bkp9c: #ef6f6f;\n  --foundry_nu8bkp9d: #eb5050;\n  --foundry_nu8bkp9e: #f28989;\n  --foundry_nu8bkp9f: #e72424;\n  --foundry_nu8bkp9g: #f5a4a4;\n  --foundry_nu8bkp9h: #92989c;\n  --foundry_nu8bkp9i: #80888c;\n  --foundry_nu8bkp9j: #a3a8ac;\n  --foundry_nu8bkp9k: #6f787d;\n  --foundry_nu8bkp9l: #b6babd;\n  --foundry_nu8bkp9m: #3f3f3f;\n  --foundry_nu8bkp9n: #222222;\n  --foundry_nu8bkp9o: #5b5b5b;\n  --foundry_nu8bkp9p: #989898;\n  --foundry_nu8bkp9q: #4c78b2;\n  --foundry_nu8bkp9r: #3868a6;\n  --foundry_nu8bkp9s: #6189bd;\n  --foundry_nu8bkp9t: #1b8847;\n  --foundry_nu8bkp9u: #18763d;\n  --foundry_nu8bkp9v: #1f9a50;\n  --foundry_nu8bkp9w: #a36b00;\n  --foundry_nu8bkp9x: #8e5d00;\n  --foundry_nu8bkp9y: #b87a00;\n  --foundry_nu8bkp9z: #e72424;\n  --foundry_nu8bkpa0: #cc1717;\n  --foundry_nu8bkpa1: #eb5050;\n  --foundry_nu8bkpa2: #6f787d;\n  --foundry_nu8bkpa3: #5f686e;\n  --foundry_nu8bkpa4: #80888c;\n  --foundry_nu8bkpa5: #3f3f3f;\n  --foundry_nu8bkpa6: #222222;\n  --foundry_nu8bkpa7: #265899;\n  --foundry_nu8bkpa8: #17498a;\n  --foundry_nu8bkpa9: #3868a6;\n  --foundry_nu8bkpaa: #146535;\n  --foundry_nu8bkpab: #11552c;\n  --foundry_nu8bkpac: #18763d;\n  --foundry_nu8bkpad: #794f00;\n  --foundry_nu8bkpae: #654200;\n  --foundry_nu8bkpaf: #8e5d00;\n  --foundry_nu8bkpag: #b01414;\n  --foundry_nu8bkpah: #941111;\n  --foundry_nu8bkpai: #cc1717;\n  --foundry_nu8bkpaj: #4f5960;\n  --foundry_nu8bkpak: #404b52;\n  --foundry_nu8bkpal: #5f686e;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #fcaf17;\n}\n.foundry_nu8bkpas {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #cdcdcd;\n  --foundry_nu8bkp3i: #adadad;\n  --foundry_nu8bkp3j: #797979;\n  --foundry_nu8bkp3k: #555555;\n  --foundry_nu8bkp3l: #2e2e2e;\n  --foundry_nu8bkp3m: #000000;\n  --foundry_nu8bkp3n: #000000;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #ffffff;\n  --foundry_nu8bkp3q: #ffffff;\n  --foundry_nu8bkp3r: #ffffff;\n  --foundry_nu8bkp3s: #e4e4e4;\n  --foundry_nu8bkp3t: #b5b5b5;\n  --foundry_nu8bkp3u: #979797;\n  --foundry_nu8bkp3v: #6a6a6a;\n  --foundry_nu8bkp3w: #3c3c3c;\n  --foundry_nu8bkp3x: #111111;\n  --foundry_nu8bkp3y: #000000;\n  --foundry_nu8bkp3z: #000000;\n  --foundry_nu8bkp40: #000000;\n  --foundry_nu8bkp41: #ffdddd;\n  --foundry_nu8bkp42: #ffbdbd;\n  --foundry_nu8bkp43: #ff9c9c;\n  --foundry_nu8bkp44: #ff6d6d;\n  --foundry_nu8bkp45: #f04c4c;\n  --foundry_nu8bkp46: #c73737;\n  --foundry_nu8bkp47: #a42b2b;\n  --foundry_nu8bkp48: #802121;\n  --foundry_nu8bkp49: #5a1717;\n  --foundry_nu8bkp4a: #290b0b;\n  --foundry_nu8bkp4b: #000000;\n  --foundry_nu8bkp4c: #000000;\n  --foundry_nu8bkp4d: #000000;\n  --foundry_nu8bkp4e: #000000;\n  --foundry_nu8bkp4f: #feb1b1;\n  --foundry_nu8bkp4g: #fd8181;\n  --foundry_nu8bkp4h: #fc4242;\n  --foundry_nu8bkp4i: #e20404;\n  --foundry_nu8bkp4j: #b90303;\n  --foundry_nu8bkp4k: #940303;\n  --foundry_nu8bkp4l: #710202;\n  --foundry_nu8bkp4m: #4b0101;\n  --foundry_nu8bkp4n: #130000;\n  --foundry_nu8bkp4o: #000000;\n  --foundry_nu8bkp4p: #000000;\n  --foundry_nu8bkp4q: #000000;\n  --foundry_nu8bkp4r: #000000;\n  --foundry_nu8bkp4s: #000000;\n  --foundry_nu8bkp4t: #ffe492;\n  --foundry_nu8bkp4u: #ffc539;\n  --foundry_nu8bkp4v: #f4a811;\n  --foundry_nu8bkp4w: #d48e04;\n  --foundry_nu8bkp4x: #b87a00;\n  --foundry_nu8bkp4y: #966200;\n  --foundry_nu8bkp4z: #7a5000;\n  --foundry_nu8bkp50: #5e3e00;\n  --foundry_nu8bkp51: #412b00;\n  --foundry_nu8bkp52: #1d1300;\n  --foundry_nu8bkp53: #000000;\n  --foundry_nu8bkp54: #000000;\n  --foundry_nu8bkp55: #000000;\n  --foundry_nu8bkp56: #000000;\n  --foundry_nu8bkp57: #ffb720;\n  --foundry_nu8bkp58: #e19808;\n  --foundry_nu8bkp59: #bb7c00;\n  --foundry_nu8bkp5a: #9a6500;\n  --foundry_nu8bkp5b: #7c5200;\n  --foundry_nu8bkp5c: #624000;\n  --foundry_nu8bkp5d: #483000;\n  --foundry_nu8bkp5e: #2e1e00;\n  --foundry_nu8bkp5f: #070400;\n  --foundry_nu8bkp5g: #000000;\n  --foundry_nu8bkp5h: #000000;\n  --foundry_nu8bkp5i: #000000;\n  --foundry_nu8bkp5j: #000000;\n  --foundry_nu8bkp5k: #000000;\n  --foundry_nu8bkp5l: #adf5ca;\n  --foundry_nu8bkp5m: #5ce693;\n  --foundry_nu8bkp5n: #2ed16f;\n  --foundry_nu8bkp5o: #19b357;\n  --foundry_nu8bkp5p: #119c48;\n  --foundry_nu8bkp5q: #0a7e38;\n  --foundry_nu8bkp5r: #07662d;\n  --foundry_nu8bkp5s: #064f23;\n  --foundry_nu8bkp5t: #043719;\n  --foundry_nu8bkp5u: #03190c;\n  --foundry_nu8bkp5v: #000000;\n  --foundry_nu8bkp5w: #000000;\n  --foundry_nu8bkp5x: #000000;\n  --foundry_nu8bkp5y: #000000;\n  --foundry_nu8bkp5z: #57dd8c;\n  --foundry_nu8bkp60: #26be63;\n  --foundry_nu8bkp61: #1f9d51;\n  --foundry_nu8bkp62: #1a8043;\n  --foundry_nu8bkp63: #156836;\n  --foundry_nu8bkp64: #10522b;\n  --foundry_nu8bkp65: #0c3d1f;\n  --foundry_nu8bkp66: #082614;\n  --foundry_nu8bkp67: #010603;\n  --foundry_nu8bkp68: #000000;\n  --foundry_nu8bkp69: #000000;\n  --foundry_nu8bkp6a: #000000;\n  --foundry_nu8bkp6b: #000000;\n  --foundry_nu8bkp6c: #000000;\n  --foundry_nu8bkp6d: #dee6f2;\n  --foundry_nu8bkp6e: #bdcfe6;\n  --foundry_nu8bkp6f: #9fb9db;\n  --foundry_nu8bkp6g: #7c9fcc;\n  --foundry_nu8bkp6h: #6189c0;\n  --foundry_nu8bkp6i: #3e6eae;\n  --foundry_nu8bkp6j: #26589c;\n  --foundry_nu8bkp6k: #134384;\n  --foundry_nu8bkp6l: #072e62;\n  --foundry_nu8bkp6m: #02152e;\n  --foundry_nu8bkp6n: #000000;\n  --foundry_nu8bkp6o: #000000;\n  --foundry_nu8bkp6p: #000000;\n  --foundry_nu8bkp6q: #000000;\n  --foundry_nu8bkp6r: #b2c7e2;\n  --foundry_nu8bkp6s: #8aa9d2;\n  --foundry_nu8bkp6t: #638bc1;\n  --foundry_nu8bkp6u: #4271b0;\n  --foundry_nu8bkp6v: #285a9e;\n  --foundry_nu8bkp6w: #154688;\n  --foundry_nu8bkp6x: #09336c;\n  --foundry_nu8bkp6y: #032047;\n  --foundry_nu8bkp6z: #01050b;\n  --foundry_nu8bkp70: #000000;\n  --foundry_nu8bkp71: #000000;\n  --foundry_nu8bkp72: #000000;\n  --foundry_nu8bkp73: #000000;\n  --foundry_nu8bkp74: #000000;\n  --foundry_nu8bkp75: #e0e6e9;\n  --foundry_nu8bkp76: #c5cfd6;\n  --foundry_nu8bkp77: #aab9c2;\n  --foundry_nu8bkp78: #8b9fac;\n  --foundry_nu8bkp79: #728a9a;\n  --foundry_nu8bkp7a: #5a707e;\n  --foundry_nu8bkp7b: #495b67;\n  --foundry_nu8bkp7c: #39464f;\n  --foundry_nu8bkp7d: #273037;\n  --foundry_nu8bkp7e: #111518;\n  --foundry_nu8bkp7f: #000000;\n  --foundry_nu8bkp7g: #000000;\n  --foundry_nu8bkp7h: #000000;\n  --foundry_nu8bkp7i: #000000;\n  --foundry_nu8bkp7j: #c1c5c8;\n  --foundry_nu8bkp7k: #a1a7ab;\n  --foundry_nu8bkp7l: #838a8f;\n  --foundry_nu8bkp7m: #697177;\n  --foundry_nu8bkp7n: #525c62;\n  --foundry_nu8bkp7o: #3e484f;\n  --foundry_nu8bkp7p: #2b363d;\n  --foundry_nu8bkp7q: #182229;\n  --foundry_nu8bkp7r: #030506;\n  --foundry_nu8bkp7s: #000000;\n  --foundry_nu8bkp7t: #000000;\n  --foundry_nu8bkp7u: #000000;\n  --foundry_nu8bkp7v: #000000;\n  --foundry_nu8bkp7w: #000000;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #57dd8c;\n  --foundry_nu8bkp87: #b2c7e2;\n  --foundry_nu8bkp88: #ffb720;\n  --foundry_nu8bkp89: #feb1b1;\n  --foundry_nu8bkp8a: #c1c5c8;\n  --foundry_nu8bkp8b: #ffffff;\n  --foundry_nu8bkp8c: #ffffff;\n  --foundry_nu8bkp8d: #e4e4e4;\n  --foundry_nu8bkp8e: #ffffff;\n  --foundry_nu8bkp8f: #ffffff;\n  --foundry_nu8bkp8g: #e4e4e4;\n  --foundry_nu8bkp8h: #ffffff;\n  --foundry_nu8bkp8i: #000000;\n  --foundry_nu8bkp8j: #000000;\n  --foundry_nu8bkp8k: #3c3c3c;\n  --foundry_nu8bkp8l: #111111;\n  --foundry_nu8bkp8m: #000000;\n  --foundry_nu8bkp8n: #010603;\n  --foundry_nu8bkp8o: #01050b;\n  --foundry_nu8bkp8p: #070400;\n  --foundry_nu8bkp8q: #130000;\n  --foundry_nu8bkp8r: #030506;\n  --foundry_nu8bkp8s: #000000;\n  --foundry_nu8bkp8t: #3c3c3c;\n  --foundry_nu8bkp8u: #111111;\n  --foundry_nu8bkp8v: #000000;\n  --foundry_nu8bkp8w: #111111;\n  --foundry_nu8bkp8x: #01050b;\n  --foundry_nu8bkp8y: #032047;\n  --foundry_nu8bkp8z: #000000;\n  --foundry_nu8bkp90: #09336c;\n  --foundry_nu8bkp91: #000000;\n  --foundry_nu8bkp92: #010603;\n  --foundry_nu8bkp93: #082614;\n  --foundry_nu8bkp94: #000000;\n  --foundry_nu8bkp95: #0c3d1f;\n  --foundry_nu8bkp96: #000000;\n  --foundry_nu8bkp97: #070400;\n  --foundry_nu8bkp98: #2e1e00;\n  --foundry_nu8bkp99: #000000;\n  --foundry_nu8bkp9a: #483000;\n  --foundry_nu8bkp9b: #000000;\n  --foundry_nu8bkp9c: #130000;\n  --foundry_nu8bkp9d: #4b0101;\n  --foundry_nu8bkp9e: #000000;\n  --foundry_nu8bkp9f: #710202;\n  --foundry_nu8bkp9g: #000000;\n  --foundry_nu8bkp9h: #030506;\n  --foundry_nu8bkp9i: #182229;\n  --foundry_nu8bkp9j: #000000;\n  --foundry_nu8bkp9k: #2b363d;\n  --foundry_nu8bkp9l: #000000;\n  --foundry_nu8bkp9m: #979797;\n  --foundry_nu8bkp9n: #b5b5b5;\n  --foundry_nu8bkp9o: #6a6a6a;\n  --foundry_nu8bkp9p: #111111;\n  --foundry_nu8bkp9q: #09336c;\n  --foundry_nu8bkp9r: #154688;\n  --foundry_nu8bkp9s: #032047;\n  --foundry_nu8bkp9t: #0c3d1f;\n  --foundry_nu8bkp9u: #10522b;\n  --foundry_nu8bkp9v: #082614;\n  --foundry_nu8bkp9w: #483000;\n  --foundry_nu8bkp9x: #624000;\n  --foundry_nu8bkp9y: #2e1e00;\n  --foundry_nu8bkp9z: #710202;\n  --foundry_nu8bkpa0: #940303;\n  --foundry_nu8bkpa1: #4b0101;\n  --foundry_nu8bkpa2: #2b363d;\n  --foundry_nu8bkpa3: #3e484f;\n  --foundry_nu8bkpa4: #182229;\n  --foundry_nu8bkpa5: #979797;\n  --foundry_nu8bkpa6: rgba(0, 0, 0, 0);\n  --foundry_nu8bkpa7: #285a9e;\n  --foundry_nu8bkpa8: #4271b0;\n  --foundry_nu8bkpa9: #154688;\n  --foundry_nu8bkpaa: #156836;\n  --foundry_nu8bkpab: #1a8043;\n  --foundry_nu8bkpac: #10522b;\n  --foundry_nu8bkpad: #7c5200;\n  --foundry_nu8bkpae: #9a6500;\n  --foundry_nu8bkpaf: #624000;\n  --foundry_nu8bkpag: #b90303;\n  --foundry_nu8bkpah: #e20404;\n  --foundry_nu8bkpai: #940303;\n  --foundry_nu8bkpaj: #525c62;\n  --foundry_nu8bkpak: #697177;\n  --foundry_nu8bkpal: #3e484f;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #b87a00;\n}\n.foundry_nu8bkpat {\n  --foundry_nu8bkp3d: #fdfdfd;\n  --foundry_nu8bkp3e: #fdfdfd;\n  --foundry_nu8bkp3f: #fdfdfd;\n  --foundry_nu8bkp3g: #fdfdfd;\n  --foundry_nu8bkp3h: #cdcdcd;\n  --foundry_nu8bkp3i: #adadad;\n  --foundry_nu8bkp3j: #797979;\n  --foundry_nu8bkp3k: #555555;\n  --foundry_nu8bkp3l: #2e2e2e;\n  --foundry_nu8bkp3m: #000000;\n  --foundry_nu8bkp3n: #000000;\n  --foundry_nu8bkp3o: #000000;\n  --foundry_nu8bkp3p: #000000;\n  --foundry_nu8bkp3q: #000000;\n  --foundry_nu8bkp3r: #070707;\n  --foundry_nu8bkp3s: #1a1a1a;\n  --foundry_nu8bkp3t: #2f2f2f;\n  --foundry_nu8bkp3u: #656565;\n  --foundry_nu8bkp3v: #939393;\n  --foundry_nu8bkp3w: #c4c4c4;\n  --foundry_nu8bkp3x: #f5f5f5;\n  --foundry_nu8bkp3y: #ffffff;\n  --foundry_nu8bkp3z: #ffffff;\n  --foundry_nu8bkp40: #ffffff;\n  --foundry_nu8bkp41: #ffdddd;\n  --foundry_nu8bkp42: #ffbdbd;\n  --foundry_nu8bkp43: #ff9c9c;\n  --foundry_nu8bkp44: #ff6d6d;\n  --foundry_nu8bkp45: #f04c4c;\n  --foundry_nu8bkp46: #c73737;\n  --foundry_nu8bkp47: #a42b2b;\n  --foundry_nu8bkp48: #802121;\n  --foundry_nu8bkp49: #5a1717;\n  --foundry_nu8bkp4a: #290b0b;\n  --foundry_nu8bkp4b: #000000;\n  --foundry_nu8bkp4c: #000000;\n  --foundry_nu8bkp4d: #000000;\n  --foundry_nu8bkp4e: #000000;\n  --foundry_nu8bkp4f: #670b0b;\n  --foundry_nu8bkp4g: #911010;\n  --foundry_nu8bkp4h: #bd1515;\n  --foundry_nu8bkp4i: #e62323;\n  --foundry_nu8bkp4j: #ed6060;\n  --foundry_nu8bkp4k: #f28989;\n  --foundry_nu8bkp4l: #f6aeae;\n  --foundry_nu8bkp4m: #fad0d0;\n  --foundry_nu8bkp4n: #fef2f2;\n  --foundry_nu8bkp4o: #ffffff;\n  --foundry_nu8bkp4p: #ffffff;\n  --foundry_nu8bkp4q: #ffffff;\n  --foundry_nu8bkp4r: #ffffff;\n  --foundry_nu8bkp4s: #ffffff;\n  --foundry_nu8bkp4t: #ffe492;\n  --foundry_nu8bkp4u: #ffc539;\n  --foundry_nu8bkp4v: #f4a811;\n  --foundry_nu8bkp4w: #d48e04;\n  --foundry_nu8bkp4x: #b87a00;\n  --foundry_nu8bkp4y: #966200;\n  --foundry_nu8bkp4z: #7a5000;\n  --foundry_nu8bkp50: #5e3e00;\n  --foundry_nu8bkp51: #412b00;\n  --foundry_nu8bkp52: #1d1300;\n  --foundry_nu8bkp53: #000000;\n  --foundry_nu8bkp54: #000000;\n  --foundry_nu8bkp55: #000000;\n  --foundry_nu8bkp56: #000000;\n  --foundry_nu8bkp57: #442d00;\n  --foundry_nu8bkp58: #634100;\n  --foundry_nu8bkp59: #825600;\n  --foundry_nu8bkp5a: #a26b00;\n  --foundry_nu8bkp5b: #c28101;\n  --foundry_nu8bkp5c: #e29808;\n  --foundry_nu8bkp5d: #feb21a;\n  --foundry_nu8bkp5e: #ffd665;\n  --foundry_nu8bkp5f: #fff4d7;\n  --foundry_nu8bkp5g: #ffffff;\n  --foundry_nu8bkp5h: #ffffff;\n  --foundry_nu8bkp5i: #ffffff;\n  --foundry_nu8bkp5j: #ffffff;\n  --foundry_nu8bkp5k: #ffffff;\n  --foundry_nu8bkp5l: #adf5ca;\n  --foundry_nu8bkp5m: #5ce693;\n  --foundry_nu8bkp5n: #2ed16f;\n  --foundry_nu8bkp5o: #19b357;\n  --foundry_nu8bkp5p: #119c48;\n  --foundry_nu8bkp5q: #0a7e38;\n  --foundry_nu8bkp5r: #07662d;\n  --foundry_nu8bkp5s: #064f23;\n  --foundry_nu8bkp5t: #043719;\n  --foundry_nu8bkp5u: #03190c;\n  --foundry_nu8bkp5v: #000000;\n  --foundry_nu8bkp5w: #000000;\n  --foundry_nu8bkp5x: #000000;\n  --foundry_nu8bkp5y: #000000;\n  --foundry_nu8bkp5z: #0c3a1e;\n  --foundry_nu8bkp60: #11522b;\n  --foundry_nu8bkp61: #166d39;\n  --foundry_nu8bkp62: #1b8746;\n  --foundry_nu8bkp63: #21a355;\n  --foundry_nu8bkp64: #26bf63;\n  --foundry_nu8bkp65: #44da80;\n  --foundry_nu8bkp66: #9eebbd;\n  --foundry_nu8bkp67: #e4faec;\n  --foundry_nu8bkp68: #ffffff;\n  --foundry_nu8bkp69: #ffffff;\n  --foundry_nu8bkp6a: #ffffff;\n  --foundry_nu8bkp6b: #ffffff;\n  --foundry_nu8bkp6c: #ffffff;\n  --foundry_nu8bkp6d: #dee6f2;\n  --foundry_nu8bkp6e: #bdcfe6;\n  --foundry_nu8bkp6f: #9fb9db;\n  --foundry_nu8bkp6g: #7c9fcc;\n  --foundry_nu8bkp6h: #6189c0;\n  --foundry_nu8bkp6i: #3e6eae;\n  --foundry_nu8bkp6j: #26589c;\n  --foundry_nu8bkp6k: #134384;\n  --foundry_nu8bkp6l: #072e62;\n  --foundry_nu8bkp6m: #02152e;\n  --foundry_nu8bkp6n: #000000;\n  --foundry_nu8bkp6o: #000000;\n  --foundry_nu8bkp6p: #000000;\n  --foundry_nu8bkp6q: #000000;\n  --foundry_nu8bkp6r: #073065;\n  --foundry_nu8bkp6s: #154787;\n  --foundry_nu8bkp6t: #2e609f;\n  --foundry_nu8bkp6u: #4b78b2;\n  --foundry_nu8bkp6v: #6a91c1;\n  --foundry_nu8bkp6w: #8ba9d0;\n  --foundry_nu8bkp6x: #adc2de;\n  --foundry_nu8bkp6y: #cfdbeb;\n  --foundry_nu8bkp6z: #f1f5f9;\n  --foundry_nu8bkp70: #ffffff;\n  --foundry_nu8bkp71: #ffffff;\n  --foundry_nu8bkp72: #ffffff;\n  --foundry_nu8bkp73: #ffffff;\n  --foundry_nu8bkp74: #ffffff;\n  --foundry_nu8bkp75: #e0e6e9;\n  --foundry_nu8bkp76: #c5cfd6;\n  --foundry_nu8bkp77: #aab9c2;\n  --foundry_nu8bkp78: #8b9fac;\n  --foundry_nu8bkp79: #728a9a;\n  --foundry_nu8bkp7a: #5a707e;\n  --foundry_nu8bkp7b: #495b67;\n  --foundry_nu8bkp7c: #39464f;\n  --foundry_nu8bkp7d: #273037;\n  --foundry_nu8bkp7e: #111518;\n  --foundry_nu8bkp7f: #000000;\n  --foundry_nu8bkp7g: #000000;\n  --foundry_nu8bkp7h: #000000;\n  --foundry_nu8bkp7i: #000000;\n  --foundry_nu8bkp7j: #28333a;\n  --foundry_nu8bkp7k: #3e4950;\n  --foundry_nu8bkp7l: #576067;\n  --foundry_nu8bkp7m: #6f777d;\n  --foundry_nu8bkp7n: #888f94;\n  --foundry_nu8bkp7o: #a2a8ab;\n  --foundry_nu8bkp7p: #bdc1c4;\n  --foundry_nu8bkp7q: #d8dadc;\n  --foundry_nu8bkp7r: #f4f4f5;\n  --foundry_nu8bkp7s: #ffffff;\n  --foundry_nu8bkp7t: #ffffff;\n  --foundry_nu8bkp7u: #ffffff;\n  --foundry_nu8bkp7v: #ffffff;\n  --foundry_nu8bkp7w: #ffffff;\n  --foundry_nu8bkp7x: #ffffff;\n  --foundry_nu8bkp7y: rgba(0, 0, 0, 0.1);\n  --foundry_nu8bkp7z: rgba(0, 0, 0, 0.15);\n  --foundry_nu8bkp80: rgba(0, 0, 0, 0.4);\n  --foundry_nu8bkp81: rgba(0, 0, 0, 0.5);\n  --foundry_nu8bkp82: rgba(0, 0, 0, 0.65);\n  --foundry_nu8bkp83: rgba(0, 0, 0, 0.8);\n  --foundry_nu8bkp84: rgba(0, 0, 0, 0.9);\n  --foundry_nu8bkp85: #000000;\n  --foundry_nu8bkp86: #0c3a1e;\n  --foundry_nu8bkp87: #073065;\n  --foundry_nu8bkp88: #442d00;\n  --foundry_nu8bkp89: #670b0b;\n  --foundry_nu8bkp8a: #28333a;\n  --foundry_nu8bkp8b: #000000;\n  --foundry_nu8bkp8c: #070707;\n  --foundry_nu8bkp8d: #2f2f2f;\n  --foundry_nu8bkp8e: #656565;\n  --foundry_nu8bkp8f: #1a1a1a;\n  --foundry_nu8bkp8g: #070707;\n  --foundry_nu8bkp8h: #000000;\n  --foundry_nu8bkp8i: #000000;\n  --foundry_nu8bkp8j: #ffffff;\n  --foundry_nu8bkp8k: #c4c4c4;\n  --foundry_nu8bkp8l: #f5f5f5;\n  --foundry_nu8bkp8m: #ffffff;\n  --foundry_nu8bkp8n: #e4faec;\n  --foundry_nu8bkp8o: #f1f5f9;\n  --foundry_nu8bkp8p: #fff4d7;\n  --foundry_nu8bkp8q: #fef2f2;\n  --foundry_nu8bkp8r: #f4f4f5;\n  --foundry_nu8bkp8s: #ffffff;\n  --foundry_nu8bkp8t: #c4c4c4;\n  --foundry_nu8bkp8u: #f5f5f5;\n  --foundry_nu8bkp8v: #ffffff;\n  --foundry_nu8bkp8w: #f5f5f5;\n  --foundry_nu8bkp8x: #f1f5f9;\n  --foundry_nu8bkp8y: #cfdbeb;\n  --foundry_nu8bkp8z: #ffffff;\n  --foundry_nu8bkp90: #adc2de;\n  --foundry_nu8bkp91: #ffffff;\n  --foundry_nu8bkp92: #e4faec;\n  --foundry_nu8bkp93: #9eebbd;\n  --foundry_nu8bkp94: #ffffff;\n  --foundry_nu8bkp95: #44da80;\n  --foundry_nu8bkp96: #ffffff;\n  --foundry_nu8bkp97: #fff4d7;\n  --foundry_nu8bkp98: #ffd665;\n  --foundry_nu8bkp99: #ffffff;\n  --foundry_nu8bkp9a: #feb21a;\n  --foundry_nu8bkp9b: #ffffff;\n  --foundry_nu8bkp9c: #fef2f2;\n  --foundry_nu8bkp9d: #fad0d0;\n  --foundry_nu8bkp9e: #ffffff;\n  --foundry_nu8bkp9f: #f6aeae;\n  --foundry_nu8bkp9g: #ffffff;\n  --foundry_nu8bkp9h: #f4f4f5;\n  --foundry_nu8bkp9i: #d8dadc;\n  --foundry_nu8bkp9j: #ffffff;\n  --foundry_nu8bkp9k: #bdc1c4;\n  --foundry_nu8bkp9l: #ffffff;\n  --foundry_nu8bkp9m: #656565;\n  --foundry_nu8bkp9n: #2f2f2f;\n  --foundry_nu8bkp9o: #939393;\n  --foundry_nu8bkp9p: #f5f5f5;\n  --foundry_nu8bkp9q: #adc2de;\n  --foundry_nu8bkp9r: #8ba9d0;\n  --foundry_nu8bkp9s: #cfdbeb;\n  --foundry_nu8bkp9t: #44da80;\n  --foundry_nu8bkp9u: #26bf63;\n  --foundry_nu8bkp9v: #9eebbd;\n  --foundry_nu8bkp9w: #feb21a;\n  --foundry_nu8bkp9x: #e29808;\n  --foundry_nu8bkp9y: #ffd665;\n  --foundry_nu8bkp9z: #f6aeae;\n  --foundry_nu8bkpa0: #f28989;\n  --foundry_nu8bkpa1: #fad0d0;\n  --foundry_nu8bkpa2: #bdc1c4;\n  --foundry_nu8bkpa3: #a2a8ab;\n  --foundry_nu8bkpa4: #d8dadc;\n  --foundry_nu8bkpa5: #656565;\n  --foundry_nu8bkpa6: #2f2f2f;\n  --foundry_nu8bkpa7: #6a91c1;\n  --foundry_nu8bkpa8: #4b78b2;\n  --foundry_nu8bkpa9: #8ba9d0;\n  --foundry_nu8bkpaa: #21a355;\n  --foundry_nu8bkpab: #1b8746;\n  --foundry_nu8bkpac: #26bf63;\n  --foundry_nu8bkpad: #c28101;\n  --foundry_nu8bkpae: #a26b00;\n  --foundry_nu8bkpaf: #e29808;\n  --foundry_nu8bkpag: #ed6060;\n  --foundry_nu8bkpah: #e62323;\n  --foundry_nu8bkpai: #f28989;\n  --foundry_nu8bkpaj: #888f94;\n  --foundry_nu8bkpak: #6f777d;\n  --foundry_nu8bkpal: #a2a8ab;\n  --foundry_nu8bkpam: #003366;\n  --foundry_nu8bkpan: #FFAA00;\n  --foundry_nu8bkpao: #CC0000;\n  --foundry_nu8bkpap: #b87a00;\n}"],
        sourceRoot: ""
      }]);
      const A = e
    },
    31611: (n, u, r) => {
      r.d(u, {
        A: () => i
      });
      var o = r(42587),
        f = r.n(o),
        d = r(15081),
        e = r.n(d),
        A = r(79908),
        p = r.n(A),
        b = new URL(r(25591), r.b),
        a = new URL(r(78118), r.b),
        y = new URL(r(14928), r.b),
        t = new URL(r(58858), r.b),
        B = new URL(r(78237), r.b),
        k = e()(f()),
        _ = p()(b),
        c = p()(a),
        l = p()(y),
        s = p()(t),
        C = p()(B);
      k.push([n.id, `\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(${_}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: italic;\n    font-display: swap;\n    font-weight: 400;\n    src: url(${c}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(${l}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(${s}) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(${C}) format("woff");\n}\n`, "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/fonts/dist/index.css"],
        names: [],
        mappings: ";AACA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAAsD;AAC1D;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAAwD;AAC5D;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAA0D;AAC9D;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAAyD;AAC7D;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,2DAA6D;AACjE",
        sourcesContent: ['\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(./files/HelveticaNowText.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: italic;\n    font-display: swap;\n    font-weight: 400;\n    src: url(./files/HelveticaNowTextIt.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Text";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(./files/HelveticaNowTextBold.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 400;\n    src: url(./files/HelveticaNowDisplay.woff) format("woff");\n}\n\n@font-face {\n    font-family: "Helvetica Now Display";\n    font-style: normal;\n    font-display: swap;\n    font-weight: 700;\n    src: url(./files/HelveticaNowDisplayBold.woff) format("woff");\n}\n'],
        sourceRoot: ""
      }]);
      const i = k
    },
    56108: (n, u, r) => {
      r.d(u, {
        A: () => A
      });
      var o = r(42587),
        f = r.n(o),
        d = r(15081),
        e = r.n(d)()(f());
      e.push([n.id, '.foundry_1qqcnua0:disabled {\n  color: var(--foundry_nu8bkp8k);\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua1 {\n  color: var(--foundry_nu8bkp85);\n  border-color: var(--foundry_nu8bkp4x);\n  background-color: var(--foundry_nu8bkp4x);\n}\n.foundry_1qqcnua1[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp4z);\n  background-color: var(--foundry_nu8bkp4z);\n}\n.foundry_1qqcnua1:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp4y);\n  background-color: var(--foundry_nu8bkp4y);\n}\n.foundry_1qqcnua1:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp4y);\n  background-color: var(--foundry_nu8bkp4y);\n}\n.foundry_1qqcnua1:focus-visible {\n  outline-color: var(--foundry_nu8bkp4v);\n}\n.foundry_1qqcnua2 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: var(--foundry_nu8bkp9p);\n  background-color: transparent;\n}\n.foundry_1qqcnua2[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua2:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua2:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua3 {\n  color: var(--foundry_nu8bkp8m);\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua3[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  background-color: var(--foundry_nu8bkp3v);\n}\n.foundry_1qqcnua3:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua3:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua4 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: transparent;\n  background-color: transparent;\n}\n.foundry_1qqcnua4:disabled {\n  color: var(--foundry_nu8bkp8k);\n  border-color: transparent;\n  background-color: transparent;\n}\n.foundry_1qqcnua4[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua4:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp3s);\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua4:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp3s);\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua5 {\n  color: var(--foundry_nu8bkp7x);\n  border-color: var(--foundry_nu8bkp6m);\n  background-color: var(--foundry_nu8bkp6m);\n}\n.foundry_1qqcnua5[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp6o);\n  background-color: var(--foundry_nu8bkp6o);\n}\n.foundry_1qqcnua5:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp6n);\n  background-color: var(--foundry_nu8bkp6n);\n}\n.foundry_1qqcnua5:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp6n);\n  background-color: var(--foundry_nu8bkp6n);\n}\n.foundry_1qqcnua5:focus-visible {\n  outline-color: var(--foundry_nu8bkp6j);\n}\n.foundry_1qqcnua6 {\n  color: var(--foundry_nu8bkp7x);\n  border-color: var(--foundry_nu8bkp49);\n  background-color: var(--foundry_nu8bkp49);\n}\n.foundry_1qqcnua6[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp4b);\n  background-color: var(--foundry_nu8bkp4b);\n}\n.foundry_1qqcnua6:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp4a);\n  background-color: var(--foundry_nu8bkp4a);\n}\n.foundry_1qqcnua6:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp4a);\n  background-color: var(--foundry_nu8bkp4a);\n}\n.foundry_1qqcnua6:focus-visible {\n  outline-color: var(--foundry_nu8bkp47);\n}\n.foundry_1qqcnua7 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: var(--foundry_nu8bkp9p);\n  background-color: transparent;\n}\n.foundry_1qqcnua7[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp3y);\n  border-color: var(--foundry_nu8bkp3y);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1qqcnua7:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp40);\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1qqcnua7:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp40);\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/theme/dist/client/mixins/buttons.css"],
        names: [],
        mappings: "AAAA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,sCAAsC;AACxC;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,6BAA6B;AAC/B;AACA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,6BAA6B;AAC/B;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,sCAAsC;AACxC;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,qCAAqC;EACrC,yCAAyC;AAC3C;AACA;EACE,sCAAsC;AACxC;AACA;EACE,8BAA8B;EAC9B,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE,yCAAyC;EACzC,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,yCAAyC;EACzC,qCAAqC;EACrC,8BAA8B;AAChC;AACA;EACE,yCAAyC;EACzC,qCAAqC;EACrC,8BAA8B;AAChC",
        sourcesContent: ['.foundry_1qqcnua0:disabled {\n  color: var(--foundry_nu8bkp8k);\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua1 {\n  color: var(--foundry_nu8bkp85);\n  border-color: var(--foundry_nu8bkp4x);\n  background-color: var(--foundry_nu8bkp4x);\n}\n.foundry_1qqcnua1[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp4z);\n  background-color: var(--foundry_nu8bkp4z);\n}\n.foundry_1qqcnua1:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp4y);\n  background-color: var(--foundry_nu8bkp4y);\n}\n.foundry_1qqcnua1:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp4y);\n  background-color: var(--foundry_nu8bkp4y);\n}\n.foundry_1qqcnua1:focus-visible {\n  outline-color: var(--foundry_nu8bkp4v);\n}\n.foundry_1qqcnua2 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: var(--foundry_nu8bkp9p);\n  background-color: transparent;\n}\n.foundry_1qqcnua2[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua2:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua2:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua3 {\n  color: var(--foundry_nu8bkp8m);\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua3[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp3v);\n  background-color: var(--foundry_nu8bkp3v);\n}\n.foundry_1qqcnua3:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua3:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp3u);\n  background-color: var(--foundry_nu8bkp3u);\n}\n.foundry_1qqcnua4 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: transparent;\n  background-color: transparent;\n}\n.foundry_1qqcnua4:disabled {\n  color: var(--foundry_nu8bkp8k);\n  border-color: transparent;\n  background-color: transparent;\n}\n.foundry_1qqcnua4[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp3t);\n  background-color: var(--foundry_nu8bkp3t);\n}\n.foundry_1qqcnua4:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp3s);\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua4:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp3s);\n  background-color: var(--foundry_nu8bkp3s);\n}\n.foundry_1qqcnua5 {\n  color: var(--foundry_nu8bkp7x);\n  border-color: var(--foundry_nu8bkp6m);\n  background-color: var(--foundry_nu8bkp6m);\n}\n.foundry_1qqcnua5[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp6o);\n  background-color: var(--foundry_nu8bkp6o);\n}\n.foundry_1qqcnua5:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp6n);\n  background-color: var(--foundry_nu8bkp6n);\n}\n.foundry_1qqcnua5:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp6n);\n  background-color: var(--foundry_nu8bkp6n);\n}\n.foundry_1qqcnua5:focus-visible {\n  outline-color: var(--foundry_nu8bkp6j);\n}\n.foundry_1qqcnua6 {\n  color: var(--foundry_nu8bkp7x);\n  border-color: var(--foundry_nu8bkp49);\n  background-color: var(--foundry_nu8bkp49);\n}\n.foundry_1qqcnua6[data-pressed="true"] {\n  border-color: var(--foundry_nu8bkp4b);\n  background-color: var(--foundry_nu8bkp4b);\n}\n.foundry_1qqcnua6:not([data-pressed="true"]):not([disabled]):hover {\n  border-color: var(--foundry_nu8bkp4a);\n  background-color: var(--foundry_nu8bkp4a);\n}\n.foundry_1qqcnua6:not([data-pressed="true"]):focus-visible {\n  border-color: var(--foundry_nu8bkp4a);\n  background-color: var(--foundry_nu8bkp4a);\n}\n.foundry_1qqcnua6:focus-visible {\n  outline-color: var(--foundry_nu8bkp47);\n}\n.foundry_1qqcnua7 {\n  color: var(--foundry_nu8bkp8j);\n  border-color: var(--foundry_nu8bkp9p);\n  background-color: transparent;\n}\n.foundry_1qqcnua7[data-pressed="true"] {\n  background-color: var(--foundry_nu8bkp3y);\n  border-color: var(--foundry_nu8bkp3y);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1qqcnua7:not([data-pressed="true"]):not([disabled]):hover {\n  background-color: var(--foundry_nu8bkp40);\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}\n.foundry_1qqcnua7:not([data-pressed="true"]):focus-visible {\n  background-color: var(--foundry_nu8bkp40);\n  border-color: var(--foundry_nu8bkp40);\n  color: var(--foundry_nu8bkp3q);\n}'],
        sourceRoot: ""
      }]);
      const A = e
    },
    96619: (n, u, r) => {
      r.d(u, {
        A: () => A
      });
      var o = r(42587),
        f = r.n(o),
        d = r(15081),
        e = r.n(d)()(f());
      e.push([n.id, ".foundry_1d5mo5m0 {\n  outline-width: 2px;\n  outline-style: solid;\n  outline-offset: 4px;\n  outline-color: transparent;\n}\n.foundry_1d5mo5m0:focus-visible {\n  outline-color: var(--foundry_nu8bkp9q);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/theme/dist/client/mixins/focus.css"],
        names: [],
        mappings: "AAAA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,sCAAsC;AACxC",
        sourcesContent: [".foundry_1d5mo5m0 {\n  outline-width: 2px;\n  outline-style: solid;\n  outline-offset: 4px;\n  outline-color: transparent;\n}\n.foundry_1d5mo5m0:focus-visible {\n  outline-color: var(--foundry_nu8bkp9q);\n}"],
        sourceRoot: ""
      }]);
      const A = e
    },
    53994: (n, u, r) => {
      r.d(u, {
        A: () => A
      });
      var o = r(42587),
        f = r.n(o),
        d = r(15081),
        e = r.n(d)()(f());
      e.push([n.id, "@layer foundry_8kowh40;\n@layer foundry_8kowh40 {\n  .foundry_8kowh41 {\n    all: unset;\n  }\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/theme/dist/client/mixins/reset.css"],
        names: [],
        mappings: "AAAA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;AACF",
        sourcesContent: ["@layer foundry_8kowh40;\n@layer foundry_8kowh40 {\n  .foundry_8kowh41 {\n    all: unset;\n  }\n}"],
        sourceRoot: ""
      }]);
      const A = e
    },
    90412: (n, u, r) => {
      r.d(u, {
        A: () => A
      });
      var o = r(42587),
        f = r.n(o),
        d = r(15081),
        e = r.n(d)()(f());
      e.push([n.id, ".foundry_tdsdcd0 {\n  -webkit-font-smoothing: antialiased;\n  font-feature-settings: 'ss01' on, 'salt' on;\n}\n.foundry_tdsdcd1 {\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2y);\n  line-height: var(--foundry_nu8bkp3b);\n  font-family: var(--foundry_nu8bkp2l), var(--foundry_nu8bkp2m);\n  letter-spacing: var(--foundry_nu8bkp2r);\n}\n.foundry_tdsdcd3 {\n  font-size: var(--foundry_nu8bkp30);\n}\n.foundry_tdsdcd4 {\n  font-size: var(--foundry_nu8bkp31);\n}\n.foundry_tdsdcd5 {\n  font-size: var(--foundry_nu8bkp32);\n}\n.foundry_tdsdcd6 {\n  font-size: var(--foundry_nu8bkp33);\n}\n.foundry_tdsdcd7 {\n  font-size: var(--foundry_nu8bkp34);\n}\n.foundry_tdsdcd8 {\n  font-size: var(--foundry_nu8bkp35);\n  font-weight: var(--foundry_nu8bkp2x);\n}\n.foundry_tdsdcd9 {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp39);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdc {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdd {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp36);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcdg {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdh {\n  font-weight: var(--foundry_nu8bkp2y);\n  text-decoration-line: underline;\n}\n.foundry_tdsdcdi {\n  font-weight: var(--foundry_nu8bkp2y);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdj {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp37);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcdm {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdn {\n  font-weight: var(--foundry_nu8bkp2y);\n  text-decoration-line: underline;\n}\n.foundry_tdsdcdo {\n  font-weight: var(--foundry_nu8bkp2y);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdp {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp38);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcds {\n  font-weight: var(--foundry_nu8bkp2y);\n}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/theme/dist/client/mixins/typography.css"],
        names: [],
        mappings: "AAAA;EACE,mCAAmC;EACnC,2CAA2C;AAC7C;AACA;EACE,kBAAkB;EAClB,oCAAoC;EACpC,oCAAoC;EACpC,6DAA6D;EAC7D,uCAAuC;AACzC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kCAAkC;EAClC,oCAAoC;AACtC;AACA;EACE,6DAA6D;EAC7D,oCAAoC;EACpC,kBAAkB;EAClB,oCAAoC;EACpC,kCAAkC;EAClC,uCAAuC;EACvC,yBAAyB;AAC3B;AACA;EACE,oCAAoC;AACtC;AACA;EACE,6DAA6D;EAC7D,oCAAoC;EACpC,kBAAkB;EAClB,oCAAoC;EACpC,kCAAkC;EAClC,uCAAuC;AACzC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;EACpC,+BAA+B;AACjC;AACA;EACE,oCAAoC;EACpC,uCAAuC;EACvC,yBAAyB;AAC3B;AACA;EACE,6DAA6D;EAC7D,oCAAoC;EACpC,kBAAkB;EAClB,oCAAoC;EACpC,kCAAkC;EAClC,uCAAuC;AACzC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;EACpC,+BAA+B;AACjC;AACA;EACE,oCAAoC;EACpC,uCAAuC;EACvC,yBAAyB;AAC3B;AACA;EACE,6DAA6D;EAC7D,oCAAoC;EACpC,kBAAkB;EAClB,oCAAoC;EACpC,kCAAkC;EAClC,uCAAuC;AACzC;AACA;EACE,oCAAoC;AACtC",
        sourcesContent: [".foundry_tdsdcd0 {\n  -webkit-font-smoothing: antialiased;\n  font-feature-settings: 'ss01' on, 'salt' on;\n}\n.foundry_tdsdcd1 {\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2y);\n  line-height: var(--foundry_nu8bkp3b);\n  font-family: var(--foundry_nu8bkp2l), var(--foundry_nu8bkp2m);\n  letter-spacing: var(--foundry_nu8bkp2r);\n}\n.foundry_tdsdcd3 {\n  font-size: var(--foundry_nu8bkp30);\n}\n.foundry_tdsdcd4 {\n  font-size: var(--foundry_nu8bkp31);\n}\n.foundry_tdsdcd5 {\n  font-size: var(--foundry_nu8bkp32);\n}\n.foundry_tdsdcd6 {\n  font-size: var(--foundry_nu8bkp33);\n}\n.foundry_tdsdcd7 {\n  font-size: var(--foundry_nu8bkp34);\n}\n.foundry_tdsdcd8 {\n  font-size: var(--foundry_nu8bkp35);\n  font-weight: var(--foundry_nu8bkp2x);\n}\n.foundry_tdsdcd9 {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp39);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdc {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdd {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp36);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcdg {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdh {\n  font-weight: var(--foundry_nu8bkp2y);\n  text-decoration-line: underline;\n}\n.foundry_tdsdcdi {\n  font-weight: var(--foundry_nu8bkp2y);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdj {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp37);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcdm {\n  font-weight: var(--foundry_nu8bkp2y);\n}\n.foundry_tdsdcdn {\n  font-weight: var(--foundry_nu8bkp2y);\n  text-decoration-line: underline;\n}\n.foundry_tdsdcdo {\n  font-weight: var(--foundry_nu8bkp2y);\n  letter-spacing: var(--foundry_nu8bkp2v);\n  text-transform: uppercase;\n}\n.foundry_tdsdcdp {\n  font-family: var(--foundry_nu8bkp2n), var(--foundry_nu8bkp2o);\n  line-height: var(--foundry_nu8bkp3c);\n  font-style: normal;\n  font-weight: var(--foundry_nu8bkp2x);\n  font-size: var(--foundry_nu8bkp38);\n  letter-spacing: var(--foundry_nu8bkp2t);\n}\n.foundry_tdsdcds {\n  font-weight: var(--foundry_nu8bkp2y);\n}"],
        sourceRoot: ""
      }]);
      const A = e
    },
    58858: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/8a7bed18c779bf815ff56c24ab6207e5.woff"
    },
    78237: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/2182248632b4e44ebf3764bc8ac7aba2.woff"
    },
    25591: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/63cfc284c204bd1597bc68464e18042b.woff"
    },
    14928: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/064abecda5d2f269d95fa7fd0f340e87.woff"
    },
    78118: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ddff8a927395b3bbeb442818124b332e.woff"
    },
    74487: (n, u, r) => {
      r.d(u, {
        Cb: () => B,
        US: () => k,
        xW: () => _,
        HZ: () => c,
        X6: () => l
      });
      var o = r(53178),
        f = r.n(o),
        d = r(94566),
        e = r.n(d),
        A = r(31610),
        p = r.n(A),
        b = r(82510),
        a = r.n(b),
        y = r(19856),
        t = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      t.setAttributes = p(), t.insert = n => {
        const u = n.dataset.shadowtarget;
        u && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [u]: n
          }
        })
      }, t.domAPI = e(), t.insertStyleElement = a(), f()(y.A, t), y.A && y.A.locals && y.A.locals;
      var B = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        k = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        _ = {
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        c = "--foundry_nu8bkp0",
        l = "foundry_nu8bkp1"
    },
    76430: (n, u, r) => {
      r.d(u, {
        UP: () => A,
        ic: () => y,
        qn: () => s,
        Pt: () => C,
        Rv: () => l,
        iQ: () => k,
        Mk: () => B,
        UQ: () => a,
        gr: () => _,
        Ub: () => d,
        jt: () => p,
        ZC: () => e,
        rl: () => c
      });
      var o = r(51838),
        f = r(62229);

      function d(n, {
        defaultValue: u = !1,
        initializeWithValue: r = !0
      } = {}) {
        const d = n => o.X || !window.matchMedia ? u : window.matchMedia(n).matches,
          [e, A] = (0, f.useState)((() => r ? d(n) : u));

        function p() {
          A(d(n))
        }
        return (0, f.useEffect)((() => {
          const u = window.matchMedia?.(n);
          return p(), u?.addListener ? u?.addListener(p) : u?.addEventListener("change", p), () => {
            u?.removeListener ? u?.removeListener(p) : u?.removeEventListener("change", p)
          }
        }), [n]), e
      }

      function e(n) {
        const u = (0, f.useRef)({
            value: n,
            prev: void 0
          }),
          r = u.current.value;
        return n !== r && (u.current = {
          value: n,
          prev: r
        }), u.current.prev
      }

      function A(...n) {
        const u = (0, f.useRef)(null);
        return u.current || (u.current = u => {
          n.forEach((n => {
            "function" == typeof n ? n(u) : null != n && (n.current = u)
          }))
        }), u.current
      }
      const p = () => d("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function b(n) {
        const u = (0, f.useRef)(n);
        return (0, f.useEffect)((() => {
          u.current = n
        })), (0, f.useMemo)((() => (...n) => u.current?.(...n)), [])
      }
      const a = ({
        activity: n,
        leave: u,
        enabled: r = !0
      }) => {
        const o = (0, f.useRef)(),
          [d, e] = (0, f.useState)(!1),
          A = (0, f.useCallback)((() => {
            e(!0)
          }), []),
          p = (0, f.useCallback)(((u, r) => {
            let f = 0;
            return (...u) => {
              const r = Date.now();
              r - f >= 500 && (f = r, (() => {
                e(!1), window.clearTimeout(o.current), o.current = window.setTimeout(A, n)
              })(...u))
            }
          })(), []),
          b = (0, f.useCallback)((() => {
            window.clearTimeout(o.current), o.current = window.setTimeout(A, u)
          }), []),
          a = (0, f.useCallback)((() => {
            document.hidden || p()
          }), []);
        return (0, f.useEffect)((() => {
          const n = () => {
            window.removeEventListener("mousemove", p), window.removeEventListener("mousedown", p), window.removeEventListener("resize", p), window.removeEventListener("keydown", p), window.removeEventListener("touchstart", p), window.removeEventListener("wheel", p), document.removeEventListener("mouseleave", b), document.removeEventListener("visibilitychange", a), window.clearTimeout(o.current), e(!1)
          };
          return r ? (window.addEventListener("mousemove", p), window.addEventListener("mousedown", p), window.addEventListener("resize", p), window.addEventListener("keydown", p), window.addEventListener("touchstart", p), window.addEventListener("wheel", p), document.addEventListener("mouseleave", b), document.addEventListener("visibilitychange", a), p()) : n(), () => n()
        }), [r]), {
          isIdle: d
        }
      };

      function y({
        prop: n,
        defaultProp: u,
        onChange: r = (() => {})
      }) {
        const [o, d] = function({
          defaultProp: n,
          onChange: u
        }) {
          const r = (0, f.useState)(n),
            [o] = r,
            d = (0, f.useRef)(o),
            e = b(u);
          return (0, f.useEffect)((() => {
            d.current !== o && (e(o), d.current = o)
          }), [o, d, e]), r
        }({
          defaultProp: u,
          onChange: r
        }), e = void 0 !== n, A = e ? n : o, p = b(r), a = (0, f.useCallback)((u => {
          if (e) {
            const r = "function" == typeof u ? u(n) : u;
            r !== n && p(r)
          } else d(u)
        }), [e, n, d, p]);
        return [A, a]
      }

      function t(n, u, r, o) {
        const d = (0, f.useRef)(u);
        (0, f.useEffect)((() => {
          d.current = u
        }), [u]), (0, f.useEffect)((() => {
          const u = r?.current ?? window;
          if (!u || !u.addEventListener) return;
          const f = n => {
            d.current(n)
          };
          return u.addEventListener(n, f, o), () => {
            u.removeEventListener(n, f, o)
          }
        }), [n, r?.current, o])
      }
      const B = ({
          enabled: n,
          ref: u
        }) => {
          const [r, o] = (0, f.useState)(!1);
          return (0, f.useEffect)((() => {
            o(!1)
          }), [u.current]), t("mouseenter", (() => {
            o(!0)
          }), u), t("mouseleave", (() => {
            o(!1)
          }), u), {
            isHovered: !!n && r
          }
        },
        k = ({
          enabled: n,
          ref: u
        }) => {
          const [r, o] = (0, f.useState)(!1);
          return (0, f.useEffect)((() => {
            o(!1)
          }), [u.current]), t("focusin", (() => {
            o(!0)
          }), u), t("focusout", (() => {
            o(!1)
          }), u), {
            isFocused: !!n && r
          }
        },
        _ = ({
          enabled: n = !0
        }) => {
          const [u, r] = (0, f.useState)(!1), [o, d] = (0, f.useState)(!1);
          return (0, f.useEffect)((() => {
            n || (r(!1), d(!1))
          }), [n]), {
            eventHandlers: {
              onLoad: () => {
                n && (d(!0), r(!1))
              },
              onAbort: () => {
                n && (d(!0), r(!1))
              },
              onError: () => {
                n && (d(!0), r(!1))
              }
            },
            error: u,
            loaded: o
          }
        };

      function c(n = !0) {
        return !!n && d("screen and (pointer: coarse) and (hover: none)")
      }
      const l = ({
          enabled: n = !0,
          latency: u = 300,
          onDoubleClick: r = (() => null),
          onSingleClick: o = (() => null)
        }) => {
          const d = (0, f.useRef)(0),
            e = (0, f.useRef)();
          return {
            handleClick: f => {
              n && (d.current += 1, e.current = setTimeout((() => {
                1 === d.current ? o(f) : 2 === d.current && r(f), d.current = 0
              }), u))
            }
          }
        },
        s = (n, u = []) => {
          const r = (0, f.useRef)(!1);
          (0, f.useEffect)((() => (r.current = !0, () => {
            r.current = !1
          })), []), (0, f.useEffect)((() => {
            r.current && n()
          }), [...u])
        };

      function C() {
        return {
          countWrappedElements: n => {
            if (!n.current) return;
            const {
              children: u
            } = n.current;
            let r = 0,
              o = 0;
            return Array.from(u).map(((n, u) => {
              const f = n.getBoundingClientRect().top,
                d = n.getBoundingClientRect().height;
              return 0 === u && (r = f, o = d), f
            })).filter((n => n >= r + o)).length
          }
        }
      }
    },
    6449: (n, u, r) => {
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(n) {
          for (var u = 1; u < arguments.length; u++) {
            var r = arguments[u];
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
          }
          return n
        }, o.apply(this, arguments)
      }
      r.d(u, {
        DX: () => e,
        xV: () => p,
        s6: () => k
      });
      var f = r(62229);

      function d(...n) {
        return u => n.forEach((n => function(n, u) {
          "function" == typeof n ? n(u) : null != n && (n.current = u)
        }(n, u)))
      }
      const e = (0, f.forwardRef)(((n, u) => {
        const {
          children: r,
          ...d
        } = n, e = f.Children.toArray(r), p = e.find(b);
        if (p) {
          const n = p.props.children,
            r = e.map((u => u === p ? f.Children.count(n) > 1 ? f.Children.only(null) : (0, f.isValidElement)(n) ? n.props.children : null : u));
          return (0, f.createElement)(A, o({}, d, {
            ref: u
          }), (0, f.isValidElement)(n) ? (0, f.cloneElement)(n, void 0, r) : null)
        }
        return (0, f.createElement)(A, o({}, d, {
          ref: u
        }), r)
      }));
      e.displayName = "Slot";
      const A = (0, f.forwardRef)(((n, u) => {
        const {
          children: r,
          ...o
        } = n;
        return (0, f.isValidElement)(r) ? (0, f.cloneElement)(r, {
          ...a(o, r.props),
          ref: u ? d(u, r.ref) : r.ref
        }) : f.Children.count(r) > 1 ? f.Children.only(null) : null
      }));
      A.displayName = "SlotClone";
      const p = ({
        children: n
      }) => (0, f.createElement)(f.Fragment, null, n);

      function b(n) {
        return (0, f.isValidElement)(n) && n.type === p
      }

      function a(n, u) {
        const r = {
          ...u
        };
        for (const o in u) {
          const f = n[o],
            d = u[o];
          /^on[A-Z]/.test(o) ? f && d ? r[o] = (...n) => {
            d(...n), f(...n)
          } : f && (r[o] = f) : "style" === o ? r[o] = {
            ...f,
            ...d
          } : "className" === o && (r[o] = [f, d].filter(Boolean).join(" "))
        }
        return {
          ...n,
          ...r
        }
      }
      var y = r(73855);
      r(44853);
      const t = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((n, u) => {
          const r = (0, f.forwardRef)(((n, r) => {
            const {
              asChild: d,
              ...A
            } = n, p = d ? e : u;
            return (0, f.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, f.createElement)(p, o({}, A, {
              ref: r
            }))
          }));
          return r.displayName = `Primitive.${u}`, {
            ...n,
            [u]: r
          }
        }), {}),
        B = (0, f.forwardRef)(((n, u) => (0, f.createElement)(t.span, o({}, n, {
          ref: u,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...n.style
          }
        })))),
        k = ({
          enabled: n = !0,
          ...u
        }) => {
          const r = n ? B : f.Fragment;
          return (0, y.jsx)(r, {
            ...u
          })
        }
    },
    23476: (n, u, r) => {
      r.d(u, {
        NP: () => uu,
        Ym: () => Zn,
        DP: () => Xn
      });
      var o = r(73855),
        f = r(53178),
        d = r.n(f),
        e = r(94566),
        A = r.n(e),
        p = r(31610),
        b = r.n(p),
        a = r(82510),
        y = r.n(a),
        t = r(53994),
        B = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      B.setAttributes = b(), B.insert = n => {
        const u = n.dataset.shadowtarget;
        u && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [u]: n
          }
        })
      }, B.domAPI = A(), B.insertStyleElement = y(), d()(t.A, B), t.A && t.A.locals && t.A.locals;
      var k = r(96619),
        _ = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      _.setAttributes = b(), _.insert = n => {
        const u = n.dataset.shadowtarget;
        u && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [u]: n
          }
        })
      }, _.domAPI = A(), _.insertStyleElement = y(), d()(k.A, _), k.A && k.A.locals && k.A.locals;
      var c = r(56108),
        l = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      l.setAttributes = b(), l.insert = n => {
        const u = n.dataset.shadowtarget;
        u && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [u]: n
          }
        })
      }, l.domAPI = A(), l.insertStyleElement = y(), d()(c.A, l), c.A && c.A.locals && c.A.locals;
      var s = r(90412),
        C = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      C.setAttributes = b(), C.insert = n => {
        const u = n.dataset.shadowtarget;
        u && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [u]: n
          }
        })
      }, C.domAPI = A(), C.insertStyleElement = y(), d()(s.A, C), s.A && s.A.locals && s.A.locals;
      var i = {},
        E = r(67094),
        v = r.n(E);
      class h {
        constructor(n) {
          const {
            failure: u,
            gotoFn: r,
            output: o
          } = this._buildTables(n);
          this.gotoFn = r, this.output = o, this.failure = u
        }
        _buildTables(n) {
          const u = {
              0: {}
            },
            r = {};
          let o = 0;
          for (const f of n) {
            let n = 0;
            for (const d of f) u[n] && d in u[n] ? n = u[n][d] : (o++, u[n][d] = o, u[o] = {}, n = o, r[o] = []);
            r[n].push(f)
          }
          const f = {},
            d = [];
          for (const n in u[0]) {
            const r = u[0][n];
            f[r] = 0, d.push(r)
          }
          for (; d.length > 0;) {
            const n = d.shift();
            if (void 0 !== n)
              for (const o in u[n]) {
                const e = u[n][o];
                d.push(e);
                let A = f[n];
                for (; A > 0 && !(o in u[A]);) A = f[A];
                if (o in u[A]) {
                  const n = u[A][o];
                  f[e] = n, r[e] = [...r[e], ...r[n]]
                } else f[e] = 0
              }
          }
          return {
            gotoFn: u,
            output: r,
            failure: f
          }
        }
        search(n) {
          let u = 0;
          const r = [];
          for (let o = 0; o < n.length; o++) {
            const f = n[o];
            for (; u > 0 && !(f in this.gotoFn[u]);) u = this.failure[u];
            if (f in this.gotoFn[u] && (u = this.gotoFn[u][f], this.output[u].length > 0)) {
              const n = this.output[u];
              r.push([o, n])
            }
          }
          return r
        }
      }
      var m, g, w = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        x = !1;

      function D(n, u) {
        return u || (u = n.slice(0)), Object.freeze(Object.defineProperties(n, {
          raw: {
            value: Object.freeze(u)
          }
        }))
      }! function(n) {
        n.Attribute = "attribute", n.Pseudo = "pseudo", n.PseudoElement = "pseudo-element", n.Tag = "tag", n.Universal = "universal", n.Adjacent = "adjacent", n.Child = "child", n.Descendant = "descendant", n.Parent = "parent", n.Sibling = "sibling", n.ColumnCombinator = "column-combinator"
      }(m || (m = {})),
      function(n) {
        n.Any = "any", n.Element = "element", n.End = "end", n.Equals = "equals", n.Exists = "exists", n.Hyphen = "hyphen", n.Not = "not", n.Start = "start"
      }(g || (g = {}));
      const q = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        O = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        S = new Map([
          [126, g.Element],
          [94, g.Start],
          [36, g.End],
          [42, g.Any],
          [33, g.Not],
          [124, g.Hyphen]
        ]),
        j = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        z = new Set(["contains", "icontains"]);

      function L(n, u, r) {
        const o = parseInt(u, 16) - 65536;
        return o != o || r ? u : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
      }

      function R(n) {
        return n.replace(O, L)
      }

      function P(n) {
        return 39 === n || 34 === n
      }

      function I(n) {
        return 32 === n || 9 === n || 10 === n || 12 === n || 13 === n
      }

      function F(n) {
        const u = [],
          r = M(u, `${n}`, 0);
        if (r < n.length) throw new Error(`Unmatched selector: ${n.slice(r)}`);
        return u
      }

      function M(n, u, r) {
        let o = [];

        function f(n) {
          const o = u.slice(r + n).match(q);
          if (!o) throw new Error(`Expected name, found ${u.slice(r)}`);
          const [f] = o;
          return r += n + f.length, R(f)
        }

        function d(n) {
          for (r += n; r < u.length && I(u.charCodeAt(r));) r++
        }

        function e() {
          const n = r += 1;
          let o = 1;
          for (; o > 0 && r < u.length; r++) 40 !== u.charCodeAt(r) || A(r) ? 41 !== u.charCodeAt(r) || A(r) || o-- : o++;
          if (o) throw new Error("Parenthesis not matched");
          return R(u.slice(n, r - 1))
        }

        function A(n) {
          let r = 0;
          for (; 92 === u.charCodeAt(--n);) r++;
          return 1 == (1 & r)
        }

        function p() {
          if (o.length > 0 && function(n) {
              switch (n.type) {
                case m.Adjacent:
                case m.Child:
                case m.Descendant:
                case m.Parent:
                case m.Sibling:
                case m.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(o[o.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function b(n) {
          o.length > 0 && o[o.length - 1].type === m.Descendant ? o[o.length - 1].type = n : (p(), o.push({
            type: n
          }))
        }

        function a(n, u) {
          o.push({
            type: m.Attribute,
            name: n,
            action: u,
            value: f(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function y() {
          if (o.length && o[o.length - 1].type === m.Descendant && o.pop(), 0 === o.length) throw new Error("Empty sub-selector");
          n.push(o)
        }
        if (d(0), u.length === r) return r;
        n: for (; r < u.length;) {
          const n = u.charCodeAt(r);
          switch (n) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== o.length && o[0].type === m.Descendant || (p(), o.push({
                type: m.Descendant
              })), d(1);
              break;
            case 62:
              b(m.Child), d(1);
              break;
            case 60:
              b(m.Parent), d(1);
              break;
            case 126:
              b(m.Sibling), d(1);
              break;
            case 43:
              b(m.Adjacent), d(1);
              break;
            case 46:
              a("class", g.Element);
              break;
            case 35:
              a("id", g.Equals);
              break;
            case 91: {
              let n;
              d(1);
              let e = null;
              124 === u.charCodeAt(r) ? n = f(1) : u.startsWith("*|", r) ? (e = "*", n = f(2)) : (n = f(0), 124 === u.charCodeAt(r) && 61 !== u.charCodeAt(r + 1) && (e = n, n = f(1))), d(0);
              let p = g.Exists;
              const b = S.get(u.charCodeAt(r));
              if (b) {
                if (p = b, 61 !== u.charCodeAt(r + 1)) throw new Error("Expected `=`");
                d(2)
              } else 61 === u.charCodeAt(r) && (p = g.Equals, d(1));
              let a = "",
                y = null;
              if ("exists" !== p) {
                if (P(u.charCodeAt(r))) {
                  const n = u.charCodeAt(r);
                  let o = r + 1;
                  for (; o < u.length && (u.charCodeAt(o) !== n || A(o));) o += 1;
                  if (u.charCodeAt(o) !== n) throw new Error("Attribute value didn't end");
                  a = R(u.slice(r + 1, o)), r = o + 1
                } else {
                  const n = r;
                  for (; r < u.length && (!I(u.charCodeAt(r)) && 93 !== u.charCodeAt(r) || A(r));) r += 1;
                  a = R(u.slice(n, r))
                }
                d(0);
                const n = 32 | u.charCodeAt(r);
                115 === n ? (y = !1, d(1)) : 105 === n && (y = !0, d(1))
              }
              if (93 !== u.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const t = {
                type: m.Attribute,
                name: n,
                action: p,
                value: a,
                namespace: e,
                ignoreCase: y
              };
              o.push(t);
              break
            }
            case 58: {
              if (58 === u.charCodeAt(r + 1)) {
                o.push({
                  type: m.PseudoElement,
                  name: f(2).toLowerCase(),
                  data: 40 === u.charCodeAt(r) ? e() : null
                });
                continue
              }
              const n = f(1).toLowerCase();
              let d = null;
              if (40 === u.charCodeAt(r))
                if (j.has(n)) {
                  if (P(u.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${n} cannot be quoted`);
                  if (d = [], r = M(d, u, r + 1), 41 !== u.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${n} (${u})`);
                  r += 1
                } else {
                  if (d = e(), z.has(n)) {
                    const n = d.charCodeAt(0);
                    n === d.charCodeAt(d.length - 1) && P(n) && (d = d.slice(1, -1))
                  }
                  d = R(d)
                } o.push({
                type: m.Pseudo,
                name: n,
                data: d
              });
              break
            }
            case 44:
              y(), o = [], d(1);
              break;
            default: {
              if (u.startsWith("/*", r)) {
                const n = u.indexOf("*/", r + 2);
                if (n < 0) throw new Error("Comment was not terminated");
                r = n + 2, 0 === o.length && d(0);
                break
              }
              let e, A = null;
              if (42 === n) r += 1, e = "*";
              else if (124 === n) {
                if (e = "", 124 === u.charCodeAt(r + 1)) {
                  b(m.ColumnCombinator), d(2);
                  break
                }
              } else {
                if (!q.test(u.slice(r))) break n;
                e = f(0)
              }
              124 === u.charCodeAt(r) && 124 !== u.charCodeAt(r + 1) && (A = e, 42 === u.charCodeAt(r + 1) ? (e = "*", r += 2) : e = f(1)), o.push("*" === e ? {
                type: m.Universal,
                namespace: A
              } : {
                type: m.Tag,
                name: e,
                namespace: A
              })
            }
          }
        }
        return y(), r
      }

      function N(n, u) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          u && (o = o.filter((function(u) {
            return Object.getOwnPropertyDescriptor(n, u).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function T(n) {
        for (var u = 1; u < arguments.length; u++) {
          var r = null != arguments[u] ? arguments[u] : {};
          u % 2 ? N(Object(r), !0).forEach((function(u) {
            H(n, u, r[u])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(u) {
            Object.defineProperty(n, u, Object.getOwnPropertyDescriptor(r, u))
          }))
        }
        return n
      }

      function H(n, u, r) {
        return (u = function(n) {
          var u = function(n, u) {
            if ("object" != typeof n || null === n) return n;
            var r = n[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(n, "string");
              if ("object" != typeof o) return o;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(n)
          }(n);
          return "symbol" == typeof u ? u : String(u)
        }(u)) in n ? Object.defineProperty(n, u, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : n[u] = r, n
      }
      const U = function n(u) {
          return r.withOptions = r => n(T(T({}, u), r)), r;

          function r(n, ...r) {
            const o = "string" == typeof n ? [n] : n.raw,
              {
                escapeSpecialCharacters: f = Array.isArray(n)
              } = u;
            let d = "";
            for (let n = 0; n < o.length; n++) {
              let u = o[n];
              f && (u = u.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), d += u, n < r.length && (d += r[n])
            }
            const e = d.split("\n");
            let A = null;
            for (const n of e) {
              const u = n.match(/^(\s+)\S+/);
              if (u) {
                const n = u[1].length;
                A = A ? Math.min(A, n) : n
              }
            }
            if (null !== A) {
              const n = A;
              d = e.map((u => " " === u[0] || "\t" === u[0] ? u.slice(n) : u)).join("\n")
            }
            return d = d.trim(), f && (d = d.replace(/\\n/g, "\n")), d
          }
        }({}),
        $ = U;
      var W = function() {
        return W = Object.assign || function(n) {
          for (var u, r = 1, o = arguments.length; r < o; r++)
            for (var f in u = arguments[r]) Object.prototype.hasOwnProperty.call(u, f) && (n[f] = u[f]);
          return n
        }, W.apply(this, arguments)
      };

      function G(n, u) {
        var r = {};
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && u.indexOf(o) < 0 && (r[o] = n[o]);
        if (null != n && "function" == typeof Object.getOwnPropertySymbols) {
          var f = 0;
          for (o = Object.getOwnPropertySymbols(n); f < o.length; f++) u.indexOf(o[f]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[f]) && (r[o[f]] = n[o[f]])
        }
        return r
      }

      function K(n, u) {
        var r = "function" == typeof Symbol && n[Symbol.iterator];
        if (!r) return n;
        var o, f, d = r.call(n),
          e = [];
        try {
          for (;
            (void 0 === u || u-- > 0) && !(o = d.next()).done;) e.push(o.value)
        } catch (n) {
          f = {
            error: n
          }
        } finally {
          try {
            o && !o.done && (r = d.return) && r.call(d)
          } finally {
            if (f) throw f.error
          }
        }
        return e
      }
      var V, X = /(\u000D|\u000C|\u000D\u000A)/g,
        Z = /[\u0000\uD800-\uDFFF]/g,
        Q = /(\/\*)[\s\S]*?(\*\/)/g,
        Y = function(n, u) {
          if (n.length <= u + 1) return null;
          for (var r = n.charCodeAt(u), o = [], f = u + 1; f < n.length; f += 1) {
            var d = n.charCodeAt(f);
            if (d === r) return [f, String.fromCharCode.apply(null, o)];
            if (92 === d) {
              var e = nn(n, f);
              if (null === e) return null;
              var A = K(e, 2),
                p = A[0],
                b = A[1];
              o.push(b), f = p
            } else {
              if (10 === d) return null;
              o.push(d)
            }
          }
          return null
        },
        J = function(n, u) {
          if (n.length <= u) return !1;
          var r, o = n.charCodeAt(u);
          return 45 === o ? !(n.length <= u + 1) && (45 === (r = n.charCodeAt(u + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(n.length <= u + 2) && 10 !== n.charCodeAt(u + 2)) : 95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128 || 92 === o && !(n.length <= u + 1) && 10 !== (r = n.charCodeAt(u + 1))
        },
        nn = function(n, u) {
          if (n.length <= u + 1) return null;
          if (92 !== n.charCodeAt(u)) return null;
          var r = n.charCodeAt(u + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var o = [r], f = Math.min(u + 7, n.length), d = u + 2; d < f; d += 1) {
              var e = n.charCodeAt(d);
              if (!(e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102)) break;
              o.push(e)
            }
            if (d < n.length) {
              var A = n.charCodeAt(d);
              9 !== A && 32 !== A && 10 !== A || (d += 1)
            }
            return [d - 1, parseInt(String.fromCharCode.apply(null, o), 16)]
          }
          return [u + 1, r]
        },
        un = function(n, u) {
          var r = rn(n, u);
          if (null === r) return null;
          var o = K(r, 3),
            f = o[0],
            d = o[1],
            e = o[2],
            A = fn(n, f + 1);
          if (null !== A) {
            var p = K(A, 2);
            return [p[0],
              ["<dimension-token>", d, p[1]]
            ]
          }
          return f + 1 < n.length && 37 === n.charCodeAt(f + 1) ? [f + 1, ["<percentage-token>", d]] : [f, ["<number-token>", d, e]]
        },
        rn = function(n, u) {
          if (n.length <= u) return null;
          var r = "integer",
            o = [],
            f = n.charCodeAt(u);
          for (43 !== f && 45 !== f || (u += 1, 45 === f && o.push(45)); u < n.length && ((b = n.charCodeAt(u)) >= 48 && b <= 57);) o.push(b), u += 1;
          if (u + 1 < n.length) {
            var d = n.charCodeAt(u),
              e = n.charCodeAt(u + 1);
            if (46 === d && e >= 48 && e <= 57)
              for (o.push(d, e), r = "number", u += 2; u < n.length && ((b = n.charCodeAt(u)) >= 48 && b <= 57);) o.push(b), u += 1
          }
          if (u + 1 < n.length) {
            d = n.charCodeAt(u), e = n.charCodeAt(u + 1);
            var A = n.charCodeAt(u + 2);
            if (69 === d || 101 === d) {
              var p = e >= 48 && e <= 57;
              if (p || (43 === e || 45 === e) && A >= 48 && A <= 57)
                for (r = "number", p ? (o.push(69, e), u += 2) : 45 === e ? (o.push(69, 45, A), u += 3) : (o.push(69, A), u += 3); u < n.length;) {
                  var b;
                  if (!((b = n.charCodeAt(u)) >= 48 && b <= 57)) break;
                  o.push(b), u += 1
                }
            }
          }
          var a = String.fromCharCode.apply(null, o),
            y = "number" === r ? parseFloat(a) : parseInt(a);
          return -0 === y && (y = 0), Number.isNaN(y) ? null : [u - 1, y, r]
        },
        on = function(n, u) {
          if (n.length <= u) return null;
          for (var r = [], o = n.charCodeAt(u); u < n.length; o = n.charCodeAt(++u))
            if (45 === o || 95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128 || o >= 48 && o <= 57) r.push(o);
            else {
              var f = nn(n, u);
              if (null === f) break;
              var d = K(f, 2),
                e = d[0],
                A = d[1];
              r.push(A), u = e
            } return 0 === u ? null : [u - 1, String.fromCharCode.apply(null, r)]
        },
        fn = function(n, u) {
          if (n.length <= u || !J(n, u)) return null;
          for (var r = [], o = n.charCodeAt(u); u < n.length; o = n.charCodeAt(++u))
            if (45 === o || 95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128 || o >= 48 && o <= 57) r.push(o);
            else {
              var f = nn(n, u);
              if (null === f) break;
              var d = K(f, 2),
                e = d[0],
                A = d[1];
              r.push(A), u = e
            } return [u - 1, String.fromCharCode.apply(null, r)]
        },
        dn = function(n, u) {
          for (var r = n.charCodeAt(u); 9 === r || 32 === r || 10 === r;) r = n.charCodeAt(++u);
          for (var o = [], f = !1; u < n.length;) {
            if (41 === r) return [u, String.fromCharCode.apply(null, o)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) f || 0 === o.length || (f = !0);
            else if (92 === r) {
              var d = nn(n, u);
              if (null === d || f) return null;
              var e = K(d, 2),
                A = e[0],
                p = e[1];
              o.push(p), u = A
            } else {
              if (f) return null;
              o.push(r)
            }
            r = n.charCodeAt(++u)
          }
          return null
        },
        en = function(n, u) {
          var r = fn(n, u);
          if (null === r) return null;
          var o = K(r, 2),
            f = o[0],
            d = o[1];
          if ("url" === d.toLowerCase()) {
            if (n.length > f + 1 && 40 === n.charCodeAt(f + 1)) {
              for (var e = 2; f + e < n.length; e += 1) {
                var A = n.charCodeAt(f + e);
                if (34 === A || 39 === A) return [f + 1, d.toLowerCase(), "<function-token>"];
                if (9 !== A && 32 !== A && 10 !== A) {
                  var p = dn(n, f + e);
                  if (null === p) return null;
                  var b = K(p, 2);
                  return [b[0], b[1], "<url-token>"]
                }
              }
              return [f + 1, d.toLowerCase(), "<function-token>"]
            }
          } else if (n.length > f + 1 && 40 === n.charCodeAt(f + 1)) return [f + 1, d.toLowerCase(), "<function-token>"];
          return [f, d.toLowerCase(), "<ident-token>"]
        },
        An = function(n) {
          if (null === n.mediaCondition) return n;
          var u = pn(n.mediaCondition);
          return null === u.operator && 1 === u.children.length && "children" in u.children[0] && (u = u.children[0]), {
            mediaPrefix: n.mediaPrefix,
            mediaType: n.mediaType,
            mediaCondition: u
          }
        },
        pn = function n(u) {
          for (var r = u.children.length - 1; r >= 0; r--) {
            var o = u.children[r];
            if (!("context" in o)) {
              var f = n(o);
              if (null === f.operator && 1 === f.children.length) u.children[r] = f.children[0];
              else if (f.operator === u.operator && ("and" === f.operator || "or" === f.operator)) {
                for (var d = [r, 1], e = 0; e < f.children.length; e++) d.push(f.children[e]);
                u.children.splice.apply(u.children, d)
              }
            }
          }
          return u
        },
        bn = function(n, u) {
          return u instanceof Error ? new Error("".concat(u.message.trim(), "\n").concat(n.trim())) : new Error(n.trim())
        },
        an = function(n) {
          var u = function(n, u) {
            void 0 === u && (u = 0), n = (n = n.replace(X, "\n").replace(Z, "�")).replace(Q, "");
            for (var r = []; u < n.length; u += 1) {
              var o = n.charCodeAt(u);
              if (9 === o || 32 === o || 10 === o) {
                for (var f = n.charCodeAt(++u); 9 === f || 32 === f || 10 === f;) f = n.charCodeAt(++u);
                u -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === o) {
                if (null === (g = Y(n, u))) return null;
                var d = K(g, 2),
                  e = d[0],
                  A = d[1];
                r.push({
                  type: "<string-token>",
                  value: A
                }), u = e
              } else if (35 === o) {
                if (u + 1 < n.length && (95 === (k = n.charCodeAt(u + 1)) || k >= 65 && k <= 90 || k >= 97 && k <= 122 || k >= 128 || k >= 48 && k <= 57 || 92 === k && u + 2 < n.length && 10 !== n.charCodeAt(u + 2))) {
                  var p = J(n, u + 1) ? "id" : "unrestricted";
                  if (null !== (g = on(n, u + 1))) {
                    var b = K(g, 2);
                    e = b[0], A = b[1], r.push({
                      type: "<hash-token>",
                      value: A.toLowerCase(),
                      flag: p
                    }), u = e;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (39 === o) {
                if (null === (g = Y(n, u))) return null;
                var a = K(g, 2);
                e = a[0], A = a[1], r.push({
                  type: "<string-token>",
                  value: A
                }), u = e
              } else if (40 === o) r.push({
                type: "<(-token>"
              });
              else if (41 === o) r.push({
                type: "<)-token>"
              });
              else if (43 === o) {
                var y = un(n, u);
                if (null === y) r.push({
                  type: "<delim-token>",
                  value: o
                });
                else {
                  var t = K(y, 2);
                  e = t[0], "<dimension-token>" === (h = t[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: h[1],
                    unit: h[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === h[0] ? r.push({
                    type: h[0],
                    value: h[1],
                    flag: h[2]
                  }) : r.push({
                    type: h[0],
                    value: h[1],
                    flag: "number"
                  }), u = e
                }
              } else if (44 === o) r.push({
                type: "<comma-token>"
              });
              else if (45 === o) {
                if (null !== (s = un(n, u))) {
                  var B = K(s, 2);
                  e = B[0], "<dimension-token>" === (h = B[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: h[1],
                    unit: h[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === h[0] ? r.push({
                    type: h[0],
                    value: h[1],
                    flag: h[2]
                  }) : r.push({
                    type: h[0],
                    value: h[1],
                    flag: "number"
                  }), u = e;
                  continue
                }
                if (u + 2 < n.length) {
                  var k = n.charCodeAt(u + 1),
                    _ = n.charCodeAt(u + 2);
                  if (45 === k && 62 === _) {
                    r.push({
                      type: "<CDC-token>"
                    }), u += 2;
                    continue
                  }
                }
                if (null !== (g = en(n, u))) {
                  var c = K(g, 3),
                    l = (e = c[0], A = c[1], c[2]);
                  r.push({
                    type: l,
                    value: A
                  }), u = e;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (46 === o) {
                var s;
                if (null !== (s = un(n, u))) {
                  var C = K(s, 2);
                  e = C[0], "<dimension-token>" === (h = C[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: h[1],
                    unit: h[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === h[0] ? r.push({
                    type: h[0],
                    value: h[1],
                    flag: h[2]
                  }) : r.push({
                    type: h[0],
                    value: h[1],
                    flag: "number"
                  }), u = e;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (58 === o) r.push({
                type: "<colon-token>"
              });
              else if (59 === o) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === o) {
                if (u + 3 < n.length) {
                  k = n.charCodeAt(u + 1), _ = n.charCodeAt(u + 2);
                  var i = n.charCodeAt(u + 3);
                  if (33 === k && 45 === _ && 45 === i) {
                    r.push({
                      type: "<CDO-token>"
                    }), u += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (64 === o) {
                if (null !== (g = fn(n, u + 1))) {
                  var E = K(g, 2);
                  e = E[0], A = E[1], r.push({
                    type: "<at-keyword-token>",
                    value: A.toLowerCase()
                  }), u = e;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: o
                })
              } else if (91 === o) r.push({
                type: "<[-token>"
              });
              else if (92 === o) {
                if (null === (g = nn(n, u))) return null;
                var v = K(g, 2);
                e = v[0], A = v[1], n = n.slice(0, u) + A + n.slice(e + 1), u -= 1
              } else if (93 === o) r.push({
                type: "<]-token>"
              });
              else if (123 === o) r.push({
                type: "<{-token>"
              });
              else if (125 === o) r.push({
                type: "<}-token>"
              });
              else if (o >= 48 && o <= 57) {
                var h, m = K(g = un(n, u), 2);
                e = m[0], "<dimension-token>" === (h = m[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: h[1],
                  unit: h[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === h[0] ? r.push({
                  type: h[0],
                  value: h[1],
                  flag: h[2]
                }) : r.push({
                  type: h[0],
                  value: h[1],
                  flag: "number"
                }), u = e
              } else if (95 === o || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o >= 128) {
                var g;
                if (null === (g = en(n, u))) return null;
                var w = K(g, 3);
                e = w[0], A = w[1], l = w[2], r.push({
                  type: l,
                  value: A
                }), u = e
              } else r.push({
                type: "<delim-token>",
                value: o
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(n.trim());
          if (null === u) throw bn("Failed tokenizing");
          var r = 0,
            o = u.length - 1;
          if ("<at-keyword-token>" === u[0].type && "media" === u[0].value) {
            if ("<whitespace-token>" !== u[1].type) throw bn("Expected whitespace after media");
            r = 2;
            for (var f = 2; f < u.length - 1; f++) {
              var d = u[f];
              if ("<{-token>" === d.type) {
                o = f;
                break
              }
              if ("<semicolon-token>" === d.type) throw bn("Expected '{' in media query but found ';'")
            }
          }
          return u = u.slice(r, o), tn(u)
        },
        yn = function(n) {
          for (var u = [], r = !1, o = 0; o < n.length; o++) "<whitespace-token>" === n[o].type ? (r = !0, u.length > 0 && (u[u.length - 1].wsAfter = !0)) : (u.push(W(W({}, n[o]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return u
        },
        tn = function(n) {
          for (var u, r, o = [
              []
            ], f = 0; f < n.length; f++) {
            var d = n[f];
            "<comma-token>" === d.type ? o.push([]) : o[o.length - 1].push(d)
          }
          var e = o.map(yn);
          if (1 === e.length && 0 === e[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var A = e.map((function(n) {
              return 0 === n.length ? null : Bn(n)
            })),
            p = [];
          try {
            for (var b = function(n) {
                var u = "function" == typeof Symbol && Symbol.iterator,
                  r = u && n[u],
                  o = 0;
                if (r) return r.call(n);
                if (n && "number" == typeof n.length) return {
                  next: function() {
                    return n && o >= n.length && (n = void 0), {
                      value: n && n[o++],
                      done: !n
                    }
                  }
                };
                throw new TypeError(u ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(A), a = b.next(); !a.done; a = b.next()) {
              var y = a.value;
              null !== y && p.push(y)
            }
          } catch (n) {
            u = {
              error: n
            }
          } finally {
            try {
              a && !a.done && (r = b.return) && r.call(b)
            } finally {
              if (u) throw u.error
            }
          }
          if (0 === p.length) throw bn("No valid media queries");
          return p
        },
        Bn = function(n) {
          var u = n[0];
          if ("<(-token>" === u.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: kn(n, !0)
            }
          } catch (n) {
            throw bn("Expected media condition after '('", n)
          } else {
            if ("<ident-token>" !== u.type) throw bn("Expected media condition or media prefix");
            var r = null,
              o = void 0,
              f = u.value;
            "only" !== f && "not" !== f || (r = f);
            var d = null === r ? 0 : 1;
            if (n.length <= d) throw bn("Expected extra token in media query");
            var e = n[d];
            if ("<ident-token>" === e.type) {
              var A = e.value;
              if ("all" === A) o = "all";
              else if ("print" === A || "screen" === A) o = A;
              else {
                if ("tty" !== A && "tv" !== A && "projection" !== A && "handheld" !== A && "braille" !== A && "embossed" !== A && "aural" !== A && "speech" !== A) throw bn("Unknown ident '".concat(A, "' in media query"));
                r = "not" === r ? null : "not", o = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== e.type) throw bn("Invalid media query");
              var p = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              p.push.apply(p, n), p.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: kn(p, !0)
                }
              } catch (n) {
                throw bn("Expected media condition after '('", n)
              }
            }
            if (d + 1 === n.length) return {
              mediaPrefix: r,
              mediaType: o,
              mediaCondition: null
            };
            if (!(d + 4 < n.length)) throw bn("Expected media condition after media prefix");
            var b = n[d + 1];
            if ("<ident-token>" !== b.type || "and" !== b.value) throw bn("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: o,
                mediaCondition: kn(n.slice(d + 2), !1)
              }
            } catch (n) {
              throw bn("Expected media condition after 'and'", n)
            }
          }
        },
        kn = function n(u, r, o) {
          if (void 0 === o && (o = null), u.length < 3 || "<(-token>" !== u[0].type || "<)-token>" !== u[u.length - 1].type) throw new Error("Invalid media condition");
          for (var f, d = u.length - 1, e = 0, A = 0, p = 0; p < u.length; p++) {
            var b = u[p];
            if ("<(-token>" === b.type ? (A += 1, e = Math.max(e, A)) : "<)-token>" === b.type && (A -= 1), 0 === A) {
              d = p;
              break
            }
          }
          if (0 !== A) throw new Error("Mismatched parens\nInvalid media condition");
          var a = u.slice(0, d + 1);
          if (f = 1 === e ? _n(a) : "<ident-token>" === a[1].type && "not" === a[1].value ? n(a.slice(2, -1), !0, "not") : n(a.slice(1, -1), !0), d === u.length - 1) return {
            operator: o,
            children: [f]
          };
          var y = u[d + 1];
          if ("<ident-token>" !== y.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== o && o !== y.value) throw new Error("'".concat(y.value, "' and '").concat(o, "' must not be at same level\nInvalid media condition"));
          if ("or" === y.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== y.value && "or" !== y.value) throw new Error("Invalid operator: '".concat(y.value, "'\nInvalid media condition"));
          var t = n(u.slice(d + 2), r, y.value);
          return {
            operator: y.value,
            children: [f].concat(t.children)
          }
        },
        _n = function(n) {
          if (n.length < 3 || "<(-token>" !== n[0].type || "<)-token>" !== n[n.length - 1].type) throw new Error("Invalid media feature");
          for (var u = [n[0]], r = 1; r < n.length; r++) {
            if (r < n.length - 2) {
              var o = n[r],
                f = n[r + 1],
                d = n[r + 2];
              if ("<number-token>" === o.type && o.value > 0 && "<delim-token>" === f.type && 47 === f.value && "<number-token>" === d.type && d.value > 0) {
                u.push({
                  type: "<ratio-token>",
                  numerator: o.value,
                  denominator: d.value,
                  wsBefore: o.wsBefore,
                  wsAfter: d.wsAfter
                }), r += 2;
                continue
              }
            }
            u.push(n[r])
          }
          var e = u[1];
          if ("<ident-token>" === e.type && 3 === u.length) return {
            context: "boolean",
            feature: e.value
          };
          if (5 === u.length && "<ident-token>" === u[1].type && "<colon-token>" === u[2].type) {
            var A = u[3];
            if ("<number-token>" === A.type || "<dimension-token>" === A.type || "<ratio-token>" === A.type || "<ident-token>" === A.type) {
              var p = u[1].value,
                b = null,
                a = p.slice(0, 4);
              return "min-" === a ? (b = "min", p = p.slice(4)) : "max-" === a && (b = "max", p = p.slice(4)), A.wsBefore, A.wsAfter, {
                context: "value",
                prefix: b,
                feature: p,
                value: G(A, ["wsBefore", "wsAfter"])
              }
            }
          } else if (u.length >= 5) try {
            var y = cn(u);
            return {
              context: "range",
              feature: y.featureName,
              range: y
            }
          } catch (n) {
            throw bn("Invalid media feature", n)
          }
          throw new Error("Invalid media feature")
        },
        cn = function(n) {
          var u, r, o, f;
          if (n.length < 5 || "<(-token>" !== n[0].type || "<)-token>" !== n[n.length - 1].type) throw new Error("Invalid range");
          var d = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            e = "<number-token>" === n[1].type || "<dimension-token>" === n[1].type || "<ratio-token>" === n[1].type || "<ident-token>" === n[1].type && "infinite" === n[1].value;
          if ("<delim-token>" === n[2].type) {
            if (60 === n[2].value) "<delim-token>" !== n[3].type || 61 !== n[3].value || n[3].wsBefore ? d[e ? "leftOp" : "rightOp"] = "<" : d[e ? "leftOp" : "rightOp"] = "<=";
            else if (62 === n[2].value) "<delim-token>" !== n[3].type || 61 !== n[3].value || n[3].wsBefore ? d[e ? "leftOp" : "rightOp"] = ">" : d[e ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== n[2].value) throw new Error("Invalid range");
              d[e ? "leftOp" : "rightOp"] = "="
            }
            if (e) d.leftToken = n[1];
            else {
              if ("<ident-token>" !== n[1].type) throw new Error("Invalid range");
              d.featureName = n[1].value
            }
            var A = 2 + (null !== (r = null === (u = d[e ? "leftOp" : "rightOp"]) || void 0 === u ? void 0 : u.length) && void 0 !== r ? r : 0),
              p = n[A];
            if (e) {
              if ("<ident-token>" !== p.type) throw new Error("Invalid range");
              if (d.featureName = p.value, n.length >= 7) {
                var b = n[A + 1],
                  a = n[A + 2];
                if ("<delim-token>" !== b.type) throw new Error("Invalid range");
                var y = b.value;
                if (60 === y) "<delim-token>" !== a.type || 61 !== a.value || a.wsBefore ? d.rightOp = "<" : d.rightOp = "<=";
                else {
                  if (62 !== y) throw new Error("Invalid range");
                  "<delim-token>" !== a.type || 61 !== a.value || a.wsBefore ? d.rightOp = ">" : d.rightOp = ">="
                }
                var t = n[A + 1 + (null !== (f = null === (o = d.rightOp) || void 0 === o ? void 0 : o.length) && void 0 !== f ? f : 0)];
                d.rightToken = t
              } else if (A + 2 !== n.length) throw new Error("Invalid range")
            } else d.rightToken = p;
            var B = null,
              k = d.leftToken,
              _ = d.leftOp,
              c = d.featureName,
              l = d.rightOp,
              s = d.rightToken,
              C = null;
            if (null !== k)
              if ("<ident-token>" === k.type) {
                var i = k.type;
                "infinite" === (v = k.value) && (C = {
                  type: i,
                  value: v
                })
              } else "<number-token>" !== k.type && "<dimension-token>" !== k.type && "<ratio-token>" !== k.type || (k.wsBefore, k.wsAfter, C = G(k, ["wsBefore", "wsAfter"]));
            var E = null;
            if (null !== s)
              if ("<ident-token>" === s.type) {
                var v;
                i = s.type, "infinite" === (v = s.value) && (E = {
                  type: i,
                  value: v
                })
              } else "<number-token>" !== s.type && "<dimension-token>" !== s.type && "<ratio-token>" !== s.type || (s.wsBefore, s.wsAfter, E = G(s, ["wsBefore", "wsAfter"]));
            if (null !== C && null !== E)
              if ("<" !== _ && "<=" !== _ || "<" !== l && "<=" !== l) {
                if (">" !== _ && ">=" !== _ || ">" !== l && ">=" !== l) throw new Error("Invalid range");
                B = {
                  leftToken: C,
                  leftOp: _,
                  featureName: c,
                  rightOp: l,
                  rightToken: E
                }
              } else B = {
                leftToken: C,
                leftOp: _,
                featureName: c,
                rightOp: l,
                rightToken: E
              };
            else(null === C && null === _ && null !== l && null !== E || null !== C && null !== _ && null === l && null === E) && (B = {
              leftToken: C,
              leftOp: _,
              featureName: c,
              rightOp: l,
              rightToken: E
            });
            return B
          }
          throw new Error("Invalid range")
        };

      function ln(n) {
        var u = function(n, u) {
          if ("object" != typeof n || !n) return n;
          var r = n[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(n, "string");
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(n)
        }(n);
        return "symbol" == typeof u ? u : String(u)
      }

      function sn(n, u) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          u && (o = o.filter((function(u) {
            return Object.getOwnPropertyDescriptor(n, u).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function Cn(n) {
        for (var u = 1; u < arguments.length; u++) {
          var r = null != arguments[u] ? arguments[u] : {};
          u % 2 ? sn(Object(r), !0).forEach((function(u) {
            var o, f, d;
            o = n, f = u, d = r[u], (f = ln(f)) in o ? Object.defineProperty(o, f, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[f] = d
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : sn(Object(r)).forEach((function(u) {
            Object.defineProperty(n, u, Object.getOwnPropertyDescriptor(r, u))
          }))
        }
        return n
      }

      function En(n, u) {
        if (null == n) return {};
        var r, o, f = function(n, u) {
          if (null == n) return {};
          var r, o, f = {},
            d = Object.keys(n);
          for (o = 0; o < d.length; o++) r = d[o], u.indexOf(r) >= 0 || (f[r] = n[r]);
          return f
        }(n, u);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(n);
          for (o = 0; o < d.length; o++) r = d[o], u.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(n, r) && (f[r] = n[r])
        }
        return f
      }

      function vn(n, u) {
        for (var r in n) u(n[r], r)
      }

      function hn(n, u) {
        var r = {};
        for (var o in n) - 1 === u.indexOf(o) && (r[o] = n[o]);
        return r
      }
      class mn {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(n) {
          var u = this.ruleset.get(n);
          return u || (u = {
            query: n,
            rules: [],
            children: new mn
          }, this.ruleset.set(n, u)), u
        }
        getConditionalRulesetByPath(n) {
          var u = this;
          for (var r of n) {
            var o = u.findOrCreateCondition(r);
            u = o.children
          }
          return u
        }
        addRule(n, u, r) {
          var o = this.getConditionalRulesetByPath(r).findOrCreateCondition(u);
          if (!o) throw new Error("Failed to add conditional rule");
          o.rules.push(n)
        }
        addConditionPrecedence(n, u) {
          for (var r = this.getConditionalRulesetByPath(n), o = 0; o < u.length; o++) {
            var f, d = u[o],
              e = null !== (f = r.precedenceLookup.get(d)) && void 0 !== f ? f : new Set;
            for (var A of u.slice(o + 1)) e.add(A);
            r.precedenceLookup.set(d, e)
          }
        }
        isCompatible(n) {
          for (var [u, r] of this.precedenceLookup.entries())
            for (var o of r) {
              var f;
              if (null !== (f = n.precedenceLookup.get(o)) && void 0 !== f && f.has(u)) return !1
            }
          for (var {
              query: d,
              children: e
            }
            of n.ruleset.values()) {
            var A = this.ruleset.get(d);
            if (A && !A.children.isCompatible(e)) return !1
          }
          return !0
        }
        merge(n) {
          for (var {
              query: u,
              rules: r,
              children: o
            }
            of n.ruleset.values()) {
            var f = this.ruleset.get(u);
            f ? (f.rules.push(...r), f.children.merge(o)) : this.ruleset.set(u, {
              query: u,
              rules: r,
              children: o
            })
          }
          for (var [d, e] of n.precedenceLookup.entries()) {
            var A, p = null !== (A = this.precedenceLookup.get(d)) && void 0 !== A ? A : new Set;
            this.precedenceLookup.set(d, new Set([...p, ...e]))
          }
        }
        mergeIfCompatible(n) {
          return !!this.isCompatible(n) && (this.merge(n), !0)
        }
        getSortedRuleset() {
          var n = this,
            u = [],
            r = function(r) {
              var f = n.ruleset.get(o);
              if (!f) throw new Error("Can't find condition for ".concat(o));
              var d = u.findIndex((n => r.has(n.query)));
              d > -1 ? u.splice(d, 0, f) : u.push(f)
            };
          for (var [o, f] of this.precedenceLookup.entries()) r(f);
          return u
        }
        renderToArray() {
          var n = [];
          for (var {
              query: u,
              rules: r,
              children: o
            }
            of this.getSortedRuleset()) {
            var f = {};
            for (var d of r) f[d.selector] = d.rule;
            Object.assign(f, ...o.renderToArray()), n.push({
              [u]: f
            })
          }
          return n
        }
      }
      var gn, wn = {
          ":-moz-any-link": !0,
          ":-moz-full-screen": !0,
          ":-moz-placeholder": !0,
          ":-moz-read-only": !0,
          ":-moz-read-write": !0,
          ":-ms-fullscreen": !0,
          ":-ms-input-placeholder": !0,
          ":-webkit-any-link": !0,
          ":-webkit-full-screen": !0,
          "::-moz-color-swatch": !0,
          "::-moz-list-bullet": !0,
          "::-moz-list-number": !0,
          "::-moz-page-sequence": !0,
          "::-moz-page": !0,
          "::-moz-placeholder": !0,
          "::-moz-progress-bar": !0,
          "::-moz-range-progress": !0,
          "::-moz-range-thumb": !0,
          "::-moz-range-track": !0,
          "::-moz-scrolled-page-sequence": !0,
          "::-moz-selection": !0,
          "::-ms-backdrop": !0,
          "::-ms-browse": !0,
          "::-ms-check": !0,
          "::-ms-clear": !0,
          "::-ms-fill-lower": !0,
          "::-ms-fill-upper": !0,
          "::-ms-fill": !0,
          "::-ms-reveal": !0,
          "::-ms-thumb": !0,
          "::-ms-ticks-after": !0,
          "::-ms-ticks-before": !0,
          "::-ms-tooltip": !0,
          "::-ms-track": !0,
          "::-ms-value": !0,
          "::-webkit-backdrop": !0,
          "::-webkit-inner-spin-button": !0,
          "::-webkit-input-placeholder": !0,
          "::-webkit-meter-bar": !0,
          "::-webkit-meter-even-less-good-value": !0,
          "::-webkit-meter-inner-element": !0,
          "::-webkit-meter-optimum-value": !0,
          "::-webkit-meter-suboptimum-value": !0,
          "::-webkit-outer-spin-button": !0,
          "::-webkit-progress-bar": !0,
          "::-webkit-progress-inner-element": !0,
          "::-webkit-progress-inner-value": !0,
          "::-webkit-progress-value": !0,
          "::-webkit-resizer": !0,
          "::-webkit-scrollbar-button": !0,
          "::-webkit-scrollbar-corner": !0,
          "::-webkit-scrollbar-thumb": !0,
          "::-webkit-scrollbar-track-piece": !0,
          "::-webkit-scrollbar-track": !0,
          "::-webkit-scrollbar": !0,
          "::-webkit-search-cancel-button": !0,
          "::-webkit-search-results-button": !0,
          "::-webkit-slider-runnable-track": !0,
          "::-webkit-slider-thumb": !0,
          "::after": !0,
          "::backdrop": !0,
          "::before": !0,
          "::cue": !0,
          "::file-selector-button": !0,
          "::first-letter": !0,
          "::first-line": !0,
          "::grammar-error": !0,
          "::marker": !0,
          "::placeholder": !0,
          "::selection": !0,
          "::spelling-error": !0,
          "::target-text": !0,
          "::view-transition-group": !0,
          "::view-transition-image-pair": !0,
          "::view-transition-new": !0,
          "::view-transition-old": !0,
          "::view-transition": !0,
          ":active": !0,
          ":after": !0,
          ":any-link": !0,
          ":before": !0,
          ":blank": !0,
          ":checked": !0,
          ":default": !0,
          ":defined": !0,
          ":disabled": !0,
          ":empty": !0,
          ":enabled": !0,
          ":first-child": !0,
          ":first-letter": !0,
          ":first-line": !0,
          ":first-of-type": !0,
          ":first": !0,
          ":focus-visible": !0,
          ":focus-within": !0,
          ":focus": !0,
          ":fullscreen": !0,
          ":hover": !0,
          ":in-range": !0,
          ":indeterminate": !0,
          ":invalid": !0,
          ":last-child": !0,
          ":last-of-type": !0,
          ":left": !0,
          ":link": !0,
          ":only-child": !0,
          ":only-of-type": !0,
          ":optional": !0,
          ":out-of-range": !0,
          ":placeholder-shown": !0,
          ":read-only": !0,
          ":read-write": !0,
          ":required": !0,
          ":right": !0,
          ":root": !0,
          ":scope": !0,
          ":target": !0,
          ":valid": !0,
          ":visited": !0
        },
        xn = Object.keys(wn),
        Dn = wn,
        qn = (n, u) => new Error($(gn || (gn = D(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), n, u)),
        On = n => {
          if ("@media " === n) throw qn(n, "Query is empty");
          try {
            (function(n) {
              for (var u = n.length - 1; u >= 0; u--) n[u] = An(n[u])
            })(an(n))
          } catch (u) {
            throw qn(n, u.message)
          }
        },
        Sn = ["vars"],
        jn = ["content"],
        zn = "__DECLARATION",
        Ln = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        };

      function Rn(n, u, r, o) {
        var f = n.slice(0, u),
          d = n.slice(r);
        return "".concat(f).concat(o).concat(d)
      }
      var Pn = [...xn, "@layer", "@media", "@supports", "@container", "selectors"];
      class In {
        constructor(n, u) {
          this.rules = [], this.conditionalRulesets = [new mn], this.fontFaceRules = [], this.keyframesRules = [], this.localClassNamesMap = new Map(n.map((n => [n, n]))), this.localClassNamesSearch = new h(n), this.layers = new Map, this.composedClassLists = u.map((n => {
            var {
              identifier: u,
              classList: r
            } = n;
            return {
              identifier: u,
              regex: RegExp("(".concat(r, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(n) {
          if ("fontFace" !== n.type) {
            if ("keyframes" === n.type) return n.rule = Object.fromEntries(Object.entries(n.rule).map((n => {
              var [u, r] = n;
              return [u, this.transformProperties(r)]
            }))), void this.keyframesRules.push(n);
            if (this.currConditionalRuleset = new mn, "layer" === n.type) {
              var u = "@layer ".concat(n.name);
              this.addLayer([u])
            } else {
              var r = hn(n.rule, Pn);
              this.addRule({
                selector: n.selector,
                rule: r
              }), this.transformLayer(n, n.rule["@layer"]), this.transformMedia(n, n.rule["@media"]), this.transformSupports(n, n.rule["@supports"]), this.transformContainer(n, n.rule["@container"]), this.transformSimplePseudos(n, n.rule), this.transformSelectors(n, n.rule)
            }
            this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
          } else this.fontFaceRules.push(n.rule)
        }
        addConditionalRule(n, u) {
          var r = this.transformVars(this.transformProperties(n.rule)),
            o = this.transformSelector(n.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var f = u[u.length - 1],
            d = u.slice(0, u.length - 1);
          this.currConditionalRuleset.addRule({
            selector: o,
            rule: r
          }, f, d)
        }
        addRule(n) {
          var u = this.transformVars(this.transformProperties(n.rule)),
            r = this.transformSelector(n.selector);
          this.rules.push({
            selector: r,
            rule: u
          })
        }
        addLayer(n) {
          var u = n.join(" - ");
          this.layers.set(u, n)
        }
        transformProperties(n) {
          return this.transformContent(this.pixelifyProperties(n))
        }
        pixelifyProperties(n) {
          return vn(n, ((u, r) => {
            "number" != typeof u || 0 === u || Ln[r] || (n[r] = "".concat(u, "px"))
          })), n
        }
        transformVars(n) {
          var {
            vars: u
          } = n, r = En(n, Sn);
          return u ? Cn(Cn({}, function(n, u) {
            var r, o, f, d = {};
            for (var e in n) d[(n[e], r = e, o = void 0, f = void 0, (f = (o = r).match(/^var\((.*)\)$/)) ? f[1] : o)] = n[e];
            return d
          }(u)), r) : r
        }
        transformContent(n) {
          var {
            content: u
          } = n, r = En(n, jn);
          return void 0 === u ? r : Cn({
            content: (Array.isArray(u) ? u : [u]).map((n => n && (n.includes('"') || n.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(n)) ? n : '"'.concat(n, '"')))
          }, r)
        }
        transformClassname(n) {
          return ".".concat(v()(n, {
            isIdentifier: !0
          }))
        }
        transformSelector(n) {
          var u = n,
            r = function(n) {
              u = u.replace(f, (() => (function() {
                (() => {
                  if (w.length < 1) throw new Error("No adapter configured");
                  return w[w.length - 1]
                })().markCompositionUsed(...arguments)
              }(n), n)))
            };
          for (var {
              identifier: o,
              regex: f
            }
            of this.composedClassLists) r(o);
          if (this.localClassNamesMap.has(u)) return this.transformClassname(u);
          for (var d = this.localClassNamesSearch.search(u), e = u.length, A = d.length - 1; A >= 0; A--) {
            var [p, [b]] = d[A], a = p - b.length + 1;
            a >= e || (e = a, "." !== u[a - 1] && (u = Rn(u, a, p + 1, this.transformClassname(b))))
          }
          return u
        }
        transformSelectors(n, u, r) {
          vn(u.selectors, ((u, o) => {
            if ("local" !== n.type) throw new Error("Selectors are not allowed within ".concat("global" === n.type ? '"globalStyle"' : '"selectors"'));
            var f = this.transformSelector(o.replace(RegExp("&", "g"), n.selector));
            ((n, u) => {
              var r, o = () => {
                var r = new RegExp(".".concat(v()(u, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return n.replace(r, "&")
              };
              try {
                r = F(n)
              } catch (n) {
                throw new Error("Invalid selector: ".concat(o()))
              }
              r.forEach((n => {
                try {
                  for (var r = n.length - 1; r >= -1; r--) {
                    if (!n[r]) throw new Error;
                    var f = n[r];
                    if ("child" === f.type || "parent" === f.type || "sibling" === f.type || "adjacent" === f.type || "descendant" === f.type) throw new Error;
                    if ("attribute" === f.type && "class" === f.name && f.value === u) return
                  }
                } catch (n) {
                  throw new Error($(V || (V = D(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), o(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(f, n.selector);
            var d = {
              selector: f,
              rule: hn(u, Pn)
            };
            r ? this.addConditionalRule(d, r) : this.addRule(d);
            var e = {
              type: "selector",
              selector: f,
              rule: u
            };
            this.transformLayer(e, u["@layer"], r), this.transformSupports(e, u["@supports"], r), this.transformMedia(e, u["@media"], r)
          }))
        }
        transformMedia(n, u) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (u)
            for (var [f, d] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(u).map((n => "@media ".concat(n)))), Object.entries(u))) {
              var e = "@media ".concat(f);
              On(e);
              var A = [...o, e];
              this.addConditionalRule({
                selector: n.selector,
                rule: hn(d, Pn)
              }, A), "local" === n.type && (this.transformSimplePseudos(n, d, A), this.transformSelectors(n, d, A)), this.transformLayer(n, d["@layer"], A), this.transformSupports(n, d["@supports"], A), this.transformContainer(n, d["@container"], A)
            }
        }
        transformContainer(n, u) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          u && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(u).map((n => "@container ".concat(n)))), vn(u, ((u, r) => {
            var f = "@container ".concat(r),
              d = [...o, f];
            this.addConditionalRule({
              selector: n.selector,
              rule: hn(u, Pn)
            }, d), "local" === n.type && (this.transformSimplePseudos(n, u, d), this.transformSelectors(n, u, d)), this.transformLayer(n, u["@layer"], d), this.transformSupports(n, u["@supports"], d), this.transformMedia(n, u["@media"], d)
          })))
        }
        transformLayer(n, u) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          u && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(u).map((n => "@layer ".concat(n)))), vn(u, ((u, r) => {
            var f = [...o, "@layer ".concat(r)];
            this.addLayer(f), this.addConditionalRule({
              selector: n.selector,
              rule: hn(u, Pn)
            }, f), "local" === n.type && (this.transformSimplePseudos(n, u, f), this.transformSelectors(n, u, f)), this.transformMedia(n, u["@media"], f), this.transformSupports(n, u["@supports"], f), this.transformContainer(n, u["@container"], f)
          })))
        }
        transformSupports(n, u) {
          var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          u && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(o, Object.keys(u).map((n => "@supports ".concat(n)))), vn(u, ((u, r) => {
            var f = [...o, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: n.selector,
              rule: hn(u, Pn)
            }, f), "local" === n.type && (this.transformSimplePseudos(n, u, f), this.transformSelectors(n, u, f)), this.transformLayer(n, u["@layer"], f), this.transformMedia(n, u["@media"], f), this.transformContainer(n, u["@container"], f)
          })))
        }
        transformSimplePseudos(n, u, r) {
          for (var o of Object.keys(u))
            if (Dn[o]) {
              if ("local" !== n.type) throw new Error("Simple pseudos are not valid in ".concat("global" === n.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(n.selector).concat(o),
                rule: u[o]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(n.selector).concat(o),
                rule: u[o]
              })
            }
        }
        toCss() {
          var n = [];
          for (var u of this.fontFaceRules) n.push(Fn({
            "@font-face": u
          }));
          for (var r of this.keyframesRules) n.push(Fn({
            ["@keyframes ".concat(r.name)]: r.rule
          }));
          for (var o of this.layers.values()) {
            var [f, ...d] = o.reverse(), e = {
              [f]: zn
            };
            for (var A of d) e = {
              [A]: e
            };
            n.push(Fn(e))
          }
          for (var p of this.rules) n.push(Fn({
            [p.selector]: p.rule
          }));
          for (var b of this.conditionalRulesets)
            for (var a of b.renderToArray()) n.push(Fn(a));
          return n.filter(Boolean)
        }
      }

      function Fn(n) {
        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          o = function(o) {
            var f, d = n[o];
            d && Array.isArray(d) ? r.push(...d.map((n => Fn({
              [o]: n
            }, u)))) : d && "object" == typeof d ? 0 === Object.keys(d).length || r.push("".concat(u).concat(o, " {\n").concat(Fn(d, u + "  "), "\n").concat(u, "}")) : d === zn ? r.push("".concat(u).concat(o, ";")) : r.push("".concat(u).concat(o.startsWith("--") ? o : (f = o, f.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(d, ";"))
          };
        for (var f of Object.keys(n)) o(f);
        return r.join("\n")
      }
      r(7393);
      var Mn = new Set,
        Nn = [],
        Tn = [];
      x || (n => {
        if (!n) throw new Error('No adapter provided when calling "setAdapter"');
        x = !0, w.push(n)
      })({
        appendCss: n => {
          Tn.push(n)
        },
        registerClassName: n => {
          Mn.add(n)
        },
        registerComposition: n => {
          Nn.push(n)
        },
        markCompositionUsed: () => {},
        onEndFileScope: n => {
          var u = function(n) {
            var {
              localClassNames: u,
              cssObjs: r,
              composedClassLists: o
            } = n, f = new In(u, o);
            for (var d of r) f.processCssObj(d);
            return f.toCss()
          }({
            localClassNames: Array.from(Mn),
            composedClassLists: Nn,
            cssObjs: Tn
          }).join("\n");
          (n => {
            var {
              fileScope: u,
              css: r
            } = n, o = u.packageName ? [u.packageName, u.filePath].join("/") : u.filePath, f = i[o];
            if (!f) {
              var d = document.createElement("style");
              u.packageName && d.setAttribute("data-package", u.packageName), d.setAttribute("data-file", u.filePath), d.setAttribute("type", "text/css"), f = i[o] = d, document.head.appendChild(d)
            }
            f.innerHTML = r
          })({
            fileScope: n,
            css: u
          }), Tn = []
        },
        getIdentOption: () => "short"
      });
      var Hn = r(31611),
        Un = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-footer"
          }
        };
      Un.setAttributes = b(), Un.insert = n => {
        const u = n.dataset.shadowtarget;
        u && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [u]: n
          }
        })
      }, Un.domAPI = A(), Un.insertStyleElement = y(), d()(Hn.A, Un), Hn.A && Hn.A.locals && Hn.A.locals;
      var $n = r(6449),
        Wn = r(74487),
        Gn = r(62229);
      const Kn = (0, Gn.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: Wn.US,
          platformScaleBreakpoints: Wn.Cb,
          locale: "en-US"
        }),
        Vn = () => (0, Gn.useContext)(Kn),
        Xn = () => {
          const {
            colorScheme: n,
            defaultColorScheme: u,
            contrastMode: r,
            defaultContrastMode: o,
            platformScale: f,
            defaultPlatformScale: d,
            platformScaleRatios: e,
            platformScaleBreakpoints: A,
            locale: p
          } = Vn();
          return {
            colorScheme: n,
            defaultColorScheme: u,
            contrastMode: r,
            defaultContrastMode: o,
            platformScale: f,
            defaultPlatformScale: d,
            platformScaleRatios: e,
            platformScaleBreakpoints: A,
            locale: p
          }
        },
        Zn = () => {
          const {
            locale: n
          } = Vn();
          return n
        };
      var Qn = r(76430);
      const Yn = (n, u) => {
        const r = "more" === u ? Wn.xW.lightHc : Wn.xW.light,
          o = "more" === u ? Wn.xW.darkHc : Wn.xW.dark;
        return "dark" === n ? o : r
      };
      var Jn = r(4255);
      const nu = () => Jn.X3 ? null : document.body,
        uu = (0, Gn.forwardRef)((({
          children: n,
          className: u,
          container: r = nu(),
          asChild: f,
          colorScheme: d,
          defaultColorScheme: e,
          contrastMode: A,
          defaultContrastMode: p,
          platformScaleBreakpoints: b,
          platformScaleRatios: a,
          defaultPlatformScale: y,
          platformScale: t,
          locale: B = "en-US"
        }, k) => {
          const _ = (0, Gn.useRef)(null),
            c = (0, Qn.UP)(_, k),
            l = (0, Gn.useRef)(r),
            {
              ratio: s,
              scale: C
            } = function(n) {
              const u = (0, Gn.useMemo)((() => ({
                  ...Wn.US,
                  ...n.platformScaleRatios
                })), [n.platformScaleRatios]),
                r = (0, Gn.useMemo)((() => ({
                  ...Wn.Cb,
                  ...n.platformScaleBreakpoints
                })), [n.platformScaleBreakpoints]),
                [o, f] = (0, Gn.useState)(n.platformScale || n.defaultPlatformScale),
                d = (0, Gn.useRef)([]),
                e = () => {
                  if (!Jn.X3) {
                    for (const {
                        handler: n,
                        matchMedia: u
                      }
                      of d.current) u.removeEventListener("change", n);
                    d.current = []
                  }
                };
              return (0, Gn.useEffect)((() => (n.platformScale ? f(n.platformScale) : (() => {
                if (!Jn.X3) {
                  e();
                  for (const n in r) {
                    const u = window.matchMedia(r[n]),
                      o = u => {
                        u.matches && f(n)
                      };
                    u.addEventListener("change", o), u.matches && f(n), d.current.push({
                      handler: o,
                      matchMedia: u
                    })
                  }
                }
              })(), e)), [r, n.platformScale]), {
                scale: o,
                ratio: u[o]
              }
            }({
              platformScaleBreakpoints: b,
              platformScaleRatios: a,
              defaultPlatformScale: y,
              platformScale: t
            }),
            {
              appearanceClass: i,
              otherAppearanceClasses: E,
              providerColor: v,
              providerContrast: h
            } = function({
              colorScheme: n,
              defaultColorScheme: u = "dark",
              contrastMode: r,
              defaultContrastMode: o = "normal"
            }) {
              const f = (0, Qn.Ub)("(prefers-color-scheme: light)"),
                d = (0, Qn.Ub)("(prefers-color-scheme: dark)"),
                e = (0, Qn.Ub)("(prefers-contrast: more)"),
                A = "system" !== n && n || f && "light" || d && "dark" || u,
                p = r || e && "more" || o,
                b = (0, Gn.useMemo)((() => Yn(A, p)), [A, p]),
                a = (0, Gn.useMemo)((() => ((n, u) => {
                  const r = Yn(n, u);
                  return [Wn.xW.light, Wn.xW.dark, Wn.xW.lightHc, Wn.xW.darkHc].filter((n => n !== r))
                })(A, p)), [A, p]);
              return {
                appearanceClass: b,
                otherAppearanceClasses: a,
                providerColor: A,
                providerContrast: p
              }
            }({
              colorScheme: d,
              defaultColorScheme: e,
              contrastMode: A,
              defaultContrastMode: p
            });
          return ((n, u, r, o, f) => {
            const d = (0, Qn.ZC)(f),
              e = (0, Qn.ZC)(n.current);
            (0, Gn.useEffect)((() => {
              n.current?.classList.contains(Wn.X6) || n.current?.classList.add(Wn.X6), n.current?.classList.add(r), n.current?.classList.remove(...o), d && f && n.current?.classList.contains(d) ? n.current?.classList.replace(d, f) : d && !f && n.current?.classList.contains(d) ? n.current?.classList.remove(d) : f && n.current?.classList.add(f)
            }), [r, f]), (0, Gn.useEffect)((() => {
              n.current?.style.setProperty(Wn.HZ, u.toString())
            }), [u]), (0, Gn.useEffect)((() => {
              e?.classList.remove(Wn.X6), e?.classList.remove(r), e?.style.removeProperty(Wn.HZ), f && e?.classList.remove(f)
            }), [e])
          })(f ? _ : l, s, i, E, u), (0, o.jsx)(Kn.Provider, {
            value: {
              locale: B,
              defaultColorScheme: e,
              colorScheme: v,
              defaultContrastMode: p,
              contrastMode: h,
              defaultPlatformScale: y,
              platformScale: C,
              platformScaleRatios: a,
              platformScaleBreakpoints: b
            },
            children: f ? (0, o.jsx)($n.DX, {
              ref: c,
              children: n
            }) : n
          })
        }))
    }
  }
]);