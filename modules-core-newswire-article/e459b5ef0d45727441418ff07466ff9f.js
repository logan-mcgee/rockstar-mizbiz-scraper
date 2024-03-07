! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cdf9abba-3655-4b4a-9822-b4687c8df53c", e._sentryDebugIdIdentifier = "sentry-dbid-cdf9abba-3655-4b4a-9822-b4687c8df53c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "4f9ddcadd6441a318358d91584450ac4e81dfd99",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "4f9ddcadd6441a318358d91584450ac4e81dfd99"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [272], {
    1272: (e, n) => {
      var t = [],
        a = function() {
          var e, n;
          for (n = 0; n < t.length; n += 1) e = t[n], r(e) && (e.style.maxWidth = "", d(e, e.clientHeight, 0, e.clientWidth))
        },
        d = function(e, n, t, a) {
          var r;
          t >= a ? e.style.maxWidth = a + "px" : (r = (t + a) / 2, e.style.maxWidth = r + "px", e.clientHeight > n ? d(e, n, r + 1, a) : d(e, n, t + 1, r))
        },
        r = function(e) {
          var n, t, a, d, r;
          return r = e.innerHTML, a = e.innerHTML.split(" "), (d = document.createElement("span")).id = "element-first-word", d.innerHTML = a[0], a = a.slice(1), e.innerHTML = "", e.appendChild(d), e.innerHTML += " " + a.join(" "), n = (d = document.getElementById("element-first-word")).offsetHeight, t = e.offsetHeight, e.innerHTML = r, t - 10 > n
        };
      n.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var n = 0; n < selectorArray.length; n += 1)
            for (var a = document.querySelectorAll(selectorArray[n].trim()), d = 0; d < a.length; d += 1) {
              var r = a[d];
              t.push(r)
            }
        }(e) : t = document.querySelectorAll(".balance-text"), a();
        var n, d, r, l, o = (n = function() {
          a()
        }, d = 100, function() {
          var e = this,
            t = arguments,
            a = r && !l;
          clearTimeout(l), l = setTimeout((function() {
            l = null, r || n.apply(e, t)
          }), d), a && n.apply(e, t)
        });
        window.addEventListener("resize", o)
      }
    }
  }
]);
//# sourceMappingURL=e459b5ef0d45727441418ff07466ff9f.js.map