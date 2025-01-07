! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c9873099-1345-4d5b-9d94-18b2c25b9249", e._sentryDebugIdIdentifier = "sentry-dbid-c9873099-1345-4d5b-9d94-18b2c25b9249")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [8491, 9473], {
    19435: (e, t, s) => {
      var a = s(78007).Symbol;
      e.exports = a
    },
    7158: (e, t, s) => {
      var a = s(19435),
        n = s(16061),
        r = s(84968),
        c = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : c && c in Object(e) ? n(e) : r(e)
      }
    },
    48530: (e, t, s) => {
      var a = s(18478),
        n = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, a(e) + 1).replace(n, "") : e
      }
    },
    94626: (e, t, s) => {
      var a = "object" == typeof s.g && s.g && s.g.Object === Object && s.g;
      e.exports = a
    },
    16061: (e, t, s) => {
      var a = s(19435),
        n = Object.prototype,
        r = n.hasOwnProperty,
        c = n.toString,
        i = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        var t = r.call(e, i),
          s = e[i];
        try {
          e[i] = void 0;
          var a = !0
        } catch (e) {}
        var n = c.call(e);
        return a && (t ? e[i] = s : delete e[i]), n
      }
    },
    84968: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    78007: (e, t, s) => {
      var a = s(94626),
        n = "object" == typeof self && self && self.Object === Object && self,
        r = a || n || Function("return this")();
      e.exports = r
    },
    18478: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var s = e.length; s-- && t.test(e.charAt(s)););
        return s
      }
    },
    14963: (e, t, s) => {
      var a = s(27335),
        n = s(92346),
        r = s(58972),
        c = Math.max,
        i = Math.min;
      e.exports = function(e, t, s) {
        var l, d, o, g, m, u, f = 0,
          b = !1,
          x = !1,
          _ = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(t) {
          var s = l,
            a = d;
          return l = d = void 0, f = t, g = e.apply(a, s)
        }

        function k(e) {
          var s = e - u;
          return void 0 === u || s >= t || s < 0 || x && e - f >= o
        }

        function w() {
          var e = n();
          if (k(e)) return p(e);
          m = setTimeout(w, function(e) {
            var s = t - (e - u);
            return x ? i(s, o - (e - f)) : s
          }(e))
        }

        function p(e) {
          return m = void 0, _ && l ? h(e) : (l = d = void 0, g)
        }

        function v() {
          var e = n(),
            s = k(e);
          if (l = arguments, d = this, u = e, s) {
            if (void 0 === m) return function(e) {
              return f = e, m = setTimeout(w, t), b ? h(e) : g
            }(u);
            if (x) return clearTimeout(m), m = setTimeout(w, t), h(u)
          }
          return void 0 === m && (m = setTimeout(w, t)), g
        }
        return t = r(t) || 0, a(s) && (b = !!s.leading, o = (x = "maxWait" in s) ? c(r(s.maxWait) || 0, t) : o, _ = "trailing" in s ? !!s.trailing : _), v.cancel = function() {
          void 0 !== m && clearTimeout(m), f = 0, l = u = d = m = void 0
        }, v.flush = function() {
          return void 0 === m ? g : p(n())
        }, v
      }
    },
    27335: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    95360: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    87416: (e, t, s) => {
      var a = s(7158),
        n = s(95360);
      e.exports = function(e) {
        return "symbol" == typeof e || n(e) && "[object Symbol]" == a(e)
      }
    },
    92346: (e, t, s) => {
      var a = s(78007);
      e.exports = function() {
        return a.Date.now()
      }
    },
    58972: (e, t, s) => {
      var a = s(48530),
        n = s(27335),
        r = s(87416),
        c = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return NaN;
        if (n(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = n(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = a(e);
        var s = i.test(e);
        return s || l.test(e) ? d(e.slice(2), s ? 2 : 8) : c.test(e) ? NaN : +e
      }
    },
    62811: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => l
      });
      var a = s(89779);
      const n = {
        pillBtn: "rockstargames-sites-gta-gen9b59962d0e68ccd73b5ee2e571528d469",
        selected: "rockstargames-sites-gta-gen9f5c57dad202e0d6ff855d5a4aca2c804",
        plusButton: "rockstargames-sites-gta-gen9cffaf489342637258d28f9b3b718836a",
        small: "rockstargames-sites-gta-gen9b8abf927f0ba0af0d8ac0e9c77690d34",
        btnText: "rockstargames-sites-gta-gen9e6e56461bfc2e426c4abc5451cd17284",
        btnTexticon: "rockstargames-sites-gta-gen9cef9f9ce913d167a1fe2e7118a407cdd",
        whiteBtn: "rockstargames-sites-gta-gen9b257e0629b9f8e101791d7a948ed15be",
        blackBtn: "rockstargames-sites-gta-gen9cb03bccaee79394858682d2ce4d08253",
        transparentBtn: "rockstargames-sites-gta-gen9d0460159a17533d4d23686d7dca76794",
        iconBtn: "rockstargames-sites-gta-gen9ac61186c3c22346c9a4ee2cd2820d341",
        link: "rockstargames-sites-gta-gen9c5920e56149b82f20f4db2ad9d397495",
        xboxone: "rockstargames-sites-gta-gen9a7057f2e6d398341f57bc462716d0508",
        xboxseriesxs: "rockstargames-sites-gta-gen9a693ab5879f34d7dea1737d3172ed4e4",
        ps4: "rockstargames-sites-gta-gen9a029ff88fc9aef470aaeef8053f90436",
        ps5: "rockstargames-sites-gta-gen9e25638751cf3e7267db23c6a401fcc36",
        pc: "rockstargames-sites-gta-gen9e03d92653f19a7ae3c4b3d5137bc9909"
      };
      var r = s(46632);
      const c = e => {
          let {
            children: t,
            className: s,
            onClick: a,
            style: n,
            ariaLabel: c
          } = e;
          return (0, r.jsx)("button", {
            className: s,
            onClick: a,
            style: n,
            type: "button",
            "aria-label": c,
            children: t
          })
        },
        i = e => {
          let {
            children: t,
            className: s,
            onClick: n,
            style: c,
            to: i,
            ariaLabel: l
          } = e;
          return (0, r.jsx)(a.NavLink, {
            className: s,
            onClick: n,
            style: c,
            to: i,
            "aria-label": l,
            children: t
          })
        },
        l = e => {
          let {
            btnColor: t = "#fff",
            className: s = "",
            consoleBtn: a,
            icon: l = "",
            img: d,
            labelColor: o = "#000",
            onClick: g,
            secondText: m,
            size: u,
            text: f,
            to: b,
            type: x = "",
            ariaLabel: _
          } = e;
          const h = [n.plusButton, n[x] ?? "", n[u] ?? "", n[a] ?? "", s].join(" "),
            k = {
              "--hvr-color": t ?? o,
              "--hvr-bg-color": o ?? t,
              "--hvr-border-color": t ?? o
            },
            w = (0, r.jsxs)(r.Fragment, {
              children: [d ? (0, r.jsx)("img", {
                src: d,
                alt: ""
              }) : "", (0, r.jsxs)("div", {
                className: n.btnText,
                icon: l,
                children: [f, m ? (0, r.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, r.jsx)("span", {
                onClick: g,
                onKeyDown: g,
                className: h,
                role: "button",
                "aria-label": _,
                tabIndex: 0,
                children: (0, r.jsx)("a", {
                  href: b,
                  target: e,
                  children: w
                })
              })
            }
            return (0, r.jsx)(i, {
              className: h,
              onClick: g,
              style: {
                ...k
              },
              to: b,
              ariaLabel: _,
              children: w
            })
          }
          return (0, r.jsx)(c, {
            className: h,
            onClick: g,
            style: {
              ...k
            },
            ariaLabel: _,
            children: w
          })
        }
    },
    77937: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        default: () => G
      });
      var a = s(94430),
        n = s.n(a),
        r = s(74401),
        c = s(28089);
      var i = s(46632);
      const l = e => {
        let {
          backgroundImage: t,
          image: s,
          logoHorizontalPosition: a,
          logoVerticalPosition: l,
          enableOverlay: d = !1,
          overlayBackground: o = "rgba(0,0,0,0.25)"
        } = e;
        const g = (0, c.useImageParser)(s ?? {}),
          m = (0, r.useGetCdnSource)(t?.mobile ?? null),
          u = (0, r.useGetCdnSource)(t?.desktop ?? m),
          f = g?.src?.mobile,
          b = g?.src?.desktop ?? f;
        return (0, i.jsx)("div", {
          className: n()("rockstargames-sites-gta-gen9ed09e8cd8784cef75c8e083c6d5195e5", d ? "rockstargames-sites-gta-gen9ba63665ed9f22bf03682026e6367a0b3" : ""),
          style: {
            "--overlay-background-color": o
          },
          children: (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d46e1512d9373817c2ca8cac7190158b",
            style: {
              "--background-image-mobile": `url(${m})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": a ?? "normal",
              "--logo-align-position": l ?? "normal"
            },
            children: b && (0, i.jsx)("img", {
              src: b,
              className: "rockstargames-sites-gta-gen9d0a7642eb372c8ebe2af888a62a45194",
              alt: g?.alt ?? ""
            })
          })
        })
      };
      var d = s(71403),
        o = s(44632),
        g = s(42756),
        m = s(96717);
      const u = (0, m.defineMessages)({
          countdown_timer_header_title: {
            id: "countdown_timer_header_title",
            defaultMessage: "Time Remaining"
          },
          countdown_timer_header_pending_title: {
            id: "countdown_timer_header_pending_title",
            defaultMessage: "Calculating Results..."
          },
          countdown_timer_days_title_long: {
            id: "countdown_timer_days_title_long",
            defaultMessage: "Days"
          },
          countdown_timer_hours_title_long: {
            id: "countdown_timer_hours_title_long",
            defaultMessage: "Hours"
          },
          countdown_timer_minutes_title_long: {
            id: "countdown_timer_minutes_title_long",
            defaultMessage: "Minutes"
          },
          countdown_timer_seconds_title_long: {
            id: "countdown_timer_seconds_title_long",
            defaultMessage: "Seconds"
          },
          countdown_timer_days_title_short: {
            id: "countdown_timer_days_title_short",
            defaultMessage: "D"
          },
          countdown_timer_hours_title_short: {
            id: "countdown_timer_hours_title_short",
            defaultMessage: "H"
          },
          countdown_timer_minutes_title_short: {
            id: "countdown_timer_minutes_title_short",
            defaultMessage: "M"
          },
          countdown_timer_seconds_title_short: {
            id: "countdown_timer_seconds_title_short",
            defaultMessage: "S"
          },
          countdown_timer_success_title: {
            id: "countdown_timer_success_title",
            defaultMessage: "Success"
          },
          countdown_timer_failure_title: {
            id: "countdown_timer_failure_title",
            defaultMessage: "Failure"
          }
        }),
        f = {
          pillBtn: "rockstargames-sites-gta-gen9cedc070873a057363ceaefaf85f9eb96",
          selected: "rockstargames-sites-gta-gen9dcb3f24b7969a9c8ed5e272eef8f34a4",
          countdownContainer: "rockstargames-sites-gta-gen9dffbccdab66508d8c2c485bc569f914c",
          countdownHeader: "rockstargames-sites-gta-gen9dd22344b045a14b5321518dd51a68b15",
          pendingResults: "rockstargames-sites-gta-gen9db66ea9e439e040b75db40b8afc68b54",
          countDownTimer: "rockstargames-sites-gta-gen9e45eb1e261b936972e9dd6b5abd82646",
          countdownBlock: "rockstargames-sites-gta-gen9fa5628d465dd05a47d8d5e8d25ff3a76",
          counter: "rockstargames-sites-gta-gen9d6fa39f761d1ab9d53271743d189b602",
          countdownLabel: "rockstargames-sites-gta-gen9f576cb3d8f9e58e4cbdcda87f60760f2",
          container: "rockstargames-sites-gta-gen9fb7022008dcc028ef78f1d4c6300e654",
          accentImage: "rockstargames-sites-gta-gen9d052abad5051d4699afda1c888a94111",
          failureLabel: "rockstargames-sites-gta-gen9f637125e954900e1e3f6dbc30c566931",
          successLabel: "rockstargames-sites-gta-gen9dcc87457d47b9a7e8678e2099da8387a",
          textGlow: "rockstargames-sites-gta-gen9ec255862d45ef8396868808f0312fdf2",
          glow: "rockstargames-sites-gta-gen9e994f4b7736affcdce75b42d05d1b27e"
        },
        b = (0, g.withLocale)((e => {
          let {
            targetDate: t,
            status: s = "active",
            theme: a,
            includeSeconds: c = !1,
            showBackground: l,
            backgroundColor: b,
            successBgImages: x,
            failureBgImages: _
          } = e;
          const {
            isMobile: h
          } = (0, g.useWindowResize)(), [k, w] = (0, d.useState)(!1), p = (0, r.useGetCdnSource)(x?.imageLeft?.mobile ?? null), v = (0, r.useGetCdnSource)(x?.imageLeft?.desktop ?? p), j = (0, r.useGetCdnSource)(x?.imageRight?.mobile ?? null), N = (0, r.useGetCdnSource)(x?.imageRight?.desktop ?? j), y = (0, r.useGetCdnSource)(_?.imageLeft?.mobile ?? null), M = (0, r.useGetCdnSource)(_?.imageLeft?.desktop ?? y), S = (0, r.useGetCdnSource)(_?.imageRight?.mobile ?? null), C = (0, r.useGetCdnSource)(_?.imageRight?.desktop ?? S), B = (0, d.useCallback)(((e, t) => {
            const s = new Date,
              a = (0, o.O)(e, s);
            return a <= 0 ? (w(!0), {
              days: "00",
              hours: "00",
              minutes: "00",
              seconds: "00"
            }) : {
              days: String(Math.floor(a / 86400)).padStart(2, "0"),
              hours: String(Math.floor(a % 86400 / 3600)).padStart(2, "0"),
              minutes: String(Math.floor(a % 3600 / 60)).padStart(2, "0"),
              seconds: t ? String(Math.floor(a % 60)).padStart(2, "0") : "00"
            }
          }), []), [I, L] = (0, d.useState)((() => B(t, c)));
          return (0, d.useEffect)((() => {
            const e = setInterval((() => {
              L(B(t, c))
            }), c ? 1e3 : 6e4);
            return () => clearInterval(e)
          }), [t, c, B]), (0, i.jsxs)("div", {
            className: n()(f.countdownContainer, s),
            style: {
              "--counter-text-color": a?.enableTextGradient ? "transparent" : a?.textColor,
              "--counter-text-stroke-color": a?.enableTextStroke ? a?.textStrokeColor : "unset",
              "--counter-text-stroke-width": a?.enableTextStroke ? a?.textStrokeWidth : "unset",
              "--counter-text-shadow": a?.enableTextShadow ? a.textShadow : "unset",
              "--counter-text-gradient": a?.enableTextGradient ? a.textGradient : "none",
              "--counter-background-color": l ? b : "none",
              "--counter-orientation": "vertical" === a?.counterOrientation ? "column" : "row"
            },
            children: ["active" === s && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("h1", {
                className: f.countdownHeader,
                children: (0, i.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_header_title
                })
              }), "active" === s && k && (0, i.jsx)("div", {
                "data-testid": "pendingResults",
                className: f.pendingResults,
                children: (0, i.jsx)("p", {
                  children: (0, i.jsx)(m.FormattedMessage, {
                    ...u.countdown_timer_header_pending_title
                  })
                })
              }), (0, i.jsxs)("ul", {
                "data-testid": "countdownTimer",
                className: n()(f.countDownTimer),
                children: [(0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(f.counter, a?.textGlow ? f.textGlow : ""),
                      children: I.days
                    }), (0, i.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_days_title_short
                      }) : (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(f.counter, a?.textGlow ? f.textGlow : ""),
                      children: I.hours
                    }), (0, i.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_hours_title_short
                      }) : (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(f.counter, a?.textGlow ? f.textGlow : ""),
                      children: I.minutes
                    }), (0, i.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_minutes_title_short
                      }) : (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), c && (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: n()(f.countdownBlock, f.secondsCounter),
                    children: [(0, i.jsx)("span", {
                      className: n()(f.counter, a?.textGlow ? f.textGlow : ""),
                      children: I.seconds
                    }), (0, i.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_seconds_title_short
                      }) : (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_seconds_title_long
                      })
                    })]
                  })
                })]
              })]
            }), "success" === s && (0, i.jsxs)("div", {
              className: f.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [(0, i.jsx)("img", {
                className: f.accentImage,
                src: v,
                alt: x?.imageLeft?.altText
              }), (0, i.jsx)("div", {
                "data-testid": "successMessage",
                className: f.successLabel,
                children: (0, i.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_success_title
                })
              }), (0, i.jsx)("img", {
                className: f.accentImage,
                src: N,
                alt: x?.imageRight?.altText
              })]
            }), "failure" === s && (0, i.jsxs)("div", {
              className: f.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [(0, i.jsx)("img", {
                className: f.accentImage,
                src: M,
                alt: _?.imageLeft?.altText
              }), (0, i.jsx)("div", {
                "data-testid": "failureMessage",
                className: f.failureLabel,
                children: (0, i.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_failure_title
                })
              }), (0, i.jsx)("img", {
                className: f.accentImage,
                src: C,
                alt: _?.imageRight?.altText
              })]
            })]
          })
        })),
        x = e => {
          let {
            milestones: t,
            incompleteImage: s,
            completedImage: a
          } = e;
          const n = (t.findLastIndex((e => e.active)) + 1) / t.length,
            c = 100 / n;
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e2b85b2eea9f5c5b1de14340e9ca70b8",
            children: [(0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f593b34d7e7d832c0c661f6fa56da016",
              style: {
                backgroundImage: `url(${(0,r.useGetCdnSource)(s)})`
              },
              "data-testid": "incompleteImage"
            }), (0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b95b71434ed7e54aee5d2ab15d4f30a8",
              style: {
                backgroundImage: `url(${(0,r.useGetCdnSource)(a)})`,
                backgroundSize: `${c}%`,
                width: 100 * n + "%"
              },
              "data-testid": "completedImage"
            }), t.map(((e, s) => (0, i.jsx)("div", {
              className: (0, r.classList)("rockstargames-sites-gta-gen9d4baab273071911a6488e078dcf8a854", 0 === s ? "rockstargames-sites-gta-gen9f94ba24bd2023dfc8bc7fa7dc51423e8" : "", s === t.length - 1 ? "rockstargames-sites-gta-gen9c2ae0481500b2df444bccaa5b4904837" : ""),
              "data-testid": "milestoneBox",
              children: (0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b31199c3d14b84a5c36a6847b3604e83"
              })
            }, s)))]
          })
        };
      var _ = s(42148);
      const h = (0, m.defineMessages)({
          milestone_marker_success_aria: {
            id: "milestone_marker_success_aria",
            defaultMessage: "Milestone achieved"
          }
        }),
        k = e => {
          let {
            title: t,
            date: s,
            active: a,
            final: r
          } = e;
          const c = (0, m.useIntl)(),
            l = a ? "rockstargames-sites-gta-gen9bd115bca85c8165906ec9ebc6c5978e3" : "",
            d = r ? "rockstargames-sites-gta-gen9d8aea31b88e125cdeed883c2bb2a3cd3" : "";
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d6e710a1f92fd65be7c9672ad80cf3d9",
            children: (0, i.jsxs)("div", {
              className: n()("rockstargames-sites-gta-gen9feab6bd12128b95efa364a54487b2901", l, d),
              children: [(0, i.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9f135a449f2811af9aabb7c1f865f8969",
                children: [(0, i.jsx)("h4", {
                  children: t
                }), a && (0, i.jsx)(_.Jl, {
                  label: c.formatMessage(h.milestone_marker_success_aria),
                  className: "rockstargames-sites-gta-gen9dc7353331b2aa89f4fa04c75c826ad10",
                  testId: "checkmark"
                })]
              }), s && (0, i.jsx)("p", {
                className: "rockstargames-sites-gta-gen9e1627aa7e659e1a50423c53608f2d30c",
                children: c.formatDate(s, {
                  month: "short",
                  day: "numeric"
                })
              })]
            })
          })
        },
        w = e => {
          let {
            alt: t = "",
            className: s = "",
            fill: a = "#E0330E"
          } = e;
          return (0, i.jsxs)("svg", {
            className: s,
            version: "1.1",
            width: "15",
            height: "11",
            viewBox: "0 0 15 11",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: t
            }), (0, i.jsx)("path", {
              d: "M7.5 10.5166L0.138783 0.0166029L14.8612 0.0166017L7.5 10.5166Z",
              fill: a
            })]
          })
        },
        p = {
          pillBtn: "rockstargames-sites-gta-gen9b20e5d16aa58b6b553464f673927a4bb",
          selected: "rockstargames-sites-gta-gen9ff158f70b8ee379ecc89d7f237ccb3b9",
          milestoneHeading: "rockstargames-sites-gta-gen9f359d4868ea779425e940e13d31428f6",
          milestoneTitle: "rockstargames-sites-gta-gen9e76b8b5d97d29944622adad20aa04a0f",
          milestoneGoal: "rockstargames-sites-gta-gen9be19a0d68b080e99f6f4258a36e1f65b",
          milestoneScroll: "rockstargames-sites-gta-gen9e9335c31d51b3629b1949e62ee11162f",
          milestoneGroup: "rockstargames-sites-gta-gen9dc9b52f789c9e1a21966fdb5a327c09e",
          milestoneFlags: "rockstargames-sites-gta-gen9b375f2c662c9e7fa7bae5717c9f7791b",
          milestoneMarkers: "rockstargames-sites-gta-gen9cdc5cacccaf09b535369aaaf6fd9b9bb",
          milestoneFlag: "rockstargames-sites-gta-gen9a479115d004522519e5d6605f1be92cd"
        },
        v = e => {
          let {
            heading: t,
            completedMilestoneImage: s,
            incompleteMilestoneImage: a,
            milestones: n,
            initialTitle: r,
            initialDate: c
          } = e;
          const l = (0, d.useRef)(null),
            o = (0, d.useRef)(null),
            [m, u] = (0, d.useState)(!1),
            {
              isMobile: f
            } = (0, g.useWindowResize)();
          if ((0, g.useCursorScroll)(l), (0, d.useEffect)((() => {
              f && l.current && o.current && (l.current.scrollLeft = o.current.getBoundingClientRect().left - window.innerWidth / 2, l.current.addEventListener("scroll", (e => {
                const t = e.target;
                t && Math.ceil(t.scrollLeft + t.clientWidth) >= t.scrollWidth ? u(!0) : u(!1)
              })))
            }), [f]), !n || 0 === n.length) return null;
          const b = n.findLastIndex((e => e.active)),
            h = n[n.length - 1].title;
          return (0, i.jsxs)("section", {
            className: p.milestoneIndicators,
            children: [(0, i.jsxs)("div", {
              className: p.milestoneHeading,
              children: [(0, i.jsx)("h3", {
                className: p.milestoneTitle,
                children: t
              }), !m && (0, i.jsxs)("div", {
                className: p.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [h, (0, i.jsx)(_.Qp, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, i.jsx)("div", {
              className: p.milestoneScroll,
              ref: l,
              children: (0, i.jsxs)("div", {
                className: p.milestoneGroup,
                children: [(0, i.jsxs)("div", {
                  className: p.milestoneFlags,
                  children: [-1 === b ? (0, i.jsx)("div", {
                    ref: o,
                    className: p.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, i.jsx)(w, {})
                  }) : (0, i.jsx)("div", {
                    className: p.milestoneFlag
                  }), n.map(((e, t) => t === b ? (0, i.jsx)("div", {
                    ref: o,
                    className: p.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, i.jsx)(w, {})
                  }, t) : (0, i.jsx)("div", {
                    className: p.milestoneFlag
                  }, t)))]
                }), (0, i.jsx)(x, {
                  milestones: n,
                  incompleteImage: a,
                  completedImage: s
                }), (0, i.jsxs)("div", {
                  className: p.milestoneMarkers,
                  children: [(0, i.jsx)(k, {
                    title: r,
                    date: c,
                    active: !0
                  }), n.map(((e, t) => (0, i.jsx)(k, {
                    title: e.title,
                    date: e.date,
                    active: e.active,
                    final: t === n.length - 1
                  }, t)))]
                })]
              })
            })]
          })
        };
      var j = s(81902),
        N = s(40207),
        y = s(89269);
      const M = (0, m.defineMessages)({
        no_rewards_available_title: {
          id: "no_rewards_available_title",
          defaultMessage: "No rewards available"
        },
        rewards_carousel_previous: {
          id: "rewards_carousel_previous",
          defaultMessage: "Previous"
        },
        rewards_carousel_next: {
          id: "rewards_carousel_next",
          defaultMessage: "Next"
        }
      });
      var S = s(62811);
      const C = e => {
          let {
            heading: t,
            description: s,
            ctaText: a,
            ctaLink: n
          } = e;
          const {
            track: r
          } = (0, N.useGtmTrack)();
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9be01331043fa82f22bb769fd8586a621",
            children: [t && (0, i.jsx)("h1", {
              className: "rockstargames-sites-gta-gen9a90a5344060fff1d460fd727e4d74adb",
              children: t
            }), (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c8c025bd26dd1c31cf37937ae72c5f1d",
              children: [s && (0, i.jsx)("p", {
                className: "rockstargames-sites-gta-gen9a2fb55c0617121317877bc1096f164c6",
                children: s
              }), a && (0, i.jsx)(S.A, {
                className: "rockstargames-sites-gta-gen9ad653c7e9d155d97ca939e3fd8ce2188",
                text: a,
                to: n,
                onClick: () => r({
                  event: "cta_learn",
                  element_placement: "community challenge cta",
                  link_url: n,
                  text: a?.toLowerCase()
                })
              })]
            })]
          })
        },
        B = e => {
          let {
            title: t,
            subTitle: s,
            rewardsBgImage: a
          } = e;
          const n = (0, r.useGetCdnSource)(a?.mobile ?? null),
            c = (0, r.useGetCdnSource)(a?.desktop ?? n);
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b32fe3d4623889cde297fb913c90393c",
            style: {
              "--rewards-background-image": `url(${c})`
            },
            children: (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9bf4e950111fc0d5f083eff61213f31d0",
              children: [(0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f98a844c4f1b9945971af59786264657",
                children: s
              }), (0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9bcd23c06f2ed2429153dc51303ae2159",
                children: t
              })]
            })
          })
        },
        I = {
          pillBtn: "rockstargames-sites-gta-gen9b845cad8d25d6d54ed5ccc2157adb77c",
          selected: "rockstargames-sites-gta-gen9e7260573331f02c67437ec2901e4a1d3",
          rewardsWrapper: "rockstargames-sites-gta-gen9d7399e5db4bf9dcad65247005277c53b",
          rewardPanel: "rockstargames-sites-gta-gen9b6b91b0391c8974fc3e715f82288861e",
          leftColumn: "rockstargames-sites-gta-gen9e62891d8966c8e232989bcd93e73c788",
          rightColumn: "rockstargames-sites-gta-gen9d4b6b2bdf8fee149cefa16506f5206b3",
          noRewardsAvailable: "rockstargames-sites-gta-gen9e3f52e880e4e28da73c4843d7bd591e6",
          titleHeading: "rockstargames-sites-gta-gen9fd6c782459cfac15430de72e877595f9",
          navControl: "rockstargames-sites-gta-gen9a49762b7b888551b8f9580422659c2cf",
          btnArea: "rockstargames-sites-gta-gen9a9d7da7423694871f7f7c8b9dc8394d2",
          nextBtn: "rockstargames-sites-gta-gen9dad3d89433f49eaab8e51dcf430d504d",
          prevBtn: "rockstargames-sites-gta-gen9b6bc64a4668bfcd2e065d4f078f58316",
          disabled: "rockstargames-sites-gta-gen9e576d455ff8f03de8c17ccfe914e0db4",
          "swiper-preloader-spin": "rockstargames-sites-gta-gen9e2fecf1bddba290114773b5c09be536c"
        },
        L = (0, g.withLocale)((e => {
          let {
            deck: t,
            detail: s
          } = e;
          const {
            isMobile: a
          } = (0, g.useWindowResize)(), n = (0, m.useIntl)(), c = (0, d.useRef)(null), l = (0, d.useRef)(null), o = (0, d.useRef)(null), u = (0, d.useRef)(), [f, b] = (0, d.useState)(!1), [x, _] = (0, d.useState)(), [h, k] = (0, d.useState)(!1), [w, p] = (0, d.useState)(!1), {
            track: v
          } = (0, N.useGtmTrack)(), S = u?.current?.swiper, L = t?.heading, T = t?.cards;
          (0, d.useEffect)((() => {
            if (S && "number" == typeof S?.params?.slidesPerView) {
              const e = S.slides?.length;
              b(e > S.params.slidesPerView)
            }
          }), [T, S?.params.slidesPerView]), (0, d.useEffect)((() => {
            _({
              nextEl: l.current,
              prevEl: c.current
            })
          }), [l, c]);
          const G = () => {
              S?.slidePrev(300, !1), v({
                event: "carousel_prev",
                element_placement: "community challenge rewards"
              })
            },
            F = () => {
              S?.slideNext(300, !1), v({
                event: "carousel_next",
                element_placement: "community challenge rewards"
              })
            },
            R = e => {
              if ("Tab" === e.key && !e.shiftKey) {
                const t = S?.slides[S?.activeIndex].querySelector('a, button, [role="button"]');
                t && t?.tabIndex > -1 && (e.preventDefault(), t.focus())
              }
            };
          return (0, i.jsxs)("div", {
            className: I.rewardPanel,
            children: [(0, i.jsx)("div", {
              className: I.leftColumn,
              children: (0, i.jsx)(C, {
                ...s
              })
            }), (0, i.jsx)("div", {
              ref: o,
              className: I.rightColumn,
              children: T?.length ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                  className: I.navControl,
                  children: [(0, i.jsx)("h1", {
                    className: I.titleHeading,
                    children: L
                  }), !a && f && (0, i.jsxs)("div", {
                    className: I.btnArea,
                    children: [(0, i.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: c,
                      className: (0, r.classList)(I.prevBtn, h ? I.disabled : ""),
                      onClick: G,
                      "aria-label": n.formatMessage(M.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, i.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: l,
                      className: (0, r.classList)(I.nextBtn, w ? I.disabled : ""),
                      onClick: F,
                      onKeyDown: R,
                      "aria-label": n.formatMessage(M.rewards_carousel_next),
                      type: "button",
                      disabled: w
                    })]
                  })]
                }), (0, i.jsxs)(j.RC, {
                  slidesPerView: 1.25,
                  ref: u,
                  onSlideChange: e => {
                    k(e.isBeginning), p(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    k(e.isBeginning), p(e.isEnd)
                  },
                  modules: [y.Vx],
                  spaceBetween: 50,
                  breakpoints: {
                    0: {
                      spaceBetween: 16,
                      slidesPerView: 1
                    },
                    414: {
                      spaceBetween: 16,
                      slidesPerView: 1.25
                    },
                    768: {
                      spaceBetween: 16,
                      slidesPerView: 1.5
                    },
                    1024: {
                      spaceBetween: 18,
                      slidesPerView: 2
                    },
                    1280: {
                      spaceBetween: 18,
                      slidesPerView: 1.25
                    },
                    1440: {
                      spaceBetween: 18,
                      slidesPerView: 1.5
                    },
                    1920: {
                      spaceBetween: 20,
                      slidesPerView: 2
                    },
                    2560: {
                      spaceBetween: 22,
                      slidesPerView: 2
                    }
                  },
                  navigation: x,
                  slideClass: "swiper-slide",
                  onSlideChangeTransitionEnd: () => {
                    v({
                      event: "carousel_swipe",
                      element_placement: "community challenge rewards"
                    })
                  },
                  children: [a && (0, i.jsxs)("div", {
                    className: I.btnArea,
                    children: [(0, i.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: c,
                      className: (0, r.classList)(I.prevBtn, h ? I.disabled : ""),
                      onClick: G,
                      "aria-label": n.formatMessage(M.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, i.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: l,
                      className: (0, r.classList)(I.nextBtn, w ? I.disabled : ""),
                      onClick: F,
                      onKeyDown: R,
                      "aria-label": n.formatMessage(M.rewards_carousel_next),
                      type: "button",
                      disabled: w
                    })]
                  }), T.map(((e, t) => {
                    const s = e?.title,
                      a = e?.subTitle,
                      n = e?.rewardsBgImage;
                    return (0, i.jsx)(j.qr, {
                      className: I.slide,
                      onFocus: () => (e => {
                        S?.slideTo(e)
                      })(t),
                      children: (0, i.jsx)(B, {
                        title: s,
                        subTitle: a,
                        rewardsBgImage: n
                      })
                    }, t)
                  }))]
                })]
              }) : (0, i.jsx)("div", {
                className: I.noRewardsAvailable,
                children: (0, i.jsx)(m.FormattedMessage, {
                  ...M.no_rewards_available_title
                })
              })
            })]
          })
        })),
        T = {
          pillBtn: "rockstargames-sites-gta-gen9fdcd1fe581f9d66ecd103ba4545c9602",
          selected: "rockstargames-sites-gta-gen9d96573d407db448dec0e014357935d80",
          communityChallenges: "rockstargames-sites-gta-gen9a08d01c5660d4155c354cc7cc48be71a",
          wrapper: "rockstargames-sites-gta-gen9c3163576f66e7b0ba18245cfda96c975",
          communityChallengeInfoPanel: "rockstargames-sites-gta-gen9ac547b1575d60873a21f01524642a3b4",
          content: "rockstargames-sites-gta-gen9b594194f4f7db6c5db8432dc16b51bf2"
        },
        G = e => {
          let {
            banner: t,
            countdown: s,
            rewards: a,
            milestoneIndicator: n
          } = e;
          return (0, i.jsx)("div", {
            className: T.communityChallenges,
            children: (0, i.jsxs)("div", {
              className: T.wrapper,
              children: [t && (0, i.jsx)(l, {
                ...t
              }), (0, i.jsxs)("div", {
                className: T.content,
                children: [s?.timer && (0, i.jsx)(b, {
                  ...s.timer
                }), n && (0, i.jsx)(v, {
                  ...n
                }), a && (0, i.jsx)("section", {
                  className: T.rewardsSection,
                  children: (0, i.jsx)(L, {
                    ...a
                  })
                })]
              })]
            })
          })
        }
    }
  }
]);