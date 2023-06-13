"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [540], {
    5540: (e, n, s) => {
      s.r(n), s.d(n, {
        base: () => g,
        cdn: () => l,
        locale: () => a,
        useBase: () => h,
        useCdn: () => o,
        useLocale: () => r
      });
      var t = s(9156),
        c = s(799);
      const a = (0, t.QS)(document.documentElement.lang),
        r = () => (0, c.l)(a),
        d = window?.env,
        l = (0, t.QS)({
          media: d?.cdn?.media,
          videos: d?.cdn?.videos
        }),
        o = () => (0, c.l)(l),
        i = document.currentScript,
        u = i?.src ? new URL(i.src).origin : "";
      let m = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${u}/`;
      m.endsWith("/") || (m = `${m}/`);
      const g = (0, t.QS)(m),
        h = () => (0, c.l)(g)
    }
  }
]);