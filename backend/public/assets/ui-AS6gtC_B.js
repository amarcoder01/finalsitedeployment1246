import { r as m, R as ws } from "./vendor-B_qP7WtP.js";
let tr = { data: "" },
  er = (t) =>
    typeof window == "object"
      ? (
          (t ? t.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (t || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" },
          )
        ).firstChild
      : t || tr,
  nr = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  sr = /\/\*[^]*?\*\/|  +/g,
  Tn = /\n+/g,
  et = (t, e) => {
    let n = "",
      s = "",
      i = "";
    for (let o in t) {
      let r = t[o];
      o[0] == "@"
        ? o[1] == "i"
          ? (n = o + " " + r + ";")
          : (s +=
              o[1] == "f"
                ? et(r, o)
                : o + "{" + et(r, o[1] == "k" ? "" : e) + "}")
        : typeof r == "object"
          ? (s += et(
              r,
              e
                ? e.replace(/([^,])+/g, (a) =>
                    o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (l) =>
                      /&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l,
                    ),
                  )
                : o,
            ))
          : r != null &&
            ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (i += et.p ? et.p(o, r) : o + ":" + r + ";"));
    }
    return n + (e && i ? e + "{" + i + "}" : i) + s;
  },
  K = {},
  As = (t) => {
    if (typeof t == "object") {
      let e = "";
      for (let n in t) e += n + As(t[n]);
      return e;
    }
    return t;
  },
  ir = (t, e, n, s, i) => {
    let o = As(t),
      r =
        K[o] ||
        (K[o] = ((l) => {
          let c = 0,
            u = 11;
          for (; c < l.length; ) u = (101 * u + l.charCodeAt(c++)) >>> 0;
          return "go" + u;
        })(o));
    if (!K[r]) {
      let l =
        o !== t
          ? t
          : ((c) => {
              let u,
                h,
                f = [{}];
              for (; (u = nr.exec(c.replace(sr, ""))); )
                u[4]
                  ? f.shift()
                  : u[3]
                    ? ((h = u[3].replace(Tn, " ").trim()),
                      f.unshift((f[0][h] = f[0][h] || {})))
                    : (f[0][u[1]] = u[2].replace(Tn, " ").trim());
              return f[0];
            })(t);
      K[r] = et(i ? { ["@keyframes " + r]: l } : l, n ? "" : "." + r);
    }
    let a = n && K.g ? K.g : null;
    return (
      n && (K.g = K[r]),
      ((l, c, u, h) => {
        h
          ? (c.data = c.data.replace(h, l))
          : c.data.indexOf(l) === -1 && (c.data = u ? l + c.data : c.data + l);
      })(K[r], e, s, a),
      r
    );
  },
  rr = (t, e, n) =>
    t.reduce((s, i, o) => {
      let r = e[o];
      if (r && r.call) {
        let a = r(n),
          l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
        r = l
          ? "." + l
          : a && typeof a == "object"
            ? a.props
              ? ""
              : et(a, "")
            : a === !1
              ? ""
              : a;
      }
      return s + i + (r ?? "");
    }, "");
function ue(t) {
  let e = this || {},
    n = t.call ? t(e.p) : t;
  return ir(
    n.unshift
      ? n.raw
        ? rr(n, [].slice.call(arguments, 1), e.p)
        : n.reduce((s, i) => Object.assign(s, i && i.call ? i(e.p) : i), {})
      : n,
    er(e.target),
    e.g,
    e.o,
    e.k,
  );
}
let Ds, ke, Fe;
ue.bind({ g: 1 });
let q = ue.bind({ k: 1 });
function or(t, e, n, s) {
  ((et.p = e), (Ds = t), (ke = n), (Fe = s));
}
function rt(t, e) {
  let n = this || {};
  return function () {
    let s = arguments;
    function i(o, r) {
      let a = Object.assign({}, o),
        l = a.className || i.className;
      ((n.p = Object.assign({ theme: ke && ke() }, a)),
        (n.o = / *go\d+/.test(l)),
        (a.className = ue.apply(n, s) + (l ? " " + l : "")));
      let c = t;
      return (
        t[0] && ((c = a.as || t), delete a.as),
        Fe && c[0] && Fe(a),
        Ds(c, a)
      );
    }
    return i;
  };
}
var ar = (t) => typeof t == "function",
  ee = (t, e) => (ar(t) ? t(e) : t),
  lr = (() => {
    let t = 0;
    return () => (++t).toString();
  })(),
  Ms = (() => {
    let t;
    return () => {
      if (t === void 0 && typeof window < "u") {
        let e = matchMedia("(prefers-reduced-motion: reduce)");
        t = !e || e.matches;
      }
      return t;
    };
  })(),
  cr = 20,
  Rs = (t, e) => {
    switch (e.type) {
      case 0:
        return { ...t, toasts: [e.toast, ...t.toasts].slice(0, cr) };
      case 1:
        return {
          ...t,
          toasts: t.toasts.map((o) =>
            o.id === e.toast.id ? { ...o, ...e.toast } : o,
          ),
        };
      case 2:
        let { toast: n } = e;
        return Rs(t, {
          type: t.toasts.find((o) => o.id === n.id) ? 1 : 0,
          toast: n,
        });
      case 3:
        let { toastId: s } = e;
        return {
          ...t,
          toasts: t.toasts.map((o) =>
            o.id === s || s === void 0
              ? { ...o, dismissed: !0, visible: !1 }
              : o,
          ),
        };
      case 4:
        return e.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((o) => o.id !== e.toastId) };
      case 5:
        return { ...t, pausedAt: e.time };
      case 6:
        let i = e.time - (t.pausedAt || 0);
        return {
          ...t,
          pausedAt: void 0,
          toasts: t.toasts.map((o) => ({
            ...o,
            pauseDuration: o.pauseDuration + i,
          })),
        };
    }
  },
  Jt = [],
  ft = { toasts: [], pausedAt: void 0 },
  mt = (t) => {
    ((ft = Rs(ft, t)),
      Jt.forEach((e) => {
        e(ft);
      }));
  },
  ur = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  hr = (t = {}) => {
    let [e, n] = m.useState(ft),
      s = m.useRef(ft);
    m.useEffect(
      () => (
        s.current !== ft && n(ft),
        Jt.push(n),
        () => {
          let o = Jt.indexOf(n);
          o > -1 && Jt.splice(o, 1);
        }
      ),
      [],
    );
    let i = e.toasts.map((o) => {
      var r, a, l;
      return {
        ...t,
        ...t[o.type],
        ...o,
        removeDelay:
          o.removeDelay ||
          ((r = t[o.type]) == null ? void 0 : r.removeDelay) ||
          t?.removeDelay,
        duration:
          o.duration ||
          ((a = t[o.type]) == null ? void 0 : a.duration) ||
          t?.duration ||
          ur[o.type],
        style: {
          ...t.style,
          ...((l = t[o.type]) == null ? void 0 : l.style),
          ...o.style,
        },
      };
    });
    return { ...e, toasts: i };
  },
  fr = (t, e = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: e,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: t,
    pauseDuration: 0,
    ...n,
    id: n?.id || lr(),
  }),
  $t = (t) => (e, n) => {
    let s = fr(e, t, n);
    return (mt({ type: 2, toast: s }), s.id);
  },
  O = (t, e) => $t("blank")(t, e);
O.error = $t("error");
O.success = $t("success");
O.loading = $t("loading");
O.custom = $t("custom");
O.dismiss = (t) => {
  mt({ type: 3, toastId: t });
};
O.remove = (t) => mt({ type: 4, toastId: t });
O.promise = (t, e, n) => {
  let s = O.loading(e.loading, { ...n, ...n?.loading });
  return (
    typeof t == "function" && (t = t()),
    t
      .then((i) => {
        let o = e.success ? ee(e.success, i) : void 0;
        return (
          o ? O.success(o, { id: s, ...n, ...n?.success }) : O.dismiss(s),
          i
        );
      })
      .catch((i) => {
        let o = e.error ? ee(e.error, i) : void 0;
        o ? O.error(o, { id: s, ...n, ...n?.error }) : O.dismiss(s);
      }),
    t
  );
};
var dr = (t, e) => {
    mt({ type: 1, toast: { id: t, height: e } });
  },
  pr = () => {
    mt({ type: 5, time: Date.now() });
  },
  kt = new Map(),
  mr = 1e3,
  gr = (t, e = mr) => {
    if (kt.has(t)) return;
    let n = setTimeout(() => {
      (kt.delete(t), mt({ type: 4, toastId: t }));
    }, e);
    kt.set(t, n);
  },
  yr = (t) => {
    let { toasts: e, pausedAt: n } = hr(t);
    m.useEffect(() => {
      if (n) return;
      let o = Date.now(),
        r = e.map((a) => {
          if (a.duration === 1 / 0) return;
          let l = (a.duration || 0) + a.pauseDuration - (o - a.createdAt);
          if (l < 0) {
            a.visible && O.dismiss(a.id);
            return;
          }
          return setTimeout(() => O.dismiss(a.id), l);
        });
      return () => {
        r.forEach((a) => a && clearTimeout(a));
      };
    }, [e, n]);
    let s = m.useCallback(() => {
        n && mt({ type: 6, time: Date.now() });
      }, [n]),
      i = m.useCallback(
        (o, r) => {
          let {
              reverseOrder: a = !1,
              gutter: l = 8,
              defaultPosition: c,
            } = r || {},
            u = e.filter(
              (d) => (d.position || c) === (o.position || c) && d.height,
            ),
            h = u.findIndex((d) => d.id === o.id),
            f = u.filter((d, p) => p < h && d.visible).length;
          return u
            .filter((d) => d.visible)
            .slice(...(a ? [f + 1] : [0, f]))
            .reduce((d, p) => d + (p.height || 0) + l, 0);
        },
        [e],
      );
    return (
      m.useEffect(() => {
        e.forEach((o) => {
          if (o.dismissed) gr(o.id, o.removeDelay);
          else {
            let r = kt.get(o.id);
            r && (clearTimeout(r), kt.delete(o.id));
          }
        });
      }, [e]),
      {
        toasts: e,
        handlers: {
          updateHeight: dr,
          startPause: pr,
          endPause: s,
          calculateOffset: i,
        },
      }
    );
  },
  vr = q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  xr = q`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  br = q`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Pr = rt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${xr} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(t) => t.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${br} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Tr = q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Vr = rt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(t) => t.secondary || "#e0e0e0"};
  border-right-color: ${(t) => t.primary || "#616161"};
  animation: ${Tr} 1s linear infinite;
`,
  Sr = q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Cr = q`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  wr = rt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Sr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Cr} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(t) => t.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Ar = rt("div")`
  position: absolute;
`,
  Dr = rt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Mr = q`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Rr = rt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Mr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  Er = ({ toast: t }) => {
    let { icon: e, type: n, iconTheme: s } = t;
    return e !== void 0
      ? typeof e == "string"
        ? m.createElement(Rr, null, e)
        : e
      : n === "blank"
        ? null
        : m.createElement(
            Dr,
            null,
            m.createElement(Vr, { ...s }),
            n !== "loading" &&
              m.createElement(
                Ar,
                null,
                n === "error"
                  ? m.createElement(Pr, { ...s })
                  : m.createElement(wr, { ...s }),
              ),
          );
  },
  Lr = (t) => `
