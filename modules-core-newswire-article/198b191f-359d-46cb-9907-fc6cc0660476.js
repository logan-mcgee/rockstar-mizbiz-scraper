try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "198b191f-359d-46cb-9907-fc6cc0660476", e._sentryDebugIdIdentifier = "sentry-dbid-198b191f-359d-46cb-9907-fc6cc0660476")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5400], {
    75400(e, t) {
      var n = [],
        r = function() {
          var e, t;
          for (t = 0; t < n.length; t += 1) e = n[t], a(e) && (e.style.maxWidth = "", l(e, e.clientHeight, 0, e.clientWidth))
        },
        l = function(e, t, n, r) {
          var a;
          n >= r ? e.style.maxWidth = r + "px" : (a = (n + r) / 2, e.style.maxWidth = a + "px", e.clientHeight > t ? l(e, t, a + 1, r) : l(e, t, n + 1, a))
        },
        a = function(e) {
          var t, n, r, l, a;
          return a = e.innerHTML, r = e.innerHTML.split(" "), (l = document.createElement("span")).id = "element-first-word", l.innerHTML = r[0], r = r.slice(1), e.innerHTML = "", e.appendChild(l), e.innerHTML += " " + r.join(" "), t = (l = document.getElementById("element-first-word")).offsetHeight, n = e.offsetHeight, e.innerHTML = a, n - 10 > t
        };
      t.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var t = 0; t < selectorArray.length; t += 1)
            for (var r = document.querySelectorAll(selectorArray[t].trim()), l = 0; l < r.length; l += 1) {
              var a = r[l];
              n.push(a)
            }
        }(e) : n = document.querySelectorAll(".balance-text"), r();
        var t, l, a, i, d = (t = function() {
          r()
        }, l = 100, function() {
          var e = this,
            n = arguments,
            r = a && !i;
          clearTimeout(i), i = setTimeout(function() {
            i = null, a || t.apply(e, n)
          }, l), r && t.apply(e, n)
        });
        window.addEventListener("resize", d)
      }
    }
  }
]);