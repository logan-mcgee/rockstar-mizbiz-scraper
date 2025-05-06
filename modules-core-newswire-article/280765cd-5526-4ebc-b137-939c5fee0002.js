! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "280765cd-5526-4ebc-b137-939c5fee0002", e._sentryDebugIdIdentifier = "sentry-dbid-280765cd-5526-4ebc-b137-939c5fee0002")
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
  [4864], {
    74864: (e, n) => {
      var t = [],
        r = function() {
          var e, n;
          for (n = 0; n < t.length; n += 1) e = t[n], a(e) && (e.style.maxWidth = "", l(e, e.clientHeight, 0, e.clientWidth))
        },
        l = function(e, n, t, r) {
          var a;
          t >= r ? e.style.maxWidth = r + "px" : (a = (t + r) / 2, e.style.maxWidth = a + "px", e.clientHeight > n ? l(e, n, a + 1, r) : l(e, n, t + 1, a))
        },
        a = function(e) {
          var n, t, r, l, a;
          return a = e.innerHTML, r = e.innerHTML.split(" "), (l = document.createElement("span")).id = "element-first-word", l.innerHTML = r[0], r = r.slice(1), e.innerHTML = "", e.appendChild(l), e.innerHTML += " " + r.join(" "), n = (l = document.getElementById("element-first-word")).offsetHeight, t = e.offsetHeight, e.innerHTML = a, t - 10 > n
        };
      n.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var n = 0; n < selectorArray.length; n += 1)
            for (var r = document.querySelectorAll(selectorArray[n].trim()), l = 0; l < r.length; l += 1) {
              var a = r[l];
              t.push(a)
            }
        }(e) : t = document.querySelectorAll(".balance-text"), r();
        var n, l, a, o, d = (n = function() {
          r()
        }, l = 100, function() {
          var e = this,
            t = arguments,
            r = a && !o;
          clearTimeout(o), o = setTimeout((function() {
            o = null, a || n.apply(e, t)
          }), l), r && n.apply(e, t)
        });
        window.addEventListener("resize", d)
      }
    }
  }
]);