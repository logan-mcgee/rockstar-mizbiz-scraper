! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7342e913-8c7b-4883-834b-565051d32f09", e._sentryDebugIdIdentifier = "sentry-dbid-7342e913-8c7b-4883-834b-565051d32f09")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [184], {
    6184: (e, n) => {
      var t = [],
        a = function() {
          var e, n;
          for (n = 0; n < t.length; n += 1) e = t[n], l(e) && (e.style.maxWidth = "", r(e, e.clientHeight, 0, e.clientWidth))
        },
        r = function(e, n, t, a) {
          var l;
          t >= a ? e.style.maxWidth = a + "px" : (l = (t + a) / 2, e.style.maxWidth = l + "px", e.clientHeight > n ? r(e, n, l + 1, a) : r(e, n, t + 1, l))
        },
        l = function(e) {
          var n, t, a, r, l;
          return l = e.innerHTML, a = e.innerHTML.split(" "), (r = document.createElement("span")).id = "element-first-word", r.innerHTML = a[0], a = a.slice(1), e.innerHTML = "", e.appendChild(r), e.innerHTML += " " + a.join(" "), n = (r = document.getElementById("element-first-word")).offsetHeight, t = e.offsetHeight, e.innerHTML = l, t - 10 > n
        };
      n.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var n = 0; n < selectorArray.length; n += 1)
            for (var a = document.querySelectorAll(selectorArray[n].trim()), r = 0; r < a.length; r += 1) {
              var l = a[r];
              t.push(l)
            }
        }(e) : t = document.querySelectorAll(".balance-text"), a();
        var n, r, l, d, o = (n = function() {
          a()
        }, r = 100, function() {
          var e = this,
            t = arguments,
            a = l && !d;
          clearTimeout(d), d = setTimeout((function() {
            d = null, l || n.apply(e, t)
          }), r), a && n.apply(e, t)
        });
        window.addEventListener("resize", o)
      }
    }
  }
]);
//# sourceMappingURL=28da943b7788862f1adccc5c8a88a41b.js.map