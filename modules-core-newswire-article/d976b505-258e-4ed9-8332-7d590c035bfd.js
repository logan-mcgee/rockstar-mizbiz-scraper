try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d976b505-258e-4ed9-8332-7d590c035bfd", e._sentryDebugIdIdentifier = "sentry-dbid-d976b505-258e-4ed9-8332-7d590c035bfd")
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
        d = function() {
          var e, t;
          for (t = 0; t < n.length; t += 1) e = n[t], r(e) && (e.style.maxWidth = "", a(e, e.clientHeight, 0, e.clientWidth))
        },
        a = function(e, t, n, d) {
          var r;
          n >= d ? e.style.maxWidth = d + "px" : (r = (n + d) / 2, e.style.maxWidth = r + "px", e.clientHeight > t ? a(e, t, r + 1, d) : a(e, t, n + 1, r))
        },
        r = function(e) {
          var t, n, d, a, r;
          return r = e.innerHTML, d = e.innerHTML.split(" "), (a = document.createElement("span")).id = "element-first-word", a.innerHTML = d[0], d = d.slice(1), e.innerHTML = "", e.appendChild(a), e.innerHTML += " " + d.join(" "), t = (a = document.getElementById("element-first-word")).offsetHeight, n = e.offsetHeight, e.innerHTML = r, n - 10 > t
        };
      t.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var t = 0; t < selectorArray.length; t += 1)
            for (var d = document.querySelectorAll(selectorArray[t].trim()), a = 0; a < d.length; a += 1) {
              var r = d[a];
              n.push(r)
            }
        }(e) : n = document.querySelectorAll(".balance-text"), d();
        var t, a, r, l, i = (t = function() {
          d()
        }, a = 100, function() {
          var e = this,
            n = arguments,
            d = r && !l;
          clearTimeout(l), l = setTimeout(function() {
            l = null, r || t.apply(e, n)
          }, a), d && t.apply(e, n)
        });
        window.addEventListener("resize", i)
      }
    }
  }
]);