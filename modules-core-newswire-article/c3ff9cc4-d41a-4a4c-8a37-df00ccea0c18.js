try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c3ff9cc4-d41a-4a4c-8a37-df00ccea0c18", e._sentryDebugIdIdentifier = "sentry-dbid-c3ff9cc4-d41a-4a4c-8a37-df00ccea0c18")
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
    75400: (e, t) => {
      var n = [],
        a = function() {
          var e, t;
          for (t = 0; t < n.length; t += 1) e = n[t], r(e) && (e.style.maxWidth = "", d(e, e.clientHeight, 0, e.clientWidth))
        },
        d = function(e, t, n, a) {
          var r;
          n >= a ? e.style.maxWidth = a + "px" : (r = (n + a) / 2, e.style.maxWidth = r + "px", e.clientHeight > t ? d(e, t, r + 1, a) : d(e, t, n + 1, r))
        },
        r = function(e) {
          var t, n, a, d, r;
          return r = e.innerHTML, a = e.innerHTML.split(" "), (d = document.createElement("span")).id = "element-first-word", d.innerHTML = a[0], a = a.slice(1), e.innerHTML = "", e.appendChild(d), e.innerHTML += " " + a.join(" "), t = (d = document.getElementById("element-first-word")).offsetHeight, n = e.offsetHeight, e.innerHTML = r, n - 10 > t
        };
      t.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var t = 0; t < selectorArray.length; t += 1)
            for (var a = document.querySelectorAll(selectorArray[t].trim()), d = 0; d < a.length; d += 1) {
              var r = a[d];
              n.push(r)
            }
        }(e) : n = document.querySelectorAll(".balance-text"), a();
        var t, d, r, l, i = (t = function() {
          a()
        }, d = 100, function() {
          var e = this,
            n = arguments,
            a = r && !l;
          clearTimeout(l), l = setTimeout((function() {
            l = null, r || t.apply(e, n)
          }), d), a && t.apply(e, n)
        });
        window.addEventListener("resize", i)
      }
    }
  }
]);