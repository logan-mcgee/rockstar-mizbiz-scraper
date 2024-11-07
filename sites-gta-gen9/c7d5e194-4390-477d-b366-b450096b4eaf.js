! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "c7d5e194-4390-477d-b366-b450096b4eaf", e._sentryDebugIdIdentifier = "sentry-dbid-c7d5e194-4390-477d-b366-b450096b4eaf")
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
  [6636], {
    57784: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => T
      });
      var a = t(94430),
        n = t.n(a),
        c = t(74401),
        r = t(28089);
      var i = t(46632);
      const d = e => {
        let {
          backgroundImage: s,
          image: t,
          logoHorizontalPosition: a,
          logoVerticalPosition: d,
          enableOverlay: l = !1,
          overlayBackground: o = "rgba(0,0,0,0.25)"
        } = e;
        const g = (0, r.useImageParser)(t ?? {}),
          m = (0, c.useGetCdnSource)(s?.mobile ?? null),
          u = (0, c.useGetCdnSource)(s?.desktop ?? m),
          f = g?.src?.mobile,
          b = g?.src?.desktop ?? f;
        return (0, i.jsx)("div", {
          className: n()("rockstargames-sites-gta-gen9ed09e8cd8784cef75c8e083c6d5195e5", l ? "rockstargames-sites-gta-gen9ba63665ed9f22bf03682026e6367a0b3" : ""),
          style: {
            "--overlay-background-color": o
          },
          children: (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d46e1512d9373817c2ca8cac7190158b",
            style: {
              "--background-image-mobile": `url(${m})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": a ?? "normal",
              "--logo-align-position": d ?? "normal"
            },
            children: b && (0, i.jsx)("img", {
              src: b,
              className: "rockstargames-sites-gta-gen9d0a7642eb372c8ebe2af888a62a45194",
              alt: g?.alt ?? ""
            })
          })
        })
      };
      var l = t(71403);

      function o(e) {
        const s = Object.prototype.toString.call(e);
        return e instanceof Date || "object" == typeof e && "[object Date]" === s ? new e.constructor(+e) : "number" == typeof e || "[object Number]" === s || "string" == typeof e || "[object String]" === s ? new Date(e) : new Date(NaN)
      }

      function g(e, s, t) {
        const a = function(e, s) {
          return +o(e) - +o(s)
        }(e, s) / 1e3;
        return (n = t?.roundingMethod, e => {
          const s = (n ? Math[n] : Math.trunc)(e);
          return 0 === s ? 0 : s
        })(a);
        var n
      }
      var m = t(42756),
        u = t(96717);
      const f = (0, u.defineMessages)({
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
        _ = (0, m.withLocale)((e => {
          let {
            targetDate: s,
            status: t = "active",
            theme: a,
            includeSeconds: r = !1,
            showBackground: d,
            backgroundColor: o,
            successBgImages: _,
            failureBgImages: h
          } = e;
          const {
            isMobile: x
          } = (0, m.useWindowResize)(), [w, k] = (0, l.useState)(!1), j = (0, c.useGetCdnSource)(_?.imageLeft?.mobile ?? null), p = (0, c.useGetCdnSource)(_?.imageLeft?.desktop ?? j), v = (0, c.useGetCdnSource)(_?.imageRight?.mobile ?? null), N = (0, c.useGetCdnSource)(_?.imageRight?.desktop ?? v), y = (0, c.useGetCdnSource)(h?.imageLeft?.mobile ?? null), M = (0, c.useGetCdnSource)(h?.imageLeft?.desktop ?? y), S = (0, c.useGetCdnSource)(h?.imageRight?.mobile ?? null), C = (0, c.useGetCdnSource)(h?.imageRight?.desktop ?? S), I = (0, l.useCallback)(((e, s) => {
            const t = g(e, new Date);
            return t <= 0 ? (k(!0), {
              days: "00",
              hours: "00",
              minutes: "00",
              seconds: "00"
            }) : {
              days: String(Math.floor(t / 86400)).padStart(2, "0"),
              hours: String(Math.floor(t % 86400 / 3600)).padStart(2, "0"),
              minutes: String(Math.floor(t % 3600 / 60)).padStart(2, "0"),
              seconds: s ? String(Math.floor(t % 60)).padStart(2, "0") : "00"
            }
          }), []), [B, L] = (0, l.useState)((() => I(s, r)));
          return (0, l.useEffect)((() => {
            const e = setInterval((() => {
              L(I(s, r))
            }), r ? 1e3 : 6e4);
            return () => clearInterval(e)
          }), [s, r, I]), (0, i.jsxs)("div", {
            className: n()(b.countdownContainer, t),
            style: {
              "--counter-text-color": a?.enableTextGradient ? "transparent" : a?.textColor,
              "--counter-text-stroke-color": a?.enableTextStroke ? a?.textStrokeColor : "unset",
              "--counter-text-stroke-width": a?.enableTextStroke ? a?.textStrokeWidth : "unset",
              "--counter-text-shadow": a?.enableTextShadow ? a.textShadow : "unset",
              "--counter-text-gradient": a?.enableTextGradient ? a.textGradient : "none",
              "--counter-background-color": d ? o : "none",
              "--counter-orientation": "vertical" === a?.counterOrientation ? "column" : "row"
            },
            children: ["active" === t && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("h1", {
                className: b.countdownHeader,
                children: (0, i.jsx)(u.FormattedMessage, {
                  ...f.countdown_timer_header_title
                })
              }), "active" === t && w && (0, i.jsx)("div", {
                "data-testid": "pendingResults",
                className: b.pendingResults,
                children: (0, i.jsx)("p", {
                  children: (0, i.jsx)(u.FormattedMessage, {
                    ...f.countdown_timer_header_pending_title
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
                      children: B.days
                    }), (0, i.jsx)("div", {
                      className: b.countdownLabel,
                      children: x ? (0, i.jsx)(u.FormattedMessage, {
                        ...f.countdown_timer_days_title_short
                      }) : (0, i.jsx)(u.FormattedMessage, {
                        ...f.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: b.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(b.counter, a?.textGlow ? b.textGlow : ""),
                      children: B.hours
                    }), (0, i.jsx)("div", {
                      className: b.countdownLabel,
                      children: x ? (0, i.jsx)(u.FormattedMessage, {
                        ...f.countdown_timer_hours_title_short
                      }) : (0, i.jsx)(u.FormattedMessage, {
                        ...f.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: b.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(b.counter, a?.textGlow ? b.textGlow : ""),
                      children: B.minutes
                    }), (0, i.jsx)("div", {
                      className: b.countdownLabel,
                      children: x ? (0, i.jsx)(u.FormattedMessage, {
                        ...f.countdown_timer_minutes_title_short
                      }) : (0, i.jsx)(u.FormattedMessage, {
                        ...f.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), r && (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: n()(b.countdownBlock, b.secondsCounter),
                    children: [(0, i.jsx)("span", {
                      className: n()(b.counter, a?.textGlow ? b.textGlow : ""),
                      children: B.seconds
                    }), (0, i.jsx)("div", {
                      className: b.countdownLabel,
                      children: x ? (0, i.jsx)(u.FormattedMessage, {
                        ...f.countdown_timer_seconds_title_short
                      }) : (0, i.jsx)(u.FormattedMessage, {
                        ...f.countdown_timer_seconds_title_long
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
              children: [(0, i.jsx)("img", {
                className: b.accentImage,
                src: p,
                alt: _?.imageLeft?.altText
              }), (0, i.jsx)("div", {
                "data-testid": "successMessage",
                className: b.successLabel,
                children: (0, i.jsx)(u.FormattedMessage, {
                  ...f.countdown_timer_success_title
                })
              }), (0, i.jsx)("img", {
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
              children: [(0, i.jsx)("img", {
                className: b.accentImage,
                src: M,
                alt: h?.imageLeft?.altText
              }), (0, i.jsx)("div", {
                "data-testid": "failureMessage",
                className: b.failureLabel,
                children: (0, i.jsx)(u.FormattedMessage, {
                  ...f.countdown_timer_failure_title
                })
              }), (0, i.jsx)("img", {
                className: b.accentImage,
                src: C,
                alt: h?.imageRight?.altText
              })]
            })]
          })
        })),
        h = e => {
          let {
            milestones: s,
            incompleteImage: t,
            completedImage: a
          } = e;
          const n = (s.findLastIndex((e => e.active)) + 1) / s.length,
            r = 100 / n;
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e2b85b2eea9f5c5b1de14340e9ca70b8",
            children: [(0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f593b34d7e7d832c0c661f6fa56da016",
              style: {
                backgroundImage: `url(${(0,c.useGetCdnSource)(t)})`
              },
              "data-testid": "incompleteImage"
            }), (0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b95b71434ed7e54aee5d2ab15d4f30a8",
              style: {
                backgroundImage: `url(${(0,c.useGetCdnSource)(a)})`,
                backgroundSize: `${r}%`,
                width: 100 * n + "%"
              },
              "data-testid": "completedImage"
            }), s.map(((e, t) => (0, i.jsx)("div", {
              className: (0, c.classList)("rockstargames-sites-gta-gen9d4baab273071911a6488e078dcf8a854", 0 === t ? "rockstargames-sites-gta-gen9f94ba24bd2023dfc8bc7fa7dc51423e8" : "", t === s.length - 1 ? "rockstargames-sites-gta-gen9c2ae0481500b2df444bccaa5b4904837" : ""),
              "data-testid": "milestoneBox",
              children: (0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b31199c3d14b84a5c36a6847b3604e83"
              })
            }, t)))]
          })
        };
      var x = t(9182);
      const w = (0, u.defineMessages)({
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
            final: c
          } = e;
          const r = (0, u.useIntl)(),
            d = a ? "rockstargames-sites-gta-gen9bd115bca85c8165906ec9ebc6c5978e3" : "",
            l = c ? "rockstargames-sites-gta-gen9d8aea31b88e125cdeed883c2bb2a3cd3" : "";
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d6e710a1f92fd65be7c9672ad80cf3d9",
            children: (0, i.jsxs)("div", {
              className: n()("rockstargames-sites-gta-gen9feab6bd12128b95efa364a54487b2901", d, l),
              children: [(0, i.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9f135a449f2811af9aabb7c1f865f8969",
                children: [(0, i.jsx)("h4", {
                  children: s
                }), a && (0, i.jsx)(x.Check, {
                  label: r.formatMessage(w.milestone_marker_success_aria),
                  className: "rockstargames-sites-gta-gen9dc7353331b2aa89f4fa04c75c826ad10",
                  testId: "checkmark"
                })]
              }), t && (0, i.jsx)("p", {
                className: "rockstargames-sites-gta-gen9e1627aa7e659e1a50423c53608f2d30c",
                children: r.formatDate(t, {
                  month: "short",
                  day: "numeric"
                })
              })]
            })
          })
        },
        j = e => {
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
            heading: s,
            completedMilestoneImage: t,
            incompleteMilestoneImage: a,
            milestones: n,
            initialTitle: c,
            initialDate: r
          } = e;
          const d = (0, l.useRef)(null),
            o = (0, l.useRef)(null),
            [g, u] = (0, l.useState)(!1),
            {
              isMobile: f
            } = (0, m.useWindowResize)();
          if ((0, m.useCursorScroll)(d), (0, l.useEffect)((() => {
              f && d.current && o.current && (d.current.scrollLeft = o.current.getBoundingClientRect().left - window.innerWidth / 2, d.current.addEventListener("scroll", (e => {
                const s = e.target;
                s && Math.ceil(s.scrollLeft + s.clientWidth) >= s.scrollWidth ? u(!0) : u(!1)
              })))
            }), [f]), !n || 0 === n.length) return null;
          const b = n.findLastIndex((e => e.active)),
            _ = n[n.length - 1].title;
          return (0, i.jsxs)("section", {
            className: p.milestoneIndicators,
            children: [(0, i.jsxs)("div", {
              className: p.milestoneHeading,
              children: [(0, i.jsx)("h3", {
                className: p.milestoneTitle,
                children: s
              }), !g && (0, i.jsxs)("div", {
                className: p.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [_, (0, i.jsx)(x.ArrowRight, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, i.jsx)("div", {
              className: p.milestoneScroll,
              ref: d,
              children: (0, i.jsxs)("div", {
                className: p.milestoneGroup,
                children: [(0, i.jsxs)("div", {
                  className: p.milestoneFlags,
                  children: [-1 === b ? (0, i.jsx)("div", {
                    ref: o,
                    className: p.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, i.jsx)(j, {})
                  }) : (0, i.jsx)("div", {
                    className: p.milestoneFlag
                  }), n.map(((e, s) => s === b ? (0, i.jsx)("div", {
                    ref: o,
                    className: p.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, i.jsx)(j, {})
                  }, s) : (0, i.jsx)("div", {
                    className: p.milestoneFlag
                  }, s)))]
                }), (0, i.jsx)(h, {
                  milestones: n,
                  incompleteImage: a,
                  completedImage: t
                }), (0, i.jsxs)("div", {
                  className: p.milestoneMarkers,
                  children: [(0, i.jsx)(k, {
                    title: c,
                    date: r,
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
      var N = t(81902),
        y = t(40207),
        M = t(89269);
      const S = (0, u.defineMessages)({
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
      var C = t(62811);
      const I = e => {
          let {
            heading: s,
            description: t,
            ctaText: a,
            ctaLink: n
          } = e;
          const {
            track: c
          } = (0, y.useGtmTrack)();
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9be01331043fa82f22bb769fd8586a621",
            children: [s && (0, i.jsx)("h1", {
              className: "rockstargames-sites-gta-gen9a90a5344060fff1d460fd727e4d74adb",
              children: s
            }), (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c8c025bd26dd1c31cf37937ae72c5f1d",
              children: [t && (0, i.jsx)("p", {
                className: "rockstargames-sites-gta-gen9a2fb55c0617121317877bc1096f164c6",
                children: t
              }), a && (0, i.jsx)(C.A, {
                className: "rockstargames-sites-gta-gen9ad653c7e9d155d97ca939e3fd8ce2188",
                text: a,
                to: n,
                onClick: () => c({
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
            title: s,
            subTitle: t,
            rewardsBgImage: a
          } = e;
          const n = (0, c.useGetCdnSource)(a?.mobile ?? null),
            r = (0, c.useGetCdnSource)(a?.desktop ?? n);
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b32fe3d4623889cde297fb913c90393c",
            style: {
              "--rewards-background-image": `url(${r})`
            },
            children: (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9bf4e950111fc0d5f083eff61213f31d0",
              children: [(0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f98a844c4f1b9945971af59786264657",
                children: t
              }), (0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9bcd23c06f2ed2429153dc51303ae2159",
                children: s
              })]
            })
          })
        },
        L = {
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
        G = (0, m.withLocale)((e => {
          let {
            deck: s,
            detail: t
          } = e;
          const {
            isMobile: a
          } = (0, m.useWindowResize)(), n = (0, u.useIntl)(), r = (0, l.useRef)(null), d = (0, l.useRef)(null), o = (0, l.useRef)(null), g = (0, l.useRef)(), [f, b] = (0, l.useState)(!1), [_, h] = (0, l.useState)(), [x, w] = (0, l.useState)(!1), [k, j] = (0, l.useState)(!1), {
            track: p
          } = (0, y.useGtmTrack)(), v = g?.current?.swiper, C = s?.heading, G = s?.cards;
          (0, l.useEffect)((() => {
            if (v && "number" == typeof v?.params?.slidesPerView) {
              const e = v.slides?.length;
              b(e > v.params.slidesPerView)
            }
          }), [G, v?.params.slidesPerView]), (0, l.useEffect)((() => {
            h({
              nextEl: d.current,
              prevEl: r.current
            })
          }), [d, r]);
          const R = () => {
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
            F = e => {
              if ("Tab" === e.key && !e.shiftKey) {
                const s = v?.slides[v?.activeIndex].querySelector('a, button, [role="button"]');
                s && s?.tabIndex > -1 && (e.preventDefault(), s.focus())
              }
            };
          return (0, i.jsxs)("div", {
            className: L.rewardPanel,
            children: [(0, i.jsx)("div", {
              className: L.leftColumn,
              children: (0, i.jsx)(I, {
                ...t
              })
            }), (0, i.jsx)("div", {
              ref: o,
              className: L.rightColumn,
              children: G?.length ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                  className: L.navControl,
                  children: [(0, i.jsx)("h1", {
                    className: L.titleHeading,
                    children: C
                  }), !a && f && (0, i.jsxs)("div", {
                    className: L.btnArea,
                    children: [(0, i.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: r,
                      className: (0, c.classList)(L.prevBtn, x ? L.disabled : ""),
                      onClick: R,
                      "aria-label": n.formatMessage(S.rewards_carousel_previous),
                      type: "button",
                      disabled: x
                    }), (0, i.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: d,
                      className: (0, c.classList)(L.nextBtn, k ? L.disabled : ""),
                      onClick: T,
                      onKeyDown: F,
                      "aria-label": n.formatMessage(S.rewards_carousel_next),
                      type: "button",
                      disabled: k
                    })]
                  })]
                }), (0, i.jsxs)(N.RC, {
                  slidesPerView: 1.25,
                  ref: g,
                  onSlideChange: e => {
                    w(e.isBeginning), j(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    w(e.isBeginning), j(e.isEnd)
                  },
                  modules: [M.Vx],
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
                  navigation: _,
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
                      className: (0, c.classList)(L.prevBtn, x ? L.disabled : ""),
                      onClick: R,
                      "aria-label": n.formatMessage(S.rewards_carousel_previous),
                      type: "button",
                      disabled: x
                    }), (0, i.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: d,
                      className: (0, c.classList)(L.nextBtn, k ? L.disabled : ""),
                      onClick: T,
                      onKeyDown: F,
                      "aria-label": n.formatMessage(S.rewards_carousel_next),
                      type: "button",
                      disabled: k
                    })]
                  }), G.map(((e, s) => {
                    const t = e?.title,
                      a = e?.subTitle,
                      n = e?.rewardsBgImage;
                    return (0, i.jsx)(N.qr, {
                      className: L.slide,
                      onFocus: () => (e => {
                        v?.slideTo(e)
                      })(s),
                      children: (0, i.jsx)(B, {
                        title: t,
                        subTitle: a,
                        rewardsBgImage: n
                      })
                    }, s)
                  }))]
                })]
              }) : (0, i.jsx)("div", {
                className: L.noRewardsAvailable,
                children: (0, i.jsx)(u.FormattedMessage, {
                  ...S.no_rewards_available_title
                })
              })
            })]
          })
        })),
        R = {
          pillBtn: "rockstargames-sites-gta-gen9fdcd1fe581f9d66ecd103ba4545c9602",
          selected: "rockstargames-sites-gta-gen9d96573d407db448dec0e014357935d80",
          communityChallenges: "rockstargames-sites-gta-gen9a08d01c5660d4155c354cc7cc48be71a",
          wrapper: "rockstargames-sites-gta-gen9c3163576f66e7b0ba18245cfda96c975",
          communityChallengeInfoPanel: "rockstargames-sites-gta-gen9ac547b1575d60873a21f01524642a3b4",
          content: "rockstargames-sites-gta-gen9b594194f4f7db6c5db8432dc16b51bf2"
        },
        T = e => {
          let {
            banner: s,
            countdown: t,
            rewards: a,
            milestoneIndicator: n
          } = e;
          return (0, i.jsx)("div", {
            className: R.communityChallenges,
            children: (0, i.jsxs)("div", {
              className: R.wrapper,
              children: [s && (0, i.jsx)(d, {
                ...s
              }), (0, i.jsxs)("div", {
                className: R.content,
                children: [t?.timer && (0, i.jsx)(_, {
                  ...t.timer
                }), n && (0, i.jsx)(v, {
                  ...n
                }), a && (0, i.jsx)("section", {
                  className: R.rewardsSection,
                  children: (0, i.jsx)(G, {
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