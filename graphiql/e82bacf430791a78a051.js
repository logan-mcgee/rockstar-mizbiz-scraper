"use strict";
(self.webpackChunk_rockstargames_graphiql = self.webpackChunk_rockstargames_graphiql || []).push([
  [574], {
    6574: (e, o, t) => {
      t.r(o);
      var n = t(5489),
        i = (t(1851), t(822), t(7469), Object.defineProperty),
        r = (e, o) => i(e, "name", {
          value: o,
          configurable: !0
        });

      function u(e) {
        return {
          options: e instanceof Function ? {
            render: e
          } : !0 === e ? {} : e
        }
      }

      function s(e) {
        const {
          options: o
        } = e.state.info;
        return (null == o ? void 0 : o.hoverTime) || 500
      }

      function m(e, o) {
        const t = e.state.info,
          i = o.target || o.srcElement;
        if (!(i instanceof HTMLElement)) return;
        if ("SPAN" !== i.nodeName || void 0 !== t.hoverTimeout) return;
        const u = i.getBoundingClientRect(),
          m = r((function() {
            clearTimeout(t.hoverTimeout), t.hoverTimeout = setTimeout(p, c)
          }), "onMouseMove"),
          f = r((function() {
            n.C.off(document, "mousemove", m), n.C.off(e.getWrapperElement(), "mouseout", f), clearTimeout(t.hoverTimeout), t.hoverTimeout = void 0
          }), "onMouseOut"),
          p = r((function() {
            n.C.off(document, "mousemove", m), n.C.off(e.getWrapperElement(), "mouseout", f), t.hoverTimeout = void 0, a(e, u)
          }), "onHover"),
          c = s(e);
        t.hoverTimeout = setTimeout(p, c), n.C.on(document, "mousemove", m), n.C.on(e.getWrapperElement(), "mouseout", f)
      }

      function a(e, o) {
        const t = e.coordsChar({
            left: (o.left + o.right) / 2,
            top: (o.top + o.bottom) / 2
          }),
          n = e.state.info,
          {
            options: i
          } = n,
          r = i.render || e.getHelper(t, "info");
        if (r) {
          const n = e.getTokenAt(t, !0);
          if (n) {
            const u = r(n, i, e, t);
            u && f(e, o, u)
          }
        }
      }

      function f(e, o, t) {
        const i = document.createElement("div");
        i.className = "CodeMirror-info", i.appendChild(t), document.body.appendChild(i);
        const u = i.getBoundingClientRect(),
          s = window.getComputedStyle(i),
          m = u.right - u.left + parseFloat(s.marginLeft) + parseFloat(s.marginRight),
          a = u.bottom - u.top + parseFloat(s.marginTop) + parseFloat(s.marginBottom);
        let f = o.bottom;
        a > window.innerHeight - o.bottom - 15 && o.top > window.innerHeight - o.bottom && (f = o.top - a), f < 0 && (f = o.bottom);
        let p, c = Math.max(0, window.innerWidth - m - 15);
        c > o.left && (c = o.left), i.style.opacity = "1", i.style.top = f + "px", i.style.left = c + "px";
        const l = r((function() {
            clearTimeout(p)
          }), "onMouseOverPopup"),
          d = r((function() {
            clearTimeout(p), p = setTimeout(v, 200)
          }), "onMouseOut"),
          v = r((function() {
            n.C.off(i, "mouseover", l), n.C.off(i, "mouseout", d), n.C.off(e.getWrapperElement(), "mouseout", d), i.style.opacity ? (i.style.opacity = "0", setTimeout((() => {
              i.parentNode && i.parentNode.removeChild(i)
            }), 600)) : i.parentNode && i.parentNode.removeChild(i)
          }), "hidePopup");
        n.C.on(i, "mouseover", l), n.C.on(i, "mouseout", d), n.C.on(e.getWrapperElement(), "mouseout", d)
      }
      n.C.defineOption("info", !1, ((e, o, t) => {
        if (t && t !== n.C.Init) {
          const o = e.state.info.onMouseOver;
          n.C.off(e.getWrapperElement(), "mouseover", o), clearTimeout(e.state.info.hoverTimeout), delete e.state.info
        }
        if (o) {
          const t = e.state.info = u(o);
          t.onMouseOver = m.bind(null, e), n.C.on(e.getWrapperElement(), "mouseover", t.onMouseOver)
        }
      })), r(u, "createState"), r(s, "getHoverTime"), r(m, "onMouseOver"), r(a, "onMouseHover"), r(f, "showPopup")
    }
  }
]);