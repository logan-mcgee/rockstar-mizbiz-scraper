try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3e26e315-351b-4e12-b2b2-9de81d6dc366", e._sentryDebugIdIdentifier = "sentry-dbid-3e26e315-351b-4e12-b2b2-9de81d6dc366")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3201], {
    23201: (e, t) => {
      var n = [],
        d = function() {
          var e, t;
          for (t = 0; t < n.length; t += 1) e = n[t], l(e) && (e.style.maxWidth = "", r(e, e.clientHeight, 0, e.clientWidth))
        },
        r = function(e, t, n, d) {
          var l;
          n >= d ? e.style.maxWidth = d + "px" : (l = (n + d) / 2, e.style.maxWidth = l + "px", e.clientHeight > t ? r(e, t, l + 1, d) : r(e, t, n + 1, l))
        },
        l = function(e) {
          var t, n, d, r, l;
          return l = e.innerHTML, d = e.innerHTML.split(" "), (r = document.createElement("span")).id = "element-first-word", r.innerHTML = d[0], d = d.slice(1), e.innerHTML = "", e.appendChild(r), e.innerHTML += " " + d.join(" "), t = (r = document.getElementById("element-first-word")).offsetHeight, n = e.offsetHeight, e.innerHTML = l, n - 10 > t
        };
      t.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var t = 0; t < selectorArray.length; t += 1)
            for (var d = document.querySelectorAll(selectorArray[t].trim()), r = 0; r < d.length; r += 1) {
              var l = d[r];
              n.push(l)
            }
        }(e) : n = document.querySelectorAll(".balance-text"), d();
        var t, r, l, i, o = (t = function() {
          d()
        }, r = 100, function() {
          var e = this,
            n = arguments,
            d = l && !i;
          clearTimeout(i), i = setTimeout((function() {
            i = null, l || t.apply(e, n)
          }), r), d && t.apply(e, n)
        });
        window.addEventListener("resize", o)
      }
    }
  }
]);