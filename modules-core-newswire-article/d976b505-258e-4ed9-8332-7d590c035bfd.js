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
        r = function() {
          var e, t;
          for (t = 0; t < n.length; t += 1) e = n[t], l(e) && (e.style.maxWidth = "", d(e, e.clientHeight, 0, e.clientWidth))
        },
        d = function(e, t, n, r) {
          var l;
          n >= r ? e.style.maxWidth = r + "px" : (l = (n + r) / 2, e.style.maxWidth = l + "px", e.clientHeight > t ? d(e, t, l + 1, r) : d(e, t, n + 1, l))
        },
        l = function(e) {
          var t, n, r, d, l;
          return l = e.innerHTML, r = e.innerHTML.split(" "), (d = document.createElement("span")).id = "element-first-word", d.innerHTML = r[0], r = r.slice(1), e.innerHTML = "", e.appendChild(d), e.innerHTML += " " + r.join(" "), t = (d = document.getElementById("element-first-word")).offsetHeight, n = e.offsetHeight, e.innerHTML = l, n - 10 > t
        };
      t.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var t = 0; t < selectorArray.length; t += 1)
            for (var r = document.querySelectorAll(selectorArray[t].trim()), d = 0; d < r.length; d += 1) {
              var l = r[d];
              n.push(l)
            }
        }(e) : n = document.querySelectorAll(".balance-text"), r();
        var t, d, l, i, o = (t = function() {
          r()
        }, d = 100, function() {
          var e = this,
            n = arguments,
            r = l && !i;
          clearTimeout(i), i = setTimeout(function() {
            i = null, l || t.apply(e, n)
          }, d), r && t.apply(e, n)
        });
        window.addEventListener("resize", o)
      }
    }
  }
]);