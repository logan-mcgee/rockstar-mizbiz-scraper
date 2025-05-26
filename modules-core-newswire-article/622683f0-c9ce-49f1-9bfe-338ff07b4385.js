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
      var a = [],
        n = function() {
          var e, t;
          for (t = 0; t < a.length; t += 1) e = a[t], o(e) && (e.style.maxWidth = "", l(e, e.clientHeight, 0, e.clientWidth))
        },
        l = function(e, t, a, n) {
          var o;
          a >= n ? e.style.maxWidth = n + "px" : (o = (a + n) / 2, e.style.maxWidth = o + "px", e.clientHeight > t ? l(e, t, o + 1, n) : l(e, t, a + 1, o))
        },
        o = function(e) {
          var t, a, n, l, o;
          return o = e.innerHTML, n = e.innerHTML.split(" "), (l = document.createElement("span")).id = "element-first-word", l.innerHTML = n[0], n = n.slice(1), e.innerHTML = "", e.appendChild(l), e.innerHTML += " " + n.join(" "), t = (l = document.getElementById("element-first-word")).offsetHeight, a = e.offsetHeight, e.innerHTML = o, a - 10 > t
        };
      t.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var t = 0; t < selectorArray.length; t += 1)
            for (var n = document.querySelectorAll(selectorArray[t].trim()), l = 0; l < n.length; l += 1) {
              var o = n[l];
              a.push(o)
            }
        }(e) : a = document.querySelectorAll(".balance-text"), n();
        var t, l, o, d, r = (t = function() {
          n()
        }, l = 100, function() {
          var e = this,
            a = arguments,
            n = o && !d;
          clearTimeout(d), d = setTimeout((function() {
            d = null, o || t.apply(e, a)
          }), l), n && t.apply(e, a)
        });
        window.addEventListener("resize", r)
      }
    }
  }
]);