0% {transform: translate3d(0,${t * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  kr = (t) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t * -150}%,-1px) scale(.6); opacity:0;}
`,
  Fr = "0%{opacity:0;} 100%{opacity:1;}",
  Br = "0%{opacity:1;} 100%{opacity:0;}",
  jr = rt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  Or = rt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  Ir = (t, e) => {
    let n = t.includes("top") ? 1 : -1,
      [s, i] = Ms() ? [Fr, Br] : [Lr(n), kr(n)];
    return {
      animation: e
        ? `${q(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${q(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  Ur = m.memo(({ toast: t, position: e, style: n, children: s }) => {
    let i = t.height
        ? Ir(t.position || e || "top-center", t.visible)
        : { opacity: 0 },
      o = m.createElement(Er, { toast: t }),
      r = m.createElement(Or, { ...t.ariaProps }, ee(t.message, t));
    return m.createElement(
      jr,
      { className: t.className, style: { ...i, ...n, ...t.style } },
      typeof s == "function"
        ? s({ icon: o, message: r })
        : m.createElement(m.Fragment, null, o, r),
    );
  });
or(m.createElement);
var Nr = ({
    id: t,
    className: e,
    style: n,
    onHeightUpdate: s,
    children: i,
  }) => {
    let o = m.useCallback(
      (r) => {
        if (r) {
          let a = () => {
            let l = r.getBoundingClientRect().height;
            s(t, l);
          };
          (a(),
            new MutationObserver(a).observe(r, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            }));
        }
      },
      [t, s],
    );
    return m.createElement("div", { ref: o, className: e, style: n }, i);
  },
  $r = (t, e) => {
    let n = t.includes("top"),
      s = n ? { top: 0 } : { bottom: 0 },
      i = t.includes("center")
        ? { justifyContent: "center" }
        : t.includes("right")
          ? { justifyContent: "flex-end" }
          : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: Ms() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${e * (n ? 1 : -1)}px)`,
      ...s,
      ...i,
    };
  },
  Wr = ue`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  _t = 16,
  lu = ({
    reverseOrder: t,
    position: e = "top-center",
    toastOptions: n,
    gutter: s,
    children: i,
    containerStyle: o,
    containerClassName: r,
  }) => {
    let { toasts: a, handlers: l } = yr(n);
    return m.createElement(
      "div",
      {
        id: "_rht_toaster",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: _t,
          left: _t,
          right: _t,
          bottom: _t,
          pointerEvents: "none",
          ...o,
        },
        className: r,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      a.map((c) => {
        let u = c.position || e,
          h = l.calculateOffset(c, {
            reverseOrder: t,
            gutter: s,
            defaultPosition: e,
          }),
          f = $r(u, h);
        return m.createElement(
          Nr,
          {
            id: c.id,
            key: c.id,
            onHeightUpdate: l.updateHeight,
            className: c.visible ? Wr : "",
            style: f,
          },
          c.type === "custom"
            ? ee(c.message, c)
            : i
              ? i(c)
              : m.createElement(Ur, { toast: c, position: u }),
        );
      }),
    );
  },
  cu = O;
const Es = m.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  }),
  he = m.createContext({}),
  fe = m.createContext(null),
  de = typeof document < "u",
  Ye = de ? m.useLayoutEffect : m.useEffect,
  Ls = m.createContext({ strict: !1 }),
  Xe = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  zr = "framerAppearId",
  ks = "data-" + Xe(zr);
function Hr(t, e, n, s) {
  const { visualElement: i } = m.useContext(he),
    o = m.useContext(Ls),
    r = m.useContext(fe),
    a = m.useContext(Es).reducedMotion,
    l = m.useRef();
  ((s = s || o.renderer),
    !l.current &&
      s &&
      (l.current = s(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: r,
        blockInitialAnimation: r ? r.initial === !1 : !1,
        reducedMotionConfig: a,
      })));
  const c = l.current;
  m.useInsertionEffect(() => {
    c && c.update(n, r);
  });
  const u = m.useRef(!!(n[ks] && !window.HandoffComplete));
  return (
    Ye(() => {
      c &&
        (c.render(),
        u.current && c.animationState && c.animationState.animateChanges());
    }),
    m.useEffect(() => {
      c &&
        (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        u.current && ((u.current = !1), (window.HandoffComplete = !0)));
    }),
    c
  );
}
function Pt(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function Gr(t, e, n) {
  return m.useCallback(
    (s) => {
      (s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == "function" ? n(s) : Pt(n) && (n.current = s)));
    },
    [e],
  );
}
function It(t) {
  return typeof t == "string" || Array.isArray(t);
}
function pe(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const qe = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ze = ["initial", ...qe];
function me(t) {
  return pe(t.animate) || Ze.some((e) => It(t[e]));
}
function Fs(t) {
  return !!(me(t) || t.variants);
}
function Kr(t, e) {
  if (me(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || It(n) ? n : void 0,
      animate: It(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function _r(t) {
  const { initial: e, animate: n } = Kr(t, m.useContext(he));
  return m.useMemo(() => ({ initial: e, animate: n }), [Vn(e), Vn(n)]);
}
function Vn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Sn = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ut = {};
for (const t in Sn) Ut[t] = { isEnabled: (e) => Sn[t].some((n) => !!e[n]) };
function Yr(t) {
  for (const e in t) Ut[e] = { ...Ut[e], ...t[e] };
}
const Je = m.createContext({}),
  Bs = m.createContext({}),
  Xr = Symbol.for("motionComponentSymbol");
function qr({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: s,
  Component: i,
}) {
  t && Yr(t);
  function o(a, l) {
    let c;
    const u = { ...m.useContext(Es), ...a, layoutId: Zr(a) },
      { isStatic: h } = u,
      f = _r(a),
      d = s(a, h);
    if (!h && de) {
      f.visualElement = Hr(i, d, u, e);
      const p = m.useContext(Bs),
        g = m.useContext(Ls).strict;
      f.visualElement && (c = f.visualElement.loadFeatures(u, g, t, p));
    }
    return m.createElement(
      he.Provider,
      { value: f },
      c && f.visualElement
        ? m.createElement(c, { visualElement: f.visualElement, ...u })
        : null,
      n(i, a, Gr(d, f.visualElement, l), d, h, f.visualElement),
    );
  }
  const r = m.forwardRef(o);
  return ((r[Xr] = i), r);
}
function Zr({ layoutId: t }) {
  const e = m.useContext(Je).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Jr(t) {
  function e(s, i = {}) {
    return qr(t(s, i));
  }
  if (typeof Proxy > "u") return e;
  const n = new Map();
  return new Proxy(e, {
    get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
  });
}
const Qr = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Qe(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Qr.indexOf(t) > -1 || /[A-Z]/.test(t));
}
const ne = {};
function to(t) {
  Object.assign(ne, t);
}
const Wt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  gt = new Set(Wt);
function js(t, { layout: e, layoutId: n }) {
  return (
    gt.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!ne[t] || t === "opacity"))
  );
}
const I = (t) => !!(t && t.getVelocity),
  eo = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  no = Wt.length;
function so(
  t,
  { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 },
  s,
  i,
) {
  let o = "";
  for (let r = 0; r < no; r++) {
    const a = Wt[r];
    if (t[a] !== void 0) {
      const l = eo[a] || a;
      o += `${l}(${t[a]}) `;
    }
  }
  return (
    e && !t.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(t, s ? "" : o)) : n && s && (o = "none"),
    o
  );
}
const Os = (t) => (e) => typeof e == "string" && e.startsWith(t),
  Is = Os("--"),
  Be = Os("var(--"),
  io =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  ro = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
  st = (t, e, n) => Math.min(Math.max(n, t), e),
  yt = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Ft = { ...yt, transform: (t) => st(0, 1, t) },
  Yt = { ...yt, default: 1 },
  Bt = (t) => Math.round(t * 1e5) / 1e5,
  ge = /(-)?([\d]*\.?[\d])+/g,
  Us =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  oo =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function zt(t) {
  return typeof t == "string";
}
const Ht = (t) => ({
    test: (e) => zt(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  Q = Ht("deg"),
  H = Ht("%"),
  T = Ht("px"),
  ao = Ht("vh"),
  lo = Ht("vw"),
  Cn = {
    ...H,
    parse: (t) => H.parse(t) / 100,
    transform: (t) => H.transform(t * 100),
  },
  wn = { ...yt, transform: Math.round },
  Ns = {
    borderWidth: T,
    borderTopWidth: T,
    borderRightWidth: T,
    borderBottomWidth: T,
    borderLeftWidth: T,
    borderRadius: T,
    radius: T,
    borderTopLeftRadius: T,
    borderTopRightRadius: T,
    borderBottomRightRadius: T,
    borderBottomLeftRadius: T,
    width: T,
    maxWidth: T,
    height: T,
    maxHeight: T,
    size: T,
    top: T,
    right: T,
    bottom: T,
    left: T,
    padding: T,
    paddingTop: T,
    paddingRight: T,
    paddingBottom: T,
    paddingLeft: T,
    margin: T,
    marginTop: T,
    marginRight: T,
    marginBottom: T,
    marginLeft: T,
    rotate: Q,
    rotateX: Q,
    rotateY: Q,
    rotateZ: Q,
    scale: Yt,
    scaleX: Yt,
    scaleY: Yt,
    scaleZ: Yt,
    skew: Q,
    skewX: Q,
    skewY: Q,
    distance: T,
    translateX: T,
    translateY: T,
    translateZ: T,
    x: T,
    y: T,
    z: T,
    perspective: T,
    transformPerspective: T,
    opacity: Ft,
    originX: Cn,
    originY: Cn,
    originZ: T,
    zIndex: wn,
    fillOpacity: Ft,
    strokeOpacity: Ft,
    numOctaves: wn,
  };
function tn(t, e, n, s) {
  const { style: i, vars: o, transform: r, transformOrigin: a } = t;
  let l = !1,
    c = !1,
    u = !0;
  for (const h in e) {
    const f = e[h];
    if (Is(h)) {
      o[h] = f;
      continue;
    }
    const d = Ns[h],
      p = ro(f, d);
    if (gt.has(h)) {
      if (((l = !0), (r[h] = p), !u)) continue;
      f !== (d.default || 0) && (u = !1);
    } else h.startsWith("origin") ? ((c = !0), (a[h] = p)) : (i[h] = p);
  }
  if (
    (e.transform ||
      (l || s
        ? (i.transform = so(t.transform, n, u, s))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    const { originX: h = "50%", originY: f = "50%", originZ: d = 0 } = a;
    i.transformOrigin = `${h} ${f} ${d}`;
  }
}
const en = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function $s(t, e, n) {
  for (const s in e) !I(e[s]) && !js(s, n) && (t[s] = e[s]);
}
function co({ transformTemplate: t }, e, n) {
  return m.useMemo(() => {
    const s = en();
    return (
      tn(s, e, { enableHardwareAcceleration: !n }, t),
      Object.assign({}, s.vars, s.style)
    );
  }, [e]);
}
function uo(t, e, n) {
  const s = t.style || {},
    i = {};
  return (
    $s(i, s, t),
    Object.assign(i, co(t, e, n)),
    t.transformValues ? t.transformValues(i) : i
  );
}
function ho(t, e, n) {
  const s = {},
    i = uo(t, e, n);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((s.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (s.tabIndex = 0),
    (s.style = i),
    s
  );
}
const fo = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function se(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    fo.has(t)
  );
}
let Ws = (t) => !se(t);
function po(t) {
  t && (Ws = (e) => (e.startsWith("on") ? !se(e) : t(e)));
}
try {
  po(require("@emotion/is-prop-valid").default);
} catch {}
function mo(t, e, n) {
  const s = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      ((Ws(i) ||
        (n === !0 && se(i)) ||
        (!e && !se(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (s[i] = t[i]));
  return s;
}
function An(t, e, n) {
  return typeof t == "string" ? t : T.transform(e + n * t);
}
function go(t, e, n) {
  const s = An(e, t.x, t.width),
    i = An(n, t.y, t.height);
  return `${s} ${i}`;
}
const yo = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  vo = { offset: "strokeDashoffset", array: "strokeDasharray" };
function xo(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? yo : vo;
  t[o.offset] = T.transform(-s);
  const r = T.transform(e),
    a = T.transform(n);
  t[o.array] = `${r} ${a}`;
}
function nn(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: o,
    pathLength: r,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  h,
  f,
) {
  if ((tn(t, c, u, f), h)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  const { attrs: d, style: p, dimensions: g } = t;
  (d.transform && (g && (p.transform = d.transform), delete d.transform),
    g &&
      (i !== void 0 || o !== void 0 || p.transform) &&
      (p.transformOrigin = go(
        g,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    s !== void 0 && (d.scale = s),
    r !== void 0 && xo(d, r, a, l, !1));
}
const zs = () => ({ ...en(), attrs: {} }),
  sn = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function bo(t, e, n, s) {
  const i = m.useMemo(() => {
    const o = zs();
    return (
      nn(o, e, { enableHardwareAcceleration: !1 }, sn(s), t.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [e]);
  if (t.style) {
    const o = {};
    ($s(o, t.style, t), (i.style = { ...o, ...i.style }));
  }
  return i;
}
function Po(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (Qe(n) ? bo : ho)(s, o, r, n),
      u = { ...mo(s, typeof n == "string", t), ...l, ref: i },
      { children: h } = s,
      f = m.useMemo(() => (I(h) ? h.get() : h), [h]);
    return m.createElement(n, { ...u, children: f });
  };
}
function Hs(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n) t.style.setProperty(o, n[o]);
}
const Gs = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Ks(t, e, n, s) {
  Hs(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(Gs.has(i) ? i : Xe(i), e.attrs[i]);
}
function rn(t, e) {
  const { style: n } = t,
    s = {};
  for (const i in n)
    (I(n[i]) || (e.style && I(e.style[i])) || js(i, t)) && (s[i] = n[i]);
  return s;
}
function _s(t, e) {
  const n = rn(t, e);
  for (const s in t)
    if (I(t[s]) || I(e[s])) {
      const i =
        Wt.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      n[i] = t[s];
    }
  return n;
}
function on(t, e, n, s = {}, i = {}) {
  return (
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)),
    typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)),
    e
  );
}
function Ys(t) {
  const e = m.useRef(null);
  return (e.current === null && (e.current = t()), e.current);
}
const ie = (t) => Array.isArray(t),
  To = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  Vo = (t) => (ie(t) ? t[t.length - 1] || 0 : t);
function Qt(t) {
  const e = I(t) ? t.get() : t;
  return To(e) ? e.toValue() : e;
}
function So(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n },
  s,
  i,
  o,
) {
  const r = { latestValues: Co(s, i, o, t), renderState: e() };
  return (n && (r.mount = (a) => n(s, a, r)), r);
}
const Xs = (t) => (e, n) => {
  const s = m.useContext(he),
    i = m.useContext(fe),
    o = () => So(t, e, s, i);
  return n ? o() : Ys(o);
};
function Co(t, e, n, s) {
  const i = {},
    o = s(t, {});
  for (const f in o) i[f] = Qt(o[f]);
  let { initial: r, animate: a } = t;
  const l = me(t),
    c = Fs(t);
  e &&
    c &&
    !l &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? a : r;
  return (
    h &&
      typeof h != "boolean" &&
      !pe(h) &&
      (Array.isArray(h) ? h : [h]).forEach((d) => {
        const p = on(t, d);
        if (!p) return;
        const { transitionEnd: g, transition: x, ...P } = p;
        for (const v in P) {
          let y = P[v];
          if (Array.isArray(y)) {
            const b = u ? y.length - 1 : 0;
            y = y[b];
          }
          y !== null && (i[v] = y);
        }
        for (const v in g) i[v] = g[v];
      }),
    i
  );
}
const E = (t) => t;
class Dn {
  constructor() {
    ((this.order = []), (this.scheduled = new Set()));
  }
  add(e) {
    if (!this.scheduled.has(e))
      return (this.scheduled.add(e), this.order.push(e), !0);
  }
  remove(e) {
    const n = this.order.indexOf(e);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e));
  }
  clear() {
    ((this.order.length = 0), this.scheduled.clear());
  }
}
function wo(t) {
  let e = new Dn(),
    n = new Dn(),
    s = 0,
    i = !1,
    o = !1;
  const r = new WeakSet(),
    a = {
      schedule: (l, c = !1, u = !1) => {
        const h = u && i,
          f = h ? e : n;
        return (c && r.add(l), f.add(l) && h && i && (s = e.order.length), l);
      },
      cancel: (l) => {
        (n.remove(l), r.delete(l));
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([e, n] = [n, e]), n.clear(), (s = e.order.length), s))
          for (let c = 0; c < s; c++) {
            const u = e.order[c];
            (u(l), r.has(u) && (a.schedule(u), t()));
          }
        ((i = !1), o && ((o = !1), a.process(l)));
      },
    };
  return a;
}
const Xt = ["prepare", "read", "update", "preRender", "render", "postRender"],
  Ao = 40;
function Do(t, e) {
  let n = !1,
    s = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Xt.reduce((h, f) => ((h[f] = wo(() => (n = !0))), h), {}),
    r = (h) => o[h].process(i),
    a = () => {
      const h = performance.now();
      ((n = !1),
        (i.delta = s ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, Ao), 1)),
        (i.timestamp = h),
        (i.isProcessing = !0),
        Xt.forEach(r),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(a)));
    },
    l = () => {
      ((n = !0), (s = !0), i.isProcessing || t(a));
    };
  return {
    schedule: Xt.reduce((h, f) => {
      const d = o[f];
      return (
        (h[f] = (p, g = !1, x = !1) => (n || l(), d.schedule(p, g, x))),
        h
      );
    }, {}),
    cancel: (h) => Xt.forEach((f) => o[f].cancel(h)),
    state: i,
    steps: o,
  };
}
const {
    schedule: w,
    cancel: Z,
    state: F,
    steps: be,
  } = Do(typeof requestAnimationFrame < "u" ? requestAnimationFrame : E, !0),
  Mo = {
    useVisualState: Xs({
      scrapeMotionValuesFromProps: _s,
      createRenderState: zs,
      onMount: (t, e, { renderState: n, latestValues: s }) => {
        (w.read(() => {
          try {
            n.dimensions =
              typeof e.getBBox == "function"
                ? e.getBBox()
                : e.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          w.render(() => {
            (nn(
              n,
              s,
              { enableHardwareAcceleration: !1 },
              sn(e.tagName),
              t.transformTemplate,
            ),
              Ks(e, n));
          }));
      },
    }),
  },
  Ro = {
    useVisualState: Xs({
      scrapeMotionValuesFromProps: rn,
      createRenderState: en,
    }),
  };
function Eo(t, { forwardMotionProps: e = !1 }, n, s) {
  return {
    ...(Qe(t) ? Mo : Ro),
    preloadedFeatures: n,
    useRender: Po(e),
    createVisualElement: s,
    Component: t,
  };
}
function _(t, e, n, s = { passive: !0 }) {
  return (t.addEventListener(e, n, s), () => t.removeEventListener(e, n));
}
const qs = (t) =>
  t.pointerType === "mouse"
    ? typeof t.button != "number" || t.button <= 0
    : t.isPrimary !== !1;
function ye(t, e = "page") {
  return { point: { x: t[e + "X"], y: t[e + "Y"] } };
}
const Lo = (t) => (e) => qs(e) && t(e, ye(e));
function Y(t, e, n, s) {
  return _(t, e, Lo(n), s);
}
const ko = (t, e) => (n) => e(t(n)),
  nt = (...t) => t.reduce(ko);
function Zs(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? ((e = t), n) : !1;
  };
}
const Mn = Zs("dragHorizontal"),
  Rn = Zs("dragVertical");
function Js(t) {
  let e = !1;
  if (t === "y") e = Rn();
  else if (t === "x") e = Mn();
  else {
    const n = Mn(),
      s = Rn();
    n && s
      ? (e = () => {
          (n(), s());
        })
      : (n && n(), s && s());
  }
  return e;
}
function Qs() {
  const t = Js(!0);
  return t ? (t(), !1) : !0;
}
class ot {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() {}
}
function En(t, e) {
  const n = "pointer" + (e ? "enter" : "leave"),
    s = "onHover" + (e ? "Start" : "End"),
    i = (o, r) => {
      if (o.pointerType === "touch" || Qs()) return;
      const a = t.getProps();
      (t.animationState &&
        a.whileHover &&
        t.animationState.setActive("whileHover", e),
        a[s] && w.update(() => a[s](o, r)));
    };
  return Y(t.current, n, i, { passive: !t.getProps()[s] });
}
class Fo extends ot {
  mount() {
    this.unmount = nt(En(this.node, !0), En(this.node, !1));
  }
  unmount() {}
}
class Bo extends ot {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = nt(
      _(this.node.current, "focus", () => this.onFocus()),
      _(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const ti = (t, e) => (e ? (t === e ? !0 : ti(t, e.parentElement)) : !1);
function Pe(t, e) {
  if (!e) return;
  const n = new PointerEvent("pointer" + t);
  e(n, ye(n));
}
class jo extends ot {
  constructor() {
    (super(...arguments),
      (this.removeStartListeners = E),
      (this.removeEndListeners = E),
      (this.removeAccessibleListeners = E),
      (this.startPointerPress = (e, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const s = this.node.getProps(),
          o = Y(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: c,
                onTapCancel: u,
                globalTapTarget: h,
              } = this.node.getProps();
              w.update(() => {
                !h && !ti(this.node.current, a.target)
                  ? u && u(a, l)
                  : c && c(a, l);
              });
            },
            { passive: !(s.onTap || s.onPointerUp) },
          ),
          r = Y(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(s.onTapCancel || s.onPointerCancel),
          });
        ((this.removeEndListeners = nt(o, r)), this.startPress(e, n));
      }),
      (this.startAccessiblePress = () => {
        const e = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const r = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Pe("up", (l, c) => {
                  const { onTap: u } = this.node.getProps();
                  u && w.update(() => u(l, c));
                });
            };
            (this.removeEndListeners(),
              (this.removeEndListeners = _(this.node.current, "keyup", r)),
              Pe("down", (a, l) => {
                this.startPress(a, l);
              }));
          },
          n = _(this.node.current, "keydown", e),
          s = () => {
            this.isPressing && Pe("cancel", (o, r) => this.cancelPress(o, r));
          },
          i = _(this.node.current, "blur", s);
        this.removeAccessibleListeners = nt(n, i);
      }));
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: s, whileTap: i } = this.node.getProps();
    (i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      s && w.update(() => s(e, n)));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Qs()
    );
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: s } = this.node.getProps();
    s && w.update(() => s(e, n));
  }
  mount() {
    const e = this.node.getProps(),
      n = Y(
        e.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(e.onTapStart || e.onPointerStart) },
      ),
      s = _(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = nt(n, s);
  }
  unmount() {
    (this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners());
  }
}
const je = new WeakMap(),
  Te = new WeakMap(),
  Oo = (t) => {
    const e = je.get(t.target);
    e && e(t);
  },
  Io = (t) => {
    t.forEach(Oo);
  };
