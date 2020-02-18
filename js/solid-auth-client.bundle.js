! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t(require("window"), require("fetch"), require("crypto"), require("TextEncoder")) : "function" == typeof define && define.amd ? define(["window", "fetch", "crypto", "TextEncoder"], t) : "object" == typeof exports ? exports.auth = t(require("window"), require("fetch"), require("crypto"), require("TextEncoder")) : (e.solid = e.solid || {}, e.solid.auth = t(e.window, e.fetch, e.crypto, e.TextEncoder))
}(window, function(e, t, n, r) {
  return function(e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      })
    }, n.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, n.t = function(e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var i in e) n.d(r, i, function(t) {
          return e[t]
        }.bind(null, i));
      return r
    }, n.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 72)
  }([function(e, t) {
    e.exports = function(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }
  }, function(e, t, n) {
    "use strict";
    e.exports = {
      Formats: n(18),
      Initializer: n(19),
      JSONDocument: n(45),
      JSONMapping: n(46),
      JSONPatch: n(20),
      JSONPointer: n(11),
      JSONSchema: n(47),
      Validator: n(21)
    }
  }, function(e, t, n) {
    e.exports = n(48).default, e.exports.default = e.exports
  }, function(e, t, n) {
    "use strict";
    var r = n(12),
      i = n(26),
      o = n(60),
      s = n(61),
      a = n(32),
      u = n(29),
      c = n(31),
      f = n(9),
      l = n(27),
      p = n(30),
      h = n(28);
    e.exports = {
      JWA: r,
      JWK: i,
      JWKSet: o,
      JWT: s,
      JWS: a,
      Base64URLSchema: u,
      JOSEHeaderSchema: c,
      JWKSchema: f,
      JWKSetSchema: l,
      JWTClaimsSetSchema: p,
      JWTSchema: h
    }
  }, function(e, t, n) {
    "use strict";
    (function(e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      var r = n(49),
        i = n(50),
        o = n(51);

      function s() {
        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
      }

      function a(e, t) {
        if (s() < t) throw new RangeError("Invalid typed array length");
        return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
      }

      function u(e, t, n) {
        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, n);
        if ("number" == typeof e) {
          if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
          return l(this, e)
        }
        return c(this, e, t, n)
      }

      function c(e, t, n, r) {
        if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
          if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
          if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
          t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
          u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = p(e, t);
          return e
        }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
          "string" == typeof n && "" !== n || (n = "utf8");
          if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
          var r = 0 | d(t, n),
            i = (e = a(e, r)).write(t, n);
          i !== r && (e = e.slice(0, i));
          return e
        }(e, t, n) : function(e, t) {
          if (u.isBuffer(t)) {
            var n = 0 | h(t.length);
            return 0 === (e = a(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
          }
          if (t) {
            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? a(e, 0) : p(e, t);
            if ("Buffer" === t.type && o(t.data)) return p(e, t.data)
          }
          var r;
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }(e, t)
      }

      function f(e) {
        if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative')
      }

      function l(e, t) {
        if (f(t), e = a(e, t < 0 ? 0 : 0 | h(t)), !u.TYPED_ARRAY_SUPPORT)
          for (var n = 0; n < t; ++n) e[n] = 0;
        return e
      }

      function p(e, t) {
        var n = t.length < 0 ? 0 : 0 | h(t.length);
        e = a(e, n);
        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
        return e
      }

      function h(e) {
        if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
        return 0 | e
      }

      function d(e, t) {
        if (u.isBuffer(e)) return e.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var r = !1;;) switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;
          case "utf8":
          case "utf-8":
          case void 0:
            return q(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * n;
          case "hex":
            return n >>> 1;
          case "base64":
            return B(e).length;
          default:
            if (r) return q(e).length;
            t = ("" + t).toLowerCase(), r = !0
        }
      }

      function y(e, t, n) {
        var r = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
        if ((n >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8");;) switch (e) {
          case "hex":
            return x(this, t, n);
          case "utf8":
          case "utf-8":
            return P(this, t, n);
          case "ascii":
            return A(this, t, n);
          case "latin1":
          case "binary":
            return T(this, t, n);
          case "base64":
            return _(this, t, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return R(this, t, n);
          default:
            if (r) throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), r = !0
        }
      }

      function g(e, t, n) {
        var r = e[t];
        e[t] = e[n], e[n] = r
      }

      function v(e, t, n, r, i) {
        if (0 === e.length) return -1;
        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
          if (i) return -1;
          n = e.length - 1
        } else if (n < 0) {
          if (!i) return -1;
          n = 0
        }
        if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, n, r, i);
        if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : m(e, [t], n, r, i);
        throw new TypeError("val must be string, number or Buffer")
      }

      function m(e, t, n, r, i) {
        var o, s = 1,
          a = e.length,
          u = t.length;
        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
          if (e.length < 2 || t.length < 2) return -1;
          s = 2, a /= 2, u /= 2, n /= 2
        }

        function c(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s)
        }
        if (i) {
          var f = -1;
          for (o = n; o < a; o++)
            if (c(e, o) === c(t, -1 === f ? 0 : o - f)) {
              if (-1 === f && (f = o), o - f + 1 === u) return f * s
            } else -1 !== f && (o -= o - f), f = -1
        } else
          for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
            for (var l = !0, p = 0; p < u; p++)
              if (c(e, o + p) !== c(t, p)) {
                l = !1;
                break
              } if (l) return o
          }
        return -1
      }

      function w(e, t, n, r) {
        n = Number(n) || 0;
        var i = e.length - n;
        r ? (r = Number(r)) > i && (r = i) : r = i;
        var o = t.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        r > o / 2 && (r = o / 2);
        for (var s = 0; s < r; ++s) {
          var a = parseInt(t.substr(2 * s, 2), 16);
          if (isNaN(a)) return s;
          e[n + s] = a
        }
        return s
      }

      function b(e, t, n, r) {
        return H(q(t, e.length - n), e, n, r)
      }

      function O(e, t, n, r) {
        return H(function(e) {
          for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
          return t
        }(t), e, n, r)
      }

      function E(e, t, n, r) {
        return O(e, t, n, r)
      }

      function S(e, t, n, r) {
        return H(B(t), e, n, r)
      }

      function k(e, t, n, r) {
        return H(function(e, t) {
          for (var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
          return o
        }(t, e.length - n), e, n, r)
      }

      function _(e, t, n) {
        return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
      }

      function P(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], i = t; i < n;) {
          var o, s, a, u, c = e[i],
            f = null,
            l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (i + l <= n) switch (l) {
            case 1:
              c < 128 && (f = c);
              break;
            case 2:
              128 == (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (f = u);
              break;
            case 3:
              o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
              break;
            case 4:
              o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u)
          }
          null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), i += l
        }
        return function(e) {
          var t = e.length;
          if (t <= j) return String.fromCharCode.apply(String, e);
          var n = "",
            r = 0;
          for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += j));
          return n
        }(r)
      }
      t.Buffer = u, t.SlowBuffer = function(e) {
        +e != e && (e = 0);
        return u.alloc(+e)
      }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
        try {
          var e = new Uint8Array(1);
          return e.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
              return 42
            }
          }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
        } catch (e) {
          return !1
        }
      }(), t.kMaxLength = s(), u.poolSize = 8192, u._augment = function(e) {
        return e.__proto__ = u.prototype, e
      }, u.from = function(e, t, n) {
        return c(null, e, t, n)
      }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
        value: null,
        configurable: !0
      })), u.alloc = function(e, t, n) {
        return function(e, t, n, r) {
          return f(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
        }(null, e, t, n)
      }, u.allocUnsafe = function(e) {
        return l(null, e)
      }, u.allocUnsafeSlow = function(e) {
        return l(null, e)
      }, u.isBuffer = function(e) {
        return !(null == e || !e._isBuffer)
      }, u.compare = function(e, t) {
        if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
        if (e === t) return 0;
        for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
          if (e[i] !== t[i]) {
            n = e[i], r = t[i];
            break
          } return n < r ? -1 : r < n ? 1 : 0
      }, u.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1
        }
      }, u.concat = function(e, t) {
        if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return u.alloc(0);
        var n;
        if (void 0 === t)
          for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
        var r = u.allocUnsafe(t),
          i = 0;
        for (n = 0; n < e.length; ++n) {
          var s = e[n];
          if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
          s.copy(r, i), i += s.length
        }
        return r
      }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
        var e = this.length;
        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var t = 0; t < e; t += 2) g(this, t, t + 1);
        return this
      }, u.prototype.swap32 = function() {
        var e = this.length;
        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
        return this
      }, u.prototype.swap64 = function() {
        var e = this.length;
        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
        return this
      }, u.prototype.toString = function() {
        var e = 0 | this.length;
        return 0 === e ? "" : 0 === arguments.length ? P(this, 0, e) : y.apply(this, arguments)
      }, u.prototype.equals = function(e) {
        if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e || 0 === u.compare(this, e)
      }, u.prototype.inspect = function() {
        var e = "",
          n = t.INSPECT_MAX_BYTES;
        return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
      }, u.prototype.compare = function(e, t, n, r, i) {
        if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
        if (r >= i && t >= n) return 0;
        if (r >= i) return -1;
        if (t >= n) return 1;
        if (this === e) return 0;
        for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(o, s), c = this.slice(r, i), f = e.slice(t, n), l = 0; l < a; ++l)
          if (c[l] !== f[l]) {
            o = c[l], s = f[l];
            break
          } return o < s ? -1 : s < o ? 1 : 0
      }, u.prototype.includes = function(e, t, n) {
        return -1 !== this.indexOf(e, t, n)
      }, u.prototype.indexOf = function(e, t, n) {
        return v(this, e, t, n, !0)
      }, u.prototype.lastIndexOf = function(e, t, n) {
        return v(this, e, t, n, !1)
      }, u.prototype.write = function(e, t, n, r) {
        if (void 0 === t) r = "utf8", n = this.length, t = 0;
        else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
        else {
          if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
        }
        var i = this.length - t;
        if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");
        for (var o = !1;;) switch (r) {
          case "hex":
            return w(this, e, t, n);
          case "utf8":
          case "utf-8":
            return b(this, e, t, n);
          case "ascii":
            return O(this, e, t, n);
          case "latin1":
          case "binary":
            return E(this, e, t, n);
          case "base64":
            return S(this, e, t, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return k(this, e, t, n);
          default:
            if (o) throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), o = !0
        }
      }, u.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        }
      };
      var j = 4096;

      function A(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
        return r
      }

      function T(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
        return r
      }

      function x(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        for (var i = "", o = t; o < n; ++o) i += J(e[o]);
        return i
      }

      function R(e, t, n) {
        for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        return i
      }

      function I(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
      }

      function C(e, t, n, r, i, o) {
        if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError("Index out of range")
      }

      function N(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
      }

      function U(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
      }

      function D(e, t, n, r, i, o) {
        if (n + r > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range")
      }

      function L(e, t, n, r, o) {
        return o || D(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
      }

      function M(e, t, n, r, o) {
        return o || D(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
      }
      u.prototype.slice = function(e, t) {
        var n, r = this.length;
        if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = u.prototype;
        else {
          var i = t - e;
          n = new u(i, void 0);
          for (var o = 0; o < i; ++o) n[o] = this[o + e]
        }
        return n
      }, u.prototype.readUIntLE = function(e, t, n) {
        e |= 0, t |= 0, n || I(e, t, this.length);
        for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
        return r
      }, u.prototype.readUIntBE = function(e, t, n) {
        e |= 0, t |= 0, n || I(e, t, this.length);
        for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
        return r
      }, u.prototype.readUInt8 = function(e, t) {
        return t || I(e, 1, this.length), this[e]
      }, u.prototype.readUInt16LE = function(e, t) {
        return t || I(e, 2, this.length), this[e] | this[e + 1] << 8
      }, u.prototype.readUInt16BE = function(e, t) {
        return t || I(e, 2, this.length), this[e] << 8 | this[e + 1]
      }, u.prototype.readUInt32LE = function(e, t) {
        return t || I(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
      }, u.prototype.readUInt32BE = function(e, t) {
        return t || I(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
      }, u.prototype.readIntLE = function(e, t, n) {
        e |= 0, t |= 0, n || I(e, t, this.length);
        for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
        return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
      }, u.prototype.readIntBE = function(e, t, n) {
        e |= 0, t |= 0, n || I(e, t, this.length);
        for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
        return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
      }, u.prototype.readInt8 = function(e, t) {
        return t || I(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
      }, u.prototype.readInt16LE = function(e, t) {
        t || I(e, 2, this.length);
        var n = this[e] | this[e + 1] << 8;
        return 32768 & n ? 4294901760 | n : n
      }, u.prototype.readInt16BE = function(e, t) {
        t || I(e, 2, this.length);
        var n = this[e + 1] | this[e] << 8;
        return 32768 & n ? 4294901760 | n : n
      }, u.prototype.readInt32LE = function(e, t) {
        return t || I(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
      }, u.prototype.readInt32BE = function(e, t) {
        return t || I(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
      }, u.prototype.readFloatLE = function(e, t) {
        return t || I(e, 4, this.length), i.read(this, e, !0, 23, 4)
      }, u.prototype.readFloatBE = function(e, t) {
        return t || I(e, 4, this.length), i.read(this, e, !1, 23, 4)
      }, u.prototype.readDoubleLE = function(e, t) {
        return t || I(e, 8, this.length), i.read(this, e, !0, 52, 8)
      }, u.prototype.readDoubleBE = function(e, t) {
        return t || I(e, 8, this.length), i.read(this, e, !1, 52, 8)
      }, u.prototype.writeUIntLE = function(e, t, n, r) {
        (e = +e, t |= 0, n |= 0, r) || C(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
        var i = 1,
          o = 0;
        for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
        return t + n
      }, u.prototype.writeUIntBE = function(e, t, n, r) {
        (e = +e, t |= 0, n |= 0, r) || C(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
        var i = n - 1,
          o = 1;
        for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
        return t + n
      }, u.prototype.writeUInt8 = function(e, t, n) {
        return e = +e, t |= 0, n || C(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
      }, u.prototype.writeUInt16LE = function(e, t, n) {
        return e = +e, t |= 0, n || C(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : N(this, e, t, !0), t + 2
      }, u.prototype.writeUInt16BE = function(e, t, n) {
        return e = +e, t |= 0, n || C(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : N(this, e, t, !1), t + 2
      }, u.prototype.writeUInt32LE = function(e, t, n) {
        return e = +e, t |= 0, n || C(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : U(this, e, t, !0), t + 4
      }, u.prototype.writeUInt32BE = function(e, t, n) {
        return e = +e, t |= 0, n || C(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : U(this, e, t, !1), t + 4
      }, u.prototype.writeIntLE = function(e, t, n, r) {
        if (e = +e, t |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);
          C(this, e, t, n, i - 1, -i)
        }
        var o = 0,
          s = 1,
          a = 0;
        for (this[t] = 255 & e; ++o < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
        return t + n
      }, u.prototype.writeIntBE = function(e, t, n, r) {
        if (e = +e, t |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);
          C(this, e, t, n, i - 1, -i)
        }
        var o = n - 1,
          s = 1,
          a = 0;
        for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
        return t + n
      }, u.prototype.writeInt8 = function(e, t, n) {
        return e = +e, t |= 0, n || C(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
      }, u.prototype.writeInt16LE = function(e, t, n) {
        return e = +e, t |= 0, n || C(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : N(this, e, t, !0), t + 2
      }, u.prototype.writeInt16BE = function(e, t, n) {
        return e = +e, t |= 0, n || C(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : N(this, e, t, !1), t + 2
      }, u.prototype.writeInt32LE = function(e, t, n) {
        return e = +e, t |= 0, n || C(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : U(this, e, t, !0), t + 4
      }, u.prototype.writeInt32BE = function(e, t, n) {
        return e = +e, t |= 0, n || C(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : U(this, e, t, !1), t + 4
      }, u.prototype.writeFloatLE = function(e, t, n) {
        return L(this, e, t, !0, n)
      }, u.prototype.writeFloatBE = function(e, t, n) {
        return L(this, e, t, !1, n)
      }, u.prototype.writeDoubleLE = function(e, t, n) {
        return M(this, e, t, !0, n)
      }, u.prototype.writeDoubleBE = function(e, t, n) {
        return M(this, e, t, !1, n)
      }, u.prototype.copy = function(e, t, n, r) {
        if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
        if (0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
        var i, o = r - n;
        if (this === e && n < t && t < r)
          for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
        else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
          for (i = 0; i < o; ++i) e[i + t] = this[i + n];
        else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
        return o
      }, u.prototype.fill = function(e, t, n, r) {
        if ("string" == typeof e) {
          if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
            var i = e.charCodeAt(0);
            i < 256 && (e = i)
          }
          if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
          if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
        } else "number" == typeof e && (e &= 255);
        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
        if (n <= t) return this;
        var o;
        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
          for (o = t; o < n; ++o) this[o] = e;
        else {
          var s = u.isBuffer(e) ? e : q(new u(e, r).toString()),
            a = s.length;
          for (o = 0; o < n - t; ++o) this[o + t] = s[o % a]
        }
        return this
      };
      var z = /[^+\/0-9A-Za-z-_]/g;

      function J(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16)
      }

      function q(e, t) {
        var n;
        t = t || 1 / 0;
        for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
          if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue
              }
              if (s + 1 === r) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue
              }
              i = n;
              continue
            }
            if (n < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), i = n;
              continue
            }
            n = 65536 + (i - 55296 << 10 | n - 56320)
          } else i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (i = null, n < 128) {
            if ((t -= 1) < 0) break;
            o.push(n)
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            o.push(n >> 6 | 192, 63 & n | 128)
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
          }
        }
        return o
      }

      function B(e) {
        return r.toByteArray(function(e) {
          if ((e = function(e) {
              return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }(e).replace(z, "")).length < 2) return "";
          for (; e.length % 4 != 0;) e += "=";
          return e
        }(e))
      }

      function H(e, t, n, r) {
        for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
        return i
      }
    }).call(this, n(5))
  }, function(e, t) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || new Function("return this")()
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, function(t, n) {
    t.exports = e
  }, function(e, n) {
    e.exports = t
  }, function(e, t) {
    e.exports = n
  }, function(e, t, n) {
    "use strict";
    var r = n(1).JSONSchema,
      i = (n(59).BASE64_REGEXP, new r({
        type: "object",
        properties: {
          kty: {
            type: "string",
            enum: ["RSA", "EC", "oct"]
          },
          use: {
            type: "string",
            enum: ["sig", "enc"]
          },
          key_ops: {
            type: "array",
            items: {
              enum: ["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"]
            }
          },
          alg: {
            type: "string",
            enum: ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "PS256", "PS384", "PS512", "none"]
          },
          kid: {
            type: "string"
          },
          x5u: {
            type: "string"
          },
          x5c: {
            type: "array"
          },
          x5t: {
            type: "string"
          }
        }
      }));
    e.exports = i
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = n(40);
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      function i(e, t) {
        if (e === t) return 0;
        for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
          if (e[i] !== t[i]) {
            n = e[i], r = t[i];
            break
          } return n < r ? -1 : r < n ? 1 : 0
      }

      function o(e) {
        return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
      }
      var s = n(41),
        a = Object.prototype.hasOwnProperty,
        u = Array.prototype.slice,
        c = "foo" === function() {}.name;

      function f(e) {
        return Object.prototype.toString.call(e)
      }

      function l(e) {
        return !o(e) && ("function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer))))
      }
      var p = e.exports = m,
        h = /\s*function\s+([^\(\s]*)\s*/;

      function d(e) {
        if (s.isFunction(e)) {
          if (c) return e.name;
          var t = e.toString().match(h);
          return t && t[1]
        }
      }

      function y(e, t) {
        return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e
      }

      function g(e) {
        if (c || !s.isFunction(e)) return s.inspect(e);
        var t = d(e);
        return "[Function" + (t ? ": " + t : "") + "]"
      }

      function v(e, t, n, r, i) {
        throw new p.AssertionError({
          message: n,
          actual: e,
          expected: t,
          operator: r,
          stackStartFunction: i
        })
      }

      function m(e, t) {
        e || v(e, !0, t, "==", p.ok)
      }

      function w(e, t, n, r) {
        if (e === t) return !0;
        if (o(e) && o(t)) return 0 === i(e, t);
        if (s.isDate(e) && s.isDate(t)) return e.getTime() === t.getTime();
        if (s.isRegExp(e) && s.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
        if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
          if (l(e) && l(t) && f(e) === f(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
          if (o(e) !== o(t)) return !1;
          var a = (r = r || {
            actual: [],
            expected: []
          }).actual.indexOf(e);
          return -1 !== a && a === r.expected.indexOf(t) || (r.actual.push(e), r.expected.push(t), function(e, t, n, r) {
            if (null == e || null == t) return !1;
            if (s.isPrimitive(e) || s.isPrimitive(t)) return e === t;
            if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
            var i = b(e),
              o = b(t);
            if (i && !o || !i && o) return !1;
            if (i) return e = u.call(e), t = u.call(t), w(e, t, n);
            var a, c, f = S(e),
              l = S(t);
            if (f.length !== l.length) return !1;
            for (f.sort(), l.sort(), c = f.length - 1; c >= 0; c--)
              if (f[c] !== l[c]) return !1;
            for (c = f.length - 1; c >= 0; c--)
              if (a = f[c], !w(e[a], t[a], n, r)) return !1;
            return !0
          }(e, t, n, r))
        }
        return n ? e === t : e == t
      }

      function b(e) {
        return "[object Arguments]" == Object.prototype.toString.call(e)
      }

      function O(e, t) {
        if (!e || !t) return !1;
        if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
        try {
          if (e instanceof t) return !0
        } catch (e) {}
        return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
      }

      function E(e, t, n, r) {
        var i;
        if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
        "string" == typeof n && (r = n, n = null), i = function(e) {
          var t;
          try {
            e()
          } catch (e) {
            t = e
          }
          return t
        }(t), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), e && !i && v(i, n, "Missing expected exception" + r);
        var o = "string" == typeof r,
          a = !e && i && !n;
        if ((!e && s.isError(i) && o && O(i, n) || a) && v(i, n, "Got unwanted exception" + r), e && i && n && !O(i, n) || !e && i) throw i
      }
      p.AssertionError = function(e) {
        var t;
        this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = y(g((t = this).actual), 128) + " " + t.operator + " " + y(g(t.expected), 128), this.generatedMessage = !0);
        var n = e.stackStartFunction || v;
        if (Error.captureStackTrace) Error.captureStackTrace(this, n);
        else {
          var r = new Error;
          if (r.stack) {
            var i = r.stack,
              o = d(n),
              s = i.indexOf("\n" + o);
            if (s >= 0) {
              var a = i.indexOf("\n", s + 1);
              i = i.substring(a + 1)
            }
            this.stack = i
          }
        }
      }, s.inherits(p.AssertionError, Error), p.fail = v, p.ok = m, p.equal = function(e, t, n) {
        e != t && v(e, t, n, "==", p.equal)
      }, p.notEqual = function(e, t, n) {
        e == t && v(e, t, n, "!=", p.notEqual)
      }, p.deepEqual = function(e, t, n) {
        w(e, t, !1) || v(e, t, n, "deepEqual", p.deepEqual)
      }, p.deepStrictEqual = function(e, t, n) {
        w(e, t, !0) || v(e, t, n, "deepStrictEqual", p.deepStrictEqual)
      }, p.notDeepEqual = function(e, t, n) {
        w(e, t, !1) && v(e, t, n, "notDeepEqual", p.notDeepEqual)
      }, p.notDeepStrictEqual = function e(t, n, r) {
        w(t, n, !0) && v(t, n, r, "notDeepStrictEqual", e)
      }, p.strictEqual = function(e, t, n) {
        e !== t && v(e, t, n, "===", p.strictEqual)
      }, p.notStrictEqual = function(e, t, n) {
        e === t && v(e, t, n, "!==", p.notStrictEqual)
      }, p.throws = function(e, t, n) {
        E(!0, e, t, n)
      }, p.doesNotThrow = function(e, t, n) {
        E(!1, e, t, n)
      }, p.ifError = function(e) {
        if (e) throw e
      }, p.strict = r(function e(t, n) {
        t || v(t, !0, n, "==", e)
      }, p, {
        equal: p.strictEqual,
        deepEqual: p.deepStrictEqual,
        notEqual: p.notStrictEqual,
        notDeepEqual: p.notDeepStrictEqual
      }), p.strict.strict = p.strict;
      var S = Object.keys || function(e) {
        var t = [];
        for (var n in e) a.call(e, n) && t.push(n);
        return t
      }
    }).call(this, n(5))
  }, function(e, t, n) {
    "use strict";
    var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    var i = 0,
      o = function() {
        function e(t, n) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.expr = t, this.mode = n || i, this.tokens = t && "#" === t.charAt(0) ? this.parseURIFragmentIdentifier(t) : this.parseJSONString(t)
        }
        return r(e, [{
          key: "escape",
          value: function(e) {
            return e.replace(/~/g, "~0").replace(/\//g, "~1")
          }
        }, {
          key: "unescape",
          value: function(e) {
            return e.replace(/~1/g, "/").replace(/~0/g, "~")
          }
        }, {
          key: "parseJSONString",
          value: function(e) {
            if ("string" != typeof e) throw new Error("JSON Pointer must be a string");
            if ("" === e) return [];
            if ("/" !== e.charAt(0)) throw new Error("Invalid JSON Pointer");
            return "/" === e ? [""] : e.substr(1).split("/").map(this.unescape)
          }
        }, {
          key: "toJSONString",
          value: function() {
            return "/" + this.tokens.map(this.escape).join("/")
          }
        }, {
          key: "parseURIFragmentIdentifier",
          value: function(e) {
            if ("string" != typeof e) throw new Error("JSON Pointer must be a string");
            if ("#" !== e.charAt(0)) throw new Error("Invalid JSON Pointer URI Fragment Identifier");
            return this.parseJSONString(decodeURIComponent(e.substr(1)))
          }
        }, {
          key: "toURIFragmentIdentifier",
          value: function() {
            var e = this;
            return "#/" + this.tokens.map(function(t) {
              return encodeURIComponent(e.escape(t))
            }).join("/")
          }
        }, {
          key: "get",
          value: function(e) {
            for (var t = e, n = this.tokens, r = 0; r < n.length; r++) {
              if (!t || void 0 === t[n[r]]) {
                if (this.mode !== i) return;
                throw new Error("Invalid JSON Pointer reference")
              }
              t = t[n[r]]
            }
            return t
          }
        }, {
          key: "add",
          value: function(e, t) {
            for (var n = this.tokens, r = e, o = 0; o < n.length; o++) {
              var s = n[o];
              if (o === n.length - 1) "-" === s ? r.push(t) : Array.isArray(r) ? r.splice(s, 0, t) : void 0 !== t && (r[s] = t);
              else if (r[s]) r = r[s];
              else switch (this.mode) {
                case i:
                  throw new Error("Invalid JSON Pointer reference");
                case 1:
                  r = r[s] = parseInt(s) ? [] : {};
                  break;
                case 2:
                  return;
                default:
                  throw new Error("Invalid pointer mode")
              }
            }
          }
        }, {
          key: "replace",
          value: function(e, t) {
            for (var n = this.tokens, r = e, i = 0; i < n.length; i++) {
              var o = n[i];
              i === n.length - 1 ? r[o] = t : r = r[o] ? r[o] : r[o] = parseInt(o) ? [] : {}
            }
          }
        }, {
          key: "remove",
          value: function(e) {
            for (var t = this.tokens, n = e, r = 0; r < t.length; r++) {
              var i = t[r];
              if (void 0 === n || void 0 === n[i]) return;
              if (Array.isArray(n)) return void n.splice(i, 1);
              r === t.length - 1 && delete n[i], n = n[i]
            }
          }
        }], [{
          key: "parse",
          value: function(t) {
            return new e(t)
          }
        }]), e
      }();
    e.exports = o
  }, function(e, t, n) {
    "use strict";
    var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    n(2);
    var i = n(53),
      o = n(24).NotSupportedError,
      s = function() {
        function e() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e)
        }
        return r(e, null, [{
          key: "sign",
          value: function(e, t, n) {
            var r = i.normalize("sign", e);
            return r instanceof Error ? Promise.reject(new o(e)) : r.sign(t, n)
          }
        }, {
          key: "verify",
          value: function(e, t, n, r) {
            var s = i.normalize("verify", e);
            return s instanceof Error ? Promise.reject(new o(e)) : s.verify(t, n, r)
          }
        }, {
          key: "importKey",
          value: function(e) {
            return i.normalize("importKey", e.alg).importKey(e)
          }
        }]), e
      }();
    e.exports = s
  }, function(e, t) {
    e.exports = class {
      static encode(e) {
        let t = [];
        return Object.keys(e).forEach(function(n) {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]))
        }), t.join("&")
      }
      static decode(e) {
        let t = {};
        return e.split("&").forEach(function(e) {
          let n = e.split("="),
            r = decodeURIComponent(n[0]),
            i = decodeURIComponent(n[1]);
          t[r] = i
        }), t
      }
    }
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e = "fetch error") {
      return t => {
        if (t.status >= 200 && t.status < 300) return t;
        let n = `${e}: ${t.status} ${t.statusText}`,
          r = new Error(n);
        throw r.response = t, r.statusCode = t.status, r
      }
    }
  }, function(e, t, n) {
    "use strict";
    e.exports = n(17)
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.unquote = t.quote = t.isScheme = t.isToken = void 0;
    var r = /^[^\u0000-\u001F\u007F()<>@,;:\\"\/?={}\[\]\u0020\u0009]+$/,
      i = function(e) {
        return "string" == typeof e && r.test(e)
      };
    t.isToken = i;
    var o = i;
    t.isScheme = o;
    t.quote = function(e) {
      return `"${e.replace(/"/g,'\\"')}"`
    };
    t.unquote = function(e) {
      return e.substr(1, e.length - 2).replace(/\\"/g, '"')
    }
  }, function(e, t, n) {
    (function(t) {
      const r = n(10),
        i = n(7),
        {
          URL: o
        } = n(6),
        s = i.Headers ? i.Headers : t.Headers,
        {
          JSONDocument: a
        } = n(1),
        {
          JWKSet: u
        } = n(3),
        c = n(62),
        f = n(63),
        l = n(71),
        p = n(14),
        h = n(13);
      class d extends a {
        static get schema() {
          return l
        }
        static from(e) {
          let t = new d(e),
            n = t.validate();
          if (!n.valid) return Promise.reject(new Error(JSON.stringify(n)));
          let r = t.provider.jwks;
          return r ? u.importKeys(r).then(e => (t.provider.jwks = e, t)) : t.jwks().then(() => t)
        }
        static register(e, t, n) {
          let r = new d({
            provider: {
              url: e
            },
            defaults: Object.assign({}, n.defaults),
            store: n.store
          });
          return Promise.resolve().then(() => r.discover()).then(() => r.jwks()).then(() => r.register(t)).then(() => r)
        }
        discover() {
          try {
            let e = this.provider.url;
            r(e, 'RelyingParty provider must define "url"');
            let t = new o(e);
            return t.pathname = ".well-known/openid-configuration", i(t.toString()).then(p("Error fetching openid configuration")).then(e => e.json().then(e => this.provider.configuration = e))
          } catch (e) {
            return Promise.reject(e)
          }
        }
        register(e) {
          try {
            let t = this.provider.configuration;
            r(t, "OpenID Configuration is not initialized."), r(t.registration_endpoint, "OpenID Configuration is missing registration_endpoint.");
            let n = t.registration_endpoint,
              o = "post",
              a = new s({
                "Content-Type": "application/json"
              }),
              u = this.defaults.register,
              c = JSON.stringify(Object.assign({}, u, e));
            return i(n, {
              method: o,
              headers: a,
              body: c
            }).then(p("Error registering client")).then(e => e.json().then(e => this.registration = e))
          } catch (e) {
            return Promise.reject(e)
          }
        }
        serialize() {
          return JSON.stringify(this)
        }
        jwks() {
          try {
            let e = this.provider.configuration;
            r(e, "OpenID Configuration is not initialized."), r(e.jwks_uri, "OpenID Configuration is missing jwks_uri.");
            let t = e.jwks_uri;
            return i(t).then(p("Error resolving provider keys")).then(e => e.json().then(e => u.importKeys(e)).then(e => this.provider.jwks = e))
          } catch (e) {
            return Promise.reject(e)
          }
        }
        createRequest(e, t) {
          return c.create(this, e, t || this.store)
        }
        validateResponse(e, t = this.store) {
          let n;
          n = e.match(/^http(s?):\/\//) ? {
            rp: this,
            redirect: e,
            session: t
          } : {
            rp: this,
            body: e,
            session: t
          };
          const r = new f(n);
          return f.validateResponse(r)
        }
        userinfo() {
          try {
            let e = this.provider.configuration;
            r(e, "OpenID Configuration is not initialized."), r(e.userinfo_endpoint, "OpenID Configuration is missing userinfo_endpoint.");
            let t = e.userinfo_endpoint,
              n = this.store.access_token;
            r(n, "Missing access token.");
            let o = new s({
              "Content-Type": "application/json",
              Authorization: `Bearer ${n}`
            });
            return i(t, {
              headers: o
            }).then(p("Error fetching userinfo")).then(e => e.json())
          } catch (e) {
            return Promise.reject(e)
          }
        }
        logoutRequest(e = {}) {
          const {
            id_token_hint: t,
            post_logout_redirect_uri: n,
            state: i
          } = e;
          let s;
          if (r(this.provider, "OpenID Configuration is not initialized"), s = this.provider.configuration, r(s, "OpenID Configuration is not initialized"), !s.end_session_endpoint) return console.log("OpenId Configuration for " + `${s.issuer} is missing end_session_endpoint`), null;
          if (n && !t) throw new Error("id_token_hint is required when using post_logout_redirect_uri");
          const a = {};
          t && (a.id_token_hint = t), n && (a.post_logout_redirect_uri = n), i && (a.state = i);
          const u = new o(s.end_session_endpoint);
          return u.search = h.encode(a), u.href
        }
        logout() {
          let e;
          try {
            r(this.provider, "OpenID Configuration is not initialized."), e = this.provider.configuration, r(e, "OpenID Configuration is not initialized."), r(e.end_session_endpoint, "OpenID Configuration is missing end_session_endpoint.")
          } catch (e) {
            return Promise.reject(e)
          }
          if (!e.end_session_endpoint) return this.clearSession(), Promise.resolve(void 0);
          let t = e.end_session_endpoint;
          return i(t, {
            method: "get",
            credentials: "include"
          }).then(p("Error logging out")).then(() => this.clearSession())
        }
        clearSession() {
          let e = this.store;
          e && delete e[y]
        }
        popTokenFor(e, t) {
          return PoPToken.issueFor(e, t)
        }
      }
      const y = "oidc.session.privateKey";
      d.SESSION_PRIVATE_KEY = y, e.exports = d
    }).call(this, n(5))
  }, function(e, t, n) {
    "use strict";
    var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    var i = /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
      o = /^(?:[a-z][a-z0-9+-.]*)?(?:\:|\/)\/?[^\s]*$/i,
      s = /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
      a = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
      u = /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
      c = /^[a-z](?:(?:[-0-9a-z]{0,61})?[0-9a-z])?(\.[a-z](?:(?:[-0-9a-z]{0,61})?[0-9a-z])?)*$/i,
      f = function() {
        function e() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e)
        }
        return r(e, [{
          key: "register",
          value: function(e, t) {
            if ("string" != typeof e) throw new Error("Format name must be a string");
            return "string" == typeof t && (t = new RegExp(t)), this[e] = t
          }
        }, {
          key: "resolve",
          value: function(e) {
            var t = this[e];
            if (!t) throw new Error("Unknown JSON Schema format.");
            return t
          }
        }, {
          key: "test",
          value: function(e, t) {
            return this.resolve(e).test(t)
          }
        }], [{
          key: "initialize",
          value: function() {
            var t = new e;
            return t.register("date-time", i), t.register("uri", o), t.register("email", s), t.register("ipv4", a), t.register("ipv6", u), t.register("hostname", c), t
          }
        }]), e
      }();
    e.exports = f.initialize()
  }, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }();
    var o = function() {
      function e(t, n) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Object.assign(this, n || {}), this.root = this.root || this, this.root.depth = this.root.depth || 1, this.level > this.root.depth && (this.root.depth = this.level), this.level = this.level || 0, this.schema = t
      }
      return i(e, [{
        key: "compile",
        value: function() {
          var e = this.root,
            t = (this.depth, this.level, ""),
            n = "";
          if (n += this.default(), n += this.properties(), n += this.items(), n += this.member(), n += this.item(), e === this) {
            for (var r = 1; r <= this.root.depth; r++) t += this.declaration(r);
            return "\n        options = options || {}\n\n        if (options.filter === false) {\n          Object.assign(target, JSON.parse(JSON.stringify(source)))\n        }\n\n        " + t + "\n        " + n + "\n      "
          }
          return n
        }
      }, {
        key: "declaration",
        value: function(e) {
          return "\n      var target" + e + "\n      var source" + e + "\n      var count" + e + "\n    "
        }
      }, {
        key: "default",
        value: function() {
          var e = this.schema,
            t = this.level,
            n = this.key,
            r = this.index,
            i = e.default,
            o = "";
          return e.hasOwnProperty("default") && (n && (o += "\n          target" + t + "['" + n + "'] = " + JSON.stringify(i) + "\n        "), r && (o += "\n          target" + t + "[" + r + "] = " + JSON.stringify(i) + "\n        "), t > 1 && (o += "\n          count" + t + "++\n        "), o = "\n        if (options.defaults !== false) {\n          " + o + "\n        }\n      "), o
        }
      }, {
        key: "member",
        value: function() {
          var e = this.schema,
            t = (this.root, this.level),
            n = this.key,
            r = e.properties,
            i = e.additionalProperties,
            o = e.items,
            s = e.additionalItems,
            a = "";
          return !n || r || i || o || s || (a += "\n        target" + t + "['" + n + "'] = source" + t + "['" + n + "']\n      ", t > 1 && (a += "\n          count" + t + "++\n        "), a = "\n        if (source" + t + ".hasOwnProperty('" + n + "')) {\n          " + a + "\n        }\n      "), a
        }
      }, {
        key: "item",
        value: function() {
          var e = this.schema,
            t = (this.root, this.level),
            n = this.index,
            r = e.properties,
            i = e.additionalProperties,
            o = e.items,
            s = e.additionalItems,
            a = "";
          return !n || r || i || o || s || (a += "\n        target" + t + "[" + n + "] = source" + t + "[" + n + "]\n      ", t > 1 && (a += "\n          count" + t + "++\n        "), a = "\n        if (" + n + " < len) {\n          " + a + "\n        }\n      "), a
        }
      }, {
        key: "properties",
        value: function() {
          var t = this.schema,
            n = this.root,
            r = this.level,
            i = this.key,
            o = this.index,
            s = t.properties,
            a = "";
          return s && (Object.keys(s).forEach(function(t) {
            var i = new e(s[t], {
              key: t,
              root: n,
              level: r + 1
            });
            a += i.compile()
          }), n === this ? a = "\n          if (typeof source === 'object' && source !== null && !Array.isArray(source)) {\n            if (typeof target !== 'object') {\n              throw new Error('?')\n            }\n\n            source1 = source\n            target1 = target\n            count1 = 0\n\n            " + a + "\n          }\n        " : (o && (a = "\n            if (" + o + " < source" + r + ".length || typeof source" + r + "[" + o + "] === 'object') {\n\n              source" + (r + 1) + " = source" + r + "[" + o + "] || {}\n              count" + (r + 1) + " = 0\n\n              if (" + o + " < target" + r + ".length || typeof target" + r + "[" + o + "] !== 'object') {\n                target" + (r + 1) + " = {}\n                if (" + o + " < source" + r + ".length) {\n                  count" + (r + 1) + "++\n                }\n              } else {\n                target" + (r + 1) + " = target" + r + "[" + o + "]\n              }\n\n              " + a + "\n\n              if (count" + (r + 1) + " > 0) {\n                target" + r + "[" + o + "] = target" + (r + 1) + "\n                count" + r + "++\n              }\n\n            } else {\n              target" + r + "[" + o + "] = source" + r + "[" + o + "]\n              count" + r + "++\n            }\n          "), i && (a = "\n            if ((typeof source" + r + "['" + i + "'] === 'object'\n                  && source" + r + "['" + i + "'] !== null\n                  && !Array.isArray(source" + r + "['" + i + "']))\n                || !source" + r + ".hasOwnProperty('" + i + "')) {\n\n              source" + (r + 1) + " = source" + r + "['" + i + "'] || {}\n              count" + (r + 1) + " = 0\n\n              if (!target" + r + ".hasOwnProperty('" + i + "')\n                  || typeof target" + r + "['" + i + "'] !== 'object'\n                  || target" + r + "['" + i + "'] === null\n                  || Array.isArray(target" + r + "['" + i + "'])) {\n                target" + (r + 1) + " = {}\n                if (source" + r + ".hasOwnProperty('" + i + "')) {\n                  count" + (r + 1) + "++\n                }\n              } else {\n                target" + (r + 1) + " = target" + r + "['" + i + "']\n                count" + (r + 1) + "++\n              }\n\n              " + a + "\n\n              if (count" + (r + 1) + " > 0) {\n                target" + r + "['" + i + "'] = target" + (r + 1) + "\n                count" + r + "++\n              }\n\n            } else {\n              target" + r + "['" + i + "'] = source" + r + "['" + i + "']\n              count" + r + "++\n            }\n          "))), a
        }
      }, {
        key: "additionalProperties",
        value: function() {}
      }, {
        key: "items",
        value: function() {
          var t = this.schema,
            n = this.root,
            i = this.level,
            o = this.key,
            s = (this.index, t.items),
            a = "";
          if (s) {
            if (Array.isArray(s));
            else if ("object" === (void 0 === s ? "undefined" : r(s)) && null !== s) {
              var u = "i" + (i + 1);
              a += "\n          var sLen = source" + (i + 1) + ".length || 0\n          var tLen = target" + (i + 1) + ".length || 0\n          var len = 0\n\n          if (sLen > len) { len = sLen }\n          // THIS IS WRONG, CAUSED SIMPLE ARRAY INIT TO FAIL (OVERWRITE\n          // EXISTING TARGET VALUES WITH UNDEFINED WHEN SOURCE IS SHORTER THAN\n          // TARGET). LEAVING HERE UNTIL WE FINISH TESTING AND SEE WHY IT MIGHT\n          // HAVE BEEN HERE IN THE FIRST PLACE.\n          //\n          // if (tLen > len) { len = tLen }\n\n          for (var " + u + " = 0; " + u + " < len; " + u + "++) {\n            " + new e(s, {
                index: u,
                root: n,
                level: i + 1
              }).compile() + "\n          }\n        "
            }
            a = n === this ? "\n          if (Array.isArray(source)) {\n            if (!Array.isArray(target)) {\n              throw new Error('?')\n            }\n\n            source1 = source\n            target1 = target\n\n            " + a + "\n          }\n        " : "\n          if (Array.isArray(source" + i + "['" + o + "']) || !source" + i + ".hasOwnProperty('" + o + "')) {\n\n            source" + (i + 1) + " = source" + i + "['" + o + "'] || []\n            count" + (i + 1) + " = 0\n\n            if (!target" + i + ".hasOwnProperty('" + o + "') || !Array.isArray(target" + i + "['" + o + "'])) {\n              target" + (i + 1) + " = []\n                if (source" + i + ".hasOwnProperty('" + o + "')) {\n                  count" + (i + 1) + "++\n                }\n\n            } else {\n              target" + (i + 1) + " = target" + i + "['" + o + "']\n              count" + (i + 1) + "++\n            }\n\n            " + a + "\n\n            if (count" + (i + 1) + " > 0) {\n              target" + i + "['" + o + "'] = target" + (i + 1) + "\n              count" + i + "++\n            }\n\n          } else {\n            target" + i + "['" + o + "'] = source" + i + "['" + o + "']\n            count" + i + "++\n          }\n        "
          }
          return a
        }
      }, {
        key: "additionalItems",
        value: function() {}
      }], [{
        key: "compile",
        value: function(t) {
          var n = new e(t).compile();
          try {
            return new Function("target", "source", "options", n)
          } catch (e) {
            console.log(e, e.stack)
          }
        }
      }]), e
    }();
    e.exports = o
  }, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }();
    var o = n(11),
      s = ["add", "remove", "replace", "move", "copy", "test"],
      a = function() {
        function e(t) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.ops = t || []
        }
        return i(e, [{
          key: "apply",
          value: function(e) {
            var t = this;
            this.ops.forEach(function(n) {
              var r = n.op;
              if (!r) throw new Error('Missing "op" in JSON Patch operation');
              if (-1 === s.indexOf(r)) throw new Error('Invalid "op" in JSON Patch operation');
              if (!n.path) throw new Error('Missing "path" in JSON Patch operation');
              t[r](n, e)
            })
          }
        }, {
          key: "add",
          value: function(e, t) {
            if (void 0 === e.value) throw new Error('Missing "value" in JSON Patch add operation');
            new o(e.path, 2).add(t, e.value)
          }
        }, {
          key: "remove",
          value: function(e, t) {
            new o(e.path).remove(t)
          }
        }, {
          key: "replace",
          value: function(e, t) {
            if (void 0 === e.value) throw new Error('Missing "value" in JSON Patch replace operation');
            new o(e.path).replace(t, e.value)
          }
        }, {
          key: "move",
          value: function(e, t) {
            if (void 0 === e.from) throw new Error('Missing "from" in JSON Patch move operation');
            if (e.path.match(new RegExp("^" + e.from))) throw new Error('Invalid "from" in JSON Patch move operation');
            var n = new o(e.path),
              r = new o(e.from),
              i = r.get(t);
            r.remove(t), n.add(t, i)
          }
        }, {
          key: "copy",
          value: function(e, t) {
            if (void 0 === e.from) throw new Error('Missing "from" in JSON Patch copy operation');
            var n = new o(e.path),
              r = new o(e.from).get(t);
            n.add(t, r)
          }
        }, {
          key: "test",
          value: function(e, t) {
            if (void 0 === e.value) throw new Error('Missing "value" in JSON Patch test operation');
            var n = new o(e.path).get(t);
            if (r(e.value), n !== e.value) throw new Error("Mismatching JSON Patch test value")
          }
        }]), e
      }();
    e.exports = a
  }, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }();
    var o = n(18),
      s = 0,
      a = function() {
        function e(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.schema = t, Object.assign(this, n), this.address || (this.address = ""), !0 !== this.require && (this.require = !1)
        }
        return i(e, null, [{
          key: "compile",
          value: function(t) {
            var n = '\n      // "cursor"\n      let value = data\n      let container\n      let stack = []\n      let top = -1\n\n      // error state\n      let valid = true\n      let errors = []\n\n      // complex schema state\n      let initialValidity\n      let anyValid\n      let notValid\n      let countOfValid\n      let initialErrorCount\n      let accumulatedErrorCount\n\n      // validation code\n      ' + new e(t).compile() + "\n\n      // validation result\n      return {\n        valid,\n        errors\n      }\n    ";
            return new Function("data", n)
          }
        }, {
          key: "counter",
          get: function() {
            return s++
          }
        }]), i(e, [{
          key: "compile",
          value: function() {
            var e = "";
            return this.require && (e += this.required()), e += this.type(), e += this.array(), e += this.number(), e += this.object(), e += this.string(), e += this.enum(), e += this.anyOf(), e += this.allOf(), e += this.not(), e += this.oneOf()
          }
        }, {
          key: "push",
          value: function() {
            return "\n      stack.push(value)\n      container = value\n      top++\n    "
          }
        }, {
          key: "pop",
          value: function() {
            return "\n      if (stack.length > 1) {\n        top--\n        stack.pop()\n      }\n\n      value = container = stack[top]\n    "
          }
        }, {
          key: "type",
          value: function() {
            var e = this.schema.type,
              t = this.address,
              n = "";
            e && (n += "\n      // " + t + " type checking\n      if (value !== undefined && " + (Array.isArray(e) ? e : [e]).map(function(e) {
              return "array" === e ? "!Array.isArray(value)" : "boolean" === e ? "typeof value !== 'boolean'" : "integer" === e ? "!Number.isInteger(value)" : "null" === e ? "value !== null" : "number" === e ? "typeof value !== 'number'" : "object" === e ? "(typeof value !== 'object' || Array.isArray(value) || value === null)" : "string" === e ? "typeof value !== 'string'" : void 0
            }).join(" && ") + ") {\n        valid = false\n        errors.push({\n          keyword: 'type',\n          message: 'invalid type'\n        })\n      }\n      ");
            return n
          }
        }, {
          key: "array",
          value: function() {
            var e = this.validations(["additionalItems", "items", "minItems", "maxItems", "uniqueItems"]),
              t = "";
            return e.length > 0 && (t += "\n      /**\n       * Array validations\n       */\n      if (Array.isArray(value)) {\n      " + e + "\n      }\n      "), t
          }
        }, {
          key: "number",
          value: function() {
            var e = this.validations(["minimum", "maximum", "multipleOf"]),
              t = "";
            return e.length > 0 && (t += "\n      /**\n       * Number validations\n       */\n      if (typeof value === 'number') {\n      " + e + "\n      }\n      "), t
          }
        }, {
          key: "object",
          value: function() {
            var e = this.validations(["maxProperties", "minProperties", "additionalProperties", "properties", "patternProperties", "dependencies", "schemaDependencies", "propertyDependencies"]),
              t = "";
            return e.length > 0 && (t += "\n      /**\n       * Object validations\n       */\n      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {\n      " + e + "\n      }\n      "), t
          }
        }, {
          key: "string",
          value: function() {
            var e = this.validations(["maxLength", "minLength", "pattern", "format"]),
              t = "";
            return e.length > 0 && (t += "\n      /**\n       * String validations\n       */\n      if (typeof value === 'string') {\n      " + e + "\n      }\n      "), t
          }
        }, {
          key: "validations",
          value: function(e) {
            var t = this,
              n = this.schema,
              r = "";
            return Object.keys(n).filter(function(t) {
              return -1 !== e.indexOf(t)
            }).forEach(function(e) {
              r += t[e]()
            }), r
          }
        }, {
          key: "enum",
          value: function() {
            var e = this.schema.enum,
              t = this.address,
              n = ["value !== undefined"],
              i = "";
            return e && (e.forEach(function(e) {
              switch (void 0 === e ? "undefined" : r(e)) {
                case "boolean":
                case "number":
                  n.push("value !== " + e);
                  break;
                case "string":
                  n.push('value !== "' + e + '"');
                  break;
                case "object":
                  null === e ? n.push("value !== null") : n.push("'" + JSON.stringify(e) + "' !== JSON.stringify(value)");
                  break;
                default:
                  throw new Error("Things are not well in the land of enum")
              }
            }), i += '\n      /**\n       * Validate "' + t + '" enum\n       */\n      if (' + n.join(" && ") + ") {\n        valid = false\n        errors.push({\n          keyword: 'enum',\n          message: JSON.stringify(value) + ' is not an enumerated value'\n        })\n      }\n      "), i
          }
        }, {
          key: "anyOf",
          value: function() {
            var t = this.schema.anyOf,
              n = this.address,
              r = "";
            return Array.isArray(t) && (r += "\n        initialValidity = valid\n        initialErrorCount = errors.length\n        anyValid = false\n      ", t.forEach(function(t) {
              var i = new e(t, {
                address: n
              });
              r += "\n        accumulatedErrorCount = errors.length\n        " + i.compile() + "\n        if (accumulatedErrorCount === errors.length) {\n          anyValid = true\n        }\n        "
            }), r += "\n          if (anyValid === true) {\n            valid = initialValidity\n            errors = errors.slice(0, initialErrorCount)\n          }\n      "), r
          }
        }, {
          key: "allOf",
          value: function() {
            var t = this.schema.allOf,
              n = this.address,
              r = "";
            return Array.isArray(t) && t.forEach(function(t) {
              var i = new e(t, {
                address: n
              });
              r += "\n        " + i.compile() + "\n        "
            }), r
          }
        }, {
          key: "oneOf",
          value: function() {
            var t = this.schema.oneOf,
              n = this.address,
              r = "";
            return Array.isArray(t) && (r += "\n        /**\n         * Validate " + n + " oneOf\n         */\n        initialValidity = valid\n        initialErrorCount = errors.length\n        countOfValid = 0\n      ", t.forEach(function(t) {
              var i = new e(t, {
                address: n
              });
              r += "\n        accumulatedErrorCount = errors.length\n        " + i.compile() + "\n        if (accumulatedErrorCount === errors.length) {\n          countOfValid += 1\n        }\n        "
            }), r += "\n          if (countOfValid === 1) {\n            valid = initialValidity\n            errors = errors.slice(0, initialErrorCount)\n          } else {\n            valid = false\n            errors.push({\n              keyword: 'oneOf',\n              message: 'what is a reasonable error message for this case?'\n            })\n          }\n      "), r
          }
        }, {
          key: "not",
          value: function() {
            var t = this.schema.not,
              n = this.address,
              i = "";
            "object" !== (void 0 === t ? "undefined" : r(t)) || null === t || Array.isArray(t) || (i += "\n        /**\n         * NOT\n         */\n        if (value !== undefined) {\n          initialValidity = valid\n          initialErrorCount = errors.length\n          notValid = true\n\n          accumulatedErrorCount = errors.length\n\n          " + new e(t, {
              address: n
            }).compile() + "\n\n          if (accumulatedErrorCount === errors.length) {\n            notValid = false\n          }\n\n          if (notValid === true) {\n            valid = initialValidity\n            errors = errors.slice(0, initialErrorCount)\n          } else {\n            valid = false\n            errors = errors.slice(0, initialErrorCount)\n            errors.push({\n              keyword: 'not',\n              message: 'hmm...'\n            })\n          }\n        }\n      ");
            return i
          }
        }, {
          key: "properties",
          value: function() {
            var t = this.schema,
              n = this.address,
              i = t.properties,
              o = t.required,
              s = this.push();
            return o = Array.isArray(o) ? o : [], "object" === (void 0 === i ? "undefined" : r(i)) && Object.keys(i).forEach(function(t) {
              var r = i[t],
                a = -1 !== o.indexOf(t),
                u = new e(r, {
                  address: [n, t].filter(function(e) {
                    return !!e
                  }).join("."),
                  require: a
                });
              s += "\n        value = container['" + t + "']\n        ", s += u.compile()
            }), s += this.pop()
          }
        }, {
          key: "otherProperties",
          value: function() {
            return "\n      /**\n       * Validate Other Properties\n       */\n      " + this.push() + "\n\n      for (let key in container) {\n        value = container[key]\n        matched = false\n\n        " + this.patternValidations() + "\n        " + this.additionalValidations() + "\n      }\n\n      " + this.pop() + "\n    "
          }
        }, {
          key: "patternValidations",
          value: function() {
            var t = this.schema.patternProperties,
              n = "";
            return "object" === (void 0 === t ? "undefined" : r(t)) && Object.keys(t).forEach(function(r) {
              var i = new e(t[r]);
              n += "\n          if (key.match('" + r + "')) {\n            matched = true\n            " + i.compile() + "\n          }\n        "
            }), n
          }
        }, {
          key: "additionalValidations",
          value: function() {
            var t = this.schema,
              n = t.properties,
              i = t.additionalProperties,
              o = this.address,
              s = "",
              a = ["matched !== true"];
            if (Object.keys(n || {}).forEach(function(e) {
                a.push("key !== '" + e + "'")
              }), "object" === (void 0 === i ? "undefined" : r(i))) {
              var u = new e(i, {
                address: o + "[APKey]"
              });
              s += "\n        // validate additional properties\n        if (" + a.join(" && ") + ") {\n          " + u.compile() + "\n        }\n      "
            }
            return !1 === i && (s += "\n        // validate non-presence of additional properties\n        if (" + a.join(" && ") + ") {\n          valid = false\n          errors.push({\n            keyword: 'additionalProperties',\n            message: key + ' is not a defined property'\n          })\n        }\n      "), s
          }
        }, {
          key: "patternProperties",
          value: function() {
            var e = "";
            return this.otherPropertiesCalled || (this.otherPropertiesCalled = !0, e += this.otherProperties()), e
          }
        }, {
          key: "additionalProperties",
          value: function() {
            var e = "";
            return this.otherPropertiesCalled || (this.otherPropertiesCalled = !0, e += this.otherProperties()), e
          }
        }, {
          key: "minProperties",
          value: function() {
            var e = this.schema.minProperties;
            return "\n        // " + this.address + " min properties\n        if (Object.keys(value).length < " + e + ") {\n          valid = false\n          errors.push({\n            keyword: 'minProperties',\n            message: 'too few properties'\n          })\n        }\n    "
          }
        }, {
          key: "maxProperties",
          value: function() {
            var e = this.schema.maxProperties;
            return "\n        // " + this.address + " max properties\n        if (Object.keys(value).length > " + e + ") {\n          valid = false\n          errors.push({\n            keyword: 'maxProperties',\n            message: 'too many properties'\n          })\n        }\n    "
          }
        }, {
          key: "dependencies",
          value: function() {
            var t = this.schema.dependencies,
              n = this.address,
              i = this.push();
            return "object" === (void 0 === t ? "undefined" : r(t)) && Object.keys(t).forEach(function(o) {
              var s = t[o],
                a = [];
              if (Array.isArray(s)) s.forEach(function(e) {
                a.push("container['" + e + "'] === undefined")
              }), i += "\n            if (container['" + o + "'] !== undefined && (" + a.join(" || ") + ")) {\n              valid = false\n              errors.push({\n                keyword: 'dependencies',\n                message: 'unmet dependencies'\n              })\n            }\n          ";
              else if ("object" === (void 0 === s ? "undefined" : r(s))) {
                var u = new e(s, {
                  address: n
                });
                i += "\n            if (container['" + o + "'] !== undefined) {\n              " + u.compile() + "\n            }\n          "
              }
            }), i += this.pop()
          }
        }, {
          key: "required",
          value: function() {
            this.schema.properties;
            var e = "";
            return e += "\n      // validate " + this.address + " presence\n      if (value === undefined) {\n        valid = false\n        errors.push({\n          keyword: 'required',\n          message: 'is required'\n        })\n      }\n    "
          }
        }, {
          key: "additionalItems",
          value: function() {
            var t = this.schema,
              n = t.items,
              i = t.additionalItems,
              o = (this.address, "");
            if (!1 === i && Array.isArray(n) && (o += "\n        // don't allow additional items\n        if (value.length > " + n.length + ") {\n          valid = false\n          errors.push({\n            keyword: 'additionalItems',\n            message: 'additional items not allowed'\n          })\n        }\n      "), "object" === (void 0 === i ? "undefined" : r(i)) && null !== i && Array.isArray(n)) {
              var s = new e(i),
                a = e.counter;
              o += "\n        // additional items\n        " + this.push() + "\n\n        for (var i" + a + " = " + n.length + "; i" + a + " <= container.length; i" + a + "++) {\n          value = container[i" + a + "]\n          " + s.compile() + "\n        }\n\n        " + this.pop() + "\n      "
            }
            return o
          }
        }, {
          key: "items",
          value: function() {
            var t = this.schema.items,
              n = this.address,
              i = "";
            if (Array.isArray(t)) i += this.push(), t.forEach(function(t, r) {
              var o = new e(t, {
                address: n + "[" + r + "]"
              });
              i += "\n          // item #" + r + "\n          value = container[" + r + "]\n          " + o.compile() + "\n        "
            }), i += this.pop();
            else if ("object" === (void 0 === t ? "undefined" : r(t)) && null !== t) {
              var o = new e(t),
                s = e.counter;
              i += "\n        // items\n        " + this.push() + "\n\n        for (var i" + s + " = 0; i" + s + " < container.length; i" + s + "++) {\n          // read array element\n          value = container[i" + s + "]\n          " + o.compile() + "\n        }\n\n        " + this.pop() + "\n      "
            }
            return i
          }
        }, {
          key: "minItems",
          value: function() {
            var e = this.schema.minItems;
            return "\n        // " + this.address + " min items\n        if (value.length < " + e + ") {\n          valid = false\n          errors.push({\n            keyword: 'minItems',\n            message: 'too few properties'\n          })\n        }\n    "
          }
        }, {
          key: "maxItems",
          value: function() {
            var e = this.schema.maxItems;
            return "\n        // " + this.address + " max items\n        if (value.length > " + e + ") {\n          valid = false\n          errors.push({\n            keyword: 'maxItems',\n            message: 'too many properties'\n          })\n        }\n    "
          }
        }, {
          key: "uniqueItems",
          value: function() {
            var e = this.schema.uniqueItems,
              t = this.address,
              n = "";
            return !0 === e && (n += "\n        // validate " + t + " unique items\n        let values = value.map(v => JSON.stringify(v)) // TODO: optimize\n        let set = new Set(values)\n        if (values.length !== set.size) {\n          valid = false\n          errors.push({\n            keyword: 'uniqueItems',\n            message: 'items must be unique'\n          })\n        }\n      "), n
          }
        }, {
          key: "minLength",
          value: function() {
            var e = this.schema.minLength;
            return "\n        // " + this.address + " validate minLength\n        if (Array.from(value).length < " + e + ") {\n          valid = false\n          errors.push({\n            keyword: 'minLength',\n            message: 'too short'\n          })\n        }\n    "
          }
        }, {
          key: "maxLength",
          value: function() {
            var e = this.schema.maxLength;
            return "\n        // " + this.address + " validate maxLength\n        if (Array.from(value).length > " + e + ") {\n          valid = false\n          errors.push({\n            keyword: 'maxLength',\n            message: 'too long'\n          })\n        }\n    "
          }
        }, {
          key: "pattern",
          value: function() {
            var e = this.schema.pattern,
              t = this.address;
            if (e) return "\n          // " + t + " validate pattern\n          if (!value.match(new RegExp('" + e + "'))) {\n            valid = false\n            errors.push({\n              keyword: 'pattern',\n              message: 'does not match the required pattern'\n            })\n          }\n      "
          }
        }, {
          key: "format",
          value: function() {
            var e = this.schema.format,
              t = this.address,
              n = o.resolve(e);
            if (n) return "\n      // " + t + " validate format\n      if (!value.match(" + n + ")) {\n        valid = false\n        errors.push({\n          keyword: 'format',\n          message: 'is not \"" + e + "\" format'\n        })\n      }\n      "
          }
        }, {
          key: "minimum",
          value: function() {
            var e = this.schema,
              t = e.minimum,
              n = e.exclusiveMinimum;
            return "\n        // " + this.address + " validate minimum\n        if (value " + (!0 === n ? "<=" : "<") + " " + t + ") {\n          valid = false\n          errors.push({\n            keyword: 'minimum',\n            message: 'too small'\n          })\n        }\n    "
          }
        }, {
          key: "maximum",
          value: function() {
            var e = this.schema,
              t = e.maximum,
              n = e.exclusiveMaximum;
            return "\n        // " + this.address + " validate maximum\n        if (value " + (!0 === n ? ">=" : ">") + " " + t + ") {\n          valid = false\n          errors.push({\n            keyword: 'maximum',\n            message: 'too large'\n          })\n        }\n    "
          }
        }, {
          key: "multipleOf",
          value: function() {
            var e = this.schema.multipleOf,
              t = "";
            if ("number" == typeof e) {
              var n = e.toString().length - e.toFixed(0).length - 1,
                r = n > 0 ? Math.pow(10, n) : 1;
              t += "\n        if (" + (n > 0 ? "(value * " + r + ") % " + e * r + " !== 0" : "value % " + e + " !== 0") + ") {\n          valid = false\n          errors.push({\n            keyword: 'multipleOf',\n            message: 'must be a multiple of " + e + "'\n          })\n        }\n      "
            }
            return t
          }
        }]), e
      }();
    e.exports = a
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = t.TextEncoder ? t.TextEncoder : n(56).TextEncoder;
      e.exports = r
    }).call(this, n(5))
  }, function(e, t, n) {
    "use strict";
    var r = function(e) {
      function t(e) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return n.message = e + " is not a supported algorithm", n
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, Error), t
    }();
    e.exports = r
  }, function(e, t, n) {
    "use strict";
    e.exports = {
      DataError: n(25),
      NotSupportedError: n(23)
    }
  }, function(e, t, n) {
    "use strict";
    var r = function(e) {
      function t(e) {
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, Error), t
    }();
    e.exports = r
  }, function(e, t, n) {
    "use strict";
    var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    var i = n(1).JSONDocument,
      o = n(9),
      s = n(12),
      a = function(e) {
        function t() {
          return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t),
            function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i), r(t, null, [{
          key: "importKey",
          value: function(e) {
            return s.importKey(e)
          }
        }, {
          key: "schema",
          get: function() {
            return o
          }
        }]), t
      }();
    e.exports = a
  }, function(e, t, n) {
    "use strict";
    var r = new(0, n(1).JSONSchema)({
      type: "object",
      properties: {
        keys: {
          type: "array",
          items: n(9)
        }
      }
    });
    e.exports = r
  }, function(e, t, n) {
    "use strict";
    var r = n(29),
      i = n(30),
      o = n(31),
      s = new(0, n(1).JSONSchema)({
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["JWS", "JWE"]
          },
          segments: {
            type: "array"
          },
          header: o,
          protected: o,
          unprotected: o,
          iv: r,
          aad: r,
          ciphertext: r,
          tag: r,
          recipients: {
            type: "array",
            items: {
              type: "object",
              properties: {
                header: o,
                encrypted_key: r
              }
            }
          },
          payload: i,
          signatures: {
            type: "array",
            items: {
              type: "object",
              properties: {
                protected: o,
                header: o,
                signature: r,
                key: {
                  type: "object"
                }
              }
            }
          },
          signature: r,
          verified: {
            type: "boolean",
            default: !1
          },
          key: {
            type: "object"
          },
          serialization: {
            type: "string",
            enum: ["compact", "json", "flattened"],
            default: "compact"
          }
        }
      });
    e.exports = s
  }, function(e, t, n) {
    "use strict";
    var r = new(0, n(1).JSONSchema)({
      type: "string",
      format: "base64url"
    });
    e.exports = r
  }, function(e, t, n) {
    "use strict";
    var r = new(0, n(1).JSONSchema)({
      properties: {
        iss: {
          type: "string",
          format: "StringOrURI"
        },
        sub: {
          type: "string",
          format: "StringOrURI"
        },
        aud: {
          type: ["array", "string"],
          format: "StringOrURI",
          items: {
            format: "StringOrURI"
          }
        },
        exp: {
          type: "number",
          format: "NumericDate"
        },
        nbf: {
          type: "number",
          format: "NumericDate"
        },
        iat: {
          type: "number",
          format: "NumericDate"
        },
        jti: {
          type: "string"
        }
      }
    });
    e.exports = r
  }, function(e, t, n) {
    "use strict";
    n(9);
    var r = new(0, n(1).JSONSchema)({
      type: "object",
      properties: {
        typ: {
          type: "string"
        },
        cty: {
          type: "string",
          enum: ["JWT"]
        },
        alg: {
          type: "string",
          format: "StringOrURI"
        },
        jku: {
          type: "string",
          format: "URI"
        },
        kid: {
          type: "string"
        },
        x5u: {
          type: "string",
          format: "URI"
        },
        x5c: {
          type: "array",
          items: {
            type: "string",
            format: "base64"
          }
        },
        x5t: {
          type: "string",
          format: "base64url"
        },
        crit: {
          type: "array",
          items: {
            type: "string"
          },
          minItems: 1
        },
        enc: {
          type: "string",
          format: "StringOrURI"
        },
        zip: {
          type: "string"
        }
      }
    });
    e.exports = r
  }, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
          } catch (e) {
            i = !0, o = e
          } finally {
            try {
              !r && a.return && a.return()
            } finally {
              if (i) throw o
            }
          }
          return n
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      },
      i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }();
    var o = n(2),
      s = n(12),
      a = n(24).DataError,
      u = function() {
        function e() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e)
        }
        return i(e, null, [{
          key: "sign",
          value: function(e) {
            var t = o(JSON.stringify(e.payload));
            if ("compact" === e.serialization) {
              var n = e.key,
                r = e.header.alg,
                i = o(JSON.stringify(e.header)) + "." + t;
              return s.sign(r, n, i).then(function(e) {
                return i + "." + e
              })
            }
            return e.serialization, e.serialization, Promise.reject(new a("Unsupported serialization"))
          }
        }, {
          key: "verify",
          value: function(e) {
            e.signatures;
            var t = e.key,
              n = e.signature,
              i = e.header.alg;
            if (e.signature) {
              var o = r(e.segments, 2),
                u = o[0] + "." + o[1];
              return "none" === i ? Promise.reject(new a("Signature provided to verify with alg: none")) : s.verify(i, t, n, u).then(function(t) {
                return e.verified = t, t
              })
            }
            if ("none" === i) {
              if (!t && !n) return e.verified = !0, Promise.resolve(!0);
              if (t) return Promise.reject(new a("Key provided to verify signature with alg: none"))
            }
            return Promise.reject(new a("Missing signature(s)"))
          }
        }]), e
      }();
    e.exports = u
  }, function(e, t, n) {
    "use strict";
    var r, i = "object" == typeof Reflect ? Reflect : null,
      o = i && "function" == typeof i.apply ? i.apply : function(e, t, n) {
        return Function.prototype.apply.call(e, t, n)
      };
    r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
      return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : function(e) {
      return Object.getOwnPropertyNames(e)
    };
    var s = Number.isNaN || function(e) {
      return e != e
    };

    function a() {
      a.init.call(this)
    }
    e.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var u = 10;

    function c(e) {
      return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
    }

    function f(e, t, n, r) {
      var i, o, s, a;
      if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
      if (void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]), void 0 === s) s = o[t] = n, ++e._eventsCount;
      else if ("function" == typeof s ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (i = c(e)) > 0 && s.length > i && !s.warned) {
        s.warned = !0;
        var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, a = u, console && console.warn && console.warn(a)
      }
      return e
    }

    function l(e, t, n) {
      var r = {
          fired: !1,
          wrapFn: void 0,
          target: e,
          type: t,
          listener: n
        },
        i = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
          this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, o(this.listener, this.target, e))
        }.bind(r);
      return i.listener = n, r.wrapFn = i, i
    }

    function p(e, t, n) {
      var r = e._events;
      if (void 0 === r) return [];
      var i = r[t];
      return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
        for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
        return t
      }(i) : d(i, i.length)
    }

    function h(e) {
      var t = this._events;
      if (void 0 !== t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length
      }
      return 0
    }

    function d(e, t) {
      for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
      return n
    }
    Object.defineProperty(a, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return u
      },
      set: function(e) {
        if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
        u = e
      }
    }), a.init = function() {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, a.prototype.setMaxListeners = function(e) {
      if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
      return this._maxListeners = e, this
    }, a.prototype.getMaxListeners = function() {
      return c(this)
    }, a.prototype.emit = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
      var r = "error" === e,
        i = this._events;
      if (void 0 !== i) r = r && void 0 === i.error;
      else if (!r) return !1;
      if (r) {
        var s;
        if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
        var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
        throw a.context = s, a
      }
      var u = i[e];
      if (void 0 === u) return !1;
      if ("function" == typeof u) o(u, this, t);
      else {
        var c = u.length,
          f = d(u, c);
        for (n = 0; n < c; ++n) o(f[n], this, t)
      }
      return !0
    }, a.prototype.addListener = function(e, t) {
      return f(this, e, t, !1)
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
      return f(this, e, t, !0)
    }, a.prototype.once = function(e, t) {
      if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
      return this.on(e, l(this, e, t)), this
    }, a.prototype.prependOnceListener = function(e, t) {
      if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
      return this.prependListener(e, l(this, e, t)), this
    }, a.prototype.removeListener = function(e, t) {
      var n, r, i, o, s;
      if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
      if (void 0 === (r = this._events)) return this;
      if (void 0 === (n = r[e])) return this;
      if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
      else if ("function" != typeof n) {
        for (i = -1, o = n.length - 1; o >= 0; o--)
          if (n[o] === t || n[o].listener === t) {
            s = n[o].listener, i = o;
            break
          } if (i < 0) return this;
        0 === i ? n.shift() : function(e, t) {
          for (; t + 1 < e.length; t++) e[t] = e[t + 1];
          e.pop()
        }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
      }
      return this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(e) {
      var t, n, r;
      if (void 0 === (n = this._events)) return this;
      if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
      if (0 === arguments.length) {
        var i, o = Object.keys(n);
        for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
      }
      if ("function" == typeof(t = n[e])) this.removeListener(e, t);
      else if (void 0 !== t)
        for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
      return this
    }, a.prototype.listeners = function(e) {
      return p(this, e, !0)
    }, a.prototype.rawListeners = function(e) {
      return p(this, e, !1)
    }, a.listenerCount = function(e, t) {
      return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
    }, a.prototype.listenerCount = h, a.prototype.eventNames = function() {
      return this._eventsCount > 0 ? r(this._events) : []
    }
  }, function(e, t, n) {
    var r = n(37);
    e.exports = function(e, t) {
      if (null == e) return {};
      var n, i, o = r(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "format", {
      enumerable: !0,
      get: function() {
        return r.default
      }
    }), Object.defineProperty(t, "parse", {
      enumerable: !0,
      get: function() {
        return i.default
      }
    });
    var r = o(n(38)),
      i = o(n(39));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    var i = n(6).URL,
      o = n(3),
      s = o.JWT,
      a = o.JWK,
      u = function(e) {
        function t() {
          return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t),
            function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, s), r(t, null, [{
          key: "issueFor",
          value: function(e, n) {
            if (!e) throw new Error("Cannot issue PoPToken - missing resource server URI");
            if (!n.sessionKey) throw new Error("Cannot issue PoPToken - missing session key");
            if (!n.authorization.id_token) throw new Error("Cannot issue PoPToken - missing id token");
            var r = JSON.parse(n.sessionKey);
            return a.importKey(r).then(function(r) {
              var o = {
                aud: new i(e).origin,
                key: r,
                iss: n.authorization.client_id,
                id_token: n.authorization.id_token
              };
              return t.issue(o)
            }).then(function(e) {
              return e.encode()
            })
          }
        }, {
          key: "issue",
          value: function(e) {
            var n = e.aud,
              r = e.iss,
              i = e.key,
              o = i.alg,
              s = e.iat || Math.floor(Date.now() / 1e3);
            return new t({
              header: {
                alg: o
              },
              payload: {
                iss: r,
                aud: n,
                exp: s + (e.max || 3600),
                iat: s,
                id_token: e.id_token,
                token_type: "pop"
              },
              key: i.cryptoKey
            }, {
              filter: !1
            })
          }
        }]), t
      }();
    e.exports = u
  }, function(e, t) {
    e.exports = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = n(16);

    function i(e) {
      return function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n
        }
      }(e) || function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }

    function o(e, t) {
      return function(e) {
        if (Array.isArray(e)) return e
      }(e) || function(e, t) {
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
        } catch (e) {
          i = !0, o = e
        } finally {
          try {
            r || null == a.return || a.return()
          } finally {
            if (i) throw o
          }
        }
        return n
      }(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }()
    }
    var s = function(e) {
      return e.reduce(function(e, t) {
        var n = o(t, 2),
          s = n[0],
          a = n[1],
          u = function(e) {
            return function(t) {
              return `${e}=${t&&!(0,r.isToken)(t)?(0,r.quote)(t):t}`
            }
          }(s);
        if (!(0, r.isToken)(s)) throw new TypeError;
        return Array.isArray(a) ? i(e).concat(i(a.map(u))) : i(e).concat([u(a)])
      }, [])
    };
    t.default = function(e, t, n) {
      var o = "string" == typeof e ? {
        scheme: e,
        token: t,
        params: n
      } : e;
      if ("object" != typeof o) throw new TypeError;
      if (!(0, r.isScheme)(o.scheme)) throw new TypeError("Invalid scheme.");
      return [o.scheme].concat(i(void 0 !== o.token ? [o.token] : []), i(void 0 !== o.params ? function e(t, n) {
        if (Array.isArray(t)) return s(t);
        if ("object" == typeof t) {
          var r = t;
          return e(Object.keys(t).map(function(e) {
            return [e, r[e]]
          }), n)
        }
        throw new TypeError
      }(o.params) : [])).join(" ")
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = n(16),
      i = /((?:[a-zA-Z0-9._~+\/-]+=*(?:\s+|$))|[^\u0000-\u001F\u007F()<>@,;:\\"\/?={}\[\]\u0020\u0009]+)(?:=([^\\"=\s,]+|"(?:[^"\\]|\\.)*"))?/g,
      o = function(e, t) {
        var n = '"' === t.charAt(0) ? (0, r.unquote)(t) : t.trim();
        return Array.isArray(e) ? e.concat(n) : "string" == typeof e ? [e, n] : n
      };
    t.default = function(e) {
      if ("string" != typeof e) throw new TypeError("Header value must be a string.");
      var t = e.indexOf(" "),
        n = e.substr(0, t);
      if (!(0, r.isScheme)(n)) throw new TypeError(`Invalid scheme ${n}`);
      return function(e, t) {
        for (var n = null, r = {};;) {
          var s = i.exec(t);
          if (null === s) break;
          s[2] ? r[s[1]] = o(r[s[1]], s[2]) : n = o(n, s[1])
        }
        return {
          scheme: e,
          params: r,
          token: n
        }
      }(n, e.substr(t))
    }
  }, function(e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;

    function s(e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e)
    }
    e.exports = function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
            return t[e]
          }).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
          r[e] = e
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
      } catch (e) {
        return !1
      }
    }() ? Object.assign : function(e, t) {
      for (var n, a, u = s(e), c = 1; c < arguments.length; c++) {
        for (var f in n = Object(arguments[c])) i.call(n, f) && (u[f] = n[f]);
        if (r) {
          a = r(n);
          for (var l = 0; l < a.length; l++) o.call(n, a[l]) && (u[a[l]] = n[a[l]])
        }
      }
      return u
    }
  }, function(e, t, n) {
    (function(e) {
      var r = Object.getOwnPropertyDescriptors || function(e) {
          for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
          return n
        },
        i = /%[sdj%]/g;
      t.format = function(e) {
        if (!v(e)) {
          for (var t = [], n = 0; n < arguments.length; n++) t.push(a(arguments[n]));
          return t.join(" ")
        }
        n = 1;
        for (var r = arguments, o = r.length, s = String(e).replace(i, function(e) {
            if ("%%" === e) return "%";
            if (n >= o) return e;
            switch (e) {
              case "%s":
                return String(r[n++]);
              case "%d":
                return Number(r[n++]);
              case "%j":
                try {
                  return JSON.stringify(r[n++])
                } catch (e) {
                  return "[Circular]"
                }
                default:
                  return e
            }
          }), u = r[n]; n < o; u = r[++n]) y(u) || !b(u) ? s += " " + u : s += " " + a(u);
        return s
      }, t.deprecate = function(n, r) {
        if (void 0 !== e && !0 === e.noDeprecation) return n;
        if (void 0 === e) return function() {
          return t.deprecate(n, r).apply(this, arguments)
        };
        var i = !1;
        return function() {
          if (!i) {
            if (e.throwDeprecation) throw new Error(r);
            e.traceDeprecation ? console.trace(r) : console.error(r), i = !0
          }
          return n.apply(this, arguments)
        }
      };
      var o, s = {};

      function a(e, n) {
        var r = {
          seen: [],
          stylize: c
        };
        return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), d(n) ? r.showHidden = n : n && t._extend(r, n), m(r.showHidden) && (r.showHidden = !1), m(r.depth) && (r.depth = 2), m(r.colors) && (r.colors = !1), m(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = u), f(r, e, r.depth)
      }

      function u(e, t) {
        var n = a.styles[t];
        return n ? "[" + a.colors[n][0] + "m" + e + "[" + a.colors[n][1] + "m" : e
      }

      function c(e, t) {
        return e
      }

      function f(e, n, r) {
        if (e.customInspect && n && S(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
          var i = n.inspect(r, e);
          return v(i) || (i = f(e, i, r)), i
        }
        var o = function(e, t) {
          if (m(t)) return e.stylize("undefined", "undefined");
          if (v(t)) {
            var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return e.stylize(n, "string")
          }
          if (g(t)) return e.stylize("" + t, "number");
          if (d(t)) return e.stylize("" + t, "boolean");
          if (y(t)) return e.stylize("null", "null")
        }(e, n);
        if (o) return o;
        var s = Object.keys(n),
          a = function(e) {
            var t = {};
            return e.forEach(function(e, n) {
              t[e] = !0
            }), t
          }(s);
        if (e.showHidden && (s = Object.getOwnPropertyNames(n)), E(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return l(n);
        if (0 === s.length) {
          if (S(n)) {
            var u = n.name ? ": " + n.name : "";
            return e.stylize("[Function" + u + "]", "special")
          }
          if (w(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
          if (O(n)) return e.stylize(Date.prototype.toString.call(n), "date");
          if (E(n)) return l(n)
        }
        var c, b = "",
          k = !1,
          _ = ["{", "}"];
        (h(n) && (k = !0, _ = ["[", "]"]), S(n)) && (b = " [Function" + (n.name ? ": " + n.name : "") + "]");
        return w(n) && (b = " " + RegExp.prototype.toString.call(n)), O(n) && (b = " " + Date.prototype.toUTCString.call(n)), E(n) && (b = " " + l(n)), 0 !== s.length || k && 0 != n.length ? r < 0 ? w(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), c = k ? function(e, t, n, r, i) {
          for (var o = [], s = 0, a = t.length; s < a; ++s) A(t, String(s)) ? o.push(p(e, t, n, r, String(s), !0)) : o.push("");
          return i.forEach(function(i) {
            i.match(/^\d+$/) || o.push(p(e, t, n, r, i, !0))
          }), o
        }(e, n, r, a, s) : s.map(function(t) {
          return p(e, n, r, a, t, k)
        }), e.seen.pop(), function(e, t, n) {
          if (e.reduce(function(e, t) {
              return 0, t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
            }, 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
          return n[0] + t + " " + e.join(", ") + " " + n[1]
        }(c, b, _)) : _[0] + b + _[1]
      }

      function l(e) {
        return "[" + Error.prototype.toString.call(e) + "]"
      }

      function p(e, t, n, r, i, o) {
        var s, a, u;
        if ((u = Object.getOwnPropertyDescriptor(t, i) || {
            value: t[i]
          }).get ? a = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (a = e.stylize("[Setter]", "special")), A(r, i) || (s = "[" + i + "]"), a || (e.seen.indexOf(u.value) < 0 ? (a = y(n) ? f(e, u.value, null) : f(e, u.value, n - 1)).indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(e) {
            return "  " + e
          }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
            return "   " + e
          }).join("\n")) : a = e.stylize("[Circular]", "special")), m(s)) {
          if (o && i.match(/^\d+$/)) return a;
          (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
        }
        return s + ": " + a
      }

      function h(e) {
        return Array.isArray(e)
      }

      function d(e) {
        return "boolean" == typeof e
      }

      function y(e) {
        return null === e
      }

      function g(e) {
        return "number" == typeof e
      }

      function v(e) {
        return "string" == typeof e
      }

      function m(e) {
        return void 0 === e
      }

      function w(e) {
        return b(e) && "[object RegExp]" === k(e)
      }

      function b(e) {
        return "object" == typeof e && null !== e
      }

      function O(e) {
        return b(e) && "[object Date]" === k(e)
      }

      function E(e) {
        return b(e) && ("[object Error]" === k(e) || e instanceof Error)
      }

      function S(e) {
        return "function" == typeof e
      }

      function k(e) {
        return Object.prototype.toString.call(e)
      }

      function _(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10)
      }
      t.debuglog = function(n) {
        if (m(o) && (o = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !s[n])
          if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
            var r = e.pid;
            s[n] = function() {
              var e = t.format.apply(t, arguments);
              console.error("%s %d: %s", n, r, e)
            }
          } else s[n] = function() {};
        return s[n]
      }, t.inspect = a, a.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
      }, a.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      }, t.isArray = h, t.isBoolean = d, t.isNull = y, t.isNullOrUndefined = function(e) {
        return null == e
      }, t.isNumber = g, t.isString = v, t.isSymbol = function(e) {
        return "symbol" == typeof e
      }, t.isUndefined = m, t.isRegExp = w, t.isObject = b, t.isDate = O, t.isError = E, t.isFunction = S, t.isPrimitive = function(e) {
        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
      }, t.isBuffer = n(43);
      var P = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      function j() {
        var e = new Date,
          t = [_(e.getHours()), _(e.getMinutes()), _(e.getSeconds())].join(":");
        return [e.getDate(), P[e.getMonth()], t].join(" ")
      }

      function A(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
      t.log = function() {
        console.log("%s - %s", j(), t.format.apply(t, arguments))
      }, t.inherits = n(44), t._extend = function(e, t) {
        if (!t || !b(t)) return e;
        for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
        return e
      };
      var T = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

      function x(e, t) {
        if (!e) {
          var n = new Error("Promise was rejected with a falsy value");
          n.reason = e, e = n
        }
        return t(e)
      }
      t.promisify = function(e) {
        if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
        if (T && e[T]) {
          var t;
          if ("function" != typeof(t = e[T])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          return Object.defineProperty(t, T, {
            value: t,
            enumerable: !1,
            writable: !1,
            configurable: !0
          }), t
        }

        function t() {
          for (var t, n, r = new Promise(function(e, r) {
              t = e, n = r
            }), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
          i.push(function(e, r) {
            e ? n(e) : t(r)
          });
          try {
            e.apply(this, i)
          } catch (e) {
            n(e)
          }
          return r
        }
        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), T && Object.defineProperty(t, T, {
          value: t,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), Object.defineProperties(t, r(e))
      }, t.promisify.custom = T, t.callbackify = function(t) {
        if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

        function n() {
          for (var n = [], r = 0; r < arguments.length; r++) n.push(arguments[r]);
          var i = n.pop();
          if ("function" != typeof i) throw new TypeError("The last argument must be of type Function");
          var o = this,
            s = function() {
              return i.apply(o, arguments)
            };
          t.apply(this, n).then(function(t) {
            e.nextTick(s, null, t)
          }, function(t) {
            e.nextTick(x, t, s)
          })
        }
        return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), Object.defineProperties(n, r(t)), n
      }
    }).call(this, n(42))
  }, function(e, t) {
    var n, r, i = e.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined")
    }

    function s() {
      throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }! function() {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o
      } catch (e) {
        n = o
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (e) {
        r = s
      }
    }();
    var u, c = [],
      f = !1,
      l = -1;

    function p() {
      f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && h())
    }

    function h() {
      if (!f) {
        var e = a(p);
        f = !0;
        for (var t = c.length; t;) {
          for (u = c, c = []; ++l < t;) u && u[l].run();
          l = -1, t = c.length
        }
        u = null, f = !1,
          function(e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
            try {
              r(e)
            } catch (t) {
              try {
                return r.call(null, e)
              } catch (t) {
                return r.call(this, e)
              }
            }
          }(e)
      }
    }

    function d(e, t) {
      this.fun = e, this.array = t
    }

    function y() {}
    i.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new d(e, t)), 1 !== c.length || f || a(h)
    }, d.prototype.run = function() {
      this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = y, i.addListener = y, i.once = y, i.off = y, i.removeListener = y, i.removeAllListeners = y, i.emit = y, i.prependListener = y, i.prependOnceListener = y, i.listeners = function(e) {
      return []
    }, i.binding = function(e) {
      throw new Error("process.binding is not supported")
    }, i.cwd = function() {
      return "/"
    }, i.chdir = function(e) {
      throw new Error("process.chdir is not supported")
    }, i.umask = function() {
      return 0
    }
  }, function(e, t) {
    e.exports = function(e) {
      return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
    }
  }, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
      e.super_ = t, e.prototype = Object.create(t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })
    } : e.exports = function(e, t) {
      e.super_ = t;
      var n = function() {};
      n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    }
  }, function(e, t, n) {
    "use strict";
    var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    var i = n(20),
      o = function() {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.initialize(t, n)
        }
        return r(e, null, [{
          key: "schema",
          get: function() {
            throw new Error("Schema must be defined by classes extending JSONDocument")
          }
        }]), r(e, [{
          key: "initialize",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = this.constructor.schema;
            n.initialize(this, e, t)
          }
        }, {
          key: "validate",
          value: function(e) {
            var t = this.constructor.schema;
            return (e || t).validate(this)
          }
        }, {
          key: "patch",
          value: function(e) {
            var t = new i(e);
            t.apply(this)
          }
        }, {
          key: "select",
          value: function() {}
        }, {
          key: "project",
          value: function(e) {
            return e.project(this)
          }
        }], [{
          key: "serialize",
          value: function(e) {
            return JSON.stringify(e)
          }
        }, {
          key: "deserialize",
          value: function(e) {
            try {
              return JSON.parse(e)
            } catch (e) {
              throw new Error("Failed to parse JSON")
            }
          }
        }]), e
      }();
    e.exports = o
  }, function(e, t, n) {
    "use strict";
    var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    var i = n(11),
      o = 1,
      s = function() {
        function e(t) {
          var n = this;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), Object.defineProperty(this, "mapping", {
            enumerable: !1,
            value: new Map
          }), Object.keys(t).forEach(function(e) {
            var r = t[e];
            n.mapping.set(new i(e, o), new i(r, o))
          })
        }
        return r(e, [{
          key: "map",
          value: function(e, t) {
            this.mapping.forEach(function(n, r) {
              r.add(e, n.get(t))
            })
          }
        }, {
          key: "project",
          value: function(e, t) {
            this.mapping.forEach(function(n, r) {
              n.add(t, r.get(e))
            })
          }
        }]), e
      }();
    e.exports = s
  }, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }();

    function o(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }
    var s = n(19),
      a = n(21),
      u = function() {
        function e(t) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), Object.assign(this, t), Object.defineProperties(this, {
            initialize: {
              enumerable: !1,
              writeable: !1,
              value: s.compile(t)
            },
            validate: {
              enumerable: !1,
              writeable: !1,
              value: a.compile(t)
            }
          })
        }
        return i(e, [{
          key: "extend",
          value: function(t) {
            function n(e) {
              return e && "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && !Array.isArray(e)
            }
            return new e(function e(t, r) {
              var i = Object.assign({}, t);
              return n(t) && n(r) && Object.keys(r).forEach(function(s) {
                n(r[s]) && s in t ? i[s] = e(t[s], r[s]) : Object.assign(i, o({}, s, r[s]))
              }), i
            }(this, t))
          }
        }]), e
      }();
    e.exports = u
  }, function(e, t, n) {
    "use strict";
    (function(e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n(52);

      function i(t, n) {
        return void 0 === n && (n = "utf8"), e.isBuffer(t) ? s(t.toString("base64")) : s(e.from(t, n).toString("base64"))
      }

      function o(e) {
        return e = e.toString(), r.default(e).replace(/\-/g, "+").replace(/_/g, "/")
      }

      function s(e) {
        return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
      }
      var a = i;
      a.encode = i, a.decode = function(t, n) {
        return void 0 === n && (n = "utf8"), e.from(o(t), "base64").toString(n)
      }, a.toBase64 = o, a.fromBase64 = s, a.toBuffer = function(t) {
        return e.from(o(t), "base64")
      }, t.default = a
    }).call(this, n(4).Buffer)
  }, function(e, t, n) {
    "use strict";
    t.byteLength = function(e) {
      var t = c(e),
        n = t[0],
        r = t[1];
      return 3 * (n + r) / 4 - r
    }, t.toByteArray = function(e) {
      var t, n, r = c(e),
        s = r[0],
        a = r[1],
        u = new o(function(e, t, n) {
          return 3 * (t + n) / 4 - n
        }(0, s, a)),
        f = 0,
        l = a > 0 ? s - 4 : s;
      for (n = 0; n < l; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], u[f++] = t >> 16 & 255, u[f++] = t >> 8 & 255, u[f++] = 255 & t;
      2 === a && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, u[f++] = 255 & t);
      1 === a && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, u[f++] = t >> 8 & 255, u[f++] = 255 & t);
      return u
    }, t.fromByteArray = function(e) {
      for (var t, n = e.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) o.push(f(e, s, s + 16383 > a ? a : s + 16383));
      1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
      return o.join("")
    };
    for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) r[a] = s[a], i[s.charCodeAt(a)] = a;

    function c(e) {
      var t = e.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var n = e.indexOf("=");
      return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
    }

    function f(e, t, n) {
      for (var i, o, s = [], a = t; a < n; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
      return s.join("")
    }
    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
  }, function(e, t) {
    t.read = function(e, t, n, r, i) {
      var o, s, a = 8 * i - r - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        f = -7,
        l = n ? i - 1 : 0,
        p = n ? -1 : 1,
        h = e[t + l];
      for (l += p, o = h & (1 << -f) - 1, h >>= -f, f += a; f > 0; o = 256 * o + e[t + l], l += p, f -= 8);
      for (s = o & (1 << -f) - 1, o >>= -f, f += r; f > 0; s = 256 * s + e[t + l], l += p, f -= 8);
      if (0 === o) o = 1 - c;
      else {
        if (o === u) return s ? NaN : 1 / 0 * (h ? -1 : 1);
        s += Math.pow(2, r), o -= c
      }
      return (h ? -1 : 1) * s * Math.pow(2, o - r)
    }, t.write = function(e, t, n, r, i, o) {
      var s, a, u, c = 8 * o - i - 1,
        f = (1 << c) - 1,
        l = f >> 1,
        p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        h = r ? 0 : o - 1,
        d = r ? 1 : -1,
        y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + l >= 1 ? p / u : p * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + h] = 255 & a, h += d, a /= 256, i -= 8);
      for (s = s << i | a, c += i; c > 0; e[n + h] = 255 & s, h += d, s /= 256, c -= 8);
      e[n + h - d] |= 128 * y
    }
  }, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
      return "[object Array]" == n.call(e)
    }
  }, function(e, t, n) {
    "use strict";
    (function(e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(t) {
        var n = t.length,
          r = n % 4;
        if (!r) return t;
        var i = n,
          o = 4 - r,
          s = n + o,
          a = e.alloc(s);
        for (a.write(t); o--;) a.write("=", i++);
        return a.toString()
      }
    }).call(this, n(4).Buffer)
  }, function(e, t, n) {
    "use strict";
    var r = n(54),
      i = n(55),
      o = n(57),
      s = new(n(58));
    s.define("HS256", "sign", new i({
      name: "HMAC",
      hash: {
        name: "SHA-256"
      }
    })), s.define("HS384", "sign", new i({
      name: "HMAC",
      hash: {
        name: "SHA-384"
      }
    })), s.define("HS512", "sign", new i({
      name: "HMAC",
      hash: {
        name: "SHA-512"
      }
    })), s.define("RS256", "sign", new o({
      name: "RSASSA-PKCS1-v1_5",
      hash: {
        name: "SHA-256"
      }
    })), s.define("RS384", "sign", new o({
      name: "RSASSA-PKCS1-v1_5",
      hash: {
        name: "SHA-384"
      }
    })), s.define("RS512", "sign", new o({
      name: "RSASSA-PKCS1-v1_5",
      hash: {
        name: "SHA-512"
      }
    })), s.define("none", "sign", new r({})), s.define("HS256", "verify", new i({
      name: "HMAC",
      hash: {
        name: "SHA-256"
      }
    })), s.define("HS384", "verify", new i({
      name: "HMAC",
      hash: {
        name: "SHA-384"
      }
    })), s.define("HS512", "verify", new i({
      name: "HMAC",
      hash: {
        name: "SHA-512"
      }
    })), s.define("RS256", "verify", new o({
      name: "RSASSA-PKCS1-v1_5",
      hash: {
        name: "SHA-256"
      }
    })), s.define("RS384", "verify", new o({
      name: "RSASSA-PKCS1-v1_5",
      hash: {
        name: "SHA-384"
      }
    })), s.define("RS512", "verify", new o({
      name: "RSASSA-PKCS1-v1_5",
      hash: {
        name: "SHA-512"
      }
    })), s.define("none", "verify", new r({})), s.define("RS256", "importKey", new o({
      name: "RSASSA-PKCS1-v1_5",
      hash: {
        name: "SHA-256"
      }
    })), s.define("RS384", "importKey", new o({
      name: "RSASSA-PKCS1-v1_5",
      hash: {
        name: "SHA-384"
      }
    })), s.define("RS512", "importKey", new o({
      name: "RSASSA-PKCS1-v1_5",
      hash: {
        name: "SHA-512"
      }
    })), e.exports = s
  }, function(e, t, n) {
    "use strict";
    var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    var i = function() {
      function e() {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      return r(e, [{
        key: "sign",
        value: function() {
          return Promise.resolve("")
        }
      }, {
        key: "verify",
        value: function() {}
      }]), e
    }();
    e.exports = i
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }();
      var i = n(2),
        o = n(8),
        s = n(22),
        a = function() {
          function e(t) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.params = t
          }
          return r(e, [{
            key: "sign",
            value: function(e, n) {
              var r = this.params;
              return n = (new s).encode(n), o.subtle.sign(r, e, n).then(function(e) {
                return i(t.from(e))
              })
            }
          }, {
            key: "verify",
            value: function(e, t, n) {
              var r = this.params;
              return "string" == typeof t && (t = Uint8Array.from(i.toBuffer(t))), "string" == typeof n && (n = (new s).encode(n)), o.subtle.verify(r, e, t, n)
            }
          }, {
            key: "assertSufficientKeyLength",
            value: function(e) {
              if (e.length < this.bitlength) throw new Error("The key is too short.")
            }
          }]), e
        }();
      e.exports = a
    }).call(this, n(4).Buffer)
  }, function(e, t) {
    e.exports = r
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }();
      var i = n(2),
        o = n(8),
        s = n(22),
        a = function() {
          function e(t) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.params = t
          }
          return r(e, [{
            key: "sign",
            value: function(e, n) {
              var r = this.params;
              return n = (new s).encode(n), o.subtle.sign(r, e, n).then(function(e) {
                return i(t.from(e))
              })
            }
          }, {
            key: "verify",
            value: function(e, t, n) {
              var r = this.params;
              return "string" == typeof t && (t = Uint8Array.from(i.toBuffer(t))), "string" == typeof n && (n = (new s).encode(n)), o.subtle.verify(r, e, t, n)
            }
          }, {
            key: "importKey",
            value: function(e) {
              var t = Object.assign({}, e),
                n = this.params,
                r = e.key_ops || [];
              return "sig" === e.use && r.push("verify"), "enc" === e.use ? Promise.resolve(e) : (e.key_ops && (r = e.key_ops), o.subtle.importKey("jwk", t, n, !0, r).then(function(e) {
                return Object.defineProperty(t, "cryptoKey", {
                  enumerable: !1,
                  value: e
                }), t
              }))
            }
          }]), e
        }();
      e.exports = a
    }).call(this, n(4).Buffer)
  }, function(e, t, n) {
    "use strict";
    var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    var i = n(23),
      o = ["sign", "verify", "encrypt", "decrypt", "importKey"],
      s = function() {
        function e() {
          var t = this;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), o.forEach(function(e) {
            t[e] = {}
          })
        }
        return r(e, [{
          key: "define",
          value: function(e, t, n) {
            this[t][e] = n
          }
        }, {
          key: "normalize",
          value: function(e, t) {
            var n = this[e];
            if (!n) return new SyntaxError;
            var r = n[t];
            return r || new i(t)
          }
        }], [{
          key: "operations",
          get: function() {
            return o
          }
        }]), e
      }();
    e.exports = s
  }, function(e, t, n) {
    "use strict";
    var r = n(1).Formats;
    r.register("StringOrURI", new RegExp), r.register("NumericDate", new RegExp), r.register("URI", new RegExp), r.register("url", new RegExp), r.register("base64", new RegExp), r.register("base64url", new RegExp), r.register("MediaType", new RegExp)
  }, function(e, t, n) {
    "use strict";
    var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    var i = n(1).JSONDocument,
      o = n(27),
      s = n(26),
      a = function(e) {
        function t() {
          return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t),
            function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i), r(t, null, [{
          key: "importKeys",
          value: function(e) {
            var n = this.schema.validate(e);
            if (!n.valid) return Promise.reject(new Error("Invalid JWKSet: " + JSON.stringify(n, null, 2)));
            if (!e.keys) return Promise.reject(new Error("Cannot import JWKSet: keys property is empty"));
            var r = void 0,
              i = void 0;
            try {
              r = new t(e), i = e.keys.map(function(e) {
                return s.importKey(e)
              })
            } catch (e) {
              return Promise.reject(e)
            }
            return Promise.all(i).then(function(e) {
              return r.keys = e, r
            })
          }
        }, {
          key: "schema",
          get: function() {
            return o
          }
        }]), t
      }();
    e.exports = a
  }, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }();
    var o = n(2),
      s = n(1).JSONDocument,
      a = n(28),
      u = n(32),
      c = n(25),
      f = function(e) {
        function t() {
          return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t),
            function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, s), i(t, [{
          key: "isJWE",
          value: function() {
            return !!this.header.enc
          }
        }, {
          key: "resolveKeys",
          value: function(e) {
            var t = this.header.kid,
              n = void 0,
              i = void 0;
            if (Array.isArray(e) && (n = e), e.keys && (n = e.keys), e.keys || "object" !== (void 0 === e ? "undefined" : r(e)) || (n = [e]), !n) throw new c("Invalid JWK argument");
            return !!(i = t ? n.find(function(e) {
              return e.kid === t
            }) : n.find(function(e) {
              return "sig" === e.use
            })) && (this.key = i.cryptoKey, !0)
          }
        }, {
          key: "encode",
          value: function() {
            var e = this.validate();
            if (!e.valid) return Promise.reject(e);
            return this.isJWE() ? JWE.encrypt(this) : u.sign(this)
          }
        }, {
          key: "verify",
          value: function() {
            var e = this.validate();
            return e.valid ? u.verify(this) : Promise.reject(e)
          }
        }], [{
          key: "decode",
          value: function(e) {
            var t = void 0;
            if ("string" != typeof e) throw new c("JWT must be a string");
            if (e.startsWith("{")) {
              try {
                e = JSON.parse(e, function() {})
              } catch (e) {
                throw new c("Invalid JWT serialization")
              }
              e.signatures || e.recipients ? e.serialization = "json" : e.serialization = "flattened", t = new this(e, {
                filter: !1
              })
            } else try {
              var n = e.split("."),
                r = n.length;
              if (3 !== r && 5 !== r) throw new Error("Malformed JWT");
              var i = JSON.parse(o.decode(n[0]));
              if (3 === r) {
                t = new this({
                  type: "JWS",
                  segments: n,
                  header: i,
                  payload: JSON.parse(o.decode(n[1])),
                  signature: n[2],
                  serialization: "compact"
                }, {
                  filter: !1
                })
              }
            } catch (e) {
              throw new c("Invalid JWT compact serialization")
            }
            return t
          }
        }, {
          key: "encode",
          value: function(e, n, r) {
            return new t(e, n).encode(r)
          }
        }, {
          key: "verify",
          value: function(e, n) {
            var r = t.decode(n);
            return r.key = e, r.verify().then(function(e) {
              return r
            })
          }
        }, {
          key: "schema",
          get: function() {
            return a
          }
        }]), t
      }();
    e.exports = f
  }, function(e, t, n) {
    (function(t) {
      const r = n(10),
        i = n(2),
        o = n(8),
        {
          JWT: s
        } = n(3),
        a = n(13),
        {
          URL: u
        } = n(6);
      class c {
        static create(e, n, s) {
          const {
            provider: f,
            defaults: l,
            registration: p
          } = e;
          let h, d, y, g;
          return Promise.resolve().then(() => (r(f.configuration, "RelyingParty provider OpenID Configuration is missing"), r(l.authenticate, "RelyingParty default authentication parameters are missing"), r(p, "RelyingParty client registration is missing"), h = f.configuration.issuer, d = f.configuration.authorization_endpoint, y = {
            client_id: p.client_id
          }, g = Object.assign(l.authenticate, y, n), r(h, "Missing issuer in provider OpenID Configuration"), r(d, "Missing authorization_endpoint in provider OpenID Configuration"), r(g.scope, "Missing scope parameter in authentication request"), r(g.response_type, "Missing response_type parameter in authentication request"), r(g.client_id, "Missing client_id parameter in authentication request"), r(g.redirect_uri, "Missing redirect_uri parameter in authentication request"), g.state = Array.from(o.getRandomValues(new Uint8Array(16))), g.nonce = Array.from(o.getRandomValues(new Uint8Array(16))), Promise.all([o.subtle.digest({
            name: "SHA-256"
          }, new Uint8Array(g.state)), o.subtle.digest({
            name: "SHA-256"
          }, new Uint8Array(g.nonce))]))).then(e => {
            let n = i(t.from(e[0])),
              r = i(t.from(e[1]));
            s[`${h}/requestHistory/${n}`] = JSON.stringify(g), g.state = n, g.nonce = r
          }).then(() => c.generateSessionKeys()).then(e => {
            c.storeSessionKeys(e, g, s)
          }).then(() => {
            if (f.configuration.request_parameter_supported) return c.encodeRequestParams(g).then(e => {
              g = e
            })
          }).then(() => {
            let e = new u(d);
            return e.search = a.encode(g), e.href
          })
        }
        static generateSessionKeys() {
          return o.subtle.generateKey({
            name: "RSASSA-PKCS1-v1_5",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: {
              name: "SHA-256"
            }
          }, !0, ["sign", "verify"]).then(e => Promise.all([o.subtle.exportKey("jwk", e.publicKey), o.subtle.exportKey("jwk", e.privateKey)])).then(e => {
            let [t, n] = e;
            return {
              public: t,
              private: n
            }
          })
        }
        static storeSessionKeys(e, t, n) {
          n["oidc.session.privateKey"] = JSON.stringify(e.private), t.key = e.public
        }
        static encodeRequestParams(e) {
          const t = ["scope", "client_id", "response_type", "state"],
            n = Object.keys(e).filter(e => !t.includes(e));
          let r = {};
          return n.forEach(t => {
            r[t] = e[t]
          }), new s({
            header: {
              alg: "none"
            },
            payload: r
          }, {
            filter: !1
          }).encode().then(t => {
            return {
              scope: e.scope,
              client_id: e.client_id,
              response_type: e.response_type,
              request: t,
              state: e.state
            }
          })
        }
      }
      e.exports = c
    }).call(this, n(4).Buffer)
  }, function(e, t, n) {
    (function(t, r) {
      const {
        URL: i
      } = n(6), o = n(10), s = n(8), a = n(2), u = n(7), c = u.Headers ? u.Headers : t.Headers, f = n(13), l = n(64), p = n(66), h = n(14), d = n(68);
      class y {
        constructor({
          rp: e,
          redirect: t,
          body: n,
          session: r,
          mode: i,
          params: o = {}
        }) {
          this.rp = e, this.redirect = t, this.body = n, this.session = r, this.mode = i, this.params = o
        }
        static validateResponse(e) {
          return Promise.resolve(e).then(this.parseResponse).then(this.errorResponse).then(this.matchRequest).then(this.validateStateParam).then(this.validateResponseMode).then(this.validateResponseParams).then(this.exchangeAuthorizationCode).then(this.validateIDToken).then(p.fromAuthResponse)
        }
        static parseResponse(e) {
          let {
            redirect: t,
            body: n
          } = e;
          if (t && n || !t && !n) throw new d(400, "Invalid response mode");
          if (t) {
            let n = new i(t),
              {
                search: r,
                hash: o
              } = n;
            if (r && o || !r && !o) throw new d(400, "Invalid response mode");
            r && (e.params = f.decode(r.substring(1)), e.mode = "query"), o && (e.params = f.decode(o.substring(1)), e.mode = "fragment")
          }
          return n && (e.params = f.decode(n), e.mode = "form_post"), e
        }
        static errorResponse(e) {
          const t = e.params.error;
          if (t) {
            const n = {};
            n.error = t, n.error_description = e.params.error_description, n.error_uri = e.params.error_uri, n.state = e.params.state;
            const r = new Error(`AuthenticationResponse error: ${t}`);
            throw r.info = n, r
          }
          return e
        }
        static matchRequest(e) {
          let {
            rp: t,
            params: n,
            session: r
          } = e, i = n.state, o = t.provider.configuration.issuer;
          if (!i) throw new Error("Missing state parameter in authentication response");
          let s = r[`${o}/requestHistory/${i}`];
          if (!s) throw new Error("Mismatching state parameter in authentication response");
          return e.request = JSON.parse(s), e
        }
        static validateStateParam(e) {
          let t = new Uint8Array(e.request.state),
            n = e.params.state;
          return s.subtle.digest({
            name: "SHA-256"
          }, t).then(t => {
            if (n !== a(r.from(t))) throw new Error("Mismatching state parameter in authentication response");
            return e
          })
        }
        static validateResponseMode(e) {
          if ("code" !== e.request.response_type && "query" === e.mode) throw new Error("Invalid response mode");
          return e
        }
        static validateResponseParams(e) {
          let {
            request: t,
            params: n
          } = e, r = t.response_type.split(" ");
          return r.includes("code") && o(n.code, "Missing authorization code in authentication response"), r.includes("id_token") && o(n.id_token, "Missing id_token in authentication response"), r.includes("token") && (o(n.access_token, "Missing access_token in authentication response"), o(n.token_type, "Missing token_type in authentication response")), e
        }
        static exchangeAuthorizationCode(e) {
          let {
            rp: t,
            params: n,
            request: i
          } = e, s = n.code;
          if (!s || "code" !== i.response_type) return Promise.resolve(e);
          let {
            provider: a,
            registration: l
          } = t, p = l.client_id, d = l.client_secret;
          if (!d) return Promise.reject(new Error("Client cannot exchange authorization code because it is not a confidential client"));
          let y = a.configuration.token_endpoint,
            g = new c({
              "Content-Type": "application/x-www-form-urlencoded"
            }),
            v = {
              grant_type: "authorization_code",
              code: s,
              redirect_uri: i.redirect_uri
            },
            m = l.token_endpoint_auth_method || "client_secret_basic";
          if ("client_secret_basic" === m) {
            let e = new r(`${p}:${d}`).toString("base64");
            g.set("Authorization", `Basic ${e}`)
          }
          "client_secret_post" === m && (v.client_id = p, v.client_secret = d);
          let w = f.encode(v);
          return u(y, {
            method: "POST",
            headers: g,
            body: w
          }).then(h("Error exchanging authorization code")).then(e => e.json()).then(t => (o(t.access_token, "Missing access_token in token response"), o(t.token_type, "Missing token_type in token response"), o(t.id_token, "Missing id_token in token response"), e.params = Object.assign(e.params, t), e))
        }
        static validateIDToken(e) {
          return e.params.id_token ? Promise.resolve(e).then(y.decryptIDToken).then(y.decodeIDToken).then(y.validateIssuer).then(y.validateAudience).then(y.resolveKeys).then(y.verifySignature).then(y.validateExpires).then(y.verifyNonce).then(y.validateAcr).then(y.validateAuthTime).then(y.validateAccessTokenHash).then(y.validateAuthorizationCodeHash) : Promise.resolve(e)
        }
        static decryptIDToken(e) {
          return Promise.resolve(e)
        }
        static decodeIDToken(e) {
          let t = e.params.id_token;
          try {
            e.decoded = l.decode(t)
          } catch (e) {
            const n = new d(400, "Error decoding ID Token");
            throw n.cause = e, n.info = {
              id_token: t
            }, n
          }
          return e
        }
        static validateIssuer(e) {
          let t = e.rp.provider.configuration;
          if (e.decoded.payload.iss !== t.issuer) throw new Error("Mismatching issuer in ID Token");
          return e
        }
        static validateAudience(e) {
          let t = e.rp.registration,
            {
              aud: n,
              azp: r
            } = e.decoded.payload;
          if ("string" == typeof n && n !== t.client_id) throw new Error("Mismatching audience in id_token");
          if (Array.isArray(n) && !n.includes(t.client_id)) throw new Error("Mismatching audience in id_token");
          if (Array.isArray(n) && !r) throw new Error("Missing azp claim in id_token");
          if (r && r !== t.client_id) throw new Error("Mismatching azp claim in id_token");
          return e
        }
        static resolveKeys(e) {
          let t = e.rp,
            n = t.provider,
            r = e.decoded;
          return Promise.resolve(n.jwks).then(e => e || t.jwks()).then(t => {
            if (r.resolveKeys(t)) return Promise.resolve(e);
            throw new Error("Cannot resolve signing key for ID Token")
          })
        }
        static verifySignature(e) {
          let t = e.decoded.header.alg,
            n = e.rp.registration.id_token_signed_response_alg || "RS256";
          if (t !== n) throw new Error(`Expected ID Token to be signed with ${n}`);
          return e.decoded.verify().then(t => {
            if (!t) throw new Error("Invalid ID Token signature");
            return e
          })
        }
        static validateExpires(e) {
          if (e.decoded.payload.exp <= Math.floor(Date.now() / 1e3)) throw new Error("Expired ID Token");
          return e
        }
        static verifyNonce(e) {
          let t = new Uint8Array(e.request.nonce),
            n = e.decoded.payload.nonce;
          if (!n) throw new Error("Missing nonce in ID Token");
          return s.subtle.digest({
            name: "SHA-256"
          }, t).then(t => {
            if (n !== a(r.from(t))) throw new Error("Mismatching nonce in ID Token");
            return e
          })
        }
        static validateAcr(e) {
          return e
        }
        static validateAuthTime(e) {
          return e
        }
        static validateAccessTokenHash(e) {
          return e
        }
        static validateAuthorizationCodeHash(e) {
          return e
        }
      }
      e.exports = y
    }).call(this, n(5), n(4).Buffer)
  }, function(e, t, n) {
    const {
      JWT: r
    } = n(3), i = n(65);
    e.exports = class extends r {
      static get schema() {
        return i
      }
    }
  }, function(e, t, n) {
    const {
      JWTSchema: r
    } = n(3), i = r.extend({
      properties: {
        header: {},
        payload: {
          properties: {
            iss: {
              type: "string",
              format: "url"
            },
            sub: {
              type: "string",
              maxLength: 255
            },
            auth_time: {
              type: "integer",
              format: "NumericDate"
            },
            nonce: {
              type: "string"
            },
            acr: {
              type: "string"
            },
            amr: {
              type: "array",
              items: {
                type: "string"
              }
            },
            azp: {
              type: "string",
              format: "StringOrURI"
            }
          },
          required: ["iss", "sub", "aud", "exp", "iat"]
        }
      }
    });
    e.exports = i
  }, function(e, t, n) {
    "use strict";
    const r = n(7),
      i = n(14),
      o = n(67);
    class s {
      constructor(e) {
        this.credentialType = e.credentialType || "access_token", this.issuer = e.issuer, this.authorization = e.authorization || {}, this.sessionKey = e.sessionKey, this.idClaims = e.idClaims, this.accessClaims = e.accessClaims
      }
      static from(e) {
        return new s(e)
      }
      static fromAuthResponse(e) {
        const t = n(17);
        let r = e.decoded && e.decoded.payload || {},
          {
            rp: i
          } = e,
          o = i.registration,
          a = {
            credentialType: (i.defaults.authenticate || {}).credential_type || i.defaults.popToken ? "pop_token" : "access_token",
            sessionKey: e.session[t.SESSION_PRIVATE_KEY],
            issuer: r.iss,
            idClaims: r,
            authorization: {
              client_id: o.client_id,
              access_token: e.params.access_token,
              id_token: e.params.id_token,
              refresh_token: e.params.refresh_token
            }
          };
        return s.from(a)
      }
      get fetch() {
        return (e, t) => Promise.resolve().then(() => this.hasCredentials() ? this.fetchWithCredentials(e, t) : r(e, t)).then(i("Error while fetching resource"))
      }
      bearerTokenFor(e) {
        switch (this.credentialType) {
          case "pop_token":
            return o.issueFor(e, this);
          default:
            return Promise.resolve(this.authorization[this.credentialType])
        }
      }
      hasCredentials() {
        switch (this.credentialType) {
          case "pop_token":
            return !!this.authorization.id_token;
          default:
            return !!this.authorization[this.credentialType]
        }
      }
      fetchWithCredentials(e, t = {}) {
        return t.headers = t.headers || {}, this.bearerTokenFor(e).then(n => (t.headers.authorization = `Bearer ${n}`, r(e, t)))
      }
    }
    e.exports = s
  }, function(e, t, n) {
    "use strict";
    const {
      URL: r
    } = n(6), {
      JWT: i,
      JWK: o
    } = n(3), s = 3600;
    class a extends i {
      static issueFor(e, t) {
        if (!e) throw new Error("Cannot issue PoPToken - missing resource server URI");
        if (!t.sessionKey) throw new Error("Cannot issue PoPToken - missing session key");
        if (!t.authorization.id_token) throw new Error("Cannot issue PoPToken - missing id token");
        let n = JSON.parse(t.sessionKey);
        return o.importKey(n).then(n => {
          let i = {
            aud: new r(e).origin,
            key: n,
            iss: t.authorization.client_id,
            id_token: t.authorization.id_token
          };
          return a.issue(i)
        }).then(e => e.encode())
      }
      static issue(e) {
        let {
          aud: t,
          iss: n,
          key: r
        } = e, i = r.alg, o = e.iat || Math.floor(Date.now() / 1e3), u = {
          alg: i
        }, c = {
          iss: n,
          aud: t,
          exp: o + (e.max || s),
          iat: o,
          id_token: e.id_token,
          token_type: "pop"
        };
        return new a({
          header: u,
          payload: c,
          key: r.cryptoKey
        }, {
          filter: !1
        })
      }
    }
    e.exports = a
  }, function(e, t, n) {
    t = e.exports = s;
    var r = n(69),
      i = n(70),
      o = t;

    function s(e, t, n) {
      if ("string" == typeof e && (e = o[e]), "number" != typeof e) throw new TypeError("Non-numeric HTTP code");
      "object" == typeof t && null != t && (n = t, t = null), r.call(this, t || i[e], n), this.code = e
    }
    for (var a in s.prototype = Object.create(r.prototype, {
        constructor: {
          value: s,
          configurable: !0,
          writable: !0
        }
      }), s.prototype.name = "HttpError", Object.defineProperties(s.prototype, {
        statusCode: u("code"),
        statusMessage: u("message"),
        status: {
          configurable: !0,
          get: function() {
            return this.code
          },
          set: function(e) {
            Object.defineProperty(this, "status", {
              value: e,
              configurable: !0,
              enumerable: !0,
              writable: !0
            })
          }
        }
      }), s.prototype.toString = function() {
        return this.name + ": " + this.code + " " + this.message
      }, i) {
      t[i[a].replace("'", "").replace(/[- ]/g, "_").toUpperCase()] = +a
    }

    function u(e) {
      return {
        configurable: !0,
        get: function() {
          return this[e]
        },
        set: function(t) {
          return this[e] = t
        }
      }
    }
  }, function(e, t) {
    var n = Object.hasOwnProperty,
      r = Object.getPrototypeOf,
      i = Error.captureStackTrace;

    function o(e, t) {
      if (e && "object" == typeof e ? (t = e, e = void 0) : this.message = e, t)
        for (var o in t) this[o] = t[o];
      n.call(this, "name") || (this.name = n.call(r(this), "name") ? this.name : this.constructor.name), !i || "stack" in this || i(this, this.constructor)
    }
    e.exports = o, o.prototype = Object.create(Error.prototype, {
      constructor: {
        value: o,
        configurable: !0,
        writable: !0
      }
    }), o.prototype.name = "StandardError"
  }, function(e) {
    e.exports = JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Unordered Collection","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')
  }, function(e, t, n) {
    const {
      JSONSchema: r
    } = n(1), i = new r({
      type: "object",
      properties: {
        provider: {
          type: "object",
          properties: {
            name: {
              type: "string"
            },
            url: {
              type: "string",
              format: "uri"
            },
            configuration: {},
            jwks: {}
          },
          required: ["url"]
        },
        defaults: {
          type: "object",
          properties: {
            popToken: {
              type: "boolean",
              default: !1
            },
            authenticate: {
              type: "object",
              properties: {
                redirect_uri: {
                  type: "string",
                  format: "uri"
                },
                response_type: {
                  type: "string",
                  default: "id_token token",
                  enum: ["code", "token", "id_token token", "id_token token code"]
                },
                display: {
                  type: "string",
                  default: "page",
                  enum: ["page", "popup"]
                },
                scope: {
                  type: ["string", "array"],
                  default: ["openid"]
                }
              }
            },
            register: {}
          }
        },
        registration: {},
        store: {
          type: "object",
          default: {}
        }
      }
    });
    e.exports = i
  }, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      i = n.n(r),
      o = n(33),
      s = n.n(o);
    n(7);

    function a() {
      return "undefined" != typeof window ? window.location : {
        href: "https://example.org/",
        pathname: "/",
        origin: "example.org"
      }
    }
    const u = () => a().href,
      c = () => a().origin + a().pathname,
      f = e => {
        a().href = e
      },
      l = e => new URL(e).origin,
      p = e => ("string" != typeof e && (e = "url" in e ? e.url : e.toString()), new URL(e, u()).toString()),
      h = "solid-auth-client";
    class d {
      constructor(e, t, n) {
        i()(this, "_clientWindow", void 0), i()(this, "_clientOrigin", void 0), i()(this, "_handler", void 0), i()(this, "_messageListener", void 0), this._clientWindow = e, this._clientOrigin = t, this._handler = n, this._messageListener = e => this._handleMessage(e)
      }
      async _handleMessage(e) {
        let {
          data: t,
          origin: n
        } = e;
        if (n !== this._clientOrigin) return void console.warn("solid-auth-client is listening to ".concat(this._clientOrigin, " ") + "so ignored a message received from ".concat(n, "."));
        const r = t && t[h];
        if (r && r.method) {
          const {
            id: e,
            method: t,
            args: n
          } = r, i = await this._handler(t, ...n);
          this._clientWindow.postMessage({
            [h]: {
              id: e,
              ret: i
            }
          }, this._clientOrigin)
        }
      }
      start() {
        window.addEventListener("message", this._messageListener)
      }
      stop() {
        window.removeEventListener("message", this._messageListener)
      }
    }
    const y = "solid-auth-client",
      g = () => {
        return function(e) {
          return {
            getItem: t => Promise.resolve(e.getItem(t)),
            setItem: (t, n) => Promise.resolve(e.setItem(t, n)),
            removeItem: t => Promise.resolve(e.removeItem(t))
          }
        }("undefined" != typeof window && "localStorage" in window ? window.localStorage : w())
      };
    async function v(e) {
      let t, n;
      try {
        t = await e.getItem(y), n = JSON.parse(t || "{}")
      } catch (e) {
        console.warn("Could not deserialize data:", t), console.error(e), n = {}
      }
      return n
    }
    async function m(e, t) {
      const n = t(await v(e));
      return await e.setItem(y, JSON.stringify(n)), n
    }
    const w = () => {
      const e = {};
      return {
        getItem: t => void 0 === e[t] ? null : e[t],
        setItem: (t, n) => {
          e[t] = n
        },
        removeItem: t => {
          delete e[t]
        }
      }
    };

    function b(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
      }
      return n
    }

    function O(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? b(n, !0).forEach(function(t) {
          i()(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(n).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
      return e
    }
    async function E(e) {
      return (await v(e)).session || null
    }
    var S = n(34),
      k = n.n(S),
      _ = n(35),
      P = n(15),
      j = n.n(P),
      A = n(36),
      T = n.n(A);

    function x(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
      }
      return n
    }

    function R(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? x(n, !0).forEach(function(t) {
          i()(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(n).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
      return e
    }
    async function I(e, t) {
      try {
        const n = await async function(e, t) {
          let n = await N(t.storage);
          n && n.provider.url === e && n.registration.redirect_uris.includes(t.callbackUri) || (n = await
            function(e, t) {
              const {
                storage: n,
                callbackUri: r
              } = t, i = {};
              Object.entries(t).filter(e => {
                let [t, n] = e;
                return t.startsWith("clientName#")
              }).forEach(e => {
                let [t, n] = e;
                return i[t.replace("clientName#", "client_name#")] = n
              });
              const o = {
                  logo_uri: t.logoUri,
                  contacts: t.contacts,
                  client_name: t.clientName
                },
                s = R({
                  issuer: e,
                  grant_types: ["implicit"],
                  redirect_uris: [r],
                  response_types: ["id_token token"],
                  scope: "openid profile"
                }, i, {}, o),
                a = {
                  defaults: {
                    authenticate: {
                      redirect_uri: r,
                      response_type: "id_token token"
                    }
                  },
                  store: n
                };
              return j.a.register(e, s, a)
            }(e, t), await async function(e, t, n) {
              return await m(e, e => R({}, e, {
                rpConfig: n
              })), n
            }(t.storage, 0, n));
          return n
        }(e, t);
        return await async function(e) {
          await m(e, e => R({}, e, {
            appHashFragment: window.location.hash
          }))
        }(t.storage), async function(e, t) {
          let {
            callbackUri: n,
            storage: r
          } = t;
          const i = await v(r),
            o = await e.createRequest({
              redirect_uri: n
            }, i);
          return await m(r, () => i), f(o)
        }(n, t)
      } catch (e) {
        return console.warn("Error logging in with WebID-OIDC"), console.error(e), null
      }
    }
    async function C() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g();
      try {
        const t = await N(e);
        if (!t) return null;
        const n = u();
        if (!/#(.*&)?access_token=/.test(n)) return null;
        window.location.hash = "", await async function(e) {
          await m(e, e => {
            let {
              appHashFragment: t = ""
            } = e, n = k()(e, ["appHashFragment"]);
            return window.location.hash = t, n
          })
        }(e);
        const r = await v(e),
          i = await t.validateResponse(n, r);
        return i ? R({}, i, {
          webId: i.idClaims.sub,
          idp: i.issuer
        }) : null
      } catch (e) {
        return console.warn("Error finding a WebID-OIDC session"), console.error(e), null
      }
    }
    async function N(e) {
      const t = await v(e),
        {
          rpConfig: n
        } = t;
      return n ? (n.store = e, j.a.from(n)) : null
    }
    async function U(e, t, n, r) {
      const i = {},
        o = r ? r.headers : n.headers;
      if (o) {
        const e = "function" == typeof o.entries ? o.entries() : Object.entries(o);
        for (const [t, n] of e) i[t] = n
      }
      const s = await T.a.issueFor(p(n), e);
      return i.authorization = "Bearer ".concat(s), t(n, R({}, r, {
        credentials: "include",
        headers: i
      }))
    }

    function D(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
      }
      return n
    }

    function L(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? D(n, !0).forEach(function(t) {
          i()(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(n).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
      return e
    }

    function M(e) {
      return async t => {
        if (function(e) {
            if (401 !== e.status) return !1;
            const t = e.headers.get("www-authenticate");
            if (!t) return !1;
            const n = _.parse(t);
            return "Bearer" === n.scheme && n.params && "openid webid" === n.params.scope
          }(t)) {
          const {
            host: n
          } = new URL(t.url);
          await
          function(e) {
            return async t => {
              let {
                url: n,
                requiresAuth: r
              } = t;
              await m(e, e => L({}, e, {
                hosts: L({}, e.hosts, {
                  [n]: {
                    requiresAuth: r
                  }
                })
              }))
            }
          }(e)({
            url: n,
            requiresAuth: !0
          })
        }
      }
    }
    async function z(e, t) {
      const n = await
      function(e) {
        return async t => {
          const {
            host: n
          } = new URL(t), r = await E(e);
          if (r && n === new URL(r.idp).host) return {
            url: n,
            requiresAuth: !0
          };
          const {
            hosts: i
          } = await v(e);
          return i && i[n]
        }
      }(e)(p(t));
      return null != n && n.requiresAuth
    }

    function J(e, t, n) {
      return new Promise((r, i) => {
        const o = new d(t, l(n.popupUri || ""), function(e, t, n) {
          let {
            popupUri: r,
            callbackUri: i
          } = t;
          return async function(t) {
            for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
            switch (t) {
              case "getAppOrigin":
                return window.location.origin;
              case "storage/getItem":
                return e.getItem(...s);
              case "storage/setItem":
                return e.setItem(...s);
              case "storage/removeItem":
                return e.removeItem(...s);
              case "getLoginOptions":
                return {
                  popupUri: r, callbackUri: i
                };
              case "foundSession":
                n(...s)
            }
          }
        }(e, n, e => {
          o.stop(), r(e)
        }));
        o.start()
      })
    }

    function q(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
      }
      return n
    }

    function B(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? q(n, !0).forEach(function(t) {
          i()(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(n).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
      return e
    }
    const H = fetch;
    class K extends s.a {
      constructor() {
        super(...arguments), i()(this, "_pendingSession", void 0)
      }
      fetch(e, t) {
        return this.emit("request", p(e)), async function(e, t, n, r) {
          const i = await E(e);
          if (!i) return t(n, r);
          if (await z(e, n)) return U(i, t, n, r);
          let o = await t(n, r);
          return 401 === o.status && (await M(e)(o), await z(e, n) && (o = U(i, t, n, r))), o
        }(g(), H, e, t)
      }
      login(e, t) {
        return I(e, t = B({}, F(c()), {}, t))
      }
      async popupLogin(e) {
        e = B({}, F(), {}, e), /https?:/.test(e.popupUri) || (e.popupUri = new URL(e.popupUri || "/.well-known/solid/login", window.location).toString()), e.callbackUri || (e.callbackUri = e.popupUri);
        const t = function(e) {
            const t = window.screenX + (window.innerWidth - 650) / 2,
              n = window.screenY + (window.innerHeight - 400) / 2,
              r = "width=".concat(650, ",height=").concat(400, ",left=").concat(t, ",top=").concat(n);
            return window.open(e, "solid-auth-client", r)
          }(e.popupUri),
          n = await J(e.storage, t, e);
        return this.emit("login", n), this.emit("session", n), n
      }
      async currentSession() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g(),
          t = this._pendingSession || await E(e);
        if (!t) {
          try {
            this._pendingSession = C(e), t = await this._pendingSession
          } catch (e) {
            console.error(e)
          }
          t && (await
            function(e) {
              return async t => {
                return (await m(e, e => O({}, e, {
                  session: t
                }))).session
              }
            }(e)(t), this.emit("login", t), this.emit("session", t)), delete this._pendingSession
        }
        return t
      }
      async trackSession(e) {
        e(await this.currentSession()), this.on("session", e)
      }
      stopTrackSession(e) {
        this.removeListener("session", e)
      }
      async logout() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g();
        if (await E(e)) {
          try {
            await async function(e, t) {
              const n = await N(e);
              if (n) try {
                await n.logout();
                try {
                  await t("/.well-known/solid/logout", {
                    credentials: "include"
                  })
                } catch (e) {}
              } catch (e) {
                console.warn("Error logging out of the WebID-OIDC session"), console.error(e)
              }
            }(e, H), this.emit("logout"), this.emit("session", null)
          } catch (e) {
            console.warn("Error logging out:"), console.error(e)
          }
          await async function(e) {
            await m(e, e => O({}, e, {
              session: null
            }))
          }(e)
        }
      }
    }

    function F(e) {
      return {
        callbackUri: e ? e.split("#")[0] : "",
        popupUri: "",
        storage: g()
      }
    }
    const Y = new K;
    t.default = Y;
    if (Object.getOwnPropertyNames(K.prototype).forEach(e => {
        const t = Y[e];
        "function" == typeof t && (Y[e] = t.bind(Y))
      }), "undefined" != typeof window)
      if ("SolidAuthClient" in window) console.warn("Caution: multiple versions of solid-auth-client active.");
      else {
        let e = !1;
        Object.defineProperty(window, "SolidAuthClient", {
          enumerable: !0,
          get: () => (e || (e = !0, console.warn("window.SolidAuthClient has been deprecated."), console.warn("Please use window.solid.auth instead.")), Y)
        })
      }
  }]).default
});
//# sourceMappingURL=solid-auth-client.bundle.js.map
