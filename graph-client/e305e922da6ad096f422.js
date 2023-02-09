"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [941], {
    8941: (e, n, l) => {
      l.r(n), l.d(n, {
        base: () => p,
        cdn: () => r,
        locale: () => c,
        useBase: () => _,
        useCdn: () => v,
        useLocale: () => o
      });
      var s = l(181),
        t = l(389);
      const c = (0, s.QS)(document.documentElement.lang),
        o = () => (0, t.l)(c);
      var d, a, i;
      const u = null === (d = window) || void 0 === d ? void 0 : d.env,
        r = (0, s.QS)({
          media: null == u || null === (a = u.cdn) || void 0 === a ? void 0 : a.media,
          videos: null == u || null === (i = u.cdn) || void 0 === i ? void 0 : i.videos
        }),
        v = () => (0, t.l)(r);
      var m;
      const g = document.currentScript,
        h = null != g && g.src ? new URL(g.src).origin : "";
      let k = (null === (m = document.getElementsByTagName("base")[0]) || void 0 === m ? void 0 : m.getAttribute("href")) ?? `${h}/`;
      k.endsWith("/") || (k = `${k}/`);
      const p = (0, s.QS)(k),
        _ = () => (0, t.l)(p)
    }
  }
]);