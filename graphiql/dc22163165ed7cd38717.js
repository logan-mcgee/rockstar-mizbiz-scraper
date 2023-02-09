"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [197], {
    2197: (e, r, n) => {
      n.r(r), n.d(r, {
        b: () => f
      });
      var t = n(1703),
        i = Object.defineProperty,
        o = (e, r) => i(e, "name", {
          value: r,
          configurable: !0
        });

      function a(e, r) {
        return r.forEach((function(r) {
          r && "string" != typeof r && !Array.isArray(r) && Object.keys(r).forEach((function(n) {
            if ("default" !== n && !(n in e)) {
              var t = Object.getOwnPropertyDescriptor(r, n);
              Object.defineProperty(e, n, t.get ? t : {
                enumerable: !0,
                get: function() {
                  return r[n]
                }
              })
            }
          }))
        })), Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }))
      }
      o(a, "_mergeNamespaces");
      var l = {
        exports: {}
      };
      ! function(e) {
        function r(r) {
          return function(n, t) {
            var i = t.line,
              a = n.getLine(i);

            function l(r) {
              for (var o, l = t.ch, f = 0;;) {
                var s = l <= 0 ? -1 : a.lastIndexOf(r[0], l - 1);
                if (-1 != s) {
                  if (1 == f && s < t.ch) break;
                  if (o = n.getTokenTypeAt(e.Pos(i, s + 1)), !/^(comment|string)/.test(o)) return {
                    ch: s + 1,
                    tokenType: o,
                    pair: r
                  };
                  l = s - 1
                } else {
                  if (1 == f) break;
                  f = 1, l = a.length
                }
              }
            }

            function f(r) {
              var t, o, a = 1,
                l = n.lastLine(),
                f = r.ch;
              e: for (var s = i; s <= l; ++s)
                for (var u = n.getLine(s), c = s == i ? f : 0;;) {
                  var g = u.indexOf(r.pair[0], c),
                    p = u.indexOf(r.pair[1], c);
                  if (g < 0 && (g = u.length), p < 0 && (p = u.length), (c = Math.min(g, p)) == u.length) break;
                  if (n.getTokenTypeAt(e.Pos(s, c + 1)) == r.tokenType)
                    if (c == g) ++a;
                    else if (!--a) {
                    t = s, o = c;
                    break e
                  }++c
                }
              return null == t || i == t ? null : {
                from: e.Pos(i, f),
                to: e.Pos(t, o)
              }
            }
            o(l, "findOpening"), o(f, "findRange");
            for (var s = [], u = 0; u < r.length; u++) {
              var c = l(r[u]);
              c && s.push(c)
            }
            for (s.sort((function(e, r) {
                return e.ch - r.ch
              })), u = 0; u < s.length; u++) {
              var g = f(s[u]);
              if (g) return g
            }
            return null
          }
        }
        o(r, "bracketFolding"), e.registerHelper("fold", "brace", r([
          ["{", "}"],
          ["[", "]"]
        ])), e.registerHelper("fold", "brace-paren", r([
          ["{", "}"],
          ["[", "]"],
          ["(", ")"]
        ])), e.registerHelper("fold", "import", (function(r, n) {
          function t(n) {
            if (n < r.firstLine() || n > r.lastLine()) return null;
            var t = r.getTokenAt(e.Pos(n, 1));
            if (/\S/.test(t.string) || (t = r.getTokenAt(e.Pos(n, t.end + 1))), "keyword" != t.type || "import" != t.string) return null;
            for (var i = n, o = Math.min(r.lastLine(), n + 10); i <= o; ++i) {
              var a = r.getLine(i).indexOf(";");
              if (-1 != a) return {
                startCh: t.end,
                end: e.Pos(i, a)
              }
            }
          }
          o(t, "hasImport");
          var i, a = n.line,
            l = t(a);
          if (!l || t(a - 1) || (i = t(a - 2)) && i.end.line == a - 1) return null;
          for (var f = l.end;;) {
            var s = t(f.line + 1);
            if (null == s) break;
            f = s.end
          }
          return {
            from: r.clipPos(e.Pos(a, l.startCh + 1)),
            to: f
          }
        })), e.registerHelper("fold", "include", (function(r, n) {
          function t(n) {
            if (n < r.firstLine() || n > r.lastLine()) return null;
            var t = r.getTokenAt(e.Pos(n, 1));
            return /\S/.test(t.string) || (t = r.getTokenAt(e.Pos(n, t.end + 1))), "meta" == t.type && "#include" == t.string.slice(0, 8) ? t.start + 8 : void 0
          }
          o(t, "hasInclude");
          var i = n.line,
            a = t(i);
          if (null == a || null != t(i - 1)) return null;
          for (var l = i; null != t(l + 1);) ++l;
          return {
            from: e.Pos(i, a + 1),
            to: r.clipPos(e.Pos(l))
          }
        }))
      }(t.a.exports);
      var f = a({
        __proto__: null,
        default: l.exports
      }, [l.exports])
    }
  }
]);