function Uo({ root: t, ...e }) {
  const n = t || document;
  Te.has(n) || Te.set(n, {});
  const s = Te.get(n),
    i = JSON.stringify(e);
  return (
    s[i] || (s[i] = new IntersectionObserver(Io, { root: t, ...e })),
    s[i]
  );
}
function No(t, e, n) {
  const s = Uo(e);
  return (
    je.set(t, n),
    s.observe(t),
    () => {
      (je.delete(t), s.unobserve(t));
    }
  );
}
const $o = { some: 0, all: 1 };
class Wo extends ot {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = "some", once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == "number" ? i : $o[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), o && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(),
          f = c ? u : h;
        f && f(l);
      };
    return No(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(zo(e, n)) && this.startObserver();
  }
  unmount() {}
}
function zo({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Ho = {
  inView: { Feature: Wo },
  tap: { Feature: jo },
  focus: { Feature: Bo },
  hover: { Feature: Fo },
};
function ei(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
function Go(t) {
  const e = {};
  return (t.values.forEach((n, s) => (e[s] = n.get())), e);
}
function Ko(t) {
  const e = {};
  return (t.values.forEach((n, s) => (e[s] = n.getVelocity())), e);
}
function ve(t, e, n) {
  const s = t.getProps();
  return on(s, e, n !== void 0 ? n : s.custom, Go(t), Ko(t));
}
let an = E;
const pt = (t) => t * 1e3,
  X = (t) => t / 1e3,
  _o = { current: !1 },
  ni = (t) => Array.isArray(t) && typeof t[0] == "number";
function si(t) {
  return !!(
    !t ||
    (typeof t == "string" && ii[t]) ||
    ni(t) ||
    (Array.isArray(t) && t.every(si))
  );
}
const Lt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  ii = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Lt([0, 0.65, 0.55, 1]),
    circOut: Lt([0.55, 0, 1, 0.45]),
    backIn: Lt([0.31, 0.01, 0.66, -0.59]),
    backOut: Lt([0.33, 1.53, 0.69, 0.99]),
  };
function ri(t) {
  if (t) return ni(t) ? Lt(t) : Array.isArray(t) ? t.map(ri) : ii[t];
}
function Yo(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a,
    times: l,
  } = {},
) {
  const c = { [e]: n };
  l && (c.offset = l);
  const u = ri(a);
  return (
    Array.isArray(u) && (c.easing = u),
    t.animate(c, {
      delay: s,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: r === "reverse" ? "alternate" : "normal",
    })
  );
}
function Xo(t, { repeat: e, repeatType: n = "loop" }) {
  const s = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
  return t[s];
}
const oi = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  qo = 1e-7,
  Zo = 12;
function Jo(t, e, n, s, i) {
  let o,
    r,
    a = 0;
  do ((r = e + (n - e) / 2), (o = oi(r, s, i) - t), o > 0 ? (n = r) : (e = r));
  while (Math.abs(o) > qo && ++a < Zo);
  return r;
}
function Gt(t, e, n, s) {
  if (t === e && n === s) return E;
  const i = (o) => Jo(o, 0, 1, t, n);
  return (o) => (o === 0 || o === 1 ? o : oi(i(o), e, s));
}
const Qo = Gt(0.42, 0, 1, 1),
  ta = Gt(0, 0, 0.58, 1),
  ai = Gt(0.42, 0, 0.58, 1),
  ea = (t) => Array.isArray(t) && typeof t[0] != "number",
  li = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  ci = (t) => (e) => 1 - t(1 - e),
  ln = (t) => 1 - Math.sin(Math.acos(t)),
  ui = ci(ln),
  na = li(ln),
  hi = Gt(0.33, 1.53, 0.69, 0.99),
  cn = ci(hi),
  sa = li(cn),
  ia = (t) =>
    (t *= 2) < 1 ? 0.5 * cn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  ra = {
    linear: E,
    easeIn: Qo,
    easeInOut: ai,
    easeOut: ta,
    circIn: ln,
    circInOut: na,
    circOut: ui,
    backIn: cn,
    backInOut: sa,
    backOut: hi,
    anticipate: ia,
  },
  Ln = (t) => {
    if (Array.isArray(t)) {
      an(t.length === 4);
      const [e, n, s, i] = t;
      return Gt(e, n, s, i);
    } else if (typeof t == "string") return ra[t];
    return t;
  },
  un = (t, e) => (n) =>
    !!(
      (zt(n) && oo.test(n) && n.startsWith(t)) ||
      (e && Object.prototype.hasOwnProperty.call(n, e))
    ),
  fi = (t, e, n) => (s) => {
    if (!zt(s)) return s;
    const [i, o, r, a] = s.match(ge);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(o),
      [n]: parseFloat(r),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  oa = (t) => st(0, 255, t),
  Ve = { ...yt, transform: (t) => Math.round(oa(t)) },
  dt = {
    test: un("rgb", "red"),
    parse: fi("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      "rgba(" +
      Ve.transform(t) +
      ", " +
      Ve.transform(e) +
      ", " +
      Ve.transform(n) +
      ", " +
      Bt(Ft.transform(s)) +
      ")",
  };
function aa(t) {
  let e = "",
    n = "",
    s = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Oe = { test: un("#"), parse: aa, transform: dt.transform },
  Tt = {
    test: un("hsl", "hue"),
    parse: fi("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      H.transform(Bt(e)) +
      ", " +
      H.transform(Bt(n)) +
      ", " +
      Bt(Ft.transform(s)) +
      ")",
  },
  j = {
    test: (t) => dt.test(t) || Oe.test(t) || Tt.test(t),
    parse: (t) =>
      dt.test(t) ? dt.parse(t) : Tt.test(t) ? Tt.parse(t) : Oe.parse(t),
    transform: (t) =>
      zt(t) ? t : t.hasOwnProperty("red") ? dt.transform(t) : Tt.transform(t),
  },
  R = (t, e, n) => -n * t + n * e + t;
function Se(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
        ? e
        : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t
  );
}
function la({ hue: t, saturation: e, lightness: n, alpha: s }) {
  ((t /= 360), (e /= 100), (n /= 100));
  let i = 0,
    o = 0,
    r = 0;
  if (!e) i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    ((i = Se(l, a, t + 1 / 3)), (o = Se(l, a, t)), (r = Se(l, a, t - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
const Ce = (t, e, n) => {
    const s = t * t;
    return Math.sqrt(Math.max(0, n * (e * e - s) + s));
  },
  ca = [Oe, dt, Tt],
  ua = (t) => ca.find((e) => e.test(t));
function kn(t) {
  const e = ua(t);
  let n = e.parse(t);
  return (e === Tt && (n = la(n)), n);
}
const di = (t, e) => {
  const n = kn(t),
    s = kn(e),
    i = { ...n };
  return (o) => (
    (i.red = Ce(n.red, s.red, o)),
    (i.green = Ce(n.green, s.green, o)),
    (i.blue = Ce(n.blue, s.blue, o)),
    (i.alpha = R(n.alpha, s.alpha, o)),
    dt.transform(i)
  );
};
function ha(t) {
  var e, n;
  return (
    isNaN(t) &&
    zt(t) &&
    (((e = t.match(ge)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((n = t.match(Us)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const pi = { regex: io, countKey: "Vars", token: "${v}", parse: E },
  mi = { regex: Us, countKey: "Colors", token: "${c}", parse: j.parse },
  gi = { regex: ge, countKey: "Numbers", token: "${n}", parse: yt.parse };
function we(t, { regex: e, countKey: n, token: s, parse: i }) {
  const o = t.tokenised.match(e);
  o &&
    ((t["num" + n] = o.length),
    (t.tokenised = t.tokenised.replace(e, s)),
    t.values.push(...o.map(i)));
}
function re(t) {
  const e = t.toString(),
    n = {
      value: e,
      tokenised: e,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return (n.value.includes("var(--") && we(n, pi), we(n, mi), we(n, gi), n);
}
function yi(t) {
  return re(t).values;
}
function vi(t) {
  const { values: e, numColors: n, numVars: s, tokenised: i } = re(t),
    o = e.length;
  return (r) => {
    let a = i;
    for (let l = 0; l < o; l++)
      l < s
        ? (a = a.replace(pi.token, r[l]))
        : l < s + n
          ? (a = a.replace(mi.token, j.transform(r[l])))
          : (a = a.replace(gi.token, Bt(r[l])));
    return a;
  };
}
const fa = (t) => (typeof t == "number" ? 0 : t);
function da(t) {
  const e = yi(t);
  return vi(t)(e.map(fa));
}
const it = {
    test: ha,
    parse: yi,
    createTransformer: vi,
    getAnimatableNone: da,
  },
  xi = (t, e) => (n) => `${n > 0 ? e : t}`;
function bi(t, e) {
  return typeof t == "number"
    ? (n) => R(t, e, n)
    : j.test(t)
      ? di(t, e)
      : t.startsWith("var(")
        ? xi(t, e)
        : Ti(t, e);
}
const Pi = (t, e) => {
    const n = [...t],
      s = n.length,
      i = t.map((o, r) => bi(o, e[r]));
    return (o) => {
      for (let r = 0; r < s; r++) n[r] = i[r](o);
      return n;
    };
  },
  pa = (t, e) => {
    const n = { ...t, ...e },
      s = {};
    for (const i in n)
      t[i] !== void 0 && e[i] !== void 0 && (s[i] = bi(t[i], e[i]));
    return (i) => {
      for (const o in s) n[o] = s[o](i);
      return n;
    };
  },
  Ti = (t, e) => {
    const n = it.createTransformer(e),
      s = re(t),
      i = re(e);
    return s.numVars === i.numVars &&
      s.numColors === i.numColors &&
      s.numNumbers >= i.numNumbers
      ? nt(Pi(s.values, i.values), n)
      : xi(t, e);
  },
  Nt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s;
  },
  Fn = (t, e) => (n) => R(t, e, n);
function ma(t) {
  return typeof t == "number"
    ? Fn
    : typeof t == "string"
      ? j.test(t)
        ? di
        : Ti
      : Array.isArray(t)
        ? Pi
        : typeof t == "object"
          ? pa
          : Fn;
}
function ga(t, e, n) {
  const s = [],
    i = n || ma(t[0]),
    o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || E : e;
      a = nt(l, a);
    }
    s.push(a);
  }
  return s;
}
function Vi(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if ((an(o === e.length), o === 1)) return () => e[0];
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const r = ga(e, s, i),
    a = r.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < t.length - 2 && !(c < t[u + 1]); u++);
      const h = Nt(t[u], t[u + 1], c);
      return r[u](h);
    };
  return n ? (c) => l(st(t[0], t[o - 1], c)) : l;
}
function ya(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = Nt(0, e, s);
    t.push(R(n, 1, i));
  }
}
function va(t) {
  const e = [0];
  return (ya(e, t.length - 1), e);
}
function xa(t, e) {
  return t.map((n) => n * e);
}
function ba(t, e) {
  return t.map(() => e || ai).splice(0, t.length - 1);
}
function oe({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: s = "easeInOut",
}) {
  const i = ea(s) ? s.map(Ln) : Ln(s),
    o = { done: !1, value: e[0] },
    r = xa(n && n.length === e.length ? n : va(e), t),
    a = Vi(r, e, { ease: Array.isArray(i) ? i : ba(e, i) });
  return {
    calculatedDuration: t,
    next: (l) => ((o.value = a(l)), (o.done = l >= t), o),
  };
}
function Si(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Pa = 5;
function Ci(t, e, n) {
  const s = Math.max(e - Pa, 0);
  return Si(n - t(s), e - s);
}
const Ae = 0.001,
  Ta = 0.01,
  Va = 10,
  Sa = 0.05,
  Ca = 1;
function wa({
  duration: t = 800,
  bounce: e = 0.25,
  velocity: n = 0,
  mass: s = 1,
}) {
  let i,
    o,
    r = 1 - e;
  ((r = st(Sa, Ca, r)),
    (t = st(Ta, Va, X(t))),
    r < 1
      ? ((i = (c) => {
          const u = c * r,
            h = u * t,
            f = u - n,
            d = Ie(c, r),
            p = Math.exp(-h);
          return Ae - (f / d) * p;
        }),
        (o = (c) => {
          const h = c * r * t,
            f = h * n + n,
            d = Math.pow(r, 2) * Math.pow(c, 2) * t,
            p = Math.exp(-h),
            g = Ie(Math.pow(c, 2), r);
          return ((-i(c) + Ae > 0 ? -1 : 1) * ((f - d) * p)) / g;
        }))
      : ((i = (c) => {
          const u = Math.exp(-c * t),
            h = (c - n) * t + 1;
          return -Ae + u * h;
        }),
        (o = (c) => {
          const u = Math.exp(-c * t),
            h = (n - c) * (t * t);
          return u * h;
        })));
  const a = 5 / t,
    l = Da(i, o, a);
  if (((t = pt(t)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: t };
  {
    const c = Math.pow(l, 2) * s;
    return { stiffness: c, damping: r * 2 * Math.sqrt(s * c), duration: t };
  }
}
const Aa = 12;
function Da(t, e, n) {
  let s = n;
  for (let i = 1; i < Aa; i++) s = s - t(s) / e(s);
  return s;
}
function Ie(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Ma = ["duration", "bounce"],
  Ra = ["stiffness", "damping", "mass"];
function Bn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Ea(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!Bn(t, Ra) && Bn(t, Ma)) {
    const n = wa(t);
    ((e = { ...e, ...n, mass: 1 }), (e.isResolvedFromDuration = !0));
  }
  return e;
}
function wi({ keyframes: t, restDelta: e, restSpeed: n, ...s }) {
  const i = t[0],
    o = t[t.length - 1],
    r = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: h,
      isResolvedFromDuration: f,
    } = Ea({ ...s, velocity: -X(s.velocity || 0) }),
    d = h || 0,
    p = l / (2 * Math.sqrt(a * c)),
    g = o - i,
    x = X(Math.sqrt(a / c)),
    P = Math.abs(g) < 5;
  (n || (n = P ? 0.01 : 2), e || (e = P ? 0.005 : 0.5));
  let v;
  if (p < 1) {
    const y = Ie(x, p);
    v = (b) => {
      const V = Math.exp(-p * x * b);
      return (
        o - V * (((d + p * x * g) / y) * Math.sin(y * b) + g * Math.cos(y * b))
      );
    };
  } else if (p === 1) v = (y) => o - Math.exp(-x * y) * (g + (d + x * g) * y);
  else {
    const y = x * Math.sqrt(p * p - 1);
    v = (b) => {
      const V = Math.exp(-p * x * b),
        A = Math.min(y * b, 300);
      return (
        o - (V * ((d + p * x * g) * Math.sinh(A) + y * g * Math.cosh(A))) / y
      );
    };
  }
  return {
    calculatedDuration: (f && u) || null,
    next: (y) => {
      const b = v(y);
      if (f) r.done = y >= u;
      else {
        let V = d;
        y !== 0 && (p < 1 ? (V = Ci(v, y, b)) : (V = 0));
        const A = Math.abs(V) <= n,
          D = Math.abs(o - b) <= e;
        r.done = A && D;
      }
      return ((r.value = r.done ? o : b), r);
    },
  };
}
function jn({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const h = t[0],
    f = { done: !1, value: h },
    d = (S) => (a !== void 0 && S < a) || (l !== void 0 && S > l),
    p = (S) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - S) < Math.abs(l - S)
          ? a
          : l;
  let g = n * e;
  const x = h + g,
    P = r === void 0 ? x : r(x);
  P !== x && (g = P - h);
  const v = (S) => -g * Math.exp(-S / s),
    y = (S) => P + v(S),
    b = (S) => {
      const C = v(S),
        N = y(S);
      ((f.done = Math.abs(C) <= c), (f.value = f.done ? P : N));
    };
  let V, A;
  const D = (S) => {
    d(f.value) &&
      ((V = S),
      (A = wi({
        keyframes: [f.value, p(f.value)],
        velocity: Ci(y, S, f.value),
        damping: i,
        stiffness: o,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    D(0),
    {
      calculatedDuration: null,
      next: (S) => {
        let C = !1;
        return (
          !A && V === void 0 && ((C = !0), b(S), D(S)),
          V !== void 0 && S > V ? A.next(S - V) : (!C && b(S), f)
        );
      },
    }
  );
}
const La = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: () => w.update(e, !0),
      stop: () => Z(e),
      now: () => (F.isProcessing ? F.timestamp : performance.now()),
    };
  },
  On = 2e4;
function In(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < On; ) ((e += n), (s = t.next(e)));
  return e >= On ? 1 / 0 : e;
}
const ka = { decay: jn, inertia: jn, tween: oe, keyframes: oe, spring: wi };
function ae({
  autoplay: t = !0,
  delay: e = 0,
  driver: n = La,
  keyframes: s,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: r = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: c,
  onComplete: u,
  onUpdate: h,
  ...f
}) {
  let d = 1,
    p = !1,
    g,
    x;
  const P = () => {
    x = new Promise((M) => {
      g = M;
    });
  };
  P();
  let v;
  const y = ka[i] || oe;
  let b;
  y !== oe &&
    typeof s[0] != "number" &&
    ((b = Vi([0, 100], s, { clamp: !1 })), (s = [0, 100]));
  const V = y({ ...f, keyframes: s });
  let A;
  a === "mirror" &&
    (A = y({
      ...f,
      keyframes: [...s].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let D = "idle",
    S = null,
    C = null,
    N = null;
  V.calculatedDuration === null && o && (V.calculatedDuration = In(V));
  const { calculatedDuration: vt } = V;
  let z = 1 / 0,
    G = 1 / 0;
  vt !== null && ((z = vt + r), (G = z * (o + 1) - r));
  let B = 0;
  const xt = (M) => {
      if (C === null) return;
      (d > 0 && (C = Math.min(C, M)),
        d < 0 && (C = Math.min(M - G / d, C)),
        S !== null ? (B = S) : (B = Math.round(M - C) * d));
      const Dt = B - e * (d >= 0 ? 1 : -1),
        vn = d >= 0 ? Dt < 0 : Dt > G;
      ((B = Math.max(Dt, 0)), D === "finished" && S === null && (B = G));
      let xn = B,
        bn = V;
      if (o) {
        const xe = Math.min(B, G) / z;
        let Kt = Math.floor(xe),
          at = xe % 1;
        (!at && xe >= 1 && (at = 1),
          at === 1 && Kt--,
          (Kt = Math.min(Kt, o + 1)),
          !!(Kt % 2) &&
            (a === "reverse"
              ? ((at = 1 - at), r && (at -= r / z))
              : a === "mirror" && (bn = A)),
          (xn = st(0, 1, at) * z));
      }
      const Mt = vn ? { done: !1, value: s[0] } : bn.next(xn);
      b && (Mt.value = b(Mt.value));
      let { done: Pn } = Mt;
      !vn && vt !== null && (Pn = d >= 0 ? B >= G : B <= 0);
      const Qi = S === null && (D === "finished" || (D === "running" && Pn));
      return (h && h(Mt.value), Qi && At(), Mt);
    },
    k = () => {
      (v && v.stop(), (v = void 0));
    },
    J = () => {
      ((D = "idle"), k(), g(), P(), (C = N = null));
    },
    At = () => {
      ((D = "finished"), u && u(), k(), g());
    },
    bt = () => {
      if (p) return;
      v || (v = n(xt));
      const M = v.now();
      (l && l(),
        S !== null ? (C = M - S) : (!C || D === "finished") && (C = M),
        D === "finished" && P(),
        (N = C),
        (S = null),
        (D = "running"),
        v.start());
    };
  t && bt();
  const yn = {
    then(M, Dt) {
      return x.then(M, Dt);
    },
    get time() {
      return X(B);
    },
    set time(M) {
      ((M = pt(M)),
        (B = M),
        S !== null || !v || d === 0 ? (S = M) : (C = v.now() - M / d));
    },
    get duration() {
      const M = V.calculatedDuration === null ? In(V) : V.calculatedDuration;
      return X(M);
    },
    get speed() {
      return d;
    },
    set speed(M) {
      M === d || !v || ((d = M), (yn.time = X(B)));
    },
    get state() {
      return D;
    },
    play: bt,
    pause: () => {
      ((D = "paused"), (S = B));
    },
    stop: () => {
      ((p = !0), D !== "idle" && ((D = "idle"), c && c(), J()));
    },
    cancel: () => {
      (N !== null && xt(N), J());
    },
    complete: () => {
      D = "finished";
    },
    sample: (M) => ((C = 0), xt(M)),
  };
  return yn;
}
function Fa(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Ba = Fa(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ja = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  qt = 10,
  Oa = 2e4,
  Ia = (t, e) => e.type === "spring" || t === "backgroundColor" || !si(e.ease);
function Ua(t, e, { onUpdate: n, onComplete: s, ...i }) {
  if (
    !(
      Ba() &&
      ja.has(e) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let r = !1,
    a,
    l,
    c = !1;
  const u = () => {
    l = new Promise((y) => {
      a = y;
    });
  };
  u();
  let { keyframes: h, duration: f = 300, ease: d, times: p } = i;
  if (Ia(e, i)) {
    const y = ae({ ...i, repeat: 0, delay: 0 });
    let b = { done: !1, value: h[0] };
    const V = [];
    let A = 0;
    for (; !b.done && A < Oa; ) ((b = y.sample(A)), V.push(b.value), (A += qt));
    ((p = void 0), (h = V), (f = A - qt), (d = "linear"));
  }
  const g = Yo(t.owner.current, e, h, { ...i, duration: f, ease: d, times: p }),
    x = () => {
      ((c = !1), g.cancel());
    },
    P = () => {
      ((c = !0), w.update(x), a(), u());
    };
  return (
    (g.onfinish = () => {
      c || (t.set(Xo(h, i)), s && s(), P());
    }),
    {
      then(y, b) {
        return l.then(y, b);
      },
      attachTimeline(y) {
        return ((g.timeline = y), (g.onfinish = null), E);
      },
      get time() {
        return X(g.currentTime || 0);
      },
      set time(y) {
        g.currentTime = pt(y);
      },
      get speed() {
        return g.playbackRate;
      },
      set speed(y) {
        g.playbackRate = y;
      },
      get duration() {
        return X(f);
      },
      play: () => {
        r || (g.play(), Z(x));
      },
      pause: () => g.pause(),
      stop: () => {
        if (((r = !0), g.playState === "idle")) return;
        const { currentTime: y } = g;
        if (y) {
          const b = ae({ ...i, autoplay: !1 });
          t.setWithVelocity(b.sample(y - qt).value, b.sample(y).value, qt);
        }
        P();
      },
      complete: () => {
        c || g.finish();
      },
      cancel: P,
    }
  );
}
function Na({ keyframes: t, delay: e, onUpdate: n, onComplete: s }) {
  const i = () => (
    n && n(t[t.length - 1]),
    s && s(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: E,
      pause: E,
      stop: E,
      then: (o) => (o(), Promise.resolve()),
      cancel: E,
      complete: E,
    }
  );
  return e
    ? ae({ keyframes: [0, 1], duration: 0, delay: e, onComplete: i })
    : i();
}
const $a = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Wa = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  za = { type: "keyframes", duration: 0.8 },
  Ha = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Ga = (t, { keyframes: e }) =>
    e.length > 2
      ? za
      : gt.has(t)
        ? t.startsWith("scale")
          ? Wa(e[1])
          : $a
        : Ha,
  Ue = (t, e) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (it.test(e) || e === "0") &&
            !e.startsWith("url("))
        ),
  Ka = new Set(["brightness", "contrast", "saturate", "opacity"]);
function _a(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(ge) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let o = Ka.has(e) ? 1 : 0;
  return (s !== n && (o *= 100), e + "(" + o + i + ")");
}
const Ya = /([a-z-]*)\(.*?\)/g,
  Ne = {
    ...it,
    getAnimatableNone: (t) => {
      const e = t.match(Ya);
      return e ? e.map(_a).join(" ") : t;
    },
  },
  Xa = {
    ...Ns,
    color: j,
    backgroundColor: j,
    outlineColor: j,
    fill: j,
    stroke: j,
    borderColor: j,
    borderTopColor: j,
    borderRightColor: j,
    borderBottomColor: j,
    borderLeftColor: j,
    filter: Ne,
    WebkitFilter: Ne,
  },
  hn = (t) => Xa[t];
function Ai(t, e) {
  let n = hn(t);
  return (
    n !== Ne && (n = it),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const Di = (t) => /^0[^.\s]+$/.test(t);
function qa(t) {
  if (typeof t == "number") return t === 0;
  if (t !== null) return t === "none" || t === "0" || Di(t);
}
function Za(t, e, n, s) {
  const i = Ue(e, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const r = s.from !== void 0 ? s.from : t.get();
  let a;
  const l = [];
  for (let c = 0; c < o.length; c++)
    (o[c] === null && (o[c] = c === 0 ? r : o[c - 1]),
      qa(o[c]) && l.push(c),
      typeof o[c] == "string" && o[c] !== "none" && o[c] !== "0" && (a = o[c]));
  if (i && l.length && a)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      o[u] = Ai(e, a);
    }
  return o;
}
function Ja({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: s,
  staggerDirection: i,
  repeat: o,
  repeatType: r,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function fn(t, e) {
  return t[e] || t.default || t;
}
const Qa = { skipAnimations: !1 },
  dn =
    (t, e, n, s = {}) =>
    (i) => {
      const o = fn(s, t) || {},
        r = o.delay || s.delay || 0;
      let { elapsed: a = 0 } = s;
      a = a - pt(r);
      const l = Za(e, t, n, o),
        c = l[0],
        u = l[l.length - 1],
        h = Ue(t, c),
        f = Ue(t, u);
      let d = {
        keyframes: l,
        velocity: e.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -a,
        onUpdate: (p) => {
          (e.set(p), o.onUpdate && o.onUpdate(p));
        },
        onComplete: () => {
          (i(), o.onComplete && o.onComplete());
        },
      };
      if (
        (Ja(o) || (d = { ...d, ...Ga(t, d) }),
        d.duration && (d.duration = pt(d.duration)),
        d.repeatDelay && (d.repeatDelay = pt(d.repeatDelay)),
        !h || !f || _o.current || o.type === !1 || Qa.skipAnimations)
      )
        return Na(d);
      if (
        !s.isHandoff &&
        e.owner &&
        e.owner.current instanceof HTMLElement &&
        !e.owner.getProps().onUpdate
      ) {
        const p = Ua(e, t, d);
        if (p) return p;
      }
      return ae(d);
    };
function le(t) {
  return !!(I(t) && t.add);
}
const Mi = (t) => /^\-?\d*\.?\d+$/.test(t);
function pn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function mn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class gn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (pn(this.subscriptions, e), () => mn(this.subscriptions, e));
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const tl = (t) => !isNaN(parseFloat(t));
class el {
  constructor(e, n = {}) {
    ((this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (s, i = !0) => {
        ((this.prev = this.current), (this.current = s));
        const { delta: o, timestamp: r } = F;
        (this.lastUpdated !== r &&
          ((this.timeDelta = o),
          (this.lastUpdated = r),
          w.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.scheduleVelocityCheck = () => w.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: s }) => {
        s !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = e),
      (this.canTrackVelocity = tl(this.current)),
      (this.owner = n.owner));
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new gn());
    const s = this.events[e].add(n);
    return e === "change"
      ? () => {
          (s(),
            w.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    ((this.passiveEffect = e), (this.stopPassiveEffect = n));
  }
  set(e, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(e, n)
      : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    (this.set(n), (this.prev = e), (this.timeDelta = s));
  }
  jump(e) {
    (this.updateAndNotify(e),
      (this.prev = e),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Si(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Ct(t, e) {
  return new el(t, e);
}
const Ri = (t) => (e) => e.test(t),
  nl = { test: (t) => t === "auto", parse: (t) => t },
  Ei = [yt, T, H, Q, lo, ao, nl],
  Rt = (t) => Ei.find(Ri(t)),
  sl = [...Ei, j, it],
  il = (t) => sl.find(Ri(t));
function rl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ct(n));
}
function ol(t, e) {
  const n = ve(t, e);
  let {
    transitionEnd: s = {},
    transition: i = {},
    ...o
  } = n ? t.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = Vo(o[r]);
    rl(t, r, a);
  }
}
function al(t, e, n) {
  var s, i;
  const o = Object.keys(e).filter((a) => !t.hasValue(a)),
    r = o.length;
  if (r)
    for (let a = 0; a < r; a++) {
      const l = o[a],
        c = e[l];
      let u = null;
      (Array.isArray(c) && (u = c[0]),
        u === null &&
          (u =
            (i = (s = n[l]) !== null && s !== void 0 ? s : t.readValue(l)) !==
              null && i !== void 0
              ? i
              : e[l]),
        u != null &&
          (typeof u == "string" && (Mi(u) || Di(u))
            ? (u = parseFloat(u))
            : !il(u) && it.test(c) && (u = Ai(l, c)),
          t.addValue(l, Ct(u, { owner: t })),
          n[l] === void 0 && (n[l] = u),
          u !== null && t.setBaseTarget(l, u)));
    }
}
function ll(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function cl(t, e, n) {
  const s = {};
  for (const i in t) {
    const o = ll(i, e);
    if (o !== void 0) s[i] = o;
    else {
      const r = n.getValue(i);
      r && (s[i] = r.get());
    }
  }
  return s;
}
function ul({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return ((e[n] = !1), s);
}
function hl(t, e) {
  const n = t.get();
  if (Array.isArray(e)) {
    for (let s = 0; s < e.length; s++) if (e[s] !== n) return !0;
  } else return n !== e;
}
function Li(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let {
    transition: o = t.getDefaultTransition(),
    transitionEnd: r,
    ...a
  } = t.makeTargetAnimatable(e);
  const l = t.getValue("willChange");
  s && (o = s);
  const c = [],
    u = i && t.animationState && t.animationState.getState()[i];
  for (const h in a) {
    const f = t.getValue(h),
      d = a[h];
    if (!f || d === void 0 || (u && ul(u, h))) continue;
    const p = { delay: n, elapsed: 0, ...fn(o || {}, h) };
    if (window.HandoffAppearAnimations) {
      const P = t.getProps()[ks];
      if (P) {
        const v = window.HandoffAppearAnimations(P, h, f, w);
        v !== null && ((p.elapsed = v), (p.isHandoff = !0));
      }
    }
    let g = !p.isHandoff && !hl(f, d);
    if (
      (p.type === "spring" && (f.getVelocity() || p.velocity) && (g = !1),
      f.animation && (g = !1),
      g)
    )
      continue;
    f.start(dn(h, f, d, t.shouldReduceMotion && gt.has(h) ? { type: !1 } : p));
    const x = f.animation;
    (le(l) && (l.add(h), x.then(() => l.remove(h))), c.push(x));
  }
  return (
    r &&
      Promise.all(c).then(() => {
        r && ol(t, r);
      }),
    c
  );
}
function $e(t, e, n = {}) {
  const s = ve(t, e, n.custom);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(Li(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: u,
              staggerDirection: h,
            } = i;
            return fl(t, e, c + l, u, h, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, c] = a === "beforeChildren" ? [o, r] : [r, o];
    return l().then(() => c());
  } else return Promise.all([o(), r(n.delay)]);
}
function fl(t, e, n = 0, s = 0, i = 1, o) {
  const r = [],
    a = (t.variantChildren.size - 1) * s,
    l = i === 1 ? (c = 0) => c * s : (c = 0) => a - c * s;
  return (
    Array.from(t.variantChildren)
      .sort(dl)
      .forEach((c, u) => {
        (c.notify("AnimationStart", e),
          r.push(
            $e(c, e, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", e),
            ),
          ));
      }),
    Promise.all(r)
  );
}
function dl(t, e) {
  return t.sortNodePosition(e);
}
function pl(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => $e(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string") s = $e(t, e, n);
  else {
    const i = typeof e == "function" ? ve(t, e, n.custom) : e;
    s = Promise.all(Li(t, i, n));
  }
  return s.then(() => t.notify("AnimationComplete", e));
}
const ml = [...qe].reverse(),
  gl = qe.length;
function yl(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: s }) => pl(t, n, s)));
}
function vl(t) {
  let e = yl(t);
  const n = bl();
  let s = !0;
  const i = (l, c) => {
    const u = ve(t, c);
    if (u) {
      const { transition: h, transitionEnd: f, ...d } = u;
      l = { ...l, ...d, ...f };
    }
    return l;
  };
  function o(l) {
    e = l(t);
  }
  function r(l, c) {
    const u = t.getProps(),
      h = t.getVariantContext(!0) || {},
      f = [],
      d = new Set();
    let p = {},
      g = 1 / 0;
    for (let P = 0; P < gl; P++) {
      const v = ml[P],
        y = n[v],
        b = u[v] !== void 0 ? u[v] : h[v],
        V = It(b),
        A = v === c ? y.isActive : null;
      A === !1 && (g = P);
      let D = b === h[v] && b !== u[v] && V;
      if (
        (D && s && t.manuallyAnimateOnMount && (D = !1),
        (y.protectedKeys = { ...p }),
        (!y.isActive && A === null) ||
          (!b && !y.prevProp) ||
          pe(b) ||
          typeof b == "boolean")
      )
        continue;
      let C =
          xl(y.prevProp, b) ||
          (v === c && y.isActive && !D && V) ||
          (P > g && V),
        N = !1;
      const vt = Array.isArray(b) ? b : [b];
      let z = vt.reduce(i, {});
      A === !1 && (z = {});
      const { prevResolvedValues: G = {} } = y,
        B = { ...G, ...z },
        xt = (k) => {
          ((C = !0),
            d.has(k) && ((N = !0), d.delete(k)),
            (y.needsAnimating[k] = !0));
        };
      for (const k in B) {
        const J = z[k],
          At = G[k];
        if (p.hasOwnProperty(k)) continue;
        let bt = !1;
        (ie(J) && ie(At) ? (bt = !ei(J, At)) : (bt = J !== At),
          bt
            ? J !== void 0
              ? xt(k)
              : d.add(k)
            : J !== void 0 && d.has(k)
              ? xt(k)
              : (y.protectedKeys[k] = !0));
      }
      ((y.prevProp = b),
        (y.prevResolvedValues = z),
        y.isActive && (p = { ...p, ...z }),
        s && t.blockInitialAnimation && (C = !1),
        C &&
          (!D || N) &&
          f.push(
            ...vt.map((k) => ({ animation: k, options: { type: v, ...l } })),
          ));
    }
    if (d.size) {
      const P = {};
      (d.forEach((v) => {
        const y = t.getBaseTarget(v);
        y !== void 0 && (P[v] = y);
      }),
        f.push({ animation: P }));
    }
    let x = !!f.length;
    return (
      s &&
        (u.initial === !1 || u.initial === u.animate) &&
        !t.manuallyAnimateOnMount &&
        (x = !1),
      (s = !1),
      x ? e(f) : Promise.resolve()
    );
  }
  function a(l, c, u) {
    var h;
    if (n[l].isActive === c) return Promise.resolve();
    ((h = t.variantChildren) === null ||
      h === void 0 ||
      h.forEach((d) => {
        var p;
        return (p = d.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, c);
      }),
      (n[l].isActive = c));
    const f = r(u, l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function xl(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !ei(e, t) : !1;
}
function lt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function bl() {
  return {
    animate: lt(!0),
    whileInView: lt(),
    whileHover: lt(),
    whileTap: lt(),
    whileDrag: lt(),
    whileFocus: lt(),
    exit: lt(),
  };
}
class Pl extends ot {
  constructor(e) {
    (super(e), e.animationState || (e.animationState = vl(e)));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    (this.unmount(), pe(e) && (this.unmount = e.subscribe(this.node)));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let Tl = 0;
class Vl extends ot {
  constructor() {
    (super(...arguments), (this.id = Tl++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: e,
        onExitComplete: n,
        custom: s,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i) return;
    const o = this.node.animationState.setActive("exit", !e, {
      custom: s ?? this.node.getProps().custom,
    });
    n && !e && o.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const Sl = { animation: { Feature: Pl }, exit: { Feature: Vl } },
  Un = (t, e) => Math.abs(t - e);
function Cl(t, e) {
  const n = Un(t.x, e.x),
    s = Un(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class ki {
  constructor(
    e,
    n,
    { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = Me(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          d = Cl(h.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !d) return;
        const { point: p } = h,
          { timestamp: g } = F;
        this.history.push({ ...p, timestamp: g });
        const { onStart: x, onMove: P } = this.handlers;
        (f ||
          (x && x(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          P && P(this.lastMoveEvent, h));
      }),
      (this.handlePointerMove = (h, f) => {
        ((this.lastMoveEvent = h),
          (this.lastMoveEventInfo = De(f, this.transformPagePoint)),
          w.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (h, f) => {
        this.end();
        const { onEnd: d, onSessionEnd: p, resumeAnimation: g } = this.handlers;
        if (
          (this.dragSnapToOrigin && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const x = Me(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : De(f, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && d && d(h, x), p && p(h, x));
      }),
      !qs(e))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.contextWindow = i || window));
    const r = ye(e),
      a = De(r, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = F;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    (u && u(e, Me(a, this.history)),
      (this.removeListeners = nt(
        Y(this.contextWindow, "pointermove", this.handlePointerMove),
        Y(this.contextWindow, "pointerup", this.handlePointerUp),
        Y(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Z(this.updatePoint));
  }
}
function De(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Nn(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Me({ point: t }, e) {
  return {
    point: t,
    delta: Nn(t, Fi(e)),
    offset: Nn(t, wl(e)),
    velocity: Al(e, 0.1),
  };
}
function wl(t) {
  return t[0];
}
function Fi(t) {
  return t[t.length - 1];
}
function Al(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = Fi(t);
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > pt(e))); ) n--;
  if (!s) return { x: 0, y: 0 };
  const o = X(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return (r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r);
}
function U(t) {
  return t.max - t.min;
}
function We(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function $n(t, e, n, s = 0.5) {
  ((t.origin = s),
    (t.originPoint = R(e.min, e.max, t.origin)),
    (t.scale = U(n) / U(e)),
    (We(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    (t.translate = R(n.min, n.max, t.origin) - t.originPoint),
    (We(t.translate) || isNaN(t.translate)) && (t.translate = 0));
}
function jt(t, e, n, s) {
  ($n(t.x, e.x, n.x, s ? s.originX : void 0),
    $n(t.y, e.y, n.y, s ? s.originY : void 0));
}
function Wn(t, e, n) {
  ((t.min = n.min + e.min), (t.max = t.min + U(e)));
}
function Dl(t, e, n) {
  (Wn(t.x, e.x, n.x), Wn(t.y, e.y, n.y));
}
function zn(t, e, n) {
  ((t.min = e.min - n.min), (t.max = t.min + U(e)));
}
function Ot(t, e, n) {
  (zn(t.x, e.x, n.x), zn(t.y, e.y, n.y));
}
function Ml(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? R(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? R(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function Hn(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function Rl(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: Hn(t.x, n, i), y: Hn(t.y, e, s) };
}
function Gn(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return (
    e.max - e.min < t.max - t.min && ([n, s] = [s, n]),
    { min: n, max: s }
  );
}
function El(t, e) {
  return { x: Gn(t.x, e.x), y: Gn(t.y, e.y) };
}
function Ll(t, e) {
  let n = 0.5;
  const s = U(t),
    i = U(e);
  return (
    i > s
      ? (n = Nt(e.min, e.max - s, t.min))
      : s > i && (n = Nt(t.min, t.max - i, e.min)),
    st(0, 1, n)
  );
}
function kl(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const ze = 0.35;
function Fl(t = ze) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = ze),
    { x: Kn(t, "left", "right"), y: Kn(t, "top", "bottom") }
  );
}
function Kn(t, e, n) {
  return { min: _n(t, e), max: _n(t, n) };
}
function _n(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Yn = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Vt = () => ({ x: Yn(), y: Yn() }),
  Xn = () => ({ min: 0, max: 0 }),
  L = () => ({ x: Xn(), y: Xn() });
function W(t) {
  return [t("x"), t("y")];
}
function Bi({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function Bl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function jl(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function Re(t) {
  return t === void 0 || t === 1;
}
function He({ scale: t, scaleX: e, scaleY: n }) {
  return !Re(t) || !Re(e) || !Re(n);
}
function ct(t) {
  return He(t) || ji(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function ji(t) {
  return qn(t.x) || qn(t.y);
}
function qn(t) {
  return t && t !== "0%";
}
function ce(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function Zn(t, e, n, s, i) {
  return (i !== void 0 && (t = ce(t, i, s)), ce(t, n, s) + e);
}
function Ge(t, e = 0, n = 1, s, i) {
  ((t.min = Zn(t.min, e, n, s, i)), (t.max = Zn(t.max, e, n, s, i)));
}
function Oi(t, { x: e, y: n }) {
  (Ge(t.x, e.translate, e.scale, e.originPoint),
    Ge(t.y, n.translate, n.scale, n.originPoint));
}
function Ol(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (r = o.projectionDelta));
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        St(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), Oi(t, r)),
      s && ct(o.latestValues) && St(t, o.latestValues));
  }
  ((e.x = Jn(e.x)), (e.y = Jn(e.y)));
}
function Jn(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999
    ? t
    : 1;
}
function tt(t, e) {
  ((t.min = t.min + e), (t.max = t.max + e));
}
function Qn(t, e, [n, s, i]) {
  const o = e[i] !== void 0 ? e[i] : 0.5,
    r = R(t.min, t.max, o);
  Ge(t, e[n], e[s], r, e.scale);
}
const Il = ["x", "scaleX", "originX"],
  Ul = ["y", "scaleY", "originY"];
function St(t, e) {
  (Qn(t.x, e, Il), Qn(t.y, e, Ul));
}
function Ii(t, e) {
  return Bi(jl(t.getBoundingClientRect(), e));
}
function Nl(t, e, n) {
  const s = Ii(t, n),
    { scroll: i } = e;
  return (i && (tt(s.x, i.offset.x), tt(s.y, i.offset.y)), s);
}
const Ui = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  $l = new WeakMap();
class Wl {
  constructor(e) {
    ((this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = L()),
      (this.visualElement = e));
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const i = (u) => {
        const { dragSnapToOrigin: h } = this.getProps();
        (h ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ye(u, "page").point));
      },
      o = (u, h) => {
        const { drag: f, dragPropagation: d, onDragStart: p } = this.getProps();
        if (
          f &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Js(f)),
          !this.openGlobalLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          W((x) => {
            let P = this.getAxisMotionValue(x).get() || 0;
            if (H.test(P)) {
              const { projection: v } = this.visualElement;
              if (v && v.layout) {
                const y = v.layout.layoutBox[x];
                y && (P = U(y) * (parseFloat(P) / 100));
              }
            }
            this.originPoint[x] = P;
          }),
          p && w.update(() => p(u, h), !1, !0));
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      r = (u, h) => {
        const {
          dragPropagation: f,
          dragDirectionLock: d,
          onDirectionLock: p,
          onDrag: g,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: x } = h;
        if (d && this.currentDirection === null) {
          ((this.currentDirection = zl(x)),
            this.currentDirection !== null && p && p(this.currentDirection));
          return;
        }
        (this.updateAxis("x", h.point, x),
          this.updateAxis("y", h.point, x),
          this.visualElement.render(),
          g && g(u, h));
      },
      a = (u, h) => this.stop(u, h),
      l = () =>
        W((u) => {
          var h;
          return (
            this.getAnimationState(u) === "paused" &&
            ((h = this.getAxisMotionValue(u).animation) === null || h === void 0
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new ki(
      e,
      {
        onSessionStart: i,
        onStart: o,
        onMove: r,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: Ui(this.visualElement),
      },
    );
  }
  stop(e, n) {
    const s = this.isDragging;
    if ((this.cancel(), !s)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && w.update(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    (e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: s } = this.getProps();
    (!s &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Zt(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    (this.constraints &&
      this.constraints[e] &&
      (r = Ml(r, this.constraints[e], this.elastic[e])),
      o.set(r));
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: s } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
      o = this.constraints;
    (n && Pt(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = Rl(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = Fl(s)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        W((r) => {
          this.getAxisMotionValue(r) &&
            (this.constraints[r] = kl(i.layoutBox[r], this.constraints[r]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Pt(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = Nl(s, i.root, this.visualElement.getTransformPagePoint());
    let r = El(i.layout.layoutBox, o);
    if (n) {
      const a = n(Bl(r));
      ((this.hasMutatedConstraints = !!a), a && (r = Bi(a)));
    }
    return r;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = W((u) => {
        if (!Zt(u, n, this.currentDirection)) return;
        let h = (l && l[u]) || {};
        r && (h = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          d = i ? 40 : 1e7,
          p = {
            type: "inertia",
            velocity: s ? e[u] : 0,
            bounceStiffness: f,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...h,
          };
        return this.startAxisValueAnimation(u, p);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return s.start(dn(e, s, 0, n));
  }
  stopAnimation() {
    W((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    W((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(e) {
    const n = "_drag" + e.toUpperCase(),
      s = this.visualElement.getProps(),
      i = s[n];
    return (
      i ||
      this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    W((n) => {
      const { drag: s } = this.getProps();
      if (!Zt(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - R(r, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!Pt(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    W((r) => {
      const a = this.getAxisMotionValue(r);
      if (a) {
        const l = a.get();
        i[r] = Ll({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      W((r) => {
        if (!Zt(r, e, null)) return;
        const a = this.getAxisMotionValue(r),
          { min: l, max: c } = this.constraints[r];
        a.set(R(l, c, i[r]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    $l.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = Y(e, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      s = () => {
        const { dragConstraints: l } = this.getProps();
        Pt(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", s);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      s());
    const r = _(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (W((u) => {
              const h = this.getAxisMotionValue(u);
              h &&
                ((this.originPoint[u] += l[u].translate),
                h.set(h.get() + l[u].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (r(), n(), o(), a && a());
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = ze,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a,
    };
  }
}
function Zt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function zl(t, e = 10) {
  let n = null;
  return (Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n);
}
class Hl extends ot {
  constructor(e) {
    (super(e),
      (this.removeGroupControls = E),
      (this.removeListeners = E),
      (this.controls = new Wl(e)));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    (e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || E));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const ts = (t) => (e, n) => {
  t && w.update(() => t(e, n));
};
class Gl extends ot {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = E));
  }
  onPointerDown(e) {
    this.session = new ki(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ui(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: s,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: ts(e),
      onStart: ts(n),
      onMove: s,
      onEnd: (o, r) => {
        (delete this.session, i && w.update(() => i(o, r)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Y(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
function Kl() {
  const t = m.useContext(fe);
  if (t === null) return [!0, null];
  const { isPresent: e, onExitComplete: n, register: s } = t,
    i = m.useId();
  return (m.useEffect(() => s(i), []), !e && n ? [!1, () => n && n(i)] : [!0]);
}
const te = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function es(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const Et = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (T.test(t)) t = parseFloat(t);
        else return t;
      const n = es(t, e.target.x),
        s = es(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  _l = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = it.parse(t);
      if (i.length > 5) return s;
      const o = it.createTransformer(t),
        r = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      ((i[0 + r] /= a), (i[1 + r] /= l));
      const c = R(a, l, 0.5);
      return (
        typeof i[2 + r] == "number" && (i[2 + r] /= c),
        typeof i[3 + r] == "number" && (i[3 + r] /= c),
        o(i)
      );
    },
  };
class Yl extends ws.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
        layoutId: i,
      } = this.props,
      { projection: o } = e;
    (to(Xl),
      o &&
        (n.group && n.group.add(o),
        s && s.register && i && s.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (te.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: s,
        drag: i,
        isPresent: o,
      } = this.props,
      r = s.projection;
    return (
      r &&
        ((r.isPresent = o),
        i || e.layoutDependency !== n || n === void 0
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== o &&
          (o
            ? r.promote()
            : r.relegate() ||
              w.postRender(() => {
                const a = r.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      queueMicrotask(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
      } = this.props,
      { projection: i } = e;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Ni(t) {
  const [e, n] = Kl(),
    s = m.useContext(Je);
  return ws.createElement(Yl, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: m.useContext(Bs),
    isPresent: e,
    safeToRemove: n,
  });
}
const Xl = {
    borderRadius: {
      ...Et,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Et,
    borderTopRightRadius: Et,
    borderBottomLeftRadius: Et,
    borderBottomRightRadius: Et,
    boxShadow: _l,
  },
  $i = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  ql = $i.length,
  ns = (t) => (typeof t == "string" ? parseFloat(t) : t),
  ss = (t) => typeof t == "number" || T.test(t);
function Zl(t, e, n, s, i, o) {
  i
    ? ((t.opacity = R(0, n.opacity !== void 0 ? n.opacity : 1, Jl(s))),
      (t.opacityExit = R(e.opacity !== void 0 ? e.opacity : 1, 0, Ql(s))))
    : o &&
      (t.opacity = R(
        e.opacity !== void 0 ? e.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        s,
      ));
  for (let r = 0; r < ql; r++) {
    const a = `border${$i[r]}Radius`;
    let l = is(e, a),
      c = is(n, a);
    if (l === void 0 && c === void 0) continue;
    (l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || ss(l) === ss(c)
        ? ((t[a] = Math.max(R(ns(l), ns(c), s), 0)),
          (H.test(c) || H.test(l)) && (t[a] += "%"))
        : (t[a] = c));
  }
  (e.rotate || n.rotate) && (t.rotate = R(e.rotate || 0, n.rotate || 0, s));
}
function is(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Jl = Wi(0, 0.5, ui),
  Ql = Wi(0.5, 0.95, E);
function Wi(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(Nt(t, e, s)));
}
function rs(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function $(t, e) {
  (rs(t.x, e.x), rs(t.y, e.y));
}
function os(t, e, n, s, i) {
  return (
    (t -= e),
    (t = ce(t, 1 / n, s)),
    i !== void 0 && (t = ce(t, 1 / i, s)),
    t
  );
}
function tc(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    (H.test(e) && ((e = parseFloat(e)), (e = R(r.min, r.max, e / 100) - r.min)),
    typeof e != "number")
  )
    return;
  let a = R(o.min, o.max, s);
  (t === o && (a -= e),
    (t.min = os(t.min, e, n, a, i)),
    (t.max = os(t.max, e, n, a, i)));
}
function as(t, e, [n, s, i], o, r) {
  tc(t, e[n], e[s], e[i], e.scale, o, r);
}
const ec = ["x", "scaleX", "originX"],
  nc = ["y", "scaleY", "originY"];
function ls(t, e, n, s) {
  (as(t.x, e, ec, n ? n.x : void 0, s ? s.x : void 0),
    as(t.y, e, nc, n ? n.y : void 0, s ? s.y : void 0));
}
function cs(t) {
  return t.translate === 0 && t.scale === 1;
}
function zi(t) {
  return cs(t.x) && cs(t.y);
}
function sc(t, e) {
  return (
    t.x.min === e.x.min &&
    t.x.max === e.x.max &&
    t.y.min === e.y.min &&
    t.y.max === e.y.max
  );
}
function Hi(t, e) {
  return (
    Math.round(t.x.min) === Math.round(e.x.min) &&
    Math.round(t.x.max) === Math.round(e.x.max) &&
    Math.round(t.y.min) === Math.round(e.y.min) &&
    Math.round(t.y.max) === Math.round(e.y.max)
  );
}
function us(t) {
  return U(t.x) / U(t.y);
}
class ic {
  constructor() {
    this.members = [];
  }
  add(e) {
    (pn(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if (
      (mn(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      (s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        n && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      (n.onExitComplete && n.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function hs(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y;
  if (
    ((i || o) && (s = `translate3d(${i}px, ${o}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: c, rotateY: u } = n;
    (l && (s += `rotate(${l}deg) `),
      c && (s += `rotateX(${c}deg) `),
      u && (s += `rotateY(${u}deg) `));
  }
  const r = t.x.scale * e.x,
    a = t.y.scale * e.y;
  return ((r !== 1 || a !== 1) && (s += `scale(${r}, ${a})`), s || "none");
}
const rc = (t, e) => t.depth - e.depth;
class oc {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(e) {
    (pn(this.children, e), (this.isDirty = !0));
  }
  remove(e) {
    (mn(this.children, e), (this.isDirty = !0));
  }
  forEach(e) {
    (this.isDirty && this.children.sort(rc),
      (this.isDirty = !1),
      this.children.forEach(e));
  }
}
function ac(t, e) {
  const n = performance.now(),
    s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (Z(s), t(o - e));
    };
  return (w.read(s, !0), () => Z(s));
}
function lc(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function cc(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function uc(t, e, n) {
  const s = I(t) ? t : Ct(t);
  return (s.start(dn("", s, e, n)), s.animation);
}
const fs = ["", "X", "Y", "Z"],
  hc = { visibility: "hidden" },
  ds = 1e3;
let fc = 0;
const ut = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Gi({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, a = e?.()) {
      ((this.id = fc++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            (ut.totalNodes =
              ut.resolvedTargetDeltas =
              ut.recalculatedProjection =
                0),
            this.nodes.forEach(mc),
            this.nodes.forEach(bc),
            this.nodes.forEach(Pc),
            this.nodes.forEach(gc),
            lc(ut));
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new oc());
    }
    addEventListener(r, a) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new gn()),
        this.eventHandlers.get(r).add(a)
      );
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = cc(r)), (this.instance = r));
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        t)
      ) {
        let h;
        const f = () => (this.root.updateBlockedByResize = !1);
        t(r, () => {
          ((this.root.updateBlockedByResize = !0),
            h && h(),
            (h = ac(f, 250)),
            te.hasAnimatedSinceResize &&
              ((te.hasAnimatedSinceResize = !1), this.nodes.forEach(ms)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: h,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: d,
              layout: p,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const g =
                  this.options.transition || u.getDefaultTransition() || wc,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: P } =
                  u.getProps(),
                v = !this.targetLayout || !Hi(this.targetLayout, p) || d,
                y = !f && d;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (v || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, y));
                const b = { ...fn(g, "layout"), onPlay: x, onComplete: P };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((b.delay = 0), (b.type = !1)),
                  this.startAnimation(b));
              } else
                (f || ms(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = p;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const r = this.getStack();
      (r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Z(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Tc),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        ((h.shouldResetTransform = !0),
          h.updateScroll("snapshot"),
          h.options.layoutRoot && h.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(ps));
        return;
      }
      (this.isUpdating || this.nodes.forEach(vc),
        (this.isUpdating = !1),
        this.nodes.forEach(xc),
        this.nodes.forEach(dc),
        this.nodes.forEach(pc),
        this.clearAllSnapshots());
      const a = performance.now();
      ((F.delta = st(0, 1e3 / 60, a - F.timestamp)),
        (F.timestamp = a),
        (F.isProcessing = !0),
        be.update.process(F),
        be.preRender.process(F),
        be.render.process(F),
        (F.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(yc), this.sharedNodes.forEach(Vc));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        w.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      w.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const r = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = L()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          r ? r.layoutBox : void 0,
        );
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      (this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === r &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: r,
            isRoot: s(this.instance),
            offset: n(this.instance),
          }));
    }
    resetTransform() {
      if (!i) return;
      const r = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !zi(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      r &&
        (a || ct(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        r && (l = this.removeTransform(l)),
        Ac(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r) return L();
      const a = r.measureViewportBox(),
        { scroll: l } = this.root;
      return (l && (tt(a.x, l.offset.x), tt(a.y, l.offset.y)), a);
    }
    removeElementScroll(r) {
      const a = L();
      $(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l],
          { scroll: u, options: h } = c;
        if (c !== this.root && u && h.layoutScroll) {
          if (u.isRoot) {
            $(a, r);
            const { scroll: f } = this.root;
            f && (tt(a.x, -f.offset.x), tt(a.y, -f.offset.y));
          }
          (tt(a.x, u.offset.x), tt(a.y, u.offset.y));
        }
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = L();
      $(l, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        (!a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          St(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          ct(u.latestValues) && St(l, u.latestValues));
      }
      return (ct(this.latestValues) && St(l, this.latestValues), l);
    }
    removeTransform(r) {
      const a = L();
      $(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !ct(c.latestValues)) continue;
        He(c.latestValues) && c.updateSnapshot();
        const u = L(),
          h = c.measurePageBox();
        ($(u, h),
          ls(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u));
      }
      return (ct(this.latestValues) && ls(a, this.latestValues), a);
    }
    setTargetDelta(r) {
      ((this.targetDelta = r),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== F.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          r ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: h, layoutId: f } = this.options;
      if (!(!this.layout || !(h || f))) {
        if (
          ((this.resolvedRelativeTargetAt = F.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = L()),
              (this.relativeTargetOrigin = L()),
              Ot(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                d.layout.layoutBox,
              ),
              $(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = L()), (this.targetWithTransforms = L())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Dl(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : $(this.target, this.layout.layoutBox),
                  Oi(this.target, this.targetDelta))
                : $(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const d = this.getClosestProjectingParent();
            d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = d),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = L()),
                (this.relativeTargetOrigin = L()),
                Ot(this.relativeTargetOrigin, this.target, d.target),
                $(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ut.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          He(this.parent.latestValues) ||
          ji(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var r;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((r = this.parent) === null || r === void 0) &&
            r.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === F.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: u, layoutId: h } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || h))
      )
        return;
      $(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        d = this.treeScale.y;
      (Ol(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox));
      const { target: p } = a;
      if (!p) {
        this.projectionTransform &&
          ((this.projectionDelta = Vt()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Vt()),
        (this.projectionDeltaWithTransform = Vt()));
      const g = this.projectionTransform;
      (jt(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.projectionTransform = hs(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== f ||
          this.treeScale.y !== d) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)),
        ut.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), r)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        h = Vt();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = L(),
        d = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        g = d !== p,
        x = this.getStack(),
        P = !x || x.members.length <= 1,
        v = !!(g && !P && this.options.crossfade === !0 && !this.path.some(Cc));
      this.animationProgress = 0;
      let y;
      ((this.mixTargetDelta = (b) => {
        const V = b / 1e3;
        (gs(h.x, r.x, V),
          gs(h.y, r.y, V),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ot(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Sc(this.relativeTarget, this.relativeTargetOrigin, f, V),
            y && sc(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = L()),
            $(y, this.relativeTarget)),
          g &&
            ((this.animationValues = u), Zl(u, c, this.latestValues, V, v, P)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = V));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(r) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Z(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = w.update(() => {
          ((te.hasAnimatedSinceResize = !0),
            (this.currentAnimation = uc(0, ds, {
              ...r,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a));
              },
              onComplete: () => {
                (r.onComplete && r.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      (r && r.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(ds),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = r;
      if (!(!a || !l || !c)) {
        if (
          this !== r &&
          this.layout &&
          c &&
          Ki(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || L();
          const h = U(this.layout.layoutBox.x);
          ((l.x.min = r.target.x.min), (l.x.max = l.x.min + h));
          const f = U(this.layout.layoutBox.y);
          ((l.y.min = r.target.y.min), (l.y.max = l.y.min + f));
        }
        ($(a, l),
          St(a, u),
          jt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u));
      }
    }
    registerSharedNode(r, a) {
      (this.sharedNodes.has(r) || this.sharedNodes.set(r, new ic()),
        this.sharedNodes.get(r).add(a));
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a
        ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a
        ? (r = this.getStack()) === null || r === void 0
          ? void 0
          : r.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      (c && c.promote(this, l),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = !1;
      const { latestValues: l } = r;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const c = {};
      for (let u = 0; u < fs.length; u++) {
        const h = "rotate" + fs[u];
        l[h] && ((c[h] = l[h]), r.setStaticValue(h, 0));
      }
      r.render();
      for (const u in c) r.setStaticValue(u, c[u]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return hc;
      const c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Qt(r?.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = Qt(r?.pointerEvents) || "")),
          this.hasProjected &&
            !ct(this.latestValues) &&
            ((g.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const f = h.animationValues || h.latestValues;
      (this.applyTransformsToTarget(),
        (c.transform = hs(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        u && (c.transform = u(f, c.transform)));
      const { x: d, y: p } = this.projectionDelta;
      ((c.transformOrigin = `${d.origin * 100}% ${p.origin * 100}% 0`),
        h.animationValues
          ? (c.opacity =
              h === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (c.opacity =
              h === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0));
      for (const g in ne) {
        if (f[g] === void 0) continue;
        const { correct: x, applyTo: P } = ne[g],
          v = c.transform === "none" ? f[g] : x(f[g], h);
        if (P) {
          const y = P.length;
          for (let b = 0; b < y; b++) c[P[b]] = v;
        } else c[g] = v;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = h === this ? Qt(r?.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(ps),
        this.root.sharedNodes.clear());
    }
  };
}
function dc(t) {
  t.updateLayout();
}
function pc(t) {
  var e;
  const n =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout,
      { animationType: o } = t.options,
      r = n.source !== t.layout.source;
    o === "size"
      ? W((h) => {
          const f = r ? n.measuredBox[h] : n.layoutBox[h],
            d = U(f);
          ((f.min = s[h].min), (f.max = f.min + d));
        })
      : Ki(o, n.layoutBox, s) &&
        W((h) => {
          const f = r ? n.measuredBox[h] : n.layoutBox[h],
            d = U(s[h]);
          ((f.max = f.min + d),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[h].max = t.relativeTarget[h].min + d)));
        });
    const a = Vt();
    jt(a, s, n.layoutBox);
    const l = Vt();
    r ? jt(l, t.applyTransform(i, !0), n.measuredBox) : jt(l, s, n.layoutBox);
    const c = !zi(a);
    let u = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h;
        if (f && d) {
          const p = L();
          Ot(p, n.layoutBox, f.layoutBox);
          const g = L();
          (Ot(g, s, d.layoutBox),
            Hi(p, g) || (u = !0),
            h.options.layoutRoot &&
              ((t.relativeTarget = g),
              (t.relativeTargetOrigin = p),
              (t.relativeParent = h)));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function mc(t) {
  (ut.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty)));
}
function gc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function yc(t) {
  t.clearSnapshot();
}
function ps(t) {
  t.clearMeasurements();
}
function vc(t) {
  t.isLayoutDirty = !1;
}
function xc(t) {
  const { visualElement: e } = t.options;
  (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform());
}
function ms(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function bc(t) {
  t.resolveTargetDelta();
}
function Pc(t) {
  t.calcProjection();
}
function Tc(t) {
  t.resetRotation();
}
function Vc(t) {
  t.removeLeadSnapshot();
}
function gs(t, e, n) {
  ((t.translate = R(e.translate, 0, n)),
    (t.scale = R(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function ys(t, e, n, s) {
  ((t.min = R(e.min, n.min, s)), (t.max = R(e.max, n.max, s)));
}
function Sc(t, e, n, s) {
  (ys(t.x, e.x, n.x, s), ys(t.y, e.y, n.y, s));
}
function Cc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const wc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  vs = (t) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t),
  xs = vs("applewebkit/") && !vs("chrome/") ? Math.round : E;
function bs(t) {
  ((t.min = xs(t.min)), (t.max = xs(t.max)));
}
function Ac(t) {
  (bs(t.x), bs(t.y));
}
function Ki(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !We(us(e), us(n), 0.2))
  );
}
const Dc = Gi({
    attachResizeListener: (t, e) => _(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ee = { current: void 0 },
  _i = Gi({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Ee.current) {
        const t = new Dc({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (Ee.current = t));
      }
      return Ee.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  Mc = {
    pan: { Feature: Gl },
    drag: { Feature: Hl, ProjectionNode: _i, MeasureLayout: Ni },
  },
  Rc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Ec(t) {
  const e = Rc.exec(t);
  if (!e) return [,];
  const [, n, s] = e;
  return [n, s];
}
function Ke(t, e, n = 1) {
  const [s, i] = Ec(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Mi(r) ? parseFloat(r) : r;
  } else return Be(i) ? Ke(i, e, n + 1) : i;
}
function Lc(t, { ...e }, n) {
  const s = t.current;
  if (!(s instanceof Element)) return { target: e, transitionEnd: n };
  (n && (n = { ...n }),
    t.values.forEach((i) => {
      const o = i.get();
      if (!Be(o)) return;
      const r = Ke(o, s);
      r && i.set(r);
    }));
  for (const i in e) {
    const o = e[i];
    if (!Be(o)) continue;
    const r = Ke(o, s);
    r && ((e[i] = r), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: e, transitionEnd: n };
}
const kc = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Yi = (t) => kc.has(t),
  Fc = (t) => Object.keys(t).some(Yi),
  Ps = (t) => t === yt || t === T,
  Ts = (t, e) => parseFloat(t.split(", ")[e]),
  Vs =
    (t, e) =>
    (n, { transform: s }) => {
      if (s === "none" || !s) return 0;
      const i = s.match(/^matrix3d\((.+)\)$/);
      if (i) return Ts(i[1], e);
      {
        const o = s.match(/^matrix\((.+)\)$/);
        return o ? Ts(o[1], t) : 0;
      }
    },
  Bc = new Set(["x", "y", "z"]),
  jc = Wt.filter((t) => !Bc.has(t));
function Oc(t) {
  const e = [];
  return (
    jc.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 &&
        (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
    }),
    e.length && t.render(),
    e
  );
}
const wt = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: Vs(4, 13),
  y: Vs(5, 14),
};
wt.translateX = wt.x;
wt.translateY = wt.y;
const Ic = (t, e, n) => {
    const s = e.measureViewportBox(),
      i = e.current,
      o = getComputedStyle(i),
      { display: r } = o,
      a = {};
    (r === "none" && e.setStaticValue("display", t.display || "block"),
      n.forEach((c) => {
        a[c] = wt[c](s, o);
      }),
      e.render());
    const l = e.measureViewportBox();
    return (
      n.forEach((c) => {
        const u = e.getValue(c);
        (u && u.jump(a[c]), (t[c] = wt[c](l, o)));
      }),
      t
    );
  },
  Uc = (t, e, n = {}, s = {}) => {
    ((e = { ...e }), (s = { ...s }));
    const i = Object.keys(e).filter(Yi);
    let o = [],
      r = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const c = t.getValue(l);
        if (!t.hasValue(l)) return;
        let u = n[l],
          h = Rt(u);
        const f = e[l];
        let d;
        if (ie(f)) {
          const p = f.length,
            g = f[0] === null ? 1 : 0;
          ((u = f[g]), (h = Rt(u)));
          for (let x = g; x < p && f[x] !== null; x++)
            d ? an(Rt(f[x]) === d) : (d = Rt(f[x]));
        } else d = Rt(f);
        if (h !== d)
          if (Ps(h) && Ps(d)) {
            const p = c.get();
            (typeof p == "string" && c.set(parseFloat(p)),
              typeof f == "string"
                ? (e[l] = parseFloat(f))
                : Array.isArray(f) && d === T && (e[l] = f.map(parseFloat)));
          } else
            h?.transform && d?.transform && (u === 0 || f === 0)
              ? u === 0
                ? c.set(d.transform(u))
                : (e[l] = h.transform(f))
              : (r || ((o = Oc(t)), (r = !0)),
                a.push(l),
                (s[l] = s[l] !== void 0 ? s[l] : e[l]),
                c.jump(f));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        c = Ic(e, t, a);
      return (
        o.length &&
          o.forEach(([u, h]) => {
            t.getValue(u).set(h);
          }),
        t.render(),
        de && l !== null && window.scrollTo({ top: l }),
        { target: c, transitionEnd: s }
      );
    } else return { target: e, transitionEnd: s };
  };
function Nc(t, e, n, s) {
  return Fc(e) ? Uc(t, e, n, s) : { target: e, transitionEnd: s };
}
const $c = (t, e, n, s) => {
    const i = Lc(t, e, s);
    return ((e = i.target), (s = i.transitionEnd), Nc(t, e, n, s));
  },
  _e = { current: null },
  Xi = { current: !1 };
function Wc() {
  if (((Xi.current = !0), !!de))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (_e.current = t.matches);
      (t.addListener(e), e());
    } else _e.current = !1;
}
function zc(t, e, n) {
  const { willChange: s } = e;
  for (const i in e) {
    const o = e[i],
      r = n[i];
    if (I(o)) (t.addValue(i, o), le(s) && s.add(i));
    else if (I(r)) (t.addValue(i, Ct(o, { owner: t })), le(s) && s.remove(i));
    else if (r !== o)
      if (t.hasValue(i)) {
        const a = t.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = t.getStaticValue(i);
        t.addValue(i, Ct(a !== void 0 ? a : o, { owner: t }));
      }
  }
  for (const i in n) e[i] === void 0 && t.removeValue(i);
  return e;
}
const Ss = new WeakMap(),
  qi = Object.keys(Ut),
  Hc = qi.length,
  Cs = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Gc = Ze.length;
class Kc {
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      visualState: o,
    },
    r = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => w.render(this.render, !1, !0)));
    const { latestValues: a, renderState: l } = o;
    ((this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = r),
      (this.isControllingVariants = me(n)),
      (this.isVariantNode = Fs(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current)));
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(n, {});
    for (const h in u) {
      const f = u[h];
      a[h] !== void 0 && I(f) && (f.set(a[h], !1), le(c) && c.add(h));
    }
  }
  scrapeMotionValuesFromProps(e, n) {
    return {};
  }
  mount(e) {
    ((this.current = e),
      Ss.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      Xi.current || Wc(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : _e.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Ss.delete(this.current),
      this.projection && this.projection.unmount(),
      Z(this.notifyUpdate),
      Z(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) this.features[e].unmount();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const s = gt.has(e),
      i = n.on("change", (r) => {
        ((this.latestValues[e] = r),
          this.props.onUpdate && w.update(this.notifyUpdate, !1, !0),
          s && this.projection && (this.projection.isTransformDirty = !0));
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      (i(), o());
    });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...n }, s, i, o) {
    let r, a;
    for (let l = 0; l < Hc; l++) {
      const c = qi[l],
        {
          isEnabled: u,
          Feature: h,
          ProjectionNode: f,
          MeasureLayout: d,
        } = Ut[c];
      (f && (r = f),
        u(n) &&
          (!this.features[c] && h && (this.features[c] = new h(this)),
          d && (a = d)));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      r
    ) {
      this.projection = new r(
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: l,
        layout: c,
        drag: u,
        dragConstraints: h,
        layoutScroll: f,
        layoutRoot: d,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || (h && Pt(h)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: o,
        layoutScroll: f,
        layoutRoot: d,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const e in this.features) {
      const n = this.features[e];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : L();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, this.props, n);
  }
  update(e, n) {
    ((e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let s = 0; s < Cs.length; s++) {
      const i = Cs[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = e["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = zc(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const s = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (s.initial = this.props.initial),
        s
      );
    }
    const n = {};
    for (let s = 0; s < Gc; s++) {
      const i = Ze[s],
        o = this.props[i];
      (It(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    (n !== this.values.get(e) &&
      (this.removeValue(e), this.bindToMotionValue(e, n)),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    (n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState));
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = Ct(n, { owner: this })), this.addValue(e, s)),
      s
    );
  }
  readValue(e) {
    var n;
    return this.latestValues[e] !== void 0 || !this.current
      ? this.latestValues[e]
      : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, e, this.options);
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: s } = this.props,
      i =
        typeof s == "string" || typeof s == "object"
          ? (n = on(this.props, s)) === null || n === void 0
            ? void 0
            : n[e]
          : void 0;
    if (s && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !I(o)
      ? o
      : this.initialValues[e] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return (
      this.events[e] || (this.events[e] = new gn()),
      this.events[e].add(n)
    );
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class Zi extends Kc {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    (delete n[e], delete s[e]);
  }
  makeTargetAnimatableFromInstance(
    { transition: e, transitionEnd: n, ...s },
    { transformValues: i },
    o,
  ) {
    let r = cl(s, e || {}, this);
    if ((i && (n && (n = i(n)), s && (s = i(s)), r && (r = i(r))), o)) {
      al(this, s, r);
      const a = $c(this, s, r, n);
      ((n = a.transitionEnd), (s = a.target));
    }
    return { transition: e, transitionEnd: n, ...s };
  }
}
function _c(t) {
  return window.getComputedStyle(t);
}
class Yc extends Zi {
  constructor() {
    (super(...arguments), (this.type = "html"));
  }
  readValueFromInstance(e, n) {
    if (gt.has(n)) {
      const s = hn(n);
      return (s && s.default) || 0;
    } else {
      const s = _c(e),
        i = (Is(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Ii(e, n);
  }
  build(e, n, s, i) {
    tn(e, n, s, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n) {
    return rn(e, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    I(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(e, n, s, i) {
    Hs(e, n, s, i);
  }
}
class Xc extends Zi {
  constructor() {
    (super(...arguments), (this.type = "svg"), (this.isSVGTag = !1));
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (gt.has(n)) {
      const s = hn(n);
      return (s && s.default) || 0;
    }
    return ((n = Gs.has(n) ? n : Xe(n)), e.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return L();
  }
  scrapeMotionValuesFromProps(e, n) {
    return _s(e, n);
  }
  build(e, n, s, i) {
    nn(e, n, s, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    Ks(e, n, s, i);
  }
  mount(e) {
    ((this.isSVGTag = sn(e.tagName)), super.mount(e));
  }
}
const qc = (t, e) =>
    Qe(t)
      ? new Xc(e, { enableHardwareAcceleration: !1 })
      : new Yc(e, { enableHardwareAcceleration: !0 }),
  Zc = { layout: { ProjectionNode: _i, MeasureLayout: Ni } },
  Jc = { ...Sl, ...Ho, ...Mc, ...Zc },
  hu = Jr((t, e) => Eo(t, e, Jc, qc));
function Ji() {
  const t = m.useRef(!1);
  return (
    Ye(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      [],
    ),
    t
  );
}
function Qc() {
  const t = Ji(),
    [e, n] = m.useState(0),
    s = m.useCallback(() => {
      t.current && n(e + 1);
    }, [e]);
  return [m.useCallback(() => w.postRender(s), [s]), e];
}
class tu extends m.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      ((s.height = n.offsetHeight || 0),
        (s.width = n.offsetWidth || 0),
        (s.top = n.offsetTop),
        (s.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function eu({ children: t, isPresent: e }) {
  const n = m.useId(),
    s = m.useRef(null),
    i = m.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    m.useInsertionEffect(() => {
      const { width: o, height: r, top: a, left: l } = i.current;
      if (e || !s.current || !o || !r) return;
      s.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [e]),
    m.createElement(
      tu,
      { isPresent: e, childRef: s, sizeRef: i },
      m.cloneElement(t, { ref: s }),
    )
  );
}
const Le = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: o,
  mode: r,
}) => {
  const a = Ys(nu),
    l = m.useId(),
    c = m.useMemo(
      () => ({
        id: l,
        initial: e,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (const h of a.values()) if (!h) return;
          s && s();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      o ? void 0 : [n],
    );
  return (
    m.useMemo(() => {
      a.forEach((u, h) => a.set(h, !1));
    }, [n]),
    m.useEffect(() => {
      !n && !a.size && s && s();
    }, [n]),
    r === "popLayout" && (t = m.createElement(eu, { isPresent: n }, t)),
    m.createElement(fe.Provider, { value: c }, t)
  );
};
function nu() {
  return new Map();
}
function su(t) {
  return m.useEffect(() => () => t(), []);
}
const ht = (t) => t.key || "";
function iu(t, e) {
  t.forEach((n) => {
    const s = ht(n);
    e.set(s, n);
  });
}
function ru(t) {
  const e = [];
  return (
    m.Children.forEach(t, (n) => {
      m.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const fu = ({
  children: t,
  custom: e,
  initial: n = !0,
  onExitComplete: s,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: r = "sync",
}) => {
  const a = m.useContext(Je).forceRender || Qc()[0],
    l = Ji(),
    c = ru(t);
  let u = c;
  const h = m.useRef(new Map()).current,
    f = m.useRef(u),
    d = m.useRef(new Map()).current,
    p = m.useRef(!0);
  if (
    (Ye(() => {
      ((p.current = !1), iu(c, d), (f.current = u));
    }),
    su(() => {
      ((p.current = !0), d.clear(), h.clear());
    }),
    p.current)
  )
    return m.createElement(
      m.Fragment,
      null,
      u.map((v) =>
        m.createElement(
          Le,
          {
            key: ht(v),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: r,
          },
          v,
        ),
      ),
    );
  u = [...u];
  const g = f.current.map(ht),
    x = c.map(ht),
    P = g.length;
  for (let v = 0; v < P; v++) {
    const y = g[v];
    x.indexOf(y) === -1 && !h.has(y) && h.set(y, void 0);
  }
  return (
    r === "wait" && h.size && (u = []),
    h.forEach((v, y) => {
      if (x.indexOf(y) !== -1) return;
      const b = d.get(y);
      if (!b) return;
      const V = g.indexOf(y);
      let A = v;
      if (!A) {
        const D = () => {
          h.delete(y);
          const S = Array.from(d.keys()).filter((C) => !x.includes(C));
          if (
            (S.forEach((C) => d.delete(C)),
            (f.current = c.filter((C) => {
              const N = ht(C);
              return N === y || S.includes(N);
            })),
            !h.size)
          ) {
            if (l.current === !1) return;
            (a(), s && s());
          }
        };
        ((A = m.createElement(
          Le,
          {
            key: ht(b),
            isPresent: !1,
            onExitComplete: D,
            custom: e,
            presenceAffectsLayout: o,
            mode: r,
          },
          b,
        )),
          h.set(y, A));
      }
      u.splice(V, 0, A);
    }),
    (u = u.map((v) => {
      const y = v.key;
      return h.has(y)
        ? v
        : m.createElement(
            Le,
            { key: ht(v), isPresent: !0, presenceAffectsLayout: o, mode: r },
            v,
          );
    })),
    m.createElement(
      m.Fragment,
      null,
      h.size ? u : u.map((v) => m.cloneElement(v)),
    )
  );
};
export { fu as A, lu as O, cu as V, hu as m };
