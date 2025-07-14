try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1e231689-fea6-4d33-901c-82a328b8e7e1", e._sentryDebugIdIdentifier = "sentry-dbid-1e231689-fea6-4d33-901c-82a328b8e7e1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3461], {
    3461: (e, t) => {
      var n = [],
        a = function() {
          var e, t;
          for (t = 0; t < n.length; t += 1) e = n[t], l(e) && (e.style.maxWidth = "", r(e, e.clientHeight, 0, e.clientWidth))
        },
        r = function(e, t, n, a) {
          var l;
          n >= a ? e.style.maxWidth = a + "px" : (l = (n + a) / 2, e.style.maxWidth = l + "px", e.clientHeight > t ? r(e, t, l + 1, a) : r(e, t, n + 1, l))
        },
        l = function(e) {
          var t, n, a, r, l;
          return l = e.innerHTML, a = e.innerHTML.split(" "), (r = document.createElement("span")).id = "element-first-word", r.innerHTML = a[0], a = a.slice(1), e.innerHTML = "", e.appendChild(r), e.innerHTML += " " + a.join(" "), t = (r = document.getElementById("element-first-word")).offsetHeight, n = e.offsetHeight, e.innerHTML = l, n - 10 > t
        };
      t.balanceText = function(e) {
        e ? function(e) {
          selectorArray = e.split(",");
          for (var t = 0; t < selectorArray.length; t += 1)
            for (var a = document.querySelectorAll(selectorArray[t].trim()), r = 0; r < a.length; r += 1) {
              var l = a[r];
              n.push(l)
            }
        }(e) : n = document.querySelectorAll(".balance-text"), a();
        var t, r, l, i, d = (t = function() {
          a()
        }, r = 100, function() {
          var e = this,
            n = arguments,
            a = l && !i;
          clearTimeout(i), i = setTimeout((function() {
            i = null, l || t.apply(e, n)
          }), r), a && t.apply(e, n)
        });
        window.addEventListener("resize", d)
      }
    }
  }
]);