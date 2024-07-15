! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c0b0ae2e-f34b-4680-8ae6-d375b98e0c64", e._sentryDebugIdIdentifier = "sentry-dbid-c0b0ae2e-f34b-4680-8ae6-d375b98e0c64")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [184], {
    86184: (e, n) => {
      var t = [],
        r = function() {
          var e, n;
          for (n = 0; n < t.length; n += 1) e = t[n], l(e) && (e.style.maxWidth = "", a(e, e.clientHeight, 0, e.clientWidth))
        },
        a = function(e, n, t, r) {
          var l;
          t >= r ? e.style.maxWidth = r + "px" : (l = (t + r) / 2, e.style.maxWidth = l + "px", e.clientHeight > n ? a(e, n, l + 1, r) : a(e, n, t + 1, l))
        },
        l = function(e) {
          var n, t, r, a, l;
          return l = e.innerHTML, r = e.innerHTML.split(" "), (a = document.createElement("span")).id = "element-first-word", a.innerHTML = r[0], r = r.slice(1), e.innerHTML = "", e.appendChild(a), e.innerHTML += " " + r.join(" "), n = (a = document.getElementById("element-first-word")).offsetHeight, t = e.offsetHeight, e.innerHTML = l, t - 10 > n
        };
      n.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var n = 0; n < selectorArray.length; n += 1)
            for (var r = document.querySelectorAll(selectorArray[n].trim()), a = 0; a < r.length; a += 1) {
              var l = r[a];
              t.push(l)
            }
        }(e) : t = document.querySelectorAll(".balance-text"), r();
        var n, a, l, o, d = (n = function() {
          r()
        }, a = 100, function() {
          var e = this,
            t = arguments,
            r = l && !o;
          clearTimeout(o), o = setTimeout((function() {
            o = null, l || n.apply(e, t)
          }), a), r && n.apply(e, t)
        });
        window.addEventListener("resize", d)
      }
    }
  }
]);