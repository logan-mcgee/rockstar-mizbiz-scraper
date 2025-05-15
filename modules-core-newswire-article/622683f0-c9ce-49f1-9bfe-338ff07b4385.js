! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "622683f0-c9ce-49f1-9bfe-338ff07b4385", e._sentryDebugIdIdentifier = "sentry-dbid-622683f0-c9ce-49f1-9bfe-338ff07b4385")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3461], {
    3461: (e, t) => {
      var n = [],
        a = function() {
          var e, t;
          for (t = 0; t < n.length; t += 1) e = n[t], o(e) && (e.style.maxWidth = "", l(e, e.clientHeight, 0, e.clientWidth))
        },
        l = function(e, t, n, a) {
          var o;
          n >= a ? e.style.maxWidth = a + "px" : (o = (n + a) / 2, e.style.maxWidth = o + "px", e.clientHeight > t ? l(e, t, o + 1, a) : l(e, t, n + 1, o))
        },
        o = function(e) {
          var t, n, a, l, o;
          return o = e.innerHTML, a = e.innerHTML.split(" "), (l = document.createElement("span")).id = "element-first-word", l.innerHTML = a[0], a = a.slice(1), e.innerHTML = "", e.appendChild(l), e.innerHTML += " " + a.join(" "), t = (l = document.getElementById("element-first-word")).offsetHeight, n = e.offsetHeight, e.innerHTML = o, n - 10 > t
        };
      t.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var t = 0; t < selectorArray.length; t += 1)
            for (var a = document.querySelectorAll(selectorArray[t].trim()), l = 0; l < a.length; l += 1) {
              var o = a[l];
              n.push(o)
            }
        }(e) : n = document.querySelectorAll(".balance-text"), a();
        var t, l, o, r, d = (t = function() {
          a()
        }, l = 100, function() {
          var e = this,
            n = arguments,
            a = o && !r;
          clearTimeout(r), r = setTimeout((function() {
            r = null, o || t.apply(e, n)
          }), l), a && t.apply(e, n)
        });
        window.addEventListener("resize", d)
      }
    }
  }
]);