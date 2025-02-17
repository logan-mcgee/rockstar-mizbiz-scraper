! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "01915278-eca7-4513-9350-93db8b4ab612", e._sentryDebugIdIdentifier = "sentry-dbid-01915278-eca7-4513-9350-93db8b4ab612")
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
  [8491, 872], {
    79512: (e, s, t) => {
      t.d(s, {
        A: () => l
      });
      var a = t(9623);
      const n = {
        pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
        selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
        plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
        small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
        btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
        btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
        whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
        blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
        transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
        iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
        link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
        xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
        xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999",
        ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
        ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
        pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844"
      };
      var r = t(91029);
      const c = e => {
          let {
            children: s,
            className: t,
            onClick: a,
            style: n,
            ariaLabel: c
          } = e;
          return (0, r.jsx)("button", {
            className: t,
            onClick: a,
            style: n,
            type: "button",
            "aria-label": c,
            children: s
          })
        },
        i = e => {
          let {
            children: s,
            className: t,
            onClick: n,
            style: c,
            to: i,
            ariaLabel: l
          } = e;
          return (0, r.jsx)(a.NavLink, {
            className: t,
            onClick: n,
            style: c,
            to: i,
            "aria-label": l,
            children: s
          })
        },
        l = e => {
          let {
            btnColor: s = "#fff",
            className: t = "",
            consoleBtn: a,
            icon: l = "",
            img: d,
            labelColor: o = "#000",
            onClick: g,
            secondText: m,
            size: u,
            text: b,
            to: f,
            type: _ = "",
            ariaLabel: h
          } = e;
          const x = [n.plusButton, n[_] ?? "", n[u] ?? "", n[a] ?? "", t].join(" "),
            w = {
              "--hvr-color": s ?? o,
              "--hvr-bg-color": o ?? s,
              "--hvr-border-color": s ?? o
            },
            k = (0, r.jsxs)(r.Fragment, {
              children: [d ? (0, r.jsx)("img", {
                src: d,
                alt: ""
              }) : "", (0, r.jsxs)("div", {
                className: n.btnText,
                icon: l,
                children: [b, m ? (0, r.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (f) {
            if (f.startsWith("http")) {
              const e = f.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, r.jsx)("span", {
                onClick: g,
                onKeyDown: g,
                className: x,
                role: "button",
                "aria-label": h,
                tabIndex: 0,
                children: (0, r.jsx)("a", {
                  href: f,
                  target: e,
                  children: k
                })
              })
            }
            return (0, r.jsx)(i, {
              className: x,
              onClick: g,
              style: {
                ...w
              },
              to: f,
              ariaLabel: h,
              children: k
            })
          }
          return (0, r.jsx)(c, {
            className: x,
            onClick: g,
            style: {
              ...w
            },
            ariaLabel: h,
            children: k
          })
        }
    },
    942: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => P
      });
      var a = t(24036),
        n = t.n(a),
        r = t(92440),
        c = t(8458);
      var i = t(91029);
      const l = e => {
        let {
          backgroundImage: s,
          image: t,
          logoHorizontalPosition: a,
          logoVerticalPosition: l,
          enableOverlay: d = !1,
          overlayBackground: o = "rgba(0,0,0,0.25)"
        } = e;
        const g = (0, c.S1)(t ?? {}),
          m = (0, r.useGetCdnSource)(s?.mobile ?? null),
          u = (0, r.useGetCdnSource)(s?.desktop ?? m),
          b = g?.src?.mobile,
          f = g?.src?.desktop ?? b;
        return (0, i.jsx)("div", {
          className: n()("rockstargames-sites-gta-gen9dd3eed68318843fe25f147a11901017e", d ? "rockstargames-sites-gta-gen9d1ac49cbb3da8269c13f1ccc1b515fb4" : ""),
          style: {
            "--overlay-background-color": o
          },
          children: (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b5e649bc428f66ddfa8db02936f5b69d",
            style: {
              "--background-image-mobile": `url(${m})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": a ?? "normal",
              "--logo-align-position": l ?? "normal"
            },
            children: f && (0, i.jsx)("img", {
              src: f,
              className: "rockstargames-sites-gta-gen9dab7157848250d13aea143ea8b7fae16",
              alt: g?.alt ?? ""
            })
          })
        })
      };
      var d = t(62229),
        o = t(86789),
        g = t(95966),
        m = t(81788);
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
        b = {
          pillBtn: "rockstargames-sites-gta-gen9df86d9e7034d0c18169eb37da1a92a19",
          selected: "rockstargames-sites-gta-gen9c0b2094d0e834c542f0d5aeda45d8fe8",
          countdownContainer: "rockstargames-sites-gta-gen9c383d665f5c3b266cdb191ceba0489eb",
          countdownHeader: "rockstargames-sites-gta-gen9af4f1876dc568b373e66363449a4238b",
          pendingResults: "rockstargames-sites-gta-gen9e2dec301204f8ebc6324d2bcebb0d5b1",
          countDownTimer: "rockstargames-sites-gta-gen9b33d322809ec0b09aef851e6dca73b11",
          countdownBlock: "rockstargames-sites-gta-gen9e0fd6be5b6c035a755dcccc738b8ae79",
          counter: "rockstargames-sites-gta-gen9db9851183ab6187e0a5b811dc868935e",
          countdownLabel: "rockstargames-sites-gta-gen9a5a92f35bc1b4a4dda2ba9cadb782fb9",
          container: "rockstargames-sites-gta-gen9a75315a80b4a2127779c1d0656a37dcb",
          accentImage: "rockstargames-sites-gta-gen9c7cc81d743042cdf8330175fbdc237c8",
          failureLabel: "rockstargames-sites-gta-gen9e04fcb94de64602e9bc436cf6f2e2c66",
          successLabel: "rockstargames-sites-gta-gen9d0a5db0538a803db976bde1b24a12b01",
          textGlow: "rockstargames-sites-gta-gen9c68be925ad17db7ea5e2493bd07891bf",
          glow: "rockstargames-sites-gta-gen9c3d444564997451d6a645f7c8a74329a"
        },
        f = e => {
          let {
            targetDate: s,
            status: t = "active",
            theme: a,
            includeSeconds: c = !1,
            showBackground: l,
            backgroundColor: f,
            successBgImages: _,
            failureBgImages: h
          } = e;
          const {
            isMobile: x
          } = (0, g.useWindowResize)(), [w, k] = (0, d.useState)(!1), p = (0, r.useGetCdnSource)(_?.imageLeft?.mobile ?? null), v = (0, r.useGetCdnSource)(_?.imageLeft?.desktop ?? p), j = (0, r.useGetCdnSource)(_?.imageRight?.mobile ?? null), N = (0, r.useGetCdnSource)(_?.imageRight?.desktop ?? j), y = (0, r.useGetCdnSource)(h?.imageLeft?.mobile ?? null), C = (0, r.useGetCdnSource)(h?.imageLeft?.desktop ?? y), M = (0, r.useGetCdnSource)(h?.imageRight?.mobile ?? null), S = (0, r.useGetCdnSource)(h?.imageRight?.desktop ?? M), B = (0, d.useCallback)(((e, s) => {
            const t = new Date,
              a = (0, o.O)(e, t);
            return a <= 0 ? (k(!0), {
              days: "00",
              hours: "00",
              minutes: "00",
              seconds: "00"
            }) : {
              days: String(Math.floor(a / 86400)).padStart(2, "0"),
              hours: String(Math.floor(a % 86400 / 3600)).padStart(2, "0"),
              minutes: String(Math.floor(a % 3600 / 60)).padStart(2, "0"),
              seconds: s ? String(Math.floor(a % 60)).padStart(2, "0") : "00"
            }
          }), []), [I, L] = (0, d.useState)((() => B(s, c)));
          return (0, d.useEffect)((() => {
            const e = setInterval((() => {
              L(B(s, c))
            }), c ? 1e3 : 6e4);
            return () => clearInterval(e)
          }), [s, c, B]), (0, i.jsxs)("div", {
            className: n()(b.countdownContainer, t),
            style: {
              "--counter-text-color": a?.enableTextGradient ? "transparent" : a?.textColor,
              "--counter-text-stroke-color": a?.enableTextStroke ? a?.textStrokeColor : "unset",
              "--counter-text-stroke-width": a?.enableTextStroke ? a?.textStrokeWidth : "unset",
              "--counter-text-shadow": a?.enableTextShadow ? a.textShadow : "unset",
              "--counter-text-gradient": a?.enableTextGradient ? a.textGradient : "none",
              "--counter-background-color": l ? f : "none",
              "--counter-orientation": "vertical" === a?.counterOrientation ? "column" : "row"
            },
            children: ["active" === t && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("h1", {
                className: b.countdownHeader,
                children: (0, i.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_header_title
                })
              }), "active" === t && w && (0, i.jsx)("div", {
                "data-testid": "pendingResults",
                className: b.pendingResults,
                children: (0, i.jsx)("p", {
                  children: (0, i.jsx)(m.FormattedMessage, {
                    ...u.countdown_timer_header_pending_title
                  })
                })
              }), (0, i.jsxs)("ul", {
                "data-testid": "countdownTimer",
                className: n()(b.countDownTimer),
                children: [(0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: b.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(b.counter, a?.textGlow ? b.textGlow : ""),
                      children: I.days
                    }), (0, i.jsx)("div", {
                      className: b.countdownLabel,
                      children: x ? (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_days_title_short
                      }) : (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: b.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(b.counter, a?.textGlow ? b.textGlow : ""),
                      children: I.hours
                    }), (0, i.jsx)("div", {
                      className: b.countdownLabel,
                      children: x ? (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_hours_title_short
                      }) : (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: b.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(b.counter, a?.textGlow ? b.textGlow : ""),
                      children: I.minutes
                    }), (0, i.jsx)("div", {
                      className: b.countdownLabel,
                      children: x ? (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_minutes_title_short
                      }) : (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), c && (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: n()(b.countdownBlock, b.secondsCounter),
                    children: [(0, i.jsx)("span", {
                      className: n()(b.counter, a?.textGlow ? b.textGlow : ""),
                      children: I.seconds
                    }), (0, i.jsx)("div", {
                      className: b.countdownLabel,
                      children: x ? (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_seconds_title_short
                      }) : (0, i.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_seconds_title_long
                      })
                    })]
                  })
                })]
              })]
            }), "success" === t && (0, i.jsxs)("div", {
              className: b.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [v && (0, i.jsx)("img", {
                className: b.accentImage,
                src: v,
                alt: _?.imageLeft?.altText
              }), (0, i.jsx)("div", {
                "data-testid": "successMessage",
                className: b.successLabel,
                children: (0, i.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_success_title
                })
              }), N && (0, i.jsx)("img", {
                className: b.accentImage,
                src: N,
                alt: _?.imageRight?.altText
              })]
            }), "failure" === t && (0, i.jsxs)("div", {
              className: b.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [C && (0, i.jsx)("img", {
                className: b.accentImage,
                src: C,
                alt: h?.imageLeft?.altText
              }), (0, i.jsx)("div", {
                "data-testid": "failureMessage",
                className: b.failureLabel,
                children: (0, i.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_failure_title
                })
              }), S && (0, i.jsx)("img", {
                className: b.accentImage,
                src: S,
                alt: h?.imageRight?.altText
              })]
            })]
          })
        };
      var _ = t(70727),
        h = t(5315);
      const x = e => {
          let {
            milestones: s,
            incompleteImage: t,
            completedImage: a
          } = e;
          const n = (s.findLastIndex((e => e.active)) + 1) / s.length,
            c = 100 / n;
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9db9153ad1fcdaae879f0cebf75ad5f67",
            children: [(0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9df5cc11b5bcabefeb20bc0f9747ebc07",
              style: {
                backgroundImage: `url(${(0,r.useGetCdnSource)(t)})`
              },
              "data-testid": "incompleteImage"
            }), (0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9eeebadb0565e0016deb8d8f50394c921",
              style: {
                backgroundImage: `url(${(0,r.useGetCdnSource)(a)})`,
                backgroundSize: `${c}%`,
                width: 100 * n + "%"
              },
              "data-testid": "completedImage"
            }), s.map(((e, t) => (0, i.jsx)("div", {
              className: (0, g.classList)("rockstargames-sites-gta-gen9faa53fa77749f0a05f711222185919e1", 0 === t ? "rockstargames-sites-gta-gen9fa6e2e8d17c632ef7af31fdfa3511bf4" : "", t === s.length - 1 ? "rockstargames-sites-gta-gen9b39f693a40f75244b1c104b8d83064e5" : ""),
              "data-testid": "milestoneBox",
              children: (0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b1177fbd4e3bcda4051638d86044b957"
              })
            }, t)))]
          })
        },
        w = (0, m.defineMessages)({
          milestone_marker_success_aria: {
            id: "milestone_marker_success_aria",
            defaultMessage: "Milestone achieved"
          }
        }),
        k = e => {
          let {
            title: s,
            date: t,
            active: a,
            final: r
          } = e;
          const c = (0, m.useIntl)(),
            l = a ? "rockstargames-sites-gta-gen9a237ddf12d1e317c6389b99dab0ebaaf" : "",
            d = r ? "rockstargames-sites-gta-gen9cf16fb2f605281b22e08858bd0b10be8" : "";
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ea109f400f7e49404883a62664e5c4f9",
            children: (0, i.jsxs)("div", {
              className: n()("rockstargames-sites-gta-gen9a4776cf49ea083284f9d403b204c9b78", l, d),
              children: [(0, i.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fe16bcb2866e77749008c06e96e776c2",
                children: [(0, i.jsx)("h4", {
                  children: s
                }), a && (0, i.jsx)(_.Jl, {
                  label: c.formatMessage(w.milestone_marker_success_aria),
                  className: "rockstargames-sites-gta-gen9d3b0319ef5d65d06d7e7fbe51cdc50c2",
                  testId: "checkmark"
                })]
              }), t && (0, i.jsx)("p", {
                className: "rockstargames-sites-gta-gen9f60607590769030728c7c9c3ea4fa883",
                children: c.formatDate(t, {
                  month: "short",
                  day: "numeric"
                })
              })]
            })
          })
        },
        p = e => {
          let {
            alt: s = "",
            className: t = "",
            fill: a = "#E0330E"
          } = e;
          return (0, i.jsxs)("svg", {
            className: t,
            version: "1.1",
            width: "15",
            height: "11",
            viewBox: "0 0 15 11",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: s
            }), (0, i.jsx)("path", {
              d: "M7.5 10.5166L0.138783 0.0166029L14.8612 0.0166017L7.5 10.5166Z",
              fill: a
            })]
          })
        },
        v = {
          pillBtn: "rockstargames-sites-gta-gen9ebc4e231a51238d29d0da502c76f23af",
          selected: "rockstargames-sites-gta-gen9b04a37e9b4523cd2a2628caa89e8e528",
          milestoneHeading: "rockstargames-sites-gta-gen9f02d923d7ef81a5816b78333bee9bfed",
          milestoneTitle: "rockstargames-sites-gta-gen9b192823eeef7fdd1f705b53709557681",
          milestoneGoal: "rockstargames-sites-gta-gen9c9ad62964ed8042657279d9d5377a47e",
          milestoneScroll: "rockstargames-sites-gta-gen9e8a44929efe1e0c9f7d362ffdece627b",
          milestoneGroup: "rockstargames-sites-gta-gen9a5f5de9a7b0a3e41830f238970d1da21",
          milestoneFlags: "rockstargames-sites-gta-gen9e6a44f2f6ba92288d38d5986f4ce5f05",
          milestoneMarkers: "rockstargames-sites-gta-gen9afc78b3a561d73d7cdd269dfecc370ef",
          milestoneFlag: "rockstargames-sites-gta-gen9e539ff2b75992a174908cc993833ae90"
        },
        j = e => {
          let {
            heading: s,
            completedMilestoneImage: t,
            incompleteMilestoneImage: a,
            milestones: n,
            initialTitle: r,
            initialDate: c
          } = e;
          const l = (0, d.useRef)(null),
            o = (0, d.useRef)(null),
            [g, m] = (0, d.useState)(!1),
            {
              isMobile: u
            } = (0, h.G4)();
          if ((0, h.T0)(l), (0, d.useEffect)((() => {
              u && l.current && o.current && (l.current.scrollLeft = o.current.getBoundingClientRect().left - window.innerWidth / 2, l.current.addEventListener("scroll", (e => {
                const s = e.target;
                s && Math.ceil(s.scrollLeft + s.clientWidth) >= s.scrollWidth ? m(!0) : m(!1)
              })))
            }), [u]), !n || 0 === n.length) return null;
          const b = n.findLastIndex((e => e.active)),
            f = n[n.length - 1].title;
          return (0, i.jsxs)("section", {
            className: v.milestoneIndicators,
            children: [(0, i.jsxs)("div", {
              className: v.milestoneHeading,
              children: [(0, i.jsx)("h3", {
                className: v.milestoneTitle,
                children: s
              }), !g && (0, i.jsxs)("div", {
                className: v.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [f, (0, i.jsx)(_.Qp, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, i.jsx)("div", {
              className: v.milestoneScroll,
              ref: l,
              children: (0, i.jsxs)("div", {
                className: v.milestoneGroup,
                children: [(0, i.jsxs)("div", {
                  className: v.milestoneFlags,
                  children: [-1 === b ? (0, i.jsx)("div", {
                    ref: o,
                    className: v.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, i.jsx)(p, {})
                  }) : (0, i.jsx)("div", {
                    className: v.milestoneFlag
                  }), n.map(((e, s) => s === b ? (0, i.jsx)("div", {
                    ref: o,
                    className: v.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, i.jsx)(p, {})
                  }, s) : (0, i.jsx)("div", {
                    className: v.milestoneFlag
                  }, s)))]
                }), (0, i.jsx)(x, {
                  milestones: n,
                  incompleteImage: a,
                  completedImage: t
                }), (0, i.jsxs)("div", {
                  className: v.milestoneMarkers,
                  children: [(0, i.jsx)(k, {
                    title: r,
                    date: c,
                    active: !0
                  }), n.map(((e, s) => (0, i.jsx)(k, {
                    title: e.title,
                    date: e.date,
                    active: e.active,
                    final: s === n.length - 1
                  }, s)))]
                })]
              })
            })]
          })
        };
      var N = t(50216),
        y = t(80725),
        C = t(2918);
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
      var S = t(79512);
      const B = e => {
          let {
            heading: s,
            description: t,
            ctaText: a,
            ctaLink: n
          } = e;
          const {
            track: r
          } = (0, C.useGtmTrack)();
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4cf0ba33588235c64debc11db928235",
            children: [s && (0, i.jsx)("h1", {
              className: "rockstargames-sites-gta-gen9cb4ee19aff83d215fef2225f96d83b6b",
              children: s
            }), (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9aab3e05951ac3213b454f7eb3fad51ec",
              children: [t && (0, i.jsx)("p", {
                className: "rockstargames-sites-gta-gen9a84f1187295a03fc3589a99cb998488e",
                children: t
              }), a && (0, i.jsx)(S.A, {
                className: "rockstargames-sites-gta-gen9ae32e8cef2d804e10a42e71b2cc21178",
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
        I = e => {
          let {
            title: s,
            subTitle: t,
            rewardsBgImage: a
          } = e;
          const n = (0, r.useGetCdnSource)(a?.mobile ?? null),
            c = (0, r.useGetCdnSource)(a?.desktop ?? n);
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b2b3a24de3089dd7ee6d7f8761856ec7",
            style: {
              "--rewards-background-image": `url(${c})`
            },
            children: (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d8be908607e3f417a121c4f517eabb8a",
              children: [(0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d285d31afa0ea914d77450534007eac1",
                children: t
              }), (0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f5b76a553164a72970797171c62d4cee",
                children: s
              })]
            })
          })
        },
        L = {
          pillBtn: "rockstargames-sites-gta-gen9edff349918119db50cbffaffc9b1ba1b",
          selected: "rockstargames-sites-gta-gen9c9f8fb57a3f3eb56b7cba86102b43710",
          rewardsWrapper: "rockstargames-sites-gta-gen9b3747a28c2a053e6e1362ac3c8ea7d45",
          rewardPanel: "rockstargames-sites-gta-gen9aed1683fb6745e40f5f6dad85f78495d",
          leftColumn: "rockstargames-sites-gta-gen9c50f481110cd058d98a7cba076dce1d9",
          rightColumn: "rockstargames-sites-gta-gen9d4c1df6801986642b147b49eebfa62fa",
          noRewardsAvailable: "rockstargames-sites-gta-gen9fa90b4db18401a13c12bc6318fc904fa",
          titleHeading: "rockstargames-sites-gta-gen9d819c49ab450182c509e6c373f1e405f",
          navControl: "rockstargames-sites-gta-gen9c172cadbafd0b3109750a2288b5b2739",
          btnArea: "rockstargames-sites-gta-gen9ec2f4f73ee41d2c305de300fe2a1067c",
          nextBtn: "rockstargames-sites-gta-gen9fce09b6c7a9b72ebfe18b5c063345dfd",
          prevBtn: "rockstargames-sites-gta-gen9d6923e3577aef4f61913c9e70d0402e9",
          disabled: "rockstargames-sites-gta-gen9e8928322f161c546fe04da38db46b921",
          "swiper-preloader-spin": "rockstargames-sites-gta-gen9b69ff206cfb10a6b2701490c988d9582"
        },
        G = e => {
          let {
            deck: s,
            detail: t
          } = e;
          const {
            isMobile: a
          } = (0, g.useWindowResize)(), n = (0, m.useIntl)(), r = (0, d.useRef)(null), c = (0, d.useRef)(null), l = (0, d.useRef)(null), o = (0, d.useRef)(), [u, b] = (0, d.useState)(!1), [f, _] = (0, d.useState)(), [h, x] = (0, d.useState)(!1), [w, k] = (0, d.useState)(!1), {
            track: p
          } = (0, C.useGtmTrack)(), v = o?.current?.swiper, j = s?.heading, S = s?.cards;
          (0, d.useEffect)((() => {
            if (v && "number" == typeof v?.params?.slidesPerView) {
              const e = v.slides?.length;
              b(e > v.params.slidesPerView)
            }
          }), [S, v?.params.slidesPerView]), (0, d.useEffect)((() => {
            _({
              nextEl: c.current,
              prevEl: r.current
            })
          }), [c, r]);
          const G = () => {
              v?.slidePrev(300, !1), p({
                event: "carousel_prev",
                element_placement: "community challenge rewards"
              })
            },
            T = () => {
              v?.slideNext(300, !1), p({
                event: "carousel_next",
                element_placement: "community challenge rewards"
              })
            },
            R = e => {
              if ("Tab" === e.key && !e.shiftKey) {
                const s = v?.slides[v?.activeIndex].querySelector('a, button, [role="button"]');
                s && s?.tabIndex > -1 && (e.preventDefault(), s.focus())
              }
            };
          return (0, i.jsxs)("div", {
            className: L.rewardPanel,
            children: [(0, i.jsx)("div", {
              className: L.leftColumn,
              children: (0, i.jsx)(B, {
                ...t
              })
            }), (0, i.jsx)("div", {
              ref: l,
              className: L.rightColumn,
              children: S?.length ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                  className: L.navControl,
                  children: [(0, i.jsx)("h1", {
                    className: L.titleHeading,
                    children: j
                  }), !a && u && (0, i.jsxs)("div", {
                    className: L.btnArea,
                    children: [(0, i.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: r,
                      className: (0, g.classList)(L.prevBtn, h ? L.disabled : ""),
                      onClick: G,
                      "aria-label": n.formatMessage(M.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, i.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: c,
                      className: (0, g.classList)(L.nextBtn, w ? L.disabled : ""),
                      onClick: T,
                      onKeyDown: R,
                      "aria-label": n.formatMessage(M.rewards_carousel_next),
                      type: "button",
                      disabled: w
                    })]
                  })]
                }), (0, i.jsxs)(y.RC, {
                  slidesPerView: 1.25,
                  ref: o,
                  onSlideChange: e => {
                    x(e.isBeginning), k(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    x(e.isBeginning), k(e.isEnd)
                  },
                  modules: [N.Vx],
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
                  navigation: f,
                  slideClass: "swiper-slide",
                  onSlideChangeTransitionEnd: () => {
                    p({
                      event: "carousel_swipe",
                      element_placement: "community challenge rewards"
                    })
                  },
                  children: [a && (0, i.jsxs)("div", {
                    className: L.btnArea,
                    children: [(0, i.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: r,
                      className: (0, g.classList)(L.prevBtn, h ? L.disabled : ""),
                      onClick: G,
                      "aria-label": n.formatMessage(M.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, i.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: c,
                      className: (0, g.classList)(L.nextBtn, w ? L.disabled : ""),
                      onClick: T,
                      onKeyDown: R,
                      "aria-label": n.formatMessage(M.rewards_carousel_next),
                      type: "button",
                      disabled: w
                    })]
                  }), S.map(((e, s) => {
                    const t = e?.title,
                      a = e?.subTitle,
                      n = e?.rewardsBgImage;
                    return (0, i.jsx)(y.qr, {
                      className: L.slide,
                      onFocus: () => (e => {
                        v?.slideTo(e)
                      })(s),
                      children: (0, i.jsx)(I, {
                        title: t,
                        subTitle: a,
                        rewardsBgImage: n
                      })
                    }, s)
                  }))]
                })]
              }) : (0, i.jsx)("div", {
                className: L.noRewardsAvailable,
                children: (0, i.jsx)(m.FormattedMessage, {
                  ...M.no_rewards_available_title
                })
              })
            })]
          })
        },
        T = {
          pillBtn: "rockstargames-sites-gta-gen9c60c1ea7626c520b2211fa5f0b18061b",
          selected: "rockstargames-sites-gta-gen9b58652ec7e005a714810a11cc4b2bb7f",
          communityChallenges: "rockstargames-sites-gta-gen9dc0abf139506d2de9a4ec791e49331ef",
          wrapper: "rockstargames-sites-gta-gen9e3332f7d8fb8c01ce3af42b2fd4aebed",
          communityChallengeInfoPanel: "rockstargames-sites-gta-gen9df615cfc52fdd4ced7efec100c0504c6",
          content: "rockstargames-sites-gta-gen9b3af9e460a0d8d3aafdf3f71d795c94d"
        },
        R = JSON.parse('{"en-US":{"countdown_timer_days_title_long":"Days","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Failure","countdown_timer_header_pending_title":"Calculating Results...","countdown_timer_header_title":"Time Remaining","countdown_timer_hours_title_long":"Hours","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Seconds","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Success","milestone_marker_success_aria":"Milestone achieved","no_rewards_available_title":"No rewards available","rewards_carousel_next":"Next","rewards_carousel_previous":"Previous"}}'),
        P = (0, m.withIntl)((e => {
          let {
            banner: s,
            countdown: t,
            rewards: a,
            milestoneIndicator: n
          } = e;
          return (0, i.jsx)("div", {
            className: T.communityChallenges,
            children: (0, i.jsxs)("div", {
              className: T.wrapper,
              children: [s && (0, i.jsx)(l, {
                ...s
              }), (0, i.jsxs)("div", {
                className: T.content,
                children: [t?.timer && (0, i.jsx)(f, {
                  ...t.timer
                }), n && (0, i.jsx)(j, {
                  ...n
                }), a && (0, i.jsx)("section", {
                  className: T.rewardsSection,
                  children: (0, i.jsx)(G, {
                    ...a
                  })
                })]
              })]
            })
          })
        }), R)
    },
    68430: (e, s, t) => {
      t.d(s, {
        i: () => d,
        o: () => l
      });
      var a = t(62229),
        n = t(95966),
        r = t(91029);
      const c = (0, n.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = c,
        l = e => {
          let {
            children: s,
            payload: t
          } = e;
          return (0, r.jsx)(i, {
            value: t,
            children: s
          })
        },
        d = () => (0, a.useContext)(c)
    },
    8458: (e, s, t) => {
      t.d(s, {
        C1: () => l,
        S1: () => i,
        XC: () => m,
        jS: () => d,
        qg: () => o,
        z0: () => g
      });
      var a = t(62229),
        n = t(95966),
        r = t(68430);
      const c = e => {
          if (!e) return null;
          const {
            hostname: s,
            pathname: t
          } = new URL(e, (0, n.getCdnPrefix)(!0));
          return "/" === t ? null : (s.endsWith(".akamaized.net"), e)
        },
        i = e => {
          let {
            alt: s = null,
            mobile: t = null,
            desktop: i = null,
            ariaLabel: l = null,
            sources: d = null,
            prod: o = null
          } = e;
          const g = (0, n.useLocale)(),
            {
              meta: m = {}
            } = (0, r.i)() ?? {},
            [u, b] = (0, a.useState)(o ?? m?.cdn ?? m?.prod ?? !0);
          (0, a.useEffect)((() => {
            b(o ?? m?.cdn ?? m?.prod ?? !0)
          }), [o, m]);
          const f = (0, a.useCallback)((e => {
            const s = null !== d,
              t = e?.previewSrc ?? e ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return c(t);
            const a = `${s?(0,n.getCdnPrefix)(u):""}${t}`;
            return c(a)
          }), [u, d]);
          return {
            alt: s,
            ariaLabel: l,
            src: {
              mobile: f(d?.[g]?.mobile ?? d?.en_us?.mobile ?? t),
              desktop: f(d?.[g]?.desktop ?? d?.en_us?.desktop ?? i)
            }
          }
        },
        l = e => {
          const {
            meta: s = {}
          } = (0, r.i)() ?? {}, [t, i] = (0, a.useState)(s?.cdn ?? s?.prod ?? !1);
          return (0, a.useEffect)((() => {
            i(s?.cdn ?? s?.prod ?? !1)
          }), [s]), null === e ? null : e?.startsWith("http") ? c(e) : c(`${(0,n.getCdnPrefix)(t)}${e}`)
        },
        d = () => {
          const {
            meta: e = {}
          } = (0, r.i)() ?? {}, s = (0, a.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, a.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const a = t?.prod ?? s;
            return e ? e?.startsWith("http") ? c(e) : c(`${(0,n.getCdnPrefix)(a)}${e}`) : null
          }), [s])
        },
        o = e => e.full_src,
        g = e => {
          const s = e?.previewSrc ?? e?.preview_src ?? e;
          return s?.startsWith("http") ? s : `${(0,n.getCdnPrefix)(!1)}${s}`
        },
        m = e => e.meta.uploads_directory
    }
  }
]);