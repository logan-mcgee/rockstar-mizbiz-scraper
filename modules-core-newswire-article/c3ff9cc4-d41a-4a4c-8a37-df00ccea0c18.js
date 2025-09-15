try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c3ff9cc4-d41a-4a4c-8a37-df00ccea0c18", e._sentryDebugIdIdentifier = "sentry-dbid-c3ff9cc4-d41a-4a4c-8a37-df00ccea0c18")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5400], {
    75400: (e, t) => {
      var n = [],
        a = function() {
          var e, t;
          for (t = 0; t < n.length; t += 1) e = n[t], d(e) && (e.style.maxWidth = "", r(e, e.clientHeight, 0, e.clientWidth))
        },
        r = function(e, t, n, a) {
          var d;
          n >= a ? e.style.maxWidth = a + "px" : (d = (n + a) / 2, e.style.maxWidth = d + "px", e.clientHeight > t ? r(e, t, d + 1, a) : r(e, t, n + 1, d))
        },
        d = function(e) {
          var t, n, a, r, d;
          return d = e.innerHTML, a = e.innerHTML.split(" "), (r = document.createElement("span")).id = "element-first-word", r.innerHTML = a[0], a = a.slice(1), e.innerHTML = "", e.appendChild(r), e.innerHTML += " " + a.join(" "), t = (r = document.getElementById("element-first-word")).offsetHeight, n = e.offsetHeight, e.innerHTML = d, n - 10 > t
        };
      t.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var t = 0; t < selectorArray.length; t += 1)
            for (var a = document.querySelectorAll(selectorArray[t].trim()), r = 0; r < a.length; r += 1) {
              var d = a[r];
              n.push(d)
            }
        }(e) : n = document.querySelectorAll(".balance-text"), a();
        var t, r, d, l, i = (t = function() {
          a()
        }, r = 100, function() {
          var e = this,
            n = arguments,
            a = d && !l;
          clearTimeout(l), l = setTimeout((function() {
            l = null, d || t.apply(e, n)
          }), r), a && t.apply(e, n)
        });
        window.addEventListener("resize", i)
      }
    }
  }
]);