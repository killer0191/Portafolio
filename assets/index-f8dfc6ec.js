(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
})();
function gi(r) {
  if (r === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return r;
}
function kh(r, e) {
  (r.prototype = Object.create(e.prototype)),
    (r.prototype.constructor = r),
    (r.__proto__ = e);
}
/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Tn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  cs = { duration: 0.5, overwrite: !1, delay: 0 },
  sc,
  qt,
  bt,
  Dn = 1e8,
  ct = 1 / Dn,
  El = Math.PI * 2,
  Wd = El / 4,
  Xd = 0,
  Gh = Math.sqrt,
  qd = Math.cos,
  Yd = Math.sin,
  Nt = function (e) {
    return typeof e == "string";
  },
  xt = function (e) {
    return typeof e == "function";
  },
  Ei = function (e) {
    return typeof e == "number";
  },
  oc = function (e) {
    return typeof e > "u";
  },
  oi = function (e) {
    return typeof e == "object";
  },
  an = function (e) {
    return e !== !1;
  },
  ac = function () {
    return typeof window < "u";
  },
  ho = function (e) {
    return xt(e) || Nt(e);
  },
  Hh =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Yt = Array.isArray,
  Tl = /(?:-?\.?\d|\.)+/gi,
  Vh = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  $r = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Ca = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Wh = /[+-]=-?[.\d]+/,
  Xh = /[^,'"\[\]\s]+/gi,
  jd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  mt,
  Cn,
  bl,
  lc,
  wn = {},
  sa = {},
  qh,
  Yh = function (e) {
    return (sa = gr(e, wn)) && fn;
  },
  cc = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  oa = function (e, t) {
    return !t && console.warn(e);
  },
  jh = function (e, t) {
    return (e && (wn[e] = t) && sa && (sa[e] = t)) || wn;
  },
  $s = function () {
    return 0;
  },
  Kd = { suppressEvents: !0, isStart: !0, kill: !1 },
  jo = { suppressEvents: !0, kill: !1 },
  $d = { suppressEvents: !0 },
  uc = {},
  Fi = [],
  wl = {},
  Kh,
  xn = {},
  Pa = {},
  Nc = 30,
  Ko = [],
  hc = "",
  fc = function (e) {
    var t = e[0],
      n,
      i;
    if ((oi(t) || xt(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (i = Ko.length; i-- && !Ko[i].targetTest(t); );
      n = Ko[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new Mf(e[i], n)))) ||
        e.splice(i, 1);
    return e;
  },
  lr = function (e) {
    return e._gsap || fc(Un(e))[0]._gsap;
  },
  $h = function (e, t, n) {
    return (n = e[t]) && xt(n)
      ? e[t]()
      : (oc(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  ln = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  yt = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  zt = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  ts = function (e, t) {
    var n = t.charAt(0),
      i = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
    );
  },
  Zd = function (e, t) {
    for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
    return i < n;
  },
  aa = function () {
    var e = Fi.length,
      t = Fi.slice(0),
      n,
      i;
    for (wl = {}, Fi.length = 0, n = 0; n < e; n++)
      (i = t[n]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  Zh = function (e, t, n, i) {
    Fi.length && !qt && aa(),
      e.render(t, n, i || (qt && t < 0 && (e._initted || e._startAt))),
      Fi.length && !qt && aa();
  },
  Jh = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Xh).length < 2
      ? t
      : Nt(e)
      ? e.trim()
      : e;
  },
  Qh = function (e) {
    return e;
  },
  Fn = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  Jd = function (e) {
    return function (t, n) {
      for (var i in n)
        i in t || (i === "duration" && e) || i === "ease" || (t[i] = n[i]);
    };
  },
  gr = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Fc = function r(e, t) {
    for (var n in t)
      n !== "__proto__" &&
        n !== "constructor" &&
        n !== "prototype" &&
        (e[n] = oi(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e;
  },
  la = function (e, t) {
    var n = {},
      i;
    for (i in e) i in t || (n[i] = e[i]);
    return n;
  },
  zs = function (e) {
    var t = e.parent || mt,
      n = e.keyframes ? Jd(Yt(e.keyframes)) : Fn;
    if (an(e.inherit))
      for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  Qd = function (e, t) {
    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; );
    return n < 0;
  },
  ef = function (e, t, n, i, s) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var a = e[i],
      o;
    if (s) for (o = t[s]; a && a[s] > o; ) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[i] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  va = function (e, t, n, i) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var s = t._prev,
      a = t._next;
    s ? (s._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = s) : e[i] === t && (e[i] = s),
      (t._next = t._prev = t.parent = null);
  },
  Gi = function (e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
      (e._act = 0);
  },
  cr = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
    return e;
  },
  ep = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  Al = function (e, t, n, i) {
    return (
      e._startAt &&
      (qt
        ? e._startAt.revert(jo)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, i))
    );
  },
  tp = function r(e) {
    return !e || (e._ts && r(e.parent));
  },
  zc = function (e) {
    return e._repeat ? us(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  us = function (e, t) {
    var n = Math.floor((e /= t));
    return e && n === e ? n - 1 : n;
  },
  ca = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  xa = function (e) {
    return (e._end = zt(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ct) || 0)
    ));
  },
  Ma = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = zt(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        xa(e),
        n._dirty || cr(n, e)),
      e
    );
  },
  tf = function (e, t) {
    var n;
    if (
      ((t._time || (t._initted && !t._dur)) &&
        ((n = ca(e.rawTime(), t)),
        (!t._dur || oo(0, t.totalDuration(), n) - t._tTime > ct) &&
          t.render(n, !0)),
      cr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp; )
          n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
      e._zTime = -ct;
    }
  },
  ti = function (e, t, n, i) {
    return (
      t.parent && Gi(t),
      (t._start = zt(
        (Ei(n) ? n : n || e !== mt ? Rn(e, n, t) : e._time) + t._delay
      )),
      (t._end = zt(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      ef(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Rl(t) || (e._recent = t),
      i || tf(e, t),
      e._ts < 0 && Ma(e, e._tTime),
      e
    );
  },
  nf = function (e, t) {
    return (
      (wn.ScrollTrigger || cc("scrollTrigger", t)) &&
      wn.ScrollTrigger.create(t, e)
    );
  },
  rf = function (e, t, n, i, s) {
    if ((pc(e, t, s), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !qt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Kh !== yn.frame
    )
      return Fi.push(e), (e._lazy = [s, i]), 1;
  },
  np = function r(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
  },
  Rl = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  ip = function (e, t, n, i) {
    var s = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && np(e) && !(!e._initted && Rl(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Rl(e))))
          ? 0
          : 1,
      o = e._rDelay,
      l = 0,
      c,
      u,
      d;
    if (
      (o &&
        e._repeat &&
        ((l = oo(0, e._tDur, t)),
        (u = us(l, o)),
        e._yoyo && u & 1 && (a = 1 - a),
        u !== us(e._tTime, o) &&
          ((s = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== s || qt || i || e._zTime === ct || (!t && e._zTime))
    ) {
      if (!e._initted && rf(e, t, i, n, l)) return;
      for (
        d = e._zTime,
          e._zTime = t || (n ? ct : 0),
          n || (n = t && !d),
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;

      )
        c.r(a, c.d), (c = c._next);
      t < 0 && Al(e, t, n, !0),
        e._onUpdate && !n && In(e, "onUpdate"),
        l && e._repeat && !n && e.parent && In(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && Gi(e, 1),
          !n &&
            !qt &&
            (In(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  rp = function (e, t, n) {
    var i;
    if (n > t)
      for (i = e._first; i && i._start <= n; ) {
        if (i.data === "isPause" && i._start > t) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= n; ) {
        if (i.data === "isPause" && i._start < t) return i;
        i = i._prev;
      }
  },
  hs = function (e, t, n, i) {
    var s = e._repeat,
      a = zt(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !i && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = s ? (s < 0 ? 1e10 : zt(a * (s + 1) + e._rDelay * s)) : a),
      o > 0 && !i && Ma(e, (e._tTime = e._tDur * o)),
      e.parent && xa(e),
      n || cr(e.parent, e),
      e
    );
  },
  Bc = function (e) {
    return e instanceof on ? cr(e) : hs(e, e._dur);
  },
  sp = { _start: 0, endTime: $s, totalDuration: $s },
  Rn = function r(e, t, n) {
    var i = e.labels,
      s = e._recent || sp,
      a = e.duration() >= Dn ? s.endTime(!1) : e._dur,
      o,
      l,
      c;
    return Nt(t) && (isNaN(t) || t in i)
      ? ((l = t.charAt(0)),
        (c = t.substr(-1) === "%"),
        (o = t.indexOf("=")),
        l === "<" || l === ">"
          ? (o >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (c ? (o < 0 ? s : n).totalDuration() / 100 : 1))
          : o < 0
          ? (t in i || (i[t] = a), i[t])
          : ((l = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
            c && n && (l = (l / 100) * (Yt(n) ? n[0] : n).totalDuration()),
            o > 1 ? r(e, t.substr(0, o - 1), n) + l : a + l))
      : t == null
      ? a
      : +t;
  },
  Bs = function (e, t, n) {
    var i = Ei(t[1]),
      s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[s],
      o,
      l;
    if ((i && (a.duration = t[1]), (a.parent = n), e)) {
      for (o = a, l = n; l && !("immediateRender" in o); )
        (o = l.vars.defaults || {}), (l = an(l.vars.inherit) && l.parent);
      (a.immediateRender = an(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
    }
    return new At(t[0], a, t[s + 1]);
  },
  Xi = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  oo = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  Xt = function (e, t) {
    return !Nt(e) || !(t = jd.exec(e)) ? "" : t[1];
  },
  op = function (e, t, n) {
    return Xi(n, function (i) {
      return oo(e, t, i);
    });
  },
  Cl = [].slice,
  sf = function (e, t) {
    return (
      e &&
      oi(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && oi(e[0]))) &&
      !e.nodeType &&
      e !== Cn
    );
  },
  ap = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (i) {
        var s;
        return (Nt(i) && !t) || sf(i, 1)
          ? (s = n).push.apply(s, Un(i))
          : n.push(i);
      }) || n
    );
  },
  Un = function (e, t, n) {
    return bt && !t && bt.selector
      ? bt.selector(e)
      : Nt(e) && !n && (bl || !fs())
      ? Cl.call((t || lc).querySelectorAll(e), 0)
      : Yt(e)
      ? ap(e, n)
      : sf(e)
      ? Cl.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Pl = function (e) {
    return (
      (e = Un(e)[0] || oa("Invalid scope") || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Un(
          t,
          n.querySelectorAll
            ? n
            : n === e
            ? oa("Invalid scope") || lc.createElement("div")
            : e
        );
      }
    );
  },
  of = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  af = function (e) {
    if (xt(e)) return e;
    var t = oi(e) ? e : { each: e },
      n = ur(t.ease),
      i = t.from || 0,
      s = parseFloat(t.base) || 0,
      a = {},
      o = i > 0 && i < 1,
      l = isNaN(i) || o,
      c = t.axis,
      u = i,
      d = i;
    return (
      Nt(i)
        ? (u = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !o && l && ((u = i[0]), (d = i[1])),
      function (h, p, g) {
        var m = (g || t).length,
          _ = a[m],
          f,
          S,
          x,
          y,
          M,
          E,
          w,
          P,
          v;
        if (!_) {
          if (((v = t.grid === "auto" ? 0 : (t.grid || [1, Dn])[1]), !v)) {
            for (
              w = -Dn;
              w < (w = g[v++].getBoundingClientRect().left) && v < m;

            );
            v--;
          }
          for (
            _ = a[m] = [],
              f = l ? Math.min(v, m) * u - 0.5 : i % v,
              S = v === Dn ? 0 : l ? (m * d) / v - 0.5 : (i / v) | 0,
              w = 0,
              P = Dn,
              E = 0;
            E < m;
            E++
          )
            (x = (E % v) - f),
              (y = S - ((E / v) | 0)),
              (_[E] = M = c ? Math.abs(c === "y" ? y : x) : Gh(x * x + y * y)),
              M > w && (w = M),
              M < P && (P = M);
          i === "random" && of(_),
            (_.max = w - P),
            (_.min = P),
            (_.v = m =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (v > m
                    ? m - 1
                    : c
                    ? c === "y"
                      ? m / v
                      : v
                    : Math.max(v, m / v)) ||
                0) * (i === "edges" ? -1 : 1)),
            (_.b = m < 0 ? s - m : s),
            (_.u = Xt(t.amount || t.each) || 0),
            (n = n && m < 0 ? gf(n) : n);
        }
        return (
          (m = (_[h] - _.min) / _.max || 0),
          zt(_.b + (n ? n(m) : m) * _.v) + _.u
        );
      }
    );
  },
  Ll = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (n) {
      var i = zt(Math.round(parseFloat(n) / e) * e * t);
      return (i - (i % 1)) / t + (Ei(n) ? 0 : Xt(n));
    };
  },
  lf = function (e, t) {
    var n = Yt(e),
      i,
      s;
    return (
      !n &&
        oi(e) &&
        ((i = n = e.radius || Dn),
        e.values
          ? ((e = Un(e.values)), (s = !Ei(e[0])) && (i *= i))
          : (e = Ll(e.increment))),
      Xi(
        t,
        n
          ? xt(e)
            ? function (a) {
                return (s = e(a)), Math.abs(s - a) <= i ? s : a;
              }
            : function (a) {
                for (
                  var o = parseFloat(s ? a.x : a),
                    l = parseFloat(s ? a.y : 0),
                    c = Dn,
                    u = 0,
                    d = e.length,
                    h,
                    p;
                  d--;

                )
                  s
                    ? ((h = e[d].x - o), (p = e[d].y - l), (h = h * h + p * p))
                    : (h = Math.abs(e[d] - o)),
                    h < c && ((c = h), (u = d));
                return (
                  (u = !i || c <= i ? e[u] : a),
                  s || u === a || Ei(a) ? u : u + Xt(a)
                );
              }
          : Ll(e)
      )
    );
  },
  cf = function (e, t, n, i) {
    return Xi(Yt(e) ? !t : n === !0 ? !!(n = 0) : !i, function () {
      return Yt(e)
        ? e[~~(Math.random() * e.length)]
        : (n = n || 1e-5) &&
            (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                i
            ) / i;
    });
  },
  lp = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return function (i) {
      return t.reduce(function (s, a) {
        return a(s);
      }, i);
    };
  },
  cp = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || Xt(n));
    };
  },
  up = function (e, t, n) {
    return hf(e, t, 0, 1, n);
  },
  uf = function (e, t, n) {
    return Xi(n, function (i) {
      return e[~~t(i)];
    });
  },
  hp = function r(e, t, n) {
    var i = t - e;
    return Yt(e)
      ? uf(e, r(0, e.length), t)
      : Xi(n, function (s) {
          return ((i + ((s - e) % i)) % i) + e;
        });
  },
  fp = function r(e, t, n) {
    var i = t - e,
      s = i * 2;
    return Yt(e)
      ? uf(e, r(0, e.length - 1), t)
      : Xi(n, function (a) {
          return (a = (s + ((a - e) % s)) % s || 0), e + (a > i ? s - a : a);
        });
  },
  Zs = function (e) {
    for (var t = 0, n = "", i, s, a, o; ~(i = e.indexOf("random(", t)); )
      (a = e.indexOf(")", i)),
        (o = e.charAt(i + 7) === "["),
        (s = e.substr(i + 7, a - i - 7).match(o ? Xh : Tl)),
        (n +=
          e.substr(t, i - t) + cf(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
        (t = a + 1);
    return n + e.substr(t, e.length - t);
  },
  hf = function (e, t, n, i, s) {
    var a = t - e,
      o = i - n;
    return Xi(s, function (l) {
      return n + (((l - e) / a) * o || 0);
    });
  },
  dp = function r(e, t, n, i) {
    var s = isNaN(e + t)
      ? 0
      : function (p) {
          return (1 - p) * e + p * t;
        };
    if (!s) {
      var a = Nt(e),
        o = {},
        l,
        c,
        u,
        d,
        h;
      if ((n === !0 && (i = 1) && (n = null), a))
        (e = { p: e }), (t = { p: t });
      else if (Yt(e) && !Yt(t)) {
        for (u = [], d = e.length, h = d - 2, c = 1; c < d; c++)
          u.push(r(e[c - 1], e[c]));
        d--,
          (s = function (g) {
            g *= d;
            var m = Math.min(h, ~~g);
            return u[m](g - m);
          }),
          (n = t);
      } else i || (e = gr(Yt(e) ? [] : {}, e));
      if (!u) {
        for (l in t) dc.call(o, e, l, "get", t[l]);
        s = function (g) {
          return gc(g, o) || (a ? e.p : e);
        };
      }
    }
    return Xi(n, s);
  },
  kc = function (e, t, n) {
    var i = e.labels,
      s = Dn,
      a,
      o,
      l;
    for (a in i)
      (o = i[a] - t),
        o < 0 == !!n && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
    return l;
  },
  In = function (e, t, n) {
    var i = e.vars,
      s = i[t],
      a = bt,
      o = e._ctx,
      l,
      c,
      u;
    if (s)
      return (
        (l = i[t + "Params"]),
        (c = i.callbackScope || e),
        n && Fi.length && aa(),
        o && (bt = o),
        (u = l ? s.apply(c, l) : s.call(c)),
        (bt = a),
        u
      );
  },
  Ls = function (e) {
    return (
      Gi(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!qt),
      e.progress() < 1 && In(e, "onInterrupt"),
      e
    );
  },
  Zr,
  ff = [],
  df = function (e) {
    if (!ac()) {
      ff.push(e);
      return;
    }
    e = (!e.name && e.default) || e;
    var t = e.name,
      n = xt(e),
      i =
        t && !n && e.init
          ? function () {
              this._props = [];
            }
          : e,
      s = { init: $s, render: gc, add: dc, kill: Cp, modifier: Rp, rawVars: 0 },
      a = { targetTest: 0, get: 0, getSetter: _c, aliases: {}, register: 0 };
    if ((fs(), e !== i)) {
      if (xn[t]) return;
      Fn(i, Fn(la(e, s), a)),
        gr(i.prototype, gr(s, la(e, a))),
        (xn[(i.prop = t)] = i),
        e.targetTest && (Ko.push(i), (uc[t] = 1)),
        (t =
          (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
          "Plugin");
    }
    jh(t, i), e.register && e.register(fn, i, cn);
  },
  lt = 255,
  Ds = {
    aqua: [0, lt, lt],
    lime: [0, lt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, lt],
    navy: [0, 0, 128],
    white: [lt, lt, lt],
    olive: [128, 128, 0],
    yellow: [lt, lt, 0],
    orange: [lt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [lt, 0, 0],
    pink: [lt, 192, 203],
    cyan: [0, lt, lt],
    transparent: [lt, lt, lt, 0],
  },
  La = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
        ? n
        : e * 3 < 2
        ? t + (n - t) * (2 / 3 - e) * 6
        : t) *
        lt +
        0.5) |
        0
    );
  },
  pf = function (e, t, n) {
    var i = e ? (Ei(e) ? [e >> 16, (e >> 8) & lt, e & lt] : 0) : Ds.black,
      s,
      a,
      o,
      l,
      c,
      u,
      d,
      h,
      p,
      g;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ds[e]))
        i = Ds[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              "#" +
              s +
              s +
              a +
              a +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & lt, i & lt, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & lt, e & lt]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = g = e.match(Tl)), !t))
          (l = (+i[0] % 360) / 360),
            (c = +i[1] / 100),
            (u = +i[2] / 100),
            (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
            (s = u * 2 - a),
            i.length > 3 && (i[3] *= 1),
            (i[0] = La(l + 1 / 3, s, a)),
            (i[1] = La(l, s, a)),
            (i[2] = La(l - 1 / 3, s, a));
        else if (~e.indexOf("="))
          return (i = e.match(Vh)), n && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(Tl) || Ds.transparent;
      i = i.map(Number);
    }
    return (
      t &&
        !g &&
        ((s = i[0] / lt),
        (a = i[1] / lt),
        (o = i[2] / lt),
        (d = Math.max(s, a, o)),
        (h = Math.min(s, a, o)),
        (u = (d + h) / 2),
        d === h
          ? (l = c = 0)
          : ((p = d - h),
            (c = u > 0.5 ? p / (2 - d - h) : p / (d + h)),
            (l =
              d === s
                ? (a - o) / p + (a < o ? 6 : 0)
                : d === a
                ? (o - s) / p + 2
                : (s - a) / p + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(c * 100 + 0.5)),
        (i[2] = ~~(u * 100 + 0.5))),
      n && i.length < 4 && (i[3] = 1),
      i
    );
  },
  mf = function (e) {
    var t = [],
      n = [],
      i = -1;
    return (
      e.split(zi).forEach(function (s) {
        var a = s.match($r) || [];
        t.push.apply(t, a), n.push((i += a.length + 1));
      }),
      (t.c = n),
      t
    );
  },
  Gc = function (e, t, n) {
    var i = "",
      s = (e + i).match(zi),
      a = t ? "hsla(" : "rgba(",
      o = 0,
      l,
      c,
      u,
      d;
    if (!s) return e;
    if (
      ((s = s.map(function (h) {
        return (
          (h = pf(h, t, 1)) &&
          a +
            (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
            ")"
        );
      })),
      n && ((u = mf(e)), (l = n.c), l.join(i) !== u.c.join(i)))
    )
      for (c = e.replace(zi, "1").split($r), d = c.length - 1; o < d; o++)
        i +=
          c[o] +
          (~l.indexOf(o)
            ? s.shift() || a + "0,0,0,0)"
            : (u.length ? u : s.length ? s : n).shift());
    if (!c)
      for (c = e.split(zi), d = c.length - 1; o < d; o++) i += c[o] + s[o];
    return i + c[d];
  },
  zi = (function () {
    var r =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Ds) r += "|" + e + "\\b";
    return new RegExp(r + ")", "gi");
  })(),
  pp = /hsl[a]?\(/,
  _f = function (e) {
    var t = e.join(" "),
      n;
    if (((zi.lastIndex = 0), zi.test(t)))
      return (
        (n = pp.test(t)),
        (e[1] = Gc(e[1], n)),
        (e[0] = Gc(e[0], n, mf(e[1]))),
        !0
      );
  },
  Js,
  yn = (function () {
    var r = Date.now,
      e = 500,
      t = 33,
      n = r(),
      i = n,
      s = 1e3 / 240,
      a = s,
      o = [],
      l,
      c,
      u,
      d,
      h,
      p,
      g = function m(_) {
        var f = r() - i,
          S = _ === !0,
          x,
          y,
          M,
          E;
        if (
          (f > e && (n += f - t),
          (i += f),
          (M = i - n),
          (x = M - a),
          (x > 0 || S) &&
            ((E = ++d.frame),
            (h = M - d.time * 1e3),
            (d.time = M = M / 1e3),
            (a += x + (x >= s ? 4 : s - x)),
            (y = 1)),
          S || (l = c(m)),
          y)
        )
          for (p = 0; p < o.length; p++) o[p](M, h, E, _);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0);
        },
        deltaRatio: function (_) {
          return h / (1e3 / (_ || 60));
        },
        wake: function () {
          qh &&
            (!bl &&
              ac() &&
              ((Cn = bl = window),
              (lc = Cn.document || {}),
              (wn.gsap = fn),
              (Cn.gsapVersions || (Cn.gsapVersions = [])).push(fn.version),
              Yh(sa || Cn.GreenSockGlobals || (!Cn.gsap && Cn) || {}),
              (u = Cn.requestAnimationFrame),
              ff.forEach(df)),
            l && d.sleep(),
            (c =
              u ||
              function (_) {
                return setTimeout(_, (a - d.time * 1e3 + 1) | 0);
              }),
            (Js = 1),
            g(2));
        },
        sleep: function () {
          (u ? Cn.cancelAnimationFrame : clearTimeout)(l), (Js = 0), (c = $s);
        },
        lagSmoothing: function (_, f) {
          (e = _ || 1 / 0), (t = Math.min(f || 33, e));
        },
        fps: function (_) {
          (s = 1e3 / (_ || 240)), (a = d.time * 1e3 + s);
        },
        add: function (_, f, S) {
          var x = f
            ? function (y, M, E, w) {
                _(y, M, E, w), d.remove(x);
              }
            : _;
          return d.remove(_), o[S ? "unshift" : "push"](x), fs(), x;
        },
        remove: function (_, f) {
          ~(f = o.indexOf(_)) && o.splice(f, 1) && p >= f && p--;
        },
        _listeners: o,
      }),
      d
    );
  })(),
  fs = function () {
    return !Js && yn.wake();
  },
  et = {},
  mp = /^[\d.\-M][\d.\-,\s]/,
  _p = /["']/g,
  gp = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(":"),
        i = n[0],
        s = 1,
        a = n.length,
        o,
        l,
        c;
      s < a;
      s++
    )
      (l = n[s]),
        (o = s !== a - 1 ? l.lastIndexOf(",") : l.length),
        (c = l.substr(0, o)),
        (t[i] = isNaN(c) ? c.replace(_p, "").trim() : +c),
        (i = l.substr(o + 1).trim());
    return t;
  },
  vp = function (e) {
    var t = e.indexOf("(") + 1,
      n = e.indexOf(")"),
      i = e.indexOf("(", t);
    return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
  },
  xp = function (e) {
    var t = (e + "").split("("),
      n = et[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf("{") ? [gp(t[1])] : vp(e).split(",").map(Jh)
        )
      : et._CE && mp.test(e)
      ? et._CE("", e)
      : n;
  },
  gf = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  vf = function r(e, t) {
    for (var n = e._first, i; n; )
      n instanceof on
        ? r(n, t)
        : n.vars.yoyoEase &&
          (!n._yoyo || !n._repeat) &&
          n._yoyo !== t &&
          (n.timeline
            ? r(n.timeline, t)
            : ((i = n._ease),
              (n._ease = n._yEase),
              (n._yEase = i),
              (n._yoyo = t))),
        (n = n._next);
  },
  ur = function (e, t) {
    return (e && (xt(e) ? e : et[e] || xp(e))) || t;
  },
  Tr = function (e, t, n, i) {
    n === void 0 &&
      (n = function (l) {
        return 1 - t(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var s = { easeIn: t, easeOut: n, easeInOut: i },
      a;
    return (
      ln(e, function (o) {
        (et[o] = wn[o] = s), (et[(a = o.toLowerCase())] = n);
        for (var l in s)
          et[
            a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = et[o + "." + l] = s[l];
      }),
      s
    );
  },
  xf = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Da = function r(e, t, n) {
    var i = t >= 1 ? t : 1,
      s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (s / El) * (Math.asin(1 / i) || 0),
      o = function (u) {
        return u === 1 ? 1 : i * Math.pow(2, -10 * u) * Yd((u - a) * s) + 1;
      },
      l =
        e === "out"
          ? o
          : e === "in"
          ? function (c) {
              return 1 - o(1 - c);
            }
          : xf(o);
    return (
      (s = El / s),
      (l.config = function (c, u) {
        return r(e, c, u);
      }),
      l
    );
  },
  Ua = function r(e, t) {
    t === void 0 && (t = 1.70158);
    var n = function (a) {
        return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
      },
      i =
        e === "out"
          ? n
          : e === "in"
          ? function (s) {
              return 1 - n(1 - s);
            }
          : xf(n);
    return (
      (i.config = function (s) {
        return r(e, s);
      }),
      i
    );
  };
ln("Linear,Quad,Cubic,Quart,Quint,Strong", function (r, e) {
  var t = e < 5 ? e + 1 : e;
  Tr(
    r + ",Power" + (t - 1),
    e
      ? function (n) {
          return Math.pow(n, t);
        }
      : function (n) {
          return n;
        },
    function (n) {
      return 1 - Math.pow(1 - n, t);
    },
    function (n) {
      return n < 0.5
        ? Math.pow(n * 2, t) / 2
        : 1 - Math.pow((1 - n) * 2, t) / 2;
    }
  );
});
et.Linear.easeNone = et.none = et.Linear.easeIn;
Tr("Elastic", Da("in"), Da("out"), Da());
(function (r, e) {
  var t = 1 / e,
    n = 2 * t,
    i = 2.5 * t,
    s = function (o) {
      return o < t
        ? r * o * o
        : o < n
        ? r * Math.pow(o - 1.5 / e, 2) + 0.75
        : o < i
        ? r * (o -= 2.25 / e) * o + 0.9375
        : r * Math.pow(o - 2.625 / e, 2) + 0.984375;
    };
  Tr(
    "Bounce",
    function (a) {
      return 1 - s(1 - a);
    },
    s
  );
})(7.5625, 2.75);
Tr("Expo", function (r) {
  return r ? Math.pow(2, 10 * (r - 1)) : 0;
});
Tr("Circ", function (r) {
  return -(Gh(1 - r * r) - 1);
});
Tr("Sine", function (r) {
  return r === 1 ? 1 : -qd(r * Wd) + 1;
});
Tr("Back", Ua("in"), Ua("out"), Ua());
et.SteppedEase =
  et.steps =
  wn.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e,
          i = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          a = 1 - ct;
        return function (o) {
          return (((i * oo(0, a, o)) | 0) + s) * n;
        };
      },
    };
cs.ease = et["quad.out"];
ln(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (r) {
    return (hc += r + "," + r + "Params,");
  }
);
var Mf = function (e, t) {
    (this.id = Xd++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : $h),
      (this.set = t ? t.getSetter : _c);
  },
  ds = (function () {
    function r(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        hs(this, +t.duration, 1, 1),
        (this.data = t.data),
        bt && ((this._ctx = bt), bt.data.push(this)),
        Js || yn.wake();
    }
    var e = r.prototype;
    return (
      (e.delay = function (n) {
        return n || n === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + n - this._delay),
            (this._delay = n),
            this)
          : this._delay;
      }),
      (e.duration = function (n) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (n) {
        return arguments.length
          ? ((this._dirty = 0),
            hs(
              this,
              this._repeat < 0
                ? n
                : (n - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (n, i) {
        if ((fs(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (Ma(this, n), !s._dp || s.parent || tf(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && n < this._tDur) ||
              (this._ts < 0 && n > 0) ||
              (!this._tDur && !n)) &&
            ti(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== n ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === ct) ||
            (!n && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = n), Zh(this, n, i)),
          this
        );
      }),
      (e.time = function (n, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), n + zc(this)) %
                (this._dur + this._rDelay) || (n ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (n, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * n, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (n, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) +
                zc(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (n, i) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (n - 1) * s, i)
          : this._repeat
          ? us(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (n) {
        if (!arguments.length) return this._rts === -ct ? 0 : this._rts;
        if (this._rts === n) return this;
        var i =
          this.parent && this._ts ? ca(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +n || 0),
          (this._ts = this._ps || n === -ct ? 0 : this._rts),
          this.totalTime(oo(-Math.abs(this._delay), this._tDur, i), !0),
          xa(this),
          ep(this)
        );
      }),
      (e.paused = function (n) {
        return arguments.length
          ? (this._ps !== n &&
              ((this._ps = n),
              n
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (fs(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ct &&
                      (this._tTime -= ct)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (n) {
        if (arguments.length) {
          this._start = n;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && ti(i, this, n - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (n) {
        return (
          this._start +
          (an(n) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (n) {
        var i = this.parent || this._dp;
        return i
          ? n &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ca(i.rawTime(n), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (n) {
        n === void 0 && (n = $d);
        var i = qt;
        return (
          (qt = n),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(n),
            this.totalTime(-0.01, n.suppressEvents)),
          this.data !== "nested" && n.kill !== !1 && this.kill(),
          (qt = i),
          this
        );
      }),
      (e.globalTime = function (n) {
        for (var i = this, s = arguments.length ? n : i.rawTime(); i; )
          (s = i._start + s / (i._ts || 1)), (i = i._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1
            : this._sat.globalTime(n)
          : s;
      }),
      (e.repeat = function (n) {
        return arguments.length
          ? ((this._repeat = n === 1 / 0 ? -2 : n), Bc(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (n) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = n), Bc(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (n) {
        return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
      }),
      (e.seek = function (n, i) {
        return this.totalTime(Rn(this, n), an(i));
      }),
      (e.restart = function (n, i) {
        return this.play().totalTime(n ? -this._delay : 0, an(i));
      }),
      (e.play = function (n, i) {
        return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (n, i) {
        return (
          n != null && this.seek(n || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (n, i) {
        return n != null && this.seek(n, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (n) {
        return arguments.length
          ? (!!n !== this.reversed() &&
              this.timeScale(-this._rts || (n ? -ct : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -ct), this;
      }),
      (e.isActive = function () {
        var n = this.parent || this._dp,
          i = this._start,
          s;
        return !!(
          !n ||
          (this._ts &&
            this._initted &&
            n.isActive() &&
            (s = n.rawTime(!0)) >= i &&
            s < this.endTime(!0) - ct)
        );
      }),
      (e.eventCallback = function (n, i, s) {
        var a = this.vars;
        return arguments.length > 1
          ? (i
              ? ((a[n] = i),
                s && (a[n + "Params"] = s),
                n === "onUpdate" && (this._onUpdate = i))
              : delete a[n],
            this)
          : a[n];
      }),
      (e.then = function (n) {
        var i = this;
        return new Promise(function (s) {
          var a = xt(n) ? n : Qh,
            o = function () {
              var c = i.then;
              (i.then = null),
                xt(a) && (a = a(i)) && (a.then || a === i) && (i.then = c),
                s(a),
                (i.then = c);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? o()
            : (i._prom = o);
        });
      }),
      (e.kill = function () {
        Ls(this);
      }),
      r
    );
  })();
Fn(ds.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ct,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var on = (function (r) {
  kh(e, r);
  function e(n, i) {
    var s;
    return (
      n === void 0 && (n = {}),
      (s = r.call(this, n) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!n.smoothChildTiming),
      (s.autoRemoveChildren = !!n.autoRemoveChildren),
      (s._sort = an(n.sortChildren)),
      mt && ti(n.parent || mt, gi(s), i),
      n.reversed && s.reverse(),
      n.paused && s.paused(!0),
      n.scrollTrigger && nf(gi(s), n.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (i, s, a) {
      return Bs(0, arguments, this), this;
    }),
    (t.from = function (i, s, a) {
      return Bs(1, arguments, this), this;
    }),
    (t.fromTo = function (i, s, a, o) {
      return Bs(2, arguments, this), this;
    }),
    (t.set = function (i, s, a) {
      return (
        (s.duration = 0),
        (s.parent = this),
        zs(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new At(i, s, Rn(this, a), 1),
        this
      );
    }),
    (t.call = function (i, s, a) {
      return ti(this, At.delayedCall(0, i, s), a);
    }),
    (t.staggerTo = function (i, s, a, o, l, c, u) {
      return (
        (a.duration = s),
        (a.stagger = a.stagger || o),
        (a.onComplete = c),
        (a.onCompleteParams = u),
        (a.parent = this),
        new At(i, a, Rn(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (i, s, a, o, l, c, u) {
      return (
        (a.runBackwards = 1),
        (zs(a).immediateRender = an(a.immediateRender)),
        this.staggerTo(i, s, a, o, l, c, u)
      );
    }),
    (t.staggerFromTo = function (i, s, a, o, l, c, u, d) {
      return (
        (o.startAt = a),
        (zs(o).immediateRender = an(o.immediateRender)),
        this.staggerTo(i, s, o, l, c, u, d)
      );
    }),
    (t.render = function (i, s, a) {
      var o = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        u = i <= 0 ? 0 : zt(i),
        d = this._zTime < 0 != i < 0 && (this._initted || !c),
        h,
        p,
        g,
        m,
        _,
        f,
        S,
        x,
        y,
        M,
        E,
        w;
      if (
        (this !== mt && u > l && i >= 0 && (u = l), u !== this._tTime || a || d)
      ) {
        if (
          (o !== this._time &&
            c &&
            ((u += this._time - o), (i += this._time - o)),
          (h = u),
          (y = this._start),
          (x = this._ts),
          (f = !x),
          d && (c || (o = this._zTime), (i || !s) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((E = this._yoyo),
            (_ = c + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(_ * 100 + i, s, a);
          if (
            ((h = zt(u % _)),
            u === l
              ? ((m = this._repeat), (h = c))
              : ((m = ~~(u / _)),
                m && m === u / _ && ((h = c), m--),
                h > c && (h = c)),
            (M = us(this._tTime, _)),
            !o &&
              this._tTime &&
              M !== m &&
              this._tTime - M * _ - this._dur <= 0 &&
              (M = m),
            E && m & 1 && ((h = c - h), (w = 1)),
            m !== M && !this._lock)
          ) {
            var P = E && M & 1,
              v = P === (E && m & 1);
            if (
              (m < M && (P = !P),
              (o = P ? 0 : c),
              (this._lock = 1),
              (this.render(o || (w ? 0 : zt(m * _)), s, !c)._lock = 0),
              (this._tTime = u),
              !s && this.parent && In(this, "onRepeat"),
              this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                f !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (l = this._tDur),
              v &&
                ((this._lock = 2),
                (o = P ? c : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !w && this.invalidate()),
              (this._lock = 0),
              !this._ts && !f)
            )
              return this;
            vf(this, w);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((S = rp(this, zt(o), zt(h))), S && (u -= h - (h = S._start))),
          (this._tTime = u),
          (this._time = h),
          (this._act = !x),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (o = 0)),
          !o && h && !s && !m && (In(this, "onStart"), this._tTime !== u))
        )
          return this;
        if (h >= o && i >= 0)
          for (p = this._first; p; ) {
            if (
              ((g = p._next), (p._act || h >= p._start) && p._ts && S !== p)
            ) {
              if (p.parent !== this) return this.render(i, s, a);
              if (
                (p.render(
                  p._ts > 0
                    ? (h - p._start) * p._ts
                    : (p._dirty ? p.totalDuration() : p._tDur) +
                        (h - p._start) * p._ts,
                  s,
                  a
                ),
                h !== this._time || (!this._ts && !f))
              ) {
                (S = 0), g && (u += this._zTime = -ct);
                break;
              }
            }
            p = g;
          }
        else {
          p = this._last;
          for (var T = i < 0 ? i : h; p; ) {
            if (((g = p._prev), (p._act || T <= p._end) && p._ts && S !== p)) {
              if (p.parent !== this) return this.render(i, s, a);
              if (
                (p.render(
                  p._ts > 0
                    ? (T - p._start) * p._ts
                    : (p._dirty ? p.totalDuration() : p._tDur) +
                        (T - p._start) * p._ts,
                  s,
                  a || (qt && (p._initted || p._startAt))
                ),
                h !== this._time || (!this._ts && !f))
              ) {
                (S = 0), g && (u += this._zTime = T ? -ct : ct);
                break;
              }
            }
            p = g;
          }
        }
        if (
          S &&
          !s &&
          (this.pause(),
          (S.render(h >= o ? 0 : -ct)._zTime = h >= o ? 1 : -1),
          this._ts)
        )
          return (this._start = y), xa(this), this.render(i, s, a);
        this._onUpdate && !s && In(this, "onUpdate", !0),
          ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
            (y === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !c) &&
                ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                Gi(this, 1),
              !s &&
                !(i < 0 && !o) &&
                (u || o || !l) &&
                (In(
                  this,
                  u === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(u < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (i, s) {
      var a = this;
      if ((Ei(s) || (s = Rn(this, s, i)), !(i instanceof ds))) {
        if (Yt(i))
          return (
            i.forEach(function (o) {
              return a.add(o, s);
            }),
            this
          );
        if (Nt(i)) return this.addLabel(i, s);
        if (xt(i)) i = At.delayedCall(0, i);
        else return this;
      }
      return this !== i ? ti(this, i, s) : this;
    }),
    (t.getChildren = function (i, s, a, o) {
      i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = !0),
        o === void 0 && (o = -Dn);
      for (var l = [], c = this._first; c; )
        c._start >= o &&
          (c instanceof At
            ? s && l.push(c)
            : (a && l.push(c), i && l.push.apply(l, c.getChildren(!0, s, a)))),
          (c = c._next);
      return l;
    }),
    (t.getById = function (i) {
      for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
        if (s[a].vars.id === i) return s[a];
    }),
    (t.remove = function (i) {
      return Nt(i)
        ? this.removeLabel(i)
        : xt(i)
        ? this.killTweensOf(i)
        : (va(this, i),
          i === this._recent && (this._recent = this._last),
          cr(this));
    }),
    (t.totalTime = function (i, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = zt(
              yn.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          r.prototype.totalTime.call(this, i, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (i, s) {
      return (this.labels[i] = Rn(this, s)), this;
    }),
    (t.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (t.addPause = function (i, s, a) {
      var o = At.delayedCall(0, s || $s, a);
      return (
        (o.data = "isPause"), (this._hasPause = 1), ti(this, o, Rn(this, i))
      );
    }),
    (t.removePause = function (i) {
      var s = this._first;
      for (i = Rn(this, i); s; )
        s._start === i && s.data === "isPause" && Gi(s), (s = s._next);
    }),
    (t.killTweensOf = function (i, s, a) {
      for (var o = this.getTweensOf(i, a), l = o.length; l--; )
        Li !== o[l] && o[l].kill(i, s);
      return this;
    }),
    (t.getTweensOf = function (i, s) {
      for (var a = [], o = Un(i), l = this._first, c = Ei(s), u; l; )
        l instanceof At
          ? Zd(l._targets, o) &&
            (c
              ? (!Li || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            a.push(l)
          : (u = l.getTweensOf(o, s)).length && a.push.apply(a, u),
          (l = l._next);
      return a;
    }),
    (t.tweenTo = function (i, s) {
      s = s || {};
      var a = this,
        o = Rn(a, i),
        l = s,
        c = l.startAt,
        u = l.onStart,
        d = l.onStartParams,
        h = l.immediateRender,
        p,
        g = At.to(
          a,
          Fn(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (o - (c && "time" in c ? c.time : a._time)) / a.timeScale()
                ) ||
                ct,
              onStart: function () {
                if ((a.pause(), !p)) {
                  var _ =
                    s.duration ||
                    Math.abs(
                      (o - (c && "time" in c ? c.time : a._time)) /
                        a.timeScale()
                    );
                  g._dur !== _ && hs(g, _, 0, 1).render(g._time, !0, !0),
                    (p = 1);
                }
                u && u.apply(g, d || []);
              },
            },
            s
          )
        );
      return h ? g.render(0) : g;
    }),
    (t.tweenFromTo = function (i, s, a) {
      return this.tweenTo(s, Fn({ startAt: { time: Rn(this, i) } }, a));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (i) {
      return i === void 0 && (i = this._time), kc(this, Rn(this, i));
    }),
    (t.previousLabel = function (i) {
      return i === void 0 && (i = this._time), kc(this, Rn(this, i), 1);
    }),
    (t.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + ct);
    }),
    (t.shiftChildren = function (i, s, a) {
      a === void 0 && (a = 0);
      for (var o = this._first, l = this.labels, c; o; )
        o._start >= a && ((o._start += i), (o._end += i)), (o = o._next);
      if (s) for (c in l) l[c] >= a && (l[c] += i);
      return cr(this);
    }),
    (t.invalidate = function (i) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(i), (s = s._next);
      return r.prototype.invalidate.call(this, i);
    }),
    (t.clear = function (i) {
      i === void 0 && (i = !0);
      for (var s = this._first, a; s; ) (a = s._next), this.remove(s), (s = a);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        cr(this)
      );
    }),
    (t.totalDuration = function (i) {
      var s = 0,
        a = this,
        o = a._last,
        l = Dn,
        c,
        u,
        d;
      if (arguments.length)
        return a.timeScale(
          (a._repeat < 0 ? a.duration() : a.totalDuration()) /
            (a.reversed() ? -i : i)
        );
      if (a._dirty) {
        for (d = a.parent; o; )
          (c = o._prev),
            o._dirty && o.totalDuration(),
            (u = o._start),
            u > l && a._sort && o._ts && !a._lock
              ? ((a._lock = 1), (ti(a, o, u - o._delay, 1)._lock = 0))
              : (l = u),
            u < 0 &&
              o._ts &&
              ((s -= u),
              ((!d && !a._dp) || (d && d.smoothChildTiming)) &&
                ((a._start += u / a._ts), (a._time -= u), (a._tTime -= u)),
              a.shiftChildren(-u, !1, -1 / 0),
              (l = 0)),
            o._end > s && o._ts && (s = o._end),
            (o = c);
        hs(a, a === mt && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
      }
      return a._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((mt._ts && (Zh(mt, ca(i, mt)), (Kh = yn.frame)), yn.frame >= Nc)) {
        Nc += Tn.autoSleep || 120;
        var s = mt._first;
        if ((!s || !s._ts) && Tn.autoSleep && yn._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || yn.sleep();
        }
      }
    }),
    e
  );
})(ds);
Fn(on.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Mp = function (e, t, n, i, s, a, o) {
    var l = new cn(this._pt, e, t, 0, 1, wf, null, s),
      c = 0,
      u = 0,
      d,
      h,
      p,
      g,
      m,
      _,
      f,
      S;
    for (
      l.b = n,
        l.e = i,
        n += "",
        i += "",
        (f = ~i.indexOf("random(")) && (i = Zs(i)),
        a && ((S = [n, i]), a(S, e, t), (n = S[0]), (i = S[1])),
        h = n.match(Ca) || [];
      (d = Ca.exec(i));

    )
      (g = d[0]),
        (m = i.substring(c, d.index)),
        p ? (p = (p + 1) % 5) : m.substr(-5) === "rgba(" && (p = 1),
        g !== h[u++] &&
          ((_ = parseFloat(h[u - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: m || u === 1 ? m : ",",
            s: _,
            c: g.charAt(1) === "=" ? ts(_, g) - _ : parseFloat(g) - _,
            m: p && p < 4 ? Math.round : 0,
          }),
          (c = Ca.lastIndex));
    return (
      (l.c = c < i.length ? i.substring(c, i.length) : ""),
      (l.fp = o),
      (Wh.test(i) || f) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  dc = function (e, t, n, i, s, a, o, l, c, u) {
    xt(i) && (i = i(s || 0, e, a));
    var d = e[t],
      h =
        n !== "get"
          ? n
          : xt(d)
          ? c
            ? e[
                t.indexOf("set") || !xt(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](c)
            : e[t]()
          : d,
      p = xt(d) ? (c ? bp : Tf) : mc,
      g;
    if (
      (Nt(i) &&
        (~i.indexOf("random(") && (i = Zs(i)),
        i.charAt(1) === "=" &&
          ((g = ts(h, i) + (Xt(h) || 0)), (g || g === 0) && (i = g))),
      !u || h !== i || Dl)
    )
      return !isNaN(h * i) && i !== ""
        ? ((g = new cn(
            this._pt,
            e,
            t,
            +h || 0,
            i - (h || 0),
            typeof d == "boolean" ? Ap : bf,
            0,
            p
          )),
          c && (g.fp = c),
          o && g.modifier(o, this, e),
          (this._pt = g))
        : (!d && !(t in e) && cc(t, i),
          Mp.call(this, e, t, h, i, p, l || Tn.stringFilter, c));
  },
  Sp = function (e, t, n, i, s) {
    if (
      (xt(e) && (e = ks(e, s, t, n, i)),
      !oi(e) || (e.style && e.nodeType) || Yt(e) || Hh(e))
    )
      return Nt(e) ? ks(e, s, t, n, i) : e;
    var a = {},
      o;
    for (o in e) a[o] = ks(e[o], s, t, n, i);
    return a;
  },
  Sf = function (e, t, n, i, s, a) {
    var o, l, c, u;
    if (
      xn[e] &&
      (o = new xn[e]()).init(
        s,
        o.rawVars ? t[e] : Sp(t[e], i, s, a, n),
        n,
        i,
        a
      ) !== !1 &&
      ((n._pt = l = new cn(n._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
      n !== Zr)
    )
      for (c = n._ptLookup[n._targets.indexOf(s)], u = o._props.length; u--; )
        c[o._props[u]] = l;
    return o;
  },
  Li,
  Dl,
  pc = function r(e, t, n) {
    var i = e.vars,
      s = i.ease,
      a = i.startAt,
      o = i.immediateRender,
      l = i.lazy,
      c = i.onUpdate,
      u = i.onUpdateParams,
      d = i.callbackScope,
      h = i.runBackwards,
      p = i.yoyoEase,
      g = i.keyframes,
      m = i.autoRevert,
      _ = e._dur,
      f = e._startAt,
      S = e._targets,
      x = e.parent,
      y = x && x.data === "nested" ? x.vars.targets : S,
      M = e._overwrite === "auto" && !sc,
      E = e.timeline,
      w,
      P,
      v,
      T,
      G,
      O,
      I,
      F,
      k,
      K,
      H,
      W,
      Q;
    if (
      (E && (!g || !s) && (s = "none"),
      (e._ease = ur(s, cs.ease)),
      (e._yEase = p ? gf(ur(p === !0 ? s : p, cs.ease)) : 0),
      p &&
        e._yoyo &&
        !e._repeat &&
        ((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
      (e._from = !E && !!i.runBackwards),
      !E || (g && !i.stagger))
    ) {
      if (
        ((F = S[0] ? lr(S[0]).harness : 0),
        (W = F && i[F.prop]),
        (w = la(i, uc)),
        f &&
          (f._zTime < 0 && f.progress(1),
          t < 0 && h && o && !m ? f.render(-1, !0) : f.revert(h && _ ? jo : Kd),
          (f._lazy = 0)),
        a)
      ) {
        if (
          (Gi(
            (e._startAt = At.set(
              S,
              Fn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: x,
                  immediateRender: !0,
                  lazy: !f && an(l),
                  startAt: null,
                  delay: 0,
                  onUpdate: c,
                  onUpdateParams: u,
                  callbackScope: d,
                  stagger: 0,
                },
                a
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (qt || (!o && !m)) && e._startAt.revert(jo),
          o && _ && t <= 0 && n <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (h && _ && !f) {
        if (
          (t && (o = !1),
          (v = Fn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !f && an(l),
              immediateRender: o,
              stagger: 0,
              parent: x,
            },
            w
          )),
          W && (v[F.prop] = W),
          Gi((e._startAt = At.set(S, v))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (qt ? e._startAt.revert(jo) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !o)
        )
          r(e._startAt, ct, ct);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (_ && an(l)) || (l && !_), P = 0;
        P < S.length;
        P++
      ) {
        if (
          ((G = S[P]),
          (I = G._gsap || fc(S)[P]._gsap),
          (e._ptLookup[P] = K = {}),
          wl[I.id] && Fi.length && aa(),
          (H = y === S ? P : y.indexOf(G)),
          F &&
            (k = new F()).init(G, W || w, e, H, y) !== !1 &&
            ((e._pt = T =
              new cn(e._pt, G, k.name, 0, 1, k.render, k, 0, k.priority)),
            k._props.forEach(function (C) {
              K[C] = T;
            }),
            k.priority && (O = 1)),
          !F || W)
        )
          for (v in w)
            xn[v] && (k = Sf(v, w, e, H, G, y))
              ? k.priority && (O = 1)
              : (K[v] = T =
                  dc.call(e, G, v, "get", w[v], H, y, 0, i.stringFilter));
        e._op && e._op[P] && e.kill(G, e._op[P]),
          M &&
            e._pt &&
            ((Li = e),
            mt.killTweensOf(G, K, e.globalTime(t)),
            (Q = !e.parent),
            (Li = 0)),
          e._pt && l && (wl[I.id] = 1);
      }
      O && Af(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !Q),
      g && t <= 0 && E.render(Dn, !0, !0);
  },
  yp = function (e, t, n, i, s, a, o) {
    var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      c,
      u,
      d,
      h;
    if (!l)
      for (
        l = e._ptCache[t] = [], d = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((c = d[h][t]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
        if (!c) return (Dl = 1), (e.vars[t] = "+=0"), pc(e, o), (Dl = 0), 1;
        l.push(c);
      }
    for (h = l.length; h--; )
      (u = l[h]),
        (c = u._pt || u),
        (c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + a * c.c),
        (c.c = n - c.s),
        u.e && (u.e = yt(n) + Xt(u.e)),
        u.b && (u.b = c.s + Xt(u.b));
  },
  Ep = function (e, t) {
    var n = e[0] ? lr(e[0]).harness : 0,
      i = n && n.aliases,
      s,
      a,
      o,
      l;
    if (!i) return t;
    s = gr({}, t);
    for (a in i)
      if (a in s) for (l = i[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
    return s;
  },
  Tp = function (e, t, n, i) {
    var s = t.ease || i || "power1.inOut",
      a,
      o;
    if (Yt(t))
      (o = n[e] || (n[e] = [])),
        t.forEach(function (l, c) {
          return o.push({ t: (c / (t.length - 1)) * 100, v: l, e: s });
        });
    else
      for (a in t)
        (o = n[a] || (n[a] = [])),
          a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: s });
  },
  ks = function (e, t, n, i, s) {
    return xt(e)
      ? e.call(t, n, i, s)
      : Nt(e) && ~e.indexOf("random(")
      ? Zs(e)
      : e;
  },
  yf = hc + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Ef = {};
ln(yf + ",id,stagger,delay,duration,paused,scrollTrigger", function (r) {
  return (Ef[r] = 1);
});
var At = (function (r) {
  kh(e, r);
  function e(n, i, s, a) {
    var o;
    typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
      (o = r.call(this, a ? i : zs(i)) || this);
    var l = o.vars,
      c = l.duration,
      u = l.delay,
      d = l.immediateRender,
      h = l.stagger,
      p = l.overwrite,
      g = l.keyframes,
      m = l.defaults,
      _ = l.scrollTrigger,
      f = l.yoyoEase,
      S = i.parent || mt,
      x = (Yt(n) || Hh(n) ? Ei(n[0]) : "length" in i) ? [n] : Un(n),
      y,
      M,
      E,
      w,
      P,
      v,
      T,
      G;
    if (
      ((o._targets = x.length
        ? fc(x)
        : oa(
            "GSAP target " + n + " not found. https://greensock.com",
            !Tn.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = p),
      g || h || ho(c) || ho(u))
    ) {
      if (
        ((i = o.vars),
        (y = o.timeline =
          new on({
            data: "nested",
            defaults: m || {},
            targets: S && S.data === "nested" ? S.vars.targets : x,
          })),
        y.kill(),
        (y.parent = y._dp = gi(o)),
        (y._start = 0),
        h || ho(c) || ho(u))
      ) {
        if (((w = x.length), (T = h && af(h)), oi(h)))
          for (P in h) ~yf.indexOf(P) && (G || (G = {}), (G[P] = h[P]));
        for (M = 0; M < w; M++)
          (E = la(i, Ef)),
            (E.stagger = 0),
            f && (E.yoyoEase = f),
            G && gr(E, G),
            (v = x[M]),
            (E.duration = +ks(c, gi(o), M, v, x)),
            (E.delay = (+ks(u, gi(o), M, v, x) || 0) - o._delay),
            !h &&
              w === 1 &&
              E.delay &&
              ((o._delay = u = E.delay), (o._start += u), (E.delay = 0)),
            y.to(v, E, T ? T(M, v, x) : 0),
            (y._ease = et.none);
        y.duration() ? (c = u = 0) : (o.timeline = 0);
      } else if (g) {
        zs(Fn(y.vars.defaults, { ease: "none" })),
          (y._ease = ur(g.ease || i.ease || "none"));
        var O = 0,
          I,
          F,
          k;
        if (Yt(g))
          g.forEach(function (K) {
            return y.to(x, K, ">");
          }),
            y.duration();
        else {
          E = {};
          for (P in g)
            P === "ease" || P === "easeEach" || Tp(P, g[P], E, g.easeEach);
          for (P in E)
            for (
              I = E[P].sort(function (K, H) {
                return K.t - H.t;
              }),
                O = 0,
                M = 0;
              M < I.length;
              M++
            )
              (F = I[M]),
                (k = {
                  ease: F.e,
                  duration: ((F.t - (M ? I[M - 1].t : 0)) / 100) * c,
                }),
                (k[P] = F.v),
                y.to(x, k, O),
                (O += k.duration);
          y.duration() < c && y.to({}, { duration: c - y.duration() });
        }
      }
      c || o.duration((c = y.duration()));
    } else o.timeline = 0;
    return (
      p === !0 && !sc && ((Li = gi(o)), mt.killTweensOf(x), (Li = 0)),
      ti(S, gi(o), s),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      (d ||
        (!c &&
          !g &&
          o._start === zt(S._time) &&
          an(d) &&
          tp(gi(o)) &&
          S.data !== "nested")) &&
        ((o._tTime = -ct), o.render(Math.max(0, -u) || 0)),
      _ && nf(gi(o), _),
      o
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (i, s, a) {
      var o = this._time,
        l = this._tDur,
        c = this._dur,
        u = i < 0,
        d = i > l - ct && !u ? l : i < ct ? 0 : i,
        h,
        p,
        g,
        m,
        _,
        f,
        S,
        x,
        y;
      if (!c) ip(this, i, s, a);
      else if (
        d !== this._tTime ||
        !i ||
        a ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u)
      ) {
        if (((h = d), (x = this.timeline), this._repeat)) {
          if (((m = c + this._rDelay), this._repeat < -1 && u))
            return this.totalTime(m * 100 + i, s, a);
          if (
            ((h = zt(d % m)),
            d === l
              ? ((g = this._repeat), (h = c))
              : ((g = ~~(d / m)),
                g && g === d / m && ((h = c), g--),
                h > c && (h = c)),
            (f = this._yoyo && g & 1),
            f && ((y = this._yEase), (h = c - h)),
            (_ = us(this._tTime, m)),
            h === o && !a && this._initted)
          )
            return (this._tTime = d), this;
          g !== _ &&
            (x && this._yEase && vf(x, f),
            this.vars.repeatRefresh &&
              !f &&
              !this._lock &&
              ((this._lock = a = 1),
              (this.render(zt(m * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (rf(this, u ? i : h, a, s, d)) return (this._tTime = 0), this;
          if (o !== this._time) return this;
          if (c !== this._dur) return this.render(i, s, a);
        }
        if (
          ((this._tTime = d),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = S = (y || this._ease)(h / c)),
          this._from && (this.ratio = S = 1 - S),
          h && !o && !s && !g && (In(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (p = this._pt; p; ) p.r(S, p.d), (p = p._next);
        (x &&
          x.render(
            i < 0 ? i : !h && f ? -ct : x._dur * x._ease(h / this._dur),
            s,
            a
          )) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !s &&
            (u && Al(this, i, s, a), In(this, "onUpdate")),
          this._repeat &&
            g !== _ &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            In(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (u && !this._onUpdate && Al(this, i, !0, !0),
            (i || !c) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              Gi(this, 1),
            !s &&
              !(u && !o) &&
              (d || o || f) &&
              (In(this, d === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        r.prototype.invalidate.call(this, i)
      );
    }),
    (t.resetTo = function (i, s, a, o) {
      Js || yn.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || pc(this, l),
        (c = this._ease(l / this._dur)),
        yp(this, i, s, a, o, c, l)
          ? this.resetTo(i, s, a, o)
          : (Ma(this, 0),
            this.parent ||
              ef(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (i, s) {
      if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
        return (this._lazy = this._pt = 0), this.parent ? Ls(this) : this;
      if (this.timeline) {
        var a = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, s, Li && Li.vars.overwrite !== !0)
            ._first || Ls(this),
          this.parent &&
            a !== this.timeline.totalDuration() &&
            hs(this, (this._dur * this.timeline._tDur) / a, 0, 1),
          this
        );
      }
      var o = this._targets,
        l = i ? Un(i) : o,
        c = this._ptLookup,
        u = this._pt,
        d,
        h,
        p,
        g,
        m,
        _,
        f;
      if ((!s || s === "all") && Qd(o, l))
        return s === "all" && (this._pt = 0), Ls(this);
      for (
        d = this._op = this._op || [],
          s !== "all" &&
            (Nt(s) &&
              ((m = {}),
              ln(s, function (S) {
                return (m[S] = 1);
              }),
              (s = m)),
            (s = Ep(o, s))),
          f = o.length;
        f--;

      )
        if (~l.indexOf(o[f])) {
          (h = c[f]),
            s === "all"
              ? ((d[f] = s), (g = h), (p = {}))
              : ((p = d[f] = d[f] || {}), (g = s));
          for (m in g)
            (_ = h && h[m]),
              _ &&
                ((!("kill" in _.d) || _.d.kill(m) === !0) && va(this, _, "_pt"),
                delete h[m]),
              p !== "all" && (p[m] = 1);
        }
      return this._initted && !this._pt && u && Ls(this), this;
    }),
    (e.to = function (i, s) {
      return new e(i, s, arguments[2]);
    }),
    (e.from = function (i, s) {
      return Bs(1, arguments);
    }),
    (e.delayedCall = function (i, s, a, o) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: a,
        onReverseCompleteParams: a,
        callbackScope: o,
      });
    }),
    (e.fromTo = function (i, s, a) {
      return Bs(2, arguments);
    }),
    (e.set = function (i, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s);
    }),
    (e.killTweensOf = function (i, s, a) {
      return mt.killTweensOf(i, s, a);
    }),
    e
  );
})(ds);
Fn(At.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ln("staggerTo,staggerFrom,staggerFromTo", function (r) {
  At[r] = function () {
    var e = new on(),
      t = Cl.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var mc = function (e, t, n) {
    return (e[t] = n);
  },
  Tf = function (e, t, n) {
    return e[t](n);
  },
  bp = function (e, t, n, i) {
    return e[t](i.fp, n);
  },
  wp = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  _c = function (e, t) {
    return xt(e[t]) ? Tf : oc(e[t]) && e.setAttribute ? wp : mc;
  },
  bf = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  Ap = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  wf = function (e, t) {
    var n = t._pt,
      i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; n; )
        (i =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          i),
          (n = n._next);
      i += t.c;
    }
    t.set(t.t, t.p, i, t);
  },
  gc = function (e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
  },
  Rp = function (e, t, n, i) {
    for (var s = this._pt, a; s; )
      (a = s._next), s.p === i && s.modifier(e, t, n), (s = a);
  },
  Cp = function (e) {
    for (var t = this._pt, n, i; t; )
      (i = t._next),
        (t.p === e && !t.op) || t.op === e
          ? va(this, t, "_pt")
          : t.dep || (n = 1),
        (t = i);
    return !n;
  },
  Pp = function (e, t, n, i) {
    i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
  },
  Af = function (e) {
    for (var t = e._pt, n, i, s, a; t; ) {
      for (n = t._next, i = s; i && i.pr > t.pr; ) i = i._next;
      (t._prev = i ? i._prev : a) ? (t._prev._next = t) : (s = t),
        (t._next = i) ? (i._prev = t) : (a = t),
        (t = n);
    }
    e._pt = s;
  },
  cn = (function () {
    function r(t, n, i, s, a, o, l, c, u) {
      (this.t = n),
        (this.s = s),
        (this.c = a),
        (this.p = i),
        (this.r = o || bf),
        (this.d = l || this),
        (this.set = c || mc),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = r.prototype;
    return (
      (e.modifier = function (n, i, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = Pp),
          (this.m = n),
          (this.mt = s),
          (this.tween = i);
      }),
      r
    );
  })();
ln(
  hc +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (r) {
    return (uc[r] = 1);
  }
);
wn.TweenMax = wn.TweenLite = At;
wn.TimelineLite = wn.TimelineMax = on;
mt = new on({
  sortChildren: !1,
  defaults: cs,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Tn.stringFilter = _f;
var ps = [],
  $o = {},
  Lp = [],
  Hc = 0,
  Ia = function (e) {
    return ($o[e] || Lp).map(function (t) {
      return t();
    });
  },
  Ul = function () {
    var e = Date.now(),
      t = [];
    e - Hc > 2 &&
      (Ia("matchMediaInit"),
      ps.forEach(function (n) {
        var i = n.queries,
          s = n.conditions,
          a,
          o,
          l,
          c;
        for (o in i)
          (a = Cn.matchMedia(i[o]).matches),
            a && (l = 1),
            a !== s[o] && ((s[o] = a), (c = 1));
        c && (n.revert(), l && t.push(n));
      }),
      Ia("matchMediaRevert"),
      t.forEach(function (n) {
        return n.onMatch(n);
      }),
      (Hc = e),
      Ia("matchMedia"));
  },
  Rf = (function () {
    function r(t, n) {
      (this.selector = n && Pl(n)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        t && this.add(t);
    }
    var e = r.prototype;
    return (
      (e.add = function (n, i, s) {
        xt(n) && ((s = i), (i = n), (n = xt));
        var a = this,
          o = function () {
            var c = bt,
              u = a.selector,
              d;
            return (
              c && c !== a && c.data.push(a),
              s && (a.selector = Pl(s)),
              (bt = a),
              (d = i.apply(a, arguments)),
              xt(d) && a._r.push(d),
              (bt = c),
              (a.selector = u),
              (a.isReverted = !1),
              d
            );
          };
        return (a.last = o), n === xt ? o(a) : n ? (a[n] = o) : o;
      }),
      (e.ignore = function (n) {
        var i = bt;
        (bt = null), n(this), (bt = i);
      }),
      (e.getTweens = function () {
        var n = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof r
              ? n.push.apply(n, i.getTweens())
              : i instanceof At &&
                  !(i.parent && i.parent.data === "nested") &&
                  n.push(i);
          }),
          n
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (n, i) {
        var s = this;
        if (n) {
          var a = this.getTweens();
          this.data.forEach(function (l) {
            l.data === "isFlip" &&
              (l.revert(),
              l.getChildren(!0, !0, !1).forEach(function (c) {
                return a.splice(a.indexOf(c), 1);
              }));
          }),
            a
              .map(function (l) {
                return { g: l.globalTime(0), t: l };
              })
              .sort(function (l, c) {
                return c.g - l.g || -1;
              })
              .forEach(function (l) {
                return l.t.revert(n);
              }),
            this.data.forEach(function (l) {
              return !(l instanceof ds) && l.revert && l.revert(n);
            }),
            this._r.forEach(function (l) {
              return l(n, s);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (l) {
            return l.kill && l.kill();
          });
        if ((this.clear(), i)) {
          var o = ps.indexOf(this);
          ~o && ps.splice(o, 1);
        }
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      r
    );
  })(),
  Dp = (function () {
    function r(t) {
      (this.contexts = []), (this.scope = t);
    }
    var e = r.prototype;
    return (
      (e.add = function (n, i, s) {
        oi(n) || (n = { matches: n });
        var a = new Rf(0, s || this.scope),
          o = (a.conditions = {}),
          l,
          c,
          u;
        this.contexts.push(a), (i = a.add("onMatch", i)), (a.queries = n);
        for (c in n)
          c === "all"
            ? (u = 1)
            : ((l = Cn.matchMedia(n[c])),
              l &&
                (ps.indexOf(a) < 0 && ps.push(a),
                (o[c] = l.matches) && (u = 1),
                l.addListener
                  ? l.addListener(Ul)
                  : l.addEventListener("change", Ul)));
        return u && i(a), this;
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      (e.kill = function (n) {
        this.contexts.forEach(function (i) {
          return i.kill(n, !0);
        });
      }),
      r
    );
  })(),
  ua = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      t.forEach(function (i) {
        return df(i);
      });
    },
    timeline: function (e) {
      return new on(e);
    },
    getTweensOf: function (e, t) {
      return mt.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, i) {
      Nt(e) && (e = Un(e)[0]);
      var s = lr(e || {}).get,
        a = n ? Qh : Jh;
      return (
        n === "native" && (n = ""),
        e &&
          (t
            ? a(((xn[t] && xn[t].get) || s)(e, t, n, i))
            : function (o, l, c) {
                return a(((xn[o] && xn[o].get) || s)(e, o, l, c));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = Un(e)), e.length > 1)) {
        var i = e.map(function (u) {
            return fn.quickSetter(u, t, n);
          }),
          s = i.length;
        return function (u) {
          for (var d = s; d--; ) i[d](u);
        };
      }
      e = e[0] || {};
      var a = xn[t],
        o = lr(e),
        l = (o.harness && (o.harness.aliases || {})[t]) || t,
        c = a
          ? function (u) {
              var d = new a();
              (Zr._pt = 0),
                d.init(e, n ? u + n : u, Zr, 0, [e]),
                d.render(1, d),
                Zr._pt && gc(1, Zr);
            }
          : o.set(e, l);
      return a
        ? c
        : function (u) {
            return c(e, l, n ? u + n : u, o, 1);
          };
    },
    quickTo: function (e, t, n) {
      var i,
        s = fn.to(
          e,
          gr(((i = {}), (i[t] = "+=0.1"), (i.paused = !0), i), n || {})
        ),
        a = function (l, c, u) {
          return s.resetTo(t, l, c, u);
        };
      return (a.tween = s), a;
    },
    isTweening: function (e) {
      return mt.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = ur(e.ease, cs.ease)), Fc(cs, e || {});
    },
    config: function (e) {
      return Fc(Tn, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        i = e.plugins,
        s = e.defaults,
        a = e.extendTimeline;
      (i || "").split(",").forEach(function (o) {
        return (
          o && !xn[o] && !wn[o] && oa(t + " effect requires " + o + " plugin.")
        );
      }),
        (Pa[t] = function (o, l, c) {
          return n(Un(o), Fn(l || {}, s), c);
        }),
        a &&
          (on.prototype[t] = function (o, l, c) {
            return this.add(Pa[t](o, oi(l) ? l : (c = l) && {}, this), c);
          });
    },
    registerEase: function (e, t) {
      et[e] = ur(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? ur(e, t) : et;
    },
    getById: function (e) {
      return mt.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new on(e),
        i,
        s;
      for (
        n.smoothChildTiming = an(e.smoothChildTiming),
          mt.remove(n),
          n._dp = 0,
          n._time = n._tTime = mt._time,
          i = mt._first;
        i;

      )
        (s = i._next),
          (t ||
            !(
              !i._dur &&
              i instanceof At &&
              i.vars.onComplete === i._targets[0]
            )) &&
            ti(n, i, i._start - i._delay),
          (i = s);
      return ti(mt, n, 0), n;
    },
    context: function (e, t) {
      return e ? new Rf(e, t) : bt;
    },
    matchMedia: function (e) {
      return new Dp(e);
    },
    matchMediaRefresh: function () {
      return (
        ps.forEach(function (e) {
          var t = e.conditions,
            n,
            i;
          for (i in t) t[i] && ((t[i] = !1), (n = 1));
          n && e.revert();
        }) || Ul()
      );
    },
    addEventListener: function (e, t) {
      var n = $o[e] || ($o[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = $o[e],
        i = n && n.indexOf(t);
      i >= 0 && n.splice(i, 1);
    },
    utils: {
      wrap: hp,
      wrapYoyo: fp,
      distribute: af,
      random: cf,
      snap: lf,
      normalize: up,
      getUnit: Xt,
      clamp: op,
      splitColor: pf,
      toArray: Un,
      selector: Pl,
      mapRange: hf,
      pipe: lp,
      unitize: cp,
      interpolate: dp,
      shuffle: of,
    },
    install: Yh,
    effects: Pa,
    ticker: yn,
    updateRoot: on.updateRoot,
    plugins: xn,
    globalTimeline: mt,
    core: {
      PropTween: cn,
      globals: jh,
      Tween: At,
      Timeline: on,
      Animation: ds,
      getCache: lr,
      _removeLinkedListItem: va,
      reverting: function () {
        return qt;
      },
      context: function (e) {
        return e && bt && (bt.data.push(e), (e._ctx = bt)), bt;
      },
      suppressOverwrites: function (e) {
        return (sc = e);
      },
    },
  };
ln("to,from,fromTo,delayedCall,set,killTweensOf", function (r) {
  return (ua[r] = At[r]);
});
yn.add(on.updateRoot);
Zr = ua.to({}, { duration: 0 });
var Up = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
      n = n._next;
    return n;
  },
  Ip = function (e, t) {
    var n = e._targets,
      i,
      s,
      a;
    for (i in t)
      for (s = n.length; s--; )
        (a = e._ptLookup[s][i]),
          a &&
            (a = a.d) &&
            (a._pt && (a = Up(a, i)),
            a && a.modifier && a.modifier(t[i], e, n[s], i));
  },
  Oa = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, s, a) {
        a._onInit = function (o) {
          var l, c;
          if (
            (Nt(s) &&
              ((l = {}),
              ln(s, function (u) {
                return (l[u] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (c in s) l[c] = t(s[c]);
            s = l;
          }
          Ip(o, s);
        };
      },
    };
  },
  fn =
    ua.registerPlugin(
      {
        name: "attr",
        init: function (e, t, n, i, s) {
          var a, o, l;
          this.tween = n;
          for (a in t)
            (l = e.getAttribute(a) || ""),
              (o = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                t[a],
                i,
                s,
                0,
                0,
                a
              )),
              (o.op = a),
              (o.b = l),
              this._props.push(a);
        },
        render: function (e, t) {
          for (var n = t._pt; n; )
            qt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      Oa("roundProps", Ll),
      Oa("modifiers"),
      Oa("snap", lf)
    ) || ua;
At.version = on.version = fn.version = "3.11.5";
qh = 1;
ac() && fs();
et.Power0;
et.Power1;
et.Power2;
et.Power3;
et.Power4;
et.Linear;
et.Quad;
et.Cubic;
et.Quart;
et.Quint;
et.Strong;
et.Elastic;
et.Back;
et.SteppedEase;
et.Bounce;
et.Sine;
et.Expo;
et.Circ;
/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Vc,
  Di,
  ns,
  vc,
  rr,
  Wc,
  xc,
  Op = function () {
    return typeof window < "u";
  },
  Ti = {},
  Qi = 180 / Math.PI,
  is = Math.PI / 180,
  wr = Math.atan2,
  Xc = 1e8,
  Mc = /([A-Z])/g,
  Np = /(left|right|width|margin|padding|x)/i,
  Fp = /[\s,\(]\S/,
  ni = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Il = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  zp = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  Bp = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  kp = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Cf = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Pf = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  Gp = function (e, t, n) {
    return (e.style[t] = n);
  },
  Hp = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  Vp = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  Wp = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  Xp = function (e, t, n, i, s) {
    var a = e._gsap;
    (a.scaleX = a.scaleY = n), a.renderTransform(s, a);
  },
  qp = function (e, t, n, i, s) {
    var a = e._gsap;
    (a[t] = n), a.renderTransform(s, a);
  },
  _t = "transform",
  $n = _t + "Origin",
  Yp = function r(e, t) {
    var n = this,
      i = this.target,
      s = i.style;
    if (e in Ti) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = ni[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (n.tfm[a] = vi(i, a));
              })
            : (this.tfm[e] = i._gsap.x ? i._gsap[e] : vi(i, e));
      else
        return ni.transform.split(",").forEach(function (a) {
          return r.call(n, a, t);
        });
      if (this.props.indexOf(_t) >= 0) return;
      i._gsap.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push($n, t, "")),
        (e = _t);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  Lf = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  jp = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      i = t._gsap,
      s,
      a;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (t[e[s]] = e[s + 2])
        : e[s + 2]
        ? (n[e[s]] = e[s + 2])
        : n.removeProperty(
            e[s].substr(0, 2) === "--"
              ? e[s]
              : e[s].replace(Mc, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (a in this.tfm) i[a] = this.tfm[a];
      i.svg &&
        (i.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = xc()),
        (!s || !s.isStart) && !n[_t] && (Lf(n), (i.uncache = 1));
    }
  },
  Df = function (e, t) {
    var n = { target: e, props: [], revert: jp, save: Yp };
    return (
      e._gsap || fn.core.getCache(e),
      t &&
        t.split(",").forEach(function (i) {
          return n.save(i);
        }),
      n
    );
  },
  Uf,
  Ol = function (e, t) {
    var n = Di.createElementNS
      ? Di.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Di.createElement(e);
    return n.style ? n : Di.createElement(e);
  },
  ri = function r(e, t, n) {
    var i = getComputedStyle(e);
    return (
      i[t] ||
      i.getPropertyValue(t.replace(Mc, "-$1").toLowerCase()) ||
      i.getPropertyValue(t) ||
      (!n && r(e, ms(t) || t, 1)) ||
      ""
    );
  },
  qc = "O,Moz,ms,Ms,Webkit".split(","),
  ms = function (e, t, n) {
    var i = t || rr,
      s = i.style,
      a = 5;
    if (e in s && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      a-- && !(qc[a] + e in s);

    );
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? qc[a] : "") + e;
  },
  Nl = function () {
    Op() &&
      window.document &&
      ((Vc = window),
      (Di = Vc.document),
      (ns = Di.documentElement),
      (rr = Ol("div") || { style: {} }),
      Ol("div"),
      (_t = ms(_t)),
      ($n = _t + "Origin"),
      (rr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Uf = !!ms("perspective")),
      (xc = fn.core.reverting),
      (vc = 1));
  },
  Na = function r(e) {
    var t = Ol(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      n = this.parentNode,
      i = this.nextSibling,
      s = this.style.cssText,
      a;
    if (
      (ns.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (a = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = r);
      } catch {}
    else this._gsapBBox && (a = this._gsapBBox());
    return (
      n && (i ? n.insertBefore(this, i) : n.appendChild(this)),
      ns.removeChild(t),
      (this.style.cssText = s),
      a
    );
  },
  Yc = function (e, t) {
    for (var n = t.length; n--; )
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  If = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = Na.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === Na || (t = Na.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Yc(e, ["x", "cx", "x1"]) || 0,
            y: +Yc(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  Of = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && If(e));
  },
  Qs = function (e, t) {
    if (t) {
      var n = e.style;
      t in Ti && t !== $n && (t = _t),
        n.removeProperty
          ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") &&
              (t = "-" + t),
            n.removeProperty(t.replace(Mc, "-$1").toLowerCase()))
          : n.removeAttribute(t);
    }
  },
  Ui = function (e, t, n, i, s, a) {
    var o = new cn(e._pt, t, n, 0, 1, a ? Pf : Cf);
    return (e._pt = o), (o.b = i), (o.e = s), e._props.push(n), o;
  },
  jc = { deg: 1, rad: 1, turn: 1 },
  Kp = { grid: 1, flex: 1 },
  Hi = function r(e, t, n, i) {
    var s = parseFloat(n) || 0,
      a = (n + "").trim().substr((s + "").length) || "px",
      o = rr.style,
      l = Np.test(t),
      c = e.tagName.toLowerCase() === "svg",
      u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      h = i === "px",
      p = i === "%",
      g,
      m,
      _,
      f;
    return i === a || !s || jc[i] || jc[a]
      ? s
      : (a !== "px" && !h && (s = r(e, t, n, "px")),
        (f = e.getCTM && Of(e)),
        (p || a === "%") && (Ti[t] || ~t.indexOf("adius"))
          ? ((g = f ? e.getBBox()[l ? "width" : "height"] : e[u]),
            yt(p ? (s / g) * d : (s / 100) * g))
          : ((o[l ? "width" : "height"] = d + (h ? a : i)),
            (m =
              ~t.indexOf("adius") || (i === "em" && e.appendChild && !c)
                ? e
                : e.parentNode),
            f && (m = (e.ownerSVGElement || {}).parentNode),
            (!m || m === Di || !m.appendChild) && (m = Di.body),
            (_ = m._gsap),
            _ && p && _.width && l && _.time === yn.time && !_.uncache
              ? yt((s / _.width) * d)
              : ((p || a === "%") &&
                  !Kp[ri(m, "display")] &&
                  (o.position = ri(e, "position")),
                m === e && (o.position = "static"),
                m.appendChild(rr),
                (g = rr[u]),
                m.removeChild(rr),
                (o.position = "absolute"),
                l && p && ((_ = lr(m)), (_.time = yn.time), (_.width = m[u])),
                yt(h ? (g * s) / d : g && s ? (d / g) * s : 0))));
  },
  vi = function (e, t, n, i) {
    var s;
    return (
      vc || Nl(),
      t in ni &&
        t !== "transform" &&
        ((t = ni[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Ti[t] && t !== "transform"
        ? ((s = to(e, i)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : fa(ri(e, $n)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
            (s =
              (ha[t] && ha[t](e, t, n)) ||
              ri(e, t) ||
              $h(e, t) ||
              (t === "opacity" ? 1 : 0))),
      n && !~(s + "").trim().indexOf(" ") ? Hi(e, t, s, n) + n : s
    );
  },
  $p = function (e, t, n, i) {
    if (!n || n === "none") {
      var s = ms(t, e, 1),
        a = s && ri(e, s, 1);
      a && a !== n
        ? ((t = s), (n = a))
        : t === "borderColor" && (n = ri(e, "borderTopColor"));
    }
    var o = new cn(this._pt, e.style, t, 0, 1, wf),
      l = 0,
      c = 0,
      u,
      d,
      h,
      p,
      g,
      m,
      _,
      f,
      S,
      x,
      y,
      M;
    if (
      ((o.b = n),
      (o.e = i),
      (n += ""),
      (i += ""),
      i === "auto" && ((e.style[t] = i), (i = ri(e, t) || i), (e.style[t] = n)),
      (u = [n, i]),
      _f(u),
      (n = u[0]),
      (i = u[1]),
      (h = n.match($r) || []),
      (M = i.match($r) || []),
      M.length)
    ) {
      for (; (d = $r.exec(i)); )
        (_ = d[0]),
          (S = i.substring(l, d.index)),
          g
            ? (g = (g + 1) % 5)
            : (S.substr(-5) === "rgba(" || S.substr(-5) === "hsla(") && (g = 1),
          _ !== (m = h[c++] || "") &&
            ((p = parseFloat(m) || 0),
            (y = m.substr((p + "").length)),
            _.charAt(1) === "=" && (_ = ts(p, _) + y),
            (f = parseFloat(_)),
            (x = _.substr((f + "").length)),
            (l = $r.lastIndex - x.length),
            x ||
              ((x = x || Tn.units[t] || y),
              l === i.length && ((i += x), (o.e += x))),
            y !== x && (p = Hi(e, t, m, x) || 0),
            (o._pt = {
              _next: o._pt,
              p: S || c === 1 ? S : ",",
              s: p,
              c: f - p,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      o.c = l < i.length ? i.substring(l, i.length) : "";
    } else o.r = t === "display" && i === "none" ? Pf : Cf;
    return Wh.test(i) && (o.e = 0), (this._pt = o), o;
  },
  Kc = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Zp = function (e) {
    var t = e.split(" "),
      n = t[0],
      i = t[1] || "50%";
    return (
      (n === "top" || n === "bottom" || i === "left" || i === "right") &&
        ((e = n), (n = i), (i = e)),
      (t[0] = Kc[n] || n),
      (t[1] = Kc[i] || i),
      t.join(" ")
    );
  },
  Jp = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        i = n.style,
        s = t.u,
        a = n._gsap,
        o,
        l,
        c;
      if (s === "all" || s === !0) (i.cssText = ""), (l = 1);
      else
        for (s = s.split(","), c = s.length; --c > -1; )
          (o = s[c]),
            Ti[o] && ((l = 1), (o = o === "transformOrigin" ? $n : _t)),
            Qs(n, o);
      l &&
        (Qs(n, _t),
        a &&
          (a.svg && n.removeAttribute("transform"),
          to(n, 1),
          (a.uncache = 1),
          Lf(i)));
    }
  },
  ha = {
    clearProps: function (e, t, n, i, s) {
      if (s.data !== "isFromStart") {
        var a = (e._pt = new cn(e._pt, t, n, 0, 0, Jp));
        return (a.u = i), (a.pr = -10), (a.tween = s), e._props.push(n), 1;
      }
    },
  },
  eo = [1, 0, 0, 1, 0, 0],
  Nf = {},
  Ff = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  $c = function (e) {
    var t = ri(e, _t);
    return Ff(t) ? eo : t.substr(7).match(Vh).map(yt);
  },
  Sc = function (e, t) {
    var n = e._gsap || lr(e),
      i = e.style,
      s = $c(e),
      a,
      o,
      l,
      c;
    return n.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? eo : s)
      : (s === eo &&
          !e.offsetParent &&
          e !== ns &&
          !n.svg &&
          ((l = i.display),
          (i.display = "block"),
          (a = e.parentNode),
          (!a || !e.offsetParent) &&
            ((c = 1), (o = e.nextElementSibling), ns.appendChild(e)),
          (s = $c(e)),
          l ? (i.display = l) : Qs(e, "display"),
          c &&
            (o
              ? a.insertBefore(e, o)
              : a
              ? a.appendChild(e)
              : ns.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  Fl = function (e, t, n, i, s, a) {
    var o = e._gsap,
      l = s || Sc(e, !0),
      c = o.xOrigin || 0,
      u = o.yOrigin || 0,
      d = o.xOffset || 0,
      h = o.yOffset || 0,
      p = l[0],
      g = l[1],
      m = l[2],
      _ = l[3],
      f = l[4],
      S = l[5],
      x = t.split(" "),
      y = parseFloat(x[0]) || 0,
      M = parseFloat(x[1]) || 0,
      E,
      w,
      P,
      v;
    n
      ? l !== eo &&
        (w = p * _ - g * m) &&
        ((P = y * (_ / w) + M * (-m / w) + (m * S - _ * f) / w),
        (v = y * (-g / w) + M * (p / w) - (p * S - g * f) / w),
        (y = P),
        (M = v))
      : ((E = If(e)),
        (y = E.x + (~x[0].indexOf("%") ? (y / 100) * E.width : y)),
        (M = E.y + (~(x[1] || x[0]).indexOf("%") ? (M / 100) * E.height : M))),
      i || (i !== !1 && o.smooth)
        ? ((f = y - c),
          (S = M - u),
          (o.xOffset = d + (f * p + S * m) - f),
          (o.yOffset = h + (f * g + S * _) - S))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = y),
      (o.yOrigin = M),
      (o.smooth = !!i),
      (o.origin = t),
      (o.originIsAbsolute = !!n),
      (e.style[$n] = "0px 0px"),
      a &&
        (Ui(a, o, "xOrigin", c, y),
        Ui(a, o, "yOrigin", u, M),
        Ui(a, o, "xOffset", d, o.xOffset),
        Ui(a, o, "yOffset", h, o.yOffset)),
      e.setAttribute("data-svg-origin", y + " " + M);
  },
  to = function (e, t) {
    var n = e._gsap || new Mf(e);
    if ("x" in n && !t && !n.uncache) return n;
    var i = e.style,
      s = n.scaleX < 0,
      a = "px",
      o = "deg",
      l = getComputedStyle(e),
      c = ri(e, $n) || "0",
      u,
      d,
      h,
      p,
      g,
      m,
      _,
      f,
      S,
      x,
      y,
      M,
      E,
      w,
      P,
      v,
      T,
      G,
      O,
      I,
      F,
      k,
      K,
      H,
      W,
      Q,
      C,
      fe,
      se,
      Y,
      J,
      ae;
    return (
      (u = d = h = m = _ = f = S = x = y = 0),
      (p = g = 1),
      (n.svg = !!(e.getCTM && Of(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[_t] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[_t] !== "none" ? l[_t] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (w = Sc(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((W = e.getBBox()),
            (c = n.xOrigin - W.x + "px " + (n.yOrigin - W.y) + "px"),
            (H = ""))
          : (H = !t && e.getAttribute("data-svg-origin")),
        Fl(e, H || c, !!H || n.originIsAbsolute, n.smooth !== !1, w)),
      (M = n.xOrigin || 0),
      (E = n.yOrigin || 0),
      w !== eo &&
        ((G = w[0]),
        (O = w[1]),
        (I = w[2]),
        (F = w[3]),
        (u = k = w[4]),
        (d = K = w[5]),
        w.length === 6
          ? ((p = Math.sqrt(G * G + O * O)),
            (g = Math.sqrt(F * F + I * I)),
            (m = G || O ? wr(O, G) * Qi : 0),
            (S = I || F ? wr(I, F) * Qi + m : 0),
            S && (g *= Math.abs(Math.cos(S * is))),
            n.svg && ((u -= M - (M * G + E * I)), (d -= E - (M * O + E * F))))
          : ((ae = w[6]),
            (Y = w[7]),
            (C = w[8]),
            (fe = w[9]),
            (se = w[10]),
            (J = w[11]),
            (u = w[12]),
            (d = w[13]),
            (h = w[14]),
            (P = wr(ae, se)),
            (_ = P * Qi),
            P &&
              ((v = Math.cos(-P)),
              (T = Math.sin(-P)),
              (H = k * v + C * T),
              (W = K * v + fe * T),
              (Q = ae * v + se * T),
              (C = k * -T + C * v),
              (fe = K * -T + fe * v),
              (se = ae * -T + se * v),
              (J = Y * -T + J * v),
              (k = H),
              (K = W),
              (ae = Q)),
            (P = wr(-I, se)),
            (f = P * Qi),
            P &&
              ((v = Math.cos(-P)),
              (T = Math.sin(-P)),
              (H = G * v - C * T),
              (W = O * v - fe * T),
              (Q = I * v - se * T),
              (J = F * T + J * v),
              (G = H),
              (O = W),
              (I = Q)),
            (P = wr(O, G)),
            (m = P * Qi),
            P &&
              ((v = Math.cos(P)),
              (T = Math.sin(P)),
              (H = G * v + O * T),
              (W = k * v + K * T),
              (O = O * v - G * T),
              (K = K * v - k * T),
              (G = H),
              (k = W)),
            _ &&
              Math.abs(_) + Math.abs(m) > 359.9 &&
              ((_ = m = 0), (f = 180 - f)),
            (p = yt(Math.sqrt(G * G + O * O + I * I))),
            (g = yt(Math.sqrt(K * K + ae * ae))),
            (P = wr(k, K)),
            (S = Math.abs(P) > 2e-4 ? P * Qi : 0),
            (y = J ? 1 / (J < 0 ? -J : J) : 0)),
        n.svg &&
          ((H = e.getAttribute("transform")),
          (n.forceCSS = e.setAttribute("transform", "") || !Ff(ri(e, _t))),
          H && e.setAttribute("transform", H))),
      Math.abs(S) > 90 &&
        Math.abs(S) < 270 &&
        (s
          ? ((p *= -1), (S += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
          : ((g *= -1), (S += S <= 0 ? 180 : -180))),
      (t = t || n.uncache),
      (n.x =
        u -
        ((n.xPercent =
          u &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        d -
        ((n.yPercent =
          d &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = h + a),
      (n.scaleX = yt(p)),
      (n.scaleY = yt(g)),
      (n.rotation = yt(m) + o),
      (n.rotationX = yt(_) + o),
      (n.rotationY = yt(f) + o),
      (n.skewX = S + o),
      (n.skewY = x + o),
      (n.transformPerspective = y + a),
      (n.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (i[$n] = fa(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = Tn.force3D),
      (n.renderTransform = n.svg ? em : Uf ? zf : Qp),
      (n.uncache = 0),
      n
    );
  },
  fa = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Fa = function (e, t, n) {
    var i = Xt(t);
    return yt(parseFloat(t) + parseFloat(Hi(e, "x", n + "px", i))) + i;
  },
  Qp = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      zf(e, t);
  },
  ji = "0deg",
  Ts = "0px",
  Ki = ") ",
  zf = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      s = n.yPercent,
      a = n.x,
      o = n.y,
      l = n.z,
      c = n.rotation,
      u = n.rotationY,
      d = n.rotationX,
      h = n.skewX,
      p = n.skewY,
      g = n.scaleX,
      m = n.scaleY,
      _ = n.transformPerspective,
      f = n.force3D,
      S = n.target,
      x = n.zOrigin,
      y = "",
      M = (f === "auto" && e && e !== 1) || f === !0;
    if (x && (d !== ji || u !== ji)) {
      var E = parseFloat(u) * is,
        w = Math.sin(E),
        P = Math.cos(E),
        v;
      (E = parseFloat(d) * is),
        (v = Math.cos(E)),
        (a = Fa(S, a, w * v * -x)),
        (o = Fa(S, o, -Math.sin(E) * -x)),
        (l = Fa(S, l, P * v * -x + x));
    }
    _ !== Ts && (y += "perspective(" + _ + Ki),
      (i || s) && (y += "translate(" + i + "%, " + s + "%) "),
      (M || a !== Ts || o !== Ts || l !== Ts) &&
        (y +=
          l !== Ts || M
            ? "translate3d(" + a + ", " + o + ", " + l + ") "
            : "translate(" + a + ", " + o + Ki),
      c !== ji && (y += "rotate(" + c + Ki),
      u !== ji && (y += "rotateY(" + u + Ki),
      d !== ji && (y += "rotateX(" + d + Ki),
      (h !== ji || p !== ji) && (y += "skew(" + h + ", " + p + Ki),
      (g !== 1 || m !== 1) && (y += "scale(" + g + ", " + m + Ki),
      (S.style[_t] = y || "translate(0, 0)");
  },
  em = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      s = n.yPercent,
      a = n.x,
      o = n.y,
      l = n.rotation,
      c = n.skewX,
      u = n.skewY,
      d = n.scaleX,
      h = n.scaleY,
      p = n.target,
      g = n.xOrigin,
      m = n.yOrigin,
      _ = n.xOffset,
      f = n.yOffset,
      S = n.forceCSS,
      x = parseFloat(a),
      y = parseFloat(o),
      M,
      E,
      w,
      P,
      v;
    (l = parseFloat(l)),
      (c = parseFloat(c)),
      (u = parseFloat(u)),
      u && ((u = parseFloat(u)), (c += u), (l += u)),
      l || c
        ? ((l *= is),
          (c *= is),
          (M = Math.cos(l) * d),
          (E = Math.sin(l) * d),
          (w = Math.sin(l - c) * -h),
          (P = Math.cos(l - c) * h),
          c &&
            ((u *= is),
            (v = Math.tan(c - u)),
            (v = Math.sqrt(1 + v * v)),
            (w *= v),
            (P *= v),
            u &&
              ((v = Math.tan(u)),
              (v = Math.sqrt(1 + v * v)),
              (M *= v),
              (E *= v))),
          (M = yt(M)),
          (E = yt(E)),
          (w = yt(w)),
          (P = yt(P)))
        : ((M = d), (P = h), (E = w = 0)),
      ((x && !~(a + "").indexOf("px")) || (y && !~(o + "").indexOf("px"))) &&
        ((x = Hi(p, "x", a, "px")), (y = Hi(p, "y", o, "px"))),
      (g || m || _ || f) &&
        ((x = yt(x + g - (g * M + m * w) + _)),
        (y = yt(y + m - (g * E + m * P) + f))),
      (i || s) &&
        ((v = p.getBBox()),
        (x = yt(x + (i / 100) * v.width)),
        (y = yt(y + (s / 100) * v.height))),
      (v =
        "matrix(" + M + "," + E + "," + w + "," + P + "," + x + "," + y + ")"),
      p.setAttribute("transform", v),
      S && (p.style[_t] = v);
  },
  tm = function (e, t, n, i, s) {
    var a = 360,
      o = Nt(s),
      l = parseFloat(s) * (o && ~s.indexOf("rad") ? Qi : 1),
      c = l - i,
      u = i + c + "deg",
      d,
      h;
    return (
      o &&
        ((d = s.split("_")[1]),
        d === "short" && ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -a)),
        d === "cw" && c < 0
          ? (c = ((c + a * Xc) % a) - ~~(c / a) * a)
          : d === "ccw" && c > 0 && (c = ((c - a * Xc) % a) - ~~(c / a) * a)),
      (e._pt = h = new cn(e._pt, t, n, i, c, zp)),
      (h.e = u),
      (h.u = "deg"),
      e._props.push(n),
      h
    );
  },
  Zc = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  nm = function (e, t, n) {
    var i = Zc({}, n._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      a = n.style,
      o,
      l,
      c,
      u,
      d,
      h,
      p,
      g;
    i.svg
      ? ((c = n.getAttribute("transform")),
        n.setAttribute("transform", ""),
        (a[_t] = t),
        (o = to(n, 1)),
        Qs(n, _t),
        n.setAttribute("transform", c))
      : ((c = getComputedStyle(n)[_t]),
        (a[_t] = t),
        (o = to(n, 1)),
        (a[_t] = c));
    for (l in Ti)
      (c = i[l]),
        (u = o[l]),
        c !== u &&
          s.indexOf(l) < 0 &&
          ((p = Xt(c)),
          (g = Xt(u)),
          (d = p !== g ? Hi(n, l, c, g) : parseFloat(c)),
          (h = parseFloat(u)),
          (e._pt = new cn(e._pt, o, l, d, h - d, Il)),
          (e._pt.u = g || 0),
          e._props.push(l));
    Zc(o, i);
  };
ln("padding,margin,Width,Radius", function (r, e) {
  var t = "Top",
    n = "Right",
    i = "Bottom",
    s = "Left",
    a = (e < 3 ? [t, n, i, s] : [t + s, t + n, i + n, i + s]).map(function (o) {
      return e < 2 ? r + o : "border" + o + r;
    });
  ha[e > 1 ? "border" + r : r] = function (o, l, c, u, d) {
    var h, p;
    if (arguments.length < 4)
      return (
        (h = a.map(function (g) {
          return vi(o, g, c);
        })),
        (p = h.join(" ")),
        p.split(h[0]).length === 5 ? h[0] : p
      );
    (h = (u + "").split(" ")),
      (p = {}),
      a.forEach(function (g, m) {
        return (p[g] = h[m] = h[m] || h[((m - 1) / 2) | 0]);
      }),
      o.init(l, p, d);
  };
});
var Bf = {
  name: "css",
  register: Nl,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, i, s) {
    var a = this._props,
      o = e.style,
      l = n.vars.startAt,
      c,
      u,
      d,
      h,
      p,
      g,
      m,
      _,
      f,
      S,
      x,
      y,
      M,
      E,
      w,
      P;
    vc || Nl(),
      (this.styles = this.styles || Df(e)),
      (P = this.styles.props),
      (this.tween = n);
    for (m in t)
      if (m !== "autoRound" && ((u = t[m]), !(xn[m] && Sf(m, t, n, i, e, s)))) {
        if (
          ((p = typeof u),
          (g = ha[m]),
          p === "function" && ((u = u.call(n, i, e, s)), (p = typeof u)),
          p === "string" && ~u.indexOf("random(") && (u = Zs(u)),
          g)
        )
          g(this, e, m, u, n) && (w = 1);
        else if (m.substr(0, 2) === "--")
          (c = (getComputedStyle(e).getPropertyValue(m) + "").trim()),
            (u += ""),
            (zi.lastIndex = 0),
            zi.test(c) || ((_ = Xt(c)), (f = Xt(u))),
            f ? _ !== f && (c = Hi(e, m, c, f) + f) : _ && (u += _),
            this.add(o, "setProperty", c, u, i, s, 0, 0, m),
            a.push(m),
            P.push(m, 0, o[m]);
        else if (p !== "undefined") {
          if (
            (l && m in l
              ? ((c = typeof l[m] == "function" ? l[m].call(n, i, e, s) : l[m]),
                Nt(c) && ~c.indexOf("random(") && (c = Zs(c)),
                Xt(c + "") || (c += Tn.units[m] || Xt(vi(e, m)) || ""),
                (c + "").charAt(1) === "=" && (c = vi(e, m)))
              : (c = vi(e, m)),
            (h = parseFloat(c)),
            (S = p === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
            S && (u = u.substr(2)),
            (d = parseFloat(u)),
            m in ni &&
              (m === "autoAlpha" &&
                (h === 1 && vi(e, "visibility") === "hidden" && d && (h = 0),
                P.push("visibility", 0, o.visibility),
                Ui(
                  this,
                  o,
                  "visibility",
                  h ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              m !== "scale" &&
                m !== "transform" &&
                ((m = ni[m]), ~m.indexOf(",") && (m = m.split(",")[0]))),
            (x = m in Ti),
            x)
          ) {
            if (
              (this.styles.save(m),
              y ||
                ((M = e._gsap),
                (M.renderTransform && !t.parseTransform) ||
                  to(e, t.parseTransform),
                (E = t.smoothOrigin !== !1 && M.smooth),
                (y = this._pt =
                  new cn(this._pt, o, _t, 0, 1, M.renderTransform, M, 0, -1)),
                (y.dep = 1)),
              m === "scale")
            )
              (this._pt = new cn(
                this._pt,
                M,
                "scaleY",
                M.scaleY,
                (S ? ts(M.scaleY, S + d) : d) - M.scaleY || 0,
                Il
              )),
                (this._pt.u = 0),
                a.push("scaleY", m),
                (m += "X");
            else if (m === "transformOrigin") {
              P.push($n, 0, o[$n]),
                (u = Zp(u)),
                M.svg
                  ? Fl(e, u, 0, E, 0, this)
                  : ((f = parseFloat(u.split(" ")[2]) || 0),
                    f !== M.zOrigin && Ui(this, M, "zOrigin", M.zOrigin, f),
                    Ui(this, o, m, fa(c), fa(u)));
              continue;
            } else if (m === "svgOrigin") {
              Fl(e, u, 1, E, 0, this);
              continue;
            } else if (m in Nf) {
              tm(this, M, m, h, S ? ts(h, S + u) : u);
              continue;
            } else if (m === "smoothOrigin") {
              Ui(this, M, "smooth", M.smooth, u);
              continue;
            } else if (m === "force3D") {
              M[m] = u;
              continue;
            } else if (m === "transform") {
              nm(this, u, e);
              continue;
            }
          } else m in o || (m = ms(m) || m);
          if (x || ((d || d === 0) && (h || h === 0) && !Fp.test(u) && m in o))
            (_ = (c + "").substr((h + "").length)),
              d || (d = 0),
              (f = Xt(u) || (m in Tn.units ? Tn.units[m] : _)),
              _ !== f && (h = Hi(e, m, c, f)),
              (this._pt = new cn(
                this._pt,
                x ? M : o,
                m,
                h,
                (S ? ts(h, S + d) : d) - h,
                !x && (f === "px" || m === "zIndex") && t.autoRound !== !1
                  ? kp
                  : Il
              )),
              (this._pt.u = f || 0),
              _ !== f && f !== "%" && ((this._pt.b = c), (this._pt.r = Bp));
          else if (m in o) $p.call(this, e, m, c, S ? S + u : u);
          else if (m in e) this.add(e, m, c || e[m], S ? S + u : u, i, s);
          else if (m !== "parseTransform") {
            cc(m, u);
            continue;
          }
          x || (m in o ? P.push(m, 0, o[m]) : P.push(m, 1, c || e[m])),
            a.push(m);
        }
      }
    w && Af(this);
  },
  render: function (e, t) {
    if (t.tween._time || !xc())
      for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
    else t.styles.revert();
  },
  get: vi,
  aliases: ni,
  getSetter: function (e, t, n) {
    var i = ni[t];
    return (
      i && i.indexOf(",") < 0 && (t = i),
      t in Ti && t !== $n && (e._gsap.x || vi(e, "x"))
        ? n && Wc === n
          ? t === "scale"
            ? Wp
            : Vp
          : (Wc = n || {}) && (t === "scale" ? Xp : qp)
        : e.style && !oc(e.style[t])
        ? Gp
        : ~t.indexOf("-")
        ? Hp
        : _c(e, t)
    );
  },
  core: { _removeProperty: Qs, _getMatrix: Sc },
};
fn.utils.checkPrefix = ms;
fn.core.getStyleSaver = Df;
(function (r, e, t, n) {
  var i = ln(r + "," + e + "," + t, function (s) {
    Ti[s] = 1;
  });
  ln(e, function (s) {
    (Tn.units[s] = "deg"), (Nf[s] = 1);
  }),
    (ni[i[13]] = r + "," + e),
    ln(n, function (s) {
      var a = s.split(":");
      ni[a[1]] = i[a[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
ln(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (r) {
    Tn.units[r] = "px";
  }
);
fn.registerPlugin(Bf);
var at = fn.registerPlugin(Bf) || fn;
at.core.Tween;
function Jc(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(r, n.key, n);
  }
}
function im(r, e, t) {
  return e && Jc(r.prototype, e), t && Jc(r, t), r;
}
/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Bt,
  zl,
  En,
  Ii,
  Oi,
  rs,
  kf,
  er,
  Gs,
  Gf,
  Mi,
  Hn,
  Hf,
  Vf = function () {
    return (
      Bt ||
      (typeof window < "u" && (Bt = window.gsap) && Bt.registerPlugin && Bt)
    );
  },
  Wf = 1,
  Jr = [],
  $e = [],
  si = [],
  Hs = Date.now,
  Bl = function (e, t) {
    return t;
  },
  rm = function () {
    var e = Gs.core,
      t = e.bridge || {},
      n = e._scrollers,
      i = e._proxies;
    n.push.apply(n, $e),
      i.push.apply(i, si),
      ($e = n),
      (si = i),
      (Bl = function (a, o) {
        return t[a](o);
      });
  },
  Bi = function (e, t) {
    return ~si.indexOf(e) && si[si.indexOf(e) + 1][t];
  },
  Vs = function (e) {
    return !!~Gf.indexOf(e);
  },
  rn = function (e, t, n, i, s) {
    return e.addEventListener(t, n, { passive: !i, capture: !!s });
  },
  $t = function (e, t, n, i) {
    return e.removeEventListener(t, n, !!i);
  },
  fo = "scrollLeft",
  po = "scrollTop",
  kl = function () {
    return (Mi && Mi.isPressed) || $e.cache++;
  },
  da = function (e, t) {
    var n = function i(s) {
      if (s || s === 0) {
        Wf && (En.history.scrollRestoration = "manual");
        var a = Mi && Mi.isPressed;
        (s = i.v = Math.round(s) || (Mi && Mi.iOS ? 1 : 0)),
          e(s),
          (i.cacheID = $e.cache),
          a && Bl("ss", s);
      } else
        (t || $e.cache !== i.cacheID || Bl("ref")) &&
          ((i.cacheID = $e.cache), (i.v = e()));
      return i.v + i.offset;
    };
    return (n.offset = 0), e && n;
  },
  tn = {
    s: fo,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: da(function (r) {
      return arguments.length
        ? En.scrollTo(r, Rt.sc())
        : En.pageXOffset || Ii[fo] || Oi[fo] || rs[fo] || 0;
    }),
  },
  Rt = {
    s: po,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: tn,
    sc: da(function (r) {
      return arguments.length
        ? En.scrollTo(tn.sc(), r)
        : En.pageYOffset || Ii[po] || Oi[po] || rs[po] || 0;
    }),
  },
  sn = function (e) {
    return (
      Bt.utils.toArray(e)[0] ||
      (typeof e == "string" && Bt.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  Vi = function (e, t) {
    var n = t.s,
      i = t.sc;
    Vs(e) && (e = Ii.scrollingElement || Oi);
    var s = $e.indexOf(e),
      a = i === Rt.sc ? 1 : 2;
    !~s && (s = $e.push(e) - 1), $e[s + a] || e.addEventListener("scroll", kl);
    var o = $e[s + a],
      l =
        o ||
        ($e[s + a] =
          da(Bi(e, n), !0) ||
          (Vs(e)
            ? i
            : da(function (c) {
                return arguments.length ? (e[n] = c) : e[n];
              })));
    return (
      (l.target = e),
      o || (l.smooth = Bt.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  Gl = function (e, t, n) {
    var i = e,
      s = e,
      a = Hs(),
      o = a,
      l = t || 50,
      c = Math.max(500, l * 3),
      u = function (g, m) {
        var _ = Hs();
        m || _ - a > l
          ? ((s = i), (i = g), (o = a), (a = _))
          : n
          ? (i += g)
          : (i = s + ((g - s) / (_ - o)) * (a - o));
      },
      d = function () {
        (s = i = n ? 0 : i), (o = a = 0);
      },
      h = function (g) {
        var m = o,
          _ = s,
          f = Hs();
        return (
          (g || g === 0) && g !== i && u(g),
          a === o || f - o > c
            ? 0
            : ((i + (n ? _ : -_)) / ((n ? f : a) - m)) * 1e3
        );
      };
    return { update: u, reset: d, getVelocity: h };
  },
  bs = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Qc = function (e) {
    var t = Math.max.apply(Math, e),
      n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n;
  },
  Xf = function () {
    (Gs = Bt.core.globals().ScrollTrigger), Gs && Gs.core && rm();
  },
  qf = function (e) {
    return (
      (Bt = e || Vf()),
      Bt &&
        typeof document < "u" &&
        document.body &&
        ((En = window),
        (Ii = document),
        (Oi = Ii.documentElement),
        (rs = Ii.body),
        (Gf = [En, Ii, Oi, rs]),
        Bt.utils.clamp,
        (Hf = Bt.core.context || function () {}),
        (er = "onpointerenter" in rs ? "pointer" : "mouse"),
        (kf = wt.isTouch =
          En.matchMedia &&
          En.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in En ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Hn = wt.eventTypes =
          (
            "ontouchstart" in Oi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Oi
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Wf = 0);
        }, 500),
        Xf(),
        (zl = 1)),
      zl
    );
  };
tn.op = Rt;
$e.cache = 0;
var wt = (function () {
  function r(t) {
    this.init(t);
  }
  var e = r.prototype;
  return (
    (e.init = function (n) {
      zl || qf(Bt) || console.warn("Please gsap.registerPlugin(Observer)"),
        Gs || Xf();
      var i = n.tolerance,
        s = n.dragMinimum,
        a = n.type,
        o = n.target,
        l = n.lineHeight,
        c = n.debounce,
        u = n.preventDefault,
        d = n.onStop,
        h = n.onStopDelay,
        p = n.ignore,
        g = n.wheelSpeed,
        m = n.event,
        _ = n.onDragStart,
        f = n.onDragEnd,
        S = n.onDrag,
        x = n.onPress,
        y = n.onRelease,
        M = n.onRight,
        E = n.onLeft,
        w = n.onUp,
        P = n.onDown,
        v = n.onChangeX,
        T = n.onChangeY,
        G = n.onChange,
        O = n.onToggleX,
        I = n.onToggleY,
        F = n.onHover,
        k = n.onHoverEnd,
        K = n.onMove,
        H = n.ignoreCheck,
        W = n.isNormalizer,
        Q = n.onGestureStart,
        C = n.onGestureEnd,
        fe = n.onWheel,
        se = n.onEnable,
        Y = n.onDisable,
        J = n.onClick,
        ae = n.scrollSpeed,
        oe = n.capture,
        D = n.allowClicks,
        Ce = n.lockAxis,
        Ie = n.onLockAxis;
      (this.target = o = sn(o) || Oi),
        (this.vars = n),
        p && (p = Bt.utils.toArray(p)),
        (i = i || 1e-9),
        (s = s || 0),
        (g = g || 1),
        (ae = ae || 1),
        (a = a || "wheel,touch,pointer"),
        (c = c !== !1),
        l || (l = parseFloat(En.getComputedStyle(rs).lineHeight) || 22);
      var le,
        we,
        xe,
        _e,
        Oe,
        it,
        qe,
        q = this,
        st = 0,
        Le = 0,
        Je = Vi(o, tn),
        ft = Vi(o, Rt),
        R = Je(),
        b = ft(),
        $ =
          ~a.indexOf("touch") &&
          !~a.indexOf("pointer") &&
          Hn[0] === "pointerdown",
        ie = Vs(o),
        te = o.ownerDocument || Ii,
        ce = [0, 0, 0],
        L = [0, 0, 0],
        ee = 0,
        V = function () {
          return (ee = Hs());
        },
        ue = function (ge, re) {
          return (
            ((q.event = ge) && p && ~p.indexOf(ge.target)) ||
            (re && $ && ge.pointerType !== "touch") ||
            (H && H(ge, re))
          );
        },
        ve = function () {
          q._vx.reset(), q._vy.reset(), we.pause(), d && d(q);
        },
        Te = function () {
          var ge = (q.deltaX = Qc(ce)),
            re = (q.deltaY = Qc(L)),
            Ae = Math.abs(ge) >= i,
            Ne = Math.abs(re) >= i;
          G && (Ae || Ne) && G(q, ge, re, ce, L),
            Ae &&
              (M && q.deltaX > 0 && M(q),
              E && q.deltaX < 0 && E(q),
              v && v(q),
              O && q.deltaX < 0 != st < 0 && O(q),
              (st = q.deltaX),
              (ce[0] = ce[1] = ce[2] = 0)),
            Ne &&
              (P && q.deltaY > 0 && P(q),
              w && q.deltaY < 0 && w(q),
              T && T(q),
              I && q.deltaY < 0 != Le < 0 && I(q),
              (Le = q.deltaY),
              (L[0] = L[1] = L[2] = 0)),
            (_e || xe) && (K && K(q), xe && (S(q), (xe = !1)), (_e = !1)),
            it && !(it = !1) && Ie && Ie(q),
            Oe && (fe(q), (Oe = !1)),
            (le = 0);
        },
        me = function (ge, re, Ae) {
          (ce[Ae] += ge),
            (L[Ae] += re),
            q._vx.update(ge),
            q._vy.update(re),
            c ? le || (le = requestAnimationFrame(Te)) : Te();
        },
        ye = function (ge, re) {
          Ce &&
            !qe &&
            ((q.axis = qe = Math.abs(ge) > Math.abs(re) ? "x" : "y"),
            (it = !0)),
            qe !== "y" && ((ce[2] += ge), q._vx.update(ge, !0)),
            qe !== "x" && ((L[2] += re), q._vy.update(re, !0)),
            c ? le || (le = requestAnimationFrame(Te)) : Te();
        },
        Fe = function (ge) {
          if (!ue(ge, 1)) {
            ge = bs(ge, u);
            var re = ge.clientX,
              Ae = ge.clientY,
              Ne = re - q.x,
              Ve = Ae - q.y,
              Et = q.isDragging;
            (q.x = re),
              (q.y = Ae),
              (Et ||
                Math.abs(q.startX - re) >= s ||
                Math.abs(q.startY - Ae) >= s) &&
                (S && (xe = !0),
                Et || (q.isDragging = !0),
                ye(Ne, Ve),
                Et || (_ && _(q)));
          }
        },
        pe = (q.onPress = function (ze) {
          ue(ze, 1) ||
            (ze && ze.button) ||
            ((q.axis = qe = null),
            we.pause(),
            (q.isPressed = !0),
            (ze = bs(ze)),
            (st = Le = 0),
            (q.startX = q.x = ze.clientX),
            (q.startY = q.y = ze.clientY),
            q._vx.reset(),
            q._vy.reset(),
            rn(W ? o : te, Hn[1], Fe, u, !0),
            (q.deltaX = q.deltaY = 0),
            x && x(q));
        }),
        ot = (q.onRelease = function (ze) {
          if (!ue(ze, 1)) {
            $t(W ? o : te, Hn[1], Fe, !0);
            var ge = !isNaN(q.y - q.startY),
              re =
                q.isDragging &&
                (Math.abs(q.x - q.startX) > 3 || Math.abs(q.y - q.startY) > 3),
              Ae = bs(ze);
            !re &&
              ge &&
              (q._vx.reset(),
              q._vy.reset(),
              u &&
                D &&
                Bt.delayedCall(0.08, function () {
                  if (Hs() - ee > 300 && !ze.defaultPrevented) {
                    if (ze.target.click) ze.target.click();
                    else if (te.createEvent) {
                      var Ne = te.createEvent("MouseEvents");
                      Ne.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        En,
                        1,
                        Ae.screenX,
                        Ae.screenY,
                        Ae.clientX,
                        Ae.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        ze.target.dispatchEvent(Ne);
                    }
                  }
                })),
              (q.isDragging = q.isGesturing = q.isPressed = !1),
              d && !W && we.restart(!0),
              f && re && f(q),
              y && y(q, re);
          }
        }),
        U = function (ge) {
          return (
            ge.touches &&
            ge.touches.length > 1 &&
            (q.isGesturing = !0) &&
            Q(ge, q.isDragging)
          );
        },
        j = function () {
          return (q.isGesturing = !1) || C(q);
        },
        ne = function (ge) {
          if (!ue(ge)) {
            var re = Je(),
              Ae = ft();
            me((re - R) * ae, (Ae - b) * ae, 1),
              (R = re),
              (b = Ae),
              d && we.restart(!0);
          }
        },
        he = function (ge) {
          if (!ue(ge)) {
            (ge = bs(ge, u)), fe && (Oe = !0);
            var re =
              (ge.deltaMode === 1
                ? l
                : ge.deltaMode === 2
                ? En.innerHeight
                : 1) * g;
            me(ge.deltaX * re, ge.deltaY * re, 0), d && !W && we.restart(!0);
          }
        },
        be = function (ge) {
          if (!ue(ge)) {
            var re = ge.clientX,
              Ae = ge.clientY,
              Ne = re - q.x,
              Ve = Ae - q.y;
            (q.x = re), (q.y = Ae), (_e = !0), (Ne || Ve) && ye(Ne, Ve);
          }
        },
        tt = function (ge) {
          (q.event = ge), F(q);
        },
        Ke = function (ge) {
          (q.event = ge), k(q);
        },
        gt = function (ge) {
          return ue(ge) || (bs(ge, u) && J(q));
        };
      (we = q._dc = Bt.delayedCall(h || 0.25, ve).pause()),
        (q.deltaX = q.deltaY = 0),
        (q._vx = Gl(0, 50, !0)),
        (q._vy = Gl(0, 50, !0)),
        (q.scrollX = Je),
        (q.scrollY = ft),
        (q.isDragging = q.isGesturing = q.isPressed = !1),
        Hf(this),
        (q.enable = function (ze) {
          return (
            q.isEnabled ||
              (rn(ie ? te : o, "scroll", kl),
              a.indexOf("scroll") >= 0 && rn(ie ? te : o, "scroll", ne, u, oe),
              a.indexOf("wheel") >= 0 && rn(o, "wheel", he, u, oe),
              ((a.indexOf("touch") >= 0 && kf) || a.indexOf("pointer") >= 0) &&
                (rn(o, Hn[0], pe, u, oe),
                rn(te, Hn[2], ot),
                rn(te, Hn[3], ot),
                D && rn(o, "click", V, !1, !0),
                J && rn(o, "click", gt),
                Q && rn(te, "gesturestart", U),
                C && rn(te, "gestureend", j),
                F && rn(o, er + "enter", tt),
                k && rn(o, er + "leave", Ke),
                K && rn(o, er + "move", be)),
              (q.isEnabled = !0),
              ze && ze.type && pe(ze),
              se && se(q)),
            q
          );
        }),
        (q.disable = function () {
          q.isEnabled &&
            (Jr.filter(function (ze) {
              return ze !== q && Vs(ze.target);
            }).length || $t(ie ? te : o, "scroll", kl),
            q.isPressed &&
              (q._vx.reset(), q._vy.reset(), $t(W ? o : te, Hn[1], Fe, !0)),
            $t(ie ? te : o, "scroll", ne, oe),
            $t(o, "wheel", he, oe),
            $t(o, Hn[0], pe, oe),
            $t(te, Hn[2], ot),
            $t(te, Hn[3], ot),
            $t(o, "click", V, !0),
            $t(o, "click", gt),
            $t(te, "gesturestart", U),
            $t(te, "gestureend", j),
            $t(o, er + "enter", tt),
            $t(o, er + "leave", Ke),
            $t(o, er + "move", be),
            (q.isEnabled = q.isPressed = q.isDragging = !1),
            Y && Y(q));
        }),
        (q.kill = q.revert =
          function () {
            q.disable();
            var ze = Jr.indexOf(q);
            ze >= 0 && Jr.splice(ze, 1), Mi === q && (Mi = 0);
          }),
        Jr.push(q),
        W && Vs(o) && (Mi = q),
        q.enable(m);
    }),
    im(r, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    r
  );
})();
wt.version = "3.11.5";
wt.create = function (r) {
  return new wt(r);
};
wt.register = qf;
wt.getAll = function () {
  return Jr.slice();
};
wt.getById = function (r) {
  return Jr.filter(function (e) {
    return e.vars.id === r;
  })[0];
};
Vf() && Bt.registerPlugin(wt);
/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Pe,
  Yr,
  Ze,
  pt,
  Wn,
  vt,
  Yf,
  pa,
  ma,
  Qr,
  Zo,
  mo,
  Vt,
  Sa,
  Hl,
  Jt,
  eu,
  tu,
  jr,
  jf,
  za,
  Kf,
  gn,
  $f,
  Zf,
  Jf,
  Pi,
  Vl,
  yc,
  Ba,
  _o = 1,
  Qt = Date.now,
  ka = Qt(),
  On = 0,
  Us = 0,
  sm = function r() {
    return Us && requestAnimationFrame(r);
  },
  nu = function () {
    return (Sa = 1);
  },
  iu = function () {
    return (Sa = 0);
  },
  Qn = function (e) {
    return e;
  },
  Is = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Qf = function () {
    return typeof window < "u";
  },
  ed = function () {
    return Pe || (Qf() && (Pe = window.gsap) && Pe.registerPlugin && Pe);
  },
  vr = function (e) {
    return !!~Yf.indexOf(e);
  },
  td = function (e) {
    return (
      Bi(e, "getBoundingClientRect") ||
      (vr(e)
        ? function () {
            return (ia.width = Ze.innerWidth), (ia.height = Ze.innerHeight), ia;
          }
        : function () {
            return xi(e);
          })
    );
  },
  om = function (e, t, n) {
    var i = n.d,
      s = n.d2,
      a = n.a;
    return (a = Bi(e, "getBoundingClientRect"))
      ? function () {
          return a()[i];
        }
      : function () {
          return (t ? Ze["inner" + s] : e["client" + s]) || 0;
        };
  },
  am = function (e, t) {
    return !t || ~si.indexOf(e)
      ? td(e)
      : function () {
          return ia;
        };
  },
  Ni = function (e, t) {
    var n = t.s,
      i = t.d2,
      s = t.d,
      a = t.a;
    return Math.max(
      0,
      (n = "scroll" + i) && (a = Bi(e, n))
        ? a() - td(e)()[s]
        : vr(e)
        ? (Wn[n] || vt[n]) -
          (Ze["inner" + i] || Wn["client" + i] || vt["client" + i])
        : e[n] - e["offset" + i]
    );
  },
  go = function (e, t) {
    for (var n = 0; n < jr.length; n += 3)
      (!t || ~t.indexOf(jr[n + 1])) && e(jr[n], jr[n + 1], jr[n + 2]);
  },
  Vn = function (e) {
    return typeof e == "string";
  },
  nn = function (e) {
    return typeof e == "function";
  },
  Os = function (e) {
    return typeof e == "number";
  },
  Jo = function (e) {
    return typeof e == "object";
  },
  ws = function (e, t, n) {
    return e && e.progress(t ? 0 : 1) && n && e.pause();
  },
  Ga = function (e, t) {
    if (e.enabled) {
      var n = t(e);
      n && n.totalTime && (e.callbackAnimation = n);
    }
  },
  Ar = Math.abs,
  nd = "left",
  id = "top",
  Ec = "right",
  Tc = "bottom",
  hr = "width",
  fr = "height",
  Ws = "Right",
  Xs = "Left",
  qs = "Top",
  Ys = "Bottom",
  St = "padding",
  Pn = "margin",
  _s = "Width",
  bc = "Height",
  Ft = "px",
  qn = function (e) {
    return Ze.getComputedStyle(e);
  },
  lm = function (e) {
    var t = qn(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  ru = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  xi = function (e, t) {
    var n =
        t &&
        qn(e)[Hl] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        Pe.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      i = e.getBoundingClientRect();
    return n && n.progress(0).kill(), i;
  },
  Wl = function (e, t) {
    var n = t.d2;
    return e["offset" + n] || e["client" + n] || 0;
  },
  rd = function (e) {
    var t = [],
      n = e.labels,
      i = e.duration(),
      s;
    for (s in n) t.push(n[s] / i);
    return t;
  },
  cm = function (e) {
    return function (t) {
      return Pe.utils.snap(rd(e), t);
    };
  },
  wc = function (e) {
    var t = Pe.utils.snap(e),
      n =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, s) {
          return i - s;
        });
    return n
      ? function (i, s, a) {
          a === void 0 && (a = 0.001);
          var o;
          if (!s) return t(i);
          if (s > 0) {
            for (i -= a, o = 0; o < n.length; o++) if (n[o] >= i) return n[o];
            return n[o - 1];
          } else for (o = n.length, i += a; o--; ) if (n[o] <= i) return n[o];
          return n[0];
        }
      : function (i, s, a) {
          a === void 0 && (a = 0.001);
          var o = t(i);
          return !s || Math.abs(o - i) < a || o - i < 0 == s < 0
            ? o
            : t(s < 0 ? i - e : i + e);
        };
  },
  um = function (e) {
    return function (t, n) {
      return wc(rd(e))(t, n.direction);
    };
  },
  vo = function (e, t, n, i) {
    return n.split(",").forEach(function (s) {
      return e(t, s, i);
    });
  },
  Ot = function (e, t, n, i, s) {
    return e.addEventListener(t, n, { passive: !i, capture: !!s });
  },
  It = function (e, t, n, i) {
    return e.removeEventListener(t, n, !!i);
  },
  xo = function (e, t, n) {
    (n = n && n.wheelHandler), n && (e(t, "wheel", n), e(t, "touchmove", n));
  },
  su = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Mo = { toggleActions: "play", anticipatePin: 0 },
  _a = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Qo = function (e, t) {
    if (Vn(e)) {
      var n = e.indexOf("="),
        i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
      ~n && (e.indexOf("%") > n && (i *= t / 100), (e = e.substr(0, n - 1))),
        (e =
          i +
          (e in _a
            ? _a[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  So = function (e, t, n, i, s, a, o, l) {
    var c = s.startColor,
      u = s.endColor,
      d = s.fontSize,
      h = s.indent,
      p = s.fontWeight,
      g = pt.createElement("div"),
      m = vr(n) || Bi(n, "pinType") === "fixed",
      _ = e.indexOf("scroller") !== -1,
      f = m ? vt : n,
      S = e.indexOf("start") !== -1,
      x = S ? c : u,
      y =
        "border-color:" +
        x +
        ";font-size:" +
        d +
        ";color:" +
        x +
        ";font-weight:" +
        p +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((_ || l) && m ? "fixed;" : "absolute;")),
      (_ || l || !m) &&
        (y += (i === Rt ? Ec : Tc) + ":" + (a + parseFloat(h)) + "px;"),
      o &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          o.offsetWidth +
          "px;"),
      (g._isStart = S),
      g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (g.style.cssText = y),
      (g.innerText = t || t === 0 ? e + "-" + t : e),
      f.children[0] ? f.insertBefore(g, f.children[0]) : f.appendChild(g),
      (g._offset = g["offset" + i.op.d2]),
      ea(g, 0, i, S),
      g
    );
  },
  ea = function (e, t, n, i) {
    var s = { display: "block" },
      a = n[i ? "os2" : "p2"],
      o = n[i ? "p2" : "os2"];
    (e._isFlipped = i),
      (s[n.a + "Percent"] = i ? -100 : 0),
      (s[n.a] = i ? "1px" : 0),
      (s["border" + a + _s] = 1),
      (s["border" + o + _s] = 0),
      (s[n.p] = t + "px"),
      Pe.set(e, s);
  },
  je = [],
  Xl = {},
  no,
  ou = function () {
    return Qt() - On > 34 && (no || (no = requestAnimationFrame(Si)));
  },
  Rr = function () {
    (!gn || !gn.isPressed || gn.startX > vt.clientWidth) &&
      ($e.cache++,
      gn ? no || (no = requestAnimationFrame(Si)) : Si(),
      On || Mr("scrollStart"),
      (On = Qt()));
  },
  Ha = function () {
    (Jf = Ze.innerWidth), (Zf = Ze.innerHeight);
  },
  Ns = function () {
    $e.cache++,
      !Vt &&
        !Kf &&
        !pt.fullscreenElement &&
        !pt.webkitFullscreenElement &&
        (!$f ||
          Jf !== Ze.innerWidth ||
          Math.abs(Ze.innerHeight - Zf) > Ze.innerHeight * 0.25) &&
        pa.restart(!0);
  },
  xr = {},
  hm = [],
  sd = function r() {
    return It(Re, "scrollEnd", r) || sr(!0);
  },
  Mr = function (e) {
    return (
      (xr[e] &&
        xr[e].map(function (t) {
          return t();
        })) ||
      hm
    );
  },
  vn = [],
  od = function (e) {
    for (var t = 0; t < vn.length; t += 5)
      (!e || (vn[t + 4] && vn[t + 4].query === e)) &&
        ((vn[t].style.cssText = vn[t + 1]),
        vn[t].getBBox && vn[t].setAttribute("transform", vn[t + 2] || ""),
        (vn[t + 3].uncache = 1));
  },
  Ac = function (e, t) {
    var n;
    for (Jt = 0; Jt < je.length; Jt++)
      (n = je[Jt]),
        n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
    t && od(t), t || Mr("revert");
  },
  ad = function (e, t) {
    $e.cache++,
      (t || !Mn) &&
        $e.forEach(function (n) {
          return nn(n) && n.cacheID++ && (n.rec = 0);
        }),
      Vn(e) && (Ze.history.scrollRestoration = yc = e);
  },
  Mn,
  dr = 0,
  au,
  fm = function () {
    if (au !== dr) {
      var e = (au = dr);
      requestAnimationFrame(function () {
        return e === dr && sr(!0);
      });
    }
  },
  sr = function (e, t) {
    if (On && !e) {
      Ot(Re, "scrollEnd", sd);
      return;
    }
    (Mn = Re.isRefreshing = !0),
      $e.forEach(function (i) {
        return nn(i) && i.cacheID++ && (i.rec = i());
      });
    var n = Mr("refreshInit");
    jf && Re.sort(),
      t || Ac(),
      $e.forEach(function (i) {
        nn(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      je.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      je.forEach(function (i, s) {
        if (i._subPinOffset && i.pin) {
          var a = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = i.pin[a];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[a] - o), i.refresh();
        }
      }),
      je.forEach(function (i) {
        return (
          i.vars.end === "max" &&
          i.setPositions(i.start, Math.max(i.start + 1, Ni(i.scroller, i._dir)))
        );
      }),
      n.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      $e.forEach(function (i) {
        nn(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
          i.rec && i(i.rec));
      }),
      ad(yc, 1),
      pa.pause(),
      dr++,
      (Mn = 2),
      Si(2),
      je.forEach(function (i) {
        return nn(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (Mn = Re.isRefreshing = !1),
      Mr("refresh");
  },
  ql = 0,
  ta = 1,
  js,
  Si = function (e) {
    if (!Mn || e === 2) {
      (Re.isUpdating = !0), js && js.update(0);
      var t = je.length,
        n = Qt(),
        i = n - ka >= 50,
        s = t && je[0].scroll();
      if (
        ((ta = ql > s ? -1 : 1),
        Mn || (ql = s),
        i &&
          (On && !Sa && n - On > 200 && ((On = 0), Mr("scrollEnd")),
          (Zo = ka),
          (ka = n)),
        ta < 0)
      ) {
        for (Jt = t; Jt-- > 0; ) je[Jt] && je[Jt].update(0, i);
        ta = 1;
      } else for (Jt = 0; Jt < t; Jt++) je[Jt] && je[Jt].update(0, i);
      Re.isUpdating = !1;
    }
    no = 0;
  },
  Yl = [
    nd,
    id,
    Tc,
    Ec,
    Pn + Ys,
    Pn + Ws,
    Pn + qs,
    Pn + Xs,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  na = Yl.concat([
    hr,
    fr,
    "boxSizing",
    "max" + _s,
    "max" + bc,
    "position",
    Pn,
    St,
    St + qs,
    St + Ws,
    St + Ys,
    St + Xs,
  ]),
  dm = function (e, t, n) {
    ss(n);
    var i = e._gsap;
    if (i.spacerIsNative) ss(i.spacerState);
    else if (e._gsap.swappedIn) {
      var s = t.parentNode;
      s && (s.insertBefore(e, t), s.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  Va = function (e, t, n, i) {
    if (!e._gsap.swappedIn) {
      for (var s = Yl.length, a = t.style, o = e.style, l; s--; )
        (l = Yl[s]), (a[l] = n[l]);
      (a.position = n.position === "absolute" ? "absolute" : "relative"),
        n.display === "inline" && (a.display = "inline-block"),
        (o[Tc] = o[Ec] = "auto"),
        (a.flexBasis = n.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[hr] = Wl(e, tn) + Ft),
        (a[fr] = Wl(e, Rt) + Ft),
        (a[St] = o[Pn] = o[id] = o[nd] = "0"),
        ss(i),
        (o[hr] = o["max" + _s] = n[hr]),
        (o[fr] = o["max" + bc] = n[fr]),
        (o[St] = n[St]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  pm = /([A-Z])/g,
  ss = function (e) {
    if (e) {
      var t = e.t.style,
        n = e.length,
        i = 0,
        s,
        a;
      for ((e.t._gsap || Pe.core.getCache(e.t)).uncache = 1; i < n; i += 2)
        (a = e[i + 1]),
          (s = e[i]),
          a
            ? (t[s] = a)
            : t[s] && t.removeProperty(s.replace(pm, "-$1").toLowerCase());
    }
  },
  yo = function (e) {
    for (var t = na.length, n = e.style, i = [], s = 0; s < t; s++)
      i.push(na[s], n[na[s]]);
    return (i.t = e), i;
  },
  mm = function (e, t, n) {
    for (var i = [], s = e.length, a = n ? 8 : 0, o; a < s; a += 2)
      (o = e[a]), i.push(o, o in t ? t[o] : e[a + 1]);
    return (i.t = e.t), i;
  },
  ia = { left: 0, top: 0 },
  lu = function (e, t, n, i, s, a, o, l, c, u, d, h, p) {
    nn(e) && (e = e(l)),
      Vn(e) &&
        e.substr(0, 3) === "max" &&
        (e = h + (e.charAt(4) === "=" ? Qo("0" + e.substr(3), n) : 0));
    var g = p ? p.time() : 0,
      m,
      _,
      f;
    if ((p && p.seek(0), Os(e)))
      p &&
        (e = Pe.utils.mapRange(
          p.scrollTrigger.start,
          p.scrollTrigger.end,
          0,
          h,
          e
        )),
        o && ea(o, n, i, !0);
    else {
      nn(t) && (t = t(l));
      var S = (e || "0").split(" "),
        x,
        y,
        M,
        E;
      (f = sn(t) || vt),
        (x = xi(f) || {}),
        (!x || (!x.left && !x.top)) &&
          qn(f).display === "none" &&
          ((E = f.style.display),
          (f.style.display = "block"),
          (x = xi(f)),
          E ? (f.style.display = E) : f.style.removeProperty("display")),
        (y = Qo(S[0], x[i.d])),
        (M = Qo(S[1] || "0", n)),
        (e = x[i.p] - c[i.p] - u + y + s - M),
        o && ea(o, M, i, n - M < 20 || (o._isStart && M > 20)),
        (n -= n - M);
    }
    if (a) {
      var w = e + n,
        P = a._isStart;
      (m = "scroll" + i.d2),
        ea(
          a,
          w,
          i,
          (P && w > 20) ||
            (!P && (d ? Math.max(vt[m], Wn[m]) : a.parentNode[m]) <= w + 1)
        ),
        d &&
          ((c = xi(o)),
          d && (a.style[i.op.p] = c[i.op.p] - i.op.m - a._offset + Ft));
    }
    return (
      p &&
        f &&
        ((m = xi(f)),
        p.seek(h),
        (_ = xi(f)),
        (p._caScrollDist = m[i.p] - _[i.p]),
        (e = (e / p._caScrollDist) * h)),
      p && p.seek(g),
      p ? e : Math.round(e)
    );
  },
  _m = /(webkit|moz|length|cssText|inset)/i,
  cu = function (e, t, n, i) {
    if (e.parentNode !== t) {
      var s = e.style,
        a,
        o;
      if (t === vt) {
        (e._stOrig = s.cssText), (o = qn(e));
        for (a in o)
          !+a &&
            !_m.test(a) &&
            o[a] &&
            typeof s[a] == "string" &&
            a !== "0" &&
            (s[a] = o[a]);
        (s.top = n), (s.left = i);
      } else s.cssText = e._stOrig;
      (Pe.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  ld = function (e, t, n) {
    var i = t,
      s = i;
    return function (a) {
      var o = Math.round(e());
      return (
        o !== i &&
          o !== s &&
          Math.abs(o - i) > 3 &&
          Math.abs(o - s) > 3 &&
          ((a = o), n && n()),
        (s = i),
        (i = a),
        a
      );
    };
  },
  uu = function (e, t) {
    var n = Vi(e, t),
      i = "_scroll" + t.p2,
      s = function a(o, l, c, u, d) {
        var h = a.tween,
          p = l.onComplete,
          g = {};
        c = c || n();
        var m = ld(n, c, function () {
          h.kill(), (a.tween = 0);
        });
        return (
          (d = (u && d) || 0),
          (u = u || o - c),
          h && h.kill(),
          (l[i] = o),
          (l.modifiers = g),
          (g[i] = function () {
            return m(c + u * h.ratio + d * h.ratio * h.ratio);
          }),
          (l.onUpdate = function () {
            $e.cache++, Si();
          }),
          (l.onComplete = function () {
            (a.tween = 0), p && p.call(h);
          }),
          (h = a.tween = Pe.to(e, l)),
          h
        );
      };
    return (
      (e[i] = n),
      (n.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      Ot(e, "wheel", n.wheelHandler),
      Re.isTouch && Ot(e, "touchmove", n.wheelHandler),
      s
    );
  },
  Re = (function () {
    function r(t, n) {
      Yr ||
        r.register(Pe) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(t, n);
    }
    var e = r.prototype;
    return (
      (e.init = function (n, i) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Us)
        ) {
          this.update = this.refresh = this.kill = Qn;
          return;
        }
        n = ru(Vn(n) || Os(n) || n.nodeType ? { trigger: n } : n, Mo);
        var s = n,
          a = s.onUpdate,
          o = s.toggleClass,
          l = s.id,
          c = s.onToggle,
          u = s.onRefresh,
          d = s.scrub,
          h = s.trigger,
          p = s.pin,
          g = s.pinSpacing,
          m = s.invalidateOnRefresh,
          _ = s.anticipatePin,
          f = s.onScrubComplete,
          S = s.onSnapComplete,
          x = s.once,
          y = s.snap,
          M = s.pinReparent,
          E = s.pinSpacer,
          w = s.containerAnimation,
          P = s.fastScrollEnd,
          v = s.preventOverlaps,
          T =
            n.horizontal || (n.containerAnimation && n.horizontal !== !1)
              ? tn
              : Rt,
          G = !d && d !== 0,
          O = sn(n.scroller || Ze),
          I = Pe.core.getCache(O),
          F = vr(O),
          k =
            ("pinType" in n
              ? n.pinType
              : Bi(O, "pinType") || (F && "fixed")) === "fixed",
          K = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
          H = G && n.toggleActions.split(" "),
          W = "markers" in n ? n.markers : Mo.markers,
          Q = F ? 0 : parseFloat(qn(O)["border" + T.p2 + _s]) || 0,
          C = this,
          fe =
            n.onRefreshInit &&
            function () {
              return n.onRefreshInit(C);
            },
          se = om(O, F, T),
          Y = am(O, F),
          J = 0,
          ae = 0,
          oe = Vi(O, T),
          D,
          Ce,
          Ie,
          le,
          we,
          xe,
          _e,
          Oe,
          it,
          qe,
          q,
          st,
          Le,
          Je,
          ft,
          R,
          b,
          $,
          ie,
          te,
          ce,
          L,
          ee,
          V,
          ue,
          ve,
          Te,
          me,
          ye,
          Fe,
          pe,
          ot,
          U,
          j,
          ne,
          he,
          be,
          tt,
          Ke;
        if (
          (Vl(C),
          (C._dir = T),
          (_ *= 45),
          (C.scroller = O),
          (C.scroll = w ? w.time.bind(w) : oe),
          (le = oe()),
          (C.vars = n),
          (i = i || n.animation),
          "refreshPriority" in n &&
            ((jf = 1), n.refreshPriority === -9999 && (js = C)),
          (I.tweenScroll = I.tweenScroll || {
            top: uu(O, Rt),
            left: uu(O, tn),
          }),
          (C.tweenTo = D = I.tweenScroll[T.p]),
          (C.scrubDuration = function (re) {
            (ot = Os(re) && re),
              ot
                ? pe
                  ? pe.duration(re)
                  : (pe = Pe.to(i, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: ot,
                      paused: !0,
                      onComplete: function () {
                        return f && f(C);
                      },
                    }))
                : (pe && pe.progress(1).kill(), (pe = 0));
          }),
          i &&
            ((i.vars.lazy = !1),
            i._initted ||
              (i.vars.immediateRender !== !1 &&
                n.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
            (C.animation = i.pause()),
            (i.scrollTrigger = C),
            C.scrubDuration(d),
            pe && pe.resetTo && pe.resetTo("totalProgress", 0),
            (ye = 0),
            l || (l = i.vars.id)),
          je.push(C),
          y &&
            ((!Jo(y) || y.push) && (y = { snapTo: y }),
            "scrollBehavior" in vt.style &&
              Pe.set(F ? [vt, Wn] : O, { scrollBehavior: "auto" }),
            $e.forEach(function (re) {
              return (
                nn(re) &&
                re.target === (F ? pt.scrollingElement || Wn : O) &&
                (re.smooth = !1)
              );
            }),
            (Ie = nn(y.snapTo)
              ? y.snapTo
              : y.snapTo === "labels"
              ? cm(i)
              : y.snapTo === "labelsDirectional"
              ? um(i)
              : y.directional !== !1
              ? function (re, Ae) {
                  return wc(y.snapTo)(re, Qt() - ae < 500 ? 0 : Ae.direction);
                }
              : Pe.utils.snap(y.snapTo)),
            (U = y.duration || { min: 0.1, max: 2 }),
            (U = Jo(U) ? Qr(U.min, U.max) : Qr(U, U)),
            (j = Pe.delayedCall(y.delay || ot / 2 || 0.1, function () {
              var re = oe(),
                Ae = Qt() - ae < 500,
                Ne = D.tween;
              if (
                (Ae || Math.abs(C.getVelocity()) < 10) &&
                !Ne &&
                !Sa &&
                J !== re
              ) {
                var Ve = (re - xe) / Le,
                  Et = i && !G ? i.totalProgress() : Ve,
                  rt = Ae ? 0 : ((Et - Fe) / (Qt() - Zo)) * 1e3 || 0,
                  dt = Pe.utils.clamp(-Ve, 1 - Ve, (Ar(rt / 2) * rt) / 0.185),
                  A = Ve + (y.inertia === !1 ? 0 : dt),
                  z = Qr(0, 1, Ie(A, C)),
                  X = Math.round(xe + z * Le),
                  N = y,
                  Z = N.onStart,
                  Me = N.onInterrupt,
                  Se = N.onComplete;
                if (re <= _e && re >= xe && X !== re) {
                  if (Ne && !Ne._initted && Ne.data <= Ar(X - re)) return;
                  y.inertia === !1 && (dt = z - Ve),
                    D(
                      X,
                      {
                        duration: U(
                          Ar(
                            (Math.max(Ar(A - Et), Ar(z - Et)) * 0.185) /
                              rt /
                              0.05 || 0
                          )
                        ),
                        ease: y.ease || "power3",
                        data: Ar(X - re),
                        onInterrupt: function () {
                          return j.restart(!0) && Me && Me(C);
                        },
                        onComplete: function () {
                          C.update(),
                            (J = oe()),
                            (ye = Fe =
                              i && !G ? i.totalProgress() : C.progress),
                            S && S(C),
                            Se && Se(C);
                        },
                      },
                      re,
                      dt * Le,
                      X - re - dt * Le
                    ),
                    Z && Z(C, D.tween);
                }
              } else C.isActive && J !== re && j.restart(!0);
            }).pause())),
          l && (Xl[l] = C),
          (h = C.trigger = sn(h || p)),
          (Ke = h && h._gsap && h._gsap.stRevert),
          Ke && (Ke = Ke(C)),
          (p = p === !0 ? h : sn(p)),
          Vn(o) && (o = { targets: h, className: o }),
          p &&
            (g === !1 ||
              g === Pn ||
              (g =
                !g &&
                p.parentNode &&
                p.parentNode.style &&
                qn(p.parentNode).display === "flex"
                  ? !1
                  : St),
            (C.pin = p),
            (Ce = Pe.core.getCache(p)),
            Ce.spacer
              ? (Je = Ce.pinState)
              : (E &&
                  ((E = sn(E)),
                  E && !E.nodeType && (E = E.current || E.nativeElement),
                  (Ce.spacerIsNative = !!E),
                  E && (Ce.spacerState = yo(E))),
                (Ce.spacer = b = E || pt.createElement("div")),
                b.classList.add("pin-spacer"),
                l && b.classList.add("pin-spacer-" + l),
                (Ce.pinState = Je = yo(p))),
            n.force3D !== !1 && Pe.set(p, { force3D: !0 }),
            (C.spacer = b = Ce.spacer),
            (me = qn(p)),
            (ee = me[g + T.os2]),
            (ie = Pe.getProperty(p)),
            (te = Pe.quickSetter(p, T.a, Ft)),
            Va(p, b, me),
            (R = yo(p))),
          W)
        ) {
          (st = Jo(W) ? ru(W, su) : su),
            (qe = So("scroller-start", l, O, T, st, 0)),
            (q = So("scroller-end", l, O, T, st, 0, qe)),
            ($ = qe["offset" + T.op.d2]);
          var gt = sn(Bi(O, "content") || O);
          (Oe = this.markerStart = So("start", l, gt, T, st, $, 0, w)),
            (it = this.markerEnd = So("end", l, gt, T, st, $, 0, w)),
            w && (tt = Pe.quickSetter([Oe, it], T.a, Ft)),
            !k &&
              !(si.length && Bi(O, "fixedMarkers") === !0) &&
              (lm(F ? vt : O),
              Pe.set([qe, q], { force3D: !0 }),
              (ue = Pe.quickSetter(qe, T.a, Ft)),
              (Te = Pe.quickSetter(q, T.a, Ft)));
        }
        if (w) {
          var ze = w.vars.onUpdate,
            ge = w.vars.onUpdateParams;
          w.eventCallback("onUpdate", function () {
            C.update(0, 0, 1), ze && ze.apply(w, ge || []);
          });
        }
        (C.previous = function () {
          return je[je.indexOf(C) - 1];
        }),
          (C.next = function () {
            return je[je.indexOf(C) + 1];
          }),
          (C.revert = function (re, Ae) {
            if (!Ae) return C.kill(!0);
            var Ne = re !== !1 || !C.enabled,
              Ve = Vt;
            Ne !== C.isReverted &&
              (Ne &&
                ((he = Math.max(oe(), C.scroll.rec || 0)),
                (ne = C.progress),
                (be = i && i.progress())),
              Oe &&
                [Oe, it, qe, q].forEach(function (Et) {
                  return (Et.style.display = Ne ? "none" : "block");
                }),
              Ne && ((Vt = C), C.update(Ne)),
              p &&
                (!M || !C.isActive) &&
                (Ne ? dm(p, b, Je) : Va(p, b, qn(p), V)),
              Ne || C.update(Ne),
              (Vt = Ve),
              (C.isReverted = Ne));
          }),
          (C.refresh = function (re, Ae) {
            if (!((Vt || !C.enabled) && !Ae)) {
              if (p && re && On) {
                Ot(r, "scrollEnd", sd);
                return;
              }
              !Mn && fe && fe(C),
                (Vt = C),
                (ae = Qt()),
                D.tween && (D.tween.kill(), (D.tween = 0)),
                pe && pe.pause(),
                m && i && i.revert({ kill: !1 }).invalidate(),
                C.isReverted || C.revert(!0, !0),
                (C._subPinOffset = !1);
              for (
                var Ne = se(),
                  Ve = Y(),
                  Et = w ? w.duration() : Ni(O, T),
                  rt = Le <= 0.01,
                  dt = 0,
                  A = 0,
                  z = n.end,
                  X = n.endTrigger || h,
                  N =
                    n.start || (n.start === 0 || !h ? 0 : p ? "0 0" : "0 100%"),
                  Z = (C.pinnedContainer =
                    n.pinnedContainer && sn(n.pinnedContainer)),
                  Me = (h && Math.max(0, je.indexOf(C))) || 0,
                  Se = Me,
                  Ee,
                  Ue,
                  He,
                  ke,
                  De,
                  Be,
                  ut,
                  jt,
                  Zn,
                  ht,
                  Ge;
                Se--;

              )
                (Be = je[Se]),
                  Be.end || Be.refresh(0, 1) || (Vt = C),
                  (ut = Be.pin),
                  ut &&
                    (ut === h || ut === p || ut === Z) &&
                    !Be.isReverted &&
                    (ht || (ht = []), ht.unshift(Be), Be.revert(!0, !0)),
                  Be !== je[Se] && (Me--, Se--);
              for (
                nn(N) && (N = N(C)),
                  xe =
                    lu(N, h, Ne, T, oe(), Oe, qe, C, Ve, Q, k, Et, w) ||
                    (p ? -0.001 : 0),
                  nn(z) && (z = z(C)),
                  Vn(z) &&
                    !z.indexOf("+=") &&
                    (~z.indexOf(" ")
                      ? (z = (Vn(N) ? N.split(" ")[0] : "") + z)
                      : ((dt = Qo(z.substr(2), Ne)),
                        (z = Vn(N)
                          ? N
                          : (w
                              ? Pe.utils.mapRange(
                                  0,
                                  w.duration(),
                                  w.scrollTrigger.start,
                                  w.scrollTrigger.end,
                                  xe
                                )
                              : xe) + dt),
                        (X = h))),
                  _e =
                    Math.max(
                      xe,
                      lu(
                        z || (X ? "100% 0" : Et),
                        X,
                        Ne,
                        T,
                        oe() + dt,
                        it,
                        q,
                        C,
                        Ve,
                        Q,
                        k,
                        Et,
                        w
                      )
                    ) || -0.001,
                  Le = _e - xe || ((xe -= 0.01) && 0.001),
                  dt = 0,
                  Se = Me;
                Se--;

              )
                (Be = je[Se]),
                  (ut = Be.pin),
                  ut &&
                    Be.start - Be._pinPush <= xe &&
                    !w &&
                    Be.end > 0 &&
                    ((Ee = Be.end - Be.start),
                    ((ut === h && Be.start - Be._pinPush < xe) || ut === Z) &&
                      !Os(N) &&
                      (dt += Ee * (1 - Be.progress)),
                    ut === p && (A += Ee));
              if (
                ((xe += dt),
                (_e += dt),
                rt &&
                  (ne = Pe.utils.clamp(0, 1, Pe.utils.normalize(xe, _e, he))),
                (C._pinPush = A),
                Oe &&
                  dt &&
                  ((Ee = {}),
                  (Ee[T.a] = "+=" + dt),
                  Z && (Ee[T.p] = "-=" + oe()),
                  Pe.set([Oe, it], Ee)),
                p)
              )
                (Ee = qn(p)),
                  (ke = T === Rt),
                  (He = oe()),
                  (ce = parseFloat(ie(T.a)) + A),
                  !Et &&
                    _e > 1 &&
                    ((Ge = (F ? pt.scrollingElement || Wn : O).style),
                    (Ge = {
                      style: Ge,
                      value: Ge["overflow" + T.a.toUpperCase()],
                    }),
                    (Ge.style["overflow" + T.a.toUpperCase()] = "scroll")),
                  Va(p, b, Ee),
                  (R = yo(p)),
                  (Ue = xi(p, !0)),
                  (jt = k && Vi(O, ke ? tn : Rt)()),
                  g &&
                    ((V = [g + T.os2, Le + A + Ft]),
                    (V.t = b),
                    (Se = g === St ? Wl(p, T) + Le + A : 0),
                    Se && V.push(T.d, Se + Ft),
                    ss(V),
                    Z &&
                      je.forEach(function (ci) {
                        ci.pin === Z &&
                          ci.vars.pinSpacing !== !1 &&
                          (ci._subPinOffset = !0);
                      }),
                    k && oe(he)),
                  k &&
                    ((De = {
                      top: Ue.top + (ke ? He - xe : jt) + Ft,
                      left: Ue.left + (ke ? jt : He - xe) + Ft,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (De[hr] = De["max" + _s] = Math.ceil(Ue.width) + Ft),
                    (De[fr] = De["max" + bc] = Math.ceil(Ue.height) + Ft),
                    (De[Pn] =
                      De[Pn + qs] =
                      De[Pn + Ws] =
                      De[Pn + Ys] =
                      De[Pn + Xs] =
                        "0"),
                    (De[St] = Ee[St]),
                    (De[St + qs] = Ee[St + qs]),
                    (De[St + Ws] = Ee[St + Ws]),
                    (De[St + Ys] = Ee[St + Ys]),
                    (De[St + Xs] = Ee[St + Xs]),
                    (ft = mm(Je, De, M)),
                    Mn && oe(0)),
                  i
                    ? ((Zn = i._initted),
                      za(1),
                      i.render(i.duration(), !0, !0),
                      (L = ie(T.a) - ce + Le + A),
                      (ve = Math.abs(Le - L) > 1),
                      k && ve && ft.splice(ft.length - 2, 2),
                      i.render(0, !0, !0),
                      Zn || i.invalidate(!0),
                      i.parent || i.totalTime(i.totalTime()),
                      za(0))
                    : (L = Le),
                  Ge &&
                    (Ge.value
                      ? (Ge.style["overflow" + T.a.toUpperCase()] = Ge.value)
                      : Ge.style.removeProperty("overflow-" + T.a));
              else if (h && oe() && !w)
                for (Ue = h.parentNode; Ue && Ue !== vt; )
                  Ue._pinOffset &&
                    ((xe -= Ue._pinOffset), (_e -= Ue._pinOffset)),
                    (Ue = Ue.parentNode);
              ht &&
                ht.forEach(function (ci) {
                  return ci.revert(!1, !0);
                }),
                (C.start = xe),
                (C.end = _e),
                (le = we = Mn ? he : oe()),
                !w && !Mn && (le < he && oe(he), (C.scroll.rec = 0)),
                C.revert(!1, !0),
                j && ((J = -1), C.isActive && oe(xe + Le * ne), j.restart(!0)),
                (Vt = 0),
                i &&
                  G &&
                  (i._initted || be) &&
                  i.progress() !== be &&
                  i.progress(be, !0).render(i.time(), !0, !0),
                (rt || ne !== C.progress || w) &&
                  (i &&
                    !G &&
                    i.totalProgress(
                      w && xe < -0.001 && !ne
                        ? Pe.utils.normalize(xe, _e, 0)
                        : ne,
                      !0
                    ),
                  (C.progress = (le - xe) / Le === ne ? 0 : ne)),
                p && g && (b._pinOffset = Math.round(C.progress * L)),
                pe && pe.invalidate(),
                u && !Mn && u(C);
            }
          }),
          (C.getVelocity = function () {
            return ((oe() - we) / (Qt() - Zo)) * 1e3 || 0;
          }),
          (C.endAnimation = function () {
            ws(C.callbackAnimation),
              i &&
                (pe
                  ? pe.progress(1)
                  : i.paused()
                  ? G || ws(i, C.direction < 0, 1)
                  : ws(i, i.reversed()));
          }),
          (C.labelToScroll = function (re) {
            return (
              (i &&
                i.labels &&
                (xe || C.refresh() || xe) +
                  (i.labels[re] / i.duration()) * Le) ||
              0
            );
          }),
          (C.getTrailing = function (re) {
            var Ae = je.indexOf(C),
              Ne =
                C.direction > 0 ? je.slice(0, Ae).reverse() : je.slice(Ae + 1);
            return (
              Vn(re)
                ? Ne.filter(function (Ve) {
                    return Ve.vars.preventOverlaps === re;
                  })
                : Ne
            ).filter(function (Ve) {
              return C.direction > 0 ? Ve.end <= xe : Ve.start >= _e;
            });
          }),
          (C.update = function (re, Ae, Ne) {
            if (!(w && !Ne && !re)) {
              var Ve = Mn === !0 ? he : C.scroll(),
                Et = re ? 0 : (Ve - xe) / Le,
                rt = Et < 0 ? 0 : Et > 1 ? 1 : Et || 0,
                dt = C.progress,
                A,
                z,
                X,
                N,
                Z,
                Me,
                Se,
                Ee;
              if (
                (Ae &&
                  ((we = le),
                  (le = w ? oe() : Ve),
                  y && ((Fe = ye), (ye = i && !G ? i.totalProgress() : rt))),
                _ &&
                  !rt &&
                  p &&
                  !Vt &&
                  !_o &&
                  On &&
                  xe < Ve + ((Ve - we) / (Qt() - Zo)) * _ &&
                  (rt = 1e-4),
                rt !== dt && C.enabled)
              ) {
                if (
                  ((A = C.isActive = !!rt && rt < 1),
                  (z = !!dt && dt < 1),
                  (Me = A !== z),
                  (Z = Me || !!rt != !!dt),
                  (C.direction = rt > dt ? 1 : -1),
                  (C.progress = rt),
                  Z &&
                    !Vt &&
                    ((X = rt && !dt ? 0 : rt === 1 ? 1 : dt === 1 ? 2 : 3),
                    G &&
                      ((N = (!Me && H[X + 1] !== "none" && H[X + 1]) || H[X]),
                      (Ee =
                        i && (N === "complete" || N === "reset" || N in i)))),
                  v &&
                    (Me || Ee) &&
                    (Ee || d || !i) &&
                    (nn(v)
                      ? v(C)
                      : C.getTrailing(v).forEach(function (De) {
                          return De.endAnimation();
                        })),
                  G ||
                    (pe && !Vt && !_o
                      ? (pe._dp._time - pe._start !== pe._time &&
                          pe.render(pe._dp._time - pe._start),
                        pe.resetTo
                          ? pe.resetTo("totalProgress", rt, i._tTime / i._tDur)
                          : ((pe.vars.totalProgress = rt),
                            pe.invalidate().restart()))
                      : i && i.totalProgress(rt, !!Vt)),
                  p)
                ) {
                  if ((re && g && (b.style[g + T.os2] = ee), !k))
                    te(Is(ce + L * rt));
                  else if (Z) {
                    if (
                      ((Se =
                        !re && rt > dt && _e + 1 > Ve && Ve + 1 >= Ni(O, T)),
                      M)
                    )
                      if (!re && (A || Se)) {
                        var Ue = xi(p, !0),
                          He = Ve - xe;
                        cu(
                          p,
                          vt,
                          Ue.top + (T === Rt ? He : 0) + Ft,
                          Ue.left + (T === Rt ? 0 : He) + Ft
                        );
                      } else cu(p, b);
                    ss(A || Se ? ft : R),
                      (ve && rt < 1 && A) || te(ce + (rt === 1 && !Se ? L : 0));
                  }
                }
                y && !D.tween && !Vt && !_o && j.restart(!0),
                  o &&
                    (Me || (x && rt && (rt < 1 || !Ba))) &&
                    ma(o.targets).forEach(function (De) {
                      return De.classList[A || x ? "add" : "remove"](
                        o.className
                      );
                    }),
                  a && !G && !re && a(C),
                  Z && !Vt
                    ? (G &&
                        (Ee &&
                          (N === "complete"
                            ? i.pause().totalProgress(1)
                            : N === "reset"
                            ? i.restart(!0).pause()
                            : N === "restart"
                            ? i.restart(!0)
                            : i[N]()),
                        a && a(C)),
                      (Me || !Ba) &&
                        (c && Me && Ga(C, c),
                        K[X] && Ga(C, K[X]),
                        x && (rt === 1 ? C.kill(!1, 1) : (K[X] = 0)),
                        Me || ((X = rt === 1 ? 1 : 3), K[X] && Ga(C, K[X]))),
                      P &&
                        !A &&
                        Math.abs(C.getVelocity()) > (Os(P) ? P : 2500) &&
                        (ws(C.callbackAnimation),
                        pe
                          ? pe.progress(1)
                          : ws(i, N === "reverse" ? 1 : !rt, 1)))
                    : G && a && !Vt && a(C);
              }
              if (Te) {
                var ke = w ? (Ve / w.duration()) * (w._caScrollDist || 0) : Ve;
                ue(ke + (qe._isFlipped ? 1 : 0)), Te(ke);
              }
              tt && tt((-Ve / w.duration()) * (w._caScrollDist || 0));
            }
          }),
          (C.enable = function (re, Ae) {
            C.enabled ||
              ((C.enabled = !0),
              Ot(O, "resize", Ns),
              Ot(F ? pt : O, "scroll", Rr),
              fe && Ot(r, "refreshInit", fe),
              re !== !1 && ((C.progress = ne = 0), (le = we = J = oe())),
              Ae !== !1 && C.refresh());
          }),
          (C.getTween = function (re) {
            return re && D ? D.tween : pe;
          }),
          (C.setPositions = function (re, Ae) {
            p &&
              ((ce += re - xe),
              (L += Ae - re - Le),
              g === St && C.adjustPinSpacing(Ae - re - Le)),
              (C.start = xe = re),
              (C.end = _e = Ae),
              (Le = Ae - re),
              C.update();
          }),
          (C.adjustPinSpacing = function (re) {
            if (V && re) {
              var Ae = V.indexOf(T.d) + 1;
              (V[Ae] = parseFloat(V[Ae]) + re + Ft),
                (V[1] = parseFloat(V[1]) + re + Ft),
                ss(V);
            }
          }),
          (C.disable = function (re, Ae) {
            if (
              C.enabled &&
              (re !== !1 && C.revert(!0, !0),
              (C.enabled = C.isActive = !1),
              Ae || (pe && pe.pause()),
              (he = 0),
              Ce && (Ce.uncache = 1),
              fe && It(r, "refreshInit", fe),
              j && (j.pause(), D.tween && D.tween.kill() && (D.tween = 0)),
              !F)
            ) {
              for (var Ne = je.length; Ne--; )
                if (je[Ne].scroller === O && je[Ne] !== C) return;
              It(O, "resize", Ns), It(O, "scroll", Rr);
            }
          }),
          (C.kill = function (re, Ae) {
            C.disable(re, Ae), pe && !Ae && pe.kill(), l && delete Xl[l];
            var Ne = je.indexOf(C);
            Ne >= 0 && je.splice(Ne, 1),
              Ne === Jt && ta > 0 && Jt--,
              (Ne = 0),
              je.forEach(function (Ve) {
                return Ve.scroller === C.scroller && (Ne = 1);
              }),
              Ne || Mn || (C.scroll.rec = 0),
              i &&
                ((i.scrollTrigger = null),
                re && i.revert({ kill: !1 }),
                Ae || i.kill()),
              Oe &&
                [Oe, it, qe, q].forEach(function (Ve) {
                  return Ve.parentNode && Ve.parentNode.removeChild(Ve);
                }),
              js === C && (js = 0),
              p &&
                (Ce && (Ce.uncache = 1),
                (Ne = 0),
                je.forEach(function (Ve) {
                  return Ve.pin === p && Ne++;
                }),
                Ne || (Ce.spacer = 0)),
              n.onKill && n.onKill(C);
          }),
          C.enable(!1, !1),
          Ke && Ke(C),
          !i || !i.add || Le
            ? C.refresh()
            : Pe.delayedCall(0.01, function () {
                return xe || _e || C.refresh();
              }) &&
              (Le = 0.01) &&
              (xe = _e = 0),
          p && fm();
      }),
      (r.register = function (n) {
        return (
          Yr ||
            ((Pe = n || ed()),
            Qf() && window.document && r.enable(),
            (Yr = Us)),
          Yr
        );
      }),
      (r.defaults = function (n) {
        if (n) for (var i in n) Mo[i] = n[i];
        return Mo;
      }),
      (r.disable = function (n, i) {
        (Us = 0),
          je.forEach(function (a) {
            return a[i ? "kill" : "disable"](n);
          }),
          It(Ze, "wheel", Rr),
          It(pt, "scroll", Rr),
          clearInterval(mo),
          It(pt, "touchcancel", Qn),
          It(vt, "touchstart", Qn),
          vo(It, pt, "pointerdown,touchstart,mousedown", nu),
          vo(It, pt, "pointerup,touchend,mouseup", iu),
          pa.kill(),
          go(It);
        for (var s = 0; s < $e.length; s += 3)
          xo(It, $e[s], $e[s + 1]), xo(It, $e[s], $e[s + 2]);
      }),
      (r.enable = function () {
        if (
          ((Ze = window),
          (pt = document),
          (Wn = pt.documentElement),
          (vt = pt.body),
          Pe &&
            ((ma = Pe.utils.toArray),
            (Qr = Pe.utils.clamp),
            (Vl = Pe.core.context || Qn),
            (za = Pe.core.suppressOverwrites || Qn),
            (yc = Ze.history.scrollRestoration || "auto"),
            (ql = Ze.pageYOffset),
            Pe.core.globals("ScrollTrigger", r),
            vt))
        ) {
          (Us = 1),
            sm(),
            wt.register(Pe),
            (r.isTouch = wt.isTouch),
            (Pi =
              wt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            Ot(Ze, "wheel", Rr),
            (Yf = [Ze, pt, Wn, vt]),
            Pe.matchMedia
              ? ((r.matchMedia = function (l) {
                  var c = Pe.matchMedia(),
                    u;
                  for (u in l) c.add(u, l[u]);
                  return c;
                }),
                Pe.addEventListener("matchMediaInit", function () {
                  return Ac();
                }),
                Pe.addEventListener("matchMediaRevert", function () {
                  return od();
                }),
                Pe.addEventListener("matchMedia", function () {
                  sr(0, 1), Mr("matchMedia");
                }),
                Pe.matchMedia("(orientation: portrait)", function () {
                  return Ha(), Ha;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Ha(),
            Ot(pt, "scroll", Rr);
          var n = vt.style,
            i = n.borderTopStyle,
            s = Pe.core.Animation.prototype,
            a,
            o;
          for (
            s.revert ||
              Object.defineProperty(s, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              n.borderTopStyle = "solid",
              a = xi(vt),
              Rt.m = Math.round(a.top + Rt.sc()) || 0,
              tn.m = Math.round(a.left + tn.sc()) || 0,
              i ? (n.borderTopStyle = i) : n.removeProperty("border-top-style"),
              mo = setInterval(ou, 250),
              Pe.delayedCall(0.5, function () {
                return (_o = 0);
              }),
              Ot(pt, "touchcancel", Qn),
              Ot(vt, "touchstart", Qn),
              vo(Ot, pt, "pointerdown,touchstart,mousedown", nu),
              vo(Ot, pt, "pointerup,touchend,mouseup", iu),
              Hl = Pe.utils.checkPrefix("transform"),
              na.push(Hl),
              Yr = Qt(),
              pa = Pe.delayedCall(0.2, sr).pause(),
              jr = [
                pt,
                "visibilitychange",
                function () {
                  var l = Ze.innerWidth,
                    c = Ze.innerHeight;
                  pt.hidden
                    ? ((eu = l), (tu = c))
                    : (eu !== l || tu !== c) && Ns();
                },
                pt,
                "DOMContentLoaded",
                sr,
                Ze,
                "load",
                sr,
                Ze,
                "resize",
                Ns,
              ],
              go(Ot),
              je.forEach(function (l) {
                return l.enable(0, 1);
              }),
              o = 0;
            o < $e.length;
            o += 3
          )
            xo(It, $e[o], $e[o + 1]), xo(It, $e[o], $e[o + 2]);
        }
      }),
      (r.config = function (n) {
        "limitCallbacks" in n && (Ba = !!n.limitCallbacks);
        var i = n.syncInterval;
        (i && clearInterval(mo)) || ((mo = i) && setInterval(ou, i)),
          "ignoreMobileResize" in n &&
            ($f = r.isTouch === 1 && n.ignoreMobileResize),
          "autoRefreshEvents" in n &&
            (go(It) || go(Ot, n.autoRefreshEvents || "none"),
            (Kf = (n.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (r.scrollerProxy = function (n, i) {
        var s = sn(n),
          a = $e.indexOf(s),
          o = vr(s);
        ~a && $e.splice(a, o ? 6 : 2),
          i && (o ? si.unshift(Ze, i, vt, i, Wn, i) : si.unshift(s, i));
      }),
      (r.clearMatchMedia = function (n) {
        je.forEach(function (i) {
          return i._ctx && i._ctx.query === n && i._ctx.kill(!0, !0);
        });
      }),
      (r.isInViewport = function (n, i, s) {
        var a = (Vn(n) ? sn(n) : n).getBoundingClientRect(),
          o = a[s ? hr : fr] * i || 0;
        return s
          ? a.right - o > 0 && a.left + o < Ze.innerWidth
          : a.bottom - o > 0 && a.top + o < Ze.innerHeight;
      }),
      (r.positionInViewport = function (n, i, s) {
        Vn(n) && (n = sn(n));
        var a = n.getBoundingClientRect(),
          o = a[s ? hr : fr],
          l =
            i == null
              ? o / 2
              : i in _a
              ? _a[i] * o
              : ~i.indexOf("%")
              ? (parseFloat(i) * o) / 100
              : parseFloat(i) || 0;
        return s ? (a.left + l) / Ze.innerWidth : (a.top + l) / Ze.innerHeight;
      }),
      (r.killAll = function (n) {
        if (
          (je.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          n !== !0)
        ) {
          var i = xr.killAll || [];
          (xr = {}),
            i.forEach(function (s) {
              return s();
            });
        }
      }),
      r
    );
  })();
Re.version = "3.11.5";
Re.saveStyles = function (r) {
  return r
    ? ma(r).forEach(function (e) {
        if (e && e.style) {
          var t = vn.indexOf(e);
          t >= 0 && vn.splice(t, 5),
            vn.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              Pe.core.getCache(e),
              Vl()
            );
        }
      })
    : vn;
};
Re.revert = function (r, e) {
  return Ac(!r, e);
};
Re.create = function (r, e) {
  return new Re(r, e);
};
Re.refresh = function (r) {
  return r ? Ns() : (Yr || Re.register()) && sr(!0);
};
Re.update = function (r) {
  return ++$e.cache && Si(r === !0 ? 2 : 0);
};
Re.clearScrollMemory = ad;
Re.maxScroll = function (r, e) {
  return Ni(r, e ? tn : Rt);
};
Re.getScrollFunc = function (r, e) {
  return Vi(sn(r), e ? tn : Rt);
};
Re.getById = function (r) {
  return Xl[r];
};
Re.getAll = function () {
  return je.filter(function (r) {
    return r.vars.id !== "ScrollSmoother";
  });
};
Re.isScrolling = function () {
  return !!On;
};
Re.snapDirectional = wc;
Re.addEventListener = function (r, e) {
  var t = xr[r] || (xr[r] = []);
  ~t.indexOf(e) || t.push(e);
};
Re.removeEventListener = function (r, e) {
  var t = xr[r],
    n = t && t.indexOf(e);
  n >= 0 && t.splice(n, 1);
};
Re.batch = function (r, e) {
  var t = [],
    n = {},
    i = e.interval || 0.016,
    s = e.batchMax || 1e9,
    a = function (c, u) {
      var d = [],
        h = [],
        p = Pe.delayedCall(i, function () {
          u(d, h), (d = []), (h = []);
        }).pause();
      return function (g) {
        d.length || p.restart(!0),
          d.push(g.trigger),
          h.push(g),
          s <= d.length && p.progress(1);
      };
    },
    o;
  for (o in e)
    n[o] =
      o.substr(0, 2) === "on" && nn(e[o]) && o !== "onRefreshInit"
        ? a(o, e[o])
        : e[o];
  return (
    nn(s) &&
      ((s = s()),
      Ot(Re, "refresh", function () {
        return (s = e.batchMax());
      })),
    ma(r).forEach(function (l) {
      var c = {};
      for (o in n) c[o] = n[o];
      (c.trigger = l), t.push(Re.create(c));
    }),
    t
  );
};
var hu = function (e, t, n, i) {
    return (
      t > i ? e(i) : t < 0 && e(0),
      n > i ? (i - t) / (n - t) : n < 0 ? t / (t - n) : 1
    );
  },
  Wa = function r(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (wt.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Wn && r(vt, t);
  },
  Eo = { auto: 1, scroll: 1 },
  gm = function (e) {
    var t = e.event,
      n = e.target,
      i = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      a = s._gsap || Pe.core.getCache(s),
      o = Qt(),
      l;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== vt &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(Eo[(l = qn(s)).overflowY] || Eo[l.overflowX]));

      )
        s = s.parentNode;
      (a._isScroll =
        s &&
        s !== n &&
        !vr(s) &&
        (Eo[(l = qn(s)).overflowY] || Eo[l.overflowX])),
        (a._isScrollT = o);
    }
    (a._isScroll || i === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  cd = function (e, t, n, i) {
    return wt.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (i = i && gm),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return n && Ot(pt, wt.eventTypes[0], du, !1, !0);
      },
      onDisable: function () {
        return It(pt, wt.eventTypes[0], du, !0);
      },
    });
  },
  vm = /(input|label|select|textarea)/i,
  fu,
  du = function (e) {
    var t = vm.test(e.target.tagName);
    (t || fu) && ((e._gsapAllow = !0), (fu = t));
  },
  xm = function (e) {
    Jo(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      n = t.normalizeScrollX,
      i = t.momentum,
      s = t.allowNestedScroll,
      a = t.onRelease,
      o,
      l,
      c = sn(e.target) || Wn,
      u = Pe.core.globals().ScrollSmoother,
      d = u && u.get(),
      h =
        Pi &&
        ((e.content && sn(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      p = Vi(c, Rt),
      g = Vi(c, tn),
      m = 1,
      _ =
        (wt.isTouch && Ze.visualViewport
          ? Ze.visualViewport.scale * Ze.visualViewport.width
          : Ze.outerWidth) / Ze.innerWidth,
      f = 0,
      S = nn(i)
        ? function () {
            return i(o);
          }
        : function () {
            return i || 2.8;
          },
      x,
      y,
      M = cd(c, e.type, !0, s),
      E = function () {
        return (y = !1);
      },
      w = Qn,
      P = Qn,
      v = function () {
        (l = Ni(c, Rt)),
          (P = Qr(Pi ? 1 : 0, l)),
          n && (w = Qr(0, Ni(c, tn))),
          (x = dr);
      },
      T = function () {
        (h._gsap.y = Is(parseFloat(h._gsap.y) + p.offset) + "px"),
          (h.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(h._gsap.y) +
            ", 0, 1)"),
          (p.offset = p.cacheID = 0);
      },
      G = function () {
        if (y) {
          requestAnimationFrame(E);
          var W = Is(o.deltaY / 2),
            Q = P(p.v - W);
          if (h && Q !== p.v + p.offset) {
            p.offset = Q - p.v;
            var C = Is((parseFloat(h && h._gsap.y) || 0) - p.offset);
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              C +
              ", 0, 1)"),
              (h._gsap.y = C + "px"),
              (p.cacheID = $e.cache),
              Si();
          }
          return !0;
        }
        p.offset && T(), (y = !0);
      },
      O,
      I,
      F,
      k,
      K = function () {
        v(),
          O.isActive() &&
            O.vars.scrollY > l &&
            (p() > l ? O.progress(1) && p(l) : O.resetTo("scrollY", l));
      };
    return (
      h && Pe.set(h, { y: "+=0" }),
      (e.ignoreCheck = function (H) {
        return (
          (Pi && H.type === "touchmove" && G()) ||
          (m > 1.05 && H.type !== "touchstart") ||
          o.isGesturing ||
          (H.touches && H.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        y = !1;
        var H = m;
        (m = Is(((Ze.visualViewport && Ze.visualViewport.scale) || 1) / _)),
          O.pause(),
          H !== m && Wa(c, m > 1.01 ? !0 : n ? !1 : "x"),
          (I = g()),
          (F = p()),
          v(),
          (x = dr);
      }),
      (e.onRelease = e.onGestureStart =
        function (H, W) {
          if ((p.offset && T(), !W)) k.restart(!0);
          else {
            $e.cache++;
            var Q = S(),
              C,
              fe;
            n &&
              ((C = g()),
              (fe = C + (Q * 0.05 * -H.velocityX) / 0.227),
              (Q *= hu(g, C, fe, Ni(c, tn))),
              (O.vars.scrollX = w(fe))),
              (C = p()),
              (fe = C + (Q * 0.05 * -H.velocityY) / 0.227),
              (Q *= hu(p, C, fe, Ni(c, Rt))),
              (O.vars.scrollY = P(fe)),
              O.invalidate().duration(Q).play(0.01),
              ((Pi && O.vars.scrollY >= l) || C >= l - 1) &&
                Pe.to({}, { onUpdate: K, duration: Q });
          }
          a && a(H);
        }),
      (e.onWheel = function () {
        O._ts && O.pause(), Qt() - f > 1e3 && ((x = 0), (f = Qt()));
      }),
      (e.onChange = function (H, W, Q, C, fe) {
        if (
          (dr !== x && v(),
          W && n && g(w(C[2] === W ? I + (H.startX - H.x) : g() + W - C[1])),
          Q)
        ) {
          p.offset && T();
          var se = fe[2] === Q,
            Y = se ? F + H.startY - H.y : p() + Q - fe[1],
            J = P(Y);
          se && Y !== J && (F += J - Y), p(J);
        }
        (Q || W) && Si();
      }),
      (e.onEnable = function () {
        Wa(c, n ? !1 : "x"),
          Re.addEventListener("refresh", K),
          Ot(Ze, "resize", K),
          p.smooth &&
            ((p.target.style.scrollBehavior = "auto"),
            (p.smooth = g.smooth = !1)),
          M.enable();
      }),
      (e.onDisable = function () {
        Wa(c, !0),
          It(Ze, "resize", K),
          Re.removeEventListener("refresh", K),
          M.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new wt(e)),
      (o.iOS = Pi),
      Pi && !p() && p(1),
      Pi && Pe.ticker.add(Qn),
      (k = o._dc),
      (O = Pe.to(o, {
        ease: "power4",
        paused: !0,
        scrollX: n ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: ld(p, p(), function () {
            return O.pause();
          }),
        },
        onUpdate: Si,
        onComplete: k.vars.onComplete,
      })),
      o
    );
  };
Re.sort = function (r) {
  return je.sort(
    r ||
      function (e, t) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (t.start + (t.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
Re.observe = function (r) {
  return new wt(r);
};
Re.normalizeScroll = function (r) {
  if (typeof r > "u") return gn;
  if (r === !0 && gn) return gn.enable();
  if (r === !1) return gn && gn.kill();
  var e = r instanceof wt ? r : xm(r);
  return gn && gn.target === e.target && gn.kill(), vr(e.target) && (gn = e), e;
};
Re.core = {
  _getVelocityProp: Gl,
  _inputObserver: cd,
  _scrollers: $e,
  _proxies: si,
  bridge: {
    ss: function () {
      On || Mr("scrollStart"), (On = Qt());
    },
    ref: function () {
      return Vt;
    },
  },
};
ed() && Pe.registerPlugin(Re);
at.registerPlugin(Re);
function Mm() {
  return at
    .timeline()
    .to(".loading-text", { yPercent: -100, duration: 0.8, ease: "power3.out" })
    .to(".loader", { width: "100%", duration: 1.5, ease: "power3.out" }, ">")
    .to(".loader", { transform: "scale(10,1)", duration: 0.5 }, ">+=0.1")
    .to(
      ".loading-text",
      { opacity: 0, yPercent: -400, duration: 0.5, ease: "power3.out" },
      "<+=0.35"
    )
    .to(
      ".block-top",
      { yPercent: -100, duration: 1, ease: "power3.out" },
      "<+=0.10"
    )
    .to(
      ".block-bottom",
      { yPercent: 100, duration: 1, ease: "power3.out" },
      "<"
    )
    .to(".blocks", { display: "none" }, ">+=0.45");
}
function jl() {
  return (
    (jl = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
          }
          return r;
        }),
    jl.apply(this, arguments)
  );
}
function ga(r, e, t) {
  return Math.max(r, Math.min(e, t));
}
class Sm {
  advance(e) {
    var t;
    if (!this.isRunning) return;
    let n = !1;
    if (this.lerp)
      (this.value =
        ((i = this.value),
        (s = this.to),
        (1 - (a = 1 - Math.exp(-60 * this.lerp * e))) * i + a * s)),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (n = !0));
    else {
      this.currentTime += e;
      const o = ga(0, this.currentTime / this.duration, 1);
      n = o >= 1;
      const l = n ? 1 : this.easing(o);
      this.value = this.from + (this.to - this.from) * l;
    }
    var i, s, a;
    (t = this.onUpdate) == null || t.call(this, this.value, { completed: n }),
      n && this.stop();
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    e,
    t,
    { lerp: n = 0.1, duration: i = 1, easing: s = (o) => o, onUpdate: a }
  ) {
    (this.from = this.value = e),
      (this.to = t),
      (this.lerp = n),
      (this.duration = i),
      (this.easing = s),
      (this.currentTime = 0),
      (this.isRunning = !0),
      (this.onUpdate = a);
  }
}
function pu(r, e) {
  let t;
  return function () {
    let n = arguments,
      i = this;
    clearTimeout(t),
      (t = setTimeout(function () {
        r.apply(i, n);
      }, e));
  };
}
class ym {
  constructor(e, t) {
    (this.onWindowResize = () => {
      (this.width = window.innerWidth), (this.height = window.innerHeight);
    }),
      (this.onWrapperResize = () => {
        (this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight);
      }),
      (this.onContentResize = () => {
        const n =
          this.wrapper === window ? document.documentElement : this.wrapper;
        (this.scrollHeight = n.scrollHeight),
          (this.scrollWidth = n.scrollWidth);
      }),
      (this.wrapper = e),
      (this.content = t),
      this.wrapper === window
        ? (window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize())
        : ((this.wrapperResizeObserver = new ResizeObserver(
            pu(this.onWrapperResize, 100)
          )),
          this.wrapperResizeObserver.observe(this.wrapper),
          this.onWrapperResize()),
      (this.contentResizeObserver = new ResizeObserver(
        pu(this.onContentResize, 100)
      )),
      this.contentResizeObserver.observe(this.content),
      this.onContentResize();
  }
  destroy() {
    var e, t;
    window.removeEventListener("resize", this.onWindowResize, !1),
      (e = this.wrapperResizeObserver) == null || e.disconnect(),
      (t = this.contentResizeObserver) == null || t.disconnect();
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
let ud = () => ({
  events: {},
  emit(r, ...e) {
    let t = this.events[r] || [];
    for (let n = 0, i = t.length; n < i; n++) t[n](...e);
  },
  on(r, e) {
    var t;
    return (
      ((t = this.events[r]) != null && t.push(e)) || (this.events[r] = [e]),
      () => {
        var n;
        this.events[r] =
          (n = this.events[r]) == null ? void 0 : n.filter((i) => e !== i);
      }
    );
  },
});
class Em {
  constructor(
    e,
    { wheelMultiplier: t = 1, touchMultiplier: n = 2, normalizeWheel: i = !1 }
  ) {
    (this.onTouchStart = (s) => {
      const { clientX: a, clientY: o } = s.targetTouches
        ? s.targetTouches[0]
        : s;
      (this.touchStart.x = a),
        (this.touchStart.y = o),
        (this.lastDelta = { x: 0, y: 0 });
    }),
      (this.onTouchMove = (s) => {
        const { clientX: a, clientY: o } = s.targetTouches
            ? s.targetTouches[0]
            : s,
          l = -(a - this.touchStart.x) * this.touchMultiplier,
          c = -(o - this.touchStart.y) * this.touchMultiplier;
        (this.touchStart.x = a),
          (this.touchStart.y = o),
          (this.lastDelta = { x: l, y: c }),
          this.emitter.emit("scroll", {
            type: "touch",
            deltaX: l,
            deltaY: c,
            event: s,
          });
      }),
      (this.onTouchEnd = (s) => {
        this.emitter.emit("scroll", {
          type: "touch",
          inertia: !0,
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: s,
        });
      }),
      (this.onWheel = (s) => {
        let { deltaX: a, deltaY: o } = s;
        this.normalizeWheel && ((a = ga(-100, a, 100)), (o = ga(-100, o, 100))),
          (a *= this.wheelMultiplier),
          (o *= this.wheelMultiplier),
          this.emitter.emit("scroll", {
            type: "wheel",
            deltaX: a,
            deltaY: o,
            event: s,
          });
      }),
      (this.element = e),
      (this.wheelMultiplier = t),
      (this.touchMultiplier = n),
      (this.normalizeWheel = i),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = ud()),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
  on(e, t) {
    return this.emitter.on(e, t);
  }
  destroy() {
    (this.emitter.events = {}),
      this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
}
class Tm {
  constructor({
    direction: e,
    gestureDirection: t,
    mouseMultiplier: n,
    smooth: i,
    wrapper: s = window,
    content: a = document.documentElement,
    wheelEventsTarget: o = s,
    smoothWheel: l = i == null || i,
    smoothTouch: c = !1,
    syncTouch: u = !1,
    syncTouchLerp: d = 0.1,
    touchInertiaMultiplier: h = 35,
    duration: p,
    easing: g = (E) => Math.min(1, 1.001 - Math.pow(2, -10 * E)),
    lerp: m = p ? null : 0.1,
    infinite: _ = !1,
    orientation: f = e ?? "vertical",
    gestureOrientation: S = t ?? "vertical",
    touchMultiplier: x = 1,
    wheelMultiplier: y = n ?? 1,
    normalizeWheel: M = !1,
  } = {}) {
    (this.onVirtualScroll = ({
      type: E,
      inertia: w,
      deltaX: P,
      deltaY: v,
      event: T,
    }) => {
      if (T.ctrlKey) return;
      const G = E === "touch",
        O = E === "wheel";
      if (
        (this.options.gestureOrientation === "vertical" && v === 0) ||
        (this.options.gestureOrientation === "horizontal" && P === 0) ||
        (G &&
          this.options.gestureOrientation === "vertical" &&
          this.scroll === 0 &&
          !this.options.infinite &&
          v <= 0) ||
        T.composedPath().find((K) =>
          K == null || K.hasAttribute == null
            ? void 0
            : K.hasAttribute("data-lenis-prevent")
        )
      )
        return;
      if (this.isStopped || this.isLocked) return void T.preventDefault();
      if (
        ((this.isSmooth =
          ((this.options.smoothTouch || this.options.syncTouch) && G) ||
          (this.options.smoothWheel && O)),
        !this.isSmooth)
      )
        return (this.isScrolling = !1), void this.animate.stop();
      T.preventDefault();
      let I = v;
      this.options.gestureOrientation === "both"
        ? (I = Math.abs(v) > Math.abs(P) ? v : P)
        : this.options.gestureOrientation === "horizontal" && (I = P);
      const F = G && this.options.syncTouch,
        k = G && w && Math.abs(I) > 1;
      k && (I = this.velocity * this.options.touchInertiaMultiplier),
        this.scrollTo(
          this.targetScroll + I,
          jl({ programmatic: !1 }, F && { lerp: k ? this.syncTouchLerp : 0.4 })
        );
    }),
      (this.onScroll = () => {
        if (!this.isScrolling) {
          const E = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - E)),
            this.emit();
        }
      }),
      e &&
        console.warn(
          "Lenis: `direction` option is deprecated, use `orientation` instead"
        ),
      t &&
        console.warn(
          "Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"
        ),
      n &&
        console.warn(
          "Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"
        ),
      i &&
        console.warn(
          "Lenis: `smooth` option is deprecated, use `smoothWheel` instead"
        ),
      (window.lenisVersion = "1.0.12"),
      (s !== document.documentElement && s !== document.body) || (s = window),
      (this.options = {
        wrapper: s,
        content: a,
        wheelEventsTarget: o,
        smoothWheel: l,
        smoothTouch: c,
        syncTouch: u,
        syncTouchLerp: d,
        touchInertiaMultiplier: h,
        duration: p,
        easing: g,
        lerp: m,
        infinite: _,
        gestureOrientation: S,
        orientation: f,
        touchMultiplier: x,
        wheelMultiplier: y,
        normalizeWheel: M,
      }),
      (this.dimensions = new ym(s, a)),
      this.rootElement.classList.add("lenis"),
      (this.velocity = 0),
      (this.isStopped = !1),
      (this.isSmooth = l || c),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      (this.animate = new Sm()),
      (this.emitter = ud()),
      this.options.wrapper.addEventListener("scroll", this.onScroll, {
        passive: !1,
      }),
      (this.virtualScroll = new Em(o, {
        touchMultiplier: x,
        wheelMultiplier: y,
        normalizeWheel: M,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    (this.emitter.events = {}),
      this.options.wrapper.removeEventListener("scroll", this.onScroll, {
        passive: !1,
      }),
      this.virtualScroll.destroy();
  }
  on(e, t) {
    return this.emitter.on(e, t);
  }
  off(e, t) {
    var n;
    this.emitter.events[e] =
      (n = this.emitter.events[e]) == null ? void 0 : n.filter((i) => t !== i);
  }
  setScroll(e) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = e)
      : (this.rootElement.scrollTop = e);
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.velocity = 0),
      this.animate.stop();
  }
  start() {
    (this.isStopped = !1), this.reset();
  }
  stop() {
    (this.isStopped = !0), this.animate.stop(), this.reset();
  }
  raf(e) {
    const t = e - (this.time || e);
    (this.time = e), this.animate.advance(0.001 * t);
  }
  scrollTo(
    e,
    {
      offset: t = 0,
      immediate: n = !1,
      lock: i = !1,
      duration: s = this.options.duration,
      easing: a = this.options.easing,
      lerp: o = !s && this.options.lerp,
      onComplete: l = null,
      force: c = !1,
      programmatic: u = !0,
    } = {}
  ) {
    if (!this.isStopped || c) {
      if (["top", "left", "start"].includes(e)) e = 0;
      else if (["bottom", "right", "end"].includes(e)) e = this.limit;
      else {
        var d;
        let h;
        if (
          (typeof e == "string"
            ? (h = document.querySelector(e))
            : (d = e) != null && d.nodeType && (h = e),
          h)
        ) {
          if (this.options.wrapper !== window) {
            const g = this.options.wrapper.getBoundingClientRect();
            t -= this.isHorizontal ? g.left : g.top;
          }
          const p = h.getBoundingClientRect();
          e = (this.isHorizontal ? p.left : p.top) + this.animatedScroll;
        }
      }
      if (typeof e == "number") {
        if (
          ((e += t),
          (e = Math.round(e)),
          this.options.infinite
            ? u && (this.targetScroll = this.animatedScroll = this.scroll)
            : (e = ga(0, e, this.limit)),
          n)
        )
          return (
            (this.animatedScroll = this.targetScroll = e),
            this.setScroll(this.scroll),
            this.reset(),
            this.emit(),
            void (l == null || l())
          );
        if (!u) {
          if (e === this.targetScroll) return;
          this.targetScroll = e;
        }
        this.animate.fromTo(this.animatedScroll, e, {
          duration: s,
          easing: a,
          lerp: o,
          onUpdate: (h, { completed: p }) => {
            i && (this.isLocked = !0),
              (this.isScrolling = !0),
              (this.velocity = h - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = h),
              this.setScroll(this.scroll),
              u && (this.targetScroll = h),
              p &&
                (i && (this.isLocked = !1),
                requestAnimationFrame(() => {
                  this.isScrolling = !1;
                }),
                (this.velocity = 0),
                l == null || l()),
              this.emit();
          },
        });
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window
      ? this.options.content
      : this.options.wrapper;
  }
  get limit() {
    return this.isHorizontal
      ? this.dimensions.limit.x
      : this.dimensions.limit.y;
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? ((this.animatedScroll % (e = this.limit)) + e) % e
      : this.animatedScroll;
    var e;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isSmooth() {
    return this.__isSmooth;
  }
  set isSmooth(e) {
    this.__isSmooth !== e &&
      (this.rootElement.classList.toggle("lenis-smooth", e),
      (this.__isSmooth = e));
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(e) {
    this.__isScrolling !== e &&
      (this.rootElement.classList.toggle("lenis-scrolling", e),
      (this.__isScrolling = e));
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(e) {
    this.__isStopped !== e &&
      (this.rootElement.classList.toggle("lenis-stopped", e),
      (this.__isStopped = e));
  }
}
function bm() {
  const r = new Tm({
    duration: 2.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  function e(t) {
    r.raf(t), requestAnimationFrame(e);
  }
  requestAnimationFrame(e),
    r.on("scroll", Re.update),
    at.ticker.add((t) => {
      r.raf(t * 1e3);
    });
}
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Rc = "152",
  Cr = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Pr = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  wm = 0,
  mu = 1,
  Am = 2,
  hd = 1,
  Rm = 2,
  _i = 3,
  Wi = 0,
  un = 1,
  Yn = 2,
  ki = 0,
  os = 1,
  Kl = 2,
  _u = 3,
  gu = 4,
  Cm = 5,
  Kr = 100,
  Pm = 101,
  Lm = 102,
  vu = 103,
  xu = 104,
  Dm = 200,
  Um = 201,
  Im = 202,
  Om = 203,
  fd = 204,
  dd = 205,
  Nm = 206,
  Fm = 207,
  zm = 208,
  Bm = 209,
  km = 210,
  Gm = 0,
  Hm = 1,
  Vm = 2,
  $l = 3,
  Wm = 4,
  Xm = 5,
  qm = 6,
  Ym = 7,
  pd = 0,
  jm = 1,
  Km = 2,
  yi = 0,
  $m = 1,
  Zm = 2,
  Jm = 3,
  Qm = 4,
  e_ = 5,
  md = 300,
  gs = 301,
  vs = 302,
  Zl = 303,
  Jl = 304,
  ya = 306,
  Ql = 1e3,
  jn = 1001,
  ec = 1002,
  en = 1003,
  Mu = 1004,
  Xa = 1005,
  Ln = 1006,
  t_ = 1007,
  io = 1008,
  Sr = 1009,
  n_ = 1010,
  i_ = 1011,
  _d = 1012,
  r_ = 1013,
  or = 1014,
  ar = 1015,
  ro = 1016,
  s_ = 1017,
  o_ = 1018,
  as = 1020,
  a_ = 1021,
  Kn = 1023,
  l_ = 1024,
  c_ = 1025,
  pr = 1026,
  xs = 1027,
  u_ = 1028,
  h_ = 1029,
  f_ = 1030,
  d_ = 1031,
  p_ = 1033,
  qa = 33776,
  Ya = 33777,
  ja = 33778,
  Ka = 33779,
  Su = 35840,
  yu = 35841,
  Eu = 35842,
  Tu = 35843,
  m_ = 36196,
  bu = 37492,
  wu = 37496,
  Au = 37808,
  Ru = 37809,
  Cu = 37810,
  Pu = 37811,
  Lu = 37812,
  Du = 37813,
  Uu = 37814,
  Iu = 37815,
  Ou = 37816,
  Nu = 37817,
  Fu = 37818,
  zu = 37819,
  Bu = 37820,
  ku = 37821,
  $a = 36492,
  __ = 36283,
  Gu = 36284,
  Hu = 36285,
  Vu = 36286,
  gd = 3e3,
  mr = 3001,
  g_ = 3200,
  v_ = 3201,
  vd = 0,
  x_ = 1,
  _r = "",
  Xe = "srgb",
  ai = "srgb-linear",
  xd = "display-p3",
  Za = 7680,
  M_ = 519,
  Wu = 35044,
  Xu = "300 es",
  tc = 1035;
class br {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const Gt = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  Ja = Math.PI / 180,
  nc = 180 / Math.PI;
function ao() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Gt[r & 255] +
    Gt[(r >> 8) & 255] +
    Gt[(r >> 16) & 255] +
    Gt[(r >> 24) & 255] +
    "-" +
    Gt[e & 255] +
    Gt[(e >> 8) & 255] +
    "-" +
    Gt[((e >> 16) & 15) | 64] +
    Gt[(e >> 24) & 255] +
    "-" +
    Gt[(t & 63) | 128] +
    Gt[(t >> 8) & 255] +
    "-" +
    Gt[(t >> 16) & 255] +
    Gt[(t >> 24) & 255] +
    Gt[n & 255] +
    Gt[(n >> 8) & 255] +
    Gt[(n >> 16) & 255] +
    Gt[(n >> 24) & 255]
  ).toLowerCase();
}
function Wt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function S_(r, e) {
  return ((r % e) + e) % e;
}
function Qa(r, e, t) {
  return (1 - t) * r + t * e;
}
function qu(r) {
  return (r & (r - 1)) === 0 && r !== 0;
}
function y_(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function To(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function pn(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class We {
  constructor(e = 0, t = 0) {
    (We.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Wt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      a = this.y - e.y;
    return (this.x = s * n - a * i + e.x), (this.y = s * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Qe {
  constructor() {
    (Qe.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, a, o, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = i),
      (u[2] = o),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = a),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      d = n[7],
      h = n[2],
      p = n[5],
      g = n[8],
      m = i[0],
      _ = i[3],
      f = i[6],
      S = i[1],
      x = i[4],
      y = i[7],
      M = i[2],
      E = i[5],
      w = i[8];
    return (
      (s[0] = a * m + o * S + l * M),
      (s[3] = a * _ + o * x + l * E),
      (s[6] = a * f + o * y + l * w),
      (s[1] = c * m + u * S + d * M),
      (s[4] = c * _ + u * x + d * E),
      (s[7] = c * f + u * y + d * w),
      (s[2] = h * m + p * S + g * M),
      (s[5] = h * _ + p * x + g * E),
      (s[8] = h * f + p * y + g * w),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * a * u - t * o * c - n * s * u + n * o * l + i * s * c - i * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      d = u * a - o * c,
      h = o * l - u * s,
      p = c * s - a * l,
      g = t * d + n * h + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / g;
    return (
      (e[0] = d * m),
      (e[1] = (i * c - u * n) * m),
      (e[2] = (o * n - i * a) * m),
      (e[3] = h * m),
      (e[4] = (u * t - i * l) * m),
      (e[5] = (i * s - o * t) * m),
      (e[6] = p * m),
      (e[7] = (n * l - c * t) * m),
      (e[8] = (a * t - n * s) * m),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + e,
        -i * c,
        i * l,
        -i * (-c * a + l * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(el.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(el.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(el.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const el = new Qe();
function Md(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
  return !1;
}
function so(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
const Yu = {};
function Ks(r) {
  r in Yu || ((Yu[r] = !0), console.warn(r));
}
function ls(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function tl(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const E_ = new Qe().fromArray([
    0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7,
    1e-7, 0.9105199,
  ]),
  T_ = new Qe().fromArray([
    1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7,
    0, 1.0982735,
  ]);
function b_(r) {
  return r.convertSRGBToLinear().applyMatrix3(T_);
}
function w_(r) {
  return r.applyMatrix3(E_).convertLinearToSRGB();
}
const A_ = { [ai]: (r) => r, [Xe]: (r) => r.convertSRGBToLinear(), [xd]: b_ },
  R_ = { [ai]: (r) => r, [Xe]: (r) => r.convertLinearToSRGB(), [xd]: w_ },
  zn = {
    enabled: !0,
    get legacyMode() {
      return (
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
        !this.enabled
      );
    },
    set legacyMode(r) {
      console.warn(
        "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
      ),
        (this.enabled = !r);
    },
    get workingColorSpace() {
      return ai;
    },
    set workingColorSpace(r) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (r, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return r;
      const n = A_[e],
        i = R_[t];
      if (n === void 0 || i === void 0)
        throw new Error(
          `Unsupported color space conversion, "${e}" to "${t}".`
        );
      return i(n(r));
    },
    fromWorkingColorSpace: function (r, e) {
      return this.convert(r, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (r, e) {
      return this.convert(r, e, this.workingColorSpace);
    },
  };
let Lr;
class Sd {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Lr === void 0 && (Lr = so("canvas")),
        (Lr.width = e.width),
        (Lr.height = e.height);
      const n = Lr.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Lr);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = so("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        s = i.data;
      for (let a = 0; a < s.length; a++) s[a] = ls(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(ls(t[n] / 255) * 255))
          : (t[n] = ls(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class yd {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = ao()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(nl(i[a].image)) : s.push(nl(i[a]));
      } else s = nl(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function nl(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && r instanceof ImageBitmap)
    ? Sd.getDataURL(r)
    : r.data
    ? {
        data: Array.from(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let C_ = 0;
class hn extends br {
  constructor(
    e = hn.DEFAULT_IMAGE,
    t = hn.DEFAULT_MAPPING,
    n = jn,
    i = jn,
    s = Ln,
    a = io,
    o = Kn,
    l = Sr,
    c = hn.DEFAULT_ANISOTROPY,
    u = _r
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: C_++ }),
      (this.uuid = ao()),
      (this.name = ""),
      (this.source = new yd(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new We(0, 0)),
      (this.repeat = new We(1, 1)),
      (this.center = new We(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Qe()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      typeof u == "string"
        ? (this.colorSpace = u)
        : (Ks(
            "THREE.Texture: Property .encoding has been replaced by .colorSpace."
          ),
          (this.colorSpace = u === mr ? Xe : _r)),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== md) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ql:
          e.x = e.x - Math.floor(e.x);
          break;
        case jn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ec:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ql:
          e.y = e.y - Math.floor(e.y);
          break;
        case jn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ec:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  get encoding() {
    return (
      Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      this.colorSpace === Xe ? mr : gd
    );
  }
  set encoding(e) {
    Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      (this.colorSpace = e === mr ? Xe : _r);
  }
}
hn.DEFAULT_IMAGE = null;
hn.DEFAULT_MAPPING = md;
hn.DEFAULT_ANISOTROPY = 1;
class Ct {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (Ct.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      d = l[8],
      h = l[1],
      p = l[5],
      g = l[9],
      m = l[2],
      _ = l[6],
      f = l[10];
    if (
      Math.abs(u - h) < 0.01 &&
      Math.abs(d - m) < 0.01 &&
      Math.abs(g - _) < 0.01
    ) {
      if (
        Math.abs(u + h) < 0.1 &&
        Math.abs(d + m) < 0.1 &&
        Math.abs(g + _) < 0.1 &&
        Math.abs(c + p + f - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (c + 1) / 2,
        y = (p + 1) / 2,
        M = (f + 1) / 2,
        E = (u + h) / 4,
        w = (d + m) / 4,
        P = (g + _) / 4;
      return (
        x > y && x > M
          ? x < 0.01
            ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(x)), (i = E / n), (s = w / n))
          : y > M
          ? y < 0.01
            ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
            : ((i = Math.sqrt(y)), (n = E / i), (s = P / i))
          : M < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
          : ((s = Math.sqrt(M)), (n = w / s), (i = P / s)),
        this.set(n, i, s, t),
        this
      );
    }
    let S = Math.sqrt(
      (_ - g) * (_ - g) + (d - m) * (d - m) + (h - u) * (h - u)
    );
    return (
      Math.abs(S) < 0.001 && (S = 1),
      (this.x = (_ - g) / S),
      (this.y = (d - m) / S),
      (this.z = (h - u) / S),
      (this.w = Math.acos((c + p + f - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class yr extends br {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Ct(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Ct(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 &&
      (Ks(
        "THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."
      ),
      (n.colorSpace = n.encoding === mr ? Xe : _r)),
      (this.texture = new hn(
        i,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Ln),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new yd(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ed extends hn {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = en),
      (this.minFilter = en),
      (this.wrapR = jn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class P_ extends hn {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = en),
      (this.minFilter = en),
      (this.wrapR = jn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Er {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let l = n[i + 0],
      c = n[i + 1],
      u = n[i + 2],
      d = n[i + 3];
    const h = s[a + 0],
      p = s[a + 1],
      g = s[a + 2],
      m = s[a + 3];
    if (o === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = d);
      return;
    }
    if (o === 1) {
      (e[t + 0] = h), (e[t + 1] = p), (e[t + 2] = g), (e[t + 3] = m);
      return;
    }
    if (d !== m || l !== h || c !== p || u !== g) {
      let _ = 1 - o;
      const f = l * h + c * p + u * g + d * m,
        S = f >= 0 ? 1 : -1,
        x = 1 - f * f;
      if (x > Number.EPSILON) {
        const M = Math.sqrt(x),
          E = Math.atan2(M, f * S);
        (_ = Math.sin(_ * E) / M), (o = Math.sin(o * E) / M);
      }
      const y = o * S;
      if (
        ((l = l * _ + h * y),
        (c = c * _ + p * y),
        (u = u * _ + g * y),
        (d = d * _ + m * y),
        _ === 1 - o)
      ) {
        const M = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        (l *= M), (c *= M), (u *= M), (d *= M);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = d);
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i],
      l = n[i + 1],
      c = n[i + 2],
      u = n[i + 3],
      d = s[a],
      h = s[a + 1],
      p = s[a + 2],
      g = s[a + 3];
    return (
      (e[t] = o * g + u * d + l * p - c * h),
      (e[t + 1] = l * g + u * h + c * d - o * p),
      (e[t + 2] = c * g + u * p + o * h - l * d),
      (e[t + 3] = u * g - o * d - l * h - c * p),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      u = o(i / 2),
      d = o(s / 2),
      h = l(n / 2),
      p = l(i / 2),
      g = l(s / 2);
    switch (a) {
      case "XYZ":
        (this._x = h * u * d + c * p * g),
          (this._y = c * p * d - h * u * g),
          (this._z = c * u * g + h * p * d),
          (this._w = c * u * d - h * p * g);
        break;
      case "YXZ":
        (this._x = h * u * d + c * p * g),
          (this._y = c * p * d - h * u * g),
          (this._z = c * u * g - h * p * d),
          (this._w = c * u * d + h * p * g);
        break;
      case "ZXY":
        (this._x = h * u * d - c * p * g),
          (this._y = c * p * d + h * u * g),
          (this._z = c * u * g + h * p * d),
          (this._w = c * u * d - h * p * g);
        break;
      case "ZYX":
        (this._x = h * u * d - c * p * g),
          (this._y = c * p * d + h * u * g),
          (this._z = c * u * g - h * p * d),
          (this._w = c * u * d + h * p * g);
        break;
      case "YZX":
        (this._x = h * u * d + c * p * g),
          (this._y = c * p * d + h * u * g),
          (this._z = c * u * g - h * p * d),
          (this._w = c * u * d - h * p * g);
        break;
      case "XZY":
        (this._x = h * u * d - c * p * g),
          (this._y = c * p * d - h * u * g),
          (this._z = c * u * g + h * p * d),
          (this._w = c * u * d + h * p * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      s = t[8],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      d = t[10],
      h = n + o + d;
    if (h > 0) {
      const p = 0.5 / Math.sqrt(h + 1);
      (this._w = 0.25 / p),
        (this._x = (u - l) * p),
        (this._y = (s - c) * p),
        (this._z = (a - i) * p);
    } else if (n > o && n > d) {
      const p = 2 * Math.sqrt(1 + n - o - d);
      (this._w = (u - l) / p),
        (this._x = 0.25 * p),
        (this._y = (i + a) / p),
        (this._z = (s + c) / p);
    } else if (o > d) {
      const p = 2 * Math.sqrt(1 + o - n - d);
      (this._w = (s - c) / p),
        (this._x = (i + a) / p),
        (this._y = 0.25 * p),
        (this._z = (l + u) / p);
    } else {
      const p = 2 * Math.sqrt(1 + d - n - o);
      (this._w = (a - i) / p),
        (this._x = (s + c) / p),
        (this._y = (l + u) / p),
        (this._z = 0.25 * p);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Wt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * o + i * c - s * l),
      (this._y = i * u + a * l + s * o - n * c),
      (this._z = s * u + a * c + n * l - i * o),
      (this._w = a * u - n * o - i * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      s = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = s), this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return (
        (this._w = p * a + t * this._w),
        (this._x = p * n + t * this._x),
        (this._y = p * i + t * this._y),
        (this._z = p * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, o),
      d = Math.sin((1 - t) * u) / c,
      h = Math.sin(t * u) / c;
    return (
      (this._w = a * d + this._w * h),
      (this._x = n * d + this._x * h),
      (this._y = i * d + this._y * h),
      (this._z = s * d + this._z * h),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class B {
  constructor(e = 0, t = 0, n = 0) {
    (B.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(ju.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ju.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * i),
      (this.y = s[1] * t + s[4] * n + s[7] * i),
      (this.z = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements,
      a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a),
      (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a),
      (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = l * t + a * i - o * n,
      u = l * n + o * t - s * i,
      d = l * i + s * n - a * t,
      h = -s * t - a * n - o * i;
    return (
      (this.x = c * l + h * -s + u * -o - d * -a),
      (this.y = u * l + h * -a + d * -s - c * -o),
      (this.z = d * l + h * -o + c * -a - u * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * i),
      (this.y = s[1] * t + s[5] * n + s[9] * i),
      (this.z = s[2] * t + s[6] * n + s[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = i * l - s * o),
      (this.y = s * a - n * l),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return il.copy(this).projectOnVector(e), this.sub(il);
  }
  reflect(e) {
    return this.sub(il.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Wt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const il = new B(),
  ju = new Er();
class lo {
  constructor(
    e = new B(1 / 0, 1 / 0, 1 / 0),
    t = new B(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(hi.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(hi.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = hi.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    if ((e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0))
      e.boundingBox === null && e.computeBoundingBox(),
        Dr.copy(e.boundingBox),
        Dr.applyMatrix4(e.matrixWorld),
        this.union(Dr);
    else {
      const i = e.geometry;
      if (i !== void 0)
        if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
          const s = i.attributes.position;
          for (let a = 0, o = s.count; a < o; a++)
            hi.fromBufferAttribute(s, a).applyMatrix4(e.matrixWorld),
              this.expandByPoint(hi);
        } else
          i.boundingBox === null && i.computeBoundingBox(),
            Dr.copy(i.boundingBox),
            Dr.applyMatrix4(e.matrixWorld),
            this.union(Dr);
    }
    const n = e.children;
    for (let i = 0, s = n.length; i < s; i++) this.expandByObject(n[i], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, hi),
      hi.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(As),
      bo.subVectors(this.max, As),
      Ur.subVectors(e.a, As),
      Ir.subVectors(e.b, As),
      Or.subVectors(e.c, As),
      wi.subVectors(Ir, Ur),
      Ai.subVectors(Or, Ir),
      $i.subVectors(Ur, Or);
    let t = [
      0,
      -wi.z,
      wi.y,
      0,
      -Ai.z,
      Ai.y,
      0,
      -$i.z,
      $i.y,
      wi.z,
      0,
      -wi.x,
      Ai.z,
      0,
      -Ai.x,
      $i.z,
      0,
      -$i.x,
      -wi.y,
      wi.x,
      0,
      -Ai.y,
      Ai.x,
      0,
      -$i.y,
      $i.x,
      0,
    ];
    return !rl(t, Ur, Ir, Or, bo) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !rl(t, Ur, Ir, Or, bo))
      ? !1
      : (wo.crossVectors(wi, Ai),
        (t = [wo.x, wo.y, wo.z]),
        rl(t, Ur, Ir, Or, bo));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, hi).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(hi).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (ui[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        ui[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        ui[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        ui[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        ui[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        ui[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        ui[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        ui[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(ui),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const ui = [
    new B(),
    new B(),
    new B(),
    new B(),
    new B(),
    new B(),
    new B(),
    new B(),
  ],
  hi = new B(),
  Dr = new lo(),
  Ur = new B(),
  Ir = new B(),
  Or = new B(),
  wi = new B(),
  Ai = new B(),
  $i = new B(),
  As = new B(),
  bo = new B(),
  wo = new B(),
  Zi = new B();
function rl(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    Zi.fromArray(r, s);
    const o =
        i.x * Math.abs(Zi.x) + i.y * Math.abs(Zi.y) + i.z * Math.abs(Zi.z),
      l = e.dot(Zi),
      c = t.dot(Zi),
      u = n.dot(Zi);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
  }
  return !0;
}
const L_ = new lo(),
  Rs = new B(),
  sl = new B();
class Ea {
  constructor(e = new B(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : L_.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Rs.subVectors(e, this.center);
    const t = Rs.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Rs, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (sl.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Rs.copy(e.center).add(sl)),
            this.expandByPoint(Rs.copy(e.center).sub(sl))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const fi = new B(),
  ol = new B(),
  Ao = new B(),
  Ri = new B(),
  al = new B(),
  Ro = new B(),
  ll = new B();
class Td {
  constructor(e = new B(), t = new B(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, fi)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = fi.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (fi.copy(this.origin).addScaledVector(this.direction, t),
        fi.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ol.copy(e).add(t).multiplyScalar(0.5),
      Ao.copy(t).sub(e).normalize(),
      Ri.copy(this.origin).sub(ol);
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Ao),
      o = Ri.dot(this.direction),
      l = -Ri.dot(Ao),
      c = Ri.lengthSq(),
      u = Math.abs(1 - a * a);
    let d, h, p, g;
    if (u > 0)
      if (((d = a * l - o), (h = a * o - l), (g = s * u), d >= 0))
        if (h >= -g)
          if (h <= g) {
            const m = 1 / u;
            (d *= m),
              (h *= m),
              (p = d * (d + a * h + 2 * o) + h * (a * d + h + 2 * l) + c);
          } else
            (h = s),
              (d = Math.max(0, -(a * h + o))),
              (p = -d * d + h * (h + 2 * l) + c);
        else
          (h = -s),
            (d = Math.max(0, -(a * h + o))),
            (p = -d * d + h * (h + 2 * l) + c);
      else
        h <= -g
          ? ((d = Math.max(0, -(-a * s + o))),
            (h = d > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (p = -d * d + h * (h + 2 * l) + c))
          : h <= g
          ? ((d = 0),
            (h = Math.min(Math.max(-s, -l), s)),
            (p = h * (h + 2 * l) + c))
          : ((d = Math.max(0, -(a * s + o))),
            (h = d > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (p = -d * d + h * (h + 2 * l) + c));
    else
      (h = a > 0 ? -s : s),
        (d = Math.max(0, -(a * h + o))),
        (p = -d * d + h * (h + 2 * l) + c);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, d),
      i && i.copy(ol).addScaledVector(Ao, h),
      p
    );
  }
  intersectSphere(e, t) {
    fi.subVectors(e.center, this.origin);
    const n = fi.dot(this.direction),
      i = fi.dot(fi) - n * n,
      s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i),
      o = n - a,
      l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      d = 1 / this.direction.z,
      h = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - h.x) * c), (i = (e.max.x - h.x) * c))
        : ((n = (e.max.x - h.x) * c), (i = (e.min.x - h.x) * c)),
      u >= 0
        ? ((s = (e.min.y - h.y) * u), (a = (e.max.y - h.y) * u))
        : ((s = (e.max.y - h.y) * u), (a = (e.min.y - h.y) * u)),
      n > a ||
      s > i ||
      ((s > n || isNaN(n)) && (n = s),
      (a < i || isNaN(i)) && (i = a),
      d >= 0
        ? ((o = (e.min.z - h.z) * d), (l = (e.max.z - h.z) * d))
        : ((o = (e.max.z - h.z) * d), (l = (e.min.z - h.z) * d)),
      n > l || o > i) ||
      ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, fi) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    al.subVectors(t, e), Ro.subVectors(n, e), ll.crossVectors(al, Ro);
    let a = this.direction.dot(ll),
      o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    Ri.subVectors(this.origin, e);
    const l = o * this.direction.dot(Ro.crossVectors(Ri, Ro));
    if (l < 0) return null;
    const c = o * this.direction.dot(al.cross(Ri));
    if (c < 0 || l + c > a) return null;
    const u = -o * Ri.dot(ll);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Mt {
  constructor() {
    (Mt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, a, o, l, c, u, d, h, p, g, m, _) {
    const f = this.elements;
    return (
      (f[0] = e),
      (f[4] = t),
      (f[8] = n),
      (f[12] = i),
      (f[1] = s),
      (f[5] = a),
      (f[9] = o),
      (f[13] = l),
      (f[2] = c),
      (f[6] = u),
      (f[10] = d),
      (f[14] = h),
      (f[3] = p),
      (f[7] = g),
      (f[11] = m),
      (f[15] = _),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Mt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Nr.setFromMatrixColumn(e, 0).length(),
      s = 1 / Nr.setFromMatrixColumn(e, 1).length(),
      a = 1 / Nr.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      u = Math.cos(s),
      d = Math.sin(s);
    if (e.order === "XYZ") {
      const h = a * u,
        p = a * d,
        g = o * u,
        m = o * d;
      (t[0] = l * u),
        (t[4] = -l * d),
        (t[8] = c),
        (t[1] = p + g * c),
        (t[5] = h - m * c),
        (t[9] = -o * l),
        (t[2] = m - h * c),
        (t[6] = g + p * c),
        (t[10] = a * l);
    } else if (e.order === "YXZ") {
      const h = l * u,
        p = l * d,
        g = c * u,
        m = c * d;
      (t[0] = h + m * o),
        (t[4] = g * o - p),
        (t[8] = a * c),
        (t[1] = a * d),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = p * o - g),
        (t[6] = m + h * o),
        (t[10] = a * l);
    } else if (e.order === "ZXY") {
      const h = l * u,
        p = l * d,
        g = c * u,
        m = c * d;
      (t[0] = h - m * o),
        (t[4] = -a * d),
        (t[8] = g + p * o),
        (t[1] = p + g * o),
        (t[5] = a * u),
        (t[9] = m - h * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l);
    } else if (e.order === "ZYX") {
      const h = a * u,
        p = a * d,
        g = o * u,
        m = o * d;
      (t[0] = l * u),
        (t[4] = g * c - p),
        (t[8] = h * c + m),
        (t[1] = l * d),
        (t[5] = m * c + h),
        (t[9] = p * c - g),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l);
    } else if (e.order === "YZX") {
      const h = a * l,
        p = a * c,
        g = o * l,
        m = o * c;
      (t[0] = l * u),
        (t[4] = m - h * d),
        (t[8] = g * d + p),
        (t[1] = d),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -c * u),
        (t[6] = p * d + g),
        (t[10] = h - m * d);
    } else if (e.order === "XZY") {
      const h = a * l,
        p = a * c,
        g = o * l,
        m = o * c;
      (t[0] = l * u),
        (t[4] = -d),
        (t[8] = c * u),
        (t[1] = h * d + m),
        (t[5] = a * u),
        (t[9] = p * d - g),
        (t[2] = g * d - p),
        (t[6] = o * u),
        (t[10] = m * d + h);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(D_, e, U_);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      mn.subVectors(e, t),
      mn.lengthSq() === 0 && (mn.z = 1),
      mn.normalize(),
      Ci.crossVectors(n, mn),
      Ci.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (mn.x += 1e-4) : (mn.z += 1e-4),
        mn.normalize(),
        Ci.crossVectors(n, mn)),
      Ci.normalize(),
      Co.crossVectors(mn, Ci),
      (i[0] = Ci.x),
      (i[4] = Co.x),
      (i[8] = mn.x),
      (i[1] = Ci.y),
      (i[5] = Co.y),
      (i[9] = mn.y),
      (i[2] = Ci.z),
      (i[6] = Co.z),
      (i[10] = mn.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      d = n[5],
      h = n[9],
      p = n[13],
      g = n[2],
      m = n[6],
      _ = n[10],
      f = n[14],
      S = n[3],
      x = n[7],
      y = n[11],
      M = n[15],
      E = i[0],
      w = i[4],
      P = i[8],
      v = i[12],
      T = i[1],
      G = i[5],
      O = i[9],
      I = i[13],
      F = i[2],
      k = i[6],
      K = i[10],
      H = i[14],
      W = i[3],
      Q = i[7],
      C = i[11],
      fe = i[15];
    return (
      (s[0] = a * E + o * T + l * F + c * W),
      (s[4] = a * w + o * G + l * k + c * Q),
      (s[8] = a * P + o * O + l * K + c * C),
      (s[12] = a * v + o * I + l * H + c * fe),
      (s[1] = u * E + d * T + h * F + p * W),
      (s[5] = u * w + d * G + h * k + p * Q),
      (s[9] = u * P + d * O + h * K + p * C),
      (s[13] = u * v + d * I + h * H + p * fe),
      (s[2] = g * E + m * T + _ * F + f * W),
      (s[6] = g * w + m * G + _ * k + f * Q),
      (s[10] = g * P + m * O + _ * K + f * C),
      (s[14] = g * v + m * I + _ * H + f * fe),
      (s[3] = S * E + x * T + y * F + M * W),
      (s[7] = S * w + x * G + y * k + M * Q),
      (s[11] = S * P + x * O + y * K + M * C),
      (s[15] = S * v + x * I + y * H + M * fe),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      d = e[6],
      h = e[10],
      p = e[14],
      g = e[3],
      m = e[7],
      _ = e[11],
      f = e[15];
    return (
      g *
        (+s * l * d -
          i * c * d -
          s * o * h +
          n * c * h +
          i * o * p -
          n * l * p) +
      m *
        (+t * l * p -
          t * c * h +
          s * a * h -
          i * a * p +
          i * c * u -
          s * l * u) +
      _ *
        (+t * c * d -
          t * o * p -
          s * a * d +
          n * a * p +
          s * o * u -
          n * c * u) +
      f *
        (-i * o * u - t * l * d + t * o * h + i * a * d - n * a * h + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      d = e[9],
      h = e[10],
      p = e[11],
      g = e[12],
      m = e[13],
      _ = e[14],
      f = e[15],
      S = d * _ * c - m * h * c + m * l * p - o * _ * p - d * l * f + o * h * f,
      x = g * h * c - u * _ * c - g * l * p + a * _ * p + u * l * f - a * h * f,
      y = u * m * c - g * d * c + g * o * p - a * m * p - u * o * f + a * d * f,
      M = g * d * l - u * m * l - g * o * h + a * m * h + u * o * _ - a * d * _,
      E = t * S + n * x + i * y + s * M;
    if (E === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / E;
    return (
      (e[0] = S * w),
      (e[1] =
        (m * h * s -
          d * _ * s -
          m * i * p +
          n * _ * p +
          d * i * f -
          n * h * f) *
        w),
      (e[2] =
        (o * _ * s -
          m * l * s +
          m * i * c -
          n * _ * c -
          o * i * f +
          n * l * f) *
        w),
      (e[3] =
        (d * l * s -
          o * h * s -
          d * i * c +
          n * h * c +
          o * i * p -
          n * l * p) *
        w),
      (e[4] = x * w),
      (e[5] =
        (u * _ * s -
          g * h * s +
          g * i * p -
          t * _ * p -
          u * i * f +
          t * h * f) *
        w),
      (e[6] =
        (g * l * s -
          a * _ * s -
          g * i * c +
          t * _ * c +
          a * i * f -
          t * l * f) *
        w),
      (e[7] =
        (a * h * s -
          u * l * s +
          u * i * c -
          t * h * c -
          a * i * p +
          t * l * p) *
        w),
      (e[8] = y * w),
      (e[9] =
        (g * d * s -
          u * m * s -
          g * n * p +
          t * m * p +
          u * n * f -
          t * d * f) *
        w),
      (e[10] =
        (a * m * s -
          g * o * s +
          g * n * c -
          t * m * c -
          a * n * f +
          t * o * f) *
        w),
      (e[11] =
        (u * o * s -
          a * d * s -
          u * n * c +
          t * d * c +
          a * n * p -
          t * o * p) *
        w),
      (e[12] = M * w),
      (e[13] =
        (u * m * i -
          g * d * i +
          g * n * h -
          t * m * h -
          u * n * _ +
          t * d * _) *
        w),
      (e[14] =
        (g * o * i -
          a * m * i -
          g * n * l +
          t * m * l +
          a * n * _ -
          t * o * _) *
        w),
      (e[15] =
        (a * d * i -
          u * o * i +
          u * n * l -
          t * d * l -
          a * n * h +
          t * o * h) *
        w),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = 1 - n,
      a = e.x,
      o = e.y,
      l = e.z,
      c = s * a,
      u = s * o;
    return (
      this.set(
        c * a + n,
        c * o - i * l,
        c * l + i * o,
        0,
        c * o + i * l,
        u * o + n,
        u * l - i * a,
        0,
        c * l - i * o,
        u * l + i * a,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = s + s,
      u = a + a,
      d = o + o,
      h = s * c,
      p = s * u,
      g = s * d,
      m = a * u,
      _ = a * d,
      f = o * d,
      S = l * c,
      x = l * u,
      y = l * d,
      M = n.x,
      E = n.y,
      w = n.z;
    return (
      (i[0] = (1 - (m + f)) * M),
      (i[1] = (p + y) * M),
      (i[2] = (g - x) * M),
      (i[3] = 0),
      (i[4] = (p - y) * E),
      (i[5] = (1 - (h + f)) * E),
      (i[6] = (_ + S) * E),
      (i[7] = 0),
      (i[8] = (g + x) * w),
      (i[9] = (_ - S) * w),
      (i[10] = (1 - (h + m)) * w),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Nr.set(i[0], i[1], i[2]).length();
    const a = Nr.set(i[4], i[5], i[6]).length(),
      o = Nr.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      Bn.copy(this);
    const c = 1 / s,
      u = 1 / a,
      d = 1 / o;
    return (
      (Bn.elements[0] *= c),
      (Bn.elements[1] *= c),
      (Bn.elements[2] *= c),
      (Bn.elements[4] *= u),
      (Bn.elements[5] *= u),
      (Bn.elements[6] *= u),
      (Bn.elements[8] *= d),
      (Bn.elements[9] *= d),
      (Bn.elements[10] *= d),
      t.setFromRotationMatrix(Bn),
      (n.x = s),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, i, s, a) {
    const o = this.elements,
      l = (2 * s) / (t - e),
      c = (2 * s) / (n - i),
      u = (t + e) / (t - e),
      d = (n + i) / (n - i),
      h = -(a + s) / (a - s),
      p = (-2 * a * s) / (a - s);
    return (
      (o[0] = l),
      (o[4] = 0),
      (o[8] = u),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = c),
      (o[9] = d),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = h),
      (o[14] = p),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, s, a) {
    const o = this.elements,
      l = 1 / (t - e),
      c = 1 / (n - i),
      u = 1 / (a - s),
      d = (t + e) * l,
      h = (n + i) * c,
      p = (a + s) * u;
    return (
      (o[0] = 2 * l),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -d),
      (o[1] = 0),
      (o[5] = 2 * c),
      (o[9] = 0),
      (o[13] = -h),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = -2 * u),
      (o[14] = -p),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Nr = new B(),
  Bn = new Mt(),
  D_ = new B(0, 0, 0),
  U_ = new B(1, 1, 1),
  Ci = new B(),
  Co = new B(),
  mn = new B(),
  Ku = new Mt(),
  $u = new Er();
class co {
  constructor(e = 0, t = 0, n = 0, i = co.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      s = i[0],
      a = i[4],
      o = i[8],
      l = i[1],
      c = i[5],
      u = i[9],
      d = i[2],
      h = i[6],
      p = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(Wt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, p)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(h, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Wt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, p)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-d, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Wt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-d, p)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Wt(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(h, p)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case "YZX":
        (this._z = Math.asin(Wt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-d, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, p)));
        break;
      case "XZY":
        (this._z = Math.asin(-Wt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(h, c)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-u, p)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Ku.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ku, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return $u.setFromEuler(this), this.setFromQuaternion($u, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
co.DEFAULT_ORDER = "XYZ";
class bd {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let I_ = 0;
const Zu = new B(),
  Fr = new Er(),
  di = new Mt(),
  Po = new B(),
  Cs = new B(),
  O_ = new B(),
  N_ = new Er(),
  Ju = new B(1, 0, 0),
  Qu = new B(0, 1, 0),
  eh = new B(0, 0, 1),
  F_ = { type: "added" },
  th = { type: "removed" };
class kt extends br {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: I_++ }),
      (this.uuid = ao()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = kt.DEFAULT_UP.clone());
    const e = new B(),
      t = new co(),
      n = new Er(),
      i = new B(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Mt() },
        normalMatrix: { value: new Qe() },
      }),
      (this.matrix = new Mt()),
      (this.matrixWorld = new Mt()),
      (this.matrixAutoUpdate = kt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new bd()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Fr.setFromAxisAngle(e, t), this.quaternion.multiply(Fr), this;
  }
  rotateOnWorldAxis(e, t) {
    return Fr.setFromAxisAngle(e, t), this.quaternion.premultiply(Fr), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ju, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Qu, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(eh, e);
  }
  translateOnAxis(e, t) {
    return (
      Zu.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Zu.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Ju, e);
  }
  translateY(e) {
    return this.translateOnAxis(Qu, e);
  }
  translateZ(e) {
    return this.translateOnAxis(eh, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(di.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Po.copy(e) : Po.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Cs.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? di.lookAt(Cs, Po, this.up)
        : di.lookAt(Po, Cs, this.up),
      this.quaternion.setFromRotationMatrix(di),
      i &&
        (di.extractRotation(i.matrixWorld),
        Fr.setFromRotationMatrix(di),
        this.quaternion.premultiply(Fr.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(F_))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(th)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(th);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      di.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), di.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(di),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const a = this.children[i].getObjectsByProperty(e, t);
      a.length > 0 && (n = n.concat(a));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Cs, e, O_), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Cs, N_, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const d = l[c];
            s(e.shapes, d);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        i.material = o;
      } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        u = a(e.images),
        d = a(e.shapes),
        h = a(e.skeletons),
        p = a(e.animations),
        g = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        d.length > 0 && (n.shapes = d),
        h.length > 0 && (n.skeletons = h),
        p.length > 0 && (n.animations = p),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
kt.DEFAULT_UP = new B(0, 1, 0);
kt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const kn = new B(),
  pi = new B(),
  cl = new B(),
  mi = new B(),
  zr = new B(),
  Br = new B(),
  nh = new B(),
  ul = new B(),
  hl = new B(),
  fl = new B();
let Lo = !1;
class Xn {
  constructor(e = new B(), t = new B(), n = new B()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), kn.subVectors(e, t), i.cross(kn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    kn.subVectors(i, t), pi.subVectors(n, t), cl.subVectors(e, t);
    const a = kn.dot(kn),
      o = kn.dot(pi),
      l = kn.dot(cl),
      c = pi.dot(pi),
      u = pi.dot(cl),
      d = a * c - o * o;
    if (d === 0) return s.set(-2, -1, -1);
    const h = 1 / d,
      p = (c * l - o * u) * h,
      g = (a * u - o * l) * h;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, mi),
      mi.x >= 0 && mi.y >= 0 && mi.x + mi.y <= 1
    );
  }
  static getUV(e, t, n, i, s, a, o, l) {
    return (
      Lo === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (Lo = !0)),
      this.getInterpolation(e, t, n, i, s, a, o, l)
    );
  }
  static getInterpolation(e, t, n, i, s, a, o, l) {
    return (
      this.getBarycoord(e, t, n, i, mi),
      l.setScalar(0),
      l.addScaledVector(s, mi.x),
      l.addScaledVector(a, mi.y),
      l.addScaledVector(o, mi.z),
      l
    );
  }
  static isFrontFacing(e, t, n, i) {
    return kn.subVectors(n, t), pi.subVectors(e, t), kn.cross(pi).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      kn.subVectors(this.c, this.b),
      pi.subVectors(this.a, this.b),
      kn.cross(pi).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Xn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Xn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return (
      Lo === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (Lo = !0)),
      Xn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s)
    );
  }
  getInterpolation(e, t, n, i, s) {
    return Xn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Xn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Xn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      s = this.c;
    let a, o;
    zr.subVectors(i, n), Br.subVectors(s, n), ul.subVectors(e, n);
    const l = zr.dot(ul),
      c = Br.dot(ul);
    if (l <= 0 && c <= 0) return t.copy(n);
    hl.subVectors(e, i);
    const u = zr.dot(hl),
      d = Br.dot(hl);
    if (u >= 0 && d <= u) return t.copy(i);
    const h = l * d - u * c;
    if (h <= 0 && l >= 0 && u <= 0)
      return (a = l / (l - u)), t.copy(n).addScaledVector(zr, a);
    fl.subVectors(e, s);
    const p = zr.dot(fl),
      g = Br.dot(fl);
    if (g >= 0 && p <= g) return t.copy(s);
    const m = p * c - l * g;
    if (m <= 0 && c >= 0 && g <= 0)
      return (o = c / (c - g)), t.copy(n).addScaledVector(Br, o);
    const _ = u * g - p * d;
    if (_ <= 0 && d - u >= 0 && p - g >= 0)
      return (
        nh.subVectors(s, i),
        (o = (d - u) / (d - u + (p - g))),
        t.copy(i).addScaledVector(nh, o)
      );
    const f = 1 / (_ + m + h);
    return (
      (a = m * f),
      (o = h * f),
      t.copy(n).addScaledVector(zr, a).addScaledVector(Br, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let z_ = 0;
class Ss extends br {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: z_++ }),
      (this.uuid = ao()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = os),
      (this.side = Wi),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = fd),
      (this.blendDst = dd),
      (this.blendEquation = Kr),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = $l),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = M_),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Za),
      (this.stencilZFail = Za),
      (this.stencilZPass = Za),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== os && (n.blending = this.blending),
      this.side !== Wi && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures),
        a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const wd = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Gn = { h: 0, s: 0, l: 0 },
  Do = { h: 0, s: 0, l: 0 };
function dl(r, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? r + (e - r) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? r + (e - r) * 6 * (2 / 3 - t)
      : r
  );
}
class nt {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Xe) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      zn.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = zn.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      zn.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = zn.workingColorSpace) {
    if (((e = S_(e, 1)), (t = Wt(t, 0, 1)), (n = Wt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - s;
      (this.r = dl(a, s, e + 1 / 3)),
        (this.g = dl(a, s, e)),
        (this.b = dl(a, s, e - 1 / 3));
    }
    return zn.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Xe) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const a = i[1],
        o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = i[1],
        a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Xe) {
    const n = wd[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = ls(e.r)), (this.g = ls(e.g)), (this.b = ls(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = tl(e.r)), (this.g = tl(e.g)), (this.b = tl(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Xe) {
    return (
      zn.fromWorkingColorSpace(Ht.copy(this), e),
      Math.round(Wt(Ht.r * 255, 0, 255)) * 65536 +
        Math.round(Wt(Ht.g * 255, 0, 255)) * 256 +
        Math.round(Wt(Ht.b * 255, 0, 255))
    );
  }
  getHexString(e = Xe) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = zn.workingColorSpace) {
    zn.fromWorkingColorSpace(Ht.copy(this), t);
    const n = Ht.r,
      i = Ht.g,
      s = Ht.b,
      a = Math.max(n, i, s),
      o = Math.min(n, i, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a) (l = 0), (c = 0);
    else {
      const d = a - o;
      switch (((c = u <= 0.5 ? d / (a + o) : d / (2 - a - o)), a)) {
        case n:
          l = (i - s) / d + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / d + 2;
          break;
        case s:
          l = (n - i) / d + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = zn.workingColorSpace) {
    return (
      zn.fromWorkingColorSpace(Ht.copy(this), t),
      (e.r = Ht.r),
      (e.g = Ht.g),
      (e.b = Ht.b),
      e
    );
  }
  getStyle(e = Xe) {
    zn.fromWorkingColorSpace(Ht.copy(this), e);
    const t = Ht.r,
      n = Ht.g,
      i = Ht.b;
    return e !== Xe
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          i * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(Gn),
      (Gn.h += e),
      (Gn.s += t),
      (Gn.l += n),
      this.setHSL(Gn.h, Gn.s, Gn.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Gn), e.getHSL(Do);
    const n = Qa(Gn.h, Do.h, t),
      i = Qa(Gn.s, Do.s, t),
      s = Qa(Gn.l, Do.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      i = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * i),
      (this.g = s[1] * t + s[4] * n + s[7] * i),
      (this.b = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ht = new nt();
nt.NAMES = wd;
class Ad extends Ss {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new nt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = pd),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Tt = new B(),
  Uo = new We();
class Nn {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Wu),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Uo.fromBufferAttribute(this, t),
          Uo.applyMatrix3(e),
          this.setXY(t, Uo.x, Uo.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Tt.fromBufferAttribute(this, t),
          Tt.applyMatrix3(e),
          this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t),
        Tt.applyMatrix4(e),
        this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t),
        Tt.applyNormalMatrix(e),
        this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t),
        Tt.transformDirection(e),
        this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = To(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = pn(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = To(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = pn(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = To(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = pn(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = To(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = pn(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = pn(t, this.array)), (n = pn(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = pn(t, this.array)),
        (n = pn(n, this.array)),
        (i = pn(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = pn(t, this.array)),
        (n = pn(n, this.array)),
        (i = pn(i, this.array)),
        (s = pn(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Wu && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      "THREE.BufferAttribute: copyColorsArray() was removed in r144."
    );
  }
  copyVector2sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
    );
  }
  copyVector3sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
    );
  }
  copyVector4sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
    );
  }
}
class Rd extends Nn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Cd extends Nn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class bn extends Nn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let B_ = 0;
const An = new Mt(),
  pl = new kt(),
  kr = new B(),
  _n = new lo(),
  Ps = new lo(),
  Ut = new B();
class li extends br {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: B_++ }),
      (this.uuid = ao()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Md(e) ? Cd : Rd)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Qe().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return An.makeRotationFromQuaternion(e), this.applyMatrix4(An), this;
  }
  rotateX(e) {
    return An.makeRotationX(e), this.applyMatrix4(An), this;
  }
  rotateY(e) {
    return An.makeRotationY(e), this.applyMatrix4(An), this;
  }
  rotateZ(e) {
    return An.makeRotationZ(e), this.applyMatrix4(An), this;
  }
  translate(e, t, n) {
    return An.makeTranslation(e, t, n), this.applyMatrix4(An), this;
  }
  scale(e, t, n) {
    return An.makeScale(e, t, n), this.applyMatrix4(An), this;
  }
  lookAt(e) {
    return pl.lookAt(e), pl.updateMatrix(), this.applyMatrix4(pl.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(kr).negate(),
      this.translate(kr.x, kr.y, kr.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new bn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new lo());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new B(-1 / 0, -1 / 0, -1 / 0),
          new B(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          _n.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (Ut.addVectors(this.boundingBox.min, _n.min),
                this.boundingBox.expandByPoint(Ut),
                Ut.addVectors(this.boundingBox.max, _n.max),
                this.boundingBox.expandByPoint(Ut))
              : (this.boundingBox.expandByPoint(_n.min),
                this.boundingBox.expandByPoint(_n.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ea());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((_n.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Ps.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (Ut.addVectors(_n.min, Ps.min),
                _n.expandByPoint(Ut),
                Ut.addVectors(_n.max, Ps.max),
                _n.expandByPoint(Ut))
              : (_n.expandByPoint(Ps.min), _n.expandByPoint(Ps.max));
        }
      _n.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        Ut.fromBufferAttribute(e, s),
          (i = Math.max(i, n.distanceToSquared(Ut)));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            Ut.fromBufferAttribute(o, c),
              l && (kr.fromBufferAttribute(e, c), Ut.add(kr)),
              (i = Math.max(i, n.distanceToSquared(Ut)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      s = t.normal.array,
      a = t.uv.array,
      o = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Nn(new Float32Array(4 * o), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      u = [];
    for (let T = 0; T < o; T++) (c[T] = new B()), (u[T] = new B());
    const d = new B(),
      h = new B(),
      p = new B(),
      g = new We(),
      m = new We(),
      _ = new We(),
      f = new B(),
      S = new B();
    function x(T, G, O) {
      d.fromArray(i, T * 3),
        h.fromArray(i, G * 3),
        p.fromArray(i, O * 3),
        g.fromArray(a, T * 2),
        m.fromArray(a, G * 2),
        _.fromArray(a, O * 2),
        h.sub(d),
        p.sub(d),
        m.sub(g),
        _.sub(g);
      const I = 1 / (m.x * _.y - _.x * m.y);
      isFinite(I) &&
        (f
          .copy(h)
          .multiplyScalar(_.y)
          .addScaledVector(p, -m.y)
          .multiplyScalar(I),
        S.copy(p)
          .multiplyScalar(m.x)
          .addScaledVector(h, -_.x)
          .multiplyScalar(I),
        c[T].add(f),
        c[G].add(f),
        c[O].add(f),
        u[T].add(S),
        u[G].add(S),
        u[O].add(S));
    }
    let y = this.groups;
    y.length === 0 && (y = [{ start: 0, count: n.length }]);
    for (let T = 0, G = y.length; T < G; ++T) {
      const O = y[T],
        I = O.start,
        F = O.count;
      for (let k = I, K = I + F; k < K; k += 3) x(n[k + 0], n[k + 1], n[k + 2]);
    }
    const M = new B(),
      E = new B(),
      w = new B(),
      P = new B();
    function v(T) {
      w.fromArray(s, T * 3), P.copy(w);
      const G = c[T];
      M.copy(G),
        M.sub(w.multiplyScalar(w.dot(G))).normalize(),
        E.crossVectors(P, G);
      const I = E.dot(u[T]) < 0 ? -1 : 1;
      (l[T * 4] = M.x),
        (l[T * 4 + 1] = M.y),
        (l[T * 4 + 2] = M.z),
        (l[T * 4 + 3] = I);
    }
    for (let T = 0, G = y.length; T < G; ++T) {
      const O = y[T],
        I = O.start,
        F = O.count;
      for (let k = I, K = I + F; k < K; k += 3)
        v(n[k + 0]), v(n[k + 1]), v(n[k + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Nn(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let h = 0, p = n.count; h < p; h++) n.setXYZ(h, 0, 0, 0);
      const i = new B(),
        s = new B(),
        a = new B(),
        o = new B(),
        l = new B(),
        c = new B(),
        u = new B(),
        d = new B();
      if (e)
        for (let h = 0, p = e.count; h < p; h += 3) {
          const g = e.getX(h + 0),
            m = e.getX(h + 1),
            _ = e.getX(h + 2);
          i.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, m),
            a.fromBufferAttribute(t, _),
            u.subVectors(a, s),
            d.subVectors(i, s),
            u.cross(d),
            o.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, m),
            c.fromBufferAttribute(n, _),
            o.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(g, o.x, o.y, o.z),
            n.setXYZ(m, l.x, l.y, l.z),
            n.setXYZ(_, c.x, c.y, c.z);
        }
      else
        for (let h = 0, p = t.count; h < p; h += 3)
          i.fromBufferAttribute(t, h + 0),
            s.fromBufferAttribute(t, h + 1),
            a.fromBufferAttribute(t, h + 2),
            u.subVectors(a, s),
            d.subVectors(i, s),
            u.cross(d),
            n.setXYZ(h + 0, u.x, u.y, u.z),
            n.setXYZ(h + 1, u.x, u.y, u.z),
            n.setXYZ(h + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Ut.fromBufferAttribute(e, t),
        Ut.normalize(),
        e.setXYZ(t, Ut.x, Ut.y, Ut.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        u = o.itemSize,
        d = o.normalized,
        h = new c.constructor(l.length * u);
      let p = 0,
        g = 0;
      for (let m = 0, _ = l.length; m < _; m++) {
        o.isInterleavedBufferAttribute
          ? (p = l[m] * o.data.stride + o.offset)
          : (p = l[m] * u);
        for (let f = 0; f < u; f++) h[g++] = c[p++];
      }
      return new Nn(h, u, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new li(),
      n = this.index.array,
      i = this.attributes;
    for (const o in i) {
      const l = i[o],
        c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [],
        c = s[o];
      for (let u = 0, d = c.length; u < d; u++) {
        const h = c[u],
          p = e(h, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let d = 0, h = c.length; d < h; d++) {
        const p = c[d];
        u.push(p.toJSON(e.data));
      }
      u.length > 0 && ((i[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        d = s[c];
      for (let h = 0, p = d.length; h < p; h++) u.push(d[h].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const d = a[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ih = new Mt(),
  Jn = new Td(),
  Io = new Ea(),
  rh = new B(),
  Gr = new B(),
  Hr = new B(),
  Vr = new B(),
  ml = new B(),
  Oo = new B(),
  No = new We(),
  Fo = new We(),
  zo = new We(),
  sh = new B(),
  oh = new B(),
  ah = new B(),
  Bo = new B(),
  ko = new B();
class ii extends kt {
  constructor(e = new li(), t = new Ad()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      s = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Oo.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l],
          d = s[l];
        u !== 0 &&
          (ml.fromBufferAttribute(d, e),
          a ? Oo.addScaledVector(ml, u) : Oo.addScaledVector(ml.sub(t), u));
      }
      t.add(Oo);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      s = this.matrixWorld;
    i !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Io.copy(n.boundingSphere),
      Io.applyMatrix4(s),
      Jn.copy(e.ray).recast(e.near),
      !(
        Io.containsPoint(Jn.origin) === !1 &&
        (Jn.intersectSphere(Io, rh) === null ||
          Jn.origin.distanceToSquared(rh) > (e.far - e.near) ** 2)
      ) &&
        (ih.copy(s).invert(),
        Jn.copy(e.ray).applyMatrix4(ih),
        !(n.boundingBox !== null && Jn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t)));
  }
  _computeIntersections(e, t) {
    let n;
    const i = this.geometry,
      s = this.material,
      a = i.index,
      o = i.attributes.position,
      l = i.attributes.uv,
      c = i.attributes.uv1,
      u = i.attributes.normal,
      d = i.groups,
      h = i.drawRange;
    if (a !== null)
      if (Array.isArray(s))
        for (let p = 0, g = d.length; p < g; p++) {
          const m = d[p],
            _ = s[m.materialIndex],
            f = Math.max(m.start, h.start),
            S = Math.min(
              a.count,
              Math.min(m.start + m.count, h.start + h.count)
            );
          for (let x = f, y = S; x < y; x += 3) {
            const M = a.getX(x),
              E = a.getX(x + 1),
              w = a.getX(x + 2);
            (n = Go(this, _, e, Jn, l, c, u, M, E, w)),
              n &&
                ((n.faceIndex = Math.floor(x / 3)),
                (n.face.materialIndex = m.materialIndex),
                t.push(n));
          }
        }
      else {
        const p = Math.max(0, h.start),
          g = Math.min(a.count, h.start + h.count);
        for (let m = p, _ = g; m < _; m += 3) {
          const f = a.getX(m),
            S = a.getX(m + 1),
            x = a.getX(m + 2);
          (n = Go(this, s, e, Jn, l, c, u, f, S, x)),
            n && ((n.faceIndex = Math.floor(m / 3)), t.push(n));
        }
      }
    else if (o !== void 0)
      if (Array.isArray(s))
        for (let p = 0, g = d.length; p < g; p++) {
          const m = d[p],
            _ = s[m.materialIndex],
            f = Math.max(m.start, h.start),
            S = Math.min(
              o.count,
              Math.min(m.start + m.count, h.start + h.count)
            );
          for (let x = f, y = S; x < y; x += 3) {
            const M = x,
              E = x + 1,
              w = x + 2;
            (n = Go(this, _, e, Jn, l, c, u, M, E, w)),
              n &&
                ((n.faceIndex = Math.floor(x / 3)),
                (n.face.materialIndex = m.materialIndex),
                t.push(n));
          }
        }
      else {
        const p = Math.max(0, h.start),
          g = Math.min(o.count, h.start + h.count);
        for (let m = p, _ = g; m < _; m += 3) {
          const f = m,
            S = m + 1,
            x = m + 2;
          (n = Go(this, s, e, Jn, l, c, u, f, S, x)),
            n && ((n.faceIndex = Math.floor(m / 3)), t.push(n));
        }
      }
  }
}
function k_(r, e, t, n, i, s, a, o) {
  let l;
  if (
    (e.side === un
      ? (l = n.intersectTriangle(a, s, i, !0, o))
      : (l = n.intersectTriangle(i, s, a, e.side === Wi, o)),
    l === null)
  )
    return null;
  ko.copy(o), ko.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(ko);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: ko.clone(), object: r };
}
function Go(r, e, t, n, i, s, a, o, l, c) {
  r.getVertexPosition(o, Gr),
    r.getVertexPosition(l, Hr),
    r.getVertexPosition(c, Vr);
  const u = k_(r, e, t, n, Gr, Hr, Vr, Bo);
  if (u) {
    i &&
      (No.fromBufferAttribute(i, o),
      Fo.fromBufferAttribute(i, l),
      zo.fromBufferAttribute(i, c),
      (u.uv = Xn.getInterpolation(Bo, Gr, Hr, Vr, No, Fo, zo, new We()))),
      s &&
        (No.fromBufferAttribute(s, o),
        Fo.fromBufferAttribute(s, l),
        zo.fromBufferAttribute(s, c),
        (u.uv1 = Xn.getInterpolation(Bo, Gr, Hr, Vr, No, Fo, zo, new We())),
        (u.uv2 = u.uv1)),
      a &&
        (sh.fromBufferAttribute(a, o),
        oh.fromBufferAttribute(a, l),
        ah.fromBufferAttribute(a, c),
        (u.normal = Xn.getInterpolation(Bo, Gr, Hr, Vr, sh, oh, ah, new B())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = { a: o, b: l, c, normal: new B(), materialIndex: 0 };
    Xn.getNormal(Gr, Hr, Vr, d.normal), (u.face = d);
  }
  return u;
}
class uo extends li {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (a = Math.floor(a));
    const l = [],
      c = [],
      u = [],
      d = [];
    let h = 0,
      p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0),
      g("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, s, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new bn(c, 3)),
      this.setAttribute("normal", new bn(u, 3)),
      this.setAttribute("uv", new bn(d, 2));
    function g(m, _, f, S, x, y, M, E, w, P, v) {
      const T = y / w,
        G = M / P,
        O = y / 2,
        I = M / 2,
        F = E / 2,
        k = w + 1,
        K = P + 1;
      let H = 0,
        W = 0;
      const Q = new B();
      for (let C = 0; C < K; C++) {
        const fe = C * G - I;
        for (let se = 0; se < k; se++) {
          const Y = se * T - O;
          (Q[m] = Y * S),
            (Q[_] = fe * x),
            (Q[f] = F),
            c.push(Q.x, Q.y, Q.z),
            (Q[m] = 0),
            (Q[_] = 0),
            (Q[f] = E > 0 ? 1 : -1),
            u.push(Q.x, Q.y, Q.z),
            d.push(se / w),
            d.push(1 - C / P),
            (H += 1);
        }
      }
      for (let C = 0; C < P; C++)
        for (let fe = 0; fe < w; fe++) {
          const se = h + fe + k * C,
            Y = h + fe + k * (C + 1),
            J = h + (fe + 1) + k * (C + 1),
            ae = h + (fe + 1) + k * C;
          l.push(se, Y, ae), l.push(Y, J, ae), (W += 6);
        }
      o.addGroup(p, W, v), (p += W), (h += H);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new uo(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Ms(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function Zt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Ms(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function G_(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
function Pd(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : ai;
}
const H_ = { clone: Ms, merge: Zt };
var V_ = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  W_ = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class bi extends Ss {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = V_),
      (this.fragmentShader = W_),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Ms(e.uniforms)),
      (this.uniformsGroups = G_(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[i] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[i] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[i] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[i] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: a.toArray() })
        : (t.uniforms[i] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ld extends kt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Mt()),
      (this.projectionMatrix = new Mt()),
      (this.projectionMatrixInverse = new Mt());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Sn extends Ld {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = nc * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ja * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return nc * 2 * Math.atan(Math.tan(Ja * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Ja * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (s += (a.offsetX * i) / l),
        (t -= (a.offsetY * n) / c),
        (i *= a.width / l),
        (n *= a.height / c);
    }
    const o = this.filmOffset;
    o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Wr = -90,
  Xr = 1;
class X_ extends kt {
  constructor(e, t, n) {
    super(), (this.type = "CubeCamera"), (this.renderTarget = n);
    const i = new Sn(Wr, Xr, e, t);
    (i.layers = this.layers), i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new Sn(Wr, Xr, e, t);
    (s.layers = this.layers),
      s.up.set(0, 1, 0),
      s.lookAt(-1, 0, 0),
      this.add(s);
    const a = new Sn(Wr, Xr, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(0, 1, 0),
      this.add(a);
    const o = new Sn(Wr, Xr, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, 1),
      o.lookAt(0, -1, 0),
      this.add(o);
    const l = new Sn(Wr, Xr, e, t);
    (l.layers = this.layers), l.up.set(0, 1, 0), l.lookAt(0, 0, 1), this.add(l);
    const c = new Sn(Wr, Xr, e, t);
    (c.layers = this.layers),
      c.up.set(0, 1, 0),
      c.lookAt(0, 0, -1),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, s, a, o, l, c] = this.children,
      u = e.getRenderTarget(),
      d = e.toneMapping,
      h = e.xr.enabled;
    (e.toneMapping = yi), (e.xr.enabled = !1);
    const p = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, a),
      e.setRenderTarget(n, 3),
      e.render(t, o),
      e.setRenderTarget(n, 4),
      e.render(t, l),
      (n.texture.generateMipmaps = p),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.toneMapping = d),
      (e.xr.enabled = h),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Dd extends hn {
  constructor(e, t, n, i, s, a, o, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : gs),
      super(e, t, n, i, s, a, o, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class q_ extends yr {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    t.encoding !== void 0 &&
      (Ks(
        "THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."
      ),
      (t.colorSpace = t.encoding === mr ? Xe : _r)),
      (this.texture = new Dd(
        i,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ln);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new uo(5, 5, 5),
      s = new bi({
        name: "CubemapFromEquirect",
        uniforms: Ms(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: un,
        blending: ki,
      });
    s.uniforms.tEquirect.value = t;
    const a = new ii(i, s),
      o = t.minFilter;
    return (
      t.minFilter === io && (t.minFilter = Ln),
      new X_(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const _l = new B(),
  Y_ = new B(),
  j_ = new Qe();
class tr {
  constructor(e = new B(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = _l.subVectors(n, t).cross(Y_.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(_l),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || j_.getNormalMatrix(e),
      i = this.coplanarPoint(_l).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ji = new Ea(),
  Ho = new B();
class Cc {
  constructor(
    e = new tr(),
    t = new tr(),
    n = new tr(),
    i = new tr(),
    s = new tr(),
    a = new tr()
  ) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(i),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      s = n[1],
      a = n[2],
      o = n[3],
      l = n[4],
      c = n[5],
      u = n[6],
      d = n[7],
      h = n[8],
      p = n[9],
      g = n[10],
      m = n[11],
      _ = n[12],
      f = n[13],
      S = n[14],
      x = n[15];
    return (
      t[0].setComponents(o - i, d - l, m - h, x - _).normalize(),
      t[1].setComponents(o + i, d + l, m + h, x + _).normalize(),
      t[2].setComponents(o + s, d + c, m + p, x + f).normalize(),
      t[3].setComponents(o - s, d - c, m - p, x - f).normalize(),
      t[4].setComponents(o - a, d - u, m - g, x - S).normalize(),
      t[5].setComponents(o + a, d + u, m + g, x + S).normalize(),
      this
    );
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Ji);
  }
  intersectsSprite(e) {
    return (
      Ji.center.set(0, 0, 0),
      (Ji.radius = 0.7071067811865476),
      Ji.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Ji)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Ho.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Ho.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Ho.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Ho) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Ud() {
  let r = null,
    e = !1,
    t = null,
    n = null;
  function i(s, a) {
    t(s, a), (n = r.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = r.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      r.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      r = s;
    },
  };
}
function K_(r, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(c, u) {
    const d = c.array,
      h = c.usage,
      p = r.createBuffer();
    r.bindBuffer(u, p), r.bufferData(u, d, h), c.onUploadCallback();
    let g;
    if (d instanceof Float32Array) g = r.FLOAT;
    else if (d instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = r.HALF_FLOAT;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else g = r.UNSIGNED_SHORT;
    else if (d instanceof Int16Array) g = r.SHORT;
    else if (d instanceof Uint32Array) g = r.UNSIGNED_INT;
    else if (d instanceof Int32Array) g = r.INT;
    else if (d instanceof Int8Array) g = r.BYTE;
    else if (d instanceof Uint8Array) g = r.UNSIGNED_BYTE;
    else if (d instanceof Uint8ClampedArray) g = r.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + d
      );
    return {
      buffer: p,
      type: g,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function s(c, u, d) {
    const h = u.array,
      p = u.updateRange;
    r.bindBuffer(d, c),
      p.count === -1
        ? r.bufferSubData(d, 0, h)
        : (t
            ? r.bufferSubData(
                d,
                p.offset * h.BYTES_PER_ELEMENT,
                h,
                p.offset,
                p.count
              )
            : r.bufferSubData(
                d,
                p.offset * h.BYTES_PER_ELEMENT,
                h.subarray(p.offset, p.offset + p.count)
              ),
          (p.count = -1)),
      u.onUploadCallback();
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (r.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const h = n.get(c);
      (!h || h.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d === void 0
      ? n.set(c, i(c, u))
      : d.version < c.version && (s(d.buffer, c, u), (d.version = c.version));
  }
  return { get: a, remove: o, update: l };
}
class Pc extends li {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const s = e / 2,
      a = t / 2,
      o = Math.floor(n),
      l = Math.floor(i),
      c = o + 1,
      u = l + 1,
      d = e / o,
      h = t / l,
      p = [],
      g = [],
      m = [],
      _ = [];
    for (let f = 0; f < u; f++) {
      const S = f * h - a;
      for (let x = 0; x < c; x++) {
        const y = x * d - s;
        g.push(y, -S, 0), m.push(0, 0, 1), _.push(x / o), _.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++)
      for (let S = 0; S < o; S++) {
        const x = S + c * f,
          y = S + c * (f + 1),
          M = S + 1 + c * (f + 1),
          E = S + 1 + c * f;
        p.push(x, y, E), p.push(y, M, E);
      }
    this.setIndex(p),
      this.setAttribute("position", new bn(g, 3)),
      this.setAttribute("normal", new bn(m, 3)),
      this.setAttribute("uv", new bn(_, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Pc(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var $_ = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Z_ = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  J_ = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  Q_ = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  eg = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  tg = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  ng = "vec3 transformed = vec3( position );",
  ig = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  rg = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  sg = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  og = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  ag = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  lg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  cg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  ug = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  hg = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  fg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  dg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  pg = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  mg = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  _g = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  gg = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  vg = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  xg = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Mg = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Sg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  yg = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Eg = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Tg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  bg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  wg = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Ag = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Rg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Cg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Pg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Lg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Dg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Ug = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Ig = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Og = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Ng = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Fg = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  zg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Bg = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  kg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Gg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Hg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Vg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Wg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,
  Xg = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  qg = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Yg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  jg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  Kg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  $g = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Zg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Jg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Qg = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,
  e0 = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  t0 = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  n0 = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  i0 = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  r0 = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  s0 = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  o0 = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  a0 = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  l0 = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  c0 = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,
  u0 = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  h0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  f0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  d0 = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  p0 = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  m0 = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  _0 = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  g0 = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  v0 = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  x0 = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  M0 = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  S0 = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  y0 = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  E0 = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  T0 = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  b0 = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  w0 = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  A0 = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  R0 = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  C0 = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  P0 = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  L0 = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  D0 = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  U0 = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  I0 = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  O0 = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  N0 = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  F0 = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  z0 = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  B0 = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
  k0 = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  G0 = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  H0 = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  V0 = `#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  W0 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const X0 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  q0 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Y0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  j0 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  K0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  $0 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Z0 = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  J0 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Q0 = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  ev = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  tv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  nv = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  iv = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  rv = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  sv = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  ov = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  av = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  lv = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  cv = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  uv = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  hv = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  fv = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  dv = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  pv = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  mv = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  _v = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  gv = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  vv = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  xv = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Mv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Sv = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  yv = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Ev = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Tv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Ye = {
    alphamap_fragment: $_,
    alphamap_pars_fragment: Z_,
    alphatest_fragment: J_,
    alphatest_pars_fragment: Q_,
    aomap_fragment: eg,
    aomap_pars_fragment: tg,
    begin_vertex: ng,
    beginnormal_vertex: ig,
    bsdfs: rg,
    iridescence_fragment: sg,
    bumpmap_pars_fragment: og,
    clipping_planes_fragment: ag,
    clipping_planes_pars_fragment: lg,
    clipping_planes_pars_vertex: cg,
    clipping_planes_vertex: ug,
    color_fragment: hg,
    color_pars_fragment: fg,
    color_pars_vertex: dg,
    color_vertex: pg,
    common: mg,
    cube_uv_reflection_fragment: _g,
    defaultnormal_vertex: gg,
    displacementmap_pars_vertex: vg,
    displacementmap_vertex: xg,
    emissivemap_fragment: Mg,
    emissivemap_pars_fragment: Sg,
    encodings_fragment: yg,
    encodings_pars_fragment: Eg,
    envmap_fragment: Tg,
    envmap_common_pars_fragment: bg,
    envmap_pars_fragment: wg,
    envmap_pars_vertex: Ag,
    envmap_physical_pars_fragment: Bg,
    envmap_vertex: Rg,
    fog_vertex: Cg,
    fog_pars_vertex: Pg,
    fog_fragment: Lg,
    fog_pars_fragment: Dg,
    gradientmap_pars_fragment: Ug,
    lightmap_fragment: Ig,
    lightmap_pars_fragment: Og,
    lights_lambert_fragment: Ng,
    lights_lambert_pars_fragment: Fg,
    lights_pars_begin: zg,
    lights_toon_fragment: kg,
    lights_toon_pars_fragment: Gg,
    lights_phong_fragment: Hg,
    lights_phong_pars_fragment: Vg,
    lights_physical_fragment: Wg,
    lights_physical_pars_fragment: Xg,
    lights_fragment_begin: qg,
    lights_fragment_maps: Yg,
    lights_fragment_end: jg,
    logdepthbuf_fragment: Kg,
    logdepthbuf_pars_fragment: $g,
    logdepthbuf_pars_vertex: Zg,
    logdepthbuf_vertex: Jg,
    map_fragment: Qg,
    map_pars_fragment: e0,
    map_particle_fragment: t0,
    map_particle_pars_fragment: n0,
    metalnessmap_fragment: i0,
    metalnessmap_pars_fragment: r0,
    morphcolor_vertex: s0,
    morphnormal_vertex: o0,
    morphtarget_pars_vertex: a0,
    morphtarget_vertex: l0,
    normal_fragment_begin: c0,
    normal_fragment_maps: u0,
    normal_pars_fragment: h0,
    normal_pars_vertex: f0,
    normal_vertex: d0,
    normalmap_pars_fragment: p0,
    clearcoat_normal_fragment_begin: m0,
    clearcoat_normal_fragment_maps: _0,
    clearcoat_pars_fragment: g0,
    iridescence_pars_fragment: v0,
    output_fragment: x0,
    packing: M0,
    premultiplied_alpha_fragment: S0,
    project_vertex: y0,
    dithering_fragment: E0,
    dithering_pars_fragment: T0,
    roughnessmap_fragment: b0,
    roughnessmap_pars_fragment: w0,
    shadowmap_pars_fragment: A0,
    shadowmap_pars_vertex: R0,
    shadowmap_vertex: C0,
    shadowmask_pars_fragment: P0,
    skinbase_vertex: L0,
    skinning_pars_vertex: D0,
    skinning_vertex: U0,
    skinnormal_vertex: I0,
    specularmap_fragment: O0,
    specularmap_pars_fragment: N0,
    tonemapping_fragment: F0,
    tonemapping_pars_fragment: z0,
    transmission_fragment: B0,
    transmission_pars_fragment: k0,
    uv_pars_fragment: G0,
    uv_pars_vertex: H0,
    uv_vertex: V0,
    worldpos_vertex: W0,
    background_vert: X0,
    background_frag: q0,
    backgroundCube_vert: Y0,
    backgroundCube_frag: j0,
    cube_vert: K0,
    cube_frag: $0,
    depth_vert: Z0,
    depth_frag: J0,
    distanceRGBA_vert: Q0,
    distanceRGBA_frag: ev,
    equirect_vert: tv,
    equirect_frag: nv,
    linedashed_vert: iv,
    linedashed_frag: rv,
    meshbasic_vert: sv,
    meshbasic_frag: ov,
    meshlambert_vert: av,
    meshlambert_frag: lv,
    meshmatcap_vert: cv,
    meshmatcap_frag: uv,
    meshnormal_vert: hv,
    meshnormal_frag: fv,
    meshphong_vert: dv,
    meshphong_frag: pv,
    meshphysical_vert: mv,
    meshphysical_frag: _v,
    meshtoon_vert: gv,
    meshtoon_frag: vv,
    points_vert: xv,
    points_frag: Mv,
    shadow_vert: Sv,
    shadow_frag: yv,
    sprite_vert: Ev,
    sprite_frag: Tv,
  },
  de = {
    common: {
      diffuse: { value: new nt(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Qe() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Qe() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Qe() },
    },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Qe() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Qe() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Qe() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Qe() },
      normalScale: { value: new We(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Qe() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Qe() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Qe() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Qe() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new nt(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new nt(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Qe() },
    },
    sprite: {
      diffuse: { value: new nt(16777215) },
      opacity: { value: 1 },
      center: { value: new We(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Qe() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
  },
  ei = {
    basic: {
      uniforms: Zt([
        de.common,
        de.specularmap,
        de.envmap,
        de.aomap,
        de.lightmap,
        de.fog,
      ]),
      vertexShader: Ye.meshbasic_vert,
      fragmentShader: Ye.meshbasic_frag,
    },
    lambert: {
      uniforms: Zt([
        de.common,
        de.specularmap,
        de.envmap,
        de.aomap,
        de.lightmap,
        de.emissivemap,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        de.fog,
        de.lights,
        { emissive: { value: new nt(0) } },
      ]),
      vertexShader: Ye.meshlambert_vert,
      fragmentShader: Ye.meshlambert_frag,
    },
    phong: {
      uniforms: Zt([
        de.common,
        de.specularmap,
        de.envmap,
        de.aomap,
        de.lightmap,
        de.emissivemap,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        de.fog,
        de.lights,
        {
          emissive: { value: new nt(0) },
          specular: { value: new nt(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ye.meshphong_vert,
      fragmentShader: Ye.meshphong_frag,
    },
    standard: {
      uniforms: Zt([
        de.common,
        de.envmap,
        de.aomap,
        de.lightmap,
        de.emissivemap,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        de.roughnessmap,
        de.metalnessmap,
        de.fog,
        de.lights,
        {
          emissive: { value: new nt(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ye.meshphysical_vert,
      fragmentShader: Ye.meshphysical_frag,
    },
    toon: {
      uniforms: Zt([
        de.common,
        de.aomap,
        de.lightmap,
        de.emissivemap,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        de.gradientmap,
        de.fog,
        de.lights,
        { emissive: { value: new nt(0) } },
      ]),
      vertexShader: Ye.meshtoon_vert,
      fragmentShader: Ye.meshtoon_frag,
    },
    matcap: {
      uniforms: Zt([
        de.common,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        de.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ye.meshmatcap_vert,
      fragmentShader: Ye.meshmatcap_frag,
    },
    points: {
      uniforms: Zt([de.points, de.fog]),
      vertexShader: Ye.points_vert,
      fragmentShader: Ye.points_frag,
    },
    dashed: {
      uniforms: Zt([
        de.common,
        de.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ye.linedashed_vert,
      fragmentShader: Ye.linedashed_frag,
    },
    depth: {
      uniforms: Zt([de.common, de.displacementmap]),
      vertexShader: Ye.depth_vert,
      fragmentShader: Ye.depth_frag,
    },
    normal: {
      uniforms: Zt([
        de.common,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ye.meshnormal_vert,
      fragmentShader: Ye.meshnormal_frag,
    },
    sprite: {
      uniforms: Zt([de.sprite, de.fog]),
      vertexShader: Ye.sprite_vert,
      fragmentShader: Ye.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Qe() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ye.background_vert,
      fragmentShader: Ye.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ye.backgroundCube_vert,
      fragmentShader: Ye.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Ye.cube_vert,
      fragmentShader: Ye.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ye.equirect_vert,
      fragmentShader: Ye.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Zt([
        de.common,
        de.displacementmap,
        {
          referencePosition: { value: new B() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ye.distanceRGBA_vert,
      fragmentShader: Ye.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Zt([
        de.lights,
        de.fog,
        { color: { value: new nt(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ye.shadow_vert,
      fragmentShader: Ye.shadow_frag,
    },
  };
ei.physical = {
  uniforms: Zt([
    ei.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Qe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Qe() },
      clearcoatNormalScale: { value: new We(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Qe() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Qe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Qe() },
      sheen: { value: 0 },
      sheenColor: { value: new nt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Qe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Qe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Qe() },
      transmissionSamplerSize: { value: new We() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Qe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new nt(0) },
      specularColor: { value: new nt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Qe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Qe() },
    },
  ]),
  vertexShader: Ye.meshphysical_vert,
  fragmentShader: Ye.meshphysical_frag,
};
const Vo = { r: 0, b: 0, g: 0 };
function bv(r, e, t, n, i, s, a) {
  const o = new nt(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    d = null,
    h = 0,
    p = null;
  function g(_, f) {
    let S = !1,
      x = f.isScene === !0 ? f.background : null;
    switch (
      (x && x.isTexture && (x = (f.backgroundBlurriness > 0 ? t : e).get(x)),
      x === null ? m(o, l) : x && x.isColor && (m(x, 1), (S = !0)),
      r.xr.getEnvironmentBlendMode())
    ) {
      case "opaque":
        S = !0;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, a), (S = !0);
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, a), (S = !0);
        break;
    }
    (r.autoClear || S) &&
      r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
      x && (x.isCubeTexture || x.mapping === ya)
        ? (u === void 0 &&
            ((u = new ii(
              new uo(1, 1, 1),
              new bi({
                name: "BackgroundCubeMaterial",
                uniforms: Ms(ei.backgroundCube.uniforms),
                vertexShader: ei.backgroundCube.vertexShader,
                fragmentShader: ei.backgroundCube.fragmentShader,
                side: un,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute("normal"),
            u.geometry.deleteAttribute("uv"),
            (u.onBeforeRender = function (E, w, P) {
              this.matrixWorld.copyPosition(P.matrixWorld);
            }),
            Object.defineProperty(u.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(u)),
          (u.material.uniforms.envMap.value = x),
          (u.material.uniforms.flipEnvMap.value =
            x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            f.backgroundBlurriness),
          (u.material.uniforms.backgroundIntensity.value =
            f.backgroundIntensity),
          (u.material.toneMapped = x.colorSpace !== Xe),
          (d !== x || h !== x.version || p !== r.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (d = x),
            (h = x.version),
            (p = r.toneMapping)),
          u.layers.enableAll(),
          _.unshift(u, u.geometry, u.material, 0, 0, null))
        : x &&
          x.isTexture &&
          (c === void 0 &&
            ((c = new ii(
              new Pc(2, 2),
              new bi({
                name: "BackgroundMaterial",
                uniforms: Ms(ei.background.uniforms),
                vertexShader: ei.background.vertexShader,
                fragmentShader: ei.background.fragmentShader,
                side: Wi,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(c)),
          (c.material.uniforms.t2D.value = x),
          (c.material.uniforms.backgroundIntensity.value =
            f.backgroundIntensity),
          (c.material.toneMapped = x.colorSpace !== Xe),
          x.matrixAutoUpdate === !0 && x.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(x.matrix),
          (d !== x || h !== x.version || p !== r.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (d = x),
            (h = x.version),
            (p = r.toneMapping)),
          c.layers.enableAll(),
          _.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(_, f) {
    _.getRGB(Vo, Pd(r)), n.buffers.color.setClear(Vo.r, Vo.g, Vo.b, f, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (_, f = 1) {
      o.set(_), (l = f), m(o, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (_) {
      (l = _), m(o, l);
    },
    render: g,
  };
}
function wv(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    a = n.isWebGL2 || s !== null,
    o = {},
    l = _(null);
  let c = l,
    u = !1;
  function d(F, k, K, H, W) {
    let Q = !1;
    if (a) {
      const C = m(H, K, k);
      c !== C && ((c = C), p(c.object)),
        (Q = f(F, H, K, W)),
        Q && S(F, H, K, W);
    } else {
      const C = k.wireframe === !0;
      (c.geometry !== H.id || c.program !== K.id || c.wireframe !== C) &&
        ((c.geometry = H.id), (c.program = K.id), (c.wireframe = C), (Q = !0));
    }
    W !== null && t.update(W, r.ELEMENT_ARRAY_BUFFER),
      (Q || u) &&
        ((u = !1),
        P(F, k, K, H),
        W !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(W).buffer));
  }
  function h() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function p(F) {
    return n.isWebGL2 ? r.bindVertexArray(F) : s.bindVertexArrayOES(F);
  }
  function g(F) {
    return n.isWebGL2 ? r.deleteVertexArray(F) : s.deleteVertexArrayOES(F);
  }
  function m(F, k, K) {
    const H = K.wireframe === !0;
    let W = o[F.id];
    W === void 0 && ((W = {}), (o[F.id] = W));
    let Q = W[k.id];
    Q === void 0 && ((Q = {}), (W[k.id] = Q));
    let C = Q[H];
    return C === void 0 && ((C = _(h())), (Q[H] = C)), C;
  }
  function _(F) {
    const k = [],
      K = [],
      H = [];
    for (let W = 0; W < i; W++) (k[W] = 0), (K[W] = 0), (H[W] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: k,
      enabledAttributes: K,
      attributeDivisors: H,
      object: F,
      attributes: {},
      index: null,
    };
  }
  function f(F, k, K, H) {
    const W = c.attributes,
      Q = k.attributes;
    let C = 0;
    const fe = K.getAttributes();
    for (const se in fe)
      if (fe[se].location >= 0) {
        const J = W[se];
        let ae = Q[se];
        if (
          (ae === void 0 &&
            (se === "instanceMatrix" &&
              F.instanceMatrix &&
              (ae = F.instanceMatrix),
            se === "instanceColor" &&
              F.instanceColor &&
              (ae = F.instanceColor)),
          J === void 0 || J.attribute !== ae || (ae && J.data !== ae.data))
        )
          return !0;
        C++;
      }
    return c.attributesNum !== C || c.index !== H;
  }
  function S(F, k, K, H) {
    const W = {},
      Q = k.attributes;
    let C = 0;
    const fe = K.getAttributes();
    for (const se in fe)
      if (fe[se].location >= 0) {
        let J = Q[se];
        J === void 0 &&
          (se === "instanceMatrix" &&
            F.instanceMatrix &&
            (J = F.instanceMatrix),
          se === "instanceColor" && F.instanceColor && (J = F.instanceColor));
        const ae = {};
        (ae.attribute = J),
          J && J.data && (ae.data = J.data),
          (W[se] = ae),
          C++;
      }
    (c.attributes = W), (c.attributesNum = C), (c.index = H);
  }
  function x() {
    const F = c.newAttributes;
    for (let k = 0, K = F.length; k < K; k++) F[k] = 0;
  }
  function y(F) {
    M(F, 0);
  }
  function M(F, k) {
    const K = c.newAttributes,
      H = c.enabledAttributes,
      W = c.attributeDivisors;
    (K[F] = 1),
      H[F] === 0 && (r.enableVertexAttribArray(F), (H[F] = 1)),
      W[F] !== k &&
        ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](F, k),
        (W[F] = k));
  }
  function E() {
    const F = c.newAttributes,
      k = c.enabledAttributes;
    for (let K = 0, H = k.length; K < H; K++)
      k[K] !== F[K] && (r.disableVertexAttribArray(K), (k[K] = 0));
  }
  function w(F, k, K, H, W, Q) {
    n.isWebGL2 === !0 && (K === r.INT || K === r.UNSIGNED_INT)
      ? r.vertexAttribIPointer(F, k, K, W, Q)
      : r.vertexAttribPointer(F, k, K, H, W, Q);
  }
  function P(F, k, K, H) {
    if (
      n.isWebGL2 === !1 &&
      (F.isInstancedMesh || H.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    x();
    const W = H.attributes,
      Q = K.getAttributes(),
      C = k.defaultAttributeValues;
    for (const fe in Q) {
      const se = Q[fe];
      if (se.location >= 0) {
        let Y = W[fe];
        if (
          (Y === void 0 &&
            (fe === "instanceMatrix" &&
              F.instanceMatrix &&
              (Y = F.instanceMatrix),
            fe === "instanceColor" && F.instanceColor && (Y = F.instanceColor)),
          Y !== void 0)
        ) {
          const J = Y.normalized,
            ae = Y.itemSize,
            oe = t.get(Y);
          if (oe === void 0) continue;
          const D = oe.buffer,
            Ce = oe.type,
            Ie = oe.bytesPerElement;
          if (Y.isInterleavedBufferAttribute) {
            const le = Y.data,
              we = le.stride,
              xe = Y.offset;
            if (le.isInstancedInterleavedBuffer) {
              for (let _e = 0; _e < se.locationSize; _e++)
                M(se.location + _e, le.meshPerAttribute);
              F.isInstancedMesh !== !0 &&
                H._maxInstanceCount === void 0 &&
                (H._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let _e = 0; _e < se.locationSize; _e++) y(se.location + _e);
            r.bindBuffer(r.ARRAY_BUFFER, D);
            for (let _e = 0; _e < se.locationSize; _e++)
              w(
                se.location + _e,
                ae / se.locationSize,
                Ce,
                J,
                we * Ie,
                (xe + (ae / se.locationSize) * _e) * Ie
              );
          } else {
            if (Y.isInstancedBufferAttribute) {
              for (let le = 0; le < se.locationSize; le++)
                M(se.location + le, Y.meshPerAttribute);
              F.isInstancedMesh !== !0 &&
                H._maxInstanceCount === void 0 &&
                (H._maxInstanceCount = Y.meshPerAttribute * Y.count);
            } else
              for (let le = 0; le < se.locationSize; le++) y(se.location + le);
            r.bindBuffer(r.ARRAY_BUFFER, D);
            for (let le = 0; le < se.locationSize; le++)
              w(
                se.location + le,
                ae / se.locationSize,
                Ce,
                J,
                ae * Ie,
                (ae / se.locationSize) * le * Ie
              );
          }
        } else if (C !== void 0) {
          const J = C[fe];
          if (J !== void 0)
            switch (J.length) {
              case 2:
                r.vertexAttrib2fv(se.location, J);
                break;
              case 3:
                r.vertexAttrib3fv(se.location, J);
                break;
              case 4:
                r.vertexAttrib4fv(se.location, J);
                break;
              default:
                r.vertexAttrib1fv(se.location, J);
            }
        }
      }
    }
    E();
  }
  function v() {
    O();
    for (const F in o) {
      const k = o[F];
      for (const K in k) {
        const H = k[K];
        for (const W in H) g(H[W].object), delete H[W];
        delete k[K];
      }
      delete o[F];
    }
  }
  function T(F) {
    if (o[F.id] === void 0) return;
    const k = o[F.id];
    for (const K in k) {
      const H = k[K];
      for (const W in H) g(H[W].object), delete H[W];
      delete k[K];
    }
    delete o[F.id];
  }
  function G(F) {
    for (const k in o) {
      const K = o[k];
      if (K[F.id] === void 0) continue;
      const H = K[F.id];
      for (const W in H) g(H[W].object), delete H[W];
      delete K[F.id];
    }
  }
  function O() {
    I(), (u = !0), c !== l && ((c = l), p(c.object));
  }
  function I() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: d,
    reset: O,
    resetDefaultState: I,
    dispose: v,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: G,
    initAttributes: x,
    enableAttribute: y,
    disableUnusedAttributes: E,
  };
}
function Av(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(c) {
    s = c;
  }
  function o(c, u) {
    r.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, d) {
    if (d === 0) return;
    let h, p;
    if (i) (h = r), (p = "drawArraysInstanced");
    else if (
      ((h = e.get("ANGLE_instanced_arrays")),
      (p = "drawArraysInstancedANGLE"),
      h === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    h[p](s, c, u, d), t.update(u, s, d);
  }
  (this.setMode = a), (this.render = o), (this.renderInstances = l);
}
function Rv(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(w) {
    if (w === "highp") {
      if (
        r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision >
          0 &&
        r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      w = "mediump";
    }
    return w === "mediump" &&
      r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision >
        0 &&
      r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  const a =
    typeof WebGL2RenderingContext < "u" &&
    r.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = s(o);
  l !== o &&
    (console.warn(
      "THREE.WebGLRenderer:",
      o,
      "not supported, using",
      l,
      "instead."
    ),
    (o = l));
  const c = a || e.has("WEBGL_draw_buffers"),
    u = t.logarithmicDepthBuffer === !0,
    d = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),
    h = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    p = r.getParameter(r.MAX_TEXTURE_SIZE),
    g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),
    m = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    _ = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),
    f = r.getParameter(r.MAX_VARYING_VECTORS),
    S = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),
    x = h > 0,
    y = a || e.has("OES_texture_float"),
    M = x && y,
    E = a ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: h,
    maxTextureSize: p,
    maxCubemapSize: g,
    maxAttributes: m,
    maxVertexUniforms: _,
    maxVaryings: f,
    maxFragmentUniforms: S,
    vertexTextures: x,
    floatFragmentTextures: y,
    floatVertexTextures: M,
    maxSamples: E,
  };
}
function Cv(r) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    s = !1;
  const a = new tr(),
    o = new Qe(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, h) {
      const p = d.length !== 0 || h || n !== 0 || i;
      return (i = h), (n = d.length), p;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (d, h) {
      t = u(d, h, 0);
    }),
    (this.setState = function (d, h, p) {
      const g = d.clippingPlanes,
        m = d.clipIntersection,
        _ = d.clipShadows,
        f = r.get(d);
      if (!i || g === null || g.length === 0 || (s && !_)) s ? u(null) : c();
      else {
        const S = s ? 0 : n,
          x = S * 4;
        let y = f.clippingState || null;
        (l.value = y), (y = u(g, h, x, p));
        for (let M = 0; M !== x; ++M) y[M] = t[M];
        (f.clippingState = y),
          (this.numIntersection = m ? this.numPlanes : 0),
          (this.numPlanes += S);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(d, h, p, g) {
    const m = d !== null ? d.length : 0;
    let _ = null;
    if (m !== 0) {
      if (((_ = l.value), g !== !0 || _ === null)) {
        const f = p + m * 4,
          S = h.matrixWorldInverse;
        o.getNormalMatrix(S),
          (_ === null || _.length < f) && (_ = new Float32Array(f));
        for (let x = 0, y = p; x !== m; ++x, y += 4)
          a.copy(d[x]).applyMatrix4(S, o),
            a.normal.toArray(_, y),
            (_[y + 3] = a.constant);
      }
      (l.value = _), (l.needsUpdate = !0);
    }
    return (e.numPlanes = m), (e.numIntersection = 0), _;
  }
}
function Pv(r) {
  let e = new WeakMap();
  function t(a, o) {
    return o === Zl ? (a.mapping = gs) : o === Jl && (a.mapping = vs), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const o = a.mapping;
      if (o === Zl || o === Jl)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new q_(l.height / 2);
            return (
              c.fromEquirectangularTexture(r, a),
              e.set(a, c),
              a.addEventListener("dispose", i),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class Id extends Ld {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let s = n - e,
      a = n + e,
      o = i + t,
      l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (a = s + c * this.view.width),
        (o -= u * this.view.offsetY),
        (l = o - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const es = 4,
  lh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  ir = 20,
  gl = new Id(),
  ch = new nt();
let vl = null;
const nr = (1 + Math.sqrt(5)) / 2,
  qr = 1 / nr,
  uh = [
    new B(1, 1, 1),
    new B(-1, 1, 1),
    new B(1, 1, -1),
    new B(-1, 1, -1),
    new B(0, nr, qr),
    new B(0, nr, -qr),
    new B(qr, 0, nr),
    new B(-qr, 0, nr),
    new B(nr, qr, 0),
    new B(-nr, qr, 0),
  ];
class hh {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (vl = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = ph()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = dh()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(vl),
      (e.scissorTest = !1),
      Wo(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === gs || e.mapping === vs
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (vl = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Ln,
        minFilter: Ln,
        generateMipmaps: !1,
        type: ro,
        format: Kn,
        colorSpace: ai,
        depthBuffer: !1,
      },
      i = fh(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = fh(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Lv(s)),
        (this._blurMaterial = Dv(s, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new ii(this._lodPlanes[0], e);
    this._renderer.compile(t, gl);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Sn(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      d = u.autoClear,
      h = u.toneMapping;
    u.getClearColor(ch), (u.toneMapping = yi), (u.autoClear = !1);
    const p = new Ad({
        name: "PMREM.Background",
        side: un,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new ii(new uo(), p);
    let m = !1;
    const _ = e.background;
    _
      ? _.isColor && (p.color.copy(_), (e.background = null), (m = !0))
      : (p.color.copy(ch), (m = !0));
    for (let f = 0; f < 6; f++) {
      const S = f % 3;
      S === 0
        ? (o.up.set(0, l[f], 0), o.lookAt(c[f], 0, 0))
        : S === 1
        ? (o.up.set(0, 0, l[f]), o.lookAt(0, c[f], 0))
        : (o.up.set(0, l[f], 0), o.lookAt(0, 0, c[f]));
      const x = this._cubeSize;
      Wo(i, S * x, f > 2 ? x : 0, x, x),
        u.setRenderTarget(i),
        m && u.render(g, o),
        u.render(e, o);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = h),
      (u.autoClear = d),
      (e.background = _);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === gs || e.mapping === vs;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = ph()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = dh());
    const s = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new ii(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Wo(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, gl);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        a = uh[(i - 1) % uh.length];
      this._blur(e, i - 1, i, s, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", s),
      this._halfBlur(a, e, n, n, i, "longitudinal", s);
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const u = 3,
      d = new ii(this._lodPlanes[i], c),
      h = c.uniforms,
      p = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * ir - 1),
      m = s / g,
      _ = isFinite(s) ? 1 + Math.floor(u * m) : ir;
    _ > ir &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ir}`
      );
    const f = [];
    let S = 0;
    for (let w = 0; w < ir; ++w) {
      const P = w / m,
        v = Math.exp((-P * P) / 2);
      f.push(v), w === 0 ? (S += v) : w < _ && (S += 2 * v);
    }
    for (let w = 0; w < f.length; w++) f[w] = f[w] / S;
    (h.envMap.value = e.texture),
      (h.samples.value = _),
      (h.weights.value = f),
      (h.latitudinal.value = a === "latitudinal"),
      o && (h.poleAxis.value = o);
    const { _lodMax: x } = this;
    (h.dTheta.value = g), (h.mipInt.value = x - n);
    const y = this._sizeLods[i],
      M = 3 * y * (i > x - es ? i - x + es : 0),
      E = 4 * (this._cubeSize - y);
    Wo(t, M, E, 3 * y, 2 * y), l.setRenderTarget(t), l.render(d, gl);
  }
}
function Lv(r) {
  const e = [],
    t = [],
    n = [];
  let i = r;
  const s = r - es + 1 + lh.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > r - es ? (l = lh[a - r + es - 1]) : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2),
      u = -c,
      d = 1 + c,
      h = [u, u, d, u, d, d, u, u, d, d, u, d],
      p = 6,
      g = 6,
      m = 3,
      _ = 2,
      f = 1,
      S = new Float32Array(m * g * p),
      x = new Float32Array(_ * g * p),
      y = new Float32Array(f * g * p);
    for (let E = 0; E < p; E++) {
      const w = ((E % 3) * 2) / 3 - 1,
        P = E > 2 ? 0 : -1,
        v = [
          w,
          P,
          0,
          w + 2 / 3,
          P,
          0,
          w + 2 / 3,
          P + 1,
          0,
          w,
          P,
          0,
          w + 2 / 3,
          P + 1,
          0,
          w,
          P + 1,
          0,
        ];
      S.set(v, m * g * E), x.set(h, _ * g * E);
      const T = [E, E, E, E, E, E];
      y.set(T, f * g * E);
    }
    const M = new li();
    M.setAttribute("position", new Nn(S, m)),
      M.setAttribute("uv", new Nn(x, _)),
      M.setAttribute("faceIndex", new Nn(y, f)),
      e.push(M),
      i > es && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function fh(r, e, t) {
  const n = new yr(r, e, t);
  return (
    (n.texture.mapping = ya),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function Wo(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Dv(r, e, t) {
  const n = new Float32Array(ir),
    i = new B(0, 1, 0);
  return new bi({
    name: "SphericalGaussianBlur",
    defines: {
      n: ir,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: Lc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: ki,
    depthTest: !1,
    depthWrite: !1,
  });
}
function dh() {
  return new bi({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Lc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: ki,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ph() {
  return new bi({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Lc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: ki,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Lc() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Uv(r) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === Zl || l === Jl,
        u = l === gs || l === vs;
      if (c || u)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let d = e.get(o);
          return (
            t === null && (t = new hh(r)),
            (d = c ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d)),
            e.set(o, d),
            d.texture
          );
        } else {
          if (e.has(o)) return e.get(o).texture;
          {
            const d = o.image;
            if ((c && d && d.height > 0) || (u && d && i(d))) {
              t === null && (t = new hh(r));
              const h = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, h), o.addEventListener("dispose", s), h.texture;
            } else return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function Iv(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          r.getExtension("WEBGL_depth_texture") ||
          r.getExtension("MOZ_WEBGL_depth_texture") ||
          r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          r.getExtension("EXT_texture_filter_anisotropic") ||
          r.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          r.getExtension("WEBGL_compressed_texture_s3tc") ||
          r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          r.getExtension("WEBGL_compressed_texture_pvrtc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function Ov(r, e, t, n) {
  const i = {},
    s = new WeakMap();
  function a(d) {
    const h = d.target;
    h.index !== null && e.remove(h.index);
    for (const g in h.attributes) e.remove(h.attributes[g]);
    h.removeEventListener("dispose", a), delete i[h.id];
    const p = s.get(h);
    p && (e.remove(p), s.delete(h)),
      n.releaseStatesOfGeometry(h),
      h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(d, h) {
    return (
      i[h.id] === !0 ||
        (h.addEventListener("dispose", a),
        (i[h.id] = !0),
        t.memory.geometries++),
      h
    );
  }
  function l(d) {
    const h = d.attributes;
    for (const g in h) e.update(h[g], r.ARRAY_BUFFER);
    const p = d.morphAttributes;
    for (const g in p) {
      const m = p[g];
      for (let _ = 0, f = m.length; _ < f; _++) e.update(m[_], r.ARRAY_BUFFER);
    }
  }
  function c(d) {
    const h = [],
      p = d.index,
      g = d.attributes.position;
    let m = 0;
    if (p !== null) {
      const S = p.array;
      m = p.version;
      for (let x = 0, y = S.length; x < y; x += 3) {
        const M = S[x + 0],
          E = S[x + 1],
          w = S[x + 2];
        h.push(M, E, E, w, w, M);
      }
    } else {
      const S = g.array;
      m = g.version;
      for (let x = 0, y = S.length / 3 - 1; x < y; x += 3) {
        const M = x + 0,
          E = x + 1,
          w = x + 2;
        h.push(M, E, E, w, w, M);
      }
    }
    const _ = new (Md(h) ? Cd : Rd)(h, 1);
    _.version = m;
    const f = s.get(d);
    f && e.remove(f), s.set(d, _);
  }
  function u(d) {
    const h = s.get(d);
    if (h) {
      const p = d.index;
      p !== null && h.version < p.version && c(d);
    } else c(d);
    return s.get(d);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function Nv(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(h) {
    s = h;
  }
  let o, l;
  function c(h) {
    (o = h.type), (l = h.bytesPerElement);
  }
  function u(h, p) {
    r.drawElements(s, p, o, h * l), t.update(p, s, 1);
  }
  function d(h, p, g) {
    if (g === 0) return;
    let m, _;
    if (i) (m = r), (_ = "drawElementsInstanced");
    else if (
      ((m = e.get("ANGLE_instanced_arrays")),
      (_ = "drawElementsInstancedANGLE"),
      m === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    m[_](s, p, o, h * l, g), t.update(p, s, g);
  }
  (this.setMode = a),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = d);
}
function Fv(r) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch ((t.calls++, a)) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function zv(r, e) {
  return r[0] - e[0];
}
function Bv(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function kv(r, e, t) {
  const n = {},
    i = new Float32Array(8),
    s = new WeakMap(),
    a = new Ct(),
    o = [];
  for (let c = 0; c < 8; c++) o[c] = [c, 0];
  function l(c, u, d) {
    const h = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        m = g !== void 0 ? g.length : 0;
      let _ = s.get(u);
      if (_ === void 0 || _.count !== m) {
        let k = function () {
          I.dispose(), s.delete(u), u.removeEventListener("dispose", k);
        };
        var p = k;
        _ !== void 0 && _.texture.dispose();
        const x = u.morphAttributes.position !== void 0,
          y = u.morphAttributes.normal !== void 0,
          M = u.morphAttributes.color !== void 0,
          E = u.morphAttributes.position || [],
          w = u.morphAttributes.normal || [],
          P = u.morphAttributes.color || [];
        let v = 0;
        x === !0 && (v = 1), y === !0 && (v = 2), M === !0 && (v = 3);
        let T = u.attributes.position.count * v,
          G = 1;
        T > e.maxTextureSize &&
          ((G = Math.ceil(T / e.maxTextureSize)), (T = e.maxTextureSize));
        const O = new Float32Array(T * G * 4 * m),
          I = new Ed(O, T, G, m);
        (I.type = ar), (I.needsUpdate = !0);
        const F = v * 4;
        for (let K = 0; K < m; K++) {
          const H = E[K],
            W = w[K],
            Q = P[K],
            C = T * G * 4 * K;
          for (let fe = 0; fe < H.count; fe++) {
            const se = fe * F;
            x === !0 &&
              (a.fromBufferAttribute(H, fe),
              (O[C + se + 0] = a.x),
              (O[C + se + 1] = a.y),
              (O[C + se + 2] = a.z),
              (O[C + se + 3] = 0)),
              y === !0 &&
                (a.fromBufferAttribute(W, fe),
                (O[C + se + 4] = a.x),
                (O[C + se + 5] = a.y),
                (O[C + se + 6] = a.z),
                (O[C + se + 7] = 0)),
              M === !0 &&
                (a.fromBufferAttribute(Q, fe),
                (O[C + se + 8] = a.x),
                (O[C + se + 9] = a.y),
                (O[C + se + 10] = a.z),
                (O[C + se + 11] = Q.itemSize === 4 ? a.w : 1));
          }
        }
        (_ = { count: m, texture: I, size: new We(T, G) }),
          s.set(u, _),
          u.addEventListener("dispose", k);
      }
      let f = 0;
      for (let x = 0; x < h.length; x++) f += h[x];
      const S = u.morphTargetsRelative ? 1 : 1 - f;
      d.getUniforms().setValue(r, "morphTargetBaseInfluence", S),
        d.getUniforms().setValue(r, "morphTargetInfluences", h),
        d.getUniforms().setValue(r, "morphTargetsTexture", _.texture, t),
        d.getUniforms().setValue(r, "morphTargetsTextureSize", _.size);
    } else {
      const g = h === void 0 ? 0 : h.length;
      let m = n[u.id];
      if (m === void 0 || m.length !== g) {
        m = [];
        for (let y = 0; y < g; y++) m[y] = [y, 0];
        n[u.id] = m;
      }
      for (let y = 0; y < g; y++) {
        const M = m[y];
        (M[0] = y), (M[1] = h[y]);
      }
      m.sort(Bv);
      for (let y = 0; y < 8; y++)
        y < g && m[y][1]
          ? ((o[y][0] = m[y][0]), (o[y][1] = m[y][1]))
          : ((o[y][0] = Number.MAX_SAFE_INTEGER), (o[y][1] = 0));
      o.sort(zv);
      const _ = u.morphAttributes.position,
        f = u.morphAttributes.normal;
      let S = 0;
      for (let y = 0; y < 8; y++) {
        const M = o[y],
          E = M[0],
          w = M[1];
        E !== Number.MAX_SAFE_INTEGER && w
          ? (_ &&
              u.getAttribute("morphTarget" + y) !== _[E] &&
              u.setAttribute("morphTarget" + y, _[E]),
            f &&
              u.getAttribute("morphNormal" + y) !== f[E] &&
              u.setAttribute("morphNormal" + y, f[E]),
            (i[y] = w),
            (S += w))
          : (_ &&
              u.hasAttribute("morphTarget" + y) === !0 &&
              u.deleteAttribute("morphTarget" + y),
            f &&
              u.hasAttribute("morphNormal" + y) === !0 &&
              u.deleteAttribute("morphNormal" + y),
            (i[y] = 0));
      }
      const x = u.morphTargetsRelative ? 1 : 1 - S;
      d.getUniforms().setValue(r, "morphTargetBaseInfluence", x),
        d.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return { update: l };
}
function Gv(r, e, t, n) {
  let i = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      d = e.get(l, u);
    return (
      i.get(d) !== c && (e.update(d), i.set(d, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", o) === !1 &&
          l.addEventListener("dispose", o),
        t.update(l.instanceMatrix, r.ARRAY_BUFFER),
        l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER)),
      d
    );
  }
  function a() {
    i = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
const Od = new hn(),
  Nd = new Ed(),
  Fd = new P_(),
  zd = new Dd(),
  mh = [],
  _h = [],
  gh = new Float32Array(16),
  vh = new Float32Array(9),
  xh = new Float32Array(4);
function ys(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = mh[i];
  if ((s === void 0 && ((s = new Float32Array(i)), (mh[i] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), r[a].toArray(s, o);
  }
  return s;
}
function Pt(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function Lt(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function Ta(r, e) {
  let t = _h[e];
  t === void 0 && ((t = new Int32Array(e)), (_h[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function Hv(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}
function Vv(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Pt(t, e)) return;
    r.uniform2fv(this.addr, e), Lt(t, e);
  }
}
function Wv(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (r.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Pt(t, e)) return;
    r.uniform3fv(this.addr, e), Lt(t, e);
  }
}
function Xv(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Pt(t, e)) return;
    r.uniform4fv(this.addr, e), Lt(t, e);
  }
}
function qv(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Pt(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), Lt(t, e);
  } else {
    if (Pt(t, n)) return;
    xh.set(n), r.uniformMatrix2fv(this.addr, !1, xh), Lt(t, n);
  }
}
function Yv(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Pt(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), Lt(t, e);
  } else {
    if (Pt(t, n)) return;
    vh.set(n), r.uniformMatrix3fv(this.addr, !1, vh), Lt(t, n);
  }
}
function jv(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Pt(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), Lt(t, e);
  } else {
    if (Pt(t, n)) return;
    gh.set(n), r.uniformMatrix4fv(this.addr, !1, gh), Lt(t, n);
  }
}
function Kv(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}
function $v(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Pt(t, e)) return;
    r.uniform2iv(this.addr, e), Lt(t, e);
  }
}
function Zv(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Pt(t, e)) return;
    r.uniform3iv(this.addr, e), Lt(t, e);
  }
}
function Jv(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Pt(t, e)) return;
    r.uniform4iv(this.addr, e), Lt(t, e);
  }
}
function Qv(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}
function ex(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Pt(t, e)) return;
    r.uniform2uiv(this.addr, e), Lt(t, e);
  }
}
function tx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Pt(t, e)) return;
    r.uniform3uiv(this.addr, e), Lt(t, e);
  }
}
function nx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Pt(t, e)) return;
    r.uniform4uiv(this.addr, e), Lt(t, e);
  }
}
function ix(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || Od, i);
}
function rx(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || Fd, i);
}
function sx(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || zd, i);
}
function ox(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || Nd, i);
}
function ax(r) {
  switch (r) {
    case 5126:
      return Hv;
    case 35664:
      return Vv;
    case 35665:
      return Wv;
    case 35666:
      return Xv;
    case 35674:
      return qv;
    case 35675:
      return Yv;
    case 35676:
      return jv;
    case 5124:
    case 35670:
      return Kv;
    case 35667:
    case 35671:
      return $v;
    case 35668:
    case 35672:
      return Zv;
    case 35669:
    case 35673:
      return Jv;
    case 5125:
      return Qv;
    case 36294:
      return ex;
    case 36295:
      return tx;
    case 36296:
      return nx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ix;
    case 35679:
    case 36299:
    case 36307:
      return rx;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return sx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ox;
  }
}
function lx(r, e) {
  r.uniform1fv(this.addr, e);
}
function cx(r, e) {
  const t = ys(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function ux(r, e) {
  const t = ys(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function hx(r, e) {
  const t = ys(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function fx(r, e) {
  const t = ys(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function dx(r, e) {
  const t = ys(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function px(r, e) {
  const t = ys(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function mx(r, e) {
  r.uniform1iv(this.addr, e);
}
function _x(r, e) {
  r.uniform2iv(this.addr, e);
}
function gx(r, e) {
  r.uniform3iv(this.addr, e);
}
function vx(r, e) {
  r.uniform4iv(this.addr, e);
}
function xx(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Mx(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Sx(r, e) {
  r.uniform3uiv(this.addr, e);
}
function yx(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Ex(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Ta(t, i);
  Pt(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || Od, s[a]);
}
function Tx(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Ta(t, i);
  Pt(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || Fd, s[a]);
}
function bx(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Ta(t, i);
  Pt(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || zd, s[a]);
}
function wx(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Ta(t, i);
  Pt(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || Nd, s[a]);
}
function Ax(r) {
  switch (r) {
    case 5126:
      return lx;
    case 35664:
      return cx;
    case 35665:
      return ux;
    case 35666:
      return hx;
    case 35674:
      return fx;
    case 35675:
      return dx;
    case 35676:
      return px;
    case 5124:
    case 35670:
      return mx;
    case 35667:
    case 35671:
      return _x;
    case 35668:
    case 35672:
      return gx;
    case 35669:
    case 35673:
      return vx;
    case 5125:
      return xx;
    case 36294:
      return Mx;
    case 36295:
      return Sx;
    case 36296:
      return yx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ex;
    case 35679:
    case 36299:
    case 36307:
      return Tx;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return bx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wx;
  }
}
class Rx {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = ax(t.type));
  }
}
class Cx {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = Ax(t.type));
  }
}
class Px {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const xl = /(\w+)(\])?(\[|\.)?/g;
function Mh(r, e) {
  r.seq.push(e), (r.map[e.id] = e);
}
function Lx(r, e, t) {
  const n = r.name,
    i = n.length;
  for (xl.lastIndex = 0; ; ) {
    const s = xl.exec(n),
      a = xl.lastIndex;
    let o = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (o = o | 0), c === void 0 || (c === "[" && a + 2 === i))) {
      Mh(t, c === void 0 ? new Rx(o, r, e) : new Cx(o, r, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && ((d = new Px(o)), Mh(t, d)), (t = d);
    }
  }
}
class ra {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, s.name);
      Lx(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s],
        l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Sh(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let Dx = 0;
function Ux(r, e) {
  const t = r.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function Ix(r) {
  switch (r) {
    case ai:
      return ["Linear", "( value )"];
    case Xe:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", r),
        ["Linear", "( value )"]
      );
  }
}
function yh(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS),
    i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      Ux(r.getShaderSource(e), a)
    );
  } else return i;
}
function Ox(r, e) {
  const t = Ix(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Nx(r, e) {
  let t;
  switch (e) {
    case $m:
      t = "Linear";
      break;
    case Zm:
      t = "Reinhard";
      break;
    case Jm:
      t = "OptimizedCineon";
      break;
    case Qm:
      t = "ACESFilmic";
      break;
    case e_:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function Fx(r) {
  return [
    r.extensionDerivatives ||
    r.envMapCubeUVHeight ||
    r.bumpMap ||
    r.normalMapTangentSpace ||
    r.clearcoatNormalMap ||
    r.flatShading ||
    r.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) &&
    r.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) &&
    r.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(Fs).join(`
`);
}
function zx(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Bx(r, e) {
  const t = {},
    n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i),
      a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2),
      s.type === r.FLOAT_MAT3 && (o = 3),
      s.type === r.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: s.type,
        location: r.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function Fs(r) {
  return r !== "";
}
function Eh(r, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Th(r, e) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const kx = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ic(r) {
  return r.replace(kx, Gx);
}
function Gx(r, e) {
  const t = Ye[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return ic(t);
}
const Hx =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function bh(r) {
  return r.replace(Hx, Vx);
}
function Vx(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function wh(r) {
  let e =
    "precision " +
    r.precision +
    ` float;
precision ` +
    r.precision +
    " int;";
  return (
    r.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : r.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : r.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Wx(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    r.shadowMapType === hd
      ? (e = "SHADOWMAP_TYPE_PCF")
      : r.shadowMapType === Rm
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : r.shadowMapType === _i && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Xx(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case gs:
      case vs:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ya:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function qx(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case vs:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Yx(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case pd:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case jm:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Km:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function jx(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Kx(r, e, t, n) {
  const i = r.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = Wx(t),
    c = Xx(t),
    u = qx(t),
    d = Yx(t),
    h = jx(t),
    p = t.isWebGL2 ? "" : Fx(t),
    g = zx(s),
    m = i.createProgram();
  let _,
    f,
    S = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((_ = [g].filter(Fs).join(`
`)),
      _.length > 0 &&
        (_ += `
`),
      (f = [p, g].filter(Fs).join(`
`)),
      f.length > 0 &&
        (f += `
`))
    : ((_ = [
        wh(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Fs).join(`
`)),
      (f = [
        p,
        wh(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + d : "",
        h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
        h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
        h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== yi ? "#define TONE_MAPPING" : "",
        t.toneMapping !== yi ? Ye.tonemapping_pars_fragment : "",
        t.toneMapping !== yi ? Nx("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Ye.encodings_pars_fragment,
        Ox("linearToOutputTexel", t.outputColorSpace),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Fs).join(`
`))),
    (a = ic(a)),
    (a = Eh(a, t)),
    (a = Th(a, t)),
    (o = ic(o)),
    (o = Eh(o, t)),
    (o = Th(o, t)),
    (a = bh(a)),
    (o = bh(o)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((S = `#version 300 es
`),
      (_ =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        _),
      (f =
        [
          "#define varying in",
          t.glslVersion === Xu
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Xu ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        f));
  const x = S + _ + a,
    y = S + f + o,
    M = Sh(i, i.VERTEX_SHADER, x),
    E = Sh(i, i.FRAGMENT_SHADER, y);
  if (
    (i.attachShader(m, M),
    i.attachShader(m, E),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(m, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(m, 0, "position"),
    i.linkProgram(m),
    r.debug.checkShaderErrors)
  ) {
    const v = i.getProgramInfoLog(m).trim(),
      T = i.getShaderInfoLog(M).trim(),
      G = i.getShaderInfoLog(E).trim();
    let O = !0,
      I = !0;
    if (i.getProgramParameter(m, i.LINK_STATUS) === !1)
      if (((O = !1), typeof r.debug.onShaderError == "function"))
        r.debug.onShaderError(i, m, M, E);
      else {
        const F = yh(i, M, "vertex"),
          k = yh(i, E, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " +
            i.getError() +
            " - VALIDATE_STATUS " +
            i.getProgramParameter(m, i.VALIDATE_STATUS) +
            `

Program Info Log: ` +
            v +
            `
` +
            F +
            `
` +
            k
        );
      }
    else
      v !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", v)
        : (T === "" || G === "") && (I = !1);
    I &&
      (this.diagnostics = {
        runnable: O,
        programLog: v,
        vertexShader: { log: T, prefix: _ },
        fragmentShader: { log: G, prefix: f },
      });
  }
  i.deleteShader(M), i.deleteShader(E);
  let w;
  this.getUniforms = function () {
    return w === void 0 && (w = new ra(i, m)), w;
  };
  let P;
  return (
    (this.getAttributes = function () {
      return P === void 0 && (P = Bx(i, m)), P;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(m),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = Dx++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = m),
    (this.vertexShader = M),
    (this.fragmentShader = E),
    this
  );
}
let $x = 0;
class Zx {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      s = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Jx(e)), t.set(e, n)), n;
  }
}
class Jx {
  constructor(e) {
    (this.id = $x++), (this.code = e), (this.usedTimes = 0);
  }
}
function Qx(r, e, t, n, i, s, a) {
  const o = new bd(),
    l = new Zx(),
    c = [],
    u = i.isWebGL2,
    d = i.logarithmicDepthBuffer,
    h = i.vertexTextures;
  let p = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function m(v) {
    return v === 1 ? "uv1" : v === 2 ? "uv2" : v === 3 ? "uv3" : "uv";
  }
  function _(v, T, G, O, I) {
    const F = O.fog,
      k = I.geometry,
      K = v.isMeshStandardMaterial ? O.environment : null,
      H = (v.isMeshStandardMaterial ? t : e).get(v.envMap || K),
      W = H && H.mapping === ya ? H.image.height : null,
      Q = g[v.type];
    v.precision !== null &&
      ((p = i.getMaxPrecision(v.precision)),
      p !== v.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          v.precision,
          "not supported, using",
          p,
          "instead."
        ));
    const C =
        k.morphAttributes.position ||
        k.morphAttributes.normal ||
        k.morphAttributes.color,
      fe = C !== void 0 ? C.length : 0;
    let se = 0;
    k.morphAttributes.position !== void 0 && (se = 1),
      k.morphAttributes.normal !== void 0 && (se = 2),
      k.morphAttributes.color !== void 0 && (se = 3);
    let Y, J, ae, oe;
    if (Q) {
      const tt = ei[Q];
      (Y = tt.vertexShader), (J = tt.fragmentShader);
    } else
      (Y = v.vertexShader),
        (J = v.fragmentShader),
        l.update(v),
        (ae = l.getVertexShaderID(v)),
        (oe = l.getFragmentShaderID(v));
    const D = r.getRenderTarget(),
      Ce = I.isInstancedMesh === !0,
      Ie = !!v.map,
      le = !!v.matcap,
      we = !!H,
      xe = !!v.aoMap,
      _e = !!v.lightMap,
      Oe = !!v.bumpMap,
      it = !!v.normalMap,
      qe = !!v.displacementMap,
      q = !!v.emissiveMap,
      st = !!v.metalnessMap,
      Le = !!v.roughnessMap,
      Je = v.clearcoat > 0,
      ft = v.iridescence > 0,
      R = v.sheen > 0,
      b = v.transmission > 0,
      $ = Je && !!v.clearcoatMap,
      ie = Je && !!v.clearcoatNormalMap,
      te = Je && !!v.clearcoatRoughnessMap,
      ce = ft && !!v.iridescenceMap,
      L = ft && !!v.iridescenceThicknessMap,
      ee = R && !!v.sheenColorMap,
      V = R && !!v.sheenRoughnessMap,
      ue = !!v.specularMap,
      ve = !!v.specularColorMap,
      Te = !!v.specularIntensityMap,
      me = b && !!v.transmissionMap,
      ye = b && !!v.thicknessMap,
      Fe = !!v.gradientMap,
      pe = !!v.alphaMap,
      ot = v.alphaTest > 0,
      U = !!v.extensions,
      j = !!k.attributes.uv1,
      ne = !!k.attributes.uv2,
      he = !!k.attributes.uv3;
    return {
      isWebGL2: u,
      shaderID: Q,
      shaderName: v.type,
      vertexShader: Y,
      fragmentShader: J,
      defines: v.defines,
      customVertexShaderID: ae,
      customFragmentShaderID: oe,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: p,
      instancing: Ce,
      instancingColor: Ce && I.instanceColor !== null,
      supportsVertexTextures: h,
      outputColorSpace:
        D === null
          ? r.outputColorSpace
          : D.isXRRenderTarget === !0
          ? D.texture.colorSpace
          : ai,
      map: Ie,
      matcap: le,
      envMap: we,
      envMapMode: we && H.mapping,
      envMapCubeUVHeight: W,
      aoMap: xe,
      lightMap: _e,
      bumpMap: Oe,
      normalMap: it,
      displacementMap: h && qe,
      emissiveMap: q,
      normalMapObjectSpace: it && v.normalMapType === x_,
      normalMapTangentSpace: it && v.normalMapType === vd,
      metalnessMap: st,
      roughnessMap: Le,
      clearcoat: Je,
      clearcoatMap: $,
      clearcoatNormalMap: ie,
      clearcoatRoughnessMap: te,
      iridescence: ft,
      iridescenceMap: ce,
      iridescenceThicknessMap: L,
      sheen: R,
      sheenColorMap: ee,
      sheenRoughnessMap: V,
      specularMap: ue,
      specularColorMap: ve,
      specularIntensityMap: Te,
      transmission: b,
      transmissionMap: me,
      thicknessMap: ye,
      gradientMap: Fe,
      opaque: v.transparent === !1 && v.blending === os,
      alphaMap: pe,
      alphaTest: ot,
      combine: v.combine,
      mapUv: Ie && m(v.map.channel),
      aoMapUv: xe && m(v.aoMap.channel),
      lightMapUv: _e && m(v.lightMap.channel),
      bumpMapUv: Oe && m(v.bumpMap.channel),
      normalMapUv: it && m(v.normalMap.channel),
      displacementMapUv: qe && m(v.displacementMap.channel),
      emissiveMapUv: q && m(v.emissiveMap.channel),
      metalnessMapUv: st && m(v.metalnessMap.channel),
      roughnessMapUv: Le && m(v.roughnessMap.channel),
      clearcoatMapUv: $ && m(v.clearcoatMap.channel),
      clearcoatNormalMapUv: ie && m(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: te && m(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ce && m(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: L && m(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: ee && m(v.sheenColorMap.channel),
      sheenRoughnessMapUv: V && m(v.sheenRoughnessMap.channel),
      specularMapUv: ue && m(v.specularMap.channel),
      specularColorMapUv: ve && m(v.specularColorMap.channel),
      specularIntensityMapUv: Te && m(v.specularIntensityMap.channel),
      transmissionMapUv: me && m(v.transmissionMap.channel),
      thicknessMapUv: ye && m(v.thicknessMap.channel),
      alphaMapUv: pe && m(v.alphaMap.channel),
      vertexTangents: it && !!k.attributes.tangent,
      vertexColors: v.vertexColors,
      vertexAlphas:
        v.vertexColors === !0 &&
        !!k.attributes.color &&
        k.attributes.color.itemSize === 4,
      vertexUv1s: j,
      vertexUv2s: ne,
      vertexUv3s: he,
      pointsUvs: I.isPoints === !0 && !!k.attributes.uv && (Ie || pe),
      fog: !!F,
      useFog: v.fog === !0,
      fogExp2: F && F.isFogExp2,
      flatShading: v.flatShading === !0,
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: I.isSkinnedMesh === !0,
      morphTargets: k.morphAttributes.position !== void 0,
      morphNormals: k.morphAttributes.normal !== void 0,
      morphColors: k.morphAttributes.color !== void 0,
      morphTargetsCount: fe,
      morphTextureStride: se,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: r.shadowMap.enabled && G.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: v.toneMapped ? r.toneMapping : yi,
      useLegacyLights: r.useLegacyLights,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === Yn,
      flipSided: v.side === un,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: U && v.extensions.derivatives === !0,
      extensionFragDepth: U && v.extensions.fragDepth === !0,
      extensionDrawBuffers: U && v.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: U && v.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: v.customProgramCacheKey(),
    };
  }
  function f(v) {
    const T = [];
    if (
      (v.shaderID
        ? T.push(v.shaderID)
        : (T.push(v.customVertexShaderID), T.push(v.customFragmentShaderID)),
      v.defines !== void 0)
    )
      for (const G in v.defines) T.push(G), T.push(v.defines[G]);
    return (
      v.isRawShaderMaterial === !1 &&
        (S(T, v), x(T, v), T.push(r.outputColorSpace)),
      T.push(v.customProgramCacheKey),
      T.join()
    );
  }
  function S(v, T) {
    v.push(T.precision),
      v.push(T.outputColorSpace),
      v.push(T.envMapMode),
      v.push(T.envMapCubeUVHeight),
      v.push(T.mapUv),
      v.push(T.alphaMapUv),
      v.push(T.lightMapUv),
      v.push(T.aoMapUv),
      v.push(T.bumpMapUv),
      v.push(T.normalMapUv),
      v.push(T.displacementMapUv),
      v.push(T.emissiveMapUv),
      v.push(T.metalnessMapUv),
      v.push(T.roughnessMapUv),
      v.push(T.clearcoatMapUv),
      v.push(T.clearcoatNormalMapUv),
      v.push(T.clearcoatRoughnessMapUv),
      v.push(T.iridescenceMapUv),
      v.push(T.iridescenceThicknessMapUv),
      v.push(T.sheenColorMapUv),
      v.push(T.sheenRoughnessMapUv),
      v.push(T.specularMapUv),
      v.push(T.specularColorMapUv),
      v.push(T.specularIntensityMapUv),
      v.push(T.transmissionMapUv),
      v.push(T.thicknessMapUv),
      v.push(T.combine),
      v.push(T.fogExp2),
      v.push(T.sizeAttenuation),
      v.push(T.morphTargetsCount),
      v.push(T.morphAttributeCount),
      v.push(T.numDirLights),
      v.push(T.numPointLights),
      v.push(T.numSpotLights),
      v.push(T.numSpotLightMaps),
      v.push(T.numHemiLights),
      v.push(T.numRectAreaLights),
      v.push(T.numDirLightShadows),
      v.push(T.numPointLightShadows),
      v.push(T.numSpotLightShadows),
      v.push(T.numSpotLightShadowsWithMaps),
      v.push(T.shadowMapType),
      v.push(T.toneMapping),
      v.push(T.numClippingPlanes),
      v.push(T.numClipIntersection),
      v.push(T.depthPacking);
  }
  function x(v, T) {
    o.disableAll(),
      T.isWebGL2 && o.enable(0),
      T.supportsVertexTextures && o.enable(1),
      T.instancing && o.enable(2),
      T.instancingColor && o.enable(3),
      T.matcap && o.enable(4),
      T.envMap && o.enable(5),
      T.normalMapObjectSpace && o.enable(6),
      T.normalMapTangentSpace && o.enable(7),
      T.clearcoat && o.enable(8),
      T.iridescence && o.enable(9),
      T.alphaTest && o.enable(10),
      T.vertexColors && o.enable(11),
      T.vertexAlphas && o.enable(12),
      T.vertexUv1s && o.enable(13),
      T.vertexUv2s && o.enable(14),
      T.vertexUv3s && o.enable(15),
      T.vertexTangents && o.enable(16),
      v.push(o.mask),
      o.disableAll(),
      T.fog && o.enable(0),
      T.useFog && o.enable(1),
      T.flatShading && o.enable(2),
      T.logarithmicDepthBuffer && o.enable(3),
      T.skinning && o.enable(4),
      T.morphTargets && o.enable(5),
      T.morphNormals && o.enable(6),
      T.morphColors && o.enable(7),
      T.premultipliedAlpha && o.enable(8),
      T.shadowMapEnabled && o.enable(9),
      T.useLegacyLights && o.enable(10),
      T.doubleSided && o.enable(11),
      T.flipSided && o.enable(12),
      T.useDepthPacking && o.enable(13),
      T.dithering && o.enable(14),
      T.transmission && o.enable(15),
      T.sheen && o.enable(16),
      T.opaque && o.enable(17),
      T.pointsUvs && o.enable(18),
      v.push(o.mask);
  }
  function y(v) {
    const T = g[v.type];
    let G;
    if (T) {
      const O = ei[T];
      G = H_.clone(O.uniforms);
    } else G = v.uniforms;
    return G;
  }
  function M(v, T) {
    let G;
    for (let O = 0, I = c.length; O < I; O++) {
      const F = c[O];
      if (F.cacheKey === T) {
        (G = F), ++G.usedTimes;
        break;
      }
    }
    return G === void 0 && ((G = new Kx(r, T, v, s)), c.push(G)), G;
  }
  function E(v) {
    if (--v.usedTimes === 0) {
      const T = c.indexOf(v);
      (c[T] = c[c.length - 1]), c.pop(), v.destroy();
    }
  }
  function w(v) {
    l.remove(v);
  }
  function P() {
    l.dispose();
  }
  return {
    getParameters: _,
    getProgramCacheKey: f,
    getUniforms: y,
    acquireProgram: M,
    releaseProgram: E,
    releaseShaderCache: w,
    programs: c,
    dispose: P,
  };
}
function eM() {
  let r = new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && ((a = {}), r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function tM(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.material.id !== e.material.id
    ? r.material.id - e.material.id
    : r.z !== e.z
    ? r.z - e.z
    : r.id - e.id;
}
function Ah(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.z !== e.z
    ? e.z - r.z
    : r.id - e.id;
}
function Rh() {
  const r = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function a(d, h, p, g, m, _) {
    let f = r[e];
    return (
      f === void 0
        ? ((f = {
            id: d.id,
            object: d,
            geometry: h,
            material: p,
            groupOrder: g,
            renderOrder: d.renderOrder,
            z: m,
            group: _,
          }),
          (r[e] = f))
        : ((f.id = d.id),
          (f.object = d),
          (f.geometry = h),
          (f.material = p),
          (f.groupOrder = g),
          (f.renderOrder = d.renderOrder),
          (f.z = m),
          (f.group = _)),
      e++,
      f
    );
  }
  function o(d, h, p, g, m, _) {
    const f = a(d, h, p, g, m, _);
    p.transmission > 0
      ? n.push(f)
      : p.transparent === !0
      ? i.push(f)
      : t.push(f);
  }
  function l(d, h, p, g, m, _) {
    const f = a(d, h, p, g, m, _);
    p.transmission > 0
      ? n.unshift(f)
      : p.transparent === !0
      ? i.unshift(f)
      : t.unshift(f);
  }
  function c(d, h) {
    t.length > 1 && t.sort(d || tM),
      n.length > 1 && n.sort(h || Ah),
      i.length > 1 && i.sort(h || Ah);
  }
  function u() {
    for (let d = e, h = r.length; d < h; d++) {
      const p = r[d];
      if (p.id === null) break;
      (p.id = null),
        (p.object = null),
        (p.geometry = null),
        (p.material = null),
        (p.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function nM() {
  let r = new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return (
      s === void 0
        ? ((a = new Rh()), r.set(n, [a]))
        : i >= s.length
        ? ((a = new Rh()), s.push(a))
        : (a = s[i]),
      a
    );
  }
  function t() {
    r = new WeakMap();
  }
  return { get: e, dispose: t };
}
function iM() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new B(), color: new nt() };
          break;
        case "SpotLight":
          t = {
            position: new B(),
            direction: new B(),
            color: new nt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new B(), color: new nt(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new B(), skyColor: new nt(), groundColor: new nt() };
          break;
        case "RectAreaLight":
          t = {
            color: new nt(),
            position: new B(),
            halfWidth: new B(),
            halfHeight: new B(),
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
function rM() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new We(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new We(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new We(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
let sM = 0;
function oM(r, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (r.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (r.map ? 1 : 0)
  );
}
function aM(r, e) {
  const t = new iM(),
    n = rM(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let u = 0; u < 9; u++) i.probe.push(new B());
  const s = new B(),
    a = new Mt(),
    o = new Mt();
  function l(u, d) {
    let h = 0,
      p = 0,
      g = 0;
    for (let G = 0; G < 9; G++) i.probe[G].set(0, 0, 0);
    let m = 0,
      _ = 0,
      f = 0,
      S = 0,
      x = 0,
      y = 0,
      M = 0,
      E = 0,
      w = 0,
      P = 0;
    u.sort(oM);
    const v = d === !0 ? Math.PI : 1;
    for (let G = 0, O = u.length; G < O; G++) {
      const I = u[G],
        F = I.color,
        k = I.intensity,
        K = I.distance,
        H = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight)
        (h += F.r * k * v), (p += F.g * k * v), (g += F.b * k * v);
      else if (I.isLightProbe)
        for (let W = 0; W < 9; W++)
          i.probe[W].addScaledVector(I.sh.coefficients[W], k);
      else if (I.isDirectionalLight) {
        const W = t.get(I);
        if (
          (W.color.copy(I.color).multiplyScalar(I.intensity * v), I.castShadow)
        ) {
          const Q = I.shadow,
            C = n.get(I);
          (C.shadowBias = Q.bias),
            (C.shadowNormalBias = Q.normalBias),
            (C.shadowRadius = Q.radius),
            (C.shadowMapSize = Q.mapSize),
            (i.directionalShadow[m] = C),
            (i.directionalShadowMap[m] = H),
            (i.directionalShadowMatrix[m] = I.shadow.matrix),
            y++;
        }
        (i.directional[m] = W), m++;
      } else if (I.isSpotLight) {
        const W = t.get(I);
        W.position.setFromMatrixPosition(I.matrixWorld),
          W.color.copy(F).multiplyScalar(k * v),
          (W.distance = K),
          (W.coneCos = Math.cos(I.angle)),
          (W.penumbraCos = Math.cos(I.angle * (1 - I.penumbra))),
          (W.decay = I.decay),
          (i.spot[f] = W);
        const Q = I.shadow;
        if (
          (I.map &&
            ((i.spotLightMap[w] = I.map),
            w++,
            Q.updateMatrices(I),
            I.castShadow && P++),
          (i.spotLightMatrix[f] = Q.matrix),
          I.castShadow)
        ) {
          const C = n.get(I);
          (C.shadowBias = Q.bias),
            (C.shadowNormalBias = Q.normalBias),
            (C.shadowRadius = Q.radius),
            (C.shadowMapSize = Q.mapSize),
            (i.spotShadow[f] = C),
            (i.spotShadowMap[f] = H),
            E++;
        }
        f++;
      } else if (I.isRectAreaLight) {
        const W = t.get(I);
        W.color.copy(F).multiplyScalar(k),
          W.halfWidth.set(I.width * 0.5, 0, 0),
          W.halfHeight.set(0, I.height * 0.5, 0),
          (i.rectArea[S] = W),
          S++;
      } else if (I.isPointLight) {
        const W = t.get(I);
        if (
          (W.color.copy(I.color).multiplyScalar(I.intensity * v),
          (W.distance = I.distance),
          (W.decay = I.decay),
          I.castShadow)
        ) {
          const Q = I.shadow,
            C = n.get(I);
          (C.shadowBias = Q.bias),
            (C.shadowNormalBias = Q.normalBias),
            (C.shadowRadius = Q.radius),
            (C.shadowMapSize = Q.mapSize),
            (C.shadowCameraNear = Q.camera.near),
            (C.shadowCameraFar = Q.camera.far),
            (i.pointShadow[_] = C),
            (i.pointShadowMap[_] = H),
            (i.pointShadowMatrix[_] = I.shadow.matrix),
            M++;
        }
        (i.point[_] = W), _++;
      } else if (I.isHemisphereLight) {
        const W = t.get(I);
        W.skyColor.copy(I.color).multiplyScalar(k * v),
          W.groundColor.copy(I.groundColor).multiplyScalar(k * v),
          (i.hemi[x] = W),
          x++;
      }
    }
    S > 0 &&
      (e.isWebGL2 || r.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = de.LTC_FLOAT_1), (i.rectAreaLTC2 = de.LTC_FLOAT_2))
        : r.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = de.LTC_HALF_1), (i.rectAreaLTC2 = de.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = h),
      (i.ambient[1] = p),
      (i.ambient[2] = g);
    const T = i.hash;
    (T.directionalLength !== m ||
      T.pointLength !== _ ||
      T.spotLength !== f ||
      T.rectAreaLength !== S ||
      T.hemiLength !== x ||
      T.numDirectionalShadows !== y ||
      T.numPointShadows !== M ||
      T.numSpotShadows !== E ||
      T.numSpotMaps !== w) &&
      ((i.directional.length = m),
      (i.spot.length = f),
      (i.rectArea.length = S),
      (i.point.length = _),
      (i.hemi.length = x),
      (i.directionalShadow.length = y),
      (i.directionalShadowMap.length = y),
      (i.pointShadow.length = M),
      (i.pointShadowMap.length = M),
      (i.spotShadow.length = E),
      (i.spotShadowMap.length = E),
      (i.directionalShadowMatrix.length = y),
      (i.pointShadowMatrix.length = M),
      (i.spotLightMatrix.length = E + w - P),
      (i.spotLightMap.length = w),
      (i.numSpotLightShadowsWithMaps = P),
      (T.directionalLength = m),
      (T.pointLength = _),
      (T.spotLength = f),
      (T.rectAreaLength = S),
      (T.hemiLength = x),
      (T.numDirectionalShadows = y),
      (T.numPointShadows = M),
      (T.numSpotShadows = E),
      (T.numSpotMaps = w),
      (i.version = sM++));
  }
  function c(u, d) {
    let h = 0,
      p = 0,
      g = 0,
      m = 0,
      _ = 0;
    const f = d.matrixWorldInverse;
    for (let S = 0, x = u.length; S < x; S++) {
      const y = u[S];
      if (y.isDirectionalLight) {
        const M = i.directional[h];
        M.direction.setFromMatrixPosition(y.matrixWorld),
          s.setFromMatrixPosition(y.target.matrixWorld),
          M.direction.sub(s),
          M.direction.transformDirection(f),
          h++;
      } else if (y.isSpotLight) {
        const M = i.spot[g];
        M.position.setFromMatrixPosition(y.matrixWorld),
          M.position.applyMatrix4(f),
          M.direction.setFromMatrixPosition(y.matrixWorld),
          s.setFromMatrixPosition(y.target.matrixWorld),
          M.direction.sub(s),
          M.direction.transformDirection(f),
          g++;
      } else if (y.isRectAreaLight) {
        const M = i.rectArea[m];
        M.position.setFromMatrixPosition(y.matrixWorld),
          M.position.applyMatrix4(f),
          o.identity(),
          a.copy(y.matrixWorld),
          a.premultiply(f),
          o.extractRotation(a),
          M.halfWidth.set(y.width * 0.5, 0, 0),
          M.halfHeight.set(0, y.height * 0.5, 0),
          M.halfWidth.applyMatrix4(o),
          M.halfHeight.applyMatrix4(o),
          m++;
      } else if (y.isPointLight) {
        const M = i.point[p];
        M.position.setFromMatrixPosition(y.matrixWorld),
          M.position.applyMatrix4(f),
          p++;
      } else if (y.isHemisphereLight) {
        const M = i.hemi[_];
        M.direction.setFromMatrixPosition(y.matrixWorld),
          M.direction.transformDirection(f),
          _++;
      }
    }
  }
  return { setup: l, setupView: c, state: i };
}
function Ch(r, e) {
  const t = new aM(r, e),
    n = [],
    i = [];
  function s() {
    (n.length = 0), (i.length = 0);
  }
  function a(d) {
    n.push(d);
  }
  function o(d) {
    i.push(d);
  }
  function l(d) {
    t.setup(n, d);
  }
  function c(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o,
  };
}
function lM(r, e) {
  let t = new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let l;
    return (
      o === void 0
        ? ((l = new Ch(r, e)), t.set(s, [l]))
        : a >= o.length
        ? ((l = new Ch(r, e)), o.push(l))
        : (l = o[a]),
      l
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class cM extends Ss {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = g_),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class uM extends Ss {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const hM = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  fM = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function dM(r, e, t) {
  let n = new Cc();
  const i = new We(),
    s = new We(),
    a = new Ct(),
    o = new cM({ depthPacking: v_ }),
    l = new uM(),
    c = {},
    u = t.maxTextureSize,
    d = { [Wi]: un, [un]: Wi, [Yn]: Yn },
    h = new bi({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new We() },
        radius: { value: 4 },
      },
      vertexShader: hM,
      fragmentShader: fM,
    }),
    p = h.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new li();
  g.setAttribute(
    "position",
    new Nn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const m = new ii(g, h),
    _ = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = hd);
  let f = this.type;
  this.render = function (M, E, w) {
    if (
      _.enabled === !1 ||
      (_.autoUpdate === !1 && _.needsUpdate === !1) ||
      M.length === 0
    )
      return;
    const P = r.getRenderTarget(),
      v = r.getActiveCubeFace(),
      T = r.getActiveMipmapLevel(),
      G = r.state;
    G.setBlending(ki),
      G.buffers.color.setClear(1, 1, 1, 1),
      G.buffers.depth.setTest(!0),
      G.setScissorTest(!1);
    const O = f !== _i && this.type === _i,
      I = f === _i && this.type !== _i;
    for (let F = 0, k = M.length; F < k; F++) {
      const K = M[F],
        H = K.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      i.copy(H.mapSize);
      const W = H.getFrameExtents();
      if (
        (i.multiply(W),
        s.copy(H.mapSize),
        (i.x > u || i.y > u) &&
          (i.x > u &&
            ((s.x = Math.floor(u / W.x)),
            (i.x = s.x * W.x),
            (H.mapSize.x = s.x)),
          i.y > u &&
            ((s.y = Math.floor(u / W.y)),
            (i.y = s.y * W.y),
            (H.mapSize.y = s.y))),
        H.map === null || O === !0 || I === !0)
      ) {
        const C = this.type !== _i ? { minFilter: en, magFilter: en } : {};
        H.map !== null && H.map.dispose(),
          (H.map = new yr(i.x, i.y, C)),
          (H.map.texture.name = K.name + ".shadowMap"),
          H.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(H.map), r.clear();
      const Q = H.getViewportCount();
      for (let C = 0; C < Q; C++) {
        const fe = H.getViewport(C);
        a.set(s.x * fe.x, s.y * fe.y, s.x * fe.z, s.y * fe.w),
          G.viewport(a),
          H.updateMatrices(K, C),
          (n = H.getFrustum()),
          y(E, w, H.camera, K, this.type);
      }
      H.isPointLightShadow !== !0 && this.type === _i && S(H, w),
        (H.needsUpdate = !1);
    }
    (f = this.type), (_.needsUpdate = !1), r.setRenderTarget(P, v, T);
  };
  function S(M, E) {
    const w = e.update(m);
    h.defines.VSM_SAMPLES !== M.blurSamples &&
      ((h.defines.VSM_SAMPLES = M.blurSamples),
      (p.defines.VSM_SAMPLES = M.blurSamples),
      (h.needsUpdate = !0),
      (p.needsUpdate = !0)),
      M.mapPass === null && (M.mapPass = new yr(i.x, i.y)),
      (h.uniforms.shadow_pass.value = M.map.texture),
      (h.uniforms.resolution.value = M.mapSize),
      (h.uniforms.radius.value = M.radius),
      r.setRenderTarget(M.mapPass),
      r.clear(),
      r.renderBufferDirect(E, null, w, h, m, null),
      (p.uniforms.shadow_pass.value = M.mapPass.texture),
      (p.uniforms.resolution.value = M.mapSize),
      (p.uniforms.radius.value = M.radius),
      r.setRenderTarget(M.map),
      r.clear(),
      r.renderBufferDirect(E, null, w, p, m, null);
  }
  function x(M, E, w, P) {
    let v = null;
    const T =
      w.isPointLight === !0 ? M.customDistanceMaterial : M.customDepthMaterial;
    if (T !== void 0) v = T;
    else if (
      ((v = w.isPointLight === !0 ? l : o),
      (r.localClippingEnabled &&
        E.clipShadows === !0 &&
        Array.isArray(E.clippingPlanes) &&
        E.clippingPlanes.length !== 0) ||
        (E.displacementMap && E.displacementScale !== 0) ||
        (E.alphaMap && E.alphaTest > 0) ||
        (E.map && E.alphaTest > 0))
    ) {
      const G = v.uuid,
        O = E.uuid;
      let I = c[G];
      I === void 0 && ((I = {}), (c[G] = I));
      let F = I[O];
      F === void 0 && ((F = v.clone()), (I[O] = F)), (v = F);
    }
    if (
      ((v.visible = E.visible),
      (v.wireframe = E.wireframe),
      P === _i
        ? (v.side = E.shadowSide !== null ? E.shadowSide : E.side)
        : (v.side = E.shadowSide !== null ? E.shadowSide : d[E.side]),
      (v.alphaMap = E.alphaMap),
      (v.alphaTest = E.alphaTest),
      (v.map = E.map),
      (v.clipShadows = E.clipShadows),
      (v.clippingPlanes = E.clippingPlanes),
      (v.clipIntersection = E.clipIntersection),
      (v.displacementMap = E.displacementMap),
      (v.displacementScale = E.displacementScale),
      (v.displacementBias = E.displacementBias),
      (v.wireframeLinewidth = E.wireframeLinewidth),
      (v.linewidth = E.linewidth),
      w.isPointLight === !0 && v.isMeshDistanceMaterial === !0)
    ) {
      const G = r.properties.get(v);
      G.light = w;
    }
    return v;
  }
  function y(M, E, w, P, v) {
    if (M.visible === !1) return;
    if (
      M.layers.test(E.layers) &&
      (M.isMesh || M.isLine || M.isPoints) &&
      (M.castShadow || (M.receiveShadow && v === _i)) &&
      (!M.frustumCulled || n.intersectsObject(M))
    ) {
      M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse, M.matrixWorld);
      const O = e.update(M),
        I = M.material;
      if (Array.isArray(I)) {
        const F = O.groups;
        for (let k = 0, K = F.length; k < K; k++) {
          const H = F[k],
            W = I[H.materialIndex];
          if (W && W.visible) {
            const Q = x(M, W, P, v);
            r.renderBufferDirect(w, null, O, Q, M, H);
          }
        }
      } else if (I.visible) {
        const F = x(M, I, P, v);
        r.renderBufferDirect(w, null, O, F, M, null);
      }
    }
    const G = M.children;
    for (let O = 0, I = G.length; O < I; O++) y(G[O], E, w, P, v);
  }
}
function pM(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let U = !1;
    const j = new Ct();
    let ne = null;
    const he = new Ct(0, 0, 0, 0);
    return {
      setMask: function (be) {
        ne !== be && !U && (r.colorMask(be, be, be, be), (ne = be));
      },
      setLocked: function (be) {
        U = be;
      },
      setClear: function (be, tt, Ke, gt, ze) {
        ze === !0 && ((be *= gt), (tt *= gt), (Ke *= gt)),
          j.set(be, tt, Ke, gt),
          he.equals(j) === !1 && (r.clearColor(be, tt, Ke, gt), he.copy(j));
      },
      reset: function () {
        (U = !1), (ne = null), he.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let U = !1,
      j = null,
      ne = null,
      he = null;
    return {
      setTest: function (be) {
        be ? D(r.DEPTH_TEST) : Ce(r.DEPTH_TEST);
      },
      setMask: function (be) {
        j !== be && !U && (r.depthMask(be), (j = be));
      },
      setFunc: function (be) {
        if (ne !== be) {
          switch (be) {
            case Gm:
              r.depthFunc(r.NEVER);
              break;
            case Hm:
              r.depthFunc(r.ALWAYS);
              break;
            case Vm:
              r.depthFunc(r.LESS);
              break;
            case $l:
              r.depthFunc(r.LEQUAL);
              break;
            case Wm:
              r.depthFunc(r.EQUAL);
              break;
            case Xm:
              r.depthFunc(r.GEQUAL);
              break;
            case qm:
              r.depthFunc(r.GREATER);
              break;
            case Ym:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          ne = be;
        }
      },
      setLocked: function (be) {
        U = be;
      },
      setClear: function (be) {
        he !== be && (r.clearDepth(be), (he = be));
      },
      reset: function () {
        (U = !1), (j = null), (ne = null), (he = null);
      },
    };
  }
  function a() {
    let U = !1,
      j = null,
      ne = null,
      he = null,
      be = null,
      tt = null,
      Ke = null,
      gt = null,
      ze = null;
    return {
      setTest: function (ge) {
        U || (ge ? D(r.STENCIL_TEST) : Ce(r.STENCIL_TEST));
      },
      setMask: function (ge) {
        j !== ge && !U && (r.stencilMask(ge), (j = ge));
      },
      setFunc: function (ge, re, Ae) {
        (ne !== ge || he !== re || be !== Ae) &&
          (r.stencilFunc(ge, re, Ae), (ne = ge), (he = re), (be = Ae));
      },
      setOp: function (ge, re, Ae) {
        (tt !== ge || Ke !== re || gt !== Ae) &&
          (r.stencilOp(ge, re, Ae), (tt = ge), (Ke = re), (gt = Ae));
      },
      setLocked: function (ge) {
        U = ge;
      },
      setClear: function (ge) {
        ze !== ge && (r.clearStencil(ge), (ze = ge));
      },
      reset: function () {
        (U = !1),
          (j = null),
          (ne = null),
          (he = null),
          (be = null),
          (tt = null),
          (Ke = null),
          (gt = null),
          (ze = null);
      },
    };
  }
  const o = new i(),
    l = new s(),
    c = new a(),
    u = new WeakMap(),
    d = new WeakMap();
  let h = {},
    p = {},
    g = new WeakMap(),
    m = [],
    _ = null,
    f = !1,
    S = null,
    x = null,
    y = null,
    M = null,
    E = null,
    w = null,
    P = null,
    v = !1,
    T = null,
    G = null,
    O = null,
    I = null,
    F = null;
  const k = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = !1,
    H = 0;
  const W = r.getParameter(r.VERSION);
  W.indexOf("WebGL") !== -1
    ? ((H = parseFloat(/^WebGL (\d)/.exec(W)[1])), (K = H >= 1))
    : W.indexOf("OpenGL ES") !== -1 &&
      ((H = parseFloat(/^OpenGL ES (\d)/.exec(W)[1])), (K = H >= 2));
  let Q = null,
    C = {};
  const fe = r.getParameter(r.SCISSOR_BOX),
    se = r.getParameter(r.VIEWPORT),
    Y = new Ct().fromArray(fe),
    J = new Ct().fromArray(se);
  function ae(U, j, ne, he) {
    const be = new Uint8Array(4),
      tt = r.createTexture();
    r.bindTexture(U, tt),
      r.texParameteri(U, r.TEXTURE_MIN_FILTER, r.NEAREST),
      r.texParameteri(U, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let Ke = 0; Ke < ne; Ke++)
      n && (U === r.TEXTURE_3D || U === r.TEXTURE_2D_ARRAY)
        ? r.texImage3D(j, 0, r.RGBA, 1, 1, he, 0, r.RGBA, r.UNSIGNED_BYTE, be)
        : r.texImage2D(j + Ke, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, be);
    return tt;
  }
  const oe = {};
  (oe[r.TEXTURE_2D] = ae(r.TEXTURE_2D, r.TEXTURE_2D, 1)),
    (oe[r.TEXTURE_CUBE_MAP] = ae(
      r.TEXTURE_CUBE_MAP,
      r.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    n &&
      ((oe[r.TEXTURE_2D_ARRAY] = ae(
        r.TEXTURE_2D_ARRAY,
        r.TEXTURE_2D_ARRAY,
        1,
        1
      )),
      (oe[r.TEXTURE_3D] = ae(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1))),
    o.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    D(r.DEPTH_TEST),
    l.setFunc($l),
    qe(!1),
    q(mu),
    D(r.CULL_FACE),
    Oe(ki);
  function D(U) {
    h[U] !== !0 && (r.enable(U), (h[U] = !0));
  }
  function Ce(U) {
    h[U] !== !1 && (r.disable(U), (h[U] = !1));
  }
  function Ie(U, j) {
    return p[U] !== j
      ? (r.bindFramebuffer(U, j),
        (p[U] = j),
        n &&
          (U === r.DRAW_FRAMEBUFFER && (p[r.FRAMEBUFFER] = j),
          U === r.FRAMEBUFFER && (p[r.DRAW_FRAMEBUFFER] = j)),
        !0)
      : !1;
  }
  function le(U, j) {
    let ne = m,
      he = !1;
    if (U)
      if (
        ((ne = g.get(j)),
        ne === void 0 && ((ne = []), g.set(j, ne)),
        U.isWebGLMultipleRenderTargets)
      ) {
        const be = U.texture;
        if (ne.length !== be.length || ne[0] !== r.COLOR_ATTACHMENT0) {
          for (let tt = 0, Ke = be.length; tt < Ke; tt++)
            ne[tt] = r.COLOR_ATTACHMENT0 + tt;
          (ne.length = be.length), (he = !0);
        }
      } else
        ne[0] !== r.COLOR_ATTACHMENT0 &&
          ((ne[0] = r.COLOR_ATTACHMENT0), (he = !0));
    else ne[0] !== r.BACK && ((ne[0] = r.BACK), (he = !0));
    he &&
      (t.isWebGL2
        ? r.drawBuffers(ne)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne));
  }
  function we(U) {
    return _ !== U ? (r.useProgram(U), (_ = U), !0) : !1;
  }
  const xe = {
    [Kr]: r.FUNC_ADD,
    [Pm]: r.FUNC_SUBTRACT,
    [Lm]: r.FUNC_REVERSE_SUBTRACT,
  };
  if (n) (xe[vu] = r.MIN), (xe[xu] = r.MAX);
  else {
    const U = e.get("EXT_blend_minmax");
    U !== null && ((xe[vu] = U.MIN_EXT), (xe[xu] = U.MAX_EXT));
  }
  const _e = {
    [Dm]: r.ZERO,
    [Um]: r.ONE,
    [Im]: r.SRC_COLOR,
    [fd]: r.SRC_ALPHA,
    [km]: r.SRC_ALPHA_SATURATE,
    [zm]: r.DST_COLOR,
    [Nm]: r.DST_ALPHA,
    [Om]: r.ONE_MINUS_SRC_COLOR,
    [dd]: r.ONE_MINUS_SRC_ALPHA,
    [Bm]: r.ONE_MINUS_DST_COLOR,
    [Fm]: r.ONE_MINUS_DST_ALPHA,
  };
  function Oe(U, j, ne, he, be, tt, Ke, gt) {
    if (U === ki) {
      f === !0 && (Ce(r.BLEND), (f = !1));
      return;
    }
    if ((f === !1 && (D(r.BLEND), (f = !0)), U !== Cm)) {
      if (U !== S || gt !== v) {
        if (
          ((x !== Kr || E !== Kr) &&
            (r.blendEquation(r.FUNC_ADD), (x = Kr), (E = Kr)),
          gt)
        )
          switch (U) {
            case os:
              r.blendFuncSeparate(
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Kl:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case _u:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case gu:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", U);
              break;
          }
        else
          switch (U) {
            case os:
              r.blendFuncSeparate(
                r.SRC_ALPHA,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Kl:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case _u:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case gu:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", U);
              break;
          }
        (y = null), (M = null), (w = null), (P = null), (S = U), (v = gt);
      }
      return;
    }
    (be = be || j),
      (tt = tt || ne),
      (Ke = Ke || he),
      (j !== x || be !== E) &&
        (r.blendEquationSeparate(xe[j], xe[be]), (x = j), (E = be)),
      (ne !== y || he !== M || tt !== w || Ke !== P) &&
        (r.blendFuncSeparate(_e[ne], _e[he], _e[tt], _e[Ke]),
        (y = ne),
        (M = he),
        (w = tt),
        (P = Ke)),
      (S = U),
      (v = !1);
  }
  function it(U, j) {
    U.side === Yn ? Ce(r.CULL_FACE) : D(r.CULL_FACE);
    let ne = U.side === un;
    j && (ne = !ne),
      qe(ne),
      U.blending === os && U.transparent === !1
        ? Oe(ki)
        : Oe(
            U.blending,
            U.blendEquation,
            U.blendSrc,
            U.blendDst,
            U.blendEquationAlpha,
            U.blendSrcAlpha,
            U.blendDstAlpha,
            U.premultipliedAlpha
          ),
      l.setFunc(U.depthFunc),
      l.setTest(U.depthTest),
      l.setMask(U.depthWrite),
      o.setMask(U.colorWrite);
    const he = U.stencilWrite;
    c.setTest(he),
      he &&
        (c.setMask(U.stencilWriteMask),
        c.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask),
        c.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)),
      Le(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits),
      U.alphaToCoverage === !0
        ? D(r.SAMPLE_ALPHA_TO_COVERAGE)
        : Ce(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function qe(U) {
    T !== U && (U ? r.frontFace(r.CW) : r.frontFace(r.CCW), (T = U));
  }
  function q(U) {
    U !== wm
      ? (D(r.CULL_FACE),
        U !== G &&
          (U === mu
            ? r.cullFace(r.BACK)
            : U === Am
            ? r.cullFace(r.FRONT)
            : r.cullFace(r.FRONT_AND_BACK)))
      : Ce(r.CULL_FACE),
      (G = U);
  }
  function st(U) {
    U !== O && (K && r.lineWidth(U), (O = U));
  }
  function Le(U, j, ne) {
    U
      ? (D(r.POLYGON_OFFSET_FILL),
        (I !== j || F !== ne) && (r.polygonOffset(j, ne), (I = j), (F = ne)))
      : Ce(r.POLYGON_OFFSET_FILL);
  }
  function Je(U) {
    U ? D(r.SCISSOR_TEST) : Ce(r.SCISSOR_TEST);
  }
  function ft(U) {
    U === void 0 && (U = r.TEXTURE0 + k - 1),
      Q !== U && (r.activeTexture(U), (Q = U));
  }
  function R(U, j, ne) {
    ne === void 0 && (Q === null ? (ne = r.TEXTURE0 + k - 1) : (ne = Q));
    let he = C[ne];
    he === void 0 && ((he = { type: void 0, texture: void 0 }), (C[ne] = he)),
      (he.type !== U || he.texture !== j) &&
        (Q !== ne && (r.activeTexture(ne), (Q = ne)),
        r.bindTexture(U, j || oe[U]),
        (he.type = U),
        (he.texture = j));
  }
  function b() {
    const U = C[Q];
    U !== void 0 &&
      U.type !== void 0 &&
      (r.bindTexture(U.type, null), (U.type = void 0), (U.texture = void 0));
  }
  function $() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ie() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function te() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ce() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function L() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ee() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function V() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ue() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ve() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Te() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function me(U) {
    Y.equals(U) === !1 && (r.scissor(U.x, U.y, U.z, U.w), Y.copy(U));
  }
  function ye(U) {
    J.equals(U) === !1 && (r.viewport(U.x, U.y, U.z, U.w), J.copy(U));
  }
  function Fe(U, j) {
    let ne = d.get(j);
    ne === void 0 && ((ne = new WeakMap()), d.set(j, ne));
    let he = ne.get(U);
    he === void 0 && ((he = r.getUniformBlockIndex(j, U.name)), ne.set(U, he));
  }
  function pe(U, j) {
    const he = d.get(j).get(U);
    u.get(j) !== he &&
      (r.uniformBlockBinding(j, he, U.__bindingPointIndex), u.set(j, he));
  }
  function ot() {
    r.disable(r.BLEND),
      r.disable(r.CULL_FACE),
      r.disable(r.DEPTH_TEST),
      r.disable(r.POLYGON_OFFSET_FILL),
      r.disable(r.SCISSOR_TEST),
      r.disable(r.STENCIL_TEST),
      r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),
      r.blendEquation(r.FUNC_ADD),
      r.blendFunc(r.ONE, r.ZERO),
      r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(r.LESS),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(r.ALWAYS, 0, 4294967295),
      r.stencilOp(r.KEEP, r.KEEP, r.KEEP),
      r.clearStencil(0),
      r.cullFace(r.BACK),
      r.frontFace(r.CCW),
      r.polygonOffset(0, 0),
      r.activeTexture(r.TEXTURE0),
      r.bindFramebuffer(r.FRAMEBUFFER, null),
      n === !0 &&
        (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
        r.bindFramebuffer(r.READ_FRAMEBUFFER, null)),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (h = {}),
      (Q = null),
      (C = {}),
      (p = {}),
      (g = new WeakMap()),
      (m = []),
      (_ = null),
      (f = !1),
      (S = null),
      (x = null),
      (y = null),
      (M = null),
      (E = null),
      (w = null),
      (P = null),
      (v = !1),
      (T = null),
      (G = null),
      (O = null),
      (I = null),
      (F = null),
      Y.set(0, 0, r.canvas.width, r.canvas.height),
      J.set(0, 0, r.canvas.width, r.canvas.height),
      o.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: o, depth: l, stencil: c },
    enable: D,
    disable: Ce,
    bindFramebuffer: Ie,
    drawBuffers: le,
    useProgram: we,
    setBlending: Oe,
    setMaterial: it,
    setFlipSided: qe,
    setCullFace: q,
    setLineWidth: st,
    setPolygonOffset: Le,
    setScissorTest: Je,
    activeTexture: ft,
    bindTexture: R,
    unbindTexture: b,
    compressedTexImage2D: $,
    compressedTexImage3D: ie,
    texImage2D: ve,
    texImage3D: Te,
    updateUBOMapping: Fe,
    uniformBlockBinding: pe,
    texStorage2D: V,
    texStorage3D: ue,
    texSubImage2D: te,
    texSubImage3D: ce,
    compressedTexSubImage2D: L,
    compressedTexSubImage3D: ee,
    scissor: me,
    viewport: ye,
    reset: ot,
  };
}
function mM(r, e, t, n, i, s, a) {
  const o = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    u = i.maxTextureSize,
    d = i.maxSamples,
    h = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    p =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let m;
  const _ = new WeakMap();
  let f = !1;
  try {
    f =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function S(R, b) {
    return f ? new OffscreenCanvas(R, b) : so("canvas");
  }
  function x(R, b, $, ie) {
    let te = 1;
    if (
      ((R.width > ie || R.height > ie) &&
        (te = ie / Math.max(R.width, R.height)),
      te < 1 || b === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && R instanceof ImageBitmap)
      ) {
        const ce = b ? y_ : Math.floor,
          L = ce(te * R.width),
          ee = ce(te * R.height);
        m === void 0 && (m = S(L, ee));
        const V = $ ? S(L, ee) : m;
        return (
          (V.width = L),
          (V.height = ee),
          V.getContext("2d").drawImage(R, 0, 0, L, ee),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              R.width +
              "x" +
              R.height +
              ") to (" +
              L +
              "x" +
              ee +
              ")."
          ),
          V
        );
      } else
        return (
          "data" in R &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                R.width +
                "x" +
                R.height +
                ")."
            ),
          R
        );
    return R;
  }
  function y(R) {
    return qu(R.width) && qu(R.height);
  }
  function M(R) {
    return o
      ? !1
      : R.wrapS !== jn ||
          R.wrapT !== jn ||
          (R.minFilter !== en && R.minFilter !== Ln);
  }
  function E(R, b) {
    return R.generateMipmaps && b && R.minFilter !== en && R.minFilter !== Ln;
  }
  function w(R) {
    r.generateMipmap(R);
  }
  function P(R, b, $, ie, te = !1) {
    if (o === !1) return b;
    if (R !== null) {
      if (r[R] !== void 0) return r[R];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          R +
          "'"
      );
    }
    let ce = b;
    return (
      b === r.RED &&
        ($ === r.FLOAT && (ce = r.R32F),
        $ === r.HALF_FLOAT && (ce = r.R16F),
        $ === r.UNSIGNED_BYTE && (ce = r.R8)),
      b === r.RG &&
        ($ === r.FLOAT && (ce = r.RG32F),
        $ === r.HALF_FLOAT && (ce = r.RG16F),
        $ === r.UNSIGNED_BYTE && (ce = r.RG8)),
      b === r.RGBA &&
        ($ === r.FLOAT && (ce = r.RGBA32F),
        $ === r.HALF_FLOAT && (ce = r.RGBA16F),
        $ === r.UNSIGNED_BYTE &&
          (ce = ie === Xe && te === !1 ? r.SRGB8_ALPHA8 : r.RGBA8),
        $ === r.UNSIGNED_SHORT_4_4_4_4 && (ce = r.RGBA4),
        $ === r.UNSIGNED_SHORT_5_5_5_1 && (ce = r.RGB5_A1)),
      (ce === r.R16F ||
        ce === r.R32F ||
        ce === r.RG16F ||
        ce === r.RG32F ||
        ce === r.RGBA16F ||
        ce === r.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      ce
    );
  }
  function v(R, b, $) {
    return E(R, $) === !0 ||
      (R.isFramebufferTexture && R.minFilter !== en && R.minFilter !== Ln)
      ? Math.log2(Math.max(b.width, b.height)) + 1
      : R.mipmaps !== void 0 && R.mipmaps.length > 0
      ? R.mipmaps.length
      : R.isCompressedTexture && Array.isArray(R.image)
      ? b.mipmaps.length
      : 1;
  }
  function T(R) {
    return R === en || R === Mu || R === Xa ? r.NEAREST : r.LINEAR;
  }
  function G(R) {
    const b = R.target;
    b.removeEventListener("dispose", G), I(b), b.isVideoTexture && g.delete(b);
  }
  function O(R) {
    const b = R.target;
    b.removeEventListener("dispose", O), k(b);
  }
  function I(R) {
    const b = n.get(R);
    if (b.__webglInit === void 0) return;
    const $ = R.source,
      ie = _.get($);
    if (ie) {
      const te = ie[b.__cacheKey];
      te.usedTimes--,
        te.usedTimes === 0 && F(R),
        Object.keys(ie).length === 0 && _.delete($);
    }
    n.remove(R);
  }
  function F(R) {
    const b = n.get(R);
    r.deleteTexture(b.__webglTexture);
    const $ = R.source,
      ie = _.get($);
    delete ie[b.__cacheKey], a.memory.textures--;
  }
  function k(R) {
    const b = R.texture,
      $ = n.get(R),
      ie = n.get(b);
    if (
      (ie.__webglTexture !== void 0 &&
        (r.deleteTexture(ie.__webglTexture), a.memory.textures--),
      R.depthTexture && R.depthTexture.dispose(),
      R.isWebGLCubeRenderTarget)
    )
      for (let te = 0; te < 6; te++)
        r.deleteFramebuffer($.__webglFramebuffer[te]),
          $.__webglDepthbuffer &&
            r.deleteRenderbuffer($.__webglDepthbuffer[te]);
    else {
      if (
        (r.deleteFramebuffer($.__webglFramebuffer),
        $.__webglDepthbuffer && r.deleteRenderbuffer($.__webglDepthbuffer),
        $.__webglMultisampledFramebuffer &&
          r.deleteFramebuffer($.__webglMultisampledFramebuffer),
        $.__webglColorRenderbuffer)
      )
        for (let te = 0; te < $.__webglColorRenderbuffer.length; te++)
          $.__webglColorRenderbuffer[te] &&
            r.deleteRenderbuffer($.__webglColorRenderbuffer[te]);
      $.__webglDepthRenderbuffer &&
        r.deleteRenderbuffer($.__webglDepthRenderbuffer);
    }
    if (R.isWebGLMultipleRenderTargets)
      for (let te = 0, ce = b.length; te < ce; te++) {
        const L = n.get(b[te]);
        L.__webglTexture &&
          (r.deleteTexture(L.__webglTexture), a.memory.textures--),
          n.remove(b[te]);
      }
    n.remove(b), n.remove(R);
  }
  let K = 0;
  function H() {
    K = 0;
  }
  function W() {
    const R = K;
    return (
      R >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            R +
            " texture units while this GPU supports only " +
            l
        ),
      (K += 1),
      R
    );
  }
  function Q(R) {
    const b = [];
    return (
      b.push(R.wrapS),
      b.push(R.wrapT),
      b.push(R.wrapR || 0),
      b.push(R.magFilter),
      b.push(R.minFilter),
      b.push(R.anisotropy),
      b.push(R.internalFormat),
      b.push(R.format),
      b.push(R.type),
      b.push(R.generateMipmaps),
      b.push(R.premultiplyAlpha),
      b.push(R.flipY),
      b.push(R.unpackAlignment),
      b.push(R.colorSpace),
      b.join()
    );
  }
  function C(R, b) {
    const $ = n.get(R);
    if (
      (R.isVideoTexture && Je(R),
      R.isRenderTargetTexture === !1 &&
        R.version > 0 &&
        $.__version !== R.version)
    ) {
      const ie = R.image;
      if (ie === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (ie.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Ce($, R, b);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, $.__webglTexture, r.TEXTURE0 + b);
  }
  function fe(R, b) {
    const $ = n.get(R);
    if (R.version > 0 && $.__version !== R.version) {
      Ce($, R, b);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, $.__webglTexture, r.TEXTURE0 + b);
  }
  function se(R, b) {
    const $ = n.get(R);
    if (R.version > 0 && $.__version !== R.version) {
      Ce($, R, b);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, $.__webglTexture, r.TEXTURE0 + b);
  }
  function Y(R, b) {
    const $ = n.get(R);
    if (R.version > 0 && $.__version !== R.version) {
      Ie($, R, b);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, $.__webglTexture, r.TEXTURE0 + b);
  }
  const J = { [Ql]: r.REPEAT, [jn]: r.CLAMP_TO_EDGE, [ec]: r.MIRRORED_REPEAT },
    ae = {
      [en]: r.NEAREST,
      [Mu]: r.NEAREST_MIPMAP_NEAREST,
      [Xa]: r.NEAREST_MIPMAP_LINEAR,
      [Ln]: r.LINEAR,
      [t_]: r.LINEAR_MIPMAP_NEAREST,
      [io]: r.LINEAR_MIPMAP_LINEAR,
    };
  function oe(R, b, $) {
    if (
      ($
        ? (r.texParameteri(R, r.TEXTURE_WRAP_S, J[b.wrapS]),
          r.texParameteri(R, r.TEXTURE_WRAP_T, J[b.wrapT]),
          (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) &&
            r.texParameteri(R, r.TEXTURE_WRAP_R, J[b.wrapR]),
          r.texParameteri(R, r.TEXTURE_MAG_FILTER, ae[b.magFilter]),
          r.texParameteri(R, r.TEXTURE_MIN_FILTER, ae[b.minFilter]))
        : (r.texParameteri(R, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
          r.texParameteri(R, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
          (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) &&
            r.texParameteri(R, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE),
          (b.wrapS !== jn || b.wrapT !== jn) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          r.texParameteri(R, r.TEXTURE_MAG_FILTER, T(b.magFilter)),
          r.texParameteri(R, r.TEXTURE_MIN_FILTER, T(b.minFilter)),
          b.minFilter !== en &&
            b.minFilter !== Ln &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const ie = e.get("EXT_texture_filter_anisotropic");
      if (
        b.magFilter === en ||
        (b.minFilter !== Xa && b.minFilter !== io) ||
        (b.type === ar && e.has("OES_texture_float_linear") === !1) ||
        (o === !1 &&
          b.type === ro &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (b.anisotropy > 1 || n.get(b).__currentAnisotropy) &&
        (r.texParameterf(
          R,
          ie.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(b.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(b).__currentAnisotropy = b.anisotropy));
    }
  }
  function D(R, b) {
    let $ = !1;
    R.__webglInit === void 0 &&
      ((R.__webglInit = !0), b.addEventListener("dispose", G));
    const ie = b.source;
    let te = _.get(ie);
    te === void 0 && ((te = {}), _.set(ie, te));
    const ce = Q(b);
    if (ce !== R.__cacheKey) {
      te[ce] === void 0 &&
        ((te[ce] = { texture: r.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        ($ = !0)),
        te[ce].usedTimes++;
      const L = te[R.__cacheKey];
      L !== void 0 && (te[R.__cacheKey].usedTimes--, L.usedTimes === 0 && F(b)),
        (R.__cacheKey = ce),
        (R.__webglTexture = te[ce].texture);
    }
    return $;
  }
  function Ce(R, b, $) {
    let ie = r.TEXTURE_2D;
    (b.isDataArrayTexture || b.isCompressedArrayTexture) &&
      (ie = r.TEXTURE_2D_ARRAY),
      b.isData3DTexture && (ie = r.TEXTURE_3D);
    const te = D(R, b),
      ce = b.source;
    t.bindTexture(ie, R.__webglTexture, r.TEXTURE0 + $);
    const L = n.get(ce);
    if (ce.version !== L.__version || te === !0) {
      t.activeTexture(r.TEXTURE0 + $),
        r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, b.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, b.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const ee = M(b) && y(b.image) === !1;
      let V = x(b.image, ee, !1, u);
      V = ft(b, V);
      const ue = y(V) || o,
        ve = s.convert(b.format, b.colorSpace);
      let Te = s.convert(b.type),
        me = P(b.internalFormat, ve, Te, b.colorSpace);
      oe(ie, b, ue);
      let ye;
      const Fe = b.mipmaps,
        pe = o && b.isVideoTexture !== !0,
        ot = L.__version === void 0 || te === !0,
        U = v(b, V, ue);
      if (b.isDepthTexture)
        (me = r.DEPTH_COMPONENT),
          o
            ? b.type === ar
              ? (me = r.DEPTH_COMPONENT32F)
              : b.type === or
              ? (me = r.DEPTH_COMPONENT24)
              : b.type === as
              ? (me = r.DEPTH24_STENCIL8)
              : (me = r.DEPTH_COMPONENT16)
            : b.type === ar &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          b.format === pr &&
            me === r.DEPTH_COMPONENT &&
            b.type !== _d &&
            b.type !== or &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (b.type = or),
            (Te = s.convert(b.type))),
          b.format === xs &&
            me === r.DEPTH_COMPONENT &&
            ((me = r.DEPTH_STENCIL),
            b.type !== as &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (b.type = as),
              (Te = s.convert(b.type)))),
          ot &&
            (pe
              ? t.texStorage2D(r.TEXTURE_2D, 1, me, V.width, V.height)
              : t.texImage2D(
                  r.TEXTURE_2D,
                  0,
                  me,
                  V.width,
                  V.height,
                  0,
                  ve,
                  Te,
                  null
                ));
      else if (b.isDataTexture)
        if (Fe.length > 0 && ue) {
          pe &&
            ot &&
            t.texStorage2D(r.TEXTURE_2D, U, me, Fe[0].width, Fe[0].height);
          for (let j = 0, ne = Fe.length; j < ne; j++)
            (ye = Fe[j]),
              pe
                ? t.texSubImage2D(
                    r.TEXTURE_2D,
                    j,
                    0,
                    0,
                    ye.width,
                    ye.height,
                    ve,
                    Te,
                    ye.data
                  )
                : t.texImage2D(
                    r.TEXTURE_2D,
                    j,
                    me,
                    ye.width,
                    ye.height,
                    0,
                    ve,
                    Te,
                    ye.data
                  );
          b.generateMipmaps = !1;
        } else
          pe
            ? (ot && t.texStorage2D(r.TEXTURE_2D, U, me, V.width, V.height),
              t.texSubImage2D(
                r.TEXTURE_2D,
                0,
                0,
                0,
                V.width,
                V.height,
                ve,
                Te,
                V.data
              ))
            : t.texImage2D(
                r.TEXTURE_2D,
                0,
                me,
                V.width,
                V.height,
                0,
                ve,
                Te,
                V.data
              );
      else if (b.isCompressedTexture)
        if (b.isCompressedArrayTexture) {
          pe &&
            ot &&
            t.texStorage3D(
              r.TEXTURE_2D_ARRAY,
              U,
              me,
              Fe[0].width,
              Fe[0].height,
              V.depth
            );
          for (let j = 0, ne = Fe.length; j < ne; j++)
            (ye = Fe[j]),
              b.format !== Kn
                ? ve !== null
                  ? pe
                    ? t.compressedTexSubImage3D(
                        r.TEXTURE_2D_ARRAY,
                        j,
                        0,
                        0,
                        0,
                        ye.width,
                        ye.height,
                        V.depth,
                        ve,
                        ye.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        r.TEXTURE_2D_ARRAY,
                        j,
                        me,
                        ye.width,
                        ye.height,
                        V.depth,
                        0,
                        ye.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : pe
                ? t.texSubImage3D(
                    r.TEXTURE_2D_ARRAY,
                    j,
                    0,
                    0,
                    0,
                    ye.width,
                    ye.height,
                    V.depth,
                    ve,
                    Te,
                    ye.data
                  )
                : t.texImage3D(
                    r.TEXTURE_2D_ARRAY,
                    j,
                    me,
                    ye.width,
                    ye.height,
                    V.depth,
                    0,
                    ve,
                    Te,
                    ye.data
                  );
        } else {
          pe &&
            ot &&
            t.texStorage2D(r.TEXTURE_2D, U, me, Fe[0].width, Fe[0].height);
          for (let j = 0, ne = Fe.length; j < ne; j++)
            (ye = Fe[j]),
              b.format !== Kn
                ? ve !== null
                  ? pe
                    ? t.compressedTexSubImage2D(
                        r.TEXTURE_2D,
                        j,
                        0,
                        0,
                        ye.width,
                        ye.height,
                        ve,
                        ye.data
                      )
                    : t.compressedTexImage2D(
                        r.TEXTURE_2D,
                        j,
                        me,
                        ye.width,
                        ye.height,
                        0,
                        ye.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : pe
                ? t.texSubImage2D(
                    r.TEXTURE_2D,
                    j,
                    0,
                    0,
                    ye.width,
                    ye.height,
                    ve,
                    Te,
                    ye.data
                  )
                : t.texImage2D(
                    r.TEXTURE_2D,
                    j,
                    me,
                    ye.width,
                    ye.height,
                    0,
                    ve,
                    Te,
                    ye.data
                  );
        }
      else if (b.isDataArrayTexture)
        pe
          ? (ot &&
              t.texStorage3D(
                r.TEXTURE_2D_ARRAY,
                U,
                me,
                V.width,
                V.height,
                V.depth
              ),
            t.texSubImage3D(
              r.TEXTURE_2D_ARRAY,
              0,
              0,
              0,
              0,
              V.width,
              V.height,
              V.depth,
              ve,
              Te,
              V.data
            ))
          : t.texImage3D(
              r.TEXTURE_2D_ARRAY,
              0,
              me,
              V.width,
              V.height,
              V.depth,
              0,
              ve,
              Te,
              V.data
            );
      else if (b.isData3DTexture)
        pe
          ? (ot &&
              t.texStorage3D(r.TEXTURE_3D, U, me, V.width, V.height, V.depth),
            t.texSubImage3D(
              r.TEXTURE_3D,
              0,
              0,
              0,
              0,
              V.width,
              V.height,
              V.depth,
              ve,
              Te,
              V.data
            ))
          : t.texImage3D(
              r.TEXTURE_3D,
              0,
              me,
              V.width,
              V.height,
              V.depth,
              0,
              ve,
              Te,
              V.data
            );
      else if (b.isFramebufferTexture) {
        if (ot)
          if (pe) t.texStorage2D(r.TEXTURE_2D, U, me, V.width, V.height);
          else {
            let j = V.width,
              ne = V.height;
            for (let he = 0; he < U; he++)
              t.texImage2D(r.TEXTURE_2D, he, me, j, ne, 0, ve, Te, null),
                (j >>= 1),
                (ne >>= 1);
          }
      } else if (Fe.length > 0 && ue) {
        pe &&
          ot &&
          t.texStorage2D(r.TEXTURE_2D, U, me, Fe[0].width, Fe[0].height);
        for (let j = 0, ne = Fe.length; j < ne; j++)
          (ye = Fe[j]),
            pe
              ? t.texSubImage2D(r.TEXTURE_2D, j, 0, 0, ve, Te, ye)
              : t.texImage2D(r.TEXTURE_2D, j, me, ve, Te, ye);
        b.generateMipmaps = !1;
      } else
        pe
          ? (ot && t.texStorage2D(r.TEXTURE_2D, U, me, V.width, V.height),
            t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ve, Te, V))
          : t.texImage2D(r.TEXTURE_2D, 0, me, ve, Te, V);
      E(b, ue) && w(ie),
        (L.__version = ce.version),
        b.onUpdate && b.onUpdate(b);
    }
    R.__version = b.version;
  }
  function Ie(R, b, $) {
    if (b.image.length !== 6) return;
    const ie = D(R, b),
      te = b.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, R.__webglTexture, r.TEXTURE0 + $);
    const ce = n.get(te);
    if (te.version !== ce.__version || ie === !0) {
      t.activeTexture(r.TEXTURE0 + $),
        r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, b.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, b.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const L = b.isCompressedTexture || b.image[0].isCompressedTexture,
        ee = b.image[0] && b.image[0].isDataTexture,
        V = [];
      for (let j = 0; j < 6; j++)
        !L && !ee
          ? (V[j] = x(b.image[j], !1, !0, c))
          : (V[j] = ee ? b.image[j].image : b.image[j]),
          (V[j] = ft(b, V[j]));
      const ue = V[0],
        ve = y(ue) || o,
        Te = s.convert(b.format, b.colorSpace),
        me = s.convert(b.type),
        ye = P(b.internalFormat, Te, me, b.colorSpace),
        Fe = o && b.isVideoTexture !== !0,
        pe = ce.__version === void 0 || ie === !0;
      let ot = v(b, ue, ve);
      oe(r.TEXTURE_CUBE_MAP, b, ve);
      let U;
      if (L) {
        Fe &&
          pe &&
          t.texStorage2D(r.TEXTURE_CUBE_MAP, ot, ye, ue.width, ue.height);
        for (let j = 0; j < 6; j++) {
          U = V[j].mipmaps;
          for (let ne = 0; ne < U.length; ne++) {
            const he = U[ne];
            b.format !== Kn
              ? Te !== null
                ? Fe
                  ? t.compressedTexSubImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                      ne,
                      0,
                      0,
                      he.width,
                      he.height,
                      Te,
                      he.data
                    )
                  : t.compressedTexImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                      ne,
                      ye,
                      he.width,
                      he.height,
                      0,
                      he.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Fe
              ? t.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  ne,
                  0,
                  0,
                  he.width,
                  he.height,
                  Te,
                  me,
                  he.data
                )
              : t.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  ne,
                  ye,
                  he.width,
                  he.height,
                  0,
                  Te,
                  me,
                  he.data
                );
          }
        }
      } else {
        (U = b.mipmaps),
          Fe &&
            pe &&
            (U.length > 0 && ot++,
            t.texStorage2D(
              r.TEXTURE_CUBE_MAP,
              ot,
              ye,
              V[0].width,
              V[0].height
            ));
        for (let j = 0; j < 6; j++)
          if (ee) {
            Fe
              ? t.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  0,
                  0,
                  V[j].width,
                  V[j].height,
                  Te,
                  me,
                  V[j].data
                )
              : t.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  ye,
                  V[j].width,
                  V[j].height,
                  0,
                  Te,
                  me,
                  V[j].data
                );
            for (let ne = 0; ne < U.length; ne++) {
              const be = U[ne].image[j].image;
              Fe
                ? t.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    ne + 1,
                    0,
                    0,
                    be.width,
                    be.height,
                    Te,
                    me,
                    be.data
                  )
                : t.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    ne + 1,
                    ye,
                    be.width,
                    be.height,
                    0,
                    Te,
                    me,
                    be.data
                  );
            }
          } else {
            Fe
              ? t.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  0,
                  0,
                  Te,
                  me,
                  V[j]
                )
              : t.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  ye,
                  Te,
                  me,
                  V[j]
                );
            for (let ne = 0; ne < U.length; ne++) {
              const he = U[ne];
              Fe
                ? t.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    ne + 1,
                    0,
                    0,
                    Te,
                    me,
                    he.image[j]
                  )
                : t.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    ne + 1,
                    ye,
                    Te,
                    me,
                    he.image[j]
                  );
            }
          }
      }
      E(b, ve) && w(r.TEXTURE_CUBE_MAP),
        (ce.__version = te.version),
        b.onUpdate && b.onUpdate(b);
    }
    R.__version = b.version;
  }
  function le(R, b, $, ie, te) {
    const ce = s.convert($.format, $.colorSpace),
      L = s.convert($.type),
      ee = P($.internalFormat, ce, L, $.colorSpace);
    n.get(b).__hasExternalTextures ||
      (te === r.TEXTURE_3D || te === r.TEXTURE_2D_ARRAY
        ? t.texImage3D(te, 0, ee, b.width, b.height, b.depth, 0, ce, L, null)
        : t.texImage2D(te, 0, ee, b.width, b.height, 0, ce, L, null)),
      t.bindFramebuffer(r.FRAMEBUFFER, R),
      Le(b)
        ? h.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            ie,
            te,
            n.get($).__webglTexture,
            0,
            st(b)
          )
        : (te === r.TEXTURE_2D ||
            (te >= r.TEXTURE_CUBE_MAP_POSITIVE_X &&
              te <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          r.framebufferTexture2D(
            r.FRAMEBUFFER,
            ie,
            te,
            n.get($).__webglTexture,
            0
          ),
      t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function we(R, b, $) {
    if (
      (r.bindRenderbuffer(r.RENDERBUFFER, R), b.depthBuffer && !b.stencilBuffer)
    ) {
      let ie = r.DEPTH_COMPONENT16;
      if ($ || Le(b)) {
        const te = b.depthTexture;
        te &&
          te.isDepthTexture &&
          (te.type === ar
            ? (ie = r.DEPTH_COMPONENT32F)
            : te.type === or && (ie = r.DEPTH_COMPONENT24));
        const ce = st(b);
        Le(b)
          ? h.renderbufferStorageMultisampleEXT(
              r.RENDERBUFFER,
              ce,
              ie,
              b.width,
              b.height
            )
          : r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              ce,
              ie,
              b.width,
              b.height
            );
      } else r.renderbufferStorage(r.RENDERBUFFER, ie, b.width, b.height);
      r.framebufferRenderbuffer(
        r.FRAMEBUFFER,
        r.DEPTH_ATTACHMENT,
        r.RENDERBUFFER,
        R
      );
    } else if (b.depthBuffer && b.stencilBuffer) {
      const ie = st(b);
      $ && Le(b) === !1
        ? r.renderbufferStorageMultisample(
            r.RENDERBUFFER,
            ie,
            r.DEPTH24_STENCIL8,
            b.width,
            b.height
          )
        : Le(b)
        ? h.renderbufferStorageMultisampleEXT(
            r.RENDERBUFFER,
            ie,
            r.DEPTH24_STENCIL8,
            b.width,
            b.height
          )
        : r.renderbufferStorage(
            r.RENDERBUFFER,
            r.DEPTH_STENCIL,
            b.width,
            b.height
          ),
        r.framebufferRenderbuffer(
          r.FRAMEBUFFER,
          r.DEPTH_STENCIL_ATTACHMENT,
          r.RENDERBUFFER,
          R
        );
    } else {
      const ie =
        b.isWebGLMultipleRenderTargets === !0 ? b.texture : [b.texture];
      for (let te = 0; te < ie.length; te++) {
        const ce = ie[te],
          L = s.convert(ce.format, ce.colorSpace),
          ee = s.convert(ce.type),
          V = P(ce.internalFormat, L, ee, ce.colorSpace),
          ue = st(b);
        $ && Le(b) === !1
          ? r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              ue,
              V,
              b.width,
              b.height
            )
          : Le(b)
          ? h.renderbufferStorageMultisampleEXT(
              r.RENDERBUFFER,
              ue,
              V,
              b.width,
              b.height
            )
          : r.renderbufferStorage(r.RENDERBUFFER, V, b.width, b.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function xe(R, b) {
    if (b && b.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(r.FRAMEBUFFER, R),
      !(b.depthTexture && b.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(b.depthTexture).__webglTexture ||
      b.depthTexture.image.width !== b.width ||
      b.depthTexture.image.height !== b.height) &&
      ((b.depthTexture.image.width = b.width),
      (b.depthTexture.image.height = b.height),
      (b.depthTexture.needsUpdate = !0)),
      C(b.depthTexture, 0);
    const ie = n.get(b.depthTexture).__webglTexture,
      te = st(b);
    if (b.depthTexture.format === pr)
      Le(b)
        ? h.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            r.DEPTH_ATTACHMENT,
            r.TEXTURE_2D,
            ie,
            0,
            te
          )
        : r.framebufferTexture2D(
            r.FRAMEBUFFER,
            r.DEPTH_ATTACHMENT,
            r.TEXTURE_2D,
            ie,
            0
          );
    else if (b.depthTexture.format === xs)
      Le(b)
        ? h.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            r.DEPTH_STENCIL_ATTACHMENT,
            r.TEXTURE_2D,
            ie,
            0,
            te
          )
        : r.framebufferTexture2D(
            r.FRAMEBUFFER,
            r.DEPTH_STENCIL_ATTACHMENT,
            r.TEXTURE_2D,
            ie,
            0
          );
    else throw new Error("Unknown depthTexture format");
  }
  function _e(R) {
    const b = n.get(R),
      $ = R.isWebGLCubeRenderTarget === !0;
    if (R.depthTexture && !b.__autoAllocateDepthBuffer) {
      if ($)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      xe(b.__webglFramebuffer, R);
    } else if ($) {
      b.__webglDepthbuffer = [];
      for (let ie = 0; ie < 6; ie++)
        t.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer[ie]),
          (b.__webglDepthbuffer[ie] = r.createRenderbuffer()),
          we(b.__webglDepthbuffer[ie], R, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer),
        (b.__webglDepthbuffer = r.createRenderbuffer()),
        we(b.__webglDepthbuffer, R, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Oe(R, b, $) {
    const ie = n.get(R);
    b !== void 0 &&
      le(
        ie.__webglFramebuffer,
        R,
        R.texture,
        r.COLOR_ATTACHMENT0,
        r.TEXTURE_2D
      ),
      $ !== void 0 && _e(R);
  }
  function it(R) {
    const b = R.texture,
      $ = n.get(R),
      ie = n.get(b);
    R.addEventListener("dispose", O),
      R.isWebGLMultipleRenderTargets !== !0 &&
        (ie.__webglTexture === void 0 &&
          (ie.__webglTexture = r.createTexture()),
        (ie.__version = b.version),
        a.memory.textures++);
    const te = R.isWebGLCubeRenderTarget === !0,
      ce = R.isWebGLMultipleRenderTargets === !0,
      L = y(R) || o;
    if (te) {
      $.__webglFramebuffer = [];
      for (let ee = 0; ee < 6; ee++)
        $.__webglFramebuffer[ee] = r.createFramebuffer();
    } else {
      if ((($.__webglFramebuffer = r.createFramebuffer()), ce))
        if (i.drawBuffers) {
          const ee = R.texture;
          for (let V = 0, ue = ee.length; V < ue; V++) {
            const ve = n.get(ee[V]);
            ve.__webglTexture === void 0 &&
              ((ve.__webglTexture = r.createTexture()), a.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (o && R.samples > 0 && Le(R) === !1) {
        const ee = ce ? b : [b];
        ($.__webglMultisampledFramebuffer = r.createFramebuffer()),
          ($.__webglColorRenderbuffer = []),
          t.bindFramebuffer(r.FRAMEBUFFER, $.__webglMultisampledFramebuffer);
        for (let V = 0; V < ee.length; V++) {
          const ue = ee[V];
          ($.__webglColorRenderbuffer[V] = r.createRenderbuffer()),
            r.bindRenderbuffer(r.RENDERBUFFER, $.__webglColorRenderbuffer[V]);
          const ve = s.convert(ue.format, ue.colorSpace),
            Te = s.convert(ue.type),
            me = P(
              ue.internalFormat,
              ve,
              Te,
              ue.colorSpace,
              R.isXRRenderTarget === !0
            ),
            ye = st(R);
          r.renderbufferStorageMultisample(
            r.RENDERBUFFER,
            ye,
            me,
            R.width,
            R.height
          ),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + V,
              r.RENDERBUFFER,
              $.__webglColorRenderbuffer[V]
            );
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null),
          R.depthBuffer &&
            (($.__webglDepthRenderbuffer = r.createRenderbuffer()),
            we($.__webglDepthRenderbuffer, R, !0)),
          t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (te) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, ie.__webglTexture),
        oe(r.TEXTURE_CUBE_MAP, b, L);
      for (let ee = 0; ee < 6; ee++)
        le(
          $.__webglFramebuffer[ee],
          R,
          b,
          r.COLOR_ATTACHMENT0,
          r.TEXTURE_CUBE_MAP_POSITIVE_X + ee
        );
      E(b, L) && w(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ce) {
      const ee = R.texture;
      for (let V = 0, ue = ee.length; V < ue; V++) {
        const ve = ee[V],
          Te = n.get(ve);
        t.bindTexture(r.TEXTURE_2D, Te.__webglTexture),
          oe(r.TEXTURE_2D, ve, L),
          le(
            $.__webglFramebuffer,
            R,
            ve,
            r.COLOR_ATTACHMENT0 + V,
            r.TEXTURE_2D
          ),
          E(ve, L) && w(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ee = r.TEXTURE_2D;
      (R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) &&
        (o
          ? (ee = R.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(ee, ie.__webglTexture),
        oe(ee, b, L),
        le($.__webglFramebuffer, R, b, r.COLOR_ATTACHMENT0, ee),
        E(b, L) && w(ee),
        t.unbindTexture();
    }
    R.depthBuffer && _e(R);
  }
  function qe(R) {
    const b = y(R) || o,
      $ = R.isWebGLMultipleRenderTargets === !0 ? R.texture : [R.texture];
    for (let ie = 0, te = $.length; ie < te; ie++) {
      const ce = $[ie];
      if (E(ce, b)) {
        const L = R.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D,
          ee = n.get(ce).__webglTexture;
        t.bindTexture(L, ee), w(L), t.unbindTexture();
      }
    }
  }
  function q(R) {
    if (o && R.samples > 0 && Le(R) === !1) {
      const b = R.isWebGLMultipleRenderTargets ? R.texture : [R.texture],
        $ = R.width,
        ie = R.height;
      let te = r.COLOR_BUFFER_BIT;
      const ce = [],
        L = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT,
        ee = n.get(R),
        V = R.isWebGLMultipleRenderTargets === !0;
      if (V)
        for (let ue = 0; ue < b.length; ue++)
          t.bindFramebuffer(r.FRAMEBUFFER, ee.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + ue,
              r.RENDERBUFFER,
              null
            ),
            t.bindFramebuffer(r.FRAMEBUFFER, ee.__webglFramebuffer),
            r.framebufferTexture2D(
              r.DRAW_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + ue,
              r.TEXTURE_2D,
              null,
              0
            );
      t.bindFramebuffer(r.READ_FRAMEBUFFER, ee.__webglMultisampledFramebuffer),
        t.bindFramebuffer(r.DRAW_FRAMEBUFFER, ee.__webglFramebuffer);
      for (let ue = 0; ue < b.length; ue++) {
        ce.push(r.COLOR_ATTACHMENT0 + ue), R.depthBuffer && ce.push(L);
        const ve =
          ee.__ignoreDepthValues !== void 0 ? ee.__ignoreDepthValues : !1;
        if (
          (ve === !1 &&
            (R.depthBuffer && (te |= r.DEPTH_BUFFER_BIT),
            R.stencilBuffer && (te |= r.STENCIL_BUFFER_BIT)),
          V &&
            r.framebufferRenderbuffer(
              r.READ_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.RENDERBUFFER,
              ee.__webglColorRenderbuffer[ue]
            ),
          ve === !0 &&
            (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [L]),
            r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [L])),
          V)
        ) {
          const Te = n.get(b[ue]).__webglTexture;
          r.framebufferTexture2D(
            r.DRAW_FRAMEBUFFER,
            r.COLOR_ATTACHMENT0,
            r.TEXTURE_2D,
            Te,
            0
          );
        }
        r.blitFramebuffer(0, 0, $, ie, 0, 0, $, ie, te, r.NEAREST),
          p && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, ce);
      }
      if (
        (t.bindFramebuffer(r.READ_FRAMEBUFFER, null),
        t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
        V)
      )
        for (let ue = 0; ue < b.length; ue++) {
          t.bindFramebuffer(r.FRAMEBUFFER, ee.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + ue,
              r.RENDERBUFFER,
              ee.__webglColorRenderbuffer[ue]
            );
          const ve = n.get(b[ue]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, ee.__webglFramebuffer),
            r.framebufferTexture2D(
              r.DRAW_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + ue,
              r.TEXTURE_2D,
              ve,
              0
            );
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, ee.__webglMultisampledFramebuffer);
    }
  }
  function st(R) {
    return Math.min(d, R.samples);
  }
  function Le(R) {
    const b = n.get(R);
    return (
      o &&
      R.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      b.__useRenderToTexture !== !1
    );
  }
  function Je(R) {
    const b = a.render.frame;
    g.get(R) !== b && (g.set(R, b), R.update());
  }
  function ft(R, b) {
    const $ = R.colorSpace,
      ie = R.format,
      te = R.type;
    return (
      R.isCompressedTexture === !0 ||
        R.format === tc ||
        ($ !== ai &&
          $ !== _r &&
          ($ === Xe
            ? o === !1
              ? e.has("EXT_sRGB") === !0 && ie === Kn
                ? ((R.format = tc),
                  (R.minFilter = Ln),
                  (R.generateMipmaps = !1))
                : (b = Sd.sRGBToLinear(b))
              : (ie !== Kn || te !== Sr) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                $
              ))),
      b
    );
  }
  (this.allocateTextureUnit = W),
    (this.resetTextureUnits = H),
    (this.setTexture2D = C),
    (this.setTexture2DArray = fe),
    (this.setTexture3D = se),
    (this.setTextureCube = Y),
    (this.rebindTextures = Oe),
    (this.setupRenderTarget = it),
    (this.updateRenderTargetMipmap = qe),
    (this.updateMultisampleRenderTarget = q),
    (this.setupDepthRenderbuffer = _e),
    (this.setupFrameBufferTexture = le),
    (this.useMultisampledRTT = Le);
}
function _M(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = _r) {
    let o;
    if (s === Sr) return r.UNSIGNED_BYTE;
    if (s === s_) return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === o_) return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === n_) return r.BYTE;
    if (s === i_) return r.SHORT;
    if (s === _d) return r.UNSIGNED_SHORT;
    if (s === r_) return r.INT;
    if (s === or) return r.UNSIGNED_INT;
    if (s === ar) return r.FLOAT;
    if (s === ro)
      return n
        ? r.HALF_FLOAT
        : ((o = e.get("OES_texture_half_float")),
          o !== null ? o.HALF_FLOAT_OES : null);
    if (s === a_) return r.ALPHA;
    if (s === Kn) return r.RGBA;
    if (s === l_) return r.LUMINANCE;
    if (s === c_) return r.LUMINANCE_ALPHA;
    if (s === pr) return r.DEPTH_COMPONENT;
    if (s === xs) return r.DEPTH_STENCIL;
    if (s === tc)
      return (o = e.get("EXT_sRGB")), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === u_) return r.RED;
    if (s === h_) return r.RED_INTEGER;
    if (s === f_) return r.RG;
    if (s === d_) return r.RG_INTEGER;
    if (s === p_) return r.RGBA_INTEGER;
    if (s === qa || s === Ya || s === ja || s === Ka)
      if (a === Xe)
        if (((o = e.get("WEBGL_compressed_texture_s3tc_srgb")), o !== null)) {
          if (s === qa) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Ya) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === ja) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Ka) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get("WEBGL_compressed_texture_s3tc")), o !== null)) {
        if (s === qa) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Ya) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === ja) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Ka) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === Su || s === yu || s === Eu || s === Tu)
      if (((o = e.get("WEBGL_compressed_texture_pvrtc")), o !== null)) {
        if (s === Su) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === yu) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Eu) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Tu) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === m_)
      return (
        (o = e.get("WEBGL_compressed_texture_etc1")),
        o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === bu || s === wu)
      if (((o = e.get("WEBGL_compressed_texture_etc")), o !== null)) {
        if (s === bu)
          return a === Xe ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === wu)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === Au ||
      s === Ru ||
      s === Cu ||
      s === Pu ||
      s === Lu ||
      s === Du ||
      s === Uu ||
      s === Iu ||
      s === Ou ||
      s === Nu ||
      s === Fu ||
      s === zu ||
      s === Bu ||
      s === ku
    )
      if (((o = e.get("WEBGL_compressed_texture_astc")), o !== null)) {
        if (s === Au)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Ru)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Cu)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Pu)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Lu)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Du)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Uu)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Iu)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Ou)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Nu)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Fu)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === zu)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Bu)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === ku)
          return a === Xe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === $a)
      if (((o = e.get("EXT_texture_compression_bptc")), o !== null)) {
        if (s === $a)
          return a === Xe
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    if (s === __ || s === Gu || s === Hu || s === Vu)
      if (((o = e.get("EXT_texture_compression_rgtc")), o !== null)) {
        if (s === $a) return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === Gu) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Hu) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Vu) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return s === as
      ? n
        ? r.UNSIGNED_INT_24_8
        : ((o = e.get("WEBGL_depth_texture")),
          o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)
      : r[s] !== void 0
      ? r[s]
      : null;
  }
  return { convert: i };
}
class gM extends Sn {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Xo extends kt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const vM = { type: "move" };
class Ml {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Xo()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Xo()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new B()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new B())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Xo()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new B()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new B())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      s = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const m of e.hand.values()) {
          const _ = t.getJointPose(m, n),
            f = this._getHandJoint(c, m);
          _ !== null &&
            (f.matrix.fromArray(_.transform.matrix),
            f.matrix.decompose(f.position, f.rotation, f.scale),
            (f.matrixWorldNeedsUpdate = !0),
            (f.jointRadius = _.radius)),
            (f.visible = _ !== null);
        }
        const u = c.joints["index-finger-tip"],
          d = c.joints["thumb-tip"],
          h = u.position.distanceTo(d.position),
          p = 0.02,
          g = 0.005;
        c.inputState.pinching && h > p + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            h <= p - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && s !== null && (i = s),
        i !== null &&
          (o.matrix.fromArray(i.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(i.linearVelocity))
            : (o.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(i.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(vM)));
    }
    return (
      o !== null && (o.visible = i !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Xo();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class xM extends hn {
  constructor(e, t, n, i, s, a, o, l, c, u) {
    if (((u = u !== void 0 ? u : pr), u !== pr && u !== xs))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && u === pr && (n = or),
      n === void 0 && u === xs && (n = as),
      super(null, i, s, a, o, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : en),
      (this.minFilter = l !== void 0 ? l : en),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class MM extends br {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      s = 1,
      a = null,
      o = "local-floor",
      l = 1,
      c = null,
      u = null,
      d = null,
      h = null,
      p = null,
      g = null;
    const m = t.getContextAttributes();
    let _ = null,
      f = null;
    const S = [],
      x = [],
      y = new Set(),
      M = new Map(),
      E = new Sn();
    E.layers.enable(1), (E.viewport = new Ct());
    const w = new Sn();
    w.layers.enable(2), (w.viewport = new Ct());
    const P = [E, w],
      v = new gM();
    v.layers.enable(1), v.layers.enable(2);
    let T = null,
      G = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (Y) {
        let J = S[Y];
        return (
          J === void 0 && ((J = new Ml()), (S[Y] = J)), J.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (Y) {
        let J = S[Y];
        return J === void 0 && ((J = new Ml()), (S[Y] = J)), J.getGripSpace();
      }),
      (this.getHand = function (Y) {
        let J = S[Y];
        return J === void 0 && ((J = new Ml()), (S[Y] = J)), J.getHandSpace();
      });
    function O(Y) {
      const J = x.indexOf(Y.inputSource);
      if (J === -1) return;
      const ae = S[J];
      ae !== void 0 &&
        (ae.update(Y.inputSource, Y.frame, c || a),
        ae.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function I() {
      i.removeEventListener("select", O),
        i.removeEventListener("selectstart", O),
        i.removeEventListener("selectend", O),
        i.removeEventListener("squeeze", O),
        i.removeEventListener("squeezestart", O),
        i.removeEventListener("squeezeend", O),
        i.removeEventListener("end", I),
        i.removeEventListener("inputsourceschange", F);
      for (let Y = 0; Y < S.length; Y++) {
        const J = x[Y];
        J !== null && ((x[Y] = null), S[Y].disconnect(J));
      }
      (T = null),
        (G = null),
        e.setRenderTarget(_),
        (p = null),
        (h = null),
        (d = null),
        (i = null),
        (f = null),
        se.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (Y) {
      (s = Y),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (Y) {
        (o = Y),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (Y) {
        c = Y;
      }),
      (this.getBaseLayer = function () {
        return h !== null ? h : p;
      }),
      (this.getBinding = function () {
        return d;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (Y) {
        if (((i = Y), i !== null)) {
          if (
            ((_ = e.getRenderTarget()),
            i.addEventListener("select", O),
            i.addEventListener("selectstart", O),
            i.addEventListener("selectend", O),
            i.addEventListener("squeeze", O),
            i.addEventListener("squeezestart", O),
            i.addEventListener("squeezeend", O),
            i.addEventListener("end", I),
            i.addEventListener("inputsourceschange", F),
            m.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const J = {
              antialias: i.renderState.layers === void 0 ? m.antialias : !0,
              alpha: !0,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: s,
            };
            (p = new XRWebGLLayer(i, t, J)),
              i.updateRenderState({ baseLayer: p }),
              (f = new yr(p.framebufferWidth, p.framebufferHeight, {
                format: Kn,
                type: Sr,
                colorSpace: e.outputColorSpace,
                stencilBuffer: m.stencil,
              }));
          } else {
            let J = null,
              ae = null,
              oe = null;
            m.depth &&
              ((oe = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (J = m.stencil ? xs : pr),
              (ae = m.stencil ? as : or));
            const D = { colorFormat: t.RGBA8, depthFormat: oe, scaleFactor: s };
            (d = new XRWebGLBinding(i, t)),
              (h = d.createProjectionLayer(D)),
              i.updateRenderState({ layers: [h] }),
              (f = new yr(h.textureWidth, h.textureHeight, {
                format: Kn,
                type: Sr,
                depthTexture: new xM(
                  h.textureWidth,
                  h.textureHeight,
                  ae,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  J
                ),
                stencilBuffer: m.stencil,
                colorSpace: e.outputColorSpace,
                samples: m.antialias ? 4 : 0,
              }));
            const Ce = e.properties.get(f);
            Ce.__ignoreDepthValues = h.ignoreDepthValues;
          }
          (f.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (a = await i.requestReferenceSpace(o)),
            se.setContext(i),
            se.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (i !== null) return i.environmentBlendMode;
      });
    function F(Y) {
      for (let J = 0; J < Y.removed.length; J++) {
        const ae = Y.removed[J],
          oe = x.indexOf(ae);
        oe >= 0 && ((x[oe] = null), S[oe].disconnect(ae));
      }
      for (let J = 0; J < Y.added.length; J++) {
        const ae = Y.added[J];
        let oe = x.indexOf(ae);
        if (oe === -1) {
          for (let Ce = 0; Ce < S.length; Ce++)
            if (Ce >= x.length) {
              x.push(ae), (oe = Ce);
              break;
            } else if (x[Ce] === null) {
              (x[Ce] = ae), (oe = Ce);
              break;
            }
          if (oe === -1) break;
        }
        const D = S[oe];
        D && D.connect(ae);
      }
    }
    const k = new B(),
      K = new B();
    function H(Y, J, ae) {
      k.setFromMatrixPosition(J.matrixWorld),
        K.setFromMatrixPosition(ae.matrixWorld);
      const oe = k.distanceTo(K),
        D = J.projectionMatrix.elements,
        Ce = ae.projectionMatrix.elements,
        Ie = D[14] / (D[10] - 1),
        le = D[14] / (D[10] + 1),
        we = (D[9] + 1) / D[5],
        xe = (D[9] - 1) / D[5],
        _e = (D[8] - 1) / D[0],
        Oe = (Ce[8] + 1) / Ce[0],
        it = Ie * _e,
        qe = Ie * Oe,
        q = oe / (-_e + Oe),
        st = q * -_e;
      J.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale),
        Y.translateX(st),
        Y.translateZ(q),
        Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale),
        Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
      const Le = Ie + q,
        Je = le + q,
        ft = it - st,
        R = qe + (oe - st),
        b = ((we * le) / Je) * Le,
        $ = ((xe * le) / Je) * Le;
      Y.projectionMatrix.makePerspective(ft, R, b, $, Le, Je),
        Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
    }
    function W(Y, J) {
      J === null
        ? Y.matrixWorld.copy(Y.matrix)
        : Y.matrixWorld.multiplyMatrices(J.matrixWorld, Y.matrix),
        Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function (Y) {
      if (i === null) return;
      (v.near = w.near = E.near = Y.near),
        (v.far = w.far = E.far = Y.far),
        (T !== v.near || G !== v.far) &&
          (i.updateRenderState({ depthNear: v.near, depthFar: v.far }),
          (T = v.near),
          (G = v.far));
      const J = Y.parent,
        ae = v.cameras;
      W(v, J);
      for (let oe = 0; oe < ae.length; oe++) W(ae[oe], J);
      ae.length === 2
        ? H(v, E, w)
        : v.projectionMatrix.copy(E.projectionMatrix),
        Q(Y, v, J);
    };
    function Q(Y, J, ae) {
      ae === null
        ? Y.matrix.copy(J.matrixWorld)
        : (Y.matrix.copy(ae.matrixWorld),
          Y.matrix.invert(),
          Y.matrix.multiply(J.matrixWorld)),
        Y.matrix.decompose(Y.position, Y.quaternion, Y.scale),
        Y.updateMatrixWorld(!0);
      const oe = Y.children;
      for (let D = 0, Ce = oe.length; D < Ce; D++) oe[D].updateMatrixWorld(!0);
      Y.projectionMatrix.copy(J.projectionMatrix),
        Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),
        Y.isPerspectiveCamera &&
          ((Y.fov = nc * 2 * Math.atan(1 / Y.projectionMatrix.elements[5])),
          (Y.zoom = 1));
    }
    (this.getCamera = function () {
      return v;
    }),
      (this.getFoveation = function () {
        if (!(h === null && p === null)) return l;
      }),
      (this.setFoveation = function (Y) {
        (l = Y),
          h !== null && (h.fixedFoveation = Y),
          p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Y);
      }),
      (this.getPlanes = function () {
        return y;
      });
    let C = null;
    function fe(Y, J) {
      if (((u = J.getViewerPose(c || a)), (g = J), u !== null)) {
        const ae = u.views;
        p !== null &&
          (e.setRenderTargetFramebuffer(f, p.framebuffer),
          e.setRenderTarget(f));
        let oe = !1;
        ae.length !== v.cameras.length && ((v.cameras.length = 0), (oe = !0));
        for (let D = 0; D < ae.length; D++) {
          const Ce = ae[D];
          let Ie = null;
          if (p !== null) Ie = p.getViewport(Ce);
          else {
            const we = d.getViewSubImage(h, Ce);
            (Ie = we.viewport),
              D === 0 &&
                (e.setRenderTargetTextures(
                  f,
                  we.colorTexture,
                  h.ignoreDepthValues ? void 0 : we.depthStencilTexture
                ),
                e.setRenderTarget(f));
          }
          let le = P[D];
          le === void 0 &&
            ((le = new Sn()),
            le.layers.enable(D),
            (le.viewport = new Ct()),
            (P[D] = le)),
            le.matrix.fromArray(Ce.transform.matrix),
            le.matrix.decompose(le.position, le.quaternion, le.scale),
            le.projectionMatrix.fromArray(Ce.projectionMatrix),
            le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),
            le.viewport.set(Ie.x, Ie.y, Ie.width, Ie.height),
            D === 0 &&
              (v.matrix.copy(le.matrix),
              v.matrix.decompose(v.position, v.quaternion, v.scale)),
            oe === !0 && v.cameras.push(le);
        }
      }
      for (let ae = 0; ae < S.length; ae++) {
        const oe = x[ae],
          D = S[ae];
        oe !== null && D !== void 0 && D.update(oe, J, c || a);
      }
      if ((C && C(Y, J), J.detectedPlanes)) {
        n.dispatchEvent({ type: "planesdetected", data: J.detectedPlanes });
        let ae = null;
        for (const oe of y)
          J.detectedPlanes.has(oe) || (ae === null && (ae = []), ae.push(oe));
        if (ae !== null)
          for (const oe of ae)
            y.delete(oe),
              M.delete(oe),
              n.dispatchEvent({ type: "planeremoved", data: oe });
        for (const oe of J.detectedPlanes)
          if (!y.has(oe))
            y.add(oe),
              M.set(oe, J.lastChangedTime),
              n.dispatchEvent({ type: "planeadded", data: oe });
          else {
            const D = M.get(oe);
            oe.lastChangedTime > D &&
              (M.set(oe, oe.lastChangedTime),
              n.dispatchEvent({ type: "planechanged", data: oe }));
          }
      }
      g = null;
    }
    const se = new Ud();
    se.setAnimationLoop(fe),
      (this.setAnimationLoop = function (Y) {
        C = Y;
      }),
      (this.dispose = function () {});
  }
}
function SM(r, e) {
  function t(_, f) {
    _.matrixAutoUpdate === !0 && _.updateMatrix(), f.value.copy(_.matrix);
  }
  function n(_, f) {
    f.color.getRGB(_.fogColor.value, Pd(r)),
      f.isFog
        ? ((_.fogNear.value = f.near), (_.fogFar.value = f.far))
        : f.isFogExp2 && (_.fogDensity.value = f.density);
  }
  function i(_, f, S, x, y) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial
      ? s(_, f)
      : f.isMeshToonMaterial
      ? (s(_, f), d(_, f))
      : f.isMeshPhongMaterial
      ? (s(_, f), u(_, f))
      : f.isMeshStandardMaterial
      ? (s(_, f), h(_, f), f.isMeshPhysicalMaterial && p(_, f, y))
      : f.isMeshMatcapMaterial
      ? (s(_, f), g(_, f))
      : f.isMeshDepthMaterial
      ? s(_, f)
      : f.isMeshDistanceMaterial
      ? (s(_, f), m(_, f))
      : f.isMeshNormalMaterial
      ? s(_, f)
      : f.isLineBasicMaterial
      ? (a(_, f), f.isLineDashedMaterial && o(_, f))
      : f.isPointsMaterial
      ? l(_, f, S, x)
      : f.isSpriteMaterial
      ? c(_, f)
      : f.isShadowMaterial
      ? (_.color.value.copy(f.color), (_.opacity.value = f.opacity))
      : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(_, f) {
    (_.opacity.value = f.opacity),
      f.color && _.diffuse.value.copy(f.color),
      f.emissive &&
        _.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
      f.map && ((_.map.value = f.map), t(f.map, _.mapTransform)),
      f.alphaMap &&
        ((_.alphaMap.value = f.alphaMap), t(f.alphaMap, _.alphaMapTransform)),
      f.bumpMap &&
        ((_.bumpMap.value = f.bumpMap),
        t(f.bumpMap, _.bumpMapTransform),
        (_.bumpScale.value = f.bumpScale),
        f.side === un && (_.bumpScale.value *= -1)),
      f.normalMap &&
        ((_.normalMap.value = f.normalMap),
        t(f.normalMap, _.normalMapTransform),
        _.normalScale.value.copy(f.normalScale),
        f.side === un && _.normalScale.value.negate()),
      f.displacementMap &&
        ((_.displacementMap.value = f.displacementMap),
        t(f.displacementMap, _.displacementMapTransform),
        (_.displacementScale.value = f.displacementScale),
        (_.displacementBias.value = f.displacementBias)),
      f.emissiveMap &&
        ((_.emissiveMap.value = f.emissiveMap),
        t(f.emissiveMap, _.emissiveMapTransform)),
      f.specularMap &&
        ((_.specularMap.value = f.specularMap),
        t(f.specularMap, _.specularMapTransform)),
      f.alphaTest > 0 && (_.alphaTest.value = f.alphaTest);
    const S = e.get(f).envMap;
    if (
      (S &&
        ((_.envMap.value = S),
        (_.flipEnvMap.value =
          S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1),
        (_.reflectivity.value = f.reflectivity),
        (_.ior.value = f.ior),
        (_.refractionRatio.value = f.refractionRatio)),
      f.lightMap)
    ) {
      _.lightMap.value = f.lightMap;
      const x = r.useLegacyLights === !0 ? Math.PI : 1;
      (_.lightMapIntensity.value = f.lightMapIntensity * x),
        t(f.lightMap, _.lightMapTransform);
    }
    f.aoMap &&
      ((_.aoMap.value = f.aoMap),
      (_.aoMapIntensity.value = f.aoMapIntensity),
      t(f.aoMap, _.aoMapTransform));
  }
  function a(_, f) {
    _.diffuse.value.copy(f.color),
      (_.opacity.value = f.opacity),
      f.map && ((_.map.value = f.map), t(f.map, _.mapTransform));
  }
  function o(_, f) {
    (_.dashSize.value = f.dashSize),
      (_.totalSize.value = f.dashSize + f.gapSize),
      (_.scale.value = f.scale);
  }
  function l(_, f, S, x) {
    _.diffuse.value.copy(f.color),
      (_.opacity.value = f.opacity),
      (_.size.value = f.size * S),
      (_.scale.value = x * 0.5),
      f.map && ((_.map.value = f.map), t(f.map, _.uvTransform)),
      f.alphaMap && (_.alphaMap.value = f.alphaMap),
      f.alphaTest > 0 && (_.alphaTest.value = f.alphaTest);
  }
  function c(_, f) {
    _.diffuse.value.copy(f.color),
      (_.opacity.value = f.opacity),
      (_.rotation.value = f.rotation),
      f.map && ((_.map.value = f.map), t(f.map, _.mapTransform)),
      f.alphaMap && (_.alphaMap.value = f.alphaMap),
      f.alphaTest > 0 && (_.alphaTest.value = f.alphaTest);
  }
  function u(_, f) {
    _.specular.value.copy(f.specular),
      (_.shininess.value = Math.max(f.shininess, 1e-4));
  }
  function d(_, f) {
    f.gradientMap && (_.gradientMap.value = f.gradientMap);
  }
  function h(_, f) {
    (_.metalness.value = f.metalness),
      f.metalnessMap &&
        ((_.metalnessMap.value = f.metalnessMap),
        t(f.metalnessMap, _.metalnessMapTransform)),
      (_.roughness.value = f.roughness),
      f.roughnessMap &&
        ((_.roughnessMap.value = f.roughnessMap),
        t(f.roughnessMap, _.roughnessMapTransform)),
      e.get(f).envMap && (_.envMapIntensity.value = f.envMapIntensity);
  }
  function p(_, f, S) {
    (_.ior.value = f.ior),
      f.sheen > 0 &&
        (_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
        (_.sheenRoughness.value = f.sheenRoughness),
        f.sheenColorMap &&
          ((_.sheenColorMap.value = f.sheenColorMap),
          t(f.sheenColorMap, _.sheenColorMapTransform)),
        f.sheenRoughnessMap &&
          ((_.sheenRoughnessMap.value = f.sheenRoughnessMap),
          t(f.sheenRoughnessMap, _.sheenRoughnessMapTransform))),
      f.clearcoat > 0 &&
        ((_.clearcoat.value = f.clearcoat),
        (_.clearcoatRoughness.value = f.clearcoatRoughness),
        f.clearcoatMap &&
          ((_.clearcoatMap.value = f.clearcoatMap),
          t(f.clearcoatMap, _.clearcoatMapTransform)),
        f.clearcoatRoughnessMap &&
          ((_.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
          t(f.clearcoatRoughnessMap, _.clearcoatRoughnessMapTransform)),
        f.clearcoatNormalMap &&
          ((_.clearcoatNormalMap.value = f.clearcoatNormalMap),
          t(f.clearcoatNormalMap, _.clearcoatNormalMapTransform),
          _.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
          f.side === un && _.clearcoatNormalScale.value.negate())),
      f.iridescence > 0 &&
        ((_.iridescence.value = f.iridescence),
        (_.iridescenceIOR.value = f.iridescenceIOR),
        (_.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0]),
        (_.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1]),
        f.iridescenceMap &&
          ((_.iridescenceMap.value = f.iridescenceMap),
          t(f.iridescenceMap, _.iridescenceMapTransform)),
        f.iridescenceThicknessMap &&
          ((_.iridescenceThicknessMap.value = f.iridescenceThicknessMap),
          t(f.iridescenceThicknessMap, _.iridescenceThicknessMapTransform))),
      f.transmission > 0 &&
        ((_.transmission.value = f.transmission),
        (_.transmissionSamplerMap.value = S.texture),
        _.transmissionSamplerSize.value.set(S.width, S.height),
        f.transmissionMap &&
          ((_.transmissionMap.value = f.transmissionMap),
          t(f.transmissionMap, _.transmissionMapTransform)),
        (_.thickness.value = f.thickness),
        f.thicknessMap &&
          ((_.thicknessMap.value = f.thicknessMap),
          t(f.thicknessMap, _.thicknessMapTransform)),
        (_.attenuationDistance.value = f.attenuationDistance),
        _.attenuationColor.value.copy(f.attenuationColor)),
      (_.specularIntensity.value = f.specularIntensity),
      _.specularColor.value.copy(f.specularColor),
      f.specularColorMap &&
        ((_.specularColorMap.value = f.specularColorMap),
        t(f.specularColorMap, _.specularColorMapTransform)),
      f.specularIntensityMap &&
        ((_.specularIntensityMap.value = f.specularIntensityMap),
        t(f.specularIntensityMap, _.specularIntensityMapTransform));
  }
  function g(_, f) {
    f.matcap && (_.matcap.value = f.matcap);
  }
  function m(_, f) {
    const S = e.get(f).light;
    _.referencePosition.value.setFromMatrixPosition(S.matrixWorld),
      (_.nearDistance.value = S.shadow.camera.near),
      (_.farDistance.value = S.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function yM(r, e, t, n) {
  let i = {},
    s = {},
    a = [];
  const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(S, x) {
    const y = x.program;
    n.uniformBlockBinding(S, y);
  }
  function c(S, x) {
    let y = i[S.id];
    y === void 0 &&
      (g(S), (y = u(S)), (i[S.id] = y), S.addEventListener("dispose", _));
    const M = x.program;
    n.updateUBOMapping(S, M);
    const E = e.render.frame;
    s[S.id] !== E && (h(S), (s[S.id] = E));
  }
  function u(S) {
    const x = d();
    S.__bindingPointIndex = x;
    const y = r.createBuffer(),
      M = S.__size,
      E = S.usage;
    return (
      r.bindBuffer(r.UNIFORM_BUFFER, y),
      r.bufferData(r.UNIFORM_BUFFER, M, E),
      r.bindBuffer(r.UNIFORM_BUFFER, null),
      r.bindBufferBase(r.UNIFORM_BUFFER, x, y),
      y
    );
  }
  function d() {
    for (let S = 0; S < o; S++) if (a.indexOf(S) === -1) return a.push(S), S;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function h(S) {
    const x = i[S.id],
      y = S.uniforms,
      M = S.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, x);
    for (let E = 0, w = y.length; E < w; E++) {
      const P = y[E];
      if (p(P, E, M) === !0) {
        const v = P.__offset,
          T = Array.isArray(P.value) ? P.value : [P.value];
        let G = 0;
        for (let O = 0; O < T.length; O++) {
          const I = T[O],
            F = m(I);
          typeof I == "number"
            ? ((P.__data[0] = I),
              r.bufferSubData(r.UNIFORM_BUFFER, v + G, P.__data))
            : I.isMatrix3
            ? ((P.__data[0] = I.elements[0]),
              (P.__data[1] = I.elements[1]),
              (P.__data[2] = I.elements[2]),
              (P.__data[3] = I.elements[0]),
              (P.__data[4] = I.elements[3]),
              (P.__data[5] = I.elements[4]),
              (P.__data[6] = I.elements[5]),
              (P.__data[7] = I.elements[0]),
              (P.__data[8] = I.elements[6]),
              (P.__data[9] = I.elements[7]),
              (P.__data[10] = I.elements[8]),
              (P.__data[11] = I.elements[0]))
            : (I.toArray(P.__data, G),
              (G += F.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        r.bufferSubData(r.UNIFORM_BUFFER, v, P.__data);
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function p(S, x, y) {
    const M = S.value;
    if (y[x] === void 0) {
      if (typeof M == "number") y[x] = M;
      else {
        const E = Array.isArray(M) ? M : [M],
          w = [];
        for (let P = 0; P < E.length; P++) w.push(E[P].clone());
        y[x] = w;
      }
      return !0;
    } else if (typeof M == "number") {
      if (y[x] !== M) return (y[x] = M), !0;
    } else {
      const E = Array.isArray(y[x]) ? y[x] : [y[x]],
        w = Array.isArray(M) ? M : [M];
      for (let P = 0; P < E.length; P++) {
        const v = E[P];
        if (v.equals(w[P]) === !1) return v.copy(w[P]), !0;
      }
    }
    return !1;
  }
  function g(S) {
    const x = S.uniforms;
    let y = 0;
    const M = 16;
    let E = 0;
    for (let w = 0, P = x.length; w < P; w++) {
      const v = x[w],
        T = { boundary: 0, storage: 0 },
        G = Array.isArray(v.value) ? v.value : [v.value];
      for (let O = 0, I = G.length; O < I; O++) {
        const F = G[O],
          k = m(F);
        (T.boundary += k.boundary), (T.storage += k.storage);
      }
      if (
        ((v.__data = new Float32Array(
          T.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (v.__offset = y),
        w > 0)
      ) {
        E = y % M;
        const O = M - E;
        E !== 0 && O - T.boundary < 0 && ((y += M - E), (v.__offset = y));
      }
      y += T.storage;
    }
    return (
      (E = y % M), E > 0 && (y += M - E), (S.__size = y), (S.__cache = {}), this
    );
  }
  function m(S) {
    const x = { boundary: 0, storage: 0 };
    return (
      typeof S == "number"
        ? ((x.boundary = 4), (x.storage = 4))
        : S.isVector2
        ? ((x.boundary = 8), (x.storage = 8))
        : S.isVector3 || S.isColor
        ? ((x.boundary = 16), (x.storage = 12))
        : S.isVector4
        ? ((x.boundary = 16), (x.storage = 16))
        : S.isMatrix3
        ? ((x.boundary = 48), (x.storage = 48))
        : S.isMatrix4
        ? ((x.boundary = 64), (x.storage = 64))
        : S.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            S
          ),
      x
    );
  }
  function _(S) {
    const x = S.target;
    x.removeEventListener("dispose", _);
    const y = a.indexOf(x.__bindingPointIndex);
    a.splice(y, 1), r.deleteBuffer(i[x.id]), delete i[x.id], delete s[x.id];
  }
  function f() {
    for (const S in i) r.deleteBuffer(i[S]);
    (a = []), (i = {}), (s = {});
  }
  return { bind: l, update: c, dispose: f };
}
function EM() {
  const r = so("canvas");
  return (r.style.display = "block"), r;
}
class Dc {
  constructor(e = {}) {
    const {
      canvas: t = EM(),
      context: n = null,
      depth: i = !0,
      stencil: s = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let h;
    n !== null ? (h = n.getContextAttributes().alpha) : (h = a);
    let p = null,
      g = null;
    const m = [],
      _ = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.outputColorSpace = Xe),
      (this.useLegacyLights = !0),
      (this.toneMapping = yi),
      (this.toneMappingExposure = 1);
    const f = this;
    let S = !1,
      x = 0,
      y = 0,
      M = null,
      E = -1,
      w = null;
    const P = new Ct(),
      v = new Ct();
    let T = null,
      G = t.width,
      O = t.height,
      I = 1,
      F = null,
      k = null;
    const K = new Ct(0, 0, G, O),
      H = new Ct(0, 0, G, O);
    let W = !1;
    const Q = new Cc();
    let C = !1,
      fe = !1,
      se = null;
    const Y = new Mt(),
      J = new B(),
      ae = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function oe() {
      return M === null ? I : 1;
    }
    let D = n;
    function Ce(A, z) {
      for (let X = 0; X < A.length; X++) {
        const N = A[X],
          Z = t.getContext(N, z);
        if (Z !== null) return Z;
      }
      return null;
    }
    try {
      const A = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${Rc}`),
        t.addEventListener("webglcontextlost", ye, !1),
        t.addEventListener("webglcontextrestored", Fe, !1),
        t.addEventListener("webglcontextcreationerror", pe, !1),
        D === null)
      ) {
        const z = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (f.isWebGL1Renderer === !0 && z.shift(), (D = Ce(z, A)), D === null)
        )
          throw Ce(z)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      D.getShaderPrecisionFormat === void 0 &&
        (D.getShaderPrecisionFormat = function () {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
    } catch (A) {
      throw (console.error("THREE.WebGLRenderer: " + A.message), A);
    }
    let Ie,
      le,
      we,
      xe,
      _e,
      Oe,
      it,
      qe,
      q,
      st,
      Le,
      Je,
      ft,
      R,
      b,
      $,
      ie,
      te,
      ce,
      L,
      ee,
      V,
      ue,
      ve;
    function Te() {
      (Ie = new Iv(D)),
        (le = new Rv(D, Ie, e)),
        Ie.init(le),
        (V = new _M(D, Ie, le)),
        (we = new pM(D, Ie, le)),
        (xe = new Fv(D)),
        (_e = new eM()),
        (Oe = new mM(D, Ie, we, _e, le, V, xe)),
        (it = new Pv(f)),
        (qe = new Uv(f)),
        (q = new K_(D, le)),
        (ue = new wv(D, Ie, q, le)),
        (st = new Ov(D, q, xe, ue)),
        (Le = new Gv(D, st, q, xe)),
        (ce = new kv(D, le, Oe)),
        ($ = new Cv(_e)),
        (Je = new Qx(f, it, qe, Ie, le, ue, $)),
        (ft = new SM(f, _e)),
        (R = new nM()),
        (b = new lM(Ie, le)),
        (te = new bv(f, it, qe, we, Le, h, l)),
        (ie = new dM(f, Le, le)),
        (ve = new yM(D, xe, le, we)),
        (L = new Av(D, Ie, xe, le)),
        (ee = new Nv(D, Ie, xe, le)),
        (xe.programs = Je.programs),
        (f.capabilities = le),
        (f.extensions = Ie),
        (f.properties = _e),
        (f.renderLists = R),
        (f.shadowMap = ie),
        (f.state = we),
        (f.info = xe);
    }
    Te();
    const me = new MM(f, D);
    (this.xr = me),
      (this.getContext = function () {
        return D;
      }),
      (this.getContextAttributes = function () {
        return D.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const A = Ie.get("WEBGL_lose_context");
        A && A.loseContext();
      }),
      (this.forceContextRestore = function () {
        const A = Ie.get("WEBGL_lose_context");
        A && A.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return I;
      }),
      (this.setPixelRatio = function (A) {
        A !== void 0 && ((I = A), this.setSize(G, O, !1));
      }),
      (this.getSize = function (A) {
        return A.set(G, O);
      }),
      (this.setSize = function (A, z, X = !0) {
        if (me.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (G = A),
          (O = z),
          (t.width = Math.floor(A * I)),
          (t.height = Math.floor(z * I)),
          X === !0 && ((t.style.width = A + "px"), (t.style.height = z + "px")),
          this.setViewport(0, 0, A, z);
      }),
      (this.getDrawingBufferSize = function (A) {
        return A.set(G * I, O * I).floor();
      }),
      (this.setDrawingBufferSize = function (A, z, X) {
        (G = A),
          (O = z),
          (I = X),
          (t.width = Math.floor(A * X)),
          (t.height = Math.floor(z * X)),
          this.setViewport(0, 0, A, z);
      }),
      (this.getCurrentViewport = function (A) {
        return A.copy(P);
      }),
      (this.getViewport = function (A) {
        return A.copy(K);
      }),
      (this.setViewport = function (A, z, X, N) {
        A.isVector4 ? K.set(A.x, A.y, A.z, A.w) : K.set(A, z, X, N),
          we.viewport(P.copy(K).multiplyScalar(I).floor());
      }),
      (this.getScissor = function (A) {
        return A.copy(H);
      }),
      (this.setScissor = function (A, z, X, N) {
        A.isVector4 ? H.set(A.x, A.y, A.z, A.w) : H.set(A, z, X, N),
          we.scissor(v.copy(H).multiplyScalar(I).floor());
      }),
      (this.getScissorTest = function () {
        return W;
      }),
      (this.setScissorTest = function (A) {
        we.setScissorTest((W = A));
      }),
      (this.setOpaqueSort = function (A) {
        F = A;
      }),
      (this.setTransparentSort = function (A) {
        k = A;
      }),
      (this.getClearColor = function (A) {
        return A.copy(te.getClearColor());
      }),
      (this.setClearColor = function () {
        te.setClearColor.apply(te, arguments);
      }),
      (this.getClearAlpha = function () {
        return te.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        te.setClearAlpha.apply(te, arguments);
      }),
      (this.clear = function (A = !0, z = !0, X = !0) {
        let N = 0;
        A && (N |= D.COLOR_BUFFER_BIT),
          z && (N |= D.DEPTH_BUFFER_BIT),
          X && (N |= D.STENCIL_BUFFER_BIT),
          D.clear(N);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", ye, !1),
          t.removeEventListener("webglcontextrestored", Fe, !1),
          t.removeEventListener("webglcontextcreationerror", pe, !1),
          R.dispose(),
          b.dispose(),
          _e.dispose(),
          it.dispose(),
          qe.dispose(),
          Le.dispose(),
          ue.dispose(),
          ve.dispose(),
          Je.dispose(),
          me.dispose(),
          me.removeEventListener("sessionstart", be),
          me.removeEventListener("sessionend", tt),
          se && (se.dispose(), (se = null)),
          Ke.stop();
      });
    function ye(A) {
      A.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (S = !0);
    }
    function Fe() {
      console.log("THREE.WebGLRenderer: Context Restored."), (S = !1);
      const A = xe.autoReset,
        z = ie.enabled,
        X = ie.autoUpdate,
        N = ie.needsUpdate,
        Z = ie.type;
      Te(),
        (xe.autoReset = A),
        (ie.enabled = z),
        (ie.autoUpdate = X),
        (ie.needsUpdate = N),
        (ie.type = Z);
    }
    function pe(A) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        A.statusMessage
      );
    }
    function ot(A) {
      const z = A.target;
      z.removeEventListener("dispose", ot), U(z);
    }
    function U(A) {
      j(A), _e.remove(A);
    }
    function j(A) {
      const z = _e.get(A).programs;
      z !== void 0 &&
        (z.forEach(function (X) {
          Je.releaseProgram(X);
        }),
        A.isShaderMaterial && Je.releaseShaderCache(A));
    }
    (this.renderBufferDirect = function (A, z, X, N, Z, Me) {
      z === null && (z = ae);
      const Se = Z.isMesh && Z.matrixWorld.determinant() < 0,
        Ee = Et(A, z, X, N, Z);
      we.setMaterial(N, Se);
      let Ue = X.index,
        He = 1;
      N.wireframe === !0 && ((Ue = st.getWireframeAttribute(X)), (He = 2));
      const ke = X.drawRange,
        De = X.attributes.position;
      let Be = ke.start * He,
        ut = (ke.start + ke.count) * He;
      Me !== null &&
        ((Be = Math.max(Be, Me.start * He)),
        (ut = Math.min(ut, (Me.start + Me.count) * He))),
        Ue !== null
          ? ((Be = Math.max(Be, 0)), (ut = Math.min(ut, Ue.count)))
          : De != null &&
            ((Be = Math.max(Be, 0)), (ut = Math.min(ut, De.count)));
      const jt = ut - Be;
      if (jt < 0 || jt === 1 / 0) return;
      ue.setup(Z, N, Ee, X, Ue);
      let Zn,
        ht = L;
      if (
        (Ue !== null && ((Zn = q.get(Ue)), (ht = ee), ht.setIndex(Zn)),
        Z.isMesh)
      )
        N.wireframe === !0
          ? (we.setLineWidth(N.wireframeLinewidth * oe()), ht.setMode(D.LINES))
          : ht.setMode(D.TRIANGLES);
      else if (Z.isLine) {
        let Ge = N.linewidth;
        Ge === void 0 && (Ge = 1),
          we.setLineWidth(Ge * oe()),
          Z.isLineSegments
            ? ht.setMode(D.LINES)
            : Z.isLineLoop
            ? ht.setMode(D.LINE_LOOP)
            : ht.setMode(D.LINE_STRIP);
      } else
        Z.isPoints
          ? ht.setMode(D.POINTS)
          : Z.isSprite && ht.setMode(D.TRIANGLES);
      if (Z.isInstancedMesh) ht.renderInstances(Be, jt, Z.count);
      else if (X.isInstancedBufferGeometry) {
        const Ge = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0,
          ci = Math.min(X.instanceCount, Ge);
        ht.renderInstances(Be, jt, ci);
      } else ht.render(Be, jt);
    }),
      (this.compile = function (A, z) {
        function X(N, Z, Me) {
          N.transparent === !0 && N.side === Yn && N.forceSinglePass === !1
            ? ((N.side = un),
              (N.needsUpdate = !0),
              Ne(N, Z, Me),
              (N.side = Wi),
              (N.needsUpdate = !0),
              Ne(N, Z, Me),
              (N.side = Yn))
            : Ne(N, Z, Me);
        }
        (g = b.get(A)),
          g.init(),
          _.push(g),
          A.traverseVisible(function (N) {
            N.isLight &&
              N.layers.test(z.layers) &&
              (g.pushLight(N), N.castShadow && g.pushShadow(N));
          }),
          g.setupLights(f.useLegacyLights),
          A.traverse(function (N) {
            const Z = N.material;
            if (Z)
              if (Array.isArray(Z))
                for (let Me = 0; Me < Z.length; Me++) {
                  const Se = Z[Me];
                  X(Se, A, N);
                }
              else X(Z, A, N);
          }),
          _.pop(),
          (g = null);
      });
    let ne = null;
    function he(A) {
      ne && ne(A);
    }
    function be() {
      Ke.stop();
    }
    function tt() {
      Ke.start();
    }
    const Ke = new Ud();
    Ke.setAnimationLoop(he),
      typeof self < "u" && Ke.setContext(self),
      (this.setAnimationLoop = function (A) {
        (ne = A), me.setAnimationLoop(A), A === null ? Ke.stop() : Ke.start();
      }),
      me.addEventListener("sessionstart", be),
      me.addEventListener("sessionend", tt),
      (this.render = function (A, z) {
        if (z !== void 0 && z.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (S === !0) return;
        A.matrixWorldAutoUpdate === !0 && A.updateMatrixWorld(),
          z.parent === null &&
            z.matrixWorldAutoUpdate === !0 &&
            z.updateMatrixWorld(),
          me.enabled === !0 &&
            me.isPresenting === !0 &&
            (me.cameraAutoUpdate === !0 && me.updateCamera(z),
            (z = me.getCamera())),
          A.isScene === !0 && A.onBeforeRender(f, A, z, M),
          (g = b.get(A, _.length)),
          g.init(),
          _.push(g),
          Y.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse),
          Q.setFromProjectionMatrix(Y),
          (fe = this.localClippingEnabled),
          (C = $.init(this.clippingPlanes, fe)),
          (p = R.get(A, m.length)),
          p.init(),
          m.push(p),
          gt(A, z, 0, f.sortObjects),
          p.finish(),
          f.sortObjects === !0 && p.sort(F, k),
          C === !0 && $.beginShadows();
        const X = g.state.shadowsArray;
        if (
          (ie.render(X, A, z),
          C === !0 && $.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          te.render(p, A),
          g.setupLights(f.useLegacyLights),
          z.isArrayCamera)
        ) {
          const N = z.cameras;
          for (let Z = 0, Me = N.length; Z < Me; Z++) {
            const Se = N[Z];
            ze(p, A, Se, Se.viewport);
          }
        } else ze(p, A, z);
        M !== null &&
          (Oe.updateMultisampleRenderTarget(M), Oe.updateRenderTargetMipmap(M)),
          A.isScene === !0 && A.onAfterRender(f, A, z),
          ue.resetDefaultState(),
          (E = -1),
          (w = null),
          _.pop(),
          _.length > 0 ? (g = _[_.length - 1]) : (g = null),
          m.pop(),
          m.length > 0 ? (p = m[m.length - 1]) : (p = null);
      });
    function gt(A, z, X, N) {
      if (A.visible === !1) return;
      if (A.layers.test(z.layers)) {
        if (A.isGroup) X = A.renderOrder;
        else if (A.isLOD) A.autoUpdate === !0 && A.update(z);
        else if (A.isLight) g.pushLight(A), A.castShadow && g.pushShadow(A);
        else if (A.isSprite) {
          if (!A.frustumCulled || Q.intersectsSprite(A)) {
            N && J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Y);
            const Se = Le.update(A),
              Ee = A.material;
            Ee.visible && p.push(A, Se, Ee, X, J.z, null);
          }
        } else if (
          (A.isMesh || A.isLine || A.isPoints) &&
          (!A.frustumCulled || Q.intersectsObject(A))
        ) {
          A.isSkinnedMesh &&
            A.skeleton.frame !== xe.render.frame &&
            (A.skeleton.update(), (A.skeleton.frame = xe.render.frame));
          const Se = Le.update(A),
            Ee = A.material;
          if (
            (N &&
              (Se.boundingSphere === null && Se.computeBoundingSphere(),
              J.copy(Se.boundingSphere.center)
                .applyMatrix4(A.matrixWorld)
                .applyMatrix4(Y)),
            Array.isArray(Ee))
          ) {
            const Ue = Se.groups;
            for (let He = 0, ke = Ue.length; He < ke; He++) {
              const De = Ue[He],
                Be = Ee[De.materialIndex];
              Be && Be.visible && p.push(A, Se, Be, X, J.z, De);
            }
          } else Ee.visible && p.push(A, Se, Ee, X, J.z, null);
        }
      }
      const Me = A.children;
      for (let Se = 0, Ee = Me.length; Se < Ee; Se++) gt(Me[Se], z, X, N);
    }
    function ze(A, z, X, N) {
      const Z = A.opaque,
        Me = A.transmissive,
        Se = A.transparent;
      g.setupLightsView(X),
        C === !0 && $.setGlobalState(f.clippingPlanes, X),
        Me.length > 0 && ge(Z, Me, z, X),
        N && we.viewport(P.copy(N)),
        Z.length > 0 && re(Z, z, X),
        Me.length > 0 && re(Me, z, X),
        Se.length > 0 && re(Se, z, X),
        we.buffers.depth.setTest(!0),
        we.buffers.depth.setMask(!0),
        we.buffers.color.setMask(!0),
        we.setPolygonOffset(!1);
    }
    function ge(A, z, X, N) {
      if (se === null) {
        const Ee = le.isWebGL2;
        se = new yr(1024, 1024, {
          generateMipmaps: !0,
          type: Ie.has("EXT_color_buffer_half_float") ? ro : Sr,
          minFilter: io,
          samples: Ee && o === !0 ? 4 : 0,
        });
      }
      const Z = f.getRenderTarget();
      f.setRenderTarget(se), f.clear();
      const Me = f.toneMapping;
      (f.toneMapping = yi),
        re(A, X, N),
        Oe.updateMultisampleRenderTarget(se),
        Oe.updateRenderTargetMipmap(se);
      let Se = !1;
      for (let Ee = 0, Ue = z.length; Ee < Ue; Ee++) {
        const He = z[Ee],
          ke = He.object,
          De = He.geometry,
          Be = He.material,
          ut = He.group;
        if (Be.side === Yn && ke.layers.test(N.layers)) {
          const jt = Be.side;
          (Be.side = un),
            (Be.needsUpdate = !0),
            Ae(ke, X, N, De, Be, ut),
            (Be.side = jt),
            (Be.needsUpdate = !0),
            (Se = !0);
        }
      }
      Se === !0 &&
        (Oe.updateMultisampleRenderTarget(se), Oe.updateRenderTargetMipmap(se)),
        f.setRenderTarget(Z),
        (f.toneMapping = Me);
    }
    function re(A, z, X) {
      const N = z.isScene === !0 ? z.overrideMaterial : null;
      for (let Z = 0, Me = A.length; Z < Me; Z++) {
        const Se = A[Z],
          Ee = Se.object,
          Ue = Se.geometry,
          He = N === null ? Se.material : N,
          ke = Se.group;
        Ee.layers.test(X.layers) && Ae(Ee, z, X, Ue, He, ke);
      }
    }
    function Ae(A, z, X, N, Z, Me) {
      A.onBeforeRender(f, z, X, N, Z, Me),
        A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, A.matrixWorld),
        A.normalMatrix.getNormalMatrix(A.modelViewMatrix),
        Z.onBeforeRender(f, z, X, N, A, Me),
        Z.transparent === !0 && Z.side === Yn && Z.forceSinglePass === !1
          ? ((Z.side = un),
            (Z.needsUpdate = !0),
            f.renderBufferDirect(X, z, N, Z, A, Me),
            (Z.side = Wi),
            (Z.needsUpdate = !0),
            f.renderBufferDirect(X, z, N, Z, A, Me),
            (Z.side = Yn))
          : f.renderBufferDirect(X, z, N, Z, A, Me),
        A.onAfterRender(f, z, X, N, Z, Me);
    }
    function Ne(A, z, X) {
      z.isScene !== !0 && (z = ae);
      const N = _e.get(A),
        Z = g.state.lights,
        Me = g.state.shadowsArray,
        Se = Z.state.version,
        Ee = Je.getParameters(A, Z.state, Me, z, X),
        Ue = Je.getProgramCacheKey(Ee);
      let He = N.programs;
      (N.environment = A.isMeshStandardMaterial ? z.environment : null),
        (N.fog = z.fog),
        (N.envMap = (A.isMeshStandardMaterial ? qe : it).get(
          A.envMap || N.environment
        )),
        He === void 0 &&
          (A.addEventListener("dispose", ot),
          (He = new Map()),
          (N.programs = He));
      let ke = He.get(Ue);
      if (ke !== void 0) {
        if (N.currentProgram === ke && N.lightsStateVersion === Se)
          return Ve(A, Ee), ke;
      } else
        (Ee.uniforms = Je.getUniforms(A)),
          A.onBuild(X, Ee, f),
          A.onBeforeCompile(Ee, f),
          (ke = Je.acquireProgram(Ee, Ue)),
          He.set(Ue, ke),
          (N.uniforms = Ee.uniforms);
      const De = N.uniforms;
      ((!A.isShaderMaterial && !A.isRawShaderMaterial) || A.clipping === !0) &&
        (De.clippingPlanes = $.uniform),
        Ve(A, Ee),
        (N.needsLights = dt(A)),
        (N.lightsStateVersion = Se),
        N.needsLights &&
          ((De.ambientLightColor.value = Z.state.ambient),
          (De.lightProbe.value = Z.state.probe),
          (De.directionalLights.value = Z.state.directional),
          (De.directionalLightShadows.value = Z.state.directionalShadow),
          (De.spotLights.value = Z.state.spot),
          (De.spotLightShadows.value = Z.state.spotShadow),
          (De.rectAreaLights.value = Z.state.rectArea),
          (De.ltc_1.value = Z.state.rectAreaLTC1),
          (De.ltc_2.value = Z.state.rectAreaLTC2),
          (De.pointLights.value = Z.state.point),
          (De.pointLightShadows.value = Z.state.pointShadow),
          (De.hemisphereLights.value = Z.state.hemi),
          (De.directionalShadowMap.value = Z.state.directionalShadowMap),
          (De.directionalShadowMatrix.value = Z.state.directionalShadowMatrix),
          (De.spotShadowMap.value = Z.state.spotShadowMap),
          (De.spotLightMatrix.value = Z.state.spotLightMatrix),
          (De.spotLightMap.value = Z.state.spotLightMap),
          (De.pointShadowMap.value = Z.state.pointShadowMap),
          (De.pointShadowMatrix.value = Z.state.pointShadowMatrix));
      const Be = ke.getUniforms(),
        ut = ra.seqWithValue(Be.seq, De);
      return (N.currentProgram = ke), (N.uniformsList = ut), ke;
    }
    function Ve(A, z) {
      const X = _e.get(A);
      (X.outputColorSpace = z.outputColorSpace),
        (X.instancing = z.instancing),
        (X.skinning = z.skinning),
        (X.morphTargets = z.morphTargets),
        (X.morphNormals = z.morphNormals),
        (X.morphColors = z.morphColors),
        (X.morphTargetsCount = z.morphTargetsCount),
        (X.numClippingPlanes = z.numClippingPlanes),
        (X.numIntersection = z.numClipIntersection),
        (X.vertexAlphas = z.vertexAlphas),
        (X.vertexTangents = z.vertexTangents),
        (X.toneMapping = z.toneMapping);
    }
    function Et(A, z, X, N, Z) {
      z.isScene !== !0 && (z = ae), Oe.resetTextureUnits();
      const Me = z.fog,
        Se = N.isMeshStandardMaterial ? z.environment : null,
        Ee =
          M === null
            ? f.outputColorSpace
            : M.isXRRenderTarget === !0
            ? M.texture.colorSpace
            : ai,
        Ue = (N.isMeshStandardMaterial ? qe : it).get(N.envMap || Se),
        He =
          N.vertexColors === !0 &&
          !!X.attributes.color &&
          X.attributes.color.itemSize === 4,
        ke = !!N.normalMap && !!X.attributes.tangent,
        De = !!X.morphAttributes.position,
        Be = !!X.morphAttributes.normal,
        ut = !!X.morphAttributes.color,
        jt = N.toneMapped ? f.toneMapping : yi,
        Zn =
          X.morphAttributes.position ||
          X.morphAttributes.normal ||
          X.morphAttributes.color,
        ht = Zn !== void 0 ? Zn.length : 0,
        Ge = _e.get(N),
        ci = g.state.lights;
      if (C === !0 && (fe === !0 || A !== w)) {
        const dn = A === w && N.id === E;
        $.setState(N, A, dn);
      }
      let Dt = !1;
      N.version === Ge.__version
        ? ((Ge.needsLights && Ge.lightsStateVersion !== ci.state.version) ||
            Ge.outputColorSpace !== Ee ||
            (Z.isInstancedMesh && Ge.instancing === !1) ||
            (!Z.isInstancedMesh && Ge.instancing === !0) ||
            (Z.isSkinnedMesh && Ge.skinning === !1) ||
            (!Z.isSkinnedMesh && Ge.skinning === !0) ||
            Ge.envMap !== Ue ||
            (N.fog === !0 && Ge.fog !== Me) ||
            (Ge.numClippingPlanes !== void 0 &&
              (Ge.numClippingPlanes !== $.numPlanes ||
                Ge.numIntersection !== $.numIntersection)) ||
            Ge.vertexAlphas !== He ||
            Ge.vertexTangents !== ke ||
            Ge.morphTargets !== De ||
            Ge.morphNormals !== Be ||
            Ge.morphColors !== ut ||
            Ge.toneMapping !== jt ||
            (le.isWebGL2 === !0 && Ge.morphTargetsCount !== ht)) &&
          (Dt = !0)
        : ((Dt = !0), (Ge.__version = N.version));
      let qi = Ge.currentProgram;
      Dt === !0 && (qi = Ne(N, z, Z));
      let Ic = !1,
        Es = !1,
        wa = !1;
      const Kt = qi.getUniforms(),
        Yi = Ge.uniforms;
      if (
        (we.useProgram(qi.program) && ((Ic = !0), (Es = !0), (wa = !0)),
        N.id !== E && ((E = N.id), (Es = !0)),
        Ic || w !== A)
      ) {
        if (
          (Kt.setValue(D, "projectionMatrix", A.projectionMatrix),
          le.logarithmicDepthBuffer &&
            Kt.setValue(
              D,
              "logDepthBufFC",
              2 / (Math.log(A.far + 1) / Math.LN2)
            ),
          w !== A && ((w = A), (Es = !0), (wa = !0)),
          N.isShaderMaterial ||
            N.isMeshPhongMaterial ||
            N.isMeshToonMaterial ||
            N.isMeshStandardMaterial ||
            N.envMap)
        ) {
          const dn = Kt.map.cameraPosition;
          dn !== void 0 &&
            dn.setValue(D, J.setFromMatrixPosition(A.matrixWorld));
        }
        (N.isMeshPhongMaterial ||
          N.isMeshToonMaterial ||
          N.isMeshLambertMaterial ||
          N.isMeshBasicMaterial ||
          N.isMeshStandardMaterial ||
          N.isShaderMaterial) &&
          Kt.setValue(D, "isOrthographic", A.isOrthographicCamera === !0),
          (N.isMeshPhongMaterial ||
            N.isMeshToonMaterial ||
            N.isMeshLambertMaterial ||
            N.isMeshBasicMaterial ||
            N.isMeshStandardMaterial ||
            N.isShaderMaterial ||
            N.isShadowMaterial ||
            Z.isSkinnedMesh) &&
            Kt.setValue(D, "viewMatrix", A.matrixWorldInverse);
      }
      if (Z.isSkinnedMesh) {
        Kt.setOptional(D, Z, "bindMatrix"),
          Kt.setOptional(D, Z, "bindMatrixInverse");
        const dn = Z.skeleton;
        dn &&
          (le.floatVertexTextures
            ? (dn.boneTexture === null && dn.computeBoneTexture(),
              Kt.setValue(D, "boneTexture", dn.boneTexture, Oe),
              Kt.setValue(D, "boneTextureSize", dn.boneTextureSize))
            : console.warn(
                "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
              ));
      }
      const Aa = X.morphAttributes;
      if (
        ((Aa.position !== void 0 ||
          Aa.normal !== void 0 ||
          (Aa.color !== void 0 && le.isWebGL2 === !0)) &&
          ce.update(Z, X, qi),
        (Es || Ge.receiveShadow !== Z.receiveShadow) &&
          ((Ge.receiveShadow = Z.receiveShadow),
          Kt.setValue(D, "receiveShadow", Z.receiveShadow)),
        N.isMeshGouraudMaterial &&
          N.envMap !== null &&
          ((Yi.envMap.value = Ue),
          (Yi.flipEnvMap.value =
            Ue.isCubeTexture && Ue.isRenderTargetTexture === !1 ? -1 : 1)),
        Es &&
          (Kt.setValue(D, "toneMappingExposure", f.toneMappingExposure),
          Ge.needsLights && rt(Yi, wa),
          Me && N.fog === !0 && ft.refreshFogUniforms(Yi, Me),
          ft.refreshMaterialUniforms(Yi, N, I, O, se),
          ra.upload(D, Ge.uniformsList, Yi, Oe)),
        N.isShaderMaterial &&
          N.uniformsNeedUpdate === !0 &&
          (ra.upload(D, Ge.uniformsList, Yi, Oe), (N.uniformsNeedUpdate = !1)),
        N.isSpriteMaterial && Kt.setValue(D, "center", Z.center),
        Kt.setValue(D, "modelViewMatrix", Z.modelViewMatrix),
        Kt.setValue(D, "normalMatrix", Z.normalMatrix),
        Kt.setValue(D, "modelMatrix", Z.matrixWorld),
        N.isShaderMaterial || N.isRawShaderMaterial)
      ) {
        const dn = N.uniformsGroups;
        for (let Ra = 0, Vd = dn.length; Ra < Vd; Ra++)
          if (le.isWebGL2) {
            const Oc = dn[Ra];
            ve.update(Oc, qi), ve.bind(Oc, qi);
          } else
            console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
            );
      }
      return qi;
    }
    function rt(A, z) {
      (A.ambientLightColor.needsUpdate = z),
        (A.lightProbe.needsUpdate = z),
        (A.directionalLights.needsUpdate = z),
        (A.directionalLightShadows.needsUpdate = z),
        (A.pointLights.needsUpdate = z),
        (A.pointLightShadows.needsUpdate = z),
        (A.spotLights.needsUpdate = z),
        (A.spotLightShadows.needsUpdate = z),
        (A.rectAreaLights.needsUpdate = z),
        (A.hemisphereLights.needsUpdate = z);
    }
    function dt(A) {
      return (
        A.isMeshLambertMaterial ||
        A.isMeshToonMaterial ||
        A.isMeshPhongMaterial ||
        A.isMeshStandardMaterial ||
        A.isShadowMaterial ||
        (A.isShaderMaterial && A.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return x;
    }),
      (this.getActiveMipmapLevel = function () {
        return y;
      }),
      (this.getRenderTarget = function () {
        return M;
      }),
      (this.setRenderTargetTextures = function (A, z, X) {
        (_e.get(A.texture).__webglTexture = z),
          (_e.get(A.depthTexture).__webglTexture = X);
        const N = _e.get(A);
        (N.__hasExternalTextures = !0),
          N.__hasExternalTextures &&
            ((N.__autoAllocateDepthBuffer = X === void 0),
            N.__autoAllocateDepthBuffer ||
              (Ie.has("WEBGL_multisampled_render_to_texture") === !0 &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                ),
                (N.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (A, z) {
        const X = _e.get(A);
        (X.__webglFramebuffer = z), (X.__useDefaultFramebuffer = z === void 0);
      }),
      (this.setRenderTarget = function (A, z = 0, X = 0) {
        (M = A), (x = z), (y = X);
        let N = !0,
          Z = null,
          Me = !1,
          Se = !1;
        if (A) {
          const Ue = _e.get(A);
          Ue.__useDefaultFramebuffer !== void 0
            ? (we.bindFramebuffer(D.FRAMEBUFFER, null), (N = !1))
            : Ue.__webglFramebuffer === void 0
            ? Oe.setupRenderTarget(A)
            : Ue.__hasExternalTextures &&
              Oe.rebindTextures(
                A,
                _e.get(A.texture).__webglTexture,
                _e.get(A.depthTexture).__webglTexture
              );
          const He = A.texture;
          (He.isData3DTexture ||
            He.isDataArrayTexture ||
            He.isCompressedArrayTexture) &&
            (Se = !0);
          const ke = _e.get(A).__webglFramebuffer;
          A.isWebGLCubeRenderTarget
            ? ((Z = ke[z]), (Me = !0))
            : le.isWebGL2 && A.samples > 0 && Oe.useMultisampledRTT(A) === !1
            ? (Z = _e.get(A).__webglMultisampledFramebuffer)
            : (Z = ke),
            P.copy(A.viewport),
            v.copy(A.scissor),
            (T = A.scissorTest);
        } else
          P.copy(K).multiplyScalar(I).floor(),
            v.copy(H).multiplyScalar(I).floor(),
            (T = W);
        if (
          (we.bindFramebuffer(D.FRAMEBUFFER, Z) &&
            le.drawBuffers &&
            N &&
            we.drawBuffers(A, Z),
          we.viewport(P),
          we.scissor(v),
          we.setScissorTest(T),
          Me)
        ) {
          const Ue = _e.get(A.texture);
          D.framebufferTexture2D(
            D.FRAMEBUFFER,
            D.COLOR_ATTACHMENT0,
            D.TEXTURE_CUBE_MAP_POSITIVE_X + z,
            Ue.__webglTexture,
            X
          );
        } else if (Se) {
          const Ue = _e.get(A.texture),
            He = z || 0;
          D.framebufferTextureLayer(
            D.FRAMEBUFFER,
            D.COLOR_ATTACHMENT0,
            Ue.__webglTexture,
            X || 0,
            He
          );
        }
        E = -1;
      }),
      (this.readRenderTargetPixels = function (A, z, X, N, Z, Me, Se) {
        if (!(A && A.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let Ee = _e.get(A).__webglFramebuffer;
        if ((A.isWebGLCubeRenderTarget && Se !== void 0 && (Ee = Ee[Se]), Ee)) {
          we.bindFramebuffer(D.FRAMEBUFFER, Ee);
          try {
            const Ue = A.texture,
              He = Ue.format,
              ke = Ue.type;
            if (
              He !== Kn &&
              V.convert(He) !==
                D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            const De =
              ke === ro &&
              (Ie.has("EXT_color_buffer_half_float") ||
                (le.isWebGL2 && Ie.has("EXT_color_buffer_float")));
            if (
              ke !== Sr &&
              V.convert(ke) !==
                D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(
                ke === ar &&
                (le.isWebGL2 ||
                  Ie.has("OES_texture_float") ||
                  Ie.has("WEBGL_color_buffer_float"))
              ) &&
              !De
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            z >= 0 &&
              z <= A.width - N &&
              X >= 0 &&
              X <= A.height - Z &&
              D.readPixels(z, X, N, Z, V.convert(He), V.convert(ke), Me);
          } finally {
            const Ue = M !== null ? _e.get(M).__webglFramebuffer : null;
            we.bindFramebuffer(D.FRAMEBUFFER, Ue);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (A, z, X = 0) {
        const N = Math.pow(2, -X),
          Z = Math.floor(z.image.width * N),
          Me = Math.floor(z.image.height * N);
        Oe.setTexture2D(z, 0),
          D.copyTexSubImage2D(D.TEXTURE_2D, X, 0, 0, A.x, A.y, Z, Me),
          we.unbindTexture();
      }),
      (this.copyTextureToTexture = function (A, z, X, N = 0) {
        const Z = z.image.width,
          Me = z.image.height,
          Se = V.convert(X.format),
          Ee = V.convert(X.type);
        Oe.setTexture2D(X, 0),
          D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, X.flipY),
          D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, X.premultiplyAlpha),
          D.pixelStorei(D.UNPACK_ALIGNMENT, X.unpackAlignment),
          z.isDataTexture
            ? D.texSubImage2D(
                D.TEXTURE_2D,
                N,
                A.x,
                A.y,
                Z,
                Me,
                Se,
                Ee,
                z.image.data
              )
            : z.isCompressedTexture
            ? D.compressedTexSubImage2D(
                D.TEXTURE_2D,
                N,
                A.x,
                A.y,
                z.mipmaps[0].width,
                z.mipmaps[0].height,
                Se,
                z.mipmaps[0].data
              )
            : D.texSubImage2D(D.TEXTURE_2D, N, A.x, A.y, Se, Ee, z.image),
          N === 0 && X.generateMipmaps && D.generateMipmap(D.TEXTURE_2D),
          we.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (A, z, X, N, Z = 0) {
        if (f.isWebGL1Renderer) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
          return;
        }
        const Me = A.max.x - A.min.x + 1,
          Se = A.max.y - A.min.y + 1,
          Ee = A.max.z - A.min.z + 1,
          Ue = V.convert(N.format),
          He = V.convert(N.type);
        let ke;
        if (N.isData3DTexture) Oe.setTexture3D(N, 0), (ke = D.TEXTURE_3D);
        else if (N.isDataArrayTexture)
          Oe.setTexture2DArray(N, 0), (ke = D.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, N.flipY),
          D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha),
          D.pixelStorei(D.UNPACK_ALIGNMENT, N.unpackAlignment);
        const De = D.getParameter(D.UNPACK_ROW_LENGTH),
          Be = D.getParameter(D.UNPACK_IMAGE_HEIGHT),
          ut = D.getParameter(D.UNPACK_SKIP_PIXELS),
          jt = D.getParameter(D.UNPACK_SKIP_ROWS),
          Zn = D.getParameter(D.UNPACK_SKIP_IMAGES),
          ht = X.isCompressedTexture ? X.mipmaps[0] : X.image;
        D.pixelStorei(D.UNPACK_ROW_LENGTH, ht.width),
          D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, ht.height),
          D.pixelStorei(D.UNPACK_SKIP_PIXELS, A.min.x),
          D.pixelStorei(D.UNPACK_SKIP_ROWS, A.min.y),
          D.pixelStorei(D.UNPACK_SKIP_IMAGES, A.min.z),
          X.isDataTexture || X.isData3DTexture
            ? D.texSubImage3D(ke, Z, z.x, z.y, z.z, Me, Se, Ee, Ue, He, ht.data)
            : X.isCompressedArrayTexture
            ? (console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
              ),
              D.compressedTexSubImage3D(
                ke,
                Z,
                z.x,
                z.y,
                z.z,
                Me,
                Se,
                Ee,
                Ue,
                ht.data
              ))
            : D.texSubImage3D(ke, Z, z.x, z.y, z.z, Me, Se, Ee, Ue, He, ht),
          D.pixelStorei(D.UNPACK_ROW_LENGTH, De),
          D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, Be),
          D.pixelStorei(D.UNPACK_SKIP_PIXELS, ut),
          D.pixelStorei(D.UNPACK_SKIP_ROWS, jt),
          D.pixelStorei(D.UNPACK_SKIP_IMAGES, Zn),
          Z === 0 && N.generateMipmaps && D.generateMipmap(ke),
          we.unbindTexture();
      }),
      (this.initTexture = function (A) {
        A.isCubeTexture
          ? Oe.setTextureCube(A, 0)
          : A.isData3DTexture
          ? Oe.setTexture3D(A, 0)
          : A.isDataArrayTexture || A.isCompressedArrayTexture
          ? Oe.setTexture2DArray(A, 0)
          : Oe.setTexture2D(A, 0),
          we.unbindTexture();
      }),
      (this.resetState = function () {
        (x = 0), (y = 0), (M = null), we.reset(), ue.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get physicallyCorrectLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
      ),
      !this.useLegacyLights
    );
  }
  set physicallyCorrectLights(e) {
    console.warn(
      "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
    ),
      (this.useLegacyLights = !e);
  }
  get outputEncoding() {
    return (
      console.warn(
        "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
      ),
      this.outputColorSpace === Xe ? mr : gd
    );
  }
  set outputEncoding(e) {
    console.warn(
      "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
    ),
      (this.outputColorSpace = e === mr ? Xe : ai);
  }
}
class TM extends Dc {}
TM.prototype.isWebGL1Renderer = !0;
class Bd extends kt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
  get autoUpdate() {
    return (
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
    ),
      (this.matrixWorldAutoUpdate = e);
  }
}
class bM extends Ss {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new nt(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const Ph = new Mt(),
  rc = new Td(),
  qo = new Ea(),
  Yo = new B();
class wM extends kt {
  constructor(e = new li(), t = new bM()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      qo.copy(n.boundingSphere),
      qo.applyMatrix4(i),
      (qo.radius += s),
      e.ray.intersectsSphere(qo) === !1)
    )
      return;
    Ph.copy(i).invert(), rc.copy(e.ray).applyMatrix4(Ph);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = n.index,
      d = n.attributes.position;
    if (c !== null) {
      const h = Math.max(0, a.start),
        p = Math.min(c.count, a.start + a.count);
      for (let g = h, m = p; g < m; g++) {
        const _ = c.getX(g);
        Yo.fromBufferAttribute(d, _), Lh(Yo, _, l, i, e, t, this);
      }
    } else {
      const h = Math.max(0, a.start),
        p = Math.min(d.count, a.start + a.count);
      for (let g = h, m = p; g < m; g++)
        Yo.fromBufferAttribute(d, g), Lh(Yo, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
function Lh(r, e, t, n, i, s, a) {
  const o = rc.distanceSqToPoint(r);
  if (o < t) {
    const l = new B();
    rc.closestPointToPoint(r, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      object: a,
    });
  }
}
class Uc extends li {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: n, detail: i });
    const s = [],
      a = [];
    o(i),
      c(n),
      u(),
      this.setAttribute("position", new bn(s, 3)),
      this.setAttribute("normal", new bn(s.slice(), 3)),
      this.setAttribute("uv", new bn(a, 2)),
      i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(S) {
      const x = new B(),
        y = new B(),
        M = new B();
      for (let E = 0; E < t.length; E += 3)
        p(t[E + 0], x), p(t[E + 1], y), p(t[E + 2], M), l(x, y, M, S);
    }
    function l(S, x, y, M) {
      const E = M + 1,
        w = [];
      for (let P = 0; P <= E; P++) {
        w[P] = [];
        const v = S.clone().lerp(y, P / E),
          T = x.clone().lerp(y, P / E),
          G = E - P;
        for (let O = 0; O <= G; O++)
          O === 0 && P === E
            ? (w[P][O] = v)
            : (w[P][O] = v.clone().lerp(T, O / G));
      }
      for (let P = 0; P < E; P++)
        for (let v = 0; v < 2 * (E - P) - 1; v++) {
          const T = Math.floor(v / 2);
          v % 2 === 0
            ? (h(w[P][T + 1]), h(w[P + 1][T]), h(w[P][T]))
            : (h(w[P][T + 1]), h(w[P + 1][T + 1]), h(w[P + 1][T]));
        }
    }
    function c(S) {
      const x = new B();
      for (let y = 0; y < s.length; y += 3)
        (x.x = s[y + 0]),
          (x.y = s[y + 1]),
          (x.z = s[y + 2]),
          x.normalize().multiplyScalar(S),
          (s[y + 0] = x.x),
          (s[y + 1] = x.y),
          (s[y + 2] = x.z);
    }
    function u() {
      const S = new B();
      for (let x = 0; x < s.length; x += 3) {
        (S.x = s[x + 0]), (S.y = s[x + 1]), (S.z = s[x + 2]);
        const y = _(S) / 2 / Math.PI + 0.5,
          M = f(S) / Math.PI + 0.5;
        a.push(y, 1 - M);
      }
      g(), d();
    }
    function d() {
      for (let S = 0; S < a.length; S += 6) {
        const x = a[S + 0],
          y = a[S + 2],
          M = a[S + 4],
          E = Math.max(x, y, M),
          w = Math.min(x, y, M);
        E > 0.9 &&
          w < 0.1 &&
          (x < 0.2 && (a[S + 0] += 1),
          y < 0.2 && (a[S + 2] += 1),
          M < 0.2 && (a[S + 4] += 1));
      }
    }
    function h(S) {
      s.push(S.x, S.y, S.z);
    }
    function p(S, x) {
      const y = S * 3;
      (x.x = e[y + 0]), (x.y = e[y + 1]), (x.z = e[y + 2]);
    }
    function g() {
      const S = new B(),
        x = new B(),
        y = new B(),
        M = new B(),
        E = new We(),
        w = new We(),
        P = new We();
      for (let v = 0, T = 0; v < s.length; v += 9, T += 6) {
        S.set(s[v + 0], s[v + 1], s[v + 2]),
          x.set(s[v + 3], s[v + 4], s[v + 5]),
          y.set(s[v + 6], s[v + 7], s[v + 8]),
          E.set(a[T + 0], a[T + 1]),
          w.set(a[T + 2], a[T + 3]),
          P.set(a[T + 4], a[T + 5]),
          M.copy(S).add(x).add(y).divideScalar(3);
        const G = _(M);
        m(E, T + 0, S, G), m(w, T + 2, x, G), m(P, T + 4, y, G);
      }
    }
    function m(S, x, y, M) {
      M < 0 && S.x === 1 && (a[x] = S.x - 1),
        y.x === 0 && y.z === 0 && (a[x] = M / 2 / Math.PI + 0.5);
    }
    function _(S) {
      return Math.atan2(S.z, -S.x);
    }
    function f(S) {
      return Math.atan2(-S.y, Math.sqrt(S.x * S.x + S.z * S.z));
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Uc(e.vertices, e.indices, e.radius, e.details);
  }
}
class ba extends Uc {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2,
      i = [
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        0,
        0,
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        n,
        0,
        -1,
        n,
        0,
        1,
        -n,
        0,
        -1,
        -n,
        0,
        1,
      ],
      s = [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ];
    super(i, s, e, t),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new ba(e.radius, e.detail);
  }
}
class AM extends Ss {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new nt(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new nt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = vd),
      (this.normalScale = new We(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class RM extends AM {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new We(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return Wt((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new nt(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new nt(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new nt(1, 1, 1)),
      (this.specularColorMap = null),
      (this._sheen = 0),
      (this._clearcoat = 0),
      (this._iridescence = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
const Dh = {
  enabled: !1,
  files: {},
  add: function (r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r];
  },
  remove: function (r) {
    delete this.files[r];
  },
  clear: function () {
    this.files = {};
  },
};
class CM {
  constructor(e, t, n) {
    const i = this;
    let s = !1,
      a = 0,
      o = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        o++, s === !1 && i.onStart !== void 0 && i.onStart(u, a, o), (s = !0);
      }),
      (this.itemEnd = function (u) {
        a++,
          i.onProgress !== void 0 && i.onProgress(u, a, o),
          a === o && ((s = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (u) {
        i.onError !== void 0 && i.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, d) {
        return c.push(u, d), this;
      }),
      (this.removeHandler = function (u) {
        const d = c.indexOf(u);
        return d !== -1 && c.splice(d, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let d = 0, h = c.length; d < h; d += 2) {
          const p = c[d],
            g = c[d + 1];
          if ((p.global && (p.lastIndex = 0), p.test(u))) return g;
        }
        return null;
      });
  }
}
const PM = new CM();
class kd {
  constructor(e) {
    (this.manager = e !== void 0 ? e : PM),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
class LM extends kd {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = Dh.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), s.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = so("img");
    function l() {
      u(), Dh.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(d) {
      u(), i && i(d), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", l, !1),
        o.removeEventListener("error", c, !1);
    }
    return (
      o.addEventListener("load", l, !1),
      o.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class DM extends kd {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new hn(),
      a = new LM(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          (s.image = o), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        i
      ),
      s
    );
  }
}
class Gd extends kt {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new nt(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const Sl = new Mt(),
  Uh = new B(),
  Ih = new B();
class UM {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new We(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Mt()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Cc()),
      (this._frameExtents = new We(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Ct(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    Uh.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(Uh),
      Ih.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Ih),
      t.updateMatrixWorld(),
      Sl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Sl),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(Sl);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class IM extends UM {
  constructor() {
    super(new Id(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class OM extends Gd {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(kt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new kt()),
      (this.shadow = new IM());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class NM extends Gd {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class Hd {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Oh()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Oh();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function Oh() {
  return (typeof performance > "u" ? Date : performance).now();
}
class Nh {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(Wt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Rc } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Rc));
var FM = `vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

uniform float time;

varying vec2 vUv;
varying float vNoise;
varying vec3 vPosition;
varying float vColorRandom;

attribute float randoms;
attribute float colorRandom;
float PI = 3.1415925;

void main() {
    vUv = uv;
   
    vColorRandom =colorRandom;
    vec3 newposition = position;
   
   

    float noise = cnoise(0.8*vec3(position.x,position.y,position.z + time/8.));

    newposition += 0.25*normal*noise;
    vec4 mvPosition = modelViewMatrix * vec4(newposition,1.);
     vNoise = noise;
    gl_PointSize = (50.*randoms) * (1./-mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    

    
}`,
  zM = `varying vec2 vUv;
varying float vColorRandom;
varying float vNoise;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

void main() {
   
   
   
   float alpha = 1. -smoothstep(-0.2,0.5,length(gl_PointCoord - vec2(0.5)));

    vec3 finalColor = uColor1;
	if(vColorRandom>0.33 && vColorRandom<0.66){
		finalColor = uColor2;
	}
	if( vColorRandom<0.66){
		finalColor = uColor3;
	}

   	
   	gl_FragColor = vec4(finalColor,alpha);

}`;
at.registerPlugin(Re);
Re.normalizeScroll(!0);
Re.config({ ignoreMobileResize: !0 });
class BM {
  constructor(e) {
    (this.scene = new Bd()),
      (this.container = e.dom),
      (this.width = this.container.offsetWidth),
      (this.height = this.container.offsetHeight),
      (this.renderer = new Dc({ antialias: !0 })),
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
      this.renderer.setSize(this.width, this.height),
      this.renderer.setClearColor("#0a151f", 1),
      this.container.appendChild(this.renderer.domElement),
      (this.camera = new Sn(65, this.width / this.height, 1, 1e3)),
      this.camera.position.set(0, 0, 2.5),
      (this.camera.zoom = 1.2),
      this.camera.updateProjectionMatrix(),
      (this.clock = new Hd()),
      (this.isPlaying = !0),
      this.addObjects(),
      this.resize(),
      this.render(),
      this.setupResize(),
      this.handleScrollAnimation();
  }
  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }
  resize() {
    window.innerWidth < 650
      ? this.mesh.scale.set(0.7, 0.7, 0.7)
      : this.mesh.scale.set(1.15, 1.15, 1.15),
      (this.width = this.container.offsetWidth),
      (this.height = this.container.offsetHeight),
      this.renderer.setSize(this.width, this.height),
      (this.camera.aspect = this.width / this.height),
      this.camera.updateProjectionMatrix();
  }
  addObjects() {
    (this.geometry = new ba(1.1, 25)),
      (this.material = new bi({
        extensions: {
          derivatives: "#extension GL_OES_standard_derivatives : enable",
        },
        uniforms: {
          time: { value: 0 },
          uColor1: { value: new nt(660767) },
          uColor2: { value: new nt(11326710) },
          uColor3: { value: new nt(1652818) },
          resolution: { value: new Ct() },
        },
        depthTest: !1,
        depthWrite: !1,
        blending: Kl,
        vertexShader: FM,
        fragmentShader: zM,
        wireframe: !1,
        side: Yn,
      })),
      (this.vertices = this.geometry.attributes.position.array.length);
    let e = new Float32Array(this.vertices / 3),
      t = new Float32Array(this.vertices / 3);
    for (let n = 0; n < this.vertices / 3; n++)
      e.set([Math.random()], n), t.set([Math.random()], n);
    this.geometry.setAttribute("randoms", new Nn(e, 1)),
      this.geometry.setAttribute("colorRandom", new Nn(t, 1)),
      (this.mesh = new wM(this.geometry, this.material)),
      this.scene.add(this.mesh);
  }
  stop() {
    this.isPlaying = !1;
  }
  play() {
    this.isPlaying || (this.render(), (this.isPlaying = !0));
  }
  render() {
    if (!this.isPlaying) return;
    const e = this.clock.getElapsedTime();
    (this.mesh.position.y = Math.cos(e) * 0.01),
      (this.mesh.position.z = Math.cos(e) * 0.01),
      (this.material.uniforms.time.value = e),
      this.renderer.render(this.scene, this.camera),
      window.requestAnimationFrame(this.render.bind(this));
  }
  handleScrollAnimation() {
    const e = document.querySelector("#body"),
      t = { current: this.mesh };
    Re.create({
      trigger: e,
      start: "top top",
      end: () => "+=" + e.offsetHeight * 1.25,
      onUpdate: (i) => {
        const s = i.progress,
          a = Math.PI * 2 * s;
        t.current.rotation.x = a * -1;
        const o = 1.2 + s;
        (this.camera.zoom = o), this.camera.updateProjectionMatrix();
      },
    });
    const n = document.querySelectorAll("#myThreeJsCanvas");
    at.from(n, { duration: 2, opacity: 0, delay: 3.2, ease: "back.out" });
  }
}
class kM {
  constructor(e) {
    return (
      (this.result = new Object()),
      (this.result.originalText = e.innerText),
      (this.result.splitted = this.split(e)),
      (this.result.words = this.result.splitted.querySelectorAll(
        ".SplitTextJS-wrapper"
      )),
      (this.result.chars =
        this.result.splitted.querySelectorAll(".SplitTextJS-char")),
      (this.result.spaces = this.result.splitted.querySelectorAll(
        ".SplitTextJS-spacer"
      )),
      this.result
    );
  }
  createSpan(e) {
    let t = document.createElement("span");
    return (t.style.display = "inline-block"), (t.className = e), t;
  }
  split(e) {
    let t = new Array();
    const n = e.innerText.split(" ");
    let i = n.length;
    return (
      n.map((s) => {
        const a = this.createSpan("SplitTextJS-wrapper");
        if (
          (s.split(/(?!^)/).map((o) => {
            let l = this.createSpan("SplitTextJS-char");
            (l.innerText = o), a.appendChild(l);
          }),
          i--,
          t.push(a),
          i > 0)
        ) {
          let o = this.createSpan("SplitTextJS-char SplitTextJS-spacer");
          (o.innerHTML = "&nbsp;"), t.push(o);
        }
      }),
      (e.innerHTML = ""),
      t.forEach((s) => {
        e.appendChild(s);
      }),
      e
    );
  }
}
at.registerPlugin(Re);
Re.normalizeScroll(!0);
Re.config({ ignoreMobileResize: !0 });
function GM() {
  const r = document.querySelectorAll(".hero-title");
  var e = at.timeline({ repeat: -1 });
  r.forEach((o) => {
    const l = new kM(o);
    e.from(l.chars, { y: 16, opacity: 0, rotateX: -90, stagger: 0.02 }, "<0.8"),
      e.to(l.chars, { y: -16, opacity: 0, rotateX: 90, stagger: 0.02 }, "<2");
  });
  const n = document
    .querySelector(".home-left-col")
    .querySelectorAll(":scope > *");
  at.from(n, {
    duration: 2,
    yPercent: -100,
    opacity: 0,
    delay: 2.9,
    stagger: 0.2,
    ease: "back.out",
  });
  const i = document.querySelector(".img-container");
  at.timeline()
    .from(i, {
      duration: 2,
      yPercent: 100,
      opacity: 0,
      delay: 2.9,
      ease: "power3.out",
    })
    .from(
      "#card-design",
      {
        transformOrigin: "center",
        rotateX: 360,
        duration: 1.5,
        opacity: 0,
        yPercent: 100,
        ease: "back.out",
      },
      "<+=0.5"
    )
    .from(
      "#card-development",
      {
        transformOrigin: "center",
        rotateX: 360,
        duration: 1.25,
        opacity: 0,
        yPercent: 100,
        ease: "back.out",
      },
      "<+=0.25"
    );
  const s = document.querySelector(".home-container"),
    a = document.querySelector(".home");
  at.to(s, {
    duration: 3.25,
    yPercent: -100,
    ease: "powe3.out",
    scrollTrigger: {
      trigger: a,
      anticipatePin: 1,
      start: "80% 20%",
      end: () => "+=" + a.offsetHeight,
      scrub: !0,
    },
  });
}
at.registerPlugin(Re);
Re.normalizeScroll(!0);
Re.config({ ignoreMobileResize: !0 });
function HM() {
  const r = document.querySelector(".about > .title-container"),
    e = document.querySelectorAll(" .about-title");
  at.from(e, {
    duration: 3.5,
    xPercent: -100,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.5,
    scrollTrigger: { trigger: r, start: "top 70%", end: "top 50%", scrub: !0 },
  });
  const t = document.querySelector(".about"),
    n = document.querySelector(".about-box").clientHeight,
    i = document.querySelector(".about-container");
  let s = at.matchMedia(t),
    a = 780;
  s.add(
    { isDesktop: `(min-width: ${a}px)`, isMobile: `(max-width: ${a - 1}px)` },
    (o) => {
      let { isDesktop: l, isMobile: c } = o.conditions;
      const u = `calc(${n}px + 1.5rem)`;
      let d = at
        .timeline()
        .from(".about-box", {
          duration: c ? 2 : 2.25,
          yPercent: l ? 100 : 0,
          xPercent: c ? -120 : 0,
          stagger: l ? 0.5 : 0,
        })
        .to(".about-box:nth-child(1)", { top: c ? u : 0 })
        .to(".about-box:nth-child(2)", {
          top: c ? `calc(${u} * 2)` : 0,
          stagger: c ? 1 : 0,
        });
      l
        ? Re.create({
            animation: d,
            trigger: r,
            start: "top 60%",
            end: "top top",
            anticipatePin: 1,
            scrub: !0,
          })
        : Re.create({
            animation: d,
            trigger: r,
            togglesAction: "restart pause resume none",
            start: "top 50%",
            anticipatePin: 1,
            end: "+=800px",
            scrub: !0,
          });
      let h = at.from("#tech", {
        duration: 1.5,
        opacity: 0,
        yPercent: l ? 100 : 0,
        xPercent: c ? -100 : 0,
        stagger: 0.1,
        ease: "powe3.out",
      });
      l
        ? Re.create({
            animation: h,
            trigger: i,
            anticipatePin: 1,
            start: "top 20%",
            end: "bottom 20%",
            scrub: !0,
          })
        : Re.create({
            animation: h,
            trigger: t,
            anticipatePin: 1,
            start: "center 50%",
            end: "+=1000px",
            scrub: !0,
          }),
        l
          ? at.to(t, {
              duration: 3.25,
              yPercent: -100,
              ease: "powe3.out",
              scrollTrigger: {
                trigger: t,
                id: "about",
                start: "80% 20%",
                end: () => "+=" + t.offsetHeight,
                scrub: !0,
              },
            })
          : at.to(t, {
              duration: 3.25,
              yPercent: -100,
              ease: "powe3.out",
              scrollTrigger: {
                trigger: t,
                start: "bottom 20%",
                anticipatePin: 1,
                end: () => "+=" + t.offsetHeight,
                scrub: !0,
              },
            });
    }
  );
}
var VM = `uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
  WM = `uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    vec4 texColor = texture2D(uTexture, vUv);
    gl_FragColor = texColor;
}`;
const XM = "./img/figma.png",
  qM = "../img/git.png",
  YM = "../img/github.png",
  jM = "../img/html.png",
  KM = "../img/javascript.png",
  $M = "../img/mongodb.png",
  ZM = "../img/nodejs.png",
  JM = "../img/reactjs.png",
  QM = "../img/tailwind.png",
  eS = "//img/threejs.svg",
  Fh = { type: "change" },
  yl = { type: "start" },
  zh = { type: "end" };
class tS extends br {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new B()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: Cr.ROTATE,
        MIDDLE: Cr.DOLLY,
        RIGHT: Cr.PAN,
      }),
      (this.touches = { ONE: Pr.ROTATE, TWO: Pr.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return o.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return o.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (L) {
        L.addEventListener("keydown", Je), (this._domElementKeyEvents = L);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", Je),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(Fh),
          n.update(),
          (s = i.NONE);
      }),
      (this.update = (function () {
        const L = new B(),
          ee = new Er().setFromUnitVectors(e.up, new B(0, 1, 0)),
          V = ee.clone().invert(),
          ue = new B(),
          ve = new Er(),
          Te = 2 * Math.PI;
        return function () {
          const ye = n.object.position;
          L.copy(ye).sub(n.target),
            L.applyQuaternion(ee),
            o.setFromVector3(L),
            n.autoRotate && s === i.NONE && v(w()),
            n.enableDamping
              ? ((o.theta += l.theta * n.dampingFactor),
                (o.phi += l.phi * n.dampingFactor))
              : ((o.theta += l.theta), (o.phi += l.phi));
          let Fe = n.minAzimuthAngle,
            pe = n.maxAzimuthAngle;
          return (
            isFinite(Fe) &&
              isFinite(pe) &&
              (Fe < -Math.PI ? (Fe += Te) : Fe > Math.PI && (Fe -= Te),
              pe < -Math.PI ? (pe += Te) : pe > Math.PI && (pe -= Te),
              Fe <= pe
                ? (o.theta = Math.max(Fe, Math.min(pe, o.theta)))
                : (o.theta =
                    o.theta > (Fe + pe) / 2
                      ? Math.max(Fe, o.theta)
                      : Math.min(pe, o.theta))),
            (o.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, o.phi)
            )),
            o.makeSafe(),
            (o.radius *= c),
            (o.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, o.radius)
            )),
            n.enableDamping === !0
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            L.setFromSpherical(o),
            L.applyQuaternion(V),
            ye.copy(n.target).add(L),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), u.set(0, 0, 0)),
            (c = 1),
            d ||
            ue.distanceToSquared(n.object.position) > a ||
            8 * (1 - ve.dot(n.object.quaternion)) > a
              ? (n.dispatchEvent(Fh),
                ue.copy(n.object.position),
                ve.copy(n.object.quaternion),
                (d = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", b),
          n.domElement.removeEventListener("pointerdown", Oe),
          n.domElement.removeEventListener("pointercancel", qe),
          n.domElement.removeEventListener("wheel", Le),
          n.domElement.removeEventListener("pointermove", it),
          n.domElement.removeEventListener("pointerup", qe),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", Je),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let s = i.NONE;
    const a = 1e-6,
      o = new Nh(),
      l = new Nh();
    let c = 1;
    const u = new B();
    let d = !1;
    const h = new We(),
      p = new We(),
      g = new We(),
      m = new We(),
      _ = new We(),
      f = new We(),
      S = new We(),
      x = new We(),
      y = new We(),
      M = [],
      E = {};
    function w() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function P() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function v(L) {
      l.theta -= L;
    }
    function T(L) {
      l.phi -= L;
    }
    const G = (function () {
        const L = new B();
        return function (V, ue) {
          L.setFromMatrixColumn(ue, 0), L.multiplyScalar(-V), u.add(L);
        };
      })(),
      O = (function () {
        const L = new B();
        return function (V, ue) {
          n.screenSpacePanning === !0
            ? L.setFromMatrixColumn(ue, 1)
            : (L.setFromMatrixColumn(ue, 0), L.crossVectors(n.object.up, L)),
            L.multiplyScalar(V),
            u.add(L);
        };
      })(),
      I = (function () {
        const L = new B();
        return function (V, ue) {
          const ve = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const Te = n.object.position;
            L.copy(Te).sub(n.target);
            let me = L.length();
            (me *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              G((2 * V * me) / ve.clientHeight, n.object.matrix),
              O((2 * ue * me) / ve.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (G(
                  (V * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    ve.clientWidth,
                  n.object.matrix
                ),
                O(
                  (ue * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    ve.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function F(L) {
      n.object.isPerspectiveCamera
        ? (c /= L)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * L)
          )),
          n.object.updateProjectionMatrix(),
          (d = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function k(L) {
      n.object.isPerspectiveCamera
        ? (c *= L)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / L)
          )),
          n.object.updateProjectionMatrix(),
          (d = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function K(L) {
      h.set(L.clientX, L.clientY);
    }
    function H(L) {
      S.set(L.clientX, L.clientY);
    }
    function W(L) {
      m.set(L.clientX, L.clientY);
    }
    function Q(L) {
      p.set(L.clientX, L.clientY),
        g.subVectors(p, h).multiplyScalar(n.rotateSpeed);
      const ee = n.domElement;
      v((2 * Math.PI * g.x) / ee.clientHeight),
        T((2 * Math.PI * g.y) / ee.clientHeight),
        h.copy(p),
        n.update();
    }
    function C(L) {
      x.set(L.clientX, L.clientY),
        y.subVectors(x, S),
        y.y > 0 ? F(P()) : y.y < 0 && k(P()),
        S.copy(x),
        n.update();
    }
    function fe(L) {
      _.set(L.clientX, L.clientY),
        f.subVectors(_, m).multiplyScalar(n.panSpeed),
        I(f.x, f.y),
        m.copy(_),
        n.update();
    }
    function se(L) {
      L.deltaY < 0 ? k(P()) : L.deltaY > 0 && F(P()), n.update();
    }
    function Y(L) {
      let ee = !1;
      switch (L.code) {
        case n.keys.UP:
          L.ctrlKey || L.metaKey || L.shiftKey
            ? T((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : I(0, n.keyPanSpeed),
            (ee = !0);
          break;
        case n.keys.BOTTOM:
          L.ctrlKey || L.metaKey || L.shiftKey
            ? T((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : I(0, -n.keyPanSpeed),
            (ee = !0);
          break;
        case n.keys.LEFT:
          L.ctrlKey || L.metaKey || L.shiftKey
            ? v((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : I(n.keyPanSpeed, 0),
            (ee = !0);
          break;
        case n.keys.RIGHT:
          L.ctrlKey || L.metaKey || L.shiftKey
            ? v((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : I(-n.keyPanSpeed, 0),
            (ee = !0);
          break;
      }
      ee && (L.preventDefault(), n.update());
    }
    function J() {
      if (M.length === 1) h.set(M[0].pageX, M[0].pageY);
      else {
        const L = 0.5 * (M[0].pageX + M[1].pageX),
          ee = 0.5 * (M[0].pageY + M[1].pageY);
        h.set(L, ee);
      }
    }
    function ae() {
      if (M.length === 1) m.set(M[0].pageX, M[0].pageY);
      else {
        const L = 0.5 * (M[0].pageX + M[1].pageX),
          ee = 0.5 * (M[0].pageY + M[1].pageY);
        m.set(L, ee);
      }
    }
    function oe() {
      const L = M[0].pageX - M[1].pageX,
        ee = M[0].pageY - M[1].pageY,
        V = Math.sqrt(L * L + ee * ee);
      S.set(0, V);
    }
    function D() {
      n.enableZoom && oe(), n.enablePan && ae();
    }
    function Ce() {
      n.enableZoom && oe(), n.enableRotate && J();
    }
    function Ie(L) {
      if (M.length == 1) p.set(L.pageX, L.pageY);
      else {
        const V = ce(L),
          ue = 0.5 * (L.pageX + V.x),
          ve = 0.5 * (L.pageY + V.y);
        p.set(ue, ve);
      }
      g.subVectors(p, h).multiplyScalar(n.rotateSpeed);
      const ee = n.domElement;
      v((2 * Math.PI * g.x) / ee.clientHeight),
        T((2 * Math.PI * g.y) / ee.clientHeight),
        h.copy(p);
    }
    function le(L) {
      if (M.length === 1) _.set(L.pageX, L.pageY);
      else {
        const ee = ce(L),
          V = 0.5 * (L.pageX + ee.x),
          ue = 0.5 * (L.pageY + ee.y);
        _.set(V, ue);
      }
      f.subVectors(_, m).multiplyScalar(n.panSpeed), I(f.x, f.y), m.copy(_);
    }
    function we(L) {
      const ee = ce(L),
        V = L.pageX - ee.x,
        ue = L.pageY - ee.y,
        ve = Math.sqrt(V * V + ue * ue);
      x.set(0, ve),
        y.set(0, Math.pow(x.y / S.y, n.zoomSpeed)),
        F(y.y),
        S.copy(x);
    }
    function xe(L) {
      n.enableZoom && we(L), n.enablePan && le(L);
    }
    function _e(L) {
      n.enableZoom && we(L), n.enableRotate && Ie(L);
    }
    function Oe(L) {
      n.enabled !== !1 &&
        (M.length === 0 &&
          (n.domElement.setPointerCapture(L.pointerId),
          n.domElement.addEventListener("pointermove", it),
          n.domElement.addEventListener("pointerup", qe)),
        $(L),
        L.pointerType === "touch" ? ft(L) : q(L));
    }
    function it(L) {
      n.enabled !== !1 && (L.pointerType === "touch" ? R(L) : st(L));
    }
    function qe(L) {
      ie(L),
        M.length === 0 &&
          (n.domElement.releasePointerCapture(L.pointerId),
          n.domElement.removeEventListener("pointermove", it),
          n.domElement.removeEventListener("pointerup", qe)),
        n.dispatchEvent(zh),
        (s = i.NONE);
    }
    function q(L) {
      let ee;
      switch (L.button) {
        case 0:
          ee = n.mouseButtons.LEFT;
          break;
        case 1:
          ee = n.mouseButtons.MIDDLE;
          break;
        case 2:
          ee = n.mouseButtons.RIGHT;
          break;
        default:
          ee = -1;
      }
      switch (ee) {
        case Cr.DOLLY:
          if (n.enableZoom === !1) return;
          H(L), (s = i.DOLLY);
          break;
        case Cr.ROTATE:
          if (L.ctrlKey || L.metaKey || L.shiftKey) {
            if (n.enablePan === !1) return;
            W(L), (s = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            K(L), (s = i.ROTATE);
          }
          break;
        case Cr.PAN:
          if (L.ctrlKey || L.metaKey || L.shiftKey) {
            if (n.enableRotate === !1) return;
            K(L), (s = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            W(L), (s = i.PAN);
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(yl);
    }
    function st(L) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          Q(L);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          C(L);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          fe(L);
          break;
      }
    }
    function Le(L) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        s !== i.NONE ||
        (L.preventDefault(), n.dispatchEvent(yl), se(L), n.dispatchEvent(zh));
    }
    function Je(L) {
      n.enabled === !1 || n.enablePan === !1 || Y(L);
    }
    function ft(L) {
      switch ((te(L), M.length)) {
        case 1:
          switch (n.touches.ONE) {
            case Pr.ROTATE:
              if (n.enableRotate === !1) return;
              J(), (s = i.TOUCH_ROTATE);
              break;
            case Pr.PAN:
              if (n.enablePan === !1) return;
              ae(), (s = i.TOUCH_PAN);
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Pr.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              D(), (s = i.TOUCH_DOLLY_PAN);
              break;
            case Pr.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              Ce(), (s = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(yl);
    }
    function R(L) {
      switch ((te(L), s)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          Ie(L), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          le(L), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          xe(L), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          _e(L), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function b(L) {
      n.enabled !== !1 && L.preventDefault();
    }
    function $(L) {
      M.push(L);
    }
    function ie(L) {
      delete E[L.pointerId];
      for (let ee = 0; ee < M.length; ee++)
        if (M[ee].pointerId == L.pointerId) {
          M.splice(ee, 1);
          return;
        }
    }
    function te(L) {
      let ee = E[L.pointerId];
      ee === void 0 && ((ee = new We()), (E[L.pointerId] = ee)),
        ee.set(L.pageX, L.pageY);
    }
    function ce(L) {
      const ee = L.pointerId === M[0].pointerId ? M[1] : M[0];
      return E[ee.pointerId];
    }
    n.domElement.addEventListener("contextmenu", b),
      n.domElement.addEventListener("pointerdown", Oe),
      n.domElement.addEventListener("pointercancel", qe),
      n.domElement.addEventListener("wheel", Le, { passive: !1 }),
      this.update();
  }
}
class nS extends li {
  constructor(e, t, n, i) {
    super();
    const s = [],
      a = [],
      o = [],
      l = new B(),
      c = new Mt();
    c.makeRotationFromEuler(n), c.setPosition(t);
    const u = new Mt();
    u.copy(c).invert(),
      d(),
      this.setAttribute("position", new bn(s, 3)),
      this.setAttribute("normal", new bn(a, 3)),
      this.setAttribute("uv", new bn(o, 2));
    function d() {
      let m = [];
      const _ = new B(),
        f = new B(),
        S = e.geometry,
        x = S.attributes.position,
        y = S.attributes.normal;
      if (S.index !== null) {
        const M = S.index;
        for (let E = 0; E < M.count; E++)
          _.fromBufferAttribute(x, M.getX(E)),
            f.fromBufferAttribute(y, M.getX(E)),
            h(m, _, f);
      } else
        for (let M = 0; M < x.count; M++)
          _.fromBufferAttribute(x, M), f.fromBufferAttribute(y, M), h(m, _, f);
      (m = p(m, l.set(1, 0, 0))),
        (m = p(m, l.set(-1, 0, 0))),
        (m = p(m, l.set(0, 1, 0))),
        (m = p(m, l.set(0, -1, 0))),
        (m = p(m, l.set(0, 0, 1))),
        (m = p(m, l.set(0, 0, -1)));
      for (let M = 0; M < m.length; M++) {
        const E = m[M];
        o.push(0.5 + E.position.x / i.x, 0.5 + E.position.y / i.y),
          E.position.applyMatrix4(c),
          s.push(E.position.x, E.position.y, E.position.z),
          a.push(E.normal.x, E.normal.y, E.normal.z);
      }
    }
    function h(m, _, f) {
      _.applyMatrix4(e.matrixWorld),
        _.applyMatrix4(u),
        f.transformDirection(e.matrixWorld),
        m.push(new Bh(_.clone(), f.clone()));
    }
    function p(m, _) {
      const f = [],
        S = 0.5 * Math.abs(i.dot(_));
      for (let x = 0; x < m.length; x += 3) {
        let y = 0,
          M,
          E,
          w,
          P;
        const v = m[x + 0].position.dot(_) - S,
          T = m[x + 1].position.dot(_) - S,
          G = m[x + 2].position.dot(_) - S,
          O = v > 0,
          I = T > 0,
          F = G > 0;
        switch (((y = (O ? 1 : 0) + (I ? 1 : 0) + (F ? 1 : 0)), y)) {
          case 0: {
            f.push(m[x]), f.push(m[x + 1]), f.push(m[x + 2]);
            break;
          }
          case 1: {
            if (
              (O &&
                ((M = m[x + 1]),
                (E = m[x + 2]),
                (w = g(m[x], M, _, S)),
                (P = g(m[x], E, _, S))),
              I)
            ) {
              (M = m[x]),
                (E = m[x + 2]),
                (w = g(m[x + 1], M, _, S)),
                (P = g(m[x + 1], E, _, S)),
                f.push(w),
                f.push(E.clone()),
                f.push(M.clone()),
                f.push(E.clone()),
                f.push(w.clone()),
                f.push(P);
              break;
            }
            F &&
              ((M = m[x]),
              (E = m[x + 1]),
              (w = g(m[x + 2], M, _, S)),
              (P = g(m[x + 2], E, _, S))),
              f.push(M.clone()),
              f.push(E.clone()),
              f.push(w),
              f.push(P),
              f.push(w.clone()),
              f.push(E.clone());
            break;
          }
          case 2: {
            O ||
              ((M = m[x].clone()),
              (E = g(M, m[x + 1], _, S)),
              (w = g(M, m[x + 2], _, S)),
              f.push(M),
              f.push(E),
              f.push(w)),
              I ||
                ((M = m[x + 1].clone()),
                (E = g(M, m[x + 2], _, S)),
                (w = g(M, m[x], _, S)),
                f.push(M),
                f.push(E),
                f.push(w)),
              F ||
                ((M = m[x + 2].clone()),
                (E = g(M, m[x], _, S)),
                (w = g(M, m[x + 1], _, S)),
                f.push(M),
                f.push(E),
                f.push(w));
            break;
          }
        }
      }
      return f;
    }
    function g(m, _, f, S) {
      const x = m.position.dot(f) - S,
        y = _.position.dot(f) - S,
        M = x / (x - y);
      return new Bh(
        new B(
          m.position.x + M * (_.position.x - m.position.x),
          m.position.y + M * (_.position.y - m.position.y),
          m.position.z + M * (_.position.z - m.position.z)
        ),
        new B(
          m.normal.x + M * (_.normal.x - m.normal.x),
          m.normal.y + M * (_.normal.y - m.normal.y),
          m.normal.z + M * (_.normal.z - m.normal.z)
        )
      );
    }
  }
}
class Bh {
  constructor(e, t) {
    (this.position = e), (this.normal = t);
  }
  clone() {
    return new this.constructor(this.position.clone(), this.normal.clone());
  }
}
class iS {
  constructor(e) {
    (this.scene = new Bd()),
      (this.container = e.dom),
      (this.width = this.container.offsetWidth),
      (this.height = this.container.offsetHeight),
      (this.renderer = new Dc({ antialias: !0, alpha: !0 })),
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
      (this.renderer.LinearEncoding = Xe),
      this.container.appendChild(this.renderer.domElement),
      (this.camera = new Sn(70, this.width / this.height, 1, 1e3)),
      this.camera.position.set(-0.3, -0.1, 3),
      (this.camera.zoom = 1.2),
      this.camera.updateProjectionMatrix(),
      (this.clock = new Hd()),
      (this.isPlaying = !0),
      this.addObjects(e.imageURL),
      this.addLights(),
      this.enableOrbitControls(),
      this.resize(),
      this.render(),
      this.setupResize();
  }
  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }
  resize() {
    (this.width = this.container.offsetWidth),
      (this.height = this.container.offsetHeight),
      this.renderer.setSize(this.width, this.height),
      (this.camera.aspect = this.width / this.height),
      this.camera.updateProjectionMatrix();
  }
  addObjects(e) {
    (this.geometry = new ba(1, 1)),
      (this.material = new RM({
        color: 2247533,
        roughness: 1,
        metalness: 0.9,
        clearcoat: 0,
        clearcoatRoughness: 0,
        flatShading: !0,
        side: Yn,
      })),
      (this.mesh = new ii(this.geometry, this.material)),
      this.mesh.scale.set(1, 1, 1),
      (this.mesh.castShadow = !0),
      (this.mesh.receiveShadow = !0),
      this.scene.add(this.mesh);
    const n = new DM().load(e),
      i = new bi({
        uniforms: { uTexture: { value: n }, transparent: !0 },
        transparent: !0,
        vertexShader: VM,
        fragmentShader: WM,
        polygonOffset: !0,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: 0,
      }),
      s = new B(0, 0, 0.1),
      a = new co(2 * Math.PI, 0, 6.25, "XYZ"),
      o = new B(1, 1, 5),
      l = new nS(this.mesh, s, a, o);
    (this.decal = new ii(l, i)), this.scene.add(this.decal);
  }
  addLights() {
    let e = new NM(13421772, 1),
      t = new OM(16777215, 5);
    t.position.set(200, 200, 200), this.scene.add(e, t);
  }
  stop() {
    this.isPlaying = !1;
  }
  play() {
    this.isPlaying || (this.render(), (this.isPlaying = !0));
  }
  enableOrbitControls() {
    (this.controls = new tS(this.camera, this.renderer.domElement)),
      (this.controls.enableZoom = !1),
      (this.controls.enableDamping = !0),
      this.controls.update();
  }
  render() {
    if (!this.isPlaying) return;
    const e = this.clock.getElapsedTime();
    (this.mesh.position.y = Math.cos(e) * 0.1),
      (this.decal.position.y = Math.cos(e) * 0.1),
      (this.mesh.position.z = Math.cos(e) * 0.1),
      (this.decal.position.z = Math.cos(e) * 0.1),
      this.controls.update(),
      this.renderer.render(this.scene, this.camera),
      window.requestAnimationFrame(this.render.bind(this));
  }
}
function rS() {
  const r = document.querySelectorAll("#tech"),
    e = [XM, qM, YM, jM, KM, $M, ZM, JM, QM, eS];
  r.forEach((t, n) => {
    new iS({ dom: t, imageURL: e[n] });
  });
}
at.registerPlugin(Re);
Re.normalizeScroll(!0);
Re.config({ ignoreMobileResize: !0 });
function sS() {
  const r = document.querySelector(".projects > .title-container"),
    e = document.querySelectorAll(" .project-title"),
    t = document.querySelectorAll(".slider-item"),
    n = document.querySelector(".projects-container"),
    i = document.querySelectorAll(".slider-content"),
    s = document.querySelectorAll(".show-project"),
    a = document.querySelectorAll(".slider-item"),
    o = (a.length - 1) * 120;
  console.log(a), console.log(o);
  const l = document.querySelector(".projects");
  let c = at.matchMedia(l),
    u = 780;
  at.from(e, {
    duration: 3.5,
    xPercent: -100,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.5,
    scrollTrigger: { trigger: r, start: "top 70%", end: "top 60%", scrub: !0 },
  }),
    at.from(t, {
      duration: 3.5,
      opacity: 0,
      ease: "powe3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: n,
        start: "top 70%",
        end: "top 40%",
        scrub: !0,
      },
    }),
    at.set(s, { opacity: 0 }),
    i.forEach((d) => {
      const h = at.to(d.querySelector(".show-project"), {
        paused: !0,
        opacity: 1,
        scaleY: 1,
        duration: 0.5,
        ease: "power4.out",
      });
      d.addEventListener("mouseenter", () => h.play()),
        d.addEventListener("mouseleave", () => h.reverse());
    }),
    c.add(
      { isDesktop: `(min-width: ${u}px)`, isMobile: `(max-width: ${u - 1}px)` },
      (d) => {
        let { isDesktop: h, isMobile: p } = d.conditions,
          g = at.to(".slider-item", { xPercent: -o, ease: "none" });
        h
          ? Re.create({
              animation: g,
              trigger: l,
              start: "20% top",
              end: () => "+=" + l.offsetWidth,
              scrub: !0,
              pin: !0,
              anticipatePin: 1,
            })
          : Re.create({
              animation: g,
              trigger: l,
              start: "20% top",
              end: () => "+=" + l.offsetWidth * 2,
              scrub: !0,
              id: "slider",
              pin: !0,
              anticipatePin: 1,
            }),
          a.forEach((m) => {
            let _ = at.to(m.querySelector(".slider-img"), { xPercent: -50 });
            h
              ? Re.create({
                  animation: _,
                  trigger: l,
                  start: "top top",
                  end: () => "+=" + l.offsetWidth,
                  scrub: !0,
                })
              : Re.create({
                  animation: _,
                  trigger: l,
                  id: "img",
                  start: "20% top",
                  end: () => "+=" + l.offsetWidth * 2,
                  scrub: !0,
                });
          });
      }
    );
}
at.registerPlugin(Re);
Re.normalizeScroll(!0);
Re.config({ ignoreMobileResize: !0 });
function oS() {
  const r = document.querySelector(".contact > .title-container"),
    e = document.querySelectorAll(" .contact-title");
  at.from(e, {
    duration: 3.5,
    xPercent: -100,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.25,
    scrollTrigger: { trigger: r, start: "top 70%", end: "top 60%", scrub: !0 },
  });
  const t = document.querySelector(".contact-container"),
    n = t.querySelectorAll(":scope > *");
  at.from(n, {
    duration: 3.5,
    yPercent: 100,
    opacity: 0,
    ease: "powe3.out",
    stagger: 0.25,
    scrollTrigger: { trigger: t, start: "top 70%", end: "top 50%", scrub: !0 },
  });
}
function aS() {
  Mm(),
    bm(),
    new BM({ dom: document.querySelector("#myThreeJsCanvas") }),
    rS(),
    GM(),
    HM(),
    sS(),
    oS();
}
aS();
