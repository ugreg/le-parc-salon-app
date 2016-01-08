"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (h, e, b, i, c, g, j) {
  /*! Jssor */
  new function () {
    this.$DebugMode = c;this.$Log = function (c, d) {
      var a = h.console || {},
          b = this.$DebugMode;if (b && a.log) a.log(c);else b && d && alert(c);
    };this.$Error = function (b, d) {
      var c = h.console || {},
          a = this.$DebugMode;if (a && c.error) c.error(b);else a && alert(b);if (a) throw d || new Error(b);
    };this.$Fail = function (a) {
      throw new Error(a);
    };this.$Assert = function (b, c) {
      var a = this.$DebugMode;if (a) if (!b) throw new Error("Assert failed " + c || "");
    };this.$Trace = function (c) {
      var a = h.console || {},
          b = this.$DebugMode;b && a.log && a.log(c);
    };this.$Execute = function (b) {
      var a = this.$DebugMode;a && b();
    };this.$LiveStamp = function (c, d) {
      var b = this.$DebugMode;if (b) {
        var a = e.createElement("DIV");a.setAttribute("id", d);c.$Live = a;
      }
    };this.$C_AbstractProperty = function () {
      throw new Error("The property is abstract, it should be implemented by subclass.");
    };this.$C_AbstractMethod = function () {
      throw new Error("The method is abstract, it should be implemented by subclass.");
    };function a(b) {
      if (b.constructor === a.caller) throw new Error("Cannot create instance of an abstract class.");
    }this.$C_AbstractClass = a;
  }();var d = h.$JssorEasing$ = { $EaseSwing: function $EaseSwing(a) {
      return -b.cos(a * b.PI) / 2 + .5;
    }, $EaseLinear: function $EaseLinear(a) {
      return a;
    }, $EaseOutQuad: function $EaseOutQuad(a) {
      return -a * (a - 2);
    }, $EaseGoBack: function $EaseGoBack(a) {
      return 1 - b.abs(2 - 1);
    }, $EaseInWave: function $EaseInWave(a) {
      return 1 - b.cos(a * b.PI * 2);
    }, $EaseOutWave: function $EaseOutWave(a) {
      return b.sin(a * b.PI * 2);
    }, $EaseOutJump: function $EaseOutJump(a) {
      return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a);
    }, $EaseInJump: function $EaseInJump(a) {
      return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a;
    } };h.$JssorDirection$ = { $TO_LEFT: 1, $TO_RIGHT: 2, $TO_TOP: 4, $TO_BOTTOM: 8, $HORIZONTAL: 3, $VERTICAL: 12, $GetDirectionHorizontal: function $GetDirectionHorizontal(a) {
      return a & 3;
    }, $GetDirectionVertical: function $GetDirectionVertical(a) {
      return a & 12;
    }, $IsHorizontal: function $IsHorizontal(a) {
      return a & 3;
    }, $IsVertical: function $IsVertical(a) {
      return a & 12;
    } };var a = h.$Jssor$ = new function () {
    var f = this,
        xb = /\S+/g,
        T = 1,
        fb = 2,
        kb = 3,
        jb = 4,
        ob = 5,
        L,
        s = 0,
        l = 0,
        p = 0,
        bb = 0,
        A = 0,
        B = navigator,
        tb = B.appName,
        k = B.userAgent,
        x = e.documentElement,
        z;function Eb() {
      if (!L) {
        L = { $Touchable: "ontouchstart" in h || "createTouch" in e };var a;if (B.pointerEnabled || (a = B.msPointerEnabled)) L.$TouchActionAttr = a ? "msTouchAction" : "touchAction";
      }return L;
    }function v(i) {
      if (!s) {
        s = -1;if (tb == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
          var f = k.indexOf("MSIE");s = T;p = n(k.substring(f + 5, k.indexOf(";", f))); /*@cc_on bb=@_jscript_version@*/;l = e.documentMode || p;
        } else if (tb == "Netscape" && !!h.addEventListener) {
          var d = k.indexOf("Firefox"),
              b = k.indexOf("Safari"),
              g = k.indexOf("Chrome"),
              c = k.indexOf("AppleWebKit");if (d >= 0) {
            s = fb;l = n(k.substring(d + 8));
          } else if (b >= 0) {
            var j = k.substring(0, b).lastIndexOf("/");s = g >= 0 ? jb : kb;l = n(k.substring(j + 1, b));
          } else {
            var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(k);if (a) {
              s = T;l = p = n(a[1]);
            }
          }if (c >= 0) A = n(k.substring(c + 12));
        } else {
          var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if (a) {
            s = ob;l = n(a[2]);
          }
        }
      }return i == s;
    }function q() {
      return v(T);
    }function O() {
      return q() && (l < 6 || e.compatMode == "BackCompat");
    }function yb() {
      return v(fb);
    }function ib() {
      return v(kb);
    }function hb() {
      return v(jb);
    }function nb() {
      return v(ob);
    }function cb() {
      return ib() && A > 534 && A < 535;
    }function M() {
      return q() && l < 9;
    }function t(a) {
      if (!z) {
        m(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function (b) {
          if (a.style[b] != j) {
            z = b;return c;
          }
        });z = z || "transform";
      }return z;
    }function sb(a) {
      return {}.toString.call(a);
    }var K;function Cb() {
      if (!K) {
        K = {};m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
          K["[object " + a + "]"] = a.toLowerCase();
        });
      }return K;
    }function m(a, d) {
      if (sb(a) == "[object Array]") {
        for (var b = 0; b < a.length; b++) {
          if (d(a[b], b, a)) return c;
        }
      } else for (var e in a) {
        if (d(a[e], e, a)) return c;
      }
    }function D(a) {
      return a == i ? String(a) : Cb()[sb(a)] || "object";
    }function qb(a) {
      for (var b in a) {
        return c;
      }
    }function G(a) {
      try {
        return D(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"));
      } catch (b) {}
    }function y(a, b) {
      return { x: a, y: b };
    }function vb(b, a) {
      setTimeout(b, a || 0);
    }function I(b, d, c) {
      var a = !b || b == "inherit" ? "" : b;m(d, function (c) {
        var b = c.exec(a);if (b) {
          var d = a.substr(0, b.index),
              e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));a = d + e;
        }
      });a = c + (a.indexOf(" ") != 0 ? " " : "") + a;return a;
    }function eb(b, a) {
      if (l < 9) b.style.filter = a;
    }function zb(b, a, c) {
      if (bb < 9) {
        var e = b.style.filter,
            h = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
            g = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "",
            d = I(e, [h], g);eb(b, d);f.$CssMarginTop(b, c.y);f.$CssMarginLeft(b, c.x);
      }
    }f.$Device = Eb;f.$IsBrowserIE = q;f.$IsBrowserIeQuirks = O;f.$IsBrowserFireFox = yb;f.$IsBrowserSafari = ib;f.$IsBrowserChrome = hb;f.$IsBrowserOpera = nb;f.$IsBrowserBadTransform = cb;f.$IsBrowserIe9Earlier = M;f.$BrowserVersion = function () {
      return l;
    };f.$BrowserEngineVersion = function () {
      return p || l;
    };f.$WebKitVersion = function () {
      v();return A;
    };f.$Delay = vb;f.$Inherit = function (a, b) {
      b.call(a);return C({}, a);
    };function W(a) {
      a.constructor === W.caller && a.$Construct && a.$Construct.apply(a, W.caller.arguments);
    }f.$Construct = W;f.$GetElement = function (a) {
      if (f.$IsString(a)) a = e.getElementById(a);return a;
    };function r(a) {
      return a || h.event;
    }f.$GetEvent = r;f.$EvtSrc = function (a) {
      a = r(a);return a.target || a.srcElement || e;
    };f.$EvtTarget = function (a) {
      a = r(a);return a.relatedTarget || a.toElement;
    };f.$EvtWhich = function (a) {
      a = r(a);return a.which || [0, 1, 3, 0, 2][a.button] || a.charCode || a.keyCode;
    };f.$MousePosition = function (a) {
      a = r(a);return { x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0 };
    };f.$PageScroll = function () {
      var a = e.body;return { x: (h.pageXOffset || x.scrollLeft || a.scrollLeft || 0) - (x.clientLeft || a.clientLeft || 0), y: (h.pageYOffset || x.scrollTop || a.scrollTop || 0) - (x.clientTop || a.clientTop || 0) };
    };f.$WindowSize = function () {
      var a = e.body;return { x: a.clientWidth || x.clientWidth, y: a.clientHeight || x.clientHeight };
    };function E(c, d, a) {
      if (a != j) c.style[d] = a;else {
        var b = c.currentStyle || c.style;a = b[d];if (a == "" && h.getComputedStyle) {
          b = c.ownerDocument.defaultView.getComputedStyle(c, i);b && (a = b.getPropertyValue(d) || b[d]);
        }return a;
      }
    }function Y(b, c, a, d) {
      if (a != j) {
        d && (a += "px");E(b, c, a);
      } else return n(E(b, c));
    }function Fb(b, d, a) {
      return Y(b, d, a, c);
    }function o(d, a) {
      var b = a & 2,
          c = a ? Y : E;return function (e, a) {
        return c(e, d, a, b);
      };
    }function Ab(b) {
      if (q() && p < 9) {
        var a = /opacity=([^)]*)/.exec(b.style.filter || "");return a ? n(a[1]) / 100 : 1;
      } else return n(b.style.opacity || "1");
    }function Bb(c, a, f) {
      if (q() && p < 9) {
        var h = c.style.filter || "",
            i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
            e = b.round(100 * a),
            d = "";if (e < 100 || f) d = "alpha(opacity=" + e + ") ";var g = I(h, [i], d);eb(c, g);
      } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100;
    }function ab(e, a) {
      var d = a.$Rotate || 0,
          c = a.$Scale == j ? 1 : a.$Scale;if (M()) {
        var l = f.$CreateMatrix(d / 180 * b.PI, c, c);zb(e, !d && c == 1 ? i : l, f.$GetMatrixOffset(l, a.$OriginalWidth, a.$OriginalHeight));
      } else {
        var g = t(e);if (g) {
          var k = "rotate(" + d % 360 + "deg) scale(" + c + ")";if (hb() && A > 535 && "ontouchstart" in h) k += " perspective(2000px)";e.style[g] = k;
        }
      }
    }f.$SetStyleTransform = function (b, a) {
      if (cb()) vb(f.$CreateCallback(i, ab, b, a));else ab(b, a);
    };f.$SetStyleTransformOrigin = function (b, c) {
      var a = t(b);if (a) b.style[a + "Origin"] = c;
    };f.$CssScale = function (a, c) {
      if (q() && p < 9 || p < 10 && O()) a.style.zoom = c == 1 ? "" : c;else {
        var b = t(a);if (b) {
          var f = "scale(" + c + ")",
              e = a.style[b],
              g = new RegExp(/[\s]*scale\(.*?\)/g),
              d = I(e, [g], f);a.style[b] = d;
        }
      }
    };f.$EnableHWA = function (a) {
      if (!a.style[t(a)] || a.style[t(a)] == "none") a.style[t(a)] = "perspective(2000px)";
    };f.$DisableHWA = function (a) {
      a.style[t(a)] = "none";
    };var mb = 0,
        gb = 0;f.$WindowResizeFilter = function (b, a) {
      return M() ? function () {
        var h = c,
            d = O() ? b.document.body : b.document.documentElement;if (d) {
          var f = d.offsetWidth - mb,
              e = d.offsetHeight - gb;if (f || e) {
            mb += f;gb += e;
          } else h = g;
        }h && a();
      } : a;
    };f.$MouseOverOutFilter = function (b, a) {
      return function (c) {
        c = r(c);var e = c.type,
            d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);(!d || d !== a && !f.$IsChild(a, d)) && b(c);
      };
    };f.$AddEvent = function (a, c, d, b) {
      a = f.$GetElement(a);if (a.addEventListener) {
        c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);a.addEventListener(c, d, b);
      } else if (a.attachEvent) {
        a.attachEvent("on" + c, d);b && a.setCapture && a.setCapture();
      }
    };f.$RemoveEvent = function (a, c, d, b) {
      a = f.$GetElement(a);if (a.removeEventListener) {
        c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);a.removeEventListener(c, d, b);
      } else if (a.detachEvent) {
        a.detachEvent("on" + c, d);b && a.releaseCapture && a.releaseCapture();
      }
    };f.$FireEvent = function (c, b) {
      var a;if (e.createEvent) {
        a = e.createEvent("HTMLEvents");a.initEvent(b, g, g);c.dispatchEvent(a);
      } else {
        var d = "on" + b;a = e.createEventObject();c.fireEvent(d, a);
      }
    };f.$CancelEvent = function (a) {
      a = r(a);a.preventDefault && a.preventDefault();a.cancel = c;a.returnValue = g;
    };f.$StopEvent = function (a) {
      a = r(a);a.stopPropagation && a.stopPropagation();a.cancelBubble = c;
    };f.$CreateCallback = function (d, c) {
      var a = [].slice.call(arguments, 2),
          b = function b() {
        var b = a.concat([].slice.call(arguments, 0));return c.apply(d, b);
      };return b;
    };f.$InnerText = function (a, b) {
      if (b == j) return a.textContent || a.innerText;var c = e.createTextNode(b);f.$Empty(a);a.appendChild(c);
    };f.$InnerHtml = function (a, b) {
      if (b == j) return a.innerHTML;a.innerHTML = b;
    };f.$GetClientRect = function (b) {
      var a = b.getBoundingClientRect();return { x: a.left, y: a.top, w: a.right - a.left, h: a.bottom - a.top };
    };f.$ClearInnerHtml = function (a) {
      a.innerHTML = "";
    };f.$EncodeHtml = function (b) {
      var a = f.$CreateDiv();f.$InnerText(a, b);return f.$InnerHtml(a);
    };f.$DecodeHtml = function (b) {
      var a = f.$CreateDiv();f.$InnerHtml(a, b);return f.$InnerText(a);
    };f.$SelectElement = function (c) {
      var b;if (h.getSelection) b = h.getSelection();var a = i;if (e.createRange) {
        a = e.createRange();a.selectNode(c);
      } else {
        a = e.body.createTextRange();a.moveToElementText(c);a.select();
      }b && b.addRange(a);
    };f.$DeselectElements = function () {
      if (e.selection) e.selection.empty();else h.getSelection && h.getSelection().removeAllRanges();
    };f.$Children = function (d, c) {
      for (var b = [], a = d.firstChild; a; a = a.nextSibling) {
        (c || a.nodeType == 1) && b.push(a);
      }return b;
    };function rb(a, c, e, b) {
      b = b || "u";for (a = a ? a.firstChild : i; a; a = a.nextSibling) {
        if (a.nodeType == 1) {
          if (S(a, b) == c) return a;if (!e) {
            var d = rb(a, c, e, b);if (d) return d;
          }
        }
      }
    }f.$FindChild = rb;function Q(a, d, f, b) {
      b = b || "u";var c = [];for (a = a ? a.firstChild : i; a; a = a.nextSibling) {
        if (a.nodeType == 1) {
          S(a, b) == d && c.push(a);if (!f) {
            var e = Q(a, d, f, b);if (e.length) c = c.concat(e);
          }
        }
      }return c;
    }function lb(a, c, d) {
      for (a = a ? a.firstChild : i; a; a = a.nextSibling) {
        if (a.nodeType == 1) {
          if (a.tagName == c) return a;if (!d) {
            var b = lb(a, c, d);if (b) return b;
          }
        }
      }
    }f.$FindChildByTag = lb;function db(a, c, e) {
      var b = [];for (a = a ? a.firstChild : i; a; a = a.nextSibling) {
        if (a.nodeType == 1) {
          (!c || a.tagName == c) && b.push(a);if (!e) {
            var d = db(a, c, e);if (d.length) b = b.concat(d);
          }
        }
      }return b;
    }f.$FindChildrenByTag = db;f.$GetElementsByTag = function (b, a) {
      return b.getElementsByTagName(a);
    };function C() {
      var e = arguments,
          d,
          c,
          b,
          a,
          g = 1 & e[0],
          f = 1 + g;d = e[f - 1] || {};for (; f < e.length; f++) {
        if (c = e[f]) for (b in c) {
          a = c[b];if (a !== j) {
            a = c[b];d[b] = g && G(d[b]) ? C(g, {}, a) : a;
          }
        }
      }return d;
    }f.$Extend = C;function X(f, g) {
      var d = {},
          c,
          a,
          b;for (c in f) {
        a = f[c];b = g[c];if (a !== b) {
          var e;if (G(a) && G(b)) {
            a = X(b);e = !qb(a);
          }!e && (d[c] = a);
        }
      }return d;
    }f.$Unextend = X;f.$IsFunction = function (a) {
      return D(a) == "function";
    };f.$IsArray = function (a) {
      return D(a) == "array";
    };f.$IsString = function (a) {
      return D(a) == "string";
    };f.$IsNumeric = function (a) {
      return !isNaN(n(a)) && isFinite(a);
    };f.$Type = D;f.$Each = m;f.$IsNotEmpty = qb;function P(a) {
      return e.createElement(a);
    }f.$CreateElement = P;f.$CreateDiv = function () {
      return P("DIV");
    };f.$CreateSpan = function () {
      return P("SPAN");
    };f.$EmptyFunction = function () {};function U(b, c, a) {
      if (a == j) return b.getAttribute(c);b.setAttribute(c, a);
    }function S(a, b) {
      return U(a, b) || U(a, "data-" + b);
    }f.$Attribute = U;f.$AttributeEx = S;function w(b, a) {
      if (a == j) return b.className;b.className = a;
    }f.$ClassName = w;function ub(b) {
      var a = {};m(b, function (b) {
        a[b] = b;
      });return a;
    }function wb(b, a) {
      return b.match(a || xb);
    }function N(b, a) {
      return ub(wb(b || "", a));
    }f.$ToHash = ub;f.$Split = wb;function Z(b, c) {
      var a = "";m(c, function (c) {
        a && (a += b);a += c;
      });return a;
    }function H(a, c, b) {
      w(a, Z(" ", C(X(N(w(a)), N(c)), N(b))));
    }f.$Join = Z;f.$AddClass = function (b, a) {
      H(b, i, a);
    };f.$RemoveClass = H;f.$ReplaceClass = H;f.$ParentNode = function (a) {
      return a.parentNode;
    };f.$HideElement = function (a) {
      f.$CssDisplay(a, "none");
    };f.$EnableElement = function (a, b) {
      if (b) f.$Attribute(a, "disabled", c);else f.$RemoveAttribute(a, "disabled");
    };f.$HideElements = function (b) {
      for (var a = 0; a < b.length; a++) {
        f.$HideElement(b[a]);
      }
    };f.$ShowElement = function (a, b) {
      f.$CssDisplay(a, b ? "none" : "");
    };f.$ShowElements = function (b, c) {
      for (var a = 0; a < b.length; a++) {
        f.$ShowElement(b[a], c);
      }
    };f.$RemoveAttribute = function (b, a) {
      b.removeAttribute(a);
    };f.$CanClearClip = function () {
      return q() && l < 10;
    };f.$SetStyleClip = function (d, c) {
      if (c) d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)";else {
        var g = d.style.cssText,
            f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
            e = I(g, f, "");a.$CssCssText(d, e);
      }
    };f.$GetNow = function () {
      return +new Date();
    };f.$AppendChild = function (b, a) {
      b.appendChild(a);
    };f.$AppendChildren = function (b, a) {
      m(a, function (a) {
        f.$AppendChild(b, a);
      });
    };f.$InsertBefore = function (b, a, c) {
      (c || a.parentNode).insertBefore(b, a);
    };f.$InsertAfter = function (b, a, c) {
      f.$InsertBefore(b, a.nextSibling, c || a.parentNode);
    };f.$InsertAdjacentHtml = function (b, a, c) {
      b.insertAdjacentHTML(a, c);
    };f.$RemoveElement = function (a, b) {
      (b || a.parentNode).removeChild(a);
    };f.$RemoveElements = function (a, b) {
      m(a, function (a) {
        f.$RemoveElement(a, b);
      });
    };f.$Empty = function (a) {
      f.$RemoveElements(f.$Children(a, c), a);
    };f.$ParseInt = function (b, a) {
      return parseInt(b, a || 10);
    };var n = parseFloat;f.$ParseFloat = n;f.$IsChild = function (b, a) {
      var c = e.body;while (a && b !== a && c !== a) {
        try {
          a = a.parentNode;
        } catch (d) {
          return g;
        }
      }return b === a;
    };function V(d, c, b) {
      var a = d.cloneNode(!c);!b && f.$RemoveAttribute(a, "id");return a;
    }f.$CloneNode = V;f.$LoadImage = function (e, g) {
      var a = new Image();function b(e, c) {
        f.$RemoveEvent(a, "load", b);f.$RemoveEvent(a, "abort", d);f.$RemoveEvent(a, "error", d);g && g(a, c);
      }function d(a) {
        b(a, c);
      }if (nb() && l < 11.6 || !e) b(!e);else {
        f.$AddEvent(a, "load", b);f.$AddEvent(a, "abort", d);f.$AddEvent(a, "error", d);a.src = e;
      }
    };f.$LoadImages = function (d, a, e) {
      var c = d.length + 1;function b(b) {
        c--;if (a && b && b.src == a.src) a = b;!c && e && e(a);
      }m(d, function (a) {
        f.$LoadImage(a.src, b);
      });b();
    };f.$BuildElement = function (b, g, i, h) {
      if (h) b = V(b);var c = Q(b, g);if (!c.length) c = a.$GetElementsByTag(b, g);for (var f = c.length - 1; f > -1; f--) {
        var d = c[f],
            e = V(i);w(e, w(d));a.$CssCssText(e, d.style.cssText);a.$InsertBefore(e, d);a.$RemoveElement(d);
      }return b;
    };function Db(b) {
      var q = this,
          o = "",
          r = ["av", "pv", "ds", "dn"],
          g = [],
          p,
          k = 0,
          h = 0,
          d = 0;function i() {
        H(b, p, g[d || k || h & 2 || h]);a.$Css(b, "pointer-events", d ? "none" : "");
      }function c() {
        k = 0;i();f.$RemoveEvent(e, "mouseup", c);f.$RemoveEvent(e, "touchend", c);f.$RemoveEvent(e, "touchcancel", c);
      }function n(a) {
        if (d) f.$CancelEvent(a);else {
          k = 4;i();f.$AddEvent(e, "mouseup", c);f.$AddEvent(e, "touchend", c);f.$AddEvent(e, "touchcancel", c);
        }
      }q.$Selected = function (a) {
        if (a != j) {
          h = a & 2 || a & 1;i();
        } else return h;
      };q.$Enable = function (a) {
        if (a == j) return !d;d = a ? 0 : 3;i();
      };b = f.$GetElement(b);var l = a.$Split(w(b));if (l) o = l.shift();m(r, function (a) {
        g.push(o + a);
      });p = Z(" ", g);g.unshift("");f.$AddEvent(b, "mousedown", n);f.$AddEvent(b, "touchstart", n);
    }f.$Buttonize = function (a) {
      return new Db(a);
    };f.$Css = E;f.$CssN = Y;f.$CssP = Fb;f.$CssOverflow = o("overflow");f.$CssTop = o("top", 2);f.$CssLeft = o("left", 2);f.$CssWidth = o("width", 2);f.$CssHeight = o("height", 2);f.$CssMarginLeft = o("marginLeft", 2);f.$CssMarginTop = o("marginTop", 2);f.$CssPosition = o("position");f.$CssDisplay = o("display");f.$CssZIndex = o("zIndex", 1);f.$CssFloat = function (b, a) {
      return E(b, q() ? "styleFloat" : "cssFloat", a);
    };f.$CssOpacity = function (b, a, c) {
      if (a != j) Bb(b, a, c);else return Ab(b);
    };f.$CssCssText = function (a, b) {
      if (b != j) a.style.cssText = b;else return a.style.cssText;
    };var R = { $Opacity: f.$CssOpacity, $Top: f.$CssTop, $Left: f.$CssLeft, $Width: f.$CssWidth, $Height: f.$CssHeight, $Position: f.$CssPosition, $Display: f.$CssDisplay, $ZIndex: f.$CssZIndex },
        u;function J() {
      if (!u) u = C({ $MarginTop: f.$CssMarginTop, $MarginLeft: f.$CssMarginLeft, $Clip: f.$SetStyleClip, $Transform: f.$SetStyleTransform }, R);return u;
    }function pb() {
      J();u.$Transform = u.$Transform;return u;
    }f.$StyleSetter = J;f.$StyleSetterEx = pb;f.$GetStyles = function (c, b) {
      J();var a = {};m(b, function (d, b) {
        if (R[b]) a[b] = R[b](c);
      });return a;
    };f.$SetStyles = function (c, b) {
      var a = J();m(b, function (d, b) {
        a[b] && a[b](c, d);
      });
    };f.$SetStylesEx = function (b, a) {
      pb();f.$SetStyles(b, a);
    };var F = new function () {
      var a = this;function b(d, g) {
        for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++) {
          for (var k = f[c] = [], b = 0; b < h; b++) {
            for (var e = 0, a = 0; a < j; a++) {
              e += d[c][a] * g[a][b];
            }k[b] = e;
          }
        }return f;
      }a.$ScaleX = function (b, c) {
        return a.$ScaleXY(b, c, 0);
      };a.$ScaleY = function (b, c) {
        return a.$ScaleXY(b, 0, c);
      };a.$ScaleXY = function (a, c, d) {
        return b(a, [[c, 0], [0, d]]);
      };a.$TransformPoint = function (d, c) {
        var a = b(d, [[c.x], [c.y]]);return y(a[0][0], a[1][0]);
      };
    }();f.$CreateMatrix = function (d, a, c) {
      var e = b.cos(d),
          f = b.sin(d);return [[e * a, -f * c], [f * a, e * c]];
    };f.$GetMatrixOffset = function (d, c, a) {
      var e = F.$TransformPoint(d, y(-c / 2, -a / 2)),
          f = F.$TransformPoint(d, y(c / 2, -a / 2)),
          g = F.$TransformPoint(d, y(c / 2, a / 2)),
          h = F.$TransformPoint(d, y(-c / 2, a / 2));return y(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2);
    };f.$Cast = function (l, g, t, r, u, w, j) {
      var c = g;if (l) {
        c = {};for (var f in g) {
          var x = w[f] || 1,
              s = u[f] || [0, 1],
              e = (t - s[0]) / s[1];e = b.min(b.max(e, 0), 1);e = e * x;var p = b.floor(e);if (e != p) e -= p;var v = r[f] || r.$Default || d.$EaseSwing,
              q = v(e),
              h,
              y = l[f];g[f];var m = g[f];if (a.$IsNumeric(m)) h = y + m * q;else {
            h = a.$Extend({ $Offset: {} }, l[f]);a.$Each(m.$Offset, function (c, b) {
              var a = c * q;h.$Offset[b] = a;h[b] += a;
            });
          }c[f] = h;
        }if (g.$Zoom || g.$Rotate) c.$Transform = { $Rotate: c.$Rotate || 0, $Scale: c.$Zoom, $OriginalWidth: j.$OriginalWidth, $OriginalHeight: j.$OriginalHeight };
      }if (g.$Clip && j.$Move) {
        var k = c.$Clip.$Offset,
            o = (k.$Top || 0) + (k.$Bottom || 0),
            n = (k.$Left || 0) + (k.$Right || 0);c.$Left = (c.$Left || 0) + n;c.$Top = (c.$Top || 0) + o;c.$Clip.$Left -= n;c.$Clip.$Right -= n;c.$Clip.$Top -= o;c.$Clip.$Bottom -= o;
      }if (c.$Clip && a.$CanClearClip() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == j.$OriginalWidth && c.$Clip.$Bottom == j.$OriginalHeight) c.$Clip = i;return c;
    };
  }();function l() {
    var b = this,
        d = [],
        c = [];function i(a, b) {
      d.push({ $EventName: a, $Handler: b });
    }function g(b, c) {
      a.$Each(d, function (a, e) {
        a.$EventName == b && a.$Handler === c && d.splice(e, 1);
      });
    }function f() {
      d = [];
    }function e() {
      a.$Each(c, function (b) {
        a.$RemoveEvent(b.$Obj, b.$EventName, b.$Handler);
      });c = [];
    }b.$Listen = function (e, b, d, f) {
      a.$AddEvent(e, b, d, f);c.push({ $Obj: e, $EventName: b, $Handler: d });
    };b.$Unlisten = function (e, b, d) {
      a.$Each(c, function (f, g) {
        if (f.$Obj === e && f.$EventName == b && f.$Handler === d) {
          a.$RemoveEvent(e, b, d);c.splice(g, 1);
        }
      });
    };b.$UnlistenAll = e;b.$On = b.addEventListener = i;b.$Off = b.removeEventListener = g;b.$TriggerEvent = function (b) {
      var c = [].slice.call(arguments, 1);a.$Each(d, function (a) {
        a.$EventName == b && a.$Handler.apply(h, c);
      });
    };b.$Destroy = function () {
      e();f();for (var a in b) {
        delete b[a];
      }
    };
  }function k(o, z, k, R, P, K) {
    o = o || 0;var e = this,
        s,
        O,
        p,
        q,
        x,
        B = 0,
        I,
        J,
        H,
        D,
        A = 0,
        l = 0,
        n = 0,
        E,
        m = o,
        u = o + z,
        f,
        j,
        r,
        y = [],
        C;function M(a) {
      f += a;j += a;m += a;u += a;l += a;n += a;A = a;
    }function Q(a, b) {
      var c = a - f + o * b;M(c);return j;
    }function w(o, i) {
      var d = o;if (r && (d >= j || d <= f)) d = ((d - f) % r + r) % r + f;if (!E || x || i || l != d) {
        var g = b.min(d, j);g = b.max(g, f);if (!E || x || i || g != n) {
          if (K) {
            var h = (g - m) / (z || 1);if (k.$Reverse) h = 1 - h;var p = a.$Cast(P, K, h, I, H, J, k);a.$Each(p, function (b, a) {
              C[a] && C[a](R, b);
            });
          }e.$OnInnerOffsetChange(n - m, g - m);n = g;a.$Each(y, function (b, c) {
            var a = o < l ? y[y.length - c - 1] : b;a.$GoToPosition(n - A, i);
          });var s = l,
              q = n;l = d;E = c;e.$OnPositionChange(s, q);
        }
      }
    }function F(a, c, d) {
      c && a.$Locate(j, 1);if (!d) {
        f = b.min(f, a.$GetPosition_OuterBegin() + A);j = b.max(j, a.$GetPosition_OuterEnd() + A);
      }y.push(a);
    }var t = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;if (a.$IsBrowserSafari() && a.$BrowserVersion() < 7) t = i;t = t || function (b) {
      a.$Delay(b, k.$Interval);
    };function L() {
      if (s) {
        var d = a.$GetNow(),
            e = b.min(d - B, k.$IntervalMax),
            c = l + e * q;B = d;if (c * q >= p * q) c = p;w(c);if (!x && c * q >= p * q) N(D);else t(L);
      }
    }function v(d, g, h) {
      if (!s) {
        s = c;x = h;D = g;d = b.max(d, f);d = b.min(d, j);p = d;q = p < l ? -1 : 1;e.$OnStart();B = a.$GetNow();t(L);
      }
    }function N(a) {
      if (s) {
        x = s = D = g;e.$OnStop();a && a();
      }
    }e.$Play = function (a, b, c) {
      v(a ? l + a : j, b, c);
    };e.$PlayToPosition = v;e.$PlayToBegin = function (a, b) {
      v(f, a, b);
    };e.$PlayToEnd = function (a, b) {
      v(j, a, b);
    };e.$Stop = N;e.$Continue = function (a) {
      v(a);
    };e.$GetPosition = function () {
      return l;
    };e.$GetPlayToPosition = function () {
      return p;
    };e.$GetPosition_Display = function () {
      return n;
    };e.$GoToPosition = w;e.$GoToBegin = function () {
      w(f, c);
    };e.$GoToEnd = function () {
      w(j, c);
    };e.$Move = function (a) {
      w(l + a);
    };e.$CombineMode = function () {
      return O;
    };e.$GetDuration = function () {
      return z;
    };e.$IsPlaying = function () {
      return s;
    };e.$IsOnTheWay = function () {
      return l > m && l <= u;
    };e.$SetLoopLength = function (a) {
      r = a;
    };e.$Locate = Q;e.$Shift = M;e.$Join = F;e.$Combine = function (a) {
      F(a, 0);
    };e.$Chain = function (a) {
      F(a, 1);
    };e.$GetPosition_InnerBegin = function () {
      return m;
    };e.$GetPosition_InnerEnd = function () {
      return u;
    };e.$GetPosition_OuterBegin = function () {
      return f;
    };e.$GetPosition_OuterEnd = function () {
      return j;
    };e.$OnPositionChange = e.$OnStart = e.$OnStop = e.$OnInnerOffsetChange = a.$EmptyFunction;e.$Version = a.$GetNow();k = a.$Extend({ $Interval: 16, $IntervalMax: 50 }, k);r = k.$LoopLength;C = a.$Extend({}, a.$StyleSetter(), k.$Setter);f = m = o;j = u = o + z;J = k.$Round || {};H = k.$During || {};I = a.$Extend({ $Default: a.$IsFunction(k.$Easing) && k.$Easing || d.$EaseSwing }, k.$Easing);
  }var n = h.$JssorSlideshowFormations$ = new function () {
    var h = this,
        d = 0,
        a = 1,
        f = 2,
        e = 3,
        s = 1,
        r = 2,
        t = 4,
        q = 8,
        w = 256,
        x = 512,
        v = 1024,
        u = 2048,
        j = u + s,
        i = u + r,
        o = x + s,
        m = x + r,
        n = w + t,
        k = w + q,
        l = v + t,
        p = v + q;function y(a) {
      return (a & r) == r;
    }function z(a) {
      return (a & t) == t;
    }function g(b, a, c) {
      c.push(a);b[a] = b[a] || [];b[a].push(c);
    }h.$FormationStraight = function (f) {
      for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.$Count, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++) {
        for (a = 0; a < d; a++) {
          switch (s) {case j:
              c = h - (a * e + (q - b));break;case l:
              c = h - (b * d + (p - a));break;case o:
              c = h - (a * e + b);case n:
              c = h - (b * d + a);break;case i:
              c = a * e + b;break;case k:
              c = b * d + (p - a);break;case m:
              c = a * e + (q - b);break;default:
              c = b * d + a;}g(r, c, [b, a]);
        }
      }return r;
    };h.$FormationSwirl = function (q) {
      var x = q.$Cols,
          y = q.$Rows,
          B = q.$Assembly,
          w = q.$Count,
          A = [],
          z = [],
          u = 0,
          b = 0,
          h = 0,
          r = x - 1,
          s = y - 1,
          t,
          p,
          v = 0;switch (B) {case j:
          b = r;h = 0;p = [f, a, e, d];break;case l:
          b = 0;h = s;p = [d, e, a, f];break;case o:
          b = r;h = s;p = [e, a, f, d];break;case n:
          b = r;h = s;p = [a, e, d, f];break;case i:
          b = 0;h = 0;p = [f, d, e, a];break;case k:
          b = r;h = 0;p = [a, f, d, e];break;case m:
          b = 0;h = s;p = [e, d, f, a];break;default:
          b = 0;h = 0;p = [d, f, a, e];}u = 0;while (u < w) {
        t = h + "," + b;if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
          z[t] = c;g(A, u++, [h, b]);
        } else switch (p[v++ % p.length]) {case d:
            b--;break;case f:
            h--;break;case a:
            b++;break;case e:
            h++;}switch (p[v % p.length]) {case d:
            b++;break;case f:
            h++;break;case a:
            b--;break;case e:
            h--;}
      }return A;
    };h.$FormationZigZag = function (p) {
      var w = p.$Cols,
          x = p.$Rows,
          z = p.$Assembly,
          v = p.$Count,
          t = [],
          u = 0,
          b = 0,
          c = 0,
          q = w - 1,
          r = x - 1,
          y,
          h,
          s = 0;switch (z) {case j:
          b = q;c = 0;h = [f, a, e, a];break;case l:
          b = 0;c = r;h = [d, e, a, e];break;case o:
          b = q;c = r;h = [e, a, f, a];break;case n:
          b = q;c = r;h = [a, e, d, e];break;case i:
          b = 0;c = 0;h = [f, d, e, d];break;case k:
          b = q;c = 0;h = [a, f, d, f];break;case m:
          b = 0;c = r;h = [e, d, f, d];break;default:
          b = 0;c = 0;h = [d, f, a, f];}u = 0;while (u < v) {
        y = c + "," + b;if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
          g(t, u++, [c, b]);switch (h[s % h.length]) {case d:
              b++;break;case f:
              c++;break;case a:
              b--;break;case e:
              c--;}
        } else {
          switch (h[s++ % h.length]) {case d:
              b--;break;case f:
              c--;break;case a:
              b++;break;case e:
              c++;}switch (h[s++ % h.length]) {case d:
              b++;break;case f:
              c++;break;case a:
              b--;break;case e:
              c--;}
        }
      }return t;
    };h.$FormationStraightStairs = function (q) {
      var u = q.$Cols,
          v = q.$Rows,
          e = q.$Assembly,
          t = q.$Count,
          r = [],
          s = 0,
          c = 0,
          d = 0,
          f = u - 1,
          h = v - 1,
          x = t - 1;switch (e) {case j:case m:case o:case i:
          var a = 0,
              b = 0;break;case k:case l:case n:case p:
          var a = f,
              b = 0;break;default:
          e = p;var a = f,
              b = 0;}c = a;d = b;while (s < t) {
        if (z(e) || y(e)) g(r, x - s++, [d, c]);else g(r, s++, [d, c]);switch (e) {case j:case m:
            c--;d++;break;case o:case i:
            c++;d--;break;case k:case l:
            c--;d--;break;case p:case n:default:
            c++;d++;}if (c < 0 || d < 0 || c > f || d > h) {
          switch (e) {case j:case m:
              a++;break;case k:case l:case o:case i:
              b++;break;case p:case n:default:
              a--;}if (a < 0 || b < 0 || a > f || b > h) {
            switch (e) {case j:case m:
                a = f;b++;break;case o:case i:
                b = h;a++;break;case k:case l:
                b = h;a--;break;case p:case n:default:
                a = 0;b++;}if (b > h) b = h;else if (b < 0) b = 0;else if (a > f) a = f;else if (a < 0) a = 0;
          }d = b;c = a;
        }
      }return r;
    };h.$FormationSquare = function (i) {
      var a = i.$Cols || 1,
          c = i.$Rows || 1,
          j = [],
          d,
          e,
          f,
          h,
          k;f = a < c ? (c - a) / 2 : 0;h = a > c ? (a - c) / 2 : 0;k = b.round(b.max(a / 2, c / 2)) + 1;for (d = 0; d < a; d++) {
        for (e = 0; e < c; e++) {
          g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);
        }
      }return j;
    };h.$FormationRectangle = function (f) {
      var d = f.$Cols || 1,
          e = f.$Rows || 1,
          h = [],
          a,
          c,
          i;i = b.round(b.min(d / 2, e / 2)) + 1;for (a = 0; a < d; a++) {
        for (c = 0; c < e; c++) {
          g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
        }
      }return h;
    };h.$FormationRandom = function (d) {
      for (var e = [], a, c = 0; c < d.$Rows; c++) {
        for (a = 0; a < d.$Cols; a++) {
          g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
        }
      }return e;
    };h.$FormationCircle = function (d) {
      for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++) {
        for (a = 0; a < f; a++) {
          g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);
        }
      }return h;
    };h.$FormationCross = function (d) {
      for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++) {
        for (a = 0; a < f; a++) {
          g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);
        }
      }return h;
    };h.$FormationRectangleCross = function (f) {
      for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = b.max(d, e) + 1, c = 0; c < h; c++) {
        for (a = 0; a < i; a++) {
          g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
        }
      }return j;
    };
  }();h.$JssorSlideshowRunner$ = function (o, s, q, t, y) {
    var f = this,
        u,
        h,
        e,
        x = 0,
        w = t.$TransitionsOrder,
        r,
        j = 8;function m(h, f) {
      var e = { $Interval: f, $Duration: 1, $Delay: 0, $Cols: 1, $Rows: 1, $Opacity: 0, $Zoom: 0, $Clip: 0, $Move: g, $SlideOut: g, $Reverse: g, $Formation: n.$FormationRandom, $Assembly: 1032, $ChessMode: { $Column: 0, $Row: 0 }, $Easing: d.$EaseSwing, $Round: {}, $Blocks: [], $During: {} };a.$Extend(e, h);e.$Count = e.$Cols * e.$Rows;if (a.$IsFunction(e.$Easing)) e.$Easing = { $Default: e.$Easing };e.$FramesCount = b.ceil(e.$Duration / e.$Interval);e.$GetBlocks = function (b, a) {
        b /= e.$Cols;a /= e.$Rows;var f = b + "x" + a;if (!e.$Blocks[f]) {
          e.$Blocks[f] = { $Width: b, $Height: a };for (var c = 0; c < e.$Cols; c++) {
            for (var d = 0; d < e.$Rows; d++) {
              e.$Blocks[f][d + "," + c] = { $Top: d * a, $Right: c * b + b, $Bottom: d * a + a, $Left: c * b };
            }
          }
        }return e.$Blocks[f];
      };if (e.$Brother) {
        e.$Brother = m(e.$Brother, f);e.$SlideOut = c;
      }return e;
    }function p(A, i, d, v, n, l) {
      var y = this,
          t,
          u = {},
          j = {},
          m = [],
          f,
          e,
          r,
          p = d.$ChessMode.$Column || 0,
          q = d.$ChessMode.$Row || 0,
          h = d.$GetBlocks(n, l),
          o = B(d),
          C = o.length - 1,
          s = d.$Duration + d.$Delay * C,
          w = v + s,
          k = d.$SlideOut,
          x;w += 50;function B(a) {
        var b = a.$Formation(a);return a.$Reverse ? b.reverse() : b;
      }y.$EndTime = w;y.$ShowFrame = function (c) {
        c -= v;var e = c < s;if (e || x) {
          x = e;if (!k) c = s - c;var f = b.ceil(c / d.$Interval);a.$Each(j, function (c, e) {
            var d = b.max(f, c.$Min);d = b.min(d, c.length - 1);if (c.$LastFrameIndex != d) {
              if (!c.$LastFrameIndex && !k) a.$ShowElement(m[e]);else d == c.$Max && k && a.$HideElement(m[e]);c.$LastFrameIndex = d;a.$SetStylesEx(m[e], c[d]);
            }
          });
        }
      };i = a.$CloneNode(i);if (a.$IsBrowserIe9Earlier()) {
        var D = !i["no-image"],
            z = a.$FindChildrenByTag(i);a.$Each(z, function (b) {
          (D || b["jssor-slider"]) && a.$CssOpacity(b, a.$CssOpacity(b), c);
        });
      }a.$Each(o, function (i, m) {
        a.$Each(i, function (G) {
          var K = G[0],
              J = G[1],
              v = K + "," + J,
              o = g,
              s = g,
              x = g;if (p && J % 2) {
            if (p & 3) o = !o;if (p & 12) s = !s;if (p & 16) x = !x;
          }if (q && K % 2) {
            if (q & 3) o = !o;if (q & 12) s = !s;if (q & 16) x = !x;
          }d.$Top = d.$Top || d.$Clip & 4;d.$Bottom = d.$Bottom || d.$Clip & 8;d.$Left = d.$Left || d.$Clip & 1;d.$Right = d.$Right || d.$Clip & 2;var C = s ? d.$Bottom : d.$Top,
              z = s ? d.$Top : d.$Bottom,
              B = o ? d.$Right : d.$Left,
              A = o ? d.$Left : d.$Right;d.$Clip = C || z || B || A;r = {};e = { $Top: 0, $Left: 0, $Opacity: 1, $Width: n, $Height: l };f = a.$Extend({}, e);t = a.$Extend({}, h[v]);if (d.$Opacity) e.$Opacity = 2 - d.$Opacity;if (d.$ZIndex) {
            e.$ZIndex = d.$ZIndex;f.$ZIndex = 0;
          }var I = d.$Cols * d.$Rows > 1 || d.$Clip;if (d.$Zoom || d.$Rotate) {
            var H = c;if (a.$IsBrowserIe9Earlier()) if (d.$Cols * d.$Rows > 1) H = g;else I = g;if (H) {
              e.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;f.$Zoom = 1;if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera()) e.$Zoom = b.min(e.$Zoom, 2);var N = d.$Rotate;e.$Rotate = N * 360 * (x ? -1 : 1);f.$Rotate = 0;
            }
          }if (I) {
            if (d.$Clip) {
              var w = d.$ScaleClip || 1,
                  i = t.$Offset = {};if (C && z) {
                i.$Top = h.$Height / 2 * w;i.$Bottom = -i.$Top;
              } else if (C) i.$Bottom = -h.$Height * w;else if (z) i.$Top = h.$Height * w;if (B && A) {
                i.$Left = h.$Width / 2 * w;i.$Right = -i.$Left;
              } else if (B) i.$Right = -h.$Width * w;else if (A) i.$Left = h.$Width * w;
            }r.$Clip = t;f.$Clip = h[v];
          }var L = o ? 1 : -1,
              M = s ? 1 : -1;if (d.x) e.$Left += n * d.x * L;if (d.y) e.$Top += l * d.y * M;a.$Each(e, function (b, c) {
            if (a.$IsNumeric(b)) if (b != f[c]) r[c] = b - f[c];
          });u[v] = k ? f : e;var D = d.$FramesCount,
              y = b.round(m * d.$Delay / d.$Interval);j[v] = new Array(y);j[v].$Min = y;j[v].$Max = y + D - 1;for (var F = 0; F <= D; F++) {
            var E = a.$Cast(f, r, F / D, d.$Easing, d.$During, d.$Round, { $Move: d.$Move, $OriginalWidth: n, $OriginalHeight: l });E.$ZIndex = E.$ZIndex || 1;j[v].push(E);
          }
        });
      });o.reverse();a.$Each(o, function (b) {
        a.$Each(b, function (c) {
          var f = c[0],
              e = c[1],
              d = f + "," + e,
              b = i;if (e || f) b = a.$CloneNode(i);a.$SetStyles(b, u[d]);a.$CssOverflow(b, "hidden");a.$CssPosition(b, "absolute");A.$AddClipElement(b);m[d] = b;a.$ShowElement(b, !k);
        });
      });
    }function v() {
      var a = this,
          b = 0;k.call(a, 0, u);a.$OnPositionChange = function (c, a) {
        if (a - b > j) {
          b = a;e && e.$ShowFrame(a);h && h.$ShowFrame(a);
        }
      };a.$Transition = r;
    }f.$GetTransition = function () {
      var a = 0,
          c = t.$Transitions,
          d = c.length;if (w) a = x++ % d;else a = b.floor(b.random() * d);c[a] && (c[a].$Index = a);return c[a];
    };f.$Initialize = function (w, x, i, k, a) {
      r = a;a = m(a, j);var g = k.$Item,
          d = i.$Item;g["no-image"] = !k.$Image;d["no-image"] = !i.$Image;var l = g,
          n = d,
          v = a,
          c = a.$Brother || m({}, j);if (!a.$SlideOut) {
        l = d;n = g;
      }var t = c.$Shift || 0;h = new p(o, n, c, b.max(t - c.$Interval, 0), s, q);e = new p(o, l, v, b.max(c.$Interval - t, 0), s, q);h.$ShowFrame(0);e.$ShowFrame(0);u = b.max(h.$EndTime, e.$EndTime);f.$Index = w;
    };f.$Clear = function () {
      o.$Clear();h = i;e = i;
    };f.$GetProcessor = function () {
      var a = i;if (e) a = new v();return a;
    };if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera() || y && a.$WebKitVersion() < 537) j = 16;l.call(f);k.call(f, -1e7, 1e7);
  };var f = h.$JssorSlider$ = function (q, ec) {
    var n = this;function Dc() {
      var a = this;k.call(a, -1e8, 2e8);a.$GetCurrentSlideInfo = function () {
        var c = a.$GetPosition_Display(),
            d = b.floor(c),
            f = s(d),
            e = c - b.floor(c);return { $Index: f, $VirtualIndex: d, $Position: e };
      };a.$OnPositionChange = function (d, a) {
        var e = b.floor(a);if (e != a && a > d) e++;Tb(e, c);n.$TriggerEvent(f.$EVT_POSITION_CHANGE, s(a), s(d), a, d);
      };
    }function Cc() {
      var b = this;k.call(b, 0, 0, { $LoopLength: r });a.$Each(D, function (a) {
        A & 1 && a.$SetLoopLength(r);b.$Chain(a);a.$Shift(hb / ac);
      });
    }function Bc() {
      var a = this,
          b = Sb.$Elmt;k.call(a, -1, 2, { $Easing: d.$EaseLinear, $Setter: { $Position: Yb }, $LoopLength: r }, b, { $Position: 1 }, { $Position: -2 });a.$Wrapper = b;
    }function pc(m, l) {
      var a = this,
          d,
          e,
          h,
          j,
          b;k.call(a, -1e8, 2e8, { $IntervalMax: 100 });a.$OnStart = function () {
        Q = c;U = i;n.$TriggerEvent(f.$EVT_SWIPE_START, s(w.$GetPosition()), w.$GetPosition());
      };a.$OnStop = function () {
        Q = g;j = g;var a = w.$GetCurrentSlideInfo();n.$TriggerEvent(f.$EVT_SWIPE_END, s(w.$GetPosition()), w.$GetPosition());!a.$Position && Fc(a.$VirtualIndex, t);
      };a.$OnPositionChange = function (g, f) {
        var a;if (j) a = b;else {
          a = e;if (h) {
            var c = f / h;a = p.$SlideEasing(c) * (e - d) + d;
          }
        }w.$GoToPosition(a);
      };a.$PlayCarousel = function (b, f, c, g) {
        d = b;e = f;h = c;w.$GoToPosition(b);a.$GoToPosition(0);a.$PlayToPosition(c, g);
      };a.$StandBy = function (d) {
        j = c;b = d;a.$Play(d, i, c);
      };a.$SetStandByPosition = function (a) {
        b = a;
      };a.$MoveCarouselTo = function (a) {
        w.$GoToPosition(a);
      };w = new Dc();w.$Combine(m);w.$Combine(l);
    }function qc() {
      var c = this,
          b = Wb();a.$CssZIndex(b, 0);a.$Css(b, "pointerEvents", "none");c.$Elmt = b;c.$AddClipElement = function (c) {
        a.$AppendChild(b, c);a.$ShowElement(b);
      };c.$Clear = function () {
        a.$HideElement(b);a.$Empty(b);
      };
    }function zc(o, e) {
      var d = this,
          q,
          x,
          N,
          y,
          j,
          C = [],
          H,
          v,
          W,
          K,
          Q,
          G,
          h,
          w,
          m,
          gb;k.call(d, -u, u + 1, { $SlideItemAnimator: c });function F(a) {
        x && x.$Revert();q && q.$Revert();V(o, a);G = c;q = new L.$Class(o, L, 1);x = new L.$Class(o, L);x.$GoToPosition(0);q.$GoToPosition(0);
      }function Y() {
        q.$Version < L.$Version && F();
      }function O(o, r, m) {
        if (!K) {
          K = c;if (j && m) {
            var h = m.width,
                b = m.height,
                l = h,
                k = b;if (h && b && p.$FillMode) {
              if (p.$FillMode & 3 && (!(p.$FillMode & 4) || h > J || b > I)) {
                var i = g,
                    q = J / I * b / h;if (p.$FillMode & 1) i = q > 1;else if (p.$FillMode & 2) i = q < 1;l = i ? h * I / b : J;k = i ? I : b * J / h;
              }a.$CssWidth(j, l);a.$CssHeight(j, k);a.$CssTop(j, (I - k) / 2);a.$CssLeft(j, (J - l) / 2);
            }a.$CssPosition(j, "absolute");n.$TriggerEvent(f.$EVT_LOAD_END, e);
          }
        }a.$HideElement(r);o && o(d);
      }function X(b, c, f, g) {
        if (g == U && t == e && R) if (!Ec) {
          var a = s(b);B.$Initialize(a, e, c, d, f);c.$HideContentForSlideshow();ab.$Locate(a, 1);ab.$GoToPosition(a);z.$PlayCarousel(b, b, 0);
        }
      }function bb(b) {
        if (b == U && t == e) {
          if (!h) {
            var a = i;if (B) if (B.$Index == e) a = B.$GetProcessor();else B.$Clear();Y();h = new xc(o, e, a, d.$GetCaptionSliderIn(), d.$GetCaptionSliderOut());h.$SetPlayer(m);
          }!h.$IsPlaying() && h.$Replay();
        }
      }function T(f, c, g) {
        if (f == e) {
          if (f != c) D[c] && D[c].$ParkOut();else !g && h && h.$AdjustIdleOnPark();m && m.$Enable();var j = U = a.$GetNow();d.$LoadImage(a.$CreateCallback(i, bb, j));
        } else {
          var l = b.abs(e - f),
              k = u + p.$LazyLoading - 1;(!Q || l <= k) && d.$LoadImage();
        }
      }function cb() {
        if (t == e && h) {
          h.$Stop();m && m.$Quit();m && m.$Disable();h.$OpenSlideshowPanel();
        }
      }function fb() {
        t == e && h && h.$Stop();
      }function Z(a) {
        !M && n.$TriggerEvent(f.$EVT_CLICK, e, a);
      }function P() {
        m = w.pInstance;h && h.$SetPlayer(m);
      }d.$LoadImage = function (d, b) {
        b = b || y;if (C.length && !K) {
          a.$ShowElement(b);if (!W) {
            W = c;n.$TriggerEvent(f.$EVT_LOAD_START, e);a.$Each(C, function (b) {
              if (!a.$Attribute(b, "src")) {
                b.src = a.$AttributeEx(b, "src2");a.$CssDisplay(b, b["display-origin"]);
              }
            });
          }a.$LoadImages(C, j, a.$CreateCallback(i, O, d, b));
        } else O(d, b);
      };d.$GoForNextSlide = function () {
        var g = e;if (p.$AutoPlaySteps < 0) g -= r;var c = g + p.$AutoPlaySteps * vc;if (A & 2) c = s(c);if (!(A & 1)) c = b.max(0, b.min(c, r - u));if (c != e) {
          if (B) {
            var d = B.$GetTransition(r);if (d) {
              var h = U = a.$GetNow(),
                  f = D[s(c)];return f.$LoadImage(a.$CreateCallback(i, X, c, f, d, h), y);
            }
          }pb(c);
        }
      };d.$TryActivate = function () {
        T(e, e, c);
      };d.$ParkOut = function () {
        m && m.$Quit();m && m.$Disable();d.$UnhideContentForSlideshow();h && h.$Abort();h = i;F();
      };d.$StampSlideItemElements = function (a) {
        a = gb + "_" + a;
      };d.$HideContentForSlideshow = function () {
        a.$HideElement(o);
      };d.$UnhideContentForSlideshow = function () {
        a.$ShowElement(o);
      };d.$EnablePlayer = function () {
        m && m.$Enable();
      };function V(b, e, d) {
        if (a.$Attribute(b, "jssor-slider")) return;d = d || 0;if (!G) {
          if (b.tagName == "IMG") {
            C.push(b);if (!a.$Attribute(b, "src")) {
              Q = c;b["display-origin"] = a.$CssDisplay(b);a.$HideElement(b);
            }
          }a.$IsBrowserIe9Earlier() && a.$CssZIndex(b, (a.$CssZIndex(b) || 0) + 1);if (p.$HWA && a.$WebKitVersion()) (a.$WebKitVersion() < 534 || !eb && !a.$IsBrowserChrome()) && a.$EnableHWA(b);
        }var f = a.$Children(b);a.$Each(f, function (f) {
          var i = f.tagName,
              k = a.$AttributeEx(f, "u");if (k == "player" && !w) {
            w = f;if (w.pInstance) P();else a.$AddEvent(w, "dataavailable", P);
          }if (k == "caption") {
            if (!a.$IsBrowserIE() && !e) {
              var h = a.$CloneNode(f, g, c);a.$InsertBefore(h, f, b);a.$RemoveElement(f, b);f = h;e = c;
            }
          } else if (!G && !d && !j) {
            if (i == "A") {
              if (a.$AttributeEx(f, "u") == "image") j = a.$FindChildByTag(f, "IMG");else j = a.$FindChild(f, "image", c);if (j) {
                H = f;a.$SetStyles(H, S);v = a.$CloneNode(H, c);a.$CssDisplay(v, "block");a.$SetStyles(v, S);a.$CssOpacity(v, 0);a.$Css(v, "backgroundColor", "#000");
              }
            } else if (i == "IMG" && a.$AttributeEx(f, "u") == "image") j = f;if (j) {
              j.border = 0;a.$SetStyles(j, S);
            }
          }V(f, e, d + 1);
        });
      }d.$OnInnerOffsetChange = function (c, b) {
        var a = u - b;Yb(N, a);
      };d.$GetCaptionSliderIn = function () {
        return q;
      };d.$GetCaptionSliderOut = function () {
        return x;
      };d.$Index = e;l.call(d);var E = a.$FindChild(o, "thumb", c);if (E) {
        d.$Thumb = a.$CloneNode(E);a.$RemoveAttribute(E, "id");a.$HideElement(E);
      }a.$ShowElement(o);y = a.$CloneNode(db);a.$CssZIndex(y, 1e3);a.$AddEvent(o, "click", Z);F(c);d.$Image = j;d.$Link = v;d.$Item = o;d.$Wrapper = N = o;a.$AppendChild(N, y);n.$On(203, T);n.$On(28, fb);n.$On(24, cb);
    }function xc(G, i, p, u, s) {
      var b = this,
          l = 0,
          w = 0,
          m,
          h,
          d,
          e,
          j,
          q,
          v,
          r,
          o = D[i];k.call(b, 0, 0);function x() {
        a.$Empty(O);cc && j && o.$Link && a.$AppendChild(O, o.$Link);a.$ShowElement(O, !j && o.$Image);
      }function y() {
        if (q) {
          q = g;n.$TriggerEvent(f.$EVT_ROLLBACK_END, i, d, l, h, d, e);b.$GoToPosition(h);
        }b.$Replay();
      }function z(a) {
        r = a;b.$Stop();b.$Replay();
      }b.$Replay = function () {
        var a = b.$GetPosition_Display();if (!C && !Q && !r && t == i) {
          if (!a) {
            if (m && !j) {
              j = c;b.$OpenSlideshowPanel(c);n.$TriggerEvent(f.$EVT_SLIDESHOW_START, i, l, w, m, e);
            }x();
          }var g,
              p = f.$EVT_STATE_CHANGE;if (a != e) if (a == d) g = e;else if (a == h) g = d;else if (!a) g = h;else if (a > d) {
            q = c;g = d;p = f.$EVT_ROLLBACK_START;
          } else g = b.$GetPlayToPosition();n.$TriggerEvent(p, i, a, l, h, d, e);var k = R && (!E || F);if (a == e) (d != e && !(E & 12) || k) && o.$GoForNextSlide();else (k || a != d) && b.$PlayToPosition(g, y);
        }
      };b.$AdjustIdleOnPark = function () {
        d == e && d == b.$GetPosition_Display() && b.$GoToPosition(h);
      };b.$Abort = function () {
        B && B.$Index == i && B.$Clear();var a = b.$GetPosition_Display();a < e && n.$TriggerEvent(f.$EVT_STATE_CHANGE, i, -a - 1, l, h, d, e);
      };b.$OpenSlideshowPanel = function (b) {
        p && a.$CssOverflow(jb, b && p.$Transition.$Outside ? "" : "hidden");
      };b.$OnInnerOffsetChange = function (b, a) {
        if (j && a >= m) {
          j = g;x();o.$UnhideContentForSlideshow();B.$Clear();n.$TriggerEvent(f.$EVT_SLIDESHOW_END, i, l, w, m, e);
        }n.$TriggerEvent(f.$EVT_PROGRESS_CHANGE, i, a, l, h, d, e);
      };b.$SetPlayer = function (a) {
        if (a && !v) {
          v = a;a.$On($JssorPlayer$.$EVT_SWITCH, z);
        }
      };p && b.$Chain(p);m = b.$GetPosition_OuterEnd();b.$GetPosition_OuterEnd();b.$Chain(u);h = u.$GetPosition_OuterEnd();d = h + (a.$ParseFloat(a.$AttributeEx(G, "idle")) || oc);s.$Shift(d);b.$Combine(s);e = b.$GetPosition_OuterEnd();
    }function Yb(g, f) {
      var e = x > 0 ? x : ib,
          c = Bb * f * (e & 1),
          d = Cb * f * (e >> 1 & 1);c = b.round(c);d = b.round(d);a.$CssLeft(g, c);a.$CssTop(g, d);
    }function Ob() {
      rb = Q;Kb = z.$GetPlayToPosition();G = w.$GetPosition();
    }function fc() {
      Ob();if (C || !F && E & 12) {
        z.$Stop();n.$TriggerEvent(f.$EVT_FREEZE);
      }
    }function dc(e) {
      if (!C && (F || !(E & 12)) && !z.$IsPlaying()) {
        var c = w.$GetPosition(),
            a = b.ceil(G);if (e && b.abs(H) >= p.$MinDragOffsetToSlide) {
          a = b.ceil(c);a += gb;
        }if (!(A & 1)) a = b.min(r - u, b.max(a, 0));var d = b.abs(a - c);d = 1 - b.pow(1 - d, 5);if (!M && rb) z.$Continue(Kb);else if (c == a) {
          vb.$EnablePlayer();vb.$TryActivate();
        } else z.$PlayCarousel(c, a, d * Ub);
      }
    }function Ib(b) {
      !a.$AttributeEx(a.$EvtSrc(b), "nodrag") && a.$CancelEvent(b);
    }function tc(a) {
      Xb(a, 1);
    }function Xb(b, d) {
      b = a.$GetEvent(b);var k = a.$EvtSrc(b);if (!K && !a.$AttributeEx(k, "nodrag") && uc() && (!d || b.touches.length == 1)) {
        C = c;Ab = g;U = i;a.$AddEvent(e, d ? "touchmove" : "mousemove", Db);a.$GetNow();M = 0;fc();if (!rb) x = 0;if (d) {
          var j = b.touches[0];wb = j.clientX;xb = j.clientY;
        } else {
          var h = a.$MousePosition(b);wb = h.x;xb = h.y;
        }H = 0;cb = 0;gb = 0;n.$TriggerEvent(f.$EVT_DRAG_START, s(G), G, b);
      }
    }function Db(e) {
      if (C) {
        e = a.$GetEvent(e);var f;if (e.type != "mousemove") {
          var l = e.touches[0];f = { x: l.clientX, y: l.clientY };
        } else f = a.$MousePosition(e);if (f) {
          var j = f.x - wb,
              k = f.y - xb;if (b.floor(G) != G) x = x || ib & K;if ((j || k) && !x) {
            if (K == 3) {
              if (b.abs(k) > b.abs(j)) x = 2;else x = 1;
            } else x = K;if (lb && x == 1 && b.abs(k) - b.abs(j) > 3) Ab = c;
          }if (x) {
            var d = k,
                i = Cb;if (x == 1) {
              d = j;i = Bb;
            }if (!(A & 1)) {
              if (d > 0) {
                var g = i * t,
                    h = d - g;if (h > 0) d = g + b.sqrt(h) * 5;
              }if (d < 0) {
                var g = i * (r - u - t),
                    h = -d - g;if (h > 0) d = -g - b.sqrt(h) * 5;
              }
            }if (H - cb < -2) gb = 0;else if (H - cb > 2) gb = -1;cb = H;H = d;ub = G - H / i / (Z || 1);if (H && x && !Ab) {
              a.$CancelEvent(e);if (!Q) z.$StandBy(ub);else z.$SetStandByPosition(ub);
            }
          }
        }
      }
    }function ob() {
      rc();if (C) {
        C = g;a.$GetNow();a.$RemoveEvent(e, "mousemove", Db);a.$RemoveEvent(e, "touchmove", Db);M = H;z.$Stop();var b = w.$GetPosition();n.$TriggerEvent(f.$EVT_DRAG_END, s(b), b, s(G), G);E & 12 && Ob();dc(c);
      }
    }function jc(c) {
      if (M) {
        a.$StopEvent(c);var b = a.$EvtSrc(c);while (b && v !== b) {
          b.tagName == "A" && a.$CancelEvent(c);try {
            b = b.parentNode;
          } catch (d) {
            break;
          }
        }
      }
    }function nc(a) {
      D[t];t = s(a);vb = D[t];Tb(a);return t;
    }function Fc(a, b) {
      x = 0;nc(a);n.$TriggerEvent(f.$EVT_PARK, s(a), b);
    }function Tb(b, c) {
      N = b;a.$Each(P, function (a) {
        a.$SetCurrentIndex(s(b), b, c);
      });
    }function uc() {
      var b = f.$DragRegistry || 0,
          a = Y;if (lb) a & 1 && (a &= 1);f.$DragRegistry |= a;return K = a & ~b;
    }function rc() {
      if (K) {
        f.$DragRegistry &= ~Y;K = 0;
      }
    }function Wb() {
      var b = a.$CreateDiv();a.$SetStyles(b, S);a.$CssPosition(b, "absolute");return b;
    }function s(a) {
      return (a % r + r) % r;
    }function kc(d, c) {
      var a = d;if (c) {
        if (!A) {
          a = b.min(b.max(a + N, 0), r - u);c = g;
        } else if (A & 2) {
          a = s(a + N);c = g;
        }
      } else if (A) a = n.$GetVirtualIndex(a);pb(a, p.$SlideDuration, c);
    }function zb() {
      a.$Each(P, function (a) {
        a.$Show(a.$Options.$ChanceToShow <= F);
      });
    }function hc() {
      if (!F) {
        F = 1;zb();if (!C) {
          E & 12 && dc();E & 3 && D[t].$TryActivate();
        }
      }
    }function gc() {
      if (F) {
        F = 0;zb();C || !(E & 12) || fc();
      }
    }function ic() {
      S = { $Width: J, $Height: I, $Top: 0, $Left: 0 };a.$Each(V, function (b) {
        a.$SetStyles(b, S);a.$CssPosition(b, "absolute");a.$CssOverflow(b, "hidden");a.$HideElement(b);
      });a.$SetStyles(db, S);
    }function nb(b, a) {
      pb(b, a, c);
    }function pb(f, e, k) {
      if (Qb && (!C && (F || !(E & 12)) || p.$NaviQuitDrag)) {
        Q = c;C = g;z.$Stop();if (e == j) e = Ub;var d = Eb.$GetPosition_Display(),
            a = f;if (k) {
          a = d + f;if (f > 0) a = b.ceil(a);else a = b.floor(a);
        }if (A & 2) a = s(a);if (!(A & 1)) a = b.max(0, b.min(a, r - u));var i = (a - d) % r;a = d + i;var h = d == a ? 0 : e * b.abs(i);h = b.min(h, e * u * 1.5);z.$PlayCarousel(d, a, h || 1);
      }
    }n.$PlayTo = pb;n.$GoTo = function (a) {
      w.$GoToPosition(a);
    };n.$Next = function () {
      nb(1);
    };n.$Prev = function () {
      nb(-1);
    };n.$Pause = function () {
      R = g;
    };n.$Play = function () {
      if (!R) {
        R = c;D[t] && D[t].$TryActivate();
      }
    };n.$SetSlideshowTransitions = function (a) {
      p.$SlideshowOptions.$Transitions = a;
    };n.$SetCaptionTransitions = function (b) {
      L.$CaptionTransitions = b;L.$Version = a.$GetNow();
    };n.$SlidesCount = function () {
      return V.length;
    };n.$CurrentIndex = function () {
      return t;
    };n.$IsAutoPlaying = function () {
      return R;
    };n.$IsDragging = function () {
      return C;
    };n.$IsSliding = function () {
      return Q;
    };n.$IsMouseOver = function () {
      return !F;
    };n.$LastDragSucceded = function () {
      return M;
    };function X() {
      return a.$CssWidth(y || q);
    }function kb() {
      return a.$CssHeight(y || q);
    }n.$OriginalWidth = n.$GetOriginalWidth = X;n.$OriginalHeight = n.$GetOriginalHeight = kb;function Gb(c, d) {
      if (c == j) return a.$CssWidth(q);if (!y) {
        var b = a.$CreateDiv(e);a.$ClassName(b, a.$ClassName(q));a.$CssCssText(b, a.$CssCssText(q));a.$CssDisplay(b, "block");a.$CssPosition(b, "relative");a.$CssTop(b, 0);a.$CssLeft(b, 0);a.$CssOverflow(b, "visible");y = a.$CreateDiv(e);a.$CssPosition(y, "absolute");a.$CssTop(y, 0);a.$CssLeft(y, 0);a.$CssWidth(y, a.$CssWidth(q));a.$CssHeight(y, a.$CssHeight(q));a.$SetStyleTransformOrigin(y, "0 0");a.$AppendChild(y, b);var h = a.$Children(q);a.$AppendChild(q, y);a.$Css(q, "backgroundImage", "");a.$Each(h, function (c) {
          a.$AppendChild(a.$AttributeEx(c, "noscale") ? q : b, c);
        });
      }Z = c / (d ? a.$CssHeight : a.$CssWidth)(y);a.$CssScale(y, Z);var g = d ? Z * X() : c,
          f = d ? c : Z * kb();a.$CssWidth(q, g);a.$CssHeight(q, f);a.$Each(P, function (a) {
        a.$Relocate(g, f);
      });
    }n.$ScaleHeight = n.$GetScaleHeight = function (b) {
      if (b == j) return a.$CssHeight(q);Gb(b, c);
    };n.$ScaleWidth = n.$SetScaleWidth = n.$GetScaleWidth = Gb;n.$GetVirtualIndex = function (a) {
      var d = b.ceil(s(hb / ac)),
          c = s(a - N + d);if (c > u) {
        if (a - N > r / 2) a -= r;else if (a - N <= -r / 2) a += r;
      } else a = N + c - d;return a;
    };l.call(n);n.$Elmt = q = a.$GetElement(q);var p = a.$Extend({ $FillMode: 0, $LazyLoading: 1, $StartIndex: 0, $AutoPlay: g, $Loop: 1, $HWA: c, $NaviQuitDrag: c, $AutoPlaySteps: 1, $AutoPlayInterval: 3e3, $PauseOnHover: 1, $SlideDuration: 500, $SlideEasing: d.$EaseOutQuad, $MinDragOffsetToSlide: 20, $SlideSpacing: 0, $DisplayPieces: 1, $ParkingPosition: 0, $UISearchMode: 1, $PlayOrientation: 1, $DragOrientation: 1 }, ec);if (p.$Idle != j) p.$AutoPlayInterval = p.$Idle;if (p.$Cols != j) p.$DisplayPieces = p.$Cols;var ib = p.$PlayOrientation & 3,
        vc = (p.$PlayOrientation & 4) / -4 || 1,
        fb = p.$SlideshowOptions,
        L = a.$Extend({ $Class: o, $PlayInMode: 1, $PlayOutMode: 1 }, p.$CaptionSliderOptions),
        sb = p.$BulletNavigatorOptions,
        W = p.$ArrowNavigatorOptions,
        bb = p.$ThumbnailNavigatorOptions,
        T = !p.$UISearchMode,
        y,
        v = a.$FindChild(q, "slides", T),
        db = a.$FindChild(q, "loading", T) || a.$CreateDiv(e),
        Jb = a.$FindChild(q, "navigator", T),
        bc = a.$FindChild(q, "arrowleft", T),
        Zb = a.$FindChild(q, "arrowright", T),
        Hb = a.$FindChild(q, "thumbnavigator", T),
        mc = a.$CssWidth(v),
        lc = a.$CssHeight(v),
        S,
        V = [],
        wc = a.$Children(v);a.$Each(wc, function (b) {
      if (b.tagName == "DIV" && !a.$AttributeEx(b, "u")) V.push(b);else a.$IsBrowserIe9Earlier() && a.$CssZIndex(b, (a.$CssZIndex(b) || 0) + 1);
    });var t = -1,
        N,
        vb,
        r = V.length,
        J = p.$SlideWidth || mc,
        I = p.$SlideHeight || lc,
        Vb = p.$SlideSpacing,
        Bb = J + Vb,
        Cb = I + Vb,
        ac = ib & 1 ? Bb : Cb,
        u = b.min(p.$DisplayPieces, r),
        jb,
        x,
        K,
        Ab,
        P = [],
        Pb,
        Rb,
        Nb,
        cc,
        Ec,
        R,
        E = p.$PauseOnHover,
        oc = p.$AutoPlayInterval,
        Ub = p.$SlideDuration,
        tb,
        eb,
        hb,
        Qb = u < r,
        A = Qb ? p.$Loop : 0,
        Y,
        M,
        F = 1,
        Q,
        C,
        U,
        wb = 0,
        xb = 0,
        H,
        cb,
        gb,
        Eb,
        w,
        ab,
        z,
        Sb = new qc(),
        Z;R = p.$AutoPlay;n.$Options = ec;ic();a.$Attribute(q, "jssor-slider", c);a.$CssZIndex(v, a.$CssZIndex(v) || 0);a.$CssPosition(v, "absolute");jb = a.$CloneNode(v, c);a.$InsertBefore(jb, v);if (fb) {
      cc = fb.$ShowLink;tb = fb.$Class;eb = u == 1 && r > 1 && tb && (!a.$IsBrowserIE() || a.$BrowserVersion() >= 8);
    }hb = eb || u >= r || !(A & 1) ? 0 : p.$ParkingPosition;Y = (u > 1 || hb ? ib : -1) & p.$DragOrientation;var yb = v,
        D = [],
        B,
        O,
        Fb = a.$Device(),
        lb = Fb.$Touchable,
        G,
        rb,
        Kb,
        ub;Fb.$TouchActionAttr && a.$Css(yb, Fb.$TouchActionAttr, [i, "pan-y", "pan-x", "none"][Y] || "");ab = new Bc();if (eb) B = new tb(Sb, J, I, fb, lb);a.$AppendChild(jb, ab.$Wrapper);a.$CssOverflow(v, "hidden");O = Wb();a.$Css(O, "backgroundColor", "#000");a.$CssOpacity(O, 0);a.$InsertBefore(O, yb.firstChild, yb);for (var qb = 0; qb < V.length; qb++) {
      var yc = V[qb],
          Ac = new zc(yc, qb);D.push(Ac);
    }a.$HideElement(db);Eb = new Cc();z = new pc(Eb, ab);if (Y) {
      a.$AddEvent(v, "mousedown", Xb);a.$AddEvent(v, "touchstart", tc);a.$AddEvent(v, "dragstart", Ib);a.$AddEvent(v, "selectstart", Ib);a.$AddEvent(e, "mouseup", ob);a.$AddEvent(e, "touchend", ob);a.$AddEvent(e, "touchcancel", ob);a.$AddEvent(h, "blur", ob);
    }E &= lb ? 10 : 5;if (Jb && sb) {
      Pb = new sb.$Class(Jb, sb, X(), kb());P.push(Pb);
    }if (W && bc && Zb) {
      W.$Loop = A;W.$DisplayPieces = u;Rb = new W.$Class(bc, Zb, W, X(), kb());P.push(Rb);
    }if (Hb && bb) {
      bb.$StartIndex = p.$StartIndex;Nb = new bb.$Class(Hb, bb);P.push(Nb);
    }a.$Each(P, function (a) {
      a.$Reset(r, D, db);a.$On(m.$NAVIGATIONREQUEST, kc);
    });Gb(X());a.$AddEvent(v, "click", jc);a.$AddEvent(q, "mouseout", a.$MouseOverOutFilter(hc, q));a.$AddEvent(q, "mouseover", a.$MouseOverOutFilter(gc, q));zb();p.$ArrowKeyNavigation && a.$AddEvent(e, "keydown", function (a) {
      if (a.keyCode == 37) nb(-1);else a.keyCode == 39 && nb(1);
    });var mb = p.$StartIndex;if (!(A & 1)) mb = b.max(0, b.min(mb, r - u));z.$PlayCarousel(mb, mb, 0);
  };h.$JssorSlideo$ = f;f.$EVT_CLICK = 21;f.$EVT_DRAG_START = 22;f.$EVT_DRAG_END = 23;f.$EVT_SWIPE_START = 24;f.$EVT_SWIPE_END = 25;f.$EVT_LOAD_START = 26;f.$EVT_LOAD_END = 27;f.$EVT_FREEZE = 28;f.$EVT_POSITION_CHANGE = 202;f.$EVT_PARK = 203;f.$EVT_SLIDESHOW_START = 206;f.$EVT_SLIDESHOW_END = 207;f.$EVT_PROGRESS_CHANGE = 208;f.$EVT_STATE_CHANGE = 209;f.$EVT_ROLLBACK_START = 210;f.$EVT_ROLLBACK_END = 211;var m = { $NAVIGATIONREQUEST: 1, $INDEXCHANGE: 2, $RESET: 3 };h.$JssorBulletNavigator$ = function (d, D) {
    var f = this;l.call(f);d = a.$GetElement(d);var t,
        u,
        s,
        r,
        n = 0,
        e,
        o,
        k,
        y,
        z,
        j,
        h,
        q,
        p,
        C = [],
        A = [];function x(a) {
      a != -1 && A[a].$Selected(a == n);
    }function v(a) {
      f.$TriggerEvent(m.$NAVIGATIONREQUEST, a * o);
    }f.$Elmt = d;f.$GetCurrentIndex = function () {
      return r;
    };f.$SetCurrentIndex = function (a) {
      if (a != r) {
        var d = n,
            c = b.floor(a / o);n = c;r = a;x(d);x(c);
      }
    };f.$Show = function (b) {
      a.$ShowElement(d, b);
    };var B;f.$Relocate = function (f, b) {
      if (!B || e.$Scale == g) {
        var f = a.$ParentNode(d).clientWidth,
            b = a.$ParentNode(d).clientHeight;e.$AutoCenter & 1 && a.$CssLeft(d, (f - u) / 2);e.$AutoCenter & 2 && a.$CssTop(d, (b - s) / 2);B = c;
      }
    };var w;f.$Reset = function (D) {
      if (!w) {
        t = b.ceil(D / o);n = 0;var m = q + y,
            r = p + z,
            l = b.ceil(t / k) - 1;u = q + m * (!j ? l : k - 1);s = p + r * (j ? l : k - 1);a.$CssWidth(d, u);a.$CssHeight(d, s);for (var f = 0; f < t; f++) {
          var B = a.$CreateSpan();a.$InnerText(B, f + 1);var g = a.$BuildElement(h, "numbertemplate", B, c);a.$CssPosition(g, "absolute");var x = f % (l + 1);a.$CssLeft(g, !j ? m * x : f % k * m);a.$CssTop(g, j ? r * x : b.floor(f / (l + 1)) * r);a.$AppendChild(d, g);C[f] = g;e.$ActionMode & 1 && a.$AddEvent(g, "click", a.$CreateCallback(i, v, f));e.$ActionMode & 2 && a.$AddEvent(g, "mouseover", a.$MouseOverOutFilter(a.$CreateCallback(i, v, f), g));A[f] = a.$Buttonize(g);
        }w = c;
      }
    };f.$Options = e = a.$Extend({ $SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1 }, D);h = a.$FindChild(d, "prototype");q = a.$CssWidth(h);p = a.$CssHeight(h);a.$RemoveElement(h, d);o = e.$Steps || 1;k = e.$Lanes || 1;y = e.$SpacingX;z = e.$SpacingY;j = e.$Orientation - 1;e.$Scale == g && a.$Attribute(d, "noscale", c);
  };h.$JssorArrowNavigator$ = function (b, f, j) {
    var d = this;l.call(d);var u,
        t,
        e,
        h,
        k,
        q = a.$CssWidth(b),
        o = a.$CssHeight(b);function n(a) {
      d.$TriggerEvent(m.$NAVIGATIONREQUEST, a, c);
    }function r(c) {
      a.$ShowElement(b, c || !j.$Loop && e == 0);a.$ShowElement(f, c || !j.$Loop && e >= t - j.$DisplayPieces);u = c;
    }d.$GetCurrentIndex = function () {
      return e;
    };d.$SetCurrentIndex = function (b, a, c) {
      if (c) e = a;else {
        e = b;r(u);
      }
    };d.$Show = r;var s;d.$Relocate = function (i, d) {
      if (!s || h.$Scale == g) {
        var e = a.$ParentNode(b).clientWidth,
            d = a.$ParentNode(b).clientHeight;if (h.$AutoCenter & 1) {
          a.$CssLeft(b, (e - q) / 2);a.$CssLeft(f, (e - q) / 2);
        }if (h.$AutoCenter & 2) {
          a.$CssTop(b, (d - o) / 2);a.$CssTop(f, (d - o) / 2);
        }s = c;
      }
    };var p;d.$Reset = function (d) {
      t = d;e = 0;if (!p) {
        a.$AddEvent(b, "click", a.$CreateCallback(i, n, -k));a.$AddEvent(f, "click", a.$CreateCallback(i, n, k));a.$Buttonize(b);a.$Buttonize(f);p = c;
      }
    };d.$Options = h = a.$Extend({ $Steps: 1 }, j);k = h.$Steps;if (h.$Scale == g) {
      a.$Attribute(b, "noscale", c);a.$Attribute(f, "noscale", c);
    }
  };h.$JssorThumbnailNavigator$ = function (k, C) {
    var h = this,
        z,
        q,
        d,
        w = [],
        A,
        y,
        n,
        r,
        s,
        u,
        t,
        p,
        v,
        e,
        o;l.call(h);k = a.$GetElement(k);function B(l, e) {
      var f = this,
          b,
          k,
          j;function n() {
        k.$Selected(q == e);
      }function g(a) {
        (a || !v.$LastDragSucceded()) && h.$TriggerEvent(m.$NAVIGATIONREQUEST, e);
      }f.$Index = e;f.$Highlight = n;j = l.$Thumb || l.$Image || a.$CreateDiv();f.$Wrapper = b = a.$BuildElement(o, "thumbnailtemplate", j, c);k = a.$Buttonize(b);d.$ActionMode & 1 && a.$AddEvent(b, "click", a.$CreateCallback(i, g, 0));d.$ActionMode & 2 && a.$AddEvent(b, "mouseover", a.$MouseOverOutFilter(a.$CreateCallback(i, g, 1), b));
    }h.$GetCurrentIndex = function () {
      return q;
    };h.$SetCurrentIndex = function (c, d, e) {
      var a = q;q = c;a != -1 && w[a].$Highlight();w[c].$Highlight();!e && v.$PlayTo(v.$GetVirtualIndex(b.floor(d / n)));
    };h.$Show = function (b) {
      a.$ShowElement(k, b);
    };h.$Relocate = a.$EmptyFunction;var x;h.$Reset = function (F, C) {
      if (!x) {
        z = F;b.ceil(z / n);q = -1;p = b.min(p, C.length);var h = d.$Orientation & 1,
            l = u + (u + r) * (n - 1) * (1 - h),
            j = t + (t + s) * (n - 1) * h,
            o = l + (l + r) * (p - 1) * h,
            m = j + (j + s) * (p - 1) * (1 - h);a.$CssPosition(e, "absolute");a.$CssOverflow(e, "hidden");d.$AutoCenter & 1 && a.$CssLeft(e, (A - o) / 2);d.$AutoCenter & 2 && a.$CssTop(e, (y - m) / 2);a.$CssWidth(e, o);a.$CssHeight(e, m);var i = [];a.$Each(C, function (k, f) {
          var g = new B(k, f),
              d = g.$Wrapper,
              c = b.floor(f / n),
              j = f % n;a.$CssLeft(d, (u + r) * j * (1 - h));a.$CssTop(d, (t + s) * j * h);if (!i[c]) {
            i[c] = a.$CreateDiv();a.$AppendChild(e, i[c]);
          }a.$AppendChild(i[c], d);w.push(g);
        });var E = a.$Extend({ $HWA: g, $AutoPlay: g, $NaviQuitDrag: g, $SlideWidth: l, $SlideHeight: j, $SlideSpacing: r * h + s * (1 - h), $MinDragOffsetToSlide: 12, $SlideDuration: 200, $PauseOnHover: 1, $PlayOrientation: d.$Orientation, $DragOrientation: d.$DisableDrag ? 0 : d.$Orientation }, d);v = new f(k, E);x = c;
      }
    };h.$Options = d = a.$Extend({ $SpacingX: 3, $SpacingY: 3, $DisplayPieces: 1, $Orientation: 1, $AutoCenter: 3, $ActionMode: 1 }, C);if (d.$Rows != j) d.$Lanes = d.$Rows;A = a.$CssWidth(k);y = a.$CssHeight(k);e = a.$FindChild(k, "slides", c);o = a.$FindChild(e, "prototype");u = a.$CssWidth(o);t = a.$CssHeight(o);a.$RemoveElement(o, e);n = d.$Lanes || 1;r = d.$SpacingX;s = d.$SpacingY;p = d.$DisplayPieces;d.$Scale == g && a.$Attribute(k, "noscale", c);
  };function o() {
    k.call(this, 0, 0);this.$Revert = a.$EmptyFunction;
  }h.$JssorCaptionSlider$ = function (p, h, f) {
    var c = this,
        g,
        n = f ? h.$PlayInMode : h.$PlayOutMode,
        e = h.$CaptionTransitions,
        o = { $Transition: "t", $Delay: "d", $Duration: "du", x: "x", y: "y", $Rotate: "r", $Zoom: "z", $Opacity: "f", $BeginTime: "b" },
        d = { $Default: function $Default(b, a) {
        if (!isNaN(a.$Value)) b = a.$Value;else b *= a.$Percent;return b;
      }, $Opacity: function $Opacity(b, a) {
        return this.$Default(b - 1, a);
      } };d.$Zoom = d.$Opacity;k.call(c, 0, 0);function l(r, m) {
      var k = [],
          i,
          j = [],
          c = [];function h(c, d) {
        var b = {};a.$Each(o, function (g, h) {
          var e = a.$AttributeEx(c, g + (d || ""));if (e) {
            var f = {};if (g == "t") f.$Value = e;else if (e.indexOf("%") + 1) f.$Percent = a.$ParseFloat(e) / 100;else f.$Value = a.$ParseFloat(e);b[h] = f;
          }
        });return b;
      }function p() {
        return e[b.floor(b.random() * e.length)];
      }function g(f) {
        var h;if (f == "*") h = p();else if (f) {
          var d = e[a.$ParseInt(f)] || e[f];if (a.$IsArray(d)) {
            if (f != i) {
              i = f;c[f] = 0;j[f] = d[b.floor(b.random() * d.length)];
            } else c[f]++;d = j[f];if (a.$IsArray(d)) {
              d = d.length && d[c[f] % d.length];if (a.$IsArray(d)) d = d[b.floor(b.random() * d.length)];
            }
          }h = d;if (a.$IsString(h)) h = g(h);
        }return h;
      }var q = a.$Children(r);a.$Each(q, function (b) {
        var c = [];c.$Elmt = b;var e = a.$AttributeEx(b, "u") == "caption";a.$Each(f ? [0, 3] : [2], function (k, o) {
          if (e) {
            var j, f;if (k != 2 || !a.$AttributeEx(b, "t3")) {
              f = h(b, k);if (k == 2 && !f.$Transition) {
                f.$Delay = f.$Delay || { $Value: 0 };f = a.$Extend(h(b, 0), f);
              }
            }if (f && f.$Transition) {
              j = g(f.$Transition.$Value);if (j) {
                var i = a.$Extend({ $Delay: 0 }, j);a.$Each(f, function (c, a) {
                  var b = (d[a] || d.$Default).apply(d, [i[a], f[a]]);if (!isNaN(b)) i[a] = b;
                });if (!o) if (f.$BeginTime) i.$BeginTime = f.$BeginTime.$Value || 0;else if (n & 2) i.$BeginTime = 0;
              }
            }c.push(i);
          }if (m % 2 && !o) c.$Children = l(b, m + 1);
        });k.push(c);
      });return k;
    }function m(w, c, z) {
      var g = { $Easing: c.$Easing, $Round: c.$Round, $During: c.$During, $Reverse: f && !z },
          m = w,
          r = a.$ParentNode(w),
          l = a.$CssWidth(m),
          j = a.$CssHeight(m),
          y = a.$CssWidth(r),
          x = a.$CssHeight(r),
          h = {},
          e = {},
          i = c.$ScaleClip || 1;if (c.$Opacity) e.$Opacity = 1 - c.$Opacity;g.$OriginalWidth = l;g.$OriginalHeight = j;if (c.$Zoom || c.$Rotate) {
        e.$Zoom = (c.$Zoom || 2) - 2;if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera()) e.$Zoom = b.min(e.$Zoom, 1);h.$Zoom = 1;var B = c.$Rotate || 0;e.$Rotate = B * 360;h.$Rotate = 0;
      } else if (c.$Clip) {
        var s = { $Top: 0, $Right: l, $Bottom: j, $Left: 0 },
            v = a.$Extend({}, s),
            d = v.$Offset = {},
            u = c.$Clip & 4,
            p = c.$Clip & 8,
            t = c.$Clip & 1,
            q = c.$Clip & 2;if (u && p) {
          d.$Top = j / 2 * i;d.$Bottom = -d.$Top;
        } else if (u) d.$Bottom = -j * i;else if (p) d.$Top = j * i;if (t && q) {
          d.$Left = l / 2 * i;d.$Right = -d.$Left;
        } else if (t) d.$Right = -l * i;else if (q) d.$Left = l * i;g.$Move = c.$Move;e.$Clip = v;h.$Clip = s;
      }var n = 0,
          o = 0;if (c.x) n -= y * c.x;if (c.y) o -= x * c.y;if (n || o || g.$Move) {
        e.$Left = n;e.$Top = o;
      }var A = c.$Duration;h = a.$Extend(h, a.$GetStyles(m, e));g.$Setter = a.$StyleSetterEx();return new k(c.$Delay, A, g, m, h, e);
    }function i(b, d) {
      a.$Each(d, function (a) {
        var e,
            h = a.$Elmt,
            d = a[0],
            k = a[1];if (d) {
          e = m(h, d);b = e.$Locate(d.$BeginTime == j ? b : d.$BeginTime, 1);
        }b = i(b, a.$Children);if (k) {
          var f = m(h, k, 1);f.$Locate(b, 1);c.$Combine(f);g.$Combine(f);
        }e && c.$Combine(e);
      });return b;
    }c.$Revert = function () {
      c.$GoToPosition(c.$GetPosition_OuterEnd() * (f || 0));g.$GoToPosition(0);
    };g = new k(0, 0);i(0, n ? l(p, 1) : []);
  };
})(window, document, Math, null, true, false);
jQuery(document).ready(function ($) {

  var _CaptionTransitions = [];
  _CaptionTransitions["L"] = { $Duration: 900, x: 0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
  _CaptionTransitions["R"] = { $Duration: 900, x: -0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
  _CaptionTransitions["T"] = { $Duration: 900, y: 0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
  _CaptionTransitions["B"] = { $Duration: 900, y: -0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
  _CaptionTransitions["ZMF|10"] = { $Duration: 900, $Zoom: 11, $Easing: { $Zoom: $JssorEasing$.$EaseOutQuad, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 };
  _CaptionTransitions["RTT|10"] = { $Duration: 900, $Zoom: 11, $Rotate: 1, $Easing: { $Zoom: $JssorEasing$.$EaseOutQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
  _CaptionTransitions["RTT|2"] = { $Duration: 900, $Zoom: 3, $Rotate: 1, $Easing: { $Zoom: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
  _CaptionTransitions["RTTL|BR"] = { $Duration: 900, x: -0.6, y: -0.6, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
  _CaptionTransitions["CLIP|LR"] = { $Duration: 900, $Clip: 15, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };
  _CaptionTransitions["MCLIP|L"] = { $Duration: 900, $Clip: 1, $Move: true, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic } };
  _CaptionTransitions["MCLIP|R"] = { $Duration: 900, $Clip: 2, $Move: true, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic } };

  var options = {
    $FillMode: 2, //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
    $AutoPlay: true, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
    $AutoPlayInterval: 5000, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
    $PauseOnHover: 1, //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

    $ArrowKeyNavigation: true, //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
    $SlideEasing: $JssorEasing$.$EaseOutQuint, //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
    $SlideDuration: 800, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
    $MinDragOffsetToSlide: 20, //[Optional] Minimum drag offset to trigger slide , default value is 20
    //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
    //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
    $SlideSpacing: 0, //[Optional] Space between each slide in pixels, default value is 0
    $DisplayPieces: 1, //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
    $ParkingPosition: 0, //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
    $UISearchMode: 1, //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
    $PlayOrientation: 1, //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
    $DragOrientation: 1, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

    $CaptionSliderOptions: { //[Optional] Options which specifies how to animate caption
      $Class: $JssorCaptionSlider$, //[Required] Class to create instance to animate caption
      $CaptionTransitions: _CaptionTransitions, //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
      $PlayInMode: 1, //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
      $PlayOutMode: 3 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
    },

    $BulletNavigatorOptions: { //[Optional] Options to specify and enable navigator or not
      $Class: $JssorBulletNavigator$, //[Required] Class to create navigator instance
      $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
      $AutoCenter: 1, //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
      $Steps: 1, //[Optional] Steps to go for each navigation request, default value is 1
      $Lanes: 1, //[Optional] Specify lanes to arrange items, default value is 1
      $SpacingX: 8, //[Optional] Horizontal space between each item in pixel, default value is 0
      $SpacingY: 8, //[Optional] Vertical space between each item in pixel, default value is 0
      $Orientation: 1 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
    },

    $ArrowNavigatorOptions: { //[Optional] Options to specify and enable arrow navigator or not
      $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
      $ChanceToShow: 1, //[Required] 0 Never, 1 Mouse Over, 2 Always
      $AutoCenter: 2, //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
      $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
    }
  };

  var jssor_slider1 = new $JssorSlider$("slider1_container", options);

  //responsive code begin
  //you can remove responsive code if you don't want the slider scales while window resizes
  function ScaleSlider() {
    var bodyWidth = document.body.clientWidth;
    if (bodyWidth) jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));else window.setTimeout(ScaleSlider, 30);
  }
  ScaleSlider();

  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  //responsive code end
});
/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

(function (window, document) {

  'use strict';

  /* exported features */

  var features = {
    bind: !!function () {}.bind,
    classList: 'classList' in document.documentElement,
    rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

  /**
   * Handles debouncing of events via requestAnimationFrame
   * @see http://www.html5rocks.com/en/tutorials/speed/animations/
   * @param {Function} callback The callback to handle whichever event
   */
  function Debouncer(callback) {
    this.callback = callback;
    this.ticking = false;
  }
  Debouncer.prototype = {
    constructor: Debouncer,

    /**
     * dispatches the event to the supplied callback
     * @private
     */
    update: function update() {
      this.callback && this.callback();
      this.ticking = false;
    },

    /**
     * ensures events don't get stacked
     * @private
     */
    requestTick: function requestTick() {
      if (!this.ticking) {
        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
        this.ticking = true;
      }
    },

    /**
     * Attach this as the event listeners
     */
    handleEvent: function handleEvent() {
      this.requestTick();
    }
  };
  /**
   * Check if object is part of the DOM
   * @constructor
   * @param {Object} obj element to check
   */
  function isDOMElement(obj) {
    return obj && typeof window !== 'undefined' && (obj === window || obj.nodeType);
  }

  /**
   * Helper function for extending objects
   */
  function extend(object /*, objectN ... */) {
    if (arguments.length <= 0) {
      throw new Error('Missing arguments in extend function');
    }

    var result = object || {},
        key,
        i;

    for (i = 1; i < arguments.length; i++) {
      var replacement = arguments[i] || {};

      for (key in replacement) {
        // Recurse into object except if the object is a DOM element
        if (_typeof(result[key]) === 'object' && !isDOMElement(result[key])) {
          result[key] = extend(result[key], replacement[key]);
        } else {
          result[key] = result[key] || replacement[key];
        }
      }
    }

    return result;
  }

  /**
   * Helper function for normalizing tolerance option to object format
   */
  function normalizeTolerance(t) {
    return t === Object(t) ? t : { down: t, up: t };
  }

  /**
   * UI enhancement for fixed headers.
   * Hides header when scrolling down
   * Shows header when scrolling up
   * @constructor
   * @param {DOMElement} elem the header element
   * @param {Object} options options for the widget
   */
  function Headroom(elem, options) {
    options = extend(options, Headroom.options);

    this.lastKnownScrollY = 0;
    this.elem = elem;
    this.debouncer = new Debouncer(this.update.bind(this));
    this.tolerance = normalizeTolerance(options.tolerance);
    this.classes = options.classes;
    this.offset = options.offset;
    this.scroller = options.scroller;
    this.initialised = false;
    this.onPin = options.onPin;
    this.onUnpin = options.onUnpin;
    this.onTop = options.onTop;
    this.onNotTop = options.onNotTop;
  }
  Headroom.prototype = {
    constructor: Headroom,

    /**
     * Initialises the widget
     */
    init: function init() {
      if (!Headroom.cutsTheMustard) {
        return;
      }

      this.elem.classList.add(this.classes.initial);

      // defer event registration to handle browser
      // potentially restoring previous scroll position
      setTimeout(this.attachEvent.bind(this), 100);

      return this;
    },

    /**
     * Unattaches events and removes any classes that were added
     */
    destroy: function destroy() {
      var classes = this.classes;

      this.initialised = false;
      this.elem.classList.remove(classes.unpinned, classes.pinned, classes.top, classes.initial);
      this.scroller.removeEventListener('scroll', this.debouncer, false);
    },

    /**
     * Attaches the scroll event
     * @private
     */
    attachEvent: function attachEvent() {
      if (!this.initialised) {
        this.lastKnownScrollY = this.getScrollY();
        this.initialised = true;
        this.scroller.addEventListener('scroll', this.debouncer, false);

        this.debouncer.handleEvent();
      }
    },

    /**
     * Unpins the header if it's currently pinned
     */
    unpin: function unpin() {
      var classList = this.elem.classList,
          classes = this.classes;

      if (classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {
        classList.add(classes.unpinned);
        classList.remove(classes.pinned);
        this.onUnpin && this.onUnpin.call(this);
      }
    },

    /**
     * Pins the header if it's currently unpinned
     */
    pin: function pin() {
      var classList = this.elem.classList,
          classes = this.classes;

      if (classList.contains(classes.unpinned)) {
        classList.remove(classes.unpinned);
        classList.add(classes.pinned);
        this.onPin && this.onPin.call(this);
      }
    },

    /**
     * Handles the top states
     */
    top: function top() {
      var classList = this.elem.classList,
          classes = this.classes;

      if (!classList.contains(classes.top)) {
        classList.add(classes.top);
        classList.remove(classes.notTop);
        this.onTop && this.onTop.call(this);
      }
    },

    /**
     * Handles the not top state
     */
    notTop: function notTop() {
      var classList = this.elem.classList,
          classes = this.classes;

      if (!classList.contains(classes.notTop)) {
        classList.add(classes.notTop);
        classList.remove(classes.top);
        this.onNotTop && this.onNotTop.call(this);
      }
    },

    /**
     * Gets the Y scroll position
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
     * @return {Number} pixels the page has scrolled along the Y-axis
     */
    getScrollY: function getScrollY() {
      return this.scroller.pageYOffset !== undefined ? this.scroller.pageYOffset : this.scroller.scrollTop !== undefined ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },

    /**
     * Gets the height of the viewport
     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
     * @return {int} the height of the viewport in pixels
     */
    getViewportHeight: function getViewportHeight() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    },

    /**
     * Gets the height of the document
     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
     * @return {int} the height of the document in pixels
     */
    getDocumentHeight: function getDocumentHeight() {
      var body = document.body,
          documentElement = document.documentElement;

      return Math.max(body.scrollHeight, documentElement.scrollHeight, body.offsetHeight, documentElement.offsetHeight, body.clientHeight, documentElement.clientHeight);
    },

    /**
     * Gets the height of the DOM element
     * @param  {Object}  elm the element to calculate the height of which
     * @return {int}     the height of the element in pixels
     */
    getElementHeight: function getElementHeight(elm) {
      return Math.max(elm.scrollHeight, elm.offsetHeight, elm.clientHeight);
    },

    /**
     * Gets the height of the scroller element
     * @return {int} the height of the scroller element in pixels
     */
    getScrollerHeight: function getScrollerHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    },

    /**
     * determines if the scroll position is outside of document boundaries
     * @param  {int}  currentScrollY the current y scroll position
     * @return {bool} true if out of bounds, false otherwise
     */
    isOutOfBounds: function isOutOfBounds(currentScrollY) {
      var pastTop = currentScrollY < 0,
          pastBottom = currentScrollY + this.getViewportHeight() > this.getScrollerHeight();

      return pastTop || pastBottom;
    },

    /**
     * determines if the tolerance has been exceeded
     * @param  {int} currentScrollY the current scroll y position
     * @return {bool} true if tolerance exceeded, false otherwise
     */
    toleranceExceeded: function toleranceExceeded(currentScrollY, direction) {
      return Math.abs(currentScrollY - this.lastKnownScrollY) >= this.tolerance[direction];
    },

    /**
     * determine if it is appropriate to unpin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should unpin, false otherwise
     */
    shouldUnpin: function shouldUnpin(currentScrollY, toleranceExceeded) {
      var scrollingDown = currentScrollY > this.lastKnownScrollY,
          pastOffset = currentScrollY >= this.offset;

      return scrollingDown && pastOffset && toleranceExceeded;
    },

    /**
     * determine if it is appropriate to pin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should pin, false otherwise
     */
    shouldPin: function shouldPin(currentScrollY, toleranceExceeded) {
      var scrollingUp = currentScrollY < this.lastKnownScrollY,
          pastOffset = currentScrollY <= this.offset;

      return scrollingUp && toleranceExceeded || pastOffset;
    },

    /**
     * Handles updating the state of the widget
     */
    update: function update() {
      var currentScrollY = this.getScrollY(),
          scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',
          toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);

      if (this.isOutOfBounds(currentScrollY)) {
        // Ignore bouncy scrolling in OSX
        return;
      }

      if (currentScrollY <= this.offset) {
        this.top();
      } else {
        this.notTop();
      }

      if (this.shouldUnpin(currentScrollY, toleranceExceeded)) {
        this.unpin();
      } else if (this.shouldPin(currentScrollY, toleranceExceeded)) {
        this.pin();
      }

      this.lastKnownScrollY = currentScrollY;
    }
  };
  /**
   * Default options
   * @type {Object}
   */
  Headroom.options = {
    tolerance: {
      up: 0,
      down: 0
    },
    offset: 0,
    scroller: window,
    classes: {
      pinned: 'headroom--pinned',
      unpinned: 'headroom--unpinned',
      top: 'headroom--top',
      notTop: 'headroom--not-top',
      initial: 'headroom'
    }
  };
  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;

  window.Headroom = Headroom;
})(window, document);
/**
 * Navbar
 */

var navbar = document.querySelector("nav");
var headroom = new Headroom(navbar);
headroom.init();

var Gem = function Gem(type) {
  _classCallCheck(this, Gem);

  this.type = type;
};
//# sourceMappingURL=main.js.map
